// Task-1:
// Write a function to convert temperature from Celsius to Fahrenheit.

// function celsiusToFahrenheit(celsious){
//     let Fahrenheit = (celsious*1.8)+32;
//     return Fahrenheit;
// }
// const result = celsiusToFahrenheit(10);
// console.log(result);





// ********************


// You are given an array of numbers. Count how many times the a number is repeated in the array.

// sample-input: numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2


// sample-input:

// numbers = [5,6,11,12,98, 5]

// find: 25

// output: 0

// function repeatedNum(arr){
//     let count = 0;
//     for(let numOfArr of arr ){
//         if(numOfArr === 5){
//             count++;
//         }
//     }
//     return count;
// }
// const numbers = [5,6,11,12,98,2,5];
// const result = repeatedNum(numbers);
// console.log(result);






// ********************

/**
 * Task-3:
Write a function to count the number of vowels in a string.
 */

// function vowels(givenVowel){
//     let sum = "";
//     const strLowerCase = givenVowel.toLowerCase();
//     const strToArr = strLowerCase.split("");
//     for(const strArray of strToArr){
//         if(strArray == "a"){
//             sum = strArray + sum;
//         }else if(strArray == "e"){
//             sum = strArray + sum;
//         }else if(strArray == "i"){
//             sum = strArray + sum;
//         }else if(strArray == "o"){
//             sum = strArray + sum;
//         }else if(strArray == "u"){
//             sum = strArray + sum;
//         }
//     } 
//     const len = sum.split("").length;
//     return len;
// }
// const vowel = "I love";
// const str = vowels(vowel);
// console.log(str);


/**
 * 
Task-4:
Write a function to find the longest word in a given string.

sample-input: I am learning Programming to become a programmer

sample-output: Programming
 */
// function word(longest){
//     const strToArr = longest.split(" ");
//     let sum = "";
//     for(const array of strToArr){
//         if(array.length>sum.length){
//             sum = array;
//         }
//     }
//     return sum;
// }
// const str = "I am learning Programming to become a programmer";
// const theword = word(str);
// console.log(theword);


/**
 * Generate a random number between 10 to 20.
 */
// const max = 21;
// const min = 10;
// console.log(Math.floor(Math.random()*(max-min)+min));

function randomNumber(max, min){
    const generator = Math.floor(Math.random()*(max-min)+min);
    return generator;
}
const result = randomNumber(21,10);
console.log(result);
