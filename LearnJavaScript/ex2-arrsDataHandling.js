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
const ids = [];
for (let i = 0; i < data1.length; i++) {
    ids.push(data1[i].id);
    // data1[i].id or data1[i]["id"]
}
console.log(ids); // Outputs: [133, 25, 34]

// Step 2: Create a new array called products
const products = [];
for (let i = 0; i < data1.length; i++) {
    const item = data1[i];
    let price = null;

    // Find the corresponding price from data2
    for (let j = 0; j < data2.length; j++) {
        const item2 = data2[j];
        if (item2.id === item.id) {
            price = item2.price;
            break; // stop the second for loop
        }
    }
    products.push({
        id: item.id,
        name: item.name,
        price: price
    });
}

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