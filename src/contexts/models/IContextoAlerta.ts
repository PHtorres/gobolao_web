interface IContextoAlerta {
    exibirMensagem(mensagem: string, tipo: 'erro' | 'sucesso'): void;
    exibirMensagens(mensagens: string[], tipo: 'erro' | 'sucesso'): void;
    removerMensagem(id: string): void;
}

export default IContextoAlerta;