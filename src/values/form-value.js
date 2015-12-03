function notImplemented() {
  throw new Error('Not implemented');
}

export default class FormValue {
  constructor(element, value) {
    this._element = element;
    this._rawValue = value;
  }

  get element() {
    return this._element;
  }

  set element(element) {
    this._element = element;
  }

  get isEmpty() {
    notImplemented();
  }

  get displayValue() {
    notImplemented();
  }

  get searchableValue() {
    notImplemented();
  }

  get length() {
    notImplemented();
  }

  get columnValue() {
    notImplemented();
  }

  get multipleValues() {
    notImplemented();
  }

  toJSON() {
    notImplemented();
  }

  isEqual(value) {
    notImplemented();
  }

  contains(value) {
    notImplemented();
  }

  startsWith(value) {
    notImplemented();
  }

  isLessThan(value) {
    notImplemented();
  }

  isGreaterThan(value) {
    notImplemented();
  }
}
