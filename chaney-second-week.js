// https://javarevisited.blogspot.com/2011/06/top-programming-interview-questions.html

// 1) Write code to check a String is palindrome or not?

const isPalindrome = str => {
    // if the input is a string
    if (typeof (str) === 'string')
        // return true if the string is equal to:
        // string -> array of letters -> reverse the order -> rejoin array as new string
        return str === str.split('').reverse().join('');
};

isPalindrome('racecar');
isPalindrome('element');
isPalindrome(4);
isPalindrome('eye');

//2) Write a method which will remove any given character from a String?
// hint: you can remove a given character from String by converting it into a character array and then using substring() method for removing them from output string.

const removeChar = (str, char) => {
    // puts string to lowercase, separates letters into array
    let letterArray = str.toLowerCase().split('');
    // puts designated character to lowercase
    let character = char.toLowerCase();
    // sets blank array to push letters that are not equal to character
    let newArray = [];
    for (let i = 0; i < letterArray.length; i++) {
        //if the letter at index i does not equal the designated character
        if (letterArray[i] !== character)
            //push the corresponding letter into the blank array
            newArray.push(letterArray[i]);
    }
    // join the new array without the designated character into a string
    return newArray.join('')
};

removeChar('banana', 'a');
removeChar('oh okay', 'o');

// 3) Write a function named `capitalizeName` that accepts a string that is a first
// and last name separated by a space, and returns a string that that has the
// first and last names capitalized.
//
// *For this problem, you may assume that the function will only ever be called
// with a string that has two words separated by a single space.*
//
// ```js
//     capitalizeName('ron weasley') // "Ron Weasley"
//     ```
//

const capitalizeName = str => {
    let splitStr = str.toLowerCase().split(' ');
    for (let i = 0; i < splitStr.length; i++) {
        splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
    }
    // Directly return the joined string
    return splitStr.join(' ');
};

    capitalizeName('ron weasley'); // "Ron Weasley"