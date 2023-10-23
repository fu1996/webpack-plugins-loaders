const { glob } = require('glob');
const path = require('path');
const util = require('util');
const { validate } = require('schema-utils');
const exec = util.promisify(require('child_process').exec);
const schema = require('./schema.json');

/** @typedef {import("webpack").Compiler} Compiler */

class UploadJfrogPlugin {
  constructor({
    jfrogUserName,
    jfrogUserPassword,
    jfrogPath,
    publicPath = '',
    globRule = '**/*.{js.map, css.map}',
    debug = false,
  }) {
    validate(
      schema,
      { jfrogUserName, jfrogUserPassword, jfrogPath, publicPath },
      {
        name: this.constructor.name,
      },
    );
    this.jfrogUserName = jfrogUserName;
    this.jfrogUserPassword = jfrogUserPassword;
    this.jfrogPath = jfrogPath;
    this.publicPath = publicPath;
    this.globRule = globRule;
    this.debug = debug;
  }
  /**
   * Apply the plugin
   * @param {Compiler} compiler compiler instance
   * @returns {void}
   */
  apply(compiler) {
    compiler.hooks.afterEmit.tapPromise(this.constructor.name, async () => {
      console.log('Upload Jfrog Start');
      await UploadJfrogPlugin.startUpload({
        jfrogUserName: this.jfrogUserName,
        jfrogUserPassword: this.jfrogUserPassword,
        jfrogPath: this.jfrogPath,
        publicPath: this.publicPath,
        targetPath: compiler.options.output.path,
        globRule: this.globRule,
        log: this.log.bind(this), // this 的理解
      });
    });
  }
  log(...message) {
    if (this.debug) {
      // 还是 this 的理解
      console.log.apply(console, message);
    }
  }
  static async uploadFile({
    filePath,
    fullPath,
    jfrogUserName,
    jfrogUserPassword,
    jfrogPath,
    publicPath,
    log,
  }) {
    const fileName = path.basename(filePath);
    const command = `curl -u ${jfrogUserName}:${jfrogUserPassword} -X PUT "${jfrogPath}${publicPath}/${filePath}" -T ${fullPath}`;
    log('当前上传的文件是', fileName, 'curl 命令为', command);
    return exec(command, { stdout: 'ignore' });
  }
  static async startUpload({
    jfrogUserName,
    jfrogUserPassword,
    jfrogPath,
    publicPath,
    globRule,
    targetPath,
    log,
  }) {
    const files = await glob(globRule, {
      cwd: targetPath,
    });
    if (Array.isArray(files) && files.length === 0) {
      log('没有找到匹配的文件');
      return;
    }
    log('要上传的文件列表：', files);
    const allPromise = files.map((filePath) => {
      const fullPath = path.join(targetPath, filePath);
      log('fullPath', filePath, fullPath);
      return UploadJfrogPlugin.uploadFile({
        filePath,
        fullPath,
        jfrogUserName,
        jfrogUserPassword,
        jfrogPath,
        publicPath,
        log,
      });
    });
    await Promise.all(allPromise);
    log('info 开始删除 SourceMap 目录');
    await exec(`rm -rf ${targetPath}`);
    log('success 结束删除 SourceMap 目录');
  }
}

module.exports = UploadJfrogPlugin;
