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

app.use(cors({
  origin: 'https://design.spinlio.com',  // Be specific instead of using callback
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Cross-Origin-Resource-Policy', 'Cross-Origin-Embedder-Policy']
}));

// Then add the custom headers middleware AFTER cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://design.spinlio.com');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS, PATCH');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  next();
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
      'https://design.spinlio.com',
      'https://auth.spinlio.com',
      'https://api.spinlio.com',
      'https://api.spinlio.com/*',
      'https://api.spinlio.com/api/*',
      'https://api.spinlio.com/api/thumbnail/*',
      'https://buy.stripe.com/*',
      'https://js.stripe.com/*',
      'https://js.stripe.com/v3/',
      'https://js.stripe.com/v3/buy-button.js',


    ];
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  exposedHeaders: ['Cross-Origin-Resource-Policy', 'Cross-Origin-Embedder-Policy']
}));

// Update the helmet configuration with HubSpot domains
app.use(helmet({
  contentSecurityPolicy: process.env.NODE_ENV === 'production' ? {
    directives: {
      defaultSrc: ["'self'", "blob:", "data:", "https:", "wss:", "http://localhost:3003", "https://api.spinlio.com"],
      connectSrc: [
        "'self'", 
        "blob:",
        "https://*.shapediver.com", 
        "wss://*.shapediver.com",
        "http://localhost:3003",
        "http://localhost:3003/*",
        "http://localhost:3003/api/*",
        "http://localhost:3003/api/thumbnail/*",
        "https://api.spinlio.com",
        "https://api.spinlio.com/*",
        "https://api.spinlio.com/api/*",
        "https://api.spinlio.com/api/thumbnail/*",
        "https://api.spinlio.com/api/thumbnail/*",
        "https://api.spinlio.com/api/designs/*",
        "http://localhost:3001",
        "http://localhost:3001/*",
        "http://localhost:3001/api/*",
        "http://localhost:3001/api/thumbnail/*",
        "https://*.shapediver.com", 
        "wss://*.shapediver.com",
        "blob:",
        "https://*.hubspot.com", 
        "https://js.stripe.com",
        "https://js.stripe.com/v3/buy-button.js",
        "https://*.hsforms.com",
        "https://spinlio.com",
        "https://auth.spinlio.com",
        "https://*.auth0.com",
        "https://dev-jxcml1qpmbgabh6v.us.auth0.com",
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
        "https://*.googletagmanager.com",
        "https://auth.spinlio.com",
        "https://*.auth0.com",
        "https://dev-jxcml1qpmbgabh6v.us.auth0.com",
        "https://auth.spinlio.com",
        "https://api.spinlio.com",
        "http://localhost:3003",
        "https://*.supabase.co",
        "ws://localhost:3003",
        "wss://localhost:3003",
        process.env.SUPABASE_URL,
        process.env.REACT_APP_SUPABASE_URL,
        "*" 
      ],
      frameSrc: [
        "'self'",
        "https://*.hsforms.com", 
        "https://*.hubspot.com",
        "https://www.herokucdn.com",
        "https://js.stripe.com",
        "https://js.stripe.com/v3/buy-button.js",
        "https://buy.stripe.com",
        "https://*.auth0.com", 
        "https://auth.spinlio.com",
        "https://dev-jxcml1qpmbgabh6v.us.auth0.com",
        "http://localhost:3003",
        "https://api.spinlio.com",
        process.env.REACT_APP_SUPABASE_URL,
        "*"
      ],
      imgSrc: [
        "'self'",
        "blob:",
        "data:",
        "https:", 
        "https://js.stripe.com",
        "https://js.stripe.com/v3/buy-button.js",
        "https://buy.stripe.com",
        "*",
      ].filter(Boolean),
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "blob:",
        "https://*.shapediver.com",
        "https://api.spinlio.com",
        "https://static.klaviyo.com",
        "https://www.googletagmanager.com",
        "https://*.klaviyo.com",
        "https://*.hsforms.com",
        "https://*.hubspot.com",
        "https://*.auth0.com",
        "https://js.hsforms.net",
        "https://js.stripe.com",
        "https://js.stripe.com/*",
        "https://*.stripe.com",
        "https://buy.stripe.com",
        "https://buy.stripe.com/*",
        "*"
      ],
      styleSrc: [
        "'self'", 
        "'unsafe-inline'",
        "http://localhost:3003",
        "https://api.spinlio.com",
        "https://js.stripe.com",
        "https://buy.stripe.com",
        "*"
      ],
      fontSrc: [
        "'self'", 
        "data:", 
        "http://localhost:3003",
        "https://api.spinlio.com",
        "https://fonts.gstatic.com",
        "https://js.stripe.com",
        "*"
      ],
      workerSrc: [
        "'self'",
        "blob:",
        "http://localhost:3003",
        "https://api.spinlio.com",
        "*"
      ]
    }
  } : false
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
  console.log('CSP Header:', res.getHeader('Content-Security-Policy'));
  next();
});


// Add preload headers for critical resources
app.use((req, res, next) => {
  if (req.path === '/') {
    res.setHeader('Link', [
      // Only preload critical resources
      '<https://res.cloudinary.com/da8qnqmmh/image/upload/back4bazaar.jpg>; rel=preload; as=image',
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

app.use((req, res, next) => {
  if (req.hostname === 'configurator.spinlio.com') {
    console.log(`Redirecting from configurator to design: ${req.path}`);
    return res.redirect(301, `https://design.spinlio.com${req.path}`);
  }
  next();
});

// Add before the catch-all route
app.use('/api', (req, res, next) => {
  // Forward API requests to the backend
  next();
});

// Then your existing catch-all route
app.get('*', (req, res) => {
  const allowedRoutes = ['/', '/about', '/vulz', '/supplier', '/configurator', '/contact'];
  
  // Log the incoming request
  console.log('Incoming request path:', req.path);
  
  // If it's an allowed route or we're on design.spinlio.com, serve the app
  if (allowedRoutes.includes(req.path) || req.hostname === 'design.spinlio.com') {
    return res.sendFile(path.join(__dirname, 'dist/dynamic', 'index.html'));
  }
  
  // Otherwise redirect to root
  res.redirect('/');
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Add before other middleware
app.use((req, res, next) => {
  if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
});

// Add this AFTER your existing cors configuration
app.use((req, res, next) => {
  const origin = req.headers.origin;
  const allowedOrigins = ['https://design.spinlio.com', 'http://localhost:3000'];
  
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
  }
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.header('Access-Control-Allow-Credentials', 'true');
    return res.status(200).json({});
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
