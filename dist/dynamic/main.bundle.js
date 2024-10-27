(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[792],{

/***/ 29771:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.configurator-page {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: transparent; /* Make it transparent */
}

.configurator-content {
  display: flex;
  height: 100%;
  width: 100%;
  position: relative;
  padding: 1rem;
  gap: 1rem;
}

.viewer-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 80%; /* Reduced from 90% */
  height: 100%;
  padding: 1rem;
}

/* New styles for the Share button */
.share-button-container-configurator {
  position: absolute;
  top: 80px; /* Position under header */
  right: 500px; /* Align to right side */
  z-index: 1000;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.share-button-configurator {
  background: rgba(255, 255, 255, 0.3);
  border: none;
  border-radius: 50px;
  padding: 8px 20px;
  color: #ffffff;
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.share-button-configurator:hover {
  background: rgba(255, 255, 255, 0.4);
}

.action-buttons {
  position: absolute;
  bottom: 100px; /* Reduce the distance from the bottom */
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a soft shadow for depth */
}
  
.parameter-panel-container {
  width: 400px; /* Fixed width */
  height: calc(100vh - 2rem); /* Full height minus padding */
  margin: 1rem;
  border-radius: 1.5rem;
  background: rgba(25, 25, 25, 0.5);
  backdrop-filter: blur(50px);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin-right: 5rem;
  margin-bottom: 70rem;
  margin-top: 6rem;
}


/* Tab navigation styles */
.parameter-tabs {
  display: flex;
  padding: 0.75rem;
  align-items: center;
  border-bottom: 1px solid rgba(0, 0, 0, 0.10);
  gap: 0.5rem;
}

.tab-button {
  display: flex;
  padding: 0.375rem 0.75rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  flex: 1 0 0;
  border-radius: 0.5rem;
  font-family: "Helvetica Neue";
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  color: #DDD;
  transition: all 0.3s ease;
}

.tab-button.active {
  height: 2.125rem;
  padding: 0.5rem 1.3125rem;
  border-radius: 2.5rem;
  border: 1px solid rgba(255, 255, 255, 0.40);
  background: #151515;
  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.10);
  backdrop-filter: blur(50px);
  color: #FFF;
}
  
.configurator-podium::after {
  content: '';
  width: 80%;
  height: 10px;
  background: #333333;
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  z-index: -1; /* Place it behind the bike */
}

.loading-spinner {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
}

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.loading-spinner p {
  margin-top: 1rem;
  color: #666;
}
  
  
@media (max-width: 1200px) {
.configurator-content {
    flex-direction: column;
  }

  .parameter-panel-container {
    width: 100%;
    height: auto;
    border-left: none;
    border-top: 1px solid rgba(255, 255, 255, 0.2);
  }
}

.export-menu-wrapper {
  margin-top: 8px;
  width: 300px;
}
`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/ConfiguratorPage.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,sBAAsB;EACtB,aAAa;EACb,YAAY;EACZ,gBAAgB;EAChB,uBAAuB,EAAE,wBAAwB;AACnD;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,kBAAkB;EAClB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,OAAO;EACP,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,kBAAkB;EAClB,UAAU,EAAE,qBAAqB;EACjC,YAAY;EACZ,aAAa;AACf;;AAEA,oCAAoC;AACpC;EACE,kBAAkB;EAClB,SAAS,EAAE,0BAA0B;EACrC,YAAY,EAAE,wBAAwB;EACtC,aAAa;EACb,aAAa;EACb,sBAAsB;EACtB,qBAAqB;AACvB;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,mBAAmB;EACnB,iBAAiB;EACjB,cAAc;EACd,gCAAgC;EAChC,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,sCAAsC;AACxC;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,aAAa,EAAE,wCAAwC;EACvD,SAAS;EACT,2BAA2B;EAC3B,aAAa;EACb,SAAS;EACT,WAAW;EACX,oCAAoC;EACpC,kBAAkB;EAClB,mBAAmB;EACnB,wCAAwC,EAAE,gCAAgC;AAC5E;;AAEA;EACE,YAAY,EAAE,gBAAgB;EAC9B,0BAA0B,EAAE,8BAA8B;EAC1D,YAAY;EACZ,qBAAqB;EACrB,iCAAiC;EACjC,2BAA2B;EAC3B,gBAAgB;EAChB,aAAa;EACb,sBAAsB;EACtB,kBAAkB;EAClB,oBAAoB;EACpB,gBAAgB;AAClB;;;AAGA,0BAA0B;AAC1B;EACE,aAAa;EACb,gBAAgB;EAChB,mBAAmB;EACnB,4CAA4C;EAC5C,WAAW;AACb;;AAEA;EACE,aAAa;EACb,yBAAyB;EACzB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,WAAW;EACX,qBAAqB;EACrB,6BAA6B;EAC7B,mBAAmB;EACnB,gBAAgB;EAChB,qBAAqB;EACrB,WAAW;EACX,yBAAyB;AAC3B;;AAEA;EACE,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;EACrB,2CAA2C;EAC3C,mBAAmB;EACnB,+CAA+C;EAC/C,2BAA2B;EAC3B,WAAW;AACb;;AAEA;EACE,WAAW;EACX,UAAU;EACV,YAAY;EACZ,mBAAmB;EACnB,kBAAkB;EAClB,kBAAkB;EAClB,SAAS;EACT,WAAW,EAAE,6BAA6B;AAC5C;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,uBAAuB;EACvB,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,yBAAyB;EACzB,6BAA6B;EAC7B,kBAAkB;EAClB,kCAAkC;AACpC;;AAEA;EACE,KAAK,uBAAuB,EAAE;EAC9B,OAAO,yBAAyB,EAAE;AACpC;;AAEA;EACE,gBAAgB;EAChB,WAAW;AACb;;;AAGA;AACA;IACI,sBAAsB;EACxB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,8CAA8C;EAChD;AACF;;AAEA;EACE,eAAe;EACf,YAAY;AACd","sourcesContent":[".configurator-page {\n  display: flex;\n  flex-direction: column;\n  height: 100vh;\n  width: 100vw;\n  overflow: hidden;\n  background: transparent; /* Make it transparent */\n}\n\n.configurator-content {\n  display: flex;\n  height: 100%;\n  width: 100%;\n  position: relative;\n  padding: 1rem;\n  gap: 1rem;\n}\n\n.viewer-container {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  width: 80%; /* Reduced from 90% */\n  height: 100%;\n  padding: 1rem;\n}\n\n/* New styles for the Share button */\n.share-button-container-configurator {\n  position: absolute;\n  top: 80px; /* Position under header */\n  right: 500px; /* Align to right side */\n  z-index: 1000;\n  display: flex;\n  flex-direction: column;\n  align-items: flex-end;\n}\n\n.share-button-configurator {\n  background: rgba(255, 255, 255, 0.3);\n  border: none;\n  border-radius: 50px;\n  padding: 8px 20px;\n  color: #ffffff;\n  font-family: 'Inter', sans-serif;\n  font-size: 16px;\n  font-weight: 400;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n}\n\n.share-button-configurator:hover {\n  background: rgba(255, 255, 255, 0.4);\n}\n\n.action-buttons {\n  position: absolute;\n  bottom: 100px; /* Reduce the distance from the bottom */\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  gap: 16px;\n  z-index: 20;\n  background-color: rgba(0, 0, 0, 0.5);\n  padding: 10px 20px;\n  border-radius: 20px;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Add a soft shadow for depth */\n}\n  \n.parameter-panel-container {\n  width: 400px; /* Fixed width */\n  height: calc(100vh - 2rem); /* Full height minus padding */\n  margin: 1rem;\n  border-radius: 1.5rem;\n  background: rgba(25, 25, 25, 0.5);\n  backdrop-filter: blur(50px);\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n  margin-right: 5rem;\n  margin-bottom: 70rem;\n  margin-top: 6rem;\n}\n\n\n/* Tab navigation styles */\n.parameter-tabs {\n  display: flex;\n  padding: 0.75rem;\n  align-items: center;\n  border-bottom: 1px solid rgba(0, 0, 0, 0.10);\n  gap: 0.5rem;\n}\n\n.tab-button {\n  display: flex;\n  padding: 0.375rem 0.75rem;\n  justify-content: center;\n  align-items: center;\n  gap: 0.625rem;\n  flex: 1 0 0;\n  border-radius: 0.5rem;\n  font-family: \"Helvetica Neue\";\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.375rem;\n  color: #DDD;\n  transition: all 0.3s ease;\n}\n\n.tab-button.active {\n  height: 2.125rem;\n  padding: 0.5rem 1.3125rem;\n  border-radius: 2.5rem;\n  border: 1px solid rgba(255, 255, 255, 0.40);\n  background: #151515;\n  box-shadow: 0px 1px 7px 0px rgba(0, 0, 0, 0.10);\n  backdrop-filter: blur(50px);\n  color: #FFF;\n}\n  \n.configurator-podium::after {\n  content: '';\n  width: 80%;\n  height: 10px;\n  background: #333333;\n  border-radius: 50%;\n  position: absolute;\n  bottom: 0;\n  z-index: -1; /* Place it behind the bike */\n}\n\n.loading-spinner {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  height: 100%;\n  width: 100%;\n}\n\n.spinner {\n  width: 50px;\n  height: 50px;\n  border: 5px solid #f3f3f3;\n  border-top: 5px solid #3498db;\n  border-radius: 50%;\n  animation: spin 1s linear infinite;\n}\n\n@keyframes spin {\n  0% { transform: rotate(0deg); }\n  100% { transform: rotate(360deg); }\n}\n\n.loading-spinner p {\n  margin-top: 1rem;\n  color: #666;\n}\n  \n  \n@media (max-width: 1200px) {\n.configurator-content {\n    flex-direction: column;\n  }\n\n  .parameter-panel-container {\n    width: 100%;\n    height: auto;\n    border-left: none;\n    border-top: 1px solid rgba(255, 255, 255, 0.2);\n  }\n}\n\n.export-menu-wrapper {\n  margin-top: 8px;\n  width: 300px;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 97245:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.export-menu {
  position: absolute;
  top: 120px; /* Adjusted to appear under the share button */
  left: 100px; /* Aligned with the share button */
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 12px;
  backdrop-filter: blur(10px);
  padding: 16px;
  width: 100%;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

.export-menu-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.export-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  font-size: 14px;
}

.export-dropdown {
  background: rgba(34, 34, 34, 0.2);
  border-radius: 6px;
  padding: 5px 8px;
  display: flex;
  align-items: center;
  gap: 5px;
}

.chevron-down {
  width: 16px;
  height: 16px;
  background-size: contain;
  background-repeat: no-repeat;
}

.toggle-switch {
  width: 38px;
  height: 22px;
  background: #A6A6A6;
  border-radius: 13.5px;
  position: relative;
}

.toggle-switch::after {
  content: '';
  position: absolute;
  width: 18px;
  height: 18px;
  background: white;
  border-radius: 50%;
  top: 2px;
  left: 2px;
  transition: 0.3s;
}

.export-actions {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.close-button {
  margin-top: 8px;
  opacity: 0.8;
}

.close-button:hover {
  opacity: 1;
}

/* Style the Mantine components to match the theme */
.export-menu :global(.mantine-Button-root) {
  background: rgba(255, 255, 255, 0.3) !important;
  border: none !important;
  border-radius: 50px !important;
  padding: 8px 20px !important;
  color: #ffffff !important;
  font-family: 'Inter', sans-serif !important;
  font-size: 16px !important;
  font-weight: 400 !important;
  cursor: pointer !important;
  transition: background-color 0.3s ease !important;
  height: auto !important;
}

.export-menu :global(.mantine-Button-root:hover) {
  background: rgba(255, 255, 255, 0.4) !important;
}

.export-menu :global(.mantine-Select-input) {
  background: rgba(255, 255, 255, 0.2) !important;
  border: 1px solid rgba(255, 255, 255, 0.3) !important;
  border-radius: 6px !important;
  color: white !important;
  font-family: 'Inter', sans-serif !important;
}

.export-menu :global(.mantine-Select-label) {
  color: white !important;
  font-family: 'Inter', sans-serif !important;
  margin-bottom: 8px !important;
}
`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/components/ExportMenu/ExportMenu.css"],"names":[],"mappings":"AAAA;EACE,kBAAkB;EAClB,UAAU,EAAE,8CAA8C;EAC1D,WAAW,EAAE,kCAAkC;EAC/C,oCAAoC;EACpC,0CAA0C;EAC1C,mBAAmB;EACnB,2BAA2B;EAC3B,aAAa;EACb,WAAW;EACX,wCAAwC;EACxC,aAAa;AACf;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,iCAAiC;EACjC,kBAAkB;EAClB,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,QAAQ;AACV;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,wBAAwB;EACxB,4BAA4B;AAC9B;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,qBAAqB;EACrB,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,iBAAiB;EACjB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,gBAAgB;AAClB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,eAAe;EACf,YAAY;AACd;;AAEA;EACE,UAAU;AACZ;;AAEA,oDAAoD;AACpD;EACE,+CAA+C;EAC/C,uBAAuB;EACvB,8BAA8B;EAC9B,4BAA4B;EAC5B,yBAAyB;EACzB,2CAA2C;EAC3C,0BAA0B;EAC1B,2BAA2B;EAC3B,0BAA0B;EAC1B,iDAAiD;EACjD,uBAAuB;AACzB;;AAEA;EACE,+CAA+C;AACjD;;AAEA;EACE,+CAA+C;EAC/C,qDAAqD;EACrD,6BAA6B;EAC7B,uBAAuB;EACvB,2CAA2C;AAC7C;;AAEA;EACE,uBAAuB;EACvB,2CAA2C;EAC3C,6BAA6B;AAC/B","sourcesContent":[".export-menu {\n  position: absolute;\n  top: 120px; /* Adjusted to appear under the share button */\n  left: 100px; /* Aligned with the share button */\n  background: rgba(255, 255, 255, 0.2);\n  border: 1px solid rgba(255, 255, 255, 0.1);\n  border-radius: 12px;\n  backdrop-filter: blur(10px);\n  padding: 16px;\n  width: 100%;\n  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);\n  z-index: 1000;\n}\n\n.export-menu-content {\n  display: flex;\n  flex-direction: column;\n  gap: 16px;\n}\n\n.export-item {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  color: white;\n  font-size: 14px;\n}\n\n.export-dropdown {\n  background: rgba(34, 34, 34, 0.2);\n  border-radius: 6px;\n  padding: 5px 8px;\n  display: flex;\n  align-items: center;\n  gap: 5px;\n}\n\n.chevron-down {\n  width: 16px;\n  height: 16px;\n  background-size: contain;\n  background-repeat: no-repeat;\n}\n\n.toggle-switch {\n  width: 38px;\n  height: 22px;\n  background: #A6A6A6;\n  border-radius: 13.5px;\n  position: relative;\n}\n\n.toggle-switch::after {\n  content: '';\n  position: absolute;\n  width: 18px;\n  height: 18px;\n  background: white;\n  border-radius: 50%;\n  top: 2px;\n  left: 2px;\n  transition: 0.3s;\n}\n\n.export-actions {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.close-button {\n  margin-top: 8px;\n  opacity: 0.8;\n}\n\n.close-button:hover {\n  opacity: 1;\n}\n\n/* Style the Mantine components to match the theme */\n.export-menu :global(.mantine-Button-root) {\n  background: rgba(255, 255, 255, 0.3) !important;\n  border: none !important;\n  border-radius: 50px !important;\n  padding: 8px 20px !important;\n  color: #ffffff !important;\n  font-family: 'Inter', sans-serif !important;\n  font-size: 16px !important;\n  font-weight: 400 !important;\n  cursor: pointer !important;\n  transition: background-color 0.3s ease !important;\n  height: auto !important;\n}\n\n.export-menu :global(.mantine-Button-root:hover) {\n  background: rgba(255, 255, 255, 0.4) !important;\n}\n\n.export-menu :global(.mantine-Select-input) {\n  background: rgba(255, 255, 255, 0.2) !important;\n  border: 1px solid rgba(255, 255, 255, 0.3) !important;\n  border-radius: 6px !important;\n  color: white !important;\n  font-family: 'Inter', sans-serif !important;\n}\n\n.export-menu :global(.mantine-Select-label) {\n  color: white !important;\n  font-family: 'Inter', sans-serif !important;\n  margin-bottom: 8px !important;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 39181:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.parameter-panel {
  width: 380px;
  height: auto;
  display: flex;
  flex-direction: column;
  border-radius: 1.5rem;
  overflow: hidden;
  padding: 1rem;
}

/* Tab Navigation */
.tab-navigation {
  display: flex;
  padding: 0.5rem;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2rem;
  margin-bottom: 1.5rem;
}

.tab-button {
  flex: 1;
  padding: 0.5rem 1rem;
  border-radius: 1.5rem;
  color: rgba(255, 255, 255, 0.7);
  font-family: "Helvetica Neue";
  font-size: 6rem;
  font-weight: 500;
  border: none;
  background: transparent;
  transition: all 0.3s ease;
  cursor: pointer;
  text-transform: capitalize; /* Capitalizes first letter */
  letter-spacing: 0.02em; /* Slight letter spacing for better readability */
}

.tab-button:hover {
  color: rgba(255, 255, 255, 0.9);
}

.tab-button.active {
  background: #000;
  color: #FFF;
  font-weight: 600; /* Slightly bolder when active */
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */


}

/* Shape Grid */
.shapes-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 0.75rem;
  margin: 1rem 0;
}

