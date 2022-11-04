console.log('POP');
const numberList1 = [4, 77, 3, 6, 9];
// const numberList2 = new Array();
// console.log(numberList1);
// console.log(numberList2);

// input: none
// output: element
console.log('Before POP : ', numberList1);
const popResult = numberList1.pop();
console.log('After POP : ', numberList1);
console.log('POP result', popResult);

//////////////
console.log('PUSH');
const numberList2 = [14, 77, 3, 6, 9];
// console.log(numberList1);
// console.log(numberList2);

// input: element
// output: number - new length
console.log('Before PUSH : ', numberList2);
const pushResult = numberList2.push('11111');
console.log('After PUSH : ', numberList2);
console.log('PUSH result', pushResult);

//////////////
console.log('UNSHIFT');
const numberList3 = [14, 77, 3, 6, 9];
// console.log(numberList3);

// input: element
// output: number - new length
console.log('Before UNSHIFT : ', numberList3);
const unshiftResult = numberList3.unshift('11111');
console.log('After UNSHIFT : ', numberList3);
console.log('UNSHIFT result', unshiftResult);
