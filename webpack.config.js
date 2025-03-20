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
  const rootPath = path.join(__dirname, '../../..');
  const currentPath = path.join(__dirname);
  const rootEnvPath = rootPath + '/.env';
  const envPath = rootEnvPath + '.' + (env.ENVIRONMENT || process.env.NODE_ENV || 'development');
  
  // Load environment variables
  const rootEnv = dotenv.config({ path: rootEnvPath }).parsed || {};
  const environmentEnv = fs.existsSync(envPath) 
    ? dotenv.config({ path: envPath }).parsed 
    : {};
  
  // Process-provided env vars (e.g. from Heroku)
  const processEnv = {
    NODE_ENV: process.env.NODE_ENV,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
  };
  
  // Merge all environment variables with priority to process env vars
  const finalEnv = { ...rootEnv, ...environmentEnv, ...processEnv };
  
  const isProd = env.ENVIRONMENT === 'production';

  // CSP headers
  const cspHeaders = {
    'Content-Security-Policy': `
      default-src 'self' data:; 
      script-src 'self' 'unsafe-eval' 'unsafe-inline' blob:
        https://static.klaviyo.com
        https://www.googletagmanager.com
        https://*.klaviyo.com
        https://*.hsforms.com 
        https://*.hubspot.com
        https://*.auth0.com
        https://*.cloudflareinsights.com
        https://static.cloudflareinsights.com
        https://js.hsforms.net; 
      style-src 'self' 'unsafe-inline' 
        https://static.klaviyo.com
        https://*.klaviyo.com
        https://fonts.googleapis.com
        https://fonts.gstatic.com;
      connect-src 'self' ws: wss: http: https: data: localhost:* blob:
        https://static.klaviyo.com
        https://*.klaviyo.com
        https://*.bazaar.it 
        https://www.google-analytics.com
        https://*.shapediver.com
        https://*.auth0.com
        https://*.cloudflareinsights.com
        https://api.bazaar.it; 
      font-src 'self' data:
        https://static.klaviyo.com
        https://*.klaviyo.com
        https://fonts.gstatic.com;
      img-src 'self' data: blob:
        http://localhost:3003
        https://api.bazaar.it
        https://*.bazaar.it
        https://egvuknlirjkhhhoooecl.supabase.co
        *;
      worker-src 'self' blob: data:
        http://localhost:3001
        http://localhost:3002
        http://localhost:3003
        https://www.gstatic.com
        *;
      frame-src 'self' https://*.auth0.com https://auth.spinlio.com https://*.bazaar.it;
    `.replace(/\s+/g, ' ')
  };

  // Public assets to copy
  const copyPluginPatterns = [
    {
      from: path.resolve(rootPath, 'public/assets/icons'),
      to: 'assets/icons'
    },
    {
      from: path.resolve(rootPath, 'src/shared/assets'),
      to: 'assets'
    },
    {
      from: path.resolve(rootPath, 'public/_redirects'),
      to: '_redirects'
    }
  ];

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      main: [
        // Add this only in development
        isDevelopment && 'webpack-dev-server/client?hot=true',
        './src/index.tsx'
      ].filter(Boolean)
    },
    output: {
      path: path.resolve(currentPath, 'dist'),
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
          use: ['style-loader', 'css-loader', 'postcss-loader'],
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
        '@shared': path.resolve(rootPath, 'src/shared'),
        '@': path.resolve(currentPath, 'src'),
        'three': path.resolve(rootPath, 'node_modules/three'),
        'react': path.resolve(rootPath, 'node_modules/react'),
        'react-dom': path.resolve(rootPath, 'node_modules/react-dom'),
        '@shapediver/viewer': path.resolve(rootPath, 'node_modules/@shapediver/viewer'),
        '@mantine/form': path.resolve(rootPath, 'node_modules/@mantine/form'),
        '@mantine/core': path.resolve(rootPath, 'node_modules/@mantine/core'),
        '@mantine/hooks': path.resolve(rootPath, 'node_modules/@mantine/hooks'),
        '@mantine/notifications': path.resolve(rootPath, 'node_modules/@mantine/notifications'),
        '@tabler/icons-react': path.resolve(rootPath, 'node_modules/@tabler/icons-react'),
        '@emotion/react': path.resolve(rootPath, 'node_modules/@emotion/react'),
        '@react-three/drei': path.resolve(rootPath, 'node_modules/@react-three/drei'),
        '@react-three/fiber': path.resolve(rootPath, 'node_modules/@react-three/fiber'),
        'node_modules': path.resolve(rootPath, 'node_modules')
      },
      fallback: {
        "fs": false,
        "path": false
      },
      modules: [
        'node_modules',
        path.resolve(rootPath, 'node_modules')
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(rootPath, 'public/index.html'),
        templateParameters: {
          BASE_URL: isProd 
            ? 'https://design.bazaar.it' 
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
        patterns: copyPluginPatterns
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
      env.ANALYZE && new BundleAnalyzerPlugin({
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
    devServer: {
      static: {
        directory: path.join(currentPath, 'public'),
      },
      compress: true,
      port: finalEnv.PORT_FRONTEND || 3001,
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
        writeToDisk: false,
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