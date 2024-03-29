import ICriarUsuario from "../models/ICriarUsuario";
import IResposta from "../models/IResposta";
import IResultadoAutenticacao from "../models/IResultadoAutenticacao";
import IUsuario from "../models/IUsuario";
import apiGoBolao from "./ApiGoBolao";
import ServiceStorage from "./ServiceStorage";
import ServiceUploadImagem from "./ServiceUploadImagem";
export default class ServiceUsuario {

    private storage: ServiceStorage;
    private uploadImagem:ServiceUploadImagem;
    constructor() {
        this.storage = new ServiceStorage();
        this.uploadImagem = new ServiceUploadImagem();
    }

    public async Autenticar(email: string, senha: string): Promise<IResultadoAutenticacao> {

        const { data } = await apiGoBolao.post<IResultadoAutenticacao>('api/v1/Autenticacao', { email, senha });

        if (data) {
            if (data.resposta.sucesso) {
                data.resposta.conteudo.logado = true;
                this.storage.GuardarTokenUsuario(data.token);
                this.storage.GuardarUsuario(data.resposta.conteudo);
            }
            
            return data;
        }

        return {} as IResultadoAutenticacao;
    }

    public async CriarUsuario(usuario: ICriarUsuario): Promise<IResposta<IUsuario>> {
        const { data } = await apiGoBolao.post<IResposta<IUsuario>>('api/v1/usuario', usuario);
        return data || {} as IResposta<IUsuario>;
    }

    public async AlterarUsuario(apelido: string, email: string): Promise<IResposta<IUsuario>> {

        const { data } = await apiGoBolao.put<IResposta<IUsuario>>('api/v1/usuario', { apelido, email });
        
        if(data){
            if(data.sucesso){
                data.conteudo.logado = true;
                this.storage.GuardarUsuario(data.conteudo);
            }
        }

        return data || {} as IResposta<IUsuario>;
    }

    public async AlterarAvatarUsuario(arquivos:FileList):Promise<IResposta<IUsuario>>{

        const {sucesso, nomeImagem} = await this.uploadImagem.EnviarImagem(arquivos);
        if(sucesso){
            const {data} = await apiGoBolao.patch<IResposta<IUsuario>>('api/v1/usuario/avatar', {
                nomeImagemAvatar:nomeImagem
            });
            if(data?.sucesso){
                data.conteudo.logado = true;
                this.storage.GuardarUsuario(data.conteudo);
            }

            return data || {sucesso:false} as IResposta<IUsuario>;
        }
        
        return {sucesso:false} as IResposta<IUsuario>;
    }

    public async AlterarSenhaUsuario(senhaAtual: string, 
                                     novaSenha: string, 
                                     confirmaSenha:string): Promise<IResposta<IUsuario>> {
                                         
        const { data } = await apiGoBolao.patch<IResposta<IUsuario>>('api/v1/usuario/senha',{
            senhaAtual, novaSenha, confirmaSenha
        });

        return data || {sucesso:false} as IResposta<IUsuario>;
    }
}