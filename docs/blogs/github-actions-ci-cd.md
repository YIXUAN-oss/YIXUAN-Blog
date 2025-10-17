---
title: GitHub Actions 自动化 CI/CD
date: 2025-10-12
categories:
  - DevOps
tags:
  - GitHub Actions
  - CI/CD
  - 自动化
author: 懿轩
---

# GitHub Actions 自动化 CI/CD

GitHub Actions 让 CI/CD 变得简单。本文介绍如何使用 GitHub Actions 实现自动化构建和部署。

## 🎯 什么是 GitHub Actions

GitHub Actions 是 GitHub 提供的 CI/CD 平台，可以自动化软件开发工作流。

## 📝 基础配置

### 创建工作流文件

```yaml
name: CI/CD Pipeline

on:
  push:
    branches: [ main ]
  pull_request:
    branches: [ main ]

jobs:
  build:
    runs-on: ubuntu-latest
    
    steps:
    - uses: actions/checkout@v3
    
    - name: Setup Node.js
      uses: actions/setup-node@v3
      with:
        node-version: '18'
    
    - name: Install dependencies
      run: npm ci
    
    - name: Run tests
      run: npm test
    
    - name: Build
      run: npm run build
```

## 🚀 自动部署

### 部署到 Vercel

```yaml
name: Deploy to Vercel

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v3
    
    - name: Deploy to Vercel
      uses: amondnet/vercel-action@v25
      with:
        vercel-token: ${{ secrets.VERCEL_TOKEN }}
        vercel-org-id: ${{ secrets.ORG_ID }}
        vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 💡 最佳实践

- 使用 secrets 管理敏感信息
- 合理使用缓存提升速度
- 并行执行独立任务
- 添加状态徽章

## 🎓 总结

GitHub Actions 提供了强大的自动化能力，让 CI/CD 变得简单高效。

---

**标签**: #GitHubActions #CICD #自动化 #DevOps
