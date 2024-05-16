import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Get the connection string from environment variables
const connectionString = process.env.MONGO_URI;

// Check if the connection string is correctly loaded
if (!connectionString) {
  console.error('MONGO_URI not found in .env file');
  process.exit(1); // Exit the application with an error code
}

// Connect to MongoDB using the connection string
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Event listeners for Mongoose connection
mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to the database');
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error:', err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});
console.log('MongoDB Connection String:', connectionString);
