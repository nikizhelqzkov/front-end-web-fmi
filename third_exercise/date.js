let dateArr = [];

dateArr.push(new Date());
let newD = new Date();
newD.setDate(8);
newD.setMonth(11);
newD.setFullYear(2018);
newD.setHours(21, 00, 00);
dateArr.push(newD);
function calcDaysInMonth(arr) {
    arr.forEach(function(element){
        console.log("First element: ");
         let leapYear = (element.getFullYear() % 4 == 0) && !(element.getFullYear() % 100 == 0 && element.getFullYear() % 400 != 0);
        switch (element.getMonth())
        {
        case 1:
           console.log(28 + leapYear);
            break;
        case 3:
        case 5:
        case 8:
        case 10:
            console.log(30);
            break;
        default:
            console.log(31);
            break;
        }
    });


}
calcDaysInMonth(dateArr);
const arrDays = dateArr.map((date)=>date.getDay());
console.log(arrDays);