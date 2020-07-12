import React from 'react';
import { Router } from 'react-router-dom';

import ThemeContextProvider from '~/components/ThemeContext';
import Routes from '~/routes';
import history from '~/services/history';

const App = () => (
  <ThemeContextProvider>
    <Router history={history}>
      <Routes />
    </Router>
  </ThemeContextProvider>
);

export default App;
