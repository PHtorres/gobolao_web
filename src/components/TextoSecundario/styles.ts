import styled from 'styled-components';

export const Container = styled.span`
color:${props => props.theme.corTextoTituloPrimario};
@media(max-width: 415px) {
    font-size: 13px;
  }
`;
