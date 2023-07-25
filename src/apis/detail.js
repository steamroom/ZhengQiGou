import httpInstance from "@/utils/http";

/**
 * @description: 获取商品详情数据
 * @return {*}
 */
export const getDetail = (id) => {
  return httpInstance({
    url: "/goods",
    params: {
      id,
    },
  });
};
