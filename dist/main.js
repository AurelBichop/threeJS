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

/***/ "./scripts/index/Form.js":
/*!*******************************!*\
  !*** ./scripts/index/Form.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Form)\n/* harmony export */ });\nclass Form{\n    constructor(){\n        this.buttons = document.querySelectorAll(\".personnages button\");\n        this.form = document.querySelector(\"form\");\n        this.submitButton = document.querySelector(\"form button\");\n\n        this.vador = document.querySelector(\".vador\")\n        this.luke = document.querySelector(\".luke\")\n\n        this.inputs = document.getElementsByTagName(\"input\");\n        this.validatedInputs = [];\n\n        this.showForm();\n        this.checkInputsWithEvents();\n        this.goToFightPage();\n    }\n\n    showForm(){\n        for(let button of this.buttons)\n        {\n            button.addEventListener(\n                \"click\",\n                () => this.onClickButton(button)\n            );\n        }\n    }\n    \n    onClickButton(button){\n        \n        this.enebledHtmlElement(this.form);\n        this.form.classList.add(\"translate-null\")\n    \n        if (button.value == \"luke\"){\n            this.submitButton.classList.add(\"green-illumination\");\n            this.disabledHtmlElement(this.vador);\n        }else{\n            this.submitButton.classList.add(\"red-illumination\");\n            this.disabledHtmlElement(this.luke);\n        }\n    \n        localStorage.setItem(\"jediChoisi\", button.value)\n\n        this.checkInput();\n    }\n    \n    goToFightPage(){\n        this.submitButton.addEventListener(\n            \"click\",\n            this.onClicksubmitButton.bind(this)\n        )\n    }\n    \n    onClicksubmitButton(event){\n        event.preventDefault();\n        localStorage.setItem(\"pseudo\", this.inputs[0].value)\n        window.location.href = \"/combat.html\"\n    }\n    \n    checkInputsWithEvents(){\n        for(let input of this.inputs)\n        {\n            input.addEventListener('input',\n            () => this.onDetectChangeInput(input))\n        }\n    }\n    \n    checkInput(){\n        for(let input of this.inputs)\n        {\n            this.onDetectChangeInput(input);\n        }\n    }\n\n    onDetectChangeInput(input){\n        if(input.value != \"\" && !this.validatedInputs.includes(input)){\n            this.validatedInputs.push(input)\n        }else if(input.value == \"\" && this.validatedInputs.includes(input)){\n            this.validatedInputs = this.validatedInputs.filter(\n                elmt => input != elmt\n            );\n        }\n    \n        if(this.validatedInputs.length == this.inputs.length){\n            this.enabledHtmlElementVisible(this.submitButton);\n        };\n    }\n    \n    enabledHtmlElementVisible(htmlElement){\n        htmlElement.classList.remove('disabled-but-visible')\n    }\n    \n    disabledHtmlElement(htmlElement){\n        htmlElement.classList.add(\"disabled\");\n    }\n    \n    enebledHtmlElement(htmlElement){\n        htmlElement.classList.remove(\"disabled\");\n    }\n}\n\n//# sourceURL=webpack://threejs/./scripts/index/Form.js?");

/***/ }),

/***/ "./scripts/index/main.js":
/*!*******************************!*\
  !*** ./scripts/index/main.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Form_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Form.js */ \"./scripts/index/Form.js\");\n\n\nnew _Form_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack://threejs/./scripts/index/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/index/main.js");
/******/ 	
/******/ })()
;