const createDiscountGenerator = (discount) => {
    /* 
    The advantage of using a closure here is that the inner function retains access to the 'discount' variable
    even after the outer function has finished executing. This allows us to create multiple discount functions
    with different discount rates without having to pass the discount rate each time we call the function.
    This arrow function is also a closure.
    */
    return (price) => price - (price * discount);
};

// Example Usage:
const tenPercentOff = createDiscountGenerator(0.10);
const twentyPercentOff = createDiscountGenerator(0.20);

console.log(tenPercentOff(100)); // Original Price: $100, Discounted Price: $90
console.log(twentyPercentOff(100)); // Original Price: $100, Discounted Price: $80
