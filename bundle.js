/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
  --backgroundColor: #475569;
  --primaryColor: #334155;
  --secondaryColor: #4682b4;
  --textBackground: #94a3b8;
  --hoverColor: #4682b4;
  --hoverTextColor: #334155;
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  font-family: "Roboto", sans-serif;
}

html,
body {
  height: 100%;
  margin: 0;
}

body {
  display: flex;
  flex-direction: column;
  background-color: var(--backgroundColor);
}

main {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  background-color: var(--backgroundColor);
  overflow-y: auto;
  overflow-x: hidden;
}

.main-container {
  display: flex;
  justify-content: center;
}

.main-form-container {
  margin: 12px;
}

.main-container {
  margin: 16px;
}

input {
  background-color: var(--textBackground);
  border-style: none;
  border-radius: 8px;
}

input[type=text],
option {
  width: 200px;
  height: 20px;
  padding: 5px;
}

section {
  border-bottom: solid black 1px;
  margin-bottom: 6px;
  padding-bottom: 10px;
}

/* Header */
header {
  height: 40px;
  display: flex;
  width: 100%;
  background-color: var(--primaryColor);
}

.nav-form,
.nav-saved {
  flex: 1; /* Distribute the space evenly */
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  cursor: pointer;
}

/* Specific styles for each tab */
.nav-form {
  background-color: var(--backgroundColor);
  border-radius: 8px 8px 0px 0px;
}

.nav-saved {
  background-color: var(--primaryColor);
}

/* Optional: Add hover effects for better user experience */
.nav-form:hover,
.nav-saved:hover {
  background-color: var(--hoverColor); /* Define a hover color in your variables */
  color: var(--hoverTextColor); /* Optional: Change text color on hover */
}

/* Section 1 */
.section-1 {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px; /* Adjust the gap between labels and inputs as needed */
  align-items: center; /* Center align labels and inputs vertically */
  padding: 8px;
}

.section-1 label {
  justify-self: end; /* Align labels to the right */
}

/* Section 2 */
.section-2 {
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px; /* Adjust the gap as needed */
  padding: 8px;
}

.checkbox-container-title {
  font-weight: bold;
}

.checkboxes {
  display: grid;
  grid-template-columns: repeat(4, auto 1fr);
  gap: 10px; /* Adjust the gap between labels and checkboxes as needed */
  align-items: center; /* Center align labels and checkboxes vertically */
}

.checkbox {
  display: contents; /* Use contents to make the children directly in the grid */
}

.checkbox label {
  justify-self: end; /* Align labels to the right */
}

.checkbox input[type=checkbox] {
  width: 20px; /* Set the desired width of checkbox */
  height: 20px; /* Set the desired height of checkbox */
  margin: 0; /* Remove default margin */
  cursor: pointer;
}

/* Section 3 */
.section-3 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 10px; /* Adjust the gap between elements as needed */
  align-items: center;
  max-width: 600px; /* Adjust the width as needed */
  margin: auto; /* Center the section */
}

.radio-box {
  text-align: center;
}

.text-box,
.radio-box {
  display: flex;
  flex-direction: column;
}

.text-box label,
.radio-box label {
  margin-bottom: 5px;
}

.text-box input,
.radio-box input[type=radio] {
  width: 100%;
  box-sizing: border-box;
}

.radios {
  display: flex;
  justify-content: center;
  gap: 10px;
}

.radio {
  display: flex;
  align-items: center;
}

.radio input[type=radio] {
  width: auto;
  margin-right: 5px;
  cursor: pointer;
}

/* Notes Container */
.notes-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4px;
  padding: 8px;
}

.notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--textBackground);
  border-radius: 8px;
}

textarea {
  height: 90%;
  margin: 6px;
  color: black;
  border-style: none;
  background-color: transparent;
  padding: 6px;
}

textarea:focus {
  border-style: none;
  outline: none;
}

/* Second Container */
.second-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  border: solid black 1px;
  border-radius: 8px;
  height: auto;
}

.add-transaction {
  padding: 6px;
  text-align: center;
}

.add-transaction-button {
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  border-style: none;
  background-color: transparent;
  font-size: 1.1rem;
  font-weight: 250;
}

