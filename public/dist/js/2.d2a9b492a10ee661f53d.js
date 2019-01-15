(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/coffeekraken-s-atv-card-component/dist/index.js":
/*!**********************************************************************!*\
  !*** ./node_modules/coffeekraken-s-atv-card-component/dist/index.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _SAtvCardComponent = __webpack_require__(/*! ./js/SAtvCardComponent */ \"./node_modules/coffeekraken-s-atv-card-component/dist/js/SAtvCardComponent.js\");\n\nvar _SAtvCardComponent2 = _interopRequireDefault(_SAtvCardComponent);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = _SAtvCardComponent2.default.define('s-atv-card', _SAtvCardComponent2.default);\n\n//# sourceURL=webpack:///./node_modules/coffeekraken-s-atv-card-component/dist/index.js?");

/***/ }),

/***/ "./node_modules/coffeekraken-s-atv-card-component/dist/js/SAtvCardComponent.js":
/*!*************************************************************************************!*\
  !*** ./node_modules/coffeekraken-s-atv-card-component/dist/js/SAtvCardComponent.js ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n\tvalue: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if (\"value\" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };\n\nvar _SWebComponent2 = __webpack_require__(/*! coffeekraken-sugar/js/core/SWebComponent */ \"./node_modules/coffeekraken-sugar/js/core/SWebComponent.js\");\n\nvar _SWebComponent3 = _interopRequireDefault(_SWebComponent2);\n\nvar _prependChild = __webpack_require__(/*! coffeekraken-sugar/js/dom/prependChild */ \"./node_modules/coffeekraken-sugar/js/dom/prependChild.js\");\n\nvar _prependChild2 = _interopRequireDefault(_prependChild);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n/**\n * @name \tSAtvCardComponent\n * @extends \tSWebComponent\n * Create a nice apple tv card effect with a cool dynamic reflection effect.\n * @example \thtml\n * <s-atv-card>\n * \t<article class=\"card\">\n *  \t<h1 class=\"h3 m-b\">Hello World</h1>\n *  \t<p class=\"p p--lead m-b\">Sed vitae nunc ac arcu convallis blandit. Duis vel feugiat.</p>\n *  \t<p class=\"p\">Quisque feugiat erat non leo tincidunt viverra. Proin non massa quam. Nunc porta mauris at lectus lacinia congue. Suspendisse lorem turpis, euismod sed lectus sed, bibendum venenatis nunc. Duis at.</p>\n *  </article>\n * </s-atv-card>\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n\n/**\n * @name \tSAtvCardComponent\n * Create a nice apple tv card effect with a cool reflection effect.\n * @example \thtml\n * <style>\n * \ts-atv-card {\n *  \t\tmax-width: 400px;\n *  \t}\n * \t.card {\n * \t\tborder-radius: 5px;\n * \t\tcolor: white;\n * \t\ttext-shadow:rgba(0,0,0,.3) 1px 1px 3px;\n * \t\tbackground: linear-gradient(to left, #283048 , #859398);\n * \t\tbackground: #859398;\n * \t\tpadding: 40px;\n * \t}\n * </style>\n * <s-atv-card>\n * \t<article class=\"card\">\n *  \t<h1 class=\"h3 m-b\">Hello World</h1>\n *  \t<p class=\"p p--lead m-b\">Sed vitae nunc ac arcu convallis blandit. Duis vel feugiat.</p>\n *  \t<p class=\"p\">Quisque feugiat erat non leo tincidunt viverra. Proin non massa quam. Nunc porta mauris at lectus lacinia congue. Suspendisse lorem turpis, euismod sed lectus sed, bibendum venenatis nunc. Duis at.</p>\n *  </article>\n * </s-atv-card>\n *\n * @author \t\tOlivier Bossel <olivier.bossel@gmail.com>\n */\n\nvar SAtvCardComponent = function (_SWebComponent) {\n\t_inherits(SAtvCardComponent, _SWebComponent);\n\n\tfunction SAtvCardComponent() {\n\t\t_classCallCheck(this, SAtvCardComponent);\n\n\t\treturn _possibleConstructorReturn(this, (SAtvCardComponent.__proto__ || Object.getPrototypeOf(SAtvCardComponent)).apply(this, arguments));\n\t}\n\n\t_createClass(SAtvCardComponent, [{\n\t\tkey: 'componentWillMount',\n\n\n\t\t/**\n   * Component will mount\n  \t * @definition \t\tSWebComponent.componentWillMount\n   * @protected\n   */\n\t\tvalue: function componentWillMount() {\n\t\t\t_get(SAtvCardComponent.prototype.__proto__ || Object.getPrototypeOf(SAtvCardComponent.prototype), 'componentWillMount', this).call(this);\n\t\t\tthis._refs = {};\n\t\t}\n\n\t\t/**\n   * Mount component\n   * @definition \t\tSWebComponent.componentMount\n   * @protected\n   */\n\n\t}, {\n\t\tkey: 'componentMount',\n\t\tvalue: function componentMount() {\n\t\t\t_get(SAtvCardComponent.prototype.__proto__ || Object.getPrototypeOf(SAtvCardComponent.prototype), 'componentMount', this).call(this);\n\n\t\t\tvar layers = this.querySelectorAll('[' + this._componentNameDash + '-layer]'),\n\t\t\t    totalLayerElems = layers.length,\n\t\t\t    supportsTouch = 'ontouchstart' in window || navigator.msMaxTouchPoints;\n\n\t\t\tthis.classList.add(this._componentNameDash);\n\n\t\t\tthis._refs.card = this.querySelector('*:first-child');\n\n\t\t\tvar shineElm = this.querySelector(this._componentNameDash + '-shine');\n\t\t\tif (shineElm) {\n\t\t\t\tthis._refs.shine = shineElm;\n\t\t\t} else {\n\t\t\t\tvar shineHTML = this.ownerDocument.createElement('div');\n\t\t\t\tthis._refs.card.appendChild(shineHTML);\n\t\t\t\tthis._refs.shine = shineHTML;\n\t\t\t}\n\t\t\tthis._refs.shine.classList.add(this._componentNameDash + '-shine');\n\n\t\t\tthis.classList.add(this._componentNameDash + '-container');\n\t\t\tthis._refs.card.classList.add(this._componentNameDash + '-layer');\n\n\t\t\tvar w = this.clientWidth || this.offsetWidth || this.scrollWidth;\n\t\t\tthis.style.transform = 'perspective(' + (this.props.perspective || w * 3) + 'px)';\n\n\t\t\tif (supportsTouch) {\n\t\t\t\t// window.preventScroll = false;\n\t\t\t\t// this.addEventListener('touchmove', function(e){\n\t\t\t\t// \tif (window.preventScroll){\n\t\t\t\t// \t\te.preventDefault();\n\t\t\t\t// \t}\n\t\t\t\t// \tthis._processMovement(e,true);\n\t\t\t\t// });\n\t\t\t\t// this.addEventListener('touchstart', function(e){\n\t\t\t\t// \twindow.preventScroll = true;\n\t\t\t\t// \tthis._processEnter(e);\n\t\t\t\t// });\n\t\t\t\t// this.addEventListener('touchend', function(e){\n\t\t\t\t// \twindow.preventScroll = false;\n\t\t\t\t// \tthis._processExit(e);\n\t\t\t\t// });\n\t\t\t} else {\n\t\t\t\tthis.addEventListener('mousemove', function (e) {\n\t\t\t\t\tthis._processMovement(e, false);\n\t\t\t\t});\n\t\t\t\tthis.addEventListener('mouseenter', function (e) {\n\t\t\t\t\tthis._processEnter(e);\n\t\t\t\t});\n\t\t\t\tthis.addEventListener('mouseleave', function (e) {\n\t\t\t\t\tthis._processExit(e);\n\t\t\t\t});\n\t\t\t}\n\t\t}\n\t}, {\n\t\tkey: '_processMovement',\n\t\tvalue: function _processMovement(e, touchEnabled) {\n\n\t\t\tvar bdst = window.pageYOffset || this.ownerDocument.documentElement.scrollTop || this.ownerDocument.body.scrollTop || 0,\n\t\t\t    bdsl = window.pageXOffset || this.ownerDocument.documentElement.scrollLeft || this.ownerDocument.body.scrollLeft || 0,\n\t\t\t    pageX = touchEnabled ? e.touches[0].pageX : e.pageX,\n\t\t\t    pageY = touchEnabled ? e.touches[0].pageY : e.pageY,\n\t\t\t    offsets = this.getBoundingClientRect(),\n\t\t\t    w = this.clientWidth || this.offsetWidth || this.scrollWidth,\n\t\t\t    // width\n\t\t\th = this.clientHeight || this.offsetHeight || this.scrollHeight,\n\t\t\t    // height\n\t\t\twMultiple = 320 / w,\n\t\t\t    offsetX = 0.52 - (pageX - offsets.left - bdsl) / w,\n\t\t\t    //cursor position X\n\t\t\toffsetY = 0.52 - (pageY - offsets.top - bdst) / h,\n\t\t\t    //cursor position Y\n\t\t\tdy = pageY - offsets.top - bdst - h / 2,\n\t\t\t    //@h/2 = center of container\n\t\t\tdx = pageX - offsets.left - bdsl - w / 2,\n\t\t\t    //@w/2 = center of container\n\t\t\tyRotate = (offsetX - dx) * (0.07 * wMultiple),\n\t\t\t    //rotation for container Y\n\t\t\txRotate = (dy - offsetY) * (0.1 * wMultiple),\n\t\t\t    //rotation for container X\n\t\t\timgCSS = 'rotateX(' + xRotate * this.props.amount + 'deg) rotateY(' + yRotate * this.props.amount + 'deg)',\n\t\t\t    //img transform\n\t\t\tarad = Math.atan2(dy, dx),\n\t\t\t    //angle between cursor and center of container in RAD\n\t\t\tangle = arad * 180 / Math.PI - 90; //convert rad in degrees\n\n\t\t\t//get angle between 0-360\n\t\t\tif (angle < 0) {\n\t\t\t\tangle = angle + 360;\n\t\t\t}\n\n\t\t\t// apply the card transform\n\t\t\tthis._refs.card.style.transform = imgCSS;\n\n\t\t\t//gradient angle and opacity for shine\n\t\t\tthis._refs.shine.style.background = 'linear-gradient(' + angle + 'deg, rgba(255,255,255,' + (pageY - offsets.top - bdst) / h * 0.4 + ') 0%,rgba(255,255,255,0) 80%)';\n\t\t}\n\t}, {\n\t\tkey: '_processEnter',\n\t\tvalue: function _processEnter(e) {\n\t\t\tthis._refs.card.classList.add('over');\n\t\t}\n\t}, {\n\t\tkey: '_processExit',\n\t\tvalue: function _processExit(e) {\n\t\t\tthis._refs.card.classList.remove('over');\n\t\t\tthis._refs.card.style.transform = '';\n\t\t\tthis._refs.shine.style.cssText = '';\n\t\t}\n\t}], [{\n\t\tkey: 'defaultCss',\n\n\n\t\t/**\n   * Css\n   * @protected\n   */\n\t\tvalue: function defaultCss(componentName, componentNameDash) {\n\t\t\treturn '\\n\\t\\t\\t' + componentNameDash + ' {\\n\\t\\t\\t\\tdisplay : inline-block;\\n\\t\\t\\t}\\n\\t\\t\\t.' + componentNameDash + ' {\\n\\t\\t\\t\\ttransform-style: preserve-3d;\\n\\t\\t\\t\\t-webkit-tap-highlight-color: rgba(#000,0);\\n\\t\\t\\t}\\n\\t\\t\\t.' + componentNameDash + '-container {\\n\\t\\t\\t\\tposition: relative;\\n\\t\\t\\t\\ttransition: all 0.2s ease-out;\\n\\t\\t\\t}\\n\\t\\t\\t.' + componentNameDash + '-layer {\\n\\t\\t\\t\\tposition:relative;\\n\\t\\t\\t\\ttransition: all 0.1s ease-out;\\n\\t\\t\\t\\ttransform-style: preserve-3d;\\n\\t\\t\\t}\\n\\t\\t\\t.' + componentNameDash + '-shine {\\n\\t\\t\\t\\tposition: absolute;\\n\\t\\t\\t\\ttop: 0;\\n\\t\\t\\t\\tleft: 0;\\n\\t\\t\\t\\tright: 0;\\n\\t\\t\\t\\tbottom: 0;\\n\\t\\t\\t\\topacity:0;\\n\\t\\t\\t\\tbackground: linear-gradient(135deg, rgba(255,255,255,.25) 0%,rgba(255,255,255,0) 60%);\\n\\t\\t\\t\\ttransform:translate3d(0,0,1px);\\n\\t\\t\\t\\ttransform-style: preserve-3d;\\n\\t\\t\\t\\ttransition: opacity .2s ease-in-out;\\n\\t\\t\\t}\\n\\t\\t\\t' + componentNameDash + ':hover .' + componentNameDash + '-shine {\\n\\t\\t\\t\\topacity:1;\\n\\t\\t\\t}\\n\\t\\t';\n\t\t}\n\t}, {\n\t\tkey: 'defaultProps',\n\n\n\t\t/**\n   * Default props\n   * @definition \t\tSWebComponent.defaultProps\n   * @protected\n   */\n\t\tget: function get() {\n\t\t\treturn {\n\n\t\t\t\t/**\n     * Amount of effect to apply\n     * @prop\n     * @type\t{Number}\n     */\n\t\t\t\tamount: 1,\n\n\t\t\t\t/**\n     * Set the CSS perspective to use for the particular card.\n     * If not specified, will be calculated to apply something nice.\n     * @prop\n     * @type \t{Number}\n     */\n\t\t\t\tperspective: null\n\t\t\t};\n\t\t}\n\n\t\t/**\n   * Physical props\n   * @definition \t\tSWebComponent.physicalProps\n   * @protected\n   */\n\n\t}, {\n\t\tkey: 'physicalProps',\n\t\tget: function get() {\n\t\t\treturn [];\n\t\t}\n\t}]);\n\n\treturn SAtvCardComponent;\n}(_SWebComponent3.default);\n\nexports.default = SAtvCardComponent;\n\n//# sourceURL=webpack:///./node_modules/coffeekraken-s-atv-card-component/dist/js/SAtvCardComponent.js?");

/***/ })

}]);