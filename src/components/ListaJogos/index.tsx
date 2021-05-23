import React from 'react';
import IJogo from '../../models/IJogo';
import Jogo from '../Jogo';
import { Container, ItemJogo } from './styles';

interface ListaJogosProps {
    jogos: IJogo[];
}

const ListaJogos: React.FC<ListaJogosProps> = ({ jogos }) => {
    return (
        <Container>
            {jogos.map(jogo => (
                <ItemJogo key={jogo.id}>
                    <Jogo jogo={jogo} />
                </ItemJogo>
            ))}
        </Container>
    );
}

export default ListaJogos;