const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');
const cors = require('cors');  // Add this

const app = express();

// Add CORS before other middleware
app.use(cors({
  origin: (origin, callback) => {
    const allowedOrigins = [
      'http://localhost:3000',
      'http://localhost:3001',
      'https://spinlio.com',
      'https://configurator.spinlio.com',
      'https://contact.spinlio.com',
      'https://www.herokucdn.com'  // Add this
    ];
    callback(null, allowedOrigins.includes(origin));
  },
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  exposedHeaders: ['Cross-Origin-Resource-Policy']
}));

// Add the CORP headers right after CORS
app.use((req, res, next) => {
  res.header('Cross-Origin-Resource-Policy', 'cross-origin');
  res.header('Cross-Origin-Opener-Policy', 'same-origin');
  res.header('Cross-Origin-Embedder-Policy', 'require-corp');
  next();
});

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100 // limit each IP to 100 requests per windowMs
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
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://*.hsforms.com", "https://*.hubspot.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://js.hsforms.net", "https://*.hsforms.com", "https://*.hubspot.com"],
      connectSrc: [
        "'self'", 
        "https://*.shapediver.com", 
        "https://*.hubspot.com", 
        "https://*.hsforms.com",
        "https://spinlio.com",
        "https://configurator.spinlio.com",
        "https://contact.spinlio.com",
        "https://www.herokucdn.com"  // Add this
      ],
      imgSrc: [
        "'self'", 
        "data:", 
        "blob:", 
        "https://*.hsforms.com", 
        "https://*.hubspot.com",
        "https://res.cloudinary.com"
      ],
      mediaSrc: ["'self'", "blob:"],
      workerSrc: ["'self'", "blob:"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "https://*.hsforms.com"],
      frameSrc: [
        "https://*.hsforms.com", 
        "https://*.hubspot.com",
        "https://www.herokucdn.com"  // Add this
      ],
      formAction: ["https://*.hsforms.com", "https://*.hubspot.com"],
    },
  },
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
