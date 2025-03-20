const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const compression = require('compression');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Configure trust proxy properly for Heroku
app.set('trust proxy', 1);

// Rate limiter configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  trustProxy: true,
  skip: (req) => {
    // Skip rate limiting for static assets and health checks
    return req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map)$/) ||
           req.path.includes('static/') ||
           req.path.includes('assets/') ||
           req.path === '/health';
  }
});

// CORS configuration
app.use(cors({
  origin: function(origin, callback) {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'http://localhost:3002',
      'http://localhost:3003',
      'http://localhost:3004',
      'https://bazaar.it',
      'https://design.bazaar.it',
      'https://marketplace.bazaar.it',
      'https://api.bazaar.it',
      'https://auth.bazaar.it',
      'https://www.herokucdn.com',
      'https://viewer.shapediver.com',
      'https://res.cloudinary.com',
      'https://dev-jxcml1qpmbgabh6v.us.auth0.com'
    ];
    
    // Allow requests with no origin (like mobile apps or curl requests)
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Blocked origin:', origin);
      }
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Cross-Origin-Resource-Policy', 'Cross-Origin-Embedder-Policy', 'Authorization'],
  optionsSuccessStatus: 200
}));

// Security configurations with helmet
app.use(helmet({
  contentSecurityPolicy: false // Disabled for development - enable and configure for production
}));

// Enable compression
app.use(compression());

// Apply rate limiter
app.use(limiter);

// Block sensitive file access
app.use((req, res, next) => {
  const blockedPaths = ['.env', '.git', 'wp', 'wordpress', 'telescope'];
  if (blockedPaths.some(path => req.path.toLowerCase().includes(path))) {
    return res.status(404).send('Not found');
  }
  next();
});

// Simple request logger
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin || 'unknown'}`);
  next();
});

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Setup proxies to our sub-applications
const setupProxies = () => {
  // API proxy - all /api/* requests
  app.use('/api', createProxyMiddleware({
    target: process.env.API_URL || 'http://localhost:3003',
    changeOrigin: true,
    pathRewrite: {
      '^/api': '/api'
    },
    logLevel: 'debug'
  }));

  // Design app proxy - for /design/* or direct access
  app.use(['/design', '/'], createProxyMiddleware(
    (pathname) => pathname.startsWith('/design') || pathname === '/',
    {
      target: process.env.DESIGN_URL || 'http://localhost:3001',
      changeOrigin: true,
      logLevel: 'debug'
    }
  ));

  // Marketplace app proxy - for /marketplace/* paths
  app.use('/marketplace', createProxyMiddleware({
    target: process.env.MARKETPLACE_URL || 'http://localhost:3002',
    changeOrigin: true,
    pathRewrite: {
      '^/marketplace': '/'
    },
    logLevel: 'debug'
  }));
};

// Main landing page when not proxying
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Bazaar Apps</title>
        <style>
          body { font-family: Arial, sans-serif; max-width: 800px; margin: 0 auto; padding: 20px; }
          h1 { color: #333; }
          .app-list { display: flex; flex-wrap: wrap; gap: 20px; margin-top: 30px; }
          .app-card { border: 1px solid #ddd; border-radius: 8px; padding: 20px; width: 300px; }
          .app-card h2 { margin-top: 0; }
          .app-card a { display: inline-block; margin-top: 10px; padding: 8px 16px; 
                      background: #0070f3; color: white; border-radius: 4px; text-decoration: none; }
          .env-info { margin-top: 40px; background: #f7f7f7; padding: 15px; border-radius: 8px; }
          .env-info pre { overflow-x: auto; }
        </style>
      </head>
      <body>
        <h1>Bazaar Application Suite</h1>
        <p>Welcome to the Bazaar application suite. Choose an application to launch:</p>
        
        <div class="app-list">
          <div class="app-card">
            <h2>Design App</h2>
            <p>Create and manage product designs</p>
            <a href="http://localhost:3001" target="_blank">Launch Design App</a>
          </div>
          
          <div class="app-card">
            <h2>Marketplace App</h2>
            <p>Browse and purchase products</p>
            <a href="http://localhost:3002" target="_blank">Launch Marketplace App</a>
          </div>
          
          <div class="app-card">
            <h2>API</h2>
            <p>Direct API access</p>
            <a href="http://localhost:3003/health" target="_blank">Check API Health</a>
          </div>
        </div>
        
        <div class="env-info">
          <h3>Environment Information</h3>
          <pre>
NODE_ENV: ${process.env.NODE_ENV || 'Not set'}
API_URL: ${process.env.API_URL || 'http://localhost:3003'}
DESIGN_URL: ${process.env.DESIGN_URL || 'http://localhost:3001'}
MARKETPLACE_URL: ${process.env.MARKETPLACE_URL || 'http://localhost:3002'}
          </pre>
        </div>
      </body>
    </html>
  `);
});

// 404 handler
app.use((req, res) => {
  res.status(404).send('Not Found');
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Start the server
const PORT = process.env.PORT || 3000;

// In production, use setupProxies()
if (process.env.NODE_ENV === 'production') {
  setupProxies();
}

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} in ${process.env.NODE_ENV || 'development'} mode`);
  console.log(`Access the development portal at http://localhost:${PORT}`);
}); 