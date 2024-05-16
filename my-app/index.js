import express from 'express';
import { Shoe } from './models/data.js';
import path from 'path';
import { fileURLToPath } from 'url';
import './db.js';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.static('public'));

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

app.listen(3000, () => console.log('Server running on port 3000'));












