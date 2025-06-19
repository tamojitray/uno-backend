import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const connectDB = async () => {
  try {
    const {
      MONGODB_USER,
      MONGODB_PASS,
      MONGODB_HOST,
      MONGODB_PORT,
      MONGODB_DB,
    } = process.env;

    if (!MONGODB_USER || !MONGODB_PASS || !MONGODB_DB) {
      throw new Error('MongoDB credentials are missing in .env');
    }

    const uri = `mongodb://${MONGODB_USER}:${encodeURIComponent(MONGODB_PASS)}@${MONGODB_HOST}:${MONGODB_PORT}/${MONGODB_DB}?authSource=admin`;

    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('✅ MongoDB connected');
  } catch (err) {
    console.error('❌ MongoDB connection error:', err.message);
    process.exit(1);
  }
};

export default connectDB;
