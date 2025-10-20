---
title: Redis缓存数据库
---

# Redis 缓存数据库

> 高性能的内存数据库，提升系统性能的利器

## 📚 教程目录

### [01-Redis基础](01-Redis基础.md)
- Redis简介与安装
- Redis数据类型概述
- 基本命令
- Redis客户端使用

### [02-五大数据类型](02-五大数据类型.md)
- String（字符串）
- List（列表）
- Set（集合）
- Hash（哈希）
- Zset（有序集合）

### [03-持久化机制](03-持久化机制.md)
- RDB持久化
- AOF持久化
- 混合持久化
- 持久化策略选择

### [04-Spring Boot整合Redis](04-SpringBoot整合Redis.md)
- RedisTemplate使用
- 序列化配置
- 缓存注解
- 实战案例

### [05-缓存策略与实战](05-缓存策略与实战.md)
- 缓存穿透
- 缓存击穿
- 缓存雪崩
- 缓存更新策略

### [06-Redis集群与高可用](06-Redis集群与高可用.md)
- 主从复制
- 哨兵模式
- Redis Cluster
- 高可用方案

## 🎯 学习目标

- ✅ 掌握Redis五大数据类型
- ✅ 理解Redis持久化机制
- ✅ 掌握Spring Boot整合Redis
- ✅ 解决常见缓存问题
- ✅ 了解Redis集群部署

## 🚀 快速开始

### 安装Redis

**Windows:**
```bash
# 下载Redis for Windows
https://github.com/microsoftarchive/redis/releases

# 启动Redis服务
redis-server.exe redis.windows.conf

# 启动客户端
redis-cli.exe
```

**Linux:**
```bash
# 下载并安装
wget http://download.redis.io/releases/redis-6.2.6.tar.gz
tar xzf redis-6.2.6.tar.gz
cd redis-6.2.6
make

# 启动Redis
src/redis-server

# 客户端连接
src/redis-cli
```

### 基本操作

```bash
# 字符串操作
SET name "John"
GET name
INCR counter
EXPIRE name 60

# 列表操作
LPUSH list1 "item1"
RPUSH list1 "item2"
LRANGE list1 0 -1

# 哈希操作
HSET user:1 name "John"
HSET user:1 age 30
HGETALL user:1
```

## 💡 Spring Boot整合

### 依赖配置

```xml
<dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-data-redis</artifactId>
</dependency>
```

### 配置文件

```yaml
spring:
  redis:
    host: localhost
    port: 6379
    password: 
    database: 0
    lettuce:
      pool:
        max-active: 8
        max-idle: 8
        min-idle: 0
```

### 使用示例

```java
@Service
public class UserService {
    @Autowired
    private RedisTemplate<String, Object> redisTemplate;
    
    public void setUser(String key, User user) {
        redisTemplate.opsForValue().set(key, user, 60, TimeUnit.SECONDS);
    }
    
    public User getUser(String key) {
        return (User) redisTemplate.opsForValue().get(key);
    }
}
```

## 🔥 常见应用场景

1. **缓存** - 热点数据缓存
2. **Session共享** - 分布式Session
3. **分布式锁** - 保证原子性
4. **排行榜** - Zset实现
5. **消息队列** - List/Stream
6. **限流** - 令牌桶算法

## 📊 数据类型选择

| 场景 | 数据类型 | 说明 |
|------|----------|------|
| 缓存对象 | String | 序列化存储 |
| 购物车 | Hash | 商品ID为field |
| 消息队列 | List | LPUSH/RPOP |
| 点赞/关注 | Set | 去重 |
| 排行榜 | Zset | 自动排序 |

## 💡 最佳实践

1. **合理设置过期时间** - 避免内存溢出
2. **避免大key** - 拆分为多个小key
3. **使用Pipeline** - 批量操作减少网络开销
4. **选择合适的数据类型** - 提升性能
5. **监控Redis状态** - 及时发现问题

## 🔥 面试重点

1. Redis为什么这么快？
2. Redis的数据类型及应用场景
3. Redis持久化机制对比
4. 缓存穿透、击穿、雪崩的解决方案
5. Redis如何实现分布式锁？
6. Redis主从复制原理
7. Redis集群方案对比

## 📚 推荐资源

- 《Redis设计与实现》
- 《Redis实战》
- [Redis官方文档](https://redis.io/documentation)
- [Redis命令参考](http://redisdoc.com/)

---

**开始学习** → [01-Redis基础](01-Redis基础.md)
