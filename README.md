# pay-gateway-frontend

## 主要技术栈

- 框架：[Vue3](https://vuejs.org/)
- 路由：[Vue-Router](https://router.vuejs.org/)
- 状态管理：[Pinia](https://pinia.vuejs.org/)
- 构建工具：[Vite](https://vitejs.dev/)
- 组件库：[Naive UI](https://www.naiveui.com/zh-CN/os-theme)

## 项目

### 安装

```sh
pnpm install
```

### 启动

```sh
pnpm run dev
```

### 构建

```sh
pnpm run build
```

### 代码检查

```sh
pnpm run lint
```

### scripts 介绍

```json
"scripts": {
   // 初始化husky
   "prepare": "husky install",
   // 本地运行项目
   "dev": "vite",
   // 类型检查与打包
   "build": "run-p type-check build-only",
   // 打包后预览
   "preview": "vite preview",
   // 仅打包
   "build-only": "vite build",
   // 类型检查
   "type-check": "vue-tsc --noEmit",
   // 代码格式检查
   "lint": "npm run lint:script && npm run lint:style",
   "lint:script": "eslint . --ext .vue,.js,.jsx,.cjs,.mjs,.ts,.tsx,.cts,.mts --fix --ignore-path .gitignore",
   "lint:style": "stylelint --fix \"src/**/*.{css,scss}\"",
   // 格式化
   "format": "prettier --write src/"
},
```

## 开发工具

vscode

建议安装插件：

- ESLint
- Stylelint
- Prettier
- Volar

建议开启的配置项：

```json
{
  // 代码自动格式化
  "editor.formatOnSave": true,
  // 防止与stylelint冲突
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"],
  "eslint.validate": ["js", "ts", "jsx", "tsx", "cjs", "mjs", "cts", "mts", "vue"],
  "editor.codeActionsOnSave": {
    "source.fixAll": true, // 开启自动修复
    "source.fixAll.stylelint": true // 开启stylelint自动修复
  }
}
```

## 提交规范

- [约定式提交](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
