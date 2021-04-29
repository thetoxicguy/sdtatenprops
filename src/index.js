import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import AppFirst from './AppFirst'
import AppImproved from './AppImproved'
import App from './App';
import Video from './components/video'

ReactDOM.render(
  <React.StrictMode>
    <AppFirst />
    <AppImproved />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
