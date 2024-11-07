import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/Aboutus';
import Home from './components/Home';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const user = "John Doe"; // Replace with actual user logic
  const logout = () => {
    console.log("Logout clicked");
    // Implement logout functionality
  };

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <div className="pt-16"> {/* Add padding to avoid overlapping with fixed navbar */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
