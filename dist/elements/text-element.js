'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textualElement = require('./textual-element');

var _textualElement2 = _interopRequireDefault(_textualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextElement = (function (_TextualElement) {
  _inherits(TextElement, _TextualElement);

  function TextElement(parent, attributes) {
    _classCallCheck(this, TextElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(TextElement).call(this, parent, attributes));

    _this.numeric = !!attributes.numeric;

    _this.format = attributes.format;

    _this.min = +attributes.min;

    _this.max = +attributes.max;

    if (isNaN(_this.min)) {
      _this.min = null;
    }

    if (isNaN(_this.max)) {
      _this.max = null;
    }

    _this.pattern = attributes.pattern;

    _this.patternDescription = attributes.pattern_description;
    return _this;
  }

  _createClass(TextElement, [{
    key: 'isDecimalFormat',
    get: function get() {
      return this.numeric && this.format === 'decimal';
    }
  }, {
    key: 'isIntegerFormat',
    get: function get() {
      return this.numeric && this.format === 'integer';
    }
  }, {
    key: 'hasMin',
    get: function get() {
      return this.min != null;
    }
  }, {
    key: 'hasMax',
    get: function get() {
      return this.max != null;
    }
  }, {
    key: 'hasPattern',
    get: function get() {
      return this.pattern && this.pattern.length;
    }
  }]);

  return TextElement;
})(_textualElement2.default);

exports.default = TextElement;
//# sourceMappingURL=text-element.js.map