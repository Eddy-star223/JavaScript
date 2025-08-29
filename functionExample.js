
function addition(x, y) {
    return x + y;
}
function subtraction(x, y) {
    return x - y;
}
function multiplication(x, y) {
    return x * y;
}
function division(x, y) {
    return x / y;
}
function operation(callBack, a, b) {
    return callBack(a, b);
}

    console.log(operation(addition, 5, 3)); 
    console.log(operation(subtraction, 5, 3)); 
    console.log(operation(multiplication, 5, 3));
    console.log(operation(division, 6, 3));
    
    

    function getMedian(arr1, arr2) {
    const merged = arr1.concat(arr2);

    merged.sort((a, b) => a - b);

    const length = merged.length;
    const mid = Math.floor(length / 2);

    if (length % 2 === 0) {
        return (merged[mid - 1] + merged[mid]) / 2;
    } else {
        return merged[mid];
    }
}

const array1 = [23, 45, 12, 67];
const array2 = [56, 78, 90, 11];

console.log(getMedian(array1, array2));


function wordToDictionary(word) {
    const result = {};
    const lower = word.toLowerCase();

    for (let char of lower) {
        result[char] = lower.split(char).length - 1;
    }

    return result;
}

console.log(wordToDictionary("Femi go to schOOl"));




     