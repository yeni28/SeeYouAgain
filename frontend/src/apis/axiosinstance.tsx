import axios, { AxiosInstance } from 'axios';

export const interceptors = (instance: AxiosInstance) => {
    instance.interceptors.request.use(
        config => {
            // const token = localStorage.getItem('accessToken');
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxIiwiaWF0IjoxNjgzMDAzMTE2LCJleHAiOjE2ODMwODk1MTZ9.DKDkUgc3aSJMvrDg3Lidvyc3tK8DxcVGRvOSsiPEAkw';
            config.headers.Authorization = `Bearer ${token}`;
            return config;
        },
        error => Promise.reject(error.response),
    );
    return instance;
};

// const BASE_URL = '' // 메인서버
const BASE_URL = 'http://localhost:8000'; // 테스트 로컬 서버

// 단순 get요청으로 인증값이 필요없는 경우
const axiosApi = (url: string, options?: object) => {
    const instance = axios.create({ baseURL: url, ...options });
    return instance;
};

// post, delete등 api요청 시 인증값이 필요한 경우
const axiosAuthApi = (url: string, options?: object) => {
    const instance = axios.create({ baseURL: url, ...options });
    interceptors(instance);
    return instance;
};

export const axBase = axiosApi(BASE_URL);
export const axAuth = axiosAuthApi(BASE_URL);
