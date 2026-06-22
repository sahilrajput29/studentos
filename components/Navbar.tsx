'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useAuth } from '@/lib/AuthContext';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout } = useAuth();
  const [showUserMenu, setShowUserMenu] = useState(false);

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  const getLinkClasses = (href: string) => {
    const baseClasses = 'text-gray-300 hover:text-white transition';
    const activeClasses = 'text-white font-semibold border-b-2 border-white pb-1';
    return isActive(href) ? activeClasses : baseClasses;
  };

  const handleLogout = () => {
    logout();
    setShowUserMenu(false);
    router.push('/');
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-sm border-b border-gray-900 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
            <span className="text-black font-bold text-sm">S</span>
          </div>
          <span className="text-xl font-bold">StudentOS</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          <Link href="/" className={getLinkClasses('/')}>
            Home
          </Link>
          <Link href="/roadmap" className={getLinkClasses('/roadmap')}>
            Roadmaps
          </Link>
          <Link href="/vault" className={getLinkClasses('/vault')}>
            Interview Vault
          </Link>
          <Link href="/resume" className={getLinkClasses('/resume')}>
            Resume Analyzer
          </Link>
          <Link href="/ai-coach" className={getLinkClasses('/ai-coach')}>
            AI Coach
          </Link>

          {user && (
            <Link href="/dashboard" className={getLinkClasses('/dashboard')}>
              Dashboard
            </Link>
          )}

          {user ? (
            <div className="relative">
              <button
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-lg transition"
              >
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center text-xs font-bold text-white">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <span className="text-sm">{user.name}</span>
              </button>

              {showUserMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-gray-900 border border-gray-800 rounded-lg shadow-lg">
                  <div className="p-3 border-b border-gray-800">
                    <p className="text-xs text-gray-500">Logged in as</p>
                    <p className="text-sm text-white font-medium">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/login"
              className="bg-white text-black px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 transition"
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
}
