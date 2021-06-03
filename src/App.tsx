import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { AlertaProvider } from './hooks/HAlerta';
import { CarregandoProvider } from './hooks/HCarregando';
import { MenuMobileStatusProvider } from './hooks/HMenuMobileStatus';
import { SugestaoProvider } from './hooks/HSugestao';
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
