import IJogo from "../models/IJogo";
import IResposta from "../models/IResposta";
import ITime from "../models/ITime";
import apiGoBolao from "./ApiGoBolao";

export default class ServiceTime{
    public async ObterTimes():Promise<IResposta<ITime[]>>{
        const {data} = await apiGoBolao.get<IResposta<ITime[]>>('time');
        return data || {} as IResposta<ITime[]>;
    }

    public async CriarTime(nome:string, nomeImagemAvatar:string):Promise<IResposta<ITime>>{
        const {data} = await apiGoBolao.post<IResposta<ITime>>('time', {nome, nomeImagemAvatar});
        return data || {} as IResposta<ITime>;
    }
}