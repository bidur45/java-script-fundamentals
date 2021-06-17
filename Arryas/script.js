'use strict'


// const friend1 = 'Anjila';
// const friend2 = 'Riya';
// const friend3 = 'Sital';

// const friends = ['Anjila', 'Riya', 'Sital'];
// console.log(friends[2]);

// // another way of declaring array is using array syntax
// // const friends = new Array('Anjila', 'Riya', 'Sital');
// // bracket is literal syntax in array

// console.log(friends.length);

// console.log(friends[friends.length - 1]);

// friends[1] = 'Pujan';
// console.log(friends);

// // friends = ['Anjil', 'Riy', 'Sita'];

// const calcAge = function (birthYear) {
//   return 2021 - birthYear;
// };

// const year = [2001, 1991, 2005, 2015];

// const age1 = calcAge(year[0]);
// console.log(age1);

// const age2 = calcAge(year[year.length - 1]);
// console.log(age2);

// const ages = [
//   calcAge(year[0]),
//   calcAge(year[1]),
//   calcAge(year[2]),
//   calcAge(year[3]),
// ];
// console.log(ages);

const friends = ['Abhilekh', 'Rupak', 'Saraswati'];
//////////////////////////////////////////////
// 1. PUSH METHODS
friends.push('Sarala');
// const newLength = friends.push('Sarala');
console.log(friends);

//////////////////////////////////////////////
// 2. UNSHIFT METHODS
friends.unshift('Ayush');
//const newLength = friends.unshift('Rupak');
console.log(friends);

//////////////////////////////////////////////
// 3. POP METHODS
// friends.pop();
friends.pop();
// const popped = friends.pop();
// console.log(popped);
console.log(friends);

//////////////////////////////////////////////
// 4. Shift METHOD
friends.shift();
console.log(friends);

//////////////////////////////////////////////
// 5. POSITION OF ELEMENT IN ARRAY
console.log(friends.indexOf('Rupak'));
// console.log(friends.indexOf('Ayush'));

//////////////////////////////////////////////
// 6. MODERN POSITION METHOD
console.log(friends.includes('Rupak'));
console.log(friends.includes('Ayush'));

//////////////////////////////////////////////
// 7. EXERCISE
friends.push(23);
console.log(friends);
console.log(friends.includes('23'));
// Strict equality. No type coercion.

//////////////////////////////////////////////
// 8. EXERCISE
if (friends.includes('Rupak')) {
  console.log('You are friend with Rupak !');
}
// Used for conditional operatorconst friends = ['Abhilekh', 'Rupak', 'Saraswati'];
//////////////////////////////////////////////