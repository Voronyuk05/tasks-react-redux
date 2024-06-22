import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { Provider } from "react-redux"
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider>
    <App />
  </Provider>
);
