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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction sendMessage(message, callback) {\n\tchrome.extension.sendMessage(message, callback);\n}\n\nsendMessage('test', function (res) {\n\tconsole.log(res);\n});\n\nfunction Menu() {\n\tthis.lastSelected = '';\n\tvar body = document.querySelector('body');\n\n\tbody.onmouseup = function (e) {\n\t\tmenu.onmouseup(e);\n\t};\n\n\tbody.onscroll = function () {\n\t\tmenu.hideMenu();\n\t};\n\n\tbody.onclick = function (e) {\n\t\tvar id = e.target.id;\n\t\tswitch (id) {\n\t\t\tcase 'menu-add':\n\t\t\t\tnote.add(this.lastSelected);\n\t\t\t\tbreak;\n\t\t}\n\t}.bind(this);\n\n\tthis.createMenu();\n}\n\nMenu.prototype.showMenu = function (x, y) {\n\tvar menu = this.getMenu();\n\tmenu.style.display = 'block';\n\tmenu.style.top = y + 'px';\n\tmenu.style.left = x + 'px';\n};\n\nMenu.prototype.hideMenu = function () {\n\tvar menu = this.getMenu();\n\tmenu.style.display = 'none';\n};\n\nMenu.prototype.createMenu = function () {\n\tvar menu = document.createElement('div');\n\tmenu.id = 'menu';\n\tmenu.style.display = 'block';\n\tmenu.style.position = 'fixed';\n\n\tmenu.innerHTML = '<div id=\"menu-add\">添加至摘录本</div>';\n\n\tdocument.querySelector('body').appendChild(menu);\n};\n\nMenu.prototype.getMenu = function () {\n\treturn document.querySelector('#menu');\n};\n\nMenu.prototype.onmouseup = function (e) {\n\n\tvar selectedText = window.getSelection().toString().trim();\n\tselectedText ? this.showMenu(e.x, e.y) : this.hideMenu();\n\tthis.lastSelected = selectedText || this.lastSelected;\n};\n\nfunction Note() {\n\tthis.notes = [];\n\n\tthis.createNote();\n}\n\nNote.prototype.createNote = function () {\n\tvar note = document.createElement('div');\n\tnote.id = 'note';\n\n\tdocument.querySelector('body').appendChild(note);\n};\n\nNote.prototype.getNote = function () {\n\treturn document.querySelector('#note');\n};\n\nNote.prototype.add = function (text) {\n\tthis.notes.push(text);\n\tthis.render();\n\tconsole.log('当前notes', this.notes);\n};\n\nNote.prototype.render = function () {\n\tvar html = '';\n\tthis.notes.forEach(function (note) {\n\t\thtml += '<p>' + note + '</p>';\n\t});\n\n\tthis.getNote().innerHTML = html;\n};\n\nvar menu = new Menu();\nvar note = new Note();//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanMvY29udGVudC5qcz83Y2UzIl0sIm5hbWVzIjpbInNlbmRNZXNzYWdlIiwibWVzc2FnZSIsImNhbGxiYWNrIiwiY2hyb21lIiwiZXh0ZW5zaW9uIiwicmVzIiwiY29uc29sZSIsImxvZyIsIk1lbnUiLCJsYXN0U2VsZWN0ZWQiLCJib2R5IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwib25tb3VzZXVwIiwiZSIsIm1lbnUiLCJvbnNjcm9sbCIsImhpZGVNZW51Iiwib25jbGljayIsImlkIiwidGFyZ2V0Iiwibm90ZSIsImFkZCIsImJpbmQiLCJjcmVhdGVNZW51IiwicHJvdG90eXBlIiwic2hvd01lbnUiLCJ4IiwieSIsImdldE1lbnUiLCJzdHlsZSIsImRpc3BsYXkiLCJ0b3AiLCJsZWZ0IiwiY3JlYXRlRWxlbWVudCIsInBvc2l0aW9uIiwiaW5uZXJIVE1MIiwiYXBwZW5kQ2hpbGQiLCJzZWxlY3RlZFRleHQiLCJ3aW5kb3ciLCJnZXRTZWxlY3Rpb24iLCJ0b1N0cmluZyIsInRyaW0iLCJOb3RlIiwibm90ZXMiLCJjcmVhdGVOb3RlIiwiZ2V0Tm90ZSIsInRleHQiLCJwdXNoIiwicmVuZGVyIiwiaHRtbCIsImZvckVhY2giXSwibWFwcGluZ3MiOiI7O0FBQUEsU0FBU0EsV0FBVCxDQUFxQkMsT0FBckIsRUFBOEJDLFFBQTlCLEVBQXdDO0FBQ3ZDQyxRQUFPQyxTQUFQLENBQWlCSixXQUFqQixDQUE2QkMsT0FBN0IsRUFBc0NDLFFBQXRDO0FBQ0E7O0FBRURGLFlBQVksTUFBWixFQUFvQixVQUFTSyxHQUFULEVBQWM7QUFDakNDLFNBQVFDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBLENBRkQ7O0FBSUEsU0FBU0csSUFBVCxHQUFnQjtBQUNmLE1BQUtDLFlBQUwsR0FBb0IsRUFBcEI7QUFDQSxLQUFJQyxPQUFPQyxTQUFTQyxhQUFULENBQXVCLE1BQXZCLENBQVg7O0FBRUFGLE1BQUtHLFNBQUwsR0FBaUIsVUFBU0MsQ0FBVCxFQUFZO0FBQzVCQyxPQUFLRixTQUFMLENBQWVDLENBQWY7QUFDQSxFQUZEOztBQUlBSixNQUFLTSxRQUFMLEdBQWdCLFlBQVc7QUFDMUJELE9BQUtFLFFBQUw7QUFDQSxFQUZEOztBQUlBUCxNQUFLUSxPQUFMLEdBQWUsVUFBU0osQ0FBVCxFQUFZO0FBQzFCLE1BQUlLLEtBQUtMLEVBQUVNLE1BQUYsQ0FBU0QsRUFBbEI7QUFDQSxVQUFRQSxFQUFSO0FBQ0MsUUFBSyxVQUFMO0FBQ0NFLFNBQUtDLEdBQUwsQ0FBUyxLQUFLYixZQUFkO0FBQ0E7QUFIRjtBQUtBLEVBUGMsQ0FPYmMsSUFQYSxDQU9SLElBUFEsQ0FBZjs7QUFTQSxNQUFLQyxVQUFMO0FBQ0E7O0FBRURoQixLQUFLaUIsU0FBTCxDQUFlQyxRQUFmLEdBQTBCLFVBQVNDLENBQVQsRUFBWUMsQ0FBWixFQUFlO0FBQ3hDLEtBQUliLE9BQU8sS0FBS2MsT0FBTCxFQUFYO0FBQ0FkLE1BQUtlLEtBQUwsQ0FBV0MsT0FBWCxHQUFxQixPQUFyQjtBQUNBaEIsTUFBS2UsS0FBTCxDQUFXRSxHQUFYLEdBQWlCSixJQUFJLElBQXJCO0FBQ0FiLE1BQUtlLEtBQUwsQ0FBV0csSUFBWCxHQUFrQk4sSUFBSSxJQUF0QjtBQUNBLENBTEQ7O0FBT0FuQixLQUFLaUIsU0FBTCxDQUFlUixRQUFmLEdBQTBCLFlBQVc7QUFDcEMsS0FBSUYsT0FBTyxLQUFLYyxPQUFMLEVBQVg7QUFDQWQsTUFBS2UsS0FBTCxDQUFXQyxPQUFYLEdBQXFCLE1BQXJCO0FBQ0EsQ0FIRDs7QUFLQXZCLEtBQUtpQixTQUFMLENBQWVELFVBQWYsR0FBNEIsWUFBVztBQUN0QyxLQUFJVCxPQUFPSixTQUFTdUIsYUFBVCxDQUF1QixLQUF2QixDQUFYO0FBQ0FuQixNQUFLSSxFQUFMLEdBQVUsTUFBVjtBQUNBSixNQUFLZSxLQUFMLENBQVdDLE9BQVgsR0FBcUIsT0FBckI7QUFDQWhCLE1BQUtlLEtBQUwsQ0FBV0ssUUFBWCxHQUFzQixPQUF0Qjs7QUFFQXBCLE1BQUtxQixTQUFMLEdBQWlCLGlDQUFqQjs7QUFFQXpCLFVBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0J5QixXQUEvQixDQUEyQ3RCLElBQTNDO0FBQ0EsQ0FURDs7QUFXQVAsS0FBS2lCLFNBQUwsQ0FBZUksT0FBZixHQUF5QixZQUFXO0FBQ25DLFFBQU9sQixTQUFTQyxhQUFULENBQXVCLE9BQXZCLENBQVA7QUFDQSxDQUZEOztBQUlBSixLQUFLaUIsU0FBTCxDQUFlWixTQUFmLEdBQTJCLFVBQVNDLENBQVQsRUFBWTs7QUFFdEMsS0FBSXdCLGVBQWVDLE9BQU9DLFlBQVAsR0FBc0JDLFFBQXRCLEdBQWlDQyxJQUFqQyxFQUFuQjtBQUNBSixnQkFBZSxLQUFLWixRQUFMLENBQWNaLEVBQUVhLENBQWhCLEVBQW1CYixFQUFFYyxDQUFyQixDQUFmLEdBQXlDLEtBQUtYLFFBQUwsRUFBekM7QUFDQSxNQUFLUixZQUFMLEdBQW9CNkIsZ0JBQWdCLEtBQUs3QixZQUF6QztBQUNBLENBTEQ7O0FBT0EsU0FBU2tDLElBQVQsR0FBZ0I7QUFDZixNQUFLQyxLQUFMLEdBQWEsRUFBYjs7QUFFQSxNQUFLQyxVQUFMO0FBQ0E7O0FBRURGLEtBQUtsQixTQUFMLENBQWVvQixVQUFmLEdBQTRCLFlBQVc7QUFDdEMsS0FBSXhCLE9BQU9WLFNBQVN1QixhQUFULENBQXVCLEtBQXZCLENBQVg7QUFDQWIsTUFBS0YsRUFBTCxHQUFVLE1BQVY7O0FBRUFSLFVBQVNDLGFBQVQsQ0FBdUIsTUFBdkIsRUFBK0J5QixXQUEvQixDQUEyQ2hCLElBQTNDO0FBQ0EsQ0FMRDs7QUFPQXNCLEtBQUtsQixTQUFMLENBQWVxQixPQUFmLEdBQXlCLFlBQVc7QUFDbkMsUUFBT25DLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBUDtBQUNBLENBRkQ7O0FBSUErQixLQUFLbEIsU0FBTCxDQUFlSCxHQUFmLEdBQXFCLFVBQVN5QixJQUFULEVBQWU7QUFDbkMsTUFBS0gsS0FBTCxDQUFXSSxJQUFYLENBQWdCRCxJQUFoQjtBQUNBLE1BQUtFLE1BQUw7QUFDQTNDLFNBQVFDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCLEtBQUtxQyxLQUE1QjtBQUNBLENBSkQ7O0FBTUFELEtBQUtsQixTQUFMLENBQWV3QixNQUFmLEdBQXdCLFlBQVc7QUFDbEMsS0FBSUMsT0FBTyxFQUFYO0FBQ0EsTUFBS04sS0FBTCxDQUFXTyxPQUFYLENBQW1CLFVBQVM5QixJQUFULEVBQWU7QUFDakM2QixVQUFRLFFBQVE3QixJQUFSLEdBQWUsTUFBdkI7QUFDQSxFQUZEOztBQUlBLE1BQUt5QixPQUFMLEdBQWVWLFNBQWYsR0FBMkJjLElBQTNCO0FBQ0EsQ0FQRDs7QUFVQSxJQUFJbkMsT0FBTyxJQUFJUCxJQUFKLEVBQVg7QUFDQSxJQUFJYSxPQUFPLElBQUlzQixJQUFKLEVBQVgiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImZ1bmN0aW9uIHNlbmRNZXNzYWdlKG1lc3NhZ2UsIGNhbGxiYWNrKSB7XG5cdGNocm9tZS5leHRlbnNpb24uc2VuZE1lc3NhZ2UobWVzc2FnZSwgY2FsbGJhY2spO1xufVxuXG5zZW5kTWVzc2FnZSgndGVzdCcsIGZ1bmN0aW9uKHJlcykge1xuXHRjb25zb2xlLmxvZyhyZXMpO1xufSk7XG5cbmZ1bmN0aW9uIE1lbnUoKSB7XG5cdHRoaXMubGFzdFNlbGVjdGVkID0gJyc7XG5cdHZhciBib2R5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xuXG5cdGJvZHkub25tb3VzZXVwID0gZnVuY3Rpb24oZSkge1xuXHRcdG1lbnUub25tb3VzZXVwKGUpO1xuXHR9O1xuXG5cdGJvZHkub25zY3JvbGwgPSBmdW5jdGlvbigpIHtcblx0XHRtZW51LmhpZGVNZW51KCk7XG5cdH07XG5cblx0Ym9keS5vbmNsaWNrID0gZnVuY3Rpb24oZSkge1xuXHRcdHZhciBpZCA9IGUudGFyZ2V0LmlkO1xuXHRcdHN3aXRjaCAoaWQpIHtcblx0XHRcdGNhc2UgJ21lbnUtYWRkJzpcblx0XHRcdFx0bm90ZS5hZGQodGhpcy5sYXN0U2VsZWN0ZWQpO1xuXHRcdFx0XHRicmVhaztcblx0XHR9XG5cdH0uYmluZCh0aGlzKTtcblxuXHR0aGlzLmNyZWF0ZU1lbnUoKTtcbn1cblxuTWVudS5wcm90b3R5cGUuc2hvd01lbnUgPSBmdW5jdGlvbih4LCB5KSB7XG5cdHZhciBtZW51ID0gdGhpcy5nZXRNZW51KCk7XG5cdG1lbnUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG5cdG1lbnUuc3R5bGUudG9wID0geSArICdweCc7XG5cdG1lbnUuc3R5bGUubGVmdCA9IHggKyAncHgnO1xufTtcblxuTWVudS5wcm90b3R5cGUuaGlkZU1lbnUgPSBmdW5jdGlvbigpIHtcblx0dmFyIG1lbnUgPSB0aGlzLmdldE1lbnUoKTtcblx0bWVudS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xufTtcblxuTWVudS5wcm90b3R5cGUuY3JlYXRlTWVudSA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgbWVudSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXHRtZW51LmlkID0gJ21lbnUnO1xuXHRtZW51LnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXHRtZW51LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcblxuXHRtZW51LmlubmVySFRNTCA9ICc8ZGl2IGlkPVwibWVudS1hZGRcIj7mt7vliqDoh7PmkZjlvZXmnKw8L2Rpdj4nO1xuXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKS5hcHBlbmRDaGlsZChtZW51KTtcbn07XG5cbk1lbnUucHJvdG90eXBlLmdldE1lbnUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtZW51Jyk7XG59O1xuXG5NZW51LnByb3RvdHlwZS5vbm1vdXNldXAgPSBmdW5jdGlvbihlKSB7XG5cblx0dmFyIHNlbGVjdGVkVGV4dCA9IHdpbmRvdy5nZXRTZWxlY3Rpb24oKS50b1N0cmluZygpLnRyaW0oKTtcblx0c2VsZWN0ZWRUZXh0ID8gdGhpcy5zaG93TWVudShlLngsIGUueSkgOiB0aGlzLmhpZGVNZW51KCk7XG5cdHRoaXMubGFzdFNlbGVjdGVkID0gc2VsZWN0ZWRUZXh0IHx8IHRoaXMubGFzdFNlbGVjdGVkO1xufTtcblxuZnVuY3Rpb24gTm90ZSgpIHtcblx0dGhpcy5ub3RlcyA9IFtdO1xuXG5cdHRoaXMuY3JlYXRlTm90ZSgpO1xufVxuXG5Ob3RlLnByb3RvdHlwZS5jcmVhdGVOb3RlID0gZnVuY3Rpb24oKSB7XG5cdHZhciBub3RlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cdG5vdGUuaWQgPSAnbm90ZSc7XG5cblx0ZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpLmFwcGVuZENoaWxkKG5vdGUpO1xufTtcblxuTm90ZS5wcm90b3R5cGUuZ2V0Tm90ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25vdGUnKTtcbn07XG5cbk5vdGUucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKHRleHQpIHtcblx0dGhpcy5ub3Rlcy5wdXNoKHRleHQpO1xuXHR0aGlzLnJlbmRlcigpO1xuXHRjb25zb2xlLmxvZygn5b2T5YmNbm90ZXMnLCB0aGlzLm5vdGVzKTtcbn07XG5cbk5vdGUucHJvdG90eXBlLnJlbmRlciA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgaHRtbCA9ICcnO1xuXHR0aGlzLm5vdGVzLmZvckVhY2goZnVuY3Rpb24obm90ZSkge1xuXHRcdGh0bWwgKz0gJzxwPicgKyBub3RlICsgJzwvcD4nO1xuXHR9KTtcblxuXHR0aGlzLmdldE5vdGUoKS5pbm5lckhUTUwgPSBodG1sO1xufTtcblxuXG52YXIgbWVudSA9IG5ldyBNZW51KCk7XG52YXIgbm90ZSA9IG5ldyBOb3RlKCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hcHAvanMvY29udGVudC5qcyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ })

/******/ });