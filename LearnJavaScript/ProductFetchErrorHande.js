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
function fetchProductData(productId) {
  // Return a new Promise
  return new Promise((resolve, reject) => {
    // Simulate a delay of 2 seconds (2000 milliseconds)
    setTimeout(() => {
      // Check if the product ID is invalid
      if (!productDatabase[productId]) {
        // Reject the Promise with an error message
        reject("is not in our ProductDatabase");
      } else {
        // If the product ID is valid, fetch the product details
        const product = {
          id: productId,
          ...productDatabase[productId]
        };
        // Resolve the Promise with the product data
        resolve(product);
      }
    }, 2000); // Delay of 2000 milliseconds (2 seconds)
  });
}

// Example usage:
for (let i = 1; i <= 7; i++) {
  const productId = `prod${i}`;
  setTimeout(() => {
    fetchProductData(productId)
      .then((product) => {
        // Log the product details if the Promise resolves successfully
        console.log(`${productId} Details:`, product);
      })
      .catch((error) => {
        // Log an error message if the Promise is rejected
        console.error(`${productId}`, error);
      })
      .catch(() => {
        // Log a generic error message for any unexpected errors
        console.error("ERROR!");
      });
  }, i * 1000); // Delay of 1 second for each iteration
}
