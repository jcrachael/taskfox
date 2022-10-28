/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* GLOBALS */\r\n\r\n* {\r\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #333333;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #F6F2EF;\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template-columns: 250px auto;\r\n    grid-template-rows: 100px auto auto;\r\n    height: 100vh;\r\n}\r\n\r\nh1 {\r\n    color: #333333;\r\n    font-weight: 400;\r\n    font-size: 32pt;\r\n    letter-spacing: 0.2px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #ED533E;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n    text-align: center;\r\n    height:120px;\r\n}\r\n\r\n#logo {\r\n    width: 300px;\r\n}\r\n\r\nh3 {\r\n    color: #ED533E;\r\n    font-weight: 400;\r\n    margin-top: -40px;\r\n    font-size: 10pt;\r\n}\r\n\r\n/* SIDEBAR */\r\n\r\naside {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2/ 3;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n}\r\n\r\n.nav-link {\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n\r\n.nav-link:hover {\r\n    border-left: 3px #333 solid;\r\n    background-color: #00000013;\r\n    font-weight: bold;\r\n    opacity: 1;\r\n}\r\n\r\n.nav-active {\r\n    border-left: 3px #333 solid;\r\n    background-color: #00000013;\r\n    font-weight: bold;\r\n    opacity: 1;\r\n}\r\n\r\n.nav-link a {\r\n    padding-left: 10px;\r\n    color: #333;\r\n}\r\n\r\n.icon-nav {\r\n    height: 20px;\r\n    font-size: 8pt;\r\n    padding-left: 30px;\r\n    \r\n}\r\n\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n    grid-column: 2/3;\r\n    grid-row: 2/4;\r\n    height: calc(100vh - 160px);\r\n    margin-right: 40px;\r\n    padding-top: 40px;\r\n  \r\n}\r\n\r\n#new-links {\r\n    flex-direction: row-reverse;\r\n    display: flex;\r\n}\r\n\r\n#new-links a {\r\n    height: 20px;\r\n    color: #ED533E;\r\n    font-weight: 600;\r\n    font-size: 12pt;\r\n    text-decoration: none;\r\n    padding-right: 10px;\r\n}\r\n\r\n.icon-20 {\r\n    height: 20px;\r\n}\r\n\r\n#new-links img {\r\n    cursor: pointer;\r\n}\r\n\r\n#new-project-link, #new-task-link {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin-left: 40px;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    font-size: 10pt;\r\n    grid-column: 1/3;\r\n    grid-row: 5/5;\r\n    text-align: center;\r\n}", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA,YAAY;;AAGZ;IACI,mDAAmD;IACnD,SAAS;IACT,UAAU;IACV,cAAc;IACd,sBAAsB;AAC1B;;AAEA;IACI,yBAAyB;AAC7B;;AAEA;IACI,aAAa;IACb,iCAAiC;IACjC,mCAAmC;IACnC,aAAa;AACjB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,qBAAqB;IACrB,cAAc;AAClB;;AAEA,WAAW;;AAEX;IACI,kBAAkB;IAClB,eAAe;IACf,kBAAkB;IAClB,YAAY;AAChB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,cAAc;IACd,gBAAgB;IAChB,iBAAiB;IACjB,eAAe;AACnB;;AAEA,YAAY;;AAEZ;IACI,kBAAkB;IAClB,cAAc;IACd,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,qBAAqB;AACzB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,2BAA2B;IAC3B,2BAA2B;IAC3B,iBAAiB;IACjB,UAAU;AACd;;AAEA;IACI,kBAAkB;IAClB,WAAW;AACf;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,kBAAkB;;AAEtB;;;AAGA,SAAS;;AAET;IACI,gBAAgB;IAChB,aAAa;IACb,2BAA2B;IAC3B,kBAAkB;IAClB,iBAAiB;;AAErB;;AAEA;IACI,2BAA2B;IAC3B,aAAa;AACjB;;AAEA;IACI,YAAY;IACZ,cAAc;IACd,gBAAgB;IAChB,eAAe;IACf,qBAAqB;IACrB,mBAAmB;AACvB;;AAEA;IACI,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,mBAAmB;IACnB,qBAAqB;IACrB,iBAAiB;AACrB;;AAEA,WAAW;;AAEX;IACI,eAAe;IACf,gBAAgB;IAChB,aAAa;IACb,kBAAkB;AACtB","sourcesContent":["/* GLOBALS */\r\n@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');\r\n\r\n* {\r\n    font-family: 'Roboto', Arial, Helvetica, sans-serif;\r\n    margin: 0;\r\n    padding: 0;\r\n    color: #333333;\r\n    box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n    background-color: #F6F2EF;\r\n}\r\n\r\n#container {\r\n    display: grid;\r\n    grid-template-columns: 250px auto;\r\n    grid-template-rows: 100px auto auto;\r\n    height: 100vh;\r\n}\r\n\r\nh1 {\r\n    color: #333333;\r\n    font-weight: 400;\r\n    font-size: 32pt;\r\n    letter-spacing: 0.2px;\r\n}\r\n\r\na {\r\n    text-decoration: none;\r\n    color: #ED533E;\r\n}\r\n\r\n/* HEADER */\r\n\r\nheader {\r\n    grid-column: 1 / 3;\r\n    grid-row: 1 / 2;\r\n    text-align: center;\r\n    height:120px;\r\n}\r\n\r\n#logo {\r\n    width: 300px;\r\n}\r\n\r\nh3 {\r\n    color: #ED533E;\r\n    font-weight: 400;\r\n    margin-top: -40px;\r\n    font-size: 10pt;\r\n}\r\n\r\n/* SIDEBAR */\r\n\r\naside {\r\n    grid-column: 1 / 2;\r\n    grid-row: 2/ 3;\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    align-content: center;\r\n}\r\n\r\n.nav-link {\r\n    width: 100%;\r\n    height: 50px;\r\n    display: flex;\r\n    align-items: center;\r\n    cursor: pointer;\r\n    opacity: 0.5;\r\n}\r\n\r\n.nav-link:hover {\r\n    border-left: 3px #333 solid;\r\n    background-color: #00000013;\r\n    font-weight: bold;\r\n    opacity: 1;\r\n}\r\n\r\n.nav-active {\r\n    border-left: 3px #333 solid;\r\n    background-color: #00000013;\r\n    font-weight: bold;\r\n    opacity: 1;\r\n}\r\n\r\n.nav-link a {\r\n    padding-left: 10px;\r\n    color: #333;\r\n}\r\n\r\n.icon-nav {\r\n    height: 20px;\r\n    font-size: 8pt;\r\n    padding-left: 30px;\r\n    \r\n}\r\n\r\n\r\n/* MAIN */\r\n\r\nmain {\r\n    grid-column: 2/3;\r\n    grid-row: 2/4;\r\n    height: calc(100vh - 160px);\r\n    margin-right: 40px;\r\n    padding-top: 40px;\r\n  \r\n}\r\n\r\n#new-links {\r\n    flex-direction: row-reverse;\r\n    display: flex;\r\n}\r\n\r\n#new-links a {\r\n    height: 20px;\r\n    color: #ED533E;\r\n    font-weight: 600;\r\n    font-size: 12pt;\r\n    text-decoration: none;\r\n    padding-right: 10px;\r\n}\r\n\r\n.icon-20 {\r\n    height: 20px;\r\n}\r\n\r\n#new-links img {\r\n    cursor: pointer;\r\n}\r\n\r\n#new-project-link, #new-task-link {\r\n    display: flex;\r\n    align-items: center;\r\n    align-content: center;\r\n    margin-left: 40px;\r\n}\r\n\r\n/* FOOTER */\r\n\r\nfooter {\r\n    font-size: 10pt;\r\n    grid-column: 1/3;\r\n    grid-row: 5/5;\r\n    text-align: center;\r\n}"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
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
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

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
  } // For old IE

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

