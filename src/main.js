import "@/styles/common.scss";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import { lazyPlugin } from "@/directives";
import { componentPlugin } from "@/components";

const app = createApp(App);

app.use(createPinia());
app.use(router);
// 注册全局指令
app.use(lazyPlugin);

//注册全局组件插件
app.use(componentPlugin);

app.mount("#app");
