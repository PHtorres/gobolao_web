import IJogo from "../models/IJogo";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

interface CriarJogoProps{
    idCampeonato: number;
    dataHora: Date;
    idMandante: number;
    idVisitante: number;
    fase: string;
}


export default class ServiceJogo{
    public async ObterJogosDeHoje():Promise<IResposta<IJogo[]>>{
        const {data} = await apiGoBolao.get<IResposta<IJogo[]>>('jogo/hoje');
        return data || {} as IResposta<IJogo[]>;
    }

    public async ObterJogosDeAmanha():Promise<IResposta<IJogo[]>>{
        const {data} = await apiGoBolao.get<IResposta<IJogo[]>>('jogo/amanha');
        return data || {} as IResposta<IJogo[]>;
    }

    public async ObterJogos():Promise<IResposta<IJogo[]>>{
        const {data} = await apiGoBolao.get<IResposta<IJogo[]>>('jogo');
        return data || {} as IResposta<IJogo[]>;
    }

    public async CriarJogo(jogo:CriarJogoProps):Promise<IResposta<any>>{
        console.log('jogo', jogo);
        const {data} = await apiGoBolao.post<IResposta<any>>('jogo', jogo);
        return data || {} as IResposta<any>;
    }
}