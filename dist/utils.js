'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createHistory = exports.matchRoute = undefined;

var _pathToRegexp = require('path-to-regexp');

var _pathToRegexp2 = _interopRequireDefault(_pathToRegexp);

var _createBrowserHistory = require('history/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var matchRoute = function matchRoute() {
  var pattern = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var location = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var _location$pathname = location.pathname,
      pathname = _location$pathname === undefined ? '' : _location$pathname,
      search = location.search;

  var keys = [];
  var params = {};

  var reg = (0, _pathToRegexp2.default)(pattern, keys);
  var isMatch = reg.test(pathname);

  if (!isMatch) return false;

  var tokens = reg.exec(pathname);

  keys.forEach(function (key, i) {
    params[key.name] = tokens[i + 1];
  });

  return {
    params: params,
    search: search
  };
};

var createHistory = function createHistory(options) {
  var history = {};
  history.listen = function () {};
  history.push = function () {};

  if (typeof document !== 'undefined') {
    history = (0, _createBrowserHistory2.default)(options);
  }

  return history;
};

exports.matchRoute = matchRoute;
exports.createHistory = createHistory;