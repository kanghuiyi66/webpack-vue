/**
 * @description
 * @author 康慧怡
 * @Date 2022/10/08
 */
import axios from "./axios";

// 封装请求方式
const request = {
    get (url: string, params?: any, callback?: any) {
        return new Promise((resolve, reject) => {
            axios.get(url, { params }).then(res => {
                callback ? resolve(callback(res.data)) : resolve(res.data);
            }).catch(err => {
                reject(err);
            })
        })
    },
    // post (url: string, params: any, callback: any) {
    //     return new Promise((resolve, reject) => {
    //         axios.post(url, params).then(res => {
    //             callback ? resolve(callback(res.data)) : resolve(res.data);
    //         }).catch(err => {
    //             reject(err);
    //         })
    //     })
    // },
    // put (url: string, params: any, callback: any) {
    //     return new Promise((resolve, reject) => {
    //         axios.put(url,  params).then(res => {
    //             callback ? resolve(callback(res.data)) : resolve(res.data);
    //         }).catch(err => {
    //             reject(err);
    //         })
    //     })
    // },
    // errorHandle(status: number, other: any) {
    //     switch (status) {
    //         case 401:
    //             //无权限
    //             break;
    //
    //     }
    // }
}

export default request;