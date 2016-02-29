'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _textualElement = require('./textual-element');

var _textualElement2 = _interopRequireDefault(_textualElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var YesNoElement = function (_TextualElement) {
  _inherits(YesNoElement, _TextualElement);

  function YesNoElement(parent, attributes) {
    _classCallCheck(this, YesNoElement);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(YesNoElement).call(this, parent, attributes));

    _this.positiveChoice = attributes.positive;

    _this.negativeChoice = attributes.negative;

    _this.neutralChoice = attributes.neutral;

    _this.neutralEnabled = !!attributes.neutral_enabled;
    return _this;
  }

  return YesNoElement;
}(_textualElement2.default);

exports.default = YesNoElement;
//# sourceMappingURL=yes-no-element.js.map