import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
window.addEventListener('keydown', function(e) {
    if(e.key == " " && e.target == document.body) {
        e.preventDefault();
    }
});
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

