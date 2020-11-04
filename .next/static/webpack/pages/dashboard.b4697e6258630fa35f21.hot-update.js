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
                        description: 'Write down your thoughts',
                    },
                    {
                        title: 'ToDo',
                        to: '/todo',
                        img: '/static/dashboard/dash2.jpg',
                        description: '',
                    },
                    {
                        title: 'Food Diary',
                        to: '/food-diary',
                        img: '/static/dashboard/dash3.jpg',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvZGFzaGJvYXJkLmpzIl0sIm5hbWVzIjpbIkRhc2hib2FyZCIsInN0eWxlcyIsImRhc2hib2FyZCIsImxpbmtzIiwibWFwIiwibCIsImRhc2hfYnV0dG9uIiwiaW1nIiwidGl0bGUiLCJ0byIsImRlc2NyaXB0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxHQUFNO0FBQ3BCLHNCQUNJLHFFQUFDLDBEQUFEO0FBQUEsMkJBQ0k7QUFBSyxlQUFTLEVBQUVDLHdFQUFNLENBQUNDLFNBQXZCO0FBQUEsZ0JBQ0tDLEtBQUssQ0FBQ0MsR0FBTixDQUFVLFVBQUNDLENBQUQ7QUFBQSw0QkFDUCxxRUFBQyxzRUFBRDtBQUVJLG1CQUFTLEVBQUVKLHdFQUFNLENBQUNLLFdBRnRCO0FBR0ksZUFBSyxFQUFFRCxDQUFDLENBQUNFLEdBSGI7QUFJSSxlQUFLLEVBQUVGLENBQUMsQ0FBQ0c7QUFKYixXQUNTSCxDQUFDLENBQUNHLEtBRFg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFETztBQUFBLE9BQVY7QUFETDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURKO0FBY0gsQ0FmRDs7S0FBTVIsUztBQWdCTixJQUFNRyxLQUFLLEdBQUcsQ0FDVjtBQUFFSyxPQUFLLEVBQUUsT0FBVDtBQUFrQkMsSUFBRSxFQUFFLFFBQXRCO0FBQWdDRixLQUFHLEVBQUUsNkJBQXJDO0FBQW9FRyxhQUFXLEVBQUM7QUFBaEYsQ0FEVSxFQUVWO0FBQUVGLE9BQUssRUFBRSxNQUFUO0FBQWlCQyxJQUFFLEVBQUUsT0FBckI7QUFBOEJGLEtBQUcsRUFBRSw2QkFBbkM7QUFBaUVHLGFBQVcsRUFBQztBQUE3RSxDQUZVLEVBR1Y7QUFDSUYsT0FBSyxFQUFFLFlBRFg7QUFFSUMsSUFBRSxFQUFFLGFBRlI7QUFHSUYsS0FBRyxFQUFFO0FBSFQsQ0FIVSxDQUFkO0FBU2VQLHdFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2Rhc2hib2FyZC5iNDY5N2U2MjU4NjMwZmEzNWYyMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IERhc2hDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL0Rhc2hDYXJkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbW9kdWxlcy9kaWFyeS5tb2R1bGUuc2NzcydcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZH0+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8RGFzaENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17bC50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhc2hfYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2wuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2wudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgID48L0Rhc2hDYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cbmNvbnN0IGxpbmtzID0gW1xuICAgIHsgdGl0bGU6ICdEaWFyeScsIHRvOiAnL2RpYXJ5JywgaW1nOiAnL3N0YXRpYy9kYXNoYm9hcmQvZGFzaDEuanBnJywgZGVzY3JpcHRpb246J1dyaXRlIGRvd24geW91ciB0aG91Z2h0cycgfSxcbiAgICB7IHRpdGxlOiAnVG9EbycsIHRvOiAnL3RvZG8nLCBpbWc6ICcvc3RhdGljL2Rhc2hib2FyZC9kYXNoMi5qcGcnLGRlc2NyaXB0aW9uOicnIH0sXG4gICAge1xuICAgICAgICB0aXRsZTogJ0Zvb2QgRGlhcnknLFxuICAgICAgICB0bzogJy9mb29kLWRpYXJ5JyxcbiAgICAgICAgaW1nOiAnL3N0YXRpYy9kYXNoYm9hcmQvZGFzaDMuanBnJyxcbiAgICB9LFxuXVxuZXhwb3J0IGRlZmF1bHQgRGFzaGJvYXJkXG4iXSwic291cmNlUm9vdCI6IiJ9
