import { message } from 'antd';
import Axios from 'axios'

const axios = Axios.create();

// // axios默认配置
// axios.defaults.baseURL = baseURL;

axios.defaults.timeout = 180000; //3min

axios.defaults.headers.post['Content-Type'] = 'application/json';

// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  // 删除get参数中为空的参数
  if(config.params){
    Object.keys(config.params).forEach(key=>{
      if(typeof config.params[key] == 'number' && !config.params[key].toString()){
        delete config.params[key]
      }else if(typeof config.params[key] == 'string' && !config.params[key]){
        delete config.params[key]
      }
    })
  }
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response.status === 200) {
    return Promise.resolve(response.data);
  } else {
    return Promise.reject(response.data);
  }
}, function (error) {
  if(error.response && error.response.data){
    message.error(httpStatusMsg(error.response.status));
  }
});

export const AxiosAll = async (method:any, url:any, params:any, data:any) => {
    try {
      let response = await axios({
          method,
          url,
          params,
          data,
        });
      return await Promise.resolve(response);
    } catch (error) {
      return await Promise.reject(error);
    }
};


export const httpGet = (url:any, params:any) => {
  return AxiosAll('get', url, params, {});
};

export const httpPost = (url:any, data:any) => {
  return AxiosAll('post', url, {}, data);
};

export const httpPut = (url:any, data:any) => {
  return AxiosAll('put', url, {}, data);
};

export const httpDelete = (url:any, data:any) => {
  return AxiosAll('delete', url, {}, data);
};

export const httpStatusMsg =(status:any)=>{
  switch (status) {
    case 400:
      return ' 服务器不理解请求的语法，请联系管理员';
    case 401:
      return '身份验证失效,重新登录!';
    case 403:
      return '服务器拒绝请求，请联系管理员';
    case 404:
      return '服务器找不到请求的网页，请联系管理员';
    case 408:
      return '服务器等候请求时发生超时，请联系管理员';
    case 500:
      return '服务器遇到错误，无法完成请求，请联系管理员';
    case 501:
      return '服务器内部错误，请联系管理员';
    case 502:
      return '网关错误，请联系管理员';
    case 503:
      return '服务不可用，请联系管理员';
    case 504:
      return '网关超时，请联系管理员';
    case 505:
      return 'HTTP 版本不受支持，请联系管理员';
    default:
      return '请联系管理员！';
  }
}