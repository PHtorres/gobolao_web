import styled from 'styled-components';

export const Container = styled.span`
color:${props => props.theme.corTextoSubTitulo};
@media(max-width: 415px) {
    font-size: 12px;
  }
`;
