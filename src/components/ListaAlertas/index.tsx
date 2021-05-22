import React from 'react';
import IMensagemAlerta from '../../models/IMensagemAlerta';
import Alerta from '../Alerta';

import { Container } from './styles';

interface ListaAlertasPropos {
    mensagens: IMensagemAlerta[];
}

const ListaAlertas: React.FC<ListaAlertasPropos> = ({ mensagens }) => {
    return (
        <Container>
            {mensagens.map(item => (
                <Alerta id={item.id} mensagem={item.mensagem} tipo={item.tipo} />
            ))}
        </Container>
    );
}

export default ListaAlertas;