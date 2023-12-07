
//ska matcha index.jsx från labb
//anropas från index.html via root module

//had to create teacherFetch.js file from lab, i dunno
import "/src/teacherFetch.js";
import model from "/src/IngredientsModel.js";

import { observable, configure } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions
const reactiveModel= observable(model);

import {createElement} from "react";
window.React= {createElement:createElement};

import {createRoot} from "react-dom/client";
import Root from "./Root.jsx"; 

//i vårt fall är id=root i index.html
createRoot(document.getElementById('root')).render(<Root model={reactiveModel}/>); 

window.myModel= reactiveModel;      

//reactiveModel.doSearch({});

import { makeRouter } from "./Root.jsx";