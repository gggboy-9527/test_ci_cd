<template>
  <div class="login-container">
    <h1>登录页面</h1>
    <button @click="doLogin">模拟登录</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const doLogin = () => {
  localStorage.setItem("token", "fake-token-123"); // 模拟存 token
  router.push("/"); // 跳转到首页
};
</script>

<style scoped>
.login-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: #f0f2f5;
}
</style>
