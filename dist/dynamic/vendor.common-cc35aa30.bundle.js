"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[442],{

/***/ 18592:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutputDelayException = void 0;
class OutputDelayException extends Error {
    // #region Constructors (1)
    /**
     * Exception that is thrown when there is an output with a delay property.
     *
     * @param _delay the milliseconds to wait
     */
    constructor(_delay) {
        super();
        this._delay = _delay;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (1)
    get delay() {
        return this._delay;
    }
}
exports.OutputDelayException = OutputDelayException;
//# sourceMappingURL=OutputDelayException.js.map

/***/ }),

/***/ 16447:
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
exports.OutputLoader = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_global_access_objects_1 = __webpack_require__(50069);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const OutputDelayException_1 = __webpack_require__(18592);
const SessionOutputData_1 = __webpack_require__(77124);
const SessionTreeNode_1 = __webpack_require__(26401);
// #endregion Type aliases (1)
// #region Classes (1)
class OutputLoader {
    // #endregion Properties (6)
    // #region Constructors (1)
    /**
     * The output loader takes care of loading the outputs of a session, storing them and returning stored or newly loaded nodes.
     *
     * @param _session the session for this output loader
     */
    constructor(_sessionEngine) {
        this._sessionEngine = _sessionEngine;
        // #region Properties (6)
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._globalAccessObjects = viewer_shared_global_access_objects_1.GlobalAccessObjects.instance;
        this._lastOutputNodes = {};
        this._loadedOutputNodes = {};
        this._performanceEvaluator = viewer_shared_services_1.PerformanceEvaluator.instance;
        this._reloadSdtf = false;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (1)
    set reloadSdtf(value) {
        this._reloadSdtf = value;
    }
    // #endregion Public Getters And Setters (1)
    // #region Public Methods (2)
    getCurrentOutputVersions() {
        const versions = {};
        for (const o in this._lastOutputNodes)
            versions[o] = Object.keys(this._lastOutputNodes[o])[0];
        return versions;
    }
    /**
     * Load the outputs and return the scene graph node of the result.
     * In case the outputs have a delay property, it throws an OutputDelayException.
     *
     * @param outputs the outputs to load
     * @returns promise with a scene graph node
     */
    loadOutputs(nodeName, outputs, outputsFreeze, taskEventInfo, throwDelay = true) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this._performanceEvaluator.startSection('outputLoading');
            const node = new SessionTreeNode_1.SessionTreeNode(nodeName);
            const currentNodes = {};
            const outputInfo = {};
            const promises = [];
            const promisesNodes = [];
            let maxDelay = 0;
            const progress = {};
            const outputIDs = Object.keys(outputs);
            const cb = (e) => {
                const taskEvent = e;
                if (outputIDs.find(oId => taskEvent.id.startsWith(oId))) {
                    progress[taskEvent.id] = taskEvent.progress;
                    let sum = 0;
                    Object.values(progress).forEach(p => { sum += p; });
                    const outputLoadingProgress = (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * (sum / outputIDs.length) + taskEventInfo.progressRange.min;
                    const eventProgressUpdate = { type: taskEventInfo.type, id: taskEventInfo.eventId, progress: outputLoadingProgress, data: taskEventInfo.data, status: 'Output content loading progress.' };
                    this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgressUpdate);
                }
            };
            const listenerTokens = [];
            listenerTokens.push(this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, cb));
            listenerTokens.push(this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, cb));
            listenerTokens.push(this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, cb));
            listenerTokens.push(this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, cb));
            for (const outputID in outputs) {
                // we store some necessary information as this data may have been changed after the await (see warning below)
                outputInfo[outputID] = {
                    version: outputs[outputID].version,
                    contentFormat: outputs[outputID].content ? outputs[outputID].content.map(c => c.format) : []
                };
                currentNodes[outputID] = {};
                if (!this._loadedOutputNodes[outputID])
                    this._loadedOutputNodes[outputID] = {};
                if (this._reloadSdtf && outputs[outputID].content) {
                    const sdtfContents = (_a = outputs[outputID].content) === null || _a === void 0 ? void 0 : _a.filter(c => c.format === 'sdtf');
                    if (sdtfContents && sdtfContents.length > 0)
                        delete this._loadedOutputNodes[outputID][outputInfo[outputID].version];
                }
                if (outputsFreeze[outputID]) {
                    currentNodes[outputID][outputInfo[outputID].version] = this._lastOutputNodes[outputID][outputInfo[outputID].version];
                    // no loading necessary, progress done
                    progress[outputID] = 1;
                }
                else if (outputs[outputID].delay) {
                    maxDelay = Math.max(maxDelay, outputs[outputID].delay);
                }
                else if (!this._loadedOutputNodes[outputID][outputInfo[outputID].version]) {
                    currentNodes[outputID][outputInfo[outputID].version] = new SessionTreeNode_1.SessionTreeNode(outputID);
                    currentNodes[outputID][outputInfo[outputID].version].data.push(new SessionOutputData_1.SessionOutputData(outputs[outputID]));
                    if (outputs[outputID].content) {
                        for (let i = 0, len = outputs[outputID].content.length; i < len; i++) {
                            if (outputs[outputID].content[i].format === 'sdtf' && !this._sessionEngine.loadSdtf)
                                continue;
                            if (this._globalAccessObjects.loadContent)
                                promises.push(this._globalAccessObjects.loadContent(outputs[outputID].content[i], this._sessionEngine.jwtToken, outputID + '_' + outputInfo[outputID].version + '_' + i));
                            promisesNodes.push(currentNodes[outputID][outputInfo[outputID].version]);
                        }
                    }
                }
                else {
                    currentNodes[outputID][outputInfo[outputID].version] = this._loadedOutputNodes[outputID][outputInfo[outputID].version];
                    // no loading necessary, progress done
                    progress[outputID] = 1;
                }
            }
            if (maxDelay && throwDelay)
                throw new OutputDelayException_1.OutputDelayException(maxDelay);
            /**
             * WARNING: After this point outputs object cannot be used anymore.
             * This can happen when fast consecutive scene updates are done.
             * Therefore, we stored the data in the outputInfo.
             */
            yield Promise.all(promises);
            listenerTokens.forEach(t => this._eventEngine.removeListener(t));
            // all promises are resolved, await in the next lines is just for structural purposes
            for (let i = 0; i < promises.length; i++)
                promisesNodes[i].addChild(yield promises[i]);
            // here we assign all outputs just to the node and return it
            for (const outputID in outputInfo)
                if (currentNodes[outputID][outputInfo[outputID].version])
                    node.addChild(currentNodes[outputID][outputInfo[outputID].version]);
            // save the nodes as the last available version
            for (const outputID in outputInfo) {
                if (!currentNodes[outputID][outputInfo[outputID].version])
                    continue;
                this._loadedOutputNodes[outputID] = {};
                this._loadedOutputNodes[outputID][outputInfo[outputID].version] = currentNodes[outputID][outputInfo[outputID].version];
                this._lastOutputNodes[outputID] = {};
                this._lastOutputNodes[outputID][outputInfo[outputID].version] = currentNodes[outputID][outputInfo[outputID].version];
            }
            for (const outputID in outputInfo) {
                if (!currentNodes[outputID][outputInfo[outputID].version])
                    continue;
                if (currentNodes[outputID][outputInfo[outputID].version].children.length > 1) {
                    for (let i = 0, len = outputInfo[outputID].contentFormat.length; i < len; i++) {
                        if (outputInfo[outputID].contentFormat[i] === 'sdtf' && this._sessionEngine.loadSdtf === true) {
                            this.mergeContentNodes(currentNodes[outputID][outputInfo[outputID].version]);
                            break;
                        }
                    }
                }
            }
            this.assignMaterials(node);
            this._performanceEvaluator.endSection('outputLoading');
            return node;
        });
    }
    // #endregion Public Methods (2)
    // #region Private Methods (2)
    assignMaterials(node) {
        const addMaterialToGeometry = (node, material) => {
            for (let i = 0; i < node.data.length; i++) {
                if (node.data[i] instanceof viewer_shared_types_1.GeometryData) {
                    const geometry = node.data[i];
                    const currentMaterial = geometry.material;
                    if (currentMaterial === null || currentMaterial.materialOutput === true) {
                        geometry.material = material;
                    }
                }
            }
            for (let i = 0; i < node.children.length; i++) {
                const child = node.children[i];
                if (child)
                    addMaterialToGeometry(child, material);
            }
        };
        const getMaterialData = (node, materials = []) => {
            for (let k = 0; k < node.data.length; k++) {
                if (node.data[k] instanceof viewer_shared_types_1.AbstractMaterialData) {
                    const material = node.data[k];
                    material.materialOutput = true;
                    materials.push(material);
                }
            }
            for (let k = 0; k < node.children.length; k++) {
                const child = node.children[k];
                if (!child)
                    continue;
                materials.push(...getMaterialData(child));
            }
            return materials;
        };
        for (let m = 0; m < node.children.length; m++) {
            // per output node, we go through the material assignment process
            const outputNode = node.children[m];
            if (!outputNode)
                continue;
            // we go through all data properties, normally, there should ony one, but we just make sure
            for (let i = 0; i < outputNode.data.length; i++) {
                if (!(outputNode.data[i] instanceof SessionOutputData_1.SessionOutputData))
                    continue;
                // the session output data contains information about this Output
                // most importantly the SessionOutput property with the material and content in it
                const sessionOutputData = outputNode.data[i];
                // case 1: we have a specific material id defined, let's use that
                if (sessionOutputData.responseOutput.material) {
                    let materialNodes = [];
                    // now we have id
                    // get material with it    
                    for (let n = 0; n < node.children.length; n++) {
                        const materialNode = node.children[n];
                        if (!materialNode)
                            continue;
                        if (materialNode.name === sessionOutputData.responseOutput.material)
                            materialNodes = materialNode.children;
                    }
                    const geometryNodes = outputNode.children;
                    if (materialNodes.length >= geometryNodes.length) {
                        for (let n = 0; n < geometryNodes.length; n++) {
                            addMaterialToGeometry(geometryNodes[n], getMaterialData(materialNodes[n])[0]);
                        }
                    }
                    else {
                        if (materialNodes.length >= 1)
                            for (let n = 0; n < geometryNodes.length; n++) {
                                addMaterialToGeometry(geometryNodes[n], getMaterialData(materialNodes[0])[0]);
                            }
                    }
                }
                // case 2: there is no specific material id defined, maybe in the content we can match geometries to ids
                else {
                    // now we hope that in our content, there are exactly the amount of geometries and material, this will be interesting :)
                    const sessionOutputContent = sessionOutputData.responseOutput.content;
                    if (sessionOutputContent === undefined)
                        continue;
                    const materialNodes = [];
                    const geometryNodes = [];
                    for (let i = 0; i < sessionOutputContent.length; i++) {
                        if (sessionOutputContent[i].format === 'material') {
                            if (outputNode.children[i])
                                materialNodes.push(outputNode.children[i]);
                        }
                        else {
                            if (outputNode.children[i])
                                geometryNodes.push(outputNode.children[i]);
                        }
                    }
                    if (materialNodes.length >= geometryNodes.length) {
                        for (let n = 0; n < geometryNodes.length; n++) {
                            addMaterialToGeometry(geometryNodes[n], getMaterialData(materialNodes[n])[0]);
                        }
                    }
                    else {
                        if (materialNodes.length >= 1)
                            for (let n = 0; n < geometryNodes.length; n++) {
                                addMaterialToGeometry(geometryNodes[n], getMaterialData(materialNodes[0])[0]);
                            }
                    }
                }
            }
        }
    }
    mergeContentNodes(node) {
        if (!(node.children.length > 1))
            return;
        const children = [];
        while (node.children.length > 0) {
            children.push(...node.children[0].children);
            node.removeChild(node.children[0]);
        }
        const mergeNodes = (node1, node2) => {
            for (let i = 0; i < node1.data.length; i++)
                node2.data.push(node1.data[i]);
            for (let i = 0; i < node1.children.length; i++) {
                let childNode;
                for (let j = 0; j < node2.children.length; j++) {
                    if (node1.children[i].name === node2.children[j].name) {
                        childNode = node2.children[j];
                        break;
                    }
                }
                if (!childNode) {
                    childNode = new viewer_shared_node_tree_1.TreeNode(node1.children[i].name);
                    node2.addChild(childNode);
                }
                mergeNodes(node1.children[i], childNode);
            }
        };
        const newChild = new viewer_shared_node_tree_1.TreeNode('content_array');
        node.addChild(newChild);
        for (let i = 0; i < children.length; i++)
            mergeNodes(children[i], newChild);
    }
}
exports.OutputLoader = OutputLoader;
// #endregion Classes (1)
//# sourceMappingURL=OutputLoader.js.map

/***/ }),

/***/ 72265:
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
var _SessionData_responseDto;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class SessionData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(responseDto, id, version) {
        super(id, version);
        // #region Properties (1)
        _SessionData_responseDto.set(this, void 0);
        __classPrivateFieldSet(this, _SessionData_responseDto, responseDto, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get responseDto() {
        return __classPrivateFieldGet(this, _SessionData_responseDto, "f");
    }
    set responseDto(value) {
        __classPrivateFieldSet(this, _SessionData_responseDto, value, "f");
    }
    // #endregion Public Getters And Setters (2)
    // #region Public Methods (1)
    clone() {
        return new SessionData(this.responseDto, this.id, this.version);
    }
}
exports.SessionData = SessionData;
_SessionData_responseDto = new WeakMap();
//# sourceMappingURL=SessionData.js.map

/***/ }),

