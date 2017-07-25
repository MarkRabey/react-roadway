'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createRouter = require('./createRouter');

var _createRouter2 = _interopRequireDefault(_createRouter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Router = function Router(_ref) {
  var history = _ref.history,
      location = _ref.location,
      props = _objectWithoutProperties(_ref, ['history', 'location']);

  return _react2.default.createElement('div', props);
};

Router.propTypes = {
  history: _propTypes2.default.func.isRequired,
  location: _propTypes2.default.func.isRequired
};

exports.default = (0, _createRouter2.default)(Router);