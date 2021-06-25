import React from 'react';
import { Container, GifCarregando } from './styles';
import loadingGif from '../../assets/images/loading.gif';

const Carregando: React.FC = () => {

    return (
        <Container>
            <GifCarregando src={loadingGif} />
        </Container>
    );
}

export default Carregando;