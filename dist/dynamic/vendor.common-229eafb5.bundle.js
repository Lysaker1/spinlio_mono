(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[591],{

/***/ 35854:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PostProcessingApi_inputValidator, _PostProcessingApi_logger, _PostProcessingApi_renderingEngine, _PostProcessingApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostProcessingApi = void 0;
const viewer_rendering_engine_rendering_engine_threejs_1 = __webpack_require__(27068);
const viewer_shared_services_1 = __webpack_require__(8389);
class PostProcessingApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, renderingEngine) {
        // #region Properties (4)
        _PostProcessingApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _PostProcessingApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _PostProcessingApi_renderingEngine.set(this, void 0);
        _PostProcessingApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _PostProcessingApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _PostProcessingApi_renderingEngine, renderingEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (14)
    get antiAliasingTechnique() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.antiAliasingTechnique;
    }
    set antiAliasingTechnique(value) {
        const scope = 'antiAliasingTechnique';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_threejs_1.ANTI_ALIASING_TECHNIQUE));
        __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.antiAliasingTechnique = value;
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
    }
    get antiAliasingTechniqueMobile() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.antiAliasingTechniqueMobile;
    }
    set antiAliasingTechniqueMobile(value) {
        const scope = 'antiAliasingTechniqueMobile';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_threejs_1.ANTI_ALIASING_TECHNIQUE));
        __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.antiAliasingTechniqueMobile = value;
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
    }
    get effectComposer() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.effectComposer;
    }
    get enablePostProcessingOnMobile() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.enablePostProcessingOnMobile;
    }
    set enablePostProcessingOnMobile(value) {
        const scope = 'enablePostProcessingOnMobile';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.enablePostProcessingOnMobile = value;
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
    }
    get godRaysEffects() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.godRaysManagers;
    }
    get manualPostProcessing() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.manualPostProcessing;
    }
    set manualPostProcessing(value) {
        const scope = 'manualPostProcessing';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.manualPostProcessing = value;
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
    }
    get outlineEffects() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.outlineManagers;
    }
    get selectiveBloomEffects() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.selectiveBloomManagers;
    }
    get ssaaSampleLevel() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.ssaaSampleLevel;
    }
    set ssaaSampleLevel(value) {
        const scope = 'ssaaSampleLevel';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.ssaaSampleLevel = value;
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
    }
    // #endregion Public Getters And Setters (14)
    // #region Public Methods (7)
    addEffect(definition) {
        const scope = 'addEffect';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, definition, 'object', false);
        const res = __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.addEffect(definition);
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was called with definition ${definition}.`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
        return res;
    }
    getDefaultEffectProperties(type) {
        const scope = 'getDefaultEffectProperties';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, type, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_threejs_1.POST_PROCESSING_EFFECT_TYPE));
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was called with type ${type}.`);
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.getDefaultEffectProperties(type);
    }
    getEffect(token) {
        const scope = 'getEffect';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, token, 'string');
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was called with token ${token}.`);
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.getEffect(token);
    }
    getEffectTokens() {
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.getEffectTokens();
    }
    getPostProcessingEffectsArray() {
        const scope = 'getPostProcessingEffectsArray';
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was called.`);
        return __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.getPostProcessingEffectsArray();
    }
    removeEffect(token) {
        const scope = 'removeEffect';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, token, 'string');
        const res = __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.removeEffect(token);
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was called with token ${token}.`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
        return res;
    }
    updateEffect(token, definition) {
        const scope = 'updateEffect';
        __classPrivateFieldGet(this, _PostProcessingApi_inputValidator, "f").validateAndError(`PostProcessingApi.${scope}`, token, 'string');
        __classPrivateFieldGet(this, _PostProcessingApi_renderingEngine, "f").postProcessingManager.updateEffect(token, definition);
        __classPrivateFieldGet(this, _PostProcessingApi_logger, "f").debug(`PostProcessingApi.${scope}: ${scope} was called with token ${token} and definition ${definition}.`);
        __classPrivateFieldGet(this, _PostProcessingApi_viewportApi, "f").update();
    }
}
exports.PostProcessingApi = PostProcessingApi;
_PostProcessingApi_inputValidator = new WeakMap(), _PostProcessingApi_logger = new WeakMap(), _PostProcessingApi_renderingEngine = new WeakMap(), _PostProcessingApi_viewportApi = new WeakMap();
//# sourceMappingURL=PostProcessingApi.js.map

/***/ }),

/***/ 21563:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _ViewportApi_animationEngine, _ViewportApi_cameras, _ViewportApi_creationControlCenterViewport, _ViewportApi_gltfConverter, _ViewportApi_inputValidator, _ViewportApi_lightScenes, _ViewportApi_logger, _ViewportApi_postProcessing, _ViewportApi_renderingEngine, _ViewportApi_stateEngine, _ViewportApi_systemInfo;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewportApi = void 0;
const QRCode = __importStar(__webpack_require__(87583));
const viewer_rendering_engine_animation_engine_1 = __webpack_require__(46560);
const viewer_shared_build_data_1 = __webpack_require__(93668);
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_creation_control_center_viewport_1 = __webpack_require__(82890);
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const viewer_data_engine_gltf_converter_1 = __webpack_require__(17187);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const LightSceneApi_1 = __webpack_require__(13491);
const gl_matrix_1 = __webpack_require__(61961);
const OrthographicCameraApi_1 = __webpack_require__(80246);
const PerspectiveCameraApi_1 = __webpack_require__(69118);
const PostProcessingApi_1 = __webpack_require__(35854);
const viewer_api_general_1 = __webpack_require__(27444);
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
class ViewportApi {
    // #endregion Properties (11)
    // #region Constructors (1)
    constructor(renderingEngine) {
        // #region Properties (11)
        _ViewportApi_animationEngine.set(this, viewer_rendering_engine_animation_engine_1.AnimationEngine.instance);
        _ViewportApi_cameras.set(this, {});
        _ViewportApi_creationControlCenterViewport.set(this, viewer_creation_control_center_viewport_1.CreationControlCenterViewport.instance);
        _ViewportApi_gltfConverter.set(this, viewer_data_engine_gltf_converter_1.GLTFConverter.instance);
        _ViewportApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _ViewportApi_lightScenes.set(this, {});
        _ViewportApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _ViewportApi_postProcessing.set(this, void 0);
        _ViewportApi_renderingEngine.set(this, void 0);
        _ViewportApi_stateEngine.set(this, viewer_shared_services_1.StateEngine.instance);
        _ViewportApi_systemInfo.set(this, viewer_shared_services_1.SystemInfo.instance);
        __classPrivateFieldSet(this, _ViewportApi_renderingEngine, renderingEngine, "f");
        // Whenever a camera is added or removed from the camera engine, this update is called.
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.update = () => {
            for (const c in __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.cameras) {
                if (!__classPrivateFieldGet(this, _ViewportApi_cameras, "f")[c]) {
                    if (__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.cameras[c].type === viewer_rendering_engine_camera_engine_1.CAMERA_TYPE.PERSPECTIVE) {
                        __classPrivateFieldGet(this, _ViewportApi_cameras, "f")[c] = new PerspectiveCameraApi_1.PerspectiveCameraApi(this, __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.cameras[c]);
                    }
                    else {
                        __classPrivateFieldGet(this, _ViewportApi_cameras, "f")[c] = new OrthographicCameraApi_1.OrthographicCameraApi(this, __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.cameras[c]);
                    }
                }
            }
            for (const c in __classPrivateFieldGet(this, _ViewportApi_cameras, "f")) {
                if (!__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.cameras[c]) {
                    delete __classPrivateFieldGet(this, _ViewportApi_cameras, "f")[c];
                }
            }
        };
        // We call it once in the beginning to get the current state.
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.update();
        // Whenever a camera is added or removed from the camera engine, this update is called.
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.update = () => {
            for (const l in __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.lightScenes) {
                if (!__classPrivateFieldGet(this, _ViewportApi_lightScenes, "f")[l]) {
                    __classPrivateFieldGet(this, _ViewportApi_lightScenes, "f")[l] = new LightSceneApi_1.LightSceneApi(this, __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.lightScenes[l]);
                }
            }
            for (const l in __classPrivateFieldGet(this, _ViewportApi_lightScenes, "f")) {
                if (!__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.lightScenes[l]) {
                    delete __classPrivateFieldGet(this, _ViewportApi_lightScenes, "f")[l];
                }
            }
        };
        // We call it once in the beginning to get the current state.
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.update();
        // We create the post processing api
        __classPrivateFieldSet(this, _ViewportApi_postProcessing, new PostProcessingApi_1.PostProcessingApi(this, __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f")), "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (94)
    get animations() {
        return __classPrivateFieldGet(this, _ViewportApi_animationEngine, "f").animations;
    }
    get arRotation() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").arRotation;
    }
    set arRotation(value) {
        const scope = 'arRotation';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").arRotation = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('arRotation');
    }
    get arScale() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").arScale;
    }
    set arScale(value) {
        const scope = 'arScale';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").arScale = gl_matrix_1.vec3.max(gl_matrix_1.vec3.create(), value, gl_matrix_1.vec3.fromValues(0.001, 0.001, 0.001));
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('arScale');
    }
    get arTranslation() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").arTranslation;
    }
    set arTranslation(value) {
        const scope = 'arTranslation';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").arTranslation = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('arTranslation');
    }
    get automaticColorAdjustment() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").automaticColorAdjustment;
    }
    set automaticColorAdjustment(value) {
        const scope = 'automaticColorAdjustment';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").automaticColorAdjustment = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('automaticColorAdjustment');
    }
    get automaticResizing() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").automaticResizing;
    }
    set automaticResizing(value) {
        const scope = 'automaticResizing';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").automaticResizing = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('automaticResizing');
    }
    get beautyRenderBlendingDuration() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").beautyRenderBlendingDuration;
    }
    set beautyRenderBlendingDuration(value) {
        const scope = 'beautyRenderBlendingDuration';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").beautyRenderBlendingDuration = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('beautyRenderBlendingDuration');
    }
    get beautyRenderDelay() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").beautyRenderDelay;
    }
    set beautyRenderDelay(value) {
        const scope = 'beautyRenderDelay';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").beautyRenderDelay = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('beautyRenderDelay');
    }
    get camera() {
        if (!__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.camera)
            return null;
        return __classPrivateFieldGet(this, _ViewportApi_cameras, "f")[__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.camera.id];
    }
    get cameras() {
        return __classPrivateFieldGet(this, _ViewportApi_cameras, "f");
    }
    get canvas() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").canvas;
    }
    get clearAlpha() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").clearAlpha;
    }
    set clearAlpha(value) {
        const scope = 'clearAlpha';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").clearAlpha = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('clearAlpha');
    }
    get clearColor() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").clearColor;
    }
    set clearColor(value) {
        const scope = 'clearColor';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").clearColor = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('clearColor');
    }
    get defaultLineMaterial() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultLineMaterial;
    }
    get defaultMaterial() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultMaterial;
    }
    get defaultMaterialColor() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultMaterialColor;
    }
    set defaultMaterialColor(value) {
        const scope = 'defaultMaterialColor';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultMaterialColor = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('defaultMaterialColor');
    }
    get defaultPointMaterial() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultPointMaterial;
    }
    get enableAR() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").enableAR;
    }
    set enableAR(value) {
        const scope = 'enableAR';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").enableAR = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('enableAR');
    }
    get environmentMap() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMap;
    }
    set environmentMap(value) {
        const scope = 'environmentMap';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'cubeMap');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMap = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMap');
    }
    get environmentMapAsBackground() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapAsBackground;
    }
    set environmentMapAsBackground(value) {
        const scope = 'environmentMapAsBackground';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapAsBackground = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMapAsBackground');
    }
    get environmentMapBlurriness() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapBlurriness;
    }
    set environmentMapBlurriness(value) {
        const scope = 'environmentMapBlurriness';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapBlurriness = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMapBlurriness');
    }
    get environmentMapForUnlitMaterials() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapForUnlitMaterials;
    }
    set environmentMapForUnlitMaterials(value) {
        const scope = 'environmentMapForUnlitMaterials';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapForUnlitMaterials = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMapForUnlitMaterials');
    }
    get environmentMapIntensity() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapIntensity;
    }
    set environmentMapIntensity(value) {
        const scope = 'environmentMapIntensity';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapIntensity = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMapIntensity');
    }
    get environmentMapResolution() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapResolution;
    }
    set environmentMapResolution(value) {
        const scope = 'environmentMapResolution';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'string');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapResolution = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMapResolution');
    }
    get environmentMapRotation() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapRotation;
    }
    set environmentMapRotation(value) {
        const scope = 'environmentMapRotation';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'quat');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").environmentMapRotation = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('environmentMapRotation');
    }
    get gridColor() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").gridColor;
    }
    set gridColor(value) {
        const scope = 'gridColor';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").gridColor = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('gridColor');
    }
    get gridVisibility() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").gridVisibility;
    }
    set gridVisibility(value) {
        const scope = 'gridVisibility';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").gridVisibility = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('gridVisibility');
    }
    get groundPlaneColor() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneColor;
    }
    set groundPlaneColor(value) {
        const scope = 'groundPlaneColor';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneColor = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('groundPlaneColor');
    }
    get groundPlaneShadowColor() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneShadowColor;
    }
    set groundPlaneShadowColor(value) {
        const scope = 'groundPlaneShadowColor';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneShadowColor = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('groundPlaneShadowColor');
    }
    get groundPlaneShadowVisibility() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneShadowVisibility;
    }
    set groundPlaneShadowVisibility(value) {
        const scope = 'groundPlaneShadowVisibility';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneShadowVisibility = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('groundPlaneShadowVisibility');
    }
    get groundPlaneVisibility() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneVisibility;
    }
    set groundPlaneVisibility(value) {
        const scope = 'groundPlaneVisibility';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").groundPlaneVisibility = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('groundPlaneVisibility');
    }
    get id() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").id;
    }
    get lightScene() {
        if (!__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.lightScene)
            return null;
        return __classPrivateFieldGet(this, _ViewportApi_lightScenes, "f")[__classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.lightScene.id];
    }
    get lightScenes() {
        return __classPrivateFieldGet(this, _ViewportApi_lightScenes, "f");
    }
    get lights() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lights;
    }
    set lights(value) {
        const scope = 'lights';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lights = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('lights');
    }
    get maximumRenderingSize() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").maximumRenderingSize;
    }
    set maximumRenderingSize(value) {
        const scope = 'maximumRenderingSize';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value.width, 'number');
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value.height, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").maximumRenderingSize = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('maximumRenderingSize');
    }
    get outputEncoding() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").outputEncoding;
    }
    set outputEncoding(value) {
        const scope = 'outputEncoding';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING));
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").outputEncoding = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('outputEncoding');
    }
    get physicallyCorrectLights() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").physicallyCorrectLights;
    }
    set physicallyCorrectLights(value) {
        const scope = 'physicallyCorrectLights';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").physicallyCorrectLights = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('physicallyCorrectLights');
    }
    get pointSize() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").pointSize;
    }
    set pointSize(value) {
        const scope = 'pointSize';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").pointSize = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('pointSize');
    }
    get postProcessing() {
        return __classPrivateFieldGet(this, _ViewportApi_postProcessing, "f");
    }
    get postRenderingCallback() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").postRenderingCallback;
    }
    set postRenderingCallback(value) {
        const scope = 'postRenderingCallback';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'function', false);
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").postRenderingCallback = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('postRenderingCallback');
    }
    get preRenderingCallback() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").preRenderingCallback;
    }
    set preRenderingCallback(value) {
        const scope = 'preRenderingCallback';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'function', false);
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").preRenderingCallback = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('preRenderingCallback');
    }
    get sessionSettingsId() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").sessionSettingsId;
    }
    get sessionSettingsMode() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").sessionSettingsMode;
    }
    get shadows() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").shadows;
    }
    set shadows(value) {
        const scope = 'shadows';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").shadows = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('shadows');
    }
    get show() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").show;
    }
    set show(value) {
        const scope = 'show';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").show = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('show');
    }
    get showStatistics() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").showStatistics;
    }
    set showStatistics(value) {
        const scope = 'showStatistics';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").showStatistics = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('showStatistics');
    }
    get softShadows() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").softShadows;
    }
    set softShadows(value) {
        const scope = 'softShadows';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").softShadows = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('softShadows');
    }
    get textureEncoding() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").textureEncoding;
    }
    set textureEncoding(value) {
        const scope = 'textureEncoding';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING));
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").textureEncoding = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('textureEncoding');
    }
    get threeJsCoreObjects() {
        return {
            scene: __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").sceneTreeManager.scene,
            renderer: __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").renderer,
            camera: __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraManager.camera
        };
    }
    get toneMapping() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").toneMapping;
    }
    set toneMapping(value) {
        const scope = 'toneMapping';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_1.TONE_MAPPING));
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").toneMapping = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('toneMapping');
    }
    get toneMappingExposure() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").toneMappingExposure;
    }
    set toneMappingExposure(value) {
        const scope = 'toneMappingExposure';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").toneMappingExposure = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('toneMappingExposure');
    }
    get type() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").type;
    }
    set type(value) {
        const scope = 'type';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE));
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").type = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('type');
    }
    get visualizeAttributes() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").visualizeAttributes;
    }
    set visualizeAttributes(value) {
        const scope = 'visualizeAttributes';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'function', false);
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").visualizeAttributes = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.render();
    }
    // #endregion Public Getters And Setters (94)
    // #region Public Methods (41)
    addCanvasEventListener(listener) {
        const scope = 'addCanvasEventListener';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, listener, 'object');
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").domEventEngine.addDomEventListener(listener);
    }
    addFlag(flag) {
        const scope = 'addFlag';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, flag, 'enum', true, Object.values(viewer_rendering_engine_rendering_engine_1.FLAG_TYPE));
        const token = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").addFlag(flag);
        return token;
    }
    addRestrictedCanvasListenerToken(token) {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").domEventEngine.addRestrictedListenerToken(token);
    }
    applyViewportSettings(settings, sections) {
        const scope = 'applyViewportSettings';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, settings, 'object');
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, sections, 'object', false);
        return __classPrivateFieldGet(this, _ViewportApi_creationControlCenterViewport, "f").applyViewportSettings(this.id, settings, sections);
    }
    assignCamera(id) {
        const scope = 'assignCamera';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, id, 'string');
        const check = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.assignCamera(id);
        this.update('assignCamera');
        return check;
    }
    assignLightScene(id) {
        const scope = 'assignLightScene';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, id, 'string');
        const check = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.assignLightScene(id);
        this.update('assignLightScene');
        return check;
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _ViewportApi_creationControlCenterViewport, "f").closeViewportEngine(this.id);
        });
    }
    continueRendering() {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").continueRendering();
    }
    convert3Dto2D(p) {
        const scope = 'convert3Dto2D';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, p, 'vec3');
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").convert3Dto2D(p);
    }
    convertToGlTF(node = viewer_api_general_1.sceneTree.root, convertForAr = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'convertToGlTF';
            if (!(node instanceof viewer_shared_node_tree_1.TreeNode))
                throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${node} is not of type node.`, node, 'node');
            this.update('convertToGlTF.start');
            const result = yield __classPrivateFieldGet(this, _ViewportApi_gltfConverter, "f").convert(node, convertForAr, this.id);
            this.update('convertToGlTF.end');
            return new Blob([result], { type: 'application/octet-stream' });
        });
    }
    createArSessionLink(node, qrCode = true, fallbackUrl) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'createArSessionLink';
            if (node && !(node instanceof viewer_shared_node_tree_1.TreeNode))
                throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${node} is not of type node.`, node, 'node');
            let sessionEngineId = undefined;
            for (const s in __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines) {
                const state = __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines[s];
                if (state !== undefined && state.canUploadGLTF) {
                    sessionEngineId = s;
                    break;
                }
            }
            if (!sessionEngineId)
                throw new viewer_shared_services_1.ShapeDiverViewerArError('ViewportApi.createArSessionLink: None of the sessions that are registered are capable of using the AR feature.');
            const targetNode = node || viewer_api_general_1.sceneTree.root;
            const scalingMatrix = gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), this.arScale);
            // add scaling matrix to scene tree node
            targetNode.transformations.push({ id: 'ar_scaling', matrix: scalingMatrix });
            // create the gltf
            this.update('createArSessionLink.start');
            const blob = yield __classPrivateFieldGet(this, _ViewportApi_gltfConverter, "f").convert(targetNode, true, this.id);
            // remove scaling the matrix
            for (let i = 0; i < targetNode.transformations.length; i++)
                if (targetNode.transformations[i].id === 'ar_scaling')
                    targetNode.transformations.splice(i, 1);
            this.update('createArSessionLink.end');
            const response = yield ((_a = __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _a === void 0 ? void 0 : _a.uploadGLTF(new Blob([blob], { type: 'application/octet-stream' }), sdk_geometry_api_sdk_v2_1.ShapeDiverRequestGltfUploadQueryConversion.SCENE));
            const backends = {
                'sddev3': 'https://sddev3.eu-central-1.shapediver.com',
                'sddev2': 'https://sddev2.eu-central-1.shapediver.com',
                'sddev': 'https://sddev.eu-central-1.shapediver.com',
                'sdtest': 'https://sdtest.us-east-1.shapediver.com',
                'sdeuc1': 'https://sdeuc1.eu-central-1.shapediver.com',
                'sdr7euc1': 'https://sdr7euc1.eu-central-1.shapediver.com',
                'sduse1': 'https://model-view.shapediver.com',
            };
            let backendIdentifier = Object.keys(backends).find((key) => { var _a; return backends[key] === ((_a = __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _a === void 0 ? void 0 : _a.modelViewUrl); });
            if (!backendIdentifier) {
                const modelViewUrl = (_b = __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _b === void 0 ? void 0 : _b.modelViewUrl;
                backendIdentifier = modelViewUrl === null || modelViewUrl === void 0 ? void 0 : modelViewUrl.replace('https://', '').replace('.shapediver.com', '');
            }
            const fallbackQueryParameter = fallbackUrl ? `fb=${encodeURIComponent(fallbackUrl)}&` : '';
            if (!response || !response.gltf || !response.gltf.sceneId)
                throw new viewer_shared_services_1.ShapeDiverViewerArError('ViewportApi.createArSessionLink: There was an unexpected error with the ar scene response. Please contact us if this happens again.');
            const sceneId = response.gltf.sceneId;
            const link = `https://viewer.shapediver.com/v3/${viewer_shared_build_data_1.build_data.build_version.replace('3.', '')}/ar.html?${fallbackQueryParameter}b=${encodeURIComponent(backendIdentifier)}&id=${encodeURIComponent(sceneId)}`;
            if (qrCode === false) {
                return link;
            }
            else {
                const qrCodeLink = yield new Promise((resolve, reject) => {
                    QRCode.toDataURL(link, (error, url) => {
                        if (error) {
                            reject(error);
                        }
                        else {
                            resolve(url);
                        }
                    });
                });
                return qrCodeLink;
            }
        });
    }
    createLightScene(properties) {
        const scope = 'createLightScene';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, properties, 'object', false);
        const prop = Object.assign({}, properties);
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, prop.name, 'string', false);
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, prop.standard, 'boolean', false);
        const lightScene = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.createLightScene(properties || {});
        this.update('createLightScene');
        return __classPrivateFieldGet(this, _ViewportApi_lightScenes, "f")[lightScene.id];
    }
    createOrthographicCamera(id) {
        const scope = 'createOrthographicCamera';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, id, 'string', false);
        const camera = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.createCamera(viewer_rendering_engine_camera_engine_1.CAMERA_TYPE.ORTHOGRAPHIC, id);
        this.update('createOrthographicCamera');
        return __classPrivateFieldGet(this, _ViewportApi_cameras, "f")[camera.id];
    }
    createPerspectiveCamera(id) {
        const scope = 'createPerspectiveCamera';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, id, 'string', false);
        const camera = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.createCamera(viewer_rendering_engine_camera_engine_1.CAMERA_TYPE.PERSPECTIVE, id);
        this.update('createPerspectiveCamera');
        return __classPrivateFieldGet(this, _ViewportApi_cameras, "f")[camera.id];
    }
    createSDTFOverview(node) {
        const scope = 'createSDTFOverview';
        if (!(node instanceof viewer_shared_node_tree_1.TreeNode))
            throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${node} is not of type node.`, node, 'node');
        this.update('createSDTFOverview');
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").createSDTFOverview(node);
    }
    displayErrorMessage(message) {
        const scope = 'displayErrorMessage';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, message, 'string');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").displayErrorMessage(message);
        this.update('displayErrorMessage');
    }
    getEnvironmentMapImageUrl() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").getEnvironmentMapImageUrl();
    }
    getScreenshot(type, quality) {
        const scope = 'getScreenshot';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, type, 'string', false);
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, quality, 'number', false);
        this.update('getScreenshot');
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").getScreenshot(type, quality);
    }
    getViewportSettings() {
        return __classPrivateFieldGet(this, _ViewportApi_creationControlCenterViewport, "f").getViewportSettings(this.id);
    }
    isMobileDeviceWithoutBrowserARSupport() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").isMobileDeviceWithoutBrowserARSupport();
    }
    pauseRendering() {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").pauseRendering();
    }
    pointerEventToRay(event) {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").pointerEventToRay(event);
    }
    raytraceScene(origin, direction) {
        const scope = 'raytraceScene';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, origin, 'vec3');
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, direction, 'vec3');
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").raytraceScene(origin, direction);
    }
    removeCamera(id) {
        const scope = 'removeCamera';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, id, 'string');
        const check = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.removeCamera(id);
        this.update('removeCamera');
        return check;
    }
    removeCanvasEventListener(token) {
        const scope = 'removeCanvasEventListener';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, token, 'string');
        const check = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").domEventEngine.removeDomEventListener(token);
        return check;
    }
    removeFlag(token) {
        const scope = 'removeFlag';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, token, 'string');
        const check = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").removeFlag(token);
        return check;
    }
    removeLightScene(id) {
        const scope = 'removeLightScene';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, id, 'string');
        const check = __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").lightEngine.removeLightScene(id);
        this.update('removeLightScene');
        return check;
    }
    removeRestrictedCanvasListenerToken(token) {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").domEventEngine.removeRestrictedListenerToken(token);
    }
    render() {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").renderingManager.render();
    }
    resetToDefaultCameras() {
        for (const c in this.cameras)
            __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.removeCamera(c);
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").cameraEngine.createDefaultCameras();
        this.update('resetToDefaultCameras');
    }
    resize(width, height) {
        const scope = 'resize';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, width, 'number');
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, height, 'number');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").resize(width, height);
        this.update('resize');
    }
    restrictEventListeners(allowedListeners) {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").domEventEngine.allowEventListeners(allowedListeners);
    }
    update(id) {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").update(id || 'ViewportApi');
    }
    updateDefaultLineMaterial(value) {
        const scope = 'updateDefaultLineMaterial';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultLineMaterial = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('updateDefaultLineMaterial');
    }
    updateDefaultMaterial(value) {
        const scope = 'updateDefaultMaterial';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultMaterial = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('updateDefaultMaterial');
    }
    updateDefaultPointMaterial(value) {
        const scope = 'updateDefaultPointMaterial';
        __classPrivateFieldGet(this, _ViewportApi_inputValidator, "f").validateAndError(`ViewportApi.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").defaultPointMaterial = value;
        __classPrivateFieldGet(this, _ViewportApi_logger, "f").debug(`ViewportApi.${scope}: ${scope} was set to: ${value}`);
        this.update('updateDefaultPointMaterial');
    }
    updateEnvironmentGeometry() {
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").updateEnvironmentGeometry();
    }
    updateNode(node) {
        const scope = 'updateNode';
        if (!(node instanceof viewer_shared_node_tree_1.TreeNode))
            throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${node} is not of type node.`, node, 'node');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").sceneTreeManager.updateNode(node, node.convertedObject[this.id]);
    }
    updateNodeTransformation(node) {
        const scope = 'updateNodeTransformation';
        if (!(node instanceof viewer_shared_node_tree_1.TreeNode))
            throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${node} is not of type node.`, node, 'node');
        __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").sceneTreeManager.updateNode(node, node.convertedObject[this.id], { transformationOnly: true });
    }
    viewInAR(node) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'viewInAR';
            if (node && !(node instanceof viewer_shared_node_tree_1.TreeNode))
                throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${node} is not of type node.`, node, 'node');
            let sessionEngineId = undefined;
            for (const s in __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines) {
                const state = __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines[s];
                if (state !== undefined && state.canUploadGLTF) {
                    sessionEngineId = s;
                    break;
                }
            }
            if (!sessionEngineId)
                throw new viewer_shared_services_1.ShapeDiverViewerArError('Api.viewInAR: None of the sessions that are registered are capable of using the AR feature.');
            const targetNode = node || viewer_api_general_1.sceneTree.root;
            const scalingMatrix = gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), this.arScale);
            // add scaling matrix to scene tree node
            targetNode.transformations.push({ id: 'ar_scaling', matrix: scalingMatrix });
            // create the gltf
            this.update('viewInAR.start');
            const blob = yield __classPrivateFieldGet(this, _ViewportApi_gltfConverter, "f").convert(targetNode, true, this.id);
            // remove scaling the matrix
            for (let i = 0; i < targetNode.transformations.length; i++)
                if (targetNode.transformations[i].id === 'ar_scaling')
                    targetNode.transformations.splice(i, 1);
            this.update('viewInAR.end');
            const response = yield ((_a = __classPrivateFieldGet(this, _ViewportApi_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _a === void 0 ? void 0 : _a.uploadGLTF(new Blob([blob], { type: 'application/octet-stream' }), __classPrivateFieldGet(this, _ViewportApi_systemInfo, "f").isIOS ? sdk_geometry_api_sdk_v2_1.ShapeDiverRequestGltfUploadQueryConversion.USDZ : sdk_geometry_api_sdk_v2_1.ShapeDiverRequestGltfUploadQueryConversion.NONE));
            const href = (_b = response === null || response === void 0 ? void 0 : response.gltf) === null || _b === void 0 ? void 0 : _b.href;
            if (href)
                __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").viewInAR(href);
        });
    }
    viewableInAR() {
        return __classPrivateFieldGet(this, _ViewportApi_renderingEngine, "f").viewableInAR();
    }
}
exports.ViewportApi = ViewportApi;
_ViewportApi_animationEngine = new WeakMap(), _ViewportApi_cameras = new WeakMap(), _ViewportApi_creationControlCenterViewport = new WeakMap(), _ViewportApi_gltfConverter = new WeakMap(), _ViewportApi_inputValidator = new WeakMap(), _ViewportApi_lightScenes = new WeakMap(), _ViewportApi_logger = new WeakMap(), _ViewportApi_postProcessing = new WeakMap(), _ViewportApi_renderingEngine = new WeakMap(), _ViewportApi_stateEngine = new WeakMap(), _ViewportApi_systemInfo = new WeakMap();
//# sourceMappingURL=ViewportApi.js.map

/***/ }),

/***/ 24806:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractCameraApi_camera, _AbstractCameraApi_inputValidator, _AbstractCameraApi_logger, _AbstractCameraApi_validateOptions, _AbstractCameraApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractCameraApi = void 0;
const viewer_shared_math_1 = __webpack_require__(67275);
const viewer_shared_services_1 = __webpack_require__(8389);
class AbstractCameraApi {
    // #endregion Properties (6)
    // #region Constructors (1)
    constructor(viewportApi, camera) {
        // #region Properties (6)
        _AbstractCameraApi_camera.set(this, void 0);
        _AbstractCameraApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _AbstractCameraApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _AbstractCameraApi_validateOptions.set(this, (scope, options) => {
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, options, 'object', false);
            const prop = Object.assign({}, options);
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, prop.easing, 'string', false);
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, prop.duration, 'number', false);
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, prop.coordinates, 'string', false);
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, prop.interpolation, 'string', false);
        });
        _AbstractCameraApi_viewportApi.set(this, void 0);
        this.scope = 'AbstractCameraApi';
        __classPrivateFieldSet(this, _AbstractCameraApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _AbstractCameraApi_camera, camera, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (74)
    get autoAdjust() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").autoAdjust;
    }
    set autoAdjust(value) {
        const scope = 'autoAdjust';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").autoAdjust = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get autoRotationSpeed() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.autoRotationSpeed;
    }
    set autoRotationSpeed(value) {
        const scope = 'autoRotationSpeed';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.autoRotationSpeed = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get cameraMovementDuration() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").cameraMovementDuration;
    }
    set cameraMovementDuration(value) {
        const scope = 'cameraMovementDuration';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").cameraMovementDuration = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get cubePositionRestriction() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.cubePositionRestriction;
    }
    set cubePositionRestriction(value) {
        const scope = 'cubePositionRestriction';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.min, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.max, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.cubePositionRestriction = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get cubeTargetRestriction() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.cubeTargetRestriction;
    }
    set cubeTargetRestriction(value) {
        const scope = 'cubeTargetRestriction';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.min, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.max, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.cubeTargetRestriction = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get damping() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.damping;
    }
    set damping(value) {
        const scope = 'damping';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.damping = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get defaultPosition() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").defaultPosition;
    }
    set defaultPosition(value) {
        const scope = 'defaultPosition';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").defaultPosition = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get defaultTarget() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").defaultTarget;
    }
    set defaultTarget(value) {
        const scope = 'defaultTarget';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").defaultTarget = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableAutoRotation() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableAutoRotation;
    }
    set enableAutoRotation(value) {
        const scope = 'enableAutoRotation';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableAutoRotation = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableAzimuthRotation() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableAzimuthRotation;
    }
    set enableAzimuthRotation(value) {
        const scope = 'enableAzimuthRotation';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableAzimuthRotation = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableKeyPan() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableKeyPan;
    }
    set enableKeyPan(value) {
        const scope = 'enableKeyPan';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableKeyPan = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableObjectControls() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableObjectControls;
    }
    set enableObjectControls(value) {
        const scope = 'enableObjectControls';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableObjectControls = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enablePan() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enablePan;
    }
    set enablePan(value) {
        const scope = 'enablePan';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enablePan = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enablePolarRotation() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enablePolarRotation;
    }
    set enablePolarRotation(value) {
        const scope = 'enablePolarRotation';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enablePolarRotation = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableRotation() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableRotation;
    }
    set enableRotation(value) {
        const scope = 'enableRotation';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableRotation = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableTurntableControls() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableTurntableControls;
    }
    set enableTurntableControls(value) {
        const scope = 'enableTurntableControls';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableTurntableControls = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enableZoom() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableZoom;
    }
    set enableZoom(value) {
        const scope = 'enableZoom';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enableZoom = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get enabled() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enabled;
    }
    set enabled(value) {
        const scope = 'enabled';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.enabled = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get id() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").id;
    }
    get isDefault() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").isDefault;
    }
    get keyPanSpeed() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.keyPanSpeed;
    }
    set keyPanSpeed(value) {
        const scope = 'keyPanSpeed';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.keyPanSpeed = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get movementSmoothness() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.movementSmoothness;
    }
    set movementSmoothness(value) {
        const scope = 'movementSmoothness';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.movementSmoothness = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get name() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").name;
    }
    set name(value) {
        const scope = 'name';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").name = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get objectControlsCenter() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.objectControlsCenter;
    }
    set objectControlsCenter(value) {
        const scope = 'objectControlsCenter';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.objectControlsCenter = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get order() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").order;
    }
    set order(value) {
        const scope = 'order';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number', false);
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").order = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get panSpeed() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.panSpeed;
    }
    set panSpeed(value) {
        const scope = 'panSpeed';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.panSpeed = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get position() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").position;
    }
    set position(value) {
        const scope = 'position';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").position = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get revertAtMouseUp() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").revertAtMouseUp;
    }
    set revertAtMouseUp(value) {
        const scope = 'revertAtMouseUp';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").revertAtMouseUp = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get revertAtMouseUpDuration() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").revertAtMouseUpDuration;
    }
    set revertAtMouseUpDuration(value) {
        const scope = 'revertAtMouseUpDuration';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").revertAtMouseUpDuration = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get rotationRestriction() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.rotationRestriction;
    }
    set rotationRestriction(value) {
        const scope = 'rotationRestriction';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.minAzimuthAngle, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.maxAzimuthAngle, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.minPolarAngle, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.maxPolarAngle, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.rotationRestriction = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get rotationSpeed() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.rotationSpeed;
    }
    set rotationSpeed(value) {
        const scope = 'rotationSpeed';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.rotationSpeed = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get spherePositionRestriction() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.spherePositionRestriction;
    }
    set spherePositionRestriction(value) {
        const scope = 'spherePositionRestriction';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.center, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.radius, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.spherePositionRestriction = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get sphereTargetRestriction() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.sphereTargetRestriction;
    }
    set sphereTargetRestriction(value) {
        const scope = 'sphereTargetRestriction';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.center, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.radius, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.sphereTargetRestriction = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get target() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").target;
    }
    set target(value) {
        const scope = 'target';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").target = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get turntableCenter() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.turntableCenter;
    }
    set turntableCenter(value) {
        const scope = 'turntableCenter';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.turntableCenter = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get type() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").type;
    }
    get zoomRestriction() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.zoomRestriction;
    }
    set zoomRestriction(value) {
        const scope = 'zoomRestriction';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'object');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.minDistance, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value.maxDistance, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.zoomRestriction = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get zoomSpeed() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.zoomSpeed;
    }
    set zoomSpeed(value) {
        const scope = 'zoomSpeed';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").controls.zoomSpeed = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    get zoomToFactor() {
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").zoomExtentsFactor;
    }
    set zoomToFactor(value) {
        const scope = 'zoomToFactor';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").zoomExtentsFactor = value;
        __classPrivateFieldGet(this, _AbstractCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractCameraApi_viewportApi, "f").update();
    }
    // #endregion Public Getters And Setters (74)
    // #region Public Methods (7)
    animate(path, options) {
        const scope = 'animate';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, path, 'array');
        for (let i = 0; i < path.length; i++) {
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, path[i].position, 'vec3');
            __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, path[i].target, 'vec3');
        }
        __classPrivateFieldGet(this, _AbstractCameraApi_validateOptions, "f").call(this, scope, options);
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").animate(path, options);
    }
    calculateZoomTo(zoomTarget, startingPosition, startingTarget) {
        const scope = 'calculateZoomTo';
        if (zoomTarget !== undefined && !(zoomTarget instanceof viewer_shared_math_1.Box))
            throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${zoomTarget} is not of type Box.`, zoomTarget, 'Box');
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, startingPosition, 'vec3', false);
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, startingTarget, 'vec3', false);
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").calculateZoomTo(zoomTarget, startingPosition, startingTarget);
    }
    project(p) {
        const scope = 'project';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, p, 'vec3');
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").project(p);
    }
    reset(options) {
        const scope = 'reset';
        __classPrivateFieldGet(this, _AbstractCameraApi_validateOptions, "f").call(this, scope, options);
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").reset(options);
    }
    set(position, target, options) {
        const scope = 'set';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, position, 'vec3', false);
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, target, 'vec3', false);
        __classPrivateFieldGet(this, _AbstractCameraApi_validateOptions, "f").call(this, scope, options);
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").set(position, target, options);
    }
    unproject(p) {
        const scope = 'unproject';
        __classPrivateFieldGet(this, _AbstractCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, p, 'vec3', false);
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").unproject(p);
    }
    zoomTo(zoomTarget, options) {
        const scope = 'zoomTo';
        if (zoomTarget !== undefined && !(zoomTarget instanceof viewer_shared_math_1.Box))
            throw new viewer_shared_services_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${zoomTarget} is not of type Box.`, zoomTarget, 'Box');
        __classPrivateFieldGet(this, _AbstractCameraApi_validateOptions, "f").call(this, scope, options);
        return __classPrivateFieldGet(this, _AbstractCameraApi_camera, "f").zoomTo(zoomTarget, options);
    }
}
exports.AbstractCameraApi = AbstractCameraApi;
_AbstractCameraApi_camera = new WeakMap(), _AbstractCameraApi_inputValidator = new WeakMap(), _AbstractCameraApi_logger = new WeakMap(), _AbstractCameraApi_validateOptions = new WeakMap(), _AbstractCameraApi_viewportApi = new WeakMap();
//# sourceMappingURL=AbstractCameraApi.js.map

/***/ }),

/***/ 80246:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _OrthographicCameraApi_camera, _OrthographicCameraApi_inputValidator, _OrthographicCameraApi_logger, _OrthographicCameraApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrthographicCameraApi = void 0;
const AbstractCameraApi_1 = __webpack_require__(24806);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
class OrthographicCameraApi extends AbstractCameraApi_1.AbstractCameraApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, camera) {
        super(viewportApi, camera);
        // #region Properties (4)
        _OrthographicCameraApi_camera.set(this, void 0);
        _OrthographicCameraApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _OrthographicCameraApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _OrthographicCameraApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _OrthographicCameraApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _OrthographicCameraApi_camera, camera, "f");
        this.scope = 'OrthographicCameraApi';
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get direction() {
        return __classPrivateFieldGet(this, _OrthographicCameraApi_camera, "f").direction;
    }
    set direction(value) {
        const scope = 'direction';
        __classPrivateFieldGet(this, _OrthographicCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'enum', true, Object.values(viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION));
        __classPrivateFieldGet(this, _OrthographicCameraApi_camera, "f").direction = value;
        __classPrivateFieldGet(this, _OrthographicCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _OrthographicCameraApi_viewportApi, "f").update();
    }
}
exports.OrthographicCameraApi = OrthographicCameraApi;
_OrthographicCameraApi_camera = new WeakMap(), _OrthographicCameraApi_inputValidator = new WeakMap(), _OrthographicCameraApi_logger = new WeakMap(), _OrthographicCameraApi_viewportApi = new WeakMap();
//# sourceMappingURL=OrthographicCameraApi.js.map

/***/ }),

/***/ 69118:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PerspectiveCameraApi_camera, _PerspectiveCameraApi_inputValidator, _PerspectiveCameraApi_logger, _PerspectiveCameraApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerspectiveCameraApi = void 0;
const AbstractCameraApi_1 = __webpack_require__(24806);
const viewer_shared_services_1 = __webpack_require__(8389);
class PerspectiveCameraApi extends AbstractCameraApi_1.AbstractCameraApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, camera) {
        super(viewportApi, camera);
        // #region Properties (4)
        _PerspectiveCameraApi_camera.set(this, void 0);
        _PerspectiveCameraApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _PerspectiveCameraApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _PerspectiveCameraApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _PerspectiveCameraApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _PerspectiveCameraApi_camera, camera, "f");
        this.scope = 'PerspectiveCameraApi';
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get fov() {
        return __classPrivateFieldGet(this, _PerspectiveCameraApi_camera, "f").fov;
    }
    set fov(value) {
        const scope = 'fov';
        __classPrivateFieldGet(this, _PerspectiveCameraApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _PerspectiveCameraApi_camera, "f").fov = value;
        __classPrivateFieldGet(this, _PerspectiveCameraApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PerspectiveCameraApi_viewportApi, "f").update();
    }
}
exports.PerspectiveCameraApi = PerspectiveCameraApi;
_PerspectiveCameraApi_camera = new WeakMap(), _PerspectiveCameraApi_inputValidator = new WeakMap(), _PerspectiveCameraApi_logger = new WeakMap(), _PerspectiveCameraApi_viewportApi = new WeakMap();
//# sourceMappingURL=PerspectiveCameraApi.js.map

/***/ }),

/***/ 83441:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _AbstractLightApi_inputValidator, _AbstractLightApi_light, _AbstractLightApi_logger, _AbstractLightApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractLightApi = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class AbstractLightApi {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor(viewportApi, light) {
        // #region Properties (5)
        _AbstractLightApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _AbstractLightApi_light.set(this, void 0);
        _AbstractLightApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _AbstractLightApi_viewportApi.set(this, void 0);
        this.scope = 'AbstractLightApi';
        __classPrivateFieldSet(this, _AbstractLightApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _AbstractLightApi_light, light, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (10)
    get color() {
        return __classPrivateFieldGet(this, _AbstractLightApi_light, "f").color;
    }
    set color(value) {
        const scope = 'color';
        __classPrivateFieldGet(this, _AbstractLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _AbstractLightApi_light, "f").color = value;
        __classPrivateFieldGet(this, _AbstractLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractLightApi_viewportApi, "f").update();
    }
    get id() {
        return __classPrivateFieldGet(this, _AbstractLightApi_light, "f").id;
    }
    get intensity() {
        return __classPrivateFieldGet(this, _AbstractLightApi_light, "f").intensity;
    }
    set intensity(value) {
        const scope = 'intensity';
        __classPrivateFieldGet(this, _AbstractLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _AbstractLightApi_light, "f").intensity = value;
        __classPrivateFieldGet(this, _AbstractLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractLightApi_viewportApi, "f").update();
    }
    get name() {
        return __classPrivateFieldGet(this, _AbstractLightApi_light, "f").name;
    }
    set name(value) {
        const scope = 'name';
        __classPrivateFieldGet(this, _AbstractLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _AbstractLightApi_light, "f").name = value;
        __classPrivateFieldGet(this, _AbstractLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractLightApi_viewportApi, "f").update();
    }
    get order() {
        return __classPrivateFieldGet(this, _AbstractLightApi_light, "f").order;
    }
    set order(value) {
        const scope = 'order';
        __classPrivateFieldGet(this, _AbstractLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number', false);
        __classPrivateFieldGet(this, _AbstractLightApi_light, "f").order = value;
        __classPrivateFieldGet(this, _AbstractLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _AbstractLightApi_viewportApi, "f").update();
    }
    get type() {
        return __classPrivateFieldGet(this, _AbstractLightApi_light, "f").type;
    }
}
exports.AbstractLightApi = AbstractLightApi;
_AbstractLightApi_inputValidator = new WeakMap(), _AbstractLightApi_light = new WeakMap(), _AbstractLightApi_logger = new WeakMap(), _AbstractLightApi_viewportApi = new WeakMap();
//# sourceMappingURL=AbstractLightApi.js.map

/***/ }),

/***/ 13491:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _LightSceneApi_inputValidator, _LightSceneApi_lightScene, _LightSceneApi_lights, _LightSceneApi_logger, _LightSceneApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightSceneApi = void 0;
const AmbientLightApi_1 = __webpack_require__(93265);
const DirectionalLightApi_1 = __webpack_require__(10685);
const HemisphereLightApi_1 = __webpack_require__(89245);
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
const viewer_shared_services_1 = __webpack_require__(8389);
const PointLightApi_1 = __webpack_require__(66671);
const SpotLightApi_1 = __webpack_require__(32957);
class LightSceneApi {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor(viewportApi, lightScene) {
        // #region Properties (5)
        _LightSceneApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _LightSceneApi_lightScene.set(this, void 0);
        _LightSceneApi_lights.set(this, {});
        _LightSceneApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _LightSceneApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _LightSceneApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _LightSceneApi_lightScene, lightScene, "f");
        // Whenever a light is added or removed from the light scene, this update is called.
        __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").update = () => {
            for (const l in __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights) {
                if (!__classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l]) {
                    switch (__classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l].type) {
                        case viewer_rendering_engine_light_engine_1.LIGHT_TYPE.AMBIENT:
                            __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l] = new AmbientLightApi_1.AmbientLightApi(__classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f"), __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l]);
                            break;
                        case viewer_rendering_engine_light_engine_1.LIGHT_TYPE.DIRECTIONAL:
                            __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l] = new DirectionalLightApi_1.DirectionalLightApi(__classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f"), __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l]);
                            break;
                        case viewer_rendering_engine_light_engine_1.LIGHT_TYPE.HEMISPHERE:
                            __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l] = new HemisphereLightApi_1.HemisphereLightApi(__classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f"), __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l]);
                            break;
                        case viewer_rendering_engine_light_engine_1.LIGHT_TYPE.POINT:
                            __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l] = new PointLightApi_1.PointLightApi(__classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f"), __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l]);
                            break;
                        case viewer_rendering_engine_light_engine_1.LIGHT_TYPE.SPOT:
                            __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l] = new SpotLightApi_1.SpotLightApi(__classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f"), __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l]);
                            break;
                        default:
                    }
                }
            }
            for (const l in __classPrivateFieldGet(this, _LightSceneApi_lights, "f")) {
                if (!__classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").lights[l]) {
                    delete __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[l];
                }
            }
        };
        // We call it once in the beginning to get the current state.
        __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").update();
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (5)
    get id() {
        return __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").id;
    }
    get lights() {
        return __classPrivateFieldGet(this, _LightSceneApi_lights, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").name;
    }
    set name(value) {
        const scope = 'name';
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").name = value;
        __classPrivateFieldGet(this, _LightSceneApi_logger, "f").debug(`LightSceneApi.${scope}: ${scope} was set to: ${value}`);
    }
    get node() {
        return __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").node;
    }
    // #endregion Public Getters And Setters (5)
    // #region Public Methods (6)
    addAmbientLight(properties) {
        const scope = 'addAmbientLight';
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, properties, 'object', false);
        const prop = Object.assign({}, properties);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.color, 'color', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.intensity, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.id, 'string', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.name, 'string', false);
        const light = __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").addAmbientLight(properties);
        __classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f").update();
        return __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[light.id];
    }
    addDirectionalLight(properties) {
        const scope = 'addDirectionalLight';
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, properties, 'object', false);
        const prop = Object.assign({}, properties);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.color, 'color', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.intensity, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.direction, 'vec3', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.castShadow, 'boolean', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.shadowMapResolution, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.shadowMapBias, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.id, 'string', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.name, 'string', false);
        const light = __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").addDirectionalLight(properties);
        __classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f").update();
        return __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[light.id];
    }
    addHemisphereLight(properties) {
        const scope = 'addHemisphereLight';
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, properties, 'object', false);
        const prop = Object.assign({}, properties);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.color, 'color', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.intensity, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.groundColor, 'color', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.id, 'string', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.name, 'string', false);
        const light = __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").addHemisphereLight(properties);
        __classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f").update();
        return __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[light.id];
    }
    addPointLight(properties) {
        const scope = 'addPointLight';
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, properties, 'object', false);
        const prop = Object.assign({}, properties);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.color, 'color', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.intensity, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.position, 'vec3', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.distance, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.decay, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.id, 'string', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.name, 'string', false);
        const light = __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").addPointLight(properties);
        __classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f").update();
        return __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[light.id];
    }
    addSpotLight(properties) {
        const scope = 'addSpotLight';
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, properties, 'object', false);
        const prop = Object.assign({}, properties);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.color, 'color', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.intensity, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.position, 'vec3', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.target, 'vec3', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.distance, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.decay, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.angle, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.penumbra, 'number', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.id, 'string', false);
        __classPrivateFieldGet(this, _LightSceneApi_inputValidator, "f").validateAndError(`LightSceneApi.${scope}`, prop.name, 'string', false);
        const light = __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").addSpotLight(properties);
        __classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f").update();
        return __classPrivateFieldGet(this, _LightSceneApi_lights, "f")[light.id];
    }
    removeLight(id) {
        const check = __classPrivateFieldGet(this, _LightSceneApi_lightScene, "f").removeLight(id);
        __classPrivateFieldGet(this, _LightSceneApi_viewportApi, "f").update();
        return check;
    }
}
exports.LightSceneApi = LightSceneApi;
_LightSceneApi_inputValidator = new WeakMap(), _LightSceneApi_lightScene = new WeakMap(), _LightSceneApi_lights = new WeakMap(), _LightSceneApi_logger = new WeakMap(), _LightSceneApi_viewportApi = new WeakMap();
//# sourceMappingURL=LightSceneApi.js.map

/***/ }),

/***/ 93265:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _AmbientLightApi_light, _AmbientLightApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AmbientLightApi = void 0;
const AbstractLightApi_1 = __webpack_require__(83441);
class AmbientLightApi extends AbstractLightApi_1.AbstractLightApi {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(viewportApi, light) {
        super(viewportApi, light);
        // #region Properties (2)
        _AmbientLightApi_light.set(this, void 0);
        _AmbientLightApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _AmbientLightApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _AmbientLightApi_light, light, "f");
        this.scope = 'AmbientLightApi';
    }
}
exports.AmbientLightApi = AmbientLightApi;
_AmbientLightApi_light = new WeakMap(), _AmbientLightApi_viewportApi = new WeakMap();
//# sourceMappingURL=AmbientLightApi.js.map

/***/ }),

/***/ 10685:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _DirectionalLightApi_inputValidator, _DirectionalLightApi_light, _DirectionalLightApi_logger, _DirectionalLightApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DirectionalLightApi = void 0;
const AbstractLightApi_1 = __webpack_require__(83441);
const viewer_shared_services_1 = __webpack_require__(8389);
class DirectionalLightApi extends AbstractLightApi_1.AbstractLightApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, light) {
        super(viewportApi, light);
        // #region Properties (4)
        _DirectionalLightApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _DirectionalLightApi_light.set(this, void 0);
        _DirectionalLightApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _DirectionalLightApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _DirectionalLightApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _DirectionalLightApi_light, light, "f");
        this.scope = 'DirectionalLightApi';
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (8)
    get castShadow() {
        return __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").castShadow;
    }
    set castShadow(value) {
        const scope = 'castShadow';
        __classPrivateFieldGet(this, _DirectionalLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").castShadow = value;
        __classPrivateFieldGet(this, _DirectionalLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _DirectionalLightApi_viewportApi, "f").update();
    }
    get direction() {
        return __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").direction;
    }
    set direction(value) {
        const scope = 'direction';
        __classPrivateFieldGet(this, _DirectionalLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").direction = value;
        __classPrivateFieldGet(this, _DirectionalLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _DirectionalLightApi_viewportApi, "f").update();
    }
    get shadowMapBias() {
        return __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").shadowMapBias;
    }
    set shadowMapBias(value) {
        const scope = 'shadowMapBias';
        __classPrivateFieldGet(this, _DirectionalLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").shadowMapBias = value;
        __classPrivateFieldGet(this, _DirectionalLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _DirectionalLightApi_viewportApi, "f").update();
    }
    get shadowMapResolution() {
        return __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").shadowMapResolution;
    }
    set shadowMapResolution(value) {
        const scope = 'shadowMapResolution';
        __classPrivateFieldGet(this, _DirectionalLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _DirectionalLightApi_light, "f").shadowMapResolution = value;
        __classPrivateFieldGet(this, _DirectionalLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _DirectionalLightApi_viewportApi, "f").update();
    }
}
exports.DirectionalLightApi = DirectionalLightApi;
_DirectionalLightApi_inputValidator = new WeakMap(), _DirectionalLightApi_light = new WeakMap(), _DirectionalLightApi_logger = new WeakMap(), _DirectionalLightApi_viewportApi = new WeakMap();
//# sourceMappingURL=DirectionalLightApi.js.map

/***/ }),

/***/ 89245:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _HemisphereLightApi_inputValidator, _HemisphereLightApi_light, _HemisphereLightApi_logger, _HemisphereLightApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HemisphereLightApi = void 0;
const AbstractLightApi_1 = __webpack_require__(83441);
const viewer_shared_services_1 = __webpack_require__(8389);
class HemisphereLightApi extends AbstractLightApi_1.AbstractLightApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, light) {
        super(viewportApi, light);
        // #region Properties (4)
        _HemisphereLightApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _HemisphereLightApi_light.set(this, void 0);
        _HemisphereLightApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _HemisphereLightApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _HemisphereLightApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _HemisphereLightApi_light, light, "f");
        this.scope = 'HemisphereLightApi';
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get groundColor() {
        return __classPrivateFieldGet(this, _HemisphereLightApi_light, "f").groundColor;
    }
    set groundColor(value) {
        const scope = 'groundColor';
        __classPrivateFieldGet(this, _HemisphereLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'color');
        __classPrivateFieldGet(this, _HemisphereLightApi_light, "f").groundColor = value;
        __classPrivateFieldGet(this, _HemisphereLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _HemisphereLightApi_viewportApi, "f").update();
    }
}
exports.HemisphereLightApi = HemisphereLightApi;
_HemisphereLightApi_inputValidator = new WeakMap(), _HemisphereLightApi_light = new WeakMap(), _HemisphereLightApi_logger = new WeakMap(), _HemisphereLightApi_viewportApi = new WeakMap();
//# sourceMappingURL=HemisphereLightApi.js.map

/***/ }),

/***/ 66671:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _PointLightApi_inputValidator, _PointLightApi_light, _PointLightApi_logger, _PointLightApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointLightApi = void 0;
const AbstractLightApi_1 = __webpack_require__(83441);
const viewer_shared_services_1 = __webpack_require__(8389);
class PointLightApi extends AbstractLightApi_1.AbstractLightApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, light) {
        super(viewportApi, light);
        // #region Properties (4)
        _PointLightApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _PointLightApi_light.set(this, void 0);
        _PointLightApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _PointLightApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _PointLightApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _PointLightApi_light, light, "f");
        this.scope = 'PointLightApi';
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (6)
    get decay() {
        return __classPrivateFieldGet(this, _PointLightApi_light, "f").decay;
    }
    set decay(value) {
        const scope = 'decay';
        __classPrivateFieldGet(this, _PointLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _PointLightApi_light, "f").decay = value;
        __classPrivateFieldGet(this, _PointLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PointLightApi_viewportApi, "f").update();
    }
    get distance() {
        return __classPrivateFieldGet(this, _PointLightApi_light, "f").distance;
    }
    set distance(value) {
        const scope = 'distance';
        __classPrivateFieldGet(this, _PointLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _PointLightApi_light, "f").distance = value;
        __classPrivateFieldGet(this, _PointLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PointLightApi_viewportApi, "f").update();
    }
    get position() {
        return __classPrivateFieldGet(this, _PointLightApi_light, "f").position;
    }
    set position(value) {
        const scope = 'position';
        __classPrivateFieldGet(this, _PointLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _PointLightApi_light, "f").position = value;
        __classPrivateFieldGet(this, _PointLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _PointLightApi_viewportApi, "f").update();
    }
}
exports.PointLightApi = PointLightApi;
_PointLightApi_inputValidator = new WeakMap(), _PointLightApi_light = new WeakMap(), _PointLightApi_logger = new WeakMap(), _PointLightApi_viewportApi = new WeakMap();
//# sourceMappingURL=PointLightApi.js.map

/***/ }),

/***/ 32957:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SpotLightApi_inputValidator, _SpotLightApi_light, _SpotLightApi_logger, _SpotLightApi_viewportApi;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpotLightApi = void 0;
const AbstractLightApi_1 = __webpack_require__(83441);
const viewer_shared_services_1 = __webpack_require__(8389);
class SpotLightApi extends AbstractLightApi_1.AbstractLightApi {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(viewportApi, light) {
        super(viewportApi, light);
        // #region Properties (4)
        _SpotLightApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _SpotLightApi_light.set(this, void 0);
        _SpotLightApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _SpotLightApi_viewportApi.set(this, void 0);
        __classPrivateFieldSet(this, _SpotLightApi_viewportApi, viewportApi, "f");
        __classPrivateFieldSet(this, _SpotLightApi_light, light, "f");
        this.scope = 'SpotLightApi';
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (12)
    get angle() {
        return __classPrivateFieldGet(this, _SpotLightApi_light, "f").angle;
    }
    set angle(value) {
        const scope = 'angle';
        __classPrivateFieldGet(this, _SpotLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _SpotLightApi_light, "f").angle = value;
        __classPrivateFieldGet(this, _SpotLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _SpotLightApi_viewportApi, "f").update();
    }
    get decay() {
        return __classPrivateFieldGet(this, _SpotLightApi_light, "f").decay;
    }
    set decay(value) {
        const scope = 'decay';
        __classPrivateFieldGet(this, _SpotLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _SpotLightApi_light, "f").decay = value;
        __classPrivateFieldGet(this, _SpotLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _SpotLightApi_viewportApi, "f").update();
    }
    get distance() {
        return __classPrivateFieldGet(this, _SpotLightApi_light, "f").distance;
    }
    set distance(value) {
        const scope = 'distance';
        __classPrivateFieldGet(this, _SpotLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _SpotLightApi_light, "f").distance = value;
        __classPrivateFieldGet(this, _SpotLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _SpotLightApi_viewportApi, "f").update();
    }
    get penumbra() {
        return __classPrivateFieldGet(this, _SpotLightApi_light, "f").penumbra;
    }
    set penumbra(value) {
        const scope = 'penumbra';
        __classPrivateFieldGet(this, _SpotLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _SpotLightApi_light, "f").penumbra = value;
        __classPrivateFieldGet(this, _SpotLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _SpotLightApi_viewportApi, "f").update();
    }
    get position() {
        return __classPrivateFieldGet(this, _SpotLightApi_light, "f").position;
    }
    set position(value) {
        const scope = 'position';
        __classPrivateFieldGet(this, _SpotLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _SpotLightApi_light, "f").position = value;
        __classPrivateFieldGet(this, _SpotLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _SpotLightApi_viewportApi, "f").update();
    }
    get target() {
        return __classPrivateFieldGet(this, _SpotLightApi_light, "f").target;
    }
    set target(value) {
        const scope = 'target';
        __classPrivateFieldGet(this, _SpotLightApi_inputValidator, "f").validateAndError(`${this.scope}.${scope}`, value, 'vec3');
        __classPrivateFieldGet(this, _SpotLightApi_light, "f").target = value;
        __classPrivateFieldGet(this, _SpotLightApi_logger, "f").debug(`${this.scope}.${scope}: ${scope} was set to: ${value}`);
        __classPrivateFieldGet(this, _SpotLightApi_viewportApi, "f").update();
    }
}
exports.SpotLightApi = SpotLightApi;
_SpotLightApi_inputValidator = new WeakMap(), _SpotLightApi_light = new WeakMap(), _SpotLightApi_logger = new WeakMap(), _SpotLightApi_viewportApi = new WeakMap();
//# sourceMappingURL=SpotLightApi.js.map

/***/ }),

/***/ 71202:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Box = exports.EVENTTYPE_TASK = exports.EVENTTYPE_DRAWING_TOOLS = exports.EVENTTYPE_GUMBALL = exports.EVENTTYPE_INTERACTION = exports.EVENTTYPE_VIEWPORT = exports.EVENTTYPE_SESSION = exports.EVENTTYPE_SCENE = exports.EVENTTYPE_RENDERING = exports.EVENTTYPE_PARAMETER = exports.EVENTTYPE_OUTPUT = exports.EVENTTYPE_CAMERA = exports.EVENTTYPE = exports.TASK_TYPE = exports.SPINNER_POSITIONING = exports.SESSION_SETTINGS_MODE = exports.BUSY_MODE_DISPLAY = exports.SDTF_TYPEHINT = exports.TEXTURE_FILTERING = exports.TEXTURE_WRAPPING = exports.MATERIAL_TYPE = exports.MATERIAL_SHADING = exports.MATERIAL_ALPHA = exports.MATERIAL_SIDE = exports.PRIMITIVE_MODE = exports.LOGGING_LEVEL = exports.ENVIRONMENT_MAP_EMPTY = exports.ENVIRONMENT_MAP_CUBE = exports.ENVIRONMENT_MAP = exports.TONE_MAPPING = exports.TEXTURE_ENCODING = exports.ORTHOGRAPHIC_CAMERA_DIRECTION = exports.VISIBILITY_MODE = exports.RENDERER_TYPE = exports.LIGHT_TYPE = exports.CAMERA_TYPE = exports.TAG3D_JUSTIFICATION = exports.PARAMETER_VISUALIZATION = exports.EXPORT_TYPE = exports.PARAMETER_TYPE = exports.FLAG_TYPE = exports.TreeNode = exports.Tree = exports.version = exports.generalOptions = exports.sceneTree = exports.removeListener = exports.addListener = exports.viewports = exports.createViewport = void 0;
exports.isViewerError = exports.ShapeDiverGeometryBackendResponseErrorType = exports.ShapeDiverGeometryBackendResponseError = exports.ShapeDiverGeometryBackendRequestError = exports.ShapeDiverGeometryBackendError = exports.ShapeDiverViewerDrawingToolsError = exports.ShapeDiverViewerInteractionError = exports.ShapeDiverViewerValidationError = exports.ShapeDiverViewerCameraError = exports.ShapeDiverViewerLightError = exports.ShapeDiverViewerArError = exports.ShapeDiverViewerUnknownError = exports.ShapeDiverViewerViewportError = exports.ShapeDiverViewerSessionError = exports.ShapeDiverViewerSettingsError = exports.ShapeDiverViewerWebGLError = exports.ShapeDiverViewerEnvironmentMapError = exports.ShapeDiverViewerDataProcessingError = exports.ShapeDiverViewerError = exports.ShapeDiverViewerErrorType = exports.MaterialEngine = exports.GeometryEngine = exports.DataEngine = exports.SdtfPrimitiveTypeGuard = exports.SDTFItemData = exports.SDTFAttributeData = exports.SDTFAttributesData = exports.SDTFOverviewData = exports.CustomData = exports.HTMLElementAnchorData = exports.HTMLElementAnchorImageData = exports.HTMLElementAnchorTextData = exports.HTMLElementAnchorCustomData = exports.MaterialVariantsData = exports.PrimitiveData = exports.AttributeData = exports.GeometryData = exports.AnimationData = exports.MapData = exports.MaterialBasicLineData = exports.MaterialMultiPointData = exports.MaterialPointData = exports.MaterialGemData = exports.MaterialSpecularGlossinessData = exports.MaterialShadowData = exports.MaterialUnlitData = exports.MaterialStandardData = exports.ShapeDiverResponseModelComputationStatus = exports.ThreejsData = exports.Sphere = void 0;
exports.stringify = exports.isValid = exports.Resolution = exports.KernelSize = exports.VignetteTechnique = exports.BlendFunction = exports.EffectComposer = exports.Effect = exports.VignetteEffect = exports.TiltShiftEffect = exports.SepiaEffect = exports.SelectiveBloomEffect = exports.ScanlineEffect = exports.SSAOEffect = exports.PixelationEffect = exports.OutlineEffect = exports.NoiseEffect = exports.HueSaturationEffect = exports.GridEffect = exports.GodRaysEffect = exports.DotScreenEffect = exports.DepthOfFieldEffect = exports.ChromaticAberrationEffect = exports.BloomEffect = exports.POST_PROCESSING_EFFECT_TYPE = exports.ANTI_ALIASING_TECHNIQUE = exports.isViewerGeometryBackendResponseError = exports.isViewerGeometryBackendRequestError = exports.isViewerGeometryBackendGenericError = exports.isViewerGeometryBackendError = exports.isViewerDrawingToolsError = exports.isViewerInteractionError = exports.isViewerValidationError = exports.isARError = exports.isViewerCameraError = exports.isViewerLightError = exports.isViewerViewportError = exports.isViewerSessionError = exports.isViewerSettingsError = exports.isViewerWebGLError = exports.isViewerEnvironmentMapError = exports.isViewerDataProcessingError = exports.isViewerUnknownError = void 0;
const viewer_api_general_1 = __webpack_require__(27444);
Object.defineProperty(exports, "addListener", ({ enumerable: true, get: function () { return viewer_api_general_1.addListener; } }));
Object.defineProperty(exports, "generalOptions", ({ enumerable: true, get: function () { return viewer_api_general_1.generalOptions; } }));
Object.defineProperty(exports, "removeListener", ({ enumerable: true, get: function () { return viewer_api_general_1.removeListener; } }));
Object.defineProperty(exports, "sceneTree", ({ enumerable: true, get: function () { return viewer_api_general_1.sceneTree; } }));
Object.defineProperty(exports, "version", ({ enumerable: true, get: function () { return viewer_api_general_1.version; } }));
const viewer_shared_types_1 = __webpack_require__(64766);
Object.defineProperty(exports, "AnimationData", ({ enumerable: true, get: function () { return viewer_shared_types_1.AnimationData; } }));
Object.defineProperty(exports, "AttributeData", ({ enumerable: true, get: function () { return viewer_shared_types_1.AttributeData; } }));
Object.defineProperty(exports, "CustomData", ({ enumerable: true, get: function () { return viewer_shared_types_1.CustomData; } }));
Object.defineProperty(exports, "GeometryData", ({ enumerable: true, get: function () { return viewer_shared_types_1.GeometryData; } }));
Object.defineProperty(exports, "HTMLElementAnchorCustomData", ({ enumerable: true, get: function () { return viewer_shared_types_1.HTMLElementAnchorCustomData; } }));
Object.defineProperty(exports, "HTMLElementAnchorData", ({ enumerable: true, get: function () { return viewer_shared_types_1.HTMLElementAnchorData; } }));
Object.defineProperty(exports, "HTMLElementAnchorImageData", ({ enumerable: true, get: function () { return viewer_shared_types_1.HTMLElementAnchorImageData; } }));
Object.defineProperty(exports, "HTMLElementAnchorTextData", ({ enumerable: true, get: function () { return viewer_shared_types_1.HTMLElementAnchorTextData; } }));
Object.defineProperty(exports, "MapData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MapData; } }));
Object.defineProperty(exports, "MATERIAL_ALPHA", ({ enumerable: true, get: function () { return viewer_shared_types_1.MATERIAL_ALPHA; } }));
Object.defineProperty(exports, "MATERIAL_SHADING", ({ enumerable: true, get: function () { return viewer_shared_types_1.MATERIAL_SHADING; } }));
Object.defineProperty(exports, "MATERIAL_SIDE", ({ enumerable: true, get: function () { return viewer_shared_types_1.MATERIAL_SIDE; } }));
Object.defineProperty(exports, "MATERIAL_TYPE", ({ enumerable: true, get: function () { return viewer_shared_types_1.MATERIAL_TYPE; } }));
Object.defineProperty(exports, "MaterialBasicLineData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialBasicLineData; } }));
Object.defineProperty(exports, "MaterialGemData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialGemData; } }));
Object.defineProperty(exports, "MaterialMultiPointData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialMultiPointData; } }));
Object.defineProperty(exports, "MaterialPointData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialPointData; } }));
Object.defineProperty(exports, "MaterialShadowData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialShadowData; } }));
Object.defineProperty(exports, "MaterialSpecularGlossinessData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialSpecularGlossinessData; } }));
Object.defineProperty(exports, "MaterialStandardData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialStandardData; } }));
Object.defineProperty(exports, "MaterialUnlitData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialUnlitData; } }));
Object.defineProperty(exports, "MaterialVariantsData", ({ enumerable: true, get: function () { return viewer_shared_types_1.MaterialVariantsData; } }));
Object.defineProperty(exports, "PARAMETER_TYPE", ({ enumerable: true, get: function () { return viewer_shared_types_1.PARAMETER_TYPE; } }));
Object.defineProperty(exports, "PARAMETER_VISUALIZATION", ({ enumerable: true, get: function () { return viewer_shared_types_1.PARAMETER_VISUALIZATION; } }));
Object.defineProperty(exports, "PRIMITIVE_MODE", ({ enumerable: true, get: function () { return viewer_shared_types_1.PRIMITIVE_MODE; } }));
Object.defineProperty(exports, "PrimitiveData", ({ enumerable: true, get: function () { return viewer_shared_types_1.PrimitiveData; } }));
Object.defineProperty(exports, "SDTF_TYPEHINT", ({ enumerable: true, get: function () { return viewer_shared_types_1.SDTF_TYPEHINT; } }));
Object.defineProperty(exports, "SDTFAttributeData", ({ enumerable: true, get: function () { return viewer_shared_types_1.SDTFAttributeData; } }));
Object.defineProperty(exports, "SDTFAttributesData", ({ enumerable: true, get: function () { return viewer_shared_types_1.SDTFAttributesData; } }));
Object.defineProperty(exports, "SDTFItemData", ({ enumerable: true, get: function () { return viewer_shared_types_1.SDTFItemData; } }));
Object.defineProperty(exports, "SDTFOverviewData", ({ enumerable: true, get: function () { return viewer_shared_types_1.SDTFOverviewData; } }));
Object.defineProperty(exports, "SdtfPrimitiveTypeGuard", ({ enumerable: true, get: function () { return viewer_shared_types_1.SdtfPrimitiveTypeGuard; } }));
Object.defineProperty(exports, "TASK_TYPE", ({ enumerable: true, get: function () { return viewer_shared_types_1.TASK_TYPE; } }));
Object.defineProperty(exports, "TEXTURE_FILTERING", ({ enumerable: true, get: function () { return viewer_shared_types_1.TEXTURE_FILTERING; } }));
Object.defineProperty(exports, "TEXTURE_WRAPPING", ({ enumerable: true, get: function () { return viewer_shared_types_1.TEXTURE_WRAPPING; } }));
const viewer_rendering_engine_rendering_engine_threejs_1 = __webpack_require__(27068);
Object.defineProperty(exports, "ANTI_ALIASING_TECHNIQUE", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ANTI_ALIASING_TECHNIQUE; } }));
Object.defineProperty(exports, "BlendFunction", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.BlendFunction; } }));
Object.defineProperty(exports, "BloomEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.BloomEffect; } }));
Object.defineProperty(exports, "ChromaticAberrationEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ChromaticAberrationEffect; } }));
Object.defineProperty(exports, "DepthOfFieldEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.DepthOfFieldEffect; } }));
Object.defineProperty(exports, "DotScreenEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.DotScreenEffect; } }));
Object.defineProperty(exports, "Effect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.Effect; } }));
Object.defineProperty(exports, "EffectComposer", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.EffectComposer; } }));
Object.defineProperty(exports, "ENVIRONMENT_MAP", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ENVIRONMENT_MAP; } }));
Object.defineProperty(exports, "ENVIRONMENT_MAP_CUBE", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ENVIRONMENT_MAP_CUBE; } }));
Object.defineProperty(exports, "ENVIRONMENT_MAP_EMPTY", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ENVIRONMENT_MAP_EMPTY; } }));
Object.defineProperty(exports, "GodRaysEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.GodRaysEffect; } }));
Object.defineProperty(exports, "GridEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.GridEffect; } }));
Object.defineProperty(exports, "HueSaturationEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.HueSaturationEffect; } }));
Object.defineProperty(exports, "KernelSize", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.KernelSize; } }));
Object.defineProperty(exports, "NoiseEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.NoiseEffect; } }));
Object.defineProperty(exports, "OutlineEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.OutlineEffect; } }));
Object.defineProperty(exports, "PixelationEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.PixelationEffect; } }));
Object.defineProperty(exports, "POST_PROCESSING_EFFECT_TYPE", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.POST_PROCESSING_EFFECT_TYPE; } }));
Object.defineProperty(exports, "Resolution", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.Resolution; } }));
Object.defineProperty(exports, "ScanlineEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ScanlineEffect; } }));
Object.defineProperty(exports, "SelectiveBloomEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.SelectiveBloomEffect; } }));
Object.defineProperty(exports, "SepiaEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.SepiaEffect; } }));
Object.defineProperty(exports, "SSAOEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.SSAOEffect; } }));
Object.defineProperty(exports, "ThreejsData", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.ThreejsData; } }));
Object.defineProperty(exports, "TiltShiftEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.TiltShiftEffect; } }));
Object.defineProperty(exports, "VignetteEffect", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.VignetteEffect; } }));
Object.defineProperty(exports, "VignetteTechnique", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_threejs_1.VignetteTechnique; } }));
const viewer_shared_math_1 = __webpack_require__(67275);
Object.defineProperty(exports, "Box", ({ enumerable: true, get: function () { return viewer_shared_math_1.Box; } }));
Object.defineProperty(exports, "Sphere", ({ enumerable: true, get: function () { return viewer_shared_math_1.Sphere; } }));
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
Object.defineProperty(exports, "BUSY_MODE_DISPLAY", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY; } }));
Object.defineProperty(exports, "FLAG_TYPE", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.FLAG_TYPE; } }));
Object.defineProperty(exports, "RENDERER_TYPE", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE; } }));
Object.defineProperty(exports, "SPINNER_POSITIONING", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.SPINNER_POSITIONING; } }));
Object.defineProperty(exports, "TEXTURE_ENCODING", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING; } }));
Object.defineProperty(exports, "TONE_MAPPING", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.TONE_MAPPING; } }));
Object.defineProperty(exports, "VISIBILITY_MODE", ({ enumerable: true, get: function () { return viewer_rendering_engine_rendering_engine_1.VISIBILITY_MODE; } }));
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
Object.defineProperty(exports, "CAMERA_TYPE", ({ enumerable: true, get: function () { return viewer_rendering_engine_camera_engine_1.CAMERA_TYPE; } }));
Object.defineProperty(exports, "ORTHOGRAPHIC_CAMERA_DIRECTION", ({ enumerable: true, get: function () { return viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION; } }));
const main_1 = __webpack_require__(35957);
Object.defineProperty(exports, "createViewport", ({ enumerable: true, get: function () { return main_1.createViewport; } }));
Object.defineProperty(exports, "viewports", ({ enumerable: true, get: function () { return main_1.viewports; } }));
const viewer_data_engine_data_engine_1 = __webpack_require__(95292);
Object.defineProperty(exports, "DataEngine", ({ enumerable: true, get: function () { return viewer_data_engine_data_engine_1.DataEngine; } }));
const viewer_shared_services_1 = __webpack_require__(8389);
Object.defineProperty(exports, "EVENTTYPE", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE; } }));
Object.defineProperty(exports, "EVENTTYPE_CAMERA", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_CAMERA; } }));
Object.defineProperty(exports, "EVENTTYPE_DRAWING_TOOLS", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_DRAWING_TOOLS; } }));
Object.defineProperty(exports, "EVENTTYPE_GUMBALL", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_GUMBALL; } }));
Object.defineProperty(exports, "EVENTTYPE_INTERACTION", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_INTERACTION; } }));
Object.defineProperty(exports, "EVENTTYPE_OUTPUT", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_OUTPUT; } }));
Object.defineProperty(exports, "EVENTTYPE_PARAMETER", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_PARAMETER; } }));
Object.defineProperty(exports, "EVENTTYPE_RENDERING", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_RENDERING; } }));
Object.defineProperty(exports, "EVENTTYPE_SCENE", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_SCENE; } }));
Object.defineProperty(exports, "EVENTTYPE_SESSION", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_SESSION; } }));
Object.defineProperty(exports, "EVENTTYPE_TASK", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_TASK; } }));
Object.defineProperty(exports, "EVENTTYPE_VIEWPORT", ({ enumerable: true, get: function () { return viewer_shared_services_1.EVENTTYPE_VIEWPORT; } }));
Object.defineProperty(exports, "isARError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isARError; } }));
Object.defineProperty(exports, "isValid", ({ enumerable: true, get: function () { return viewer_shared_services_1.isValid; } }));
Object.defineProperty(exports, "isViewerCameraError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerCameraError; } }));
Object.defineProperty(exports, "isViewerDataProcessingError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerDataProcessingError; } }));
Object.defineProperty(exports, "isViewerDrawingToolsError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerDrawingToolsError; } }));
Object.defineProperty(exports, "isViewerEnvironmentMapError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerEnvironmentMapError; } }));
Object.defineProperty(exports, "isViewerError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerGeometryBackendError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendGenericError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerGeometryBackendGenericError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendRequestError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerGeometryBackendRequestError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendResponseError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerGeometryBackendResponseError; } }));
Object.defineProperty(exports, "isViewerInteractionError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerInteractionError; } }));
Object.defineProperty(exports, "isViewerLightError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerLightError; } }));
Object.defineProperty(exports, "isViewerSessionError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerSessionError; } }));
Object.defineProperty(exports, "isViewerSettingsError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerSettingsError; } }));
Object.defineProperty(exports, "isViewerUnknownError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerUnknownError; } }));
Object.defineProperty(exports, "isViewerValidationError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerValidationError; } }));
Object.defineProperty(exports, "isViewerViewportError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerViewportError; } }));
Object.defineProperty(exports, "isViewerWebGLError", ({ enumerable: true, get: function () { return viewer_shared_services_1.isViewerWebGLError; } }));
Object.defineProperty(exports, "LOGGING_LEVEL", ({ enumerable: true, get: function () { return viewer_shared_services_1.LOGGING_LEVEL; } }));
Object.defineProperty(exports, "SESSION_SETTINGS_MODE", ({ enumerable: true, get: function () { return viewer_shared_services_1.SESSION_SETTINGS_MODE; } }));
Object.defineProperty(exports, "ShapeDiverGeometryBackendError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverGeometryBackendError; } }));
Object.defineProperty(exports, "ShapeDiverGeometryBackendRequestError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverGeometryBackendRequestError; } }));
Object.defineProperty(exports, "ShapeDiverGeometryBackendResponseError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverGeometryBackendResponseError; } }));
Object.defineProperty(exports, "ShapeDiverGeometryBackendResponseErrorType", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverGeometryBackendResponseErrorType; } }));
Object.defineProperty(exports, "ShapeDiverViewerArError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerArError; } }));
Object.defineProperty(exports, "ShapeDiverViewerCameraError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerCameraError; } }));
Object.defineProperty(exports, "ShapeDiverViewerDataProcessingError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerDataProcessingError; } }));
Object.defineProperty(exports, "ShapeDiverViewerDrawingToolsError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerDrawingToolsError; } }));
Object.defineProperty(exports, "ShapeDiverViewerEnvironmentMapError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerEnvironmentMapError; } }));
Object.defineProperty(exports, "ShapeDiverViewerError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerError; } }));
Object.defineProperty(exports, "ShapeDiverViewerErrorType", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerErrorType; } }));
Object.defineProperty(exports, "ShapeDiverViewerInteractionError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerInteractionError; } }));
Object.defineProperty(exports, "ShapeDiverViewerLightError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerLightError; } }));
Object.defineProperty(exports, "ShapeDiverViewerSessionError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerSessionError; } }));
Object.defineProperty(exports, "ShapeDiverViewerSettingsError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerSettingsError; } }));
Object.defineProperty(exports, "ShapeDiverViewerUnknownError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerUnknownError; } }));
Object.defineProperty(exports, "ShapeDiverViewerValidationError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerValidationError; } }));
Object.defineProperty(exports, "ShapeDiverViewerViewportError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerViewportError; } }));
Object.defineProperty(exports, "ShapeDiverViewerWebGLError", ({ enumerable: true, get: function () { return viewer_shared_services_1.ShapeDiverViewerWebGLError; } }));
Object.defineProperty(exports, "stringify", ({ enumerable: true, get: function () { return viewer_shared_services_1.stringify; } }));
const viewer_data_engine_geometry_engine_1 = __webpack_require__(50432);
Object.defineProperty(exports, "GeometryEngine", ({ enumerable: true, get: function () { return viewer_data_engine_geometry_engine_1.GeometryEngine; } }));
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
Object.defineProperty(exports, "TAG3D_JUSTIFICATION", ({ enumerable: true, get: function () { return viewer_data_engine_shared_types_1.TAG3D_JUSTIFICATION; } }));
const viewer_shared_node_tree_1 = __webpack_require__(41652);
Object.defineProperty(exports, "Tree", ({ enumerable: true, get: function () { return viewer_shared_node_tree_1.Tree; } }));
Object.defineProperty(exports, "TreeNode", ({ enumerable: true, get: function () { return viewer_shared_node_tree_1.TreeNode; } }));
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
Object.defineProperty(exports, "LIGHT_TYPE", ({ enumerable: true, get: function () { return viewer_rendering_engine_light_engine_1.LIGHT_TYPE; } }));
const viewer_data_engine_material_engine_1 = __webpack_require__(93637);
Object.defineProperty(exports, "MaterialEngine", ({ enumerable: true, get: function () { return viewer_data_engine_material_engine_1.MaterialEngine; } }));
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
Object.defineProperty(exports, "EXPORT_TYPE", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseExportDefinitionType; } }));
Object.defineProperty(exports, "ShapeDiverResponseModelComputationStatus", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 35957:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createViewport = exports.viewports = void 0;
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const viewer_creation_control_center_viewport_1 = __webpack_require__(82890);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_api_general_1 = __webpack_require__(27444);
const ViewportApi_1 = __webpack_require__(21563);
const creationControlCenterViewport = viewer_creation_control_center_viewport_1.CreationControlCenterViewport.instance;
const inputValidator = viewer_shared_services_1.InputValidator.instance;
const logger = viewer_shared_services_1.Logger.instance;
/**
 * The viewports that are currently being used.
 */
exports.viewports = {};
// Whenever a session or viewport is added or removed, this update is called.
creationControlCenterViewport.updateViewports = (renderingEngines) => {
    for (const v in renderingEngines)
        if (!exports.viewports[v])
            exports.viewports[v] = new ViewportApi_1.ViewportApi(renderingEngines[v]);
    for (const v in exports.viewports) {
        if (!renderingEngines[v])
            delete exports.viewports[v];
    }
};
/**
 * Create and initialize a viewport with the provided type and canvas,
 * and return a viewport api object allowing to control it.
 *
 * An optional identifier for the viewport can be provided. This identifier can be used to retrieve the
 * viewport object from {@link viewports}. In case no identifier is provided, a unique one will be generated.
 *
 * By default a new viewport displays the complete scene tree. Viewports can be excluded from
 * displaying geometry for specific sessions by using the {@link excludeViewports} property of
 * {@link ISessionApi}.
 *
 * @param properties.visibility The visibility of the viewport.
 * @param properties.canvas The canvas that the viewport should use. A canvas element will be created if none is provided.
 * @param properties.id The unique identifier to use for the viewport.
 * @param properties.branding Optional branding options.
 * @param properties.sessionSettingsId Optional identifier of the session to be used for loading / persisting settings of the viewport when the {@link SESSION_SETTINGS_MODE} is set to MANUAL.
 * @param properties.sessionSettingsMode Allows to control which session to use for loading / persisting settings of the viewport. (default: {@link SESSION_SETTINGS_MODE.FIRST}).
 * @returns
 */
const createViewport = (properties) => __awaiter(void 0, void 0, void 0, function* () {
    (0, viewer_api_general_1.showConsoleMessage)();
    const prop = Object.assign({}, properties);
    const copy = Object.fromEntries(Object.entries(prop).filter(([key]) => key !== 'canvas'));
    logger.debug(`createSession: Creating and initializing session with properties ${JSON.stringify(copy)}.`);
    inputValidator.validateAndError('createViewport', properties, 'object', false);
    inputValidator.validateAndError('createViewport', prop.canvas, 'HTMLCanvasElement', false);
    inputValidator.validateAndError('createViewport', prop.id, 'string', false);
    inputValidator.validateAndError('createViewport', prop.sessionSettingsId, 'string', false);
    inputValidator.validateAndError('createViewport', prop.sessionSettingsMode, 'enum', false, Object.values(viewer_shared_services_1.SESSION_SETTINGS_MODE));
    inputValidator.validateAndError('createViewport', prop.visibility, 'enum', false, Object.values(viewer_rendering_engine_rendering_engine_1.VISIBILITY_MODE));
    inputValidator.validateAndError('createViewport', prop.branding, 'object', false);
    const branding = Object.assign({}, prop.branding);
    if (branding.logo !== null)
        inputValidator.validateAndError('createViewport', branding.logo, 'string', false);
    inputValidator.validateAndError('createViewport', branding.backgroundColor, 'string', false);
    inputValidator.validateAndError('createViewport', branding.busyModeSpinner, 'string', false);
    inputValidator.validateAndError('createViewport', branding.busyModeDisplay, 'enum', false, Object.values(viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY));
    inputValidator.validateAndError('createViewport', branding.spinnerPositioning, 'enum', false, Object.values(viewer_rendering_engine_rendering_engine_1.SPINNER_POSITIONING));
    prop.sessionSettingsMode = prop.sessionSettingsMode !== undefined ? prop.sessionSettingsMode : viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST;
    if (prop.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL && !prop.sessionSettingsId)
        throw new viewer_shared_services_1.ShapeDiverViewerValidationError('createViewport: Input could not be validated. sessionSettingsId has to point to a valid and created session when using SESSION_SETTINGS_MODE.MANUAL', prop.sessionSettingsId, 'string');
    const renderingEngine = yield creationControlCenterViewport.createViewportEngine(prop);
    exports.viewports[renderingEngine.id] = new ViewportApi_1.ViewportApi(renderingEngine);
    return exports.viewports[renderingEngine.id];
});
exports.createViewport = createViewport;
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 96571:
/***/ (function(module) {

// stats.js - http://github.com/mrdoob/stats.js
(function(f,e){ true?module.exports=e():0})(this,function(){var f=function(){function e(a){c.appendChild(a.dom);return a}function u(a){for(var d=0;d<c.children.length;d++)c.children[d].style.display=d===a?"block":"none";l=a}var l=0,c=document.createElement("div");c.style.cssText="position:fixed;top:0;left:0;cursor:pointer;opacity:0.9;z-index:10000";c.addEventListener("click",function(a){a.preventDefault();
u(++l%c.children.length)},!1);var k=(performance||Date).now(),g=k,a=0,r=e(new f.Panel("FPS","#0ff","#002")),h=e(new f.Panel("MS","#0f0","#020"));if(self.performance&&self.performance.memory)var t=e(new f.Panel("MB","#f08","#201"));u(0);return{REVISION:16,dom:c,addPanel:e,showPanel:u,begin:function(){k=(performance||Date).now()},end:function(){a++;var c=(performance||Date).now();h.update(c-k,200);if(c>g+1E3&&(r.update(1E3*a/(c-g),100),g=c,a=0,t)){var d=performance.memory;t.update(d.usedJSHeapSize/
1048576,d.jsHeapSizeLimit/1048576)}return c},update:function(){k=this.end()},domElement:c,setMode:u}};f.Panel=function(e,f,l){var c=Infinity,k=0,g=Math.round,a=g(window.devicePixelRatio||1),r=80*a,h=48*a,t=3*a,v=2*a,d=3*a,m=15*a,n=74*a,p=30*a,q=document.createElement("canvas");q.width=r;q.height=h;q.style.cssText="width:80px;height:48px";var b=q.getContext("2d");b.font="bold "+9*a+"px Helvetica,Arial,sans-serif";b.textBaseline="top";b.fillStyle=l;b.fillRect(0,0,r,h);b.fillStyle=f;b.fillText(e,t,v);
b.fillRect(d,m,n,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d,m,n,p);return{dom:q,update:function(h,w){c=Math.min(c,h);k=Math.max(k,h);b.fillStyle=l;b.globalAlpha=1;b.fillRect(0,0,r,m);b.fillStyle=f;b.fillText(g(h)+" "+e+" ("+g(c)+"-"+g(k)+")",t,v);b.drawImage(q,d+a,m,n-a,p,d,m,n-a,p);b.fillRect(d+n-a,m,a,p);b.fillStyle=l;b.globalAlpha=.9;b.fillRect(d+n-a,m,a,g((1-h/w)*p))}}};return f});


/***/ }),

/***/ 85072:
/***/ ((module) => {

"use strict";


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

/***/ 77659:
/***/ ((module) => {

"use strict";


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

/***/ 10540:
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 55056:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 97825:
/***/ ((module) => {

"use strict";


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

/***/ 41113:
/***/ ((module) => {

"use strict";


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

/***/ 31635:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Cl: () => (/* binding */ __assign),
/* harmony export */   Tt: () => (/* binding */ __rest),
/* harmony export */   fX: () => (/* binding */ __spreadArray)
/* harmony export */ });
/* unused harmony exports __extends, __decorate, __param, __esDecorate, __runInitializers, __propKey, __setFunctionName, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet, __classPrivateFieldIn, __addDisposableResource, __disposeResources, __rewriteRelativeImportExtension */
/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */

var extendStatics = function(d, b) {
  extendStatics = Object.setPrototypeOf ||
      ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
      function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
  return extendStatics(d, b);
};

function __extends(d, b) {
  if (typeof b !== "function" && b !== null)
      throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
  extendStatics(d, b);
  function __() { this.constructor = d; }
  d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
  __assign = Object.assign || function __assign(t) {
      for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
      return t;
  }
  return __assign.apply(this, arguments);
}

function __rest(s, e) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
      t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function")
      for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
          if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
              t[p[i]] = s[p[i]];
      }
  return t;
}

function __decorate(decorators, target, key, desc) {
  var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
  if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
  else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
  return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
  return function (target, key) { decorator(target, key, paramIndex); }
}

function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
  function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
  var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
  var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
  var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
  var _, done = false;
  for (var i = decorators.length - 1; i >= 0; i--) {
      var context = {};
      for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
      for (var p in contextIn.access) context.access[p] = contextIn.access[p];
      context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
      var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
      if (kind === "accessor") {
          if (result === void 0) continue;
          if (result === null || typeof result !== "object") throw new TypeError("Object expected");
          if (_ = accept(result.get)) descriptor.get = _;
          if (_ = accept(result.set)) descriptor.set = _;
          if (_ = accept(result.init)) initializers.unshift(_);
      }
      else if (_ = accept(result)) {
          if (kind === "field") initializers.unshift(_);
          else descriptor[key] = _;
      }
  }
  if (target) Object.defineProperty(target, contextIn.name, descriptor);
  done = true;
};

function __runInitializers(thisArg, initializers, value) {
  var useValue = arguments.length > 2;
  for (var i = 0; i < initializers.length; i++) {
      value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
  }
  return useValue ? value : void 0;
};

function __propKey(x) {
  return typeof x === "symbol" ? x : "".concat(x);
};

function __setFunctionName(f, name, prefix) {
  if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
  return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};

function __metadata(metadataKey, metadataValue) {
  if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
  function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
  return new (P || (P = Promise))(function (resolve, reject) {
      function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
      function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
      function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
  });
}

function __generator(thisArg, body) {
  var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
  return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
  function verb(n) { return function (v) { return step([n, v]); }; }
  function step(op) {
      if (f) throw new TypeError("Generator is already executing.");
      while (g && (g = 0, op[0] && (_ = 0)), _) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];
          switch (op[0]) {
              case 0: case 1: t = op; break;
              case 4: _.label++; return { value: op[1], done: false };
              case 5: _.label++; y = op[1]; op = [0]; continue;
              case 7: op = _.ops.pop(); _.trys.pop(); continue;
              default:
                  if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                  if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                  if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                  if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                  if (t[2]) _.ops.pop();
                  _.trys.pop(); continue;
          }
          op = body.call(thisArg, _);
      } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
      if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
  }
}

var __createBinding = Object.create ? (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  var desc = Object.getOwnPropertyDescriptor(m, k);
  if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
  }
  Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
  if (k2 === undefined) k2 = k;
  o[k2] = m[k];
});

function __exportStar(m, o) {
  for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}

function __values(o) {
  var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
  if (m) return m.call(o);
  if (o && typeof o.length === "number") return {
      next: function () {
          if (o && i >= o.length) o = void 0;
          return { value: o && o[i++], done: !o };
      }
  };
  throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
  var m = typeof Symbol === "function" && o[Symbol.iterator];
  if (!m) return o;
  var i = m.call(o), r, ar = [], e;
  try {
      while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
  }
  catch (error) { e = { error: error }; }
  finally {
      try {
          if (r && !r.done && (m = i["return"])) m.call(i);
      }
      finally { if (e) throw e.error; }
  }
  return ar;
}

/** @deprecated */
function __spread() {
  for (var ar = [], i = 0; i < arguments.length; i++)
      ar = ar.concat(__read(arguments[i]));
  return ar;
}

/** @deprecated */
function __spreadArrays() {
  for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
  for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
          r[k] = a[j];
  return r;
}

function __spreadArray(to, from, pack) {
  if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
      if (ar || !(i in from)) {
          if (!ar) ar = Array.prototype.slice.call(from, 0, i);
          ar[i] = from[i];
      }
  }
  return to.concat(ar || Array.prototype.slice.call(from));
}

function __await(v) {
  return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var g = generator.apply(thisArg, _arguments || []), i, q = [];
  return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
  function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
  function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
  function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
  function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
  function fulfill(value) { resume("next", value); }
  function reject(value) { resume("throw", value); }
  function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
  var i, p;
  return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
  function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: false } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
  if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
  var m = o[Symbol.asyncIterator], i;
  return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
  function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
  function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
  if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
  return cooked;
};

var __setModuleDefault = Object.create ? (function(o, v) {
  Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
  o["default"] = v;
};

function __importStar(mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
  __setModuleDefault(result, mod);
  return result;
}

function __importDefault(mod) {
  return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}

function __classPrivateFieldSet(receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
}

function __classPrivateFieldIn(state, receiver) {
  if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function")) throw new TypeError("Cannot use 'in' operator on non-object");
  return typeof state === "function" ? receiver === state : state.has(receiver);
}

function __addDisposableResource(env, value, async) {
  if (value !== null && value !== void 0) {
    if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
    var dispose, inner;
    if (async) {
      if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
      dispose = value[Symbol.asyncDispose];
    }
    if (dispose === void 0) {
      if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
      dispose = value[Symbol.dispose];
      if (async) inner = dispose;
    }
    if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
    if (inner) dispose = function() { try { inner.call(this); } catch (e) { return Promise.reject(e); } };
    env.stack.push({ value: value, dispose: dispose, async: async });
  }
  else if (async) {
    env.stack.push({ async: true });
  }
  return value;
}

var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
  var e = new Error(message);
  return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

function __disposeResources(env) {
  function fail(e) {
    env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
    env.hasError = true;
  }
  var r, s = 0;
  function next() {
    while (r = env.stack.pop()) {
      try {
        if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
        if (r.dispose) {
          var result = r.dispose.call(r.value);
          if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) { fail(e); return next(); });
        }
        else s |= 1;
      }
      catch (e) {
        fail(e);
      }
    }
    if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
    if (env.hasError) throw env.error;
  }
  return next();
}

function __rewriteRelativeImportExtension(path, preserveJsx) {
  if (typeof path === "string" && /^\.\.?\//.test(path)) {
      return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function (m, tsx, d, ext, cm) {
          return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : (d + ext + "." + cm.toLowerCase() + "js");
      });
  }
  return path;
}

/* unused harmony default export */ var __WEBPACK_DEFAULT_EXPORT__ = ({
  __extends,
  __assign,
  __rest,
  __decorate,
  __param,
  __esDecorate,
  __runInitializers,
  __propKey,
  __setFunctionName,
  __metadata,
  __awaiter,
  __generator,
  __createBinding,
  __exportStar,
  __values,
  __read,
  __spread,
  __spreadArrays,
  __spreadArray,
  __await,
  __asyncGenerator,
  __asyncDelegator,
  __asyncValues,
  __makeTemplateObject,
  __importStar,
  __importDefault,
  __classPrivateFieldGet,
  __classPrivateFieldSet,
  __classPrivateFieldIn,
  __addDisposableResource,
  __disposeResources,
  __rewriteRelativeImportExtension,
});


/***/ })

}]);
//# sourceMappingURL=vendor.common-229eafb5.bundle.js.map