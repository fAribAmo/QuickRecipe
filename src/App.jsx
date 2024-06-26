import React from 'react';
import HomePagePresenter from './presenters/HomePagePresenter';
import AboutPagePresenter from './presenters/AboutPagePresenter';
import SearchPagePresenter from './presenters/SearchPagePresenter';
import ContactPagePresenter from './presenters/ContactPagePresenter';
import SearchResultPresenter from './presenters/SearchResultPresenter';
import SearchDetailsPresenter from './presenters/SearchDetailsPresenter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'; 

const App = (props) => {
  if(!props.model.ready) {
    return (
      <Router>
        <Routes>
          <Route path="/" element={<HomePagePresenter />} />
          <Route path="/search" element={<SearchPagePresenter model={props.model}/>} />
          <Route path="/contact" element={<ContactPagePresenter model={props.model}/>} />
          <Route path="/about" element={<AboutPagePresenter model={props.model}/>} />
          <Route path="/result" element={<SearchResultPresenter model={props.model}/>} />
          <Route path="/detail" element={<SearchDetailsPresenter model={props.model}/>} />
          {/* Add more routes as needed */}
        </Routes>
      </Router>
    );
  } else {
    return (
      <div>
        <img src="https://brfenergi.se/iprog/loading.gif" height="100"/>
      </div>
    );
  }
}

export default App;