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
                /* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
                    /*! @material-ui/core/Button */ './node_modules/@material-ui/core/esm/Button/index.js'
                )
                /* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
                    /*! @material-ui/core/Typography */ './node_modules/@material-ui/core/esm/Typography/index.js'
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
                            children: [
                                /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                        'jsxDEV'
                                    ]
                                )(
                                    _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_3__[
                                        'default'
                                    ],
                                    {
                                        children: [
                                            /*#__PURE__*/ Object(
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
                                            /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                    'jsxDEV'
                                                ]
                                            )(
                                                _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_5__[
                                                    'default'
                                                ],
                                                {
                                                    children: [
                                                        /*#__PURE__*/ Object(
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                                'jsxDEV'
                                                            ]
                                                        )(
                                                            _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[
                                                                'default'
                                                            ],
                                                            {
                                                                gutterBottom: true,
                                                                variant: 'h5',
                                                                component: 'h2',
                                                                children:
                                                                    props.title,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 29,
                                                                columnNumber: 21,
                                                            },
                                                            _this
                                                        ),
                                                        /*#__PURE__*/ Object(
                                                            react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                                'jsxDEV'
                                                            ]
                                                        )(
                                                            _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_8__[
                                                                'default'
                                                            ],
                                                            {
                                                                variant:
                                                                    'body2',
                                                                color:
                                                                    'textSecondary',
                                                                component: 'p',
                                                                children:
                                                                    props.description,
                                                            },
                                                            void 0,
                                                            false,
                                                            {
                                                                fileName: _jsxFileName,
                                                                lineNumber: 32,
                                                                columnNumber: 21,
                                                            },
                                                            _this
                                                        ),
                                                    ],
                                                },
                                                void 0,
                                                true,
                                                {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 28,
                                                    columnNumber: 17,
                                                },
                                                _this
                                            ),
                                        ],
                                    },
                                    void 0,
                                    true,
                                    {
                                        fileName: _jsxFileName,
                                        lineNumber: 23,
                                        columnNumber: 13,
                                    },
                                    _this
                                ),
                                /*#__PURE__*/ Object(
                                    react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                        'jsxDEV'
                                    ]
                                )(
                                    _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_4__[
                                        'default'
                                    ],
                                    {
                                        children: [
                                            /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                    'jsxDEV'
                                                ]
                                            )(
                                                _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[
                                                    'default'
                                                ],
                                                {
                                                    size: 'small',
                                                    color: 'primary',
                                                    children: 'Share',
                                                },
                                                void 0,
                                                false,
                                                {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 42,
                                                    columnNumber: 17,
                                                },
                                                _this
                                            ),
                                            /*#__PURE__*/ Object(
                                                react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[
                                                    'jsxDEV'
                                                ]
                                            )(
                                                _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__[
                                                    'default'
                                                ],
                                                {
                                                    size: 'small',
                                                    color: 'primary',
                                                    children: 'Learn More',
                                                },
                                                void 0,
                                                false,
                                                {
                                                    fileName: _jsxFileName,
                                                    lineNumber: 45,
                                                    columnNumber: 17,
                                                },
                                                _this
                                            ),
                                        ],
                                    },
                                    void 0,
                                    true,
                                    {
                                        fileName: _jsxFileName,
                                        lineNumber: 41,
                                        columnNumber: 13,
                                    },
                                    _this
                                ),
                            ],
                        },
                        void 0,
                        true,
                        {
                            fileName: _jsxFileName,
                            lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvRGFzaENhcmQuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInJvb3QiLCJtYXhXaWR0aCIsIm1lZGlhIiwiaGVpZ2h0IiwiRGFzaENhcmQiLCJwcm9wcyIsImNsYXNzZXMiLCJpbWFnZSIsInRpdGxlIiwiZGVzY3JpcHRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUdDLDJFQUFVLENBQUM7QUFDekJDLE1BQUksRUFBRTtBQUNGQyxZQUFRLEVBQUU7QUFEUixHQURtQjtBQUl6QkMsT0FBSyxFQUFFO0FBQ0hDLFVBQU0sRUFBRTtBQURMO0FBSmtCLENBQUQsQ0FBNUI7O0FBU0EsSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsS0FBRCxFQUFXO0FBQUE7O0FBQ3hCLE1BQU1DLE9BQU8sR0FBR1IsU0FBUyxFQUF6QjtBQUNBLHNCQUNJLHFFQUFDLDhEQUFEO0FBQU0sYUFBUyxFQUFFUSxPQUFPLENBQUNOLElBQXpCO0FBQUEsNEJBQ0kscUVBQUMsd0VBQUQ7QUFBQSw4QkFDSSxxRUFBQyxtRUFBRDtBQUNJLGlCQUFTLEVBQUVNLE9BQU8sQ0FBQ0osS0FEdkI7QUFFSSxhQUFLLEVBQUVHLEtBQUssQ0FBQ0U7QUFGakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBS0kscUVBQUMscUVBQUQ7QUFBQSxnQ0FDSSxxRUFBQyxvRUFBRDtBQUFZLHNCQUFZLE1BQXhCO0FBQXlCLGlCQUFPLEVBQUMsSUFBakM7QUFBc0MsbUJBQVMsRUFBQyxJQUFoRDtBQUFBLG9CQUNLRixLQUFLLENBQUNHO0FBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESixlQUlJLHFFQUFDLG9FQUFEO0FBQ0ksaUJBQU8sRUFBQyxPQURaO0FBRUksZUFBSyxFQUFDLGVBRlY7QUFHSSxtQkFBUyxFQUFDLEdBSGQ7QUFBQSxvQkFLS0gsS0FBSyxDQUFDSTtBQUxYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFtQkkscUVBQUMscUVBQUQ7QUFBQSw4QkFDSSxxRUFBQyxnRUFBRDtBQUFRLFlBQUksRUFBQyxPQUFiO0FBQXFCLGFBQUssRUFBQyxTQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKLGVBSUkscUVBQUMsZ0VBQUQ7QUFBUSxZQUFJLEVBQUMsT0FBYjtBQUFxQixhQUFLLEVBQUMsU0FBM0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFuQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREo7QUE4QkgsQ0FoQ0Q7O0dBQU1MLFE7VUFDY04sUzs7O0tBRGRNLFE7QUFpQ1NBLHVFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC4wZTkwNWI0NGJiM2UxYmJiMzE0ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcblxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcyh7XG4gICAgcm9vdDoge1xuICAgICAgICBtYXhXaWR0aDogMzQ1LFxuICAgIH0sXG4gICAgbWVkaWE6IHtcbiAgICAgICAgaGVpZ2h0OiAxNDAsXG4gICAgfSxcbn0pXG5cbmNvbnN0IERhc2hDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXG4gICAgcmV0dXJuIChcbiAgICAgICAgPENhcmQgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxuICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxuICAgICAgICAgICAgICAgICAgICBpbWFnZT17cHJvcHMuaW1hZ2V9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxuICAgICAgICAgICAgICAgICAgICAgICAge3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiYm9keTJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cInBcIlxuICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7cHJvcHMuZGVzY3JpcHRpb259XG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxuICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cbiAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cbiAgICAgICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiPlxuICAgICAgICAgICAgICAgICAgICBTaGFyZVxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICAgICAgICAgIDxCdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCI+XG4gICAgICAgICAgICAgICAgICAgIExlYXJuIE1vcmVcbiAgICAgICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XG4gICAgICAgIDwvQ2FyZD5cbiAgICApXG59XG5leHBvcnQgZGVmYXVsdCBEYXNoQ2FyZFxuIl0sInNvdXJjZVJvb3QiOiIifQ==
