# Day01  开班   

## Web前端实训安排

- 第一天：HTML、CSS、JavaScript基础巩固
- 第二天：登录、注册页实现
- 第三天：商城首页实现
- 第四天：商城购物车页实现
- 项目考核：平时成绩（每周作业完成情况）+ 项目成绩
- 课堂纪律（线上课堂不要迟到跟早退，有问题及时反馈）9:00~12：00 13：30~17：00

## 前端和后端的区别

### 前端

![](img\src=http___photo.16pic.com_00_05_66_16pic_566331_b.jpg&refer=http___photo.16pic.jpg)

### 后端

![](img\src=http___images2.10qianwan.com_10qianwan_20180509_b_0_201805091348187671.jpg&refer=http___images2.10qianwan.jpg)

### 印象中的程序员

![](img\微信图片_20210326135631.png)

### 实际工作中的



![](img\微信图片_20210326135651.png)

## 产品开发人员及流程



![](img\微信图片_20210327204026.png)



## 前端技术栈



![](img\微信图片_20210327203659.png)



## 认识网页

```
思考：  网页是由什么构成的呢?
网页主要由文字、图像和超链接等元素构成。当然，除了这些元素，网页中还可以包含音频、视频以及Flash等。
```

```
思考：  网页是如何形成的呢?
```

程序员写的代码=》浏览器=》客户端网页

## 常见浏览器介绍

```
浏览器是网页运行的平台，常用的浏览器有IE、火狐（Firefox）、谷歌（Chrome）、Safari和Opera等。我们平时称为五大浏览器。
```

![](img\b.png)



## 浏览器内核

|         类别          |    内核     |
| :-------------------: | :---------: |
|          IE           |   Trident   |
| Mozilla FireFox(火狐) |    Gecko    |
|        Safari         |   WebKit    |
|    Chrome（谷歌）     | WebKit/Bink |
|     Opera（欧朋）     |   Presto    |

## Web标准（重点）

通过以上浏览器的内核不同，我们知道他们工作原理、解析肯定不同，显示就会有差别。

```
问：  哪个语言再全国基本都可以听得懂？ 
```

![](img\bz.png)

## Web 标准的好处

*1*、让Web的发展前景更广阔 
*2*、内容能被更广泛的设备访问
*3*、更容易被搜寻引擎搜索
*4*、降低网站流量费用
*5*、使网站更易于维护
*6*、提高页面浏览速度

##  Web 标准构成

 Web标准不是某一个标准，而是由W3C和其他标准化组织制定的一系列标准的集合。主要包括结构（Structure）、表现（Presentation）和行为（Behavior）三个方面。

~~~
结构标准：结构用于对网页元素进行整理和分类，主要包括XML和XHTML两个部分。
样式标准：表现用于设置网页元素的版式、颜色、大小等外观样式，主要指的是CSS。
行为标准：行为是指网页模型的定义及交互的编写，主要包括DOM和ECMAScript两个部分
~~~

理想状态我们的源码： .HTML    .css   .js 

```
专业的人，写专业的代码
```

![](img\wk.png)



总结WEB标准：

结构标准：  ![](img\hb1.png) 决定你是否有个好天然身体 



样式标准：  ![](\img\hb2.png)   决定你是否打扮的美丽外观



行为标准：<img src="img\hb3.jpg" style="zoom:200%;" />    决定你是否有吸引人的行为



## 开发工具的使用

### 1.Vscode的下载、安装

（1）官网https://code.visualstudio.com/Download下载最新版   最好下载zip格式

（2）解压到非系统盘，文件夹最好不要出现中文和空格，我解压到D:\VSCode-win32-x64-1.31.1，直接运行code.exe即可

### 2.安装常用插件

- Chinese (Simplified) Language：中文（简体）语言包为 VS Code 提供本地化界面

- html CSS Support ：提供基础的语法知识编写辅助

- Open-In-Browser：在vscode中打开浏览器访问

- Prettier - Code formatter:格式化代码

- Beautify：美化代码

## HTML、CSS基础回顾

## HTML

1.什么是HTML？

html是超文本标记语言

2.常用的标签：

（1）内联元素：不可以设置宽高、盒子并在一行

- a
- span
- em
- b
- strong
- i

（2）块状元素：可以设置宽高、盒子独占一行

- div
- p
- ul
- li
- h1 - h6
- dl
- dt
- dd

(3)内联块状元素：能够设置width和height、默认排列方式并在一行

- input
- select
- textarea
- img

3.元素类型转换 display属性

- none   此元素不会被显示
- block   此元素将显示为块级元素
- inline   此元素会被显示为内联元素
- inline-block   此元素会被显示为内联块状元素

## CSS

