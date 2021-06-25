import { createContext } from "react";
import IContextoSugestao from "./models/IContextoSugestao";

const ContextoSugestao = createContext<IContextoSugestao>({} as IContextoSugestao);
export default ContextoSugestao;