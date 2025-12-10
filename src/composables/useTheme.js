import { ref, computed, watchEffect, watch } from 'vue'
import { darkTheme } from 'naive-ui'
// 1. 引入所有主题文件
import { defaultTheme } from '../themes/default'
import { oceanTheme } from '../themes/ocean'
import { wineTheme } from '../themes/wine'

// 2. 注册到 Map 中
const themeMap = {
  default: defaultTheme, // 默认绿
  ocean: oceanTheme,     // 海洋蓝
  wine: wineTheme        // 酒红
}

// 下面的代码保持不变 (持久化逻辑等) ...
const THEME_NAME_KEY = 'app-theme-name'
const THEME_MODE_KEY = 'app-theme-mode'

const cachedName = localStorage.getItem(THEME_NAME_KEY)
const cachedMode = localStorage.getItem(THEME_MODE_KEY)

const currentThemeName = ref(themeMap[cachedName] ? cachedName : 'default')
const isDarkMode = ref(cachedMode === 'dark')

export function useTheme() {
  const currentConfig = computed(() => {
    const theme = themeMap[currentThemeName.value]
    return isDarkMode.value ? theme.dark : theme.light
  })

  const naiveTheme = computed(() => isDarkMode.value ? darkTheme : null)
  const naiveOverrides = computed(() => currentConfig.value.naive)

  watchEffect(() => {
    const customVars = currentConfig.value.custom
    const style = document.body.style
    for (const key in customVars) {
      style.setProperty(key, customVars[key])
    }
    style.setProperty('--primary-color', currentConfig.value.naive.common.primaryColor)
  })

  watch(currentThemeName, (newVal) => localStorage.setItem(THEME_NAME_KEY, newVal))
  watch(isDarkMode, (newVal) => localStorage.setItem(THEME_MODE_KEY, newVal ? 'dark' : 'light'))

  const setTheme = (name) => {
    if (themeMap[name]) {
      currentThemeName.value = name
    }
  }

  const toggleDark = () => {
    isDarkMode.value = !isDarkMode.value
  }

  return {
    currentThemeName,
    isDarkMode,
    naiveTheme,
    naiveOverrides,
    setTheme,
    toggleDark,
    themeList: Object.keys(themeMap) // 这里会自动生成 ['default', 'ocean', 'wine']
  }
}