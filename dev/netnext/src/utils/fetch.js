import axios from 'axios';
import store from '../store'
import { Message } from 'element-ui';
import Cookies from 'js-cookie';
import Qs from 'qs'
var server = axios.create({
    baseURL: process.env.BASE_API,
})

// 添加一个请求拦截器
server.interceptors.request.use(function (config) {
    //在请求发出之前进行一些操作
    if(store.getters.access_token){
        config.headers['Authorization'] = store.getters.access_token;
    }
    return config;
}, function (err) {
    //Do something with request error
    return Promise.reject(error);
});

// 添加一个响应拦截器
server.interceptors.response.use(function (res) {
    //在这里对返回的数据进行处理
    let {data} = res;
    if (!data.success){
        Message({
            showClose: true,
            message: data.error,
            type: 'error'
        });
    }
    return res;
}, function (err) {
    //Do something with response error
    // console.log(err)
    return Promise.reject(err);
})

export default server