webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/youtubeMeLoader.js":
/*!***************************************!*\
  !*** ./components/youtubeMeLoader.js ***!
  \***************************************/
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

var _jsxFileName = "/Users/adamhendrickson/blogboi/components/youtubeMeLoader.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\tquery {\n\t\tyoutubeMe {\n\t\t\tid\n\t\t\tvideoTitle\n\t\t\tvideoURL\n\t\t}\n\t}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}




var GET_YOUTUBE_VIDEOS = graphql_tag__WEBPACK_IMPORTED_MODULE_3___default()(_templateObject());

function YoutubeMeLoader() {
  var _useQuery = Object(_apollo_react_hooks__WEBPACK_IMPORTED_MODULE_2__["useQuery"])(GET_YOUTUBE_VIDEOS),
      loading = _useQuery.loading,
      error = _useQuery.error,
      data = _useQuery.data;

  if (loading) return "";
  if (error) return "Error! ".concat(error.message);
  return __jsx("div", {
    className: _styles_main_module_css__WEBPACK_IMPORTED_MODULE_4___default.a.youtubeMeScrollr,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, data.youtubeMe.map(function (youtubeMe, index) {
    return __jsx("div", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("iframe", {
      width: "650",
      height: "275",
      src: youtubeMe.videoURL,
      frameborder: "0",
      allow: "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",
      allowfullscreen: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }));
  }));
}

/* harmony default export */ __webpack_exports__["default"] = (YoutubeMeLoader);

/***/ })

})
//# sourceMappingURL=index.js.620ca671a0859ca6fa15.hot-update.js.map