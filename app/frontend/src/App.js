import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Forms from './pages/Forms';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Navigate to="/forms" />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
