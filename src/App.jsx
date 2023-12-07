import React from 'react';
import HomePagePresenter from './presenters/HomePagePresenter';
import SearchPageView from './views/SearchPageView';
import ContactPagePresenter from './presenters/ContactPagePresenter';
import SearchResultView from './views/SearchResultView';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePagePresenter />} />
        <Route path="/search" element={<SearchPageView />} />
        <Route path="/contact" element={<ContactPagePresenter />} />
        <Route path="/result" element={<SearchResultView />} />
        
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;