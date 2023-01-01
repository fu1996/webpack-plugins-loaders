/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/a.js":
/*!******************!*\
  !*** ./src/a.js ***!
  \******************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('a');\n\n//# sourceURL=webpack:///./src/a.js?");

/***/ }),

/***/ "./src/c.json.js":
/*!***********************!*\
  !*** ./src/c.json.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('c json h5')\n\n//# sourceURL=webpack:///./src/c.json.js?");

/***/ }),

/***/ "./src/exclude-dir/2.js":
/*!******************************!*\
  !*** ./src/exclude-dir/2.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = ('2222');\n\n//# sourceURL=webpack:///./src/exclude-dir/2.js?");

/***/ }),

/***/ "./src/exclude-dir/index.js":
/*!**********************************!*\
  !*** ./src/exclude-dir/index.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./2 */ \"./src/exclude-dir/2.js\");\n\nconsole.log('exclude', _2__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n//# sourceURL=webpack:///./src/exclude-dir/index.js?");

/***/ }),

/***/ "./src/foo/foo.js":
/*!************************!*\
  !*** ./src/foo/foo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('fooooooo')\n\n//# sourceURL=webpack:///./src/foo/foo.js?");

/***/ }),

/***/ "./src/foo1.js":
/*!*********************!*\
  !*** ./src/foo1.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('foo1')\n\n//# sourceURL=webpack:///./src/foo1.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./a */ \"./src/a.js\");\n/* harmony import */ var _foo1__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./foo1 */ \"./src/foo1.js\");\n/* harmony import */ var _foo1__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_foo1__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _foo_foo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./foo/foo */ \"./src/foo/foo.js\");\n/* harmony import */ var _foo_foo__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_foo_foo__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _zoo_zoo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./zoo/zoo */ \"./src/zoo/zoo.js\");\n/* harmony import */ var _zoo_zoo__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_zoo_zoo__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _exclude_dir__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./exclude-dir */ \"./src/exclude-dir/index.js\");\n/* harmony import */ var _c_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./c.json */ \"./src/c.json.js\");\n/* harmony import */ var _c_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_c_json__WEBPACK_IMPORTED_MODULE_5__);\n// 文件级别的测试\n// 有h5\n\nconsole.log('2222',_a__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n// 无h5\n\n\n// 文件夹级别的测试\n// 有h5\n\n// 无h5\n\n\n// 测试 目录包含\n\n// 测试复合后缀\n\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/zoo/zoo.js":
/*!************************!*\
  !*** ./src/zoo/zoo.js ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("console.log('zoo.js')\n\n//# sourceURL=webpack:///./src/zoo/zoo.js?");

/***/ })

/******/ });