<template>
  
  <h1>Vue3</h1>
  <button @click="test()">测试按钮</button>
 
</template>
 
<script setup>
import axiosApi from './api/axiosApi';
function test(){
  console.log(axiosApi.help())
}
</script>
 
 