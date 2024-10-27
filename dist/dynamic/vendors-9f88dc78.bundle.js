"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[514],{

/***/ 27444:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.generalOptions = exports.showConsoleMessage = exports.version = exports.sceneTree = exports.removeListener = exports.addListener = void 0;
const viewer_shared_build_data_1 = __webpack_require__(93668);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_data_engine_geometry_engine_1 = __webpack_require__(50432);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
// #endregion Interfaces (1)
// #region Classes (1)
class GeneralOptions {
    // #region Public Getters And Setters (10)
    get caching() {
        return {
            enable: httpClient.enableCaching,
            excludedQueryParameters: httpClient.excludedQueryParameters,
            maxCacheSize: httpClient.maxCacheSize
        };
    }
    set caching(value) {
        inputValidator.validateAndError('caching', value, 'object', true);
        inputValidator.validateAndError('caching', value.enable, 'boolean');
        inputValidator.validateAndError('caching', value.excludedQueryParameters, 'stringArray');
        inputValidator.validateAndError('caching', value.maxCacheSize, 'number');
        if (value.enable !== undefined)
            httpClient.enableCaching = value.enable;
        if (value.excludedQueryParameters !== undefined)
            httpClient.excludedQueryParameters = value.excludedQueryParameters;
        if (value.maxCacheSize !== undefined)
            httpClient.maxCacheSize = value.maxCacheSize;
        logger.debug(`caching: CoggingLevel was set to: ${value}`);
    }
    get consoleBranding() {
        return consoleBranding;
    }
    set consoleBranding(value) {
        inputValidator.validateAndError('consoleBranding', value, 'boolean');
        consoleBranding = value;
        logger.debug(`consoleBranding: ConsoleBranding was set to: ${value}`);
    }
    get loggingLevel() {
        return logger.loggingLevel;
    }
    set loggingLevel(value) {
        inputValidator.validateAndError('loggingLevel', value, 'enum', true, Object.values(viewer_shared_services_1.LOGGING_LEVEL));
        logger.loggingLevel = value;
        logger.debug(`loggingLevel: LoggingLevel was set to: ${value}`);
    }
    get parallelGlTFProcessing() {
        return geometryEngine.parallelGlTFProcessing;
    }
    set parallelGlTFProcessing(value) {
        inputValidator.validateAndError('parallelGlTFProcessing', value, 'number');
        geometryEngine.parallelGlTFProcessing = value;
        logger.debug(`parallelGlTFProcessing: ParallelGlTFProcessing was set to: ${value}`);
    }
    get showMessages() {
        return logger.showMessages;
    }
    set showMessages(value) {
        inputValidator.validateAndError('showMessages', value, 'boolean');
        logger.showMessages = value;
        logger.debug(`showMessages: ShowMessages was set to: ${value}`);
    }
}
// #endregion Classes (1)
// #region Variables (12)
const httpClient = viewer_shared_services_1.HttpClient.instance;
const inputValidator = viewer_shared_services_1.InputValidator.instance;
const logger = viewer_shared_services_1.Logger.instance;
const eventEngine = viewer_shared_services_1.EventEngine.instance;
const geometryEngine = viewer_data_engine_geometry_engine_1.GeometryEngine.instance;
let createdConsoleMessage = false, consoleBranding = true;
/**
 * Adds an event listener.
 *
 * @param type The type of event.
 * @param cb The callback.
 * @returns
 */
const addListener = (type, cb) => {
    inputValidator.validateAndError('addListener', type, 'string');
    inputValidator.validateAndError('addListener', cb, 'function');
    logger.debug(`addListener: Event Listener was registered for ${type}.`);
    return eventEngine.addListener(type, cb);
};
exports.addListener = addListener;
/**
 * Removes an event listener.
 *
 * @param id The id of the listener.
 * @returns
 */
const removeListener = (id) => {
    inputValidator.validateAndError('removeListener', id, 'string');
    logger.debug(`removeListener: Removing event listener with id ${id}.`);
    return eventEngine.removeListener(id);
};
exports.removeListener = removeListener;
/**
 * The scene tree that is used to store the scene.
 * The scene tree contains a unique node and child nodes for each session,
 * and can also be used to add your own nodes.
 */
exports.sceneTree = viewer_shared_node_tree_1.Tree.instance;
/**
 * The version of the viewer.
 */
exports.version = viewer_shared_build_data_1.build_data.build_version.replace('3.', '');
const showConsoleMessage = () => {
    if (createdConsoleMessage === true)
        return;
    createdConsoleMessage = true;
    if (consoleBranding === true) {
        console.log(`Powered by:
   _____  __                         ____   _                   
  / ___/ / /_   ____ _ ____   ___   / __ \\ (_)_   __ ___   _____
  \\__ \\ / __ \\ / __ '// __ \\ / _ \\ / / / // /| | / // _ \\ / ___/
 ___/ // / / // /_/ // /_/ //  __// /_/ // / | |/ //  __// /    
/____//_/ /_/ \\__,_// .___/ \\___//_____//_/  |___/ \\___//_/     
                   /_/                                          
ShapeDiver Viewer 3, Version ${viewer_shared_build_data_1.build_data.build_version.replace('3.', '')}
Visit us at https://shapediver.com/ and find out more!
`);
    }
    else {
        console.log(`ShapeDiver Viewer 3, Version ${viewer_shared_build_data_1.build_data.build_version.replace('3.', '')}`);
    }
};
exports.showConsoleMessage = showConsoleMessage;
/**
 * General Viewer options that are used everywhere.
 * - loggingLevel: The logging level that is used.
 * - showMessages: Option to show/hide messages in the browser console.
 * - parallelGlTFProcessing: The number of glTFs that are downloaded and processed at the same time.
 * - consoleBranding: When set to false, the branding in the viewer console will be limited to a single line.
 * - caching: Caching Options.
 */
exports.generalOptions = new GeneralOptions();
// #endregion Variables (12)
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 23913:
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
var _CreationControlCenterSession_eventEngine, _CreationControlCenterSession_logger, _CreationControlCenterSession_stateEngine, _CreationControlCenterSession_uuidGenerator, _CreationControlCenterSession_firstSessionEngine;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreationControlCenterSession = void 0;
const viewer_shared_build_data_1 = __webpack_require__(93668);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_settings_1 = __webpack_require__(65199);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_session_engine_session_engine_1 = __webpack_require__(4466);
const SessionGlobalAccessObject_1 = __webpack_require__(9796);
class CreationControlCenterSession {
    constructor() {
        // #region Properties (8)
        _CreationControlCenterSession_eventEngine.set(this, viewer_shared_services_1.EventEngine.instance);
        _CreationControlCenterSession_logger.set(this, viewer_shared_services_1.Logger.instance);
        _CreationControlCenterSession_stateEngine.set(this, viewer_shared_services_1.StateEngine.instance);
        _CreationControlCenterSession_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        _CreationControlCenterSession_firstSessionEngine.set(this, void 0);
        this.sessionEngines = {};
        // #endregion Private Methods (2)
    }
    // #endregion Properties (8)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (5)
    applySettings(sessionId, response, sections) {
        sections = sections || {};
        this.sessionEngines[sessionId].applySettings(response, sections);
        const promises = [];
        if (sections.session && sections.session.parameter && sections.session.parameter.value)
            promises.push(this.sessionEngines[sessionId].customize());
        for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines) {
            const viewportEngineState = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r];
            if ((viewportEngineState && viewportEngineState.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST && __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f") && sessionId === __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f").id) ||
                (viewportEngineState && viewportEngineState.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL && sessionId === viewportEngineState.sessionSettingsId)) {
                viewportEngineState.settingsAssigned.reset();
                promises.push(new Promise(resolve => {
                    var _a;
                    (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.then(() => {
                        resolve();
                    });
                }));
                viewportEngineState.applySettings(sections.viewport);
            }
        }
        return new Promise(resolve => Promise.all(promises).then(() => resolve()));
    }
    closeSessionEngine(id) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.sessionEngines[id])
                return;
            __classPrivateFieldGet(this, _CreationControlCenterSession_logger, "f").debugLow(`CreationControlCenter.closeSession: Closing session ${id}.`);
            if (((_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[id]) === null || _a === void 0 ? void 0 : _a.initialized.resolved) === false)
                yield new Promise(resolve => { var _a; (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[id]) === null || _a === void 0 ? void 0 : _a.initialized.then(() => resolve()); });
            yield this.sessionEngines[id].close();
            // remove from rendering engines (also directly assigned)
            for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines) {
                const viewportEngineState = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r];
                if (viewportEngineState && (viewportEngineState.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL && viewportEngineState.sessionSettingsId === id) ||
                    (viewportEngineState && viewportEngineState.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST && __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f") === this.sessionEngines[id])) {
                    viewportEngineState.reset();
                }
            }
            if (__classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f") === this.sessionEngines[id]) {
                const engines = Object.values(this.sessionEngines).filter(s => s.id !== id);
                __classPrivateFieldSet(this, _CreationControlCenterSession_firstSessionEngine, engines.length === 0 ? undefined : engines[0], "f");
                if (__classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f")) {
                    if (!__classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[__classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f").id])
                        return;
                    Object.values(__classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines).forEach(s => { if (s)
                        s.isFirstSession = false; });
                    __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[__classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f").id].isFirstSession = true;
                    const promises = [];
                    for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines) {
                        const viewportEngineState = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r];
                        if (((_b = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _b === void 0 ? void 0 : _b.settingsAssigned.resolved) === false) {
                            if (viewportEngineState && viewportEngineState.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST) {
                                promises.push(viewportEngineState.settingsAssigned);
                                this.assignSettings(viewportEngineState.id, (_c = __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f")) === null || _c === void 0 ? void 0 : _c.id);
                            }
                        }
                    }
                    yield Promise.all(promises);
                    if (this.updateSessions)
                        this.updateSessions(this.sessionEngines);
                }
            }
            (_d = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[id]) === null || _d === void 0 ? void 0 : _d.settingsRegistered.reset();
            this.sessionEngines[id] = undefined;
            delete this.sessionEngines[id];
            delete __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[id];
            __classPrivateFieldGet(this, _CreationControlCenterSession_logger, "f").debug('CreationControlCenter.closeSessionEngine: Session closed.');
            for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines)
                (_e = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _e === void 0 ? void 0 : _e.update('CreationControlCenter.closeSessionEngine');
            if (this.updateSessions)
                this.updateSessions(this.sessionEngines);
            __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_CLOSED, { sessionId: id });
        });
    }
    createSessionEngine(properties) {
        var _a, _b, _c, _d, _e;
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = __classPrivateFieldGet(this, _CreationControlCenterSession_uuidGenerator, "f").create();
            const sessionEngineId = properties.id || __classPrivateFieldGet(this, _CreationControlCenterSession_uuidGenerator, "f").create();
            properties.id = sessionEngineId;
            properties.loadOutputs = properties.allowOutputLoading === false ? false : properties.loadOutputs;
            try {
                const eventStart = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION, id: eventId, progress: 0, status: 'Creating session', data: { sessionId: sessionEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
                // check if the given id is valid
                if (this.sessionEngines[sessionEngineId]) {
                    const eventClose = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION, id: eventId, progress: 0.1, status: 'Closing session with same id', data: { sessionId: sessionEngineId } };
                    __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventClose);
                    __classPrivateFieldGet(this, _CreationControlCenterSession_logger, "f").warn(`CreationControlCenter.createSession: Session with this id (${sessionEngineId}) already exists. Closing initial instance.`);
                    yield this.closeSessionEngine(sessionEngineId);
                }
                // create the actual session 
                const sessionEngine = new viewer_session_engine_session_engine_1.SessionEngine({
                    id: sessionEngineId,
                    guid: properties.guid,
                    ticket: properties.ticket,
                    modelViewUrl: properties.modelViewUrl,
                    excludeViewports: properties.excludeViewports,
                    buildVersion: viewer_shared_build_data_1.build_data.build_version,
                    buildDate: viewer_shared_build_data_1.build_data.build_date,
                    jwtToken: properties.jwtToken,
                    allowOutputLoading: properties.allowOutputLoading === undefined ? true : properties.allowOutputLoading,
                    loadSdtf: properties.loadSdtf === undefined ? false : properties.loadSdtf,
                    modelStateId: properties.modelStateId
                });
                __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionEngineId] = new SessionGlobalAccessObject_1.SessionGlobalAccessObject(sessionEngine);
                const eventInit = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION, id: eventId, progress: 0.25, status: 'Initializing session.', data: { sessionId: sessionEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventInit);
                yield sessionEngine.init(properties.initialParameterValues);
                if (properties.loadOutputs !== false) {
                    if (properties.waitForOutputs !== false) {
                        yield sessionEngine.updateOutputs({
                            eventId,
                            type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION,
                            progressRange: {
                                min: 0.25,
                                max: 0.9
                            },
                            data: { sessionId: sessionEngineId }
                        });
                        (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _a === void 0 ? void 0 : _a.initialOutputsLoaded.resolve(true);
                        __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_INITIAL_OUTPUTS_LOADED, { sessionId: sessionEngineId });
                    }
                    else {
                        sessionEngine.updateOutputs({
                            eventId,
                            type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION,
                            progressRange: {
                                min: 0.25,
                                max: 0.9
                            },
                            data: { sessionId: sessionEngineId }
                        }).then(() => {
                            var _a, _b;
                            (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _a === void 0 ? void 0 : _a.initialOutputsLoaded.resolve(true);
                            __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_INITIAL_OUTPUTS_LOADED, { sessionId: sessionEngineId });
                            for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines)
                                (_b = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _b === void 0 ? void 0 : _b.update('CreationControlCenter.createSessionEngine.waitForOutputs=false');
                        });
                    }
                }
                // save the session
                this.sessionEngines[sessionEngineId] = sessionEngine;
                (_b = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _b === void 0 ? void 0 : _b.initialized.resolve(true);
                __classPrivateFieldGet(this, _CreationControlCenterSession_logger, "f").debug(`CreationControlCenter.createSession: Session(${sessionEngine.id}) created.`);
                if (!__classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f")) {
                    if (__classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionEngine.id]) {
                        __classPrivateFieldSet(this, _CreationControlCenterSession_firstSessionEngine, sessionEngine, "f");
                        Object.values(__classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines).forEach(s => { if (s)
                            s.isFirstSession = false; });
                        __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[__classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f").id].isFirstSession = true;
                    }
                }
                const promises = [];
                for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines) {
                    const viewportEngine = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r];
                    if (((_c = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _c === void 0 ? void 0 : _c.settingsAssigned.resolved) === false) {
                        if (viewportEngine && viewportEngine.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST || (viewportEngine && viewportEngine.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL && viewportEngine.sessionSettingsId === sessionEngineId)) {
                            promises.push(viewportEngine.settingsAssigned);
                            this.assignSettings(viewportEngine.id, sessionEngineId);
                        }
                    }
                }
                yield Promise.all(promises);
                for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines)
                    (_d = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _d === void 0 ? void 0 : _d.update('CreationControlCenter.createSessionEngine');
                if (this.updateSessions)
                    this.updateSessions(this.sessionEngines);
                const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION, id: eventId, progress: 1, status: 'Session created', data: { sessionId: sessionEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
                __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_CREATED, { sessionId: sessionEngineId });
                return sessionEngine;
            }
            catch (e) {
                // special behavior, if this was the only session, display the error on the logo screen
                if ((0, viewer_shared_services_1.isViewerError)(e)) {
                    if ((this.sessionEngines[sessionEngineId] && Object.values(this.sessionEngines).length === 1) || (!this.sessionEngines[sessionEngineId] && Object.values(this.sessionEngines).length === 0)) {
                        for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines)
                            (_e = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _e === void 0 ? void 0 : _e.displayErrorMessage(e.message);
                    }
                }
                const eventCancel1 = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION, id: eventId, progress: 0.9, status: 'Session created failed, closing session', data: { sessionId: sessionEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventCancel1);
                yield this.closeSessionEngine(sessionEngineId);
                const eventCancel2 = { type: viewer_shared_types_1.TASK_TYPE.SESSION_CREATION, id: eventId, progress: 1, status: 'Session created failed', data: { sessionId: sessionEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterSession_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, eventCancel2);
                throw e;
            }
        });
    }
    resetSettings(sessionId, sections) {
        var _a;
        sections = sections || {};
        this.sessionEngines[sessionId].resetSettings(sections);
        const promises = [];
        if (sections.session && sections.session.parameter && sections.session.parameter.value)
            promises.push(this.sessionEngines[sessionId].customize());
        for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines) {
            const viewportEngine = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r];
            if ((viewportEngine && viewportEngine.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST && __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f") && sessionId === __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f").id) ||
                (viewportEngine && viewportEngine.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL && sessionId === viewportEngine.sessionSettingsId)) {
                (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.reset();
                promises.push(new Promise(resolve => {
                    var _a;
                    (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.then(() => {
                        resolve();
                    });
                }));
                viewportEngine.applySettings(sections.viewport);
            }
        }
        return new Promise(resolve => Promise.all(promises).then(() => resolve()));
    }
    saveSettings(sessionId, viewportId) {
        return __awaiter(this, void 0, void 0, function* () {
            const session = this.sessionEngines[sessionId];
            yield session.saveUiProperties(false);
            const settingsObject = this.createSettingsObject(sessionId, viewportId);
            const response = yield session.saveSettings(settingsObject);
            if (response) {
                __classPrivateFieldGet(this, _CreationControlCenterSession_logger, "f").debug(`Session(${sessionId}).saveSettings: Saved settings.`);
            }
            else {
                throw new viewer_shared_services_1.ShapeDiverViewerSessionError(`Session(${sessionId}).saveSettings: Could not save settings.`);
            }
            return response;
        });
    }
    // #endregion Public Methods (5)
    // #region Private Methods (2)
    assignSettings(viewportEngineId, sessionId, updateViewport = false) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const viewportEngine = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[viewportEngineId];
            if (!viewportEngine)
                return;
            if (((_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionId]) === null || _a === void 0 ? void 0 : _a.initialized.resolved) === true) {
                // immediate
                viewportEngine.assignSettingsEngine(this.sessionEngines[sessionId].settingsEngine);
                yield viewportEngine.applySettings(undefined, undefined, updateViewport);
            }
            else {
                yield new Promise(resolve => {
                    var _a;
                    (_a = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").sessionEngines[sessionId]) === null || _a === void 0 ? void 0 : _a.initialized.then(() => __awaiter(this, void 0, void 0, function* () {
                        viewportEngine.assignSettingsEngine(this.sessionEngines[sessionId].settingsEngine);
                        yield viewportEngine.applySettings(undefined, undefined, updateViewport);
                        resolve();
                    }));
                });
            }
        });
    }
    createSettingsObject(sessionId, viewportId) {
        const session = this.sessionEngines[sessionId];
        session.settingsEngine.settings.build_version = viewer_shared_build_data_1.build_data.build_version;
        session.settingsEngine.settings.build_date = viewer_shared_build_data_1.build_data.build_date;
        session.settingsEngine.settings.settings_version = viewer_settings_1.latestVersion;
        let viewportEngine;
        if (viewportId && __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[viewportId]) {
            viewportEngine = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[viewportId];
        }
        else {
            for (const r in __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines) {
                const viewportEngineToCheck = __classPrivateFieldGet(this, _CreationControlCenterSession_stateEngine, "f").viewportEngines[r];
                if ((viewportEngineToCheck && viewportEngineToCheck.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST && __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f") && sessionId === __classPrivateFieldGet(this, _CreationControlCenterSession_firstSessionEngine, "f").id) ||
                    (viewportEngineToCheck && viewportEngineToCheck.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL && sessionId === viewportEngineToCheck.sessionSettingsId)) {
                    viewportEngine = viewportEngineToCheck;
                    continue;
                }
            }
        }
        if (viewportEngine)
            viewportEngine.saveSettings();
        return session.settingsEngine.settings;
    }
}
exports.CreationControlCenterSession = CreationControlCenterSession;
_CreationControlCenterSession_eventEngine = new WeakMap(), _CreationControlCenterSession_logger = new WeakMap(), _CreationControlCenterSession_stateEngine = new WeakMap(), _CreationControlCenterSession_uuidGenerator = new WeakMap(), _CreationControlCenterSession_firstSessionEngine = new WeakMap();
//# sourceMappingURL=CreationControlCenterSession.js.map

/***/ }),

/***/ 9796:
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
var _SessionGlobalAccessObject_sessionEngine, _SessionGlobalAccessObject_initialOutputsLoaded, _SessionGlobalAccessObject_initialized, _SessionGlobalAccessObject_isFirstSession, _SessionGlobalAccessObject_settingsRegistered;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SessionGlobalAccessObject = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class SessionGlobalAccessObject {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor(sessionEngine) {
        // #region Properties (5)
        _SessionGlobalAccessObject_sessionEngine.set(this, void 0);
        _SessionGlobalAccessObject_initialOutputsLoaded.set(this, new viewer_shared_services_1.StatePromise());
        _SessionGlobalAccessObject_initialized.set(this, new viewer_shared_services_1.StatePromise());
        _SessionGlobalAccessObject_isFirstSession.set(this, false);
        _SessionGlobalAccessObject_settingsRegistered.set(this, new viewer_shared_services_1.StatePromise());
        __classPrivateFieldSet(this, _SessionGlobalAccessObject_sessionEngine, sessionEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (9)
    get canUploadGLTF() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_sessionEngine, "f").canUploadGLTF;
    }
    get id() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_sessionEngine, "f").id;
    }
    get initialOutputsLoaded() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_initialOutputsLoaded, "f");
    }
    get initialized() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_initialized, "f");
    }
    get isFirstSession() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_isFirstSession, "f");
    }
    set isFirstSession(value) {
        __classPrivateFieldSet(this, _SessionGlobalAccessObject_isFirstSession, value, "f");
    }
    get modelViewUrl() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_sessionEngine, "f").modelViewUrl;
    }
    get settingsEngine() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_sessionEngine, "f").settingsEngine;
    }
    get settingsRegistered() {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_settingsRegistered, "f");
    }
    // #endregion Public Getters And Setters (9)
    // #region Public Methods (1)
    uploadGLTF(gltf, name) {
        return __classPrivateFieldGet(this, _SessionGlobalAccessObject_sessionEngine, "f").uploadGLTF(gltf, name);
    }
}
exports.SessionGlobalAccessObject = SessionGlobalAccessObject;
_SessionGlobalAccessObject_sessionEngine = new WeakMap(), _SessionGlobalAccessObject_initialOutputsLoaded = new WeakMap(), _SessionGlobalAccessObject_initialized = new WeakMap(), _SessionGlobalAccessObject_isFirstSession = new WeakMap(), _SessionGlobalAccessObject_settingsRegistered = new WeakMap();
//# sourceMappingURL=SessionGlobalAccessObject.js.map

/***/ }),

/***/ 71479:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreationControlCenterSession = void 0;
const CreationControlCenterSession_1 = __webpack_require__(23913);
Object.defineProperty(exports, "CreationControlCenterSession", ({ enumerable: true, get: function () { return CreationControlCenterSession_1.CreationControlCenterSession; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 20313:
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
var _CreationControlCenterViewport_eventEngine, _CreationControlCenterViewport_logger, _CreationControlCenterViewport_sceneTree, _CreationControlCenterViewport_stateEngine, _CreationControlCenterViewport_uuidGenerator;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreationControlCenterViewport = void 0;
const viewer_shared_math_1 = __webpack_require__(67275);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_rendering_engine_rendering_engine_threejs_1 = __webpack_require__(27068);
const ViewportGlobalAccessObject_1 = __webpack_require__(69478);
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
class CreationControlCenterViewport {
    constructor() {
        // #region Properties (8)
        _CreationControlCenterViewport_eventEngine.set(this, viewer_shared_services_1.EventEngine.instance);
        _CreationControlCenterViewport_logger.set(this, viewer_shared_services_1.Logger.instance);
        _CreationControlCenterViewport_sceneTree.set(this, viewer_shared_node_tree_1.Tree.instance);
        _CreationControlCenterViewport_stateEngine.set(this, viewer_shared_services_1.StateEngine.instance);
        _CreationControlCenterViewport_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        this.viewportEngines = {};
        // #endregion Private Methods (1)
    }
    // #endregion Properties (8)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (4)
    applyViewportSettings(viewportId, settings, sections = { ar: false, scene: false, camera: false, light: false, environment: false, general: false }) {
        var _a;
        sections = sections || {};
        const settingsEngine = new viewer_shared_services_1.SettingsEngine();
        settingsEngine.loadSettings(settings);
        const promises = [];
        (_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportId]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.reset();
        promises.push(new Promise(resolve => {
            var _a;
            (_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportId]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.then(() => {
                resolve();
            });
        }));
        this.viewportEngines[viewportId].applySettings(sections, settingsEngine);
        return new Promise(resolve => Promise.all(promises).then(() => resolve()));
    }
    closeViewportEngine(id) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.viewportEngines[id])
                return;
            __classPrivateFieldGet(this, _CreationControlCenterViewport_logger, "f").debugLow(`CreationControlCenter.closeViewportEngine: Closing viewport ${id}.`);
            if (((_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[id]) === null || _a === void 0 ? void 0 : _a.initialized.resolved) === false)
                yield new Promise(resolve => { var _a; (_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[id]) === null || _a === void 0 ? void 0 : _a.initialized.then(() => resolve()); });
            (_b = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[id]) === null || _b === void 0 ? void 0 : _b.settingsAssigned.reset();
            (_c = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[id]) === null || _c === void 0 ? void 0 : _c.environmentMapLoaded.reset();
            (_d = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[id]) === null || _d === void 0 ? void 0 : _d.initialized.reset();
            yield this.viewportEngines[id].close();
            this.viewportEngines[id] = undefined;
            delete this.viewportEngines[id];
            delete __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[id];
            __classPrivateFieldGet(this, _CreationControlCenterViewport_logger, "f").debug('CreationControlCenter.closeViewportEngine: Viewport closed.');
            if (this.updateViewports)
                this.updateViewports(this.viewportEngines);
            __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_CLOSED, { viewportId: id });
        });
    }
    createViewportEngine(properties) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = __classPrivateFieldGet(this, _CreationControlCenterViewport_uuidGenerator, "f").create();
            const viewportEngineId = properties.id || __classPrivateFieldGet(this, _CreationControlCenterViewport_uuidGenerator, "f").create();
            properties.id = viewportEngineId;
            try {
                const eventStart = { type: viewer_shared_types_1.TASK_TYPE.VIEWPORT_CREATION, id: eventId, progress: 0, status: 'Creating viewport', data: { viewportId: viewportEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
                // check if the given id is valid
                if (this.viewportEngines[viewportEngineId]) {
                    const eventClose = { type: viewer_shared_types_1.TASK_TYPE.VIEWPORT_CREATION, id: eventId, progress: 0.1, status: 'Closing viewport with same id', data: { viewportId: viewportEngineId } };
                    __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventClose);
                    __classPrivateFieldGet(this, _CreationControlCenterViewport_logger, "f").warn(`CreationControlCenter.createViewport: Viewer with this id (${viewportEngineId}) already exists. Closing initial instance.`);
                    yield this.closeViewportEngine(viewportEngineId);
                }
                const viewportEngine = new viewer_rendering_engine_rendering_engine_threejs_1.RenderingEngine(properties);
                __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId] = new ViewportGlobalAccessObject_1.ViewportGlobalAccessObject(viewportEngine);
                this.viewportEngines[viewportEngineId] = viewportEngine;
                viewportEngine.start();
                viewportEngine.cameraEngine.createDefaultCameras();
                if (properties.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.MANUAL) {
                    if (!properties.sessionSettingsId)
                        throw new viewer_shared_services_1.ShapeDiverViewerViewportError('Session with sessionSettingsMode MANUAL needs to have a sessionSettingsId.');
                    const sessionSettingsId = properties.sessionSettingsId;
                    if (__classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionSettingsId]) {
                        yield this.assignSettings(viewportEngine.id, sessionSettingsId, true);
                    }
                    else {
                        // in createSession
                    }
                }
                else if (properties.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.FIRST) {
                    const firstSessionEngine = Object.values(__classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines).find(sessionEngine => sessionEngine && sessionEngine.isFirstSession === true);
                    if (firstSessionEngine) {
                        yield this.assignSettings(viewportEngine.id, firstSessionEngine.id, true);
                    }
                    else {
                        // in createSession
                    }
                }
                if (viewportEngine.sessionSettingsMode === viewer_shared_services_1.SESSION_SETTINGS_MODE.NONE &&
                    viewportEngine.visibility === viewer_rendering_engine_rendering_engine_1.VISIBILITY_MODE.SESSION) {
                    viewportEngine.show = true;
                }
                else if (viewportEngine.visibility === viewer_rendering_engine_rendering_engine_1.VISIBILITY_MODE.INSTANT) {
                    viewportEngine.show = true;
                }
                else if (viewportEngine.visibility === viewer_rendering_engine_rendering_engine_1.VISIBILITY_MODE.SESSION) {
                    // wait for settings to load before showing the scene
                    if (__classPrivateFieldGet(this, _CreationControlCenterViewport_sceneTree, "f").root.boundingBox.isEmpty()) {
                        __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").addListener(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_CHANGE, (e) => {
                            var _a, _b;
                            const event = e;
                            if (event.viewportId === viewportEngine.id) {
                                const boundingBox = new viewer_shared_math_1.Box(event.boundingBox.min, event.boundingBox.max);
                                if (boundingBox.isEmpty()) {
                                    viewportEngine.show = false;
                                }
                                else {
                                    if ((_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.resolved) {
                                        viewportEngine.show = true;
                                    }
                                    else {
                                        (_b = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId]) === null || _b === void 0 ? void 0 : _b.settingsAssigned.then(() => {
                                            viewportEngine.show = true;
                                        });
                                    }
                                }
                            }
                        });
                    }
                    else {
                        if ((_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId]) === null || _a === void 0 ? void 0 : _a.settingsAssigned.resolved) {
                            viewportEngine.show = true;
                        }
                        else {
                            (_b = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId]) === null || _b === void 0 ? void 0 : _b.settingsAssigned.then(() => {
                                viewportEngine.show = true;
                            });
                        }
                    }
                }
                (_c = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId]) === null || _c === void 0 ? void 0 : _c.initialized.resolve(true);
                __classPrivateFieldGet(this, _CreationControlCenterViewport_logger, "f").debug(`CreationControlCenter.createViewport: Viewport(${viewportEngineId}) created.`);
                const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.VIEWPORT_CREATION, id: eventId, progress: 1, status: 'Viewport created', data: { viewportId: viewportEngineId } };
                if (this.updateViewports)
                    this.updateViewports(this.viewportEngines);
                __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_CREATED, { viewportId: viewportEngineId });
                __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
                return this.viewportEngines[viewportEngineId];
            }
            catch (e) {
                const eventCancel1 = { type: viewer_shared_types_1.TASK_TYPE.VIEWPORT_CREATION, id: eventId, progress: 0.9, status: 'Viewport created failed, closing viewport', data: { viewportId: viewportEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventCancel1);
                try {
                    yield this.closeViewportEngine(viewportEngineId);
                }
                catch ( /* empty */_d) { /* empty */ }
                const eventCancel2 = { type: viewer_shared_types_1.TASK_TYPE.VIEWPORT_CREATION, id: eventId, progress: 1, status: 'Viewport created failed, exiting', data: { viewportId: viewportEngineId } };
                __classPrivateFieldGet(this, _CreationControlCenterViewport_eventEngine, "f").emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, eventCancel2);
                throw e;
            }
        });
    }
    getViewportSettings(viewportId) {
        const viewportEngine = this.viewportEngines[viewportId];
        if (!viewportEngine)
            throw new viewer_shared_services_1.ShapeDiverViewerViewportError('Viewport with id ' + viewportId + ' could not be found.');
        const settingsEngine = new viewer_shared_services_1.SettingsEngine();
        viewportEngine.saveSettings(settingsEngine);
        return settingsEngine.settings;
    }
    // #endregion Public Methods (4)
    // #region Private Methods (1)
    assignSettings(viewportEngineId, sessionEngineId, updateViewports = false) {
        return __awaiter(this, void 0, void 0, function* () {
            const viewportEngine = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").viewportEngines[viewportEngineId];
            if (!viewportEngine)
                return;
            if (__classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionEngineId] && __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionEngineId].initialized.resolved === true) {
                // immediate
                viewportEngine.assignSettingsEngine(__classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionEngineId].settingsEngine);
                yield viewportEngine.applySettings(undefined, undefined, updateViewports);
            }
            else {
                yield new Promise(resolve => {
                    var _a;
                    (_a = __classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionEngineId]) === null || _a === void 0 ? void 0 : _a.initialized.then(() => __awaiter(this, void 0, void 0, function* () {
                        if (__classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionEngineId]) {
                            viewportEngine.assignSettingsEngine(__classPrivateFieldGet(this, _CreationControlCenterViewport_stateEngine, "f").sessionEngines[sessionEngineId].settingsEngine);
                            yield viewportEngine.applySettings(undefined, undefined, updateViewports);
                        }
                        resolve();
                    }));
                });
            }
        });
    }
}
exports.CreationControlCenterViewport = CreationControlCenterViewport;
_CreationControlCenterViewport_eventEngine = new WeakMap(), _CreationControlCenterViewport_logger = new WeakMap(), _CreationControlCenterViewport_sceneTree = new WeakMap(), _CreationControlCenterViewport_stateEngine = new WeakMap(), _CreationControlCenterViewport_uuidGenerator = new WeakMap();
//# sourceMappingURL=CreationControlCenterViewport.js.map

