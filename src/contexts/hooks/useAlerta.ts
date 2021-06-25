import { useContext } from "react";
import ContextoAlerta from "../ContextoAlerta";
import IContextoAlerta from "../models/IContextoAlerta";

const useAlerta = (): IContextoAlerta => {
    const contexto = useContext(ContextoAlerta);
    return contexto;
}

export default useAlerta;