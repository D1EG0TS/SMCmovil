import axios from "axios";

const Api = axios.create({
    baseURL: 'http://192.168.1.103:3000/api',
    headers:{
        'Content-Type': 'application/json'
    }
});

export {
    Api
}