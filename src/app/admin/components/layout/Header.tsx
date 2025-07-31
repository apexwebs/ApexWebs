"use client";

export function Header() {

  return (
    <header className="flex items-center justify-between px-8 py-4 bg-white/95 border-b border-gray-100 rounded-b-2xl shadow-lg sticky top-0 z-20 backdrop-blur-sm">
      <div className="flex items-center gap-4 w-full max-w-lg">
        <input type="text" placeholder="Search..." className="w-full px-4 py-2 rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:ring-2 focus:ring-teal-200 shadow" />
      </div>
      <div className="flex items-center gap-4">
        <button className="bg-teal-600 text-white px-5 py-2 rounded-xl font-semibold hover:bg-teal-700 transition shadow-md">+ New Lead</button>
        <button className="relative bg-gray-100 p-2 rounded-full hover:bg-gray-200 shadow-md">
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
          <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-gray-500"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
        </button>
      </div>
    </header>
  );
}
