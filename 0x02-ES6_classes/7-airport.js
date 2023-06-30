export default class Airport {
  constructor(name, code) {
    if (typeof name !== 'string') {
      throw new TypeError('Name must be a string');
    }
    if (typeof code !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._name = name; // eslint-disable-line no-underscore-dangle
    this._code = code; // eslint-disable-line no-underscore-dangle
  }

  get [Symbol.toStringTag]() {
    return `${this._code}`; // eslint-disable-line no-underscore-dangle
  }
}
