---
title: Java 面向对象编程
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - 面向对象
  - OOP
---

# Java 面向对象编程

面向对象编程（Object-Oriented Programming, OOP）是 Java 的核心特性。本节将详细介绍面向对象的三大特性：封装、继承和多态。

## 什么是面向对象？

面向对象编程是一种程序设计思想，它将现实世界中的事物抽象成对象，通过对象之间的交互来完成程序功能。

### 面向过程 vs 面向对象

**面向过程**：关注解决问题的步骤
```java
// 面向过程：洗衣服
1. 放入衣服
2. 加入洗衣粉
3. 加水
4. 开始洗涤
5. 漂洗
6. 脱水
```

**面向对象**：关注解决问题的对象
```java
// 面向对象：洗衣服
洗衣机.洗衣服(衣服);
```

## 类和对象

### 类（Class）

类是对象的模板，定义了对象的属性和行为。

```java
public class Person {
    // 属性（成员变量）
    String name;
    int age;
    String gender;
    
    // 方法（行为）
    public void sayHello() {
        System.out.println("你好，我是 " + name);
    }
    
    public void celebrate() {
        age++;
        System.out.println("生日快乐！现在 " + age + " 岁了");
    }
}
```

### 对象（Object）

对象是类的实例，是具体的实体。

```java
public class Main {
    public static void main(String[] args) {
        // 创建对象
        Person person1 = new Person();
        person1.name = "懿轩";
        person1.age = 25;
        person1.gender = "男";
        
        // 调用方法
        person1.sayHello();       // 输出：你好，我是 懿轩
        person1.celebrate();      // 输出：生日快乐！现在 26 岁了
        
        // 创建另一个对象
        Person person2 = new Person();
        person2.name = "小明";
        person2.age = 20;
    }
}
```

## 构造方法

构造方法用于初始化对象，与类同名，没有返回值类型。

```java
public class Person {
    String name;
    int age;
    
    // 无参构造方法
    public Person() {
        System.out.println("创建了一个新的 Person 对象");
    }
    
    // 有参构造方法
    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // 构造方法重载
    public Person(String name) {
        this.name = name;
        this.age = 0;
    }
}

// 使用构造方法
Person p1 = new Person();                    // 调用无参构造
Person p2 = new Person("懿轩", 25);          // 调用有参构造
Person p3 = new Person("小明");              // 调用单参数构造
```

## 封装（Encapsulation）

封装是将数据和操作数据的方法绑定在一起，隐藏内部实现细节。

### 访问修饰符

| 修饰符 | 本类 | 同包 | 子类 | 其他 |
|--------|------|------|------|------|
| private | ✅ | ❌ | ❌ | ❌ |
| default | ✅ | ✅ | ❌ | ❌ |
| protected | ✅ | ✅ | ✅ | ❌ |
| public | ✅ | ✅ | ✅ | ✅ |

### 封装示例

```java
public class BankAccount {
    // 私有属性
    private String accountNumber;
    private double balance;
    
    // 构造方法
    public BankAccount(String accountNumber, double initialBalance) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    
    // Getter 方法
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    // Setter 方法（带验证）
    public void setBalance(double balance) {
        if (balance >= 0) {
            this.balance = balance;
        } else {
            System.out.println("余额不能为负数");
        }
    }
    
    // 业务方法
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("存入：" + amount + "，余额：" + balance);
        } else {
            System.out.println("存款金额必须大于0");
        }
    }
    
    public void withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("取出：" + amount + "，余额：" + balance);
        } else {
            System.out.println("余额不足或金额无效");
        }
    }
}

// 使用
BankAccount account = new BankAccount("123456", 1000);
account.deposit(500);      // 存入：500，余额：1500
account.withdraw(300);     // 取出：300，余额：1200
// account.balance = -100; // 错误！无法直接访问私有属性
```

## 继承（Inheritance）

继承允许子类继承父类的属性和方法，实现代码复用。

### 基本语法

```java
// 父类
public class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    public void eat() {
        System.out.println(name + " 正在吃东西");
    }
    
    public void sleep() {
        System.out.println(name + " 正在睡觉");
    }
}

// 子类 Dog
public class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // 调用父类构造方法
        this.breed = breed;
    }
    
    // 子类特有的方法
    public void bark() {
        System.out.println(name + " 汪汪叫");
    }
    
    // 重写父类方法
    @Override
    public void eat() {
        System.out.println(name + " 正在吃狗粮");
    }
}

// 子类 Cat
public class Cat extends Animal {
    private String color;
    
    public Cat(String name, int age, String color) {
        super(name, age);
        this.color = color;
    }
    
    public void meow() {
        System.out.println(name + " 喵喵叫");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " 正在吃猫粮");
    }
}

// 使用
Dog dog = new Dog("旺财", 3, "柯基");
dog.eat();      // 输出：旺财 正在吃狗粮
dog.sleep();    // 输出：旺财 正在睡觉
dog.bark();     // 输出：旺财 汪汪叫

Cat cat = new Cat("小白", 2, "白色");
cat.eat();      // 输出：小白 正在吃猫粮
cat.meow();     // 输出：小白 喵喵叫
```

