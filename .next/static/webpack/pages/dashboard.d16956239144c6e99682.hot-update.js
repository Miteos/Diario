webpackHotUpdate_N_E('pages/dashboard', {
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
                        img: '/static/dashboard/dash1.jpg',
                    },
                    {
                        title: 'ToDo',
                        to: '/todo',
                        img: '/static/dashboard/dash1.jpg',
                    },
                    {
                        title: 'Food Diary',
                        to: '/food-diary',
                        img: '/static/dashboard/dash1.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInN0eWxlcyIsImRhc2hib2FyZCIsImxpbmtzIiwibWFwIiwibCIsImRhc2hfYnV0dG9uIiwiaW1nIiwidGl0bGUiLCJ0byJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksR0FBTTtBQUNwQixzQkFDSSxxRUFBQywwREFBRDtBQUFBLDJCQUNJO0FBQUssZUFBUyxFQUFFQyx3RUFBTSxDQUFDQyxTQUF2QjtBQUFBLGdCQUNLQyxLQUFLLENBQUNDLEdBQU4sQ0FBVSxVQUFDQyxDQUFEO0FBQUEsNEJBQ1AscUVBQUMsc0VBQUQ7QUFFSSxtQkFBUyxFQUFFSix3RUFBTSxDQUFDSyxXQUZ0QjtBQUdJLGVBQUssRUFBRUQsQ0FBQyxDQUFDRSxHQUhiO0FBSUksZUFBSyxFQUFFRixDQUFDLENBQUNHO0FBSmIsV0FDU0gsQ0FBQyxDQUFDRyxLQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRE87QUFBQSxPQUFWO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FESjtBQWNILENBZkQ7O0tBQU1SLFM7QUFnQk4sSUFBTUcsS0FBSyxHQUFHLENBQ1Y7QUFBRUssT0FBSyxFQUFFLE9BQVQ7QUFBa0JDLElBQUUsRUFBRSxRQUF0QjtBQUFnQ0YsS0FBRyxFQUFFO0FBQXJDLENBRFUsRUFFVjtBQUFFQyxPQUFLLEVBQUUsTUFBVDtBQUFpQkMsSUFBRSxFQUFFLE9BQXJCO0FBQThCRixLQUFHLEVBQUU7QUFBbkMsQ0FGVSxFQUdWO0FBQ0lDLE9BQUssRUFBRSxZQURYO0FBRUlDLElBQUUsRUFBRSxhQUZSO0FBR0lGLEtBQUcsRUFBRTtBQUhULENBSFUsQ0FBZDtBQVNlUCx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9kYXNoYm9hcmQuZDE2OTU2MjM5MTQ0YzZlOTk2ODIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL2xheW91dCdcbmltcG9ydCBEYXNoQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL2Rhc2hib2FyZC9EYXNoQ2FyZCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vc3R5bGVzL21vZHVsZXMvZGlhcnkubW9kdWxlLnNjc3MnXG5cbmNvbnN0IERhc2hib2FyZCA9ICgpID0+IHtcbiAgICByZXR1cm4gKFxuICAgICAgICA8TGF5b3V0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5kYXNoYm9hcmR9PlxuICAgICAgICAgICAgICAgIHtsaW5rcy5tYXAoKGwpID0+IChcbiAgICAgICAgICAgICAgICAgICAgPERhc2hDYXJkXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2wudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5kYXNoX2J1dHRvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtsLmltZ31cbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtsLnRpdGxlfVxuICAgICAgICAgICAgICAgICAgICA+PC9EYXNoQ2FyZD5cbiAgICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L0xheW91dD5cbiAgICApXG59XG5jb25zdCBsaW5rcyA9IFtcbiAgICB7IHRpdGxlOiAnRGlhcnknLCB0bzogJy9kaWFyeScsIGltZzogJy9zdGF0aWMvZGFzaGJvYXJkL2Rhc2gxLmpwZycgfSxcbiAgICB7IHRpdGxlOiAnVG9EbycsIHRvOiAnL3RvZG8nLCBpbWc6ICcvc3RhdGljL2Rhc2hib2FyZC9kYXNoMS5qcGcnIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0Zvb2QgRGlhcnknLFxuICAgICAgICB0bzogJy9mb29kLWRpYXJ5JyxcbiAgICAgICAgaW1nOiAnL3N0YXRpYy9kYXNoYm9hcmQvZGFzaDEuanBnJyxcbiAgICB9LFxuXVxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9
