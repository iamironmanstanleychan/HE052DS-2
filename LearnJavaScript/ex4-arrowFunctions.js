// Define an arrow function using an arrow function with a single expression
let hello = () => "Hello World!";

// Call the arrow function and log the output
console.log(hello()); // Outputs: "Hello World!"

// Define a function using a function expression
hello = function() {
    return "Hello World!";
};

// Call the function and log the output
console.log(hello()); // Outputs: "Hello World!"

// Define an arrow function using an arrow function with a block
hello = () => {
    // Additional JavaScript logic can be added here
    return "Hello World!";
};

// Call the function and log the output
console.log(hello()); // Outputs: "Hello World!"




// Define an arrow function with a parameter
const greet = (name) => {
    return `Hello, ${name}!`;
};

// Call the function and log the output
console.log(greet("Alice")); // Outputs: "Hello, Alice!"
console.log(greet("Bob"));   // Outputs: "Hello, Bob!"