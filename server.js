const express = require('express');
const path = require('path');
const helmet = require('helmet');
const app = express();

app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://*.hsforms.com", "https://*.hubspot.com"],
      scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'", "https://js.hsforms.net", "https://*.hsforms.com", "https://*.hubspot.com"],
      connectSrc: ["'self'", "https://*.shapediver.com", "https://*.hubspot.com", "https://*.hsforms.com"],
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

app.use(express.static(path.join(__dirname, 'dist')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
