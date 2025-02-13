'use client'

import { registerUser } from "@/app/actions";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegFrom() {
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function onSubmit(event) {
    event.preventDefault();
    setError("");
    setLoading(true);

    try {
      const formData = new FormData(event.currentTarget);
      const result = await registerUser(formData);
      
      if (result?.error) {
        setError(result.error);
        return;
      }

      if (result?.success) {
        router.push('/login');
      }
    } catch (err) {
      setError(err.message || 'Registration failed');
    } finally {
      setLoading(false);
    }
  }

  return (
    <form className="space-y-4" onSubmit={onSubmit}>
      {error && (
        <div className="p-2 text-sm text-red-500 text-center">
          {error}
        </div>
      )}

      <div className="space-y-2">
        <label htmlFor="name">Full Name</label>
        <input 
          type="text" 
          name="name" 
          id="name"
          required
          className="w-full p-2 border rounded text-black"
          disabled={loading}
        />
      </div>
      
      <div className="space-y-2">
        <label htmlFor="email">Email Address</label>
        <input 
          type="email" 
          name="email" 
          id="email"
          required
          className="w-full p-2 border rounded text-black"
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          name="password" 
          id="password"
          required
          className="w-full p-2 border rounded text-black"
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="phone">Phone Number</label>
        <input 
          type="tel" 
          name="phone" 
          id="phone"
          required
          className="w-full p-2 border rounded text-black"
          disabled={loading}
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="bio">Bio</label>
        <input 
          className="min-h-16 w-full p-2 border rounded text-black" 
          type="text" 
          name="bio" 
          id="bio"
          disabled={loading}
        />
      </div>

      <button
        type="submit"
        className="btn-primary w-full mt-6 mb-4 py-3 bg-indigo-600 hover:bg-indigo-800 disabled:opacity-50 text-center"
        disabled={loading}
      >
        {loading ? 'Creating Account...' : 'Register'}
      </button>
    </form>
  );
}
