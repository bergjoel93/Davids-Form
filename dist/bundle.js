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
  --textBoxColor: white;
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
  overflow-x: hidden;
}

.main-container {
  display: flex;
  flex: 1;
  justify-content: center;
  margin: 16px;
}

.main-form-container {
  margin: 12px;
  flex: 1;
  display: flex;
  flex-direction: column;
}

input {
  background-color: var(--textBoxColor);
  border-style: none;
}

input[type=text],
option {
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

.text-box {
  display: flex;
  flex-direction: column;
}

.text-box label {
  margin-bottom: 5px;
}

.text-box input {
  width: 100%;
  box-sizing: border-box;
}

/* Notes Container */
.notes-container {
  padding: 8px;
  max-height: 350px;
  flex: 1;
  display: flex;
}

.notes {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--textBackground);
  border-radius: 8px;
  flex: 1;
}

textarea {
  width: 100%;
  height: 100%;
  margin: 8px;
  color: black;
  border-style: none;
  background-color: transparent;
  padding: 6px;
  flex: 1;
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
  border: solid black 1px;
  border-radius: 8px;
  max-height: 750px;
  width: 450px;
  overflow-y: auto;
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
  margin: 12px;
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
  flex-direction: column;
}

.transaction-card {
  background-color: var(--secondaryColor);
  padding: 10px;
  margin: 8px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
}

.secondary-card-container {
  display: flex;
  flex-direction: column;
}

.transaction-checkbox {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 6px;
}

.transaction-checkbox label {
  justify-self: start;
}

.transaction-checkbox input {
  justify-self: start;
  width: 20px;
  height: 20px;
  margin: 0;
  cursor: pointer;
  margin-left: 6px;
}

.transaction-title {
  background-color: transparent;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
}

.close-card {
  position: absolute;
  top: 0;
  right: 0;
  background: none;
  border: none;
  font-size: 1rem;
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
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  padding: 6px;
}

.option-container label {
  justify-self: start;
}

.text-input-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 10px;
  padding: 6px;
}

.text-input-container label {
  justify-self: start;
  padding-right: 6px;
}

.radio-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 6px;
}

.radios {
  display: flex;
  justify-content: start;
  gap: 12px;
}

.tax-witholding-container {
  border: solid black 1px;
  padding: 6px;
  border-radius: 6px;
}

.text-input-container.three {
  grid-template-columns: 1fr 0.9fr 0.1fr;
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

#save-persistent-button,
#reset-persistent-button {
  padding: 8px;
  background-color: var(--textBackground);
  cursor: pointer;
  margin: 6px;
  border-style: none;
  border-radius: 6px;
}

/* Submit Button */
.submit-reset-buttons {
  justify-self: end;
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 0.5rem;
  gap: 16px;
}

#submit-button,
#reset-button {
  background-color: var(--secondaryColor);
  cursor: pointer;
  font-size: 1rem;
  border-style: none;
  border-radius: 8px;
  padding: 8px;
}

#submit-button:hover,
#reset-button:hover {
  background-color: var(--primaryColor);
  color: var(--hoverColor);
}

/* Overlay */
#overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: var(--primaryColor);
  z-index: 2;
  display: none;
}

#overlay .header {
  display: flex;
  width: 100%;
}

#overlay-notes-container {
  width: 100%;
  height: 100%;
  padding: 24px;
  font-size: 1.3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}

#overlay-notes-container ul {
  padding-left: 24px;
  margin: 0;
}

#overlay-notes-container ul li {
  margin-bottom: 16px; /* Space between list items */
  list-style-type: disc;
}

.overlay-note {
  display: flex;
  flex-direction: column;
}

.note-title {
  display: flex;
  gap: 12px;
  align-items: center;
}

.expand-modal-btn {
  padding: 5px;
  font-size: 1rem;
  background-color: var(--textBackground);
  border-radius: 8px;
  border-style: none;
  cursor: pointer;
}

.note-modal {
  width: 80%;
  height: 80%;
  position: fixed;
  top: 50%;
  left: 50%;
  transform-origin: center;
  transform: translate(-50%, -50%);
  margin: 12px;
  padding: 12px;
  border-radius: 8px;
  display: none;
  background-color: var(--textBackground);
  opacity: 0;
}

.close-modal-btn {
  width: 24px;
  height: 24px;
  position: fixed;
  top: 0;
  right: 0;
  margin: 8px;
  font-size: 1.5rem;
  background-color: transparent;
  border-style: none;
  cursor: pointer;
}

.note-modal.show {
  opacity: 100%;
  pointer-events: all;
  display: flex;
  flex-direction: column;
}

.note-print {
  padding: 12px;
  width: 100%;
}

.backdrop {
  pointer-events: none;
  position: fixed;
  inset: 0;
  background: #000;
  opacity: 0%;
}

