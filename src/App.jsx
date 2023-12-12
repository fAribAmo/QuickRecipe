import React from 'react';
import HomePagePresenter from './presenters/HomePagePresenter';
import SearchPagePresenter from './presenters/SearchPagePresenter';
import ContactPagePresenter from './presenters/ContactPagePresenter';
import SearchResultPresenter from './presenters/SearchResultPresenter';
import SearchDetailsPresenter from './presenters/SearchDetailsPresenter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 

const App = (props) => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePagePresenter />} />
        <Route path="/search" element={<SearchPagePresenter model={props.model}/>} />
        <Route path="/contact" element={<ContactPagePresenter />} />
        <Route path="/result" element={<SearchResultPresenter model={props.model}/>} />
        <Route path="/detail" element={<SearchDetailsPresenter model={props.model}/>} />
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;