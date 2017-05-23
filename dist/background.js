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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar count = 0;\n\n// 监听消息\nchrome.extension.onMessage.addListener(onMessage);\n\nfunction onMessage(request, sender, sendResponse) {\n\tswitch (request) {\n\t\tcase 'test':\n\t\t\tsendResponse(count++);\n\t\t\tbreak;\n\t}\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvYmFja2dyb3VuZC5qcz9mYTI0Il0sIm5hbWVzIjpbImNvdW50IiwiY2hyb21lIiwiZXh0ZW5zaW9uIiwib25NZXNzYWdlIiwiYWRkTGlzdGVuZXIiLCJyZXF1ZXN0Iiwic2VuZGVyIiwic2VuZFJlc3BvbnNlIl0sIm1hcHBpbmdzIjoiOztBQUFBLElBQUlBLFFBQVEsQ0FBWjs7QUFFQTtBQUNBQyxPQUFPQyxTQUFQLENBQWlCQyxTQUFqQixDQUEyQkMsV0FBM0IsQ0FBdUNELFNBQXZDOztBQUVBLFNBQVNBLFNBQVQsQ0FBbUJFLE9BQW5CLEVBQTRCQyxNQUE1QixFQUFvQ0MsWUFBcEMsRUFBa0Q7QUFDakQsU0FBUUYsT0FBUjtBQUNDLE9BQUssTUFBTDtBQUNDRSxnQkFBYVAsT0FBYjtBQUNBO0FBSEY7QUFLQSIsImZpbGUiOiIxLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGNvdW50ID0gMDtcblxuLy8g55uR5ZCs5raI5oGvXG5jaHJvbWUuZXh0ZW5zaW9uLm9uTWVzc2FnZS5hZGRMaXN0ZW5lcihvbk1lc3NhZ2UpO1xuXG5mdW5jdGlvbiBvbk1lc3NhZ2UocmVxdWVzdCwgc2VuZGVyLCBzZW5kUmVzcG9uc2UpIHtcblx0c3dpdGNoIChyZXF1ZXN0KSB7XG5cdFx0Y2FzZSAndGVzdCc6XG5cdFx0XHRzZW5kUmVzcG9uc2UoY291bnQrKyk7XG5cdFx0XHRicmVhaztcblx0fVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXBwL2pzL2JhY2tncm91bmQuanMiXSwic291cmNlUm9vdCI6IiJ9");

/***/ })
/******/ ]);