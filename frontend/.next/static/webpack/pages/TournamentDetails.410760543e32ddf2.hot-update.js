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

/***/ "./src/components/molecules/GroupDetails.jsx":
/*!***************************************************!*\
  !*** ./src/components/molecules/GroupDetails.jsx ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _atoms_ClickableList__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../atoms/ClickableList */ \"./src/components/atoms/ClickableList.jsx\");\n/* harmony import */ var _atoms_GroupTable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../atoms/GroupTable */ \"./src/components/atoms/GroupTable.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\jpsal\\\\OneDrive\\\\Documentos\\\\Proyectos\\\\IA Bootcamp\\\\AI4Devs-finalproject-JPSC\\\\frontend\\\\src\\\\components\\\\molecules\\\\GroupDetails.jsx\",\n  _this = undefined;\n\n\n\n\nvar GroupsList = function GroupsList() {\n  var groups = Array.from({\n    length: 16\n  }, function (_, index) {\n    return {\n      groupName: \"Group \".concat(index + 1),\n      additionalText1: \"Additional Info 1 for Group \".concat(index + 1),\n      additionalText2: \"Additional Info 2 for Group \".concat(index + 1)\n    };\n  });\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_atoms_ClickableList__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      title: \"Groups\",\n      items: groups.map(function (group) {\n        return group.groupName;\n      }),\n      onItemClick: function onItemClick() {} // No action needed on click\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 13\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"group-details\",\n      children: groups.map(function (group, index) {\n        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n            children: group.groupName\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 22,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: group.additionalText1\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 23,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n            children: group.additionalText2\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 24,\n            columnNumber: 25\n          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_atoms_GroupTable__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 25,\n            columnNumber: 25\n          }, _this), \" \"]\n        }, index, true, {\n          fileName: _jsxFileName,\n          lineNumber: 21,\n          columnNumber: 21\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 13\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 13,\n    columnNumber: 9\n  }, _this);\n};\n_c = GroupsList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (GroupsList);\nvar _c;\n$RefreshReg$(_c, \"GroupsList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9tb2xlY3VsZXMvR3JvdXBEZXRhaWxzLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBMEI7QUFDeUI7QUFDTjtBQUFBO0FBRTdDLElBQU1LLFVBQVUsR0FBRyxTQUFiQSxVQUFVQSxDQUFBLEVBQVM7RUFDckIsSUFBTUMsTUFBTSxHQUFHQyxLQUFLLENBQUNDLElBQUksQ0FBQztJQUFFQyxNQUFNLEVBQUU7RUFBRyxDQUFDLEVBQUUsVUFBQ0MsQ0FBQyxFQUFFQyxLQUFLO0lBQUEsT0FBTTtNQUNyREMsU0FBUyxXQUFBQyxNQUFBLENBQVdGLEtBQUssR0FBRyxDQUFDLENBQUU7TUFDL0JHLGVBQWUsaUNBQUFELE1BQUEsQ0FBaUNGLEtBQUssR0FBRyxDQUFDLENBQUU7TUFDM0RJLGVBQWUsaUNBQUFGLE1BQUEsQ0FBaUNGLEtBQUssR0FBRyxDQUFDO0lBQzdELENBQUM7RUFBQSxDQUFDLENBQUM7RUFFSCxvQkFDSVAsNkRBQUE7SUFBQVksUUFBQSxnQkFDSVosNkRBQUEsQ0FBQ0gsNERBQWE7TUFDVmdCLEtBQUssRUFBQyxRQUFRO01BQ2RDLEtBQUssRUFBRVosTUFBTSxDQUFDYSxHQUFHLENBQUMsVUFBQUMsS0FBSztRQUFBLE9BQUlBLEtBQUssQ0FBQ1IsU0FBUztNQUFBLEVBQUU7TUFDNUNTLFdBQVcsRUFBRSxTQUFBQSxZQUFBLEVBQU0sQ0FBQyxDQUFFLENBQUM7SUFBQTtNQUFBQyxRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDMUIsQ0FBQyxlQUNGdEIsNkRBQUE7TUFBS3VCLFNBQVMsRUFBQyxlQUFlO01BQUFYLFFBQUEsRUFDekJWLE1BQU0sQ0FBQ2EsR0FBRyxDQUFDLFVBQUNDLEtBQUssRUFBRVQsS0FBSztRQUFBLG9CQUNyQlAsNkRBQUE7VUFBQVksUUFBQSxnQkFDSVosNkRBQUE7WUFBQVksUUFBQSxFQUFLSSxLQUFLLENBQUNSO1VBQVM7WUFBQVUsUUFBQSxFQUFBQyxZQUFBO1lBQUFDLFVBQUE7WUFBQUMsWUFBQTtVQUFBLEdBQUFDLEtBQUssQ0FBQyxlQUMxQnRCLDZEQUFBO1lBQUFZLFFBQUEsRUFBSUksS0FBSyxDQUFDTjtVQUFlO1lBQUFRLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFJLENBQUMsZUFDOUJ0Qiw2REFBQTtZQUFBWSxRQUFBLEVBQUlJLEtBQUssQ0FBQ0w7VUFBZTtZQUFBTyxRQUFBLEVBQUFDLFlBQUE7WUFBQUMsVUFBQTtZQUFBQyxZQUFBO1VBQUEsR0FBQUMsS0FBSSxDQUFDLGVBQzlCdEIsNkRBQUEsQ0FBQ0YseURBQVU7WUFBQW9CLFFBQUEsRUFBQUMsWUFBQTtZQUFBQyxVQUFBO1lBQUFDLFlBQUE7VUFBQSxHQUFBQyxLQUFFLENBQUMsS0FBQztRQUFBLEdBSlRmLEtBQUs7VUFBQVcsUUFBQSxFQUFBQyxZQUFBO1VBQUFDLFVBQUE7VUFBQUMsWUFBQTtRQUFBLEdBQUFDLEtBS1YsQ0FBQztNQUFBLENBQ1Q7SUFBQztNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDRCxDQUFDO0VBQUE7SUFBQUosUUFBQSxFQUFBQyxZQUFBO0lBQUFDLFVBQUE7SUFBQUMsWUFBQTtFQUFBLEdBQUFDLEtBQ0wsQ0FBQztBQUVkLENBQUM7QUFBQ0UsRUFBQSxHQTFCSXZCLFVBQVU7QUE0QmhCLCtEQUFlQSxVQUFVLEVBQUM7QUFBQSxJQUFBdUIsRUFBQTtBQUFBQyxZQUFBLENBQUFELEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbW9sZWN1bGVzL0dyb3VwRGV0YWlscy5qc3g/NmRiNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgQ2xpY2thYmxlTGlzdCBmcm9tICcuLi9hdG9tcy9DbGlja2FibGVMaXN0JztcclxuaW1wb3J0IEdyb3VwVGFibGUgZnJvbSAnLi4vYXRvbXMvR3JvdXBUYWJsZSc7XHJcblxyXG5jb25zdCBHcm91cHNMaXN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgZ3JvdXBzID0gQXJyYXkuZnJvbSh7IGxlbmd0aDogMTYgfSwgKF8sIGluZGV4KSA9PiAoe1xyXG4gICAgICAgIGdyb3VwTmFtZTogYEdyb3VwICR7aW5kZXggKyAxfWAsXHJcbiAgICAgICAgYWRkaXRpb25hbFRleHQxOiBgQWRkaXRpb25hbCBJbmZvIDEgZm9yIEdyb3VwICR7aW5kZXggKyAxfWAsXHJcbiAgICAgICAgYWRkaXRpb25hbFRleHQyOiBgQWRkaXRpb25hbCBJbmZvIDIgZm9yIEdyb3VwICR7aW5kZXggKyAxfWAsXHJcbiAgICB9KSk7XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8Q2xpY2thYmxlTGlzdFxyXG4gICAgICAgICAgICAgICAgdGl0bGU9XCJHcm91cHNcIlxyXG4gICAgICAgICAgICAgICAgaXRlbXM9e2dyb3Vwcy5tYXAoZ3JvdXAgPT4gZ3JvdXAuZ3JvdXBOYW1lKX1cclxuICAgICAgICAgICAgICAgIG9uSXRlbUNsaWNrPXsoKSA9PiB7fX0gLy8gTm8gYWN0aW9uIG5lZWRlZCBvbiBjbGlja1xyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImdyb3VwLWRldGFpbHNcIj5cclxuICAgICAgICAgICAgICAgIHtncm91cHMubWFwKChncm91cCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDM+e2dyb3VwLmdyb3VwTmFtZX08L2gzPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8cD57Z3JvdXAuYWRkaXRpb25hbFRleHQxfTwvcD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHA+e2dyb3VwLmFkZGl0aW9uYWxUZXh0Mn08L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxHcm91cFRhYmxlIC8+IHsvKiBBbHdheXMgZGlzcGxheSBHcm91cFRhYmxlIGZvciBlYWNoIGdyb3VwICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdyb3Vwc0xpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsIkNsaWNrYWJsZUxpc3QiLCJHcm91cFRhYmxlIiwianN4REVWIiwiX2pzeERFViIsIkdyb3Vwc0xpc3QiLCJncm91cHMiLCJBcnJheSIsImZyb20iLCJsZW5ndGgiLCJfIiwiaW5kZXgiLCJncm91cE5hbWUiLCJjb25jYXQiLCJhZGRpdGlvbmFsVGV4dDEiLCJhZGRpdGlvbmFsVGV4dDIiLCJjaGlsZHJlbiIsInRpdGxlIiwiaXRlbXMiLCJtYXAiLCJncm91cCIsIm9uSXRlbUNsaWNrIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJjbGFzc05hbWUiLCJfYyIsIiRSZWZyZXNoUmVnJCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/molecules/GroupDetails.jsx\n"));

