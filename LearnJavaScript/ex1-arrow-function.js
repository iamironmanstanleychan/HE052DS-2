// 1. 基本箭頭函數：計算兩個數字的和
const add = (a, b) => a + b;
console.log(add(5, -2)); // 輸出: 3

// 2. 計算平方的箭頭函數
const square = (num) => num * num;
console.log(square(4)); // 輸出: 16

// 3. 判斷偶數或奇數的箭頭函數
const isEven = (num) => num % 2 === 0;
console.log(isEven(10)); // 輸出: true
console.log(isEven(7)); // 輸出: false

// 4. 攝氏轉華氏的箭頭函數
const celsiusToFahrenheit = (c) => (c * 9) / 5 + 32;
console.log(celsiusToFahrenheit(0)); // 輸出: 32

// 5. 問候函數
const greet = (name) => `你好, ${name}!`;
console.log(greet("小明")); // 輸出: 你好, 小明!



// 6. 用戶資料過濾
function getFilteredUserData(users, minAge, maxAge, location) {
    const result = [];

    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user.age >= minAge && user.age <= maxAge && user.location === location) {
            // Push the selected properties of matching users into the result array
            result.push({
                id: user.id,
                name: user.name,
                email: user.email,
                interests: user.interests,
            });
        }
    }
    return result;
}

// Example usage
const users = [
    { id: 1, name: "Alice", age: 25, location: "New York", email: "alice@example.com", interests: ["music", "travel"] },
    { id: 2, name: "Bob", age: 30, location: "Los Angeles", email: "bob@example.com", interests: ["sports", "movies"] },
    { id: 3, name: "Charlie", age: 22, location: "New York", email: "charlie@example.com", interests: ["art", "technology"] },
    { id: 4, name: "David", age: 28, location: "Chicago", email: "david@example.com", interests: ["cooking", "hiking"] },
    { id: 5, name: "Eve", age: 35, location: "New York", email: "eve@example.com", interests: ["reading", "yoga"] },
];

const filteredUsers = getFilteredUserData(users, 20, 30, "New York");

console.log("filteredUsers", filteredUsers);


// let getFilteredUserData = (users, minAge, maxAge, location) => {
//     const result = [];

//     for (let i = 0; i < users.length; i++) {
//         const user = users[i];
//         if (user.age >= minAge && user.age <= maxAge && user.location === location) {
//             // Push the selected properties of matching users into the result array
//             result.push({
//                 id: user.id,
//                 name: user.name,
//                 email: user.email,
//                 interests: user.interests,
//             });
//         }
//     }
//     console.log(result);
//     return result;
// };
