# 使用说明

## 使用前提

这个工具依赖 [`vuepress`](https://vuepress.vuejs.org) 请先全局安装 `npm install -g vuepress`

## 使用

先把该工具 `clone` 下来到本地电脑 `git clone https://github.com/jjeejj/API-Edit-Manage-Tool`

项目目录下,内置了两个模块

1. guide 文件夹 是你正在看到的使用 *说明模块* 没有 *API*  接口格式
2. user 文件夹 是示例 *API* 格式的模块, 新建模块的可以参考该 *API* 书写的模式

新建一个模块步骤如下:

![new module](/apiManageTool.gif)

1. 先在项目根目录下,新建一个文件夹命名为你需要的模块的名称: 比如 `newModule`
2. 然后在该文件夹新建一个 `README.md` 文件,书写你的接口信息
3. 最后一步 把刚刚建立的模块添加到 **侧边栏** 导航中. 步骤: 打开 项目根目录下的`.vuepress/config.js` 文件, 在 `themeConfig` 配置项的 `sidebar` 配置中 添加你新建模块的名称 , 注意 前后都要有 斜线 `/`

> **API** 接口格式参照 `user` 模块下 `README.md` 文件中的内容

## 部署

对于部署的功能请参照 `vuepress` 的[官方文档](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)