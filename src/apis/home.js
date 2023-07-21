import httpInstance from "@/utils/http";

/**
 * @description: 获取Banner图片数据
 * @return {*}
 */
export const getBannerAPI = () => {
  return httpInstance({
    url: "/home/banner",
  });
};
/**
 * @description:获取新鲜好物列表
 * @return {*}
 */
export const getNewAPI = () => {
  return httpInstance({
    url: "/home/new",
  });
};

/**
 * @description: 获取人气推荐
 * @param {*}
 * @return {*}
 */
export const getHotAPI = () => {
  return httpInstance({
    url: "/home/hot",
  });
};
/**
 * @description: 获取所有商品模块
 * @param {*}
 * @return {*}
 */
export const getGoodsAPI = () => {
  return httpInstance({
    url: "/home/goods",
  });
};
