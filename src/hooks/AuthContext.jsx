// src/context/AppContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

// 1. Create context
const AuthContext = createContext();

// 2. Create provider
export const AuthProvider = ({ children }) => {
  const fixedEmail = "memaraaa123@gmail.com";
  const FixedPassword = "12345";
  const [isLoggedIn, setIsloggedIn] = useState(
    localStorage.getItem("email") === fixedEmail
  );
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (localStorage.getItem("email") === fixedEmail) {
      setIsloggedIn(true);
      return;
    }
  }, []);

  useEffect(() => {
    const protectedRoutes = ["/dashboard"];
    const mainRoutes = ["/dashboard", "/", "/login"];
    const negateWeirdNav = mainRoutes.includes(location.pathname);
    const negateNav = protectedRoutes.includes(location.pathname);
    if (!isLoggedIn && negateNav) {
      navigate("/login");
    }
    if (!negateWeirdNav) {
      navigate("/");
    }
  }, [location.pathname, navigate, isLoggedIn]);

  const handleLogin = (e, emailRef, passwordRef) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    const password = passwordRef.current?.value;
    if (email !== fixedEmail || password !== FixedPassword) {
      alert("wrong email or password");
      return false;
    }
    setIsloggedIn(true);
    navigate("/dashboard");
    alert('welcome 3mo mortis!')
    localStorage.setItem("email", email);
    return true;
  };

  const handleLogOut = () => {
    if (localStorage.getItem("email")) {
      if (confirm("are you sure you want to logout 3mo mortis?")) {
        localStorage.removeItem("email");
        setIsloggedIn(false);
        navigate("/");
      }
    }
  };

  return (
    <AuthContext.Provider value={{ handleLogin, isLoggedIn, handleLogOut }}>
      {children}
    </AuthContext.Provider>
  );
};

// 3. Custom hook to use context
export const useAuthContext = () => useContext(AuthContext);
