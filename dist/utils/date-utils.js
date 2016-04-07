'use strict';

exports.__esModule = true;

var _locale = require('./locale');

var _locale2 = _interopRequireDefault(_locale);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _relativeDate = require('relative-date');

var _relativeDate2 = _interopRequireDefault(_relativeDate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var intl = null;

if (typeof Intl !== 'undefined') {
  intl = global.Intl;
}

var DateUtils = function () {
  function DateUtils() {
    _classCallCheck(this, DateUtils);
  }

  DateUtils.parseDate = function parseDate(dateString) {
    return new Date(dateString.replace(/-/g, '/'));
  };

  DateUtils.parseTime = function parseTime(timeString) {
    if (!(timeString != null && timeString.length === 5)) {
      return null;
    }

    var _timeString$split = timeString.split(':');

    var hours = _timeString$split[0];
    var minutes = _timeString$split[1];


    if (hours == null || minutes == null) {
      return null;
    }

    hours = +hours;
    minutes = +minutes;

    if (isNaN(hours) || isNaN(minutes)) {
      return null;
    }

    return hours * 60 + minutes;
  };

  DateUtils.formatTime = function formatTime(date) {
    var hours = _lodash2.default.padStart(date.getHours(), 2, '0');
    var minutes = _lodash2.default.padStart(date.getMinutes(), 2, '0');

    return hours + ':' + minutes;
  };

  DateUtils.formatTimeSeconds = function formatTimeSeconds(seconds) {
    var milliseconds = arguments.length <= 1 || arguments[1] === undefined ? false : arguments[1];

    var ss = +seconds % 60;
    var div = (+seconds - ss) / 60;
    var mm = div % 60;
    var hh = (div - mm) / 60;
    var ms = ss * 1000 % 1000;

    var h = _lodash2.default.padStart(Math.floor(hh), 2, '0');
    var m = _lodash2.default.padStart(Math.floor(mm), 2, '0');
    var s = _lodash2.default.padStart(Math.floor(ss), 2, '0');
    var u = _lodash2.default.padStart(Math.floor(ms), 3, '0');

    return h + ':' + m + ':' + s + (milliseconds ? '.' + u : '');
  };

  DateUtils.formatTimeParts = function formatTimeParts(hours, minutes, seconds) {
    var h = _lodash2.default.padStart(+hours, 2, '0');
    var m = _lodash2.default.padStart(+minutes, 2, '0');
    var s = _lodash2.default.padStart(+seconds, 2, '0');

    return h + ':' + m + ':' + s;
  };

  DateUtils.parseISOTimestamp = function parseISOTimestamp(timestampString) {
    if (!timestampString) {
      return null;
    }

    return new Date(timestampString);
  };

  DateUtils.parseEpochTimestamp = function parseEpochTimestamp(timestampString) {
    if (!timestampString) {
      return null;
    }

    return new Date(parseFloat(timestampString) * 1000);
  };

  DateUtils.formatISOTimestamp = function formatISOTimestamp(date) {
    if (date == null || isNaN(date.getTime())) {
      return null;
    }
    return date.toISOString();
  };

  DateUtils.formatEpochTimestamp = function formatEpochTimestamp(date) {
    if (date == null || isNaN(date.getTime())) {
      return null;
    }
    return (date.getTime() / 1000).toFixed(3);
  };

  DateUtils.formatDate = function formatDate(date) {
    var year = date.getFullYear();
    var month = _lodash2.default.padStart(date.getMonth() + 1, 2, '0');
    var day = _lodash2.default.padStart(date.getDate(), 2, '0');

    return year + '-' + month + '-' + day;
  };

  DateUtils.formatLocalizedDate = function formatLocalizedDate(date) {
    if (date == null) {
      return null;
    }

    return DateUtils.__formatLocalizedDate(date);
  };

  DateUtils.formatLocalizedTimestamp = function formatLocalizedTimestamp(date) {
    if (date == null) {
      return null;
    }

    return date.toLocaleString();
  };

  DateUtils.formatRelativeTimestamp = function formatRelativeTimestamp(date) {
    return (0, _relativeDate2.default)(date);
  };

  DateUtils.__formatLocalizedDate = function __formatLocalizedDate(date) {
    if (!_locale2.default.supportsECMA402()) {
      var year = date.getFullYear();
      var month = _lodash2.default.padStart(date.getMonth() + 1, 2, '0');
      var day = _lodash2.default.padStart(date.getDate(), 2, '0');
      return year + '-' + month + '-' + day;
    }

    var options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    };

    return new intl.DateTimeFormat(_locale2.default.currentLocale(), options).format(date);
  };

  return DateUtils;
}();

exports.default = DateUtils;
//# sourceMappingURL=date-utils.js.map