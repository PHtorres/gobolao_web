
interface Classificacao {
    idUsuario:number;
    apelidoUsuario: string;
    nomeImagemAvatarUsuario:string;
    pontos: number;
    quantidadePalpites: number;
}

export default interface IRanking {
    nomeBolao: string;
    idBolao: number;
    nomeCampeonato: string;
    classificacao: Classificacao[];
}

