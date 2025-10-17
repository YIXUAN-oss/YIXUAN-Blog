---
title: Java IO 流
date: 2025-10-16
categories:
  - Java 教程
tags:
  - Java
  - IO
  - 文件操作
---

# Java IO 流

Java IO 流用于处理设备之间的数据传输。本节介绍文件读写和常用的 IO 操作。

## IO 流分类

按流向分类：
- **输入流**：从外部读取数据到程序
- **输出流**：从程序写入数据到外部

按数据类型分类：
- **字节流**：以字节为单位（8位）
- **字符流**：以字符为单位（16位）

## 文件操作

```java
import java.io.File;
import java.io.IOException;

// 创建 File 对象
File file = new File("test.txt");

// 判断文件是否存在
boolean exists = file.exists();

// 创建文件
if (!file.exists()) {
    file.createNewFile();
}

// 删除文件
file.delete();

// 获取文件信息
String name = file.getName();        // 文件名
String path = file.getPath();        // 路径
long size = file.length();           // 大小（字节）
boolean isFile = file.isFile();      // 是否是文件
boolean isDir = file.isDirectory();  // 是否是目录

// 创建目录
File dir = new File("mydir");
dir.mkdir();      // 创建单级目录
dir.mkdirs();     // 创建多级目录

// 列出目录内容
File folder = new File(".");
String[] files = folder.list();      // 文件名数组
File[] fileList = folder.listFiles(); // File对象数组
```

## 字节流

### FileInputStream（文件输入流）

```java
import java.io.FileInputStream;
import java.io.IOException;

public class FileInputStreamDemo {
    public static void main(String[] args) {
        try (FileInputStream fis = new FileInputStream("input.txt")) {
            int data;
            // 一次读取一个字节
            while ((data = fis.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### FileOutputStream（文件输出流）

```java
import java.io.FileOutputStream;
import java.io.IOException;

public class FileOutputStreamDemo {
    public static void main(String[] args) {
        try (FileOutputStream fos = new FileOutputStream("output.txt")) {
            String content = "Hello, Java IO!";
            fos.write(content.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 字符流

### FileReader（文件读取）

```java
import java.io.FileReader;
import java.io.IOException;

public class FileReaderDemo {
    public static void main(String[] args) {
        try (FileReader reader = new FileReader("input.txt")) {
            int data;
            while ((data = reader.read()) != -1) {
                System.out.print((char) data);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### FileWriter（文件写入）

```java
import java.io.FileWriter;
import java.io.IOException;

public class FileWriterDemo {
    public static void main(String[] args) {
        try (FileWriter writer = new FileWriter("output.txt")) {
            writer.write("Hello, Java!\n");
            writer.write("这是第二行\n");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 缓冲流

缓冲流可以提高 IO 效率。

### BufferedReader

```java
import java.io.*;

public class BufferedReaderDemo {
    public static void main(String[] args) {
        try (BufferedReader br = new BufferedReader(
                new FileReader("input.txt"))) {
            String line;
            // 按行读取
            while ((line = br.readLine()) != null) {
                System.out.println(line);
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

### BufferedWriter

```java
import java.io.*;

public class BufferedWriterDemo {
    public static void main(String[] args) {
        try (BufferedWriter bw = new BufferedWriter(
                new FileWriter("output.txt"))) {
            bw.write("第一行");
            bw.newLine();  // 换行
            bw.write("第二行");
            bw.newLine();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
```

## 实战：文件复制

```java
import java.io.*;

public class FileCopyDemo {
    // 方法1：字节流复制
    public static void copyFileByBytes(String src, String dest) {
        try (FileInputStream fis = new FileInputStream(src);
             FileOutputStream fos = new FileOutputStream(dest)) {
            
            byte[] buffer = new byte[1024];
            int length;
            while ((length = fis.read(buffer)) != -1) {
                fos.write(buffer, 0, length);
            }
            System.out.println("复制成功！");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    // 方法2：字符流复制（仅适用于文本文件）
    public static void copyFileByChars(String src, String dest) {
        try (BufferedReader reader = new BufferedReader(
                new FileReader(src));
             BufferedWriter writer = new BufferedWriter(
                new FileWriter(dest))) {
            
            String line;
            while ((line = reader.readLine()) != null) {
                writer.write(line);
                writer.newLine();
            }
            System.out.println("复制成功！");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        copyFileByBytes("source.jpg", "dest.jpg");
        copyFileByChars("source.txt", "dest.txt");
    }
}
```

## 对象序列化

将对象转换为字节序列，便于存储和传输。

```java
import java.io.*;

// 实现 Serializable 接口
class Student implements Serializable {
    private static final long serialVersionUID = 1L;
    
    private String name;
    private int age;
    private transient String password;  // transient 不参与序列化
    
    public Student(String name, int age, String password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }
    
    @Override
    public String toString() {
        return "Student{name='" + name + "', age=" + age + 
               ", password='" + password + "'}";
    }
}

public class SerializationDemo {
    // 序列化：将对象写入文件
    public static void serialize() {
        Student student = new Student("张三", 20, "123456");
        
        try (ObjectOutputStream oos = new ObjectOutputStream(
                new FileOutputStream("student.dat"))) {
            oos.writeObject(student);
            System.out.println("序列化成功");
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
    
    // 反序列化：从文件读取对象
    public static void deserialize() {
        try (ObjectInputStream ois = new ObjectInputStream(
                new FileInputStream("student.dat"))) {
            Student student = (Student) ois.readObject();
            System.out.println("反序列化成功：" + student);
        } catch (IOException | ClassNotFoundException e) {
            e.printStackTrace();
        }
    }
    
    public static void main(String[] args) {
        serialize();
        deserialize();
    }
}
```

## 小结

✅ File 类用于文件和目录操作  
✅ 字节流用于处理二进制数据  
✅ 字符流用于处理文本数据  
✅ 缓冲流提高 IO 效率  
✅ 对象序列化用于对象的持久化  

---

**上一节：** [集合框架](./collection.md)  
**下一节：** [多线程](./multithreading.md)


