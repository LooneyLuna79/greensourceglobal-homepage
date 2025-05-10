import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Import your page components
import Home from './Home'; // Assuming you have a Home.jsx in the same directory
import InPage from './InPage'; // Assuming you have InPage.jsx in the same directory

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} /> {/* Route for the root path */}
        <Route path="/in" element={<InPage />} /> {/* Route for /in */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

