---
title: Flutter 编译开发 鸿蒙HarmonyOS 6 项目教程（Windows）
date: 2025-12-26
categories:
  - 移动开发
  - Flutter
  - HarmonyOS
tags:
  - Flutter
  - HarmonyOS
  - 鸿蒙
  - 开发环境
  - Windows
author: 懿轩
---

#  一、基础环境搭建

## 1.1 Git 下载与安装

下载地址：

[Git - Install](https://git-scm.com/install/)

下载安装文章：

[【2025最新】下载安装 Git 详细教程 （Windows）-CSDN博客](https://blog.csdn.net/2301_80035882/article/details/155000175?spm=1011.2415.3001.5331)

## 1.2 Java JDK17 下载与安装

下载地址：

[Java Downloads | Oracle](https://www.oracle.com/java/technologies/downloads/#java17-windows)

下载安装文章：

[Java开发环境的搭建（Java 17）_java17-CSDN博客](https://blog.csdn.net/QWERTYwqj/article/details/140808966?ops_request_misc=%7B%22request%5Fid%22%3A%22004d450d3358e3e12bd9fd4e568b155d%22%2C%22scm%22%3A%2220140713.130102334..%22%7D&request_id=004d450d3358e3e12bd9fd4e568b155d&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-140808966-null-null.142^v102^pc_search_result_base2&utm_term=Java17&spm=1018.2226.3001.4187)



# 二、Flutter SDK 下载安装和开发环境搭建

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/39a383ef7d9348da8a770053f7ad15c7.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

## 2.1 DevEco Studio下载安装

我这里版本为：

> DevEco Studio 6.0.0 Release
>
> Build Version: 6.0.0.858, built on September 24, 2025
>
> Runtime version: 21.0.6+8-b631.39 amd64 (JCEF 122.1.9)
>
> VM: OpenJDK 64-Bit Server VM by JetBrains s.r.o.
>
> Toolkit: sun.awt.windows.WToolkit
>
> Windows 11.0
>
> GC: G1 Young Generation, G1 Concurrent GC, G1 Old Generation
>
> Memory: 1536M
>
> Cores: 16
>
> Registry: idea.plugins.compatible.build=IC-243.24978.46

本次安装需要以下几个文件夹，可以提前创建：在任意盘下创建HarmonyOS文件夹：

**画红圈的是需要创建的：**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/a39568cadcd74c93b75e372fa3ec9f2e.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

> ArkUI-X 文件夹下还有一个 Sdk 文件夹
>
> Emulator 文件夹下还有一个 deployed 文件夹
>
> OpenHarmony 文件夹下还有一个 Sdk 文件夹

### 1.下载官网压缩包

下载地址：

[最新版本 - 下载中心 - 华为开发者联盟](https://developer.huawei.com/consumer/cn/download/)

选择 6.0 稳定版如图所示：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/1f229fdac6a143be958728ceca7ac9cd.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

### 2.下载完成后解压缩包双击打开.exe进入安装页面

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/0c75bc3f899545f5a06106c6995b2715.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/39f3982e2bd1446eb006318bc6b762c8.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


### 3.选择安装位置

尽量不要选择C盘，如果C盘空间充足也可以

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/0520a12fe7c7401b8444e2d838401610.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


### 4.选择安装选项

全选点击进入下一步

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/11af90a65c7e425e9db711aab0c9a126.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


### 5.选择开始菜单目录

默认即可，点击安装

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/42d05d74820743a399212edc170a356c.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


### 6.开始安装

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/5ca0163db80a4e71affdf51065ac6dad.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/e76fe874332848aebc8ac5d7301603b5.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


## 2.2 DevEco Studio 相关配置

### 1.新建一个项目

双击桌面图标进入应用

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/7f3d9863756140d0b0f3c4c46492b6af.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/b0cfb041f1964131b0e6d0c5a81d5135.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/690adaa4fdab4de286a76476e283d02a.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


给你的项目起名，并选择你要保存Harmony项目的文件夹，点击Finish：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/a525259427f9444fa4e7e0039733ace5.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


### 2. 配置显示字体

选择左上角 File 下的 Settings

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/a548776381cc465ca6f25fc3edfa3bbb.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/03b6f3b6610942d283d26e9e9f33be43.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


### 3.设置安装OpenHarmony SDK

在Settings页面下的OpenHarmony SDK

选择安装路径：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/304a366f8516474a9e63a1c76d46dd91.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/600233515c5348fe855de68913513eca.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/4481d640779a45bb95594d23e46c18c6.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


点击同意，接着Next

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/21bafea33d75466787c9ce3f17f487fa.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


等待下载，耐心等待

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/9e2f3c8c106f4f35906b6635b9283dd9.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


下载完成如图所示：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/7c5ac4a7e96a457591b3cbc418131bfe.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/38daa192fdaf46929c45db05e570fdbb.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


### 4.设置安装ArkUI-x

选择安装路径：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/c8dd466c597f40fbb8595c51fc77dbf1.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/0c325c509f06439eb282a897cd0add05.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


点击同意，接着Next

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/6719e639f1574f82946a1a7084965d0c.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


等待下载，耐心等待

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/d790eed2ab0645828cd4a9f9224ded4a.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


下载完成如图所示：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/0a12b08d7f6a43c4a42e9f7d282e0daf.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/84918827b2864db09b44f75185e09849.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


点击蓝按钮OK关闭。

### 5.配置安装虚拟机模拟器

点击Device Manager

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/9aa4f2665eab4fe2891e1b6a95c3069d.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/d3e51af17e634053951d40c0a7308d24.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


这里选择NO

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/1aaabbb7a07c4504af54bfbde4fa1410.png" alt="img" style="zoom: 33%; border-radius: 8px;" />


配置安装位置：

选择完安装地址，出现弹窗点击Yes即可

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/8b668c884efe4395a80404e4101f2453.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

接着选择右下角 New Emulator 新建虚拟机：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/5f56d51f200c4fec8795daed586c63c3.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

选择虚拟机镜像下载位置：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/833b94c3c91b4601b7310407681de301.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

点击同意，接着Next

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/5d1486c985da47118f47bc543bbb7216.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

等待下载，耐心等待

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/c2c8f3d1b07f46b3898ddf326376415a.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/5e41d3e6b0564f09a32cccd6baae5f65.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

接着Next：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/576291a72d954436981098e3160ebcf9.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/6d6704058a294f52883973645b71e974.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/d04779cd14de41babc02886dc654a777.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


运行即可，初次运行可能会有点慢，耐心等待即可：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/996ec4da4a4e4ad79c93cedaf407ce6e.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

### 6.运行项目

模拟器启动成功后，点击右上角运行按钮，即可在模拟器看见相关页面

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/50753c85025f499e8bee72a5d8ec77b4.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

## 2.3 配置鸿蒙SDK环境变量

**默认在Terminal中，默认不识别hdc命令，需要将hdc所在的路径添加到环境变量（根据自己的deveco studio安装的路径自行调整）**

`F:\Chengxusheji\HarmonyOS\DevEco Studio\sdk\default\openharmony\toolchains`

`F:\Chengxusheji\HarmonyOS\DevEco Studio\tools\ohpm\bin`

`F:\Chengxusheji\HarmonyOS\DevEco Studio\tools\node`

`F:\Chengxusheji\HarmonyOS\DevEco Studio\tools\hvigor\bin`

 右键点击此电脑，点击属性，再点击高级系统设置，最后点击环境变量

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226205446848.png" alt="image-20251226205446848" style="zoom:50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/3fd7937aaee948d6a6c60d2fa468b63a.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/c8751fe744f04dbe8e3fc2af73a16f4b.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

点击右上角新建添加四个地址位置：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/a32085cfa7344b13ac7008c4b2dc34f9.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


点击确定

另外，还需要新建DEVECO_SDK_HOME变量，路径为

F:\Chengxusheji\HarmonyOS\DevEco Studio\sdk

**盘号:\你的位置\HarmonyOS\DevEco Studio\sdk**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/5ee7ffeacc1349d1b6ed63d639e06a09.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

## 2.4 下载适配鸿蒙的flutter SDK

### 1.开始下载

利用前面下载安装好的 Git ：

创建专门放Flutter的文件夹

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/478a5e435415472583a7c2cf7881415d.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/6902b3edddce4c4cba0130eb8741becf.png" alt="img" style="zoom: 80%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/48484efcf1f8442ebac30283afa322b4.png" alt="img" style="zoom: 80%; border-radius: 8px;" />

会打开控制面板：

输入指令：

```
git clone -b oh-3.27.4-dev https://gitcode.com/openharmony-tpc/flutter_flutter.git
```


下载安装成功：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/53d4462ff95741c7a12fa0c014e95f80.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

### 2.配置环境变量

2.1. 拷贝windows的flutter目录下的bin完整路径

```
F:\Chengxusheji\Flutter\flutter_flutter\bin
```

2.2. 右键点击此电脑，点击属性，再点击高级系统设置，最后点击环境变量

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226215146319.png" alt="image-20251226215146319" style="border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/image-20251226215217840.png" alt="image-20251226215217840" style="zoom: 56%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/a10c7fbbe4384ddba61e704d3f985305.png" alt="img" style="zoom: 45%; border-radius: 8px;" />

2.3. 在path路径中添加之前拷贝的bin路径

添加两个环境变量**PUB_HOSTED_URL**和**FLUTTER_STORAGE_BASE_URL**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/9c236602a7194ed28c01c66457169c4e.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


```
PUB_HOSTED_URL
```


```
https://pub.flutter-io.cn
```


```
FLUTTER_STORAGE_BASE_URL
```


```
https://storage.flutter-io.cn
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/238300364f3a41d9a3c9815c07b03fc4.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/947e94fb7fab4d89b9e617221835d319.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/94a644dfd6474abd895f04c4f03872f9.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


配置完成后，一直点击确定：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/7b1e000ab82c4ffc8f84e1c826305471.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

### 3.检查Flutter版本

```
flutter --version
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/7008f3a17efa451dbd883d5c7abed533.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


### 4.诊断flutter环境

```
flutter doctor -v
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/0bc1eba8521c46228d6f273edb3531c6.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


# 三、创建并编译项目

## 3.1 创建项目

执行以下命令创建一个项目，`<projectName>` 替换成你自己的项目名

```
flutter create --platforms ohos <projectName>
```


专门创建一个文件夹保存Flutter鸿蒙项目：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/ef2561dee1df42b0920d2d06dc9b06c0.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


在上面框中输入cmd，接着点击Enter

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/bb6862016414419db59f4a9ec9b9b511.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


```
flutter create --platforms ohos flutter_harmonyos
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/0226287d59bc4ea984bfe95dd246e152.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/5a5ae6ddfc8548838bae2ffce677cc4c.png" alt="img" style="zoom: 50%; border-radius: 8px;" />




当前Flutter ohos平台中支持impeller-vulkan渲染模式，可通过开关控制是否打开。

开关位于ohos/entry/src/main/resources/rawfile/buildinfo.json5（初次flutter create之后，配置文件位于ohos\entry\src\main\resources\base\profile目录，首次run或build之后会搬移到rawfile目录）

```
{
   "string": [
      {
         "name": "enable_impeller",
         "value": "true"
      }
   ]
}
```


如果选择关闭impeller渲染，可将json文件中的value改为false。

## 3.2 构建app

在创建的项目路径下，用powershell执行以下命令构建

```
flutter build app --release
```


下述输入powershell接着点击 Enter

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/eceffe6f24544144847ee8022f4349a3.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/1d944c377ee64fa6b8d691478fb7b106.png" alt="img" style="zoom: 54%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/7e910479a0284731982091f4bc53f573.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/cd7ec416164a448fbb9b1658d7b4e404.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

构建完毕后，会显示以下信息，我们就可以在ohos\build\outputs\default目录下找到未签名的hap包

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/453416b795174835bb6c15ce17f493a5.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


## 3.3 打开项目

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/16f569180e9549a0b12db1194acf211f.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/241f11e137dd4af9b04db98729ea58e0.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


信任此项目：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/b22de03cc27748c4aeb0bbdecac11585.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


打开项目后，开发环境会自动编译依赖，如果报错，请查看之前的步骤是否都完成了

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/831e99e8b5284ba798fa8fa69a697608.png" alt="img" style="zoom: 50%; border-radius: 8px;" />
第一次打开，会提示让添加目标sdk版本，选择1：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/1886de3aa7ec4b75824ba59db7c7ef21.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


然后打开build-profile.json5添加自己想要编译到的设备的sdk版本

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/e8b594747b474493999516c17a986d3b.png" alt="img" style="zoom: 67%; border-radius: 8px;" />
**第一种连接鸿蒙设备**

打开终端，执行hdc tconn IP:端口号（IP和端口号，在需要调试的设备上，打开开发者模式，在无线调试页面查看）

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/dcc153a9ecc74821925ea48996edb43f.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


**没有鸿蒙设备打开模拟器再配置自动签名**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/dc3c0f7c816b49efa98ffa687abe07ac.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

## 3.4 配置自动签名

选择项目结构(Project Structure)

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/70ceeaa0e23044c9ae1a06104187973c.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


点击Sign In登录配置签名

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/4830c1b4e0f34b6e91b3491b46f30d18.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

**在网页中点击允许之后会自动刷新配置：**

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/ee144c26b9a442c4a1426814713048db.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

如果出现以下报错，就是你的电脑时间需要校准了

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/b47217ae52ad4b669667c99c7a57f74a.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

校准完之后，即可签名成功

## 3.4 编译与启动项目

启动虚拟模拟器，并点击右上角绿色按钮运行如下：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/c6720026b97044298d0cdb8b40646030.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

## 3.5 修改目标设备

默认项目是为手机构建的，假如需要支持电脑和平板端，需要修改一下配置

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/b0b4e306c0704371924f02522c6dba36.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

# 四、打开已有项目（已有开源项目需要打开时查看此步骤）

以kelivo-ohos这个项目为例。这个项目是一个大模型应用软件适配的鸿蒙版本

[GitHub地址：https://github.com/Chevey339/kelivo-ohos](https://github.com/Chevey339/kelivo-ohos)

## 4.1 源码准备

下载好源码之后，我们解压并进入到源码目录，并打开poweshell

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/53bf920d48e5463ba54ba76e72ada4df.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

## 4.2 开始编译

执行以下命令进行编译

```
flutter build app --release
```


出现以下问题代表我们的flutter sdk版本太低了

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/8095f19dbe3b4752b25cc6f49d5ee5ee.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

## 4.3 升级flutter sdk（可选）

我们访问仓库，看一下最新的发行版版本：

[flutter_flutter - GitCode](https://gitcode.com/openharmony-tpc/flutter_flutter)

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/907d1a85ee864c23ba97beb3b70a96e5.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

是3.27版本，我们也看一下分支，然后把原先的flutter_flutter文件夹删了，执行以下命令

```
git clone -b oh-3.27.4-dev https://gitcode.com/openharmony-tpc/flutter_flutter.git
```


最后打开powershell，执行以下指令检查环境

```
$env:PUB_HOSTED_URL="https://pub.flutter-io.cn" 
$env:FLUTTER_STORAGE_BASE_URL="https://storage.flutter-io.cn" 

flutter doctor -v
```


显示绿色代表环境正常

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/ae42288d67a24254902b9467785c20b7.png" alt="img" style="zoom: 67%; border-radius: 8px;" />

升级完成后再次编译

```
flutter build app --release
```


然后报了找不到image_picker，我们需要从官方适配的库里找一找这个库

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/aaa431735fa1422ea265daa64e25a04b.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

## 4.4 下载flutter_packages库（可选）

从这个网址下载官方适配的库：[flutter_packages - GitCode](https://gitcode.com/openharmony-tpc/flutter_packages)

下载完后进行解压，将packages文件夹，移动到源码目录下，并命名为flutter_packages

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/e40074d969cc40a3aeacaa35602599cc.png" alt="img" style="zoom: 33%; border-radius: 8px;" />

---

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/1ba75602e01d448da642fa7d7fed7227.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


为什么这个命名呢，是从pubspec.yaml文件里看出来的：

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/11e0d14dd9a842eba29a877a7603e435.png" alt="img" style="zoom: 50%; border-radius: 8px;" />


然后又报了open_filex错误

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/8e28e0566b4649ccafc4969b13bdefa2.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

经过查找，将这个仓库下载下来

https://gitcode.com/openharmony-sig/fluttertpc_open_filex/tree/br_v4.5.0_ohos

然后解压改名成fluttertpc_open_filex，放到flutter_packages文件夹里

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/af321988ab5e4d56b656e0d5d3e193e7.png" alt="img" style="zoom: 67%; border-radius: 8px;" />


然后还缺一些库，以下简述下载链接和改名，均放在flutter_packages文件夹里

> - 下载链接：https://gitcode.com/openharmony-sig/fluttertpc_file_picker
> - 改名为：fluttertpc_file_picker
> - 放在flutter_packages文件夹里

> - 下载链接：https://gitcode.com/openharmony-sig/fluttertpc_mobile_scanner/tree/br_v6.0.10_ohos
> - 改名为：fluttertpc_mobile_scanner
> - 放在flutter_packages文件夹里

> - 下载链接：https://github.com/app-appplayer/mcp_client
> - 改名为：mcp_client
> - 放在源码目录下，并且，要修改一下里面的pubspec.yaml，把sdk: ^3.7.0 改为 sdk: ^3.6.2

## 4.5 固定依赖版本

打开源码里的pubspec.yaml，把win32和ffi的版本固定一下。

如果不固定，会默认下载5.13.0版本的win32，而这个版本的win32不再兼容Dart 3.6 会报错

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/239c2b4155e942fc9b04b6b688ce7d9a.png" alt="img" style="zoom: 50%; border-radius: 8px;" />



编译完成如下图

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/ced7613c01804bf0bbc57428b94175be.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

## 4.6 补全build-profile.json5

将以下自动生成的默认build-profile.json5模板，放到源码的ohos中，找到 build-profile.json5（如果没有创建一个build-profile.json5文件），粘贴以下代码

```TypeScript
{
  "app": {
    "signingConfigs": [],
    "products": [
      {
        "name": "default",
        "signingConfig": "default",
        "compatibleSdkVersion": "5.0.0(12)",
        "runtimeOS": "HarmonyOS",
        "targetSdkVersion": "5.0.0(12)"
      }
    ],
    "buildModeSet": [
      {
        "name": "debug"
      },
      {
        "name": "profile"
      },
      {
        "name": "release"
      }
    ]
  },
  "modules": [
    {
      "name": "entry",
      "srcPath": "./entry",
      "targets": [
        {
          "name": "default",
          "applyToProducts": [
            "default"
          ]
        }
      ]
    }
  ]
}
```


## 4.7 添加粘贴权限

默认移植的flutter程序，是没办法粘贴内容的，我们需要添加获取剪切板权限

首先在module.json5配置文件中添加剪切板权限

（注意：有两处"requestPermissions"，要加到最下面那个"requestPermissions"里面）

```TypeScript
{
  "name" : "ohos.permission.READ_PASTEBOARD",
  "reason": "$string:module_desc",
  "usedScene": {
    "abilities": [
      "EntryAbility"
    ],
    "when":"inuse"
  }
}
```

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/1ecbe33df71c4061b9766cba1b9cfea4.png" alt="img" style="zoom: 50%; border-radius: 8px;" />

最后别忘了重新签一下名，获取ACL权限

<img src="https://cdn.jsdelivr.net/gh/YIXUAN-oss/yixuan-blog-image-hosting@master/blogs/67bf95d8bb6b4a22aad1e19d8e0d1099.png" alt="img" style="zoom: 50%; border-radius: 8px;" />