const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const isDevelopment = process.env.NODE_ENV !== 'production';

module.exports = (env) => {
  // Environment handling
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + (env.ENVIRONMENT || process.env.NODE_ENV || 'development');
  
  // Load environment variables
  const baseEnv = dotenv.config({ path: basePath }).parsed || {};
  const environmentEnv = fs.existsSync(envPath) 
    ? dotenv.config({ path: envPath }).parsed 
    : {};
  
  const herokuEnv = {
    NODE_ENV: process.env.NODE_ENV,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
  };
  
  const finalEnv = { ...baseEnv, ...environmentEnv, ...herokuEnv };
  
  const isProd = env.ENVIRONMENT === 'production';

  // CSP headers
  const cspHeaders = {
    'Content-Security-Policy': `
      default-src 'self'; 
      script-src 'self' 'unsafe-eval' 'unsafe-inline' 
        https://static.klaviyo.com
        https://www.googletagmanager.com
        https://*.klaviyo.com
        https://*.hsforms.com 
        https://*.hubspot.com
        https://*.auth0.com
        https://js.hsforms.net; 
      style-src 'self' 'unsafe-inline' 
        https://static.klaviyo.com
        https://*.klaviyo.com
        https://fonts.googleapis.com; 
      connect-src 'self' ws: wss: http: https: localhost:* blob:
        https://static.klaviyo.com
        https://*.klaviyo.com
        https://*.spinlio.com 
        https://www.google-analytics.com
        https://*.shapediver.com
        https://*.auth0.com
        https://api.spinlio.com; 
      font-src 'self' data:
        https://static.klaviyo.com
        https://*.klaviyo.com;
      img-src 'self' data: blob:
        https://static.klaviyo.com
        https://*.klaviyo.com
        https://res.cloudinary.com
        https://*.cloudinary.com

    `.replace(/\s+/g, ' ')
  }

  const copyPluginPatterns = isDevelopment ? [
    {
      from: 'public/assets/icons',
      to: 'assets/icons'
    },
    {
      from: 'src/shared/assets',
      to: 'static/assets'
    },
    {
      from: 'public/_redirects',
      to: 'static/_redirects'
    },
    {
      from: 'netlify.toml',
      to: 'static/netlify.toml'
    }
  ] : [
    {
      from: path.resolve(__dirname, 'dist/static'),
      to: path.resolve(__dirname, 'dist/dynamic/static'),
      filter: (resourcePath) => {
        return (
          resourcePath.includes('/images/') ||
          resourcePath.includes('/_redirects') ||
          resourcePath.includes('/netlify.toml')
        );
      }
    }
  ];

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      main: [
        // Add this only in development
        isDevelopment && 'webpack-dev-server/client?hot=true',
        './src/dynamic/index.tsx'
      ].filter(Boolean)
    },
    output: {
      path: path.resolve(__dirname, 'dist/dynamic'),
      filename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      publicPath: '/',
      clean: true,
      crossOriginLoading: 'anonymous'
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: [
            {
              loader: 'ts-loader',
              options: {
                transpileOnly: true
              }
            }
          ],
          exclude: /node_modules/
        },
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif|svg)$/i,
          type: 'asset/resource',
          generator: {
            filename: 'images/[name][ext]'
          }
        },
        {
          test: /three\/examples\/jsm/,
          use: 'babel-loader',
        }
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
      alias: {
        'three': path.resolve(__dirname, 'node_modules/three'),
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@static': path.resolve(__dirname, 'src/static'),
        '@dynamic': path.resolve(__dirname, 'src/dynamic'),
        'react': path.resolve(__dirname, 'node_modules/react'),
        'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
        '@shapediver/viewer': path.resolve('./node_modules/@shapediver/viewer'),
      },
      fallback: {
        "fs": false,
        "path": false
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
          BASE_URL: isProd 
            ? 'https://design.spinlio.com' 
            : 'http://localhost:3001'
        },
        minify: isProd ? {
          removeComments: true,
          collapseWhitespace: true,
          removeRedundantAttributes: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          minifyJS: true,
          minifyCSS: true,
          minifyURLs: true,
        } : false,
        meta: {
          'Content-Security-Policy': {
            'http-equiv': 'Content-Security-Policy',
            content: cspHeaders['Content-Security-Policy']
          }
        }
      }),
      new CopyWebpackPlugin({
        patterns: [
          {
            from: 'public/assets/icons',
            to: 'assets/icons'
          },
          {
            from: path.resolve(__dirname, 'src/service-worker.js'),
            to: path.resolve(__dirname, 'dist/dynamic/service-worker.js')
          }
        ]
      }),
      new webpack.DefinePlugin({
        'process.env': Object.keys(finalEnv).reduce((env, key) => {
          env[key] = JSON.stringify(finalEnv[key]);
          return env;
        }, {})
      }),
      new CompressionPlugin({
        test: /\.(js|css|html|svg)$/,
        algorithm: 'gzip'
      }),
      process.env.ANALYZE && new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false
      }),
    ].filter(Boolean),
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 4,
        cacheGroups: {
          framework: {
            test: /[\\/]node_modules[\\/](react|react-dom|@emotion|@mantine)[\\/]/,
            name: 'framework',
            priority: 40,
            chunks: 'all',
            enforce: true
          },
          three: {
            test: /[\\/]node_modules[\\/](three|@react-three)[\\/]/,
            name: 'vendor.three',
            chunks: 'all',
            priority: 40,
            enforce: true,
            reuseExistingChunk: true
          },
          shapediver: {
            test: /[\\/]node_modules[\\/](@shapediver)[\\/]/,
            name: 'vendor.shapediver',
            chunks: 'all',
            priority: 35,
            enforce: true,
            reuseExistingChunk: true
          },
          vendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            priority: 20,
            chunks: 'all',
            minSize: 100000,
            enforce: true
          }
        }
      },
      runtimeChunk: {
        name: 'runtime'
      },
      moduleIds: 'deterministic',
      chunkIds: 'deterministic',
      usedExports: true,
      sideEffects: true
    },
    performance: {
      hints: false, // Disable size warnings
      maxEntrypointSize: 10000000,
      maxAssetSize: 10000000
    },
    // ... rest of the config stays the same ...
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: finalEnv.PORT_DYNAMIC || 3001,
      historyApiFallback: {
        disableDotRule: true,
        rewrites: [
          { from: /^\/vulz/, to: '/index.html' },
          { from: /^\/supplier/, to: '/index.html' },
          { from: /^\/configurator/, to: '/index.html' },
          { from: /./, to: '/index.html' }
        ]
      },
      hot: false,
      liveReload: false,
      client: {
        overlay: {
          errors: true,
          warnings: false,
        },
        progress: true,
        reconnect: false
      },
      headers: {
        ...cspHeaders,
        "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
      proxy: [
        {
          context: ['/shapediver'],
          target: 'https://sdr8euc1.eu-central-1.shapediver.com',
          changeOrigin: true,
          secure: false,
        }
      ],
      devMiddleware: {
        writeToDisk: false, // Change to false
      },
      watchFiles: {
        paths: ['src/**/*'],
        options: {
          usePolling: false,
        }
      }
    }
  };
};