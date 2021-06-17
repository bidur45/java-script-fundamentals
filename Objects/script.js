'use strict'

// const friends = [
//   'Riya',
//   'Sital',
//   '23',
//   '25',
//   ['Anita', 'Ramesh']
// ];
// Multiple values all belongs to friends denoted by their position or order number but not name.

// const friends = {
//     friend1: 'Riya',
//     friend2: 'Sital',
//     age1: '23',  
//     age2: '25',
//     otherFriends: ['Anita', 'Ramesh'],
//   };
  // key and values
  // key is also called property
  // order of the key values doesn't matter while retrieving
  // Array is structured data but object unstructured.
  
  // {} - object literal syntax
//   console.log(friends);
  // console.log(console.log);

    


//   bracket and .notation




// const friends = {
//     firstFriend : 'Riya',
//     secondFriend : 'Sital',
//     age1 : '23',
//     age2 : '25',
//     otherFriends : ['Anita', 'Ramesh']
//   };
  
//   console.log(friends);
  
  //////////////////////////////////////////////
  // 1. Getting property
//   console.log(friends.otherFriends);
  // console.log(friends['firstFriend']);
//   console.log(friends.firstFriend);
  
  //////////////////////////////////////////////
  // 2. EXERCISE
//   const nameKey = 'Friend';
//   console.log(friends['first' + nameKey]);
  // We can't calculate explicitly
  
//   const allFriends = prompt('Who are your other friends?')
//   // // console.log(friends[allFriends]);
//   if (friends[allFriends]) {
//     console.log(friends[allFriends]);
//   } else {
//     console.log('You have entered wrong request.');
//   }
  
//   friends.newFriend = 'Priya';
//   friends['leader'] = 'Anita';
//   console.log(friends);
  
  
  // I have 2 other friends and my best friend is Anita
//   console.log(`I have ${friends.otherFriends.length} other friends and my best friend is ${friends.otherFriends[0]}`);
  // See operator precedence for . and []




//  objects method



const ayush = {
    firstName : 'Ayush',
    lastName : 'Maharjan',
    birthYear : 2000,
    job : 'Student',
    friends : ['Sajal', 'Manish', 'Kamal'],
    hasDriverLicense : true,
  
    // calcAge: function (birthYear) {
    //   return 2021 - birthYear;
    // }
  
    // we can't use
    // function calcAge(birthYear) {
    //   return 2021 - birthYear;
    // }
  
    // calcAge: function () {
    //   // console.log(this);
    //   // Why not console.log(ayush);
    //   // DRY principle
    //   return 2021 - this.birthYear;
    // }
  
    calcAge: function() {
      ayush.age = 2021 - ayush.birthYear;
      return ayush.age;
    },
  
    getSummary: function() {
      return `${ayush.firstName} is a ${ayush.age} years old ${ayush.job} and he has ${this.hasDriverLicense ? 'a' : 'no'} driver's License`;
    }
  
  };
  
//   console.log(ayush.calcAge());
//   console.log(ayush['calcAge'](2000));
  
  console.log(ayush.calcAge());
  // what if above code is commented?
  console.log(ayush);
//   console.log(ayush.age);
  
  // console.log(`${ayush.firstName} is a ${ayush.age} years old ${ayush.job}`);
  
  console.log(ayush.getSummary());
  
  // arrays are special kinds of object because they 