import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import bookReducer from './reducers/books';
import filterReducer from './reducers/filter';

const rootReducer = combineReducers({ books: bookReducer, filter: filterReducer });

/* eslint-disable no-underscore-dangle */

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
/* eslint-enable */

ReactDOM.render(
  <Provider store={store}>
    <App />
    ,
  </Provider>,
  document.getElementById('root'),
);
