import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
        width: 100%;
        margin: 10px 0;
        text-decoration:none;
`;

export const TextoLink = styled.span`

color:${props => props.theme.corPrimaria};

&:hover{
 color: ${props => shade(0.3,  props.theme.corPrimaria)}
}
`;
