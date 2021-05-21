import {DefaultTheme} from 'styled-components';

declare module "styled-components" {

    interface DefaultTheme{
        corFundoSite:string;
        corFundo:string;
        corPrimaria:string;
        corFundoSucesso:string;
        corTextoSucesso:string;
        corFundoAlerta:string;
        corTextoAlerta:string;
        corTextoMenu:string;
        corTextoTituloPrimario:string;
        corTextoTituloSecundario:string;
        corTextoSubTitulo:string;
        corBordaInput:string;
        corBarraDivisao:string;
    }

}

export default DefaultTheme;