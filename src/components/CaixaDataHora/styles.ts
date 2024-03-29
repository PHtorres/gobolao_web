import styled, { css } from 'styled-components';


interface ConteudoProps {
    focado: boolean;
}


export const Container = styled.div`

width:100%;
min-width:300px;
margin-bottom:15px;

`;

export const Conteudo = styled.div<ConteudoProps>`
  
border: solid 1px ${props => props.theme.corBordaInput};
width: 100%;
padding:10px;
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
`;
