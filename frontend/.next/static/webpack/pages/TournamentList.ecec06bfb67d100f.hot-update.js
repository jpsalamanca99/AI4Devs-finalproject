"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/TournamentList",{

/***/ "./src/pages/TournamentList.jsx":
/*!**************************************!*\
  !*** ./src/pages/TournamentList.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_ClickableList_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/ClickableList.jsx */ \"./src/components/ClickableList.jsx\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);\nvar _jsxFileName = \"C:\\\\Users\\\\jpsal\\\\OneDrive\\\\Documentos\\\\Proyectos\\\\IA Bootcamp\\\\AI4Devs-finalproject-JPSC\\\\frontend\\\\src\\\\pages\\\\TournamentList.jsx\",\n  _this = undefined,\n  _s = $RefreshSig$();\n\n\n\nvar TournamentList = function TournamentList() {\n  _s();\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),\n    items = _useState[0],\n    setItems = _useState[1];\n  var _useState2 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(true),\n    loading = _useState2[0],\n    setLoading = _useState2[1];\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),\n    error = _useState3[0],\n    setError = _useState3[1];\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    // const fetchItems = async () => {\n    //     try {\n    //         const response = await fetch('https://api.example.com/items'); // Replace with your API endpoint\n    //         if (!response.ok) {\n    //             throw new Error('Network response was not ok');\n    //         }\n    //         const data = await response.json();\n    //         setItems(data); // Assuming the API returns an array of items\n    //     } catch (error) {\n    //         setError(error.message);\n    //     } finally {\n    //         setLoading(false);\n    //     }\n    // };\n    var fetchItems = function fetchItems() {\n      return [\"Miercoles\", \"Viernes\", \"Ranking\"];\n    };\n    fetchItems();\n  }, []);\n  var handleItemClick = function handleItemClick(item) {\n    alert(\"You clicked on \".concat(item));\n  };\n  if (loading) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: \"Loading...\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 14\n    }, _this);\n  }\n  if (error) {\n    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(\"div\", {\n      children: [\"Error: \", error]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 14\n    }, _this);\n  }\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_components_ClickableList_jsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n    title: \"API Fetched Items\",\n    items: items,\n    onItemClick: handleItemClick\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 44,\n    columnNumber: 5\n  }, _this);\n};\n_s(TournamentList, \"3a4WGIUzx2hoS/cdRKLB8fOExE8=\");\n_c = TournamentList;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TournamentList);\nvar _c;\n$RefreshReg$(_c, \"TournamentList\");\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvVG91cm5hbWVudExpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFtRDtBQUNTO0FBQUE7QUFHNUQsSUFBTU0sY0FBYyxHQUFHLFNBQWpCQSxjQUFjQSxDQUFBLEVBQVM7RUFBQUMsRUFBQTtFQUMzQixJQUFBQyxTQUFBLEdBQTBCTiwrQ0FBUSxDQUFDLEVBQUUsQ0FBQztJQUEvQk8sS0FBSyxHQUFBRCxTQUFBO0lBQUVFLFFBQVEsR0FBQUYsU0FBQTtFQUN0QixJQUFBRyxVQUFBLEdBQThCVCwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFyQ1UsT0FBTyxHQUFBRCxVQUFBO0lBQUVFLFVBQVUsR0FBQUYsVUFBQTtFQUMxQixJQUFBRyxVQUFBLEdBQTBCWiwrQ0FBUSxDQUFDLElBQUksQ0FBQztJQUFqQ2EsS0FBSyxHQUFBRCxVQUFBO0lBQUVFLFFBQVEsR0FBQUYsVUFBQTtFQUV0QmIsZ0RBQVMsQ0FBQyxZQUFNO0lBQ1o7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQU1nQixVQUFVLEdBQUcsU0FBYkEsVUFBVUEsQ0FBQSxFQUFTO01BQ3ZCLE9BQU8sQ0FBQyxXQUFXLEVBQUUsU0FBUyxFQUFFLFNBQVMsQ0FBQztJQUM1QyxDQUFDO0lBRURBLFVBQVUsQ0FBQyxDQUFDO0VBQ2hCLENBQUMsRUFBRSxFQUFFLENBQUM7RUFFTixJQUFNQyxlQUFlLEdBQUcsU0FBbEJBLGVBQWVBLENBQUlDLElBQUksRUFBSztJQUM5QkMsS0FBSyxtQkFBQUMsTUFBQSxDQUFtQkYsSUFBSSxDQUFFLENBQUM7RUFDbkMsQ0FBQztFQUVELElBQUlQLE9BQU8sRUFBRTtJQUNULG9CQUFPUCw2REFBQTtNQUFBaUIsUUFBQSxFQUFLO0lBQVU7TUFBQUMsUUFBQSxFQUFBQyxZQUFBO01BQUFDLFVBQUE7TUFBQUMsWUFBQTtJQUFBLEdBQUFDLEtBQUssQ0FBQztFQUNoQztFQUVBLElBQUlaLEtBQUssRUFBRTtJQUNQLG9CQUFPViw2REFBQTtNQUFBaUIsUUFBQSxHQUFLLFNBQU8sRUFBQ1AsS0FBSztJQUFBO01BQUFRLFFBQUEsRUFBQUMsWUFBQTtNQUFBQyxVQUFBO01BQUFDLFlBQUE7SUFBQSxHQUFBQyxLQUFNLENBQUM7RUFDcEM7RUFDQSxvQkFDRXRCLDZEQUFBLENBQUNGLHFFQUFhO0lBQ1Z5QixLQUFLLEVBQUMsbUJBQW1CO0lBQ3pCbkIsS0FBSyxFQUFFQSxLQUFNO0lBQ2JvQixXQUFXLEVBQUVYO0VBQWdCO0lBQUFLLFFBQUEsRUFBQUMsWUFBQTtJQUFBQyxVQUFBO0lBQUFDLFlBQUE7RUFBQSxHQUFBQyxLQUNoQyxDQUFDO0FBR04sQ0FBQztBQUFDcEIsRUFBQSxDQTlDSUQsY0FBYztBQUFBd0IsRUFBQSxHQUFkeEIsY0FBYztBQWdEcEIsK0RBQWVBLGNBQWMsRUFBQztBQUFBLElBQUF3QixFQUFBO0FBQUFDLFlBQUEsQ0FBQUQsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvVG91cm5hbWVudExpc3QuanN4P2VkYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBDbGlja2FibGVMaXN0IGZyb20gJy4uL2NvbXBvbmVudHMvQ2xpY2thYmxlTGlzdC5qc3gnO1xyXG5cclxuXHJcbmNvbnN0IFRvdXJuYW1lbnRMaXN0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpdGVtcywgc2V0SXRlbXNdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGUobnVsbCk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIC8vIGNvbnN0IGZldGNoSXRlbXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIC8vICAgICB0cnkge1xyXG4gICAgICAvLyAgICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4YW1wbGUuY29tL2l0ZW1zJyk7IC8vIFJlcGxhY2Ugd2l0aCB5b3VyIEFQSSBlbmRwb2ludFxyXG4gICAgICAvLyAgICAgICAgIGlmICghcmVzcG9uc2Uub2spIHtcclxuICAgICAgLy8gICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXR3b3JrIHJlc3BvbnNlIHdhcyBub3Qgb2snKTtcclxuICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgIC8vICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgLy8gICAgICAgICBzZXRJdGVtcyhkYXRhKTsgLy8gQXNzdW1pbmcgdGhlIEFQSSByZXR1cm5zIGFuIGFycmF5IG9mIGl0ZW1zXHJcbiAgICAgIC8vICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAvLyAgICAgICAgIHNldEVycm9yKGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAvLyAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgLy8gICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgLy8gICAgIH1cclxuICAgICAgLy8gfTtcclxuICAgICAgY29uc3QgZmV0Y2hJdGVtcyA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gW1wiTWllcmNvbGVzXCIsIFwiVmllcm5lc1wiLCBcIlJhbmtpbmdcIl1cclxuICAgICAgfVxyXG5cclxuICAgICAgZmV0Y2hJdGVtcygpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlSXRlbUNsaWNrID0gKGl0ZW0pID0+IHtcclxuICAgICAgYWxlcnQoYFlvdSBjbGlja2VkIG9uICR7aXRlbX1gKTtcclxuICB9O1xyXG5cclxuICBpZiAobG9hZGluZykge1xyXG4gICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4gIH1cclxuXHJcbiAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHJldHVybiA8ZGl2PkVycm9yOiB7ZXJyb3J9PC9kaXY+O1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPENsaWNrYWJsZUxpc3RcclxuICAgICAgICB0aXRsZT1cIkFQSSBGZXRjaGVkIEl0ZW1zXCJcclxuICAgICAgICBpdGVtcz17aXRlbXN9XHJcbiAgICAgICAgb25JdGVtQ2xpY2s9e2hhbmRsZUl0ZW1DbGlja31cclxuICAgIC8+XHJcblxyXG4pO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgVG91cm5hbWVudExpc3Q7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2xpY2thYmxlTGlzdCIsImpzeERFViIsIl9qc3hERVYiLCJUb3VybmFtZW50TGlzdCIsIl9zIiwiX3VzZVN0YXRlIiwiaXRlbXMiLCJzZXRJdGVtcyIsIl91c2VTdGF0ZTIiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsIl91c2VTdGF0ZTMiLCJlcnJvciIsInNldEVycm9yIiwiZmV0Y2hJdGVtcyIsImhhbmRsZUl0ZW1DbGljayIsIml0ZW0iLCJhbGVydCIsImNvbmNhdCIsImNoaWxkcmVuIiwiZmlsZU5hbWUiLCJfanN4RmlsZU5hbWUiLCJsaW5lTnVtYmVyIiwiY29sdW1uTnVtYmVyIiwiX3RoaXMiLCJ0aXRsZSIsIm9uSXRlbUNsaWNrIiwiX2MiLCIkUmVmcmVzaFJlZyQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/pages/TournamentList.jsx\n"));

/***/ })

});