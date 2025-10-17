---
title: Java 基础语法
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - 基础
  - 语法
---

# Java 基础语法

本节将介绍 Java 的基础语法，包括变量、数据类型、运算符和控制流程。

## 基本程序结构

```java
// 1. 包声明（可选）
package com.example;

// 2. 导入语句（可选）
import java.util.*;

// 3. 类定义
public class MyClass {
    // 4. 主方法
    public static void main(String[] args) {
        // 程序代码
    }
}
```

## 注释

Java 支持三种注释方式：

```java
// 单行注释

/*
 * 多行注释
 * 可以跨越多行
 */

/**
 * 文档注释
 * 用于生成 API 文档
 * @author 懿轩
 * @version 1.0
 */
```

## 变量和数据类型

### 变量声明

```java
// 语法：数据类型 变量名 = 值;
int age = 25;
String name = "懿轩";
double salary = 8000.5;
boolean isStudent = true;
```

### 基本数据类型

Java 有 8 种基本数据类型：

#### 1. 整数类型

```java
byte b = 127;           // 8位，-128 到 127
short s = 32767;        // 16位，-32768 到 32767
int i = 2147483647;     // 32位，最常用
long l = 9223372036854775807L;  // 64位，注意 L 后缀
```

#### 2. 浮点类型

```java
float f = 3.14f;        // 32位，单精度，注意 f 后缀
double d = 3.14159265359;  // 64位，双精度，默认类型
```

#### 3. 字符类型

```java
char c = 'A';           // 16位 Unicode 字符
char chinese = '中';
char unicode = '\u0041';  // Unicode 表示法
```

#### 4. 布尔类型

```java
boolean isTrue = true;
boolean isFalse = false;
```

### 引用数据类型

```java
// 字符串
String str = "Hello, Java!";

// 数组
int[] numbers = {1, 2, 3, 4, 5};
String[] names = new String[10];

// 对象
Scanner scanner = new Scanner(System.in);
```

### 类型转换

#### 自动类型转换（小 → 大）

```java
int i = 100;
long l = i;      // int → long
double d = l;    // long → double
```

#### 强制类型转换（大 → 小）

```java
double d = 3.14;
int i = (int) d;        // i = 3，小数部分被截断

long l = 100L;
int i2 = (int) l;
```

## 常量

使用 `final` 关键字定义常量：

```java
final double PI = 3.14159;
final int MAX_SIZE = 100;
final String COMPANY_NAME = "YiXuan Tech";

// PI = 3.14;  // 错误！常量不能被修改
```

## 运算符

### 算术运算符

```java
int a = 10, b = 3;

int sum = a + b;        // 加法：13
int diff = a - b;       // 减法：7
int product = a * b;    // 乘法：30
int quotient = a / b;   // 除法：3
int remainder = a % b;  // 取模：1

// 自增自减
int x = 5;
x++;    // x = 6，后自增
++x;    // x = 7，前自增
x--;    // x = 6，后自减
--x;    // x = 5，前自减
```

### 关系运算符

```java
int a = 10, b = 20;

boolean result1 = a == b;   // 等于：false
boolean result2 = a != b;   // 不等于：true
boolean result3 = a > b;    // 大于：false
boolean result4 = a < b;    // 小于：true
boolean result5 = a >= b;   // 大于等于：false
boolean result6 = a <= b;   // 小于等于：true
```

### 逻辑运算符

```java
boolean a = true, b = false;

boolean and = a && b;   // 逻辑与：false
boolean or = a || b;    // 逻辑或：true
boolean not = !a;       // 逻辑非：false
```

### 赋值运算符

```java
int x = 10;

x += 5;    // x = x + 5;   x = 15
x -= 3;    // x = x - 3;   x = 12
x *= 2;    // x = x * 2;   x = 24
x /= 4;    // x = x / 4;   x = 6
x %= 4;    // x = x % 4;   x = 2
```

### 三元运算符

```java
int a = 10, b = 20;
int max = (a > b) ? a : b;    // max = 20

String result = (score >= 60) ? "及格" : "不及格";
```

## 控制流程

### if 语句

