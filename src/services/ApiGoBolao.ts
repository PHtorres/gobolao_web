import apisauce from 'apisauce';

const apiGoBolao = apisauce.create({
    baseURL:process.env.REACT_APP_URL_API
});

export default apiGoBolao;