const marks_Mass = 78;
const marks_Height = 1.69;
const johns_Mass = 92;
const johns_Height =1.95;


const marksMass = 95;
const marksHeight =1.88;
const johnsMass = 85;
const johnsHeight = 1.76;

let johnsBIMS;
johnsBIMS = johnsMass/(johnsHeight*johnsHeight); //we know formula to calculate body mass index bim is  body mass(kg)/( body height * body height)
console.log(`johns Bims is  ${johnsBIMS}`);

let marksBIMS;
marksBIMS = marksMass/(marksHeight*marksHeight);
console.log(`mark's Bims is ${marksBIMS}`);



const markHigherBMI = false;
console.log (markHigherBMI);