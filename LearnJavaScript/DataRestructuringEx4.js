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
    { Order_List: [BlueiMac, iPhone16e, MacBookAir13, MacBookPro16, AppleWatchUltra2] }, // changed Products_List to Order_List
    { Order_List: [MacMini, iPhone16Plus, MacBookAir15, MacBookPro14, AppleWatchUltra2] }, // changed Products_List to Order_List
    { Order_List: [YellowiMac, iPhone16ProMax, MacBookAir13, MacBookPro16, AppleWatchUltra2] }, // changed Products_List to Order_List
    { Order_List: [PinkiMac, AppleWatch10_46mm, iPhone16Plus, MacBookAir15] }, // changed Products_List to Order_List
    { Order_List: [SilveriMac, AppleWatch10_42mm, iPhone16Plus, MacBookAir13] }, // changed Products_List to Order_List
    { Order_List: [MacStudio, AppleWatch10_46mm, iPhone16Plus, MacBookAir15] }, // changed Products_List to Order_List
    { Order_List: [PinkiMac, AppleWatch10_42mm, iPhone16Plus, MacBookAir13] }, // changed Products_List to Order_List
    { Order_List: [PurpleiMac, iPhone16e, MacBookAir13, MacBookPro16] } // changed Products_List to Order_List
];

const TodayPurchasedUniqueProducts = new Set(); // changed uniqueProductIDs to TodayPurchasedUniqueProducts

for (const eachOrder of Today_Orders) { // changed order to eachOrder
    for (const eachProduct of eachOrder.Order_List) { // changed Order_list to Order_List
        TodayPurchasedUniqueProducts.add(eachProduct); // changed uniqueProductIDs to TodayPurchasedUniqueProducts
        // removed return statement
    }
}

// Logic 3: Use .reduce to count the total number of products ordered
const totalProductsOrdered = Today_Orders.reduce((total, order) => {
    return total + order.Order_List.length;
}, 0);
console.log('\nTotal number of all products ordered today is', totalProductsOrdered,',including:');
/* Logic 1: Use .forEach to iterate over Today_Orders and log each order
Today_Orders.forEach(order => {
    console.log('Order:', order);
});
*/
// Logic 2: Use .forEach to iterate over TodayPurchasedUniqueProducts and log each unique product
TodayPurchasedUniqueProducts.forEach(product => {
    console.log(product);
    // console.log('Unique Product:', product);
});
console.log(`which belongs to ${TodayPurchasedUniqueProducts.size} different product types`); // Log the size of the set

// Display the set before converting it to an array
console.log(TodayPurchasedUniqueProducts);

/* Convert the Set to an array, sort it in ascending order, and then log it
   sortedTodayPurchasedUniqueProducts = SortedTPUP */
   
const SortedTPUP = Array.from(TodayPurchasedUniqueProducts).sort((a, b) => a.localeCompare(b)); // changed sortedUniqueProductIDs to SortedTPUP
console.log(SortedTPUP);
