---
title: 第十一部分：实战项目
---

# 第十一部分：实战项目

> 从初级到生产级的完整项目实战

## 📖 本部分概述

理论学习结束后，最重要的是通过实战项目巩固知识。本部分提供从简单到复杂的项目案例，每个项目都包含完整的代码实现、架构设计和部署方案。

**学习时长：** 8-12 周  
**难度：** ⭐⭐⭐⭐⭐  
**重要程度：** ⭐⭐⭐⭐⭐

---

## 🎯 项目分级

### 初级项目 (1-2周/项目)
**适合：** 刚完成 Spring AI 基础学习的开发者
- 单一功能
- 简单架构
- 基础 API 调用

### 中级项目 (2-4周/项目)
**适合：** 掌握 RAG 和 Function Calling 的开发者
- 多个功能模块
- 数据库集成
- 简单的业务逻辑

### 高级项目 (4-8周/项目)
**适合：** 有完整知识体系的开发者
- 复杂架构
- 多服务协作
- Agent 系统

### 生产级项目 (8-12周/项目)
**适合：** 准备上线的企业应用
- 微服务架构
- 完整的监控和运维
- 高可用和性能优化

---

## 🎓 初级项目

### 1. [智能聊天机器人](beginner/01-chatbot/)

**项目描述：**  
构建一个简单的 Web 聊天机器人，支持与 AI 进行对话。

**技术栈：**
- Spring Boot 3.x
- Spring AI
- OpenAI API
- Thymeleaf (前端)

**核心功能：**
- ✅ 基础对话功能
- ✅ 流式响应
- ✅ 对话历史记录
- ✅ 简单的 Web 界面

**学习重点：**
- ChatClient API 基础用法
- 流式响应处理
- 前后端交互

**代码示例：**
```java
@RestController
@RequestMapping("/api/chat")
public class ChatController {
    @Autowired
    private ChatClient chatClient;
    
    @PostMapping
    public String chat(@RequestBody ChatRequest request) {
        return chatClient.prompt()
            .user(request.getMessage())
            .call()
            .content();
    }
    
    @GetMapping(value = "/stream", produces = MediaType.TEXT_EVENT_STREAM_VALUE)
    public Flux<String> streamChat(@RequestParam String message) {
        return chatClient.prompt()
            .user(message)
            .stream()
            .content();
    }
}
```

---

### 2. [文本摘要工具](beginner/02-text-summarizer/)

**项目描述：**  
输入长文本，自动生成摘要。

**技术栈：**
- Spring Boot
- Spring AI
- 结构化输出

**核心功能：**
- ✅ 文本输入（文件上传/粘贴）
- ✅ 自动生成摘要
- ✅ 多种摘要风格（简洁/详细/要点）
- ✅ 摘要导出

**学习重点：**
- Prompt Engineering
- 结构化输出
- 文件处理

---

### 3. [智能翻译服务](beginner/03-translation-service/)

**项目描述：**  
多语言翻译工具，支持上下文翻译。

**技术栈：**
- Spring Boot
- Spring AI
- RESTful API

**核心功能：**
- ✅ 多语言互译
- ✅ 批量翻译
- ✅ 保持格式
- ✅ 术语记忆

**学习重点：**
- System Prompt 设计
- 批量处理
- API 设计

---

## 🚀 中级项目

### 1. [智能客服系统](intermediate/01-customer-service/)

**项目描述：**  
企业级客服机器人，支持多轮对话和常见问题解答。

**技术栈：**
- Spring Boot
- Spring AI
- PostgreSQL
- Redis (缓存)
- MessageChatMemoryAdvisor

**核心功能：**
- ✅ 多轮对话管理
- ✅ 意图识别
- ✅ 常见问题库
- ✅ 人工客服转接
- ✅ 对话历史查询

**架构设计：**
```
┌─────────────┐
│   Web UI    │
└──────┬──────┘
       │
┌──────▼──────┐
│  API Gateway│
└──────┬──────┘
       │
┌──────▼──────────┐
│  ChatService    │
│  - Memory       │
│  - Intent       │
└──────┬──────────┘
       │
┌──────▼──────┐    ┌──────────┐
│  Spring AI  ├────┤ OpenAI   │
└─────────────┘    └──────────┘
```

**学习重点：**
- 对话状态管理
- 意图识别
- 数据库设计
- 缓存策略

---

### 2. [企业知识库系统](intermediate/02-knowledge-base/)

**项目描述：**  
基于 RAG 的企业文档问答系统。

**技术栈：**
- Spring Boot
- Spring AI
- PGVector (向量数据库)
- MinIO (文档存储)
- QuestionAnswerAdvisor

**核心功能：**
- ✅ 文档上传与解析（PDF、Word、Markdown）
- ✅ 文档向量化存储
- ✅ 语义搜索
- ✅ 智能问答
- ✅ 来源溯源
- ✅ 权限控制

