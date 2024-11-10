const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  // Environment handling
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + (env.ENVIRONMENT || process.env.NODE_ENV || 'development');
  
  // Define isProd
  const isProd = env.ENVIRONMENT === 'production' || process.env.NODE_ENV === 'production';
  
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
  
  const envKeys = Object.keys(finalEnv || {}).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(finalEnv[next]);
    return prev;
  }, {});

  return {
    entry: './src/static/index.tsx', // Changed entry point
    output: {
      path: path.resolve(__dirname, 'dist/static'), // Changed output path
      filename: '[name].[contenthash].js',
      publicPath: '/'
    },
    devtool: isProd ? false : 'source-map',  
    module: {
      rules: [
        {
          test: /\.(ts|tsx)$/,
          use: 'ts-loader',
          include: path.resolve(__dirname, 'src'),
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        {
          test: /\.(png|jpe?g|gif)$/i,
          type: 'asset',
          parser: {
            dataUrlCondition: {
              maxSize: 8 * 1024 // 8kb
            }
          },
          generator: {
            filename: 'images/[name].[contenthash][ext]'
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
        react: path.resolve('./node_modules/react'),
        'react-dom': path.resolve('./node_modules/react-dom'),
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin({
        'process.env': {
          ...envKeys,
        }
      }),
      new CopyWebpackPlugin({
        patterns: [
          // Copy background image from shared assets
          // Copy from src/static/public
          { 
            from: path.resolve(__dirname, 'src/static/public'),
            to: path.resolve(__dirname, 'dist/static')
          },
          // Copy from root public folder
          { 
            from: path.resolve(__dirname, 'public/_redirects'),
            to: path.resolve(__dirname, 'dist/static')
          },
          // Copy netlify.toml
          { 
            from: path.resolve(__dirname, 'netlify.toml'),
            to: path.resolve(__dirname, 'dist/static')
          },
          // Copy service worker
          { 
            from: path.resolve(__dirname, 'src/service-worker.js'),
            to: path.resolve(__dirname, 'dist/static/service-worker.js')
          }
        ]
      }),
      process.env.ANALYZE && new BundleAnalyzerPlugin()
    ].filter(Boolean),
    optimization: {
      nodeEnv: 'production',
      minimize: true,
      runtimeChunk: 'single',
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 4,
        minSize: 100000,
        cacheGroups: {
          core: {
            test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
            name: 'vendor.core',
            chunks: 'all',
            priority: 40,
          },
          router: {
            test: /[\\/]node_modules[\\/](react-router|react-router-dom)[\\/]/,
            name: 'vendor.router',
            chunks: 'all',
            priority: 35,
          },
          ui: {
            test: /[\\/]node_modules[\\/](@mantine|@emotion)[\\/]/,
            name: 'vendor.ui',
            chunks: 'all',
            priority: 30,
          },
          common: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendor.common',
            chunks: 'all',
            priority: 20,
            reuseExistingChunk: true,
          }
        },
      },
      moduleIds: 'deterministic'
    },
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: finalEnv.PORT_STATIC || 3000,
      historyApiFallback: true,
      webSocketServer: false, // Add this line
      ...(isProd ? {} : {
        proxy: [{
          context: ['/configurator'],
          target: 'http://localhost:3001',
          changeOrigin: true,
        }, {
          context: ['/contact'],
          target: 'http://localhost:3001',
          changeOrigin: true,
        }]
      }),
      // Add these headers
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      }
    }
  };
};
