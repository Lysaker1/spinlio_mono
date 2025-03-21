const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const dotenv = require('dotenv');
const fs = require('fs');
const TerserPlugin = require('terser-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env, options) => {
  const isProd = options.mode === 'production';
  const isWebpackServe = env?.WEBPACK_SERVE || process.env.WEBPACK_SERVE;
  
  // Define paths for the project
  const currentPath = __dirname;

  // Prepare the environment variables
  const envPath = path.resolve(currentPath, isProd ? '.env.production' : '.env.development');
  const fileEnv = dotenv.config({ path: envPath }).parsed || {};
  
  // Prepare the environment variables for webpack
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  // Process-provided env vars (e.g. from Heroku)
  const processEnv = {
    NODE_ENV: process.env.NODE_ENV,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME
  };
  
  // Merge all environment variables with priority to process env vars
  const finalEnv = { ...processEnv, ...envKeys };
  
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
        https://***REMOVED***.supabase.co
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
    /*{
      from: path.resolve(currentPath, 'public/assets/icons'),
      to: 'assets/icons'
    },*/
    {
      from: path.resolve(currentPath, '../../shared/assets'),
      to: 'assets'
    }/*,
    {
      from: path.resolve(currentPath, 'public/_redirects'),
      to: '_redirects'
    }*/
  ];

  // Get mode from options
  const mode = options.mode || 'development';
  const analyze = process.env.ANALYZE === 'true';

  // Base configuration
  const config = {
    mode: mode,
    entry: {
      main: path.resolve(currentPath, 'src/index.tsx'),
    },
    output: {
      filename: isProd ? '[name].[contenthash].js' : '[name].js',
      path: path.resolve(currentPath, 'dist'),
      publicPath: '/',
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
      extensions: ['.tsx', '.ts', '.js', '.jsx'],
      alias: {
        '@shared': path.resolve(currentPath, '../../shared'),
        '@': path.resolve(currentPath, 'src'),
        'three': path.resolve(process.cwd(), 'node_modules/three'),
        'react': path.resolve(process.cwd(), 'node_modules/react'),
        'react-dom': path.resolve(process.cwd(), 'node_modules/react-dom'),
        '@shapediver/viewer': path.resolve(process.cwd(), 'node_modules/@shapediver/viewer'),
        '@mantine/form': path.resolve(process.cwd(), 'node_modules/@mantine/form'),
        '@mantine/core': path.resolve(process.cwd(), 'node_modules/@mantine/core'),
        '@mantine/hooks': path.resolve(process.cwd(), 'node_modules/@mantine/hooks'),
        '@mantine/notifications': path.resolve(process.cwd(), 'node_modules/@mantine/notifications'),
        '@tabler/icons-react': path.resolve(process.cwd(), 'node_modules/@tabler/icons-react'),
        '@emotion/react': path.resolve(process.cwd(), 'node_modules/@emotion/react'),
        '@emotion/styled': path.resolve(process.cwd(), 'node_modules/@emotion/styled'),
        '@react-three/drei': path.resolve(process.cwd(), 'node_modules/@react-three/drei'),
        '@react-three/fiber': path.resolve(process.cwd(), 'node_modules/@react-three/fiber'),
      },
      modules: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(currentPath, 'node_modules'),
        'node_modules',
      ],
      fallback: {
        "fs": false,
        "path": false,
        "tls": false,
        "net": false,
        "zlib": false,
        "http": false,
        "https": false,
        "stream": false,
        "crypto": false,
        "util": false,
        "url": false,
        "assert": false,
        "os": false,
      }
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(currentPath, 'public', 'index.html'),
        filename: 'index.html',
      }),
      new CopyWebpackPlugin({
        patterns: [
          { from: path.resolve(currentPath, 'public/favicon.ico'), to: '' },
          { from: path.resolve(currentPath, 'public/logo192.png'), to: '' },
          { from: path.resolve(currentPath, 'public/logo512.png'), to: '' },
          { from: path.resolve(currentPath, '../../shared/assets'), to: 'shared/assets' },
        ],
      }),
      new webpack.DefinePlugin(envKeys),
      new webpack.DefinePlugin({
        'process.env': JSON.stringify(process.env)
      }),
    ].filter(Boolean),
    optimization: {
      minimize: isProd,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            compress: {
              drop_console: isProd,
            },
          },
        }),
      ],
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
      hot: true,
      historyApiFallback: true,
      port: 3000,
      headers: {
        'Content-Security-Policy': cspHeaders['Content-Security-Policy'],
        'X-Content-Security-Policy': cspHeaders['Content-Security-Policy'],
        'X-WebKit-CSP': cspHeaders['Content-Security-Policy'],
      },
    }
  };

  // Add Bundle Analyzer Plugin in analyze mode
  if (analyze) {
    config.plugins.push(new BundleAnalyzerPlugin());
  }

  return config;
}; 