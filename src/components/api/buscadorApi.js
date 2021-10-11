import axios from "axios";
export const buscadorApi = axios.create({ 
    baseURL:"https://api.edamam.com/auto-complete?app_id=ea9ed3c9&app_key=f17a5f9de1b1a29ec890b8271f82bcfe&q="
});
