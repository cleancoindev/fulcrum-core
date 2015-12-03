'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mediaValue = require('./media-value');

var _mediaValue2 = _interopRequireDefault(_mediaValue);

var _photoItemValue = require('./photo-item-value');

var _photoItemValue2 = _interopRequireDefault(_photoItemValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PhotoValue = (function (_MediaValue) {
  _inherits(PhotoValue, _MediaValue);

  function PhotoValue() {
    _classCallCheck(this, PhotoValue);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(PhotoValue).apply(this, arguments));
  }

  _createClass(PhotoValue, [{
    key: 'ItemClass',
    get: function get() {
      return _photoItemValue2.default;
    }
  }, {
    key: 'displayValue',
    get: function get() {
      if (this.length === 1) {
        return '1 Photo';
      } else {
        return this.length + ' Photos';
      }
    }
  }]);

  return PhotoValue;
})(_mediaValue2.default);

exports.default = PhotoValue;
//# sourceMappingURL=photo-value.js.map