import axios from 'axios';

const api = axios.create({
    baseURL : 'https://computtube-org.umbler.net',
 //   baseURL : 'http://localhost:3000',
});
export default api;