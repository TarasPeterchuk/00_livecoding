// Get intersection of 2 arrays

// input: ([1, 2, 3], [2, 7, 9]);
// output: [2]

// input: ([], [2, 6, 1])
// output: []

const getIntersection = (arr1, arr2) => {
  return arr1.filter(el => arr2.includes(el));
};

console.log(getIntersection([], [2, 6, 1]));
console.log(getIntersection([1, 2, 3], [2, 7, 9]));
