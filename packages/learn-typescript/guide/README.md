# learn-typescript-base
- [官方文档](https://www.typescriptlang.org/docs/)
- [中文文档](https://www.tslang.cn/docs/handbook/basic-types.html)
- [tsconfig参考1](http://json.schemastore.org/tsconfig)
- [tsconfig参考2](https://aka.ms/tsconfig)
  
## vscode 设置自动编译快捷键
```shell
// keybindings.json
// 将键绑定放在此文件中以覆盖默认值
[
    {
        "key": "cmd+e", // 你自定义的快捷键
        "command": "workbench.action.tasks.runTask", // 固定的
        "args": "tsc: build - tsconfig.json", // 你任务的名字，task.json 中的 label
        "when": "editorTextFocus" // 当你按快捷键的时候
    }
]
```

## 生成 tsconfig.json
```shell
tsc --init
```

## 安装 typescript
```shell
pnpm i -D typescript
```

## 实时监控ts文件并编译
```shell
tsc -w
```