<template>
    <div class="container" :class="{show:y>78}" >
      <h1 class="logo">
        <router-link to="/">小兔鮮</router-link>
      </h1>
      <ul class="app-header-nav">
        <li><router-link to="/">首頁</router-link></li>
        <li  class="home" v-for="item in categoryStore.categoryList" :key="item.id">
          <a href="#">{{item.name}}</a>
        </li>
        <li><router-link to="/">品牌</router-link></li>
        <li><router-link to="/">專題</router-link></li>
      </ul>
    </div>
    {{ y }}
  </template>
  
  <script setup>
    import {useCategoryStore} from '@/stores/categoryStore'
    import { useScroll } from '@vueuse/core'
    const categoryStore = useCategoryStore()
    const { y } = useScroll(window)
    
    
    
  </script>
  
  <style lang="scss" scoped>
    .container {
      display: flex;
      height: 80px;
      justify-content: center;
      transform: none;
      opacity: 0;
      &.show {
        transform: translateY(0);
        transition: all 1 linear;
        opacity: 1;
      }
      .logo {
      width: 200px;
      a {
          display: block;
          height: 132px;
          width: 100%;
          text-indent: -9999px;
          background: url('@/assets/images/logo.png') no-repeat center 18px/contain;
      }
      }
      .app-header-nav {
        width: 820px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 0 40px;
        
      }
    }
  </style>