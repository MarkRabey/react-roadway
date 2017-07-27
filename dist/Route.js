'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _createRoute = require('./createRoute');

var _createRoute2 = _interopRequireDefault(_createRoute);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var Route = function Route(_ref) {
  var params = _ref.params,
      search = _ref.search,
      history = _ref.history,
      location = _ref.location,
      props = _objectWithoutProperties(_ref, ['params', 'search', 'history', 'location']);

  return _react2.default.createElement('div', props);
};

Route.propTypes = {
  params: _propTypes2.default.object,
  search: _propTypes2.default.object,
  history: _propTypes2.default.object.isRequired,
  location: _propTypes2.default.object.isRequired
};

Route.defaultProps = {
  params: {},
  search: {}
};

exports.default = (0, _createRoute2.default)(Route);