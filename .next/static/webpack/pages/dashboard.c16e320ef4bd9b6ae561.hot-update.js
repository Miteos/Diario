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
                                        lineNumber: 25,
                                        columnNumber: 17,
                                    },
                                    _this
                                ),
                            },
                            void 0,
                            false,
                            {
                                fileName: _jsxFileName,
                                lineNumber: 24,
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

    /***/ './node_modules/@material-ui/core/esm/Card/Card.js':
        /*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Card/Card.js ***!
  \*********************************************************/
        /*! exports provided: styles, default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'styles',
                function () {
                    return styles
                }
            )
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            )
            /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_2__
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! prop-types */ './node_modules/prop-types/index.js'
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                prop_types__WEBPACK_IMPORTED_MODULE_3__
            )
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! clsx */ './node_modules/clsx/dist/clsx.m.js'
            )
            /* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../Paper */ './node_modules/@material-ui/core/esm/Paper/index.js'
            )
            /* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ../styles/withStyles */ './node_modules/@material-ui/core/esm/styles/withStyles.js'
            )

            var styles = {
                /* Styles applied to the root element. */
                root: {
                    overflow: 'hidden',
                },
            }
            var Card = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                'forwardRef'
            ](function Card(props, ref) {
                var classes = props.classes,
                    className = props.className,
                    _props$raised = props.raised,
                    raised = _props$raised === void 0 ? false : _props$raised,
                    other = Object(
                        _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]
                    )(props, ['classes', 'className', 'raised'])

                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                    'createElement'
                ](
                    _Paper__WEBPACK_IMPORTED_MODULE_5__['default'],
                    Object(
                        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ]
                    )(
                        {
                            className: Object(
                                clsx__WEBPACK_IMPORTED_MODULE_4__['default']
                            )(classes.root, className),
                            elevation: raised ? 8 : 1,
                            ref: ref,
                        },
                        other
                    )
                )
            })
            true
                ? (Card.propTypes = {
                      // ----------------------------- Warning --------------------------------
                      // | These PropTypes are generated from the TypeScript type definitions |
                      // |     To update them edit the d.ts file and run "yarn proptypes"     |
                      // ----------------------------------------------------------------------

                      /**
                       * The content of the component.
                       */
                      children:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .node,

                      /**
                       * Override or extend the styles applied to the component.
                       * See [CSS API](#css) below for more details.
                       */
                      classes:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .object,

                      /**
                       * @ignore
                       */
                      className:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * If `true`, the card will use raised styling.
                       */
                      raised:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .bool,
                  })
                : undefined
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Object(
                _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__['default']
            )(styles, {
                name: 'MuiCard',
            })(Card)

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/Card/index.js':
        /*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Card/index.js ***!
  \**********************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./Card */ './node_modules/@material-ui/core/esm/Card/Card.js'
            )
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function () {
                    return _Card__WEBPACK_IMPORTED_MODULE_0__['default']
                }
            )

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js':
        /*!*****************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js ***!
  \*****************************************************************************/
        /*! exports provided: styles, default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'styles',
                function () {
                    return styles
                }
            )
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            )
            /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_2__
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! prop-types */ './node_modules/prop-types/index.js'
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                prop_types__WEBPACK_IMPORTED_MODULE_3__
            )
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! clsx */ './node_modules/clsx/dist/clsx.m.js'
            )
            /* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../styles/withStyles */ './node_modules/@material-ui/core/esm/styles/withStyles.js'
            )
            /* harmony import */ var _ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! ../ButtonBase */ './node_modules/@material-ui/core/esm/ButtonBase/index.js'
            )

            var styles = function styles(theme) {
                return {
                    /* Styles applied to the root element. */
                    root: {
                        display: 'block',
                        textAlign: 'inherit',
                        width: '100%',
                        '&:hover $focusHighlight': {
                            opacity: theme.palette.action.hoverOpacity,
                        },
                        '&$focusVisible $focusHighlight': {
                            opacity: 0.12,
                        },
                    },

                    /* Pseudo-class applied to the ButtonBase root element if the action area is keyboard focused. */
                    focusVisible: {},

                    /* Styles applied to the overlay that covers the action area when it is keyboard focused. */
                    focusHighlight: {
                        overflow: 'hidden',
                        pointerEvents: 'none',
                        position: 'absolute',
                        top: 0,
                        right: 0,
                        bottom: 0,
                        left: 0,
                        borderRadius: 'inherit',
                        opacity: 0,
                        backgroundColor: 'currentcolor',
                        transition: theme.transitions.create('opacity', {
                            duration: theme.transitions.duration.short,
                        }),
                    },
                }
            }
            var CardActionArea = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                'forwardRef'
            ](function CardActionArea(props, ref) {
                var children = props.children,
                    classes = props.classes,
                    className = props.className,
                    focusVisibleClassName = props.focusVisibleClassName,
                    other = Object(
                        _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]
                    )(props, [
                        'children',
                        'classes',
                        'className',
                        'focusVisibleClassName',
                    ])

                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                    'createElement'
                ](
                    _ButtonBase__WEBPACK_IMPORTED_MODULE_6__['default'],
                    Object(
                        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ]
                    )(
                        {
                            className: Object(
                                clsx__WEBPACK_IMPORTED_MODULE_4__['default']
                            )(classes.root, className),
                            focusVisibleClassName: Object(
                                clsx__WEBPACK_IMPORTED_MODULE_4__['default']
                            )(focusVisibleClassName, classes.focusVisible),
                            ref: ref,
                        },
                        other
                    ),
                    children,
                    /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                        'createElement'
                    ]('span', {
                        className: classes.focusHighlight,
                    })
                )
            })
            true
                ? (CardActionArea.propTypes = {
                      // ----------------------------- Warning --------------------------------
                      // | These PropTypes are generated from the TypeScript type definitions |
                      // |     To update them edit the d.ts file and run "yarn proptypes"     |
                      // ----------------------------------------------------------------------

                      /**
                       * The content of the component.
                       */
                      children:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .node,

                      /**
                       * Override or extend the styles applied to the component.
                       * See [CSS API](#css) below for more details.
                       */
                      classes:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .object,

                      /**
                       * @ignore
                       */
                      className:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * @ignore
                       */
                      focusVisibleClassName:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,
                  })
                : undefined
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Object(
                _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__['default']
            )(styles, {
                name: 'MuiCardActionArea',
            })(CardActionArea)

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardActionArea/index.js':
        /*!********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardActionArea/index.js ***!
  \********************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony import */ var _CardActionArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./CardActionArea */ './node_modules/@material-ui/core/esm/CardActionArea/CardActionArea.js'
            )
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function () {
                    return _CardActionArea__WEBPACK_IMPORTED_MODULE_0__[
                        'default'
                    ]
                }
            )

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardActions/CardActions.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardActions/CardActions.js ***!
  \***********************************************************************/
        /*! exports provided: styles, default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'styles',
                function () {
                    return styles
                }
            )
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            )
            /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_2__
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! prop-types */ './node_modules/prop-types/index.js'
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                prop_types__WEBPACK_IMPORTED_MODULE_3__
            )
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! clsx */ './node_modules/clsx/dist/clsx.m.js'
            )
            /* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../styles/withStyles */ './node_modules/@material-ui/core/esm/styles/withStyles.js'
            )

            var styles = {
                /* Styles applied to the root element. */
                root: {
                    display: 'flex',
                    alignItems: 'center',
                    padding: 8,
                },

                /* Styles applied to the root element if `disableSpacing={false}`. */
                spacing: {
                    '& > :not(:first-child)': {
                        marginLeft: 8,
                    },
                },
            }
            var CardActions = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                'forwardRef'
            ](function CardActions(props, ref) {
                var _props$disableSpacing = props.disableSpacing,
                    disableSpacing =
                        _props$disableSpacing === void 0
                            ? false
                            : _props$disableSpacing,
                    classes = props.classes,
                    className = props.className,
                    other = Object(
                        _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]
                    )(props, ['disableSpacing', 'classes', 'className'])

                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                    'createElement'
                ](
                    'div',
                    Object(
                        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ]
                    )(
                        {
                            className: Object(
                                clsx__WEBPACK_IMPORTED_MODULE_4__['default']
                            )(
                                classes.root,
                                className,
                                !disableSpacing && classes.spacing
                            ),
                            ref: ref,
                        },
                        other
                    )
                )
            })
            true
                ? (CardActions.propTypes = {
                      // ----------------------------- Warning --------------------------------
                      // | These PropTypes are generated from the TypeScript type definitions |
                      // |     To update them edit the d.ts file and run "yarn proptypes"     |
                      // ----------------------------------------------------------------------

                      /**
                       * The content of the component.
                       */
                      children:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .node,

                      /**
                       * Override or extend the styles applied to the component.
                       * See [CSS API](#css) below for more details.
                       */
                      classes:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .object,

                      /**
                       * @ignore
                       */
                      className:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * If `true`, the actions do not have additional margin.
                       */
                      disableSpacing:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .bool,
                  })
                : undefined
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Object(
                _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__['default']
            )(styles, {
                name: 'MuiCardActions',
            })(CardActions)

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardActions/index.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardActions/index.js ***!
  \*****************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony import */ var _CardActions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./CardActions */ './node_modules/@material-ui/core/esm/CardActions/CardActions.js'
            )
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function () {
                    return _CardActions__WEBPACK_IMPORTED_MODULE_0__['default']
                }
            )

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardContent/CardContent.js':
        /*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardContent/CardContent.js ***!
  \***********************************************************************/
        /*! exports provided: styles, default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'styles',
                function () {
                    return styles
                }
            )
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            )
            /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_2__
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! prop-types */ './node_modules/prop-types/index.js'
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                prop_types__WEBPACK_IMPORTED_MODULE_3__
            )
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! clsx */ './node_modules/clsx/dist/clsx.m.js'
            )
            /* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../styles/withStyles */ './node_modules/@material-ui/core/esm/styles/withStyles.js'
            )

            var styles = {
                /* Styles applied to the root element. */
                root: {
                    padding: 16,
                    '&:last-child': {
                        paddingBottom: 24,
                    },
                },
            }
            var CardContent = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                'forwardRef'
            ](function CardContent(props, ref) {
                var classes = props.classes,
                    className = props.className,
                    _props$component = props.component,
                    Component =
                        _props$component === void 0 ? 'div' : _props$component,
                    other = Object(
                        _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]
                    )(props, ['classes', 'className', 'component'])

                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                    'createElement'
                ](
                    Component,
                    Object(
                        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ]
                    )(
                        {
                            className: Object(
                                clsx__WEBPACK_IMPORTED_MODULE_4__['default']
                            )(classes.root, className),
                            ref: ref,
                        },
                        other
                    )
                )
            })
            true
                ? (CardContent.propTypes = {
                      // ----------------------------- Warning --------------------------------
                      // | These PropTypes are generated from the TypeScript type definitions |
                      // |     To update them edit the d.ts file and run "yarn proptypes"     |
                      // ----------------------------------------------------------------------

                      /**
                       * The content of the component.
                       */
                      children:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .node,

                      /**
                       * Override or extend the styles applied to the component.
                       * See [CSS API](#css) below for more details.
                       */
                      classes:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .object,

                      /**
                       * @ignore
                       */
                      className:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * The component used for the root node.
                       * Either a string to use a HTML element or a component.
                       */
                      component:
                          /* @typescript-to-proptypes-ignore */
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .elementType,
                  })
                : undefined
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Object(
                _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__['default']
            )(styles, {
                name: 'MuiCardContent',
            })(CardContent)

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardContent/index.js':
        /*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardContent/index.js ***!
  \*****************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony import */ var _CardContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./CardContent */ './node_modules/@material-ui/core/esm/CardContent/CardContent.js'
            )
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function () {
                    return _CardContent__WEBPACK_IMPORTED_MODULE_0__['default']
                }
            )

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardMedia/CardMedia.js':
        /*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardMedia/CardMedia.js ***!
  \*******************************************************************/
        /*! exports provided: styles, default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony export (binding) */ __webpack_require__.d(
                __webpack_exports__,
                'styles',
                function () {
                    return styles
                }
            )
            /* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/extends */ './node_modules/@babel/runtime/helpers/esm/extends.js'
            )
            /* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
                /*! @babel/runtime/helpers/esm/objectWithoutProperties */ './node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
                /*! react */ './node_modules/react/index.js'
            )
            /* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/ __webpack_require__.n(
                react__WEBPACK_IMPORTED_MODULE_2__
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
                /*! prop-types */ './node_modules/prop-types/index.js'
            )
            /* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/ __webpack_require__.n(
                prop_types__WEBPACK_IMPORTED_MODULE_3__
            )
            /* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                /*! clsx */ './node_modules/clsx/dist/clsx.m.js'
            )
            /* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
                /*! ../styles/withStyles */ './node_modules/@material-ui/core/esm/styles/withStyles.js'
            )
            /* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
                /*! @material-ui/utils */ './node_modules/@material-ui/utils/esm/index.js'
            )

            var styles = {
                /* Styles applied to the root element. */
                root: {
                    display: 'block',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                },

                /* Styles applied to the root element if `component="video, audio, picture, iframe, or img"`. */
                media: {
                    width: '100%',
                },

                /* Styles applied to the root element if `component="picture or img"`. */
                img: {
                    // ⚠️ object-fit is not supported by IE 11.
                    objectFit: 'cover',
                },
            }
            var MEDIA_COMPONENTS = [
                'video',
                'audio',
                'picture',
                'iframe',
                'img',
            ]
            var CardMedia = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                'forwardRef'
            ](function CardMedia(props, ref) {
                var children = props.children,
                    classes = props.classes,
                    className = props.className,
                    _props$component = props.component,
                    Component =
                        _props$component === void 0 ? 'div' : _props$component,
                    image = props.image,
                    src = props.src,
                    style = props.style,
                    other = Object(
                        _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[
                            'default'
                        ]
                    )(props, [
                        'children',
                        'classes',
                        'className',
                        'component',
                        'image',
                        'src',
                        'style',
                    ])

                var isMediaComponent =
                    MEDIA_COMPONENTS.indexOf(Component) !== -1
                var composedStyle =
                    !isMediaComponent && image
                        ? Object(
                              _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                                  'default'
                              ]
                          )(
                              {
                                  backgroundImage: 'url("'.concat(image, '")'),
                              },
                              style
                          )
                        : style
                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2__[
                    'createElement'
                ](
                    Component,
                    Object(
                        _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__[
                            'default'
                        ]
                    )(
                        {
                            className: Object(
                                clsx__WEBPACK_IMPORTED_MODULE_4__['default']
                            )(
                                classes.root,
                                className,
                                isMediaComponent && classes.media,
                                'picture img'.indexOf(Component) !== -1 &&
                                    classes.img
                            ),
                            ref: ref,
                            style: composedStyle,
                            src: isMediaComponent ? image || src : undefined,
                        },
                        other
                    ),
                    children
                )
            })
            true
                ? (CardMedia.propTypes = {
                      // ----------------------------- Warning --------------------------------
                      // | These PropTypes are generated from the TypeScript type definitions |
                      // |     To update them edit the d.ts file and run "yarn proptypes"     |
                      // ----------------------------------------------------------------------

                      /**
                       * The content of the component.
                       */
                      children: Object(
                          _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__[
                              'chainPropTypes'
                          ]
                      )(
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .node,
                          function (props) {
                              if (
                                  !props.children &&
                                  !props.image &&
                                  !props.src &&
                                  !props.component
                              ) {
                                  return new Error(
                                      'Material-UI: Either `children`, `image`, `src` or `component` prop must be specified.'
                                  )
                              }

                              return null
                          }
                      ),

                      /**
                       * Override or extend the styles applied to the component.
                       * See [CSS API](#css) below for more details.
                       */
                      classes:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .object,

                      /**
                       * @ignore
                       */
                      className:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * The component used for the root node.
                       * Either a string to use a HTML element or a component.
                       */
                      component:
                          /* @typescript-to-proptypes-ignore */
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .elementType,

                      /**
                       * Image to be displayed as a background image.
                       * Either `image` or `src` prop must be specified.
                       * Note that caller must specify height otherwise the image will not be visible.
                       */
                      image:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * An alias for `image` property.
                       * Available only with media components.
                       * Media components: `video`, `audio`, `picture`, `iframe`, `img`.
                       */
                      src:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .string,

                      /**
                       * @ignore
                       */
                      style:
                          prop_types__WEBPACK_IMPORTED_MODULE_3___default.a
                              .object,
                  })
                : undefined
            /* harmony default export */ __webpack_exports__[
                'default'
            ] = Object(
                _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__['default']
            )(styles, {
                name: 'MuiCardMedia',
            })(CardMedia)

            /***/
        },

    /***/ './node_modules/@material-ui/core/esm/CardMedia/index.js':
        /*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/CardMedia/index.js ***!
  \***************************************************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* harmony import */ var _CardMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
                /*! ./CardMedia */ './node_modules/@material-ui/core/esm/CardMedia/CardMedia.js'
            )
            /* harmony reexport (safe) */ __webpack_require__.d(
                __webpack_exports__,
                'default',
                function () {
                    return _CardMedia__WEBPACK_IMPORTED_MODULE_0__['default']
                }
            )

            /***/
        },

    /***/ './pages/dashboard.js':
        /*!****************************!*\
  !*** ./pages/dashboard.js ***!
  \****************************/
        /*! exports provided: default */
        /***/ function (module, __webpack_exports__, __webpack_require__) {
            'use strict'
            __webpack_require__.r(__webpack_exports__)
            /* WEBPACK VAR INJECTION */
            ;(function (module) {
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
                /* harmony import */ var _components_dashboard_dashCard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
                    /*! ../components/dashboard/dashCard */ './components/dashboard/dashCard.js'
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
                                            'dashCard',
                                            {
                                                className:
                                                    _styles_modules_diary_module_scss__WEBPACK_IMPORTED_MODULE_5___default
                                                        .a.dash_button,
                                                image: l.img,
                                                title: l.title,
                                            },
                                            void 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9kYXNoYm9hcmQvZGFzaENhcmQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZC9DYXJkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL0NhcmQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZEFjdGlvbkFyZWEvQ2FyZEFjdGlvbkFyZWEuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZEFjdGlvbkFyZWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZEFjdGlvbnMvQ2FyZEFjdGlvbnMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZEFjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZENvbnRlbnQvQ2FyZENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZENvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ2FyZE1lZGlhL0NhcmRNZWRpYS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DYXJkTWVkaWEvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2Rhc2hib2FyZC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwicm9vdCIsIm1heFdpZHRoIiwibWVkaWEiLCJoZWlnaHQiLCJNZWRpYUNhcmQiLCJjbGFzc2VzIiwiZGFzaENhcmQiLCJwcm9wcyIsImltYWdlIiwidGl0bGUiLCJEYXNoYm9hcmQiLCJzdHlsZXMiLCJkYXNoYm9hcmQiLCJsaW5rcyIsIm1hcCIsImwiLCJkYXNoX2J1dHRvbiIsImltZyIsInRvIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQztBQUN6QkMsTUFBSSxFQUFFO0FBQ0ZDLFlBQVEsRUFBRTtBQURSLEdBRG1CO0FBSXpCQyxPQUFLLEVBQUU7QUFDSEMsVUFBTSxFQUFFO0FBREw7QUFKa0IsQ0FBRCxDQUE1QjtBQVNlLFNBQVNDLFNBQVQsR0FBcUI7QUFBQTs7QUFBQTs7QUFDaEMsTUFBTUMsT0FBTyxHQUFHUCxTQUFTLEVBQXpCOztBQUdBLE1BQU1RLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNDLEtBQUQsRUFBVztBQUN4Qix3QkFDSSxxRUFBQyw4REFBRDtBQUFNLGVBQVMsRUFBRUYsT0FBTyxDQUFDTCxJQUF6QjtBQUFBLDZCQUNJLHFFQUFDLG1FQUFEO0FBQ0ksaUJBQVMsRUFBRUssT0FBTyxDQUFDSCxLQUR2QjtBQUVJLGFBQUssRUFBRUssS0FBSyxDQUFDQyxLQUZqQjtBQUdJLGFBQUssRUFBRUQsS0FBSyxDQUFDRTtBQUhqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURKO0FBU0gsR0FWRDtBQVdIOztHQWZ1QkwsUztVQUNKTixTOzs7S0FESU0sUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2pCeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7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O0FBYUgsQ0FkRDs7S0FBTUMsUztBQWVOLElBQU1HLEtBQUssR0FBRyxDQUNWO0FBQUVKLE9BQUssRUFBRSxPQUFUO0FBQWtCUyxJQUFFLEVBQUUsUUFBdEI7QUFBZ0NELEtBQUcsRUFBRTtBQUFyQyxDQURVLEVBRVY7QUFBRVIsT0FBSyxFQUFFLE1BQVQ7QUFBaUJTLElBQUUsRUFBRSxPQUFyQjtBQUE4QkQsS0FBRyxFQUFFO0FBQW5DLENBRlUsRUFHVjtBQUNJUixPQUFLLEVBQUUsWUFEWDtBQUVJUyxJQUFFLEVBQUUsYUFGUjtBQUdJRCxLQUFHLEVBQUU7QUFIVCxDQUhVLENBQWQ7QUFTZVAsd0VBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvZGFzaGJvYXJkLmMxNmUzMjBlZjRiZDliNmFlNTYxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucydcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xuXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKHtcbiAgICByb290OiB7XG4gICAgICAgIG1heFdpZHRoOiAzNDUsXG4gICAgfSxcbiAgICBtZWRpYToge1xuICAgICAgICBoZWlnaHQ6IDE0MCxcbiAgICB9LFxufSk7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE1lZGlhQ2FyZCgpIHtcbiAgICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XG5cblxuICAgIGNvbnN0IGRhc2hDYXJkID0gKHByb3BzKSA9PiB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XG4gICAgICAgICAgICAgICAgPENhcmRNZWRpYVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XG4gICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9wcy5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb3BzLnRpdGxlfVxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L0NhcmQ+XG4gICAgICAgIClcbiAgICB9XG59XG4iLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUGFwZXIgZnJvbSAnLi4vUGFwZXInO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSB7XG4gIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gIHJvb3Q6IHtcbiAgICBvdmVyZmxvdzogJ2hpZGRlbidcbiAgfVxufTtcbnZhciBDYXJkID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ2FyZChwcm9wcywgcmVmKSB7XG4gIHZhciBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRyYWlzZWQgPSBwcm9wcy5yYWlzZWQsXG4gICAgICByYWlzZWQgPSBfcHJvcHMkcmFpc2VkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRyYWlzZWQsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcInJhaXNlZFwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFBhcGVyLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBlbGV2YXRpb246IHJhaXNlZCA/IDggOiAxLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhcmQucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogVGhlIGNvbnRlbnQgb2YgdGhlIGNvbXBvbmVudC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNhcmQgd2lsbCB1c2UgcmFpc2VkIHN0eWxpbmcuXG4gICAqL1xuICByYWlzZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUNhcmQnXG59KShDYXJkKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DYXJkJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICcuLi9CdXR0b25CYXNlJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgdGV4dEFsaWduOiAnaW5oZXJpdCcsXG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgJyY6aG92ZXIgJGZvY3VzSGlnaGxpZ2h0Jzoge1xuICAgICAgICBvcGFjaXR5OiB0aGVtZS5wYWxldHRlLmFjdGlvbi5ob3Zlck9wYWNpdHlcbiAgICAgIH0sXG4gICAgICAnJiRmb2N1c1Zpc2libGUgJGZvY3VzSGlnaGxpZ2h0Jzoge1xuICAgICAgICBvcGFjaXR5OiAwLjEyXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBCdXR0b25CYXNlIHJvb3QgZWxlbWVudCBpZiB0aGUgYWN0aW9uIGFyZWEgaXMga2V5Ym9hcmQgZm9jdXNlZC4gKi9cbiAgICBmb2N1c1Zpc2libGU6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIG92ZXJsYXkgdGhhdCBjb3ZlcnMgdGhlIGFjdGlvbiBhcmVhIHdoZW4gaXQgaXMga2V5Ym9hcmQgZm9jdXNlZC4gKi9cbiAgICBmb2N1c0hpZ2hsaWdodDoge1xuICAgICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxuICAgICAgcG9pbnRlckV2ZW50czogJ25vbmUnLFxuICAgICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXG4gICAgICB0b3A6IDAsXG4gICAgICByaWdodDogMCxcbiAgICAgIGJvdHRvbTogMCxcbiAgICAgIGxlZnQ6IDAsXG4gICAgICBib3JkZXJSYWRpdXM6ICdpbmhlcml0JyxcbiAgICAgIG9wYWNpdHk6IDAsXG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICdjdXJyZW50Y29sb3InLFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5Jywge1xuICAgICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uc2hvcnRcbiAgICAgIH0pXG4gICAgfVxuICB9O1xufTtcbnZhciBDYXJkQWN0aW9uQXJlYSA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENhcmRBY3Rpb25BcmVhKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGZvY3VzVmlzaWJsZUNsYXNzTmFtZSA9IHByb3BzLmZvY3VzVmlzaWJsZUNsYXNzTmFtZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJmb2N1c1Zpc2libGVDbGFzc05hbWVcIl0pO1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChCdXR0b25CYXNlLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICBmb2N1c1Zpc2libGVDbGFzc05hbWU6IGNsc3goZm9jdXNWaXNpYmxlQ2xhc3NOYW1lLCBjbGFzc2VzLmZvY3VzVmlzaWJsZSksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCBjaGlsZHJlbiwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIsIHtcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMuZm9jdXNIaWdobGlnaHRcbiAgfSkpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDYXJkQWN0aW9uQXJlYS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgZm9jdXNWaXNpYmxlQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUNhcmRBY3Rpb25BcmVhJ1xufSkoQ2FyZEFjdGlvbkFyZWEpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRBY3Rpb25BcmVhJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICBwYWRkaW5nOiA4XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgZGlzYWJsZVNwYWNpbmc9e2ZhbHNlfWAuICovXG4gIHNwYWNpbmc6IHtcbiAgICAnJiA+IDpub3QoOmZpcnN0LWNoaWxkKSc6IHtcbiAgICAgIG1hcmdpbkxlZnQ6IDhcbiAgICB9XG4gIH1cbn07XG52YXIgQ2FyZEFjdGlvbnMgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBDYXJkQWN0aW9ucyhwcm9wcywgcmVmKSB7XG4gIHZhciBfcHJvcHMkZGlzYWJsZVNwYWNpbmcgPSBwcm9wcy5kaXNhYmxlU3BhY2luZyxcbiAgICAgIGRpc2FibGVTcGFjaW5nID0gX3Byb3BzJGRpc2FibGVTcGFjaW5nID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlU3BhY2luZyxcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImRpc2FibGVTcGFjaW5nXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsICFkaXNhYmxlU3BhY2luZyAmJiBjbGFzc2VzLnNwYWNpbmcpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSk7XG59KTtcbnByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IENhcmRBY3Rpb25zLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBhY3Rpb25zIGRvIG5vdCBoYXZlIGFkZGl0aW9uYWwgbWFyZ2luLlxuICAgKi9cbiAgZGlzYWJsZVNwYWNpbmc6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aUNhcmRBY3Rpb25zJ1xufSkoQ2FyZEFjdGlvbnMpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRBY3Rpb25zJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IHtcbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgcm9vdDoge1xuICAgIHBhZGRpbmc6IDE2LFxuICAgICcmOmxhc3QtY2hpbGQnOiB7XG4gICAgICBwYWRkaW5nQm90dG9tOiAyNFxuICAgIH1cbiAgfVxufTtcbnZhciBDYXJkQ29udGVudCA9IC8qI19fUFVSRV9fKi9SZWFjdC5mb3J3YXJkUmVmKGZ1bmN0aW9uIENhcmRDb250ZW50KHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbXBvbmVudCA9IHByb3BzLmNvbXBvbmVudCxcbiAgICAgIENvbXBvbmVudCA9IF9wcm9wcyRjb21wb25lbnQgPT09IHZvaWQgMCA/ICdkaXYnIDogX3Byb3BzJGNvbXBvbmVudCxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcG9uZW50XCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDYXJkQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBvZiB0aGUgY29tcG9uZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogVGhlIGNvbXBvbmVudCB1c2VkIGZvciB0aGUgcm9vdCBub2RlLlxuICAgKiBFaXRoZXIgYSBzdHJpbmcgdG8gdXNlIGEgSFRNTCBlbGVtZW50IG9yIGEgY29tcG9uZW50LlxuICAgKi9cbiAgY29tcG9uZW50OiBQcm9wVHlwZXNcbiAgLyogQHR5cGVzY3JpcHQtdG8tcHJvcHR5cGVzLWlnbm9yZSAqL1xuICAuZWxlbWVudFR5cGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpQ2FyZENvbnRlbnQnXG59KShDYXJkQ29udGVudCk7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vQ2FyZENvbnRlbnQnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCB7IGNoYWluUHJvcFR5cGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29tcG9uZW50PVwidmlkZW8sIGF1ZGlvLCBwaWN0dXJlLCBpZnJhbWUsIG9yIGltZ1wiYC4gKi9cbiAgbWVkaWE6IHtcbiAgICB3aWR0aDogJzEwMCUnXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29tcG9uZW50PVwicGljdHVyZSBvciBpbWdcImAuICovXG4gIGltZzoge1xuICAgIC8vIOKaoO+4jyBvYmplY3QtZml0IGlzIG5vdCBzdXBwb3J0ZWQgYnkgSUUgMTEuXG4gICAgb2JqZWN0Rml0OiAnY292ZXInXG4gIH1cbn07XG52YXIgTUVESUFfQ09NUE9ORU5UUyA9IFsndmlkZW8nLCAnYXVkaW8nLCAncGljdHVyZScsICdpZnJhbWUnLCAnaW1nJ107XG52YXIgQ2FyZE1lZGlhID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ2FyZE1lZGlhKHByb3BzLCByZWYpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wb25lbnQgPSBwcm9wcy5jb21wb25lbnQsXG4gICAgICBDb21wb25lbnQgPSBfcHJvcHMkY29tcG9uZW50ID09PSB2b2lkIDAgPyAnZGl2JyA6IF9wcm9wcyRjb21wb25lbnQsXG4gICAgICBpbWFnZSA9IHByb3BzLmltYWdlLFxuICAgICAgc3JjID0gcHJvcHMuc3JjLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wb25lbnRcIiwgXCJpbWFnZVwiLCBcInNyY1wiLCBcInN0eWxlXCJdKTtcblxuICB2YXIgaXNNZWRpYUNvbXBvbmVudCA9IE1FRElBX0NPTVBPTkVOVFMuaW5kZXhPZihDb21wb25lbnQpICE9PSAtMTtcbiAgdmFyIGNvbXBvc2VkU3R5bGUgPSAhaXNNZWRpYUNvbXBvbmVudCAmJiBpbWFnZSA/IF9leHRlbmRzKHtcbiAgICBiYWNrZ3JvdW5kSW1hZ2U6IFwidXJsKFxcXCJcIi5jb25jYXQoaW1hZ2UsIFwiXFxcIilcIilcbiAgfSwgc3R5bGUpIDogc3R5bGU7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICBjbGFzc05hbWU6IGNsc3goY2xhc3Nlcy5yb290LCBjbGFzc05hbWUsIGlzTWVkaWFDb21wb25lbnQgJiYgY2xhc3Nlcy5tZWRpYSwgXCJwaWN0dXJlIGltZ1wiLmluZGV4T2YoQ29tcG9uZW50KSAhPT0gLTEgJiYgY2xhc3Nlcy5pbWcpLFxuICAgIHJlZjogcmVmLFxuICAgIHN0eWxlOiBjb21wb3NlZFN0eWxlLFxuICAgIHNyYzogaXNNZWRpYUNvbXBvbmVudCA/IGltYWdlIHx8IHNyYyA6IHVuZGVmaW5lZFxuICB9LCBvdGhlciksIGNoaWxkcmVuKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gQ2FyZE1lZGlhLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogY2hhaW5Qcm9wVHlwZXMoUHJvcFR5cGVzLm5vZGUsIGZ1bmN0aW9uIChwcm9wcykge1xuICAgIGlmICghcHJvcHMuY2hpbGRyZW4gJiYgIXByb3BzLmltYWdlICYmICFwcm9wcy5zcmMgJiYgIXByb3BzLmNvbXBvbmVudCkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcignTWF0ZXJpYWwtVUk6IEVpdGhlciBgY2hpbGRyZW5gLCBgaW1hZ2VgLCBgc3JjYCBvciBgY29tcG9uZW50YCBwcm9wIG11c3QgYmUgc3BlY2lmaWVkLicpO1xuICAgIH1cblxuICAgIHJldHVybiBudWxsO1xuICB9KSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBjb21wb25lbnQgdXNlZCBmb3IgdGhlIHJvb3Qgbm9kZS5cbiAgICogRWl0aGVyIGEgc3RyaW5nIHRvIHVzZSBhIEhUTUwgZWxlbWVudCBvciBhIGNvbXBvbmVudC5cbiAgICovXG4gIGNvbXBvbmVudDogUHJvcFR5cGVzXG4gIC8qIEB0eXBlc2NyaXB0LXRvLXByb3B0eXBlcy1pZ25vcmUgKi9cbiAgLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBJbWFnZSB0byBiZSBkaXNwbGF5ZWQgYXMgYSBiYWNrZ3JvdW5kIGltYWdlLlxuICAgKiBFaXRoZXIgYGltYWdlYCBvciBgc3JjYCBwcm9wIG11c3QgYmUgc3BlY2lmaWVkLlxuICAgKiBOb3RlIHRoYXQgY2FsbGVyIG11c3Qgc3BlY2lmeSBoZWlnaHQgb3RoZXJ3aXNlIHRoZSBpbWFnZSB3aWxsIG5vdCBiZSB2aXNpYmxlLlxuICAgKi9cbiAgaW1hZ2U6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIEFuIGFsaWFzIGZvciBgaW1hZ2VgIHByb3BlcnR5LlxuICAgKiBBdmFpbGFibGUgb25seSB3aXRoIG1lZGlhIGNvbXBvbmVudHMuXG4gICAqIE1lZGlhIGNvbXBvbmVudHM6IGB2aWRlb2AsIGBhdWRpb2AsIGBwaWN0dXJlYCwgYGlmcmFtZWAsIGBpbWdgLlxuICAgKi9cbiAgc3JjOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlDYXJkTWVkaWEnXG59KShDYXJkTWVkaWEpOyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tICcuL0NhcmRNZWRpYSc7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvbGF5b3V0J1xuaW1wb3J0IGRhc2hDYXJkIGZyb20gJy4uL2NvbXBvbmVudHMvZGFzaGJvYXJkL2Rhc2hDYXJkJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9zdHlsZXMvbW9kdWxlcy9kaWFyeS5tb2R1bGUuc2NzcydcblxuY29uc3QgRGFzaGJvYXJkID0gKCkgPT4ge1xuICAgIHJldHVybiAoXG4gICAgICAgIDxMYXlvdXQ+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmRhc2hib2FyZH0+XG4gICAgICAgICAgICAgICAge2xpbmtzLm1hcCgobCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8ZGFzaENhcmRcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmRhc2hfYnV0dG9ufVxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e2wuaW1nfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e2wudGl0bGV9XG4gICAgICAgICAgICAgICAgICAgID48L2Rhc2hDYXJkPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvTGF5b3V0PlxuICAgIClcbn1cbmNvbnN0IGxpbmtzID0gW1xuICAgIHsgdGl0bGU6ICdEaWFyeScsIHRvOiAnL2RpYXJ5JywgaW1nOiAncHVibGljL3N0YXRpYy9kYXNoYm9hcmQvZGFzaDEuanBnJyB9LFxuICAgIHsgdGl0bGU6ICdUb0RvJywgdG86ICcvdG9kbycsIGltZzogJ3B1YmxpYy9zdGF0aWMvZGFzaGJvYXJkL2Rhc2gxLmpwZycgfSxcbiAgICB7XG4gICAgICAgIHRpdGxlOiAnRm9vZCBEaWFyeScsXG4gICAgICAgIHRvOiAnL2Zvb2QtZGlhcnknLFxuICAgICAgICBpbWc6ICdwdWJsaWMvc3RhdGljL2Rhc2hib2FyZC9kYXNoMS5qcGcnLFxuICAgIH0sXG5dXG5leHBvcnQgZGVmYXVsdCBEYXNoYm9hcmRcbiJdLCJzb3VyY2VSb290IjoiIn0=
