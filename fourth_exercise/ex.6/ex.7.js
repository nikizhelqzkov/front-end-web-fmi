function change() {
  let rows = document.getElementsByTagName("tr");
  [rows[1].innerHTML, rows[2].innerHTML] = [
    rows[2].innerHTML,
    rows[1].innerHTML,
  ];
}
