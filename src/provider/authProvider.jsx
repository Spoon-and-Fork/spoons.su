"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext({
  token: null,
  role: null,
  isLoading: true,
  setToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(null);
  const [role, setRole] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");
    const storedRole = sessionStorage.getItem("role");

    if (storedToken) {
      setToken_(storedToken);
      setRole(storedRole);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }

    setIsLoading(false);
  }, []);

  const setToken = (newToken, userRole = null) => {
    if (newToken) {
      sessionStorage.setItem("token", newToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

      if (userRole) {
        sessionStorage.setItem("role", userRole);
        setRole(userRole);
      }
    } else {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("role");
      delete axios.defaults.headers.common["Authorization"];
      setRole(null);
    }
    setToken_(newToken);
  };

  const contextValue = useMemo(() => ({ token, role, isLoading, setToken }), [token, role, isLoading]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