.shape-item {
  aspect-ratio: 1;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

/* Color Grid */
.color-grid {
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 0.5rem;
  margin: 1rem 0;
}

.color-circle {
  aspect-ratio: 1;
  border-radius: 50%;
  cursor: pointer;
  border: 2px solid transparent;
}

.color-circle.selected {
  border-color: #fff;
}

/* Section Labels */
.section-label {
  color: #fff;
  font-size: 0.875rem;
  margin: 1rem 0 0.5rem 0;
}

/* Material Options */
.material-options {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin: 1rem 0;
}

.material-option {
  padding: 1rem;
  border-radius: 0.75rem;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
}`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/ParameterPanel.css"],"names":[],"mappings":"AAAA;EACE,YAAY;EACZ,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,qBAAqB;EACrB,gBAAgB;EAChB,aAAa;AACf;;AAEA,mBAAmB;AACnB;EACE,aAAa;EACb,eAAe;EACf,mBAAmB;EACnB,WAAW;EACX,mBAAmB;EACnB,qBAAqB;AACvB;;AAEA;EACE,OAAO;EACP,oBAAoB;EACpB,qBAAqB;EACrB,+BAA+B;EAC/B,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,YAAY;EACZ,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;EACf,0BAA0B,EAAE,6BAA6B;EACzD,sBAAsB,EAAE,iDAAiD;AAC3E;;AAEA;EACE,+BAA+B;AACjC;;AAEA;EACE,gBAAgB;EAChB,WAAW;EACX,gBAAgB,EAAE,gCAAgC;EAClD,0CAA0C,EAAE,4BAA4B;;;AAG1E;;AAEA,eAAe;AACf;EACE,aAAa;EACb,qCAAqC;EACrC,kCAAkC;EAClC,YAAY;EACZ,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,sBAAsB;EACtB,0CAA0C;EAC1C,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;AACjB;;AAEA,eAAe;AACf;EACE,aAAa;EACb,qCAAqC;EACrC,WAAW;EACX,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,eAAe;EACf,6BAA6B;AAC/B;;AAEA;EACE,kBAAkB;AACpB;;AAEA,mBAAmB;AACnB;EACE,WAAW;EACX,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA,qBAAqB;AACrB;EACE,aAAa;EACb,qCAAqC;EACrC,SAAS;EACT,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,0CAA0C;EAC1C,oCAAoC;EACpC,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,eAAe;AACjB","sourcesContent":[".parameter-panel {\n  width: 380px;\n  height: auto;\n  display: flex;\n  flex-direction: column;\n  border-radius: 1.5rem;\n  overflow: hidden;\n  padding: 1rem;\n}\n\n/* Tab Navigation */\n.tab-navigation {\n  display: flex;\n  padding: 0.5rem;\n  align-items: center;\n  gap: 0.5rem;\n  border-radius: 2rem;\n  margin-bottom: 1.5rem;\n}\n\n.tab-button {\n  flex: 1;\n  padding: 0.5rem 1rem;\n  border-radius: 1.5rem;\n  color: rgba(255, 255, 255, 0.7);\n  font-family: \"Helvetica Neue\";\n  font-size: 6rem;\n  font-weight: 500;\n  border: none;\n  background: transparent;\n  transition: all 0.3s ease;\n  cursor: pointer;\n  text-transform: capitalize; /* Capitalizes first letter */\n  letter-spacing: 0.02em; /* Slight letter spacing for better readability */\n}\n\n.tab-button:hover {\n  color: rgba(255, 255, 255, 0.9);\n}\n\n.tab-button.active {\n  background: #000;\n  color: #FFF;\n  font-weight: 600; /* Slightly bolder when active */\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */\n\n\n}\n\n/* Shape Grid */\n.shapes-grid {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-template-rows: repeat(2, 1fr);\n  gap: 0.75rem;\n  margin: 1rem 0;\n}\n\n.shape-item {\n  aspect-ratio: 1;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n/* Color Grid */\n.color-grid {\n  display: grid;\n  grid-template-columns: repeat(6, 1fr);\n  gap: 0.5rem;\n  margin: 1rem 0;\n}\n\n.color-circle {\n  aspect-ratio: 1;\n  border-radius: 50%;\n  cursor: pointer;\n  border: 2px solid transparent;\n}\n\n.color-circle.selected {\n  border-color: #fff;\n}\n\n/* Section Labels */\n.section-label {\n  color: #fff;\n  font-size: 0.875rem;\n  margin: 1rem 0 0.5rem 0;\n}\n\n/* Material Options */\n.material-options {\n  display: grid;\n  grid-template-columns: repeat(2, 1fr);\n  gap: 1rem;\n  margin: 1rem 0;\n}\n\n.material-option {\n  padding: 1rem;\n  border-radius: 0.75rem;\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  background: rgba(255, 255, 255, 0.1);\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  cursor: pointer;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 70876:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.parameter-panel-parameters {
  padding: 1.25rem;
  /* Adjust height to account for footer */
  height: calc(100vh - 280px); /* Increased from 200px to give more space from footer */
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;
  position: relative; /* Add this */
}

/* Custom scrollbar for webkit browsers */
.parameter-panel-parameters::-webkit-scrollbar {
  width: 6px;
}

.parameter-panel-parameters::-webkit-scrollbar-track {
  background: transparent;
}

.parameter-panel-parameters::-webkit-scrollbar-thumb {
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 3px;
}

.parameter-item {
  margin-bottom: 2rem;
}

.parameter-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.param-name {
  color: #FFF;
  font-family: "Helvetica Neue";
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5rem;
}

.param-value {
  color: #FFF;
  font-family: "Helvetica Neue";
  font-size: 1rem;
  font-weight: 400;
  padding: 0.375rem 0.75rem;
  border-radius: 0.5rem;
  background: rgba(255, 255, 255, 0.1);
}

/* Custom Slider Styles */
.slider-container {
  width: 100%;
  height: 0.5rem;
  position: relative;
  cursor: pointer;
  padding: 0.75rem 0;
}

.slider-track {
  width: 100%;
  height: 0.5rem;
  border-radius: 1rem;
  background: rgba(255, 255, 255, 0.1);
}

.slider-fill {
  position: absolute;
  top: 0.75rem;
  height: 0.5rem;
  border-radius: 1rem 0 0 1rem;
  background: #9E9E9E;
}

.slider-fill.active {
  background: #101828;
}

.slider-thumb {
  position: absolute;
  top: 50%;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;
  background: #FFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  transform: translate(-50%, -50%);
  cursor: pointer;
}

.slider-thumb.active {
  width: 1.5rem;
  height: 1.5rem;
  background: #FFF;
  border: 2px solid #101828;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25),
             0px 0px 0px 4px rgba(255, 189, 98, 0.15);
}

.parameter-range {
  display: flex;
  justify-content: space-between;
  margin-top: 0.75rem;
  color: rgba(255, 255, 255, 0.6);
  font-family: "Helvetica Neue";
  font-size: 0.875rem;
}

/* Custom Dropdown Styles */
.custom-dropdown {
  width: 100%;
  position: relative;
  margin-top: 0.25rem;
}

.dropdown-header {
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  padding: 0.375rem 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  height: 24px;
}

.dropdown-value {
  color: white;
  font-size: 0.875rem;
}

.dropdown-arrows {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.arrow {
  color: rgba(255, 255, 255, 0.6);
  font-size: 6px;
  line-height: 1;
}

.dropdown-options {
  position: absolute;
  /* Change positioning for bottom dropdowns */
  bottom: calc(100% + 2px); /* This will make dropdowns open upwards when near bottom */
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.95);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 0.25rem;
  padding: 0.25rem;
  z-index: 1100; /* Increased z-index to appear above footer */
  display: none;
}

.dropdown-options.open {
  display: block;
}

.dropdown-options.open-upward {
  bottom: calc(100% + 2px);
  top: auto;
}

.dropdown-options.open-downward {
  top: calc(100% + 2px);
  bottom: auto;
}

.dropdown-option {
  padding: 0.375rem 0.5rem;
  color: white;
  cursor: pointer;
  border-radius: 0.125rem;
  font-size: 0.875rem;
}

.dropdown-option:hover {
  background: rgba(255, 255, 255, 0.1);
}

.dropdown-option.selected {
  background: rgba(255, 255, 255, 0.15);
}

/* Remove all Mantine styles */
.mantine-Select-dropdown,
.mantine-Select-item,
.mantine-Select-rightSection {
  display: none;
}
`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/GeometryPanel/GeometryPanel.css"],"names":[],"mappings":"AAAA;EACE,gBAAgB;EAChB,wCAAwC;EACxC,2BAA2B,EAAE,wDAAwD;EACrF,gBAAgB;EAChB,qBAAqB;EACrB,qDAAqD;EACrD,kBAAkB,EAAE,aAAa;AACnC;;AAEA,yCAAyC;AACzC;EACE,UAAU;AACZ;;AAEA;EACE,uBAAuB;AACzB;;AAEA;EACE,0CAA0C;EAC1C,kBAAkB;AACpB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,WAAW;EACX,6BAA6B;EAC7B,eAAe;EACf,gBAAgB;EAChB,yBAAyB;EACzB,qBAAqB;EACrB,oCAAoC;AACtC;;AAEA,yBAAyB;AACzB;EACE,WAAW;EACX,cAAc;EACd,kBAAkB;EAClB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,cAAc;EACd,mBAAmB;EACnB,oCAAoC;AACtC;;AAEA;EACE,kBAAkB;EAClB,YAAY;EACZ,cAAc;EACd,4BAA4B;EAC5B,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,gBAAgB;EAChB,2CAA2C;EAC3C,gCAAgC;EAChC,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,gBAAgB;EAChB,yBAAyB;EACzB;qDACmD;AACrD;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,+BAA+B;EAC/B,6BAA6B;EAC7B,mBAAmB;AACrB;;AAEA,2BAA2B;AAC3B;EACE,WAAW;EACX,kBAAkB;EAClB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;EACpC,0CAA0C;EAC1C,sBAAsB;EACtB,wBAAwB;EACxB,aAAa;EACb,8BAA8B;EAC9B,mBAAmB;EACnB,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,QAAQ;AACV;;AAEA;EACE,+BAA+B;EAC/B,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,kBAAkB;EAClB,4CAA4C;EAC5C,wBAAwB,EAAE,2DAA2D;EACrF,OAAO;EACP,QAAQ;EACR,+BAA+B;EAC/B,0CAA0C;EAC1C,sBAAsB;EACtB,gBAAgB;EAChB,aAAa,EAAE,6CAA6C;EAC5D,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,wBAAwB;EACxB,SAAS;AACX;;AAEA;EACE,qBAAqB;EACrB,YAAY;AACd;;AAEA;EACE,wBAAwB;EACxB,YAAY;EACZ,eAAe;EACf,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,qCAAqC;AACvC;;AAEA,8BAA8B;AAC9B;;;EAGE,aAAa;AACf","sourcesContent":[".parameter-panel-parameters {\n  padding: 1.25rem;\n  /* Adjust height to account for footer */\n  height: calc(100vh - 280px); /* Increased from 200px to give more space from footer */\n  overflow-y: auto;\n  scrollbar-width: thin;\n  scrollbar-color: rgba(255, 255, 255, 0.3) transparent;\n  position: relative; /* Add this */\n}\n\n/* Custom scrollbar for webkit browsers */\n.parameter-panel-parameters::-webkit-scrollbar {\n  width: 6px;\n}\n\n.parameter-panel-parameters::-webkit-scrollbar-track {\n  background: transparent;\n}\n\n.parameter-panel-parameters::-webkit-scrollbar-thumb {\n  background-color: rgba(255, 255, 255, 0.3);\n  border-radius: 3px;\n}\n\n.parameter-item {\n  margin-bottom: 2rem;\n}\n\n.parameter-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin-bottom: 1rem;\n}\n\n.param-name {\n  color: #FFF;\n  font-family: \"Helvetica Neue\";\n  font-size: 1rem;\n  font-weight: 400;\n  line-height: 1.5rem;\n}\n\n.param-value {\n  color: #FFF;\n  font-family: \"Helvetica Neue\";\n  font-size: 1rem;\n  font-weight: 400;\n  padding: 0.375rem 0.75rem;\n  border-radius: 0.5rem;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n/* Custom Slider Styles */\n.slider-container {\n  width: 100%;\n  height: 0.5rem;\n  position: relative;\n  cursor: pointer;\n  padding: 0.75rem 0;\n}\n\n.slider-track {\n  width: 100%;\n  height: 0.5rem;\n  border-radius: 1rem;\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.slider-fill {\n  position: absolute;\n  top: 0.75rem;\n  height: 0.5rem;\n  border-radius: 1rem 0 0 1rem;\n  background: #9E9E9E;\n}\n\n.slider-fill.active {\n  background: #101828;\n}\n\n.slider-thumb {\n  position: absolute;\n  top: 50%;\n  width: 1.25rem;\n  height: 1.25rem;\n  border-radius: 50%;\n  background: #FFF;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);\n  transform: translate(-50%, -50%);\n  cursor: pointer;\n}\n\n.slider-thumb.active {\n  width: 1.5rem;\n  height: 1.5rem;\n  background: #FFF;\n  border: 2px solid #101828;\n  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25),\n             0px 0px 0px 4px rgba(255, 189, 98, 0.15);\n}\n\n.parameter-range {\n  display: flex;\n  justify-content: space-between;\n  margin-top: 0.75rem;\n  color: rgba(255, 255, 255, 0.6);\n  font-family: \"Helvetica Neue\";\n  font-size: 0.875rem;\n}\n\n/* Custom Dropdown Styles */\n.custom-dropdown {\n  width: 100%;\n  position: relative;\n  margin-top: 0.25rem;\n}\n\n.dropdown-header {\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0.25rem;\n  padding: 0.375rem 0.5rem;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  cursor: pointer;\n  height: 24px;\n}\n\n.dropdown-value {\n  color: white;\n  font-size: 0.875rem;\n}\n\n.dropdown-arrows {\n  display: flex;\n  flex-direction: column;\n  gap: 1px;\n}\n\n.arrow {\n  color: rgba(255, 255, 255, 0.6);\n  font-size: 6px;\n  line-height: 1;\n}\n\n.dropdown-options {\n  position: absolute;\n  /* Change positioning for bottom dropdowns */\n  bottom: calc(100% + 2px); /* This will make dropdowns open upwards when near bottom */\n  left: 0;\n  right: 0;\n  background: rgba(0, 0, 0, 0.95);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 0.25rem;\n  padding: 0.25rem;\n  z-index: 1100; /* Increased z-index to appear above footer */\n  display: none;\n}\n\n.dropdown-options.open {\n  display: block;\n}\n\n.dropdown-options.open-upward {\n  bottom: calc(100% + 2px);\n  top: auto;\n}\n\n.dropdown-options.open-downward {\n  top: calc(100% + 2px);\n  bottom: auto;\n}\n\n.dropdown-option {\n  padding: 0.375rem 0.5rem;\n  color: white;\n  cursor: pointer;\n  border-radius: 0.125rem;\n  font-size: 0.875rem;\n}\n\n.dropdown-option:hover {\n  background: rgba(255, 255, 255, 0.1);\n}\n\n.dropdown-option.selected {\n  background: rgba(255, 255, 255, 0.15);\n}\n\n/* Remove all Mantine styles */\n.mantine-Select-dropdown,\n.mantine-Select-item,\n.mantine-Select-rightSection {\n  display: none;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 38316:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.parameter-panel-hardware {
  padding: 16px;
}

