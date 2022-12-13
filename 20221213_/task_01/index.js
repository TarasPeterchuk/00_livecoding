// 1 good
// function compareObjects(firstObj, secondObj) {
//   return Object.keys({ ...firstObj, ...secondObj }).every(key => firstObj[key] === secondObj[key]);
//  }

// 2 norm
//  function compareObjects(firstObj, secondObj) {
//   return Object.keys({ ...firstObj, ...secondObj }).some(key => firstObj[key] !== secondObj[key]);
//  }

// 3 bad
//  function compareObjects(firstObj, secondObj) {
//   const biggerObj =
//     JSON.stringify(firstObj).length > JSON.stringify(secondObj).length ? firstObj : secondObj;
//   return !Object.keys(biggerObj).some(key => firstObj[key] !== secondObj[key]);
// }

// 4 norm
// const compareObjects = (firstObj, secondObj) => {
//   const firstObjKeys = Object.keys(firstObj);

//   if (firstArr.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstObjKeys.every(key => firstObj[key] === secondObj[key]);
// };

// 5 bad
// const compareObjects2 = (firstObj, secondObj) =>
// JSON.stringify(Object.entries(firstObj).sort()) ===
// JSON.stringify(Object.entries(secondObj).sort());

// 6 bad
// function compareObjects(firstObj, secondObj) {
//   const firstArray = Object.keys(firstObj);
//   if (firstArray.length !== Object.keys(secondObj).length) {
//     return false;
//   }
//   return firstArray.reduce((acc, element) => {
//     if (firstObj[element] !== secondObj[element]) {
//       acc = false;
//     };
//     return acc;
//   }, true);
// };

// 7 bad
// const compareObjects = (firstObj, secondObj) =>
//   Object.keys(firstObj).reduce(
//     (acc, key, index) => (firstObj[key] === secondObj[key] && index === acc ? acc + 1 : -1),
//     0,) === Object.keys(secondObj).length;
// 8 bad
// const compareObjects = (firstObj, secondObj) =>
//   Object.entries(firstObj).sort().join() === Object.entries(secondObj).sort().join();

// 9 bad
// function compareObjects(firstObj, secondObj) {
//   const ordered = (obj) =>
//     Object.keys(obj)
//       .sort()
//       .reduce((acc, el) => {
//         acc[el] = obj[el];
//         console.log(acc);
//         return acc;
//       }, {});
//   const sortFirstObj = ordered(firstObj);
//   const sortSecondObj = ordered(secondObj);
//   return JSON.stringify(sortFirstObj) === JSON.stringify(sortSecondObj);
// }
