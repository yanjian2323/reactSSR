/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(4);

var _header2 = _interopRequireDefault(_header);

var _reactRedux = __webpack_require__(2);

var _store = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderList = function renderList(list) {
	return list.map(function (item) {
		return _react2.default.createElement(
			'p',
			{ key: item.id },
			item.title
		);
	});
};

var Home = function (_Component) {
	_inherits(Home, _Component);

	function Home() {
		_classCallCheck(this, Home);

		return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
	}

	_createClass(Home, [{
		key: 'render',
		value: function render() {
			return _react2.default.createElement(
				'div',
				null,
				_react2.default.createElement(_header2.default, null),
				_react2.default.createElement(
					'p',
					null,
					'this is home page,name is ',
					this.props.name
				),
				_react2.default.createElement(
					'button',
					{ onClick: function onClick() {
							return alert(1);
						} },
					'click me'
				),
				renderList(this.props.list)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.list.length) this.props.getList();
		}
	}]);

	return Home;
}(_react.Component);

Home.loadData = function (store) {
	return store.dispatch(_store.actions.getList());
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		name: state.home.name,
		list: state.home.list
	};
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
		getList: function getList() {
			return dispatch(_store.actions.getList());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(Home);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header() {
	return _react2.default.createElement(
		'div',
		{ className: 'header' },
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/' },
			'\u9996\u9875\xA0'
		),
		_react2.default.createElement(
			_reactRouterDom.Link,
			{ to: '/login' },
			'\u767B\u9646'
		)
	);
};

exports.default = Header;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(13);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(14);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LIST = exports.CHANGE_LIST = 'home/change_list';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(4);

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Login = function Login() {
	return _react2.default.createElement(
		'div',
		{ className: 'login' },
		_react2.default.createElement(_header2.default, null),
		'Login'
	);
};

exports.default = Login;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(9);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(10);

var _reactRouterDom = __webpack_require__(1);

var _reactRedux = __webpack_require__(2);

var _reactRouterConfig = __webpack_require__(11);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

var _login = __webpack_require__(7);

var _login2 = _interopRequireDefault(_login);

var _store = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.use('/api', proxy('http://47.95.113.63', {
	proxyReqPathResolver: function proxyReqPathResolver(req) {
		return '/ssr/api' + req.url;
	}
}));

var getRoutes = function getRoutes() {
	return _routes2.default.map(function (item) {
		return _react2.default.createElement(_reactRouterDom.Route, item);
	});
};

var render = function render(store, req, res) {
	var content = (0, _server.renderToString)(_react2.default.createElement(
		_reactRedux.Provider,
		{ store: store },
		_react2.default.createElement(
			_reactRouterDom.StaticRouter,
			{ context: {}, location: req.path },
			_react2.default.createElement(
				'div',
				null,
				getRoutes()
			)
		)
	));
	res.send('\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t\t<head></head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.context = ' + JSON.stringify(store.getState()) + ';\n\t\t\t\t</script>\n\t\t\t\t<script src="/index.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t');
};

app.get('*', function (req, res) {
	var store = (0, _store.getStore)();
	var branch = (0, _reactRouterConfig.matchRoutes)(_routes2.default, req.path);
	var promises = branch.map(function (_ref) {
		var route = _ref.route;

		if (route.loadData) {
			return route.loadData(store);
		}
		return Promise.resolve();
	});
	Promise.all(promises).then(function () {
		render(store, req, res);
	});
});

app.listen(8080, function () {
	console.log('server is start, port is: 8080');
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

var _login = __webpack_require__(7);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let routes = (
// 	<div>
// 		<Route path="/" exact component={Home} />
// 		<Route path="/login" exact component={Login} />
// 	</div>
// );

var routes = [{
	key: 'home',
	path: "/",
	exact: true,
	component: _home2.default,
	loadData: _home2.default.loadData
}, {
	key: 'login',
	path: "/login",
	exact: true,
	component: _login2.default
}];
exports.default = routes;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(6);

var defaultState = {
	name: 'yanjian',
	list: []
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	if (action.type === _constants.CHANGE_LIST) {
		var newState = _extends({}, state, {
			list: action.list
		});
		return newState;
	}
	return state;
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getList = undefined;

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

var _constants = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var changeList = function changeList(list) {
	return {
		type: _constants.CHANGE_LIST,
		list: list
	};
};

var getList = exports.getList = function getList() {
	return function (dispatch) {
		return _axios2.default.get('http://47.95.113.63/ssr/api/news.json?secret=D37msjPeC3').then(function (res) {
			var list = res.data.data;
			dispatch(changeList(list));
		});
	};
};

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getClientStore = exports.getStore = undefined;

var _redux = __webpack_require__(17);

var _reduxThunk = __webpack_require__(18);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _store = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
	home: _store.reducer
});

var getStore = function getStore() {
	return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

var getClientStore = function getClientStore() {
	var initState = window.context;
	return (0, _redux.createStore)(reducer, initState, (0, _redux.applyMiddleware)(_reduxThunk2.default));
};

exports.getStore = getStore;
exports.getClientStore = getClientStore;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ })
/******/ ]);