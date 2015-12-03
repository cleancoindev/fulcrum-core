'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _formValueFactory = require('./form-value-factory');

var _formValueFactory2 = _interopRequireDefault(_formValueFactory);

var _formValue = require('./form-value');

var _formValue2 = _interopRequireDefault(_formValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SearchValueSeparator = ' ';

var FormValues = (function () {
  function FormValues(container, attributes) {
    _classCallCheck(this, FormValues);

    this._values = {};
    this.container = container;
    this.loadValues(container.elements, attributes);
  }

  _createClass(FormValues, [{
    key: 'get',
    value: function get(key) {
      return this._values[key];
    }
  }, {
    key: 'set',
    value: function set(key, value) {
      if (value && !(value instanceof _formValue2.default)) {
        throw new Error('Invalid value ' + value);
      }

      if (value != null) {
        this._values[key] = value;
      } else {
        delete this._values[key];
      }
    }
  }, {
    key: 'find',
    value: function find(dataName) {
      var element = this.container.elementsByDataName[dataName];

      if (element) {
        return this.get(element.key);
      }

      return null;
    }
  }, {
    key: 'loadValues',
    value: function loadValues(elements, attributes) {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var element = _step.value;

          this.loadValue(element, attributes);
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
  }, {
    key: 'loadValue',
    value: function loadValue(element, attributes) {
      if (element.isSectionElement) {
        this.loadValues(element.elements, attributes);
      } else {
        var rawValue = attributes[element.key];

        if (rawValue != null) {
          var formValue = _formValueFactory2.default.create(element, rawValue);

          this.set(element.key, formValue);
        }
      }
    }
  }, {
    key: 'toJSON',
    value: function toJSON() {
      var json = {};

      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = Object.keys(this._values)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var key = _step2.value;

          var formValue = this._values[key];

          if (formValue) {
            var jsonValue = formValue.toJSON();

            if (jsonValue) {
              json[key] = jsonValue;
            }
          }
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

      return json;
    }
  }, {
    key: 'copy',
    value: function copy() {
      return new FormValues(this.container, this.toJSON());
    }
  }, {
    key: 'merge',
    value: function merge(formValues) {
      if (!(formValues instanceof FormValues)) {
        throw new Error('Invalid values');
      }

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = Object.keys(this._values)[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var key = _step3.value;

          var formValue = this._values[key];

          this.set(key, formValue);
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
    }
  }, {
    key: 'createValue',
    value: function createValue(element, rawValue) {
      return _formValueFactory2.default.create(element, rawValue != null ? rawValue : null);
    }
  }, {
    key: 'searchableValue',
    get: function get() {
      var searchValues = [];

      var _iteratorNormalCompletion4 = true;
      var _didIteratorError4 = false;
      var _iteratorError4 = undefined;

      try {
        for (var _iterator4 = Object.keys(this._values)[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
          var key = _step4.value;

          var formValue = this._values[key];

          if (formValue) {
            var searchValue = formValue.searchableValue();

            if (searchValue != null) {
              searchValues.push(searchValue);
            }
          }
        }
      } catch (err) {
        _didIteratorError4 = true;
        _iteratorError4 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion4 && _iterator4.return) {
            _iterator4.return();
          }
        } finally {
          if (_didIteratorError4) {
            throw _iteratorError4;
          }
        }
      }

      return searchValues.join(SearchValueSeparator);
    }
  }]);

  return FormValues;
})();

exports.default = FormValues;
//# sourceMappingURL=form-values.js.map