---
title: Java 集合框架
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - 集合
  - Collection
---

# Java 集合框架

Java 集合框架提供了一套性能优良、使用方便的数据结构和算法。本节将介绍常用的集合类。

## 集合框架体系

```
Collection (接口)
├── List (接口) - 有序、可重复
│   ├── ArrayList - 动态数组
│   ├── LinkedList - 双向链表
│   └── Vector - 线程安全的动态数组
│
├── Set (接口) - 无序、不可重复
│   ├── HashSet - 基于哈希表
│   ├── LinkedHashSet - 保持插入顺序
│   └── TreeSet - 有序集合
│
└── Queue (接口) - 队列
    ├── PriorityQueue - 优先队列
    └── Deque - 双端队列

Map (接口) - 键值对
├── HashMap - 基于哈希表
├── LinkedHashMap - 保持插入顺序
├── TreeMap - 有序映射
└── Hashtable - 线程安全（遗留类）
```

## List 接口

### ArrayList

基于动态数组实现，查询快，增删慢。

```java
import java.util.ArrayList;
import java.util.List;

public class ArrayListDemo {
    public static void main(String[] args) {
        // 创建 ArrayList
        List<String> list = new ArrayList<>();
        
        // 添加元素
        list.add("Java");
        list.add("Python");
        list.add("JavaScript");
        
        // 指定位置添加
        list.add(1, "C++");
        
        // 获取元素
        String first = list.get(0);  // Java
        
        // 修改元素
        list.set(0, "Go");
        
        // 删除元素
        list.remove(0);           // 删除索引 0
        list.remove("Python");    // 删除指定元素
        
        // 查询
        int size = list.size();            // 大小
        boolean contains = list.contains("Java");  // 是否包含
        int index = list.indexOf("C++");   // 查找索引
        
        // 遍历
        for (String lang : list) {
            System.out.println(lang);
        }
        
        // Lambda 表达式遍历
        list.forEach(lang -> System.out.println(lang));
    }
}
```

### LinkedList

基于双向链表实现，增删快，查询慢。

```java
import java.util.LinkedList;

LinkedList<String> list = new LinkedList<>();

// 添加到头部
list.addFirst("First");

// 添加到尾部
list.addLast("Last");

// 获取头部元素
String first = list.getFirst();

// 获取尾部元素
String last = list.getLast();

// 移除头部元素
list.removeFirst();

// 移除尾部元素
list.removeLast();
```

## Set 接口

### HashSet

基于哈希表，元素无序且不重复。

```java
import java.util.HashSet;
import java.util.Set;

Set<String> set = new HashSet<>();

// 添加元素
set.add("Java");
set.add("Python");
set.add("Java");  // 重复元素不会被添加

System.out.println(set.size());  // 2

// 判断是否存在
boolean exists = set.contains("Java");

// 删除元素
set.remove("Python");

// 遍历
for (String lang : set) {
    System.out.println(lang);
}
```

### TreeSet

基于红黑树，元素有序。

```java
import java.util.TreeSet;

TreeSet<Integer> set = new TreeSet<>();

set.add(5);
set.add(2);
set.add(8);
set.add(1);

// 输出：1 2 5 8（自动排序）
for (int num : set) {
    System.out.println(num);
}

// 获取第一个和最后一个元素
int first = set.first();   // 1
int last = set.last();     // 8
```

## Map 接口

### HashMap

基于哈希表，键值对存储。

```java
import java.util.HashMap;
import java.util.Map;

Map<String, Integer> map = new HashMap<>();

// 添加键值对
map.put("Java", 95);
map.put("Python", 90);
map.put("JavaScript", 85);

// 获取值
int score = map.get("Java");  // 95

// 判断键是否存在
boolean hasKey = map.containsKey("Java");

// 判断值是否存在
boolean hasValue = map.containsValue(95);

// 删除
map.remove("Python");

// 获取所有键
for (String key : map.keySet()) {
    System.out.println(key + ": " + map.get(key));
}

// 获取所有值
for (int value : map.values()) {
    System.out.println(value);
}

// 遍历键值对
for (Map.Entry<String, Integer> entry : map.entrySet()) {
    System.out.println(entry.getKey() + ": " + entry.getValue());
}

// Lambda 表达式遍历
map.forEach((key, value) -> {
    System.out.println(key + ": " + value);
});
```

## Collections 工具类

```java
import java.util.*;

List<Integer> list = new ArrayList<>(Arrays.asList(5, 2, 8, 1, 9));

// 排序
Collections.sort(list);  // [1, 2, 5, 8, 9]

// 反转
Collections.reverse(list);  // [9, 8, 5, 2, 1]

// 打乱
Collections.shuffle(list);

// 查找最大值
int max = Collections.max(list);

// 查找最小值
int min = Collections.min(list);

// 二分查找（需要先排序）
Collections.sort(list);
int index = Collections.binarySearch(list, 5);

// 填充
Collections.fill(list, 0);  // 所有元素设为 0

// 复制
List<Integer> dest = new ArrayList<>(Collections.nCopies(list.size(), 0));
Collections.copy(dest, list);
```

## 实战示例：学生管理系统

```java
import java.util.*;

class Student {
    private String id;
    private String name;
    private int score;
    
    public Student(String id, String name, int score) {
        this.id = id;
        this.name = name;
        this.score = score;
    }
    
    // Getters
    public String getId() { return id; }
    public String getName() { return name; }
    public int getScore() { return score; }
    
    @Override
    public String toString() {
        return String.format("Student{id='%s', name='%s', score=%d}", 
                           id, name, score);
    }
}

public class StudentManager {
    private Map<String, Student> students = new HashMap<>();
    
    // 添加学生
    public void addStudent(Student student) {
        students.put(student.getId(), student);
        System.out.println("添加成功：" + student);
    }
    
    // 删除学生
    public void removeStudent(String id) {
        Student removed = students.remove(id);
        if (removed != null) {
            System.out.println("删除成功：" + removed);
        } else {
            System.out.println("未找到学号：" + id);
        }
    }
    
    // 查找学生
    public Student findStudent(String id) {
        return students.get(id);
    }
    
    // 显示所有学生
    public void displayAll() {
        System.out.println("=== 学生列表 ===");
        students.values().forEach(System.out::println);
    }
    
    // 按分数排序
    public void sortByScore() {
        List<Student> list = new ArrayList<>(students.values());
        list.sort((s1, s2) -> s2.getScore() - s1.getScore());
        System.out.println("=== 按分数排序 ===");
        list.forEach(System.out::println);
    }
    
    public static void main(String[] args) {
        StudentManager manager = new StudentManager();
        
        manager.addStudent(new Student("001", "张三", 85));
        manager.addStudent(new Student("002", "李四", 92));
        manager.addStudent(new Student("003", "王五", 78));
        
        manager.displayAll();
        manager.sortByScore();
        
        manager.removeStudent("002");
        manager.displayAll();
    }
}
```

## 小结

✅ List：有序可重复（ArrayList、LinkedList）  
✅ Set：无序不重复（HashSet、TreeSet）  
✅ Map：键值对（HashMap、TreeMap）  
✅ Collections：集合工具类  

---

**上一节：** [面向对象](../basic/oop.md)  
**下一节：** [IO 流](./io.md)


