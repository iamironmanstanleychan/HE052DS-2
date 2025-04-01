const createProductClickHandler = (productId, productName) => {
    /* This is a closure function. The advantage of using a closure is that it allows the inner function
    to access the variables of the outer function even after the outer function has finished executing.
    This helps in creating functions with private variables that can maintain state. */
    return () => {
        console.log(`Product ID: ${productId}, Product Name: ${productName}`);
    };
}
/* 
function createProductClickHandler(productId, productName) {
    return function() {
        console.log(`Product ID: ${productId}, Product Name: ${productName}`);
    };
}
*/

// Example usage of createProductClickHandler
const product1Handler = createProductClickHandler(1, 'Shirt');
const product2Handler = createProductClickHandler(2, 'Shoes');
const product3Handler = createProductClickHandler(3, 'Hat'); // Added handler for product3
const product4Handler = createProductClickHandler(4, 'Socks'); // Added handler for product4

// Simulating product clicks
product1Handler(); // Product clicked: ID=1, Name=Shirt
product2Handler(); // Product clicked: ID=2, Name=Shoes
product3Handler(); // Product clicked: ID=3, Name=Hat // Simulating click for product3
product4Handler(); // Product clicked: ID=4, Name=Socks // Simulating click for product4

// Function to display all scenarios
function displayAllScenarios() {
    const scenarios = [
        { id: 1, name: 'Shirt' },
        { id: 2, name: 'Shoes' },
        { id: 3, name: 'Hat' },
        { id: 4, name: 'Socks' }
    ];

    scenarios.forEach(scenario => {
        const handler = createProductClickHandler(scenario.id, scenario.name);
        handler();
    });
}

// Display all scenarios
displayAllScenarios();
