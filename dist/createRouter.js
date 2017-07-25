'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _utils = require('./utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var createRouter = function createRouter(WrappedComponent) {
  var Router = function (_React$Component) {
    _inherits(Router, _React$Component);

    function Router() {
      _classCallCheck(this, Router);

      var _this = _possibleConstructorReturn(this, (Router.__proto__ || Object.getPrototypeOf(Router)).call(this));

      _this.state = {
        history: {},
        location: {}
      };

      _this.updateHistory = _this.updateHistory.bind(_this);
      _this.unlisten = function () {};
      return _this;
    }

    _createClass(Router, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.state;
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        this.createHistory();
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.unlisten();
      }
    }, {
      key: 'createHistory',
      value: function createHistory() {
        var history = (0, _utils.createHistory)(this.props.options);
        var location = history.location;

        this.setState({ history: history, location: location });
        this.unlisten = history.listen(this.updateHistory);
      }
    }, {
      key: 'updateHistory',
      value: function updateHistory(location) {
        this.setState({ location: location });
      }
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(WrappedComponent, _extends({}, this.props, this.state));
      }
    }]);

    return Router;
  }(_react2.default.Component);

  Router.childContextTypes = {
    history: _propTypes2.default.object,
    location: _propTypes2.default.object
  };

  Router.propTypes = {
    options: _propTypes2.default.func
  };

  Router.defaultProps = {
    options: {}
  };

  return Router;
};

exports.default = createRouter;