import React, { createContext } from 'react'
import ReactDOM from 'react-dom';
import NetflixApp from './NetflixApp';
import { BrowserRouter } from "react-router-dom";
// css imports
import './index.css';


ReactDOM.render(
  <>
    <BrowserRouter>
      <NetflixApp />
    </BrowserRouter>
  </>,
  document.getElementById('root')
);


