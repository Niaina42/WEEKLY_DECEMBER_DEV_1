import axios from 'axios';
import env from "react-dotenv";

const BaseUrl = 'http://localhost:9000'
const https = axios.create({
    baseURL: BaseUrl + '/api',
});

export default https