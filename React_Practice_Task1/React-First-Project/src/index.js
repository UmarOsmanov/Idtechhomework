import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'; // Stil əlavə edirsinizsə, bunu istifadə edirsiniz

ReactDOM.render(
  <React.StrictMode>
    <App /> {/* App.js komponentini göstəririk */}
  </React.StrictMode>,
  document.getElementById('root') // Bu, HTML-də olan div id="root" elementinə əlavə edilir
);
