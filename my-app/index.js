import express from 'express';
import { getAll, getItem } from './data.js';
import path from 'path';
import { fileURLToPath } from 'url';

// Define __dirname in ES module scope
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Initialize Express app
const app = express();

// Set the view engine to EJS
app.set('view engine', 'ejs');

// Set views directory to the 'views' folder
app.set('views', path.join(__dirname, 'views'));

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define the root route to render the home page with items
app.get('/', (req, res) => {
  res.render('home', { items: getAll() });
});

// Define the detail route to render details of a specific item
app.get('/detail', (req, res) => {
  const item = getItem(req.query.id);
  if (item) {
    res.render('detail', { item });
  } else {
    res.send('Item not found');
  }
});

// Start the server and listen on port 3000
app.listen(3000, () => console.log('Server running on port 3000'));











