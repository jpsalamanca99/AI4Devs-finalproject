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

/***/ "./src/components/molecules/GroupsList.jsx":
/*!*************************************************!*\
  !*** ./src/components/molecules/GroupsList.jsx ***!
  \*************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_ClickableList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/ClickableList */ \"./src/components/atoms/ClickableList.jsx\");\n/* harmony import */ var _atoms_GroupTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/GroupTable */ \"./src/components/atoms/GroupTable.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\jpsal\\\\OneDrive\\\\Documentos\\\\Proyectos\\\\IA Bootcamp\\\\AI4Devs-finalproject-JPSC\\\\frontend\\\\src\\\\components\\\\molecules\\\\GroupsList.jsx\",\n  _this = undefined;\n\n\n\n\nvar GroupsList = function GroupsList() {\n  var groups = Array.from({\n    length: 16\n  }, function (_, index) {\n    return {\n      groupName: \"Group \".concat(index + 1),\n      additionalText1: \"Additional Info 1 for Group \".concat(index + 1),\n      additionalText2: \"Additional Info 2 for Group \".concat(index + 1)\n    };\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_atoms_ClickableList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Groups\",\n      items: groups.map(function (group) {\n        return group.groupName;\n      }),\n      onItemClick: function onItemClick() {} // No action needed on click\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"group-details\",\n      children: groups.map(function (group, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n            children: group.groupName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: group.additionalText1\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: group.additionalText2\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_atoms_GroupTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, _this), \" \"]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n_c = GroupsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupsList);\nvar _c;\n$RefreshReg$(_c, \"GroupsList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvR3JvdXBzTGlzdC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQTBCO0FBQ3lCO0FBQ047QUFBQTtBQUU3QyxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO0VBQ3JCLElBQU1DLE1BQU0sR0FBR0MsS0FBSyxDQUFDQyxJQUFJLENBQUM7SUFBRUMsTUFBTSxFQUFFO0VBQUcsQ0FBQyxFQUFFLFVBQUNDLENBQUMsRUFBRUMsS0FBSztJQUFBLE9BQU07TUFDckRDLFNBQVMsV0FBQUMsTUFBQSxDQUFXRixLQUFLLEdBQUcsQ0FBQyxDQUFFO01BQy9CRyxlQUFlLGlDQUFBRCxNQUFBLENBQWlDRixLQUFLLEdBQUcsQ0FBQyxDQUFFO01BQzNESSxlQUFlLGlDQUFBRixNQUFBLENBQWlDRixLQUFLLEdBQUcsQ0FBQztJQUM3RCxDQUFDO0VBQUEsQ0FBQyxDQUFDO0VBRUgsb0JBQ0lQLDZEQUFBO0lBQUFZLFFBQUEsZ0JBQ0laLDZEQUFBLENBQUNILDREQUFhO01BQ1ZnQixLQUFLLEVBQUMsUUFBUTtNQUNkQyxLQUFLLEVBQUVaLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDLFVBQUFDLEtBQUs7UUFBQSxPQUFJQSxLQUFLLENBQUNSLFNBQVM7TUFBQSxFQUFFO01BQzVDUyxXQUFXLEVBQUUsU0FBQUEsWUFBQSxFQUFNLENBQUMsQ0FBRSxDQUFDO0lBQUE7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQzFCLENBQUMsZUFDRnRCLDZEQUFBO01BQUt1QixTQUFTLEVBQUMsZUFBZTtNQUFBWCxRQUFBLEVBQ3pCVixNQUFNLENBQUNhLEdBQUcsQ0FBQyxVQUFDQyxLQUFLLEVBQUVULEtBQUs7UUFBQSxvQkFDckJQLDZEQUFBO1VBQUFZLFFBQUEsZ0JBQ0laLDZEQUFBO1lBQUFZLFFBQUEsRUFBS0ksS0FBSyxDQUFDUjtVQUFTO1lBQUFVLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFLLENBQUMsZUFDMUJ0Qiw2REFBQTtZQUFBWSxRQUFBLEVBQUlJLEtBQUssQ0FBQ047VUFBZTtZQUFBUSxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FBSSxDQUFDLGVBQzlCdEIsNkRBQUE7WUFBQVksUUFBQSxFQUFJSSxLQUFLLENBQUNMO1VBQWU7WUFBQU8sUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLEdBQUFDLEtBQUksQ0FBQyxlQUM5QnRCLDZEQUFBLENBQUNGLHlEQUFVO1lBQUFvQixRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FBRSxDQUFDLEtBQUM7UUFBQSxHQUpUZixLQUFLO1VBQUFXLFFBQUEsRUFBQUMsWUFBQTtVQUFBQyxVQUFBO1VBQUFDLFlBQUE7UUFBQSxHQUFBQyxLQUtWLENBQUM7TUFBQSxDQUNUO0lBQUM7TUFBQUosUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQ0QsQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNMLENBQUM7QUFFZCxDQUFDO0FBQUNFLEVBQUEsR0ExQkl2QixVQUFVO0FBNEJoQiwrREFBZUEsVUFBVSxFQUFDO0FBQUEsSUFBQXVCLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL21vbGVjdWxlcy9Hcm91cHNMaXN0LmpzeD83ZjU5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDbGlja2FibGVMaXN0IGZyb20gJy4uL2F0b21zL0NsaWNrYWJsZUxpc3QnO1xyXG5pbXBvcnQgR3JvdXBUYWJsZSBmcm9tICcuLi9hdG9tcy9Hcm91cFRhYmxlJztcclxuXHJcbmNvbnN0IEdyb3Vwc0xpc3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBncm91cHMgPSBBcnJheS5mcm9tKHsgbGVuZ3RoOiAxNiB9LCAoXywgaW5kZXgpID0+ICh7XHJcbiAgICAgICAgZ3JvdXBOYW1lOiBgR3JvdXAgJHtpbmRleCArIDF9YCxcclxuICAgICAgICBhZGRpdGlvbmFsVGV4dDE6IGBBZGRpdGlvbmFsIEluZm8gMSBmb3IgR3JvdXAgJHtpbmRleCArIDF9YCxcclxuICAgICAgICBhZGRpdGlvbmFsVGV4dDI6IGBBZGRpdGlvbmFsIEluZm8gMiBmb3IgR3JvdXAgJHtpbmRleCArIDF9YCxcclxuICAgIH0pKTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxDbGlja2FibGVMaXN0XHJcbiAgICAgICAgICAgICAgICB0aXRsZT1cIkdyb3Vwc1wiXHJcbiAgICAgICAgICAgICAgICBpdGVtcz17Z3JvdXBzLm1hcChncm91cCA9PiBncm91cC5ncm91cE5hbWUpfVxyXG4gICAgICAgICAgICAgICAgb25JdGVtQ2xpY2s9eygpID0+IHt9fSAvLyBObyBhY3Rpb24gbmVlZGVkIG9uIGNsaWNrXHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JvdXAtZGV0YWlsc1wiPlxyXG4gICAgICAgICAgICAgICAge2dyb3Vwcy5tYXAoKGdyb3VwLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMz57Z3JvdXAuZ3JvdXBOYW1lfTwvaDM+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxwPntncm91cC5hZGRpdGlvbmFsVGV4dDF9PC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z3JvdXAuYWRkaXRpb25hbFRleHQyfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEdyb3VwVGFibGUgLz4gey8qIEFsd2F5cyBkaXNwbGF5IEdyb3VwVGFibGUgZm9yIGVhY2ggZ3JvdXAgKi99XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgR3JvdXBzTGlzdDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwiQ2xpY2thYmxlTGlzdCIsIkdyb3VwVGFibGUiLCJqc3hERVYiLCJfanN4REVWIiwiR3JvdXBzTGlzdCIsImdyb3VwcyIsIkFycmF5IiwiZnJvbSIsImxlbmd0aCIsIl8iLCJpbmRleCIsImdyb3VwTmFtZSIsImNvbmNhdCIsImFkZGl0aW9uYWxUZXh0MSIsImFkZGl0aW9uYWxUZXh0MiIsImNoaWxkcmVuIiwidGl0bGUiLCJpdGVtcyIsIm1hcCIsImdyb3VwIiwib25JdGVtQ2xpY2siLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsImNsYXNzTmFtZSIsIl9jIiwiJFJlZnJlc2hSZWckIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/molecules/GroupsList.jsx\n"));

/***/ })

});