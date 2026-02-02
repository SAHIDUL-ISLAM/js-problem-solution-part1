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

function repeatedNum(arr){
    let count = 0;
    for(let numOfArr of arr ){
        if(numOfArr === 25){
            count++;
        }
    }
    return count;
}
const numbers = [5,6,11,12,98,2];
const result = repeatedNum(numbers);
console.log(result);






// ********************