### super 和 this

```java
public class Student extends Person {
    private String studentId;
    
    public Student(String name, int age, String studentId) {
        super(name, age);           // 调用父类构造方法
        this.studentId = studentId;  // this 引用当前对象
    }
    
    public void showInfo() {
        super.sayHello();           // 调用父类方法
        System.out.println("学号：" + this.studentId);
    }
}
```

## 多态（Polymorphism）

多态是指同一个方法调用，由于对象不同可能会有不同的行为。

### 方法重载（Overloading）

同一个类中，方法名相同但参数不同。

```java
public class Calculator {
    // 两个整数相加
    public int add(int a, int b) {
        return a + b;
    }
    
    // 三个整数相加
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    // 两个浮点数相加
    public double add(double a, double b) {
        return a + b;
    }
}

Calculator calc = new Calculator();
System.out.println(calc.add(1, 2));        // 3
System.out.println(calc.add(1, 2, 3));     // 6
System.out.println(calc.add(1.5, 2.5));    // 4.0
```

### 方法重写（Overriding）

子类重写父类的方法。

```java
public class Shape {
    public double getArea() {
        return 0;
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public double getArea() {
        return Math.PI * radius * radius;
    }
}

public class Rectangle extends Shape {
    private double width;
    private double height;
    
    public Rectangle(double width, double height) {
        this.width = width;
        this.height = height;
    }
    
    @Override
    public double getArea() {
        return width * height;
    }
}
```

### 多态的应用

```java
public class PolymorphismDemo {
    public static void main(String[] args) {
        // 父类引用指向子类对象
        Shape shape1 = new Circle(5);
        Shape shape2 = new Rectangle(4, 6);
        
        // 同一个方法调用，不同的行为
        System.out.println("圆的面积：" + shape1.getArea());     // 78.54
        System.out.println("矩形的面积：" + shape2.getArea());   // 24.0
        
        // 多态数组
        Shape[] shapes = {
            new Circle(3),
            new Rectangle(4, 5),
            new Circle(2)
        };
        
        for (Shape shape : shapes) {
            System.out.println("面积：" + shape.getArea());
        }
    }
}
```

## 抽象类和接口

### 抽象类（Abstract Class）

```java
public abstract class Animal {
    protected String name;
    
    public Animal(String name) {
        this.name = name;
    }
    
    // 抽象方法（没有方法体）
    public abstract void makeSound();
    
    // 普通方法
    public void sleep() {
        System.out.println(name + " 正在睡觉");
    }
}

public class Dog extends Animal {
    public Dog(String name) {
        super(name);
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " 汪汪叫");
    }
}
```

### 接口（Interface）

```java
public interface Flyable {
    // 接口中的方法默认是 public abstract
    void fly();
    
    // Java 8+ 可以有默认方法
    default void glide() {
        System.out.println("滑翔中...");
    }
}

public interface Swimmable {
    void swim();
}

// 一个类可以实现多个接口
public class Duck implements Flyable, Swimmable {
    @Override
    public void fly() {
        System.out.println("鸭子在飞");
    }
    
    @Override
    public void swim() {
        System.out.println("鸭子在游泳");
    }
}
```

## 综合实例：图书管理系统

```java
// 图书类
public class Book {
    private String isbn;
    private String title;
    private String author;
    private boolean isBorrowed;
    
    public Book(String isbn, String title, String author) {
        this.isbn = isbn;
        this.title = title;
        this.author = author;
        this.isBorrowed = false;
    }
    
    public void borrow() {
        if (!isBorrowed) {
            isBorrowed = true;
            System.out.println("《" + title + "》 已借出");
        } else {
            System.out.println("《" + title + "》 已被借出");
        }
    }
    
    public void returnBook() {
        if (isBorrowed) {
            isBorrowed = false;
            System.out.println("《" + title + "》 已归还");
        } else {
            System.out.println("《" + title + "》 未被借出");
        }
    }
    
    public void displayInfo() {
        System.out.println("ISBN: " + isbn);
        System.out.println("书名: " + title);
        System.out.println("作者: " + author);
        System.out.println("状态: " + (isBorrowed ? "已借出" : "可借阅"));
    }
}

// 使用
Book book = new Book("978-7-111-54742-6", "Java核心技术", "Cay S. Horstmann");
book.displayInfo();
book.borrow();
book.returnBook();
```

## 小结

本节我们学习了：

✅ 类和对象的概念  
✅ 构造方法的使用  
✅ 封装：通过访问修饰符隐藏实现细节  
✅ 继承：代码复用和扩展  
✅ 多态：方法重载和重写  
✅ 抽象类和接口  

面向对象是 Java 编程的核心，掌握这些概念对后续学习至关重要。

---

**上一节：** [基础语法](./syntax.md)  
**下一节：** [集合框架](../advanced/collection.md)


