/**net.config.js 网络请求相关配置 */
export const netConfig = {
    // 默认超时时间
    timeout: 10000,
    // 请求头设置
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    // 成功状态码
    successCode: 200,
    // 白名单（不需要 Token 的接口）
    whiteList: ['/login', '/register']
}