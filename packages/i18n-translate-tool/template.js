const getDefaultTemplate = (obj = {}) =>
  `export default ${JSON.stringify(obj, undefined, 2)}`;
const getVarTemplate = (obj = {}, varName) =>
  `export const ${varName} = ${JSON.stringify(obj, undefined, 2)}`;

// const a = getDefaultTemplate({
//     countersignatureAll: '会签（须所有审批人同意）',
//     orSignASignatureForReview: '或签（一名审批人同意或拒绝即可）',
//     "index": {
//       "fail": "失败",
//       "success": "成功"
//     }
//   })

//  const b = getVarTemplate({
//     orSignASignatureForReview: '或签（一名审批人同意或拒绝即可）',
//   }, 'a')
//   console.log('a', a, b);

module.exports = {
  getDefaultTemplate,
  getVarTemplate,
};
