import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";

export const useUserStore = defineStore(
  "user",
  () => {
    //定义管理用户数据的state
    const userInfo = ref({});
    //定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      //请求接口
      const res = await loginAPI({ account, password });
      //把接口数据赋值给state
      userInfo.value = res.result;
    };

    const clearUserInfo = () => {
      userInfo.value = {};
    };

    //以对象的格式把state和action return
    return {
      userInfo,
      getUserInfo,
      clearUserInfo,
    };
  },
  { persist: true }
);
