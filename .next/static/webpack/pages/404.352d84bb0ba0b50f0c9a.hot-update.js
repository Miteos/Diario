webpackHotUpdate_N_E('pages/404', {
    /***/ './pages/404.js':
        /*!**********************!*\
  !*** ./pages/404.js ***!
  \**********************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* WEBPACK VAR INJECTION */ ;(function (module) {
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'default',
                    function () {
                        return Custom404
                    }
                )
                /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react/jsx-dev-runtime */ './node_modules/react/jsx-dev-runtime.js'
                )
                /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! ../components/layout */ './components/layout.js'
                )
                /* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @material-ui/core/Button */ './node_modules/@material-ui/core/esm/Button/index.js'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! react */ './node_modules/react/index.js'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_3__
                )

                var _jsxFileName = 'C:\\Portfolio\\next-diario\\pages\\404.js'

                function Custom404() {
                    return /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            'jsxDEV'
                        ]
                    )(
                        _components_layout__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ],
                        {
                            children: [
                                /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                        'jsxDEV'
                                    ]
                                )(
                                    'h1',
                                    {
                                        children: '404',
                                    },
                                    void 0,
                                    false,
                                    {
                                        fileName: _jsxFileName,
                                        lineNumber: 8,
                                        columnNumber: 13,
                                    },
                                    this
                                ),
                                /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                        'jsxDEV'
                                    ]
                                )(
                                    'h2',
                                    {
                                        children: 'Page Not Found',
                                    },
                                    void 0,
                                    false,
                                    {
                                        fileName: _jsxFileName,
                                        lineNumber: 9,
                                        columnNumber: 13,
                                    },
                                    this
                                ),
                                /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                        'jsxDEV'
                                    ]
                                )(
                                    _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__[
                                        'default'
                                    ],
                                    {
                                        href: '/login',
                                        variant: 'outlined',
                                        color: 'primary',
                                        children: 'Go back',
                                    },
                                    void 0,
                                    false,
                                    {
                                        fileName: _jsxFileName,
                                        lineNumber: 10,
                                        columnNumber: 13,
                                    },
                                    this
                                ),
                            ],
                        },
                        void 0,
                        true,
                        {
                            fileName: _jsxFileName,
                            lineNumber: 7,
                            columnNumber: 9,
                        },
                        this
                    )
                }
                _c = Custom404

                var _c

                $RefreshReg$(_c, 'Custom404')

                var _a, _b
                // Legacy CSS implementations will `eval` browser code in a Node.js context
                // to extract CSS. For backwards compatibility, we need to check we're in a
                // browser context before continuing.
                if (
                    typeof self !== 'undefined' &&
                    // AMP / No-JS mode does not inject these helpers:
                    '$RefreshHelpers$' in self
                ) {
                    var currentExports = module.__proto__.exports
                    var prevExports =
                        (_b =
                            (_a = module.hot.data) === null || _a === void 0
                                ? void 0
                                : _a.prevExports) !== null && _b !== void 0
                            ? _b
                            : null
                    // This cannot happen in MainTemplate because the exports mismatch between
                    // templating and execution.
                    self.$RefreshHelpers$.registerExportsForReactRefresh(
                        currentExports,
                        module.i
                    )
                    // A module can be accepted automatically based on its exports, e.g. when
                    // it is a Refresh Boundary.
                    if (
                        self.$RefreshHelpers$.isReactRefreshBoundary(
                            currentExports
                        )
                    ) {
                        // Save the previous exports on update so we can compare the boundary
                        // signatures.
                        module.hot.dispose(function (data) {
                            data.prevExports = currentExports
                        })
                        // Unconditionally accept an update to this module, we'll check if it's
                        // still a Refresh Boundary later.
                        module.hot.accept()
                        // This field is set when the previous version of this module was a
                        // Refresh Boundary, letting us know we need to check for invalidation or
                        // enqueue an update.
                        if (prevExports !== null) {
                            // A boundary can become ineligible if its exports are incompatible
                            // with the previous exports.
                            //
                            // For example, if you add/remove/change exports, we'll want to
                            // re-execute the importing modules, and force those components to
                            // re-render. Similarly, if you convert a class component to a
                            // function, we want to invalidate the boundary.
                            if (
                                self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(
                                    prevExports,
                                    currentExports
                                )
                            ) {
                                module.hot.invalidate()
                            } else {
                                self.$RefreshHelpers$.scheduleUpdate()
                            }
                        }
                    } else {
                        // Since we just executed the code for the module, it's possible that the
                        // new exports made it ineligible for being a boundary.
                        // We only care about the case when we were _previously_ a boundary,
                        // because we already accepted this update (accidental side effect).
                        var isNoLongerABoundary = prevExports !== null
                        if (isNoLongerABoundary) {
                            module.hot.invalidate()
                        }
                    }
                }

                /* WEBPACK VAR INJECTION */
            }.call(
                this,
                __webpack_require__(
                    /*! ./../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
                )(module)
            ))

            /***/
        },
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvNDA0LmpzIl0sIm5hbWVzIjpbIkN1c3RvbTQwNCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQ2hDLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsNEJBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFESixlQUVJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQyxnRUFBRDtBQUFRLFVBQUksRUFBRSxRQUFkO0FBQXdCLGFBQU8sRUFBQyxVQUFoQztBQUEyQyxXQUFLLEVBQUMsU0FBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFISjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFESjtBQVNIO0tBVnVCQSxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzLzQwNC4zNTJkODRiYjBiYTBiNTBmMGM5YS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDdXN0b200MDQoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxoMT40MDQ8L2gxPlxuICAgICAgICAgICAgPGgyPlBhZ2UgTm90IEZvdW5kPC9oMj5cbiAgICAgICAgICAgIDxCdXR0b24gaHJlZj17Jy9sb2dpbid9IHZhcmlhbnQ9XCJvdXRsaW5lZFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgIEdvIGJhY2tcbiAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG4iXSwic291cmNlUm9vdCI6IiJ9
