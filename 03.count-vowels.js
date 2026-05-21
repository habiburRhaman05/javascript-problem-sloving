// 6. Count Vowels
// Task: Count how many vowels (a, e, i, o, u) are in a given string.

// Input: string s
// Output: integer
// Constraints: s contains English letters and spaces.
// Edge Case: String with no vowels.
// Hint: Iterate through the string and check if each character is in a "vowel" set.


function countVowels(str){
    
    let vowles = ["a","e","i","0","u","A","E","I","O","U"];
    let count = 0

    
    for (let i = 0; i < str.length - 1; i++) {
        const element = str[i];

        if(vowles.includes(element)){
            count++
        }
        
    }

    return count


}


console.log(countVowels("bangladesh"));
