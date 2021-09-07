import { create } from 'apisauce';

const api = create({
    baseURL: 'https://api.icndb.com',
})

export default api;