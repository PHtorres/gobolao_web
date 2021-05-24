import styled, { css } from 'styled-components';


interface ConteudoProps {
    focado: boolean;
}


export const Container = styled.div`

max-width:50px;
margin-bottom:15px;

@media(max-width: 415px) {
    max-width:35px;
  }

`;

export const Conteudo = styled.div<ConteudoProps>`
  
border: solid 1px ${props => props.theme.corBordaInput};
width: 100%;
padding:5px;
border-radius: 10px;
display:flex;
justify-content:flex-start;

${
    props => props.focado && css`    
    border-color:${props.theme.corPrimaria};
    `
}
`;

export const Input = styled.input`

color:${props => props.theme.corTextoSubTitulo};
outline: none;
background-color:transparent;
border:0;
width:100%;
margin-left:5px;

@media(max-width: 415px) {
    font-size: 12px;
  }
`;
