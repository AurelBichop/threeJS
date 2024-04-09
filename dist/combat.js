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

/***/ "./scripts/combat/Attaque.js":
/*!***********************************!*\
  !*** ./scripts/combat/Attaque.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Attaque)\n/* harmony export */ });\nclass Attaque{\n    constructor(nom, energieNecessaire, degat,jeu){\n        this.nom = nom;\n        this.energieNecessaire = energieNecessaire;\n        this.degat = degat;\n        this.jeu = jeu\n    }\n\n    creerHtmlElement(htmlParent, classList){\n        this.button = document.createElement(\"button\");\n        this.button.textContent = `${this.nom} (${this.energieNecessaire} energie requise) (${this.degats} PV enlevé)`;\n        this.button.classList = classList;\n        htmlParent.appendChild(this.button)\n\n        this.addEventOnButton();\n    }\n\n    addEventOnButton(){\n        this.button.addEventListener('click',() => this.onClickOnButton())\n    }\n\n    onClickOnButton(){\n        this.jeu.personnage.attaquerPersonnage(\n            \"animation-attaque-left-right\",\n            this,\n            this.apresAttaquePersonnage.bind(this)\n        );\n\n    }\n\n    apresAttaquePersonnage(){\n        this.desactiverTousLesBoutons();\n        setTimeout(()=> {\n            this.jeu.ennemi.attaquerPersonnage(\n                \"animation-attaque-left-right\",\n                this.activerTousLesBoutons.bind(this)\n            );\n        }, 1000)\n    }\n\n    desactiverTousLesBoutons(){\n        for(let attaque of this.jeu.personnage.attaques){\n            attaque.button.classList.add(\"disabled-but-visible\");\n        }      \n    }\n\n    activerTousLesBoutons(){\n        for(let attaque of this.jeu.personnage.attaques){\n            attaque.button.classList.remove(\"disabled-but-visible\");\n        }  \n    }\n}\n\n//# sourceURL=webpack://threejs/./scripts/combat/Attaque.js?");

/***/ }),

/***/ "./scripts/combat/Ennemi.js":
/*!**********************************!*\
  !*** ./scripts/combat/Ennemi.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ennemi)\n/* harmony export */ });\n/* harmony import */ var _Personnage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Personnage.js */ \"./scripts/combat/Personnage.js\");\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utils.js */ \"./scripts/utils.js\");\n\n\n\nclass Ennemi extends _Personnage_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]{\nconstructor(\n    pointDeVie, \n    energie,\n    nom,\n    imageSource,\n    estDuCoteObscure,\n    jeu,\n    attaques,\n    estLePersoChoisi\n    ){\n        super(\n            pointDeVie, \n            energie,\n            nom,\n            imageSource,\n            estDuCoteObscure,\n            jeu,\n            attaques,\n            estLePersoChoisi,\n        );\n    }\n\n    selectionnerUneAttaque(){\n        // let rand = Math.random() * (this.attaques.length - 1);\n        // rand = Math.round(rand);\n        // return this.attaques[rand];\n    \n        this.attaques.sort((a,b)=>{\n            if(a.degat > b.degat){\n                return -1;\n            }else if(a.degat < b.degat){\n                return 1;\n            }else{\n                return 0;\n            }\n        })\n        \n        let attaqueSelectionnee = this.attaques[this.attaques.length -1];\n\n        for(let attaque of this.attaques){\n            if(attaque.energieNecessaire <= this.energie){\n                attaqueSelectionnee = attaque;\n                break;\n            }\n        }\n        return attaqueSelectionnee;\n    }\n    \n    attaquerPersonnage(animationName,callback){\n        const attaqueSlectionnee = this.selectionnerUneAttaque();\n\n        if(this.pointDeVie > 0 && this.energie >= attaqueSlectionnee.energieNecessaire){     \n            this.ajouteAnimationAttaque(animationName);\n            this.jeu.personnage.enleverDesPv(attaqueSlectionnee.degat);\n            this.diminuerEnergie(attaqueSlectionnee.energieNecessaire);\n            this.createInfoBox(attaqueSlectionnee);\n            setTimeout(() => {\n                this.removeTextAttaque();\n                if(this.jeu.personnage.pointDeVie > 0 &&\n                    this.jeu.personnage.energie >= this.jeu.personnage.energieMinimum\n                    ){\n                    callback();\n                }else if(this.jeu.personnage.pointDeVie > 0 &&\n                    this.energie >= attaqueSlectionnee.energieNecessaire){\n                    this.attaquerPersonnage(animationName, callback);\n                }else if(this.jeu.personnage.getPointDeViePourcentage() > this.getPointDeViePourcentage()){\n                    this.jeu.personnage.gagne();                   \n                }else{\n                    this.gagne();\n                }\n            }, 2000);\n        }else if(this.pointDeVie > 0 && this.energie >= this.energieMinimum){\n            this.attaquerPersonnage(animationName, callback);\n        }\n        else if(this.pointDeVie > 0){\n            this.createMessage(\"N'a pas assez d'énergie pour jouer.\")\n            setTimeout(\n                () => {\n                    this.removeMessage();\n                    callback();\n                },               \n                2000\n            )\n        }\n        else{\n            this.jeu.personnage.gagne();\n        }\n    }\n\n    removeTextAttaque(){\n        this.divPersonnage.removeChild(this.pNomAttaque)\n    }\n\n    removeMessage(){\n        this.divPersonnage.removeChild(this.message)\n    }\n\n    createInfoBox(attaqueSlectionnee){\n        this.pNomAttaque = document.createElement(\"p\");\n        this.pNomAttaque.textContent = `${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(this.jeu.ennemi.nom)} attaque ${(0,_utils_js__WEBPACK_IMPORTED_MODULE_1__.capitalize)(this.jeu.personnage.nom)} avec ${attaqueSlectionnee.nom}`;\n        this.divPersonnage.appendChild(this.pNomAttaque);\n    }\n\n    createMessage(message){\n        this.message = document.createElement(\"p\");\n        this.message.textContent = message;\n        this.divPersonnage.appendChild(this.message)\n    }\n}\n\n//# sourceURL=webpack://threejs/./scripts/combat/Ennemi.js?");

