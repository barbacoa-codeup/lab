//https://javarevisited.blogspot.com/2011/06/top-programming-interview-questions.html

// 1) Write code to check a String is palindrome or not?

function isPalindrome(str) {
    if (typeof(str) === 'string')
        return str === str.split('').reverse().join('');
}

// isPalindrome('racecar');
// isPalindrome('element');
// isPalindrome(4);
// isPalindrome('eye');

//2) Write a method which will remove any given character from a String?
// hint: you can remove a given character from String by converting it into a character array and then using substring() method for removing them from output string.

function removeChar(str) {
    
}

// 3) Print all permutation of String both iterative and Recursive way? (solution)
