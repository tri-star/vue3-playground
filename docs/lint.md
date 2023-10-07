# ESLint + Prettier 導入メモ

## 設定

```shell
npm install --save-dev \
  eslint \
  eslint-plugin-vue \
  @typescript-eslint/parser \
  @typescript-eslint/eslint-plugin \
  prettier \
  npm-run-all
```

.eslintrc.cjs

```js
module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended-type-checked',
    'prettier',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  plugins: ['@typescript-eslint'],
  root: true,
}
```

.vscode/settings.json

```json
{
  "eslint.validate": ["javascript", "javascriptreact", "vue"]
}
```

.prettierrc.js

```js
/** @type {import("prettier").Config} */
const config = {
  trailingComma: 'es5',
  tabWidth: 2,
  semi: false,
  singleQuote: true,
}

export default config
```

package.json

```jsonc
{
  //...
  "lint:eslint": "eslint --ext .ts,.vue",
  "lint:prettier": "prettier --check .",
  "lint": "run-s lint:*",
  "format:eslint": "eslint --ext .ts,.vue --fix",
  "format:prettier": "prettier --write .",
  "format": "run-s format:*"
  //...
}
```

## 参考

- eslint-vue
  - https://eslint.vuejs.org/user-guide/#usage
- typescript-eslint
  - https://typescript-eslint.io/getting-started
  - https://typescript-eslint.io/linting/configs
