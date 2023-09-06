//封装购物车接口
import httpInstance from "@/utils/http";

// 加入购物车
export const insertCartAPI = ({ skuId, count }) => {
  return httpInstance({
    url: "/member/cart",
    method: "POST",
    data: {
      skuId,
      count,
    },
  });
};

//获取最新的购物车列表
export const getNewCartListAPI = () => {
  return httpInstance({
    url: "/member/cart",
  });
};

//删除购物车操作
export const deleteCartAPI = (ids) => {
  return httpInstance({
    url: "/member/cart",
    method: "DELETE",
    data: {
      ids,
    },
  });
};

//合并购物车
export const mergeCartAPI = (data) => {
  return httpInstance({
    url: "/member/cart/merge",
    method: "POST",
    data,
  });
};
