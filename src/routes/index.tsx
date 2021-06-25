import React from 'react';
import useAlerta from '../contexts/hooks/useAlerta';
import useUsuario from '../contexts/hooks/useUsuario';
import apiGoBolao from '../services/ApiGoBolao';
import Admin from './Admin';
import Privadas from './Privadas';
import Publicas from './Publicas';

const Rotas: React.FC = () => {

  const { usuario, sair } = useUsuario();
  const {exibirMensagens} = useAlerta();

  apiGoBolao.addResponseTransform((response): void => {
    if (response.status === 401) {
      sair();
      exibirMensagens(
        ['Vamos fazer login novamente?', 'Sua sessão expirou. Faça login e volte a navegar!'],
        'erro'
      )
    } else {
      if (response.status) {
        if (response.status > 399 && response.status < 500) {
          exibirMensagens(
            [
              'Tivemos problemas...',
              'Falha na conexão com o servidor.',
              'Sua conexão com a internet está legal?',
              'Se sim, tente novamente mais tarde.'
            ],
            'erro'
          );
        }

        if (response.status > 499 && response.status < 599) {
          exibirMensagens(
            [
              'Todo mundo erra... dessa vez foram nossos servidores.',
              'Pedimos desculpas. :(',
            ],
            'erro'
          );
        }
      }
    }
  });

  if (usuario.email === 'ph@gmail.com') {
    return <Admin />
  }

  if (usuario.logado) {
    return <Privadas />
  }

  return <Publicas />

}

export default Rotas;