// index.js
import express from 'express';
import { getAll, getItem } from './data.js';

const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');
app.use(express.static('public'));

app.get('/', (req, res) => {
    const items = getAll();
    res.render('home', { items });
});

app.get('/detail', (req, res) => {
    const itemId = req.query.id;
    const item = getItem(itemId);
    res.render('detail', { item });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