.hardware-item {
  margin-bottom: 24px;
}

.param-name {
  display: block;
  margin-bottom: 12px;
  font-weight: 500;
  color: #ffffff;
}

.option-buttons {
  display: flex;
  gap: 8px;
}

.option-button {
  flex: 1;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.option-button:hover {
  background: rgba(255, 255, 255, 0.2);
}

.option-button.selected {
  background: rgba(255, 255, 255, 0.3);
  border-color: rgba(255, 255, 255, 0.4);
}`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/HardwarePanel/HardwarePanel.css"],"names":[],"mappings":"AAAA;EACE,aAAa;AACf;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,cAAc;EACd,mBAAmB;EACnB,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,QAAQ;AACV;;AAEA;EACE,OAAO;EACP,iBAAiB;EACjB,oCAAoC;EACpC,0CAA0C;EAC1C,kBAAkB;EAClB,YAAY;EACZ,eAAe;EACf,yBAAyB;AAC3B;;AAEA;EACE,oCAAoC;AACtC;;AAEA;EACE,oCAAoC;EACpC,sCAAsC;AACxC","sourcesContent":[".parameter-panel-hardware {\n  padding: 16px;\n}\n\n.hardware-item {\n  margin-bottom: 24px;\n}\n\n.param-name {\n  display: block;\n  margin-bottom: 12px;\n  font-weight: 500;\n  color: #ffffff;\n}\n\n.option-buttons {\n  display: flex;\n  gap: 8px;\n}\n\n.option-button {\n  flex: 1;\n  padding: 8px 16px;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 4px;\n  color: white;\n  cursor: pointer;\n  transition: all 0.2s ease;\n}\n\n.option-button:hover {\n  background: rgba(255, 255, 255, 0.2);\n}\n\n.option-button.selected {\n  background: rgba(255, 255, 255, 0.3);\n  border-color: rgba(255, 255, 255, 0.4);\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 44760:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.parameter-panel-surface {
    padding: 16px;
  }
  
  .surface-item {
    margin-bottom: 24px;
  }
  
  .param-name {
    display: block;
    margin-bottom: 8px;
    font-weight: 500;
    color: #ffffff;
  }

  .material-options, .shape-options {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
  }

  .material-option, .shape-option {
    background: rgba(128, 128, 128, 0.34);
    border-radius: 12px;
    backdrop-filter: blur(100px);
    padding: 12px;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: all 0.3s ease;
  }

  .material-option.selected, .shape-option.selected {
    background: rgba(255, 255, 255, 0.2);
  }

  .material-option img {
    width: 56px;
    height: 56px;
    border-radius: 50%;
    margin-bottom: 6px;
  }

  .shape-option img {
    width: 71px;
    height: 43px;
  }

  .material-option span {
    /* color: #ffffff; */
    font-size: 14px;
  }

  .shape-options {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
  }

  /* Add these new styles */
  .color-grid {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-template-rows: repeat(2, 1fr);
    gap: 16px;
    margin-top: 16px;
  }

  .color-circle {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    cursor: pointer;
  }

  .color-dot {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid transparent;
    transition: all 0.3s ease;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .color-circle.selected .color-dot {
    border-color: white;
    transform: scale(1.1);
  }

  .color-label {
    font-size: 12px;
    color: white;
    text-align: center;
    opacity: 0.8;
  }
`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/SurfacePanel/SurfacePanel.css"],"names":[],"mappings":"AAAA;IACI,aAAa;EACf;;EAEA;IACE,mBAAmB;EACrB;;EAEA;IACE,cAAc;IACd,kBAAkB;IAClB,gBAAgB;IAChB,cAAc;EAChB;;EAEA;IACE,aAAa;IACb,eAAe;IACf,SAAS;EACX;;EAEA;IACE,qCAAqC;IACrC,mBAAmB;IACnB,4BAA4B;IAC5B,aAAa;IACb,eAAe;IACf,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,yBAAyB;EAC3B;;EAEA;IACE,oCAAoC;EACtC;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;EACd;;EAEA;IACE,oBAAoB;IACpB,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,qCAAqC;EACvC;;EAEA,yBAAyB;EACzB;IACE,aAAa;IACb,qCAAqC;IACrC,kCAAkC;IAClC,SAAS;IACT,gBAAgB;EAClB;;EAEA;IACE,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,QAAQ;IACR,eAAe;EACjB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,6BAA6B;IAC7B,yBAAyB;IACzB,wCAAwC;EAC1C;;EAEA;IACE,mBAAmB;IACnB,qBAAqB;EACvB;;EAEA;IACE,eAAe;IACf,YAAY;IACZ,kBAAkB;IAClB,YAAY;EACd","sourcesContent":[".parameter-panel-surface {\n    padding: 16px;\n  }\n  \n  .surface-item {\n    margin-bottom: 24px;\n  }\n  \n  .param-name {\n    display: block;\n    margin-bottom: 8px;\n    font-weight: 500;\n    color: #ffffff;\n  }\n\n  .material-options, .shape-options {\n    display: flex;\n    flex-wrap: wrap;\n    gap: 12px;\n  }\n\n  .material-option, .shape-option {\n    background: rgba(128, 128, 128, 0.34);\n    border-radius: 12px;\n    backdrop-filter: blur(100px);\n    padding: 12px;\n    cursor: pointer;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    transition: all 0.3s ease;\n  }\n\n  .material-option.selected, .shape-option.selected {\n    background: rgba(255, 255, 255, 0.2);\n  }\n\n  .material-option img {\n    width: 56px;\n    height: 56px;\n    border-radius: 50%;\n    margin-bottom: 6px;\n  }\n\n  .shape-option img {\n    width: 71px;\n    height: 43px;\n  }\n\n  .material-option span {\n    /* color: #ffffff; */\n    font-size: 14px;\n  }\n\n  .shape-options {\n    display: grid;\n    grid-template-columns: repeat(3, 1fr);\n  }\n\n  /* Add these new styles */\n  .color-grid {\n    display: grid;\n    grid-template-columns: repeat(5, 1fr);\n    grid-template-rows: repeat(2, 1fr);\n    gap: 16px;\n    margin-top: 16px;\n  }\n\n  .color-circle {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    gap: 8px;\n    cursor: pointer;\n  }\n\n  .color-dot {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    border: 2px solid transparent;\n    transition: all 0.3s ease;\n    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  }\n\n  .color-circle.selected .color-dot {\n    border-color: white;\n    transform: scale(1.1);\n  }\n\n  .color-label {\n    font-size: 12px;\n    color: white;\n    text-align: center;\n    opacity: 0.8;\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 38609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.footer {
    background: rgba(0, 0, 0, 0.6);
    backdrop-filter: blur(10px);
    padding: 20px 0;
    position: relative;
    z-index: 100;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    margin-top: auto;
}

.footer-content {
    max-width: 1184px;
    margin: 0 auto;
    padding: 0 20px;
    display: flex;
    justify-content: space-between; /* This spreads the content */
    align-items: center;
}
  
  .footer-text {
    color: rgb(255, 255, 255);
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }
  
  .newsletter-form {
    display: flex;
    align-items: center;
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 50px;
    padding: 4px;
    gap: 8px;
  }
  
  .newsletter-input {
    width: 250px;
  }
  
  .newsletter-input input {
    background: transparent;
    border: none;
    color: white;
    height: 40px;
    padding: 0 20px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    transition: all 0.3s ease;
  }
  
  .newsletter-input input:focus {
    outline: none;
    background: transparent;
  }
  
  .newsletter-input input::placeholder {
    color: rgba(255, 255, 255, 0.6);
  }
  
  .newsletter-button {
    background: rgba(255, 255, 255, 0.2) !important;
    border: none !important;
    border-radius: 50px !important;
    padding: 0 20px !important;
    height: 36px !important;
    color: white !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 14px !important;
    font-weight: 400 !important;
    transition: background-color 0.3s ease !important;
    margin-right: 2px !important;
  }
  
  .newsletter-button:hover {
    background: rgba(255, 255, 255, 0.3) !important;
  }
  
  @media (max-width: 768px) {
    .footer-content {
      flex-direction: column;
      gap: 20px;
    }
  
    .newsletter-form {
      width: 100%;
    }
  
    .newsletter-input {
      width: 100%;
    }
  }
`, "",{"version":3,"sources":["webpack://./src/shared/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;IACI,8BAA8B;IAC9B,2BAA2B;IAC3B,eAAe;IACf,kBAAkB;IAClB,YAAY;IACZ,8CAA8C;IAC9C,gBAAgB;AACpB;;AAEA;IACI,iBAAiB;IACjB,cAAc;IACd,eAAe;IACf,aAAa;IACb,8BAA8B,EAAE,6BAA6B;IAC7D,mBAAmB;AACvB;;EAEE;IACE,yBAAyB;IACzB,gCAAgC;IAChC,eAAe;EACjB;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,oCAAoC;IACpC,0CAA0C;IAC1C,mBAAmB;IACnB,YAAY;IACZ,QAAQ;EACV;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,YAAY;IACZ,eAAe;IACf,gCAAgC;IAChC,eAAe;IACf,yBAAyB;EAC3B;;EAEA;IACE,aAAa;IACb,uBAAuB;EACzB;;EAEA;IACE,+BAA+B;EACjC;;EAEA;IACE,+CAA+C;IAC/C,uBAAuB;IACvB,8BAA8B;IAC9B,0BAA0B;IAC1B,uBAAuB;IACvB,uBAAuB;IACvB,2CAA2C;IAC3C,0BAA0B;IAC1B,2BAA2B;IAC3B,iDAAiD;IACjD,4BAA4B;EAC9B;;EAEA;IACE,+CAA+C;EACjD;;EAEA;IACE;MACE,sBAAsB;MACtB,SAAS;IACX;;IAEA;MACE,WAAW;IACb;;IAEA;MACE,WAAW;IACb;EACF","sourcesContent":[".footer {\n    background: rgba(0, 0, 0, 0.6);\n    backdrop-filter: blur(10px);\n    padding: 20px 0;\n    position: relative;\n    z-index: 100;\n    border-top: 1px solid rgba(255, 255, 255, 0.1);\n    margin-top: auto;\n}\n\n.footer-content {\n    max-width: 1184px;\n    margin: 0 auto;\n    padding: 0 20px;\n    display: flex;\n    justify-content: space-between; /* This spreads the content */\n    align-items: center;\n}\n  \n  .footer-text {\n    color: rgb(255, 255, 255);\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n  }\n  \n  .newsletter-form {\n    display: flex;\n    align-items: center;\n    background: rgba(255, 255, 255, 0.1);\n    border: 1px solid rgba(255, 255, 255, 0.2);\n    border-radius: 50px;\n    padding: 4px;\n    gap: 8px;\n  }\n  \n  .newsletter-input {\n    width: 250px;\n  }\n  \n  .newsletter-input input {\n    background: transparent;\n    border: none;\n    color: white;\n    height: 40px;\n    padding: 0 20px;\n    font-family: 'Inter', sans-serif;\n    font-size: 14px;\n    transition: all 0.3s ease;\n  }\n  \n  .newsletter-input input:focus {\n    outline: none;\n    background: transparent;\n  }\n  \n  .newsletter-input input::placeholder {\n    color: rgba(255, 255, 255, 0.6);\n  }\n  \n  .newsletter-button {\n    background: rgba(255, 255, 255, 0.2) !important;\n    border: none !important;\n    border-radius: 50px !important;\n    padding: 0 20px !important;\n    height: 36px !important;\n    color: white !important;\n    font-family: 'Inter', sans-serif !important;\n    font-size: 14px !important;\n    font-weight: 400 !important;\n    transition: background-color 0.3s ease !important;\n    margin-right: 2px !important;\n  }\n  \n  .newsletter-button:hover {\n    background: rgba(255, 255, 255, 0.3) !important;\n  }\n  \n  @media (max-width: 768px) {\n    .footer-content {\n      flex-direction: column;\n      gap: 20px;\n    }\n  \n    .newsletter-form {\n      width: 100%;\n    }\n  \n    .newsletter-input {\n      width: 100%;\n    }\n  }\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 71949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 10px;
  /* Remove any background effects from the header wrapper */
  background: transparent;
}

.header-content {
  display: flex;
  height: 2rem;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  justify-content: space-between;
  border-radius: 2.125rem;
  background: rgba(0, 0, 0, 0.40);
  backdrop-filter: blur(50px);
  -webkit-backdrop-filter: blur(50px);
  max-width: 900px;
  width: 85%;
  /* Contain the backdrop effect */
  transform: translateZ(0);
  isolation: isolate;
  padding: 0.75rem 1.5rem; /* Increased horizontal padding */

}

.logo {
  color: #FFF;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 1.75rem;
  text-decoration: none;
  margin-left: 0.7rem;
}

.nav-links {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-right: 0.7rem;
}

.nav-links a {
  display: flex;
  height: 2rem;
  padding: 0.75rem 1rem;
  align-items: center;
  gap: 0.5rem;
  color: #FFF;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 0.875rem;
  font-weight: 500;
  line-height: 1.375rem;
  text-decoration: none;
  border-radius: 2.125rem;
  transition: background 0.2s ease;
}

.nav-links a:hover {
  background: rgba(0, 0, 0, 0.40);
  background-blend-mode: luminosity;
  backdrop-filter: blur(50px);
}

/* Responsive design */
@media (max-width: 640px) {
  .header-content {
    padding: 0.5rem;
  }
  
  .nav-links {
    gap: 0.25rem;
  }
  
  .nav-links a {
    padding: 0.5rem 0.75rem;
  }
}
`, "",{"version":3,"sources":["webpack://./src/shared/components/Header/Header.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,MAAM;EACN,OAAO;EACP,QAAQ;EACR,aAAa;EACb,aAAa;EACb,0DAA0D;EAC1D,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,cAAc;EACd,8BAA8B;EAC9B,uBAAuB;EACvB,+BAA+B;EAC/B,2BAA2B;EAC3B,mCAAmC;EACnC,gBAAgB;EAChB,UAAU;EACV,gCAAgC;EAChC,wBAAwB;EACxB,kBAAkB;EAClB,uBAAuB,EAAE,iCAAiC;;AAE5D;;AAEA;EACE,WAAW;EACX,yCAAyC;EACzC,iBAAiB;EACjB,gBAAgB;EAChB,oBAAoB;EACpB,qBAAqB;EACrB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,SAAS;EACT,oBAAoB;AACtB;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,qBAAqB;EACrB,mBAAmB;EACnB,WAAW;EACX,WAAW;EACX,yCAAyC;EACzC,mBAAmB;EACnB,gBAAgB;EAChB,qBAAqB;EACrB,qBAAqB;EACrB,uBAAuB;EACvB,gCAAgC;AAClC;;AAEA;EACE,+BAA+B;EAC/B,iCAAiC;EACjC,2BAA2B;AAC7B;;AAEA,sBAAsB;AACtB;EACE;IACE,eAAe;EACjB;;EAEA;IACE,YAAY;EACd;;EAEA;IACE,uBAAuB;EACzB;AACF","sourcesContent":[".header {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  z-index: 1000;\n  padding: 10px;\n  /* Remove any background effects from the header wrapper */\n  background: transparent;\n}\n\n.header-content {\n  display: flex;\n  height: 2rem;\n  padding: 0.75rem 1rem;\n  align-items: center;\n  gap: 0.5rem;\n  margin: 0 auto;\n  justify-content: space-between;\n  border-radius: 2.125rem;\n  background: rgba(0, 0, 0, 0.40);\n  backdrop-filter: blur(50px);\n  -webkit-backdrop-filter: blur(50px);\n  max-width: 900px;\n  width: 85%;\n  /* Contain the backdrop effect */\n  transform: translateZ(0);\n  isolation: isolate;\n  padding: 0.75rem 1.5rem; /* Increased horizontal padding */\n\n}\n\n.logo {\n  color: #FFF;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 1.5rem;\n  font-weight: 500;\n  line-height: 1.75rem;\n  text-decoration: none;\n  margin-left: 0.7rem;\n}\n\n.nav-links {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  margin-right: 0.7rem;\n}\n\n.nav-links a {\n  display: flex;\n  height: 2rem;\n  padding: 0.75rem 1rem;\n  align-items: center;\n  gap: 0.5rem;\n  color: #FFF;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.875rem;\n  font-weight: 500;\n  line-height: 1.375rem;\n  text-decoration: none;\n  border-radius: 2.125rem;\n  transition: background 0.2s ease;\n}\n\n.nav-links a:hover {\n  background: rgba(0, 0, 0, 0.40);\n  background-blend-mode: luminosity;\n  backdrop-filter: blur(50px);\n}\n\n/* Responsive design */\n@media (max-width: 640px) {\n  .header-content {\n    padding: 0.5rem;\n  }\n  \n  .nav-links {\n    gap: 0.25rem;\n  }\n  \n  .nav-links a {\n    padding: 0.5rem 0.75rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 79798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.common-page {
    min-height: 100vh;
    display: flex;
    align-items: center;  /* This centers vertically */
    justify-content: center;  /* This centers horizontally */
    color: white;
    width: 100%;  /* Added to ensure full width */
    position: relative;  /* Added for positioning context */
    margin-top: -68px;  /* Offset the header height */
}

.common-content {
    text-align: center;
    padding: 2rem;
    margin: auto;  /* This helps with centering */
    width: 100%;
    max-width: 800px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.2);
}

/* Override all Mantine buttons */
:global(.mantine-Button-root) {
    background: rgba(255, 255, 255, 0.3) !important;
    border: none !important;
    border-radius: 50px !important;
    padding: 8px 20px !important;
    color: #ffffff !important;
    font-family: 'Inter', sans-serif !important;
    font-size: 16px !important;
    font-weight: 400 !important;
    cursor: pointer !important;
    transition: background-color 0.3s ease !important;
}

:global(.mantine-Button-root:hover) {
    background: rgba(255, 255, 255, 0.4) !important;
}

.common-content .mantine-Stack-root {
    align-items: center;  /* Changed to center */
    justify-content: center;  /* Added to center */
    gap: 2rem;
    width: 100%;
}

.common-content form {
    width: 100%;
    max-width: 400px;
}
  
.common-content .mantine-TextInput-root,
.common-content .mantine-Textarea-root {
    width: 100%;
}

.common-content .mantine-Title-root {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  text-align: center; /* Keep title centered */
  width: 100%;
}

.common-content .mantine-Text-root {
  line-height: 1.6;
  white-space: pre-line; /* Preserve line breaks */
  text-align: center;  /* Changed to center */
  max-width: 600px;  /* Added to control text width */
  margin: 0 auto;  /* Center the text block */
}
`, "",{"version":3,"sources":["webpack://./src/shared/styles/CommonPage.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;IACjB,aAAa;IACb,mBAAmB,GAAG,4BAA4B;IAClD,uBAAuB,GAAG,8BAA8B;IACxD,YAAY;IACZ,WAAW,GAAG,+BAA+B;IAC7C,kBAAkB,GAAG,kCAAkC;IACvD,iBAAiB,GAAG,6BAA6B;AACrD;;AAEA;IACI,kBAAkB;IAClB,aAAa;IACb,YAAY,GAAG,8BAA8B;IAC7C,WAAW;IACX,gBAAgB;IAChB,aAAa;IACb,sBAAsB;IACtB,mBAAmB;IACnB,uBAAuB;IACvB,oCAAoC;IACpC,2BAA2B;IAC3B,mBAAmB;IACnB,0CAA0C;AAC9C;;AAEA,iCAAiC;AACjC;IACI,+CAA+C;IAC/C,uBAAuB;IACvB,8BAA8B;IAC9B,4BAA4B;IAC5B,yBAAyB;IACzB,2CAA2C;IAC3C,0BAA0B;IAC1B,2BAA2B;IAC3B,0BAA0B;IAC1B,iDAAiD;AACrD;;AAEA;IACI,+CAA+C;AACnD;;AAEA;IACI,mBAAmB,GAAG,sBAAsB;IAC5C,uBAAuB,GAAG,oBAAoB;IAC9C,SAAS;IACT,WAAW;AACf;;AAEA;IACI,WAAW;IACX,gBAAgB;AACpB;;AAEA;;IAEI,WAAW;AACf;;AAEA;EACE,iBAAiB;EACjB,mBAAmB;EACnB,kBAAkB,EAAE,wBAAwB;EAC5C,WAAW;AACb;;AAEA;EACE,gBAAgB;EAChB,qBAAqB,EAAE,yBAAyB;EAChD,kBAAkB,GAAG,sBAAsB;EAC3C,gBAAgB,GAAG,gCAAgC;EACnD,cAAc,GAAG,0BAA0B;AAC7C","sourcesContent":[".common-page {\n    min-height: 100vh;\n    display: flex;\n    align-items: center;  /* This centers vertically */\n    justify-content: center;  /* This centers horizontally */\n    color: white;\n    width: 100%;  /* Added to ensure full width */\n    position: relative;  /* Added for positioning context */\n    margin-top: -68px;  /* Offset the header height */\n}\n\n.common-content {\n    text-align: center;\n    padding: 2rem;\n    margin: auto;  /* This helps with centering */\n    width: 100%;\n    max-width: 800px;\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(10px);\n    border-radius: 20px;\n    border: 1px solid rgba(255, 255, 255, 0.2);\n}\n\n/* Override all Mantine buttons */\n:global(.mantine-Button-root) {\n    background: rgba(255, 255, 255, 0.3) !important;\n    border: none !important;\n    border-radius: 50px !important;\n    padding: 8px 20px !important;\n    color: #ffffff !important;\n    font-family: 'Inter', sans-serif !important;\n    font-size: 16px !important;\n    font-weight: 400 !important;\n    cursor: pointer !important;\n    transition: background-color 0.3s ease !important;\n}\n\n:global(.mantine-Button-root:hover) {\n    background: rgba(255, 255, 255, 0.4) !important;\n}\n\n.common-content .mantine-Stack-root {\n    align-items: center;  /* Changed to center */\n    justify-content: center;  /* Added to center */\n    gap: 2rem;\n    width: 100%;\n}\n\n.common-content form {\n    width: 100%;\n    max-width: 400px;\n}\n  \n.common-content .mantine-TextInput-root,\n.common-content .mantine-Textarea-root {\n    width: 100%;\n}\n\n.common-content .mantine-Title-root {\n  font-size: 2.5rem;\n  margin-bottom: 1rem;\n  text-align: center; /* Keep title centered */\n  width: 100%;\n}\n\n.common-content .mantine-Text-root {\n  line-height: 1.6;\n  white-space: pre-line; /* Preserve line breaks */\n  text-align: center;  /* Changed to center */\n  max-width: 600px;  /* Added to control text width */\n  margin: 0 auto;  /* Center the text block */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 39609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(98108), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `body {
  margin: 0;
  font-family: 'Roboto', sans-serif;
  min-height: 100vh;
  overflow-y: auto;
  /* Use relative path to the image in shared assets */
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
}

/* Add fade to content instead of body */
.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  position: relative;

}



.main-content {
  flex: 1;
  display: flex;
  position: relative;
  width: 100%;
}
`, "",{"version":3,"sources":["webpack://./src/shared/styles/global.css"],"names":[],"mappings":"AAAA;EACE,SAAS;EACT,iCAAiC;EACjC,iBAAiB;EACjB,gBAAgB;EAChB,oDAAoD;EACpD,yDAAmE;EACnE,sBAAsB;EACtB,2BAA2B;EAC3B,4BAA4B;EAC5B,4BAA4B;AAC9B;;AAEA,wCAAwC;AACxC;EACE,aAAa;EACb,sBAAsB;EACtB,iBAAiB;EACjB,kBAAkB;;AAEpB;;;;AAIA;EACE,OAAO;EACP,aAAa;EACb,kBAAkB;EAClB,WAAW;AACb","sourcesContent":["body {\n  margin: 0;\n  font-family: 'Roboto', sans-serif;\n  min-height: 100vh;\n  overflow-y: auto;\n  /* Use relative path to the image in shared assets */\n  background-image: url('../assets/images/background_final_last.png');\n  background-size: cover;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-attachment: fixed;\n}\n\n/* Add fade to content instead of body */\n.app {\n  display: flex;\n  flex-direction: column;\n  min-height: 100vh;\n  position: relative;\n\n}\n\n\n\n.main-content {\n  flex: 1;\n  display: flex;\n  position: relative;\n  width: 100%;\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 44654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.configurator-template {
    /* Match the exact layout of ConfiguratorPage */
    display: flex;
    flex-direction: column;
    height: 100%;
    background: inherit; /* Inherit the background from body */
  }
  
  .viewer-placeholder {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    background: rgba(245, 240, 235, 0.2);
  }
  
  .loading-gif {
    width: 200px;
    height: 200px;
    object-fit: contain;
  }
  
  .parameter-panel-placeholder {
    width: 300px;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
  }
  
  .panel-skeleton {
    /* Add loading skeleton animation */
    animation: pulse 1.5s infinite;
    background: linear-gradient(90deg, 
      rgba(255,255,255,0.1), 
      rgba(255,255,255,0.2), 
      rgba(255,255,255,0.1)
    );
    height: 100%;
  }
  
  @keyframes pulse {
    0% { opacity: 0.6; }
    50% { opacity: 0.8; }
    100% { opacity: 0.6; }
  }`, "",{"version":3,"sources":["webpack://./src/static/components/ConfiguratorTemplate/ConfiguratorTemplate.css"],"names":[],"mappings":"AAAA;IACI,+CAA+C;IAC/C,aAAa;IACb,sBAAsB;IACtB,YAAY;IACZ,mBAAmB,EAAE,qCAAqC;EAC5D;;EAEA;IACE,aAAa;IACb,mBAAmB;IACnB,uBAAuB;IACvB,YAAY;IACZ,oCAAoC;EACtC;;EAEA;IACE,YAAY;IACZ,aAAa;IACb,mBAAmB;EACrB;;EAEA;IACE,YAAY;IACZ,oCAAoC;IACpC,2BAA2B;EAC7B;;EAEA;IACE,mCAAmC;IACnC,8BAA8B;IAC9B;;;;KAIC;IACD,YAAY;EACd;;EAEA;IACE,KAAK,YAAY,EAAE;IACnB,MAAM,YAAY,EAAE;IACpB,OAAO,YAAY,EAAE;EACvB","sourcesContent":[".configurator-template {\n    /* Match the exact layout of ConfiguratorPage */\n    display: flex;\n    flex-direction: column;\n    height: 100%;\n    background: inherit; /* Inherit the background from body */\n  }\n  \n  .viewer-placeholder {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    height: 100%;\n    background: rgba(245, 240, 235, 0.2);\n  }\n  \n  .loading-gif {\n    width: 200px;\n    height: 200px;\n    object-fit: contain;\n  }\n  \n  .parameter-panel-placeholder {\n    width: 300px;\n    background: rgba(255, 255, 255, 0.1);\n    backdrop-filter: blur(10px);\n  }\n  \n  .panel-skeleton {\n    /* Add loading skeleton animation */\n    animation: pulse 1.5s infinite;\n    background: linear-gradient(90deg, \n      rgba(255,255,255,0.1), \n      rgba(255,255,255,0.2), \n      rgba(255,255,255,0.1)\n    );\n    height: 100%;\n  }\n  \n  @keyframes pulse {\n    0% { opacity: 0.6; }\n    50% { opacity: 0.8; }\n    100% { opacity: 0.6; }\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 4270:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(71354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(76314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `.landing-page {
  min-height: 100vh;
  display: flex;
  align-items: flex-start; /* Changed from center to flex-start */
  justify-content: center;
  color: white;
  position: relative;
  z-index: 1;
  width: 100%;
}

.landing-content {
  text-align: center;
  padding: 2rem;
  margin: auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 4rem); /* Full height minus padding */
}

.text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem; /* Reduced gap between elements */
  width: 100%;
  margin-top: 6rem; /* Add space below header */
}