/***/ 42475:
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
var _SessionEngine_customizationBusyModes, _SessionEngine_customizationProcess, _SessionEngine_parameterHistory, _SessionEngine_parameterHistoryCall, _SessionEngine_parameterHistoryForward;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionEngine = void 0;
const viewer_settings_1 = __webpack_require__(65199);
const viewer_shared_services_1 = __webpack_require__(8389);
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
const DrawingParameter_1 = __webpack_require__(35330);
const Export_1 = __webpack_require__(40457);
const FileParameter_1 = __webpack_require__(66906);
const GumballParameter_1 = __webpack_require__(76827);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const Output_1 = __webpack_require__(774);
const OutputDelayException_1 = __webpack_require__(18592);
const OutputLoader_1 = __webpack_require__(16447);
const Parameter_1 = __webpack_require__(14036);
const SelectionParameter_1 = __webpack_require__(22967);
const SessionData_1 = __webpack_require__(72265);
const SessionTreeNode_1 = __webpack_require__(26401);
/* eslint-disable @typescript-eslint/no-empty-function */
class SessionEngine {
    // #endregion Properties (50)
    // #region Constructors (1)
    /**
     * Can be use to initialize a session with the ticket/guid and modelViewUrl and returns a scene graph node with the result.
     * Can be use to customize the session with updated parameters to get the updated scene graph node.
     */
    constructor(properties) {
        // #region Properties (50)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._exports = {};
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        this._outputs = {};
        this._outputsFreeze = {};
        this._parameterValues = {};
        this._parameters = {};
        this._performanceEvaluator = viewer_shared_services_1.PerformanceEvaluator.instance;
        this._sceneTree = viewer_shared_node_tree_1.Tree.instance;
        this._sessionEngineId = (viewer_shared_services_1.UuidGenerator.instance).create();
        this._settingsEngine = new viewer_shared_services_1.SettingsEngine();
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        _SessionEngine_customizationBusyModes.set(this, []);
        _SessionEngine_customizationProcess.set(this, void 0);
        _SessionEngine_parameterHistory.set(this, []);
        _SessionEngine_parameterHistoryCall.set(this, false);
        _SessionEngine_parameterHistoryForward.set(this, []);
        this._allowOutputLoading = true;
        this._automaticSceneUpdate = true;
        this._closeOnFailure = () => __awaiter(this, void 0, void 0, function* () { });
        this._closed = false;
        this._customizeOnParameterChange = false;
        this._dataCache = {};
        this._excludeViewports = [];
        this._headers = {
            'X-ShapeDiver-Origin': (viewer_shared_services_1.SystemInfo.instance).origin,
            'X-ShapeDiver-SessionEngineId': this._sessionEngineId,
            'X-ShapeDiver-BuildVersion': '',
            'X-ShapeDiver-BuildDate': ''
        };
        this._initialized = false;
        this._loadSdtf = false;
        this._retryCounter = 0;
        this._updateCallback = null;
        this._viewerSettingsVersion = viewer_settings_1.latestVersion;
        this._viewerSettingsVersionBackend = viewer_settings_1.latestVersion;
        this._id = properties.id;
        this._node = new viewer_shared_node_tree_1.TreeNode(properties.id);
        this._guid = properties.guid;
        this._ticket = properties.ticket;
        this._modelViewUrl = properties.modelViewUrl;
        this._excludeViewports = properties.excludeViewports || [];
        this._jwtToken = properties.jwtToken;
        this._allowOutputLoading = properties.allowOutputLoading;
        this._loadSdtf = properties.loadSdtf;
        this._modelStateId = properties.modelStateId;
        this._modelStateValidationMode = properties.modelStateValidationMode;
        this._headers['X-ShapeDiver-BuildDate'] = properties.buildDate;
        this._headers['X-ShapeDiver-BuildVersion'] = properties.buildVersion;
        this._outputLoader = new OutputLoader_1.OutputLoader(this);
        try {
            this._sdk = (0, sdk_geometry_api_sdk_v2_1.create)(this._modelViewUrl, this._jwtToken);
            this._sdk.setConfigurationValue(sdk_geometry_api_sdk_v2_1.ShapeDiverSdkConfigType.REQUEST_HEADERS, this._headers);
        }
        catch (e) {
            throw this._httpClient.convertError(e);
        }
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (28)
    get automaticSceneUpdate() {
        return this._automaticSceneUpdate;
    }
    set automaticSceneUpdate(value) {
        this._automaticSceneUpdate = value;
        value && this._closed === false ? this.addToSceneTree(this._node) : this.removeFromSceneTree(this._node);
    }
    get canUploadGLTF() {
        try {
            this.checkAvailability('gltf-upload');
            return true;
        }
        catch (e) {
            return false;
        }
    }
    get customizeOnParameterChange() {
        return this._customizeOnParameterChange;
    }
    set customizeOnParameterChange(value) {
        this._customizeOnParameterChange = value;
    }
    get excludeViewports() {
        return this._excludeViewports;
    }
    set excludeViewports(value) {
        this._excludeViewports = JSON.parse(JSON.stringify(value));
        this._node.excludeViewports = JSON.parse(JSON.stringify(value));
    }
    get exports() {
        return this._exports;
    }
    get guid() {
        return this._guid;
    }
    get id() {
        return this._id;
    }
    get initialized() {
        return this._initialized;
    }
    get jwtToken() {
        return this._jwtToken;
    }
    get loadSdtf() {
        return this._loadSdtf;
    }
    set loadSdtf(value) {
        this._loadSdtf = value;
        if (this._initialized === true && this._loadSdtf === true) {
            (() => __awaiter(this, void 0, void 0, function* () {
                this._outputLoader.reloadSdtf = true;
                yield this.updateOutputs();
                this._outputLoader.reloadSdtf = false;
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_SDTF_DELAYED_LOADED, { sessionId: this.id });
            }))();
        }
    }
    get modelState() {
        return this._modelState;
    }
    get modelViewUrl() {
        return this._modelViewUrl;
    }
    get node() {
        return this._node;
    }
    get outputs() {
        return this._outputs;
    }
    get outputsFreeze() {
        return this._outputsFreeze;
    }
    get parameterValues() {
        return this._parameterValues;
    }
    get parameters() {
        return this._parameters;
    }
    get refreshJwtToken() {
        return this._refreshJwtToken;
    }
    set refreshJwtToken(value) {
        this._refreshJwtToken = value;
    }
    get settingsEngine() {
        return this._settingsEngine;
    }
    get ticket() {
        return this._ticket;
    }
    get updateCallback() {
        return this._updateCallback;
    }
    set updateCallback(value) {
        this._updateCallback = value;
    }
    get viewerSettings() {
        return this._viewerSettings;
    }
    // #endregion Public Getters And Setters (28)
    // #region Public Methods (31)
    applySettings(response, sections) {
        sections = sections || {};
        if (sections.session === undefined) {
            sections.session = {
                parameter: { displayname: false, order: false, hidden: false },
                export: { displayname: false, order: false, hidden: false }
            };
        }
        if (sections.session.parameter === undefined)
            sections.session.parameter = { displayname: false, order: false, hidden: false, value: false };
        if (sections.session.export === undefined)
            sections.session.export = { displayname: false, order: false, hidden: false };
        if (sections.viewport === undefined)
            sections.viewport = { ar: false, scene: false, camera: false, light: false, environment: false, general: false, postprocessing: false };
        let config;
        if (response.viewer !== undefined) {
            config = response.viewer.config;
        }
        else {
            throw new viewer_shared_services_1.ShapeDiverViewerSettingsError('Session.applySettings: No config object available.');
        }
        try {
            (0, viewer_settings_1.validate)(config);
        }
        catch (e) {
            throw new viewer_shared_services_1.ShapeDiverViewerSettingsError('Session.applySettings: Was not able to validate config object.');
        }
        const settings = (0, viewer_settings_1.convert)(config, viewer_settings_1.latestVersion);
        const exportMappingUid = {};
        if (sections.session.export.displayname || sections.session.export.order || sections.session.export.hidden)
            if (response.exports)
                for (const exportId in response.exports)
                    if (response.exports[exportId].uid !== undefined)
                        exportMappingUid[response.exports[exportId].uid] = exportId;
        const currentSettings = this._settingsEngine.settings;
        // apply parameter settings
        if (sections.session.parameter.displayname || sections.session.parameter.order || sections.session.parameter.hidden || sections.session.parameter.value) {
            for (const p in this.parameters) {
                if (settings.session[p]) {
                    if (sections.session.parameter.displayname)
                        this.parameters[p].displayname = settings.session[p].displayname;
                    if (sections.session.parameter.order)
                        this.parameters[p].order = settings.session[p].order;
                    if (sections.session.parameter.hidden)
                        this.parameters[p].hidden = settings.session[p].hidden || false;
                }
                if (response.parameters && response.parameters[p] && !((this.parameters[p] instanceof FileParameter_1.FileParameter) || this.parameters[p].type.startsWith('s'))) {
                    if (sections.session.parameter.value)
                        this.parameters[p].value = response.parameters[p].defval !== undefined ? response.parameters[p].defval : this.parameters[p].value;
                }
            }
        }
        // apply export settings
        if (sections.session.export.displayname || sections.session.export.order || sections.session.export.hidden) {
            for (const p in this.exports) {
                let idForSettings = '';
                if (settings.session[p]) {
                    idForSettings = p;
                }
                else {
                    const uid = this.exports[p].uid;
                    if (!uid)
                        continue;
                    if (!exportMappingUid[uid])
                        continue;
                    idForSettings = exportMappingUid[uid];
                }
                if (settings.session[idForSettings]) {
                    if (sections.session.export.displayname)
                        this.exports[p].displayname = settings.session[idForSettings].displayname;
                    if (sections.session.export.order)
                        this.exports[p].order = settings.session[idForSettings].order;
                    if (sections.session.export.hidden)
                        this.exports[p].hidden = settings.session[idForSettings].hidden || false;
                }
            }
        }
        // apply ar settings
        if (sections.viewport.ar) {
            currentSettings.ar = settings.ar;
            currentSettings.general.transformation = settings.general.transformation;
        }
        // apply camera settings
        if (sections.viewport.camera)
            currentSettings.camera = settings.camera;
        // apply light settings
        if (sections.viewport.light)
            currentSettings.light = settings.light;
        // apply scene settings
        if (sections.viewport.scene) {
            currentSettings.environmentGeometry.gridColor = settings.environmentGeometry.gridColor;
            currentSettings.environmentGeometry.gridVisibility = settings.environmentGeometry.gridVisibility;
            currentSettings.environmentGeometry.groundPlaneColor = settings.environmentGeometry.groundPlaneColor;
            currentSettings.environmentGeometry.groundPlaneVisibility = settings.environmentGeometry.groundPlaneVisibility;
            currentSettings.environmentGeometry.groundPlaneShadowColor = settings.environmentGeometry.groundPlaneShadowColor;
            currentSettings.environmentGeometry.groundPlaneShadowVisibility = settings.environmentGeometry.groundPlaneShadowVisibility;
            currentSettings.rendering.shadows = settings.rendering.shadows;
            currentSettings.rendering.softShadows = settings.rendering.softShadows;
            currentSettings.rendering.automaticColorAdjustment = settings.rendering.automaticColorAdjustment;
            currentSettings.rendering.textureEncoding = settings.rendering.textureEncoding;
            currentSettings.rendering.outputEncoding = settings.rendering.outputEncoding;
            currentSettings.rendering.physicallyCorrectLights = settings.rendering.physicallyCorrectLights;
            currentSettings.rendering.toneMapping = settings.rendering.toneMapping;
            currentSettings.rendering.toneMappingExposure = settings.rendering.toneMappingExposure;
        }
        if (sections.viewport.general) {
            currentSettings.general.defaultMaterialColor = settings.general.defaultMaterialColor;
            currentSettings.general.commitParameters = settings.general.commitParameters;
            currentSettings.general.pointSize = settings.general.pointSize;
        }
        // apply postprocessing settings
        if (sections.viewport.postprocessing)
            currentSettings.postprocessing = settings.postprocessing;
        // apply environment settings
        if (sections.viewport.environment) {
            currentSettings.environment.clearAlpha = settings.environment.clearAlpha;
            currentSettings.environment.clearColor = settings.environment.clearColor;
            currentSettings.environment.map = settings.environment.map;
            currentSettings.environment.mapAsBackground = settings.environment.mapAsBackground;
            currentSettings.environment.rotation = settings.environment.rotation;
            currentSettings.environment.blurriness = settings.environment.blurriness;
            currentSettings.environment.intensity = settings.environment.intensity;
        }
    }
    canGoBack() {
        // the first entry is always the one from the init call
        // all additional entries can be undone
        return __classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f").length > 1;
    }
    canGoForward() {
        return __classPrivateFieldGet(this, _SessionEngine_parameterHistoryForward, "f").length > 0;
    }
    cancelCustomization() {
        if (__classPrivateFieldGet(this, _SessionEngine_customizationProcess, "f"))
            this.removeBusyMode(__classPrivateFieldGet(this, _SessionEngine_customizationProcess, "f"));
        for (const busyId of __classPrivateFieldGet(this, _SessionEngine_customizationBusyModes, "f")) {
            for (const r in this._stateEngine.viewportEngines) {
                if (this._stateEngine.viewportEngines[r] && this._stateEngine.viewportEngines[r].busy.includes(busyId))
                    this._stateEngine.viewportEngines[r].busy.splice(this._stateEngine.viewportEngines[r].busy.indexOf(busyId), 1);
            }
        }
        __classPrivateFieldSet(this, _SessionEngine_customizationBusyModes, [], "f");
        __classPrivateFieldSet(this, _SessionEngine_customizationProcess, undefined, "f");
    }
    close(retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('close');
            try {
                this._httpClient.removeDataLoading(this._sessionId);
                yield this._sdk.session.close(this._sessionId);
                if (this._automaticSceneUpdate)
                    this.removeFromSceneTree(this._node);
                this._closed = true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.close(true);
            }
        });
    }
    createModelState(parameterValues = {}, omitSessionParameterValues = false, image, data, arScene) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            try {
                const promises = [];
                // process the parameters
                const parameterSet = {};
                promises.push(this.uploadFileParameters(parameterValues).then(() => {
                    // create a set of the current validated parameter values
                    for (const parameterId in this.parameters) {
                        // if the parameter has not been set, we do not include it in the parameter set if the omitSessionParameterValues flag is set
                        if (!(omitSessionParameterValues === true && parameterValues[parameterId] === undefined)) {
                            parameterSet[parameterId] = (' ' + this.parameters[parameterId].stringify(parameterValues[parameterId])).slice(1);
                        }
                    }
                }));
                // process the image input
                let imageData;
                let imageArrayBuffer;
                if (image) {
                    promises.push(this.processImageInput(image)
                        .then(result => {
                        imageData = result === null || result === void 0 ? void 0 : result.imageData;
                        imageArrayBuffer = result === null || result === void 0 ? void 0 : result.arrayBuffer;
                    }));
                }
                // process the arScene input
                let arSceneId;
                if (arScene) {
                    promises.push(this._converter.convertToArrayBuffer(arScene)
                        .then(arSceneArrayBuffer => this._sdk.gltf.upload(this._sessionId, arSceneArrayBuffer, 'model/gltf-binary', sdk_geometry_api_sdk_v2_1.ShapeDiverRequestGltfUploadQueryConversion.SCENE))
                        .then(arSceneResponseDto => {
                        var _a;
                        arSceneId = (_a = arSceneResponseDto.gltf) === null || _a === void 0 ? void 0 : _a.sceneId;
                    }));
                }
                // wait for all promises to resolve
                yield Promise.all(promises);
                // create the model state
                const response = yield this._sdk.modelState.create(this._sessionId, {
                    parameters: parameterSet,
                    data: data,
                    image: imageData,
                    arSceneId: arSceneId
                });
                if (imageData && imageArrayBuffer)
                    yield this._sdk.utils.uploadAsset(response.asset.modelState.href, imageArrayBuffer, response.asset.modelState.headers);
                return response.modelState.id;
            }
            catch (e) {
                throw this._httpClient.convertError(e);
            }
        });
    }
    /**
     * Customizes the session with updated parameters to get the updated scene graph node.
     *
     * @param parameters the parameter set to update the session
     * @returns promise with a scene graph node
     */
    customize(force = false, waitForViewportUpdate = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = this._uuidGenerator.create();
            const customizationId = this._uuidGenerator.create();
            try {
                // we check if something changed
                if (force === false) {
                    let changes = false;
                    for (const parameterId in this.parameters)
                        if (this.parameters[parameterId].sessionValue !== this.parameters[parameterId].value)
                            changes = true;
                    if (changes === false)
                        return this.node;
                }
                const eventStart = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 0, data: { sessionId: this.id }, status: 'Customizing session' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
                const oldNode = this.node;
                __classPrivateFieldSet(this, _SessionEngine_customizationProcess, customizationId, "f");
                this._logger.debugLow(`Session(${this.id}).customize: Customizing session.`);
                this.addBusyMode(customizationId);
                const eventFileUpload = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 0.1, data: { sessionId: this.id }, status: 'Uploading file parameters' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventFileUpload);
                // upload file parameters
                yield this.uploadFileParameters();
                // OPTION TO SKIP - PART 1b
                const cancelResult = this.cancelProcess(customizationId, eventId, viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, 1, { sessionId: this.id });
                if (cancelResult)
                    return cancelResult;
                const parameterSet = {};
                // create a set of the current validated parameter values
                for (const parameterId in this.parameters) {
                    parameterSet[parameterId] = {
                        value: this.parameters[parameterId].value,
                        valueString: this.parameters[parameterId].stringify()
                    };
                }
                // update the session engine parameter values if everything succeeded
                for (const parameterId in this.parameters)
                    this.parameterValues[parameterId] = parameterSet[parameterId].valueString;
                this._logger.info(`Session(${this.id}).customize: Customizing session with parameters ${JSON.stringify(this.parameterValues)}.`);
                const eventRequest = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 0.1, data: { sessionId: this.id }, status: 'Sending customization request' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventRequest);
                const oldOutputVersions = this._outputLoader.getCurrentOutputVersions();
                const newNode = yield this.customizeInternal(() => __classPrivateFieldGet(this, _SessionEngine_customizationProcess, "f") !== customizationId, {
                    eventId,
                    type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION,
                    progressRange: {
                        min: 0.1,
                        max: 0.9
                    },
                    data: { sessionId: this.id }
                });
                // OPTION TO SKIP - PART 2
                const cancelResult2 = this.cancelProcess(customizationId, eventId, viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, 1, { sessionId: this.id });
                if (cancelResult2)
                    return cancelResult2;
                const newOutputVersions = this._outputLoader.getCurrentOutputVersions();
                const eventSceneUpdate = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 0.9, data: { sessionId: this.id }, status: 'Updating scene' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventSceneUpdate);
                // call the update callbacks
                if (waitForViewportUpdate === false) {
                    for (const outputId in this.outputs) {
                        if (oldOutputVersions[outputId] !== newOutputVersions[outputId]) {
                            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.OUTPUT.OUTPUT_UPDATED, {
                                outputId: outputId,
                                outputVersion: newOutputVersions[outputId],
                                newNode: newNode.children.find(c => c.name === outputId),
                                oldNode: oldNode.children.find(c => c.name === outputId)
                            });
                        }
                    }
                    yield this.waitForUpdateCallbacks(newOutputVersions, oldOutputVersions, newNode, oldNode);
                    const cancelResult = this.cancelProcess(customizationId, eventId, viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, 1, { sessionId: this.id });
                    if (cancelResult)
                        return cancelResult;
                }
                // if this is not a call by the goBack or goForward functions, add the parameter values to the history and delete the forward history
                if (!__classPrivateFieldGet(this, _SessionEngine_parameterHistoryCall, "f")) {
                    __classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f").push(parameterSet);
                    __classPrivateFieldSet(this, _SessionEngine_parameterHistoryForward, [], "f");
                }
                if (this.automaticSceneUpdate)
                    this.removeFromSceneTree(this.node);
                this._node = newNode;
                if (this.automaticSceneUpdate && this._closed === false)
                    this.addToSceneTree(this.node);
                this._logger.debug(`Session(${this.id}).customize: Customization request finished, updating geometry.`);
                // set the session values to the current ones in all parameters
                for (const parameterId in this.parameters)
                    this.parameters[parameterId].sessionValue = parameterSet[parameterId].value;
                // set the output content to what has been updated
                for (const outputId in this.outputs)
                    this.outputs[outputId].updateOutput(newNode.children.find(c => c.name === outputId), oldNode.children.find(c => c.name === outputId));
                // set the export definitions
                for (const exportId in this.exports)
                    this.exports[exportId].updateExport();
                this._warningCreator();
                this.node.excludeViewports = JSON.parse(JSON.stringify(this._excludeViewports));
                this.removeBusyMode(customizationId);
                this._logger.debug(`Session(${this.id}).customize: Session customized.`);
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_CUSTOMIZED, { sessionId: this.id });
                const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 1, data: { sessionId: this.id }, status: 'Session customized' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
                // update the viewports
                if (waitForViewportUpdate) {
                    for (const r in this._stateEngine.viewportEngines)
                        if (this._stateEngine.viewportEngines[r] && !this.excludeViewports.includes(this._stateEngine.viewportEngines[r].id))
                            this._stateEngine.viewportEngines[r].update(`SessionEngine(${this.id}).customize`);
                    for (const outputId in this.outputs) {
                        if (oldOutputVersions[outputId] !== newOutputVersions[outputId]) {
                            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.OUTPUT.OUTPUT_UPDATED, {
                                outputId: outputId,
                                outputVersion: newOutputVersions[outputId],
                                newNode: newNode.children.find(c => c.name === outputId),
                                oldNode: oldNode.children.find(c => c.name === outputId)
                            });
                        }
                    }
                    // call the update callbacks
                    yield this.waitForUpdateCallbacks(newOutputVersions, oldOutputVersions, newNode, oldNode);
                    const cancelResult = this.cancelProcess(customizationId, eventId, viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, 1, { sessionId: this.id });
                    if (cancelResult)
                        return cancelResult;
                }
                if (!waitForViewportUpdate) {
                    setTimeout(() => {
                        for (const r in this._stateEngine.viewportEngines)
                            if (this._stateEngine.viewportEngines[r] && !this.excludeViewports.includes(this._stateEngine.viewportEngines[r].id))
                                this._stateEngine.viewportEngines[r].update(`SessionEngine(${this.id}).customize`);
                    }, 0);
                }
                return this.node;
            }
            catch (e) {
                const eventCancel = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 1, data: { sessionId: this.id }, status: 'Session customization failed' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, eventCancel);
                this.removeBusyMode(customizationId);
                throw this._httpClient.convertError(e);
            }
        });
    }
    customizeParallel(parameterValues, loadOutputs = true) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = this._uuidGenerator.create();
            const eventStart = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 0, data: { sessionId: this.id }, status: 'Customizing session' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
            // upload file parameters
            yield this.uploadFileParameters(parameterValues);
            const parameterSet = {};
            // create a set of the current validated parameter values
            for (const parameterId in this.parameters)
                parameterSet[parameterId] = (' ' + this.parameters[parameterId].stringify(parameterValues[parameterId])).slice(1);
            const result = yield this.customizeSession(parameterSet, () => false, {
                eventId,
                type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION,
                progressRange: {
                    min: 0.0,
                    max: 1
                },
                data: { sessionId: this.id }
            }, true, loadOutputs);
            if (result instanceof SessionTreeNode_1.SessionTreeNode)
                result.excludeViewports = JSON.parse(JSON.stringify(this._excludeViewports));
            const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 1, data: { sessionId: this.id }, status: 'Session customized' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
            return result;
        });
    }
    customizeWithModelState(modelState) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            try {
                // get the model state if it is not already a response
                let response;
                if (typeof modelState === 'string') {
                    response = yield this._sdk.modelState.get(modelState);
                }
                else {
                    response = modelState;
                }
                if (!response.modelState)
                    return new viewer_shared_node_tree_1.TreeNode();
                // read out the parameter values from the model state
                for (const parameterId in response.modelState.parameters)
                    this.parameters[parameterId].value = response.modelState.parameters[parameterId];
                return this.customize();
            }
            catch (e) {
                throw this._httpClient.convertError(e);
            }
        });
    }
    getFileInfo(parameterId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            try {
                return yield this._sdk.file.info(this._sessionId, parameterId, fileId);
            }
            catch (e) {
                throw this._httpClient.convertError(e);
            }
        });
    }
    goBack() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.canGoBack()) {
                this._logger.debug(`Session(${this.id}).goBack: Cannot go further back.`);
                return new viewer_shared_node_tree_1.TreeNode();
            }
            // get the current parameter set and store it in the forward history later on
            const currentParameterSet = __classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f").pop();
            // adjust the parameters according to the last parameter set
            const lastParameterSet = __classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f")[__classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f").length - 1];
            for (const parameterId in lastParameterSet)
                this.parameters[parameterId].value = lastParameterSet[parameterId].value;
            // call the customization function with the parameterHistoryCall value set to true
            __classPrivateFieldSet(this, _SessionEngine_parameterHistoryCall, true, "f");
            const node = yield this.customize();
            __classPrivateFieldSet(this, _SessionEngine_parameterHistoryCall, false, "f");
            // add the current (not anymore current) parameter set to the forward history
            __classPrivateFieldGet(this, _SessionEngine_parameterHistoryForward, "f").push(currentParameterSet);
            return node;
        });
    }
    goForward() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.canGoForward()) {
                this._logger.debug(`Session(${this.id}).goForward: Cannot go further forward.`);
                return new viewer_shared_node_tree_1.TreeNode();
            }
            // get the last undone parameter set and apply the values to the parameters
            const lastParameterSet = __classPrivateFieldGet(this, _SessionEngine_parameterHistoryForward, "f").pop();
            for (const parameterId in lastParameterSet)
                this.parameters[parameterId].value = lastParameterSet[parameterId].value;
            // call the customization function with the parameterHistoryCall value set to true
            __classPrivateFieldSet(this, _SessionEngine_parameterHistoryCall, true, "f");
            const node = yield this.customize();
            __classPrivateFieldSet(this, _SessionEngine_parameterHistoryCall, false, "f");
            // add the current parameter set to the history
            __classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f").push(lastParameterSet);
            return node;
        });
    }
    /**
     * Initializes the session with the ticket and modelViewUrl.
     *
     * @returns promise with a scene graph node
     */
    init(parameterValues, retry = false) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (this._initialized === true)
                throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.init: Session already initialized.');
            try {
                this._performanceEvaluator.startSection('sessionResponse');
                const parameterSet = {};
                // the slice here is done as a way for deep copying the string values
                for (const parameterNameOrId in parameterValues)
                    parameterSet[parameterNameOrId] = (' ' + parameterValues[parameterNameOrId]).slice(1);
                if (this._ticket) {
                    this._responseDto = yield this._sdk.session.init(this._ticket, parameterSet, this._modelStateId, this._modelStateValidationMode);
                }
                else if (this._guid) {
                    this._responseDto = yield this._sdk.session.initForModel(this._guid, parameterSet, this._modelStateId, this._modelStateValidationMode);
                }
                else {
                    // we should never get here
                    throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.init: Initialization of session failed. Neither a ticket nor a guid are available.');
                }
                this._performanceEvaluator.endSection('sessionResponse');
                this._viewerSettings = (_a = this._responseDto.viewer) === null || _a === void 0 ? void 0 : _a.config;
                this._viewerSettingsVersionBackend = this._responseDto.viewerSettingsVersion || viewer_settings_1.latestVersion;
                this._sessionId = this._responseDto.sessionId;
                this._modelId = (_b = this._responseDto.model) === null || _b === void 0 ? void 0 : _b.id;
                this._modelState = this._responseDto.modelState;
                this._httpClient.addDataLoading(this._sessionId, {
                    getAsset: this._sdk.asset.getAsset.bind(this._sdk.asset),
                    downloadTexture: this._sdk.asset.downloadImage.bind(this._sdk.asset),
                });
                this._settingsEngine.loadSettings(this._viewerSettings);
                if (!this._sessionId)
                    throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.init: Initialization of session failed. ResponseDto did not have a sessionId.');
                if (!this._modelId)
                    throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.init: Initialization of session failed. ResponseDto did not have a model.id.');
                this.updateResponseDto(this._responseDto, parameterSet);
                this._initialized = true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.init(parameterValues, true);
            }
        });
    }
    loadCachedOutputsParallel(outputMapping, taskEventInfo, retry = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            // if there is already task event info, use it
            // this happens after a retry
            const eventId = taskEventInfo ? taskEventInfo.eventId : this._uuidGenerator.create();
            const eventType = taskEventInfo ? taskEventInfo.type : viewer_shared_types_1.TASK_TYPE.SESSION_OUTPUTS_LOADING;
            const eventData = taskEventInfo ? taskEventInfo.data : { sessionId: this.id };
            taskEventInfo = taskEventInfo ? taskEventInfo : {
                eventId,
                type: eventType,
                progressRange: {
                    min: 0,
                    max: 1
                },
                data: eventData
            };
            try {
                // send start event if this function was called initially
                if (!taskEventInfo) {
                    const eventStart = { type: eventType, id: eventId, progress: 0, data: eventData, status: 'Loading cached outputs' };
                    this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
                }
                // get the cached outputs
                const responseDto = yield this._sdk.output.getCache(this._sessionId, outputMapping);
                // create atomic output api objects for them
                const outputs = {};
                for (const outputId in responseDto.outputs) {
                    responseDto.outputs[outputId].id = outputId;
                    outputs[outputId] = new Output_1.Output(responseDto.outputs[outputId], this);
                }
                // process the output data
                const node = yield this._outputLoader.loadOutputs(((_a = this._responseDto.model) === null || _a === void 0 ? void 0 : _a.name) || 'model', outputs, {}, taskEventInfo, false);
                // send the end event once done
                const eventEnd = { type: eventType, id: eventId, progress: 1, data: eventData, status: 'Loaded cached outputs' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
                // create a mapping with a dictionary for the id of the outputs
                const outputNodeMapping = {};
                for (const outputId in outputMapping)
                    outputNodeMapping[outputId] = node.children.find(n => n.name === outputId);
                return outputNodeMapping;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.loadCachedOutputsParallel(outputMapping, taskEventInfo, true);
            }
        });
    }
    /**
     * Load the outputs and return the scene graph node of the result.
     * In case the outputs have a delay property, another customization request with the parameter set is sent.
     *
     * @param parameters the parameter set to update the session
     * @param outputs the outputs to load
     * @returns promise with a scene graph node
     */
    loadOutputs(cancelRequest = () => false, taskEventInfo, retry = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            const o = Object.assign({}, this._outputs);
            const of = Object.assign({}, this._outputsFreeze);
            try {
                const node = yield this._outputLoader.loadOutputs(((_a = this._responseDto.model) === null || _a === void 0 ? void 0 : _a.name) || 'model', o, of, taskEventInfo);
                node.data.push(new SessionData_1.SessionData(this._responseDto));
                if (cancelRequest())
                    return node;
                node.excludeViewports = JSON.parse(JSON.stringify(this._excludeViewports));
                return node;
            }
            catch (e) {
                if (e instanceof OutputDelayException_1.OutputDelayException) {
                    yield this.timeout(e.delay);
                }
                else {
                    yield this.handleError(e, retry);
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    return yield this.loadOutputs(cancelRequest, taskEventInfo, true);
                }
                if (cancelRequest())
                    return new SessionTreeNode_1.SessionTreeNode();
                const outputMapping = {};
                for (const output in o)
                    outputMapping[output] = o[output].version;
                try {
                    const responseDto = yield this._sdk.output.getCache(this._sessionId, outputMapping);
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    this.updateResponseDto(responseDto);
                    return yield this.loadOutputs(cancelRequest, taskEventInfo);
                }
                catch (e) {
                    yield this.handleError(e, retry);
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    return yield this.loadOutputs(cancelRequest, taskEventInfo, true);
                }
            }
        });
    }
    /**
     * Load the outputs and return the scene graph node of the result.
     * In case the outputs have a delay property, another customization request with the parameter set is sent.
     *
     * @param parameters the parameter set to update the session
     * @param outputs the outputs to load
     * @returns promise with a scene graph node
     */
    loadOutputsParallel(responseDto, cancelRequest = () => false, taskEventInfo, retry = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            const outputs = {};
            const outputsFreeze = {};
            for (const outputId in responseDto.outputs) {
                responseDto.outputs[outputId].id = outputId;
                if (this.outputsFreeze[outputId] === undefined)
                    outputsFreeze[outputId] = false;
                outputs[outputId] = new Output_1.Output(responseDto.outputs[outputId], this);
            }
            try {
                const node = yield this._outputLoader.loadOutputs(((_a = this._responseDto.model) === null || _a === void 0 ? void 0 : _a.name) || 'model', outputs, outputsFreeze, taskEventInfo);
                node.data.push(new SessionData_1.SessionData(responseDto));
                return node;
            }
            catch (e) {
                if (e instanceof OutputDelayException_1.OutputDelayException) {
                    yield this.timeout(e.delay);
                }
                else {
                    yield this.handleError(e, retry);
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    return yield this.loadOutputsParallel(responseDto, cancelRequest, taskEventInfo, true);
                }
                if (cancelRequest())
                    return new SessionTreeNode_1.SessionTreeNode();
                const outputMapping = {};
                for (const output in outputs)
                    outputMapping[output] = outputs[output].version;
                try {
                    const responseDto = yield this._sdk.output.getCache(this._sessionId, outputMapping);
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    this.updateResponseDto(responseDto);
                    return yield this.loadOutputsParallel(responseDto, cancelRequest, taskEventInfo);
                }
                catch (e) {
                    yield this.handleError(e, retry);
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    return yield this.loadOutputsParallel(responseDto, cancelRequest, taskEventInfo, true);
                }
            }
        });
    }
    requestExport(exportId, parameters, maxWaitTime, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('export');
            try {
                yield this.uploadFileParameters(parameters);
                const requestParameterSet = this.cleanExportParameters(parameters);
                const responseDto = yield this._sdk.utils.submitAndWaitForExport(this._sdk, this._sessionId, { exports: { id: exportId }, parameters: requestParameterSet }, maxWaitTime);
                this.updateResponseDto(responseDto);
                return this.exports[exportId];
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.requestExport(exportId, parameters, maxWaitTime, true);
            }
        });
    }
    requestExports(body, loadOutputs = false, maxWaitMsec, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            let processId;
            this.checkAvailability('export');
            try {
                // activate the busy mode if outputs are loaded
                if (loadOutputs === true && this._allowOutputLoading === true &&
                    body.outputs && Object.keys(body.outputs).length > 0) {
                    processId = this._uuidGenerator.create();
                    this.addBusyMode(processId);
                }
                yield this.uploadFileParameters(body.parameters);
                const requestParameterSet = this.cleanExportParameters(body.parameters);
                const responseDto = yield this._sdk.utils.submitAndWaitForExport(this._sdk, this._sessionId, { exports: body.exports, parameters: requestParameterSet, outputs: body.outputs, max_wait_time: body.max_wait_time }, maxWaitMsec);
                this.updateResponseDto(responseDto);
                if (loadOutputs === true && this._allowOutputLoading === true)
                    this.updateOutputs();
                if (processId)
                    this.removeBusyMode(processId);
                return responseDto;
            }
            catch (e) {
                if (processId)
                    this.removeBusyMode(processId);
                yield this.handleError(e, retry);
                return yield this.requestExports(body, loadOutputs, maxWaitMsec, true);
            }
        });
    }
    resetSettings(sections) {
        if (!this._responseDto)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.resetSettings: responseDto not available.');
        sections = sections || {};
        if (sections.session === undefined) {
            sections.session = {
                parameter: { displayname: true, order: true, hidden: true },
                export: { displayname: true, order: true, hidden: true }
            };
        }
        if (sections.session.parameter === undefined)
            sections.session.parameter = { displayname: true, order: true, hidden: true, value: true };
        if (sections.session.export === undefined)
            sections.session.export = { displayname: true, order: true, hidden: true };
        if (sections.viewport === undefined)
            sections.viewport = { ar: true, scene: true, camera: true, light: true, environment: true, general: true, postprocessing: true };
        return this.applySettings(this._responseDto, sections);
    }
    saveDefaultParameterValues() {
        return __awaiter(this, void 0, void 0, function* () {
            this._logger.debugLow(`Session(${this.id}).saveDefaultParameters: Saving default parameters.`);
            const response = yield this.saveDefaultParameters();
            if (response) {
                this._logger.debug(`Session(${this.id}).saveDefaultParameters: Saved default parameters.`);
            }
            else {
                throw new viewer_shared_services_1.ShapeDiverViewerSessionError(`Session(${this.id}).saveDefaultParameters: Could not save default parameters.`);
            }
            return response;
        });
    }
    saveDefaultParameters(retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('defaultparam', true);
            try {
                yield this._sdk.model.setDefaultParams(this._modelId, this._parameterValues);
                return true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.saveDefaultParameters(true);
            }
        });
    }
    /**
     * Save the export properties for displayname, order, tooltip and hidden
     *
     * @param exports
     * @returns
     */
    saveExportProperties(exports, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('export-definition', true);
            try {
                yield this._sdk.export.updateDefinitions(this._modelId, exports);
                return true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.saveExportProperties(exports, true);
            }
        });
    }
    /**
     * Save the output properties for displayname, order, tooltip and hidden
     *
     * @param outputs
     * @returns
     */
    saveOutputProperties(outputs, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('output-definition', true);
            try {
                yield this._sdk.output.updateDefinitions(this._modelId, outputs);
                return true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.saveOutputProperties(outputs, true);
            }
        });
    }
    /**
     * Save the parameter properties for displayname, order, tooltip and hidden
     *
     * @param parameters
     * @returns
     */
    saveParameterProperties(parameters, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('parameter-definition', true);
            try {
                yield this._sdk.model.updateParameterDefinitions(this._modelId, parameters);
                return true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.saveParameterProperties(parameters, true);
            }
        });
    }
    saveSettings(json, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('configure', true);
            try {
                (0, viewer_settings_1.validate)(json, this._viewerSettingsVersion);
                // if viewer settings version is higher than backend settings version
                // convert to backend settings version
                if (+this._viewerSettingsVersion > +this._viewerSettingsVersionBackend)
                    json = (0, viewer_settings_1.convert)(json, this._viewerSettingsVersionBackend);
            }
            catch (e) {
                throw new viewer_shared_services_1.ShapeDiverViewerSettingsError('Session.saveSettings: Settings could not be validated. ' + e.message, e);
            }
            try {
                yield this._sdk.model.updateConfig(this._modelId, json);
                return true;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.saveSettings(json, true);
            }
        });
    }
    saveUiProperties(saveInSettings = true) {
        return __awaiter(this, void 0, void 0, function* () {
            this._logger.debugLow(`Session(${this.id}).saveSessionProperties: Saving session properties.`);
            // settings saving 
            this._saveSessionSettings();
            let properties = {};
            for (const p in this.parameters) {
                properties[p] = {
                    displayname: this.parameters[p].displayname !== undefined ? this.parameters[p].displayname : '',
                    hidden: this.parameters[p].hidden !== undefined ? this.parameters[p].hidden : false,
                    order: this.parameters[p].order !== undefined ? this.parameters[p].order : 0,
                    tooltip: this.parameters[p].tooltip !== undefined ? this.parameters[p].tooltip : '',
                };
            }
            const responseP = Object.values(properties).length !== 0 ? yield this.saveParameterProperties(properties) : true;
            properties = {};
            for (const e in this.exports) {
                properties[e] = {
                    displayname: this.exports[e].displayname !== undefined ? this.exports[e].displayname : '',
                    hidden: this.exports[e].hidden !== undefined ? this.exports[e].hidden : false,
                    order: this.exports[e].order !== undefined ? this.exports[e].order : 0,
                    tooltip: this.exports[e].tooltip !== undefined ? this.exports[e].tooltip : '',
                };
            }
            const responseE = Object.values(properties).length !== 0 ? yield this.saveExportProperties(properties) : true;
            properties = {};
            for (const o in this.outputs) {
                properties[o] = {
                    displayname: this.outputs[o].displayname !== undefined ? this.outputs[o].displayname : '',
                    hidden: this.outputs[o].hidden !== undefined ? this.outputs[o].hidden : false,
                    order: this.outputs[o].order !== undefined ? this.outputs[o].order : 0,
                    tooltip: this.outputs[o].tooltip !== undefined ? this.outputs[o].tooltip : '',
                };
            }
            const responseO = Object.values(properties).length !== 0 ? yield this.saveOutputProperties(properties) : true;
            // save partial settings
            const response = saveInSettings ? yield this.saveSettings(this._settingsEngine.settings) : true;
            if (response && responseP && responseO && responseE) {
                this._logger.debug(`Session(${this.id}).saveSessionProperties: Saved session properties.`);
            }
            else {
                this._logger.warn(`Session(${this.id}).saveSessionProperties: Could not save session properties.`);
            }
            return response && responseP && responseO && responseE;
        });
    }
    setJwtToken(value) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability();
            this._jwtToken = value;
            try {
                this._sdk.setConfigurationValue(sdk_geometry_api_sdk_v2_1.ShapeDiverSdkConfigType.JWT_TOKEN, value);
                const responseDto = yield this._sdk.session.default(this._sessionId);
                if (this._responseDto)
                    this._responseDto.actions = responseDto.actions;
            }
            catch (e) {
                throw this._httpClient.convertError(e);
            }
        });
    }
    updateOutputs(taskEventInfo, waitForViewportUpdate = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = taskEventInfo ? taskEventInfo.eventId : this._uuidGenerator.create();
            const eventType = taskEventInfo ? taskEventInfo.type : viewer_shared_types_1.TASK_TYPE.SESSION_OUTPUTS_UPDATE;
            const eventData = taskEventInfo ? taskEventInfo.data : { sessionId: this.id };
            if (!taskEventInfo) {
                const eventStart = { type: eventType, id: eventId, progress: 0, data: eventData, status: 'Updating outputs' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
            }
            const customizationId = this._uuidGenerator.create();
            const oldNode = this.node;
            __classPrivateFieldSet(this, _SessionEngine_customizationProcess, customizationId, "f");
            this._logger.debugLow(`Session(${this.id}).updateOutputs: Updating Outputs.`);
            this.addBusyMode(customizationId);
            const eventRequest = { type: eventType, id: eventId, progress: taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 0.1 + taskEventInfo.progressRange.min : 0.1, data: eventData, status: 'Loading outputs' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventRequest);
            const oldOutputVersions = this._outputLoader.getCurrentOutputVersions();
            const newNode = yield this.loadOutputs(() => __classPrivateFieldGet(this, _SessionEngine_customizationProcess, "f") !== customizationId, {
                eventId,
                type: eventType,
                progressRange: {
                    min: taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 0.1 + taskEventInfo.progressRange.min : 0.1,
                    max: taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 0.9 + taskEventInfo.progressRange.min : 0.9
                },
                data: eventData
            });
            const newOutputVersions = this._outputLoader.getCurrentOutputVersions();
            const eventSceneUpdate = { type: eventType, id: eventId, progress: taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 0.9 + taskEventInfo.progressRange.min : 0.9, data: eventData, status: 'Updating scene' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventSceneUpdate);
            // OPTION TO SKIP - PART 1
            const cancelResult = this.cancelProcess(customizationId, eventId, eventType, taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 1 + taskEventInfo.progressRange.min : 1, eventData, newNode);
            if (cancelResult)
                return cancelResult;
            // call the update callbacks
            if (waitForViewportUpdate === false) {
                for (const outputId in this.outputs) {
                    if (oldOutputVersions[outputId] !== newOutputVersions[outputId]) {
                        this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.OUTPUT.OUTPUT_UPDATED, {
                            outputId: outputId,
                            outputVersion: newOutputVersions[outputId],
                            newNode: newNode.children.find(c => c.name === outputId),
                            oldNode: oldNode.children.find(c => c.name === outputId)
                        });
                    }
                }
                yield this.waitForUpdateCallbacks(newOutputVersions, oldOutputVersions, newNode, oldNode);
                // OPTION TO SKIP - PART 2
                const cancelResult = this.cancelProcess(customizationId, eventId, eventType, taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 1 + taskEventInfo.progressRange.min : 1, eventData, newNode);
                if (cancelResult)
                    return cancelResult;
            }
            if (this.automaticSceneUpdate)
                this.removeFromSceneTree(this.node);
            this._node = newNode;
            if (this.automaticSceneUpdate && this._closed === false)
                this.addToSceneTree(this.node);
            this._logger.debug(`Session(${this.id}).updateOutputs: Updating outputs finished, updating geometry.`);
            // set the output content to what has been updated
            for (const outputId in this.outputs) {
                this.outputs[outputId].updateOutput(newNode.children.find(c => c.name === outputId), oldNode.children.find(c => c.name === outputId));
            }
            // set the export definitions
            for (const exportId in this.exports)
                this.exports[exportId].updateExport();
            this._warningCreator();
            this.node.excludeViewports = JSON.parse(JSON.stringify(this._excludeViewports));
            this.removeBusyMode(customizationId);
            this._logger.debug(`Session(${this.id}).updateOutputs: Updated outputs.`);
            if (!taskEventInfo) {
                const eventEnd = { type: eventType, id: eventId, progress: 1, data: eventData, status: 'Outputs updated' };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
            }
            // update the viewports
            if (waitForViewportUpdate) {
                for (const r in this._stateEngine.viewportEngines)
                    if (this._stateEngine.viewportEngines[r] && !this.excludeViewports.includes(this._stateEngine.viewportEngines[r].id))
                        this._stateEngine.viewportEngines[r].update(`SessionEngine(${this.id}).updateOutputs`);
                for (const outputId in this.outputs) {
                    if (oldOutputVersions[outputId] !== newOutputVersions[outputId]) {
                        this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.OUTPUT.OUTPUT_UPDATED, {
                            outputId: outputId,
                            outputVersion: newOutputVersions[outputId],
                            newNode: newNode.children.find(c => c.name === outputId),
                            oldNode: oldNode.children.find(c => c.name === outputId)
                        });
                    }
                }
                yield this.waitForUpdateCallbacks(newOutputVersions, oldOutputVersions, newNode, oldNode);
                // OPTION TO SKIP - PART 3
                const cancelResult = this.cancelProcess(customizationId, eventId, eventType, taskEventInfo ? (taskEventInfo.progressRange.max - taskEventInfo.progressRange.min) * 1 + taskEventInfo.progressRange.min : 1, eventData, newNode);
                if (cancelResult)
                    return cancelResult;
            }
            return this.node;
        });
    }
    uploadFile(parameterId, data, type, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('file-upload');
            try {
                const result = yield this._sdk.file.requestUpload(this._sessionId, {
                    [parameterId]: {
                        size: data.size,
                        format: type,
                        filename: data.name === '' ? undefined : data.name
                    }
                });
                if (result && result.asset && result.asset.file && result.asset.file[parameterId]) {
                    const fileAsset = result.asset.file[parameterId];
                    yield this._sdk.utils.uploadAsset(fileAsset.href, yield data.arrayBuffer(), fileAsset.headers);
                    return fileAsset.id;
                }
                else {
                    throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.uploadFile: Upload reply has not the required format.');
                }
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.uploadFile(parameterId, data, type, true);
            }
        });
    }
    /**
     * Uploads all file parameters and returns the file parameter values.
     * If parameterValues is provided, the file parameter values are added to it.
     *
     * @param parameterValues
     * @returns
     */
    uploadFileParameters(parameterValues) {
        return __awaiter(this, void 0, void 0, function* () {
            const parameterValueSet = parameterValues !== undefined ? this.getFileParameterSet(parameterValues) : undefined;
            const fileParameterValues = {};
            // load file parameter first
            for (const parameterId in this.parameters) {
                if (this.parameters[parameterId] instanceof FileParameter_1.FileParameter) {
                    fileParameterValues[parameterId] = yield this.parameters[parameterId].upload(parameterValueSet ? parameterValueSet[parameterId] : undefined);
                    if (parameterValues) {
                        parameterValues[parameterId] = fileParameterValues[parameterId];
                        // if the parameter value of the file parameter was used, set the value to the parameter
                        if (parameterValues[parameterId] === undefined && this.parameters[parameterId].value !== fileParameterValues[parameterId])
                            this.parameters[parameterId].value = fileParameterValues[parameterId];
                    }
                    else if (this.parameters[parameterId].value !== fileParameterValues[parameterId]) {
                        this.parameters[parameterId].value = fileParameterValues[parameterId];
                    }
                }
            }
            return fileParameterValues;
        });
    }
    uploadGLTF(blob, conversion = sdk_geometry_api_sdk_v2_1.ShapeDiverRequestGltfUploadQueryConversion.NONE, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('gltf-upload');
            try {
                const responseDto = yield this._sdk.gltf.upload(this._sessionId, yield blob.arrayBuffer(), 'model/gltf-binary', conversion);
                if (!responseDto || !responseDto.gltf || !responseDto.gltf.href)
                    throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.uploadGLTF: Upload reply has not the required format.');
                return responseDto;
            }
            catch (e) {
                yield this.handleError(e, retry);
                return yield this.uploadGLTF(blob, conversion, true);
            }
        });
    }
    // #endregion Public Methods (31)
    // #region Private Methods (18)
    _saveSessionSettings() {
        const parameters = this.parameters;
        const exports = this.exports;
        const sessionProperties = {};
        for (const p in parameters) {
            sessionProperties[p] = {
                order: parameters[p].order || 0,
                displayname: parameters[p].displayname || '',
                hidden: parameters[p].hidden
            };
        }
        for (const e in exports) {
            sessionProperties[e] = {
                order: exports[e].order || 0,
                displayname: exports[e].displayname || '',
                hidden: exports[e].hidden
            };
        }
        this._settingsEngine.session = sessionProperties;
    }
    _warningCreator() {
        // set the output content to what has been updated
        for (const outputId in this.outputs) {
            let warning = '';
            if (this.outputs[outputId].msg)
                warning += `\n\t- ${this.outputs[outputId].msg}`;
            if (this.outputs[outputId].status_collect && this.outputs[outputId].status_collect !== sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus.SUCCESS)
                warning += `\n\t- status_collect is ${this.outputs[outputId].status_collect}`;
            if (this.outputs[outputId].status_computation && this.outputs[outputId].status_computation !== sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus.SUCCESS)
                warning += `\n\t- status_computation is ${this.outputs[outputId].status_computation}`;
            if (warning)
                this._logger.warn(`\nOutput(${outputId}):${warning}`);
        }
        // set the export definitions
        for (const exportId in this.exports) {
            let warning = '';
            if (this.exports[exportId].msg)
                warning += `\n\t- ${this.exports[exportId].msg}`;
            if (this.exports[exportId].status_collect && this.exports[exportId].status_collect !== sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus.SUCCESS)
                warning += `\n\t- status_collect is ${this.exports[exportId].status_collect}`;
            if (this.exports[exportId].status_computation && this.exports[exportId].status_computation !== sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus.SUCCESS)
                warning += `\n\t- status_computation is ${this.exports[exportId].status_computation}`;
            if (warning)
                this._logger.warn(`\nExport(${exportId}):${warning}`);
        }
    }
    addBusyMode(busyId) {
        for (const r in this._stateEngine.viewportEngines) {
            if (this._stateEngine.viewportEngines[r] && !this.excludeViewports.includes(r)) {
                this._stateEngine.viewportEngines[r].busy.push(busyId);
                __classPrivateFieldGet(this, _SessionEngine_customizationBusyModes, "f").push(busyId);
            }
        }
    }
    addToSceneTree(node) {
        this._sceneTree.addNode(node);
        this._sceneTree.root.updateVersion();
    }
    cancelProcess(customizationId, eventId, eventType, eventProgress, eventData, newNode = new SessionTreeNode_1.SessionTreeNode()) {
        if (__classPrivateFieldGet(this, _SessionEngine_customizationProcess, "f") !== customizationId) {
            this.removeBusyMode(customizationId);
            const eventCancel = {
                type: eventType,
                id: eventId,
                progress: eventProgress,
                data: eventData,
                status: 'The request was exceeded by another customization request'
            };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, eventCancel);
            this._logger.debug(`Session(${this.id}).cancelProcess: The request was was exceeded by another request.`);
            return newNode;
        }
        else if (this._closed === true) {
            this.removeBusyMode(customizationId);
            this._logger.debug(`Session(${this.id}).cancelProcess: The session was closed during the request.`);
            const eventCancel = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CUSTOMIZATION, id: eventId, progress: 1, data: { sessionId: this.id }, status: 'The session was closed during the request.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, eventCancel);
            return new SessionTreeNode_1.SessionTreeNode();
        }
    }
    checkAvailability(action, checkForModelId = false) {
        var _a;
        if (!this._responseDto)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.checkAvailability: responseDto not available.');
        if (!this._sessionId)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.checkAvailability: sessionId not available.');
        if (checkForModelId && !this._modelId)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.checkAvailability: modelId not available.');
        if (action && !this._responseDto.actions)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session.checkAvailability: actions not available.');
        const responseDtoAction = (_a = this._responseDto.actions) === null || _a === void 0 ? void 0 : _a.find(a => a.name === action);
        if (action && !responseDtoAction)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError(`Session.checkAvailability: action ${action} not available.`);
    }
    cleanExportParameters(parameters) {
        const requestParameterSet = {};
        // first step, we convert all our names and displaynames to ids
        for (const parameterIdOrName in parameters) {
            // we prioritize id, then name and then displayname
            // if there are two parameters with the same name or displayname, we take the one that is found first (no way for us to evaluate which one the user meant)
            const parameterObject = Object.values(this._parameters).find(p => p.id === parameterIdOrName || p.name === parameterIdOrName || p.displayname === parameterIdOrName);
            // in case the key of the key value pair was neither the id, name or displayname, skip
            if (!parameterObject)
                continue;
            // copy into new dictionary
            requestParameterSet[parameterObject.id] = (' ' + parameterObject.stringify(parameters[parameterIdOrName])).slice(1);
        }
        // seconds step, fill all other parameter values that are currently not set
        const currentParameters = this.parameterValues;
        for (const parameterId in currentParameters) {
            // if already set by input values, skip
            if (requestParameterSet[parameterId] !== undefined)
                continue;
            // deep copy into new dictionary
            requestParameterSet[parameterId] = (' ' + currentParameters[parameterId]).slice(1);
        }
        return requestParameterSet;
    }
    /**
     * Create an interaction parameter based on the parameter definition.
     *
     * @param parameter
     * @returns
     */
    createInteractionParameter(parameter) {
        const result = (0, viewer_shared_types_1.validateInteractionParameterSettings)(parameter.settings);
        if (result.success) {
            switch (parameter.settings.type) {
                case 'selection':
                    return new SelectionParameter_1.SelectionParameter(parameter, this);
                case 'gumball':
                    return new GumballParameter_1.GumballParameter(parameter, this);
            }
        }
        else {
            this._logger.warn(`SessionEngine.createInteractionParameter: The value ${parameter.settings} is not a valid InteractionParameter: ${result.error.message}`);
        }
        return new Parameter_1.Parameter(parameter, this);
    }
    customizeInternal(cancelRequest, taskEventInfo) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.customizeSession(this._parameterValues, cancelRequest, taskEventInfo);
        });
    }
    customizeSession(parameters, cancelRequest, taskEventInfo, parallel = false, loadOutputs = true, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            this.checkAvailability('customize');
            try {
                this._performanceEvaluator.startSection('sessionResponse');
                const responseDto = yield this._sdk.utils.submitAndWaitForCustomization(this._sdk, this._sessionId, parameters);
                this._performanceEvaluator.endSection('sessionResponse');
                if (loadOutputs === true && this._allowOutputLoading === true) {
                    if (cancelRequest())
                        return new SessionTreeNode_1.SessionTreeNode();
                    if (parallel === true) {
                        // special case, we load the outputs put don't add them to the scene
                        return this.loadOutputsParallel(responseDto, cancelRequest, taskEventInfo);
                    }
                    else {
                        // default case, we load the outputs and return the nodes
                        this.updateResponseDto(responseDto);
                        return this.loadOutputs(cancelRequest, taskEventInfo);
                    }
                }
                else {
                    // special case, we don't load the outputs and only return the responseDto
                    const node = new SessionTreeNode_1.SessionTreeNode();
                    node.data.push(new SessionData_1.SessionData(responseDto));
                    return node;
                }
            }
            catch (e) {
                yield this.handleError(e, retry);
                if (cancelRequest())
                    return new SessionTreeNode_1.SessionTreeNode();
                return yield this.customizeSession(parameters, cancelRequest, taskEventInfo, parallel, loadOutputs, true);
            }
        });
    }
    /**
     * Get all file parameters from the parameter set.
     * If the parameter is not set in the parameter set, the value from the parameter object is used.
     *
     * @param parameters
     * @returns
     */
    getFileParameterSet(parameters) {
        const fileParameterSet = {};
        for (const parameterId in this.parameters) {
            if (this.parameters[parameterId] instanceof FileParameter_1.FileParameter) {
                fileParameterSet[parameterId] = parameters[parameterId] !== undefined ? parameters[parameterId] : this.parameters[parameterId].value;
            }
        }
        return fileParameterSet;
    }
    handleError(e, retry = false) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, sdk_geometry_api_sdk_v2_1.isGBResponseError)(e)) {
                if (e.error === sdk_geometry_api_sdk_v2_1.ShapeDiverResponseErrorType.SESSION_GONE_ERROR) {
                    // case 1: the session is no longer available
                    // we try to re-initialize the session 3 times, if that does not work, we close it
                    this._logger.warn('The session has been closed, trying to re-initialize.');
                    if (this._sessionId)
                        this._httpClient.removeDataLoading(this._sessionId);
                    if (this._retryCounter < 3) {
                        // we retry this 3 times, the `retry` option in the init function is set to true and passed on 
                        this._retryCounter = retry ? this._retryCounter + 1 : 1;
                        this._initialized = false;
                        yield this.init(this.parameterValues, true);
                    }
                    else {
                        // the retries were exceeded, we close the session
                        this._logger.warn('Tried to retry the connect multiple times, bearer token still not valid. Closing Session.');
                        // eslint-disable-next-line no-empty
                        try {
                            yield this._closeOnFailure();
                        }
                        catch (e) { }
                        throw this._httpClient.convertError(e);
                    }
                }
                else if (e.error === sdk_geometry_api_sdk_v2_1.ShapeDiverResponseErrorType.JWT_VALIDATION_ERROR) {
                    // if any of the above errors occur, we try to get a new bearer token
                    // if we get a new one, we retry 3 times (by requiring new bearer tokens every time)
                    if (this._retryCounter < 3) {
                        if (this._refreshJwtToken) {
                            yield this.setJwtToken(yield this._refreshJwtToken());
                            this._retryCounter = retry ? this._retryCounter + 1 : 1;
                            this._logger.warn('Re-trying with new bearer token.');
                        }
                        else {
                            // no bearer tokens are supplied, we close the session
                            this._logger.warn('No retry possible, no new bearer token was supplied. Closing Session.');
                            // eslint-disable-next-line no-empty
                            try {
                                yield this._closeOnFailure();
                            }
                            catch (e) { }
                            throw this._httpClient.convertError(e);
                        }
                    }
                    else {
                        // the retries were exceeded, we close the session
                        this._logger.warn('Tried to retry the connect multiple times, bearer token still not valid. Closing Session.');
                        // eslint-disable-next-line no-empty
                        try {
                            yield this._closeOnFailure();
                        }
                        catch (e) { }
                        throw this._httpClient.convertError(e);
                    }
                }
                else {
                    throw this._httpClient.convertError(e);
                }
            }
            else {
                throw this._httpClient.convertError(e);
            }
        });
    }
    /**
     * Process the image input and return the image data and array buffer.
     *
     * In the case of the image being a Blob or File, the image data is constructed from the Blob or File.
     * In the case of the image being a string, we check if it is a data URL or a URL.
     * If it is a data URL, we convert it to a Blob and construct the image data from the Blob.
     * If it is a URL, we download the image and return the image data and array buffer.
     *
     * @param image
     * @returns
     */
    processImageInput(image) {
        return __awaiter(this, void 0, void 0, function* () {
            if (image instanceof File || image instanceof Blob)
                return this._converter.constructImageData(image);
            let imageString;
            if (typeof image === 'function') {
                imageString = image();
            }
            else {
                imageString = image;
            }
            if (imageString.startsWith('data:')) {
                // case where the image is a data URL
                const { blob, arrayBuffer } = this._converter.dataURLtoBlob(imageString);
                return {
                    imageData: {
                        format: blob.type,
                        size: blob.size
                    },
                    arrayBuffer
                };
            }
            else {
                // case where the image is a URL
                const [arrayBuffer, type] = yield this._sdk.asset.downloadImage(this._sessionId, imageString);
                return {
                    imageData: {
                        format: type,
                        size: arrayBuffer.byteLength
                    },
                    arrayBuffer
                };
            }
        });
    }
    removeBusyMode(busyId) {
        for (const r in this._stateEngine.viewportEngines) {
            if (this._stateEngine.viewportEngines[r] && this._stateEngine.viewportEngines[r].busy.includes(busyId))
                this._stateEngine.viewportEngines[r].busy.splice(this._stateEngine.viewportEngines[r].busy.indexOf(busyId), 1);
            if (__classPrivateFieldGet(this, _SessionEngine_customizationBusyModes, "f").includes(busyId))
                __classPrivateFieldGet(this, _SessionEngine_customizationBusyModes, "f").splice(__classPrivateFieldGet(this, _SessionEngine_customizationBusyModes, "f").indexOf(busyId), 1);
        }
    }
    removeFromSceneTree(node) {
        this._sceneTree.removeNode(node);
        this._sceneTree.root.updateVersion();
    }
    /**
     * Returns a promise that resolves after the amount of milliseconds provided.
     *
     * @param ms the milliseconds
     * @returns promise that resolve after specified milliseconds
     */
    timeout(ms) {
        return __awaiter(this, void 0, void 0, function* () {
            return new Promise(resolve => setTimeout(resolve, ms));
        });
    }
    updateResponseDto(responseDto, initialParameters) {
        var _a, _b, _c, _d;
        if (!this._responseDto) {
            this._responseDto = responseDto;
            return;
        }
        // convert parameters
        if (responseDto.parameters) {
            for (const parameterId in responseDto.parameters) {
                this._responseDto.parameters = this._responseDto.parameters || {};
                this._responseDto.parameters[parameterId] = this._responseDto.parameters[parameterId] || responseDto.parameters[parameterId];
            }
        }
        // convert outputs
        if (responseDto.outputs) {
            for (const outputId in responseDto.outputs) {
                this._responseDto.outputs = this._responseDto.outputs || {};
                if ('version' in responseDto.outputs[outputId] || !(this._responseDto.outputs[outputId] && 'version' in this._responseDto.outputs[outputId]))
                    this._responseDto.outputs[outputId] = responseDto.outputs[outputId];
            }
        }
        // convert exports
        if (responseDto.exports) {
            for (const exportId in responseDto.exports) {
                this._responseDto.exports = this._responseDto.exports || {};
                if ('version' in responseDto.exports[exportId] || !(this._responseDto.exports[exportId] && 'version' in this._responseDto.exports[exportId]))
                    this._responseDto.exports[exportId] = responseDto.exports[exportId];
            }
        }
        const parameterSet = {};
        for (const parameterId in this._responseDto.parameters) {
            if (this.parameters[parameterId])
                continue;
            this._responseDto.parameters[parameterId].id = parameterId;
            /**
             *
             * REMOVE THIS LOGIC - START
             *
             */
            const fakeSelectionParameterName = 'FAKE_SELECTION_PARAMETER';
            const nameStartsWithFakeSelectionParameter = this._responseDto.parameters[parameterId].name.startsWith(fakeSelectionParameterName);
            const displaynameStartsWithFakeSelectionParameter = (_a = this._responseDto.parameters[parameterId].displayname) === null || _a === void 0 ? void 0 : _a.startsWith(fakeSelectionParameterName);
            if (nameStartsWithFakeSelectionParameter || displaynameStartsWithFakeSelectionParameter) {
                this._responseDto.parameters[parameterId].type = viewer_shared_types_1.PARAMETER_TYPE.INTERACTION;
                const name = nameStartsWithFakeSelectionParameter ? this._responseDto.parameters[parameterId].name : this._responseDto.parameters[parameterId].displayname;
                const urlParams = new URLSearchParams(name.replace(fakeSelectionParameterName + '?', ''));
                const jsonString = urlParams.get('settings');
                if (jsonString)
                    this._responseDto.parameters[parameterId].settings = JSON.parse(jsonString + '');
            }
            const fakeGumballParameterName = 'FAKE_GUMBALL_PARAMETER';
            const nameStartsWithFakeGumballParameter = this._responseDto.parameters[parameterId].name.startsWith(fakeGumballParameterName);
            const displaynameStartsWithFakeGumballParameter = (_b = this._responseDto.parameters[parameterId].displayname) === null || _b === void 0 ? void 0 : _b.startsWith(fakeGumballParameterName);
            if (nameStartsWithFakeGumballParameter || displaynameStartsWithFakeGumballParameter) {
                this._responseDto.parameters[parameterId].type = viewer_shared_types_1.PARAMETER_TYPE.INTERACTION;
                const name = nameStartsWithFakeGumballParameter ? this._responseDto.parameters[parameterId].name : this._responseDto.parameters[parameterId].displayname;
                const urlParams = new URLSearchParams(name.replace(fakeGumballParameterName + '?', ''));
                const jsonString = urlParams.get('settings');
                if (jsonString)
                    this._responseDto.parameters[parameterId].settings = JSON.parse(jsonString + '');
            }
            const fakeDrawingParameterName = 'FAKE_DRAWING_PARAMETER';
            const nameStartsWithFakeDrawingParameter = this._responseDto.parameters[parameterId].name.startsWith(fakeDrawingParameterName);
            const displaynameStartsWithFakeDrawingParameter = (_c = this._responseDto.parameters[parameterId].displayname) === null || _c === void 0 ? void 0 : _c.startsWith(fakeDrawingParameterName);
            if (nameStartsWithFakeDrawingParameter || displaynameStartsWithFakeDrawingParameter) {
                this._responseDto.parameters[parameterId].type = viewer_shared_types_1.PARAMETER_TYPE.DRAWING;
                const name = nameStartsWithFakeDrawingParameter ? this._responseDto.parameters[parameterId].name : this._responseDto.parameters[parameterId].displayname;
                const urlParams = new URLSearchParams(name.replace(fakeDrawingParameterName + '?', ''));
                const jsonString = urlParams.get('settings');
                if (jsonString)
                    this._responseDto.parameters[parameterId].settings = JSON.parse(jsonString + '');
            }
            const fakeDrawingFixParameterName = 'FAKE_DRAWING_FIX';
            const nameStartsWithFakeDrawingFixParameter = this._responseDto.parameters[parameterId].name.startsWith(fakeDrawingFixParameterName);
            const displaynameStartsWithFakeDrawingFixParameter = (_d = this._responseDto.parameters[parameterId].displayname) === null || _d === void 0 ? void 0 : _d.startsWith(fakeDrawingFixParameterName);
            if (nameStartsWithFakeDrawingFixParameter || displaynameStartsWithFakeDrawingFixParameter) {
                this._responseDto.parameters[parameterId].type = viewer_shared_types_1.PARAMETER_TYPE.DRAWING;
            }
            /**
             *
             * REMOVE THIS LOGIC - END
             *
             */
            switch (true) {
                case this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.BOOL:
                    this.parameters[parameterId] = new Parameter_1.Parameter(this._responseDto.parameters[parameterId], this);
                    break;
                case this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.COLOR:
                    this.parameters[parameterId] = new Parameter_1.Parameter(this._responseDto.parameters[parameterId], this);
                    break;
                case this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.FILE:
                    this.parameters[parameterId] = new FileParameter_1.FileParameter(this._responseDto.parameters[parameterId], this);
                    break;
                case this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.EVEN || this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.FLOAT || this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.INT || this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.ODD:
                    this.parameters[parameterId] = new Parameter_1.Parameter(this._responseDto.parameters[parameterId], this);
                    break;
                case this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.INTERACTION:
                    this.parameters[parameterId] = this.createInteractionParameter(this._responseDto.parameters[parameterId]);
                    break;
                case this._responseDto.parameters[parameterId].type === viewer_shared_types_1.PARAMETER_TYPE.DRAWING:
                    this.parameters[parameterId] = new DrawingParameter_1.DrawingParameter(this._responseDto.parameters[parameterId], this);
                    break;
                default:
                    this.parameters[parameterId] = new Parameter_1.Parameter(this._responseDto.parameters[parameterId], this);
                    break;
            }
            // we don't have to do larger restrictions for this as the backend would have already thrown an error if the values were not correct
            if (initialParameters) {
                // check if the id is within the initial parameters
                if (initialParameters[parameterId] !== undefined) {
                    this.parameters[parameterId].value = initialParameters[parameterId];
                }
                // check if the name is within the initial parameters
                else if (initialParameters[this.parameters[parameterId].name] !== undefined) {
                    this.parameters[parameterId].value = initialParameters[this.parameters[parameterId].name];
                }
                // NOTE: At some point the checking may also be done with the displayname, this is the code for it
                // // check if the displayname is within the initial parameters
                // else if(this.parameters[parameterId].displayname && initialParameters[this.parameters[parameterId].displayname!] !== undefined) {
                //     this.parameters[parameterId].value = initialParameters[this.parameters[parameterId].displayname!];
                // }
            }
            parameterSet[parameterId] = {
                value: this.parameters[parameterId].value,
                valueString: this.parameters[parameterId].stringify()
            };
            if (!this.initialized)
                this.parameterValues[parameterId] = parameterSet[parameterId].valueString;
        }
        // store the initialization as the first parameter set in the history
        if (!this.initialized)
            __classPrivateFieldGet(this, _SessionEngine_parameterHistory, "f").push(parameterSet);
        for (const exportId in this._responseDto.exports) {
            if (this._responseDto.exports[exportId].type === sdk_geometry_api_sdk_v2_1.ShapeDiverResponseExportDefinitionType.EMAIL || this._responseDto.exports[exportId].type === sdk_geometry_api_sdk_v2_1.ShapeDiverResponseExportDefinitionType.DOWNLOAD) {
                if (!this.exports[exportId]) {
                    this._responseDto.exports[exportId].id = exportId;
                    this.exports[exportId] = new Export_1.Export(this._responseDto.exports[exportId], this);
                }
                else {
                    this.exports[exportId].updateExportDefinition(this._responseDto.exports[exportId]);
                }
            }
        }
        for (const outputId in this._responseDto.outputs) {
            if (!this.outputs[outputId]) {
                this._responseDto.outputs[outputId].id = outputId;
                if (this.outputsFreeze[outputId] === undefined)
                    this.outputsFreeze[outputId] = false;
                this.outputs[outputId] = new Output_1.Output(this._responseDto.outputs[outputId], this);
            }
            else {
                this.outputs[outputId].updateOutputDefinition(this._responseDto.outputs[outputId]);
            }
        }
    }
    waitForUpdateCallbacks(newOutputVersions, oldOutputVersions, newNode, oldNode) {
        return __awaiter(this, void 0, void 0, function* () {
            // call the update callback function on the session
            if (this._updateCallback)
                yield Promise.resolve(this._updateCallback(newNode, oldNode));
            const promises = [];
            // call the update callback functions on the outputs
            for (const outputId in this.outputs) {
                if (oldOutputVersions[outputId] !== newOutputVersions[outputId]) {
                    promises.push(this.outputs[outputId].triggerUpdateCallback(newNode.children.find(c => c.name === outputId), oldNode.children.find(c => c.name === outputId)));
                }
            }
            yield Promise.all(promises);
        });
    }
}
exports.SessionEngine = SessionEngine;
_SessionEngine_customizationBusyModes = new WeakMap(), _SessionEngine_customizationProcess = new WeakMap(), _SessionEngine_parameterHistory = new WeakMap(), _SessionEngine_parameterHistoryCall = new WeakMap(), _SessionEngine_parameterHistoryForward = new WeakMap();
//# sourceMappingURL=SessionEngine.js.map