/***/ }),

/***/ 69478:
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
var _ViewportGlobalAccessObject_boundingBoxCreated, _ViewportGlobalAccessObject_initialized, _ViewportGlobalAccessObject_settingsAssigned, _ViewportGlobalAccessObject_viewportEngine, _ViewportGlobalAccessObject_busy, _ViewportGlobalAccessObject_environmentMapLoaded;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ViewportGlobalAccessObject = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class ViewportGlobalAccessObject {
    // #endregion Properties (6)
    // #region Constructors (1)
    constructor(viewportEngine) {
        // #region Properties (6)
        _ViewportGlobalAccessObject_boundingBoxCreated.set(this, new viewer_shared_services_1.StatePromise());
        _ViewportGlobalAccessObject_initialized.set(this, new viewer_shared_services_1.StatePromise());
        _ViewportGlobalAccessObject_settingsAssigned.set(this, new viewer_shared_services_1.StatePromise());
        _ViewportGlobalAccessObject_viewportEngine.set(this, void 0);
        _ViewportGlobalAccessObject_busy.set(this, []);
        _ViewportGlobalAccessObject_environmentMapLoaded.set(this, new viewer_shared_services_1.StatePromise());
        __classPrivateFieldSet(this, _ViewportGlobalAccessObject_viewportEngine, viewportEngine, "f");
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (9)
    get boundingBoxCreated() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_boundingBoxCreated, "f");
    }
    get busy() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_busy, "f");
    }
    get environmentMapLoaded() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_environmentMapLoaded, "f");
    }
    set environmentMapLoaded(value) {
        __classPrivateFieldSet(this, _ViewportGlobalAccessObject_environmentMapLoaded, value, "f");
    }
    get id() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").id;
    }
    get initialized() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_initialized, "f");
    }
    get sessionSettingsId() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").sessionSettingsId;
    }
    get sessionSettingsMode() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").sessionSettingsMode;
    }
    get settingsAssigned() {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_settingsAssigned, "f");
    }
    // #endregion Public Getters And Setters (9)
    // #region Public Methods (6)
    applySettings(sections, settingsEngine, updateViewport) {
        return __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").applySettings(sections, settingsEngine, updateViewport);
    }
    assignSettingsEngine(settingsEngine) {
        __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").assignSettingsEngine(settingsEngine);
    }
    displayErrorMessage(message) {
        __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").displayErrorMessage(message);
    }
    reset() {
        __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").reset();
    }
    saveSettings() {
        __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").saveSettings();
    }
    update(id) {
        __classPrivateFieldGet(this, _ViewportGlobalAccessObject_viewportEngine, "f").update(id);
    }
}
exports.ViewportGlobalAccessObject = ViewportGlobalAccessObject;
_ViewportGlobalAccessObject_boundingBoxCreated = new WeakMap(), _ViewportGlobalAccessObject_initialized = new WeakMap(), _ViewportGlobalAccessObject_settingsAssigned = new WeakMap(), _ViewportGlobalAccessObject_viewportEngine = new WeakMap(), _ViewportGlobalAccessObject_busy = new WeakMap(), _ViewportGlobalAccessObject_environmentMapLoaded = new WeakMap();
//# sourceMappingURL=ViewportGlobalAccessObject.js.map

/***/ }),

/***/ 82890:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreationControlCenterViewport = void 0;
const CreationControlCenterViewport_1 = __webpack_require__(20313);
Object.defineProperty(exports, "CreationControlCenterViewport", ({ enumerable: true, get: function () { return CreationControlCenterViewport_1.CreationControlCenterViewport; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 84524:
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
exports.DataEngine = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_data_engine_geometry_engine_1 = __webpack_require__(50432);
const viewer_data_engine_html_element_anchor_engine_1 = __webpack_require__(27682);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_data_engine_material_engine_1 = __webpack_require__(93637);
const viewer_data_engine_sdtf_engine_1 = __webpack_require__(91925);
const viewer_data_engine_tag3d_engine_1 = __webpack_require__(59507);
class DataEngine {
    constructor() {
        // #region Properties (8)
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._geometryEngine = viewer_data_engine_geometry_engine_1.GeometryEngine.instance;
        this._htmlElementAnchorEngine = viewer_data_engine_html_element_anchor_engine_1.HTMLElementAnchorEngine.instance;
        this._materialEngine = viewer_data_engine_material_engine_1.MaterialEngine.instance;
        this._sdtfEngine = viewer_data_engine_sdtf_engine_1.SDTFEngine.instance;
        this._tag3dEngine = viewer_data_engine_tag3d_engine_1.Tag3dEngine.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        // #endregion Public Methods (1)
    }
    // #endregion Properties (8)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (1)
    loadContent(content, jwtToken, taskEventId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!content || (content && !content.format))
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('DataEngine cannot load content.');
            taskEventId = taskEventId || this._uuidGenerator.create();
            let node;
            if (content.format === 'glb' || content.format === 'gltf') {
                node = yield this._geometryEngine.loadContent(content, taskEventId);
            }
            else if (content.format === 'material') {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, { type: viewer_shared_types_1.TASK_TYPE.MATERIAL_CONTENT_LOADING, id: taskEventId, progress: 0, status: 'Loading material content.' });
                node = yield this._materialEngine.loadContent(content);
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, { type: viewer_shared_types_1.TASK_TYPE.MATERIAL_CONTENT_LOADING, id: taskEventId, progress: 1, status: 'MATERIAL content loaded.' });
            }
            else if (content.format === 'tag2d' || content.format === 'anchor') {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, { type: viewer_shared_types_1.TASK_TYPE.TAG_CONTENT_LOADING, id: taskEventId, progress: 0, status: 'Loading tag content.' });
                node = yield this._htmlElementAnchorEngine.loadContent(content);
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, { type: viewer_shared_types_1.TASK_TYPE.TAG_CONTENT_LOADING, id: taskEventId, progress: 1, status: 'Tag content loaded.' });
            }
            else if (content.format === 'tag3d') {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, { type: viewer_shared_types_1.TASK_TYPE.TAG_CONTENT_LOADING, id: taskEventId, progress: 0, status: 'Loading tag content.' });
                node = yield this._tag3dEngine.loadContent(content);
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, { type: viewer_shared_types_1.TASK_TYPE.TAG_CONTENT_LOADING, id: taskEventId, progress: 1, status: 'Tag content loaded.' });
            }
            else if (content.format === 'sdtf') {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, { type: viewer_shared_types_1.TASK_TYPE.SDTF_CONTENT_LOADING, id: taskEventId, progress: 0, status: 'Loading sdTF content.' });
                node = yield this._sdtfEngine.loadContent(content, jwtToken);
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, { type: viewer_shared_types_1.TASK_TYPE.SDTF_CONTENT_LOADING, id: taskEventId, progress: 1, status: 'SdTF content loaded.' });
            }
            else {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, { type: viewer_shared_types_1.TASK_TYPE.CUSTOM_CONTENT_LOADING, id: taskEventId, progress: 0, status: 'Loading custom content.' });
                node = new viewer_shared_node_tree_1.TreeNode('custom');
                node.data.push(new viewer_shared_types_1.CustomData(Object.assign({}, content)));
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, { type: viewer_shared_types_1.TASK_TYPE.CUSTOM_CONTENT_LOADING, id: taskEventId, progress: 1, status: 'Custom content loaded.' });
            }
            const transformationNode = new viewer_shared_node_tree_1.TreeNode('transformation');
            if (content.transformations && Array.isArray(content.transformations)) {
                for (let i = 0; i < content.transformations.length; i++) {
                    const t = content.transformations[i];
                    if (Array.isArray(t) && t.length === 16) {
                        const nodeInstance = node.clone();
                        nodeInstance.transformations = [{
                                id: 'content_' + i,
                                matrix: gl_matrix_1.mat4.fromValues(t[0], t[1], t[2], t[3], t[4], t[5], t[6], t[7], t[8], t[9], t[10], t[11], t[12], t[13], t[14], t[15])
                            }].concat(node.transformations);
                        transformationNode.updateVersion();
                        transformationNode.addChild(nodeInstance);
                    }
                }
            }
            else {
                transformationNode.addChild(node);
            }
            return transformationNode;
        });
    }
}
exports.DataEngine = DataEngine;
//# sourceMappingURL=DataEngine.js.map

/***/ }),

/***/ 95292:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DataEngine = void 0;
const DataEngine_1 = __webpack_require__(84524);
Object.defineProperty(exports, "DataEngine", ({ enumerable: true, get: function () { return DataEngine_1.DataEngine; } }));
const viewer_shared_global_access_objects_1 = __webpack_require__(50069);
const instance = DataEngine_1.DataEngine.instance;
viewer_shared_global_access_objects_1.GlobalAccessObjects.instance.loadContent = instance.loadContent.bind(instance);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 92292:
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
exports.GeometryEngine = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const GLTFLoader_1 = __webpack_require__(93167);
const GLTFLoader_2 = __webpack_require__(2640);
class GeometryEngine {
    constructor() {
        // #region Properties (7)
        this.BINARY_EXTENSION_HEADER_LENGTH = 20;
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._loadingQueue = [];
        this._logger = viewer_shared_services_1.Logger.instance;
        this._performanceEvaluator = viewer_shared_services_1.PerformanceEvaluator.instance;
        this._loadingQueueLength = Infinity;
        // #endregion Public Methods (1)
    }
    // #endregion Properties (7)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Accessors (2)
    get parallelGlTFProcessing() {
        return this._loadingQueueLength;
    }
    set parallelGlTFProcessing(value) {
        this._loadingQueueLength = value;
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (1)
    /**
     * Load the geometry content into a scene graph node.
     *
     * @param content the geometry content
     * @returns the scene graph node
     */
    loadContent(content, taskEventId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!content || (content && !content.href))
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryEngine cannot load content.');
            while (this._loadingQueueLength <= this._loadingQueue.length)
                yield new Promise(resolve => setTimeout(resolve, 10));
            const url = content.href;
            // eslint-disable-next-line no-async-promise-executor
            const loadingPromise = new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                let gltfContent, gltfBinary, gltfBaseUrl, gltfHeader;
                let version = '2.0';
                if (content.format === 'glb' || content.format === 'gltf') {
                    this._performanceEvaluator.startSection('gltfProcessing.' + url);
                    this._performanceEvaluator.startSection('loadGltf.' + url);
                    const axiosResponse = yield this._httpClient.get(url, {
                        responseType: 'arraybuffer'
                    });
                    this._performanceEvaluator.endSection('loadGltf.' + url);
                    const magic = new TextDecoder().decode(new Uint8Array(axiosResponse.data, 0, 4));
                    const isBinary = magic === 'glTF';
                    if (isBinary) {
                        gltfBinary = axiosResponse.data;
                        // create header data
                        const headerDataView = new DataView(gltfBinary, 0, this.BINARY_EXTENSION_HEADER_LENGTH);
                        gltfHeader = {
                            magic: magic,
                            version: headerDataView.getUint32(4, true),
                            length: headerDataView.getUint32(8, true),
                            contentLength: headerDataView.getUint32(12, true),
                            contentFormat: headerDataView.getUint32(16, true)
                        };
                        if (gltfHeader.magic != 'glTF')
                            throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('Invalid data: glTF magic wrong.');
                        // create content
                        const contentDataView = new DataView(gltfBinary, this.BINARY_EXTENSION_HEADER_LENGTH, gltfHeader.contentLength);
                        const contentDecoded = new TextDecoder().decode(contentDataView);
                        gltfContent = JSON.parse(contentDecoded);
                        if (gltfContent && gltfContent.asset && gltfContent.asset.version) {
                            const assetVersion = (gltfContent.asset.version + '').endsWith('.0') ? gltfContent.asset.version : gltfContent.asset.version + '.0';
                            if (gltfHeader.version + '.0' === assetVersion) {
                                version = gltfHeader.version + '.0';
                            }
                            else {
                                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryEngine.loadContent: glTF header version (' + gltfHeader.version + ') is not the same as asset version (' + assetVersion + ').');
                            }
                        }
                        else {
                            version = gltfHeader.version + '.0';
                        }
                    }
                    else {
                        gltfContent = JSON.parse(new TextDecoder().decode(axiosResponse.data));
                        if (gltfContent && gltfContent.asset && gltfContent.asset.version) {
                            if (gltfContent.asset.version !== '2.0')
                                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryEngine.loadContent: Only gltf v2 is supported in a non-binary format.');
                        }
                        else {
                            this._logger.warn('GeometryEngine.loadContent: No version specified in asset, trying to load as v2.');
                            version = '2.0';
                        }
                        const removeLastDirectoryPartOf = (the_url) => {
                            const dir_char = the_url.includes('/') ? '/' : '\\';
                            const the_arr = the_url.split(dir_char);
                            the_arr.pop();
                            return the_arr.join(dir_char);
                        };
                        gltfBaseUrl = removeLastDirectoryPartOf(url);
                        if (!gltfBaseUrl && window && window.location && window.location.href)
                            gltfBaseUrl = removeLastDirectoryPartOf(window.location.href);
                    }
                }
                let promise;
                if (version === '1.0') {
                    promise = new GLTFLoader_1.GLTFLoader().load(gltfContent, gltfBinary, gltfHeader, gltfBaseUrl, taskEventId);
                }
                else {
                    promise = new GLTFLoader_2.GLTFLoader().load(gltfContent, gltfBinary, gltfHeader, gltfBaseUrl, taskEventId);
                }
                promise.catch(e => { reject(e); });
                resolve(promise);
            }));
            this._loadingQueue.push(loadingPromise);
            const node = yield loadingPromise;
            this._loadingQueue.splice(this._loadingQueue.indexOf(loadingPromise), 1);
            this._performanceEvaluator.endSection('gltfProcessing.' + url);
            return node;
        });
    }
}
exports.GeometryEngine = GeometryEngine;
//# sourceMappingURL=GeometryEngine.js.map

/***/ }),

/***/ 93167:
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
exports.GLTFLoader = void 0;
/* eslint-disable no-prototype-builtins */
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_types_1 = __webpack_require__(64766);
const SDGTFLoader_1 = __webpack_require__(99416);
class GLTFLoader {
    constructor() {
        // #region Properties (5)
        this.BINARY_EXTENSION_HEADER_LENGTH = 20;
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        this._implementedExtensions = ['KHR_materials_common'];
        this._globalTransformation = gl_matrix_1.mat4.fromValues(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._performanceEvaluator = viewer_shared_services_1.PerformanceEvaluator.instance;
        this._progressUpdateLimit = 500;
        this._eventId = '';
        this._numberOfNodes = 0;
        this._numberOfConvertedNodes = 0;
        this._progressTimer = 0;
        // #endregion Private Methods (6)
    }
    // #endregion Properties (5)
    // #region Public Methods (1)
    load(content, gltfBinary, gltfHeader, baseUri, taskEventId) {
        return __awaiter(this, void 0, void 0, function* () {
            this._eventId = taskEventId || this._uuidGenerator.create();
            const eventStart = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: 0, status: 'Starting glTF 1.0 loading.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
            this._numberOfConvertedNodes = 0;
            this._numberOfNodes = content.nodes ? Object.values(content.nodes).length : 0;
            this._progressTimer = performance.now();
            this._baseUri = baseUri;
            if (gltfBinary && gltfHeader)
                this._body = gltfBinary.slice(this.BINARY_EXTENSION_HEADER_LENGTH + gltfHeader.contentLength, gltfHeader.length);
            this._content = content;
            let sdgtfNode;
            if (gltfBinary && gltfHeader)
                sdgtfNode = yield new SDGTFLoader_1.SDGTFLoader().load(gltfBinary, gltfHeader.length);
            const eventProgressSDgTF = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: 0.25, status: 'Loaded SDgTF content.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgressSDgTF);
            this.validateVersionAndExtensions();
            const node = yield this.loadScene();
            if (sdgtfNode)
                node.addChild(sdgtfNode);
            const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: 1, status: 'GlTF loading complete.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
            return node;
        });
    }
    loadWithUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            this._performanceEvaluator.startSection('gltfProcessing.' + url);
            this._performanceEvaluator.startSection('loadGltf.' + url);
            const binaryGeometry = (yield this._httpClient.get(url, {
                responseType: 'arraybuffer'
            })).data;
            this._performanceEvaluator.endSection('loadGltf.' + url);
            // create header data
            const headerDataView = new DataView(binaryGeometry, 0, this.BINARY_EXTENSION_HEADER_LENGTH);
            const header = {
                magic: String.fromCharCode(headerDataView.getUint8(0)) + String.fromCharCode(headerDataView.getUint8(1)) + String.fromCharCode(headerDataView.getUint8(2)) + String.fromCharCode(headerDataView.getUint8(3)),
                version: headerDataView.getUint32(4, true),
                length: headerDataView.getUint32(8, true),
                contentLength: headerDataView.getUint32(12, true),
                contentFormat: headerDataView.getUint32(16, true)
            };
            if (header.magic != 'glTF')
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GLTFLoader.load: Invalid data: glTF magic wrong.');
            // create content
            const contentDataView = new DataView(binaryGeometry, this.BINARY_EXTENSION_HEADER_LENGTH, header.contentLength);
            const contentDecoded = new TextDecoder().decode(contentDataView);
            this._content = JSON.parse(contentDecoded);
            // create body
            this._body = binaryGeometry.slice(this.BINARY_EXTENSION_HEADER_LENGTH + header.contentLength, header.length);
            const sdgtfNode = yield new SDGTFLoader_1.SDGTFLoader().load(binaryGeometry, header.length);
            this.validateVersionAndExtensions();
            const node = yield this.loadScene();
            node.addChild(sdgtfNode);
            this._performanceEvaluator.endSection('gltfProcessing.' + url);
            return node;
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (6)
    validateVersionAndExtensions() {
        if (this._content.extensionsUsed) {
            const notSupported = [];
            for (let i = 0; i < this._content.extensionsUsed.length; i++) {
                if (!this._implementedExtensions.includes(this._content.extensionsUsed[i]))
                    notSupported.push(this._content.extensionsUsed[i]);
            }
            if (notSupported.length > 0) {
                let message = 'Extension' + (notSupported.length === 1 ? ' ' : 's ');
                notSupported.forEach((element, index) => {
                    message += '"' + element + '"' + (index === notSupported.length - 1 ? '' : index === notSupported.length - 2 ? ' and ' : ', ');
                });
                message += (notSupported.length === 1 ? ' is' : ' are') + ' not supported, but used. Loading glTF regardless.';
                this._logger.info('GLTFLoader.validateVersionAndExtensions: ' + message);
            }
        }
    }
    loadAccessor(accessorName) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.accessors[accessorName])
                throw new Error('Accessor not available.');
            const accessor = this._content.accessors[accessorName];
            const bufferView = yield this.loadBufferView(accessor.bufferView);
            const itemSize = viewer_data_engine_shared_types_1.ACCESSORTYPE_V1[accessor.type];
            if (accessor.componentType === 5124)
                this._logger.warn('GLTFLoader.loadAccessor: The componentType for this accessor is 5124, which is not allowed. Trying to load it anyway.');
            const ArrayType = viewer_data_engine_shared_types_1.ACCESSORCOMPONENTTYPE_V1[accessor.componentType];
            const elementBytes = ArrayType.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessor.byteOffset || 0;
            const byteStride = accessor.byteStride;
            const normalized = false;
            const target = this._content.bufferViews[accessor.bufferView] ? this._content.bufferViews[accessor.bufferView].target : undefined;
            const min = this._content.asset && ((_a = this._content.asset) === null || _a === void 0 ? void 0 : _a.generator) === 'ShapeDiverGltfV1Writer' ? accessor.min || [] : [];
            const max = this._content.asset && ((_b = this._content.asset) === null || _b === void 0 ? void 0 : _b.generator) === 'ShapeDiverGltfV1Writer' ? accessor.max || [] : [];
            // The buffer is not interleaved if the stride is the item size in bytes.
            return new viewer_shared_types_1.AttributeData(new ArrayType(bufferView), itemSize, itemBytes, byteOffset, elementBytes, normalized, accessor.count, min, max, byteStride, target);
        });
    }
    loadBuffer(bufferName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.buffers[bufferName])
                throw new Error('Buffer not available.');
            const buffer = this._content.buffers[bufferName];
            if (bufferName === 'binary_glTF')
                return this._body;
            if (buffer.type === 'arraybuffer') {
                const binaryGeometry = (yield this._httpClient.get(buffer.uri, {
                    responseType: 'arraybuffer'
                })).data;
                return binaryGeometry;
            }
            if (!this._body)
                throw new Error('Buffer not available.');
            return this._body;
        });
    }
    loadBufferView(bufferViewName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.bufferViews[bufferViewName])
                throw new Error('Buffer View not available.');
            const bufferView = this._content.bufferViews[bufferViewName];
            const buffer = yield this.loadBuffer(bufferView.buffer);
            const byteLength = bufferView.byteLength !== undefined ? bufferView.byteLength : 0;
            return buffer.slice(bufferView.byteOffset, bufferView.byteOffset + byteLength);
        });
    }
    loadMaterial(materialName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.materials[materialName])
                throw new Error('Material not available.');
            const material = this._content.materials[materialName];
            const materialData = new viewer_shared_types_1.MaterialStandardData();
            if (material.name !== undefined)
                materialData.name = material.name;
            if (material.extensions && material.extensions.KHR_materials_common) {
                const technique = material.extensions.KHR_materials_common.technique;
                if (technique && technique !== 'BLINN')
                    this._logger.warn('The technique ' + technique + ' is not supported. Trying to load the material either way.');
                const values = material.extensions.KHR_materials_common.values;
                if (values.hasOwnProperty('doubleSided'))
                    materialData.side = values.doubleSided ? viewer_shared_types_1.MATERIAL_SIDE.DOUBLE : viewer_shared_types_1.MATERIAL_SIDE.FRONT;
                materialData.color = '#d3d3d3';
                if (values.hasOwnProperty('diffuse') && Array.isArray(values.diffuse)) {
                    const diffuseScaled = values.diffuse.map(element => element *= 255.0);
                    materialData.color = diffuseScaled;
                    materialData.opacity = Math.max(0.0, Math.min(values.diffuse[3], 1.0));
                }
                else if (values.hasOwnProperty('diffuse')) {
                    this._logger.warn('GLTFLoader.loadMaterial: The value diffuse was set for a material, but is not supported in that type.');
                }
                if (!values.hasOwnProperty('diffuse') && values.hasOwnProperty('ambient')) {
                    const ambientScaled = values.ambient.map(element => element *= 255.0);
                    materialData.color = ambientScaled;
                }
                if (values.hasOwnProperty('emission') && Array.isArray(values.emission)) {
                    materialData.emissiveness = values.emission;
                }
                else if (values.hasOwnProperty('emission')) {
                    this._logger.warn('GLTFLoader.loadMaterial: The value emission was set for a material, but is not supported in that type.');
                }
                if (values.hasOwnProperty('shininess')) {
                    materialData.metalness = Math.min(1, values.shininess);
                    materialData.roughness = 1 - Math.min(1, values.shininess);
                }
                if (values.hasOwnProperty('transparency'))
                    materialData.opacity = Math.max(0.0, Math.min(values.transparency, 1.0));
                if (!values.hasOwnProperty('transparency') && values.hasOwnProperty('transparent') && (values.transparency === 'true' || values.transparency === true))
                    materialData.opacity = 0;
                if (values.hasOwnProperty('_roughness'))
                    materialData.roughness = Math.min(1, Math.max(0, values.roughness));
                if (values.hasOwnProperty('_metalness'))
                    materialData.metalness = Math.min(1, Math.max(0, values.metalness));
            }
            return materialData;
        });
    }
    loadMesh(meshName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.meshes[meshName])
                throw new Error('Mesh not available.');
            const mesh = this._content.meshes[meshName];
            const meshNode = new viewer_shared_node_tree_1.TreeNode(meshName);
            if (!mesh.primitives)
                return new viewer_shared_node_tree_1.TreeNode('primitive');
            for (let i = 0, len = mesh.primitives.length; i < len; i++) {
                const primitiveNode = new viewer_shared_node_tree_1.TreeNode('primitive_' + i);
                meshNode.addChild(primitiveNode);
                const primitive = mesh.primitives[i];
                const attributes = {};
                for (const attribute in primitive.attributes) {
                    // attribute name conversion to be consistent witg gltf
                    let attributeName = attribute;
                    if (/\d/.test(attributeName) && !attributeName.includes('_')) {
                        const index = attributeName.search(/\d/);
                        attributeName = attributeName.substring(0, index) + '_' + attributeName.substring(index, attributeName.length);
                    }
                    else if (attributeName === 'TEXCOORD' || attributeName === 'COLOR' || attributeName === 'JOINTS' || attributeName === 'WEIGHTS') {
                        attributeName += '_0';
                    }
                    else if (attributeName === 'UV') {
                        attributeName = 'TEXCOORD_0';
                    }
                    attributes[attributeName] = yield this.loadAccessor(primitive.attributes[attribute]);
                    if (attributeName.startsWith('COLOR'))
                        attributes[attributeName] = new viewer_shared_types_1.AttributeData(attributes[attributeName].array, attributes[attributeName].itemSize, attributes[attributeName].itemBytes, attributes[attributeName].byteOffset, attributes[attributeName].elementBytes, true, attributes[attributeName].count, [], [], attributes[attributeName].byteStride, attributes[attributeName].target);
                }
                let material;
                if (primitive.material)
                    material = yield this.loadMaterial(primitive.material);
                const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, yield this.loadAccessor(primitive.indices)), viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLES, material);
                primitiveNode.data.push(geometry);
            }
            return meshNode;
        });
    }
    loadNode(nodeName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.nodes[nodeName])
                throw new Error('Node not available.');
            const node = this._content.nodes[nodeName];
            const nodeDef = new viewer_shared_node_tree_1.TreeNode(nodeName);
            if (node.matrix) {
                nodeDef.addTransformation({
                    id: this._uuidGenerator.create(),
                    matrix: gl_matrix_1.mat4.fromValues(node.matrix[0], node.matrix[1], node.matrix[2], node.matrix[3], node.matrix[4], node.matrix[5], node.matrix[6], node.matrix[7], node.matrix[8], node.matrix[9], node.matrix[10], node.matrix[11], node.matrix[12], node.matrix[13], node.matrix[14], node.matrix[15])
                });
            }
            else if (node.translation || node.scale || node.rotation) {
                const matT = node.translation ? gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(node.translation[0], node.translation[1], node.translation[2])) : gl_matrix_1.mat4.create();
                const matS = node.scale ? gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(node.scale[0], node.scale[1], node.scale[2])) : gl_matrix_1.mat4.create();
                const matR = node.rotation ? gl_matrix_1.mat4.fromQuat(gl_matrix_1.mat4.create(), gl_matrix_1.vec4.fromValues(node.rotation[0], node.rotation[1], node.rotation[2], node.rotation[3])) : gl_matrix_1.mat4.create();
                const matrix = gl_matrix_1.mat4.mul(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.mul(gl_matrix_1.mat4.create(), matT, matS), matR);
                nodeDef.addTransformation({
                    id: this._uuidGenerator.create(),
                    matrix: matrix
                });
            }
            if (node.meshes) {
                for (let i = 0, len = node.meshes.length; i < len; i++) {
                    // we create a child node as we one want to have one mesh as in the GLTF2 def
                    nodeDef.addChild(yield this.loadMesh(node.meshes[i]));
                }
            }
            if (node.children) {
                for (let i = 0, len = node.children.length; i < len; i++) {
                    // got through all children
                    nodeDef.addChild(yield this.loadNode(node.children[i]));
                }
            }
            this._numberOfConvertedNodes++;
            if (performance.now() - this._progressTimer > this._progressUpdateLimit) {
                this._progressTimer = performance.now();
                const eventProgress = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: (this._numberOfConvertedNodes / this._numberOfNodes) / 2 + 0.25, status: `GlTF conversion progress: ${this._numberOfConvertedNodes}/${this._numberOfNodes} nodes.` };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgress);
                yield new Promise(resolve => setTimeout(resolve, 0));
            }
            return nodeDef;
        });
    }
    loadScene() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.scene)
                throw new Error('No scene.');
            if (!this._content.scenes[this._content.scene])
                throw new Error('Scene not available.');
            const scene = this._content.scenes[this._content.scene];
            const sceneDef = new viewer_shared_node_tree_1.TreeNode(this._content.scene);
            if (this._content.asset && ((_a = this._content.asset) === null || _a === void 0 ? void 0 : _a.generator) !== 'ShapeDiverGltfWriter' && ((_b = this._content.asset) === null || _b === void 0 ? void 0 : _b.generator) !== 'ShapeDiverGltfV1Writer') {
                sceneDef.addTransformation({
                    id: this._uuidGenerator.create(),
                    matrix: this._globalTransformation
                });
            }
            if (scene.nodes)
                for (let i = 0, len = scene.nodes.length; i < len; i++)
                    sceneDef.addChild(yield this.loadNode(scene.nodes[i]));
            return sceneDef;
        });
    }
}
exports.GLTFLoader = GLTFLoader;
//# sourceMappingURL=GLTFLoader.js.map

/***/ }),

