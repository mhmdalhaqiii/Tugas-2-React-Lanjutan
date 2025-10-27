import axios from "axios";

const url = "http://127.0.0.1:8000";

const API = axios.create({
    baseURL: `${url}/api`, 
    // baseURL: "https://akmal-bc.karyakreasi.id/api", // alternatif
});

export const bookImageStorage = `${url}/storage`; 

export default API; 