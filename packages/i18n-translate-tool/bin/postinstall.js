#!/usr/bin/env node
const chalk = require('chalk');

function main() {
    console.log(chalk.green('安装成功了哦，输入 itt --help 开始工作吧'));
    const m1 = '欢迎使用I18N翻译工具，如果该工具帮助了您，请点一个⭐️支持我吧';
    const git = 'Github: https://github.com/fu1996/i18n-translate-tool';
    console.log(chalk.yellow(m1));
    console.log(chalk.yellow(git));
}

main();