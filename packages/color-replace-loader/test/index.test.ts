import { expect, test } from '@jest/globals';
import loader from '../src';

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
loader.getOptions = () => ({
  colorReplaceMap: require('./fixture/color'),
});

const demoSource = `background: #fff;color: #aaa;border-color: #ccc;color: #adc;`;
const demoSource1 =
  `background: #fff;color: #aaa;border-color: #ccc;color: #adc;`.repeat(2);

test('replace one color ', () => {
  expect(loader.call(loader, demoSource)).toEqual(
    `background: #000;color: #bbb;border-color: #ddd;color: #adc;`,
  );
});

test('replace color ', () => {
  expect(loader.call(loader, demoSource1)).toEqual(
    `background: #000;color: #bbb;border-color: #ddd;color: #adc;`.repeat(2),
  );
});

// ADC 颜色不在匹配规则里
const toLocaleLowerCaseDemoSource = `background: #FFF;color: #AAA;border-color: #CCC;color: #ADC;`;
const toLocaleUpperCaseCaseDemoSource = `background: #fff;color: #aaa;border-color: #ccc;color: #adc;`;

test('toLocaleLowerCase and toLocaleUpperCase color ', () => {
  expect(loader.call(loader, toLocaleLowerCaseDemoSource)).toEqual(
    `background: #000;color: #bbb;border-color: #ddd;color: #ADC;`,
  );
  expect(loader.call(loader, toLocaleUpperCaseCaseDemoSource)).toEqual(
    `background: #000;color: #bbb;border-color: #ddd;color: #adc;`,
  );
});
