"use client";
import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import { useRouter } from "next/navigation";
import { type UserRole } from "@/app/lib/auth/roles";

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

interface AuthContextType {
  user: UserProfile | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  signinRedirect: () => Promise<void>;
  signoutRedirect: () => Promise<void>;
  signoutSilent: () => Promise<void>;
  removeUser: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function MILoginAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  // Load user from cookie on mount
  useEffect(() => {
    const loadUser = () => {
      try {
        const cookies = document.cookie.split(';');
        const userProfileCookie = cookies.find(c => c.trim().startsWith('user_profile='));
        
        if (userProfileCookie) {
          const encodedProfile = userProfileCookie.split('=')[1];
          const decodedProfile = decodeURIComponent(encodedProfile);
          const userProfile = JSON.parse(decodedProfile);
          setUser(userProfile);
        }
      } catch (error) {
        console.error('Error loading user profile:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadUser();
  }, []);

  const signinRedirect = useCallback(async () => {
    // Redirect to the MILogin login route
    window.location.href = '/api/auth/login';
  }, []);

  const signoutRedirect = useCallback(async () => {
    try {
      // Call the logout API
      const response = await fetch('/api/auth/logout', {
        method: 'POST',
        credentials: 'include'
      });

      if (response.ok) {
        setUser(null);
        router.push('/');
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  }, [router]);

  const signoutSilent = useCallback(async () => {
    // For MILogin, silent signout is the same as regular signout
    await signoutRedirect();
  }, [signoutRedirect]);

  const removeUser = useCallback(async () => {
    setUser(null);
  }, []);

  const value: AuthContextType = {
    user,
    isAuthenticated: !!user,
    isLoading,
    signinRedirect,
    signoutRedirect,
    signoutSilent,
    removeUser
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

// Hook to use the auth context
export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within a MILoginAuthProvider');
  }
  return context;
}

// Compatibility hook for components using react-oidc-context pattern
export function useAuthActions() {
  const { signinRedirect, signoutRedirect, signoutSilent, removeUser } = useAuth();
  
  return {
    signinRedirect,
    signoutRedirect,
    signoutSilent,
    removeUser
  };
}