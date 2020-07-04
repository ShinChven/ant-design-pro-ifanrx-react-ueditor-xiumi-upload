# Ant Design 集成 UEditor

Ant Design 集成 UEditor 和 秀米，以及对接 FeathersJS 服务。

## 基本配置

* 前端：
    - [Ant-Design-Pro V4](https://pro.ant.design/);
    - [ifanrx/react-ueditor](https://github.com/ifanrx/react-ueditor);
    - [UEditor](https://github.com/fex-team/ueditor/releases);
    - [秀米插件](https://xiumi.us/connect/ue/);
* 后端：
    - [Express](https://expressjs.com/);
    - [ueditor node 库](https://www.npmjs.com/package/ueditor);

## 前端

### 创建 Ant Design Pro 工程

使用 umi 创建一个 Ant Design Pro V4 / antd4 的工程即可

```bash
mkdir antd-pro && cd antd-pro
npm create umi
npm install
npm start
```

### 集成 ifanrx/react-ueditor

``` bash
npm install ifanrx-react-ueditor
```

### 导入 ueditor 官方包

- 去 [UEditor的GitHub发行页面](https://github.com/fex-team/ueditor/releases)下载任意最新版本，放置到 Ant Design Pro 工程的`/public`目录下，如`/public/plugins/ueditor`；
- 最好不要使用 ifanrx-react-ueditor 库中包含的 ueditor 包，它经过了魔改，对`秀米`的样式有兼容性问题；
- 参照 ifanrx-react-ueditor 的说明使用 ReactUeditor；

### 集成秀米

#### 添加秀米

- 参照[秀米插件文档](https://xiumi.us/connect/ue/)添加文件和配置；
- 重载 ifanrx-react-ueditor 添加秀米插件；

#### 为什么秀米可以打开，却不能把内容返回到 ueditor 上？

- 请在完成之后把程序部署到 https 的域名下使用，否则会员秀米的服务端拦截。

## 后端

### 创建 Express 工程

```bash
mkdir server && cd server
npx express-generator
npm install
```

### 实现 ueditor 上传接口




### 实现鉴权
