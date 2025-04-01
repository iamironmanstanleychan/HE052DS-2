// Example array
const numbers = [1, 2, 3, 4, 5, 7, 11, 13, 17, 18, 23, 31];

// Using .find to get the first element greater than 10
const firstGreaterThanTen = numbers.find(num => num > 10);
console.log(firstGreaterThanTen); // Output: 11

// Using .map to create a new array with each element doubled
const doubledNumbers = numbers.map(num => num * 2);
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10, 14, 22, 26, 34, 36, 46, 62]

// Using .filter to create a new array with elements greater than 10
const greaterThanTen = numbers.filter(num => num > 10);
console.log(greaterThanTen); // Output: [11, 13, 17, 18, 23, 31]

// Using .reduce to sum all elements in the array
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // Output: 135

// Using .forEach to log each element in the array
numbers.forEach(num => console.log(num));
// Output: 
// 1
// 2
// 3
// 4
// 5
// 7
// 11
// 13
// 17
// 18
// 23
// 31

// Using .splice to remove 3 elements starting from index 4 and insert new elements
const splicedArray = numbers.splice(4, 3, 50, 70, 110);
console.log(splicedArray); // Output: [5, 7, 11]
console.log(numbers); // Output: [1, 2, 3, 4, 50, 70, 110, 13, 17, 18, 23, 31]
