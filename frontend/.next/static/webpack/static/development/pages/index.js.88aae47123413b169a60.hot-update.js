webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/MeetupList/index.js":
/*!****************************************!*\
  !*** ./components/MeetupList/index.js ***!
  \****************************************/
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
var _jsxFileName = "/Users/ryanyogan/personal/techies/frontend/components/MeetupList/index.js";






var MeetupList = function MeetupList() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_apollo__WEBPACK_IMPORTED_MODULE_1__["Query"], {
    query: _graphql_queries__WEBPACK_IMPORTED_MODULE_4__["MEETUPS_QUERY"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, function (_ref) {
    var data = _ref.data,
        loading = _ref.loading;
    console.log(data);
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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
    }, "All Meetups"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "ui segment",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
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

/* harmony default export */ __webpack_exports__["default"] = (MeetupList);

/***/ })

})
//# sourceMappingURL=index.js.88aae47123413b169a60.hot-update.js.map