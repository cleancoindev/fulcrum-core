"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var _choice = _interopRequireDefault(require("./elements/choice"));

var _dateUtils = _interopRequireDefault(require("./utils/date-utils"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } it = o[Symbol.iterator](); return it.next.bind(it); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ChoiceList = /*#__PURE__*/function () {
  function ChoiceList(attributes) {
    this.updateFromAPIAttributes(attributes);
  }

  var _proto = ChoiceList.prototype;

  _proto.updateFromAPIAttributes = function updateFromAPIAttributes(attrs) {
    var attributes = attrs || {};
    this._id = attributes.id;
    this._name = attributes.name;
    this._description = attributes.description;
    this._choicesJSON = attributes.choices || [];
    this._version = attributes.version;
    this._createdAt = _dateUtils["default"].parseISOTimestamp(attributes.created_at);
    this._updatedAt = _dateUtils["default"].parseISOTimestamp(attributes.updated_at);
  };

  _proto.toJSON = function toJSON() {
    var json = {};
    json.id = this.id || null;
    json.name = this.name || null;
    json.description = this.description || null;
    json.choices = this._choicesJSON || null;
    json.version = this.version;
    json.created_at = _dateUtils["default"].formatISOTimestamp(this.createdAt);
    json.updated_at = _dateUtils["default"].formatISOTimestamp(this.updatedAt);
    return json;
  };

  _createClass(ChoiceList, [{
    key: "id",
    get: function get() {
      return this._id;
    }
  }, {
    key: "name",
    get: function get() {
      return this._name;
    }
  }, {
    key: "description",
    get: function get() {
      return this._description;
    }
  }, {
    key: "version",
    get: function get() {
      return this._version;
    }
  }, {
    key: "createdAt",
    get: function get() {
      return this._createdAt;
    }
  }, {
    key: "updatedAt",
    get: function get() {
      return this._updatedAt;
    }
  }, {
    key: "choices",
    get: function get() {
      if (!this._choices) {
        this._choices = [];

        for (var _iterator = _createForOfIteratorHelperLoose(this._choicesJSON), _step; !(_step = _iterator()).done;) {
          var choice = _step.value;

          this._choices.push(new _choice["default"](choice));
        }
      }

      return this._choices;
    }
  }]);

  return ChoiceList;
}();

exports["default"] = ChoiceList;
//# sourceMappingURL=choice-list.js.map