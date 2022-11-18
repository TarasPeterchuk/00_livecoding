'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */

// put you code here
// const obj = {};
// for (let index = 0; index < keysList.length; index += 1) {
//   obj[keysList[index]] = valuesList[index];
//   // obj = { ...obj, [keysList[index]]: valuesList[index] };
// }

//algo
// 1 create empty obj
// 2 iterate keyList
// 3 add key/value to the obj
// 4 return obj

function buildObject(keysList, valuesList) {
  return keysList.reduce((obj, key, index) => ({ ...obj, [key]: valuesList[index] }), {});
}

// examples;
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result);

// ==> { name: 'Bob', address: 'Ukraine', age: 34 }
