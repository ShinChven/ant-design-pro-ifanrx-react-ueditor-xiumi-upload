# Ant Design 集成 UEditor

- Ant Design 集成 UEditor 和 秀米，以及对接上传接口服务；
- 实现过程请参考 commits；

## 基本配置

* 前端：
    - [Ant-Design-Pro V4](https://pro.ant.design/);
    - [ifanrx/react-ueditor](https://github.com/ifanrx/react-ueditor);
    - [UEditor](https://github.com/fex-team/ueditor/releases);
    - [秀米插件](https://xiumi.us/connect/ue/);
* 后端：
    - [Express](https://expressjs.com/);
    - [ueditor node 库](https://www.npmjs.com/package/ueditor);

## 试用本工程

1. 安装打包 antd-pro：`cd antd-pro && npm install && npm run build`；
2. 部署 antd-pro 到 express 工程：`mv antd-pro/dist server/public`；
3. 安装运行 express 工程：`cd server && npm install && npm start`;
4. 从浏览器中预览：`http://localhost:3000`;


** 注意：需要将工程发布到 https 的生产环境中，才能从`秀米`编辑器插件中取回编辑的内容； **

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

- 请在完成之后把程序部署到 https 的域名下使用，否则会被秀米的服务端拦截。

## 后端

### 创建 Express 工程

```bash
mkdir server && cd server
npx express-generator
npm install
```

### 实现 ueditor 上传接口

- 在 express 工程中安装 node ueditor 库：`cd server && npm install ueditor`；
- 实现上传的 middleware 接口；
- 配置 Ant Design Pro 工程中配置服务端地址；
- 将 Ant Design Pro 打包，并将打包生成 dist 文件夹替换 express 工程中的 public 文件夹；
- 在 express 工程中试用 ueditor 的上传功能： `http://localhost:3000`；


### 关于鉴权

- 使用 express-session 最方便；
- 如果使用 token 鉴权，可以改成动态设置 UEditor 的 serverUrl，在 URL 中包含 token；
