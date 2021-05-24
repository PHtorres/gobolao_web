import styled, { css, keyframes } from 'styled-components';

const fromTheLeft = keyframes`
from {
    opacity: 0;
    transform: translateX(-50px);
}
to{
    opacity: 1;
    transform: translateX(0);
}
`;


interface ContainerProps{
    tipo:'erro'|'sucesso'
}

interface TextoProps{
    tipo:'erro'|'sucesso'
}

export const Container = styled.div<ContainerProps>`
  animation:${fromTheLeft} 1s;
  width:auto;
  padding:10px;
  background-color:${({theme}) => theme.corFundoSucesso};
  display:flex;
  justify-content:space-between;
  align-items:center;
  border-radius:10px;
  margin-bottom:10px;

${({tipo}) => tipo === 'erro' && css`
background-color:${({theme}) => theme.corFundoAlerta};
`};

`;

export const Texto = styled.span<TextoProps>`
color:${({theme}) => theme.corTextoSucesso};

${({tipo}) => tipo === 'erro' && css`
color:${({theme}) => theme.corTextoAlerta};
`};

`;