/***/ }),

/***/ 77124:
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
var _SessionOutputData_responseOutput;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionOutputData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class SessionOutputData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(responseOutput, id, version) {
        super(id, version);
        // #region Properties (1)
        _SessionOutputData_responseOutput.set(this, void 0);
        __classPrivateFieldSet(this, _SessionOutputData_responseOutput, responseOutput, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get responseOutput() {
        return __classPrivateFieldGet(this, _SessionOutputData_responseOutput, "f");
    }
    set responseOutput(value) {
        __classPrivateFieldSet(this, _SessionOutputData_responseOutput, value, "f");
    }
    // #endregion Public Getters And Setters (2)
    // #region Public Methods (1)
    clone() {
        return new SessionOutputData(this.responseOutput, this.id, this.version);
    }
}
exports.SessionOutputData = SessionOutputData;
_SessionOutputData_responseOutput = new WeakMap();
//# sourceMappingURL=SessionOutputData.js.map

/***/ }),

/***/ 26401:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _SessionTreeNode_sessionNode;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionTreeNode = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class SessionTreeNode extends viewer_shared_node_tree_1.TreeNode {
    // #endregion Properties (1)
    // #region Constructors (1)
    /**
     * Special scene graph node for session data. Only to be created internally.
     *
     * @param name the name of the node
     * @param parent the parent of this node
     * @param data the array of data
     * @param transformation the array of transformations
     */
    constructor(name, parent, data, transformations) {
        super(name, parent, data, transformations);
        // #region Properties (1)
        _SessionTreeNode_sessionNode.set(this, true);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (1)
    get sessionNode() {
        return __classPrivateFieldGet(this, _SessionTreeNode_sessionNode, "f");
    }
}
exports.SessionTreeNode = SessionTreeNode;
_SessionTreeNode_sessionNode = new WeakMap();
//# sourceMappingURL=SessionTreeNode.js.map

/***/ }),

