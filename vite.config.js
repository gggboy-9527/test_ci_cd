// vite.config.js（现代写法，无需 __dirname）
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'
import { resolve } from 'path'

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd())
    return {
        base: mode === 'production'
            ? '/test_ci_cd/'  // 你的仓库名称，末尾要有斜杠
            : '/',
        plugins: [
            vue(),
            AutoImport({
                imports: ['vue'],
                // 自动导入 naive-ui 的组合式 API
                dirs: [],
                dts: 'src/auto-imports.d.ts' // 生成类型声明（可选）
            }),
            Components({
                resolvers: [NaiveUiResolver()] // 自动解析 <n-xxx>
            })

        ],
        resolve: {
            alias: {
                '@': resolve(__dirname, 'src')
            }
        },
        server: {
            // 代理配置
            proxy: {
                // 2.使用 [] 包裹变量，解析出 '/api'
                [env.VITE_API_URL]: {
                    // 3. 这里使用 VITE_PROXY_TARGET，对应 http://localhost:3000
                    target: env.VITE_PROXY_TARGET,
                    /**
                     * 伪造身份 (ChangeOrigin)：
                    这就是 changeOrigin: true 发挥作用的时候。
                    如果不加：Vite 转发请求时，HTTP 头的 Host 字段是 localhost:5173。有些后端服务器（如 Nginx 虚拟主机）看到这个 Host 可能会拒绝服务，因为它只认识 localhost:3000。
                    如果加了：Vite 会把 HTTP 头里的 Host 偷偷改成 localhost:3000。
                    通俗解释：Vite 拿着你的请求去后端办事，保安（后端）问：“你哪来的？”。
                    false：Vite 老实说：“我从 5173 来的”。保安：“滚，我不认识 5173”。
                    true：Vite 撒谎说：“我是 3000 本地人”。保安：“请进”。

                     */
                    changeOrigin: true,
                    // 4. 路径重写：把 /api 去掉，因为后端接口通常不带这个前缀
                    // 发送给后端变成：http://localhost:3000/user/info
                    rewrite: (path) => path.replace(/^\/api/, '')
                }
            }
        }
    }
})