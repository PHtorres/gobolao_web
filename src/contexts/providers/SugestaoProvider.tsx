import { useCallback, useState } from "react";
import Modal from "../../components/Modal";
import Sugestao from "../../components/Sugestao";
import ISugestao from "../../models/ISugestao";
import ContextoSugestao from "../ContextoSugestao";

const SugestaoProvider: React.FC = ({ children }) => {

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
                conteudoCentralizadoVertical
            >
                <Sugestao
                    sugestao={sugestao}
                    cancelar={() => setSugestaoVisivel(false)}
                />
            </Modal>
        </ContextoSugestao.Provider>
    );
}

export default SugestaoProvider;