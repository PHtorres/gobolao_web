export default interface IPalpite {
    id: number;
    idJogo: number;
    idUsuarioPalpite: number;
    nomeUsuarioPalpite: string;
    mandante: string;
    visitante: string;
    nomeImagemAvatarMandante: string;
    nomeImagemAvatarVisitante: string;
    dataHoraPalpite: Date;
    dataHoraJogo: Date;
    placarMandantePalpite: number;
    placarVisitantePalpite: number;
    placarMandanteReal: number;
    placarVisitanteReal: number;
    pontos: number;
    finalizado: boolean;
}
