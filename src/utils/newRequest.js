import axios from "axios";

const newRequest = axios.create({
    baseURL: 'https://todoappserver-production-cb80.up.railway.app/api/',
    withCredentials: true,
});

export default newRequest;