/**
 * @description 封装axios
 * @author 康慧怡
 * @Date 2022/10/08
 */

import axios, {AxiosRequestConfig, Method} from 'axios';

const CancelToken = axios.CancelToken;
// 定义接口
interface PendingType {
    url: string;
    method?: Method | string;
    params?: any;
    data?: any;
    cancel?: any;
}

const pending: Array<PendingType> = [];
const removePending = (config: AxiosRequestConfig) => {
    // 关于重复的请求将其取消掉
    for (const key in pending) {
        const item: number = +key;
        const list: PendingType = pending[key];
        if (list.url === config.url && list.method === config.method && JSON.stringify(list.params) === JSON.stringify(config.params) && JSON.stringify(list.data) === JSON.stringify(config.data)) {
            list.cancel('取消请求');
            pending.splice(item, 1);
        }
    }
}

// 创建axios实例
const service = axios.create({
    baseURL: process.env.NODE_DEV === 'development' ? 'http://127.0.0.1' : 'http://localhost:8000',
    timeout: 3000,
    // 异步请求携带cookie
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
    }
})

// 请求拦截
service.interceptors.request.use(
    (config) => {
        removePending(config);

        config.cancelToken = new CancelToken((c) => {
            pending.push({url: config.url, method: config.method, params: config.params, data: config.data, cancel: c});
        })
        config.headers.Authorization = 'token123'

        return config;
    },
    (error) => {
        console.log('error', error);
        return Promise.reject(error);
    }
)

// 响应拦截
service.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 204) {
            return Promise.resolve(response);
        } else {
            return Promise.reject(response);
        }
    },
    (error) => {
        const { response } = error;
        if (response) {
            console.log(response);
            //    错误码处理
            switch (response.code) {
                case 404:

                    break;
            }

        // //    超时重新请求
        //     const config = error.config;
        //     const [RETRY_COUNT, RETRY_DELAY] = [3, 1000];
        //
        //     if (config.__retryCount >= RETRY_COUNT) {
        //         return Promise.reject(response || {message: error.message})
        //     }
        //
        //     config.__retryCount++;
        //     const backoff = new Promise<void>((resolve) => {
        //         setTimeout(() => {
        //             resolve();
        //         }, RETRY_DELAY || 1)
        //     })

        } else {
        //    断网处理
        }
        return Promise.reject(error.message);
    }
)

export default service;
