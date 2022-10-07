### tsconfig中配置解释
#### outDir: 输出目录
#### sourceMap: 是否包含可以用于debug的sourceMap
#### strict: 是否使用严格模式
#### module: 采用模块系统
#### moduleResolution: 如何处理模块
#### target: 编译输出目标ES版本
#### allowSyntheticDefaultImports: y允许哦那个没有设置默认导出的模块中默认导入
#### isolatedModules: 将每个文件作为单独的模块
#### experimentalDecorators: 启用装饰器
#### emitDecoratorMetadata: 启用设计类型元数据
#### noImplicitAny: 在表达式和声明上有隐含的any类型时报错
#### noImplicitReturns: 不是函数的所有返回路径都有返回值时报错
#### importHelpers: 从tslib导入外部帮助库，比如__extends
#### listFiles: 编译过程中打印文件名
#### removeComments: 移除注释
#### allowJs: 允许编辑js文件
#### baseUrl: 解析非相对模块名的基准目录

### 注意
#### 在配置解析ts文件时一定要有tsconfig.json文件，并且需要在webpack.config.js文件中配置rules（ts-loader）
#### 可以添加tslint.json文件对ts进行代码规范校验
#### 在使用scss或sass时需要在webpack.config.js文件中配置rules（vue-style-loader,css-loader,sass-loader）
#### setup语法糖已经可以在vue文件中使用

### 未完成
#### 打包后发布(了解babel.config.js是怎么起作用的)
#### 自己封装axios
#### 自己配置路由
#### 封装hooks

