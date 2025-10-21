---
title: Matplotlib 数据可视化
---

# Matplotlib 数据可视化

> Matplotlib是Python最流行的绘图库，提供强大的数据可视化功能

## 📚 教程简介

Matplotlib 是 Python 中最基础、最强大的数据可视化库，提供了类似 MATLAB 的绘图接口。它可以生成高质量的图表，支持多种输出格式，是数据科学和科学计算的必备工具。

## 🎯 学习目标

- ✅ 掌握 Matplotlib 基本用法
- ✅ 学会绘制各种类型图表
- ✅ 掌握图表样式和美化
- ✅ 学会创建子图和复杂布局
- ✅ 掌握 3D 图表绘制
- ✅ 能够进行数据可视化分析

## 📖 教程目录

### 第一章：Matplotlib 基础

#### [1. Matplotlib 入门](01-Matplotlib入门.md)
- Matplotlib 简介与安装
- 第一个图表
- Figure 和 Axes
- 基本绘图流程
- 保存图表

#### [2. 基本图表](02-基本图表.md)
- 折线图（plot）
- 散点图（scatter）
- 柱状图（bar）
- 直方图（hist）
- 饼图（pie）

#### [3. 图表样式](03-图表样式.md)
- 线条样式
- 颜色设置
- 标记样式
- 图例设置
- 标题和标签

#### [4. 坐标轴设置](04-坐标轴设置.md)
- 坐标轴范围
- 刻度设置
- 网格线
- 坐标轴标签
- 多坐标轴

### 第二章：进阶图表

#### [5. 统计图表](05-统计图表.md)
- 箱线图（boxplot）
- 小提琴图（violinplot）
- 误差图（errorbar）
- 等高线图（contour）
- 热力图（heatmap）

#### [6. 子图布局](06-子图布局.md)
- subplot 子图
- subplots 多子图
- GridSpec 网格布局
- 嵌套子图
- 图表组合

#### [7. 高级样式](07-高级样式.md)
- 样式表（style）
- 颜色映射（colormap）
- 注释和箭头
- 文本和数学公式
- 自定义样式

#### [8. 3D 图表](08-3D图表.md)
- 3D 折线图
- 3D 散点图
- 3D 曲面图
- 3D 柱状图
- 视角调整

### 第三章：实战应用

#### [9. 时间序列可视化](09-时间序列可视化.md)
- 日期时间处理
- 时间序列图
- 趋势线
- 多序列对比
- 实战案例

#### [10. 数据分析可视化](10-数据分析可视化.md)
- 分布图
- 相关性图
- 分组可视化
- 统计图表
- 综合分析

#### [11. 交互式图表](11-交互式图表.md)
- 事件处理
- 动态更新
- 动画效果
- 交互式工具
- 实时数据

#### [12. 实战案例](12-实战案例.md)
- 销售数据分析
- 科学数据绘图
- 金融图表
- 地理数据可视化
- 综合项目

## 🚀 快速开始

### 安装 Matplotlib

```bash
# 使用 pip 安装
pip install matplotlib

# 使用 conda 安装
conda install matplotlib

# 验证安装
python -c "import matplotlib; print(matplotlib.__version__)"
```

### 第一个图表

```python
import matplotlib.pyplot as plt
import numpy as np

# 创建数据
x = np.linspace(0, 10, 100)
y = np.sin(x)

# 绘制图表
plt.figure(figsize=(10, 6))
plt.plot(x, y)
plt.title('Sine Wave')
plt.xlabel('X')
plt.ylabel('Y')
plt.grid(True)
plt.show()
```

## 💡 学习建议

1. **从简单开始** - 先掌握基本图表，再学习复杂布局
2. **多动手练习** - 每个图表类型都要自己绘制
3. **参考示例** - Matplotlib 官方示例库非常丰富
4. **注重美观** - 学习如何让图表更加美观专业
5. **结合实际** - 用真实数据练习可视化

## 🎯 Matplotlib 核心概念

### 1. 两种绘图接口

```python
# 1. pyplot 接口（状态机，类似MATLAB）
import matplotlib.pyplot as plt
plt.plot([1, 2, 3], [1, 4, 9])
plt.show()

# 2. 面向对象接口（推荐）
fig, ax = plt.subplots()
ax.plot([1, 2, 3], [1, 4, 9])
plt.show()
```

### 2. Figure 和 Axes

```python
# Figure - 画布
# Axes - 子图（绘图区域）

fig = plt.figure(figsize=(10, 6))
ax1 = fig.add_subplot(121)  # 1行2列第1个
ax2 = fig.add_subplot(122)  # 1行2列第2个

ax1.plot([1, 2, 3], [1, 4, 9])
ax2.plot([1, 2, 3], [9, 4, 1])
```

