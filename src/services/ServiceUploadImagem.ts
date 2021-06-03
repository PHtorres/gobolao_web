import apiNowIMG from "./ApiNowIMG";

interface RespostaEnvioImagem{
    notificacoes:string[],
    sucesso: boolean;
    nomeImagem: string;
}

export default class ServiceUploadImagem {

    public async EnviarImagem(arquivos:FileList):Promise<RespostaEnvioImagem>{
        if (arquivos) {
            const form = new FormData();
            form.append('imagem', arquivos[0]);
            const {data} = await apiNowIMG.post<RespostaEnvioImagem>('imagem/upload', form);
            return data || {sucesso:false} as RespostaEnvioImagem;
        }

        return {sucesso:false} as RespostaEnvioImagem;
    }
}