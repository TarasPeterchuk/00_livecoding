/* eslint-disable prefer-object-spread */
/* eslint-disable no-param-reassign */

/* В решения этой задачи используется метод Object.assign. В реальных проектах для такой задачи
 * лучше использовать spread опертор - это самый современный подход
 *
 * Так же плохой подход - мутировать входящие параметры функции
 *
 * Задачу мы делаем для практики и демонстрационных целей, поэтому чтобы eslint не ругался на эту ошибку,
 * для этой задачи он отключен аннотацией eslint-disable
 * */

// input: obj, key, value (any type)
// output: new object

function addPropertyV1(obj, key, value) {
  obj[key] = value;
  return obj;
}
// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV1(transaction, 'currency', 'USD'));
// console.log(addPropertyV1(transaction, 'currency', 'EUR')); // ==> { value: 170, currency: 'USD' }
// console.log(transaction);

// put your code here

function addPropertyV2(obj, key, value) {
  return Object.assign(obj, { [key]: value });
}
// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV2(transaction, 'currency', 'USD'));
// console.log('after:', transaction);

// put your code here

function addPropertyV3(obj, key, value) {
  const copyObj = {};
  return Object.assign(copyObj, obj, { [key]: value });
}
// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV3(transaction, 'currency', 'USD'));
// console.log('input object after:', transaction);

// put your code here

function addPropertyV4(obj, key, value) {
  console.log('1', obj);
  obj = { ...obj, ...{ [key]: value } };
  console.log('2', obj);
}
// console.log(obj);
const transaction = {
  value: 170,
};
addPropertyV4(transaction, 'currency', 'USD');
console.log('input object after:', transaction);

// const arr = [10, 22, 44, 34];
// const [a, b, ...rest] = arr;
// console.log(rest);

// const obj = { name: 'Bob', balance: 100, city: 'Kyiv' };
// const { city, ...newobj } = obj;
// console.log(newobj);
// console.log(city);

// function addPropertyV5(obj, key, value) {
//   return { obj, [key]: value };
// }
// const transaction = {
//   value: 170,
// };
// console.log(addPropertyV4(transaction, 'currency', 'USD'));
// console.log('input object after:', transaction);
