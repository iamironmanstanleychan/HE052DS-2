const productDatabase = {
    'prod1': { name: 'iPhone 16e', USD: 499, quantity: 15 },
    'prod2': { name: 'iPhone 16 Plus', USD: 699, quantity: 5 },
    'prod3': { name: 'iPhone 16 Pro Max', USD: 899, quantity: 10 },
    'prod4': { name: 'Mac Air 15', USD: 999, quantity: 20 },
    'prod5': { name: 'Mac Pro 14', USD: 1099, quantity: 12 },
    'prod6': { name: 'Mac Pro 16', USD: 1199, quantity: 8 }
};
async function fetchProductData(productId) {
    if (!productDatabase[productId]) {
        throw new Error(`Product with ID ${productId} not found`);
    }
    return productDatabase[productId];
}

async function fetchProducts(productIds) {
    const fetchPromises = productIds.map(id => 
        fetchProductData(id).then(
            product => {
                console.log(`Successfully fetched product: ${product.name}`);
                return product;
            },
            error => {
                console.error(`Failed to fetch product with ID ${id}: ${error.message}`);
                return { id, error: error.message }; // Return error object for failed fetches
            }
        )
    );


    const results = await Promise.all(fetchPromises);
    const successfulFetches = results.filter(result => !result.error);
    const failedFetches = results.filter(result => result.error);

// Log fetched products first
   console.log('\nFetched products:', successfulFetches); 

    if (failedFetches.length > 0) {
        console.log('Some products were not found in the database:', failedFetches.map(f => f.id));
    }

    return successfulFetches; // Return only successful fetches
}

// Example usage
const productIds = ['prod1', 'prod2', 'prod3', 'prod4', 'prod5', 'prod6', 'prod7'];

fetchProducts(productIds).then(products => {
    console.log('\n');
    // console.log('\nFetched products:', products);
});

