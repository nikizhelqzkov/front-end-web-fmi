let el = function (getCol1, getCol2) {
  let pArr = document.getElementsByTagName("p");
  //   pArr.forEach((item) => {
  //     item.style.backgroundColor = getCol1;
  //   });
  for (let index = 0; index < pArr.length; index++) {
    pArr[index].style.backgroundColor = getCol1;
  }
  let countP = document.getElementsByClassName("header_headline")[0];
  countP.innerHTML = `${pArr.length} параграфа`;
  let countClasses = document.getElementsByClassName("header_headline")[1];
  let countCl = document.getElementsByClassName("headertitle");
//   countCl.forEach(function (item) {
//     item.style.backgroundColor = getCol2;
//   });
for (let index = 0; index < countCl.length; index++) {
    countCl[index].style.backgroundColor = getCol2;
  }
  countClasses.innerHTML = `${countCl.length} класа headertitle`;
};
el("red", "green");
