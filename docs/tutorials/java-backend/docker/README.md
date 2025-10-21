---
title: Docker 容器化教程
autoGroup: false
autoSort: false
sidebarDepth: 0
---

# Docker 容器化教程

> 从零开始掌握 Docker 容器技术，实现 Java 应用快速部署与管理

## 📚 教程简介

本教程将带你系统学习 Docker 容器化技术，从基础概念到实战应用，专注于 Java 后端应用的容器化部署。Docker 是现代应用部署的标准方案，掌握 Docker 是每个 Java 后端开发者必备的技能。

## 🎯 学习目标

- ✅ 理解 Docker 的核心概念和工作原理
- ✅ 熟练掌握 Docker 镜像和容器操作
- ✅ 掌握 Dockerfile 编写和镜像构建
- ✅ 熟悉 Docker 网络和数据卷管理
- ✅ 能够使用 Docker Compose 编排多容器应用
- ✅ 掌握 Java 应用的容器化部署最佳实践
- ✅ 应对常见的 Docker 面试题

## 📖 教程目录

### [第一章：Docker 基础入门](1.Docker基础入门.md)
- Docker 是什么？为什么要用 Docker？
- Docker 的安装与环境配置
- Docker 架构与核心组件
- Docker 镜像与容器基础操作
- Docker 仓库使用（Docker Hub、阿里云）
- Docker 常用命令速查

### [第二章：Docker 核心概念](2.Docker核心概念.md)
- Docker 镜像原理与分层存储
- Docker 容器生命周期管理
- Docker 网络模式详解
- Docker 数据卷（Volume）管理
- Dockerfile 指令详解
- 镜像构建最佳实践

### [第三章：Docker 实战应用](3.Docker实战应用.md)
- 容器化部署 Spring Boot 应用
- 容器化部署 MySQL 数据库
- 容器化部署 Redis 缓存
- 容器化部署 Nginx 服务
- 多阶段构建优化镜像
- 常见问题与解决方案

### [第四章：Docker 进阶技巧](4.Docker进阶技巧.md)
- Docker Compose 多容器编排
- 构建完整的微服务环境
- Docker 网络高级配置
- 容器资源限制与监控
- Docker 镜像优化技巧
- CI/CD 集成与自动化部署

### [第五章：Docker 面试题集](5.Docker面试题集.md)
- Docker 基础概念面试题
- 镜像与容器相关面试题
- 网络与存储面试题
- 实战场景面试题
- 高频面试题解析

## 🚀 快速开始

### 安装 Docker

**Windows（推荐 Docker Desktop）：**
```bash
# 1. 下载 Docker Desktop for Windows
https://www.docker.com/products/docker-desktop

# 2. 安装并启动 Docker Desktop

# 3. 验证安装
docker version
docker run hello-world
```

**macOS（Docker Desktop）：**
```bash
# 使用 Homebrew
brew install --cask docker

# 或直接下载
https://www.docker.com/products/docker-desktop

# 验证安装
docker version
```

**Linux（Ubuntu/Debian）：**
```bash
# 更新包索引
sudo apt-get update

# 安装依赖
sudo apt-get install ca-certificates curl gnupg lsb-release

# 添加 Docker 官方 GPG 密钥
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg

# 设置稳定版仓库
echo "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

# 安装 Docker Engine
sudo apt-get update
sudo apt-get install docker-ce docker-ce-cli containerd.io

# 验证安装
sudo docker version
```

### 配置镜像加速

**配置阿里云镜像加速器：**

创建或编辑 `/etc/docker/daemon.json`（Linux）或 Docker Desktop 设置（Windows/macOS）：

```json
{
  "registry-mirrors": [
    "https://mirror.ccs.tencentyun.com",
    "https://docker.mirrors.ustc.edu.cn",
    "https://registry.docker-cn.com"
  ]
}
```

重启 Docker 服务：
```bash
# Linux
sudo systemctl restart docker

# Windows/macOS - 重启 Docker Desktop
```

### 运行第一个容器

```bash
# 拉取 Nginx 镜像
docker pull nginx

# 运行 Nginx 容器
docker run -d -p 80:80 --name my-nginx nginx

# 访问 http://localhost，看到 Nginx 欢迎页面

# 查看运行中的容器
docker ps

# 停止容器
docker stop my-nginx

# 删除容器
docker rm my-nginx
```

## 💡 学习建议

1. **理解原理** - 先理解容器化的核心思想，再学习具体操作
2. **动手实践** - 每学完一个知识点，立即创建容器实践
3. **查阅文档** - 遇到问题时学会查阅官方文档
4. **优化思维** - 关注镜像大小和容器性能优化
5. **循序渐进** - 从单容器到多容器编排，逐步提升

## 🌟 Docker 常用命令速查

### 镜像操作
```bash
docker pull <镜像名>          # 拉取镜像
docker images                 # 查看本地镜像
docker rmi <镜像ID>           # 删除镜像
docker build -t <名称> .      # 构建镜像
docker tag <源> <目标>        # 标记镜像
docker push <镜像名>          # 推送镜像
```

