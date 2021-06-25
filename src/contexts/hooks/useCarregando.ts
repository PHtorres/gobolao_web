import { useContext } from "react";
import ContextoCarregando from "../ContextoCarregando";
import IContextoCarregando from "../models/IContextoCarrehando";

const useCarregando = (): IContextoCarregando => {
    const contexto = useContext(ContextoCarregando);
    return contexto;
}

export default useCarregando;