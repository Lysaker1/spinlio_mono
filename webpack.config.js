const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require('webpack');
const dotenv = require('dotenv');
const fs = require('fs');
const CompressionPlugin = require('compression-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = (env) => {
  // Environment handling
  const currentPath = __dirname;
  const envPath = path.join(currentPath, env?.ENVIRONMENT === 'production' ? '.env.production' : '.env.development');
  
  // Load environment variables
  const envConfig = dotenv.config({ path: envPath }).parsed || {};
  
  // Process-provided env vars (e.g. from Heroku)
  const processEnv = {
    NODE_ENV: process.env.NODE_ENV,
    CORS_ORIGIN: process.env.CORS_ORIGIN,
    API_URL: process.env.API_URL,
    AUTH0_DOMAIN: process.env.AUTH0_DOMAIN
  };
  
  // Merge all environment variables with priority to process env vars
  const finalEnv = { ...envConfig, ...processEnv };
  const isProd = env?.ENVIRONMENT === 'production' || process.env.NODE_ENV === 'production';

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
        http://localhost:3002
        http://localhost:3002/*
        http://localhost:3003
        https://www.gstatic.com
        *;
    `.replace(/\s+/g, ' ')
  };

  return {
    mode: isProd ? 'production' : 'development',
    entry: {
      main: path.resolve(__dirname, 'index.tsx')
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: isProd ? '[name].[contenthash].js' : '[name].bundle.js',
      chunkFilename: isProd ? '[name].[contenthash].chunk.js' : '[name].chunk.js',
      publicPath: '/',
      clean: true
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
          // Skip processing the standalone tailwind.css file
          test: /\.css$/,
          exclude: /public\/tailwind\.css$/,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
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
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.mjs'],
      alias: {
        '@marketplace': path.resolve(currentPath, 'src'),
        '@shared': path.resolve(currentPath, 'src/shared'),
        '@shared/components': path.resolve(currentPath, 'src/shared/components'),
        '@shared/hooks': path.resolve(currentPath, 'src/shared/hooks'),
        '@shared/assets': path.resolve(currentPath, 'src/shared/assets'),
        'react': path.resolve(__dirname, '../../../node_modules/react'),
        'react-dom': path.resolve(__dirname, '../../../node_modules/react-dom'),
        '@mantine/form': path.resolve(__dirname, '../../../node_modules/@mantine/form'),
        '@mantine/core': path.resolve(__dirname, '../../../node_modules/@mantine/core'),
        '@mantine/hooks': path.resolve(__dirname, '../../../node_modules/@mantine/hooks'),
        '@mantine/notifications': path.resolve(__dirname, '../../../node_modules/@mantine/notifications'),
        '@tabler/icons-react': path.resolve(__dirname, '../../../node_modules/@tabler/icons-react'),
        '@emotion/react': path.resolve(__dirname, '../../../node_modules/@emotion/react'),
        '@emotion/styled': path.resolve(__dirname, '../../../node_modules/@emotion/styled'),
      },
      fallback: {
        "fs": false,
        "path": false
      },
      modules: [
        path.resolve(process.cwd(), 'node_modules'),
        path.resolve(currentPath, 'node_modules'),
        path.resolve(__dirname, '../../../node_modules'),
        'node_modules',
      ]
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        template: path.resolve(currentPath, 'public/index.html'),
        templateParameters: {
          BASE_URL: isProd 
            ? 'https://marketplace.bazaar.it' 
            : 'http://localhost:3002'
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
            from: path.resolve(currentPath, 'public/assets'),
            to: 'assets',
            noErrorOnMissing: true
          },
          {
            from: path.resolve(currentPath, '../../shared/assets'),
            to: 'assets',
            noErrorOnMissing: true
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
      }
    },
    performance: {
      hints: false, 
      maxEntrypointSize: 10000000,
      maxAssetSize: 10000000
    },
    devServer: {
      static: {
        directory: path.join(currentPath, 'public'),
      },
      compress: true,
      port: 3002,
      historyApiFallback: true,
      hot: true,
      headers: {
        ...cspHeaders,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
        "Access-Control-Allow-Headers": "X-Requested-With, content-type, Authorization"
      },
      proxy: [
        {
          context: ['/api'],
          target: 'http://localhost:3003',
          changeOrigin: true,
          secure: false,
        }
      ]
    }
  };
}; 