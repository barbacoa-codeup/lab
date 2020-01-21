"use strict";
// https://coursework.vschool.io/array-reduce-exercises/

// Turn an array of numbers into a total of all the numbers

function total(arr) {
    return arr.reduce((a, b) => a + b, 0);
}

console.log(total([1,2,3])); // 6

// https://stackoverflow.com/questions/1230233/how-to-find-the-sum-of-an-array-of-numbers

// Turn an array of numbers into a long string of all those numbers.

function stringConcat(arr) {
    return arr.join('');
}

console.log(stringConcat([1,2,3])); // "123"

// https://www.geeksforgeeks.org/javascript-array-join-method/

// Turn an array of voter objects into a count of how many people voted

function totalVotes(arr) {
    return arr.reduce(function (totalVotes, voter) {
        return totalVotes + ( voter.voted ? 1 : 0); //ternary operator, like a one line if/else
    }, 0);// initial value for the reduce function
}



var voters = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

console.log(totalVotes(voters)); // 7

// Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once

function shoppingSpree(arr) {
    let sum = arr.reduce((a, {price}) => a + price, 0);
        return sum;
    }

var wishlist = [
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

console.log(shoppingSpree(wishlist)); // 227005

// 101 JavaScript Problems

// Given an array of arrays, flatten them into a single array

function flatten(arr) {
    return arr.flat(2);
}

var arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

console.log(flatten(arrays)); // ["1", "2", "3", true, 4, 5, 6];

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat

// Given an array of potential voters, return an object representing the results of the vote
// Include how many of the potential voters were in the ages 18-25, how many from 26-35, how many from 36-55, and how many of each of those age ranges actually voted. The resulting object containing this data should have 6 properties. See the example output at the bottom.

    let voters2 = [
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
   let result = {
       youngVotes: 0,
       youth: 0,
       midVotes: 0,
       mids: 0,
       oldVotes: 0,
       olds: 0
   };

   for(let i = 0; i<arr.length; i++){
       if(arr[i].age>=18 && arr[i].age<=25){
           result.youth++;
           if(arr[i].voted ){
               result.youngVotes++;
           }
       }else if(arr[i].age>=26 && arr[i].age<=35){
           result.mids++;
           if(arr[i].voted){
               result.midVotes++;
           }
       }else if (arr[i].age>=36 && arr[i].age<=55){
           result.olds++;
           if(arr[i].voted){
               result.oldVotes++;
           }
       }
   }
   return result;
}

console.log(voterResults(voters2)); // Returned value shown below:
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4
}
*/