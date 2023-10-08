import axiosInstance from './apiInstance';

let authToken: string | null = null;

export const setAuthToken = (token: string | null) => {
  authToken = token;
  axiosInstance.defaults.headers.common['Authorization'] = token ? `Token ${token}` : null;
};

export const getAuthToken = () => authToken;
