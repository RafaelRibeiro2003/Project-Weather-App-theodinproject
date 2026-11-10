/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
(module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./images/pexels-john-callery.jpg */ \"./src/images/pexels-john-callery.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    margin: 0;\r\n    font-family: system-ui, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\r\n\r\n    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});\r\n    background-size: cover;\r\n    background-position: center;\r\n    background-repeat: no-repeat;\r\n    background-attachment: fixed;\r\n}\r\n\r\n.header {\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-between;\r\n  padding: 20px 40px;\r\n  background-color: #1992d4;\r\n}\r\n\r\n/*Logotipo*/\r\n.logo{\r\n    display: flex;\r\n    align-items: center;\r\n}\r\n\r\n.logo h1{\r\n    color: black;\r\n    font-size: 2.5rem;\r\n    font-weight: bold;\r\n    margin: 0%;\r\n}\r\n\r\n.logo img{\r\n    width: 100%;\r\n    max-width: 70px;\r\n    height: auto;\r\n    margin-right: 1rem;\r\n}\r\n\r\n/*Diplay search*/\r\n.display {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n\r\n    width: min(30rem, 90%);\r\n\r\n    margin: 10rem auto 0;\r\n    padding: 24px 0;\r\n    border-radius: 1rem;\r\n\r\n    background-color: #e3e8ef;\r\n}\r\n\r\n.display input{\r\n    height: 3rem;\r\n    width: 12rem;\r\n    padding: 0 1rem;\r\n\r\n    border: none;\r\n    outline: none;\r\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\r\n    box-sizing: border-box;\r\n}\r\n\r\n.display button{\r\n    height: 3rem;\r\n    width: 4rem;\r\n    background-color: #1992d4;\r\n    font-weight: bold;\r\n    border: none;\r\n    box-shadow: 0 3px 5px rgba(0, 0, 0, 0.2);\r\n\r\n}\r\n\r\n/*Diplay Weather*/\r\n.display.increase {\r\n    width: min(80rem, 92%);\r\n    margin: 4rem auto;\r\n    min-height: 45rem;\r\n    padding: clamp(1rem, 4vw, 2.5rem);\r\n}\r\n\r\n.displayWeather {\r\n    display: grid;\r\n    grid-template-columns: repeat(2, minmax(0, 1fr));\r\n    grid-template-rows: auto auto auto;\r\n    width: 100%;\r\n    gap: 1.5rem;\r\n}\r\n\r\n/*Display Location and Date*/\r\n.displayLocationWeather{\r\n    grid-area: 1 / 1 / 2 / 2;\r\n}\r\n\r\n.locationText{\r\n    font-size: 3rem;\r\n    font-weight: bold;\r\n    margin: 0rem;\r\n}\r\n\r\n.dateText{\r\n    font-size: 1.4rem;\r\n    margin: 0rem;\r\n}\r\n\r\n/*Display Search City*/\r\n.displaySearchWeather{\r\n    grid-area: 1 / 2 / 2 / 3;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    min-width: 0;\r\n}\r\n\r\n.display.increase form{\r\n    display: flex;\r\n    width: 100%;\r\n    max-width: 28rem;\r\n}\r\n\r\n.display.increase input{\r\n    height: 3.5rem;\r\n    width: 23rem;\r\n    flex: 1;\r\n    width: 100%;\r\n    min-width: 0;\r\n}\r\n\r\n.display.increase input::placeholder {\r\n  font-size: 1rem;\r\n}\r\n\r\n.display.increase button{\r\n    height: 3.5rem;\r\n    width: 5rem;\r\n    font-size: 1rem;\r\n}\r\n\r\n/*Display Temperature*/\r\n.displayTempWeather{\r\n    grid-area: 2 / 1 / 3 / 2;\r\n    display: flex;\r\n    align-items: flex-end;\r\n    min-width: 0;\r\n}\r\n\r\n.celsiusConditionsDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    padding-bottom: 2rem;\r\n    padding-left: 1rem;\r\n}\r\n\r\n.celsiusConditionsDiv p{\r\n    font-size: 1.6rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n\r\n.temperatureText{\r\n    font-size: clamp(3.5rem, 10vw, 8rem);\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n\r\n/*Display Image and Info*/\r\n.displayInfoWeather{\r\n    grid-area: 2 / 2 / 3 / 3;\r\n    display: flex;\r\n    justify-content: flex-end;\r\n    padding-bottom: 2rem;\r\n    gap: 1rem;\r\n    min-width: 0;\r\n}\r\n\r\n.infoTextsWeatherDiv{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-end;\r\n    margin-left: 2rem;\r\n}\r\n\r\n.infoTextsWeatherDiv p {\r\n    margin: 5px 0px;\r\n    font-size: 1.1rem;\r\n    font-weight: 600;\r\n    min-width: 0;\r\n    overflow-wrap: anywhere;\r\n\r\n}\r\n\r\n.displayInfoWeather img{\r\n    width: clamp(100px, 20vw, 250px);\r\n    height: auto;\r\n    object-fit: contain;\r\n    flex-shrink: 1;\r\n}\r\n\r\n\r\n/*Display Week*/\r\n.displayWeekWeather{\r\n    grid-area: 3 / 1 / 4 / 3;\r\n    width: 100%;\r\n}\r\n\r\n.displayDays {\r\n    display: grid;\r\n    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));\r\n    gap: 1rem;\r\n    width: 100%;\r\n}\r\n\r\n.dayDiv {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    text-align: center;\r\n\r\n    padding: 1.2rem 0.5rem;\r\n    border-radius: 1rem;\r\n\r\n    background-color: #d3dce8;\r\n}\r\n\r\n\r\n.dayDiv p:first-child {\r\n    font-size: 1.5rem;\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n\r\n.dayDiv p:nth-child(2) {\r\n    font-size: 1rem;\r\n    margin: 0.2rem 0 0.8rem;\r\n}\r\n\r\n.imgIconDay {\r\n    width: 140px;\r\n    height: 140px;\r\n    object-fit: contain;\r\n    margin: 0.5rem 0;\r\n}\r\n\r\n.dayDiv p:nth-child(4) {\r\n    font-size: 1.1rem;\r\n    font-weight: bold;\r\n    margin: 0.5rem 0;\r\n}\r\n\r\n.dayDiv p:nth-child(5) {\r\n    font-size: 1rem;\r\n    margin: 0;\r\n}\r\n\r\n\r\n/*Error*/\r\n.errorMessage {\r\n    color: #d32f2f;\r\n    font-size: 1rem;\r\n    font-weight: 600;\r\n    margin: 0.75rem 0 0;\r\n    font-weight: bold;\r\n}\r\n\r\n\r\n/*Animation*/\r\n.weather-animation {\r\n    animation: showWeather 0.6s ease forwards;\r\n}\r\n\r\n@keyframes showWeather {\r\n    from {\r\n        opacity: 0;\r\n        transform: translateY(20px);\r\n    }\r\n\r\n    to {\r\n        opacity: 1;\r\n        transform: translateY(0);\r\n    }\r\n}\r\n\r\n\r\n\r\n\r\n@media (max-width: 900px) {\r\n\r\n    .displayInfoWeather {\r\n        flex-direction: column;\r\n        justify-content: center;\r\n        align-items: center;\r\n        text-align: center;\r\n    }\r\n\r\n    .displayInfoWeather img {\r\n        width: clamp(100px, 25vw, 180px);\r\n    }\r\n\r\n    .displaySearchWeather {\r\n        grid-area: auto;\r\n        justify-content: center;\r\n    }\r\n\r\n    .displaySearchWeather form {\r\n        max-width: 100%;\r\n    }\r\n\r\n}`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://project_weather_app/./src/styles.css?./node_modules/css-loader/dist/cjs.js\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/api.js"
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
(module) {

eval("{\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://project_weather_app/./node_modules/css-loader/dist/runtime/api.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js"
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
(module) {

eval("{\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://project_weather_app/./node_modules/css-loader/dist/runtime/getUrl.js?\n}");

/***/ },

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js"
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
(module) {

eval("{\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://project_weather_app/./node_modules/css-loader/dist/runtime/noSourceMaps.js?\n}");

/***/ },

/***/ "./src/styles.css"
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\noptions.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://project_weather_app/./src/styles.css?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js"
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
(module) {

eval("{\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://project_weather_app/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js"
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
(module) {

eval("{\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://project_weather_app/./node_modules/style-loader/dist/runtime/insertBySelector.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js"
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://project_weather_app/./node_modules/style-loader/dist/runtime/insertStyleElement.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js"
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://project_weather_app/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js"
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://project_weather_app/./node_modules/style-loader/dist/runtime/styleDomAPI.js?\n}");

/***/ },

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js"
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
(module) {

eval("{\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://project_weather_app/./node_modules/style-loader/dist/runtime/styleTagTransform.js?\n}");

/***/ },

/***/ "./src/images/pexels-john-callery.jpg"
/*!********************************************!*\
  !*** ./src/images/pexels-john-callery.jpg ***!
  \********************************************/
(module, __unused_webpack_exports, __webpack_require__) {

eval("{module.exports = __webpack_require__.p + \"b619d9198e17a885260d.jpg\";\n\n//# sourceURL=webpack://project_weather_app/./src/images/pexels-john-callery.jpg?\n}");

/***/ },

/***/ "./src/components/api.js"
/*!*******************************!*\
  !*** ./src/components/api.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   getWeather: () => (/* binding */ getWeather)\n/* harmony export */ });\nconst getWeather = async (location) => {\r\n    try {\r\n        const response = await fetch('https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + location + '?unitGroup=metric');\r\n\r\n        const dataJson = await response.json();\r\n\r\n        return dataJson;\r\n    } catch(error){\r\n        console.error(error);  \r\n    }\r\n};\r\n\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_weather_app/./src/components/api.js?\n}");

/***/ },

/***/ "./src/components/dom.js"
/*!*******************************!*\
  !*** ./src/components/dom.js ***!
  \*******************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   displaySearchCity: () => (/* binding */ displaySearchCity)\n/* harmony export */ });\n/* harmony import */ var _api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./api.js */ \"./src/components/api.js\");\n/* harmony import */ var _weather_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather.js */ \"./src/components/weather.js\");\n\r\n\r\n\r\n\r\nconst displaySearchCity = async () => {\r\n    const display = document.createElement(\"div\");\r\n    display.classList.add(\"display\");\r\n\r\n    const titleDisplay = document.createElement(\"h1\");\r\n    titleDisplay.textContent = \"Get the Weather\";\r\n    \r\n    const form = document.createElement(\"form\");\r\n\r\n    const input = document.createElement(\"input\");\r\n    input.placeholder = \"Enter a city...\";\r\n\r\n    const button = document.createElement(\"button\");\r\n    button.textContent = \"Search\"\r\n\r\n    form.append(input, button);\r\n    display.append(titleDisplay, form);\r\n\r\n    const divContent = document.querySelector(\"#content\");\r\n    divContent.appendChild(display);\r\n\r\n    form.addEventListener(\"submit\", async (event) => {\r\n        handleSearch(event, input);\r\n    });\r\n};\r\n\r\n\r\nconst handleSearch = async (event, input) => {\r\n    event.preventDefault();\r\n\r\n    const location = input.value.trim();\r\n\r\n    if (!location) return;\r\n\r\n    const form = event.currentTarget;\r\n\r\n    try {\r\n        const data = await getData(location);\r\n        displayWeatherCity(data);\r\n        \r\n    } catch (error) {\r\n        console.error(error);\r\n        displayNotFindLocation(form);\r\n    }\r\n};\r\n\r\n\r\nconst getData = async (location) => {\r\n    const data = await (0,_api_js__WEBPACK_IMPORTED_MODULE_0__.getWeather)(location);\r\n    return new _weather_js__WEBPACK_IMPORTED_MODULE_1__.Weather(data);\r\n};\r\n\r\nconst displayNotFindLocation = (form) => {\r\n    const oldError = form.querySelector(\".errorMessage\");\r\n    if (oldError) oldError.remove();\r\n\r\n    const errorText = document.createElement(\"p\");\r\n    errorText.classList.add(\"errorMessage\");\r\n    errorText.textContent = \"City not found. Please try again.\";\r\n\r\n    form.appendChild(errorText);\r\n};\r\n\r\nconst displayWeatherCity = (dataWeather) => {\r\n    const display = document.querySelector(\".display\");\r\n    display.replaceChildren();\r\n    display.classList.add(\"increase\");\r\n\r\n    /* Divs*/\r\n    const displayWeather = document.createElement(\"div\");\r\n    displayWeather.classList.add(\"displayWeather\");\r\n    displayWeather.classList.add(\"weather-animation\");\r\n\r\n    const displayLocationWeatherDiv = document.createElement(\"div\");\r\n    displayLocationWeatherDiv.classList.add(\"displayLocationWeather\");\r\n    displayLocationWeather(displayLocationWeatherDiv, dataWeather.location, dataWeather.date);\r\n\r\n    const displaySearchWeatherDiv = document.createElement(\"div\");\r\n    displaySearchWeatherDiv.classList.add(\"displaySearchWeather\");\r\n    displaySearchWeather(displaySearchWeatherDiv);\r\n\r\n    const displayTempWeatherDiv = document.createElement(\"div\");\r\n    displayTempWeatherDiv.classList.add(\"displayTempWeather\");\r\n    displayTempWeather(displayTempWeatherDiv, dataWeather.temperature, dataWeather.conditions);\r\n\r\n    const displayInfoWeatherDiv = document.createElement(\"div\");\r\n    displayInfoWeatherDiv.classList.add(\"displayInfoWeather\");\r\n    displayInfoWeather(displayInfoWeatherDiv, dataWeather.icon, dataWeather.feelsLike, dataWeather.humidity, dataWeather.windSpeed, dataWeather.cloudiness);\r\n\r\n    const displayWeekWeatherDiv = document.createElement(\"div\");\r\n    displayWeekWeatherDiv.classList.add(\"displayWeekWeather\");\r\n    displayWeekWeather(displayWeekWeatherDiv, dataWeather.days);\r\n\r\n\r\n    displayWeather.append(displayLocationWeatherDiv, displaySearchWeatherDiv, displayTempWeatherDiv, displayInfoWeatherDiv, displayWeekWeatherDiv);\r\n    display.appendChild(displayWeather);\r\n\r\n};\r\n\r\n\r\n\r\nconst displayLocationWeather = (displayDiv, location, date) => {\r\n    const locationText = document.createElement(\"p\");\r\n    locationText.classList.add(\"locationText\");\r\n    locationText.textContent = location;\r\n    \r\n    const dateText = document.createElement(\"p\");\r\n    dateText.classList.add(\"dateText\");\r\n    dateText.textContent = date;\r\n\r\n    displayDiv.append(locationText, dateText);\r\n};\r\n\r\n\r\n\r\nconst displaySearchWeather = (displayDiv) => {\r\n   const form = document.createElement(\"form\");\r\n\r\n    const input = document.createElement(\"input\");\r\n    input.placeholder = \"Enter a city...\";\r\n\r\n    const button = document.createElement(\"button\");\r\n    button.textContent = \"Search\"\r\n\r\n    form.append(input, button);\r\n\r\n    form.addEventListener(\"submit\", async (event) => {\r\n        handleSearch(event, input);\r\n    });\r\n\r\n    displayDiv.appendChild(form);\r\n};\r\n\r\n\r\n\r\nconst displayTempWeather = (displayDiv, temperature, conditions) => {\r\n    const temperatureText = document.createElement(\"p\");\r\n    temperatureText.classList.add(\"temperatureText\");\r\n    temperatureText.textContent = temperature;\r\n\r\n    const celsiusConditionsDiv = document.createElement(\"div\");\r\n    celsiusConditionsDiv.classList.add(\"celsiusConditionsDiv\");\r\n\r\n    const celsiusText = document.createElement(\"p\");\r\n    celsiusText.textContent = '°C';\r\n\r\n    const conditionsText = document.createElement(\"p\");\r\n    conditionsText.textContent = conditions;\r\n\r\n    celsiusConditionsDiv.append(celsiusText, conditionsText);\r\n\r\n    displayDiv.append(temperatureText, celsiusConditionsDiv);\r\n};\r\n\r\n\r\nconst displayInfoWeather = (displayDiv, icon, feelsLike, humidity, windSpeed, cloudiness) => {\r\n    const iconImg = document.createElement(\"img\");\r\n    iconImg.src = `./images/icons/${icon}.svg`;\r\n    iconImg.alt = icon;\r\n\r\n    const infoTextsWeatherDiv = document.createElement(\"div\");\r\n    infoTextsWeatherDiv.classList.add(\"infoTextsWeatherDiv\");\r\n\r\n    const feelsLikeText = document.createElement(\"p\");\r\n    feelsLikeText.textContent = `Feels like: ${feelsLike}°C`;\r\n\r\n    const humidityText = document.createElement(\"p\");\r\n    humidityText.textContent = `Humidity: ${humidity}%`;\r\n\r\n    const windSpeedText = document.createElement(\"p\");\r\n    windSpeedText.textContent = `Wind: ${windSpeed} km/h`;\r\n\r\n    const cloudinessText = document.createElement(\"p\");\r\n    cloudinessText.textContent = `Cloudiness: ${cloudiness}%`;\r\n\r\n    infoTextsWeatherDiv.append(feelsLikeText, humidityText, windSpeedText, cloudinessText);\r\n    displayDiv.append(iconImg, infoTextsWeatherDiv);\r\n};\r\n\r\nconst displayWeekWeather = (displayDiv, data) => {\r\n    const displayDays = document.createElement(\"div\");\r\n    displayDays.classList.add(\"displayDays\");\r\n\r\n    for(let day of data.slice(1)){\r\n        const divDay = document.createElement(\"div\");\r\n        divDay.classList.add(\"dayDiv\");\r\n\r\n        const weekdayText = document.createElement(\"p\");\r\n        weekdayText.textContent = day.weekday;\r\n        \r\n        const dateText = document.createElement(\"p\");\r\n        dateText.textContent = day.date;\r\n\r\n        const imgIconDay = document.createElement(\"img\");\r\n        imgIconDay.classList.add(\"imgIconDay\");\r\n        imgIconDay.src = `./images/icons/${day.icon}.svg`;\r\n        imgIconDay.alt = day.conditions;\r\n\r\n        const tempText = document.createElement(\"p\");\r\n        tempText.textContent = `${Math.round(day.minTemperature)}° - ${Math.round(day.maxTemperature)}°`;\r\n\r\n        const conditionsText = document.createElement(\"p\");\r\n        conditionsText.textContent = day.conditions;\r\n\r\n\r\n        divDay.append(weekdayText, dateText, imgIconDay, tempText, conditionsText);\r\n        displayDays.appendChild(divDay);\r\n    };\r\n\r\n    displayDiv.appendChild(displayDays);\r\n};\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_weather_app/./src/components/dom.js?\n}");

/***/ },

