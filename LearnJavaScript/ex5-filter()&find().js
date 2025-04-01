<<<<<<< HEAD
const cartItems = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 1 },
  { productId: 3, quantity: 1 }
];

const availableProducts = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Mouse", inStock: false },
  { id: 3, name: "Keyboard", inStock: true }
];

// Method 1:
const inStockCartItems = cartItems.filter(cartItem => 
  // Find the product corresponding to the cart item
  // Return Value: If product is undefined, the filter will exclude that cart item.
  availableProducts.find(product => 
    product.id === cartItem.productId && product.inStock)
);

console.log("inStockCartItems", inStockCartItems);
// Output: [{ productId: 1, quantity: 2 }, { productId: 3, quantity: 1 }]


// Method 2:
const inStockCartItems2 = cartItems.filter(cartItem => {
  // Find the product corresponding to the cart item
  const product = availableProducts.find(
    product => product.id === cartItem.productId);
  
  // Check if the product exists and is in stock
  return product && product.inStock; // This will return true if the product exists and is in stock
});

console.log("inStockCartItems2", inStockCartItems2);
=======
const cartItems = [
  { productId: 1, quantity: 2 },
  { productId: 2, quantity: 1 },
  { productId: 3, quantity: 1 }
];

const availableProducts = [
  { id: 1, name: "Laptop", inStock: true },
  { id: 2, name: "Mouse", inStock: false },
  { id: 3, name: "Keyboard", inStock: true }
];

// Method 1:
const inStockCartItems = cartItems.filter(cartItem => 
  // Find the product corresponding to the cart item
  // Return Value: If product is undefined, the filter will exclude that cart item.
  availableProducts.find(product => 
    product.id === cartItem.productId && product.inStock)
);

console.log("inStockCartItems", inStockCartItems);
// Output: [{ productId: 1, quantity: 2 }, { productId: 3, quantity: 1 }]


// Method 2:
const inStockCartItems2 = cartItems.filter(cartItem => {
  // Find the product corresponding to the cart item
  const product = availableProducts.find(
    product => product.id === cartItem.productId);
  
  // Check if the product exists and is in stock
  return product && product.inStock; // This will return true if the product exists and is in stock
});

console.log("inStockCartItems2", inStockCartItems2);
>>>>>>> c81694a5f8d8cfecb294864b4227d4a849cc20a8
// Output: [{ productId: 1, quantity: 2 }, { productId: 3, quantity: 1 }]