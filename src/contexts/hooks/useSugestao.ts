import { useContext } from "react";
import ContextoSugestao from "../ContextoSugestao";
import IContextoSugestao from "../models/IContextoSugestao";

const useSugestao = (): IContextoSugestao => {
    const contexto = useContext(ContextoSugestao);
    return contexto;
}

export default useSugestao;