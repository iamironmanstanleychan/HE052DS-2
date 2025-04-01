const products = [
  { id: 1, name: "Laptop", price: 999 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Keyboard", price: 75 }
];

// Task 1: Find the product with id 2 and display its details

const productWithId2 = products.find(product => product.id === 2);
console.log("Exercise 1", productWithId2, "\n");

const orders = [
  { id: 1, status: "completed" },
  { id: 2, status: "pending" },
  { id: 3, status: "pending" }
];

// Task: Create a new array that contains only the pending orders

const pendingOrders = orders.filter(order => order.status === "pending");
console.log("Exercise 2", pendingOrders, "\n");

const reviews = [
  { id: 1, text: "Great product!", rating: 5 },
  { id: 2, text: "Not bad.", rating: 3 },
  { id: 3, text: "Wouldn't recommend.", rating: 1 }
];

// Task: Generate a new array containing only the review texts

const reviewTexts = reviews.map(review => review.text);
console.log("Exercise 3", reviewTexts, "\n");

const availableCategories = ["electronics", "furniture", "clothing"];
const selectedCategory = "electronics";

// Task: Check if selectedCategory is included in availableCategories

const isCategoryAvailable = availableCategories.includes(selectedCategory);
console.log("Exercise 4", isCategoryAvailable, "\n");

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

// Task: Create a new array of cart items that are in stock

const inStockCartItems = cartItems.filter(cartItem => {
  const product = availableProducts.find(product => product.id === cartItem.productId);
  return product && product.inStock;
});
console.log("Exercise 5", inStockCartItems, "\n");
