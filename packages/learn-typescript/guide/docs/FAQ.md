# 安装
```shell
pnpm i -D typescript && \
pnpm i -D concurrently && \
pnpm i -D serve && \
pnpm i -D rimraf
```

# FAQ
- 因为tsc编译后的文件，import路径不会自动添加.js后缀，所以源代码引入的时候直接写成js，不要省略后缀