```java
int score = 85;

// 单分支
if (score >= 60) {
    System.out.println("及格");
}

// 双分支
if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}

// 多分支
if (score >= 90) {
    System.out.println("优秀");
} else if (score >= 80) {
    System.out.println("良好");
} else if (score >= 60) {
    System.out.println("及格");
} else {
    System.out.println("不及格");
}
```

### switch 语句

```java
int day = 3;
String dayName;

switch (day) {
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    case 7:
        dayName = "Sunday";
        break;
    default:
        dayName = "Invalid day";
}

// Java 14+ 新语法
String result = switch (day) {
    case 1, 2, 3, 4, 5 -> "工作日";
    case 6, 7 -> "周末";
    default -> "无效";
};
```

### for 循环

```java
// 基本 for 循环
for (int i = 0; i < 5; i++) {
    System.out.println("i = " + i);
}

// 增强 for 循环（for-each）
int[] numbers = {1, 2, 3, 4, 5};
for (int num : numbers) {
    System.out.println(num);
}
```

### while 循环

```java
int i = 0;
while (i < 5) {
    System.out.println("i = " + i);
    i++;
}
```

### do-while 循环

```java
int i = 0;
do {
    System.out.println("i = " + i);
    i++;
} while (i < 5);
```

### break 和 continue

```java
// break：跳出循环
for (int i = 0; i < 10; i++) {
    if (i == 5) {
        break;  // 当 i = 5 时跳出循环
    }
    System.out.println(i);
}

// continue：跳过本次循环
for (int i = 0; i < 10; i++) {
    if (i % 2 == 0) {
        continue;  // 跳过偶数
    }
    System.out.println(i);  // 只打印奇数
}
```

## 输入输出

### 输出

```java
// 输出并换行
System.out.println("Hello, World!");

// 输出不换行
System.out.print("Hello, ");
System.out.print("Java!");

// 格式化输出
String name = "懿轩";
int age = 25;
System.out.printf("姓名：%s，年龄：%d%n", name, age);
```

### 输入

```java
import java.util.Scanner;

Scanner scanner = new Scanner(System.in);

// 读取整数
System.out.print("请输入年龄：");
int age = scanner.nextInt();

// 读取字符串
System.out.print("请输入姓名：");
String name = scanner.next();

// 读取一行
scanner.nextLine();  // 清除缓冲区
System.out.print("请输入地址：");
String address = scanner.nextLine();

// 读取浮点数
System.out.print("请输入分数：");
double score = scanner.nextDouble();

scanner.close();
```

## 练习题

### 练习 1：计算圆的面积

```java
import java.util.Scanner;

public class CircleArea {
    public static void main(String[] args) {
        final double PI = 3.14159;
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("请输入圆的半径：");
        double radius = scanner.nextDouble();
        
        double area = PI * radius * radius;
        System.out.printf("圆的面积为：%.2f%n", area);
        
        scanner.close();
    }
}
```

### 练习 2：判断闰年

```java
import java.util.Scanner;

public class LeapYear {
    public static void main(String[] args) {
        Scanner scanner = new Scanner(System.in);
        
        System.out.print("请输入年份：");
        int year = scanner.nextInt();
        
        boolean isLeap = (year % 4 == 0 && year % 100 != 0) || (year % 400 == 0);
        
        if (isLeap) {
            System.out.println(year + " 是闰年");
        } else {
            System.out.println(year + " 不是闰年");
        }
        
        scanner.close();
    }
}
```

### 练习 3：打印九九乘法表

```java
public class MultiplicationTable {
    public static void main(String[] args) {
        for (int i = 1; i <= 9; i++) {
            for (int j = 1; j <= i; j++) {
                System.out.printf("%d×%d=%d\t", j, i, i * j);
            }
            System.out.println();
        }
    }
}
```

## 小结

本节我们学习了：

✅ Java 程序的基本结构  
✅ 变量和数据类型  
✅ 常量的使用  
✅ 各种运算符  
✅ 控制流程语句  
✅ 输入输出操作

掌握这些基础语法后，我们就可以编写简单的 Java 程序了。下一节我们将学习面向对象编程的核心概念。

---

**上一节：** [环境搭建](./install.md)  
**下一节：** [面向对象](./oop.md)


