'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import LoginForm from '../components/auth/LoginForm';
import { useAuth } from '../components/auth/AuthProvider';

export default function LoginPage() {
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const { isAuthenticated, isLoading } = useAuth();

  useEffect(() => {
    // If authenticated, redirect to dashboard
    if (isAuthenticated && !isLoading) {
      router.replace('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  useEffect(() => {
    if (isAuthenticated && !isLoading) {
      router.push('/admin/dashboard');
    }
  }, [isAuthenticated, isLoading, router]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white rounded-xl shadow-2xl p-8">
        <div className="text-center">
          <div className="flex justify-center">
            <Image
              src="/images/ApexLogo.jpg"
              alt="Apex Webs Logo"
              width={120}
              height={120}
              priority
              className="rounded-full"
            />
          </div>
          <h2 className="mt-6 text-3xl font-extrabold text-gray-900">
            Admin Portal
          </h2>
          <p className="mt-2 text-sm text-gray-600">
            Sign in to access the dashboard
          </p>
        </div>

        {error && (
          <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
            {error}
          </div>
        )}

        <LoginForm 
          onError={setError} 
          onSuccess={() => router.push('/admin')}
        />

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>Secure access for ApexWebs administrators only</p>
          <p className="mt-1 text-xs">
            © {new Date().getFullYear()} ApexWebs | "Pamoja Tunaweza"
          </p>
        </div>
      </div>
    </div>
  );
}
