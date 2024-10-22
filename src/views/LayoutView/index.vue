<script setup>
    import LayoutHeader from './components/LayoutHeader.vue'
    import LayoutFixed from './components/LayoutFixed.vue'
    import LayoutFooter from './components/LayoutFooter.vue'
    import {useCategoryStore} from '@/stores/categoryStore'
    import { onMounted } from "vue";
    const categoryStore = useCategoryStore()
    onMounted(()=>{
        categoryStore.getCategory()
        
        
        
    })
</script>

<template>
    <LayoutHeader/>
    <LayoutFixed/>
    <router-view></router-view>
    <LayoutFooter />
</template>


