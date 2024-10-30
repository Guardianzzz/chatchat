
import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:5000/api',
    timeout: 10000,
    headers: {
        'Content-Type': "application/json;charset=utf-8"
    }
});

 
// 请求拦截器
instance.interceptors.request.use(
  (config) => {
    // 在请求发送前可以进行一些配置，例如添加认证信息等
    config.headers['X-Auth-Token'] = 'your_token'; // 示例：添加认证信息
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
 
// 响应拦截器
instance.interceptors.response.use(
  (response) => {
    // 在响应返回后，可以进行一些处理，例如判断是否需要更新令牌等
    // ...
    return response;
  },
  (error) => {
    // 处理响应错误
    // ...
    return Promise.reject(error);
  }
);


export default {
   help(){
    instance.get('/help')
  }
};
