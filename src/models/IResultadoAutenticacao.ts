import IResposta from "./IResposta";
import IUsuario from "./IUsuario";

interface IResultadoAutenticacao{
    token:string;
    resposta:IResposta<IUsuario>;
}

export default IResultadoAutenticacao;