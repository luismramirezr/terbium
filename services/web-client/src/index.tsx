import React from 'react';
import ReactDOM from 'react-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/scss/main.scss';
import 'typeface-roboto';

import GlobalStyle from '~/styles/global';

import App from '~/App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <>
    <ToastContainer />
    <GlobalStyle />
    <App />
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
