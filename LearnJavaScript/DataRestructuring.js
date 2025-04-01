//Exercise 1
const categories = [
    {
        name: "Electronics",
        subcategories: [
            { name: "Mobile Phones" },
            { name: "Laptops" }
        ]
    },
    {
        name: "Home Appliances",
        subcategories: [
            { name: "Refrigerators" },
            { name: "Washing Machines" }
        ]
    }
];

const categoryNames = [];
// Loop through each category (Level1)
categories.forEach(Level1 => {
    categoryNames.push(Level1.name);
    // Loop through each subcategory (Level2) within the current category
    Level1.subcategories.forEach(Level2 => {
        categoryNames.push(Level2.name);
    });
});

console.log(categoryNames);
// End of Exercise 1

// Exercise 2
const salesHistory = [
    { productId: '001', salesLog: [{ amount: 10 }, { amount: 20 }] },
    { productId: '002', salesLog: [{ amount: 90 }, { amount: 110 }] },
    { productId: '001', salesLog: [{ amount: 70 }] },
    { productId: '003', salesLog: [{ amount: 80 }, { amount: 100 }, { amount: 120 }] }
];

const AllSelling4eachproductIdforEach = {}; // renamed from AllSelling4eachproductId
// Original .forEach logic
salesHistory.forEach(record => {
    if (!AllSelling4eachproductIdforEach[record.productId]) { // renamed from AllSelling4eachproductId
        AllSelling4eachproductIdforEach[record.productId] = 0; // renamed from AllSelling4eachproductId
    }
    // Sum the amounts in the salesLog array for each product
    record.salesLog.forEach(sell => {
        AllSelling4eachproductIdforEach[record.productId] += sell.amount; // renamed from AllSelling4eachproductId
    });
});
console.log('\nforEach', AllSelling4eachproductIdforEach); // renamed from AllSelling4eachproductId


// New .reduce logic
const AllSelling4eachproductIdReduce = salesHistory.reduce((productSales, record) => { // changed 'acc' to 'productSales'
    if (!productSales[record.productId]) { // changed 'acc' to 'productSales'
        productSales[record.productId] = 0; // changed 'acc' to 'productSales'
    }
    record.salesLog.forEach(sell => {
        productSales[record.productId] += sell.amount; // changed 'acc' to 'productSales'
    });
    return productSales; // changed 'acc' to 'productSales'
}, {});
console.log('\nreduce',AllSelling4eachproductIdReduce);


// Third way using for...of loop
const AllSelling4eachproductIdForOf = {};

for (const record of salesHistory) {
    if (!AllSelling4eachproductIdForOf[record.productId]) {
        AllSelling4eachproductIdForOf[record.productId] = 0;
    }
    for (const sell of record.salesLog) {
        AllSelling4eachproductIdForOf[record.productId] += sell.amount;
    }
}
console.log('\nfor',AllSelling4eachproductIdForOf);
// End of Exercise 2 

//Exercise 3
const TodayOrders = [
    { customerId: 'HK001', amount: 11 },
    { customerId: 'CN002', amount: 102 },
    { customerId: 'HK001', amount: 100 },
    { customerId: 'CN001', amount: 100 },
    { customerId: 'CN002', amount: 100 },
    { customerId: 'HK001', amount: 1000 },
    { customerId: 'HK003', amount: 300 }
];

// Using forEach
const totalPurchaseForEach = {}; // renamed from totalAmountsForEach
TodayOrders.forEach(order => {
    if (!totalPurchaseForEach[order.customerId]) { // renamed from totalAmountsForEach
        totalPurchaseForEach[order.customerId] = 0; // renamed from totalAmountsForEach
    }
    totalPurchaseForEach[order.customerId] += order.amount; // renamed from totalAmountsForEach
});
console.log('\nforEach', totalPurchaseForEach); // renamed from totalAmountsForEach
/* Explanation: This method uses the forEach loop to iterate over each order in TodayOrders. 
   It checks if the customerId already exists in the totalPurchaseForEach object. 
   If not, it initializes it to 0. Then, it adds the order amount to the corresponding customerId's total. */

