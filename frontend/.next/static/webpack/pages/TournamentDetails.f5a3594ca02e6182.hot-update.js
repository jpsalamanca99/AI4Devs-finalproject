"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/TournamentDetails",{

/***/ "./src/pages/TournamentDetails.jsx":
/*!*****************************************!*\
  !*** ./src/pages/TournamentDetails.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_atoms_StaticList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/atoms/StaticList */ \"./src/components/atoms/StaticList.jsx\");\n/* harmony import */ var _components_atoms_TabHolder__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/atoms/TabHolder */ \"./src/components/atoms/TabHolder.jsx\");\n/* harmony import */ var _components_molecules_GroupDetails__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/molecules/GroupDetails */ \"./src/components/molecules/GroupDetails.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);\nvar _jsxFileName = \"C:\\\\Users\\\\jpsal\\\\OneDrive\\\\Documentos\\\\Proyectos\\\\IA Bootcamp\\\\AI4Devs-finalproject-JPSC\\\\frontend\\\\src\\\\pages\\\\TournamentDetails.jsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\n\nvar TournamentDetails = function TournamentDetails() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\"P1\", \"P2\", \"P3\"]),\n    playerList = _useState[0],\n    setPlayerList = _useState[1];\n  var tabs = [{\n    label: \"Groups\",\n    content: _components_molecules_GroupDetails__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n    args: {\n      table: \"1\",\n      name: \"group 1\"\n    }\n  }, {\n    label: \"Brackets\",\n    content: function content(args) {\n      return \"Brackets\";\n    }\n  }, {\n    label: \"Players\",\n    content: function content(args) {\n      return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_atoms_StaticList__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 14,\n        columnNumber: 26\n      }, _this);\n    },\n    args: {\n      title: \"Players\",\n      items: playerList\n    }\n  }];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h1\", {\n      children: \"Tournament details\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"h2\", {\n      children: \"Subtitle\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(\"p\", {\n      children: \"Date: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_components_atoms_TabHolder__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      tabs: tabs\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 20,\n    columnNumber: 5\n  }, _this);\n};\n_s(TournamentDetails, \"nyEsCoCvlNIbSDVrh85hm5mHZ+8=\");\n_c = TournamentDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TournamentDetails);\nvar _c;\n$RefreshReg$(_c, \"TournamentDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvVG91cm5hbWVudERldGFpbHMuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ0k7QUFDVTtBQUN2QjtBQUFBO0FBRXhDLElBQU1PLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBaUJBLENBQUEsRUFBUztFQUFBQyxFQUFBO0VBQzlCLElBQUFDLFNBQUEsR0FBb0NMLCtDQUFRLENBQUMsQ0FBQyxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQXpETSxVQUFVLEdBQUFELFNBQUE7SUFBRUUsYUFBYSxHQUFBRixTQUFBO0VBRWhDLElBQU1HLElBQUksR0FBRyxDQUNYO0lBQUVDLEtBQUssRUFBRSxRQUFRO0lBQUVDLE9BQU8sRUFBRVosMEVBQVk7SUFBR2EsSUFBSSxFQUFFO01BQUNDLEtBQUssRUFBRSxHQUFHO01BQUVDLElBQUksRUFBRTtJQUFTO0VBQUUsQ0FBQyxFQUNoRjtJQUFFSixLQUFLLEVBQUUsVUFBVTtJQUFFQyxPQUFPLEVBQUUsU0FBQUEsUUFBQ0MsSUFBSTtNQUFBLE9BQUssVUFBVTtJQUFBO0VBQUMsQ0FBQyxFQUNwRDtJQUNFRixLQUFLLEVBQUUsU0FBUztJQUNoQkMsT0FBTyxFQUFFLFNBQUFBLFFBQUNDLElBQUk7TUFBQSxvQkFBS1QsNkRBQUEsQ0FBQ04sb0VBQUk7UUFBQWtCLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFFLENBQUM7SUFBQTtJQUMzQlAsSUFBSSxFQUFFO01BQUVRLEtBQUssRUFBRSxTQUFTO01BQUVDLEtBQUssRUFBRWQ7SUFBVztFQUM5QyxDQUFDLENBQ0Y7RUFFRCxvQkFDRUosNkRBQUE7SUFBQW1CLFFBQUEsZ0JBQ0VuQiw2REFBQTtNQUFBbUIsUUFBQSxFQUFJO0lBQWtCO01BQUFQLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFJLENBQUMsZUFDM0JoQiw2REFBQTtNQUFBbUIsUUFBQSxFQUFJO0lBQVE7TUFBQVAsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQUksQ0FBQyxlQUNqQmhCLDZEQUFBO01BQUFtQixRQUFBLEVBQUc7SUFBTTtNQUFBUCxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FBRyxDQUFDLGVBRWJoQiw2REFBQSxDQUFDTCxtRUFBUztNQUFDVyxJQUFJLEVBQUVBO0lBQUs7TUFBQU0sUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQUUsQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUN0QixDQUFDO0FBRVYsQ0FBQztBQUFDZCxFQUFBLENBdEJJRCxpQkFBaUI7QUFBQW1CLEVBQUEsR0FBakJuQixpQkFBaUI7QUF3QnZCLCtEQUFlQSxpQkFBaUIsRUFBQztBQUFBLElBQUFtQixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvVG91cm5hbWVudERldGFpbHMuanN4PzZiMDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9TdGF0aWNMaXN0XCI7XHJcbmltcG9ydCBUYWJIb2xkZXIgZnJvbSBcIkAvY29tcG9uZW50cy9hdG9tcy9UYWJIb2xkZXJcIjtcclxuaW1wb3J0IEdyb3VwRGV0YWlscyBmcm9tIFwiQC9jb21wb25lbnRzL21vbGVjdWxlcy9Hcm91cERldGFpbHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5jb25zdCBUb3VybmFtZW50RGV0YWlscyA9ICgpID0+IHtcclxuICBjb25zdCBbcGxheWVyTGlzdCwgc2V0UGxheWVyTGlzdF0gPSB1c2VTdGF0ZShbXCJQMVwiLCBcIlAyXCIsIFwiUDNcIl0pO1xyXG5cclxuICBjb25zdCB0YWJzID0gW1xyXG4gICAgeyBsYWJlbDogXCJHcm91cHNcIiwgY29udGVudDogR3JvdXBEZXRhaWxzICwgYXJnczoge3RhYmxlOiBcIjFcIiwgbmFtZTogXCJncm91cCAxXCJ9IH0sXHJcbiAgICB7IGxhYmVsOiBcIkJyYWNrZXRzXCIsIGNvbnRlbnQ6IChhcmdzKSA9PiBcIkJyYWNrZXRzXCIgfSxcclxuICAgIHtcclxuICAgICAgbGFiZWw6IFwiUGxheWVyc1wiLFxyXG4gICAgICBjb250ZW50OiAoYXJncykgPT4gPExpc3QgLz4sXHJcbiAgICAgIGFyZ3M6IHsgdGl0bGU6IFwiUGxheWVyc1wiLCBpdGVtczogcGxheWVyTGlzdCB9LFxyXG4gICAgfSxcclxuICBdO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGgxPlRvdXJuYW1lbnQgZGV0YWlsczwvaDE+XHJcbiAgICAgIDxoMj5TdWJ0aXRsZTwvaDI+XHJcbiAgICAgIDxwPkRhdGU6IDwvcD5cclxuXHJcbiAgICAgIDxUYWJIb2xkZXIgdGFicz17dGFic30gLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBUb3VybmFtZW50RGV0YWlscztcclxuIl0sIm5hbWVzIjpbIkxpc3QiLCJUYWJIb2xkZXIiLCJHcm91cERldGFpbHMiLCJSZWFjdCIsInVzZVN0YXRlIiwianN4REVWIiwiX2pzeERFViIsIlRvdXJuYW1lbnREZXRhaWxzIiwiX3MiLCJfdXNlU3RhdGUiLCJwbGF5ZXJMaXN0Iiwic2V0UGxheWVyTGlzdCIsInRhYnMiLCJsYWJlbCIsImNvbnRlbnQiLCJhcmdzIiwidGFibGUiLCJuYW1lIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJ0aXRsZSIsIml0ZW1zIiwiY2hpbGRyZW4iLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/TournamentDetails.jsx\n"));

/***/ })

});