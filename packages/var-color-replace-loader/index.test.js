const loader = require('./index');

loader.getOptions = () => ({
    colorMap: require('./color'),
})

const demoSource = `background: #522300;color: #95d93d;border-color: #95d93d;color: #adc;`;
const demoSource2 = `background: #f5f8ff;color: #049160;border-color: #41a7fa;color: #adc;`;

test('replace color ', () => {
    expect(loader.call(loader, demoSource)).toEqual(`background: var(--color-orange-10);color: var(--color-moss-5);border-color: var(--color-moss-5);color: #adc;`)
    expect(loader.call(loader, demoSource2)).toEqual(`background: var(--color-cyan-1);color: var(--color-emerald-7);border-color: var(--color-indigo-5);color: #adc;`)
})