.add-transaction-button:hover {
  transform: scale(1.2);
}

.buttons-container {
  display: flex;
  justify-content: space-evenly;
  gap: 12px;
  margin: 16px;
}

.buttons-container button {
  padding: 8px;
  background-color: var(--secondaryColor);
  border-style: none;
  border-radius: 8px;
  cursor: pointer;
}

/* Transaction Forms */
#transaction-container {
  display: flex;
  flex-wrap: wrap;
}

.transaction-card {
  background-color: var(--secondaryColor);
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
  position: relative;
}

.close-card {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 1.2rem;
  cursor: pointer;
  margin: 6px;
  transition: transform 1s ease-in;
}

.close-card:hover {
  transform: scale(1.5);
}

.transaction-card h3 {
  border-bottom: solid black 1px;
  padding: 4px;
  margin-bottom: 6px;
}

.option-container {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  align-items: center;
  padding: 8px;
}

/* Footer  */
footer {
  position: sticky;
  width: 100%;
  padding: 10px;
  background-color: var(--primaryColor);
  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  bottom: 0;
}

.persistent-note {
  width: 60%;
}

textarea#persistent-notes {
  width: 100%;
}

.important-buttons {
  display: flex;
  flex-direction: column;
  margin: 8px;
}

#save-button,
#reset-button {
  padding: 8px;
  background-color: var(--textBackground);
  cursor: pointer;
  margin: 6px;
  border-style: none;
  border-radius: 6px;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["@import url(\"https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap\");\n\n:root {\n  --backgroundColor: #475569;\n  --primaryColor: #334155;\n  --secondaryColor: #4682b4;\n  --textBackground: #94a3b8;\n  --hoverColor: #4682b4;\n  --hoverTextColor: #334155;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: \"Roboto\", sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--backgroundColor);\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--backgroundColor);\n  overflow-y: auto;\n  overflow-x: hidden;\n}\n\n.main-container {\n  display: flex;\n  justify-content: center;\n}\n\n.main-form-container {\n  margin: 12px;\n}\n\n.main-container {\n  margin: 16px;\n}\n\ninput {\n  background-color: var(--textBackground);\n  border-style: none;\n  border-radius: 8px;\n}\n\ninput[type=\"text\"],\noption {\n  width: 200px;\n  height: 20px;\n  padding: 5px;\n}\n\nsection {\n  border-bottom: solid black 1px;\n  margin-bottom: 6px;\n  padding-bottom: 10px;\n}\n\n/* Header */\nheader {\n  height: 40px;\n  display: flex;\n  width: 100%;\n  background-color: var(--primaryColor);\n}\n\n.nav-form,\n.nav-saved {\n  flex: 1; /* Distribute the space evenly */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  cursor: pointer;\n}\n\n/* Specific styles for each tab */\n.nav-form {\n  background-color: var(--backgroundColor);\n  border-radius: 8px 8px 0px 0px;\n}\n\n.nav-saved {\n  background-color: var(--primaryColor);\n}\n\n/* Optional: Add hover effects for better user experience */\n.nav-form:hover,\n.nav-saved:hover {\n  background-color: var(\n    --hoverColor\n  ); /* Define a hover color in your variables */\n  color: var(--hoverTextColor); /* Optional: Change text color on hover */\n}\n\n/* Section 1 */\n.section-1 {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 10px; /* Adjust the gap between labels and inputs as needed */\n  align-items: center; /* Center align labels and inputs vertically */\n  padding: 8px;\n}\n\n.section-1 label {\n  justify-self: end; /* Align labels to the right */\n}\n\n/* Section 2 */\n\n.section-2 {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px; /* Adjust the gap as needed */\n  padding: 8px;\n}\n\n.checkbox-container-title {\n  font-weight: bold;\n}\n\n.checkboxes {\n  display: grid;\n  grid-template-columns: repeat(4, auto 1fr);\n  gap: 10px; /* Adjust the gap between labels and checkboxes as needed */\n  align-items: center; /* Center align labels and checkboxes vertically */\n}\n\n.checkbox {\n  display: contents; /* Use contents to make the children directly in the grid */\n}\n\n.checkbox label {\n  justify-self: end; /* Align labels to the right */\n}\n\n.checkbox input[type=\"checkbox\"] {\n  width: 20px; /* Set the desired width of checkbox */\n  height: 20px; /* Set the desired height of checkbox */\n  margin: 0; /* Remove default margin */\n  cursor: pointer;\n}\n\n/* Section 3 */\n\n.section-3 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px; /* Adjust the gap between elements as needed */\n  align-items: center;\n  max-width: 600px; /* Adjust the width as needed */\n  margin: auto; /* Center the section */\n}\n\n.radio-box {\n  text-align: center;\n}\n\n.text-box,\n.radio-box {\n  display: flex;\n  flex-direction: column;\n}\n\n.text-box label,\n.radio-box label {\n  margin-bottom: 5px;\n}\n\n.text-box input,\n.radio-box input[type=\"radio\"] {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n.radios {\n  display: flex;\n  justify-content: center;\n  gap: 10px;\n}\n\n.radio {\n  display: flex;\n  align-items: center;\n}\n\n.radio input[type=\"radio\"] {\n  width: auto;\n  margin-right: 5px;\n  cursor: pointer;\n}\n\n/* Notes Container */\n\n.notes-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px;\n  padding: 8px;\n}\n\n.notes {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--textBackground);\n  border-radius: 8px;\n}\n\ntextarea {\n  height: 90%;\n  margin: 6px;\n  color: black;\n  border-style: none;\n  background-color: transparent;\n  padding: 6px;\n}\n\ntextarea:focus {\n  border-style: none;\n  outline: none;\n}\n\n/* Second Container */\n\n.second-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 80%;\n  border: solid black 1px;\n  border-radius: 8px;\n  height: auto;\n}\n\n.add-transaction {\n  padding: 6px;\n  text-align: center;\n}\n\n.add-transaction-button {\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n  border-style: none;\n  background-color: transparent;\n  font-size: 1.1rem;\n  font-weight: 250;\n}\n\n.add-transaction-button:hover {\n  transform: scale(1.2);\n}\n\n.buttons-container {\n  display: flex;\n  justify-content: space-evenly;\n  gap: 12px;\n  margin: 16px;\n}\n\n.buttons-container button {\n  padding: 8px;\n  background-color: var(--secondaryColor);\n  border-style: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n/* Transaction Forms */\n\n#transaction-container {\n  display: flex;\n  flex-wrap: wrap;\n}\n.transaction-card {\n  background-color: var(--secondaryColor);\n  padding: 10px;\n  margin: 8px;\n  border-radius: 8px;\n  position: relative;\n}\n\n.close-card {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: none;\n  border: none;\n  font-size: 1.2rem;\n  cursor: pointer;\n  margin: 6px;\n  transition: transform 1s ease-in;\n}\n\n.close-card:hover {\n  transform: scale(1.5);\n}\n\n.transaction-card h3 {\n  border-bottom: solid black 1px;\n  padding: 4px;\n  margin-bottom: 6px;\n}\n\n.option-container {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 10px;\n  align-items: center;\n  padding: 8px;\n}\n\n/* Footer  */\n\nfooter {\n  position: sticky;\n  width: 100%;\n  padding: 10px;\n  background-color: var(--primaryColor);\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 0;\n}\n\n.persistent-note {\n  width: 60%;\n}\n\ntextarea#persistent-notes {\n  width: 100%;\n}\n\n.important-buttons {\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n}\n\n#save-button,\n#reset-button {\n  padding: 8px;\n  background-color: var(--textBackground);\n  cursor: pointer;\n  margin: 6px;\n  border-style: none;\n  border-radius: 6px;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/domControl/Handle.mjs":
/*!***********************************!*\
  !*** ./src/domControl/Handle.mjs ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Handle)
/* harmony export */ });
/* harmony import */ var _forms_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./forms.mjs */ "./src/domControl/forms.mjs");

