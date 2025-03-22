const express = require('express');
const path = require('path');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3002;

// Trust proxies for Heroku
app.set('trust proxy', 1);

// CORS configuration
app.use(cors({
  origin: function(origin, callback) {
    const allowedOrigins = [
      'https://design.bazaar.it',
      'https://marketplace.bazaar.it',
      'https://api.bazaar.it',
      'https://auth.bazaar.it'
    ];
    
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
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
        "https://marketplace.bazaar.it",
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

// Compression
app.use(compression());

// Serve static files
app.use(express.static(path.join(__dirname, 'dist')));

// Handle all routes for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Design app server running on port ${PORT}`);
}); 