"use client";

import axios from "axios";
import { createContext, useContext, useEffect, useMemo, useState } from "react";

const AuthContext = createContext({
  token: null,
  isLoading: true,
  setToken: () => {},
});

const AuthProvider = ({ children }) => {
  const [token, setToken_] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const storedToken = sessionStorage.getItem("token");

    if (storedToken) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setToken_(storedToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${storedToken}`;
    }

    setIsLoading(false);
  }, []);

  const setToken = (newToken = null) => {
    if (newToken) {
      sessionStorage.setItem("token", newToken);
      axios.defaults.headers.common["Authorization"] = `Bearer ${newToken}`;

    } else {
      sessionStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
    }
    setToken_(newToken);
  };

  const contextValue = useMemo(() => ({ token, isLoading, setToken }), [token,  isLoading]);

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);

export default AuthProvider;