/***/ 35330:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _DrawingParameter_sessionEngine;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawingParameter = void 0;
const Parameter_1 = __webpack_require__(14036);
const viewer_shared_types_1 = __webpack_require__(64766);
class DrawingParameter extends Parameter_1.Parameter {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(paramDef, sessionEngine) {
        super(paramDef, sessionEngine);
        // #region Properties (1)
        _DrawingParameter_sessionEngine.set(this, void 0);
        __classPrivateFieldSet(this, _DrawingParameter_sessionEngine, sessionEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get geometry() {
        var _a;
        return (_a = this.getDrawingProperties()) === null || _a === void 0 ? void 0 : _a.geometry;
    }
    get restrictions() {
        var _a;
        return (_a = this.getDrawingProperties()) === null || _a === void 0 ? void 0 : _a.restrictions;
    }
    // #endregion Public Getters And Setters (2)
    // #region Private Methods (1)
    getDrawingProperties() {
        const result = (0, viewer_shared_types_1.validateDrawingParameterSettings)(this.settings);
        if (result.success) {
            return this.settings;
        }
    }
}
exports.DrawingParameter = DrawingParameter;
_DrawingParameter_sessionEngine = new WeakMap();
//# sourceMappingURL=DrawingParameter.js.map

/***/ }),

