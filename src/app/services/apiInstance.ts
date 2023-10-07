import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api/v1', // Cambia la URL base según tu backend
});

export default axiosInstance;