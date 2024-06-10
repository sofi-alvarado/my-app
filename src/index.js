import React from 'react';
import ReactDOM from 'react-dom/client';

import 'bootswatch/dist/vapor/bootstrap.min.css';

import LogIn from './pages/LogIn';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <LogIn />
  </React.StrictMode>
);

reportWebVitals();
