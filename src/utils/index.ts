const utils = {
    urlImagem(nomeImagem:string){
        return `${process.env.REACT_APP_NOWIMG_URL_IMAGENS}/${nomeImagem}`;
    }
}

export default utils;