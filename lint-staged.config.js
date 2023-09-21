module.exports = {
  // 校验eslint和prettier错误 并自动修复 stylelint最新版本不支持自动修复
  '*.{ts,tsx}': ['eslint --fix', 'prettier --write'],
  '*.ts?(x)': () => ['tsc -p ./tsconfig.json --noEmit'],
  '*.{html,css,less,md,json,js}': ['prettier --write'],
};