.backdrop.show {
  opacity: 30%;
}`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;EACE,0BAAA;EACA,uBAAA;EACA,yBAAA;EACA,yBAAA;EACA,qBAAA;EACA,yBAAA;EACA,qBAAA;AAAF;;AAGA;EACE,sBAAA;EACA,UAAA;EACA,SAAA;EACA,iCAAA;AAAF;;AAGA;;EAEE,YAAA;EACA,SAAA;AAAF;;AAGA;EACE,aAAA;EACA,sBAAA;EACA,wCAAA;AAAF;;AAGA;EACE,aAAA;EACA,OAAA;EACA,sBAAA;EACA,mBAAA;EACA,wCAAA;EACA,kBAAA;AAAF;;AAGA;EACE,aAAA;EACA,OAAA;EACA,uBAAA;EACA,YAAA;AAAF;;AAGA;EACE,YAAA;EACA,OAAA;EACA,aAAA;EACA,sBAAA;AAAF;;AAGA;EACE,qCAAA;EACA,kBAAA;AAAF;;AAGA;;EAEE,YAAA;EACA,YAAA;AAAF;;AAGA;EACE,8BAAA;EACA,kBAAA;EACA,oBAAA;AAAF;;AAGA,WAAA;AACA;EACE,YAAA;EACA,aAAA;EACA,WAAA;EACA,qCAAA;AAAF;;AAGA;;EAEE,OAAA,EAAA,gCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,aAAA;EACA,eAAA;AAAF;;AAGA,iCAAA;AACA;EACE,wCAAA;EACA,8BAAA;AAAF;;AAGA;EACE,qCAAA;AAAF;;AAGA,2DAAA;AACA;;EAEE,mCAAA,EAEG,2CAAA;EACH,4BAAA,EAAA,yCAAA;AAFF;;AAKA,cAAA;AACA;EACE,aAAA;EACA,+BAAA;EACA,SAAA,EAAA,uDAAA;EACA,mBAAA,EAAA,8CAAA;EACA,YAAA;AAFF;;AAKA;EACE,iBAAA,EAAA,8BAAA;AAFF;;AAKA,cAAA;AAEA;EACE,aAAA;EACA,0BAAA;EACA,SAAA,EAAA,6BAAA;EACA,YAAA;AAHF;;AAMA;EACE,iBAAA;AAHF;;AAMA;EACE,aAAA;EACA,0CAAA;EACA,SAAA,EAAA,2DAAA;EACA,mBAAA,EAAA,kDAAA;AAHF;;AAMA;EACE,iBAAA,EAAA,2DAAA;AAHF;;AAMA;EACE,iBAAA,EAAA,8BAAA;AAHF;;AAMA;EACE,WAAA,EAAA,sCAAA;EACA,YAAA,EAAA,uCAAA;EACA,SAAA,EAAA,0BAAA;EACA,eAAA;AAHF;;AAMA,cAAA;AAEA;EACE,aAAA;EACA,qCAAA;EACA,SAAA,EAAA,8CAAA;EACA,mBAAA;EACA,gBAAA,EAAA,+BAAA;EACA,YAAA,EAAA,uBAAA;AAJF;;AAOA;EACE,aAAA;EACA,sBAAA;AAJF;;AAOA;EACE,kBAAA;AAJF;;AAOA;EACE,WAAA;EACA,sBAAA;AAJF;;AAOA,oBAAA;AAEA;EACE,YAAA;EACA,iBAAA;EACA,OAAA;EACA,aAAA;AALF;;AAQA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uCAAA;EACA,kBAAA;EACA,OAAA;AALF;;AAQA;EACE,WAAA;EACA,YAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,6BAAA;EACA,YAAA;EACA,OAAA;AALF;;AAQA;EACE,kBAAA;EACA,aAAA;AALF;;AAQA,qBAAA;AAEA;EACE,aAAA;EACA,sBAAA;EACA,mBAAA;EACA,uBAAA;EACA,kBAAA;EACA,iBAAA;EACA,YAAA;EACA,gBAAA;AANF;;AASA;EACE,YAAA;EACA,kBAAA;AANF;;AASA;EACE,eAAA;EACA,sCAAA;EACA,kBAAA;EACA,6BAAA;EACA,iBAAA;EACA,gBAAA;AANF;;AASA;EACE,qBAAA;AANF;;AASA;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,SAAA;EACA,YAAA;AANF;;AASA;EACE,YAAA;EACA,uCAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;AANF;;AASA,sBAAA;AAEA;EACE,aAAA;EACA,sBAAA;AAPF;;AASA;EACE,uCAAA;EACA,aAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;EACA,aAAA;EACA,sBAAA;AANF;;AASA;EACE,aAAA;EACA,sBAAA;AANF;;AASA;EACE,aAAA;EACA,8BAAA;EACA,WAAA;AANF;;AASA;EACE,mBAAA;AANF;;AASA;EACE,mBAAA;EACA,WAAA;EACA,YAAA;EACA,SAAA;EACA,eAAA;EACA,gBAAA;AANF;;AASA;EACE,6BAAA;EACA,iBAAA;EACA,iBAAA;EACA,kBAAA;AANF;;AASA;EACE,kBAAA;EACA,MAAA;EACA,QAAA;EACA,gBAAA;EACA,YAAA;EACA,eAAA;EACA,eAAA;EACA,WAAA;EACA,gCAAA;AANF;;AASA;EACE,qBAAA;AANF;;AASA;EACE,8BAAA;EACA,YAAA;EACA,kBAAA;AANF;;AASA;EACE,aAAA;EACA,8BAAA;EACA,SAAA;EAEA,YAAA;AAPF;;AAUA;EACE,mBAAA;AAPF;;AAUA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;EACA,SAAA;EACA,YAAA;AAPF;;AASA;EACE,mBAAA;EACA,kBAAA;AANF;;AASA;EACE,aAAA;EACA,8BAAA;EACA,YAAA;AANF;;AASA;EACE,aAAA;EACA,sBAAA;EACA,SAAA;AANF;;AASA;EACE,uBAAA;EACA,YAAA;EACA,kBAAA;AANF;;AASA;EACE,sCAAA;AANF;;AASA,YAAA;AAEA;EACE,gBAAA;EACA,WAAA;EACA,aAAA;EACA,qCAAA;EACA,yCAAA;EACA,aAAA;EACA,mBAAA;EACA,uBAAA;EACA,SAAA;AAPF;;AAUA;EACE,UAAA;AAPF;;AAUA;EACE,WAAA;AAPF;;AAUA;EACE,aAAA;EACA,sBAAA;EACA,WAAA;AAPF;;AAUA;;EAEE,YAAA;EACA,uCAAA;EACA,eAAA;EACA,WAAA;EACA,kBAAA;EACA,kBAAA;AAPF;;AAUA,kBAAA;AACA;EACE,iBAAA;EACA,WAAA;EACA,aAAA;EACA,uBAAA;EACA,cAAA;EACA,SAAA;AAPF;;AAUA;;EAEE,uCAAA;EACA,eAAA;EACA,eAAA;EACA,kBAAA;EACA,kBAAA;EACA,YAAA;AAPF;;AAUA;;EAEE,qCAAA;EACA,wBAAA;AAPF;;AAUA,YAAA;AACA;EACE,eAAA;EACA,MAAA;EACA,OAAA;EACA,WAAA;EACA,YAAA;EACA,qCAAA;EACA,UAAA;EACA,aAAA;AAPF;;AAUA;EACE,aAAA;EACA,WAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,aAAA;EACA,iBAAA;EACA,aAAA;EACA,sBAAA;EACA,mBAAA;AAPF;;AAUA;EACE,kBAAA;EACA,SAAA;AAPF;;AAUA;EACE,mBAAA,EAAA,6BAAA;EACA,qBAAA;AAPF;;AAUA;EACE,aAAA;EACA,sBAAA;AAPF;;AAUA;EACE,aAAA;EACA,SAAA;EACA,mBAAA;AAPF;;AAUA;EACE,YAAA;EACA,eAAA;EACA,uCAAA;EACA,kBAAA;EACA,kBAAA;EACA,eAAA;AAPF;;AAUA;EACE,UAAA;EACA,WAAA;EACA,eAAA;EACA,QAAA;EACA,SAAA;EACA,wBAAA;EACA,gCAAA;EACA,YAAA;EACA,aAAA;EACA,kBAAA;EACA,aAAA;EACA,uCAAA;EACA,UAAA;AAPF;;AAUA;EACE,WAAA;EACA,YAAA;EACA,eAAA;EACA,MAAA;EACA,QAAA;EACA,WAAA;EACA,iBAAA;EACA,6BAAA;EACA,kBAAA;EACA,eAAA;AAPF;;AAUA;EACE,aAAA;EACA,mBAAA;EACA,aAAA;EACA,sBAAA;AAPF;;AAUA;EACE,aAAA;EACA,WAAA;AAPF;;AAUA;EACE,oBAAA;EACA,eAAA;EACA,QAAA;EACA,gBAAA;EACA,WAAA;AAPF;;AAUA;EACE,YAAA;AAPF","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');\n\n:root {\n  --backgroundColor: #475569;\n  --primaryColor: #334155;\n  --secondaryColor: #4682b4;\n  --textBackground: #94a3b8;\n  --hoverColor: #4682b4;\n  --hoverTextColor: #334155;\n  --textBoxColor: white;\n}\n\n* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n}\n\nhtml,\nbody {\n  height: 100%;\n  margin: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  background-color: var(--backgroundColor);\n}\n\nmain {\n  display: flex;\n  flex: 1;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--backgroundColor);\n  overflow-x: hidden;\n}\n\n.main-container {\n  display: flex;\n  flex: 1;\n  justify-content: center;\n  margin: 16px;\n}\n\n.main-form-container {\n  margin: 12px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n\ninput {\n  background-color: var(--textBoxColor);\n  border-style: none;\n}\n\ninput[type='text'],\noption {\n  height: 20px;\n  padding: 5px;\n}\n\nsection {\n  border-bottom: solid black 1px;\n  margin-bottom: 6px;\n  padding-bottom: 10px;\n}\n\n/* Header */\nheader {\n  height: 40px;\n  display: flex;\n  width: 100%;\n  background-color: var(--primaryColor);\n}\n\n.nav-form,\n.nav-saved {\n  flex: 1; /* Distribute the space evenly */\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px;\n  cursor: pointer;\n}\n\n/* Specific styles for each tab */\n.nav-form {\n  background-color: var(--backgroundColor);\n  border-radius: 8px 8px 0px 0px;\n}\n\n.nav-saved {\n  background-color: var(--primaryColor);\n}\n\n/* Optional: Add hover effects for better user experience */\n.nav-form:hover,\n.nav-saved:hover {\n  background-color: var(\n    --hoverColor\n  ); /* Define a hover color in your variables */\n  color: var(--hoverTextColor); /* Optional: Change text color on hover */\n}\n\n/* Section 1 */\n.section-1 {\n  display: grid;\n  grid-template-columns: auto 1fr;\n  gap: 10px; /* Adjust the gap between labels and inputs as needed */\n  align-items: center; /* Center align labels and inputs vertically */\n  padding: 8px;\n}\n\n.section-1 label {\n  justify-self: end; /* Align labels to the right */\n}\n\n/* Section 2 */\n\n.section-2 {\n  display: grid;\n  grid-template-columns: 1fr;\n  gap: 10px; /* Adjust the gap as needed */\n  padding: 8px;\n}\n\n.checkbox-container-title {\n  font-weight: bold;\n}\n\n.checkboxes {\n  display: grid;\n  grid-template-columns: repeat(4, auto 1fr);\n  gap: 10px; /* Adjust the gap between labels and checkboxes as needed */\n  align-items: center; /* Center align labels and checkboxes vertically */\n}\n\n.checkbox {\n  display: contents; /* Use contents to make the children directly in the grid */\n}\n\n.checkbox label {\n  justify-self: end; /* Align labels to the right */\n}\n\n.checkbox input[type='checkbox'] {\n  width: 20px; /* Set the desired width of checkbox */\n  height: 20px; /* Set the desired height of checkbox */\n  margin: 0; /* Remove default margin */\n  cursor: pointer;\n}\n\n/* Section 3 */\n\n.section-3 {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 10px; /* Adjust the gap between elements as needed */\n  align-items: center;\n  max-width: 600px; /* Adjust the width as needed */\n  margin: auto; /* Center the section */\n}\n\n.text-box {\n  display: flex;\n  flex-direction: column;\n}\n\n.text-box label {\n  margin-bottom: 5px;\n}\n\n.text-box input {\n  width: 100%;\n  box-sizing: border-box;\n}\n\n/* Notes Container */\n\n.notes-container {\n  padding: 8px;\n  max-height: 350px;\n  flex: 1;\n  display: flex;\n}\n\n.notes {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background-color: var(--textBackground);\n  border-radius: 8px;\n  flex: 1;\n}\n\ntextarea {\n  width: 100%;\n  height: 100%;\n  margin: 8px;\n  color: black;\n  border-style: none;\n  background-color: transparent;\n  padding: 6px;\n  flex: 1;\n}\n\ntextarea:focus {\n  border-style: none;\n  outline: none;\n}\n\n/* Second Container */\n\n.second-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  border: solid black 1px;\n  border-radius: 8px;\n  max-height: 750px;\n  width: 450px;\n  overflow-y: auto;\n}\n\n.add-transaction {\n  padding: 6px;\n  text-align: center;\n}\n\n.add-transaction-button {\n  cursor: pointer;\n  transition: transform 0.3s ease-in-out;\n  border-style: none;\n  background-color: transparent;\n  font-size: 1.1rem;\n  font-weight: 250;\n}\n\n.add-transaction-button:hover {\n  transform: scale(1.2);\n}\n\n.buttons-container {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 12px;\n  margin: 12px;\n}\n\n.buttons-container button {\n  padding: 8px;\n  background-color: var(--secondaryColor);\n  border-style: none;\n  border-radius: 8px;\n  cursor: pointer;\n}\n\n/* Transaction Forms */\n\n#transaction-container {\n  display: flex;\n  flex-direction: column;\n}\n.transaction-card {\n  background-color: var(--secondaryColor);\n  padding: 10px;\n  margin: 8px;\n  border-radius: 8px;\n  position: relative;\n  display: flex;\n  flex-direction: column;\n}\n\n.secondary-card-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.transaction-checkbox {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  margin: 6px;\n}\n\n.transaction-checkbox label {\n  justify-self: start;\n}\n\n.transaction-checkbox input {\n  justify-self: start;\n  width: 20px;\n  height: 20px;\n  margin: 0;\n  cursor: pointer;\n  margin-left: 6px;\n}\n\n.transaction-title {\n  background-color: transparent;\n  font-size: 1.2rem;\n  font-weight: bold;\n  text-align: center;\n}\n\n.close-card {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: none;\n  border: none;\n  font-size: 1rem;\n  cursor: pointer;\n  margin: 6px;\n  transition: transform 1s ease-in;\n}\n\n.close-card:hover {\n  transform: scale(1.5);\n}\n\n.transaction-card h3 {\n  border-bottom: solid black 1px;\n  padding: 4px;\n  margin-bottom: 6px;\n}\n\n.option-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n\n  padding: 6px;\n}\n\n.option-container label {\n  justify-self: start;\n}\n\n.text-input-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  align-items: center;\n  gap: 10px;\n  padding: 6px;\n}\n.text-input-container label {\n  justify-self: start;\n  padding-right: 6px;\n}\n\n.radio-container {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  padding: 6px;\n}\n\n.radios {\n  display: flex;\n  justify-content: start;\n  gap: 12px;\n}\n\n.tax-witholding-container {\n  border: solid black 1px;\n  padding: 6px;\n  border-radius: 6px;\n}\n\n.text-input-container.three {\n  grid-template-columns: 1fr 0.9fr 0.1fr;\n}\n\n/* Footer  */\n\nfooter {\n  position: sticky;\n  width: 100%;\n  padding: 10px;\n  background-color: var(--primaryColor);\n  box-shadow: 0 -2px 5px rgba(0, 0, 0, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  bottom: 0;\n}\n\n.persistent-note {\n  width: 60%;\n}\n\ntextarea#persistent-notes {\n  width: 100%;\n}\n\n.important-buttons {\n  display: flex;\n  flex-direction: column;\n  margin: 8px;\n}\n\n#save-persistent-button,\n#reset-persistent-button {\n  padding: 8px;\n  background-color: var(--textBackground);\n  cursor: pointer;\n  margin: 6px;\n  border-style: none;\n  border-radius: 6px;\n}\n\n/* Submit Button */\n.submit-reset-buttons {\n  justify-self: end;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  margin: 0.5rem;\n  gap: 16px;\n}\n\n#submit-button,\n#reset-button {\n  background-color: var(--secondaryColor);\n  cursor: pointer;\n  font-size: 1rem;\n  border-style: none;\n  border-radius: 8px;\n  padding: 8px;\n}\n\n#submit-button:hover,\n#reset-button:hover {\n  background-color: var(--primaryColor);\n  color: var(--hoverColor);\n}\n\n/* Overlay */\n#overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background-color: var(--primaryColor);\n  z-index: 2;\n  display: none;\n}\n\n#overlay .header {\n  display: flex;\n  width: 100%;\n}\n\n#overlay-notes-container {\n  width: 100%;\n  height: 100%;\n  padding: 24px;\n  font-size: 1.3rem;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n}\n\n#overlay-notes-container ul {\n  padding-left: 24px;\n  margin: 0;\n}\n\n#overlay-notes-container ul li {\n  margin-bottom: 16px; /* Space between list items */\n  list-style-type: disc;\n}\n\n.overlay-note {\n  display: flex;\n  flex-direction: column;\n}\n\n.note-title {\n  display: flex;\n  gap: 12px;\n  align-items: center;\n}\n\n.expand-modal-btn {\n  padding: 5px;\n  font-size: 1rem;\n  background-color: var(--textBackground);\n  border-radius: 8px;\n  border-style: none;\n  cursor: pointer;\n}\n\n.note-modal {\n  width: 80%;\n  height: 80%;\n  position: fixed;\n  top: 50%;\n  left: 50%;\n  transform-origin: center;\n  transform: translate(-50%, -50%);\n  margin: 12px;\n  padding: 12px;\n  border-radius: 8px;\n  display: none;\n  background-color: var(--textBackground);\n  opacity: 0;\n}\n\n.close-modal-btn {\n  width: 24px;\n  height: 24px;\n  position: fixed;\n  top: 0;\n  right: 0;\n  margin: 8px;\n  font-size: 1.5rem;\n  background-color: transparent;\n  border-style: none;\n  cursor: pointer;\n}\n\n.note-modal.show {\n  opacity: 100%;\n  pointer-events: all;\n  display: flex;\n  flex-direction: column;\n}\n\n.note-print {\n  padding: 12px;\n  width: 100%;\n}\n\n.backdrop {\n  pointer-events: none;\n  position: fixed;\n  inset: 0;\n  background: #000;\n  opacity: 0%;\n}\n\n.backdrop.show {\n  opacity: 30%;\n}\n"],"sourceRoot":""}]);
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

/***/ "./node_modules/date-fns/_lib/addLeadingZeros.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/addLeadingZeros.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addLeadingZeros: () => (/* binding */ addLeadingZeros)
/* harmony export */ });
function addLeadingZeros(number, targetLength) {
  const sign = number < 0 ? "-" : "";
  const output = Math.abs(number).toString().padStart(targetLength, "0");
  return sign + output;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/defaultOptions.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/_lib/defaultOptions.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
let defaultOptions = {};

function getDefaultOptions() {
  return defaultOptions;
}

function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/formatters.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/formatters.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatters: () => (/* binding */ formatters)
/* harmony export */ });
/* harmony import */ var _getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../getDayOfYear.mjs */ "./node_modules/date-fns/getDayOfYear.mjs");
/* harmony import */ var _getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../getISOWeek.mjs */ "./node_modules/date-fns/getISOWeek.mjs");
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../getWeek.mjs */ "./node_modules/date-fns/getWeek.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");
/* harmony import */ var _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lightFormatters.mjs */ "./node_modules/date-fns/_lib/format/lightFormatters.mjs");








const dayPeriodEnum = {
  am: "am",
  pm: "pm",
  midnight: "midnight",
  noon: "noon",
  morning: "morning",
  afternoon: "afternoon",
  evening: "evening",
  night: "night",
};

/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* | Milliseconds in day            |
 * |  b  | AM, PM, noon, midnight         |  B  | Flexible day period            |
 * |  c  | Stand-alone local day of week  |  C* | Localized hour w/ day period   |
 * |  d  | Day of month                   |  D  | Day of year                    |
 * |  e  | Local day of week              |  E  | Day of week                    |
 * |  f  |                                |  F* | Day of week in month           |
 * |  g* | Modified Julian day            |  G  | Era                            |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  i! | ISO day of week                |  I! | ISO week of year               |
 * |  j* | Localized hour w/ day period   |  J* | Localized hour w/o day period  |
 * |  k  | Hour [1-24]                    |  K  | Hour [0-11]                    |
 * |  l* | (deprecated)                   |  L  | Stand-alone month              |
 * |  m  | Minute                         |  M  | Month                          |
 * |  n  |                                |  N  |                                |
 * |  o! | Ordinal number modifier        |  O  | Timezone (GMT)                 |
 * |  p! | Long localized time            |  P! | Long localized date            |
 * |  q  | Stand-alone quarter            |  Q  | Quarter                        |
 * |  r* | Related Gregorian year         |  R! | ISO week-numbering year        |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  t! | Seconds timestamp              |  T! | Milliseconds timestamp         |
 * |  u  | Extended year                  |  U* | Cyclic year                    |
 * |  v* | Timezone (generic non-locat.)  |  V* | Timezone (location)            |
 * |  w  | Local week of year             |  W* | Week of month                  |
 * |  x  | Timezone (ISO-8601 w/o Z)      |  X  | Timezone (ISO-8601)            |
 * |  y  | Year (abs)                     |  Y  | Local week-numbering year      |
 * |  z  | Timezone (specific non-locat.) |  Z* | Timezone (aliases)             |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 *
 * Letters marked by ! are non-standard, but implemented by date-fns:
 * - `o` modifies the previous token to turn it into an ordinal (see `format` docs)
 * - `i` is ISO day of week. For `i` and `ii` is returns numeric ISO week days,
 *   i.e. 7 for Sunday, 1 for Monday, etc.
 * - `I` is ISO week of year, as opposed to `w` which is local week of year.
 * - `R` is ISO week-numbering year, as opposed to `Y` which is local week-numbering year.
 *   `R` is supposed to be used in conjunction with `I` and `i`
 *   for universal ISO week-numbering date, whereas
 *   `Y` is supposed to be used in conjunction with `w` and `e`
 *   for week-numbering date specific to the locale.
 * - `P` is long localized date format
 * - `p` is long localized time format
 */

const formatters = {
  // Era
  G: function (date, token, localize) {
    const era = date.getFullYear() > 0 ? 1 : 0;
    switch (token) {
      // AD, BC
      case "G":
      case "GG":
      case "GGG":
        return localize.era(era, { width: "abbreviated" });
      // A, B
      case "GGGGG":
        return localize.era(era, { width: "narrow" });
      // Anno Domini, Before Christ
      case "GGGG":
      default:
        return localize.era(era, { width: "wide" });
    }
  },

  // Year
  y: function (date, token, localize) {
    // Ordinal number
    if (token === "yo") {
      const signedYear = date.getFullYear();
      // Returns 1 for 1 BC (which is year 0 in JavaScript)
      const year = signedYear > 0 ? signedYear : 1 - signedYear;
      return localize.ordinalNumber(year, { unit: "year" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.y(date, token);
  },

  // Local week-numbering year
  Y: function (date, token, localize, options) {
    const signedWeekYear = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const weekYear = signedWeekYear > 0 ? signedWeekYear : 1 - signedWeekYear;

    // Two digit year
    if (token === "YY") {
      const twoDigitYear = weekYear % 100;
      return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(twoDigitYear, 2);
    }

    // Ordinal number
    if (token === "Yo") {
      return localize.ordinalNumber(weekYear, { unit: "year" });
    }

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(weekYear, token.length);
  },

  // ISO week-numbering year
  R: function (date, token) {
    const isoWeekYear = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_3__.getISOWeekYear)(date);

    // Padding
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeekYear, token.length);
  },

  // Extended year. This is a single number designating the year of this calendar system.
  // The main difference between `y` and `u` localizers are B.C. years:
  // | Year | `y` | `u` |
  // |------|-----|-----|
  // | AC 1 |   1 |   1 |
  // | BC 1 |   1 |   0 |
  // | BC 2 |   2 |  -1 |
  // Also `yy` always returns the last two digits of a year,
  // while `uu` pads single digit years to 2 characters and returns other years unchanged.
  u: function (date, token) {
    const year = date.getFullYear();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(year, token.length);
  },

  // Quarter
  Q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "Q":
        return String(quarter);
      // 01, 02, 03, 04
      case "QQ":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "Qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "QQQ":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "formatting",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "QQQQQ":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "formatting",
        });
      // 1st quarter, 2nd quarter, ...
      case "QQQQ":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone quarter
  q: function (date, token, localize) {
    const quarter = Math.ceil((date.getMonth() + 1) / 3);
    switch (token) {
      // 1, 2, 3, 4
      case "q":
        return String(quarter);
      // 01, 02, 03, 04
      case "qq":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(quarter, 2);
      // 1st, 2nd, 3rd, 4th
      case "qo":
        return localize.ordinalNumber(quarter, { unit: "quarter" });
      // Q1, Q2, Q3, Q4
      case "qqq":
        return localize.quarter(quarter, {
          width: "abbreviated",
          context: "standalone",
        });
      // 1, 2, 3, 4 (narrow quarter; could be not numerical)
      case "qqqqq":
        return localize.quarter(quarter, {
          width: "narrow",
          context: "standalone",
        });
      // 1st quarter, 2nd quarter, ...
      case "qqqq":
      default:
        return localize.quarter(quarter, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // Month
  M: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      case "M":
      case "MM":
        return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.M(date, token);
      // 1st, 2nd, ..., 12th
      case "Mo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "MMM":
        return localize.month(month, {
          width: "abbreviated",
          context: "formatting",
        });
      // J, F, ..., D
      case "MMMMM":
        return localize.month(month, {
          width: "narrow",
          context: "formatting",
        });
      // January, February, ..., December
      case "MMMM":
      default:
        return localize.month(month, { width: "wide", context: "formatting" });
    }
  },

  // Stand-alone month
  L: function (date, token, localize) {
    const month = date.getMonth();
    switch (token) {
      // 1, 2, ..., 12
      case "L":
        return String(month + 1);
      // 01, 02, ..., 12
      case "LL":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(month + 1, 2);
      // 1st, 2nd, ..., 12th
      case "Lo":
        return localize.ordinalNumber(month + 1, { unit: "month" });
      // Jan, Feb, ..., Dec
      case "LLL":
        return localize.month(month, {
          width: "abbreviated",
          context: "standalone",
        });
      // J, F, ..., D
      case "LLLLL":
        return localize.month(month, {
          width: "narrow",
          context: "standalone",
        });
      // January, February, ..., December
      case "LLLL":
      default:
        return localize.month(month, { width: "wide", context: "standalone" });
    }
  },

  // Local week of year
  w: function (date, token, localize, options) {
    const week = (0,_getWeek_mjs__WEBPACK_IMPORTED_MODULE_4__.getWeek)(date, options);

    if (token === "wo") {
      return localize.ordinalNumber(week, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(week, token.length);
  },

  // ISO week of year
  I: function (date, token, localize) {
    const isoWeek = (0,_getISOWeek_mjs__WEBPACK_IMPORTED_MODULE_5__.getISOWeek)(date);

    if (token === "Io") {
      return localize.ordinalNumber(isoWeek, { unit: "week" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoWeek, token.length);
  },

  // Day of the month
  d: function (date, token, localize) {
    if (token === "do") {
      return localize.ordinalNumber(date.getDate(), { unit: "date" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.d(date, token);
  },

  // Day of year
  D: function (date, token, localize) {
    const dayOfYear = (0,_getDayOfYear_mjs__WEBPACK_IMPORTED_MODULE_6__.getDayOfYear)(date);

    if (token === "Do") {
      return localize.ordinalNumber(dayOfYear, { unit: "dayOfYear" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(dayOfYear, token.length);
  },

  // Day of week
  E: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    switch (token) {
      // Tue
      case "E":
      case "EE":
      case "EEE":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "EEEEE":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "EEEEEE":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "EEEE":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Local day of week
  e: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (Nth day of week with current locale or weekStartsOn)
      case "e":
        return String(localDayOfWeek);
      // Padded numerical value
      case "ee":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, 2);
      // 1st, 2nd, ..., 7th
      case "eo":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "eee":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "eeeee":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "eeeeee":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "eeee":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Stand-alone local day of week
  c: function (date, token, localize, options) {
    const dayOfWeek = date.getDay();
    const localDayOfWeek = (dayOfWeek - options.weekStartsOn + 8) % 7 || 7;
    switch (token) {
      // Numerical value (same as in `e`)
      case "c":
        return String(localDayOfWeek);
      // Padded numerical value
      case "cc":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(localDayOfWeek, token.length);
      // 1st, 2nd, ..., 7th
      case "co":
        return localize.ordinalNumber(localDayOfWeek, { unit: "day" });
      case "ccc":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "standalone",
        });
      // T
      case "ccccc":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "standalone",
        });
      // Tu
      case "cccccc":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "standalone",
        });
      // Tuesday
      case "cccc":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "standalone",
        });
    }
  },

  // ISO day of week
  i: function (date, token, localize) {
    const dayOfWeek = date.getDay();
    const isoDayOfWeek = dayOfWeek === 0 ? 7 : dayOfWeek;
    switch (token) {
      // 2
      case "i":
        return String(isoDayOfWeek);
      // 02
      case "ii":
        return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(isoDayOfWeek, token.length);
      // 2nd
      case "io":
        return localize.ordinalNumber(isoDayOfWeek, { unit: "day" });
      // Tue
      case "iii":
        return localize.day(dayOfWeek, {
          width: "abbreviated",
          context: "formatting",
        });
      // T
      case "iiiii":
        return localize.day(dayOfWeek, {
          width: "narrow",
          context: "formatting",
        });
      // Tu
      case "iiiiii":
        return localize.day(dayOfWeek, {
          width: "short",
          context: "formatting",
        });
      // Tuesday
      case "iiii":
      default:
        return localize.day(dayOfWeek, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM or PM
  a: function (date, token, localize) {
    const hours = date.getHours();
    const dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "aaa":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "aaaaa":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "aaaa":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // AM, PM, midnight, noon
  b: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours === 12) {
      dayPeriodEnumValue = dayPeriodEnum.noon;
    } else if (hours === 0) {
      dayPeriodEnumValue = dayPeriodEnum.midnight;
    } else {
      dayPeriodEnumValue = hours / 12 >= 1 ? "pm" : "am";
    }

    switch (token) {
      case "b":
      case "bb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "bbb":
        return localize
          .dayPeriod(dayPeriodEnumValue, {
            width: "abbreviated",
            context: "formatting",
          })
          .toLowerCase();
      case "bbbbb":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "bbbb":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // in the morning, in the afternoon, in the evening, at night
  B: function (date, token, localize) {
    const hours = date.getHours();
    let dayPeriodEnumValue;
    if (hours >= 17) {
      dayPeriodEnumValue = dayPeriodEnum.evening;
    } else if (hours >= 12) {
      dayPeriodEnumValue = dayPeriodEnum.afternoon;
    } else if (hours >= 4) {
      dayPeriodEnumValue = dayPeriodEnum.morning;
    } else {
      dayPeriodEnumValue = dayPeriodEnum.night;
    }

    switch (token) {
      case "B":
      case "BB":
      case "BBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "abbreviated",
          context: "formatting",
        });
      case "BBBBB":
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "narrow",
          context: "formatting",
        });
      case "BBBB":
      default:
        return localize.dayPeriod(dayPeriodEnumValue, {
          width: "wide",
          context: "formatting",
        });
    }
  },

  // Hour [1-12]
  h: function (date, token, localize) {
    if (token === "ho") {
      let hours = date.getHours() % 12;
      if (hours === 0) hours = 12;
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.h(date, token);
  },

  // Hour [0-23]
  H: function (date, token, localize) {
    if (token === "Ho") {
      return localize.ordinalNumber(date.getHours(), { unit: "hour" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.H(date, token);
  },

  // Hour [0-11]
  K: function (date, token, localize) {
    const hours = date.getHours() % 12;

    if (token === "Ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Hour [1-24]
  k: function (date, token, localize) {
    let hours = date.getHours();
    if (hours === 0) hours = 24;

    if (token === "ko") {
      return localize.ordinalNumber(hours, { unit: "hour" });
    }

    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(hours, token.length);
  },

  // Minute
  m: function (date, token, localize) {
    if (token === "mo") {
      return localize.ordinalNumber(date.getMinutes(), { unit: "minute" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.m(date, token);
  },

  // Second
  s: function (date, token, localize) {
    if (token === "so") {
      return localize.ordinalNumber(date.getSeconds(), { unit: "second" });
    }

    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.s(date, token);
  },

  // Fraction of second
  S: function (date, token) {
    return _lightFormatters_mjs__WEBPACK_IMPORTED_MODULE_0__.lightFormatters.S(date, token);
  },

  // Timezone (ISO-8601. If offset is 0, output is always `'Z'`)
  X: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    if (timezoneOffset === 0) {
      return "Z";
    }

    switch (token) {
      // Hours and optional minutes
      case "X":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XX`
      case "XXXX":
      case "XX": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `XXX`
      case "XXXXX":
      case "XXX": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (ISO-8601. If offset is 0, output is `'+00:00'` or equivalent)
  x: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Hours and optional minutes
      case "x":
        return formatTimezoneWithOptionalMinutes(timezoneOffset);

      // Hours, minutes and optional seconds without `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xx`
      case "xxxx":
      case "xx": // Hours and minutes without `:` delimiter
        return formatTimezone(timezoneOffset);

      // Hours, minutes and optional seconds with `:` delimiter
      // Note: neither ISO-8601 nor JavaScript supports seconds in timezone offsets
      // so this token always has the same output as `xxx`
      case "xxxxx":
      case "xxx": // Hours and minutes with `:` delimiter
      default:
        return formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (GMT)
  O: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "O":
      case "OO":
      case "OOO":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "OOOO":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Timezone (specific non-location)
  z: function (date, token, _localize) {
    const timezoneOffset = date.getTimezoneOffset();

    switch (token) {
      // Short
      case "z":
      case "zz":
      case "zzz":
        return "GMT" + formatTimezoneShort(timezoneOffset, ":");
      // Long
      case "zzzz":
      default:
        return "GMT" + formatTimezone(timezoneOffset, ":");
    }
  },

  // Seconds timestamp
  t: function (date, token, _localize) {
    const timestamp = Math.trunc(date.getTime() / 1000);
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },

  // Milliseconds timestamp
  T: function (date, token, _localize) {
    const timestamp = date.getTime();
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(timestamp, token.length);
  },
};

function formatTimezoneShort(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = Math.trunc(absOffset / 60);
  const minutes = absOffset % 60;
  if (minutes === 0) {
    return sign + String(hours);
  }
  return sign + String(hours) + delimiter + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(minutes, 2);
}

function formatTimezoneWithOptionalMinutes(offset, delimiter) {
  if (offset % 60 === 0) {
    const sign = offset > 0 ? "-" : "+";
    return sign + (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.abs(offset) / 60, 2);
  }
  return formatTimezone(offset, delimiter);
}

function formatTimezone(offset, delimiter = "") {
  const sign = offset > 0 ? "-" : "+";
  const absOffset = Math.abs(offset);
  const hours = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(Math.trunc(absOffset / 60), 2);
  const minutes = (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_2__.addLeadingZeros)(absOffset % 60, 2);
  return sign + hours + delimiter + minutes;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/lightFormatters.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/lightFormatters.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   lightFormatters: () => (/* binding */ lightFormatters)
/* harmony export */ });
/* harmony import */ var _addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../addLeadingZeros.mjs */ "./node_modules/date-fns/_lib/addLeadingZeros.mjs");


/*
 * |     | Unit                           |     | Unit                           |
 * |-----|--------------------------------|-----|--------------------------------|
 * |  a  | AM, PM                         |  A* |                                |
 * |  d  | Day of month                   |  D  |                                |
 * |  h  | Hour [1-12]                    |  H  | Hour [0-23]                    |
 * |  m  | Minute                         |  M  | Month                          |
 * |  s  | Second                         |  S  | Fraction of second             |
 * |  y  | Year (abs)                     |  Y  |                                |
 *
 * Letters marked by * are not implemented but reserved by Unicode standard.
 */

