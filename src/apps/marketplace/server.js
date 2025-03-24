const express = require('express');
const path = require('path');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

// Load environment variables during runtime
// This is necessary to ensure AWS credentials are properly passed to the client
require('dotenv').config({
  path: path.resolve(__dirname, process.env.NODE_ENV === 'production' ? '.env.production' : '.env.development')
});

// Check if dist directory exists
const distDir = path.join(__dirname, 'dist');
if (!fs.existsSync(distDir)) {
  console.warn('Warning: dist directory does not exist!');
  console.warn('You may need to run "npm run build" first');
  fs.mkdirSync(distDir, { recursive: true });
}

// Enable if you're behind a reverse proxy (Heroku, Bluemix, AWS ELB, Nginx, etc)
app.set('trust proxy', 1);

// Apply rate limiting to all requests
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Security headers with custom CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'", "data:", "https://auth.bazaar.it"],
      connectSrc: [
        "'self'", 
        "https://api.bazaar.it",
        "http://localhost:3003",
        "https://*.supabase.co",
        "https://egvuknlirjkhhhoooecl.supabase.co",
        "https://*.shapediver.com",
        "https://*.eu-central-1.shapediver.com",
        "wss://*.shapediver.com",
        "https://*.auth0.com",
        "https://auth.bazaar.it",
        "https://auth.bazaar.it/oauth/token",
        "https://auth.bazaar.it/*",
        "https://dev-jxcml1qpmbgabh6v.us.auth0.com",
        "https://*.amazonaws.com",
        "https://*.s3.amazonaws.com",
        "https://s3.eu-north-1.amazonaws.com",
        "https://*.s3.eu-north-1.amazonaws.com",
        "https://3d-models-spinlio.s3.eu-north-1.amazonaws.com",
        "https://*.execute-api.eu-north-1.amazonaws.com"
      ],
      imgSrc: [
        "'self'", 
        "data:", 
        "blob:", 
        "https://res.cloudinary.com",
        "https://*.shapediver.com",
        "https://viewer.shapediver.com",
        "https://storage.googleapis.com",
        "https://s.gravatar.com",
        "https://lh3.googleusercontent.com",
        "https://*.amazonaws.com",
        "https://*.s3.amazonaws.com",
        "https://*.s3.eu-north-1.amazonaws.com",
        "https://3d-models-spinlio.s3.eu-north-1.amazonaws.com",
        "https://egvuknlirjkhhhoooecl.supabase.co",
        "https://*.supabase.co",
        "https://egvuknlirjkhhhoooecl.supabase.in",
        "https://storage.googleapis.com",
        "https://*.wp.com",
        "https://cdn.auth0.com"
      ],
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "https://static.klaviyo.com",
        "https://cdn.auth0.com",
        "https://*.auth0.com"
      ],
      styleSrc: [
        "'self'", 
        "'unsafe-inline'",
        "https://fonts.googleapis.com",
        "https://cdn.auth0.com"
      ],
      fontSrc: [
        "'self'", 
        "data:",
        "https://fonts.gstatic.com",
        "https://cdn.auth0.com"
      ],
      mediaSrc: ["'self'", "data:", "blob:"],
      workerSrc: ["'self'", "blob:"],
      frameSrc: [
        "'self'",
        "https://*.auth0.com",
        "https://auth.bazaar.it",
        "https://auth.bazaar.it/*",
        "https://dev-jxcml1qpmbgabh6v.us.auth0.com"
      ],
      formAction: ["'self'", "https://*.auth0.com", "https://auth.bazaar.it"],
      frameAncestors: ["'self'"]
    }
  },
  // Make sure to explicitly allow frames 
  crossOriginEmbedderPolicy: false,
  crossOriginOpenerPolicy: false,
  crossOriginResourcePolicy: false
}));

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Compression
app.use(compression());

// Set correct MIME types
app.use((req, res, next) => {
  if (req.path.endsWith('.css')) {
    res.set('Content-Type', 'text/css');
  }
  next();
});

// Serve static files from the dist directory
app.use(express.static(path.join(__dirname, 'dist')));

// For all other requests, send `index.html` from the dist directory
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send('Application is not built properly. Please check the deployment logs.');
  }
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
}); 