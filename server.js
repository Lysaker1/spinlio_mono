const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const compression = require('compression');

const app = express();

// Enable trust proxy - MUST BE FIRST
app.enable('trust proxy');

// Rate limiter configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  trustProxy: false,  // Change this to false
  skip: (req) => {
    // Expand skip conditions for static assets
    return req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map)$/) ||
           req.path.includes('static/') ||
           req.path.includes('assets/');
  }
});

// Apply rate limiter
app.use(limiter);

// CORS configuration with your specific origins
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://spinlio.com',
      'https://configurator.spinlio.com',
      'https://contact.spinlio.com',
      'https://www.herokucdn.com',
      'https://viewer.shapediver.com',
      'https://res.cloudinary.com'
    ];
    callback(null, allowedOrigins.includes(origin));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Cross-Origin-Resource-Policy', 'Cross-Origin-Embedder-Policy']
}));

// Update the helmet configuration with HubSpot domains
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: [
        "'self'", 
        "https://*.shapediver.com", 
        "wss://*.shapediver.com",  // Add WebSocket support
        "blob:",
        "https://*.hubspot.com", 
        "https://*.hsforms.com",
        "https://spinlio.com",
        "https://configurator.spinlio.com",
        "https://contact.spinlio.com",
        "https://www.herokucdn.com",
        "https://viewer.shapediver.com",
        "https://res.cloudinary.com",
        "https://forms.hubspot.com",
        "https://*.hs-scripts.com",
        "https://*.hs-banner.com",
        "https://*.hscollectedforms.net"
      ],
      frameSrc: [
        "'self'",
        "https://*.hsforms.com", 
        "https://*.hubspot.com",
        "https://www.herokucdn.com"
      ],
      imgSrc: [
        "'self'",
        "data:",
        "blob:",
        "https://*.shapediver.com",
        "https://viewer.shapediver.com",
        "https://res.cloudinary.com",
        "https://*.cloudinary.com",
        "https://*.hubspot.com"
      ],
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "https://js.hsforms.net",
        "https://*.hubspot.com",
        "https://*.hs-scripts.com",
        "https://*.hs-analytics.net",
        "https://*.usemessages.com"
      ],
      styleSrc: [
        "'self'", 
        "'unsafe-inline'",
        "https://*.hubspot.com"
      ],
      fontSrc: [
        "'self'", 
        "data:", 
        "https://fonts.gstatic.com",
        "https://*.hubspot.com"
      ],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'", "https://res.cloudinary.com"],
      workerSrc: [
        "'self'",
        "blob:",
        "https://*.spinlio.com"  // Add this
      ],
      // Add cache-control headers
      'Cache-Control': [
        'public',
        'max-age=31536000',
        'immutable'
      ]
    }
  },
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false
}));

// Enable compression
app.use(compression());

// Block sensitive file access
app.use((req, res, next) => {
  const blockedPaths = ['.env', '.git', 'wp', 'wordpress', 'telescope'];
  if (blockedPaths.some(path => req.path.toLowerCase().includes(path))) {
    return res.status(404).send('Not found');
  }
  next();
});

// Add logging for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  console.log(`${req.method} ${req.path} - Hostname: ${req.hostname}`);
  next();
});

// Add preload headers for critical resources
app.use((req, res, next) => {
  if (req.path === '/') {
    res.setHeader('Link', [
      // Only preload critical resources
      '<https://res.cloudinary.com/da8qnqmmh/image/upload/v1730055768/background_final_last_dm9bl2.png>; rel=preload; as=image',
      '</framework.bundle.js>; rel=preload; as=script',
      '</shapediver.bundle.js>; rel=prefetch; as=script'  // Use prefetch for non-critical
    ].join(','));
  }
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/dynamic'), {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    if (path.endsWith('.js') || path.endsWith('.css') || path.includes('images/')) {
      res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    }
  }
}));

// Simple catch-all route that serves index.html
app.get('*', (req, res) => {
  if (req.path !== '/' && req.path !== '/about') {
    return res.redirect('/');
  }
  res.sendFile(path.join(__dirname, 'dist/dynamic', 'index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

const setupServer = () => {
  return app;
};

// Only create one server instance per worker
if (!module.parent) {
  const server = setupServer();
  const port = process.env.PORT || 3000;
  
  server.listen(port, () => {
    console.log(`Worker ${process.pid} listening on port ${port}`);
  });
}

module.exports = setupServer;
