import axios from 'axios';

const api = axios.create({
    baseURL: "https://63657c20046eddf1baeeb094.mockapi.io/ecommerce"
   });

   export default api;

