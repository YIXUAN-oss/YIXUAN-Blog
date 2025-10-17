---
title: Java 环境搭建
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - 基础
  - 环境配置
---

# Java 环境搭建

要开始 Java 编程，首先需要搭建开发环境。本教程将指导你完成 JDK 的安装和配置。

## 什么是 JDK？

### JDK、JRE 和 JVM 的关系

```
┌────────────────────────────────┐
│          JDK (开发工具包)        │
│  ┌──────────────────────────┐  │
│  │      JRE (运行环境)       │  │
│  │  ┌───────────────────┐   │  │
│  │  │   JVM (虚拟机)     │   │  │
│  │  └───────────────────┘   │  │
│  └──────────────────────────┘  │
└────────────────────────────────┘
```

- **JDK**（Java Development Kit）：Java 开发工具包，包含编译器、调试器等开发工具
- **JRE**（Java Runtime Environment）：Java 运行环境，用于运行 Java 程序
- **JVM**（Java Virtual Machine）：Java 虚拟机，执行字节码

## Windows 环境安装

### 1. 下载 JDK

访问 Oracle 官网或 OpenJDK：

- **Oracle JDK**: [https://www.oracle.com/java/technologies/downloads/](https://www.oracle.com/java/technologies/downloads/)
- **OpenJDK**: [https://openjdk.org/](https://openjdk.org/)

推荐下载 **JDK 17**（LTS 长期支持版本）

### 2. 安装 JDK

1. 运行下载的安装程序
2. 选择安装路径（建议：`C:\Program Files\Java\jdk-17`）
3. 完成安装

### 3. 配置环境变量

#### 方法一：通过系统属性配置

1. 右键"此电脑" → "属性"
2. 点击"高级系统设置"
3. 点击"环境变量"

**配置 JAVA_HOME：**
```
变量名：JAVA_HOME
变量值：C:\Program Files\Java\jdk-17
```

**配置 Path：**

在 Path 变量中添加：
```
%JAVA_HOME%\bin
```

#### 方法二：通过命令行配置（PowerShell）

```powershell
# 设置 JAVA_HOME
[System.Environment]::SetEnvironmentVariable("JAVA_HOME", "C:\Program Files\Java\jdk-17", "Machine")

# 添加到 Path
$path = [System.Environment]::GetEnvironmentVariable("Path", "Machine")
[System.Environment]::SetEnvironmentVariable("Path", "$path;%JAVA_HOME%\bin", "Machine")
```

### 4. 验证安装

打开命令提示符或 PowerShell，输入：

```bash
java -version
```

输出示例：
```
java version "17.0.1" 2021-10-19 LTS
Java(TM) SE Runtime Environment (build 17.0.1+12-LTS-39)
Java HotSpot(TM) 64-Bit Server VM (build 17.0.1+12-LTS-39, mixed mode)
```

再输入：
```bash
javac -version
```

输出示例：
```
javac 17.0.1
```

## macOS 环境安装

### 1. 使用 Homebrew 安装（推荐）

```bash
# 安装 Homebrew（如果未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 OpenJDK 17
brew install openjdk@17

# 创建符号链接
sudo ln -sfn /opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk /Library/Java/JavaVirtualMachines/openjdk-17.jdk
```

### 2. 配置环境变量

编辑 `~/.zshrc` 或 `~/.bash_profile`：

```bash
export JAVA_HOME=$(/usr/libexec/java_home -v 17)
export PATH=$JAVA_HOME/bin:$PATH
```

使配置生效：
```bash
source ~/.zshrc  # 或 source ~/.bash_profile
```

### 3. 验证安装

```bash
java -version
javac -version
```

## Linux 环境安装（Ubuntu）

### 1. 安装 OpenJDK

```bash
# 更新包列表
sudo apt update

# 安装 OpenJDK 17
sudo apt install openjdk-17-jdk
```

### 2. 配置环境变量

编辑 `~/.bashrc`：

```bash
export JAVA_HOME=/usr/lib/jvm/java-17-openjdk-amd64
export PATH=$JAVA_HOME/bin:$PATH
```

使配置生效：
```bash
source ~/.bashrc
```

### 3. 验证安装

```bash
java -version
javac -version
```

## 开发工具（IDE）推荐

### 1. IntelliJ IDEA（推荐）

- **优点**：功能强大、智能提示、调试方便
- **下载**：[https://www.jetbrains.com/idea/](https://www.jetbrains.com/idea/)
- **版本**：Community（免费）或 Ultimate（付费）

### 2. Eclipse

- **优点**：免费开源、插件丰富
- **下载**：[https://www.eclipse.org/](https://www.eclipse.org/)

### 3. Visual Studio Code

- **优点**：轻量级、扩展丰富
- **下载**：[https://code.visualstudio.com/](https://code.visualstudio.com/)
- **插件**：安装 Java Extension Pack

### 4. NetBeans

- **优点**：官方支持、集成度高
- **下载**：[https://netbeans.apache.org/](https://netbeans.apache.org/)

## 第一个 Java 程序

### 1. 创建源文件

创建 `HelloWorld.java` 文件：

```java
public class HelloWorld {
    public static void main(String[] args) {
        System.out.println("Hello, Java!");
    }
}
```

### 2. 编译程序

```bash
javac HelloWorld.java
```

编译成功后会生成 `HelloWorld.class` 文件。

### 3. 运行程序

```bash
java HelloWorld
```

输出：
```
Hello, Java!
```

## 常见问题

### Q: 'javac' 不是内部或外部命令

**解决方法**：检查环境变量配置是否正确，重启命令行工具。

### Q: 找不到或无法加载主类

**解决方法**：
1. 检查类名与文件名是否一致
2. 确保在正确的目录下运行
3. 检查类是否有 `public` 修饰符

### Q: JDK 版本选择

**建议**：
- 学习使用：JDK 17（LTS）
- 生产环境：根据项目需求选择 LTS 版本

## 小结

本节我们学习了：

✅ JDK、JRE 和 JVM 的区别  
✅ 在不同操作系统上安装 JDK  
✅ 配置环境变量  
✅ 选择合适的开发工具  
✅ 编写并运行第一个 Java 程序

环境搭建完成后，我们就可以开始学习 Java 的基础语法了！

---

**上一节：** [Java 简介](./introduction.md)  
**下一节：** [基础语法](./syntax.md)


