import mongoose from 'mongoose';

const itemSchema = new mongoose.Schema({
    name: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: Number, required: true },
    color: { type: String, required: true },
    type: { type: String, required: true },
    screenSize: { type: String, required: true }
});

const Item = mongoose.model('Item', itemSchema);

export default Item;


