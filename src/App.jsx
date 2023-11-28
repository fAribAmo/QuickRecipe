import React from 'react';
import HomePageView from './views/HomePageView';
import SearchPageView from './views/SearchPageView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/search" element={<SearchPageView />} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;