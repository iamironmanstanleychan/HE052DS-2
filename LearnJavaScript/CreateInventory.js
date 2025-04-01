function createInventory() {
    // Private variable to store product quantities
    const inventory = {};
    const backlog = {};

    return {
        // Method to add a product with a specified quantity
        addProduct(name, quantity) {
            if (!inventory[name]) {
                inventory[name] = 0;
            }
            inventory[name] += quantity;
            console.log(`Added ${quantity} of ${name}.`);
        },

        // Method to sell a specified quantity of a product
        sellProduct(name, quantity) {
            if (inventory[name]) {
                if (inventory[name] >= quantity) {
                    inventory[name] -= quantity;
                    console.log(`Sold ${quantity} of ${name}.`);
                } else {
                    console.log(`Not enough stock for ${name}. Only ${inventory[name]} left. Selling remaining stock.`);
                    backlog[name] = (backlog[name] || 0) - (quantity - inventory[name]);
                    inventory[name] = 0;
                }
            } else {
                console.log(`${name} is not in stock.`);
                backlog[name] = (backlog[name] || 0) - quantity;
            }
        },

        // Method to return the current inventory
        getInventory() {
            console.log('Current Inventory:', inventory);
            console.log('Backlog:', backlog);
            return { inventory, backlog };
        }
    };
}

// Example Usage:
const storeInventory = createInventory();

storeInventory.addProduct('MacbookPro 16-inch', 10); // Added 10 of MacbookPro 16-inch.
storeInventory.addProduct('MacAir 15-inch', 10); // Added 10 of MacAir 15-inch.
storeInventory.addProduct('MacAir 13-inch', 10); // Added 10 of MacAir 13-inch.
storeInventory.getInventory(); // Current Inventory: { MacbookPro 16-inch: 10, MacAir 15-inch: 10, MacAir 13-inch: 10 }

storeInventory.addProduct('iPhone 16 ProMax', 10); // Added 10 of iPhone 16 ProMax.
storeInventory.addProduct('iPhone 16 Plus', 10); // Added 10 of iPhone 16 Plus.
storeInventory.addProduct('iPhone 16e', 10); // Added 10 of iPhone 16e.
storeInventory.getInventory(); // Current Inventory: { MacbookPro 16-inch: 10, MacAir 15-inch: 10, MacAir 13-inch: 10, iPhone 16 ProMax: 10, iPhone 16 Plus: 10, iPhone 16e: 10 }

storeInventory.sellProduct('MacbookPro 16-inch', 1); // Sold 1 of MacbookPro 16-inch.
storeInventory.sellProduct('MacAir 15-inch', 2); // Sold 2 of MacAir 15-inch.
storeInventory.sellProduct('MacAir 13-inch', 3); // Sold 3 of MacAir 13-inch.
storeInventory.sellProduct('iPhone 16 ProMax', 4); // Sold 4 of iPhone 16 ProMax.
storeInventory.sellProduct('iPhone 16 Plus', 5); // Sold 5 of iPhone 16 Plus.
storeInventory.sellProduct('iPhone 16e', 6); // Sold 6 of iPhone 16e.
storeInventory.getInventory(); // Current Inventory: { MacbookPro 16-inch: 9, MacAir 15-inch: 8, MacAir 13-inch: 7, iPhone 16 ProMax: 6, iPhone 16 Plus: 5, iPhone 16e: 4 }

storeInventory.sellProduct('iPhone 16e', 6); // Not enough stock for iPhone 16e. Only 4 left. Selling remaining stock. Backlog: { iPhone 16e: -2 }
storeInventory.getInventory(); // Current Inventory: { MacbookPro 16-inch: 9, MacAir 15-inch: 8, MacAir 13-inch: 7, iPhone 16 ProMax: 6, iPhone 16 Plus: 5, iPhone 16e: 0 }, Backlog: { iPhone 16e: -2 }