/***/ 40457:
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
var _Export_eventEngine, _Export_id, _Export_inputValidator, _Export_logger, _Export_name, _Export_sessionEngine, _Export_type, _Export_uuidGenerator, _Export_content, _Export_delay, _Export_dependency, _Export_displayname, _Export_filename, _Export_group, _Export_hidden, _Export_maxWaitTime, _Export_msg, _Export_order, _Export_result, _Export_status_collect, _Export_status_computation, _Export_tooltip, _Export_uid, _Export_version;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Export = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
class Export {
    // #endregion Properties (24)
    // #region Constructors (1)
    constructor(exportDef, sessionEngine) {
        // #region Properties (24)
        _Export_eventEngine.set(this, viewer_shared_services_1.EventEngine.instance);
        _Export_id.set(this, void 0);
        _Export_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _Export_logger.set(this, viewer_shared_services_1.Logger.instance);
        _Export_name.set(this, void 0);
        _Export_sessionEngine.set(this, void 0);
        _Export_type.set(this, void 0);
        _Export_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        _Export_content.set(this, void 0);
        _Export_delay.set(this, void 0);
        _Export_dependency.set(this, void 0);
        _Export_displayname.set(this, void 0);
        _Export_filename.set(this, void 0);
        _Export_group.set(this, void 0);
        _Export_hidden.set(this, false);
        _Export_maxWaitTime.set(this, 300000);
        _Export_msg.set(this, void 0);
        _Export_order.set(this, void 0);
        _Export_result.set(this, void 0);
        _Export_status_collect.set(this, void 0);
        _Export_status_computation.set(this, void 0);
        _Export_tooltip.set(this, void 0);
        _Export_uid.set(this, void 0);
        _Export_version.set(this, void 0);
        __classPrivateFieldSet(this, _Export_sessionEngine, sessionEngine, "f");
        __classPrivateFieldSet(this, _Export_id, exportDef.id, "f");
        __classPrivateFieldSet(this, _Export_name, exportDef.name, "f");
        __classPrivateFieldSet(this, _Export_type, exportDef.type, "f");
        this.updateExportDefinition(exportDef);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (24)
    get content() {
        return __classPrivateFieldGet(this, _Export_content, "f");
    }
    get delay() {
        return __classPrivateFieldGet(this, _Export_delay, "f");
    }
    get dependency() {
        return __classPrivateFieldGet(this, _Export_dependency, "f");
    }
    get displayname() {
        return __classPrivateFieldGet(this, _Export_displayname, "f");
    }
    set displayname(value) {
        __classPrivateFieldSet(this, _Export_displayname, value, "f");
    }
    get filename() {
        return __classPrivateFieldGet(this, _Export_filename, "f");
    }
    get group() {
        return __classPrivateFieldGet(this, _Export_group, "f");
    }
    get hidden() {
        return __classPrivateFieldGet(this, _Export_hidden, "f");
    }
    set hidden(value) {
        __classPrivateFieldSet(this, _Export_hidden, value, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Export_id, "f");
    }
    get maxWaitTime() {
        return __classPrivateFieldGet(this, _Export_maxWaitTime, "f");
    }
    set maxWaitTime(value) {
        __classPrivateFieldSet(this, _Export_maxWaitTime, value, "f");
    }
    get msg() {
        return __classPrivateFieldGet(this, _Export_msg, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Export_name, "f");
    }
    get order() {
        return __classPrivateFieldGet(this, _Export_order, "f");
    }
    set order(value) {
        __classPrivateFieldSet(this, _Export_order, value, "f");
    }
    get result() {
        return __classPrivateFieldGet(this, _Export_result, "f");
    }
    get status_collect() {
        return __classPrivateFieldGet(this, _Export_status_collect, "f");
    }
    get status_computation() {
        return __classPrivateFieldGet(this, _Export_status_computation, "f");
    }
    get tooltip() {
        return __classPrivateFieldGet(this, _Export_tooltip, "f");
    }
    set tooltip(value) {
        __classPrivateFieldSet(this, _Export_tooltip, value, "f");
    }
    get type() {
        return __classPrivateFieldGet(this, _Export_type, "f");
    }
    get uid() {
        return __classPrivateFieldGet(this, _Export_uid, "f");
    }
    get version() {
        return __classPrivateFieldGet(this, _Export_version, "f");
    }
    // #endregion Public Getters And Setters (24)
    // #region Public Methods (3)
    request(parameterValues = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = __classPrivateFieldGet(this, _Export_uuidGenerator, "f").create();
            try {
                const event = { type: viewer_shared_types_1.TASK_TYPE.EXPORT_REQUEST, id: eventId, progress: 0, status: 'Requesting export' };
                __classPrivateFieldGet(this, _Export_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, event);
                if (Object.keys(parameterValues).length === 0) {
                    __classPrivateFieldGet(this, _Export_logger, "f").info(`Export(${__classPrivateFieldGet(this, _Export_id, "f")}).request: Sending export request with parameters ${JSON.stringify(parameterValues)}.`);
                }
                else {
                    __classPrivateFieldGet(this, _Export_logger, "f").debugLow(`Export(${__classPrivateFieldGet(this, _Export_id, "f")}).request: Sending export request.`);
                }
                const exportDef = yield __classPrivateFieldGet(this, _Export_sessionEngine, "f").requestExport(this.id, parameterValues, __classPrivateFieldGet(this, _Export_maxWaitTime, "f"));
                this.updateExportDefinition(exportDef);
                const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.EXPORT_REQUEST, id: eventId, progress: 1, status: 'Returning export' };
                __classPrivateFieldGet(this, _Export_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
                return exportDef;
            }
            catch (e) {
                const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.EXPORT_REQUEST, id: eventId, progress: 1, status: 'Export request failed' };
                __classPrivateFieldGet(this, _Export_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, eventEnd);
                throw e;
            }
        });
    }
    updateExport() {
        const exportDef = __classPrivateFieldGet(this, _Export_sessionEngine, "f").exports[this.id];
        __classPrivateFieldSet(this, _Export_dependency, exportDef.dependency, "f");
        __classPrivateFieldSet(this, _Export_uid, exportDef.uid, "f");
        __classPrivateFieldSet(this, _Export_displayname, exportDef.displayname, "f");
        __classPrivateFieldSet(this, _Export_order, exportDef.order, "f");
        __classPrivateFieldSet(this, _Export_hidden, exportDef.hidden, "f");
        __classPrivateFieldSet(this, _Export_tooltip, exportDef.tooltip, "f");
        __classPrivateFieldSet(this, _Export_version, exportDef.version, "f");
        __classPrivateFieldSet(this, _Export_delay, exportDef.delay, "f");
        __classPrivateFieldSet(this, _Export_content, exportDef.content, "f");
        __classPrivateFieldSet(this, _Export_msg, exportDef.msg, "f");
        __classPrivateFieldSet(this, _Export_filename, exportDef.filename, "f");
        __classPrivateFieldSet(this, _Export_result, exportDef.result, "f");
        __classPrivateFieldSet(this, _Export_status_computation, exportDef.status_computation, "f");
        __classPrivateFieldSet(this, _Export_status_collect, exportDef.status_collect, "f");
        __classPrivateFieldSet(this, _Export_group, exportDef.group, "f");
    }
    updateExportDefinition(exportDef) {
        __classPrivateFieldSet(this, _Export_dependency, exportDef.dependency, "f");
        __classPrivateFieldSet(this, _Export_uid, exportDef.uid, "f");
        __classPrivateFieldSet(this, _Export_displayname, exportDef.displayname, "f");
        __classPrivateFieldSet(this, _Export_order, exportDef.order, "f");
        __classPrivateFieldSet(this, _Export_hidden, exportDef.hidden, "f");
        __classPrivateFieldSet(this, _Export_tooltip, exportDef.tooltip, "f");
        __classPrivateFieldSet(this, _Export_version, exportDef.version, "f");
        __classPrivateFieldSet(this, _Export_delay, exportDef.delay, "f");
        __classPrivateFieldSet(this, _Export_content, exportDef.content, "f");
        __classPrivateFieldSet(this, _Export_msg, exportDef.msg, "f");
        __classPrivateFieldSet(this, _Export_filename, exportDef.filename, "f");
        __classPrivateFieldSet(this, _Export_result, exportDef.result, "f");
        __classPrivateFieldSet(this, _Export_status_computation, exportDef.status_computation, "f");
        __classPrivateFieldSet(this, _Export_status_collect, exportDef.status_collect, "f");
        __classPrivateFieldSet(this, _Export_group, exportDef.group, "f");
    }
}
exports.Export = Export;
_Export_eventEngine = new WeakMap(), _Export_id = new WeakMap(), _Export_inputValidator = new WeakMap(), _Export_logger = new WeakMap(), _Export_name = new WeakMap(), _Export_sessionEngine = new WeakMap(), _Export_type = new WeakMap(), _Export_uuidGenerator = new WeakMap(), _Export_content = new WeakMap(), _Export_delay = new WeakMap(), _Export_dependency = new WeakMap(), _Export_displayname = new WeakMap(), _Export_filename = new WeakMap(), _Export_group = new WeakMap(), _Export_hidden = new WeakMap(), _Export_maxWaitTime = new WeakMap(), _Export_msg = new WeakMap(), _Export_order = new WeakMap(), _Export_result = new WeakMap(), _Export_status_collect = new WeakMap(), _Export_status_computation = new WeakMap(), _Export_tooltip = new WeakMap(), _Export_uid = new WeakMap(), _Export_version = new WeakMap();
//# sourceMappingURL=Export.js.map

/***/ }),

/***/ 66906:
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
var _FileParameter_logger, _FileParameter_sessionEngine, _FileParameter_uuidGenerator;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileParameter = void 0;
const MimeTypeUtils = __importStar(__webpack_require__(56434));
const viewer_shared_services_1 = __webpack_require__(8389);
const Parameter_1 = __webpack_require__(14036);
class FileParameter extends Parameter_1.Parameter {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(paramDef, sessionEngine) {
        super(paramDef, sessionEngine);
        // #region Properties (3)
        _FileParameter_logger.set(this, viewer_shared_services_1.Logger.instance);
        _FileParameter_sessionEngine.set(this, void 0);
        _FileParameter_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        __classPrivateFieldSet(this, _FileParameter_sessionEngine, sessionEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getFilename(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            // if fileId is undefined and value is undefined, return undefined
            if (fileId === undefined && this.value === undefined)
                return;
            // if fileId is undefined and value is a string and is a valid uuid, use the value as fileId
            if (fileId === undefined && typeof this.value === 'string' && ((this.value.length === 36 && __classPrivateFieldGet(this, _FileParameter_uuidGenerator, "f").validate(this.value)) || this.value === ''))
                return (yield __classPrivateFieldGet(this, _FileParameter_sessionEngine, "f").getFileInfo(this.id, this.value)).filename;
            // if fileId is undefined, return undefined
            if (fileId === undefined)
                return;
            return (yield __classPrivateFieldGet(this, _FileParameter_sessionEngine, "f").getFileInfo(this.id, fileId)).filename;
        });
    }
    upload(v) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const value = v !== undefined ? v : this.value;
            if (value === undefined)
                return this.defval;
            if (typeof value === 'string' && ((value.length === 36 && __classPrivateFieldGet(this, _FileParameter_uuidGenerator, "f").validate(value)) || value === ''))
                return value;
            // get the type of the file
            let fileType;
            if (value instanceof File) {
                if (value.type === '') {
                    // try to get type from file name
                    const types = MimeTypeUtils.guessMimeTypeFromFilename(value.name);
                    if (types.length === 0) {
                        throw new viewer_shared_services_1.ShapeDiverViewerSessionError(`Parameter(${this.id}).upload: Error uploading FileParameter, provided File has no type and could not be guessed from filename. Has to be ${this.format}.`);
                    }
                    else {
                        fileType = types;
                    }
                }
                else {
                    fileType = value.type;
                }
            }
            else if (value instanceof Blob) {
                if (value.type === '') {
                    throw new viewer_shared_services_1.ShapeDiverViewerSessionError(`Parameter(${this.id}).upload: Error uploading FileParameter, provided File has no type and could not be guessed from filename. Has to be ${this.format}.`);
                }
                else {
                    fileType = value.type;
                }
            }
            else {
                fileType = 'text/plain';
            }
            /**
             * Get all possible mime types for the provided fileType.
             */
            let types = typeof fileType === 'string' ? [fileType] : fileType;
            // get all endings that are possible for this type
            const endings = MimeTypeUtils.mapMimeTypeToFileEndings(types);
            // get all mimeTypes that are possible for these endings
            endings.forEach((e) => types = types.concat(MimeTypeUtils.guessMimeTypeFromFilename(e)));
            /**
             * Check if the provided fileType is allowed for this parameter.
             * If not, throw an error.
             */
            let type = undefined;
            // check if one of the mime types is allowed
            let allowedType = false;
            for (let i = 0; i < types.length; i++) {
                if ((_a = this.format) === null || _a === void 0 ? void 0 : _a.includes(types[i])) {
                    allowedType = true;
                    type = types[i];
                    break;
                }
            }
            // if the type is not allowed, throw an error
            if (allowedType === false || type === undefined)
                throw new viewer_shared_services_1.ShapeDiverViewerSessionError(`Parameter(${this.id}).upload: Error uploading FileParameter, type of data (${fileType}) is not a valid type. Has to be ${this.format}.`);
            // create a File object
            const data = new File([
                typeof value === 'string' ?
                    new Blob([value], { type: 'text/plain' }) :
                    value
            ], value instanceof File && value.name !== undefined ? value.name : '', { type });
            __classPrivateFieldGet(this, _FileParameter_logger, "f").debug(`Parameter(${this.id}).upload: Uploading FileParameter.`);
            return yield __classPrivateFieldGet(this, _FileParameter_sessionEngine, "f").uploadFile(this.id, data, type);
        });
    }
}
exports.FileParameter = FileParameter;
_FileParameter_logger = new WeakMap(), _FileParameter_sessionEngine = new WeakMap(), _FileParameter_uuidGenerator = new WeakMap();
//# sourceMappingURL=FileParameter.js.map

/***/ }),

/***/ 774:
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
var _Output_id, _Output_inputValidator, _Output_logger, _Output_name, _Output_sessionEngine, _Output_uuidGenerator, _Output_bbmax, _Output_bbmin, _Output_chunks, _Output_content, _Output_delay, _Output_dependency, _Output_displayname, _Output_hidden, _Output_material, _Output_msg, _Output_order, _Output_status_collect, _Output_status_computation, _Output_tooltip, _Output_uid, _Output_updateCallback, _Output_version;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Output = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class Output {
    // #endregion Properties (23)
    // #region Constructors (1)
    constructor(outputDef, sessionEngine) {
        // #region Properties (23)
        _Output_id.set(this, void 0);
        _Output_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _Output_logger.set(this, viewer_shared_services_1.Logger.instance);
        _Output_name.set(this, void 0);
        _Output_sessionEngine.set(this, void 0);
        _Output_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        _Output_bbmax.set(this, void 0);
        _Output_bbmin.set(this, void 0);
        _Output_chunks.set(this, void 0);
        _Output_content.set(this, void 0);
        _Output_delay.set(this, void 0);
        _Output_dependency.set(this, void 0);
        _Output_displayname.set(this, void 0);
        _Output_hidden.set(this, false);
        _Output_material.set(this, void 0);
        _Output_msg.set(this, void 0);
        _Output_order.set(this, void 0);
        _Output_status_collect.set(this, void 0);
        _Output_status_computation.set(this, void 0);
        _Output_tooltip.set(this, void 0);
        _Output_uid.set(this, void 0);
        _Output_updateCallback.set(this, null);
        _Output_version.set(this, void 0);
        __classPrivateFieldSet(this, _Output_sessionEngine, sessionEngine, "f");
        __classPrivateFieldSet(this, _Output_id, outputDef.id, "f");
        __classPrivateFieldSet(this, _Output_name, outputDef.name, "f");
        __classPrivateFieldSet(this, _Output_version, outputDef.version, "f");
        this.updateOutputDefinition(outputDef);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (30)
    get bbmax() {
        return __classPrivateFieldGet(this, _Output_bbmax, "f");
    }
    get bbmin() {
        return __classPrivateFieldGet(this, _Output_bbmin, "f");
    }
    get chunks() {
        return __classPrivateFieldGet(this, _Output_chunks, "f");
    }
    get content() {
        return __classPrivateFieldGet(this, _Output_content, "f");
    }
    set content(value) {
        __classPrivateFieldSet(this, _Output_content, value, "f");
    }
    get delay() {
        return __classPrivateFieldGet(this, _Output_delay, "f");
    }
    get dependency() {
        return __classPrivateFieldGet(this, _Output_dependency, "f");
    }
    get displayname() {
        return __classPrivateFieldGet(this, _Output_displayname, "f");
    }
    set displayname(value) {
        __classPrivateFieldSet(this, _Output_displayname, value, "f");
    }
    get format() {
        return __classPrivateFieldGet(this, _Output_content, "f") ? __classPrivateFieldGet(this, _Output_content, "f").map(c => c.format) : [];
    }
    get freeze() {
        return __classPrivateFieldGet(this, _Output_sessionEngine, "f").outputsFreeze[__classPrivateFieldGet(this, _Output_id, "f")];
    }
    set freeze(value) {
        __classPrivateFieldGet(this, _Output_sessionEngine, "f").outputsFreeze[__classPrivateFieldGet(this, _Output_id, "f")] = value;
    }
    get hidden() {
        return __classPrivateFieldGet(this, _Output_hidden, "f");
    }
    set hidden(value) {
        __classPrivateFieldSet(this, _Output_hidden, value, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Output_id, "f");
    }
    get material() {
        return __classPrivateFieldGet(this, _Output_material, "f");
    }
    get msg() {
        return __classPrivateFieldGet(this, _Output_msg, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Output_name, "f");
    }
    get node() {
        return __classPrivateFieldGet(this, _Output_sessionEngine, "f").node.children.find(c => c.name === this.id);
    }
    get order() {
        return __classPrivateFieldGet(this, _Output_order, "f");
    }
    set order(value) {
        __classPrivateFieldSet(this, _Output_order, value, "f");
    }
    get status_collect() {
        return __classPrivateFieldGet(this, _Output_status_collect, "f");
    }
    get status_computation() {
        return __classPrivateFieldGet(this, _Output_status_computation, "f");
    }
    get tooltip() {
        return __classPrivateFieldGet(this, _Output_tooltip, "f");
    }
    set tooltip(value) {
        __classPrivateFieldSet(this, _Output_tooltip, value, "f");
    }
    get uid() {
        return __classPrivateFieldGet(this, _Output_uid, "f");
    }
    get updateCallback() {
        return __classPrivateFieldGet(this, _Output_updateCallback, "f");
    }
    set updateCallback(value) {
        __classPrivateFieldSet(this, _Output_updateCallback, value, "f");
    }
    get version() {
        return __classPrivateFieldGet(this, _Output_version, "f");
    }
    set version(value) {
        __classPrivateFieldSet(this, _Output_version, value, "f");
    }
    // #endregion Public Getters And Setters (30)
    // #region Public Methods (4)
    triggerUpdateCallback(newNode, oldNode) {
        return __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _Output_updateCallback, "f"))
                yield Promise.resolve(__classPrivateFieldGet(this, _Output_updateCallback, "f").call(this, newNode, oldNode));
        });
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    updateOutput(newNode, oldNode) {
        const outputDef = __classPrivateFieldGet(this, _Output_sessionEngine, "f").outputs[this.id];
        this.updateOutputDefinition(outputDef);
        // add chunk nodes
        if (this.chunks && newNode) {
            for (let i = 0; i < newNode.children.length; i++) {
                for (let j = 0; j < this.chunks.length; j++) {
                    this.chunks[j].node = newNode.children[i].children.find(child => child.name === this.chunks[j].id);
                }
            }
        }
    }
    updateOutputContent(outputContent, preventUpdate = false, waitForViewportUpdate = false) {
        return __awaiter(this, void 0, void 0, function* () {
            __classPrivateFieldGet(this, _Output_sessionEngine, "f").outputs[this.id].content = outputContent;
            __classPrivateFieldGet(this, _Output_sessionEngine, "f").outputs[this.id].version = __classPrivateFieldGet(this, _Output_uuidGenerator, "f").create();
            if (!preventUpdate)
                yield __classPrivateFieldGet(this, _Output_sessionEngine, "f").updateOutputs(undefined, waitForViewportUpdate);
            return this.node;
        });
    }
    updateOutputDefinition(outputDef) {
        __classPrivateFieldSet(this, _Output_dependency, outputDef.dependency, "f");
        __classPrivateFieldSet(this, _Output_uid, outputDef.uid, "f");
        __classPrivateFieldSet(this, _Output_material, outputDef.material, "f");
        __classPrivateFieldSet(this, _Output_chunks, outputDef.chunks, "f");
        __classPrivateFieldSet(this, _Output_msg, outputDef.msg, "f");
        if (__classPrivateFieldGet(this, _Output_msg, "f") !== undefined)
            __classPrivateFieldGet(this, _Output_logger, "f").warn(`Output(${this.id}): ${__classPrivateFieldGet(this, _Output_msg, "f")}`);
        __classPrivateFieldSet(this, _Output_bbmin, outputDef.bbmin, "f");
        __classPrivateFieldSet(this, _Output_bbmax, outputDef.bbmax, "f");
        __classPrivateFieldSet(this, _Output_status_computation, outputDef.status_computation, "f");
        __classPrivateFieldSet(this, _Output_status_collect, outputDef.status_collect, "f");
        __classPrivateFieldSet(this, _Output_content, outputDef.content, "f");
        __classPrivateFieldSet(this, _Output_delay, outputDef.delay, "f");
        __classPrivateFieldSet(this, _Output_version, outputDef.version, "f");
        __classPrivateFieldSet(this, _Output_displayname, outputDef.displayname, "f");
        __classPrivateFieldSet(this, _Output_order, outputDef.order, "f");
        __classPrivateFieldSet(this, _Output_hidden, outputDef.hidden, "f");
    }
}
exports.Output = Output;
_Output_id = new WeakMap(), _Output_inputValidator = new WeakMap(), _Output_logger = new WeakMap(), _Output_name = new WeakMap(), _Output_sessionEngine = new WeakMap(), _Output_uuidGenerator = new WeakMap(), _Output_bbmax = new WeakMap(), _Output_bbmin = new WeakMap(), _Output_chunks = new WeakMap(), _Output_content = new WeakMap(), _Output_delay = new WeakMap(), _Output_dependency = new WeakMap(), _Output_displayname = new WeakMap(), _Output_hidden = new WeakMap(), _Output_material = new WeakMap(), _Output_msg = new WeakMap(), _Output_order = new WeakMap(), _Output_status_collect = new WeakMap(), _Output_status_computation = new WeakMap(), _Output_tooltip = new WeakMap(), _Output_uid = new WeakMap(), _Output_updateCallback = new WeakMap(), _Output_version = new WeakMap();
//# sourceMappingURL=Output.js.map

