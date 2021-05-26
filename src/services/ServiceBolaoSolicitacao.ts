import { IBolaoSolicitacao } from "../models/IBolaoSolicitacao";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

export default class ServiceBolaoSolicitacao{

    public async ObterSolicitacoesBolao(idBolao:number):Promise<IResposta<IBolaoSolicitacao[]>>{
        const {data} = await apiGoBolao.get<IResposta<IBolaoSolicitacao[]>>(`BolaoSolicitacao/${idBolao}`);
        return data || {sucesso:false} as IResposta<IBolaoSolicitacao[]>;
    }

    public async CriarSolicitacao(idBolao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.post<IResposta<any>>('BolaoSolicitacao', {idBolao});
        return data || {sucesso:false} as IResposta<any>;
    }

    public async AceitarSolicitacao(idSolicitacao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.patch<IResposta<any>>('BolaoSolicitacao/aceitar', {idSolicitacao});
        return data || {sucesso:false} as IResposta<any>;
    }

    public async RecusarSolicitacao(idSolicitacao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.patch<IResposta<any>>('BolaoSolicitacao/recusar', {idSolicitacao});
        return data || {sucesso:false} as IResposta<any>;
    }

    public async DesfazerSolicitacao(idSolicitacao:number):Promise<IResposta<any>>{
        const {data} = await apiGoBolao.delete<IResposta<any>>(`BolaoSolicitacao/${idSolicitacao}`);
        return data || {sucesso:false} as IResposta<any>;
    }
}