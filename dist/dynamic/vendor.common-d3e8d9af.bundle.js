"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[111],{

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

/***/ })

}]);
//# sourceMappingURL=vendor.common-d3e8d9af.bundle.js.map