function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function reverseString(string) {
    return string.split("").reverse().join("");
}

const calculator = {
    subtract(int1, int2) {
        return int1 - int2;
    },
    add(int1, int2) {
        return int1 + int2;
    },
    divide(int1, int2) {
        return int1 / int2;
    },
    multiply(int1, int2) {
        return int1 * int2;
    }
}

function isUpperCase(letter) {
    return letter == letter.toUpperCase();
}

function isLowerCase(letter) {
    return letter == letter.toLowerCase();
}

function ceaserCipher(string, factor) {
    const lowercaseAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const uppercaseAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    let newString = "";
    const splitString = string.split("");
    for (let i = 0; i < splitString.length; i++) {
        if (isLowerCase(splitString[i])) {
            for (let j = 0; j < lowercaseAlphabet.length; j++) {
                if (lowercaseAlphabet[j] == splitString[i]) {
                    newString += lowercaseAlphabet[(j + factor) % lowercaseAlphabet.length];
                    break;
                }
            }
        } else if (isUpperCase(splitString[i])) {
            for (let j = 0; j < uppercaseAlphabet.length; j++) {
                if (uppercaseAlphabet[j] == splitString[i]) {
                    newString += uppercaseAlphabet[(j + factor) % uppercaseAlphabet.length];
                    break;
                }
            }
    }};
    return newString;
}

function analyzeArray(arr) {
    let currentLargestNum = arr[0];
    let currentLowestNum = arr[0];
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > currentLargestNum) {
            currentLargestNum = arr[i];
        }
        if (arr[i] < currentLargestNum) {
            currentLowestNum = arr[i];
        }
        sum += arr[i];
    }
    let averageArr = Math.ceil(sum / arr.length);
    let object = {
        average : averageArr,
        min : currentLowestNum,
        max : currentLargestNum,
        length : arr.length
    };
    return object;
}




module.exports = {capitalize, reverseString, calculator, ceaserCipher, analyzeArray}