'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _elementValidationError = require('./element-validation-error');

var _elementValidationError2 = _interopRequireDefault(_elementValidationError);

var _util = require('util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumericFormatValidationError = function (_ElementValidationErr) {
  _inherits(NumericFormatValidationError, _ElementValidationErr);

  function NumericFormatValidationError() {
    _classCallCheck(this, NumericFormatValidationError);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(NumericFormatValidationError).apply(this, arguments));
  }

  _createClass(NumericFormatValidationError, [{
    key: 'message',
    get: function get() {
      var messageFormat = this.element.isInteger ? "The value of field '%s' must be an integer number." : "The value of field '%s' must be an decimal number.";

      return (0, _util.format)(messageFormat, this.label);
    }
  }]);

  return NumericFormatValidationError;
}(_elementValidationError2.default);

exports.default = NumericFormatValidationError;
//# sourceMappingURL=numeric-format-validation-error.js.map