---
title: 计算机操作系统
sidebar: false
article: false
categories:
  - 教程
tags:
  - 操作系统
---

# ⚙️ 计算机操作系统教程

掌握操作系统核心原理，理解计算机系统软件的运行机制。

## 📖 教程目录

### 🌟 基础篇

理解操作系统的基本概念和核心功能。

<div class="course-list">
  <div class="course-item">
    <a href="./basic/introduction.html">
      <h3>📘 操作系统概述</h3>
      <p>操作系统的功能、特征和发展历史</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./basic/process.html">
      <h3>⚡ 进程与线程</h3>
      <p>进程的概念、状态转换、进程调度</p>
    </a>
  </div>
</div>

### 🚀 核心篇

深入学习操作系统的核心机制。

<div class="course-list">
  <div class="course-item">
    <a href="./core/sync.html">
      <h3>🔄 进程同步</h3>
      <p>临界区、信号量、管程、死锁处理</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./core/memory.html">
      <h3>💾 内存管理</h3>
      <p>分页分段、虚拟内存、页面置换算法</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./core/filesystem.html">
      <h3>📁 文件系统</h3>
      <p>文件的逻辑结构、目录结构、文件系统实现</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./core/device.html">
      <h3>🖨️ 设备管理</h3>
      <p>I/O系统、设备驱动、磁盘调度</p>
    </a>
  </div>
</div>

## 💡 学习建议

1. **循序渐进**：按照章节顺序学习，构建完整的知识体系
2. **理解原理**：重点理解操作系统的工作原理和设计思想
3. **动手实践**：通过实验加深对操作系统机制的理解
4. **多做习题**：通过练习巩固所学知识
5. **关注应用**：了解不同操作系统（Linux、Windows）的实现

## 📚 推荐资源

- [操作系统概念（第9版）](https://book.douban.com/subject/30297919/)
- [现代操作系统（第4版）](https://book.douban.com/subject/27096665/)
- [Linux 内核设计与实现](https://book.douban.com/subject/6097773/)

---

<div style="text-align: center; margin-top: 40px;">
  <p>🎓 开始你的操作系统学习之旅吧！</p>
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
