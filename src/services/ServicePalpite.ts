import IPalpite from "../models/IPalpite";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

interface CriarPalpiteProps{
    idJogo: number;
    placarMandantePalpite: number;
    placarVisitantePalpite: number;
}


export default class ServicePalpite{

    public async ObterPalpites():Promise<IResposta<IPalpite[]>>{
        const {data} = await apiGoBolao.get<IResposta<IPalpite[]>>('palpite');
        return data || {} as IResposta<IPalpite[]>;
    }

    public async CriarPalpite(palpite:CriarPalpiteProps):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.post<IResposta<any>>('palpite', palpite);
        return data || {} as IResposta<any>;
    }
}