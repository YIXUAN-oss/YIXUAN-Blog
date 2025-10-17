---
title: Redis 实战应用指南
date: 2025-10-11
categories:
  - 数据库
tags:
  - Redis
  - 缓存
  - NoSQL
author: 懿轩
---

# Redis 实战应用指南

Redis 是一个高性能的内存数据存储系统。本文介绍 Redis 在实际项目中的常见应用场景。

## 🎯 Redis 简介

Redis 是一个开源的内存数据结构存储系统，可以用作：

- **数据库**
- **缓存**
- **消息队列**

## 📊 数据类型

### 字符串（String）

```bash
SET user:1:name "张三"
GET user:1:name
INCR counter
EXPIRE session:abc 3600
```

### 哈希（Hash）

```bash
HSET user:1 name "张三" age 25 email "zhang@example.com"
HGET user:1 name
HGETALL user:1
```

### 列表（List）

```bash
LPUSH queue:tasks task1 task2
RPOP queue:tasks
LRANGE queue:tasks 0 -1
```

### 集合（Set）

```bash
SADD tags:1 java spring redis
SMEMBERS tags:1
SISMEMBER tags:1 java
```

### 有序集合（Sorted Set）

```bash
ZADD leaderboard 100 "player1" 200 "player2"
ZRANGE leaderboard 0 -1 WITHSCORES
ZRANK leaderboard "player1"
```

## 🚀 实战场景

### 1. 缓存热点数据

```java
@Service
public class UserService {
    @Autowired
    private RedisTemplate<String, User> redisTemplate;
    
    public User getUser(Long id) {
        String key = "user:" + id;
        User user = redisTemplate.opsForValue().get(key);
        
        if (user == null) {
            user = userRepository.findById(id);
            redisTemplate.opsForValue().set(key, user, 1, TimeUnit.HOURS);
        }
        
        return user;
    }
}
```

### 2. 分布式锁

```java
public boolean tryLock(String lockKey, String requestId, long expireTime) {
    Boolean success = redisTemplate.opsForValue()
        .setIfAbsent(lockKey, requestId, expireTime, TimeUnit.SECONDS);
    return Boolean.TRUE.equals(success);
}

public void unlock(String lockKey, String requestId) {
    String script = "if redis.call('get', KEYS[1]) == ARGV[1] then " +
                   "return redis.call('del', KEYS[1]) else return 0 end";
    redisTemplate.execute(new DefaultRedisScript<>(script, Long.class),
                         Collections.singletonList(lockKey), requestId);
}
```

### 3. 限流器

```java
public boolean isAllowed(String key, int maxRequests, int seconds) {
    String currentTime = String.valueOf(System.currentTimeMillis());
    
    // 移除过期的请求
    redisTemplate.opsForZSet().removeRangeByScore(key, 
        0, System.currentTimeMillis() - seconds * 1000);
    
    // 获取当前请求数
    Long count = redisTemplate.opsForZSet().zCard(key);
    
    if (count < maxRequests) {
        redisTemplate.opsForZSet().add(key, currentTime, 
            Double.parseDouble(currentTime));
        redisTemplate.expire(key, seconds, TimeUnit.SECONDS);
        return true;
    }
    
    return false;
}
```

### 4. 排行榜

```java
public void updateScore(String leaderboard, String player, double score) {
    redisTemplate.opsForZSet().add(leaderboard, player, score);
}

public List<String> getTopPlayers(String leaderboard, int count) {
    Set<String> players = redisTemplate.opsForZSet()
        .reverseRange(leaderboard, 0, count - 1);
    return new ArrayList<>(players);
}
```

## 💡 最佳实践

### 键命名规范

```
user:{id}
session:{token}
cache:{type}:{id}
```

### 设置过期时间

```java
// 避免内存泄漏
redisTemplate.expire(key, 3600, TimeUnit.SECONDS);
```

### 使用连接池

```java
@Configuration
public class RedisConfig {
    @Bean
    public JedisPoolConfig jedisPoolConfig() {
        JedisPoolConfig config = new JedisPoolConfig();
        config.setMaxTotal(50);
        config.setMaxIdle(10);
        config.setMinIdle(5);
        return config;
    }
}
```

## 🎓 性能优化

- 使用管道（Pipeline）批量操作
- 避免大键值
- 合理设置过期时间
- 使用 Redis Cluster 分片

## 📋 监控指标

- 内存使用率
- 命中率
- 连接数
- 慢查询

## 💡 总结

Redis 是现代应用架构中不可或缺的组件：

- ✅ 高性能缓存
- ✅ 分布式锁
- ✅ 消息队列
- ✅ 实时排行榜

合理使用 Redis 可以大幅提升应用性能！

## 📚 参考资源

- [Redis 官方文档](https://redis.io/documentation)
- [Redis 设计与实现](http://redisbook.com/)

---

**标签**: #Redis #缓存 #NoSQL #数据库
