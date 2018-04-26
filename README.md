This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## A React Chat App.

## 慕课网imooc-react-chat.

### mongodb配置(windows)

- mongodb安装目录下如：D:\mongodb 创建data\db文件夹

- 创建logs\mongo.log文件

- 创建mongod.conf文件，编写mongodb配置文件

  - dbpath=D:\mongodb\data\db  数据存放文件路径

  - logpath=D:\mongodb\logs\mongo.log  log文件存放路径

  - logappend=true  以追加的方式记录日志

  - port=27017  启动端口

  - quiet=true  过滤无用信息

- 已管理员身份打开cmd(C:\Windows\System32\cmd.exe右键管理员身份打开)

- cd到mongodb安装目录的bin目录下

- 输入mongod --config D:\mongodb\mongod.conf --install serviceName "MongoDB",如果没有任何提示表示成功，这一步需要以管理员身份打开cmd

- net start MongoDB 显示已启动

- 输入mongo可以查看链接地址等信息
   
- net stop MongoDB 可关闭服务