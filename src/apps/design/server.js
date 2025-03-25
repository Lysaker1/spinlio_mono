const express = require('express');
const path = require('path');
const compression = require('compression');
const rateLimit = require('express-rate-limit');
const cors = require('cors');
const helmet = require('helmet');
const fs = require('fs');

const app = express();
const PORT = process.env.PORT || 3000;

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
  max: 1000, // limit each IP to 100 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

// Security headers with custom CSP
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      connectSrc: [
        "'self'", 
        "https://api.bazaar.it",
        "https://api.spinlio.com",
        "https://*.supabase.co",
        "https://egvuknlirjkhhhoooecl.supabase.co",
        "https://*.shapediver.com",
        "https://*.eu-central-1.shapediver.com",
        "wss://*.shapediver.com",
        "https://sdr8euc1.eu-central-1.shapediver.com"
      ],
      imgSrc: [
        "'self'", 
        "data:", 
        "blob:", 
        "https://res.cloudinary.com",
        "https://*.shapediver.com",
        "https://viewer.shapediver.com"
      ],
      scriptSrc: [
        "'self'", 
        "'unsafe-inline'", 
        "'unsafe-eval'",
        "https://static.klaviyo.com"
      ],
      styleSrc: ["'self'", "'unsafe-inline'"],
      fontSrc: ["'self'", "data:"],
      mediaSrc: ["'self'", "data:", "blob:"],
      workerSrc: ["'self'", "blob:"],
      frameSrc: ["'self'"],
      formAction: ["'self'"]
    }
  }
}));

// Enable CORS
app.use(cors({
  origin: process.env.CORS_ORIGIN || '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Compression
app.use(compression());

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