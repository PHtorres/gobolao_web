import apisauce from 'apisauce';

const apiNowIMG = apisauce.create({
    baseURL:process.env.REACT_APP_NOWIMG_URL_API
});

export default apiNowIMG;