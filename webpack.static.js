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
  const envPath = basePath + '.' + (env.ENVIRONMENT || 'development');
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;
  
  // Load both .env and environment-specific .env
  const baseEnv = dotenv.config({ path: basePath }).parsed || {};
  const environmentEnv = fs.existsSync(envPath) 
    ? dotenv.config({ path: envPath }).parsed 
    : {};
  
  const finalEnv = { ...baseEnv, ...environmentEnv };
  
  const envKeys = Object.keys(finalEnv || {}).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(finalEnv[next]);
    return prev;
  }, {});

  return {
    entry: './src/static/index.tsx', // Changed entry point
    output: {
      path: path.resolve(__dirname, 'dist/static'), // Changed output path
      filename: 'bundle.js',
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
        '@dynamic': path.resolve(__dirname, 'src/dynamic')
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
      new CopyWebpackPlugin({
        patterns: [
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
        }
        ]
      })
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: finalEnv.PORT_STATIC || 3000,
      historyApiFallback: true,
      proxy: [{
        context: ['/configurator'],
        target: 'https://configurator.spinlio.com',
        changeOrigin: true,
      }, {
        context: ['/contact'],
        target: 'https://contact.spinlio.com',
        changeOrigin: true,
        }]
    }
  };
};