1.什么是css？

css是层叠样式表

2.css权重

|            类型             | 权重 |
| :-------------------------: | :--: |
|         ! important         | 无穷 |
|          内联样式           | 1000 |
|             id              | 100  |
| class/属性选择器/伪类:hover |  10  |
|   标签选择器/伪元素:after   |  1   |
|           通配符*           |  0   |

! important  >   内联样式  >  id   >  class   >  标签选择器  >  通配符

3. 盒模型

   content+padding+border+margin

4. 浮动布局

   float: left/right/none /inherit:规定应该从父元素继承 float 属性的值

5. 定位布局

   定位模式position：相对定位relative、绝对定位absolute、固定定位fixed、默认定位static 

   边偏移：left、top、right、bottom

6. 弹性布局（移动端）


单行文本省略

```
width: 100px;
overflow: hidden;
text-overflow:ellipsis;
white-space: nowrap;
```

多行文本

```
display: -webkit-box;    作为弹性盒子模型显示
-webkit-box-orient: vertical; 设置弹性盒子 的子元素的排列方式
-webkit-line-clamp: 3;用来限制在一个块元素显示的文本的行数
overflow: hidden;  溢出隐藏
```



# JavaScript基础回顾

### JavaScript是什么

JavaScript 编程语言   流程控制

Netscape在最初将其脚本语言命名为LiveScript，后来Netscape在与Sun合作之后将其改名为JavaScript。JavaScript最初受Java启发而开始设计的，目的之一就是“看上去像Java”，因此语法上有类似之处，一些名称和命名规范也借自Java。JavaScript与Java名称上的近似，是当时Netscape为了营销考虑与Sun微系统达成协议的结果。Java和JavaScript的关系就像张雨和张雨生的关系，只是名字很像。

​	Java  服务器端的编程语言

​	JavaScript  运行在客户端(浏览器)的编程语言

> JavaScript是一种运行在***客户端*** 的***脚本语言*** 
> JavaScript的解释器被称为JavaScript引擎，为浏览器的一部分，广泛用于客户端的脚本语言，最早是在HTML（标准通用标记语言下的一个应用）网页上使用，用来给HTML网页增加动态功能。

### JavaScript最初的目的


最初的目的是为了处理表单的验证操作。

### JavaScript现在的意义(应用场景)

JavaScript 发展到现在几乎无所不能。

1. 网页特效
2. 服务端开发(Node.js)
3. 命令行工具(Node.js)
4. 桌面程序
5. App
6. 控制硬件-物联网
7. 游戏开发(cocos2d-js)

### JavaScript和HTML、CSS的区别

1. HTML：提供网页的结构，提供网页中的内容
2. CSS: 用来美化网页
3. JavaScript: 可以用来控制网页内容，给网页增加动态的效果

## JavaScript的组成

### ECMAScript - JavaScript的核心 

ECMA 欧洲计算机制造联合会

网景：JavaScript

微软：JScript

定义了JavaScript的语法规范  

JavaScript的核心，描述了语言的基本语法和数据类型，ECMAScript是一套标准，定义了一种语言的标准与具体实现无关

### BOM - 浏览器对象模型

一套操作浏览器功能的API

通过BOM可以操作浏览器窗口，比如：弹出框、控制浏览器跳转、获取分辨率等

### DOM - 文档对象模型

一套操作页面元素的API

DOM可以把HTML看做是文档树，通过DOM提供的API可以对树上的节点进行操作

## DOM

### 获取页面元素的常用方法

id,tagname,classs,name,querySelector

### DOM父子、兄弟节点及元素的使用方法

parentNode、childNodes、children、firstChild、lastChild......

### 动态创建元素（事件）

## BOM

1.window对象

2.对话框

3.页面加载

4.定时器

5.location跳转

location.href =“”

location.reload(true);

6.history历史

forward（）

go()

# 事件

### 事件是什么？

事件可以是浏览器行为，也可以是用户行为。

事件是发生在 HTML 元素上的事情。

当在 HTML 页面中使用 JavaScript 时， JavaScript 可以触发这些事件。

### 事件的实例：

- 鼠标被点击
- 页面完成加载
- 键盘被按下

### 常见的事件

| 事件        | 描述                         |
| :---------- | :--------------------------- |
| onchange    | HTML 元素改变                |
| onclick     | 用户点击 HTML 元素           |
| onmouseover | 用户在一个HTML元素上移动鼠标 |
| onmouseout  | 用户从一个HTML元素上移开鼠标 |
| onkeydown   | 用户按下键盘按键             |
| onload      | 浏览器已完成页面的加载       |
| onkeydown   | 按下按键时触发               |
| onmousedown | 按下鼠标按钮时触发           |