**技术亮点：**
```java
@Service
public class KnowledgeBaseService {
    
    @Transactional
    public void ingestDocument(MultipartFile file) {
        // 1. 文档解析
        PagePdfDocumentReader reader = new PagePdfDocumentReader(file);
        List<Document> documents = reader.get();
        
        // 2. 文本分块
        TextSplitter splitter = new TokenTextSplitter(500, 50);
        List<Document> chunks = splitter.split(documents);
        
        // 3. 向量化存储
        vectorStore.add(chunks);
    }
    
    public String query(String question) {
        return chatClient.prompt()
            .user(question)
            .advisors(new QuestionAnswerAdvisor(vectorStore))
            .call()
            .content();
    }
}
```

**学习重点：**
- RAG 完整流程
- 文档处理管道
- 向量数据库使用
- 检索策略优化

---

### 3. [代码审查助手](intermediate/03-code-reviewer/)

**项目描述：**  
自动化代码审查工具，分析代码质量并提供改进建议。

**技术栈：**
- Spring Boot
- Spring AI
- Git API
- Function Calling

**核心功能：**
- ✅ 代码质量检查
- ✅ 安全漏洞扫描
- ✅ 性能优化建议
- ✅ 自动生成注释
- ✅ 代码规范检查

**Function Calling 示例：**
```java
@Bean
@Description("分析 Java 代码")
public Function<CodeAnalysisRequest, CodeAnalysisResult> analyzeCode() {
    return request -> {
        String code = request.code();
        
        // 静态分析
        List<Issue> issues = staticAnalyzer.analyze(code);
        
        // 安全检查
        List<Vulnerability> vulns = securityChecker.scan(code);
        
        return new CodeAnalysisResult(issues, vulns);
    };
}
```

**学习重点：**
- Function Calling 实战
- Git 集成
- 代码分析工具集成

---

### 4. [智能 SQL 生成器](intermediate/04-sql-generator/)

**项目描述：**  
自然语言转 SQL，支持复杂查询。

**技术栈：**
- Spring Boot
- Spring AI
- JdbcTemplate
- Function Calling

**核心功能：**
- ✅ 自然语言 → SQL
- ✅ SQL 执行与结果展示
- ✅ 数据可视化
- ✅ 查询历史

**实现示例：**
```java
@Service
public class SqlGeneratorService {
    
    public QueryResult executeNaturalQuery(String naturalLanguage) {
        // 1. 生成 SQL
        String sql = chatClient.prompt()
            .system("你是数据库专家，将自然语言转为 SQL")
            .user(naturalLanguage)
            .call()
            .content();
        
        // 2. 执行 SQL
        List<Map<String, Object>> results = jdbcTemplate.queryForList(sql);
        
        // 3. 返回结果
        return new QueryResult(sql, results);
    }
}
```

**学习重点：**
- Prompt Engineering for SQL
- 数据库安全
- 结果格式化

---

## 🏆 高级项目

### 1. [多 Agent 协作系统](advanced/01-multi-agent-system/)

**项目描述：**  
多个 Agent 协同工作，完成复杂任务。

**技术栈：**
- Spring Boot
- Spring AI
- Redis (Agent 通信)
- LangChain4j (可选)

**Agent 角色：**
- **Planner Agent** - 任务规划
- **Researcher Agent** - 信息搜集
- **Coder Agent** - 代码生成
- **Reviewer Agent** - 质量审查
- **Coordinator Agent** - 协调管理

**架构设计：**
```
┌──────────────┐
│ Coordinator  │
└──────┬───────┘
       │
   ┌───▼───────────┐
   │               │
┌──▼──┐  ┌──▼──┐  ┌──▼──┐
│Plan │  │Res  │  │Code │
│ner  │  │earch│  │ r   │
└─────┘  └─────┘  └─────┘
```

**学习重点：**
- Agent 架构设计
- Agent 通信协议
- 任务分解与协调

---

### 2. [RAG 增强平台](advanced/02-rag-platform/)

**项目描述：**  
企业级 RAG 平台，支持多种文档类型和检索策略。

**技术栈：**
- Spring Cloud 微服务
- Spring AI
- Elasticsearch + PGVector
- MinIO
- Kafka (异步处理)

**核心模块：**
- 文档处理服务
- 向量化服务
- 检索服务
- 问答服务
- 管理后台

**高级特性：**
- ✅ 混合检索（向量 + 关键词）
- ✅ 重排序
- ✅ 查询重写
- ✅ 多路召回
- ✅ A/B 测试

**学习重点：**
- 微服务架构
- 高级 RAG 技术
- 性能优化
- 系统设计

---

### 3. [AI 开发助手](advanced/03-ai-assistant/)

**项目描述：**  
全栈 AI 开发助手，集成代码生成、文档编写、测试生成等功能。

**技术栈：**
- Spring Boot
- Spring AI
- WebSocket (实时通信)
- Git API
- Maven/Gradle API

**核心功能：**
- ✅ 代码自动生成
- ✅ 单元测试生成
- ✅ API 文档生成
- ✅ 代码重构建议
- ✅ Bug 诊断