/***/ 99416:
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
exports.SDGTFLoader = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
const viewer_shared_types_1 = __webpack_require__(64766);
const gl_matrix_1 = __webpack_require__(61961);
class SDGTFLoader {
    constructor() {
        // #region Properties (5)
        this.BINARY_EXTENSION_HEADER_LENGTH = 20;
        this._logger = viewer_shared_services_1.Logger.instance;
        // #endregion Private Methods (6)
    }
    // #endregion Properties (5)
    // #region Public Methods (1)
    load(binaryGeometry, gltfLength) {
        return __awaiter(this, void 0, void 0, function* () {
            if (gltfLength < binaryGeometry.byteLength) {
                const headerDataView = new DataView(binaryGeometry, gltfLength, this.BINARY_EXTENSION_HEADER_LENGTH + 1);
                const header = {
                    magic: String.fromCharCode(headerDataView.getUint8(0)) + String.fromCharCode(headerDataView.getUint8(1)) + String.fromCharCode(headerDataView.getUint8(2)) + String.fromCharCode(headerDataView.getUint8(3)) + String.fromCharCode(headerDataView.getUint8(4)),
                    version: headerDataView.getUint32(5, true),
                    length: headerDataView.getUint32(9, true),
                    contentLength: headerDataView.getUint32(13, true),
                    contentFormat: headerDataView.getUint32(17, true)
                };
                if (header.magic != 'sdgTF')
                    throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('SDGTFLoader.load: Invalid data: sdgTF magic wrong.');
                // create content
                const contentDataView = new DataView(binaryGeometry, gltfLength + this.BINARY_EXTENSION_HEADER_LENGTH + 1, header.contentLength);
                const contentDecoded = new TextDecoder().decode(contentDataView);
                this._content = JSON.parse(contentDecoded);
                this._body = binaryGeometry.slice(gltfLength + this.BINARY_EXTENSION_HEADER_LENGTH + 1 + header.contentLength, gltfLength + header.length);
            }
            else {
                return new viewer_shared_node_tree_1.TreeNode();
            }
            return yield this.loadScene();
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (6)
    convertToIndicesArray(indices) {
        const max = Math.max(0, ...indices);
        if (max < (1 << 8) - 1) {
            return new Uint8Array(indices);
        }
        else if (max < (1 << 16) - 1) {
            return new Uint16Array(indices);
        }
        else {
            return new Uint32Array(indices);
        }
    }
    loadAccessor(accessorName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.accessors[accessorName])
                throw new Error('Accessor not available.');
            const accessor = this._content.accessors[accessorName];
            const bufferView = this._body;
            const itemSize = viewer_data_engine_shared_types_1.ACCESSORTYPE_V1[accessor.type];
            const ArrayType = viewer_data_engine_shared_types_1.ACCESSORCOMPONENTTYPE_V1[accessor.componentType];
            const elementBytes = ArrayType.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessor.byteOffset || 0;
            return new viewer_shared_types_1.AttributeData(new ArrayType(bufferView, byteOffset, itemSize * accessor.count), itemSize, itemBytes, byteOffset, elementBytes, false, accessor.count);
        });
    }
    loadArcs() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.arcs)
                throw new Error('Arcs not available.');
            const arc = this._content.arcs;
            const arcNode = new viewer_shared_node_tree_1.TreeNode('arcs');
            const data = yield this.loadAccessor(arc.attributes['ARCS']);
            // data with an absolute classic array of Vec12s ...
            // like you usually have it in any good program
            // not 4 Vec3s, no, that would be to logic, but a Vec12 instead
            const count = data.array.length / data.itemSize;
            for (let i = 0; i < count; ++i) {
                const singleArcNode = new viewer_shared_node_tree_1.TreeNode('arc_' + i);
                const index = i * 12;
                const arcCenter = gl_matrix_1.vec3.fromValues(data.array[index + 0], data.array[index + 1], data.array[index + 2]);
                const arcXAxis = gl_matrix_1.vec3.fromValues(data.array[index + 3], data.array[index + 4], data.array[index + 5]);
                const arcYAxis = gl_matrix_1.vec3.fromValues(data.array[index + 6], data.array[index + 7], data.array[index + 8]);
                const arcRadius = data.array[index + 9];
                const arcMinAngle = data.array[index + 10];
                const arcMaxAngle = data.array[index + 11];
                const arcZAxis = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), arcXAxis, arcYAxis);
                if (arcRadius <= 0) {
                    this._logger.warn('SDGTFLoader.loadArcs: Arc radius is <= 0.');
                    continue;
                }
                const points = [];
                const getPointOnArc = (t) => {
                    const twoPi = Math.PI * 2;
                    let deltaAngle = arcMaxAngle - arcMinAngle;
                    const samePoints = Math.abs(deltaAngle) < Number.EPSILON;
                    // ensures that deltaAngle is 0 .. 2 PI
                    while (deltaAngle < 0)
                        deltaAngle += twoPi;
                    while (deltaAngle > twoPi)
                        deltaAngle -= twoPi;
                    deltaAngle = deltaAngle < Number.EPSILON ? samePoints ? 0 : twoPi : deltaAngle;
                    const angle = arcMinAngle + t * deltaAngle;
                    let x = arcRadius * Math.cos(angle);
                    let y = arcRadius * Math.sin(angle);
                    points.push(x, y, 0);
                };
                const numberOfPoints = Math.max(3, Math.round(50 * ((arcMaxAngle - arcMinAngle) / 2 * Math.PI)));
                for (let d = 0; d <= numberOfPoints; d++)
                    getPointOnArc(d / numberOfPoints);
                const array = new Float32Array(points);
                const attributes = {};
                attributes['POSITION'] = new viewer_shared_types_1.AttributeData(array, 3, 0, 0, 0, false, array.length / 3);
                const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, null), viewer_shared_types_1.PRIMITIVE_MODE.LINE_STRIP);
                singleArcNode.data.push(geometry);
                singleArcNode.addTransformation({
                    id: 'arc_' + i + '_translation',
                    matrix: gl_matrix_1.mat4.translate(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(arcCenter[0], arcCenter[1], arcCenter[2]))
                });
                const arcRotationMatrix = gl_matrix_1.mat4.transpose(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.fromValues(arcXAxis[0], arcYAxis[0], arcZAxis[0], 0, arcXAxis[1], arcYAxis[1], arcZAxis[1], 0, arcXAxis[2], arcYAxis[2], arcZAxis[2], 0, 0, 0, 0, 1));
                singleArcNode.addTransformation({
                    id: 'arc_' + i + '_rotation',
                    matrix: arcRotationMatrix
                });
                arcNode.addChild(singleArcNode);
            }
            return arcNode;
        });
    }
    loadBeziercurve(beziercurveName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.beziercurves[beziercurveName])
                throw new Error('Beziercurve not available.');
            const beziercurve = this._content.beziercurves[beziercurveName];
            const beziercurveNode = new viewer_shared_node_tree_1.TreeNode(beziercurveName);
            const controlPointsData = yield this.loadAccessor(beziercurve.attributes['CONTROLPOINTS']); // vec3
            const controlPoints = [];
            for (let i = 0; i < controlPointsData.array.length; i += 3)
                controlPoints.push(gl_matrix_1.vec4.fromValues(controlPointsData.array[i], controlPointsData.array[i + 1], controlPointsData.array[i + 2], 1));
            const knotsData = yield this.loadAccessor(beziercurve.attributes['KNOTS']); // scalar
            const knots = [knotsData.array[0]];
            for (let i = 0; i < knotsData.array.length; i++)
                knots.push(knotsData.array[i]);
            knots.push(knotsData.array[knotsData.array.length - 1]);
            const degree = beziercurve.degree;
            const findSpan = (u) => {
                const n = knots.length - degree - 1;
                if (u >= knots[n])
                    return n - 1;
                if (u <= knots[degree])
                    return degree;
                let low = degree;
                let high = n;
                let mid = Math.floor((low + high) / 2);
                while (u < knots[mid] || u >= knots[mid + 1]) {
                    if (u < knots[mid]) {
                        high = mid;
                    }
                    else {
                        low = mid;
                    }
                    mid = Math.floor((low + high) / 2);
                }
                return mid;
            };
            const calcBasisFunctions = (span, u) => {
                const N = [];
                const left = [];
                const right = [];
                N[0] = 1.0;
                for (let j = 1; j <= degree; ++j) {
                    left[j] = u - knots[span + 1 - j];
                    right[j] = knots[span + j] - u;
                    let saved = 0.0;
                    for (let r = 0; r < j; ++r) {
                        const rv = right[r + 1];
                        const lv = left[j - r];
                        const temp = N[r] / (rv + lv);
                        N[r] = saved + rv * temp;
                        saved = lv * temp;
                    }
                    N[j] = saved;
                }
                return N;
            };
            const calcBSplinePoint = (u) => {
                const span = findSpan(u);
                const N = calcBasisFunctions(span, u);
                const C = gl_matrix_1.vec4.create();
                for (let j = 0; j <= degree; ++j) {
                    const point = controlPoints[span - degree + j];
                    const Nj = N[j];
                    const wNj = point[3] * Nj;
                    gl_matrix_1.vec4.add(C, C, gl_matrix_1.vec4.fromValues(point[0] * wNj, point[1] * wNj, point[2] * wNj, point[3] * Nj));
                }
                return C;
            };
            const points = [];
            const getPointOnBezierCurve = (t) => {
                const u = knots[0] + t * (knots[knots.length - 1] - knots[0]); // linear mapping t->u
                // following results in (wx, wy, wz, w) homogeneous point
                let hpoint = calcBSplinePoint(u);
                if (hpoint[3] !== 1.0) {
                    // project to 3D space: (wx, wy, wz, w) -> (x, y, z, 1)
                    hpoint = gl_matrix_1.vec4.divide(gl_matrix_1.vec4.create(), hpoint, gl_matrix_1.vec4.fromValues(hpoint[3], hpoint[3], hpoint[3], hpoint[3]));
                }
                points.push(hpoint[0], hpoint[1], hpoint[2]);
            };
            // Number of points calculation
            // We go through the control points, measure the distance
            let distance = 0;
            for (let i = 1; i < controlPoints.length; i++)
                distance += gl_matrix_1.vec3.distance(gl_matrix_1.vec3.fromValues(controlPoints[i - 1][0], controlPoints[i - 1][1], controlPoints[i - 1][2]), gl_matrix_1.vec3.fromValues(controlPoints[i][0], controlPoints[i][1], controlPoints[i][2]));
            const numberOfPoints = Math.min(100, Math.max(25, Math.floor(distance / 0.1)));
            for (let d = 0; d <= numberOfPoints; d++)
                getPointOnBezierCurve(d / numberOfPoints);
            const array = new Float32Array(points);
            const attributes = {};
            attributes['POSITION'] = new viewer_shared_types_1.AttributeData(array, 3, 0, 0, 0, false, array.length / 3);
            const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, null), viewer_shared_types_1.PRIMITIVE_MODE.LINE_STRIP);
            beziercurveNode.data.push(geometry);
            return beziercurveNode;
        });
    }
    loadCircles() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.circles)
                throw new Error('Circles not available.');
            const circle = this._content.circles;
            const circleNode = new viewer_shared_node_tree_1.TreeNode('circles');
            const data = yield this.loadAccessor(circle.attributes['CIRCLES']);
            const count = data.array.length / data.itemSize;
            for (let i = 0; i < count; i++) {
                const singleCircleNode = new viewer_shared_node_tree_1.TreeNode('circle_' + i);
                const index = i * 10;
                const circleCenter = gl_matrix_1.vec3.fromValues(data.array[index + 0], data.array[index + 1], data.array[index + 2]);
                const circleXAxis = gl_matrix_1.vec3.fromValues(data.array[index + 3], data.array[index + 4], data.array[index + 5]);
                const circleYAxis = gl_matrix_1.vec3.fromValues(data.array[index + 6], data.array[index + 7], data.array[index + 8]);
                const circleRadius = data.array[index + 9];
                const circleZAxis = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), circleXAxis, circleYAxis);
                if (circleRadius <= 0) {
                    this._logger.warn('SDGTFLoader.loadCircles: Circle radius is <= 0.');
                    continue;
                }
                const points = [];
                const getPointOnArc = (t) => {
                    const twoPi = Math.PI * 2;
                    let deltaAngle = 2.0 * Math.PI - 0;
                    const samePoints = Math.abs(deltaAngle) < Number.EPSILON;
                    // ensures that deltaAngle is 0 .. 2 PI
                    while (deltaAngle < 0)
                        deltaAngle += twoPi;
                    while (deltaAngle > twoPi)
                        deltaAngle -= twoPi;
                    deltaAngle = deltaAngle < Number.EPSILON ? samePoints ? 0 : twoPi : deltaAngle;
                    const angle = 0 + t * deltaAngle;
                    let x = circleRadius * Math.cos(angle);
                    let y = circleRadius * Math.sin(angle);
                    points.push(x, y, 0);
                };
                const numberOfPoints = 50;
                for (let d = 0; d <= numberOfPoints; d++)
                    getPointOnArc(d / numberOfPoints);
                const array = new Float32Array(points);
                const attributes = {};
                attributes['POSITION'] = new viewer_shared_types_1.AttributeData(array, 3, 0, 0, 0, false, array.length / 3);
                const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, null), viewer_shared_types_1.PRIMITIVE_MODE.LINE_STRIP);
                singleCircleNode.data.push(geometry);
                singleCircleNode.addTransformation({
                    id: 'circle_' + i + '_translation',
                    matrix: gl_matrix_1.mat4.translate(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(circleCenter[0], circleCenter[1], circleCenter[2]))
                });
                const circleRotationMatrix = gl_matrix_1.mat4.transpose(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.fromValues(circleXAxis[0], circleYAxis[0], circleZAxis[0], 0, circleXAxis[1], circleYAxis[1], circleZAxis[1], 0, circleXAxis[2], circleYAxis[2], circleZAxis[2], 0, 0, 0, 0, 1));
                singleCircleNode.addTransformation({
                    id: 'circle_' + i + '_rotation',
                    matrix: circleRotationMatrix
                });
                circleNode.addChild(singleCircleNode);
            }
            return circleNode;
        });
    }
    loadCylinders() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.cylinders)
                throw new Error('Cylinders not available.');
            const cylinder = this._content.cylinders;
            const cylinderNode = new viewer_shared_node_tree_1.TreeNode('cylinders');
            const data = yield this.loadAccessor(cylinder.attributes['CYLINDERS']);
            const count = data.array.length / data.itemSize;
            for (let i = 0; i < count; i++) {
                const singleCylinderNode = new viewer_shared_node_tree_1.TreeNode('cylinder_' + i);
                const index = i * 7;
                const cylinderTop = gl_matrix_1.vec3.fromValues(data.array[index + 0], data.array[index + 1], data.array[index + 2]);
                const cylinderBottom = gl_matrix_1.vec3.fromValues(data.array[index + 3], data.array[index + 4], data.array[index + 5]);
                const cylinderRadius = data.array[index + 6];
                const cylinderAxis = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), cylinderTop, cylinderBottom);
                const dotX = Math.abs(gl_matrix_1.vec3.dot(cylinderAxis, gl_matrix_1.vec3.fromValues(1, 0, 0)));
                const dotY = Math.abs(gl_matrix_1.vec3.dot(cylinderAxis, gl_matrix_1.vec3.fromValues(0, 1, 0)));
                let cylinderXAxis;
                if (dotX < dotY) {
                    cylinderXAxis = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), cylinderAxis, gl_matrix_1.vec3.fromValues(1, 0, 0));
                }
                else {
                    cylinderXAxis = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), cylinderAxis, gl_matrix_1.vec3.fromValues(0, 1, 0));
                }
                const cylinderYAxis = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), cylinderAxis, cylinderXAxis);
                gl_matrix_1.vec3.normalize(cylinderAxis, cylinderAxis);
                gl_matrix_1.vec3.normalize(cylinderXAxis, cylinderXAxis);
                gl_matrix_1.vec3.normalize(cylinderYAxis, cylinderYAxis);
                if (cylinderRadius <= 0) {
                    this._logger.warn('SDGTFLoader.loadCylinders: Cylinder radius is <= 0.');
                    continue;
                }
                const indices = [];
                const vertices = [];
                const normals = [];
                const uvs = [];
                const height = gl_matrix_1.vec3.distance(cylinderTop, cylinderBottom);
                const halfHeight = height / 2;
                const thetaStart = 0, thetaLength = Math.PI * 2;
                let indexCounter = 0;
                const indexArray = [];
                const heightSegments = 1, radialSegments = 50;
                const normal = gl_matrix_1.vec3.create();
                const vertex = gl_matrix_1.vec3.create();
                let groupCount = 0;
                // this will be used to calculate the normal
                const slope = 0;
                // generate vertices, normals and uvs
                for (let y = 0; y <= heightSegments; y++) {
                    const indexRow = [];
                    const v = y / heightSegments;
                    // calculate the radius of the current row
                    const radius = cylinderRadius;
                    for (let x = 0; x <= radialSegments; x++) {
                        const u = x / radialSegments;
                        const theta = u * thetaLength + thetaStart;
                        const sinTheta = Math.sin(theta);
                        const cosTheta = Math.cos(theta);
                        // vertex
                        vertex[0] = radius * sinTheta;
                        vertex[1] = -v * height + halfHeight;
                        vertex[2] = radius * cosTheta;
                        vertices.push(vertex[0], vertex[1], vertex[2]);
                        // normal
                        gl_matrix_1.vec3.normalize(normal, gl_matrix_1.vec3.fromValues(sinTheta, slope, cosTheta));
                        normals.push(normal[0], normal[1], normal[2]);
                        // uv
                        uvs.push(u, 1 - v);
                        // save index of vertex in respective row
                        indexRow.push(indexCounter++);
                    }
                    // now save vertices of the row in our index array
                    indexArray.push(indexRow);
                }
                // generate indices
                for (let x = 0; x < radialSegments; x++) {
                    for (let y = 0; y < heightSegments; y++) {
                        // we use the index array to access the correct indices
                        const a = indexArray[y][x];
                        const b = indexArray[y + 1][x];
                        const c = indexArray[y + 1][x + 1];
                        const d = indexArray[y][x + 1];
                        // faces
                        indices.push(a, b, d);
                        indices.push(b, c, d);
                        // update group counter
                        groupCount += 6;
                    }
                }
                const attributes = {};
                attributes['POSITION'] = new viewer_shared_types_1.AttributeData(new Float32Array(vertices), 3, 0, 0, 0, false, vertices.length / 3);
                attributes['NORMAL'] = new viewer_shared_types_1.AttributeData(new Float32Array(normals), 3, 0, 0, 0, false, normals.length / 3);
                attributes['TEXCOORD_0'] = new viewer_shared_types_1.AttributeData(new Float32Array(uvs), 2, 0, 0, 0, false, uvs.length / 2);
                const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, new viewer_shared_types_1.AttributeData(this.convertToIndicesArray(indices), 1, 0, 0, 0, false, indices.length)), viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLES);
                singleCylinderNode.data.push(geometry);
                singleCylinderNode.addTransformation({
                    id: 'cylinder_' + i + '_translation',
                    matrix: gl_matrix_1.mat4.translate(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.create(), cylinderBottom)
                });
                const cylinderRotationMatrix = gl_matrix_1.mat4.transpose(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.fromValues(cylinderXAxis[0], cylinderYAxis[0], cylinderAxis[0], 0, cylinderXAxis[1], cylinderYAxis[1], cylinderAxis[1], 0, cylinderXAxis[2], cylinderYAxis[2], cylinderAxis[2], 0, 0, 0, 0, 1));
                singleCylinderNode.addTransformation({
                    id: 'cylinder_' + i + '_rotation',
                    matrix: cylinderRotationMatrix
                });
                singleCylinderNode.addTransformation({
                    id: 'cylinder_' + i + '_rotation2',
                    matrix: gl_matrix_1.mat4.rotateX(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.create(), 0.5 * Math.PI)
                });
                singleCylinderNode.addTransformation({
                    id: 'cylinder_' + i + '_translation2',
                    matrix: gl_matrix_1.mat4.translate(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(0, 0, 0.5 * gl_matrix_1.vec3.distance(cylinderTop, cylinderBottom)))
                });
                cylinderNode.addChild(singleCylinderNode);
            }
            return cylinderNode;
        });
    }
    loadSpheres() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.spheres)
                throw new Error('Spheres not available.');
            const sphere = this._content.spheres;
            const sphereNode = new viewer_shared_node_tree_1.TreeNode('spheres');
            const data = yield this.loadAccessor(sphere.attributes['SPHERES']);
            const count = data.array.length / data.itemSize;
            for (let i = 0; i < count; i++) {
                const singleSphereNode = new viewer_shared_node_tree_1.TreeNode('sphere_' + i);
                const index = i * 4;
                const sphereTranslation = gl_matrix_1.vec3.fromValues(data.array[index + 0], data.array[index + 1], data.array[index + 2]);
                const sphereRadius = data.array[index + 3];
                if (sphereRadius <= 0) {
                    this._logger.warn('SDGTFLoader.loadSpheres: Sphere radius is <= 0.');
                    continue;
                }
                const indices = [];
                const vertices = [];
                const normals = [];
                const uvs = [];
                const grid = [];
                // for some reason, this doesn't work with values > 15
                // let's not look into it, it's legacy stuff
                const heightSegments = 15, widthSegments = 15;
                const phiStart = 0, phiLength = Math.PI * 2, thetaStart = 0, thetaLength = Math.PI;
                const thetaEnd = Math.min(thetaStart + thetaLength, Math.PI);
                let indexCounter = 0;
                // generate vertices, normals and uvs
                for (let iy = 0; iy <= heightSegments; iy++) {
                    const verticesRow = [];
                    const v = iy / heightSegments;
                    // special case for the poles
                    let uOffset = 0;
                    if (iy == 0 && thetaStart == 0) {
                        uOffset = 0.5 / widthSegments;
                    }
                    else if (iy == heightSegments && thetaEnd == Math.PI) {
                        uOffset = -0.5 / widthSegments;
                    }
                    for (let ix = 0; ix <= widthSegments; ix++) {
                        const u = ix / widthSegments;
                        // vertex
                        const vertex = gl_matrix_1.vec3.fromValues(-sphereRadius * Math.cos(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength), sphereRadius * Math.cos(thetaStart + v * thetaLength), sphereRadius * Math.sin(phiStart + u * phiLength) * Math.sin(thetaStart + v * thetaLength));
                        vertices.push(vertex[0], vertex[1], vertex[2]);
                        // normal
                        const normal = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), vertex);
                        normals.push(normal[0], normal[1], normal[2]);
                        // uv
                        uvs.push(u + uOffset, 1 - v);
                        verticesRow.push(indexCounter++);
                    }
                    grid.push(verticesRow);
                }
                // indices
                for (let iy = 0; iy < heightSegments; iy++) {
                    for (let ix = 0; ix < widthSegments; ix++) {
                        const a = grid[iy][ix + 1];
                        const b = grid[iy][ix];
                        const c = grid[iy + 1][ix];
                        const d = grid[iy + 1][ix + 1];
                        if (iy !== 0 || thetaStart > 0)
                            indices.push(a, b, d);
                        if (iy !== heightSegments - 1 || thetaEnd < Math.PI)
                            indices.push(b, c, d);
                    }
                }
                const attributes = {};
                attributes['POSITION'] = new viewer_shared_types_1.AttributeData(new Float32Array(vertices), 3, 0, 0, 0, false, vertices.length / 3);
                attributes['NORMAL'] = new viewer_shared_types_1.AttributeData(new Float32Array(normals), 3, 0, 0, 0, false, normals.length / 3);
                attributes['TEXCOORD_0'] = new viewer_shared_types_1.AttributeData(new Float32Array(uvs), 2, 0, 0, 0, false, uvs.length / 2);
                const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, new viewer_shared_types_1.AttributeData(this.convertToIndicesArray(indices), 1, 0, 0, 0, false, indices.length)), viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLES);
                singleSphereNode.data.push(geometry);
                singleSphereNode.addTransformation({
                    id: 'sphere_' + i + '_translation',
                    matrix: gl_matrix_1.mat4.translate(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.create(), sphereTranslation)
                });
                sphereNode.addChild(singleSphereNode);
            }
            return sphereNode;
        });
    }
    loadPoint(pointName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.points[pointName])
                throw new Error('Point not available.');
            const point = this._content.points[pointName];
            const pointNode = new viewer_shared_node_tree_1.TreeNode(pointName);
            const attributes = {};
            const data = yield this.loadAccessor(point.attributes['POINTS']);
            attributes['POSITION'] = new viewer_shared_types_1.AttributeData(data.array, 3, data.itemBytes, data.byteOffset, data.elementBytes, data.normalized, data.count);
            const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, null), viewer_shared_types_1.PRIMITIVE_MODE.POINTS);
            pointNode.data.push(geometry);
            return pointNode;
        });
    }
    loadPolyline(polylineName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.polylines[polylineName])
                throw new Error('Polyline not available.');
            const polyLine = this._content.polylines[polylineName];
            const polyLineNode = new viewer_shared_node_tree_1.TreeNode(polylineName);
            const attributes = {};
            const data = yield this.loadAccessor(polyLine.attributes['VERTICES']);
            attributes['POSITION'] = new viewer_shared_types_1.AttributeData(data.array, 3, data.itemBytes, data.byteOffset, data.elementBytes, data.normalized, data.count);
            const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, null), viewer_shared_types_1.PRIMITIVE_MODE.LINE_STRIP);
            polyLineNode.data.push(geometry);
            return polyLineNode;
        });
    }
    loadSurfacepatch(surfacepatchName) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.surfacepatches[surfacepatchName])
                throw new Error('Surfacepatch not available.');
            const surfacepatch = this._content.surfacepatches[surfacepatchName];
            const surfacepatchNode = new viewer_shared_node_tree_1.TreeNode(surfacepatchName);
            const controlPointCountU = surfacepatch.controlPointCountU;
            const controlPointCountV = surfacepatch.controlPointCountV;
            const controlPointsData = yield this.loadAccessor(surfacepatch.attributes['CONTROLPOINTS']); // vec3
            const controlPoints = [];
            let pointCount = 0;
            for (let u = 0; u < controlPointCountU; u++) {
                let innerArray = [];
                for (let v = 0; v < controlPointCountV; v++) {
                    innerArray.push(gl_matrix_1.vec4.fromValues(controlPointsData.array[pointCount * 3], controlPointsData.array[pointCount * 3 + 1], controlPointsData.array[pointCount * 3 + 2], 1));
                    pointCount++;
                }
                controlPoints.push(innerArray);
            }
            const knotsUData = yield this.loadAccessor(surfacepatch.attributes['KNOTSU']); // scalar
            const knotsU = [knotsUData.array[0]];
            for (let i = 0; i < knotsUData.array.length; i++)
                knotsU.push(knotsUData.array[i]);
            knotsU.push(knotsUData.array[knotsUData.array.length - 1]);
            const knotsVData = yield this.loadAccessor(surfacepatch.attributes['KNOTSV']); // scalar
            const knotsV = [knotsVData.array[0]];
            for (let i = 0; i < knotsVData.array.length; i++)
                knotsV.push(knotsVData.array[i]);
            knotsV.push(knotsVData.array[knotsVData.array.length - 1]);
            const degreeU = surfacepatch.degreeU;
            const degreeV = surfacepatch.degreeV;
            const findSpan = (knots, degree, u) => {
                const n = knots.length - degree - 1;
                if (u >= knots[n])
                    return n - 1;
                if (u <= knots[degree])
                    return degree;
                let low = degree;
                let high = n;
                let mid = Math.floor((low + high) / 2);
                while (u < knots[mid] || u >= knots[mid + 1]) {
                    if (u < knots[mid]) {
                        high = mid;
                    }
                    else {
                        low = mid;
                    }
                    mid = Math.floor((low + high) / 2);
                }
                return mid;
            };
            const calcBasisFunctions = (knots, degree, span, u) => {
                const N = [];
                const left = [];
                const right = [];
                N[0] = 1.0;
                for (let j = 1; j <= degree; ++j) {
                    left[j] = u - knots[span + 1 - j];
                    right[j] = knots[span + j] - u;
                    let saved = 0.0;
                    for (let r = 0; r < j; ++r) {
                        const rv = right[r + 1];
                        const lv = left[j - r];
                        const temp = N[r] / (rv + lv);
                        N[r] = saved + rv * temp;
                        saved = lv * temp;
                    }
                    N[j] = saved;
                }
                return N;
            };
            const calcSurfacePoint = (u, v) => {
                const uspan = findSpan(knotsU, degreeU, u);
                const vspan = findSpan(knotsV, degreeV, v);
                const Nu = calcBasisFunctions(knotsU, degreeU, uspan, u);
                const Nv = calcBasisFunctions(knotsV, degreeV, vspan, v);
                const temp = [];
                for (let l = 0; l <= degreeV; ++l) {
                    temp[l] = gl_matrix_1.vec4.create();
                    for (let k = 0; k <= degreeU; ++k) {
                        const point = gl_matrix_1.vec4.clone(controlPoints[uspan - degreeU + k][vspan - degreeV + l]);
                        const w = point[3];
                        point[0] *= w;
                        point[1] *= w;
                        point[2] *= w;
                        gl_matrix_1.vec4.add(temp[l], temp[l], gl_matrix_1.vec4.multiply(gl_matrix_1.vec4.create(), point, gl_matrix_1.vec4.fromValues(Nu[k], Nu[k], Nu[k], Nu[k])));
                    }
                }
                const Sw = gl_matrix_1.vec4.create();
                for (let l = 0; l <= degreeV; ++l) {
                    gl_matrix_1.vec4.add(Sw, Sw, gl_matrix_1.vec4.multiply(gl_matrix_1.vec4.create(), temp[l], gl_matrix_1.vec4.fromValues(Nv[l], Nv[l], Nv[l], Nv[l])));
                }
                gl_matrix_1.vec4.divide(Sw, Sw, gl_matrix_1.vec4.fromValues(Sw[3], Sw[3], Sw[3], Sw[3]));
                return gl_matrix_1.vec3.fromValues(Sw[0], Sw[1], Sw[2]);
            };
            const getPointOnSurfacepatch = (t1, t2) => {
                const u = knotsU[0] + t1 * (knotsU[knotsU.length - 1] - knotsU[0]); // linear mapping t1->u
                const v = knotsV[0] + t2 * (knotsV[knotsV.length - 1] - knotsV[0]); // linear mapping t2->u
                return calcSurfacePoint(u, v);
            };
            const numberOfPoints = 15;
            const indices = [];
            const vertices = [];
            for (let d = 0; d <= numberOfPoints; d++) {
                const v = d / numberOfPoints;
                for (let f = 0; f <= numberOfPoints; f++) {
                    const u = f / numberOfPoints;
                    const vertex = getPointOnSurfacepatch(u, v);
                    vertices.push(vertex[0], vertex[1], vertex[2]);
                }
            }
            for (let d = 0; d < numberOfPoints; d++) {
                for (let f = 0; f < numberOfPoints; f++) {
                    const i1 = d * (numberOfPoints + 1) + f;
                    const i2 = d * (numberOfPoints + 1) + f + 1;
                    const i3 = (d + 1) * (numberOfPoints + 1) + f;
                    const i4 = (d + 1) * (numberOfPoints + 1) + f + 1;
                    // faces one and two
                    indices.push(i3, i2, i1);
                    indices.push(i2, i3, i4);
                }
            }
            const attributes = {};
            attributes['POSITION'] = new viewer_shared_types_1.AttributeData(new Float32Array(vertices), 3, 0, 0, 0, false, vertices.length / 3);
            // to not compute normals ourselves, we just let three.js do it
            // in our geometry loader, this array will cause the computation of vertex normals
            attributes['NORMAL'] = new viewer_shared_types_1.AttributeData(new Float32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]), 3, 0, 0, 0, false, vertices.length / 3);
            const geometry = new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, new viewer_shared_types_1.AttributeData(this.convertToIndicesArray(indices), 1, 0, 0, 0, false, indices.length)), viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLES);
            surfacepatchNode.data.push(geometry);
            return surfacepatchNode;
        });
    }
    loadScene() {
        return __awaiter(this, void 0, void 0, function* () {
            const sceneNode = new viewer_shared_node_tree_1.TreeNode('sdgtf_content');
            // arcs
            if (this._content.arcs)
                sceneNode.addChild(yield this.loadArcs());
            // beziercurves
            if (this._content.beziercurves) {
                for (let beziercurve in this._content.beziercurves)
                    sceneNode.addChild(yield this.loadBeziercurve(beziercurve));
            }
            // circles
            if (this._content.circles)
                sceneNode.addChild(yield this.loadCircles());
            // cylinders
            if (this._content.cylinders)
                sceneNode.addChild(yield this.loadCylinders());
            //points
            if (this._content.points) {
                for (let point in this._content.points)
                    sceneNode.addChild(yield this.loadPoint(point));
            }
            // polylines
            if (this._content.polylines) {
                for (let line in this._content.polylines)
                    sceneNode.addChild(yield this.loadPolyline(line));
            }
            // spheres
            if (this._content.spheres)
                sceneNode.addChild(yield this.loadSpheres());
            // surfacepatches
            if (this._content.surfacepatches) {
                for (let surfacepatch in this._content.surfacepatches)
                    sceneNode.addChild(yield this.loadSurfacepatch(surfacepatch));
            }
            return sceneNode;
        });
    }
}
exports.SDGTFLoader = SDGTFLoader;
//# sourceMappingURL=SDGTFLoader.js.map

