import axios from 'axios';

const api = axios.create({
    baseURL : 'https://computtube-io.umbler.net',
});
export default api;