import { connect } from 'mongoose';

const connectDB = async () => 
  {
    try 
      {
        const connectMongo = await connect(process.env.MONGO_URI);
        console.log('Connected...');
        return connectMongo;
      } 
    catch (error) 
      {
        console.error('Database connection failed:', error);
      }
  };

export default connectDB;
