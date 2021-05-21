import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LayoutBase from './components/LayoutBase';
import Rotas from './routes';
import GlobalStyles from './styles/global';
import Tema from './theme';

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <BrowserRouter>
        <LayoutBase>
          <Rotas />
        </LayoutBase>
        <GlobalStyles />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
