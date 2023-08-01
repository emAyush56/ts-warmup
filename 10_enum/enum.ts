enum SeatChoice {
  AISLE, // by default set to 0 and increments downwards. the initializer can be reinstantiated like `AISLE = 5`. it will be incremented by one downwards
  MIDDLE,
  WINDOW,
}

// const enum SeatChoice { // this will produce less code in js unlike previous case which renders a IFFE in js
//   AISLE,
//   MIDDLE,
//   WINDOW,
// }

const mySeat = SeatChoice.AISLE;
console.log(mySeat, typeof mySeat);

console.log(SeatChoice, typeof SeatChoice);

export {};
