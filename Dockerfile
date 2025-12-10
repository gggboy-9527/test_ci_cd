 # 1. 使用 Nginx 作为服务器（最轻量、最适合静态网站）
FROM nginx:alpine

# 2. 设置工作目录
WORKDIR /usr/share/nginx/html

# 3. 复制打包后的文件到 Nginx 的默认目录
COPY dist/ .

# 4. 暴露端口（Nginx 默认 80 端口）
EXPOSE 80

# 5. 启动 Nginx（alpine 镜像默认就有）
CMD ["nginx", "-g", "daemon off;"]