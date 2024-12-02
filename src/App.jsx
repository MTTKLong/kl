import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GoogleSignIn from './components/login/GoogleSignIn';
import HomePage from './components/app/HomePage';

const App = () => (
  <Router >
    <Routes>
      <Route path="/login" element={<GoogleSignIn />} />
      <Route path="/" element={<HomePage />} /> {/* Define your home route */}
    </Routes>
  </Router>
);

export default App;
