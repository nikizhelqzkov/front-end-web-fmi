let arr = [10, 5, 13, 18, 51];
function isAny(arr) {
  return arr.some((element) => element < 10);
}

console.log(isAny(arr));
let arr2 = arr.filter(item=>item%2===0);
console.log(isAny(arr2));
