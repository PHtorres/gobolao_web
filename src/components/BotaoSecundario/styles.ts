import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
        background: ${props => props.theme.corSecundaria};
        border-radius: 10px;
        border: 0;
        padding: 10px;
        width: 100%;
        margin: 15px 10px 15px 0;
        transition: background-color 1s;

        &:hover{
            background: ${props => shade(0.1, props.theme.corSecundaria)}
        }
        @media(max-width: 415px) {
            padding: 5px;
        }
`;

export const TextoBotao = styled.span`
color: ${({ theme }) => theme.corTextoSecundaria};
@media(max-width: 415px) {
    font-size: 12px;
   }
`;
