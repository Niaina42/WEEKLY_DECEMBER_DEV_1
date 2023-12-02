import axios from 'axios';
import env from "react-dotenv";

const BaseUrl = 'http://localhost:9002'
const httpsFiles= axios.create({
    baseURL: BaseUrl + '/api',
});

export default httpsFiles
