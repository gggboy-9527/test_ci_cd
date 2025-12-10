<template>
  <div>
    <h2>仪表盘 Dashboard</h2>
    <p>欢迎回来，这里是受保护的页面。</p>
    <n-button @click="getUserInfo">获取用户信息</n-button>
  </div>
</template>
<script setup>
import { getUserInfo } from '@/api/user'

</script>