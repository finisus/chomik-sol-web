"use strict";
(self["webpackChunkchomik_sol_web"] = self["webpackChunkchomik_sol_web"] || []).push([["index"],{

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./metadata/fonts/special-elite-regular.ttf */ "./src/metadata/fonts/special-elite-regular.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ./metadata/fonts/notepen.ttf */ "./src/metadata/fonts/notepen.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
  font-family: 'elite';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}
@font-face {
  font-family: 'notepen';
  src: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
}

:root {
  --text: #000000;
  --base: #ffffff;
  --baseTran: rgba(255, 255, 255, 0.1);
}

.background-blur {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.backdrop-shadow {
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),
                    0 22px 70px 4px rgba(0,0,0,0.55),
                    0 0 0 1px rgba(0, 0, 0, 0.0);
}

html { height: 100%; }
body {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: 0;
  padding: 0;
  overflow: hidden;

  font-size: 1rem;
  font-family: 'notepen';
  color: var(--text);
  
  background-color: var(--base);
}

header {
  z-index: 99;
  background-color: var(--base);
  border-bottom: 2px solid var(--text);
  position: fixed;
  top: 0;
  left: 0;
  width: 7480px;
  height: 48px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
header span {
  font-size: 1.5rem;
  transform: translate(-99%, 0);
  animation: moveRight 20s linear infinite;
}
@keyframes moveRight {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-3726px);
  }
}

main {
  z-index: 99;
  position: absolute;
  top: calc(50% - 48px);
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

main h1 {
  font-size: 5rem;
  text-shadow:
    2px 2px 0 #ffffff,
    -2px 2px 0 #ffffff,
    -2px -2px 0 #ffffff,
    2px -2px 0 #ffffff;
  cursor: none;
  -webkit-user-select: none; /* Safari */
  -ms-user-select: none; /* IE 10 and IE 11 */
  user-select: none; /* Standard syntax */
}

main .socials {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 16px;
  grid-row-gap: 16px; 
}
main .socials button {
  background: var(--baseTran);
  border: none;
  color: var(--text);
  font-family: 'notepen';
  font-size: 2.5rem;
  text-align: center;
  cursor: pointer;
  text-shadow:
    2px 2px 0 #ffffff,
    -2px 2px 0 #ffffff,
    -2px -2px 0 #ffffff,
    2px -2px 0 #ffffff;
}
main .socials button:hover {
  color: red;
}
main .socials button:active {
  color: var(--text);
}

footer {
  z-index: 99;
  background-color: var(--base);
  border-top: 2px solid var(--text);
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 64px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
}

#contract {
  font-size: 1.5rem;
  word-break: break-all;
  margin-left: 8px;
}
#copy-ca-button {
  color: var(--text);
  background-color: var(--base);
  border: 2px solid var(--text);
  font-family: 'notepen';
  font-size: 1.3rem;
  margin-right: 8px;
  cursor: pointer;
}
#copy-ca-button:hover {
  color: var(--base);
  background-color: var(--text);
  border: 2px solid var(--text);
}
#copy-ca-button:active{
  color: var(--text);
  background-color: var(--base);
  border: 2px solid var(--text); 
}

/* BACKGROUND */

#backdrop-static {
  z-index: -99;
  position: fixed;
  top: 48px;
  bottom: 64px;
  left: 0;
  right: 0;
}

.back1 {
  width: calc(100% + 32px);
  height: calc(100% + 32px);
  position: absolute;
  top: -16px;
  left: -16px;
}
.back2 {
  width: 64%;
  position: absolute;
  top: -24px;
  right: -48px;
}
.back3 {
  width: 48%;
  position: absolute;
  bottom: 0;
  left: 0;
}
.back4 {
  height: 25%;
  width: calc(100% + 32px);
  position: absolute;
  left: 0;
  top: 0;
}
.back5 {
  width: 64%;
  position: absolute;
  bottom: 0;
  right: -16px;
}
.back6 {
  width: 424px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.gif1 {
  position: absolute;
  width: 124px;
  top: 0;
  left: 0;
  transform: scaleX(-1);
  -webkit-transform: scaleX(-1);
}
.gif2 {
  position: absolute;
  width: 124px;
  bottom: 0;
  right: 0;
}
.gif3 {
  position: absolute;
  width: 100px;
  top: calc(50% - 50px);
  left: 0;
  transform: translate(0, -50%);
}
.gif4 {
  position: absolute;
  width: 100px;
  top: calc(50% + 50px);
  left: 0;
  transform: translate(0, -50%);
}

#backdrop-animation {
  position: fixed;
  top: 48px;
  left: 0;
  right: 0;
  bottom: 64px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(5, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
}
#backdrop-animation img {
  width: 100%;
  height: 100%;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"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","sourcesContent":["@font-face {\n  font-family: 'elite';\n  src: url('./metadata/fonts/special-elite-regular.ttf');\n}\n@font-face {\n  font-family: 'notepen';\n  src: url('./metadata/fonts/notepen.ttf');\n}\n\n:root {\n  --text: #000000;\n  --base: #ffffff;\n  --baseTran: rgba(255, 255, 255, 0.1);\n}\n\n.background-blur {\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n}\n\n.backdrop-shadow {\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0),\n                    0 22px 70px 4px rgba(0,0,0,0.55),\n                    0 0 0 1px rgba(0, 0, 0, 0.0);\n}\n\nhtml { height: 100%; }\nbody {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n\n  font-size: 1rem;\n  font-family: 'notepen';\n  color: var(--text);\n  \n  background-color: var(--base);\n}\n\nheader {\n  z-index: 99;\n  background-color: var(--base);\n  border-bottom: 2px solid var(--text);\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 7480px;\n  height: 48px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n}\nheader span {\n  font-size: 1.5rem;\n  transform: translate(-99%, 0);\n  animation: moveRight 20s linear infinite;\n}\n@keyframes moveRight {\n  0% {\n    transform: translateX(0);\n  }\n  100% {\n    transform: translateX(-3726px);\n  }\n}\n\nmain {\n  z-index: 99;\n  position: absolute;\n  top: calc(50% - 48px);\n  left: 50%;\n  transform: translate(-50%, -50%);\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\nmain h1 {\n  font-size: 5rem;\n  text-shadow:\n    2px 2px 0 #ffffff,\n    -2px 2px 0 #ffffff,\n    -2px -2px 0 #ffffff,\n    2px -2px 0 #ffffff;\n  cursor: none;\n  -webkit-user-select: none; /* Safari */\n  -ms-user-select: none; /* IE 10 and IE 11 */\n  user-select: none; /* Standard syntax */\n}\n\nmain .socials {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  grid-column-gap: 16px;\n  grid-row-gap: 16px; \n}\nmain .socials button {\n  background: var(--baseTran);\n  border: none;\n  color: var(--text);\n  font-family: 'notepen';\n  font-size: 2.5rem;\n  text-align: center;\n  cursor: pointer;\n  text-shadow:\n    2px 2px 0 #ffffff,\n    -2px 2px 0 #ffffff,\n    -2px -2px 0 #ffffff,\n    2px -2px 0 #ffffff;\n}\nmain .socials button:hover {\n  color: red;\n}\nmain .socials button:active {\n  color: var(--text);\n}\n\nfooter {\n  z-index: 99;\n  background-color: var(--base);\n  border-top: 2px solid var(--text);\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 64px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  gap: 8px;\n}\n\n#contract {\n  font-size: 1.5rem;\n  word-break: break-all;\n  margin-left: 8px;\n}\n#copy-ca-button {\n  color: var(--text);\n  background-color: var(--base);\n  border: 2px solid var(--text);\n  font-family: 'notepen';\n  font-size: 1.3rem;\n  margin-right: 8px;\n  cursor: pointer;\n}\n#copy-ca-button:hover {\n  color: var(--base);\n  background-color: var(--text);\n  border: 2px solid var(--text);\n}\n#copy-ca-button:active{\n  color: var(--text);\n  background-color: var(--base);\n  border: 2px solid var(--text); \n}\n\n/* BACKGROUND */\n\n#backdrop-static {\n  z-index: -99;\n  position: fixed;\n  top: 48px;\n  bottom: 64px;\n  left: 0;\n  right: 0;\n}\n\n.back1 {\n  width: calc(100% + 32px);\n  height: calc(100% + 32px);\n  position: absolute;\n  top: -16px;\n  left: -16px;\n}\n.back2 {\n  width: 64%;\n  position: absolute;\n  top: -24px;\n  right: -48px;\n}\n.back3 {\n  width: 48%;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n}\n.back4 {\n  height: 25%;\n  width: calc(100% + 32px);\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.back5 {\n  width: 64%;\n  position: absolute;\n  bottom: 0;\n  right: -16px;\n}\n.back6 {\n  width: 424px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.gif1 {\n  position: absolute;\n  width: 124px;\n  top: 0;\n  left: 0;\n  transform: scaleX(-1);\n  -webkit-transform: scaleX(-1);\n}\n.gif2 {\n  position: absolute;\n  width: 124px;\n  bottom: 0;\n  right: 0;\n}\n.gif3 {\n  position: absolute;\n  width: 100px;\n  top: calc(50% - 50px);\n  left: 0;\n  transform: translate(0, -50%);\n}\n.gif4 {\n  position: absolute;\n  width: 100px;\n  top: calc(50% + 50px);\n  left: 0;\n  transform: translate(0, -50%);\n}\n\n#backdrop-animation {\n  position: fixed;\n  top: 48px;\n  left: 0;\n  right: 0;\n  bottom: 64px;\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-template-rows: repeat(5, 1fr);\n  grid-column-gap: 0px;\n  grid-row-gap: 0px;\n}\n#backdrop-animation img {\n  width: 100%;\n  height: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _metadata_memes_backdrop_after_i_used_every_single_filtre_from_ibis_paint_v0_a21arw3v07eb1_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./metadata/memes/backdrop/after-i-used-every-single-filtre-from-ibis-paint-v0-a21arw3v07eb1.png */ "./src/metadata/memes/backdrop/after-i-used-every-single-filtre-from-ibis-paint-v0-a21arw3v07eb1.png");
/* harmony import */ var _metadata_memes_backdrop_EATEOT_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./metadata/memes/backdrop/EATEOT-HIGH-RES.webp */ "./src/metadata/memes/backdrop/EATEOT-HIGH-RES.webp");
/* harmony import */ var _metadata_memes_backdrop_GODLYSPIRIK_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./metadata/memes/backdrop/GODLYSPIRIK-HIGH-RES.webp */ "./src/metadata/memes/backdrop/GODLYSPIRIK-HIGH-RES.webp");
/* harmony import */ var _metadata_memes_backdrop_HyperionText_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./metadata/memes/backdrop/HyperionText-HIGH-RES.webp */ "./src/metadata/memes/backdrop/HyperionText-HIGH-RES.webp");
/* harmony import */ var _metadata_memes_backdrop_MentalCollapsing_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./metadata/memes/backdrop/MentalCollapsing-HIGH-RES.webp */ "./src/metadata/memes/backdrop/MentalCollapsing-HIGH-RES.webp");
/* harmony import */ var _metadata_memes_backdrop_OMEGA_T_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./metadata/memes/backdrop/OMEGA_T-HIGH-RES.webp */ "./src/metadata/memes/backdrop/OMEGA_T-HIGH-RES.webp");
/* harmony import */ var _metadata_memes_gifs_chomik_groovin_gif__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./metadata/memes/gifs/chomik-groovin.gif */ "./src/metadata/memes/gifs/chomik-groovin.gif");
/* harmony import */ var _metadata_memes_gifs_chomik_read_listen_camera_gif__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./metadata/memes/gifs/chomik-read-listen-camera.gif */ "./src/metadata/memes/gifs/chomik-read-listen-camera.gif");
/* harmony import */ var _metadata_memes_gifs_chomikuj_gif__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./metadata/memes/gifs/chomikuj.gif */ "./src/metadata/memes/gifs/chomikuj.gif");
/* harmony import */ var _metadata_memes_gifs_Uncanny_final_gif__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./metadata/memes/gifs/Uncanny_final.gif */ "./src/metadata/memes/gifs/Uncanny_final.gif");
/* harmony import */ var _metadata_memes_popping_1_webp__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./metadata/memes/popping/1.webp */ "./src/metadata/memes/popping/1.webp");
/* harmony import */ var _metadata_memes_popping_2_webp__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./metadata/memes/popping/2.webp */ "./src/metadata/memes/popping/2.webp");
/* harmony import */ var _metadata_memes_popping_3_webp__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./metadata/memes/popping/3.webp */ "./src/metadata/memes/popping/3.webp");
/* harmony import */ var _metadata_memes_popping_4_webp__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./metadata/memes/popping/4.webp */ "./src/metadata/memes/popping/4.webp");
/* harmony import */ var _metadata_memes_popping_5_png__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./metadata/memes/popping/5.png */ "./src/metadata/memes/popping/5.png");
/* harmony import */ var _metadata_memes_popping_6_webp__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./metadata/memes/popping/6.webp */ "./src/metadata/memes/popping/6.webp");
/* harmony import */ var _metadata_memes_popping_7_webp__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./metadata/memes/popping/7.webp */ "./src/metadata/memes/popping/7.webp");
/* harmony import */ var _metadata_memes_popping_8_webp__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./metadata/memes/popping/8.webp */ "./src/metadata/memes/popping/8.webp");
/* harmony import */ var _metadata_memes_popping_9_webp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./metadata/memes/popping/9.webp */ "./src/metadata/memes/popping/9.webp");
/* harmony import */ var _metadata_memes_popping_10_webp__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./metadata/memes/popping/10.webp */ "./src/metadata/memes/popping/10.webp");
/* harmony import */ var _metadata_memes_popping_11_webp__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./metadata/memes/popping/11.webp */ "./src/metadata/memes/popping/11.webp");
/* harmony import */ var _metadata_memes_popping_12_webp__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./metadata/memes/popping/12.webp */ "./src/metadata/memes/popping/12.webp");
/* harmony import */ var _metadata_memes_popping_13_webp__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./metadata/memes/popping/13.webp */ "./src/metadata/memes/popping/13.webp");
/* harmony import */ var _metadata_memes_popping_14_webp__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./metadata/memes/popping/14.webp */ "./src/metadata/memes/popping/14.webp");
/* harmony import */ var _metadata_memes_popping_15_jpeg__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./metadata/memes/popping/15.jpeg */ "./src/metadata/memes/popping/15.jpeg");
/* harmony import */ var _metadata_memes_popping_16_png__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./metadata/memes/popping/16.png */ "./src/metadata/memes/popping/16.png");
/* harmony import */ var _metadata_memes_popping_21_webp__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./metadata/memes/popping/21.webp */ "./src/metadata/memes/popping/21.webp");
/* harmony import */ var _metadata_memes_popping_18_webp__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./metadata/memes/popping/18.webp */ "./src/metadata/memes/popping/18.webp");
/* harmony import */ var _metadata_memes_popping_19_webp__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./metadata/memes/popping/19.webp */ "./src/metadata/memes/popping/19.webp");
/* harmony import */ var _metadata_memes_popping_20_webp__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./metadata/memes/popping/20.webp */ "./src/metadata/memes/popping/20.webp");
/* harmony import */ var _metadata_memes_popping_17_webp__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./metadata/memes/popping/17.webp */ "./src/metadata/memes/popping/17.webp");
/* harmony import */ var _metadata_memes_popping_22_jpg__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./metadata/memes/popping/22.jpg */ "./src/metadata/memes/popping/22.jpg");
/* harmony import */ var _metadata_memes_popping_23_webp__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./metadata/memes/popping/23.webp */ "./src/metadata/memes/popping/23.webp");
/* harmony import */ var _metadata_memes_popping_24_webp__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./metadata/memes/popping/24.webp */ "./src/metadata/memes/popping/24.webp");
/* harmony import */ var _metadata_memes_popping_25_webp__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./metadata/memes/popping/25.webp */ "./src/metadata/memes/popping/25.webp");









































