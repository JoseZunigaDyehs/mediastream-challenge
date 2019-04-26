import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store.js';
import registerServiceWorker from "./serviceWorker";
import "./assets/sass/main.scss";

import Router from './router.js';

//Estructura con react redux,
//Usé Immutable para  manejar la store
ReactDOM.render(
  <Provider store={ store }>
    <Router />
  </Provider>,
  document.getElementById('root')
);

registerServiceWorker();