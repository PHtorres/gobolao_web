import { useCallback, useState } from "react";
import { uuid } from "uuidv4";
import ListaAlertas from "../../components/ListaAlertas";
import IMensagemAlerta from "../../models/IMensagemAlerta";
import ContextoAlerta from "../ContextoAlerta";

const AlertaProvider: React.FC = ({ children }) => {

    const [listaMensagens, setListaMensagens] = useState<IMensagemAlerta[]>([]);

    const exibirMensagem = useCallback((mensagem: string, tipo: 'erro' | 'sucesso') => {
        setListaMensagens((mensagens) => [{ id:uuid(), mensagem, tipo }, ...mensagens]);
    }, []);

    const exibirMensagens = useCallback((mensagens: string[], tipo: 'erro' | 'sucesso') => {

        const novasMensagens = mensagens.map(item => {
            return {id:uuid(), mensagem: item, tipo }
        });

        setListaMensagens((mensagens) => [...novasMensagens, ...mensagens]);
    }, []);

    const removerMensagem = useCallback((id: string) => {
        setListaMensagens((mensagens) => mensagens.filter(item => item.id !== id));
    }, []);

    return (
        <ContextoAlerta.Provider value={{ exibirMensagem, exibirMensagens, removerMensagem }}>
            {children}
            <ListaAlertas mensagens={listaMensagens} />
        </ContextoAlerta.Provider>
    );
}

export default AlertaProvider;