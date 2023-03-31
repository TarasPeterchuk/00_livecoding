const reverseStr = str => [...str].reverse().join('');

// console.log(reverseStr('abcd'));

const customSort = arr => arr.filter(el => typeof el === 'number').sort((a, b) => a - b);

const testArr = [0, { id: 10 }, 10, 'hello', () => {}, -7, 11];
// const testArrAfter = [-7, 0, 10, 11];

// console.log(customSort(testArr));

const sleep = (func, ms) => {
  return (...args) => {
    return setTimeout(() => func(...args), ms);
  };
};
const toConsole = args => {
  console.log(args);
};

toConsole('111');
const wrap = sleep(toConsole, 1000);
wrap('111');
