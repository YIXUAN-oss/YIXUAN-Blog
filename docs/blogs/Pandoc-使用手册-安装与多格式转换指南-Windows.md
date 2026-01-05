---
title: Pandoc 使用手册 安装与多格式转换指南（Windows）
date: 2025-12-29
categories:
  - 工具教程
  - 文档转换
  - Windows
tags:
  - Pandoc
  - Windows
  - 文档转换
  - Markdown
  - 安装教程
  - 格式转换
author: 懿轩
---

## 一、什么是 Pandoc？

Pandoc 是一个“万能文档转换器”，支持在 **Markdown、Word (.docx)、PDF、LaTeX、HTML、EPUB 等数十种格式之间互相转换**。  例如：  

```bash
pandoc report.docx -o report.md      # Word 转 Markdown
pandoc notes.md -o notes.pdf         # Markdown 转 PDF
```

---

## 二、安装方法 - 🪟 Windows

#### 方法 1：使用官方安装包

官方网站：[Pandoc - 安装 pandoc](https://pandoc.org/installing.html)

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229172705566.png" alt="image-20251229172705566" style="width: 50%;" />

官方下载页：[https://github.com/jgm/pandoc/releases](https://github.com/jgm/pandoc/releases)

最新 3.8.3 版本下载地址：[Release pandoc 3.8.3 · jgm/pandoc](https://github.com/jgm/pandoc/releases/tag/3.8.3)

按照自己电脑系统不同，选择合适的版本，我这里为Windows版本，选择下述进行下载

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229173146288.png" alt="image-20251229173146288" style="width: 50%;" />

下载文件：`pandoc-<版本号>-windows-x86_64.zip`

解压当前文件夹：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229173833239.png" alt="image-20251229173833239" style="width: 50%;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229174058736.png" alt="image-20251229174058736" style="width: 50%;" />

接着win + R 输入 cmd 打开终端

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229174137427.png" alt="image-20251229174137427" style="width: 30%;" />

输入：

```bash
pandoc --version
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229174030429.png" alt="image-20251229174030429" style="width: 50%;" />

---

若显示版本号，说明安装成功！

#### 方法 2：使用包管理器（适合开发者）

- **Chocolatey**（需先安装 Chocolatey）：

  ```powershell
  choco install pandoc
  ```

- **winget**（Windows 10/11 自带）：

  ```powershell
  winget install --id=JohnMacFarlane.Pandoc
  ```

> ⚠️ 注意：不要混用多种安装方式（如同时用 MSI 和 Conda），可能导致冲突。

---

## 三、将 .docx文档 转换为 .md文档

这里推荐：**使用 `.docx` 格式**

Pandoc 对 `.docx`（Word 2007 及以后格式）支持最好，**不直接支持旧版 `.doc`**。

🔁 如果你只有 `.doc` 文件，请先在 Word 中另存为 `.docx`。

### 3.1 实际操作示例

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229174538721.png" alt="image-20251229174538721" style="width: 50%;" />

里面需要有相关内容！例如：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251230095314354.png" alt="image-20251230095314354" style="width: 50%;" />

进入你的文档所在目录，上方输入 cmd 后点击 Enter：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251229174703827.png" alt="image-20251229174703827" style="width: 50%;" />

**示例 1：转换当前目录的中文文件**

```bash
pandoc "测试文档.docx" -o 测试文档.md
```

**示例 2：转换当前目录的英文文件**

```bash
pandoc report.docx -o report.md
```

**示例 3：使用绝对路径转换**

```bash
# Windows
pandoc "D:\ComputerNote\技术分享\测试文档.docx" -o "D:\ComputerNote\技术分享\测试文档.md"
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251230095438089.png" alt="image-20251230095438089" style="width: 50%;" />

生成成功：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251230095459119.png" alt="image-20251230095459119" style="width: 50%;" />

### 3.2 不同文件命名和路径的转换方式

#### 非中文命名文件（英文文件名）

对于英文文件名，通常不需要引号，但建议使用引号以避免特殊字符问题：

```bash
# 英文文件名（无空格）- 可以不加引号
pandoc report.docx -o report.md

# 英文文件名（有空格）- 必须加引号
pandoc "my report.docx" -o "my report.md"

# 推荐：即使无空格也加引号，更安全
pandoc "report.docx" -o "report.md"
```

#### 中文命名文件

中文文件名必须使用引号包裹：

```bash
# 中文文件名 - 必须加引号
pandoc "测试文档.docx" -o "测试文档.md"

# 中英文混合文件名
pandoc "报告report.docx" -o "报告report.md"
```

#### 使用绝对路径转换

当文件不在当前目录时，可以使用绝对路径：

**Windows 系统：**

```bash
# 使用绝对路径（推荐使用引号）
pandoc "C:\Users\Username\Documents\report.docx" -o "C:\Users\Username\Documents\report.md"

# 或者只指定输入文件的绝对路径，输出到当前目录
pandoc "C:\Users\Username\Documents\report.docx" -o report.md

# 或者输入在当前目录，输出到指定绝对路径
pandoc report.docx -o "C:\Users\Username\Documents\report.md"
```

**macOS / Linux 系统：**

```bash
# 使用绝对路径
pandoc "/home/username/Documents/report.docx" -o "/home/username/Documents/report.md"

# 使用波浪号表示用户目录
pandoc ~/Documents/report.docx -o ~/Documents/report.md
```

#### 使用相对路径转换

```bash
# 当前目录下的文件
pandoc report.docx -o report.md

# 上级目录的文件
pandoc "../report.docx" -o "../report.md"

# 子目录中的文件
pandoc "documents/report.docx" -o "documents/report.md"

# 跨目录转换
pandoc "input/report.docx" -o "output/report.md"
```

#### 路径转换示例总结

```bash
# 示例 1：当前目录，英文文件名
pandoc report.docx -o report.md

# 示例 2：当前目录，中文文件名
pandoc "测试文档.docx" -o "测试文档.md"

# 示例 3：绝对路径，Windows
pandoc "D:\Documents\报告.docx" -o "D:\Documents\报告.md"

# 示例 4：绝对路径，macOS/Linux
pandoc "/Users/username/Documents/报告.docx" -o "/Users/username/Documents/报告.md"

# 示例 5：相对路径，跨目录
pandoc "source/文档.docx" -o "output/文档.md"
```

> 💡 **重要提示**：
>
> - **中文文件名或路径**：必须使用引号包裹
> - **包含空格的文件名**：必须使用引号包裹
> - **绝对路径**：建议使用引号包裹，避免路径中的特殊字符导致错误
> - **Windows 路径**：使用反斜杠 `\` 或正斜杠 `/` 都可以，但建议使用反斜杠并加引号
> - **路径中包含空格**：必须使用引号，如 `"C:\My Documents\report.docx"`

### 3.3 其他常用命令

#### 提取并保存图片

如果 Word 文档中包含图片，可以使用以下命令将图片提取到指定文件夹：

```bash
# 提取图片到 images 文件夹
pandoc "测试文档.docx" -o 测试文档.md --extract-media=images

# 提取图片到当前目录的 media 文件夹
pandoc "测试文档.docx" -o 测试文档.md --extract-media=.
```

#### 指定 Markdown 风格

Pandoc 支持多种 Markdown 风格，可以根据需要选择：

```bash
# 使用 GitHub 风格的 Markdown（推荐）
pandoc "测试文档.docx" -o 测试文档.md -f docx -t gfm

# 使用标准 Markdown
pandoc "测试文档.docx" -o 测试文档.md -f docx -t markdown

# 使用 Markdown 严格模式
pandoc "测试文档.docx" -o 测试文档.md -f docx -t markdown_strict
```

#### 保留表格格式

确保表格在 Markdown 中正确显示：

```bash
# 使用管道表格格式（推荐，兼容性好）
pandoc "测试文档.docx" -o 测试文档.md --wrap=none

# 使用网格表格格式
pandoc "测试文档.docx" -o 测试文档.md -t markdown+grid_tables
```

#### 批量转换多个文件

在 PowerShell 中批量转换当前目录下的所有 `.docx` 文件：

```powershell
# PowerShell 批量转换
Get-ChildItem -Filter "*.docx" | ForEach-Object {
    pandoc $_.Name -o ($_.BaseName + ".md")
}
```

在 CMD 中使用批处理脚本：

```bash
# 创建批处理文件 convert.bat
for %%f in (*.docx) do (
    pandoc "%%f" -o "%%~nf.md"
)
```

#### 自定义输出选项

```bash
# 不自动换行，保持原始格式
pandoc "测试文档.docx" -o 测试文档.md --wrap=none

# 保留原始换行（硬换行）
pandoc "测试文档.docx" -o 测试文档.md --wrap=preserve

# 自动换行（默认，每行约 72 个字符）
pandoc "测试文档.docx" -o 测试文档.md --wrap=auto
```

#### 添加文档元数据

在转换时添加标题、作者等元数据：

```bash
# 添加标题和作者
pandoc "测试文档.docx" -o 测试文档.md --metadata title="我的文档" --metadata author="作者名"

# 从 YAML 文件读取元数据
pandoc "测试文档.docx" -o 测试文档.md --metadata-file=metadata.yaml
```

#### 转换时忽略某些元素

```bash
# 忽略图片
pandoc "测试文档.docx" -o 测试文档.md --strip-comments

# 只提取纯文本（去除所有格式）
pandoc "测试文档.docx" -o 测试文档.txt -t plain
```

#### 查看支持的格式

```bash
# 查看所有支持的输入格式
pandoc --list-input-formats

# 查看所有支持的输出格式
pandoc --list-output-formats

# 查看 Markdown 扩展选项
pandoc --list-extensions=markdown
```

#### 常用参数组合示例

```bash
# 完整示例：提取图片 + GitHub 风格 + 不换行
pandoc "测试文档.docx" -o 测试文档.md -t gfm --extract-media=images --wrap=none

# 带元数据的完整转换
pandoc "测试文档.docx" -o 测试文档.md -t gfm --extract-media=images --metadata title="文档标题" --wrap=none
```

> 💡 **提示**：
>
> - `-f` 或 `--from`：指定输入格式（可省略，Pandoc 会自动识别）
> - `-t` 或 `--to`：指定输出格式（可省略，根据输出文件扩展名自动识别）
> - `-o` 或 `--output`：指定输出文件
> - 使用 `pandoc --help` 可查看所有可用选项

---

## 四、Pandoc 支持的其他文件格式转换

Pandoc 支持多种文档格式之间的转换，以下是常用的转换场景和命令示例。

### 4.1 查看所有支持的格式

在开始转换前，可以先查看 Pandoc 支持的所有格式：

```bash
# 查看所有支持的输入格式
pandoc --list-input-formats

# 查看所有支持的输出格式
pandoc --list-output-formats
```

### 4.2 常用格式转换示例

#### HTML 转 Markdown

```bash
# HTML 转 Markdown
pandoc "网页.html" -o "网页.md" -t gfm

# 从网页 URL 转换（需要先下载）
pandoc "https://example.com/page.html" -o "page.md" -t gfm
```

#### Markdown 转 HTML

```bash
# Markdown 转 HTML
pandoc "文档.md" -o "文档.html"

# 生成独立的 HTML 文件（包含样式）
pandoc "文档.md" -o "文档.html" --standalone

# 使用自定义 CSS 样式
pandoc "文档.md" -o "文档.html" --css="style.css"
```

#### Markdown 转 PDF

```bash
# Markdown 转 PDF（需要安装 LaTeX）
pandoc "文档.md" -o "文档.pdf"

# 中文 PDF 支持（使用 XeLaTeX）
pandoc "文档.md" -o "文档.pdf" --pdf-engine=xelatex -V CJKmainfont="SimSun"

# 指定 PDF 引擎
pandoc "文档.md" -o "文档.pdf" --pdf-engine=pdflatex
```

#### Markdown 转 Word (.docx)

```bash
# Markdown 转 Word
pandoc "文档.md" -o "文档.docx"

# 使用参考文档的样式
pandoc "文档.md" -o "文档.docx" --reference-doc="模板.docx"
```

#### LaTeX 转 Markdown

```bash
# LaTeX 转 Markdown
pandoc "文档.tex" -o "文档.md" -t gfm

# LaTeX 转 HTML
pandoc "文档.tex" -o "文档.html"
```

#### EPUB 电子书转换

```bash
# Markdown 转 EPUB 电子书
pandoc "文档.md" -o "文档.epub" --epub-cover-image="封面.jpg"

# EPUB 转 Markdown
pandoc "电子书.epub" -o "电子书.md" -t gfm
```

#### RTF 格式转换

```bash
# RTF 转 Markdown
pandoc "文档.rtf" -o "文档.md" -t gfm

# Markdown 转 RTF
pandoc "文档.md" -o "文档.rtf"
```

#### MediaWiki 格式转换

```bash
# MediaWiki 转 Markdown
pandoc "wiki.txt" -f mediawiki -o "wiki.md" -t gfm

# Markdown 转 MediaWiki
pandoc "文档.md" -o "文档.txt" -t mediawiki
```

#### Org-mode 格式转换

```bash
# Org-mode 转 Markdown
pandoc "文档.org" -o "文档.md" -t gfm

# Markdown 转 Org-mode
pandoc "文档.md" -o "文档.org" -t org
```

#### AsciiDoc 格式转换

```bash
# AsciiDoc 转 Markdown
pandoc "文档.adoc" -o "文档.md" -t gfm

# Markdown 转 AsciiDoc
pandoc "文档.md" -o "文档.adoc" -t asciidoc
```

#### 纯文本格式转换

```bash
# 提取纯文本（去除所有格式）
pandoc "文档.docx" -o "文档.txt" -t plain

# Markdown 转纯文本
pandoc "文档.md" -o "文档.txt" -t plain
```

#### Jupyter Notebook 转换

```bash
# Jupyter Notebook 转 Markdown
pandoc "notebook.ipynb" -o "notebook.md" -t gfm

# Markdown 转 Jupyter Notebook
pandoc "文档.md" -o "文档.ipynb" -t ipynb
```

#### OpenDocument 格式转换

```bash
# ODT (OpenDocument Text) 转 Markdown
pandoc "文档.odt" -o "文档.md" -t gfm

# Markdown 转 ODT
pandoc "文档.md" -o "文档.odt"
```

#### 幻灯片格式转换

```bash
# Markdown 转 Beamer (LaTeX 幻灯片)
pandoc "幻灯片.md" -o "幻灯片.pdf" -t beamer --pdf-engine=xelatex

# Markdown 转 Reveal.js HTML 幻灯片
pandoc "幻灯片.md" -o "幻灯片.html" -t revealjs -s

# Markdown 转 PowerPoint (需要 pandoc-pptx)
pandoc "幻灯片.md" -o "幻灯片.pptx" -t pptx
```

### 4.3 格式转换速查表

| 输入格式 | 输出格式 | 命令示例                                              |
| -------- | -------- | ----------------------------------------------------- |
| `.docx`  | `.md`    | `pandoc "文档.docx" -o "文档.md"`                     |
| `.md`    | `.docx`  | `pandoc "文档.md" -o "文档.docx"`                     |
| `.md`    | `.html`  | `pandoc "文档.md" -o "文档.html"`                     |
| `.html`  | `.md`    | `pandoc "文档.html" -o "文档.md" -t gfm`              |
| `.md`    | `.pdf`   | `pandoc "文档.md" -o "文档.pdf" --pdf-engine=xelatex` |
| `.md`    | `.epub`  | `pandoc "文档.md" -o "文档.epub"`                     |
| `.epub`  | `.md`    | `pandoc "文档.epub" -o "文档.md" -t gfm`              |
| `.tex`   | `.md`    | `pandoc "文档.tex" -o "文档.md" -t gfm`               |
| `.rtf`   | `.md`    | `pandoc "文档.rtf" -o "文档.md" -t gfm`               |
| `.odt`   | `.md`    | `pandoc "文档.odt" -o "文档.md" -t gfm`               |
| `.ipynb` | `.md`    | `pandoc "notebook.ipynb" -o "notebook.md" -t gfm`     |

### 4.4 支持的完整格式列表

#### 输入格式（Input Formats）

Pandoc 支持以下输入格式：

- **Markdown 变体**：`markdown`, `gfm` (GitHub Flavored Markdown), `commonmark`, `markdown_strict`
- **HTML**：`html`, `html5`
- **LaTeX**：`latex`, `tex`
- **Microsoft Word**：`docx`, `doc` (需先转换为 docx)
- **OpenDocument**：`odt`, `ods`, `odp`
- **RTF**：`rtf`
- **EPUB**：`epub`, `epub2`, `epub3`
- **电子书**：`fb2`, `mobi`
- **文本格式**：`plain`, `textile`, `rst`, `mediawiki`, `twiki`, `tikiwiki`, `creole`, `jira`, `org`, `asciidoc`
- **数据格式**：`json`, `ipynb` (Jupyter Notebook), `csv` (表格)
- **其他**：`native`, `haddock`, `opml`, `vimwiki`

#### 输出格式（Output Formats）

Pandoc 支持以下输出格式：

- **Markdown 变体**：`markdown`, `gfm`, `commonmark`, `markdown_strict`, `markdown_phpextra`, `markdown_mmd`
- **HTML**：`html`, `html4`, `html5`
- **LaTeX**：`latex`, `beamer` (幻灯片)
- **PDF**：`pdf` (需要 LaTeX 引擎)
- **Microsoft Word**：`docx`
- **OpenDocument**：`odt`, `ods`, `odp`
- **RTF**：`rtf`
- **EPUB**：`epub`, `epub2`, `epub3`
- **电子书**：`fb2`
- **文本格式**：`plain`, `textile`, `rst`, `mediawiki`, `twiki`, `tikiwiki`, `creole`, `jira`, `org`, `asciidoc`
- **数据格式**：`json`, `ipynb`, `csv`
- **幻灯片**：`revealjs`, `s5`, `slideous`, `slidy`, `dzslides`, `pptx`
- **其他**：`native`, `haddock`, `opml`, `vimwiki`, `tei`, `icml`

### 4.5 高级转换技巧

#### 批量格式转换

```bash
# PowerShell：批量将 Markdown 转换为 HTML
Get-ChildItem -Filter "*.md" | ForEach-Object {
    pandoc $_.Name -o ($_.BaseName + ".html")
}

# PowerShell：批量将 HTML 转换为 Markdown
Get-ChildItem -Filter "*.html" | ForEach-Object {
    pandoc $_.Name -o ($_.BaseName + ".md") -t gfm
}
```

#### 使用模板转换

```bash
# 使用自定义 Word 模板
pandoc "文档.md" -o "文档.docx" --reference-doc="模板.docx"

# 使用自定义 HTML 模板
pandoc "文档.md" -o "文档.html" --template="custom.html"
```

#### 转换时添加目录

```bash
# PDF 添加目录
pandoc "文档.md" -o "文档.pdf" --toc --pdf-engine=xelatex

# HTML 添加目录
pandoc "文档.md" -o "文档.html" --toc --standalone
```

#### 转换时添加数学公式支持

```bash
# HTML 输出数学公式（使用 MathJax）
pandoc "文档.md" -o "文档.html" --mathjax

# PDF 输出数学公式（使用 LaTeX）
pandoc "文档.md" -o "文档.pdf" --pdf-engine=xelatex
```

### 4.6 注意事项

> 💡 **重要提示**：
>
> - **PDF 转换**：需要安装 LaTeX 引擎（如 MiKTeX、TeX Live）
> - **中文支持**：转换中文文档时，建议使用 `--pdf-engine=xelatex` 并指定中文字体
> - **格式兼容性**：某些复杂格式（如表格、图片位置）在转换时可能需要手动调整
> - **文件编码**：确保源文件使用 UTF-8 编码，避免中文乱码
> - **图片路径**：转换时注意图片路径，使用 `--extract-media` 提取图片
> - **样式保留**：某些格式（如 Word）的样式可能无法完全保留，建议使用参考文档

---

## 五、补充建议

- **需要生成 PDF？** 请额外安装 LaTeX 引擎：
  - Windows：安装 [MiKTeX](https://miktex.org/)
  - macOS：安装 [BasicTeX](https://www.tug.org/mactex/morepackages.html) 或 MacTeX
  - Linux：`sudo apt install texlive-full`（或精简版 `texlive-latex-extra`）

- **中文 PDF 支持？** 推荐使用 `--pdf-engine=xelatex` 并指定中文字体。

