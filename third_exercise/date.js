let dateArr = [];

dateArr.push(new Date());
let newD = new Date();
newD.setDate(8);
newD.setMonth(11);
newD.setFullYear(2018);
newD.setHours(21, 00, 00);
dateArr.push(newD);
function calcHelper(element) {
  let leapYear =
    element.getFullYear() % 4 == 0 &&
    !(element.getFullYear() % 100 == 0 && element.getFullYear() % 400 != 0);
  switch (element.getMonth()) {
    case 1:
      return 28 + leapYear;
      break;
    case 3:
    case 5:
    case 8:
    case 10:
      return 30;
      break;
    default:
      return 31;
      break;
  }
}
function calcDaysInMonth(arr) {
  arr.forEach(function (element) {
    console.log(calcHelper(element));
  });
}
calcDaysInMonth(dateArr);
const arrDays = dateArr.map((date) => date.getDay());
console.log(arrDays);

function Days(element) {
  switch (element) {
    case 0:
      return "Sunday";
      break;
    case 1:
      return "Monday";
      break;
    case 2:
      return "Tuesday";
      break;
    case 3:
      return "Wednesday";
      break;
    case 4:
      return "Thursday";
      break;
    case 5:
      return "Friday";
      break;
    case 6:
      return "Saturday";
      break;
    default:
      return "Error day";
      break;
  }
}

function newArrInfo(arr1, arr2) {
  let arr3 = [];
  for (const i in arr1) {
    arr3.push(
      `Date: ${arr1[i].getDate()}.${arr1[i].getMonth() + 1}.${arr1[
        i
      ].getFullYear()}, time: ${arr1[i].getHours()}:${arr1[
        i
      ].getMinutes()}:${arr1[i].getSeconds()}, ${Days(arr2[i])}. ${calcHelper(
        arr1[i]
      )} days`
    );
  }
  return arr3;
}
const newArr = newArrInfo(dateArr, arrDays);
console.log(newArr);