// Header
const header = document.querySelector('header');

const dialogues = document.createElement('span');
dialogues.innerHTML = `looksl ike some lovecraftian horror
&nbsp; don't try it.
&nbsp; In an Alternate Universe: You found Verse Chomik!
&nbsp; even tho theyt had the most evil intentions, they werent as strong as the main antagonist: ULTIMITE CHOMIK >:)
&nbsp; looksl ike some lovecraftian horror
&nbsp; I'm sorry for all the sins I have committed creating this nightmare. Oh, and that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny
&nbsp; don't try it.
&nbsp; In an Alternate Universe: You found Verse Chomik!
&nbsp; even tho theyt had the most evil intentions, they werent as strong as the main antagonist: ULTIMITE CHOMIK >:)
&nbsp; I'm sorry for all the sins I have committed creating this nightmare. Oh, and that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny that was uncanny`;
header.appendChild(dialogues);

// Main
const main = document.querySelector('main');

const tickerH1 = document.createElement('h1');
tickerH1.innerHTML = `$CHOMIK`;
main.appendChild(tickerH1);

const socialsContainer = document.createElement('div');
socialsContainer.classList.add('socials');

const telegramBtn = document.createElement('button');
telegramBtn.id = "telegram-button";
telegramBtn.innerHTML = `TG`;
socialsContainer.appendChild(telegramBtn);

const twitterBtn = document.createElement('button');
twitterBtn.id = "twitter-button";
twitterBtn.innerHTML = `TWITTER`;
socialsContainer.appendChild(twitterBtn);

const chartBtn = document.createElement('button');
chartBtn.id = "chart-button";
chartBtn.innerHTML = `CHART`;
socialsContainer.appendChild(chartBtn);

const buyBtn = document.createElement('button');
buyBtn.id = "buy-button";
buyBtn.innerHTML = `BUY`;
socialsContainer.appendChild(buyBtn);

const buttons = [telegramBtn, twitterBtn, chartBtn, buyBtn];
buttons.forEach(button => {
  button.classList.add("background-blur");
});

main.appendChild(socialsContainer);

// Footer
const footer = document.querySelector('footer');

const contract = document.createElement('span');
contract.id = "contract";
contract.innerHTML = `EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v`;
footer.appendChild(contract);

const copyCaBtn = document.createElement('button');
copyCaBtn.id = "copy-ca-button";
copyCaBtn.innerHTML = `COPY CA`;

footer.appendChild(copyCaBtn);

// Background

const backdropStatic = document.getElementById('backdrop-static');

const back1 = document.createElement('img');
back1.classList.add("back1");
back1.src = _metadata_memes_backdrop_after_i_used_every_single_filtre_from_ibis_paint_v0_a21arw3v07eb1_png__WEBPACK_IMPORTED_MODULE_1__;
backdropStatic.appendChild(back1);

const back4 = document.createElement('img');
back4.classList.add("back4");
back4.src = _metadata_memes_backdrop_HyperionText_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_4__;
backdropStatic.appendChild(back4);

const back6 = document.createElement('img');
back6.classList.add("back6");
back6.src = _metadata_memes_backdrop_OMEGA_T_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_6__;
backdropStatic.appendChild(back6);

const back2 = document.createElement('img');
back2.classList.add("back2");
back2.src = _metadata_memes_backdrop_EATEOT_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_2__;
backdropStatic.appendChild(back2);

const back3 = document.createElement('img');
back3.classList.add("back3");
back3.src = _metadata_memes_backdrop_GODLYSPIRIK_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_3__;
backdropStatic.appendChild(back3);

const back5 = document.createElement('img');
back5.classList.add("back5");
back5.src = _metadata_memes_backdrop_MentalCollapsing_HIGH_RES_webp__WEBPACK_IMPORTED_MODULE_5__;
backdropStatic.appendChild(back5);

const gif1 = document.createElement('img');
gif1.classList.add("gif1");
gif1.src = _metadata_memes_gifs_chomik_groovin_gif__WEBPACK_IMPORTED_MODULE_7__;
backdropStatic.appendChild(gif1);

const gif2 = document.createElement('img');
gif2.classList.add("gif2");
gif2.src = _metadata_memes_gifs_chomik_read_listen_camera_gif__WEBPACK_IMPORTED_MODULE_8__;
backdropStatic.appendChild(gif2);

const gif3 = document.createElement('img');
gif3.classList.add("gif3");
gif3.src = _metadata_memes_gifs_chomikuj_gif__WEBPACK_IMPORTED_MODULE_9__;
backdropStatic.appendChild(gif3);

