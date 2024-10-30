// src/App.js
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import EventForm from './pages/EventForm';
import Signup from './pages/SignUp';
import EventDetails from './pages/EventDetails'

const ProtectedRoutes = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'))
  useEffect(() => {
    setIsAuthenticated(!!localStorage.getItem('token'));
  }, [])
  return isAuthenticated ? children : <Navigate to="/login" />;
}

const App = () => {

  // const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'))
  // console.log("isAuthenticated", isAuthenticated)
  // useEffect(() => {
    // Listen for changes in local storage
    // const handleStorageChange = () => {
    // setIsAuthenticated(!!localStorage.getItem('token'));
    // };

    // // Add event listener for storage changes
    // window.addEventListener('storage', handleStorageChange);

    // // Cleanup listener when component unmounts
    // return () => {
    //   window.removeEventListener('storage', handleStorageChange);
    // };
  // }, []);
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<ProtectedRoutes><Dashboard /></ProtectedRoutes>} />
        <Route path="/create-event" element={<ProtectedRoutes><EventForm /></ProtectedRoutes > } />
        <Route path="/events/:id" element={<EventDetails />} />
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
};

export default App;
