const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');

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
          type: 'asset/resource',  // Change from image-webpack-loader
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
        '@dynamic': path.resolve(__dirname, 'src/dynamic')
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
          NODE_ENV: JSON.stringify(isProd ? 'production' : 'development')
        }
      }),
      new CopyWebpackPlugin({
        patterns: [
          // Copy background image from shared assets
          { 
            from: path.resolve(__dirname, 'src/shared/assets/images'),
            to: path.resolve(__dirname, 'dist/static/images')
          },
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
          // New pattern to copy netlify.toml to dist root
          { 
            from: path.resolve(__dirname, 'netlify.toml'),
            to: path.resolve(__dirname, 'dist/static/netlify.toml') // Specify full path
          },
          { 
            from: path.resolve(__dirname, 'src/service-worker.js'),
            to: path.resolve(__dirname, 'dist/static/service-worker.js')  // For static sites
          }
        ]
      })
    ],
    optimization: {
      splitChunks: {
        chunks: 'all',
        maxInitialRequests: 5,
        cacheGroups: {
          vendor: {
            test: /[\\/]node_modules[\\/]/,
            name: 'vendors',
            chunks: 'all',
          },
        },
      },
      runtimeChunk: 'single'
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
      })
    }
  };
};
