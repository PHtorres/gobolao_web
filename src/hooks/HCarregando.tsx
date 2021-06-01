import React, { createContext, useCallback, useState, useContext } from 'react';
import Carregando from '../components/Carregando';
import apiGoBolao from '../services/ApiGoBolao';

interface IContextoCarregando {
    estaCarregando: boolean;
}

const ContextoCarregando = createContext<IContextoCarregando>({} as IContextoCarregando);

export const CarregandoProvider: React.FC = ({ children }) => {

    const [estaCarregando, setEstaCarregando] = useState(false);

    const pegarRequisicoesApi = useCallback(() => {
        apiGoBolao.addRequestTransform((request) => {
            setEstaCarregando(true);
        });
        apiGoBolao.addResponseTransform((response) => {
            setTimeout(() => {
                setEstaCarregando(false);
            }, 400);
        });
    }, []);

    pegarRequisicoesApi();

    // useEffect(() => {
    //     pegarRequisicoesApi();
    // }, [pegarRequisicoesApi]);

    return (
        <ContextoCarregando.Provider value={{ estaCarregando }}>
            {children}
            <Carregando />
        </ContextoCarregando.Provider>
    );
}

export const useCarregando = (): IContextoCarregando => {
    const contexto = useContext(ContextoCarregando);
    return contexto;
}