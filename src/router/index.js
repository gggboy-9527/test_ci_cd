import { createRouter, createWebHistory } from 'vue-router'
// 引入布局组件
import BasicLayout from '@/layouts/BasicLayout.vue'
import { loadingBar } from '@/utils/naiveTools' // 复用之前的进度条工具

// 1. 定义路由表
const routes = [
    // 登录页 (不需要 Layout)
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/login/index.vue'),
        meta: { title: '登录' }
    },

    // 主应用区域 (使用 BasicLayout)
    {
        path: '/',
        component: BasicLayout,
        redirect: '/dashboard', // 默认跳到 dashboard
        children: [
            {
                path: 'dashboard',
                name: 'Dashboard',
                component: () => import('@/views/dashboard/index.vue'),
                meta: { title: '仪表盘', requiresAuth: true }
            },
            // 可以在这里加更多页面，比如用户管理
        ]
    },

    // 404 页面
    {
        path: '/:pathMatch(.*)*', // 匹配所有未定义路由
        name: 'NotFound',
        component: () => import('@/views/error/404.vue'),
        meta: { title: '404' }
    }
]

// 2. 创建路由实例
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL), // 使用 HTML5 History 模式 (无 # 号)
    routes
})

// 3. 全局前置守卫 (Guard)
router.beforeEach((to, from, next) => {
    // 3.1 开启顶部进度条
    loadingBar.start()

    // 3.2 设置页面标题
    document.title = `${to.meta.title || 'My App'} - System`

    // 3.3 简单的权限判断
    const token = localStorage.getItem('token')

    if (to.meta.requiresAuth && !token) {
        // 如果页面需要权限，且没有 token，重定向到登录页
        next('/login')
    } else if (to.path === '/login' && token) {
        // 如果已登录还想去登录页，踢回首页
        next('/')
    } else {
        // 放行
        next()
    }
})

// 4. 全局后置钩子
router.afterEach(() => {
    // 关闭顶部进度条
    loadingBar.finish()
})

export default router