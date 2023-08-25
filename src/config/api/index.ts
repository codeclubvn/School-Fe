import { API_URL } from '@/config/constants/env.const';
import cookieHelper from '@/config/helpers/cookie.helper';

import axios, {
  AxiosError,
  AxiosInstance,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from 'axios';

const { getCookie } = cookieHelper;

const api: AxiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add a request interceptor
api.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    // Modify the request config here
    const token = getCookie('accessToken'); // get token from cookie
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error: AxiosError) => {
    // Handle request error here
    return Promise.reject(error);
  },
);

// Add a response interceptor
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Modify the response data here
    return response && response.data;
  },
  (error: AxiosError) => {
    // Handle response error here
    return Promise.reject(error);
  },
);

export default api;
