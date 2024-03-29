import { useCallback, useState } from "react";
import ICriarUsuario from "../../models/ICriarUsuario";
import IUsuario from "../../models/IUsuario";
import apiGoBolao from "../../services/ApiGoBolao";
import ServiceStorage from "../../services/ServiceStorage";
import ServiceUsuario from "../../services/ServiceUsuario";
import ContextoUsuario from "../ContextoUsuario";
import useAlerta from "../hooks/useAlerta";

const storage = new ServiceStorage();
const servicoUsuario = new ServiceUsuario();

const UsuarioProvider: React.FC = ({ children }) => {
  const { exibirMensagens, exibirMensagem } = useAlerta();

  const [usuario, setUsuario] = useState<IUsuario>(() => {
    const resultadoStorage = storage.PegarUsuario();
    return resultadoStorage;
  });

  const isAdmin = usuario.email === "tghpfbc@gmail.com";

  const adicionarTokenNaApi = () => {
    const tokenStorage = storage.PegarTokenUsuario();
    if (tokenStorage.length > 0) {
      apiGoBolao.setHeader("Authorization", `Bearer ${tokenStorage}`);
    }
  };

  adicionarTokenNaApi();

  const logar = useCallback(
    async (email: string, senha: string) => {
      if (email.length === 0 || senha.length === 0) {
        exibirMensagem("E-mail e senha precisam ser preenchidos.", "erro");
        return;
      }

      const { resposta } = await servicoUsuario.Autenticar(email, senha);
      if (resposta?.conteudo?.logado) {
        adicionarTokenNaApi();
        setUsuario(resposta.conteudo);
        return;
      }

      if (resposta?.notificacoes) {
        exibirMensagens(resposta.notificacoes, "erro");
      }
    },
    [exibirMensagens, exibirMensagem]
  );

  const sair = useCallback(() => {
    storage.LimparDadosUsuario();
    setUsuario({} as IUsuario);
  }, []);

  const criar = useCallback(
    async (criarUsuarioProps: ICriarUsuario) => {
      const { sucesso, notificacoes } = await servicoUsuario.CriarUsuario(
        criarUsuarioProps
      );
      if (sucesso) {
        exibirMensagem(
          `Bem-vindo ao GoBolão, ${criarUsuarioProps.apelido}`,
          "sucesso"
        );
        logar(criarUsuarioProps.email, criarUsuarioProps.senha);
        return;
      }

      exibirMensagens(notificacoes || [], "erro");
    },
    [exibirMensagens, exibirMensagem, logar]
  );

  const alterar = useCallback(
    async (apelido: string, email: string) => {
      const resultado = await servicoUsuario.AlterarUsuario(apelido, email);
      if (resultado.sucesso) {
        setUsuario((atual) => {
          return {
            id: atual.id,
            email: resultado.conteudo.email,
            apelido: resultado.conteudo.apelido,
            nomeImagemAvatar: resultado.conteudo.nomeImagemAvatar,
            logado: true,
          };
        });

        exibirMensagem("Perfil atualizado com sucesso!", "sucesso");
        return;
      }

      exibirMensagens(resultado?.notificacoes, "erro");
    },
    [exibirMensagens, exibirMensagem]
  );

  const alterarAvatar = useCallback(
    async (arquivos: FileList) => {
      const { conteudo, sucesso, notificacoes } =
        await servicoUsuario.AlterarAvatarUsuario(arquivos);
      if (sucesso) {
        setUsuario(conteudo);
        return;
      }

      exibirMensagens(notificacoes || [], "erro");
    },
    [exibirMensagens]
  );

  return (
    <ContextoUsuario.Provider
      value={{ usuario, isAdmin, logar, sair, criar, alterar, alterarAvatar }}
    >
      {children}
    </ContextoUsuario.Provider>
  );
};

export default UsuarioProvider;