const lightFormatters = {
  // Year
  y(date, token) {
    // From http://www.unicode.org/reports/tr35/tr35-31/tr35-dates.html#Date_Format_tokens
    // | Year     |     y | yy |   yyy |  yyyy | yyyyy |
    // |----------|-------|----|-------|-------|-------|
    // | AD 1     |     1 | 01 |   001 |  0001 | 00001 |
    // | AD 12    |    12 | 12 |   012 |  0012 | 00012 |
    // | AD 123   |   123 | 23 |   123 |  0123 | 00123 |
    // | AD 1234  |  1234 | 34 |  1234 |  1234 | 01234 |
    // | AD 12345 | 12345 | 45 | 12345 | 12345 | 12345 |

    const signedYear = date.getFullYear();
    // Returns 1 for 1 BC (which is year 0 in JavaScript)
    const year = signedYear > 0 ? signedYear : 1 - signedYear;
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(token === "yy" ? year % 100 : year, token.length);
  },

  // Month
  M(date, token) {
    const month = date.getMonth();
    return token === "M" ? String(month + 1) : (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(month + 1, 2);
  },

  // Day of the month
  d(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getDate(), token.length);
  },

  // AM or PM
  a(date, token) {
    const dayPeriodEnumValue = date.getHours() / 12 >= 1 ? "pm" : "am";

    switch (token) {
      case "a":
      case "aa":
        return dayPeriodEnumValue.toUpperCase();
      case "aaa":
        return dayPeriodEnumValue;
      case "aaaaa":
        return dayPeriodEnumValue[0];
      case "aaaa":
      default:
        return dayPeriodEnumValue === "am" ? "a.m." : "p.m.";
    }
  },

  // Hour [1-12]
  h(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours() % 12 || 12, token.length);
  },

  // Hour [0-23]
  H(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getHours(), token.length);
  },

  // Minute
  m(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getMinutes(), token.length);
  },

  // Second
  s(date, token) {
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(date.getSeconds(), token.length);
  },

  // Fraction of second
  S(date, token) {
    const numberOfDigits = token.length;
    const milliseconds = date.getMilliseconds();
    const fractionalSeconds = Math.trunc(
      milliseconds * Math.pow(10, numberOfDigits - 3),
    );
    return (0,_addLeadingZeros_mjs__WEBPACK_IMPORTED_MODULE_0__.addLeadingZeros)(fractionalSeconds, token.length);
  },
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/format/longFormatters.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/_lib/format/longFormatters.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   longFormatters: () => (/* binding */ longFormatters)
/* harmony export */ });
const dateLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "P":
      return formatLong.date({ width: "short" });
    case "PP":
      return formatLong.date({ width: "medium" });
    case "PPP":
      return formatLong.date({ width: "long" });
    case "PPPP":
    default:
      return formatLong.date({ width: "full" });
  }
};

const timeLongFormatter = (pattern, formatLong) => {
  switch (pattern) {
    case "p":
      return formatLong.time({ width: "short" });
    case "pp":
      return formatLong.time({ width: "medium" });
    case "ppp":
      return formatLong.time({ width: "long" });
    case "pppp":
    default:
      return formatLong.time({ width: "full" });
  }
};

const dateTimeLongFormatter = (pattern, formatLong) => {
  const matchResult = pattern.match(/(P+)(p+)?/) || [];
  const datePattern = matchResult[1];
  const timePattern = matchResult[2];

  if (!timePattern) {
    return dateLongFormatter(pattern, formatLong);
  }

  let dateTimeFormat;

  switch (datePattern) {
    case "P":
      dateTimeFormat = formatLong.dateTime({ width: "short" });
      break;
    case "PP":
      dateTimeFormat = formatLong.dateTime({ width: "medium" });
      break;
    case "PPP":
      dateTimeFormat = formatLong.dateTime({ width: "long" });
      break;
    case "PPPP":
    default:
      dateTimeFormat = formatLong.dateTime({ width: "full" });
      break;
  }

  return dateTimeFormat
    .replace("{{date}}", dateLongFormatter(datePattern, formatLong))
    .replace("{{time}}", timeLongFormatter(timePattern, formatLong));
};

const longFormatters = {
  p: timeLongFormatter,
  P: dateTimeLongFormatter,
};


/***/ }),

/***/ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getTimezoneOffsetInMilliseconds: () => (/* binding */ getTimezoneOffsetInMilliseconds)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * Google Chrome as of 67.0.3396.87 introduced timezones with offset that includes seconds.
 * They usually appear for dates that denote time before the timezones were introduced
 * (e.g. for 'Europe/Prague' timezone the offset is GMT+00:57:44 before 1 October 1891
 * and GMT+01:00:00 after that date)
 *
 * Date#getTimezoneOffset returns the offset in minutes and would return 57 for the example above,
 * which would lead to incorrect calculations.
 *
 * This function returns the timezone offset in milliseconds that takes seconds in account.
 */
function getTimezoneOffsetInMilliseconds(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const utcDate = new Date(
    Date.UTC(
      _date.getFullYear(),
      _date.getMonth(),
      _date.getDate(),
      _date.getHours(),
      _date.getMinutes(),
      _date.getSeconds(),
      _date.getMilliseconds(),
    ),
  );
  utcDate.setUTCFullYear(_date.getFullYear());
  return +date - +utcDate;
}


/***/ }),

/***/ "./node_modules/date-fns/_lib/protectedTokens.mjs":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/_lib/protectedTokens.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   isProtectedDayOfYearToken: () => (/* binding */ isProtectedDayOfYearToken),
/* harmony export */   isProtectedWeekYearToken: () => (/* binding */ isProtectedWeekYearToken),
/* harmony export */   warnOrThrowProtectedError: () => (/* binding */ warnOrThrowProtectedError)
/* harmony export */ });
const dayOfYearTokenRE = /^D+$/;
const weekYearTokenRE = /^Y+$/;

const throwTokens = ["D", "DD", "YY", "YYYY"];

function isProtectedDayOfYearToken(token) {
  return dayOfYearTokenRE.test(token);
}

function isProtectedWeekYearToken(token) {
  return weekYearTokenRE.test(token);
}

function warnOrThrowProtectedError(token, format, input) {
  const _message = message(token, format, input);
  console.warn(_message);
  if (throwTokens.includes(token)) throw new RangeError(_message);
}

function message(token, format, input) {
  const subject = token[0] === "Y" ? "years" : "days of the month";
  return `Use \`${token.toLowerCase()}\` instead of \`${token}\` (in \`${format}\`) for formatting ${subject} to the input \`${input}\`; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md`;
}


/***/ }),

/***/ "./node_modules/date-fns/constants.mjs":
/*!*********************************************!*\
  !*** ./node_modules/date-fns/constants.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   daysInWeek: () => (/* binding */ daysInWeek),
/* harmony export */   daysInYear: () => (/* binding */ daysInYear),
/* harmony export */   maxTime: () => (/* binding */ maxTime),
/* harmony export */   millisecondsInDay: () => (/* binding */ millisecondsInDay),
/* harmony export */   millisecondsInHour: () => (/* binding */ millisecondsInHour),
/* harmony export */   millisecondsInMinute: () => (/* binding */ millisecondsInMinute),
/* harmony export */   millisecondsInSecond: () => (/* binding */ millisecondsInSecond),
/* harmony export */   millisecondsInWeek: () => (/* binding */ millisecondsInWeek),
/* harmony export */   minTime: () => (/* binding */ minTime),
/* harmony export */   minutesInDay: () => (/* binding */ minutesInDay),
/* harmony export */   minutesInHour: () => (/* binding */ minutesInHour),
/* harmony export */   minutesInMonth: () => (/* binding */ minutesInMonth),
/* harmony export */   minutesInYear: () => (/* binding */ minutesInYear),
/* harmony export */   monthsInQuarter: () => (/* binding */ monthsInQuarter),
/* harmony export */   monthsInYear: () => (/* binding */ monthsInYear),
/* harmony export */   quartersInYear: () => (/* binding */ quartersInYear),
/* harmony export */   secondsInDay: () => (/* binding */ secondsInDay),
/* harmony export */   secondsInHour: () => (/* binding */ secondsInHour),
/* harmony export */   secondsInMinute: () => (/* binding */ secondsInMinute),
/* harmony export */   secondsInMonth: () => (/* binding */ secondsInMonth),
/* harmony export */   secondsInQuarter: () => (/* binding */ secondsInQuarter),
/* harmony export */   secondsInWeek: () => (/* binding */ secondsInWeek),
/* harmony export */   secondsInYear: () => (/* binding */ secondsInYear)
/* harmony export */ });
/**
 * @module constants
 * @summary Useful constants
 * @description
 * Collection of useful date constants.
 *
 * The constants could be imported from `date-fns/constants`:
 *
 * ```ts
 * import { maxTime, minTime } from "./constants/date-fns/constants";
 *
 * function isAllowedTime(time) {
 *   return time <= maxTime && time >= minTime;
 * }
 * ```
 */

/**
 * @constant
 * @name daysInWeek
 * @summary Days in 1 week.
 */
const daysInWeek = 7;

/**
 * @constant
 * @name daysInYear
 * @summary Days in 1 year.
 *
 * @description
 * How many days in a year.
 *
 * One years equals 365.2425 days according to the formula:
 *
 * > Leap year occures every 4 years, except for years that are divisable by 100 and not divisable by 400.
 * > 1 mean year = (365+1/4-1/100+1/400) days = 365.2425 days
 */
const daysInYear = 365.2425;

/**
 * @constant
 * @name maxTime
 * @summary Maximum allowed time.
 *
 * @example
 * import { maxTime } from "./constants/date-fns/constants";
 *
 * const isValid = 8640000000000001 <= maxTime;
 * //=> false
 *
 * new Date(8640000000000001);
 * //=> Invalid Date
 */
const maxTime = Math.pow(10, 8) * 24 * 60 * 60 * 1000;

/**
 * @constant
 * @name minTime
 * @summary Minimum allowed time.
 *
 * @example
 * import { minTime } from "./constants/date-fns/constants";
 *
 * const isValid = -8640000000000001 >= minTime;
 * //=> false
 *
 * new Date(-8640000000000001)
 * //=> Invalid Date
 */
const minTime = -maxTime;

/**
 * @constant
 * @name millisecondsInWeek
 * @summary Milliseconds in 1 week.
 */
const millisecondsInWeek = 604800000;

/**
 * @constant
 * @name millisecondsInDay
 * @summary Milliseconds in 1 day.
 */
const millisecondsInDay = 86400000;

/**
 * @constant
 * @name millisecondsInMinute
 * @summary Milliseconds in 1 minute
 */
const millisecondsInMinute = 60000;

/**
 * @constant
 * @name millisecondsInHour
 * @summary Milliseconds in 1 hour
 */
const millisecondsInHour = 3600000;

/**
 * @constant
 * @name millisecondsInSecond
 * @summary Milliseconds in 1 second
 */
const millisecondsInSecond = 1000;

/**
 * @constant
 * @name minutesInYear
 * @summary Minutes in 1 year.
 */
const minutesInYear = 525600;

/**
 * @constant
 * @name minutesInMonth
 * @summary Minutes in 1 month.
 */
const minutesInMonth = 43200;

/**
 * @constant
 * @name minutesInDay
 * @summary Minutes in 1 day.
 */
const minutesInDay = 1440;

/**
 * @constant
 * @name minutesInHour
 * @summary Minutes in 1 hour.
 */
const minutesInHour = 60;

/**
 * @constant
 * @name monthsInQuarter
 * @summary Months in 1 quarter.
 */
const monthsInQuarter = 3;

/**
 * @constant
 * @name monthsInYear
 * @summary Months in 1 year.
 */
const monthsInYear = 12;

/**
 * @constant
 * @name quartersInYear
 * @summary Quarters in 1 year
 */
const quartersInYear = 4;

/**
 * @constant
 * @name secondsInHour
 * @summary Seconds in 1 hour.
 */
const secondsInHour = 3600;

/**
 * @constant
 * @name secondsInMinute
 * @summary Seconds in 1 minute.
 */
const secondsInMinute = 60;

/**
 * @constant
 * @name secondsInDay
 * @summary Seconds in 1 day.
 */
const secondsInDay = secondsInHour * 24;

/**
 * @constant
 * @name secondsInWeek
 * @summary Seconds in 1 week.
 */
const secondsInWeek = secondsInDay * 7;

/**
 * @constant
 * @name secondsInYear
 * @summary Seconds in 1 year.
 */
const secondsInYear = secondsInDay * daysInYear;

/**
 * @constant
 * @name secondsInMonth
 * @summary Seconds in 1 month
 */
const secondsInMonth = secondsInYear / 12;

/**
 * @constant
 * @name secondsInQuarter
 * @summary Seconds in 1 quarter.
 */
const secondsInQuarter = secondsInMonth * 3;


/***/ }),

/***/ "./node_modules/date-fns/constructFrom.mjs":
/*!*************************************************!*\
  !*** ./node_modules/date-fns/constructFrom.mjs ***!
  \*************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   constructFrom: () => (/* binding */ constructFrom),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/**
 * @name constructFrom
 * @category Generic Helpers
 * @summary Constructs a date using the reference date and the value
 *
 * @description
 * The function constructs a new date using the constructor from the reference
 * date and the given value. It helps to build generic functions that accept
 * date extensions.
 *
 * It defaults to `Date` if the passed reference date is a number or a string.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The reference date to take constructor from
 * @param value - The value to create the date
 *
 * @returns Date initialized using the given date and value
 *
 * @example
 * import { constructFrom } from 'date-fns'
 *
 * // A function that clones a date preserving the original type
 * function cloneDate<DateType extends Date(date: DateType): DateType {
 *   return constructFrom(
 *     date, // Use contrustor from the given date
 *     date.getTime() // Use the date value to create a new date
 *   )
 * }
 */
function constructFrom(date, value) {
  if (date instanceof Date) {
    return new date.constructor(value);
  } else {
    return new Date(value);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (constructFrom);


/***/ }),

/***/ "./node_modules/date-fns/differenceInCalendarDays.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/differenceInCalendarDays.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   differenceInCalendarDays: () => (/* binding */ differenceInCalendarDays)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfDay.mjs */ "./node_modules/date-fns/startOfDay.mjs");
/* harmony import */ var _lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/getTimezoneOffsetInMilliseconds.mjs */ "./node_modules/date-fns/_lib/getTimezoneOffsetInMilliseconds.mjs");




/**
 * @name differenceInCalendarDays
 * @category Day Helpers
 * @summary Get the number of calendar days between the given dates.
 *
 * @description
 * Get the number of calendar days between the given dates. This means that the times are removed
 * from the dates and then the difference in days is calculated.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param dateLeft - The later date
 * @param dateRight - The earlier date
 *
 * @returns The number of calendar days
 *
 * @example
 * // How many calendar days are between
 * // 2 July 2011 23:00:00 and 2 July 2012 00:00:00?
 * const result = differenceInCalendarDays(
 *   new Date(2012, 6, 2, 0, 0),
 *   new Date(2011, 6, 2, 23, 0)
 * )
 * //=> 366
 * // How many calendar days are between
 * // 2 July 2011 23:59:00 and 3 July 2011 00:01:00?
 * const result = differenceInCalendarDays(
 *   new Date(2011, 6, 3, 0, 1),
 *   new Date(2011, 6, 2, 23, 59)
 * )
 * //=> 1
 */
function differenceInCalendarDays(dateLeft, dateRight) {
  const startOfDayLeft = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateLeft);
  const startOfDayRight = (0,_startOfDay_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfDay)(dateRight);

  const timestampLeft =
    +startOfDayLeft - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayLeft);
  const timestampRight =
    +startOfDayRight - (0,_lib_getTimezoneOffsetInMilliseconds_mjs__WEBPACK_IMPORTED_MODULE_1__.getTimezoneOffsetInMilliseconds)(startOfDayRight);

  // Round the number of days to the nearest integer because the number of
  // milliseconds in a day is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round((timestampLeft - timestampRight) / _constants_mjs__WEBPACK_IMPORTED_MODULE_2__.millisecondsInDay);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (differenceInCalendarDays);


/***/ }),

/***/ "./node_modules/date-fns/format.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/format.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   format: () => (/* binding */ format),
/* harmony export */   formatDate: () => (/* binding */ format),
/* harmony export */   formatters: () => (/* reexport safe */ _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters),
/* harmony export */   longFormatters: () => (/* reexport safe */ _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters)
/* harmony export */ });
/* harmony import */ var _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_lib/defaultLocale.mjs */ "./node_modules/date-fns/locale/en-US.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");
/* harmony import */ var _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/format/formatters.mjs */ "./node_modules/date-fns/_lib/format/formatters.mjs");
/* harmony import */ var _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/format/longFormatters.mjs */ "./node_modules/date-fns/_lib/format/longFormatters.mjs");
/* harmony import */ var _lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./_lib/protectedTokens.mjs */ "./node_modules/date-fns/_lib/protectedTokens.mjs");
/* harmony import */ var _isValid_mjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./isValid.mjs */ "./node_modules/date-fns/isValid.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");








// Rexports of internal for libraries to use.
// See: https://github.com/date-fns/date-fns/issues/3638#issuecomment-1877082874


// This RegExp consists of three parts separated by `|`:
// - [yYQqMLwIdDecihHKkms]o matches any available ordinal number token
//   (one of the certain letters followed by `o`)
// - (\w)\1* matches any sequences of the same letter
// - '' matches two quote characters in a row
// - '(''|[^'])+('|$) matches anything surrounded by two quote characters ('),
//   except a single quote symbol, which ends the sequence.
//   Two quote characters do not end the sequence.
//   If there is no matching single quote
//   then the sequence will continue until the end of the string.
// - . matches any single character unmatched by previous parts of the RegExps
const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;

// This RegExp catches symbols escaped by quotes, and also
// sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;



