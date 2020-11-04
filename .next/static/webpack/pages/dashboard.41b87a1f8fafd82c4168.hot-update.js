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
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! react */ './node_modules/react/index.js'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_2__
                )
                /* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! @material-ui/core/Card */ './node_modules/@material-ui/core/esm/Card/index.js'
                )
                /* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! @material-ui/core/CardActionArea */ './node_modules/@material-ui/core/esm/CardActionArea/index.js'
                )
                /* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! @material-ui/core/CardActions */ './node_modules/@material-ui/core/esm/CardActions/index.js'
                )
                /* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                    /*! @material-ui/core/CardContent */ './node_modules/@material-ui/core/esm/CardContent/index.js'
                )
                /* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! @material-ui/core/CardMedia */ './node_modules/@material-ui/core/esm/CardMedia/index.js'
                )

                var _jsxFileName =
                        'C:\\Portfolio\\next-diario\\components\\dashboard\\DashCard.js',
                    _this = undefined

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
                var classes = useStyles()

                var DashCard = function DashCard(props) {
                    return /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            'jsxDEV'
                        ]
                    )(
                        _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_3__[
                            'default'
                        ],
                        {
                            className: classes.root,
                            children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                    'jsxDEV'
                                ]
                            )(
                                _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_7__[
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
                                    lineNumber: 22,
                                    columnNumber: 13,
                                },
                                _this
                            ),
                        },
                        void 0,
                        false,
                        {
                            fileName: _jsxFileName,
                            lineNumber: 21,
                            columnNumber: 9,
                        },
                        _this
                    )
                }

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaENhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiY2xhc3NlcyIsIkRhc2hDYXJkIiwicHJvcHMiLCJpbWFnZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDO0FBQ3pCQyxNQUFJLEVBQUU7QUFDRkMsWUFBUSxFQUFFO0FBRFIsR0FEbUI7QUFJekJDLE9BQUssRUFBRTtBQUNIQyxVQUFNLEVBQUU7QUFETDtBQUprQixDQUFELENBQTVCO0FBU0EsSUFBTUMsT0FBTyxHQUFHTixTQUFTLEVBQXpCOztBQUNBLElBQU1PLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4QixzQkFDSSxxRUFBQyw4REFBRDtBQUFNLGFBQVMsRUFBRUYsT0FBTyxDQUFDSixJQUF6QjtBQUFBLDJCQUNJLHFFQUFDLG1FQUFEO0FBQ0ksZUFBUyxFQUFFSSxPQUFPLENBQUNGLEtBRHZCO0FBRUksV0FBSyxFQUFFSSxLQUFLLENBQUNDLEtBRmpCO0FBR0ksV0FBSyxFQUFFRCxLQUFLLENBQUNFO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUFTSCxDQVZEOztLQUFNSCxRO0FBV1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC40MWI4N2ExZjhmYWZkODJjNDE2OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogMzQ1LFxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgaGVpZ2h0OiAxNDAsXG4gICAgfSxcbn0pXG5cbmNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxuY29uc3QgRGFzaENhcmQgPSAocHJvcHMpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICA8Q2FyZE1lZGlhXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAgICAgICB0aXRsZT17cHJvcHMudGl0bGV9XG4gICAgICAgICAgICAvPlxuICAgICAgICA8L0NhcmQ+XG4gICAgKVxufVxuZXhwb3J0IGRlZmF1bHQgRGFzaENhcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=