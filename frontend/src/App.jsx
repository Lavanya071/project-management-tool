import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';


import Navbar from './components/Navbar';
import Login from './pages/Login';

import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Tasks from './pages/Tasks.jsx'; // ✅ Correct way to import a default export
import  UserStories  from './pages/UserStories.jsx';

import ProtectedRoute from './components/ProtectedRoute';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
       <Route path="/" element={<Register />} />
<Route path="/register" element={<Register />} />

        <Route path="/login" element={<Login />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/tasks" element={<Tasks />} />
          <Route path="/stories" element={<UserStories />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
