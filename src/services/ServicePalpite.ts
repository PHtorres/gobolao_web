import IPalpite from "../models/IPalpite";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

interface CriarPalpiteProps {
    idJogo: number;
    placarMandantePalpite: number;
    placarVisitantePalpite: number;
}


export default class ServicePalpite {

    public async ObterPalpitesAbertos(): Promise<IResposta<IPalpite[]>> {
        const { data } = await apiGoBolao.get<IResposta<IPalpite[]>>('api/v1/palpite/meus/abertos');
        return data || { sucesso: false } as IResposta<IPalpite[]>;
    }

    public async ObterPalpitesFinalizados(): Promise<IResposta<IPalpite[]>> {
        const { data } = await apiGoBolao.get<IResposta<IPalpite[]>>('api/v1/palpite/meus/finalizados');
        return data || { sucesso: false } as IResposta<IPalpite[]>;
    }

    public async ObterPalpitesJogo(idJogo: number): Promise<IResposta<IPalpite[]>> {
        const { data } = await apiGoBolao.get<IResposta<IPalpite[]>>(`api/v1/palpite/jogo/${idJogo}`);
        return data || { sucesso: false } as IResposta<IPalpite[]>;
    }

    public async ObterPalpitesAdversario(idAdversario: number, idBolao: number)
        : Promise<IResposta<IPalpite[]>> {
        const { data } = await apiGoBolao
            .get<IResposta<IPalpite[]>>(`api/v1/palpite/adversario/finalizados/${idAdversario}/${idBolao}`);
        return data || { sucesso: false } as IResposta<IPalpite[]>;
    }

    public async CriarPalpite(palpite: CriarPalpiteProps): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.post<IResposta<any>>('api/v1/palpite', palpite);
        return data || { sucesso: false } as IResposta<any>;
    }

    public async ExcluirPalpite(idPalpite: number): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.delete<IResposta<any>>(`api/v1/palpite/${idPalpite}`);
        return data || { sucesso: false } as IResposta<any>;
    }
}