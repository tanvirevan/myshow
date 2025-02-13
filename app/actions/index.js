'use server'

import { createUser, findUserByCredentials, findUserByEmail } from "@/db/queries";
import connectDB from "@/services/mongo";

export async function registerUser(formData) {
  try {
    await connectDB();
    
    const user = {
      name: formData.get('name')?.trim(),
      email: formData.get('email')?.toLowerCase().trim(),
      password: formData.get('password')?.trim(),
      createdAt: new Date()
    };
    
    if (!user.email || !user.password || !user.name) {
      return { error: 'All fields are required' };
    }

    // Check if user already exists
    const existingUser = await findUserByEmail(user.email);
    if (existingUser) {
      return { error: 'Account already exists with this email' };
    }

    // Hash password before saving
    const bcrypt = await import('bcryptjs');
    const hashedPassword = await bcrypt.hash(user.password, 10);
    
    await createUser({
      ...user,
      password: hashedPassword
    });
    
    return { success: true };
  } catch (error) {
    console.error('Registration error:', error);
    return { error: 'Registration failed. Please try again.' };
  }
}

export async function performlogin(formData) {
  try {
    const email = formData.get('email')?.toLowerCase().trim();
    const password = formData.get('password')?.trim();
    
    if (!email || !password) {
      return { error: 'Email and password are required' };
    }

    const result = await findUserByCredentials({ email, password });
    
    if (result === null) {
      return { error: 'No account found with this email', field: 'email' };
    }
    
    if (result === false) {
      return { error: 'Incorrect password', field: 'password' };
    }

    const { password: _, ...safeUser } = result.toObject();
    return { user: safeUser };
    
  } catch (error) {
    console.error('Login error:', error);
    return { error: error.message || 'Authentication failed' };
  }
}