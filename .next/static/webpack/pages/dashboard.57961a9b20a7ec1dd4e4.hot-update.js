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

    /***/ './components/dashboard/dashCard.js': false,

    /***/ './pages/dashboard.js':
        /*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
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
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                    /*! react */ './node_modules/react/index.js'
                )
                /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(
                    react__WEBPACK_IMPORTED_MODULE_1__
                )
                /* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                    /*! @material-ui/core/Button */ './node_modules/@material-ui/core/esm/Button/index.js'
                )
                /* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                    /*! ../components/layout */ './components/layout.js'
                )
                /* harmony import */ var _components_dashboard_DashCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ../components/dashboard/DashCard */ './components/dashboard/DashCard.js'
                )
                /* harmony import */ var _styles_modules_diary_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                    /*! ../styles/modules/diary.module.scss */ './styles/modules/diary.module.scss'
                )
                /* harmony import */ var _styles_modules_diary_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/ __webpack_require__.n(
                    _styles_modules_diary_module_scss__WEBPACK_IMPORTED_MODULE_5__
                )

                var _jsxFileName =
                        'C:\\Portfolio\\next-diario\\pages\\dashboard.js',
                    _this = undefined

                var Dashboard = function Dashboard() {
                    return /*#__PURE__*/ Object(
                        react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                            'jsxDEV'
                        ]
                    )(
                        _components_layout__WEBPACK_IMPORTED_MODULE_3__[
                            'default'
                        ],
                        {
                            children: /*#__PURE__*/ Object(
                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                    'jsxDEV'
                                ]
                            )(
                                'div',
                                {
                                    className:
                                        _styles_modules_diary_module_scss__WEBPACK_IMPORTED_MODULE_5___default
                                            .a.dashboard,
                                    children: links.map(function (l) {
                                        return /*#__PURE__*/ Object(
                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                'jsxDEV'
                                            ]
                                        )(
                                            _components_dashboard_DashCard__WEBPACK_IMPORTED_MODULE_4__[
                                                'default'
                                            ],
                                            {
                                                className:
                                                    _styles_modules_diary_module_scss__WEBPACK_IMPORTED_MODULE_5___default
                                                        .a.dash_button,
                                                image: l.img,
                                                title: l.title,
                                            },
                                            l.title,
                                            false,
                                            {
                                                fileName: _jsxFileName,
                                                lineNumber: 12,
                                                columnNumber: 21,
                                            },
                                            _this
                                        )
                                    }),
                                },
                                void 0,
                                false,
                                {
                                    fileName: _jsxFileName,
                                    lineNumber: 10,
                                    columnNumber: 13,
                                },
                                _this
                            ),
                        },
                        void 0,
                        false,
                        {
                            fileName: _jsxFileName,
                            lineNumber: 9,
                            columnNumber: 9,
                        },
                        _this
                    )
                }

                _c = Dashboard
                var links = [
                    {
                        title: 'Diary',
                        to: '/diary',
                        img: 'public/static/dashboard/dash1.jpg',
                    },
                    {
                        title: 'ToDo',
                        to: '/todo',
                        img: 'public/static/dashboard/dash1.jpg',
                    },
                    {
                        title: 'Food Diary',
                        to: '/food-diary',
                        img: 'public/static/dashboard/dash1.jpg',
                    },
                ]
                /* harmony default export */ __webpack_exports__[
                    'default'
                ] = Dashboard

                var _c

                $RefreshReg$(_c, 'Dashboard')

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaENhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1heFdpZHRoIiwibWVkaWEiLCJoZWlnaHQiLCJNZWRpYUNhcmQiLCJjbGFzc2VzIiwiZGFzaENhcmQiLCJwcm9wcyIsImltYWdlIiwidGl0bGUiLCJEYXNoYm9hcmQiLCJzdHlsZXMiLCJkYXNoYm9hcmQiLCJsaW5rcyIsIm1hcCIsImwiLCJkYXNoX2J1dHRvbiIsImltZyIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBRG1CO0FBSXpCQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFO0FBREw7QUFKa0IsQ0FBRCxDQUE1QjtBQVNlLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsT0FBTyxHQUFHUCxTQUFTLEVBQXpCOztBQUVBLE1BQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4Qix3QkFDSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRUYsT0FBTyxDQUFDTCxJQUF6QjtBQUFBLDZCQUNJLHFFQUFDLG1FQUFEO0FBQ0ksaUJBQVMsRUFBRUssT0FBTyxDQUFDSCxLQUR2QjtBQUVJLGFBQUssRUFBRUssS0FBSyxDQUFDQyxLQUZqQjtBQUdJLGFBQUssRUFBRUQsS0FBSyxDQUFDRTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0gsR0FWRDtBQVdIOztHQWR1QkwsUztVQUNKTixTOzs7S0FESU0sUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNTSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVDLHdFQUFNLENBQUNDLFNBQXZCO0FBQUEsZ0JBQ0tDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQ7QUFBQSw0QkFDUCxxRUFBQyxzRUFBRDtBQUVJLG1CQUFTLEVBQUVKLHdFQUFNLENBQUNLLFdBRnRCO0FBR0ksZUFBSyxFQUFFRCxDQUFDLENBQUNFLEdBSGI7QUFJSSxlQUFLLEVBQUVGLENBQUMsQ0FBQ047QUFKYixXQUNTTSxDQUFDLENBQUNOLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBY0gsQ0FmRDs7S0FBTUMsUztBQWdCTixJQUFNRyxLQUFLLEdBQUcsQ0FDVjtBQUFFSixPQUFLLEVBQUUsT0FBVDtBQUFrQlMsSUFBRSxFQUFFLFFBQXRCO0FBQWdDRCxLQUFHLEVBQUU7QUFBckMsQ0FEVSxFQUVWO0FBQUVSLE9BQUssRUFBRSxNQUFUO0FBQWlCUyxJQUFFLEVBQUUsT0FBckI7QUFBOEJELEtBQUcsRUFBRTtBQUFuQyxDQUZVLEVBR1Y7QUFDSVIsT0FBSyxFQUFFLFlBRFg7QUFFSVMsSUFBRSxFQUFFLGFBRlI7QUFHSUQsS0FBRyxFQUFFO0FBSFQsQ0FIVSxDQUFkO0FBU2VQLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC41Nzk2MWE5YjIwYTdlYzFkZDRlNC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogMzQ1LFxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgaGVpZ2h0OiAxNDAsXG4gICAgfSxcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhQ2FyZCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcblxuICAgIGNvbnN0IGRhc2hDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9sYXlvdXQnXG5pbXBvcnQgRGFzaENhcmQgZnJvbSAnLi4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaENhcmQnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL3N0eWxlcy9tb2R1bGVzL2RpYXJ5Lm1vZHVsZS5zY3NzJ1xuXG5jb25zdCBEYXNoYm9hcmQgPSAoKSA9PiB7XG4gICAgcmV0dXJuIChcbiAgICAgICAgPExheW91dD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaGJvYXJkfT5cbiAgICAgICAgICAgICAgICB7bGlua3MubWFwKChsKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgIDxEYXNoQ2FyZFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuZGFzaF9idXR0b259XG4gICAgICAgICAgICAgICAgICAgICAgICBpbWFnZT17bC5pbWd9XG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZT17bC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgPjwvRGFzaENhcmQ+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9MYXlvdXQ+XG4gICAgKVxufVxuY29uc3QgbGlua3MgPSBbXG4gICAgeyB0aXRsZTogJ0RpYXJ5JywgdG86ICcvZGlhcnknLCBpbWc6ICdwdWJsaWMvc3RhdGljL2Rhc2hib2FyZC9kYXNoMS5qcGcnIH0sXG4gICAgeyB0aXRsZTogJ1RvRG8nLCB0bzogJy90b2RvJywgaW1nOiAncHVibGljL3N0YXRpYy9kYXNoYm9hcmQvZGFzaDEuanBnJyB9LFxuICAgIHtcbiAgICAgICAgdGl0bGU6ICdGb29kIERpYXJ5JyxcbiAgICAgICAgdG86ICcvZm9vZC1kaWFyeScsXG4gICAgICAgIGltZzogJ3B1YmxpYy9zdGF0aWMvZGFzaGJvYXJkL2Rhc2gxLmpwZycsXG4gICAgfSxcbl1cbmV4cG9ydCBkZWZhdWx0IERhc2hib2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
