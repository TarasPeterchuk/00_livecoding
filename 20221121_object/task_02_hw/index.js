//input: object
//output:  array of object

// algo
// 1. create ruesult array
// 2. get key/values (.entries)
// 3. add new id key to value => new obj
// 4. push to arr (.map)
// 5. sort objects by age (.sort)

// draft 1
// const getCustomersList = obj => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   console.log(entries);
//   for (let index = 0; index < entries.length; index += 1) {
//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   console.log(resArr);
// };

// draft 2
// const getCustomersList = obj => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   for (let index = 0; index < entries.length; index += 1) {
//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   console.log(resArr);
//   resArr.sort((a, b) => a.age - b.age);
//   console.log(resArr);
//   return resArr;
// };

'use strict';

/**
 * @param {object} firstObj
 * @param {object} secondObj
 * @return {boolean}
 */
function compareObjects(firstObj, secondObj) {
  // put your code here
}

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