/***/ }),

/***/ 2640:
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
exports.GLTFLoader = exports.GLTF_EXTENSIONS = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
const BufferLoader_1 = __webpack_require__(54866);
const BufferViewLoader_1 = __webpack_require__(51595);
const AccessorLoader_1 = __webpack_require__(50127);
const TextureLoader_1 = __webpack_require__(76947);
const MaterialLoader_1 = __webpack_require__(63133);
const GeometryLoader_1 = __webpack_require__(78876);
var GLTF_EXTENSIONS;
(function (GLTF_EXTENSIONS) {
    GLTF_EXTENSIONS["KHR_BINARY_GLTF"] = "KHR_binary_glTF";
    GLTF_EXTENSIONS["KHR_DRACO_MESH_COMPRESSION"] = "KHR_draco_mesh_compression";
    GLTF_EXTENSIONS["KHR_LIGHTS_PUNCTUAL"] = "KHR_lights_punctual";
    GLTF_EXTENSIONS["KHR_MATERIALS_CLEARCOAT"] = "KHR_materials_clearcoat";
    GLTF_EXTENSIONS["KHR_MATERIALS_IOR"] = "KHR_materials_ior";
    GLTF_EXTENSIONS["KHR_MATERIALS_PBRSPECULARGLOSSINESS"] = "KHR_materials_pbrSpecularGlossiness";
    GLTF_EXTENSIONS["KHR_MATERIALS_SHEEN"] = "KHR_materials_sheen";
    GLTF_EXTENSIONS["KHR_MATERIALS_SPECULAR"] = "KHR_materials_specular";
    GLTF_EXTENSIONS["KHR_MATERIALS_TRANSMISSION"] = "KHR_materials_transmission";
    GLTF_EXTENSIONS["KHR_MATERIALS_UNLIT"] = "KHR_materials_unlit";
    GLTF_EXTENSIONS["KHR_MATERIALS_VARIANTS"] = "KHR_materials_variants";
    GLTF_EXTENSIONS["KHR_MATERIALS_VOLUME"] = "KHR_materials_volume";
    GLTF_EXTENSIONS["KHR_MESH_QUANTIZATION"] = "KHR_mesh_quantization";
    GLTF_EXTENSIONS["KHR_TEXTURE_TRANSFORM"] = "KHR_texture_transform";
    GLTF_EXTENSIONS["SHAPEDIVER_MATERIALS_PRESET"] = "SHAPEDIVER_materials_preset";
})(GLTF_EXTENSIONS = exports.GLTF_EXTENSIONS || (exports.GLTF_EXTENSIONS = {}));
// eslint-disable-next-line @typescript-eslint/no-var-requires
const DRACO = __webpack_require__(96924);
class GLTFLoader {
    constructor() {
        // #region Properties (22)
        this.BINARY_EXTENSION_HEADER_LENGTH = 20;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._globalTransformation = gl_matrix_1.mat4.fromValues(1, 0, 0, 0, 0, 0, 1, 0, 0, -1, 0, 0, 0, 0, 0, 1);
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        this._performanceEvaluator = viewer_shared_services_1.PerformanceEvaluator.instance;
        this._progressUpdateLimit = 500;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._eventId = '';
        this._nodes = {};
        this._numberOfConvertedNodes = 0;
        this._numberOfNodes = 0;
        this._progressTimer = 0;
        // #endregion Private Methods (7)
    }
    // #endregion Properties (22)
    // #region Public Methods (2)
    load(content, gltfBinary, gltfHeader, baseUri, taskEventId) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this._eventId = taskEventId || this._uuidGenerator.create();
            const eventStart = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: 0, status: 'Starting glTF 2.0 loading.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
            this._numberOfConvertedNodes = 0;
            this._numberOfNodes = content.nodes ? content.nodes.length : 0;
            this._progressTimer = performance.now();
            this._baseUri = baseUri;
            if (gltfBinary && gltfHeader)
                this._body = gltfBinary.slice(this.BINARY_EXTENSION_HEADER_LENGTH + gltfHeader.contentLength + 8, gltfHeader.length);
            this._content = content;
            this.validateVersionAndExtensions();
            const dracoModule = yield new DRACO();
            this._bufferLoader = new BufferLoader_1.BufferLoader(this._content, this._body, this._baseUri);
            yield this._bufferLoader.load();
            this._bufferViewLoader = new BufferViewLoader_1.BufferViewLoader(this._content, this._bufferLoader);
            this._bufferViewLoader.load();
            this._accessorLoader = new AccessorLoader_1.AccessorLoader(this._content, this._bufferViewLoader);
            this._accessorLoader.load();
            this._textureLoader = new TextureLoader_1.TextureLoader(this._content, this._bufferViewLoader, this._baseUri);
            yield this._textureLoader.load();
            this._materialLoader = new MaterialLoader_1.MaterialLoader(this._content, this._textureLoader);
            yield this._materialLoader.load();
            this._geometryLoader = new GeometryLoader_1.GeometryLoader(this._content, this._accessorLoader, this._bufferViewLoader, this._materialLoader, dracoModule);
            const eventProgressInit = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: 0.1, status: 'Initial logic of glTF loading.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgressInit);
            const node = yield this.loadScene();
            if (this._content.extensions && this._content.extensions[GLTF_EXTENSIONS.KHR_MATERIALS_VARIANTS]) {
                const variants = this._content.extensions[GLTF_EXTENSIONS.KHR_MATERIALS_VARIANTS].variants;
                for (let i = 0; i < variants.length; i++)
                    this._geometryLoader.materialVariantsData.variants.push(variants[i].name);
                this._geometryLoader.materialVariantsData.variantIndex = 0;
                node.data.push(this._geometryLoader.materialVariantsData);
            }
            if (this._content.skins !== undefined && this._content.nodes !== undefined) {
                for (let i = 0; i < ((_a = this._content.nodes) === null || _a === void 0 ? void 0 : _a.length); i++) {
                    if (this._content.nodes[i].skin !== undefined) {
                        const skinDef = this.loadSkin(this._content.nodes[i].skin);
                        const skinNode = this._nodes[i];
                        const bones = [];
                        const boneInverses = [];
                        for (let j = 0; j < skinDef.joints.length; j++) {
                            this._nodes[skinDef.joints[j]].data.push(new viewer_shared_types_1.BoneData());
                            bones.push(this._nodes[skinDef.joints[j]]);
                            let mat = gl_matrix_1.mat4.create();
                            if (skinDef.inverseBindMatrices !== undefined) {
                                const matricesArray = skinDef.inverseBindMatrices.array;
                                mat = gl_matrix_1.mat4.fromValues(matricesArray[j * 16 + 0], matricesArray[j * 16 + 1], matricesArray[j * 16 + 2], matricesArray[j * 16 + 3], matricesArray[j * 16 + 4], matricesArray[j * 16 + 5], matricesArray[j * 16 + 6], matricesArray[j * 16 + 7], matricesArray[j * 16 + 8], matricesArray[j * 16 + 9], matricesArray[j * 16 + 10], matricesArray[j * 16 + 11], matricesArray[j * 16 + 12], matricesArray[j * 16 + 13], matricesArray[j * 16 + 14], matricesArray[j * 16 + 15]);
                            }
                            boneInverses.push(mat);
                        }
                        skinNode.skinNode = true;
                        skinNode.bones = bones;
                        skinNode.boneInverses = boneInverses;
                    }
                }
            }
            if (this._content.animations)
                for (let i = 0; i < ((_b = this._content.animations) === null || _b === void 0 ? void 0 : _b.length); i++)
                    node.data.push(this.loadAnimation(i));
            const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: 1, status: 'GlTF loading complete.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
            return node;
        });
    }
    loadWithUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            this._performanceEvaluator.startSection('gltfProcessing.' + url);
            this._performanceEvaluator.startSection('loadGltf.' + url);
            const axiosResponse = yield this._httpClient.get(url, {
                responseType: 'arraybuffer'
            });
            this._performanceEvaluator.endSection('loadGltf.' + url);
            let gltfContent, gltfBinary, gltfBaseUrl, gltfHeader;
            const magic = new TextDecoder().decode(new Uint8Array(axiosResponse.data, 0, 4));
            const isBinary = magic === 'glTF' || (axiosResponse.headers['content-type'] &&
                (axiosResponse.headers['content-type'] === 'model/gltf-binary' ||
                    axiosResponse.headers['content-type'] === 'application/octet-stream' ||
                    axiosResponse.headers['content-type'] === 'model/gltf.binary'));
            if (isBinary) {
                gltfBinary = axiosResponse.data;
                // create header data
                const headerDataView = new DataView(gltfBinary, 0, this.BINARY_EXTENSION_HEADER_LENGTH);
                gltfHeader = {
                    magic: magic,
                    version: headerDataView.getUint32(4, true),
                    length: headerDataView.getUint32(8, true),
                    contentLength: headerDataView.getUint32(12, true),
                    contentFormat: headerDataView.getUint32(16, true)
                };
                if (gltfHeader.magic != 'glTF')
                    throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GLTFLoader.load: Invalid data: sdgTF magic wrong.');
                // create content
                const contentDataView = new DataView(gltfBinary, this.BINARY_EXTENSION_HEADER_LENGTH, gltfHeader.contentLength);
                const contentDecoded = new TextDecoder().decode(contentDataView);
                gltfContent = JSON.parse(contentDecoded);
                // create body
                this._body = gltfBinary.slice(this.BINARY_EXTENSION_HEADER_LENGTH + gltfHeader.contentLength + 8, gltfHeader.length);
            }
            else {
                gltfContent = JSON.parse(new TextDecoder().decode(axiosResponse.data));
                const removeLastDirectoryPartOf = (the_url) => {
                    const dir_char = the_url.includes('/') ? '/' : '\\';
                    const the_arr = the_url.split(dir_char);
                    the_arr.pop();
                    return the_arr.join(dir_char);
                };
                gltfBaseUrl = removeLastDirectoryPartOf(url);
                if (!gltfBaseUrl && window && window.location && window.location.href)
                    gltfBaseUrl = removeLastDirectoryPartOf(window.location.href);
            }
            return yield this.load(gltfContent, gltfBinary, gltfHeader, gltfBaseUrl);
        });
    }
    // #endregion Public Methods (2)
    // #region Private Methods (7)
    /**
         * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
         * @param {number} animationIndex
         * @return {Promise<AnimationClip>}
         */
    loadAnimation(animationId) {
        if (!this._content.animations)
            throw new Error('Animations not available.');
        if (!this._content.animations[animationId])
            throw new Error('Animations not available.');
        const animationDef = this._content.animations[animationId];
        const animationTracks = [];
        let min = Infinity, max = -Infinity;
        for (let i = 0; i < animationDef.channels.length; i++) {
            const channel = animationDef.channels[i];
            const sampler = animationDef.samplers[channel.sampler];
            const target = channel.target;
            const path = target.path;
            const node = this._nodes[target.node];
            if (node === undefined)
                throw new Error('Animation node not available.');
            const input = this._accessorLoader.getAccessor(sampler.input);
            min = Math.min(min, input.min[0]);
            max = Math.max(max, input.max[0]);
            const output = this._accessorLoader.getAccessor(sampler.output);
            let interpolation = sampler.interpolation;
            if (interpolation === 'CUBICSPLINE') {
                this._logger.warn('Animation with CUBICSPLINE interpolation is currently not supported. Assigning linear interpolation instead.');
                interpolation = 'linear';
            }
            animationTracks.push({
                node,
                times: input.array,
                values: output.array,
                path: path,
                interpolation: interpolation === null || interpolation === void 0 ? void 0 : interpolation.toLowerCase()
            });
        }
        return new viewer_shared_types_1.AnimationData(animationDef.name || 'gltf_animation_' + animationId, animationTracks, min, max - min);
    }
    loadCamera(cameraId) {
        if (!this._content.cameras)
            throw new Error('Cameras not available.');
        if (!this._content.cameras[cameraId])
            throw new Error('Cameras not available.');
        const cameraDef = this._content.cameras[cameraId];
        const cameraNode = new viewer_shared_node_tree_1.TreeNode(cameraDef.name || 'camera_' + cameraId);
        cameraNode.originalName = cameraDef.name;
        let cameraData;
        if (cameraDef.type === 'perspective') {
            const perspectiveCameraDef = cameraDef.perspective;
            cameraData = new viewer_rendering_engine_camera_engine_1.PerspectiveCamera(cameraNode.id);
            cameraNode.data.push(cameraData);
            cameraData.fov = perspectiveCameraDef.yfov * (180 / Math.PI);
            cameraData.aspect = perspectiveCameraDef.aspectRatio || 1;
            cameraData.near = perspectiveCameraDef.znear || 1;
            cameraData.far = perspectiveCameraDef.zfar || 2e6;
        }
        else {
            const orthographicCameraDef = cameraDef.orthographic;
            cameraData = new viewer_rendering_engine_camera_engine_1.OrthographicCamera(cameraNode.id);
            cameraNode.data.push(cameraData);
            cameraData.left = -orthographicCameraDef.xmag;
            cameraData.right = orthographicCameraDef.xmag;
            cameraData.top = -orthographicCameraDef.ymag;
            cameraData.bottom = orthographicCameraDef.ymag;
            cameraData.near = orthographicCameraDef.znear || 1;
            cameraData.far = orthographicCameraDef.zfar || 2e6;
        }
        cameraData.useNodeData = true;
        cameraData.node = cameraNode;
        return cameraNode;
    }
    loadLights(lightId) {
        if (!this._content.extensions || !this._content.extensions[GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL] || !this._content.extensions[GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL].lights)
            throw new Error(`Extension ${GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL} not available.`);
        if (!this._content.extensions[GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL].lights[lightId])
            throw new Error('Light not available.');
        const lightDef = this._content.extensions[GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL].lights[lightId];
        const lightNode = new viewer_shared_node_tree_1.TreeNode(lightDef.name || 'light_' + lightId);
        lightNode.originalName = lightDef.name;
        let color = '#ffffffff';
        if (lightDef.color !== undefined)
            color = [lightDef.color[0] * 255, lightDef.color[1] * 255, lightDef.color[2] * 255];
        const range = lightDef.range !== undefined ? lightDef.range : 0;
        let lightData;
        if (lightDef.type === 'directional') {
            lightData = new viewer_rendering_engine_light_engine_1.DirectionalLight({ color });
            lightNode.data.push(lightData);
            const directionalLightData = lightData;
            if (lightDef.intensity !== undefined)
                directionalLightData.intensity = lightDef.intensity;
        }
        else if (lightDef.type === 'point') {
            lightData = new viewer_rendering_engine_light_engine_1.PointLight({ color });
            lightNode.data.push(lightData);
            const pointLightData = lightData;
            pointLightData.distance = range;
            pointLightData.decay = 2;
            if (lightDef.intensity !== undefined)
                lightData.intensity = lightDef.intensity;
            pointLightData.position = [0, 0, 0];
        }
        else if (lightDef.type === 'spot') {
            lightData = new viewer_rendering_engine_light_engine_1.SpotLight({ color });
            lightNode.data.push(lightData);
            lightDef.spot = lightDef.spot || {};
            lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
            lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
            const spotLightData = lightData;
            spotLightData.distance = range;
            spotLightData.angle = lightDef.spot.outerConeAngle;
            spotLightData.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
            spotLightData.decay = 2;
            if (lightDef.intensity !== undefined)
                lightData.intensity = lightDef.intensity;
            spotLightData.position = [0, 0, 0];
            spotLightData.target = [0, 0, -1];
        }
        else {
            throw new Error('Unexpected light type: ' + lightDef.type);
        }
        lightData.useNodeData = true;
        return lightNode;
    }
    loadNode(nodeId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.nodes)
                throw new Error('Nodes not available.');
            if (!this._content.nodes[nodeId])
                throw new Error('Node not available.');
            const node = this._content.nodes[nodeId];
            const nodeDef = new viewer_shared_node_tree_1.TreeNode(node.name || 'node_' + nodeId);
            nodeDef.originalName = node.name;
            this._nodes[nodeId] = nodeDef;
            if (node.matrix) {
                nodeDef.addTransformation({
                    id: 'gltf_matrix',
                    matrix: gl_matrix_1.mat4.fromValues(node.matrix[0], node.matrix[1], node.matrix[2], node.matrix[3], node.matrix[4], node.matrix[5], node.matrix[6], node.matrix[7], node.matrix[8], node.matrix[9], node.matrix[10], node.matrix[11], node.matrix[12], node.matrix[13], node.matrix[14], node.matrix[15])
                });
                nodeDef.addTransformation({
                    id: 'gltf_matrix_translation',
                    matrix: gl_matrix_1.mat4.create()
                });
                nodeDef.addTransformation({
                    id: 'gltf_matrix_rotation',
                    matrix: gl_matrix_1.mat4.create()
                });
                nodeDef.addTransformation({
                    id: 'gltf_matrix_scale',
                    matrix: gl_matrix_1.mat4.create()
                });
            }
            else if (node.translation || node.scale || node.rotation) {
                const matT = node.translation ? gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(node.translation[0], node.translation[1], node.translation[2])) : gl_matrix_1.mat4.create();
                const matS = node.scale ? gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(node.scale[0], node.scale[1], node.scale[2])) : gl_matrix_1.mat4.create();
                const matR = node.rotation ? gl_matrix_1.mat4.fromQuat(gl_matrix_1.mat4.create(), gl_matrix_1.vec4.fromValues(node.rotation[0], node.rotation[1], node.rotation[2], node.rotation[3])) : gl_matrix_1.mat4.create();
                nodeDef.addTransformation({
                    id: 'gltf_matrix_translation',
                    matrix: matT
                });
                nodeDef.addTransformation({
                    id: 'gltf_matrix_rotation',
                    matrix: matR
                });
                nodeDef.addTransformation({
                    id: 'gltf_matrix_scale',
                    matrix: matS
                });
            }
            if (node.mesh !== undefined)
                nodeDef.addChild(this._geometryLoader.loadMesh(node.mesh, node.weights));
            if (node.camera !== undefined)
                nodeDef.addChild(this.loadCamera(node.camera));
            if (node.extensions && node.extensions[GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL])
                nodeDef.addChild(this.loadLights(node.extensions[GLTF_EXTENSIONS.KHR_LIGHTS_PUNCTUAL].light));
            if (node.children) {
                for (let i = 0, len = node.children.length; i < len; i++) {
                    // got through all children
                    nodeDef.addChild(yield this.loadNode(node.children[i]));
                }
            }
            this._numberOfConvertedNodes++;
            if (performance.now() - this._progressTimer > this._progressUpdateLimit) {
                this._progressTimer = performance.now();
                const eventProgress = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CONTENT_LOADING, id: this._eventId, progress: (this._numberOfConvertedNodes / this._numberOfNodes) / 2 + 0.1, status: `GlTF conversion progress: ${this._numberOfConvertedNodes}/${this._numberOfNodes} nodes.` };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgress);
                yield new Promise(resolve => setTimeout(resolve, 0));
            }
            return nodeDef;
        });
    }
    loadScene() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.scenes)
                throw new Error('Scenes not available.');
            const sceneId = this._content.scene || 0;
            if (!this._content.scenes[sceneId])
                throw new Error('Scene not available.');
            const scene = this._content.scenes[sceneId];
            const sceneDef = new viewer_shared_node_tree_1.TreeNode(scene.name || 'scene_' + sceneId + '');
            sceneDef.originalName = scene.name;
            sceneDef.addTransformation({
                id: this._uuidGenerator.create(),
                matrix: this._globalTransformation
            });
            if (scene.nodes)
                for (let i = 0, len = scene.nodes.length; i < len; i++)
                    sceneDef.addChild(yield this.loadNode(scene.nodes[i]));
            return sceneDef;
        });
    }
    loadSkin(skinId) {
        if (!this._content.skins)
            throw new Error('Skins not available.');
        if (!this._content.skins[skinId])
            throw new Error('Skin not available.');
        const skinDef = this._content.skins[skinId];
        const skinEntry = {
            joints: skinDef.joints,
            inverseBindMatrices: null
        };
        if (skinDef.inverseBindMatrices === undefined) {
            return skinEntry;
        }
        skinEntry.inverseBindMatrices = this._accessorLoader.getAccessor(skinDef.inverseBindMatrices);
        return skinEntry;
    }
    validateVersionAndExtensions() {
        if (!this._content.asset)
            throw new Error('Asset not available.');
        const asset = this._content.asset;
        if (!asset.version)
            throw new Error('Asset does not have a version.');
        const version = asset.minVersion ? asset.minVersion : asset.version;
        if (!version.startsWith('2'))
            throw new Error('Version of the glTF not supported.');
        if (this._content.extensionsUsed) {
            const notSupported = [];
            for (let i = 0; i < this._content.extensionsUsed.length; i++) {
                if (!Object.values(GLTF_EXTENSIONS).includes(this._content.extensionsUsed[i]))
                    notSupported.push(this._content.extensionsUsed[i]);
            }
            if (notSupported.length > 0) {
                let message = 'Extension' + (notSupported.length === 1 ? ' ' : 's ');
                notSupported.forEach((element, index) => {
                    message += '"' + element + '"' + (index === notSupported.length - 1 ? '' : index === notSupported.length - 2 ? ' and ' : ', ');
                });
                message += (notSupported.length === 1 ? ' is' : ' are') + ' not supported, but used. Loading glTF regardless.';
                this._logger.info('GLTFLoader.validateVersionAndExtensions: ' + message);
            }
        }
        if (this._content.extensionsRequired) {
            const notSupported = [];
            for (let i = 0; i < this._content.extensionsRequired.length; i++) {
                if (!Object.values(GLTF_EXTENSIONS).includes(this._content.extensionsRequired[i]))
                    notSupported.push(this._content.extensionsRequired[i]);
            }
            if (notSupported.length > 0) {
                let message = 'Extension' + (notSupported.length === 1 ? ' ' : 's ');
                notSupported.forEach((element, index) => {
                    message += '"' + element + '"' + (index === notSupported.length - 1 ? '' : index === notSupported.length - 2 ? ' and ' : ', ');
                });
                message += (notSupported.length === 1 ? ' is' : ' are') + ' not supported, but required. Aborting glTF loading.';
                throw new Error(message);
            }
        }
    }
}
exports.GLTFLoader = GLTFLoader;
//# sourceMappingURL=GLTFLoader.js.map

/***/ }),

/***/ 50127:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AccessorLoader = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
const viewer_shared_services_1 = __webpack_require__(8389);
class AccessorLoader {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_content, _bufferViewLoader) {
        this._content = _content;
        this._bufferViewLoader = _bufferViewLoader;
        // #region Properties (2)
        this._logger = viewer_shared_services_1.Logger.instance;
        this._loaded = {};
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getAccessor(accessorId) {
        if (!this._content.accessors)
            throw new Error('AccessorLoader.getAccessor: Accessors not available.');
        if (!this._content.accessors[accessorId])
            throw new Error('AccessorLoader.getAccessor: Accessor not available.');
        if (!this._loaded[accessorId])
            throw new Error('AccessorLoader.getAccessor: Accessor not loaded.');
        return this._loaded[accessorId];
    }
    load() {
        if (!this._content.accessors)
            return;
        for (let i = 0; i < this._content.accessors.length; i++) {
            const accessorId = i;
            if (!this._content.accessors[accessorId])
                throw new Error('AccessorLoader.load: BufferView not available.');
            const accessor = this._content.accessors[accessorId];
            if (accessor.bufferView === undefined) {
                // Ignore empty accessors, which may be used to declare runtime
                // information about attributes coming from another source (e.g. Draco
                // compression extension).
                this._loaded[accessorId] = null;
                continue;
            }
            const arrayBuffer = this._bufferViewLoader.getBufferView(accessor.bufferView);
            const itemSize = viewer_data_engine_shared_types_1.ACCESSORTYPE_V2[accessor.type];
            if (accessor.componentType === 5124)
                this._logger.warn('GLTFLoader.loadAccessor: The componentType for this accessor is 5124, which is not allowed. Trying to load it anyway.');
            const ArrayType = viewer_data_engine_shared_types_1.ACCESSORCOMPONENTTYPE_V2[accessor.componentType];
            const elementBytes = ArrayType.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessor.byteOffset || 0;
            const byteStride = accessor.bufferView !== undefined ? this._content.bufferViews ? this._content.bufferViews[accessor.bufferView].byteStride : undefined : undefined;
            const normalized = accessor.normalized === true;
            const target = this._content.bufferViews ? this._content.bufferViews[accessor.bufferView].target : undefined;
            let array;
            if (byteStride && byteStride !== itemBytes) {
                // Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
                // This makes sure that IBA.count reflects accessor.count properly
                const ibSlice = Math.floor(byteOffset / byteStride);
                array = new ArrayType(arrayBuffer, ibSlice * byteStride, accessor.count * byteStride / elementBytes);
            }
            else {
                if (arrayBuffer === null) {
                    array = new ArrayType(accessor.count * itemSize);
                }
                else {
                    array = new ArrayType(arrayBuffer, byteOffset, accessor.count * itemSize);
                }
            }
            if (accessor.sparse !== undefined) {
                const itemSizeIndices = viewer_data_engine_shared_types_1.ACCESSORTYPE_V2.SCALAR;
                const IndicesArrayType = viewer_data_engine_shared_types_1.ACCESSORCOMPONENTTYPE_V2[accessor.sparse.indices.componentType];
                const byteOffsetIndices = accessor.sparse.indices.byteOffset || 0;
                const byteOffsetValues = accessor.sparse.values.byteOffset || 0;
                if (!accessor.sparse.indices.bufferView || !accessor.sparse.values.bufferView)
                    throw new Error('Sparse Mesh not properly defined.');
                const sparseIndices = new IndicesArrayType(this._bufferViewLoader.getBufferView(accessor.sparse.indices.bufferView), byteOffsetIndices, accessor.sparse.count * itemSizeIndices);
                const sparseValues = new ArrayType(this._bufferViewLoader.getBufferView(accessor.sparse.values.bufferView), byteOffsetValues, accessor.sparse.count * itemSize);
                this._loaded[accessorId] = new viewer_shared_types_1.AttributeData(array, itemSize, itemBytes, byteOffset, elementBytes, normalized, accessor.count, accessor.min, accessor.max, byteStride, target, true, sparseIndices, sparseValues);
                continue;
            }
            this._loaded[accessorId] = new viewer_shared_types_1.AttributeData(array, itemSize, itemBytes, byteOffset, elementBytes, normalized, accessor.count, accessor.min, accessor.max, byteStride, target);
        }
    }
}
exports.AccessorLoader = AccessorLoader;
//# sourceMappingURL=AccessorLoader.js.map

/***/ }),

/***/ 54866:
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
exports.BufferLoader = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class BufferLoader {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_content, _body, _baseUri) {
        this._content = _content;
        this._body = _body;
        this._baseUri = _baseUri;
        // #region Properties (2)
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._loaded = {};
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getBuffer(bufferId) {
        if (!this._content.buffers)
            throw new Error('BufferLoader.getBuffer: Buffers not available.');
        if (!this._content.buffers[bufferId])
            throw new Error('BufferLoader.getBuffer: Buffer not available.');
        if (!this._loaded[bufferId])
            throw new Error('BufferLoader.getBuffer: Buffer not loaded.');
        return this._loaded[bufferId];
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.buffers)
                return;
            const promises = [];
            for (let i = 0; i < this._content.buffers.length; i++) {
                const bufferId = i;
                const buffer = this._content.buffers[bufferId];
                if (buffer.type && buffer.type !== 'arraybuffer') {
                    throw new Error(`BufferLoader.load: ${buffer.type} is not supported.`);
                }
                // If present, GLB container is required to be the first buffer.
                if (buffer.uri === undefined && bufferId === 0) {
                    if (!this._body)
                        throw new Error('BufferLoader.load: Buffer not available.');
                    this._loaded[bufferId] = this._body;
                    return;
                }
                const dataUriRegex = /^data:(.*?)(;base64)?,(.*)$/;
                const dataUriRegexResult = buffer.uri.match(dataUriRegex);
                // Safari can not handle Data URIs through XMLHttpRequest so process manually
                if (dataUriRegexResult) {
                    const isBase64 = !!dataUriRegexResult[2];
                    let data = dataUriRegexResult[3];
                    data = decodeURIComponent(data);
                    if (isBase64)
                        data = (0, viewer_shared_services_1.atobCustom)(data);
                    const view = new Uint8Array(data.length);
                    for (let i = 0; i < data.length; i++) {
                        view[i] = data.charCodeAt(i);
                    }
                    this._loaded[bufferId] = view.buffer;
                }
                else {
                    const httpResultPromise = this._httpClient.get(this._baseUri + '/' + buffer.uri, {
                        responseType: 'arraybuffer'
                    }).then(response => { this._loaded[bufferId] = response.data; });
                    promises.push(httpResultPromise);
                }
            }
            yield Promise.all(promises);
        });
    }
}
exports.BufferLoader = BufferLoader;
//# sourceMappingURL=BufferLoader.js.map

/***/ }),

/***/ 51595:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BufferViewLoader = void 0;
class BufferViewLoader {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(_content, _bufferLoader) {
        this._content = _content;
        this._bufferLoader = _bufferLoader;
        // #region Properties (1)
        this._loaded = {};
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getBufferView(bufferViewId) {
        if (!this._content.bufferViews)
            throw new Error('BufferViewLoader.load: BufferViews not available.');
        if (!this._content.bufferViews[bufferViewId])
            throw new Error('BufferViewLoader.load: BufferView not available.');
        if (!this._loaded[bufferViewId])
            throw new Error('BufferViewLoader.load: BufferView not loaded.');
        return this._loaded[bufferViewId];
    }
    load() {
        if (!this._content.bufferViews)
            return;
        for (let i = 0; i < this._content.bufferViews.length; i++) {
            const bufferViewId = i;
            if (!this._content.bufferViews[bufferViewId])
                throw new Error('BufferViewLoader.load: BufferView not available.');
            const bufferView = this._content.bufferViews[bufferViewId];
            const byteLength = bufferView.byteLength || 0;
            const byteOffset = bufferView.byteOffset || 0;
            if (bufferView.buffer === undefined)
                throw new Error('BufferViewLoader.load: BufferView has no buffer defined.');
            const buffer = this._bufferLoader.getBuffer(bufferView.buffer);
            const result = buffer.slice(byteOffset, byteOffset + byteLength);
            this._loaded[bufferViewId] = result;
        }
    }
}
exports.BufferViewLoader = BufferViewLoader;
//# sourceMappingURL=BufferViewLoader.js.map

/***/ }),

