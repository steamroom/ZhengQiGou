// 封装购物车模块

import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { useUserStore } from "./User";
import { insertCartAPI, getNewCartListAPI, deleteCartAPI } from "@/apis/cart";

export const useCartStore = defineStore(
  "cart",
  () => {
    const userStore = useUserStore();
    const isLogin = computed(() => userStore.userInfo.token);
    const cartList = ref([]);

    //更新购物车列表
    const updateCartList = async () => {
      const res = await getNewCartListAPI();
      cartList.value = res.result;
    };

    const addCart = async (goods) => {
      // 添加购物车操作
      // 思路：通过匹配传递过来的商品对象中的skuId能不能在cartList中找到，找到了就是添加过。已添加过 - count + 1，没有添加过 - 直接push。
      const { skuId, count } = goods;
      if (!isLogin.value) {
        // 未登录：本地购物车
        const item = cartList.value.find((item) => goods.skuId === item.skuId);
        if (item) {
          item.count++;
        } else {
          cartList.value.push(goods);
        }
      } else {
        //已登录：接口购物车
        await insertCartAPI({ skuId, count });
        updateCartList();
      }
    };

    const deleteCart = async (skuId) => {
      //删除购物车操作
      //未登录
      if (!isLogin.value) {
        const index = cartList.value.findIndex((item) => item.skuId === skuId);
        cartList.value.splice(index, 1);
      } else {
        //已登录
        await deleteCartAPI([skuId]);
        updateCartList();
      }
    };

    //单选功能
    const changeCheck = (skuId, selected) => {
      const item = cartList.value.findIndex((item) => item.skuId === skuId);
      cartList.value[item].selected = selected;
    };
    //全选功能
    const changeAllCheck = (selected) => {
      cartList.value.forEach((item) => (item.selected = selected));
    };
    //计算属性：所有商品及其总价
    const totalNum = computed(() =>
      cartList.value.reduce((pre, item) => pre + item.count, 0)
    );
    const totalPrice = computed(() =>
      cartList.value.reduce((pre, item) => pre + item.count * item.price, 0)
    );

    // 已选商品数量
    const totalSelected = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((pre, item) => pre + item.count, 0)
    );

    //已选商品价格合计
    const totalSelectedPrice = computed(() =>
      cartList.value
        .filter((item) => item.selected)
        .reduce((pre, item) => pre + item.count * item.price, 0)
    );
    //全选判断
    const isAll = computed(() => cartList.value.every((item) => item.selected));

    return {
      cartList,
      addCart,
      deleteCart,
      totalNum,
      totalPrice,
      changeCheck,
      changeAllCheck,
      totalSelected,
      totalSelectedPrice,
      isAll,
    };
  },
  {
    persist: true,
  }
);
