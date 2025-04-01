const data1 = [
    { id: 133, name: "Laptop" },
    { id: 25, name: "Smartphone" },
    { id: 34, name: "Tablet" }
];

const data2 = [
    { id: 133, price: 100 },
    { id: 25, price: 40 },
    { id: 34, price: 300 },
    { id: 50, price: 260 },
    { id: 110, price: 50 },
];

// Step 1: Define an array called ids that contains the IDs from data1
const ids = data1.map(item => item.id);

// Step 2: Create a new array called products
const products = data1.map(item => {
    const priceData = data2.find(priceItem => priceItem.id === item.id);
    return {
        id: item.id,
        name: item.name,
        price: priceData ? priceData.price : null // Handle cases where price is not found
    };
});

// Step 3: Sort the products array by price in ascending order
products.sort((a, b) => a.price - b.price);

// Output the results
console.log("IDs:", ids); 
// Output: [133, 25, 34]

console.log("Products:", products); 
// Output: [
//     { id: 25, name: "Smartphone", price: 40 },
//     { id: 133, name: "Laptop", price: 100 },
//     { id: 34, name: "Tablet", price: 300 }
// ]