'use strict';

// const compareObjects = (firstObj, secondObj) => {
//   return Object.keys(firstObj).reduce(
//     (acc, key) => (firstObj[key] === secondObj[key] ? acc + 1 : acc),
//     0,
//   ) === 0
//     ? true
//     : false;
// };

// console.log(Object.keys(firstObj).length);
// console.log(Object.keys(secondObj).length);
// console.log(
//   Object.keys(firstObj).reduce(
//     (acc, key) => (firstObj[key] === secondObj[key] ? acc + 1 : acc),
//     0,
//   ),
// );

// const compareObjects = (firstObj, secondObj) => {
//   return Object.keys(firstObj).reduce(
//     (acc, key) => (firstObj[key] === secondObj[key] ? acc + 1 : acc),
//     0,
//   ) === Object.keys(secondObj).length
//     ? true
//     : false;
// };

const compareObjects = (firstObj, secondObj) =>
  Object.keys(firstObj).reduce(
    (acc, key, index) => (firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1),
    0,
  ) === Object.keys(secondObj).length
    ? true
    : false;

// examples
const obj1 = {
  name: 'Tom',
  age: 17,
};

const obj2 = {
  name: 'Bob',
  age: 17,
};

const obj3 = {
  name: 'Bob',
  age: 17,
  student: false,
};

const obj4 = {
  name: 'Tom',
  age: 17,
};

const obj5 = {
  age: 17,
  name: 'Tom',
};

console.log(compareObjects(obj1, obj2)); // ==> false
console.log(compareObjects(obj3, obj2)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
