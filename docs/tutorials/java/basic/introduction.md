---
title: Java 简介
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - 基础
---

# Java 简介

## 什么是 Java？

Java 是一门面向对象的编程语言，由 Sun Microsystems（现已被 Oracle 收购）于 1995 年推出。Java 以其"一次编写，到处运行"（Write Once, Run Anywhere, WORA）的特性而闻名。

## Java 的特点

### 1. 简单易学

Java 语法简洁明了，去除了 C++ 中复杂的指针和多重继承等特性，更容易上手。

### 2. 面向对象

Java 完全支持面向对象编程的三大特性：

- **封装**（Encapsulation）
- **继承**（Inheritance）
- **多态**（Polymorphism）

### 3. 平台无关性

Java 程序编译后生成字节码（Bytecode），可以在任何安装了 JVM（Java Virtual Machine）的平台上运行。

```
Java 源代码(.java) → 编译 → 字节码(.class) → JVM → 不同平台
```

### 4. 健壮性

- **强类型检查**：编译时检查类型错误
- **自动内存管理**：垃圾回收机制（GC）
- **异常处理**：完善的异常处理机制

### 5. 安全性

- 字节码验证
- 沙箱运行环境
- 没有指针，防止内存越界

### 6. 多线程支持

Java 原生支持多线程编程，便于开发高并发应用。

### 7. 高性能

虽然是解释执行，但 JIT（Just-In-Time）编译器能够提升运行效率。

## Java 的应用领域

### 🌐 Web 开发
- 企业级应用（Spring、Spring Boot）
- 电商平台
- 在线支付系统

### 📱 Android 开发
- Android 应用开发的主要语言
- 移动游戏开发

### 🎮 游戏开发
- Minecraft（用 Java 开发）
- 2D/3D 游戏

### 💼 企业应用
- ERP 系统
- CRM 系统
- 金融系统

### 🔧 大数据
- Hadoop
- Spark
- Kafka

### ☁️ 云计算
- 云平台开发
- 微服务架构

## Java 的版本

### Java SE（Standard Edition）
标准版，提供核心 API 和运行环境。

### Java EE（Enterprise Edition）
企业版，用于开发企业级应用。

### Java ME（Micro Edition）
微型版，用于移动设备和嵌入式系统。

## Java 的发展历程

| 版本 | 发布时间 | 主要特性 |
|------|----------|----------|
| JDK 1.0 | 1996 | 初始版本 |
| JDK 1.5 | 2004 | 泛型、注解、枚举 |
| JDK 8 | 2014 | Lambda 表达式、Stream API |
| JDK 11 | 2018 | LTS 版本 |
| JDK 17 | 2021 | 最新 LTS 版本 |

## Hello World 示例

让我们看一个简单的 Java 程序：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
```

**代码解释：**

- `public class HelloWorld`：定义一个公共类
- `main` 方法：程序的入口点
- `System.out.println()`：输出到控制台

## 小结

Java 是一门功能强大、应用广泛的编程语言。它的跨平台性、面向对象特性和丰富的生态系统使其成为企业开发的首选语言之一。

在接下来的教程中，我们将学习如何搭建 Java 开发环境，并深入学习 Java 的核心知识。

---

**下一节：** [环境搭建](./install.md)


