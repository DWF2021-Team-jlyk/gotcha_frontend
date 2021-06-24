import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, createStore } from 'redux';
//import rootReducer from './reducer';
//import logger from "redux-logger";
import { Provider } from 'react-redux';
//const store= createStore(rootReducer,applyMiddleware(logger))
ReactDOM.render(

  // <Provider store={store}></Provider>
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);

