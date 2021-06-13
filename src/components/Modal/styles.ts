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
  conteudoCentralizadoVertical?:boolean;
}

export const Container = styled.div<ContainerProps>`

  position:fixed;
  height:100vh;
  width:100%;
  top:0;
  left:0;
  background-color:rgba(0,0,0,0.8);
  z-index:100;
  display:flex;
  justify-content:center;
  padding: 10px;

${({conteudoCentralizadoVertical}) => 
conteudoCentralizadoVertical && css`
align-items: center;
`}

`;

export const AreaBotaoFechar = styled.div`

position:absolute;
top:15px;
right:15px;
cursor: pointer;

`;


export const AreaConteudo = styled.div`
  animation:${fromTheLeft} 1s;
  background-color:${props => props.theme.corFundo};
  border-radius:10px;
  height: auto;
  overflow-y: auto;
  &::-webkit-scrollbar{
    display:none;
  }
`;
