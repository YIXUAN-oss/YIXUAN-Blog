---
title: 计算机网络教程
autoGroup: false
autoSort: false
sidebarDepth: 0
---

# 计算机网络教程

> 系统掌握计算机网络原理，深入理解网络协议栈

## 📚 教程简介

本教程将带你系统学习计算机网络，从网络基础概念到各层协议详解，涵盖 OSI 模型、TCP/IP 协议栈、HTTP/HTTPS、DNS 等核心知识点。计算机网络是计算机专业的核心课程，也是互联网时代每个开发者必须掌握的基础知识，更是技术面试的重点考察内容。

## 🎯 学习目标

- ✅ 理解 OSI 七层模型和 TCP/IP 四层模型
- ✅ 掌握各层主要协议的工作原理
- ✅ 深入理解 TCP 三次握手和四次挥手
- ✅ 熟悉 HTTP/HTTPS 协议和常见应用
- ✅ 掌握 IP 地址、子网划分和路由原理
- ✅ 能够使用 Wireshark 进行网络分析
- ✅ 应对计算机网络高频面试题

## 📖 教程目录

### [第一章：计算机网络概述](计算机网络第1章（概述）.md)
- 计算机网络的定义和功能
- 网络的组成与分类
- OSI 七层模型详解
- TCP/IP 四层模型
- 网络性能指标（带宽、时延、吞吐量）
- 网络协议与标准化
- OSI 与 TCP/IP 模型对比

### [第二章：物理层](计算机网络第2章（物理层）.md)
- 物理层的基本概念
- 传输介质（双绞线、光纤、无线）
- 信道复用技术（频分、时分、波分）
- 数字信号的编码方式
- 物理层设备（集线器、中继器）

### [第三章：数据链路层](计算机网络第3章（数据链路层）.md)
- 数据链路层的功能
- 帧的封装与校验
- MAC 地址与 ARP 协议
- 以太网协议
- CSMA/CD 协议
- 交换机的工作原理
- VLAN 虚拟局域网

### [第四章：网络层](计算机网络第4章（网络层）.md)
- IP 协议详解
- IP 地址分类与子网划分
- 子网掩码计算
- 路由选择算法
- 路由协议（RIP、OSPF、BGP）
- NAT 网络地址转换
- ICMP 协议（ping、traceroute）
- IPv4 与 IPv6

### [第五章：传输层](计算机网络第5章（运输层）.md)
- 传输层的功能
- UDP 协议特点与应用
- TCP 协议详解
- TCP 三次握手过程
- TCP 四次挥手过程
- TCP 可靠传输机制
- 滑动窗口协议
- 流量控制
- 拥塞控制
- TCP 与 UDP 对比

### [第六章：应用层](计算机网络第6章（应用层）.md)
- 应用层协议概述
- HTTP 协议详解
- HTTPS 加密原理
- HTTP 请求方法与状态码
- HTTP/1.0、HTTP/1.1、HTTP/2.0 对比
- DNS 域名解析过程
- FTP 文件传输协议
- SMTP/POP3 邮件协议
- WebSocket 协议
- Cookie 与 Session

---

## 💡 学习建议

1. **自顶向下学习** - 从应用层开始，更容易理解实际应用
2. **理解协议原理** - 不要死记硬背，理解协议设计思想
3. **实践抓包分析** - 使用 Wireshark 观察真实网络数据包
4. **画图辅助理解** - 多画网络拓扑图和协议交互图
5. **结合实际应用** - 思考日常上网背后的网络原理

## 🎯 学习路线图

```
第 1 周：网络基础
├─ 计算机网络概述
├─ OSI 七层模型
├─ TCP/IP 四层模型
└─ 网络性能指标

第 2 周：链路层与网络层
├─ 数据链路层
├─ MAC 地址与 ARP
├─ IP 地址与子网划分
└─ 路由选择

第 3-4 周：传输层（重点）
├─ TCP 与 UDP 对比
├─ TCP 三次握手
├─ TCP 四次挥手
├─ 可靠传输机制
└─ 流量控制与拥塞控制

第 5 周：应用层（重点）
├─ HTTP/HTTPS 协议
├─ DNS 域名解析
├─ Cookie 与 Session
└─ 常见应用层协议
```