/**
 * The {@link format} function options.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format. The result may vary by locale.
 *
 * > ⚠️ Please note that the `format` tokens differ from Moment.js and other libraries.
 * > See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * The characters wrapped between two single quotes characters (') are escaped.
 * Two single quotes in a row, whether inside or outside a quoted sequence, represent a 'real' single quote.
 * (see the last example)
 *
 * Format of the string is based on Unicode Technical Standard #35:
 * https://www.unicode.org/reports/tr35/tr35-dates.html#Date_Field_Symbol_Table
 * with a few additions (see note 7 below the table).
 *
 * Accepted patterns:
 * | Unit                            | Pattern | Result examples                   | Notes |
 * |---------------------------------|---------|-----------------------------------|-------|
 * | Era                             | G..GGG  | AD, BC                            |       |
 * |                                 | GGGG    | Anno Domini, Before Christ        | 2     |
 * |                                 | GGGGG   | A, B                              |       |
 * | Calendar year                   | y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | yo      | 44th, 1st, 0th, 17th              | 5,7   |
 * |                                 | yy      | 44, 01, 00, 17                    | 5     |
 * |                                 | yyy     | 044, 001, 1900, 2017              | 5     |
 * |                                 | yyyy    | 0044, 0001, 1900, 2017            | 5     |
 * |                                 | yyyyy   | ...                               | 3,5   |
 * | Local week-numbering year       | Y       | 44, 1, 1900, 2017                 | 5     |
 * |                                 | Yo      | 44th, 1st, 1900th, 2017th         | 5,7   |
 * |                                 | YY      | 44, 01, 00, 17                    | 5,8   |
 * |                                 | YYY     | 044, 001, 1900, 2017              | 5     |
 * |                                 | YYYY    | 0044, 0001, 1900, 2017            | 5,8   |
 * |                                 | YYYYY   | ...                               | 3,5   |
 * | ISO week-numbering year         | R       | -43, 0, 1, 1900, 2017             | 5,7   |
 * |                                 | RR      | -43, 00, 01, 1900, 2017           | 5,7   |
 * |                                 | RRR     | -043, 000, 001, 1900, 2017        | 5,7   |
 * |                                 | RRRR    | -0043, 0000, 0001, 1900, 2017     | 5,7   |
 * |                                 | RRRRR   | ...                               | 3,5,7 |
 * | Extended year                   | u       | -43, 0, 1, 1900, 2017             | 5     |
 * |                                 | uu      | -43, 01, 1900, 2017               | 5     |
 * |                                 | uuu     | -043, 001, 1900, 2017             | 5     |
 * |                                 | uuuu    | -0043, 0001, 1900, 2017           | 5     |
 * |                                 | uuuuu   | ...                               | 3,5   |
 * | Quarter (formatting)            | Q       | 1, 2, 3, 4                        |       |
 * |                                 | Qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | QQ      | 01, 02, 03, 04                    |       |
 * |                                 | QQQ     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | QQQQ    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | QQQQQ   | 1, 2, 3, 4                        | 4     |
 * | Quarter (stand-alone)           | q       | 1, 2, 3, 4                        |       |
 * |                                 | qo      | 1st, 2nd, 3rd, 4th                | 7     |
 * |                                 | qq      | 01, 02, 03, 04                    |       |
 * |                                 | qqq     | Q1, Q2, Q3, Q4                    |       |
 * |                                 | qqqq    | 1st quarter, 2nd quarter, ...     | 2     |
 * |                                 | qqqqq   | 1, 2, 3, 4                        | 4     |
 * | Month (formatting)              | M       | 1, 2, ..., 12                     |       |
 * |                                 | Mo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | MM      | 01, 02, ..., 12                   |       |
 * |                                 | MMM     | Jan, Feb, ..., Dec                |       |
 * |                                 | MMMM    | January, February, ..., December  | 2     |
 * |                                 | MMMMM   | J, F, ..., D                      |       |
 * | Month (stand-alone)             | L       | 1, 2, ..., 12                     |       |
 * |                                 | Lo      | 1st, 2nd, ..., 12th               | 7     |
 * |                                 | LL      | 01, 02, ..., 12                   |       |
 * |                                 | LLL     | Jan, Feb, ..., Dec                |       |
 * |                                 | LLLL    | January, February, ..., December  | 2     |
 * |                                 | LLLLL   | J, F, ..., D                      |       |
 * | Local week of year              | w       | 1, 2, ..., 53                     |       |
 * |                                 | wo      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | ww      | 01, 02, ..., 53                   |       |
 * | ISO week of year                | I       | 1, 2, ..., 53                     | 7     |
 * |                                 | Io      | 1st, 2nd, ..., 53th               | 7     |
 * |                                 | II      | 01, 02, ..., 53                   | 7     |
 * | Day of month                    | d       | 1, 2, ..., 31                     |       |
 * |                                 | do      | 1st, 2nd, ..., 31st               | 7     |
 * |                                 | dd      | 01, 02, ..., 31                   |       |
 * | Day of year                     | D       | 1, 2, ..., 365, 366               | 9     |
 * |                                 | Do      | 1st, 2nd, ..., 365th, 366th       | 7     |
 * |                                 | DD      | 01, 02, ..., 365, 366             | 9     |
 * |                                 | DDD     | 001, 002, ..., 365, 366           |       |
 * |                                 | DDDD    | ...                               | 3     |
 * | Day of week (formatting)        | E..EEE  | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | EEEE    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | EEEEE   | M, T, W, T, F, S, S               |       |
 * |                                 | EEEEEE  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | ISO day of week (formatting)    | i       | 1, 2, 3, ..., 7                   | 7     |
 * |                                 | io      | 1st, 2nd, ..., 7th                | 7     |
 * |                                 | ii      | 01, 02, ..., 07                   | 7     |
 * |                                 | iii     | Mon, Tue, Wed, ..., Sun           | 7     |
 * |                                 | iiii    | Monday, Tuesday, ..., Sunday      | 2,7   |
 * |                                 | iiiii   | M, T, W, T, F, S, S               | 7     |
 * |                                 | iiiiii  | Mo, Tu, We, Th, Fr, Sa, Su        | 7     |
 * | Local day of week (formatting)  | e       | 2, 3, 4, ..., 1                   |       |
 * |                                 | eo      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | ee      | 02, 03, ..., 01                   |       |
 * |                                 | eee     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | eeee    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | eeeee   | M, T, W, T, F, S, S               |       |
 * |                                 | eeeeee  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | Local day of week (stand-alone) | c       | 2, 3, 4, ..., 1                   |       |
 * |                                 | co      | 2nd, 3rd, ..., 1st                | 7     |
 * |                                 | cc      | 02, 03, ..., 01                   |       |
 * |                                 | ccc     | Mon, Tue, Wed, ..., Sun           |       |
 * |                                 | cccc    | Monday, Tuesday, ..., Sunday      | 2     |
 * |                                 | ccccc   | M, T, W, T, F, S, S               |       |
 * |                                 | cccccc  | Mo, Tu, We, Th, Fr, Sa, Su        |       |
 * | AM, PM                          | a..aa   | AM, PM                            |       |
 * |                                 | aaa     | am, pm                            |       |
 * |                                 | aaaa    | a.m., p.m.                        | 2     |
 * |                                 | aaaaa   | a, p                              |       |
 * | AM, PM, noon, midnight          | b..bb   | AM, PM, noon, midnight            |       |
 * |                                 | bbb     | am, pm, noon, midnight            |       |
 * |                                 | bbbb    | a.m., p.m., noon, midnight        | 2     |
 * |                                 | bbbbb   | a, p, n, mi                       |       |
 * | Flexible day period             | B..BBB  | at night, in the morning, ...     |       |
 * |                                 | BBBB    | at night, in the morning, ...     | 2     |
 * |                                 | BBBBB   | at night, in the morning, ...     |       |
 * | Hour [1-12]                     | h       | 1, 2, ..., 11, 12                 |       |
 * |                                 | ho      | 1st, 2nd, ..., 11th, 12th         | 7     |
 * |                                 | hh      | 01, 02, ..., 11, 12               |       |
 * | Hour [0-23]                     | H       | 0, 1, 2, ..., 23                  |       |
 * |                                 | Ho      | 0th, 1st, 2nd, ..., 23rd          | 7     |
 * |                                 | HH      | 00, 01, 02, ..., 23               |       |
 * | Hour [0-11]                     | K       | 1, 2, ..., 11, 0                  |       |
 * |                                 | Ko      | 1st, 2nd, ..., 11th, 0th          | 7     |
 * |                                 | KK      | 01, 02, ..., 11, 00               |       |
 * | Hour [1-24]                     | k       | 24, 1, 2, ..., 23                 |       |
 * |                                 | ko      | 24th, 1st, 2nd, ..., 23rd         | 7     |
 * |                                 | kk      | 24, 01, 02, ..., 23               |       |
 * | Minute                          | m       | 0, 1, ..., 59                     |       |
 * |                                 | mo      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | mm      | 00, 01, ..., 59                   |       |
 * | Second                          | s       | 0, 1, ..., 59                     |       |
 * |                                 | so      | 0th, 1st, ..., 59th               | 7     |
 * |                                 | ss      | 00, 01, ..., 59                   |       |
 * | Fraction of second              | S       | 0, 1, ..., 9                      |       |
 * |                                 | SS      | 00, 01, ..., 99                   |       |
 * |                                 | SSS     | 000, 001, ..., 999                |       |
 * |                                 | SSSS    | ...                               | 3     |
 * | Timezone (ISO-8601 w/ Z)        | X       | -08, +0530, Z                     |       |
 * |                                 | XX      | -0800, +0530, Z                   |       |
 * |                                 | XXX     | -08:00, +05:30, Z                 |       |
 * |                                 | XXXX    | -0800, +0530, Z, +123456          | 2     |
 * |                                 | XXXXX   | -08:00, +05:30, Z, +12:34:56      |       |
 * | Timezone (ISO-8601 w/o Z)       | x       | -08, +0530, +00                   |       |
 * |                                 | xx      | -0800, +0530, +0000               |       |
 * |                                 | xxx     | -08:00, +05:30, +00:00            | 2     |
 * |                                 | xxxx    | -0800, +0530, +0000, +123456      |       |
 * |                                 | xxxxx   | -08:00, +05:30, +00:00, +12:34:56 |       |
 * | Timezone (GMT)                  | O...OOO | GMT-8, GMT+5:30, GMT+0            |       |
 * |                                 | OOOO    | GMT-08:00, GMT+05:30, GMT+00:00   | 2     |
 * | Timezone (specific non-locat.)  | z...zzz | GMT-8, GMT+5:30, GMT+0            | 6     |
 * |                                 | zzzz    | GMT-08:00, GMT+05:30, GMT+00:00   | 2,6   |
 * | Seconds timestamp               | t       | 512969520                         | 7     |
 * |                                 | tt      | ...                               | 3,7   |
 * | Milliseconds timestamp          | T       | 512969520900                      | 7     |
 * |                                 | TT      | ...                               | 3,7   |
 * | Long localized date             | P       | 04/29/1453                        | 7     |
 * |                                 | PP      | Apr 29, 1453                      | 7     |
 * |                                 | PPP     | April 29th, 1453                  | 7     |
 * |                                 | PPPP    | Friday, April 29th, 1453          | 2,7   |
 * | Long localized time             | p       | 12:00 AM                          | 7     |
 * |                                 | pp      | 12:00:00 AM                       | 7     |
 * |                                 | ppp     | 12:00:00 AM GMT+2                 | 7     |
 * |                                 | pppp    | 12:00:00 AM GMT+02:00             | 2,7   |
 * | Combination of date and time    | Pp      | 04/29/1453, 12:00 AM              | 7     |
 * |                                 | PPpp    | Apr 29, 1453, 12:00:00 AM         | 7     |
 * |                                 | PPPppp  | April 29th, 1453 at ...           | 7     |
 * |                                 | PPPPpppp| Friday, April 29th, 1453 at ...   | 2,7   |
 * Notes:
 * 1. "Formatting" units (e.g. formatting quarter) in the default en-US locale
 *    are the same as "stand-alone" units, but are different in some languages.
 *    "Formatting" units are declined according to the rules of the language
 *    in the context of a date. "Stand-alone" units are always nominative singular:
 *
 *    `format(new Date(2017, 10, 6), 'do LLLL', {locale: cs}) //=> '6. listopad'`
 *
 *    `format(new Date(2017, 10, 6), 'do MMMM', {locale: cs}) //=> '6. listopadu'`
 *
 * 2. Any sequence of the identical letters is a pattern, unless it is escaped by
 *    the single quote characters (see below).
 *    If the sequence is longer than listed in table (e.g. `EEEEEEEEEEE`)
 *    the output will be the same as default pattern for this unit, usually
 *    the longest one (in case of ISO weekdays, `EEEE`). Default patterns for units
 *    are marked with "2" in the last column of the table.
 *
 *    `format(new Date(2017, 10, 6), 'MMM') //=> 'Nov'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMM') //=> 'N'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMM') //=> 'November'`
 *
 *    `format(new Date(2017, 10, 6), 'MMMMMMM') //=> 'November'`
 *
 * 3. Some patterns could be unlimited length (such as `yyyyyyyy`).
 *    The output will be padded with zeros to match the length of the pattern.
 *
 *    `format(new Date(2017, 10, 6), 'yyyyyyyy') //=> '00002017'`
 *
 * 4. `QQQQQ` and `qqqqq` could be not strictly numerical in some locales.
 *    These tokens represent the shortest form of the quarter.
 *
 * 5. The main difference between `y` and `u` patterns are B.C. years:
 *
 *    | Year | `y` | `u` |
 *    |------|-----|-----|
 *    | AC 1 |   1 |   1 |
 *    | BC 1 |   1 |   0 |
 *    | BC 2 |   2 |  -1 |
 *
 *    Also `yy` always returns the last two digits of a year,
 *    while `uu` pads single digit years to 2 characters and returns other years unchanged:
 *
 *    | Year | `yy` | `uu` |
 *    |------|------|------|
 *    | 1    |   01 |   01 |
 *    | 14   |   14 |   14 |
 *    | 376  |   76 |  376 |
 *    | 1453 |   53 | 1453 |
 *
 *    The same difference is true for local and ISO week-numbering years (`Y` and `R`),
 *    except local week-numbering years are dependent on `options.weekStartsOn`
 *    and `options.firstWeekContainsDate` (compare [getISOWeekYear](https://date-fns.org/docs/getISOWeekYear)
 *    and [getWeekYear](https://date-fns.org/docs/getWeekYear)).
 *
 * 6. Specific non-location timezones are currently unavailable in `date-fns`,
 *    so right now these tokens fall back to GMT timezones.
 *
 * 7. These patterns are not in the Unicode Technical Standard #35:
 *    - `i`: ISO day of week
 *    - `I`: ISO week of year
 *    - `R`: ISO week-numbering year
 *    - `t`: seconds timestamp
 *    - `T`: milliseconds timestamp
 *    - `o`: ordinal number modifier
 *    - `P`: long localized date
 *    - `p`: long localized time
 *
 * 8. `YY` and `YYYY` tokens represent week-numbering years but they are often confused with years.
 *    You should enable `options.useAdditionalWeekYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * 9. `D` and `DD` tokens represent days of the year but they are often confused with days of the month.
 *    You should enable `options.useAdditionalDayOfYearTokens` to use them. See: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param format - The string of tokens
 * @param options - An object with options
 *
 * @returns The formatted date string
 *
 * @throws `date` must not be Invalid Date
 * @throws `options.locale` must contain `localize` property
 * @throws `options.locale` must contain `formatLong` property
 * @throws use `yyyy` instead of `YYYY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `yy` instead of `YY` for formatting years using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `d` instead of `D` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws use `dd` instead of `DD` for formatting days of the month using [format provided] to the input [input provided]; see: https://github.com/date-fns/date-fns/blob/master/docs/unicodeTokens.md
 * @throws format string contains an unescaped latin alphabet character
 *
 * @example
 * // Represent 11 February 2014 in middle-endian format:
 * const result = format(new Date(2014, 1, 11), 'MM/dd/yyyy')
 * //=> '02/11/2014'
 *
 * @example
 * // Represent 2 July 2014 in Esperanto:
 * import { eoLocale } from 'date-fns/locale/eo'
 * const result = format(new Date(2014, 6, 2), "do 'de' MMMM yyyy", {
 *   locale: eoLocale
 * })
 * //=> '2-a de julio 2014'
 *
 * @example
 * // Escape string by single quote characters:
 * const result = format(new Date(2014, 6, 2, 15), "h 'o''clock'")
 * //=> "3 o'clock"
 */
function format(date, formatStr, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_2__.getDefaultOptions)();
  const locale = options?.locale ?? defaultOptions.locale ?? _lib_defaultLocale_mjs__WEBPACK_IMPORTED_MODULE_3__.enUS;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_4__.toDate)(date);

  if (!(0,_isValid_mjs__WEBPACK_IMPORTED_MODULE_5__.isValid)(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts = formatStr
    .match(longFormattingTokensRegExp)
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = _lib_format_longFormatters_mjs__WEBPACK_IMPORTED_MODULE_1__.longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)
    .map((substring) => {
      // Replace two single quote characters with one single quote character
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (_lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });

  // invoke localize preprocessor (only for french locales at the moment)
  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedWeekYearToken)(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.isProtectedDayOfYearToken)(token))
      ) {
        (0,_lib_protectedTokens_mjs__WEBPACK_IMPORTED_MODULE_6__.warnOrThrowProtectedError)(token, formatStr, String(date));
      }

      const formatter = _lib_format_formatters_mjs__WEBPACK_IMPORTED_MODULE_0__.formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input) {
  const matched = input.match(escapedStringRegExp);

  if (!matched) {
    return input;
  }

  return matched[1].replace(doubleQuoteRegExp, "'");
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (format);


/***/ }),

/***/ "./node_modules/date-fns/getDayOfYear.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/getDayOfYear.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getDayOfYear: () => (/* binding */ getDayOfYear)
/* harmony export */ });
/* harmony import */ var _differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./differenceInCalendarDays.mjs */ "./node_modules/date-fns/differenceInCalendarDays.mjs");
/* harmony import */ var _startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfYear.mjs */ "./node_modules/date-fns/startOfYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getDayOfYear
 * @category Day Helpers
 * @summary Get the day of the year of the given date.
 *
 * @description
 * Get the day of the year of the given date.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The day of year
 *
 * @example
 * // Which day of the year is 2 July 2014?
 * const result = getDayOfYear(new Date(2014, 6, 2))
 * //=> 183
 */
function getDayOfYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = (0,_differenceInCalendarDays_mjs__WEBPACK_IMPORTED_MODULE_1__.differenceInCalendarDays)(_date, (0,_startOfYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfYear)(_date));
  const dayOfYear = diff + 1;
  return dayOfYear;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getDayOfYear);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeek.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/getISOWeek.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeek: () => (/* binding */ getISOWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeekYear.mjs */ "./node_modules/date-fns/startOfISOWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * @name getISOWeek
 * @category ISO Week Helpers
 * @summary Get the ISO week of the given date.
 *
 * @description
 * Get the ISO week of the given date.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week
 *
 * @example
 * // Which week of the ISO-week numbering year is 2 January 2005?
 * const result = getISOWeek(new Date(2005, 0, 2))
 * //=> 53
 */
function getISOWeek(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfISOWeek)(_date) - +(0,_startOfISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeekYear)(_date);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/getISOWeekYear.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/getISOWeekYear.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getISOWeekYear: () => (/* binding */ getISOWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");




/**
 * @name getISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Get the ISO week-numbering year of the given date.
 *
 * @description
 * Get the ISO week-numbering year of the given date,
 * which always starts 3 days before the year's first Thursday.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 *
 * @returns The ISO week-numbering year
 *
 * @example
 * // Which ISO-week numbering year is 2 January 2005?
 * const result = getISOWeekYear(new Date(2005, 0, 2))
 * //=> 2004
 */
function getISOWeekYear(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const fourthOfJanuaryOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfNextYear.setFullYear(year + 1, 0, 4);
  fourthOfJanuaryOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfNextYear);

  const fourthOfJanuaryOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuaryOfThisYear.setFullYear(year, 0, 4);
  fourthOfJanuaryOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuaryOfThisYear);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/getWeek.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/getWeek.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeek: () => (/* binding */ getWeek)
/* harmony export */ });
/* harmony import */ var _constants_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constants.mjs */ "./node_modules/date-fns/constants.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfWeekYear.mjs */ "./node_modules/date-fns/startOfWeekYear.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");





/**
 * The {@link getWeek} function options.
 */

/**
 * @name getWeek
 * @category Week Helpers
 * @summary Get the local week index of the given date.
 *
 * @description
 * Get the local week index of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options
 *
 * @returns The week
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005 with default options?
 * const result = getWeek(new Date(2005, 0, 2))
 * //=> 2
 *
 * @example
 * // Which week of the local week numbering year is 2 January 2005,
 * // if Monday is the first day of the week,
 * // and the first week of the year always contains 4 January?
 * const result = getWeek(new Date(2005, 0, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> 53
 */

function getWeek(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const diff = +(0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_1__.startOfWeek)(_date, options) - +(0,_startOfWeekYear_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfWeekYear)(_date, options);

  // Round the number of weeks to the nearest integer because the number of
  // milliseconds in a week is not constant (e.g. it's different in the week of
  // the daylight saving time clock shift).
  return Math.round(diff / _constants_mjs__WEBPACK_IMPORTED_MODULE_3__.millisecondsInWeek) + 1;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeek);


/***/ }),

/***/ "./node_modules/date-fns/getWeekYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/getWeekYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getWeekYear: () => (/* binding */ getWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link getWeekYear} function options.
 */

/**
 * @name getWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Get the local week-numbering year of the given date.
 *
 * @description
 * Get the local week-numbering year of the given date.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The given date
 * @param options - An object with options.
 *
 * @returns The local week-numbering year
 *
 * @example
 * // Which week numbering year is 26 December 2004 with the default settings?
 * const result = getWeekYear(new Date(2004, 11, 26))
 * //=> 2005
 *
 * @example
 * // Which week numbering year is 26 December 2004 if week starts on Saturday?
 * const result = getWeekYear(new Date(2004, 11, 26), { weekStartsOn: 6 })
 * //=> 2004
 *
 * @example
 * // Which week numbering year is 26 December 2004 if the first week contains 4 January?
 * const result = getWeekYear(new Date(2004, 11, 26), { firstWeekContainsDate: 4 })
 * //=> 2004
 */
function getWeekYear(date, options) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const year = _date.getFullYear();

  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const firstWeekOfNextYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfNextYear.setFullYear(year + 1, 0, firstWeekContainsDate);
  firstWeekOfNextYear.setHours(0, 0, 0, 0);
  const startOfNextYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfNextYear, options);

  const firstWeekOfThisYear = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeekOfThisYear.setFullYear(year, 0, firstWeekContainsDate);
  firstWeekOfThisYear.setHours(0, 0, 0, 0);
  const startOfThisYear = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeekOfThisYear, options);

  if (_date.getTime() >= startOfNextYear.getTime()) {
    return year + 1;
  } else if (_date.getTime() >= startOfThisYear.getTime()) {
    return year;
  } else {
    return year - 1;
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/isDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/isDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isDate: () => (/* binding */ isDate)
/* harmony export */ });
/**
 * @name isDate
 * @category Common Helpers
 * @summary Is the given value a date?
 *
 * @description
 * Returns true if the given value is an instance of Date. The function works for dates transferred across iframes.
 *
 * @param value - The value to check
 *
 * @returns True if the given value is a date
 *
 * @example
 * // For a valid date:
 * const result = isDate(new Date())
 * //=> true
 *
 * @example
 * // For an invalid date:
 * const result = isDate(new Date(NaN))
 * //=> true
 *
 * @example
 * // For some value:
 * const result = isDate('2014-02-31')
 * //=> false
 *
 * @example
 * // For an object:
 * const result = isDate({})
 * //=> false
 */
function isDate(value) {
  return (
    value instanceof Date ||
    (typeof value === "object" &&
      Object.prototype.toString.call(value) === "[object Date]")
  );
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isDate);


/***/ }),

/***/ "./node_modules/date-fns/isValid.mjs":
/*!*******************************************!*\
  !*** ./node_modules/date-fns/isValid.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   isValid: () => (/* binding */ isValid)
/* harmony export */ });
/* harmony import */ var _isDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isDate.mjs */ "./node_modules/date-fns/isDate.mjs");
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");



/**
 * @name isValid
 * @category Common Helpers
 * @summary Is the given date valid?
 *
 * @description
 * Returns false if argument is Invalid Date and true otherwise.
 * Argument is converted to Date using `toDate`. See [toDate](https://date-fns.org/docs/toDate)
 * Invalid Date is a Date, whose time value is NaN.
 *
 * Time value of Date: http://es5.github.io/#x15.9.1.1
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The date to check
 *
 * @returns The date is valid
 *
 * @example
 * // For the valid date:
 * const result = isValid(new Date(2014, 1, 31))
 * //=> true
 *
 * @example
 * // For the value, convertable into a date:
 * const result = isValid(1393804800000)
 * //=> true
 *
 * @example
 * // For the invalid date:
 * const result = isValid(new Date(''))
 * //=> false
 */
function isValid(date) {
  if (!(0,_isDate_mjs__WEBPACK_IMPORTED_MODULE_0__.isDate)(date) && typeof date !== "number") {
    return false;
  }
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  return !isNaN(Number(_date));
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (isValid);


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildFormatLongFn: () => (/* binding */ buildFormatLongFn)
/* harmony export */ });
function buildFormatLongFn(args) {
  return (options = {}) => {
    // TODO: Remove String()
    const width = options.width ? String(options.width) : args.defaultWidth;
    const format = args.formats[width] || args.formats[args.defaultWidth];
    return format;
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildLocalizeFn: () => (/* binding */ buildLocalizeFn)
/* harmony export */ });
/* eslint-disable no-unused-vars */

