import mongoose from 'mongoose';
import { Shoe } from './models/data.js'; // Ensure correct path
import './db.js';

const shoes = [
  { id: 1, name: 'Nike', price: 100, color: 'blue', size: '10' },
  { id: 2, name: 'Puma', price: 120, color: 'white', size: '11' },
  { id: 3, name: 'New Balance', price: 130, color: 'grey', size: '12' },
  { id: 4, name: 'Adidas', price: 140, color: 'black', size: '13' }, 
  { id: 5, name: 'Vans', price: 150, color: 'green', size: '14' }
];

Shoe.insertMany(shoes)
  .then(() => {
    console.log('Data inserted');
    mongoose.connection.close();
  })
  .catch(err => {
    console.error('Error inserting data:', err);
    mongoose.connection.close();
  });

