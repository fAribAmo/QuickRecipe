
//like React/Vue root from lab
//handles navigation in app

import React from 'react';
import { createHashRouter,  RouterProvider, useParams } from "react-router-dom";
import SearchPresenter from './presenters2/SearchPagePresenter.jsx';
import './App.css'; 

export default function Root(props) {
    if(!props.model.ready) {
        return (
            <div>
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
            element: <SearchPresenter model={model} />,
        },
        {
            path: "/search",
            element: <SearchPresenter model={model}/>,
        },    
    ])
}