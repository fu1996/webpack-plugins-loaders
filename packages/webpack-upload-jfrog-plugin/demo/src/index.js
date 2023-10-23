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
