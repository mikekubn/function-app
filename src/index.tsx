import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const appElementId = 'root';
const appElement = document.getElementById(appElementId) as Element;

const root = ReactDOM.createRoot(appElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
