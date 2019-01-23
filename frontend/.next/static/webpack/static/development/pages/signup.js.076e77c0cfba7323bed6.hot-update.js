webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./graphql/mutations.js":
/*!******************************!*\
  !*** ./graphql/mutations.js ***!
  \******************************/
/*! exports provided: SIGNUP_MUTATION, LOGIN_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MUTATION", function() { return LOGIN_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  mutation LOGIN_MUTATION($email: String!, $password: String!) {\n    login(email: $email, password: $password) {\n      token\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  mutation SIGNUP_MUTATION(\n    $email: String!\n    $password: String!\n    $name: String!\n  ) {\n    signup(email: $email, password: $password, name: $name) {\n      token\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var SIGNUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var LOGIN_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());

/***/ })

})
//# sourceMappingURL=signup.js.076e77c0cfba7323bed6.hot-update.js.map