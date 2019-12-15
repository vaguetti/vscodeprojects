import axios from 'axios';

const api = axios.create({
    baseURL : 'http://computtube-io.umbler.net',
});
export default api;