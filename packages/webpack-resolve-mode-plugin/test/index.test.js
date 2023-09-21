const { ResolverFactory, CloneBasenamePlugin } = require('enhanced-resolve');
const { Volume } = require('memfs');
const ResolverModePlugin = require('..');

test('it should get h5 file', () => {
  const fileSystem = Volume.fromJSON(
    {
      '/index.js': '',
      '/index.h5.js': '',
      '/foo.jsx': '',
      '/foo.h5.jsx': '',
      '/foo1.jsx': '',
    },
    '/',
  );
  const resolver = ResolverFactory.createResolver({
    fileSystem: fileSystem,
    extensions: ['.js', '.jsx'],
    modules: '/',
    useSyncFileSystemCalls: true,
    plugins: [
      new ResolverModePlugin({
        excludes: /node_modules/, // 排除的目录
        includeFileSuffix: ['.js', '.jsx'], // 参与条件渲染的文件后缀
        mode: 'h5', // 目标 模式：根据此模式 自动打包
      }),
    ],
  });
  // test js
  expect(resolver.resolveSync({}, '/', '/index')).toEqual('/index.h5.js');
  // test jsx
  expect(resolver.resolveSync({}, '/', '/foo')).toEqual('/foo.h5.jsx');
  expect(resolver.resolveSync({}, '/', '/foo.h5')).toEqual('/foo.h5.jsx');
  // test no h5
  expect(resolver.resolveSync({}, '/', '/foo1')).toEqual('/foo1.jsx');
});
