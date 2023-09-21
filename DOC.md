# 改造为 lerna + Ts + ESM 的过程

## 配置 eslint

官网：https://eslint.org/docs/latest/use/getting-started

安装：

```shell
npm init @eslint/config
pnpm i @typescript-eslint/eslint-plugin@latest @typescript-eslint/parser@latest eslint@latest -Dw
```

运行测试：

```shell
npx eslint packages
```

## 配置 prettier

安装：

```shell
pnpm i prettier -Dw
```

运行检查：

```shell
npx prettier --check packages
```

## 安装 eslint-config-prettier 解决 eslint 和 prettier 冲突

官网：https://github.com/prettier/eslint-config-prettier#installation

安装：

```shell
pnpm i eslint-config-prettier -Dw
```

在 .eslintrc.js 中配置：

```json
{
  "extends": ["some-other-config-you-use", "prettier"]
}
```

## 安装 husky 和 lint-staged

文档：https://prettier.io/docs/en/install#git-hooks

安装：

```shell
pnpm i husky lint-staged -Dw
npx husky install
```

在 package.json 中配置：

```json
"husky": {
  "hooks": {
    "pre-commit": "lint-staged"
  }
},
"lint-staged": {
  "*.{js,jsx,ts,tsx}": [
    "eslint --fix",
    "prettier --write",
    "git add"
  ]
}
```

## 配置 commit 模板

https://juejin.cn/post/6934292467160514567?searchId=20230921103616876212AA58AE9D712DEE#heading-6
