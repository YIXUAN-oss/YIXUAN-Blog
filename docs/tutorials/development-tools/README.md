---
title: 开发工具
---

# 🛠️ 开发工具

> 工欲善其事，必先利其器

## 📖 工具导航

### [Git 版本控制](git/) ⭐⭐⭐⭐⭐
**必备技能** - 团队协作的基础

- Git基础入门
- Git进阶技巧
- Git实战场景
- 分支管理策略
- GitHub/GitLab使用

### [Maven 构建工具](maven/) ⭐⭐⭐⭐⭐
**Java项目管理** - 依赖管理与项目构建

- Maven基础配置
- 依赖管理
- 生命周期
- 多模块项目
- 私服配置

### [Gradle 构建工具](gradle/) ⭐⭐⭐
**现代化构建** - 比Maven更灵活

- Gradle基础
- Groovy/Kotlin DSL
- 插件系统
- 与Maven对比

### [IDE 使用技巧](ide/)
**提升开发效率**

- [IntelliJ IDEA](ide/idea/)
  - 快捷键大全
  - 插件推荐
  - 调试技巧
  - 重构技巧

- [VS Code](ide/vscode/)
  - 配置优化
  - 插件推荐
  - 远程开发

## 🎯 学习优先级

### P0 - 必学
1. **Git** - 版本控制是基础中的基础
2. **Maven** - Java开发必备
3. **IDEA** - 提升开发效率

### P1 - 推荐
1. **Gradle** - 现代化项目构建
2. **VS Code** - 轻量级编辑器

## 💡 学习建议

1. **Git学习路线**
   ```
   基本命令 → 分支管理 → 冲突解决 → 团队协作 → 工作流
   ```

2. **Maven学习路线**
   ```
   安装配置 → 坐标依赖 → 生命周期 → 继承聚合 → 私服
   ```

3. **IDEA学习路线**
   ```
   基本操作 → 快捷键 → 调试技巧 → 插件使用 → 高级功能
   ```

## 🚀 实用技巧

### Git 常用命令
```bash
git init                    # 初始化仓库
git add .                   # 添加所有文件
git commit -m "message"     # 提交更改
git push origin main        # 推送到远程
git pull origin main        # 拉取更新
git checkout -b feature     # 创建并切换分支
```

### Maven 常用命令
```bash
mvn clean                   # 清理
mvn compile                 # 编译
mvn test                    # 测试
mvn package                 # 打包
mvn install                 # 安装到本地仓库
mvn clean install -DskipTests  # 跳过测试打包
```

### IDEA 快捷键 (Windows)
```
Ctrl + Space        # 代码补全
Ctrl + /            # 注释/取消注释
Ctrl + D            # 复制当前行
Ctrl + Y            # 删除当前行
Shift + F6          # 重命名
Ctrl + Alt + L      # 格式化代码
Shift + Shift       # 搜索所有
```

## 📚 推荐资源

- [Pro Git 中文版](https://git-scm.com/book/zh/v2)
- [Maven官方文档](https://maven.apache.org/)
- [IDEA官方文档](https://www.jetbrains.com/idea/documentation/)

---

**开始学习** → [从Git版本控制开始](git/)