/***/ }),

/***/ 14036:
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
var _Parameter_choices, _Parameter_converter, _Parameter_decimalplaces, _Parameter_defaultValue, _Parameter_defval, _Parameter_eventEngine, _Parameter_expression, _Parameter_format, _Parameter_group, _Parameter_id, _Parameter_inputValidator, _Parameter_logger, _Parameter_max, _Parameter_min, _Parameter_name, _Parameter_paramDef, _Parameter_sessionEngine, _Parameter_settings, _Parameter_structure, _Parameter_type, _Parameter_visualization, _Parameter_displayname, _Parameter_hidden, _Parameter_lastValidatedValue, _Parameter_order, _Parameter_sessionValue, _Parameter_tooltip, _Parameter_value;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Parameter = void 0;
const MimeTypeUtils = __importStar(__webpack_require__(56434));
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
class Parameter {
    // #endregion Properties (28)
    // #region Constructors (1)
    constructor(paramDef, sessionEngine) {
        // #region Properties (28)
        _Parameter_choices.set(this, void 0);
        _Parameter_converter.set(this, viewer_shared_services_1.Converter.instance);
        _Parameter_decimalplaces.set(this, void 0);
        _Parameter_defaultValue.set(this, void 0);
        _Parameter_defval.set(this, void 0);
        _Parameter_eventEngine.set(this, viewer_shared_services_1.EventEngine.instance);
        _Parameter_expression.set(this, void 0);
        _Parameter_format.set(this, void 0);
        _Parameter_group.set(this, void 0);
        _Parameter_id.set(this, void 0);
        _Parameter_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _Parameter_logger.set(this, viewer_shared_services_1.Logger.instance);
        _Parameter_max.set(this, void 0);
        _Parameter_min.set(this, void 0);
        _Parameter_name.set(this, void 0);
        _Parameter_paramDef.set(this, void 0);
        _Parameter_sessionEngine.set(this, void 0);
        _Parameter_settings.set(this, void 0);
        _Parameter_structure.set(this, void 0);
        _Parameter_type.set(this, void 0);
        _Parameter_visualization.set(this, void 0);
        _Parameter_displayname.set(this, void 0);
        _Parameter_hidden.set(this, false);
        _Parameter_lastValidatedValue.set(this, void 0);
        _Parameter_order.set(this, void 0);
        _Parameter_sessionValue.set(this, void 0);
        _Parameter_tooltip.set(this, void 0);
        _Parameter_value.set(this, void 0);
        __classPrivateFieldSet(this, _Parameter_sessionEngine, sessionEngine, "f");
        __classPrivateFieldSet(this, _Parameter_paramDef, paramDef, "f");
        __classPrivateFieldSet(this, _Parameter_id, paramDef.id, "f");
        __classPrivateFieldSet(this, _Parameter_defval, paramDef.defval, "f");
        __classPrivateFieldSet(this, _Parameter_name, paramDef.name, "f");
        __classPrivateFieldSet(this, _Parameter_type, paramDef.type, "f");
        if (paramDef.choices !== undefined)
            __classPrivateFieldSet(this, _Parameter_choices, paramDef.choices, "f");
        if (paramDef.decimalplaces !== undefined)
            __classPrivateFieldSet(this, _Parameter_decimalplaces, +paramDef.decimalplaces, "f");
        if (paramDef.expression !== undefined)
            __classPrivateFieldSet(this, _Parameter_expression, paramDef.expression, "f");
        if (paramDef.format !== undefined)
            __classPrivateFieldSet(this, _Parameter_format, MimeTypeUtils.extendMimeTypes(paramDef.format), "f");
        if (paramDef.min !== undefined)
            __classPrivateFieldSet(this, _Parameter_min, +paramDef.min, "f");
        if (paramDef.max !== undefined)
            __classPrivateFieldSet(this, _Parameter_max, +paramDef.max, "f");
        if (paramDef.visualization !== undefined)
            __classPrivateFieldSet(this, _Parameter_visualization, paramDef.visualization, "f");
        if (paramDef.structure !== undefined)
            __classPrivateFieldSet(this, _Parameter_structure, paramDef.structure, "f");
        if (paramDef.group !== undefined)
            __classPrivateFieldSet(this, _Parameter_group, paramDef.group, "f");
        if (paramDef.settings !== undefined)
            __classPrivateFieldSet(this, _Parameter_settings, paramDef.settings, "f");
        if (paramDef.tooltip !== undefined)
            __classPrivateFieldSet(this, _Parameter_tooltip, paramDef.tooltip, "f");
        if (paramDef.displayname !== undefined)
            __classPrivateFieldSet(this, _Parameter_displayname, paramDef.displayname, "f");
        if (paramDef.order !== undefined)
            __classPrivateFieldSet(this, _Parameter_order, paramDef.order, "f");
        if (paramDef.hidden !== undefined)
            __classPrivateFieldSet(this, _Parameter_hidden, paramDef.hidden, "f");
        if (__classPrivateFieldGet(this, _Parameter_type, "f") === viewer_shared_types_1.PARAMETER_TYPE.BOOL) {
            __classPrivateFieldSet(this, _Parameter_defaultValue, (__classPrivateFieldGet(this, _Parameter_defval, "f") === 'true'), "f");
        }
        else if (__classPrivateFieldGet(this, _Parameter_type, "f") === viewer_shared_types_1.PARAMETER_TYPE.EVEN || __classPrivateFieldGet(this, _Parameter_type, "f") === viewer_shared_types_1.PARAMETER_TYPE.FLOAT || __classPrivateFieldGet(this, _Parameter_type, "f") === viewer_shared_types_1.PARAMETER_TYPE.INT || __classPrivateFieldGet(this, _Parameter_type, "f") === viewer_shared_types_1.PARAMETER_TYPE.ODD) {
            __classPrivateFieldSet(this, _Parameter_defaultValue, +__classPrivateFieldGet(this, _Parameter_defval, "f"), "f");
        }
        else {
            __classPrivateFieldSet(this, _Parameter_defaultValue, __classPrivateFieldGet(this, _Parameter_defval, "f"), "f");
        }
        if (__classPrivateFieldGet(this, _Parameter_type, "f") === viewer_shared_types_1.PARAMETER_TYPE.COLOR) {
            this.convertColor = (color) => {
                return __classPrivateFieldGet(this, _Parameter_converter, "f").toHexColor(color);
            };
        }
        __classPrivateFieldSet(this, _Parameter_value, __classPrivateFieldGet(this, _Parameter_defaultValue, "f"), "f");
        __classPrivateFieldSet(this, _Parameter_sessionValue, __classPrivateFieldGet(this, _Parameter_value, "f"), "f");
        __classPrivateFieldSet(this, _Parameter_lastValidatedValue, __classPrivateFieldGet(this, _Parameter_value, "f"), "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (27)
    get choices() {
        return __classPrivateFieldGet(this, _Parameter_choices, "f");
    }
    get decimalplaces() {
        return __classPrivateFieldGet(this, _Parameter_decimalplaces, "f");
    }
    get defval() {
        return __classPrivateFieldGet(this, _Parameter_defval, "f");
    }
    get displayname() {
        return __classPrivateFieldGet(this, _Parameter_displayname, "f");
    }
    set displayname(value) {
        __classPrivateFieldSet(this, _Parameter_displayname, value, "f");
    }
    get expression() {
        return __classPrivateFieldGet(this, _Parameter_expression, "f");
    }
    get format() {
        return __classPrivateFieldGet(this, _Parameter_format, "f");
    }
    get group() {
        return __classPrivateFieldGet(this, _Parameter_group, "f");
    }
    get hidden() {
        return __classPrivateFieldGet(this, _Parameter_hidden, "f");
    }
    set hidden(value) {
        __classPrivateFieldSet(this, _Parameter_hidden, value, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _Parameter_id, "f");
    }
    get lastValidatedValue() {
        return __classPrivateFieldGet(this, _Parameter_lastValidatedValue, "f");
    }
    get max() {
        return __classPrivateFieldGet(this, _Parameter_max, "f");
    }
    get min() {
        return __classPrivateFieldGet(this, _Parameter_min, "f");
    }
    get name() {
        return __classPrivateFieldGet(this, _Parameter_name, "f");
    }
    get order() {
        return __classPrivateFieldGet(this, _Parameter_order, "f");
    }
    set order(value) {
        __classPrivateFieldSet(this, _Parameter_order, value, "f");
    }
    get sessionValue() {
        return __classPrivateFieldGet(this, _Parameter_sessionValue, "f");
    }
    set sessionValue(value) {
        __classPrivateFieldSet(this, _Parameter_sessionValue, value, "f");
        // emit event
        __classPrivateFieldGet(this, _Parameter_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE_PARAMETER.PARAMETER_SESSION_VALUE_CHANGED, {
            sessionId: __classPrivateFieldGet(this, _Parameter_sessionEngine, "f").id,
            parameterId: __classPrivateFieldGet(this, _Parameter_id, "f"),
            value: value
        });
    }
    get settings() {
        return __classPrivateFieldGet(this, _Parameter_settings, "f");
    }
    get structure() {
        return __classPrivateFieldGet(this, _Parameter_structure, "f");
    }
    get tooltip() {
        return __classPrivateFieldGet(this, _Parameter_tooltip, "f");
    }
    set tooltip(value) {
        __classPrivateFieldSet(this, _Parameter_tooltip, value, "f");
    }
    get type() {
        return __classPrivateFieldGet(this, _Parameter_type, "f");
    }
    get value() {
        return __classPrivateFieldGet(this, _Parameter_value, "f");
    }
    set value(value) {
        __classPrivateFieldSet(this, _Parameter_value, value, "f");
        // emit event
        __classPrivateFieldGet(this, _Parameter_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE_PARAMETER.PARAMETER_VALUE_CHANGED, {
            sessionId: __classPrivateFieldGet(this, _Parameter_sessionEngine, "f").id,
            parameterId: __classPrivateFieldGet(this, _Parameter_id, "f"),
            value: value
        });
        // if customizeOnParameterChange is true, customize the session
        if (__classPrivateFieldGet(this, _Parameter_sessionEngine, "f").customizeOnParameterChange)
            __classPrivateFieldGet(this, _Parameter_sessionEngine, "f").customize();
    }
    get visualization() {
        return __classPrivateFieldGet(this, _Parameter_visualization, "f");
    }
    // #endregion Public Getters And Setters (27)
    // #region Public Methods (4)
    isValid(value, throwError) {
        return (0, viewer_shared_services_1.isValid)(__classPrivateFieldGet(this, _Parameter_paramDef, "f"), value, throwError);
    }
    resetToDefaultValue() {
        __classPrivateFieldSet(this, _Parameter_value, __classPrivateFieldGet(this, _Parameter_defaultValue, "f"), "f");
    }
    resetToSessionValue() {
        __classPrivateFieldSet(this, _Parameter_value, this.sessionValue, "f");
    }
    stringify(val) {
        const value = val !== undefined ? val : this.value;
        return (0, viewer_shared_services_1.stringify)(__classPrivateFieldGet(this, _Parameter_paramDef, "f"), value);
    }
}
exports.Parameter = Parameter;
_Parameter_choices = new WeakMap(), _Parameter_converter = new WeakMap(), _Parameter_decimalplaces = new WeakMap(), _Parameter_defaultValue = new WeakMap(), _Parameter_defval = new WeakMap(), _Parameter_eventEngine = new WeakMap(), _Parameter_expression = new WeakMap(), _Parameter_format = new WeakMap(), _Parameter_group = new WeakMap(), _Parameter_id = new WeakMap(), _Parameter_inputValidator = new WeakMap(), _Parameter_logger = new WeakMap(), _Parameter_max = new WeakMap(), _Parameter_min = new WeakMap(), _Parameter_name = new WeakMap(), _Parameter_paramDef = new WeakMap(), _Parameter_sessionEngine = new WeakMap(), _Parameter_settings = new WeakMap(), _Parameter_structure = new WeakMap(), _Parameter_type = new WeakMap(), _Parameter_visualization = new WeakMap(), _Parameter_displayname = new WeakMap(), _Parameter_hidden = new WeakMap(), _Parameter_lastValidatedValue = new WeakMap(), _Parameter_order = new WeakMap(), _Parameter_sessionValue = new WeakMap(), _Parameter_tooltip = new WeakMap(), _Parameter_value = new WeakMap();
//# sourceMappingURL=Parameter.js.map

/***/ }),

/***/ 76827:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _GumballParameter_sessionEngine;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GumballParameter = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const Parameter_1 = __webpack_require__(14036);
class GumballParameter extends Parameter_1.Parameter {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(paramDef, sessionEngine) {
        super(paramDef, sessionEngine);
        // #region Properties (1)
        _GumballParameter_sessionEngine.set(this, void 0);
        __classPrivateFieldSet(this, _GumballParameter_sessionEngine, sessionEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (9)
    get enableRotation() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.enableRotation;
    }
    get enableScaling() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.enableScaling;
    }
    get enableTranslation() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.enableTranslation;
    }
    get hover() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.hover;
    }
    get interactionType() {
        return 'gumball';
    }
    get nameFilter() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.nameFilter;
    }
    get scale() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.scale;
    }
    get selectionColor() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.selectionColor;
    }
    get space() {
        var _a;
        return (_a = this.getGumballProperties()) === null || _a === void 0 ? void 0 : _a.space;
    }
    // #endregion Public Getters And Setters (9)
    // #region Private Methods (1)
    getGumballProperties() {
        const result = (0, viewer_shared_types_1.validateGumballParameterSettings)(this.settings);
        if (result.success) {
            return this.settings.props;
        }
    }
}
exports.GumballParameter = GumballParameter;
_GumballParameter_sessionEngine = new WeakMap();
//# sourceMappingURL=GumballParameter.js.map

/***/ }),

/***/ 22967:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _SelectionParameter_sessionEngine;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionParameter = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const Parameter_1 = __webpack_require__(14036);
class SelectionParameter extends Parameter_1.Parameter {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(paramDef, sessionEngine) {
        super(paramDef, sessionEngine);
        // #region Properties (1)
        _SelectionParameter_sessionEngine.set(this, void 0);
        __classPrivateFieldSet(this, _SelectionParameter_sessionEngine, sessionEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (6)
    get hover() {
        var _a;
        return (_a = this.getSelectionProperties()) === null || _a === void 0 ? void 0 : _a.hover;
    }
    get interactionType() {
        return 'selection';
    }
    get maximumSelection() {
        var _a;
        return (_a = this.getSelectionProperties()) === null || _a === void 0 ? void 0 : _a.maximumSelection;
    }
    get minimumSelection() {
        var _a;
        return (_a = this.getSelectionProperties()) === null || _a === void 0 ? void 0 : _a.minimumSelection;
    }
    get nameFilter() {
        var _a;
        return (_a = this.getSelectionProperties()) === null || _a === void 0 ? void 0 : _a.nameFilter;
    }
    get selectionColor() {
        var _a;
        return (_a = this.getSelectionProperties()) === null || _a === void 0 ? void 0 : _a.selectionColor;
    }
    // #endregion Public Getters And Setters (6)
    // #region Private Methods (1)
    getSelectionProperties() {
        const result = (0, viewer_shared_types_1.validateSelectionParameterSettings)(this.settings);
        if (result.success) {
            return this.settings.props;
        }
    }
}
exports.SelectionParameter = SelectionParameter;
_SelectionParameter_sessionEngine = new WeakMap();
//# sourceMappingURL=SelectionParameter.js.map

/***/ }),

