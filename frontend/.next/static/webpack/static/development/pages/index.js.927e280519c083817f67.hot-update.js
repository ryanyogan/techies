webpackHotUpdate("static/development/pages/index.js",{

/***/ "./graphql/queries.js":
/*!****************************!*\
  !*** ./graphql/queries.js ***!
  \****************************/
/*! exports provided: MEETUPS_QUERY, ME_QUERY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MEETUPS_QUERY", function() { return MEETUPS_QUERY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ME_QUERY", function() { return ME_QUERY; });
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  query ME_QUERY {\n    me {\n      id\n      name\n      myMeetups {\n        id\n        title\n        date\n        location\n        attendees {\n          id\n        }\n      }\n      meetupsAttending {\n        id\n        title\n        location\n        organizer {\n          name\n        }\n        attendees {\n          id\n        }\n      }\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  query MEETUPS_QUERY {\n    meetups {\n      id\n      title\n      date\n      location\n      organizer {\n        name\n      }\n      attendees {\n        id\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var MEETUPS_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject());
var ME_QUERY = graphql_tag__WEBPACK_IMPORTED_MODULE_0___default()(_templateObject2());

/***/ })

})
//# sourceMappingURL=index.js.927e280519c083817f67.hot-update.js.map