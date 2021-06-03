import styled from 'styled-components';

export const AreaAvatar = styled.div`
  margin: 20px 0;
`;


export const InputImagem = styled.input`
display: none;
`;

export const LabelSelecionarArquivo = styled.label`
display: flex;
justify-content: center;
align-items: center;
padding: 10px;
background-color: ${({theme}) => theme.corPrimaria};
cursor: pointer;
color: ${({theme}) => theme.corFundo};
`;