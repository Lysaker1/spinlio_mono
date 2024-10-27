"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[329],{

/***/ 65199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.latestVersion = exports.evaluateSettingsVersion = exports.validate = exports.convert = exports.previousVersion = exports.Defaults = exports.DefaultsV5 = exports.DefaultsV4_1 = exports.DefaultsV4_0 = exports.DefaultsV3_4 = exports.DefaultsV3_3 = exports.DefaultsV3_2 = exports.DefaultsV3_1 = exports.DefaultsV3 = exports.DefaultsV2 = exports.DefaultsV1 = void 0;
const Defaults_1 = __webpack_require__(99653);
Object.defineProperty(exports, "DefaultsV1", ({ enumerable: true, get: function () { return Defaults_1.Defaults; } }));
const Validator_1 = __webpack_require__(67089);
const Defaults_2 = __webpack_require__(79946);
Object.defineProperty(exports, "DefaultsV2", ({ enumerable: true, get: function () { return Defaults_2.Defaults; } }));
const Validator_2 = __webpack_require__(95592);
const Converter_1 = __webpack_require__(95206);
const Defaults_3 = __webpack_require__(19399);
Object.defineProperty(exports, "DefaultsV3", ({ enumerable: true, get: function () { return Defaults_3.Defaults; } }));
const Validator_3 = __webpack_require__(2067);
const Converter_2 = __webpack_require__(97241);
const Defaults_4 = __webpack_require__(99943);
Object.defineProperty(exports, "DefaultsV3_1", ({ enumerable: true, get: function () { return Defaults_4.Defaults; } }));
const Validator_4 = __webpack_require__(81331);
const Converter_3 = __webpack_require__(31577);
const Defaults_5 = __webpack_require__(80104);
Object.defineProperty(exports, "DefaultsV3_2", ({ enumerable: true, get: function () { return Defaults_5.Defaults; } }));
const Validator_5 = __webpack_require__(16814);
const Converter_4 = __webpack_require__(65952);
const Defaults_6 = __webpack_require__(33989);
Object.defineProperty(exports, "DefaultsV3_3", ({ enumerable: true, get: function () { return Defaults_6.Defaults; } }));
const Validator_6 = __webpack_require__(55633);
const Converter_5 = __webpack_require__(34219);
const Defaults_7 = __webpack_require__(51486);
Object.defineProperty(exports, "DefaultsV3_4", ({ enumerable: true, get: function () { return Defaults_7.Defaults; } }));
const Validator_7 = __webpack_require__(71212);
const Converter_6 = __webpack_require__(40370);
const Defaults_8 = __webpack_require__(45725);
Object.defineProperty(exports, "DefaultsV4_0", ({ enumerable: true, get: function () { return Defaults_8.Defaults; } }));
const Validator_8 = __webpack_require__(80313);
const Converter_7 = __webpack_require__(20739);
const Defaults_9 = __webpack_require__(35136);
Object.defineProperty(exports, "DefaultsV4_1", ({ enumerable: true, get: function () { return Defaults_9.Defaults; } }));
const Validator_9 = __webpack_require__(67446);
const Converter_8 = __webpack_require__(59608);
const Defaults_10 = __webpack_require__(92969);
Object.defineProperty(exports, "DefaultsV5", ({ enumerable: true, get: function () { return Defaults_10.Defaults; } }));
Object.defineProperty(exports, "Defaults", ({ enumerable: true, get: function () { return Defaults_10.Defaults; } }));
const Validator_10 = __webpack_require__(31445);
const Converter_9 = __webpack_require__(72231);
exports.previousVersion = ['1.0', '2.0', '3.0', '3.1', '3.2', '3.3', '3.4', '4.0', '4.1'];
let settingsUtilities = [];
settingsUtilities.push({
    version: '1.0',
    defaults: Defaults_1.Defaults,
    convertToPrevious: s => s,
    convertFromPrevious: s => s,
    validate: Validator_1.validate
});
settingsUtilities.push({
    version: '2.0',
    defaults: Defaults_2.Defaults,
    convertToPrevious: Converter_1.convertToPrevious,
    convertFromPrevious: Converter_1.convertFromPrevious,
    validate: Validator_2.validate
});
settingsUtilities.push({
    version: '3.0',
    defaults: Defaults_3.Defaults,
    convertToPrevious: Converter_2.convertToPrevious,
    convertFromPrevious: Converter_2.convertFromPrevious,
    validate: Validator_3.validate
});
settingsUtilities.push({
    version: '3.1',
    defaults: Defaults_4.Defaults,
    convertToPrevious: Converter_3.convertToPrevious,
    convertFromPrevious: Converter_3.convertFromPrevious,
    validate: Validator_4.validate
});
settingsUtilities.push({
    version: '3.2',
    defaults: Defaults_5.Defaults,
    convertToPrevious: Converter_4.convertToPrevious,
    convertFromPrevious: Converter_4.convertFromPrevious,
    validate: Validator_5.validate
});
settingsUtilities.push({
    version: '3.3',
    defaults: Defaults_6.Defaults,
    convertToPrevious: Converter_5.convertToPrevious,
    convertFromPrevious: Converter_5.convertFromPrevious,
    validate: Validator_6.validate
});
settingsUtilities.push({
    version: '3.4',
    defaults: Defaults_7.Defaults,
    convertToPrevious: Converter_6.convertToPrevious,
    convertFromPrevious: Converter_6.convertFromPrevious,
    validate: Validator_7.validate
});
settingsUtilities.push({
    version: '4.0',
    defaults: Defaults_8.Defaults,
    convertToPrevious: Converter_7.convertToPrevious,
    convertFromPrevious: Converter_7.convertFromPrevious,
    validate: Validator_8.validate
});
settingsUtilities.push({
    version: '4.1',
    defaults: Defaults_9.Defaults,
    convertToPrevious: Converter_8.convertToPrevious,
    convertFromPrevious: Converter_8.convertFromPrevious,
    validate: Validator_9.validate
});
settingsUtilities.push({
    version: '5.0',
    defaults: Defaults_10.Defaults,
    convertToPrevious: Converter_9.convertToPrevious,
    convertFromPrevious: Converter_9.convertFromPrevious,
    validate: Validator_10.validate
});
const convert = (settings, targetVersion) => {
    const original_version = settings.settings_version || '1.0';
    if (original_version === targetVersion)
        return settings;
    const target = settingsUtilities.findIndex(util => { return util.version === targetVersion; });
    const current = settingsUtilities.findIndex(util => { return util.version === original_version; });
    if (target === -1)
        throw new Error('ViewerSettings.convert: Target version not available');
    if (current === -1)
        throw new Error('ViewerSettings.convert: Settings version not available');
    let tempSettings = settings;
    if (target < current) {
        for (let i = current; target < i; i--)
            tempSettings = settingsUtilities[i].convertToPrevious(tempSettings, original_version);
    }
    else {
        for (let i = current + 1; i <= target; i++)
            tempSettings = settingsUtilities[i].convertFromPrevious(tempSettings, original_version);
    }
    return tempSettings;
};
exports.convert = convert;
const validate = (settings, targetVersion) => {
    const settings_version = settings.settings_version || '1.0';
    if (targetVersion !== undefined) {
        const index = settingsUtilities.findIndex(util => { return util.version === targetVersion; });
        if (index === -1)
            throw new Error('ViewerSettings.validate: Target version was not found.');
        if (settings_version !== undefined && settings_version !== targetVersion)
            throw new Error('ViewerSettings.validate: The settings do have a different version than the target version.');
        settingsUtilities[index].validate(settings);
    }
    else {
        if (!settings_version)
            throw new Error('ViewerSettings.validate: Settings do not have a version specified.');
        const index = settingsUtilities.findIndex(util => { return util.version === settings_version; });
        settingsUtilities[index].validate(settings);
    }
};
exports.validate = validate;
const evaluateSettingsVersion = (viewerVersion) => {
    if (!viewerVersion || viewerVersion.startsWith('1'))
        return '1.0';
    if (viewerVersion.startsWith('2')) {
        const upgradeVersions = viewerVersion
            .split('.')
            .map(item => { var _a; return (_a = item.match(/^\d+/)) === null || _a === void 0 ? void 0 : _a[0]; })
            .filter(Boolean)
            .map(match => parseInt(match));
        if (upgradeVersions[1] >= 18) {
            return '2.0';
        }
        else {
            return '1.0';
        }
    }
    if (viewerVersion.startsWith('3')) {
        const upgradeVersions = viewerVersion
            .split('.')
            .map(item => { var _a; return (_a = item.match(/^\d+/)) === null || _a === void 0 ? void 0 : _a[0]; })
            .filter(Boolean)
            .map(match => parseInt(match));
        if (upgradeVersions[1] >= 3) {
            return '5.0';
        }
        else if ((upgradeVersions[1] === 2 && upgradeVersions[2] >= 11) || upgradeVersions[1] > 2) {
            return '4.1';
        }
        else if ((upgradeVersions[1] === 2 && upgradeVersions[2] >= 10) || upgradeVersions[1] > 2) {
            return '4.0';
        }
        else if ((upgradeVersions[1] === 2 && upgradeVersions[2] >= 9) || upgradeVersions[1] > 2) {
            return '3.4';
        }
        else if ((upgradeVersions[1] === 2 && upgradeVersions[2] >= 7) || upgradeVersions[1] > 2) {
            return '3.3';
        }
        else if ((upgradeVersions[1] === 2 && upgradeVersions[2] >= 6) || upgradeVersions[1] > 2) {
            return '3.2';
        }
        else if ((upgradeVersions[1] === 1 && upgradeVersions[2] >= 12) || upgradeVersions[1] > 1) {
            return '3.1';
        }
        else {
            return '3.0';
        }
    }
    return '1.0';
};
exports.evaluateSettingsVersion = evaluateSettingsVersion;
exports.latestVersion = '5.0';
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 99653:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '1.0',
        ambientOcclusion: true,
        autoRotateSpeed: 0.0,
        backgroundColor: '#ffffff',
        bumpAmplitude: 1.0,
        camera: {
            position: { x: 0, y: 0, z: 0 },
            target: { x: 0, y: 0, z: 0 },
        },
        cameraAutoAdjust: false,
        cameraMovementDuration: 0,
        cameraOrtho: {
            position: { x: 0, y: 0, z: 0 },
            target: { x: 0, y: 0, z: 0 },
        },
        cameraRevertAtMouseUp: false,
        clearAlpha: 1.0,
        clearColor: '#ffffff',
        commitParameters: false,
        controlDamping: 0.1,
        controlNames: {},
        controlOrder: [],
        defaultMaterialColor: '#d3d3d3',
        disablePan: false,
        disableZoom: false,
        enableAutoRotation: false,
        enableRotation: true,
        environmentMap: 'none',
        environmentMapResolution: '1024',
        fov: 45,
        lightScene: 'default',
        lightScenes: null,
        panSpeed: 0.5,
        parametersHidden: [],
        pointSize: 1.0,
        revertAtMouseUpDuration: 800,
        rotateSpeed: 0.25,
        showEnvironmentMap: false,
        showGrid: false,
        showGroundPlane: false,
        showShadows: true,
        topView: false,
        zoomExtentFactor: 1.0,
        zoomSpeed: 1.0,
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 67089:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const lightSchema = zod_1.z.object({
    id: zod_1.z.string().optional(),
    name: zod_1.z.string().optional(),
    type: zod_1.z.string().optional(),
    properties: zod_1.z.object({
        color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
        direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }).optional(),
        position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }).optional(),
        target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }).optional(),
        castShadow: zod_1.z.boolean().optional(),
        skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
        groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
        intensity: zod_1.z.number().optional(),
        distance: zod_1.z.number().optional(),
        angle: zod_1.z.number().optional(),
        penumbra: zod_1.z.number().optional(),
        decay: zod_1.z.number().optional(),
        shadowMapResolution: zod_1.z.number().optional(),
        shadowMapBias: zod_1.z.number().optional()
    })
}).optional();
const lightsSchema = zod_1.z.record(lightSchema);
const lightScenesSchema = zod_1.z.record(zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    lights: lightsSchema
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string().optional(),
    ambientOcclusion: zod_1.z.boolean().optional(),
    autoRotateSpeed: zod_1.z.number().optional(),
    backgroundColor: zod_1.z.string().optional(),
    bumpAmplitude: zod_1.z.number().optional(),
    camera: zod_1.z.object({ position: zod_1.z.object({ x: zod_1.z.number().optional(), y: zod_1.z.number().optional(), z: zod_1.z.number().optional() }).optional(), target: zod_1.z.object({ x: zod_1.z.number().optional(), y: zod_1.z.number().optional(), z: zod_1.z.number().optional() }).optional() }).optional(),
    cameraAutoAdjust: zod_1.z.boolean().optional(),
    cameraMovementDuration: zod_1.z.number().optional(),
    cameraOrtho: zod_1.z.object({ position: zod_1.z.object({ x: zod_1.z.number().optional(), y: zod_1.z.number().optional(), z: zod_1.z.number().optional() }).optional(), target: zod_1.z.object({ x: zod_1.z.number().optional(), y: zod_1.z.number().optional(), z: zod_1.z.number().optional() }).optional() }).optional(),
    cameraRevertAtMouseUp: zod_1.z.boolean().optional(),
    clearAlpha: zod_1.z.number().optional(),
    clearColor: zod_1.z.string().optional(),
    commitParameters: zod_1.z.boolean().optional(),
    controlDamping: zod_1.z.number().optional(),
    controlNames: zod_1.z.record(zod_1.z.string()).optional(),
    controlOrder: zod_1.z.string().array().optional(),
    defaultMaterialColor: zod_1.z.union([zod_1.z.string(), zod_1.z.number().array().optional()]),
    disablePan: zod_1.z.boolean().optional(),
    disableZoom: zod_1.z.boolean().optional(),
    enableAutoRotation: zod_1.z.boolean().optional(),
    enableRotation: zod_1.z.boolean().optional(),
    environmentMap: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array().optional()]),
    environmentMapResolution: zod_1.z.string().optional(),
    fov: zod_1.z.number().positive().optional(),
    lightScene: zod_1.z.string().optional(),
    lightScenes: lightScenesSchema.nullable().optional(),
    panSpeed: zod_1.z.number().optional(),
    parametersHidden: zod_1.z.string().array().optional(),
    pointSize: zod_1.z.number().optional(),
    revertAtMouseUpDuration: zod_1.z.number().optional(),
    rotateSpeed: zod_1.z.number().optional(),
    showEnvironmentMap: zod_1.z.boolean().optional(),
    showGrid: zod_1.z.boolean().optional(),
    showGroundPlane: zod_1.z.boolean().optional(),
    showShadows: zod_1.z.boolean().optional(),
    topView: zod_1.z.boolean().optional(),
    zoomExtentFactor: zod_1.z.number().optional(),
    zoomSpeed: zod_1.z.number().optional(),
}).passthrough();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 95206:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(99653);
const Defaults_2 = __webpack_require__(79946);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    if (oldSettings.clearAlpha !== undefined)
        settings.viewer.scene.render.clearAlpha = oldSettings.clearAlpha;
    if (oldSettings.clearColor !== undefined)
        settings.viewer.scene.render.clearColor = oldSettings.clearColor;
    if (oldSettings.clearAlpha === undefined && oldSettings.clearColor === undefined && oldSettings.backgroundColor !== undefined)
        settings.viewer.scene.render.clearColor = oldSettings.backgroundColor;
    if (oldSettings.defaultMaterialColor !== undefined)
        settings.defaultMaterial.color = oldSettings.defaultMaterialColor;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    if (oldSettings.camera !== undefined && oldSettings.camera.position !== undefined && oldSettings.camera.target !== undefined &&
        oldSettings.camera.position.x !== undefined && oldSettings.camera.position.y !== undefined && oldSettings.camera.position.z !== undefined &&
        oldSettings.camera.target.x !== undefined && oldSettings.camera.target.y !== undefined && oldSettings.camera.target.z !== undefined) {
        if (!(oldSettings.camera.position.x === 5 && oldSettings.camera.position.y === 5 && oldSettings.camera.position.z === 5 &&
            oldSettings.camera.target.x === 0 && oldSettings.camera.target.y === 0 && oldSettings.camera.target.z === 0) &&
            !(oldSettings.camera.position.x === 0 && oldSettings.camera.position.y === 0 && oldSettings.camera.position.z === 0 &&
                oldSettings.camera.target.x === 0 && oldSettings.camera.target.y === 0 && oldSettings.camera.target.z === 0)) {
            settings.viewer.scene.camera.cameraTypes.perspective.default.position = oldSettings.camera.position;
            settings.viewer.scene.camera.cameraTypes.perspective.default.target = oldSettings.camera.target;
        }
    }
    if (oldSettings.cameraOrtho !== undefined && oldSettings.cameraOrtho.position !== undefined && oldSettings.cameraOrtho.target !== undefined &&
        oldSettings.cameraOrtho.position.x !== undefined && oldSettings.cameraOrtho.position.y !== undefined && oldSettings.cameraOrtho.position.z !== undefined &&
        oldSettings.cameraOrtho.target.x !== undefined && oldSettings.cameraOrtho.target.y !== undefined && oldSettings.cameraOrtho.target.z !== undefined) {
        if (!(oldSettings.cameraOrtho.position.x === 5 && oldSettings.cameraOrtho.position.y === 5 && oldSettings.cameraOrtho.position.z === 5 &&
            oldSettings.cameraOrtho.target.x === 0 && oldSettings.cameraOrtho.target.y === 0 && oldSettings.cameraOrtho.target.z === 0) &&
            !(oldSettings.cameraOrtho.position.x === 0 && oldSettings.cameraOrtho.position.y === 0 && oldSettings.cameraOrtho.position.z === 0 &&
                oldSettings.cameraOrtho.target.x === 0 && oldSettings.cameraOrtho.target.y === 0 && oldSettings.cameraOrtho.target.z === 0)) {
            settings.viewer.scene.camera.cameraTypes.orthographic.default.position = oldSettings.cameraOrtho.position;
            settings.viewer.scene.camera.cameraTypes.orthographic.default.target = oldSettings.cameraOrtho.target;
        }
        else if (oldSettings.topView && !(oldSettings.cameraOrtho.position.x === 5 && oldSettings.cameraOrtho.position.y === 5 && oldSettings.cameraOrtho.position.z === 5 &&
            oldSettings.cameraOrtho.target.x === 0 && oldSettings.cameraOrtho.target.y === 0 && oldSettings.cameraOrtho.target.z === 0) &&
            !(oldSettings.cameraOrtho.position.x === 0 && oldSettings.cameraOrtho.position.y === 0 && oldSettings.cameraOrtho.position.z === 0 &&
                oldSettings.cameraOrtho.target.x === 0 && oldSettings.cameraOrtho.target.y === 0 && oldSettings.cameraOrtho.target.z === 0)) {
            if (oldSettings.camera !== undefined && oldSettings.camera.position !== undefined && oldSettings.camera.target !== undefined &&
                oldSettings.camera.position.x !== undefined && oldSettings.camera.position.y !== undefined && oldSettings.camera.position.z !== undefined &&
                oldSettings.camera.target.x !== undefined && oldSettings.camera.target.y !== undefined && oldSettings.camera.target.z !== undefined) {
                settings.viewer.scene.camera.cameraTypes.orthographic.default.position = oldSettings.camera.position;
                settings.viewer.scene.camera.cameraTypes.orthographic.default.target = oldSettings.camera.target;
            }
        }
    }
    if (oldSettings.ambientOcclusion !== undefined)
        settings.viewer.scene.render.ambientOcclusion = oldSettings.ambientOcclusion;
    if (oldSettings.autoRotateSpeed !== undefined)
        settings.viewer.scene.camera.controls.orbit.autoRotationSpeed = oldSettings.autoRotateSpeed;
    if (oldSettings.bumpAmplitude !== undefined)
        settings.defaultMaterial.bumpAmplitude = oldSettings.bumpAmplitude;
    if (oldSettings.cameraAutoAdjust !== undefined)
        settings.viewer.scene.camera.autoAdjust = oldSettings.cameraAutoAdjust;
    if (oldSettings.cameraMovementDuration !== undefined)
        settings.viewer.scene.camera.cameraMovementDuration = oldSettings.cameraMovementDuration;
    if (oldSettings.cameraRevertAtMouseUp !== undefined)
        settings.viewer.scene.camera.revertAtMouseUp = oldSettings.cameraRevertAtMouseUp;
    if (oldSettings.commitParameters !== undefined)
        settings.viewer.commitParameters = oldSettings.commitParameters;
    if (oldSettings.controlDamping !== undefined)
        settings.viewer.scene.camera.controls.orbit.damping = oldSettings.controlDamping;
    if (oldSettings.controlDamping !== undefined)
        settings.viewer.scene.camera.controls.orthographic.damping = oldSettings.controlDamping;
    if (oldSettings.controlNames !== undefined)
        settings.parameters.controlNames = oldSettings.controlNames;
    if (oldSettings.controlOrder !== undefined)
        settings.parameters.controlOrder = oldSettings.controlOrder;
    if (oldSettings.disablePan !== undefined)
        settings.viewer.scene.camera.controls.orbit.enablePan = !oldSettings.disablePan;
    if (oldSettings.disablePan !== undefined)
        settings.viewer.scene.camera.controls.orthographic.enablePan = !oldSettings.disablePan;
    if (oldSettings.disableZoom !== undefined)
        settings.viewer.scene.camera.controls.orbit.enableZoom = !oldSettings.disableZoom;
    if (oldSettings.disableZoom !== undefined)
        settings.viewer.scene.camera.controls.orthographic.enableZoom = !oldSettings.disableZoom;
    if (oldSettings.enableAutoRotation !== undefined)
        settings.viewer.scene.camera.controls.orbit.enableAutoRotation = oldSettings.enableAutoRotation;
    if (oldSettings.enableRotation !== undefined)
        settings.viewer.scene.camera.controls.orbit.enableRotation = oldSettings.enableRotation;
    if (oldSettings.environmentMap !== undefined)
        settings.viewer.scene.material.environmentMap = oldSettings.environmentMap;
    if (oldSettings.environmentMapResolution !== undefined)
        settings.viewer.scene.material.environmentMapResolution = oldSettings.environmentMapResolution;
    if (oldSettings.fov !== undefined)
        settings.viewer.scene.camera.cameraTypes.perspective.fov = oldSettings.fov;
    if (oldSettings.lightScene !== undefined)
        settings.viewer.scene.lights.lightScene = oldSettings.lightScene;
    if (oldSettings.lightScenes !== undefined)
        settings.viewer.scene.lights.lightScenes = oldSettings.lightScenes;
    if (oldSettings.panSpeed !== undefined)
        settings.viewer.scene.camera.controls.orbit.panSpeed = oldSettings.panSpeed;
    if (oldSettings.parametersHidden !== undefined)
        settings.parameters.parametersHidden = oldSettings.parametersHidden;
    if (oldSettings.pointSize !== undefined)
        settings.viewer.scene.render.pointSize = oldSettings.pointSize;
    if (oldSettings.revertAtMouseUpDuration !== undefined)
        settings.viewer.scene.camera.revertAtMouseUpDuration = oldSettings.revertAtMouseUpDuration;
    if (oldSettings.rotateSpeed !== undefined)
        settings.viewer.scene.camera.controls.orbit.rotationSpeed = oldSettings.rotateSpeed;
    if (oldSettings.showEnvironmentMap !== undefined)
        settings.viewer.scene.material.environmentMapAsBackground = oldSettings.showEnvironmentMap;
    if (oldSettings.showGrid !== undefined)
        settings.viewer.scene.gridVisibility = oldSettings.showGrid;
    if (oldSettings.showGroundPlane !== undefined)
        settings.viewer.scene.groundPlaneVisibility = oldSettings.showGroundPlane;
    if (oldSettings.showShadows !== undefined)
        settings.viewer.scene.render.shadows = oldSettings.showShadows;
    if (oldSettings.topView)
        settings.viewer.scene.camera.cameraTypes.active = 1;
    if (oldSettings.zoomExtentFactor !== undefined)
        settings.viewer.scene.camera.zoomExtentsFactor = oldSettings.zoomExtentFactor;
    if (oldSettings.zoomSpeed !== undefined)
        settings.viewer.scene.camera.controls.orbit.zoomSpeed = oldSettings.zoomSpeed;
    if (oldSettings.zoomSpeed !== undefined)
        settings.viewer.scene.camera.controls.orthographic.zoomSpeed = oldSettings.zoomSpeed;
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.ambientOcclusion = newSettings.viewer.scene.render.ambientOcclusion;
    settings.autoRotateSpeed = newSettings.viewer.scene.camera.controls.orbit.autoRotationSpeed;
    settings.bumpAmplitude = newSettings.defaultMaterial.bumpAmplitude;
    settings.camera = {
        position: newSettings.viewer.scene.camera.cameraTypes.perspective.default.position,
        target: newSettings.viewer.scene.camera.cameraTypes.perspective.default.target,
    };
    settings.cameraAutoAdjust = newSettings.viewer.scene.camera.autoAdjust;
    settings.cameraMovementDuration = newSettings.viewer.scene.camera.cameraMovementDuration;
    settings.cameraOrtho = {
        position: newSettings.viewer.scene.camera.cameraTypes.orthographic.default.position,
        target: newSettings.viewer.scene.camera.cameraTypes.orthographic.default.target,
    };
    settings.cameraRevertAtMouseUp = newSettings.viewer.scene.camera.revertAtMouseUp;
    settings.clearAlpha = newSettings.viewer.scene.render.clearAlpha;
    settings.clearColor = newSettings.viewer.scene.render.clearColor;
    settings.commitParameters = newSettings.viewer.commitParameters;
    settings.controlDamping = newSettings.viewer.scene.camera.controls.orbit.damping;
    if (newSettings.parameters && newSettings.parameters.controlNames) {
        settings.controlNames = newSettings.parameters.controlNames;
    }
    if (newSettings.parameters && newSettings.parameters.controlOrder) {
        settings.controlOrder = newSettings.parameters.controlOrder;
    }
    settings.defaultMaterialColor = newSettings.defaultMaterial.color;
    settings.disablePan = !newSettings.viewer.scene.camera.controls.orbit.enablePan;
    settings.disableZoom = !newSettings.viewer.scene.camera.controls.orbit.enableZoom;
    settings.enableAutoRotation = newSettings.viewer.scene.camera.controls.orbit.enableAutoRotation;
    settings.enableRotation = newSettings.viewer.scene.camera.controls.orbit.enableRotation;
    settings.environmentMap = newSettings.viewer.scene.material.environmentMap;
    settings.environmentMapResolution = newSettings.viewer.scene.material.environmentMapResolution;
    settings.fov = newSettings.viewer.scene.camera.cameraTypes.perspective.fov;
    settings.lightScene = newSettings.viewer.scene.lights.lightScene;
    settings.lightScenes = newSettings.viewer.scene.lights.lightScenes;
    settings.panSpeed = newSettings.viewer.scene.camera.controls.orbit.panSpeed;
    if (newSettings.parameters && newSettings.parameters.parametersHidden) {
        settings.parametersHidden = newSettings.parameters.parametersHidden;
    }
    settings.pointSize = newSettings.viewer.scene.render.pointSize;
    settings.revertAtMouseUpDuration = newSettings.viewer.scene.camera.revertAtMouseUpDuration;
    settings.rotateSpeed = newSettings.viewer.scene.camera.controls.orbit.rotationSpeed;
    settings.showEnvironmentMap = newSettings.viewer.scene.material.environmentMapAsBackground;
    settings.showGrid = newSettings.viewer.scene.gridVisibility;
    settings.showGroundPlane = newSettings.viewer.scene.groundPlaneVisibility;
    settings.showShadows = newSettings.viewer.scene.render.shadows;
    settings.topView = newSettings.viewer.scene.camera.cameraTypes.active === 1;
    settings.zoomExtentFactor = newSettings.viewer.scene.camera.zoomExtentsFactor;
    settings.zoomSpeed = newSettings.viewer.scene.camera.controls.orbit.zoomSpeed;
    settings.backgroundColor = newSettings.viewer.scene.render.clearColor;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 79946:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '2.0',
        ar: {
            enableCameraSync: false,
            enableCameraSyncInitial: false,
            enableLightingEstimation: true,
            enableTouchControls: true,
            enableTouchControlRotation: true,
            enableAutomaticPlacement: true,
            defaultHitTestType: 'existingPlaneUsingGeometry',
        },
        defaultMaterial: {
            bumpAmplitude: 1,
            color: '#d3d3d3',
            metalness: 0.0,
            roughness: 1.0,
        },
        parameters: {
            controlOrder: [],
            controlNames: {},
            parametersHidden: [],
        },
        viewer: {
            blurSceneWhenBusy: true,
            ignoreSuperseded: true,
            loggingLevel: -1,
            messageLoggingLevel: -1,
            showMessages: true,
            hasRestoredSettings: false,
            useModelSettings: false,
            commitParameters: false,
            commitSettings: false,
            viewerRuntimeId: '',
            scene: {
                show: false,
                showSceneTransition: '1s',
                camera: {
                    autoAdjust: false,
                    cameraMovementDuration: 800,
                    cameraTypes: {
                        perspective: {
                            default: {
                                position: { x: 0, y: 0, z: 0 },
                                target: { x: 0, y: 0, z: 0 },
                            },
                            fov: 45,
                            controls: 0,
                        },
                        orthographic: {
                            default: {
                                position: { x: 0, y: 0, z: 0 },
                                target: { x: 0, y: 0, z: 0 },
                            },
                        },
                        active: 0,
                    },
                    controls: {
                        orbit: {
                            autoRotationSpeed: 0,
                            damping: 0.1,
                            enableAutoRotation: false,
                            enableKeyPan: false,
                            enablePan: true,
                            enableRotation: true,
                            enableZoom: true,
                            input: { keys: { up: 38, down: 40, left: 37, right: 39 }, mouse: { rotate: 0, zoom: 1, pan: 2 }, touch: { rotate: 1, zoom: 2, pan: 3 }, },
                            keyPanSpeed: 0.5,
                            movementSmoothness: 0.5,
                            restrictions: {
                                position: {
                                    cube: {
                                        min: { x: -Infinity, y: -Infinity, z: -Infinity },
                                        max: { x: Infinity, y: Infinity, z: Infinity },
                                    },
                                    sphere: {
                                        center: { x: 0, y: 0, z: 0 },
                                        radius: Infinity,
                                    },
                                },
                                target: {
                                    cube: {
                                        min: { x: -Infinity, y: -Infinity, z: -Infinity },
                                        max: { x: Infinity, y: Infinity, z: Infinity },
                                    },
                                    sphere: {
                                        center: { x: 0, y: 0, z: 0 },
                                        radius: Infinity,
                                    },
                                },
                                rotation: {
                                    minPolarAngle: 0,
                                    maxPolarAngle: 180,
                                    minAzimuthAngle: -Infinity,
                                    maxAzimuthAngle: Infinity,
                                },
                                zoom: {
                                    minDistance: 0,
                                    maxDistance: Infinity,
                                },
                            },
                            rotationSpeed: 0.5,
                            panSpeed: 0.5,
                            zoomSpeed: 0.5,
                        },
                        fps: {},
                        orthographic: {
                            damping: 0.1,
                            enableKeyPan: false,
                            enablePan: true,
                            enableZoom: true,
                            input: { keys: { up: 38, down: 40, left: 37, right: 39 }, mouse: { rotate: 0, zoom: 1, pan: 2 }, touch: { rotate: 1, zoom: 2, pan: 3 } },
                            keyPanSpeed: 0.5,
                            movementSmoothness: 0.5,
                            panSpeed: 0.5,
                            zoomSpeed: 0.5,
                        }
                    },
                    enableCameraControls: true,
                    revertAtMouseUp: false,
                    revertAtMouseUpDuration: 800,
                    zoomExtentsFactor: 1,
                },
                duration: 0,
                fullscreen: false,
                gridVisibility: true,
                groundPlaneReflectionThreshold: 0.01,
                groundPlaneReflectionVisibility: false,
                groundPlaneVisibility: true,
                lights: {
                    helper: false,
                    lightScene: 'default',
                    lightScenes: {},
                },
                material: {
                    environmentMap: 'none',
                    environmentMapAsBackground: false,
                    environmentMapResolution: '1024',
                },
                render: {
                    ambientOcclusion: true,
                    beautyRenderDelay: 50,
                    beautyRenderBlendingDuration: 1500,
                    clearColor: '#ffffff',
                    clearAlpha: 1.0,
                    pointSize: 1.0,
                    shadows: true,
                    sao: {
                        samples: 8,
                        intensity: 0.1,
                        kernelRadius: 8,
                        standardDev: 25,
                    },
                },
            }
        }
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 95592:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const lightSchema = zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    order: zod_1.z.number().optional(),
    properties: zod_1.z.object({
        color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
        direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }).optional(),
        position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }).optional(),
        target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }).optional(),
        castShadow: zod_1.z.boolean().optional(),
        skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
        groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]).optional(),
        intensity: zod_1.z.number().optional(),
        distance: zod_1.z.number().optional(),
        angle: zod_1.z.number().optional(),
        penumbra: zod_1.z.number().optional(),
        decay: zod_1.z.number().optional(),
        shadowMapResolution: zod_1.z.number().optional(),
        shadowMapBias: zod_1.z.number().optional()
    })
});
const lightScenesSchema = zod_1.z.record(zod_1.z.object({
    id: zod_1.z.string(),
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(lightSchema)
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enableCameraSync: zod_1.z.boolean().optional(),
        enableCameraSyncInitial: zod_1.z.boolean().optional(),
        enableLightingEstimation: zod_1.z.boolean().optional(),
        enableTouchControls: zod_1.z.boolean().optional(),
        enableTouchControlRotation: zod_1.z.boolean().optional(),
        enableAutomaticPlacement: zod_1.z.boolean().optional(),
        defaultHitTestType: zod_1.z.string().optional(),
    }).optional(),
    defaultMaterial: zod_1.z.object({
        bumpAmplitude: zod_1.z.number().optional(),
        color: zod_1.z.union([zod_1.z.string(), zod_1.z.number().array()]).optional(),
        metalness: zod_1.z.number().optional(),
        roughness: zod_1.z.number().optional(),
    }),
    parameters: zod_1.z.object({
        controlOrder: zod_1.z.string().array().optional(),
        controlNames: zod_1.z.record(zod_1.z.string()).optional(),
        parametersHidden: zod_1.z.string().array().optional(),
    }).optional(),
    viewer: zod_1.z.object({
        blurSceneWhenBusy: zod_1.z.boolean(),
        ignoreSuperseded: zod_1.z.boolean().optional(),
        loggingLevel: zod_1.z.number().optional(),
        messageLoggingLevel: zod_1.z.number().optional(),
        viewerRuntimeId: zod_1.z.string().optional(),
        hasRestoredSettings: zod_1.z.boolean().optional(),
        useModelSettings: zod_1.z.boolean().optional(),
        showMessages: zod_1.z.boolean().optional(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        scene: zod_1.z.object({
            show: zod_1.z.boolean().optional(),
            showSceneTransition: zod_1.z.string().optional(),
            duration: zod_1.z.number().optional(),
            fullscreen: zod_1.z.boolean().optional(),
            gridVisibility: zod_1.z.boolean(),
            groundPlaneReflectionThreshold: zod_1.z.number().optional(),
            groundPlaneReflectionVisibility: zod_1.z.boolean().optional(),
            groundPlaneVisibility: zod_1.z.boolean(),
            camera: zod_1.z.object({
                autoAdjust: zod_1.z.boolean(),
                cameraMovementDuration: zod_1.z.number(),
                cameraTypes: zod_1.z.object({
                    perspective: zod_1.z.object({
                        default: zod_1.z.object({ position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }) }),
                        fov: zod_1.z.number(),
                        controls: zod_1.z.number().optional(),
                    }),
                    orthographic: zod_1.z.object({
                        default: zod_1.z.object({ position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }) }),
                    }),
                    active: zod_1.z.number()
                }),
                controls: zod_1.z.object({
                    orbit: zod_1.z.object({
                        autoRotationSpeed: zod_1.z.number(),
                        damping: zod_1.z.number(),
                        enableAutoRotation: zod_1.z.boolean(),
                        enableKeyPan: zod_1.z.boolean(),
                        enablePan: zod_1.z.boolean(),
                        enableRotation: zod_1.z.boolean(),
                        enableZoom: zod_1.z.boolean(),
                        input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
                        keyPanSpeed: zod_1.z.number(),
                        movementSmoothness: zod_1.z.number(),
                        restrictions: zod_1.z.object({
                            position: zod_1.z.object({
                                cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }).optional(),
                                sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }).optional(),
                            }).optional(),
                            target: zod_1.z.object({
                                cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }).optional(),
                                sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }).optional(),
                            }).optional(),
                            rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }).optional(),
                            zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }).optional(),
                        }),
                        rotationSpeed: zod_1.z.number(),
                        panSpeed: zod_1.z.number(),
                        zoomSpeed: zod_1.z.number(),
                    }),
                    fps: zod_1.z.object({}),
                    orthographic: zod_1.z.object({
                        damping: zod_1.z.number(),
                        enableKeyPan: zod_1.z.boolean(),
                        enablePan: zod_1.z.boolean(),
                        enableZoom: zod_1.z.boolean(),
                        input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
                        keyPanSpeed: zod_1.z.number(),
                        movementSmoothness: zod_1.z.number(),
                        panSpeed: zod_1.z.number(),
                        zoomSpeed: zod_1.z.number(),
                    })
                }),
                enableCameraControls: zod_1.z.boolean(),
                revertAtMouseUp: zod_1.z.boolean(),
                revertAtMouseUpDuration: zod_1.z.number(),
                zoomExtentsFactor: zod_1.z.number().positive(),
            }),
            lights: zod_1.z.object({
                helper: zod_1.z.boolean().optional(),
                lightScene: zod_1.z.string(),
                lightScenes: lightScenesSchema.nullable()
            }),
            material: zod_1.z.object({
                environmentMap: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
                environmentMapAsBackground: zod_1.z.boolean(),
                environmentMapResolution: zod_1.z.enum(['256', '512', '1024', '2048'])
            }),
            render: zod_1.z.object({
                ambientOcclusion: zod_1.z.boolean(),
                beautyRenderDelay: zod_1.z.number(),
                beautyRenderBlendingDuration: zod_1.z.number().optional(),
                clearAlpha: zod_1.z.number(),
                clearColor: zod_1.z.string(),
                pointSize: zod_1.z.number(),
                shadows: zod_1.z.boolean(),
                sao: zod_1.z.object({
                    samples: zod_1.z.number().positive().optional(),
                    kernelRadius: zod_1.z.number().positive().optional(),
                    intensity: zod_1.z.number().positive().optional(),
                    standardDev: zod_1.z.number().optional(),
                })
            }),
        }),
    }),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 97241:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(79946);
const Defaults_2 = __webpack_require__(19399);
const uuid_1 = __webpack_require__(10611);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    if (oldSettings.parameters && oldSettings.parameters.controlNames) {
        for (let id in oldSettings.parameters.controlNames) {
            settings.session[id] = {
                order: 0,
                displayname: oldSettings.parameters.controlNames[id],
                hidden: false
            };
        }
    }
    if (oldSettings.parameters && oldSettings.parameters.controlOrder) {
        for (let i = 0; i < oldSettings.parameters.controlOrder.length; i++) {
            const id = oldSettings.parameters.controlOrder[i];
            if (settings.session[id]) {
                settings.session[id].order = i;
            }
            else {
                settings.session[id] = {
                    order: i,
                    displayname: '',
                    hidden: false
                };
            }
        }
    }
    if (oldSettings.parameters && oldSettings.parameters.parametersHidden) {
        for (let i = 0; i < oldSettings.parameters.parametersHidden.length; i++) {
            const id = oldSettings.parameters.parametersHidden[i];
            if (settings.session[id]) {
                settings.session[id].hidden = true;
            }
            else {
                settings.session[id] = {
                    order: 0,
                    displayname: '',
                    hidden: true
                };
            }
        }
    }
    settings.general.blurWhenBusy = oldSettings.viewer.blurSceneWhenBusy;
    settings.general.commitParameters = oldSettings.viewer.commitParameters;
    settings.general.commitSettings = oldSettings.viewer.commitSettings;
    if (oldSettings.viewer.showMessages)
        settings.general.showMessages = oldSettings.viewer.showMessages;
    settings.environmentGeometry.gridVisibility = oldSettings.viewer.scene.gridVisibility;
    settings.environmentGeometry.groundPlaneVisibility = oldSettings.viewer.scene.groundPlaneVisibility;
    const id = uuid_1.v4();
    settings.camera.cameraId = id;
    if (oldSettings.viewer.scene.camera.cameraTypes.active === 0) {
        const orbitRestriction = oldSettings.viewer.scene.camera.controls.orbit.restrictions;
        const positionCubeRestriction = orbitRestriction.position && orbitRestriction.position.cube ? { min: { x: orbitRestriction.position.cube.min.x, y: orbitRestriction.position.cube.min.y, z: orbitRestriction.position.cube.min.z }, max: { x: orbitRestriction.position.cube.max.x, y: orbitRestriction.position.cube.max.y, z: orbitRestriction.position.cube.max.z } } : { min: { x: -Infinity, y: -Infinity, z: -Infinity }, max: { x: Infinity, y: Infinity, z: Infinity }, };
        const targetCubeRestriction = orbitRestriction.target && orbitRestriction.target.cube ? { min: { x: orbitRestriction.target.cube.min.x, y: orbitRestriction.target.cube.min.y, z: orbitRestriction.target.cube.min.z }, max: { x: orbitRestriction.target.cube.max.x, y: orbitRestriction.target.cube.max.y, z: orbitRestriction.target.cube.max.z } } : { min: { x: -Infinity, y: -Infinity, z: -Infinity }, max: { x: Infinity, y: Infinity, z: Infinity }, };
        const positionSphereRestriction = orbitRestriction.position && orbitRestriction.position.sphere ? { center: { x: orbitRestriction.position.sphere.center.x, y: orbitRestriction.position.sphere.center.y, z: orbitRestriction.position.sphere.center.z }, radius: orbitRestriction.position.sphere.radius } : { center: { x: 0, y: 0, z: 0 }, radius: Infinity, };
        const targetSphereRestriction = orbitRestriction.target && orbitRestriction.target.sphere ? { center: { x: orbitRestriction.target.sphere.center.x, y: orbitRestriction.target.sphere.center.y, z: orbitRestriction.target.sphere.center.z }, radius: orbitRestriction.target.sphere.radius } : { center: { x: 0, y: 0, z: 0 }, radius: Infinity, };
        const rotationRestriction = orbitRestriction.rotation ? { minPolarAngle: orbitRestriction.rotation.minPolarAngle, maxPolarAngle: orbitRestriction.rotation.maxPolarAngle, minAzimuthAngle: orbitRestriction.rotation.minAzimuthAngle, maxAzimuthAngle: orbitRestriction.rotation.maxAzimuthAngle, } : { minPolarAngle: 0, maxPolarAngle: 180, minAzimuthAngle: -Infinity, maxAzimuthAngle: Infinity, };
        const zoomRestriction = orbitRestriction.zoom ? { minDistance: orbitRestriction.zoom.minDistance, maxDistance: orbitRestriction.zoom.maxDistance } : { minDistance: 0, maxDistance: Infinity };
        const restrictions = { position: { cube: positionCubeRestriction, sphere: positionSphereRestriction, }, target: { cube: targetCubeRestriction, sphere: targetSphereRestriction, }, rotation: rotationRestriction, zoom: zoomRestriction, };
        settings.camera.cameras = {
            [id]: {
                type: 'perspective',
                autoAdjust: oldSettings.viewer.scene.camera.autoAdjust,
                cameraMovementDuration: oldSettings.viewer.scene.camera.cameraMovementDuration,
                controls: {
                    autoRotationSpeed: oldSettings.viewer.scene.camera.controls.orbit.autoRotationSpeed,
                    damping: oldSettings.viewer.scene.camera.controls.orbit.damping,
                    enableAutoRotation: oldSettings.viewer.scene.camera.controls.orbit.enableAutoRotation,
                    enableKeyPan: oldSettings.viewer.scene.camera.controls.orbit.enableKeyPan,
                    enablePan: oldSettings.viewer.scene.camera.controls.orbit.enablePan,
                    enableRotation: oldSettings.viewer.scene.camera.controls.orbit.enableRotation,
                    enableZoom: oldSettings.viewer.scene.camera.controls.orbit.enableZoom,
                    input: {
                        keys: {
                            up: oldSettings.viewer.scene.camera.controls.orbit.input.keys.up,
                            down: oldSettings.viewer.scene.camera.controls.orbit.input.keys.down,
                            left: oldSettings.viewer.scene.camera.controls.orbit.input.keys.left,
                            right: oldSettings.viewer.scene.camera.controls.orbit.input.keys.right
                        },
                        mouse: {
                            rotate: oldSettings.viewer.scene.camera.controls.orbit.input.mouse.rotate,
                            zoom: oldSettings.viewer.scene.camera.controls.orbit.input.mouse.zoom,
                            pan: oldSettings.viewer.scene.camera.controls.orbit.input.mouse.pan
                        },
                        touch: {
                            rotate: oldSettings.viewer.scene.camera.controls.orbit.input.touch.rotate,
                            zoom: oldSettings.viewer.scene.camera.controls.orbit.input.touch.zoom,
                            pan: oldSettings.viewer.scene.camera.controls.orbit.input.touch.pan
                        },
                    },
                    keyPanSpeed: oldSettings.viewer.scene.camera.controls.orbit.keyPanSpeed,
                    movementSmoothness: oldSettings.viewer.scene.camera.controls.orbit.movementSmoothness,
                    restrictions,
                    rotationSpeed: oldSettings.viewer.scene.camera.controls.orbit.rotationSpeed,
                    panSpeed: oldSettings.viewer.scene.camera.controls.orbit.panSpeed,
                    zoomSpeed: oldSettings.viewer.scene.camera.controls.orbit.zoomSpeed,
                },
                enableCameraControls: oldSettings.viewer.scene.camera.enableCameraControls,
                fov: oldSettings.viewer.scene.camera.cameraTypes.perspective.fov,
                position: {
                    x: oldSettings.viewer.scene.camera.cameraTypes.perspective.default.position.x,
                    y: oldSettings.viewer.scene.camera.cameraTypes.perspective.default.position.y,
                    z: oldSettings.viewer.scene.camera.cameraTypes.perspective.default.position.z,
                },
                revertAtMouseUp: oldSettings.viewer.scene.camera.revertAtMouseUp,
                revertAtMouseUpDuration: oldSettings.viewer.scene.camera.revertAtMouseUpDuration,
                target: {
                    x: oldSettings.viewer.scene.camera.cameraTypes.perspective.default.target.x,
                    y: oldSettings.viewer.scene.camera.cameraTypes.perspective.default.target.y,
                    z: oldSettings.viewer.scene.camera.cameraTypes.perspective.default.target.z,
                },
                zoomExtentsFactor: oldSettings.viewer.scene.camera.zoomExtentsFactor,
            }
        };
    }
    else {
        let type = 'top';
        switch (oldSettings.viewer.scene.camera.cameraTypes.active) {
            case 2:
                type = 'bottom';
                break;
            case 3:
                type = 'right';
                break;
            case 4:
                type = 'left';
                break;
            case 5:
                type = 'back';
                break;
            case 6:
                type = 'front';
                break;
            default:
                type = 'top';
        }
        settings.camera.cameras = {
            [id]: {
                type,
                autoAdjust: oldSettings.viewer.scene.camera.autoAdjust,
                cameraMovementDuration: oldSettings.viewer.scene.camera.cameraMovementDuration,
                controls: {
                    damping: oldSettings.viewer.scene.camera.controls.orbit.damping,
                    enableKeyPan: oldSettings.viewer.scene.camera.controls.orbit.enableKeyPan,
                    enablePan: oldSettings.viewer.scene.camera.controls.orbit.enablePan,
                    enableZoom: oldSettings.viewer.scene.camera.controls.orbit.enableZoom,
                    input: {
                        keys: {
                            up: oldSettings.viewer.scene.camera.controls.orbit.input.keys.up,
                            down: oldSettings.viewer.scene.camera.controls.orbit.input.keys.down,
                            left: oldSettings.viewer.scene.camera.controls.orbit.input.keys.left,
                            right: oldSettings.viewer.scene.camera.controls.orbit.input.keys.right
                        },
                        mouse: {
                            rotate: oldSettings.viewer.scene.camera.controls.orbit.input.mouse.rotate,
                            zoom: oldSettings.viewer.scene.camera.controls.orbit.input.mouse.zoom,
                            pan: oldSettings.viewer.scene.camera.controls.orbit.input.mouse.pan
                        },
                        touch: {
                            rotate: oldSettings.viewer.scene.camera.controls.orbit.input.touch.rotate,
                            zoom: oldSettings.viewer.scene.camera.controls.orbit.input.touch.zoom,
                            pan: oldSettings.viewer.scene.camera.controls.orbit.input.touch.pan
                        },
                    },
                    keyPanSpeed: oldSettings.viewer.scene.camera.controls.orbit.keyPanSpeed,
                    movementSmoothness: oldSettings.viewer.scene.camera.controls.orbit.movementSmoothness,
                    panSpeed: oldSettings.viewer.scene.camera.controls.orbit.panSpeed,
                    zoomSpeed: oldSettings.viewer.scene.camera.controls.orbit.zoomSpeed,
                },
                enableCameraControls: oldSettings.viewer.scene.camera.enableCameraControls,
                position: {
                    x: oldSettings.viewer.scene.camera.cameraTypes.orthographic.default.position.x,
                    y: oldSettings.viewer.scene.camera.cameraTypes.orthographic.default.position.y,
                    z: oldSettings.viewer.scene.camera.cameraTypes.orthographic.default.position.z,
                },
                revertAtMouseUp: oldSettings.viewer.scene.camera.revertAtMouseUp,
                revertAtMouseUpDuration: oldSettings.viewer.scene.camera.revertAtMouseUpDuration,
                target: {
                    x: oldSettings.viewer.scene.camera.cameraTypes.orthographic.default.target.x,
                    y: oldSettings.viewer.scene.camera.cameraTypes.orthographic.default.target.y,
                    z: oldSettings.viewer.scene.camera.cameraTypes.orthographic.default.target.z,
                },
                zoomExtentsFactor: oldSettings.viewer.scene.camera.zoomExtentsFactor,
            }
        };
    }
    settings.environment.map = oldSettings.viewer.scene.material.environmentMap;
    settings.environment.mapAsBackground = oldSettings.viewer.scene.material.environmentMapAsBackground;
    settings.environment.mapResolution = oldSettings.viewer.scene.material.environmentMapResolution;
    oldSettings.viewer.scene.lights;
    settings.light.lightSceneId = oldSettings.viewer.scene.lights.lightScene;
    if (oldSettings.viewer.scene.lights.lightScenes) {
        for (let id in oldSettings.viewer.scene.lights.lightScenes) {
            const oldLs = oldSettings.viewer.scene.lights.lightScenes[id];
            const lights = {};
            for (let lightId in oldLs.lights) {
                const l = oldSettings.viewer.scene.lights.lightScenes[id].lights[lightId];
                switch (l.type) {
                    case 'ambient':
                        lights[lightId] = {
                            name: l.name,
                            type: l.type,
                            properties: {
                                color: l.properties.color,
                                intensity: l.properties.intensity
                            }
                        };
                        break;
                    case 'directional':
                        lights[lightId] = {
                            name: l.name,
                            type: l.type,
                            properties: {
                                direction: { x: l.properties.direction.x, y: l.properties.direction.y, z: l.properties.direction.z },
                                color: l.properties.color,
                                intensity: l.properties.intensity,
                                castShadow: l.properties.castShadow,
                                shadowMapResolution: l.properties.shadowMapResolution,
                                shadowMapBias: l.properties.shadowMapBias,
                            }
                        };
                        break;
                    case 'hemisphere':
                        lights[lightId] = {
                            name: l.name,
                            type: l.type,
                            properties: {
                                skyColor: l.properties.skyColor,
                                intensity: l.properties.intensity,
                                groundColor: l.properties.groundColor,
                            }
                        };
                        break;
                    case 'point':
                        lights[lightId] = {
                            name: l.name,
                            type: l.type,
                            properties: {
                                color: l.properties.color,
                                intensity: l.properties.intensity,
                                position: { x: l.properties.position.x, y: l.properties.position.y, z: l.properties.position.z },
                                distance: l.properties.distance,
                                decay: l.properties.decay,
                            }
                        };
                        break;
                    case 'spot':
                        lights[lightId] = {
                            name: l.name,
                            type: l.type,
                            properties: {
                                color: l.properties.color,
                                intensity: l.properties.intensity,
                                position: { x: l.properties.position.x, y: l.properties.position.y, z: l.properties.position.z },
                                target: { x: l.properties.target.x, y: l.properties.target.y, z: l.properties.target.z },
                                distance: l.properties.distance,
                                decay: l.properties.decay,
                                angle: l.properties.angle,
                                penumbra: l.properties.penumbra,
                            }
                        };
                        break;
                }
                if (l.order)
                    lights[lightId].order = l.order;
            }
            settings.light.lightScenes[id] = {
                name: oldLs.name,
                lights
            };
        }
    }
    settings.rendering.ambientOcclusion = oldSettings.viewer.scene.render.ambientOcclusion;
    if (oldSettings.viewer.scene.render.beautyRenderBlendingDuration !== undefined)
        settings.rendering.beautyRenderBlendingDuration = oldSettings.viewer.scene.render.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = oldSettings.viewer.scene.render.beautyRenderDelay;
    settings.environment.clearAlpha = oldSettings.viewer.scene.render.clearAlpha;
    settings.environment.clearColor = oldSettings.viewer.scene.render.clearColor;
    settings.general.pointSize = oldSettings.viewer.scene.render.pointSize;
    settings.rendering.shadows = oldSettings.viewer.scene.render.shadows;
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    if (newSettings.camera.cameras[newSettings.camera.cameraId]) {
        const camera = newSettings.camera.cameras[newSettings.camera.cameraId];
        switch (camera.type) {
            case 'top':
                settings.viewer.scene.camera.cameraTypes.active = 1;
                break;
            case 'bottom':
                settings.viewer.scene.camera.cameraTypes.active = 2;
                break;
            case 'right':
                settings.viewer.scene.camera.cameraTypes.active = 3;
                break;
            case 'left':
                settings.viewer.scene.camera.cameraTypes.active = 4;
                break;
            case 'back':
                settings.viewer.scene.camera.cameraTypes.active = 5;
                break;
            case 'front':
                settings.viewer.scene.camera.cameraTypes.active = 6;
                break;
            default:
                settings.viewer.scene.camera.cameraTypes.active = 0;
        }
        settings.viewer.scene.camera.autoAdjust = camera.autoAdjust;
        settings.viewer.scene.camera.cameraMovementDuration = camera.cameraMovementDuration;
        settings.viewer.scene.camera.enableCameraControls = camera.enableCameraControls;
        settings.viewer.scene.camera.revertAtMouseUp = camera.revertAtMouseUp;
        settings.viewer.scene.camera.revertAtMouseUpDuration = camera.revertAtMouseUpDuration;
        settings.viewer.scene.camera.zoomExtentsFactor = camera.zoomExtentsFactor;
        if (camera.type === 'perspective') {
            const pc = camera;
            settings.viewer.scene.camera.cameraTypes.perspective.default.position = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
            settings.viewer.scene.camera.cameraTypes.perspective.default.target = { x: camera.target.x, y: camera.target.y, z: camera.target.z };
            settings.viewer.scene.camera.cameraTypes.perspective.fov = pc.fov;
            settings.viewer.scene.camera.controls.orbit = {
                autoRotationSpeed: pc.controls.autoRotationSpeed,
                damping: pc.controls.damping,
                enableAutoRotation: pc.controls.enableAutoRotation,
                enableKeyPan: pc.controls.enableKeyPan,
                enablePan: pc.controls.enablePan,
                enableRotation: pc.controls.enableRotation,
                enableZoom: pc.controls.enableZoom,
                input: {
                    keys: {
                        up: pc.controls.input.keys.up,
                        down: pc.controls.input.keys.down,
                        left: pc.controls.input.keys.left,
                        right: pc.controls.input.keys.right
                    },
                    mouse: {
                        rotate: pc.controls.input.mouse.rotate,
                        zoom: pc.controls.input.mouse.zoom,
                        pan: pc.controls.input.mouse.pan
                    },
                    touch: {
                        rotate: pc.controls.input.touch.rotate,
                        zoom: pc.controls.input.touch.zoom,
                        pan: pc.controls.input.touch.pan
                    },
                },
                keyPanSpeed: pc.controls.keyPanSpeed,
                movementSmoothness: pc.controls.movementSmoothness,
                restrictions: {
                    position: {
                        cube: {
                            min: { x: pc.controls.restrictions.position.cube.min.x, y: pc.controls.restrictions.position.cube.min.y, z: pc.controls.restrictions.position.cube.min.z },
                            max: { x: pc.controls.restrictions.position.cube.max.x, y: pc.controls.restrictions.position.cube.max.y, z: pc.controls.restrictions.position.cube.max.z }
                        },
                        sphere: {
                            center: { x: pc.controls.restrictions.position.sphere.center.x, y: pc.controls.restrictions.position.sphere.center.y, z: pc.controls.restrictions.position.sphere.center.z },
                            radius: pc.controls.restrictions.position.sphere.radius
                        },
                    },
                    target: {
                        cube: {
                            min: { x: pc.controls.restrictions.target.cube.min.x, y: pc.controls.restrictions.target.cube.min.y, z: pc.controls.restrictions.target.cube.min.z },
                            max: { x: pc.controls.restrictions.target.cube.max.x, y: pc.controls.restrictions.target.cube.max.y, z: pc.controls.restrictions.target.cube.max.z }
                        },
                        sphere: {
                            center: { x: pc.controls.restrictions.target.sphere.center.x, y: pc.controls.restrictions.target.sphere.center.y, z: pc.controls.restrictions.target.sphere.center.z },
                            radius: pc.controls.restrictions.target.sphere.radius
                        },
                    },
                    rotation: { minPolarAngle: pc.controls.restrictions.rotation.minPolarAngle, maxPolarAngle: pc.controls.restrictions.rotation.maxPolarAngle, minAzimuthAngle: pc.controls.restrictions.rotation.minAzimuthAngle, maxAzimuthAngle: pc.controls.restrictions.rotation.maxAzimuthAngle },
                    zoom: { minDistance: pc.controls.restrictions.zoom.minDistance, maxDistance: pc.controls.restrictions.zoom.maxDistance },
                },
                rotationSpeed: pc.controls.rotationSpeed,
                panSpeed: pc.controls.panSpeed,
                zoomSpeed: pc.controls.zoomSpeed,
            };
        }
        else {
            const oc = camera;
            settings.viewer.scene.camera.cameraTypes.orthographic.default.position = { x: camera.position.x, y: camera.position.y, z: camera.position.z };
            settings.viewer.scene.camera.cameraTypes.orthographic.default.target = { x: camera.target.x, y: camera.target.y, z: camera.target.z };
            settings.viewer.scene.camera.controls.orthographic = {
                damping: oc.controls.damping,
                enableKeyPan: oc.controls.enableKeyPan,
                enablePan: oc.controls.enablePan,
                enableZoom: oc.controls.enableZoom,
                input: {
                    keys: {
                        up: oc.controls.input.keys.up,
                        down: oc.controls.input.keys.down,
                        left: oc.controls.input.keys.left,
                        right: oc.controls.input.keys.right
                    },
                    mouse: {
                        rotate: oc.controls.input.mouse.rotate,
                        zoom: oc.controls.input.mouse.zoom,
                        pan: oc.controls.input.mouse.pan
                    },
                    touch: {
                        rotate: oc.controls.input.touch.rotate,
                        zoom: oc.controls.input.touch.zoom,
                        pan: oc.controls.input.touch.pan
                    },
                },
                keyPanSpeed: oc.controls.keyPanSpeed,
                movementSmoothness: oc.controls.movementSmoothness,
                panSpeed: oc.controls.panSpeed,
                zoomSpeed: oc.controls.zoomSpeed,
            };
        }
    }
    settings.viewer.scene.render.clearAlpha = newSettings.environment.clearAlpha;
    settings.viewer.scene.render.clearColor = newSettings.environment.clearColor;
    settings.viewer.scene.material.environmentMap = newSettings.environment.map;
    settings.viewer.scene.material.environmentMapAsBackground = newSettings.environment.mapAsBackground;
    settings.viewer.scene.material.environmentMapResolution = newSettings.environment.mapResolution;
    settings.viewer.scene.gridVisibility = newSettings.environmentGeometry.gridVisibility;
    settings.viewer.scene.groundPlaneVisibility = newSettings.environmentGeometry.groundPlaneVisibility;
    settings.viewer.blurSceneWhenBusy = newSettings.general.blurWhenBusy;
    settings.viewer.commitParameters = newSettings.general.commitParameters;
    settings.viewer.commitSettings = newSettings.general.commitSettings;
    settings.viewer.scene.render.pointSize = newSettings.general.pointSize;
    settings.viewer.showMessages = newSettings.general.showMessages;
    settings.viewer.scene.lights.lightScene = newSettings.light.lightSceneId || 'default';
    for (let lightSceneId in newSettings.light.lightScenes) {
        const ls = newSettings.light.lightScenes[lightSceneId];
        const lights = {};
        for (let lightId in ls.lights) {
            const l = ls.lights[lightId];
            switch (l.type) {
                case 'ambient':
                    lights[lightId] = {
                        id: lightId,
                        name: l.name,
                        type: l.type,
                        order: l.order,
                        properties: {
                            color: l.properties.color,
                            intensity: l.properties.intensity
                        }
                    };
                    break;
                case 'directional':
                    lights[lightId] = {
                        id: lightId,
                        name: l.name,
                        type: l.type,
                        order: l.order,
                        properties: {
                            direction: { x: l.properties.direction.x, y: l.properties.direction.y, z: l.properties.direction.z },
                            color: l.properties.color,
                            intensity: l.properties.intensity,
                            castShadow: l.properties.castShadow,
                            shadowMapResolution: l.properties.shadowMapResolution,
                            shadowMapBias: l.properties.shadowMapBias,
                        }
                    };
                    break;
                case 'hemisphere':
                    lights[lightId] = {
                        id: lightId,
                        name: l.name,
                        type: l.type,
                        order: l.order,
                        properties: {
                            skyColor: l.properties.skyColor,
                            intensity: l.properties.intensity,
                            groundColor: l.properties.groundColor,
                        }
                    };
                    break;
                case 'point':
                    lights[lightId] = {
                        id: lightId,
                        name: l.name,
                        type: l.type,
                        order: l.order,
                        properties: {
                            color: l.properties.color,
                            intensity: l.properties.intensity,
                            position: { x: l.properties.position.x, y: l.properties.position.y, z: l.properties.position.z },
                            distance: l.properties.distance,
                            decay: l.properties.decay,
                        }
                    };
                    break;
                case 'spot':
                    lights[lightId] = {
                        id: lightId,
                        name: l.name,
                        type: l.type,
                        order: l.order,
                        properties: {
                            color: l.properties.color,
                            intensity: l.properties.intensity,
                            position: { x: l.properties.position.x, y: l.properties.position.y, z: l.properties.position.z },
                            target: { x: l.properties.target.x, y: l.properties.target.y, z: l.properties.target.z },
                            distance: l.properties.distance,
                            decay: l.properties.decay,
                            angle: l.properties.angle,
                            penumbra: l.properties.penumbra,
                        }
                    };
                    break;
            }
        }
        settings.viewer.scene.lights.lightScenes[lightSceneId] = {
            id: lightSceneId,
            name: ls.name,
            lights
        };
    }
    settings.viewer.scene.render.ambientOcclusion = newSettings.rendering.ambientOcclusion;
    settings.viewer.scene.render.beautyRenderBlendingDuration = newSettings.rendering.beautyRenderBlendingDuration;
    settings.viewer.scene.render.beautyRenderDelay = newSettings.rendering.beautyRenderDelay;
    settings.viewer.scene.render.shadows = newSettings.rendering.shadows;
    let ordered = [];
    for (let id in newSettings.session) {
        if (newSettings.session[id].displayname)
            settings.parameters.controlNames[id] = newSettings.session[id].displayname;
        if (newSettings.session[id].hidden)
            settings.parameters.parametersHidden.push(id);
        ordered.push({
            id,
            order: newSettings.session[id].order || 0
        });
    }
    ordered.sort((a, b) => ((a.order || Infinity) - (b.order || Infinity)));
    let zeros = ordered.filter(x => x.order === 0);
    ordered = ordered.filter((el) => { return !zeros.includes(el); });
    ordered = zeros.concat(ordered);
    settings.parameters.controlOrder = ordered.map((value) => { return value.id; });
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 19399:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '3.0',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'none',
            mapAsBackground: false,
            mapResolution: '1024'
        },
        environmentGeometry: {
            gridVisibility: true,
            groundPlaneVisibility: true,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        rendering: {
            ambientOcclusion: true,
            ambientOcclusionIntensity: 0.1,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            shadows: true,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 2067:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const orbitControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicControlsSchema = zod_1.z.object({
    damping: zod_1.z.number(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orthographicControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const perspectiveCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orbitControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    fov: zod_1.z.number().positive(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, orthographicCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string()
    }),
    environmentGeometry: zod_1.z.object({
        gridVisibility: zod_1.z.boolean(),
        groundPlaneVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    rendering: zod_1.z.object({
        ambientOcclusion: zod_1.z.boolean(),
        ambientOcclusionIntensity: zod_1.z.number().min(0),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        shadows: zod_1.z.boolean(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 31577:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(19399);
const Defaults_2 = __webpack_require__(99943);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.camera = oldSettings.camera;
    settings.environment = oldSettings.environment;
    settings.general = oldSettings.general;
    settings.light = oldSettings.light;
    settings.environmentGeometry.gridVisibility = oldSettings.environmentGeometry.gridVisibility;
    settings.environmentGeometry.groundPlaneVisibility = oldSettings.environmentGeometry.groundPlaneVisibility;
    settings.rendering.ambientOcclusion = oldSettings.rendering.ambientOcclusion;
    settings.rendering.ambientOcclusionIntensity = oldSettings.rendering.ambientOcclusionIntensity;
    settings.rendering.beautyRenderBlendingDuration = oldSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = oldSettings.rendering.beautyRenderDelay;
    settings.rendering.shadows = oldSettings.rendering.shadows;
    settings.session = oldSettings.session;
    if (v === '3.0') {
        settings.environmentGeometry.gridColor = '#ffffff';
        settings.environmentGeometry.groundPlaneColor = '#d3d3d3';
        settings.rendering.outputEncoding = 'linear';
        settings.rendering.physicallyCorrectLights = false;
        settings.rendering.textureEncoding = 'linear';
        settings.rendering.toneMapping = 'none';
        settings.rendering.toneMappingExposure = 1;
    }
    else {
        settings.environmentGeometry.gridColor = '#ffffff';
        settings.environmentGeometry.groundPlaneColor = '#d3d3d3';
        settings.rendering.outputEncoding = 'srgb';
        settings.rendering.physicallyCorrectLights = false;
        settings.rendering.textureEncoding = 'srgb';
        settings.rendering.toneMapping = 'none';
        settings.rendering.toneMappingExposure = 1;
    }
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.camera = newSettings.camera;
    settings.environment = newSettings.environment;
    settings.environmentGeometry.gridVisibility = newSettings.environmentGeometry.gridVisibility;
    settings.environmentGeometry.groundPlaneVisibility = newSettings.environmentGeometry.groundPlaneVisibility;
    settings.general = newSettings.general;
    settings.light = newSettings.light;
    settings.rendering.ambientOcclusion = newSettings.rendering.ambientOcclusion;
    settings.rendering.ambientOcclusionIntensity = newSettings.rendering.ambientOcclusionIntensity;
    settings.rendering.beautyRenderBlendingDuration = newSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = newSettings.rendering.beautyRenderDelay;
    settings.rendering.shadows = newSettings.rendering.shadows;
    settings.session = newSettings.session;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 99943:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '3.1',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024'
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: true,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        rendering: {
            ambientOcclusion: false,
            ambientOcclusionIntensity: 0.1,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 81331:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const orbitControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicControlsSchema = zod_1.z.object({
    damping: zod_1.z.number(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orthographicControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const perspectiveCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orbitControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    fov: zod_1.z.number().positive(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, orthographicCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string()
    }),
    environmentGeometry: zod_1.z.object({
        gridColor: zod_1.z.string(),
        gridVisibility: zod_1.z.boolean(),
        groundPlaneColor: zod_1.z.string(),
        groundPlaneVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    rendering: zod_1.z.object({
        ambientOcclusion: zod_1.z.boolean(),
        ambientOcclusionIntensity: zod_1.z.number().min(0),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        outputEncoding: zod_1.z.string(),
        physicallyCorrectLights: zod_1.z.boolean(),
        shadows: zod_1.z.boolean(),
        textureEncoding: zod_1.z.string(),
        toneMapping: zod_1.z.string(),
        toneMappingExposure: zod_1.z.number(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 65952:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(99943);
const Defaults_2 = __webpack_require__(80104);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.camera = oldSettings.camera;
    settings.general = oldSettings.general;
    settings.light = oldSettings.light;
    settings.session = oldSettings.session;
    settings.environment.clearAlpha = oldSettings.environment.clearAlpha;
    settings.environment.clearColor = oldSettings.environment.clearColor;
    settings.environment.map = oldSettings.environment.map;
    settings.environment.mapAsBackground = oldSettings.environment.mapAsBackground;
    settings.environment.mapResolution = oldSettings.environment.mapResolution;
    settings.environmentGeometry.gridColor = oldSettings.environmentGeometry.gridColor;
    settings.environmentGeometry.gridVisibility = oldSettings.environmentGeometry.gridVisibility;
    settings.environmentGeometry.groundPlaneColor = oldSettings.environmentGeometry.groundPlaneColor;
    settings.environmentGeometry.groundPlaneVisibility = oldSettings.environmentGeometry.groundPlaneVisibility;
    settings.rendering.ambientOcclusion = oldSettings.rendering.ambientOcclusion;
    settings.rendering.ambientOcclusionIntensity = oldSettings.rendering.ambientOcclusionIntensity;
    settings.rendering.beautyRenderBlendingDuration = oldSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = oldSettings.rendering.beautyRenderDelay;
    settings.rendering.outputEncoding = oldSettings.rendering.outputEncoding;
    settings.rendering.physicallyCorrectLights = oldSettings.rendering.physicallyCorrectLights;
    settings.rendering.shadows = oldSettings.rendering.shadows;
    settings.rendering.textureEncoding = oldSettings.rendering.textureEncoding;
    settings.rendering.toneMapping = oldSettings.rendering.toneMapping;
    settings.rendering.toneMappingExposure = oldSettings.rendering.toneMappingExposure;
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.camera = newSettings.camera;
    settings.general = newSettings.general;
    settings.light = newSettings.light;
    settings.session = newSettings.session;
    settings.environment.clearAlpha = newSettings.environment.clearAlpha;
    settings.environment.clearColor = newSettings.environment.clearColor;
    settings.environment.map = newSettings.environment.map;
    settings.environment.mapAsBackground = newSettings.environment.mapAsBackground;
    settings.environment.mapResolution = newSettings.environment.mapResolution;
    settings.environmentGeometry.gridColor = newSettings.environmentGeometry.gridColor;
    settings.environmentGeometry.gridVisibility = newSettings.environmentGeometry.gridVisibility;
    settings.environmentGeometry.groundPlaneColor = newSettings.environmentGeometry.groundPlaneColor;
    settings.environmentGeometry.groundPlaneVisibility = newSettings.environmentGeometry.groundPlaneVisibility;
    settings.rendering.ambientOcclusion = newSettings.rendering.ambientOcclusion;
    settings.rendering.ambientOcclusionIntensity = newSettings.rendering.ambientOcclusionIntensity;
    settings.rendering.beautyRenderBlendingDuration = newSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = newSettings.rendering.beautyRenderDelay;
    settings.rendering.outputEncoding = newSettings.rendering.outputEncoding;
    settings.rendering.physicallyCorrectLights = newSettings.rendering.physicallyCorrectLights;
    settings.rendering.shadows = newSettings.rendering.shadows;
    settings.rendering.textureEncoding = newSettings.rendering.textureEncoding;
    settings.rendering.toneMapping = newSettings.rendering.toneMapping;
    settings.rendering.toneMappingExposure = newSettings.rendering.toneMappingExposure;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 80104:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '3.2',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024'
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: true,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
            groundPlaneShadowColor: '#d3d3d3ff',
            groundPlaneShadowVisibility: false,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        rendering: {
            ambientOcclusion: false,
            ambientOcclusionIntensity: 0.1,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            lights: true,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 16814:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const orbitControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicControlsSchema = zod_1.z.object({
    damping: zod_1.z.number(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orthographicControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const perspectiveCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orbitControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    fov: zod_1.z.number().positive(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, orthographicCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string()
    }),
    environmentGeometry: zod_1.z.object({
        gridColor: zod_1.z.string(),
        gridVisibility: zod_1.z.boolean(),
        groundPlaneColor: zod_1.z.string(),
        groundPlaneVisibility: zod_1.z.boolean(),
        groundPlaneShadowColor: zod_1.z.string(),
        groundPlaneShadowVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    rendering: zod_1.z.object({
        ambientOcclusion: zod_1.z.boolean(),
        ambientOcclusionIntensity: zod_1.z.number().min(0),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        lights: zod_1.z.boolean(),
        outputEncoding: zod_1.z.string(),
        physicallyCorrectLights: zod_1.z.boolean(),
        shadows: zod_1.z.boolean(),
        textureEncoding: zod_1.z.string(),
        toneMapping: zod_1.z.string(),
        toneMappingExposure: zod_1.z.number(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 34219:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(80104);
const Defaults_2 = __webpack_require__(33989);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.camera = oldSettings.camera;
    settings.general = oldSettings.general;
    settings.light = oldSettings.light;
    settings.session = oldSettings.session;
    settings.environment = oldSettings.environment;
    settings.environmentGeometry = oldSettings.environmentGeometry;
    settings.rendering.ambientOcclusion = oldSettings.rendering.ambientOcclusion;
    settings.rendering.ambientOcclusionIntensity = oldSettings.rendering.ambientOcclusionIntensity;
    settings.rendering.automaticColorAdjustment = false;
    settings.rendering.beautyRenderBlendingDuration = oldSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = oldSettings.rendering.beautyRenderDelay;
    settings.rendering.outputEncoding = oldSettings.rendering.outputEncoding;
    settings.rendering.physicallyCorrectLights = oldSettings.rendering.physicallyCorrectLights;
    settings.rendering.shadows = oldSettings.rendering.shadows;
    settings.rendering.textureEncoding = oldSettings.rendering.textureEncoding;
    settings.rendering.toneMapping = oldSettings.rendering.toneMapping;
    settings.rendering.toneMappingExposure = oldSettings.rendering.toneMappingExposure;
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.camera = newSettings.camera;
    settings.general = newSettings.general;
    settings.light = newSettings.light;
    settings.session = newSettings.session;
    settings.environment = newSettings.environment;
    settings.environmentGeometry = newSettings.environmentGeometry;
    settings.rendering.ambientOcclusion = newSettings.rendering.ambientOcclusion;
    settings.rendering.ambientOcclusionIntensity = newSettings.rendering.ambientOcclusionIntensity;
    settings.rendering.beautyRenderBlendingDuration = newSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.beautyRenderDelay = newSettings.rendering.beautyRenderDelay;
    settings.rendering.outputEncoding = newSettings.rendering.outputEncoding;
    settings.rendering.physicallyCorrectLights = newSettings.rendering.physicallyCorrectLights;
    settings.rendering.shadows = newSettings.rendering.shadows;
    settings.rendering.textureEncoding = newSettings.rendering.textureEncoding;
    settings.rendering.toneMapping = newSettings.rendering.toneMapping;
    settings.rendering.toneMappingExposure = newSettings.rendering.toneMappingExposure;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 33989:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '3.3',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024'
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: true,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
            groundPlaneShadowColor: '#d3d3d3ff',
            groundPlaneShadowVisibility: false,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        rendering: {
            ambientOcclusion: false,
            ambientOcclusionIntensity: 0.1,
            automaticColorAdjustment: true,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            lights: true,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 55633:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const orbitControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicControlsSchema = zod_1.z.object({
    damping: zod_1.z.number(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orthographicControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const perspectiveCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orbitControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    fov: zod_1.z.number().positive(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, orthographicCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string()
    }),
    environmentGeometry: zod_1.z.object({
        gridColor: zod_1.z.string(),
        gridVisibility: zod_1.z.boolean(),
        groundPlaneColor: zod_1.z.string(),
        groundPlaneVisibility: zod_1.z.boolean(),
        groundPlaneShadowColor: zod_1.z.string(),
        groundPlaneShadowVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    rendering: zod_1.z.object({
        ambientOcclusion: zod_1.z.boolean(),
        ambientOcclusionIntensity: zod_1.z.number().min(0),
        automaticColorAdjustment: zod_1.z.boolean(),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        lights: zod_1.z.boolean(),
        outputEncoding: zod_1.z.string(),
        physicallyCorrectLights: zod_1.z.boolean(),
        shadows: zod_1.z.boolean(),
        textureEncoding: zod_1.z.string(),
        toneMapping: zod_1.z.string(),
        toneMappingExposure: zod_1.z.number(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 40370:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(33989);
const Defaults_2 = __webpack_require__(51486);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.camera = oldSettings.camera;
    settings.light = oldSettings.light;
    settings.session = oldSettings.session;
    settings.environmentGeometry = oldSettings.environmentGeometry;
    settings.rendering = oldSettings.rendering;
    settings.general.transformation = oldSettings.general.transformation;
    settings.general.blurWhenBusy = oldSettings.general.blurWhenBusy;
    settings.general.commitSettings = oldSettings.general.commitSettings;
    settings.general.commitParameters = oldSettings.general.commitParameters;
    settings.general.pointSize = oldSettings.general.pointSize;
    settings.general.showMessages = oldSettings.general.showMessages;
    settings.general.defaultMaterialColor = '#199b9bff';
    settings.environment.clearAlpha = oldSettings.environment.clearAlpha;
    settings.environment.clearColor = oldSettings.environment.clearColor;
    settings.environment.map = oldSettings.environment.map;
    settings.environment.mapAsBackground = oldSettings.environment.mapAsBackground;
    settings.environment.mapResolution = oldSettings.environment.mapResolution;
    settings.environment.rotation = { x: 0, y: 0, z: 0, w: 1 };
    settings.environment.blurriness = 0;
    settings.environment.intensity = 1;
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.camera = newSettings.camera;
    settings.light = newSettings.light;
    settings.session = newSettings.session;
    settings.environmentGeometry = newSettings.environmentGeometry;
    settings.rendering = newSettings.rendering;
    settings.general.transformation = newSettings.general.transformation;
    settings.general.blurWhenBusy = newSettings.general.blurWhenBusy;
    settings.general.commitSettings = newSettings.general.commitSettings;
    settings.general.commitParameters = newSettings.general.commitParameters;
    settings.general.pointSize = newSettings.general.pointSize;
    settings.general.showMessages = newSettings.general.showMessages;
    settings.environment.clearAlpha = newSettings.environment.clearAlpha;
    settings.environment.clearColor = newSettings.environment.clearColor;
    settings.environment.map = newSettings.environment.map;
    settings.environment.mapAsBackground = newSettings.environment.mapAsBackground;
    settings.environment.mapResolution = newSettings.environment.mapResolution;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 51486:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '3.4',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024',
            rotation: { x: 0, y: 0, z: 0, w: 1 },
            intensity: 1,
            blurriness: 0
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: true,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
            groundPlaneShadowColor: '#d3d3d3ff',
            groundPlaneShadowVisibility: false,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
            defaultMaterialColor: '#199b9bff'
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        rendering: {
            ambientOcclusion: false,
            ambientOcclusionIntensity: 0.1,
            automaticColorAdjustment: true,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            lights: true,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 71212:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const orbitControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicControlsSchema = zod_1.z.object({
    damping: zod_1.z.number(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orthographicControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const perspectiveCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orbitControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    fov: zod_1.z.number().positive(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, orthographicCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string(),
        rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number(), w: zod_1.z.number() }),
        blurriness: zod_1.z.number(),
        intensity: zod_1.z.number(),
    }),
    environmentGeometry: zod_1.z.object({
        gridColor: zod_1.z.string(),
        gridVisibility: zod_1.z.boolean(),
        groundPlaneColor: zod_1.z.string(),
        groundPlaneVisibility: zod_1.z.boolean(),
        groundPlaneShadowColor: zod_1.z.string(),
        groundPlaneShadowVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
        defaultMaterialColor: zod_1.z.string(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    rendering: zod_1.z.object({
        ambientOcclusion: zod_1.z.boolean(),
        ambientOcclusionIntensity: zod_1.z.number().min(0),
        automaticColorAdjustment: zod_1.z.boolean(),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        lights: zod_1.z.boolean(),
        outputEncoding: zod_1.z.string(),
        physicallyCorrectLights: zod_1.z.boolean(),
        shadows: zod_1.z.boolean(),
        textureEncoding: zod_1.z.string(),
        toneMapping: zod_1.z.string(),
        toneMappingExposure: zod_1.z.number(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 20739:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(51486);
const Defaults_2 = __webpack_require__(45725);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.camera = oldSettings.camera;
    settings.general = oldSettings.general;
    settings.light = oldSettings.light;
    settings.session = oldSettings.session;
    settings.environment = oldSettings.environment;
    settings.environmentGeometry = oldSettings.environmentGeometry;
    settings.rendering.automaticColorAdjustment = oldSettings.rendering.automaticColorAdjustment;
    settings.rendering.beautyRenderDelay = oldSettings.rendering.beautyRenderDelay;
    settings.rendering.beautyRenderBlendingDuration = oldSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.lights = oldSettings.rendering.lights;
    settings.rendering.outputEncoding = oldSettings.rendering.outputEncoding;
    settings.rendering.physicallyCorrectLights = oldSettings.rendering.physicallyCorrectLights;
    settings.rendering.shadows = oldSettings.rendering.shadows;
    settings.rendering.textureEncoding = oldSettings.rendering.textureEncoding;
    settings.rendering.toneMapping = oldSettings.rendering.toneMapping;
    settings.rendering.toneMappingExposure = oldSettings.rendering.toneMappingExposure;
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.camera = newSettings.camera;
    settings.general = newSettings.general;
    settings.light = newSettings.light;
    settings.session = newSettings.session;
    settings.environment = newSettings.environment;
    settings.environmentGeometry = newSettings.environmentGeometry;
    settings.rendering.ambientOcclusion = false;
    settings.rendering.ambientOcclusionIntensity = 0.1;
    settings.rendering.automaticColorAdjustment = newSettings.rendering.automaticColorAdjustment;
    settings.rendering.beautyRenderDelay = newSettings.rendering.beautyRenderDelay;
    settings.rendering.beautyRenderBlendingDuration = newSettings.rendering.beautyRenderBlendingDuration;
    settings.rendering.lights = newSettings.rendering.lights;
    settings.rendering.outputEncoding = newSettings.rendering.outputEncoding;
    settings.rendering.physicallyCorrectLights = newSettings.rendering.physicallyCorrectLights;
    settings.rendering.shadows = newSettings.rendering.shadows;
    settings.rendering.textureEncoding = newSettings.rendering.textureEncoding;
    settings.rendering.toneMapping = newSettings.rendering.toneMapping;
    settings.rendering.toneMappingExposure = newSettings.rendering.toneMappingExposure;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 45725:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '4.0',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024',
            rotation: { x: 0, y: 0, z: 0, w: 1 },
            intensity: 1,
            blurriness: 0
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: true,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
            groundPlaneShadowColor: '#d3d3d3ff',
            groundPlaneShadowVisibility: false,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
            defaultMaterialColor: '#199b9bff'
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        postprocessing: {
            antiAliasingTechnique: "smaa",
            antiAliasingTechniqueMobile: "fxaa",
            enablePostProcessingOnMobile: true,
            ssaaSampleLevel: 2,
            effects: []
        },
        rendering: {
            automaticColorAdjustment: true,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            lights: true,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            softShadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 80313:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const orbitControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicControlsSchema = zod_1.z.object({
    damping: zod_1.z.number(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
});
const orthographicCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orthographicControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const perspectiveCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: orbitControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    fov: zod_1.z.number().positive(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, orthographicCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const bloomEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        intensity: zod_1.z.number().optional(),
        kernelSize: zod_1.z.number().optional(),
        luminanceSmoothing: zod_1.z.number().optional(),
        luminanceThreshold: zod_1.z.number().optional(),
        mipmapBlur: zod_1.z.boolean(),
    }).optional(),
    type: zod_1.z.string()
});
const chromaticAberrationEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        modulationOffset: zod_1.z.number().optional(),
        offset: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number() }).optional(),
        radialModulation: zod_1.z.boolean().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const depthOfFieldEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        bokehScale: zod_1.z.number().optional(),
        focusDistance: zod_1.z.number().optional(),
        focusRange: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const dotScreenEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        angle: zod_1.z.number().optional(),
        blendFunction: zod_1.z.number().optional(),
        scale: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const gridEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        scale: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const hbaoEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        resolutionScale: zod_1.z.number().optional(),
        spp: zod_1.z.number().optional(),
        distance: zod_1.z.number().optional(),
        distanceIntensity: zod_1.z.number().optional(),
        intensity: zod_1.z.number().optional(),
        color: zod_1.z.string().optional(),
        bias: zod_1.z.number().optional(),
        thickness: zod_1.z.number().optional(),
        iterations: zod_1.z.number().optional(),
        radius: zod_1.z.number().optional(),
        rings: zod_1.z.number().optional(),
        lumaPhi: zod_1.z.number().optional(),
        depthPhi: zod_1.z.number().optional(),
        normalPhi: zod_1.z.number().optional(),
        samples: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const hueSaturationEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        hue: zod_1.z.number().optional(),
        saturation: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const noiseEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        premultiply: zod_1.z.boolean().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const pixelationEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        granularity: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const scanlineEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        density: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const ssaoEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        resolutionScale: zod_1.z.number().optional(),
        spp: zod_1.z.number().optional(),
        distance: zod_1.z.number().optional(),
        distanceIntensity: zod_1.z.number().optional(),
        intensity: zod_1.z.number().optional(),
        color: zod_1.z.string().optional(),
        iterations: zod_1.z.number().optional(),
        radius: zod_1.z.number().optional(),
        rings: zod_1.z.number().optional(),
        lumaPhi: zod_1.z.number().optional(),
        depthPhi: zod_1.z.number().optional(),
        normalPhi: zod_1.z.number().optional(),
        samples: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const tiltShiftEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        feather: zod_1.z.number().optional(),
        focusArea: zod_1.z.number().optional(),
        kernelSize: zod_1.z.number().optional(),
        offset: zod_1.z.number().optional(),
        rotation: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const vignetteEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        darkness: zod_1.z.number().optional(),
        offset: zod_1.z.number().optional(),
        technique: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const postProcessingSchema = zod_1.z.array(zod_1.z.union([bloomEffectSchema, chromaticAberrationEffectSchema, depthOfFieldEffectSchema, dotScreenEffectSchema, gridEffectSchema, hbaoEffectSchema, hueSaturationEffectSchema, noiseEffectSchema, pixelationEffectSchema, scanlineEffectSchema, ssaoEffectSchema, tiltShiftEffectSchema, vignetteEffectSchema]));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string(),
        rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number(), w: zod_1.z.number() }),
        blurriness: zod_1.z.number(),
        intensity: zod_1.z.number(),
    }),
    environmentGeometry: zod_1.z.object({
        gridColor: zod_1.z.string(),
        gridVisibility: zod_1.z.boolean(),
        groundPlaneColor: zod_1.z.string(),
        groundPlaneVisibility: zod_1.z.boolean(),
        groundPlaneShadowColor: zod_1.z.string(),
        groundPlaneShadowVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
        defaultMaterialColor: zod_1.z.string(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    postprocessing: zod_1.z.object({
        antiAliasingTechnique: zod_1.z.string(),
        antiAliasingTechniqueMobile: zod_1.z.string(),
        enablePostProcessingOnMobile: zod_1.z.boolean(),
        ssaaSampleLevel: zod_1.z.number(),
        effects: postProcessingSchema
    }),
    rendering: zod_1.z.object({
        automaticColorAdjustment: zod_1.z.boolean(),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        lights: zod_1.z.boolean(),
        outputEncoding: zod_1.z.string(),
        physicallyCorrectLights: zod_1.z.boolean(),
        shadows: zod_1.z.boolean(),
        softShadows: zod_1.z.boolean(),
        textureEncoding: zod_1.z.string(),
        toneMapping: zod_1.z.string(),
        toneMappingExposure: zod_1.z.number(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 59608:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(45725);
const Defaults_2 = __webpack_require__(35136);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.camera = oldSettings.camera;
    settings.general = oldSettings.general;
    settings.light = oldSettings.light;
    settings.session = oldSettings.session;
    settings.environment = oldSettings.environment;
    settings.environmentGeometry = oldSettings.environmentGeometry;
    settings.rendering = oldSettings.rendering;
    settings.postprocessing.antiAliasingTechnique = oldSettings.postprocessing.antiAliasingTechnique;
    settings.postprocessing.antiAliasingTechniqueMobile = oldSettings.postprocessing.antiAliasingTechniqueMobile;
    settings.postprocessing.enablePostProcessingOnMobile = oldSettings.postprocessing.enablePostProcessingOnMobile;
    settings.postprocessing.ssaaSampleLevel = oldSettings.postprocessing.ssaaSampleLevel;
    settings.postprocessing.effects = oldSettings.postprocessing.effects;
    const ssaoEffect = settings.postprocessing.effects.find(e => e.type === "ssao");
    if (!ssaoEffect)
        settings.postprocessing.effects.push(Defaults_2.Defaults().postprocessing.effects.find(e => e.type === "ssao"));
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.camera = newSettings.camera;
    settings.general = newSettings.general;
    settings.light = newSettings.light;
    settings.rendering = newSettings.rendering;
    settings.session = newSettings.session;
    settings.environment = newSettings.environment;
    settings.environmentGeometry = newSettings.environmentGeometry;
    settings.postprocessing = newSettings.postprocessing;
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 35136:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '4.1',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024',
            rotation: { x: 0, y: 0, z: 0, w: 1 },
            intensity: 1,
            blurriness: 0
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: false,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
            groundPlaneShadowColor: '#d3d3d3ff',
            groundPlaneShadowVisibility: false,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
            defaultMaterialColor: '#199b9bff'
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        postprocessing: {
            antiAliasingTechnique: "smaa",
            antiAliasingTechniqueMobile: "fxaa",
            enablePostProcessingOnMobile: true,
            ssaaSampleLevel: 2,
            effects: [
                {
                    properties: {
                        resolutionScale: 1,
                        spp: 8,
                        distance: 1,
                        distanceIntensity: 1,
                        intensity: 2.5,
                        color: '#000000',
                        iterations: 1,
                        radius: 15,
                        rings: 4,
                        lumaPhi: 10,
                        depthPhi: 2,
                        normalPhi: 3.25,
                        samples: 16,
                    },
                    type: "ssao"
                }
            ]
        },
        rendering: {
            automaticColorAdjustment: true,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            lights: true,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            softShadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 67446:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const Validator_1 = __webpack_require__(80313);
Object.defineProperty(exports, "validate", ({ enumerable: true, get: function () { return Validator_1.validate; } }));
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 72231:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.convertToPrevious = exports.convertFromPrevious = void 0;
const Defaults_1 = __webpack_require__(35136);
const Defaults_2 = __webpack_require__(92969);
const convertFromPrevious = (s, v) => {
    const settings = Defaults_2.Defaults();
    const oldSettings = s;
    settings.ar = oldSettings.ar;
    settings.build_date = oldSettings.build_date;
    settings.build_version = oldSettings.build_version;
    settings.general = oldSettings.general;
    settings.light = oldSettings.light;
    settings.session = oldSettings.session;
    settings.environment = oldSettings.environment;
    settings.environmentGeometry = oldSettings.environmentGeometry;
    settings.rendering = oldSettings.rendering;
    settings.postprocessing = oldSettings.postprocessing;
    settings.camera.cameraId = oldSettings.camera.cameraId;
    for (let key in oldSettings.camera.cameras) {
        if (oldSettings.camera.cameras[key].type === "perspective") {
            const perspectiveCamera = oldSettings.camera.cameras[key];
            settings.camera.cameras[key] = {
                autoAdjust: perspectiveCamera.autoAdjust,
                cameraMovementDuration: perspectiveCamera.cameraMovementDuration,
                controls: {
                    autoRotationSpeed: perspectiveCamera.controls.autoRotationSpeed,
                    damping: perspectiveCamera.controls.damping,
                    enableAutoRotation: perspectiveCamera.controls.enableAutoRotation,
                    enableKeyPan: perspectiveCamera.controls.enableKeyPan,
                    enablePan: perspectiveCamera.controls.enablePan,
                    enableRotation: perspectiveCamera.controls.enableRotation,
                    enableZoom: perspectiveCamera.controls.enableZoom,
                    input: perspectiveCamera.controls.input,
                    keyPanSpeed: perspectiveCamera.controls.keyPanSpeed,
                    movementSmoothness: perspectiveCamera.controls.movementSmoothness,
                    restrictions: perspectiveCamera.controls.restrictions,
                    rotationSpeed: perspectiveCamera.controls.rotationSpeed,
                    panSpeed: perspectiveCamera.controls.panSpeed,
                    zoomSpeed: perspectiveCamera.controls.zoomSpeed,
                    enableAzimuthRotation: true,
                    enableObjectControls: false,
                    enablePolarRotation: true,
                    enableTurntableControls: false,
                    objectControlsCenter: { x: 0, y: 0, z: 0 },
                    turntableCenter: { x: 0, y: 0, z: 0 },
                },
                enableCameraControls: perspectiveCamera.enableCameraControls,
                fov: perspectiveCamera.fov,
                name: perspectiveCamera.name,
                position: perspectiveCamera.position,
                revertAtMouseUp: perspectiveCamera.revertAtMouseUp,
                revertAtMouseUpDuration: perspectiveCamera.revertAtMouseUpDuration,
                sceneRotation: { x: 0, y: 0 },
                target: perspectiveCamera.target,
                type: perspectiveCamera.type,
                zoomExtentsFactor: perspectiveCamera.zoomExtentsFactor
            };
        }
        else {
            const orthographicCamera = oldSettings.camera.cameras[key];
            settings.camera.cameras[key] = {
                autoAdjust: orthographicCamera.autoAdjust,
                cameraMovementDuration: orthographicCamera.cameraMovementDuration,
                controls: {
                    damping: orthographicCamera.controls.damping,
                    enableKeyPan: orthographicCamera.controls.enableKeyPan,
                    enablePan: orthographicCamera.controls.enablePan,
                    enableZoom: orthographicCamera.controls.enableZoom,
                    input: orthographicCamera.controls.input,
                    keyPanSpeed: orthographicCamera.controls.keyPanSpeed,
                    movementSmoothness: orthographicCamera.controls.movementSmoothness,
                    panSpeed: orthographicCamera.controls.panSpeed,
                    zoomSpeed: orthographicCamera.controls.zoomSpeed,
                    autoRotationSpeed: 0,
                    enableAutoRotation: false,
                    enableAzimuthRotation: true,
                    enableObjectControls: false,
                    enablePolarRotation: true,
                    enableRotation: true,
                    enableTurntableControls: false,
                    objectControlsCenter: { x: 0, y: 0, z: 0 },
                    restrictions: {
                        position: {
                            cube: { min: { x: -Infinity, y: -Infinity, z: -Infinity }, max: { x: Infinity, y: Infinity, z: Infinity } },
                            sphere: { center: { x: 0, y: 0, z: 0 }, radius: Infinity },
                        },
                        rotation: { minPolarAngle: 0, maxPolarAngle: 180, minAzimuthAngle: -Infinity, maxAzimuthAngle: Infinity },
                        target: {
                            cube: { min: { x: -Infinity, y: -Infinity, z: -Infinity }, max: { x: Infinity, y: Infinity, z: Infinity } },
                            sphere: { center: { x: 0, y: 0, z: 0 }, radius: Infinity },
                        },
                        zoom: { minDistance: 0, maxDistance: Infinity },
                    },
                    rotationSpeed: 0,
                    turntableCenter: { x: 0, y: 0, z: 0 },
                },
                enableCameraControls: orthographicCamera.enableCameraControls,
                fov: orthographicCamera.fov,
                name: orthographicCamera.name,
                position: orthographicCamera.position,
                revertAtMouseUp: orthographicCamera.revertAtMouseUp,
                revertAtMouseUpDuration: orthographicCamera.revertAtMouseUpDuration,
                sceneRotation: { x: 0, y: 0 },
                target: orthographicCamera.target,
                type: orthographicCamera.type,
                zoomExtentsFactor: orthographicCamera.zoomExtentsFactor
            };
        }
    }
    return settings;
};
exports.convertFromPrevious = convertFromPrevious;
const convertToPrevious = (s, v) => {
    const settings = Defaults_1.Defaults();
    const newSettings = s;
    settings.ar = newSettings.ar;
    settings.build_date = newSettings.build_date;
    settings.build_version = newSettings.build_version;
    settings.general = newSettings.general;
    settings.light = newSettings.light;
    settings.rendering = newSettings.rendering;
    settings.session = newSettings.session;
    settings.environment = newSettings.environment;
    settings.environmentGeometry = newSettings.environmentGeometry;
    settings.postprocessing = newSettings.postprocessing;
    settings.camera.cameraId = newSettings.camera.cameraId;
    for (let key in newSettings.camera.cameras) {
        if (newSettings.camera.cameras[key].type === "perspective") {
            const perspectiveCamera = newSettings.camera.cameras[key];
            settings.camera.cameras[key] = {
                autoAdjust: perspectiveCamera.autoAdjust,
                cameraMovementDuration: perspectiveCamera.cameraMovementDuration,
                controls: {
                    autoRotationSpeed: perspectiveCamera.controls.autoRotationSpeed,
                    damping: perspectiveCamera.controls.damping,
                    enableAutoRotation: perspectiveCamera.controls.enableAutoRotation,
                    enableKeyPan: perspectiveCamera.controls.enableKeyPan,
                    enablePan: perspectiveCamera.controls.enablePan,
                    enableRotation: perspectiveCamera.controls.enableRotation,
                    enableZoom: perspectiveCamera.controls.enableZoom,
                    input: perspectiveCamera.controls.input,
                    keyPanSpeed: perspectiveCamera.controls.keyPanSpeed,
                    movementSmoothness: perspectiveCamera.controls.movementSmoothness,
                    restrictions: perspectiveCamera.controls.restrictions,
                    rotationSpeed: perspectiveCamera.controls.rotationSpeed,
                    panSpeed: perspectiveCamera.controls.panSpeed,
                    zoomSpeed: perspectiveCamera.controls.zoomSpeed,
                },
                enableCameraControls: perspectiveCamera.enableCameraControls,
                fov: perspectiveCamera.fov,
                name: perspectiveCamera.name,
                position: perspectiveCamera.position,
                revertAtMouseUp: perspectiveCamera.revertAtMouseUp,
                revertAtMouseUpDuration: perspectiveCamera.revertAtMouseUpDuration,
                target: perspectiveCamera.target,
                type: perspectiveCamera.type,
                zoomExtentsFactor: perspectiveCamera.zoomExtentsFactor
            };
        }
        else {
            const orthographicCamera = newSettings.camera.cameras[key];
            if (orthographicCamera.type === "custom")
                continue;
            settings.camera.cameras[key] = {
                autoAdjust: orthographicCamera.autoAdjust,
                cameraMovementDuration: orthographicCamera.cameraMovementDuration,
                controls: {
                    damping: orthographicCamera.controls.damping,
                    enableKeyPan: orthographicCamera.controls.enableKeyPan,
                    enablePan: orthographicCamera.controls.enablePan,
                    enableZoom: orthographicCamera.controls.enableZoom,
                    input: orthographicCamera.controls.input,
                    keyPanSpeed: orthographicCamera.controls.keyPanSpeed,
                    movementSmoothness: orthographicCamera.controls.movementSmoothness,
                    panSpeed: orthographicCamera.controls.panSpeed,
                    zoomSpeed: orthographicCamera.controls.zoomSpeed,
                },
                enableCameraControls: orthographicCamera.enableCameraControls,
                fov: orthographicCamera.fov,
                name: orthographicCamera.name,
                position: orthographicCamera.position,
                revertAtMouseUp: orthographicCamera.revertAtMouseUp,
                revertAtMouseUpDuration: orthographicCamera.revertAtMouseUpDuration,
                target: orthographicCamera.target,
                type: orthographicCamera.type,
                zoomExtentsFactor: orthographicCamera.zoomExtentsFactor
            };
        }
    }
    return settings;
};
exports.convertToPrevious = convertToPrevious;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 92969:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Defaults = void 0;
const Defaults = () => {
    return {
        build_date: '',
        build_version: '',
        settings_version: '4.1',
        ar: {
            enable: true,
            autoScaling: true
        },
        camera: {
            cameraId: '',
            cameras: {},
        },
        environment: {
            clearAlpha: 1.0,
            clearColor: '#ffffff',
            map: 'photo_studio',
            mapAsBackground: false,
            mapResolution: '1024',
            rotation: { x: 0, y: 0, z: 0, w: 1 },
            intensity: 1,
            blurriness: 0
        },
        environmentGeometry: {
            gridColor: '#44444426',
            gridVisibility: false,
            groundPlaneColor: '#636363ff',
            groundPlaneVisibility: true,
            groundPlaneShadowColor: '#d3d3d3ff',
            groundPlaneShadowVisibility: false,
        },
        general: {
            transformation: {
                scale: { x: 1, y: 1, z: 1 },
                translation: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            },
            blurWhenBusy: true,
            commitSettings: false,
            commitParameters: false,
            pointSize: 1.0,
            showMessages: true,
            defaultMaterialColor: '#199b9bff'
        },
        light: {
            lightSceneId: '',
            lightScenes: {},
        },
        postprocessing: {
            antiAliasingTechnique: "smaa",
            antiAliasingTechniqueMobile: "fxaa",
            enablePostProcessingOnMobile: true,
            ssaaSampleLevel: 2,
            effects: [
                {
                    properties: {
                        resolutionScale: 1,
                        spp: 8,
                        distance: 1,
                        distanceIntensity: 1,
                        intensity: 2.5,
                        color: '#000000',
                        iterations: 1,
                        radius: 15,
                        rings: 4,
                        lumaPhi: 10,
                        depthPhi: 2,
                        normalPhi: 3.25,
                        samples: 16,
                    },
                    type: "ssao"
                }
            ]
        },
        rendering: {
            automaticColorAdjustment: true,
            beautyRenderDelay: 50,
            beautyRenderBlendingDuration: 1500,
            lights: true,
            outputEncoding: 'srgb',
            physicallyCorrectLights: true,
            shadows: true,
            softShadows: true,
            textureEncoding: 'srgb',
            toneMapping: 'none',
            toneMappingExposure: 1,
        },
        session: {},
    };
};
exports.Defaults = Defaults;
//# sourceMappingURL=Defaults.js.map

/***/ }),

/***/ 31445:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validate = void 0;
const zod_1 = __webpack_require__(21614);
const cameraControlsSchema = zod_1.z.object({
    autoRotationSpeed: zod_1.z.number(),
    damping: zod_1.z.number(),
    enableAutoRotation: zod_1.z.boolean(),
    enableKeyPan: zod_1.z.boolean(),
    enablePan: zod_1.z.boolean(),
    enableRotation: zod_1.z.boolean(),
    enableZoom: zod_1.z.boolean(),
    input: zod_1.z.object({ keys: zod_1.z.object({ up: zod_1.z.number(), down: zod_1.z.number(), left: zod_1.z.number(), right: zod_1.z.number() }), mouse: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), touch: zod_1.z.object({ rotate: zod_1.z.number(), zoom: zod_1.z.number(), pan: zod_1.z.number() }), }),
    keyPanSpeed: zod_1.z.number(),
    movementSmoothness: zod_1.z.number(),
    restrictions: zod_1.z.object({
        position: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        target: zod_1.z.object({
            cube: zod_1.z.object({ min: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }), max: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }) }),
            sphere: zod_1.z.object({ center: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }), radius: zod_1.z.number().nullable() }),
        }),
        rotation: zod_1.z.object({ minPolarAngle: zod_1.z.number(), maxPolarAngle: zod_1.z.number(), minAzimuthAngle: zod_1.z.number().nullable(), maxAzimuthAngle: zod_1.z.number().nullable() }),
        zoom: zod_1.z.object({ minDistance: zod_1.z.number(), maxDistance: zod_1.z.number().nullable() }),
    }),
    rotationSpeed: zod_1.z.number(),
    panSpeed: zod_1.z.number(),
    zoomSpeed: zod_1.z.number(),
    enableAzimuthRotation: zod_1.z.boolean(),
    enableObjectControls: zod_1.z.boolean(),
    enablePolarRotation: zod_1.z.boolean(),
    enableTurntableControls: zod_1.z.boolean(),
    objectControlsCenter: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    turntableCenter: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
});
const generalCameraSchema = zod_1.z.object({
    name: zod_1.z.string().optional(),
    type: zod_1.z.string(),
    autoAdjust: zod_1.z.boolean(),
    cameraMovementDuration: zod_1.z.number(),
    controls: cameraControlsSchema,
    enableCameraControls: zod_1.z.boolean(),
    position: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    revertAtMouseUp: zod_1.z.boolean(),
    revertAtMouseUpDuration: zod_1.z.number(),
    target: zod_1.z.object({ x: zod_1.z.number().nullable(), y: zod_1.z.number().nullable(), z: zod_1.z.number().nullable() }),
    zoomExtentsFactor: zod_1.z.number().positive(),
    sceneRotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number() })
});
const perspectiveCameraSchema = generalCameraSchema.extend({
    fov: zod_1.z.number().positive()
});
const cameraSchema = zod_1.z.record(zod_1.z.union([perspectiveCameraSchema, generalCameraSchema]));
const ambientLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number()
});
const directionalLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    direction: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    castShadow: zod_1.z.boolean(),
    shadowMapResolution: zod_1.z.number().optional(),
    shadowMapBias: zod_1.z.number().optional()
});
const hemisphereLightSchema = zod_1.z.object({
    skyColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    groundColor: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
});
const pointLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
});
const spotLightSchema = zod_1.z.object({
    color: zod_1.z.union([zod_1.z.number(), zod_1.z.string()]),
    intensity: zod_1.z.number(),
    position: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    target: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
    distance: zod_1.z.number(),
    decay: zod_1.z.number(),
    angle: zod_1.z.number(),
    penumbra: zod_1.z.number(),
});
const lightSchema = zod_1.z.record(zod_1.z.object({
    name: zod_1.z.string().optional(),
    lights: zod_1.z.record(zod_1.z.object({
        name: zod_1.z.string().optional(),
        type: zod_1.z.string(),
        order: zod_1.z.number().optional(),
        properties: zod_1.z.union([ambientLightSchema, directionalLightSchema, hemisphereLightSchema, pointLightSchema, spotLightSchema])
    }))
}));
const bloomEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        intensity: zod_1.z.number().optional(),
        kernelSize: zod_1.z.number().optional(),
        luminanceSmoothing: zod_1.z.number().optional(),
        luminanceThreshold: zod_1.z.number().optional(),
        mipmapBlur: zod_1.z.boolean(),
    }).optional(),
    type: zod_1.z.string()
});
const chromaticAberrationEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        modulationOffset: zod_1.z.number().optional(),
        offset: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number() }).optional(),
        radialModulation: zod_1.z.boolean().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const depthOfFieldEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        bokehScale: zod_1.z.number().optional(),
        focusDistance: zod_1.z.number().optional(),
        focusRange: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const dotScreenEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        angle: zod_1.z.number().optional(),
        blendFunction: zod_1.z.number().optional(),
        scale: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const gridEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        scale: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const hbaoEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        resolutionScale: zod_1.z.number().optional(),
        spp: zod_1.z.number().optional(),
        distance: zod_1.z.number().optional(),
        distanceIntensity: zod_1.z.number().optional(),
        intensity: zod_1.z.number().optional(),
        color: zod_1.z.string().optional(),
        bias: zod_1.z.number().optional(),
        thickness: zod_1.z.number().optional(),
        iterations: zod_1.z.number().optional(),
        radius: zod_1.z.number().optional(),
        rings: zod_1.z.number().optional(),
        lumaPhi: zod_1.z.number().optional(),
        depthPhi: zod_1.z.number().optional(),
        normalPhi: zod_1.z.number().optional(),
        samples: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const hueSaturationEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        hue: zod_1.z.number().optional(),
        saturation: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const noiseEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        premultiply: zod_1.z.boolean().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const pixelationEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        granularity: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const scanlineEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        density: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const ssaoEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        resolutionScale: zod_1.z.number().optional(),
        spp: zod_1.z.number().optional(),
        distance: zod_1.z.number().optional(),
        distanceIntensity: zod_1.z.number().optional(),
        intensity: zod_1.z.number().optional(),
        color: zod_1.z.string().optional(),
        iterations: zod_1.z.number().optional(),
        radius: zod_1.z.number().optional(),
        rings: zod_1.z.number().optional(),
        lumaPhi: zod_1.z.number().optional(),
        depthPhi: zod_1.z.number().optional(),
        normalPhi: zod_1.z.number().optional(),
        samples: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const tiltShiftEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        feather: zod_1.z.number().optional(),
        focusArea: zod_1.z.number().optional(),
        kernelSize: zod_1.z.number().optional(),
        offset: zod_1.z.number().optional(),
        rotation: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const vignetteEffectSchema = zod_1.z.object({
    properties: zod_1.z.object({
        blendFunction: zod_1.z.number().optional(),
        darkness: zod_1.z.number().optional(),
        offset: zod_1.z.number().optional(),
        technique: zod_1.z.number().optional(),
    }).optional(),
    type: zod_1.z.string()
});
const postProcessingSchema = zod_1.z.array(zod_1.z.union([bloomEffectSchema, chromaticAberrationEffectSchema, depthOfFieldEffectSchema, dotScreenEffectSchema, gridEffectSchema, hbaoEffectSchema, hueSaturationEffectSchema, noiseEffectSchema, pixelationEffectSchema, scanlineEffectSchema, ssaoEffectSchema, tiltShiftEffectSchema, vignetteEffectSchema]));
const schema = zod_1.z.object({
    build_date: zod_1.z.string().optional(),
    build_version: zod_1.z.string().optional(),
    settings_version: zod_1.z.string(),
    ar: zod_1.z.object({
        enable: zod_1.z.boolean(),
        autoScaling: zod_1.z.boolean(),
    }).optional(),
    camera: zod_1.z.object({
        cameraId: zod_1.z.string(),
        cameras: cameraSchema
    }),
    environment: zod_1.z.object({
        clearAlpha: zod_1.z.number(),
        clearColor: zod_1.z.string(),
        map: zod_1.z.union([zod_1.z.string(), zod_1.z.string().array()]),
        mapAsBackground: zod_1.z.boolean(),
        mapResolution: zod_1.z.string(),
        rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number(), w: zod_1.z.number() }),
        blurriness: zod_1.z.number(),
        intensity: zod_1.z.number(),
    }),
    environmentGeometry: zod_1.z.object({
        gridColor: zod_1.z.string(),
        gridVisibility: zod_1.z.boolean(),
        groundPlaneColor: zod_1.z.string(),
        groundPlaneVisibility: zod_1.z.boolean(),
        groundPlaneShadowColor: zod_1.z.string(),
        groundPlaneShadowVisibility: zod_1.z.boolean(),
    }),
    general: zod_1.z.object({
        transformation: zod_1.z.object({
            scale: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            translation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() }),
            rotation: zod_1.z.object({ x: zod_1.z.number(), y: zod_1.z.number(), z: zod_1.z.number() })
        }),
        blurWhenBusy: zod_1.z.boolean(),
        commitSettings: zod_1.z.boolean(),
        commitParameters: zod_1.z.boolean(),
        pointSize: zod_1.z.number(),
        showMessages: zod_1.z.boolean(),
        defaultMaterialColor: zod_1.z.string(),
    }),
    light: zod_1.z.object({
        lightSceneId: zod_1.z.string().optional(),
        lightScenes: lightSchema,
    }),
    postprocessing: zod_1.z.object({
        antiAliasingTechnique: zod_1.z.string(),
        antiAliasingTechniqueMobile: zod_1.z.string(),
        enablePostProcessingOnMobile: zod_1.z.boolean(),
        ssaaSampleLevel: zod_1.z.number(),
        effects: postProcessingSchema
    }),
    rendering: zod_1.z.object({
        automaticColorAdjustment: zod_1.z.boolean(),
        beautyRenderDelay: zod_1.z.number(),
        beautyRenderBlendingDuration: zod_1.z.number(),
        lights: zod_1.z.boolean(),
        outputEncoding: zod_1.z.string(),
        physicallyCorrectLights: zod_1.z.boolean(),
        shadows: zod_1.z.boolean(),
        softShadows: zod_1.z.boolean(),
        textureEncoding: zod_1.z.string(),
        toneMapping: zod_1.z.string(),
        toneMappingExposure: zod_1.z.number(),
    }),
    session: zod_1.z.record(zod_1.z.object({
        order: zod_1.z.number().optional(),
        displayname: zod_1.z.string().optional(),
        hidden: zod_1.z.boolean().optional()
    })),
}).strict();
const validate = (s) => {
    const result = schema.parse(s);
    s = result;
};
exports.validate = validate;
//# sourceMappingURL=Validator.js.map

/***/ }),

/***/ 58615:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.build_data = void 0;
exports.build_data = { "build_version": "3.3.4.3", "build_date": "2024-10-23T10:48:57.774Z", "build_branch": "staging", "build_commit": "9d07fc9aca727fe80085df5f71c22d4ffde3257f" };
//# sourceMappingURL=build_data.js.map

/***/ }),

/***/ 93668:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.build_data = void 0;
const build_data_1 = __webpack_require__(58615);
Object.defineProperty(exports, "build_data", ({ enumerable: true, get: function () { return build_data_1.build_data; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 74825:
/***/ (function(__unused_webpack_module, exports) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _GlobalAccessObjects_combineTextures, _GlobalAccessObjects_loadContent, _GlobalAccessObjects_loadTag3D;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalAccessObjects = void 0;
class GlobalAccessObjects {
    constructor() {
        // #region Properties (4)
        _GlobalAccessObjects_combineTextures.set(this, void 0);
        _GlobalAccessObjects_loadContent.set(this, void 0);
        _GlobalAccessObjects_loadTag3D.set(this, void 0);
        // #endregion Public Getters And Setters (6)
    }
    // #endregion Properties (4)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Getters And Setters (6)
    get combineTextures() {
        return __classPrivateFieldGet(this, _GlobalAccessObjects_combineTextures, "f");
    }
    set combineTextures(value) {
        __classPrivateFieldSet(this, _GlobalAccessObjects_combineTextures, value, "f");
    }
    get loadContent() {
        return __classPrivateFieldGet(this, _GlobalAccessObjects_loadContent, "f");
    }
    set loadContent(value) {
        __classPrivateFieldSet(this, _GlobalAccessObjects_loadContent, value, "f");
    }
    get loadTag3D() {
        return __classPrivateFieldGet(this, _GlobalAccessObjects_loadTag3D, "f");
    }
    set loadTag3D(value) {
        __classPrivateFieldSet(this, _GlobalAccessObjects_loadTag3D, value, "f");
    }
}
exports.GlobalAccessObjects = GlobalAccessObjects;
_GlobalAccessObjects_combineTextures = new WeakMap(), _GlobalAccessObjects_loadContent = new WeakMap(), _GlobalAccessObjects_loadTag3D = new WeakMap();
//# sourceMappingURL=GlobalAccessObjects.js.map

/***/ }),

/***/ 50069:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GlobalAccessObjects = void 0;
const GlobalAccessObjects_1 = __webpack_require__(74825);
Object.defineProperty(exports, "GlobalAccessObjects", ({ enumerable: true, get: function () { return GlobalAccessObjects_1.GlobalAccessObjects; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 32271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Box = void 0;
const gl_matrix_1 = __webpack_require__(61961);
const __1 = __webpack_require__(67275);
class Box {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_min = gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity), _max = gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity)) {
        this._min = _min;
        this._max = _max;
        // #region Properties (2)
        this._boundingSphere = new __1.Sphere();
        this._boundingSphereState = {
            min: gl_matrix_1.vec3.create(), max: gl_matrix_1.vec3.create()
        };
    }
    // #endregion Constructors (1)
    // #region Public Accessors (5)
    intersect(origin, direction) {
        let tmin, tmax, txmin, txmax, tymin, tymax, tzmin, tzmax;
        const invdirx = 1 / direction[0], invdiry = 1 / direction[1], invdirz = 1 / direction[2];
        txmin = invdirx >= 0 ? (this.min[0] - origin[0]) * invdirx : (this.max[0] - origin[0]) * invdirx;
        txmax = invdirx >= 0 ? (this.max[0] - origin[0]) * invdirx : (this.min[0] - origin[0]) * invdirx;
        tmin = txmin;
        tmax = txmax;
        tymin = invdiry >= 0 ? (this.min[1] - origin[1]) * invdiry : (this.max[1] - origin[1]) * invdiry;
        tymax = invdiry >= 0 ? (this.max[1] - origin[1]) * invdiry : (this.min[1] - origin[1]) * invdiry;
        if ((tmin > tymax) || (tymin > tmax))
            return null;
        // These lines also handle the case where tmin or tmax is NaN
        // (result of 0 * Infinity). x !== x returns true if x is NaN
        if (tymin > tmin || tmin !== tmin)
            tmin = tymin;
        if (tymax < tmax || tmax !== tmax)
            tmax = tymax;
        tzmin = invdirz >= 0 ? (this.min[2] - origin[2]) * invdirz : (this.max[2] - origin[2]) * invdirz;
        tzmax = invdirz >= 0 ? (this.max[2] - origin[2]) * invdirz : (this.min[2] - origin[2]) * invdirz;
        if ((tmin > tzmax) || (tzmin > tmax))
            return null;
        if (tzmin > tmin || tmin !== tmin)
            tmin = tzmin;
        if (tzmax < tmax || tmax !== tmax)
            tmax = tzmax;
        //return point closest to the ray (positive side)
        if (tmax < 0)
            return null;
        return tmin >= 0 ? tmin : tmax;
    }
    ;
    intersects(origin, direction) {
        return this.intersect(origin, direction) === null ? false : true;
    }
    ;
    get boundingSphere() {
        if (!(this._boundingSphereState.min[0] === this.min[0] && this._boundingSphereState.min[1] === this.min[1] && this._boundingSphereState.min[2] === this.min[2] &&
            this._boundingSphereState.max[0] === this.max[0] && this._boundingSphereState.max[1] === this.max[1] && this._boundingSphereState.max[2] === this.max[2])) {
            this._boundingSphere.setFromBox(this);
            this._boundingSphereState = {
                min: gl_matrix_1.vec3.clone(this.min),
                max: gl_matrix_1.vec3.clone(this.max)
            };
        }
        return this._boundingSphere;
    }
    get max() {
        return this._max;
    }
    set max(value) {
        this._max = value;
    }
    get min() {
        return this._min;
    }
    set min(value) {
        this._min = value;
    }
    // #endregion Public Accessors (5)
    // #region Public Methods (5)
    applyMatrix(matrix) {
        const points = [];
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.min[0], this.min[1], this.min[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.min[0], this.min[1], this.max[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.min[0], this.max[1], this.min[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.min[0], this.max[1], this.max[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.max[0], this.min[1], this.min[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.max[0], this.min[1], this.max[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.max[0], this.max[1], this.min[2]), matrix));
        points.push(gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this.max[0], this.max[1], this.max[2]), matrix));
        this.min = gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity);
        this.max = gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity);
        for (let i = 0, il = points.length; i < il; i++) {
            this.min = gl_matrix_1.vec3.fromValues(Math.min(this.min[0], points[i][0]), Math.min(this.min[1], points[i][1]), Math.min(this.min[2], points[i][2]));
            this.max = gl_matrix_1.vec3.fromValues(Math.max(this.max[0], points[i][0]), Math.max(this.max[1], points[i][1]), Math.max(this.max[2], points[i][2]));
        }
        return this;
    }
    clone() {
        return new Box(gl_matrix_1.vec3.clone(this.min), gl_matrix_1.vec3.clone(this.max));
    }
    containsPoint(point) {
        return point[0] < this.min[0] || point[0] > this.max[0] ||
            point[1] < this.min[1] || point[1] > this.max[1] ||
            point[2] < this.min[2] || point[2] > this.max[2] ? false : true;
    }
    clampPoint(point) {
        point[0] = Math.max(this.min[0], Math.min(this.max[0], point[0]));
        point[1] = Math.max(this.min[1], Math.min(this.max[1], point[1]));
        point[2] = Math.max(this.min[2], Math.min(this.max[2], point[2]));
        return point;
    }
    setFromAttributeArray(array, stride, bytes, matrix) {
        const length = (Math.floor(array.length / 3) * 3);
        const byteStride = (stride && stride !== bytes) ? +stride : 3;
        const min = [Infinity, Infinity, Infinity];
        const max = [-Infinity, -Infinity, -Infinity];
        let x, y, z;
        const point = gl_matrix_1.vec4.create();
        for (let i = 0; i < length; i += byteStride) {
            if (matrix) {
                gl_matrix_1.vec4.transformMat4(point, [array[i], array[i + 1], array[i + 2], 1], matrix);
                x = point[0] / point[3];
                y = point[1] / point[3];
                z = point[2] / point[3];
            }
            else {
                x = array[i];
                y = array[i + 1];
                z = array[i + 2];
            }
            min[0] = Math.min(min[0], x);
            min[1] = Math.min(min[1], y);
            min[2] = Math.min(min[2], z);
            max[0] = Math.max(max[0], x);
            max[1] = Math.max(max[1], y);
            max[2] = Math.max(max[2], z);
        }
        this.min = gl_matrix_1.vec3.fromValues(min[0], min[1], min[2]);
        this.max = gl_matrix_1.vec3.fromValues(max[0], max[1], max[2]);
        return this;
    }
    union(box) {
        if (box.min[0] < this.min[0])
            this.min[0] = box.min[0];
        if (box.min[1] < this.min[1])
            this.min[1] = box.min[1];
        if (box.min[2] < this.min[2])
            this.min[2] = box.min[2];
        if (box.max[0] > this.max[0])
            this.max[0] = box.max[0];
        if (box.max[1] > this.max[1])
            this.max[1] = box.max[1];
        if (box.max[2] > this.max[2])
            this.max[2] = box.max[2];
        return this;
    }
    isEmpty() {
        return this.min[0] === Infinity && this.min[1] === Infinity && this.min[2] === Infinity &&
            this.max[0] === -Infinity && this.max[1] === -Infinity && this.max[2] === -Infinity;
    }
    reset() {
        gl_matrix_1.vec3.zero(this._boundingSphere.center);
        this._boundingSphere.radius = 0;
        gl_matrix_1.vec3.zero(this._boundingSphereState.min);
        gl_matrix_1.vec3.zero(this._boundingSphereState.max);
        gl_matrix_1.vec3.set(this._min, Infinity, Infinity, Infinity);
        gl_matrix_1.vec3.set(this._max, -Infinity, -Infinity, -Infinity);
    }
}
exports.Box = Box;
//# sourceMappingURL=Box.js.map

/***/ }),

/***/ 83188:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Plane = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class Plane {
    // #region Constructors (1)
    constructor(_normal = gl_matrix_1.vec3.fromValues(1, 0, 0), _constant = 0) {
        this._normal = _normal;
        this._constant = _constant;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (4)
    get constant() {
        return this._constant;
    }
    set constant(value) {
        this._constant = value;
    }
    get normal() {
        return this._normal;
    }
    set normal(value) {
        this._normal = value;
    }
    // #endregion Public Getters And Setters (4)
    // #region Public Methods (8)
    applyMatrix(matrix) {
        let inverse = gl_matrix_1.mat3.invert(gl_matrix_1.mat3.create(), gl_matrix_1.mat3.fromMat4(gl_matrix_1.mat3.create(), matrix));
        if (!inverse)
            inverse = gl_matrix_1.mat3.create();
        const normalMatrix = gl_matrix_1.mat3.transpose(gl_matrix_1.mat3.create(), inverse);
        const p = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.clone(this.normal), gl_matrix_1.vec3.fromValues(this._constant, this._constant, this._constant)), matrix);
        this._normal = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformMat3(gl_matrix_1.vec3.create(), this._normal, normalMatrix));
        this.constant = -gl_matrix_1.vec3.dot(p, this._normal);
        return this;
    }
    clampPoint(point) {
        const d = -this.distanceToPoint(point);
        return gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this.normal, gl_matrix_1.vec3.fromValues(d, d, d)), point);
    }
    clone() {
        return new Plane(this._normal, this._constant);
    }
    containsPoint(point) {
        return this.distanceToPoint(point) === 0;
    }
    distanceToPoint(point) {
        return gl_matrix_1.vec3.dot(this.normal, point) + this.constant;
    }
    intersect(origin, direction) {
        const denominator = gl_matrix_1.vec3.dot(this.normal, direction);
        if (denominator === 0) {
            // line is coplanar, return origin
            if (this.distanceToPoint(origin) === 0)
                return 0;
            // Null is preferable to undefined since undefined means.... it is undefined
            return null;
        }
        const t = -(gl_matrix_1.vec3.dot(origin, this.normal) + this.constant) / denominator;
        if (t < 0)
            return null;
        return t; //vec3.add(vec3.create(), vec3.multiply(vec3.create(), direction, vec3.fromValues(t,t,t)), origin);
    }
    reset() {
        this._normal = gl_matrix_1.vec3.fromValues(1, 0, 0);
        this._constant = 0;
    }
    setFromNormalAndCoplanarPoint(normal, point) {
        gl_matrix_1.vec3.copy(this.normal, normal);
        this.constant = -gl_matrix_1.vec3.dot(point, this.normal);
        return this;
    }
}
exports.Plane = Plane;
//# sourceMappingURL=Plane.js.map

/***/ }),

/***/ 25965:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Sphere = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class Sphere {
    // #region Constructors (1)
    constructor(_center = gl_matrix_1.vec3.create(), _radius = 0) {
        this._center = _center;
        this._radius = _radius;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (4)
    get center() {
        return this._center;
    }
    set center(value) {
        this._center = value;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    // #endregion Public Accessors (4)
    // #region Public Methods (4)
    applyMatrix(matrix) {
        this._center = gl_matrix_1.vec3.transformMat4(gl_matrix_1.vec3.create(), this._center, matrix);
        const scaleXSq = matrix[0] * matrix[0] + matrix[1] * matrix[1] + matrix[2] * matrix[2];
        const scaleYSq = matrix[4] * matrix[4] + matrix[5] * matrix[5] + matrix[6] * matrix[6];
        const scaleZSq = matrix[8] * matrix[8] + matrix[9] * matrix[9] + matrix[10] * matrix[10];
        const maxScaleOnAxis = Math.sqrt(Math.max(scaleXSq, scaleYSq, scaleZSq));
        this.radius = this.radius * maxScaleOnAxis;
        return this;
    }
    clone() {
        return new Sphere(gl_matrix_1.vec3.clone(this._center), this._radius);
    }
    containsPoint(point) {
        return (gl_matrix_1.vec3.squaredDistance(point, this.center) <= (this.radius * this.radius));
    }
    clampPoint(point) {
        return point;
    }
    intersect(origin, direction) {
        // vector from ray origin to sphere center
        const rayToSphere = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), this.center, origin);
        // project rayToSphere onto direction
        const projection = gl_matrix_1.vec3.dot(rayToSphere, direction);
        // distance from sphere center to projection
        const distanceToProjection = gl_matrix_1.vec3.squaredDistance(rayToSphere, gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), direction, gl_matrix_1.vec3.fromValues(projection, projection, projection)));
        // check if the distance to projection is less than the radius
        if (distanceToProjection <= this.radius * this.radius) {
            // calculate the distance from the origin to the intersection point
            const distanceToIntersection = Math.sqrt(this.radius * this.radius - distanceToProjection);
            return projection - distanceToIntersection;
        }
        // if there is no intersection, return null
        return null;
    }
    intersects(origin, direction) {
        // vector from ray origin to sphere center
        const rayToSphere = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), this.center, origin);
        // project rayToSphere onto direction
        const projection = gl_matrix_1.vec3.dot(rayToSphere, direction);
        // distance from sphere center to projection
        const distanceToProjection = gl_matrix_1.vec3.squaredDistance(rayToSphere, gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), direction, gl_matrix_1.vec3.fromValues(projection, projection, projection)));
        return distanceToProjection <= this.radius * this.radius;
    }
    setFromBox(box) {
        gl_matrix_1.vec3.add(this.center, box.min, box.max);
        gl_matrix_1.vec3.scale(this.center, this.center, 0.5);
        this.radius = gl_matrix_1.vec3.dist(box.min, box.max) * 0.5;
        return this;
    }
    reset() {
        this._center = gl_matrix_1.vec3.create();
        this._radius = 0;
    }
}
exports.Sphere = Sphere;
//# sourceMappingURL=Sphere.js.map

/***/ }),

/***/ 64253:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Spherical = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class Spherical {
    constructor(_radius = 1, _phi = 0, _theta = 0) {
        this._radius = _radius;
        this._phi = _phi;
        this._theta = _theta;
    }
    get radius() {
        return this._radius;
    }
    set radius(value) {
        this._radius = value;
    }
    get phi() {
        return this._phi;
    }
    set phi(value) {
        this._phi = value;
    }
    get theta() {
        return this._theta;
    }
    set theta(value) {
        this._theta = value;
    }
    makeSafe() {
        const EPS = 0.000001;
        this.phi = Math.max(EPS, Math.min(Math.PI - EPS, this.phi));
        return this;
    }
    fromVec3(p) {
        this.radius = Math.sqrt(p[0] * p[0] + p[1] * p[1] + p[2] * p[2]);
        if (this.radius === 0) {
            this.theta = 0;
            this.phi = 0;
        }
        else {
            this.theta = Math.atan2(p[0], p[2]);
            this.phi = Math.acos(Math.max(-1, Math.min(1, p[1] / this.radius)));
        }
        return this;
    }
    toVec3() {
        const sinPhiRadius = Math.sin(this.phi) * this.radius;
        return gl_matrix_1.vec3.fromValues(sinPhiRadius * Math.sin(this.theta), Math.cos(this.phi) * this.radius, sinPhiRadius * Math.cos(this.theta));
    }
}
exports.Spherical = Spherical;
//# sourceMappingURL=Spherical.js.map

/***/ }),

/***/ 22784:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Triangle = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class Triangle {
    constructor(_v0 = gl_matrix_1.vec3.create(), _v1 = gl_matrix_1.vec3.create(), _v2 = gl_matrix_1.vec3.create()) {
        this._v0 = _v0;
        this._v1 = _v1;
        this._v2 = _v2;
    }
    applyMatrix(matrix) {
        gl_matrix_1.vec3.transformMat4(this._v0, this._v0, matrix);
        gl_matrix_1.vec3.transformMat4(this._v1, this._v1, matrix);
        gl_matrix_1.vec3.transformMat4(this._v2, this._v2, matrix);
        return this;
    }
    clone() {
        return new Triangle(gl_matrix_1.vec3.clone(this._v0), gl_matrix_1.vec3.clone(this._v1), gl_matrix_1.vec3.clone(this._v2));
    }
    // Möller–Trumbore intersection algorithm
    intersect(origin, direction) {
        const EPSILON = 0.0000001;
        const edge1 = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), this._v1, this._v0);
        const edge2 = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), this._v2, this._v0);
        const h = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), direction, edge2);
        const a = gl_matrix_1.vec3.dot(edge1, h);
        if (a > -EPSILON && a < EPSILON)
            return null; // This ray is parallel to this triangle.
        const f = 1.0 / a;
        const s = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), origin, this._v0);
        const u = f * gl_matrix_1.vec3.dot(s, h);
        if (u < 0.0 || u > 1.0)
            return null;
        const q = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), s, edge1);
        const v = f * gl_matrix_1.vec3.dot(direction, q);
        if (v < 0.0 || u + v > 1.0)
            return null;
        // At this stage we can compute t to find out where the intersection point is on the line.
        const t = f * gl_matrix_1.vec3.dot(edge2, q);
        return t > EPSILON ? gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), direction, gl_matrix_1.vec3.fromValues(t, t, t)), origin) : null;
    }
    reset() {
        this._v0 = gl_matrix_1.vec3.create();
        this._v1 = gl_matrix_1.vec3.create();
        this._v2 = gl_matrix_1.vec3.create();
    }
}
exports.Triangle = Triangle;
//# sourceMappingURL=Triangle.js.map

/***/ }),

/***/ 67275:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Triangle = exports.Plane = exports.Spherical = exports.Sphere = exports.Box = void 0;
const Box_1 = __webpack_require__(32271);
Object.defineProperty(exports, "Box", ({ enumerable: true, get: function () { return Box_1.Box; } }));
const Plane_1 = __webpack_require__(83188);
Object.defineProperty(exports, "Plane", ({ enumerable: true, get: function () { return Plane_1.Plane; } }));
const Sphere_1 = __webpack_require__(25965);
Object.defineProperty(exports, "Sphere", ({ enumerable: true, get: function () { return Sphere_1.Sphere; } }));
const Spherical_1 = __webpack_require__(64253);
Object.defineProperty(exports, "Spherical", ({ enumerable: true, get: function () { return Spherical_1.Spherical; } }));
const Triangle_1 = __webpack_require__(22784);
Object.defineProperty(exports, "Triangle", ({ enumerable: true, get: function () { return Triangle_1.Triangle; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 43501:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _AbstractTreeNodeData_id, _AbstractTreeNodeData_uuidGenerator, _AbstractTreeNodeData_convertedObject, _AbstractTreeNodeData_updateCallbackConvertedObject, _AbstractTreeNodeData_version;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractTreeNodeData = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class AbstractTreeNodeData {
    // #endregion Properties (5)
    // #region Constructors (1)
    /**
     * Creates a tree node data object.
     *
     * @param id Id of this data object
     */
    constructor(id, version) {
        // #region Properties (5)
        _AbstractTreeNodeData_id.set(this, void 0);
        _AbstractTreeNodeData_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        _AbstractTreeNodeData_convertedObject.set(this, {});
        _AbstractTreeNodeData_updateCallbackConvertedObject.set(this, null);
        _AbstractTreeNodeData_version.set(this, void 0);
        __classPrivateFieldSet(this, _AbstractTreeNodeData_id, id || __classPrivateFieldGet(this, _AbstractTreeNodeData_uuidGenerator, "f").create(), "f");
        __classPrivateFieldSet(this, _AbstractTreeNodeData_version, version || __classPrivateFieldGet(this, _AbstractTreeNodeData_uuidGenerator, "f").create(), "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (6)
    get convertedObject() {
        return __classPrivateFieldGet(this, _AbstractTreeNodeData_convertedObject, "f");
    }
    set convertedObject(value) {
        __classPrivateFieldSet(this, _AbstractTreeNodeData_convertedObject, value, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _AbstractTreeNodeData_id, "f");
    }
    get updateCallbackConvertedObject() {
        return __classPrivateFieldGet(this, _AbstractTreeNodeData_updateCallbackConvertedObject, "f");
    }
    set updateCallbackConvertedObject(value) {
        __classPrivateFieldSet(this, _AbstractTreeNodeData_updateCallbackConvertedObject, value, "f");
    }
    get version() {
        return __classPrivateFieldGet(this, _AbstractTreeNodeData_version, "f");
    }
    // #endregion Public Getters And Setters (6)
    // #region Public Methods (2)
    /**
     * Clones the tree node data.
     */
    clone() {
        const clone = new this.constructor();
        return clone;
    }
    /**
     * Update the version
     */
    updateVersion() {
        __classPrivateFieldSet(this, _AbstractTreeNodeData_version, __classPrivateFieldGet(this, _AbstractTreeNodeData_uuidGenerator, "f").create(), "f");
    }
}
exports.AbstractTreeNodeData = AbstractTreeNodeData;
_AbstractTreeNodeData_id = new WeakMap(), _AbstractTreeNodeData_uuidGenerator = new WeakMap(), _AbstractTreeNodeData_convertedObject = new WeakMap(), _AbstractTreeNodeData_updateCallbackConvertedObject = new WeakMap(), _AbstractTreeNodeData_version = new WeakMap();
//# sourceMappingURL=AbstractTreeNodeData.js.map

/***/ }),

/***/ 22115:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _Tree_root;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tree = void 0;
const TreeNode_1 = __webpack_require__(18439);
class Tree {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor() {
        // #region Properties (2)
        _Tree_root.set(this, void 0);
        __classPrivateFieldSet(this, _Tree_root, new TreeNode_1.TreeNode('root'), "f");
    }
    // #endregion Constructors (1)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Getters And Setters (1)
    get root() {
        return __classPrivateFieldGet(this, _Tree_root, "f");
    }
    // #endregion Public Getters And Setters (1)
    // #region Public Methods (5)
    addNode(node, parent = __classPrivateFieldGet(this, _Tree_root, "f"), root = __classPrivateFieldGet(this, _Tree_root, "f")) {
        if (root === parent) {
            root.addChild(node);
            return true;
        }
        for (let i = 0; i < root.children.length; i++) {
            const child = root.children[i];
            if (child && this.addNode(node, parent, child)) {
                return true;
            }
        }
        return false;
    }
    addNodeAtPath(node, path = this.root.getPath(), root = __classPrivateFieldGet(this, _Tree_root, "f")) {
        if (root.name === path) {
            root.addChild(node);
            return true;
        }
        const pathStart = path.substr(0, path.indexOf('.'));
        if (root.name === pathStart) {
            const shortenedPath = path.substr(pathStart.length + 1, path.length);
            for (let i = 0; i < root.children.length; i++) {
                const child = root.children[i];
                if (child && this.addNodeAtPath(node, shortenedPath, child)) {
                    return true;
                }
            }
        }
        return false;
    }
    getNodeAtPath(path = this.root.getPath(), root = __classPrivateFieldGet(this, _Tree_root, "f")) {
        if (root.name === path)
            return root;
        const pathStart = path.substr(0, path.indexOf('.'));
        if (root.name === pathStart) {
            const shortenedPath = path.substr(pathStart.length + 1, path.length);
            for (let i = 0; i < root.children.length; i++) {
                const child = root.children[i];
                const res = this.getNodeAtPath(shortenedPath, child);
                if (res)
                    return res;
            }
        }
        return null;
    }
    removeNode(node, root = __classPrivateFieldGet(this, _Tree_root, "f")) {
        if (root.hasChild(node)) {
            root.removeChild(node);
            return true;
        }
        for (let i = 0; i < root.children.length; i++) {
            const child = root.children[i];
            if (child && this.removeNode(node, child)) {
                return true;
            }
        }
        return false;
    }
    removeNodeAtPath(path, root = __classPrivateFieldGet(this, _Tree_root, "f")) {
        var _a;
        if (root.name === path) {
            (_a = root.parent) === null || _a === void 0 ? void 0 : _a.removeChild(root);
            return true;
        }
        const pathStart = path.substr(0, path.indexOf('.'));
        if (root.name === pathStart) {
            const shortenedPath = path.substr(pathStart.length + 1, path.length);
            for (let i = 0; i < root.children.length; i++) {
                const child = root.children[i];
                if (child && this.removeNodeAtPath(shortenedPath, child)) {
                    return true;
                }
            }
        }
        return false;
    }
}
exports.Tree = Tree;
_Tree_root = new WeakMap();
//# sourceMappingURL=Tree.js.map

/***/ }),

/***/ 18439:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _TreeNode_boundingBox, _TreeNode_boundingBoxViewport, _TreeNode_children, _TreeNode_data, _TreeNode_id, _TreeNode_uuidGenerator, _TreeNode_boneInverses, _TreeNode_bones, _TreeNode_convertedObject, _TreeNode_excludeViewports, _TreeNode_name, _TreeNode_originalId, _TreeNode_originalName, _TreeNode_parent, _TreeNode_restrictViewports, _TreeNode_skinNode, _TreeNode_transformations, _TreeNode_updateCallbackConvertedObject, _TreeNode_version, _TreeNode_visible;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TreeNode = void 0;
const viewer_shared_math_1 = __webpack_require__(67275);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_services_1 = __webpack_require__(8389);
class TreeNode {
    // #endregion Properties (19)
    // #region Constructors (1)
    /**
     * Creation of a node that can be used in the node tree.
     *
     * @param name the name of the node
     * @param parent the parent of this node
     * @param data the array of data
     * @param transformations the array of transformations
     */
    constructor(name = 'node', parent, data = [], transformations = []) {
        var _a;
        // #region Properties (19)
        _TreeNode_boundingBox.set(this, new viewer_shared_math_1.Box());
        _TreeNode_boundingBoxViewport.set(this, {});
        _TreeNode_children.set(this, []);
        _TreeNode_data.set(this, []);
        _TreeNode_id.set(this, void 0);
        _TreeNode_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        _TreeNode_boneInverses.set(this, []);
        _TreeNode_bones.set(this, []);
        _TreeNode_convertedObject.set(this, {});
        _TreeNode_excludeViewports.set(this, []);
        _TreeNode_name.set(this, '');
        _TreeNode_originalId.set(this, void 0);
        _TreeNode_originalName.set(this, void 0);
        _TreeNode_parent.set(this, void 0);
        _TreeNode_restrictViewports.set(this, []);
        _TreeNode_skinNode.set(this, false);
        _TreeNode_transformations.set(this, []);
        _TreeNode_updateCallbackConvertedObject.set(this, null);
        _TreeNode_version.set(this, void 0);
        _TreeNode_visible.set(this, true);
        __classPrivateFieldSet(this, _TreeNode_name, name.replace(/\./g, '_'), "f");
        __classPrivateFieldSet(this, _TreeNode_parent, parent, "f");
        __classPrivateFieldSet(this, _TreeNode_data, data, "f");
        __classPrivateFieldSet(this, _TreeNode_transformations, transformations, "f");
        __classPrivateFieldSet(this, _TreeNode_id, __classPrivateFieldGet(this, _TreeNode_uuidGenerator, "f").create(), "f");
        __classPrivateFieldSet(this, _TreeNode_originalId, __classPrivateFieldGet(this, _TreeNode_id, "f"), "f");
        __classPrivateFieldSet(this, _TreeNode_version, __classPrivateFieldGet(this, _TreeNode_uuidGenerator, "f").create(), "f");
        (_a = __classPrivateFieldGet(this, _TreeNode_parent, "f")) === null || _a === void 0 ? void 0 : _a.addChild(this);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (33)
    get boneInverses() {
        return __classPrivateFieldGet(this, _TreeNode_boneInverses, "f");
    }
    set boneInverses(value) {
        __classPrivateFieldSet(this, _TreeNode_boneInverses, value, "f");
    }
    get bones() {
        return __classPrivateFieldGet(this, _TreeNode_bones, "f");
    }
    set bones(value) {
        __classPrivateFieldSet(this, _TreeNode_bones, value, "f");
    }
    get boundingBox() {
        return __classPrivateFieldGet(this, _TreeNode_boundingBox, "f");
    }
    get boundingBoxViewport() {
        return __classPrivateFieldGet(this, _TreeNode_boundingBoxViewport, "f");
    }
    get children() {
        return __classPrivateFieldGet(this, _TreeNode_children, "f");
    }
    get convertedObject() {
        return __classPrivateFieldGet(this, _TreeNode_convertedObject, "f");
    }
    set convertedObject(value) {
        __classPrivateFieldSet(this, _TreeNode_convertedObject, value, "f");
    }
    get data() {
        return __classPrivateFieldGet(this, _TreeNode_data, "f");
    }
    get excludeViewports() {
        return __classPrivateFieldGet(this, _TreeNode_excludeViewports, "f");
    }
    set excludeViewports(value) {
        __classPrivateFieldSet(this, _TreeNode_excludeViewports, value, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _TreeNode_id, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _TreeNode_name, "f");
    }
    set name(value) {
        __classPrivateFieldSet(this, _TreeNode_name, value, "f");
    }
    get nodeMatrix() {
        const matrix = gl_matrix_1.mat4.create();
        for (const transform of __classPrivateFieldGet(this, _TreeNode_transformations, "f"))
            if (transform.id !== 'sdtf')
                gl_matrix_1.mat4.multiply(matrix, matrix, transform.matrix);
        return matrix;
    }
    get originalId() {
        return __classPrivateFieldGet(this, _TreeNode_originalId, "f");
    }
    set originalId(value) {
        __classPrivateFieldSet(this, _TreeNode_originalId, value, "f");
    }
    get originalName() {
        return __classPrivateFieldGet(this, _TreeNode_originalName, "f");
    }
    set originalName(value) {
        __classPrivateFieldSet(this, _TreeNode_originalName, value, "f");
    }
    get parent() {
        return __classPrivateFieldGet(this, _TreeNode_parent, "f");
    }
    set parent(value) {
        // check if it was removed from previous parent
        if (__classPrivateFieldGet(this, _TreeNode_parent, "f"))
            __classPrivateFieldGet(this, _TreeNode_parent, "f").removeChild(this);
        // check if it is in children of new parent
        if (value)
            value.addChild(this);
        __classPrivateFieldSet(this, _TreeNode_parent, value, "f");
    }
    get restrictViewports() {
        return __classPrivateFieldGet(this, _TreeNode_restrictViewports, "f");
    }
    set restrictViewports(value) {
        __classPrivateFieldSet(this, _TreeNode_restrictViewports, value, "f");
    }
    get skinNode() {
        return __classPrivateFieldGet(this, _TreeNode_skinNode, "f");
    }
    set skinNode(value) {
        __classPrivateFieldSet(this, _TreeNode_skinNode, value, "f");
    }
    get transformations() {
        return __classPrivateFieldGet(this, _TreeNode_transformations, "f");
    }
    set transformations(value) {
        __classPrivateFieldSet(this, _TreeNode_transformations, value, "f");
    }
    get updateCallbackConvertedObject() {
        return __classPrivateFieldGet(this, _TreeNode_updateCallbackConvertedObject, "f");
    }
    set updateCallbackConvertedObject(value) {
        __classPrivateFieldSet(this, _TreeNode_updateCallbackConvertedObject, value, "f");
    }
    get version() {
        return __classPrivateFieldGet(this, _TreeNode_version, "f");
    }
    set version(value) {
        __classPrivateFieldSet(this, _TreeNode_version, value, "f");
    }
    get visible() {
        return __classPrivateFieldGet(this, _TreeNode_visible, "f");
    }
    set visible(value) {
        __classPrivateFieldSet(this, _TreeNode_visible, value, "f");
    }
    get worldMatrix() {
        const matrix = gl_matrix_1.mat4.create();
        for (const transform of __classPrivateFieldGet(this, _TreeNode_transformations, "f"))
            gl_matrix_1.mat4.multiply(matrix, matrix, transform.matrix);
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        let node = this;
        while (node.parent) {
            gl_matrix_1.mat4.multiply(matrix, node.parent.nodeMatrix, matrix);
            node = node.parent;
        }
        return matrix;
    }
    // #endregion Public Getters And Setters (33)
    // #region Public Methods (20)
    addChild(child) {
        if (this.hasChild(child))
            return false;
        __classPrivateFieldGet(this, _TreeNode_children, "f").push(child);
        if (child.parent)
            child.parent.removeChild(child);
        child.parent = this;
        return true;
    }
    addData(data) {
        __classPrivateFieldGet(this, _TreeNode_data, "f").push(data);
        return true;
    }
    addTransformation(transformation) {
        __classPrivateFieldGet(this, _TreeNode_transformations, "f").push(transformation);
        return true;
    }
    clone() {
        const clone = new this.constructor();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        clone.name = this.name;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        clone.originalId = this.originalId;
        clone.visible = this.visible;
        for (const child of __classPrivateFieldGet(this, _TreeNode_children, "f"))
            clone.addChild(child.clone());
        for (const data of __classPrivateFieldGet(this, _TreeNode_data, "f"))
            clone.data.push(data.clone());
        for (const transform of __classPrivateFieldGet(this, _TreeNode_transformations, "f"))
            clone.addTransformation({
                id: transform.id,
                matrix: gl_matrix_1.mat4.clone(transform.matrix)
            });
        return clone;
    }
    cloneInstance() {
        const clone = new this.constructor();
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        clone.name = this.name;
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        clone.originalId = this.originalId;
        clone.visible = this.visible;
        for (const child of __classPrivateFieldGet(this, _TreeNode_children, "f"))
            clone.addChild(child.cloneInstance());
        for (const data of __classPrivateFieldGet(this, _TreeNode_data, "f"))
            clone.data.push(data);
        for (const transform of __classPrivateFieldGet(this, _TreeNode_transformations, "f"))
            clone.addTransformation({
                id: transform.id,
                matrix: gl_matrix_1.mat4.clone(transform.matrix)
            });
        return clone;
    }
    getChild(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _TreeNode_children, "f").length; i++)
            if (__classPrivateFieldGet(this, _TreeNode_children, "f")[i].id === id)
                return __classPrivateFieldGet(this, _TreeNode_children, "f")[i];
        return;
    }
    getData(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _TreeNode_data, "f").length; i++)
            if (__classPrivateFieldGet(this, _TreeNode_data, "f")[i].id === id)
                return __classPrivateFieldGet(this, _TreeNode_data, "f")[i];
        return;
    }
    getNodesByName(name) {
        const nodes = [];
        if (name === this.name)
            nodes.push(this);
        this.traverse((n) => {
            if (name === n.name)
                nodes.push(n);
        });
        return nodes;
    }
    getNodesByNameWithRegex(regex) {
        const nodes = [];
        if (regex.test(this.name))
            nodes.push(this);
        this.traverse((n) => {
            if (regex.test(n.name))
                nodes.push(n);
        });
        return nodes;
    }
    getPath() {
        let path = this.name;
        let node = this.parent;
        while (node) {
            path = node.name + '.' + path;
            node = node.parent;
        }
        return path;
    }
    getTransformation(id) {
        for (let i = 0; i < __classPrivateFieldGet(this, _TreeNode_transformations, "f").length; i++)
            if (__classPrivateFieldGet(this, _TreeNode_transformations, "f")[i].id === id)
                return __classPrivateFieldGet(this, _TreeNode_transformations, "f")[i];
        return;
    }
    hasChild(child) {
        return __classPrivateFieldGet(this, _TreeNode_children, "f").includes(child);
    }
    hasData(data) {
        return __classPrivateFieldGet(this, _TreeNode_data, "f").includes(data);
    }
    hasTransformation(transformation) {
        return __classPrivateFieldGet(this, _TreeNode_transformations, "f").includes(transformation);
    }
    removeChild(child) {
        const index = __classPrivateFieldGet(this, _TreeNode_children, "f").indexOf(child);
        if (index === -1)
            return false;
        __classPrivateFieldGet(this, _TreeNode_children, "f").splice(index, 1);
        child.parent = undefined;
        return true;
    }
    removeData(data) {
        const index = __classPrivateFieldGet(this, _TreeNode_data, "f").indexOf(data);
        if (index === -1)
            return false;
        __classPrivateFieldGet(this, _TreeNode_data, "f").splice(index, 1);
        return true;
    }
    removeTransformation(transformation) {
        const index = __classPrivateFieldGet(this, _TreeNode_transformations, "f").indexOf(transformation);
        if (index === -1)
            return false;
        __classPrivateFieldGet(this, _TreeNode_transformations, "f").splice(index, 1);
        return true;
    }
    traverse(callback) {
        callback(this);
        for (let i = 0; i < this.children.length; i++)
            this.children[i].traverse(callback);
    }
    traverseData(callback) {
        for (let j = 0; j < this.data.length; j++)
            callback(this.data[j]);
        for (let i = 0; i < this.children.length; i++)
            this.children[i].traverseData(callback);
    }
    updateVersion(parents = true, children = true) {
        if (parents === true) {
            let node = this;
            while (node.parent) {
                node = node.parent;
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                node.version = __classPrivateFieldGet(this, _TreeNode_uuidGenerator, "f").create();
            }
        }
        if (children === true) {
            for (let i = 0; i < __classPrivateFieldGet(this, _TreeNode_children, "f").length; i++)
                __classPrivateFieldGet(this, _TreeNode_children, "f")[i].updateVersion(parents, children);
        }
        __classPrivateFieldSet(this, _TreeNode_version, __classPrivateFieldGet(this, _TreeNode_uuidGenerator, "f").create(), "f");
    }
}
exports.TreeNode = TreeNode;
_TreeNode_boundingBox = new WeakMap(), _TreeNode_boundingBoxViewport = new WeakMap(), _TreeNode_children = new WeakMap(), _TreeNode_data = new WeakMap(), _TreeNode_id = new WeakMap(), _TreeNode_uuidGenerator = new WeakMap(), _TreeNode_boneInverses = new WeakMap(), _TreeNode_bones = new WeakMap(), _TreeNode_convertedObject = new WeakMap(), _TreeNode_excludeViewports = new WeakMap(), _TreeNode_name = new WeakMap(), _TreeNode_originalId = new WeakMap(), _TreeNode_originalName = new WeakMap(), _TreeNode_parent = new WeakMap(), _TreeNode_restrictViewports = new WeakMap(), _TreeNode_skinNode = new WeakMap(), _TreeNode_transformations = new WeakMap(), _TreeNode_updateCallbackConvertedObject = new WeakMap(), _TreeNode_version = new WeakMap(), _TreeNode_visible = new WeakMap();
//# sourceMappingURL=TreeNode.js.map

/***/ }),

/***/ 41652:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractTreeNodeData = exports.TreeNode = exports.Tree = void 0;
const AbstractTreeNodeData_1 = __webpack_require__(43501);
Object.defineProperty(exports, "AbstractTreeNodeData", ({ enumerable: true, get: function () { return AbstractTreeNodeData_1.AbstractTreeNodeData; } }));
const Tree_1 = __webpack_require__(22115);
Object.defineProperty(exports, "Tree", ({ enumerable: true, get: function () { return Tree_1.Tree; } }));
const TreeNode_1 = __webpack_require__(18439);
Object.defineProperty(exports, "TreeNode", ({ enumerable: true, get: function () { return TreeNode_1.TreeNode; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 44626:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
exports.Converter = void 0;
const tinycolor_1 = __webpack_require__(7125);
const HttpClient_1 = __webpack_require__(41263);
const gl_matrix_1 = __webpack_require__(61961);
const base64_1 = __webpack_require__(96847);
class Converter {
    constructor() {
        // #region Properties (2)
        this._httpClient = HttpClient_1.HttpClient.instance;
        // #endregion Private Methods (1)
    }
    // #endregion Properties (2)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    /**
     * Converts a data URL to a Blob object.
     *
     * @param dataURL
     * @returns
     */
    dataURLtoBlob(dataURL) {
        // Split the data URL to get the base64 data
        const arr = dataURL.split(",");
        const mime = arr[0].match(/:(.*?);/)[1];
        const bstr = window.atob(arr[1]);
        let n = bstr.length;
        const u8arr = new Uint8Array(n);
        // Convert the binary string to a Uint8Array
        while (n--)
            u8arr[n] = bstr.charCodeAt(n);
        // Create a Blob object from the Uint8Array
        return {
            blob: new Blob([u8arr], { type: mime }),
            arrayBuffer: u8arr.buffer
        };
    }
    /**
     * Convert the given image to an ArrayBuffer and return the image data.
     *
     * @param image The image to convert.
     * @param arrayBuffer Optional: The ArrayBuffer of the image, if it was already converted.
     * @returns
     */
    constructImageData(image, arrayBuffer) {
        return __awaiter(this, void 0, void 0, function* () {
            if (image instanceof File) {
                return {
                    imageData: {
                        filename: image.name,
                        format: image.type,
                        size: image.size
                    },
                    arrayBuffer: arrayBuffer || (yield image.arrayBuffer())
                };
            }
            else {
                return {
                    imageData: {
                        format: image.type,
                        size: image.size
                    },
                    arrayBuffer: arrayBuffer || (yield image.arrayBuffer())
                };
            }
        });
    }
    /**
     * Convert the given input to an ArrayBuffer.
     *
     * @param input
     * @returns
     */
    convertToArrayBuffer(input) {
        return __awaiter(this, void 0, void 0, function* () {
            if (input instanceof File) {
                return yield input.arrayBuffer();
            }
            else if (input instanceof Blob) {
                return yield input.arrayBuffer();
            }
            else if (input instanceof ArrayBuffer) {
                return input;
            }
            else {
                const result = yield input();
                if (result instanceof Blob) {
                    return yield result.arrayBuffer();
                }
                else {
                    return result;
                }
            }
        });
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (8)
    processSVG(blob) {
        return __awaiter(this, void 0, void 0, function* () {
            let data = yield new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.onloadend = () => resolve(reader.result);
                reader.onerror = reject;
                reader.readAsDataURL(blob);
            });
            data = data.replace('data:image/svg+xml;base64,', '');
            data = (0, base64_1.atobCustom)(data);
            const svgC = document.createElement('DIV');
            svgC.id = 'svgc';
            svgC.innerHTML = data;
            // now we can access the svg element as a DOM object
            const svgE = svgC.getElementsByTagName('svg');
            const childImageURIs = [];
            let styleURIs = [];
            // collect image urls
            for (let i = 0; i < svgE.length; ++i) {
                for (let j = 0; j < 2; ++j) {
                    const childImages = svgE[i].getElementsByTagName(['image', 'img'][j]);
                    for (let k = 0; k < childImages.length; ++k) {
                        if (childImages[k].href.baseVal.substring(0, 5) != 'data:') {
                            childImageURIs.push(childImages[k].href.baseVal);
                        }
                    }
                }
                // collect potential font definitions
                // we assume styles are imported using the following syntax:
                // @import url(CSS_URL);
                const styleElements = svgE[i].getElementsByTagName('style');
                for (let j = 0; j < styleElements.length; ++j) {
                    const regex = /@import\x20url\(\s*(.*?)\s*\);/g;
                    let m;
                    while ((m = regex.exec(styleElements[j].innerHTML)) !== null) {
                        styleURIs.push(m[1]);
                    }
                    // make unique
                    styleURIs = styleURIs.filter(function (value, index, self) {
                        return self.indexOf(value) === index;
                    });
                }
            }
            // creating a promise for each image which needs to be converted to a data URI
            const replacementPromises = [];
            const createImagePromise = (uri) => __awaiter(this, void 0, void 0, function* () {
                if (uri.length > 0) {
                    const response = yield this._httpClient.get(uri, undefined, true);
                    const uInt8Array = new Uint8Array(response.data);
                    let i = uInt8Array.length;
                    const biStr = []; //new Array(i);
                    while (i--)
                        biStr[i] = String.fromCharCode(uInt8Array[i]);
                    const base64Data = (0, base64_1.btoaCustom)(biStr.join(''));
                    const imgDataUrl = 'data:' + response.headers['content-type'] + ';base64,' + base64Data;
                    // replace url in SVG string
                    // CAUTION theoretically this could cause unwanted replacements
                    data = data.replace(uri, imgDataUrl);
                }
            });
            for (let i = 0; i < childImageURIs.length; ++i)
                replacementPromises.push(createImagePromise(childImageURIs[i]));
            // now we create promises for the google fonts to be imported
            const createStylePromise = (styleUrl) => __awaiter(this, void 0, void 0, function* () {
                const response = yield this._httpClient.get(styleUrl, { responseType: 'text' });
                let cssString = response.data;
                // we assume that fonts are imported using the following syntax:
                // url(FONT_URI);
                const fontURLs = [];
                const regex = /url\(\s*(.*?)\s*\)/g;
                let m;
                while ((m = regex.exec(cssString)) !== null) {
                    fontURLs.push(m[1]);
                }
                const fontPromises = [];
                const createFontPromise = (fUrl) => __awaiter(this, void 0, void 0, function* () {
                    const response = yield this._httpClient.get(fUrl, { responseType: 'arraybuffer' });
                    const uInt8Array = new Uint8Array(response.data);
                    let i = uInt8Array.length;
                    const biStr = []; //new Array(i);
                    while (i--)
                        biStr[i] = String.fromCharCode(uInt8Array[i]);
                    const base64Data = (0, base64_1.btoaCustom)(biStr.join(''));
                    const fontDataUrl = 'data:' + response.headers['content-type'] + ';base64,' + base64Data;
                    if (fUrl.length > 0)
                        cssString = cssString.replace(fUrl, fontDataUrl);
                });
                for (let j = 0; j < fontURLs.length; ++j)
                    fontPromises.push(createFontPromise(fontURLs[j]));
                yield Promise.all(fontPromises);
                data = data.replace('@import url(' + styleUrl + ');', cssString);
            });
            for (let i = 0; i < styleURIs.length; ++i)
                replacementPromises.push(createStylePromise(styleURIs[i]));
            yield Promise.all(replacementPromises);
            const du = 'data:image/svg+xml,' + encodeURIComponent(data);
            const img = new Image(); // same as document.createElement('img')
            img.crossOrigin = 'Anonymous';
            const promise = new Promise((resolve, reject) => {
                img.onload = () => resolve();
                img.onerror = reject;
            });
            img.src = du;
            yield promise;
            return img;
        });
    }
    responseToImage(response) {
        return __awaiter(this, void 0, void 0, function* () {
            // if we already receive and image, this conversion already happened
            if (response.data instanceof HTMLImageElement)
                return response.data;
            if (response.headers['content-type'] === 'image/svg+xml') {
                const img = yield this.processSVG(response.data.blob);
                return img;
            }
            else {
                const img = new Image();
                const promise = new Promise((resolve, reject) => {
                    img.onload = () => resolve();
                    img.onerror = reject;
                });
                img.crossOrigin = 'anonymous';
                img.src = URL.createObjectURL(response.data.blob);
                yield promise;
                URL.revokeObjectURL(img.src);
                return img;
            }
        });
    }
    toAlpha(color) {
        const c = this.toHexColor(color);
        if (c.length <= 8)
            return 1;
        return parseInt(c.slice(c.length - 2, c.length), 16) / 255;
    }
    toColorArray(color) {
        if (typeof color !== 'string' || !color.startsWith('#'))
            color = this.toHexColor(color);
        const tColor = new tinycolor_1.TinyColor(color);
        const rgb = tColor.toRgb();
        return [rgb.r / 255.0, rgb.g / 255.0, rgb.b / 255.0];
    }
    /**
     * @param color
     * @param defColor
     */
    toHex8Color(color, defColorString = '#000') {
        const c = this.toHexColor(color, defColorString);
        const tColor = new tinycolor_1.TinyColor(c);
        const cH8 = tColor.toHex8String();
        return cH8.replace('#', '0x');
    }
    /**
     * This color converter is mostly left 'as-is' from viewer v2.
     * I didn't want to break something that works.
     *
     * @param color
     * @param defColor
     */
    toHexColor(color, defColorString = '#000') {
        if (!color || color === 'default')
            return defColorString;
        if (color.constructor === Float32Array)
            color = Array.from(color);
        const tColor = new tinycolor_1.TinyColor(color);
        if (color instanceof tinycolor_1.TinyColor)
            return this.tinyColorToString(tColor);
        // check if we got a number
        if (typeof color === 'number') {
            let cs = color.toString(16);
            const cl = cs.length;
            if (cl < 3)
                cs = cs.padStart(3, '0');
            else if (cl < 6)
                cs = cs.padStart(6, '0');
            else if (cl < 8)
                cs = cs.padEnd(8, '0');
            const tc = new tinycolor_1.TinyColor(cs);
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // check if the input is a THREE.Color
        if (typeof color === 'object' && 'isColor' in color && 'getHexString' in color && typeof color.getHexString === 'function') {
            const tc = new tinycolor_1.TinyColor(color.getHexString());
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // check for array of numbers
        if (Array.isArray(color) && (color.length == 3 || color.length == 4)) {
            let isRGBArray = true;
            for (let i = 0; i < 3; ++i) {
                color[i] = parseFloat(color[i]);
                if (isNaN(color[i])) {
                    isRGBArray = false;
                }
            }
            if (!isRGBArray)
                return defColorString;
            const tc = new tinycolor_1.TinyColor({
                r: Math.max(0, Math.min(color[0], 255)),
                g: Math.max(0, Math.min(color[1], 255)),
                b: Math.max(0, Math.min(color[2], 255))
            });
            if (color.length == 4) {
                const a = parseFloat(color[3]);
                if (!isNaN(a)) {
                    tc.setAlpha(Math.max(0, Math.min(a, 255)) / 255);
                }
            }
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // if we got something other than a string, check if
        // tinycolor can work with it
        if (typeof color !== 'string') {
            const tc = new tinycolor_1.TinyColor(color);
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // tinycolor doesn't like 0x
        const tmpColor = color.replace('0x', '#');
        // if we got no alpha value, add full opacity
        if (tmpColor.match(/^#[a-f0-9]{6}$/i) !== null) {
            const tc = new tinycolor_1.TinyColor(tmpColor + 'ff');
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // standard case
        if (tmpColor.match(/^#[a-f0-9]{8}$/i) !== null) {
            const tc = new tinycolor_1.TinyColor(tmpColor);
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // correct number which have the alpha value defined as a single hex digit
        if (tmpColor.match(/^#[a-f0-9]{7}$/i) !== null) {
            const tc = new tinycolor_1.TinyColor(tmpColor.slice(0, 7) + '0' + tmpColor.slice(-1));
            return tc.isValid ? this.tinyColorToString(tc) : defColorString;
        }
        // check if tinycolor understands the string
        const tc = new tinycolor_1.TinyColor(tmpColor);
        return tc.isValid ? this.tinyColorToString(tc) : defColorString;
    }
    toThreeJsColorInput(color) {
        const c = this.toHexColor(color);
        return c.slice(0, c.length - 2);
    }
    toVec3(point) {
        if (Array.isArray(point) && point.length >= 3 && typeof point[0] === 'number' && typeof point[1] === 'number' && typeof point[2] === 'number')
            return gl_matrix_1.vec3.fromValues(point[0], point[1], point[2]);
        const pointCast1 = point;
        if (((pointCast1.x || pointCast1.x === 0) && typeof pointCast1.x === 'number') && ((pointCast1.y || pointCast1.y === 0) && typeof pointCast1.y === 'number') && ((pointCast1.z || pointCast1.z === 0) && typeof pointCast1.z === 'number'))
            return gl_matrix_1.vec3.fromValues(pointCast1.x, pointCast1.y, pointCast1.z);
        const pointCast2 = point;
        if (((pointCast2.X || pointCast2.X === 0) && typeof pointCast2.X === 'number') && ((pointCast2.Y || pointCast2.Y === 0) && typeof pointCast2.Y === 'number') && ((pointCast2.Z || pointCast2.Z === 0) && typeof pointCast2.Z === 'number'))
            return gl_matrix_1.vec3.fromValues(pointCast2.X, pointCast2.Y, pointCast2.Z);
        return gl_matrix_1.vec3.create();
    }
    // #endregion Public Methods (8)
    // #region Private Methods (1)
    tinyColorToString(color) {
        return color.toHex8String();
    }
}
exports.Converter = Converter;
//# sourceMappingURL=Converter.js.map

/***/ }),

/***/ 78528:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DomEventEngine = void 0;
const UuidGenerator_1 = __webpack_require__(16365);
class DomEventEngine {
    // #endregion Properties (15)
    // #region Constructors (1)
    constructor(canvas) {
        // #region Properties (15)
        this._domEventListeners = {};
        this._uuidGenerator = UuidGenerator_1.UuidGenerator.instance;
        this._allowListeners = {
            mousewheel: true,
            pointerdown: true,
            pointermove: true,
            pointerup: true,
            pointerout: true,
            keydown: true,
            keyup: true,
            contextmenu: true,
        };
        this._currentPointerPosition = { x: 0, y: 0 };
        this._restrictedListenerTokens = [];
        this._canvas = canvas;
        this._onMouseWheel = this.onMouseWheel.bind(this);
        this._onPointerDown = this.onPointerDown.bind(this);
        this._onPointerMove = this.onPointerMove.bind(this);
        this._onKeyDownPointerPositionHelper = this.onKeyDownPointerPositionHelper.bind(this);
        this._onPointerUp = this.onPointerUp.bind(this);
        this._onPointerOut = this.onPointerOut.bind(this);
        this._onKeyDown = this.onKeyDown.bind(this);
        this._onKeyUp = this.onKeyUp.bind(this);
        this._onContextMenu = this.onContextMenu.bind(this);
        this.addEventListeners();
    }
    // #endregion Constructors (1)
    // #region Public Methods (7)
    addDomEventListener(listener) {
        const id = this._uuidGenerator.create();
        this._domEventListeners[id] = listener;
        return id;
    }
    addRestrictedListenerToken(token) {
        if (this._restrictedListenerTokens.includes(token))
            return;
        this._restrictedListenerTokens.push(token);
    }
    /**
     * Allow / disallow events.
     * This can be used to disable events for a specific viewer.
     *
     * Example use case: If you don't want to allow mouse wheel events for a specific viewer so that users can scroll past the viewer.
     *
     * Be aware that this might cause some issues with the the camera controls if the pointer events are disabled only partially.
     *
     * @param allowedListeners
     */
    allowEventListeners(allowedListeners) {
        if (typeof window === undefined)
            return;
        if (allowedListeners.mousewheel !== undefined && this._allowListeners.mousewheel !== allowedListeners.mousewheel) {
            if (allowedListeners.mousewheel) {
                this._canvas.addEventListener('mousewheel', this._onMouseWheel);
                this._canvas.addEventListener('MozMousePixelScroll', this._onMouseWheel); // firefox
            }
            else {
                this._canvas.removeEventListener('mousewheel', this._onMouseWheel);
                this._canvas.removeEventListener('MozMousePixelScroll', this._onMouseWheel); // firefox
            }
            this._allowListeners.mousewheel = allowedListeners.mousewheel;
        }
        if (allowedListeners.pointerdown !== undefined && this._allowListeners.pointerdown !== allowedListeners.pointerdown) {
            if (allowedListeners.pointerdown) {
                this._canvas.addEventListener('pointerdown', this._onPointerDown);
            }
            else {
                this._canvas.removeEventListener('pointerdown', this._onPointerDown);
            }
            this._allowListeners.pointerdown = allowedListeners.pointerdown;
        }
        if (allowedListeners.pointermove !== undefined && this._allowListeners.pointermove !== allowedListeners.pointermove) {
            if (allowedListeners.pointermove) {
                this._canvas.addEventListener('pointermove', this._onPointerMove);
                window.addEventListener('pointermove', this._onKeyDownPointerPositionHelper);
            }
            else {
                this._canvas.removeEventListener('pointermove', this._onPointerMove);
                window.removeEventListener('pointermove', this._onKeyDownPointerPositionHelper);
            }
            this._allowListeners.pointermove = allowedListeners.pointermove;
        }
        if (allowedListeners.pointerup !== undefined && this._allowListeners.pointerup !== allowedListeners.pointerup) {
            if (allowedListeners.pointerup) {
                this._canvas.addEventListener('pointerup', this._onPointerUp);
            }
            else {
                this._canvas.removeEventListener('pointerup', this._onPointerUp);
            }
            this._allowListeners.pointerup = allowedListeners.pointerup;
        }
        if (allowedListeners.pointerout !== undefined && this._allowListeners.pointerout !== allowedListeners.pointerout) {
            if (allowedListeners.pointerout) {
                this._canvas.addEventListener('pointerout', this._onPointerOut);
            }
            else {
                this._canvas.removeEventListener('pointerout', this._onPointerOut);
            }
            this._allowListeners.pointerout = allowedListeners.pointerout;
        }
        if (allowedListeners.keydown !== undefined && this._allowListeners.keydown !== allowedListeners.keydown) {
            if (allowedListeners.keydown) {
                window.addEventListener('keydown', this._onKeyDown);
            }
            else {
                window.removeEventListener('keydown', this._onKeyDown);
            }
            this._allowListeners.keydown = allowedListeners.keydown;
        }
        if (allowedListeners.keyup !== undefined && this._allowListeners.keyup !== allowedListeners.keyup) {
            if (allowedListeners.keyup) {
                window.addEventListener('keyup', this._onKeyUp);
            }
            else {
                window.removeEventListener('keyup', this._onKeyUp);
            }
            this._allowListeners.keyup = allowedListeners.keyup;
        }
        if (allowedListeners.contextmenu !== undefined && this._allowListeners.contextmenu !== allowedListeners.contextmenu) {
            if (allowedListeners.contextmenu) {
                this._canvas.addEventListener('contextmenu', this._onContextMenu);
            }
            else {
                this._canvas.removeEventListener('contextmenu', this._onContextMenu);
            }
            this._allowListeners.contextmenu = allowedListeners.contextmenu;
        }
    }
    dispose() {
        this.removeEventListeners();
    }
    removeAllDomEventListener() {
        for (const id in this._domEventListeners)
            delete this._domEventListeners[id];
        this._restrictedListenerTokens = [];
    }
    removeDomEventListener(id) {
        if (this._domEventListeners[id]) {
            delete this._domEventListeners[id];
            this._restrictedListenerTokens = this._restrictedListenerTokens.filter(t => t !== id);
            return true;
        }
        return false;
    }
    removeRestrictedListenerToken(token) {
        const index = this._restrictedListenerTokens.indexOf(token);
        if (index !== -1)
            this._restrictedListenerTokens.splice(index, 1);
    }
    // #endregion Public Methods (7)
    // #region Private Methods (11)
    addEventListeners() {
        if (typeof window === undefined)
            return;
        this._canvas.addEventListener('mousewheel', this._onMouseWheel);
        this._canvas.addEventListener('MozMousePixelScroll', this._onMouseWheel); // firefox
        this._canvas.addEventListener('pointerdown', this._onPointerDown);
        this._canvas.addEventListener('pointermove', this._onPointerMove);
        this._canvas.addEventListener('pointerup', this._onPointerUp);
        this._canvas.addEventListener('pointerout', this._onPointerOut);
        window.addEventListener('keyup', this._onKeyUp);
        window.addEventListener('keydown', this._onKeyDown);
        window.addEventListener('pointermove', this._onKeyDownPointerPositionHelper);
        // just prevent right click menu
        this._canvas.addEventListener('contextmenu', this._onContextMenu);
    }
    onContextMenu(event) {
        event.preventDefault();
    }
    onKeyDown(event) {
        if (this._canvas === document.elementFromPoint(this._currentPointerPosition.x, this._currentPointerPosition.y)) {
            Object.entries(this._domEventListeners).forEach(([key, listener]) => {
                if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                    listener.onKeyDown(event);
                }
            });
        }
    }
    onKeyDownPointerPositionHelper(event) {
        this._currentPointerPosition = { x: event.pageX, y: event.pageY };
    }
    onKeyUp(event) {
        if (this._canvas === document.elementFromPoint(this._currentPointerPosition.x, this._currentPointerPosition.y)) {
            Object.entries(this._domEventListeners).forEach(([key, listener]) => {
                if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                    listener.onKeyUp(event);
                }
            });
        }
    }
    onMouseWheel(event) {
        event.preventDefault();
        event.stopPropagation();
        Object.entries(this._domEventListeners).forEach(([key, listener]) => {
            if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                listener.onMouseWheel(event);
            }
        });
    }
    onPointerDown(event) {
        event.preventDefault();
        Object.entries(this._domEventListeners).forEach(([key, listener]) => {
            if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                listener.onPointerDown(event);
            }
        });
    }
    onPointerMove(event) {
        event.preventDefault();
        Object.entries(this._domEventListeners).forEach(([key, listener]) => {
            if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                listener.onPointerMove(event);
            }
        });
    }
    onPointerOut(event) {
        event.preventDefault();
        Object.entries(this._domEventListeners).forEach(([key, listener]) => {
            if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                listener.onPointerOut(event);
                listener.onPointerEnd(event);
            }
        });
    }
    onPointerUp(event) {
        event.preventDefault();
        Object.entries(this._domEventListeners).forEach(([key, listener]) => {
            if (this._restrictedListenerTokens.length === 0 || this._restrictedListenerTokens.includes(key)) {
                listener.onPointerUp(event);
                listener.onPointerEnd(event);
            }
        });
    }
    removeEventListeners() {
        if (typeof window === undefined)
            return;
        this._canvas.removeEventListener('mousewheel', this._onMouseWheel);
        this._canvas.removeEventListener('MozMousePixelScroll', this._onMouseWheel); // firefox
        this._canvas.removeEventListener('pointerdown', this._onPointerDown);
        this._canvas.removeEventListener('pointermove', this._onPointerMove);
        this._canvas.removeEventListener('pointerup', this._onPointerUp);
        this._canvas.removeEventListener('pointerout', this._onPointerOut);
        window.removeEventListener('keydown', this._onKeyDown);
        window.removeEventListener('keyup', this._onKeyUp);
        window.removeEventListener('pointermove', this._onKeyDownPointerPositionHelper);
        this._canvas.removeEventListener('contextmenu', this._onContextMenu);
    }
}
exports.DomEventEngine = DomEventEngine;
//# sourceMappingURL=DomEventEngine.js.map

/***/ }),

/***/ 13705:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventEngine = void 0;
const EventTypes_1 = __webpack_require__(91934);
const UuidGenerator_1 = __webpack_require__(16365);
const Logger_1 = __webpack_require__(43940);
class EventEngine {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor() {
        this._logger = Logger_1.Logger.instance;
        this._uuidGenerator = UuidGenerator_1.UuidGenerator.instance;
        this._eventListeners = {};
        for (const type in EventTypes_1.EVENTTYPE) {
            const subEventType = EventTypes_1.EVENTTYPE[type];
            this._eventListeners[type.toLowerCase()] = [];
            for (const subtype in subEventType) {
                this._eventListeners[subEventType[subtype]] = [];
            }
        }
    }
    // #endregion Constructors (1)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (3)
    /**
     * Adds a listener that listenes to the provided type. If no valid type is specified, an error is thrown.
     *
     * @param type the type of the event
     * @param cb the callback that should be called
     * @returns an unique token to be able to remove the listener
     */
    addListener(type, cb) {
        var _a;
        const typeString = this.convertTypeToString(type);
        if (!typeString)
            return '';
        const token = this._uuidGenerator.create();
        (_a = this._eventListeners[typeString]) === null || _a === void 0 ? void 0 : _a.push({ token, cb });
        return token;
    }
    /**
     * Emits the event to all callbacks that listen to the type.
     *
     * @param type the type of the event
     * @param event the event to emit
     */
    emitEvent(type, event) {
        const typeString = this.convertTypeToString(type);
        if (this._eventListeners[typeString] && this._eventListeners[typeString].length !== 0) {
            const cbs = this._eventListeners[typeString].map(el => el.cb);
            for (let i = 0; i < cbs.length; i++) {
                cbs[i](event);
            }
        }
        if (typeString.includes('.'))
            this.emitEvent(typeString.substr(0, typeString.indexOf('.')), event);
    }
    /**
     * Removes a listener with the specified token.
     *
     * @param token the token of the listener
     * @returns result of the targeted operation
     */
    removeListener(token) {
        for (const type in EventTypes_1.EVENTTYPE) {
            const subEventType = EventTypes_1.EVENTTYPE[type];
            const typeLowerCase = type.toLowerCase();
            for (let i = 0; i < this._eventListeners[typeLowerCase].length; i++) {
                if (this._eventListeners[typeLowerCase][i].token === token) {
                    this._eventListeners[typeLowerCase].splice(i, 1);
                    return true;
                }
            }
            for (const subtype in subEventType) {
                for (let i = 0; i < this._eventListeners[subEventType[subtype]].length; i++) {
                    if (this._eventListeners[subEventType[subtype]][i].token === token) {
                        this._eventListeners[subEventType[subtype]].splice(i, 1);
                        return true;
                    }
                }
            }
        }
        return false;
    }
    // #endregion Public Methods (3)
    // #region Private Methods (1)
    convertTypeToString(type) {
        let typeString = '';
        if (typeof type === 'string')
            typeString = type;
        for (const mainType in EventTypes_1.EVENTTYPE)
            if (type === EventTypes_1.EVENTTYPE[mainType])
                typeString = mainType.toLowerCase();
        if (!typeString || !this._eventListeners[typeString]) {
            this._logger.warn('EventEngine.convertTypeToString: No valid type provided.');
            return '';
        }
        return typeString;
    }
}
exports.EventEngine = EventEngine;
//# sourceMappingURL=EventEngine.js.map

/***/ }),

/***/ 91934:
/***/ ((__unused_webpack_module, exports) => {


// #region Type aliases (1)
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EVENTTYPE = exports.EVENTTYPE_VIEWPORT = exports.EVENTTYPE_TASK = exports.EVENTTYPE_SESSION = exports.EVENTTYPE_SCENE = exports.EVENTTYPE_RENDERING = exports.EVENTTYPE_PARAMETER = exports.EVENTTYPE_OUTPUT = exports.EVENTTYPE_INTERACTION = exports.EVENTTYPE_GUMBALL = exports.EVENTTYPE_DRAWING_TOOLS = exports.EVENTTYPE_CAMERA = void 0;
// #endregion Type aliases (1)
// #region Enums (10)
/**
 * Event types for all camera events
 * The camera events are used to notify about camera changes, like start, move and end of camera movement.
 * The events that are sent with the camera events are of type {@link ICameraEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 *
 * @enum {string}
 */
var EVENTTYPE_CAMERA;
(function (EVENTTYPE_CAMERA) {
    /**
     * The CAMERA_START-event is sent when the camera starts moving.
     */
    EVENTTYPE_CAMERA["CAMERA_START"] = "camera.start";
    /**
     * The CAMERA_MOVE-event is sent when the camera moves.
     */
    EVENTTYPE_CAMERA["CAMERA_MOVE"] = "camera.move";
    /**
     * The CAMERA_END-event is sent when the camera stops moving.
     */
    EVENTTYPE_CAMERA["CAMERA_END"] = "camera.end";
})(EVENTTYPE_CAMERA = exports.EVENTTYPE_CAMERA || (exports.EVENTTYPE_CAMERA = {}));
/**
 * Event types for all drawing tools events
 * The drawing tools events are used to notify about drawing tools changes, like cancel, finish, update, inserted, removed, drag start, move and end.
 * The events that are sent with the drawing tools events are of type {@link IDrawingToolsEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_DRAWING_TOOLS;
(function (EVENTTYPE_DRAWING_TOOLS) {
    /**
     * The CANCEL-event is sent when the drawing process has been canceled.
     */
    EVENTTYPE_DRAWING_TOOLS["CANCEL"] = "drawing_tools.cancel";
    /**
     * The FINISH-event is sent when the drawing process has been finished.
     */
    EVENTTYPE_DRAWING_TOOLS["FINISH"] = "drawing_tools.finish";
    /**
     * The UPDATE-event is sent when the drawing process has been updated.
     */
    EVENTTYPE_DRAWING_TOOLS["UPDATE"] = "drawing_tools.update";
    /**
     * The ADDED-event is sent when a point has been added.
     */
    EVENTTYPE_DRAWING_TOOLS["ADDED"] = "drawing_tools.added";
    /**
     * The REMOVED-event is sent when a point has been removed.
     */
    EVENTTYPE_DRAWING_TOOLS["REMOVED"] = "drawing_tools.removed";
    /**
     * The MOVED-event is sent when a point has been moved.
     */
    EVENTTYPE_DRAWING_TOOLS["MOVED"] = "drawing_tools.moved";
    /**
     * The SELECTED-event is sent when a point has been selected.
     */
    EVENTTYPE_DRAWING_TOOLS["SELECTED"] = "drawing_tools.selected";
    /**
     * The DESELECTED-event is sent when a point has been deselected.
     */
    EVENTTYPE_DRAWING_TOOLS["DESELECTED"] = "drawing_tools.deselected";
    /**
     * The GEOMETRY_CHANGED-event is sent when the geometry has been changed.
     */
    EVENTTYPE_DRAWING_TOOLS["GEOMETRY_CHANGED"] = "drawing_tools.geometry.changed";
    /**
     * The DRAG_START-event is sent when the dragging of a point has started.
     */
    EVENTTYPE_DRAWING_TOOLS["DRAG_START"] = "drawing_tools.drag.start";
    /**
     * The DRAG_MOVE-event is sent when a point is being dragged.
     */
    EVENTTYPE_DRAWING_TOOLS["DRAG_MOVE"] = "drawing_tools.drag.move";
    /**
     * The DRAG_END-event is sent when the dragging of a point has ended.
     */
    EVENTTYPE_DRAWING_TOOLS["DRAG_END"] = "drawing_tools.drag.end";
    /**
     * The MINIMUM_POINTS-event is sent when the minimum number of points has not been met.
     */
    EVENTTYPE_DRAWING_TOOLS["MINIMUM_POINTS"] = "drawing_tools.minimumPoints";
    /**
     * The MAXIMUM_POINTS-event is sent when the maximum number of points has been exceeded.
     */
    EVENTTYPE_DRAWING_TOOLS["MAXIMUM_POINTS"] = "drawing_tools.maximumPoints";
    /**
     * The UNCLOSED_LOOP-event is sent when the loop is not closed, but should be.
     */
    EVENTTYPE_DRAWING_TOOLS["UNCLOSED_LOOP"] = "drawing_tools.unclosedLoop";
})(EVENTTYPE_DRAWING_TOOLS = exports.EVENTTYPE_DRAWING_TOOLS || (exports.EVENTTYPE_DRAWING_TOOLS = {}));
/**
 * Event types for all gumball events
 * The gumball events are used to notify about gumball changes, like matrix changes.
 * The events that are sent with the gumball events are of type {@link IGumballEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_GUMBALL;
(function (EVENTTYPE_GUMBALL) {
    /**
     * The MATRIX_CHANGED-event is sent when the matrix of the gumball has changed
     */
    EVENTTYPE_GUMBALL["MATRIX_CHANGED"] = "gumball.matrixChanged";
})(EVENTTYPE_GUMBALL = exports.EVENTTYPE_GUMBALL || (exports.EVENTTYPE_GUMBALL = {}));
/**
 * Event types for all interaction events
 * The interaction events are used to notify about interaction changes, like drag start, move and end, hover on and off, select on and off.
 * The events that are sent with the interaction events are of type {@link IInteractionEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_INTERACTION;
(function (EVENTTYPE_INTERACTION) {
    /**
     * The DRAG_START-event is sent when the dragging of an object has started.
     */
    EVENTTYPE_INTERACTION["DRAG_START"] = "interaction.drag.start";
    /**
     * The DRAG_MOVE-event is sent when an object is being dragged.
     */
    EVENTTYPE_INTERACTION["DRAG_MOVE"] = "interaction.drag.move";
    /**
     * The DRAG_END-event is sent when the dragging of an object has ended.
     */
    EVENTTYPE_INTERACTION["DRAG_END"] = "interaction.drag.end";
    /**
     * The HOVER_ON-event is sent when an object has been hovered.
     */
    EVENTTYPE_INTERACTION["HOVER_ON"] = "interaction.hover.on";
    /**
     * The HOVER_OFF-event is sent when an object has been unhovered.
     */
    EVENTTYPE_INTERACTION["HOVER_OFF"] = "interaction.hover.off";
    /**
     * The SELECT_ON-event is sent when an object has been selected.
     */
    EVENTTYPE_INTERACTION["SELECT_ON"] = "interaction.select.on";
    /**
     * The SELECT_OFF-event is sent when an object has been deselected.
     */
    EVENTTYPE_INTERACTION["SELECT_OFF"] = "interaction.select.off";
    /**
     * The MULTI_SELECT_ON-event is sent when multiple objects have been selected.
     */
    EVENTTYPE_INTERACTION["MULTI_SELECT_ON"] = "interaction.multiSelect.on";
    /**
     * The MULTI_SELECT_OFF-event is sent when multiple objects have been deselected.
     */
    EVENTTYPE_INTERACTION["MULTI_SELECT_OFF"] = "interaction.multiSelect.off";
    /**
     * The MULTI_SELECT_MAXIMUM_NODES-event is sent when the maximum number of nodes has been selected.
     */
    EVENTTYPE_INTERACTION["MULTI_SELECT_MAXIMUM_NODES"] = "interaction.multiSelect.maximumNodes";
    /**
     * The MULTI_SELECT_MINIMUM_NODES-event is sent when the minimum number of nodes has not been selected.
     */
    EVENTTYPE_INTERACTION["MULTI_SELECT_MINIMUM_NODES"] = "interaction.multiSelect.minimumNodes";
})(EVENTTYPE_INTERACTION = exports.EVENTTYPE_INTERACTION || (exports.EVENTTYPE_INTERACTION = {}));
/**
 * Event types for all output events
 * The output events are used to notify about output changes, like updated outputs.
 * The events that are sent with the output events are of type {@link IOutputEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_OUTPUT;
(function (EVENTTYPE_OUTPUT) {
    /**
     * The OUTPUT_UPDATED-event is sent when an output has been updated.
     */
    EVENTTYPE_OUTPUT["OUTPUT_UPDATED"] = "output.updated";
})(EVENTTYPE_OUTPUT = exports.EVENTTYPE_OUTPUT || (exports.EVENTTYPE_OUTPUT = {}));
/**
 * Event types for all parameter events
 * The parameter events are used to notify about parameter changes, like value changes or session value changes.
 * The events that are sent with the parameter events are of type {@link IParameterEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_PARAMETER;
(function (EVENTTYPE_PARAMETER) {
    /**
     * The PARAMETER_VALUE_CHANGED-event is sent when the value of a parameter has changed.
     */
    EVENTTYPE_PARAMETER["PARAMETER_VALUE_CHANGED"] = "parameter.valueChanged";
    /**
     * The PARAMETER_SESSION_VALUE_CHANGED-event is sent when the session value of a parameter has changed.
     */
    EVENTTYPE_PARAMETER["PARAMETER_SESSION_VALUE_CHANGED"] = "parameter.sessionValueChanged";
})(EVENTTYPE_PARAMETER = exports.EVENTTYPE_PARAMETER || (exports.EVENTTYPE_PARAMETER = {}));
/**
 * Event types for all rendering events
 * The rendering events are used to notify about specific rendering events, like the finishing of the beauty rendering.
 * The events that are sent with the rendering events are of type {@link IRenderingEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_RENDERING;
(function (EVENTTYPE_RENDERING) {
    /**
     * The BEAUTY_RENDERING_FINISHED-event is sent when the beauty rendering has finished.
     */
    EVENTTYPE_RENDERING["BEAUTY_RENDERING_FINISHED"] = "rendering.beautyRenderingFinished";
})(EVENTTYPE_RENDERING = exports.EVENTTYPE_RENDERING || (exports.EVENTTYPE_RENDERING = {}));
/**
 * Event types for all scene events
 * The scene events are used to notify about scene changes, like bounding box changes or empty bounding boxes.
 * The events that are sent with the scene events are of type {@link ISceneEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_SCENE;
(function (EVENTTYPE_SCENE) {
    /**
     * The SCENE_BOUNDING_BOX_CHANGE-event is sent when the bounding box of the scene has changed.
     */
    EVENTTYPE_SCENE["SCENE_BOUNDING_BOX_CHANGE"] = "scene.boundingBoxChange";
    /**
     * TheSCENE_BOUNDING_BOX_EMPTY-event is sent when the bounding box of the scene is empty.
     */
    EVENTTYPE_SCENE["SCENE_BOUNDING_BOX_EMPTY"] = "scene.boundingBoxEmpty";
})(EVENTTYPE_SCENE = exports.EVENTTYPE_SCENE || (exports.EVENTTYPE_SCENE = {}));
/**
 * Event types for all session events
 * The session events are used to notify about session changes, like creation, customization, closing, loading of initial outputs or delayed loading of SDTF.
 * The events that are sent with the session events are of type {@link ISessionEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_SESSION;
(function (EVENTTYPE_SESSION) {
    /**
     * The SESSION_CREATED-event is sent when the session has been created.
     */
    EVENTTYPE_SESSION["SESSION_CREATED"] = "session.created";
    /**
     * The SESSION_CUSTOMIZED-event is sent when the session has been customized.
     */
    EVENTTYPE_SESSION["SESSION_CUSTOMIZED"] = "session.customized";
    /**
     * The SESSION_CLOSED-event is sent when the session has been closed.
     */
    EVENTTYPE_SESSION["SESSION_CLOSED"] = "session.closed";
    /**
     * The SESSION_INITIAL_OUTPUTS_LOADED-event is sent when the initial outputs of the session have been loaded.
     */
    EVENTTYPE_SESSION["SESSION_INITIAL_OUTPUTS_LOADED"] = "session.initialOutputsLoaded";
    /**
     * The SESSION_SDTF_DELAYED_LOADED-event is sent when the SDTF of the session has been delayed loaded.
     */
    EVENTTYPE_SESSION["SESSION_SDTF_DELAYED_LOADED"] = "session.sdtfDelayedLoaded";
})(EVENTTYPE_SESSION = exports.EVENTTYPE_SESSION || (exports.EVENTTYPE_SESSION = {}));
/**
 * Event types for all task events
 * The task events are used to notify about task changes, like start, process, end or cancel of a task.
 * The events that are sent with the task events are of type {@link ITaskEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_TASK;
(function (EVENTTYPE_TASK) {
    /**
     * The TASK_START-event is sent when a task has started.
     */
    EVENTTYPE_TASK["TASK_START"] = "task.start";
    /**
     * The TASK_PROCESS-event is sent when the process of a task has been updated.
     */
    EVENTTYPE_TASK["TASK_PROCESS"] = "task.process";
    /**
     * The TASK_END-event is sent when a task has ended.
     */
    EVENTTYPE_TASK["TASK_END"] = "task.end";
    /**
     * The TASK_CANCEL-event is sent when a task has been canceled.
     */
    EVENTTYPE_TASK["TASK_CANCEL"] = "task.cancel";
})(EVENTTYPE_TASK = exports.EVENTTYPE_TASK || (exports.EVENTTYPE_TASK = {}));
/**
 * Event types for all viewport events
 * The viewport events are used to notify about viewport changes, like creation, update, closing, visibility changes or loading of settings.
 * The events that are sent with the viewport events are of type {@link IViewportEvent}. The {@link EventResponseMapping} can used to map the event type to the corresponding event interface.
 */
var EVENTTYPE_VIEWPORT;
(function (EVENTTYPE_VIEWPORT) {
    /**
     * The BUSY_MODE_ON-event is sent when the busy mode of the viewport has started.
     */
    EVENTTYPE_VIEWPORT["BUSY_MODE_ON"] = "viewport.busy.on";
    /**
     * The BUSY_MODE_OFF-event is sent when the busy mode of the viewport has ended.
     */
    EVENTTYPE_VIEWPORT["BUSY_MODE_OFF"] = "viewport.busy.off";
    /**
     * The VIEWPORT_CREATED-event is sent when the viewport has been created.
     */
    EVENTTYPE_VIEWPORT["VIEWPORT_CREATED"] = "viewport.created";
    /**
     * The VIEWPORT_UPDATED-event is sent when the viewport has been updated.
     */
    EVENTTYPE_VIEWPORT["VIEWPORT_UPDATED"] = "viewport.updated";
    /**
     * The VIEWPORT_CLOSED-event is sent when the viewport has been closed.
     */
    EVENTTYPE_VIEWPORT["VIEWPORT_CLOSED"] = "viewport.closed";
    /**
     * The VIEWPORT_SETTINGS_LOADED-event is sent when the settings of the viewport have been loaded.
     */
    EVENTTYPE_VIEWPORT["VIEWPORT_SETTINGS_LOADED"] = "viewport.settingsLoaded";
    /**
     * The VIEWPORT_VISIBLE-event is sent when the viewport has become visible.
     */
    EVENTTYPE_VIEWPORT["VIEWPORT_VISIBLE"] = "viewport.visible";
    /**
     * The VIEWPORT_HIDDEN-event is sent when the viewport has become hidden.
     */
    EVENTTYPE_VIEWPORT["VIEWPORT_HIDDEN"] = "viewport.hidden";
})(EVENTTYPE_VIEWPORT = exports.EVENTTYPE_VIEWPORT || (exports.EVENTTYPE_VIEWPORT = {}));
// #endregion Enums (10)
// #region Variables (1)
/**
 * Definition of the event types.
 * These types are used to identify the type of an event in an event object {@link IEvent}.
 * The {@link EventResponseMapping} is used to map the event type to the corresponding event interface.
 */
exports.EVENTTYPE = {
    CAMERA: EVENTTYPE_CAMERA,
    OUTPUT: EVENTTYPE_OUTPUT,
    RENDERING: EVENTTYPE_RENDERING,
    SCENE: EVENTTYPE_SCENE,
    SESSION: EVENTTYPE_SESSION,
    PARAMETER: EVENTTYPE_PARAMETER,
    VIEWPORT: EVENTTYPE_VIEWPORT,
    INTERACTION: EVENTTYPE_INTERACTION,
    GUMBALL: EVENTTYPE_GUMBALL,
    TASK: EVENTTYPE_TASK,
    DRAWING_TOOLS: EVENTTYPE_DRAWING_TOOLS
};
// #endregion Variables (1)
//# sourceMappingURL=EventTypes.js.map

/***/ }),

/***/ 41263:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpClient = void 0;
const axios_1 = __importDefault(__webpack_require__(86425));
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
const ShapeDiverBackendErrors_1 = __webpack_require__(81956);
const base64_1 = __webpack_require__(96847);
const Logger_1 = __webpack_require__(43940);
class HttpClient {
    // #endregion Properties (7)
    // #region Constructors (1)
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    constructor() {
        // #region Properties (7)
        this._logger = Logger_1.Logger.instance;
        this._dataCache = new Map();
        this._enableCaching = true;
        this._excludedQueryParameters = ['Expires', 'Signature', 'Key-Pair-Id'];
        this._maxCacheSize = 1024 * 1024 * 32;
        this._sessionLoading = {};
    }
    // #endregion Constructors (1)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Getters And Setters (6)
    get enableCaching() {
        return this._enableCaching;
    }
    set enableCaching(value) {
        this._enableCaching = value;
        if (this._enableCaching === false)
            this._dataCache.clear();
    }
    get excludedQueryParameters() {
        return this._excludedQueryParameters;
    }
    set excludedQueryParameters(value) {
        this._excludedQueryParameters = value;
    }
    get maxCacheSize() {
        return this._maxCacheSize;
    }
    set maxCacheSize(value) {
        this._maxCacheSize = value;
    }
    // #endregion Public Getters And Setters (6)
    // #region Public Methods (5)
    /**
     * Add the data loading options from a session.
     *
     * @param sessionId
     * @param callbacks
     */
    addDataLoading(sessionId, callbacks) {
        this._sessionLoading[sessionId] = callbacks;
    }
    /**
     * Maps the geometry backend error to the corresponding viewer errors:
     * - ShapeDiverResponseError is mapped to ShapeDiverGeometryBackendResponseError
     * - ShapeDiverRequestError is mapped to ShapeDiverGeometryBackendRequestError
     *
     * Other error types are thrown as is.
     *
     * @param e
     */
    convertError(e) {
        if ((0, sdk_geometry_api_sdk_v2_1.isGBResponseError)(e)) {
            throw new ShapeDiverBackendErrors_1.ShapeDiverGeometryBackendResponseError(e.message, e.status, e.error, e.desc);
        }
        else if ((0, sdk_geometry_api_sdk_v2_1.isGBRequestError)(e)) {
            throw new ShapeDiverBackendErrors_1.ShapeDiverGeometryBackendRequestError(e.message, e.desc);
        }
        else if ((0, sdk_geometry_api_sdk_v2_1.isGBError)(e)) {
            throw new ShapeDiverBackendErrors_1.ShapeDiverGeometryBackendError(e.message);
        }
        else {
            throw e;
        }
    }
    /**
     * Get the requested resource either as a download or from the cache.
     * If available, the registered session loading is used for download.
     * Textures are downloaded via a specific endpoint and can be converted in this step as well.
     * Depending on the provided caching options, the requested resource might already be cached.
     *
     * @param href
     * @param config
     * @param textureLoading
     * @param textureConversion
     * @returns
     */
    get(href, config = { responseType: 'arraybuffer' }, textureLoading = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const dataKey = this.hrefToDataKey(href);
            // return element if it exists in cache
            if (this._dataCache.has(dataKey))
                return this.getFromCache(dataKey);
            // try to get sessionId from href
            let sessionId = this.getSessionId(href);
            // if href does not have sessionId, use the first session, if available
            if (!sessionId && Object.keys(this._sessionLoading).length > 0)
                sessionId = Object.keys(this._sessionLoading)[0];
            // get the session loading functions, if available
            let sessionLoading;
            if (sessionId)
                sessionLoading = this._sessionLoading[sessionId];
            let loadingPromise;
            // separation texture vs everything else
            if (textureLoading) {
                // if we have a sessionId and the sessionLoading functions and the image is not a blob or data, we load it via the sdk
                if (sessionLoading !== undefined && sessionId !== undefined && !href.startsWith('blob:') && !href.startsWith('data:')) {
                    // take first session to load a texture that is not session related
                    loadingPromise = new Promise((resolve, reject) => {
                        sessionLoading.downloadTexture(sessionId, href).then((result) => __awaiter(this, void 0, void 0, function* () {
                            resolve({
                                data: result[0],
                                headers: {
                                    'content-type': result[1]
                                }
                            });
                        })).catch(e => reject(e));
                    }).catch(e => { throw this.convertError(e); });
                }
                else {
                    // we can load blobs and data urls directly
                    // or load it directly if we don't have a session
                    loadingPromise = (0, axios_1.default)(href, Object.assign({ method: 'get' }, config))
                        .then((result) => __awaiter(this, void 0, void 0, function* () {
                        return result;
                    }))
                        .catch(e => { throw this.convertError(e); });
                }
            }
            else {
                if (!sessionLoading) {
                    // if there is no session to load from, we use the fallback option
                    loadingPromise = (0, axios_1.default)(href, Object.assign({ method: 'get' }, config))
                        .catch(e => { throw this.convertError(e); });
                }
                else {
                    // all data links where we could somehow find a session to load it with
                    loadingPromise = new Promise((resolve, reject) => {
                        sessionLoading.getAsset(href)
                            .then((result) => {
                            resolve({
                                data: result[0],
                                headers: {
                                    'content-type': result[1]
                                }
                            });
                        })
                            .catch(() => {
                            // if this fails, we just load it directly
                            const axiosPromise = (0, axios_1.default)(href, Object.assign({ method: 'get' }, config));
                            axiosPromise.catch(e => reject(e));
                            resolve(axiosPromise);
                        });
                    }).catch(e => { throw this.convertError(e); });
                }
            }
            if (this.enableCaching)
                this.addToCache(dataKey, loadingPromise);
            return loadingPromise;
        });
    }
    /**
     * Get the requested texture either as a download or from the cache.
     * If the texture is not available, undefined is returned.
     *
     * @param href The URL of the texture to load.
     * @returns Either the texture as a buffer and blob or undefined if the texture could not be loaded.
     */
    loadTexture(href) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            try {
                const response = yield this.get(href, undefined, true);
                const buffer = response.data;
                const arrayBufferView = new Uint8Array(response.data);
                const blob = new Blob([arrayBufferView], { type: response.headers['content-type'] });
                // assign the result
                result = {
                    data: {
                        buffer,
                        blob
                    },
                    size: response.data.byteLength,
                    headers: response.headers
                };
            }
            catch (e) {
                // log the error and return undefined
                this._logger.error(`Failed to load texture: ${e}`);
            }
            // return undefined if the texture could not be loaded
            // that way the loading can be continued without the texture
            return result;
        });
    }
    /**
     * Add the data loading options from a session.
     *
     * @param sessionId
     */
    removeDataLoading(sessionId) {
        delete this._sessionLoading[sessionId];
    }
    // #endregion Public Methods (5)
    // #region Private Methods (5)
    /**
     * Add
     *
     * @param key
     * @param value
     */
    addToCache(key, value) {
        // Remove items from the cache until the cache size is smaller than the maximum cache size.
        // Only resolved promises are evaluated, as unresolved promises don't add any size.
        while (this.calculateCacheSize() >= this._maxCacheSize) {
            // Remove the oldest entry if the cache is full
            const oldestKey = this._dataCache.keys().next().value;
            this._dataCache.delete(oldestKey);
        }
        const timestamp = Date.now();
        this._dataCache.set(key, { value, timestamp, resolved: false });
        // once the promise resolves, set resolved and size properties
        value.then((promiseResult) => {
            const size = promiseResult.size ? promiseResult.size : promiseResult.data.byteLength;
            this._dataCache.set(key, { value, timestamp, resolved: true, size });
        }).catch(e => { throw this.convertError(e); });
    }
    /**
     * Calculate the current cache size from all resolved promises.
     *
     * @returns
     */
    calculateCacheSize() {
        let size = 0;
        this._dataCache.forEach(value => {
            if (value.resolved === true)
                size += value.size;
        });
        return size;
    }
    /**
     * Get the value of an object from the cache.
     *
     * @param key
     * @returns
     */
    getFromCache(key) {
        const cachedObject = this._dataCache.get(key);
        this._dataCache.set(key, { value: cachedObject.value, timestamp: Date.now(), resolved: cachedObject.resolved, size: cachedObject.size });
        return cachedObject.value;
    }
    /**
     * Get the session id of the provided href.
     *
     * @param href
     * @returns
     */
    getSessionId(href) {
        // searching for "/session/SESSION_ID/{'output' | 'export' | 'texture'}/ASSET_DATA"
        const parts = href.split('/');
        const sessionPartIndex = parts.indexOf('session');
        // There have to be at exactly 4 parts, including the session
        if (sessionPartIndex !== -1 && parts.length === sessionPartIndex + 4) {
            const sessionId = parts[sessionPartIndex + 1];
            // no such session has been registered, should never happen
            if (!this._sessionLoading[sessionId])
                return;
            return sessionId;
        }
        return;
    }
    /**
     * Convert the provided href to a data cache key.
     * In this conversion the excludedQueryParameters are removed from the href.
     *
     * @param href
     * @returns
     */
    hrefToDataKey(href) {
        const url = new URL(href);
        // Create a URLSearchParams object from the existing query parameters
        const params = new URLSearchParams(url.search);
        for (let i = 0; i < this._excludedQueryParameters.length; i++)
            // Remove specific query parameters
            params.delete(this._excludedQueryParameters[i]);
        // Reconstruct the URL with the modified query parameters
        url.search = params.toString();
        const hrefAsKey = url.toString();
        return (0, base64_1.btoaCustom)(hrefAsKey);
    }
}
exports.HttpClient = HttpClient;
//# sourceMappingURL=HttpClient.js.map

/***/ }),

/***/ 8389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isViewerWebGLError = exports.isViewerEnvironmentMapError = exports.isViewerDataProcessingError = exports.isViewerUnknownError = exports.isViewerError = exports.ShapeDiverGeometryBackendResponseErrorType = exports.ShapeDiverGeometryBackendResponseError = exports.ShapeDiverGeometryBackendRequestError = exports.ShapeDiverGeometryBackendError = exports.ShapeDiverViewerDrawingToolsError = exports.ShapeDiverViewerInteractionError = exports.ShapeDiverViewerValidationError = exports.ShapeDiverViewerCameraError = exports.ShapeDiverViewerLightError = exports.ShapeDiverViewerArError = exports.ShapeDiverViewerUnknownError = exports.ShapeDiverViewerViewportError = exports.ShapeDiverViewerSessionError = exports.ShapeDiverViewerSettingsError = exports.ShapeDiverViewerWebGLError = exports.ShapeDiverViewerEnvironmentMapError = exports.ShapeDiverViewerDataProcessingError = exports.ShapeDiverViewerError = exports.ShapeDiverViewerErrorType = exports.LOGGING_LEVEL = exports.Logger = exports.InputValidator = exports.TypeChecker = exports.Converter = exports.UuidGenerator = exports.HttpClient = exports.DomEventEngine = exports.SystemInfo = exports.StatePromise = exports.StateEngine = exports.SESSION_SETTINGS_MODE = exports.SettingsEngine = exports.EVENTTYPE_TASK = exports.EVENTTYPE_DRAWING_TOOLS = exports.EVENTTYPE_GUMBALL = exports.EVENTTYPE_INTERACTION = exports.EVENTTYPE_VIEWPORT = exports.EVENTTYPE_SESSION = exports.EVENTTYPE_SCENE = exports.EVENTTYPE_RENDERING = exports.EVENTTYPE_PARAMETER = exports.EVENTTYPE_OUTPUT = exports.EVENTTYPE_CAMERA = exports.EVENTTYPE = exports.EventEngine = void 0;
exports.stringify = exports.isValid = exports.btoaCustom = exports.atobCustom = exports.PerformanceEvaluator = exports.isViewerGeometryBackendResponseError = exports.isViewerGeometryBackendRequestError = exports.isViewerGeometryBackendGenericError = exports.isViewerGeometryBackendError = exports.isViewerDrawingToolsError = exports.isViewerInteractionError = exports.isViewerValidationError = exports.isARError = exports.isViewerCameraError = exports.isViewerLightError = exports.isViewerViewportError = exports.isViewerSessionError = exports.isViewerSettingsError = void 0;
const base64_1 = __webpack_require__(96847);
Object.defineProperty(exports, "atobCustom", ({ enumerable: true, get: function () { return base64_1.atobCustom; } }));
Object.defineProperty(exports, "btoaCustom", ({ enumerable: true, get: function () { return base64_1.btoaCustom; } }));
const Converter_1 = __webpack_require__(44626);
Object.defineProperty(exports, "Converter", ({ enumerable: true, get: function () { return Converter_1.Converter; } }));
const DomEventEngine_1 = __webpack_require__(78528);
Object.defineProperty(exports, "DomEventEngine", ({ enumerable: true, get: function () { return DomEventEngine_1.DomEventEngine; } }));
const EventEngine_1 = __webpack_require__(13705);
Object.defineProperty(exports, "EventEngine", ({ enumerable: true, get: function () { return EventEngine_1.EventEngine; } }));
const EventTypes_1 = __webpack_require__(91934);
Object.defineProperty(exports, "EVENTTYPE", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE; } }));
Object.defineProperty(exports, "EVENTTYPE_CAMERA", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_CAMERA; } }));
Object.defineProperty(exports, "EVENTTYPE_DRAWING_TOOLS", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_DRAWING_TOOLS; } }));
Object.defineProperty(exports, "EVENTTYPE_GUMBALL", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_GUMBALL; } }));
Object.defineProperty(exports, "EVENTTYPE_INTERACTION", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_INTERACTION; } }));
Object.defineProperty(exports, "EVENTTYPE_OUTPUT", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_OUTPUT; } }));
Object.defineProperty(exports, "EVENTTYPE_PARAMETER", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_PARAMETER; } }));
Object.defineProperty(exports, "EVENTTYPE_RENDERING", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_RENDERING; } }));
Object.defineProperty(exports, "EVENTTYPE_SCENE", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_SCENE; } }));
Object.defineProperty(exports, "EVENTTYPE_SESSION", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_SESSION; } }));
Object.defineProperty(exports, "EVENTTYPE_TASK", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_TASK; } }));
Object.defineProperty(exports, "EVENTTYPE_VIEWPORT", ({ enumerable: true, get: function () { return EventTypes_1.EVENTTYPE_VIEWPORT; } }));
const HttpClient_1 = __webpack_require__(41263);
Object.defineProperty(exports, "HttpClient", ({ enumerable: true, get: function () { return HttpClient_1.HttpClient; } }));
const InputValidator_1 = __webpack_require__(30579);
Object.defineProperty(exports, "InputValidator", ({ enumerable: true, get: function () { return InputValidator_1.InputValidator; } }));
const ErrorTypeGuards_1 = __webpack_require__(57926);
Object.defineProperty(exports, "isARError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isARError; } }));
Object.defineProperty(exports, "isViewerCameraError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerCameraError; } }));
Object.defineProperty(exports, "isViewerDataProcessingError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerDataProcessingError; } }));
Object.defineProperty(exports, "isViewerDrawingToolsError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerDrawingToolsError; } }));
Object.defineProperty(exports, "isViewerEnvironmentMapError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerEnvironmentMapError; } }));
Object.defineProperty(exports, "isViewerError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerGeometryBackendError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendGenericError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerGeometryBackendGenericError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendRequestError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerGeometryBackendRequestError; } }));
Object.defineProperty(exports, "isViewerGeometryBackendResponseError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerGeometryBackendResponseError; } }));
Object.defineProperty(exports, "isViewerInteractionError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerInteractionError; } }));
Object.defineProperty(exports, "isViewerLightError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerLightError; } }));
Object.defineProperty(exports, "isViewerSessionError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerSessionError; } }));
Object.defineProperty(exports, "isViewerSettingsError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerSettingsError; } }));
Object.defineProperty(exports, "isViewerUnknownError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerUnknownError; } }));
Object.defineProperty(exports, "isViewerValidationError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerValidationError; } }));
Object.defineProperty(exports, "isViewerViewportError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerViewportError; } }));
Object.defineProperty(exports, "isViewerWebGLError", ({ enumerable: true, get: function () { return ErrorTypeGuards_1.isViewerWebGLError; } }));
const ParameterUtils_1 = __webpack_require__(18889);
Object.defineProperty(exports, "isValid", ({ enumerable: true, get: function () { return ParameterUtils_1.isValid; } }));
Object.defineProperty(exports, "stringify", ({ enumerable: true, get: function () { return ParameterUtils_1.stringify; } }));
const Logger_1 = __webpack_require__(43940);
Object.defineProperty(exports, "Logger", ({ enumerable: true, get: function () { return Logger_1.Logger; } }));
Object.defineProperty(exports, "LOGGING_LEVEL", ({ enumerable: true, get: function () { return Logger_1.LOGGING_LEVEL; } }));
const PerformanceEvaluator_1 = __webpack_require__(77425);
Object.defineProperty(exports, "PerformanceEvaluator", ({ enumerable: true, get: function () { return PerformanceEvaluator_1.PerformanceEvaluator; } }));
const SettingsEngine_1 = __webpack_require__(59341);
Object.defineProperty(exports, "SESSION_SETTINGS_MODE", ({ enumerable: true, get: function () { return SettingsEngine_1.SESSION_SETTINGS_MODE; } }));
Object.defineProperty(exports, "SettingsEngine", ({ enumerable: true, get: function () { return SettingsEngine_1.SettingsEngine; } }));
const ShapeDiverBackendErrors_1 = __webpack_require__(81956);
Object.defineProperty(exports, "ShapeDiverGeometryBackendError", ({ enumerable: true, get: function () { return ShapeDiverBackendErrors_1.ShapeDiverGeometryBackendError; } }));
Object.defineProperty(exports, "ShapeDiverGeometryBackendRequestError", ({ enumerable: true, get: function () { return ShapeDiverBackendErrors_1.ShapeDiverGeometryBackendRequestError; } }));
Object.defineProperty(exports, "ShapeDiverGeometryBackendResponseError", ({ enumerable: true, get: function () { return ShapeDiverBackendErrors_1.ShapeDiverGeometryBackendResponseError; } }));
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
Object.defineProperty(exports, "ShapeDiverGeometryBackendResponseErrorType", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseErrorType; } }));
const ShapeDiverViewerErrors_1 = __webpack_require__(39230);
Object.defineProperty(exports, "ShapeDiverViewerArError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerArError; } }));
Object.defineProperty(exports, "ShapeDiverViewerCameraError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerCameraError; } }));
Object.defineProperty(exports, "ShapeDiverViewerDataProcessingError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerDataProcessingError; } }));
Object.defineProperty(exports, "ShapeDiverViewerDrawingToolsError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerDrawingToolsError; } }));
Object.defineProperty(exports, "ShapeDiverViewerEnvironmentMapError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerEnvironmentMapError; } }));
Object.defineProperty(exports, "ShapeDiverViewerInteractionError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerInteractionError; } }));
Object.defineProperty(exports, "ShapeDiverViewerLightError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerLightError; } }));
Object.defineProperty(exports, "ShapeDiverViewerSessionError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError; } }));
Object.defineProperty(exports, "ShapeDiverViewerSettingsError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerSettingsError; } }));
Object.defineProperty(exports, "ShapeDiverViewerUnknownError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerUnknownError; } }));
Object.defineProperty(exports, "ShapeDiverViewerValidationError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerValidationError; } }));
Object.defineProperty(exports, "ShapeDiverViewerViewportError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerViewportError; } }));
Object.defineProperty(exports, "ShapeDiverViewerWebGLError", ({ enumerable: true, get: function () { return ShapeDiverViewerErrors_1.ShapeDiverViewerWebGLError; } }));
const ShapeDiverError_1 = __webpack_require__(78409);
Object.defineProperty(exports, "ShapeDiverViewerError", ({ enumerable: true, get: function () { return ShapeDiverError_1.ShapeDiverViewerError; } }));
Object.defineProperty(exports, "ShapeDiverViewerErrorType", ({ enumerable: true, get: function () { return ShapeDiverError_1.ShapeDiverViewerErrorType; } }));
const StateEngine_1 = __webpack_require__(20547);
Object.defineProperty(exports, "StateEngine", ({ enumerable: true, get: function () { return StateEngine_1.StateEngine; } }));
const StatePromise_1 = __webpack_require__(5748);
Object.defineProperty(exports, "StatePromise", ({ enumerable: true, get: function () { return StatePromise_1.StatePromise; } }));
const SystemInfo_1 = __webpack_require__(83917);
Object.defineProperty(exports, "SystemInfo", ({ enumerable: true, get: function () { return SystemInfo_1.SystemInfo; } }));
const TypeChecker_1 = __webpack_require__(78392);
Object.defineProperty(exports, "TypeChecker", ({ enumerable: true, get: function () { return TypeChecker_1.TypeChecker; } }));
const UuidGenerator_1 = __webpack_require__(16365);
Object.defineProperty(exports, "UuidGenerator", ({ enumerable: true, get: function () { return UuidGenerator_1.UuidGenerator; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 30579:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InputValidator = void 0;
const dompurify_1 = __importDefault(__webpack_require__(42838));
const Logger_1 = __webpack_require__(43940);
const ShapeDiverViewerErrors_1 = __webpack_require__(39230);
const TypeChecker_1 = __webpack_require__(78392);
class InputValidator {
    constructor() {
        // #region Properties (3)
        this._logger = Logger_1.Logger.instance;
        this._typeChecker = TypeChecker_1.TypeChecker.instance;
        // #endregion Private Methods (1)
    }
    // #endregion Properties (3)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (2)
    sanitize(input) {
        return dompurify_1.default.sanitize(input);
    }
    validateAndError(scope, value, type, defined = true, enumValues = []) {
        const res = this.validate(value, type, defined, enumValues);
        if (res)
            return;
        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerValidationError(`${scope}: Input could not be validated. ${value} is not of type ${type}.${defined === false ? ' (Can also be undefined)' : ''}`, value, type);
    }
    // #endregion Public Methods (2)
    // #region Private Methods (1)
    validate(value, stringLiteral, defined = true, enumValues = []) {
        if (defined === false && typeof value === 'undefined')
            return true;
        switch (stringLiteral) {
            case 'array':
                if (Array.isArray(value))
                    return true;
                break;
            case 'string':
                if (this._typeChecker.isTypeOf(value, 'string'))
                    return true;
                break;
            case 'boolean':
                if (this._typeChecker.isTypeOf(value, 'boolean'))
                    return true;
                break;
            case 'function':
                if (this._typeChecker.isTypeOf(value, 'function'))
                    return true;
                break;
            case 'number':
                if (this._typeChecker.isTypeOf(value, 'number') && !isNaN(value))
                    return true;
                break;
            case 'factor':
                if (this._typeChecker.isTypeOf(value, 'number') && value >= 0 && value <= 1)
                    return true;
                break;
            case 'positive':
                if (this._typeChecker.isTypeOf(value, 'number') && value >= 0)
                    return true;
                break;
            case 'HTMLCanvasElement':
                if (this._typeChecker.isHTMLCanvasElement(value))
                    return true;
                break;
            case 'enum':
                if (this._typeChecker.isTypeOf(value, 'string') && enumValues.includes(value))
                    return true;
                break;
            case 'vec3':
                if (value.constructor === Float32Array)
                    value = Array.from(value);
                if (Array.isArray(value) && this._typeChecker.isTypeOf(value[0], 'number') && this._typeChecker.isTypeOf(value[1], 'number') && this._typeChecker.isTypeOf(value[2], 'number'))
                    return true;
                break;
            case 'quat':
                if (value.constructor === Float32Array)
                    value = Array.from(value);
                if (Array.isArray(value) && this._typeChecker.isTypeOf(value[0], 'number') && this._typeChecker.isTypeOf(value[1], 'number') && this._typeChecker.isTypeOf(value[2], 'number') && this._typeChecker.isTypeOf(value[3], 'number'))
                    return true;
                break;
            case 'cubeMap':
                if (Array.isArray(value) && value.length === 6 && this._typeChecker.isTypeOf(value[0], 'string') && this._typeChecker.isTypeOf(value[1], 'string') && this._typeChecker.isTypeOf(value[2], 'string') && this._typeChecker.isTypeOf(value[3], 'string') && this._typeChecker.isTypeOf(value[4], 'string') && this._typeChecker.isTypeOf(value[5], 'string'))
                    return true;
                if (this._typeChecker.isTypeOf(value, 'string'))
                    return true;
                break;
            case 'stringArray':
                if (Array.isArray(value)) {
                    let check = true;
                    for (let i = 0; i < value.length; i++)
                        if (typeof value[i] !== 'string')
                            check = false;
                    if (check === true)
                        return true;
                }
                break;
            case 'object':
                if (this._typeChecker.isTypeOf(value, 'object'))
                    return true;
                break;
            case 'file':
                if (this._typeChecker.isTypeOf(value, 'string') || value instanceof File || value instanceof Blob)
                    return true;
                break;
            case 'color':
                if (this._typeChecker.isTypeOf(value, 'string') || (Array.isArray(value) && this._typeChecker.isTypeOf(value[0], 'number') && this._typeChecker.isTypeOf(value[1], 'number') && this._typeChecker.isTypeOf(value[2], 'number')) || this._typeChecker.isTypeOf(value, 'number'))
                    return true;
                break;
            case 'mat4':
                if (value.constructor === Float32Array)
                    value = Array.from(value);
                if (Array.isArray(value) && this._typeChecker.isTypeOf(value[0], 'number') && this._typeChecker.isTypeOf(value[1], 'number') && this._typeChecker.isTypeOf(value[2], 'number') && this._typeChecker.isTypeOf(value[3], 'number')
                    && this._typeChecker.isTypeOf(value[4], 'number') && this._typeChecker.isTypeOf(value[5], 'number') && this._typeChecker.isTypeOf(value[6], 'number') && this._typeChecker.isTypeOf(value[7], 'number')
                    && this._typeChecker.isTypeOf(value[8], 'number') && this._typeChecker.isTypeOf(value[9], 'number') && this._typeChecker.isTypeOf(value[10], 'number') && this._typeChecker.isTypeOf(value[11], 'number')
                    && this._typeChecker.isTypeOf(value[12], 'number') && this._typeChecker.isTypeOf(value[13], 'number') && this._typeChecker.isTypeOf(value[14], 'number') && this._typeChecker.isTypeOf(value[15], 'number'))
                    return true;
                break;
            default:
                return false;
        }
        return false;
    }
}
exports.InputValidator = InputValidator;
//# sourceMappingURL=InputValidator.js.map

/***/ }),

/***/ 57926:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isViewerGeometryBackendResponseError = exports.isViewerGeometryBackendRequestError = exports.isViewerGeometryBackendGenericError = exports.isViewerGeometryBackendError = exports.isViewerDrawingToolsError = exports.isViewerInteractionError = exports.isViewerValidationError = exports.isARError = exports.isViewerCameraError = exports.isViewerLightError = exports.isViewerViewportError = exports.isViewerSessionError = exports.isViewerSettingsError = exports.isViewerWebGLError = exports.isViewerEnvironmentMapError = exports.isViewerDataProcessingError = exports.isViewerUnknownError = exports.isViewerError = void 0;
const ShapeDiverError_1 = __webpack_require__(78409);
/** Type guard for all error types of the viewer package. */
function isViewerError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        Object.values(ShapeDiverError_1.ShapeDiverViewerErrorType).includes(e.errorType);
}
exports.isViewerError = isViewerError;
/** Type guard for an unknown viewer error. */
function isViewerUnknownError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.UNKNOWN;
}
exports.isViewerUnknownError = isViewerUnknownError;
/** Type guard for a data processing viewer error. */
function isViewerDataProcessingError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.DATA_PROCESSING_ERROR;
}
exports.isViewerDataProcessingError = isViewerDataProcessingError;
/** Type guard for a environment map viewer error. */
function isViewerEnvironmentMapError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.ENVIRONMENT_MAP_ERROR;
}
exports.isViewerEnvironmentMapError = isViewerEnvironmentMapError;
/** Type guard for a webGL viewer error. */
function isViewerWebGLError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.WEBGL_ERROR;
}
exports.isViewerWebGLError = isViewerWebGLError;
/** Type guard for a settings viewer error. */
function isViewerSettingsError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.SETTINGS_ERROR;
}
exports.isViewerSettingsError = isViewerSettingsError;
/** Type guard for a session viewer error. */
function isViewerSessionError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.SESSION_ERROR;
}
exports.isViewerSessionError = isViewerSessionError;
/** Type guard for a viewport viewer error. */
function isViewerViewportError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.VIEWPORT_ERROR;
}
exports.isViewerViewportError = isViewerViewportError;
/** Type guard for a light viewer error. */
function isViewerLightError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.LIGHT_ERROR;
}
exports.isViewerLightError = isViewerLightError;
/** Type guard for a camera viewer error. */
function isViewerCameraError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.CAMERA_ERROR;
}
exports.isViewerCameraError = isViewerCameraError;
/** Type guard for an AR viewer error. */
function isARError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.AR_ERROR;
}
exports.isARError = isARError;
/** Type guard for a validation viewer error. */
function isViewerValidationError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.VALIDATION_ERROR;
}
exports.isViewerValidationError = isViewerValidationError;
/** Type guard for a interaction viewer error. */
function isViewerInteractionError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.INTERACTION_ERROR;
}
exports.isViewerInteractionError = isViewerInteractionError;
/** Type guard for a drawing tools viewer error. */
function isViewerDrawingToolsError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.DRAWING_TOOLS_ERROR;
}
exports.isViewerDrawingToolsError = isViewerDrawingToolsError;
/** Type guard for all error types of the Geometry Backend SDK package that are mapped to viewer errors. */
function isViewerGeometryBackendError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_ERROR || e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_REQUEST_ERROR || e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_REQUEST_ERROR;
}
exports.isViewerGeometryBackendError = isViewerGeometryBackendError;
/** Type guard for a Geometry Backend SDK generic error that is mapped to a viewer error. */
function isViewerGeometryBackendGenericError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_ERROR;
}
exports.isViewerGeometryBackendGenericError = isViewerGeometryBackendGenericError;
/** Type guard for a Geometry Backend SDK request error that is mapped to a viewer error. */
function isViewerGeometryBackendRequestError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_REQUEST_ERROR;
}
exports.isViewerGeometryBackendRequestError = isViewerGeometryBackendRequestError;
/** Type guard for a Geometry Backend SDK response error that is mapped to a viewer error. */
function isViewerGeometryBackendResponseError(e) {
    return e instanceof Error &&
        "errorType" in e &&
        e.errorType === ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_RESPONSE_ERROR;
}
exports.isViewerGeometryBackendResponseError = isViewerGeometryBackendResponseError;
//# sourceMappingURL=ErrorTypeGuards.js.map

/***/ }),

/***/ 43940:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Logger = exports.LOGGING_LEVEL = void 0;
var LOGGING_LEVEL;
(function (LOGGING_LEVEL) {
    LOGGING_LEVEL["NONE"] = "none";
    LOGGING_LEVEL["ERROR"] = "error";
    LOGGING_LEVEL["FATAL"] = "fatal";
    LOGGING_LEVEL["WARN"] = "warn";
    LOGGING_LEVEL["INFO"] = "info";
    LOGGING_LEVEL["DEBUG"] = "debug";
    LOGGING_LEVEL["DEBUG_HIGH"] = "debug_high";
    LOGGING_LEVEL["DEBUG_MEDIUM"] = "debug_medium";
    LOGGING_LEVEL["DEBUG_LOW"] = "debug_low";
})(LOGGING_LEVEL = exports.LOGGING_LEVEL || (exports.LOGGING_LEVEL = {}));
class Logger {
    constructor() {
        // #region Properties (8)
        this._loggingLevel = LOGGING_LEVEL.WARN;
        this._showMessages = true;
        // #endregion Private Methods (2)
    }
    // #endregion Properties (8)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Accessors (4)
    get loggingLevel() {
        return this._loggingLevel;
    }
    set loggingLevel(value) {
        this._loggingLevel = value;
    }
    get showMessages() {
        return this._showMessages;
    }
    set showMessages(value) {
        this._showMessages = value;
    }
    // #endregion Public Accessors (4)
    // #region Public Methods (11)
    /**
     * Logging a debug message.
     * @param msg the message
     */
    debug(msg) {
        if (this.canLog(LOGGING_LEVEL.DEBUG) && this.showMessages === true)
            console.debug('(DEBUG) ' + this.messageConstruction(msg));
    }
    /**
     * Logging a debug message with high priority.
     * @param msg the message
     */
    debugHigh(msg) {
        if (this.canLog(LOGGING_LEVEL.DEBUG_HIGH) && this.showMessages === true)
            console.debug('(DEBUG_HIGH) ' + this.messageConstruction(msg));
    }
    /**
     * Logging a debug message with low priority.
     * @param msg the message
     */
    debugLow(msg) {
        if (this.canLog(LOGGING_LEVEL.DEBUG_LOW) && this.showMessages === true)
            console.debug('(DEBUG_LOW) ' + this.messageConstruction(msg));
    }
    /**
     * Logging a debug message with medium priority.
     * @param msg the message
     */
    debugMedium(msg) {
        if (this.canLog(LOGGING_LEVEL.DEBUG_MEDIUM) && this.showMessages === true)
            console.debug('(DEBUG_MEDIUM) ' + this.messageConstruction(msg));
    }
    /**
     * Logging an error.
     * @param msg the message
     */
    error(msg) {
        if (this.canLog(LOGGING_LEVEL.ERROR) && this.showMessages === true)
            console.error('(ERROR) ' + this.messageConstruction(msg));
    }
    /**
     * Logging a fatal error.
     * @param msg the message
     */
    fatal(msg) {
        if (this.canLog(LOGGING_LEVEL.FATAL) && this.showMessages === true)
            console.error('(FATAL) ' + this.messageConstruction(msg));
    }
    /**
     * Logging an info.
     * @param msg the message
     */
    info(msg) {
        if (this.canLog(LOGGING_LEVEL.INFO) && this.showMessages === true)
            console.info('(INFO) ' + this.messageConstruction(msg));
    }
    /**
     * Logging a warning.
     * @param msg the message
     */
    warn(msg) {
        if (this.canLog(LOGGING_LEVEL.WARN) && this.showMessages === true)
            console.warn('(WARN) ' + this.messageConstruction(msg));
    }
    // #endregion Public Methods (11)
    // #region Private Methods (2)
    canLog(loggingLevel) {
        switch (this.loggingLevel) {
            case LOGGING_LEVEL.ERROR:
                if (loggingLevel === LOGGING_LEVEL.FATAL)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.WARN)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.INFO)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_HIGH)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_MEDIUM)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_LOW)
                    return false;
            case LOGGING_LEVEL.FATAL:
                if (loggingLevel === LOGGING_LEVEL.WARN)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.INFO)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_HIGH)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_MEDIUM)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_LOW)
                    return false;
            case LOGGING_LEVEL.WARN:
                if (loggingLevel === LOGGING_LEVEL.INFO)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_HIGH)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_MEDIUM)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_LOW)
                    return false;
            case LOGGING_LEVEL.INFO:
                if (loggingLevel === LOGGING_LEVEL.DEBUG)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_HIGH)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_MEDIUM)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_LOW)
                    return false;
            case LOGGING_LEVEL.DEBUG_HIGH:
                if (loggingLevel === LOGGING_LEVEL.DEBUG_MEDIUM)
                    return false;
                if (loggingLevel === LOGGING_LEVEL.DEBUG_LOW)
                    return false;
            case LOGGING_LEVEL.DEBUG_MEDIUM:
                if (loggingLevel === LOGGING_LEVEL.DEBUG_LOW)
                    return false;
            case LOGGING_LEVEL.DEBUG_LOW:
            case LOGGING_LEVEL.DEBUG:
            default:
                return true;
        }
    }
    messageConstruction(msg) {
        return new Date().toISOString() + ': ' + msg;
    }
}
exports.Logger = Logger;
//# sourceMappingURL=Logger.js.map

/***/ }),

/***/ 81956:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverGeometryBackendError = exports.ShapeDiverGeometryBackendResponseError = exports.ShapeDiverGeometryBackendRequestError = void 0;
const ShapeDiverError_1 = __webpack_require__(78409);
class ShapeDiverGeometryBackendRequestError extends ShapeDiverError_1.ShapeDiverViewerError {
    // #region Constructors (1)
    constructor(message, desc) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_REQUEST_ERROR, desc, message);
        this.desc = desc;
    }
}
exports.ShapeDiverGeometryBackendRequestError = ShapeDiverGeometryBackendRequestError;
class ShapeDiverGeometryBackendResponseError extends ShapeDiverError_1.ShapeDiverViewerError {
    // #region Constructors (1)
    constructor(message, status, geometryBackendErrorType, desc) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_RESPONSE_ERROR, desc, message);
        this.status = status;
        this.geometryBackendErrorType = geometryBackendErrorType;
        this.desc = desc;
    }
}
exports.ShapeDiverGeometryBackendResponseError = ShapeDiverGeometryBackendResponseError;
class ShapeDiverGeometryBackendError extends ShapeDiverError_1.ShapeDiverViewerError {
    // #region Constructors (1)
    constructor(message) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.GEOMETRY_BACKEND_ERROR, "A generic geometry backend error occurred.", message);
    }
}
exports.ShapeDiverGeometryBackendError = ShapeDiverGeometryBackendError;
//# sourceMappingURL=ShapeDiverBackendErrors.js.map

/***/ }),

/***/ 78409:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverViewerError = exports.ShapeDiverError = exports.ShapeDiverViewerErrorType = void 0;
var ShapeDiverViewerErrorType;
(function (ShapeDiverViewerErrorType) {
    ShapeDiverViewerErrorType["AR_ERROR"] = "SdARError";
    ShapeDiverViewerErrorType["GEOMETRY_BACKEND_ERROR"] = "SdGeometryBackendError";
    ShapeDiverViewerErrorType["GEOMETRY_BACKEND_REQUEST_ERROR"] = "SdGeometryBackendRequestError";
    ShapeDiverViewerErrorType["GEOMETRY_BACKEND_RESPONSE_ERROR"] = "SdGeometryBackendResponseError";
    ShapeDiverViewerErrorType["CAMERA_ERROR"] = "SdCameraError";
    ShapeDiverViewerErrorType["CONNECTION_ERROR"] = "SdConnectionError";
    ShapeDiverViewerErrorType["DATA_PROCESSING_ERROR"] = "SdDataProcessingError";
    ShapeDiverViewerErrorType["DRAWING_TOOLS_ERROR"] = "SdDrawingToolsError";
    ShapeDiverViewerErrorType["ENVIRONMENT_MAP_ERROR"] = "SdEnvironmentMapError";
    ShapeDiverViewerErrorType["INTERACTION_ERROR"] = "SdInteractionError";
    ShapeDiverViewerErrorType["LIGHT_ERROR"] = "SdLightError";
    ShapeDiverViewerErrorType["SESSION_ERROR"] = "SdSessionError";
    ShapeDiverViewerErrorType["SETTINGS_ERROR"] = "SdSettingsError";
    ShapeDiverViewerErrorType["VALIDATION_ERROR"] = "SdValidationError";
    ShapeDiverViewerErrorType["VIEWPORT_ERROR"] = "SdViewerError";
    ShapeDiverViewerErrorType["WEBGL_ERROR"] = "SdWebGLError";
    ShapeDiverViewerErrorType["UNKNOWN"] = "";
})(ShapeDiverViewerErrorType = exports.ShapeDiverViewerErrorType || (exports.ShapeDiverViewerErrorType = {}));
class ShapeDiverError extends Error {
    // #region Constructors (1)
    constructor(message) {
        super(message);
    }
}
exports.ShapeDiverError = ShapeDiverError;
class ShapeDiverViewerError extends ShapeDiverError {
    constructor(errorType, desc, message) {
        super(message);
        this.desc = desc;
        // #region Constructors (1)
        this.errorType = ShapeDiverViewerErrorType.UNKNOWN;
        this.errorType = (Object.values(ShapeDiverViewerErrorType).includes(errorType))
            ? errorType
            : ShapeDiverViewerErrorType.UNKNOWN;
    }
}
exports.ShapeDiverViewerError = ShapeDiverViewerError;
//# sourceMappingURL=ShapeDiverError.js.map

/***/ }),

/***/ 39230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverViewerDrawingToolsError = exports.ShapeDiverViewerInteractionError = exports.ShapeDiverViewerValidationError = exports.ShapeDiverViewerArError = exports.ShapeDiverViewerCameraError = exports.ShapeDiverViewerLightError = exports.ShapeDiverViewerViewportError = exports.ShapeDiverViewerSessionError = exports.ShapeDiverViewerSettingsError = exports.ShapeDiverViewerWebGLError = exports.ShapeDiverViewerEnvironmentMapError = exports.ShapeDiverViewerDataProcessingError = exports.ShapeDiverViewerUnknownError = void 0;
const ShapeDiverError_1 = __webpack_require__(78409);
class ShapeDiverViewerUnknownError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.UNKNOWN, 'An unknown error occurred.', message);
        this.message = message;
        this.errorObject = errorObject;
        if (Error.captureStackTrace !== undefined)
            Error.captureStackTrace(this, ShapeDiverViewerUnknownError);
    }
}
exports.ShapeDiverViewerUnknownError = ShapeDiverViewerUnknownError;
class ShapeDiverViewerDataProcessingError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.DATA_PROCESSING_ERROR, 'An error occurred while processing data.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerDataProcessingError = ShapeDiverViewerDataProcessingError;
class ShapeDiverViewerEnvironmentMapError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, url, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.ENVIRONMENT_MAP_ERROR, 'An error occurred while loading the environment map.', message);
        this.message = message;
        this.url = url;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerEnvironmentMapError = ShapeDiverViewerEnvironmentMapError;
class ShapeDiverViewerWebGLError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.WEBGL_ERROR, 'An error occurred regarding to the WebGL context.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerWebGLError = ShapeDiverViewerWebGLError;
class ShapeDiverViewerSettingsError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.SETTINGS_ERROR, 'An error occurred while loading the settings.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerSettingsError = ShapeDiverViewerSettingsError;
class ShapeDiverViewerSessionError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.SESSION_ERROR, 'An error occurred while working with the session.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerSessionError = ShapeDiverViewerSessionError;
class ShapeDiverViewerViewportError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.VIEWPORT_ERROR, 'An error occurred while working with the viewport.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerViewportError = ShapeDiverViewerViewportError;
class ShapeDiverViewerLightError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.LIGHT_ERROR, 'An error occurred while working with the lights.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerLightError = ShapeDiverViewerLightError;
class ShapeDiverViewerCameraError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.CAMERA_ERROR, 'An error occurred while working with the cameras.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerCameraError = ShapeDiverViewerCameraError;
class ShapeDiverViewerArError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.AR_ERROR, 'An error occurred while working with AR.', message);
        this.message = message;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerArError = ShapeDiverViewerArError;
class ShapeDiverViewerValidationError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message, value, requestedType, errorObject) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.VALIDATION_ERROR, 'An error occurred while validating the value.', message);
        this.message = message;
        this.value = value;
        this.requestedType = requestedType;
        this.errorObject = errorObject;
    }
}
exports.ShapeDiverViewerValidationError = ShapeDiverViewerValidationError;
class ShapeDiverViewerInteractionError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.INTERACTION_ERROR, 'An error occurred with interactions.', message);
        this.message = message;
    }
}
exports.ShapeDiverViewerInteractionError = ShapeDiverViewerInteractionError;
class ShapeDiverViewerDrawingToolsError extends ShapeDiverError_1.ShapeDiverViewerError {
    constructor(message) {
        super(ShapeDiverError_1.ShapeDiverViewerErrorType.INTERACTION_ERROR, 'An error occurred with drawing tools.', message);
        this.message = message;
    }
}
exports.ShapeDiverViewerDrawingToolsError = ShapeDiverViewerDrawingToolsError;
//# sourceMappingURL=ShapeDiverViewerErrors.js.map

/***/ }),

/***/ 18889:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.stringify = exports.isValid = void 0;
const InputValidator_1 = __webpack_require__(30579);
const api_geometry_api_dto_v2_1 = __webpack_require__(92442);
const ShapeDiverViewerErrors_1 = __webpack_require__(39230);
const Converter_1 = __webpack_require__(44626);
const isValid = (definition, value, throwError) => {
    try {
        return validateParameterValue(definition, value);
    }
    catch (e) {
        if (throwError)
            throw e;
        return false;
    }
};
exports.isValid = isValid;
const validateParameterValue = (definition, value) => {
    const { id, type, min, max, decimalplaces, choices, visualization } = definition;
    switch (true) {
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.BOOL:
            if (typeof value === 'string') {
                if (!(value === 'true' || value === 'false'))
                    throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} is a string that is neither true or false.`);
            }
            else {
                InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, value, 'boolean');
            }
            break;
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.COLOR:
            InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, value, 'color');
            break;
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.FILE:
            InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, value, 'file');
            break;
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.EVEN || type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.FLOAT || type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.INT || type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.ODD:
            {
                let temp = value;
                if (typeof value === 'string')
                    temp = +value;
                InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, temp, 'number');
                if (type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.EVEN) {
                    if (temp % 2 !== 0)
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} is not even.`);
                }
                else if (type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.ODD) {
                    if (temp % 2 === 0)
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} is not odd.`);
                }
                else if (type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.INT) {
                    if (!Number.isInteger(temp))
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} is not an integer.`);
                }
                if (min || min === 0)
                    if (temp < min)
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} is smaller than the minimum ${min}.`);
                if (max || max === 0)
                    if (temp > max)
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} is larger than the maximum ${max}.`);
                if (decimalplaces || decimalplaces === 0) {
                    const numStr = temp + '';
                    let decimalplaces = 0;
                    if (numStr.includes('.'))
                        decimalplaces = numStr.split('.')[1].length;
                    if (decimalplaces < decimalplaces)
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${value} has not the correct number of decimalplaces (${decimalplaces}).`);
                }
            }
            break;
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.STRINGLIST:
            {
                InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, value, 'string');
                const choicesChecker = (v) => {
                    // has to be a single value that is
                    // 1. convertible to number
                    // 2. between 0 and choices.length -1
                    const temp = +v;
                    InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, temp, 'number');
                    if (temp < 0 || temp > choices.length - 1)
                        throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${v} is not within the range of the defined number choices.`);
                };
                if (visualization === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterVisualization.CHECKLIST) {
                    // comma separated numbers
                    if (value.includes(',')) {
                        const values = value.split(',');
                        for (let i = 0; i < values.length; i++) {
                            if (values.filter(item => item === values[i]).length !== 1)
                                throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).isValid: The value ${values[i]} exists multiple times, but should only exist once.`);
                            choicesChecker(values[i]);
                        }
                    }
                    else {
                        // to number
                        let temp = value;
                        if (typeof value === 'string')
                            temp = +value;
                        InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, temp, 'number');
                        choicesChecker(value);
                    }
                }
                else {
                    // to number
                    let temp = value;
                    if (typeof value === 'string')
                        temp = +value;
                    InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, temp, 'number');
                    choicesChecker(value);
                }
                break;
            }
        default:
            InputValidator_1.InputValidator.instance.validateAndError(`Parameter(${id}).isValid`, value, 'string');
            break;
    }
    return true;
};
const stringify = (definition, value) => {
    const { id, type, decimalplaces } = definition;
    switch (true) {
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.BOOL:
            return typeof value === 'string' ? value : value + '';
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.COLOR:
            return Converter_1.Converter.instance.toHex8Color(value);
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.FILE:
            if (typeof value !== 'string')
                throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSessionError(`Parameter(${id}).stringify: Error in stringify. Cannot stringify FileParameter that has not been uploaded yet.`);
            return value;
        case type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.EVEN || type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.FLOAT || type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.INT || type === api_geometry_api_dto_v2_1.ShapeDiverResponseParameterType.ODD:
            if (typeof value === 'string') {
                // cast to number and round to decimalplaces if they exist
                if (decimalplaces || decimalplaces === 0) {
                    const number = +value;
                    return number.toFixed(decimalplaces);
                }
                else {
                    return value;
                }
            }
            else {
                // round to decimalplaces if they exist
                if (decimalplaces || decimalplaces === 0) {
                    return value.toFixed(decimalplaces);
                }
                else {
                    return value + '';
                }
            }
        default:
            return value;
    }
};
exports.stringify = stringify;
//# sourceMappingURL=ParameterUtils.js.map

/***/ }),

/***/ 77425:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerformanceEvaluator = void 0;
class PerformanceEvaluator {
    // #endregion Properties (2)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (8)
    /**
     * Continue the performance evaluation.
     *
     * @param id
     */
    continueSection(sectionId) {
        if (!this._eval)
            return;
        if (this._eval.end)
            return;
        if (!this._eval.section[sectionId])
            return;
        if (this._eval.section[sectionId].end)
            return;
        this._eval.section[sectionId].continued = performance.now();
    }
    /**
     * End the performance evaluation and calculate the duration.
     *
     * @param id
     */
    end() {
        if (!this._eval)
            return;
        if (this._eval.end)
            return;
        this._eval.end = performance.now();
        this._eval.duration = this._eval.end - this._eval.start;
    }
    /**
     * End the performance evaluation of a section and calculate the duration.
     *
     * @param id
     */
    endSection(sectionId) {
        if (!this._eval)
            return;
        if (this._eval.end)
            return;
        if (!this._eval.section[sectionId])
            return;
        if (this._eval.section[sectionId].end)
            return;
        this._eval.section[sectionId].end = performance.now();
        this._eval.section[sectionId].duration = (this._eval.section[sectionId].duration || 0) + (this._eval.section[sectionId].end - (this._eval.section[sectionId].continued || this._eval.section[sectionId].start));
    }
    /**
     * Get the evaluation data for a specific id.
     *
     * @param id
     */
    getEvaluation() {
        return this._eval;
    }
    /**
     * Get the evaluation data for a specific id.
     *
     * @param id
     */
    getEvaluationToString() {
        const e = this._eval;
        return `Performance Evaluation: ${e.duration}ms\n`;
    }
    /**
     * Pause the performance evaluation.
     *
     * @param id
     */
    pauseSection(sectionId) {
        if (!this._eval)
            return;
        if (this._eval.end)
            return;
        if (!this._eval.section[sectionId])
            return;
        if (this._eval.section[sectionId].end)
            return;
        this._eval.section[sectionId].duration = (this._eval.section[sectionId].duration || 0) + performance.now() - (this._eval.section[sectionId].continued || this._eval.section[sectionId].start);
    }
    /**
     * Start the evaluation with a specific id.
     *
     * @param id
     */
    start(time) {
        this._eval = {
            start: time || performance.now(),
            section: {}
        };
    }
    /**
     * Start the evaluation of a section with a specific id.
     *
     * @param id
     */
    startSection(sectionId, time) {
        if (!this._eval)
            return;
        if (this._eval.end)
            return;
        this._eval.section[sectionId] = {
            start: time || performance.now(),
        };
    }
}
exports.PerformanceEvaluator = PerformanceEvaluator;
//# sourceMappingURL=PerformanceEvaluator.js.map

/***/ }),

/***/ 59341:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SESSION_SETTINGS_MODE = exports.SettingsEngine = void 0;
const viewer_settings_1 = __webpack_require__(65199);
const ShapeDiverViewerErrors_1 = __webpack_require__(39230);
// #endregion Type aliases (8)
// #region Classes (1)
class SettingsEngine {
    constructor() {
        // #region Properties (4)
        this._settings = (0, viewer_settings_1.Defaults)();
        // #endregion Private Methods (1)
    }
    // #endregion Properties (4)
    // #region Public Getters And Setters (11)
    get ar() {
        return this._settings.ar;
    }
    get camera() {
        return this._settings.camera;
    }
    get environment() {
        return this._settings.environment;
    }
    get environmentGeometry() {
        return this._settings.environmentGeometry;
    }
    get general() {
        return this._settings.general;
    }
    get light() {
        return this._settings.light;
    }
    get rendering() {
        return this._settings.rendering;
    }
    get session() {
        return this._settings.session;
    }
    set session(value) {
        this._settings.session = value;
    }
    get settings() {
        return this._settings;
    }
    get settingsJson() {
        return this._settingsJson;
    }
    // #endregion Public Getters And Setters (11)
    // #region Public Methods (2)
    loadSettings(json) {
        this._settingsJson = json;
        if (JSON.stringify(json) !== JSON.stringify({})) {
            for (let i = 0; i < viewer_settings_1.previousVersion.length; i++) {
                const v = viewer_settings_1.previousVersion[i];
                try {
                    (0, viewer_settings_1.validate)(json, v);
                    this._settings = (0, viewer_settings_1.convert)(json, viewer_settings_1.latestVersion);
                    this.cleanSettings(this._settings);
                    return;
                }
                catch (e) {
                    // it's ok, we just try the next version
                    // only the latest version is expected to be valid
                }
            }
            try {
                (0, viewer_settings_1.validate)(json, viewer_settings_1.latestVersion);
                this._settings = (0, viewer_settings_1.convert)(json, viewer_settings_1.latestVersion);
                this.cleanSettings(this._settings);
                return;
            }
            catch (e) {
                throw new ShapeDiverViewerErrors_1.ShapeDiverViewerSettingsError('SettingsEngine.loadSettings: Settings could not be validated. ' + e.message, e);
            }
        }
        else {
            this._settings = (0, viewer_settings_1.Defaults)();
            return;
        }
    }
    reset() {
        this._settings = (0, viewer_settings_1.Defaults)();
    }
    // #endregion Public Methods (2)
    // #region Private Methods (1)
    cleanSettings(json) {
        for (const c in json.camera.cameras) {
            const camera = json.camera.cameras[c];
            if (camera.type === 'perspective') {
                const restrictions = camera.controls.restrictions;
                if (restrictions.position.cube.min.x === null)
                    restrictions.position.cube.min.x = -Infinity;
                if (restrictions.position.cube.min.y === null)
                    restrictions.position.cube.min.y = -Infinity;
                if (restrictions.position.cube.min.z === null)
                    restrictions.position.cube.min.z = -Infinity;
                if (restrictions.position.cube.max.x === null)
                    restrictions.position.cube.max.x = Infinity;
                if (restrictions.position.cube.max.y === null)
                    restrictions.position.cube.max.y = Infinity;
                if (restrictions.position.cube.max.z === null)
                    restrictions.position.cube.max.z = Infinity;
                if (restrictions.position.sphere.radius === null)
                    restrictions.position.sphere.radius = Infinity;
                if (restrictions.target.cube.min.x === null)
                    restrictions.target.cube.min.x = -Infinity;
                if (restrictions.target.cube.min.y === null)
                    restrictions.target.cube.min.y = -Infinity;
                if (restrictions.target.cube.min.z === null)
                    restrictions.target.cube.min.z = -Infinity;
                if (restrictions.target.cube.max.x === null)
                    restrictions.target.cube.max.x = Infinity;
                if (restrictions.target.cube.max.y === null)
                    restrictions.target.cube.max.y = Infinity;
                if (restrictions.target.cube.max.z === null)
                    restrictions.target.cube.max.z = Infinity;
                if (restrictions.target.sphere.radius === null)
                    restrictions.target.sphere.radius = Infinity;
                if (restrictions.rotation.minAzimuthAngle === null)
                    restrictions.rotation.minAzimuthAngle = -Infinity;
                if (restrictions.rotation.maxAzimuthAngle === null)
                    restrictions.rotation.maxAzimuthAngle = Infinity;
                if (restrictions.zoom.maxDistance === null)
                    restrictions.zoom.maxDistance = Infinity;
            }
        }
    }
}
exports.SettingsEngine = SettingsEngine;
// #endregion Classes (1)
// #region Enums (1)
/**
 * Session settings to be used by a viewport.
 *
 * The {@link https://help.shapediver.com/doc/Geometry-Backend.1863942173.html|ShapeDiver Geometry Backend}
 * allows to persist settings of the viewer, individually for each model that it hosts. Persisting the settings
 * of the viewer requires permissions which are typically only granted to the owner of the model. Editing
 * of the settings typically happens on the model edit page of the ShapeDiver Platform.
 *
 * Whenever an instance of the viewer creates a session with a model, the settings are made available to the viewer.
 * It is possible to use multiple sessions with different models from a single instance of the viewer.
 * Therefore the viewer offers a choice on which settings to use.
 */
var SESSION_SETTINGS_MODE;
(function (SESSION_SETTINGS_MODE) {
    /** No settings of a session will be used for the viewport. */
    SESSION_SETTINGS_MODE["NONE"] = "none";
    /**
     * The settings of the very first session created will be used for the viewport.
     */
    SESSION_SETTINGS_MODE["FIRST"] = "first";
    /**
     * Use this mode in case you want to assign a specific session identifier
     * to the viewport, whose settings will be used.
     */
    SESSION_SETTINGS_MODE["MANUAL"] = "manual";
})(SESSION_SETTINGS_MODE = exports.SESSION_SETTINGS_MODE || (exports.SESSION_SETTINGS_MODE = {}));
// #endregion Enums (1)
//# sourceMappingURL=SettingsEngine.js.map

/***/ }),

/***/ 20547:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.StateEngine = void 0;
const StatePromise_1 = __webpack_require__(5748);
class StateEngine {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor() {
        // #region Properties (4)
        this._fontLoaded = new StatePromise_1.StatePromise();
        this._sessionEngines = {};
        this._viewportEngines = {};
        this._fontLoaded = new StatePromise_1.StatePromise();
    }
    // #endregion Constructors (1)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Getters And Setters (3)
    get fontLoaded() {
        return this._fontLoaded;
    }
    get sessionEngines() {
        return this._sessionEngines;
    }
    get viewportEngines() {
        return this._viewportEngines;
    }
}
exports.StateEngine = StateEngine;
//# sourceMappingURL=StateEngine.js.map

/***/ }),

/***/ 5748:
/***/ (function(__unused_webpack_module, exports) {


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
exports.StatePromise = void 0;
class StatePromise {
    constructor() {
        this._resolved = false;
        this._callbacks = [];
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this._promise.finally(() => {
            this._resolved = true;
        });
    }
    get resolved() {
        return this._resolved;
    }
    get resolve() {
        return this._resolve;
    }
    get reject() {
        return this._reject;
    }
    then(callback) {
        return __awaiter(this, void 0, void 0, function* () {
            this._callbacks.push(callback);
            this.resolved === true ? callback() : this._promise.then(callback);
        });
    }
    reset() {
        this._resolved = false;
        this._promise = new Promise((resolve, reject) => {
            this._resolve = resolve;
            this._reject = reject;
        });
        this._promise.finally(() => {
            this._resolved = true;
        });
        const callbackCopy = [...this._callbacks];
        this._callbacks = [];
        for (let i = 0; i < callbackCopy.length; i++)
            this.then(callbackCopy[i]);
    }
}
exports.StatePromise = StatePromise;
//# sourceMappingURL=StatePromise.js.map

/***/ }),

/***/ 83917:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemInfo = void 0;
const ua_parser_js_1 = __importDefault(__webpack_require__(77232));
class SystemInfo {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor() {
        this._parser = new ua_parser_js_1.default();
        const isInternetExplorer = typeof window !== 'undefined' && window.navigator && window.navigator.userAgent.indexOf('Trident') > -1;
        this._isBrowser = isInternetExplorer ||
            (typeof document !== 'undefined'
                && typeof document.getElementById === 'function'
                && window
                && typeof window.Event === 'function');
        this._isIframe = false;
        if (this._isBrowser) {
            // in case we are running in an iframe, parent and window are different, in
            // that case we use the referrer
            this._isIframe = parent !== window;
            this._origin = this._isIframe ? document.referrer : window.location.origin;
        }
        else {
            this._origin = 'direct';
        }
    }
    // #endregion Constructors (1)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Accessors (11)
    /**
     * Check if we are on an Android device
     */
    get isAndroid() {
        const osName = this._parser.getOS().name;
        return osName === 'Android';
    }
    /**
     * Check if we are running in a browser
     */
    get isBrowser() {
        return this._isBrowser;
    }
    /**
     * Check if we are running in Safari
     */
    get isChrome() {
        const browserName = this._parser.getBrowser().name;
        return !!(browserName && browserName.includes('Chrome'));
    }
    /**
     * Check if we are running in Firefox
     */
    get isFirefox() {
        const browserName = this._parser.getBrowser().name;
        return !!(browserName && browserName.includes('Firefox'));
    }
    /**
     * Check if we are running in internet explorer (arrrggghhhh!!!!)
     */
    get isIE() {
        const browserName = this._parser.getBrowser().name;
        return !!(browserName && browserName.includes('IE'));
    }
    /**
     * Check if we are on an IOS device
     */
    get isIOS() {
        const osName = this._parser.getOS().name;
        return osName === 'iOS' ||
            (typeof window !== undefined && window.navigator && window.navigator.maxTouchPoints === 5 && window.navigator.platform === 'MacIntel');
    }
    /**
     * Check if we are running in an iframe
     */
    get isIframe() {
        return this._isIframe;
    }
    /**
     * Check if we are running in an instagram browser
     */
    get isInstagram() {
        return this._parser.getBrowser().name === "Instagram";
    }
    /**
     * Check if we are on a Mac OS device
     */
    get isMacOS() {
        const osName = this._parser.getOS().name;
        return osName === 'Mac OS';
    }
    /**
     * Check if we are on a mobile device
     */
    get isMobile() {
        const type = this._parser.getDevice().type;
        return type === 'mobile' || type === 'tablet';
    }
    /**
     * Check if we are running in Safari
     */
    get isSafari() {
        const browserName = this._parser.getBrowser().name;
        return !!(browserName && browserName.includes('Safari'));
    }
    /**
     * Get guessed origin of embedding website
     */
    get origin() {
        return this._origin + '';
    }
}
exports.SystemInfo = SystemInfo;
//# sourceMappingURL=SystemInfo.js.map

/***/ }),

/***/ 78392:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TypeChecker = void 0;
class TypeChecker {
    // #endregion Properties (1)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (2)
    isHTMLCanvasElement(value) {
        return value instanceof HTMLCanvasElement;
    }
    isTypeOf(value, type) {
        return typeof value === type;
    }
}
exports.TypeChecker = TypeChecker;
//# sourceMappingURL=TypeChecker.js.map

/***/ }),

/***/ 96847:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.btoaCustom = exports.atobCustom = void 0;
const atobCustom = (str) => {
    if (typeof window !== 'undefined' && window.atob) {
        return window.atob(str);
    }
    else {
        return Buffer.from(str, 'base64').toString();
    }
};
exports.atobCustom = atobCustom;
const btoaCustom = (str) => {
    if (typeof window !== 'undefined' && window.btoa) {
        return window.btoa(str);
    }
    else {
        return Buffer.from(str).toString('base64');
    }
};
exports.btoaCustom = btoaCustom;
//# sourceMappingURL=base64.js.map

/***/ }),

/***/ 16365:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UuidGenerator = void 0;
const uuid_1 = __webpack_require__(66326);
class UuidGenerator {
    // #endregion Properties (1)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (4)
    /**
     * Creates a new uuid v4.
     */
    create() {
        return (0, uuid_1.v4)();
    }
    /**
     * Parse the uuid to array of bytes
     *
     * @param uuid the uuid to convert
     * @returns ArrayLike collection of 16 values
     */
    parse(uuid) {
        return (0, uuid_1.parse)(uuid);
    }
    /**
     * Stringify an array of bytes to an uuid
     *
     * @param uuid the array of bytes
     * @returns the converted uuid
     */
    stringify(uuid) {
        return (0, uuid_1.stringify)(uuid);
    }
    /**
     * Checks if the provided string is a valid uuid.
     *
     * @param uuid the uuid to check
     */
    validate(uuid) {
        return (0, uuid_1.validate)(uuid);
    }
}
exports.UuidGenerator = UuidGenerator;
//# sourceMappingURL=UuidGenerator.js.map

/***/ }),

/***/ 66326:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
Object.defineProperty(exports, "NIL", ({
  enumerable: true,
  get: function get() {
    return _nil.default;
  }
}));
Object.defineProperty(exports, "parse", ({
  enumerable: true,
  get: function get() {
    return _parse.default;
  }
}));
Object.defineProperty(exports, "stringify", ({
  enumerable: true,
  get: function get() {
    return _stringify.default;
  }
}));
Object.defineProperty(exports, "v1", ({
  enumerable: true,
  get: function get() {
    return _v.default;
  }
}));
Object.defineProperty(exports, "v3", ({
  enumerable: true,
  get: function get() {
    return _v2.default;
  }
}));
Object.defineProperty(exports, "v4", ({
  enumerable: true,
  get: function get() {
    return _v3.default;
  }
}));
Object.defineProperty(exports, "v5", ({
  enumerable: true,
  get: function get() {
    return _v4.default;
  }
}));
Object.defineProperty(exports, "validate", ({
  enumerable: true,
  get: function get() {
    return _validate.default;
  }
}));
Object.defineProperty(exports, "version", ({
  enumerable: true,
  get: function get() {
    return _version.default;
  }
}));

var _v = _interopRequireDefault(__webpack_require__(5537));

var _v2 = _interopRequireDefault(__webpack_require__(86719));

var _v3 = _interopRequireDefault(__webpack_require__(79870));

var _v4 = _interopRequireDefault(__webpack_require__(89789));

var _nil = _interopRequireDefault(__webpack_require__(29673));

var _version = _interopRequireDefault(__webpack_require__(77794));

var _validate = _interopRequireDefault(__webpack_require__(42978));

var _stringify = _interopRequireDefault(__webpack_require__(86475));

var _parse = _interopRequireDefault(__webpack_require__(31221));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 18770:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

/*
 * Browser-compatible JavaScript MD5
 *
 * Modification of JavaScript MD5
 * https://github.com/blueimp/JavaScript-MD5
 *
 * Copyright 2011, Sebastian Tschan
 * https://blueimp.net
 *
 * Licensed under the MIT license:
 * https://opensource.org/licenses/MIT
 *
 * Based on
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message
 * Digest Algorithm, as defined in RFC 1321.
 * Version 2.2 Copyright (C) Paul Johnston 1999 - 2009
 * Other contributors: Greg Holt, Andrew Kepert, Ydnar, Lostinet
 * Distributed under the BSD License
 * See http://pajhome.org.uk/crypt/md5 for more info.
 */
function md5(bytes) {
  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = new Uint8Array(msg.length);

    for (let i = 0; i < msg.length; ++i) {
      bytes[i] = msg.charCodeAt(i);
    }
  }

  return md5ToHexEncodedArray(wordsToMd5(bytesToWords(bytes), bytes.length * 8));
}
/*
 * Convert an array of little-endian words to an array of bytes
 */


function md5ToHexEncodedArray(input) {
  const output = [];
  const length32 = input.length * 32;
  const hexTab = '0123456789abcdef';

  for (let i = 0; i < length32; i += 8) {
    const x = input[i >> 5] >>> i % 32 & 0xff;
    const hex = parseInt(hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f), 16);
    output.push(hex);
  }

  return output;
}
/**
 * Calculate output length with padding and bit length
 */


function getOutputLength(inputLength8) {
  return (inputLength8 + 64 >>> 9 << 4) + 14 + 1;
}
/*
 * Calculate the MD5 of an array of little-endian words, and a bit length.
 */


function wordsToMd5(x, len) {
  /* append padding */
  x[len >> 5] |= 0x80 << len % 32;
  x[getOutputLength(len) - 1] = len;
  let a = 1732584193;
  let b = -271733879;
  let c = -1732584194;
  let d = 271733878;

  for (let i = 0; i < x.length; i += 16) {
    const olda = a;
    const oldb = b;
    const oldc = c;
    const oldd = d;
    a = md5ff(a, b, c, d, x[i], 7, -680876936);
    d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
    b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
    a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = md5gg(b, c, d, a, x[i], 20, -373897302);
    a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
    a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
    d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = md5hh(d, a, b, c, x[i], 11, -358537222);
    c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
    a = md5ii(a, b, c, d, x[i], 6, -198630844);
    d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
    a = safeAdd(a, olda);
    b = safeAdd(b, oldb);
    c = safeAdd(c, oldc);
    d = safeAdd(d, oldd);
  }

  return [a, b, c, d];
}
/*
 * Convert an array bytes to an array of little-endian words
 * Characters >255 have their high-byte silently ignored.
 */


function bytesToWords(input) {
  if (input.length === 0) {
    return [];
  }

  const length8 = input.length * 8;
  const output = new Uint32Array(getOutputLength(length8));

  for (let i = 0; i < length8; i += 8) {
    output[i >> 5] |= (input[i / 8] & 0xff) << i % 32;
  }

  return output;
}
/*
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally
 * to work around bugs in some JS interpreters.
 */


function safeAdd(x, y) {
  const lsw = (x & 0xffff) + (y & 0xffff);
  const msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xffff;
}
/*
 * Bitwise rotate a 32-bit number to the left.
 */


function bitRotateLeft(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}
/*
 * These functions implement the four basic operations the algorithm uses.
 */


function md5cmn(q, a, b, x, s, t) {
  return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
}

function md5ff(a, b, c, d, x, s, t) {
  return md5cmn(b & c | ~b & d, a, b, x, s, t);
}

function md5gg(a, b, c, d, x, s, t) {
  return md5cmn(b & d | c & ~d, a, b, x, s, t);
}

function md5hh(a, b, c, d, x, s, t) {
  return md5cmn(b ^ c ^ d, a, b, x, s, t);
}

function md5ii(a, b, c, d, x, s, t) {
  return md5cmn(c ^ (b | ~d), a, b, x, s, t);
}

var _default = md5;
exports["default"] = _default;

/***/ }),

/***/ 3923:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
const randomUUID = typeof crypto !== 'undefined' && crypto.randomUUID && crypto.randomUUID.bind(crypto);
var _default = {
  randomUUID
};
exports["default"] = _default;

/***/ }),

/***/ 29673:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = '00000000-0000-0000-0000-000000000000';
exports["default"] = _default;

/***/ }),

/***/ 31221:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(42978));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function parse(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  let v;
  const arr = new Uint8Array(16); // Parse ########-....-....-....-............

  arr[0] = (v = parseInt(uuid.slice(0, 8), 16)) >>> 24;
  arr[1] = v >>> 16 & 0xff;
  arr[2] = v >>> 8 & 0xff;
  arr[3] = v & 0xff; // Parse ........-####-....-....-............

  arr[4] = (v = parseInt(uuid.slice(9, 13), 16)) >>> 8;
  arr[5] = v & 0xff; // Parse ........-....-####-....-............

  arr[6] = (v = parseInt(uuid.slice(14, 18), 16)) >>> 8;
  arr[7] = v & 0xff; // Parse ........-....-....-####-............

  arr[8] = (v = parseInt(uuid.slice(19, 23), 16)) >>> 8;
  arr[9] = v & 0xff; // Parse ........-....-....-....-############
  // (Use "/" to avoid 32-bit truncation when bit-shifting high-order bytes)

  arr[10] = (v = parseInt(uuid.slice(24, 36), 16)) / 0x10000000000 & 0xff;
  arr[11] = v / 0x100000000 & 0xff;
  arr[12] = v >>> 24 & 0xff;
  arr[13] = v >>> 16 & 0xff;
  arr[14] = v >>> 8 & 0xff;
  arr[15] = v & 0xff;
  return arr;
}

var _default = parse;
exports["default"] = _default;

/***/ }),

/***/ 99737:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
var _default = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
exports["default"] = _default;

/***/ }),

/***/ 72867:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = rng;
// Unique ID creation requires a high quality random # generator. In the browser we therefore
// require the crypto API and do not support built-in fallback to lower quality random number
// generators (like Math.random()).
let getRandomValues;
const rnds8 = new Uint8Array(16);

function rng() {
  // lazy load so that environments that need to polyfill have a chance to do so
  if (!getRandomValues) {
    // getRandomValues needs to be invoked in a context where "this" is a Crypto implementation.
    getRandomValues = typeof crypto !== 'undefined' && crypto.getRandomValues && crypto.getRandomValues.bind(crypto);

    if (!getRandomValues) {
      throw new Error('crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported');
    }
  }

  return getRandomValues(rnds8);
}

/***/ }),

/***/ 97357:
/***/ ((__unused_webpack_module, exports) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

// Adapted from Chris Veness' SHA1 code at
// http://www.movable-type.co.uk/scripts/sha1.html
function f(s, x, y, z) {
  switch (s) {
    case 0:
      return x & y ^ ~x & z;

    case 1:
      return x ^ y ^ z;

    case 2:
      return x & y ^ x & z ^ y & z;

    case 3:
      return x ^ y ^ z;
  }
}

function ROTL(x, n) {
  return x << n | x >>> 32 - n;
}

function sha1(bytes) {
  const K = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
  const H = [0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0];

  if (typeof bytes === 'string') {
    const msg = unescape(encodeURIComponent(bytes)); // UTF8 escape

    bytes = [];

    for (let i = 0; i < msg.length; ++i) {
      bytes.push(msg.charCodeAt(i));
    }
  } else if (!Array.isArray(bytes)) {
    // Convert Array-like to Array
    bytes = Array.prototype.slice.call(bytes);
  }

  bytes.push(0x80);
  const l = bytes.length / 4 + 2;
  const N = Math.ceil(l / 16);
  const M = new Array(N);

  for (let i = 0; i < N; ++i) {
    const arr = new Uint32Array(16);

    for (let j = 0; j < 16; ++j) {
      arr[j] = bytes[i * 64 + j * 4] << 24 | bytes[i * 64 + j * 4 + 1] << 16 | bytes[i * 64 + j * 4 + 2] << 8 | bytes[i * 64 + j * 4 + 3];
    }

    M[i] = arr;
  }

  M[N - 1][14] = (bytes.length - 1) * 8 / Math.pow(2, 32);
  M[N - 1][14] = Math.floor(M[N - 1][14]);
  M[N - 1][15] = (bytes.length - 1) * 8 & 0xffffffff;

  for (let i = 0; i < N; ++i) {
    const W = new Uint32Array(80);

    for (let t = 0; t < 16; ++t) {
      W[t] = M[i][t];
    }

    for (let t = 16; t < 80; ++t) {
      W[t] = ROTL(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
    }

    let a = H[0];
    let b = H[1];
    let c = H[2];
    let d = H[3];
    let e = H[4];

    for (let t = 0; t < 80; ++t) {
      const s = Math.floor(t / 20);
      const T = ROTL(a, 5) + f(s, b, c, d) + e + K[s] + W[t] >>> 0;
      e = d;
      d = c;
      c = ROTL(b, 30) >>> 0;
      b = a;
      a = T;
    }

    H[0] = H[0] + a >>> 0;
    H[1] = H[1] + b >>> 0;
    H[2] = H[2] + c >>> 0;
    H[3] = H[3] + d >>> 0;
    H[4] = H[4] + e >>> 0;
  }

  return [H[0] >> 24 & 0xff, H[0] >> 16 & 0xff, H[0] >> 8 & 0xff, H[0] & 0xff, H[1] >> 24 & 0xff, H[1] >> 16 & 0xff, H[1] >> 8 & 0xff, H[1] & 0xff, H[2] >> 24 & 0xff, H[2] >> 16 & 0xff, H[2] >> 8 & 0xff, H[2] & 0xff, H[3] >> 24 & 0xff, H[3] >> 16 & 0xff, H[3] >> 8 & 0xff, H[3] & 0xff, H[4] >> 24 & 0xff, H[4] >> 16 & 0xff, H[4] >> 8 & 0xff, H[4] & 0xff];
}

var _default = sha1;
exports["default"] = _default;

/***/ }),

/***/ 86475:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;
exports.unsafeStringify = unsafeStringify;

var _validate = _interopRequireDefault(__webpack_require__(42978));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */
const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

var _default = stringify;
exports["default"] = _default;

/***/ }),

/***/ 5537:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _rng = _interopRequireDefault(__webpack_require__(72867));

var _stringify = __webpack_require__(86475);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// **`v1()` - Generate time-based UUID**
//
// Inspired by https://github.com/LiosK/UUID.js
// and http://docs.python.org/library/uuid.html
let _nodeId;

let _clockseq; // Previous uuid creation time


let _lastMSecs = 0;
let _lastNSecs = 0; // See https://github.com/uuidjs/uuid for API details

function v1(options, buf, offset) {
  let i = buf && offset || 0;
  const b = buf || new Array(16);
  options = options || {};
  let node = options.node || _nodeId;
  let clockseq = options.clockseq !== undefined ? options.clockseq : _clockseq; // node and clockseq need to be initialized to random values if they're not
  // specified.  We do this lazily to minimize issues related to insufficient
  // system entropy.  See #189

  if (node == null || clockseq == null) {
    const seedBytes = options.random || (options.rng || _rng.default)();

    if (node == null) {
      // Per 4.5, create and 48-bit node id, (47 random bits + multicast bit = 1)
      node = _nodeId = [seedBytes[0] | 0x01, seedBytes[1], seedBytes[2], seedBytes[3], seedBytes[4], seedBytes[5]];
    }

    if (clockseq == null) {
      // Per 4.2.2, randomize (14 bit) clockseq
      clockseq = _clockseq = (seedBytes[6] << 8 | seedBytes[7]) & 0x3fff;
    }
  } // UUID timestamps are 100 nano-second units since the Gregorian epoch,
  // (1582-10-15 00:00).  JSNumbers aren't precise enough for this, so
  // time is handled internally as 'msecs' (integer milliseconds) and 'nsecs'
  // (100-nanoseconds offset from msecs) since unix epoch, 1970-01-01 00:00.


  let msecs = options.msecs !== undefined ? options.msecs : Date.now(); // Per 4.2.1.2, use count of uuid's generated during the current clock
  // cycle to simulate higher resolution clock

  let nsecs = options.nsecs !== undefined ? options.nsecs : _lastNSecs + 1; // Time since last uuid creation (in msecs)

  const dt = msecs - _lastMSecs + (nsecs - _lastNSecs) / 10000; // Per 4.2.1.2, Bump clockseq on clock regression

  if (dt < 0 && options.clockseq === undefined) {
    clockseq = clockseq + 1 & 0x3fff;
  } // Reset nsecs if clock regresses (new clockseq) or we've moved onto a new
  // time interval


  if ((dt < 0 || msecs > _lastMSecs) && options.nsecs === undefined) {
    nsecs = 0;
  } // Per 4.2.1.2 Throw error if too many uuids are requested


  if (nsecs >= 10000) {
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  }

  _lastMSecs = msecs;
  _lastNSecs = nsecs;
  _clockseq = clockseq; // Per 4.1.4 - Convert from unix epoch to Gregorian epoch

  msecs += 12219292800000; // `time_low`

  const tl = ((msecs & 0xfffffff) * 10000 + nsecs) % 0x100000000;
  b[i++] = tl >>> 24 & 0xff;
  b[i++] = tl >>> 16 & 0xff;
  b[i++] = tl >>> 8 & 0xff;
  b[i++] = tl & 0xff; // `time_mid`

  const tmh = msecs / 0x100000000 * 10000 & 0xfffffff;
  b[i++] = tmh >>> 8 & 0xff;
  b[i++] = tmh & 0xff; // `time_high_and_version`

  b[i++] = tmh >>> 24 & 0xf | 0x10; // include version

  b[i++] = tmh >>> 16 & 0xff; // `clock_seq_hi_and_reserved` (Per 4.2.2 - include variant)

  b[i++] = clockseq >>> 8 | 0x80; // `clock_seq_low`

  b[i++] = clockseq & 0xff; // `node`

  for (let n = 0; n < 6; ++n) {
    b[i + n] = node[n];
  }

  return buf || (0, _stringify.unsafeStringify)(b);
}

var _default = v1;
exports["default"] = _default;

/***/ }),

/***/ 86719:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(54012));

var _md = _interopRequireDefault(__webpack_require__(18770));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v3 = (0, _v.default)('v3', 0x30, _md.default);
var _default = v3;
exports["default"] = _default;

/***/ }),

/***/ 54012:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.URL = exports.DNS = void 0;
exports["default"] = v35;

var _stringify = __webpack_require__(86475);

var _parse = _interopRequireDefault(__webpack_require__(31221));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function stringToBytes(str) {
  str = unescape(encodeURIComponent(str)); // UTF8 escape

  const bytes = [];

  for (let i = 0; i < str.length; ++i) {
    bytes.push(str.charCodeAt(i));
  }

  return bytes;
}

const DNS = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';
exports.DNS = DNS;
const URL = '6ba7b811-9dad-11d1-80b4-00c04fd430c8';
exports.URL = URL;

function v35(name, version, hashfunc) {
  function generateUUID(value, namespace, buf, offset) {
    var _namespace;

    if (typeof value === 'string') {
      value = stringToBytes(value);
    }

    if (typeof namespace === 'string') {
      namespace = (0, _parse.default)(namespace);
    }

    if (((_namespace = namespace) === null || _namespace === void 0 ? void 0 : _namespace.length) !== 16) {
      throw TypeError('Namespace must be array-like (16 iterable integer values, 0-255)');
    } // Compute hash of namespace and value, Per 4.3
    // Future: Use spread syntax when supported on all platforms, e.g. `bytes =
    // hashfunc([...namespace, ... value])`


    let bytes = new Uint8Array(16 + value.length);
    bytes.set(namespace);
    bytes.set(value, namespace.length);
    bytes = hashfunc(bytes);
    bytes[6] = bytes[6] & 0x0f | version;
    bytes[8] = bytes[8] & 0x3f | 0x80;

    if (buf) {
      offset = offset || 0;

      for (let i = 0; i < 16; ++i) {
        buf[offset + i] = bytes[i];
      }

      return buf;
    }

    return (0, _stringify.unsafeStringify)(bytes);
  } // Function#name is not settable on some platforms (#270)


  try {
    generateUUID.name = name; // eslint-disable-next-line no-empty
  } catch (err) {} // For CommonJS default export support


  generateUUID.DNS = DNS;
  generateUUID.URL = URL;
  return generateUUID;
}

/***/ }),

/***/ 79870:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _native = _interopRequireDefault(__webpack_require__(3923));

var _rng = _interopRequireDefault(__webpack_require__(72867));

var _stringify = __webpack_require__(86475);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function v4(options, buf, offset) {
  if (_native.default.randomUUID && !buf && !options) {
    return _native.default.randomUUID();
  }

  options = options || {};

  const rnds = options.random || (options.rng || _rng.default)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`


  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return (0, _stringify.unsafeStringify)(rnds);
}

var _default = v4;
exports["default"] = _default;

/***/ }),

/***/ 89789:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _v = _interopRequireDefault(__webpack_require__(54012));

var _sha = _interopRequireDefault(__webpack_require__(97357));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const v5 = (0, _v.default)('v5', 0x50, _sha.default);
var _default = v5;
exports["default"] = _default;

/***/ }),

/***/ 42978:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _regex = _interopRequireDefault(__webpack_require__(99737));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function validate(uuid) {
  return typeof uuid === 'string' && _regex.default.test(uuid);
}

var _default = validate;
exports["default"] = _default;

/***/ }),

/***/ 77794:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {



Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var _validate = _interopRequireDefault(__webpack_require__(42978));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function version(uuid) {
  if (!(0, _validate.default)(uuid)) {
    throw TypeError('Invalid UUID');
  }

  return parseInt(uuid.slice(14, 15), 16);
}

var _default = version;
exports["default"] = _default;

/***/ }),

/***/ 87912:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _AnimationData_animate, _AnimationData_animationTime, _AnimationData_duration, _AnimationData_name, _AnimationData_repeat, _AnimationData_start, _AnimationData_started, _AnimationData_tracks, _AnimationData_reset, _AnimationData_nodeIds;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const gl_matrix_1 = __webpack_require__(61961);
const GeometryData_1 = __webpack_require__(20712);
class AnimationData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (8)
    // #region Constructors (1)
    /**
     * Creates a custom data node.
     *
     * @param _data the data as key- value pairs
     * @param id the id
     */
    constructor(name, tracks, start, duration, id, version) {
        super(id, version);
        // #region Properties (8)
        _AnimationData_animate.set(this, false);
        _AnimationData_animationTime.set(this, 0);
        _AnimationData_duration.set(this, void 0);
        _AnimationData_name.set(this, void 0);
        _AnimationData_repeat.set(this, false);
        _AnimationData_start.set(this, void 0);
        _AnimationData_started.set(this, false);
        _AnimationData_tracks.set(this, void 0);
        _AnimationData_reset.set(this, true);
        _AnimationData_nodeIds.set(this, []);
        __classPrivateFieldSet(this, _AnimationData_name, name, "f");
        __classPrivateFieldSet(this, _AnimationData_tracks, tracks, "f");
        __classPrivateFieldSet(this, _AnimationData_start, start, "f");
        __classPrivateFieldSet(this, _AnimationData_duration, duration, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (9)
    get animate() {
        return __classPrivateFieldGet(this, _AnimationData_animate, "f");
    }
    get animationTime() {
        return __classPrivateFieldGet(this, _AnimationData_animationTime, "f");
    }
    set animationTime(value) {
        __classPrivateFieldSet(this, _AnimationData_animationTime, value, "f");
    }
    get duration() {
        return __classPrivateFieldGet(this, _AnimationData_duration, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _AnimationData_name, "f");
    }
    get repeat() {
        return __classPrivateFieldGet(this, _AnimationData_repeat, "f");
    }
    set repeat(value) {
        __classPrivateFieldSet(this, _AnimationData_repeat, value, "f");
    }
    get reset() {
        return __classPrivateFieldGet(this, _AnimationData_reset, "f");
    }
    set reset(value) {
        __classPrivateFieldSet(this, _AnimationData_reset, value, "f");
    }
    get start() {
        return __classPrivateFieldGet(this, _AnimationData_start, "f");
    }
    get tracks() {
        return __classPrivateFieldGet(this, _AnimationData_tracks, "f");
    }
    set tracks(value) {
        __classPrivateFieldSet(this, _AnimationData_tracks, value, "f");
    }
    // #endregion Public Accessors (9)
    // #region Public Methods (5)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new AnimationData(this.name, __classPrivateFieldGet(this, _AnimationData_tracks, "f"), this.start, this.duration, this.id, this.version);
    }
    continueAnimation() {
        if (__classPrivateFieldGet(this, _AnimationData_started, "f"))
            __classPrivateFieldSet(this, _AnimationData_animate, true, "f");
    }
    pauseAnimation() {
        if (__classPrivateFieldGet(this, _AnimationData_started, "f"))
            __classPrivateFieldSet(this, _AnimationData_animate, false, "f");
    }
    startAnimation() {
        __classPrivateFieldSet(this, _AnimationData_animationTime, 0, "f");
        __classPrivateFieldSet(this, _AnimationData_animate, true, "f");
        __classPrivateFieldSet(this, _AnimationData_started, true, "f");
        for (let i = 0; i < __classPrivateFieldGet(this, _AnimationData_tracks, "f").length; i++) {
            const track = __classPrivateFieldGet(this, _AnimationData_tracks, "f")[i];
            const idleTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix');
            if (idleTransformation) {
                track.previousMatrix = {
                    id: idleTransformation.id,
                    matrix: gl_matrix_1.mat4.clone(idleTransformation.matrix)
                };
                idleTransformation.matrix = gl_matrix_1.mat4.create();
                continue;
            }
            switch (track.path) {
                case 'scale':
                    const idleTransformationScale = track.node.transformations.find(t => t.id === 'gltf_matrix_scale');
                    if (idleTransformationScale) {
                        track.previousMatrix = {
                            id: idleTransformationScale.id,
                            matrix: gl_matrix_1.mat4.clone(idleTransformationScale.matrix)
                        };
                        continue;
                    }
                    break;
                case 'rotation':
                    const idleTransformationRotation = track.node.transformations.find(t => t.id === 'gltf_matrix_rotation');
                    if (idleTransformationRotation) {
                        track.previousMatrix = {
                            id: idleTransformationRotation.id,
                            matrix: gl_matrix_1.mat4.clone(idleTransformationRotation.matrix)
                        };
                        continue;
                    }
                    break;
                case 'translation':
                    const idleTransformationTranslation = track.node.transformations.find(t => t.id === 'gltf_matrix_translation');
                    if (idleTransformationTranslation) {
                        track.previousMatrix = {
                            id: idleTransformationTranslation.id,
                            matrix: gl_matrix_1.mat4.clone(idleTransformationTranslation.matrix)
                        };
                        continue;
                    }
                    break;
            }
        }
    }
    stopAnimation() {
        if (this.reset) {
            for (let i = 0; i < __classPrivateFieldGet(this, _AnimationData_tracks, "f").length; i++) {
                const track = __classPrivateFieldGet(this, _AnimationData_tracks, "f")[i];
                const id = this.id + '_' + i;
                const prevAnimation = track.node.transformations.filter(t => t.id === id);
                track.node.transformations = track.node.transformations.filter((el) => {
                    return !prevAnimation.includes(el);
                });
                if (track.previousMatrix) {
                    if (track.previousMatrix.id === 'gltf_matrix') {
                        const transformation = track.node.transformations.find(t => t.id === 'gltf_matrix');
                        transformation.matrix = track.previousMatrix.matrix;
                        const translationTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix_translation');
                        translationTransformation.matrix = gl_matrix_1.mat4.create();
                        const rotationTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix_rotation');
                        rotationTransformation.matrix = gl_matrix_1.mat4.create();
                        const scaleTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix_scale');
                        scaleTransformation.matrix = gl_matrix_1.mat4.create();
                        continue;
                    }
                    else {
                        switch (track.path) {
                            case 'scale':
                                const idleTransformationScale = track.node.transformations.find(t => t.id === 'gltf_matrix_scale');
                                idleTransformationScale.matrix = track.previousMatrix.matrix;
                                continue;
                            case 'rotation':
                                const idleTransformationRotation = track.node.transformations.find(t => t.id === 'gltf_matrix_rotation');
                                idleTransformationRotation.matrix = track.previousMatrix.matrix;
                                continue;
                            case 'translation':
                                const idleTransformationTranslation = track.node.transformations.find(t => t.id === 'gltf_matrix_translation');
                                idleTransformationTranslation.matrix = track.previousMatrix.matrix;
                                continue;
                        }
                    }
                }
                else {
                    const idleTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix');
                    if (idleTransformation) {
                        idleTransformation.matrix = gl_matrix_1.mat4.create();
                    }
                    else {
                        const idleTransformationScale = track.node.transformations.find(t => t.id === 'gltf_matrix_scale');
                        if (idleTransformationScale)
                            idleTransformationScale.matrix = gl_matrix_1.mat4.create();
                        const idleTransformationRotation = track.node.transformations.find(t => t.id === 'gltf_matrix_rotation');
                        if (idleTransformationRotation)
                            idleTransformationRotation.matrix = gl_matrix_1.mat4.create();
                        const idleTransformationTranslation = track.node.transformations.find(t => t.id === 'gltf_matrix_translation');
                        if (idleTransformationTranslation)
                            idleTransformationTranslation.matrix = gl_matrix_1.mat4.create();
                    }
                }
            }
        }
        else {
            for (let i = 0; i < __classPrivateFieldGet(this, _AnimationData_tracks, "f").length; i++) {
                const track = __classPrivateFieldGet(this, _AnimationData_tracks, "f")[i];
                const id = this.id + '_' + i;
                const prevAnimation = track.node.transformations.filter(t => t.id === id);
                track.node.transformations = track.node.transformations.filter((el) => {
                    return !prevAnimation.includes(el);
                });
                const j = track.times.length - 1;
                let translationTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix_translation');
                if (!translationTransformation) {
                    translationTransformation = {
                        id: 'gltf_matrix_translation',
                        matrix: gl_matrix_1.mat4.create()
                    };
                    track.node.transformations.push(translationTransformation);
                }
                let rotationTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix_rotation');
                if (!rotationTransformation) {
                    rotationTransformation = {
                        id: 'gltf_matrix_rotation',
                        matrix: gl_matrix_1.mat4.create()
                    };
                    track.node.transformations.push(rotationTransformation);
                }
                let scaleTransformation = track.node.transformations.find(t => t.id === 'gltf_matrix_scale');
                if (!scaleTransformation) {
                    scaleTransformation = {
                        id: 'gltf_matrix_scale',
                        matrix: gl_matrix_1.mat4.create()
                    };
                    track.node.transformations.push(scaleTransformation);
                }
                if (track.path === 'rotation') {
                    let pivotMatrix, pivotMatrixInverse;
                    if (track.pivot) {
                        pivotMatrix = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(track.pivot[0], track.pivot[1], track.pivot[2]));
                        pivotMatrixInverse = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(-track.pivot[0], -track.pivot[1], -track.pivot[2]));
                    }
                    let quaternion = gl_matrix_1.quat.fromValues(track.values[j * 4 + 0], track.values[j * 4 + 1], track.values[j * 4 + 2], track.values[j * 4 + 3]);
                    const rotationMatrix = gl_matrix_1.mat4.fromQuat(gl_matrix_1.mat4.create(), quaternion);
                    if (pivotMatrix && pivotMatrixInverse) {
                        rotationTransformation.matrix = gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), pivotMatrix, rotationMatrix), pivotMatrixInverse);
                    }
                    else {
                        rotationTransformation.matrix = rotationMatrix;
                    }
                }
                else if (track.path === 'translation') {
                    let vector = gl_matrix_1.vec3.fromValues(track.values[j * 3 + 0], track.values[j * 3 + 1], track.values[j * 3 + 2]);
                    translationTransformation.matrix = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), vector);
                }
                else if (track.path === 'scale') {
                    let vector = gl_matrix_1.vec3.fromValues(track.values[j * 3 + 0], track.values[j * 3 + 1], track.values[j * 3 + 2]);
                    scaleTransformation.matrix = gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), vector);
                }
                else if (track.path === 'weights') {
                    let weights = [];
                    const weightCount = track.values.length / track.times.length;
                    for (let l = 0; l < weightCount; l++)
                        weights.push(track.values[j * weightCount + l]);
                    const applyWeights = (node) => {
                        for (let l = 0; l < node.data.length; l++)
                            if (node.data[l] instanceof GeometryData_1.GeometryData && node.data[l].morphWeights.length === weightCount)
                                node.data[l].morphWeights = weights;
                        for (let l = 0; l < node.children.length; l++)
                            applyWeights(node.children[l]);
                    };
                    applyWeights(track.node);
                }
            }
        }
        __classPrivateFieldSet(this, _AnimationData_animationTime, -1, "f");
        __classPrivateFieldSet(this, _AnimationData_started, false, "f");
        __classPrivateFieldSet(this, _AnimationData_animate, false, "f");
    }
}
exports.AnimationData = AnimationData;
_AnimationData_animate = new WeakMap(), _AnimationData_animationTime = new WeakMap(), _AnimationData_duration = new WeakMap(), _AnimationData_name = new WeakMap(), _AnimationData_repeat = new WeakMap(), _AnimationData_start = new WeakMap(), _AnimationData_started = new WeakMap(), _AnimationData_tracks = new WeakMap(), _AnimationData_reset = new WeakMap(), _AnimationData_nodeIds = new WeakMap();
//# sourceMappingURL=AnimationData.js.map

/***/ }),

/***/ 20914:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BoneData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class BoneData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #region Constructors (1)
    /**
     * Creates a Bone data node.
     *
     * @param id the id
     */
    constructor(id, version) {
        super(id, version);
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new BoneData(this.id, this.version);
    }
}
exports.BoneData = BoneData;
//# sourceMappingURL=BoneData.js.map

/***/ }),

/***/ 90311:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _CustomData_data;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CustomData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class CustomData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    /**
     * Creates a custom data node.
     *
     * @param _data the data as key- value pairs
     * @param id the id
     */
    constructor(data, id, version) {
        super(id, version);
        // #region Properties (1)
        _CustomData_data.set(this, void 0);
        __classPrivateFieldSet(this, _CustomData_data, data, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get data() {
        return __classPrivateFieldGet(this, _CustomData_data, "f");
    }
    set data(value) {
        __classPrivateFieldSet(this, _CustomData_data, value, "f");
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new CustomData(Object.assign({}, this.data), this.id, this.version);
    }
}
exports.CustomData = CustomData;
_CustomData_data = new WeakMap();
//# sourceMappingURL=CustomData.js.map

/***/ }),

/***/ 20712:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _AttributeData_array, _AttributeData_byteOffset, _AttributeData_byteStride, _AttributeData_count, _AttributeData_elementBytes, _AttributeData_itemBytes, _AttributeData_itemSize, _AttributeData_max, _AttributeData_min, _AttributeData_morphAttributeData, _AttributeData_normalized, _AttributeData_sparse, _AttributeData_sparseIndices, _AttributeData_sparseValues, _AttributeData_target, _GeometryData_mode, _GeometryData_primitive, _GeometryData_attributeMaterial, _GeometryData_boundingBox, _GeometryData_effectMaterials, _GeometryData_material, _GeometryData_materialVariants, _GeometryData_morphWeights, _GeometryData_renderOrder, _GeometryData_standardMaterial, _PrimitiveData_attributes, _PrimitiveData_boundingBoxes, _PrimitiveData_indices;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrimitiveData = exports.GeometryData = exports.AttributeData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_math_1 = __webpack_require__(67275);
const IGeometryData_1 = __webpack_require__(48211);
const gl_matrix_1 = __webpack_require__(61961);
// #region Classes (3)
class AttributeData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (15)
    // #region Constructors (1)
    /**
     * Creates an attribute data object.
     *
     * @param _array the array of the data
     * @param _itemSize the size
     * @param _hasOffset notifier if there is an offset
     * @param _offset the offset
     * @param _stride the stride
     * @param _normalized boolean if the data is normalized
     */
    constructor(array, itemSize, itemBytes, byteOffset, elementBytes, normalized, count, min = [], max = [], byteStride, target, sparse, sparseIndices, sparseValues, morphAttributeData = [], id, version) {
        super(id, version);
        // #region Properties (15)
        _AttributeData_array.set(this, void 0);
        _AttributeData_byteOffset.set(this, void 0);
        _AttributeData_byteStride.set(this, void 0);
        _AttributeData_count.set(this, void 0);
        _AttributeData_elementBytes.set(this, void 0);
        _AttributeData_itemBytes.set(this, void 0);
        _AttributeData_itemSize.set(this, void 0);
        _AttributeData_max.set(this, []);
        _AttributeData_min.set(this, []);
        _AttributeData_morphAttributeData.set(this, []);
        _AttributeData_normalized.set(this, void 0);
        _AttributeData_sparse.set(this, void 0);
        _AttributeData_sparseIndices.set(this, void 0);
        _AttributeData_sparseValues.set(this, void 0);
        _AttributeData_target.set(this, void 0);
        __classPrivateFieldSet(this, _AttributeData_array, array, "f");
        __classPrivateFieldSet(this, _AttributeData_itemSize, itemSize, "f");
        __classPrivateFieldSet(this, _AttributeData_itemBytes, itemBytes, "f");
        __classPrivateFieldSet(this, _AttributeData_byteOffset, byteOffset, "f");
        __classPrivateFieldSet(this, _AttributeData_elementBytes, elementBytes, "f");
        __classPrivateFieldSet(this, _AttributeData_normalized, normalized, "f");
        __classPrivateFieldSet(this, _AttributeData_count, count, "f");
        __classPrivateFieldSet(this, _AttributeData_min, min, "f");
        __classPrivateFieldSet(this, _AttributeData_max, max, "f");
        __classPrivateFieldSet(this, _AttributeData_byteStride, byteStride, "f");
        __classPrivateFieldSet(this, _AttributeData_target, target, "f");
        __classPrivateFieldSet(this, _AttributeData_sparse, sparse, "f");
        __classPrivateFieldSet(this, _AttributeData_sparseIndices, sparseIndices, "f");
        __classPrivateFieldSet(this, _AttributeData_sparseValues, sparseValues, "f");
        __classPrivateFieldSet(this, _AttributeData_morphAttributeData, morphAttributeData, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (15)
    get array() {
        return __classPrivateFieldGet(this, _AttributeData_array, "f");
    }
    get byteOffset() {
        return __classPrivateFieldGet(this, _AttributeData_byteOffset, "f");
    }
    get byteStride() {
        return __classPrivateFieldGet(this, _AttributeData_byteStride, "f");
    }
    get count() {
        return __classPrivateFieldGet(this, _AttributeData_count, "f");
    }
    get elementBytes() {
        return __classPrivateFieldGet(this, _AttributeData_elementBytes, "f");
    }
    get itemBytes() {
        return __classPrivateFieldGet(this, _AttributeData_itemBytes, "f");
    }
    get itemSize() {
        return __classPrivateFieldGet(this, _AttributeData_itemSize, "f");
    }
    get max() {
        return __classPrivateFieldGet(this, _AttributeData_max, "f");
    }
    get min() {
        return __classPrivateFieldGet(this, _AttributeData_min, "f");
    }
    get morphAttributeData() {
        return __classPrivateFieldGet(this, _AttributeData_morphAttributeData, "f");
    }
    get normalized() {
        return __classPrivateFieldGet(this, _AttributeData_normalized, "f");
    }
    get sparse() {
        return __classPrivateFieldGet(this, _AttributeData_sparse, "f");
    }
    get sparseIndices() {
        return __classPrivateFieldGet(this, _AttributeData_sparseIndices, "f");
    }
    get sparseValues() {
        return __classPrivateFieldGet(this, _AttributeData_sparseValues, "f");
    }
    get target() {
        return __classPrivateFieldGet(this, _AttributeData_target, "f");
    }
    // #endregion Public Getters And Setters (15)
    // #region Public Methods (1)
    /**
     * Clones the attribute data.
     */
    clone() {
        return new AttributeData(__classPrivateFieldGet(this, _AttributeData_array, "f"), __classPrivateFieldGet(this, _AttributeData_itemSize, "f"), __classPrivateFieldGet(this, _AttributeData_itemBytes, "f"), __classPrivateFieldGet(this, _AttributeData_byteOffset, "f"), __classPrivateFieldGet(this, _AttributeData_elementBytes, "f"), __classPrivateFieldGet(this, _AttributeData_normalized, "f"), __classPrivateFieldGet(this, _AttributeData_count, "f"), __classPrivateFieldGet(this, _AttributeData_min, "f"), __classPrivateFieldGet(this, _AttributeData_max, "f"), __classPrivateFieldGet(this, _AttributeData_byteStride, "f"), __classPrivateFieldGet(this, _AttributeData_target, "f"), __classPrivateFieldGet(this, _AttributeData_sparse, "f"), __classPrivateFieldGet(this, _AttributeData_sparseIndices, "f"), __classPrivateFieldGet(this, _AttributeData_sparseValues, "f"), __classPrivateFieldGet(this, _AttributeData_morphAttributeData, "f"), this.id, this.version);
    }
}
exports.AttributeData = AttributeData;
_AttributeData_array = new WeakMap(), _AttributeData_byteOffset = new WeakMap(), _AttributeData_byteStride = new WeakMap(), _AttributeData_count = new WeakMap(), _AttributeData_elementBytes = new WeakMap(), _AttributeData_itemBytes = new WeakMap(), _AttributeData_itemSize = new WeakMap(), _AttributeData_max = new WeakMap(), _AttributeData_min = new WeakMap(), _AttributeData_morphAttributeData = new WeakMap(), _AttributeData_normalized = new WeakMap(), _AttributeData_sparse = new WeakMap(), _AttributeData_sparseIndices = new WeakMap(), _AttributeData_sparseValues = new WeakMap(), _AttributeData_target = new WeakMap();
class GeometryData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (10)
    // #region Constructors (1)
    /**
     * Creates a geometry data object.
     *
     * @param _primitive the primitive
     * @param id the id
     */
    constructor(primitive, mode = IGeometryData_1.PRIMITIVE_MODE.TRIANGLES, material = null, morphWeights = [], attributeMaterial = null, id, version) {
        super(id, version);
        // #region Properties (10)
        _GeometryData_mode.set(this, IGeometryData_1.PRIMITIVE_MODE.TRIANGLES);
        _GeometryData_primitive.set(this, void 0);
        _GeometryData_attributeMaterial.set(this, null);
        _GeometryData_boundingBox.set(this, new viewer_shared_math_1.Box());
        _GeometryData_effectMaterials.set(this, []);
        _GeometryData_material.set(this, null);
        _GeometryData_materialVariants.set(this, []);
        _GeometryData_morphWeights.set(this, []);
        _GeometryData_renderOrder.set(this, 0);
        _GeometryData_standardMaterial.set(this, null);
        __classPrivateFieldSet(this, _GeometryData_primitive, primitive, "f");
        __classPrivateFieldSet(this, _GeometryData_boundingBox, this.primitive.boundingBox.clone(), "f");
        __classPrivateFieldSet(this, _GeometryData_morphWeights, morphWeights, "f");
        __classPrivateFieldSet(this, _GeometryData_mode, mode, "f");
        __classPrivateFieldSet(this, _GeometryData_material, material, "f");
        __classPrivateFieldSet(this, _GeometryData_standardMaterial, material, "f");
        __classPrivateFieldSet(this, _GeometryData_attributeMaterial, attributeMaterial, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (15)
    get attributeMaterial() {
        return __classPrivateFieldGet(this, _GeometryData_attributeMaterial, "f");
    }
    set attributeMaterial(value) {
        __classPrivateFieldSet(this, _GeometryData_attributeMaterial, value, "f");
    }
    get boundingBox() {
        return __classPrivateFieldGet(this, _GeometryData_boundingBox, "f");
    }
    get effectMaterials() {
        return __classPrivateFieldGet(this, _GeometryData_effectMaterials, "f");
    }
    get material() {
        return __classPrivateFieldGet(this, _GeometryData_material, "f");
    }
    set material(value) {
        __classPrivateFieldSet(this, _GeometryData_material, value, "f");
    }
    get materialVariants() {
        return __classPrivateFieldGet(this, _GeometryData_materialVariants, "f");
    }
    get mode() {
        return __classPrivateFieldGet(this, _GeometryData_mode, "f");
    }
    get morphWeights() {
        return __classPrivateFieldGet(this, _GeometryData_morphWeights, "f");
    }
    set morphWeights(value) {
        __classPrivateFieldSet(this, _GeometryData_morphWeights, value, "f");
    }
    get primitive() {
        return __classPrivateFieldGet(this, _GeometryData_primitive, "f");
    }
    get renderOrder() {
        return __classPrivateFieldGet(this, _GeometryData_renderOrder, "f");
    }
    set renderOrder(value) {
        __classPrivateFieldSet(this, _GeometryData_renderOrder, value, "f");
    }
    get standardMaterial() {
        return __classPrivateFieldGet(this, _GeometryData_standardMaterial, "f");
    }
    set standardMaterial(value) {
        __classPrivateFieldSet(this, _GeometryData_standardMaterial, value, "f");
    }
    // #endregion Public Getters And Setters (15)
    // #region Public Methods (2)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new GeometryData(__classPrivateFieldGet(this, _GeometryData_primitive, "f"), __classPrivateFieldGet(this, _GeometryData_mode, "f"), __classPrivateFieldGet(this, _GeometryData_material, "f"), __classPrivateFieldGet(this, _GeometryData_morphWeights, "f"), __classPrivateFieldGet(this, _GeometryData_attributeMaterial, "f"));
    }
    intersect(origin, direction) {
        if (this.mode !== IGeometryData_1.PRIMITIVE_MODE.TRIANGLES)
            return null;
        return this.boundingBox.intersect(origin, direction);
    }
}
exports.GeometryData = GeometryData;
_GeometryData_mode = new WeakMap(), _GeometryData_primitive = new WeakMap(), _GeometryData_attributeMaterial = new WeakMap(), _GeometryData_boundingBox = new WeakMap(), _GeometryData_effectMaterials = new WeakMap(), _GeometryData_material = new WeakMap(), _GeometryData_materialVariants = new WeakMap(), _GeometryData_morphWeights = new WeakMap(), _GeometryData_renderOrder = new WeakMap(), _GeometryData_standardMaterial = new WeakMap();
class PrimitiveData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (3)
    // #region Constructors (1)
    /**
     * Creates a primitive data object.
     *
     * @param _attributes the attributes as key-value pairs
     * @param _indices the indices
     */
    constructor(attributes = {}, indices = null, id, version) {
        super(id, version);
        // #region Properties (3)
        _PrimitiveData_attributes.set(this, {});
        _PrimitiveData_boundingBoxes.set(this, []);
        _PrimitiveData_indices.set(this, null);
        __classPrivateFieldSet(this, _PrimitiveData_attributes, attributes, "f");
        __classPrivateFieldSet(this, _PrimitiveData_indices, indices, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (4)
    get attributes() {
        return __classPrivateFieldGet(this, _PrimitiveData_attributes, "f");
    }
    get boundingBox() {
        return this.computeBoundingBox(gl_matrix_1.mat4.create());
    }
    get indices() {
        return __classPrivateFieldGet(this, _PrimitiveData_indices, "f");
    }
    set indices(value) {
        __classPrivateFieldSet(this, _PrimitiveData_indices, value, "f");
    }
    // #endregion Public Getters And Setters (4)
    // #region Public Methods (2)
    /**
     * Clones the primitive data.
     */
    clone() {
        const attributes = {};
        for (const attribute in __classPrivateFieldGet(this, _PrimitiveData_attributes, "f"))
            attributes[attribute] = __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")[attribute].clone();
        return new PrimitiveData(attributes, __classPrivateFieldGet(this, _PrimitiveData_indices, "f"), this.id, this.version);
    }
    computeBoundingBox(matrix) {
        const res = __classPrivateFieldGet(this, _PrimitiveData_boundingBoxes, "f").find(b => gl_matrix_1.mat4.equals(matrix, b.matrix));
        if (res)
            return res.boundingBox;
        if (__classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION']) {
            if (__classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].min.length === 3 && __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].max.length === 3 && gl_matrix_1.mat4.equals(matrix, gl_matrix_1.mat4.create())) {
                const boundingBox = new viewer_shared_math_1.Box(gl_matrix_1.vec3.fromValues(__classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].min[0], __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].min[1], __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].min[2]), gl_matrix_1.vec3.fromValues(__classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].max[0], __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].max[1], __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].max[2]));
                __classPrivateFieldGet(this, _PrimitiveData_boundingBoxes, "f").push({
                    boundingBox,
                    matrix: gl_matrix_1.mat4.clone(matrix)
                });
                return boundingBox;
            }
            else if (gl_matrix_1.mat4.equals(matrix, gl_matrix_1.mat4.create())) {
                const boundingBox = new viewer_shared_math_1.Box();
                boundingBox.setFromAttributeArray(__classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].array, __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].byteStride, __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].itemBytes);
                __classPrivateFieldGet(this, _PrimitiveData_boundingBoxes, "f").push({
                    boundingBox,
                    matrix: gl_matrix_1.mat4.clone(matrix)
                });
                return boundingBox;
            }
            else if (gl_matrix_1.quat.equals(gl_matrix_1.mat4.getRotation(gl_matrix_1.quat.create(), matrix), gl_matrix_1.quat.create())) {
                const identityBB = this.computeBoundingBox(gl_matrix_1.mat4.create());
                const boundingBox = identityBB.clone().applyMatrix(matrix);
                __classPrivateFieldGet(this, _PrimitiveData_boundingBoxes, "f").push({
                    boundingBox,
                    matrix: gl_matrix_1.mat4.clone(matrix)
                });
                return boundingBox;
            }
            else {
                const boundingBox = new viewer_shared_math_1.Box();
                boundingBox.setFromAttributeArray(__classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].array, __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].byteStride, __classPrivateFieldGet(this, _PrimitiveData_attributes, "f")['POSITION'].itemBytes, matrix);
                __classPrivateFieldGet(this, _PrimitiveData_boundingBoxes, "f").push({
                    boundingBox,
                    matrix: gl_matrix_1.mat4.clone(matrix)
                });
                return boundingBox;
            }
        }
        return new viewer_shared_math_1.Box();
    }
}
exports.PrimitiveData = PrimitiveData;
_PrimitiveData_attributes = new WeakMap(), _PrimitiveData_boundingBoxes = new WeakMap(), _PrimitiveData_indices = new WeakMap();
// #endregion Classes (3)
//# sourceMappingURL=GeometryData.js.map

/***/ }),

/***/ 76116:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _HTMLElementAnchorData_viewerHtmlElement, _HTMLElementAnchorData_data, _HTMLElementAnchorData_format, _HTMLElementAnchorData_hideable, _HTMLElementAnchorData_intersectionTarget, _HTMLElementAnchorData_location, _HTMLElementAnchorData_viewports, _HTMLElementAnchorCustomData_create, _HTMLElementAnchorCustomData_update;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTMLElementAnchorCustomData = exports.HTMLElementAnchorImageData = exports.HTMLElementAnchorTextData = exports.HTMLElementAnchorData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class HTMLElementAnchorData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (9)
    // #region Constructors (1)
    /**
     * Creates a custom data node.
     *
     * @param _data the data as key- value pairs
     * @param id the id
     */
    constructor(properties) {
        super(properties.id, properties.version);
        _HTMLElementAnchorData_viewerHtmlElement.set(this, {});
        _HTMLElementAnchorData_data.set(this, void 0);
        _HTMLElementAnchorData_format.set(this, void 0);
        _HTMLElementAnchorData_hideable.set(this, true);
        _HTMLElementAnchorData_intersectionTarget.set(this, void 0);
        _HTMLElementAnchorData_location.set(this, void 0);
        _HTMLElementAnchorData_viewports.set(this, []);
        __classPrivateFieldSet(this, _HTMLElementAnchorData_location, properties.location, "f");
        __classPrivateFieldSet(this, _HTMLElementAnchorData_data, properties.data, "f");
        __classPrivateFieldSet(this, _HTMLElementAnchorData_format, properties.format, "f");
        __classPrivateFieldSet(this, _HTMLElementAnchorData_hideable, properties.hideable === undefined ? true : properties.hideable, "f");
        __classPrivateFieldSet(this, _HTMLElementAnchorData_viewports, properties.viewports || [], "f");
        __classPrivateFieldSet(this, _HTMLElementAnchorData_intersectionTarget, properties.intersectionTarget, "f");
        this.internalHtmlElement = document.createElement('div');
        this.internalHtmlElement.classList.add('sdv-anchor-inner-container');
    }
    // #endregion Constructors (1)
    // #region Public Accessors (12)
    get data() {
        return __classPrivateFieldGet(this, _HTMLElementAnchorData_data, "f");
    }
    set data(value) {
        __classPrivateFieldSet(this, _HTMLElementAnchorData_data, value, "f");
    }
    get format() {
        return __classPrivateFieldGet(this, _HTMLElementAnchorData_format, "f");
    }
    set format(value) {
        __classPrivateFieldSet(this, _HTMLElementAnchorData_format, value, "f");
    }
    get hideable() {
        return __classPrivateFieldGet(this, _HTMLElementAnchorData_hideable, "f");
    }
    set hideable(value) {
        __classPrivateFieldSet(this, _HTMLElementAnchorData_hideable, value, "f");
    }
    get intersectionTarget() {
        return __classPrivateFieldGet(this, _HTMLElementAnchorData_intersectionTarget, "f");
    }
    set intersectionTarget(value) {
        __classPrivateFieldSet(this, _HTMLElementAnchorData_intersectionTarget, value, "f");
    }
    get location() {
        return __classPrivateFieldGet(this, _HTMLElementAnchorData_location, "f");
    }
    set location(value) {
        __classPrivateFieldSet(this, _HTMLElementAnchorData_location, value, "f");
    }
    get viewports() {
        return __classPrivateFieldGet(this, _HTMLElementAnchorData_viewports, "f");
    }
    set viewports(value) {
        __classPrivateFieldSet(this, _HTMLElementAnchorData_viewports, value, "f");
    }
    // #endregion Public Accessors (12)
    // #region Public Methods (3)
    createViewerHtmlElement(viewer) {
        if (__classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer])
            return __classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer];
        if (this.viewports.includes(viewer) || this.viewports.length === 0) {
            __classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer] = this.internalHtmlElement.cloneNode(true);
            this.create({ anchor: this, parent: __classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer] });
            return __classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer];
        }
        return null;
    }
    getViewerHtmlElement(viewer) {
        if (__classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer])
            return __classPrivateFieldGet(this, _HTMLElementAnchorData_viewerHtmlElement, "f")[viewer];
        return null;
    }
    update(properties) {
        properties.htmlElement.style.display = '';
        if ((this.hideable && properties.hidden) || properties.visible === false)
            properties.htmlElement.style.display = 'none';
        let x, y;
        if (this.data.position && this.data.position.horizontal === 'right') {
            x = properties.container[0] - properties.htmlElement.offsetWidth;
        }
        else if (this.data.position && this.data.position.horizontal === 'left') {
            x = properties.container[0];
        }
        else {
            x = properties.container[0] - properties.htmlElement.offsetWidth / 2;
        }
        if (this.data.position && this.data.position.vertical === 'bottom') {
            y = properties.container[1] - properties.htmlElement.offsetHeight;
        }
        else if (this.data.position && this.data.position.vertical === 'top') {
            y = properties.container[1];
        }
        else {
            y = properties.container[1] - properties.htmlElement.offsetHeight / 2;
        }
        x = x / properties.scale[0];
        y = y / properties.scale[1];
        properties.htmlElement.style.left = x + 'px';
        properties.htmlElement.style.top = y + 'px';
    }
}
exports.HTMLElementAnchorData = HTMLElementAnchorData;
_HTMLElementAnchorData_viewerHtmlElement = new WeakMap(), _HTMLElementAnchorData_data = new WeakMap(), _HTMLElementAnchorData_format = new WeakMap(), _HTMLElementAnchorData_hideable = new WeakMap(), _HTMLElementAnchorData_intersectionTarget = new WeakMap(), _HTMLElementAnchorData_location = new WeakMap(), _HTMLElementAnchorData_viewports = new WeakMap();
class HTMLElementAnchorTextData extends HTMLElementAnchorData {
    // #region Constructors (1)
    constructor(properties) {
        super({
            location: properties.location,
            data: properties.data,
            format: 'text',
            hideable: properties.hideable,
            viewports: properties.viewports,
            intersectionTarget: properties.intersectionTarget,
            id: properties.id,
            version: properties.version,
        });
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    clone() {
        return new HTMLElementAnchorTextData({
            location: this.location,
            data: this.data,
            hideable: this.hideable,
            viewports: this.viewports,
            intersectionTarget: this.intersectionTarget,
            id: this.id,
            version: this.version
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (1)
    create(properties) {
        var _a;
        const span = document.createElement('span');
        span.classList.add('sdv-anchor-text');
        span.style.color = (_a = properties.anchor.data.color) === null || _a === void 0 ? void 0 : _a.toString();
        span.innerHTML = properties.anchor.data.text;
        properties.parent.appendChild(span);
        if (properties.anchor.data.textAlign && (properties.anchor.data.textAlign === 'right' || properties.anchor.data.textAlign === 'center')) {
            span.style.textAlign = properties.anchor.data.textAlign;
        }
        else {
            span.style.textAlign = 'left';
        }
    }
}
exports.HTMLElementAnchorTextData = HTMLElementAnchorTextData;
class HTMLElementAnchorImageData extends HTMLElementAnchorData {
    // #region Constructors (1)
    constructor(properties) {
        super({
            location: properties.location,
            data: properties.data,
            format: 'image',
            hideable: properties.hideable,
            viewports: properties.viewports,
            intersectionTarget: properties.intersectionTarget,
            id: properties.id,
            version: properties.version
        });
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    clone() {
        return new HTMLElementAnchorImageData({
            location: this.location,
            data: this.data,
            hideable: this.hideable,
            viewports: this.viewports,
            intersectionTarget: this.intersectionTarget,
            id: this.id,
            version: this.version
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (1)
    create(properties) {
        const img = document.createElement('img');
        img.classList.add('sdv-anchor-image');
        properties.parent.appendChild(img);
        img.src = properties.anchor.data.src;
        if (properties.anchor.data.height)
            img.height = properties.anchor.data.height;
        if (properties.anchor.data.width)
            img.width = properties.anchor.data.width;
        if (properties.anchor.data.alt)
            img.alt = properties.anchor.data.alt;
    }
}
exports.HTMLElementAnchorImageData = HTMLElementAnchorImageData;
class HTMLElementAnchorCustomData extends HTMLElementAnchorData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(properties) {
        super({
            location: properties.location,
            data: properties.data,
            format: 'custom',
            hideable: properties.hideable,
            viewports: properties.viewports,
            intersectionTarget: properties.intersectionTarget,
            id: properties.id,
            version: properties.version
        });
        // #region Properties (1)
        _HTMLElementAnchorCustomData_create.set(this, void 0);
        _HTMLElementAnchorCustomData_update.set(this, void 0);
        __classPrivateFieldSet(this, _HTMLElementAnchorCustomData_create, properties.create, "f");
        __classPrivateFieldSet(this, _HTMLElementAnchorCustomData_update, properties.update, "f");
    }
    // #endregion Constructors (1)
    create(properties) {
        __classPrivateFieldGet(this, _HTMLElementAnchorCustomData_create, "f").call(this, properties);
    }
    update(properties) {
        __classPrivateFieldGet(this, _HTMLElementAnchorCustomData_update, "f").call(this, properties);
    }
    // #region Public Methods (1)
    clone() {
        return new HTMLElementAnchorCustomData({
            location: this.location,
            data: this.data,
            hideable: this.hideable,
            viewports: this.viewports,
            intersectionTarget: this.intersectionTarget,
            id: this.id,
            version: this.version,
            create: __classPrivateFieldGet(this, _HTMLElementAnchorCustomData_create, "f"),
            update: __classPrivateFieldGet(this, _HTMLElementAnchorCustomData_update, "f"),
        });
    }
}
exports.HTMLElementAnchorCustomData = HTMLElementAnchorCustomData;
_HTMLElementAnchorCustomData_create = new WeakMap(), _HTMLElementAnchorCustomData_update = new WeakMap();
//# sourceMappingURL=HTMLElementAnchorData.js.map

/***/ }),

/***/ 76612:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _AbstractMaterialData_alphaCutoff, _AbstractMaterialData_alphaMap, _AbstractMaterialData_alphaMode, _AbstractMaterialData_aoMap, _AbstractMaterialData_aoMapIntensity, _AbstractMaterialData_bumpMap, _AbstractMaterialData_bumpScale, _AbstractMaterialData_color, _AbstractMaterialData_depthTest, _AbstractMaterialData_depthWrite, _AbstractMaterialData_emissiveMap, _AbstractMaterialData_emissiveness, _AbstractMaterialData_map, _AbstractMaterialData_materialOutput, _AbstractMaterialData_name, _AbstractMaterialData_normalMap, _AbstractMaterialData_normalScale, _AbstractMaterialData_opacity, _AbstractMaterialData_shading, _AbstractMaterialData_side, _AbstractMaterialData_transparent;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractMaterialData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const IMaterialAbstractData_1 = __webpack_require__(43312);
class AbstractMaterialData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (21)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(id, version);
        // #region Properties (21)
        _AbstractMaterialData_alphaCutoff.set(this, 0);
        _AbstractMaterialData_alphaMap.set(this, void 0);
        _AbstractMaterialData_alphaMode.set(this, IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE);
        _AbstractMaterialData_aoMap.set(this, void 0);
        _AbstractMaterialData_aoMapIntensity.set(this, 1.0);
        _AbstractMaterialData_bumpMap.set(this, void 0);
        _AbstractMaterialData_bumpScale.set(this, 1.0);
        _AbstractMaterialData_color.set(this, '#ffffff');
        _AbstractMaterialData_depthTest.set(this, void 0);
        _AbstractMaterialData_depthWrite.set(this, void 0);
        _AbstractMaterialData_emissiveMap.set(this, void 0);
        _AbstractMaterialData_emissiveness.set(this, '#000000');
        _AbstractMaterialData_map.set(this, void 0);
        _AbstractMaterialData_materialOutput.set(this, false);
        _AbstractMaterialData_name.set(this, void 0);
        _AbstractMaterialData_normalMap.set(this, void 0);
        _AbstractMaterialData_normalScale.set(this, 1.0);
        _AbstractMaterialData_opacity.set(this, 1.0);
        _AbstractMaterialData_shading.set(this, IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH);
        _AbstractMaterialData_side.set(this, IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE);
        _AbstractMaterialData_transparent.set(this, void 0);
        if (!properties)
            return;
        if (properties.alphaMap !== undefined)
            this.alphaMap = properties.alphaMap;
        if (properties.alphaCutoff !== undefined)
            this.alphaCutoff = properties.alphaCutoff;
        if (properties.alphaMode !== undefined)
            this.alphaMode = properties.alphaMode;
        if (properties.aoMap !== undefined)
            this.aoMap = properties.aoMap;
        if (properties.aoMapIntensity !== undefined)
            this.aoMapIntensity = properties.aoMapIntensity;
        if (properties.bumpMap !== undefined)
            this.bumpMap = properties.bumpMap;
        if (properties.bumpScale !== undefined)
            this.bumpScale = properties.bumpScale;
        if (properties.color !== undefined)
            this.color = properties.color;
        if (properties.depthTest !== undefined)
            this.depthTest = properties.depthTest;
        if (properties.depthWrite !== undefined)
            this.depthWrite = properties.depthWrite;
        if (properties.emissiveMap !== undefined)
            this.emissiveMap = properties.emissiveMap;
        if (properties.emissiveness !== undefined)
            this.emissiveness = properties.emissiveness;
        if (properties.shading !== undefined)
            this.shading = properties.shading;
        if (properties.map !== undefined)
            this.map = properties.map;
        if (properties.name !== undefined)
            this.name = properties.name;
        if (properties.normalMap !== undefined)
            this.normalMap = properties.normalMap;
        if (properties.normalScale !== undefined)
            this.normalScale = properties.normalScale;
        if (properties.opacity !== undefined)
            this.opacity = properties.opacity;
        if (properties.side !== undefined)
            this.side = properties.side;
        if (properties.transparent !== undefined)
            this.transparent = properties.transparent;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (42)
    get alphaCutoff() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_alphaCutoff, "f");
    }
    set alphaCutoff(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_alphaCutoff, value, "f");
    }
    get alphaMap() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_alphaMap, "f");
    }
    set alphaMap(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_alphaMap, value, "f");
    }
    get alphaMode() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_alphaMode, "f");
    }
    set alphaMode(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_alphaMode, value, "f");
    }
    get aoMap() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_aoMap, "f");
    }
    set aoMap(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_aoMap, value, "f");
    }
    get aoMapIntensity() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_aoMapIntensity, "f");
    }
    set aoMapIntensity(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_aoMapIntensity, value, "f");
    }
    get bumpMap() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_bumpMap, "f");
    }
    set bumpMap(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_bumpMap, value, "f");
    }
    get bumpScale() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_bumpScale, "f");
    }
    set bumpScale(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_bumpScale, value, "f");
    }
    get color() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_color, "f");
    }
    set color(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_color, value, "f");
    }
    get depthTest() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_depthTest, "f");
    }
    set depthTest(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_depthTest, value, "f");
    }
    get depthWrite() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_depthWrite, "f");
    }
    set depthWrite(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_depthWrite, value, "f");
    }
    get emissiveMap() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_emissiveMap, "f");
    }
    set emissiveMap(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_emissiveMap, value, "f");
    }
    get emissiveness() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_emissiveness, "f");
    }
    set emissiveness(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_emissiveness, value, "f");
    }
    get map() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_map, "f");
    }
    set map(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_map, value, "f");
    }
    get materialOutput() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_materialOutput, "f");
    }
    set materialOutput(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_materialOutput, value, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_name, "f");
    }
    set name(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_name, value, "f");
    }
    get normalMap() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_normalMap, "f");
    }
    set normalMap(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_normalMap, value, "f");
    }
    get normalScale() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_normalScale, "f");
    }
    set normalScale(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_normalScale, value, "f");
    }
    get opacity() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_opacity, "f");
    }
    set opacity(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_opacity, value, "f");
    }
    get shading() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_shading, "f");
    }
    set shading(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_shading, value, "f");
    }
    get side() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_side, "f");
    }
    set side(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_side, value, "f");
    }
    get transparent() {
        return __classPrivateFieldGet(this, _AbstractMaterialData_transparent, "f");
    }
    set transparent(value) {
        __classPrivateFieldSet(this, _AbstractMaterialData_transparent, value, "f");
    }
}
exports.AbstractMaterialData = AbstractMaterialData;
_AbstractMaterialData_alphaCutoff = new WeakMap(), _AbstractMaterialData_alphaMap = new WeakMap(), _AbstractMaterialData_alphaMode = new WeakMap(), _AbstractMaterialData_aoMap = new WeakMap(), _AbstractMaterialData_aoMapIntensity = new WeakMap(), _AbstractMaterialData_bumpMap = new WeakMap(), _AbstractMaterialData_bumpScale = new WeakMap(), _AbstractMaterialData_color = new WeakMap(), _AbstractMaterialData_depthTest = new WeakMap(), _AbstractMaterialData_depthWrite = new WeakMap(), _AbstractMaterialData_emissiveMap = new WeakMap(), _AbstractMaterialData_emissiveness = new WeakMap(), _AbstractMaterialData_map = new WeakMap(), _AbstractMaterialData_materialOutput = new WeakMap(), _AbstractMaterialData_name = new WeakMap(), _AbstractMaterialData_normalMap = new WeakMap(), _AbstractMaterialData_normalScale = new WeakMap(), _AbstractMaterialData_opacity = new WeakMap(), _AbstractMaterialData_shading = new WeakMap(), _AbstractMaterialData_side = new WeakMap(), _AbstractMaterialData_transparent = new WeakMap();
//# sourceMappingURL=AbstractMaterialData.js.map

/***/ }),

/***/ 24253:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _MapData_asData, _MapData_blob, _MapData_center, _MapData_color, _MapData_data, _MapData_flipY, _MapData_image, _MapData_magFilter, _MapData_minFilter, _MapData_offset, _MapData_repeat, _MapData_rotation, _MapData_texCoord, _MapData_wrapS, _MapData_wrapT;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MapData = void 0;
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const IMapData_1 = __webpack_require__(82965);
class MapData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (15)
    // #region Constructors (1)
    constructor(image, properties, id, version) {
        super(id, version);
        // #region Properties (15)
        _MapData_asData.set(this, false);
        _MapData_blob.set(this, void 0);
        _MapData_center.set(this, gl_matrix_1.vec2.fromValues(0, 0));
        _MapData_color.set(this, void 0);
        _MapData_data.set(this, void 0);
        _MapData_flipY.set(this, true);
        _MapData_image.set(this, void 0);
        _MapData_magFilter.set(this, IMapData_1.TEXTURE_FILTERING.NONE);
        _MapData_minFilter.set(this, IMapData_1.TEXTURE_FILTERING.NONE);
        _MapData_offset.set(this, gl_matrix_1.vec2.fromValues(0, 0));
        _MapData_repeat.set(this, gl_matrix_1.vec2.fromValues(1, 1));
        _MapData_rotation.set(this, 0);
        _MapData_texCoord.set(this, void 0);
        _MapData_wrapS.set(this, IMapData_1.TEXTURE_WRAPPING.REPEAT);
        _MapData_wrapT.set(this, IMapData_1.TEXTURE_WRAPPING.REPEAT);
        __classPrivateFieldSet(this, _MapData_image, image, "f");
        __classPrivateFieldSet(this, _MapData_asData, properties && properties.asData !== undefined ? properties.asData : false, "f");
        __classPrivateFieldSet(this, _MapData_data, properties ? properties.data : undefined, "f");
        __classPrivateFieldSet(this, _MapData_blob, properties ? properties.blob : undefined, "f");
        __classPrivateFieldSet(this, _MapData_wrapS, properties && properties.wrapS !== undefined ? properties.wrapS : IMapData_1.TEXTURE_WRAPPING.REPEAT, "f");
        __classPrivateFieldSet(this, _MapData_wrapT, properties && properties.wrapT !== undefined ? properties.wrapT : IMapData_1.TEXTURE_WRAPPING.REPEAT, "f");
        __classPrivateFieldSet(this, _MapData_minFilter, properties && properties.minFilter !== undefined ? properties.minFilter : IMapData_1.TEXTURE_FILTERING.NONE, "f");
        __classPrivateFieldSet(this, _MapData_magFilter, properties && properties.magFilter !== undefined ? properties.magFilter : IMapData_1.TEXTURE_FILTERING.NONE, "f");
        __classPrivateFieldSet(this, _MapData_center, properties && properties.center !== undefined ? properties.center : gl_matrix_1.vec2.fromValues(0, 0), "f");
        __classPrivateFieldSet(this, _MapData_color, properties ? properties.color : undefined, "f");
        __classPrivateFieldSet(this, _MapData_offset, properties && properties.offset !== undefined ? properties.offset : gl_matrix_1.vec2.fromValues(0, 0), "f");
        __classPrivateFieldSet(this, _MapData_repeat, properties && properties.repeat !== undefined ? properties.repeat : gl_matrix_1.vec2.fromValues(1, 1), "f");
        __classPrivateFieldSet(this, _MapData_rotation, properties && properties.rotation !== undefined ? properties.rotation : 0, "f");
        __classPrivateFieldSet(this, _MapData_texCoord, properties ? properties.texCoord : undefined, "f");
        __classPrivateFieldSet(this, _MapData_flipY, properties && properties.flipY !== undefined ? properties.flipY : true, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (30)
    get asData() {
        return __classPrivateFieldGet(this, _MapData_asData, "f");
    }
    set asData(value) {
        __classPrivateFieldSet(this, _MapData_asData, value, "f");
    }
    get blob() {
        return __classPrivateFieldGet(this, _MapData_blob, "f");
    }
    set blob(value) {
        __classPrivateFieldSet(this, _MapData_blob, value, "f");
    }
    get center() {
        return __classPrivateFieldGet(this, _MapData_center, "f");
    }
    set center(value) {
        __classPrivateFieldSet(this, _MapData_center, value, "f");
    }
    get color() {
        return __classPrivateFieldGet(this, _MapData_color, "f");
    }
    set color(value) {
        __classPrivateFieldSet(this, _MapData_color, value, "f");
    }
    get data() {
        return __classPrivateFieldGet(this, _MapData_data, "f");
    }
    set data(value) {
        __classPrivateFieldSet(this, _MapData_data, value, "f");
    }
    get flipY() {
        return __classPrivateFieldGet(this, _MapData_flipY, "f");
    }
    set flipY(value) {
        __classPrivateFieldSet(this, _MapData_flipY, value, "f");
    }
    get image() {
        return __classPrivateFieldGet(this, _MapData_image, "f");
    }
    set image(value) {
        __classPrivateFieldSet(this, _MapData_image, value, "f");
    }
    get magFilter() {
        return __classPrivateFieldGet(this, _MapData_magFilter, "f");
    }
    set magFilter(value) {
        __classPrivateFieldSet(this, _MapData_magFilter, value, "f");
    }
    get minFilter() {
        return __classPrivateFieldGet(this, _MapData_minFilter, "f");
    }
    set minFilter(value) {
        __classPrivateFieldSet(this, _MapData_minFilter, value, "f");
    }
    get offset() {
        return __classPrivateFieldGet(this, _MapData_offset, "f");
    }
    set offset(value) {
        __classPrivateFieldSet(this, _MapData_offset, value, "f");
    }
    get repeat() {
        return __classPrivateFieldGet(this, _MapData_repeat, "f");
    }
    set repeat(value) {
        __classPrivateFieldSet(this, _MapData_repeat, value, "f");
    }
    get rotation() {
        return __classPrivateFieldGet(this, _MapData_rotation, "f");
    }
    set rotation(value) {
        __classPrivateFieldSet(this, _MapData_rotation, value, "f");
    }
    get texCoord() {
        return __classPrivateFieldGet(this, _MapData_texCoord, "f");
    }
    set texCoord(value) {
        __classPrivateFieldSet(this, _MapData_texCoord, value, "f");
    }
    get wrapS() {
        return __classPrivateFieldGet(this, _MapData_wrapS, "f");
    }
    set wrapS(value) {
        __classPrivateFieldSet(this, _MapData_wrapS, value, "f");
    }
    get wrapT() {
        return __classPrivateFieldGet(this, _MapData_wrapT, "f");
    }
    set wrapT(value) {
        __classPrivateFieldSet(this, _MapData_wrapT, value, "f");
    }
    // #endregion Public Getters And Setters (30)
    // #region Public Methods (1)
    clone() {
        return new MapData(this.image, {
            asData: this.asData,
            data: this.data,
            blob: this.blob,
            wrapS: this.wrapS,
            wrapT: this.wrapT,
            minFilter: this.minFilter,
            magFilter: this.magFilter,
            center: this.center,
            color: this.color,
            offset: this.offset,
            repeat: this.repeat,
            rotation: this.rotation,
            texCoord: this.texCoord,
            flipY: this.flipY
        }, this.id, this.version);
    }
}
exports.MapData = MapData;
_MapData_asData = new WeakMap(), _MapData_blob = new WeakMap(), _MapData_center = new WeakMap(), _MapData_color = new WeakMap(), _MapData_data = new WeakMap(), _MapData_flipY = new WeakMap(), _MapData_image = new WeakMap(), _MapData_magFilter = new WeakMap(), _MapData_minFilter = new WeakMap(), _MapData_offset = new WeakMap(), _MapData_repeat = new WeakMap(), _MapData_rotation = new WeakMap(), _MapData_texCoord = new WeakMap(), _MapData_wrapS = new WeakMap(), _MapData_wrapT = new WeakMap();
//# sourceMappingURL=MapData.js.map

/***/ }),

/***/ 77532:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialBasicLineData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
const IMaterialAbstractData_1 = __webpack_require__(43312);
class MaterialBasicLineData extends AbstractMaterialData_1.AbstractMaterialData {
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        if (!properties)
            return;
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    clone() {
        return new MaterialBasicLineData({
            alphaMap: this.alphaMap,
            alphaCutoff: this.alphaCutoff,
            alphaMode: this.alphaMode,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            color: this.color,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            map: this.map,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            side: this.side,
            transparent: this.transparent
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMap = source.alphaMap;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.color = source.color;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.map = source.map;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.transparent = source.transparent;
    }
    reset() {
        this.alphaCutoff = 0;
        this.alphaMap = undefined;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.color = '#ffffff';
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.map = undefined;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
    }
}
exports.MaterialBasicLineData = MaterialBasicLineData;
//# sourceMappingURL=MaterialBasicLineData.js.map

/***/ }),

/***/ 70899:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialGemData_refractionIndex, _MaterialGemData_impurityMap, _MaterialGemData_impurityScale, _MaterialGemData_colorTransferBegin, _MaterialGemData_colorTransferEnd, _MaterialGemData_center, _MaterialGemData_radius, _MaterialGemData_sphericalNormalMap, _MaterialGemData_gamma, _MaterialGemData_contrast, _MaterialGemData_brightness, _MaterialGemData_dispersion, _MaterialGemData_tracingDepth, _MaterialGemData_tracingOpacity, _MaterialGemData_envMap;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialGemData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
const IMaterialAbstractData_1 = __webpack_require__(43312);
const gl_matrix_1 = __webpack_require__(61961);
class MaterialGemData extends AbstractMaterialData_1.AbstractMaterialData {
    // #endregion Properties (5)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        // #region Properties (5)
        _MaterialGemData_refractionIndex.set(this, 2.4);
        _MaterialGemData_impurityMap.set(this, void 0);
        _MaterialGemData_impurityScale.set(this, 1.0);
        _MaterialGemData_colorTransferBegin.set(this, '#ffffff');
        _MaterialGemData_colorTransferEnd.set(this, '#ffffff');
        _MaterialGemData_center.set(this, gl_matrix_1.vec3.create());
        _MaterialGemData_radius.set(this, 1);
        _MaterialGemData_sphericalNormalMap.set(this, void 0);
        _MaterialGemData_gamma.set(this, 1);
        _MaterialGemData_contrast.set(this, 1);
        _MaterialGemData_brightness.set(this, 0);
        _MaterialGemData_dispersion.set(this, 0);
        _MaterialGemData_tracingDepth.set(this, 5);
        _MaterialGemData_tracingOpacity.set(this, 0);
        _MaterialGemData_envMap.set(this, void 0);
        if (!properties)
            return;
        if (properties.refractionIndex !== undefined)
            this.refractionIndex = properties.refractionIndex;
        if (properties.impurityMap !== undefined)
            this.impurityMap = properties.impurityMap;
        if (properties.impurityScale !== undefined)
            this.impurityScale = properties.impurityScale;
        if (properties.colorTransferBegin !== undefined)
            this.colorTransferBegin = properties.colorTransferBegin;
        if (properties.colorTransferEnd !== undefined)
            this.colorTransferEnd = properties.colorTransferEnd;
        if (properties.center !== undefined)
            this.center = properties.center;
        if (properties.tracingDepth !== undefined)
            this.tracingDepth = properties.tracingDepth;
        if (properties.radius !== undefined)
            this.radius = properties.radius;
        if (properties.sphericalNormalMap !== undefined)
            this.sphericalNormalMap = properties.sphericalNormalMap;
        if (properties.gamma !== undefined)
            this.gamma = properties.gamma;
        if (properties.contrast !== undefined)
            this.contrast = properties.contrast;
        if (properties.brightness !== undefined)
            this.brightness = properties.brightness;
        if (properties.dispersion !== undefined)
            this.dispersion = properties.dispersion;
        if (properties.tracingOpacity !== undefined)
            this.tracingOpacity = properties.tracingOpacity;
        if (properties.envMap !== undefined)
            this.envMap = properties.envMap;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (10)
    get refractionIndex() {
        return __classPrivateFieldGet(this, _MaterialGemData_refractionIndex, "f");
    }
    set refractionIndex(value) {
        __classPrivateFieldSet(this, _MaterialGemData_refractionIndex, value, "f");
    }
    get impurityMap() {
        return __classPrivateFieldGet(this, _MaterialGemData_impurityMap, "f");
    }
    set impurityMap(value) {
        __classPrivateFieldSet(this, _MaterialGemData_impurityMap, value, "f");
    }
    get impurityScale() {
        return __classPrivateFieldGet(this, _MaterialGemData_impurityScale, "f");
    }
    set impurityScale(value) {
        __classPrivateFieldSet(this, _MaterialGemData_impurityScale, value, "f");
    }
    get colorTransferBegin() {
        return __classPrivateFieldGet(this, _MaterialGemData_colorTransferBegin, "f");
    }
    set colorTransferBegin(value) {
        __classPrivateFieldSet(this, _MaterialGemData_colorTransferBegin, value, "f");
    }
    get colorTransferEnd() {
        return __classPrivateFieldGet(this, _MaterialGemData_colorTransferEnd, "f");
    }
    set colorTransferEnd(value) {
        __classPrivateFieldSet(this, _MaterialGemData_colorTransferEnd, value, "f");
    }
    get center() {
        return __classPrivateFieldGet(this, _MaterialGemData_center, "f");
    }
    set center(value) {
        __classPrivateFieldSet(this, _MaterialGemData_center, value, "f");
    }
    get tracingDepth() {
        return __classPrivateFieldGet(this, _MaterialGemData_tracingDepth, "f");
    }
    set tracingDepth(value) {
        __classPrivateFieldSet(this, _MaterialGemData_tracingDepth, value, "f");
    }
    get radius() {
        return __classPrivateFieldGet(this, _MaterialGemData_radius, "f");
    }
    set radius(value) {
        __classPrivateFieldSet(this, _MaterialGemData_radius, value, "f");
    }
    get sphericalNormalMap() {
        return __classPrivateFieldGet(this, _MaterialGemData_sphericalNormalMap, "f");
    }
    set sphericalNormalMap(value) {
        __classPrivateFieldSet(this, _MaterialGemData_sphericalNormalMap, value, "f");
    }
    get gamma() {
        return __classPrivateFieldGet(this, _MaterialGemData_gamma, "f");
    }
    set gamma(value) {
        __classPrivateFieldSet(this, _MaterialGemData_gamma, value, "f");
    }
    get contrast() {
        return __classPrivateFieldGet(this, _MaterialGemData_contrast, "f");
    }
    set contrast(value) {
        __classPrivateFieldSet(this, _MaterialGemData_contrast, value, "f");
    }
    get brightness() {
        return __classPrivateFieldGet(this, _MaterialGemData_brightness, "f");
    }
    set brightness(value) {
        __classPrivateFieldSet(this, _MaterialGemData_brightness, value, "f");
    }
    get dispersion() {
        return __classPrivateFieldGet(this, _MaterialGemData_dispersion, "f");
    }
    set dispersion(value) {
        __classPrivateFieldSet(this, _MaterialGemData_dispersion, value, "f");
    }
    get tracingOpacity() {
        return __classPrivateFieldGet(this, _MaterialGemData_tracingOpacity, "f");
    }
    set tracingOpacity(value) {
        __classPrivateFieldSet(this, _MaterialGemData_tracingOpacity, value, "f");
    }
    get envMap() {
        return __classPrivateFieldGet(this, _MaterialGemData_envMap, "f");
    }
    set envMap(value) {
        __classPrivateFieldSet(this, _MaterialGemData_envMap, value, "f");
    }
    // #endregion Public Accessors (10)
    // #region Public Methods (3)
    clone() {
        return new MaterialGemData({
            alphaMap: this.alphaMap,
            alphaCutoff: this.alphaCutoff,
            alphaMode: this.alphaMode,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            color: this.color,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            map: this.map,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            side: this.side,
            transparent: this.transparent,
            refractionIndex: this.refractionIndex,
            impurityMap: this.impurityMap,
            impurityScale: this.impurityScale,
            colorTransferBegin: this.colorTransferBegin,
            colorTransferEnd: this.colorTransferEnd,
            center: this.center,
            tracingDepth: this.tracingDepth,
            radius: this.radius,
            sphericalNormalMap: this.sphericalNormalMap,
            gamma: this.gamma,
            contrast: this.contrast,
            brightness: this.brightness,
            dispersion: this.dispersion,
            tracingOpacity: this.tracingOpacity,
            envMap: this.envMap,
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMap = source.alphaMap;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.color = source.color;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.map = source.map;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.transparent = source.transparent;
        this.refractionIndex = source.refractionIndex;
        this.impurityMap = source.impurityMap;
        this.impurityScale = source.impurityScale;
        this.colorTransferBegin = source.colorTransferBegin;
        this.colorTransferEnd = source.colorTransferEnd;
        this.center = source.center;
        this.tracingDepth = source.tracingDepth;
        this.radius = source.radius;
        this.sphericalNormalMap = source.sphericalNormalMap;
        this.gamma = source.gamma;
        this.contrast = source.contrast;
        this.brightness = source.brightness;
        this.dispersion = source.dispersion;
        this.tracingOpacity = source.tracingOpacity;
        this.envMap = source.envMap;
    }
    reset() {
        this.alphaCutoff = 0;
        this.alphaMap = undefined;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.color = '#ffffff';
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.map = undefined;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
        this.refractionIndex = 2.4;
        this.impurityMap = undefined;
        this.impurityScale = 1.0;
        this.colorTransferBegin = '#ffffff';
        this.colorTransferEnd = '#ffffff';
        this.center = gl_matrix_1.vec3.create();
        this.radius = 1;
        this.sphericalNormalMap = undefined;
        this.gamma = 1;
        this.contrast = 1;
        this.brightness = 0;
        this.dispersion = 0;
        this.tracingDepth = 5;
        this.tracingOpacity = 0;
        this.envMap = undefined;
    }
}
exports.MaterialGemData = MaterialGemData;
_MaterialGemData_refractionIndex = new WeakMap(), _MaterialGemData_impurityMap = new WeakMap(), _MaterialGemData_impurityScale = new WeakMap(), _MaterialGemData_colorTransferBegin = new WeakMap(), _MaterialGemData_colorTransferEnd = new WeakMap(), _MaterialGemData_center = new WeakMap(), _MaterialGemData_radius = new WeakMap(), _MaterialGemData_sphericalNormalMap = new WeakMap(), _MaterialGemData_gamma = new WeakMap(), _MaterialGemData_contrast = new WeakMap(), _MaterialGemData_brightness = new WeakMap(), _MaterialGemData_dispersion = new WeakMap(), _MaterialGemData_tracingDepth = new WeakMap(), _MaterialGemData_tracingOpacity = new WeakMap(), _MaterialGemData_envMap = new WeakMap();
//# sourceMappingURL=MaterialGemData.js.map

/***/ }),

/***/ 73155:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialMultiPointData_alphaMap_0, _MaterialMultiPointData_alphaMap_1, _MaterialMultiPointData_alphaMap_2, _MaterialMultiPointData_alphaMap_3, _MaterialMultiPointData_alphaMap_4, _MaterialMultiPointData_alphaMap_5, _MaterialMultiPointData_alphaMap_6, _MaterialMultiPointData_alphaMap_7, _MaterialMultiPointData_color_0, _MaterialMultiPointData_color_1, _MaterialMultiPointData_color_2, _MaterialMultiPointData_color_3, _MaterialMultiPointData_color_4, _MaterialMultiPointData_color_5, _MaterialMultiPointData_color_6, _MaterialMultiPointData_color_7, _MaterialMultiPointData_map_0, _MaterialMultiPointData_map_1, _MaterialMultiPointData_map_2, _MaterialMultiPointData_map_3, _MaterialMultiPointData_map_4, _MaterialMultiPointData_map_5, _MaterialMultiPointData_map_6, _MaterialMultiPointData_map_7, _MaterialMultiPointData_materialIndexDataMap, _MaterialMultiPointData_materialIndexDataMapSize, _MaterialMultiPointData_sizeAttenuation_0, _MaterialMultiPointData_sizeAttenuation_1, _MaterialMultiPointData_sizeAttenuation_2, _MaterialMultiPointData_sizeAttenuation_3, _MaterialMultiPointData_sizeAttenuation_4, _MaterialMultiPointData_sizeAttenuation_5, _MaterialMultiPointData_sizeAttenuation_6, _MaterialMultiPointData_sizeAttenuation_7, _MaterialMultiPointData_size_0, _MaterialMultiPointData_size_1, _MaterialMultiPointData_size_2, _MaterialMultiPointData_size_3, _MaterialMultiPointData_size_4, _MaterialMultiPointData_size_5, _MaterialMultiPointData_size_6, _MaterialMultiPointData_size_7;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialMultiPointData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
const IMaterialAbstractData_1 = __webpack_require__(43312);
class MaterialMultiPointData extends AbstractMaterialData_1.AbstractMaterialData {
    // #endregion Properties (20)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        // #region Properties (20)
        _MaterialMultiPointData_alphaMap_0.set(this, undefined);
        _MaterialMultiPointData_alphaMap_1.set(this, undefined);
        _MaterialMultiPointData_alphaMap_2.set(this, undefined);
        _MaterialMultiPointData_alphaMap_3.set(this, undefined);
        _MaterialMultiPointData_alphaMap_4.set(this, undefined);
        _MaterialMultiPointData_alphaMap_5.set(this, undefined);
        _MaterialMultiPointData_alphaMap_6.set(this, undefined);
        _MaterialMultiPointData_alphaMap_7.set(this, undefined);
        _MaterialMultiPointData_color_0.set(this, '#ffffff');
        _MaterialMultiPointData_color_1.set(this, '#ffffff');
        _MaterialMultiPointData_color_2.set(this, '#ffffff');
        _MaterialMultiPointData_color_3.set(this, '#ffffff');
        _MaterialMultiPointData_color_4.set(this, '#ffffff');
        _MaterialMultiPointData_color_5.set(this, '#ffffff');
        _MaterialMultiPointData_color_6.set(this, '#ffffff');
        _MaterialMultiPointData_color_7.set(this, '#ffffff');
        _MaterialMultiPointData_map_0.set(this, undefined);
        _MaterialMultiPointData_map_1.set(this, undefined);
        _MaterialMultiPointData_map_2.set(this, undefined);
        _MaterialMultiPointData_map_3.set(this, undefined);
        _MaterialMultiPointData_map_4.set(this, undefined);
        _MaterialMultiPointData_map_5.set(this, undefined);
        _MaterialMultiPointData_map_6.set(this, undefined);
        _MaterialMultiPointData_map_7.set(this, undefined);
        _MaterialMultiPointData_materialIndexDataMap.set(this, undefined);
        _MaterialMultiPointData_materialIndexDataMapSize.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_0.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_1.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_2.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_3.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_4.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_5.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_6.set(this, undefined);
        _MaterialMultiPointData_sizeAttenuation_7.set(this, undefined);
        _MaterialMultiPointData_size_0.set(this, undefined);
        _MaterialMultiPointData_size_1.set(this, undefined);
        _MaterialMultiPointData_size_2.set(this, undefined);
        _MaterialMultiPointData_size_3.set(this, undefined);
        _MaterialMultiPointData_size_4.set(this, undefined);
        _MaterialMultiPointData_size_5.set(this, undefined);
        _MaterialMultiPointData_size_6.set(this, undefined);
        _MaterialMultiPointData_size_7.set(this, undefined);
        if (!properties)
            return;
        if (properties.materialIndexDataMap !== undefined)
            this.materialIndexDataMap = properties.materialIndexDataMap;
        if (properties.materialIndexDataMapSize !== undefined)
            this.materialIndexDataMapSize = properties.materialIndexDataMapSize;
        if (properties.alphaMap_0 !== undefined)
            this.alphaMap_0 = properties.alphaMap_0;
        if (properties.color_0 !== undefined)
            this.color_0 = properties.color_0;
        if (properties.map_0 !== undefined)
            this.map_0 = properties.map_0;
        if (properties.size_0 !== undefined)
            this.size_0 = properties.size_0;
        if (properties.sizeAttenuation_0 !== undefined)
            this.sizeAttenuation_0 = properties.sizeAttenuation_0;
        if (properties.alphaMap_1 !== undefined)
            this.alphaMap_1 = properties.alphaMap_1;
        if (properties.color_1 !== undefined)
            this.color_1 = properties.color_1;
        if (properties.map_1 !== undefined)
            this.map_1 = properties.map_1;
        if (properties.size_1 !== undefined)
            this.size_1 = properties.size_1;
        if (properties.sizeAttenuation_1 !== undefined)
            this.sizeAttenuation_1 = properties.sizeAttenuation_1;
        if (properties.alphaMap_2 !== undefined)
            this.alphaMap_2 = properties.alphaMap_2;
        if (properties.color_2 !== undefined)
            this.color_2 = properties.color_2;
        if (properties.map_2 !== undefined)
            this.map_2 = properties.map_2;
        if (properties.size_2 !== undefined)
            this.size_2 = properties.size_2;
        if (properties.sizeAttenuation_2 !== undefined)
            this.sizeAttenuation_2 = properties.sizeAttenuation_2;
        if (properties.alphaMap_3 !== undefined)
            this.alphaMap_3 = properties.alphaMap_3;
        if (properties.color_3 !== undefined)
            this.color_3 = properties.color_3;
        if (properties.map_3 !== undefined)
            this.map_3 = properties.map_3;
        if (properties.size_3 !== undefined)
            this.size_3 = properties.size_3;
        if (properties.sizeAttenuation_3 !== undefined)
            this.sizeAttenuation_3 = properties.sizeAttenuation_3;
        if (properties.alphaMap_4 !== undefined)
            this.alphaMap_4 = properties.alphaMap_4;
        if (properties.color_4 !== undefined)
            this.color_4 = properties.color_4;
        if (properties.map_4 !== undefined)
            this.map_4 = properties.map_4;
        if (properties.size_4 !== undefined)
            this.size_4 = properties.size_4;
        if (properties.sizeAttenuation_4 !== undefined)
            this.sizeAttenuation_4 = properties.sizeAttenuation_4;
        if (properties.alphaMap_5 !== undefined)
            this.alphaMap_5 = properties.alphaMap_5;
        if (properties.color_5 !== undefined)
            this.color_5 = properties.color_5;
        if (properties.map_5 !== undefined)
            this.map_5 = properties.map_5;
        if (properties.size_5 !== undefined)
            this.size_5 = properties.size_5;
        if (properties.sizeAttenuation_5 !== undefined)
            this.sizeAttenuation_5 = properties.sizeAttenuation_5;
        if (properties.alphaMap_6 !== undefined)
            this.alphaMap_6 = properties.alphaMap_6;
        if (properties.color_6 !== undefined)
            this.color_6 = properties.color_6;
        if (properties.map_6 !== undefined)
            this.map_6 = properties.map_6;
        if (properties.size_6 !== undefined)
            this.size_6 = properties.size_6;
        if (properties.sizeAttenuation_6 !== undefined)
            this.sizeAttenuation_6 = properties.sizeAttenuation_6;
        if (properties.alphaMap_7 !== undefined)
            this.alphaMap_7 = properties.alphaMap_7;
        if (properties.color_7 !== undefined)
            this.color_7 = properties.color_7;
        if (properties.map_7 !== undefined)
            this.map_7 = properties.map_7;
        if (properties.size_7 !== undefined)
            this.size_7 = properties.size_7;
        if (properties.sizeAttenuation_7 !== undefined)
            this.sizeAttenuation_7 = properties.sizeAttenuation_7;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (40)
    get alphaMap_0() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_0, "f");
    }
    set alphaMap_0(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_0, value, "f");
    }
    get alphaMap_1() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_1, "f");
    }
    set alphaMap_1(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_1, value, "f");
    }
    get alphaMap_2() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_2, "f");
    }
    set alphaMap_2(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_2, value, "f");
    }
    get color_0() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_0, "f");
    }
    set color_0(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_0, value, "f");
    }
    get color_1() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_1, "f");
    }
    set color_1(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_1, value, "f");
    }
    get color_2() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_2, "f");
    }
    set color_2(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_2, value, "f");
    }
    get map_0() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_0, "f");
    }
    set map_0(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_0, value, "f");
    }
    get map_1() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_1, "f");
    }
    set map_1(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_1, value, "f");
    }
    get map_2() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_2, "f");
    }
    set map_2(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_2, value, "f");
    }
    get materialIndexDataMap() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_materialIndexDataMap, "f");
    }
    set materialIndexDataMap(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_materialIndexDataMap, value, "f");
    }
    get materialIndexDataMapSize() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_materialIndexDataMapSize, "f");
    }
    set materialIndexDataMapSize(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_materialIndexDataMapSize, value, "f");
    }
    get sizeAttenuation_0() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_0, "f");
    }
    set sizeAttenuation_0(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_0, value, "f");
    }
    get sizeAttenuation_1() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_1, "f");
    }
    set sizeAttenuation_1(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_1, value, "f");
    }
    get sizeAttenuation_2() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_2, "f");
    }
    set sizeAttenuation_2(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_2, value, "f");
    }
    get size_0() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_0, "f");
    }
    set size_0(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_0, value, "f");
    }
    get size_1() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_1, "f");
    }
    set size_1(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_1, value, "f");
    }
    get size_2() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_2, "f");
    }
    set size_2(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_2, value, "f");
    }
    get alphaMap_3() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_3, "f");
    }
    set alphaMap_3(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_3, value, "f");
    }
    get color_3() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_3, "f");
    }
    set color_3(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_3, value, "f");
    }
    get map_3() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_3, "f");
    }
    set map_3(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_3, value, "f");
    }
    get size_3() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_3, "f");
    }
    set size_3(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_3, value, "f");
    }
    get sizeAttenuation_3() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_3, "f");
    }
    set sizeAttenuation_3(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_3, value, "f");
    }
    get alphaMap_4() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_4, "f");
    }
    set alphaMap_4(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_4, value, "f");
    }
    get color_4() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_4, "f");
    }
    set color_4(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_4, value, "f");
    }
    get map_4() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_4, "f");
    }
    set map_4(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_4, value, "f");
    }
    get size_4() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_4, "f");
    }
    set size_4(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_4, value, "f");
    }
    get sizeAttenuation_4() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_4, "f");
    }
    set sizeAttenuation_4(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_4, value, "f");
    }
    get alphaMap_5() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_5, "f");
    }
    set alphaMap_5(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_5, value, "f");
    }
    get color_5() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_5, "f");
    }
    set color_5(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_5, value, "f");
    }
    get map_5() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_5, "f");
    }
    set map_5(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_5, value, "f");
    }
    get size_5() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_5, "f");
    }
    set size_5(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_5, value, "f");
    }
    get sizeAttenuation_5() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_5, "f");
    }
    set sizeAttenuation_5(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_5, value, "f");
    }
    get alphaMap_6() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_6, "f");
    }
    set alphaMap_6(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_6, value, "f");
    }
    get color_6() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_6, "f");
    }
    set color_6(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_6, value, "f");
    }
    get map_6() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_6, "f");
    }
    set map_6(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_6, value, "f");
    }
    get size_6() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_6, "f");
    }
    set size_6(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_6, value, "f");
    }
    get sizeAttenuation_6() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_6, "f");
    }
    set sizeAttenuation_6(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_6, value, "f");
    }
    get alphaMap_7() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_alphaMap_7, "f");
    }
    set alphaMap_7(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_alphaMap_7, value, "f");
    }
    get color_7() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_color_7, "f");
    }
    set color_7(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_color_7, value, "f");
    }
    get map_7() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_map_7, "f");
    }
    set map_7(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_map_7, value, "f");
    }
    get size_7() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_size_7, "f");
    }
    set size_7(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_size_7, value, "f");
    }
    get sizeAttenuation_7() {
        return __classPrivateFieldGet(this, _MaterialMultiPointData_sizeAttenuation_7, "f");
    }
    set sizeAttenuation_7(value) {
        __classPrivateFieldSet(this, _MaterialMultiPointData_sizeAttenuation_7, value, "f");
    }
    // #endregion Public Getters And Setters (40)
    // #region Public Methods (3)
    clone() {
        return new MaterialMultiPointData({
            alphaMode: this.alphaMode,
            alphaCutoff: this.alphaCutoff,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            side: this.side,
            transparent: this.transparent,
            alphaMap_0: this.alphaMap_0,
            alphaMap_1: this.alphaMap_1,
            alphaMap_2: this.alphaMap_2,
            alphaMap_3: this.alphaMap_3,
            alphaMap_4: this.alphaMap_4,
            alphaMap_5: this.alphaMap_5,
            alphaMap_6: this.alphaMap_6,
            alphaMap_7: this.alphaMap_7,
            color_0: this.color_0,
            color_1: this.color_1,
            color_2: this.color_2,
            color_3: this.color_3,
            color_4: this.color_4,
            color_5: this.color_5,
            color_6: this.color_6,
            color_7: this.color_7,
            map_0: this.map_0,
            map_1: this.map_1,
            map_2: this.map_2,
            map_3: this.map_3,
            map_4: this.map_4,
            map_5: this.map_5,
            map_6: this.map_6,
            map_7: this.map_7,
            materialIndexDataMap: this.materialIndexDataMap,
            materialIndexDataMapSize: this.materialIndexDataMapSize,
            size_0: this.size_0,
            size_1: this.size_1,
            size_2: this.size_2,
            size_3: this.size_3,
            size_4: this.size_4,
            size_5: this.size_5,
            size_6: this.size_6,
            size_7: this.size_7,
            sizeAttenuation_0: this.sizeAttenuation_0,
            sizeAttenuation_1: this.sizeAttenuation_1,
            sizeAttenuation_2: this.sizeAttenuation_2,
            sizeAttenuation_3: this.sizeAttenuation_3,
            sizeAttenuation_4: this.sizeAttenuation_4,
            sizeAttenuation_5: this.sizeAttenuation_5,
            sizeAttenuation_6: this.sizeAttenuation_6,
            sizeAttenuation_7: this.sizeAttenuation_7
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.transparent = source.transparent;
        this.alphaMap_0 = source.alphaMap_0;
        this.alphaMap_1 = source.alphaMap_1;
        this.alphaMap_2 = source.alphaMap_2;
        this.alphaMap_3 = source.alphaMap_3;
        this.alphaMap_4 = source.alphaMap_4;
        this.alphaMap_5 = source.alphaMap_5;
        this.alphaMap_6 = source.alphaMap_6;
        this.alphaMap_7 = source.alphaMap_7;
        this.color_0 = source.color_0;
        this.color_1 = source.color_1;
        this.color_2 = source.color_2;
        this.color_3 = source.color_3;
        this.color_4 = source.color_4;
        this.color_5 = source.color_5;
        this.color_6 = source.color_6;
        this.color_7 = source.color_7;
        this.map_0 = source.map_0;
        this.map_1 = source.map_1;
        this.map_2 = source.map_2;
        this.map_3 = source.map_3;
        this.map_4 = source.map_4;
        this.map_5 = source.map_5;
        this.map_6 = source.map_6;
        this.map_7 = source.map_7;
        this.materialIndexDataMap = source.materialIndexDataMap;
        this.materialIndexDataMapSize = source.materialIndexDataMapSize;
        this.size_0 = source.size_0;
        this.size_1 = source.size_1;
        this.size_2 = source.size_2;
        this.size_3 = source.size_3;
        this.size_4 = source.size_4;
        this.size_5 = source.size_5;
        this.size_6 = source.size_6;
        this.size_7 = source.size_7;
        this.sizeAttenuation_0 = source.sizeAttenuation_0;
        this.sizeAttenuation_1 = source.sizeAttenuation_1;
        this.sizeAttenuation_2 = source.sizeAttenuation_2;
        this.sizeAttenuation_3 = source.sizeAttenuation_3;
        this.sizeAttenuation_4 = source.sizeAttenuation_4;
        this.sizeAttenuation_5 = source.sizeAttenuation_5;
        this.sizeAttenuation_6 = source.sizeAttenuation_6;
        this.sizeAttenuation_7 = source.sizeAttenuation_7;
    }
    reset() {
        this.alphaCutoff = 0;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
        this.alphaMap_0 = undefined;
        this.alphaMap_1 = undefined;
        this.alphaMap_2 = undefined;
        this.alphaMap_3 = undefined;
        this.alphaMap_4 = undefined;
        this.alphaMap_5 = undefined;
        this.alphaMap_6 = undefined;
        this.alphaMap_7 = undefined;
        this.color_0 = '#ffffff';
        this.color_1 = '#ffffff';
        this.color_2 = '#ffffff';
        this.color_3 = '#ffffff';
        this.color_4 = '#ffffff';
        this.color_5 = '#ffffff';
        this.color_6 = '#ffffff';
        this.color_7 = '#ffffff';
        this.map_0 = undefined;
        this.map_1 = undefined;
        this.map_2 = undefined;
        this.map_3 = undefined;
        this.map_4 = undefined;
        this.map_5 = undefined;
        this.map_6 = undefined;
        this.map_7 = undefined;
        this.materialIndexDataMap = undefined;
        this.materialIndexDataMapSize = undefined;
        this.size_0 = undefined;
        this.size_1 = undefined;
        this.size_2 = undefined;
        this.size_3 = undefined;
        this.size_4 = undefined;
        this.size_5 = undefined;
        this.size_6 = undefined;
        this.size_7 = undefined;
        this.sizeAttenuation_0 = undefined;
        this.sizeAttenuation_1 = undefined;
        this.sizeAttenuation_2 = undefined;
        this.sizeAttenuation_3 = undefined;
        this.sizeAttenuation_4 = undefined;
        this.sizeAttenuation_5 = undefined;
        this.sizeAttenuation_6 = undefined;
        this.sizeAttenuation_7 = undefined;
    }
}
exports.MaterialMultiPointData = MaterialMultiPointData;
_MaterialMultiPointData_alphaMap_0 = new WeakMap(), _MaterialMultiPointData_alphaMap_1 = new WeakMap(), _MaterialMultiPointData_alphaMap_2 = new WeakMap(), _MaterialMultiPointData_alphaMap_3 = new WeakMap(), _MaterialMultiPointData_alphaMap_4 = new WeakMap(), _MaterialMultiPointData_alphaMap_5 = new WeakMap(), _MaterialMultiPointData_alphaMap_6 = new WeakMap(), _MaterialMultiPointData_alphaMap_7 = new WeakMap(), _MaterialMultiPointData_color_0 = new WeakMap(), _MaterialMultiPointData_color_1 = new WeakMap(), _MaterialMultiPointData_color_2 = new WeakMap(), _MaterialMultiPointData_color_3 = new WeakMap(), _MaterialMultiPointData_color_4 = new WeakMap(), _MaterialMultiPointData_color_5 = new WeakMap(), _MaterialMultiPointData_color_6 = new WeakMap(), _MaterialMultiPointData_color_7 = new WeakMap(), _MaterialMultiPointData_map_0 = new WeakMap(), _MaterialMultiPointData_map_1 = new WeakMap(), _MaterialMultiPointData_map_2 = new WeakMap(), _MaterialMultiPointData_map_3 = new WeakMap(), _MaterialMultiPointData_map_4 = new WeakMap(), _MaterialMultiPointData_map_5 = new WeakMap(), _MaterialMultiPointData_map_6 = new WeakMap(), _MaterialMultiPointData_map_7 = new WeakMap(), _MaterialMultiPointData_materialIndexDataMap = new WeakMap(), _MaterialMultiPointData_materialIndexDataMapSize = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_0 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_1 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_2 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_3 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_4 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_5 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_6 = new WeakMap(), _MaterialMultiPointData_sizeAttenuation_7 = new WeakMap(), _MaterialMultiPointData_size_0 = new WeakMap(), _MaterialMultiPointData_size_1 = new WeakMap(), _MaterialMultiPointData_size_2 = new WeakMap(), _MaterialMultiPointData_size_3 = new WeakMap(), _MaterialMultiPointData_size_4 = new WeakMap(), _MaterialMultiPointData_size_5 = new WeakMap(), _MaterialMultiPointData_size_6 = new WeakMap(), _MaterialMultiPointData_size_7 = new WeakMap();
//# sourceMappingURL=MaterialMultiPointData.js.map

/***/ }),

/***/ 66930:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialPointData_size, _MaterialPointData_sizeAttenuation;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialPointData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
const IMaterialAbstractData_1 = __webpack_require__(43312);
class MaterialPointData extends AbstractMaterialData_1.AbstractMaterialData {
    // #endregion Properties (2)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        // #region Properties (2)
        _MaterialPointData_size.set(this, undefined);
        _MaterialPointData_sizeAttenuation.set(this, undefined);
        if (!properties)
            return;
        if (properties.size !== undefined)
            this.size = properties.size;
        if (properties.sizeAttenuation !== undefined)
            this.sizeAttenuation = properties.sizeAttenuation;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (4)
    get size() {
        return __classPrivateFieldGet(this, _MaterialPointData_size, "f");
    }
    set size(value) {
        __classPrivateFieldSet(this, _MaterialPointData_size, value, "f");
    }
    get sizeAttenuation() {
        return __classPrivateFieldGet(this, _MaterialPointData_sizeAttenuation, "f");
    }
    set sizeAttenuation(value) {
        __classPrivateFieldSet(this, _MaterialPointData_sizeAttenuation, value, "f");
    }
    // #endregion Public Accessors (4)
    // #region Public Methods (3)
    clone() {
        return new MaterialPointData({
            alphaMap: this.alphaMap,
            alphaCutoff: this.alphaCutoff,
            alphaMode: this.alphaMode,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            color: this.color,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            map: this.map,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            side: this.side,
            transparent: this.transparent,
            size: this.size,
            sizeAttenuation: this.sizeAttenuation
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMap = source.alphaMap;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.color = source.color;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.map = source.map;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.transparent = source.transparent;
        this.size = source.size;
        this.sizeAttenuation = source.sizeAttenuation;
    }
    reset() {
        this.alphaCutoff = 0;
        this.alphaMap = undefined;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.color = '#ffffff';
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.map = undefined;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
        this.size = undefined;
        this.sizeAttenuation = undefined;
    }
}
exports.MaterialPointData = MaterialPointData;
_MaterialPointData_size = new WeakMap(), _MaterialPointData_sizeAttenuation = new WeakMap();
//# sourceMappingURL=MaterialPointData.js.map

/***/ }),

/***/ 98650:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialShadowData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
class MaterialShadowData extends AbstractMaterialData_1.AbstractMaterialData {
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        if (!properties)
            return;
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    reset() {
        this.color = '#000000';
        this.opacity = 1.0;
    }
    clone() {
        return new MaterialShadowData({
            color: this.color,
            opacity: this.opacity,
        }, this.id, this.version);
    }
    copy(source) {
        this.color = source.color;
        this.opacity = source.opacity;
    }
}
exports.MaterialShadowData = MaterialShadowData;
//# sourceMappingURL=MaterialShadowData.js.map

/***/ }),

/***/ 3729:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialSpecularGlossinessData_glossiness, _MaterialSpecularGlossinessData_glossinessMap, _MaterialSpecularGlossinessData_specular, _MaterialSpecularGlossinessData_specularGlossinessMap, _MaterialSpecularGlossinessData_specularMap, _MaterialSpecularGlossinessData_envMap;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialSpecularGlossinessData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
const IMaterialAbstractData_1 = __webpack_require__(43312);
class MaterialSpecularGlossinessData extends AbstractMaterialData_1.AbstractMaterialData {
    // #endregion Properties (5)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        // #region Properties (5)
        _MaterialSpecularGlossinessData_glossiness.set(this, 1);
        _MaterialSpecularGlossinessData_glossinessMap.set(this, void 0);
        _MaterialSpecularGlossinessData_specular.set(this, '#ffffff');
        _MaterialSpecularGlossinessData_specularGlossinessMap.set(this, void 0);
        _MaterialSpecularGlossinessData_specularMap.set(this, void 0);
        _MaterialSpecularGlossinessData_envMap.set(this, void 0);
        if (!properties)
            return;
        if (properties.glossiness !== undefined)
            this.glossiness = properties.glossiness;
        if (properties.specular !== undefined)
            this.specular = properties.specular;
        if (properties.specularGlossinessMap !== undefined)
            this.specularGlossinessMap = properties.specularGlossinessMap;
        if (properties.specularMap !== undefined)
            this.specularMap = properties.specularMap;
        if (properties.glossinessMap !== undefined)
            this.glossinessMap = properties.glossinessMap;
        if (properties.envMap !== undefined)
            this.envMap = properties.envMap;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (10)
    get envMap() {
        return __classPrivateFieldGet(this, _MaterialSpecularGlossinessData_envMap, "f");
    }
    set envMap(value) {
        __classPrivateFieldSet(this, _MaterialSpecularGlossinessData_envMap, value, "f");
    }
    get glossiness() {
        return __classPrivateFieldGet(this, _MaterialSpecularGlossinessData_glossiness, "f");
    }
    set glossiness(value) {
        __classPrivateFieldSet(this, _MaterialSpecularGlossinessData_glossiness, value, "f");
    }
    get glossinessMap() {
        return __classPrivateFieldGet(this, _MaterialSpecularGlossinessData_glossinessMap, "f");
    }
    set glossinessMap(value) {
        __classPrivateFieldSet(this, _MaterialSpecularGlossinessData_glossinessMap, value, "f");
    }
    get specular() {
        return __classPrivateFieldGet(this, _MaterialSpecularGlossinessData_specular, "f");
    }
    set specular(value) {
        __classPrivateFieldSet(this, _MaterialSpecularGlossinessData_specular, value, "f");
    }
    get specularGlossinessMap() {
        return __classPrivateFieldGet(this, _MaterialSpecularGlossinessData_specularGlossinessMap, "f");
    }
    set specularGlossinessMap(value) {
        __classPrivateFieldSet(this, _MaterialSpecularGlossinessData_specularGlossinessMap, value, "f");
    }
    get specularMap() {
        return __classPrivateFieldGet(this, _MaterialSpecularGlossinessData_specularMap, "f");
    }
    set specularMap(value) {
        __classPrivateFieldSet(this, _MaterialSpecularGlossinessData_specularMap, value, "f");
    }
    // #endregion Public Accessors (10)
    // #region Public Methods (3)
    clone() {
        return new MaterialSpecularGlossinessData({
            alphaMap: this.alphaMap,
            alphaCutoff: this.alphaCutoff,
            alphaMode: this.alphaMode,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            color: this.color,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            map: this.map,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            side: this.side,
            transparent: this.transparent,
            specular: this.specular,
            specularMap: this.specularMap,
            specularGlossinessMap: this.specularGlossinessMap,
            glossiness: this.glossiness,
            glossinessMap: this.glossinessMap,
            envMap: this.envMap,
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMap = source.alphaMap;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.color = source.color;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.map = source.map;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.transparent = source.transparent;
        this.glossiness = source.glossiness;
        this.specular = source.specular;
        this.specularGlossinessMap = source.specularGlossinessMap;
        this.specularMap = source.specularMap;
        this.glossinessMap = source.glossinessMap;
        this.envMap = source.envMap;
    }
    reset() {
        this.alphaCutoff = 0;
        this.alphaMap = undefined;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.color = '#ffffff';
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.map = undefined;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
        this.glossiness = 1;
        this.specular = '#ffffff';
        this.specularGlossinessMap = undefined;
        this.specularMap = undefined;
        this.glossinessMap = undefined;
        this.envMap = undefined;
    }
}
exports.MaterialSpecularGlossinessData = MaterialSpecularGlossinessData;
_MaterialSpecularGlossinessData_glossiness = new WeakMap(), _MaterialSpecularGlossinessData_glossinessMap = new WeakMap(), _MaterialSpecularGlossinessData_specular = new WeakMap(), _MaterialSpecularGlossinessData_specularGlossinessMap = new WeakMap(), _MaterialSpecularGlossinessData_specularMap = new WeakMap(), _MaterialSpecularGlossinessData_envMap = new WeakMap();
//# sourceMappingURL=MaterialSpecularGlossinessData.js.map

/***/ }),

/***/ 98231:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialStandardData_attenuationColor, _MaterialStandardData_attenuationDistance, _MaterialStandardData_clearcoat, _MaterialStandardData_clearcoatMap, _MaterialStandardData_clearcoatNormalMap, _MaterialStandardData_clearcoatRoughness, _MaterialStandardData_clearcoatRoughnessMap, _MaterialStandardData_displacementMap, _MaterialStandardData_displacementScale, _MaterialStandardData_displacementBias, _MaterialStandardData_envMap, _MaterialStandardData_ior, _MaterialStandardData_metalness, _MaterialStandardData_metalnessMap, _MaterialStandardData_metalnessRoughnessMap, _MaterialStandardData_roughness, _MaterialStandardData_roughnessMap, _MaterialStandardData_sheen, _MaterialStandardData_sheenColor, _MaterialStandardData_sheenColorMap, _MaterialStandardData_sheenRoughness, _MaterialStandardData_sheenRoughnessMap, _MaterialStandardData_specularColor, _MaterialStandardData_specularColorMap, _MaterialStandardData_specularIntensity, _MaterialStandardData_specularIntensityMap, _MaterialStandardData_thickness, _MaterialStandardData_thicknessMap, _MaterialStandardData_transmission, _MaterialStandardData_transmissionMap;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialStandardData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
const IMaterialAbstractData_1 = __webpack_require__(43312);
class MaterialStandardData extends AbstractMaterialData_1.AbstractMaterialData {
    // #endregion Properties (26)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        // #region Properties (26)
        _MaterialStandardData_attenuationColor.set(this, '#ffffff');
        _MaterialStandardData_attenuationDistance.set(this, Infinity);
        _MaterialStandardData_clearcoat.set(this, 0);
        _MaterialStandardData_clearcoatMap.set(this, void 0);
        _MaterialStandardData_clearcoatNormalMap.set(this, void 0);
        _MaterialStandardData_clearcoatRoughness.set(this, 0);
        _MaterialStandardData_clearcoatRoughnessMap.set(this, void 0);
        _MaterialStandardData_displacementMap.set(this, void 0);
        _MaterialStandardData_displacementScale.set(this, 1);
        _MaterialStandardData_displacementBias.set(this, 0);
        _MaterialStandardData_envMap.set(this, void 0);
        _MaterialStandardData_ior.set(this, 1.5);
        _MaterialStandardData_metalness.set(this, 1.0);
        _MaterialStandardData_metalnessMap.set(this, void 0);
        _MaterialStandardData_metalnessRoughnessMap.set(this, void 0);
        _MaterialStandardData_roughness.set(this, 1.0);
        _MaterialStandardData_roughnessMap.set(this, void 0);
        _MaterialStandardData_sheen.set(this, 0.0);
        _MaterialStandardData_sheenColor.set(this, '#ffffff');
        _MaterialStandardData_sheenColorMap.set(this, void 0);
        _MaterialStandardData_sheenRoughness.set(this, 1.0);
        _MaterialStandardData_sheenRoughnessMap.set(this, void 0);
        _MaterialStandardData_specularColor.set(this, '#ffffff');
        _MaterialStandardData_specularColorMap.set(this, void 0);
        _MaterialStandardData_specularIntensity.set(this, 1.0);
        _MaterialStandardData_specularIntensityMap.set(this, void 0);
        _MaterialStandardData_thickness.set(this, 0.0);
        _MaterialStandardData_thicknessMap.set(this, void 0);
        _MaterialStandardData_transmission.set(this, 0.0);
        _MaterialStandardData_transmissionMap.set(this, void 0);
        if (!properties)
            return;
        if (properties.metalness !== undefined)
            this.metalness = properties.metalness;
        if (properties.metalnessMap !== undefined)
            this.metalnessMap = properties.metalnessMap;
        if (properties.metalnessRoughnessMap !== undefined)
            this.metalnessRoughnessMap = properties.metalnessRoughnessMap;
        if (properties.roughness !== undefined)
            this.roughness = properties.roughness;
        if (properties.roughnessMap !== undefined)
            this.roughnessMap = properties.roughnessMap;
        if (properties.clearcoat !== undefined)
            this.clearcoat = properties.clearcoat;
        if (properties.clearcoatMap !== undefined)
            this.clearcoatMap = properties.clearcoatMap;
        if (properties.clearcoatNormalMap !== undefined)
            this.clearcoatNormalMap = properties.clearcoatNormalMap;
        if (properties.clearcoatRoughness !== undefined)
            this.clearcoatRoughness = properties.clearcoatRoughness;
        if (properties.clearcoatRoughnessMap !== undefined)
            this.clearcoatRoughnessMap = properties.clearcoatRoughnessMap;
        if (properties.displacementMap !== undefined)
            this.displacementMap = properties.displacementMap;
        if (properties.displacementScale !== undefined)
            this.displacementScale = properties.displacementScale;
        if (properties.displacementBias !== undefined)
            this.displacementBias = properties.displacementBias;
        if (properties.ior !== undefined)
            this.ior = properties.ior;
        if (properties.transmission !== undefined)
            this.transmission = properties.transmission;
        if (properties.transmissionMap !== undefined)
            this.transmissionMap = properties.transmissionMap;
        if (properties.thickness !== undefined)
            this.thickness = properties.thickness;
        if (properties.thicknessMap !== undefined)
            this.thicknessMap = properties.thicknessMap;
        if (properties.attenuationDistance !== undefined)
            this.attenuationDistance = properties.attenuationDistance;
        if (properties.attenuationColor !== undefined)
            this.attenuationColor = properties.attenuationColor;
        if (properties.sheen !== undefined)
            this.sheen = properties.sheen;
        if (properties.sheenColor !== undefined)
            this.sheenColor = properties.sheenColor;
        if (properties.sheenRoughness !== undefined)
            this.sheenRoughness = properties.sheenRoughness;
        if (properties.sheenColorMap !== undefined)
            this.sheenColorMap = properties.sheenColorMap;
        if (properties.sheenRoughnessMap !== undefined)
            this.sheenRoughnessMap = properties.sheenRoughnessMap;
        if (properties.specularColor !== undefined)
            this.specularColor = properties.specularColor;
        if (properties.specularColorMap !== undefined)
            this.specularColorMap = properties.specularColorMap;
        if (properties.specularIntensity !== undefined)
            this.specularIntensity = properties.specularIntensity;
        if (properties.specularIntensityMap !== undefined)
            this.specularIntensityMap = properties.specularIntensityMap;
        if (properties.envMap !== undefined)
            this.envMap = properties.envMap;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (52)
    get attenuationColor() {
        return __classPrivateFieldGet(this, _MaterialStandardData_attenuationColor, "f");
    }
    set attenuationColor(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_attenuationColor, value, "f");
    }
    get attenuationDistance() {
        return __classPrivateFieldGet(this, _MaterialStandardData_attenuationDistance, "f");
    }
    set attenuationDistance(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_attenuationDistance, value, "f");
    }
    get clearcoat() {
        return __classPrivateFieldGet(this, _MaterialStandardData_clearcoat, "f");
    }
    set clearcoat(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_clearcoat, value, "f");
    }
    get clearcoatMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_clearcoatMap, "f");
    }
    set clearcoatMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_clearcoatMap, value, "f");
    }
    get clearcoatNormalMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_clearcoatNormalMap, "f");
    }
    set clearcoatNormalMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_clearcoatNormalMap, value, "f");
    }
    get clearcoatRoughness() {
        return __classPrivateFieldGet(this, _MaterialStandardData_clearcoatRoughness, "f");
    }
    set clearcoatRoughness(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_clearcoatRoughness, value, "f");
    }
    get clearcoatRoughnessMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_clearcoatRoughnessMap, "f");
    }
    set clearcoatRoughnessMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_clearcoatRoughnessMap, value, "f");
    }
    get displacementMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_displacementMap, "f");
    }
    set displacementMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_displacementMap, value, "f");
    }
    get displacementScale() {
        return __classPrivateFieldGet(this, _MaterialStandardData_displacementScale, "f");
    }
    set displacementScale(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_displacementScale, value, "f");
    }
    get displacementBias() {
        return __classPrivateFieldGet(this, _MaterialStandardData_displacementBias, "f");
    }
    set displacementBias(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_displacementBias, value, "f");
    }
    get envMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_envMap, "f");
    }
    set envMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_envMap, value, "f");
    }
    get ior() {
        return __classPrivateFieldGet(this, _MaterialStandardData_ior, "f");
    }
    set ior(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_ior, value, "f");
    }
    get metalness() {
        return __classPrivateFieldGet(this, _MaterialStandardData_metalness, "f");
    }
    set metalness(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_metalness, value, "f");
    }
    get metalnessMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_metalnessMap, "f");
    }
    set metalnessMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_metalnessMap, value, "f");
    }
    get metalnessRoughnessMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_metalnessRoughnessMap, "f");
    }
    set metalnessRoughnessMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_metalnessRoughnessMap, value, "f");
    }
    get roughness() {
        return __classPrivateFieldGet(this, _MaterialStandardData_roughness, "f");
    }
    set roughness(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_roughness, value, "f");
    }
    get roughnessMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_roughnessMap, "f");
    }
    set roughnessMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_roughnessMap, value, "f");
    }
    get sheen() {
        return __classPrivateFieldGet(this, _MaterialStandardData_sheen, "f");
    }
    set sheen(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_sheen, value, "f");
    }
    get sheenColor() {
        return __classPrivateFieldGet(this, _MaterialStandardData_sheenColor, "f");
    }
    set sheenColor(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_sheenColor, value, "f");
    }
    get sheenColorMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_sheenColorMap, "f");
    }
    set sheenColorMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_sheenColorMap, value, "f");
    }
    get sheenRoughness() {
        return __classPrivateFieldGet(this, _MaterialStandardData_sheenRoughness, "f");
    }
    set sheenRoughness(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_sheenRoughness, value, "f");
    }
    get sheenRoughnessMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_sheenRoughnessMap, "f");
    }
    set sheenRoughnessMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_sheenRoughnessMap, value, "f");
    }
    get specularColor() {
        return __classPrivateFieldGet(this, _MaterialStandardData_specularColor, "f");
    }
    set specularColor(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_specularColor, value, "f");
    }
    get specularColorMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_specularColorMap, "f");
    }
    set specularColorMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_specularColorMap, value, "f");
    }
    get specularIntensity() {
        return __classPrivateFieldGet(this, _MaterialStandardData_specularIntensity, "f");
    }
    set specularIntensity(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_specularIntensity, value, "f");
    }
    get specularIntensityMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_specularIntensityMap, "f");
    }
    set specularIntensityMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_specularIntensityMap, value, "f");
    }
    get thickness() {
        return __classPrivateFieldGet(this, _MaterialStandardData_thickness, "f");
    }
    set thickness(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_thickness, value, "f");
    }
    get thicknessMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_thicknessMap, "f");
    }
    set thicknessMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_thicknessMap, value, "f");
    }
    get transmission() {
        return __classPrivateFieldGet(this, _MaterialStandardData_transmission, "f");
    }
    set transmission(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_transmission, value, "f");
    }
    get transmissionMap() {
        return __classPrivateFieldGet(this, _MaterialStandardData_transmissionMap, "f");
    }
    set transmissionMap(value) {
        __classPrivateFieldSet(this, _MaterialStandardData_transmissionMap, value, "f");
    }
    // #endregion Public Accessors (52)
    // #region Public Methods (1)
    reset() {
        this.alphaCutoff = 0;
        this.alphaMap = undefined;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.color = '#ffffff';
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.map = undefined;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
        this.attenuationColor = '#ffffff';
        this.attenuationDistance = Infinity;
        this.clearcoat = 0;
        this.clearcoatMap = undefined;
        this.clearcoatNormalMap = undefined;
        this.clearcoatRoughness = 0;
        this.clearcoatRoughnessMap = undefined;
        this.displacementMap = undefined;
        this.displacementScale = 1;
        this.displacementBias = 0;
        this.envMap = undefined;
        this.ior = 1;
        this.metalness = 0;
        this.metalnessMap = undefined;
        this.metalnessRoughnessMap = undefined;
        this.roughness = 0.5;
        this.roughnessMap = undefined;
        this.sheen = 0;
        this.sheenColor = '#ffffff';
        this.sheenColorMap = undefined;
        this.sheenRoughness = 0;
        this.sheenRoughnessMap = undefined;
        this.specularColor = '#ffffff';
        this.specularColorMap = undefined;
        this.specularIntensity = 1;
        this.specularIntensityMap = undefined;
        this.thickness = 0.1;
        this.thicknessMap = undefined;
        this.transmission = 0;
        this.transmissionMap = undefined;
    }
    clone() {
        return new MaterialStandardData({
            alphaMap: this.alphaMap,
            alphaCutoff: this.alphaCutoff,
            alphaMode: this.alphaMode,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            color: this.color,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            map: this.map,
            metalness: this.metalness,
            metalnessMap: this.metalnessMap,
            metalnessRoughnessMap: this.metalnessRoughnessMap,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            roughness: this.roughness,
            roughnessMap: this.roughnessMap,
            side: this.side,
            transparent: this.transparent,
            clearcoat: this.clearcoat,
            clearcoatMap: this.clearcoatMap,
            clearcoatNormalMap: this.clearcoatNormalMap,
            clearcoatRoughness: this.clearcoatRoughness,
            clearcoatRoughnessMap: this.clearcoatRoughnessMap,
            displacementMap: this.displacementMap,
            displacementScale: this.displacementScale,
            displacementBias: this.displacementBias,
            envMap: this.envMap,
            ior: this.ior,
            transmission: this.transmission,
            transmissionMap: this.transmissionMap,
            thickness: this.thickness,
            thicknessMap: this.thicknessMap,
            attenuationDistance: this.attenuationDistance,
            attenuationColor: this.attenuationColor,
            sheen: this.sheen,
            sheenColor: this.sheenColor,
            sheenColorMap: this.sheenColorMap,
            sheenRoughness: this.sheenRoughness,
            sheenRoughnessMap: this.sheenRoughnessMap,
            specularColor: this.specularColor,
            specularColorMap: this.specularColorMap,
            specularIntensity: this.specularIntensity,
            specularIntensityMap: this.specularIntensityMap,
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMap = source.alphaMap;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.color = source.color;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.map = source.map;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.transparent = source.transparent;
        this.attenuationColor = source.attenuationColor;
        this.attenuationDistance = source.attenuationDistance;
        this.clearcoat = source.clearcoat;
        this.clearcoatMap = source.clearcoatMap;
        this.clearcoatNormalMap = source.clearcoatNormalMap;
        this.clearcoatRoughness = source.clearcoatRoughness;
        this.clearcoatRoughnessMap = source.clearcoatRoughnessMap;
        this.displacementMap = source.displacementMap;
        this.displacementScale = source.displacementScale;
        this.displacementBias = source.displacementBias;
        this.envMap = source.envMap;
        this.ior = source.ior;
        this.metalness = source.metalness;
        this.metalnessMap = source.metalnessMap;
        this.metalnessRoughnessMap = source.metalnessRoughnessMap;
        this.roughness = source.roughness;
        this.roughnessMap = source.roughnessMap;
        this.sheen = source.sheen;
        this.sheenColor = source.sheenColor;
        this.sheenColorMap = source.sheenColorMap;
        this.sheenRoughness = source.sheenRoughness;
        this.sheenRoughnessMap = source.sheenRoughnessMap;
        this.specularColor = source.specularColor;
        this.specularColorMap = source.specularColorMap;
        this.specularIntensity = source.specularIntensity;
        this.specularIntensityMap = source.specularIntensityMap;
        this.thickness = source.thickness;
        this.thicknessMap = source.thicknessMap;
        this.transmission = source.transmission;
        this.transmissionMap = source.transmissionMap;
    }
}
exports.MaterialStandardData = MaterialStandardData;
_MaterialStandardData_attenuationColor = new WeakMap(), _MaterialStandardData_attenuationDistance = new WeakMap(), _MaterialStandardData_clearcoat = new WeakMap(), _MaterialStandardData_clearcoatMap = new WeakMap(), _MaterialStandardData_clearcoatNormalMap = new WeakMap(), _MaterialStandardData_clearcoatRoughness = new WeakMap(), _MaterialStandardData_clearcoatRoughnessMap = new WeakMap(), _MaterialStandardData_displacementMap = new WeakMap(), _MaterialStandardData_displacementScale = new WeakMap(), _MaterialStandardData_displacementBias = new WeakMap(), _MaterialStandardData_envMap = new WeakMap(), _MaterialStandardData_ior = new WeakMap(), _MaterialStandardData_metalness = new WeakMap(), _MaterialStandardData_metalnessMap = new WeakMap(), _MaterialStandardData_metalnessRoughnessMap = new WeakMap(), _MaterialStandardData_roughness = new WeakMap(), _MaterialStandardData_roughnessMap = new WeakMap(), _MaterialStandardData_sheen = new WeakMap(), _MaterialStandardData_sheenColor = new WeakMap(), _MaterialStandardData_sheenColorMap = new WeakMap(), _MaterialStandardData_sheenRoughness = new WeakMap(), _MaterialStandardData_sheenRoughnessMap = new WeakMap(), _MaterialStandardData_specularColor = new WeakMap(), _MaterialStandardData_specularColorMap = new WeakMap(), _MaterialStandardData_specularIntensity = new WeakMap(), _MaterialStandardData_specularIntensityMap = new WeakMap(), _MaterialStandardData_thickness = new WeakMap(), _MaterialStandardData_thicknessMap = new WeakMap(), _MaterialStandardData_transmission = new WeakMap(), _MaterialStandardData_transmissionMap = new WeakMap();
//# sourceMappingURL=MaterialStandardData.js.map

/***/ }),

/***/ 33639:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialUnlitData_envMap;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialUnlitData = void 0;
const IMaterialAbstractData_1 = __webpack_require__(43312);
const AbstractMaterialData_1 = __webpack_require__(76612);
class MaterialUnlitData extends AbstractMaterialData_1.AbstractMaterialData {
    // #endregion Properties (1)
    // #region Constructors (1)
    /**
     * Creates a material data object.
     *
     * @param _attributes the attributes of the material
     * @param id the id
     */
    constructor(properties, id, version) {
        super(properties, id, version);
        // #region Properties (1)
        _MaterialUnlitData_envMap.set(this, void 0);
        if (!properties)
            return;
        if (properties.envMap !== undefined)
            this.envMap = properties.envMap;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get envMap() {
        return __classPrivateFieldGet(this, _MaterialUnlitData_envMap, "f");
    }
    set envMap(value) {
        __classPrivateFieldSet(this, _MaterialUnlitData_envMap, value, "f");
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (3)
    clone() {
        return new MaterialUnlitData({
            alphaMap: this.alphaMap,
            alphaCutoff: this.alphaCutoff,
            alphaMode: this.alphaMode,
            aoMap: this.aoMap,
            aoMapIntensity: this.aoMapIntensity,
            bumpMap: this.bumpMap,
            bumpScale: this.bumpScale,
            color: this.color,
            depthTest: this.depthTest,
            depthWrite: this.depthWrite,
            emissiveMap: this.emissiveMap,
            emissiveness: this.emissiveness,
            shading: this.shading,
            map: this.map,
            name: this.name,
            normalMap: this.normalMap,
            normalScale: this.normalScale,
            opacity: this.opacity,
            side: this.side,
            transparent: this.transparent,
            envMap: this.envMap
        }, this.id, this.version);
    }
    copy(source) {
        this.alphaCutoff = source.alphaCutoff;
        this.alphaMap = source.alphaMap;
        this.alphaMode = source.alphaMode;
        this.aoMap = source.aoMap;
        this.aoMapIntensity = source.aoMapIntensity;
        this.bumpMap = source.bumpMap;
        this.bumpScale = source.bumpScale;
        this.color = source.color;
        this.depthTest = source.depthTest;
        this.depthWrite = source.depthWrite;
        this.emissiveMap = source.emissiveMap;
        this.emissiveness = source.emissiveness;
        this.materialOutput = source.materialOutput;
        this.map = source.map;
        this.normalMap = source.normalMap;
        this.normalScale = source.normalScale;
        this.opacity = source.opacity;
        this.shading = source.shading;
        this.side = source.side;
        this.envMap = source.envMap;
        this.transparent = source.transparent;
    }
    reset() {
        this.alphaCutoff = 0;
        this.alphaMap = undefined;
        this.alphaMode = IMaterialAbstractData_1.MATERIAL_ALPHA.OPAQUE;
        this.aoMap = undefined;
        this.aoMapIntensity = 1.0;
        this.bumpMap = undefined;
        this.bumpScale = 1.0;
        this.color = '#ffffff';
        this.depthTest = undefined;
        this.depthWrite = undefined;
        this.emissiveMap = undefined;
        this.emissiveness = '#000000';
        this.materialOutput = false;
        this.map = undefined;
        this.normalMap = undefined;
        this.normalScale = 1.0;
        this.opacity = 1.0;
        this.shading = IMaterialAbstractData_1.MATERIAL_SHADING.SMOOTH;
        this.side = IMaterialAbstractData_1.MATERIAL_SIDE.DOUBLE;
        this.transparent = undefined;
        this.envMap = undefined;
    }
}
exports.MaterialUnlitData = MaterialUnlitData;
_MaterialUnlitData_envMap = new WeakMap();
//# sourceMappingURL=MaterialUnlitData.js.map

/***/ }),

/***/ 66404:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _MaterialVariantsData_variants, _MaterialVariantsData_geometryData, _MaterialVariantsData_variantIndex;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialVariantsData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class MaterialVariantsData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(id, version) {
        super(id, version);
        // #region Properties (1)
        _MaterialVariantsData_variants.set(this, []);
        _MaterialVariantsData_geometryData.set(this, []);
        _MaterialVariantsData_variantIndex.set(this, void 0);
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get geometryData() {
        return __classPrivateFieldGet(this, _MaterialVariantsData_geometryData, "f");
    }
    get variants() {
        return __classPrivateFieldGet(this, _MaterialVariantsData_variants, "f");
    }
    get variantIndex() {
        return __classPrivateFieldGet(this, _MaterialVariantsData_variantIndex, "f");
    }
    set variantIndex(value) {
        __classPrivateFieldSet(this, _MaterialVariantsData_variantIndex, value, "f");
        for (let i = 0; i < this.geometryData.length; i++) {
            const variant = this.geometryData[i].materialVariants.find(v => v.variant === __classPrivateFieldGet(this, _MaterialVariantsData_variantIndex, "f"));
            if (variant) {
                this.geometryData[i].material = variant.material;
            }
            else {
                this.geometryData[i].material = this.geometryData[i].standardMaterial;
            }
        }
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new MaterialVariantsData(this.id, this.version);
    }
}
exports.MaterialVariantsData = MaterialVariantsData;
_MaterialVariantsData_variants = new WeakMap(), _MaterialVariantsData_geometryData = new WeakMap(), _MaterialVariantsData_variantIndex = new WeakMap();
//# sourceMappingURL=MaterialVariantsData.js.map

/***/ }),

/***/ 43871:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _SDTFAttributeData_typeHint, _SDTFAttributeData_value, _SDTFAttributeData_resolvedValue, _SDTFAttributesData_attributes;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDTFAttributesData = exports.SDTFAttributeData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class SDTFAttributeData {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(typeHint, value) {
        // #region Properties (2)
        _SDTFAttributeData_typeHint.set(this, void 0);
        _SDTFAttributeData_value.set(this, void 0);
        _SDTFAttributeData_resolvedValue.set(this, void 0);
        __classPrivateFieldSet(this, _SDTFAttributeData_typeHint, typeHint, "f");
        __classPrivateFieldSet(this, _SDTFAttributeData_value, value, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get typeHint() {
        return __classPrivateFieldGet(this, _SDTFAttributeData_typeHint, "f");
    }
    get value() {
        if (__classPrivateFieldGet(this, _SDTFAttributeData_value, "f") instanceof Function && !__classPrivateFieldGet(this, _SDTFAttributeData_resolvedValue, "f")) {
            __classPrivateFieldSet(this, _SDTFAttributeData_resolvedValue, __classPrivateFieldGet(this, _SDTFAttributeData_value, "f").call(this), "f");
            return __classPrivateFieldGet(this, _SDTFAttributeData_resolvedValue, "f");
        }
        else if (__classPrivateFieldGet(this, _SDTFAttributeData_value, "f") instanceof Function) {
            return __classPrivateFieldGet(this, _SDTFAttributeData_resolvedValue, "f");
        }
        return __classPrivateFieldGet(this, _SDTFAttributeData_value, "f");
    }
}
exports.SDTFAttributeData = SDTFAttributeData;
_SDTFAttributeData_typeHint = new WeakMap(), _SDTFAttributeData_value = new WeakMap(), _SDTFAttributeData_resolvedValue = new WeakMap();
// export class SDTFAttributeAsyncData {
//     // #region Properties (2)
//     readonly #typeHint;
//     readonly #accessor;
//     private _value: Promise<any> | undefined;
//     private readonly _loadAccessor: (accessorID: number) => Promise<any>
//     // #endregion Properties (2)
//     // #region Constructors (1)
//     constructor(
//             typeHint: string,
//             accessor: number,
//         private readonly _loadAccessor: (accessorID: number) => Promise<any>
//     ) {
//         this._typeHint = typeHint;
//         this._accessor = accessor;
//     }
//     public get value(): Promise<any> {
//         if (this.value !== undefined) {
//             return this._value!;
//         } else {
//             this._value = this._loadAccessor!(this._accessor!);
//             return this._value;
//         }
//     }
//     public get typeHint(): string {
//         return this._typeHint;
//     }
//     // #endregion Constructors (1)
// }
class SDTFAttributesData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(attributes = {}, id, version) {
        super(id, version);
        // #region Properties (1)
        _SDTFAttributesData_attributes.set(this, {});
        __classPrivateFieldSet(this, _SDTFAttributesData_attributes, attributes, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (1)
    get attributes() {
        return __classPrivateFieldGet(this, _SDTFAttributesData_attributes, "f");
    }
    // #endregion Public Accessors (1)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new SDTFAttributesData(this.attributes, this.id, this.version);
    }
}
exports.SDTFAttributesData = SDTFAttributesData;
_SDTFAttributesData_attributes = new WeakMap();
//# sourceMappingURL=SDTFAttributesData.js.map

/***/ }),

/***/ 6477:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _SDTFItemData_typeHint, _SDTFItemData_value, _SDTFItemData_attributes, _SDTFItemData_resolvedValue;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDTFItemData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class SDTFItemData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(typeHint, value, attributes, id, version) {
        super(id, version);
        // #region Properties (3)
        _SDTFItemData_typeHint.set(this, void 0);
        _SDTFItemData_value.set(this, void 0);
        _SDTFItemData_attributes.set(this, {});
        _SDTFItemData_resolvedValue.set(this, void 0);
        __classPrivateFieldSet(this, _SDTFItemData_attributes, attributes, "f");
        __classPrivateFieldSet(this, _SDTFItemData_typeHint, typeHint, "f");
        __classPrivateFieldSet(this, _SDTFItemData_value, value, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (3)
    get attributes() {
        return __classPrivateFieldGet(this, _SDTFItemData_attributes, "f");
    }
    get typeHint() {
        return __classPrivateFieldGet(this, _SDTFItemData_typeHint, "f");
    }
    get value() {
        if (__classPrivateFieldGet(this, _SDTFItemData_value, "f") instanceof Function && !__classPrivateFieldGet(this, _SDTFItemData_resolvedValue, "f")) {
            __classPrivateFieldSet(this, _SDTFItemData_resolvedValue, __classPrivateFieldGet(this, _SDTFItemData_value, "f").call(this), "f");
            return __classPrivateFieldGet(this, _SDTFItemData_resolvedValue, "f");
        }
        else if (__classPrivateFieldGet(this, _SDTFItemData_value, "f") instanceof Function) {
            return __classPrivateFieldGet(this, _SDTFItemData_resolvedValue, "f");
        }
        return __classPrivateFieldGet(this, _SDTFItemData_value, "f");
    }
    // #endregion Public Accessors (3)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new SDTFItemData(this.typeHint, this.value, this.attributes, this.id, this.version);
    }
}
exports.SDTFItemData = SDTFItemData;
_SDTFItemData_typeHint = new WeakMap(), _SDTFItemData_value = new WeakMap(), _SDTFItemData_attributes = new WeakMap(), _SDTFItemData_resolvedValue = new WeakMap();
//# sourceMappingURL=SDTFItemData.js.map

/***/ }),

/***/ 53865:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
var _SDTFOverviewData_overview;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDTFOverviewData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const sdk_sdtf_primitives_1 = __webpack_require__(72916);
class SDTFOverviewData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(overview, id, version) {
        super(id, version);
        // #region Properties (1)
        _SDTFOverviewData_overview.set(this, {});
        __classPrivateFieldSet(this, _SDTFOverviewData_overview, overview, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (1)
    get overview() {
        return __classPrivateFieldGet(this, _SDTFOverviewData_overview, "f");
    }
    // #endregion Public Accessors (1)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new SDTFOverviewData(__classPrivateFieldGet(this, _SDTFOverviewData_overview, "f"), this.id, this.version);
    }
    merge(data) {
        var _a;
        for (let overviewKey in data.overview) {
            for (let i = 0; i < data.overview[overviewKey].length; i++) {
                const dataToCopy = data.overview[overviewKey][i];
                const existingEntries = this.overview[overviewKey] ? this.overview[overviewKey].filter(o => o.typeHint === dataToCopy.typeHint) : [];
                if (this.overview[overviewKey] && existingEntries.length > 0) {
                    const entry = existingEntries[0];
                    entry.count++;
                    if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isStringType(dataToCopy.typeHint)) {
                        entry.values = (_a = entry.values) === null || _a === void 0 ? void 0 : _a.concat(dataToCopy.values.filter((item) => entry.values.indexOf(item) < 0));
                    }
                    if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isNumberType(dataToCopy.typeHint)) {
                        entry.min = Math.min(dataToCopy.min, entry.min);
                        entry.max = Math.max(dataToCopy.max, entry.max);
                    }
                }
                else if (this.overview[overviewKey]) {
                    this.overview[overviewKey].push({
                        typeHint: dataToCopy.typeHint,
                        count: dataToCopy.count,
                        values: dataToCopy.values,
                        min: dataToCopy.min,
                        max: dataToCopy.max,
                    });
                }
                else {
                    this.overview[overviewKey] = [{
                            typeHint: dataToCopy.typeHint,
                            count: dataToCopy.count,
                            values: dataToCopy.values,
                            min: dataToCopy.min,
                            max: dataToCopy.max,
                        }];
                }
            }
        }
    }
}
exports.SDTFOverviewData = SDTFOverviewData;
_SDTFOverviewData_overview = new WeakMap();
//# sourceMappingURL=SDTFOverviewData.js.map

/***/ }),

/***/ 64766:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateDrawingParameterSettings = exports.IDrawingParameterJsonSchema = exports.validateGumballParameterSettings = exports.IGumballParameterJsonSchema = exports.validateSelectionParameterSettings = exports.ISelectionParameterJsonSchema = exports.validateInteractionParameterSettings = exports.IInteractionParameterJsonSchema = exports.PARAMETER_VISUALIZATION = exports.PARAMETER_TYPE = exports.SdtfPrimitiveTypeGuard = exports.SDTF_TYPEHINT = exports.SDTFItemData = exports.SDTFAttributeData = exports.SDTFAttributesData = exports.SDTFOverviewData = exports.TASK_TYPE = exports.BoneData = exports.CustomData = exports.HTMLElementAnchorData = exports.HTMLElementAnchorImageData = exports.HTMLElementAnchorTextData = exports.HTMLElementAnchorCustomData = exports.PRIMITIVE_MODE = exports.MaterialVariantsData = exports.PrimitiveData = exports.AttributeData = exports.GeometryData = exports.AnimationData = exports.TEXTURE_FILTERING = exports.TEXTURE_WRAPPING = exports.MATERIAL_TYPE = exports.MATERIAL_SHADING = exports.MATERIAL_ALPHA = exports.MATERIAL_SIDE = exports.MapData = exports.MaterialBasicLineData = exports.MaterialMultiPointData = exports.MaterialPointData = exports.MaterialGemData = exports.MaterialSpecularGlossinessData = exports.MaterialShadowData = exports.MaterialUnlitData = exports.AbstractMaterialData = exports.MaterialStandardData = void 0;
const AbstractMaterialData_1 = __webpack_require__(76612);
Object.defineProperty(exports, "AbstractMaterialData", ({ enumerable: true, get: function () { return AbstractMaterialData_1.AbstractMaterialData; } }));
const AnimationData_1 = __webpack_require__(87912);
Object.defineProperty(exports, "AnimationData", ({ enumerable: true, get: function () { return AnimationData_1.AnimationData; } }));
const GeometryData_1 = __webpack_require__(20712);
Object.defineProperty(exports, "AttributeData", ({ enumerable: true, get: function () { return GeometryData_1.AttributeData; } }));
Object.defineProperty(exports, "GeometryData", ({ enumerable: true, get: function () { return GeometryData_1.GeometryData; } }));
Object.defineProperty(exports, "PrimitiveData", ({ enumerable: true, get: function () { return GeometryData_1.PrimitiveData; } }));
const BoneData_1 = __webpack_require__(20914);
Object.defineProperty(exports, "BoneData", ({ enumerable: true, get: function () { return BoneData_1.BoneData; } }));
const types_1 = __webpack_require__(48819);
Object.defineProperty(exports, "PARAMETER_TYPE", ({ enumerable: true, get: function () { return types_1.PARAMETER_TYPE; } }));
Object.defineProperty(exports, "PARAMETER_VISUALIZATION", ({ enumerable: true, get: function () { return types_1.PARAMETER_VISUALIZATION; } }));
const CustomData_1 = __webpack_require__(90311);
Object.defineProperty(exports, "CustomData", ({ enumerable: true, get: function () { return CustomData_1.CustomData; } }));
const IDrawingParametersSettings_1 = __webpack_require__(66093);
Object.defineProperty(exports, "IDrawingParameterJsonSchema", ({ enumerable: true, get: function () { return IDrawingParametersSettings_1.IDrawingParameterJsonSchema; } }));
Object.defineProperty(exports, "validateDrawingParameterSettings", ({ enumerable: true, get: function () { return IDrawingParametersSettings_1.validateDrawingParameterSettings; } }));
const HTMLElementAnchorData_1 = __webpack_require__(76116);
Object.defineProperty(exports, "HTMLElementAnchorCustomData", ({ enumerable: true, get: function () { return HTMLElementAnchorData_1.HTMLElementAnchorCustomData; } }));
Object.defineProperty(exports, "HTMLElementAnchorData", ({ enumerable: true, get: function () { return HTMLElementAnchorData_1.HTMLElementAnchorData; } }));
Object.defineProperty(exports, "HTMLElementAnchorImageData", ({ enumerable: true, get: function () { return HTMLElementAnchorData_1.HTMLElementAnchorImageData; } }));
Object.defineProperty(exports, "HTMLElementAnchorTextData", ({ enumerable: true, get: function () { return HTMLElementAnchorData_1.HTMLElementAnchorTextData; } }));
const IGeometryData_1 = __webpack_require__(48211);
Object.defineProperty(exports, "PRIMITIVE_MODE", ({ enumerable: true, get: function () { return IGeometryData_1.PRIMITIVE_MODE; } }));
const IInteractionParameterSettings_1 = __webpack_require__(22706);
Object.defineProperty(exports, "IGumballParameterJsonSchema", ({ enumerable: true, get: function () { return IInteractionParameterSettings_1.IGumballParameterJsonSchema; } }));
Object.defineProperty(exports, "IInteractionParameterJsonSchema", ({ enumerable: true, get: function () { return IInteractionParameterSettings_1.IInteractionParameterJsonSchema; } }));
Object.defineProperty(exports, "ISelectionParameterJsonSchema", ({ enumerable: true, get: function () { return IInteractionParameterSettings_1.ISelectionParameterJsonSchema; } }));
Object.defineProperty(exports, "validateGumballParameterSettings", ({ enumerable: true, get: function () { return IInteractionParameterSettings_1.validateGumballParameterSettings; } }));
Object.defineProperty(exports, "validateInteractionParameterSettings", ({ enumerable: true, get: function () { return IInteractionParameterSettings_1.validateInteractionParameterSettings; } }));
Object.defineProperty(exports, "validateSelectionParameterSettings", ({ enumerable: true, get: function () { return IInteractionParameterSettings_1.validateSelectionParameterSettings; } }));
const IMapData_1 = __webpack_require__(82965);
Object.defineProperty(exports, "TEXTURE_FILTERING", ({ enumerable: true, get: function () { return IMapData_1.TEXTURE_FILTERING; } }));
Object.defineProperty(exports, "TEXTURE_WRAPPING", ({ enumerable: true, get: function () { return IMapData_1.TEXTURE_WRAPPING; } }));
const IMaterialAbstractData_1 = __webpack_require__(43312);
Object.defineProperty(exports, "MATERIAL_ALPHA", ({ enumerable: true, get: function () { return IMaterialAbstractData_1.MATERIAL_ALPHA; } }));
Object.defineProperty(exports, "MATERIAL_SHADING", ({ enumerable: true, get: function () { return IMaterialAbstractData_1.MATERIAL_SHADING; } }));
Object.defineProperty(exports, "MATERIAL_SIDE", ({ enumerable: true, get: function () { return IMaterialAbstractData_1.MATERIAL_SIDE; } }));
Object.defineProperty(exports, "MATERIAL_TYPE", ({ enumerable: true, get: function () { return IMaterialAbstractData_1.MATERIAL_TYPE; } }));
const ITaskEvent_1 = __webpack_require__(29215);
Object.defineProperty(exports, "TASK_TYPE", ({ enumerable: true, get: function () { return ITaskEvent_1.TASK_TYPE; } }));
const MapData_1 = __webpack_require__(24253);
Object.defineProperty(exports, "MapData", ({ enumerable: true, get: function () { return MapData_1.MapData; } }));
const MaterialBasicLineData_1 = __webpack_require__(77532);
Object.defineProperty(exports, "MaterialBasicLineData", ({ enumerable: true, get: function () { return MaterialBasicLineData_1.MaterialBasicLineData; } }));
const MaterialGemData_1 = __webpack_require__(70899);
Object.defineProperty(exports, "MaterialGemData", ({ enumerable: true, get: function () { return MaterialGemData_1.MaterialGemData; } }));
const MaterialMultiPointData_1 = __webpack_require__(73155);
Object.defineProperty(exports, "MaterialMultiPointData", ({ enumerable: true, get: function () { return MaterialMultiPointData_1.MaterialMultiPointData; } }));
const MaterialPointData_1 = __webpack_require__(66930);
Object.defineProperty(exports, "MaterialPointData", ({ enumerable: true, get: function () { return MaterialPointData_1.MaterialPointData; } }));
const MaterialShadowData_1 = __webpack_require__(98650);
Object.defineProperty(exports, "MaterialShadowData", ({ enumerable: true, get: function () { return MaterialShadowData_1.MaterialShadowData; } }));
const MaterialSpecularGlossinessData_1 = __webpack_require__(3729);
Object.defineProperty(exports, "MaterialSpecularGlossinessData", ({ enumerable: true, get: function () { return MaterialSpecularGlossinessData_1.MaterialSpecularGlossinessData; } }));
const MaterialUnlitData_1 = __webpack_require__(33639);
Object.defineProperty(exports, "MaterialUnlitData", ({ enumerable: true, get: function () { return MaterialUnlitData_1.MaterialUnlitData; } }));
const MaterialVariantsData_1 = __webpack_require__(66404);
Object.defineProperty(exports, "MaterialVariantsData", ({ enumerable: true, get: function () { return MaterialVariantsData_1.MaterialVariantsData; } }));
const SDTFAttributesData_1 = __webpack_require__(43871);
Object.defineProperty(exports, "SDTFAttributeData", ({ enumerable: true, get: function () { return SDTFAttributesData_1.SDTFAttributeData; } }));
Object.defineProperty(exports, "SDTFAttributesData", ({ enumerable: true, get: function () { return SDTFAttributesData_1.SDTFAttributesData; } }));
const SDTFItemData_1 = __webpack_require__(6477);
Object.defineProperty(exports, "SDTFItemData", ({ enumerable: true, get: function () { return SDTFItemData_1.SDTFItemData; } }));
const SDTFOverviewData_1 = __webpack_require__(53865);
Object.defineProperty(exports, "SDTFOverviewData", ({ enumerable: true, get: function () { return SDTFOverviewData_1.SDTFOverviewData; } }));
const sdk_sdtf_primitives_1 = __webpack_require__(72916);
Object.defineProperty(exports, "SdtfPrimitiveTypeGuard", ({ enumerable: true, get: function () { return sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard; } }));
const sdk_sdtf_v1_1 = __webpack_require__(76461);
Object.defineProperty(exports, "SDTF_TYPEHINT", ({ enumerable: true, get: function () { return sdk_sdtf_v1_1.SdtfTypeHintName; } }));
const MaterialStandardData_1 = __webpack_require__(98231);
Object.defineProperty(exports, "MaterialStandardData", ({ enumerable: true, get: function () { return MaterialStandardData_1.MaterialStandardData; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 48211:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PRIMITIVE_MODE = void 0;
var PRIMITIVE_MODE;
(function (PRIMITIVE_MODE) {
    PRIMITIVE_MODE[PRIMITIVE_MODE["POINTS"] = 0] = "POINTS";
    PRIMITIVE_MODE[PRIMITIVE_MODE["LINES"] = 1] = "LINES";
    PRIMITIVE_MODE[PRIMITIVE_MODE["LINE_LOOP"] = 2] = "LINE_LOOP";
    PRIMITIVE_MODE[PRIMITIVE_MODE["LINE_STRIP"] = 3] = "LINE_STRIP";
    PRIMITIVE_MODE[PRIMITIVE_MODE["TRIANGLES"] = 4] = "TRIANGLES";
    PRIMITIVE_MODE[PRIMITIVE_MODE["TRIANGLE_STRIP"] = 5] = "TRIANGLE_STRIP";
    PRIMITIVE_MODE[PRIMITIVE_MODE["TRIANGLE_FAN"] = 6] = "TRIANGLE_FAN";
})(PRIMITIVE_MODE = exports.PRIMITIVE_MODE || (exports.PRIMITIVE_MODE = {}));
//# sourceMappingURL=IGeometryData.js.map

/***/ }),

/***/ 82965:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TEXTURE_WRAPPING = exports.TEXTURE_FILTERING = void 0;
// #endregion Interfaces (2)
// #region Enums (2)
var TEXTURE_FILTERING;
(function (TEXTURE_FILTERING) {
    TEXTURE_FILTERING[TEXTURE_FILTERING["NONE"] = 0] = "NONE";
    TEXTURE_FILTERING[TEXTURE_FILTERING["NEAREST"] = 9728] = "NEAREST";
    TEXTURE_FILTERING[TEXTURE_FILTERING["LINEAR"] = 9729] = "LINEAR";
    TEXTURE_FILTERING[TEXTURE_FILTERING["NEAREST_MIPMAP_NEAREST"] = 9984] = "NEAREST_MIPMAP_NEAREST";
    TEXTURE_FILTERING[TEXTURE_FILTERING["LINEAR_MIPMAP_NEAREST"] = 9985] = "LINEAR_MIPMAP_NEAREST";
    TEXTURE_FILTERING[TEXTURE_FILTERING["NEAREST_MIPMAP_LINEAR"] = 9986] = "NEAREST_MIPMAP_LINEAR";
    TEXTURE_FILTERING[TEXTURE_FILTERING["LINEAR_MIPMAP_LINEAR"] = 9987] = "LINEAR_MIPMAP_LINEAR";
})(TEXTURE_FILTERING = exports.TEXTURE_FILTERING || (exports.TEXTURE_FILTERING = {}));
var TEXTURE_WRAPPING;
(function (TEXTURE_WRAPPING) {
    TEXTURE_WRAPPING[TEXTURE_WRAPPING["REPEAT"] = 10497] = "REPEAT";
    TEXTURE_WRAPPING[TEXTURE_WRAPPING["CLAMP_TO_EDGE"] = 33071] = "CLAMP_TO_EDGE";
    TEXTURE_WRAPPING[TEXTURE_WRAPPING["MIRRORED_REPEAT"] = 33648] = "MIRRORED_REPEAT";
})(TEXTURE_WRAPPING = exports.TEXTURE_WRAPPING || (exports.TEXTURE_WRAPPING = {}));
// #endregion Enums (2)
//# sourceMappingURL=IMapData.js.map

/***/ }),

/***/ 43312:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MATERIAL_TYPE = exports.MATERIAL_SIDE = exports.MATERIAL_SHADING = exports.MATERIAL_ALPHA = void 0;
// #endregion Interfaces (2)
// #region Enums (4)
var MATERIAL_ALPHA;
(function (MATERIAL_ALPHA) {
    MATERIAL_ALPHA["OPAQUE"] = "opaque";
    MATERIAL_ALPHA["MASK"] = "mask";
    MATERIAL_ALPHA["BLEND"] = "blend";
})(MATERIAL_ALPHA = exports.MATERIAL_ALPHA || (exports.MATERIAL_ALPHA = {}));
var MATERIAL_SHADING;
(function (MATERIAL_SHADING) {
    MATERIAL_SHADING["FLAT"] = "flat";
    MATERIAL_SHADING["SMOOTH"] = "smooth";
})(MATERIAL_SHADING = exports.MATERIAL_SHADING || (exports.MATERIAL_SHADING = {}));
var MATERIAL_SIDE;
(function (MATERIAL_SIDE) {
    MATERIAL_SIDE["DOUBLE"] = "double";
    MATERIAL_SIDE["FRONT"] = "front";
    MATERIAL_SIDE["BACK"] = "back";
})(MATERIAL_SIDE = exports.MATERIAL_SIDE || (exports.MATERIAL_SIDE = {}));
var MATERIAL_TYPE;
(function (MATERIAL_TYPE) {
    MATERIAL_TYPE["STANDARD"] = "standard";
    MATERIAL_TYPE["SPECULAR_GLOSSINESS"] = "specular_glossiness";
    MATERIAL_TYPE["UNLIT"] = "unlit";
    MATERIAL_TYPE["GEM"] = "gem";
})(MATERIAL_TYPE = exports.MATERIAL_TYPE || (exports.MATERIAL_TYPE = {}));
// #endregion Enums (4)
//# sourceMappingURL=IMaterialAbstractData.js.map

/***/ }),

/***/ 29215:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TASK_TYPE = void 0;
// #endregion Interfaces (1)
// #region Enums (1)
/**
 * Definition of the task types.
 * These types are used to identify the type of a task in a task event {@link ITaskEvent}.
 */
var TASK_TYPE;
(function (TASK_TYPE) {
    TASK_TYPE["AR_LOADING"] = "ar_loading";
    TASK_TYPE["ENVIRONMENT_MAP_LOADING"] = "environment_map_loading";
    TASK_TYPE["CUSTOM_CONTENT_LOADING"] = "custom_content_loading";
    TASK_TYPE["GLTF_CREATION"] = "gltf_creation";
    TASK_TYPE["GLTF_CONTENT_LOADING"] = "gltf_content_loading";
    TASK_TYPE["MATERIAL_CONTENT_LOADING"] = "material_content_loading";
    TASK_TYPE["TAG_CONTENT_LOADING"] = "tag_content_loading";
    TASK_TYPE["SDTF_CONTENT_LOADING"] = "sdtf_content_loading";
    TASK_TYPE["SESSION_CUSTOMIZATION"] = "session_customization";
    TASK_TYPE["SESSION_CREATION"] = "session_creation";
    TASK_TYPE["SESSION_OUTPUTS_UPDATE"] = "session_outputs_update";
    TASK_TYPE["SESSION_OUTPUTS_LOADING"] = "session_outputs_loading";
    TASK_TYPE["VIEWPORT_CREATION"] = "viewer_creation";
    TASK_TYPE["EXPORT_REQUEST"] = "export_request";
})(TASK_TYPE = exports.TASK_TYPE || (exports.TASK_TYPE = {}));
// #endregion Enums (1)
//# sourceMappingURL=ITaskEvent.js.map

/***/ }),

/***/ 66093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateDrawingParameterSettings = exports.IDrawingParameterJsonSchema = void 0;
const zod_1 = __webpack_require__(21614);
// #endregion Interfaces (2)
// #region Variables (2)
exports.IDrawingParameterJsonSchema = zod_1.z.object({
    geometry: zod_1.z.object({
        mode: zod_1.z.enum(['points', 'lines']),
        minPoints: zod_1.z.number().optional(),
        maxPoints: zod_1.z.number().optional(),
        strictMinMaxPoints: zod_1.z.boolean().optional(),
        close: zod_1.z.boolean(),
    }).optional(),
    restrictions: zod_1.z.array(zod_1.z.any()).optional()
});
const validateDrawingParameterSettings = (param) => {
    return exports.IDrawingParameterJsonSchema.safeParse(param);
};
exports.validateDrawingParameterSettings = validateDrawingParameterSettings;
// #endregion Variables (2)
//# sourceMappingURL=IDrawingParametersSettings.js.map

/***/ }),

/***/ 22706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.validateGumballParameterSettings = exports.validateSelectionParameterSettings = exports.validateInteractionParameterSettings = exports.IInteractionParameterJsonSchema = exports.IGumballParameterJsonSchema = exports.ISelectionParameterJsonSchema = void 0;
const zod_1 = __webpack_require__(21614);
// #endregion Interfaces (2)
// #region Variables (7)
const IGeneralInteractionParameterJsonSchema = zod_1.z.object({
    hover: zod_1.z.boolean().optional(),
    hoverColor: zod_1.z.string().optional(),
    nameFilter: zod_1.z.array(zod_1.z.string()).optional(),
});
exports.ISelectionParameterJsonSchema = zod_1.z.object({
    type: zod_1.z.literal('selection'),
    props: zod_1.z.object({
        maximumSelection: zod_1.z.number().optional(),
        minimumSelection: zod_1.z.number().optional(),
        selectionColor: zod_1.z.string().optional(),
    }).merge(IGeneralInteractionParameterJsonSchema),
});
exports.IGumballParameterJsonSchema = zod_1.z.object({
    type: zod_1.z.literal('gumball'),
    props: zod_1.z.object({
        enableRotation: zod_1.z.boolean().optional(),
        enableScaling: zod_1.z.boolean().optional(),
        enableTranslation: zod_1.z.boolean().optional(),
        scale: zod_1.z.number().optional(),
        space: zod_1.z.literal('local').or(zod_1.z.literal('world')).optional(),
        selectionColor: zod_1.z.string().optional(),
    }).merge(IGeneralInteractionParameterJsonSchema),
});
exports.IInteractionParameterJsonSchema = exports.ISelectionParameterJsonSchema.or(exports.IGumballParameterJsonSchema);
const validateInteractionParameterSettings = (param) => {
    return exports.IInteractionParameterJsonSchema.safeParse(param);
};
exports.validateInteractionParameterSettings = validateInteractionParameterSettings;
const validateSelectionParameterSettings = (param) => {
    return exports.ISelectionParameterJsonSchema.safeParse(param);
};
exports.validateSelectionParameterSettings = validateSelectionParameterSettings;
const validateGumballParameterSettings = (param) => {
    return exports.IGumballParameterJsonSchema.safeParse(param);
};
exports.validateGumballParameterSettings = validateGumballParameterSettings;
// #endregion Variables (7)
//# sourceMappingURL=IInteractionParameterSettings.js.map

/***/ }),

/***/ 48819:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PARAMETER_VISUALIZATION = exports.PARAMETER_TYPE = void 0;
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
Object.defineProperty(exports, "PARAMETER_TYPE", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseParameterType; } }));
Object.defineProperty(exports, "PARAMETER_VISUALIZATION", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseParameterVisualization; } }));
//# sourceMappingURL=types.js.map

/***/ }),

/***/ 56434:
/***/ (function(__unused_webpack_module, exports) {


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
exports.extendMimeTypes = exports.mapMimeTypeToFileEndings = exports.guessMimeTypeFromFilename = exports.fetchFileWithToken = exports.downloadBlobFileSaveAs = exports.downloadBlobFile = exports.guessMissingMimeType = exports.guessMimeTypeByExt = exports.getFileExtension = exports.extensionToMimeTypeMapping = void 0;
exports.extensionToMimeTypeMapping = {
    svg: ['image/svg+xml'],
    svgz: ['image/svg+xml'],
    jpg: ['image/jpeg'],
    jpeg: ['image/jpeg'],
    png: ['image/png'],
    gif: ['image/gif'],
    bmp: ['image/bmp'],
    tif: ['image/tif'],
    tiff: ['image/tiff'],
    gltf: ['gltf+json', 'model/gltf-binary'],
    glb: ['application/octet-stream', 'model/gltf-binary'],
    bin: ['application/octet-stream', 'application/gltf-buffer'],
    '3dm': ['model/vnd.3dm', 'application/3dm', 'x-world/x-3dmf'],
    '3ds': ['application/x-3ds', 'image/x-3ds', 'application/3ds'],
    fbx: ['application/fbx'],
    dxf: ['application/dxf', 'application/x-autocad', 'application/x-dxf', 'drawing/x-dxf', 'image/vnd.dxf', 'image/x-autocad', 'image/x-dxf', 'zz-application/zz-winassoc-dxf'],
    dwg: ['application/dwg'],
    pdf: ['application/pdf'],
    '3mf': ['model/3mf'],
    stl: ['model/stl', 'application/sla'],
    amf: ['application/amf'],
    ai: ['application/ai'],
    dgn: ['application/dgn'],
    ply: ['application/ply'],
    ps: ['application/postscript'],
    eps: ['application/postscript'],
    skp: ['application/skp'],
    slc: ['application/slc'],
    sldprt: ['application/sldprt'],
    sldasm: ['application/sldasm'],
    stp: ['application/step'],
    step: ['application/step'],
    vda: ['application/vda'],
    gdf: ['application/gdf'],
    vrml: ['model/vrml', 'model/x3d-vrml'],
    wrl: ['model/vrml', 'model/x3d-vrml'],
    vi: ['model/vrml', 'model/x3d-vrml'],
    igs: ['model/iges', 'application/iges'],
    iges: ['model/iges', 'application/iges'],
    obj: ['model/obj', 'application/wavefront-obj'],
    off: ['application/off'],
    txt: ['text/plain'],
    mtl: ['text/plain'],
    g: ['text/plain'],
    gcode: ['text/plain'],
    glsl: ['text/plain'],
    csv: ['text/csv', 'application/vnd.ms-excel'],
    xls: ['application/vnd.ms-excel'],
    xlsx: ['application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'],
    xml: ['application/xml', 'text/xml'],
    json: ['application/json'],
    ifc: ['application/x-step'],
    ifcxml: ['application/xml'],
    ifczip: ['application/zip'],
    sdtf: ['model/vnd.sdtf'],
    sddtf: ['model/vnd.sdtf'],
    hdr: ['image/vnd.radiance'],
    zip: ['application/zip', 'application/x-zip-compressed']
};
/**
 * Given a file name, extract the file extension.
 * @param fileName
 * @returns
 */
const getFileExtension = (fileName) => {
    const match = fileName.match(/\.([0-9a-z]+)$/i);
    return (match && match[1]) ? match[1].toLowerCase() : undefined;
};
exports.getFileExtension = getFileExtension;
/**
 * Guess the mime type of a file by its extension.
 * @param fileName
 * @returns
 */
const guessMimeTypeByExt = (fileName) => {
    return (0, exports.guessMimeTypeFromFilename)(fileName)[0];
};
exports.guessMimeTypeByExt = guessMimeTypeByExt;
/**
 * In case a file is missing a mime type, try to guess it from the file name.
 * @param file
 * @returns
 */
const guessMissingMimeType = (file) => {
    if (typeof (file) === 'string') {
        return file;
    }
    if (file.type) {
        return file;
    }
    return new File([file], file.name, { type: (0, exports.guessMimeTypeByExt)(file.name) });
};
exports.guessMissingMimeType = guessMissingMimeType;
/**
 * Download a blob and use the specified filename.
 *
 * @param blob
 * @param filename
 */
const downloadBlobFile = (blob, filename) => {
    const modelFile = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.style.display = 'none';
    link.href = modelFile;
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
};
exports.downloadBlobFile = downloadBlobFile;
/**
 * Download a blob and use the specified filename with the save as dialog.
 * @param blob
 * @param filename
 * @returns
 */
const downloadBlobFileSaveAs = (blob, filename) => __awaiter(void 0, void 0, void 0, function* () {
    const isSupported = window && 'showSaveFilePicker' in window;
    if (!isSupported)
        return (0, exports.downloadBlobFile)(blob, filename);
    const extension = (0, exports.getFileExtension)(filename);
    try {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const handle = yield window.showSaveFilePicker({
            suggestedName: filename,
            types: [
                {
                    accept: { 'multipart/form-data': [`.${extension}`] },
                },
            ],
        });
        const writable = yield handle.createWritable();
        yield writable.write(blob);
        yield writable.close();
        return handle;
    }
    catch (err) {
        if (err.code === 20)
            return; // Dialog closed
        if (err.code === 18) { // User interaction time expired
            return (0, exports.downloadBlobFile)(blob, filename);
        }
        throw err;
    }
});
exports.downloadBlobFileSaveAs = downloadBlobFileSaveAs;
/**
 * Fetch and save a file. Optionally, a Response object resulting from a previous fetch call
 * can be provided instead of a URL.
 *
 * @param urlOrResponse URL to fetch from, or a Response object resulting from a previous fetch call.
 * @param filename
 * @param token If provided a token, use that token in the Authorization header of the fetch request.
 */
const fetchFileWithToken = (urlOrResponse, filename, token = null, finallyCb = () => { }, isSaveAs = false) => __awaiter(void 0, void 0, void 0, function* () {
    return (typeof urlOrResponse === 'string' ? fetch(urlOrResponse, Object.assign({}, (token ? { headers: { Authorization: token } } : {}))) : Promise.resolve(urlOrResponse))
        .then((res) => res.blob())
        .then((blob) => {
        isSaveAs ? (0, exports.downloadBlobFileSaveAs)(blob, filename) : (0, exports.downloadBlobFile)(blob, filename);
    }).catch((err) => {
        throw new Error(err.message);
    })
        .finally(() => {
        finallyCb();
    });
});
exports.fetchFileWithToken = fetchFileWithToken;
/**
 * Try to guess mime types from a file name
 * @param {string} filename
 * @return {string[]} guessed mime type, empty array in case none could be guessed
 */
const guessMimeTypeFromFilename = (filename) => {
    const parts = filename.toLowerCase().split('.');
    if (!(parts.length > 0))
        return [];
    const extension = parts[parts.length - 1];
    const supportedExtensions = Object.keys(exports.extensionToMimeTypeMapping);
    if (!supportedExtensions.includes(extension))
        return [];
    return exports.extensionToMimeTypeMapping[extension];
};
exports.guessMimeTypeFromFilename = guessMimeTypeFromFilename;
/**
 * Returns the corresponding file endings for each mime type.
 * @param {string[]} mimeTypes
 * @return {string[]}
 */
const mapMimeTypeToFileEndings = (mimeTypes) => {
    const fileEndings = [];
    const types = mimeTypes.map(type => type.toLowerCase());
    for (let i = 0; i < types.length; i++) {
        const fileEnding = Object.keys(exports.extensionToMimeTypeMapping).find(key => exports.extensionToMimeTypeMapping[key].includes(types[i]));
        if (fileEnding)
            fileEndings.push('.' + fileEnding);
    }
    return fileEndings;
};
exports.mapMimeTypeToFileEndings = mapMimeTypeToFileEndings;
/**
 * Returns an extended array of mime types.
 * The provided mime types are are mapped to file endings and the corresponding mime types are added.
 * The types are filtered to only contain unique values.
 *
 * @param {string[]} mimeTypes
 * @return {string[]}
 */
const extendMimeTypes = (mimeTypes) => {
    let types = mimeTypes.map(type => type.toLowerCase());
    // get all endings that are possible for this type
    const endings = (0, exports.mapMimeTypeToFileEndings)(types);
    // get all mimeTypes that are possible for these endings
    endings.forEach((e) => types = types.concat((0, exports.guessMimeTypeFromFilename)(e)));
    types = types.filter(function (item, pos) {
        return types.indexOf(item) == pos;
    });
    return types;
};
exports.extendMimeTypes = extendMimeTypes;
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=vendors-53b2ea59.bundle.js.map