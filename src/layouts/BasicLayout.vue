<script setup>
// import {
//   NLayout,
//   NLayoutSider,
//   NLayoutHeader,
//   NLayoutContent,
//   NMenu,
//   NSpace,
//   NButton,
//   NSwitch,
// } from "naive-ui";
import { h, ref } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { useTheme } from "@/composables/useTheme"; // 引入之前写好的主题钩子
console.log("BasicLayout loaded11");
const { toggleDark, isDarkMode, themeList, setTheme, currentThemeName } =
  useTheme();

// 模拟菜单数据
const menuOptions = [
  {
    label: () => h(RouterLink, { to: "/" }, { default: () => "仪表盘" }),
    key: "dashboard",
  },
  {
    label: "系统设置",
    key: "settings",
    children: [
      {
        label: () =>
          h(
            RouterLink,
            { to: "/settings/user" },
            { default: () => "用户管理" }
          ),
        key: "user-manage",
      },
    ],
  },
];
</script>

<template>
  <n-layout has-sider class="app-layout">
    <!-- 侧边栏 -->
    <n-layout-sider bordered collapse-mode="width" :collapsed-width="64" :width="240" :native-scrollbar="false"
      class="app-sider">
      <div class="logo">My System</div>
      <n-menu :options="menuOptions" />
    </n-layout-sider>

    <n-layout>
      <!-- 顶部 Header -->
      <n-layout-header bordered class="app-header">
        <n-space justify="space-between" align="center" style="height: 100%; padding: 0 20px">
          <span>面包屑 / 占位符</span>

          <!-- 这里放主题切换按钮，保持原有功能 -->
          <n-space>
            <n-button v-for="name in themeList" :key="name" size="tiny"
              :type="currentThemeName === name ? 'primary' : 'default'" @click="setTheme(name)">
              {{ name }}
            </n-button>
            <n-switch :value="isDarkMode" @update:value="toggleDark">
              <template #checked>Dark</template>
              <template #unchecked>Light</template>
            </n-switch>
          </n-space>
        </n-space>
      </n-layout-header>

      <!-- 内容区：最关键的一步！ -->
      <n-layout-content content-style="padding: 24px;" class="app-content">
        <!-- 路由匹配到的页面将显示在这里 -->
        <router-view v-slot="{ Component }">
          <transition name="fade" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </n-layout-content>
    </n-layout>
  </n-layout>
</template>

<style scoped>
/* 你的布局样式 */
.app-layout {
  height: 100vh;
}

.app-header {
  height: 60px;
  background-color: var(--app-bg);
  transition: background-color 0.3s;
}

.app-sider {
  background-color: var(--sidebar-bg);
  transition: background-color 0.3s;
}

.app-content {
  background-color: var(--app-bg);
}

.logo {
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  font-weight: bold;
  color: var(--primary-color);
}

/* 路由切换动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
