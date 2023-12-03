import axios from 'axios';
import env from "react-dotenv";

const BaseUrl = 'http://173.249.22.169:9002'
const httpsFiles= axios.create({
    baseURL: BaseUrl + '/api',
});

export default httpsFiles
