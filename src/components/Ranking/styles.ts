import styled from 'styled-components';
import {Container as TextoSecundario} from '../TextoSecundario/styles';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const AreaInfo = styled.div`
  
`;

export const AreaClassificacao = styled.div`
  border: 1px solid ${({theme}) => theme.corBarraDivisao };
  border-radius: 10px;
  padding: 5px;
`;

interface ItemClassificacaoProps{
    corLighten:string;
}

export const ItemClassificacao = styled.div<ItemClassificacaoProps>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid ${({theme}) => theme.corBarraDivisao };
  border-left: 8px solid ${props => props.corLighten};
  padding-left: 3px;
`;

export const CabecalhoClassificacao = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid ${({theme}) => theme.corBarraDivisao };
`;

const Bloco = styled.div`
display: flex;
padding: 5px 2px;
width: 25%;
gap:10px;
align-items: center;
`;

export const BlocoEsquerda = styled(Bloco)`
justify-content: flex-start;
`;

export const BlocoEsquerdaUsuario = styled(BlocoEsquerda)`
cursor:pointer;
`;

export const BlocoCentro = styled(Bloco)`
justify-content: center;
`;

export const BlocoDireita = styled(Bloco)`
justify-content: center;
`;

export const BlocoColocacao = styled(BlocoEsquerda)`
width: 15px;
`;

interface TextoNumeroColocacaoProps{
  cor:string;
}

export const TextoNumeroColocacao = styled(TextoSecundario)<TextoNumeroColocacaoProps>`
color:${({cor}) => cor};
`;
