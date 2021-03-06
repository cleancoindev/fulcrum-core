"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _element = _interopRequireDefault(require("./element"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inheritsLoose(subClass, superClass) { subClass.prototype = Object.create(superClass.prototype); subClass.prototype.constructor = subClass; subClass.__proto__ = superClass; }

var MediaElement =
/*#__PURE__*/
function (_Element) {
  _inheritsLoose(MediaElement, _Element);

  function MediaElement() {
    return _Element.apply(this, arguments) || this;
  }

  var _proto = MediaElement.prototype;

  _proto.resetOverrides = function resetOverrides() {
    _Element.prototype.resetOverrides.call(this);

    this._overrideMediaGalleryEnabled = null;
  };

  _createClass(MediaElement, [{
    key: "isLengthValidationSupported",
    get: function get() {
      return true;
    }
  }, {
    key: "overrideMediaGalleryEnabled",
    set: function set(override) {
      this._overrideMediaGalleryEnabled = override;
    },
    get: function get() {
      return this._overrideMediaGalleryEnabled;
    }
  }, {
    key: "overrideValues",
    get: function get() {
      return Object.assign(Object.getOwnPropertyDescriptor(_element["default"].prototype, 'overrideValues').get.call(this), {
        overrideMediaGalleryEnabled: this._overrideMediaGalleryEnabled
      });
    }
  }]);

  return MediaElement;
}(_element["default"]);

exports["default"] = MediaElement;
//# sourceMappingURL=media-element.js.map