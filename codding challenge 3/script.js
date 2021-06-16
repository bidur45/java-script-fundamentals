
//task no 1
//for team dolphins
const dolphinsScore1 = 96;
const dolphinsScore2 = 108;
const dolphinsScore3 = 89;

const dolphinsAverageScore = (dolphinsScore1 + dolphinsScore2 + dolphinsScore3)/3;
console.log(`The average score of team dolphins is ${dolphinsAverageScore}.`);

//for team koalas 
const koalasScore1 = 88;
const koalasScore2 = 91;
const koalasScore3 = 110;

const koalasAverageScore = (koalasScore1 + koalasScore2 + koalasScore3)/3;
console.log(`The average score of team koalas is ${koalasAverageScore}.`);

//task no 2
if(dolphinsAverageScore > koalasAverageScore)
{
    console.log(`Team dolphins wins.`);
}
else if (dolphinsAverageScore === koalasAverageScore )
{
    console.log(`Game is draw.`);
}
else 
{
    console.log(`Team koalas wins.`);
    
}


//task no 3
//for team dolphins
const dolphins_Score1 = 97;
const dolphins_Score2 = 112;
const dolphins_Score3 = 101;

const dolphins_AverageScore = (dolphins_Score1 + dolphins_Score2 + dolphins_Score3)/3;

//for team koalas 
const koalas_Score1 = 109;
const koalas_Score2 = 95;
const koalas_Score3 = 123;

const koalas_AverageScore = (koalas_Score1 + koalas_Score2 + koalas_Score3)/3;

if(dolphins_AverageScore > 100 && dolphins_AverageScore > koalas_AverageScore)
{
    console.log(`Team dolphins wins`);
}
else if (koalas_AverageScore > dolphins_AverageScore && koalas_AverageScore > 100)
{
    console.log(`Team koalas wins.`);
}
 else
{
    console.log(`No one won`);
}


//task 4

const dolphins_Score_1 = 97;
const dolphins_Score_2 = 112;
const dolphins_Score_3 = 101;

const dolphins_Average_Score = (dolphins_Score1 + dolphins_Score2 + dolphins_Score3)/3;

//for team koalas 
const koalas_Score_1 = 109;
const koalas_Score_2 = 95;
const koalas_Score_3 = 106;

const koalas_Average_Score = (koalas_Score_1 + koalas_Score_2 + koalas_Score_3)/3;

if(dolphins_Average_Score > 100 && dolphins_Average_Score > koalas_Average_Score)
{
    console.log(`Team dolphins wins`);
}
else if (koalas_Average_Score > dolphins_Average_Score && koalas_Average_Score > 100)
{
    console.log(`Team koalas wins.`);
}
else if(koalas_Average_Score === dolphins_Average_Score && koalas_Average_Score >= 100 && dolphins_Average_Score >=100 )
{
    console.log(`Game is drawn`);
}
 else
{
    console.log(`No one won`);
}



