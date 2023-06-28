# package.json 各字段讲解
[package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json)
[nodejs Package.json](https://nodejs.org/dist/latest-v20.x/docs/api/packages.html#exports)

# name (必填)
包名，必须是小写和一个单词，并且可能包含连字符和下划线。

# version (必填)
版本

### main
[main package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#main)
[main node.js](https://nodejs.org/api/packages.html#main)

main 是最为基础且古老的入口字段，由 Node 与 npm 定义。当 main 字段都不存在时，通常会使用 index.js 作为入口。
- 指向编译后生成的ES5版本的代码
- 定义了 npm 包的入口文件，browser 环境和 node 环境均可使用


```shell
{
  "main": "./index.js"
}
```
### module
module 字段提供符合 ESM 规范的模块入口。
2015年 ESM 规范诞生，使用 CommonJS 的模块规范 Node 开始向 ESM 规范过渡，社区出现了 module 字段的提案：[A Proposal for Node.js Modules](https://link.zhihu.com/?target=https%3A//github.com/dherman/defense-of-dot-js/blob/master/proposal.md)。
但 Node 却并未采纳，而是使用了 { "type": "module" } 代替。不过，打包工具普遍支持了该字段。只是实现的与提案有很大差距，实际情况是，module 和 main 一样对待，只是优先级更高。

- 支持Tree Shaking
- 打包工具（webpack 或 rollup）在打包时，如果 npm 包存在 module 字段，会优先使用。如果没找到对应的文件，则会使用 main 字段，并按照 CommonJS 规范打包。
- 定义 npm 包的 ESM 规范的入口文件，browser 环境和 node 环境均可使用
  

```shell
{
  "module": "./index.esm.js"
}
```
### browser
[browser package.json](https://docs.npmjs.com/cli/v9/configuring-npm/package-json#browser)
browser 字段提供对浏览器环境更友好的模块入口。
来自于提案：[package-browser-field-spec](https://link.zhihu.com/?target=https%3A//github.com/defunctzombie/package-browser-field-spec)。社区普遍认可、并实现该方案，然后在2018年才被 npm 吸收到文档（npm 除了文档中提到一句话以外，似乎并没有做任何工作）。

定义 npm 包在 browser 环境下的入口文件

```shell
{
  "browser": "./index.browser.js"
}
```
browser(字符串) 将代替 main, module。
另一种对象的写法，键名(Key)匹配被访问的路径，键值(Value)则是实际路径：
```shell
{
  "main": "./index.js",
  "module": "./index.mjs",
  "browser": {
    "./index.js": "./index.browser.js",
    "./index.mjs": "./index.browser.esm.js"
  }
}
```
browser(对象) 不仅可以作为入口文件的别名，也可以用于包内部依赖的别名，比如：
```shell
{
  "main": "./index.js",
  "browser": {
    "axios": "./axios.js",
    "./dom.js": "./dom.browser.js",
    "log": false
  }
}
```
当 ./index.js 文件使用到这三个依赖时： - axios 模块解析到本地文件 ./axios.js。 - ./dom.js 本地文件解析到另一个本地文件 ./dom.browser.js。 - 禁用 log 模块。

### exports
2018年，Node 社区出现了一个更为现代的提案：[proposal-pkg-exports](https://link.zhihu.com/?target=https%3A//github.com/jkrems/proposal-pkg-exports/)，在 Node v12.7.0 版本实现。

说来话长，建议直接看 [Module Packages | Node.js Documentation](https://link.zhihu.com/?target=https%3A//nodejs.org/api/packages.html%23packages_package_entry_points) 或 [Package exports | Webpack](https://link.zhihu.com/?target=https%3A//webpack.docschina.org/guides/package-exports/)。

exports 字段允许通过访问路径、运行环境(node/browser 等)、模块类型(require/import/types/css 等)组合确定最终的入口文件。

exports定义了自定义导出规则，可以理解为路径映射
"exports"是"main"替代品，允许定义多个入口点，支持环境之间的条件入口解析，并防止除“导出”中定义的入口点之外的任何其他入口点。这种封装允许模块作者为他们的包明确定义公共接口。
```text
{
   "exports": {
        ".": {
            "import": {
                // 按照定义的顺序依次匹配
                "node": "./src/ems/index.node.mjs", // node xxx.js 会使用这个入口，cjs和mjs都会使用这个入口
                "default": "./src/ems/index.mjs" // 当没有其他定义时使用这个入口文件
            },
            "require": {
                "default": "./src/cjs/index.cjs"
            }
        },
        "./a": {
            "import": "./src/ems/a.mjs",
            "require": "./src/cjs/a.cjs"
        }
    },
}
```

- 对于以当前支持的Node.js版本为目标的新程序包，建议使用"exports"字段。
- 对于支持Node.js 10及更低版本的程序包，"main"字段是必需的。
- 如果同时定义了"exports"和"main"，则在支持的Node.js版本中，"exports"字段优先于"main"。
- 优先级最高
- 支持默认导出，子路径导出
可以理解为针对各种规范定义暴露的入口及模块，更加细化的main


### type
```text
1. module
项目中的.js文件会被当做es模块处理

2. commonjs
项目中的.js文件当做commonjs模块处理
```
- 包被依赖的时候，以哪种规范被处理是通过type字段决定的
- 没有定义type,默认按照commonjs模块处理
- 建议强行指定type字段,否则不知道包导出的代码是什么规范的
- 无论type为何值, .mjs的文件都按照es模块来处理，.cjs的文件都按照commonJs模块来处理

EsModule规范的文件可以加载cjs和ems
Commonjs规范的文件只可以加载cjs

### types

### Tree Shaking
Tree Shaking，大致理解为：在编译打包时，去除没有用到的代码。
Tree Shaking 是通过打包工具来实现的（ES模块是前提）



### 最佳实践
环境：
    nodejs
    browser

规范：
 mjs
 cjs

开发的时候肯定使用ems规范开发，然后打包成支持各种规范的代码
建议使用exports+main+module定义
- main 定义cjs
- module 定义ems
- exports 分别定义
