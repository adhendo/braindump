webpackHotUpdate("static/development/pages/saved-stuff.js",{

/***/ "./components/youtubeAltLoader.js":
/*!****************************************!*\
  !*** ./components/youtubeAltLoader.js ***!
  \****************************************/
/*! exports provided: GET_YOUTUBE_VIDEOS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_YOUTUBE_VIDEOS", function() { return GET_YOUTUBE_VIDEOS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/main.module.css */ "./styles/main.module.css");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/adamhendrickson/blogboi/components/youtubeAltLoader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery {\n\t\tyoutube {\n\t\t\tid\n\t\t\tvideoTitle\n\t\t\tvideoURL\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_YOUTUBE_VIDEOS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

function YoutubeAltLoader() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_YOUTUBE_VIDEOS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return "";
  if (error) return "Error! ".concat(error.message);
  return __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.youtubeScrollr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.youtube.map(function (youtube) {
    return __jsx("iframe", {
      width: "400",
      height: "235",
      src: youtube.videoURL,
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    });
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeAltLoader);

/***/ }),

/***/ "./components/youtubeLoader.js":
false,

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
/* harmony import */ var _components_header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/header */ "./components/header.js");
/* harmony import */ var _components_instaLoader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/instaLoader */ "./components/instaLoader.js");
/* harmony import */ var _components_redditLoader__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/redditLoader */ "./components/redditLoader.js");
/* harmony import */ var _components_youtubeAltLoader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/youtubeAltLoader */ "./components/youtubeAltLoader.js");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/main.module.css */ "./styles/main.module.css");
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
      overflow: "hidden"
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
  }, __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.savedComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_instaLoader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  })), __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.savedComponent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx(_components_redditLoader__WEBPACK_IMPORTED_MODULE_6__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  })), __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_8___default.a.savedComponentAlt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx(_components_youtubeAltLoader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })))));
}

/* harmony default export */ __webpack_exports__["default"] = (Saved);

/***/ })

})
//# sourceMappingURL=saved-stuff.js.b79fad924183a1718173.hot-update.js.map