webpackHotUpdate("static/development/pages/saved-stuff.js",{

/***/ "./pages/saved-stuff.js":
/*!******************************!*\
  !*** ./pages/saved-stuff.js ***!
  \******************************/
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
/* harmony import */ var _components_instaLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/instaLoader */ "./pages/components/instaLoader.js");
/* harmony import */ var _components_redditLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/redditLoader */ "./pages/components/redditLoader.js");
/* harmony import */ var _components_youtubeLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/youtubeLoader */ "./pages/components/youtubeLoader.js");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./styles/main.module.css */ "./pages/styles/main.module.css");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_8__);
var _jsxFileName = "/Users/adamhendrickson/blogboi/pages/saved-stuff.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









function Saved() {
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
      lineNumber: 26
    },
    __self: this
  }, __jsx("div", {
    style: {
      height: "100vh",
      overflow: "scroll"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.header,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, __jsx(_components_header__WEBPACK_IMPORTED_MODULE_4__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  })), __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.mainAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, __jsx(_components_instaLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }), __jsx(_components_redditLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }), __jsx(_components_youtubeLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }))));
}

/* harmony default export */ __webpack_exports__["default"] = (Saved);

/***/ })

})
//# sourceMappingURL=saved-stuff.js.0cecd827b41ae8f59bc7.hot-update.js.map