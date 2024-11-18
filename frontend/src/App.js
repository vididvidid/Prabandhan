import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import AboutUs from './components/Aboutus';
import Dashboard from './components/Dashboard';
import Login from './components/Login';
import Signup from './components/Signup';

function App() {
  const user = "John Doe"; 
  const logout = () => {
    console.log("Logout clicked");
  };

  return (
    <Router>
      <Navbar user={user} logout={logout} />
      <div className="pt-16">
        <Routes>
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
