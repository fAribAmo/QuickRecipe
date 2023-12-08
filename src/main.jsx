import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import "/src/firebaseModel.js";
import { observable } from 'mobx';
import IngredientsModel from '/src/IngredientsModel.js';

const reactiveModel = observable(IngredientsModel);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App model={reactiveModel}/>
  </React.StrictMode>,
);

window.model = reactiveModel;