// Helper function to add delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function createCart() {
    // Private variable to store cart items
    let cart = [];

    return {
        // Method to add an item to the cart
        addItem: async function(name) {
            await delay(2000); // Add a delay of 2000ms
            const product = Object.values(productDatabase).find(item => item.name === name);
            if (product && product.quantity > 0) {
                cart.push({ name, price: product.USD });
                product.quantity -= 1;
                console.log(`\nAdded item: ${name}, Price: ${product.USD}`);
            } else {
                console.log(`\nItem out of stock: ${name}`);
            }
            console.log('Current items in cart:', cart);
        },
        
        // Method to remove an item by name
        removeItem: async function(name) {
            await delay(4000); // Add a delay of 4000ms
            const index = cart.findIndex(item => item.name === name);
            if (index !== -1) {
                cart.splice(index, 1);
                const product = Object.values(productDatabase).find(item => item.name === name);
                if (product) {
                    product.quantity += 1;
                }
                console.log(`\nRemoved item: ${name}`);
            } else {
                console.log(`Item not found: ${name}`);
            }
            console.log('Current items in cart:', cart);
        },
        
        // Method to calculate the total price of items in the cart
        getTotal: function() {
            // Use reduce to sum up the prices of all items in the cart
            const total = cart.reduce((sum, item) => {
                // Convert item.price to a number before adding to sum
                return sum + Number(item.price);
            }, 0); // 0 is the initial value of the accumulator
            console.log(`Total price is USD${total}`);
            return total;
        },
        
        // Method to return the current items in the cart
        getItems: function() {
            return cart;
        }
    };
}

var productDatabase = {
    'prod1': { name: 'iPhone 16e', USD: 499, quantity: 15 },
    'prod2': { name: 'iPhone 16 Plus', USD: 699, quantity: 5 },
    'prod3': { name: 'iPhone 16 Pro Max', USD: 899, quantity: 10 },
    'prod4': { name: 'Mac Air 15', USD: 999, quantity: 20 },
    'prod5': { name: 'Mac Pro 14', USD: 1099, quantity: 12 },
    'prod6': { name: 'Mac Pro 16', USD: 1199, quantity: 8 }
};

// Test scenarios
(async () => {
    // Create a new cart instance
    const myCart = createCart();

    // Add an item to the cart and wait for the operation to complete
    await myCart.addItem('iPhone 16e'); // Added: iPhone 16e, Price: $499
    myCart.getTotal(); // Total Price: $499
    
    // Add a delay before the next operation
    await delay(1000);
    // Add another item to the cart and wait for the operation to complete
    await myCart.addItem('iPhone 16 Pro Max'); // Added: iPhone 16 Pro Max, Price: $899
    myCart.getTotal(); // Total Price: $1398
    
    // Add a delay before the next operation
    await delay(1000);
    // Add another item to the cart and wait for the operation to complete
    await myCart.addItem('Mac Air 15'); // Added: Mac Air 15, Price: $999
    myCart.getTotal(); // Total Price: $2397
    
    // Add a delay before the next operation
    await delay(2000);
    // Remove an item from the cart and wait for the operation to complete
    await myCart.removeItem('iPhone 16e'); // Removed: iPhone 16e
    myCart.getTotal(); // Total Price: $1398

    
    // Add a delay before the next operation
    await delay(2000);
    // Log the current items in the cart

    console.log(`\nNumber of purchased items: ${myCart.getItems().length}`);
    console.log('Checkout Items:', myCart.getItems()); 
    // [{ name: 'iPhone 16 Pro Max', price: 899 }, { name: 'Mac Air 15', price: 999 }]
    console.log(`\nThank you, Payment of USD${myCart.getTotal()} processed successfully.`);

    
    // Add a delay before the next operation
    await delay(2000);
    // Show the updated productDatabase dynamically
    console.log('\nUpdated productDatabase:', Object.fromEntries(
        Object.entries(productDatabase).filter(([key, value]) => value.quantity !== 0)
    ));
})();

