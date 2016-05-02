'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _mediaValue = require('./media-value');

var _mediaValue2 = _interopRequireDefault(_mediaValue);

var _audioItemValue = require('./audio-item-value');

var _audioItemValue2 = _interopRequireDefault(_audioItemValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var AudioValue = function (_MediaValue) {
  _inherits(AudioValue, _MediaValue);

  function AudioValue() {
    _classCallCheck(this, AudioValue);

    return _possibleConstructorReturn(this, _MediaValue.apply(this, arguments));
  }

  _createClass(AudioValue, [{
    key: 'ItemClass',
    get: function get() {
      return _audioItemValue2.default;
    }
  }, {
    key: 'displayValue',
    get: function get() {
      if (this.length === 1) {
        return '1 Audio File';
      }

      return this.length + ' Audio Files';
    }
  }]);

  return AudioValue;
}(_mediaValue2.default);

exports.default = AudioValue;
//# sourceMappingURL=audio-value.js.map