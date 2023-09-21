import big from 'big.js';

// 文件级别的测试
// 有h5
import a from './a';
console.log('2222', a);
// 无h5
import './foo1';

// 文件夹级别的测试
// 有h5
import './foo/foo';
// 无h5
import './zoo/zoo';

// 测试 目录包含
import './exclude-dir';
// 测试复合后缀
import './c.json';

import dH5 from './test-json/d.h5.json';
import d from './test-json/d.json';

console.log('dH5', dH5.name);
console.log('d', d.name);
