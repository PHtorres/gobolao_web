import ICriarUsuario from "../../models/ICriarUsuario";
import IUsuario from "../../models/IUsuario";

interface IContextoUsuario {
    usuario: IUsuario;
    isAdmin: boolean;
    logar(email: string, senha: string): Promise<void>;
    sair(): void;
    criar(criarUsuarioProps: ICriarUsuario): void;
    alterar(apelido: string, email: string): void;
    alterarAvatar(arquivos: FileList): void;
}

export default IContextoUsuario;