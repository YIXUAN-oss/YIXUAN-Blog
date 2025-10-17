---
title: 计算机组成原理
sidebar: false
article: false
categories:
  - 教程
tags:
  - 计算机组成原理
---

# 🖥️ 计算机组成原理教程

探索计算机硬件的工作原理，深入理解计算机系统的底层实现。

## 📖 教程目录

### 🌟 基础篇

理解计算机系统的基本组成和数据表示。

<div class="course-list">
  <div class="course-item">
    <a href="./basic/introduction.html">
      <h3>📘 计算机系统概述</h3>
      <p>冯·诺依曼体系结构、计算机的基本组成</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./basic/data.html">
      <h3>🔢 数据的表示与运算</h3>
      <p>数制转换、定点数、浮点数、算术逻辑单元</p>
    </a>
  </div>
</div>

### 🚀 核心篇

深入学习CPU、存储器和I/O系统。

<div class="course-list">
  <div class="course-item">
    <a href="./core/memory.html">
      <h3>💾 存储系统</h3>
      <p>存储器层次结构、Cache、主存、虚拟存储</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./core/instruction.html">
      <h3>📋 指令系统</h3>
      <p>指令格式、寻址方式、RISC与CISC</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./core/cpu.html">
      <h3>⚙️ 中央处理器</h3>
      <p>CPU的功能与组成、指令执行过程、流水线技术</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./core/io.html">
      <h3>🔌 总线与I/O系统</h3>
      <p>总线结构、I/O接口、中断系统</p>
    </a>
  </div>
</div>

## 💡 学习建议

1. **循序渐进**：按照章节顺序学习，构建完整的知识体系
2. **理解原理**：重点理解硬件的工作原理和设计思想
3. **动手实践**：通过仿真软件加深理解
4. **多做习题**：通过练习巩固所学知识
5. **关注应用**：了解现代计算机的实现技术

## 📚 推荐资源

- [计算机组成原理（唐朔飞第2版）](https://book.douban.com/subject/2994636/)
- [深入理解计算机系统](https://book.douban.com/subject/26912767/)
- [计算机体系结构：量化研究方法](https://book.douban.com/subject/7006537/)

---

<div style="text-align: center; margin-top: 40px;">
  <p>🎓 开始你的计算机组成原理学习之旅吧！</p>
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