/***/ 78876:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeometryLoader = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_types_1 = __webpack_require__(64766);
const GLTFLoader_1 = __webpack_require__(2640);
class GeometryLoader {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(_content, _accessorLoader, _bufferViewLoader, _materialLoader, _dracoModule) {
        this._content = _content;
        this._accessorLoader = _accessorLoader;
        this._bufferViewLoader = _bufferViewLoader;
        this._materialLoader = _materialLoader;
        this._dracoModule = _dracoModule;
        // #region Properties (1)
        this._materialVariantsData = new viewer_shared_types_1.MaterialVariantsData();
        this._loaded = {};
    }
    // #endregion Constructors (1)
    // #region Public Accessors (1)
    get materialVariantsData() {
        return this._materialVariantsData;
    }
    // #endregion Public Accessors (1)
    // #region Public Methods (1)
    loadMesh(meshId, weights) {
        if (!this._content.meshes)
            throw new Error('GeometryLoader.loadMesh: Meshes not available.');
        if (!this._content.meshes[meshId])
            throw new Error('GeometryLoader.loadMesh: Mesh not available.');
        const mesh = this._content.meshes[meshId];
        const meshNode = new viewer_shared_node_tree_1.TreeNode(mesh.name || 'mesh_' + meshId);
        meshNode.originalName = mesh.name;
        if (mesh.primitives)
            for (let i = 0, len = mesh.primitives.length; i < len; i++)
                meshNode.addChild(this.loadPrimitive(meshId, mesh.primitives, i, mesh.weights || weights));
        return meshNode;
    }
    // #endregion Public Methods (1)
    // #region Private Methods (1)
    loadPrimitive(meshId, primitives, index, weights = []) {
        const primitive = primitives[index];
        const primitiveNode = new viewer_shared_node_tree_1.TreeNode('primitive_' + index);
        if (this._loaded['mesh_' + meshId + '_primitive_' + index]) {
            primitiveNode.data.push(this._loaded['mesh_' + meshId + '_primitive_' + index].clone());
            return primitiveNode;
        }
        const attributes = {};
        let indices = null;
        const convertedNames = {};
        if (primitive.extensions && primitive.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) {
            const dracoDef = primitive.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
            const arrayBuffer = this._bufferViewLoader.getBufferView(dracoDef.bufferView);
            const decoder = new this._dracoModule.Decoder();
            const array = new Int8Array(arrayBuffer);
            const geometryType = decoder.GetEncodedGeometryType(array);
            let dracoGeometry;
            if (geometryType === this._dracoModule.TRIANGULAR_MESH) {
                dracoGeometry = new this._dracoModule.Mesh();
                decoder.DecodeArrayToMesh(array, array.byteLength, dracoGeometry);
            }
            else if (geometryType === this._dracoModule.POINT_CLOUD) {
                dracoGeometry = new this._dracoModule.PointCloud();
                decoder.DecodeArrayToPointCloud(array, array.byteLength, dracoGeometry);
            }
            if (dracoDef.attributes['POSITION'] === undefined) {
                const errorMsg = "No position attribute found in the mesh.";
                this._dracoModule.destroy(decoder);
                this._dracoModule.destroy(dracoGeometry);
                throw new Error(errorMsg);
            }
            for (let a in dracoDef.attributes) {
                const attribute = decoder.GetAttributeByUniqueId(dracoGeometry, dracoDef.attributes[a]);
                const attributeData = new this._dracoModule.DracoFloat32Array();
                decoder.GetAttributeFloatForAllPoints(dracoGeometry, attribute, attributeData);
                const byteOffset = attribute.byte_offset();
                const normalized = attribute.normalized();
                const numComponents = attribute.num_components();
                const numPoints = dracoGeometry.num_points();
                const numValues = numPoints * numComponents;
                const byteLength = numValues * Float32Array.BYTES_PER_ELEMENT;
                const ptr = this._dracoModule._malloc(byteLength);
                decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, this._dracoModule.DT_FLOAT32, byteLength, ptr);
                const array = new Float32Array(this._dracoModule.HEAPF32.buffer, ptr, numValues).slice();
                this._dracoModule._free(ptr);
                if (a.includes("COLOR"))
                    array.forEach((n, i) => array[i] = Math.max(0, Math.min(1, n)));
                attributes[a] = new viewer_shared_types_1.AttributeData(array, numComponents, // itemSize
                array.BYTES_PER_ELEMENT * numComponents, // itemBytes = elementBytes * itemSize
                byteOffset, // byteOffset
                array.BYTES_PER_ELEMENT, // elementBytes
                normalized, // normalized
                array.length / numComponents);
            }
            if (geometryType == this._dracoModule.TRIANGULAR_MESH) {
                const numFaces = dracoGeometry.num_faces();
                const numIndices = numFaces * 3;
                const byteLength = numIndices * 4;
                const ptr = this._dracoModule._malloc(byteLength);
                decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
                const indexArray = new Uint32Array(this._dracoModule.HEAPF32.buffer, ptr, numIndices).slice();
                this._dracoModule._free(ptr);
                indices = new viewer_shared_types_1.AttributeData(indexArray, 1, // itemSize
                indexArray.BYTES_PER_ELEMENT * 1, // itemBytes = elementBytes * itemSize
                0, // byteOffset
                indexArray.BYTES_PER_ELEMENT, // elementBytes
                false, // normalized
                indexArray.length // count
                );
            }
            this._dracoModule.destroy(decoder);
            this._dracoModule.destroy(dracoGeometry);
        }
        for (let attribute in primitive.attributes) {
            if (attributes[attribute]) {
                convertedNames[attribute] = attribute;
                continue;
            }
            let attributeName = attribute;
            // attribute name conversion to be consistent with gltf
            if (/\d/.test(attributeName) && !attributeName.includes('_')) {
                const index = attributeName.search(/\d/);
                attributeName = attributeName.substring(0, index) + '_' + attributeName.substring(index, attributeName.length);
            }
            else if (attributeName === 'TEXCOORD' || attributeName === 'COLOR' || attributeName === 'JOINTS' || attributeName === 'WEIGHTS') {
                attributeName += '_0';
            }
            else if (attributeName === 'UV') {
                attributeName = 'TEXCOORD_0';
            }
            convertedNames[attribute] = attributeName;
            attributes[attributeName] = (this._accessorLoader.getAccessor(primitive.attributes[attribute]));
        }
        if ((primitive.indices || primitive.indices === 0) && !indices)
            indices = this._accessorLoader.getAccessor(primitive.indices);
        // reading and assigning morph targets
        if (primitive.targets) {
            for (let i = 0; i < primitive.targets.length; i++) {
                for (let target in primitive.targets[i]) {
                    if (!attributes[target])
                        continue;
                    attributes[convertedNames[target]].morphAttributeData.push((this._accessorLoader.getAccessor(primitive.targets[i][target])));
                }
            }
        }
        let material = null;
        if (primitive.material || primitive.material === 0)
            material = this._materialLoader.getMaterial(primitive.material);
        const primitiveData = new viewer_shared_types_1.PrimitiveData(attributes, indices);
        const geometryData = new viewer_shared_types_1.GeometryData(primitiveData, primitive.mode, material);
        if (primitive.extensions && primitive.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_VARIANTS]) {
            this._materialVariantsData.geometryData.push(geometryData);
            const variantsExtension = primitive.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_VARIANTS];
            for (let i = 0; i < variantsExtension.mappings.length; i++) {
                const mapping = variantsExtension.mappings[i];
                const material = this._materialLoader.getMaterial(mapping.material);
                for (let j = 0; j < mapping.variants.length; j++)
                    geometryData.materialVariants.push({ variant: mapping.variants[j], material });
            }
        }
        geometryData.morphWeights = weights;
        this._loaded['mesh_' + meshId + '_primitive_' + index] = geometryData;
        primitiveNode.data.push(geometryData);
        return primitiveNode;
    }
}
exports.GeometryLoader = GeometryLoader;
//# sourceMappingURL=GeometryLoader.js.map

/***/ }),

/***/ 63133:
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
exports.MaterialLoader = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_data_engine_material_engine_1 = __webpack_require__(93637);
const GLTFLoader_1 = __webpack_require__(2640);
class MaterialLoader {
    // #endregion Properties (4)
    // #region Constructors (1)
    constructor(_content, _textureLoader) {
        this._content = _content;
        this._textureLoader = _textureLoader;
        // #region Properties (4)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._materialEngine = viewer_data_engine_material_engine_1.MaterialEngine.instance;
        this._loaded = {};
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getMaterial(materialId) {
        if (!this._content.materials)
            throw new Error('MaterialLoader.getMaterial: Materials not available.');
        if (!this._content.materials[materialId])
            throw new Error('MaterialLoader.getMaterial: Material not available.');
        if (!this._loaded[materialId])
            throw new Error('MaterialLoader.getMaterial: Material not loaded.');
        return this._loaded[materialId];
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            this._loaded = {};
            if (!this._content.materials)
                return;
            const promises = [];
            for (let i = 0; i < this._content.materials.length; i++) {
                const materialId = i;
                const material = this._content.materials[materialId];
                const materialExtensions = material.extensions || {};
                const materialDataProperties = {};
                if (material.name !== undefined)
                    materialDataProperties.name = material.name;
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.SHAPEDIVER_MATERIALS_PRESET]) {
                    const materialPreset = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.SHAPEDIVER_MATERIALS_PRESET];
                    promises.push(new Promise((resolve, reject) => {
                        try {
                            this._materialEngine.loadPresetMaterial(materialPreset.materialpreset)
                                .then(materialData => {
                                materialData.name = material.name;
                                materialData.color = materialPreset.color;
                                this._loaded[materialId] = materialData;
                                resolve();
                            })
                                .catch(reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    }));
                    continue;
                }
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_PBRSPECULARGLOSSINESS]) {
                    const pbrSpecularGlossiness = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_PBRSPECULARGLOSSINESS];
                    const specularGlossinessMaterialDataProperties = materialDataProperties;
                    specularGlossinessMaterialDataProperties.color = '#ffffff';
                    specularGlossinessMaterialDataProperties.opacity = 1.0;
                    if (pbrSpecularGlossiness.diffuseFactor !== undefined) {
                        specularGlossinessMaterialDataProperties.color = [pbrSpecularGlossiness.diffuseFactor[0] * 255, pbrSpecularGlossiness.diffuseFactor[1] * 255, pbrSpecularGlossiness.diffuseFactor[2] * 255];
                        specularGlossinessMaterialDataProperties.opacity = pbrSpecularGlossiness.diffuseFactor[3];
                    }
                    if (pbrSpecularGlossiness.diffuseTexture !== undefined) {
                        const diffuseTextureOptions = pbrSpecularGlossiness.diffuseTexture.extensions && pbrSpecularGlossiness.diffuseTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? pbrSpecularGlossiness.diffuseTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (pbrSpecularGlossiness.diffuseTexture.texCoord !== undefined)
                            diffuseTextureOptions.texCoord = pbrSpecularGlossiness.diffuseTexture.texCoord;
                        specularGlossinessMaterialDataProperties.map = this.loadMap(pbrSpecularGlossiness.diffuseTexture.index, diffuseTextureOptions);
                    }
                    specularGlossinessMaterialDataProperties.emissiveness = '#000000';
                    specularGlossinessMaterialDataProperties.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
                    specularGlossinessMaterialDataProperties.specular = '#ffffff';
                    if (pbrSpecularGlossiness.specularFactor !== undefined) {
                        specularGlossinessMaterialDataProperties.specular = [pbrSpecularGlossiness.specularFactor[0] * 255, pbrSpecularGlossiness.specularFactor[1] * 255, pbrSpecularGlossiness.specularFactor[2] * 255];
                    }
                    if (pbrSpecularGlossiness.specularGlossinessTexture !== undefined) {
                        const specularGlossinessTextureOptions = pbrSpecularGlossiness.specularGlossinessTexture.extensions && pbrSpecularGlossiness.specularGlossinessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? pbrSpecularGlossiness.specularGlossinessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (pbrSpecularGlossiness.specularGlossinessTexture.texCoord !== undefined)
                            specularGlossinessTextureOptions.texCoord = pbrSpecularGlossiness.specularGlossinessTexture.texCoord;
                        specularGlossinessMaterialDataProperties.specularGlossinessMap = this.loadMap(pbrSpecularGlossiness.specularGlossinessTexture.index, specularGlossinessTextureOptions);
                    }
                }
                else if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_UNLIT]) {
                    const unlitMaterialDataProperties = materialDataProperties;
                    unlitMaterialDataProperties.color = '#ffffff';
                    unlitMaterialDataProperties.opacity = 1.0;
                    if (material.pbrMetallicRoughness !== undefined) {
                        if (material.pbrMetallicRoughness.baseColorFactor !== undefined) {
                            unlitMaterialDataProperties.color = [material.pbrMetallicRoughness.baseColorFactor[0] * 255, material.pbrMetallicRoughness.baseColorFactor[1] * 255, material.pbrMetallicRoughness.baseColorFactor[2] * 255];
                            unlitMaterialDataProperties.opacity = material.pbrMetallicRoughness.baseColorFactor[3];
                        }
                        if (material.pbrMetallicRoughness.baseColorTexture !== undefined) {
                            const baseColorTextureOptions = material.pbrMetallicRoughness.baseColorTexture.extensions && material.pbrMetallicRoughness.baseColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? material.pbrMetallicRoughness.baseColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                            if (material.pbrMetallicRoughness.baseColorTexture.texCoord !== undefined)
                                baseColorTextureOptions.texCoord = material.pbrMetallicRoughness.baseColorTexture.texCoord;
                            unlitMaterialDataProperties.map = this.loadMap(material.pbrMetallicRoughness.baseColorTexture.index, baseColorTextureOptions);
                        }
                    }
                }
                else {
                    const standardMaterialDataProperties = materialDataProperties;
                    if (material.pbrMetallicRoughness !== undefined) {
                        standardMaterialDataProperties.color = '#ffffff';
                        if (material.pbrMetallicRoughness.baseColorFactor !== undefined) {
                            standardMaterialDataProperties.color = [material.pbrMetallicRoughness.baseColorFactor[0] * 255, material.pbrMetallicRoughness.baseColorFactor[1] * 255, material.pbrMetallicRoughness.baseColorFactor[2] * 255];
                            standardMaterialDataProperties.opacity = material.pbrMetallicRoughness.baseColorFactor[3];
                        }
                        if (material.pbrMetallicRoughness.baseColorTexture !== undefined) {
                            const baseColorTextureOptions = material.pbrMetallicRoughness.baseColorTexture.extensions && material.pbrMetallicRoughness.baseColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? material.pbrMetallicRoughness.baseColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                            if (material.pbrMetallicRoughness.baseColorTexture.texCoord !== undefined)
                                baseColorTextureOptions.texCoord = material.pbrMetallicRoughness.baseColorTexture.texCoord;
                            standardMaterialDataProperties.map = this.loadMap(material.pbrMetallicRoughness.baseColorTexture.index, baseColorTextureOptions);
                        }
                        if (material.pbrMetallicRoughness.metallicFactor !== undefined) {
                            standardMaterialDataProperties.metalness = material.pbrMetallicRoughness.metallicFactor;
                        }
                        if (material.pbrMetallicRoughness.roughnessFactor !== undefined) {
                            standardMaterialDataProperties.roughness = material.pbrMetallicRoughness.roughnessFactor;
                        }
                        if (material.pbrMetallicRoughness.metallicRoughnessTexture !== undefined) {
                            const metallicRoughnessTextureOptions = material.pbrMetallicRoughness.metallicRoughnessTexture.extensions && material.pbrMetallicRoughness.metallicRoughnessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? material.pbrMetallicRoughness.metallicRoughnessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                            if (material.pbrMetallicRoughness.metallicRoughnessTexture.texCoord !== undefined)
                                metallicRoughnessTextureOptions.texCoord = material.pbrMetallicRoughness.metallicRoughnessTexture.texCoord;
                            standardMaterialDataProperties.metalnessRoughnessMap = this.loadMap(material.pbrMetallicRoughness.metallicRoughnessTexture.index, metallicRoughnessTextureOptions);
                        }
                    }
                }
                /**
                 * Loading of the general properties
                 */
                if (material.normalTexture !== undefined) {
                    const normalTextureOptions = material.normalTexture.extensions && material.normalTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? material.normalTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                    if (material.normalTexture.texCoord !== undefined)
                        normalTextureOptions.texCoord = material.normalTexture.texCoord;
                    materialDataProperties.normalMap = this.loadMap(material.normalTexture.index, normalTextureOptions);
                    materialDataProperties.normalScale = 1;
                    if (material.normalTexture.scale !== undefined) {
                        materialDataProperties.normalScale = material.normalTexture.scale;
                    }
                }
                if (material.occlusionTexture !== undefined) {
                    const occlusionTextureOptions = material.occlusionTexture.extensions && material.occlusionTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? material.occlusionTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                    if (material.occlusionTexture.texCoord !== undefined)
                        occlusionTextureOptions.texCoord = material.occlusionTexture.texCoord;
                    materialDataProperties.aoMap = this.loadMap(material.occlusionTexture.index, occlusionTextureOptions);
                    if (material.occlusionTexture.strength !== undefined) {
                        materialDataProperties.aoMapIntensity = material.occlusionTexture.strength;
                    }
                }
                if (material.emissiveTexture !== undefined) {
                    const emissiveTextureOptions = material.emissiveTexture.extensions && material.emissiveTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? material.emissiveTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                    if (material.emissiveTexture.texCoord !== undefined)
                        emissiveTextureOptions.texCoord = material.emissiveTexture.texCoord;
                    materialDataProperties.emissiveMap = this.loadMap(material.emissiveTexture.index, emissiveTextureOptions);
                }
                if (material.emissiveFactor !== undefined) {
                    materialDataProperties.emissiveness = [material.emissiveFactor[0] * 255, material.emissiveFactor[1] * 255, material.emissiveFactor[2] * 255];
                }
                if (material.alphaMode !== undefined) {
                    materialDataProperties.alphaMode = material.alphaMode.toLowerCase() === viewer_shared_types_1.MATERIAL_ALPHA.MASK ? viewer_shared_types_1.MATERIAL_ALPHA.MASK : material.alphaMode.toLowerCase() === viewer_shared_types_1.MATERIAL_ALPHA.BLEND ? viewer_shared_types_1.MATERIAL_ALPHA.BLEND : viewer_shared_types_1.MATERIAL_ALPHA.OPAQUE;
                    if (materialDataProperties.alphaMode === viewer_shared_types_1.MATERIAL_ALPHA.MASK) {
                        materialDataProperties.alphaCutoff = material.alphaCutoff !== undefined ? material.alphaCutoff : 0.5;
                    }
                }
                if (material.alphaCutoff !== undefined) {
                    materialDataProperties.alphaCutoff = material.alphaCutoff;
                }
                if (material.doubleSided !== undefined) {
                    materialDataProperties.side = material.doubleSided ? viewer_shared_types_1.MATERIAL_SIDE.DOUBLE : viewer_shared_types_1.MATERIAL_SIDE.FRONT;
                }
                /**
                 * Early exit for specular glossiness and unlit materials
                 */
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_PBRSPECULARGLOSSINESS]) {
                    const specularGlossinessMaterialDataProperties = materialDataProperties;
                    const materialData = new viewer_shared_types_1.MaterialSpecularGlossinessData(specularGlossinessMaterialDataProperties);
                    this._loaded[materialId] = materialData;
                    continue;
                }
                else if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_UNLIT]) {
                    const unlitMaterialDataProperties = materialDataProperties;
                    const materialData = new viewer_shared_types_1.MaterialUnlitData(unlitMaterialDataProperties);
                    this._loaded[materialId] = materialData;
                    continue;
                }
                const standardMaterialDataProperties = materialDataProperties;
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_CLEARCOAT]) {
                    const clearcoatExtension = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_CLEARCOAT];
                    if (clearcoatExtension.clearcoatFactor !== undefined) {
                        standardMaterialDataProperties.clearcoat = clearcoatExtension.clearcoatFactor;
                    }
                    if (clearcoatExtension.clearcoatTexture !== undefined) {
                        const clearcoatTextureOptions = clearcoatExtension.clearcoatTexture.extensions && clearcoatExtension.clearcoatTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? clearcoatExtension.clearcoatTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (clearcoatExtension.clearcoatTexture.texCoord !== undefined)
                            clearcoatTextureOptions.texCoord = clearcoatExtension.clearcoatTexture.texCoord;
                        standardMaterialDataProperties.clearcoatMap = this.loadMap(clearcoatExtension.clearcoatTexture.index, clearcoatTextureOptions);
                    }
                    if (clearcoatExtension.clearcoatRoughnessFactor !== undefined) {
                        standardMaterialDataProperties.clearcoatRoughness = clearcoatExtension.clearcoatRoughnessFactor;
                    }
                    if (clearcoatExtension.clearcoatRoughnessTexture !== undefined) {
                        const clearcoatRoughnessTextureOptions = clearcoatExtension.clearcoatRoughnessTexture.extensions && clearcoatExtension.clearcoatRoughnessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? clearcoatExtension.clearcoatRoughnessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (clearcoatExtension.clearcoatRoughnessTexture.texCoord !== undefined)
                            clearcoatRoughnessTextureOptions.texCoord = clearcoatExtension.clearcoatRoughnessTexture.texCoord;
                        standardMaterialDataProperties.clearcoatRoughnessMap = this.loadMap(clearcoatExtension.clearcoatRoughnessTexture.index, clearcoatRoughnessTextureOptions);
                    }
                    if (clearcoatExtension.clearcoatNormalTexture !== undefined) {
                        const clearcoatNormalTextureOptions = clearcoatExtension.clearcoatNormalTexture.extensions && clearcoatExtension.clearcoatNormalTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? clearcoatExtension.clearcoatNormalTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (clearcoatExtension.clearcoatNormalTexture.texCoord !== undefined)
                            clearcoatNormalTextureOptions.texCoord = clearcoatExtension.clearcoatNormalTexture.texCoord;
                        standardMaterialDataProperties.clearcoatNormalMap = this.loadMap(clearcoatExtension.clearcoatNormalTexture.index, clearcoatNormalTextureOptions);
                    }
                }
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_IOR]) {
                    const iorExtension = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_IOR];
                    if (iorExtension.ior !== undefined) {
                        standardMaterialDataProperties.ior = iorExtension.ior;
                    }
                }
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_TRANSMISSION]) {
                    const transmissionExtension = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_TRANSMISSION];
                    if (transmissionExtension.transmissionFactor !== undefined) {
                        standardMaterialDataProperties.transmission = transmissionExtension.transmissionFactor;
                    }
                    if (transmissionExtension.transmissionTexture !== undefined) {
                        const transmissionTextureOptions = transmissionExtension.transmissionTexture.extensions && transmissionExtension.transmissionTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? transmissionExtension.transmissionTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (transmissionExtension.transmissionTexture.texCoord !== undefined)
                            transmissionTextureOptions.texCoord = transmissionExtension.transmissionTexture.texCoord;
                        standardMaterialDataProperties.transmissionMap = this.loadMap(transmissionExtension.transmissionTexture.index, transmissionTextureOptions);
                    }
                }
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_VOLUME]) {
                    const volumeExtension = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_VOLUME];
                    if (volumeExtension.thicknessFactor !== undefined) {
                        standardMaterialDataProperties.thickness = volumeExtension.thicknessFactor;
                    }
                    if (volumeExtension.thicknessTexture !== undefined) {
                        const thicknessTextureOptions = volumeExtension.thicknessTexture.extensions && volumeExtension.thicknessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? volumeExtension.thicknessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (volumeExtension.thicknessTexture.texCoord !== undefined)
                            thicknessTextureOptions.texCoord = volumeExtension.thicknessTexture.texCoord;
                        standardMaterialDataProperties.thicknessMap = this.loadMap(volumeExtension.thicknessTexture.index, thicknessTextureOptions);
                    }
                    if (volumeExtension.attenuationDistance !== undefined) {
                        standardMaterialDataProperties.attenuationDistance = volumeExtension.attenuationDistance;
                    }
                    if (volumeExtension.attenuationColor !== undefined) {
                        standardMaterialDataProperties.attenuationColor = [volumeExtension.attenuationColor[0] * 255, volumeExtension.attenuationColor[1] * 255, volumeExtension.attenuationColor[2] * 255];
                    }
                }
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_SHEEN]) {
                    const sheenExtension = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_SHEEN];
                    standardMaterialDataProperties.sheen = 1.0;
                    if (sheenExtension.sheenColorFactor !== undefined) {
                        standardMaterialDataProperties.sheenColor = [sheenExtension.sheenColorFactor[0] * 255, sheenExtension.sheenColorFactor[1] * 255, sheenExtension.sheenColorFactor[2] * 255];
                    }
                    if (sheenExtension.sheenRoughnessFactor !== undefined) {
                        standardMaterialDataProperties.sheenRoughness = sheenExtension.sheenRoughnessFactor;
                    }
                    if (sheenExtension.sheenColorTexture !== undefined) {
                        const sheenColorTextureOptions = sheenExtension.sheenColorTexture.extensions && sheenExtension.sheenColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? sheenExtension.sheenColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (sheenExtension.sheenColorTexture.texCoord !== undefined)
                            sheenColorTextureOptions.texCoord = sheenExtension.sheenColorTexture.texCoord;
                        standardMaterialDataProperties.sheenColorMap = this.loadMap(sheenExtension.sheenColorTexture.index, sheenColorTextureOptions);
                    }
                    if (sheenExtension.sheenRoughnessTexture !== undefined) {
                        const sheenRoughnessTextureOptions = sheenExtension.sheenRoughnessTexture.extensions && sheenExtension.sheenRoughnessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? sheenExtension.sheenRoughnessTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (sheenExtension.sheenRoughnessTexture.texCoord !== undefined)
                            sheenRoughnessTextureOptions.texCoord = sheenExtension.sheenRoughnessTexture.texCoord;
                        standardMaterialDataProperties.sheenRoughnessMap = this.loadMap(sheenExtension.sheenRoughnessTexture.index, sheenRoughnessTextureOptions);
                    }
                }
                if (materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_SPECULAR]) {
                    const specularExtension = materialExtensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_MATERIALS_SPECULAR];
                    if (specularExtension.specularFactor !== undefined) {
                        standardMaterialDataProperties.specularIntensity = specularExtension.specularFactor;
                    }
                    if (specularExtension.specularColorFactor !== undefined) {
                        standardMaterialDataProperties.specularColor = [specularExtension.specularColorFactor[0] * 255, specularExtension.specularColorFactor[1] * 255, specularExtension.specularColorFactor[2] * 255];
                    }
                    if (specularExtension.specularColorTexture !== undefined) {
                        const specularColorTextureOptions = specularExtension.specularColorTexture.extensions && specularExtension.specularColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? specularExtension.specularColorTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (specularExtension.specularColorTexture.texCoord !== undefined)
                            specularColorTextureOptions.texCoord = specularExtension.specularColorTexture.texCoord;
                        standardMaterialDataProperties.specularColorMap = this.loadMap(specularExtension.specularColorTexture.index, specularColorTextureOptions);
                    }
                    if (specularExtension.specularTexture !== undefined) {
                        const specularTextureOptions = specularExtension.specularTexture.extensions && specularExtension.specularTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] ? specularExtension.specularTexture.extensions[GLTFLoader_1.GLTF_EXTENSIONS.KHR_TEXTURE_TRANSFORM] : {};
                        if (specularExtension.specularTexture.texCoord !== undefined)
                            specularTextureOptions.texCoord = specularExtension.specularTexture.texCoord;
                        standardMaterialDataProperties.specularIntensityMap = this.loadMap(specularExtension.specularTexture.index, specularTextureOptions);
                    }
                }
                const materialData = new viewer_shared_types_1.MaterialStandardData(standardMaterialDataProperties);
                this._loaded[materialId] = materialData;
            }
            yield Promise.all(promises);
        });
    }
    // #endregion Public Methods (2)
    // #region Private Methods (1)
    loadMap(textureId, properties) {
        if (!this._content.textures)
            throw new Error('Textures not available.');
        const texture = this._content.textures[textureId];
        if (!this._content.images)
            throw new Error('Images not available.');
        const sampler = this._content.samplers && texture.sampler && this._content.samplers[texture.sampler] ? this._content.samplers[texture.sampler] : {};
        const loadedTexture = this._textureLoader.getTexture(textureId);
        if (!loadedTexture)
            return;
        return new viewer_shared_types_1.MapData(loadedTexture.image, {
            blob: loadedTexture.blob,
            wrapS: sampler.wrapS,
            wrapT: sampler.wrapT,
            minFilter: sampler.minFilter,
            magFilter: sampler.magFilter,
            offset: properties && properties.offset ? gl_matrix_1.vec2.fromValues(properties.offset[0], properties.offset[1]) : gl_matrix_1.vec2.create(),
            repeat: properties && properties.scale ? gl_matrix_1.vec2.fromValues(properties.scale[0], properties.scale[1]) : gl_matrix_1.vec2.fromValues(1, 1),
            rotation: properties && properties.rotation !== undefined ? properties.rotation : 0,
            texCoord: properties === null || properties === void 0 ? void 0 : properties.texCoord,
            flipY: false
        });
    }
}
exports.MaterialLoader = MaterialLoader;
//# sourceMappingURL=MaterialLoader.js.map

/***/ }),

/***/ 76947:
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
exports.TextureLoader = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
class TextureLoader {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(_content, _bufferViewLoader, _baseUri) {
        this._content = _content;
        this._bufferViewLoader = _bufferViewLoader;
        this._baseUri = _baseUri;
        // #region Properties (3)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._loaded = {};
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getTexture(textureId) {
        if (!this._content.textures)
            throw new Error('TextureLoader.getTexture: Textures not available.');
        if (!this._content.textures[textureId])
            throw new Error('TextureLoader.getTexture: Texture not available.');
        return this._loaded[textureId];
    }
    load() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.textures)
                return;
            const promises = [];
            for (let i = 0; i < this._content.textures.length; i++) {
                const textureId = i;
                const texture = this._content.textures[textureId];
                if (!this._content.images)
                    throw new Error('TextureLoader.load: Images not available.');
                const image = this._content.images[texture.source];
                const DATA_URI_REGEX = /^data:(.*?)(;base64)?,(.*)$/;
                const HTTPS_URI_REGEX = /^https:\/\//;
                if (image.bufferView !== undefined) {
                    const bufferView = this._bufferViewLoader.getBufferView(image.bufferView);
                    const dataView = new DataView(bufferView);
                    const array = [];
                    for (let i = 0; i < dataView.byteLength; i += 1)
                        array[i] = dataView.getUint8(i);
                    const blob = new Blob([new Uint8Array(array)], { type: image.mimeType });
                    const dataUri = URL.createObjectURL(blob);
                    const img = new Image();
                    promises.push(new Promise((resolve, reject) => {
                        img.onload = () => {
                            this._loaded[textureId] = {
                                image: img,
                                blob
                            };
                            URL.revokeObjectURL(dataUri);
                            resolve();
                        };
                        img.onerror = reject;
                    }));
                    img.crossOrigin = 'anonymous';
                    img.src = dataUri;
                }
                else {
                    const url = DATA_URI_REGEX.test(image.uri) || HTTPS_URI_REGEX.test(image.uri) ? image.uri : `${this._baseUri}/${image.uri}`;
                    promises.push(new Promise((resolve, reject) => {
                        this._httpClient.loadTexture(url)
                            .then(response => {
                            if (!response) {
                                resolve();
                            }
                            else {
                                if (typeof window !== 'undefined') {
                                    viewer_shared_services_1.Converter.instance.responseToImage(response).then(img => {
                                        this._loaded[textureId] = {
                                            image: img,
                                            blob: response.data.blob
                                        };
                                        resolve();
                                    })
                                        .catch(e => reject(e));
                                }
                                else {
                                    this._loaded[textureId] = {
                                        image: response.data.buffer,
                                        blob: response.data.blob
                                    };
                                    resolve();
                                }
                            }
                        })
                            .catch(e => reject(e));
                    }));
                }
            }
            yield Promise.all(promises);
        });
    }
}
exports.TextureLoader = TextureLoader;
//# sourceMappingURL=TextureLoader.js.map

/***/ }),