/**
 * This module is responsible for setting up all handlers. Instantiate the object then call the methods for handling certain things.
 */

class Handle {
  constructor() {
    this.buttonsContainer = document.querySelector(".buttons-container");
  }

  // make handlers for the form page
  handleFormPage() {
    // add transaction button

    let options = [
      "Moving-Money",
      "Mutual-Fund-Trade",
      "Equity-Trade",
      "Options-Trade",
      "Managed-Accounts",
      "Other",
    ];

    const addTransaction = document.querySelector(
      "button.add-transaction-button"
    );
    addTransaction.addEventListener("click", () => {
      // when this button is clicked, 6 buttons will appear for 6 different options. Each option will add. After what type of option is clicked, then a new "Add Transaction" box will appear underneath the previous one.
      for (let i = 0; i < options.length; i++) {
        let button = document.createElement("button");
        button.id = `${options[i]}`;
        button.innerHTML = `${this.formatString(options[i])}`;
        this.buttonsContainer.appendChild(button);
      }
      this.addButtonHandlers();
    });
  }

  addButtonHandlers() {
    const buttons = this.buttonsContainer.querySelectorAll("button");
    const transactionContainer = document.querySelector(
      "#transaction-container"
    );

    buttons.forEach((button) => {
      button.addEventListener("click", () => {
        let choice = button.getAttribute("id");
        let card;
        card = (0,_forms_mjs__WEBPACK_IMPORTED_MODULE_0__.generateCard)(choice);
        console.log(`${choice} clicked`);
        if (card) {
          transactionContainer.appendChild(card);
          this.buttonsContainer.innerHTML = ``;
        }
      });
    });
  }

