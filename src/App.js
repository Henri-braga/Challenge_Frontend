import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global.style';

import Routes from './routes';
import history from './services/history';

import { AppProvider } from './contexts';

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <BrowserRouter history={history}>
        <Routes />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