// Using reduce
const totalPurchaseReduce = TodayOrders.reduce((customerTotals, order) => { // renamed from totalAmountsReduce
    if (!customerTotals[order.customerId]) {
        customerTotals[order.customerId] = 0;
    }
    customerTotals[order.customerId] += order.amount;
    return customerTotals;
}, {});
console.log('\nreduce', totalPurchaseReduce); // renamed from totalAmountsReduce
/* Explanation: This method uses the reduce function to accumulate the total amounts by customerId. 
   It initializes the accumulator object customerTotals. For each order, it checks if the customerId 
   already exists in customerTotals. If not, it initializes it to 0. Then, it adds the order amount 
   to the corresponding customerId's total and returns the accumulator object. */

// Using for...of
const totalPurchaseForOf = {}; // renamed from totalAmountsForOf
for (const order of TodayOrders) {
    if (!totalPurchaseForOf[order.customerId]) { // renamed from totalAmountsForOf
        totalPurchaseForOf[order.customerId] = 0; // renamed from totalAmountsForOf
    }
    totalPurchaseForOf[order.customerId] += order.amount; // renamed from totalAmountsForOf
}
console.log('\nfor...of', totalPurchaseForOf); // renamed from totalAmountsForOf
/* Explanation: This method uses the for...of loop to iterate over each order in TodayOrders. 
   It checks if the customerId already exists in the totalPurchaseForOf object. 
   If not, it initializes it to 0. Then, it adds the order amount to the corresponding customerId's total. */
// End of Exercise 3



//Exercise 4

// Define product variables
const BlueiMac = 'BlueiMac'; 
const iPhone16e = 'iPhone16e';
const MacBookAir13 = 'MacBookAir13';
const MacBookPro16 = 'MacBookPro16';
const AppleWatchUltra2 = 'AppleWatchUltra2';
const MacMini = 'MacMini';
const iPhone16Plus = 'iPhone16Plus';
const MacBookAir15 = 'MacBookAir15';
const MacBookPro14 = 'MacBookPro14';
const YellowiMac = 'YellowiMac';
const iPhone16ProMax = 'iPhone16ProMax';
const PinkiMac = 'PinkiMac';
const AppleWatch10_46mm = 'AppleWatch10_46mm';
const SilveriMac = 'SilveriMac';
const AppleWatch10_42mm = 'AppleWatch10_42mm';
const MacStudio = 'MacStudio';
const PurpleiMac = 'PurpleiMac';
const Today_Orders = [
    { Products_List: [BlueiMac, iPhone16e, MacBookAir13, MacBookPro16, AppleWatchUltra2] }, // changed products to Products_List
    { Products_List: [MacMini, iPhone16Plus, MacBookAir15, MacBookPro14, AppleWatchUltra2] }, // changed products to Products_List
    { Products_List: [YellowiMac, iPhone16ProMax, MacBookAir13, MacBookPro16, AppleWatchUltra2] }, // changed products to Products_List
    { Products_List: [PinkiMac, AppleWatch10_46mm, iPhone16Plus, MacBookAir15] }, // changed products to Products_List
    { Products_List: [SilveriMac, AppleWatch10_42mm, iPhone16Plus, MacBookAir13] }, // changed products to Products_List
    { Products_List: [MacStudio, AppleWatch10_46mm, iPhone16Plus, MacBookAir15] }, // changed products to Products_List
    { Products_List: [PinkiMac, AppleWatch10_42mm, iPhone16Plus, MacBookAir13] }, // changed products to Products_List
    { Products_List: [PurpleiMac, iPhone16e, MacBookAir13, MacBookPro16] } // changed products to Products_List
];

const uniqueProductIDs = new Set();

for (const order of Today_Orders) {
    for (const product of order.Products_List) { // changed products to Products_List
        uniqueProductIDs.add(product);
    }
}

// Convert the Set to an array, sort it in ascending order, and then log it
const sortedUniqueProductIDs = Array.from(uniqueProductIDs).sort((a, b) => a.localeCompare(b));
console.log(sortedUniqueProductIDs);