/***/ }),

/***/ "./scripts/combat/Jeu.js":
/*!*******************************!*\
  !*** ./scripts/combat/Jeu.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Jeu)\n/* harmony export */ });\n/* harmony import */ var _Attaque_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Attaque.js */ \"./scripts/combat/Attaque.js\");\n/* harmony import */ var _Personnage_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Personnage.js */ \"./scripts/combat/Personnage.js\");\n/* harmony import */ var _Ennemi_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Ennemi.js */ \"./scripts/combat/Ennemi.js\");\n\n\n\n\n\n\nclass Jeu {\n    \n    \n    constructor(){\n        const nomPersonnageChoisi = localStorage.getItem(\"jediChoisi\");\n        const estLuke = nomPersonnageChoisi == \"luke\";\n        const estVador = nomPersonnageChoisi == \"vador\";\n\n        if(estVador){\n            this.ennemi = this.createLuke(estLuke);\n            this.personnage = this.createVador(estVador);\n        }else{\n            this.ennemi = this.createVador(estVador);\n            this.personnage = this.createLuke(estLuke);\n        }\n        \n    }\n\n    createLuke(estLePersoChoisi){\n        let typePersonnage = estLePersoChoisi ? _Personnage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _Ennemi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        const luke = new typePersonnage(\n            100,\n            200,\n            \"luke\",\n            \"assets/luke.jpg\",\n            false,\n            this,\n            [\n                new _Attaque_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"salto\",70,40,this),\n                new _Attaque_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"tourni\",20,30,this),\n                new _Attaque_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('pointe',10,10,this)\n            ],\n            estLePersoChoisi\n        );\n\n        return luke;\n    }\n\n    createVador(estLePersoChoisi){\n        let typePersonnage = estLePersoChoisi ? _Personnage_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : _Ennemi_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"];\n        const vador =  new typePersonnage(\n            150,\n            150,\n            \"vador\",\n            \"assets/dark_vador.jpg\",\n            true,\n            this,\n            [\n                new _Attaque_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"force\",55,25,this),\n                new _Attaque_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](\"envoyer son sabre\",15,20,this),\n                new _Attaque_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('regard perçant',10,10,this)\n            ],\n            estLePersoChoisi\n        );\n\n        return vador;\n    }\n}\n\n//# sourceURL=webpack://threejs/./scripts/combat/Jeu.js?");

/***/ }),

