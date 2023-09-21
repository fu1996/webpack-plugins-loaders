module.exports = {
  extents: ['@commitlint/config-conventional'],
  rules: {
    'body-leading-blank': [2, 'always'], // body换行
    'header-max-length': [2, 'never', 80], // header 最长80
    'type-enum': [
      2,
      'always',
      [
        'test',
        'feat',
        'fix',
        'chore',
        'docs',
        'refactor',
        'style',
        'ci',
        'perf',
        'release',
      ],
    ],
  },
};
