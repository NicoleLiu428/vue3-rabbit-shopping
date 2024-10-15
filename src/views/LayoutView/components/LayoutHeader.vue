<template>
    <header class='app-header'>
        <div class="container">
            <h1 class="logo">
                <router-link to="/">小兔鮮</router-link>
            </h1>
            <LayoutHeaderUl/>
            <input type="text">搜一搜
        </div>
        
    </header>
</template>
<script setup>
import LayoutHeaderUl from './LayoutHeaderUl.vue'
</script>

<style scoped lang="scss">
.app-header {
    background-color:#ccc;
    .container {
        display: flex;
        justify-content: space-between;
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
    }
    
    
    
}
</style>
