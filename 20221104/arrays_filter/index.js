const numberList = [4, 77, 3, 6, 9];
// filter
// input: function
// output: array

// callback
// input: el, index, arr
// output: bool

function filterCallback(el) {
  return el > 5;
}
const filterRes = numberList.filter(function filterCallback(el) {
  return el > 5;
});
console.log(filterRes);

const filterRes2 = numberList.filter((el) => el > 2);
console.log(filterRes2);
