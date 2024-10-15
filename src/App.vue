<script setup>
import {getCategoryAPI} from '@/apis/testApi'
// getCategoryAPI().then(res=>{
//     console.log(res); 
// })
getCategoryAPI().then(
    res=>{
        console.log(res.data.result);
        
    }
)

</script>

<template>
<br>
<router-view></router-view>
</template>

<style scoped>

</style>
