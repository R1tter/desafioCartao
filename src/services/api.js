import axios from 'axios';
import App from '../App';

const api = axios.create({ baseURL: 'http://localhost:3001/api'});

export default api;