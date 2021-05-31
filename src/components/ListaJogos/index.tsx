import React from 'react';
import IJogo from '../../models/IJogo';
import ItemJogo from '../ItemJogo';
import { Container, ItemListaJogo } from './styles';

interface ListaJogosProps {
    jogos: IJogo[];
}

const ListaJogos: React.FC<ListaJogosProps> = ({ jogos }) => {
    return (
        <Container>
            {jogos.map(jogo => (
                <ItemListaJogo key={jogo.id}>
                    <ItemJogo jogo={jogo} />
                </ItemListaJogo>
            ))}
        </Container>
    );
}

export default ListaJogos;