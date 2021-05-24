interface IResposta<T>{
    conteudo:T;
    notificacoes:string[];
    sucesso:boolean;
}

export default IResposta;