# react实现伪百度首页

### 实现要求：
1.使用react开发框架   
2.响应式布局（flex实现）  
3.有一个后端服务（json-server/node两种搭建服务器方式实现），提供http协议的访问接口（proxy代理跨域实现)   
4.网页中的内容可以从后端服务中获取   
（1）[新闻api](http://c.3g.163.com/nc/article/list/T1467284926140/0-20.html)   
（2）[百度热搜api](https://api.geekzwzs.cn/resou)   
（3）[搜索框预览结果api](https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=a)  
5."百度一下"的功能. 
      
            
### 目录结构
src     
|---components---------------可复用的组件库    
---------|---Head-----------------顶部元素    
---------|---News-----------------底部新闻、我的关注、导航    
---------|---SearchBox------------搜索框   
---------|---Trending_Topic-------热搜栏   
---------|---unkonw---------------测试为后端服务提供的http协议接口   
                  
            
### 安装与运行程序
克隆项目：        
```
> $ git clone https://github.com/Avril131/Baidu-Homepage.git
```
分别进入server目录和Baidu-Homepage目录下安装依赖包：
```
> $ npm install
```
在server目录或server-node目录下启动服务端：                   
（1）如果是在server目录下，则执行
```
> $ json-server db.json -w -p 3000
```
（2）如果是在server-node目录下，则执行
```
> $ node index.js
```
在Baidu-headpage目录下执行
```
> $ npm start
```
执行完操作后，打开浏览器运行项目，后端服务端口为```http://localhost:3000```
