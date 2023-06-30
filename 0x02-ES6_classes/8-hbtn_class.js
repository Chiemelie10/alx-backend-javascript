export default class HolbertonClass {
  constructor(size, location) {
    if (typeof size !== 'number') {
      throw new TypeError('Size must be a number');
    }
    if (typeof location !== 'string') {
      throw new TypeError('Location must be a string');
    }
    this._size = size; // eslint-disable-line no-underscore-dangle
    this._location = location; // eslint-disable-line no-underscore-dangle
  }

  [Symbol.toPrimitive](hint) {
    if (hint === 'number') {
      return this._size; // eslint-disable-line no-underscore-dangle
    }
    return this._location; // eslint-disable-line no-underscore-dangle
  }
}