/**
 * The localize function argument callback which allows to convert raw value to
 * the actual type.
 *
 * @param value - The value to convert
 *
 * @returns The converted value
 */

/**
 * The map of localized values for each width.
 */

/**
 * The index type of the locale unit value. It types conversion of units of
 * values that don't start at 0 (i.e. quarters).
 */

/**
 * Converts the unit value to the tuple of values.
 */

/**
 * The tuple of localized era values. The first element represents BC,
 * the second element represents AD.
 */

/**
 * The tuple of localized quarter values. The first element represents Q1.
 */

/**
 * The tuple of localized day values. The first element represents Sunday.
 */

/**
 * The tuple of localized month values. The first element represents January.
 */

function buildLocalizeFn(args) {
  return (value, options) => {
    const context = options?.context ? String(options.context) : "standalone";

    let valuesArray;
    if (context === "formatting" && args.formattingValues) {
      const defaultWidth = args.defaultFormattingWidth || args.defaultWidth;
      const width = options?.width ? String(options.width) : defaultWidth;

      valuesArray =
        args.formattingValues[width] || args.formattingValues[defaultWidth];
    } else {
      const defaultWidth = args.defaultWidth;
      const width = options?.width ? String(options.width) : args.defaultWidth;

      valuesArray = args.values[width] || args.values[defaultWidth];
    }
    const index = args.argumentCallback ? args.argumentCallback(value) : value;

    // @ts-expect-error - For some reason TypeScript just don't want to match it, no matter how hard we try. I challenge you to try to remove it!
    return valuesArray[index];
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs":
/*!************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchFn.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchFn: () => (/* binding */ buildMatchFn)
/* harmony export */ });
function buildMatchFn(args) {
  return (string, options = {}) => {
    const width = options.width;

    const matchPattern =
      (width && args.matchPatterns[width]) ||
      args.matchPatterns[args.defaultMatchWidth];
    const matchResult = string.match(matchPattern);

    if (!matchResult) {
      return null;
    }
    const matchedString = matchResult[0];

    const parsePatterns =
      (width && args.parsePatterns[width]) ||
      args.parsePatterns[args.defaultParseWidth];

    const key = Array.isArray(parsePatterns)
      ? findIndex(parsePatterns, (pattern) => pattern.test(matchedString))
      : // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        findKey(parsePatterns, (pattern) => pattern.test(matchedString));

    let value;

    value = args.valueCallback ? args.valueCallback(key) : key;
    value = options.valueCallback
      ? // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
        options.valueCallback(value)
      : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}

function findKey(object, predicate) {
  for (const key in object) {
    if (
      Object.prototype.hasOwnProperty.call(object, key) &&
      predicate(object[key])
    ) {
      return key;
    }
  }
  return undefined;
}

function findIndex(array, predicate) {
  for (let key = 0; key < array.length; key++) {
    if (predicate(array[key])) {
      return key;
    }
  }
  return undefined;
}


/***/ }),

/***/ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs":
/*!*******************************************************************!*\
  !*** ./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   buildMatchPatternFn: () => (/* binding */ buildMatchPatternFn)
/* harmony export */ });
function buildMatchPatternFn(args) {
  return (string, options = {}) => {
    const matchResult = string.match(args.matchPattern);
    if (!matchResult) return null;
    const matchedString = matchResult[0];

    const parseResult = string.match(args.parsePattern);
    if (!parseResult) return null;
    let value = args.valueCallback
      ? args.valueCallback(parseResult[0])
      : parseResult[0];

    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- I challange you to fix the type
    value = options.valueCallback ? options.valueCallback(value) : value;

    const rest = string.slice(matchedString.length);

    return { value, rest };
  };
}


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US.mjs":
/*!************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US.mjs ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   enUS: () => (/* binding */ enUS)
/* harmony export */ });
/* harmony import */ var _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./en-US/_lib/formatDistance.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs");
/* harmony import */ var _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./en-US/_lib/formatLong.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs");
/* harmony import */ var _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./en-US/_lib/formatRelative.mjs */ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs");
/* harmony import */ var _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./en-US/_lib/localize.mjs */ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs");
/* harmony import */ var _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./en-US/_lib/match.mjs */ "./node_modules/date-fns/locale/en-US/_lib/match.mjs");






/**
 * @category Locales
 * @summary English locale (United States).
 * @language English
 * @iso-639-2 eng
 * @author Sasha Koss [@kossnocorp](https://github.com/kossnocorp)
 * @author Lesha Koss [@leshakoss](https://github.com/leshakoss)
 */
const enUS = {
  code: "en-US",
  formatDistance: _en_US_lib_formatDistance_mjs__WEBPACK_IMPORTED_MODULE_0__.formatDistance,
  formatLong: _en_US_lib_formatLong_mjs__WEBPACK_IMPORTED_MODULE_1__.formatLong,
  formatRelative: _en_US_lib_formatRelative_mjs__WEBPACK_IMPORTED_MODULE_2__.formatRelative,
  localize: _en_US_lib_localize_mjs__WEBPACK_IMPORTED_MODULE_3__.localize,
  match: _en_US_lib_match_mjs__WEBPACK_IMPORTED_MODULE_4__.match,
  options: {
    weekStartsOn: 0 /* Sunday */,
    firstWeekContainsDate: 1,
  },
};

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (enUS);


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatDistance.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDistance: () => (/* binding */ formatDistance)
/* harmony export */ });
const formatDistanceLocale = {
  lessThanXSeconds: {
    one: "less than a second",
    other: "less than {{count}} seconds",
  },

  xSeconds: {
    one: "1 second",
    other: "{{count}} seconds",
  },

  halfAMinute: "half a minute",

  lessThanXMinutes: {
    one: "less than a minute",
    other: "less than {{count}} minutes",
  },

  xMinutes: {
    one: "1 minute",
    other: "{{count}} minutes",
  },

  aboutXHours: {
    one: "about 1 hour",
    other: "about {{count}} hours",
  },

  xHours: {
    one: "1 hour",
    other: "{{count}} hours",
  },

  xDays: {
    one: "1 day",
    other: "{{count}} days",
  },

  aboutXWeeks: {
    one: "about 1 week",
    other: "about {{count}} weeks",
  },

  xWeeks: {
    one: "1 week",
    other: "{{count}} weeks",
  },

  aboutXMonths: {
    one: "about 1 month",
    other: "about {{count}} months",
  },

  xMonths: {
    one: "1 month",
    other: "{{count}} months",
  },

  aboutXYears: {
    one: "about 1 year",
    other: "about {{count}} years",
  },

  xYears: {
    one: "1 year",
    other: "{{count}} years",
  },

  overXYears: {
    one: "over 1 year",
    other: "over {{count}} years",
  },

  almostXYears: {
    one: "almost 1 year",
    other: "almost {{count}} years",
  },
};

const formatDistance = (token, count, options) => {
  let result;

  const tokenValue = formatDistanceLocale[token];
  if (typeof tokenValue === "string") {
    result = tokenValue;
  } else if (count === 1) {
    result = tokenValue.one;
  } else {
    result = tokenValue.other.replace("{{count}}", count.toString());
  }

  if (options?.addSuffix) {
    if (options.comparison && options.comparison > 0) {
      return "in " + result;
    } else {
      return result + " ago";
    }
  }

  return result;
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatLong.mjs ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatLong: () => (/* binding */ formatLong)
/* harmony export */ });
/* harmony import */ var _lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildFormatLongFn.mjs */ "./node_modules/date-fns/locale/_lib/buildFormatLongFn.mjs");


const dateFormats = {
  full: "EEEE, MMMM do, y",
  long: "MMMM do, y",
  medium: "MMM d, y",
  short: "MM/dd/yyyy",
};

const timeFormats = {
  full: "h:mm:ss a zzzz",
  long: "h:mm:ss a z",
  medium: "h:mm:ss a",
  short: "h:mm a",
};

const dateTimeFormats = {
  full: "{{date}} 'at' {{time}}",
  long: "{{date}} 'at' {{time}}",
  medium: "{{date}}, {{time}}",
  short: "{{date}}, {{time}}",
};

const formatLong = {
  date: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateFormats,
    defaultWidth: "full",
  }),

  time: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: timeFormats,
    defaultWidth: "full",
  }),

  dateTime: (0,_lib_buildFormatLongFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildFormatLongFn)({
    formats: dateTimeFormats,
    defaultWidth: "full",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs":
/*!********************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/formatRelative.mjs ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatRelative: () => (/* binding */ formatRelative)
/* harmony export */ });
const formatRelativeLocale = {
  lastWeek: "'last' eeee 'at' p",
  yesterday: "'yesterday at' p",
  today: "'today at' p",
  tomorrow: "'tomorrow at' p",
  nextWeek: "eeee 'at' p",
  other: "P",
};

const formatRelative = (token, _date, _baseDate, _options) =>
  formatRelativeLocale[token];


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/localize.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/localize.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   localize: () => (/* binding */ localize)
/* harmony export */ });
/* harmony import */ var _lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildLocalizeFn.mjs */ "./node_modules/date-fns/locale/_lib/buildLocalizeFn.mjs");


const eraValues = {
  narrow: ["B", "A"],
  abbreviated: ["BC", "AD"],
  wide: ["Before Christ", "Anno Domini"],
};

const quarterValues = {
  narrow: ["1", "2", "3", "4"],
  abbreviated: ["Q1", "Q2", "Q3", "Q4"],
  wide: ["1st quarter", "2nd quarter", "3rd quarter", "4th quarter"],
};

// Note: in English, the names of days of the week and months are capitalized.
// If you are making a new locale based on this one, check if the same is true for the language you're working on.
// Generally, formatted dates should look like they are in the middle of a sentence,
// e.g. in Spanish language the weekdays and months should be in the lowercase.
const monthValues = {
  narrow: ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
  abbreviated: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],

  wide: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
};

const dayValues = {
  narrow: ["S", "M", "T", "W", "T", "F", "S"],
  short: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
  abbreviated: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
  wide: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
};

const dayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "morning",
    afternoon: "afternoon",
    evening: "evening",
    night: "night",
  },
};

const formattingDayPeriodValues = {
  narrow: {
    am: "a",
    pm: "p",
    midnight: "mi",
    noon: "n",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  abbreviated: {
    am: "AM",
    pm: "PM",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
  wide: {
    am: "a.m.",
    pm: "p.m.",
    midnight: "midnight",
    noon: "noon",
    morning: "in the morning",
    afternoon: "in the afternoon",
    evening: "in the evening",
    night: "at night",
  },
};

const ordinalNumber = (dirtyNumber, _options) => {
  const number = Number(dirtyNumber);

  // If ordinal numbers depend on context, for example,
  // if they are different for different grammatical genders,
  // use `options.unit`.
  //
  // `unit` can be 'year', 'quarter', 'month', 'week', 'date', 'dayOfYear',
  // 'day', 'hour', 'minute', 'second'.

  const rem100 = number % 100;
  if (rem100 > 20 || rem100 < 10) {
    switch (rem100 % 10) {
      case 1:
        return number + "st";
      case 2:
        return number + "nd";
      case 3:
        return number + "rd";
    }
  }
  return number + "th";
};

const localize = {
  ordinalNumber,

  era: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: eraValues,
    defaultWidth: "wide",
  }),

  quarter: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: quarterValues,
    defaultWidth: "wide",
    argumentCallback: (quarter) => quarter - 1,
  }),

  month: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: monthValues,
    defaultWidth: "wide",
  }),

  day: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayValues,
    defaultWidth: "wide",
  }),

  dayPeriod: (0,_lib_buildLocalizeFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildLocalizeFn)({
    values: dayPeriodValues,
    defaultWidth: "wide",
    formattingValues: formattingDayPeriodValues,
    defaultFormattingWidth: "wide",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/locale/en-US/_lib/match.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/locale/en-US/_lib/match.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   match: () => (/* binding */ match)
/* harmony export */ });
/* harmony import */ var _lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../_lib/buildMatchFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchFn.mjs");
/* harmony import */ var _lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../_lib/buildMatchPatternFn.mjs */ "./node_modules/date-fns/locale/_lib/buildMatchPatternFn.mjs");



const matchOrdinalNumberPattern = /^(\d+)(th|st|nd|rd)?/i;
const parseOrdinalNumberPattern = /\d+/i;

const matchEraPatterns = {
  narrow: /^(b|a)/i,
  abbreviated: /^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,
  wide: /^(before christ|before common era|anno domini|common era)/i,
};
const parseEraPatterns = {
  any: [/^b/i, /^(a|c)/i],
};

const matchQuarterPatterns = {
  narrow: /^[1234]/i,
  abbreviated: /^q[1234]/i,
  wide: /^[1234](th|st|nd|rd)? quarter/i,
};
const parseQuarterPatterns = {
  any: [/1/i, /2/i, /3/i, /4/i],
};

const matchMonthPatterns = {
  narrow: /^[jfmasond]/i,
  abbreviated: /^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,
  wide: /^(january|february|march|april|may|june|july|august|september|october|november|december)/i,
};
const parseMonthPatterns = {
  narrow: [
    /^j/i,
    /^f/i,
    /^m/i,
    /^a/i,
    /^m/i,
    /^j/i,
    /^j/i,
    /^a/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],

  any: [
    /^ja/i,
    /^f/i,
    /^mar/i,
    /^ap/i,
    /^may/i,
    /^jun/i,
    /^jul/i,
    /^au/i,
    /^s/i,
    /^o/i,
    /^n/i,
    /^d/i,
  ],
};

const matchDayPatterns = {
  narrow: /^[smtwf]/i,
  short: /^(su|mo|tu|we|th|fr|sa)/i,
  abbreviated: /^(sun|mon|tue|wed|thu|fri|sat)/i,
  wide: /^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i,
};
const parseDayPatterns = {
  narrow: [/^s/i, /^m/i, /^t/i, /^w/i, /^t/i, /^f/i, /^s/i],
  any: [/^su/i, /^m/i, /^tu/i, /^w/i, /^th/i, /^f/i, /^sa/i],
};

const matchDayPeriodPatterns = {
  narrow: /^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,
  any: /^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i,
};
const parseDayPeriodPatterns = {
  any: {
    am: /^a/i,
    pm: /^p/i,
    midnight: /^mi/i,
    noon: /^no/i,
    morning: /morning/i,
    afternoon: /afternoon/i,
    evening: /evening/i,
    night: /night/i,
  },
};

const match = {
  ordinalNumber: (0,_lib_buildMatchPatternFn_mjs__WEBPACK_IMPORTED_MODULE_0__.buildMatchPatternFn)({
    matchPattern: matchOrdinalNumberPattern,
    parsePattern: parseOrdinalNumberPattern,
    valueCallback: (value) => parseInt(value, 10),
  }),

  era: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchEraPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseEraPatterns,
    defaultParseWidth: "any",
  }),

  quarter: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchQuarterPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseQuarterPatterns,
    defaultParseWidth: "any",
    valueCallback: (index) => index + 1,
  }),

  month: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchMonthPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseMonthPatterns,
    defaultParseWidth: "any",
  }),

  day: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPatterns,
    defaultMatchWidth: "wide",
    parsePatterns: parseDayPatterns,
    defaultParseWidth: "any",
  }),

  dayPeriod: (0,_lib_buildMatchFn_mjs__WEBPACK_IMPORTED_MODULE_1__.buildMatchFn)({
    matchPatterns: matchDayPeriodPatterns,
    defaultMatchWidth: "any",
    parsePatterns: parseDayPeriodPatterns,
    defaultParseWidth: "any",
  }),
};


/***/ }),

/***/ "./node_modules/date-fns/startOfDay.mjs":
/*!**********************************************!*\
  !*** ./node_modules/date-fns/startOfDay.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfDay: () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a day
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(date) {
  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfDay);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeek.mjs":
/*!**************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeek.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeek: () => (/* binding */ startOfISOWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");


/**
 * @name startOfISOWeek
 * @category ISO Week Helpers
 * @summary Return the start of an ISO week for the given date.
 *
 * @description
 * Return the start of an ISO week for the given date.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week
 *
 * @example
 * // The start of an ISO week for 2 September 2014 11:55:00:
 * const result = startOfISOWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfISOWeek(date) {
  return (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_0__.startOfWeek)(date, { weekStartsOn: 1 });
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfISOWeekYear.mjs":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/startOfISOWeekYear.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfISOWeekYear: () => (/* binding */ startOfISOWeekYear)
/* harmony export */ });
/* harmony import */ var _getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./getISOWeekYear.mjs */ "./node_modules/date-fns/getISOWeekYear.mjs");
/* harmony import */ var _startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./startOfISOWeek.mjs */ "./node_modules/date-fns/startOfISOWeek.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");




/**
 * @name startOfISOWeekYear
 * @category ISO Week-Numbering Year Helpers
 * @summary Return the start of an ISO week-numbering year for the given date.
 *
 * @description
 * Return the start of an ISO week-numbering year,
 * which always starts 3 days before the year's first Thursday.
 * The result will be in the local timezone.
 *
 * ISO week-numbering year: http://en.wikipedia.org/wiki/ISO_week_date
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of an ISO week-numbering year
 *
 * @example
 * // The start of an ISO week-numbering year for 2 July 2005:
 * const result = startOfISOWeekYear(new Date(2005, 6, 2))
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfISOWeekYear(date) {
  const year = (0,_getISOWeekYear_mjs__WEBPACK_IMPORTED_MODULE_0__.getISOWeekYear)(date);
  const fourthOfJanuary = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  fourthOfJanuary.setFullYear(year, 0, 4);
  fourthOfJanuary.setHours(0, 0, 0, 0);
  return (0,_startOfISOWeek_mjs__WEBPACK_IMPORTED_MODULE_2__.startOfISOWeek)(fourthOfJanuary);
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfISOWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeek.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfWeek.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeek: () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");



/**
 * The {@link startOfWeek} function options.
 */

/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const _date = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_1__.toDate)(date);
  const day = _date.getDay();
  const diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;

  _date.setDate(_date.getDate() - diff);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeek);


/***/ }),

/***/ "./node_modules/date-fns/startOfWeekYear.mjs":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/startOfWeekYear.mjs ***!
  \***************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfWeekYear: () => (/* binding */ startOfWeekYear)
/* harmony export */ });
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");
/* harmony import */ var _getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getWeekYear.mjs */ "./node_modules/date-fns/getWeekYear.mjs");
/* harmony import */ var _startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./startOfWeek.mjs */ "./node_modules/date-fns/startOfWeek.mjs");
/* harmony import */ var _lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_lib/defaultOptions.mjs */ "./node_modules/date-fns/_lib/defaultOptions.mjs");





/**
 * The {@link startOfWeekYear} function options.
 */

/**
 * @name startOfWeekYear
 * @category Week-Numbering Year Helpers
 * @summary Return the start of a local week-numbering year for the given date.
 *
 * @description
 * Return the start of a local week-numbering year.
 * The exact calculation depends on the values of
 * `options.weekStartsOn` (which is the index of the first day of the week)
 * and `options.firstWeekContainsDate` (which is the day of January, which is always in
 * the first week of the week-numbering year)
 *
 * Week numbering: https://en.wikipedia.org/wiki/Week#The_ISO_week_date_system
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 * @param options - An object with options
 *
 * @returns The start of a week-numbering year
 *
 * @example
 * // The start of an a week-numbering year for 2 July 2005 with default settings:
 * const result = startOfWeekYear(new Date(2005, 6, 2))
 * //=> Sun Dec 26 2004 00:00:00
 *
 * @example
 * // The start of a week-numbering year for 2 July 2005
 * // if Monday is the first day of week
 * // and 4 January is always in the first week of the year:
 * const result = startOfWeekYear(new Date(2005, 6, 2), {
 *   weekStartsOn: 1,
 *   firstWeekContainsDate: 4
 * })
 * //=> Mon Jan 03 2005 00:00:00
 */
function startOfWeekYear(date, options) {
  const defaultOptions = (0,_lib_defaultOptions_mjs__WEBPACK_IMPORTED_MODULE_0__.getDefaultOptions)();
  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const year = (0,_getWeekYear_mjs__WEBPACK_IMPORTED_MODULE_1__.getWeekYear)(date, options);
  const firstWeek = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_2__.constructFrom)(date, 0);
  firstWeek.setFullYear(year, 0, firstWeekContainsDate);
  firstWeek.setHours(0, 0, 0, 0);
  const _date = (0,_startOfWeek_mjs__WEBPACK_IMPORTED_MODULE_3__.startOfWeek)(firstWeek, options);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfWeekYear);


/***/ }),

/***/ "./node_modules/date-fns/startOfYear.mjs":
/*!***********************************************!*\
  !*** ./node_modules/date-fns/startOfYear.mjs ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   startOfYear: () => (/* binding */ startOfYear)
/* harmony export */ });
/* harmony import */ var _toDate_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./toDate.mjs */ "./node_modules/date-fns/toDate.mjs");
/* harmony import */ var _constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constructFrom.mjs */ "./node_modules/date-fns/constructFrom.mjs");



