// src/utils/request.js
import axios from 'axios'
import { message, loadingBar } from './naiveTools' // 引入刚才定义的工具
import config from '@/config'
// 1. 创建 axios 实例
const service = axios.create({
    // 从环境变量获取 BaseURL
    baseURL: config.apiBaseUrl,
    timeout: config.timeout, // 请求超时时间 10s
})

// 2. 请求拦截器 (Request Interceptor)
service.interceptors.request.use(
    (config) => {
        // 开启顶部加载条
        loadingBar.start()

        // 可以在这里自动带上 Token
        const token = localStorage.getItem('token')
        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`
        }

        return config
    },
    (error) => {
        loadingBar.error()
        return Promise.reject(error)
    }
)

// 3. 响应拦截器 (Response Interceptor)
service.interceptors.response.use(
    (response) => {
        // 关闭加载条
        loadingBar.finish()

        // 根据后端约定的状态码判断
        // 假设后端返回格式: { code: 200, data: {...}, msg: 'ok' }
        const res = response.data

        if (res.code !== 200) {
            // 业务逻辑错误（比如密码错误）
            message.error(res.msg || '业务错误')

            // 特殊状态码处理，比如 401 token 失效
            if (res.code === 401) {
                //以此处可以执行登出逻辑，比如 redirect 到 login
                message.warning('登录已过期，请重新登录')
            }
            return Promise.reject(new Error(res.msg || 'Error'))
        } else {
            // 如果成功，直接把数据剥离出来返回，前端少写一层 .data
            return res.data
        }
    },
    (error) => {
        loadingBar.error()

        // HTTP 状态码错误处理 (404, 500 等)
        let msg = ''
        const status = error.response?.status

        switch (status) {
            case 400: msg = '请求错误(400)'; break
            case 401: msg = '未授权，请重新登录(401)'; break
            case 403: msg = '拒绝访问(403)'; break
            case 404: msg = '请求出错(404)'; break
            case 500: msg = '服务器错误(500)'; break
            default: msg = `连接出错(${status})`;
        }

        message.error(msg)
        return Promise.reject(error)
    }
)

export default service