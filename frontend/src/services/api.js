// aqui tem os metodos   para trabalhar com conexão assincrona 
// utilizando axios  paa trabalhar 

import axios from 'axios';

const api = axios.create({
    baseURL:'http://localhost:3333',
});
export default api;