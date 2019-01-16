(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var cssuseragent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! cssuseragent */ \"./node_modules/cssuseragent/cssua.js\");\n/* harmony import */ var cssuseragent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cssuseragent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var fastclick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! fastclick */ \"./node_modules/fastclick/lib/fastclick.js\");\n/* harmony import */ var fastclick__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fastclick__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _webcomponent_props__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./webcomponent-props */ \"./src/js/webcomponent-props.js\");\n/* harmony import */ var _webcomponent_import__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./webcomponent-import */ \"./src/js/webcomponent-import.js\");\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main */ \"./src/js/main.js\");\n// import some dependencies like polyfills, etc...\n\n // main application entry point\n\n\n\n\n\n//# sourceURL=webpack:///./src/js/app.js?");

/***/ }),

/***/ "./src/js/features/contact-code.js":
/*!*****************************************!*\
  !*** ./src/js/features/contact-code.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coffeekraken-s-notification-component */ \"./node_modules/coffeekraken-s-notification-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_1__);\n\n\naxios__WEBPACK_IMPORTED_MODULE_0___default.a.interceptors.response.use(function (response) {\n  return response;\n}, function (error) {\n  return Promise.reject(error.response);\n});\nvar $code = document.querySelector('s-codemirror#contact-code');\n$code.setProps({\n  updateOn: 'run',\n  compile: function compile(value) {\n    return new Promise(function (resolve, reject) {\n      var values = {};\n\n      try {\n        values = JSON.parse(value);\n      } catch (e) {\n        coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_1___default.a.notify({\n          title: 'Woops',\n          body: e,\n          dismissable: true,\n          timeout: 10000,\n          side: 't',\n          type: 'error'\n        });\n        reject();\n        return;\n      }\n\n      axios__WEBPACK_IMPORTED_MODULE_0___default.a.post('/contact', values).then(function (response) {\n        resolve({\n          data: value\n        });\n        $code.setProp('value', \"{ \\\"message\\\": \\\"\".concat(response.data.message, \"\\\" }\"));\n      }).catch(function (error) {\n        coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_1___default.a.notify({\n          title: 'Woops',\n          body: error.data.message,\n          dismissable: true,\n          timeout: 10000,\n          side: 't',\n          type: 'error'\n        });\n        reject();\n      });\n    });\n  }\n});\n\n//# sourceURL=webpack:///./src/js/features/contact-code.js?");

/***/ }),

/***/ "./src/js/features/logo.js":
/*!*********************************!*\
  !*** ./src/js/features/logo.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var $logo = document.querySelector('#logo');\ndocument.body.addEventListener('app:ready', function () {\n  setTimeout(function () {\n    $logo.play();\n  }, 500);\n});\n\n//# sourceURL=webpack:///./src/js/features/logo.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _features_contact_code__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/contact-code */ \"./src/js/features/contact-code.js\");\n/* harmony import */ var _features_logo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./features/logo */ \"./src/js/features/logo.js\");\n/* harmony import */ var _features_logo__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_features_logo__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./router */ \"./src/js/router.js\");\n\n\n\n\n//# sourceURL=webpack:///./src/js/main.js?");

/***/ }),

/***/ "./src/js/pages/contact.js":
/*!*********************************!*\
  !*** ./src/js/pages/contact.js ***!
  \*********************************/
/*! exports provided: contactEnterHandler, contactLeaveHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactEnterHandler\", function() { return contactEnterHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"contactLeaveHandler\", function() { return contactLeaveHandler; });\nfunction contactEnterHandler() {\n  document.querySelector('s-slideshow.content').goTo('contact');\n  document.body.classList.add('page-contact');\n}\nfunction contactLeaveHandler() {\n  document.body.classList.remove('page-contact');\n}\n\n//# sourceURL=webpack:///./src/js/pages/contact.js?");

/***/ }),

/***/ "./src/js/pages/projects.js":
/*!**********************************!*\
  !*** ./src/js/pages/projects.js ***!
  \**********************************/
/*! exports provided: projectsEnterHandler, projectsLeaveHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsEnterHandler\", function() { return projectsEnterHandler; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"projectsLeaveHandler\", function() { return projectsLeaveHandler; });\nfunction projectsEnterHandler() {\n  document.querySelector('s-slideshow.content').goTo('projects');\n}\nfunction projectsLeaveHandler() {}\n\n//# sourceURL=webpack:///./src/js/pages/projects.js?");

/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! navigo */ \"./node_modules/navigo/lib/navigo.min.js\");\n/* harmony import */ var navigo__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(navigo__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _pages_contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/contact */ \"./src/js/pages/contact.js\");\n/* harmony import */ var _pages_projects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/projects */ \"./src/js/pages/projects.js\");\n\n\n\nvar root = '/';\nvar useHash = false;\nvar hash = '#';\nvar router = new navigo__WEBPACK_IMPORTED_MODULE_0___default.a(root, useHash, hash);\nrouter.hooks({\n  before: function before(done) {\n    if (window.isIntroRunning) {\n      document.body.addEventListener('app:ready', function () {\n        done();\n      });\n      return;\n    }\n\n    done();\n  }\n});\nrouter.on('contact', _pages_contact__WEBPACK_IMPORTED_MODULE_1__[\"contactEnterHandler\"], {\n  leave: _pages_contact__WEBPACK_IMPORTED_MODULE_1__[\"contactLeaveHandler\"]\n}).on('', _pages_projects__WEBPACK_IMPORTED_MODULE_2__[\"projectsEnterHandler\"]).resolve();\n\n//# sourceURL=webpack:///./src/js/router.js?");

