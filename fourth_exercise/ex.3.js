class Item {
  constructor(name, discount) {
    this.name = name;
    this.discount = discount;
    this.price = 1000;
    this.calc = function () {
      return this.price - (this.discount / 100) * this.price;
    };
  }
  getPrice() {
    return this.price;
  }
}
// Item.prototype.getPrice = function () {
//   return this.price;
// };
const a = new Item("Kola",20);
console.log(a.calc());
