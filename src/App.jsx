import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ProductListPage from './pages/ProductListPage';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ProductListPage />} />
        <Route path="/product/:id" element={<ProductDetailsPage />} />
      </Routes>
    </Router>
  );
} 