/***/ }),

/***/ "./src/pages/TournamentDetails.jsx":
/*!*****************************************!*\
  !*** ./src/pages/TournamentDetails.jsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_atoms_List__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/atoms/List */ \"./src/components/atoms/List.jsx\");\n/* harmony import */ var _components_molecules_GroupDetails__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/molecules/GroupDetails */ \"./src/components/molecules/GroupDetails.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);\nvar _jsxFileName = \"C:\\\\Users\\\\jpsal\\\\OneDrive\\\\Documentos\\\\Proyectos\\\\IA Bootcamp\\\\AI4Devs-finalproject-JPSC\\\\frontend\\\\src\\\\pages\\\\TournamentDetails.jsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\n\nvar TournamentDetails = function TournamentDetails() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"tab1\"),\n    activeTab = _useState[0],\n    setActiveTab = _useState[1];\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([\"P1\", \"P2\", \"P3\"]),\n    playerList = _useState2[0],\n    setPlayerList = _useState2[1];\n  var handleTabClick = function handleTabClick(tab) {\n    setActiveTab(tab);\n  };\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h1\", {\n      children: \"Tournament details\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h2\", {\n      children: \"Subtitle\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"p\", {\n      children: \"Date: \"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"tabs\",\n      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handleTabClick(\"tab1\");\n        },\n        className: activeTab === \"tab1\" ? \"active\" : \"\",\n        children: \"Groups\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 20,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handleTabClick(\"tab2\");\n        },\n        className: activeTab === \"tab2\" ? \"active\" : \"\",\n        children: \"Brackets\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 26,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"button\", {\n        onClick: function onClick() {\n          return handleTabClick(\"tab3\");\n        },\n        className: activeTab === \"tab3\" ? \"active\" : \"\",\n        children: \"Players\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 32,\n        columnNumber: 9\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 19,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"div\", {\n      className: \"tab-content\",\n      children: [activeTab === \"tab1\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_molecules_GroupDetails__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 41,\n        columnNumber: 34\n      }, _this), activeTab === \"tab2\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(\"h3\", {\n        children: \"Content for Tab 2\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 42,\n        columnNumber: 34\n      }, _this), activeTab === \"tab3\" && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_atoms_List__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n        title: \"Players\",\n        items: playerList\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 34\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 5\n  }, _this);\n};\n_s(TournamentDetails, \"GgDQ2kf3yrqEF0n7AOgNKFTJGTc=\");\n_c = TournamentDetails;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TournamentDetails);\nvar _c;\n$RefreshReg$(_c, \"TournamentDetails\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFJLENBQUMsRUFDbERaLFNBQVMsS0FBSyxNQUFNLGlCQUFJSiw2REFBQSxDQUFDTCw4REFBSTtRQUFDd0IsS0FBSyxFQUFFLFNBQVU7UUFBQ0MsS0FBSyxFQUFFYjtNQUFXO1FBQUFLLFFBQUEsRUFBQUMsWUFBQTtRQUFBQyxVQUFBO1FBQUFDLFlBQUE7TUFBQSxHQUFBQyxLQUFDLENBQUM7SUFBQTtNQUFBSixRQUFBLEVBQUFDLFlBQUE7TUFBQUMsVUFBQTtNQUFBQyxZQUFBO0lBQUEsR0FBQUMsS0FDbEUsQ0FBQztFQUFBO0lBQUFKLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNILENBQUM7QUFFVixDQUFDO0FBQUNkLEVBQUEsQ0ExQ0lELGlCQUFpQjtBQUFBb0IsRUFBQSxHQUFqQnBCLGlCQUFpQjtBQTRDdkIsK0RBQWVBLGlCQUFpQixFQUFDO0FBQUEsSUFBQW9CLEVBQUE7QUFBQUMsWUFBQSxDQUFBRCxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9Ub3VybmFtZW50RGV0YWlscy5qc3g/NmIwNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2F0b21zL0xpc3RcIjtcclxuaW1wb3J0IEdyb3Vwc0xpc3QgZnJvbSBcIkAvY29tcG9uZW50cy9tb2xlY3VsZXMvR3JvdXBEZXRhaWxzXCI7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgVG91cm5hbWVudERldGFpbHMgPSAoKSA9PiB7XHJcbiAgY29uc3QgW2FjdGl2ZVRhYiwgc2V0QWN0aXZlVGFiXSA9IHVzZVN0YXRlKFwidGFiMVwiKTtcclxuICBjb25zdCBbcGxheWVyTGlzdCwgc2V0UGxheWVyTGlzdF0gPSB1c2VTdGF0ZShbXCJQMVwiLCBcIlAyXCIsIFwiUDNcIl0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVUYWJDbGljayA9ICh0YWIpID0+IHtcclxuICAgIHNldEFjdGl2ZVRhYih0YWIpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8aDE+VG91cm5hbWVudCBkZXRhaWxzPC9oMT5cclxuICAgICAgPGgyPlN1YnRpdGxlPC9oMj5cclxuICAgICAgPHA+RGF0ZTogPC9wPlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJzXCI+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soXCJ0YWIxXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09IFwidGFiMVwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgR3JvdXBzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPGJ1dHRvblxyXG4gICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlVGFiQ2xpY2soXCJ0YWIyXCIpfVxyXG4gICAgICAgICAgY2xhc3NOYW1lPXthY3RpdmVUYWIgPT09IFwidGFiMlwiID8gXCJhY3RpdmVcIiA6IFwiXCJ9XHJcbiAgICAgICAgPlxyXG4gICAgICAgICAgQnJhY2tldHNcclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVUYWJDbGljayhcInRhYjNcIil9XHJcbiAgICAgICAgICBjbGFzc05hbWU9e2FjdGl2ZVRhYiA9PT0gXCJ0YWIzXCIgPyBcImFjdGl2ZVwiIDogXCJcIn1cclxuICAgICAgICA+XHJcbiAgICAgICAgICBQbGF5ZXJzXHJcbiAgICAgICAgPC9idXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWItY29udGVudFwiPlxyXG4gICAgICAgIHthY3RpdmVUYWIgPT09IFwidGFiMVwiICYmIDxHcm91cHNMaXN0Lz59XHJcbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJ0YWIyXCIgJiYgPGgzPkNvbnRlbnQgZm9yIFRhYiAyPC9oMz59XHJcbiAgICAgICAge2FjdGl2ZVRhYiA9PT0gXCJ0YWIzXCIgJiYgPExpc3QgdGl0bGU9e1wiUGxheWVyc1wifSBpdGVtcz17cGxheWVyTGlzdH0vPn1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG91cm5hbWVudERldGFpbHM7XHJcbiJdLCJuYW1lcyI6WyJMaXN0IiwiR3JvdXBzTGlzdCIsIlJlYWN0IiwidXNlU3RhdGUiLCJqc3hERVYiLCJfanN4REVWIiwiVG91cm5hbWVudERldGFpbHMiLCJfcyIsIl91c2VTdGF0ZSIsImFjdGl2ZVRhYiIsInNldEFjdGl2ZVRhYiIsIl91c2VTdGF0ZTIiLCJwbGF5ZXJMaXN0Iiwic2V0UGxheWVyTGlzdCIsImhhbmRsZVRhYkNsaWNrIiwidGFiIiwiY2hpbGRyZW4iLCJmaWxlTmFtZSIsIl9qc3hGaWxlTmFtZSIsImxpbmVOdW1iZXIiLCJjb2x1bW5OdW1iZXIiLCJfdGhpcyIsImNsYXNzTmFtZSIsIm9uQ2xpY2siLCJ0aXRsZSIsIml0ZW1zIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/TournamentDetails.jsx\n"));

/***/ })

});