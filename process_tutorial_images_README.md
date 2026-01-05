# 教程中心图片处理脚本使用说明

## 功能说明

`process_tutorial_images.py` 是一个用于处理教程中心Markdown文件中图片的脚本，主要功能包括：

1. **添加圆角样式**：给所有图片添加 `border-radius: 8px;` 样式
2. **添加分割线**：在相邻图片之间（中间只有空白行）添加 `---` 分割线
3. **格式转换**：将Markdown格式的图片（`![alt](url)`）转换为HTML格式，以便添加样式

## 使用方法

### 1. 处理单个文件

```bash
python process_tutorial_images.py docs/tutorials/java-backend/spring/README.md
```

### 2. 处理整个目录

```bash
python process_tutorial_images.py docs/tutorials/java-backend
```

### 3. 处理tutorials目录下的所有.md文件（默认）

```bash
python process_tutorial_images.py
```

**注意**：如果不提供参数，脚本会默认处理 `docs/tutorials` 目录下的所有 `.md` 文件，并自动排除 `node_modules` 目录。

## 使用示例

### 示例1：处理新写的教程文章

当你写完一篇新的教程文章后，运行：

```bash
python process_tutorial_images.py docs/tutorials/java-backend/spring/新教程.md
```

### 示例2：批量处理某个分类下的所有教程

```bash
python process_tutorial_images.py docs/tutorials/java-backend
```

### 示例3：处理整个教程中心

```bash
python process_tutorial_images.py
```

## 注意事项

1. 脚本会自动备份原文件内容（通过对比），只有内容发生变化时才会写入文件
2. 脚本会保留原有的图片样式（如 `zoom`），只添加圆角样式
3. 如果图片之间已经有文本内容，不会添加分割线，只有相邻的图片（中间只有空白行）才会添加分割线
4. 建议在处理前先提交代码到Git，以便可以回滚
5. 教程目录结构复杂，包含大量子目录，批量处理可能需要一些时间

## 处理效果

**处理前：**
```markdown
<img src="image1.png" alt="img" style="zoom: 50%;" />

<img src="image2.png" alt="img" style="zoom: 50%;" />
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

**Q: 可以处理整个教程中心吗？**  
A: 可以，直接运行 `python process_tutorial_images.py` 即可处理整个教程中心的所有文件。

**Q: 处理大量文件需要多长时间？**  
A: 取决于文件数量和大小，通常每个文件处理时间在几毫秒到几十毫秒之间。处理整个教程中心可能需要几分钟时间。

**Q: 和博客脚本有什么区别？**  
A: 功能完全相同，只是默认处理的目录不同。博客脚本默认处理 `docs/blogs`，教程脚本默认处理 `docs/tutorials`。

















