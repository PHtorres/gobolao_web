export default interface IBolao {
    idBolao: number;
    nome: string;
    nomeCriador: string;
    nomeCampeonato: string;
    privacidade: 'Privado' | 'Publico';
    nomeImagemAvatarBolao: string;
    nomeImagemAvatarCampeonato: string;
    souCriadorBolao: boolean;
    paticipoBolao:boolean;
}