/*
  Implement a function `isPalindrome` which takes a string as an argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrome as 'N' and 'n' are considered case-insensitive.
*/

  const str =  "racecar";
  function palindrome(string){
    const reverseString = string.split('').reverse().join('');   //reverse a string and check if the string matches the original the string is palindrome 
    return string === reversedString;
  }
  const result = palindrome(string);
  console.log(result);
