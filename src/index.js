import React from 'react'
import ReactDOM from 'react-dom';
import NetflixApp from './NetflixApp';
import { BrowserRouter } from "react-router-dom";
import store from "./Netflix/store";
import { Provider } from "react-redux";
// css imports
import './index.css';


ReactDOM.render(
  <>
    <Provider store={store}>
      <BrowserRouter>
        <NetflixApp />
      </BrowserRouter>
    </Provider>
  </>,
  document.getElementById('root')
);


