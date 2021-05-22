import React, { createContext, useCallback, useState, useContext, useEffect } from 'react';
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

    useEffect(() => {
        pegarRequisicoesApi();
    }, [pegarRequisicoesApi]);

    return (
        <ContextoCarregando.Provider value={{ estaCarregando }}>
            {children}
        </ContextoCarregando.Provider>
    );
}

export const useCarregando = (): IContextoCarregando => {
    const contexto = useContext(ContextoCarregando);
    return contexto;
}