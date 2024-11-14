<template>
  <el-carousel height="500px">
    <el-carousel-item v-for="item in bannerList" :key="item.id">
      <h3 class="small justify-center" text="2xl"><img :src="item.imgUrl" alt=""></h3>
    </el-carousel-item>
  </el-carousel>
</template>

<script setup>
  import { getBannerAPI } from "@/apis/home";
  import { onMounted,ref } from "vue";
  const bannerList  = ref([])
  const getBanner = async ()=>{
    const res = await getBannerAPI()  
    bannerList.value = res.data.result
    console.log(bannerList.value);
    
  }
  onMounted(()=>{
    getBanner()  
  })
  

</script>

<style lang="scss" scoped>
  .demonstration {
    color: var(--el-text-color-secondary);
  }

  .el-carousel__item {
    position: absolute;
    left: 0;
    top: 0;
    h3 {
      opacity: 0.75;
      line-height: 500px;
      margin: 0;
      text-align: center;
      img {
        height: 100%;
      }
    }
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
  }
</style>