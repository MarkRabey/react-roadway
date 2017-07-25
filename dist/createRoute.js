'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var createRoute = function createRoute(WrappedComponent) {
  var RouteComponent = function RouteComponent(_ref, _ref2) {
    var history = _ref2.history,
        location = _ref2.location;

    var match = _ref.match,
        props = _objectWithoutProperties(_ref, ['match']);

    var matched = (0, _utils.matchRoute)(match, location);
    if (match && !matched) return null;
    return _react2.default.createElement(WrappedComponent, _extends({}, props, {
      history: history,
      location: location,
      params: matched.params,
      search: matched.search
    }));
  };

  RouteComponent.propTypes = {
    match: _propTypes2.default.string
  };

  RouteComponent.defaultProps = {
    match: '/'
  };

  RouteComponent.contextTypes = {
    history: _propTypes2.default.object,
    location: _propTypes2.default.object
  };

  return RouteComponent;
};

exports.default = createRoute;