webpackHotUpdate_N_E('pages/dashboard', {
    /***/ './components/dashboard/dashCard.js':
        /*!******************************************!*\
  !*** ./components/dashboard/DashCard.js ***!
  \******************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* WEBPACK VAR INJECTION */
            ;(function (module) {
                /* harmony export (binding) */ __webpack_require__.d(
                    __webpack_exports__,
                    'default',
                    function () {
                        return MediaCard
                    }
                )
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
                function MediaCard() {
                    _s()

                    var _this = this

                    var classes = useStyles()

                    var dashCard = function dashCard(props) {
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
                                        lineNumber: 24,
                                        columnNumber: 17,
                                    },
                                    _this
                                ),
                            },
                            void 0,
                            false,
                            {
                                fileName: _jsxFileName,
                                lineNumber: 23,
                                columnNumber: 13,
                            },
                            _this
                        )
                    }
                }

                _s(
                    MediaCard,
                    '8g5FPXexvSEOsxdmU7HicukHGqY=',
                    false,
                    function () {
                        return [useStyles]
                    }
                )

                _c = MediaCard

                var _c

                $RefreshReg$(_c, 'MediaCard')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaENhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiTWVkaWFDYXJkIiwiY2xhc3NlcyIsImRhc2hDYXJkIiwicHJvcHMiLCJpbWFnZSIsInRpdGxlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBRG1CO0FBSXpCQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFO0FBREw7QUFKa0IsQ0FBRCxDQUE1QjtBQVNlLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsT0FBTyxHQUFHUCxTQUFTLEVBQXpCOztBQUVBLE1BQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4Qix3QkFDSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRUYsT0FBTyxDQUFDTCxJQUF6QjtBQUFBLDZCQUNJLHFFQUFDLG1FQUFEO0FBQ0ksaUJBQVMsRUFBRUssT0FBTyxDQUFDSCxLQUR2QjtBQUVJLGFBQUssRUFBRUssS0FBSyxDQUFDQyxLQUZqQjtBQUdJLGFBQUssRUFBRUQsS0FBSyxDQUFDRTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0gsR0FWRDtBQVdIOztHQWR1QkwsUztVQUNKTixTOzs7S0FESU0sUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuNzc1ZjIzNjhkNDViZDUyOGJkYTQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJ1xuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXG5cbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoe1xuICAgIHJvb3Q6IHtcbiAgICAgICAgbWF4V2lkdGg6IDM0NSxcbiAgICB9LFxuICAgIG1lZGlhOiB7XG4gICAgICAgIGhlaWdodDogMTQwLFxuICAgIH0sXG59KVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNZWRpYUNhcmQoKSB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG5cbiAgICBjb25zdCBkYXNoQ2FyZCA9IChwcm9wcykgPT4ge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9wcy50aXRsZX1cbiAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9DYXJkPlxuICAgICAgICApXG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==
