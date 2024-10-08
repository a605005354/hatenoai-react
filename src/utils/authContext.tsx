"use client"
import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { clearAuthDetails } from './authService';
import { validateJwt } from '@/requests/login';


// Define a type for your context state
type AuthContextType = {
  isAuthenticated: boolean;
  loginAuth: (jwtToken: string) => void;
  logoutAuth: () => void;
};

// Define initial context value matching the type above
const initialAuthContextValue: AuthContextType = {
  isAuthenticated: false,
  loginAuth: () => { },
  logoutAuth: () => { },
};

const AuthContext = createContext<AuthContextType>(initialAuthContextValue);


export const useAuth = () => {
  return useContext(AuthContext);
}

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem('token');
      // Here, you can also add logic to validate the token's integrity or expiration
      if (token) {
        // Wrap the token in an object to match the expected parameter structure
        validateJwt({ token }).then(response => {
          setIsAuthenticated(true);
        }).catch(error => {
          setIsAuthenticated(false);
        });
      }
    }
  }, []);

  const loginAuth = (jwtToken: string) => {
    if (typeof window !== "undefined") {
      localStorage.setItem('token', jwtToken)
      setIsAuthenticated(true);
    }
  };

  const logoutAuth = () => {
    clearAuthDetails
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, loginAuth, logoutAuth }}>
      {children}
    </AuthContext.Provider>
  );
};
