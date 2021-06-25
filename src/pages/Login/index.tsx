import React, { FormEvent, useState } from 'react';
import CaixaTexto from '../../components/CaixaTexto';
import ContainerPadraoCentralizado from '../../components/ContainerPadraoCentralizado';
import Titulo from '../../components/Titulo';
import { Formulario, AreaSugerirCriarConta } from './styles';
import { BiUser, BiLock } from 'react-icons/bi';
import BotaoPrimario from '../../components/BotaoPrimario';
import BotaoLink from '../../components/BotaoLink';
import Texto from '../../components/Texto';
import useUsuario from '../../contexts/hooks/useUsuario';

const Login: React.FC = () => {

  const { logar } = useUsuario();
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const tentarLogin = async (evento: FormEvent<HTMLFormElement>): Promise<void> => {
    evento.preventDefault();
    await logar(email, senha);
  }

  return (
    <ContainerPadraoCentralizado>
      <Titulo>Login</Titulo>
      <Formulario onSubmit={tentarLogin}>
        <CaixaTexto
          Icone={BiUser}
          label="E-mail"
          valor={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Digite seu e-mail"
        />
        <CaixaTexto
          Icone={BiLock}
          label="Senha"
          valor={senha}
          onChange={(e) => setSenha(e.target.value)}
          placeholder="Digite sua senha"
          type="password"
        />
        <BotaoPrimario>Entrar</BotaoPrimario>
        <BotaoLink to="/senha/recuperar">Esqueci minha senha</BotaoLink>
        <AreaSugerirCriarConta>
          <Texto>Não tem uma conta ainda?</Texto>
          <BotaoLink to="/conta/criar"> Criar conta</BotaoLink>
        </AreaSugerirCriarConta>
      </Formulario>
    </ContainerPadraoCentralizado>
  );
}

export default Login;