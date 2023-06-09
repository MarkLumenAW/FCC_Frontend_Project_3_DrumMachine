import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { store } from './store/store.js';
import { Provider } from 'react-redux';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
      <App />
      <footer style={{fontFamily:'system-ui, Avenir, Helvetica, Arial, sans-serif',fontSize:'0.6rem',color:'grey', margin:'1rem'}}>By Alex Wang</footer>
  </Provider>,
);