/***/ 50432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GeometryEngine = void 0;
const GeometryEngine_1 = __webpack_require__(92292);
Object.defineProperty(exports, "GeometryEngine", ({ enumerable: true, get: function () { return GeometryEngine_1.GeometryEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 13728:
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
exports.GLTF_EXTENSIONS = exports.GLTFConverter = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_build_data_1 = __webpack_require__(93668);
const viewer_shared_global_access_objects_1 = __webpack_require__(50069);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
const viewer_shared_types_1 = __webpack_require__(64766);
// #region Classes (1)
class GLTFConverter {
    constructor() {
        // #region Properties (23)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._globalAccessObjects = viewer_shared_global_access_objects_1.GlobalAccessObjects.instance;
        this._globalTransformationInverse = gl_matrix_1.mat4.fromValues(1, 0, 0, 0, 0, 0, -1, 0, 0, 1, 0, 0, 0, 0, 0, 1);
        this._progressUpdateLimit = 500;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._animations = [];
        this._buffers = [];
        this._byteOffset = 0;
        this._content = {
            asset: {
                copyright: '2023 (c) ShapeDiver',
                generator: 'ShapeDiverViewer@' + viewer_shared_build_data_1.build_data.build_version,
                version: '2.0',
                extensions: {}
            },
        };
        this._convertForAR = false;
        this._eventId = '';
        this._extensionsRequired = [];
        this._extensionsUsed = [];
        this._imageCache = {};
        this._materialCache = {};
        this._meshCache = {};
        this._nodes = [];
        this._numberOfNodes = 0;
        this._progressTimer = 0;
        this._promises = [];
        // #endregion Private Methods (17)
    }
    // #endregion Properties (23)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (1)
    convert(node, convertForAR = false, viewport) {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            this._eventId = this._uuidGenerator.create();
            const eventStart = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CREATION, id: this._eventId, progress: 0, status: 'Starting glTF conversion.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, eventStart);
            this._numberOfNodes = 0;
            node.traverse(() => this._numberOfNodes++);
            this._progressTimer = performance.now();
            this.reset();
            this._convertForAR = convertForAR;
            this._viewport = viewport;
            const originalParent = node.parent;
            const sceneNode = new viewer_shared_node_tree_1.TreeNode('ShapeDiverRootNode');
            sceneNode.addChild(node);
            const sceneDef = {
                name: sceneNode.name,
                nodes: []
            };
            const globalTransformationInverseId = this._uuidGenerator.create();
            node.addTransformation({
                id: globalTransformationInverseId,
                matrix: this._globalTransformationInverse,
            });
            const translationMatrixId = this._uuidGenerator.create();
            if (convertForAR) {
                // add translation matrix to scene tree node
                const center = node.boundingBox.boundingSphere.center;
                const translationMatrix = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(center[0], center[1], center[2]), gl_matrix_1.vec3.fromValues(-1, -1, -1)));
                node.addTransformation({ id: translationMatrixId, matrix: translationMatrix });
            }
            if (this._viewport) {
                if (this._viewport && node.excludeViewports.includes(this._viewport) === false && (node.restrictViewports.length > 0 && !node.restrictViewports.includes(this._viewport)) === false) {
                    const nodeId = yield this.convertNode(node);
                    if (nodeId !== -1)
                        (_a = sceneDef.nodes) === null || _a === void 0 ? void 0 : _a.push(nodeId);
                }
            }
            else {
                const nodeId = yield this.convertNode(node);
                if (nodeId !== -1)
                    (_b = sceneDef.nodes) === null || _b === void 0 ? void 0 : _b.push(nodeId);
            }
            for (let i = 0; i < node.transformations.length; i++)
                if (node.transformations[i].id === globalTransformationInverseId)
                    node.removeTransformation(node.transformations[i]);
            if (convertForAR) {
                // remove translation the matrix
                for (let i = 0; i < node.transformations.length; i++)
                    if (node.transformations[i].id === translationMatrixId)
                        node.removeTransformation(node.transformations[i]);
            }
            this._content.scenes = [];
            this._content.scenes.push(sceneDef);
            this.convertAnimations();
            // Declare extensions.
            if (this._extensionsUsed.length > 0)
                this._content.extensionsUsed = this._extensionsUsed;
            if (this._extensionsRequired.length > 0)
                this._content.extensionsRequired = this._extensionsRequired;
            let promisesLength = 0;
            while (promisesLength !== this._promises.length) {
                promisesLength = this._promises.length;
                yield Promise.all(this._promises);
                yield new Promise(resolve => setTimeout(resolve, 0));
            }
            const eventProgressImagePromises = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CREATION, id: this._eventId, progress: 0.75, status: 'GlTF images resolved.' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgressImagePromises);
            // Merge buffers.
            const blob = new Blob(this._buffers, { type: 'application/octet-stream' });
            if (originalParent)
                originalParent.addChild(node);
            // Update byte length of the single buffer.
            if (this._content.buffers && this._content.buffers.length > 0)
                this._content.buffers[0].byteLength = blob.size;
            return new Promise((resolve, reject) => {
                // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#glb-file-format-specification
                try {
                    if (typeof window !== 'undefined' && window.FileReader) {
                        const reader = new window.FileReader();
                        reader.readAsArrayBuffer(blob);
                        reader.onloadend = () => {
                            // Binary chunk.
                            const binaryChunk = this.getPaddedArrayBuffer(reader.result);
                            const binaryChunkPrefix = new DataView(new ArrayBuffer(8));
                            binaryChunkPrefix.setUint32(0, binaryChunk.byteLength, true);
                            binaryChunkPrefix.setUint32(4, 0x004E4942, true);
                            // JSON chunk.
                            const jsonChunk = this.getPaddedArrayBuffer(this.stringToArrayBuffer(JSON.stringify(this._content)), 0x20);
                            const jsonChunkPrefix = new DataView(new ArrayBuffer(8));
                            jsonChunkPrefix.setUint32(0, jsonChunk.byteLength, true);
                            jsonChunkPrefix.setUint32(4, 0x4E4F534A, true);
                            // GLB header.
                            const header = new ArrayBuffer(12);
                            const headerView = new DataView(header);
                            headerView.setUint32(0, 0x46546C67, true);
                            headerView.setUint32(4, 2, true);
                            const totalByteLength = 12
                                + jsonChunkPrefix.byteLength + jsonChunk.byteLength
                                + binaryChunkPrefix.byteLength + binaryChunk.byteLength;
                            headerView.setUint32(8, totalByteLength, true);
                            const glbBlob = new Blob([
                                header,
                                jsonChunkPrefix,
                                jsonChunk,
                                binaryChunkPrefix,
                                binaryChunk
                            ], { type: 'application/octet-stream' });
                            const glbReader = new window.FileReader();
                            glbReader.readAsArrayBuffer(glbBlob);
                            glbReader.onloadend = () => {
                                const eventEnd = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CREATION, id: this._eventId, progress: 1, status: 'GlTF creation complete.' };
                                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, eventEnd);
                                resolve(glbReader.result);
                            };
                            glbReader.onerror = reject;
                        };
                        reader.onerror = reject;
                    }
                    else {
                        reject('FileReader not available.');
                    }
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (17)
    convertAccessor(data) {
        if (!this._content.accessors)
            this._content.accessors = [];
        const bufferView = this.convertBufferView(data);
        const minMax = this.getMinMax(data);
        const accessorDef = {
            bufferView: bufferView,
            byteOffset: 0,
            componentType: this.getComponentType(data.array),
            normalized: data.normalized,
            count: +data.count,
            max: minMax.max,
            min: minMax.min,
            type: this.getType(data.itemSize),
            // sparse: { // TODO
            //     count: number,
            //     indices: {
            //         bufferView: number,
            //         byteOffset?: number,
            //         componentType: number,
            //         extensions?: { [id: string]: any },
            //         extras?: any
            //     },
            //     values: {
            //         bufferView: number,
            //         byteOffset?: number,
            //         extensions?: { [id: string]: any },
            //         extras?: any
            //     },
            //     extensions?: { [id: string]: any },
            //     extras?: any
            // },
        };
        this._content.accessors.push(accessorDef);
        return this._content.accessors.length - 1;
    }
    convertAnimations() {
        var _a;
        if (!this._content.animations && this._animations.length > 0)
            this._content.animations = [];
        for (let i = 0; i < this._animations.length; i++) {
            const animation = this._animations[i];
            const animationDef = {
                name: animation.name || 'animation_' + i,
                channels: [],
                samplers: []
            };
            for (let j = 0; j < animation.tracks.length; j++) {
                const track = animation.tracks[j];
                const value = this._nodes.find(a => a.node === track.node);
                if (!value)
                    continue;
                const inputMin = Math.min(...track.times);
                const inputMax = Math.max(...track.times);
                const inputData = new viewer_shared_types_1.AttributeData(new Float32Array(track.times), 1, 4, 0, 4, false, track.times.length, [inputMin], [inputMax]);
                const outputMin = [];
                outputMin.push(Math.min(...track.values.filter((s, i) => i % (track.path === 'rotation' ? 4 : 3) === 0)));
                outputMin.push(Math.min(...track.values.filter((s, i) => i % (track.path === 'rotation' ? 4 : 3) === 1)));
                outputMin.push(Math.min(...track.values.filter((s, i) => i % (track.path === 'rotation' ? 4 : 3) === 2)));
                if (track.path === 'rotation') {
                    outputMin.push(Math.min(...track.values.filter((s, i) => i % 4 === 3)));
                }
                const outputMax = [];
                outputMax.push(Math.max(...track.values.filter((s, i) => i % (track.path === 'rotation' ? 4 : 3) === 0)));
                outputMax.push(Math.max(...track.values.filter((s, i) => i % (track.path === 'rotation' ? 4 : 3) === 1)));
                outputMax.push(Math.max(...track.values.filter((s, i) => i % (track.path === 'rotation' ? 4 : 3) === 2)));
                if (track.path === 'rotation') {
                    outputMax.push(Math.max(...track.values.filter((s, i) => i % 4 === 3)));
                }
                const outputData = new viewer_shared_types_1.AttributeData(new Float32Array(track.values), track.path === 'rotation' ? 4 : 3, //itemSize
                track.path === 'rotation' ? 16 : 12, //itemBytes
                0, 4, false, track.times.length, outputMin, outputMax, track.path === 'rotation' ? 16 : 12);
                const samplerDef = {
                    input: this.convertAccessor(inputData),
                    output: this.convertAccessor(outputData),
                    interpolation: track.interpolation.toUpperCase()
                };
                animationDef.samplers.push(samplerDef);
                const channelDef = {
                    sampler: animationDef.samplers.length - 1,
                    target: {
                        node: value.id,
                        path: track.path
                    }
                };
                animationDef.channels.push(channelDef);
            }
            (_a = this._content.animations) === null || _a === void 0 ? void 0 : _a.push(animationDef);
        }
    }
    convertBuffer(buffer) {
        if (!this._content.buffers)
            this._content.buffers = [];
        if (this._content.buffers.length === 0)
            this._content.buffers = [{ byteLength: 0 }];
        this._buffers.push(buffer);
        return 0;
    }
    convertBufferView(data) {
        if (!this._content.bufferViews)
            this._content.bufferViews = [];
        const componentTypeNumber = this.getComponentType(data.array);
        const componentSize = viewer_data_engine_shared_types_1.ACCESSORCOMPONENTSIZE_V2[componentTypeNumber];
        const byteLength = Math.ceil(data.count * data.itemSize * componentSize / 4) * 4;
        const dataView = new DataView(new ArrayBuffer(byteLength));
        let offset = 0;
        for (let i = 0; i < data.count; i++) {
            for (let a = 0; a < data.itemSize; a++) {
                let value = 0;
                if (data.itemSize > 4) {
                    // no support for interleaved data for itemSize > 4
                    value = data.array[i * data.itemSize + a];
                }
                else {
                    if (a === 0)
                        value = data.array[i * data.itemSize];
                    else if (a === 1)
                        value = data.array[i * data.itemSize + 1];
                    else if (a === 2)
                        value = data.array[i * data.itemSize + 2];
                    else if (a === 3)
                        value = data.array[i * data.itemSize + 3];
                }
                if (data.array instanceof Float32Array) {
                    dataView.setFloat32(offset, value, true);
                }
                else if (data.array instanceof Uint32Array) {
                    dataView.setUint32(offset, value, true);
                }
                else if (data.array instanceof Uint16Array) {
                    dataView.setUint16(offset, value, true);
                }
                else if (data.array instanceof Int16Array) {
                    dataView.setInt16(offset, value, true);
                }
                else if (data.array instanceof Uint8Array) {
                    dataView.setUint8(offset, value);
                }
                else if (data.array instanceof Int8Array) {
                    dataView.setInt8(offset, value);
                }
                offset += componentSize;
            }
        }
        const bufferViewDef = {
            buffer: this.convertBuffer(dataView.buffer),
            byteOffset: this._byteOffset,
            byteLength: byteLength,
            target: data.target
        };
        this._byteOffset += byteLength;
        this._content.bufferViews.push(bufferViewDef);
        return this._content.bufferViews.length - 1;
    }
    convertBufferViewImage(blob) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.bufferViews)
                this._content.bufferViews = [];
            return new Promise((resolve, reject) => {
                try {
                    if (typeof window !== 'undefined' && window.FileReader) {
                        const reader = new window.FileReader();
                        reader.readAsArrayBuffer(blob);
                        reader.onloadend = () => {
                            const buffer = this.getPaddedArrayBuffer(reader.result);
                            const bufferViewDef = {
                                buffer: this.convertBuffer(buffer),
                                byteOffset: this._byteOffset,
                                byteLength: buffer.byteLength
                            };
                            this._byteOffset += buffer.byteLength;
                            this._content.bufferViews.push(bufferViewDef);
                            resolve(this._content.bufferViews.length - 1);
                        };
                        reader.onerror = reject;
                    }
                    else {
                        reject('FileReader not available.');
                    }
                }
                catch (e) {
                    reject(e);
                }
            });
        });
    }
    convertImage(data) {
        if (!this._content.images)
            this._content.images = [];
        if (data.image instanceof ArrayBuffer)
            return;
        if (this._imageCache[data.image.src] !== undefined)
            return this._imageCache[data.image.src];
        const imageDef = {};
        const canvas = document.createElement('canvas');
        canvas.width = data.image.width;
        canvas.height = data.image.height;
        const ctx = canvas.getContext('2d');
        if (data.flipY) {
            ctx.translate(0, canvas.height);
            ctx.scale(1, -1);
        }
        if (data.blob) {
            imageDef.mimeType = data.blob.type;
            this._promises.push(new Promise((resolve, reject) => {
                try {
                    this.convertBufferViewImage(data.blob).then(bufferViewIndex => {
                        imageDef.bufferView = bufferViewIndex;
                        resolve();
                    });
                }
                catch (e) {
                    reject(e);
                }
            }));
        }
        else {
            let mimeType = 'image/png';
            if (data.image.src.endsWith('.jpg') || data.image.src.includes('image/jpeg'))
                mimeType = 'image/jpeg';
            imageDef.mimeType = mimeType;
            const DATA_URI_REGEX = /^data:(.*?)(;base64)?,(.*)$/;
            if (DATA_URI_REGEX.test(data.image.src)) {
                const byteString = (0, viewer_shared_services_1.atobCustom)(data.image.src.split(',')[1]);
                const mimeType = data.image.src.split(',')[0].split(':')[1].split(';')[0];
                const ab = new ArrayBuffer(byteString.length);
                const ia = new Uint8Array(ab);
                for (let i = 0; i < byteString.length; i++)
                    ia[i] = byteString.charCodeAt(i);
                const blob = new Blob([ab], { type: mimeType });
                this._promises.push(new Promise((resolve, reject) => {
                    try {
                        this.convertBufferViewImage(blob)
                            .then(bufferViewIndex => {
                            imageDef.bufferView = bufferViewIndex;
                            resolve();
                        })
                            .catch(reject);
                    }
                    catch (e) {
                        reject(e);
                    }
                }));
            }
            else {
                ctx.drawImage(data.image, 0, 0, canvas.width, canvas.height);
                this._promises.push(new Promise((resolve, reject) => {
                    try {
                        canvas.toBlob((blob) => __awaiter(this, void 0, void 0, function* () {
                            try {
                                const bufferViewIndex = yield this.convertBufferViewImage(blob);
                                imageDef.bufferView = bufferViewIndex;
                                resolve();
                            }
                            catch (e) {
                                reject(e);
                            }
                        }), mimeType);
                    }
                    catch (e) {
                        reject(e);
                    }
                }));
            }
        }
        this._content.images.push(imageDef);
        this._imageCache[data.image.src] = this._content.images.length - 1;
        return this._content.images.length - 1;
    }
    convertMaterial(data, includeMaps = true) {
        if (!this._content.materials)
            this._content.materials = [];
        if (this._materialCache[data.id + '_' + data.version] !== undefined)
            return this._materialCache[data.id + '_' + data.version];
        const materialDef = {
            name: data.id,
            pbrMetallicRoughness: {}
        };
        if (data instanceof viewer_shared_types_1.MaterialSpecularGlossinessData) {
            if (!this._extensionsUsed.includes('KHR_materials_pbrSpecularGlossiness'))
                this._extensionsUsed.push('KHR_materials_pbrSpecularGlossiness');
            if (!this._extensionsRequired.includes('KHR_materials_pbrSpecularGlossiness'))
                this._extensionsRequired.push('KHR_materials_pbrSpecularGlossiness');
            const ext = {};
            ext.diffuseFactor = this._converter.toColorArray(data.color);
            ext.diffuseFactor[3] = data.opacity;
            if (data.map && includeMaps) {
                const textureIndex = this.convertTexture(data.map);
                if (textureIndex !== undefined)
                    ext.diffuseTexture = { index: textureIndex };
            }
            ext.specularFactor = this._converter.toColorArray(data.specular);
            ext.glossinessFactor = data.glossiness;
            if (data.specularGlossinessMap && includeMaps) {
                const textureIndex = this.convertTexture(data.specularGlossinessMap);
                if (textureIndex !== undefined)
                    ext.specularGlossinessTexture = { index: textureIndex };
            }
            materialDef.extensions = {
                KHR_materials_pbrSpecularGlossiness: ext
            };
        }
        else if (data instanceof viewer_shared_types_1.MaterialUnlitData) {
            if (!this._extensionsUsed.includes('KHR_materials_unlit'))
                this._extensionsUsed.push('KHR_materials_unlit');
            if (!this._extensionsRequired.includes('KHR_materials_unlit'))
                this._extensionsRequired.push('KHR_materials_unlit');
            materialDef.pbrMetallicRoughness.baseColorFactor = this._converter.toColorArray(data.color);
            materialDef.pbrMetallicRoughness.baseColorFactor[3] = data.opacity;
            if (data.map && includeMaps) {
                const textureIndex = this.convertTexture(data.map);
                if (textureIndex !== undefined)
                    materialDef.pbrMetallicRoughness.baseColorTexture = { index: textureIndex };
            }
            materialDef.extensions = {
                KHR_materials_unlit: {}
            };
        }
        else {
            const standardMaterialData = data;
            materialDef.pbrMetallicRoughness.baseColorFactor = this._converter.toColorArray(standardMaterialData.color);
            materialDef.pbrMetallicRoughness.baseColorFactor[3] = standardMaterialData.opacity;
            if (standardMaterialData.map && includeMaps) {
                const textureIndex = this.convertTexture(standardMaterialData.map);
                if (textureIndex !== undefined)
                    materialDef.pbrMetallicRoughness.baseColorTexture = { index: textureIndex };
            }
            materialDef.pbrMetallicRoughness.metallicFactor = standardMaterialData.metalnessMap ? 1 : standardMaterialData.metalness;
            materialDef.pbrMetallicRoughness.roughnessFactor = standardMaterialData.roughnessMap ? 1 : standardMaterialData.roughness;
            if (standardMaterialData.metalnessRoughnessMap && includeMaps) {
                const textureIndex = this.convertTexture(standardMaterialData.metalnessRoughnessMap);
                if (textureIndex !== undefined)
                    materialDef.pbrMetallicRoughness.metallicRoughnessTexture = { index: textureIndex };
            }
            else if (standardMaterialData.metalnessMap && standardMaterialData.roughnessMap && includeMaps) {
                if (this._globalAccessObjects.combineTextures) {
                    this._promises.push(new Promise((resolve, reject) => {
                        try {
                            // no support for combining textures
                            if (!this._globalAccessObjects.combineTextures)
                                return standardMaterialData.roughnessMap;
                            this._globalAccessObjects.combineTextures(undefined, standardMaterialData.roughnessMap ? standardMaterialData.roughnessMap.image : undefined, standardMaterialData.metalnessMap ? standardMaterialData.metalnessMap.image : undefined)
                                .then(imageData => {
                                const m = (standardMaterialData.roughnessMap || standardMaterialData.metalnessMap);
                                const mapData = new viewer_shared_types_1.MapData(imageData.image, {
                                    blob: imageData.blob,
                                    wrapS: m.wrapS,
                                    wrapT: m.wrapT,
                                    minFilter: m.minFilter,
                                    magFilter: m.magFilter,
                                    center: m.center,
                                    color: m.color,
                                    offset: m.offset,
                                    repeat: m.repeat,
                                    rotation: m.rotation,
                                    texCoord: m.texCoord,
                                    flipY: m.flipY
                                });
                                const textureIndex = this.convertTexture(mapData);
                                if (textureIndex !== undefined)
                                    materialDef.pbrMetallicRoughness.metallicRoughnessTexture = { index: textureIndex };
                                resolve();
                            })
                                .catch(reject);
                        }
                        catch (e) {
                            reject(e);
                        }
                    }));
                }
                else {
                    // no support for combining textures
                    const textureIndex = this.convertTexture(standardMaterialData.roughnessMap);
                    if (textureIndex !== undefined)
                        materialDef.pbrMetallicRoughness.metallicRoughnessTexture = { index: textureIndex };
                }
            }
            else if (standardMaterialData.metalnessMap && includeMaps) {
                const textureIndex = this.convertTexture(standardMaterialData.metalnessMap);
                if (textureIndex !== undefined)
                    materialDef.pbrMetallicRoughness.metallicRoughnessTexture = { index: textureIndex };
            }
            else if (standardMaterialData.roughnessMap && includeMaps) {
                const textureIndex = this.convertTexture(standardMaterialData.roughnessMap);
                if (textureIndex !== undefined)
                    materialDef.pbrMetallicRoughness.metallicRoughnessTexture = { index: textureIndex };
            }
        }
        if (data.normalMap && includeMaps) {
            const textureIndex = this.convertTexture(data.normalMap);
            if (textureIndex !== undefined)
                materialDef.normalTexture = { index: textureIndex };
        }
        if (data.aoMap && includeMaps) {
            const textureIndex = this.convertTexture(data.aoMap);
            if (textureIndex !== undefined)
                materialDef.occlusionTexture = { index: textureIndex };
        }
        if (data.emissiveMap && includeMaps) {
            const textureIndex = this.convertTexture(data.emissiveMap);
            if (textureIndex !== undefined)
                materialDef.emissiveTexture = { index: textureIndex };
        }
        if (data.emissiveness)
            materialDef.emissiveFactor = this._converter.toColorArray(data.emissiveness);
        materialDef.alphaMode = data.alphaMode.toUpperCase();
        if (data.alphaMode === viewer_shared_types_1.MATERIAL_ALPHA.MASK)
            materialDef.alphaCutoff = data.alphaCutoff;
        materialDef.doubleSided = data.side === viewer_shared_types_1.MATERIAL_SIDE.DOUBLE;
        this._content.materials.push(materialDef);
        this._materialCache[data.id + '_' + data.version] = this._content.materials.length - 1;
        return this._materialCache[data.id + '_' + data.version];
    }
    convertMesh(data) {
        var _a;
        if (!this._content.meshes)
            this._content.meshes = [];
        if (this._meshCache[data.id + '_' + data.version] !== undefined)
            return this._meshCache[data.id + '_' + data.version];
        const meshDef = {
            primitives: [],
            name: data.id
        };
        (_a = meshDef.primitives) === null || _a === void 0 ? void 0 : _a.push(this.convertPrimitive(data, data.primitive));
        this._content.meshes.push(meshDef);
        this._meshCache[data.id + '_' + data.version] = this._content.meshes.length - 1;
        return this._meshCache[data.id + '_' + data.version];
    }
    convertNode(node) {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            if (!this._content.nodes)
                this._content.nodes = [];
            const nodeDef = {
                name: this._convertForAR ? this._uuidGenerator.create() : node.name,
            };
            if (node.transformations.length > 0) {
                let matrix = node.nodeMatrix;
                if (node.nodeMatrix.filter(v => isNaN(v) || v === Infinity || v === -Infinity).length > 0)
                    matrix = gl_matrix_1.mat4.create();
                nodeDef.matrix = [matrix[0], matrix[1], matrix[2], matrix[3],
                    matrix[4], matrix[5], matrix[6], matrix[7],
                    matrix[8], matrix[9], matrix[10], matrix[11],
                    matrix[12], matrix[13], matrix[14], matrix[15]];
            }
            for (let i = 0; i < node.data.length; i++) {
                if (node.data[i] instanceof viewer_shared_types_1.GeometryData) {
                    if (this._convertForAR) {
                        if (node.data[i].mode !== viewer_shared_types_1.PRIMITIVE_MODE.POINTS &&
                            node.data[i].mode !== viewer_shared_types_1.PRIMITIVE_MODE.LINES &&
                            node.data[i].mode !== viewer_shared_types_1.PRIMITIVE_MODE.LINE_LOOP &&
                            node.data[i].mode !== viewer_shared_types_1.PRIMITIVE_MODE.LINE_STRIP)
                            nodeDef.mesh = this.convertMesh(node.data[i]);
                    }
                    else {
                        nodeDef.mesh = this.convertMesh(node.data[i]);
                    }
                }
                if (node.data[i] instanceof viewer_shared_types_1.AnimationData)
                    this._animations.push(node.data[i]);
            }
            if (node.children.length > 0)
                nodeDef.children = [];
            for (let i = 0; i < node.children.length; i++) {
                if (node.children[i].visible === true) {
                    if (this._viewport) {
                        if (node.children[i].excludeViewports.includes(this._viewport))
                            continue;
                        if (node.children[i].restrictViewports.length > 0 && !node.children[i].restrictViewports.includes(this._viewport))
                            continue;
                    }
                    const nodeId = yield this.convertNode(node.children[i]);
                    if (nodeId !== -1)
                        (_a = nodeDef.children) === null || _a === void 0 ? void 0 : _a.push(nodeId);
                }
            }
            // remove children array if it is empty
            if (nodeDef.children !== undefined && nodeDef.children.length === 0)
                nodeDef.children = undefined;
            if (performance.now() - this._progressTimer > this._progressUpdateLimit) {
                this._progressTimer = performance.now();
                const eventProgress = { type: viewer_shared_types_1.TASK_TYPE.GLTF_CREATION, id: this._eventId, progress: (this._content.nodes.length / this._numberOfNodes) / 2, status: `GlTF conversion progress: ${this._content.nodes.length}/${this._numberOfNodes} nodes.` };
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_PROCESS, eventProgress);
                yield new Promise(resolve => setTimeout(resolve, 0));
            }
            // if the node is empty, don't add it
            if (nodeDef.camera === undefined && nodeDef.children === undefined && nodeDef.mesh === undefined && nodeDef.extensions === undefined && nodeDef.extras === undefined && nodeDef.skin === undefined)
                return -1;
            this._content.nodes.push(nodeDef);
            this._nodes.push({
                node,
                id: this._content.nodes.length - 1
            });
            return this._content.nodes.length - 1;
        });
    }
    convertPrimitive(geometryData, data) {
        const primitiveDef = {
            attributes: {},
            mode: geometryData.mode
        };
        for (const a in data.attributes) {
            if (data.attributes[a].array.length > 0) {
                if (a.includes('COLOR')) {
                    if (data.attributes[a].itemSize % 4 === 0) {
                        primitiveDef.attributes[a] = this.convertAccessor(data.attributes[a]);
                    }
                    else if (data.attributes[a].itemSize % 3 === 0) {
                        const oldAttributeData = data.attributes[a];
                        const newArray = new Float32Array((oldAttributeData.array.length / 3) * 4);
                        let counter = 0;
                        for (let i = 0; i < newArray.length; i += 4) {
                            newArray[i] = oldAttributeData.array[counter] / (oldAttributeData.elementBytes === 1 ? 255.0 : 1.0);
                            newArray[i + 1] = oldAttributeData.array[counter + 1] / (oldAttributeData.elementBytes === 1 ? 255.0 : 1.0);
                            newArray[i + 2] = oldAttributeData.array[counter + 2] / (oldAttributeData.elementBytes === 1 ? 255.0 : 1.0);
                            newArray[i + 3] = 1.0;
                            counter += 3;
                        }
                        primitiveDef.attributes[a] = this.convertAccessor(new viewer_shared_types_1.AttributeData(newArray, 4, 4 * 4, oldAttributeData.byteOffset, 4, oldAttributeData.normalized, oldAttributeData.count, oldAttributeData.min, oldAttributeData.max, oldAttributeData.byteStride));
                    }
                }
                else {
                    primitiveDef.attributes[a] = this.convertAccessor(data.attributes[a]);
                }
            }
        }
        if (data.indices)
            primitiveDef.indices = this.convertAccessor(data.indices);
        if (geometryData.material) {
            const k = Object.keys(primitiveDef.attributes).find(k => k.includes('TEXCOORD'));
            primitiveDef.material = this.convertMaterial(geometryData.material, !!k);
        }
        return primitiveDef;
    }
    convertTexture(data) {
        if (!this._content.textures)
            this._content.textures = [];
        const imageIndex = this.convertImage(data);
        if (imageIndex === undefined)
            return;
        const textureDef = {
            source: imageIndex
        };
        // TODO samplers
        this._content.textures.push(textureDef);
        return this._content.textures.length - 1;
    }
    getComponentType(array) {
        switch (true) {
            case array instanceof Int8Array:
                return 5120;
            case array instanceof Uint8Array:
                return 5121;
            case array instanceof Int16Array:
                return 5122;
            case array instanceof Uint16Array:
                return 5123;
            case array instanceof Uint32Array:
                return 5125;
            default:
                return 5126;
        }
    }
    getMinMax(data) {
        const output = {
            min: new Array(data.itemSize).fill(Number.POSITIVE_INFINITY),
            max: new Array(data.itemSize).fill(Number.NEGATIVE_INFINITY)
        };
        for (let i = 0; i < data.count; i++) {
            for (let a = 0; a < data.itemSize; a++) {
                let value = 0;
                if (data.itemSize > 4) {
                    // no support for interleaved data for itemSize > 4
                    value = data.array[i * data.itemSize + a];
                }
                else {
                    if (a === 0)
                        value = data.array[i * data.itemSize];
                    else if (a === 1)
                        value = data.array[i * data.itemSize + 1];
                    else if (a === 2)
                        value = data.array[i * data.itemSize + 2];
                    else if (a === 3)
                        value = data.array[i * data.itemSize + 3];
                }
                output.min[a] = Math.min(output.min[a], value);
                output.max[a] = Math.max(output.max[a], value);
            }
        }
        return output;
    }
    getPaddedArrayBuffer(arrayBuffer, paddingByte = 0) {
        const paddedLength = Math.ceil(arrayBuffer.byteLength / 4) * 4;
        if (paddedLength !== arrayBuffer.byteLength) {
            const array = new Uint8Array(paddedLength);
            array.set(new Uint8Array(arrayBuffer));
            if (paddingByte !== 0) {
                for (let i = arrayBuffer.byteLength; i < paddedLength; i++) {
                    array[i] = paddingByte;
                }
            }
            return array.buffer;
        }
        return arrayBuffer;
    }
    getType(itemSize) {
        switch (itemSize) {
            case 1:
                return 'SCALAR';
            case 2:
                return 'VEC2';
            case 3:
                return 'VEC3';
            case 4:
                return 'VEC4';
            case 9:
                return 'MAT3';
            case 18:
                return 'MAT4';
            default:
                return 'VEC3';
        }
    }
    reset() {
        this._animations = [];
        this._buffers = [];
        this._byteOffset = 0;
        this._content = {
            asset: {
                copyright: '2023 (c) ShapeDiver',
                generator: 'ShapeDiverViewer@' + viewer_shared_build_data_1.build_data.build_version,
                version: '2.0',
                extensions: {}
            },
        };
        this._extensionsRequired = [];
        this._extensionsUsed = [];
        this._imageCache = {};
        this._materialCache = {};
        this._meshCache = {};
        this._nodes = [];
        this._promises = [];
        this._convertForAR = false;
        this._viewport = undefined;
    }
    stringToArrayBuffer(text) {
        if (window.TextEncoder !== undefined) {
            return new TextEncoder().encode(text).buffer;
        }
        const array = new Uint8Array(new ArrayBuffer(text.length));
        for (let i = 0, il = text.length; i < il; i++) {
            const value = text.charCodeAt(i);
            // Replacing multi-byte character with space(0x20).
            array[i] = value > 0xFF ? 0x20 : value;
        }
        return array.buffer;
    }
}
exports.GLTFConverter = GLTFConverter;
// #endregion Classes (1)
// #region Enums (1)
var GLTF_EXTENSIONS;
(function (GLTF_EXTENSIONS) {
    GLTF_EXTENSIONS["KHR_BINARY_GLTF"] = "KHR_binary_glTF";
    GLTF_EXTENSIONS["KHR_MATERIALS_PBRSPECULARGLOSSINESS"] = "KHR_materials_pbrSpecularGlossiness";
    GLTF_EXTENSIONS["KHR_MATERIALS_UNLIT"] = "KHR_materials_unlit";
})(GLTF_EXTENSIONS = exports.GLTF_EXTENSIONS || (exports.GLTF_EXTENSIONS = {}));
// #endregion Enums (1)
//# sourceMappingURL=GLTFConverter.js.map

