<!-- <script setup>
import { NConfigProvider, NGlobalStyle } from "naive-ui";
import { useTheme } from "@/composables/useTheme";

// 引入图标方便看 (如果没有装 icons 可以删掉图标部分)
// npm install @vicons/ionicons5
// import { Moon, Sunny } from '@vicons/ionicons5'

const {
  naiveTheme,
  naiveOverrides,
  isDarkMode,
  toggleDark,
  themeList,
  setTheme,
  currentThemeName,
} = useTheme();

// 定义一个简单的映射，给按钮加个中文标签
const themeLabels = {
  default: "默认·绿",
  ocean: "海洋·蓝",
  wine: "醇酒·红",
};
</script>

<template>
  <n-config-provider :theme="naiveTheme" :theme-overrides="naiveOverrides">
    <n-global-style />
    <router-view />
    <div class="app-layout">
      
      <aside class="sidebar">
        <div class="logo">My App</div>
        <ul class="menu">
          <li>首页</li>
          <li>设置</li>
          <li>关于</li>
        </ul>
      </aside>

      
      <main class="content">
        <n-card title="多维主题切换系统">
          <n-space vertical size="large">
           
            <div class="control-row">
              <span class="label">当前模式：</span>
              <n-switch
                :value="isDarkMode"
                @update:value="toggleDark"
                size="large"
              >
                <template #checked>暗黑 Dark</template>
                <template #unchecked>明亮 Light</template>
              </n-switch>
            </div>

            <n-divider />

          
            <div class="control-row">
              <span class="label">选择主题：</span>
              <n-space>
               
                <n-button
                  v-for="name in themeList"
                  :key="name"
                  :type="currentThemeName === name ? 'primary' : 'default'"
                  :secondary="currentThemeName !== name"
                  @click="setTheme(name)"
                >
                  {{ themeLabels[name] || name }}
                </n-button>
              </n-space>
            </div>

            <n-divider />

            
            <div class="preview-area">
              <n-space vertical>
                <n-tag type="primary">Naive UI 标签 (Primary)</n-tag>

                <n-space>
                  <n-button type="primary">主要按钮</n-button>
                  <n-button>次要按钮</n-button>
                  <n-button type="error">错误按钮</n-button>
                </n-space>

                
                <div class="custom-card">
                  <h4>自定义 CSS 区域</h4>
                  <p>背景色：var(--sidebar-bg)</p>
                  <p>边框色：var(--primary-color)</p>
                  <p>
                    当主题切换时，我不止变了颜色，整体氛围(背景色调)都变了。
                  </p>
                </div>
              </n-space>
            </div>
          </n-space>
        </n-card>
      </main>
    </div>
  </n-config-provider>
</template>

<style scoped>

.app-layout {
  display: flex;
  min-height: 100vh;
  
  background-color: var(--app-bg);
  transition: all 0.3s;
}

.sidebar {
  width: 240px;
  background-color: var(--sidebar-bg);
  border-right: 1px solid rgba(128, 128, 128, 0.1);
  padding: 20px;
  display: flex;
  flex-direction: column;
  transition: background-color 0.3s;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: var(--primary-color);
  margin-bottom: 40px;
}

.menu li {
  list-style: none;
  padding: 12px;
  cursor: pointer;
  border-radius: 6px;
  color: var(--main-text);
  margin-bottom: 5px;
}

.menu li:hover {
  background-color: rgba(0, 0, 0, 0.05);
}

.content {
  flex: 1;
  padding: 40px;
}

.label {
  font-weight: bold;
  margin-right: 10px;
  color: var(--main-text);
}

.control-row {
  display: flex;
  align-items: center;
}


.custom-card {
  margin-top: 20px;
  padding: 20px;
  background-color: var(--sidebar-bg); 
  border: 2px dashed var(--primary-color);
  border-radius: 10px;
  color: var(--main-text);
  transition: all 0.3s;
}
</style> -->

<script setup>
import { NConfigProvider, NGlobalStyle, NMessageProvider } from "naive-ui";
import { useTheme } from "@/composables/useTheme"; // 注意路径是否正确

const { naiveTheme, naiveOverrides } = useTheme();
</script>

<template>
  <n-config-provider :theme="naiveTheme" :theme-overrides="naiveOverrides">
    <n-global-style />
    <!-- 必须包裹 message provider 才能在 setup 外使用 message -->
    <n-message-provider>
      <router-view />
    </n-message-provider>
  </n-config-provider>
</template>
