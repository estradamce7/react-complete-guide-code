import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';   // import Provider component from the react-redux

import './index.css';
import App from './App';
import store from './store/index';    // store also needs to be imported

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={store}><App /></Provider>);    // Provider needs to wrap our App so it has access to the store

// we need to pass our store in our Provider as a "store" prop

// Provider can be wrapped to any component. Only that component will have access to the store
// we need to "provide" our store to the highest level of the app