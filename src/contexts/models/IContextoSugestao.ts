import ISugestao from "../../models/ISugestao";

interface IContextoSugestao {
    enviarSugestao(sugestao: ISugestao): void;
}

export default IContextoSugestao;