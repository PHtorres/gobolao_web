import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
        background: ${props => props.theme.corTerciaria};
        border-radius: 10px;
        border: 0;
        padding: 10px;
        width: 100%;
        margin: 15px 10px 15px 0;
        transition: background-color 1s;

        &:hover{
            background: ${props => shade(0.3, props.theme.corTerciaria)}
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
