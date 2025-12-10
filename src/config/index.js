/**index.js 配置入口文件 */
import { appConfig } from './app'
import { netConfig } from './net.config'

// 也可以在这里整合 import.meta.env
const envConfig = {
    apiBaseUrl: import.meta.env.VITE_API_URL,
    isDev: import.meta.env.DEV
}

export default {
    ...appConfig,
    ...netConfig,
    ...envConfig
}