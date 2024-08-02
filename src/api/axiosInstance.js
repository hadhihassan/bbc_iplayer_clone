import axios from 'axios';
import { baseUrl } from '../constants/url';

const axiosInstance = axios.create({
    baseURL: baseUrl,
})

export default axiosInstance;