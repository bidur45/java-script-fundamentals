'use strict'
// for(let i = 1; i<10; i++) {
//     console.log(`This is number ${i} ✔️`);
//   }
const friends = [
    'Riya',
    'Sital',
    1991,
    '23',
    '25',
    ['Anita', 'Ramesh'],
    true
  ];
  
//   const type = [];
//   for (let i =0; i < friends.length; i++) {
//     console.log(friends[i]);
//     // type[i] = typeof friends[i];
  
//     type.push(typeof friends[i]);
//   }
//   console.log(type);
  
//   const years = [1991, 1987, 2001, 2007, 2020];
//   const ages = [];
//   for (let i=0; i < years.length; i++) {
//     ages[i] = 2021 - years[i];
//   }
//   console.log(ages);
  
  // continue and break
//   for (let i =0; i < friends.length; i++) {
    
//     if(typeof friends[i] != 'string') continue;
//     console.log(friends[i]);
    
//   }
  
//   console.log('----Break----')
//   for (let i =0; i < friends.length; i++) {
    
//     if(typeof friends[i] === 'number') break;
//     console.log(friends[i]);
    
//   }

// Looping Backward
// for (let i = friends.length - 1; i >= 0; i--) {
//     console.log(i, friends[i]);
//   }
  
  // Loop inside loop
//   for (let i = 1; i < 4; i++) {
//     console.log(`----Starting main exercise ${i} 🏋️`)
//     for(let j = 1; j < 6; j++) {
//       console.log(`Lifting weight exercise ${j}`)
//     };
//   }
// let i = 1;

// more versatile than for loop
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let dice = Math.trunc(Math.random() * 6) + 1;
// console.log(dice);

// while (dice !== 6) {
//   console.log(`You rolled a ${dice}`);
//   dice = Math.trunc(Math.random() * 6) + 1;
// }