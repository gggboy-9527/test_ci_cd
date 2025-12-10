// src/api/user.js
import request from '@/utils/request'

// 登录接口
export function login(data) {
    return request({
        url: '/auth/login',
        method: 'post',
        data
    })
}

// 获取用户信息
export function getUserInfo() {
    return request({
        url: '/user/info',
        method: 'get'
    })
}