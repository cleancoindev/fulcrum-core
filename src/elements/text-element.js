import TextualElement from './textual-element';

export default class TextElement extends TextualElement {
  constructor(parent, attributes) {
    super(parent, attributes);

    this._isNumeric = !!attributes.numeric;

    this.format = attributes.format;

    this.min = null;
    this.max = null;

    if (attributes.min != null) {
      this.min = +attributes.min;
    }

    if (attributes.max != null) {
      this.max = +attributes.max;
    }

    if (isNaN(this.min)) {
      this.min = null;
    }

    if (isNaN(this.max)) {
      this.max = null;
    }

    this.pattern = attributes.pattern;

    this.patternDescription = attributes.pattern_description;
  }

  get isLengthValidationSupported() {
    return true;
  }

  get isDecimalFormat() {
    return this._isNumeric && this.format === 'decimal';
  }

  get isIntegerFormat() {
    return this._isNumeric && this.format === 'integer';
  }

  get isNumeric() {
    return this._isNumeric;
  }

  get hasMin() {
    return this.min != null;
  }

  get hasMax() {
    return this.max != null;
  }

  get hasPattern() {
    return this.pattern && this.pattern.length;
  }
}
