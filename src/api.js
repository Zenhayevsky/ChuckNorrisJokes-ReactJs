import axios from 'axios';

const api = axios.create({
    baseURL: 'http://api.icndb.com/jokes/random/10'
})

export default api;