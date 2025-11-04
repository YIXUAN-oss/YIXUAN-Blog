---
title: Docker 容器化部署实战
date: 2025-10-13
categories:
  - DevOps
tags:
  - Docker
  - 容器化
  - 部署
author: 懿轩
---

# Docker 容器化部署实战

Docker 已经成为现代应用部署的标准工具。本文介绍如何使用 Docker 容器化部署应用。

## 🐳 Docker 基础

### 什么是 Docker

Docker 是一个开源的容器化平台，可以将应用及其依赖打包到一个可移植的容器中。

### 核心概念

- **镜像（Image）**: 应用的只读模板
- **容器（Container）**: 镜像的运行实例
- **仓库（Registry）**: 存储镜像的地方

## 📝 Dockerfile 编写

### Node.js 应用示例

```dockerfile
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./

RUN npm ci --only=production

COPY . .

EXPOSE 3000

CMD ["node", "server.js"]
```

### 多阶段构建

```dockerfile
# 构建阶段
FROM node:18-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

# 生产阶段
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

## 🚀 Docker Compose

### 定义多容器应用

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
      - DB_HOST=db
    depends_on:
      - db
      - redis

  db:
    image: postgres:15-alpine
    environment:
      - POSTGRES_PASSWORD=secret
    volumes:
      - postgres_data:/var/lib/postgresql/data

  redis:
    image: redis:alpine
    ports:
      - "6379:6379"

volumes:
  postgres_data:
```

## 💡 最佳实践

### 优化镜像大小

- 使用 Alpine 基础镜像
- 多阶段构建
- .dockerignore 文件
- 合并 RUN 指令

### 安全考虑

- 不要以 root 运行
- 扫描镜像漏洞
- 使用官方镜像
- 定期更新基础镜像

## 🎯 总结

Docker 容器化部署带来了：

- ✅ 环境一致性
- ✅ 快速部署
- ✅ 资源隔离
- ✅ 易于扩展

掌握 Docker 是现代开发者的必备技能！

---

**标签**: #Docker #容器化 #DevOps #部署
