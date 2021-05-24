import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.button`
        background: ${props => props.theme.corPrimaria};
        border-radius: 10px;
        border: 0;
        padding: 10px;
        width: 100%;
        margin: 15px 10px 15px 0;
        transition: background-color 1s;

        &:hover{
            background: ${props => shade(0.3, props.theme.corPrimaria)}
        }
`;

export const TextoBotao = styled.span`
color: ${({ theme }) => theme.corFundo};
`;
