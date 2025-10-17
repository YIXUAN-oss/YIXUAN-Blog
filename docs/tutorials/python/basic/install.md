---
title: Python 环境配置
date: 2025-10-16
categories:
  - Python 教程
tags:
  - Python
  - 基础
  - 环境配置
---

# Python 环境配置

本节介绍如何安装 Python 并配置开发环境。

## Windows 安装

### 1. 下载 Python

访问官网：[https://www.python.org/downloads/](https://www.python.org/downloads/)

选择最新的 Python 3.x 版本（推荐 Python 3.11 或 3.12）

### 2. 安装步骤

1. 运行安装程序
2. **重要**: 勾选"Add Python to PATH"
3. 选择"Install Now"
4. 等待安装完成

### 3. 验证安装

打开命令提示符（CMD）或 PowerShell：

```bash
python --version
# 输出：Python 3.12.0

python
# 进入 Python 交互式环境
>>> print("Hello, Python!")
Hello, Python!
>>> exit()
```

## macOS 安装

### 方法1：使用 Homebrew（推荐）

```bash
# 安装 Homebrew（如果未安装）
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"

# 安装 Python 3
brew install python3

# 验证
python3 --version
```

### 方法2：官网下载

1. 访问 [python.org](https://www.python.org/downloads/macos/)
2. 下载 macOS 安装包
3. 运行安装程序
4. 验证安装

## Linux 安装（Ubuntu）

Ubuntu 通常预装了 Python，但可能是旧版本。

### 安装 Python 3

```bash
# 更新包列表
sudo apt update

# 安装 Python 3
sudo apt install python3 python3-pip

# 验证
python3 --version
pip3 --version
```

## pip 包管理器

pip 是 Python 的包管理工具，用于安装第三方库。

### 基本用法

```bash
# 安装包
pip install requests

# 安装指定版本
pip install requests==2.28.0

# 卸载包
pip uninstall requests

# 列出已安装的包
pip list

# 查看包信息
pip show requests

# 升级包
pip install --upgrade requests

# 导出依赖
pip freeze > requirements.txt

# 安装依赖
pip install -r requirements.txt
```

### 更换 pip 源（国内用户）

```bash
# 临时使用清华源
pip install requests -i https://pypi.tuna.tsinghua.edu.cn/simple

# 永久配置（Windows）
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple

# 永久配置（Linux/macOS）
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```

## 虚拟环境

虚拟环境可以为不同项目创建独立的 Python 环境。

### 创建虚拟环境

```bash
# 创建虚拟环境
python -m venv myenv

# 激活虚拟环境
# Windows
myenv\Scripts\activate

# Linux/macOS
source myenv/bin/activate

# 退出虚拟环境
deactivate
```

### 使用示例

```bash
# 1. 创建项目目录
mkdir myproject
cd myproject

# 2. 创建虚拟环境
python -m venv venv

# 3. 激活虚拟环境
source venv/bin/activate  # Linux/macOS
# 或 venv\Scripts\activate  # Windows

# 4. 安装依赖
pip install requests flask

# 5. 导出依赖
pip freeze > requirements.txt

# 6. 工作完成后退出
deactivate
```

## 开发工具推荐

### 1. PyCharm（推荐）

- **优点**: 功能强大、智能提示、调试方便
- **版本**: Community（免费）或 Professional（付费）
- **下载**: [https://www.jetbrains.com/pycharm/](https://www.jetbrains.com/pycharm/)

### 2. VS Code

- **优点**: 轻量级、扩展丰富、免费
- **下载**: [https://code.visualstudio.com/](https://code.visualstudio.com/)
- **插件**: Python Extension

### 3. Jupyter Notebook

- **优点**: 交互式编程、数据分析利器
- **安装**: `pip install jupyter`
- **启动**: `jupyter notebook`

### 4. IDLE

- **优点**: Python 自带、简单易用
- **适合**: 初学者快速上手

## VS Code 配置 Python

### 1. 安装 Python 扩展

在 VS Code 中搜索并安装"Python"扩展（Microsoft 官方）

### 2. 选择 Python 解释器

1. 按 `Ctrl+Shift+P`（macOS: `Cmd+Shift+P`）
2. 输入"Python: Select Interpreter"
3. 选择已安装的 Python 版本

### 3. 创建 Python 文件

创建 `hello.py`：

```python
print("Hello, VS Code!")
```

按 `F5` 运行或右键选择"Run Python File in Terminal"

## 第一个 Python 程序

### 方法1：交互式模式

```bash
python
>>> print("Hello, Python!")
Hello, Python!
>>> 2 + 3
5
>>> exit()
```

### 方法2：脚本模式

创建 `hello.py`：

```python
# hello.py
print("Hello, Python!")
print("欢迎来到 Python 的世界！")

# 变量和计算
name = "懿轩"
age = 25
print(f"我是{name}，今年{age}岁")

# 简单的函数
def greet(name):
    return f"你好，{name}！"

print(greet("Python"))
```

运行：
```bash
python hello.py
```

输出：
```
Hello, Python!
欢迎来到 Python 的世界！
我是懿轩，今年25岁
你好，Python！
```

## 常见问题

### Q: python 不是内部或外部命令

**解决方法**:
1. 确认 Python 已安装
2. 检查环境变量 PATH 是否包含 Python 路径
3. Windows: 尝试使用 `py` 命令

### Q: pip 安装很慢

**解决方法**:
使用国内镜像源（清华源、阿里源等）

### Q: 虚拟环境无法激活

**Windows PowerShell 解决方法**:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Q: Python 2 和 Python 3 同时存在

**解决方法**:
- Windows: 使用 `py -3` 运行 Python 3
- Linux/macOS: 使用 `python3` 和 `pip3`

## 推荐的学习工具

### 在线编程平台

- [Repl.it](https://replit.com/) - 在线 Python 环境
- [Python Tutor](https://pythontutor.com/) - 可视化代码执行
- [LeetCode](https://leetcode.cn/) - 算法练习

### 学习资源

- [Python 官方文档](https://docs.python.org/zh-cn/3/)
- [菜鸟教程](https://www.runoob.com/python3/)
- [廖雪峰 Python 教程](https://www.liaoxuefeng.com/wiki/1016959663602400)

## 小结

本节我们学习了：

✅ 在不同操作系统上安装 Python  
✅ 使用 pip 管理包  
✅ 创建和使用虚拟环境  
✅ 选择合适的开发工具  
✅ 编写并运行第一个 Python 程序  

环境配置完成后，我们就可以开始学习 Python 的基础语法了！

---

**上一节：** [Python 简介](./introduction.md)  
**下一节：** [基础语法](./syntax.md)


