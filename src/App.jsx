import React from 'react';
import HomePageView from './views/HomePageView';
import SearchPageView from './views/SearchPageView';
import ContactPageView from './views/ContactPageView';
import SearchResultView from './views/SearchResultView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePageView />} />
        <Route path="/search" element={<SearchPageView />} />
        <Route path="/contact" element={<ContactPageView />} />
        <Route path="/result" element={<SearchResultView />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;