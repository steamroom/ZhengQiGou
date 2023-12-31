import { defineStore } from "pinia";
import { ref } from "vue";
import { loginAPI } from "@/apis/user";
import { useRouter } from "vue-router";
import { useCartStore } from "./CartStore";
import { mergeCartAPI } from "@/apis/cart";

export const useUserStore = defineStore(
  "user",
  () => {
    const cartStore = useCartStore();
    const userInfo = ref({});
    //定义获取接口数据的action函数
    const getUserInfo = async ({ account, password }) => {
      //请求接口
      const res = await loginAPI({ account, password });
      //把接口数据赋值给state
      userInfo.value = res.result;
      //合并购物车
      mergeCartAPI(
        cartStore.cartList.map((item) => {
          return {
            skuId: item.skuId,
            selectd: item.selectd,
            count: item.count,
          };
        })
      );
      cartStore.updateCartList();
    };

    //定义退出登录的action函数
    const router = useRouter();
    const logout = () => {
      userInfo.value = {};
      router.push("/login");
      // 退出登录时清空购物车
      cartStore.clearCart();
    };

    //以对象的格式把state和action return
    return {
      userInfo,
      getUserInfo,
      logout,
    };
  },
  { persist: true }
);
