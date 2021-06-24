'use strict'
//? 1. Add Up
console.log('\nAdd Up:');
const sumIntFrom1ToN = (int) => 
{ let sum = 0;
    for (let i = 1; i <= int; i++){
      sum += i;
    }
    return sum;
}
console.log(sumIntFrom1ToN(4))
console.log(sumIntFrom1ToN(13));
console.log(sumIntFrom1ToN(600));

//? 2. Cubed
console.log('\nCubed:');

const sumOfCubes = (numOne = 0, numTwo = 0, numThree = 0) =>{

   let result = numOne**3 + numTwo**3 + numThree**3;
   return result;

}
console.log(sumOfCubes(1,5,9));
console.log(sumOfCubes(2));
console.log(sumOfCubes());

//? 3 String Check
console.log('\nString Check:');
const isStrStartOfWord = (string, word) =>
{
    if (word.substring(0,string.length) === string) {
        return true;
    }
    else {
        return false;
    }
}

console.log(isStrStartOfWord("bu", "button")) ;
console.log(isStrStartOfWord("tri", "triplet"));
console.log(isStrStartOfWord("beau", "pastry"));

//? 4. Less Than or Equal to Zero?
console.log('\nLess or equal Zero:');

const isLEQZero = (int) =>
{
    if (int <= 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(isLEQZero(3));
console.log(isLEQZero(0));
console.log(isLEQZero(-4));
console.log(isLEQZero(10));

//? 5. Count Occurrences

console.log('\nCount occurrences:');

const countOccurrences = (string, char) =>
{
    const array = [...string.matchAll(char)];
    return array.length;
}
console.log(countOccurrences("this is a string", "i"));

//? 6. X To The Power of X

console.log('\nX to the power of X:');

const calcBaseToExponent = (base, exponent) =>
{
   while (base > 0 && exponent > 0 && Number.isInteger(base) && Number.isInteger(exponent)) 
   {
    let result = 1;
    for (let i = 1; i <= exponent; i++)
    {
        result *= base;
        }
        return result;
    }
    return 'Input positive integers please';
}

console.log(calcBaseToExponent(-5,5));
console.log(calcBaseToExponent(10,10.5));
console.log(calcBaseToExponent(3,3));

//? 7. Dog Years

console.log('\nDog Years:');

const dogAge = (age) => {
    const calc = 7;
    return `Your doggo is ${calc * age} years old in dog years`;
}
console.log(dogAge(4));

//? 8. A Lifetime Supply

console.log('\nA Lifetime Supply:');

const calcLifetimeSupply = (age, amount, maxAge) =>
{
    /* const maxAge = 100; */
    let result = Math.round((maxAge-age)*365.25*amount)
    return `The snack company should provide you with ${result} units, until you are a ripe old age of ${maxAge}. Happy snacking!`;
}
console.log(calcLifetimeSupply(32,0.58,65));

//? 9. Where's Waldo? 

console.log('\nWhere\'s Waldo?');

const isWaldoHere = (string) =>
{   
    const searchFor= 'waldo';
    return string.toLowerCase().includes(searchFor)
}
console.log(isWaldoHere("is there a wal here?"));
console.log(isWaldoHere("I found you Waldo!"));
console.log(isWaldoHere("Wait, don't you mean Wally?"));
console.log(isWaldoHere("waldo is here"));

//? 10. Pie
console.log('\nPie:');

const isEqualSlices = (totalSlices, recipients, slicesPerPerson) =>
{
    if (recipients*slicesPerPerson <= totalSlices)
    {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEqualSlices(11, 5, 3));
console.log(isEqualSlices(8, 3, 2));
console.log(isEqualSlices(8, 3, 3));
console.log(isEqualSlices(24, 12, 2));

//? 11. XO
console.log('\nXO:');

const isEqualNumXandO = (string) =>{
    const numberOfO = [...string.toLowerCase().matchAll('o')]; //*numberOfO.length;
    const numberOfX = [...string.toLowerCase().matchAll('x')];
    if (numberOfO.length === numberOfX.length)
    {
        return true;
    }
    else {
        return false;
    }
}
console.log(isEqualNumXandO("ooxx"));
console.log(isEqualNumXandO("xooxx"));
console.log(isEqualNumXandO("ooxXm"));
console.log(isEqualNumXandO("zpzpzpp"));
console.log(isEqualNumXandO("zzoo"));

//? 12. isPrime?

console.log('\nisPrime?');

//* check whether it is evenly divisible by any prime number between 2 and √n 

const isPrime = num => {
  for (let i = 2; i < num; i++)
    if (num % i === 0) return false;
  return num > 1;
}
  
console.log(isPrime(7));
console.log(isPrime(9));
console.log(isPrime(10));


//? 13. Validate Email
console.log('\nValidate Email:');

/*
//* The string must contain at least one "." character

console.log(string.includes('.'));

//* "@" must have at least one character in front of it

console.log(string.indexOf('@')!== 0);

//* The string must contain exactly one "@" character
let searchAt = [...string.matchAll('@')]

console.log(searchAt.length === 1)

//* "." can neither be directly before, nor directly after, "@"

console.log(string.charAt(indexOfAt-1) !== '.' && string.charAt(indexOfAt+1)!== '.');

//* neither "." nor "@" can be the last character

console.log(string.charAt(string.length-1) !== '.' && string.charAt(string.length-1) !== '@')

//* there cannot be consecutive "." characters

console.log(string.includes('..')!==true);

//* must include '.' past the @
console.log(string.indexOf('.', indexOfAt)!== -1);*/


const emailValidation = (string) =>
{
    let indexOfAt = string.indexOf('@')
    let searchAt = [...string.matchAll('@')]

    if (
    string.includes('.') &&
    string.indexOf('@')!== 0 &&
    searchAt.length === 1 &&
    string.charAt(indexOfAt-1) !== '.' &&
    string.charAt(indexOfAt+1)!== '.' &&
    string.charAt(string.length-1) !== '.' &&
    string.indexOf('.', indexOfAt)!== -1 &&
    string.charAt(string.length-1) !== '@' &&
    string.includes('..')!==true)
    {
        return 'thanks for your email';
    }
    else {
       return 'invalid email';
    }
}

console.log(emailValidation('j@example.com'));
console.log(emailValidation('@example.com'));
console.log(emailValidation('john.smith@com'));
console.log(emailValidation('john..smith@email.com'));
console.log(emailValidation('john.smith@email.com'));