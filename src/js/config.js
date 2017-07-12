import axios from 'axios';


let env = 'dev';
// let env='pro';

const config={
    ajaxConfig:axios.create({
        baseURL: env === 'dev' ? 'http://192.168.1.57:9090' : env === 'pro' ? 'https://www.url.com' : '',
        timeout: 30000
    })
};
export default config;