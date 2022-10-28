console.log('Hello JS');

//
function getSenseOfLife() {
  return 42;
}
console.log(getSenseOfLife());

//option 1
const res = getSenseOfLife();
console.log(res);

//func2
function getSquared(num) {
  //   return num * num;
  return num ** 2;
}
//test
console.log(getSquared(10));
console.log(getSquared(-11));
console.log(getSquared('x'));

//func3
function sum(a, b) {
  return a + b;
}
//test
console.log(sum(10, 20));
console.log(sum(10, null));
console.log(sum('2', -20));

//func message
function getMessage(age) {
  console.log('I am ' + age + ' years old');
}
//test
getMessage(10);
getMessage(0);
getMessage(null);

//func age
function ageTest(age) {
  if (age < 0 || typeof age != 'number') {
    return null;
  }
  console.log(`I am ${age}  years old`);
}
//test
ageTest(20);
console.log(ageTest(10));
console.log('if undefined: ', ageTest(undefined));
console.log('if null: ', ageTest(null));

//arrow func
const mult = (a, b) => a * b;
//test
console.log(mult(1, 1));
console.log(mult(0, 1));
console.log(mult('2', 1));

//arrow func 2
const getMagicNumber = () => 17;
//test
console.log(getMagicNumber());
console.log(getMagicNumber(22));
