//arrElement
// input : array,callback
// output : array

//callback
// input : el,imdex,arr
// output : element

//algo
// 0. create new array
// 1. iterate arr - loop
// 2. call calback for each el
// 3. callback result push element
// 4. after iteration return res arr

// if no Reduce
// const name = el.split(' ');
// let result = '';
// for (let i = 0; i < name.length; i += 1) {
//   result += name[i][0];
// }
// return result;

const mapArrayElements = (arr, callback) => {
  const resultArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    resultArr.push(callback(arr[index], index, arr));
  }
  return resultArr;
};

const getInitials = el => el.split(' ').reduce((acc, val) => (acc += val[0]), '');
const arrNames = ['Leonardo Da Vinci', 'Edvard Munch', 'Vincent van Gogh'];
console.log(arrNames);
console.log(mapArrayElements(arrNames, getInitials));

// const funcSquare = (el, index, arr) => el ** 2;
// const arrNumbers = [1, 3, 6, 4, 3, 7, 3, 6, 0, 7];
// console.log(arrNumbers);
// console.log(mapArrayElements(arrNumbers, funcSquare));
