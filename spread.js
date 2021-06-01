let arr1 = [24,22,5];
let arr2 = [64,28,44];
arr1 = [...arr1,...arr2];
console.log(arr1)

let obj1 = {a:'apple',x:4};
let obj2 = {b:'bat',y:9};
let mergedObj = {...obj1,...obj2};
console.log(mergedObj)