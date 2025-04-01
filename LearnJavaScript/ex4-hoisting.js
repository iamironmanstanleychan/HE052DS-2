/*
什麼是提升（Hoisting）？
提升（Hoisting）是JavaScript 將宣告移至頂部的默認行為。
然而，提升一詞可能會引起誤解：例如，提升看起來是單純地將變數和函式宣告，移動到程式的區塊頂端，然而並非如此。


簡單解釋：
1. 變量提升(Hoisting)：
    當你使用 var 聲明變量時，JavaScript 會在執行代碼之前，
    將該變量的聲明「提升」到作用域的頂部。
    這並不意味著變量的值也會被提升，只有變量的名稱會被提升。
2. 函數提升：
    對於函數聲明，整個函數會被提升，包括其定義和內容。
*/

// 1. 變量提升(Hoisting)示例：
console.log(x); // 輸出 undefined，因為 x 的聲明被提升了，但尚未賦值。

var x = 5;
console.log(x); // 輸出 5
// JavaScript 會記得 var x 的聲明，並將其視為 undefined，最後執行變量 x 賦值 5

// 2. 函數提升示例：
greet(); // 輸出什麼？

function greet() {
    console.log("Hello, world!");
}
// 答案:
// Hello, world!

/*
總結：
    提升：變量和函數的聲明在執行前被移到作用域的頂部。
    注意：只有聲明會被提升，賦值不會。
*/
