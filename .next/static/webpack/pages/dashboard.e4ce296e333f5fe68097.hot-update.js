webpackHotUpdate_N_E('pages/dashboard', {
    /***/ './components/dashboard/DashCard.js':
        /*!******************************************!*\
  !*** ./components/dashboard/DashCard.js ***!
  \******************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* WEBPACK VAR INJECTION */ ;(function (module) {
                /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                    /*! react/jsx-dev-runtime */ './node_modules/react/jsx-dev-runtime.js'
                )
                /* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/ __webpack_require__.n(
                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__
                )
                /* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! @material-ui/core/styles */ './node_modules/@material-ui/core/esm/styles/index.js'
                )
                /* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @material-ui/core/Card */ './node_modules/@material-ui/core/esm/Card/index.js'
                )
                /* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @material-ui/core/CardActionArea */ './node_modules/@material-ui/core/esm/CardActionArea/index.js'
                )
                /* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! @material-ui/core/CardActions */ './node_modules/@material-ui/core/esm/CardActions/index.js'
                )
                /* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! @material-ui/core/CardContent */ './node_modules/@material-ui/core/esm/CardContent/index.js'
                )
                /* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! @material-ui/core/CardMedia */ './node_modules/@material-ui/core/esm/CardMedia/index.js'
                )

                var _jsxFileName =
                        'C:\\Portfolio\\next-diario\\components\\dashboard\\DashCard.js',
                    _this = undefined,
                    _s = $RefreshSig$()

                var useStyles = Object(
                    _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_1__[
                        'makeStyles'
                    ]
                )({
                    root: {
                        maxWidth: 345,
                    },
                    media: {
                        height: 140,
                    },
                })

                var DashCard = function DashCard(props) {
                    _s()

                    var classes = useStyles()
                    return /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            'jsxDEV'
                        ]
                    )(
                        _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_2__[
                            'default'
                        ],
                        {
                            className: classes.root,
                            children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                    'jsxDEV'
                                ]
                            )(
                                _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_6__[
                                    'default'
                                ],
                                {
                                    className: classes.media,
                                    image: props.image,
                                    title: props.title,
                                },
                                void 0,
                                false,
                                {
                                    fileName: _jsxFileName,
                                    lineNumber: 21,
                                    columnNumber: 13,
                                },
                                _this
                            ),
                        },
                        void 0,
                        false,
                        {
                            fileName: _jsxFileName,
                            lineNumber: 20,
                            columnNumber: 9,
                        },
                        _this
                    )
                }

                _s(
                    DashCard,
                    '8g5FPXexvSEOsxdmU7HicukHGqY=',
                    false,
                    function () {
                        return [useStyles]
                    }
                )

                _c = DashCard
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = DashCard

                var _c

                $RefreshReg$(_c, 'DashCard')

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
                    /*! ./../../node_modules/webpack/buildin/harmony-module.js */ './node_modules/webpack/buildin/harmony-module.js'
                )(module)
            ))

            /***/
        },
})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaENhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiRGFzaENhcmQiLCJwcm9wcyIsImNsYXNzZXMiLCJpbWFnZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFO0FBRFIsR0FEbUI7QUFJekJDLE9BQUssRUFBRTtBQUNIQyxVQUFNLEVBQUU7QUFETDtBQUprQixDQUFELENBQTVCOztBQVNBLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUFBOztBQUN4QixNQUFNQyxPQUFPLEdBQUdSLFNBQVMsRUFBekI7QUFDQSxzQkFDSSxxRUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRVEsT0FBTyxDQUFDTixJQUF6QjtBQUFBLDJCQUNJLHFFQUFDLG1FQUFEO0FBQ0ksZUFBUyxFQUFFTSxPQUFPLENBQUNKLEtBRHZCO0FBRUksV0FBSyxFQUFFRyxLQUFLLENBQUNFLEtBRmpCO0FBR0ksV0FBSyxFQUFFRixLQUFLLENBQUNHO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQVhEOztHQUFNSixRO1VBQ2NOLFM7OztLQURkTSxRO0FBWVNBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5lNGNlMjk2ZTMzM2Y1ZmU2ODA5Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogMzQ1LFxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgaGVpZ2h0OiAxNDAsXG4gICAgfSxcbn0pXG5cbmNvbnN0IERhc2hDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cbiAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgPC9DYXJkPlxuICAgIClcbn1cbmV4cG9ydCBkZWZhdWx0IERhc2hDYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9
