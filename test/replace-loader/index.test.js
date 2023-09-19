const loader = require('./index');

loader.getOptions = () => ({
    colorReplaceMap: require('./color'),
})

const demoSource = `background: #fff;color: #aaa;border-color: #ccc;color: #adc;`;
const demoSource1 = `background: #fff;color: #aaa;border-color: #ccc;color: #adc;`.repeat(2);

test('replace one color ', () => {
    expect(loader.call(loader, demoSource)).toEqual(`background: #000;color: #bbb;border-color: #ddd;color: #adc;`)
})

test('replace color ', () => {
    expect(loader.call(loader, demoSource1)).toEqual(`background: #000;color: #bbb;border-color: #ddd;color: #adc;`.repeat(2))
})