import ICampeonato from "../models/ICampeonato";
import IResposta from "../models/IResposta";
import apiGoBolao from "./ApiGoBolao";


export default class ServiceCampeonato{

    public async ObterCampeonatos():Promise<IResposta<ICampeonato[]>>{
        const {data} = await apiGoBolao.get<IResposta<ICampeonato[]>>('campeonato');
        return data || {} as IResposta<ICampeonato[]>;
    }
}