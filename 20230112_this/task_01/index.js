//===
// 1 what is context
// 2 when lost
// 3 how to fix

// console.log(timer.secondsPassed);
// console.log(timer.startTimer);
// console.log(timer.getTime());

// function sayHi() {
//   console.log(`Hello ${this.userName}`);
// }

// const user = {
//   userName: 'Taras',
// };
// // task 1
// sayHiBined = sayHi.bind(user);
// sayHiBined();

// -------------- timer

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  startTimer() {
    console.log(this);
    // input: callback,ms
    // output: number(ID)
    // setInterval(
    //   function () {
    //     this.secondsPassed += 1;
    //     console.log(this.secondsPassed);
    //   }.bind(this),
    //   1000,
    // );
    setInterval(() => {
      this.secondsPassed += 1;
      // console.log(this.secondsPassed);
      if (this.secondsPassed === 5) {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
      console.log(this);
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed} ${this.secondsPassed}`;
  },
  stopTimer() {
    () => clearInterval(this.startTimer);
  },
  resetTimer() {},
};

timer.startTimer();

// lose context
// const func = timer.startTimer;
// func();

// timer.stopTimer();
