export interface IBolaoSolicitacao {
    idSolicitacao: number;
    idBolao: number;
    apelidoUsuarioSolicitante: string;
    nomeImagemUsuarioSolicitante:string;
    nomeBolao: string;
    status: 'Aberta'|'Aceita'|'Recusada';
}