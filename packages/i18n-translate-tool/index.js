#!/usr/bin/env node

const { program } = require('commander');
const path = require('path');
const fs = require('fs');
const chalk = require('chalk');
const { set, get } = require('lodash');
const inquirer = require('inquirer');
const esmRequire = require('esm')(module /*, options*/);
const { translateArray } = require('./translate');
const template = require('./template');
const packageJson = require('./package.json');

const log = console.log;

program
  .version(packageJson.version)
  .option('-f, --file [file]', '导入待翻译的文件以及目标语言')
  .option('-d, --dist [file]', '输出翻译后的结果，默认会覆盖源文件')
  .option(
    '-p, --param [translate key]',
    '取被翻译文件对象的 keys 或者 values',
    'keys',
  );

program.parse();

const options = program.opts();

let { file = process.argv[2], param, dist = '' } = options;

if (!file) {
  log(chalk.red('请输入待翻译的文件，如 itt --file 1.js'));
  return;
}

if (!['keys', 'values'].includes(param)) {
  log(chalk.red('param 参数 只能为 keys 或者 values'));
  return;
}
console.log(
  chalk.yellow(
    '因为是使用了Object.keys 或者 values 的方法，生成的文件的变量顺序会有变更',
  ),
);
console.log(
  chalk.yellow(
    '因为是使用了Object.keys 或者 values 的方法，生成的文件的变量顺序会有变更',
  ),
);
console.log(
  chalk.yellow(
    '因为是使用了Object.keys 或者 values 的方法，生成的文件的变量顺序会有变更',
  ),
);
console.log(chalk.green('获取到的配置如下：'), options);

const workingDir = process.cwd();

const targetFile = path.join(workingDir, file);
const distFile = path.join(workingDir, dist === '' ? file : dist);

const esmResult = esmRequire(targetFile);

const parseValues = async (currentValue, finalObj, moduleName = []) => {
  for (const key in currentValue) {
    console.log(chalk.bgCyan('当前翻译单词为：'), key);
    const value = currentValue[key];
    if (typeof value === 'string') {
      const englishRes = await translateArray([value]);
      const lastValue = get(finalObj, moduleName, {}) || {};
      const result = {
        ...lastValue,
        [key]: englishRes[0],
      };
      set(finalObj, moduleName, result);
    } else {
      // 是对象
      await parseValues(value, finalObj, [...moduleName, key]);
    }
  }
};

const main = async (res) => {
  const finalObj = {};
  const moduleKeys = Object.keys(res).reverse();
  console.log(chalk.blue(`被翻译的文件${file} ESM暴露的变量如下`), moduleKeys);
  if (param === 'values') {
    for (let index = 0; index < moduleKeys.length; index++) {
      const moduleName = moduleKeys[index];
      const currentValue = res[moduleName];
      await parseValues(currentValue, finalObj, [moduleName]);
      //   console.log("finalObj", finalObj);
      // 遍历结束了
      if (index === moduleKeys.length - 1) {
        let str = '';
        for (const item in finalObj) {
          if (item === 'default') {
            str += template.getDefaultTemplate(finalObj[item]);
          } else {
            str += template.getVarTemplate(finalObj[item], item);
          }
          str += '\n'.repeat(2);
        }
        console.log(chalk.green('翻译完毕，内容如下，请检查'), str);
        console.log(chalk.bgRed('即将写入文件'), distFile);
        const isExistFile = fs.existsSync(distFile);
        // 目标文件已经存在 并且不覆盖源文件文件
        if (isExistFile && dist !== '') {
          const result = await inquirer.prompt({
            type: 'confirm',
            name: 'confirm',
            default: true,
            message: `目标文件${dist}已经存在，是否覆盖(y: 覆盖, n: 追加)`,
          });
          if (result.confirm) {
            fs.writeFileSync(distFile, str, 'utf8');
          } else {
            try {
              fs.appendFileSync(distFile, str);
            } catch (error) {
              console.error(error);
            }
          }
        } else {
          fs.writeFileSync(distFile, str, 'utf8');
        }
        console.log(chalk.bgGreen('写入文件成功'), distFile);
      }
    }
  } else {
    for (let index = 0; index < moduleKeys.length; index++) {
      const moduleName = moduleKeys[index];
      const currentValue = res[moduleName];
      const translateValue = Object[param](currentValue);
      const englishRes = await translateArray(translateValue);
      const resultObj = translateValue.reduce((prev, curr, index) => {
        prev[curr] = englishRes[index];
        return prev;
      }, {});
      finalObj[moduleName] = resultObj;
      // 遍历结束了
      if (index === moduleKeys.length - 1) {
        let str = '';
        for (const item in finalObj) {
          if (item === 'default') {
            str += template.getDefaultTemplate(finalObj[item]);
          } else {
            str += template.getVarTemplate(finalObj[item], item);
          }
          str += '\n'.repeat(2);
        }
        console.log('翻译完毕，内容如下，请检查', str);
        console.log('即将写入文件', distFile);
        const isExistFile = fs.existsSync(distFile);
        // 目标文件已经存在 并且不覆盖源文件文件
        if (isExistFile && dist !== '') {
          const result = await inquirer.prompt({
            type: 'confirm',
            name: 'confirm',
            default: true,
            message: `目标文件${dist}已经存在，是否覆盖(y: 覆盖, n: 追加)`,
          });
          if (result.confirm) {
            fs.writeFileSync(distFile, str, 'utf8');
          } else {
            try {
              fs.appendFileSync(distFile, str);
            } catch (error) {
              console.error(error);
            }
          }
        } else {
          fs.writeFileSync(distFile, str, 'utf8');
        }
      }
    }
  }
};

main(esmResult);
