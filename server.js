const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const compression = require('compression');

const app = express();

// Configure trust proxy properly for Heroku
app.set('trust proxy', 1); // trust first proxy

// Rate limiter configuration
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
  trustProxy: true,  // Change this to true since we're behind Heroku's proxy
  skip: (req) => {
    // Skip rate limiting for static assets and health checks
    return req.path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|map)$/) ||
           req.path.includes('static/') ||
           req.path.includes('assets/') ||
           req.path === '/health';
  }
});



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
      'https://res.cloudinary.com',
      'https://design.spinlio.com'
    ];
    if (!origin) return callback(null, true);
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
        "https://design.spinlio.com",
        "https://configurator.spinlio.com",
        "https://contact.spinlio.com",
        "https://www.herokucdn.com",
        "https://viewer.shapediver.com",
        "https://res.cloudinary.com",
        "https://forms.hubspot.com",
        "https://*.hs-scripts.com",
        "https://*.hs-banner.com",
        "https://*.hscollectedforms.net",
        "https://static.klaviyo.com",
        "https://*.klaviyo.com",
        "https://*.google-analytics.com",
        "https://*.analytics.google.com",
        "https://*.googletagmanager.com"
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
        "https://*.hubspot.com",
        "https://forms-na1.hsforms.com",
        "https://*.google-analytics.com",
        "https://*.googletagmanager.com"
      ],
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "https://js.hsforms.net",
        "https://*.hubspot.com",
        "https://*.hs-scripts.com",
        "https://*.hs-analytics.net",
        "https://*.usemessages.com",
        "https://static.klaviyo.com",
        "https://*.klaviyo.com",
        "https://static-tracking.klaviyo.com",
        "https://*.hsforms.com", 
        "https://*.hubspot.com",
        "https://*.googletagmanager.com",
        "https://www.google-analytics.com"
      ],
      styleSrc: [
        "'self'", 
        "'unsafe-inline'",
        "https://*.hubspot.com",
        "https://static.klaviyo.com",
        "https://*.klaviyo.com"
      ],
      fontSrc: [
        "'self'", 
        "data:", 
        "https://fonts.gstatic.com",
        "https://fonts.googleapis.com",
        "https://*.hubspot.com",
        "https://static.klaviyo.com",
        "https://*.klaviyo.com"
      ],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'", "https://res.cloudinary.com"],
      manifestSrc: ["'self'"],
      workerSrc: [
        "'self'",
        "blob:",
        "https://*.spinlio.com"  // Add this
      ],
      "apple-mobile-web-app-capable": ["'self'"],
      "apple-mobile-web-app-status-bar-style": ["'self'"],
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

// Instead, add these as regular headers
app.use((req, res, next) => {
  // Add iOS-specific meta tags as headers
  res.setHeader('X-Apple-Mobile-Web-App-Capable', 'yes');
  res.setHeader('X-Apple-Mobile-Web-App-Status-Bar-Style', 'black-translucent');
  res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  next();
});

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
      '<https://res.cloudinary.com/da8qnqmmh/image/upload/v1730794027/back3back_oye0ev.jpg>; rel=preload; as=image',
      '</framework.bundle.js>; rel=preload; as=script',
      '</shapediver.bundle.js>; rel=prefetch; as=script'  // Use prefetch for non-critical
    ].join(','));
  }
  next();
});

// Add iOS-specific headers
app.use((req, res, next) => {
  // Add iOS-specific headers
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
  
  // Handle iOS PWA capable
  res.setHeader('apple-mobile-web-app-capable', 'yes');
  res.setHeader('apple-mobile-web-app-status-bar-style', 'black-translucent');
  
  next();
});

// Add iOS-specific optimizations
app.use((req, res, next) => {
  // Add memory management headers
  res.setHeader('Device-Memory', '4'); // Suggest device memory
  res.setHeader('Viewport-Width', '375'); // Default iOS viewport
  
  // Add performance hints
  res.setHeader('Early-Hints', 
    '</shapediver.bundle.js>; rel=preload; as=script, ' +
    '</vendor.three.js>; rel=preload; as=script'
  );
  
  next();
});

// Update static file serving for better iOS caching
app.use(express.static(path.join(__dirname, 'dist/dynamic'), {
  maxAge: '1y',
  etag: true,
  lastModified: true,
  setHeaders: (res, path) => {
    // Add correct MIME types
    if (path.endsWith('.js')) {
      // Add specific headers for JS files
      res.setHeader('Content-Type', 'application/javascript; charset=UTF-8');
      // Add memory management hint
      res.setHeader('Transfer-Size', '1000000'); // Suggest transfer size
    }
    if (path.endsWith('.css')) {
      res.setHeader('Content-Type', 'text/css; charset=UTF-8');
    }
    
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  }
}));

// Add proper handling for apple-touch-icon requests
app.get(['/apple-touch-icon.png', '/apple-touch-icon-precomposed.png'], (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dynamic/assets/icons/apple-touch-icon.png'));
});

// Add proper handling for favicon
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dynamic/assets/icons/favicon.ico'));
});

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

app.use((req, res, next) => {
  if (req.hostname === 'configurator.spinlio.com') {
    console.log(`Redirecting from configurator to design: ${req.path}`);

    return res.redirect(301, `https://design.spinlio.com${req.path}`);
  }
  next();
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
