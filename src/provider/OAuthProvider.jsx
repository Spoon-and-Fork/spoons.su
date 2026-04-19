"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext({
  user: null,
  isLoading: true,
  isAuthenticated: false,
  logout: () => {},
  refreshToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        const response = await fetch("/api/auth/userinfo");
        const data = await response.json();

        if (response.ok && data.success) {
          setUser(data.user);
          setIsAuthenticated(true);
          const accessToken = document.cookie
            .split("; ")
            .find((row) => row.startsWith("access_token="))
            ?.split("=")[1];

          if (accessToken) {
            axios.defaults.headers.common["Authorization"] =
              `Bearer ${accessToken}`;
          }
        } else {
          setUser(null);
          setIsAuthenticated(false);
          delete axios.defaults.headers.common["Authorization"];
        }
      } catch (error) {
        console.error("Auth check failed:", error);
        setUser(null);
        setIsAuthenticated(false);
        delete axios.defaults.headers.common["Authorization"];
      } finally {
        setIsLoading(false);
      }
    };
    checkAuthStatus()
  });

  /*const refreshToken = async () => {
    try {
      const response = await fetch('/api/auth/refresh', { method: 'POST' });
      const data = await response.json();

      if (response.ok && data.success) {
        await checkAuthStatus();
        return true;
      } else {
        logout();
        return false;
      }
    } catch (error) {
      console.error('Token refresh failed:', error);
      logout();
      return false;
    }
  };

  const logout = async () => {
    try {
      document.cookie = 'access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'refresh_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'id_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'token_type=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'token_expires_at=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      document.cookie = 'oauth_state=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;';
      
      setUser(null);
      setIsAuthenticated(false);
      delete axios.defaults.headers.common["Authorization"];
      
      window.location.href = '/auth';
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };*/

  const contextValue = useMemo(
    () => ({
      user,
      isLoading,
      isAuthenticated,
    }),
    [user, isLoading, isAuthenticated],
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
