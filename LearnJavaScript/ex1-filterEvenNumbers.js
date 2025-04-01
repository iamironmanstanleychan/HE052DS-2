function filterEvenNumbers(arr) {
    const evenNumbers = [];
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            // evenNumbers.push(arr[i]);
            evenNumbers[count] = arr[i] ;
            count++;
        }
    }
    return evenNumbers;
}
const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); // Output: [2, 4, 6]