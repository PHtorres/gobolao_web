import IUsuario from "../models/IUsuario";

export default class ServiceStorage{
    public GuardarTokenUsuario(token:string):void{
        localStorage.setItem('@GOBOLAO:USUARIO:TOKEN', token);
    }

    public PegarTokenUsuario():string{
        const token = localStorage.getItem('@GOBOLAO:USUARIO:TOKEN');
        return token || '';
    }

    public GuardarUsuario(usuario:IUsuario):void{
        localStorage.setItem('@GOBOLAO:USUARIO', JSON.stringify(usuario));
    }

    public PegarUsuario():IUsuario{
        const usuario = localStorage.getItem('@GOBOLAO:USUARIO');
        if(usuario){
            return JSON.parse(usuario) as IUsuario;
        }

        return {} as IUsuario;
    }

    public LimparDadosUsuario():void{
        localStorage.removeItem('@GOBOLAO:USUARIO:TOKEN');
        localStorage.removeItem('@GOBOLAO:USUARIO');
    }
}