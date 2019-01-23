webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./graphql/mutations.js":
/*!******************************!*\
  !*** ./graphql/mutations.js ***!
  \******************************/
/*! exports provided: SIGNUP_MUTATION, LOGIN_MUTATION, CREATE_MEETUP_MUTATION */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIGNUP_MUTATION", function() { return SIGNUP_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_MUTATION", function() { return LOGIN_MUTATION; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_MEETUP_MUTATION", function() { return CREATE_MEETUP_MUTATION; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  mutation CREATE_MEETUP_MUTATION(\n    $title: String!\n    $location: String!\n    $date: DateTime!\n    $description: String!\n  ) {\n    createMeetup(\n      title: $title\n      location: $location\n      date: $date\n      description: $description\n    ) {\n      id\n      title\n      date\n      location\n      organizer {\n        name\n      }\n\n      attendees {\n        id\n      }\n    }\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

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
var CREATE_MEETUP_MUTATION = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject3());

/***/ })

})
//# sourceMappingURL=signup.js.d46e9052da5e0e48b09c.hot-update.js.map