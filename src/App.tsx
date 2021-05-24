import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import Carregando from './components/Carregando';
import { AlertaProvider } from './hooks/HAlerta';
import { CarregandoProvider } from './hooks/HCarregando';
import { UsuarioProvider } from './hooks/HUsuario';
import LayoutBase from './layouts/LayoutBase';
import GlobalStyles from './styles/global';
import Tema from './theme';

function App() {
  return (
    <ThemeProvider theme={Tema}>
      <CarregandoProvider>
        <AlertaProvider>
          <UsuarioProvider>
            <BrowserRouter>
              <LayoutBase />
              <GlobalStyles />
              <Carregando />
            </BrowserRouter>
          </UsuarioProvider>
        </AlertaProvider>
      </CarregandoProvider>
    </ThemeProvider>
  );
}

export default App;
