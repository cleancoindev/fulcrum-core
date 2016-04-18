'use strict';

exports.__esModule = true;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _containerElement = require('./container-element');

var _containerElement2 = _interopRequireDefault(_containerElement);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var RepeatableElement = function (_ContainerElement) {
  _inherits(RepeatableElement, _ContainerElement);

  function RepeatableElement(parent, attributes) {
    _classCallCheck(this, RepeatableElement);

    var _this = _possibleConstructorReturn(this, _ContainerElement.call(this, parent, attributes));

    _this.titleFieldKeys = attributes.title_field_keys || [attributes.title_field_key];

    _this._geometryTypes = attributes.geometry_types;

    _this._geometryRequired = !!attributes.geometry_required;
    return _this;
  }

  _createClass(RepeatableElement, [{
    key: 'isGeometryEnabled',
    get: function get() {
      return this._geometryTypes && this._geometryTypes.length > 0;
    }
  }, {
    key: 'isGeometryRequired',
    get: function get() {
      return this.isGeometryEnabled && this._geometryRequired;
    }
  }, {
    key: 'isLengthValidationSupported',
    get: function get() {
      return true;
    }
  }]);

  return RepeatableElement;
}(_containerElement2.default);

exports.default = RepeatableElement;
//# sourceMappingURL=repeatable-element.js.map