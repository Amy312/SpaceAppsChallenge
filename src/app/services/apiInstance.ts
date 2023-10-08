import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKEND_API, // Cambia la URL base según tu backend
});

export default axiosInstance;