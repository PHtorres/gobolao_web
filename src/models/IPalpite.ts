export default interface IPalpite {
    id: number;
    idJogo: number;
    mandante: string;
    visitante: string;
    nomeImagemAvatarMandante: string;
    nomeImagemAvatarVisitante: string;
    dataHora: Date;
    placarMandantePalpite: number;
    placarVisitantePalpite: number;
    placarMandanteReal: number;
    placarVisitanteReal: number;
    pontos: number;
    finalizado: boolean;
}
