function formatedString(str) {
    return str.trim("").toLowerCase();
}

function isAnagram(strOne, strTwo) {

    //check length 
    if (formatedString(strOne).length != formatedString(strTwo).length) {
        return false
    }

    let count = {}

    for (const key in formatedString(strOne)) {

        let currentChar = formatedString(strOne)[key]
        count[currentChar] = (count[currentChar] || 0) + 1;

    }

    for (const key in formatedString(strTwo)) {
        let currentChar = formatedString(strTwo)[key]

        if (!count[currentChar]) {
            return false
        }

        count[currentChar]--

    }
    return true

}

console.log(isAnagram("intergal", "triangle")); 
console.log(isAnagram("cat", "rat"));

