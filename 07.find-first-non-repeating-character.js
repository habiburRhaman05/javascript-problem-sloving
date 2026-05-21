function nonRepeatingChar(str){
    let count = {}



    for (const index in str) {
      let char = str[index];
       count[char] = (count[char] || 0) + 1;
    }


    for (const char in str) {
      let key = str[char]
        
    if(count[key] === 1){
        return key
    }
         
    }

    return null;

}

console.log(nonRepeatingChar("rreeacktc"));