**学习重点：**
- IDE 集成
- 实时通信
- 工具链集成

---

## 🌟 生产级项目

### 1. [企业级智能客服平台](production/01-enterprise-chatbot/)

**项目描述：**  
完整的企业级智能客服解决方案。

**技术栈：**
- Spring Cloud 微服务
- Spring AI
- Kubernetes
- PostgreSQL + Redis
- Kafka
- Prometheus + Grafana
- ELK Stack

**系统架构：**
```
┌─────────────┐
│  Web/Mobile │
└──────┬──────┘
       │
┌──────▼───────┐
│ API Gateway  │
│ (限流/认证)   │
└──────┬───────┘
       │
  ┌────▼────────────────┐
  │                     │
┌─▼──────┐    ┌────▼────┐
│Chat    │    │Knowledge│
│Service │    │Service  │
└────┬───┘    └────┬────┘
     │             │
┌────▼─────────────▼─┐
│   Spring AI         │
└──────┬──────────────┘
       │
┌──────▼──────┐
│Vector Store │
└─────────────┘
```

**核心模块：**
1. **对话管理服务**
   - 多轮对话
   - 意图识别
   - 情感分析

2. **知识库服务**
   - RAG 问答
   - 文档管理
   - 知识图谱

3. **工单服务**
   - 自动创建工单
   - 人工转接
   - 工单跟踪

4. **分析服务**
   - 对话质量分析
   - 用户行为分析
   - 系统性能监控

**技术亮点：**
- 微服务架构
- 高可用设计
- 水平扩展
- 完整的监控体系
- 成本优化策略

**学习重点：**
- 大规模系统设计
- 微服务治理
- 性能优化
- 运维监控
- 成本控制

---

### 2. [智能搜索引擎](production/02-intelligent-search/)

**项目描述：**  
基于 AI 的企业智能搜索平台。

**核心功能：**
- ✅ 语义搜索
- ✅ 多模态搜索（文本+图片）
- ✅ 个性化推荐
- ✅ 实时索引
- ✅ 搜索分析

---

### 3. [AI API 平台](production/03-ai-api-platform/)

**项目描述：**  
AI 能力开放平台，对外提供 API 服务。

**核心功能：**
- ✅ API 管理
- ✅ 流量控制
- ✅ 计费系统
- ✅ 开发者平台
- ✅ SLA 保障

---

## 📊 项目选择建议

### 根据学习阶段选择

| 学习阶段 | 推荐项目 | 预计时间 |
|---------|---------|---------|
| **刚完成基础学习** | 初级项目 1-2 个 | 2-4 周 |
| **掌握 RAG** | 中级项目 1-2 个 | 4-8 周 |
| **具备完整知识** | 高级项目 1 个 | 4-8 周 |
| **准备求职/创业** | 生产级项目 1 个 | 8-12 周 |

### 根据职业方向选择

| 职业方向 | 推荐项目组合 |
|---------|-------------|
| **AI 应用工程师** | 智能客服 + 知识库 + RAG平台 |
| **全栈开发** | 聊天机器人 + SQL生成器 + AI助手 |
| **架构师** | 多Agent系统 + 企业客服平台 |
| **创业** | AI API平台 + 智能搜索 |

---

## 💡 项目实施建议

### 开发流程

1. **需求分析** (1-2 天)
   - 明确功能需求
   - 设计系统架构
   - 技术选型

2. **原型开发** (3-5 天)
   - 核心功能实现
   - 快速验证想法

3. **功能开发** (1-3 周)
   - 完整功能实现
   - 单元测试

4. **优化部署** (1 周)
   - 性能优化
   - 部署上线
   - 文档编写

### 最佳实践

- ✅ **Git 版本控制** - 每天提交代码
- ✅ **代码审查** - 定期 Review
- ✅ **单元测试** - 测试覆盖率 > 70%
- ✅ **文档** - README、API 文档、架构图
- ✅ **部署** - Docker 容器化
- ✅ **监控** - 日志、指标、追踪

---

## 🎓 学习资源

### 代码仓库

- [Spring AI Examples](https://github.com/spring-projects/spring-ai-examples)
- [LangChain4j Examples](https://github.com/langchain4j/langchain4j-examples)

### 参考项目

- [ChatGPT Next Web](https://github.com/ChatGPTNextWeb/ChatGPT-Next-Web)
- [Dify](https://github.com/langgenius/dify)
- [Quivr](https://github.com/QuivrHQ/quivr)

---

## 🚀 开始你的项目

选择一个适合你当前水平的项目，开始实战吧！

**建议流程：**
1. 从初级项目开始热身
2. 选择 1-2 个中级项目深入实践
3. 挑战 1 个高级项目
4. 最后完成 1 个生产级项目作为毕业设计

---

**记住：** 最好的学习方式就是动手做项目。不要追求完美，先完成再优化。每个项目都是你的作品集，也是你求职/创业的敲门砖！💪

**开始第一个项目** → [智能聊天机器人](beginner/01-chatbot/)
