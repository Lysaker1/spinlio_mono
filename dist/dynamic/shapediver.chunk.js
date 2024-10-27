"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[350],{

/***/ 77241:
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
var _AttributeVisualizationEngine_uuidGenerator, _AttributeVisualizationEngine_viewport, _AttributeVisualizationEngine_attributes, _AttributeVisualizationEngine_defaultMaterial, _AttributeVisualizationEngine_defaultLayer, _AttributeVisualizationEngine_layers, _AttributeVisualizationEngine_overview, _AttributeVisualizationEngine_listeners, _AttributeVisualizationEngine_visualizedMaterialType, _AttributeVisualizationEngine_layerMaterialType, _AttributeVisualizationEngine_nodesWithAttributeData;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttributeVisualizationEngine = void 0;
const viewer_1 = __webpack_require__(66032);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_shared_types_1 = __webpack_require__(64766);
const AttributeVisualizationUtils_1 = __webpack_require__(69314);
class AttributeVisualizationEngine {
    // #endregion Properties (7)
    // #region Constructors (1)
    constructor(viewport) {
        // #region Properties (7)
        _AttributeVisualizationEngine_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        _AttributeVisualizationEngine_viewport.set(this, void 0);
        _AttributeVisualizationEngine_attributes.set(this, []);
        _AttributeVisualizationEngine_defaultMaterial.set(this, new viewer_shared_types_1.MaterialUnlitData({ color: '#000000', opacity: 1 }));
        _AttributeVisualizationEngine_defaultLayer.set(this, {
            color: '#000000',
            opacity: 1,
            enabled: true
        });
        _AttributeVisualizationEngine_layers.set(this, {});
        _AttributeVisualizationEngine_overview.set(this, void 0);
        _AttributeVisualizationEngine_listeners.set(this, {});
        _AttributeVisualizationEngine_visualizedMaterialType.set(this, 'unlit');
        _AttributeVisualizationEngine_layerMaterialType.set(this, 'unlit');
        _AttributeVisualizationEngine_nodesWithAttributeData.set(this, []);
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_viewport, viewport, "f");
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_overview, __classPrivateFieldGet(this, _AttributeVisualizationEngine_viewport, "f").createSDTFOverview(viewer_1.sceneTree.root), "f");
        this.createLayers();
        this.constructAttributeVisualization();
        this.gatherNodesWithAttributeData();
        __classPrivateFieldGet(this, _AttributeVisualizationEngine_nodesWithAttributeData, "f").forEach(n => __classPrivateFieldGet(this, _AttributeVisualizationEngine_viewport, "f").updateNode(n));
        (0, viewer_1.addListener)(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_CUSTOMIZED, () => {
            __classPrivateFieldSet(this, _AttributeVisualizationEngine_overview, __classPrivateFieldGet(this, _AttributeVisualizationEngine_viewport, "f").createSDTFOverview(viewer_1.sceneTree.root), "f");
            const layers = __classPrivateFieldGet(this, _AttributeVisualizationEngine_layers, "f");
            this.createLayers();
            for (const l in layers) {
                if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_layers, "f")[l])
                    __classPrivateFieldGet(this, _AttributeVisualizationEngine_layers, "f")[l] = layers[l];
            }
            this.constructAttributeVisualization();
            this.gatherNodesWithAttributeData();
            for (const l in __classPrivateFieldGet(this, _AttributeVisualizationEngine_listeners, "f"))
                __classPrivateFieldGet(this, _AttributeVisualizationEngine_listeners, "f")[l]();
        });
    }
    // #endregion Constructors (1)
    // #region Public Accessors (3)
    gatherNodesWithAttributeData() {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_nodesWithAttributeData, [], "f");
        viewer_1.sceneTree.root.traverse((node) => {
            if (node.data.some(d => d instanceof viewer_shared_types_1.SDTFItemData)) {
                __classPrivateFieldGet(this, _AttributeVisualizationEngine_nodesWithAttributeData, "f").push(node);
            }
        });
    }
    get defaultMaterial() {
        return __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f");
    }
    get defaultLayer() {
        return __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f");
    }
    get layers() {
        return __classPrivateFieldGet(this, _AttributeVisualizationEngine_layers, "f");
    }
    get layerMaterialType() {
        return __classPrivateFieldGet(this, _AttributeVisualizationEngine_layerMaterialType, "f");
    }
    get visualizedMaterialType() {
        return __classPrivateFieldGet(this, _AttributeVisualizationEngine_visualizedMaterialType, "f");
    }
    get overview() {
        return __classPrivateFieldGet(this, _AttributeVisualizationEngine_overview, "f");
    }
    // #endregion Public Accessors (3)
    // #region Public Methods (3)
    updateAttributes(attributes) {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_attributes, attributes, "f");
        this.constructAttributeVisualization();
    }
    updateDefaultLayer(layer) {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_defaultLayer, layer, "f");
        this.constructAttributeVisualization();
    }
    updateDefaultMaterial(material) {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_defaultMaterial, material, "f");
        this.constructAttributeVisualization();
    }
    updateLayerMaterialType(type) {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_layerMaterialType, type, "f");
        this.createLayers();
        this.constructAttributeVisualization();
    }
    updateVisualizedMaterialType(type) {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_visualizedMaterialType, type, "f");
        this.createLayers();
        this.constructAttributeVisualization();
    }
    updateLayers(layers) {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_layers, layers, "f");
        this.constructAttributeVisualization();
    }
    addListener(cb) {
        const token = __classPrivateFieldGet(this, _AttributeVisualizationEngine_uuidGenerator, "f").create();
        __classPrivateFieldGet(this, _AttributeVisualizationEngine_listeners, "f")[token] = cb;
        return token;
    }
    removeListener(token) {
        if (!__classPrivateFieldGet(this, _AttributeVisualizationEngine_listeners, "f")[token])
            return false;
        delete __classPrivateFieldGet(this, _AttributeVisualizationEngine_listeners, "f")[token];
        return true;
    }
    // #endregion Public Methods (3)
    // #region Private Methods (2)
    constructAttributeVisualization() {
        __classPrivateFieldGet(this, _AttributeVisualizationEngine_viewport, "f").visualizeAttributes = (overview, itemData) => {
            // early out if there are not attributes in this itemData
            if (!itemData || !itemData.attributes) {
                if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_attributes, "f").length === 0) {
                    // return default layer material
                    let material;
                    if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_layerMaterialType, "f") === 'unlit') {
                        material = new viewer_shared_types_1.MaterialUnlitData({
                            opacity: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").enabled ? __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").opacity : 0,
                            color: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").color
                        });
                    }
                    else {
                        material = new viewer_shared_types_1.MaterialStandardData({
                            opacity: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").enabled ? __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").opacity : 0,
                            color: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").color
                        });
                    }
                    return {
                        matrix: gl_matrix_1.mat4.create(),
                        material
                    };
                }
                else {
                    // return default layer material
                    let material;
                    if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_layerMaterialType, "f") === 'unlit') {
                        material = new viewer_shared_types_1.MaterialUnlitData({
                            opacity: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").enabled ? __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").opacity * __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f").opacity : 0,
                            color: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f").color
                        });
                    }
                    else {
                        material = new viewer_shared_types_1.MaterialStandardData({
                            opacity: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").enabled ? __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultLayer, "f").opacity * __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f").opacity : 0,
                            color: __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f").color
                        });
                    }
                    return {
                        matrix: gl_matrix_1.mat4.create(),
                        material
                    };
                }
            }
            // search for the responsible layer property, if none is found, default layer is assigned
            let layer = this.defaultLayer;
            if (itemData.attributes['layer'] && viewer_shared_types_1.SdtfPrimitiveTypeGuard.isStringType(itemData.attributes['layer'].typeHint)) {
                const layerAttributes = itemData.attributes['layer'];
                layer = __classPrivateFieldGet(this, _AttributeVisualizationEngine_layers, "f")[layerAttributes.value];
            }
            // early out, layer is not enabled
            if (layer.enabled === false) {
                const mat = this.createMaterialCopy(__classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f"));
                mat.opacity = 0;
                return {
                    matrix: gl_matrix_1.mat4.create(),
                    material: mat
                };
            }
            if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_attributes, "f").length === 0) {
                // no attributes are specified, we go into layer visualization mode
                let material;
                if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_layerMaterialType, "f") === 'unlit') {
                    material = new viewer_shared_types_1.MaterialUnlitData({
                        opacity: layer.opacity,
                        color: layer.color
                    });
                }
                else {
                    material = new viewer_shared_types_1.MaterialStandardData({
                        opacity: layer.opacity,
                        color: layer.color
                    });
                }
                return {
                    matrix: gl_matrix_1.mat4.create(),
                    material
                };
            }
            else {
                // attributes are specified, we go into attribute visualization mode
                const material = __classPrivateFieldGet(this, _AttributeVisualizationEngine_visualizedMaterialType, "f") === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData() : new viewer_shared_types_1.MaterialStandardData();
                for (let i = 0; i < __classPrivateFieldGet(this, _AttributeVisualizationEngine_attributes, "f").length; i++) {
                    const a = __classPrivateFieldGet(this, _AttributeVisualizationEngine_attributes, "f")[i];
                    if (itemData.attributes[a.key] && itemData.attributes[a.key].typeHint === a.type) {
                        const itemDataAttribute = itemData.attributes[a.key];
                        const itemDataAttributeOverview = overview[a.key].filter(o => o.typeHint === a.type)[0];
                        switch (true) {
                            case viewer_shared_types_1.SdtfPrimitiveTypeGuard.isColorType(a.type):
                                // multiply each color values with 255 to convert them to the range [0, 255]
                                const convertedValue = itemDataAttribute.value.map((v) => v * 255);
                                material.color = convertedValue;
                                material.opacity *= layer.opacity;
                                return {
                                    matrix: gl_matrix_1.mat4.create(),
                                    material
                                };
                            case viewer_shared_types_1.SdtfPrimitiveTypeGuard.isNumberType(a.type):
                                const numberAttribute = a;
                                const numberVisualizationData = AttributeVisualizationUtils_1.AttributeVisualizationUtils.numberVisualization(itemDataAttribute.value, (numberAttribute.min !== undefined ? numberAttribute.min : itemDataAttributeOverview.min), (numberAttribute.max !== undefined ? numberAttribute.max : itemDataAttributeOverview.max), numberAttribute.visualization, __classPrivateFieldGet(this, _AttributeVisualizationEngine_visualizedMaterialType, "f"), __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f"));
                                numberVisualizationData.material.opacity *= layer.opacity;
                                return numberVisualizationData;
                            case viewer_shared_types_1.SdtfPrimitiveTypeGuard.isStringType(a.type):
                                const stringAttribute = a;
                                const stringVisualizationData = AttributeVisualizationUtils_1.AttributeVisualizationUtils.stringVisualization(itemDataAttribute.value, stringAttribute.values || itemDataAttributeOverview.values, stringAttribute.visualization, __classPrivateFieldGet(this, _AttributeVisualizationEngine_visualizedMaterialType, "f"), __classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f"));
                                stringVisualizationData.material.opacity *= layer.opacity;
                                return stringVisualizationData;
                            default:
                                const defaultAttribute = a;
                                material.color = defaultAttribute.color;
                                material.opacity *= layer.opacity;
                                return {
                                    matrix: gl_matrix_1.mat4.create(),
                                    material
                                };
                        }
                    }
                }
                // no attributes were found, return the default material adjusted by the layer opacity
                const mat = this.createMaterialCopy(__classPrivateFieldGet(this, _AttributeVisualizationEngine_defaultMaterial, "f"));
                mat.opacity *= layer.opacity;
                return {
                    matrix: gl_matrix_1.mat4.create(),
                    material: mat
                };
            }
        };
        __classPrivateFieldGet(this, _AttributeVisualizationEngine_nodesWithAttributeData, "f").forEach(n => __classPrivateFieldGet(this, _AttributeVisualizationEngine_viewport, "f").updateNode(n));
    }
    createMaterialCopy(material) {
        if (material instanceof viewer_shared_types_1.MaterialGemData) {
            const newMaterial = new viewer_shared_types_1.MaterialGemData();
            newMaterial.copy(material);
            return newMaterial;
        }
        else if (material instanceof viewer_shared_types_1.MaterialShadowData) {
            const newMaterial = new viewer_shared_types_1.MaterialShadowData();
            newMaterial.copy(material);
            return newMaterial;
        }
        else if (material instanceof viewer_shared_types_1.MaterialSpecularGlossinessData) {
            const newMaterial = new viewer_shared_types_1.MaterialSpecularGlossinessData();
            newMaterial.copy(material);
            return newMaterial;
        }
        else if (material instanceof viewer_shared_types_1.MaterialStandardData) {
            const newMaterial = new viewer_shared_types_1.MaterialStandardData();
            newMaterial.copy(material);
            return newMaterial;
        }
        else if (material instanceof viewer_shared_types_1.MaterialUnlitData) {
            const newMaterial = new viewer_shared_types_1.MaterialUnlitData();
            newMaterial.copy(material);
            return newMaterial;
        }
        else {
            return new viewer_shared_types_1.MaterialStandardData();
        }
    }
    createLayers() {
        __classPrivateFieldSet(this, _AttributeVisualizationEngine_layers, {}, "f");
        if (__classPrivateFieldGet(this, _AttributeVisualizationEngine_overview, "f")['layer']) {
            const layerStringAttributeOverview = __classPrivateFieldGet(this, _AttributeVisualizationEngine_overview, "f")['layer'].find(a => a.typeHint === 'string');
            if (layerStringAttributeOverview && layerStringAttributeOverview.values) {
                for (let i = 0; i < layerStringAttributeOverview.values.length; i++) {
                    __classPrivateFieldGet(this, _AttributeVisualizationEngine_layers, "f")[layerStringAttributeOverview.values[i]] = {
                        enabled: true,
                        opacity: 1,
                        color: this.defaultMaterial.color
                    };
                }
            }
        }
    }
}
exports.AttributeVisualizationEngine = AttributeVisualizationEngine;
_AttributeVisualizationEngine_uuidGenerator = new WeakMap(), _AttributeVisualizationEngine_viewport = new WeakMap(), _AttributeVisualizationEngine_attributes = new WeakMap(), _AttributeVisualizationEngine_defaultMaterial = new WeakMap(), _AttributeVisualizationEngine_defaultLayer = new WeakMap(), _AttributeVisualizationEngine_layers = new WeakMap(), _AttributeVisualizationEngine_overview = new WeakMap(), _AttributeVisualizationEngine_listeners = new WeakMap(), _AttributeVisualizationEngine_visualizedMaterialType = new WeakMap(), _AttributeVisualizationEngine_layerMaterialType = new WeakMap(), _AttributeVisualizationEngine_nodesWithAttributeData = new WeakMap();
//# sourceMappingURL=AttributeVisualizationEngine.js.map

