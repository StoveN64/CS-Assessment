//=======================================
// Sum Zero

function sumZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 1; j < arr.length; j++) {
            if (i !== j) {
                if (arr[i] + arr[j] === 0) {
                    return true
                } 
            }
        }
    }
    return false
}

let arr = [3,5,6,7,-6];
console.log(sumZero(arr));

// Runtime = O(n^2)

//=======================================
// Unique Chars

function uniqueChars(string) {
    for(let i = 0; i < string.length; i++) {
        for(let j = i + 1; j < string.length; j++) {
            if (string[i] == string[j])
            return false;
        }
    }
    return true;
}

console.log(uniqueChars('Monday'))
console.log(uniqueChars('Moonday'))

// Runtime = O(n^2)

//=======================================
// Pangram 
function isAPangram(str) {
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (i = 0; i < letters.length; i++) {
        const letter = letters[i];
        if (!str.includes(letter)) {
            return false
        }
    }
    return true
}

console.log(isAPangram("The quick brown fox jumps over the lazy dog!"));
console.log(isAPangram("I like cats, but not mice"));

// Runtime = O(n)

//=======================================
// Longest Word

function findLongestWord(arr) {
    let longestWord = arr[0].length;
    for (i = 1; i < arr.length; i++) {
       longWord = Math.max(arr[i].length, longestWord)
    }
    return longestWord
};

const array = ['hi', 'hello']
console.log(findLongestWord(array))

// Runtime = O(n)