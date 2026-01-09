---
title:【2025 最新】Typora + AtomGit GitCode 图床配置指南：Markdown 写作自动上传图片
date: 2025-12-25
categories:
  - 开发工具
tags:
  - Typora
  - 图床
  - Markdown
author: 懿轩
---

## 一、准备工作

### 1. 注册并登录 [AtomGit | GitCode](https://gitcode.com/)

确保你有一个 GitCode 账号，并已创建一个公开仓库（私有仓库可能无法外链图片）。

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225220641732.png" alt="image-20251225220641732" style="border-radius: 8px;" />

我这里取名：

```
YIXUAN-blog-image-hosting
```

大家可以自行定义：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225210507234.png" alt="image-20251225210507234" style="border-radius: 8px;" />

### 2. 获取 Personal Access Token（个人访问令牌）

- 登录 GitCode → 点击右上角头像 → **设置（Settings）**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211318942.png" alt="image-20251225211318942" style="border-radius: 8px;" />

- 左侧菜单选择 **私人令牌（Personal Access Tokens）**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211345322.png" alt="image-20251225211345322" style="border-radius: 8px;" />

- 创建新令牌（Token），填写令牌名称和到期时间，勾选 `repo` 权限（用于读写仓库）

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211503624.png" alt="image-20251225211503624" style="border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211609082.png" alt="image-20251225211609082" style="border-radius: 8px;" />

- 生成后**务必保存好这个 token**（只显示一次）
- 一定要保存好！！！

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211630033.png" alt="image-20251225211630033" style="zoom: 67%; border-radius: 8px;" />

------

## 二、配置 Typora 使用 GitCode 图床

Typora 支持通过 **PicGo Core（命令行版）** 或 **第三方图床工具** 实现自动上传。推荐使用 **PicGo + GitCode 插件**。

### 方法一：使用 PicGo（图形界面）+ GitCode 图床插件（推荐）

#### 步骤 1：安装 PicGo

