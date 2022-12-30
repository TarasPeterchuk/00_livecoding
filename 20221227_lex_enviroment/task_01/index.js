// lex env

// global lex env
//{
//     'environmentRecord':{
//         message:'Text',
//         weight:'',
//          run:function;
//          sum:(a,b)=>a+b;
//          ...
//     },
// "outer":null
// }

// run lex env
//{
//     'environmentRecord':{
//
//     },
// "outer":global lex env
// }

// createMessenger lex env
//{
//     'environmentRecord':{
//           message:'Text',
//           sender:'',
//          ........
//     },
// "outer":global lex env
// }

/* eslint-disable */

// const message = 'Test';
const weight = 55;
// console.log(message);

function run() {
  console.log('RUN');
}

const sum = (a, b) => a + b;

function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function sendMessage(name) {
    console.log(`${name}, ${message}! Your ${sender}`);
    console.log('done');
  }

  function setSender(newSender) {
    sender = newSender;
  }

  function setMessage(text) {
    message = text;
  }

  return {
    sendMessage,
    setMessage,
    setSender,
  };
}

if (weight) {
  const price = 100; // блочний скоуп
  console.log('my weight', weight);
}
const messanger = createMessenger();
messanger.sendMessage('Jack');
run();
console.log(weight);

//===============
function counterFunc() {
  let count = 0;
  const counter = () => {
    count += 1;
    console.log(count);
  };
  return counter;
}
const counter1 = counterFunc();
// counterFunc lex env
//{
//     'environmentRecord':{
//
//     },
// "outer":global lex env
// }
counter1();
counter1();
const counter2 = counterFunc();
counter2();
