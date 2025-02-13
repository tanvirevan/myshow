import { eventModel } from "@/models/event-models"
import { userModel } from "@/models/users-models";
import { replaceMongoIdInArray, replaceMongoIdInObject } from "@/utils/data-utils";
import connectDB from '@/services/mongo';

// replaceMongoIdInObject

async function getAllEvents() 
    {
        const allEvents = await eventModel.find().lean();
        return replaceMongoIdInArray(allEvents);
    }

async function getEventById(eventId)
    {
        const event = await eventModel.findById(eventId).lean();
        return replaceMongoIdInObject(event);
    }

async function createUser(user) 
    {
        return await userModel.create(user);
    }

export async function findUserByCredentials({ email, password }) {
  try {
    await connectDB();
    const user = await userModel.findOne({ email });
    
    if (!user) {
      return null;
    }

    // Import bcryptjs dynamically to avoid build issues
    const bcrypt = await import('bcryptjs');
    const isValid = await bcrypt.compare(password, user.password);
    
    if (!isValid) {
      return false;
    }

    return user;
  } catch (error) {
    console.error('Auth Error:', error);
    throw new Error('Authentication failed');
  }
}

export async function findUserByEmail(email) {
  try {
    await connectDB();
    return await userModel.findOne({ email });
  } catch (error) {
    console.error('Find user error:', error);
    throw new Error('Database error');
  }
}

export {
    getAllEvents,
    getEventById,
    createUser,
}