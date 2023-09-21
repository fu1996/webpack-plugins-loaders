const translate = require('@vitalets/google-translate-api');

const translateArray = async (list) => {
  const promiseList = Promise.all(
    list.map((key) => translate(key, { to: 'en', tld: 'cn' })),
  );
  const res = await promiseList;
  return res.map((item) => item.text);
};

const inputArray = ['你好'];

// translateArray(inputArray)

// translate.languages['sr-Latn'] = 'Serbian Latin';

// translate('translator', {to: 'sr-Latn'}).then(res => {
//     console.log('res', res);
// });
module.exports = {
  translateArray,
};
