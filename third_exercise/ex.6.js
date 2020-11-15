let arr = [10, 5, 13, 18, 51];

function sum(arr) {
  let res = 0;
  arr.reduce((element) => (res += element));
  return res;
}
console.log(sum(arr));
