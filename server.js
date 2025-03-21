const express = require('express');
const path = require('path');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const rateLimit = require('express-rate-limit');

const app = express();
const PORT = process.env.PORT || 3002;

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
      'https://design.bazaar.it',
      'https://marketplace.bazaar.it',
      'https://api.bazaar.it',
      'https://auth.bazaar.it'
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      if (process.env.NODE_ENV !== 'production') {
        console.log('Blocked origin:', origin);
      }
      callback(null, true); // Allow all origins in production for now
    }
  },
  credentials: true
}));

// Helmet for security headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "blob:", "data:", "https:", "wss:"],
      connectSrc: [
        "'self'", 
        "blob:",
        "data:",
        "https://*.shapediver.com", 
        "wss://*.shapediver.com",
        "https://api.bazaar.it",
        "https://api.bazaar.it/*",
        "https://design.bazaar.it",
        "https://auth.bazaar.it",
        "https://*.auth0.com",
        "https://*.supabase.co",
        "*" 
      ],
      frameSrc: [
        "'self'",
        "https://*.auth0.com", 
        "https://auth.bazaar.it",
        "https://api.bazaar.it",
        "*"
      ],
      imgSrc: [
        "'self'",
        "blob:",
        "data:",
        "https:", 
        "*",
      ],
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "blob:",
        "https://*.shapediver.com",
        "https://api.bazaar.it",
        "*"
      ],
      styleSrc: [
        "'self'", 
        "'unsafe-inline'",
        "https://api.bazaar.it",
        "*"
      ],
      fontSrc: [
        "'self'", 
        "data:", 
        "https://api.bazaar.it",
        "https://fonts.gstatic.com",
        "*"
      ],
      workerSrc: [
        "'self'",
        "data:",
        "blob:",
        "https://api.bazaar.it",
        "*"
      ]
    }
  }
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

// Add proper handling for apple-touch-icon requests
app.get(['/apple-touch-icon.png', '/apple-touch-icon-precomposed.png'], (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/icons/apple-touch-icon.png'));
});

// Add proper handling for favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/assets/icons/favicon.ico'));
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist'), {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Add correct MIME types
    if (path.endsWith('.js')) {
      res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
    }
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=UTF-8');
    }
    // Add proper font MIME types
    if (path.endsWith('.woff')) {
      res.setHeader('Content-Type', 'font/woff');
    }
    if (path.endsWith('.woff2')) {
      res.setHeader('Content-Type', 'font/woff2');
    }
    if (path.endsWith('.ttf')) {
      res.setHeader('Content-Type', 'font/ttf');
    }
    
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// Always return the main index.html for any request
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Marketplace app server running on port ${PORT}`);
}); 