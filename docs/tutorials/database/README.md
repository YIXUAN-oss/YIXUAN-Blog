---
title: 数据库教程
sidebar: false
article: false
categories:
  - 教程
tags:
  - 数据库
  - SQL
  - NoSQL
---

# 💾 数据库教程

欢迎来到数据库教程中心！学习如何高效地存储、管理和查询数据。

## 📖 教程目录

### 🗄️ SQL 数据库

掌握关系型数据库的基础知识和查询技巧。

<div class="course-list">
  <div class="course-item">
    <a href="./sql/introduction.html">
      <h3>📘 SQL 简介</h3>
      <p>数据库基础概念和 SQL 语言</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./sql/basic-query.html">
      <h3>🔍 基础查询</h3>
      <p>SELECT、WHERE、ORDER BY 等</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./sql/advanced-query.html">
      <h3>🚀 高级查询</h3>
      <p>JOIN、子查询、聚合函数</p>
    </a>
  </div>
</div>

### 📊 NoSQL 数据库

学习非关系型数据库，应对大数据时代的挑战。

<div class="course-list">
  <div class="course-item">
    <a href="./nosql/mongodb.html">
      <h3>🍃 MongoDB</h3>
      <p>文档型数据库的使用</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./nosql/redis.html">
      <h3>🔴 Redis</h3>
      <p>内存数据库和缓存</p>
    </a>
  </div>
</div>

## 💡 数据库类型对比

### 关系型数据库 (SQL)
- ✅ 数据结构化，关系明确
- ✅ 支持事务，保证数据一致性
- ✅ 成熟稳定，应用广泛
- 📌 代表：MySQL、PostgreSQL、Oracle

### 非关系型数据库 (NoSQL)
- ✅ 高性能，易扩展
- ✅ 灵活的数据模型
- ✅ 适合大数据场景
- 📌 代表：MongoDB、Redis、Cassandra

## 🎯 应用场景

### MySQL
- 🌐 Web 应用
- 💼 企业管理系统
- 🛒 电商平台

### PostgreSQL
- 📊 数据分析
- 🗺️ 地理信息系统
- 🔬 科学研究

### MongoDB
- 📱 移动应用
- 📰 内容管理
- 🎮 游戏数据

### Redis
- ⚡ 缓存系统
- 🔢 计数器
- 💬 实时聊天

## 📚 推荐资源

### SQL 学习
- [MySQL 官方文档](https://dev.mysql.com/doc/)
- [PostgreSQL 中文文档](http://www.postgres.cn/docs/)
- [SQL 教程 - 菜鸟教程](https://www.runoob.com/sql/)

### NoSQL 学习
- [MongoDB 官方文档](https://docs.mongodb.com/)
- [Redis 官方文档](https://redis.io/documentation)
- [NoSQL 数据库入门](https://www.mongodb.com/nosql-explained)

## 🛠️ 实用工具

- **Navicat** - 数据库管理工具
- **DataGrip** - JetBrains 数据库工具
- **DBeaver** - 免费开源数据库工具
- **Redis Desktop Manager** - Redis 可视化工具

---

<div style="text-align: center; margin-top: 40px;">
  <p>💾 掌握数据库，让数据为你所用！</p>
</div>

<style scoped>
.course-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 20px;
  margin: 30px 0;
}

.course-item {
  background: var(--bg-color-secondary, #f6f8fa);
  border: 1px solid var(--border-color, #eaecef);
  border-radius: 10px;
  padding: 20px;
  transition: all 0.3s ease;
}

.course-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-color, #3eaf7c);
}

.course-item a {
  text-decoration: none;
  color: inherit;
}

.course-item h3 {
  margin-top: 0;
  margin-bottom: 10px;
  color: var(--text-color, #2c3e50);
  border: none;
}

.course-item p {
  margin: 0;
  color: var(--text-color-secondary, #6a737d);
  font-size: 0.9em;
}
</style>


