"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[12],{

/***/ 44055:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionEngine = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class IntersectionEngine {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor() {
        // #region Properties (5)
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._raycaster = new THREE.Raycaster();
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._intersectNodes = [];
        this.gatherNodes();
        this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_UPDATED, () => {
            this.gatherNodes();
        });
    }
    // #endregion Constructors (1)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (2)
    intersect(ray, viewportId, filterCriteria, rayCasterParams) {
        let intersections = [];
        this._intersectNodes.forEach(i => {
            const currentIntersections = this.intersectNode(ray, i.node, i.geometryData, viewportId, filterCriteria, rayCasterParams);
            if (currentIntersections)
                intersections = intersections.concat(currentIntersections);
        });
        intersections.sort((a, b) => a.distance - b.distance);
        return intersections;
    }
    intersectNode(ray, node, geometryData, viewportId, filterCriteria, rayCasterParams) {
        if (node.visible === false)
            return;
        if (viewportId !== undefined) {
            if (node.excludeViewports.includes(viewportId))
                return;
            if (node.restrictViewports.length > 0 && !node.restrictViewports.includes(viewportId))
                return;
        }
        if (filterCriteria) {
            for (let i = 0; i < filterCriteria.length; i++) {
                if (filterCriteria[i](node))
                    return this.intersectionTest(ray, node, geometryData, viewportId, rayCasterParams);
            }
        }
        else {
            return this.intersectionTest(ray, node, geometryData, viewportId, rayCasterParams);
        }
    }
    // #endregion Public Methods (2)
    // #region Private Methods (2)
    /**
     * Gather all nodes that contain geometry data.
     */
    gatherNodes() {
        this._intersectNodes = [];
        this._tree.root.traverse(node => {
            if (node.visible === false)
                return;
            for (let i = 0; i < node.data.length; i++) {
                if (node.data[i] instanceof viewer_shared_types_1.GeometryData) {
                    const geometryData = node.data[i];
                    let tempNode = node;
                    let visible = true, restrictViewports = [], excludeViewports = [];
                    while (tempNode.parent) {
                        visible = tempNode.visible && visible;
                        restrictViewports = restrictViewports.concat(tempNode.restrictViewports);
                        excludeViewports = excludeViewports.concat(tempNode.excludeViewports);
                        tempNode = tempNode.parent;
                    }
                    this._intersectNodes.push({
                        node,
                        geometryData: { [`${geometryData.id}_${geometryData.version}`]: geometryData },
                        visible,
                        restrictViewports: [...new Set(restrictViewports)],
                        excludeViewports: [...new Set(excludeViewports)]
                    });
                }
            }
        });
    }
    /**
     * Do the intersection test with the ray and the node.
     *
     * @param ray the ray to test
     * @param node the node to test
     * @param geometryData the geometry data of the node
     * @param viewportId the viewport id
     * @returns
     */
    intersectionTest(ray, node, geometryData, viewportId, rayCasterParams) {
        if (rayCasterParams)
            this._raycaster.params = rayCasterParams;
        this._raycaster.ray.direction.set(ray.direction[0], ray.direction[1], ray.direction[2]);
        this._raycaster.ray.origin.set(ray.origin[0], ray.origin[1], ray.origin[2]);
        let intersections = [];
        const threeJsObject = node.convertedObject[viewportId];
        if (threeJsObject) {
            const intersectionThree = this._raycaster.intersectObject(threeJsObject);
            const intersection = intersectionThree.map(i => {
                const intersection = {
                    distance: i.distance,
                    point: [i.point.x, i.point.y, i.point.z],
                    node: node,
                    geometryData: geometryData[`${i.object.parent.SDid}_${i.object.parent.SDversion}`]
                };
                return intersection;
            });
            intersections = intersections.concat(intersection);
        }
        intersections.sort((a, b) => a.distance - b.distance);
        return intersections;
    }
}
exports.IntersectionEngine = IntersectionEngine;
//# sourceMappingURL=IntersectionEngine.js.map

/***/ }),

