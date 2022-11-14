//arrElement
// input : array,callback
// output : array

//callback
// input : el,imdex,arr
// output : bool

//algo
// 0. create new array
// 1. iterate arr - loop
// 2. call calback for each el
// 3. if callback true => push element
// 4. after iteration return res arr

const filterArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    el = arr[index];
    if (callback(el, index, arr)) {
      resultArr.push(el);
    }
  }
  return resultArr;
};

// const func = (arrElement, index, entireArr) => {
//  console.log('Callback was called',arrElement,index)
//   if (arrElement < 4) {
//     return true;
//   }
// };

const func = (el, index, arr) => index > 2 && el > 3;
const arr = [1, 3, 6, 4, 3, 7, 3, 6, 0, 7];
// console.log(filterArrayElements(arr, func));
console.log(
  filterArrayElements([1, 3, 6, 4, 3, 7, 3, 6, 0, 7], (el, index, arr) => index > 2 && el > 3),
);

console.log(
  filterArrayElements(['Bob', 'Tom', 'Ann', 'Jane'], el => el.toLowerCase().includes('an')),
);
