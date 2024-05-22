import express from 'express';
import { Shoe } from './models/data.js'; // Adjust this import if needed
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for API routes
app.use('/api', cors());

// Existing routes
app.get('/', (req, res, next) => {
  Shoe.find({}).lean()
    .then(items => {
      res.render('home', { items });
    })
    .catch(err => next(err));
});

app.get('/detail', (req, res, next) => {
  Shoe.findOne({ id: req.query.id }).lean()
    .then(item => {
      if (item) {
        res.render('detail', { item });
      } else {
        res.send('Item not found');
      }
    })
    .catch(err => next(err));
});

// API routes
// Get all items
app.get('/api/items', (req, res) => {
  Shoe.find({}).lean()
    .then(items => {
      res.json(items);
    })
    .catch(err => {
      res.status(500).send('Database error occurred');
    });
});

// Get a single item
app.get('/api/items/:id', (req, res) => {
  Shoe.findOne({ id: req.params.id }).lean()
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).send('Item not found');
      }
    })
    .catch(err => {
      res.status(500).send('Database error occurred');
    });
});

// Delete an item
app.delete('/api/items/:id', (req, res) => {
  Shoe.deleteOne({ id: req.params.id })
    .then(result => {
      if (result.deletedCount > 0) {
        res.send('Item deleted successfully');
      } else {
        res.status(404).send('Item not found');
      }
    })
    .catch(err => {
      res.status(500).send('Database error occurred');
    });
});

// Add or update an item
app.post('/api/items', (req, res) => {
  const { id, name, price, color, size } = req.body;
  Shoe.updateOne({ id }, { id, name, price, color, size }, { upsert: true })
    .then(result => {
      if (result.upsertedCount > 0) {
        res.status(201).send('Item added successfully');
      } else if (result.nModified > 0) {
        res.send('Item updated successfully');
      } else {
        res.send('Item already exists with no modifications');
      }
    })
    .catch(err => {
      res.status(500).send('Database error occurred');
    });
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));