---

## 📝 面试高频考点汇总

### ⭐⭐⭐⭐⭐ 必考考点
1. **OSI七层模型和TCP/IP四层模型**
2. **TCP三次握手和四次挥手**
3. **TCP如何保证可靠传输**
4. **TCP和UDP的区别**
5. **HTTP和HTTPS的区别**
6. **HTTP状态码**
7. **IP地址分类和子网划分**
8. **ARP协议**
9. **DNS解析过程**
10. **Cookie和Session**

### ⭐⭐⭐⭐ 常考考点
1. **TCP的流量控制和拥塞控制**
2. **TIME_WAIT状态**
3. **NAT网络地址转换**
4. **路由选择算法**
5. **HTTP 1.0/1.1/2.0的区别**
6. **HTTPS的加密过程**
7. **WebSocket协议**
8. **滑动窗口协议**

### ⭐⭐⭐ 了解即可
1. **物理层的传输介质**
2. **CSMA/CD协议**
3. **路由协议（RIP/OSPF/BGP）**
4. **ICMP协议**
5. **邮件协议（SMTP/POP3/IMAP）**

---

## 🛠️ 实践工具与命令

### Wireshark 抓包分析
```bash
# 常用过滤器
tcp.port == 80              # 过滤 HTTP 流量
tcp.flags.syn == 1          # 过滤 TCP 握手包
http.request.method == "GET"    # 过滤 HTTP GET 请求
ip.addr == 192.168.1.1     # 过滤特定 IP
dns                         # 过滤 DNS 流量
```

### 常用网络命令
```bash
# ping - 测试网络连通性
ping www.baidu.com
ping -c 4 192.168.1.1       # 发送 4 个数据包

# traceroute - 路由追踪
traceroute www.google.com   # Linux/macOS
tracert www.google.com      # Windows

# nslookup - DNS 查询
nslookup www.baidu.com

# netstat - 网络连接状态
netstat -an                 # 显示所有连接
netstat -tulnp              # 显示监听端口

# ifconfig/ipconfig - 查看网络配置
ifconfig                    # Linux/macOS
ipconfig                    # Windows
```

## 📚 推荐资源

### 官方文档
- [RFC 文档](https://www.rfc-editor.org/) - 协议标准文档
- [IETF 官网](https://www.ietf.org/) - 互联网工程任务组

### 推荐书籍
- 《计算机网络》（第 7/8 版）- 谢希仁 - 经典教材
- 《TCP/IP 详解 卷1：协议》- W. Richard Stevens - 深入理解
- 《图解 HTTP》- 上野宣 - 轻松入门
- 《图解 TCP/IP》- 竹下隆史 - 图解系列
- 《计算机网络：自顶向下方法》- James F. Kurose - 另一经典

### 在线资源
- [Wireshark 官网](https://www.wireshark.org/) - 网络抓包分析
- [菜鸟教程 - 计算机网络](https://www.runoob.com/w3cnote_genre/network)
- [网络工程师教程](https://www.h3c.com/) - H3C 官方教程

### 视频课程
- 哈尔滨工业大学 - 计算机网络
- 中国大学 MOOC - 计算机网络
- Coursera - Computer Networking

### 实践平台
- **Packet Tracer** - Cisco 网络模拟器
- **GNS3** - 网络设备模拟器
- **Wireshark** - 网络协议分析工具

## ⚠️ 注意事项

1. **理解而非记忆** - 重在理解协议原理，而非死记硬背
2. **分层思想** - 理解每层的职责和交互方式
3. **实践验证** - 使用 Wireshark 验证理论知识
4. **面试重点** - TCP、HTTP 是面试必考内容
5. **版本差异** - 注意 HTTP/1.1、HTTP/2、IPv4/IPv6 的区别

## 📄 版权说明

本教程仅供学习使用，欢迎分享传播。

---

**准备好了吗？让我们开始计算机网络学习之旅！🚀**

**建议从 [第一章：计算机网络概述](计算机网络第1章（概述）.md) 开始学习**