const gif4 = document.createElement('img');
gif4.classList.add("gif4");
gif4.src = _metadata_memes_gifs_Uncanny_final_gif__WEBPACK_IMPORTED_MODULE_10__;
backdropStatic.appendChild(gif4);

const backdropAnimation = document.getElementById('backdrop-animation');

const meme1 = document.createElement('img');
meme1.classList.add("meme1");
meme1.src = _metadata_memes_popping_1_webp__WEBPACK_IMPORTED_MODULE_11__;
backdropAnimation.appendChild(meme1);

const meme2 = document.createElement('img');
meme2.classList.add("meme2");
meme2.src = _metadata_memes_popping_2_webp__WEBPACK_IMPORTED_MODULE_12__;
backdropAnimation.appendChild(meme2);

const meme3 = document.createElement('img');
meme3.classList.add("meme3");
meme3.src = _metadata_memes_popping_3_webp__WEBPACK_IMPORTED_MODULE_13__;
backdropAnimation.appendChild(meme3);

const meme4 = document.createElement('img');
meme4.classList.add("meme4");
meme4.src = _metadata_memes_popping_4_webp__WEBPACK_IMPORTED_MODULE_14__;
backdropAnimation.appendChild(meme4);

const meme5 = document.createElement('img');
meme5.classList.add("meme5");
meme5.src = _metadata_memes_popping_5_png__WEBPACK_IMPORTED_MODULE_15__;
backdropAnimation.appendChild(meme5);

const meme6 = document.createElement('img');
meme6.classList.add("meme6");
meme6.src = _metadata_memes_popping_6_webp__WEBPACK_IMPORTED_MODULE_16__;
backdropAnimation.appendChild(meme6);

const meme7 = document.createElement('img');
meme7.classList.add("meme7");
meme7.src = _metadata_memes_popping_7_webp__WEBPACK_IMPORTED_MODULE_17__;
backdropAnimation.appendChild(meme7);

const meme8 = document.createElement('img');
meme8.classList.add("meme8");
meme8.src = _metadata_memes_popping_8_webp__WEBPACK_IMPORTED_MODULE_18__;
backdropAnimation.appendChild(meme8);

const meme9 = document.createElement('img');
meme9.classList.add("meme9");
meme9.src = _metadata_memes_popping_9_webp__WEBPACK_IMPORTED_MODULE_19__;
backdropAnimation.appendChild(meme9);

const meme10 = document.createElement('img');
meme10.classList.add("meme10");
meme10.src = _metadata_memes_popping_10_webp__WEBPACK_IMPORTED_MODULE_20__;
backdropAnimation.appendChild(meme10);

const meme11 = document.createElement('img');
meme11.classList.add("meme11");
meme11.src = _metadata_memes_popping_11_webp__WEBPACK_IMPORTED_MODULE_21__;
backdropAnimation.appendChild(meme11);

const meme12 = document.createElement('img');
meme12.classList.add("meme12");
meme12.src = _metadata_memes_popping_12_webp__WEBPACK_IMPORTED_MODULE_22__;
backdropAnimation.appendChild(meme12);

const meme13 = document.createElement('img');
meme13.classList.add("meme13");
meme13.src = _metadata_memes_popping_13_webp__WEBPACK_IMPORTED_MODULE_23__;
backdropAnimation.appendChild(meme13);

const meme14 = document.createElement('img');
meme14.classList.add("meme14");
meme14.src = _metadata_memes_popping_14_webp__WEBPACK_IMPORTED_MODULE_24__;
backdropAnimation.appendChild(meme14);

const meme15 = document.createElement('img');
meme15.classList.add("meme15");
meme15.src = _metadata_memes_popping_15_jpeg__WEBPACK_IMPORTED_MODULE_25__;
backdropAnimation.appendChild(meme15);

const meme16 = document.createElement('img');
meme16.classList.add("meme16");
meme16.src = _metadata_memes_popping_16_png__WEBPACK_IMPORTED_MODULE_26__;
backdropAnimation.appendChild(meme16);

const meme17 = document.createElement('img');
meme17.classList.add("meme17");
meme17.src = _metadata_memes_popping_21_webp__WEBPACK_IMPORTED_MODULE_27__;
backdropAnimation.appendChild(meme17);

const meme18 = document.createElement('img');
meme18.classList.add("meme18");
meme18.src = _metadata_memes_popping_18_webp__WEBPACK_IMPORTED_MODULE_28__;
backdropAnimation.appendChild(meme18);

const meme19 = document.createElement('img');
meme19.classList.add("meme19");
meme19.src = _metadata_memes_popping_19_webp__WEBPACK_IMPORTED_MODULE_29__;
backdropAnimation.appendChild(meme19);

const meme20 = document.createElement('img');
meme20.classList.add("meme20");
meme20.src = _metadata_memes_popping_20_webp__WEBPACK_IMPORTED_MODULE_30__;
backdropAnimation.appendChild(meme20);

const meme21 = document.createElement('img');
meme21.classList.add("meme21");
meme21.src = _metadata_memes_popping_17_webp__WEBPACK_IMPORTED_MODULE_31__;
backdropAnimation.appendChild(meme21);

const meme22 = document.createElement('img');
meme22.classList.add("meme22");
meme22.src = _metadata_memes_popping_22_jpg__WEBPACK_IMPORTED_MODULE_32__;
backdropAnimation.appendChild(meme22);

const meme23 = document.createElement('img');
meme23.classList.add("meme23");
meme23.src = _metadata_memes_popping_23_webp__WEBPACK_IMPORTED_MODULE_33__;
backdropAnimation.appendChild(meme23);

const meme24 = document.createElement('img');
meme24.classList.add("meme24");
meme24.src = _metadata_memes_popping_24_webp__WEBPACK_IMPORTED_MODULE_34__;
backdropAnimation.appendChild(meme24);

const meme25 = document.createElement('img');
meme25.classList.add("meme25");
meme25.src = _metadata_memes_popping_25_webp__WEBPACK_IMPORTED_MODULE_35__;
backdropAnimation.appendChild(meme25);

document.addEventListener('DOMContentLoaded', function() {

  // LINKS
  twitterBtn.addEventListener('click', function() {
    window.open('https://x.com/', '_blank');
  });

  telegramBtn.addEventListener('click', function() {
    window.open('https://t.me/', '_blank');
  });

  chartBtn.addEventListener('click', function() {
    window.open('https://dexscreener.com/solana/', '_blank');
  });

  buyBtn.addEventListener('click', function() {
    window.open('https://raydium.io/swap/?inputCurrency=sol&outputCurrency=', '_blank');
  });

  // COPY FUNCTION
  const copyButton = copyCaBtn;
  const textToCopy = "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v";
  copyButton.addEventListener("click", async () => {
    try {
      // Try the modern Clipboard API first (if supported)
      await navigator.clipboard.writeText(textToCopy);
      console.log("Text copied successfully using Clipboard API");
      alert("Contract copied successfully!");
    } catch (err) {
      // If Clipboard API fails, use the legacy approach
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      textArea.style.position = "fixed"; // Hide element off-screen
      textArea.style.left = "-9999px";
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      console.log("Text copied successfully using legacy approach");
      alert("Contract copied successfully!");
    }
  });

  const memesToPop = [meme1, meme2, meme3, meme4, meme5, meme6, meme7, meme8, meme9, meme10, meme11, meme12, meme13, meme14, meme15, meme16, meme17, meme18, meme19, meme20, meme21, meme22, meme23, meme24, meme25];

  let currentIndex = null;
  function getRandomIndex() {
    return Math.floor(Math.random() * memesToPop.length);
  }
  function showRandomMeme() {
    if (currentIndex !== null) {
      memesToPop[currentIndex].style.opacity = '0.0';
    }

    let newIndex = getRandomIndex();

    while (newIndex === currentIndex) {
      newIndex = getRandomIndex();
    }
    
    memesToPop[newIndex].style.opacity = '1.0';
    currentIndex = newIndex;
  }

  // Initially hide all memes
  memesToPop.forEach(meme => {
    meme.style.opacity = '0.0';
  });
  // Show a random meme every 1/3 second
  setInterval(showRandomMeme, 333);
});

/***/ }),

/***/ "./src/metadata/memes/backdrop/EATEOT-HIGH-RES.webp":
/*!**********************************************************!*\
  !*** ./src/metadata/memes/backdrop/EATEOT-HIGH-RES.webp ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2a260ea9d342465fde30.webp";

/***/ }),

/***/ "./src/metadata/memes/backdrop/GODLYSPIRIK-HIGH-RES.webp":
/*!***************************************************************!*\
  !*** ./src/metadata/memes/backdrop/GODLYSPIRIK-HIGH-RES.webp ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f63fd99b4c9754628e61.webp";

/***/ }),

/***/ "./src/metadata/memes/backdrop/HyperionText-HIGH-RES.webp":
/*!****************************************************************!*\
  !*** ./src/metadata/memes/backdrop/HyperionText-HIGH-RES.webp ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d8c4f5e51479367ec748.webp";

/***/ }),

/***/ "./src/metadata/memes/backdrop/MentalCollapsing-HIGH-RES.webp":
/*!********************************************************************!*\
  !*** ./src/metadata/memes/backdrop/MentalCollapsing-HIGH-RES.webp ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3240904c5a04141575d3.webp";

/***/ }),

/***/ "./src/metadata/memes/backdrop/OMEGA_T-HIGH-RES.webp":
/*!***********************************************************!*\
  !*** ./src/metadata/memes/backdrop/OMEGA_T-HIGH-RES.webp ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f6b8f1cc4fad392c9d6a.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/1.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/1.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "5764fab71782ada604d7.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/10.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/10.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6828e4ee61c619d51ca3.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/11.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/11.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d48c57915517166daba6.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/12.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/12.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "62a408165dc951f1fa27.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/13.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/13.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "635ccca26c5a80e857ee.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/14.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/14.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c297ca7c95ec332e16c1.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/17.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/17.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fb17a84d5f934fddd838.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/18.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/18.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a0bbb8bda71e2c2f4851.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/19.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/19.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b7ccec5da0d8c3b912fe.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/2.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/2.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3ba4f527d92ac19e18de.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/20.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/20.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f72b93d21c96803c2070.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/21.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/21.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "2b4ff9be80733cddbc25.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/23.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/23.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0bcc0df357dee1740e4c.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/24.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/24.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b34d9033683f4e5fa9cf.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/25.webp":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/25.webp ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "68970f4756eddbb23ea4.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/3.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/3.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "c086d37ca999b82da93c.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/4.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/4.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0f397f5b57e3f6557814.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/6.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/6.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "098a2a7edfac3de53e0a.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/7.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/7.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "4a0ef82463381df2e792.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/8.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/8.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "153821a108dac9780005.webp";

/***/ }),

