export interface IBolaoSolicitacao {
    idSolicitacao: number;
    idBolao: number;
    apelidoUsuarioSolicitante: string;
    nomeBolao: string;
    status: 'Aberta'|'Aceita'|'Recusada';
}