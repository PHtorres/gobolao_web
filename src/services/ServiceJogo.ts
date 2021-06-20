import IJogo from "../models/IJogo";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";

interface CriarJogoProps {
    idCampeonato: number;
    dataHora: string;
    idMandante: number;
    idVisitante: number;
    fase: string;
}

interface FinalizarJogoProps {
    idJogo: number,
    placarMandante: number,
    placarVisitante: number
}


export default class ServiceJogo {
    public async ObterJogosDeHoje(): Promise<IResposta<IJogo[]>> {
        const { data } = await apiGoBolao.get<IResposta<IJogo[]>>('api/v1/jogo/hoje');
        return data || {} as IResposta<IJogo[]>;
    }

    public async ObterJogosDeAmanha(): Promise<IResposta<IJogo[]>> {
        const { data } = await apiGoBolao.get<IResposta<IJogo[]>>('api/v1/jogo/amanha');
        return data || {} as IResposta<IJogo[]>;
    }

    public async ObterTodosJogos(): Promise<IResposta<IJogo[]>> {
        const { data } = await apiGoBolao.get<IResposta<IJogo[]>>('api/v1/jogo');
        return data || {} as IResposta<IJogo[]>;
    }

    public async ObterJogosFuturos(): Promise<IResposta<IJogo[]>> {
        const { data } = await apiGoBolao.get<IResposta<IJogo[]>>('api/v1/jogo/futuros');
        return data || {} as IResposta<IJogo[]>;
    }

    public async CriarJogo(jogo: CriarJogoProps): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.post<IResposta<any>>('api/v1/jogo', jogo);
        return data || {} as IResposta<any>;
    }

    public async FinalizarJogo(props: FinalizarJogoProps): Promise<IResposta<any>> {
        const { data } = await apiGoBolao.patch<IResposta<any>>('api/v1/jogo/finalizar', props);
        return data || {sucesso:false} as IResposta<any>;
    }
}