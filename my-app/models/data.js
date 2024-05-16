import mongoose from 'mongoose';
const { Schema } = mongoose;

const shoeSchema = new Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  price: { type: Number, required: true },
  color: { type: String, required: true },
  size: { type: String, required: true }
});

export const Shoe = mongoose.model('Shoe', shoeSchema);




