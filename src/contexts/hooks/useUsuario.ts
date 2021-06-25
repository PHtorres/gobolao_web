import { useContext } from "react";
import ContextoUsuario from "../ContextoUsuario";
import IContextoUsuario from "../models/IContextoUsuario";

const useUsuario = (): IContextoUsuario => {
    const contexto = useContext(ContextoUsuario);
    return contexto;
}

export default useUsuario;