'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _formValue = require('./form-value');

var _formValue2 = _interopRequireDefault(_formValue);

var _repeatableItemValue = require('./repeatable-item-value');

var _repeatableItemValue2 = _interopRequireDefault(_repeatableItemValue);

var _textUtils = require('../utils/text-utils');

var _textUtils2 = _interopRequireDefault(_textUtils);

var _uuid = require('uuid');

var _uuid2 = _interopRequireDefault(_uuid);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SearchSeparator = ' ';

var RepeatableValue = function (_FormValue) {
  _inherits(RepeatableValue, _FormValue);

  function RepeatableValue(element, items) {
    _classCallCheck(this, RepeatableValue);

    var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(RepeatableValue).call(this, element, items));

    _this._items = [];

    if (items != null) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var item = _step.value;

          _this._items.push(new _repeatableItemValue2.default(_this.element, item, _this._items.length));
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    }
    return _this;
  }

  _createClass(RepeatableValue, [{
    key: 'toJSON',
    value: function toJSON() {
      if (this.isEmpty) {
        return null;
      }

      var items = [];

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = this._items[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var item = _step2.value;

          items.push(item.toJSON());
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      return items;
    }
  }, {
    key: 'isEqual',
    value: function isEqual(value) {
      return false;
    }
  }, {
    key: 'contains',
    value: function contains(value) {
      return false;
    }
  }, {
    key: 'startsWith',
    value: function startsWith(value) {
      return false;
    }
  }, {
    key: 'isLessThan',
    value: function isLessThan(value) {
      return false;
    }
  }, {
    key: 'isGreaterThan',
    value: function isGreaterThan(value) {
      return false;
    }
  }, {
    key: 'mapItems',
    value: function mapItems(callback) {
      return this._items.slice().map(callback);
    }
  }, {
    key: 'forEachItem',
    value: function forEachItem(callback) {
      this.mapItems(callback);
    }
  }, {
    key: 'createNewItem',
    value: function createNewItem() {
      var attributes = {
        id: _uuid2.default.v4(),
        form_values: {}
      };

      var item = new _repeatableItemValue2.default(this.element, attributes, this._items.length);

      this._items.push(item);

      return item;
    }
  }, {
    key: 'isEmpty',
    get: function get() {
      return this._items.length === 0;
    }
  }, {
    key: 'displayValue',
    get: function get() {
      if (this.length === 1) {
        return '1 Item';
      } else {
        return this.length + ' Items';
      }
    }
  }, {
    key: 'searchableValue',
    get: function get() {
      if (this.isEmpty) {
        return null;
      }

      var values = [];

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = this._items[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var item = _step3.value;

          var searchValue = item.searchableValue;

          if (_textUtils2.default.isPresent(searchValue)) {
            values.push(searchValue);
          }
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return values.join(SearchSeparator);
    }
  }, {
    key: 'length',
    get: function get() {
      return this._items.length;
    }
  }, {
    key: 'columnValue',
    get: function get() {
      return null;
    }
  }, {
    key: 'multipleValues',
    get: function get() {
      return null;
    }
  }]);

  return RepeatableValue;
}(_formValue2.default);

exports.default = RepeatableValue;
//# sourceMappingURL=repeatable-value.js.map