<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <router-link to="/">小兔鮮</router-link>
            </h1>
            <LayoutHeaderUl/>
            <div class="search">
                <span></span>
                <input type="text" placeholder="搜一搜">
            </div>
            <HeaderCart/>
        </div>
        
    </header>
</template>
<script setup>
import LayoutHeaderUl from './LayoutHeaderUl.vue'
import HeaderCart from "./HeaderCart.vue"
</script>

<style scoped lang="scss">
.app-header {
    .container {
        display: flex;
        justify-content: space-between;
        align-items:center;
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
    .search {
        width: 180px;
        padding: 0 10px;
        border-radius: 10px;
        background-color: #fff;
        span {
            font-family: 'icomoon';
        }
        input {
            padding-left: 5px;
            width: 120px;
        }
    }
    }
    
    
    
}
</style>
