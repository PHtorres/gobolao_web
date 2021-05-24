import React from 'react';
import utils from '../../utils';
import { Container } from './styles';

interface AvatarTimeProps{
    nomeImagem:string;
}

const AvatarTime: React.FC<AvatarTimeProps> = ({nomeImagem}) => {
  return (
      <Container src={utils.urlImagem(nomeImagem)} alt="avatar"/>
  );
}

export default AvatarTime;