/**
 * @name startOfYear
 * @category Year Helpers
 * @summary Return the start of a year for the given date.
 *
 * @description
 * Return the start of a year for the given date.
 * The result will be in the local timezone.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param date - The original date
 *
 * @returns The start of a year
 *
 * @example
 * // The start of a year for 2 September 2014 11:55:00:
 * const result = startOfYear(new Date(2014, 8, 2, 11, 55, 00))
 * //=> Wed Jan 01 2014 00:00:00
 */
function startOfYear(date) {
  const cleanDate = (0,_toDate_mjs__WEBPACK_IMPORTED_MODULE_0__.toDate)(date);
  const _date = (0,_constructFrom_mjs__WEBPACK_IMPORTED_MODULE_1__.constructFrom)(date, 0);
  _date.setFullYear(cleanDate.getFullYear(), 0, 1);
  _date.setHours(0, 0, 0, 0);
  return _date;
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (startOfYear);


/***/ }),

/***/ "./node_modules/date-fns/toDate.mjs":
/*!******************************************!*\
  !*** ./node_modules/date-fns/toDate.mjs ***!
  \******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   toDate: () => (/* binding */ toDate)
/* harmony export */ });
/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @typeParam DateType - The `Date` type, the function operates on. Gets inferred from passed arguments. Allows to use extensions like [`UTCDate`](https://github.com/date-fns/utc).
 *
 * @param argument - The value to convert
 *
 * @returns The parsed date in the local time zone
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  const argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (
    argument instanceof Date ||
    (typeof argument === "object" && argStr === "[object Date]")
  ) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new argument.constructor(+argument);
  } else if (
    typeof argument === "number" ||
    argStr === "[object Number]" ||
    typeof argument === "string" ||
    argStr === "[object String]"
  ) {
    // TODO: Can we get rid of as?
    return new Date(argument);
  } else {
    // TODO: Can we get rid of as?
    return new Date(NaN);
  }
}

// Fallback for modularized imports:
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (toDate);


/***/ }),

/***/ "./src/components/GenerateCard.mjs":
/*!*****************************************!*\
  !*** ./src/components/GenerateCard.mjs ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GenerateCard)
/* harmony export */ });
/* harmony import */ var _TransactionComponents_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TransactionComponents.mjs */ "./src/components/TransactionComponents.mjs");

/**
 *
 * @param {*} cardId The title which is just the choice + the count in this format "Moving-Money-0"
 * @returns The card html element with the id being the title.
 */

class GenerateCard {
  constructor(cardId, choice) {
    this.cardId = cardId;
    this.choice = choice;
    this.transactionComponent = new _TransactionComponents_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](this.cardId);
  }
  generate() {
    const card = document.createElement('div');
    card.className = 'transaction-card';
    card.id = `${this.cardId}`;
    let content = ``;

    switch (this.choice) {
      case 'Moving-Money':
        content += this.injectMovingMoney();
        break;
      case 'Mutual-Fund-Trade':
        content += this.injectMutualFundTrade();
        break;
      case 'Equity-Trade':
        content += this.injectEquityTrade();
        break;
      case 'Options-Trade':
        content += this.injectOptionsTrade();
        break;
      case 'Managed-Accounts':
        content += injectManagedAccount();
        break;
      case 'Other':
        content += injectOther();
        break;
      default:
        break;
    }
    card.innerHTML = content;
    // Add event listener to close button
    // card.querySelector(".close-card").addEventListener("click", () => {
    //   card.remove();
    // });

    return card;
  }

  injectMovingMoney() {
    const html =
      this.transactionComponent.injectTitle(this.cardId) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAlertsAndRestrictions(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectAction1(this.cardId) +
      `</div>`;
    return html;
  }

  injectMutualFundTrade() {
    const html =
      this.transactionComponent.injectTitle(this.cardId) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAlertsAndRestrictions(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectOrders() +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectAction2(this.cardId) +
      `</div>`;
    return html;
  }

  injectEquityTrade() {
    const html =
      this.transactionComponent.injectTitle(this.card) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectOrders() +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectAction3(this.cardId) +
      `</div>`;
    return html;
  }

  injectOptionsTrade() {
    this.transactionComponent.injectTitle(this.card) +
      `<div class = "secondary-card-container">` +
      this.transactionComponent.injectAccountNumber(this.cardId) +
      this.transactionComponent.injectAuthorizedToTrade(this.cardId) +
      this.transactionComponent.injectOrders() +
      this.transactionComponent.injectAutoInvestments(this.cardId) +
      this.transactionComponent.injectCommission();
    `</div>`;
    return html;
  }
}

// function generate(choice, count, cardId) {
//   const transactionComponent = new TransactionComponent(cardId);
//   const card = document.createElement('div');
//   card.className = 'transaction-card';
//   card.id = `${choice}-${count}`;
//   let content = ``;

//   switch (choice) {
//     case 'Moving-Money':
//       content += injectMovingMoney(cardId);
//       break;
//     case 'Mutual-Fund-Trade':
//       content += injectMutualFundTrade(cardId);
//       break;
//     case 'Equity-Trade':
//       content += injectEquityTrade(cardId);
//       break;
//     case 'Options-Trade':
//       content += injectOptionsTrade(cardId);
//       break;
//     case 'Managed-Accounts':
//       content += injectManagedAccount(cardId);
//       break;
//     case 'Other':
//       content += injectOther(cardId);
//       break;
//     default:
//       break;
//   }
//   card.innerHTML = content;
//   // Add event listener to close button
//   // card.querySelector(".close-card").addEventListener("click", () => {
//   //   card.remove();
//   // });

//   return card;
// }

// function injectMovingMoney(cardId) {
//   const html =
//     transactionComponent.injectTitle(cardId) +
//     `<div class = "secondary-card-container">` +
//     transactionComponent.injectAccountNumber(cardId) +
//     transactionComponent.injectAlertsAndRestrictions(cardId) +
//     transactionComponent.injectAuthorizedToTrade(cardId) +
//     transactionComponent.injectAutoInvestments(cardId) +
//     transactionComponent.injectAction1(cardId) +
//     `</div>`; // TODO add options contiainer?
//   return html;
// }

// function injectMutualFundTrade1() {
//   const html =
//     transactionComponent.injectTitle(cardId) +
//     `<div class = "secondary-card-container">` +
//     transactionComponent.injectAccountNumber(cardId) +
//     transactionComponent.injectAlertsAndRestrictions(cardId) +
//     transactionComponent.injectAuthorizedToTrade(cardId) +
//     transactionComponent.injectOrders() +
//     transactionComponent.injectAutoInvestments(cardId) +
//     transactionComponent.injectAction2(cardId) +
//     `</div>`; // TODO add options contiainer?
//   return html;
// }

// function injectMutualFundTrade() {
//   return `

//             <button class="close-card">X</button>
//             <h3>Mutual Fund Trade</h3>
//             <label for="accountNum2">Account #</label>
//             <input type="text" id="accountNum2" name="Account-Number" />

//             <div class="radio-box">
//               <label for="alerts-and-restrictions"
//                 >Alerts and Restrictions?</label
//               >
//               <div class="radios">
//                 <div class="radio">
//                   <input type="radio" id="alerts-and-restrictions-yes" name = "Alerts-And-Restrictions" value="yes" />
//                   <label for="alerts-and-restrictions-yes">Yes</label>
//                 </div>
//                 <div class="radio">
//                   <input type="radio" id="alerts-and-restrictions-no" name = "Alerts-And-Restrictions" value="no"/>
//                   <label for="alerts-and-restrictions-no">No</label>
//                 </div>
//               </div>
//             </div>
//             <div class="radio-box">
//               <label for="authorized-to-trade">Authorized to Trade?</label>
//               <div class="radios">
//                 <div class="radio">
//                   <input type="radio" id="authorized-to-trade-yes" name = "Authorized-To-Trade" value="yes"/>
//                   <label for="authorized-to-trade-yes">Yes</label>
//                 </div>
//                 <div class="radio">
//                   <input type="radio" id="authorized-to-trade-no" name = "Authorized-To-Trade" value="no"/>
//                   <label for="authorized-to-trade-no">No</label>
//                 </div>
//               </div>
//             </div>

//             <div class="radio-box">
//               <label for="orders">Orders</label>
//               <div class="radios">
//                 <div class="radio">
//                   <input type="radio" id="orders-openend" name = "Orders" value = "opened"/>
//                   <label for="openend">Openend</label>
//                 </div>
//                 <div class="radio">
//                   <input type="radio" id="orders-closed" name="Orders" value="closed" />
//                   <label for="orders-closed">Closed</label>
//                 </div>
//               </div>
//             </div>

//             <div class="option-container">
//               <label for="auto-investments"
//                 >Auto Investments or PWS planse?</label
//               >
//               <select id="auto-investments" name="auto-investments">
//                 <option value="null">Select Option:</option>
//                 <option value="adjusted">Adjusted</option>
//                 <option value="discussed-no-changes">
//                   Discussed, no changes.
//                 </option>
//                 <option value="na">NA</option>
//               </select>

//               <label for="action">Action:</label>
//               <select id="action" name="action">
//                 <option value="null">Select Option:</option>
//                 <option value="buy">Buy</option>
//                 <option value="sell">Sell</option>
//                 <option value="Exchange">Exchange</option>
//                 <option value="sellToBuy">Sell To Buy</option>
//               </select>
//             </div>
//           `;
// }

function injectEquityTrade() {
  return ` 

            <button class="close-card">X</button>
            <h3>Equity Trade</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" name="Account-Number" />

            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" name = "Alerts-And-Restrictions" value="yes" />
                  <label for="alerts-and-restrictions-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-no" name = "Alerts-And-Restrictions" value="no"/>
                  <label for="alerts-and-restrictions-no">No</label>
                </div>
              </div>
            </div>
            <div class="radio-box">
              <label for="authorized-to-trade">Authorized to Trade?</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-yes" name = "Authorized-To-Trade" value="yes"/>
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" name = "Authorized-To-Trade" value="no"/>
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="orders">Orders</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="orders-openend" name = "Orders" value = "opened"/>
                  <label for="orders-openend">Openend</label>
                </div>
                <div class="radio">
                  <input type="radio" id="orders-cancelled" name="Orders" value="Cancelled"/>
                  <label for="orders-cancelled">Cancelled</label>
                </div>
              </div>
            </div>

            <div class="option-container">
              <label for="auto-investments"
                >Auto Investments or PWS planse?</label
              >
              <select id="auto-investments" name="auto-investments">
                <option value="null">Select Option:</option>
                <option value="adjusted">Adjusted</option>
                <option value="discussed-no-changes">
                  Discussed, no changes.
                </option>
                <option value="na">NA</option>
              </select>

              <label for="comission">Comission:</label>
              <select id="action" name="action">
                <option value="null">Select Option:</option>
                <option value="waved">Waved</option>
                <option value="Discussed">Discussed</option>
              </select>

              <label for="action">Action:</label>
              <select id="action" name="action">
                <option value="null">Select Option:</option>
                <option value="buy">Buy</option>
                <option value="sell">Sell</option>
  
              </select>
            </div>
`;
}

function injectOptionsTrade() {
  return `         

            <button class="close-card">X</button>
            <h3>Options Trade</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" name="Account-Number" />
            `;
}

function injectManagedAccount() {
  return `

            <button class="close-card">X</button>
            <h3>Managed Accounts</h3>
            <label for="accountNum2">Account #</label>
            <input type="text" id="accountNum2" name="Account-Number" />

            <div class="radio-box">
              <label for="alerts-and-restrictions"
                >Alerts and Restrictions?</label
              >
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-yes" name = "Alerts-And-Restrictions" value="yes" />
                  <label for="alerts-and-restrictions-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="alerts-and-restrictions-no" />
                  <label for="alerts-and-restrictions-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="authorized-to-trade">Authorized to Trade?</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-yes" name = "Authorized-To-Trade" value="yes"/>
                  <label for="authorized-to-trade-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="authorized-to-trade-no" name = "Authorized-To-Trade" value="no"/>
                  <label for="authorized-to-trade-no">No</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="product">Product</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="SMA" name = "Product" value="SMA"/>
                  <label for="SMA">SMA</label>
                </div>
                <div class="radio">
                  <input type="radio" id="FidelityGo" name = "Product" value = "FidelityGo"/>
                  <label for="FidelityGo">FidelityGo</label>
                </div>
              </div>
            </div>

            <div class="radio-box">
              <label for="DNT">DNT</label>
              <div class="radios">
                <div class="radio">
                  <input type="radio" id="DNT-yes" name="DNT" value = "Yes" />
                  <label for="DNT-yes">Yes</label>
                </div>
                <div class="radio">
                  <input type="radio" id="DNT-no" name = "DNT" value = "Yes"/>
                  <label for="DNT-no">No</label>
                </div>
              </div>
            </div>

            <div class="option-container">
              <label for="auto-investments"
                >Auto Investments or PWS plans? NOT Proportional</label
              >
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
                <option value="fund">Fund</option>
                <option value="withdrawl">WithDrawl</option>
                <option value="journal">Journal</option>
              </select>
            </div>`;
}

function injectOther() {
  return `

          <button class="close-card">X</button>
          <h3>Other</h3>
          <label for="accountNum2">Account #</label>
          <input type="text" id="accountNum2" name="Account-Number" />

    `;
}

function formatString(input) {
  return input.split('-').join(' ');
}


/***/ }),

/***/ "./src/components/TransactionComponents.mjs":
/*!**************************************************!*\
  !*** ./src/components/TransactionComponents.mjs ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TransactionComponent)
/* harmony export */ });
/**
 * This module contains all of the functions that make up the inner html individual form components for a transaction form. This makes organizing easier.
 */

class TransactionComponent {
  constructor(cardId) {
    this.cardId = cardId;
  }

  // includes title and close button.
  injectTitle() {
    return `
        <button class="close-card">X</button>
        <input class = "transaction-title" data-label="Transaction" value="${this.cardId}">`;
  }
  injectAccountNumber() {
    return `
      <div class="text-input-container">
        <label for="${this.cardId}-accountNum">Account #</label>
        <input
          type="text"
          id="${this.cardId}-accountNum"
          name="Account-Number"
          data-label="Acct:"
        />
      </div>
    `;
  }
  injectAlertsAndRestrictions() {
    return `
      <div class="transaction-checkbox">
        <label for="${this.cardId}-alerts-and-restrictions"
          >Alerts and Restrictions?</label
        >
        <input
          type="checkbox"
          id="${this.cardId}-alerts-and-restrictions"
          name="Alerts-and-Restrictions"
        />
      </div>
    `;
  }
  injectAuthorizedToTrade() {
    return `
      <div class="transaction-checkbox">
        <label for="${this.cardId}-authorized-to-trade"
          >Authorized to Trade?</label
        >
        <input
          type="checkbox"
          id="${this.cardId}-authorized-to-trade"
          name="Authorized-to-Trade"
        />
      </div>
    `;
  }
  injectAutoInvestments() {
    return `
      <div class="option-container">
        <label for="${this.cardId}-auto-investments">Auto Investments or PWS planse?</label>
        <select id="${this.cardId}-auto-investments" name="Auto-Investments" data-label="PWS plan(s):">
            <option value="none">Select Option:</option>
            <option value="adjusted">Adjusted</option>
            <option value="Discussed - no changes">
            Discussed, no changes.
            </option>
            <option value="NA">NA</option>
        </select>
      </div>
    `;
  }

  injectOrders() {
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-orders-openend-or-cancelled">
        Orders, opened or cancelled?
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-orders-openend-or-cancelled"
        name="orders-openend-or-cancelled"
        value="yes"
      />
    </div>`;
  }

  /**
   * For Option Trade
   */
  injectComission() {
    return `  
    <div class = "option-container">
      <label for="${this.cardId}-comission" data-label="Comission:" >Comission:</label>
      <select id="${this.cardId}-comission" name="Comission" data-label = "Comission">
          <option value="null">Select Option:</option>
          <option value="waived">Waived</option>
          <option value="discussed">Discussed</option>
      </select>
    </div>
    <div class = "reason-text-box" style = "display: none">
      <label for = "${this.cardId}-comission-reason" data-label="Reason:">Reason:</label>
      <input type = "text" id = "${this.cardId}-comission-reason" name = "comission-reason">
    </div>
  `;
  }

  injectNumOfLegs() {
    return `
    <div class="option-container">
      <label for="${this.cardId}-num-of-legs">
        # of Legs:
      </label>
      <select
        id="${this.cardId}-num-of-legs"
        name="num-of-legs"
      >
        <option value="null">Select Option:</option>
        <option value="single-leg">Single-Leg</option>
        <option value="multi-leg">Multi-Leg</option>
      </select>
    </div>
    <div class = "action-container"></div>
    `;
  }

  /**
   * For Equity Trade
   */
  injectAction3() {
    return `  
    <div class = "option-container">
    <label for="${this.cardId}-action" data-label="Action:" >Action:</label>
    <select id="${this.cardId}-action" name="Action" data-label = "Action">
        <option value="null">Select Option:</option>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
        <option value="buy-to-cover">Buy To Cover</option>
        <option value="sell-short">Sell Short</option>
    </select>
    </div>

    <div class = "action-container"></div>
  `;
  }

  /**
   * For Mutual Fund Trade
   */
  injectAction2() {
    return `  
    <div class = "option-container">
    <label for="${this.cardId}-action" data-label="Action:" >Action:</label>
    <select id="${this.cardId}-action" name="Action" data-label = "Action">
        <option value="null">Select Option:</option>
        <option value="buy">Buy</option>
        <option value="sell">Sell</option>
        <option value="exchange">Exchange</option>
        <option value="sell-to-buy">Sell to Buy</option>
    </select>
    </div>

    <div class = "action-container"></div>
  `;
  }

  /**
   * Contains "deposit", "withdrawal", and "journal"
   * @param {*} this.cardId
   * @returns
   */
  injectAction1() {
    return `  
      <div class = "option-container">
      <label for="${this.cardId}-action" data-label="Action:" >Action:</label>
      <select id="${this.cardId}-action" name="Action" data-label = "Action">
          <option value="null">Select Option:</option>
          <option value="deposit">Deposit</option>
          <option value="withdrawal">Withdrawal</option>
          <option value="journal">Journal</option>
      </select>
      </div>
      <div class="option-container">
          <label for="${this.cardId}-account-type">Account Type</label>
          <select name="Account-Type" id="${this.cardId}-account-type">
            <option value="null">Select Option:</option>
            <option value="retirement">Retirement</option>
            <option value="non-retirement">Non Retirement</option>
          </select>
        </div>

      <div class = "action-container"></div>
    `;
  }
}
// const transactionComponent = new TransactionComponent();
// export { transactionComponent };


/***/ }),

/***/ "./src/components/actionComponents.mjs":
/*!*********************************************!*\
  !*** ./src/components/actionComponents.mjs ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ActionComponents)
/* harmony export */ });
/**
 * This file contains the injections for Action items.
 */

// Action 1 items.

class ActionComponents {
  constructor(cardId) {
    this.cardId = cardId;
  }

  actionDepositRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere() +
      this.injectContributionYear() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionDepositNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionWithdrawlRetirement() {
    const string =
      this.injectAmount() +
      this.injectTaxWitholding() +
      this.injectToWhere() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionWithdrawlNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectToWhere() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionJournalRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere +
      this.injectCashInKind() +
      this.injectTaxWitholding() +
      this.injectContributionYear() +
      this.injectToWhere() +
      this.injectCheckBalances +
      this.injectLikeUnlikeRegistrations() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionJournalNonRetirement() {
    const string =
      this.injectAmount() +
      this.injectFromWhere +
      this.injectCashInKind() +
      this.injectToWhere() +
      this.injectCheckBalances +
      this.injectLikeUnlikeRegistrations() +
      this.injectICP() +
      this.injectReviewTransaction() +
      this.injectEnterSFNotes();
    return string;
  }

  actionBuy() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectRestrictions() +
      this.injectMinimums() +
      this.injectNonFidelityFunds() +
      this.injectOver2Mil() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  actionSell() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectShortTermRedemption() +
      this.injectRestrictions() +
      this.injectNonFidelityFunds() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  actionExchange() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFromSymbol() +
      this.injectToSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectShortTermRedemption() +
      this.injectRestrictions() +
      this.injectMinimums() +
      this.injectNonFidelityFunds() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  actionSellToBuy() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFromSymbol() +
      this.injectToSymbol() +
      this.injectSolicitedUnsolicited() +
      this.injectProvideQuote() +
      this.injectSettlementDays() +
      this.injectShortTermRedemption() +
      this.injectRestrictions() +
      this.injectMinimums() +
      this.injectNonFidelityFunds() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionBuy() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionSell() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectProvideQuote() +
      this.injectDIAPenny() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionBuyToCover() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckBalances() +
      this.injectProvideQuote() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  equityActionSellShort() {
    const string =
      this.injectAmount() +
      this.injectDollarsShares() +
      this.injectFractionalShares() +
      this.injectSymbol() +
      this.injectOrderType() +
      this.injectLimitPrice() +
      this.injectStopPrice() +
      this.injectTimeInForce() +
      this.injectCheckMarginReq() +
      this.injectProvideQuote() +
      this.injectDIAPenny() +
      this.injectOver2Mil() +
      this.injectEnterOrderInRWOE() +
      this.injectCheckOrderReview() +
      this.injectUpdateOrderLog() +
      this.injectEnterSFNotes();
    return string;
  }

  optionsSingleLeg() {}

  optionsMultiLeg() {}

  injectDollarsShares() {
    const htmlString = this.createRadio('Dollars or Shares', [
      'dollars',
      'shares',
    ]);
    return htmlString;
  }

  injectFractionalShares() {
    return this.createCheckbox('Fractional Shares?', 'fractional-shares');
  }

  // TODO add data label
  injectFromSymbol() {
    const htmlString = this.createTextInput('from-symbol', 'From Symbol');
    return htmlString;
  }
  // TODO add data label
  injectToSymbol() {
    const htmlString = this.createTextInput('to-symbol', 'To Symbol');
    return htmlString;
  }

  injectSolicitedUnsolicited() {
    const htmlString = this.createRadio('Solicited or Unsolicited?', [
      'solicited',
      'unsolicited',
    ]);
    return htmlString;
  }

  injectSymbol() {
    const htmlString = this.createTextInput('symbol', 'Symbol');
    return htmlString;
  }

  injectOrderType() {
    let options = {
      Market: 'Market',
      Limit: 'Limit',
      'Stop Loss': 'Stop Loss',
      'Stop Limit': 'Stop Limit',
      'Training Stop Loss $': 'Trailing Stop Loss $',
      'Trailing Stop Loss %': 'Trailing Stop Loss %',
      'Trailing Stop Limit $': 'Trailing Stop Limit $',
      'Trailing Stop Limit %': 'Trailing Stop Limit %',
      Conditional: 'Conditional',
    };
    return this.createDropDown(
      'order-type',
      'Order Type',
      options,
      'Order Type'
    );
  }

  injectLimitPrice() {
    return this.createTextInput('limit-price', 'Limit Price', 'Limit Price');
  }

  injectStopPrice() {
    return this.createTextInput('stop-price', 'Stop Price', 'Stop Price');
  }

  injectTimeInForce() {
    return this.createRadio('Time in Force', ['Day', 'GTC'], 'Day or GTC');
  }

  injectCheckMarginReq() {
    return this.createCheckbox('Check Margin Req', 'check-margin-req');
  }

  injectProvideQuote() {
    const htmlString = this.createCheckbox('Provide Quote?', 'provide-quote');
    return htmlString;
  }

  injectSettlementDays() {
    const htmlString = this.createCheckbox(
      'Settlement Days?',
      'settlement-days'
    );
    return htmlString;
  }

  injectShortTermRedemption() {
    const htmlString = this.createCheckbox(
      'Short-term Redemption?',
      'short-term-redemption'
    );
    return htmlString;
  }

  injectRestrictions() {
    const htmlString = this.createCheckbox(
      'Restrictions (all green?)',
      'restrictions'
    );
    return htmlString;
  }

  injectMinimums() {
    const htmlString = this.createCheckbox(
      'Minimums (initial and additional)',
      'minimums'
    );
    return htmlString;
  }

  // TODO This one is more complicated than I thought. Come back later.
  injectNonFidelityFunds() {
    const options = {
      'Load?': 'Yes: transfer to specialty trading',
      'NFT = Y': 'Buy: No Fee',
      'NFT = N': "Buy: Transaction fee charged (don't overbuy)",
    };
    const htmlString = this.createDropDown(
      'non-fidelity-funds',
      'Non-Fidelity-Funds - NFT?',
      options
    );
    return htmlString;
  }

  injectDIAPenny() {
    return this.createCheckbox(
      'DIA Penny Stock',
      'DIA-penny-stock',
      'DIA Penny Stock Restrictions?'
    );
  }

  // TODO add data label functionality
  injectOver2Mil() {
    const htmlString = this.createCheckbox(
      'Over $2mil needs approval',
      'over-2mill'
    );
    return htmlString;
  }

  injectEnterOrderInRWOE() {
    const htmlString = this.createCheckbox(
      'Enter Order in RWOE/Readback',
      'enter-order-in-RWOE'
    );
    return htmlString;
  }

  injectCheckOrderReview() {
    const htmlString = this.createCheckbox(
      'Check Order Review',
      'check-order-review'
    );
    return htmlString;
  }

  injectUpdateOrderLog() {
    const htmlString = this.createCheckbox(
      'Update Order Log',
      'update-order-log'
    );
    return htmlString;
  }

  injectLikeUnlikeRegistrations() {
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-like-unlike-registrations">
        Like/Unlike Registrations
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-like-unlike-registrations"
        name="like-unlike-registrations"
        value="yes"
      />
    </div>`;
  }

