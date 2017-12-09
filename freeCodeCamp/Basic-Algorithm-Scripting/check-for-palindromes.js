//Check For Palindromes
function palindrome(str) {
    "use strict";
   
    var cleanString = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
    var palindromeChecker = cleanString.split('').reverse().join('');
   
    if (cleanString === palindromeChecker) {
      return true;
    } else {
     return false;
    }
   
 }
 palindrome("never odd or even"); 