<template>
  <div class="app-header-sticky" :class="{show:y>78}">
    <div class="container">
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
  </div>
    
  </template>
  
  <script setup>
    import {useCategoryStore} from '@/stores/categoryStore'
    import { useScroll } from '@vueuse/core'
    const categoryStore = useCategoryStore()
    const { y } = useScroll(window)
    
    
    
  </script>
  
  <style lang="scss" scoped>
    .app-header-sticky {
      width: 100%;
      position: fixed;
      left: 0;
      top: 0;
      height: 80px;
      transform: none;
      z-index: 999;
      opacity: 0;
      background-color: #fff;
      &.show {
        transform: translateY(0);
        transition: all 0.2s linear;
        opacity: 1;
      }
      .container {
        display: flex;
        justify-content: center;
      }
      .logo {
      width: 200px;
      a {
          display: block;
          height: 70px;
          width: 100%;
          text-indent: -9999px;
          background: url('@/assets/images/logo.png') no-repeat center 0px/contain;
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