/***/ }),

/***/ 69314:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttributeVisualizationUtils = void 0;
const viewer_shared_types_1 = __webpack_require__(64766);
const gl_matrix_1 = __webpack_require__(61961);
const IAttribute_1 = __webpack_require__(79352);
const grayscaleVisualization = (factor, materialType) => {
    const color = Math.floor(factor * 255.0);
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + color + ', ' + color + ', ' + color + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + color + ', ' + color + ', ' + color + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const opacityVisualization = (factor, materialType, defaultMaterial) => {
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: defaultMaterial.color, opacity: factor }) : new viewer_shared_types_1.MaterialStandardData({ color: defaultMaterial.color, opacity: factor }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const blueRedVisualization = (factor, materialType) => {
    const red = factor * 255.0;
    const blue = (1 - factor) * 255.0;
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(0) + ', ' + Math.floor(blue) + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(0) + ', ' + Math.floor(blue) + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const blueWhiteRedVisualization = (factor, materialType) => {
    let red = 255, green = 255, blue = 255;
    if (factor < 0.5) {
        const remappedFactor = factor / 0.5;
        red = 255.0 * remappedFactor;
        green = 255.0 * remappedFactor;
        blue = 255.0;
    }
    else {
        const remappedFactor = (factor - 0.5) / 0.5;
        red = 255.0;
        green = 255.0 * (1 - remappedFactor);
        blue = 255.0 * (1 - remappedFactor);
    }
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const greenRedVisualization = (factor, materialType) => {
    const red = factor * 255.0;
    const green = (1 - factor) * 255.0;
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(0) + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(0) + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const greenWhiteRedVisualization = (factor, materialType) => {
    let red = 255, green = 255, blue = 255;
    if (factor < 0.5) {
        const remappedFactor = factor / 0.5;
        red = 255.0 * remappedFactor;
        green = 255.0;
        blue = 255.0 * remappedFactor;
    }
    else {
        const remappedFactor = (factor - 0.5) / 0.5;
        red = 255.0;
        green = 255.0 * (1 - remappedFactor);
        blue = 255.0 * (1 - remappedFactor);
    }
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const blueGreenRedVisualization = (factor, materialType) => {
    let red = 255, green = 255, blue = 255;
    if (factor < 0.5) {
        const remappedFactor = factor / 0.5;
        red = 0;
        green = 255.0 * remappedFactor;
        blue = 255.0 * (1 - remappedFactor);
    }
    else {
        const remappedFactor = (factor - 0.5) / 0.5;
        red = 255.0 * remappedFactor;
        green = 255.0 * (1 - remappedFactor);
        blue = 0;
    }
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const blueGreenYellowRedPurpleWhiteVisualization = (factor, materialType) => {
    let red = 255, green = 255, blue = 255;
    if (factor < 0.2) {
        const remappedFactor = factor / 0.2;
        red = 0;
        green = 255.0 * remappedFactor;
        blue = 255.0 * (1 - remappedFactor);
    }
    else if (factor < 0.4) {
        const remappedFactor = (factor - 0.2) / 0.2;
        red = 255.0 * remappedFactor;
        green = 255.0;
        blue = 0.0;
    }
    else if (factor < 0.6) {
        const remappedFactor = (factor - 0.4) / 0.2;
        red = 255.0;
        green = 255.0 * (1 - remappedFactor);
        blue = 0.0;
    }
    else if (factor < 0.8) {
        const remappedFactor = (factor - 0.6) / 0.2;
        red = 255.0;
        green = 0.0;
        blue = 255.0 * remappedFactor;
    }
    else {
        const remappedFactor = (factor - 0.8) / 0.2;
        red = 255.0;
        green = 255.0 * remappedFactor;
        blue = 255.0;
    }
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'rgb(' + Math.floor(red) + ', ' + Math.floor(green) + ', ' + Math.floor(blue) + ')', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const hslVisualization = (factor, materialType) => {
    const hue = factor * 359.99;
    return {
        material: materialType === 'unlit' ? new viewer_shared_types_1.MaterialUnlitData({ color: 'hsl(' + Math.floor(hue) + ', 100%, 50%)', opacity: 1 }) : new viewer_shared_types_1.MaterialStandardData({ color: 'hsl(' + Math.floor(hue) + ', 100%, 50%)', opacity: 1 }),
        matrix: gl_matrix_1.mat4.create()
    };
};
const numberVisualization = (value, min, max, type, materialType, defaultMaterial) => {
    let factor = (value - min) / (max - min);
    factor = Math.min(1, Math.max(0, factor));
    switch (type) {
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.GRAYSCALE:
            return grayscaleVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.OPACITY:
            return opacityVisualization(factor, materialType, defaultMaterial);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_RED:
            return blueRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_WHITE_RED:
            return blueWhiteRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.GREEN_RED:
            return greenRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.GREEN_WHITE_RED:
            return greenWhiteRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_GREEN_RED:
            return blueGreenRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_GREEN_YELLOW_RED_PURPLE_WHITE:
            return blueGreenYellowRedPurpleWhiteVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.HSL:
            return hslVisualization(factor, materialType);
    }
};
const stringVisualization = (value, values, type, materialType, defaultMaterial) => {
    let factor = values.indexOf(value) / (values.length - 1);
    factor = Math.min(1, Math.max(0, factor));
    switch (type) {
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.GRAYSCALE:
            return grayscaleVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.OPACITY:
            return opacityVisualization(factor, materialType, defaultMaterial);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_RED:
            return blueRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_WHITE_RED:
            return blueWhiteRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.GREEN_RED:
            return greenRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.GREEN_WHITE_RED:
            return greenWhiteRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_GREEN_RED:
            return blueGreenRedVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.BLUE_GREEN_YELLOW_RED_PURPLE_WHITE:
            return blueGreenYellowRedPurpleWhiteVisualization(factor, materialType);
        case IAttribute_1.ATTRIBUTE_VISUALIZATION.HSL:
            return hslVisualization(factor, materialType);
    }
};
exports.AttributeVisualizationUtils = {
    numberVisualization,
    stringVisualization
};
//# sourceMappingURL=AttributeVisualizationUtils.js.map

/***/ }),

/***/ 5832:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ATTRIBUTE_VISUALIZATION = exports.AttributeVisualizationEngine = void 0;
const AttributeVisualizationEngine_1 = __webpack_require__(77241);
Object.defineProperty(exports, "AttributeVisualizationEngine", ({ enumerable: true, get: function () { return AttributeVisualizationEngine_1.AttributeVisualizationEngine; } }));
const IAttribute_1 = __webpack_require__(79352);
Object.defineProperty(exports, "ATTRIBUTE_VISUALIZATION", ({ enumerable: true, get: function () { return IAttribute_1.ATTRIBUTE_VISUALIZATION; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 79352:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ATTRIBUTE_VISUALIZATION = void 0;
var ATTRIBUTE_VISUALIZATION;
(function (ATTRIBUTE_VISUALIZATION) {
    ATTRIBUTE_VISUALIZATION["GRAYSCALE"] = "grayscale";
    ATTRIBUTE_VISUALIZATION["OPACITY"] = "opacity";
    ATTRIBUTE_VISUALIZATION["BLUE_RED"] = "blue_red";
    ATTRIBUTE_VISUALIZATION["BLUE_WHITE_RED"] = "blue_white_red";
    ATTRIBUTE_VISUALIZATION["GREEN_RED"] = "green_red";
    ATTRIBUTE_VISUALIZATION["GREEN_WHITE_RED"] = "green_white_red";
    ATTRIBUTE_VISUALIZATION["BLUE_GREEN_RED"] = "blue_green_red";
    ATTRIBUTE_VISUALIZATION["BLUE_GREEN_YELLOW_RED_PURPLE_WHITE"] = "blue_green_yellow_red_purple_white";
    ATTRIBUTE_VISUALIZATION["HSL"] = "hsl";
})(ATTRIBUTE_VISUALIZATION = exports.ATTRIBUTE_VISUALIZATION || (exports.ATTRIBUTE_VISUALIZATION = {}));
;
;
//# sourceMappingURL=IAttribute.js.map

/***/ })

}]);
//# sourceMappingURL=shapediver.chunk.js.map