const numbersList = [5, 0, 8, 10, -4, 50, 220, 100];
/* метод map */
// input : callback
// output : new array
// callback input: el, index, arr
// callback output: new element
// const mapRes = numbersList.map((el) => {
//   return el * el;
// });
const mapRes = numbersList.map(el => (el > 0 ? el ** 2 : el));
// console.log(mapRes);

/* метод find */
// input : callback
// output : value or undefined
// callback input: el, index, arr
// callback output: boolean
const find = numbersList.find(el => el > 100);
// console.log(find);

/* метод forEach */
// input : callback
// output : undefined
// callback input: el, index, arr
// callback output: undefined
const foreach = numbersList.forEach(el => {
  if (el > 0) {
    // console.log(el);
  }
  return 'error';
  // wrongel > 0 ? console.log(el) : console.log('error');
  //   console.log(el > 0 ? el : 'error');
});
// console.log(foreach);

/* метод reduce */
// input : callback, initialValue
// output : accumulated result (any type)
// callback input: acc, currentValue, index, arr
// callback output: acc (any type)
const transactions = [5, 0, 8, 10, -4, -50, 220, 1203, 556, 41];
const reduceArray = transactions.reduce((acc, val) => {
  console.log('acc:' + acc);
  if (val < 0) {
    acc += val;
  }
  return acc;
}, 0);
console.log(reduceArray);
const reduceArrayRef = transactions.reduce((acc, val) => (val < 0 ? (acc += val) : acc), 0);
console.log(reduceArrayRef);
