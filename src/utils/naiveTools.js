// src/utils/naiveTools.js
import { createDiscreteApi } from 'naive-ui'

// 定义需要的组件
const { message, notification, loadingBar } = createDiscreteApi(
    ['message', 'notification', 'loadingBar']
)

export { message, notification, loadingBar }