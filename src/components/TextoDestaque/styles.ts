import styled from 'styled-components';

export const Container = styled.span`
color:${props => props.theme.corTextoSubTitulo};
font-weight: bold;
@media(max-width: 415px) {
    font-size: 13px;
  }
`;
