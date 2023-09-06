import { ref } from "vue";
import { getHomeCategoryAPI } from "@/apis/layout";
import { defineStore } from "pinia";

export const useCategoryStore = defineStore("category", () => {
    //导航列表的数据管理，以减少对服务器的响应次数
  const categoryList = ref([]);
  const getHomeCategory = async () => {
    const res = await getHomeCategoryAPI();
    categoryList.value = res.result;
  };
  return {
    categoryList,
    getHomeCategory,
  };
});
