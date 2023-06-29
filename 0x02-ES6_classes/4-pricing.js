import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    if (typeof amount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    if (!(currency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the class Currency');
    }
    this._amount = amount; // eslint-disable-line no-underscore-dangle
    this._currency = currency; // eslint-disable-line no-underscore-dangle
  }

  get amount() {
    return this._amount; // eslint-disable-line no-underscore-dangle
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = value; // eslint-disable-line no-underscore-dangle
  }

  get currency() {
    return this._currency; // eslint-disable-line no-underscore-dangle
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new TypeError('Currency must be an instance of the class Currency');
    }
    this._currency = value; // eslint-disable-line no-underscore-dangle
  }

  displayFullPrice() {
    return `${this.amount} ${this.currency.name} (${this.currency.code})`;
  }

  static convertPrice(amount, conversionRate) {
    return amount * conversionRate;
  }
}
