webpackHotUpdate("static/development/pages/from-me.js",{

/***/ "./pages/from-me.js":
/*!**************************!*\
  !*** ./pages/from-me.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var apollo_boost__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! apollo-boost */ "./node_modules/apollo-boost/lib/bundle.esm.js");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cross-fetch/polyfill */ "./node_modules/cross-fetch/dist/browser-polyfill.js");
/* harmony import */ var cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cross_fetch_polyfill__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header */ "./pages/components/header.js");
/* harmony import */ var _components_vscoLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/vscoLoader */ "./pages/components/vscoLoader.js");
/* harmony import */ var _components_youtubeMeLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/youtubeMeLoader */ "./pages/components/youtubeMeLoader.js");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./styles/main.module.css */ "./pages/styles/main.module.css");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_7__);
var _jsxFileName = "/Users/adamhendrickson/blogboi/pages/from-me.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;








function FromMe() {
  var httpLink = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["HttpLink"]({
    uri: "https://braindumpp.herokuapp.com/v1/graphql",
    options: {
      headers: {
        "x-hasura-admin-secret": "raiders20"
      }
    }
  });
  var client = new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["ApolloClient"]({
    link: httpLink,
    cache: new apollo_boost__WEBPACK_IMPORTED_MODULE_2__["InMemoryCache"]()
  });
  return __jsx(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_1__["ApolloProvider"], {
    client: client,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: "100vh",
      overflow: "hidden"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  })), __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_7___default.a.mainAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, __jsx(_components_vscoLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }), __jsx(_components_youtubeMeLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (FromMe);

/***/ })

})
//# sourceMappingURL=from-me.js.ced5388ab880dcba9a41.hot-update.js.map