/***/ }),

/***/ 17187:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GLTFConverter = void 0;
const GLTFConverter_1 = __webpack_require__(13728);
Object.defineProperty(exports, "GLTFConverter", ({ enumerable: true, get: function () { return GLTFConverter_1.GLTFConverter; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 97234:
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
exports.HTMLElementAnchorEngine = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_math_1 = __webpack_require__(67275);
class HTMLElementAnchorEngine {
    constructor() {
        // #region Properties (4)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._inputValidator = viewer_shared_services_1.InputValidator.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        // #endregion Public Methods (1)
    }
    // #endregion Properties (4)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (1)
    /**
     * Load the material content into a scene graph node.
     *
     * @param content the material content
     * @returns the scene graph node
     */
    loadContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const node = new viewer_shared_node_tree_1.TreeNode('htmlElementAnchors');
                if (content.format === 'tag2d') {
                    const data = content.data;
                    data.forEach((element) => {
                        // we need a location and a text, otherwise this doesn't make sense
                        if (!element.location || !element.text) {
                            this._logger.warn('HTMLElementAnchorEngine.load: One of the specified Tag2D elements did not have all necessary properties.');
                            return;
                        }
                        const cleanedText = this._inputValidator.sanitize(element.text);
                        node.data.push(new viewer_shared_types_1.HTMLElementAnchorTextData({
                            location: this._converter.toVec3(element.location),
                            data: { color: element.color || '#000000', text: cleanedText }
                        }));
                    });
                }
                else if (content.format === 'anchor') {
                    const data = content.data;
                    data.forEach((element) => {
                        if (!element.location || !element.data) {
                            this._logger.warn('HTMLElementAnchorEngine.load: One of the specified Anchor elements did not have all necessary properties.');
                            return;
                        }
                        let position;
                        if (element.data.position)
                            position = {
                                vertical: element.data.position.vertical,
                                horizontal: element.data.position.horizontal
                            };
                        let intersectionTarget;
                        if (element.intersectionTarget) {
                            if (typeof element.intersectionTarget === 'string' || Array.isArray(element.intersectionTarget)) {
                                intersectionTarget = element.intersectionTarget;
                            }
                            else if (element.intersectionTarget.min && element.intersectionTarget.max) {
                                intersectionTarget = new viewer_shared_math_1.Box(this._converter.toVec3(element.intersectionTarget.min), this._converter.toVec3(element.intersectionTarget.max));
                            }
                        }
                        if (!element.format || (element.format === 'text')) {
                            if (!element.data.text) {
                                this._logger.warn('HTMLElementAnchorEngine.load: The text property for an Anchor element is missing.');
                                return;
                            }
                            const textData = element.data;
                            const cleanedText = this._inputValidator.sanitize(textData.text);
                            node.data.push(new viewer_shared_types_1.HTMLElementAnchorTextData({
                                location: this._converter.toVec3(element.location),
                                data: {
                                    color: textData.color || '#000000',
                                    text: cleanedText,
                                    hidden: textData.hidden,
                                    textAlign: textData.textAlign,
                                    position
                                },
                                hideable: element.hideable,
                                viewports: element.viewports,
                                intersectionTarget
                            }));
                        }
                        else if (element.format === 'image') {
                            if (!element.data.src || !element.data.width || !element.data.height || !element.data.alt) {
                                this._logger.warn('HTMLElementAnchorEngine.load: One of the specified Anchor elements did not have all necessary properties.');
                                return;
                            }
                            const imageData = element.data;
                            node.data.push(new viewer_shared_types_1.HTMLElementAnchorImageData({
                                location: this._converter.toVec3(element.location),
                                data: {
                                    alt: imageData.alt,
                                    height: typeof imageData.height === 'string' ? +imageData.height : imageData.height,
                                    width: typeof imageData.width === 'string' ? +imageData.width : imageData.width,
                                    src: imageData.src,
                                    hidden: imageData.hidden,
                                    position
                                },
                                hideable: element.hideable,
                                viewports: element.viewports,
                                intersectionTarget
                            }));
                        }
                        this._logger.warn(`HTMLElementAnchorEngine.load: The Anchor does not have a recognized format: ${element.format}`);
                    });
                }
                return node;
            }
            catch (e) {
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('HTMLElementAnchorEngine.load: Loading of anchors failed.');
            }
        });
    }
}
exports.HTMLElementAnchorEngine = HTMLElementAnchorEngine;
//# sourceMappingURL=HTMLElementAnchorEngine.js.map

/***/ }),

/***/ 27682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTMLElementAnchorEngine = void 0;
const HTMLElementAnchorEngine_1 = __webpack_require__(97234);
Object.defineProperty(exports, "HTMLElementAnchorEngine", ({ enumerable: true, get: function () { return HTMLElementAnchorEngine_1.HTMLElementAnchorEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 7846:
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
exports.MaterialEngine = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const materialDatabase_1 = __webpack_require__(2233);
const gl_matrix_1 = __webpack_require__(61961);
/* eslint-disable no-prototype-builtins */
const viewer_shared_types_1 = __webpack_require__(64766);
class MaterialEngine {
    constructor() {
        // #region Properties (4)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        // #endregion Private Methods (4)
    }
    // #endregion Properties (4)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (12)
    /**
     * Create a material data based on the material properties
     *
     * @param materialProperties
     * @returns
     */
    createMaterialData(materialProperties) {
        const materialType = materialProperties.type || viewer_shared_types_1.MATERIAL_TYPE.STANDARD;
        switch (materialType) {
            case viewer_shared_types_1.MATERIAL_TYPE.SPECULAR_GLOSSINESS:
                return new viewer_shared_types_1.MaterialSpecularGlossinessData(materialProperties);
            case viewer_shared_types_1.MATERIAL_TYPE.UNLIT:
                return new viewer_shared_types_1.MaterialUnlitData(materialProperties);
            case viewer_shared_types_1.MATERIAL_TYPE.GEM:
                return new viewer_shared_types_1.MaterialGemData(materialProperties);
            default:
                return new viewer_shared_types_1.MaterialStandardData(materialProperties);
        }
    }
    createMaterialDataFromDefinition(definition) {
        return __awaiter(this, void 0, void 0, function* () {
            const materialType = definition.type || viewer_shared_types_1.MATERIAL_TYPE.STANDARD;
            const promises = [];
            const abstractProperties = {};
            abstractProperties.alphaCutoff = definition.alphaCutoff;
            promises.push(this.loadMapFromDefinition(definition.alphaMap).then(map => {
                if (map)
                    abstractProperties.alphaMap = map;
                return map;
            }));
            abstractProperties.alphaMode = definition.alphaMode;
            promises.push(this.loadMapFromDefinition(definition.aoMap).then(map => {
                if (map)
                    abstractProperties.aoMap = map;
                return map;
            }));
            abstractProperties.aoMapIntensity = definition.aoMapIntensity;
            promises.push(this.loadMapFromDefinition(definition.bumpMap).then(map => {
                if (map)
                    abstractProperties.bumpMap = map;
                return map;
            }));
            abstractProperties.bumpScale = definition.bumpScale;
            abstractProperties.color = definition.color ? definition.color : undefined;
            abstractProperties.depthTest = definition.depthTest;
            abstractProperties.depthWrite = definition.depthWrite;
            promises.push(this.loadMapFromDefinition(definition.emissiveMap).then(map => {
                if (map)
                    abstractProperties.emissiveMap = map;
                return map;
            }));
            abstractProperties.emissiveness = definition.emissiveness ? definition.emissiveness : undefined;
            promises.push(this.loadMapFromDefinition(definition.map).then(map => {
                if (map)
                    abstractProperties.map = map;
                return map;
            }));
            abstractProperties.name = definition.name;
            promises.push(this.loadMapFromDefinition(definition.normalMap).then(map => {
                if (map)
                    abstractProperties.normalMap = map;
                return map;
            }));
            abstractProperties.normalScale = definition.normalScale;
            abstractProperties.opacity = definition.opacity;
            abstractProperties.shading = definition.shading;
            abstractProperties.side = definition.side;
            abstractProperties.transparent = definition.transparent;
            abstractProperties.type = materialType;
            switch (materialType) {
                case viewer_shared_types_1.MATERIAL_TYPE.SPECULAR_GLOSSINESS:
                    {
                        const specularGlossinessProperties = abstractProperties;
                        const specularGlossinessDefinition = definition;
                        specularGlossinessProperties.envMap = specularGlossinessDefinition.envMap;
                        specularGlossinessProperties.glossiness = specularGlossinessDefinition.glossiness;
                        specularGlossinessProperties.specular = specularGlossinessDefinition.specular;
                        if (specularGlossinessDefinition.specularGlossinessMap) {
                            promises.push(this.loadMapFromDefinition(specularGlossinessDefinition.specularGlossinessMap).then(map => {
                                if (map)
                                    specularGlossinessProperties.specularGlossinessMap = map;
                                return map;
                            }));
                        }
                        else {
                            promises.push(this.loadMapFromDefinition(specularGlossinessDefinition.specularMap).then(map => {
                                if (map)
                                    specularGlossinessProperties.specularMap = map;
                                return map;
                            }));
                            promises.push(this.loadMapFromDefinition(specularGlossinessDefinition.glossinessMap).then(map => {
                                if (map)
                                    specularGlossinessProperties.glossinessMap = map;
                                return map;
                            }));
                        }
                        yield Promise.all(promises);
                        return new viewer_shared_types_1.MaterialSpecularGlossinessData(specularGlossinessProperties);
                    }
                case viewer_shared_types_1.MATERIAL_TYPE.UNLIT:
                    {
                        const unlitProperties = abstractProperties;
                        const unlitDefinition = definition;
                        unlitProperties.envMap = unlitDefinition.envMap;
                        yield Promise.all(promises);
                        return new viewer_shared_types_1.MaterialUnlitData(unlitProperties);
                    }
                case viewer_shared_types_1.MATERIAL_TYPE.GEM:
                    {
                        const gemProperties = abstractProperties;
                        const gemDefinition = definition;
                        gemProperties.brightness = gemDefinition.brightness;
                        gemProperties.center = gemDefinition.center;
                        gemProperties.colorTransferBegin = gemDefinition.colorTransferBegin;
                        gemProperties.colorTransferEnd = gemDefinition.colorTransferEnd;
                        gemProperties.contrast = gemDefinition.contrast;
                        gemProperties.dispersion = gemDefinition.dispersion;
                        gemProperties.envMap = gemDefinition.envMap;
                        gemProperties.gamma = gemDefinition.gamma;
                        promises.push(this.loadMapFromDefinition(gemDefinition.impurityMap).then(map => {
                            if (map)
                                gemProperties.impurityMap = map;
                            return map;
                        }));
                        gemProperties.impurityScale = gemDefinition.impurityScale;
                        gemProperties.radius = gemDefinition.radius;
                        gemProperties.refractionIndex = gemDefinition.refractionIndex;
                        promises.push(this.loadMapFromDefinition(gemDefinition.sphericalNormalMap).then(map => {
                            if (map)
                                gemProperties.sphericalNormalMap = map;
                            return map;
                        }));
                        gemProperties.tracingDepth = gemDefinition.tracingDepth;
                        gemProperties.tracingOpacity = gemDefinition.tracingOpacity;
                        yield Promise.all(promises);
                        return new viewer_shared_types_1.MaterialGemData(gemProperties);
                    }
                default:
                    {
                        const standardProperties = abstractProperties;
                        const standardDefinition = definition;
                        standardProperties.attenuationColor = standardDefinition.attenuationColor;
                        standardProperties.attenuationDistance = standardDefinition.attenuationDistance;
                        standardProperties.clearcoat = standardDefinition.clearcoat;
                        promises.push(this.loadMapFromDefinition(standardDefinition.clearcoatMap).then(map => {
                            if (map)
                                standardProperties.clearcoatMap = map;
                            return map;
                        }));
                        promises.push(this.loadMapFromDefinition(standardDefinition.clearcoatNormalMap).then(map => {
                            if (map)
                                standardProperties.clearcoatNormalMap = map;
                            return map;
                        }));
                        standardProperties.clearcoatRoughness = standardDefinition.clearcoatRoughness;
                        promises.push(this.loadMapFromDefinition(standardDefinition.clearcoatRoughnessMap).then(map => {
                            if (map)
                                standardProperties.clearcoatRoughnessMap = map;
                            return map;
                        }));
                        standardProperties.displacementBias = standardDefinition.displacementBias;
                        promises.push(this.loadMapFromDefinition(standardDefinition.displacementMap).then(map => {
                            if (map)
                                standardProperties.displacementMap = map;
                            return map;
                        }));
                        standardProperties.displacementScale = standardDefinition.displacementScale;
                        standardProperties.envMap = standardDefinition.envMap;
                        standardProperties.ior = standardDefinition.ior;
                        standardProperties.metalness = standardDefinition.metalness;
                        if (standardDefinition.metalnessRoughnessMap) {
                            promises.push(this.loadMapFromDefinition(standardDefinition.metalnessMap).then(map => {
                                if (map)
                                    standardProperties.metalnessMap = map;
                                return map;
                            }));
                        }
                        else {
                            promises.push(this.loadMapFromDefinition(standardDefinition.metalnessMap).then(map => {
                                if (map)
                                    standardProperties.metalnessMap = map;
                                return map;
                            }));
                            promises.push(this.loadMapFromDefinition(standardDefinition.roughnessMap).then(map => {
                                if (map)
                                    standardProperties.roughnessMap = map;
                                return map;
                            }));
                        }
                        standardProperties.roughness = standardDefinition.roughness;
                        standardProperties.sheen = standardDefinition.sheen;
                        standardProperties.sheenColor = standardDefinition.sheenColor;
                        promises.push(this.loadMapFromDefinition(standardDefinition.sheenColorMap).then(map => {
                            if (map)
                                standardProperties.sheenColorMap = map;
                            return map;
                        }));
                        standardProperties.sheenRoughness = standardDefinition.sheenRoughness;
                        promises.push(this.loadMapFromDefinition(standardDefinition.sheenRoughnessMap).then(map => {
                            if (map)
                                standardProperties.sheenRoughnessMap = map;
                            return map;
                        }));
                        standardProperties.specularColor = standardDefinition.specularColor;
                        promises.push(this.loadMapFromDefinition(standardDefinition.specularColorMap).then(map => {
                            if (map)
                                standardProperties.specularColorMap = map;
                            return map;
                        }));
                        standardProperties.specularIntensity = standardDefinition.specularIntensity;
                        promises.push(this.loadMapFromDefinition(standardDefinition.specularIntensityMap).then(map => {
                            if (map)
                                standardProperties.specularIntensityMap = map;
                            return map;
                        }));
                        standardProperties.thickness = standardDefinition.thickness;
                        promises.push(this.loadMapFromDefinition(standardDefinition.thicknessMap).then(map => {
                            if (map)
                                standardProperties.thicknessMap = map;
                            return map;
                        }));
                        standardProperties.transmission = standardDefinition.transmission;
                        promises.push(this.loadMapFromDefinition(standardDefinition.transmissionMap).then(map => {
                            if (map)
                                standardProperties.transmissionMap = map;
                            return map;
                        }));
                        yield Promise.all(promises);
                        return new viewer_shared_types_1.MaterialStandardData(standardProperties);
                    }
            }
        });
    }
    /**
       * Load the material content into a scene graph node.
       *
       * @param content the material content
       * @returns the scene graph node
       */
    loadContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const node = new viewer_shared_node_tree_1.TreeNode(content.name || 'material');
            if (!content)
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('MaterialEngine.loadContent: Invalid content was provided to material engine.');
            let material = new viewer_shared_types_1.MaterialStandardData();
            if (content.data) {
                const data = content.data;
                let presetData;
                if (data.materialpreset)
                    presetData = this.loadPresetMaterialDefinition(data.materialpreset);
                if (data.materialType && data.materialType !== 'standard') {
                    // gem material https://shapediver.atlassian.net/browse/SS-2514
                }
                else {
                    if (data.version) {
                        if (data.version === '1.0') {
                            material = yield this.loadMaterialV3(this.loadMaterialDefinitionV1(data, presetData));
                        }
                        else if (data.version === '2.0') {
                            material = yield this.loadMaterialV3(this.loadMaterialDefinitionV2(data, presetData));
                        }
                        else if (data.version === '3.0') {
                            material = yield this.loadMaterialV3(this.loadMaterialDefinitionV3(data, presetData));
                        }
                        else {
                            throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('MaterialEngine.loadContent: Material data version not supported.');
                        }
                    }
                }
            }
            else {
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('MaterialEngine.loadContent: No material data was provided to material engine.');
            }
            node.data.push(material);
            return node;
        });
    }
    loadMap(url, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            if (!id) {
                response = yield this._httpClient.loadTexture(url);
            }
            else {
                response = yield this._httpClient.loadTexture('https://viewer.shapediver.com/v2/materials/1024/' + id + '/' + url);
            }
            if (!response)
                return;
            if (typeof window !== 'undefined') {
                const image = yield viewer_shared_services_1.Converter.instance.responseToImage(response);
                return new viewer_shared_types_1.MapData(image, { blob: response.data.blob });
            }
            else {
                return new viewer_shared_types_1.MapData(response.data.buffer, { blob: response.data.blob });
            }
        });
    }
    /**
     * Load a map from a definition.
     *
     * @param definition
     * @returns
     */
    loadMapFromDefinition(definition) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!definition)
                return undefined;
            if (typeof definition === 'string') {
                return this.loadMap(definition);
            }
            else if (definition.image) {
                if (typeof definition.image === 'string') {
                    return this.loadMapWithProperties({
                        href: definition.image,
                        wrapS: definition.wrapS,
                        wrapT: definition.wrapT,
                        center: definition.center,
                        color: definition.color ? this._converter.toColorArray(definition.color) : undefined,
                        offset: definition.offset,
                        repeat: definition.repeat,
                        rotation: definition.rotation
                    });
                }
                else {
                    return new viewer_shared_types_1.MapData(definition.image);
                }
            }
            return;
        });
    }
    loadMapWithProperties(texture) {
        return __awaiter(this, void 0, void 0, function* () {
            const response = yield this._httpClient.loadTexture(texture.href);
            if (!response)
                return;
            const wrapS = texture.wrapS === 1 ? viewer_shared_types_1.TEXTURE_WRAPPING.CLAMP_TO_EDGE : texture.wrapS === 2 ? viewer_shared_types_1.TEXTURE_WRAPPING.MIRRORED_REPEAT : viewer_shared_types_1.TEXTURE_WRAPPING.REPEAT;
            const wrapT = texture.wrapT === 1 ? viewer_shared_types_1.TEXTURE_WRAPPING.CLAMP_TO_EDGE : texture.wrapT === 2 ? viewer_shared_types_1.TEXTURE_WRAPPING.MIRRORED_REPEAT : viewer_shared_types_1.TEXTURE_WRAPPING.REPEAT;
            const center = texture.center ? gl_matrix_1.vec2.fromValues(texture.center[0], texture.center[1]) : gl_matrix_1.vec2.fromValues(0, 0);
            const color = texture.color ? gl_matrix_1.vec4.fromValues(texture.color[0] / 255, texture.color[1] / 255, texture.color[2] / 255, texture.color[3] / 255) : gl_matrix_1.vec4.fromValues(1, 1, 1, 1);
            const offset = texture.offset ? gl_matrix_1.vec2.fromValues(texture.offset[0], texture.offset[1]) : gl_matrix_1.vec2.fromValues(0, 0);
            const repeat = texture.repeat ? gl_matrix_1.vec2.fromValues(texture.repeat[0], texture.repeat[1]) : gl_matrix_1.vec2.fromValues(1, 1);
            if (typeof window !== 'undefined') {
                const image = yield viewer_shared_services_1.Converter.instance.responseToImage(response);
                return new viewer_shared_types_1.MapData(image, { blob: response.data.blob, wrapS, wrapT, minFilter: viewer_shared_types_1.TEXTURE_FILTERING.LINEAR_MIPMAP_LINEAR, magFilter: viewer_shared_types_1.TEXTURE_FILTERING.LINEAR, center, color, offset, repeat, rotation: texture.rotation || 0 });
            }
            else {
                return new viewer_shared_types_1.MapData(response.data.buffer, { blob: response.data.blob, wrapS, wrapT, minFilter: viewer_shared_types_1.TEXTURE_FILTERING.LINEAR_MIPMAP_LINEAR, magFilter: viewer_shared_types_1.TEXTURE_FILTERING.LINEAR, center, color, offset, repeat, rotation: texture.rotation || 0 });
            }
        });
    }
    loadMaterialDefinitionV1(data, presetData = {}) {
        // ambient is ignored
        if (data.color) {
            presetData.color = this.multiplyColors(data.color, presetData.color);
        }
        else if (data.diffuse) {
            // multiply color with diffuse
            presetData.color = this.multiplyColors(data.diffuse, presetData.color);
        }
        // emission is ignored
        // specular is ignored
        if (data.shine || data.shine === 0) {
            presetData.metalness = Math.min(1, data.shine);
            presetData.roughness = 1 - (Math.min(1, data.shine));
        }
        if (data.hasOwnProperty('transparency'))
            presetData.transparency = data.transparency;
        if (data.bitmaptexture)
            presetData.bitmaptexture = {
                href: data.bitmaptexture
            };
        if (data.bumptexture)
            presetData.bumptexture = {
                href: data.bumptexture
            };
        if (data.transparencytexture)
            presetData.transparencytexture = {
                href: data.transparencytexture
            };
        return presetData;
    }
    loadMaterialDefinitionV2(data, presetData = {}) {
        // ambient is ignored
        if (data.color)
            presetData.color = this.multiplyColors(data.color, presetData.color);
        presetData.side = data.side;
        if (data.metalness || data.metalness === 0)
            presetData.metalness = data.metalness;
        if (data.roughness || data.roughness === 0)
            presetData.roughness = data.roughness;
        if (data.hasOwnProperty('transparency'))
            presetData.transparency = data.transparency;
        if (data.alphaThreshold || data.alphaThreshold === 0)
            presetData.alphaThreshold = data.alphaThreshold;
        if (data.bitmaptexture)
            presetData.bitmaptexture = {
                href: data.bitmaptexture
            };
        if (data.metalnesstexture)
            presetData.metalnesstexture = {
                href: data.metalnesstexture
            };
        if (data.roughnesstexture)
            presetData.roughnesstexture = {
                href: data.roughnesstexture
            };
        if (data.bumptexture)
            presetData.bumptexture = {
                href: data.bumptexture
            };
        if (data.normaltexture)
            presetData.normaltexture = {
                href: data.normaltexture
            };
        if (data.transparencytexture)
            presetData.transparencytexture = {
                href: data.transparencytexture
            };
        return presetData;
    }
    loadMaterialDefinitionV3(data, presetData = {}) {
        // ambient is ignored
        if (data.color)
            presetData.color = this.multiplyColors(data.color, presetData.color);
        presetData.side = data.side;
        if (data.metalness || data.metalness === 0)
            presetData.metalness = data.metalness;
        if (data.roughness || data.roughness === 0)
            presetData.roughness = data.roughness;
        if (data.hasOwnProperty('transparency'))
            presetData.transparency = data.transparency;
        if (data.alphaThreshold || data.alphaThreshold === 0)
            presetData.alphaThreshold = data.alphaThreshold;
        if (data.bumpAmplitude || data.bumpAmplitude === 0)
            presetData.bumpAmplitude = data.bumpAmplitude;
        if (data.bitmaptexture)
            presetData.bitmaptexture = data.bitmaptexture;
        if (data.metalnesstexture)
            presetData.metalnesstexture = data.metalnesstexture;
        if (data.roughnesstexture)
            presetData.roughnesstexture = data.roughnesstexture;
        if (data.bumptexture)
            presetData.bumptexture = data.bumptexture;
        if (data.normaltexture)
            presetData.normaltexture = data.normaltexture;
        if (data.transparencytexture)
            presetData.transparencytexture = data.transparencytexture;
        // line material https://shapediver.atlassian.net/browse/SS-2272
        return presetData;
    }
    loadMaterialV3(data) {
        return __awaiter(this, void 0, void 0, function* () {
            const material = new viewer_shared_types_1.MaterialStandardData();
            const promises = [];
            // ambient is ignored
            if (data.color)
                material.color = data.color;
            material.side = data.side === 'front' ? viewer_shared_types_1.MATERIAL_SIDE.FRONT : data.side === 'back' ? viewer_shared_types_1.MATERIAL_SIDE.BACK : viewer_shared_types_1.MATERIAL_SIDE.DOUBLE;
            if (data.metalness || data.metalness === 0)
                material.metalness = data.metalness;
            if (data.roughness || data.roughness === 0)
                material.roughness = data.roughness;
            if (data.hasOwnProperty('transparency'))
                material.opacity = 1 - data.transparency;
            if (data.alphaThreshold || data.alphaThreshold === 0)
                material.alphaCutoff = data.alphaThreshold;
            if (data.bumpAmplitude || data.bumpAmplitude === 0)
                material.bumpScale = data.bumpAmplitude;
            if (data.bitmaptexture) {
                promises.push(this.loadMapWithProperties(data.bitmaptexture).then(map => {
                    if (map)
                        material.map = map;
                    return map;
                }));
            }
            if (data.metalnesstexture) {
                promises.push(this.loadMapWithProperties(data.metalnesstexture).then(map => {
                    if (map)
                        material.metalnessMap = map;
                    return map;
                }));
            }
            if (data.roughnesstexture) {
                promises.push(this.loadMapWithProperties(data.roughnesstexture).then(map => {
                    if (map)
                        material.roughnessMap = map;
                    return map;
                }));
            }
            if (data.bumptexture) {
                promises.push(this.loadMapWithProperties(data.bumptexture).then(map => {
                    if (map)
                        material.bumpMap = map;
                    return map;
                }));
            }
            if (data.normaltexture) {
                promises.push(this.loadMapWithProperties(data.normaltexture).then(map => {
                    if (map)
                        material.normalMap = map;
                    return map;
                }));
            }
            if (data.transparencytexture) {
                promises.push(this.loadMapWithProperties(data.transparencytexture).then(map => {
                    if (map)
                        material.alphaMap = map;
                    return map;
                }));
            }
            // line material https://shapediver.atlassian.net/browse/SS-2272
            yield Promise.all(promises);
            return material;
        });
    }
    loadPresetMaterial(preset) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.loadMaterialV3(this.loadPresetMaterialDefinition(preset));
        });
    }
    loadPresetMaterialDefinition(preset) {
        const definition = {};
        const idStrings = this.getClassAndSpecificId(preset);
        if (materialDatabase_1.materialDatabase[idStrings.class] && materialDatabase_1.materialDatabase[idStrings.class][idStrings.specific]) {
            this.assignSpecificDefinition(idStrings, materialDatabase_1.materialDatabase[idStrings.class][idStrings.specific], definition);
            this.assignGeneralDefinition(idStrings, materialDatabase_1.materialDatabase[idStrings.class].properties, materialDatabase_1.materialDatabase[idStrings.class][idStrings.specific], definition);
        }
        else if (materialDatabase_1.materialDatabase[idStrings.class] && materialDatabase_1.materialDatabase[idStrings.class]['00']) {
            this.assignSpecificDefinition({ class: idStrings.class, specific: '00' }, materialDatabase_1.materialDatabase[idStrings.class]['00'], definition);
            this.assignGeneralDefinition({ class: idStrings.class, specific: '00' }, materialDatabase_1.materialDatabase[idStrings.class].properties, materialDatabase_1.materialDatabase[idStrings.class]['00'], definition);
        }
        else {
            this.assignSpecificDefinition({ class: '00', specific: '00' }, materialDatabase_1.materialDatabase['00']['00'], definition);
            this.assignGeneralDefinition({ class: '00', specific: '00' }, materialDatabase_1.materialDatabase['00'].properties, materialDatabase_1.materialDatabase['00']['00'], definition);
        }
        return definition;
    }
    // #endregion Public Methods (12)
    // #region Private Methods (4)
    assignGeneralDefinition(id, generalDefinition, specificDefinition, definition) {
        if (generalDefinition.transparencytexture && !specificDefinition.transparencytexture)
            definition.transparencytexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + generalDefinition.transparencytexture
            };
        if (generalDefinition.hasOwnProperty('alphaThreshold') && !specificDefinition.hasOwnProperty('alphaThreshold'))
            definition.alphaThreshold = generalDefinition.alphaThreshold;
        if (generalDefinition.bumptexture && !specificDefinition.bumptexture)
            definition.bumptexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + generalDefinition.bumptexture
            };
        if (generalDefinition.hasOwnProperty('bumpAmplitude') && !specificDefinition.hasOwnProperty('bumpAmplitude'))
            definition.bumpAmplitude = generalDefinition.bumpAmplitude;
        if (generalDefinition.color && !specificDefinition.color)
            definition.color = generalDefinition.color;
        if (generalDefinition.bitmaptexture && !specificDefinition.bitmaptexture)
            definition.bitmaptexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + generalDefinition.bitmaptexture
            };
        if (generalDefinition.hasOwnProperty('metalness') && !specificDefinition.hasOwnProperty('metalness'))
            definition.metalness = generalDefinition.metalness;
        if (generalDefinition.metalnesstexture && !specificDefinition.metalnesstexture)
            definition.metalnesstexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + generalDefinition.metalnesstexture
            };
        if (generalDefinition.normaltexture && !specificDefinition.normaltexture)
            definition.normaltexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + generalDefinition.normaltexture
            };
        if (generalDefinition.hasOwnProperty('transparency') && !specificDefinition.hasOwnProperty('transparency'))
            definition.transparency = generalDefinition.transparency;
        if (generalDefinition.hasOwnProperty('roughness') && !specificDefinition.hasOwnProperty('roughness'))
            definition.roughness = generalDefinition.roughness;
        if (generalDefinition.roughnesstexture && !specificDefinition.roughnesstexture)
            definition.roughnesstexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + generalDefinition.roughnesstexture
            };
        if (generalDefinition.side && !specificDefinition.side)
            definition.side = generalDefinition.side;
    }
    assignSpecificDefinition(id, specificDefinition, definition) {
        if (specificDefinition.transparencytexture)
            definition.transparencytexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + id.specific + '/' + specificDefinition.transparencytexture
            };
        if (specificDefinition.hasOwnProperty('alphaThreshold'))
            definition.alphaThreshold = specificDefinition.alphaThreshold;
        if (specificDefinition.bumptexture)
            definition.bumptexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + id.specific + '/' + specificDefinition.bumptexture
            };
        if (specificDefinition.hasOwnProperty('bumpAmplitude'))
            definition.bumpAmplitude = specificDefinition.bumpAmplitude;
        if (specificDefinition.color)
            definition.color = specificDefinition.color;
        if (specificDefinition.bitmaptexture)
            definition.bitmaptexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + id.specific + '/' + specificDefinition.bitmaptexture
            };
        if (specificDefinition.hasOwnProperty('metalness'))
            definition.metalness = specificDefinition.metalness;
        if (specificDefinition.metalnesstexture)
            definition.metalnesstexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + id.specific + '/' + specificDefinition.metalnesstexture
            };
        if (specificDefinition.normaltexture)
            definition.normaltexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + id.specific + '/' + specificDefinition.normaltexture
            };
        if (specificDefinition.hasOwnProperty('transparency'))
            definition.transparency = specificDefinition.transparency;
        if (specificDefinition.hasOwnProperty('roughness'))
            definition.roughness = specificDefinition.roughness;
        if (specificDefinition.roughnesstexture)
            definition.roughnesstexture = {
                href: 'https://viewer.shapediver.com/v2/materials/1024/' + id.class + '/' + id.specific + '/' + specificDefinition.roughnesstexture
            };
        if (specificDefinition.side)
            definition.side = specificDefinition.side;
    }
    getClassAndSpecificId(id) {
        // for a while, we had documented the presets to be 10, 20, 30 and 40 here, we allow for the few cases where this was used to succeed
        if (id < 100 && id % 10 == 0)
            id /= 10;
        // if the id is less than 10, multiply it by 100
        if (id < 10)
            id *= 100;
        const cast = (id) => {
            const idString = String(id);
            return idString.padStart(2, '0').slice(0, 2);
        };
        return {
            class: cast(Math.floor(id / 100)),
            specific: cast(id - (Math.floor(id / 100) * 100))
        };
    }
    /**
     * Multiply two colors
     *
     * @param color1
     * @param color2
     * @returns
     */
    multiplyColors(color1, color2) {
        if (!color2)
            return color1;
        return [
            Math.min(255, (color1[0] * color2[0]) / 255),
            Math.min(255, (color1[1] * color2[1]) / 255),
            Math.min(255, (color1[2] * color2[2]) / 255),
            Math.min(255, ((color1[3] !== undefined ? color1[3] : 255) * (color2[3] !== undefined ? color2[3] : 255)) / 255)
        ];
    }
}
exports.MaterialEngine = MaterialEngine;
//# sourceMappingURL=MaterialEngine.js.map

