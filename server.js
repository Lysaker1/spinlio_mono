const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');  // Add this

const app = express();

// Add trust proxy setting for Heroku
app.set('trust proxy', 1);

// Add CORS before other middleware
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

// Add the CORP headers right after CORS
app.use((req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

// Add preload headers
app.use((req, res, next) => {
  res.setHeader('Link', [
    '</vendor.shapediver.bundle.js>; rel=preload; as=script',
    '</vendor.three.bundle.js>; rel=preload; as=script',
    '</vendor.bundle.bundle.js>; rel=preload; as=script'
  ].join(','));
  next();
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  standardHeaders: true,
  trustProxy: true // Required for Heroku
});

app.use(limiter);

// Block sensitive file access
app.use((req, res, next) => {
  const blockedPaths = ['.env', '.git', 'wp', 'wordpress', 'telescope'];
  if (blockedPaths.some(path => req.path.toLowerCase().includes(path))) {
    return res.status(404).send('Not found');
  }
  next();
});

app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" },
  crossOriginEmbedderPolicy: false,
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: [
        "'self'", 
        "https://*.shapediver.com", 
        "https://*.hubspot.com", 
        "https://*.hsforms.com",
        "https://spinlio.com",
        "https://configurator.spinlio.com",
        "https://contact.spinlio.com",
        "https://www.herokucdn.com",
        "https://viewer.shapediver.com",
        "https://res.cloudinary.com"
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
        "https://*.shapediver.com",
        "https://viewer.shapediver.com",
        "https://res.cloudinary.com",
        "https://*.cloudinary.com"
      ],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'", "data:", "https://fonts.gstatic.com"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'", "https://res.cloudinary.com"],
    }
  }
}));

// Add logging for debugging
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Origin: ${req.headers.origin}`);
  next();
});

// Simplified routing based on hostname
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path} - Hostname: ${req.hostname}`);
  next();
});

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/dynamic')));

// Simple catch-all route that serves index.html
app.get('*', (req, res) => {
  // Remove any unwanted paths
  if (req.path !== '/' && req.path !== '/about') {
    return res.redirect('/');
  }
  res.sendFile(path.join(__dirname, 'dist/dynamic', 'index.html'));
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
