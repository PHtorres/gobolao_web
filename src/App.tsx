import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import AlertaProvider from './contexts/providers/AlertaProvider';
import CarregandoProvider from './contexts/providers/CarregandoProvider';
import { MenuMobileStatusProvider } from './contexts/providers/MenuMobileStatusProvider';
import SugestaoProvider from './contexts/providers/SugestaoProvider';
import UsuarioProvider from './contexts/providers/UsuarioProvider';
import LayoutBase from './layouts/LayoutBase';
import GlobalStyles from './styles/global';
import Tema from './theme';

const App = () => {
  return (
    <ThemeProvider theme={Tema}>
      <CarregandoProvider>
        <AlertaProvider>
          <UsuarioProvider>
            <BrowserRouter>
              <SugestaoProvider>
                <MenuMobileStatusProvider>
                  <LayoutBase />
                </MenuMobileStatusProvider>
              </SugestaoProvider>
              <GlobalStyles />
            </BrowserRouter>
          </UsuarioProvider>
        </AlertaProvider>
      </CarregandoProvider>
    </ThemeProvider>
  );
}

export default App;
