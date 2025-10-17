---
title: Java 多线程
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - 多线程
  - 并发
---

# Java 多线程

多线程是 Java 的重要特性，可以提高程序的执行效率。本节介绍线程的创建、同步和常用并发工具。

## 什么是多线程？

- **进程**：操作系统分配资源的基本单位
- **线程**：程序执行的最小单位，一个进程可包含多个线程

## 创建线程

### 方法1：继承 Thread 类

```java
class MyThread extends Thread {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
            try {
                Thread.sleep(1000);  // 休眠1秒
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
    }
}

public class ThreadDemo {
    public static void main(String[] args) {
        MyThread t1 = new MyThread();
        MyThread t2 = new MyThread();
        
        t1.start();  // 启动线程
        t2.start();
    }
}
```

### 方法2：实现 Runnable 接口（推荐）

```java
class MyRunnable implements Runnable {
    @Override
    public void run() {
        for (int i = 0; i < 5; i++) {
            System.out.println(Thread.currentThread().getName() + ": " + i);
        }
    }
}

public class RunnableDemo {
    public static void main(String[] args) {
        Thread t1 = new Thread(new MyRunnable());
        Thread t2 = new Thread(new MyRunnable());
        
        t1.start();
        t2.start();
    }
}
```

### 方法3：Lambda 表达式（Java 8+）

```java
public class LambdaThreadDemo {
    public static void main(String[] args) {
        // Lambda 表达式创建线程
        Thread t = new Thread(() -> {
            for (int i = 0; i < 5; i++) {
                System.out.println("线程: " + i);
            }
        });
        t.start();
    }
}
```

## 线程的生命周期

```
新建(New) → 就绪(Runnable) → 运行(Running) → 阻塞(Blocked) → 死亡(Dead)
```

## 线程常用方法

```java
Thread t = new Thread(() -> {
    // 线程任务
});

t.setName("MyThread");        // 设置线程名
String name = t.getName();    // 获取线程名
t.setPriority(Thread.MAX_PRIORITY);  // 设置优先级
t.start();                    // 启动线程
t.join();                     // 等待线程结束
t.interrupt();                // 中断线程
boolean alive = t.isAlive();  // 是否存活

// 静态方法
Thread.sleep(1000);           // 休眠（毫秒）
Thread current = Thread.currentThread();  // 当前线程
Thread.yield();               // 让出CPU
```

## 线程同步

多个线程访问共享资源时，需要进行同步控制。

### 问题示例：线程不安全

```java
class Counter {
    private int count = 0;
    
    public void increment() {
        count++;  // 非原子操作
    }
    
    public int getCount() {
        return count;
    }
}

public class UnsafeDemo {
    public static void main(String[] args) throws InterruptedException {
        Counter counter = new Counter();
        
        // 创建1000个线程，每个增加1000次
        Thread[] threads = new Thread[1000];
        for (int i = 0; i < threads.length; i++) {
            threads[i] = new Thread(() -> {
                for (int j = 0; j < 1000; j++) {
                    counter.increment();
                }
            });
            threads[i].start();
        }
        
        // 等待所有线程结束
        for (Thread t : threads) {
            t.join();
        }
        
        System.out.println("Count: " + counter.getCount());
        // 期望：1000000，实际：可能小于1000000
    }
}
```

### 解决方案1：synchronized 关键字

```java
class SafeCounter {
    private int count = 0;
    
    // 同步方法
    public synchronized void increment() {
        count++;
    }
    
    public synchronized int getCount() {
        return count;
    }
}

// 或使用同步代码块
class SafeCounter2 {
    private int count = 0;
    private Object lock = new Object();
    
    public void increment() {
        synchronized (lock) {
            count++;
        }
    }
}
```

### 解决方案2：Lock 接口

