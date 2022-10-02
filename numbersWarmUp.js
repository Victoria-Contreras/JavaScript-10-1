const arrayOfNumbers = [0, 4, 7, 18, 21, 19, 142, 3]

let largestNumber = arrayOfNumbers[0]

function findlargestNumber() {
    for (let i = 0; i < arrayOfNumbers.length; i++){
        console.log(`Our largest number so far is ${largestNumber}`)

        if (arrayOfNumbers[i] > largestNumber) {
            console.log(`We have found a larger number. ${arrayOfNumbers[i]} is larger than ${largestNumber}`)
            largestNumber = arrayOfNumbers[i];
        }
    }
    return largestNumber;
}
// console.log(findlargestNumber());

function findEvenNumbers() {
    let evenArray = []
    for (i = [0]; i < arrayOfNumbers.length; i++){
        if ((arrayOfNumbers[i] % 2) === 0) {
            evenArray.push(arrayOfNumbers[i]);
        }
    }
    return evenArray;
}
console.log(findEvenNumbers());

function findOddNumbers() {
    let oddArray = []
    for (i = [0]; i < arrayOfNumbers.length; i++) {
        if ((arrayOfNumbers[i] % 2) === 1) {
            oddArray.push(arrayOfNumbers[i]);
        }
    }
    return oddArray;
}
console.log(findOddNumbers());