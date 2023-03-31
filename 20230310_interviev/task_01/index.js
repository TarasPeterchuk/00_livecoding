// const users = [
//   {
//     id: 100,
//     dateRegistered: new Date(),
//     email: 'test@gmail.com',
//     isactive: true,
//   },
//   {
//     id: 101,
//     dateRegistered: new Date(),
//     email: 'test111@gmail.com',
//     isactive: false,
//   },
// ];
// const usersSort = users
//   .filter(({ isactive }) => isactive)
//   .sort((a, b) => b.dateRegistered - a.dateRegistered);
// console.log(users);
// console.log(usersSort);

let q;
const promise = new Promise((resolve, reject) => {
  // Результат операції - число 42
  const result = 42;
  // Передаємо результат в метод resolve, щоб обіцянка перейшла в стан Fulfilled
  resolve(result);
});
const a = promise.then(val => {
  q = val;
  console.log(q);
});
console.log(q);
