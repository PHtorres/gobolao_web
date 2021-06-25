import { createContext } from "react";
import IContextoUsuario from "./models/IContextoUsuario";

const ContextoUsuario = createContext<IContextoUsuario>({} as IContextoUsuario);
export default ContextoUsuario;