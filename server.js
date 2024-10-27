const express = require('express');
const path = require('path');
const helmet = require('helmet');
const rateLimit = require('express-rate-limit');  // Add this line

const app = express();

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

// Update CORS to handle both domains
app.use((req, res, next) => {
  const allowedOrigins = ['https://spinlio.com', 'https://spinlio-dynamic-e31fcb8098e8.herokuapp.com'];
  const origin = req.headers.origin;
  if (allowedOrigins.includes(origin)) {
    res.header('Access-Control-Allow-Origin', origin);
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
        "https://spinlio.com"
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
      frameSrc: ["https://*.hsforms.com", "https://*.hubspot.com"],
      formAction: ["https://*.hsforms.com", "https://*.hubspot.com"],
    },
  },
}));

// Serve static files
app.use(express.static(path.join(__dirname, 'dist/dynamic')));

// Handle configurator and contact routes
app.get(['/configurator', '/configurator/*'], (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dynamic', 'index.html'));
});

app.get(['/contact', '/contact/*'], (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dynamic', 'index.html'));
});

// Update routes to handle both domains
app.get(['/about', '/about/*'], (req, res) => {
  res.redirect('https://spinlio.com/about');
});

// Catch-all route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/dynamic', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
