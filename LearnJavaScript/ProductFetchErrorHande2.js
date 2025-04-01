// Sample product list
var productDatabase = {
  'prod1': { name: 'iPhone 16e', USD: 499, quantity: 15 },
  'prod2': { name: 'iPhone 16 Plus', USD: 699, quantity: 5 },
  'prod3': { name: 'iPhone 16 Pro Max', USD: 899, quantity: 10 },
  'prod4': { name: 'Mac Air 15', USD: 999, quantity: 20 },
  'prod5': { name: 'Mac Pro 14', USD: 1099, quantity: 12 },
  'prod6': { name: 'Mac Pro 16', USD: 1199, quantity: 8 }
};

// Function to simulate fetching product data from an API
async function fetchProductData(productId) {
  // Simulate a delay of 3 seconds (3000 milliseconds)
  await new Promise(resolve => setTimeout(resolve, 3000)); // Delay of 3000 milliseconds
  console.log(`await 3000`); 

  // Check if the product ID is invalid using the find method
  const productExists = Object.keys(productDatabase).find(id => id === productId);
  if (!productExists) {
    // Throw an error if the product ID is invalid
    throw new Error("is not in our ProductDatabase");
  } else {
    // If the product ID is valid, fetch the product details
    const product = {
      id: productId,
      ...productDatabase[productId]
    };
    // Return the product data
    return product;
  }
}

// Example usage:
// Get the number of products in the productDatabase
const numberOfProducts = Object.keys(productDatabase).length;

// Create an array of product IDs based on the number of products
const productIds = Array.from({ length: numberOfProducts + 1 }, (_, i) => `prod${i + 1}`);

// Iterate over each product ID with a delay
(async () => {
  // Using a for...of loop with await ensures that each call to fetchProductData waits for the previous one to complete
  for (const productId of productIds) {
    try {
      const product = await fetchProductData(productId);
      // Log the product details if the Promise resolves successfully
      console.log(`${productId} Details:`, product);
    } catch (error) {
      // Log an error message if the Promise is rejected
      console.error(`${productId}`, error.message);
    }
  }
})();

/* The previous implementation used forEach with setTimeout, which caused overlapping calls to fetchProductData
productIds.forEach((productId, index) => {
  setTimeout(async () => {
    try {
      const product = await fetchProductData(productId);
      // Log the product details if the Promise resolves successfully
      console.log(`${productId} Details:`, product);
    } catch (error) {
      // Log an error message if the Promise is rejected
      console.error(`${productId}`, error.message);
    }
  }, (index + 1) * 500); // Delay of 500 milliseconds for each iteration
});
*/
