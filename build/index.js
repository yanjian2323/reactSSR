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
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(18);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(19);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
	_inherits(Header, _Component);

	function Header() {
		_classCallCheck(this, Header);

		return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
	}

	_createClass(Header, [{
		key: 'componentWillMount',
		value: function componentWillMount() {}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    isLogin = _props.isLogin,
			    login = _props.login,
			    logout = _props.logout;

			return _react2.default.createElement(
				'div',
				{ className: 'header' },
				_react2.default.createElement(
					_reactRouterDom.Link,
					{ to: '/' },
					'\u9996\u9875\xA0'
				),
				isLogin ? _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						_reactRouterDom.Link,
						{ to: '/translation' },
						'\u7FFB\u8BD1\u5217\u8868'
					),
					_react2.default.createElement(
						'a',
						{ href: '#', onClick: logout },
						'\xA0\u9000\u51FA'
					)
				) : _react2.default.createElement(
					'div',
					null,
					_react2.default.createElement(
						'a',
						{ href: '#', onClick: login },
						'\u767B\u9646'
					)
				)
			);
		}
	}]);

	return Header;
}(_react.Component);

var mapStateToProps = function mapStateToProps(state) {
	return {
		isLogin: state.header.isLogin
	};
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
	return {
		login: function login() {
			dispatch(_store.actions.login());
		},
		logout: function logout() {
			dispatch(_store.actions.logout());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispathToProps)(Header);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LOGIN = exports.CHANGE_LOGIN = 'header/change_login';

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(8);

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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(20);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(21);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LIST = exports.CHANGE_LIST = 'home/change_list';

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.actions = exports.reducer = undefined;

var _reducer = __webpack_require__(23);

var _reducer2 = _interopRequireDefault(_reducer);

var _actions = __webpack_require__(24);

var actions = _interopRequireWildcard(_actions);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.reducer = _reducer2.default;
exports.actions = actions;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.default = {
	secret: 'D37msjPeC3'
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(14);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(15);

var _reactRouterDom = __webpack_require__(2);

var _reactRedux = __webpack_require__(1);

var _reactRouterConfig = __webpack_require__(4);

var _routes = __webpack_require__(16);

var _routes2 = _interopRequireDefault(_routes);

var _expressHttpProxy = __webpack_require__(26);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _store = __webpack_require__(27);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {
	proxyReqPathResolver: function proxyReqPathResolver(req) {
		return '/ssr/api' + req.url;
	}
}));

// let getRoutes = () => {
// 	return routes.map(item => {
// 		return <Route {...item} />
// 	});
// }

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
				(0, _reactRouterConfig.renderRoutes)(_routes2.default)
			)
		)
	));
	res.send('\n\t\t<!DOCTYPE html>\n\t\t<html>\n\t\t\t<head></head>\n\t\t\t<body>\n\t\t\t\t<div id="root">' + content + '</div>\n\t\t\t\t<script>\n\t\t\t\t\twindow.context = ' + JSON.stringify(store.getState()) + ';\n\t\t\t\t</script>\n\t\t\t\t<script src="/index.js"></script>\n\t\t\t</body>\n\t\t</html>\n\t');
};

