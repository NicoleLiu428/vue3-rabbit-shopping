<template>
  <ul class="app-header-nav">
    <li  class="home" v-for="item in categoryStore.categoryList" :key="item.id">
      <a href="#">{{item.name}}</a>
    </li>
  </ul>
</template>

<script setup>
  import {useCategoryStore} from '@/stores/categoryStore'
  const categoryStore = useCategoryStore()
 
  
</script>

<style lang="scss">
    .app-header-nav {
      width: 820px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 40px;
      
    }
</style>