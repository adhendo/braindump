webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/components/redditLoader.js":
/*!******************************************!*\
  !*** ./pages/components/redditLoader.js ***!
  \******************************************/
/*! exports provided: GET_SAVED_REDDITS, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_SAVED_REDDITS", function() { return GET_SAVED_REDDITS; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @apollo/react-hooks */ "./node_modules/@apollo/react-hooks/lib/react-hooks.esm.js");
/* harmony import */ var _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @fortawesome/free-solid-svg-icons */ "./node_modules/@fortawesome/free-solid-svg-icons/index.es.js");
/* harmony import */ var _fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/react-fontawesome */ "./node_modules/@fortawesome/react-fontawesome/index.es.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! graphql-tag */ "./node_modules/graphql-tag/src/index.js");
/* harmony import */ var graphql_tag__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(graphql_tag__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/main.module.css */ "./pages/styles/main.module.css");
/* harmony import */ var _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "/Users/adamhendrickson/blogboi/pages/components/redditLoader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery {\n\t\treddit {\n\t\t\tid\n\t\t\ttitle\n\t\t\turl\n\t\t\tsubreddit\n\t\t\tsubreddit_link\n\t\t\tthumbnail\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GET_SAVED_REDDITS = graphql_tag__WEBPACK_IMPORTED_MODULE_5___default()(_templateObject());

function RedditLoader() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_SAVED_REDDITS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return "";
  if (error) return "Error! ".concat(error.message);
  return __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.redditScrollr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, data.reddit.map(function (reddit) {
    return __jsx("a", {
      href: reddit.url,
      className: "".concat(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.redditContainer, " ").concat(_styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linkParent),
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, reddit.thumbnail ? __jsx("img", {
      className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.thumbnail,
      src: reddit.thumbnail,
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }) : __jsx("div", {
      className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconContainer,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx(_fortawesome_react_fontawesome__WEBPACK_IMPORTED_MODULE_4__["FontAwesomeIcon"], {
      icon: _fortawesome_free_solid_svg_icons__WEBPACK_IMPORTED_MODULE_3__["faKiwiBird"],
      className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.iconNail,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    })), __jsx("div", {
      className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.linkThing,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, reddit.title)), __jsx("div", {
      className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subLinkThing,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx("a", {
      className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_6___default.a.subLink,
      href: reddit.subreddit_link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, reddit.subreddit))));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (RedditLoader);

/***/ })

})
//# sourceMappingURL=index.js.3dc0d85b291d251114cc.hot-update.js.map