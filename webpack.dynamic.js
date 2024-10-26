const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
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
    entry: './src/dynamic/index.tsx', // Changed entry point
    output: {
      path: path.resolve(__dirname, 'dist/dynamic'), // Changed output path
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
        'three': path.resolve('./node_modules/three')  // Keep the three.js alias
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: './public/index.html',
      }),
      new webpack.DefinePlugin(envKeys),
    ],
    devServer: {
      static: {
        directory: path.join(__dirname, 'public'),
      },
      compress: true,
      port: finalEnv.PORT_DYNAMIC || 3001,  // Use environment variable
      historyApiFallback: true,
      headers: {
        'Content-Security-Policy': `
          default-src 'self'; 
          script-src 'self' 'unsafe-eval' 'unsafe-inline' https://js.hsforms.net https://*.hsforms.com https://*.hubspot.com; 
          style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://*.hsforms.com https://*.hubspot.com; 
          img-src 'self' data: blob: https://*.hsforms.com https://*.hubspot.com https://res.cloudinary.com; 
          media-src 'self' blob:; 
          connect-src 'self' ws: wss: https: https://*.hubspot.com https://*.hsforms.com; 
          worker-src 'self' blob:; 
          font-src 'self' https://fonts.gstatic.com https://*.hsforms.com; 
          frame-src https://*.hsforms.com https://*.hubspot.com; 
          form-action https://*.hsforms.com https://*.hubspot.com;
        `.replace(/\s+/g, ' ')
      }
    },
  };
};
