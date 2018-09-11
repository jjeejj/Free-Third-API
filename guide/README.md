# 使用说明

## 使用前提

该文档 由 [API-Edit-Manage-Tool](https://github.com/jjeejj/API-Edit-Manage-Tool) 提供模版服务, 下面为这个模版服务 的使用说明文档

这个工具依赖 [`vuepress`](https://vuepress.vuejs.org) 请先全局安装 `npm install -g vuepress`

## 使用

先把该工具 `clone` 下来到本地电脑 `git clone https://github.com/jjeejj/API-Edit-Manage-Tool`

项目目录下,内置了两个模块

1. guide 文件夹 是你正在看到的使用 *说明模块* 没有 *API*  接口格式
2. user 文件夹 是示例 *API* 格式的模块, 新建模块的可以参考该 *API* 书写的模式

新建一个模块步骤如下:

<img :src="$withBase('/apiManageTool.gif')" alt="foo">

1. 先在项目根目录下,新建一个文件夹命名为你需要的模块的名称: 比如 `newModule`
2. 然后在该文件夹新建一个 `README.md` 文件,书写你的接口信息
3. 最后一步 把刚刚建立的模块添加到 **侧边栏** 导航中. 步骤: 打开 项目根目录下的`.vuepress/config.js` 文件, 在 `themeConfig` 配置项的 `sidebar` 配置中 添加你新建模块的名称 , 注意 前后都要有 斜线 `/`
4. 编写完成之后 执行 `npm run dev` ，查看预览效果, 执行 `npm run build` 编译成为静态文件

> **API** 接口格式参照 `user` 模块下 `README.md` 文件中的内容

> 对于文档中的静态资源, 可以放到 `.vuepress/public` 文件夹下,然后 在 `md` 文件中这样引用的 `<img :src="$withBase('/apiManageTool.gif')" alt="apiManageTool">` 对于 变量 `withBase` 是在 `.vuepress/config.js` 配置中的 部署基础路径

> 在本地进行开发的时候, 把 `.vuepress/config.js` 配置中的 `base` 改为 `\` 即可。 部署到 `github` 上时改为对应的 `/<REPO>/` 对应仓库的名称

> 若内置的 `user` 模块对你没有作用,可以在你书写完 你自己的 `API` 信息后, 把 `user` 模块删除

## 上传到仓库地址

1. 移除 `clone` 远程地址 `git remove origin`

2. 添加你要上传的仓库地址 `git remote add <you git repo url>`

3. 关联推送到原创仓库 `git push --set-upstream origin master`

4. 之后的每次修改正常 `push` 到远程仓库就可以了


## 部署

对于部署的功能请参照 `vuepress` 的[官方文档](https://vuepress.vuejs.org/zh/guide/deploy.html#github-pages)