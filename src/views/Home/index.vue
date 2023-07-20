<template>
  <div class="container">
    <HomeCategory></HomeCategory>
    <HomeBanner></HomeBanner>
  </div>
  <HomeHot></HomeHot>
  <HomeNew></HomeNew>
  <HomeProduct></HomeProduct>
</template>

<script setup>
import HomeBanner from './components/HomeBanner.vue'
import HomeCategory from './components/HomeCategory.vue'
import HomeHot from './components/HomeHot.vue'
import HomeNew from './components/HomeHot.vue'
import HomeProduct from './components/HomeProduct.vue'
</script>

<style lang="scss" scoped></style>