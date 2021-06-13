/*Homework 1
These exercises are aimed at making you familiar with logical operators. Print all your checks to the console. Make sure that you are using the correct logical operator.
Declare two variables: isDogBetter with the value of true, and isCatBetter with the value of false.
Check the result of:
a) isDogBetter AND isCatBetter.*/

let isDogBetter = true;
let isCatBetter = false;

console.log(`AND: ${isDogBetter && isCatBetter}`);

console.log(`OR: ${isDogBetter || isCatBetter}`);

console.log(`NOT: ${!(isDogBetter && isCatBetter)}`);


let atoms = Math.pow(10,78);
let starsInSky = Math.pow(10,21);
let sandGrains = 7.5*(Math.pow(10,18));

console.log(`atoms is greater than starsInSky AND atoms is greater than sandGrains: ${(atoms > starsInSky) && (atoms > sandGrains)}`);

console.log(`atoms is NOT equal to sandGrains: ${atoms != sandGrains}`);

console.log(`starsInSky is less than sandGrains OR starsInSky is greater than atoms: ${(starsInSky < sandGrains) || (starsInSky > atoms)}`);

console.log(`atoms is equal to starsInSky OR atoms is NOT equal to sandGrains: ${(atoms == starsInSky) || (atoms != sandGrains)}`);

console.log(`atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10: ${(atoms >= 10) && (sandGrains <= 10)}`);

console.log(`atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100: ${((atoms * starsInSky) < 100) || ((atoms * sandGrains) > 100)}`);

/*
Declare three more variables atoms, sandGrains, starsInSky. Give these variables number values.
Check the result of whether:
a) atoms is greater than starsInSky AND atoms is greater than sandGrains.
b) atoms is NOT equal to sandGrains.
c) starsInSky is less than sandGrains OR starsInSky is greater than atoms.
d) atoms is equal to starsInSky OR atoms is NOT equal to sandGrains.
e) atoms is greater than or equal to 10 AND sandGrains is less than or equal to 10.
f) atoms multiplied by starsInSky is less than 100 OR whether atoms multiplied by sandGrains is greater than 100.
BONUS: In your own words, explain the logic of each result in a comment after the result.



Homework 2
These exercises are designed to make you more comfortable with the ternary operator.
Declare a variable named isDog. If true, print ‘pat, pat’ and if not, print ‘find me a dog to pat!’
Declare a variable named speedCheck. If speedlimit is 50km/h, and your speed is above that, print ‘you’re going too fast!’. If speed is lower than 50km/h, print ‘You’re driving below the speed limit, Oma’.
*/

let isDog;

isDog = 1 < 2; 
console.log(isDog == true ? `pat, pat` : `find me a dog to pat!`);


let speed;
let speedlimitKmH = 50;

speed = 30;

let speedCheck = speed > speedlimitKmH ? `you’re going too fast!` : `You’re driving below the speed limit, Oma`;
console.log(speedCheck);

/*Declare a variable named age. If age is below 16, print “serve butter beer”. Otherwise print “serve beer”.
Declare a variable named isStudent. If true, print “Ticket costs €5,00”. If false, print “Ticket costs €12,00".
Declare a variable named okMarie. Check if there is ‘cake’ - if so, print “Let them eat cake”. If not, print “Oh, bother”.
*/

let age;

age = 18;
console.log(age < 16 ? `serve Butterbeer` : `Serve beer`);


let isStudent;

isStudent = 1 < 2;
console.log(isStudent == true ? `Ticke costs €5,00` : `Ticket costs $12,00`);

let okMarie;
let kitchen = ['bread', 'cake', 'butter'];
console.log(kitchen.includes('cake') ? 'Let them eat cake!' : 'Oh, bother');

/*Check if the following numbers are even numbers. Use a ternary and if the number is even print 30 is even, else print that it is odd.
30
939
40.9*/

let varNumber;
varNumber = 30;
console.log((varNumber%2) == 0 ? `${varNumber} is even` : `${varNumber} is odd`);

varNumber = 939;
console.log((varNumber%2) == 0 ? `${varNumber} is even` : `${varNumber} is odd`);

varNumber = 40.9;
console.log((varNumber%2) == 0 ? `${varNumber} is even` : `${varNumber} is odd`);