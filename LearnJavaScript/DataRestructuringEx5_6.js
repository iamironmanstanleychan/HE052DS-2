/*
const salesHistory = [
    { productId: '001', salesLog: [{ amount: 10 }, { amount: 20 }] },
    { productId: '002', salesLog: [{ amount: 90 }, { amount: 110 }] },
    { productId: '001', salesLog: [{ amount: 70 }] },
    { productId: '003', salesLog: [{ amount: 80 }, { amount: 100 }, { amount: 120 }] }
];
const orders = [
    { customerId: 1, orderDetails: [{ items: [{ productId: 101, amount: 50 }, { productId: 102, amount: 150 }] }] },
    { customerId: 2, orderDetails: [{ items: [{ productId: 103, amount: 200 }] }] },
    { customerId: 1, orderDetails: [{ items: [{ productId: 101, amount: 100 }] }] },
    { customerId: 3, orderDetails: [{ items: [{ productId: 104, amount: 300 }, { productId: 105, amount: 150 }] }] }
];
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
*/
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

const TodayOrders = [
    { customerId: 'HK001', orderDetails: [{ items: [{ productId: BlueiMac, amount: 888 }, { productId: iPhone16e, amount: 488 }] }] },
    { customerId: 'CN002', orderDetails: [{ items: [{ productId: MacBookAir13, amount: 788 }] }] },
    { customerId: 'HK001', orderDetails: [{ items: [{ productId: MacBookPro16, amount: 1088 }] }] },
    { customerId: 'CN001', orderDetails: [{ items: [{ productId: AppleWatchUltra2, amount: 788 }, { productId: MacMini, amount: 688 }] }] },
    { customerId: 'CN002', orderDetails: [{ items: [{ productId: iPhone16Plus, amount: 688 }, { productId: MacBookAir15, amount: 888 }] }] },
    { customerId: 'HK001', orderDetails: [{ items: [{ productId: MacBookPro14, amount: 988 }, { productId: iPhone16ProMax, amount: 988 }] }] },
    { customerId: 'HK003', orderDetails: [{ items: [{ productId: AppleWatch10_46mm, amount: 688 }, { productId: MacStudio, amount: 1288 }] }] }
];
const Customerfeedbacks = [
    { customerId: 'HK001', feedbackDetails: [{ productId: BlueiMac, ratings: [5, 4, 3, 4, 5] }, { productId: iPhone16e, ratings: [5, 3, 4, 5, 2] }] },
    { customerId: 'CN002', feedbackDetails: [{ productId: MacBookAir13, ratings: [5, 5, 3, 4, 5] }] },
    { customerId: 'HK003', feedbackDetails: [{ productId: AppleWatch10_46mm, ratings: [4, 3, 3, 1, 3] }, { productId: MacStudio, ratings: [2, 3, 4, 3, 4] }] }
];

// Calculate total purchase per customer
const customerTotals = TodayOrders.reduce((customerTotals, eachOrderSubTotal) => { 
    // .reduce is used to accumulate the total amounts per customer
    // Flatten the order details and sum the amounts for each order
    const totalAmount = eachOrderSubTotal.orderDetails.flatMap(detail => 
        // .flatMap is used to flatten the nested arrays of items and map them to their amounts
        detail.items.map(eachItem => eachItem.amount) 
    ).reduce((eachItemamount, amount) => eachItemamount + amount, 0); // Changed sum to eachItemamount

    // Check if the customerId already exists in the customerTotals object
    if (!customerTotals[eachOrderSubTotal.customerId]) {
        // If not, initialize it with 0
        customerTotals[eachOrderSubTotal.customerId] = 0;
    }
    // Add the total amount of the current order to the customer's total
    customerTotals[eachOrderSubTotal.customerId] += totalAmount;
    return customerTotals;
}, {});

