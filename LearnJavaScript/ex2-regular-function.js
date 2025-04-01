// 1. 將箭頭函數改寫為常規函數
const add = (a, b) => a + b;

function add(a, b) {
    return a + b;
}
console.log(add(5, -2)); // 輸出: 3

// 2. 函數：計算數字數組的總和
function sumArray(numbers) {
    // 檢查輸入是否為數組
    if (!Array.isArray(numbers)) {
        throw "錯誤：輸入無效";
    }

    let total = 0;

    // 使用 for 循環計算總和
    for (let i = 0; i < numbers.length; i++) {
        let number = numbers[i];
        if (typeof number !== "number") {
            throw "錯誤：輸入無效";
        }
        total += number;
        // total = total + number;
    }
    return total;
}
console.log(sumArray([1, 2, 3, 4])); // 輸出: 10
console.log(sumArray([1.5, 2.5, 3])); // 輸出: 7
console.log(sumArray("not an array")); // 輸出: 錯誤：輸入無效
