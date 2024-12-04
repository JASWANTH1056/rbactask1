import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Login from './components/Login';
import Register from './components/Register';
import AdminDashboard from './components/AdminDashboard';
import UserDashboard from './components/UserDashboard';
import PrivateRoute from './components/PrivateRoute';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
        <Navbar />
          <Routes>
          <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        
        <Route 
          path="/ADMIN" element={<PrivateRoute role="ADMIN"><AdminDashboard /></PrivateRoute> } />
        <Route 
          path="/USER" element={<PrivateRoute role="USER"><UserDashboard /></PrivateRoute> }/>
        
          </Routes>
    
    </Router>
    
  );
}

export default App;
