import React from 'react';
import { useCarregando } from '../../hooks/HCarregando';
import { Container, GifCarregando } from './styles';
import loadingGif from '../../assets/images/loading.gif';

const Carregando: React.FC = () => {

    const { estaCarregando } = useCarregando();

    if (estaCarregando) {
        return (
            <Container>
                <GifCarregando src={loadingGif}/>
            </Container>
        );
    }

    return <></>
}

export default Carregando;