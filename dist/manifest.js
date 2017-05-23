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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = {\n\t\"manifest_version\": 2,\n\t\"name\": \"excerptor\",\n\t\"description\": \"网页摘录\",\n\t\"version\": \"1.0\",\n\t\"browser_action\": {\n\t\t\"default_popup\": \"popup.html\",\n\t\t\"default_title\": \"getting started!\"\n\t},\n\t\"permissions\": [\n\t\t\"activeTab\"\n\t],\n\t\"content_scripts\": [\n\t\t{\n\t\t\t\"matches\": [\n\t\t\t\t\"*://*/*\"\n\t\t\t],\n\t\t\t\"js\": [\n\t\t\t\t\"js/content.js\"\n\t\t\t],\n\t\t\t\"run_at\": \"document_end\",\n\t\t\t\"css\": [\n\t\t\t\t\"css/content.css\"\n\t\t\t]\n\t\t}\n\t],\n\t\"background\": {\n\t\t\"scripts\": [\n\t\t\t\"js/background.js\"\n\t\t]\n\t}\n};//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvbWFuaWZlc3QuanNvbj8zYWUwIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIwLmpzIiwic291cmNlc0NvbnRlbnQiOlsibW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwibWFuaWZlc3RfdmVyc2lvblwiOiAyLFxuXHRcIm5hbWVcIjogXCJleGNlcnB0b3JcIixcblx0XCJkZXNjcmlwdGlvblwiOiBcIue9kemhteaRmOW9lVwiLFxuXHRcInZlcnNpb25cIjogXCIxLjBcIixcblx0XCJicm93c2VyX2FjdGlvblwiOiB7XG5cdFx0XCJkZWZhdWx0X3BvcHVwXCI6IFwicG9wdXAuaHRtbFwiLFxuXHRcdFwiZGVmYXVsdF90aXRsZVwiOiBcImdldHRpbmcgc3RhcnRlZCFcIlxuXHR9LFxuXHRcInBlcm1pc3Npb25zXCI6IFtcblx0XHRcImFjdGl2ZVRhYlwiXG5cdF0sXG5cdFwiY29udGVudF9zY3JpcHRzXCI6IFtcblx0XHR7XG5cdFx0XHRcIm1hdGNoZXNcIjogW1xuXHRcdFx0XHRcIio6Ly8qLypcIlxuXHRcdFx0XSxcblx0XHRcdFwianNcIjogW1xuXHRcdFx0XHRcImpzL2NvbnRlbnQuanNcIlxuXHRcdFx0XSxcblx0XHRcdFwicnVuX2F0XCI6IFwiZG9jdW1lbnRfZW5kXCIsXG5cdFx0XHRcImNzc1wiOiBbXG5cdFx0XHRcdFwiY3NzL2NvbnRlbnQuY3NzXCJcblx0XHRcdF1cblx0XHR9XG5cdF0sXG5cdFwiYmFja2dyb3VuZFwiOiB7XG5cdFx0XCJzY3JpcHRzXCI6IFtcblx0XHRcdFwianMvYmFja2dyb3VuZC5qc1wiXG5cdFx0XVxuXHR9XG59O1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXBwL21hbmlmZXN0Lmpzb25cbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAyIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ })
/******/ ]);