import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css';
import {BrowserRouter} from 'react-router-dom';
import App from './component/App/App';
import './assets/css/icofont.min.css';
import './assets/css/animate.css';
import './assets/css/style.min.css';
ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
       <App /> 
    </BrowserRouter> 
  );

  