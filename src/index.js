import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './components/App';
import bookReducer from './reducers/books';

const store = createStore(bookReducer);

ReactDOM.render(
  <Provider store={store}>
    <App />
    ,
  </Provider>,
  document.getElementById('root'),
);
