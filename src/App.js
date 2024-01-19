// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './Okta/home';
import Login from './Okta/login';
import ProtectedPage from './Okta/protected';

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/protected" element={<ProtectedPage />} />
          <Route path="/user-profile" element={<UserProfile />} />
        </Routes>
      </ErrorBoundary>
    </Router>
  );
};

export default App;