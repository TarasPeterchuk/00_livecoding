const obj1 = { foo: 'aaaa', x: 421 };
const obj2 = { foo: 'zzzz', x: 422 };

console.log({ ...obj1, ...obj2, ...obj1 });