// Calculate total ratings and counts per customer
const customerFeedbackTotals = Customerfeedbacks.reduce((feedbackTotals, eachFeedback) => {
    // .reduce is used to accumulate the total ratings and counts per customer
    // Flatten the ratings and aggregate totals and counts
    const ratings = eachFeedback.feedbackDetails.flatMap(detail => detail.ratings);
    const totalRatings = ratings.reduce((sum, rating) => sum + rating, 0);
    const ratingCount = ratings.length;

    // Check if the customerId already exists in the feedbackTotals object
    if (!feedbackTotals[eachFeedback.customerId]) {
        // If not, initialize it with totalRatings and ratingCount
        feedbackTotals[eachFeedback.customerId] = { totalRatings: 0, ratingCount: 0 };
    }
    // Add the total ratings and counts to the customer's feedback totals
    feedbackTotals[eachFeedback.customerId].totalRatings += totalRatings;
    feedbackTotals[eachFeedback.customerId].ratingCount += ratingCount;
    return feedbackTotals;
}, {});

// Combine and output customer totals and feedback
Object.entries(customerTotals).forEach(([customerId, total]) => {
    // .entries is used to get an array of key-value pairs from the customerTotals object
    let tier = 'No Membership';
    if (total > 4000) {
        tier = 'Diamond';
    } else if (total > 3000) {
        tier = 'Gold';
    } else if (total > 2000) {
        tier = 'Silver';
    } else if (total > 1000) {
        tier = 'Bronze';
    }
    const feedback = customerFeedbackTotals[customerId] || { totalRatings: 0, ratingCount: 0 };
    const averageRating = feedback.ratingCount ? (feedback.totalRatings / feedback.ratingCount).toFixed(2) : 0;
    console.log(`Customer ${customerId} purchases US$${total} and becomes ${tier} membership \n Answered feedbacks: ${feedback.ratingCount}, sum of ratings: ${feedback.totalRatings}, average rating: ${averageRating}`);
    if (feedback.ratingCount === 0) {
        console.log(` CS sends friendly reminder to ${customerId} to give feedbacks`);
    } else if (feedback.ratingCount > 0 && averageRating <= 3) {
        console.log(` Send email to Supervisor to investigate the post-sales experiences of this customer ${customerId}`);
    }
    if (tier === 'Diamond') {
        console.log(` Supervisor sends a coupon to ${customerId}`);
    }
    console.log(); // Add an empty line for separation
});

// Calculate and output the total sales for today
const totalTodayAmounts = Object.values(customerTotals).reduce((sum, amount) => sum + amount, 0);
// .value is used to get an array of values from the customerTotals object
const todayDate = new Date().toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' }).replace(/ /g, '-'); // Get current date in DD-MMM-YYYY format
console.log(`${todayDate} total sales is US$${totalTodayAmounts}\n`);

// Calculate total ratings and counts per product
const productFeedbackTotals = Customerfeedbacks.reduce((feedbackTotals, eachFeedback) => {
    eachFeedback.feedbackDetails.forEach(detail => {
        const totalRatings = detail.ratings.reduce((sum, rating) => sum + rating, 0);
        const ratingCount = detail.ratings.length;

        // Check if the productId already exists in the feedbackTotals object
        if (!feedbackTotals[detail.productId]) {
            // If not, initialize it with totalRatings and ratingCount
            feedbackTotals[detail.productId] = { totalRatings: 0, ratingCount: 0 };
        }
        // Add the total ratings and counts to the product's feedback totals
        feedbackTotals[detail.productId].totalRatings += totalRatings;
        feedbackTotals[detail.productId].ratingCount += ratingCount;
    });
    return feedbackTotals;
}, {});

// Output individual product feedback totals
Object.entries(productFeedbackTotals).forEach(([productId, { totalRatings, ratingCount }]) => {
    const averageRating = (totalRatings / ratingCount).toFixed(2);
    console.log(`${productId}: { count: ${ratingCount}, totalRatings: ${totalRatings}, average: ${averageRating} }`);
    if (averageRating <= 3) {
        console.log(` Supervisor, please investigate the potential issues with ${productId}`);
    }
});
