import { useCallback, useState } from "react";
import Carregando from "../../components/Carregando";
import apiGoBolao from "../../services/ApiGoBolao";
import ContextoCarregando from "../ContextoCarregando";

const CarregandoProvider: React.FC = ({ children }) => {

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
    
    return (
        <ContextoCarregando.Provider value={{ estaCarregando }}>
            {children}
            {estaCarregando && <Carregando />}
        </ContextoCarregando.Provider>
    );
}

export default CarregandoProvider;