/***/ 4466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Export = exports.DrawingParameter = exports.GumballParameter = exports.SelectionParameter = exports.FileParameter = exports.Parameter = exports.Output = exports.SessionEngine = exports.SessionOutputData = exports.SessionData = void 0;
const DrawingParameter_1 = __webpack_require__(35330);
Object.defineProperty(exports, "DrawingParameter", ({ enumerable: true, get: function () { return DrawingParameter_1.DrawingParameter; } }));
const Export_1 = __webpack_require__(40457);
Object.defineProperty(exports, "Export", ({ enumerable: true, get: function () { return Export_1.Export; } }));
const FileParameter_1 = __webpack_require__(66906);
Object.defineProperty(exports, "FileParameter", ({ enumerable: true, get: function () { return FileParameter_1.FileParameter; } }));
const GumballParameter_1 = __webpack_require__(76827);
Object.defineProperty(exports, "GumballParameter", ({ enumerable: true, get: function () { return GumballParameter_1.GumballParameter; } }));
const Output_1 = __webpack_require__(774);
Object.defineProperty(exports, "Output", ({ enumerable: true, get: function () { return Output_1.Output; } }));
const Parameter_1 = __webpack_require__(14036);
Object.defineProperty(exports, "Parameter", ({ enumerable: true, get: function () { return Parameter_1.Parameter; } }));
const SelectionParameter_1 = __webpack_require__(22967);
Object.defineProperty(exports, "SelectionParameter", ({ enumerable: true, get: function () { return SelectionParameter_1.SelectionParameter; } }));
const SessionData_1 = __webpack_require__(72265);
Object.defineProperty(exports, "SessionData", ({ enumerable: true, get: function () { return SessionData_1.SessionData; } }));
const SessionEngine_1 = __webpack_require__(42475);
Object.defineProperty(exports, "SessionEngine", ({ enumerable: true, get: function () { return SessionEngine_1.SessionEngine; } }));
const SessionOutputData_1 = __webpack_require__(77124);
Object.defineProperty(exports, "SessionOutputData", ({ enumerable: true, get: function () { return SessionOutputData_1.SessionOutputData; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 89459:
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
var _ExportApi_export, _ExportApi_inputValidator, _ExportApi_logger;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExportApi = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class ExportApi {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(exportD) {
        // #region Properties (3)
        _ExportApi_export.set(this, void 0);
        _ExportApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _ExportApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        __classPrivateFieldSet(this, _ExportApi_export, exportD, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (24)
    get content() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").content;
    }
    get delay() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").delay;
    }
    get dependency() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").dependency;
    }
    get displayname() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").displayname;
    }
    set displayname(value) {
        const scope = 'displayname';
        __classPrivateFieldGet(this, _ExportApi_inputValidator, "f").validateAndError(`ExportApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _ExportApi_export, "f").displayname = value;
        __classPrivateFieldGet(this, _ExportApi_logger, "f").debug(`ExportApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _ExportApi_export, "f").displayname}.`);
    }
    get filename() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").filename;
    }
    get group() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").group;
    }
    get hidden() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").hidden;
    }
    set hidden(value) {
        const scope = 'hidden';
        __classPrivateFieldGet(this, _ExportApi_inputValidator, "f").validateAndError(`ExportApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ExportApi_export, "f").hidden = value;
        __classPrivateFieldGet(this, _ExportApi_logger, "f").debug(`ExportApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _ExportApi_export, "f").hidden}.`);
    }
    get id() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").id;
    }
    get maxWaitTime() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").maxWaitTime;
    }
    set maxWaitTime(value) {
        const scope = 'maxWaitTime';
        __classPrivateFieldGet(this, _ExportApi_inputValidator, "f").validateAndError(`ExportApi.${scope}`, value, 'number');
        __classPrivateFieldGet(this, _ExportApi_export, "f").maxWaitTime = value;
        __classPrivateFieldGet(this, _ExportApi_logger, "f").debug(`ExportApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _ExportApi_export, "f").maxWaitTime}.`);
    }
    get msg() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").msg;
    }
    get name() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").name;
    }
    get order() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").order;
    }
    set order(value) {
        const scope = 'order';
        __classPrivateFieldGet(this, _ExportApi_inputValidator, "f").validateAndError(`ExportApi.${scope}`, value, 'number', false);
        __classPrivateFieldGet(this, _ExportApi_export, "f").order = value;
        __classPrivateFieldGet(this, _ExportApi_logger, "f").debug(`ExportApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _ExportApi_export, "f").order}.`);
    }
    get result() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").result;
    }
    get status_collect() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").status_collect;
    }
    get status_computation() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").status_computation;
    }
    get tooltip() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").tooltip;
    }
    set tooltip(value) {
        const scope = 'tooltip';
        __classPrivateFieldGet(this, _ExportApi_inputValidator, "f").validateAndError(`ExportApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _ExportApi_export, "f").tooltip = value;
        __classPrivateFieldGet(this, _ExportApi_logger, "f").debug(`ExportApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _ExportApi_export, "f").tooltip}.`);
    }
    get type() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").type;
    }
    get uid() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").uid;
    }
    get version() {
        return __classPrivateFieldGet(this, _ExportApi_export, "f").version;
    }
    // #endregion Public Getters And Setters (24)
    // #region Public Methods (2)
    request(parameters = {}) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'request';
            __classPrivateFieldGet(this, _ExportApi_inputValidator, "f").validateAndError(`ExportApi.${scope}`, parameters, 'object');
            return __classPrivateFieldGet(this, _ExportApi_export, "f").request(parameters);
        });
    }
    updateExport() {
        __classPrivateFieldGet(this, _ExportApi_export, "f").updateExport();
    }
}
exports.ExportApi = ExportApi;
_ExportApi_export = new WeakMap(), _ExportApi_inputValidator = new WeakMap(), _ExportApi_logger = new WeakMap();
//# sourceMappingURL=ExportApi.js.map

/***/ }),

/***/ 56590:
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
var _OutputApi_inputValidator, _OutputApi_logger, _OutputApi_output;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutputApi = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const OutputApiData_1 = __webpack_require__(85149);
class OutputApi {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(output) {
        // #region Properties (3)
        _OutputApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _OutputApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _OutputApi_output.set(this, void 0);
        __classPrivateFieldSet(this, _OutputApi_output, output, "f");
        __classPrivateFieldGet(this, _OutputApi_output, "f").updateCallback = (newNode) => {
            if (newNode && newNode.data.findIndex(d => d instanceof OutputApiData_1.OutputApiData) === -1)
                newNode.addData(new OutputApiData_1.OutputApiData(this));
        };
        __classPrivateFieldGet(this, _OutputApi_output, "f").updateCallback(this.node);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (28)
    get bbmax() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").bbmax;
    }
    get bbmin() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").bbmin;
    }
    get chunks() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").chunks;
    }
    get content() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").content;
    }
    get delay() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").delay;
    }
    get dependency() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").dependency;
    }
    get displayname() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").displayname;
    }
    set displayname(value) {
        const scope = 'displayname';
        __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _OutputApi_output, "f").displayname = value;
        __classPrivateFieldGet(this, _OutputApi_logger, "f").debug(`OutputApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _OutputApi_output, "f").displayname}.`);
    }
    get format() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").format;
    }
    get freeze() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").freeze;
    }
    set freeze(value) {
        const scope = 'freeze';
        __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _OutputApi_output, "f").freeze = value;
        __classPrivateFieldGet(this, _OutputApi_logger, "f").debug(`OutputApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _OutputApi_output, "f").freeze}.`);
    }
    get hidden() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").hidden;
    }
    set hidden(value) {
        const scope = 'hidden';
        __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _OutputApi_output, "f").hidden = value;
        __classPrivateFieldGet(this, _OutputApi_logger, "f").debug(`OutputApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _OutputApi_output, "f").hidden}.`);
    }
    get id() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").id;
    }
    get material() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").material;
    }
    get msg() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").msg;
    }
    get name() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").name;
    }
    get node() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").node;
    }
    get order() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").order;
    }
    set order(value) {
        const scope = 'order';
        __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, value, 'number', false);
        __classPrivateFieldGet(this, _OutputApi_output, "f").order = value;
        __classPrivateFieldGet(this, _OutputApi_logger, "f").debug(`OutputApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _OutputApi_output, "f").order}.`);
    }
    get status_collect() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").status_collect;
    }
    get status_computation() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").status_computation;
    }
    get tooltip() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").tooltip;
    }
    set tooltip(value) {
        const scope = 'tooltip';
        __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _OutputApi_output, "f").tooltip = value;
        __classPrivateFieldGet(this, _OutputApi_logger, "f").debug(`OutputApi.${scope}: ${scope} was updated to ${__classPrivateFieldGet(this, _OutputApi_output, "f").tooltip}.`);
    }
    get uid() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").uid;
    }
    get updateCallback() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").updateCallback;
    }
    set updateCallback(value) {
        const scope = 'updateCallback';
        if (value)
            __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, value, 'function', false);
        __classPrivateFieldGet(this, _OutputApi_output, "f").updateCallback = (newNode, oldNode) => __awaiter(this, void 0, void 0, function* () {
            if (newNode && newNode.data.findIndex(d => d instanceof OutputApiData_1.OutputApiData) === -1)
                newNode.addData(new OutputApiData_1.OutputApiData(this));
            if (value)
                yield Promise.resolve(value(newNode, oldNode));
        });
        __classPrivateFieldGet(this, _OutputApi_logger, "f").debug(`OutputApi.${scope}: ${scope} was updated to ${value}.`);
    }
    get version() {
        return __classPrivateFieldGet(this, _OutputApi_output, "f").version;
    }
    // #endregion Public Getters And Setters (28)
    // #region Public Methods (1)
    updateOutputContent(outputContent, preventUpdate = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'updateOutputContent';
            __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, outputContent, 'array');
            __classPrivateFieldGet(this, _OutputApi_inputValidator, "f").validateAndError(`OutputApi.${scope}`, preventUpdate, 'boolean');
            return __classPrivateFieldGet(this, _OutputApi_output, "f").updateOutputContent(outputContent, preventUpdate);
        });
    }
}
exports.OutputApi = OutputApi;
_OutputApi_inputValidator = new WeakMap(), _OutputApi_logger = new WeakMap(), _OutputApi_output = new WeakMap();
//# sourceMappingURL=OutputApi.js.map

/***/ }),

/***/ 30377:
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
var _SessionApi_creationControlCenterSession, _SessionApi_exports, _SessionApi_gltfConverter, _SessionApi_inputValidator, _SessionApi_logger, _SessionApi_outputs, _SessionApi_parameters, _SessionApi_sessionEngine, _SessionApi_stateEngine;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionApi = void 0;
const viewer_creation_control_center_session_1 = __webpack_require__(71479);
const viewer_session_engine_session_engine_1 = __webpack_require__(4466);
const DrawingParameterApi_1 = __webpack_require__(89242);
const ExportApi_1 = __webpack_require__(89459);
const FileParameterApi_1 = __webpack_require__(43234);
const viewer_data_engine_gltf_converter_1 = __webpack_require__(17187);
const GumballParameterApi_1 = __webpack_require__(85942);
const viewer_shared_services_1 = __webpack_require__(8389);
const OutputApi_1 = __webpack_require__(56590);
const ParameterApi_1 = __webpack_require__(46892);
const SelectionParameterApi_1 = __webpack_require__(64322);
const SessionApiData_1 = __webpack_require__(14812);
class SessionApi {
    // #endregion Properties (9)
    // #region Constructors (1)
    constructor(sessionEngine) {
        // #region Properties (9)
        _SessionApi_creationControlCenterSession.set(this, viewer_creation_control_center_session_1.CreationControlCenterSession.instance);
        _SessionApi_exports.set(this, {});
        _SessionApi_gltfConverter.set(this, viewer_data_engine_gltf_converter_1.GLTFConverter.instance);
        _SessionApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _SessionApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _SessionApi_outputs.set(this, {});
        _SessionApi_parameters.set(this, {});
        _SessionApi_sessionEngine.set(this, void 0);
        _SessionApi_stateEngine.set(this, viewer_shared_services_1.StateEngine.instance);
        __classPrivateFieldSet(this, _SessionApi_sessionEngine, sessionEngine, "f");
        if (!__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").initialized)
            throw new viewer_shared_services_1.ShapeDiverViewerSessionError('Session could not be initialized.');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").updateCallback = (newNode) => {
            if (!newNode)
                return;
            if (newNode.data.findIndex(d => d instanceof SessionApiData_1.SessionApiData) === -1)
                newNode.addData(new SessionApiData_1.SessionApiData(this));
        };
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").updateCallback(this.node, this.node);
        for (const o in __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").outputs)
            __classPrivateFieldGet(this, _SessionApi_outputs, "f")[o] = new OutputApi_1.OutputApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").outputs[o]);
        for (const e in __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").exports)
            __classPrivateFieldGet(this, _SessionApi_exports, "f")[e] = new ExportApi_1.ExportApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").exports[e]);
        for (const p in __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters) {
            if (__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p] instanceof viewer_session_engine_session_engine_1.FileParameter) {
                __classPrivateFieldGet(this, _SessionApi_parameters, "f")[p] = new FileParameterApi_1.FileParameterApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p]);
            }
            else if (__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p] instanceof viewer_session_engine_session_engine_1.SelectionParameter) {
                __classPrivateFieldGet(this, _SessionApi_parameters, "f")[p] = new SelectionParameterApi_1.SelectionParameterApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p]);
            }
            else if (__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p] instanceof viewer_session_engine_session_engine_1.GumballParameter) {
                __classPrivateFieldGet(this, _SessionApi_parameters, "f")[p] = new GumballParameterApi_1.GumballParameterApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p]);
            }
            else if (__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p] instanceof viewer_session_engine_session_engine_1.DrawingParameter) {
                __classPrivateFieldGet(this, _SessionApi_parameters, "f")[p] = new DrawingParameterApi_1.DrawingParameterApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p]);
            }
            else {
                __classPrivateFieldGet(this, _SessionApi_parameters, "f")[p] = new ParameterApi_1.ParameterApi(__classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").parameters[p]);
            }
        }
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (30)
    get automaticSceneUpdate() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").automaticSceneUpdate;
    }
    set automaticSceneUpdate(value) {
        const scope = 'automaticSceneUpdate';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").automaticSceneUpdate = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get commitParameters() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").settingsEngine.general.commitParameters;
    }
    set commitParameters(value) {
        const scope = 'commitParameters';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").settingsEngine.general.commitParameters = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get commitSettings() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").settingsEngine.general.commitSettings;
    }
    set commitSettings(value) {
        const scope = 'commitSettings';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").settingsEngine.general.commitSettings = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get customizeOnParameterChange() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customizeOnParameterChange;
    }
    set customizeOnParameterChange(value) {
        const scope = 'customizeOnParameterChange';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customizeOnParameterChange = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get excludeViewports() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").excludeViewports;
    }
    set excludeViewports(value) {
        const scope = 'excludeViewports';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'stringArray');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").excludeViewports = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get exports() {
        return __classPrivateFieldGet(this, _SessionApi_exports, "f");
    }
    get guid() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").guid;
    }
    get id() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").id;
    }
    get initialized() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").initialized;
    }
    get jwtToken() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").jwtToken;
    }
    get loadSdtf() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").loadSdtf;
    }
    set loadSdtf(value) {
        const scope = 'loadSdtf';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").loadSdtf = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get modelState() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").modelState;
    }
    get modelViewUrl() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").modelViewUrl;
    }
    get node() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").node;
    }
    get outputs() {
        return __classPrivateFieldGet(this, _SessionApi_outputs, "f");
    }
    get parameterDefaultValues() {
        const parameterDefaultValues = {};
        for (const key in this.parameters)
            parameterDefaultValues[key] = this.parameters[key].defval;
        return parameterDefaultValues;
    }
    get parameterSessionValues() {
        const parameterSessionValues = {};
        for (const key in this.parameters)
            parameterSessionValues[key] = this.parameters[key].sessionValue;
        return parameterSessionValues;
    }
    get parameterValues() {
        const parameterValues = {};
        for (const key in this.parameters)
            parameterValues[key] = this.parameters[key].value;
        return parameterValues;
    }
    get parameters() {
        return __classPrivateFieldGet(this, _SessionApi_parameters, "f");
    }
    get refreshJwtToken() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").refreshJwtToken;
    }
    set refreshJwtToken(value) {
        const scope = 'refreshJwtToken';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'function', false);
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").refreshJwtToken = value;
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
    }
    get ticket() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").ticket;
    }
    get updateCallback() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").updateCallback;
    }
    set updateCallback(value) {
        const scope = 'updateCallback';
        if (value)
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'function', false);
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").updateCallback = (newNode, oldNode) => __awaiter(this, void 0, void 0, function* () {
            if (newNode.data.findIndex(d => d instanceof SessionApiData_1.SessionApiData) === -1)
                newNode.addData(new SessionApiData_1.SessionApiData(this));
            if (value)
                yield Promise.resolve(value(newNode, oldNode));
        });
        __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was updated to ${value}.`);
    }
    // #endregion Public Getters And Setters (30)
    // #region Public Methods (31)
    applySettings(response, sections) {
        const scope = 'applySettings';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, response, 'object');
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, sections, 'object', false);
        return __classPrivateFieldGet(this, _SessionApi_creationControlCenterSession, "f").applySettings(this.id, response, sections);
    }
    canGoBack() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").canGoBack();
    }
    canGoForward() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").canGoForward();
    }
    cancelCustomization() {
        __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").cancelCustomization();
    }
    close() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _SessionApi_creationControlCenterSession, "f").closeSessionEngine(this.id);
        });
    }
    convertToGlTF(convertForAr = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            for (const r in __classPrivateFieldGet(this, _SessionApi_stateEngine, "f").viewportEngines)
                (_a = __classPrivateFieldGet(this, _SessionApi_stateEngine, "f").viewportEngines[r]) === null || _a === void 0 ? void 0 : _a.update('SessionApi.convertToGlTF');
            const result = yield __classPrivateFieldGet(this, _SessionApi_gltfConverter, "f").convert(this.node, convertForAr);
            return new Blob([result], { type: 'application/octet-stream' });
        });
    }
    createModelState(parameterValues, omitSessionParameterValues, image, data, arScene) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'createModelState';
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, parameterValues, 'object', false);
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, omitSessionParameterValues, 'boolean', false);
            return yield __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").createModelState(parameterValues, omitSessionParameterValues, image, data, arScene);
        });
    }
    customize(parameterValues, force = false, waitForViewportUpdate = false) {
        const scope = 'customize';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, parameterValues, 'object', false);
        // if there are parameter values specified, we set them directly
        // the validation happens in the setter of the ParameterApi
        if (parameterValues)
            for (const p in parameterValues)
                this.parameters[p].value = parameterValues[p];
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, force, 'boolean', false);
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, waitForViewportUpdate, 'boolean', false);
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customize(force, waitForViewportUpdate);
    }
    customizeParallel(parameterValues) {
        const scope = 'customizeParallel';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, parameterValues, 'object');
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customizeParallel(parameterValues);
    }
    customizeResult(parameterValues) {
        const scope = 'customizeResult';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, parameterValues, 'object');
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customizeParallel(parameterValues, false);
    }
    customizeWithModelState(modelState) {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customizeWithModelState(modelState);
    }
    getExportById(id) {
        const scope = 'getExportById';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, id, 'string');
        return __classPrivateFieldGet(this, _SessionApi_exports, "f")[id];
    }
    getExportByName(name) {
        const scope = 'getExportByName';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, name, 'string');
        return Object.values(__classPrivateFieldGet(this, _SessionApi_exports, "f")).filter(e => e.name === name);
    }
    getExportByType(type) {
        const scope = 'getExportByType';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, type, 'string');
        return Object.values(__classPrivateFieldGet(this, _SessionApi_exports, "f")).filter(e => e.type === type);
    }
    getOutputByFormat(format) {
        const scope = 'getOutputByFormat';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, format, 'string');
        return Object.values(__classPrivateFieldGet(this, _SessionApi_outputs, "f")).filter(o => o.format.includes(format));
    }
    getOutputById(id) {
        const scope = 'getOutputById';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, id, 'string');
        return __classPrivateFieldGet(this, _SessionApi_outputs, "f")[id];
    }
    getOutputByName(name) {
        const scope = 'getOutputByName';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, name, 'string');
        return Object.values(__classPrivateFieldGet(this, _SessionApi_outputs, "f")).filter(o => o.name === name);
    }
    getParameterById(id) {
        const scope = 'getParameterById';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, id, 'string');
        return __classPrivateFieldGet(this, _SessionApi_parameters, "f")[id];
    }
    getParameterByName(name) {
        const scope = 'getParameterByName';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, name, 'string');
        return Object.values(__classPrivateFieldGet(this, _SessionApi_parameters, "f")).filter(p => p.name === name);
    }
    getParameterByType(type) {
        const scope = 'getParameterByType';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, type, 'string');
        return Object.values(__classPrivateFieldGet(this, _SessionApi_parameters, "f")).filter(p => p.type === type);
    }
    goBack() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").goBack();
    }
    goForward() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").goForward();
    }
    loadCachedOutputs(outputs) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").loadCachedOutputsParallel(outputs);
        });
    }
    requestExports(body, loadOutputs, maxWaitMsec) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'requestExports';
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, body, 'object');
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, loadOutputs, 'boolean', false);
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, maxWaitMsec, 'number', false);
            return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").requestExports(body, loadOutputs, maxWaitMsec);
        });
    }
    resetParameterValues(force = false, waitForViewportUpdate = false) {
        const scope = 'resetParameterValues';
        for (const p in this.parameters)
            this.parameters[p].value = this.parameters[p].defval;
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, force, 'boolean', false);
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").customize(force, waitForViewportUpdate);
    }
    resetSettings(sections) {
        const scope = 'applySettings';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, sections, 'object', false);
        return __classPrivateFieldGet(this, _SessionApi_creationControlCenterSession, "f").resetSettings(this.id, sections);
    }
    saveDefaultParameterValues() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").saveDefaultParameterValues();
    }
    saveSettings(viewportId) {
        const scope = 'saveDefaultParameterValues';
        __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, viewportId, 'string', false);
        return __classPrivateFieldGet(this, _SessionApi_creationControlCenterSession, "f").saveSettings(this.id, viewportId);
    }
    saveUiProperties() {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").saveUiProperties();
    }
    setJwtToken(value) {
        return __awaiter(this, void 0, void 0, function* () {
            const scope = 'setJwtToken';
            __classPrivateFieldGet(this, _SessionApi_inputValidator, "f").validateAndError(`SessionApi.${scope}`, value, 'string', false);
            yield __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").setJwtToken(value);
            __classPrivateFieldGet(this, _SessionApi_logger, "f").debug(`SessionApi.${scope}: ${scope} was set to ${value}`);
            return;
        });
    }
    updateOutputs(waitForViewportUpdate = false) {
        return __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").updateOutputs(undefined, waitForViewportUpdate);
    }
    uploadFileParameters(values) {
        return __awaiter(this, void 0, void 0, function* () {
            const fileParameters = values || {};
            const fileParameterIds = yield __classPrivateFieldGet(this, _SessionApi_sessionEngine, "f").uploadFileParameters(fileParameters);
            return fileParameterIds;
        });
    }
}
exports.SessionApi = SessionApi;
_SessionApi_creationControlCenterSession = new WeakMap(), _SessionApi_exports = new WeakMap(), _SessionApi_gltfConverter = new WeakMap(), _SessionApi_inputValidator = new WeakMap(), _SessionApi_logger = new WeakMap(), _SessionApi_outputs = new WeakMap(), _SessionApi_parameters = new WeakMap(), _SessionApi_sessionEngine = new WeakMap(), _SessionApi_stateEngine = new WeakMap();
//# sourceMappingURL=SessionApi.js.map

/***/ }),

/***/ 85149:
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
var _OutputApiData_api;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OutputApiData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class OutputApiData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    /**
     * Creates a OutputApi data node.
     *
     * @param _data the data as key- value pairs
     * @param id the id
     */
    constructor(api, id, version) {
        super(id, version);
        // #region Properties (1)
        _OutputApiData_api.set(this, void 0);
        __classPrivateFieldSet(this, _OutputApiData_api, api, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get api() {
        return __classPrivateFieldGet(this, _OutputApiData_api, "f");
    }
    set api(value) {
        __classPrivateFieldSet(this, _OutputApiData_api, value, "f");
    }
    // #endregion Public Getters And Setters (2)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new OutputApiData(this.api, this.id, this.version);
    }
}
exports.OutputApiData = OutputApiData;
_OutputApiData_api = new WeakMap();
//# sourceMappingURL=OutputApiData.js.map

/***/ }),

/***/ 14812:
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
var _SessionApiData_api;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionApiData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class SessionApiData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    /**
     * Creates a SessionApi data node.
     *
     * @param _data the data as key- value pairs
     * @param id the id
     */
    constructor(api, id, version) {
        super(id, version);
        // #region Properties (1)
        _SessionApiData_api.set(this, void 0);
        __classPrivateFieldSet(this, _SessionApiData_api, api, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get api() {
        return __classPrivateFieldGet(this, _SessionApiData_api, "f");
    }
    set api(value) {
        __classPrivateFieldSet(this, _SessionApiData_api, value, "f");
    }
    // #endregion Public Getters And Setters (2)
    // #region Public Methods (1)
    /**
     * Clones the scene graph data.
     */
    clone() {
        return new SessionApiData(this.api, this.id, this.version);
    }
}
exports.SessionApiData = SessionApiData;
_SessionApiData_api = new WeakMap();
//# sourceMappingURL=SessionApiData.js.map

/***/ }),

/***/ 89242:
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
var _DrawingParameterApi_parameter;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DrawingParameterApi = void 0;
const ParameterApi_1 = __webpack_require__(46892);
class DrawingParameterApi extends ParameterApi_1.ParameterApi {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(parameter) {
        super(parameter);
        // #region Properties (1)
        _DrawingParameterApi_parameter.set(this, void 0);
        __classPrivateFieldSet(this, _DrawingParameterApi_parameter, parameter, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (2)
    get geometry() {
        return __classPrivateFieldGet(this, _DrawingParameterApi_parameter, "f").geometry;
    }
    get restrictions() {
        return __classPrivateFieldGet(this, _DrawingParameterApi_parameter, "f").restrictions;
    }
}
exports.DrawingParameterApi = DrawingParameterApi;
_DrawingParameterApi_parameter = new WeakMap();
//# sourceMappingURL=DrawingParameterApi.js.map

/***/ }),

