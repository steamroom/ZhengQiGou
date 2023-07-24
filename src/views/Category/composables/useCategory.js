//封装分类数据相关业务代码
import { onMounted, ref } from "vue";
import { getCategoryAPI } from "@/apis/category";
import { onBeforeRouteUpdate } from "vue-router";
import { useRoute } from "vue-router";

export function useCategory() {
  const route = useRoute();
  const categoryData = ref({});
  const getCategory = async (id = route.params.id) => {
    // 获取当前路由参数
    const res = await getCategoryAPI(id);
    categoryData.value = res.result;
  };

  onMounted(() => {
    getCategory();
  });

  //路由参数改变时，将分类数据接口重新发送
  onBeforeRouteUpdate((to) => {
    getCategory(to.params.id);
  });
  return {
    categoryData,
  };
}