/***/ }),

/***/ "./src/js/webcomponent-import.js":
/*!***************************************!*\
  !*** ./src/js/webcomponent-import.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var coffeekraken_sugar_js_utils_is_mobile__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coffeekraken-sugar/js/utils/is/mobile */ \"./node_modules/coffeekraken-sugar/js/utils/is/mobile.js\");\n/* harmony import */ var coffeekraken_sugar_js_utils_is_mobile__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_sugar_js_utils_is_mobile__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var coffeekraken_sugar_js_utils_is_chrome__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coffeekraken-sugar/js/utils/is/chrome */ \"./node_modules/coffeekraken-sugar/js/utils/is/chrome.js\");\n/* harmony import */ var coffeekraken_sugar_js_utils_is_chrome__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_sugar_js_utils_is_chrome__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var coffeekraken_s_icon_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! coffeekraken-s-icon-component */ \"./node_modules/coffeekraken-s-icon-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_icon_component__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_icon_component__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var coffeekraken_s_validator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! coffeekraken-s-validator-component */ \"./node_modules/coffeekraken-s-validator-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_validator_component__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_validator_component__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var coffeekraken_s_slideshow_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! coffeekraken-s-slideshow-component */ \"./node_modules/coffeekraken-s-slideshow-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_slideshow_component__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_slideshow_component__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var coffeekraken_s_ajax_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! coffeekraken-s-ajax-form-component */ \"./node_modules/coffeekraken-s-ajax-form-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_ajax_form_component__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_ajax_form_component__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var coffeekraken_s_recaptcha_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! coffeekraken-s-recaptcha-component */ \"./node_modules/coffeekraken-s-recaptcha-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_recaptcha_component__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_recaptcha_component__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var coffeekraken_s_bodymovin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! coffeekraken-s-bodymovin-component */ \"./node_modules/coffeekraken-s-bodymovin-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_bodymovin_component__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_bodymovin_component__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var coffeekraken_s_codemirror_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! coffeekraken-s-codemirror-component */ \"./node_modules/coffeekraken-s-codemirror-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_codemirror_component__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_codemirror_component__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! coffeekraken-s-notification-component */ \"./node_modules/coffeekraken-s-notification-component/dist/index.js\");\n/* harmony import */ var coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_s_notification_component__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\n\n\n\n\n\n\n\n\nif (!coffeekraken_sugar_js_utils_is_mobile__WEBPACK_IMPORTED_MODULE_0___default()()) {\n  __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! coffeekraken-s-atv-card-component */ \"./node_modules/coffeekraken-s-atv-card-component/dist/index.js\", 7));\n  __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! coffeekraken-s-spring-snap-component */ \"./node_modules/coffeekraken-s-spring-snap-component/dist/index.js\", 7));\n}\n\nif (coffeekraken_sugar_js_utils_is_chrome__WEBPACK_IMPORTED_MODULE_1___default()()) {\n  __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! coffeekraken-s-motion-blur-component */ \"./node_modules/coffeekraken-s-motion-blur-component/dist/index.js\", 7));\n} // check out https://github.com/coffeekraken for more components\n\n//# sourceURL=webpack:///./src/js/webcomponent-import.js?");

/***/ }),

/***/ "./src/js/webcomponent-props.js":
/*!**************************************!*\
  !*** ./src/js/webcomponent-props.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var coffeekraken_sugar_js_dom_dispatchEvent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! coffeekraken-sugar/js/dom/dispatchEvent */ \"./node_modules/coffeekraken-sugar/js/dom/dispatchEvent.js\");\n/* harmony import */ var coffeekraken_sugar_js_dom_dispatchEvent__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_sugar_js_dom_dispatchEvent__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var coffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! coffeekraken-sugar/js/core/SWebComponent */ \"./node_modules/coffeekraken-sugar/js/core/SWebComponent.js\");\n/* harmony import */ var coffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(coffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1__);\n\n // icons\n\ncoffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1___default.a.setDefaultProps({\n  driver: 'fontawesome'\n}, 's-icon'); // transition start on slideshow items\n\nvar isFirst = true;\ncoffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1___default.a.setDefaultProps({\n  onChange: function onChange(comp) {\n    if (!isFirst) {\n      // avoid trigger motion blur on first change event\n      Array.from(comp.querySelectorAll('[s-slideshow-slide]')).forEach(function ($slide) {\n        coffeekraken_sugar_js_dom_dispatchEvent__WEBPACK_IMPORTED_MODULE_0___default()($slide, 'transitionstart');\n      });\n    }\n\n    isFirst = false;\n  }\n}, 's-slideshow'); // s-validator\n\ncoffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1___default.a.setDefaultProps({\n  on: 'keyup'\n}, 's-validator'); // recaptcha\n\ncoffeekraken_sugar_js_core_SWebComponent__WEBPACK_IMPORTED_MODULE_1___default.a.setDefaultProps({\n  sitekey: '6LfLqYkUAAAAADaAhZIBuIcnIR8EoCzccIPcQslj'\n}, 's-recaptcha');\n\n//# sourceURL=webpack:///./src/js/webcomponent-props.js?");

/***/ })

}]);