/***/ }),

/***/ 93637:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MaterialEngine = void 0;
const MaterialEngine_1 = __webpack_require__(7846);
Object.defineProperty(exports, "MaterialEngine", ({ enumerable: true, get: function () { return MaterialEngine_1.MaterialEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 2233:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.materialDatabase = void 0;
exports.materialDatabase = {
    "00": {
        "00": {
            "name": "Default material",
            "color": [211, 211, 211, 255],
            "metalness": 0,
            "roughness": 1
        },
        "properties": {
            "name": "Default materials"
        }
    },
    "01": {
        "01": {
            "name": "Default groundplane material",
            "color": [211, 211, 211, 255],
            "metalness": 0,
            "roughness": 1
        },
        "properties": {
            "name": "Groundplane materials"
        }
    },
    "02": {
        "00": {
            "name": "Default plastic material",
            "color": [211, 211, 211, 255],
            "metalness": 0,
            "roughness": 1,
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "properties": {
            "name": "Plastic materials"
        }
    },
    "03": {
        "00": {
            "name": "Default metal material",
            "color": [205, 205, 205, 255],
            "roughness": 0.25
        },
        "01": {
            "name": "Used metal material 1",
            "color": [205, 205, 205, 255],
            "roughness": 1,
            "roughnesstexture": "roughnessMap.jpg"
        },
        "02": {
            "name": "Used metal material 2",
            "color": [205, 205, 205, 255],
            "roughness": 1,
            "roughnesstexture": "roughnessMap.jpg"
        },
        "03": {
            "name": "Used metal material 3",
            "color": [205, 205, 205, 255],
            "roughness": 1,
            "roughnesstexture": "roughnessMap.jpg"
        },
        "10": {
            "name": "Gold material",
            "color": [230, 207, 92, 255],
            "roughness": 0
        },
        "11": {
            "name": "Used gold material",
            "color": [230, 207, 92, 255],
            "roughness": 0,
            "roughnesstexture": "roughnessMap.jpg"
        },
        "21": {
            "name": "Hammered metal material",
            "color": [205, 205, 205, 255],
            "roughness": 1,
            "normaltexture": "normalMap.jpg"
        },
        "properties": {
            "name": "Metal materials",
            "metalness": 1
        }
    },
    "04": {
        "00": {
            "name": "Default glass material",
            "color": [211, 211, 211, 255],
            "metalness": 1,
            "roughness": 0,
            "transparency": 0.75
        },
        "properties": { "name": "Glass materials" }
    },
    "05": {
        "00": {
            "bitmaptexture": "map.jpg",
            "name": "Default wood material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "01": {
            "bitmaptexture": "map.jpg",
            "name": "Wood floor material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "10": {
            "bitmaptexture": "map.jpg",
            "name": "Natural oak material",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "11": {
            "bitmaptexture": "map.jpg",
            "name": "Premium oak material",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "properties": {
            "name": "Wood materials",
            "color": [211, 211, 211, 255],
            "metalness": 0,
            "roughness": 1
        }
    },
    "06": {
        "00": {
            "bitmaptexture": "map.jpg",
            "name": "Default leather material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "01": {
            "bitmaptexture": "map.jpg",
            "name": "Dark brown leather material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "02": {
            "bitmaptexture": "map.jpg",
            "name": "Black leather material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "10": {
            "bitmaptexture": "map.jpg",
            "name": "Worn leather material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "properties": {
            "name": "Leather materials",
            "metalness": 0, "roughness": 1
        }
    },
    "07": {
        "00": {
            "bitmaptexture": "map.jpg",
            "name": "Default fabric material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "01": {
            "bitmaptexture": "map.jpg",
            "name": "Grey fabric material",
            "metalnesstexture": "metalnessMap.jpg",
            "normaltexture": "normalMap.jpg",
            "roughnesstexture": "roughnessMap.jpg"
        },
        "properties": {
            "name": "Fabric materials",
            "metalness": 1, "roughness": 1
        }
    }
};
//# sourceMappingURL=materialDatabase.js.map

/***/ }),

/***/ 79294:
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
exports.SDTFEngine = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
const sdk_sdtf_v1_1 = __webpack_require__(76461);
const sdk_sdtf_primitives_1 = __webpack_require__(72916);
class SDTFEngine {
    constructor() {
        // #region Properties (3)
        this._logger = viewer_shared_services_1.Logger.instance;
        // #endregion Private Methods (5)
    }
    // #endregion Properties (3)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (1)
    /**
     * Load the sdtf content into a scene graph node.
     *
     * @param content the geometry content
     * @returns the scene graph node
     */
    loadContent(content, jwtToken) {
        return __awaiter(this, void 0, void 0, function* () {
            const node = new viewer_shared_node_tree_1.TreeNode('sdtf');
            // We have to be safe and check if the content is a valid SDTF file
            if (!content || (content && !content.href))
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('SDTFEngine.loadContent: Invalid content was provided to geometry engine.');
            // create the sdtf sdk
            const sdk = jwtToken ? yield (0, sdk_sdtf_v1_1.create)({ authToken: jwtToken }) : yield (0, sdk_sdtf_v1_1.create)();
            // crete the sdtf parser
            const parser = sdk.createParser();
            // parse the file
            this._parsedFile = yield parser.readFromUrl(content.href);
            // crete the overview and save it in the node data
            node.data.push(yield this.createSDTFOverview());
            // add the loaded chunks to the node
            for (let i = 0; i < this._parsedFile.chunks.length; i++)
                node.children.push(yield this.loadChunk(this._parsedFile.chunks[i], i));
            return node;
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (5)
    /**
     * Create an overview of the SDTF file.
     * This overview is used for the data visualization.
     * It is structured as a dictionary with the name as the key and an array of Objects as the value.
     * The array of objects contains the different types that can be found in the SDTF file under the same name.
     *
     * Example:
     * {
     *     "color": [
     *         {
     *             typeHint: 'string',
     *             count: 2,
     *             values: ["red", "blue"]
     *         },
     *         {
     *             typeHint: 'numberArray',
     *             count: 2,
     *             values: [[1,0,0,1], [0,0,1,1]]
     *         },
     *     ]
     * }
     *
     * The overview contains the following information:
     * - name of the attribute + type of the attribute
     * - the count
     * - for numerical attributes, the min and max values
     * - for string attributes, the unique values
     *
     * @returns
     */
    createSDTFOverview() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const overview = {};
            // go through all attributes
            for (let i = 0; i < this._parsedFile.attributes.length; i++) {
                const attributes = this._parsedFile.attributes[i];
                // go through all entries
                for (let key in attributes.entries) {
                    const dataToCopy = attributes.entries[key];
                    const value = yield dataToCopy.getContent();
                    // create the type hint to use
                    const dataTypehint = dataToCopy.typeHint === undefined ? 'undefined' : dataToCopy.typeHint.name;
                    // check if the attribute is already in the overview
                    const existingEntries = overview[key] ? overview[key].filter(o => o.typeHint === dataTypehint) : [];
                    if (overview[key] && existingEntries.length > 0) {
                        // update the existing entry
                        const entry = existingEntries[0];
                        // update the count
                        entry.count++;
                        // update the values
                        if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isStringType(dataTypehint)) {
                            if (!((_a = entry.values) === null || _a === void 0 ? void 0 : _a.includes(value)))
                                (_b = entry.values) === null || _b === void 0 ? void 0 : _b.push(value);
                        }
                        // update the min and max
                        if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isNumberType(dataTypehint)) {
                            entry.min = Math.min(value, entry.min);
                            entry.max = Math.max(value, entry.max);
                        }
                    }
                    else {
                        // create a new entry, if the name already exists, but the type does not
                        if (overview[key]) {
                            overview[key].push({
                                typeHint: dataTypehint,
                                count: 1,
                            });
                        }
                        // create completely new entry
                        else {
                            overview[key] = [{
                                    typeHint: dataTypehint,
                                    count: 1,
                                }];
                        }
                        // update the values
                        if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isStringType(dataTypehint)) {
                            overview[key][overview[key].length - 1].values = [value];
                        }
                        // update the min and max
                        if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isNumberType(dataTypehint)) {
                            overview[key][overview[key].length - 1].min = value;
                            overview[key][overview[key].length - 1].max = value;
                        }
                    }
                }
            }
            return new viewer_shared_types_1.SDTFOverviewData(overview);
        });
    }
    /**
     * Load the attributes into a SDTFAttributesData data item.
     *
     * @param attributes
     * @returns
     */
    loadAttributes(attributes) {
        var _a, _b, _c, _d;
        return __awaiter(this, void 0, void 0, function* () {
            const data = new viewer_shared_types_1.SDTFAttributesData();
            // go through all attributes entries and save them in data items
            for (let key in attributes.entries) {
                if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isBooleanType((_a = attributes.entries[key].typeHint) === null || _a === void 0 ? void 0 : _a.name) || sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isColorType((_b = attributes.entries[key].typeHint) === null || _b === void 0 ? void 0 : _b.name) || sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isNumberType((_c = attributes.entries[key].typeHint) === null || _c === void 0 ? void 0 : _c.name) || sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isStringType((_d = attributes.entries[key].typeHint) === null || _d === void 0 ? void 0 : _d.name)) {
                    // create the data item and save it in the dictionary
                    const typeHint = attributes.entries[key].typeHint === undefined ? 'undefined' : attributes.entries[key].typeHint.name;
                    data.attributes[key] = new viewer_shared_types_1.SDTFAttributeData(typeHint, yield attributes.entries[key].getContent());
                }
                else {
                    // async data
                    const typeHint = attributes.entries[key].typeHint === undefined ? 'undefined' : attributes.entries[key].typeHint.name;
                    data.attributes[key] = new viewer_shared_types_1.SDTFAttributeData(typeHint, () => __awaiter(this, void 0, void 0, function* () {
                        return yield attributes.entries[key].getContent();
                    }));
                }
            }
            return data;
        });
    }
    /**
     * Load the chunk into a scene graph node.
     *
     * @param chunk
     * @param chunkId
     * @returns
     */
    loadChunk(chunk, chunkId) {
        return __awaiter(this, void 0, void 0, function* () {
            const chunkDef = new viewer_shared_node_tree_1.TreeNode(chunk.name || 'chunk_' + chunkId);
            // if there are attributes, add them to the chunk as data
            if (chunk.attributes !== undefined) {
                chunkDef.data.push(yield this.loadAttributes(chunk.attributes));
            }
            // if there are items, add them to the chunk as children
            if (chunk.items !== undefined && chunk.items.length > 0) {
                for (let i = 0, len = chunk.items.length; i < len; i++) {
                    // got through all items
                    chunkDef.addChild(yield this.loadItem(chunk.items[i], i));
                }
            }
            // if there are nodes, add them to the chunk as children
            if (chunk.nodes !== undefined && chunk.nodes.length > 0) {
                for (let i = 0, len = chunk.nodes.length; i < len; i++) {
                    // got through all children
                    chunkDef.addChild(yield this.loadNode(chunk.nodes[i], i));
                }
            }
            return chunkDef;
        });
    }
    /**
     * Load the item into a scene graph node.
     *
     * @param item
     * @param itemId
     * @returns
     */
    loadItem(item, itemId) {
        return __awaiter(this, void 0, void 0, function* () {
            const itemDef = new viewer_shared_node_tree_1.TreeNode(itemId + '');
            // if there are attributes, add them to the item
            let attributes;
            if (item.attributes !== undefined)
                attributes = yield this.loadAttributes(item.attributes);
            // create the typehint
            const typeHint = item.typeHint === undefined ? 'undefined' : item.typeHint.name;
            let itemData;
            // create the data and save it in the item node
            if (sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isBooleanType(typeHint) || sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isColorType(typeHint) || sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isNumberType(typeHint) || sdk_sdtf_primitives_1.SdtfPrimitiveTypeGuard.isStringType(typeHint)) {
                itemData = new viewer_shared_types_1.SDTFItemData(typeHint, yield item.getContent(), attributes === null || attributes === void 0 ? void 0 : attributes.attributes);
            }
            else {
                itemData = new viewer_shared_types_1.SDTFItemData(typeHint, () => __awaiter(this, void 0, void 0, function* () {
                    return yield item.getContent();
                }), attributes === null || attributes === void 0 ? void 0 : attributes.attributes);
            }
            itemDef.data.push(itemData);
            return itemDef;
        });
    }
    /**
     * Load the node into a scene graph node.
     *
     * @param node
     * @param nodeId
     * @returns
     */
    loadNode(node, nodeId) {
        return __awaiter(this, void 0, void 0, function* () {
            const nodeDef = new viewer_shared_node_tree_1.TreeNode(node.name || 'node_' + nodeId);
            // if there are attributes, add them to the node as data
            if (node.attributes !== undefined) {
                nodeDef.data.push(yield this.loadAttributes(node.attributes));
            }
            // if there are items, add them to the node as children
            if (node.items !== undefined && node.items.length > 0) {
                for (let i = 0, len = node.items.length; i < len; i++) {
                    // got through all items
                    nodeDef.addChild(yield this.loadItem(node.items[i], i));
                }
            }
            // if there are nodes, add them to the node as children
            if (node.nodes !== undefined && node.nodes.length > 0) {
                for (let i = 0, len = node.nodes.length; i < len; i++) {
                    // got through all children
                    nodeDef.addChild(yield this.loadNode(node.nodes[i], i));
                }
            }
            return nodeDef;
        });
    }
}
exports.SDTFEngine = SDTFEngine;
//# sourceMappingURL=SDTFEngine.js.map

/***/ }),

/***/ 91925:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDTFEngine = void 0;
const SDTFEngine_1 = __webpack_require__(79294);
Object.defineProperty(exports, "SDTFEngine", ({ enumerable: true, get: function () { return SDTFEngine_1.SDTFEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 61278:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TAG3D_JUSTIFICATION = void 0;
var TAG3D_JUSTIFICATION;
(function (TAG3D_JUSTIFICATION) {
    TAG3D_JUSTIFICATION["TOP_LEFT"] = "TL";
    TAG3D_JUSTIFICATION["TOP_CENTER"] = "TC";
    TAG3D_JUSTIFICATION["TOP_RIGHT"] = "TR";
    TAG3D_JUSTIFICATION["MIDDLE_LEFT"] = "ML";
    TAG3D_JUSTIFICATION["MIDDLE_CENTER"] = "MC";
    TAG3D_JUSTIFICATION["MIDDLE_RIGHT"] = "MR";
    TAG3D_JUSTIFICATION["BOTTOM_LEFT"] = "BL";
    TAG3D_JUSTIFICATION["BOTTOM_CENTER"] = "BC";
    TAG3D_JUSTIFICATION["BOTTOM_RIGHT"] = "BR";
})(TAG3D_JUSTIFICATION = exports.TAG3D_JUSTIFICATION || (exports.TAG3D_JUSTIFICATION = {}));
//# sourceMappingURL=interfaces.js.map

/***/ }),

/***/ 77227:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ACCESSORTYPE = exports.ACCESSORCOMPONENTSIZE = exports.ACCESSORCOMPONENTTYPE = void 0;
exports.ACCESSORCOMPONENTTYPE = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5124: Uint32Array,
    5125: Uint32Array,
    5126: Float32Array
};
exports.ACCESSORCOMPONENTSIZE = {
    5120: 1,
    5121: 1,
    5122: 2,
    5123: 2,
    5125: 4,
    5126: 4
};
exports.ACCESSORTYPE = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    VEC7: 7,
    VEC10: 10,
    VEC12: 12,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
};
//# sourceMappingURL=IGLTF_v1.js.map

/***/ }),

/***/ 30073:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ACCESSORTYPE = exports.ACCESSORCOMPONENTSIZE = exports.ACCESSORCOMPONENTTYPE = void 0;
exports.ACCESSORCOMPONENTTYPE = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5124: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
};
exports.ACCESSORCOMPONENTSIZE = {
    5120: 1,
    5121: 1,
    5122: 2,
    5123: 2,
    5125: 4,
    5126: 4
};
exports.ACCESSORTYPE = {
    SCALAR: 1,
    VEC2: 2,
    VEC3: 3,
    VEC4: 4,
    MAT2: 4,
    MAT3: 9,
    MAT4: 16
};
//# sourceMappingURL=IGLTF_v2.js.map

/***/ }),

/***/ 3816:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TAG3D_JUSTIFICATION = exports.ACCESSORTYPE_V2 = exports.ACCESSORCOMPONENTSIZE_V2 = exports.ACCESSORCOMPONENTTYPE_V2 = exports.ACCESSORTYPE_V1 = exports.ACCESSORCOMPONENTSIZE_V1 = exports.ACCESSORCOMPONENTTYPE_V1 = void 0;
const interfaces_1 = __webpack_require__(61278);
Object.defineProperty(exports, "TAG3D_JUSTIFICATION", ({ enumerable: true, get: function () { return interfaces_1.TAG3D_JUSTIFICATION; } }));
const IGLTF_v1_1 = __webpack_require__(77227);
Object.defineProperty(exports, "ACCESSORCOMPONENTSIZE_V1", ({ enumerable: true, get: function () { return IGLTF_v1_1.ACCESSORCOMPONENTSIZE; } }));
Object.defineProperty(exports, "ACCESSORCOMPONENTTYPE_V1", ({ enumerable: true, get: function () { return IGLTF_v1_1.ACCESSORCOMPONENTTYPE; } }));
Object.defineProperty(exports, "ACCESSORTYPE_V1", ({ enumerable: true, get: function () { return IGLTF_v1_1.ACCESSORTYPE; } }));
const IGLTF_v2_1 = __webpack_require__(30073);
Object.defineProperty(exports, "ACCESSORCOMPONENTSIZE_V2", ({ enumerable: true, get: function () { return IGLTF_v2_1.ACCESSORCOMPONENTSIZE; } }));
Object.defineProperty(exports, "ACCESSORCOMPONENTTYPE_V2", ({ enumerable: true, get: function () { return IGLTF_v2_1.ACCESSORCOMPONENTTYPE; } }));
Object.defineProperty(exports, "ACCESSORTYPE_V2", ({ enumerable: true, get: function () { return IGLTF_v2_1.ACCESSORTYPE; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 33530:
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
exports.Tag3dEngine = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_global_access_objects_1 = __webpack_require__(50069);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
class Tag3dEngine {
    constructor() {
        // #region Properties (3)
        this._globalAccessObjects = viewer_shared_global_access_objects_1.GlobalAccessObjects.instance;
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        // #endregion Public Methods (1)
    }
    // #endregion Properties (3)
    // #region Public Static Getters And Setters (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Getters And Setters (1)
    // #region Public Methods (1)
    /**
     * Load the tag3d content into a scene graph node.
     *
     * @param content the tag3d content
     * @returns the scene graph node
     */
    loadContent(content) {
        return __awaiter(this, void 0, void 0, function* () {
            const node = new viewer_shared_node_tree_1.TreeNode('tag3d');
            if (!content)
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('Tag3dEngine.loadContent: Invalid content was provided to tag3d engine.');
            if (content.data && Array.isArray(content.data)) {
                if (this._globalAccessObjects.loadTag3D) {
                    for (let i = 0; i < content.data.length; i++) {
                        const tag3dInfo = content.data[i];
                        const child = this._globalAccessObjects.loadTag3D(tag3dInfo);
                        if (child)
                            node.addChild(child);
                    }
                }
                else {
                    const customData = new viewer_shared_types_1.CustomData({});
                    for (let i = 0; i < content.data.length; i++) {
                        const tag3dInfo = content.data[i];
                        customData.data['tag3d_' + tag3dInfo.version] = tag3dInfo;
                    }
                    node.addData(customData);
                }
            }
            else {
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('Tag3dEngine.loadContent: No tag3d data was provided to tag3d engine.');
            }
            return node;
        });
    }
}
exports.Tag3dEngine = Tag3dEngine;
//# sourceMappingURL=Tag3dEngine.js.map

/***/ }),

/***/ 59507:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tag3dEngine = void 0;
const Tag3dEngine_1 = __webpack_require__(33530);
Object.defineProperty(exports, "Tag3dEngine", ({ enumerable: true, get: function () { return Tag3dEngine_1.Tag3dEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 66032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EVENTTYPE_DRAWING_TOOLS = exports.EVENTTYPE_GUMBALL = exports.EVENTTYPE_INTERACTION = exports.EVENTTYPE_VIEWPORT = exports.EVENTTYPE_SESSION = exports.EVENTTYPE_SCENE = exports.EVENTTYPE_RENDERING = exports.EVENTTYPE_PARAMETER = exports.EVENTTYPE_OUTPUT = exports.EVENTTYPE_CAMERA = exports.EVENTTYPE = exports.TASK_TYPE = exports.SPINNER_POSITIONING = exports.SESSION_SETTINGS_MODE = exports.BUSY_MODE_DISPLAY = exports.SDTF_TYPEHINT = exports.TEXTURE_FILTERING = exports.TEXTURE_WRAPPING = exports.MATERIAL_TYPE = exports.MATERIAL_SHADING = exports.MATERIAL_ALPHA = exports.MATERIAL_SIDE = exports.PRIMITIVE_MODE = exports.LOGGING_LEVEL = exports.ENVIRONMENT_MAP_EMPTY = exports.ENVIRONMENT_MAP_CUBE = exports.ENVIRONMENT_MAP = exports.TONE_MAPPING = exports.TEXTURE_ENCODING = exports.ORTHOGRAPHIC_CAMERA_DIRECTION = exports.VISIBILITY_MODE = exports.RENDERER_TYPE = exports.LIGHT_TYPE = exports.CAMERA_TYPE = exports.TAG3D_JUSTIFICATION = exports.PARAMETER_VISUALIZATION = exports.EXPORT_TYPE = exports.PARAMETER_TYPE = exports.FLAG_TYPE = exports.TreeNode = exports.Tree = exports.version = exports.generalOptions = exports.sceneTree = exports.removeListener = exports.addListener = exports.sessions = exports.createSession = exports.viewports = exports.createViewport = void 0;
exports.ShapeDiverViewerDrawingToolsError = exports.ShapeDiverViewerInteractionError = exports.ShapeDiverViewerValidationError = exports.ShapeDiverViewerCameraError = exports.ShapeDiverViewerLightError = exports.ShapeDiverViewerArError = exports.ShapeDiverViewerUnknownError = exports.ShapeDiverViewerViewportError = exports.ShapeDiverViewerSessionError = exports.ShapeDiverViewerSettingsError = exports.ShapeDiverViewerWebGLError = exports.ShapeDiverViewerEnvironmentMapError = exports.ShapeDiverViewerDataProcessingError = exports.ShapeDiverViewerError = exports.ShapeDiverViewerErrorType = exports.SessionOutputData = exports.SessionData = exports.SystemInfo = exports.MaterialEngine = exports.GeometryEngine = exports.DataEngine = exports.SdtfPrimitiveTypeGuard = exports.SDTFItemData = exports.SDTFAttributeData = exports.SDTFAttributesData = exports.SDTFOverviewData = exports.CustomData = exports.HTMLElementAnchorData = exports.HTMLElementAnchorImageData = exports.HTMLElementAnchorTextData = exports.HTMLElementAnchorCustomData = exports.MaterialVariantsData = exports.PrimitiveData = exports.AttributeData = exports.GeometryData = exports.AnimationData = exports.MapData = exports.MaterialBasicLineData = exports.MaterialMultiPointData = exports.MaterialPointData = exports.MaterialGemData = exports.MaterialSpecularGlossinessData = exports.MaterialShadowData = exports.MaterialUnlitData = exports.MaterialStandardData = exports.ShapeDiverResponseModelComputationStatus = exports.ThreejsData = exports.Sphere = exports.Box = exports.EVENTTYPE_TASK = void 0;
exports.IDrawingParameterJsonSchema = exports.IGumballParameterJsonSchema = exports.ISelectionParameterJsonSchema = exports.IInteractionParameterJsonSchema = exports.Resolution = exports.KernelSize = exports.VignetteTechnique = exports.BlendFunction = exports.EffectComposer = exports.Effect = exports.VignetteEffect = exports.TiltShiftEffect = exports.SepiaEffect = exports.SelectiveBloomEffect = exports.ScanlineEffect = exports.SSAOEffect = exports.PixelationEffect = exports.OutlineEffect = exports.NoiseEffect = exports.HueSaturationEffect = exports.GridEffect = exports.GodRaysEffect = exports.DotScreenEffect = exports.DepthOfFieldEffect = exports.ChromaticAberrationEffect = exports.BloomEffect = exports.POST_PROCESSING_EFFECT_TYPE = exports.ANTI_ALIASING_TECHNIQUE = exports.isViewerGeometryBackendResponseError = exports.isViewerGeometryBackendRequestError = exports.isViewerGeometryBackendGenericError = exports.isViewerGeometryBackendError = exports.isViewerDrawingToolsError = exports.isViewerInteractionError = exports.isViewerValidationError = exports.isARError = exports.isViewerCameraError = exports.isViewerLightError = exports.isViewerViewportError = exports.isViewerSessionError = exports.isViewerSettingsError = exports.isViewerWebGLError = exports.isViewerEnvironmentMapError = exports.isViewerDataProcessingError = exports.isViewerUnknownError = exports.isViewerError = exports.ShapeDiverGeometryBackendResponseErrorType = exports.ShapeDiverGeometryBackendResponseError = exports.ShapeDiverGeometryBackendRequestError = exports.ShapeDiverGeometryBackendError = void 0;
exports.stringify = exports.isValid = exports.OutputApiData = exports.SessionApiData = void 0;
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
const viewer_session_1 = __webpack_require__(64718);
Object.defineProperty(exports, "createSession", ({ enumerable: true, get: function () { return viewer_session_1.createSession; } }));
Object.defineProperty(exports, "OutputApiData", ({ enumerable: true, get: function () { return viewer_session_1.OutputApiData; } }));
Object.defineProperty(exports, "SessionApiData", ({ enumerable: true, get: function () { return viewer_session_1.SessionApiData; } }));
Object.defineProperty(exports, "sessions", ({ enumerable: true, get: function () { return viewer_session_1.sessions; } }));
const viewer_viewport_1 = __webpack_require__(71202);
Object.defineProperty(exports, "createViewport", ({ enumerable: true, get: function () { return viewer_viewport_1.createViewport; } }));
Object.defineProperty(exports, "viewports", ({ enumerable: true, get: function () { return viewer_viewport_1.viewports; } }));
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
Object.defineProperty(exports, "SystemInfo", ({ enumerable: true, get: function () { return viewer_shared_services_1.SystemInfo; } }));
const viewer_data_engine_geometry_engine_1 = __webpack_require__(50432);
Object.defineProperty(exports, "GeometryEngine", ({ enumerable: true, get: function () { return viewer_data_engine_geometry_engine_1.GeometryEngine; } }));
const viewer_data_engine_shared_types_1 = __webpack_require__(3816);
Object.defineProperty(exports, "TAG3D_JUSTIFICATION", ({ enumerable: true, get: function () { return viewer_data_engine_shared_types_1.TAG3D_JUSTIFICATION; } }));
const viewer_session_engine_session_engine_1 = __webpack_require__(4466);
Object.defineProperty(exports, "SessionData", ({ enumerable: true, get: function () { return viewer_session_engine_session_engine_1.SessionData; } }));
Object.defineProperty(exports, "SessionOutputData", ({ enumerable: true, get: function () { return viewer_session_engine_session_engine_1.SessionOutputData; } }));
const viewer_shared_node_tree_1 = __webpack_require__(41652);
Object.defineProperty(exports, "Tree", ({ enumerable: true, get: function () { return viewer_shared_node_tree_1.Tree; } }));
Object.defineProperty(exports, "TreeNode", ({ enumerable: true, get: function () { return viewer_shared_node_tree_1.TreeNode; } }));
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
Object.defineProperty(exports, "LIGHT_TYPE", ({ enumerable: true, get: function () { return viewer_rendering_engine_light_engine_1.LIGHT_TYPE; } }));
const viewer_data_engine_material_engine_1 = __webpack_require__(93637);
Object.defineProperty(exports, "MaterialEngine", ({ enumerable: true, get: function () { return viewer_data_engine_material_engine_1.MaterialEngine; } }));
const sdk_geometry_api_sdk_v2_1 = __webpack_require__(50059);
Object.defineProperty(exports, "ShapeDiverResponseModelComputationStatus", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_1.ShapeDiverResponseModelComputationStatus; } }));
const sdk_geometry_api_sdk_v2_2 = __webpack_require__(50059);
Object.defineProperty(exports, "EXPORT_TYPE", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_v2_2.ShapeDiverResponseExportDefinitionType; } }));
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=vendors-9f88dc78.bundle.js.map