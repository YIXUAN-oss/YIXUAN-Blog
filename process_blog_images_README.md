# 博客图片处理脚本使用说明

## 功能说明

`process_blog_images.py` 是一个用于处理博客文章Markdown文件中图片的脚本，主要功能包括：

1. **添加圆角样式**：给所有图片添加 `border-radius: 8px;` 样式
2. **添加分割线**：在相邻图片之间（中间只有空白行）添加 `---` 分割线
3. **格式转换**：将Markdown格式的图片（`<img src="url" alt="alt" style="border-radius: 8px;" />`）转换为HTML格式，以便添加样式

## 使用方法

### 1. 处理单个文件

```bash
python process_blog_images.py docs/blogs/你的文章.md
```

### 2. 处理整个目录

```bash
python process_blog_images.py docs/blogs
```

### 3. 处理docs目录下的所有.md文件（默认行为，排除node_modules）

```bash
python process_blog_images.py
```

**注意**：如果不提供参数，脚本会默认处理 `docs` 目录下的所有 `.md` 文件，并自动排除 `node_modules` 目录。

## 使用示例

### 示例1：处理新写的文章

当你写完一篇新的博客文章后，运行：

```bash
python process_blog_images.py docs/blogs/我的新文章.md
```

### 示例2：批量处理所有博客文章

```bash
python process_blog_images.py docs/blogs
```

## 注意事项

1. 脚本会自动备份原文件内容（通过对比），只有内容发生变化时才会写入文件
2. 脚本会保留原有的图片样式（如 `zoom`），只添加圆角样式
3. 如果图片之间已经有文本内容，不会添加分割线，只有相邻的图片（中间只有空白行）才会添加分割线
4. 建议在处理前先提交代码到Git，以便可以回滚

## 处理效果

**处理前：**
```markdown
<img src="image1.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="image2.png" alt="img" style="zoom: 50%; border-radius: 8px;" />
```

**处理后：**
```markdown
<img src="image1.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="image2.png" alt="img" style="zoom: 50%; border-radius: 8px;" />
```

## 常见问题

**Q: 脚本会修改哪些文件？**  
A: 只修改Markdown文件（.md），其他文件不受影响。

**Q: 如果处理出错怎么办？**  
A: 脚本会显示错误信息，不会修改文件。建议使用Git版本控制，可以随时回滚。

**Q: 可以处理多个文件吗？**  
A: 可以，使用目录路径即可批量处理该目录下的所有.md文件。

