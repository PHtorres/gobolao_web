const utils = {
    urlImagem(nomeImagem:string){
        return `${process.env.REACT_APP_NOWIMG_URL_IMAGENS}/${nomeImagem}`;
    },
    MascaraCNPJ(cnpj: string): string {
        if (cnpj?.trim().length === 14) {
            let cnpjFormatado = cnpj.replace(/^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, "$1.$2.$3/$4-$5");
            return cnpjFormatado;
        } else {
            const cpf = cnpj ? cnpj : '00000000000';
            let parte1 = cpf.substring(0, 3);
            let parte2 = cpf.substring(3, 6);
            let parte3 = cpf.substring(6, 9);
            let parte4 = cpf.substring(9, 11);
            return parte1 + '.' + parte2 + '.' + parte3 + '-' + parte4;
        }
    },

    FormataData(data: Date): string {
        return data.toLocaleDateString('pt-br', { year: 'numeric', month: '2-digit', day: '2-digit', timeZone: 'UTC' });
    },

    FormataMoeda(valor: number): string {
        return Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valor);
    },

    DataParaString(data: Date): string {
        const ano = data.getFullYear();
        const mes = data.getMonth() + 1;
        const dia = data.getDate();

        return `${ano}-${mes < 10 ? `0${mes}` : mes}-${dia < 10 ? `0${dia}` : dia}`;
    },

    MesAnoCurto(data: Date): string {
        const dataFormatada = data.toLocaleDateString('pt-br', { month: 'short', year: 'numeric' });
        return dataFormatada;
    },

    DataCurta(data: Date): string {
        const dataFormatada = data.toLocaleDateString('pt-br', { day: 'numeric', month: 'short', year: '2-digit' });
        return dataFormatada;
    },

    addDays(date: Date, days: number) {
        const copy = new Date(Number(date))
        copy.setDate(date.getDate() + days)
        return copy
    },

    CamelCase(str: string) {
        return (str.slice(0, 1).toLowerCase() + str.slice(1))
            .replace(/([-_ ]){1,}/g, ' ')
            .split(/[-_ ]/)
            .reduce((cur, acc) => {
                return cur + acc[0].toUpperCase() + acc.substring(1);
            });
    },

    MaiusculasNoInicio(texto: string): string {
        let resultado = '';
        const divisao = texto.trim().split(' ');
        divisao.forEach(item => {
            resultado +=
                item.substring(0, 1).toUpperCase() + item.substring(1, item.length).toLowerCase() + ' ';
        });
        return resultado.trim();
    },

    ApenasIniciais(texto: string): string {
        const partes = texto.split(' ');
        let resultado = '';
        partes.map(parte => {
            return resultado += this.MaiusculasNoInicio(parte).substring(0, 1);
        });

        return resultado;
    },

    TempoPercorridoAteAgora(data: Date) {
        const hoje = new Date();
        const tData = data.getTime();
        const mData = data.getMonth();
        const yData = data.getFullYear();
        const tHoje = hoje.getTime();
        const mHoje = hoje.getMonth();
        const yHoje = hoje.getFullYear();
        //const emSegundos = (tHoje - tData) / 1000;
        const emMinutos = (tHoje - tData) / 60000;
        const emHoras = (tHoje - tData) / 3600000;
        const emDias = (tHoje - tData) / (24 * 3600 * 1000);
        const emSemanas = (tHoje - tData) / (24 * 3600 * 1000 * 7);
        const emMeses = (mHoje + 12 * yHoje) - (mData + 12 * yData);
        const emAnos = hoje.getFullYear() - data.getFullYear();

        if (emAnos > 1 && emMeses > 11) {
            return `${emAnos.toFixed(0)} anos atrás`;
        }

        if (emAnos > 1 && emMeses <= 11) {
            return `${emMeses.toFixed(0)} meses atrás`;
        }

        if(emMeses > 1 && emMeses < 2){
            return 'mês passo';
        }

        if(emMeses > 2){
            return `${emMeses.toFixed(0)} meses atrás`;
        }

        if(emSemanas > 1 && emSemanas < 2){
            return 'semana passada';
        }

        if(emSemanas > 1){
            return `${emSemanas.toFixed(0)} semanas atrás`;
        }

        if(emDias > 1 && emDias < 2){
            return 'ontem';
        }

        if(emDias > 1){
            return `${emDias.toFixed(0)} dias atrás`;
        }

        if(emHoras >=2){
            return `${emHoras.toFixed(0)} horas atrás`;
        }

        if(emMinutos > 1){
            return `${emMinutos.toFixed(0)} minutos atrás`;
        }

        //if(emSegundos > 180 && emMinutos < 1)

        return 'Agora';
    }
}

export default utils;