import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb+srv://rearloliver:Bandaid92@it122.o5zjsqa.mongodb.net/?retryWrites=true&w=majority&appName=it122';

mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(error => console.error('Error connecting to MongoDB:', error.message));

mongoose.connection.on('connected', () => console.log('MongoDB connected!'));
mongoose.connection.on('error', err => console.error(`MongoDB connection error: ${err}`));
mongoose.connection.on('disconnected', () => console.log('MongoDB disconnected'));

export default mongoose;



