//createRouter：创建路由实例
//createWebHistory：创建history模式路由
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // path和componen对应关系的位置
  routes: [
    {
      path: "/",
      component: Layout,
      children: [
        {
          path: "",
          component: Home,
        },
        {
          //路由占位符“：”
          path: "category/:id",
          component: Category,
        },
        {
          //路由占位符“：”
          path: "category/sub/:id",
          component: SubCategory,
        },
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
});

export default router;
