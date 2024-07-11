import mongoose from 'mongoose';

export async function setupMongo() {
  try {
    if (mongoose.connection.readyState === 1) {
      return;
    }
    console.log('Connecting to database... ');

    await mongoose.connect('mongodb://localhost:27017/eliteTracker', {
        serverSelectionTimeoutMS:3500, //3.5 s
    });
     console.log('🚀 Connected to database! 🚀');

  } catch {
    throw new Error(' ❌ Error connecting to database ❌');
  }
}
