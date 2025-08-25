import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignupPage from './components/Signup.jsx';
import LoginPage from './components/Loginpage.jsx';
import Landingpage from './components/Landingpage';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Workflow from './components/Workflow.jsx';
import './App.css';
import Tripplanner from './components/Tripplanner.jsx';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landingpage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/workflow" element={<Workflow />} />
        <Route path="/tripplanner" element={<Tripplanner />} /> 
      </Routes>
    </Router>
  );
}

export default App;