/***/ "./scripts/combat/Personnage.js":
/*!**************************************!*\
  !*** ./scripts/combat/Personnage.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Personnage)\n/* harmony export */ });\n/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ \"./scripts/utils.js\");\n/* harmony import */ var _PopUp_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PopUp.js */ \"./scripts/combat/PopUp.js\");\n\n\n\nclass Personnage {\n    constructor(\n        pointDeVie, \n        energie,\n        nom,\n        imageSource,\n        estDuCoteObscure,\n        jeu,\n        attaques,\n        estLePersoChoisi,\n    ){\n        this.pointDeVie = pointDeVie;\n        this.initPointDevies = pointDeVie;\n        this.energie = energie;\n        this.initEnergie = energie;\n        this.imageSource = imageSource;\n        this.estDuCoteObscure = estDuCoteObscure;\n        this.jeu = jeu;\n        this.attaques = attaques;\n        this.estLePersoChoisi = estLePersoChoisi;\n        this.nom = nom;\n        this.energieMinimum;\n\n        this.creerHtmlBase(nom);\n        this.creerHtmlVie();\n        this.creerHtmlEnergie();\n        this.creerAttaques();\n    }\n\n    creerHtmlBase(nom){\n        this.divPersonnage = document.createElement(\"div\");\n        this.divPersonnage.classList.add(\"personnage\");\n        this.divPersonnage.classList.add(nom);\n\n        const divPersonnages = document.querySelector(\".personnages\");\n        divPersonnages.appendChild(this.divPersonnage);\n\n        if(this.estLePersoChoisi){\n            const pseudo = document.createElement(\"p\");\n            pseudo.textContent = localStorage.getItem(\"pseudo\");\n            pseudo.classList.add(\"pseudo\");\n            this.divPersonnage.appendChild(pseudo);\n        }else{\n            const div = document.createElement(\"div\");\n            div.classList.add(\"espace\");\n            this.divPersonnage.appendChild(div);\n        }\n\n        const img = document.createElement(\"img\");\n        img.src = this.imageSource;\n        img.alt = nom;\n        this.divPersonnage.appendChild(img);\n    }\n\n    creerHtmlVie(){\n        this.creerParagrapheVie();\n        const vieTotal = document.createElement(\"div\");\n        vieTotal.classList.add(\"total-bar\");\n        this.divVie = document.createElement(\"div\");\n        this.divVie.classList.add(\"vie\");\n        this.divVie.classList.add(\"niveau-bar\");\n        this.divPersonnage.appendChild(vieTotal);\n        vieTotal.appendChild(this.divVie);\n    }\n\n    creerHtmlEnergie(){\n        this.creerParagrapheEnergie();\n        const energieTotal = document.createElement(\"div\");\n        energieTotal.classList.add(\"total-bar\");\n        this.divEnergie = document.createElement(\"div\");\n        this.divEnergie.classList.add(\"energie\");\n        this.divEnergie.classList.add(\"niveau-bar\");\n        this.divPersonnage.appendChild(energieTotal);\n        energieTotal.appendChild(this.divEnergie);\n    }\n\n    creerAttaques(){\n\n        if(this.estLePersoChoisi){\n            this.creerParagraphe(\"Mes attaques\");\n\n            let classList;\n            if(this.estDuCoteObscure){\n                classList = [\"red-illumination\"];\n            }else{\n                classList = [\"green-illumination\"];\n            }\n\n            for(let attaque of this.attaques){\n                attaque.creerHtmlElement(this.divPersonnage, classList);\n\n                if(!this.energieMinimum || this.energieMinimum > attaque.energieNecessaire)\n                {\n                    this.energieMinimum = attaque.energieNecessaire \n                }\n            }\n            this.divPersonnage.classList.add('first');\n        }\n    }\n    \n    attaquerPersonnage(animationName,attaqueChoisi,callback){\n        if(\n            this.pointDeVie > 0 &&\n            this.energie >= attaqueChoisi.energieNecessaire\n            ){\n            this.ajouteAnimationAttaque(animationName);\n            this.jeu.ennemi.enleverDesPv(attaqueChoisi.degat);\n            this.diminuerEnergie(attaqueChoisi.energieNecessaire)\n            callback();\n        }else if(this.pointDeVie > 0 && this.energie >= this.energieMinimum){\n            new _PopUp_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"](\n                \"Tu n'a plus assez d'énergie pour effectuer cette attaque. Choisis-en une autre !\",\n                () => {}\n            );\n        }\n        else if(this.pointDeVie > 0){\n            callback();\n        }\n        else{\n            this.jeu.ennemi.gagne();\n        }\n    }\n\n    diminuerEnergie(energieAttaque){\n        const factor = 100 / this.initEnergie;\n        this.energie = this.energie - energieAttaque;\n        this.divEnergie.style.width = `calc(${this.energie * factor}% - var(--padding-vie))`;\n        this.modifierTextContentEnergie();\n    }\n\n    enleverDesPv(pointDeVie){\n        const factor = 100 / this.initPointDevies;\n        this.pointDeVie = this.pointDeVie - pointDeVie;\n        this.divVie.style.width = `calc(${this.pointDeVie * factor}% - var(--padding-vie))`;\n        this.modifierTextContentVie();\n    }\n\n    creerParagraphe(text){\n        const paragraphe = document.createElement(\"p\");\n        paragraphe.textContent = text;\n        this.divPersonnage.appendChild(paragraphe);\n    }\n\n    creerParagrapheVie(){\n        this.paragrapheVie = document.createElement(\"p\");\n        this.modifierTextContentVie();\n        this.divPersonnage.appendChild(this.paragrapheVie);\n    }\n\n    modifierTextContentVie(){\n        this.paragrapheVie.textContent = `Vie restante : ${this.pointDeVie} / ${this.initPointDevies}`;\n    }\n\n    creerParagrapheEnergie(){\n        this.paragrapheEnergie = document.createElement(\"p\");\n        this.modifierTextContentEnergie();\n        this.divPersonnage.appendChild(this.paragrapheEnergie);\n    }\n\n    modifierTextContentEnergie(){\n        this.paragrapheEnergie.textContent = `Energie restante : ${this.energie} / ${this.initEnergie}`;\n    }\n\n    ajouteAnimationAttaque(animationName){\n        this.divPersonnage.classList.add(animationName);\n\n        let duration = getComputedStyle(\n            document.body\n            ).getPropertyValue(\"--duration-animation-attaque\");\n\n        duration = duration.replace(\"ms\",\"\");\n        duration = parseInt(duration);\n\n        setTimeout(()=>{\n            this.enleveAnimationAttaque(animationName)   \n        },duration)\n    }\n\n\n    enleveAnimationAttaque(animationName){\n        this.divPersonnage.classList.remove(animationName);\n    }\n\n    gagne(){\n        const section = document.getElementsByTagName(\"section\")[0];\n        \n        const p = document.createElement(\"p\");\n        p.textContent = `${(0,_utils_js__WEBPACK_IMPORTED_MODULE_0__.capitalize)(this.nom)} a gagné !`;\n\n        section.appendChild(p);\n    }\n\n    getPointDeViePourcentage(){\n        return this.pointDeVie / this.initPointDevies\n    }\n}\n\n\n//# sourceURL=webpack://threejs/./scripts/combat/Personnage.js?");

