import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import LayoutBase from './components/LayoutBase';
import { AlertaProvider } from './hooks/HAlerta';
import { UsuarioProvider } from './hooks/HUsuario';
import Rotas from './routes';
import GlobalStyles from './styles/global';
import Tema from './theme';

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <AlertaProvider>
        <UsuarioProvider>
          <BrowserRouter>
            <LayoutBase>
              <Rotas />
            </LayoutBase>
            <GlobalStyles />
          </BrowserRouter>
        </UsuarioProvider>
      </AlertaProvider>
    </ThemeProvider>
  );
}

export default App;
