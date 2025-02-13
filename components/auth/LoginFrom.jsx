'use client'

import { performlogin } from "@/app/actions";
import { useAuth } from "@/app/hooks/useAuth";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginFrom() 
  {
    const [errors, setErrors] = useState({ general: '', email: '', password: '' });
    const [loading, setLoading] = useState(false);
    const { setAuth } = useAuth();
    const router = useRouter();

    async function onSubmit(event) {
      event.preventDefault();
      setErrors({ general: '', email: '', password: '' });
      setLoading(true);

      try {
        const formData = new FormData(event.currentTarget);
        const result = await performlogin(formData);

        if (result.error) {
          if (result.field) {
            setErrors(prev => ({ ...prev, [result.field]: result.error }));
          } else {
            setErrors(prev => ({ ...prev, general: result.error }));
          }
          return;
        }

        if (result.user) {
          setAuth(result.user);
          router.push('/');
          router.refresh();
        } else {
          setErrors(prev => ({ ...prev, general: 'Login failed. Please try again.' }));
        }
      } catch (err) {
        setErrors(prev => ({ ...prev, general: err.message || 'An unexpected error occurred' }));
      } finally {
        setLoading(false);
      }
    }

    return (
      <form className="space-y-4" onSubmit={onSubmit}>
        {errors.general && (
          <div className="p-2 text-sm text-red-500 text-center">
            {errors.general}
          </div>
        )}

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">Email Address</label>
          <input
            type="email"
            name="email"
            id="email"
            required
            className="w-full p-2 border rounded text-black"
            disabled={loading}
          />
          {errors.email && (
            <p className="text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div className="space-y-2">
          <label htmlFor="password" className="block text-sm">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            required
            className="w-full p-2 border rounded text-black"
            disabled={loading}
          />
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password}</p>
          )}
        </div>

        <button
          type="submit"
          className="btn-primary w-full mt-6 py-3 bg-indigo-600 hover:bg-indigo-800 disabled:opacity-50"
          disabled={loading}
        >
          {loading ? 'Signing in...' : 'Sign in'}
        </button>
      </form>
    );
  }