/***/ }),

/***/ "./scripts/combat/PopUp.js":
/*!*********************************!*\
  !*** ./scripts/combat/PopUp.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ PopUp)\n/* harmony export */ });\nclass PopUp{\n    constructor(message, callback){\n        this.message = message;\n        this.callback = callback;\n\n        this.create();\n        this.addEventOnClickOK();\n    }\n\n    create(){\n        this.bg = document.createElement(\"div\");\n        this.bg.classList.add(\"pop-up-bg\");\n        document.body.appendChild(this.bg);\n\n        const div = document.createElement(\"div\");\n        div.classList.add(\"pop-up\")\n        this.bg.appendChild(div);\n\n        const p = document.createElement(\"p\");\n        p.textContent = this.message;\n        div.appendChild(p);\n\n        this.button = document.createElement(\"button\");\n        this.button.textContent = \"OK\";\n        div.appendChild(this.button);\n    }\n\n    addEventOnClickOK(){\n        this.button.addEventListener(\"click\", () => {\n            document.body.removeChild(this.bg);\n            this.callback();\n        });\n    }\n}\n\n//# sourceURL=webpack://threejs/./scripts/combat/PopUp.js?");

/***/ }),

/***/ "./scripts/combat/combat.js":
/*!**********************************!*\
  !*** ./scripts/combat/combat.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _Jeu_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Jeu.js */ \"./scripts/combat/Jeu.js\");\n\n\nnew _Jeu_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\n\n//# sourceURL=webpack://threejs/./scripts/combat/combat.js?");

/***/ }),

/***/ "./scripts/utils.js":
/*!**************************!*\
  !*** ./scripts/utils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   capitalize: () => (/* binding */ capitalize)\n/* harmony export */ });\nconst capitalize = (text) => {\n    return text[0].toUpperCase() + text.substring(1, text.length);\n}\n\n//# sourceURL=webpack://threejs/./scripts/utils.js?");

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
/******/ 	var __webpack_exports__ = __webpack_require__("./scripts/combat/combat.js");
/******/ 	
/******/ })()
;