/***/ "./src/metadata/memes/popping/9.webp":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/9.webp ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "85b8c4d5635c93f74fef.webp";

/***/ }),

/***/ "./src/metadata/fonts/notepen.ttf":
/*!****************************************!*\
  !*** ./src/metadata/fonts/notepen.ttf ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "468f20ddaa71363d16db.ttf";

/***/ }),

/***/ "./src/metadata/fonts/special-elite-regular.ttf":
/*!******************************************************!*\
  !*** ./src/metadata/fonts/special-elite-regular.ttf ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "cefed1373df28714f8e5.ttf";

/***/ }),

/***/ "./src/metadata/memes/backdrop/after-i-used-every-single-filtre-from-ibis-paint-v0-a21arw3v07eb1.png":
/*!***********************************************************************************************************!*\
  !*** ./src/metadata/memes/backdrop/after-i-used-every-single-filtre-from-ibis-paint-v0-a21arw3v07eb1.png ***!
  \***********************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "bae284a6b5957d55441f.png";

/***/ }),

/***/ "./src/metadata/memes/gifs/Uncanny_final.gif":
/*!***************************************************!*\
  !*** ./src/metadata/memes/gifs/Uncanny_final.gif ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "8501bc121b91cdf1c05b.gif";

/***/ }),

/***/ "./src/metadata/memes/gifs/chomik-groovin.gif":
/*!****************************************************!*\
  !*** ./src/metadata/memes/gifs/chomik-groovin.gif ***!
  \****************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "79674a91291189026115.gif";

/***/ }),

/***/ "./src/metadata/memes/gifs/chomik-read-listen-camera.gif":
/*!***************************************************************!*\
  !*** ./src/metadata/memes/gifs/chomik-read-listen-camera.gif ***!
  \***************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "0a8e31a23bee47294240.gif";

/***/ }),

/***/ "./src/metadata/memes/gifs/chomikuj.gif":
/*!**********************************************!*\
  !*** ./src/metadata/memes/gifs/chomikuj.gif ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "82dba0e08507429caa78.gif";

/***/ }),

/***/ "./src/metadata/memes/popping/15.jpeg":
/*!********************************************!*\
  !*** ./src/metadata/memes/popping/15.jpeg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "6c2df8680f90c5948e26.jpeg";

/***/ }),

/***/ "./src/metadata/memes/popping/16.png":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/16.png ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "588fff470f2d6c4a1282.png";

/***/ }),

/***/ "./src/metadata/memes/popping/22.jpg":
/*!*******************************************!*\
  !*** ./src/metadata/memes/popping/22.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "de65d850aa57f476a29f.jpg";

/***/ }),

