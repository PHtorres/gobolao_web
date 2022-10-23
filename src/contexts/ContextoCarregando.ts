import { createContext } from "react";
import IContextoCarregando from "./models/IContextoCarrehando";

const ContextoCarregando = createContext<IContextoCarregando>({} as IContextoCarregando);

export default ContextoCarregando;