import React from 'react';
import { Router } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ThemeContextProvider from '~/components/ThemeContext';
import Routes from '~/routes';
import history from '~/services/history';

const App = () => (
  <ThemeContextProvider>
    <ToastContainer />
    <Router history={history}>
      <Routes />
    </Router>
  </ThemeContextProvider>
);

export default App;
