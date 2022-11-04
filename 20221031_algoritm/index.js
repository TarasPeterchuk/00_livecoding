// How to work on tech tasks. Step by step guide

// 1. Learn requirement (WHAT?)
// 2. Create step by step algo (& input/output for functions) (HOW?)
// 3. Write draft solution & testing
// 4. Refactoring & final testing -> final solution

/**
 * @param {number} num
 * @return {undefined}
 */

// input: number
// output: undefined

// 10 ==> 2 3 5 7
// 13 ==> 2 3 5 7 11 13

// algo
// 1. iterate 2 .. num
// 2. check if number prime
//  2.0 create counter
//  2.1 iterate 1 .. number
//  2.2 if number % index === 0 -> conut ++
//  2.3 if conut >= 2 -> is not prime
// 3. if prime -> console

function getPrimes(num) {
  console.log('num', num);
  for (let number = 2; number <= num; number += 1) {
    let counter = 0;
    for (let index = 1; index <= number; index += 1) {
      // console.log('step' + index);
      if (number % index === 0) {
        counter += 1;
      }
    }
    console.log('for', number, ' couners found', counter);
    if (counter === 2) {
      console.log(number);
    }
  }
}

// test data
// getPrimes(10);
// getPrimes(13);

// Refactored
function getPrimesRefactored(num) {
  if (num <= 1) {
    console.log('not valid number');
    return;
  }
  for (let number = 2; number <= num; number += 1) {
    checkIfPrime(number);
  }
}
function checkIfPrime(val) {
  let marker = true;
  let index = 1;
  while (marker === true) {
    index += 1;
    if (val % index === 0) {
      marker = false;
    }
  }
  if (index === val) {
    console.log(val);
  }
}

getPrimesRefactored(20);

// 20221104 refactoring
// input: number
// output: bolean
console.log('Final variant');
function isPrime(number) {
  for (let index = 2; index < number; index += 1) {
    if (number % index === 0) {
      return false;
    }
  }
  return true;
}
function getPrimes(num) {
  for (let number = 2; number <= num; number += 1) {
    if (isPrime(number)) {
      console.log(number);
    }
  }
}

getPrimes(10);