### 容器操作
```bash
docker run <镜像>             # 创建并运行容器
docker ps                     # 查看运行中的容器
docker ps -a                  # 查看所有容器
docker start <容器ID>         # 启动容器
docker stop <容器ID>          # 停止容器
docker restart <容器ID>       # 重启容器
docker rm <容器ID>            # 删除容器
docker exec -it <容器> bash   # 进入容器
docker logs <容器ID>          # 查看日志
```

### 系统操作
```bash
docker info                   # 查看 Docker 信息
docker version                # 查看版本
docker system df              # 查看空间使用
docker system prune           # 清理无用资源
```

## 📚 Docker 核心概念速览

### Docker 架构
```
┌─────────────────────────────────────┐
│         Docker Client               │
│  (docker build, docker pull, etc.)  │
└──────────────┬──────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│         Docker Daemon               │
│  ┌──────────┐  ┌──────────┐        │
│  │ Images   │  │Container │        │
│  └──────────┘  └──────────┘        │
└─────────────────────────────────────┘
               │
               ▼
┌─────────────────────────────────────┐
│      Docker Registry                │
│  (Docker Hub, 阿里云镜像仓库)        │
└─────────────────────────────────────┘
```

### 镜像分层结构
```
┌─────────────────────┐
│  Application Layer  │ ← 应用层（可写）
├─────────────────────┤
│   Dependencies      │ ← 依赖层（只读）
├─────────────────────┤
│   Runtime (JDK)     │ ← 运行时（只读）
├─────────────────────┤
│   Base OS (Alpine)  │ ← 基础镜像（只读）
└─────────────────────┘
```

### 容器生命周期
```
created → running → paused → stopped → deleted
   ↑         ↓                    ↓
   └─────────┴────────────────────┘
```

## 🏗️ Dockerfile 基础模板

### Spring Boot 应用 Dockerfile
```dockerfile
# 使用官方 OpenJDK 镜像
FROM openjdk:8-jdk-alpine

# 设置工作目录
WORKDIR /app

# 复制 jar 包
COPY target/*.jar app.jar

# 暴露端口
EXPOSE 8080

# 启动应用
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### Docker Compose 基础模板
```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    depends_on:
      - mysql
      - redis
    environment:
      - SPRING_DATASOURCE_URL=jdbc:mysql://mysql:3306/db
      - SPRING_REDIS_HOST=redis

  mysql:
    image: mysql:8.0
    environment:
      - MYSQL_ROOT_PASSWORD=root
      - MYSQL_DATABASE=db
    volumes:
      - mysql-data:/var/lib/mysql

  redis:
    image: redis:6.2-alpine
    ports:
      - "6379:6379"

volumes:
  mysql-data:
```

## 📚 推荐资源

### 官方文档
- [Docker 官方网站](https://www.docker.com/)
- [Docker 官方文档](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)

### 镜像仓库
- [Docker Hub](https://hub.docker.com/)
- [阿里云容器镜像服务](https://cr.console.aliyun.com/)
- [腾讯云容器镜像服务](https://cloud.tencent.com/product/tcr)

### 推荐工具
- **Docker Desktop** - Windows/macOS 官方客户端
- **Portainer** - Docker 可视化管理工具
- **Lazydocker** - 终端 Docker 管理工具
- **Docker Compose** - 多容器编排工具

## ⚠️ 注意事项

1. **资源限制** - 容器默认可使用主机全部资源，生产环境需设置限制
2. **数据持久化** - 容器删除后数据会丢失，重要数据使用 Volume
3. **网络安全** - 不要暴露不必要的端口，使用网络隔离
4. **镜像大小** - 优先使用 alpine 等轻量级基础镜像
5. **版本管理** - 生产环境使用具体版本号，避免使用 latest
6. **日志管理** - 配置日志驱动，避免日志占满磁盘

## 🎯 学习路线图

```
第1周：Docker 基础
├─ Docker 安装配置
├─ 镜像与容器操作
├─ 掌握基本命令
└─ 了解容器原理

第2周：核心概念
├─ Dockerfile 编写
├─ 镜像构建
├─ 网络配置
└─ 数据卷管理

第3周：实战应用
├─ 容器化 Spring Boot
├─ 容器化 MySQL/Redis
├─ 多容器通信
└─ 镜像优化

第4周：进阶技巧
├─ Docker Compose
├─ 微服务编排
├─ 监控与日志
└─ CI/CD 集成
```

## 🤝 企业级 Docker 最佳实践

### 镜像构建规范
```
1. 使用多阶段构建减小镜像体积
2. 合并 RUN 指令减少层数
3. 利用构建缓存加速构建
4. .dockerignore 排除无关文件
5. 使用具体版本号的基础镜像
```

### 容器运行建议
1. 为容器设置资源限制（CPU、内存）
2. 使用健康检查确保服务可用
3. 配置重启策略实现自动恢复
4. 使用只读文件系统增强安全性

### 生产环境部署
```
推荐技术栈：
├─ Kubernetes - 容器编排
├─ Harbor - 私有镜像仓库
├─ Prometheus - 监控告警
└─ ELK - 日志收集分析
```

## 📄 版权说明

本教程仅供学习使用，欢迎分享传播。

---

**准备好了吗？让我们开始 Docker 学习之旅！🚀**

**建议从 [第一章：Docker 基础入门](1.Docker基础入门.md) 开始学习**
