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
      script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.hsforms.net https://*.hsforms.com https://*.hubspot.com; 
      style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.hsforms.com https://*.hubspot.com; 
      img-src 'self' data: blob: https://*.hsforms.com https://*.hubspot.com https://res.cloudinary.com; 
      media-src 'self' blob:; 
      connect-src 'self' ws: wss: https: https://*.spinlio.com https://*.shapediver.com https://*.hubspot.com https://*.hsforms.com; 
      worker-src 'self' blob:; 
      font-src 'self' https://fonts.gstatic.com https://*.hsforms.com; 
      frame-src https://*.hsforms.com https://*.hubspot.com; 
      form-action https://*.hsforms.com https://*.hubspot.com;
    `.replace(/\s+/g, ' ')
  };

  const copyPluginPatterns = isDevelopment ? [
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
      main: './src/dynamic/index.tsx'
    },
    output: {
      path: path.resolve(__dirname, 'dist/dynamic'),
      filename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      publicPath: '/',
      clean: true
    },
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          include: path.resolve(__dirname, 'src'),
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
        }
      ],
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@shared': path.resolve(__dirname, 'src/shared'),
        '@static': path.resolve(__dirname, 'src/static'),
        '@dynamic': path.resolve(__dirname, 'src/dynamic'),
        'three': path.resolve('./node_modules/three')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
        templateParameters: {
          BASE_URL: isProd 
            ? 'https://configurator.spinlio.com' 
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
        } : false
      }),
      new CopyWebpackPlugin({
        patterns: [
          // ... your existing patterns
          {
            from: path.resolve(__dirname, 'src/service-worker.js'),
            to: path.resolve(__dirname, 'dist/dynamic/service-worker.js')  // For dynamic sites
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
      process.env.ANALYZE && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 10,
        minSize: 100000,
        maxSize: 2000000,
        cacheGroups: {
          shapediverDraco: {
            test: (module) => {
              const isMatch = module.resource && 
                             module.resource.includes('draco_decoder.js');
              if (isMatch) console.log('Found Draco:', module.resource);
              return isMatch;
            },
            name: 'draco',
            chunks: 'async',
            priority: 100,
            enforce: true
          },
          shapediverThree: {
            test: (module) => {
              const isMatch = module.resource && 
                             module.resource.includes('three.module.js');
              if (isMatch) console.log('Found Three:', module.resource);
              return isMatch;
            },
            name: 'three',
            chunks: 'async',
            priority: 90,
            enforce: true
          },
          defaultVendors: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor',
            chunks: 'all',
            priority: -10
          }
        }
      },
      runtimeChunk: 'single',
      minimize: isProd,
      moduleIds: 'deterministic'
    },
    performance: {
      hints: false, // Disable size warnings
      maxEntrypointSize: 10000000,
      maxAssetSize: 10000000
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: finalEnv.PORT_DYNAMIC || 3001,
      historyApiFallback: true,
      headers: cspHeaders,
      hot: true
    },
    ...(isProd ? {} : { devtool: 'source-map' })
  };
};