```java
import java.util.concurrent.locks.Lock;
import java.util.concurrent.locks.ReentrantLock;

class LockCounter {
    private int count = 0;
    private Lock lock = new ReentrantLock();
    
    public void increment() {
        lock.lock();
        try {
            count++;
        } finally {
            lock.unlock();  // 确保释放锁
        }
    }
    
    public int getCount() {
        return count;
    }
}
```

### 解决方案3：原子类

```java
import java.util.concurrent.atomic.AtomicInteger;

class AtomicCounter {
    private AtomicInteger count = new AtomicInteger(0);
    
    public void increment() {
        count.incrementAndGet();
    }
    
    public int getCount() {
        return count.get();
    }
}
```

## 线程通信

### wait() 和 notify()

```java
class Message {
    private String content;
    private boolean hasMessage = false;
    
    // 生产者
    public synchronized void produce(String msg) {
        while (hasMessage) {
            try {
                wait();  // 等待消费
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        content = msg;
        hasMessage = true;
        System.out.println("生产: " + msg);
        notify();  // 通知消费者
    }
    
    // 消费者
    public synchronized String consume() {
        while (!hasMessage) {
            try {
                wait();  // 等待生产
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        }
        
        hasMessage = false;
        System.out.println("消费: " + content);
        notify();  // 通知生产者
        return content;
    }
}

public class ProducerConsumer {
    public static void main(String[] args) {
        Message message = new Message();
        
        // 生产者线程
        Thread producer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                message.produce("Message " + i);
            }
        });
        
        // 消费者线程
        Thread consumer = new Thread(() -> {
            for (int i = 1; i <= 5; i++) {
                message.consume();
            }
        });
        
        producer.start();
        consumer.start();
    }
}
```

## 线程池

线程池可以重复使用线程，提高性能。

```java
import java.util.concurrent.*;

public class ThreadPoolDemo {
    public static void main(String[] args) {
        // 创建固定大小的线程池
        ExecutorService executor = Executors.newFixedThreadPool(3);
        
        // 提交任务
        for (int i = 1; i <= 5; i++) {
            int taskId = i;
            executor.submit(() -> {
                System.out.println("任务 " + taskId + " 执行中，线程: " + 
                                 Thread.currentThread().getName());
                try {
                    Thread.sleep(2000);
                } catch (InterruptedException e) {
                    e.printStackTrace();
                }
            });
        }
        
        // 关闭线程池
        executor.shutdown();
    }
}
```

### 常见线程池类型

```java
// 固定大小线程池
ExecutorService fixed = Executors.newFixedThreadPool(5);

// 缓存线程池
ExecutorService cached = Executors.newCachedThreadPool();

// 单线程池
ExecutorService single = Executors.newSingleThreadExecutor();

// 定时任务线程池
ScheduledExecutorService scheduled = Executors.newScheduledThreadPool(2);
scheduled.schedule(() -> {
    System.out.println("延迟3秒执行");
}, 3, TimeUnit.SECONDS);
```

## 实战：下载任务

```java
import java.util.concurrent.*;

public class DownloadManager {
    private ExecutorService executor = Executors.newFixedThreadPool(3);
    
    public void download(String url) {
        executor.submit(() -> {
            System.out.println("开始下载: " + url);
            try {
                // 模拟下载
                Thread.sleep(2000);
                System.out.println("下载完成: " + url);
            } catch (InterruptedException e) {
                e.printStackTrace();
            }
        });
    }
    
    public void shutdown() {
        executor.shutdown();
    }
    
    public static void main(String[] args) {
        DownloadManager manager = new DownloadManager();
        
        manager.download("http://example.com/file1.zip");
        manager.download("http://example.com/file2.zip");
        manager.download("http://example.com/file3.zip");
        manager.download("http://example.com/file4.zip");
        
        manager.shutdown();
    }
}
```

## 小结

✅ 三种创建线程的方式  
✅ 线程同步：synchronized、Lock、原子类  
✅ 线程通信：wait()、notify()  
✅ 线程池：ExecutorService  

---

**上一节：** [IO 流](./io.md)


