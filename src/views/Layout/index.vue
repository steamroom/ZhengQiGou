<template>
    <div>
        <LayoutFixed></LayoutFixed>
        <LayoutNav></LayoutNav>
        <LayoutHeader></LayoutHeader>
        <!-- 二级路由出口 -->
        <router-view></router-view>
        <LayoutFooter></LayoutFooter>
    </div>
</template>

<script setup>
import LayoutNav from './components/LayoutNav.vue'
import LayoutHeader from './components/LayoutHeader.vue'
import LayoutFooter from './components/LayoutFooter.vue'
import LayoutFixed from './components/LayoutFixed.vue'

//触发获取列表的action
import { useCategoryStore } from '@/stores/HomeCategoryStore'
import { onMounted } from 'vue'

const categoryStore = useCategoryStore()
onMounted(() => {
    //父组件使用pinia方法，保存数据
    categoryStore.getHomeCategory()
})
</script>

<style></style>