import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, combineReducers } from 'redux';
import App from './components/App';
import bookReducer from './reducers/books';
import filterReducer from './reducers/filter';

const rootReducer = combineReducers({ books: bookReducer, filter: filterReducer });

const store = createStore(rootReducer);



ReactDOM.render(
  <Provider store={store}>
    <App />
    ,
  </Provider>,
  document.getElementById('root'),
);
