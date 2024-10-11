import axios from 'axios';

const currenciesApi = axios.create({
    baseURL: 'https://api.marketstack.com/v1/currencies?access_key=635c2dc4ba2b1148d3132d1482ae9b23',
    headers: {
        'Content-Type': 'application/json',
    },
});


export default api;