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

/***/ "./src/components/atoms/TabHolder.jsx":
/*!********************************************!*\
  !*** ./src/components/atoms/TabHolder.jsx ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"C:\\\\Users\\\\jpsal\\\\OneDrive\\\\Documentos\\\\Proyectos\\\\IA Bootcamp\\\\AI4Devs-finalproject-JPSC\\\\frontend\\\\src\\\\components\\\\atoms\\\\TabHolder.jsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\nvar TabHolder = function TabHolder(_ref) {\n  _s();\n  var tabs = _ref.tabs;\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),\n    activeTab = _useState[0],\n    setActiveTab = _useState[1];\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"tabs\",\n      children: [\" \", tabs.map(function (tab, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"button\", {\n          onClick: function onClick() {\n            return setActiveTab(index);\n          },\n          className: \"button \".concat(activeTab === index ? 'active' : '') // Updated class for buttons\n          ,\n          children: tab.label\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 10,\n          columnNumber: 21\n        }, _this);\n      })]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n      className: \"tab-content\",\n      children: [\" \", tabs[activeTab].content(tabs[activeTab].args), \" \"]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 9\n  }, _this);\n};\n_s(TabHolder, \"9RTnV4k8xQ8Z7mmUeyiKoXdA+A8=\");\n_c = TabHolder;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TabHolder);\nvar _c;\n$RefreshReg$(_c, \"TabHolder\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9hdG9tcy9UYWJIb2xkZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdDO0FBQUE7QUFFeEMsSUFBTUksU0FBUyxHQUFHLFNBQVpBLFNBQVNBLENBQUFDLElBQUEsRUFBaUI7RUFBQUMsRUFBQTtFQUFBLElBQVhDLElBQUksR0FBQUYsSUFBQSxDQUFKRSxJQUFJO0VBQ3JCLElBQUFDLFNBQUEsR0FBa0NQLCtDQUFRLENBQUMsQ0FBQyxDQUFDO0lBQXRDUSxTQUFTLEdBQUFELFNBQUE7SUFBRUUsWUFBWSxHQUFBRixTQUFBO0VBRTlCLG9CQUNJTCw2REFBQTtJQUFBUSxRQUFBLGdCQUNJUiw2REFBQTtNQUFLUyxTQUFTLEVBQUMsTUFBTTtNQUFBRCxRQUFBLEdBQUMsR0FBQyxFQUNsQkosSUFBSSxDQUFDTSxHQUFHLENBQUMsVUFBQ0MsR0FBRyxFQUFFQyxLQUFLO1FBQUEsb0JBQ2pCWiw2REFBQTtVQUVJYSxPQUFPLEVBQUUsU0FBQUEsUUFBQTtZQUFBLE9BQU1OLFlBQVksQ0FBQ0ssS0FBSyxDQUFDO1VBQUEsQ0FBQztVQUNuQ0gsU0FBUyxZQUFBSyxNQUFBLENBQVlSLFNBQVMsS0FBS00sS0FBSyxHQUFHLFFBQVEsR0FBRyxFQUFFLENBQUcsQ0FBQztVQUFBO1VBQUFKLFFBQUEsRUFFM0RHLEdBQUcsQ0FBQ0k7UUFBSyxHQUpMSCxLQUFLO1VBQUFJLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBQyxLQUtOLENBQUM7TUFBQSxDQUNaLENBQUM7SUFBQTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRCxDQUFDLGVBQ05wQiw2REFBQTtNQUFLUyxTQUFTLEVBQUMsYUFBYTtNQUFBRCxRQUFBLEdBQUMsR0FBQyxFQUN6QkosSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQ2UsT0FBTyxDQUFDakIsSUFBSSxDQUFDRSxTQUFTLENBQUMsQ0FBQ2dCLElBQUksQ0FBQyxFQUFDLEdBQUM7SUFBQTtNQUFBTixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDL0MsQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNMLENBQUM7QUFFZCxDQUFDO0FBQUNqQixFQUFBLENBckJJRixTQUFTO0FBQUFzQixFQUFBLEdBQVR0QixTQUFTO0FBdUJmLCtEQUFlQSxTQUFTLEVBQUM7QUFBQSxJQUFBc0IsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvYXRvbXMvVGFiSG9sZGVyLmpzeD83ZjRmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IFRhYkhvbGRlciA9ICh7IHRhYnMgfSkgPT4ge1xyXG4gICAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKDApO1xyXG5cclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+IHsvKiBVcGRhdGVkIGNsYXNzIGZvciB0YWIgbGlzdCAqL31cclxuICAgICAgICAgICAgICAgIHt0YWJzLm1hcCgodGFiLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17aW5kZXh9IFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBzZXRBY3RpdmVUYWIoaW5kZXgpfSBcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgYnV0dG9uICR7YWN0aXZlVGFiID09PSBpbmRleCA/ICdhY3RpdmUnIDogJyd9YH0gLy8gVXBkYXRlZCBjbGFzcyBmb3IgYnV0dG9uc1xyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3RhYi5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPiB7LyogVXBkYXRlZCBjbGFzcyBmb3IgdGFiIGNvbnRlbnQgKi99XHJcbiAgICAgICAgICAgICAgICB7dGFic1thY3RpdmVUYWJdLmNvbnRlbnQodGFic1thY3RpdmVUYWJdLmFyZ3MpfSB7LyogVXNlIGFyZ3MgZnJvbSB0aGUgdGFiIG9iamVjdCAqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVGFiSG9sZGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImpzeERFViIsIl9qc3hERVYiLCJUYWJIb2xkZXIiLCJfcmVmIiwiX3MiLCJ0YWJzIiwiX3VzZVN0YXRlIiwiYWN0aXZlVGFiIiwic2V0QWN0aXZlVGFiIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJtYXAiLCJ0YWIiLCJpbmRleCIsIm9uQ2xpY2siLCJjb25jYXQiLCJsYWJlbCIsImZpbGVOYW1lIiwiX2pzeEZpbGVOYW1lIiwibGluZU51bWJlciIsImNvbHVtbk51bWJlciIsIl90aGlzIiwiY29udGVudCIsImFyZ3MiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/atoms/TabHolder.jsx\n"));

/***/ })

});