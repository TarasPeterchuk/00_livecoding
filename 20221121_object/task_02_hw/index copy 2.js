//input: two objects
//output:  boolean

// algo
// ---Compare objects as string---
// 1. make array from obj (.entries)
// 2. sort each array by key of object(first element of subarrays) (.sort)
// 3. make string from all elements of array (.reduce) .upd or JOIN
// 4. repeat 1-3 for second object
// 5. compare result strings

'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
//draft
// function compareObjects(firstObj, secondObj) {
//   const strFirst = Object.entries(firstObj)
//     .sort()
//     // .flat()
//     .reduce((acc, el) => acc + el);
//   const strSecond = Object.entries(secondObj)
//     .sort()
//     // .flat()
//     .reduce((acc, el) => acc + el);
//   console.log(typeof strFirst);
//   console.log(strFirst, strSecond);
//   console.log(strFirst === strSecond);
// }

// draft 2 (with reduce)
// function compareObjects(firstObj, secondObj) {
//   return (
//     Object.entries(firstObj)
//       .sort()
//       .reduce((acc, el) => acc + el) ===
//     Object.entries(secondObj)
//       .sort()
//       .reduce((acc, el) => acc + el)
//   );
// console.log(Object.entries(firstObj).sort().join());
// console.log(Object.entries(secondObj).sort().join());
// }

// draft 3 (with duplicate code)
// const compareObjects = (firstObj, secondObj) =>
//   Object.entries(firstObj).sort().join() === Object.entries(secondObj).sort().join();

//final
const strFromObjSorted = obj => Object.entries(obj).sort().join();
const compareObjects = (firstObj, secondObj) =>
  strFromObjSorted(firstObj) === strFromObjSorted(secondObj);

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
console.log(compareObjects(obj2, obj3)); // ==> false
console.log(compareObjects(obj1, obj4)); // ==> true
console.log(compareObjects(obj4, obj5)); // ==> true
