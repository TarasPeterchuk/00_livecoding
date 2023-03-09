// function sum() {
//   console.log(arguments);
//   const resArray = [];
//   for (let i = 0; i < arguments.length; i += 1) {
//     resArray.push(arguments[i]);
//   }
//   return resArray;
// }

// sum(2, 10);

const arr = [1, 2, 7, 2];
const arr2 = [...arr];
arr2.push(7);

arr2.push(2);

// ====
// console.log(arr);

const uniqueArr = [];

arr.forEach(el => {
  if (!uniqueArr.includes(el)) {
    uniqueArr.push(el);
  }
});
// console.log(uniqueArr);

const uniqueArr2 = arr.reduce((acc, el) => {
  if (!acc.includes(el)) {
    acc.push(el);
  }
  return acc;
}, []);

// console.log(uniqueArr2);

const transaction1 = {
  id: 1001,
  location: 'Kyiv',
  amount: 100,
};
const transaction2 = {
  id: 1001,
  location: 'Kyiv',
  // amount: 100,
};
const getAmount = transactions => {
  return transactions.reduce(
    (acc, transaction) => acc + (transaction.amount ? transaction.amount : 0),
    0,
  );
};

// console.log(getAmount([transaction1, transaction2]));

// const getTransactinsIds = transactions => {
//   return transactions.reduce((acc, val) => {
//     return acc.concat(val.id);
//   }, []);
// };

const getTransactinsIds = transactions => {
  const ids = transactions.map(({ id }) => id);
  const index = ids.indexOf(undefined);

  if (index !== -1) {
    alert(`${index}`);
    return;
  }
  return ids;
};

// console.log(getTransactinsIds([transaction1, transaction2]));

function summa() {
  console.log(arguments);
  const args = Array.from(arguments); // перетворюємо псевдомасив в звичайний масив
  console.log(args);
  const sum = args.reduce((total, current) => total + current, 0);
  return sum;
}
console.log(summa(2, 10));
