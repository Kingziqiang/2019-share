## 一.全局包
- npm node package manager  (包) package.json 包就是多个文件的集合

- npm 中使用的时候 可以两种 全局包（不能在代码中使用 只能在命令中使用） 、 本地包(只能在当前项目中使用)

npm 在path中,所以全局安装的模块，会连接到npm下 所以也可以直接使用
C:\Users\test1\AppData\Roaming\npm\http-server -> C:\Users\test1\AppData\Roaming
\npm\node_modules\http-server\bin\http-server

C:\Users\test1\AppData\Roaming\npm\hs -> C:\Users\test1\AppData\Roaming\npm\node
_modules\http-server\bin\http-server

### nrm npm nvm (淘宝源)  
```
npm install nrm -g 
nrm ls 
nrm use taobao/cnpm/npm
```

### 创建自己的全局包
- package.json 命令生成
- npm init 

npm link 链接，在全局的npm包下做一个快捷键 

提示全局命令执行时对应的脚本, 脚本必须增加`#! /usr/bin/env node`
```json
"bin": {
    "pack-zf": "./bin/www.js"
}
```



## 本地包
- 在代码中使用的 只在开发中使用 --save-dev(-D) / --save(-S)
默认情况下安装模块是 --save

```bash
npm install jquery
```

- dependencies (npm install --production)
- devDependencies

> 可以通过 @1.0.0 方式来修改版本
- peerDependencies 同等依赖  vue 2.0 vue-template-complier 2.0  提示用户需要安装
- bundledDependencies 打包时的依赖
- 可选依赖optionalDependencies

三个版本都代表什么 2 项目的整体更新 0 增加新功能 0 bug  
一般不要手动更改版本  npm version
^2.0.0  以开头
~2.1.0  可以改最后一位，第二位不能超过1
>=2.1.0
<=2.0.0
1.0.0

发布之前 不会直接 2.0.0
alpha beta rc

## scripts脚本
- npm run 的功能是将当前文件夹下的node_modules的bin 目录放到path环境中 如果run后面有命令 会执行对应的命令,这个执行的命令在.bin目录下可以直接直接

## npx的用法 （npm run/npx）
- 5.2新出的功能为了方便 但是无法记录脚本

## yarn
- 快 但是不能和npm混用 
- yarn add / yarn remove

## 发包
- 先进入到要发包的文件夹中 
- 配置忽略文件
- 查看对应版本和名字
- 切换到官方中发布 `nrm use npm`


## 2.node中核心模块(util/events)

## 3.Buffer的应用

## 4.fs的应用及流