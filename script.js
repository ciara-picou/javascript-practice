//function syntax:
// function nameOfFunction(parameters){
//   //do work in here
//   return //what you want to return
// }
//example:
// function addNumbers(a, b) {
//   return a + b;
// }
// addNumbers(1, 2);

//write a function that accepts two numbers multiples them and returns the product

// //arrow function syntax:
// // const nameOfFunction = (parameters) => {
// //   //do work in here
// //   return // what you want to return
// // }
// const addNumbers = (a, b) => {
//   return a + b;
// };
// addNumbers(1, 2);

// //simplified arrow function syntax
// //if you can do all of your work on one line then you
// //can skip the curly braces and return statement
// // const nameOfFunction = (parameters) => //will return what you put here
//const addNumbers = (a, b) => a + b
//const addNumbers = (a, b) => console.log(a + b);
//addNumbers(1, 2);

// let divide = () => 2000 / 100;
// let percent = (n) => n / 100;
// let square = (x) => x * x;
// let add = (a, b) => a + b;

// console.log(divide());
// console.log(percent(50));
// console.log(square(5));
// console.log(add(5, 10));

// function receivesAFunction(callback) {
//   callback();
// }

// function returnsANamedFunction() {
//   const namedFn = () => console.log("this is a named function");
//   return namedFn;
// }

// function returnsAnAnonymousFunction() {
//   return () => console.log("this is an anonymous function");
// }

//It's so hard to decide where to go on vacation
//write a function that accepts an array of vacation options
// and randomly returns one of the options

// function chooseForMe(vacationOptions) {
//   let randomIndex = Math.floor(vacationOptions.length * Math.random());
//   console.log(vacationOptions[randomIndex]);
//   return vacationOptions[randomIndex];
// }
// chooseForMe(["Venice", "Rome", "Milan"]);

// let divide = () => 2000/100
// let square = x => x * x;
// let add = (a, b) => a + b;

// function distanceFromHqInBlocks(blockNumber) {
//   if (blockNumber > 42) {
//       console.log(42 - blockNumber)
//     return blockNumber - 42;
//   } else {
//       console.log(42 - blockNumber)
//     return 42 - blockNumber;
//   }
// }
// //                      *
// //35 36 37 38 39 40 41 42 43 44 45 46 47 48 49 50
// distanceFromHqInBlocks(50)

// function distanceFromHqInFeet (someValue) {
//     distanceFromHqInBlocks(someValue);
//     // calls distanceFromHqInBlocks from inside the distanceFromHqInFeet function,
//     // passing the argument from distanceFromHqInFeet into distanceFromHqInBlocks
//     //the return value of distanceFromHqInBlocks can then be used to calculate feet
//   }
// // Each block in Manhattan is 264 feet long
//   //distanceTravelledInFeet: Calculates the number of feet a passenger travels
//   //given a starting block and an ending block
//   //— it only calculates distance North and South (uptown/downtown).
//   //It uses the knowledge that a block is 264 feet long.

//   //calculatesFarePrice:
//   //Given the same starting and ending block as the previous test (hint hint),
//   // return the fare for the customer. The first four hundred feet are free.
//   //For a distance between 400 and 2000 feet, the price is 2 cents per foot (
// //not including 400, which are free!).
// //Then Scuber charges a flat fare for a distance over 2000 feet and under 2500 feet.
// // Finally, Scuber does not allow any rides over 2500 feet —
// //the function returns 'cannot travel that far' if a ride over 2500 feet is requested.
