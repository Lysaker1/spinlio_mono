"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[96],{

/***/ 40029:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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
___CSS_LOADER_EXPORT___.push([module.id, `.viewerContainer {
    width: 100%;
    height: 100%;
    position: relative;
  }
  
  .viewerCanvas {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
  
  .loadingOverlay {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(197, 9, 9, 0.2); /* Semi-transparent background */
  }
  
  .loadingGif {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }`, "",{"version":3,"sources":["webpack://./src/dynamic/components/ConfiguratorPage/components/ShapeDiverViewer/ShapeDiverViewer.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;EACpB;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,MAAM;IACN,OAAO;EACT;;EAEA;IACE,aAAa;IACb,uBAAuB;IACvB,mBAAmB;IACnB,sCAAsC,EAAE,gCAAgC;EAC1E;;EAEA;IACE,WAAW;IACX,YAAY;IACZ,mBAAmB;EACrB","sourcesContent":[".viewerContainer {\n    width: 100%;\n    height: 100%;\n    position: relative;\n  }\n  \n  .viewerCanvas {\n    width: 100%;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    left: 0;\n  }\n  \n  .loadingOverlay {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: rgba(197, 9, 9, 0.2); /* Semi-transparent background */\n  }\n  \n  .loadingGif {\n    width: 100%;\n    height: 100%;\n    object-fit: contain;\n  }"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 40096:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* reexport */ components_ShapeDiverViewer_ShapeDiverViewer)
});

// EXTERNAL MODULE: ./node_modules/react/jsx-runtime.js
var jsx_runtime = __webpack_require__(74848);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(96540);
// EXTERNAL MODULE: ./node_modules/@shapediver/viewer/dist/index.js
var dist = __webpack_require__(66032);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/core/Box/Box.mjs + 20 modules
var Box = __webpack_require__(83144);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Overlay/Overlay.mjs + 1 modules
var Overlay = __webpack_require__(22662);
// EXTERNAL MODULE: ./node_modules/@mantine/core/esm/components/Modal/Modal.mjs + 27 modules
var Modal = __webpack_require__(82455);
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
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/dynamic/components/ConfiguratorPage/components/ShapeDiverViewer/ShapeDiverViewer.css
var ShapeDiverViewer = __webpack_require__(40029);
;// ./src/dynamic/components/ConfiguratorPage/components/ShapeDiverViewer/ShapeDiverViewer.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());
options.insert = insertBySelector_default().bind(null, "head");
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(ShapeDiverViewer/* default */.A, options);




       /* harmony default export */ const ShapeDiverViewer_ShapeDiverViewer = (ShapeDiverViewer/* default */.A && ShapeDiverViewer/* default */.A.locals ? ShapeDiverViewer/* default */.A.locals : undefined);

;// ./src/dynamic/components/ConfiguratorPage/components/ShapeDiverViewer/ShapeDiverViewer.tsx
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





// Add dynamic imports
const loadShapeDiver = () => __awaiter(void 0, void 0, void 0, function* () {
    const viewer = yield Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 66032));
    return {
        createViewport: viewer.createViewport,
        createSession: viewer.createSession
    };
});
const loadThree = () => __awaiter(void 0, void 0, void 0, function* () {
    const { RGBELoader } = yield __webpack_require__.e(/* import() */ 233).then(__webpack_require__.bind(__webpack_require__, 17231));
    return RGBELoader;
});
const LOADING_GIF_URL = 'https://res.cloudinary.com/da8qnqmmh/image/upload/e_make_transparent:10/v1729757636/BIKE_qa0p3v.gif';
const ShapeDiverViewer_ShapeDiverViewer_ShapeDiverViewer = ({ session, setSession, setViewport, }) => {
    const canvasRef = (0,react.useRef)(null);
    const viewportRef = (0,react.useRef)(null);
    const sessionRef = (0,react.useRef)(null);
    const [qrCodeUrl, setQrCodeUrl] = (0,react.useState)(null);
    const [showQrModal, setShowQrModal] = (0,react.useState)(false);
    const [isLoading, setIsLoading] = (0,react.useState)(true);
    (0,react.useEffect)(() => {
        let isActive = true;
        const initShapeDiver = () => __awaiter(void 0, void 0, void 0, function* () {
            if (!canvasRef.current || !isActive)
                return;
            // Load dependencies dynamically
            const { createViewport, createSession } = yield loadShapeDiver();
            const RGBELoader = yield loadThree();
            // Make RGBELoader available globally
            if (typeof window !== 'undefined' && window.THREE) {
                window.THREE.RGBELoader = RGBELoader;
            }
            // Only close existing if we're not already in cleanup
            if (viewportRef.current && isActive) {
                console.log('Closing existing viewport...');
                viewportRef.current.close();
                viewportRef.current = null;
            }
            if (sessionRef.current && isActive) {
                console.log('Closing existing session...');
                sessionRef.current.close();
                sessionRef.current = null;
                setSession(null);
            }
            try {
                if (!isActive)
                    return; // Check flag before creating new instances
                console.log('Creating viewport...');
                const newViewport = yield createViewport({
                    canvas: canvasRef.current,
                    visibility: dist.VISIBILITY_MODE.MANUAL,
                    branding: {
                        backgroundColor: 'rgba(245, 240, 235, 0.2)',
                        spinnerPositioning: dist.SPINNER_POSITIONING.TOP_LEFT,
                        busyModeSpinner: LOADING_GIF_URL,
                        busyModeDisplay: dist.BUSY_MODE_DISPLAY.SPINNER,
                    },
                });
                if (!isActive) {
                    newViewport.close();
                    return;
                }
                viewportRef.current = newViewport;
                setViewport(newViewport);
                const newSession = yield createSession({
                    ticket: '59cad840676b0591717e78763e3c0c3b0d33202f56aa63f2d7666bc4eaa188a0bc04e98da43bb3dccf157b51aeafff24fb916f42ae010f86d44abfd0f6032fb999543488136361296d94deae674d430cdc19a77e7e298bccd13f3c6e9987ce893146a78567df2e-22883dee92d748f3620cc5c385dc12fc',
                    modelViewUrl: 'https://sdr8euc1.eu-central-1.shapediver.com',
                });
                if (!isActive) {
                    newSession.close();
                    return;
                }
                sessionRef.current = newSession;
                setSession(newSession);
                yield newSession.customize();
                if (newSession.node && isActive) {
                    yield newViewport.updateNode(newSession.node);
                    newViewport.update();
                    newViewport.render();
                    newViewport.show = true;
                    setIsLoading(false);
                }
            }
            catch (error) {
                console.error('Error initializing ShapeDiver:', error);
                if (isActive) {
                    setIsLoading(false);
                }
            }
        });
        initShapeDiver();
        return () => {
            isActive = false; // Set flag before cleanup
            console.log('Cleaning up...');
            if (sessionRef.current) {
                sessionRef.current.close();
                sessionRef.current = null;
                setSession(null);
            }
            if (viewportRef.current) {
                viewportRef.current.close();
                viewportRef.current = null;
            }
        };
    }, [setSession, setViewport]);
    const handleARView = () => __awaiter(void 0, void 0, void 0, function* () {
        if (viewportRef.current) {
            const token = viewportRef.current.addFlag(dist.FLAG_TYPE.BUSY_MODE);
            if (viewportRef.current.viewableInAR()) {
                yield viewportRef.current.viewInAR();
            }
            else {
                const qr = yield viewportRef.current.createArSessionLink(undefined, true);
                setQrCodeUrl(qr);
                setShowQrModal(true);
            }
            viewportRef.current.removeFlag(token);
        }
    });
    return ((0,jsx_runtime.jsxs)(Box/* Box */.a, { className: "viewerContainer", children: [(0,jsx_runtime.jsx)("canvas", { ref: canvasRef, className: "viewerCanvas" }), isLoading && ((0,jsx_runtime.jsx)(Overlay/* Overlay */.h, { className: "loadingOverlay", children: (0,jsx_runtime.jsx)("img", { src: LOADING_GIF_URL, alt: "Loading", className: "loadingGif" }) })), (0,jsx_runtime.jsx)(Modal/* Modal */.a, { opened: showQrModal, onClose: () => setShowQrModal(false), title: "AR QR Code", children: qrCodeUrl && (0,jsx_runtime.jsx)("img", { src: qrCodeUrl, alt: "AR QR Code", style: { width: '100%' } }) })] }));
};
/* harmony default export */ const components_ShapeDiverViewer_ShapeDiverViewer = (ShapeDiverViewer_ShapeDiverViewer_ShapeDiverViewer);

;// ./src/dynamic/components/ConfiguratorPage/components/ShapeDiverViewer/index.ts



/***/ })

}]);
//# sourceMappingURL=96.chunk.js.map