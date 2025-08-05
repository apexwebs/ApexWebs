/**
 * Admin Header Component
 * Features: Search, notifications, user menu with logout
 * Integrated with authentication system
 */

"use client";

import React, { useState, useEffect } from "react";

interface AdminUser {
  id: string;
  username: string;
  role: string;
  loginTime: number;
}

export default function Header() {
  const [user, setUser] = useState<AdminUser | null>(null);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  // Load user data on component mount
  useEffect(() => {
    loadUserData();
  }, []);

  /**
   * Load current user data from authentication API
   */
  const loadUserData = async () => {
    try {
      const response = await fetch('/api/admin/auth/check', {
        method: 'GET',
        credentials: 'include'
      });

      if (response.ok) {
        const result = await response.json();
        if (result.success && result.user) {
          setUser(result.user);
        }
      }
    } catch (error) {
      console.error('Failed to load user data:', error);
    }
  };

  /**
   * Handle user logout
   */
  const handleLogout = async () => {
    setIsLoggingOut(true);
    
    try {
      // Using void to explicitly ignore the response since we don't need it
      await void fetch('/api/admin/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });

      // Always redirect regardless of response status
      // This prevents hanging if API fails
      window.location.href = '/admin/login';
    } catch (_error) {
      // Log the error for debugging
      console.error('Logout error:', _error);
      // Force redirect even on error
      window.location.href = '/admin/login';
    }
  };

  /**
   * Format login time for display
   */
  const formatLoginTime = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleString('en-US', {
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white border-b border-gray-200 rounded-b-xl shadow-sm sticky top-0 z-10">
      {/* Search Section */}
      <div className="flex items-center gap-4 w-full max-w-lg">
        <input 
          type="text" 
          placeholder="Search leads, projects, or content..." 
          className="w-full px-4 py-2 rounded-lg border border-gray-200 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-teal-200 shadow-sm transition-all" 
        />
      </div>
      
      {/* Right Section - Actions & User Menu */}
      <div className="flex items-center gap-4">
        {/* New Lead Button */}
        <button className="bg-teal-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-teal-700 transition shadow">
          + New Lead
        </button>
        
        {/* Notifications */}
        <button className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow transition-colors">
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
          </svg>
        </button>

        {/* User Menu */}
        <div className="relative">
          <button
            onClick={() => setShowUserMenu(!showUserMenu)}
            className="flex items-center gap-3 bg-gray-100 hover:bg-gray-200 px-3 py-2 rounded-lg transition-colors shadow"
          >
            {/* User Avatar */}
            <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white text-sm font-semibold">
                {user?.username?.charAt(0).toUpperCase() || 'A'}
              </span>
            </div>
            
            {/* User Info */}
            <div className="text-left hidden md:block">
              <div className="text-sm font-medium text-gray-900">
                {user?.username || 'Admin'}
              </div>
              <div className="text-xs text-gray-500">
                {user?.role || 'Administrator'}
              </div>
            </div>
            
            {/* Dropdown Arrow */}
            <svg 
              className={`w-4 h-4 text-gray-500 transition-transform ${showUserMenu ? 'rotate-180' : ''}`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* User Dropdown Menu */}
          {showUserMenu && (
            <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50">
              {/* User Info Section */}
              <div className="px-4 py-3 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-gradient-to-r from-teal-600 to-blue-600 rounded-full flex items-center justify-center">
                    <span className="text-white font-semibold">
                      {user?.username?.charAt(0).toUpperCase() || 'A'}
                    </span>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900">{user?.username || 'Admin'}</div>
                    <div className="text-sm text-gray-500">{user?.role || 'Administrator'}</div>
                    {user?.loginTime && (
                      <div className="text-xs text-gray-400">
                        Logged in: {formatLoginTime(user.loginTime)}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Menu Items */}
              <div className="py-1">
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  Profile Settings
                </button>
                
                <button className="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Admin Settings
                </button>

                <div className="border-t border-gray-100 my-1"></div>
                
                <button 
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="flex items-center gap-3 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoggingOut ? (
                    <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                  ) : (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                    </svg>
                  )}
                  {isLoggingOut ? 'Signing out...' : 'Sign Out'}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Click outside to close menu */}
      {showUserMenu && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setShowUserMenu(false)}
        ></div>
      )}
    </header>
  );
}
