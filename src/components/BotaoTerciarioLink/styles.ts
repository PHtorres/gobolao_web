import styled from 'styled-components';
import { shade } from 'polished';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
        background: ${props => props.theme.corTerciaria};
        border-radius: 10px;
        border: 0;
        padding: 10px;
        width: 100%;
        margin: 15px 0;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: background-color 1s;
        text-align: center;

        &:hover{
            background: ${props => shade(0.1, props.theme.corTerciaria)}
        }

        @media(max-width: 415px) {
            padding: 3px;
        }
`;

export const TextoBotao = styled.span`
color: ${({ theme }) => theme.corTextoTerciaria};
@media(max-width: 415px) {
    font-size: 12px;
  }
`;