/***/ 43234:
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
var _FileParameterApi_logger, _FileParameterApi_parameter;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileParameterApi = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const ParameterApi_1 = __webpack_require__(46892);
class FileParameterApi extends ParameterApi_1.ParameterApi {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(parameter) {
        super(parameter);
        // #region Properties (2)
        _FileParameterApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _FileParameterApi_parameter.set(this, void 0);
        __classPrivateFieldSet(this, _FileParameterApi_parameter, parameter, "f");
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getFilename(fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return __classPrivateFieldGet(this, _FileParameterApi_parameter, "f").getFilename(fileId);
        });
    }
    upload() {
        return __classPrivateFieldGet(this, _FileParameterApi_parameter, "f").upload();
    }
}
exports.FileParameterApi = FileParameterApi;
_FileParameterApi_logger = new WeakMap(), _FileParameterApi_parameter = new WeakMap();
//# sourceMappingURL=FileParameterApi.js.map

/***/ }),

/***/ 85942:
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
var _GumballParameterApi_parameter;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GumballParameterApi = void 0;
const ParameterApi_1 = __webpack_require__(46892);
class GumballParameterApi extends ParameterApi_1.ParameterApi {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(parameter) {
        super(parameter);
        // #region Properties (1)
        _GumballParameterApi_parameter.set(this, void 0);
        __classPrivateFieldSet(this, _GumballParameterApi_parameter, parameter, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (9)
    get enableRotation() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").enableRotation;
    }
    get enableScaling() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").enableScaling;
    }
    get enableTranslation() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").enableTranslation;
    }
    get hover() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").hover;
    }
    get interactionType() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").interactionType;
    }
    get nameFilter() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").nameFilter;
    }
    get scale() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").scale;
    }
    get selectionColor() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").selectionColor;
    }
    get space() {
        return __classPrivateFieldGet(this, _GumballParameterApi_parameter, "f").space;
    }
}
exports.GumballParameterApi = GumballParameterApi;
_GumballParameterApi_parameter = new WeakMap();
//# sourceMappingURL=GumballParameterApi.js.map

/***/ }),

/***/ 46892:
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
var _ParameterApi_inputValidator, _ParameterApi_logger, _ParameterApi_parameter;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ParameterApi = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class ParameterApi {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(parameter) {
        // #region Properties (3)
        _ParameterApi_inputValidator.set(this, viewer_shared_services_1.InputValidator.instance);
        _ParameterApi_logger.set(this, viewer_shared_services_1.Logger.instance);
        _ParameterApi_parameter.set(this, void 0);
        __classPrivateFieldSet(this, _ParameterApi_parameter, parameter, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (25)
    get choices() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").choices;
    }
    get decimalplaces() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").decimalplaces;
    }
    get defval() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").defval;
    }
    get displayname() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").displayname;
    }
    set displayname(value) {
        const scope = 'displayname';
        __classPrivateFieldGet(this, _ParameterApi_inputValidator, "f").validateAndError(`ParameterApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _ParameterApi_parameter, "f").displayname = value;
        __classPrivateFieldGet(this, _ParameterApi_logger, "f").debug(`ParameterApi.${scope}: ${scope} was set to ${__classPrivateFieldGet(this, _ParameterApi_parameter, "f").displayname}.`);
    }
    get expression() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").expression;
    }
    get format() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").format;
    }
    get group() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").group;
    }
    get hidden() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").hidden;
    }
    set hidden(value) {
        const scope = 'hidden';
        __classPrivateFieldGet(this, _ParameterApi_inputValidator, "f").validateAndError(`ParameterApi.${scope}`, value, 'boolean');
        __classPrivateFieldGet(this, _ParameterApi_parameter, "f").hidden = value;
        __classPrivateFieldGet(this, _ParameterApi_logger, "f").debug(`ParameterApi.${scope}: ${scope} was set to ${__classPrivateFieldGet(this, _ParameterApi_parameter, "f").hidden}.`);
    }
    get id() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").id;
    }
    get max() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").max;
    }
    get min() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").min;
    }
    get name() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").name;
    }
    get order() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").order;
    }
    set order(value) {
        const scope = 'order';
        __classPrivateFieldGet(this, _ParameterApi_inputValidator, "f").validateAndError(`ParameterApi.${scope}`, value, 'number', false);
        __classPrivateFieldGet(this, _ParameterApi_parameter, "f").order = value;
        __classPrivateFieldGet(this, _ParameterApi_logger, "f").debug(`ParameterApi.${scope}: ${scope} was set to ${__classPrivateFieldGet(this, _ParameterApi_parameter, "f").order}.`);
    }
    get sessionValue() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").sessionValue;
    }
    set sessionValue(value) {
        const scope = 'sessionValue';
        __classPrivateFieldGet(this, _ParameterApi_parameter, "f").sessionValue = value;
        __classPrivateFieldGet(this, _ParameterApi_logger, "f").debug(`ParameterApi.${scope}: ${scope} was set to ${__classPrivateFieldGet(this, _ParameterApi_parameter, "f").value}.`);
    }
    get settings() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").settings;
    }
    get structure() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").structure;
    }
    get tooltip() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").tooltip;
    }
    set tooltip(value) {
        const scope = 'tooltip';
        __classPrivateFieldGet(this, _ParameterApi_inputValidator, "f").validateAndError(`ParameterApi.${scope}`, value, 'string', false);
        __classPrivateFieldGet(this, _ParameterApi_parameter, "f").tooltip = value;
        __classPrivateFieldGet(this, _ParameterApi_logger, "f").debug(`ParameterApi.${scope}: ${scope} was set to ${__classPrivateFieldGet(this, _ParameterApi_parameter, "f").tooltip}.`);
    }
    get type() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").type;
    }
    get value() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").value;
    }
    set value(value) {
        const scope = 'value';
        this.isValid(value, true);
        __classPrivateFieldGet(this, _ParameterApi_parameter, "f").value = value;
        __classPrivateFieldGet(this, _ParameterApi_logger, "f").debug(`ParameterApi.${scope}: ${scope} was set to ${__classPrivateFieldGet(this, _ParameterApi_parameter, "f").value}.`);
    }
    get visualization() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").visualization;
    }
    // #endregion Public Getters And Setters (25)
    // #region Public Methods (4)
    isValid(value, throwError) {
        const scope = 'isValid';
        __classPrivateFieldGet(this, _ParameterApi_inputValidator, "f").validateAndError(`ParameterApi.${scope}`, throwError, 'boolean', false);
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").isValid(value, throwError);
    }
    resetToDefaultValue() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").resetToDefaultValue();
    }
    resetToSessionValue() {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").resetToSessionValue();
    }
    stringify(value) {
        return __classPrivateFieldGet(this, _ParameterApi_parameter, "f").stringify(value);
    }
}
exports.ParameterApi = ParameterApi;
_ParameterApi_inputValidator = new WeakMap(), _ParameterApi_logger = new WeakMap(), _ParameterApi_parameter = new WeakMap();
//# sourceMappingURL=ParameterApi.js.map

/***/ }),

/***/ 64322:
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
var _SelectionParameterApi_parameter;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectionParameterApi = void 0;
const ParameterApi_1 = __webpack_require__(46892);
class SelectionParameterApi extends ParameterApi_1.ParameterApi {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(parameter) {
        super(parameter);
        // #region Properties (1)
        _SelectionParameterApi_parameter.set(this, void 0);
        __classPrivateFieldSet(this, _SelectionParameterApi_parameter, parameter, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (5)
    get hover() {
        return __classPrivateFieldGet(this, _SelectionParameterApi_parameter, "f").hover;
    }
    get interactionType() {
        return __classPrivateFieldGet(this, _SelectionParameterApi_parameter, "f").interactionType;
    }
    get maximumSelection() {
        return __classPrivateFieldGet(this, _SelectionParameterApi_parameter, "f").maximumSelection;
    }
    get minimumSelection() {
        return __classPrivateFieldGet(this, _SelectionParameterApi_parameter, "f").minimumSelection;
    }
    get nameFilter() {
        return __classPrivateFieldGet(this, _SelectionParameterApi_parameter, "f").nameFilter;
    }
    get selectionColor() {
        return __classPrivateFieldGet(this, _SelectionParameterApi_parameter, "f").selectionColor;
    }
}
exports.SelectionParameterApi = SelectionParameterApi;
_SelectionParameterApi_parameter = new WeakMap();
//# sourceMappingURL=SelectionParameterApi.js.map

/***/ }),

/***/ 64718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialGemData = exports.MaterialSpecularGlossinessData = exports.MaterialShadowData = exports.MaterialUnlitData = exports.MaterialStandardData = exports.ShapeDiverResponseModelComputationStatus = exports.Sphere = exports.Box = exports.EVENTTYPE_TASK = exports.EVENTTYPE_DRAWING_TOOLS = exports.EVENTTYPE_GUMBALL = exports.EVENTTYPE_INTERACTION = exports.EVENTTYPE_VIEWPORT = exports.EVENTTYPE_SESSION = exports.EVENTTYPE_SCENE = exports.EVENTTYPE_RENDERING = exports.EVENTTYPE_PARAMETER = exports.EVENTTYPE_OUTPUT = exports.EVENTTYPE_CAMERA = exports.EVENTTYPE = exports.TASK_TYPE = exports.SESSION_SETTINGS_MODE = exports.SDTF_TYPEHINT = exports.TEXTURE_FILTERING = exports.TEXTURE_WRAPPING = exports.MATERIAL_TYPE = exports.MATERIAL_SHADING = exports.MATERIAL_ALPHA = exports.MATERIAL_SIDE = exports.PRIMITIVE_MODE = exports.LOGGING_LEVEL = exports.TAG3D_JUSTIFICATION = exports.PARAMETER_VISUALIZATION = exports.EXPORT_TYPE = exports.PARAMETER_TYPE = exports.TreeNode = exports.Tree = exports.version = exports.generalOptions = exports.sceneTree = exports.removeListener = exports.addListener = exports.sessions = exports.createSession = exports.OutputApiData = exports.SessionApiData = exports.IDrawingParameterJsonSchema = exports.IGumballParameterJsonSchema = exports.ISelectionParameterJsonSchema = exports.IInteractionParameterJsonSchema = void 0;
exports.isViewerCameraError = exports.isViewerLightError = exports.isViewerViewportError = exports.isViewerSessionError = exports.isViewerSettingsError = exports.isViewerWebGLError = exports.isViewerEnvironmentMapError = exports.isViewerDataProcessingError = exports.isViewerUnknownError = exports.isViewerError = exports.ShapeDiverGeometryBackendResponseErrorType = exports.ShapeDiverGeometryBackendResponseError = exports.ShapeDiverGeometryBackendRequestError = exports.ShapeDiverGeometryBackendError = exports.ShapeDiverViewerDrawingToolsError = exports.ShapeDiverViewerInteractionError = exports.ShapeDiverViewerValidationError = exports.ShapeDiverViewerCameraError = exports.ShapeDiverViewerLightError = exports.ShapeDiverViewerArError = exports.ShapeDiverViewerUnknownError = exports.ShapeDiverViewerViewportError = exports.ShapeDiverViewerSessionError = exports.ShapeDiverViewerSettingsError = exports.ShapeDiverViewerWebGLError = exports.ShapeDiverViewerEnvironmentMapError = exports.ShapeDiverViewerDataProcessingError = exports.ShapeDiverViewerError = exports.ShapeDiverViewerErrorType = exports.SessionOutputData = exports.SessionData = exports.SdtfPrimitiveTypeGuard = exports.SDTFItemData = exports.SDTFAttributeData = exports.SDTFAttributesData = exports.SDTFOverviewData = exports.CustomData = exports.HTMLElementAnchorData = exports.HTMLElementAnchorImageData = exports.HTMLElementAnchorTextData = exports.HTMLElementAnchorCustomData = exports.MaterialVariantsData = exports.PrimitiveData = exports.AttributeData = exports.GeometryData = exports.AnimationData = exports.MapData = exports.MaterialBasicLineData = exports.MaterialMultiPointData = exports.MaterialPointData = void 0;
exports.stringify = exports.isValid = exports.isViewerGeometryBackendResponseError = exports.isViewerGeometryBackendRequestError = exports.isViewerGeometryBackendGenericError = exports.isViewerGeometryBackendError = exports.isViewerDrawingToolsError = exports.isViewerInteractionError = exports.isViewerValidationError = exports.isARError = void 0;
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
Object.defineProperty(exports, "IDrawingParameterJsonSchema", ({ enumerable: true, get: function () { return viewer_shared_types_1.IDrawingParameterJsonSchema; } }));
Object.defineProperty(exports, "IGumballParameterJsonSchema", ({ enumerable: true, get: function () { return viewer_shared_types_1.IGumballParameterJsonSchema; } }));
Object.defineProperty(exports, "IInteractionParameterJsonSchema", ({ enumerable: true, get: function () { return viewer_shared_types_1.IInteractionParameterJsonSchema; } }));
Object.defineProperty(exports, "ISelectionParameterJsonSchema", ({ enumerable: true, get: function () { return viewer_shared_types_1.ISelectionParameterJsonSchema; } }));
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
const viewer_shared_math_1 = __webpack_require__(67275);
Object.defineProperty(exports, "Box", ({ enumerable: true, get: function () { return viewer_shared_math_1.Box; } }));
Object.defineProperty(exports, "Sphere", ({ enumerable: true, get: function () { return viewer_shared_math_1.Sphere; } }));
const main_1 = __webpack_require__(28081);
Object.defineProperty(exports, "createSession", ({ enumerable: true, get: function () { return main_1.createSession; } }));
Object.defineProperty(exports, "sessions", ({ enumerable: true, get: function () { return main_1.sessions; } }));
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
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
Object.defineProperty(exports, "TAG3D_JUSTIFICATION", ({ enumerable: true, get: function () { return viewer_data_engine_shared_types_1.TAG3D_JUSTIFICATION; } }));
const viewer_session_engine_session_engine_1 = __webpack_require__(4466);
Object.defineProperty(exports, "SessionData", ({ enumerable: true, get: function () { return viewer_session_engine_session_engine_1.SessionData; } }));
Object.defineProperty(exports, "SessionOutputData", ({ enumerable: true, get: function () { return viewer_session_engine_session_engine_1.SessionOutputData; } }));
const viewer_shared_node_tree_1 = __webpack_require__(41652);
Object.defineProperty(exports, "Tree", ({ enumerable: true, get: function () { return viewer_shared_node_tree_1.Tree; } }));
Object.defineProperty(exports, "TreeNode", ({ enumerable: true, get: function () { return viewer_shared_node_tree_1.TreeNode; } }));
const OutputApiData_1 = __webpack_require__(85149);
Object.defineProperty(exports, "OutputApiData", ({ enumerable: true, get: function () { return OutputApiData_1.OutputApiData; } }));
const SessionApiData_1 = __webpack_require__(14812);
Object.defineProperty(exports, "SessionApiData", ({ enumerable: true, get: function () { return SessionApiData_1.SessionApiData; } }));
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
Object.defineProperty(exports, "ShapeDiverResponseModelComputationStatus", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus; } }));
const sdk_geometry_api_sdk_v2_2 = __webpack_require__(50059);
Object.defineProperty(exports, "EXPORT_TYPE", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_2.ShapeDiverResponseExportDefinitionType; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 28081:
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
exports.createSession = exports.sessions = void 0;
const viewer_creation_control_center_session_1 = __webpack_require__(71479);
const viewer_shared_services_1 = __webpack_require__(8389);
const SessionApi_1 = __webpack_require__(30377);
const viewer_api_general_1 = __webpack_require__(27444);
const creationControlCenterSession = viewer_creation_control_center_session_1.CreationControlCenterSession.instance;
const inputValidator = viewer_shared_services_1.InputValidator.instance;
const logger = viewer_shared_services_1.Logger.instance;
/**
 * The sessions that are currently being used.
 */
exports.sessions = {};
// Whenever a session or viewport is added or removed, this update is called.
creationControlCenterSession.updateSessions = (sessionEngines) => {
    for (const s in sessionEngines)
        if (!exports.sessions[s])
            exports.sessions[s] = new SessionApi_1.SessionApi(sessionEngines[s]);
    for (const s in exports.sessions)
        if (!sessionEngines[s])
            delete exports.sessions[s];
};
/**
 * Create and initialize a session with a model hosted on a
 * {@link https://help.shapediver.com/doc/Geometry-Backend.1863942173.html|ShapeDiver Geometry Backend},
 * using the provided ticket/guid and modelViewUrl.
 * Returns a session api object allowing to control the session.
 *
 * A JWT can be specified for authorizing the API calls to the Geometry Backend.
 * The model's settings on the Geometry Backend might require a JWT to be provided.
 *
 * By default the outputs of the model for its default parameter values will be loaded.
 *
 * An optional identifier for the session can be provided. This identifier can be used to retrieve the
 * api object from {@link sessions}. In case no identifier is provided, a unique one will be generated.
 *
 * @param properties.ticket The ticket for direct embedding of the model represented by the session. This identifies the model on the Geometry Backend. If no ticket was provided, a {@link guid} has to be provided instead.
 * @param properties.guid The geometry backend model id (guid). This identifies the model on the Geometry Backend. A {@link jwtToken} is needed for authentication. If no guid was provided, a {@link ticket} has to be provided instead.
 * @param properties.modelViewUrl The modelViewUrl of the {@link https://help.shapediver.com/doc/Geometry-Backend.1863942173.html|ShapeDiver Geometry Backend} hosting the model.
 * @param properties.jwtToken The JWT to use for authorizing the API calls to the Geometry Backend.
 * @param properties.id The unique identifier to use for the session.
 * @param properties.waitForOutputs Option to wait for the outputs to be loaded, or return immediately after creation of the session. (default: true)
 * @param properties.loadOutputs Option to load the outputs, or not load them until the first call of {@link ISession.customize}. (default: true)
 * @param properties.loadSdtf Option to load the SDTF data. The data is not loaded by default as it can be quite large. (default: false)
 * @param properties.excludeViewports Option to exclude some viewports from the start. Can be accessed via {@link ISession.excludeViewports}.
 * @param properties.initialParameterValues The initial set of parameter values to use. Map from parameter id to parameter value. The default value will be used for any parameter not specified.
 * @param properties.allowOutputLoading Option to allow the outputs to be loaded, or to prevent them from being loaded. (default: true)
 * @param properties.modelStateId The optional model state id to use for the session. If not provided, no model state will be loaded.
 * @param properties.modelStateValidationMode The optional model state validation mode to use for the session. If not provided, the default validation mode of the Geometry SDK will be used.
 * @returns
 */
const createSession = (properties) => __awaiter(void 0, void 0, void 0, function* () {
    (0, viewer_api_general_1.showConsoleMessage)();
    logger.debug(`createSession: Creating and initializing session with properties ${JSON.stringify(properties)}.`);
    // input validation
    inputValidator.validateAndError('createSession', properties, 'object');
    inputValidator.validateAndError('createSession', properties.ticket, 'string', false);
    inputValidator.validateAndError('createSession', properties.guid, 'string', false);
    inputValidator.validateAndError('createSession', properties.modelViewUrl, 'string');
    inputValidator.validateAndError('createSession', properties.jwtToken, 'string', false);
    inputValidator.validateAndError('createSession', properties.id, 'string', false);
    inputValidator.validateAndError('createSession', properties.waitForOutputs, 'boolean', false);
    inputValidator.validateAndError('createSession', properties.loadOutputs, 'boolean', false);
    inputValidator.validateAndError('createSession', properties.loadSdtf, 'boolean', false);
    inputValidator.validateAndError('createSession', properties.excludeViewports, 'stringArray', false);
    inputValidator.validateAndError('createSession', properties.initialParameterValues, 'object', false);
    inputValidator.validateAndError('createSession', properties.allowOutputLoading, 'boolean', false);
    inputValidator.validateAndError('createSession', properties.modelStateId, 'string', false);
    inputValidator.validateAndError('createSession', properties.modelStateValidationMode, 'boolean', false);
    if (properties.initialParameterValues)
        for (const p in properties.initialParameterValues)
            inputValidator.validateAndError('createSession', properties.initialParameterValues[p], 'string');
    // we either expect a ticket or guid + jwtToken, error if we get both
    if (properties.ticket !== undefined && properties.guid !== undefined)
        throw new viewer_shared_services_1.ShapeDiverViewerSessionError('createSession: A ticket and a guid were provided for the session creation. Please only provide one or the other. The session was not created.');
    // we either expect a ticket or guid + jwtToken, error if we get none
    if (properties.ticket === undefined && properties.guid === undefined)
        throw new viewer_shared_services_1.ShapeDiverViewerSessionError('createSession: Neither a ticket nor a guid were provided for the session creation. Please provide one or the other. The session was not created.');
    // we either expect a guid + jwtToken, error if the jwtToken is missing
    if (properties.guid !== undefined && properties.jwtToken === undefined)
        throw new viewer_shared_services_1.ShapeDiverViewerSessionError('createSession: When creating a session with a guid, a jwtToken is required, please provide one. The session was not created.');
    if (properties.waitForOutputs === undefined)
        properties.waitForOutputs = true;
    if (properties.loadOutputs === undefined)
        properties.loadOutputs = true;
    const sessionEngine = yield creationControlCenterSession.createSessionEngine(properties);
    exports.sessions[sessionEngine.id] = new SessionApi_1.SessionApi(sessionEngine);
    return exports.sessions[sessionEngine.id];
});
exports.createSession = createSession;
//# sourceMappingURL=main.js.map

/***/ })

}]);
//# sourceMappingURL=vendor.common-cc35aa30.bundle.js.map