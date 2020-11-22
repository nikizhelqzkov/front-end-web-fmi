class PaymentMethod {
  constructor() {}
  getAmount() {
    return `Your amount in the account is: `;
  }
}
class CashMethod extends PaymentMethod {
  _amount = 0;

  addToAmount(value) {
    if (value < 0) {
      throw new Error("Negative value");
    }
    this._amount += value;
    return this;
  }
  getAmount() {
    return `${super.getAmount()}${this._amount}`;
  }
  reduceFromAmount(value) {
    if (value < 0) {
      throw new Error("Negative value");
    }
    this._amount -= value;
    return this;
  }
}
class CreditMethod extends PaymentMethod {
  _amount = 0;

  addToAmount = function (value) {
    if (value < 0) {
      throw new Error("Negative value");
    }
    this._amount += (90 / 100) * value;
    return this;
  };
  getAmount() {
    return `${super.getAmount()}${this._amount}`;
  }
  reduceFromAmount(value) {
    if (value < 0) {
      throw new Error("Negative value");
    }
    this._amount -= value;
    return this;
  }
}

const cashAccount = new CashMethod();
console.log(cashAccount.getAmount());
cashAccount.addToAmount(100);
cashAccount.addToAmount(20).addToAmount(30).reduceFromAmount(10);
console.log(cashAccount.getAmount());

const creditAccount = new CreditMethod();
creditAccount.addToAmount(100); // returns creditAccount instance (useful for method chaining)
console.log(creditAccount.getAmount());