.main-title {
  color: #FFFFFF;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 5rem; /* Increased from 3.75rem */
  font-style: normal;
  font-weight: 400;
  line-height: 120%;
  letter-spacing: -0.075rem;
  margin: 0;
}

.subtitle-container {
  display: flex;
  padding: 0.75rem 2rem; /* Increased padding */
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 6.25rem;
  background: #2B2B2B;
  margin-top: 0.5rem; /* Reduced space after title */
}

.subtitle {
  color: #FFFFFF;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1rem; /* Slightly increased */
  font-style: normal;
  font-weight: 400;
  line-height: 0.875rem;
  white-space: nowrap; /* Prevent text wrapping */
}

.version-text {
  color: #000;
  text-align: center;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 0.875rem; /* Slightly increased */
  font-style: normal;
  font-weight: 300;
  line-height: 1.125rem;
  margin-top: 0.5rem; /* Reduced space after subtitle */
}

.image-placeholder {
  /* Space for future image */
  flex: 1;
  min-height: 2rem; /* Minimum space between text and button */
}

.design-button {
  display: flex;
  width: 17.6875rem;
  padding: 1rem 1.5rem;
  justify-content: center;
  align-items: center;
  gap: 0.625rem;
  border-radius: 3.125rem;
  background: #181818;
  /* Text styles */
  color: #FFF;
  font-family: "Helvetica Neue", sans-serif;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 500;
  line-height: 1.5rem;
  text-decoration: none; /* Remove default link underline */
  margin-top: 2rem; /* Add some space above the version text */
  transition: background-color 0.2s ease; /* Smooth hover effect */
  margin-bottom: 2rem; /* Add some space from bottom */
}

