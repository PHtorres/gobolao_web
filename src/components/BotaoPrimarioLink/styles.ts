import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
        background: ${props => props.theme.corPrimaria};
        border-radius: 10px;
        border: 0;
        padding: 10px;
        width: 100%;
        margin: 15px 10px 15px 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 1s;

        &:hover{
            background: ${props => shade(0.3, props.theme.corPrimaria)}
        }

        @media(max-width: 415px) {
            padding: 3px;
        }
`;

export const TextoBotao = styled.span`
color: ${({ theme }) => theme.corFundo};
@media(max-width: 415px) {
    font-size: 12px;
  }
`;
