/*!
 * @georapbox/redux-create-reducer
 * Utility function to express Redux reducers as an object mapping from action types to action handlers.
 * 
 * @version v1.0.0
 * @author George Raptis <georapbox@gmail.com> (georapbox.github.io)
 * @homepage https://github.com/georapbox/redux-create-reducer#readme
 * @repository git+https://github.com/georapbox/redux-create-reducer.git
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("createReducer", [], factory);
	else if(typeof exports === 'object')
		exports["createReducer"] = factory();
	else
		root["createReducer"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createReducer;

var _isPlainObject = __webpack_require__(/*! ./utils/isPlainObject */ "./src/utils/isPlainObject.js");

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(/*! ./utils/warning */ "./src/utils/warning.js");

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isDev = false;

try {
  isDev = "development" === 'development';
} catch (error) {}

/**
 * Utility function to express Redux reducers as an object
 * mapping from action types to action handlers.

 * @param {*} initialState The initial state of the reducer.
 * @param {Object.<String, Function>} handlers A plain object mapping action types to action handlers.
 * @returns {Function} A function that returns the next state tree, given the current state tree and the action to handle.
 */
function createReducer(initialState, handlers) {
  if (!(0, _isPlainObject2.default)(handlers)) {
    throw new TypeError('Action handlers must be plain objects.');
  }

  if (isDev && handlers.undefined) {
    (0, _warning2.default)('A reducer contains an undefined action type. Have you misspelled a constant?');
  }

  return function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    if (Object.prototype.hasOwnProperty.call(handlers, action.type)) {
      var handler = handlers[action.type];

      if (typeof handler !== 'function') {
        throw new TypeError('Expected a function for action handler; instead got ' + (typeof handler === 'undefined' ? 'undefined' : _typeof(handler)));
      }

      return handler(state, action);
    }

    return state;
  };
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/isPlainObject.js":
/*!************************************!*\
  !*** ./src/utils/isPlainObject.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = isPlainObject;
/**
 * Check if the argument passed is a plain object.
 *
 * @param {*} obj The object to inspect.
 * @returns {Boolean} True if the argument appears to be a plain object; otherwise false.
 */
function isPlainObject(obj) {
  if ((typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) !== 'object' || obj === null) {
    return false;
  }

  var proto = obj;

  while (Object.getPrototypeOf(proto) !== null) {
    proto = Object.getPrototypeOf(proto);
  }

  return Object.getPrototypeOf(obj) === proto;
}
module.exports = exports['default'];

/***/ }),

/***/ "./src/utils/warning.js":
/*!******************************!*\
  !*** ./src/utils/warning.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console === 'undefined' || typeof console.warn !== 'function') {
    return;
  }
  console.warn(message);
  /* eslint-enable no-console */
}
module.exports = exports['default'];

/***/ })

/******/ });
});
//# sourceMappingURL=createReducer.js.map