- 下载地址：https://github.com/Molunerfinn/PicGo/releases
- [Release 2.4.1 · Molunerfinn/PicGo](https://github.com/Molunerfinn/PicGo/releases/tag/v2.4.1)
- 往下翻，根据自己电脑配置选择合适的安装包，我这里是Windows 11 64位电脑

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225210827707.png" alt="image-20251225210827707" style="zoom:67%; border-radius: 8px;" />

- 开始安装，点击安装包

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225210945100.png" alt="image-20251225210945100" style="zoom:50%; border-radius: 8px;" />

- 点击下一步

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211000922.png" alt="image-20251225211000922" style="zoom:50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211125462.png" alt="image-20251225211125462" style="zoom:50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211151125.png" alt="image-20251225211151125" style="zoom:50%; border-radius: 8px;" />

- 安装后打开 PicGo

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225211835102.png" alt="image-20251225211835102" style="zoom: 67%; border-radius: 8px;" />

#### 步骤 2：安装 GitCode 图床插件

1. 在 PicGo 中点击「插件设置」→ 搜索 `gitcode`
2. 安装 `picgo uploader for gitcode`

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225212047448.png" alt="image-20251225212047448" style="zoom:67%; border-radius: 8px;" />

#### 步骤 3：配置 GitCode图床

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225212303020.png" alt="image-20251225212303020" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225212326365.png" alt="image-20251225212326365" style="zoom:50%; border-radius: 8px;" />

在 PicGo 的「图床设置」→「GitCode图床」中填写：

- **仓库名（Repo）**：`你的用户名/仓库名`（如 `yourname/picbed`）

- **分支（Branch）**：通常为 `main` 或 `master`

- **Token**：你在 GitCode 生成的 Personal Access Token
- **存储路径（Path）**：可选，如 `img`（图片将存入该目录）

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226202859857.png" alt="image-20251226202859857" style="zoom:50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226202337728.png" alt="image-20251226202337728" style="zoom: 56%; border-radius: 8px;" />

图床为已选中状态：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225213722484.png" alt="image-20251225213722484" style="zoom:50%; border-radius: 8px;" />

#### 步骤 4：设置 Typora 使用 PicGo

1. 打开 Typora → 文件 → 偏好设置 → 图像

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225213500936.png" alt="image-20251225213500936" style="zoom: 50%; border-radius: 8px;" />

2. 选择「上传服务设定」→ 上传服务：**PicGo (app)**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225213558468.png" alt="image-20251225213558468" style="zoom: 33%; border-radius: 8px;" />

3. 确保 PicGo 已启动并运行在后台

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225213629150.png" alt="image-20251225213629150" style="zoom:50%; border-radius: 8px;" />

4. 测试上传：在 Typora 中拖入一张图片，选择「上传图片」，应自动上传并替换为 GitCode 链接
5. 或者在笔记中选中图片右键上传图片：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225213844437.png" alt="image-20251225213844437" style="zoom:50%; border-radius: 8px;" />

弹出隐私弹窗后点击是：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225214015841.png" alt="image-20251225214015841" style="zoom:50%; border-radius: 8px;" />

就会看到上传成功：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225215551092.png" alt="image-20251225215551092" style="zoom: 50%; border-radius: 8px;" />

#### 如何批量上传图片：

这样就可以上传笔记所有图片：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225215757396.png" alt="image-20251225215757396" style="border-radius: 8px;" />

------

### 方法二：使用 PicGo-Core（命令行版）+ 配置文件（适合高级用户）

如果你不想用图形界面，可使用 PicGo-Core：

1. 安装 Node.js

2. 全局安装 PicGo-Core：

   ```bash
   npm install -g picgo
   ```

3. 配置 

   ```
   ~/.picgo/config.json
   ```

   （示例）：

   ```json
   {
     "picBed": {
       "current": "gitcode",
       "gitee": {
         "repo": "yourname/picbed",
         "token": "你的token",
         "branch": "main",
         "path": "typora/"
       }
     },
     "picgoPlugins": {}
   }
   ```

4. 在 Typora 中设置上传命令为：

   ```
   picgo upload
   ```

------

## 三、注意事项

1. **仓库必须公开**：否则图片链接无法被外部访问。
2. **GitCode 的 raw 链接可能较慢**：如果加载慢，可考虑搭配 CDN（如 jsDelivr）。
3. **避免频繁上传**：GitCode 有 API 速率限制。
4. **图片路径不要含中文或特殊字符**：可能导致链接失效。

## 四、如何更好管理仓库图片

统一的命名规范：

避免 `微信图片_20250405123456.png` 这类无意义名称。

### 第一步：下载该插件

推荐格式：

```
{来源}-{主题}-{时间戳}.{ext}
```

例如：

- `typora-gitcode-setup-20250405-1423.png`
- `vscode-theme-preview-20250406.png`

> 💡 可在 PicGo 中启用 **自动重命名插件**（如 `picgo-plugin-rename-file`），规则示例：
>
> ```
> ${year}${month}${day}-${fileName}-${hash:6}
> ```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251225220542647.png" alt="image-20251225220542647" style="zoom:50%; border-radius: 8px;" />

### 第二步：启用并配置重命名规则

#### 1. 启用插件

- 在 **「插件设置」** 页面，找到 `rename-file`
- 勾选 **「启用」**

#### 2. 配置命名规则（关键！）

点击 `rename-file` 插件的 **「配置」** 按钮（或编辑 `picgo.conf` 文件），填入以下 **自定义格式**：

```
{
  "format": "${fileName}-${date:YYYYMMDD}-${time:HHmm}",
  "customFileNameMap": {
    "微信截图": "wechat",
    "Snipaste": "snipaste",
    "Typora": "typora",
    "VSCode": "vscode",
    "image": "screenshot"
  }
}
```

但注意：**`${fileName}` 是原始文件名**，比如 `image-20251225210404443.png`，它本身不含"来源"信息。

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226105156578.png" alt="image-20251226105156578" style="zoom:50%; border-radius: 8px;" />

#### 3.更优方案：使用 `${hash}` + 固定前缀（推荐）

由于 PicGo **无法自动识别"来源"和"主题"**（除非你手动改名），更实用的做法是：

> **用固定前缀 + 时间戳 + 哈希值**，确保唯一且语义清晰

推荐配置（直接复制）：

```
blog-${date:YYYYMMDD}-${time:HHmm}-${hash:6}.${ext}
```

效果示例：

- `blog-20251225-2149-a3f8b2.png`
- `blog-20251226-1030-c1e9d4.png`

✅ 优点：

- 自动避免重名（哈希保证唯一）
- 包含日期时间，便于排序
- 前缀 `blog` 表明用途（可改为 `note` / `slide` 等）

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226105444071.png" alt="image-20251226105444071" style="zoom: 50%; border-radius: 8px;" />

