webpackHotUpdate("static/development/pages/_app.js",{

/***/ "./node_modules/history/es/DOMUtils.js":
false,

/***/ "./node_modules/history/es/LocationUtils.js":
false,

/***/ "./node_modules/history/es/PathUtils.js":
false,

/***/ "./node_modules/history/es/createBrowserHistory.js":
false,

/***/ "./node_modules/history/es/createHashHistory.js":
false,

/***/ "./node_modules/history/es/createMemoryHistory.js":
false,

/***/ "./node_modules/history/es/createTransitionManager.js":
false,

/***/ "./node_modules/history/es/index.js":
false,

/***/ "./node_modules/history/node_modules/warning/browser.js":
false,

/***/ "./node_modules/react-router-dom/es/BrowserRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/HashRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Link.js":
false,

/***/ "./node_modules/react-router-dom/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/NavLink.js":
false,

/***/ "./node_modules/react-router-dom/es/Prompt.js":
false,

/***/ "./node_modules/react-router-dom/es/Redirect.js":
false,

/***/ "./node_modules/react-router-dom/es/Route.js":
false,

/***/ "./node_modules/react-router-dom/es/Router.js":
false,

/***/ "./node_modules/react-router-dom/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router-dom/es/Switch.js":
false,

/***/ "./node_modules/react-router-dom/es/generatePath.js":
false,

/***/ "./node_modules/react-router-dom/es/index.js":
false,

/***/ "./node_modules/react-router-dom/es/matchPath.js":
false,

/***/ "./node_modules/react-router-dom/es/withRouter.js":
false,

/***/ "./node_modules/react-router/es/MemoryRouter.js":
false,

/***/ "./node_modules/react-router/es/Prompt.js":
false,

/***/ "./node_modules/react-router/es/Redirect.js":
false,

/***/ "./node_modules/react-router/es/Route.js":
false,

/***/ "./node_modules/react-router/es/Router.js":
false,

/***/ "./node_modules/react-router/es/StaticRouter.js":
false,

/***/ "./node_modules/react-router/es/Switch.js":
false,

/***/ "./node_modules/react-router/es/generatePath.js":
false,

/***/ "./node_modules/react-router/es/matchPath.js":
false,

/***/ "./node_modules/react-router/es/withRouter.js":
false,

/***/ "./node_modules/react-router/node_modules/isarray/index.js":
false,

/***/ "./node_modules/react-router/node_modules/path-to-regexp/index.js":
false,

/***/ "./node_modules/resolve-pathname/index.js":
false,

/***/ "./node_modules/value-equal/index.js":
false,

/***/ "./node_modules/warning/warning.js":
false,

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _lib_withApollo__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/withApollo */ "./lib/withApollo.js");
var _jsxFileName = "/Users/ryanyogan/personal/techies/frontend/pages/_app.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }







var _app =
/*#__PURE__*/
function (_App) {
  _inherits(_app, _App);

  function _app() {
    _classCallCheck(this, _app);

    return _possibleConstructorReturn(this, _getPrototypeOf(_app).apply(this, arguments));
  }

  _createClass(_app, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          Component = _this$props.Component,
          pageProps = _this$props.pageProps,
          apolloClient = _this$props.apolloClient;
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_app__WEBPACK_IMPORTED_MODULE_0__["Container"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 11
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 13
        },
        __self: this
      }, "Techies - A tech meetup"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.3.1/semantic.min.css",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 14
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_3__["ApolloProvider"], {
        client: apolloClient,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Router, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 20
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Component, _extends({}, pageProps, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 21
        },
        __self: this
      })))));
    }
  }]);

  return _app;
}(next_app__WEBPACK_IMPORTED_MODULE_0___default.a);

/* harmony default export */ __webpack_exports__["default"] = (Object(_lib_withApollo__WEBPACK_IMPORTED_MODULE_4__["default"])(_app));
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/_app")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=_app.js.679d913884f8896249d7.hot-update.js.map