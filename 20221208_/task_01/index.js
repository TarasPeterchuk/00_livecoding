//input: object
//output:  array of object

// algo
// 1. create ruesult array
// 2. get key/values (.entries)
// 3. add new id key to value => new obj
// 4. push to arr (.map)
// 5. sort objects by age (.sort)

// draft 1
// const getCustomersList = obj => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   console.log(entries);
//   for (let index = 0; index < entries.length; index += 1) {
//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   console.log(resArr);
// };

// draft 2
// const getCustomersList = obj => {
//   const resArr = [];
//   const entries = Object.entries(obj);
//   for (let index = 0; index < entries.length; index += 1) {
//     resArr.push({ ...entries[index][1], id: entries[index][0] });
//   }
//   console.log(resArr);
//   resArr.sort((a, b) => a.age - b.age);
//   console.log(resArr);
//   return resArr;
// };

const getCustomersList = obj =>
  Object.entries(obj)
    .map(([key, value]) => ({ ...value, id: key }))
    .sort((a, b) => a.age - b.age);

const customers = {
  'customer-id-1': {
    name: 'William',
    age: 54,
  },
  'customer-id-2': {
    name: 'Tom',
    age: 20,
  },
  'customer-id-3': {
    name: 'Bob',
    age: 17,
  },
  'customer-id-4': {
    name: 'John',
    age: 22,
  },
};

console.log(getCustomersList(customers));
console.log('obj after', customers);

//const getCustomersList = obj => {
//   return Object.entries(obj)
//     .map(el => {
//       const value = [...el];
//       console.log(value);
//       value[1].id = value.shift();
//       return value[0];
//     })
//     .sort((a, b) => a.age - b.age);
// };

// const copyObj = { ...el[1] };
// copyObj.id = el.shift();
// return copyObj;
