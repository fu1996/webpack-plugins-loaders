const { validate } = require('schema-utils');
const schema = require('../schema.json');

test('validate mode options', () => {
  // 校验失败自动报错
  validate(
    schema,
    {
      mode: '',
      excludes: /node_modules/,
      includeFileSuffix: ['.js'],
      debug: false,
    },
    {
      name: 'WebpackResolverModePlugin',
    },
  );
  // 校验失败自动报错
  try {
    validate(
      schema,
      {
        mode: 1,
        excludes: /node_modules/,
        includeFileSuffix: ['.js'],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
  } catch (error) {
    expect(error.instancePath).toEqual('/mode');
  }
});

test('validate excludes options', () => {
  // 校验 excludes 的 正确格式
  try {
    // 正则
    validate(
      schema,
      {
        mode: '',
        excludes: /node_modules/,
        includeFileSuffix: ['.js'],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
    // 字符串
    validate(
      schema,
      {
        mode: '',
        excludes: 'node_modules',
        includeFileSuffix: ['.js'],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
    // 数组
    validate(
      schema,
      {
        mode: '',
        excludes: ['node_modules', /node_modules/],
        includeFileSuffix: ['.js'],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
  } catch (error) {
    console.log('error', error);
  }
  // 下面测试错误的
  try {
    // 校验失败自动报错
    validate(
      schema,
      {
        mode: '',
        excludes: 222,
        includeFileSuffix: ['.js'],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
  } catch (error) {
    expect(error.instancePath).toEqual('/excludes');
  }
});

test('validate includeFileSuffix options', () => {
  // 校验 includeFileSuffix 的 正确格式
  try {
    // array
    validate(
      schema,
      {
        mode: '',
        excludes: /node_modules/,
        includeFileSuffix: ['.js'],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
  } catch (error) {
    console.log('error', error);
  }
  try {
    // 校验失败自动报错
    validate(
      schema,
      {
        mode: '',
        excludes: /node_modules/,
        // includeFileSuffix 只允许字符串数组
        includeFileSuffix: ['.js', /.jsx/],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
  } catch (error) {
    expect(error.instancePath).toEqual('/includeFileSuffix/1');
  }
  try {
    // 校验失败自动报错
    validate(
      schema,
      {
        mode: '',
        excludes: /node_modules/,
        // includeFileSuffix 只允许字符串数组
        includeFileSuffix: ['.js', 1111],
        debug: false,
      },
      {
        name: 'WebpackResolverModePlugin',
        postFormatter: (formattedError, error) => {
          throw error;
        },
      },
    );
  } catch (error) {
    expect(error.instancePath).toEqual('/includeFileSuffix/1');
  }
});
