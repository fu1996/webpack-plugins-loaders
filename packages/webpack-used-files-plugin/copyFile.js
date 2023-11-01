const fs = require('fs');
const path = require('path');

const allFile = fs.readFileSync(path.join(__dirname, './file.txt'), 'utf8');
console.log(Array.from(new Set(allFile.split(','))).length);

const targetPath = path.join(process.cwd(), './newSrc');

Array.from(new Set(allFile.split(','))).forEach((filePath, index) => {
  if (
    filePath &&
    !filePath.includes('node_modules') &&
    !filePath.startsWith('data:')
  ) {
    const resolvePath = path.relative(process.cwd(), filePath);
    const targetFilePath = path.join(targetPath, '/' + resolvePath);
    fs.mkdirSync(path.dirname(targetFilePath), { recursive: true });
    console.log(filePath, targetFilePath);
    fs.copyFileSync(filePath, targetFilePath);
  }
});

// 处理完以后再配合 depCheck 实现对无用依赖的删除 https://www.npmjs.com/package/depcheck
