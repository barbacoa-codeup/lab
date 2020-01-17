"use strict";
// codewars
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).
// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.


function isPangram(string){
    // define the alphabet
    var letters = "abcdefghijklmnopqrstuvwxyz";
    // make all letters in string lowercase
    string = string.toLowerCase().replace(/[^a-z]/g,'');
    // iterate through up until the length of the alphabet
    for (var i = 0; i < 26; i++)
        // if the string does not include the letter return false
        if (string.indexOf(letters[i]) < 0) return false;
    // otherwise return true
    return true
}

// codewars
// In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.

isPangram();

function highAndLow(numbers) {
    var numArr = numbers.split(" ");
    var sortedNumArr = numArr.sort(function(a, b) {
        return a - b;
    });
    return sortedNumArr[sortedNumArr.length - 1] + " " + sortedNumArr[0];
}

// Write a sorting function that takes in an array of names and sorts them by last name either alphabetically (ASC) or reverse-alphabetically (DESC).
// https://edabit.com/challenge/oK8YTFzTDBzjQpmtH


const sortContacts = (names, sort) => {
    if (!names) return [];

    return names.sort((a, b) => {
        const lastA = a.split(' ')[1];
        const lastB = b.split(' ')[1];

        return sort === 'ASC'
            ? lastA.localeCompare(lastB)
            : lastB.localeCompare(lastA);
    });
};