  injectCheckBalances() {
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-negative-balance">
        Check Balances - Negative Balance?
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-negative-balance"
        name="negative-balance"
        value="yes"
      />
    </div>`;
  }

  injectCashInKind() {
    return `
    <div class="radio-container">
      <div class="radio-title">Cash or In-Kind</div>
      <div class="radios">
        <div class="radio">
          <label for="${this.cardId}-cash">Cash</label>
          <input type="radio" id="${this.cardId}-cash" name="cash" value="cash" />
        </div>
        <div class="radio">
          <label for="${this.cardId}-in-kind">In-Kind</label>
          <input
            type="radio"
            id="${this.cardId}-in-kind"
            name="in-kind"
            value="in-kind"
          />
        </div>
      </div>
    </div>`;
  }

  injectToWhere() {
    return `
    <div class="text-input-container">
      <label for="${this.cardId}-to-where">To Where:</label>
      <input
        type="text"
        id="${this.cardId}-to-where"
        name="To-Where"
        data-label="From where:"
      />
    </div>`;
  }

  injectTaxWitholding() {
    return `    
    <div class="tax-witholding-container">
      <h5>Tax Withholding</h5>
      <div class="text-input-container three">
        <label for="${this.cardId}-tax-witholding-fed">Federal:</label>
        <input type="number" id="${this.cardId}-tax-witholding-fed" />
        <label for="${this.cardId}-tax-witholding-fed">%</label>
      </div>
      <div class="text-input-container three">
        <label for="${this.cardId}-tax-witholding-state">State:</label>
        <input type="number" id="${this.cardId}-tax-witholding-state" />
        <label for="${this.cardId}-tax-witholding-state">%</label>
      </div>
      <div class="transaction-checkbox">
        <label for="${this.cardId}-gross-up">Grossed Up</label>
        <input
          type="checkbox"
          id="${this.cardId}-gross-up"
          name="grossed-up"
          data-label="Grossed up"
        />
      </div>
    </div>`;
  }

  injectAccountType() {
    return `
        <div class="option-container">
          <label for="${this.cardId}-account-type">Account Type</label>
          <select name="Account-Type" id="${this.cardId}-account-type">
            <option value="null">Select Option:</option>
            <option value="retirement">Retirement</option>
            <option value="non-retirement">Non Retirement</option>
          </select>
        </div>`;
  }

  injectAmount() {
    return `
              <div class="text-input-container">
                  <label for="${this.cardId}-amount">Amount:</label>
                  <input
                  type="text"
                  id="${this.cardId}-amount"
                  name="Amount"
                  data-label="Amount:"
                  />
              </div>
          `;
  }

  injectFromWhere() {
    return `
        <div class="text-input-container">
          <label for="${this.cardId}-from-where">From Where:</label>
          <input
            type="text"
            id="${this.cardId}-from-where"
            name="From-Where"
            data-label="From where:"
          />
        </div>`;
  }

  injectContributionYear() {
    return `
        <div class = "contribution-container" id="${this.cardId}-contribution-container">
          <div class="radio-container">
            <div class="radio-title">Contribution Year:</div>
            <div class="radios">
              <div class="radio">
                <label for="${this.cardId}-contribution-CYC">CYC</label>
                <input
                  type="radio"
                  id="${this.cardId}-contribution-CYC"
                  name="contribution-year"
                  value="CYC"
                />
              </div>
              <div class="radio">
                <label for="${this.cardId}-contribution-PYC">PYC</label>
                <input
                  type="radio"
                  id="${this.cardId}-contribution-PYC"
                  name="contribution-year"
                  value="PYC"
                />
              </div>
            </div>
          </div>
        </div>`;
  }

  injectICP() {
    return `
        <div class="text-input-container">
          <label for="${this.cardId}-ICP-Work-Order">ICP/Work Order#:</label>
          <input
            type="text"
            id="${this.cardId}-ICP-Work-Order"
            name="ICP-Work-Order"
            data-label="ICP/Work Order #:"
          />
        </div>`;
  }

  injectReviewTransaction() {
    return `
        <div class="transaction-checkbox">
          <label for="${this.cardId}-Review-Transaction">Review Transaction?</label>
          <input
            type="checkbox"
            id="${this.cardId}-Review-Transaction"
            name="Review-transaction"
          />
        </div>`;
  }

  injectEnterSFNotes() {
    return `
        <div class="transaction-checkbox">
          <label for="${this.cardId}-Enter-Salesforce-Notes">
            Enter Salesforce Notes?
          </label>
          <input
            type="checkbox"
            id="${this.cardId}-Enter-Salesforce-Notes"
            name="Enter-Salesforce-Notes"
          />
        </div>`;
  }

  // Helper Methods to create inputs
  /**
   *
   * @param {string} label The actual title that appears next to input
   * @param {string} name The name lower case and seperated by dashes.
   * @returns
   */
  createCheckbox(label, name, dataLabel = null) {
    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';
    return `
    <div class="transaction-checkbox">
      <label for="${this.cardId}-${name}">
        ${label}
      </label>
      <input
        type="checkbox"
        id="${this.cardId}-${name}"
        name="${name}"
        ${dataLabelAttribute}
      />
    </div>`;
  }
  /**
   *
   * @param {string} label Label
   * @param {Array} options Array of options, lower case and dashes for space.
   * @returns
   */
  createRadio(label, options, dataLabel = null) {
    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';
    let radiosHTML = '';
    options.forEach((option) => {
      const formattedOption = this.formatString(option);
      radiosHTML += `
        <div class="radio">
          <label for="${this.cardId}-${option}">${formattedOption}</label>
          <input 
          type="radio" 
          id="${this.cardId}-${option}" 
          name="${option}" 
          value="${option}" 
          ${dataLabelAttribute}/>
        </div>`;
    });

    return `
      <div class="radio-container">
        <div class="radio-title">${label}</div>
        <div class="radios">
          ${radiosHTML}
        </div>
      </div>`;
  }
  /**
   *
   * @param {String} name lower case dashes for space
   * @param {*} label Proper uppercase, special chars allowed.
   * @returns
   */
  createTextInput(name, label, dataLabel = null) {
    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';
    let html = `
      <div class="text-input-container">
        <label for="${this.cardId}-${name}">${label}:</label>
        <input
          type="text"
          id="${this.cardId}-${name}"
          name="${name}"
          ${dataLabelAttribute}"
        />
      </div>`;
    return html;
  }

  /**
   *
   * @param {string} name Lower case and spaces replaced with dashes
   * @param {string} label The label to be displayed
   * @param {Object} options object(key-value pair) of options to choose from
   * @param {string} dataLabel If no data label, then leave empty.
   * @returns html string.
   */
  createDropDown(name, label, options, dataLabel = null) {
    let optionsHTML = `<option value="none">Select Option</option>`;

    for (const [key, value] of Object.entries(options)) {
      optionsHTML += `<option value="${value}">${key}</option>`;
    }

    let dataLabelAttribute = dataLabel ? ` data-label="${dataLabel}"` : '';

    return `
      <div class="option-container">
        <label for="${this.cardId}-${name}">${label}</label>
        <select id="${this.cardId}-${name}" name="${name}"${dataLabelAttribute}>
          ${optionsHTML}
        </select>
      </div>`;
  }

  formatString(str) {
    // Replace dashes with spaces
    const spacedStr = str.replace(/-/g, ' ');

    // Split the string into words
    const words = spacedStr.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map((word) => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    });

    // Join the words back into a single string
    return capitalizedWords.join(' ');
  }
}


/***/ }),

/***/ "./src/domControl/AddTransaction.mjs":
/*!*******************************************!*\
  !*** ./src/domControl/AddTransaction.mjs ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addTransactions: () => (/* binding */ addTransactions)
/* harmony export */ });
/* harmony import */ var _components_GenerateCard_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/GenerateCard.mjs */ "./src/components/GenerateCard.mjs");
/* harmony import */ var _DataManager_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DataManager.mjs */ "./src/domControl/DataManager.mjs");
/* harmony import */ var _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Transaction.mjs */ "./src/domControl/Transaction.mjs");
/* harmony import */ var _HandleTransaction_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./HandleTransaction.mjs */ "./src/domControl/HandleTransaction.mjs");




/**
 * This module is responsible for setting the handler on the "Add Transaction " button, then generating the different transaction options buttons, then handling those buttons to generate the transaction form and object that is added to the data object. It has a lot of responsibility and might need to be broken down.
 */

class AddTransaction {
  constructor() {
    this.buttonsContainer = document.querySelector('.buttons-container');
    this.options = {
      'Moving-Money': { count: 0 },
      'Mutual-Fund-Trade': { count: 0 },
      'Equity-Trade': { count: 0 },
      'Options-Trade': { count: 0 },
      'Managed-Accounts': { count: 0 },
      Other: { count: 0 },
    };
  }

  resetTransactions() {
    this.options = {};
    this.options = {
      'Moving-Money': { count: 0 },
      'Mutual-Fund-Trade': { count: 0 },
      'Equity-Trade': { count: 0 },
      'Options-Trade': { count: 0 },
      'Managed-Accounts': { count: 0 },
      Other: { count: 0 },
    };

    const transactionContainer = document.querySelector(
      '#transaction-container'
    );
    transactionContainer.innerHTML = '';
  }

  // make handlers for the form page
  handleAddTransactionButton() {
    // select add-transaction button
    const addTransaction = document.querySelector(
      'button.add-transaction-button'
    );
    // add event listener for add-transaction
    addTransaction.addEventListener('click', () => {
      // Clear existing buttons before adding new ones
      this.buttonsContainer.innerHTML = '';
      // Generate buttons for options that haven't been clicked yet
      for (let option in this.options) {
        let button = document.createElement('button');
        button.id = option;
        button.innerHTML = this.formatString(option);
        button.setAttribute('type', 'button');
        this.buttonsContainer.appendChild(button);
      }
      //console.log(this.options);
      this.handleTransactionButtons();
    });
  }

  /**
   * When the user selects an add transaction option, it needs to generate a new object that is then appended to the data object. How can we do that?
   */

  /**
   * Add's event handlers to the generated add transaction buttons.
   */
  handleTransactionButtons() {
    const buttons = this.buttonsContainer.querySelectorAll('button');
    const transactionContainer = document.querySelector(
      '#transaction-container'
    );

    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        let choice = button.getAttribute('id');
        let count = this.options[choice].count;
        let cardId = `${choice}-${count}`;
        const generateCard = new _components_GenerateCard_mjs__WEBPACK_IMPORTED_MODULE_0__["default"](cardId, choice); // declare generate card object
        let card = generateCard.generate(); // Card is generated.
        //console.log(card);
        //console.log(`${choice} clicked`);
        if (card) {
          transactionContainer.appendChild(card);
          // increase count on option
          this.options[choice].count++;
          this.buttonsContainer.innerHTML = ``;
        }
        // initialize empty object that will be the new transaction object that will later be added to dataManager.data.Transactions.push(newTransactionObject);
        const newTransactionObjectName = `${cardId}`;
        //console.log(newTransactionObjectName);
        // add the newTransactionObject to Transactions
        _DataManager_mjs__WEBPACK_IMPORTED_MODULE_1__.dataManager.addTransaction(newTransactionObjectName);
        /**
         * Event handler adding goes here to handle the transaction form.
         */
        (0,_HandleTransaction_mjs__WEBPACK_IMPORTED_MODULE_3__.handleTransaction)(card);

        // // Selects all the text inputs.
        // let textInputs = card.querySelectorAll('input[type= "text"]');
        // if (textInputs) {
        //   textInputs.forEach((input) => {
        //     // dataManager.data.Transactions[newTransactionObjectName][
        //     //   input.name
        //     // ] = null;
        //     input.addEventListener('input', () => {
        //       // get the object key
        //       let key = input.name;
        //       // get the object value
        //       let value = input.value;
        //       // update the object.
        //       dataManager.data.Transactions[newTransactionObjectName][key] =
        //         value;
        //     });
        //   });
        // }
        // // Handle radio buttons
        // let radioButtons = card.querySelectorAll('input[type="radio"]');
        // if (radioButtons) {
        //   radioButtons.forEach((radio) => {
        //     radio.addEventListener('change', () => {
        //       if (radio.checked) {
        //         let key = radio.name;
        //         let value = radio.value;
        //         dataManager.data.Transactions[newTransactionObjectName][key] =
        //           value;
        //       }
        //     });
        //   });
        // }

        // // Handle select dropdowns
        // let selects = card.querySelectorAll('select');
        // if (selects) {
        //   selects.forEach((select) => {
        //     select.addEventListener('change', () => {
        //       let key = select.name;
        //       let value = select.value;
        //       dataManager.data.Transactions[newTransactionObjectName][key] =
        //         value;
        //     });
        //   });
        // }

        // Event Handler to close the card.
        card.querySelector('.close-card').addEventListener('click', () => {
          card.remove();
          // remove options count
          this.options[choice].count--;
          // TODO - Remove the object from the data.
          delete _DataManager_mjs__WEBPACK_IMPORTED_MODULE_1__.dataManager.data.Transactions[newTransactionObjectName]; // Remove the object from the data
          _DataManager_mjs__WEBPACK_IMPORTED_MODULE_1__.dataManager.decrementTransactionCount();
        });
      });
    });
  }
  // responsible for setting up new event handlers on inputs of new transaction form, and updating the new transaction object nested in the data object.
  handleNewTransaction(transactionId) {
    const transactionForm = document.querySelector(`#${transactionId}`);
  }

  createTransactionObject(choice, count) {
    let newTransaction = {};
    switch (choice) {
      case 'Moving-Money':
        newTransaction = new _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__.MovingMoney(count);
        break;
      case 'Mutual-Fund-Trade':
        newTransaction = new _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__.MutualFundTrade(count);
        break;
      case 'Equity-Trade':
        newTransaction = new _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__.EquityTrade(count);
        break;
      case 'Options-Trade':
        newTransaction = new _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__.OptionsTrade(count);
        break;
      case 'Managed-Accounts':
        newTransaction = new _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__.ManagedAccounts(count);
        break;
      case 'Other':
        newTransaction = new _Transaction_mjs__WEBPACK_IMPORTED_MODULE_2__.Other(count);
        break;
      default:
        break;
    }
    return newTransaction;
  }

  formatString(input) {
    return input.split('-').join(' ');
  }
}

let addTransactions = new AddTransaction();


// generate a new object with a unique id and update it as the form is being filled out.
// const newTransaction = this.createTransactionObject(
//   choice,
//   this.options[choice].count
// );
//console.log("newTransaction:", newTransaction);
// Add newTransaction to data object.
//dataManager.data.Transactions.push(newTransaction);
// update the dom controller so that new event handlers are added to all of the fields and that they update the dataManager object when new inputs are added.

/**
 * A new idea. So instead of instantiating the transaction objects, simply add a new empty object to the data.Transactions, then add all the event listeners. Then the event listener will update all of the keys and add them based on what the form value is.
 */

//


/***/ }),

/***/ "./src/domControl/DataManager.mjs":
/*!****************************************!*\
  !*** ./src/domControl/DataManager.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   dataManager: () => (/* binding */ dataManager)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/format.mjs");
/* harmony import */ var _Save_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save.mjs */ "./src/domControl/Save.mjs");
/* harmony import */ var _AddTransaction_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddTransaction.mjs */ "./src/domControl/AddTransaction.mjs");



/**
 * Resonsible for managing all of the data. Adds handlers and event listeners to the page. Creates the data object which is used for saving and displaying the data.
 */

class DataManager {
  constructor() {
    this.handleMain();
    this.currentDate = this.formatDate(new Date());
    this.data = {
      Date: this.currentDate,
      "Cosmo-Whisper": null,
      "Client-Name": null,
      "Additional-Callers": null,
      "Internal-FC": null,
      Verification: [],
      "Account-Number": null,
      Restrictions: null,
      MID: null,
      COTM: null,
      Notes: null,
      Transactions: {},
    };
    this.transactionCount = 0;
    this.addTransactions = _AddTransaction_mjs__WEBPACK_IMPORTED_MODULE_1__.addTransactions;
    this.addTransactions.handleAddTransactionButton();
  }

  decrementTransactionCount() {
    this.transactionCount--;
    if (this.transactionCount <= 0) this.transactionCount = 0;
  }

  addTransaction(transactionName) {
    this.data.Transactions[transactionName] = {};
    this.transactionCount++; // Increment the transaction counter
  }

