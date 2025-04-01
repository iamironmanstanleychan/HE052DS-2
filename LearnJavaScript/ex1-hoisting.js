// Task 1. var 與提升
function hoistingExample() {
    console.log(a); // 輸出什麼？
    var a = 10;
    console.log(a); // 輸出什麼？
}

hoistingExample();
// 答案：
// undefined
// 10

// Task 2. let 與區塊作用域 (Block Scope)
function blockScopeLet() {
    for (let j = 0; j < 3; j++) {
        console.log(j); // 輸出什麼？
    }
    // console.log(j); // 如果這行不註解，會發生什麼？
}

blockScopeLet();
// 答案：
// 0
// 1
// 2
// ReferenceError: j is not defined

// Task 3. const 的不可變性
const user = {
    name: "Alice",
    age: 25,
};

user.age = 26; // 這行會發生什麼？
console.log(user.age); // 輸出什麼？

// user = {}; // 如果這行不註解，會發生什麼？
// 答案：
// 26
// TypeError: Assignment to constant variable.

// Task 4. 閉包與計數器
function makeCounter() {
    let count = 0;
    return function () {
        count += 2; // 每次增加2
        return count;
    };
}

const counter = makeCounter();
console.log(counter()); // 輸出什麼？
console.log(counter()); // 輸出什麼？
console.log(counter()); // 輸出什麼？
// 答案：
// 2
// 4
// 6

// Task 5. 全域與局部作用域的混合
var x = 1;

function myFunction() {
    var x = 2;
    function innerFunction() {
        x++;
        return x;
    }
    return innerFunction();
}

console.log(myFunction()); // 輸出什麼？
console.log(x); // 輸出什麼？
// 答案：
// 3
// 1

// Task 6. let 和 const 的重新聲明
let y = 1;
// let y = 2; // 如果這行不註解，會發生什麼？

const z = 3;
// const z = 4; // 如果這行不註解，會發生什麼？

console.log(y); // 輸出什麼？
console.log(z); // 輸出什麼？
// 答案：
// TypeError: Identifier 'y' has already been declared
// TypeError: Identifier 'z' has already been declared
// 1
// 3
