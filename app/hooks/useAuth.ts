'use client';

import { useState, useEffect } from 'react';
import { hasPermission, type Permission, type UserRole } from '@/app/lib/auth/roles';
import { useRouter } from 'next/navigation';

interface UserProfile {
  micamusername: string;
  firstname: string;
  lastname: string;
  email: string;
  mobile?: string;
  initials?: string;
  suffix?: string;
  micamusertype: string;
  role: UserRole;
}

export function useAuth() {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Get user profile from cookie (in production, you might want to validate this server-side)
    const getCookie = (name: string) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    };

    const userProfileCookie = getCookie('user_profile');
    if (userProfileCookie) {
      try {
        const profile = JSON.parse(decodeURIComponent(userProfileCookie));
        setUser(profile);
      } catch (error) {
        console.error('Failed to parse user profile:', error);
      }
    }
    setLoading(false);
  }, []);

  const checkPermission = (permission: Permission): boolean => {
    if (!user) return false;
    return hasPermission(user.role, permission);
  };

  const signOut = async () => {
    try {
      // Call logout endpoint
      await fetch('/api/auth/logout', { method: 'POST' });
      router.push('/login');
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  return {
    user,
    loading,
    isAuthenticated: !!user,
    checkPermission,
    signOut,
  };
}