  handleMain() {
    // select all of the inputs in main container
    const cosmo = document.querySelector("#cosmo-whisper");
    const name = document.querySelector("#client-name");
    const additionalCallers = document.querySelector("#additional-callers");
    const internal = document.querySelector("#internal-FC");
    const verification = document.querySelectorAll(
      '.checkbox input[type="checkbox"]'
    );
    const accountNum = document.querySelector("#account-number");
    const restrictions = document.querySelectorAll(
      'input[name="restrictions"]'
    );
    const mid = document.querySelector("#MID");
    const cotm = document.querySelector("#COTM");
    const notes = document.querySelector("#notes");
    // const sfNotes = document.querySelector("#SF-notes");

    // add event handlers to all those in main container
    cosmo.addEventListener("input", () => {
      let value = cosmo.value;
      this.data["Cosmo-Whisper"] = value;
      //console.log(data);
    });
    name.addEventListener("input", () => {
      this.data["Client-Name"] = name.value;
    });
    additionalCallers.addEventListener("input", () => {
      this.data["Additional-Callers"] = additionalCallers.value;
    });
    internal.addEventListener("input", () => {
      this.data["Input-FC"] = internal.value;
    });
    verification.forEach((checkbox) => {
      // if there is a change to any of the checkboxes update.
      checkbox.addEventListener("change", () => {
        // first clear the verifaction array.
        this.data.Verification = [];
        // recapture all the checkboxes to check if they're checked or unchecked.
        const checkboxes = document.querySelectorAll(
          '.checkbox input[type="checkbox"]'
        );
        checkboxes.forEach((check) => {
          if (check.checked) {
            this.data.Verification.push(checkbox.id);
          }
        });
      });
    });
    accountNum.addEventListener("input", () => {
      this.data["Account-Number"] = accountNum.value;
    });
    restrictions.forEach((radio) => {
      //detect a change to any of those radio buttons.
      radio.addEventListener("change", () => {
        // select only the button that has been checked.
        const selectedRadio = document.querySelector(
          'input[name="restrictions"]:checked'
        );
        if (selectedRadio) {
          this.data.Restrictions = selectedRadio.value;
        }
        console.log(this.data);
      });
    });
    mid.addEventListener("input", () => {
      this.data.MID = mid.value;
    });
    cotm.addEventListener("input", () => {
      this.data.COTM = cotm.value;
    });
    notes.addEventListener("input", () => {
      this.data.Notes = notes.value;
    });
    // sfNotes.addEventListener("input", () => {
    //   this.data["SF-Notes"] = sfNotes.value;
    // });

    const resetBtn = document.querySelector("#reset-button");
    resetBtn.addEventListener("click", () => {
      this.resetForm();
    });

    const saveBtn = document.querySelector("#submit-button");
    saveBtn.addEventListener("click", () => {
      console.log(this.data);
      // save the data object to local storage.
      // TODO
      (0,_Save_mjs__WEBPACK_IMPORTED_MODULE_0__.addFormToStorage)(this.data);
    });

    const savedTab = document.querySelector("#to-saved");
    savedTab.addEventListener("click", () => {
      // render the saved data and then add it as an overlay on top of window.
      // TODO
      //   const savedContainer = renderSaved();
      const savedPage = document.querySelector("#overlay");
      savedPage.style.display = "block";
      //   savedPage.appendChild(savedContainer);
    });

    const formTab = document.querySelector("#to-form");
    formTab.addEventListener("click", () => {
      const savedPage = document.querySelector("#overlay");
      savedPage.style.display = "none";
    });
  }

  generateDataId() {
    let maxId = -1;

    // Iterate over all keys in local storage
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      const match = key.match(/(\d+)$/); // Match any digits at the end of the key
      if (match) {
        const id = parseInt(match[0], 10); // Convert the matched digits to an integer
        if (id > maxId) {
          maxId = id;
        }
      }
    }

    return maxId + 1;
  }

  /**
   * Resets the form and page entirely. Deletes any data in the data object.
   */
  resetForm() {
    this.data = {};
    this.data = {
      Date: this.formatDate(new Date()),
      "Cosmo-Whisper": null,
      "Client-Name": null,
      "Additional-Callers": null,
      "Internal-FC": null,
      Verification: [],
      "Account-Number": null,
      Restrictions: null,
      MID: null,
      COTM: null,
      Notes: null,
      "SF-Notes": null,
      Transactions: {},
    };
    // Clear all text input fields
    document.querySelectorAll('input[type="text"]').forEach((input) => {
      input.value = "";
    });
    // Clear all checkboxes
    document.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.checked = false;
    });

    // Clear all radio buttons
    document.querySelectorAll('input[type="radio"]').forEach((radio) => {
      radio.checked = false;
    });

    // Clear all textareas
    document.querySelectorAll("textarea").forEach((textarea) => {
      textarea.value = "";
    });
    console.log("Form and data object have been reset");

    // reset the transaction stuff and clear forms.
    this.addTransactions.resetTransactions();
  }

  // Method to format the date
  formatDate(date) {
    // Create suffixes for day
    const getDayWithSuffix = (day) => {
      if (day > 3 && day < 21) return `${day}th`;
      switch (day % 10) {
        case 1:
          return `${day}st`;
        case 2:
          return `${day}nd`;
        case 3:
          return `${day}rd`;
        default:
          return `${day}th`;
      }
    };

    // Format parts of the date
    const month = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(date, "MMM");
    const day = getDayWithSuffix((0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(date, "d"));
    const year = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(date, "yyyy");
    const time = (0,date_fns__WEBPACK_IMPORTED_MODULE_2__.format)(date, "h:mmaaa").toUpperCase();

    // Combine parts into desired format
    return `${month} ${day} ${year} - ${time}`;
  }
}
let dataManager = new DataManager();




/***/ }),

/***/ "./src/domControl/HandleTransaction.mjs":
/*!**********************************************!*\
  !*** ./src/domControl/HandleTransaction.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleTransaction: () => (/* binding */ handleTransaction)
/* harmony export */ });
/* harmony import */ var _DataManager_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DataManager.mjs */ "./src/domControl/DataManager.mjs");
/* harmony import */ var _components_actionComponents_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/actionComponents.mjs */ "./src/components/actionComponents.mjs");


/**
 * This module is responsible for handling the different options
 */

function handleTransaction(card) {
  // handle close button is within AddTransaction. handleTransaction()
  const transactionType = formatType(card.id);
  const cardId = card.id;
  console.log(transactionType);
  // select card on document
  const cardElement = document.querySelector(`#${cardId}`);
  //console.log(cardElement);
  switch (transactionType) {
    case 'Moving-Money':
      handleMovingMoney(cardElement, cardId);
      break;
    case 'Mutual-Fund-Trade':
      handleMutualFundTrade(cardElement, cardId);
      break;
    case 'Equity-Trade':
      handleEquityTrade(cardElement, cardId);
      break;
    case 'Options-Trade':
      handleOptionsTrade(cardElement, cardId);
      break;
    case 'Managed-Accounts':
      //handleManagedAccounts(cardElement, cardId);
      break;
    case 'Other':
      //handleOther(cardElement, cardId);
      break;
    default:
      error.log('Invalid type of Transaction for handling.');
      break;
  }
}

function handleOptionsTrade(cardElement, cardId) {
  // we need to handle the showing of reason text box for comission.
  // TODO You left off here! You need to handle what happens with the comission option select. If you select Waived then you show the reason text box.
  // Next, you need to handle the number of legs option container. It's still called 'action-container' so you can call that. Then add the action forms to it. build them in actionComonents.
}

function handleEquityTrade(cardElement, cardId) {
  const actionComponents = new _components_actionComponents_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action = cardElement.querySelector(`#${cardId}-action`);

  action.addEventListener('change', () => {
    let actionValue = action.value;
    //console.log(actionValue);

    if (actionValue === 'buy') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionBuy()
      );
    } else if (actionValue === 'sell') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionSell()
      );
    } else if (actionValue === 'buy-to-cover') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionBuyToCover()
      );
    } else if (actionValue === 'sell-short') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.equityActionSellShort()
      );
    }
  });
}

function handleMutualFundTrade(cardElement, cardId) {
  const actionComponents = new _components_actionComponents_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action = cardElement.querySelector(`#${cardId}-action`);

  action.addEventListener('change', () => {
    let actionValue = action.value;
    console.log(actionValue);

    if (actionValue === 'buy') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionBuy()
      );
    } else if (actionValue === 'sell') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionSell()
      );
    } else if (actionValue === 'exchange') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionExchange()
      );
    } else if (actionValue === 'sell-to-buy') {
      actionContainer.innerHTML = ``;
      actionContainer.insertAdjacentHTML(
        'beforeend',
        actionComponents.actionSellToBuy()
      );
    }
  });
}

/**
 * This Transaction card only has 3 different scenarios based on the Action field. If action is deposit then the difference is between a retirement and non-retirement account.
 * @param {*} cardElement
 * @param {*} cardId
 */
function handleMovingMoney(cardElement, cardId) {
  handleAction1(cardElement, cardId);
  // TODO Once the form is ready, add event handler to handle saving the data as an object to then append to data.
}

function handleAction1(cardElement, cardId) {
  const actionComponents = new _components_actionComponents_mjs__WEBPACK_IMPORTED_MODULE_1__["default"](cardId);
  const actionContainer = cardElement.querySelector('.action-container');
  const action1 = cardElement.querySelector(`#${cardId}-action`);
  const accountType = cardElement.querySelector(`#${cardId}-account-type`);

  accountType.addEventListener('change', () => {
    let actionValue = action1.value;
    let accountTypeValue = accountType.value;
    console.log(actionValue);
    console.log(accountTypeValue);
    // If user selects Deposit on Action 1
    if (actionValue === 'deposit') {
      actionContainer.innerHTML = ``;
      if (accountTypeValue === 'retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionDepositRetirement()
        );
      } else if (accountTypeValue === 'non-retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionDepositNonRetirement()
        );
      } else {
        actionContainer.innerHTML = ``;
      }
    } else if (actionValue === 'withdrawal') {
      actionContainer.innerHTML = ``;
      if (accountTypeValue === 'retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionWithdrawlRetirement()
        );
      } else if (accountTypeValue === 'non-retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionWithdrawlNonRetirement()
        );
      }
    } else if (actionValue === 'journal') {
      if (accountTypeValue === 'retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionJournalRetirement()
        );
      } else if (accountTypeValue === 'non-retirement') {
        actionContainer.insertAdjacentHTML(
          'beforeend',
          actionComponents.actionJournalNonRetirement()
        );
      }
    } else {
      actionContainer.innerHTML = ``;
    }
  });
}

// function handleAutoInvestments(cardElement, cardId) {
//   const autoInvestments = cardElement.querySelector(
//     `#${cardId}-auto-investments`
//   );
//   let key = autoInvestments.name;
//   dataManager.data.Transactions[cardId][key] = ``;
//   autoInvestments.addEventListener('change', () => {
//     let value = autoInvestments.value;
//     dataManager.data.Transactions[cardId][key] = value;
//     console.log(dataManager.data);
//   });
// }

// function handleAuthorizedToTrade(cardElement, cardId) {
//   const authorizedToTrade = cardElement.querySelector(
//     `#${cardId}-authorized-to-trade`
//   );
//   let key = authorizedToTrade.name; // create key
//   dataManager.data.Transactions[cardId][key] = 'No'; // by default add object to data.
//   authorizedToTrade.addEventListener('change', (e) => {
//     if (e.target.checked) {
//       dataManager.data.Transactions[cardId][key] = 'Yes';
//     } else {
//       //console.log("checkbox is unchecked");
//       dataManager.data.Transactions[cardId][key] = 'No';
//     }
//     console.log(dataManager.data);
//   });
// }

// function handleAlertsAndRestrictions(cardElement, cardId) {
//   const alertsAndRestrictions = cardElement.querySelector(
//     `#${cardId}-alerts-and-restrictions`
//   );
//   let key = alertsAndRestrictions.name; // create key
//   dataManager.data.Transactions[cardId][key] = 'No'; // by default add object to data.
//   alertsAndRestrictions.addEventListener('change', (e) => {
//     if (e.target.checked) {
//       //console.log("checkbox is checked.");
//       dataManager.data.Transactions[cardId][key] = 'Yes';
//     } else {
//       //console.log("checkbox is unchecked");
//       dataManager.data.Transactions[cardId][key] = 'No';
//     }
//   });
// }

// function handleAccountNumber(cardElement, cardId) {
//   const accountNum = cardElement.querySelector(`#${cardId}-accountNum`);
//   // update the object that will be updated to the data object.
//   // get the object key
//   let key = accountNum.name;
//   dataManager.data.Transactions[cardId][key] = ``;
//   accountNum.addEventListener('input', () => {
//     // get the object value
//     let value = accountNum.value;
//     // update the object.
//     dataManager.data.Transactions[cardId][key] = value;
//   });
// }

/**
 *
 * @param {String} input
 * @returns Formatted type without the end "-[number]"
 */
function formatType(input) {
  // Use a regular expression to match and remove the dash followed by one or more digits at the end of the string
  return input.replace(/-\d+$/, '');
}




/***/ }),

/***/ "./src/domControl/Save.mjs":
/*!*********************************!*\
  !*** ./src/domControl/Save.mjs ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addFormToStorage: () => (/* binding */ addFormToStorage),
/* harmony export */   formatNoteObject: () => (/* binding */ formatNoteObject),
/* harmony export */   getStoredData: () => (/* binding */ getStoredData)
/* harmony export */ });
/**
 * 1. Retrieve the current data from local storage
 * 2. parse the tretrieved data into a JS object.
 * 3. Generate a new objec with a unique ID
 * 4. Add the new object to the array.
 * 5. Save the updated array back to local storage.
 */

/**
 * Returns an object called 'forms' that contains all of the saved form data as an array of objects.
 */
function getStoredData() {
  let storedData = localStorage.getItem("F-Form-Gandy");
  if (storedData) {
    return JSON.parse(storedData);
  } else {
    return { forms: [] }; // Initialize an empty array if no data is found.
  }
}

/**
 * Returns a new Id that will be the length of the array.
 */
function generateUniqueID(forms) {
  return forms.length;
}

function addFormToStorage(newFormData) {
  let storedData = getStoredData();
  let newID = generateUniqueID(storedData.forms);
  let newFormObject = {};
  newFormObject[`Note-${newID}`] = newFormData;
  storedData.forms.push(newFormObject);
  // save the updated array back to local storage
  localStorage.setItem("F-Form-Gandy", JSON.stringify(storedData));
}

function formatNoteObject(noteObject) {
  let formattedString = "";

  for (let noteKey in noteObject) {
    if (noteObject.hasOwnProperty(noteKey)) {
      let note = noteObject[noteKey];
      formattedString += `${noteKey}\n---------------\n`;

      for (let key in note) {
        if (note.hasOwnProperty(key)) {
          if (key === "Verification") {
            formattedString += `${key}: ${note[key].join(", ")}\n`;
          } else if (key === "Transactions") {
            formattedString += "Transactions\n----------------\n";
            for (let transactionKey in note[key]) {
              if (note[key].hasOwnProperty(transactionKey)) {
                let transaction = note[key][transactionKey];
                formattedString += `* ${transactionKey}:\n`;
                for (let tKey in transaction) {
                  if (transaction.hasOwnProperty(tKey)) {
                    formattedString += `       ${tKey}: ${transaction[tKey]}\n`;
                  }
                }
                formattedString += "\n";
              }
            }
          } else {
            formattedString += `${key}: ${
              note[key] !== null ? note[key] : ""
            }\n`;
          }
        }
      }

      formattedString += "\n";
    }
  }

  return formattedString;
}




/***/ }),

/***/ "./src/domControl/SavedTab.mjs":
/*!*************************************!*\
  !*** ./src/domControl/SavedTab.mjs ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SavedTab)
/* harmony export */ });
/* harmony import */ var _Save_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Save.mjs */ "./src/domControl/Save.mjs");

/**
 * This module is responsible for populating the saved tab.
 */

class SavedTab {
  constructor() {
    this.formsData = (0,_Save_mjs__WEBPACK_IMPORTED_MODULE_0__.getStoredData)();
  }

  renderList() {
    //console.log("Test");
    // loop through the forms to get every object inside.
    for (let i = this.formsData.forms.length - 1; i >= 0; i--) {
      let note = this.formsData.forms[i];
      let noteTitle = Object.keys(note)[0];
      let date = note[noteTitle].Date;
      let name = note[noteTitle]["Client-Name"];
      let printPretty = (0,_Save_mjs__WEBPACK_IMPORTED_MODULE_0__.formatNoteObject)(note);
      let title = noteTitle + " " + date + " " + name;
      //console.log(title);

      let ulElement = document.querySelector("ul.append-note");

      let liElement = document.createElement("li");
      liElement.innerHTML = `
            <div class="overlay-note" >
              <div class="note-title">
              <div>${title}</div>
                <button id="expand-modal-${noteTitle}" class = "expand-modal-btn">Show</button>
              </div>
              <div id="${noteTitle}" class="note-modal">
                <button id="close-modal-${noteTitle}" class = "close-modal-btn">x</button>
                <label for="text-area-${noteTitle}"></label>
                <textarea
                  class="note-print"
                  id="text-area-${noteTitle}"
                  wrap="hard"
                >${printPretty}
                </textarea>
              </div>
            </div>
      `;
      //console.log(liElement);
      ulElement.appendChild(liElement);
      // add event handlers
      // first select the note modal
      const modal = document.querySelector(`#${noteTitle}`);
      // select the button and add event listener.
      const expandBtn = document.querySelector(`#expand-modal-${noteTitle}`);
      // add event handler
      expandBtn.addEventListener("click", () => {
        // toggle the modal to have show.
        modal.classList.toggle("show");
        document.querySelector(".backdrop").classList.toggle("show");
      });
      // add close button
      const closeBtn = document.querySelector(`#close-modal-${noteTitle}`);
      closeBtn.addEventListener("click", () => {
        console.log("close btn pressed");
        modal.classList.toggle("show");
        document.querySelector(".backdrop").classList.toggle("show");
      });
    }
  }

  addModalHandlers(id) {
    let expandBtns = document.querySelectorAll("#expand-modal");
    expandBtns.forEach((btn) => {
      btn.addEventListener("click", (event) => {
        // we want to select the closest
        const modalDiv = document.modalDiv.classList.toggle("show");
        // add the event listener to close the modal.
        let closeNote = document.querySelector("#close-modal");
        closeNote.addEventListener("click", this.toggleModal);
      });
    });
  }

  toggleModal() {
    const modalDiv = document.querySelector("#note-modal");
    const backdrop = document.querySelector(".backdrop");
    modalDiv.classList.toggle("show");
    backdrop.classList.toggle("show");
  }
}

/**
 * We get the stored forms. Now we need to generate the list items with all of the information inside.
 */


/***/ }),

/***/ "./src/domControl/Transaction.mjs":
/*!****************************************!*\
  !*** ./src/domControl/Transaction.mjs ***!
  \****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EquityTrade: () => (/* binding */ EquityTrade),
/* harmony export */   ManagedAccounts: () => (/* binding */ ManagedAccounts),
/* harmony export */   MovingMoney: () => (/* binding */ MovingMoney),
/* harmony export */   MutualFundTrade: () => (/* binding */ MutualFundTrade),
/* harmony export */   OptionsTrade: () => (/* binding */ OptionsTrade),
/* harmony export */   Other: () => (/* binding */ Other)
/* harmony export */ });
/**
 * This class is responsible for generating the Transaction object which will then be appended to the data object and is updated.
 */

class MovingMoney {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.AutoInvestments = null;
    this.Action = null;
  }
}

class MutualFundTrade {
  constructor(count) {
    this.id = count;
    this.AcountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.orders = null;
    this.AutoInvestments = null;
    this.Action = null;
  }
}

class EquityTrade {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.orders = null;
    this.AutoInvestments = null;
    this.Commission = null;
    this.Action = null;
  }
}
class OptionsTrade {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
  }
}
class ManagedAccounts {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
    this.AlertsAndRestrictions = null;
    this.AuthorizedToTrade = null;
    this.Product = null;
    this.DNT = null;
    this.AutoInvestments = null;
    this.Action = null;
  }
}
class Other {
  constructor(count) {
    this.id = count;
    this.AccountNumber = null;
  }
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
/* harmony import */ var _domControl_Save_mjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./domControl/Save.mjs */ "./src/domControl/Save.mjs");
/* harmony import */ var _domControl_DataManager_mjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./domControl/DataManager.mjs */ "./src/domControl/DataManager.mjs");
/* harmony import */ var _domControl_SavedTab_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./domControl/SavedTab.mjs */ "./src/domControl/SavedTab.mjs");




_domControl_DataManager_mjs__WEBPACK_IMPORTED_MODULE_2__.dataManager;

// let formData = getStoredData();
// let note = formData.forms[0];
// let noteTitle = Object.keys(note)[0];
// let date = note[noteTitle].Date;
// let name = note[noteTitle]["Client-Name"];
// //console.log(note);
// let title = noteTitle + " " + date + " " + name;
// //console.log(title);

// let printPretty = formatNoteObject(note);
let savedTab = new _domControl_SavedTab_mjs__WEBPACK_IMPORTED_MODULE_3__["default"]();
savedTab.renderList();

/**
 * Create event handlers on the main-form-container only. Including the Notes.
 */

/**
 * Notes:
 * What if we removed the form tag. Then we added event handlers to all of the inputs that automatically updated an object for the section 1 stuff.
 * Then, when user clicks add transaction and adds one, it will generate a form that also implements all of the event listeners. This will then create a new data object with a unique ID.
 */
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map