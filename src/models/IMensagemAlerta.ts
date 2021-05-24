interface IMensagemAlerta{
    id:string;
    mensagem:string;
    tipo:'erro'|'sucesso'
}

export default IMensagemAlerta;