/***/ 11579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.IntersectionEngine = void 0;
const IntersectionEngine_1 = __webpack_require__(44055);
Object.defineProperty(exports, "IntersectionEngine", ({ enumerable: true, get: function () { return IntersectionEngine_1.IntersectionEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 27159:
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
var _AbstractLight_type, _AbstractLight_color, _AbstractLight_intensity, _AbstractLight_name, _AbstractLight_order, _AbstractLight_parentNode, _AbstractLight_useNodeData;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractLight = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
class AbstractLight extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (8)
    // #region Constructors (1)
    constructor(properties) {
        super(properties.id, properties.version);
        // #region Properties (8)
        _AbstractLight_type.set(this, void 0);
        _AbstractLight_color.set(this, void 0);
        _AbstractLight_intensity.set(this, void 0);
        _AbstractLight_name.set(this, void 0);
        _AbstractLight_order.set(this, void 0);
        _AbstractLight_parentNode.set(this, void 0);
        _AbstractLight_useNodeData.set(this, false);
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        __classPrivateFieldSet(this, _AbstractLight_color, properties.color, "f");
        __classPrivateFieldSet(this, _AbstractLight_intensity, properties.intensity, "f");
        __classPrivateFieldSet(this, _AbstractLight_type, properties.type, "f");
        __classPrivateFieldSet(this, _AbstractLight_name, properties.name, "f");
        __classPrivateFieldSet(this, _AbstractLight_order, properties.order, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (13)
    get color() {
        return __classPrivateFieldGet(this, _AbstractLight_color, "f");
    }
    set color(value) {
        __classPrivateFieldSet(this, _AbstractLight_color, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get intensity() {
        return __classPrivateFieldGet(this, _AbstractLight_intensity, "f");
    }
    set intensity(value) {
        __classPrivateFieldSet(this, _AbstractLight_intensity, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get name() {
        return __classPrivateFieldGet(this, _AbstractLight_name, "f");
    }
    set name(value) {
        __classPrivateFieldSet(this, _AbstractLight_name, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get order() {
        return __classPrivateFieldGet(this, _AbstractLight_order, "f");
    }
    set order(value) {
        __classPrivateFieldSet(this, _AbstractLight_order, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get parentNode() {
        return __classPrivateFieldGet(this, _AbstractLight_parentNode, "f");
    }
    set parentNode(value) {
        __classPrivateFieldSet(this, _AbstractLight_parentNode, value, "f");
    }
    get type() {
        return __classPrivateFieldGet(this, _AbstractLight_type, "f");
    }
    get useNodeData() {
        return __classPrivateFieldGet(this, _AbstractLight_useNodeData, "f");
    }
    set useNodeData(value) {
        __classPrivateFieldSet(this, _AbstractLight_useNodeData, value, "f");
    }
}
exports.AbstractLight = AbstractLight;
_AbstractLight_type = new WeakMap(), _AbstractLight_color = new WeakMap(), _AbstractLight_intensity = new WeakMap(), _AbstractLight_name = new WeakMap(), _AbstractLight_order = new WeakMap(), _AbstractLight_parentNode = new WeakMap(), _AbstractLight_useNodeData = new WeakMap();
//# sourceMappingURL=AbstractLight.js.map

/***/ }),

/***/ 59199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightEngine = void 0;
const AmbientLight_1 = __webpack_require__(3363);
const viewer_shared_services_1 = __webpack_require__(8389);
const DirectionalLight_1 = __webpack_require__(62143);
const HemisphereLight_1 = __webpack_require__(65475);
const ILight_1 = __webpack_require__(7029);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const LightScene_1 = __webpack_require__(17093);
const PointLight_1 = __webpack_require__(43725);
const SpotLight_1 = __webpack_require__(44723);
const gl_matrix_1 = __webpack_require__(61961);
class LightEngine {
    // #endregion Properties (7)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (7)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._lightNode = new viewer_shared_node_tree_1.TreeNode('lights');
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._lightScenes = {};
        this._tree.root.addChild(this._lightNode);
        this._lightNode.restrictViewports = [this._renderingEngine.id];
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (4)
    get lightScene() {
        return this._lightScene;
    }
    get lightScenes() {
        return this._lightScenes;
    }
    get update() {
        return this._update;
    }
    set update(value) {
        this._update = value;
    }
    // #endregion Public Getters And Setters (4)
    // #region Public Methods (6)
    applySettings(settingsEngine) {
        this._lightScenes = {};
        for (const lightSceneId in settingsEngine.light.lightScenes) {
            const lightSceneUUID = this._uuidGenerator.validate(lightSceneId) ? lightSceneId : this._uuidGenerator.create();
            const lightSceneName = settingsEngine.light.lightScenes[lightSceneId].name ? settingsEngine.light.lightScenes[lightSceneId].name : lightSceneId;
            const ls = new LightScene_1.LightScene(this._renderingEngine, { id: lightSceneUUID, name: lightSceneName });
            for (const lightId in settingsEngine.light.lightScenes[lightSceneId].lights) {
                const lightUUID = this._uuidGenerator.validate(lightId) ? lightId : this._uuidGenerator.create();
                const light = settingsEngine.light.lightScenes[lightSceneId].lights[lightId];
                let l;
                switch (light.type) {
                    case ILight_1.LIGHT_TYPE.DIRECTIONAL:
                        l = new DirectionalLight_1.DirectionalLight({
                            color: this._converter.toHexColor(light.properties.color),
                            intensity: light.properties.intensity,
                            direction: this._converter.toVec3(light.properties.direction),
                            castShadow: light.properties.castShadow,
                            shadowMapResolution: light.properties.shadowMapResolution,
                            shadowMapBias: light.properties.shadowMapBias,
                            name: light.name ? light.name : lightId,
                            order: light.order,
                            id: lightUUID
                        });
                        break;
                    case ILight_1.LIGHT_TYPE.HEMISPHERE:
                        l = new HemisphereLight_1.HemisphereLight({
                            color: this._converter.toHexColor(light.properties.skyColor),
                            intensity: light.properties.intensity,
                            groundColor: this._converter.toHexColor(light.properties.groundColor),
                            name: light.name ? light.name : lightId,
                            order: light.order,
                            id: lightUUID
                        });
                        break;
                    case ILight_1.LIGHT_TYPE.POINT:
                        l = new PointLight_1.PointLight({
                            color: this._converter.toHexColor(light.properties.color),
                            intensity: light.properties.intensity,
                            position: this._converter.toVec3(light.properties.position),
                            distance: light.properties.distance,
                            decay: light.properties.decay,
                            name: light.name ? light.name : lightId,
                            order: light.order,
                            id: lightUUID
                        });
                        break;
                    case ILight_1.LIGHT_TYPE.SPOT:
                        l = new SpotLight_1.SpotLight({
                            color: this._converter.toHexColor(light.properties.color),
                            intensity: light.properties.intensity,
                            position: this._converter.toVec3(light.properties.position),
                            target: this._converter.toVec3(light.properties.target),
                            distance: light.properties.distance,
                            decay: light.properties.decay,
                            angle: light.properties.angle,
                            penumbra: light.properties.penumbra,
                            name: light.name ? light.name : lightId,
                            order: light.order,
                            id: lightUUID
                        });
                        break;
                    case ILight_1.LIGHT_TYPE.AMBIENT:
                    default:
                        l = new AmbientLight_1.AmbientLight({
                            color: this._converter.toHexColor(light.properties.color),
                            intensity: light.properties.intensity,
                            name: light.name ? light.name : lightId,
                            order: light.order,
                            id: lightUUID
                        });
                }
                ls.addLight(l);
            }
            this._lightScenes[ls.id] = ls;
        }
        // there is a light scene but no id is saved (old viewer)
        if (settingsEngine.light.lightSceneId === undefined && Object.values(settingsEngine.light.lightScenes).length > 0) {
            const res = this.assignLightScene(Object.keys(settingsEngine.light.lightScenes)[0]);
            if (res === false) {
                const ls = this.createLightScene({ name: settingsEngine.light.lightSceneId === 'default' ? 'default' : 'standard' });
                ls.addLight(new AmbientLight_1.AmbientLight({ color: '#ffffff', intensity: 0.5, name: 'ambient0' }));
                ls.addLight(new DirectionalLight_1.DirectionalLight({ color: '#ffffff', intensity: 0.75, direction: gl_matrix_1.vec3.fromValues(.5774, -.5774, .5774), castShadow: true, name: 'directional0' }));
                ls.addLight(new DirectionalLight_1.DirectionalLight({ color: '#ffffff', intensity: 0.35, direction: gl_matrix_1.vec3.fromValues(.25, -1, 1), castShadow: false, name: 'directional1' }));
                this._lightScenes[ls.id] = ls;
            }
        } // there is no standard light scene in the light scenes, but a light scene name is specified (old viewer)
        else if (settingsEngine.light.lightSceneId) {
            const res = this.assignLightScene(settingsEngine.light.lightSceneId);
            if (res === false) {
                const ls = this.createLightScene({ name: settingsEngine.light.lightSceneId === 'default' ? 'default' : 'standard' });
                ls.addLight(new AmbientLight_1.AmbientLight({ color: '#ffffff', intensity: 0.5, name: 'ambient0' }));
                ls.addLight(new DirectionalLight_1.DirectionalLight({ color: '#ffffff', intensity: 0.75, direction: gl_matrix_1.vec3.fromValues(.5774, -.5774, .5774), castShadow: true, name: 'directional0' }));
                ls.addLight(new DirectionalLight_1.DirectionalLight({ color: '#ffffff', intensity: 0.35, direction: gl_matrix_1.vec3.fromValues(.25, -1, 1), castShadow: false, name: 'directional1' }));
                this._lightScenes[ls.id] = ls;
            }
        }
        // this can only be the case if the settings were completely empty, therefore we assign the new light scene
        else if (JSON.stringify(settingsEngine.settingsJson) == JSON.stringify({})) {
            const ls = this.createLightScene({ name: 'standard', standard: true });
            this._lightScenes[ls.id] = ls;
        }
        if (this._update)
            this._update();
    }
    assignLightScene(id) {
        if (!this._lightScenes[id]) {
            for (const lightSceneId in this._lightScenes) {
                const lightScene = this._lightScenes[lightSceneId];
                const lightSceneName = lightScene.name || lightSceneId;
                if (lightSceneName === id) {
                    const res = this.assignLightScene(lightSceneId);
                    return res;
                }
            }
            return false;
        }
        this._lightScene = this._lightScenes[id];
        while (this._lightNode.children.length > 0)
            this._lightNode.removeChild(this._lightNode.children[0]);
        this._lightNode.addChild(this._lightScene.node);
        this._lightNode.updateVersion();
        return true;
    }
    close() {
        this._tree.root.removeChild(this._lightNode);
    }
    createLightScene(properties) {
        const lightSceneId = this._uuidGenerator.create();
        const lightScene = new LightScene_1.LightScene(this._renderingEngine, { id: lightSceneId, name: properties.name });
        if (properties.standard === true) {
            lightScene.addLight(new DirectionalLight_1.DirectionalLight({ color: '#ffffff', intensity: 2.5, direction: gl_matrix_1.vec3.fromValues(.5774, -.5774, .5774), castShadow: true, name: 'directional0' }));
            lightScene.addLight(new AmbientLight_1.AmbientLight({ color: '#ffffff', intensity: 0.3, name: 'ambient0' }));
        }
        this._lightScenes[lightSceneId] = lightScene;
        this._lightScene = lightScene;
        while (this._lightNode.children.length > 0)
            this._lightNode.removeChild(this._lightNode.children[0]);
        this._lightNode.addChild(this._lightScene.node);
        this._lightNode.updateVersion();
        if (this._update)
            this._update();
        return lightScene;
    }
    removeLightScene(id) {
        if (!this._lightScenes[id]) {
            for (const lightSceneId in this._lightScenes) {
                const lightScene = this._lightScenes[lightSceneId];
                const lightSceneName = lightScene.name || lightSceneId;
                if (lightSceneName === id) {
                    const res = this.removeLightScene(lightSceneId);
                    return res;
                }
            }
            return false;
        }
        if (this._lightScene && this._lightScene.id === id) {
            this._lightScene = undefined;
            while (this._lightNode.children.length > 0)
                this._lightNode.removeChild(this._lightNode.children[0]);
            this._lightNode.updateVersion();
        }
        delete this._lightScenes[id];
        if (this._update)
            this._update();
        return true;
    }
    saveSettings(settingsEngine) {
        settingsEngine.light.lightSceneId = this.lightScene ? this.lightScene.id : undefined;
        const converted = {};
        for (const lightSceneId in this._lightScenes) {
            const lightScene = this._lightScenes[lightSceneId];
            const lightSceneName = lightScene.name || lightSceneId;
            converted[lightSceneId] = {
                name: lightSceneName,
                lights: {}
            };
            for (const lightId in lightScene.lights) {
                const light = lightScene.lights[lightId];
                let properties;
                switch (light.type) {
                    case ILight_1.LIGHT_TYPE.DIRECTIONAL:
                        properties = {
                            color: this._converter.toHexColor(light.color),
                            intensity: light.intensity,
                            direction: { x: light.direction[0], y: light.direction[1], z: light.direction[2] },
                            castShadow: light.castShadow,
                            shadowMapResolution: light.shadowMapResolution,
                            shadowMapBias: light.shadowMapBias
                        };
                        break;
                    case ILight_1.LIGHT_TYPE.HEMISPHERE:
                        properties = {
                            skyColor: this._converter.toHexColor(light.color),
                            intensity: light.intensity,
                            groundColor: this._converter.toHexColor(light.groundColor)
                        };
                        break;
                    case ILight_1.LIGHT_TYPE.POINT:
                        properties = {
                            color: this._converter.toHexColor(light.color),
                            intensity: light.intensity,
                            position: { x: light.position[0], y: light.position[1], z: light.position[2] },
                            distance: light.distance,
                            decay: light.decay
                        };
                        break;
                    case ILight_1.LIGHT_TYPE.SPOT:
                        properties = {
                            color: this._converter.toHexColor(light.color),
                            intensity: light.intensity,
                            position: { x: light.position[0], y: light.position[1], z: light.position[2] },
                            target: { x: light.target[0], y: light.target[1], z: light.target[2] },
                            distance: light.distance,
                            decay: light.decay,
                            angle: light.angle,
                            penumbra: light.penumbra
                        };
                        break;
                    case ILight_1.LIGHT_TYPE.AMBIENT:
                    default:
                        properties = {
                            color: this._converter.toHexColor(light.color),
                            intensity: light.intensity
                        };
                }
                converted[lightSceneId].lights[lightId] = {
                    name: light.name,
                    type: light.type,
                    properties
                };
                if (light.order !== undefined)
                    converted[lightSceneId].lights[lightId].order = light.order;
            }
        }
        settingsEngine.light.lightScenes = converted;
    }
}
exports.LightEngine = LightEngine;
//# sourceMappingURL=LightEngine.js.map

/***/ }),

/***/ 17093:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LightScene = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const AmbientLight_1 = __webpack_require__(3363);
const DirectionalLight_1 = __webpack_require__(62143);
const HemisphereLight_1 = __webpack_require__(65475);
const PointLight_1 = __webpack_require__(43725);
const SpotLight_1 = __webpack_require__(44723);
class LightScene {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor(_renderingEngine, properties) {
        this._renderingEngine = _renderingEngine;
        this._lights = {};
        this._id = properties.id;
        this._name = properties.name;
        this._node = new viewer_shared_node_tree_1.TreeNode(properties.name || properties.id);
    }
    // #endregion Constructors (1)
    // #region Public Accessors (5)
    get id() {
        return this._id;
    }
    get lights() {
        return this._lights;
    }
    get name() {
        return this._name;
    }
    set name(value) {
        this._name = value;
    }
    get node() {
        return this._node;
    }
    get update() {
        return this._update;
    }
    set update(value) {
        this._update = value;
    }
    // #endregion Public Accessors (5)
    // #region Public Methods (8)
    addAmbientLight(properties) {
        const light = new AmbientLight_1.AmbientLight(properties);
        this.addLight(light);
        return light;
    }
    addDirectionalLight(properties) {
        const light = new DirectionalLight_1.DirectionalLight(properties);
        this.addLight(light);
        return light;
    }
    addHemisphereLight(properties) {
        const light = new HemisphereLight_1.HemisphereLight(properties);
        this.addLight(light);
        return light;
    }
    addLight(light) {
        const node = new viewer_shared_node_tree_1.TreeNode(light.id);
        light.parentNode = node;
        node.data.push(light);
        this._node.addChild(node);
        this._lights[light.id] = light;
        this._node.updateVersion();
        if (this._update)
            this._update();
    }
    addPointLight(properties) {
        const light = new PointLight_1.PointLight(properties);
        this.addLight(light);
        return light;
    }
    addSpotLight(properties) {
        const light = new SpotLight_1.SpotLight(properties);
        this.addLight(light);
        return light;
    }
    removeLight(id) {
        if (!this._lights[id])
            return false;
        for (let i = 0; i < this._node.children.length; i++) {
            const node = this._node.children[i];
            if (node && node.name === id) {
                this._node.removeChild(node);
                break;
            }
        }
        delete this._lights[id];
        this._node.updateVersion();
        if (this._update)
            this._update();
        return true;
    }
}
exports.LightScene = LightScene;
//# sourceMappingURL=LightScene.js.map

/***/ }),

/***/ 3363:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AmbientLight = void 0;
const AbstractLight_1 = __webpack_require__(27159);
const ILight_1 = __webpack_require__(7029);
class AmbientLight extends AbstractLight_1.AbstractLight {
    // #region Constructors (1)
    constructor(properties) {
        super({
            color: properties.color || '#ffffff',
            intensity: properties.intensity !== undefined ? properties.intensity : 1,
            type: ILight_1.LIGHT_TYPE.AMBIENT,
            name: properties.name,
            order: properties.order,
            id: properties.id,
            version: properties.version
        });
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    clone() {
        return new AmbientLight({
            color: this.color || '#ffffff',
            intensity: this.intensity || 0.5,
            name: this.name,
            order: this.order,
            id: this.id,
            version: this.version
        });
    }
}
exports.AmbientLight = AmbientLight;
//# sourceMappingURL=AmbientLight.js.map

/***/ }),

/***/ 62143:
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
var _DirectionalLight_castShadow, _DirectionalLight_direction, _DirectionalLight_shadowMapBias, _DirectionalLight_shadowMapResolution;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DirectionalLight = void 0;
const AbstractLight_1 = __webpack_require__(27159);
const ILight_1 = __webpack_require__(7029);
const gl_matrix_1 = __webpack_require__(61961);
class DirectionalLight extends AbstractLight_1.AbstractLight {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(properties) {
        super({
            color: properties.color || '#ffffff',
            intensity: properties.intensity !== undefined ? properties.intensity : 1,
            type: ILight_1.LIGHT_TYPE.DIRECTIONAL,
            name: properties.name,
            order: properties.order,
            id: properties.id,
            version: properties.version
        });
        // #region Properties (4)
        _DirectionalLight_castShadow.set(this, true);
        _DirectionalLight_direction.set(this, gl_matrix_1.vec3.fromValues(-1, 0, 1));
        _DirectionalLight_shadowMapBias.set(this, -0.003);
        _DirectionalLight_shadowMapResolution.set(this, 1024);
        if (properties.direction)
            __classPrivateFieldSet(this, _DirectionalLight_direction, properties.direction, "f");
        if (properties.castShadow !== undefined)
            __classPrivateFieldSet(this, _DirectionalLight_castShadow, properties.castShadow, "f");
        if (properties.shadowMapResolution)
            __classPrivateFieldSet(this, _DirectionalLight_shadowMapResolution, properties.shadowMapResolution, "f");
        if (properties.shadowMapBias)
            __classPrivateFieldSet(this, _DirectionalLight_shadowMapBias, properties.shadowMapBias, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (8)
    get castShadow() {
        return __classPrivateFieldGet(this, _DirectionalLight_castShadow, "f");
    }
    set castShadow(value) {
        __classPrivateFieldSet(this, _DirectionalLight_castShadow, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get direction() {
        return __classPrivateFieldGet(this, _DirectionalLight_direction, "f");
    }
    set direction(value) {
        __classPrivateFieldSet(this, _DirectionalLight_direction, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get shadowMapBias() {
        return __classPrivateFieldGet(this, _DirectionalLight_shadowMapBias, "f");
    }
    set shadowMapBias(value) {
        __classPrivateFieldSet(this, _DirectionalLight_shadowMapBias, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get shadowMapResolution() {
        return __classPrivateFieldGet(this, _DirectionalLight_shadowMapResolution, "f");
    }
    set shadowMapResolution(value) {
        __classPrivateFieldSet(this, _DirectionalLight_shadowMapResolution, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    // #endregion Public Getters And Setters (8)
    // #region Public Methods (1)
    clone() {
        return new DirectionalLight({
            color: this.color,
            intensity: this.intensity,
            direction: this.direction,
            castShadow: this.castShadow,
            shadowMapResolution: this.shadowMapResolution,
            shadowMapBias: this.shadowMapBias,
            name: this.name,
            order: this.order,
            id: this.id,
            version: this.version
        });
    }
}
exports.DirectionalLight = DirectionalLight;
_DirectionalLight_castShadow = new WeakMap(), _DirectionalLight_direction = new WeakMap(), _DirectionalLight_shadowMapBias = new WeakMap(), _DirectionalLight_shadowMapResolution = new WeakMap();
//# sourceMappingURL=DirectionalLight.js.map

/***/ }),

/***/ 65475:
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
var _HemisphereLight_groundColor;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HemisphereLight = void 0;
const AbstractLight_1 = __webpack_require__(27159);
const ILight_1 = __webpack_require__(7029);
class HemisphereLight extends AbstractLight_1.AbstractLight {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(properties) {
        super({
            color: properties.color || '#ffffff',
            intensity: properties.intensity !== undefined ? properties.intensity : 1,
            type: ILight_1.LIGHT_TYPE.HEMISPHERE,
            name: properties.name,
            order: properties.order,
            id: properties.id,
            version: properties.version
        });
        // #region Properties (1)
        _HemisphereLight_groundColor.set(this, '#000000');
        if (properties.groundColor)
            __classPrivateFieldSet(this, _HemisphereLight_groundColor, properties.groundColor, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get groundColor() {
        return __classPrivateFieldGet(this, _HemisphereLight_groundColor, "f");
    }
    set groundColor(value) {
        __classPrivateFieldSet(this, _HemisphereLight_groundColor, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    // #endregion Public Getters And Setters (2)
    // #region Public Methods (1)
    clone() {
        return new HemisphereLight({
            color: this.color,
            groundColor: this.groundColor,
            intensity: this.intensity,
            name: this.name,
            order: this.order,
            id: this.id,
            version: this.version
        });
    }
}
exports.HemisphereLight = HemisphereLight;
_HemisphereLight_groundColor = new WeakMap();
//# sourceMappingURL=HemisphereLight.js.map

/***/ }),

/***/ 43725:
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
var _PointLight_decay, _PointLight_distance, _PointLight_position;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PointLight = void 0;
const AbstractLight_1 = __webpack_require__(27159);
const ILight_1 = __webpack_require__(7029);
const gl_matrix_1 = __webpack_require__(61961);
class PointLight extends AbstractLight_1.AbstractLight {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(properties) {
        super({
            color: properties.color || '#ffffff',
            intensity: properties.intensity !== undefined ? properties.intensity : 1,
            type: ILight_1.LIGHT_TYPE.POINT,
            name: properties.name,
            order: properties.order,
            id: properties.id,
            version: properties.version
        });
        // #region Properties (3)
        _PointLight_decay.set(this, 0);
        _PointLight_distance.set(this, 0);
        _PointLight_position.set(this, gl_matrix_1.vec3.fromValues(0, 0, 0));
        if (properties.position)
            __classPrivateFieldSet(this, _PointLight_position, properties.position, "f");
        if (properties.distance)
            __classPrivateFieldSet(this, _PointLight_distance, properties.distance, "f");
        if (properties.decay)
            __classPrivateFieldSet(this, _PointLight_decay, properties.decay, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (6)
    get decay() {
        return __classPrivateFieldGet(this, _PointLight_decay, "f");
    }
    set decay(value) {
        __classPrivateFieldSet(this, _PointLight_decay, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get distance() {
        return __classPrivateFieldGet(this, _PointLight_distance, "f");
    }
    set distance(value) {
        __classPrivateFieldSet(this, _PointLight_distance, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get position() {
        return __classPrivateFieldGet(this, _PointLight_position, "f");
    }
    set position(value) {
        __classPrivateFieldSet(this, _PointLight_position, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    // #endregion Public Getters And Setters (6)
    // #region Public Methods (1)
    clone() {
        return new PointLight({
            color: this.color,
            position: this.position,
            distance: this.distance,
            decay: this.decay,
            intensity: this.intensity,
            name: this.name,
            order: this.order,
            id: this.id,
            version: this.version
        });
    }
}
exports.PointLight = PointLight;
_PointLight_decay = new WeakMap(), _PointLight_distance = new WeakMap(), _PointLight_position = new WeakMap();
//# sourceMappingURL=PointLight.js.map

/***/ }),

/***/ 44723:
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
var _SpotLight_angle, _SpotLight_decay, _SpotLight_distance, _SpotLight_penumbra, _SpotLight_position, _SpotLight_target;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpotLight = void 0;
const AbstractLight_1 = __webpack_require__(27159);
const ILight_1 = __webpack_require__(7029);
const gl_matrix_1 = __webpack_require__(61961);
class SpotLight extends AbstractLight_1.AbstractLight {
    // #endregion Properties (6)
    // #region Constructors (1)
    constructor(properties) {
        super({
            color: properties.color || '#ffffff',
            intensity: properties.intensity !== undefined ? properties.intensity : 1,
            type: ILight_1.LIGHT_TYPE.SPOT,
            name: properties.name,
            order: properties.order,
            id: properties.id,
            version: properties.version
        });
        // #region Properties (6)
        _SpotLight_angle.set(this, Math.PI / 4.0);
        _SpotLight_decay.set(this, 0);
        _SpotLight_distance.set(this, 0);
        _SpotLight_penumbra.set(this, 0.5);
        _SpotLight_position.set(this, gl_matrix_1.vec3.fromValues(-1, 0, 1));
        _SpotLight_target.set(this, gl_matrix_1.vec3.fromValues(0, 0, 0));
        if (properties.position)
            __classPrivateFieldSet(this, _SpotLight_position, properties.position, "f");
        if (properties.target)
            __classPrivateFieldSet(this, _SpotLight_target, properties.target, "f");
        if (properties.distance)
            __classPrivateFieldSet(this, _SpotLight_distance, properties.distance, "f");
        if (properties.decay)
            __classPrivateFieldSet(this, _SpotLight_decay, properties.decay, "f");
        if (properties.angle)
            __classPrivateFieldSet(this, _SpotLight_angle, properties.angle, "f");
        if (properties.penumbra)
            __classPrivateFieldSet(this, _SpotLight_penumbra, properties.penumbra, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (12)
    get angle() {
        return __classPrivateFieldGet(this, _SpotLight_angle, "f");
    }
    set angle(value) {
        __classPrivateFieldSet(this, _SpotLight_angle, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get decay() {
        return __classPrivateFieldGet(this, _SpotLight_decay, "f");
    }
    set decay(value) {
        __classPrivateFieldSet(this, _SpotLight_decay, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get distance() {
        return __classPrivateFieldGet(this, _SpotLight_distance, "f");
    }
    set distance(value) {
        __classPrivateFieldSet(this, _SpotLight_distance, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get penumbra() {
        return __classPrivateFieldGet(this, _SpotLight_penumbra, "f");
    }
    set penumbra(value) {
        __classPrivateFieldSet(this, _SpotLight_penumbra, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get position() {
        return __classPrivateFieldGet(this, _SpotLight_position, "f");
    }
    set position(value) {
        __classPrivateFieldSet(this, _SpotLight_position, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    get target() {
        return __classPrivateFieldGet(this, _SpotLight_target, "f");
    }
    set target(value) {
        __classPrivateFieldSet(this, _SpotLight_target, value, "f");
        this.updateVersion();
        if (this.parentNode)
            this.parentNode.updateVersion();
    }
    // #endregion Public Getters And Setters (12)
    // #region Public Methods (1)
    clone() {
        return new SpotLight({
            color: this.color,
            position: this.position,
            target: this.target,
            distance: this.distance,
            decay: this.decay,
            angle: this.angle,
            penumbra: this.penumbra,
            intensity: this.intensity,
            name: this.name,
            order: this.order,
            id: this.id,
            version: this.version
        });
    }
}
exports.SpotLight = SpotLight;
_SpotLight_angle = new WeakMap(), _SpotLight_decay = new WeakMap(), _SpotLight_distance = new WeakMap(), _SpotLight_penumbra = new WeakMap(), _SpotLight_position = new WeakMap(), _SpotLight_target = new WeakMap();
//# sourceMappingURL=SpotLight.js.map

/***/ }),

/***/ 9454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SpotLight = exports.PointLight = exports.HemisphereLight = exports.DirectionalLight = exports.AmbientLight = exports.AbstractLight = exports.LightScene = exports.LIGHT_TYPE = exports.LightEngine = void 0;
const AbstractLight_1 = __webpack_require__(27159);
Object.defineProperty(exports, "AbstractLight", ({ enumerable: true, get: function () { return AbstractLight_1.AbstractLight; } }));
const LightEngine_1 = __webpack_require__(59199);
Object.defineProperty(exports, "LightEngine", ({ enumerable: true, get: function () { return LightEngine_1.LightEngine; } }));
const LightScene_1 = __webpack_require__(17093);
Object.defineProperty(exports, "LightScene", ({ enumerable: true, get: function () { return LightScene_1.LightScene; } }));
const AmbientLight_1 = __webpack_require__(3363);
Object.defineProperty(exports, "AmbientLight", ({ enumerable: true, get: function () { return AmbientLight_1.AmbientLight; } }));
const DirectionalLight_1 = __webpack_require__(62143);
Object.defineProperty(exports, "DirectionalLight", ({ enumerable: true, get: function () { return DirectionalLight_1.DirectionalLight; } }));
const HemisphereLight_1 = __webpack_require__(65475);
Object.defineProperty(exports, "HemisphereLight", ({ enumerable: true, get: function () { return HemisphereLight_1.HemisphereLight; } }));
const PointLight_1 = __webpack_require__(43725);
Object.defineProperty(exports, "PointLight", ({ enumerable: true, get: function () { return PointLight_1.PointLight; } }));
const SpotLight_1 = __webpack_require__(44723);
Object.defineProperty(exports, "SpotLight", ({ enumerable: true, get: function () { return SpotLight_1.SpotLight; } }));
const ILight_1 = __webpack_require__(7029);
Object.defineProperty(exports, "LIGHT_TYPE", ({ enumerable: true, get: function () { return ILight_1.LIGHT_TYPE; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7029:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LIGHT_TYPE = void 0;
var LIGHT_TYPE;
(function (LIGHT_TYPE) {
    LIGHT_TYPE["AMBIENT"] = "ambient";
    LIGHT_TYPE["DIRECTIONAL"] = "directional";
    LIGHT_TYPE["HEMISPHERE"] = "hemisphere";
    LIGHT_TYPE["POINT"] = "point";
    LIGHT_TYPE["RECTANGLE"] = "rectangle";
    LIGHT_TYPE["SPOT"] = "spot";
})(LIGHT_TYPE = exports.LIGHT_TYPE || (exports.LIGHT_TYPE = {}));
//# sourceMappingURL=ILight.js.map

/***/ })

}]);
//# sourceMappingURL=vendor.common-694cdba6.bundle.js.map