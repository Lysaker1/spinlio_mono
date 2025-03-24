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
        "https://auth.bazaar.it/*", 
        "https://*.auth0.com",
        "https://*.supabase.co",
        "https://egvuknlirjkhhhoooecl.supabase.co",
        "https://*.amazonaws.com",
        "https://*.s3.amazonaws.com",
        "https://*.s3.eu-north-1.amazonaws.com",
        "https://3d-models-spinlio.s3.eu-north-1.amazonaws.com",
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
        "https://res.cloudinary.com",
        "https://*.shapediver.com",
        "https://egvuknlirjkhhhoooecl.supabase.co",
        "https://storage.googleapis.com",
        "https://s.gravatar.com",
        "https://lh3.googleusercontent.com",
        "https://*.wp.com",
        "https://cdn.auth0.com",
        "https:", 
        "*"
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