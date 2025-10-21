---
title: NLP 入门
---

# NLP 入门

> 了解自然语言处理，开启NLP学习之旅

## 📚 学习目标

- 理解什么是NLP
- 了解NLP的应用场景
- 掌握NLP主要任务
- 学会环境搭建
- 运行第一个NLP程序

## 1. 什么是NLP

### 1.1 定义

**自然语言处理（Natural Language Processing，NLP）** 是计算机科学、人工智能和语言学的交叉领域，致力于让计算机理解、处理和生成人类语言。

### 1.2 为什么需要NLP

- 人类语言是最自然的交互方式
- 海量文本数据需要自动处理
- 跨语言交流需求
- 智能化服务需求

### 1.3 NLP的挑战

- **歧义性** - 一词多义、句法歧义
- **上下文依赖** - 理解需要上下文
- **语言多样性** - 不同语言差异大
- **隐含信息** - 讽刺、比喻等
- **长距离依赖** - 远距离词汇关联

## 2. NLP 应用场景

### 2.1 日常应用

```python
# 搜索引擎
query = "北京天气"
# -> 理解用户意图，返回相关结果

# 语音助手
command = "明天提醒我开会"
# -> 语音识别 + 意图理解 + 任务执行

# 机器翻译
text = "Hello World"
# -> 翻译为 "你好世界"

# 智能客服
question = "怎么退货？"
# -> 意图识别 + 知识检索 + 回复生成
```

### 2.2 商业应用

- **电商** - 商品搜索、评论分析、推荐系统
- **金融** - 舆情监控、风险预警、智能投顾
- **医疗** - 病历分析、文献检索、辅助诊断
- **法律** - 合同审查、案例检索、法律咨询
- **教育** - 自动批改、智能问答、个性化学习

## 3. NLP 主要任务

### 3.1 文本理解

```python
# 1. 分词
text = "我爱自然语言处理"
tokens = ["我", "爱", "自然语言处理"]

# 2. 词性标注
# 我/代词 爱/动词 自然语言处理/名词

# 3. 命名实体识别
text = "苹果公司CEO库克访问中国"
entities = {
    "苹果公司": "组织",
    "库克": "人名",
    "中国": "地名"
}

# 4. 情感分析
text = "这部电影太好看了！"
sentiment = "positive"  # 正面

# 5. 文本分类
text = "科技巨头发布新产品"
category = "科技"
```

### 3.2 文本生成

```python
# 1. 机器翻译
source = "I love programming"
target = "我爱编程"

# 2. 文本摘要
article = "长篇文章内容..."
summary = "简短摘要"

# 3. 对话生成
user = "你好"
bot = "你好！有什么可以帮您的？"

# 4. 文本续写
prompt = "从前有座山，"
completion = "山上有座庙"
```

## 4. 环境搭建

### 4.1 安装Python库

```bash
# 基础科学计算
pip install numpy pandas matplotlib

# 中文NLP
pip install jieba          # 中文分词
pip install pkuseg         # 北大分词
pip install snownlp        # 中文情感分析

# 英文NLP
pip install nltk           # 经典NLP库
pip install spacy          # 工业级NLP

# 词向量
pip install gensim         # Word2Vec等

# 深度学习
pip install torch          # PyTorch
pip install transformers   # Hugging Face模型

# 其他工具
pip install scikit-learn   # 机器学习
pip install wordcloud      # 词云
```

### 4.2 下载语料和模型

```python
# NLTK 数据
import nltk
nltk.download('punkt')
nltk.download('stopwords')

# spaCy 模型
# python -m spacy download zh_core_web_sm  # 中文
# python -m spacy download en_core_web_sm  # 英文
```

## 5. 第一个NLP程序

### 5.1 中文分词

```python
import jieba

# 精确模式
text = "我来到北京清华大学"
seg_list = jieba.cut(text, cut_all=False)
print("精确模式:", "/ ".join(seg_list))
# 输出: 我/ 来到/ 北京/ 清华大学

# 全模式
seg_list = jieba.cut(text, cut_all=True)
print("全模式:", "/ ".join(seg_list))
# 输出: 我/ 来到/ 北京/ 清华/ 清华大学/ 华大/ 大学

# 搜索引擎模式
seg_list = jieba.cut_for_search(text)
print("搜索引擎模式:", "/ ".join(seg_list))
```

### 5.2 词性标注

