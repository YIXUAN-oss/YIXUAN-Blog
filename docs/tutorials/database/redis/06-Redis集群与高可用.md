---
title: Redis集群与高可用
---

# 06 - Redis集群与高可用

## 🎯 学习目标

- 理解Redis主从复制原理
- 掌握Redis哨兵模式
- 了解Redis Cluster集群
- 学会高可用方案选择

## 1️⃣ 主从复制

### 什么是主从复制？

一个Master节点，多个Slave节点，数据从Master复制到Slave。

```
Master (写)
  ↓
  ├─ Slave1 (读)
  ├─ Slave2 (读)
  └─ Slave3 (读)
```

### 作用

- 📖 **读写分离** - Master写，Slave读
- 💾 **数据备份** - 数据冗余
- 🚀 **高可用** - Master故障，Slave可升级

### 配置主从复制

**Master配置（无需修改）：**
```conf
# redis.conf
bind 0.0.0.0
port 6379
```

**Slave配置：**
```conf
# redis.conf
port 6380
replicaof 127.0.0.1 6379
masterauth password  # 如果Master有密码
```

**运行时配置：**
```bash
# 连接到Slave
redis-cli -p 6380

# 设置为从节点
SLAVEOF 127.0.0.1 6379

# 取消从节点
SLAVEOF NO ONE
```

### 复制原理

**全量同步：**
```
1. Slave发送PSYNC命令
2. Master执行BGSAVE生成RDB
3. Master发送RDB文件给Slave
4. Slave加载RDB文件
5. Master发送缓冲区命令给Slave
```

**增量同步：**
```
Master写命令 → 复制到Slave
```

### 查看复制状态

```bash
# 在Master上查看
INFO replication

# 输出：
# role:master
# connected_slaves:2
# slave0:ip=127.0.0.1,port=6380,state=online
```

## 2️⃣ 哨兵模式

### 什么是哨兵？

Sentinel（哨兵）是Redis的高可用解决方案，监控主从节点，自动故障转移。

```
Sentinel1 ──┐
Sentinel2 ──┼── 监控 → Master
Sentinel3 ──┘              ↓
                        Slave1, Slave2
```

### 作用

- 🔍 **监控** - 检查Master和Slave是否正常
- 📢 **通知** - 故障时通知管理员
- 🔄 **故障转移** - Master故障时，自动选举新Master
- 📡 **配置中心** - 客户端连接Sentinel获取Master地址

### 哨兵配置

**sentinel.conf：**
```conf
# 哨兵端口
port 26379

# 监控Master
# sentinel monitor <master-name> <ip> <port> <quorum>
sentinel monitor mymaster 127.0.0.1 6379 2

# Master密码
sentinel auth-pass mymaster yourpassword

# 主观下线时间（30秒）
sentinel down-after-milliseconds mymaster 30000

# 故障转移超时时间
sentinel failover-timeout mymaster 180000

# 同时进行复制的Slave数量
sentinel parallel-syncs mymaster 1
```

**启动哨兵：**
```bash
redis-sentinel sentinel.conf
```

### 故障转移流程

```
1. 主观下线：单个Sentinel认为Master下线
2. 客观下线：多个Sentinel（≥quorum）确认下线
3. 选举Leader：Sentinel选举出Leader
4. 故障转移：Leader执行转移
   - 选择一个Slave升级为Master
   - 其他Slave改为复制新Master
   - 通知客户端新Master地址
```

### Spring Boot整合

```yaml
spring:
  redis:
    sentinel:
      master: mymaster
      nodes:
        - 127.0.0.1:26379
        - 127.0.0.1:26380
        - 127.0.0.1:26381
    password: yourpassword
```

## 3️⃣ Redis Cluster

### 什么是Redis Cluster？

Redis官方的分布式解决方案，数据自动分片，支持高可用。

```
Node1 (0-5460)
Node2 (5461-10922)
Node3 (10923-16383)
```

### 特点

- 🔢 **数据分片** - 16384个哈希槽
- 🌐 **去中心化** - 无需代理，节点间通信
- 🔄 **高可用** - 主从复制，自动故障转移
- 🚀 **可扩展** - 动态添加/删除节点

### 集群搭建

**节点配置：**
```conf
# redis-6379.conf
port 6379
cluster-enabled yes
cluster-config-file nodes-6379.conf
cluster-node-timeout 15000
```

**创建集群：**
```bash
# 创建6节点集群（3主3从）
redis-cli --cluster create \
  127.0.0.1:6379 127.0.0.1:6380 127.0.0.1:6381 \
  127.0.0.1:6382 127.0.0.1:6383 127.0.0.1:6384 \
  --cluster-replicas 1
```

### 数据分片原理

**槽位计算：**
```
HASH_SLOT = CRC16(key) % 16384
```

**示例：**
```bash
# key "user:1001" 计算槽位
CRC16("user:1001") % 16384 = 5460

# 存储到负责5460槽位的节点
```

### 集群操作

```bash
# 查看集群信息
redis-cli --cluster check 127.0.0.1:6379

# 添加节点
redis-cli --cluster add-node 127.0.0.1:6385 127.0.0.1:6379

# 重新分片
redis-cli --cluster reshard 127.0.0.1:6379

# 删除节点
redis-cli --cluster del-node 127.0.0.1:6379 <node-id>
```

### Spring Boot整合

```yaml
spring:
  redis:
    cluster:
      nodes:
        - 127.0.0.1:6379
        - 127.0.0.1:6380
        - 127.0.0.1:6381
        - 127.0.0.1:6382
        - 127.0.0.1:6383
        - 127.0.0.1:6384
      max-redirects: 3
    password: yourpassword
```

## 📊 方案对比

| 特性 | 主从复制 | 哨兵模式 | Cluster |
|------|---------|---------|---------|
| 高可用 | ❌ | ✅ | ✅ |
| 自动故障转移 | ❌ | ✅ | ✅ |
| 数据分片 | ❌ | ❌ | ✅ |
| 横向扩展 | ❌ | ❌ | ✅ |
| 配置复杂度 | 低 | 中 | 高 |
| 适用场景 | 读多写少 | 高可用 | 大数据量 |

## 💡 最佳实践

1. **小规模** - 主从复制 + 哨兵
2. **大规模** - Redis Cluster
3. **定期备份** - RDB + AOF
4. **监控告警** - 实时监控集群状态
5. **合理分片** - 避免热点数据

---

**Redis教程完结！** 继续学习 → [MyBatis框架](../mybatis/)
