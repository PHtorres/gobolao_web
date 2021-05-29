
interface Classificacao {
    apelidoUsuario: string;
    pontos: number;
    quantidadePalpites: number;
}

export default interface IRanking {
    nomeBolao: string;
    idBolao: number;
    nomeCampeonato: string;
    classificacao: Classificacao[];
}

