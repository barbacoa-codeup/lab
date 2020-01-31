"use strict";
// Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num up to length.

function arrayOfMultiples (num, length) {
    var product = 0;
    var bucket = [];
    for(var i = 0; i < length; i++){
        product += num;
        bucket.push(product);
    }
    return bucket;
}

console.log(arrayOfMultiples(7, 5)); // ➞ [7, 14, 21, 28, 35]
console.log(arrayOfMultiples(12, 10)); // ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]
console.log(arrayOfMultiples(17, 6)); // ➞ [17, 34, 51, 68, 85, 102]

// past exercises

// This is a reverse coding challenge. Normally you're given explicit directions with how to create a function. Here, you must generate your own function to satisfy the relationship between the inputs and outputs.
//
// Your task is to create a function that, when fed the inputs below, produce the sample outputs shown.

function mysteryFunc(arr, num) {
    return arr.map(function(x, i) {
        return x % num;
    });
}

console.log(mysteryFunc([5, 7, 8, 2, 1], 2)); // ➞ [1, 1, 0, 0, 1]
Console.log(mysteryFunc([9, 8, 16, 47], 4)); // ➞ [1, 0, 0, 3]
console.log(mysteryFunc([17, 11, 99, 55, 23, 1], 5)); // ➞ [2, 1, 4, 0, 3, 1]
console.log(mysteryFunc([6, 1], 7)); // ➞ [6, 1]
console.log(mysteryFunc([3, 2, 9], 3)); // ➞ [0, 2, 0]
console.log(mysteryFunc([48, 22, 0, 19, 33, 100], 10)); // ➞ [8, 2, 0, 9, 3, 0]

//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