app.get('*', function (req, res) {
	var store = (0, _store.getStore)(req);
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
/* 14 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(2);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

var _home = __webpack_require__(7);

var _home2 = _interopRequireDefault(_home);

var _translation = __webpack_require__(22);

var _translation2 = _interopRequireDefault(_translation);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// let routes = (
// 	<div>
// 		<Route path="/" exact component={Home} />
// 		<Route path="/login" exact component={Login} />
// 	</div>
// );

// let routes = [{
// 	key: 'home',
// 	path: "/",
// 	exact: true,
// 	component: Home,
// 	loadData: Home.loadData
// }, {
// 	key: 'login',
// 	path: "/login",
// 	exact: true,
// 	component: Login
// }];

// 配置多级路由
var routes = [{
	key: 'root',
	path: '/',
	component: _App2.default,
	loadData: _App2.default.loadData,
	routes: [{
		key: 'home',
		path: "/",
		exact: true,
		component: _home2.default,
		loadData: _home2.default.loadData
	}, {
		key: 'translation',
		path: "/translation",
		exact: true,
		component: _translation2.default,
		loadData: _translation2.default.loadData
	}]
}];
exports.default = routes;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _header = __webpack_require__(5);

var _header2 = _interopRequireDefault(_header);

var _reactRouterConfig = __webpack_require__(4);

var _store = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(props) {
	return _react2.default.createElement(
		_react.Fragment,
		null,
		_react2.default.createElement(_header2.default, null),
		(0, _reactRouterConfig.renderRoutes)(props.route.routes)
	);
};

App.loadData = function (store) {
	return store.dispatch(_store.actions.isLogin());
};

exports.default = App;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(6);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultState = {
	isLogin: false
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	if (action.type === constants.CHANGE_LOGIN) {
		return _extends({}, state, {
			isLogin: action.isLogin
		});
	}
	return state;
};

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.isLogin = exports.logout = exports.login = undefined;

var _constants = __webpack_require__(6);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var changeLogin = function changeLogin(isLogin) {
	return {
		type: constants.CHANGE_LOGIN,
		isLogin: isLogin
	};
};

var login = exports.login = function login() {
	return function (dispatch, getState, request) {
		return request('/api/login.json').then(function () {
			dispatch(changeLogin(true));
		});
	};
};

var logout = exports.logout = function logout() {
	return function (dispatch, getState, request) {
		return request('/api/logout.json').then(function () {
			dispatch(changeLogin(false));
		});
	};
};

var isLogin = exports.isLogin = function isLogin() {
	return function (dispatch, getState, request) {
		return request('/api/isLogin.json').then(function (res) {
			dispatch(changeLogin(res.data.data.login));
		});
	};
};

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(9);

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
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getList = undefined;

var _constants = __webpack_require__(9);

var changeList = function changeList(list) {
	return {
		type: _constants.CHANGE_LIST,
		list: list
	};
};

var getList = exports.getList = function getList() {
	// 这个地方的axios是在createStore的时候通过thunk注入进来的
	return function (dispatch, getState, axios) {
		return axios.get('/api/news.json').then(function (res) {
			var list = res.data.data;
			dispatch(changeList(list));
		});
	};
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(1);

var _store = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function getList(list) {
	return list.map(function (item) {
		return _react2.default.createElement(
			'div',
			{ key: item.id },
			item.title
		);
	});
}

var Translation = function (_Component) {
	_inherits(Translation, _Component);

	function Translation() {
		_classCallCheck(this, Translation);

		return _possibleConstructorReturn(this, (Translation.__proto__ || Object.getPrototypeOf(Translation)).apply(this, arguments));
	}

	_createClass(Translation, [{
		key: 'render',
		value: function render() {
			var list = this.props.list;

			return _react2.default.createElement(
				'div',
				{ className: 'traslation' },
				getList(list)
			);
		}
	}, {
		key: 'componentDidMount',
		value: function componentDidMount() {
			if (!this.props.list.length) {
				this.props.getTranlationList();
			}
		}
	}]);

	return Translation;
}(_react.Component);

Translation.loadData = function (store) {
	return store.dispatch(_store.actions.getTranlationList());
};

var mapStateToProps = function mapStateToProps(state) {
	return {
		list: state.translation.list
	};
};

var mapDispathToProps = function mapDispathToProps(dispatch) {
	return {
		getTranlationList: function getTranlationList() {
			dispatch(_store.actions.getTranlationList());
		}
	};
};

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispathToProps)(Translation);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _constants = __webpack_require__(25);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

var defaultState = {
	list: []
};

exports.default = function () {
	var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;
	var action = arguments[1];

	if (action.type === constants.CHANGE_LIST) {
		return _extends({}, state, {
			list: action.list
		});
	}
	return state;
};

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getTranlationList = getTranlationList;

var _constants = __webpack_require__(25);

var constants = _interopRequireWildcard(_constants);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function changeList(list) {
	return {
		type: constants.CHANGE_LIST,
		list: list
	};
}

function getTranlationList() {
	return function (dispatch, getState, request) {
		return request('/api/translations.json').then(function (res) {
			if (res.data.success) {
				dispatch(changeList(res.data.data));
			} else {
				dispatch(changeList([]));
			}
		});
	};
}

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var CHANGE_LIST = exports.CHANGE_LIST = 'translation/change_list';

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = require("express-http-proxy");

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports.getClientStore = exports.getStore = undefined;

var _redux = __webpack_require__(28);

var _reduxThunk = __webpack_require__(29);

var _reduxThunk2 = _interopRequireDefault(_reduxThunk);

var _store = __webpack_require__(8);

var _store2 = __webpack_require__(3);

var _store3 = __webpack_require__(10);

var _request = __webpack_require__(30);

var _request2 = _interopRequireDefault(_request);

var _request3 = __webpack_require__(31);

var _request4 = _interopRequireDefault(_request3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
	home: _store.reducer,
	header: _store2.reducer,
	translation: _store3.reducer
});

var getStore = function getStore(req) {
	// 用withWxtraArgument来传参
	return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req))));
};

var getClientStore = function getClientStore() {
	// 脱水
	var initState = window.context;
	// 用withWxtraArgument来传参
	return (0, _redux.createStore)(reducer, initState, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default)));
};

exports.getStore = getStore;
exports.getClientStore = getClientStore;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(12);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _axios2.default.create({
	baseURL: '/',
	params: {
		secret: _config2.default.secret
	}
});

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = __webpack_require__(11);

var _axios2 = _interopRequireDefault(_axios);

var _config = __webpack_require__(12);

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
	return _axios2.default.create({
		baseURL: 'http://47.95.113.63/ssr/',
		// 解决在服务端axios发送请求时不能携带客户端cookie的问题
		headers: {
			cookie: req.get('cookie') || ''
		},
		params: {
			secret: _config2.default.secret
		}
	});
};

/***/ })
/******/ ]);