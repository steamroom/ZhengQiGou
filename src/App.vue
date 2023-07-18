<script setup>
// eslint-disable-next-line no-unused-vars
import { } from 'vue-router'
</script>

<template>
<!-- 一级路由的出口组件 -->
<router-view></router-view>
<div class="testvar"> test var scss</div>
</template>

<style scoped lang="scss">
.testvar{
    color: $xtxColor;
}
</style>

