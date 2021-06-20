import IBolao from "../models/IBolao";
import IRanking from "../models/IRanking";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

interface CriarBolaoProps {
    nome: string;
    idCampeonato: number;
    privacidade: 1 | 2;
}

export default class ServiceBolao {

    public async PesquisarBoloes(pesquisa: string): Promise<IResposta<IBolao[]>> {
        const { data } = await apiGoBolao.get<IResposta<IBolao[]>>(`api/v1/bolao/pesquisa/${pesquisa}`);
        return data || { sucesso: false } as IResposta<IBolao[]>;
    }

    public async ObterBolaoPorId(idBolao: number): Promise<IResposta<IBolao>> {
        const { data } = await apiGoBolao.get<IResposta<IBolao>>(`api/v1/bolao/${idBolao}`);
        return data || { sucesso: false } as IResposta<IBolao>;
    }

    public async ObterBoloesUsuario(): Promise<IResposta<IBolao[]>> {
        const { data } = await apiGoBolao.get<IResposta<IBolao[]>>('api/v1/bolao/meus');
        return data || { sucesso: false } as IResposta<IBolao[]>;
    }
    
    public async CriarBolao(bolao:CriarBolaoProps): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.post<IResposta<any>>('api/v1/bolao', bolao);
        return data || { sucesso: false } as IResposta<any>;
    }

    public async ParticiparBolao(idBolao:number): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.post<IResposta<any>>('api/v1/bolao/participar', {idBolao});
        return data || { sucesso: false } as IResposta<any>;
    }

    public async SairDoBolao(idBolao:number): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.delete<IResposta<any>>(`api/v1/bolao/sair/${idBolao}`);
        return data || { sucesso: false } as IResposta<any>;
    }

    public async ObterRankingBolao(idBolao: number): Promise<IResposta<IRanking>> {
        const { data } = await apiGoBolao.get<IResposta<IRanking>>(`api/v1/bolao/ranking/${idBolao}`);
        return data || { sucesso: false } as IResposta<IRanking>;
    }

    public async ObterRankings(): Promise<IResposta<IRanking[]>> {
        const { data } = await apiGoBolao.get<IResposta<IRanking[]>>('api/v1/bolao/ranking');
        return data || { sucesso: false } as IResposta<IRanking[]>;
    }
}