/***/ "./src/homepage.js":
/*!*************************!*\
  !*** ./src/homepage.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _assets_logo_red_512px_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assets/logo-red-512px.svg */ "./src/assets/logo-red-512px.svg");
/* harmony import */ var _assets_plus_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./assets/plus.png */ "./src/assets/plus.png");
/* harmony import */ var _assets_plus_filled_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./assets/plus-filled.png */ "./src/assets/plus-filled.png");
/* harmony import */ var _assets_dashboards_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./assets/dashboards.png */ "./src/assets/dashboards.png");
/* harmony import */ var _assets_task_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./assets/task.png */ "./src/assets/task.png");
/* harmony import */ var _assets_idea_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./assets/idea.png */ "./src/assets/idea.png");








// Building the Template

function homepage(){
    // header logo
    const logo = document.getElementById('logo');
    logo.src = _assets_logo_red_512px_svg__WEBPACK_IMPORTED_MODULE_1__;

    // new task / new project buttons
    const newProjectIcon = document.getElementById('new-project-icon');
    newProjectIcon.src = _assets_plus_png__WEBPACK_IMPORTED_MODULE_2__;

    const newProjectLink = document.getElementById('new-project-link');

    newProjectLink.addEventListener('mouseover', function() {
        newProjectIcon.src = _assets_plus_filled_png__WEBPACK_IMPORTED_MODULE_3__;
    });

    newProjectLink.addEventListener('mouseleave', function() {
        newProjectIcon.src = _assets_plus_png__WEBPACK_IMPORTED_MODULE_2__;
    })

    const newTaskIcon = document.getElementById('new-task-icon');
    newTaskIcon.src = _assets_plus_png__WEBPACK_IMPORTED_MODULE_2__;

    const newTaskLink = document.getElementById('new-task-link');

    newTaskLink.addEventListener('mouseover', function() {
        newTaskIcon.src = _assets_plus_filled_png__WEBPACK_IMPORTED_MODULE_3__;
    });

    newTaskLink.addEventListener('mouseleave', function() {
        newTaskIcon.src = _assets_plus_png__WEBPACK_IMPORTED_MODULE_2__;
    })

    // sidebar nav icons
    const dashIcon = document.getElementById('dashboard-link-icon');
    dashIcon.setAttribute('src', _assets_dashboards_png__WEBPACK_IMPORTED_MODULE_4__);

    const taskIcon = document.getElementById('tasks-link-icon');
    taskIcon.setAttribute('src', _assets_task_png__WEBPACK_IMPORTED_MODULE_5__);

    const projectsIcon = document.getElementById('projects-link-icon');
    projectsIcon.setAttribute('src', _assets_idea_png__WEBPACK_IMPORTED_MODULE_6__);

};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homepage);



/***/ }),

/***/ "./src/assets/dashboards.png":
/*!***********************************!*\
  !*** ./src/assets/dashboards.png ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "dashboards.png";

/***/ }),

/***/ "./src/assets/idea.png":
/*!*****************************!*\
  !*** ./src/assets/idea.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "idea.png";

/***/ }),

/***/ "./src/assets/logo-red-512px.svg":
/*!***************************************!*\
  !*** ./src/assets/logo-red-512px.svg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "logo-red-512px.svg";

/***/ }),

/***/ "./src/assets/plus-filled.png":
/*!************************************!*\
  !*** ./src/assets/plus-filled.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plus-filled.png";

/***/ }),

/***/ "./src/assets/plus.png":
/*!*****************************!*\
  !*** ./src/assets/plus.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "plus.png";

/***/ }),

/***/ "./src/assets/task.png":
/*!*****************************!*\
  !*** ./src/assets/task.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "task.png";

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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/taskfox/";
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
/* harmony import */ var _homepage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homepage */ "./src/homepage.js");


// Build the default template
(0,_homepage__WEBPACK_IMPORTED_MODULE_0__["default"])();
})();

/******/ })()
;
//# sourceMappingURL=bundle-43ab2f24fcaaefda7766.js.map