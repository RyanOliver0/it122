import express from 'express';
import { Shoe } from './models/data.js'; 
import path from 'path';
import { fileURLToPath } from 'url';
import cors from 'cors';
import './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static(path.join(__dirname, 'public')));

// Middleware to parse JSON bodies
app.use(express.json());

// Enable CORS for API routes
app.use('/api', cors());

// Existing routes
app.get('/', (req, res, next) => {
  Shoe.find({}).lean()
    .then(items => {
      res.render('home', { items: JSON.stringify(items) });
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
app.get('/api/items', (req, res, next) => {
  Shoe.find({}).lean()
    .then(items => {
      res.json(items);
    })
    .catch(err => next(err));
});

app.get('/api/items/:id', (req, res, next) => {
  Shoe.findOne({ id: req.params.id }).lean()
    .then(item => {
      if (item) {
        res.json(item);
      } else {
        res.status(404).send('Item not found');
      }
    })
    .catch(err => next(err));
});

app.delete('/api/items/:id', (req, res, next) => {
  Shoe.deleteOne({ id: req.params.id })
    .then(result => {
      if (result.deletedCount > 0) {
        res.json({ message: 'Item deleted' });
      } else {
        res.status(404).send('Item not found');
      }
    })
    .catch(err => next(err));
});

app.post('/api/items', (req, res, next) => {
  const itemData = req.body;
  Shoe.updateOne({ id: itemData.id }, itemData, { upsert: true })
    .then(result => {
      res.json({ message: 'Item added/updated', result });
    })
    .catch(err => next(err));
});

// Start the server
app.listen(3000, () => console.log('Server running on port 3000'));
