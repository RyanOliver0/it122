import express from 'express';
import Item from './items';  // Use relative path if items.js is in the same directory

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const items = await Item.find();
        res.render('home', { items }); // Make sure 'home' is the correct name of your EJS template
    } catch (error) {
        console.error('Error fetching items:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

router.get('/detail', async (req, res) => {
    try {
        const itemId = req.query.id;
        const item = await Item.findById(itemId);
        res.render('detail', { item }); // Make sure 'detail' is the correct name of your EJS template
    } catch (error) {
        console.error('Error fetching item details:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

export default router;
