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

var _expressHttpProxy = __webpack_require__(26);

var _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);

var _home = __webpack_require__(3);

var _home2 = _interopRequireDefault(_home);

var _login = __webpack_require__(7);

var _login2 = _interopRequireDefault(_login);

var _store = __webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public'));

app.use('/api', (0, _expressHttpProxy2.default)('http://47.95.113.63', {
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

var _constants = __webpack_require__(6);

var changeList = function changeList(list) {
	return {
		type: _constants.CHANGE_LIST,
		list: list
	};
};

var getList = exports.getList = function getList() {
	// 这个地方的axios是在createStore的时候通过thunk注入进来的
	return function (dispatch, getState, axios) {
		return axios.get('/api/news.json?secret=D37msjPeC3').then(function (res) {
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

var _request = __webpack_require__(19);

var _request2 = _interopRequireDefault(_request);

var _request3 = __webpack_require__(20);

var _request4 = _interopRequireDefault(_request3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducer = (0, _redux.combineReducers)({
	home: _store.reducer
});

var getStore = function getStore() {
	// 用withWxtraArgument来传参
	return (0, _redux.createStore)(reducer, (0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request4.default)));
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
/* 17 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("redux-thunk");

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _axios2.default.create({
	baseURL: '/'
});

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _axios = __webpack_require__(15);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _axios2.default.create({
	baseURL: 'http://47.95.113.63/ssr/'
});

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (val) {
  return (typeof val  ===  'undefined' || val === '' || val === null);
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var http = __webpack_require__(31);
var https = __webpack_require__(32);
var url = __webpack_require__(24);
var getRawBody = __webpack_require__(33);
var isUnset = __webpack_require__(22);

function extend(obj, source, skips) {

  if (!source) {
    return obj;
  }

  for (var prop in source) {
    if (!skips || skips.indexOf(prop) === -1) {
      obj[prop] = source[prop];
    }
  }

  return obj;
}

function parseHost(Container) {
  var host = Container.params.host;
  var req =  Container.user.req;
  var options = Container.options;
  host = (typeof host === 'function') ? host(req) : host.toString();

  if (!host) {
    return new Error('Empty host parameter');
  }

  if (!/http(s)?:\/\//.test(host)) {
    host = 'http://' + host;
  }

  var parsed = url.parse(host);

  if (!parsed.hostname) {
    return new Error('Unable to parse hostname, possibly missing protocol://?');
  }

  var ishttps = options.https || parsed.protocol === 'https:';

  return {
    host: parsed.hostname,
    port: parsed.port || (ishttps ? 443 : 80),
    module: ishttps ? https : http,
  };
}

function reqHeaders(req, options) {


  var headers = options.headers || {};

  var skipHdrs = [ 'connection', 'content-length' ];
  if (!options.preserveHostHdr) {
    skipHdrs.push('host');
  }
  var hds = extend(headers, req.headers, skipHdrs);
  hds.connection = 'close';

  return hds;
}

function createRequestOptions(req, res, options) {

  // prepare proxyRequest

  var reqOpt = {
    headers: reqHeaders(req, options),
    method: req.method,
    path: req.path,
    params: req.params,
  };

  if (options.preserveReqSession) {
    reqOpt.session = req.session;
  }

  return Promise.resolve(reqOpt);
}

// extract to bodyContent object

function bodyContent(req, res, options) {
  var parseReqBody = isUnset(options.parseReqBody) ? true : options.parseReqBody;

  function maybeParseBody(req, limit) {
    if (req.body) {
      return Promise.resolve(req.body);
    } else {
      // Returns a promise if no callback specified and global Promise exists.

      return getRawBody(req, {
        length: req.headers['content-length'],
        limit: limit,
      });
    }
  }

  if (parseReqBody) {
    return maybeParseBody(req, options.limit);
  }
}


module.exports = {
  create: createRequestOptions,
  bodyContent: bodyContent,
  parseHost: parseHost
};


/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
 * Trivial convenience methods for parsing Buffers
 */

function asBuffer(body, options) {

  var ret;
  if (Buffer.isBuffer(body)) {
    ret = body;
  } else if (typeof body === 'object') {
    ret = new Buffer(JSON.stringify(body), options.reqBodyEncoding);
  } else if (typeof body === 'string') {
    ret = new Buffer(body, options.reqBodyEncodeing);
  }
  return ret;
}

function asBufferOrString(body) {

  var ret;
  if (Buffer.isBuffer(body)) {
    ret = body;
  } else if (typeof body === 'object') {
    ret = JSON.stringify(body);
  } else if (typeof body === 'string') {
    ret = body;
  }
  return ret;
}

module.exports = {
  buffer: asBuffer,
  bufferOrString: asBufferOrString
};


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// * Breaks proxying into a series of discrete steps, many of which can be swapped out by authors.
// * Uses Promises to support async.
// * Uses a quasi-Global called Container to tidy up the argument passing between the major work-flow steps.

var ScopeContainer = __webpack_require__(27);
var assert = __webpack_require__(29);
var debug = __webpack_require__(21)('express-http-proxy');

var buildProxyReq                = __webpack_require__(30);
var copyProxyResHeadersToUserRes = __webpack_require__(34);
var decorateProxyReqBody         = __webpack_require__(35);
var decorateProxyReqOpts         = __webpack_require__(36);
var decorateUserRes              = __webpack_require__(37);
var decorateUserResHeaders       = __webpack_require__(39);
var filterUserRequest            = __webpack_require__(40);
var handleProxyErrors            = __webpack_require__(41);
var maybeSkipToNextHandler       = __webpack_require__(42);
var prepareProxyReq              = __webpack_require__(43);
var resolveProxyHost             = __webpack_require__(44);
var resolveProxyReqPath          = __webpack_require__(45);
var sendProxyRequest             = __webpack_require__(46);
var sendUserRes                  = __webpack_require__(48);

module.exports = function proxy(host, userOptions) {
  assert(host, 'Host should not be empty');

  return function handleProxy(req, res, next) {
    debug('[start proxy] ' + req.path);
    var container = new ScopeContainer(req, res, next, host, userOptions);

    // Skip proxy if filter is falsey.  Loose equality so filters can return
    // false, null, undefined, etc.

    //if (!container.options.filter(req, res)) { return next(); }

    filterUserRequest(container)
      .then(buildProxyReq)
      .then(resolveProxyHost)
      .then(decorateProxyReqOpts)
      .then(resolveProxyReqPath)
      .then(decorateProxyReqBody)
      .then(prepareProxyReq)
      .then(sendProxyRequest)
      .then(maybeSkipToNextHandler)
      .then(copyProxyResHeadersToUserRes)
      .then(decorateUserResHeaders)
      .then(decorateUserRes)
      .then(sendUserRes)
      .catch(function (err) {
        // I sometimes reject without an error to shortcircuit the remaining
        // steps and return control to the host application.

        if (err) {
          var resolver = (container.options.proxyErrorHandler) ?
            container.options.proxyErrorHandler :
            handleProxyErrors;
          resolver(err, res, next);
        } else {
          next();
        }
      });
  };
};



/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var resolveOptions = __webpack_require__(28);

// The Container object is passed down the chain of Promises, with each one
// of them mutating and returning Container.  The goal is that (eventually)
// author using this library // could hook into/override any of these
// workflow steps with a Promise or simple function.
// Container for scoped arguments in a promise chain.  Each promise recieves
// this as its argument, and returns it.
//
// Do not expose the details of this to hooks/user functions.

function Container(req, res, next, host, userOptions) {
  return {
    user: {
      req: req,
      res: res,
      next: next,
    },
    proxy: {
      req: {},
      res: {},
      resData: undefined, // from proxy res
      bodyContent: undefined, // for proxy req
      reqBuilder: {},  // reqOpt, intended as first arg to http(s)?.request
    },
    options: resolveOptions(userOptions),
    params: {
      host: host,
      userOptions: userOptions
    }
  };
}

module.exports = Container;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debug = __webpack_require__(21)('express-http-proxy');

var isUnset = __webpack_require__(22);

function resolveBodyEncoding(reqBodyEncoding) {

  /* For reqBodyEncoding, these is a meaningful difference between null and
    * undefined.  null should be passed forward as the value of reqBodyEncoding,
    * and undefined should result in utf-8.
    */
  return reqBodyEncoding !== undefined ? reqBodyEncoding : 'utf-8';
}

// parse client arguments

function resolveOptions(options) {
  options = options || {};
  var resolved;

  if (options.decorateRequest) {
    throw new Error(
      'decorateRequest is REMOVED; use proxyReqOptDecorator and' +
      'proxyReqBodyDecorator instead.  see README.md'
    );
  }

  if (options.forwardPath || options.forwardPathAsync) {
    console.warn(
      'forwardPath and forwardPathAsync are DEPRECATED' +
      'and should be replaced with proxyReqPathResolver'
    );
  }

  if (options.intercept) {
    console.warn(
      'DEPRECATED: intercept. Use decorateUseRes instead.' +
      ' Please see README for more information.'
    );
  }

  resolved = {
    limit: options.limit || '1mb',
    proxyReqPathResolver: options.proxyReqPathResolver
        || options.forwardPathAsync
        || options.forwardPath,
    proxyReqOptDecorator: options.proxyReqOptDecorator,
    proxyReqBodyDecorator: options.proxyReqBodyDecorator,
    userResDecorator: options.userResDecorator || options.intercept,
    userResHeaderDecorator: options.userResHeaderDecorator,
    proxyErrorHandler: options.proxyErrorHandler,
    filter: options.filter,
    // For backwards compatability, we default to legacy behavior for newly added settings.

    parseReqBody: isUnset(options.parseReqBody) ? true : options.parseReqBody,
    preserveHostHdr: options.preserveHostHdr,
    memoizeHost: isUnset(options.memoizeHost) ? true : options.memoizeHost,
    reqBodyEncoding: resolveBodyEncoding(options.reqBodyEncoding),
    skipToNextHandlerFilter: options.skipToNextHandlerFilter,
    headers: options.headers,
    preserveReqSession: options.preserveReqSession,
    https: options.https,
    port: options.port,
    reqAsBuffer: options.reqAsBuffer,
    timeout: options.timeout
  };

  // automatically opt into stream mode if no response modifiers are specified

  resolved.stream = !resolved.skipToNextHandlerFilter &&
                    !resolved.userResDecorator &&
                    !resolved.userResHeaderDecorator;

  debug(resolved);
  return resolved;
}

module.exports = resolveOptions;


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("assert");

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debug = __webpack_require__(21)('express-http-proxy');
var requestOptions = __webpack_require__(23);

function buildProxyReq(Container) {
  var req = Container.user.req;
  var res = Container.user.res;
  var options = Container.options;
  var host = Container.proxy.host;

  var parseBody = (!options.parseReqBody) ? Promise.resolve(null) : requestOptions.bodyContent(req, res, options);
  var createReqOptions = requestOptions.create(req, res, options, host);

  return Promise
    .all([parseBody, createReqOptions])
    .then(function(responseArray) {
      Container.proxy.bodyContent = responseArray[0];
      Container.proxy.reqBuilder = responseArray[1];
      debug('proxy request options:', Container.proxy.reqBuilder);
      return Container;
    });
}

module.exports = buildProxyReq;


/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("https");

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = require("raw-body");

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function copyProxyResHeadersToUserRes(container) {
  return new Promise(function(resolve) {
    var res = container.user.res;
    var rsp = container.proxy.res;

    if (!res.headersSent) {
        res.status(rsp.statusCode);
        Object.keys(rsp.headers)
        .filter(function(item) { return item !== 'transfer-encoding'; })
        .forEach(function(item) {
            res.set(item, rsp.headers[item]);
        });
    }

    resolve(container);
  });
}

module.exports = copyProxyResHeadersToUserRes;



/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debug = __webpack_require__(21)('express-http-proxy');

function defaultDecorator(proxyReqOptBody/*, userReq */) {
  return proxyReqOptBody;
}

function decorateProxyReqBody(container) {
  var userDecorator = container.options.proxyReqBodyDecorator;
  var resolverFn = userDecorator || defaultDecorator;

  if (userDecorator) {
    debug('using custom proxyReqBodyDecorator');
  }

  return Promise
    .resolve(resolverFn(container.proxy.bodyContent, container.user.req))
    .then(function(bodyContent) {
      container.proxy.bodyContent = bodyContent;
      return Promise.resolve(container);
    });
}

module.exports = decorateProxyReqBody;


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function defaultDecorator(proxyReqOptBuilder /*, userReq */) {
  return proxyReqOptBuilder;
}

function decorateProxyReqOpt(container) {
  var resolverFn = container.options.proxyReqOptDecorator || defaultDecorator;

  return Promise
    .resolve(resolverFn(container.proxy.reqBuilder, container.user.req))
    .then(function(processedReqOpts) {
        delete processedReqOpts.params;
        container.proxy.reqBuilder = processedReqOpts;
        return Promise.resolve(container);
    });
}

module.exports = decorateProxyReqOpt;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var as = __webpack_require__(25);
var debug = __webpack_require__(21)('express-http-proxy');
var zlib = __webpack_require__(38);

function isResGzipped(res) {
  return res.headers['content-encoding'] === 'gzip';
}

function zipOrUnzip(method) {
  return function(rspData, res) {
    return (isResGzipped(res) && rspData.length) ? zlib[method](rspData) : rspData;
  };
}

var maybeUnzipResponse = zipOrUnzip('gunzipSync');
var maybeZipResponse = zipOrUnzip('gzipSync');

function verifyBuffer(rspd, reject) {
  if (!Buffer.isBuffer(rspd)) {
    return reject(new Error('userResDecorator should return string or buffer as data'));
  }
}

function updateHeaders(res, rspdBefore, rspdAfter, reject) {
  if (!res.headersSent) {
      res.set('content-length', rspdAfter.length);
  } else if (rspdAfter.length !== rspdBefore.length) {
      var error = '"Content-Length" is already sent,' +
          'the length of response data can not be changed';
      return reject(new Error(error));
  }
}

function decorateProxyResBody(container) {
  var resolverFn = container.options.userResDecorator;

  if (!resolverFn) {
    return Promise.resolve(container);
  }

  var proxyResData = maybeUnzipResponse(container.proxy.resData, container.proxy.res);
  var proxyRes = container.proxy.res;
  var req = container.user.req;
  var res = container.user.res;

  if (res.statusCode === 304) {
    debug('Skipping userResDecorator on response 304');
    return Promise.resolve(container);
  }

  return Promise
    .resolve(resolverFn(proxyRes, proxyResData, req, res))
    .then(function(modifiedResData) {
      return new Promise(function(resolve, reject) {
        var rspd = as.buffer(modifiedResData, container.options);
        verifyBuffer(rspd, reject);
        updateHeaders(res, proxyResData, rspd, reject);
        container.proxy.resData = maybeZipResponse(rspd, container.proxy.res);
        resolve(container);
      });
    });
}

module.exports = decorateProxyResBody;


/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = require("zlib");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";



function decorateUserResHeaders(container) {
  var resolverFn = container.options.userResHeaderDecorator;
  var headers = container.user.res._headers;

  if (!resolverFn) {
    return Promise.resolve(container);
  }

  return Promise
    .resolve(resolverFn(headers, container.user.req, container.user.res, container.proxy.req, container.proxy.res))
    .then(function(headers) {
      return new Promise(function(resolve) {
        container.user.res.set(headers);
        resolve(container);
      });
    });
}

module.exports = decorateUserResHeaders;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// No-op version of filter.  Allows everything!

function defaultFilter(proxyReqOptBuilder, userReq) { // eslint-disable-line
  return true;
}

function filterUserRequest(container) {
  var resolverFn = container.options.filter || defaultFilter;

  return Promise
    .resolve(resolverFn(container.proxy.reqBuilder, container.user.req))
    .then(function (shouldIContinue) {
      if (shouldIContinue) {
        return Promise.resolve(container);
      } else {
        return Promise.reject(); // reject with no args should simply call next()
      }
    });
}

module.exports = filterUserRequest;



/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var debug = __webpack_require__(21)('express-http-proxy');

function connectionResetHandler(err, res) {
  if (err && err.code === 'ECONNRESET') {
    debug('Error: Connection reset due to timeout.');
    res.setHeader('X-Timeout-Reason', 'express-http-proxy reset the request.');
    res.writeHead(504, {'Content-Type': 'text/plain'});
    res.end();
  }
}

function handleProxyErrors(err, res, next) {
  switch (err && err.code) {
    case 'ECONNRESET':  { return connectionResetHandler(err, res, next); }
    default:            { next(err); }
  }
}

module.exports = handleProxyErrors;


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function defaultSkipFilter(/* res */) {
  return false;
}

function maybeSkipToNextHandler(container) {
  var resolverFn = container.options.skipToNextHandlerFilter || defaultSkipFilter;

  return Promise
    .resolve(resolverFn(container.proxy.res))
    .then(function(shouldSkipToNext) {
      return (shouldSkipToNext) ? container.user.next() : Promise.resolve(container);
    })
    .catch(Promise.reject);
}

module.exports = maybeSkipToNextHandler;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var as = __webpack_require__(25);

function getContentLength(body) {

  var result;
  if (Buffer.isBuffer(body)) { // Buffer
    result = body.length;
  } else if (typeof body === 'string') {
    result = Buffer.byteLength(body);
  }
  return result;
}


function prepareProxyReq(container) {
  return new Promise(function(resolve) {
    var bodyContent = container.proxy.bodyContent;
    var reqOpt = container.proxy.reqBuilder;

    if (bodyContent) {
      bodyContent = container.options.reqAsBuffer ?
        as.buffer(bodyContent, container.options) :
        as.bufferOrString(bodyContent);

      reqOpt.headers['content-length'] = getContentLength(bodyContent);

      if (container.options.reqBodyEncoding) {
        reqOpt.headers['Accept-Charset'] = container.options.reqBodyEncoding;
      }
    }

    container.proxy.bodyContent = bodyContent;
    resolve(container);
  });
}

module.exports = prepareProxyReq;



/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var requestOptions = __webpack_require__(23);

function resolveProxyHost(container) {
  var parsedHost;

  if (container.options.memoizeHost && container.options.memoizedHost) {
    parsedHost = container.options.memoizedHost;
  } else {
    parsedHost = requestOptions.parseHost(container);
  }

  container.proxy.reqBuilder.host = parsedHost.host;
  container.proxy.reqBuilder.port = container.options.port || parsedHost.port;
  container.proxy.requestModule = parsedHost.module;
  return Promise.resolve(container);
}

module.exports = resolveProxyHost;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var url = __webpack_require__(24);
var debug = __webpack_require__(21)('express-http-proxy');

function defaultProxyReqPathResolver(req) {
  return url.parse(req.url).path;
}

function resolveProxyReqPath(container) {
  var resolverFn = container.options.proxyReqPathResolver || defaultProxyReqPathResolver;

  return Promise
    .resolve(resolverFn(container.user.req))
    .then(function(resolvedPath) {
      container.proxy.reqBuilder.path = resolvedPath;
      debug('resolved proxy path:', resolvedPath);
      return Promise.resolve(container);
    });
}

module.exports = resolveProxyReqPath;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var chunkLength = __webpack_require__(47);

function sendProxyRequest(Container) {
  var req = Container.user.req;
  var bodyContent = Container.proxy.bodyContent;
  var reqOpt = Container.proxy.reqBuilder;
  var options = Container.options;

  return new Promise(function(resolve, reject) {
    var protocol = Container.proxy.requestModule;
    var proxyReq = protocol.request(reqOpt, function(rsp) {
      if (options.stream) {
        Container.proxy.res = rsp;
        return resolve(Container);
      }

      var chunks = [];
      rsp.on('data', function(chunk) { chunks.push(chunk); });
      rsp.on('end', function() {
        Container.proxy.res = rsp;
        Container.proxy.resData = Buffer.concat(chunks, chunkLength(chunks));
        resolve(Container);
      });
      rsp.on('error', reject);
    });

    proxyReq.on('socket', function(socket) {
      if (options.timeout) {
        socket.setTimeout(options.timeout, function() {
          proxyReq.abort();
        });
      }
    });

    proxyReq.on('error', reject);

    // this guy should go elsewhere, down the chain
    if (options.parseReqBody) {
    // We are parsing the body ourselves so we need to write the body content
    // and then manually end the request.

      //if (bodyContent instanceof Object) {
        //throw new Error
        //debugger;
        //bodyContent = JSON.stringify(bodyContent);
      //}

      if (bodyContent.length) {
        var body = bodyContent;
        var contentType = proxyReq.getHeader('Content-Type');
        if (contentType === 'x-www-form-urlencoded' || contentType === 'application/x-www-form-urlencoded') {
          try {
            var params = JSON.parse(body);
            body = Object.keys(params).map(function(k) { return k + '=' + params[k]; }).join('&');
          } catch (e) {
            // bodyContent is not json-format
          }
        }
        proxyReq.setHeader('Content-Length', Buffer.byteLength(body));
        proxyReq.write(body);
      }
      proxyReq.end();
    } else {
    // Pipe will call end when it has completely read from the request.
      req.pipe(proxyReq);
    }

    req.on('aborted', function() {
    // reject?
      proxyReq.abort();
    });
  });
}


module.exports = sendProxyRequest;


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function chunkLength(chunks) {
  return chunks.reduce(function (len, buf) {
    return len + buf.length;
  }, 0);
}

module.exports = chunkLength;


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function sendUserRes(Container) {
  if (!Container.user.res.headersSent) {
    if (Container.options.stream) {
      Container.proxy.res.pipe(Container.user.res);
    } else {
      Container.user.res.send(Container.proxy.resData);
    }
  }
  return Promise.resolve(Container);
}


module.exports = sendUserRes;


/***/ })
/******/ ]);