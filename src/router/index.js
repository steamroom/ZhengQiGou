//createRouter：创建路由实例
//createWebHistory：创建history模式路由
import { createRouter, createWebHistory } from "vue-router";
import Layout from "@/views/Layout/index.vue";
import Login from "@/views/Login/index.vue";
import Home from "@/views/Home/index.vue";
import Category from "@/views/Category/index.vue";
import SubCategory from "@/views/SubCategory/index.vue";
import Detail from "@/views/Detail/index.vue";
import CartList from "@/views/CartList/index.vue";
import Checkout from "@/views/Checkout/index.vue";
import Pay from "@/views/Pay/index.vue";

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
          path: "category/sub/:id",
          component: SubCategory,
        },
        {
          path: "detail/:id",
          component: Detail,
        },
        {
          path: "cartlist",
          component: CartList,
        },
        {
          path: "checkout",
          component: Checkout,
        },
        {
          path: "pay",
          component: Pay,
        }
      ],
    },
    {
      path: "/login",
      component: Login,
    },
  ],
  //路由切换时候回到顶部
  scrollBehavior() {
    return {
      top: 0,
    };
  },
});

export default router;
