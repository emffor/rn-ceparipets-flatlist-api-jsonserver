import axios from 'axios';

const api = axios.create({
    baseURL: "http://numbersapi.com/#39"
});

export default api;