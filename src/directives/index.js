// 定义懒加载插件（判断目标是否进入视图区
import { useIntersectionObserver } from "@vueuse/core";

export const lazyPlugin = {
  install(app) {
    // 懒加载指令逻辑
    app.directive("img-lazy", {
      mounted(el, binding) {
        // el: 指令绑定的那个元素 img
        // binding: binding.value  指令等于号后面绑定的表达式的值  图片url
        // 执行一次后停止，防止重复监听导致内存浪费
        const { stop } = useIntersectionObserver(el, ([{ isIntersecting }]) => {
          if (isIntersecting) {
            // 进入视口区域
            el.src = binding.value;
            stop();
          }
        });
      },
    });
  },
};
