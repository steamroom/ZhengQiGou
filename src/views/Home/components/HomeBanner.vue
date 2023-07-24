<!--
 * @Author: steamroom 1364863807@qq.com
 * @Date: 2023-07-20 14:18:22
 * @LastEditors: steamroom 1364863807@qq.com
 * @LastEditTime: 2023-07-24 15:34:03
 * @FilePath: \vue-rabbit\src\views\Home\components\HomeBanner.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 轮播图banner区，直接调了element的模板 -->
<template>
    <div class="home-banner">
        <el-carousel height="500px">
            <el-carousel-item v-for="item in bannerList" :key="item.id">
                <img :src="item.imgUrl" alt="">
            </el-carousel-item>
        </el-carousel> 
    </div>
</template>

<script setup>
import { getBannerAPI } from '@/apis/home'
import { onMounted, ref } from 'vue'

const bannerList = ref([])
const getBanner = async () => {
    const res = await getBannerAPI()
    bannerList.value = res.result
}

onMounted(() => { getBanner() })
</script>

<style lang="scss" scoped>
.home-banner {
    width: 1240px;
    height: 500px;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 98;

    img {
        width: 100%;
        height: 500px;
    }
}
</style>