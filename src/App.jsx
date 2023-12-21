import React from 'react';
import HomePagePresenter from './presenters/HomePagePresenter';
import AboutPagePresenter from './presenters/AboutPagePresenter';
import SearchPagePresenter from './presenters/SearchPagePresenter';
import ContactPagePresenter from './presenters/ContactPagePresenter';
import SearchResultPresenter from './presenters/SearchResultPresenter';
import SearchDetailsPresenter from './presenters/SearchDetailsPresenter';
import NavigationBarPresenter from './presenters/NavigationBarPresenter';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { createHashRouter,  RouterProvider, useParams } from "react-router-dom";
import './App.css'; 


function App(props) {
    if(!props.model.ready) {
        return (
            <div>
              <div>
                  <NavigationBarPresenter model={model}/>
              </div>
              <div>
                  <RouterProvider router={makeRouter(props.model)} />
              </div>
            </div>
           )
    } else {
        return (
            <div>
                <img src="https://brfenergi.se/iprog/loading.gif" height="100"/>
            </div>
        );
    }
    
}

export function makeRouter(model) {
    return createHashRouter([
        {
            path: "/",
            element: <HomePagePresenter model={model} />,
        },
        {
            path: "/search",
            element: <SearchPagePresenter model={model}/>,
        },
        {
            path: "/contact",
            element: <ContactPagePresenter model={model}/>,
        },
        {
          path: "/about",
          element: <AboutPagePresenter model={model}/>,
        },
        {
          path: "/result",
          element: <SearchResultPresenter model={model}/>,
        },
        {
          path: "/detail",
          element: <SearchDetailsPresenter model={model}/>,
        },         
    ])
}

export default App;

/*
const App = (props) => {
  if(!props.model.ready) {
    return (
      <div>
        <div>
            <NavigationBarPresenter/>
        </div>
        <div>
          <Router>
          <Routes>
          
            <Route path="/" element={<HomePagePresenter />} />
            <Route path="/search" element={<SearchPagePresenter model={props.model}/>} />
            <Route path="/contact" element={<ContactPagePresenter />} />
            <Route path="/about" element={<AboutPagePresenter />} />
            <Route path="/result" element={<SearchResultPresenter model={props.model}/>} />
            <Route path="/detail" element={<SearchDetailsPresenter model={props.model}/>} />
            {/* Add more routes as needed } /*
          </Routes>
        </Router>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <img src="https://brfenergi.se/iprog/loading.gif" height="100"/>
      </div>
    );
  }
}
*/