```python
import jieba.posseg as pseg

text = "我爱自然语言处理"
words = pseg.cut(text)

for word, flag in words:
    print(f"{word}\t{flag}")

# 输出:
# 我      r (代词)
# 爱      v (动词)
# 自然语言处理  l (习用语)
```

### 5.3 关键词提取

```python
import jieba.analyse

text = """
自然语言处理是计算机科学领域与人工智能领域中的一个重要方向。
它研究能实现人与计算机之间用自然语言进行有效通信的各种理论和方法。
"""

# TF-IDF
keywords = jieba.analyse.extract_tags(text, topK=5)
print("关键词:", keywords)

# TextRank
keywords = jieba.analyse.textrank(text, topK=5)
print("关键词:", keywords)
```

### 5.4 情感分析

```python
from snownlp import SnowNLP

text = "这个电影真的太好看了，强烈推荐！"
s = SnowNLP(text)

print(f"情感得分: {s.sentiments}")  # 0-1之间，越接近1越积极
# 输出: 情感得分: 0.97

if s.sentiments > 0.6:
    print("正面评价")
elif s.sentiments < 0.4:
    print("负面评价")
else:
    print("中性评价")
```

## 6. 英文NLP示例

### 6.1 使用NLTK

```python
import nltk
from nltk.tokenize import word_tokenize
from nltk.corpus import stopwords

text = "Natural Language Processing is awesome!"

# 分词
tokens = word_tokenize(text)
print("Tokens:", tokens)

# 去除停用词
stop_words = set(stopwords.words('english'))
filtered = [w for w in tokens if w.lower() not in stop_words]
print("Filtered:", filtered)
```

### 6.2 使用spaCy

```python
import spacy

# 加载模型
nlp = spacy.load("en_core_web_sm")

text = "Apple is looking at buying U.K. startup for $1 billion"
doc = nlp(text)

# 命名实体识别
for ent in doc.ents:
    print(f"{ent.text}\t{ent.label_}")

# 输出:
# Apple           ORG (组织)
# U.K.            GPE (地理政治实体)
# $1 billion      MONEY (金额)
```

## 7. NLP 技术栈

### 7.1 技术层次

```
应用层
├─ 搜索引擎
├─ 智能客服
├─ 机器翻译
└─ 内容推荐

算法层
├─ 深度学习 (Transformer, BERT, GPT)
├─ 机器学习 (SVM, 朴素贝叶斯)
└─ 规则方法

特征层
├─ 词向量 (Word2Vec, GloVe)
├─ TF-IDF
└─ 词袋模型

基础层
├─ 分词
├─ 词性标注
└─ 命名实体识别
```

### 7.2 发展历程

- **1950s** - 机器翻译起步
- **1980s** - 统计方法兴起
- **2000s** - 机器学习应用
- **2013** - Word2Vec 词向量
- **2017** - Transformer 架构
- **2018** - BERT 预训练模型
- **2020** - GPT-3 大模型
- **2022** - ChatGPT 对话模型

## 8. 常见问题

### Q1: 中文和英文NLP有什么区别？

**中文特点:**
- 没有空格分隔，需要分词
- 字、词、短语概念
- 语序相对灵活

**英文特点:**
- 自然空格分隔
- 形态变化丰富
- 语序相对固定

### Q2: 如何选择中文分词工具？

- **jieba** - 最流行，简单易用
- **pkuseg** - 准确率高，速度较慢
- **thulac** - 清华开发，效果好
- **HanLP** - 功能全面

### Q3: 需要GPU吗？

- **传统方法** - 不需要（分词、TF-IDF等）
- **深度学习** - 建议使用（BERT、GPT等）

## 9. 练习题

1. 使用jieba对一段中文进行分词
2. 提取文本的关键词（前5个）
3. 分析一段评论的情感倾向
4. 使用NLTK处理英文文本

## 10. 学习资源

### 在线教程
- [NLTK Book](https://www.nltk.org/book/)
- [spaCy Course](https://course.spacy.io/)

### 中文资源
- jieba GitHub文档
- 哈工大LTP
- 北大NLP实验室

## 💡 重点总结

1. **NLP** 让计算机理解和处理人类语言
2. **应用广泛** - 搜索、翻译、客服、推荐等
3. **主要任务** - 分词、分类、NER、生成等
4. **工具库** - jieba、NLTK、spaCy、transformers
5. **发展趋势** - 预训练模型、大语言模型

---

**下一节：** [文本预处理](02-文本预处理.md)
