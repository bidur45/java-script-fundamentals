const bill_1 = 275;
let tip_1;
tip_1= bill_1>=50 && bill_1 <=300 ? (0.15 * bill_1): (0.20 * bill_1);
console.log(`tip amount for first bill is ${tip_1}`);

const bill_2 = 40;
let tip_2;
tip_2 = bill_2>=50 && bill_2 <=300 ? (0.15 * bill_2): (0.20 * bill_2);
console.log(`tip amount for second bill is ${tip_2}`);


const bill_3 = 430;
let tip_3;
tip_3 = bill_3>=50 && bill_3 <=300 ? (0.15 * bill_3): (0.20 * bill_3);
console.log(`tip amount for second bill is ${tip_3}`);


const total_bill_1 = bill_1+tip_1;
console.log(`The bill was ${bill_1}, the tip was ${tip_1}, the total value is ${total_bill_1}.`)

const total_bill_2 = bill_2+tip_2;
console.log(`The bill was ${bill_2}, the tip was ${tip_2}, the total value is ${total_bill_2}.`)

const total_bill_3 = bill_3+tip_3;
console.log(`The bill was ${bill_3}, the tip was ${tip_3}, the total value is ${total_bill_3}.`)

