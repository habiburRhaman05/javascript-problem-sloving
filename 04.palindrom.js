function isPalindrome(str) {
    let right = str.length - 1;
    
    for (let index = 0; index < str.length / 2; index++) {
        if (str[index] !== str[right - index]) {
            return false;
        }
    }
    return true;
}

console.log(isPalindrome("2002"));    
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));  

