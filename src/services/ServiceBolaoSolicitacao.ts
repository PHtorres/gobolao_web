import { IBolaoSolicitacao } from "../models/IBolaoSolicitacao";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

export default class ServiceBolaoSolicitacao{

    public async ObterSolicitacoesBolao(idBolao:number):Promise<IResposta<IBolaoSolicitacao[]>>{
        const {data} = await apiGoBolao.get<IResposta<IBolaoSolicitacao[]>>(`api/v1/bolaoSolicitacao/${idBolao}`);
        return data || {sucesso:false} as IResposta<IBolaoSolicitacao[]>;
    }

    public async CriarSolicitacao(idBolao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.post<IResposta<any>>('api/v1/bolaoSolicitacao', {idBolao});
        return data || {sucesso:false} as IResposta<any>;
    }

    public async AceitarSolicitacao(idSolicitacao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.patch<IResposta<any>>('api/v1/bolaoSolicitacao/aceitar', {idSolicitacao});
        return data || {sucesso:false} as IResposta<any>;
    }

    public async RecusarSolicitacao(idSolicitacao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.patch<IResposta<any>>('api/v1/bolaoSolicitacao/recusar', {idSolicitacao});
        return data || {sucesso:false} as IResposta<any>;
    }

    public async DesfazerSolicitacao(idSolicitacao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.delete<IResposta<any>>(`api/v1/bolaoSolicitacao/${idSolicitacao}`);
        return data || {sucesso:false} as IResposta<any>;
    }
}