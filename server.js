// ES module imports
import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get dirname using ES modules approach
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Create Express app
const app = express();

// Define port - use environment variable from .env or default to 3000
const PORT = process.env.PORT || 3000;

// Serve static files from the directory specified in .env (defaulting to 'public')
app.use(express.static(join(__dirname, process.env.STATIC_DIR || 'public')));

// Add a simple route to demonstrate environment variables
app.get('/api/info', (req, res) => {
  res.json({
    appName: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    author: process.env.APP_AUTHOR,
    environment: process.env.NODE_ENV
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`${process.env.APP_NAME} v${process.env.APP_VERSION} is running on http://localhost:${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV}`);
});
