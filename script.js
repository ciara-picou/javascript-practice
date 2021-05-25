// //slice takes a slice out of your array by copying whichever elements you specify
// //slice is not destructive meaning your original array won't be changed at all by calling slice() on it
// //that means that if you want to keep the results of your slice you must save them in a variable
// //slice accepts 2 arguments:
// //the first argument tells slice where to begin copying
// //the second argument is optional
// //if you include it it will tell slice where to end the copy
// //the slice will end at the element before the element you pass in as the second argument
// //if you don't pass slice the optional second argument
// //your slice will end at the last element of the array
// let array = [
//   "filet mignon",
//   "lobster ravioli",
//   "salad",
//   "grilled veggies",
//   "fruit salad",
// ];
// let vegetarianFriendly = array.slice(2);
// console.log(array.slice(2));
// console.log(vegetarianFriendly);
// console.log(array);

// let seaFood = array.slice(1, 2);
// console.log(array.slice(1, 2), "the return value of array.slice(1,2)");
// console.log(seaFood);
// console.log(array);

// //splice() on the other hand is destructive meaning that any changes you make with splice()
// //will mutate the array you called splice() on
// //splice accepts 3 optional arguments:
// //THIS IS WHERE YOU LEFT OFF!!
// //now imagine that your roomate ate the last of your favorite snack
// //but brought some strawberries home from the farmers market
// //how can you use splice() to remove the strawberries from the groceryList array and add
// //your favoriteSnack to the groceryList array
// let favoriteSnack = "???";
// let groceryList = ["strawberries", "eggs", "avocadoes", "cookies"];

// console.log(groceryList, "before splice()");
// groceryList.splice(0, 1, favoriteSnack);
// console.log(
//   groceryList.splice(0, 1, favoriteSnack),
//   "the return value of groceryList.splice(0, 1, favoriteSnack)"
// );
// console.log(groceryList, "after splice()");

// //VARIABLE DECLARATIONS:
// //There are three keywords that allow us to declare variables in JavaScript: var, let and const
// //let is a good choice when you want to be able to redefine the value associated with your variable
// //const is a good choice when you don't want to be able to redefine the value of your variable
// const accountNumber = 1234;
//console.log( accountNumber)

// //what do you expect to happen when we try to redefine the variable accountNumber?
// accountNumber = 4567;

// let email = "yourName@aol.com";
// console.log(email);

// //what do you expect to happen when we try to update the value of email with our new email address?
// email = "yourName@gmail.com";
// console.log(email);

// //when you want to declare a variable is it necessary to include a keyword?
// //when you want to change the value of a variable is it necessary to include a keyword?

// let fashionIcon = "Audrey Hepburn";
// console.log(fashionIcon)
// fashionIcon = "Beyoncé";
// console.log(fashionIcon)

//scope can seem really complicated but put as simply as possible 
//Think of {} in javaScript like little fences or boundaries
//get bracket pair extension...it will help you immensely

//important vocabulary: global scope 

function greeting(name) {
  console.log(`Hello, ${name}`);

  function chineseGreeting(name) {
    //console.log(`Nihao, ${name}`);
  }
  chineseGreeting("Ciara");
  chineseGreeting(name);
}
//chineseGreeting("Octavia");
greeting("Christine");

//make a list of 3 places Christine would like to visit
// in order from least to most
//let christinesList = []
//let ciarasList = ["Ft.Lauderdale", "Japan", "Taiwan"];
// function travelDestinations(list) {
//   for (let i = 0; i < list.length; i++) {
//     let favoriteDestination = list[list.length - 1];
//     console.log(list[i]);
//   }
//   //what do you think will happen when I console.log(favoriteDestination) ?
//   //explanation at the bottom of this file
//   console.log(favoriteDestination, "=favoriteDestination");
// }

// function travelDestinations(list) {
//   let favoriteDestination;
//   for (let i = 0; i < list.length; i++) {
//     favoriteDestination = list[list.length - 1];
//     console.log(list[i]);
//   }
//   //what do you think will happen when I console.log(favoriteDestination) ?
//   console.log(favoriteDestination, "=favoriteDestination");
// }
// travelDestinations(ciarasList);

// script.js:134 Uncaught ReferenceError: favoriteDestination is not defined
//     at travelDestinations (script.js:134) favoriteDestination is scoped to
//our for loop but we have tried to call it in travelDestinations

// Hoisting is a JavaScript mechanism where variables and function declarations
//are moved to the top of their scope before code execution.

//In plain English: hoisting means that variable and function declarations
//are read first before any other code is executed as opposed to being read in a
//strict top to bottom order

//put another way variable declarations are processed before any code is executed

//Take note of the fact that the hoisting mechanism only moves the declaration.
// The assignments are left in place.
//variables declared with "var", "let", "const" are all hoisted, but
// while var variables are initialized with undefined,
//let and const variables are not initialized.

//https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
//^^nice summary in bottom paragraph
// console.log(goodbye, "before initialization");
// var goodbye = "Sayonara";
// //console.log(goodbye, "after initialization");

// function sayGoodbye() {
//   //console.log(goodbye, "within sayGoodbye() function before initializaion");
//   var goodbye = "Adios";
//   //console.log(goodbye, "inside of sayGoodbye() function after initilization");
// }
// sayGoodbye();
// //console.log(goodbye, " outside of function after the function has been called");

// var goodbye = "Tzai Jien";
// //console.log(goodbye, "outside of function after reassignment");
