export default interface IJogo {
    id: number;
    nomeCampeonato: string;
    dataHora: Date;
    mandante: string;
    visitante: string;
    nomeImagemAvatarMandante: string;
    nomeImagemAvatarVisitante: string;
    placarMandante: number;
    placarVisitante: number;
    fase: string;
    usuarioTemPalpite: boolean;
}
