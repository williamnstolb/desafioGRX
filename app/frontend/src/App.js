import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Result from './components/Result';
import Forms from './pages/Forms';

function App() {
  return (
    <Routes >
      <Route path="/" element={<Navigate to="/forms" />} />
      <Route path="result" element={<Result />} />
      <Route path="/forms" element={<Forms />} />
    </Routes>
  );
}

export default App;
