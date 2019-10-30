
//Importando a lib do axios 
import axios from 'axios';

//==>
const api = axios.create({
  baseURL: "http://192.168.1.4:3333"
});

// <== exports

export default api;

