import React, { createContext, useCallback, useState, useContext } from 'react';
import Modal from '../components/Modal';
import Sugestao from '../components/Sugestao';
import ISugestao from '../models/ISugestao';

interface IContextoSugestao {
    enviarSugestao(sugestao: ISugestao): void;
}

const ContextoSugestao = createContext<IContextoSugestao>({} as IContextoSugestao);

export const SugestaoProvider: React.FC = ({ children }) => {

    const [sugestaoVisivel, setSugestaoVisivel] = useState(false);
    const [sugestao, setSugestao] = useState<ISugestao>({} as ISugestao);

    const enviarSugestao = useCallback((sugestao: ISugestao) => {
        setSugestao(sugestao);
        setSugestaoVisivel(true);
    }, []);

    return (
        <ContextoSugestao.Provider value={{ enviarSugestao }}>
            {children}
            <Modal
                isOpen={sugestaoVisivel}
                fechar={() => setSugestaoVisivel(false)}
            >
                <Sugestao
                    sugestao={sugestao}
                    cancelar={() => setSugestaoVisivel(false)}
                />
            </Modal>
        </ContextoSugestao.Provider>
    );
}

export const useSugestao = (): IContextoSugestao => {
    const contexto = useContext(ContextoSugestao);
    return contexto;
}