  formatString(input) {
    return input.split("-").join(" ");
  }
}


/***/ }),

/***/ "./src/domControl/forms.mjs":
/*!**********************************!*\
  !*** ./src/domControl/forms.mjs ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   generateCard: () => (/* binding */ generateCard)
/* harmony export */ });
function generateCard(choice) {
  const card = document.createElement("div");
  card.className = "transaction-card";
  let content = `
    <div class="transaction-card" id="${choice}">
            <button class="close-card">X</button>
            <h3>${formatString(choice)}</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" />
    </div>`;

  switch (choice) {
    case "Moving-Money":
      content +=
        injectAlertsAndRestrictions() +
        injectAuthorizedToTrade() +
        injectFirstOptions();
      break;
    case "Mutual-Fund-Trade":
      content +=
        injectAlertsAndRestrictions() +
        injectAuthorizedToTrade() +
        injectOrdersOpenedOrCancelled() +
        injectFirstOptions();
    default:
      break;
  }
  card.innerHTML = content;
  // Add event listener to close button
  card.querySelector(".close-card").addEventListener("click", () => {
    card.remove();
  });

  return card;
}

function injectAlertsAndRestrictions() {
  return `          
    <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" />
                  <label for="alerts-and-restrictions-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-no" />
                  <label for="alerts-and-restrictions-no">No</label>
                </div>
              </div>
            </div>`;
}

function injectAuthorizedToTrade() {
  return `
                <div class="radio-box">
              <label for="authorized-to-trade">Authorized to Trade?</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-yes" />
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" />
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>
    `;
}

function injectOrdersOpenedOrCancelled() {
  return `
                <div class="radio-box">
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-opened" />
                  <label for="orders-openend">Opened</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-cancelled" />
                  <label for="orders-cancelled">Cancelled</label>
                </div>
              </div>
            </div>
    `;
}

function injectFirstOptions() {
  return `
                <div class="option-container">
              <label for="auto-investments">Auto Investments or PWS planse?</label>
              <select id="auto-investments" name="auto-investments">
                <option value="null">Select Option:</option>
                <option value="adjusted">Adjusted</option>
                <option value="discussed-no-changes">
                  Discussed, no changes.
                </option>
                <option value="na">NA</option>
              </select>
              <label for="action">Action:</label>
              <select id="action" name="action">
                <option value="null">Select Option:</option>
                <option value="deposit">Deposit</option>
                <option value="withdrawal">Withdrawal</option>
                <option value="journal">Journal</option>
              </select>
            </div>
    `;
}

function formatString(input) {
  return input.split("-").join(" ");
}




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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _domControl_Handle_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domControl/Handle.mjs */ "./src/domControl/Handle.mjs");


const handle = new _domControl_Handle_mjs__WEBPACK_IMPORTED_MODULE_1__["default"]();
handle.handleFormPage();
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map