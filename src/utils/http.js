//axios 基础封装
import axios from "axios";
import { ElMessage } from "element-plus";
import "element-plus/theme-chalk/el-message.css";
import { useUserStore } from "@/stores/UserStore";
import router from "@/router";

//创建axios实例
const http = axios.create({
  baseURL: "http://pcapi-xiaotuxian-front-devtest.itheima.net",
  timeout: 5000,
});

// 添加请求拦截器（携带token）
http.interceptors.request.use(
  (config) => {
    // pinia获取token数据
    const userStore = useUserStore();
    //按照后端要求拼接token数据
    const token = userStore.userInfo.token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // 对请求错误做些什么
    return Promise.reject(error);
  }
);

// 添加响应拦截器
http.interceptors.response.use(
  (response) => {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    return response.data;
  },
  (error) => {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    //统一数据
    ElMessage.error(error.response.data.message);  
      //401token失效处理
    if (error.response.status === 401) { 
      ElMessage.error("登录失效，请重新登录");
      //清除token
      useUserStore().logout();
      //跳转登录页面
      router.push("/login");
  }
    return Promise.reject(error);

});
export default http;
