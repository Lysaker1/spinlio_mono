"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[167],{

/***/ 16458:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _RenderingEngine_defaultLogo, _RenderingEngine_defaultLogoStatic, _RenderingEngine_defaultSpinner, _RenderingEngine_animations, _RenderingEngine_flags;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderingEngine = void 0;
const THREE = __importStar(__webpack_require__(39437));
const MaterialLoader_1 = __webpack_require__(65993);
const viewer_rendering_engine_animation_engine_1 = __webpack_require__(46560);
const CameraManager_1 = __webpack_require__(58767);
const viewer_rendering_engine_canvas_engine_1 = __webpack_require__(46614);
const EnvironmentGeometryManager_1 = __webpack_require__(42057);
const EnvironmentMapLoader_1 = __webpack_require__(83445);
const GeometryLoader_1 = __webpack_require__(66296);
const HTMLElementAnchorLoader_1 = __webpack_require__(2642);
const viewer_rendering_engine_intersection_engine_1 = __webpack_require__(11579);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
const LightLoader_1 = __webpack_require__(88708);
const PostProcessingManager_1 = __webpack_require__(30265);
const gl_matrix_1 = __webpack_require__(61961);
const RenderingManager_1 = __webpack_require__(1042);
const SceneTracingManager_1 = __webpack_require__(27028);
const SceneTreeManager_1 = __webpack_require__(68198);
const SDColor_1 = __webpack_require__(1161);
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewport_css_1 = __webpack_require__(31349);
class RenderingEngine {
    // #endregion Properties (75)
    // #region Constructors (1)
    constructor(properties) {
        // #region Properties (75)
        _RenderingEngine_defaultLogo.set(this, 'https://viewer.shapediver.com/v3/graphics/logo_animated_breath.svg');
        _RenderingEngine_defaultLogoStatic.set(this, 'https://viewer.shapediver.com/v3/graphics/logo.png');
        _RenderingEngine_defaultSpinner.set(this, 'https://viewer.shapediver.com/v3/graphics/spinner_ripple.svg');
        this._animationEngine = viewer_rendering_engine_animation_engine_1.AnimationEngine.instance;
        this._canvasEngine = viewer_rendering_engine_canvas_engine_1.CanvasEngine.instance;
        this._colorCache = [];
        // utils
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._intersectionManager = viewer_rendering_engine_intersection_engine_1.IntersectionEngine.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        this._systemInfo = viewer_shared_services_1.SystemInfo.instance;
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        _RenderingEngine_animations.set(this, {});
        _RenderingEngine_flags.set(this, {
            [viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.CAMERA_FREEZE]: [],
            [viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.CONTINUOUS_RENDERING]: [],
            [viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.CONTINUOUS_SHADOW_MAP_UPDATE]: [],
        });
        // settings
        this._arRotation = gl_matrix_1.vec3.create();
        this._arScale = gl_matrix_1.vec3.fromValues(1, 1, 1);
        this._arTranslation = gl_matrix_1.vec3.create();
        this._automaticColorAdjustment = true;
        this._automaticResizing = true;
        this._beautyRenderBlendingDuration = 1500;
        this._beautyRenderDelay = 50;
        this._busy = false;
        this._busyModeDisplay = viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY.SPINNER;
        this._clearAlpha = 1.0;
        this._clearColor = '#ffffff';
        // viewer global vars
        this._closed = false;
        this._enableAR = true;
        this._environmentMap = 'null';
        this._environmentMapAsBackground = false;
        this._environmentMapBlurriness = 0;
        this._environmentMapForUnlitMaterials = false;
        this._environmentMapIntensity = 1;
        this._environmentMapResolution = '1024';
        this._environmentMapRotation = gl_matrix_1.quat.create();
        this._gridVisibility = true;
        this._groundPlaneShadowVisibility = false;
        this._groundPlaneVisibility = true;
        this._lights = true;
        this._maximumRenderingSize = this._systemInfo.isMobile ? { width: 1280, height: 720 } : { width: 1920, height: 1080 };
        this._pause = false;
        this._shadows = true;
        this._show = false;
        this._showStatistics = false;
        this._softShadows = true;
        this._type = viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.STANDARD;
        // THREE object has default Y, we change that (although it doesn't work everywhere)
        THREE.Object3D.DEFAULT_UP = new THREE.Vector3(0, 0, 1);
        THREE.ColorManagement.enabled = false;
        // adapt some of the three.js shaders according to our needs
        (0, MaterialLoader_1.adaptShaders)();
        // add css to the document
        const style = document.createElement('style');
        style.innerHTML = viewport_css_1.css;
        document.head.appendChild(style);
        const prop = Object.assign({}, properties);
        const branding = Object.assign({}, prop.branding);
        // setting some of the provided properties
        this._id = prop.id || (viewer_shared_services_1.UuidGenerator.instance).create();
        this._visibility = prop.visibility || viewer_rendering_engine_rendering_engine_1.VISIBILITY_MODE.SESSION;
        this._sessionSettingsMode = prop.sessionSettingsMode || viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST;
        this._sessionSettingsId = prop.sessionSettingsId;
        this._branding = {
            logo: branding.logo === undefined ? __classPrivateFieldGet(this, _RenderingEngine_defaultLogo, "f") : branding.logo,
            backgroundColor: branding.backgroundColor || '#393a45FF',
            busyModeSpinner: branding.busyModeSpinner === undefined ? __classPrivateFieldGet(this, _RenderingEngine_defaultSpinner, "f") : branding.busyModeSpinner,
            busyModeDisplay: branding.busyModeDisplay || viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY.SPINNER,
            spinnerPositioning: branding.spinnerPositioning || viewer_rendering_engine_rendering_engine_1.SPINNER_POSITIONING.BOTTOM_RIGHT
        };
        // creation of viewer essentials
        this._canvas = this._canvasEngine.getCanvas(this._canvasEngine.createCanvasObject(prop.canvas));
        // creation of the engines (all singleton engines were created already)
        this._domEventEngine = new viewer_shared_services_1.DomEventEngine(this._canvas.canvasElement);
        this._cameraEngine = new viewer_rendering_engine_camera_engine_1.CameraEngine(this);
        this._lightEngine = new viewer_rendering_engine_light_engine_1.LightEngine(this);
        // creation of the managers (all singleton engines were created already)
        this._cameraManager = new CameraManager_1.CameraManager(this);
        this._environmentGeometryManager = new EnvironmentGeometryManager_1.EnvironmentGeometryManager(this);
        this._sceneTracingManager = new SceneTracingManager_1.SceneTracingManager(this);
        this._sceneTreeManager = new SceneTreeManager_1.SceneTreeManager(this);
        this._renderingManager = new RenderingManager_1.RenderingManager(this);
        this._postProcessingManager = new PostProcessingManager_1.PostProcessingManager(this);
        // loaders
        this._environmentMapLoader = new EnvironmentMapLoader_1.EnvironmentMapLoader(this);
        this._materialLoader = new MaterialLoader_1.MaterialLoader(this);
        this._geometryLoader = new GeometryLoader_1.GeometryLoader(this);
        this._htmlElementAnchorLoader = new HTMLElementAnchorLoader_1.HTMLElementAnchorLoader(this);
        this._lightLoader = new LightLoader_1.LightLoader(this);
        // start the creation and initialization process 
        this._renderer = this.renderingManager.createRenderer(this._canvas.canvasElement);
        this._spinnerDivElement = this.renderingManager.addSpinner(this._canvas.canvasElement, this._branding);
        this._logoDivElement = this.renderingManager.addLogo(this._canvas.canvasElement, this._branding);
        // creation of the managers (all singleton engines were created already)
        this._cameraManager.init();
        this._environmentGeometryManager.init();
        this._sceneTracingManager.init();
        this._sceneTreeManager.init();
        this._renderingManager.init();
        this._postProcessingManager.init();
        // loaders
        this._environmentMapLoader.init();
        this._materialLoader.init();
        this._geometryLoader.init();
        this._htmlElementAnchorLoader.init();
        this._lightLoader.init();
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (133)
    get arRotation() {
        return this._arRotation;
    }
    set arRotation(value) {
        this._arRotation = value;
    }
    get arScale() {
        return this._arScale;
    }
    set arScale(value) {
        this._arScale = value;
    }
    get arTranslation() {
        return this._arTranslation;
    }
    set arTranslation(value) {
        this._arTranslation = value;
    }
    get automaticColorAdjustment() {
        return this._automaticColorAdjustment;
    }
    set automaticColorAdjustment(value) {
        if (this._automaticColorAdjustment === value)
            return;
        this._automaticColorAdjustment = value;
        this._colorCache.forEach(c => c.colorCorrection(value));
        this._materialLoader.assignColorCorrection(value);
    }
    get automaticResizing() {
        return this._automaticResizing;
    }
    set automaticResizing(value) {
        this._automaticResizing = value;
    }
    get beautyRenderBlendingDuration() {
        return this._beautyRenderBlendingDuration;
    }
    set beautyRenderBlendingDuration(value) {
        this._beautyRenderBlendingDuration = value;
    }
    get beautyRenderDelay() {
        return this._beautyRenderDelay;
    }
    set beautyRenderDelay(value) {
        this._beautyRenderDelay = value;
    }
    get branding() {
        return this._branding;
    }
    get busy() {
        return this._busy;
    }
    set busy(value) {
        this._busy = value;
    }
    get busyModeDisplay() {
        return this._busyModeDisplay;
    }
    set busyModeDisplay(value) {
        this._busyModeDisplay = value;
    }
    get camera() {
        return this._cameraManager.camera;
    }
    get cameraEngine() {
        return this._cameraEngine;
    }
    get cameraManager() {
        return this._cameraManager;
    }
    get canvas() {
        return this._canvas.canvasElement;
    }
    get canvasEngine() {
        return this._canvasEngine;
    }
    get clearAlpha() {
        return this._clearAlpha;
    }
    set clearAlpha(value) {
        this._clearAlpha = value;
    }
    get clearColor() {
        return this._clearColor;
    }
    set clearColor(value) {
        this._clearColor = value;
    }
    get closed() {
        return this._closed;
    }
    get colorCache() {
        return this._colorCache;
    }
    get continuousRendering() {
        return this._renderingManager.continuousRendering;
    }
    set continuousRendering(value) {
        this._renderingManager.continuousRendering = value;
    }
    get continuousShadowMapUpdate() {
        return this._renderingManager.continuousShadowMapUpdate;
    }
    set continuousShadowMapUpdate(value) {
        this._renderingManager.continuousShadowMapUpdate = value;
    }
    get defaultLineMaterial() {
        return this.materialLoader.defaultLineMaterialData;
    }
    set defaultLineMaterial(value) {
        this.materialLoader.defaultLineMaterialData = value;
    }
    get defaultMaterial() {
        return this.materialLoader.defaultMaterialData;
    }
    set defaultMaterial(value) {
        this.materialLoader.defaultMaterialData = value;
    }
    get defaultMaterialColor() {
        return this.materialLoader.defaultMaterialData.color;
    }
    set defaultMaterialColor(value) {
        this.materialLoader.defaultMaterialData.color = value;
        this.materialLoader.assignDefaultMaterial();
        this.materialLoader.defaultLineMaterialData.color = value;
        this.materialLoader.assignDefaultLineMaterial();
        this.materialLoader.defaultPointMaterialData.color = value;
        this.materialLoader.assignDefaultPointMaterial();
    }
    get defaultPointMaterial() {
        return this.materialLoader.defaultPointMaterialData;
    }
    set defaultPointMaterial(value) {
        this.materialLoader.defaultPointMaterialData = value;
    }
    get domEventEngine() {
        return this._domEventEngine;
    }
    get enableAR() {
        return this._enableAR;
    }
    set enableAR(value) {
        this._enableAR = value;
    }
    get environmentMap() {
        return this._environmentMap;
    }
    set environmentMap(value) {
        this._environmentMap = value;
        this._environmentMapLoader.load(this.environmentMap);
    }
    get environmentMapAsBackground() {
        return this._environmentMapAsBackground;
    }
    set environmentMapAsBackground(value) {
        this._environmentMapAsBackground = value;
    }
    get environmentMapBlurriness() {
        return this._environmentMapBlurriness;
    }
    set environmentMapBlurriness(value) {
        this._environmentMapBlurriness = value;
        this._sceneTreeManager.scene.backgroundBlurriness = this._environmentMapBlurriness;
    }
    get environmentMapForUnlitMaterials() {
        return this._environmentMapForUnlitMaterials;
    }
    set environmentMapForUnlitMaterials(value) {
        this._environmentMapForUnlitMaterials = value;
        this._materialLoader.assignEnvironmentMapForUnlitMaterials(value);
    }
    get environmentMapIntensity() {
        return this._environmentMapIntensity;
    }
    set environmentMapIntensity(value) {
        this._environmentMapIntensity = value;
        this._sceneTreeManager.scene.backgroundIntensity = value;
        this._materialLoader.assignEnvironmentMapIntensity(value);
    }
    get environmentMapLoader() {
        return this._environmentMapLoader;
    }
    get environmentMapResolution() {
        return this._environmentMapResolution;
    }
    set environmentMapResolution(value) {
        this._environmentMapResolution = value;
        this._environmentMapLoader.load(this.environmentMap);
    }
    get environmentMapRotation() {
        return this._environmentMapRotation;
    }
    set environmentMapRotation(value) {
        this._environmentMapRotation = value;
        this._materialLoader.assignEnvironmentMapRotation(value);
    }
    get eventEngine() {
        return this._eventEngine;
    }
    get geometryLoader() {
        return this._geometryLoader;
    }
    get gridColor() {
        return this._environmentGeometryManager.gridColor;
    }
    set gridColor(value) {
        this._environmentGeometryManager.gridColor = value;
    }
    get gridVisibility() {
        return this._gridVisibility;
    }
    set gridVisibility(value) {
        if (this._environmentGeometryManager.grid)
            this._environmentGeometryManager.grid.visible = value;
        this._gridVisibility = value;
    }
    get groundPlaneColor() {
        return this._environmentGeometryManager.groundPlaneColor;
    }
    set groundPlaneColor(value) {
        this._environmentGeometryManager.groundPlaneColor = value;
    }
    get groundPlaneShadowColor() {
        return this._environmentGeometryManager.groundPlaneShadowColor;
    }
    set groundPlaneShadowColor(value) {
        this._environmentGeometryManager.groundPlaneShadowColor = value;
    }
    get groundPlaneShadowVisibility() {
        return this._groundPlaneShadowVisibility;
    }
    set groundPlaneShadowVisibility(value) {
        if (this._environmentGeometryManager.groundPlaneShadow)
            this._environmentGeometryManager.groundPlaneShadow.visible = value;
        this._groundPlaneShadowVisibility = value;
    }
    get groundPlaneVisibility() {
        return this._groundPlaneVisibility;
    }
    set groundPlaneVisibility(value) {
        if (this._environmentGeometryManager.groundPlane)
            this._environmentGeometryManager.groundPlane.visible = value;
        this._groundPlaneVisibility = value;
    }
    get htmlElementAnchorLoader() {
        return this._htmlElementAnchorLoader;
    }
    get id() {
        return this._id;
    }
    get lightEngine() {
        return this._lightEngine;
    }
    get lightLoader() {
        return this._lightLoader;
    }
    get lightScene() {
        return this.lightEngine.lightScene ? this.lightEngine.lightScene.id : '';
    }
    get lightSceneId() {
        return this.lightEngine.lightScene ? this.lightEngine.lightScene.id : '';
    }
    get lights() {
        return this._lights;
    }
    set lights(value) {
        this._lights = value;
    }
    get logoDivElement() {
        return this._logoDivElement;
    }
    get materialLoader() {
        return this._materialLoader;
    }
    get maximumRenderingSize() {
        return this._maximumRenderingSize;
    }
    set maximumRenderingSize(value) {
        this._maximumRenderingSize = value;
    }
    get minimalRendering() {
        return this.renderingManager.minimalRendering;
    }
    get outputEncoding() {
        switch (this._renderer.outputColorSpace) {
            case (THREE.SRGBColorSpace):
                return viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.SRGB;
            case (THREE.LinearSRGBColorSpace):
            default:
                return viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.LINEAR;
        }
    }
    set outputEncoding(value) {
        switch (value) {
            case (viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.SRGB):
                this._renderer.outputColorSpace = THREE.SRGBColorSpace;
                break;
            case (viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.LINEAR):
            default:
                this._renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
                break;
        }
    }
    get pause() {
        return this._pause;
    }
    set pause(value) {
        this._pause = value;
    }
    get physicallyCorrectLights() {
        return !this._renderer.useLegacyLights;
    }
    set physicallyCorrectLights(value) {
        this._renderer.useLegacyLights = !value;
    }
    get pointSize() {
        return this.materialLoader.defaultPointMaterialData.size || 1;
    }
    set pointSize(value) {
        this.materialLoader.defaultPointMaterialData.size = value;
        this.materialLoader.assignDefaultPointMaterial();
    }
    get postProcessingManager() {
        return this._postProcessingManager;
    }
    get postRenderingCallback() {
        return this._postRenderingCallback;
    }
    set postRenderingCallback(value) {
        this._postRenderingCallback = value;
    }
    get preRenderingCallback() {
        return this._preRenderingCallback;
    }
    set preRenderingCallback(value) {
        this._preRenderingCallback = value;
    }
    get renderer() {
        return this._renderer;
    }
    get renderingManager() {
        return this._renderingManager;
    }
    get scene() {
        return this._sceneTreeManager.scene;
    }
    get sceneTracingManager() {
        return this._sceneTracingManager;
    }
    get sceneTreeManager() {
        return this._sceneTreeManager;
    }
    get sessionSettingsId() {
        return this._sessionSettingsId;
    }
    set sessionSettingsId(value) {
        this._sessionSettingsId = value;
    }
    get sessionSettingsMode() {
        return this._sessionSettingsMode;
    }
    set sessionSettingsMode(value) {
        this._sessionSettingsMode = value;
    }
    get settingsEngine() {
        return this._settingsEngine;
    }
    set settingsEngine(value) {
        this._settingsEngine = value;
    }
    get shadows() {
        return this._shadows;
    }
    set shadows(value) {
        this._shadows = value;
    }
    get show() {
        return this._show;
    }
    set show(value) {
        this._show = value;
    }
    get showStatistics() {
        return this._showStatistics;
    }
    set showStatistics(value) {
        this._showStatistics = value;
    }
    get softShadows() {
        return this._softShadows;
    }
    set softShadows(value) {
        this._softShadows = value;
    }
    get spinnerDivElement() {
        return this._spinnerDivElement;
    }
    get stateEngine() {
        return this._stateEngine;
    }
    get textureEncoding() {
        switch (this.materialLoader.textureEncoding) {
            case (THREE.SRGBColorSpace):
                return viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.SRGB;
            case (THREE.LinearSRGBColorSpace):
            default:
                return viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.LINEAR;
        }
    }
    set textureEncoding(value) {
        switch (value) {
            case (viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.SRGB):
                this.environmentMapLoader.textureEncoding = THREE.SRGBColorSpace;
                this.materialLoader.textureEncoding = THREE.SRGBColorSpace;
                break;
            case (viewer_rendering_engine_rendering_engine_1.TEXTURE_ENCODING.LINEAR):
            default:
                this.environmentMapLoader.textureEncoding = THREE.LinearSRGBColorSpace;
                this.materialLoader.textureEncoding = THREE.LinearSRGBColorSpace;
        }
    }
    get toneMapping() {
        switch (this._renderer.toneMapping) {
            case (THREE.LinearToneMapping):
                return viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.LINEAR;
            case (THREE.ReinhardToneMapping):
                return viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.REINHARD;
            case (THREE.CineonToneMapping):
                return viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.CINEON;
            case (THREE.ACESFilmicToneMapping):
                return viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.ACES_FILMIC;
            case (THREE.NoToneMapping):
            default:
                return viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.NONE;
        }
    }
    set toneMapping(value) {
        switch (value) {
            case (viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.LINEAR):
                this._renderer.toneMapping = THREE.LinearToneMapping;
                break;
            case (viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.REINHARD):
                this._renderer.toneMapping = THREE.ReinhardToneMapping;
                break;
            case (viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.CINEON):
                this._renderer.toneMapping = THREE.CineonToneMapping;
                break;
            case (viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.ACES_FILMIC):
                this._renderer.toneMapping = THREE.ACESFilmicToneMapping;
                break;
            case (viewer_rendering_engine_rendering_engine_1.TONE_MAPPING.NONE):
            default:
                this._renderer.toneMapping = THREE.NoToneMapping;
        }
        this.materialLoader.updateMaterials();
    }
    get toneMappingExposure() {
        return this._renderer.toneMappingExposure;
    }
    set toneMappingExposure(value) {
        this._renderer.toneMappingExposure = value;
    }
    get type() {
        return this._type;
    }
    set type(value) {
        this._type = value;
    }
    get usingSwiftShader() {
        return this.renderingManager.usingSwiftShader;
    }
    get visibility() {
        return this._visibility;
    }
    get visualizeAttributes() {
        return this._visualizeAttributes;
    }
    set visualizeAttributes(value) {
        this._visualizeAttributes = value;
    }
    // #endregion Public Getters And Setters (133)
    // #region Public Methods (25)
    addFlag(flag) {
        var _a;
        const token = this._uuidGenerator.create();
        if (flag === viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.BUSY_MODE) {
            (_a = this.stateEngine.viewportEngines[this.id]) === null || _a === void 0 ? void 0 : _a.busy.push(token);
        }
        else {
            __classPrivateFieldGet(this, _RenderingEngine_flags, "f")[flag].push(token);
        }
        this.evaluateFlagState();
        return token;
    }
    applySettings(sections = {
        ar: true,
        scene: true,
        camera: true,
        light: true,
        environment: true,
        general: true,
        postprocessing: true
    }, settingsEngine, updateViewport = true) {
        return __awaiter(this, void 0, void 0, function* () {
            settingsEngine = settingsEngine || this._settingsEngine;
            if (!settingsEngine)
                return;
            if (sections.environment) {
                // as the environment map is the only thing that needs time to load, load it first
                yield new Promise((resolve, reject) => {
                    var _a;
                    (_a = this._stateEngine.viewportEngines[this.id]) === null || _a === void 0 ? void 0 : _a.environmentMapLoaded.then(() => {
                        try {
                            if (!settingsEngine)
                                return;
                            this.environmentMapAsBackground = settingsEngine.environment.mapAsBackground;
                            this.clearAlpha = settingsEngine.environment.clearAlpha;
                            this.clearColor = this._converter.toHexColor(settingsEngine.environment.clearColor);
                            this.environmentMapRotation = [settingsEngine.environment.rotation.x, settingsEngine.environment.rotation.y, settingsEngine.environment.rotation.z, settingsEngine.environment.rotation.w];
                            this.environmentMapBlurriness = settingsEngine.environment.blurriness;
                            this.environmentMapIntensity = settingsEngine.environment.intensity;
                            this.applySyncSettings(sections, settingsEngine, updateViewport);
                            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE_VIEWPORT.VIEWPORT_SETTINGS_LOADED, { viewportId: this.id });
                            resolve();
                        }
                        catch (e) {
                            reject(e);
                        }
                    }).catch(e => reject(e));
                    // set it like this to not trigger the loading
                    this.environmentMap = settingsEngine.environment.map;
                });
            }
            else {
                this.applySyncSettings(sections, settingsEngine, updateViewport);
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE_VIEWPORT.VIEWPORT_SETTINGS_LOADED, { viewportId: this.id });
            }
        });
    }
    assignSettingsEngine(settingsEngine) {
        this._settingsEngine = settingsEngine;
    }
    close() {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            this._closed = true;
            this._lightEngine.close();
            this._renderer.clear(true, true, true);
            this._renderer.dispose();
            this._domEventEngine.removeAllDomEventListener();
            this._domEventEngine.dispose();
            (_a = this._canvas.canvasElement.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(this._logoDivElement);
            (_b = this._canvas.canvasElement.parentElement) === null || _b === void 0 ? void 0 : _b.removeChild(this._spinnerDivElement);
            (_c = this._canvas.canvasElement.parentNode) === null || _c === void 0 ? void 0 : _c.removeChild(this._htmlElementAnchorLoader.parentDiv);
            this._canvas.reset();
        });
    }
    continueRendering() {
        this._pause = false;
    }
    convert3Dto2D(p) {
        return this.sceneTracingManager.convert3Dto2D(p);
    }
    createSDTFOverview(node) {
        const out = new viewer_shared_types_1.SDTFOverviewData({});
        for (let i = 0, len = node.data.length; i < len; i++)
            if (node.data[i] instanceof viewer_shared_types_1.SDTFOverviewData)
                out.merge(node.data[i]);
        for (let i = 0, len = node.children.length; i < len; i++)
            out.merge(new viewer_shared_types_1.SDTFOverviewData(this.createSDTFOverview(node.children[i])));
        return out.overview;
    }
    createThreeJsColor(color) {
        const sdColor = new SDColor_1.SDColor(this._converter.toThreeJsColorInput(color), color);
        sdColor.colorCorrection(this.automaticColorAdjustment);
        this._colorCache.push(sdColor);
        return sdColor;
    }
    displayErrorMessage(message) {
        for (let i = 0; i < this.logoDivElement.children.length; i++)
            this.logoDivElement.children[i].style.visibility = 'hidden';
        const d = document.createElement('div');
        d.classList.add('sdv-error-message-container');
        this.logoDivElement.appendChild(d);
        const p = document.createElement('p');
        p.textContent = message;
        p.classList.add('sdv-error-message');
        p.style.color = this.logoDivElement.style.backgroundColor;
        d.appendChild(p);
    }
    evaluateFlagState() {
        // busy
        {
            const currentBusyState = this.busy;
            if (this.stateEngine.viewportEngines[this.id] && this.stateEngine.viewportEngines[this.id].busy.length > 0) {
                if (!currentBusyState) {
                    this.busy = true;
                    this._renderingManager.render();
                    this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.VIEWPORT.BUSY_MODE_ON, { viewportId: this.id });
                }
            }
            else {
                if (currentBusyState) {
                    this.busy = false;
                    this._renderingManager.render();
                    this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.VIEWPORT.BUSY_MODE_OFF, { viewportId: this.id });
                }
            }
        }
        // camera freeze
        {
            if (__classPrivateFieldGet(this, _RenderingEngine_flags, "f")[viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.CAMERA_FREEZE].length > 0) {
                this.cameraEngine.deactivateCameraEvents();
            }
            else {
                this.cameraEngine.activateCameraEvents();
            }
        }
        // continuous rendering
        {
            const currentContinuousRenderingState = this.continuousRendering;
            if (__classPrivateFieldGet(this, _RenderingEngine_flags, "f")[viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.CONTINUOUS_RENDERING].length > 0) {
                if (!currentContinuousRenderingState) {
                    this.continuousRendering = true;
                    this._renderingManager.render();
                }
            }
            else {
                if (currentContinuousRenderingState) {
                    this.continuousRendering = false;
                }
            }
        }
        // continuous shadow map update
        {
            const currentShadowMapUpdateState = this.continuousShadowMapUpdate;
            if (__classPrivateFieldGet(this, _RenderingEngine_flags, "f")[viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.CONTINUOUS_SHADOW_MAP_UPDATE].length > 0) {
                if (!currentShadowMapUpdateState) {
                    this.continuousShadowMapUpdate = true;
                    this._renderingManager.render();
                }
            }
            else {
                if (currentShadowMapUpdateState) {
                    this.continuousShadowMapUpdate = false;
                }
            }
        }
    }
    getEnvironmentMapImageUrl() {
        return this._environmentMapLoader.getEnvironmentMapImageUrl(this.environmentMap);
    }
    getScreenshot(type, encoderOptions) {
        return this._renderingManager.getScreenshot(type, encoderOptions);
    }
    isMobileDeviceWithoutBrowserARSupport() {
        // has to be a mobile device (duh)
        if (this._systemInfo.isIOS === false && this._systemInfo.isAndroid === false)
            return false;
        // no Firefox on Android
        if (this._systemInfo.isAndroid === true && this._systemInfo.isFirefox === true)
            return true;
        // no Instagram on iOS
        if (this._systemInfo.isIOS === true && this._systemInfo.isInstagram === true)
            return true;
        return false;
    }
    pauseRendering() {
        this._pause = true;
    }
    pointerEventToRay(event) {
        return this._sceneTracingManager.pointerEventToRay(event);
    }
    raytraceScene(origin, direction) {
        const intersect = this._intersectionManager.intersect({ origin, direction }, this.id);
        return intersect.map(i => {
            return {
                distance: i.distance,
                node: i.node,
                data: i.geometryData
            };
        });
    }
    removeFlag(token) {
        let success = false;
        const Flags = Object.values(viewer_rendering_engine_rendering_engine_1.FLAG_TYPE);
        for (const f of Flags) {
            if (f === viewer_rendering_engine_rendering_engine_1.FLAG_TYPE.BUSY_MODE) {
                if (this.stateEngine.viewportEngines[this.id] && this.stateEngine.viewportEngines[this.id].busy.includes(token)) {
                    this.stateEngine.viewportEngines[this.id].busy.splice(this.stateEngine.viewportEngines[this.id].busy.indexOf(token), 1);
                    success = true;
                    break;
                }
            }
            else {
                if (__classPrivateFieldGet(this, _RenderingEngine_flags, "f")[f].includes(token)) {
                    __classPrivateFieldGet(this, _RenderingEngine_flags, "f")[f].splice(__classPrivateFieldGet(this, _RenderingEngine_flags, "f")[f].indexOf(token), 1);
                    success = true;
                    break;
                }
            }
        }
        this.evaluateFlagState();
        return success;
    }
    reset() {
        var _a, _b, _c, _d;
        (_a = this._stateEngine.viewportEngines[this.id]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.reset();
        (_b = this._stateEngine.viewportEngines[this.id]) === null || _b === void 0 ? void 0 : _b.boundingBoxCreated.reset();
        (_c = this._stateEngine.viewportEngines[this.id]) === null || _c === void 0 ? void 0 : _c.environmentMapLoaded.reset();
        (_d = this._stateEngine.viewportEngines[this.id]) === null || _d === void 0 ? void 0 : _d.boundingBoxCreated.then(() => {
            this._environmentGeometryManager.changeSceneExtents(this._sceneTreeManager.boundingBox);
        });
    }
    resize(width, height) {
        this._renderingManager.resize(width, height);
        this._renderingManager.render();
    }
    saveSettings(settingsEngine) {
        settingsEngine = settingsEngine || this._settingsEngine;
        if (!settingsEngine)
            return;
        this.lightEngine.saveSettings(settingsEngine);
        this.cameraEngine.saveSettings(settingsEngine);
        this.postProcessingManager.saveSettings(settingsEngine);
        settingsEngine.ar.enable = this.enableAR;
        settingsEngine.environment.mapResolution = this.environmentMapResolution;
        settingsEngine.environment.map = Array.isArray(this.environmentMap) ? JSON.stringify(this.environmentMap) : this.environmentMap;
        settingsEngine.environment.mapAsBackground = this.environmentMapAsBackground;
        settingsEngine.environment.clearAlpha = this.clearAlpha;
        settingsEngine.environment.clearColor = this._converter.toHexColor(this.clearColor);
        settingsEngine.environment.rotation = { x: this.environmentMapRotation[0], y: this.environmentMapRotation[1], z: this.environmentMapRotation[2], w: this.environmentMapRotation[3] };
        settingsEngine.environment.blurriness = this.environmentMapBlurriness;
        settingsEngine.environment.intensity = this.environmentMapIntensity;
        settingsEngine.environmentGeometry.gridVisibility = this.gridVisibility;
        settingsEngine.environmentGeometry.groundPlaneVisibility = this.groundPlaneVisibility;
        settingsEngine.environmentGeometry.groundPlaneShadowVisibility = this.groundPlaneShadowVisibility;
        settingsEngine.environmentGeometry.gridColor = this._converter.toHexColor(this.gridColor);
        settingsEngine.environmentGeometry.groundPlaneColor = this._converter.toHexColor(this.groundPlaneColor);
        settingsEngine.environmentGeometry.groundPlaneShadowColor = this._converter.toHexColor(this.groundPlaneShadowColor);
        settingsEngine.general.pointSize = this.pointSize;
        settingsEngine.general.transformation.rotation = { x: this.arRotation[0], y: this.arRotation[1], z: this.arRotation[2] };
        settingsEngine.general.transformation.translation = { x: this.arTranslation[0], y: this.arTranslation[1], z: this.arTranslation[2] };
        settingsEngine.general.transformation.scale = { x: this.arScale[0], y: this.arScale[1], z: this.arScale[2] };
        settingsEngine.general.defaultMaterialColor = this._converter.toHexColor(this.defaultMaterialColor);
        settingsEngine.rendering.automaticColorAdjustment = this.automaticColorAdjustment;
        settingsEngine.rendering.lights = this.lights;
        settingsEngine.rendering.outputEncoding = this.outputEncoding;
        settingsEngine.rendering.physicallyCorrectLights = this.physicallyCorrectLights;
        settingsEngine.rendering.textureEncoding = this.textureEncoding;
        settingsEngine.rendering.toneMapping = this.toneMapping;
        settingsEngine.rendering.toneMappingExposure = this.toneMappingExposure;
        settingsEngine.rendering.beautyRenderBlendingDuration = this.beautyRenderBlendingDuration;
        settingsEngine.rendering.beautyRenderDelay = this.beautyRenderDelay;
        settingsEngine.rendering.shadows = this.shadows;
        settingsEngine.rendering.softShadows = this.softShadows;
    }
    start() {
        var _a;
        this._renderingManager.start();
        (_a = this._stateEngine.viewportEngines[this.id]) === null || _a === void 0 ? void 0 : _a.boundingBoxCreated.then(() => {
            this._environmentGeometryManager.changeSceneExtents(this._sceneTreeManager.boundingBox);
        });
        if (this._sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.NONE) {
            this.environmentMap = 'photo_studio';
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    update(id) {
        if (this.closed)
            return;
        this._sceneTreeManager.updateSceneTree(this._tree.root);
        this._renderingManager.updateShadowMap();
        this._animationEngine.updateAnimationData();
        this._renderingManager.render();
        this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE_VIEWPORT.VIEWPORT_UPDATED, { viewportId: this.id });
    }
    updateEnvironmentGeometry() {
        this._environmentGeometryManager.updateEnvironmentGeometryPosition();
    }
    viewInAR(file, options = { arScale: 'auto', arPlacement: 'floor', xrEnvironment: false }) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = this._uuidGenerator.create();
            const event = { type: viewer_shared_types_1.TASK_TYPE.AR_LOADING, id: eventId, progress: 0, status: 'Loading AR scene' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, event);
            // if this is not a supported device, throw an error
            if (this.viewableInAR() === false) {
                const event = { type: viewer_shared_types_1.TASK_TYPE.AR_LOADING, id: eventId, progress: 1, status: 'Stopped AR loading due to an error' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, event);
                throw new viewer_shared_services_1.ShapeDiverViewerArError('Api.viewInAR: The device or browser is not supported for this functionality, please call "viewableInAR" for more information.');
            }
            const arScale = options.arScale !== 'auto' ? 'fixed' : 'auto';
            // const arPlacement = options.arPlacement !== 'wall' ? 'floor' : 'wall';
            // const xrEnvironment = options.xrEnvironment !== true ? false : true;
            // let arEnvironment = '';
            // const envMapUrl = this.getEnvironmentMapImageUrl();
            // if (envMapUrl !== '') {
            //   if (envMapUrl.endsWith('.hdr')) {
            //     arEnvironment = 'skybox-image=' + envMapUrl;
            //   } else {
            //     arEnvironment = 'environment-image=' + envMapUrl;
            //   }
            // }
            if (this._systemInfo.isIOS) {
                // create the link and click it
                const a = document.createElement('a');
                a.href = file + (arScale === 'fixed' ? '.usdz_allowsContentScaling=0' : '.usdz');
                a.rel = 'ar';
                const img = document.createElement('img');
                img.src = __classPrivateFieldGet(this, _RenderingEngine_defaultLogoStatic, "f");
                a.appendChild(img);
                a.click();
            }
            else {
                const a = document.createElement('a');
                a.href = `intent://arvr.google.com/scene-viewer/1.0?resizable=${arScale === 'fixed' ? 'false' : 'true'}&file=${file}&mode=ar_only#Intent;scheme=https;package=com.google.ar.core;action=android.intent.action.VIEW;end;`;
                a.click();
            }
            const event2 = { type: viewer_shared_types_1.TASK_TYPE.AR_LOADING, id: eventId, progress: 1, status: 'Done loading AR scene, launching AR' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, event2);
        });
    }
    viewableInAR() {
        // has to be a mobile device (duh)
        if (this._systemInfo.isIOS === false && this._systemInfo.isAndroid === false)
            return false;
        // no Firefox on Android
        if (this._systemInfo.isAndroid === true && this._systemInfo.isFirefox === true)
            return false;
        // no Firefox on iOS
        if (this._systemInfo.isIOS === true && this._systemInfo.isFirefox === true)
            return false;
        // no Instagram on iOS
        if (this._systemInfo.isIOS === true && this._systemInfo.isInstagram === true)
            return false;
        return true;
    }
    // #endregion Public Methods (25)
    // #region Private Methods (1)
    applySyncSettings(sections = {
        ar: true,
        scene: true,
        camera: true,
        light: true,
        environment: true,
        general: true,
        postprocessing: true
    }, settingsEngine, updateViewport = true) {
        var _a;
        settingsEngine = settingsEngine || this._settingsEngine;
        if (!settingsEngine)
            return;
        if (sections.ar) {
            this.enableAR = settingsEngine.ar.enable;
            this.arScale = [settingsEngine.general.transformation.scale.x, settingsEngine.general.transformation.scale.y, settingsEngine.general.transformation.scale.z];
            this.arTranslation = [settingsEngine.general.transformation.translation.x, settingsEngine.general.transformation.translation.y, settingsEngine.general.transformation.translation.z];
            this.arRotation = [settingsEngine.general.transformation.rotation.x, settingsEngine.general.transformation.rotation.y, settingsEngine.general.transformation.rotation.z];
        }
        if (sections.scene) {
            this.gridColor = settingsEngine.environmentGeometry.gridColor;
            this.gridVisibility = settingsEngine.environmentGeometry.gridVisibility;
            this.groundPlaneColor = settingsEngine.environmentGeometry.groundPlaneColor;
            this.groundPlaneVisibility = settingsEngine.environmentGeometry.groundPlaneVisibility;
            this.groundPlaneShadowColor = settingsEngine.environmentGeometry.groundPlaneShadowColor;
            this.groundPlaneShadowVisibility = settingsEngine.environmentGeometry.groundPlaneShadowVisibility;
            this.shadows = settingsEngine.rendering.shadows;
            this.softShadows = settingsEngine.rendering.softShadows;
            this.lights = settingsEngine.rendering.lights;
            this.automaticColorAdjustment = settingsEngine.rendering.automaticColorAdjustment;
            this.textureEncoding = settingsEngine.rendering.textureEncoding;
            this.outputEncoding = settingsEngine.rendering.outputEncoding;
            this.physicallyCorrectLights = settingsEngine.rendering.physicallyCorrectLights;
            this.toneMapping = settingsEngine.rendering.toneMapping;
            this.toneMappingExposure = settingsEngine.rendering.toneMappingExposure;
        }
        if (sections.general) {
            this.defaultMaterialColor = settingsEngine.general.defaultMaterialColor;
            this.pointSize = settingsEngine.general.pointSize;
        }
        if (sections.light)
            this.lightEngine.applySettings(settingsEngine);
        if (sections.camera)
            this.cameraEngine.applySettings(settingsEngine);
        if (sections.postprocessing)
            this.postProcessingManager.applySettings(settingsEngine);
        // call adjust camera to load the three.js camera objects
        this.cameraManager.adjustCamera(1);
        (_a = this._stateEngine.viewportEngines[this.id]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.resolve(true);
        if (updateViewport)
            this.update('RenderingEngine.applySyncSettings');
    }
}
exports.RenderingEngine = RenderingEngine;
_RenderingEngine_defaultLogo = new WeakMap(), _RenderingEngine_defaultLogoStatic = new WeakMap(), _RenderingEngine_defaultSpinner = new WeakMap(), _RenderingEngine_animations = new WeakMap(), _RenderingEngine_flags = new WeakMap();
//# sourceMappingURL=RenderingEngine.js.map

/***/ })

}]);
//# sourceMappingURL=vendor.common-92f104f4.bundle.js.map