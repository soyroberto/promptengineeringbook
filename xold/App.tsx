import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import PrefacePage from './pages/PrefacePage';
import IndexCardsPage from './pages/IndexCardsPage';
import Chapter1Page from './pages/Chapter1Page';
import ExamplesPage from './pages/ExamplesPage';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="preface" element={<PrefacePage />} />
          <Route path="index-cards" element={<IndexCardsPage />} />
          <Route path="chapter1" element={<Chapter1Page />} />
          <Route path="examples" element={<ExamplesPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