/***/ "./src/metadata/memes/popping/5.png":
/*!******************************************!*\
  !*** ./src/metadata/memes/popping/5.png ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "fbd370facb611176fe21.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUMwRztBQUNqQjtBQUNPO0FBQ2hHLDRDQUE0QyxpS0FBNkQ7QUFDekcsNENBQTRDLHFJQUErQztBQUMzRiw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEUseUNBQXlDLHNGQUErQjtBQUN4RTtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDtBQUNBO0FBQ0E7QUFDQSxhQUFhLG1DQUFtQztBQUNoRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3Qix5QkFBeUI7QUFDekIscUJBQXFCO0FBQ3JCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMsT0FBTyxnRkFBZ0YsWUFBWSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLE1BQU0sT0FBTyxPQUFPLG9CQUFvQixNQUFNLFlBQVksV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsYUFBYSxXQUFXLFlBQVksY0FBYyxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLEtBQUssWUFBWSxNQUFNLEtBQUssWUFBWSxNQUFNLE1BQU0sS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxRQUFRLE9BQU8sV0FBVyxzQkFBc0IseUJBQXlCLHlCQUF5QixPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxXQUFXLFFBQVEsT0FBTyxNQUFNLEtBQUssVUFBVSxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLGFBQWEsYUFBYSxhQUFhLFdBQVcsTUFBTSxLQUFLLFlBQVksYUFBYSxhQUFhLE1BQU0sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLFdBQVcsS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLEtBQUssS0FBSyxVQUFVLFlBQVksYUFBYSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsS0FBSyxLQUFLLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsVUFBVSxZQUFZLGFBQWEsTUFBTSxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsS0FBSyxLQUFLLFlBQVksV0FBVyxZQUFZLFdBQVcsWUFBWSxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxhQUFhLE1BQU0s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QUNBLFlBQVksZ0ZBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksMkVBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksMEVBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksK0VBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksb0ZBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFdBQVcsb0VBQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFdBQVcsK0VBQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFdBQVcsOERBQU87QUFDbEI7O0FBRUE7QUFDQTtBQUNBLFdBQVcsb0VBQU87QUFDbEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksMkRBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLFlBQVksNERBQVE7QUFDcEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNERBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNERBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7QUFDQTtBQUNBLGFBQWEsNkRBQVM7QUFDdEI7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hvbWlrLXNvbC13ZWIvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2Nob21pay1zb2wtd2ViLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9jaG9taWstc29sLXdlYi8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vY2hvbWlrLXNvbC13ZWIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9jaG9taWstc29sLXdlYi8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9jaG9taWstc29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9jaG9taWstc29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vY2hvbWlrLXNvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vY2hvbWlrLXNvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vY2hvbWlrLXNvbC13ZWIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9jaG9taWstc29sLXdlYi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2Nob21pay1zb2wtd2ViLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL21ldGFkYXRhL2ZvbnRzL3NwZWNpYWwtZWxpdGUtcmVndWxhci50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCIuL21ldGFkYXRhL2ZvbnRzL25vdGVwZW4udHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnZWxpdGUnO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ25vdGVwZW4nO1xuICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbn1cblxuOnJvb3Qge1xuICAtLXRleHQ6ICMwMDAwMDA7XG4gIC0tYmFzZTogI2ZmZmZmZjtcbiAgLS1iYXNlVHJhbjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjEpO1xufVxuXG4uYmFja2dyb3VuZC1ibHVyIHtcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xuICAtd2Via2l0LWJhY2tkcm9wLWZpbHRlcjogYmx1cigyMHB4KTtcbn1cblxuLmJhY2tkcm9wLXNoYWRvdyB7XG4gIGJveC1zaGFkb3c6IGluc2V0IDAgMXB4IDAgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjApLFxuICAgICAgICAgICAgICAgICAgICAwIDIycHggNzBweCA0cHggcmdiYSgwLDAsMCwwLjU1KSxcbiAgICAgICAgICAgICAgICAgICAgMCAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4wKTtcbn1cblxuaHRtbCB7IGhlaWdodDogMTAwJTsgfVxuYm9keSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgZm9udC1zaXplOiAxcmVtO1xuICBmb250LWZhbWlseTogJ25vdGVwZW4nO1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbn1cblxuaGVhZGVyIHtcbiAgei1pbmRleDogOTk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UpO1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tdGV4dCk7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB3aWR0aDogNzQ4MHB4O1xuICBoZWlnaHQ6IDQ4cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuaGVhZGVyIHNwYW4ge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTk5JSwgMCk7XG4gIGFuaW1hdGlvbjogbW92ZVJpZ2h0IDIwcyBsaW5lYXIgaW5maW5pdGU7XG59XG5Aa2V5ZnJhbWVzIG1vdmVSaWdodCB7XG4gIDAlIHtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMCk7XG4gIH1cbiAgMTAwJSB7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC0zNzI2cHgpO1xuICB9XG59XG5cbm1haW4ge1xuICB6LWluZGV4OiA5OTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IGNhbGMoNTAlIC0gNDhweCk7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG5tYWluIGgxIHtcbiAgZm9udC1zaXplOiA1cmVtO1xuICB0ZXh0LXNoYWRvdzpcbiAgICAycHggMnB4IDAgI2ZmZmZmZixcbiAgICAtMnB4IDJweCAwICNmZmZmZmYsXG4gICAgLTJweCAtMnB4IDAgI2ZmZmZmZixcbiAgICAycHggLTJweCAwICNmZmZmZmY7XG4gIGN1cnNvcjogbm9uZTtcbiAgLXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTsgLyogU2FmYXJpICovXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTsgLyogSUUgMTAgYW5kIElFIDExICovXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cbn1cblxubWFpbiAuc29jaWFscyB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XG4gIGdyaWQtY29sdW1uLWdhcDogMTZweDtcbiAgZ3JpZC1yb3ctZ2FwOiAxNnB4OyBcbn1cbm1haW4gLnNvY2lhbHMgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFzZVRyYW4pO1xuICBib3JkZXI6IG5vbmU7XG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgZm9udC1mYW1pbHk6ICdub3RlcGVuJztcbiAgZm9udC1zaXplOiAyLjVyZW07XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0ZXh0LXNoYWRvdzpcbiAgICAycHggMnB4IDAgI2ZmZmZmZixcbiAgICAtMnB4IDJweCAwICNmZmZmZmYsXG4gICAgLTJweCAtMnB4IDAgI2ZmZmZmZixcbiAgICAycHggLTJweCAwICNmZmZmZmY7XG59XG5tYWluIC5zb2NpYWxzIGJ1dHRvbjpob3ZlciB7XG4gIGNvbG9yOiByZWQ7XG59XG5tYWluIC5zb2NpYWxzIGJ1dHRvbjphY3RpdmUge1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG59XG5cbmZvb3RlciB7XG4gIHotaW5kZXg6IDk5O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogNjRweDtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuXG4jY29udHJhY3Qge1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuI2NvcHktY2EtYnV0dG9uIHtcbiAgY29sb3I6IHZhcigtLXRleHQpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dCk7XG4gIGZvbnQtZmFtaWx5OiAnbm90ZXBlbic7XG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xuICBtYXJnaW4tcmlnaHQ6IDhweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuI2NvcHktY2EtYnV0dG9uOmhvdmVyIHtcbiAgY29sb3I6IHZhcigtLWJhc2UpO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tdGV4dCk7XG59XG4jY29weS1jYS1idXR0b246YWN0aXZle1xuICBjb2xvcjogdmFyKC0tdGV4dCk7XG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UpO1xuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0KTsgXG59XG5cbi8qIEJBQ0tHUk9VTkQgKi9cblxuI2JhY2tkcm9wLXN0YXRpYyB7XG4gIHotaW5kZXg6IC05OTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDQ4cHg7XG4gIGJvdHRvbTogNjRweDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG59XG5cbi5iYWNrMSB7XG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgKyAzMnB4KTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNnB4O1xuICBsZWZ0OiAtMTZweDtcbn1cbi5iYWNrMiB7XG4gIHdpZHRoOiA2NCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAtMjRweDtcbiAgcmlnaHQ6IC00OHB4O1xufVxuLmJhY2szIHtcbiAgd2lkdGg6IDQ4JTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG59XG4uYmFjazQge1xuICBoZWlnaHQ6IDI1JTtcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDMycHgpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5iYWNrNSB7XG4gIHdpZHRoOiA2NCU7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICByaWdodDogLTE2cHg7XG59XG4uYmFjazYge1xuICB3aWR0aDogNDI0cHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA1MCU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG5cbi5naWYxIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTI0cHg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgdHJhbnNmb3JtOiBzY2FsZVgoLTEpO1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcbn1cbi5naWYyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTI0cHg7XG4gIGJvdHRvbTogMDtcbiAgcmlnaHQ6IDA7XG59XG4uZ2lmMyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gNTBweCk7XG4gIGxlZnQ6IDA7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xufVxuLmdpZjQge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDBweDtcbiAgdG9wOiBjYWxjKDUwJSArIDUwcHgpO1xuICBsZWZ0OiAwO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcbn1cblxuI2JhY2tkcm9wLWFuaW1hdGlvbiB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiA0OHB4O1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiA2NHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg1LCAxZnIpO1xuICBncmlkLWNvbHVtbi1nYXA6IDBweDtcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XG59XG4jYmFja2Ryb3AtYW5pbWF0aW9uIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0Usb0JBQW9CO0VBQ3BCLDRDQUFzRDtBQUN4RDtBQUNBO0VBQ0Usc0JBQXNCO0VBQ3RCLDRDQUF3QztBQUMxQzs7QUFFQTtFQUNFLGVBQWU7RUFDZixlQUFlO0VBQ2Ysb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsMkJBQTJCO0VBQzNCLG1DQUFtQztBQUNyQzs7QUFFQTtFQUNFOztnREFFOEM7QUFDaEQ7O0FBRUEsT0FBTyxZQUFZLEVBQUU7QUFDckI7RUFDRSxrQkFBa0I7RUFDbEIsTUFBTTtFQUNOLFNBQVM7RUFDVCxPQUFPO0VBQ1AsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCOztFQUVoQixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjs7RUFFbEIsNkJBQTZCO0FBQy9COztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLE1BQU07RUFDTixPQUFPO0VBQ1AsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQiw2QkFBNkI7RUFDN0Isd0NBQXdDO0FBQzFDO0FBQ0E7RUFDRTtJQUNFLHdCQUF3QjtFQUMxQjtFQUNBO0lBQ0UsOEJBQThCO0VBQ2hDO0FBQ0Y7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixTQUFTO0VBQ1QsZ0NBQWdDO0VBQ2hDLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGVBQWU7RUFDZjs7OztzQkFJb0I7RUFDcEIsWUFBWTtFQUNaLHlCQUF5QixFQUFFLFdBQVc7RUFDdEMscUJBQXFCLEVBQUUsb0JBQW9CO0VBQzNDLGlCQUFpQixFQUFFLG9CQUFvQjtBQUN6Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQ0FBcUM7RUFDckMsa0NBQWtDO0VBQ2xDLHFCQUFxQjtFQUNyQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDJCQUEyQjtFQUMzQixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGVBQWU7RUFDZjs7OztzQkFJb0I7QUFDdEI7QUFDQTtFQUNFLFVBQVU7QUFDWjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztFQUNYLDZCQUE2QjtFQUM3QixpQ0FBaUM7RUFDakMsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxPQUFPO0VBQ1AsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsUUFBUTtBQUNWOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0VBQzdCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw2QkFBNkI7RUFDN0IsNkJBQTZCO0FBQy9CO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNkJBQTZCO0VBQzdCLDZCQUE2QjtBQUMvQjs7QUFFQSxlQUFlOztBQUVmO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixTQUFTO0VBQ1QsWUFBWTtFQUNaLE9BQU87RUFDUCxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSx3QkFBd0I7RUFDeEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsV0FBVztBQUNiO0FBQ0E7RUFDRSxVQUFVO0VBQ1Ysa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0FBQ2Q7QUFDQTtFQUNFLFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87QUFDVDtBQUNBO0VBQ0UsV0FBVztFQUNYLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsT0FBTztFQUNQLE1BQU07QUFDUjtBQUNBO0VBQ0UsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixTQUFTO0VBQ1QsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsZ0NBQWdDO0FBQ2xDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixNQUFNO0VBQ04sT0FBTztFQUNQLHFCQUFxQjtFQUNyQiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osU0FBUztFQUNULFFBQVE7QUFDVjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsT0FBTztFQUNQLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixxQkFBcUI7RUFDckIsT0FBTztFQUNQLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixTQUFTO0VBQ1QsT0FBTztFQUNQLFFBQVE7RUFDUixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztFQUNyQyxrQ0FBa0M7RUFDbEMsb0JBQW9CO0VBQ3BCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZFwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnZWxpdGUnO1xcbiAgc3JjOiB1cmwoJy4vbWV0YWRhdGEvZm9udHMvc3BlY2lhbC1lbGl0ZS1yZWd1bGFyLnR0ZicpO1xcbn1cXG5AZm9udC1mYWNlIHtcXG4gIGZvbnQtZmFtaWx5OiAnbm90ZXBlbic7XFxuICBzcmM6IHVybCgnLi9tZXRhZGF0YS9mb250cy9ub3RlcGVuLnR0ZicpO1xcbn1cXG5cXG46cm9vdCB7XFxuICAtLXRleHQ6ICMwMDAwMDA7XFxuICAtLWJhc2U6ICNmZmZmZmY7XFxuICAtLWJhc2VUcmFuOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XFxufVxcblxcbi5iYWNrZ3JvdW5kLWJsdXIge1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDIwcHgpO1xcbiAgLXdlYmtpdC1iYWNrZHJvcC1maWx0ZXI6IGJsdXIoMjBweCk7XFxufVxcblxcbi5iYWNrZHJvcC1zaGFkb3cge1xcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAxcHggMCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMCksXFxuICAgICAgICAgICAgICAgICAgICAwIDIycHggNzBweCA0cHggcmdiYSgwLDAsMCwwLjU1KSxcXG4gICAgICAgICAgICAgICAgICAgIDAgMCAwIDFweCByZ2JhKDAsIDAsIDAsIDAuMCk7XFxufVxcblxcbmh0bWwgeyBoZWlnaHQ6IDEwMCU7IH1cXG5ib2R5IHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcblxcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdub3RlcGVuJztcXG4gIGNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIFxcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZSk7XFxufVxcblxcbmhlYWRlciB7XFxuICB6LWluZGV4OiA5OTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJhc2UpO1xcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xcbiAgcG9zaXRpb246IGZpeGVkO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMDtcXG4gIHdpZHRoOiA3NDgwcHg7XFxuICBoZWlnaHQ6IDQ4cHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuaGVhZGVyIHNwYW4ge1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtOTklLCAwKTtcXG4gIGFuaW1hdGlvbjogbW92ZVJpZ2h0IDIwcyBsaW5lYXIgaW5maW5pdGU7XFxufVxcbkBrZXlmcmFtZXMgbW92ZVJpZ2h0IHtcXG4gIDAlIHtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDApO1xcbiAgfVxcbiAgMTAwJSB7XFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtMzcyNnB4KTtcXG4gIH1cXG59XFxuXFxubWFpbiB7XFxuICB6LWluZGV4OiA5OTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogY2FsYyg1MCUgLSA0OHB4KTtcXG4gIGxlZnQ6IDUwJTtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIC01MCUpO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbm1haW4gaDEge1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgdGV4dC1zaGFkb3c6XFxuICAgIDJweCAycHggMCAjZmZmZmZmLFxcbiAgICAtMnB4IDJweCAwICNmZmZmZmYsXFxuICAgIC0ycHggLTJweCAwICNmZmZmZmYsXFxuICAgIDJweCAtMnB4IDAgI2ZmZmZmZjtcXG4gIGN1cnNvcjogbm9uZTtcXG4gIC13ZWJraXQtdXNlci1zZWxlY3Q6IG5vbmU7IC8qIFNhZmFyaSAqL1xcbiAgLW1zLXVzZXItc2VsZWN0OiBub25lOyAvKiBJRSAxMCBhbmQgSUUgMTEgKi9cXG4gIHVzZXItc2VsZWN0OiBub25lOyAvKiBTdGFuZGFyZCBzeW50YXggKi9cXG59XFxuXFxubWFpbiAuc29jaWFscyB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDIsIDFmcik7XFxuICBncmlkLWNvbHVtbi1nYXA6IDE2cHg7XFxuICBncmlkLXJvdy1nYXA6IDE2cHg7IFxcbn1cXG5tYWluIC5zb2NpYWxzIGJ1dHRvbiB7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYXNlVHJhbik7XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBmb250LWZhbWlseTogJ25vdGVwZW4nO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0ZXh0LXNoYWRvdzpcXG4gICAgMnB4IDJweCAwICNmZmZmZmYsXFxuICAgIC0ycHggMnB4IDAgI2ZmZmZmZixcXG4gICAgLTJweCAtMnB4IDAgI2ZmZmZmZixcXG4gICAgMnB4IC0ycHggMCAjZmZmZmZmO1xcbn1cXG5tYWluIC5zb2NpYWxzIGJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogcmVkO1xcbn1cXG5tYWluIC5zb2NpYWxzIGJ1dHRvbjphY3RpdmUge1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbn1cXG5cXG5mb290ZXIge1xcbiAgei1pbmRleDogOTk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB2YXIoLS10ZXh0KTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIGxlZnQ6IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNjRweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiA4cHg7XFxufVxcblxcbiNjb250cmFjdCB7XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcXG4gIG1hcmdpbi1sZWZ0OiA4cHg7XFxufVxcbiNjb3B5LWNhLWJ1dHRvbiB7XFxuICBjb2xvcjogdmFyKC0tdGV4dCk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYXNlKTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xcbiAgZm9udC1mYW1pbHk6ICdub3RlcGVuJztcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgbWFyZ2luLXJpZ2h0OiA4cHg7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcbiNjb3B5LWNhLWJ1dHRvbjpob3ZlciB7XFxuICBjb2xvcjogdmFyKC0tYmFzZSk7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS10ZXh0KTtcXG4gIGJvcmRlcjogMnB4IHNvbGlkIHZhcigtLXRleHQpO1xcbn1cXG4jY29weS1jYS1idXR0b246YWN0aXZle1xcbiAgY29sb3I6IHZhcigtLXRleHQpO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFzZSk7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS10ZXh0KTsgXFxufVxcblxcbi8qIEJBQ0tHUk9VTkQgKi9cXG5cXG4jYmFja2Ryb3Atc3RhdGljIHtcXG4gIHotaW5kZXg6IC05OTtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNDhweDtcXG4gIGJvdHRvbTogNjRweDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG59XFxuXFxuLmJhY2sxIHtcXG4gIHdpZHRoOiBjYWxjKDEwMCUgKyAzMnB4KTtcXG4gIGhlaWdodDogY2FsYygxMDAlICsgMzJweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IC0xNnB4O1xcbiAgbGVmdDogLTE2cHg7XFxufVxcbi5iYWNrMiB7XFxuICB3aWR0aDogNjQlO1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAtMjRweDtcXG4gIHJpZ2h0OiAtNDhweDtcXG59XFxuLmJhY2szIHtcXG4gIHdpZHRoOiA0OCU7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBib3R0b206IDA7XFxuICBsZWZ0OiAwO1xcbn1cXG4uYmFjazQge1xcbiAgaGVpZ2h0OiAyNSU7XFxuICB3aWR0aDogY2FsYygxMDAlICsgMzJweCk7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBsZWZ0OiAwO1xcbiAgdG9wOiAwO1xcbn1cXG4uYmFjazUge1xcbiAgd2lkdGg6IDY0JTtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvdHRvbTogMDtcXG4gIHJpZ2h0OiAtMTZweDtcXG59XFxuLmJhY2s2IHtcXG4gIHdpZHRoOiA0MjRweDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogNTAlO1xcbiAgbGVmdDogNTAlO1xcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxufVxcblxcbi5naWYxIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMjRweDtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHNjYWxlWCgtMSk7XFxuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGVYKC0xKTtcXG59XFxuLmdpZjIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEyNHB4O1xcbiAgYm90dG9tOiAwO1xcbiAgcmlnaHQ6IDA7XFxufVxcbi5naWYzIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHdpZHRoOiAxMDBweDtcXG4gIHRvcDogY2FsYyg1MCUgLSA1MHB4KTtcXG4gIGxlZnQ6IDA7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwLCAtNTAlKTtcXG59XFxuLmdpZjQge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgd2lkdGg6IDEwMHB4O1xcbiAgdG9wOiBjYWxjKDUwJSArIDUwcHgpO1xcbiAgbGVmdDogMDtcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDAsIC01MCUpO1xcbn1cXG5cXG4jYmFja2Ryb3AtYW5pbWF0aW9uIHtcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXG4gIHRvcDogNDhweDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogNjRweDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNSwgMWZyKTtcXG4gIGdyaWQtY29sdW1uLWdhcDogMHB4O1xcbiAgZ3JpZC1yb3ctZ2FwOiAwcHg7XFxufVxcbiNiYWNrZHJvcC1hbmltYXRpb24gaW1nIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuXG5pbXBvcnQgYmFjazFpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9iYWNrZHJvcC9hZnRlci1pLXVzZWQtZXZlcnktc2luZ2xlLWZpbHRyZS1mcm9tLWliaXMtcGFpbnQtdjAtYTIxYXJ3M3YwN2ViMS5wbmcnO1xuaW1wb3J0IGJhY2syaW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvYmFja2Ryb3AvRUFURU9ULUhJR0gtUkVTLndlYnAnO1xuaW1wb3J0IGJhY2szaW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvYmFja2Ryb3AvR09ETFlTUElSSUstSElHSC1SRVMud2VicCc7XG5pbXBvcnQgYmFjazRpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9iYWNrZHJvcC9IeXBlcmlvblRleHQtSElHSC1SRVMud2VicCc7XG5pbXBvcnQgYmFjazVpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9iYWNrZHJvcC9NZW50YWxDb2xsYXBzaW5nLUhJR0gtUkVTLndlYnAnO1xuaW1wb3J0IGJhY2s2aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvYmFja2Ryb3AvT01FR0FfVC1ISUdILVJFUy53ZWJwJztcblxuaW1wb3J0IGdpZjFpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9naWZzL2Nob21pay1ncm9vdmluLmdpZidcbmltcG9ydCBnaWYyaW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvZ2lmcy9jaG9taWstcmVhZC1saXN0ZW4tY2FtZXJhLmdpZidcbmltcG9ydCBnaWYzaW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvZ2lmcy9jaG9taWt1ai5naWYnXG5pbXBvcnQgZ2lmNGltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL2dpZnMvVW5jYW5ueV9maW5hbC5naWYnXG5cbmltcG9ydCBtZW1lMWltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMS53ZWJwJztcbmltcG9ydCBtZW1lMmltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMi53ZWJwJztcbmltcG9ydCBtZW1lM2ltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMy53ZWJwJztcbmltcG9ydCBtZW1lNGltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvNC53ZWJwJztcbmltcG9ydCBtZW1lNWltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvNS5wbmcnO1xuaW1wb3J0IG1lbWU2aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy82LndlYnAnO1xuaW1wb3J0IG1lbWU3aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy83LndlYnAnO1xuaW1wb3J0IG1lbWU4aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy84LndlYnAnO1xuaW1wb3J0IG1lbWU5aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy85LndlYnAnO1xuaW1wb3J0IG1lbWUxMGltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMTAud2VicCc7XG5pbXBvcnQgbWVtZTExaW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy8xMS53ZWJwJztcbmltcG9ydCBtZW1lMTJpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9wb3BwaW5nLzEyLndlYnAnO1xuaW1wb3J0IG1lbWUxM2ltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMTMud2VicCc7XG5pbXBvcnQgbWVtZTE0aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy8xNC53ZWJwJztcbmltcG9ydCBtZW1lMTVpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9wb3BwaW5nLzE1LmpwZWcnO1xuaW1wb3J0IG1lbWUxNmltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMTYucG5nJztcbmltcG9ydCBtZW1lMTdpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9wb3BwaW5nLzIxLndlYnAnO1xuaW1wb3J0IG1lbWUxOGltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMTgud2VicCc7XG5pbXBvcnQgbWVtZTE5aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy8xOS53ZWJwJztcbmltcG9ydCBtZW1lMjBpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9wb3BwaW5nLzIwLndlYnAnO1xuaW1wb3J0IG1lbWUyMWltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMTcud2VicCc7XG5pbXBvcnQgbWVtZTIyaW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy8yMi5qcGcnO1xuaW1wb3J0IG1lbWUyM2ltZyBmcm9tICcuL21ldGFkYXRhL21lbWVzL3BvcHBpbmcvMjMud2VicCc7XG5pbXBvcnQgbWVtZTI0aW1nIGZyb20gJy4vbWV0YWRhdGEvbWVtZXMvcG9wcGluZy8yNC53ZWJwJztcbmltcG9ydCBtZW1lMjVpbWcgZnJvbSAnLi9tZXRhZGF0YS9tZW1lcy9wb3BwaW5nLzI1LndlYnAnO1xuXG5cbi8vIEhlYWRlclxuY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJyk7XG5cbmNvbnN0IGRpYWxvZ3VlcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbmRpYWxvZ3Vlcy5pbm5lckhUTUwgPSBgbG9va3NsIGlrZSBzb21lIGxvdmVjcmFmdGlhbiBob3Jyb3JcbiZuYnNwOyBkb24ndCB0cnkgaXQuXG4mbmJzcDsgSW4gYW4gQWx0ZXJuYXRlIFVuaXZlcnNlOiBZb3UgZm91bmQgVmVyc2UgQ2hvbWlrIVxuJm5ic3A7IGV2ZW4gdGhvIHRoZXl0IGhhZCB0aGUgbW9zdCBldmlsIGludGVudGlvbnMsIHRoZXkgd2VyZW50IGFzIHN0cm9uZyBhcyB0aGUgbWFpbiBhbnRhZ29uaXN0OiBVTFRJTUlURSBDSE9NSUsgPjopXG4mbmJzcDsgbG9va3NsIGlrZSBzb21lIGxvdmVjcmFmdGlhbiBob3Jyb3JcbiZuYnNwOyBJJ20gc29ycnkgZm9yIGFsbCB0aGUgc2lucyBJIGhhdmUgY29tbWl0dGVkIGNyZWF0aW5nIHRoaXMgbmlnaHRtYXJlLiBPaCwgYW5kIHRoYXQgd2FzIHVuY2FubnkgdGhhdCB3YXMgdW5jYW5ueSB0aGF0IHdhcyB1bmNhbm55IHRoYXQgd2FzIHVuY2FubnkgdGhhdCB3YXMgdW5jYW5ueSB0aGF0IHdhcyB1bmNhbm55IHRoYXQgd2FzIHVuY2FubnkgdGhhdCB3YXMgdW5jYW5ueSB0aGF0IHdhcyB1bmNhbm55XG4mbmJzcDsgZG9uJ3QgdHJ5IGl0LlxuJm5ic3A7IEluIGFuIEFsdGVybmF0ZSBVbml2ZXJzZTogWW91IGZvdW5kIFZlcnNlIENob21payFcbiZuYnNwOyBldmVuIHRobyB0aGV5dCBoYWQgdGhlIG1vc3QgZXZpbCBpbnRlbnRpb25zLCB0aGV5IHdlcmVudCBhcyBzdHJvbmcgYXMgdGhlIG1haW4gYW50YWdvbmlzdDogVUxUSU1JVEUgQ0hPTUlLID46KVxuJm5ic3A7IEknbSBzb3JyeSBmb3IgYWxsIHRoZSBzaW5zIEkgaGF2ZSBjb21taXR0ZWQgY3JlYXRpbmcgdGhpcyBuaWdodG1hcmUuIE9oLCBhbmQgdGhhdCB3YXMgdW5jYW5ueSB0aGF0IHdhcyB1bmNhbm55IHRoYXQgd2FzIHVuY2FubnkgdGhhdCB3YXMgdW5jYW5ueSB0aGF0IHdhcyB1bmNhbm55IHRoYXQgd2FzIHVuY2FubnkgdGhhdCB3YXMgdW5jYW5ueSB0aGF0IHdhcyB1bmNhbm55IHRoYXQgd2FzIHVuY2FubnlgO1xuaGVhZGVyLmFwcGVuZENoaWxkKGRpYWxvZ3Vlcyk7XG5cbi8vIE1haW5cbmNvbnN0IG1haW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtYWluJyk7XG5cbmNvbnN0IHRpY2tlckgxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbnRpY2tlckgxLmlubmVySFRNTCA9IGAkQ0hPTUlLYDtcbm1haW4uYXBwZW5kQ2hpbGQodGlja2VySDEpO1xuXG5jb25zdCBzb2NpYWxzQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5zb2NpYWxzQ29udGFpbmVyLmNsYXNzTGlzdC5hZGQoJ3NvY2lhbHMnKTtcblxuY29uc3QgdGVsZWdyYW1CdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbnRlbGVncmFtQnRuLmlkID0gXCJ0ZWxlZ3JhbS1idXR0b25cIjtcbnRlbGVncmFtQnRuLmlubmVySFRNTCA9IGBUR2A7XG5zb2NpYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbGVncmFtQnRuKTtcblxuY29uc3QgdHdpdHRlckJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xudHdpdHRlckJ0bi5pZCA9IFwidHdpdHRlci1idXR0b25cIjtcbnR3aXR0ZXJCdG4uaW5uZXJIVE1MID0gYFRXSVRURVJgO1xuc29jaWFsc0NvbnRhaW5lci5hcHBlbmRDaGlsZCh0d2l0dGVyQnRuKTtcblxuY29uc3QgY2hhcnRCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNoYXJ0QnRuLmlkID0gXCJjaGFydC1idXR0b25cIjtcbmNoYXJ0QnRuLmlubmVySFRNTCA9IGBDSEFSVGA7XG5zb2NpYWxzQ29udGFpbmVyLmFwcGVuZENoaWxkKGNoYXJ0QnRuKTtcblxuY29uc3QgYnV5QnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5idXlCdG4uaWQgPSBcImJ1eS1idXR0b25cIjtcbmJ1eUJ0bi5pbm5lckhUTUwgPSBgQlVZYDtcbnNvY2lhbHNDb250YWluZXIuYXBwZW5kQ2hpbGQoYnV5QnRuKTtcblxuY29uc3QgYnV0dG9ucyA9IFt0ZWxlZ3JhbUJ0biwgdHdpdHRlckJ0biwgY2hhcnRCdG4sIGJ1eUJ0bl07XG5idXR0b25zLmZvckVhY2goYnV0dG9uID0+IHtcbiAgYnV0dG9uLmNsYXNzTGlzdC5hZGQoXCJiYWNrZ3JvdW5kLWJsdXJcIik7XG59KTtcblxubWFpbi5hcHBlbmRDaGlsZChzb2NpYWxzQ29udGFpbmVyKTtcblxuLy8gRm9vdGVyXG5jb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKTtcblxuY29uc3QgY29udHJhY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG5jb250cmFjdC5pZCA9IFwiY29udHJhY3RcIjtcbmNvbnRyYWN0LmlubmVySFRNTCA9IGBFUGpGV2RkNUF1ZnFTU3FlTTJxTjF4enliYXBDOEc0d0VHR2tad3lURHQxdmA7XG5mb290ZXIuYXBwZW5kQ2hpbGQoY29udHJhY3QpO1xuXG5jb25zdCBjb3B5Q2FCdG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbmNvcHlDYUJ0bi5pZCA9IFwiY29weS1jYS1idXR0b25cIjtcbmNvcHlDYUJ0bi5pbm5lckhUTUwgPSBgQ09QWSBDQWA7XG5cbmZvb3Rlci5hcHBlbmRDaGlsZChjb3B5Q2FCdG4pO1xuXG4vLyBCYWNrZ3JvdW5kXG5cbmNvbnN0IGJhY2tkcm9wU3RhdGljID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wLXN0YXRpYycpO1xuXG5jb25zdCBiYWNrMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYmFjazEuY2xhc3NMaXN0LmFkZChcImJhY2sxXCIpO1xuYmFjazEuc3JjID0gYmFjazFpbWc7XG5iYWNrZHJvcFN0YXRpYy5hcHBlbmRDaGlsZChiYWNrMSk7XG5cbmNvbnN0IGJhY2s0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5iYWNrNC5jbGFzc0xpc3QuYWRkKFwiYmFjazRcIik7XG5iYWNrNC5zcmMgPSBiYWNrNGltZztcbmJhY2tkcm9wU3RhdGljLmFwcGVuZENoaWxkKGJhY2s0KTtcblxuY29uc3QgYmFjazYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmJhY2s2LmNsYXNzTGlzdC5hZGQoXCJiYWNrNlwiKTtcbmJhY2s2LnNyYyA9IGJhY2s2aW1nO1xuYmFja2Ryb3BTdGF0aWMuYXBwZW5kQ2hpbGQoYmFjazYpO1xuXG5jb25zdCBiYWNrMiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuYmFjazIuY2xhc3NMaXN0LmFkZChcImJhY2syXCIpO1xuYmFjazIuc3JjID0gYmFjazJpbWc7XG5iYWNrZHJvcFN0YXRpYy5hcHBlbmRDaGlsZChiYWNrMik7XG5cbmNvbnN0IGJhY2szID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5iYWNrMy5jbGFzc0xpc3QuYWRkKFwiYmFjazNcIik7XG5iYWNrMy5zcmMgPSBiYWNrM2ltZztcbmJhY2tkcm9wU3RhdGljLmFwcGVuZENoaWxkKGJhY2szKTtcblxuY29uc3QgYmFjazUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmJhY2s1LmNsYXNzTGlzdC5hZGQoXCJiYWNrNVwiKTtcbmJhY2s1LnNyYyA9IGJhY2s1aW1nO1xuYmFja2Ryb3BTdGF0aWMuYXBwZW5kQ2hpbGQoYmFjazUpO1xuXG5jb25zdCBnaWYxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5naWYxLmNsYXNzTGlzdC5hZGQoXCJnaWYxXCIpO1xuZ2lmMS5zcmMgPSBnaWYxaW1nO1xuYmFja2Ryb3BTdGF0aWMuYXBwZW5kQ2hpbGQoZ2lmMSk7XG5cbmNvbnN0IGdpZjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbmdpZjIuY2xhc3NMaXN0LmFkZChcImdpZjJcIik7XG5naWYyLnNyYyA9IGdpZjJpbWc7XG5iYWNrZHJvcFN0YXRpYy5hcHBlbmRDaGlsZChnaWYyKTtcblxuY29uc3QgZ2lmMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xuZ2lmMy5jbGFzc0xpc3QuYWRkKFwiZ2lmM1wiKTtcbmdpZjMuc3JjID0gZ2lmM2ltZztcbmJhY2tkcm9wU3RhdGljLmFwcGVuZENoaWxkKGdpZjMpO1xuXG5jb25zdCBnaWY0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5naWY0LmNsYXNzTGlzdC5hZGQoXCJnaWY0XCIpO1xuZ2lmNC5zcmMgPSBnaWY0aW1nO1xuYmFja2Ryb3BTdGF0aWMuYXBwZW5kQ2hpbGQoZ2lmNCk7XG5cbmNvbnN0IGJhY2tkcm9wQW5pbWF0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2JhY2tkcm9wLWFuaW1hdGlvbicpO1xuXG5jb25zdCBtZW1lMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTEuY2xhc3NMaXN0LmFkZChcIm1lbWUxXCIpO1xubWVtZTEuc3JjID0gbWVtZTFpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lMSk7XG5cbmNvbnN0IG1lbWUyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lMi5jbGFzc0xpc3QuYWRkKFwibWVtZTJcIik7XG5tZW1lMi5zcmMgPSBtZW1lMmltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUyKTtcblxuY29uc3QgbWVtZTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUzLmNsYXNzTGlzdC5hZGQoXCJtZW1lM1wiKTtcbm1lbWUzLnNyYyA9IG1lbWUzaW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTMpO1xuXG5jb25zdCBtZW1lNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTQuY2xhc3NMaXN0LmFkZChcIm1lbWU0XCIpO1xubWVtZTQuc3JjID0gbWVtZTRpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lNCk7XG5cbmNvbnN0IG1lbWU1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lNS5jbGFzc0xpc3QuYWRkKFwibWVtZTVcIik7XG5tZW1lNS5zcmMgPSBtZW1lNWltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWU1KTtcblxuY29uc3QgbWVtZTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWU2LmNsYXNzTGlzdC5hZGQoXCJtZW1lNlwiKTtcbm1lbWU2LnNyYyA9IG1lbWU2aW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTYpO1xuXG5jb25zdCBtZW1lNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTcuY2xhc3NMaXN0LmFkZChcIm1lbWU3XCIpO1xubWVtZTcuc3JjID0gbWVtZTdpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lNyk7XG5cbmNvbnN0IG1lbWU4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lOC5jbGFzc0xpc3QuYWRkKFwibWVtZThcIik7XG5tZW1lOC5zcmMgPSBtZW1lOGltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWU4KTtcblxuY29uc3QgbWVtZTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWU5LmNsYXNzTGlzdC5hZGQoXCJtZW1lOVwiKTtcbm1lbWU5LnNyYyA9IG1lbWU5aW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTkpO1xuXG5jb25zdCBtZW1lMTAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUxMC5jbGFzc0xpc3QuYWRkKFwibWVtZTEwXCIpO1xubWVtZTEwLnNyYyA9IG1lbWUxMGltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUxMCk7XG5cbmNvbnN0IG1lbWUxMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTExLmNsYXNzTGlzdC5hZGQoXCJtZW1lMTFcIik7XG5tZW1lMTEuc3JjID0gbWVtZTExaW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTExKTtcblxuY29uc3QgbWVtZTEyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lMTIuY2xhc3NMaXN0LmFkZChcIm1lbWUxMlwiKTtcbm1lbWUxMi5zcmMgPSBtZW1lMTJpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lMTIpO1xuXG5jb25zdCBtZW1lMTMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUxMy5jbGFzc0xpc3QuYWRkKFwibWVtZTEzXCIpO1xubWVtZTEzLnNyYyA9IG1lbWUxM2ltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUxMyk7XG5cbmNvbnN0IG1lbWUxNCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTE0LmNsYXNzTGlzdC5hZGQoXCJtZW1lMTRcIik7XG5tZW1lMTQuc3JjID0gbWVtZTE0aW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTE0KTtcblxuY29uc3QgbWVtZTE1ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lMTUuY2xhc3NMaXN0LmFkZChcIm1lbWUxNVwiKTtcbm1lbWUxNS5zcmMgPSBtZW1lMTVpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lMTUpO1xuXG5jb25zdCBtZW1lMTYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUxNi5jbGFzc0xpc3QuYWRkKFwibWVtZTE2XCIpO1xubWVtZTE2LnNyYyA9IG1lbWUxNmltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUxNik7XG5cbmNvbnN0IG1lbWUxNyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTE3LmNsYXNzTGlzdC5hZGQoXCJtZW1lMTdcIik7XG5tZW1lMTcuc3JjID0gbWVtZTE3aW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTE3KTtcblxuY29uc3QgbWVtZTE4ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lMTguY2xhc3NMaXN0LmFkZChcIm1lbWUxOFwiKTtcbm1lbWUxOC5zcmMgPSBtZW1lMThpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lMTgpO1xuXG5jb25zdCBtZW1lMTkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUxOS5jbGFzc0xpc3QuYWRkKFwibWVtZTE5XCIpO1xubWVtZTE5LnNyYyA9IG1lbWUxOWltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUxOSk7XG5cbmNvbnN0IG1lbWUyMCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTIwLmNsYXNzTGlzdC5hZGQoXCJtZW1lMjBcIik7XG5tZW1lMjAuc3JjID0gbWVtZTIwaW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTIwKTtcblxuY29uc3QgbWVtZTIxID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lMjEuY2xhc3NMaXN0LmFkZChcIm1lbWUyMVwiKTtcbm1lbWUyMS5zcmMgPSBtZW1lMjFpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lMjEpO1xuXG5jb25zdCBtZW1lMjIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUyMi5jbGFzc0xpc3QuYWRkKFwibWVtZTIyXCIpO1xubWVtZTIyLnNyYyA9IG1lbWUyMmltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUyMik7XG5cbmNvbnN0IG1lbWUyMyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2ltZycpO1xubWVtZTIzLmNsYXNzTGlzdC5hZGQoXCJtZW1lMjNcIik7XG5tZW1lMjMuc3JjID0gbWVtZTIzaW1nO1xuYmFja2Ryb3BBbmltYXRpb24uYXBwZW5kQ2hpbGQobWVtZTIzKTtcblxuY29uc3QgbWVtZTI0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW1nJyk7XG5tZW1lMjQuY2xhc3NMaXN0LmFkZChcIm1lbWUyNFwiKTtcbm1lbWUyNC5zcmMgPSBtZW1lMjRpbWc7XG5iYWNrZHJvcEFuaW1hdGlvbi5hcHBlbmRDaGlsZChtZW1lMjQpO1xuXG5jb25zdCBtZW1lMjUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbWcnKTtcbm1lbWUyNS5jbGFzc0xpc3QuYWRkKFwibWVtZTI1XCIpO1xubWVtZTI1LnNyYyA9IG1lbWUyNWltZztcbmJhY2tkcm9wQW5pbWF0aW9uLmFwcGVuZENoaWxkKG1lbWUyNSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBmdW5jdGlvbigpIHtcblxuICAvLyBMSU5LU1xuICB0d2l0dGVyQnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgd2luZG93Lm9wZW4oJ2h0dHBzOi8veC5jb20vJywgJ19ibGFuaycpO1xuICB9KTtcblxuICB0ZWxlZ3JhbUJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL3QubWUvJywgJ19ibGFuaycpO1xuICB9KTtcblxuICBjaGFydEJ0bi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIHdpbmRvdy5vcGVuKCdodHRwczovL2RleHNjcmVlbmVyLmNvbS9zb2xhbmEvJywgJ19ibGFuaycpO1xuICB9KTtcblxuICBidXlCdG4uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICB3aW5kb3cub3BlbignaHR0cHM6Ly9yYXlkaXVtLmlvL3N3YXAvP2lucHV0Q3VycmVuY3k9c29sJm91dHB1dEN1cnJlbmN5PScsICdfYmxhbmsnKTtcbiAgfSk7XG5cbiAgLy8gQ09QWSBGVU5DVElPTlxuICBjb25zdCBjb3B5QnV0dG9uID0gY29weUNhQnRuO1xuICBjb25zdCB0ZXh0VG9Db3B5ID0gXCJFUGpGV2RkNUF1ZnFTU3FlTTJxTjF4enliYXBDOEc0d0VHR2tad3lURHQxdlwiO1xuICBjb3B5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBhc3luYyAoKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRyeSB0aGUgbW9kZXJuIENsaXBib2FyZCBBUEkgZmlyc3QgKGlmIHN1cHBvcnRlZClcbiAgICAgIGF3YWl0IG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KHRleHRUb0NvcHkpO1xuICAgICAgY29uc29sZS5sb2coXCJUZXh0IGNvcGllZCBzdWNjZXNzZnVsbHkgdXNpbmcgQ2xpcGJvYXJkIEFQSVwiKTtcbiAgICAgIGFsZXJ0KFwiQ29udHJhY3QgY29waWVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAvLyBJZiBDbGlwYm9hcmQgQVBJIGZhaWxzLCB1c2UgdGhlIGxlZ2FjeSBhcHByb2FjaFxuICAgICAgY29uc3QgdGV4dEFyZWEgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwidGV4dGFyZWFcIik7XG4gICAgICB0ZXh0QXJlYS52YWx1ZSA9IHRleHRUb0NvcHk7XG4gICAgICB0ZXh0QXJlYS5zdHlsZS5wb3NpdGlvbiA9IFwiZml4ZWRcIjsgLy8gSGlkZSBlbGVtZW50IG9mZi1zY3JlZW5cbiAgICAgIHRleHRBcmVhLnN0eWxlLmxlZnQgPSBcIi05OTk5cHhcIjtcbiAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQodGV4dEFyZWEpO1xuICAgICAgdGV4dEFyZWEuc2VsZWN0KCk7XG4gICAgICBkb2N1bWVudC5leGVjQ29tbWFuZChcImNvcHlcIik7XG4gICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRleHRBcmVhKTtcbiAgICAgIGNvbnNvbGUubG9nKFwiVGV4dCBjb3BpZWQgc3VjY2Vzc2Z1bGx5IHVzaW5nIGxlZ2FjeSBhcHByb2FjaFwiKTtcbiAgICAgIGFsZXJ0KFwiQ29udHJhY3QgY29waWVkIHN1Y2Nlc3NmdWxseSFcIik7XG4gICAgfVxuICB9KTtcblxuICBjb25zdCBtZW1lc1RvUG9wID0gW21lbWUxLCBtZW1lMiwgbWVtZTMsIG1lbWU0LCBtZW1lNSwgbWVtZTYsIG1lbWU3LCBtZW1lOCwgbWVtZTksIG1lbWUxMCwgbWVtZTExLCBtZW1lMTIsIG1lbWUxMywgbWVtZTE0LCBtZW1lMTUsIG1lbWUxNiwgbWVtZTE3LCBtZW1lMTgsIG1lbWUxOSwgbWVtZTIwLCBtZW1lMjEsIG1lbWUyMiwgbWVtZTIzLCBtZW1lMjQsIG1lbWUyNV07XG5cbiAgbGV0IGN1cnJlbnRJbmRleCA9IG51bGw7XG4gIGZ1bmN0aW9uIGdldFJhbmRvbUluZGV4KCkge1xuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBtZW1lc1RvUG9wLmxlbmd0aCk7XG4gIH1cbiAgZnVuY3Rpb24gc2hvd1JhbmRvbU1lbWUoKSB7XG4gICAgaWYgKGN1cnJlbnRJbmRleCAhPT0gbnVsbCkge1xuICAgICAgbWVtZXNUb1BvcFtjdXJyZW50SW5kZXhdLnN0eWxlLm9wYWNpdHkgPSAnMC4wJztcbiAgICB9XG5cbiAgICBsZXQgbmV3SW5kZXggPSBnZXRSYW5kb21JbmRleCgpO1xuXG4gICAgd2hpbGUgKG5ld0luZGV4ID09PSBjdXJyZW50SW5kZXgpIHtcbiAgICAgIG5ld0luZGV4ID0gZ2V0UmFuZG9tSW5kZXgoKTtcbiAgICB9XG4gICAgXG4gICAgbWVtZXNUb1BvcFtuZXdJbmRleF0uc3R5bGUub3BhY2l0eSA9ICcxLjAnO1xuICAgIGN1cnJlbnRJbmRleCA9IG5ld0luZGV4O1xuICB9XG5cbiAgLy8gSW5pdGlhbGx5IGhpZGUgYWxsIG1lbWVzXG4gIG1lbWVzVG9Qb3AuZm9yRWFjaChtZW1lID0+IHtcbiAgICBtZW1lLnN0eWxlLm9wYWNpdHkgPSAnMC4wJztcbiAgfSk7XG4gIC8vIFNob3cgYSByYW5kb20gbWVtZSBldmVyeSAxLzMgc2Vjb25kXG4gIHNldEludGVydmFsKHNob3dSYW5kb21NZW1lLCAzMzMpO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9