.design-button:hover {
  background: #2a2a2a; /* Slightly lighter on hover */
}
`, "",{"version":3,"sources":["webpack://./src/static/components/LandingPage/LandingPage.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,aAAa;EACb,uBAAuB,EAAE,sCAAsC;EAC/D,uBAAuB;EACvB,YAAY;EACZ,kBAAkB;EAClB,UAAU;EACV,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,aAAa;EACb,YAAY;EACZ,WAAW;EACX,iBAAiB;EACjB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,8BAA8B;EAC9B,8BAA8B,EAAE,8BAA8B;AAChE;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,YAAY,EAAE,iCAAiC;EAC/C,WAAW;EACX,gBAAgB,EAAE,2BAA2B;AAC/C;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,yCAAyC;EACzC,eAAe,EAAE,2BAA2B;EAC5C,kBAAkB;EAClB,gBAAgB;EAChB,iBAAiB;EACjB,yBAAyB;EACzB,SAAS;AACX;;AAEA;EACE,aAAa;EACb,qBAAqB,EAAE,sBAAsB;EAC7C,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,sBAAsB;EACtB,mBAAmB;EACnB,kBAAkB,EAAE,8BAA8B;AACpD;;AAEA;EACE,cAAc;EACd,kBAAkB;EAClB,yCAAyC;EACzC,eAAe,EAAE,uBAAuB;EACxC,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,mBAAmB,EAAE,0BAA0B;AACjD;;AAEA;EACE,WAAW;EACX,kBAAkB;EAClB,yCAAyC;EACzC,mBAAmB,EAAE,uBAAuB;EAC5C,kBAAkB;EAClB,gBAAgB;EAChB,qBAAqB;EACrB,kBAAkB,EAAE,iCAAiC;AACvD;;AAEA;EACE,2BAA2B;EAC3B,OAAO;EACP,gBAAgB,EAAE,0CAA0C;AAC9D;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,gBAAgB;EAChB,WAAW;EACX,yCAAyC;EACzC,mBAAmB;EACnB,kBAAkB;EAClB,gBAAgB;EAChB,mBAAmB;EACnB,qBAAqB,EAAE,kCAAkC;EACzD,gBAAgB,EAAE,0CAA0C;EAC5D,sCAAsC,EAAE,wBAAwB;EAChE,mBAAmB,EAAE,+BAA+B;AACtD;;AAEA;EACE,mBAAmB,EAAE,8BAA8B;AACrD","sourcesContent":[".landing-page {\n  min-height: 100vh;\n  display: flex;\n  align-items: flex-start; /* Changed from center to flex-start */\n  justify-content: center;\n  color: white;\n  position: relative;\n  z-index: 1;\n  width: 100%;\n}\n\n.landing-content {\n  text-align: center;\n  padding: 2rem;\n  margin: auto;\n  width: 100%;\n  max-width: 1200px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: space-between;\n  min-height: calc(100vh - 4rem); /* Full height minus padding */\n}\n\n.text-container {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.75rem; /* Reduced gap between elements */\n  width: 100%;\n  margin-top: 6rem; /* Add space below header */\n}\n\n.main-title {\n  color: #FFFFFF;\n  text-align: center;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 5rem; /* Increased from 3.75rem */\n  font-style: normal;\n  font-weight: 400;\n  line-height: 120%;\n  letter-spacing: -0.075rem;\n  margin: 0;\n}\n\n.subtitle-container {\n  display: flex;\n  padding: 0.75rem 2rem; /* Increased padding */\n  justify-content: center;\n  align-items: center;\n  gap: 0.625rem;\n  border-radius: 6.25rem;\n  background: #2B2B2B;\n  margin-top: 0.5rem; /* Reduced space after title */\n}\n\n.subtitle {\n  color: #FFFFFF;\n  text-align: center;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 1rem; /* Slightly increased */\n  font-style: normal;\n  font-weight: 400;\n  line-height: 0.875rem;\n  white-space: nowrap; /* Prevent text wrapping */\n}\n\n.version-text {\n  color: #000;\n  text-align: center;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 0.875rem; /* Slightly increased */\n  font-style: normal;\n  font-weight: 300;\n  line-height: 1.125rem;\n  margin-top: 0.5rem; /* Reduced space after subtitle */\n}\n\n.image-placeholder {\n  /* Space for future image */\n  flex: 1;\n  min-height: 2rem; /* Minimum space between text and button */\n}\n\n.design-button {\n  display: flex;\n  width: 17.6875rem;\n  padding: 1rem 1.5rem;\n  justify-content: center;\n  align-items: center;\n  gap: 0.625rem;\n  border-radius: 3.125rem;\n  background: #181818;\n  /* Text styles */\n  color: #FFF;\n  font-family: \"Helvetica Neue\", sans-serif;\n  font-size: 1.125rem;\n  font-style: normal;\n  font-weight: 500;\n  line-height: 1.5rem;\n  text-decoration: none; /* Remove default link underline */\n  margin-top: 2rem; /* Add some space above the version text */\n  transition: background-color 0.2s ease; /* Smooth hover effect */\n  margin-bottom: 2rem; /* Add some space from bottom */\n}\n\n.design-button:hover {\n  background: #2a2a2a; /* Slightly lighter on hover */\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 18522:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {

"use strict";

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(47767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(84976);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/MantineProvider/MantineProvider.mjs + 17 modules
var MantineProvider = __webpack_require__(1774);
;// ./src/shared/theme.ts
const theme = {
    components: {
        Button: {
            styles: {
                root: {
                    background: 'rgba(255, 255, 255, 0.3)',
                    '&:hover': {
                        background: 'rgba(255, 255, 255, 0.4)',
                    },
                },
            },
        },
    },
};
// Add the background styles
const backgroundStyles = {
    gradient: `linear-gradient(
    180deg, 
    rgba(100, 89, 77, 0.00) 4.83%, 
    rgba(100, 89, 77, 0.30) 34.5%, 
    rgba(100, 89, 77, 0.40) 65%
  )`,
    dimensions: {
        width: '95.8125rem',
        height: '70.8125rem'
    }
};

// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(85072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(97825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(77659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(55056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(10540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(41113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/components/Header/Header.css
var Header_Header = __webpack_require__(71949);
;// ./src/shared/components/Header/Header.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Header_Header/* default */.A, options);




       /* harmony default export */ const components_Header_Header = (Header_Header/* default */.A && Header_Header/* default */.A.locals ? Header_Header/* default */.A.locals : undefined);

;// ./src/shared/components/Header/Header.tsx


const Header_Header_Header = () => {
    // Remove all environment and hostname checks
    // Just hardcode all production URLs
    const getHomeUrl = () => 'https://spinlio.com';
    const getContactUrl = () => 'https://contact.spinlio.com';
    return ((0,jsx_runtime.jsx)("header", { className: "header", children: (0,jsx_runtime.jsxs)("div", { className: "header-content", children: [(0,jsx_runtime.jsx)("a", { href: getHomeUrl(), className: "logo", children: "spinlio" }), (0,jsx_runtime.jsxs)("nav", { className: "nav-links", children: [(0,jsx_runtime.jsx)("a", { href: `${getHomeUrl()}/about`, children: "About" }), (0,jsx_runtime.jsx)("a", { href: getContactUrl(), children: "Contact us" })] })] }) }));
};
/* harmony default export */ const shared_components_Header_Header = (Header_Header_Header);

;// ./src/shared/components/Header/index.ts


// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Container/Container.mjs + 1 modules
var Container = __webpack_require__(82659);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Text/Text.mjs + 1 modules
var Text = __webpack_require__(17826);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs
var TextInput = __webpack_require__(57193);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Button/Button.mjs + 7 modules
var Button = __webpack_require__(49501);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/components/Footer/Footer.css
var Footer_Footer = __webpack_require__(38609);
;// ./src/shared/components/Footer/Footer.css

      
      
      
      
      
      
      
      
      

var Footer_options = {};

Footer_options.styleTagTransform = (styleTagTransform_default());
Footer_options.setAttributes = (setAttributesWithoutAttributes_default());
Footer_options.insert = insertBySelector_default().bind(null, "head");
Footer_options.domAPI = (styleDomAPI_default());
Footer_options.insertStyleElement = (insertStyleElement_default());

var Footer_update = injectStylesIntoStyleTag_default()(Footer_Footer/* default */.A, Footer_options);




       /* harmony default export */ const components_Footer_Footer = (Footer_Footer/* default */.A && Footer_Footer/* default */.A.locals ? Footer_Footer/* default */.A.locals : undefined);

;// ./src/shared/components/Footer/Footer.tsx




const Footer_Footer_Footer = () => {
    const [email, setEmail] = (0,react.useState)('');
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Newsletter signup:', email);
        setEmail('');
    };
    return ((0,jsx_runtime.jsx)("footer", { className: "footer", children: (0,jsx_runtime.jsxs)(Container/* Container */.m, { size: "xl", className: "footer-content", children: [(0,jsx_runtime.jsx)(Text/* Text */.E, { className: "footer-text", children: "\u00A9 2024 Spinlio. All Rights Reserved." }), (0,jsx_runtime.jsxs)("form", { onSubmit: handleSubmit, className: "newsletter-form", children: [(0,jsx_runtime.jsx)(TextInput/* TextInput */.k, { placeholder: "Sign up for updates", value: email, onChange: (e) => setEmail(e.target.value), className: "newsletter-input", type: "email", required: true }), (0,jsx_runtime.jsx)(Button/* Button */.$, { type: "submit", className: "newsletter-button", children: "Subscribe" })] })] }) }));
};
/* harmony default export */ const shared_components_Footer_Footer = (Footer_Footer_Footer);

;// ./src/shared/components/Footer/index.ts


;// ./src/shared/components/ErrorBoundary/ErrorBoundary.tsx


class ErrorBoundary extends (react_default()).Component {
    constructor() {
        super(...arguments);
        this.state = {
            hasError: false,
            error: null // Initialize as null instead of undefined
        };
    }
    static getDerivedStateFromError(error) {
        return {
            hasError: true,
            error
        };
    }
    componentDidCatch(error, errorInfo) {
        console.error("Error caught by ErrorBoundary: ", {
            error,
            errorInfo,
            location: window.location.href
        });
    }
    render() {
        if (this.state.hasError && this.state.error) { // Check for both
            return this.props.fallback || ((0,jsx_runtime.jsxs)("div", { style: { padding: '20px', textAlign: 'center' }, children: [(0,jsx_runtime.jsx)("h1", { children: "Something went wrong" }), (0,jsx_runtime.jsx)("p", { children: "Please try refreshing the page" }),  true && ((0,jsx_runtime.jsx)("pre", { children: this.state.error.message }) // Now TypeScript knows error is not null
                    )] }));
        }
        return this.props.children;
    }
}
/* harmony default export */ const ErrorBoundary_ErrorBoundary = (ErrorBoundary);

;// ./src/shared/components/ErrorBoundary/index.ts


;// ./src/shared/components/index.ts




// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/static/components/LandingPage/LandingPage.css
var LandingPage = __webpack_require__(4270);
;// ./src/static/components/LandingPage/LandingPage.css

      
      
      
      
      
      
      
      
      

var LandingPage_options = {};

LandingPage_options.styleTagTransform = (styleTagTransform_default());
LandingPage_options.setAttributes = (setAttributesWithoutAttributes_default());
LandingPage_options.insert = insertBySelector_default().bind(null, "head");
LandingPage_options.domAPI = (styleDomAPI_default());
LandingPage_options.insertStyleElement = (insertStyleElement_default());

var LandingPage_update = injectStylesIntoStyleTag_default()(LandingPage/* default */.A, LandingPage_options);




       /* harmony default export */ const LandingPage_LandingPage = (LandingPage/* default */.A && LandingPage/* default */.A.locals ? LandingPage/* default */.A.locals : undefined);

;// ./src/static/components/LandingPage/LandingPage.tsx



const LandingPage_LandingPage_LandingPage = () => {
    const configuratorUrl = 'https://configurator.spinlio.com';
    useEffect(() => {
        // Keep landing page fast by loading configurator stuff AFTER page is ready
        window.addEventListener('load', () => {
            // Start preloading the configurator bundles in background
            const bundles = [
                '/main.bundle.js',
                '/vendor.react.bundle.js',
                '/vendor.react-dom.bundle.js'
            ];
            bundles.forEach(bundle => {
                const link = document.createElement('link');
                link.rel = 'prefetch'; // Use prefetch instead of preload to not block
                link.as = 'script';
                link.href = bundle;
                document.head.appendChild(link);
            });
        });
    }, []);
    // Landing page renders instantly, preloading happens in background
    return (_jsx("div", { className: "landing-page", children: _jsxs("div", { className: "landing-content", children: [_jsxs("div", { className: "text-container", children: [_jsx("h1", { className: "main-title", children: "3D design, made simple" }), _jsx("div", { className: "subtitle-container", children: _jsx("span", { className: "subtitle", children: "And ready for production - all in one platform" }) }), _jsx("span", { className: "version-text", children: "Beta V0.1" })] }), _jsx("div", { className: "image-placeholder" }), _jsx("a", { href: configuratorUrl, className: "design-button", children: "Design Now" })] }) }));
};
/* harmony default export */ const components_LandingPage_LandingPage = ((/* unused pure expression or super */ null && (LandingPage_LandingPage_LandingPage)));

;// ./src/static/components/LandingPage/index.ts


// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Stack/Stack.mjs + 1 modules
var Stack = __webpack_require__(69019);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Title/Title.mjs + 2 modules
var Title = __webpack_require__(89652);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/CommonPage.css
var CommonPage = __webpack_require__(79798);
;// ./src/shared/styles/CommonPage.css

      
      
      
      
      
      
      
      
      

var CommonPage_options = {};

CommonPage_options.styleTagTransform = (styleTagTransform_default());
CommonPage_options.setAttributes = (setAttributesWithoutAttributes_default());
CommonPage_options.insert = insertBySelector_default().bind(null, "head");
CommonPage_options.domAPI = (styleDomAPI_default());
CommonPage_options.insertStyleElement = (insertStyleElement_default());

var CommonPage_update = injectStylesIntoStyleTag_default()(CommonPage/* default */.A, CommonPage_options);




       /* harmony default export */ const styles_CommonPage = (CommonPage/* default */.A && CommonPage/* default */.A.locals ? CommonPage/* default */.A.locals : undefined);

;// ./src/static/components/AboutPage/AboutPage.tsx



const AboutPage = () => {
    return ((0,jsx_runtime.jsx)("div", { className: "common-page", children: (0,jsx_runtime.jsx)(Container/* Container */.m, { className: "common-content", children: (0,jsx_runtime.jsxs)(Stack/* Stack */.B, { gap: "xl", children: [(0,jsx_runtime.jsx)(Title/* Title */.h, { order: 1, children: "Manifesto" }), (0,jsx_runtime.jsx)(Text/* Text */.E, { ta: "center", children: "Spinlio is a 3D design tool that makes it easy to create physical products." }), (0,jsx_runtime.jsx)(Text/* Text */.E, { ta: "center", children: "Our platform bridges the gap between designers and producers, by providing the tools and environment that makes your ideas not only unique but also ready for production." }), (0,jsx_runtime.jsx)(Text/* Text */.E, { ta: "center", children: "We are an early-stage startup, currently focused on the bicycle industry, with ambitions to expand into all industries. While we're in Beta, we'll be continuously rolling out updates daily to improve your experience so sign up for updates if you want to be part of the ride." })] }) }) }));
};
/* harmony default export */ const AboutPage_AboutPage = (AboutPage);

;// ./src/static/components/AboutPage/index.ts


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/static/components/ConfiguratorTemplate/ConfiguratorTemplate.css
var ConfiguratorTemplate = __webpack_require__(44654);
;// ./src/static/components/ConfiguratorTemplate/ConfiguratorTemplate.css

      
      
      
      
      
      
      
      
      

var ConfiguratorTemplate_options = {};

ConfiguratorTemplate_options.styleTagTransform = (styleTagTransform_default());
ConfiguratorTemplate_options.setAttributes = (setAttributesWithoutAttributes_default());
ConfiguratorTemplate_options.insert = insertBySelector_default().bind(null, "head");
ConfiguratorTemplate_options.domAPI = (styleDomAPI_default());
ConfiguratorTemplate_options.insertStyleElement = (insertStyleElement_default());

var ConfiguratorTemplate_update = injectStylesIntoStyleTag_default()(ConfiguratorTemplate/* default */.A, ConfiguratorTemplate_options);




       /* harmony default export */ const ConfiguratorTemplate_ConfiguratorTemplate = (ConfiguratorTemplate/* default */.A && ConfiguratorTemplate/* default */.A.locals ? ConfiguratorTemplate/* default */.A.locals : undefined);

;// ./src/static/components/ConfiguratorTemplate/ConfiguratorTemplate.tsx

// This lives in the STATIC build (Netlify)



const ConfiguratorTemplate_ConfiguratorTemplate_ConfiguratorTemplate = () => {
    useEffect(() => {
        console.log('ConfiguratorTemplate: Mounted');
        return () => console.log('ConfiguratorTemplate: Unmounted');
    }, []);
    return (_jsxs("div", { className: "app", children: [_jsx(Header, {}), _jsxs("div", { className: "configurator-template", children: [_jsx("div", { className: "share-button-container-configurator", children: _jsx("button", { className: "share-button-configurator", disabled: true, children: "Share" }) }), _jsxs("div", { className: "configurator-content", children: [_jsx("div", { className: "viewer-container", children: _jsx("div", { className: "viewer-placeholder", children: _jsx("img", { src: "https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif", alt: "Loading", className: "loading-gif" }) }) }), _jsx("div", { className: "parameter-panel-placeholder", children: _jsx("div", { className: "panel-skeleton" }) })] })] }), _jsx(Footer, {})] }));
};
/* harmony default export */ const components_ConfiguratorTemplate_ConfiguratorTemplate = ((/* unused pure expression or super */ null && (ConfiguratorTemplate_ConfiguratorTemplate_ConfiguratorTemplate)));

;// ./src/static/components/ConfiguratorTemplate/index.ts


;// ./src/static/components/index.ts




// EXTERNAL MODULE: ./node_modules/lodash.debounce/index.js
var lodash_debounce = __webpack_require__(20181);
var lodash_debounce_default = /*#__PURE__*/__webpack_require__.n(lodash_debounce);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/ParameterPanel.css
var ParameterPanel = __webpack_require__(39181);
;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/ParameterPanel.css

      
      
      
      
      
      
      
      
      

var ParameterPanel_options = {};

ParameterPanel_options.styleTagTransform = (styleTagTransform_default());
ParameterPanel_options.setAttributes = (setAttributesWithoutAttributes_default());
ParameterPanel_options.insert = insertBySelector_default().bind(null, "head");
ParameterPanel_options.domAPI = (styleDomAPI_default());
ParameterPanel_options.insertStyleElement = (insertStyleElement_default());

var ParameterPanel_update = injectStylesIntoStyleTag_default()(ParameterPanel/* default */.A, ParameterPanel_options);




       /* harmony default export */ const ParameterPanel_ParameterPanel = (ParameterPanel/* default */.A && ParameterPanel/* default */.A.locals ? ParameterPanel/* default */.A.locals : undefined);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/GeometryPanel/GeometryPanel.css
var GeometryPanel = __webpack_require__(70876);
;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/GeometryPanel/GeometryPanel.css

      
      
      
      
      
      
      
      
      

var GeometryPanel_options = {};

GeometryPanel_options.styleTagTransform = (styleTagTransform_default());
GeometryPanel_options.setAttributes = (setAttributesWithoutAttributes_default());
GeometryPanel_options.insert = insertBySelector_default().bind(null, "head");
GeometryPanel_options.domAPI = (styleDomAPI_default());
GeometryPanel_options.insertStyleElement = (insertStyleElement_default());

var GeometryPanel_update = injectStylesIntoStyleTag_default()(GeometryPanel/* default */.A, GeometryPanel_options);




       /* harmony default export */ const GeometryPanel_GeometryPanel = (GeometryPanel/* default */.A && GeometryPanel/* default */.A.locals ? GeometryPanel/* default */.A.locals : undefined);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/GeometryPanel/GeometryPanel.tsx



const ParameterPanelGeometry = ({ parameters, parameterValues, handleParameterChange, }) => {
    const [isDragging, setIsDragging] = (0,react.useState)(null);
    const [openDropdown, setOpenDropdown] = (0,react.useState)(null);
    const [dropdownDirection, setDropdownDirection] = (0,react.useState)(null);
    const useFloatValues = (parameterId) => {
        return [
            'f108eb45-6305-4ee7-8840-328004938ac6', // Seat tube angle
            'ac5a259d-c2b7-45c0-af16-4a5782b21f1c', // Head tube angle
        ].includes(parameterId);
    };
    const calculateSliderPosition = (value, min, max) => {
        return ((value - min) / (max - min)) * 100;
    };
    const handleSliderInteraction = (e, definition) => {
        const container = e.currentTarget;
        const rect = container.getBoundingClientRect();
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
        const percentage = x / rect.width;
        const range = definition.max - definition.min;
        const rawValue = definition.min + (range * percentage);
        const value = useFloatValues(definition.id)
            ? Number(rawValue.toFixed(1))
            : Math.round(rawValue);
        handleParameterChange(value, definition);
    };
    const handleDropdownClick = (definitionId) => {
        // Check if dropdown should open upward or downward
        const dropdownElement = document.querySelector(`[data-dropdown-id="${definitionId}"]`);
        if (dropdownElement) {
            const rect = dropdownElement.getBoundingClientRect();
            const spaceBelow = window.innerHeight - rect.bottom;
            const shouldOpenUpward = spaceBelow < 200; // Adjust this value as needed
            setDropdownDirection(shouldOpenUpward ? 'up' : 'down');
        }
        setOpenDropdown(openDropdown === definitionId ? null : definitionId);
    };
    const handleOptionSelect = (value, definition) => {
        handleParameterChange(value, definition);
        setOpenDropdown(null);
    };
    (0,react.useEffect)(() => {
        const handleMouseUp = () => {
            setIsDragging(null);
        };
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('touchend', handleMouseUp);
        return () => {
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('touchend', handleMouseUp);
        };
    }, []);
    (0,react.useEffect)(() => {
        const handleClickOutside = (e) => {
            if (openDropdown && !e.target.closest('.custom-dropdown')) {
                setOpenDropdown(null);
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => document.removeEventListener('click', handleClickOutside);
    }, [openDropdown]);
    return ((0,jsx_runtime.jsx)("div", { className: "parameter-panel-parameters", children: parameters.map((definition) => {
            var _a, _b, _c;
            return ((0,jsx_runtime.jsxs)("div", { className: "parameter-item", children: [(0,jsx_runtime.jsxs)("div", { className: "parameter-header", children: [(0,jsx_runtime.jsx)("span", { className: "param-name", children: definition.name }), definition.type === 'slider' && ((0,jsx_runtime.jsxs)("span", { className: "param-value", children: [useFloatValues(definition.id)
                                        ? Number(parameterValues[definition.id]).toFixed(1)
                                        : Math.round(Number(parameterValues[definition.id])), definition.unit || ''] }))] }), definition.type === 'slider' && ((0,jsx_runtime.jsxs)(jsx_runtime.Fragment, { children: [(0,jsx_runtime.jsxs)("div", { className: "slider-container", onMouseDown: (e) => {
                                    setIsDragging(definition.id);
                                    handleSliderInteraction(e, definition);
                                }, onMouseMove: (e) => {
                                    if (isDragging === definition.id) {
                                        handleSliderInteraction(e, definition);
                                    }
                                }, onTouchStart: (e) => {
                                    setIsDragging(definition.id);
                                    handleSliderInteraction(e, definition);
                                }, onTouchMove: (e) => {
                                    if (isDragging === definition.id) {
                                        handleSliderInteraction(e, definition);
                                    }
                                }, children: [(0,jsx_runtime.jsx)("div", { className: "slider-track" }), (0,jsx_runtime.jsx)("div", { className: `slider-fill ${isDragging === definition.id ? 'active' : ''}`, style: {
                                            width: `${calculateSliderPosition(Number(parameterValues[definition.id]), definition.min, definition.max)}%`
                                        } }), (0,jsx_runtime.jsx)("div", { className: `slider-thumb ${isDragging === definition.id ? 'active' : ''}`, style: {
                                            left: `${calculateSliderPosition(Number(parameterValues[definition.id]), definition.min, definition.max)}%`
                                        } })] }), (0,jsx_runtime.jsxs)("div", { className: "parameter-range", children: [(0,jsx_runtime.jsxs)("span", { children: [definition.min, definition.unit || ''] }), (0,jsx_runtime.jsxs)("span", { children: [definition.max, definition.unit || ''] })] })] })), definition.type === 'dropdown' && ((0,jsx_runtime.jsxs)("div", { className: "custom-dropdown", children: [(0,jsx_runtime.jsxs)("div", { className: "dropdown-header", onClick: () => handleDropdownClick(definition.id), children: [(0,jsx_runtime.jsx)("span", { className: "dropdown-value", children: (_b = (_a = definition.options) === null || _a === void 0 ? void 0 : _a.find(opt => opt.value === parameterValues[definition.id])) === null || _b === void 0 ? void 0 : _b.label }), (0,jsx_runtime.jsxs)("div", { className: "dropdown-arrows", children: [(0,jsx_runtime.jsx)("span", { className: "arrow up", children: "\u25B2" }), (0,jsx_runtime.jsx)("span", { className: "arrow down", children: "\u25BC" })] })] }), (0,jsx_runtime.jsx)("div", { className: `dropdown-options ${openDropdown === definition.id ? 'open' : ''} 
                  ${dropdownDirection === 'up' ? 'open-upward' : 'open-downward'}`, "data-dropdown-id": definition.id, children: (_c = definition.options) === null || _c === void 0 ? void 0 : _c.map(option => ((0,jsx_runtime.jsx)("div", { className: `dropdown-option ${parameterValues[definition.id] === option.value ? 'selected' : ''}`, onClick: () => handleOptionSelect(option.value, definition), children: option.label }, option.value))) })] }))] }, definition.id));
        }) }));
};
/* harmony default export */ const components_GeometryPanel_GeometryPanel = (ParameterPanelGeometry);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/GeometryPanel/index.ts


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/SurfacePanel/SurfacePanel.css
var SurfacePanel = __webpack_require__(44760);
;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/SurfacePanel/SurfacePanel.css

      
      
      
      
      
      
      
      
      

var SurfacePanel_options = {};

SurfacePanel_options.styleTagTransform = (styleTagTransform_default());
SurfacePanel_options.setAttributes = (setAttributesWithoutAttributes_default());
SurfacePanel_options.insert = insertBySelector_default().bind(null, "head");
SurfacePanel_options.domAPI = (styleDomAPI_default());
SurfacePanel_options.insertStyleElement = (insertStyleElement_default());

var SurfacePanel_update = injectStylesIntoStyleTag_default()(SurfacePanel/* default */.A, SurfacePanel_options);




       /* harmony default export */ const SurfacePanel_SurfacePanel = (SurfacePanel/* default */.A && SurfacePanel/* default */.A.locals ? SurfacePanel/* default */.A.locals : undefined);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/SurfacePanel/SurfacePanel.tsx


// Update color mapping to use numbers as keys
const colorMapping = {
    '0': { hex: '#0D0D0D', label: 'Black' },
    '1': { hex: '#2A3439', label: 'Gunmetal Grey' },
    '2': { hex: '#D3D3D3', label: 'Light Grey' },
    '3': { hex: '#4B5320', label: 'Army Green' },
    '4': { hex: '#008080', label: 'Teal' },
    '5': { hex: '#D50000', label: 'Racing Red' },
    '6': { hex: '#A1CAF1', label: 'Baby Blue' },
    '7': { hex: '#F5F5F5', label: 'White' },
    '8': { hex: '#A9ACB6', label: 'Raw Aluminium' },
    '9': { hex: '#B8B8B8', label: 'Nutex' }
};
const ParameterPanelSurface = ({ parameters, parameterValues, handleParameterChange, }) => {
    var _a;
    const colorParameter = parameters.find(p => p.id === '3631ea0d-6d4c-49c2-b998-2c01a7797a01');
    const shapeParameter = parameters.find(p => p.id === '45e7e66b-7c42-4ac2-bef7-596dd49d4bd5');
    return ((0,jsx_runtime.jsxs)("div", { className: "parameter-panel-surface", children: [colorParameter && ((0,jsx_runtime.jsxs)("div", { className: "surface-item", children: [(0,jsx_runtime.jsx)("span", { className: "param-name", children: colorParameter.name }), (0,jsx_runtime.jsx)("div", { className: "color-grid", children: Object.entries(colorMapping).map(([value, { hex, label }]) => ((0,jsx_runtime.jsxs)("div", { className: `color-circle ${parameterValues[colorParameter.id] === value ? 'selected' : ''}`, onClick: () => handleParameterChange(value, colorParameter), children: [(0,jsx_runtime.jsx)("div", { className: "color-dot", style: { backgroundColor: hex } }), (0,jsx_runtime.jsx)("span", { className: "color-label", children: label })] }, value))) })] })), shapeParameter && ((0,jsx_runtime.jsxs)("div", { className: "surface-item", children: [(0,jsx_runtime.jsx)("span", { className: "param-name", children: shapeParameter.name }), (0,jsx_runtime.jsx)("div", { className: "shape-options", children: (_a = shapeParameter.options) === null || _a === void 0 ? void 0 : _a.map((option) => ((0,jsx_runtime.jsx)("div", { className: `shape-option ${parameterValues[shapeParameter.id] === option.value ? 'selected' : ''}`, onClick: () => handleParameterChange(option.value, shapeParameter), children: (0,jsx_runtime.jsx)("span", { children: option.label }) }, option.value))) })] }))] }));
};
/* harmony default export */ const components_SurfacePanel_SurfacePanel = (ParameterPanelSurface);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/SurfacePanel/index.ts


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/HardwarePanel/HardwarePanel.css
var HardwarePanel = __webpack_require__(38316);
;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/HardwarePanel/HardwarePanel.css

      
      
      
      
      
      
      
      
      

var HardwarePanel_options = {};

HardwarePanel_options.styleTagTransform = (styleTagTransform_default());
HardwarePanel_options.setAttributes = (setAttributesWithoutAttributes_default());
HardwarePanel_options.insert = insertBySelector_default().bind(null, "head");
HardwarePanel_options.domAPI = (styleDomAPI_default());
HardwarePanel_options.insertStyleElement = (insertStyleElement_default());

var HardwarePanel_update = injectStylesIntoStyleTag_default()(HardwarePanel/* default */.A, HardwarePanel_options);




       /* harmony default export */ const HardwarePanel_HardwarePanel = (HardwarePanel/* default */.A && HardwarePanel/* default */.A.locals ? HardwarePanel/* default */.A.locals : undefined);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/HardwarePanel/HardwarePanel.tsx


const ParameterPanelHardware = ({ parameters, parameterValues, handleParameterChange, }) => {
    var _a, _b, _c;
    // Find specific parameters
    const frontWaterBottle = parameters.find(p => p.id === 'e55e2d6f-e34a-4a13-bed3-3ab433635dcc');
    const rearWaterBottle = parameters.find(p => p.id === 'b26cf10f-9e0f-4dd0-a2eb-387eb3fc7f51');
    const rearDropouts = parameters.find(p => p.id === 'f63729ec-72df-423c-adbc-7b2a82051f34');
    return ((0,jsx_runtime.jsxs)("div", { className: "parameter-panel-hardware", children: [frontWaterBottle && ((0,jsx_runtime.jsxs)("div", { className: "hardware-item", children: [(0,jsx_runtime.jsx)("span", { className: "param-name", children: frontWaterBottle.name }), (0,jsx_runtime.jsx)("div", { className: "option-buttons", children: (_a = frontWaterBottle.options) === null || _a === void 0 ? void 0 : _a.map((option) => ((0,jsx_runtime.jsx)("button", { className: `option-button ${parameterValues[frontWaterBottle.id] === option.value.toString() ? 'selected' : ''}`, onClick: () => handleParameterChange(option.value, frontWaterBottle), children: option.label }, option.value))) })] })), rearWaterBottle && ((0,jsx_runtime.jsxs)("div", { className: "hardware-item", children: [(0,jsx_runtime.jsx)("span", { className: "param-name", children: rearWaterBottle.name }), (0,jsx_runtime.jsx)("div", { className: "option-buttons", children: (_b = rearWaterBottle.options) === null || _b === void 0 ? void 0 : _b.map((option) => ((0,jsx_runtime.jsx)("button", { className: `option-button ${parameterValues[rearWaterBottle.id] === option.value.toString() ? 'selected' : ''}`, onClick: () => handleParameterChange(option.value, rearWaterBottle), children: option.label }, option.value))) })] })), rearDropouts && ((0,jsx_runtime.jsxs)("div", { className: "hardware-item", children: [(0,jsx_runtime.jsx)("span", { className: "param-name", children: rearDropouts.name }), (0,jsx_runtime.jsx)("div", { className: "option-buttons", children: (_c = rearDropouts.options) === null || _c === void 0 ? void 0 : _c.map((option) => ((0,jsx_runtime.jsx)("button", { className: `option-button ${parameterValues[rearDropouts.id] === option.value.toString() ? 'selected' : ''}`, onClick: () => handleParameterChange(option.value, rearDropouts), children: option.label }, option.value))) })] }))] }));
};
/* harmony default export */ const components_HardwarePanel_HardwarePanel = (ParameterPanelHardware);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/components/HardwarePanel/index.ts


;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/parameterDefinitions.ts
const parameterDefinitions = [
    // Geometry Panel Parameters
    {
        id: 'f108eb45-6305-4ee7-8840-328004938ac6',
        name: 'Seat tube angle',
        type: 'slider',
        value: '71.5',
        min: 69,
        max: 75,
        unit: '°'
    },
    {
        id: '28dbd19d-3f39-48a4-b143-9d357b413ce0',
        name: 'Angle',
        type: 'slider',
        value: '11',
        min: 8,
        max: 20,
        unit: '°'
    },
    {
        id: 'ac5a259d-c2b7-45c0-af16-4a5782b21f1c',
        name: 'Head tube angle',
        type: 'slider',
        value: '74.0',
        min: 69,
        max: 75,
        unit: '°'
    },
    {
        id: 'e42f397c-eb07-434a-9029-d394179bf2f1',
        name: 'Seat tube length',
        type: 'slider',
        value: '462',
        min: 450,
        max: 700,
        unit: 'mm'
    },
    {
        id: '398b031c-826b-481e-9cf8-8628f5d01511',
        name: 'Chain stay length',
        type: 'slider',
        value: '401',
        min: 400,
        max: 420,
        unit: 'mm'
    },
    {
        id: 'e7e25729-2b9e-458a-9bb1-16e0fa675a7c',
        name: 'Top tube length',
        type: 'slider',
        value: '571',
        min: 500,
        max: 600,
        unit: 'mm'
    },
    {
        id: 'e81fe405-a176-41aa-b5f9-7d702e2db52a',
        name: 'Head tube length',
        type: 'slider',
        value: '179',
        min: 160,
        max: 200,
        unit: 'mm'
    },
    {
        id: '38985f41-4db6-448e-b1a0-6689bd26beae',
        name: 'Front bracket width',
        type: 'dropdown',
        value: '0',
        options: [
            { label: '100mm', value: '0' },
            { label: '110mm', value: '1' },
        ],
    },
    {
        id: '33a9c8f9-8ef4-410e-a2c1-36abb60e4e49',
        name: 'Back bracket width',
        type: 'dropdown',
        value: '0',
        options: [
            { label: '130mm', value: '0' },
            { label: '142mm', value: '1' },
        ],
    },
    // Surface Panel Parameters
    {
        id: '3631ea0d-6d4c-49c2-b998-2c01a7797a01',
        name: 'Tube color',
        type: 'dropdown',
        value: '7', // Default to white (7)
        options: [
            { label: 'Black', value: '0' },
            { label: 'Gunmetal Grey', value: '1' },
            { label: 'Light Grey', value: '2' },
            { label: 'Army Green', value: '3' },
            { label: 'Teal', value: '4' },
            { label: 'Racing Red', value: '5' },
            { label: 'Baby Blue', value: '6' },
            { label: 'White', value: '7' },
            { label: 'Raw Aluminium', value: '8' },
            { label: 'Nutex', value: '9' },
        ],
    },
    {
        id: '45e7e66b-7c42-4ac2-bef7-596dd49d4bd5',
        name: 'Top tube shape',
        type: 'dropdown',
        value: '2',
        options: [
            { label: 'Oval', value: '0' },
            { label: 'Capsule', value: '1' },
            { label: 'Hexagon', value: '2' },
            { label: 'Circle', value: '3' },
            { label: 'Triangle', value: '4' },
            { label: 'Square', value: '5' },
        ],
    },
    // Hardware Panel Parameters
    {
        id: 'e55e2d6f-e34a-4a13-bed3-3ab433635dcc',
        name: 'Front water bottle',
        type: 'dropdown',
        value: '0',
        options: [
            { label: 'Yes', value: '0' },
            { label: 'No', value: '1' },
        ],
    },
    {
        id: 'b26cf10f-9e0f-4dd0-a2eb-387eb3fc7f51',
        name: 'Rear water bottle',
        type: 'dropdown',
        value: '0',
        options: [
            { label: 'Yes', value: '0' },
            { label: 'No', value: '1' },
        ],
    },
    {
        id: 'f63729ec-72df-423c-adbc-7b2a82051f34',
        name: 'Rear dropouts',
        type: 'dropdown',
        value: '1',
        options: [
            { label: 'Quick Release', value: '0' },
            { label: 'Bolt Through', value: '1' },
        ],
    },
];

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/ParameterPanel.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




// Import subcomponents from their correct locations



// Import types

const ParameterPanel_ParameterPanel_ParameterPanel = ({ selectedComponent, session, viewport }) => {
    const [activeTab, setActiveTab] = (0,react.useState)('Surface');
    const [parameterValues, setParameterValues] = (0,react.useState)({});
    (0,react.useEffect)(() => {
        // Initialize parameter values
        const initialValues = {};
        parameterDefinitions.forEach((param) => {
            // Convert value to string explicitly
            initialValues[param.id] = param.value.toString();
        });
        setParameterValues(initialValues);
    }, []);
    const debouncedCustomize = (0,react.useCallback)(lodash_debounce_default()((params) => __awaiter(void 0, void 0, void 0, function* () {
        if (!session || !viewport)
            return;
        try {
            yield session.customize(params);
            console.log('Session customized with params:', params);
            if (session.node) {
                yield viewport.updateNode(session.node);
                viewport.update();
                viewport.render();
            }
        }
        catch (error) {
            console.error('Error customizing session:', error);
        }
    }), 500), [session, viewport]);
    const handleParameterChange = (value, definition) => {
        const stringValue = value.toString();
        setParameterValues((prevValues) => (Object.assign(Object.assign({}, prevValues), { [definition.id]: stringValue })));
        debouncedCustomize({ [definition.id]: stringValue });
    };
    if (!session)
        return null;
    const geometryParams = parameterDefinitions.filter(param => [
        'f108eb45-6305-4ee7-8840-328004938ac6', // Seat tube angle
        '28dbd19d-3f39-48a4-b143-9d357b413ce0', // Angle
        'ac5a259d-c2b7-45c0-af16-4a5782b21f1c', // Head tube angle
        'e42f397c-eb07-434a-9029-d394179bf2f1', // Seat tube length
        '398b031c-826b-481e-9cf8-8628f5d01511', // Chain stay length
        'e7e25729-2b9e-458a-9bb1-16e0fa675a7c', // Top tube length
        'e81fe405-a176-41aa-b5f9-7d702e2db52a', // Head tube length
        '38985f41-4db6-448e-b1a0-6689bd26beae', // Front bracket width
        '33a9c8f9-8ef4-410e-a2c1-36abb60e4e49', // Back bracket width
    ].includes(param.id));
    const surfaceParams = parameterDefinitions.filter(param => [
        '3631ea0d-6d4c-49c2-b998-2c01a7797a01', // Tube color
        '45e7e66b-7c42-4ac2-bef7-596dd49d4bd5', // Top tube shape
    ].includes(param.id));
    const hardwareParams = parameterDefinitions.filter(param => [
        'e55e2d6f-e34a-4a13-bed3-3ab433635dcc', // Front water bottle
        'b26cf10f-9e0f-4dd0-a2eb-387eb3fc7f51', // Rear water bottle
        'f63729ec-72df-423c-adbc-7b2a82051f34', // Rear dropouts
    ].includes(param.id));
    return ((0,jsx_runtime.jsxs)("div", { className: "parameter-panel", children: [(0,jsx_runtime.jsx)("div", { className: "tab-navigation", children: ['Surface', 'Geometry', 'Hardware'].map((tab) => ((0,jsx_runtime.jsx)("button", { className: `tab-button ${activeTab === tab ? 'active' : ''}`, "data-tab": tab, onClick: () => setActiveTab(tab), children: tab }, tab))) }), (0,jsx_runtime.jsxs)("div", { className: "panel-content", children: [activeTab === 'Geometry' && ((0,jsx_runtime.jsx)(components_GeometryPanel_GeometryPanel, { parameters: geometryParams, parameterValues: parameterValues, handleParameterChange: handleParameterChange })), activeTab === 'Surface' && ((0,jsx_runtime.jsx)(components_SurfacePanel_SurfacePanel, { parameters: surfaceParams, parameterValues: parameterValues, handleParameterChange: handleParameterChange })), activeTab === 'Hardware' && ((0,jsx_runtime.jsx)(components_HardwarePanel_HardwarePanel, { parameters: hardwareParams, parameterValues: parameterValues, handleParameterChange: handleParameterChange }))] })] }));
};
/* harmony default export */ const components_ParameterPanel_ParameterPanel = (ParameterPanel_ParameterPanel_ParameterPanel);

;// ./src/dynamic/components/ConfiguratorPage/components/ParameterPanel/index.ts


// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Select/Select.mjs + 73 modules
var Select = __webpack_require__(81387);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Modal/Modal.mjs + 27 modules
var Modal = __webpack_require__(82455);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Image/Image.mjs + 1 modules
var Image = __webpack_require__(31074);
// EXTERNAL MODULE: ./node_modules/@shapediver/viewer/dist/index.js
var viewer_dist = __webpack_require__(66032);
;// ./src/utils/exportUtils.ts
var exportUtils_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const sendNotification = (title, message) => {
    if (Notification.permission === 'granted') {
        new Notification(title, { body: message });
    }
    else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(title, { body: message });
            }
        });
    }
};
const fetchFileWithToken = (url_1, filename_1, ...args_1) => exportUtils_awaiter(void 0, [url_1, filename_1, ...args_1], void 0, function* (url, filename, token = null) {
    try {
        const res = yield fetch(url, Object.assign({}, (token ? { headers: { Authorization: token } } : {})));
        const blob = yield res.blob();
        const modelFile = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.style.display = "none";
        link.href = modelFile;
        link.download = filename;
        link.click();
        URL.revokeObjectURL(link.href);
    }
    catch (e) {
        console.log(e);
    }
});
const dataURLtoBlob = (dataURL) => {
    const arr = dataURL.split(",");
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = window.atob(arr[1]);
    let n = bstr.length;
    const u8arr = new Uint8Array(n);
    while (n--)
        u8arr[n] = bstr.charCodeAt(n);
    return new Blob([u8arr], { type: mime });
};

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/components/ExportMenu/ExportMenu.css
var ExportMenu = __webpack_require__(97245);
;// ./src/dynamic/components/ConfiguratorPage/components/ExportMenu/ExportMenu.css

      
      
      
      
      
      
      
      
      

var ExportMenu_options = {};

ExportMenu_options.styleTagTransform = (styleTagTransform_default());
ExportMenu_options.setAttributes = (setAttributesWithoutAttributes_default());
ExportMenu_options.insert = insertBySelector_default().bind(null, "head");
ExportMenu_options.domAPI = (styleDomAPI_default());
ExportMenu_options.insertStyleElement = (insertStyleElement_default());

var ExportMenu_update = injectStylesIntoStyleTag_default()(ExportMenu/* default */.A, ExportMenu_options);




       /* harmony default export */ const ExportMenu_ExportMenu = (ExportMenu/* default */.A && ExportMenu/* default */.A.locals ? ExportMenu/* default */.A.locals : undefined);

;// ./src/dynamic/components/ConfiguratorPage/components/ExportMenu/ExportMenu.tsx
var ExportMenu_awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




 // Update path

const ExportMenu_ExportMenu_ExportMenu = ({ session, viewport, onClose }) => {
    const [selectedFormat, setSelectedFormat] = (0,react.useState)('PNG');
    const [qrCodeUrl, setQrCodeUrl] = (0,react.useState)(null);
    const [showQrModal, setShowQrModal] = (0,react.useState)(false);
    const handleARPreview = () => ExportMenu_awaiter(void 0, void 0, void 0, function* () {
        if (viewport) {
            const token = viewport.addFlag(viewer_dist.FLAG_TYPE.BUSY_MODE);
            try {
                if (viewport.viewableInAR()) {
                    yield viewport.viewInAR();
                }
                else {
                    const qr = yield viewport.createArSessionLink(undefined, true);
                    setQrCodeUrl(qr);
                    setShowQrModal(true);
                }
            }
            catch (error) {
                console.error('Error in AR view:', error);
                sendNotification('AR Preview Failed', 'An error occurred while preparing AR view.');
            }
            finally {
                viewport.removeFlag(token);
            }
        }
        else {
            sendNotification('AR Preview Failed', 'Viewport is not available.');
        }
    });
    const handleExport = (action) => ExportMenu_awaiter(void 0, void 0, void 0, function* () {
        if (!session || !viewport) {
            sendNotification('Export failed', 'No active session or viewport');
            return;
        }
        try {
            if (selectedFormat === 'PNG') {
                yield handleExportPNG(action);
            }
            else {
                yield handle3DExport(selectedFormat, action);
            }
        }
        catch (error) {
            console.error(`Error exporting ${selectedFormat}:`, error);
            sendNotification('Export failed', `An error occurred while exporting the ${selectedFormat} file.`);
        }
    });
    const handleExportPNG = (action) => ExportMenu_awaiter(void 0, void 0, void 0, function* () {
        if (!session || !viewport) {
            console.error("No session or viewport available");
            sendNotification("Export failed", "No session or viewport available");
            return;
        }
        try {
            console.log("Taking screenshot...");
            const screenshotData = viewport.getScreenshot();
            yield new Promise((resolve) => setTimeout(resolve, 10));
            console.log("Converting screenshot to blob...");
            const screenShotAsBlob = dataURLtoBlob(screenshotData);
            console.log("Getting screenshot parameter...");
            const screenshotParameter = session.getParameterByName("screenshot")[0];
            if (!screenshotParameter) {
                console.error("Screenshot parameter not found");
                sendNotification("Export failed", "Screenshot parameter not found");
                return;
            }
            console.log("Uploading screenshot...");
            screenshotParameter.value = screenShotAsBlob;
            const fileUploadId = yield screenshotParameter.upload();
            console.log("Getting screenshot export...");
            const screenshotExport = session.getExportByName("screenshot")[0];
            if (!screenshotExport) {
                console.error("Screenshot export not found");
                sendNotification("Export failed", "Screenshot export not found");
                return;
            }
            console.log("Requesting screenshot export...");
            const result = yield screenshotExport.request({
                [screenshotParameter.name]: fileUploadId
            });
            if (result.content && result.content[0]) {
                const filename = `${result.filename}.${result.content[0].format}`;
                if (action === 'download') {
                    console.log("Downloading PNG...");
                    yield fetchFileWithToken(result.content[0].href, filename, session.jwtToken);
                    sendNotification("Export successful", "Your PNG has been downloaded.");
                }
                else {
                    console.log("Sending PNG via email...");
                    // Implement email sending logic here
                    sendNotification("Export successful", "Your PNG has been sent via email.");
                }
            }
            else {
                console.error("Export failed", result.msg || "Unknown error occurred");
                sendNotification("Export failed", result.msg || "Unknown error occurred");
            }
        }
        catch (error) {
            console.error("Error exporting PNG:", error);
            sendNotification("Export failed", "An error occurred while exporting the PNG.");
        }
    });
    const handle3DExport = (format, action) => ExportMenu_awaiter(void 0, void 0, void 0, function* () {
        if (!session) {
            console.error("No active session");
            sendNotification("Export failed", "No active session");
            return;
        }
        try {
            console.log(`Exporting ${format} model...`);
            const exportName = `Export${format}Model`;
            console.log(`Looking for export: ${exportName}`);
            const exportObject = session.getExportByName(exportName)[0];
            if (!exportObject) {
                console.error(`No export found for ${format}`);
                sendNotification("Export failed", `No export found for ${format}`);
                return;
            }
            console.log("Requesting export...");
            const result = yield exportObject.request();
            if (result.content && result.content[0]) {
                const filename = `${result.filename}.${result.content[0].format}`;
                if (action === 'download') {
                    console.log(`Downloading ${format} model...`);
                    yield fetchFileWithToken(result.content[0].href, filename, session.jwtToken);
                    sendNotification("Export successful", `Your ${format} model has been downloaded.`);
                }
                else {
                    console.log(`Sending ${format} model via email...`);
                    // Implement email sending logic here
                    sendNotification("Export successful", `Your ${format} model has been sent via email.`);
                }
            }
            else {
                console.error("Export failed", result.msg || "Unknown error occurred");
                sendNotification("Export failed", result.msg || "Unknown error occurred");
            }
        }
        catch (error) {
            console.error(`Error exporting ${format}:`, error);
            sendNotification("Export failed", `An error occurred while exporting the ${format} model.`);
        }
    });
    return ((0,jsx_runtime.jsxs)("div", { className: "export-menu", children: [(0,jsx_runtime.jsxs)("div", { className: "export-menu-content", children: [(0,jsx_runtime.jsx)(Button/* Button */.$, { onClick: handleARPreview, fullWidth: true, children: "AR Preview" }), (0,jsx_runtime.jsx)(Select/* Select */.l, { label: "Export Format", value: selectedFormat, onChange: (value) => setSelectedFormat(value), data: [
                            { value: 'PNG', label: 'PNG' },
                            { value: 'OBJ', label: 'OBJ' },
                            { value: 'STL', label: 'STL' },
                            { value: 'FBX', label: 'FBX' },
                            { value: 'GLTF', label: 'GLTF' },
                        ], style: { width: '100%', marginTop: '12px' } }), (0,jsx_runtime.jsxs)("div", { className: "export-actions", children: [(0,jsx_runtime.jsx)(Button/* Button */.$, { onClick: () => handleExport('download'), fullWidth: true, children: "Download" }), (0,jsx_runtime.jsx)(Button/* Button */.$, { onClick: () => handleExport('email'), fullWidth: true, children: "Send via Email" })] }), (0,jsx_runtime.jsx)(Button/* Button */.$, { className: "close-button", onClick: onClose, fullWidth: true, children: "Close" })] }), (0,jsx_runtime.jsx)(Modal/* Modal */.a, { opened: showQrModal, onClose: () => setShowQrModal(false), title: "AR QR Code", children: qrCodeUrl && (0,jsx_runtime.jsx)(Image/* Image */._, { src: qrCodeUrl, alt: "AR QR Code" }) })] }));
};
/* harmony default export */ const components_ExportMenu_ExportMenu = (ExportMenu_ExportMenu_ExportMenu);

;// ./src/dynamic/components/ConfiguratorPage/components/ExportMenu/index.ts


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/ConfiguratorPage.css
var ConfiguratorPage = __webpack_require__(29771);
;// ./src/dynamic/components/ConfiguratorPage/ConfiguratorPage.css

      
      
      
      
      
      
      
      
      

var ConfiguratorPage_options = {};

ConfiguratorPage_options.styleTagTransform = (styleTagTransform_default());
ConfiguratorPage_options.setAttributes = (setAttributesWithoutAttributes_default());
ConfiguratorPage_options.insert = insertBySelector_default().bind(null, "head");
ConfiguratorPage_options.domAPI = (styleDomAPI_default());
ConfiguratorPage_options.insertStyleElement = (insertStyleElement_default());

var ConfiguratorPage_update = injectStylesIntoStyleTag_default()(ConfiguratorPage/* default */.A, ConfiguratorPage_options);




       /* harmony default export */ const ConfiguratorPage_ConfiguratorPage = (ConfiguratorPage/* default */.A && ConfiguratorPage/* default */.A.locals ? ConfiguratorPage/* default */.A.locals : undefined);

;// ./src/dynamic/components/ConfiguratorPage/ConfiguratorPage.tsx







// Lazy load ShapeDiverViewer
const ShapeDiverViewer = react_default().lazy(() => __webpack_require__.e(/* import() */ 96).then(__webpack_require__.bind(__webpack_require__, 40096)).then(module => ({
    default: module.default
})));
// Loading spinner component
const LoadingSpinner = () => ((0,jsx_runtime.jsxs)("div", { className: "loading-spinner", children: [(0,jsx_runtime.jsx)("div", { className: "spinner" }), (0,jsx_runtime.jsx)("p", { children: "Loading 3D Viewer..." })] }));
const ConfiguratorPage_ConfiguratorPage_ConfiguratorPage = () => {
    const navigate = (0,dist/* useNavigate */.Zp)();
    const [selectedComponent, setSelectedComponent] = (0,react.useState)('');
    const [session, setSession] = (0,react.useState)(null);
    const [viewport, setViewport] = (0,react.useState)(null);
    const [showExportMenu, setShowExportMenu] = (0,react.useState)(false);
    const [qrCodeUrl, setQrCodeUrl] = (0,react.useState)(null);
    const [showQrModal, setShowQrModal] = (0,react.useState)(false);
    const handleExportClick = () => {
        setShowExportMenu(!showExportMenu);
    };
    return ((0,jsx_runtime.jsxs)("div", { className: "configurator-page", children: [(0,jsx_runtime.jsxs)("div", { className: "share-button-container-configurator", children: [(0,jsx_runtime.jsx)("button", { className: "share-button-configurator", onClick: handleExportClick, children: "Share" }), showExportMenu && ((0,jsx_runtime.jsx)("div", { className: "export-menu-wrapper", children: (0,jsx_runtime.jsx)(components_ExportMenu_ExportMenu, { session: session, viewport: viewport, onClose: () => setShowExportMenu(false) }) }))] }), (0,jsx_runtime.jsxs)("div", { className: "configurator-content", children: [(0,jsx_runtime.jsx)("div", { className: "viewer-container", children: (0,jsx_runtime.jsx)(react.Suspense, { fallback: (0,jsx_runtime.jsx)(LoadingSpinner, {}), children: (0,jsx_runtime.jsx)(ShapeDiverViewer, { session: session, setSession: setSession, setViewport: setViewport }) }) }), (0,jsx_runtime.jsx)("div", { className: "parameter-panel-container", children: (0,jsx_runtime.jsx)(components_ParameterPanel_ParameterPanel, { selectedComponent: selectedComponent, session: session, viewport: viewport }) })] }), (0,jsx_runtime.jsx)(Modal/* Modal */.a, { opened: showQrModal, onClose: () => setShowQrModal(false), title: "AR QR Code", children: qrCodeUrl && (0,jsx_runtime.jsx)("img", { src: qrCodeUrl, alt: "AR QR Code", style: { width: '100%' } }) })] }));
};
/* harmony default export */ const components_ConfiguratorPage_ConfiguratorPage = (ConfiguratorPage_ConfiguratorPage_ConfiguratorPage);

;// ./src/dynamic/components/ConfiguratorPage/index.ts


;// ./src/dynamic/components/ContactUsPage/ContactUsPage.tsx



 // Updated import path
const ContactUsPage = () => {
    (0,react.useEffect)(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        script.async = true;
        script.defer = true;
        document.body.appendChild(script);
        script.onload = () => {
            if (window.hbspt) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "47840965",
                    formId: "131d4fe9-52f6-45e1-adc9-3a112f6f345e",
                    target: '#hubspotForm'
                });
            }
        };
        return () => {
            document.body.removeChild(script);
        };
    }, []);
    return ((0,jsx_runtime.jsx)("div", { className: "common-page", children: (0,jsx_runtime.jsxs)(Container/* Container */.m, { className: "common-content", children: [(0,jsx_runtime.jsx)(Title/* Title */.h, { order: 1, children: "Contact Us" }), (0,jsx_runtime.jsx)(Text/* Text */.E, { mb: "xl", children: "Get in touch with us for any inquiries or feedback." }), (0,jsx_runtime.jsx)("div", { id: "hubspotForm" })] }) }));
};
/* harmony default export */ const ContactUsPage_ContactUsPage = (ContactUsPage);

;// ./src/dynamic/components/ContactUsPage/index.ts


;// ./src/dynamic/components/index.ts




;// ./src/dynamic/components/App/App.tsx








const App = () => {
    const hostname = window.location.hostname;
    const isDevelopment = "development" === 'development';
    const port = window.location.port;
    // Helper function to determine which component to show
    const getMainComponent = () => {
        if (isDevelopment) {
            // In development, use port to determine component
            if (port === '3001') {
                const path = window.location.pathname;
                if (path.includes('/contact'))
                    return (0,jsx_runtime.jsx)(ContactUsPage_ContactUsPage, {});
                return (0,jsx_runtime.jsx)(components_ConfiguratorPage_ConfiguratorPage, {});
            }
            return (0,jsx_runtime.jsx)(dist/* Navigate */.C5, { to: "http://localhost:3000" });
        }
        // Production logic
        if (hostname === 'configurator.spinlio.com')
            return (0,jsx_runtime.jsx)(components_ConfiguratorPage_ConfiguratorPage, {});
        if (hostname === 'contact.spinlio.com')
            return (0,jsx_runtime.jsx)(ContactUsPage_ContactUsPage, {});
        return (0,jsx_runtime.jsx)(dist/* Navigate */.C5, { to: "https://spinlio.com" });
    };
    return ((0,jsx_runtime.jsx)(ErrorBoundary_ErrorBoundary, { children: (0,jsx_runtime.jsx)(MantineProvider/* MantineProvider */.y, { theme: theme, children: (0,jsx_runtime.jsx)(react_router_dom_dist/* BrowserRouter */.Kd, { children: (0,jsx_runtime.jsxs)("div", { className: "app", children: [(0,jsx_runtime.jsx)(shared_components_Header_Header, {}), (0,jsx_runtime.jsxs)(dist/* Routes */.BV, { children: [(0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/", element: getMainComponent() }), (0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/configurator", element: getMainComponent() }), (0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/contact", element: getMainComponent() }), (0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/about", element: (0,jsx_runtime.jsx)(AboutPage_AboutPage, {}) }), (0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "*", element: (0,jsx_runtime.jsx)(dist/* Navigate */.C5, { to: "/" }) })] }), (0,jsx_runtime.jsx)(shared_components_Footer_Footer, {})] }) }) }) }));
};
/* harmony default export */ const App_App = (App);

;// ./src/dynamic/components/App/index.ts


// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/global.css
var global = __webpack_require__(39609);
;// ./src/shared/styles/global.css

      
      
      
      
      
      
      
      
      

var global_options = {};

global_options.styleTagTransform = (styleTagTransform_default());
global_options.setAttributes = (setAttributesWithoutAttributes_default());
global_options.insert = insertBySelector_default().bind(null, "head");
global_options.domAPI = (styleDomAPI_default());
global_options.insertStyleElement = (insertStyleElement_default());

var global_update = injectStylesIntoStyleTag_default()(global/* default */.A, global_options);




       /* harmony default export */ const styles_global = (global/* default */.A && global/* default */.A.locals ? global/* default */.A.locals : undefined);

;// ./src/dynamic/index.tsx



 // Updated path
 // Import global styles
const root = client.createRoot(document.getElementById('root'));
root.render((0,jsx_runtime.jsx)((react_default()).StrictMode, { children: (0,jsx_runtime.jsx)(App_App, {}) }));


/***/ }),

/***/ 98108:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "images/background_final_last.png";

/***/ }),

/***/ 89104:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 19040:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 33871:
/***/ (() => {

/* (ignored) */

/***/ }),

/***/ 41851:
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [593,997,184,922,514,362,631,329,49,689,936], () => (__webpack_exec__(18522)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.bundle.js.map