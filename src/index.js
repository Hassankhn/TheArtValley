import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
//Browser router is used here to prevent default behaviour then it we used in app.js 
//to route