/***/ "./src/components/weather.js"
/*!***********************************!*\
  !*** ./src/components/weather.js ***!
  \***********************************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Weather: () => (/* binding */ Weather)\n/* harmony export */ });\nclass Weather {\r\n    constructor(data) {\r\n        this.processWeatherData(data);\r\n    }\r\n\r\n    processWeatherData(data) {\r\n        const current = data.currentConditions;\r\n\r\n        this.location = data.resolvedAddress;\r\n\r\n        // Current weather\r\n        this.date = this.formatDate(\r\n            current.datetimeEpoch,\r\n            data.timezone\r\n        );\r\n\r\n        this.temperature = current.temp;\r\n        this.feelsLike = current.feelslike;\r\n        this.humidity = current.humidity;\r\n        this.cloudiness = current.cloudcover;\r\n        this.windSpeed = current.windspeed;\r\n        this.conditions = current.conditions;\r\n        this.icon = current.icon;\r\n\r\n        // Daily forecast\r\n        this.days = data.days.map(day => ({\r\n            ...this.formatDay(day.datetime),\r\n            temperature: day.temp,\r\n            maxTemperature: day.tempmax,\r\n            minTemperature: day.tempmin,\r\n            humidity: day.humidity,\r\n            windSpeed: day.windspeed,\r\n            conditions: day.conditions,\r\n            icon: day.icon,\r\n        }));\r\n    }\r\n\r\n    // Format current date and time\r\n    formatDate(timestamp, timezone) {\r\n        const date = new Date(timestamp * 1000);\r\n\r\n        return date.toLocaleString(\"en-GB\", {\r\n            timeZone: timezone,\r\n            weekday: \"long\",\r\n            day: \"numeric\",\r\n            month: \"long\",\r\n            hour: \"2-digit\",\r\n            minute: \"2-digit\"\r\n        });\r\n    }\r\n\r\n    // Format forecast dates\r\n    formatDay(date) {\r\n            const formattedDate = new Date(`${date}T12:00:00`);\r\n        return {\r\n            weekday: formattedDate.toLocaleDateString(\"en-GB\", {\r\n                weekday: \"long\"\r\n            }),\r\n\r\n            date: formattedDate.toLocaleDateString(\"en-GB\", {\r\n                day: \"numeric\",\r\n                month: \"long\"\r\n            })\r\n        };\r\n    }\r\n}\r\n\r\n\r\n\n\n//# sourceURL=webpack://project_weather_app/./src/components/weather.js?\n}");

/***/ },

/***/ "./src/index.js"
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _components_dom_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/dom.js */ \"./src/components/dom.js\");\n\r\n\r\n\r\n\r\n\r\nconsole.log(\"Weather App is running!\");\r\n(0,_components_dom_js__WEBPACK_IMPORTED_MODULE_1__.displaySearchCity)();\n\n//# sourceURL=webpack://project_weather_app/./src/index.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = (module) => {
/******/ 		const getter = module && module.__esModule ?
/******/ 			() => (module['default']) :
/******/ 			() => (module);
/******/ 		__webpack_require__.d(getter, { a: getter });
/******/ 		return getter;
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	__webpack_require__.g = (function() {
/******/ 		if (typeof globalThis === 'object') return globalThis;
/******/ 		try {
/******/ 			return this || new Function('return this')();
/******/ 		} catch (e) {
/******/ 			if (typeof window === 'object') return window;
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		let scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		const document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript?.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				const scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					let i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^https?:/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:|[?#].*$/g, "").replace(/\/[^/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = (typeof document !== 'undefined' && document.baseURI) || self.location.href;
/******/ 		
/******/ 		// no installed chunks
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	__webpack_require__.nc = undefined;
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	let __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;