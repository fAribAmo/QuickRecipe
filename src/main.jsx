import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "/src/firebaseModel.js";
import { observable } from 'mobx';
import IngredientsModel from '/src/IngredientsModel.js';
import { getRecipeInformation } from './recipeSource.js';

const reactiveModel = observable(IngredientsModel);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App model={reactiveModel}/>
  </React.StrictMode>,
);

window.model = reactiveModel;

window.getRecipeInformation = getRecipeInformation;

import { configure, reaction } from "mobx";
configure({ enforceActions: "never", });  // we don't use Mobx actions

import firebaseModel from "./firebaseModel.js";
import connectToFirebase from "./firebaseModel.js";
connectToFirebase(reactiveModel, reaction)