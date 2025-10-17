---
title: 数据结构与算法
sidebar: false
article: false
categories:
  - 教程
tags:
  - 数据结构
  - 算法
---

# 📊 数据结构与算法教程

掌握算法思维与编程能力，提升解决问题的核心竞争力。

## 📖 教程目录

### 🌟 基础篇

掌握常用的基础数据结构。

<div class="course-list">
  <div class="course-item">
    <a href="./basic/array.html">
      <h3>📘 数组与链表</h3>
      <p>线性表的顺序存储和链式存储</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./basic/stack-queue.html">
      <h3>🎯 栈与队列</h3>
      <p>后进先出(LIFO)和先进先出(FIFO)</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./basic/hash.html">
      <h3>🔑 哈希表</h3>
      <p>散列表、哈希函数和冲突处理</p>
    </a>
  </div>
</div>

### 🌳 树与图

学习树形结构和图论算法。

<div class="course-list">
  <div class="course-item">
    <a href="./tree/binary-tree.html">
      <h3>🌲 二叉树</h3>
      <p>二叉树的遍历和应用</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./tree/balanced-tree.html">
      <h3>⚖️ 平衡树</h3>
      <p>AVL树、红黑树、B树</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./graph/graph.html">
      <h3>🕸️ 图论算法</h3>
      <p>图的表示、遍历和最短路径</p>
    </a>
  </div>
</div>

### 🚀 算法进阶

掌握经典的算法设计思想。

<div class="course-list">
  <div class="course-item">
    <a href="./algorithm/sort.html">
      <h3>🔢 排序算法</h3>
      <p>冒泡、快速、归并、堆排序</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./algorithm/search.html">
      <h3>🔍 查找算法</h3>
      <p>二分查找、哈希查找</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./algorithm/dp.html">
      <h3>⚡ 动态规划</h3>
      <p>状态转移方程和优化问题</p>
    </a>
  </div>
  
  <div class="course-item">
    <a href="./algorithm/greedy.html">
      <h3>🎯 贪心算法</h3>
      <p>局部最优选择解决问题</p>
    </a>
  </div>
</div>

## 💡 学习建议

1. **理解原理**：先理解数据结构的原理，再学习如何实现
2. **多做练习**：在实践中加深理解，提高编程能力
3. **复杂度分析**：注重算法的时间和空间复杂度分析
4. **刷题巩固**：参加 LeetCode、牛客网等平台的算法练习
5. **总结规律**：总结常见的算法模板和解题技巧

## 📚 推荐资源

- [数据结构与算法分析（第3版）](https://book.douban.com/subject/26745780/)
- [算法导论（第3版）](https://book.douban.com/subject/20432061/)
- [LeetCode](https://leetcode.cn/) - 算法练习平台
- [牛客网](https://www.nowcoder.com/) - 编程面试练习

---

<div style="text-align: center; margin-top: 40px;">
  <p>🎓 开始你的算法学习之旅吧！</p>
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

