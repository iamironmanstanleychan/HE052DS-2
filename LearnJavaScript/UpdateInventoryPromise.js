// Simulate inventory data
const inventory = {
    'prod1': { name: 'iPhone 16e', USD: 499, quantity: 15 },
    'prod2': { name: 'iPhone 16 Plus', USD: 699, quantity: 5 },
    'prod3': { name: 'iPhone 16 Pro Max', USD: 899, quantity: 10 },
    'prod4': { name: 'Mac Air 15', USD: 999, quantity: 20 },
    'prod5': { name: 'Mac Pro 14', USD: 1099, quantity: 12 },
    'prod6': { name: 'Mac Pro 16', USD: 1199, quantity: 8 }
};

function updateInventory(productId, quantity) {
    return new Promise((resolve, reject) => {
        // Check if the product ID is valid
        if (!inventory.hasOwnProperty(productId)) {
            reject(`Error: Invalid product ID ${productId}`);
            return;
        }

        // Check if the quantity is an integer
        if (!Number.isInteger(quantity)) {
            reject(`Error: Quantity must be an integer`);
            return;
        }

        // Check if the quantity is 0
        if (quantity === 0) {
            resolve(`\nNo inventory changes for ${inventory[productId].name}`);
            return;
        }

        // Update the inventory
        inventory[productId].quantity += quantity;

        // Resolve the promise with a success message including quantity changes
        resolve(`\nInventory change for ${inventory[productId].name} is ${quantity}, new stock now: ${inventory[productId].quantity}`);
    });
}
console.log('Inventory:', inventory);

// Example usage
updateInventory('prod1', -5)
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });
updateInventory('prod2', 5)
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });
updateInventory('prod3', 0) // Changed 'invalidProd' to 'prod6'
    .then(successMessage => {
        console.log(successMessage);
    });

updateInventory('prod4', -10) // Changed 'invalidProd' to 'prod6'
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });
    
updateInventory('prod5', -2) // Changed 'invalidProd' to 'prod6'
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });

updateInventory('prod6', 2) // Changed 'invalidProd' to 'prod6'
    .then(successMessage => {
        console.log(successMessage);
    })
    .catch(errorMessage => {
        console.error(errorMessage);
    });

// Show the whole inventory
updateInventory('prod1', 0)
    .then(() => updateInventory('prod2', 0))
    .then(() => updateInventory('prod3', 0))
    .then(() => updateInventory('prod4', 0))
    .then(() => updateInventory('prod5', 0))
    .then(() => updateInventory('prod6', 0))
    .then(() => {
        console.log('\nFinal Inventory:', inventory);
    });
