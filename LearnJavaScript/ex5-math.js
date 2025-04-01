// 1. 使用 Math 物件進行計算
console.log("1. 使用 Math 物件進行計算：");
console.log("平方根 144:", Math.sqrt(144)); // 12
console.log("2 的 10 次方:", Math.pow(2, 10)); // 1024

// 2. 隨機數的生成
console.log("\n2. 隨機數的生成：");
console.log("0 到 100 之間的隨機整數:", Math.floor(Math.random() * 101)); // 隨機數
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
console.log("隨機整數 (1 到 10):", getRandomInt(1, 10)); // 隨機數

// 3. 字符串轉換
console.log("\n3. 字符串轉換：");
console.log("parseInt('42'):", parseInt("42")); // 42
console.log("parseFloat('3.14'):", parseFloat("3.14")); // 3.14

// 4. 數字的絕對值
console.log("\n4. 數字的絕對值：");
console.log("Math.abs(-10):", Math.abs(-10)); // 10
function absoluteValue(num) {
    return Math.abs(num);
}
console.log("absoluteValue(-5):", absoluteValue(-5)); // 5

// 5. 四捨五入
console.log("\n5. 四捨五入：");
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.ceil(4.3):", Math.ceil(4.3)); // 5
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4

// 6. 數組中的最大值和最小值
console.log("\n6. 數組中的最大值和最小值：");
const arr = [10, 20, 5, 15];
console.log("最大值:", Math.max(...arr)); // 20
console.log("最小值:", Math.min(...arr)); // 5

function findMaxMin(arr) {
    return { max: Math.max(...arr), min: Math.min(...arr) };
}
console.log("最大值和最小值:", findMaxMin(arr)); // { max: 20, min: 5 }

// 7. 格式化日期
console.log("\n7. 格式化日期：");
const date = new Date();
console.log("年份:", date.getFullYear()); // 當前年份
console.log("月份:", date.getMonth() + 1); // 當前月份（加 1）
console.log("日期:", date.getDate()); // 當前日期
