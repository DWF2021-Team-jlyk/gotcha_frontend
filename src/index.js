import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';
import rootReducer,{rootSaga} from './modules';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { applyMiddleware, createStore } from 'redux';
import ReduxThunk from 'redux-thunk';
import { createLogger } from 'redux-logger/src';


// const store = createStore(rootReducer, composeWithDevTools());
const logger = createLogger();
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, ReduxThunk)));

ReactDOM.render(
  <Provider store={store}>
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  </Provider>,
  document.getElementById('root'),
);