### 3. 常用图表类型

```python
# 折线图
plt.plot(x, y)

# 散点图
plt.scatter(x, y)

# 柱状图
plt.bar(x, y)

# 直方图
plt.hist(data, bins=20)

# 饼图
plt.pie(sizes, labels=labels)
```

### 4. 图表美化

```python
# 设置标题和标签
plt.title('Title')
plt.xlabel('X Label')
plt.ylabel('Y Label')

# 添加图例
plt.legend(['Line 1', 'Line 2'])

# 添加网格
plt.grid(True)

# 设置样式
plt.style.use('seaborn')
```

## 📊 Matplotlib vs Seaborn vs Plotly

| 特性 | Matplotlib | Seaborn | Plotly |
|------|-----------|---------|--------|
| 基础性 | 最基础 | 基于Matplotlib | 独立 |
| 易用性 | 较复杂 | 简单 | 简单 |
| 美观性 | 需要设置 | 默认美观 | 非常美观 |
| 交互性 | 有限 | 无 | 强大 |
| 应用场景 | 通用 | 统计图表 | Web展示 |

## 🔧 常用函数速查

### 基本绘图
- `plt.plot()` - 折线图
- `plt.scatter()` - 散点图
- `plt.bar()` - 柱状图
- `plt.hist()` - 直方图
- `plt.pie()` - 饼图
- `plt.boxplot()` - 箱线图

### 图表设置
- `plt.title()` - 标题
- `plt.xlabel()` / `plt.ylabel()` - 轴标签
- `plt.legend()` - 图例
- `plt.grid()` - 网格
- `plt.xlim()` / `plt.ylim()` - 坐标范围
- `plt.xticks()` / `plt.yticks()` - 刻度

### 子图操作
- `plt.subplot()` - 创建子图
- `plt.subplots()` - 创建多子图
- `fig.add_subplot()` - 添加子图

### 样式设置
- `plt.style.use()` - 使用样式
- `plt.rcParams` - 全局配置

### 保存图表
- `plt.savefig()` - 保存图表

## 📚 推荐资源

### 官方文档
- [Matplotlib 官方网站](https://matplotlib.org/)
- [Matplotlib 官方文档](https://matplotlib.org/stable/contents.html)
- [Matplotlib 示例库](https://matplotlib.org/stable/gallery/index.html)

### 推荐书籍
- 《Python数据可视化编程实战》
- 《Python数据科学手册》
- 《Matplotlib for Python Developers》

### 在线资源
- [Matplotlib 教程](https://matplotlib.org/stable/tutorials/index.html)
- [Python Graph Gallery](https://www.python-graph-gallery.com/)

## 🎓 应用领域

1. **科学研究** - 实验数据可视化
2. **数据分析** - 探索性数据分析
3. **机器学习** - 模型结果展示
4. **金融分析** - K线图、趋势图
5. **统计分析** - 统计图表
6. **报表生成** - 自动化报表

## ⚠️ 注意事项

1. **中文显示** - 需要设置中文字体
   ```python
   plt.rcParams['font.sans-serif'] = ['SimHei']
   plt.rcParams['axes.unicode_minus'] = False
   ```

2. **图表尺寸** - 根据需要设置合适的大小
   ```python
   plt.figure(figsize=(10, 6))
   ```

3. **内存管理** - 及时关闭图表
   ```python
   plt.close()
   ```

4. **输出格式** - 选择合适的保存格式
   ```python
   plt.savefig('plot.png', dpi=300, bbox_inches='tight')
   ```

## 🚦 学习路线

```
第 1-2 周：基础绘图
├─ 基本图表类型
├─ 样式设置
├─ 坐标轴设置
└─ 图例和标签

第 3-4 周：进阶技巧
├─ 子图布局
├─ 高级样式
├─ 3D 图表
└─ 统计图表

第 5-6 周：实战应用
├─ 时间序列
├─ 数据分析
├─ 交互式图表
└─ 综合项目
```

## 🎨 样式主题

Matplotlib 提供了多种预设样式：

```python
# 查看可用样式
print(plt.style.available)

# 使用样式
plt.style.use('seaborn')
plt.style.use('ggplot')
plt.style.use('fivethirtyeight')
plt.style.use('bmh')
```

## 💻 Jupyter Notebook 设置

```python
# 内联显示图表
%matplotlib inline

# 交互式显示
%matplotlib notebook

# 高分辨率显示
%config InlineBackend.figure_format = 'retina'
```

---

**准备好了吗？让我们开始 Matplotlib 学习之旅！🚀**

**建议从 [第1章：Matplotlib入门](01-Matplotlib入门.md) 开始学习**
