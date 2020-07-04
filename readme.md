# Ant Design 集成 UEditor

Ant Design 集成 UEditor 和 秀米，以及对接 FeathersJS 服务。

## 基本配置

* 前端：
    - [Ant-Design-Pro V4](https://pro.ant.design/);
    - [ifanrx/react-ueditor](https://github.com/ifanrx/react-ueditor);
    - [UEditor](https://github.com/fex-team/ueditor/releases);
    - [秀米插件](https://xiumi.us/connect/ue/);
* 后端：
    - FeathersJS/Express;

## 前端

### 创建 Ant Design Pro 工程

使用 umi 创建一个 Ant Design Pro V4 / antd4 的工程即可

### 集成 ifanrx/react-ueditor

``` bash
npm install ifanrx-react-ueditor
```

### 导入 ueditor 官方包

- 去 [UEditor的GitHub发行页面](https://github.com/fex-team/ueditor/releases)下载任意最新版本，放置到 Ant Design Pro 工程的`/public`目录下，如`/public/plugins/ueditor`；
- 最好不要使用 ifanrx-react-ueditor 库中包含的 ueditor 包，它经过了魔改，对`秀米`的样式有兼容性问题；
- 参照 ifanrx-react-ueditor 的说明使用 ReactUeditor；

### 集成秀米

### 编写前端打包部署脚本

## 后端

### 创建 FeathersJS 工程

### 实现 ueditor 上传接口

### 实现鉴权
