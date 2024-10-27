"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[792],{

/***/ 8609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
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

/***/ 1949:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
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

/***/ 9798:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
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

/***/ 9609:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4417);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(9507), __webpack_require__.b);
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

/***/ 4654:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
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

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1354);
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6314);
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

/***/ 1380:
/***/ ((__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) => {


// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(4848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
var react_default = /*#__PURE__*/__webpack_require__.n(react);
// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react-router/dist/index.js
var dist = __webpack_require__(7767);
// EXTERNAL MODULE: ./node_modules/react-router-dom/dist/index.js
var react_router_dom_dist = __webpack_require__(4976);
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
var injectStylesIntoStyleTag = __webpack_require__(5072);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7825);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(7659);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(5056);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(540);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(1113);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/components/Header/Header.css
var Header = __webpack_require__(1949);
;// ./src/shared/components/Header/Header.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Header/* default */.A, options);




       /* harmony default export */ const Header_Header = (Header/* default */.A && Header/* default */.A.locals ? Header/* default */.A.locals : undefined);

;// ./src/shared/components/Header/Header.tsx


const Header_Header_Header = () => {
    // Remove all environment and hostname checks
    // Just hardcode all production URLs
    const getHomeUrl = () => 'https://spinlio.com';
    const getContactUrl = () => 'https://contact.spinlio.com';
    return ((0,jsx_runtime.jsx)("header", { className: "header", children: (0,jsx_runtime.jsxs)("div", { className: "header-content", children: [(0,jsx_runtime.jsx)("a", { href: getHomeUrl(), className: "logo", children: "spinlio" }), (0,jsx_runtime.jsxs)("nav", { className: "nav-links", children: [(0,jsx_runtime.jsx)("a", { href: `${getHomeUrl()}/about`, children: "About" }), (0,jsx_runtime.jsx)("a", { href: getContactUrl(), children: "Contact us" })] })] }) }));
};
/* harmony default export */ const components_Header_Header = (Header_Header_Header);

;// ./src/shared/components/Header/index.ts


// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Container/Container.mjs + 1 modules
var Container = __webpack_require__(2659);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Text/Text.mjs + 1 modules
var Text = __webpack_require__(7826);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/TextInput/TextInput.mjs + 15 modules
var TextInput = __webpack_require__(6334);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Button/Button.mjs + 16 modules
var Button = __webpack_require__(8998);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/components/Footer/Footer.css
var Footer = __webpack_require__(8609);
;// ./src/shared/components/Footer/Footer.css

      
      
      
      
      
      
      
      
      

var Footer_options = {};

Footer_options.styleTagTransform = (styleTagTransform_default());
Footer_options.setAttributes = (setAttributesWithoutAttributes_default());
Footer_options.insert = insertBySelector_default().bind(null, "head");
Footer_options.domAPI = (styleDomAPI_default());
Footer_options.insertStyleElement = (insertStyleElement_default());

var Footer_update = injectStylesIntoStyleTag_default()(Footer/* default */.A, Footer_options);




       /* harmony default export */ const Footer_Footer = (Footer/* default */.A && Footer/* default */.A.locals ? Footer/* default */.A.locals : undefined);

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
/* harmony default export */ const components_Footer_Footer = (Footer_Footer_Footer);

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
    (0,react.useEffect)(() => {
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
    return ((0,jsx_runtime.jsx)("div", { className: "landing-page", children: (0,jsx_runtime.jsxs)("div", { className: "landing-content", children: [(0,jsx_runtime.jsxs)("div", { className: "text-container", children: [(0,jsx_runtime.jsx)("h1", { className: "main-title", children: "3D design, made simple" }), (0,jsx_runtime.jsx)("div", { className: "subtitle-container", children: (0,jsx_runtime.jsx)("span", { className: "subtitle", children: "And ready for production - all in one platform" }) }), (0,jsx_runtime.jsx)("span", { className: "version-text", children: "Beta V0.1" })] }), (0,jsx_runtime.jsx)("div", { className: "image-placeholder" }), (0,jsx_runtime.jsx)("a", { href: configuratorUrl, className: "design-button", children: "Design Now" })] }) }));
};
/* harmony default export */ const components_LandingPage_LandingPage = (LandingPage_LandingPage_LandingPage);

;// ./src/static/components/LandingPage/index.ts


// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Stack/Stack.mjs + 1 modules
var Stack = __webpack_require__(9019);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Title/Title.mjs + 2 modules
var Title = __webpack_require__(9652);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/CommonPage.css
var CommonPage = __webpack_require__(9798);
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
var ConfiguratorTemplate = __webpack_require__(4654);
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
    (0,react.useEffect)(() => {
        console.log('ConfiguratorTemplate: Mounted');
        return () => console.log('ConfiguratorTemplate: Unmounted');
    }, []);
    return ((0,jsx_runtime.jsxs)("div", { className: "app", children: [(0,jsx_runtime.jsx)(components_Header_Header, {}), (0,jsx_runtime.jsxs)("div", { className: "configurator-template", children: [(0,jsx_runtime.jsx)("div", { className: "share-button-container-configurator", children: (0,jsx_runtime.jsx)("button", { className: "share-button-configurator", disabled: true, children: "Share" }) }), (0,jsx_runtime.jsxs)("div", { className: "configurator-content", children: [(0,jsx_runtime.jsx)("div", { className: "viewer-container", children: (0,jsx_runtime.jsx)("div", { className: "viewer-placeholder", children: (0,jsx_runtime.jsx)("img", { src: "https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif", alt: "Loading", className: "loading-gif" }) }) }), (0,jsx_runtime.jsx)("div", { className: "parameter-panel-placeholder", children: (0,jsx_runtime.jsx)("div", { className: "panel-skeleton" }) })] })] }), (0,jsx_runtime.jsx)(components_Footer_Footer, {})] }));
};
/* harmony default export */ const components_ConfiguratorTemplate_ConfiguratorTemplate = (ConfiguratorTemplate_ConfiguratorTemplate_ConfiguratorTemplate);

;// ./src/static/components/ConfiguratorTemplate/index.ts


;// ./src/static/components/index.ts




;// ./src/static/App.tsx








const AppContent = () => {
    (0,react.useEffect)(() => {
        // Debug image loading
        const img = new Image();
        img.src = '/images/background_final_last.png';
        img.onload = () => console.log('Background loaded');
        img.onerror = (e) => console.error('Background failed to load:', e);
    }, []);
    (0,react.useEffect)(() => {
        console.log('Static App: Background should be loaded from cache');
        const img = new Image();
        img.src = '/images/background_final_last.png';
        img.onload = () => console.log('Static App: Background loaded');
        img.onerror = (e) => console.error('Static App: Background failed:', e);
    }, []);
    return ((0,jsx_runtime.jsxs)("div", { className: "app", children: [(0,jsx_runtime.jsx)(components_Header_Header, {}), (0,jsx_runtime.jsx)("main", { className: "main-content", children: (0,jsx_runtime.jsxs)(dist/* Routes */.BV, { children: [(0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/", element: (0,jsx_runtime.jsx)(components_LandingPage_LandingPage, {}) }), (0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/about", element: (0,jsx_runtime.jsx)(AboutPage_AboutPage, {}) }), (0,jsx_runtime.jsx)(dist/* Route */.qh, { path: "/configurator", element: (0,jsx_runtime.jsx)(components_ConfiguratorTemplate_ConfiguratorTemplate, {}) })] }) }), (0,jsx_runtime.jsx)(components_Footer_Footer, {})] }));
};
const App = () => {
    return ((0,jsx_runtime.jsx)(ErrorBoundary_ErrorBoundary, { children: (0,jsx_runtime.jsx)(MantineProvider/* MantineProvider */.y, { theme: theme, children: (0,jsx_runtime.jsx)(react_router_dom_dist/* BrowserRouter */.Kd, { children: (0,jsx_runtime.jsx)(AppContent, {}) }) }) }));
};
/* harmony default export */ const static_App = (App);

// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/shared/styles/global.css
var global = __webpack_require__(9609);
;// ./src/shared/styles/global.css

      
      
      
      
      
      
      
      
      

var global_options = {};

global_options.styleTagTransform = (styleTagTransform_default());
global_options.setAttributes = (setAttributesWithoutAttributes_default());
global_options.insert = insertBySelector_default().bind(null, "head");
global_options.domAPI = (styleDomAPI_default());
global_options.insertStyleElement = (insertStyleElement_default());

var global_update = injectStylesIntoStyleTag_default()(global/* default */.A, global_options);




       /* harmony default export */ const styles_global = (global/* default */.A && global/* default */.A.locals ? global/* default */.A.locals : undefined);

;// ./src/static/index.tsx




 // Import global styles
const startTime = performance.now();
const root = client.createRoot(document.getElementById('root'));
root.render((0,jsx_runtime.jsx)((react_default()).StrictMode, { children: (0,jsx_runtime.jsx)(static_App, {}) }));
console.log(`Initial render took: ${performance.now() - startTime}ms`);
// Add performance markers
performance.mark('static-app-start');
// In your App.tsx or main component
(0,react.useEffect)(() => {
    performance.mark('static-app-loaded');
    performance.measure('static-app-total', 'static-app-start', 'static-app-loaded');
    const measurements = performance.getEntriesByType('measure');
    console.log('Performance metrics:', {
        totalLoad: measurements[0].duration.toFixed(2) + 'ms',
        resourceCount: performance.getEntriesByType('resource').length,
        scriptCount: document.scripts.length
    });
    // Log bundle sizes
    const resources = performance.getEntriesByType('resource');
    console.table(resources
        .filter(r => r.name.includes('vendor'))
        .map(r => ({
        name: r.name.split('/').pop(),
        size: (r.transferSize / 1024).toFixed(2) + 'KB',
        duration: r.duration.toFixed(2) + 'ms'
    })));
}, []);


/***/ }),

/***/ 9507:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "images/background_final_last.6bf8572ffadb51774232.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, [284,399,546], () => (__webpack_exec__(1380)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.7a3d47641d2b65b46367.js.map