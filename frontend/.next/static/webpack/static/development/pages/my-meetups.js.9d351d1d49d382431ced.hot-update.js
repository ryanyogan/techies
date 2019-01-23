webpackHotUpdate("static/development/pages/my-meetups.js",{

/***/ "./components/MyMeetups/index.js":
/*!***************************************!*\
  !*** ./components/MyMeetups/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-apollo */ "./node_modules/react-apollo/react-apollo.browser.umd.js");
/* harmony import */ var react_apollo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_apollo__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Meetup__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Meetup */ "./components/Meetup/index.js");
/* harmony import */ var _Menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Menu */ "./components/Menu/index.js");
/* harmony import */ var _graphql_queries__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../graphql/queries */ "./graphql/queries.js");
var _jsxFileName = "/Users/ryanyogan/personal/techies/frontend/components/MyMeetups/index.js";






var MyMeetups = function MyMeetups() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["ME_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    return console.log(data) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui stackable relaxed grid container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "twelve wide column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
      className: "ui header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "My Meetups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui segment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, loading && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, "Loading..."))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "four wide column",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Menu__WEBPACK_IMPORTED_MODULE_3__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    })));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (MyMeetups);

/***/ })

})
//# sourceMappingURL=my-meetups.js.9d351d1d49d382431ced.hot-update.js.map