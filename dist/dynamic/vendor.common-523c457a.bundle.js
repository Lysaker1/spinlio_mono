"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[277],{

/***/ 27068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Resolution = exports.PredicationMode = exports.EdgeDetectionMode = exports.SMAAPreset = exports.KernelSize = exports.VignetteTechnique = exports.BlendFunction = exports.VignetteEffect = exports.TiltShiftEffect = exports.SepiaEffect = exports.SelectiveBloomEffect = exports.ScanlineEffect = exports.SSAOEffect = exports.SMAAEffect = exports.PixelationEffect = exports.OutlineEffect = exports.NoiseEffect = exports.HueSaturationEffect = exports.GridEffect = exports.GodRaysEffect = exports.FXAAEffect = exports.DotScreenEffect = exports.DepthOfFieldEffect = exports.ChromaticAberrationEffect = exports.BloomEffect = exports.EffectComposer = exports.Effect = exports.POST_PROCESSING_EFFECT_TYPE = exports.ANTI_ALIASING_TECHNIQUE = exports.PostProcessingManager = exports.MultiPointsMaterial = exports.ENVIRONMENT_MAP_EMPTY = exports.ENVIRONMENT_MAP_CUBE = exports.ENVIRONMENT_MAP = exports.ThreejsData = exports.RenderingEngine = void 0;
const IPostProcessingEffectDefinitions_1 = __webpack_require__(63506);
Object.defineProperty(exports, "ANTI_ALIASING_TECHNIQUE", ({ enumerable: true, get: function () { return IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE; } }));
Object.defineProperty(exports, "POST_PROCESSING_EFFECT_TYPE", ({ enumerable: true, get: function () { return IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE; } }));
const postprocessing_1 = __webpack_require__(66739);
Object.defineProperty(exports, "BlendFunction", ({ enumerable: true, get: function () { return postprocessing_1.BlendFunction; } }));
Object.defineProperty(exports, "BloomEffect", ({ enumerable: true, get: function () { return postprocessing_1.BloomEffect; } }));
Object.defineProperty(exports, "ChromaticAberrationEffect", ({ enumerable: true, get: function () { return postprocessing_1.ChromaticAberrationEffect; } }));
Object.defineProperty(exports, "DepthOfFieldEffect", ({ enumerable: true, get: function () { return postprocessing_1.DepthOfFieldEffect; } }));
Object.defineProperty(exports, "DotScreenEffect", ({ enumerable: true, get: function () { return postprocessing_1.DotScreenEffect; } }));
Object.defineProperty(exports, "EdgeDetectionMode", ({ enumerable: true, get: function () { return postprocessing_1.EdgeDetectionMode; } }));
Object.defineProperty(exports, "Effect", ({ enumerable: true, get: function () { return postprocessing_1.Effect; } }));
Object.defineProperty(exports, "EffectComposer", ({ enumerable: true, get: function () { return postprocessing_1.EffectComposer; } }));
Object.defineProperty(exports, "FXAAEffect", ({ enumerable: true, get: function () { return postprocessing_1.FXAAEffect; } }));
Object.defineProperty(exports, "GodRaysEffect", ({ enumerable: true, get: function () { return postprocessing_1.GodRaysEffect; } }));
Object.defineProperty(exports, "GridEffect", ({ enumerable: true, get: function () { return postprocessing_1.GridEffect; } }));
Object.defineProperty(exports, "HueSaturationEffect", ({ enumerable: true, get: function () { return postprocessing_1.HueSaturationEffect; } }));
Object.defineProperty(exports, "KernelSize", ({ enumerable: true, get: function () { return postprocessing_1.KernelSize; } }));
Object.defineProperty(exports, "NoiseEffect", ({ enumerable: true, get: function () { return postprocessing_1.NoiseEffect; } }));
Object.defineProperty(exports, "OutlineEffect", ({ enumerable: true, get: function () { return postprocessing_1.OutlineEffect; } }));
Object.defineProperty(exports, "PixelationEffect", ({ enumerable: true, get: function () { return postprocessing_1.PixelationEffect; } }));
Object.defineProperty(exports, "PredicationMode", ({ enumerable: true, get: function () { return postprocessing_1.PredicationMode; } }));
Object.defineProperty(exports, "Resolution", ({ enumerable: true, get: function () { return postprocessing_1.Resolution; } }));
Object.defineProperty(exports, "ScanlineEffect", ({ enumerable: true, get: function () { return postprocessing_1.ScanlineEffect; } }));
Object.defineProperty(exports, "SelectiveBloomEffect", ({ enumerable: true, get: function () { return postprocessing_1.SelectiveBloomEffect; } }));
Object.defineProperty(exports, "SepiaEffect", ({ enumerable: true, get: function () { return postprocessing_1.SepiaEffect; } }));
Object.defineProperty(exports, "SMAAEffect", ({ enumerable: true, get: function () { return postprocessing_1.SMAAEffect; } }));
Object.defineProperty(exports, "SMAAPreset", ({ enumerable: true, get: function () { return postprocessing_1.SMAAPreset; } }));
Object.defineProperty(exports, "SSAOEffect", ({ enumerable: true, get: function () { return postprocessing_1.SSAOEffect; } }));
Object.defineProperty(exports, "TiltShiftEffect", ({ enumerable: true, get: function () { return postprocessing_1.TiltShiftEffect; } }));
Object.defineProperty(exports, "VignetteEffect", ({ enumerable: true, get: function () { return postprocessing_1.VignetteEffect; } }));
Object.defineProperty(exports, "VignetteTechnique", ({ enumerable: true, get: function () { return postprocessing_1.VignetteTechnique; } }));
const EnvironmentMapLoader_1 = __webpack_require__(83445);
Object.defineProperty(exports, "ENVIRONMENT_MAP", ({ enumerable: true, get: function () { return EnvironmentMapLoader_1.ENVIRONMENT_MAP; } }));
Object.defineProperty(exports, "ENVIRONMENT_MAP_CUBE", ({ enumerable: true, get: function () { return EnvironmentMapLoader_1.ENVIRONMENT_MAP_CUBE; } }));
Object.defineProperty(exports, "ENVIRONMENT_MAP_EMPTY", ({ enumerable: true, get: function () { return EnvironmentMapLoader_1.ENVIRONMENT_MAP_EMPTY; } }));
const viewer_shared_global_access_objects_1 = __webpack_require__(50069);
const MultiPointsMaterial_1 = __webpack_require__(3382);
Object.defineProperty(exports, "MultiPointsMaterial", ({ enumerable: true, get: function () { return MultiPointsMaterial_1.MultiPointsMaterial; } }));
const PostProcessingManager_1 = __webpack_require__(30265);
Object.defineProperty(exports, "PostProcessingManager", ({ enumerable: true, get: function () { return PostProcessingManager_1.PostProcessingManager; } }));
const RenderingEngine_1 = __webpack_require__(16458);
Object.defineProperty(exports, "RenderingEngine", ({ enumerable: true, get: function () { return RenderingEngine_1.RenderingEngine; } }));
const Tag3dGeometryCreationInjector_1 = __webpack_require__(90836);
const TextureUnifierInjector_1 = __webpack_require__(59669);
const ThreejsData_1 = __webpack_require__(54609);
Object.defineProperty(exports, "ThreejsData", ({ enumerable: true, get: function () { return ThreejsData_1.ThreejsData; } }));
const tag3dGeometryCreationInjector = new Tag3dGeometryCreationInjector_1.Tag3dGeometryCreationInjector();
viewer_shared_global_access_objects_1.GlobalAccessObjects.instance.loadTag3D = tag3dGeometryCreationInjector.convertTag3dToGeometry.bind(tag3dGeometryCreationInjector);
const textureUnifierInjector = new TextureUnifierInjector_1.TextureUnifierInjector();
viewer_shared_global_access_objects_1.GlobalAccessObjects.instance.combineTextures = textureUnifierInjector.combineTextures.bind(textureUnifierInjector);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 90836:
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
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Tag3dGeometryCreationInjector_stateEngine;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Tag3dGeometryCreationInjector = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_shared_types_1 = __webpack_require__(64766);
const FontLoader_1 = __webpack_require__(97328);
const font_1 = __webpack_require__(10566);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_services_1 = __webpack_require__(8389);
const TextGeometry_1 = __webpack_require__(6009);
class Tag3dGeometryCreationInjector {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor() {
        // #region Properties (2)
        _Tag3dGeometryCreationInjector_stateEngine.set(this, viewer_shared_services_1.StateEngine.instance);
        this._font = new FontLoader_1.Font(font_1.font);
        __classPrivateFieldGet(this, _Tag3dGeometryCreationInjector_stateEngine, "f").fontLoaded.resolve(true);
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    convertTag3dToGeometry(tag3dInfo) {
        const node = new viewer_shared_node_tree_1.TreeNode('tag3d_' + tag3dInfo.version);
        tag3dInfo.size = tag3dInfo.size ? +tag3dInfo.size : 1;
        if (tag3dInfo.text === undefined || tag3dInfo.text === '' || /^[ \t\n\r]*$/.test(tag3dInfo.text))
            return;
        const tagLines = tag3dInfo.text.split(/\r\n|\r|\n/g);
        const lineArray = [];
        for (let lineIndex = 0; lineIndex < tagLines.length; ++lineIndex) {
            if (tagLines[lineIndex] === '')
                continue;
            // create tag mesh object
            const tag = new TextGeometry_1.TextGeometry(tagLines[lineIndex], { size: tag3dInfo.size, height: tag3dInfo.size / 10, font: this._font });
            lineArray.push(tag);
        }
        // create temporary object
        const parentObject = new THREE.Object3D();
        for (const line of lineArray) {
            parentObject.add(new THREE.Mesh(line, new THREE.MeshPhongMaterial()));
        }
        // align lines
        let bb, tempExtentsY, lineHeight = 0;
        {
            lineHeight = 0;
            for (const child of parentObject.children) {
                bb = new THREE.Box3().setFromObject(child);
                tempExtentsY = bb.max.y - bb.min.y;
                lineHeight = Math.max(lineHeight, tempExtentsY);
            }
        }
        lineHeight *= 1.15;
        lineArray.forEach((line, i) => {
            line.translate(0, (-i - 1) * lineHeight, 0);
        });
        // justification
        bb = new THREE.Box3().setFromObject(parentObject);
        const extentsX = bb.max.x - bb.min.x;
        const extentsY = bb.max.y - bb.min.y;
        const tagJustTranslation = new THREE.Vector3(0, 0, 0);
        switch (tag3dInfo.justification) {
            case 'TL':
                break;
            case 'TC':
                tagJustTranslation.x = -extentsX * 0.5;
                break;
            case 'TR':
                tagJustTranslation.x = -extentsX;
                break;
            case 'ML':
                tagJustTranslation.y = extentsY * 0.5;
                break;
            case 'MC':
                tagJustTranslation.x = -extentsX * 0.5;
                tagJustTranslation.y = extentsY * 0.5;
                break;
            case 'MR':
                tagJustTranslation.x = -extentsX;
                tagJustTranslation.y = extentsY * 0.5;
                break;
            case 'BL':
                tagJustTranslation.y = extentsY;
                break;
            case 'BC':
                tagJustTranslation.x = -extentsX * 0.5;
                tagJustTranslation.y = extentsY;
                break;
            case 'BR':
                tagJustTranslation.x = -extentsX;
                tagJustTranslation.y = extentsY;
                break;
        }
        for (const line of lineArray) {
            line.translate(tagJustTranslation.x, tagJustTranslation.y, tagJustTranslation.z);
        }
        // rotation
        if (tag3dInfo.location.xAxis !== undefined) {
            const rotMatrix = new THREE.Matrix4();
            rotMatrix.set(tag3dInfo.location.xAxis.X, tag3dInfo.location.yAxis.X, tag3dInfo.location.normal.X, 0, tag3dInfo.location.xAxis.Y, tag3dInfo.location.yAxis.Y, tag3dInfo.location.normal.Y, 0, tag3dInfo.location.xAxis.Z, tag3dInfo.location.yAxis.Z, tag3dInfo.location.normal.Z, 0, 0, 0, 0, 1);
            for (const line of lineArray) {
                line.applyMatrix4(rotMatrix);
                line.translate(tag3dInfo.location.origin.X, tag3dInfo.location.origin.Y, tag3dInfo.location.origin.Z);
            }
        }
        for (const line of lineArray) {
            const attributes = {};
            for (const attribute in line.attributes) {
                let attributeName = attribute.toUpperCase();
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
                attributes[attributeName] = new viewer_shared_types_1.AttributeData(line.attributes[attribute].array, line.attributes[attribute].itemSize, 0, 0, 0, false, line.attributes[attribute].array.length / line.attributes[attribute].itemSize);
            }
            const child = new viewer_shared_node_tree_1.TreeNode('tag3d_' + line);
            child.data.push(new viewer_shared_types_1.GeometryData(new viewer_shared_types_1.PrimitiveData(attributes, null), viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLES, new viewer_shared_types_1.MaterialStandardData({ color: tag3dInfo.color, metalness: 0, roughness: 1 })));
            node.children.push(child);
        }
        return node;
    }
}
exports.Tag3dGeometryCreationInjector = Tag3dGeometryCreationInjector;
_Tag3dGeometryCreationInjector_stateEngine = new WeakMap();
//# sourceMappingURL=Tag3dGeometryCreationInjector.js.map

/***/ }),

/***/ 59669:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextureUnifierInjector = void 0;
const THREE = __importStar(__webpack_require__(39437));
class TextureUnifierInjector {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor() { }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    combineTextures(red, green, blue) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!red && !green && !blue)
                throw new Error('No maps supplied.');
            if (red && red instanceof ArrayBuffer)
                return { image: red, blob: new Blob([new Uint8Array(red)], { type: 'image/jpeg' }) };
            if (green && green instanceof ArrayBuffer)
                return { image: green, blob: new Blob([new Uint8Array(green)], { type: 'image/jpeg' }) };
            if (blue && blue instanceof ArrayBuffer)
                return { image: blue, blob: new Blob([new Uint8Array(blue)], { type: 'image/jpeg' }) };
            if (!this._renderer)
                this.createThreeJsUtils();
            let width = 0, height = 0;
            const textures = [red, green, blue];
            for (const t of textures) {
                if (t) {
                    if (width === 0 && height === 0) {
                        width = t.width;
                        height = t.height;
                    }
                    else if (t.width !== width && t.height !== height) {
                        throw new Error('Maps have different sizes. Combining not supported.');
                    }
                }
            }
            if (red) {
                const redTexture = new THREE.Texture(red);
                redTexture.needsUpdate = true;
                this._mergeShader.uniforms.tRed.value = redTexture;
                this._mergeShader.uniforms.activeRed.value = true;
            }
            else {
                this._mergeShader.uniforms.activeRed.value = false;
            }
            if (green) {
                const greenTexture = new THREE.Texture(green);
                greenTexture.needsUpdate = true;
                this._mergeShader.uniforms.tGreen.value = greenTexture;
                this._mergeShader.uniforms.activeGreen.value = true;
            }
            else {
                this._mergeShader.uniforms.activeGreen.value = false;
            }
            if (blue) {
                const blueTexture = new THREE.Texture(blue);
                blueTexture.needsUpdate = true;
                this._mergeShader.uniforms.tBlue.value = blueTexture;
                this._mergeShader.uniforms.activeBlue.value = true;
            }
            else {
                this._mergeShader.uniforms.activeBlue.value = false;
            }
            // The different render targets that are used by the passes
            const renderTarget = new THREE.WebGLRenderTarget(width, height, {
                minFilter: THREE.LinearFilter,
                magFilter: THREE.LinearFilter,
                format: THREE.RGBAFormat
            });
            renderTarget.texture.name = 'target.rt';
            this._renderer.setRenderTarget(renderTarget);
            this._renderer.render(this._quadScene, this._quadCamera);
            const buffer = new Uint8ClampedArray(4 * width * height);
            this._renderer.readRenderTargetPixels(renderTarget, 0, 0, width, height, buffer);
            const imageData = new ImageData(buffer, width, height);
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = imageData.width;
            canvas.height = imageData.height;
            ctx.putImageData(imageData, 0, 0);
            const imageOut = new Image();
            const promises = [];
            promises.push(new Promise((resolve, reject) => {
                imageOut.onload = () => resolve();
                imageOut.onerror = reject;
            }));
            imageOut.crossOrigin = 'anonymous';
            const mimeType = 'image/jpeg';
            imageOut.src = canvas.toDataURL(mimeType, 1.0);
            let blob;
            promises.push(new Promise((resolve, reject) => {
                canvas.toBlob((b) => {
                    if (!b) {
                        reject('Could not create blob.');
                    }
                    else {
                        blob = b;
                    }
                    resolve();
                }, mimeType, 1.0);
            }));
            yield Promise.all(promises);
            return { image: imageOut, blob };
        });
    }
    // #endregion Public Methods (1)
    // #region Private Methods (1)
    createThreeJsUtils() {
        this._mergeShader = new THREE.ShaderMaterial({
            uniforms: {
                tRed: { value: null },
                activeRed: { value: false },
                defaultRed: { value: 1.0 },
                tGreen: { value: null },
                activeGreen: { value: false },
                defaultGreen: { value: 1.0 },
                tBlue: { value: null },
                activeBlue: { value: false },
                defaultBlue: { value: 1.0 },
            },
            vertexShader: `// @author Michael Oppitz 
        
            uniform sampler2D tRed;
            uniform bool activeRed;
            uniform float defaultRed;
            
            uniform sampler2D tGreen;		
            uniform bool activeGreen;
            uniform float defaultGreen;
            
            uniform sampler2D tBlue;		
            uniform bool activeBlue;
            uniform float defaultBlue;
        
            varying vec2 vUv;
            
            void main() {
                vUv = uv;
                gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
            }`,
            fragmentShader: `// @author Michael Oppitz 
        
            uniform sampler2D tRed;
            uniform bool activeRed;
            uniform float defaultRed;
            
            uniform sampler2D tGreen;		
            uniform bool activeGreen;
            uniform float defaultGreen;
            
            uniform sampler2D tBlue;		
            uniform bool activeBlue;
            uniform float defaultBlue;
            
            varying vec2 vUv;
            
            void main() {
                vec4 outColor = vec4(0.0, 0.0, 0.0, 1.0);
        
                if(activeRed == true) {
                    outColor.r = texture2D(tRed, vUv).r;
                } else {
                    outColor.r = defaultRed;
                }
            
                if(activeGreen == true) {
                    outColor.g = texture2D(tGreen, vUv).g;
                } else {
                    outColor.g = defaultGreen;
                }
            
                if(activeBlue == true) {
                    outColor.b = texture2D(tBlue, vUv).b;
                } else {
                    outColor.b = defaultBlue;
                }
            
                gl_FragColor = outColor;
            }`
        });
        this._quadCamera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        this._quadScene = new THREE.Scene();
        this._quad = new THREE.Mesh(new THREE.PlaneGeometry(2, 2), this._mergeShader);
        this._quadScene.add(this._quad);
        this._renderer = new THREE.WebGLRenderer();
    }
}
exports.TextureUnifierInjector = TextureUnifierInjector;
//# sourceMappingURL=TextureUnifierInjector.js.map

/***/ }),

/***/ 63506:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ANTI_ALIASING_TECHNIQUE = exports.POST_PROCESSING_EFFECT_TYPE = void 0;
var POST_PROCESSING_EFFECT_TYPE;
(function (POST_PROCESSING_EFFECT_TYPE) {
    POST_PROCESSING_EFFECT_TYPE["BLOOM"] = "bloom";
    POST_PROCESSING_EFFECT_TYPE["CHROMATIC_ABERRATION"] = "chromatic_aberration";
    POST_PROCESSING_EFFECT_TYPE["DEPTH_OF_FIELD"] = "depth_of_field";
    POST_PROCESSING_EFFECT_TYPE["DOT_SCREEN"] = "dot_screen";
    POST_PROCESSING_EFFECT_TYPE["GOD_RAYS"] = "god_rays";
    POST_PROCESSING_EFFECT_TYPE["GRID"] = "grid";
    POST_PROCESSING_EFFECT_TYPE["HBAO"] = "hbao";
    POST_PROCESSING_EFFECT_TYPE["HUE_SATURATION"] = "hue_saturation";
    POST_PROCESSING_EFFECT_TYPE["NOISE"] = "noise";
    POST_PROCESSING_EFFECT_TYPE["OUTLINE"] = "outline";
    POST_PROCESSING_EFFECT_TYPE["PIXELATION"] = "pixelation";
    POST_PROCESSING_EFFECT_TYPE["SSAO"] = "ssao";
    POST_PROCESSING_EFFECT_TYPE["SCANLINE"] = "scanline";
    POST_PROCESSING_EFFECT_TYPE["SELECTIVE_BLOOM"] = "selective_bloom";
    POST_PROCESSING_EFFECT_TYPE["SEPIA"] = "sepia";
    POST_PROCESSING_EFFECT_TYPE["TILT_SHIFT"] = "tilt_shift";
    POST_PROCESSING_EFFECT_TYPE["VIGNETTE"] = "vignette";
})(POST_PROCESSING_EFFECT_TYPE = exports.POST_PROCESSING_EFFECT_TYPE || (exports.POST_PROCESSING_EFFECT_TYPE = {}));
var ANTI_ALIASING_TECHNIQUE;
(function (ANTI_ALIASING_TECHNIQUE) {
    ANTI_ALIASING_TECHNIQUE["FXAA"] = "fxaa";
    ANTI_ALIASING_TECHNIQUE["NONE"] = "none";
    ANTI_ALIASING_TECHNIQUE["SMAA"] = "smaa";
    ANTI_ALIASING_TECHNIQUE["SSAA"] = "ssaa";
})(ANTI_ALIASING_TECHNIQUE = exports.ANTI_ALIASING_TECHNIQUE || (exports.ANTI_ALIASING_TECHNIQUE = {}));
//# sourceMappingURL=IPostProcessingEffectDefinitions.js.map

/***/ }),

/***/ 83445:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EnvironmentMapLoader = exports.ENVIRONMENT_MAP_TYPE = exports.ENVIRONMENT_MAP_EMPTY = exports.ENVIRONMENT_MAP = exports.ENVIRONMENT_MAP_CUBE = void 0;
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable no-async-promise-executor */
const THREE = __importStar(__webpack_require__(39437));
const viewer_shared_services_1 = __webpack_require__(8389);
const RGBELoader_1 = __webpack_require__(10183);
const viewer_shared_types_1 = __webpack_require__(64766);
var ENVIRONMENT_MAP_CUBE;
(function (ENVIRONMENT_MAP_CUBE) {
    ENVIRONMENT_MAP_CUBE["DEFAULT"] = "default";
    ENVIRONMENT_MAP_CUBE["DEFAULT_BW"] = "default_bw";
    ENVIRONMENT_MAP_CUBE["BLURRED_LIGHTS"] = "blurred_lights";
    ENVIRONMENT_MAP_CUBE["GEORGENTOR"] = "georgentor";
    ENVIRONMENT_MAP_CUBE["GEORGENTOR_BLUR"] = "georgentor_blur";
    ENVIRONMENT_MAP_CUBE["GEORGENTOR_BLUE_BLUR"] = "georgentor_blue_blur";
    ENVIRONMENT_MAP_CUBE["GEORGENTOR_BW_BLUR"] = "georgentor_bw_blur";
    ENVIRONMENT_MAP_CUBE["LEVELSETS"] = "levelsets";
    ENVIRONMENT_MAP_CUBE["LYTHWOOD_FIELD"] = "lythwood_field";
    ENVIRONMENT_MAP_CUBE["MOUNTAINS"] = "mountains";
    ENVIRONMENT_MAP_CUBE["OCEAN"] = "ocean";
    ENVIRONMENT_MAP_CUBE["PIAZZA_SAN_MARCO"] = "piazza_san_marco";
    ENVIRONMENT_MAP_CUBE["RESIDENTIAL_GARDEN"] = "residential_garden";
    ENVIRONMENT_MAP_CUBE["ROOM_ABSTRACT_1"] = "room_abstract_1";
    ENVIRONMENT_MAP_CUBE["SKY"] = "sky";
    ENVIRONMENT_MAP_CUBE["STORAGE_ROOM"] = "storage_room";
    ENVIRONMENT_MAP_CUBE["STORM"] = "storm";
    ENVIRONMENT_MAP_CUBE["SUBWAY_ENTRANCE"] = "subway_entrance";
    ENVIRONMENT_MAP_CUBE["SUBWAY_ENTRANCE_BW_BLUR"] = "subway_entrance_bw_blur";
    ENVIRONMENT_MAP_CUBE["WHITE"] = "white";
    ENVIRONMENT_MAP_CUBE["YOKOHAMA"] = "yokohama";
})(ENVIRONMENT_MAP_CUBE = exports.ENVIRONMENT_MAP_CUBE || (exports.ENVIRONMENT_MAP_CUBE = {}));
var ENVIRONMENT_MAP;
(function (ENVIRONMENT_MAP) {
    ENVIRONMENT_MAP["ANNIVERSARY_LOUNGE"] = "anniversary_lounge";
    ENVIRONMENT_MAP["BALLROOM"] = "ballroom";
    ENVIRONMENT_MAP["CANNON_EXTERIOR"] = "cannon_exterior";
    ENVIRONMENT_MAP["CAPE_HILL"] = "cape_hill";
    ENVIRONMENT_MAP["CHRISTMAS_PHOTO_STUDIO"] = "christmas_photo_studio";
    ENVIRONMENT_MAP["CIRCUS_MAXIMUS"] = "circus_maximus";
    ENVIRONMENT_MAP["COLORFUL_STUDIO"] = "colorful_studio";
    ENVIRONMENT_MAP["COMBINATION_ROOM"] = "combination_room";
    ENVIRONMENT_MAP["GREEN_POINT_PARK"] = "green_point_park";
    ENVIRONMENT_MAP["HILLTOP_CONSTRUCTION"] = "hilltop_construction";
    ENVIRONMENT_MAP["LARGE_CORRIDOR"] = "large_corridor";
    ENVIRONMENT_MAP["LYTHWOOD_LOUNGE"] = "lythwood_lounge";
    ENVIRONMENT_MAP["NEUTRAL"] = "neutral";
    ENVIRONMENT_MAP["OBERER_KUHBERG"] = "oberer_kuhberg";
    ENVIRONMENT_MAP["OLD_HALL"] = "old_hall";
    ENVIRONMENT_MAP["PAUL_LOBE_HAUS"] = "paul_lobe_haus";
    ENVIRONMENT_MAP["PHOTO_STUDIO"] = "photo_studio";
    ENVIRONMENT_MAP["PHOTO_STUDIO_BROADWAY_HALL"] = "photo_studio_broadway_hall";
    ENVIRONMENT_MAP["SNOWY_FIELD"] = "snowy_field";
    ENVIRONMENT_MAP["STUDIO_SMALL"] = "studio_small";
    ENVIRONMENT_MAP["SUNFLOWERS"] = "sunflowers";
    ENVIRONMENT_MAP["TABLE_MOUNTAIN"] = "table_mountain";
    ENVIRONMENT_MAP["VENICE_SUNSET"] = "venice_sunset";
    ENVIRONMENT_MAP["WIDE_STREET"] = "wide_street";
})(ENVIRONMENT_MAP = exports.ENVIRONMENT_MAP || (exports.ENVIRONMENT_MAP = {}));
var ENVIRONMENT_MAP_EMPTY;
(function (ENVIRONMENT_MAP_EMPTY) {
    ENVIRONMENT_MAP_EMPTY["NONE"] = "none";
    ENVIRONMENT_MAP_EMPTY["NULL"] = "null";
})(ENVIRONMENT_MAP_EMPTY = exports.ENVIRONMENT_MAP_EMPTY || (exports.ENVIRONMENT_MAP_EMPTY = {}));
var ENVIRONMENT_MAP_TYPE;
(function (ENVIRONMENT_MAP_TYPE) {
    ENVIRONMENT_MAP_TYPE["LDR"] = "ldr";
    ENVIRONMENT_MAP_TYPE["HDR"] = "hdr";
    ENVIRONMENT_MAP_TYPE["NONE"] = "none";
    ENVIRONMENT_MAP_TYPE["NULL"] = "null";
})(ENVIRONMENT_MAP_TYPE = exports.ENVIRONMENT_MAP_TYPE || (exports.ENVIRONMENT_MAP_TYPE = {}));
class EnvironmentMapLoader {
    // #endregion Properties (15)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (15)
        this._environmentMapFilenames = ['px', 'nx', 'pz', 'nz', 'py', 'ny'];
        this._environmentMapHDR = [];
        this._environmentMapNamesHDR = Object.values(ENVIRONMENT_MAP).filter(value => typeof value === 'string');
        this._environmentMapNamesHDRKhronos = ['cannon_exterior', 'colorful_studio', 'neutral', 'wide_street'];
        this._environmentMapNamesJPG = ['default', 'default_bw', 'blurred_lights', 'georgentor', 'georgentor_blur', 'georgentor_blue_blur', 'georgentor_bw_blur', 'levelsets', 'lythwood_field', 'mountains', 'ocean', 'piazza_san_marco', 'residential_garden', 'room_abstract_1', 'sky', 'storage_room', 'storm', 'subway_entrance', 'subway_entrance_bw_blur', 'white', 'yokohama'];
        this._environmentMaps = {};
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._httpClient = viewer_shared_services_1.HttpClient.instance;
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._envMap = null;
        this._isHDRMap = false;
        this._textureEncoding = THREE.SRGBColorSpace;
        this._type = ENVIRONMENT_MAP_TYPE.NULL;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (4)
    get environmentMap() {
        return this._envMap;
    }
    get isHDRMap() {
        return this._isHDRMap;
    }
    get textureEncoding() {
        return this._textureEncoding;
    }
    set textureEncoding(value) {
        this._textureEncoding = value;
        this.assignTextureEncoding();
    }
    // #endregion Public Accessors (4)
    // #region Public Methods (4)
    getEnvironmentMapImageUrl(name) {
        if (Array.isArray(name))
            return '';
        if (this._environmentMapNamesHDR.indexOf(name) >= 0) {
            let url_hdr = 'https://viewer.shapediver.com/v3/envmaps/1k/' + name + '_1k.hdr';
            if (this._environmentMapNamesHDRKhronos.indexOf(name) >= 0)
                url_hdr = 'https://viewer.shapediver.com/v3/envmaps/khronos/' + name + '.hdr';
            return url_hdr;
        }
        else if (name.startsWith('https://') || name.startsWith('http://')) {
            if (name.endsWith('.hdr') || name.endsWith('.jpg') || name.endsWith('.png')) {
                return name;
            }
        }
        return '';
    }
    init() {
        this._environmentMaps['null'] = {
            name: 'null',
            map: Promise.resolve(null),
            type: ENVIRONMENT_MAP_TYPE.NULL
        };
        this._environmentMaps['none'] = {
            name: 'none',
            map: Promise.resolve(null),
            type: ENVIRONMENT_MAP_TYPE.NONE
        };
        this._pmremGenerator = new THREE.PMREMGenerator(this._renderingEngine.renderer);
        this._pmremGenerator.compileEquirectangularShader();
    }
    load(name) {
        return __awaiter(this, void 0, void 0, function* () {
            const eventId = this._uuidGenerator.create();
            const res = this.loadEnvMap(name, eventId);
            yield this.assignEnvironmentMap(res.name, res.type, eventId);
            return Promise.resolve(true);
        });
    }
    loadEnvMap(name, eId) {
        const eventId = eId || this._uuidGenerator.create();
        const event = { type: viewer_shared_types_1.TASK_TYPE.ENVIRONMENT_MAP_LOADING, id: eventId, data: { input: name }, progress: 0, status: 'Loading EnvironmentMap' };
        this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_START, event);
        if (name === 'none' || name === 'null')
            return this._environmentMaps[name];
        let name_internal, name_caching, url;
        // check if name is a JSON.stringified version of an array of urls
        if (!Array.isArray(name) && (name.startsWith('["https') && name.endsWith('"]')))
            try {
                name = JSON.parse(name);
            }
            catch (e) {
                this.notify(eventId, true);
                throw new viewer_shared_services_1.ShapeDiverViewerEnvironmentMapError('EnvironmentMapLoader.load: Was not able to load environment map.', name);
            }
        // deal with string or array, define names for loading and caching
        if (!Array.isArray(name)) {
            name_internal = name.toLowerCase().replace(/ /g, '_');
            name_caching = name_internal + this._renderingEngine.environmentMapResolution;
        }
        else {
            if (name.length !== 6) {
                this.notify(eventId, true);
                throw new viewer_shared_services_1.ShapeDiverViewerEnvironmentMapError('EnvironmentMapLoader.load: Was not able to load environment map, exactly 6 files are needed in the array.', name);
            }
            name_internal = JSON.stringify(name, null, 0);
            name_caching = name_internal;
        }
        // check if environment map is already cached
        for (const environmentMap in this._environmentMaps)
            if (environmentMap === name_caching)
                return this._environmentMaps[environmentMap];
        try {
            // define urls for 6 cube images ourselves
            if (!Array.isArray(name)) {
                url = [];
                let i;
                if (this._environmentMapNamesHDR.indexOf(name_internal) >= 0) {
                    let url_hdr = 'https://viewer.shapediver.com/v3/envmaps/1k/' + name_internal + '_1k.hdr';
                    if (this._environmentMapNamesHDRKhronos.indexOf(name_internal) >= 0)
                        url_hdr = 'https://viewer.shapediver.com/v3/envmaps/khronos/' + name_internal + '.hdr';
                    this._environmentMapHDR.push(url_hdr);
                    return this.loadEnvironmentMap(name_caching, url_hdr, eventId);
                }
                else if (this._environmentMapNamesJPG.indexOf(name_internal) >= 0) {
                    // found in list of available environment maps with file type jpg
                    for (i = 0; i < this._environmentMapFilenames.length; i++)
                        url.push('https://viewer.shapediver.com/v2/envmaps/' + this._renderingEngine.environmentMapResolution + '/' + name_internal + '/' + this._environmentMapFilenames[i] + '.jpg');
                }
                else if (name.startsWith('https://') || name.startsWith('http://')) {
                    if (name.endsWith('.hdr')) {
                        this._environmentMapHDR.push(name);
                        return this.loadEnvironmentMap(name_caching, name, eventId);
                    }
                    else {
                        if (!name.endsWith('/'))
                            name += '/';
                        for (i = 0; i < this._environmentMapFilenames.length; i++)
                            url.push(name + this._environmentMapFilenames[i] + '.jpg');
                    }
                }
                else {
                    this.notify(eventId, true);
                    throw new viewer_shared_services_1.ShapeDiverViewerEnvironmentMapError('EnvironmentMapLoader.load: Was not able to load environment map, format not supported.', name);
                }
            }
            else {
                url = name;
            }
            return this.loadEnvironmentMap(name_caching, url, eventId);
        }
        catch (e) {
            this.notify(eventId, true);
            throw e;
        }
    }
    // #endregion Public Methods (4)
    // #region Private Methods (4)
    assignEnvironmentMap(name, type, eventId) {
        return __awaiter(this, void 0, void 0, function* () {
            if (name in this._environmentMaps === false)
                return;
            this._type = type;
            const map = yield this._environmentMaps[name].map;
            this._renderingEngine.materialLoader.assignEnvironmentMap(map, type);
            this._envMap = map;
            this.notify(eventId);
        });
    }
    assignTextureEncoding() {
        for (const e in this._environmentMaps) {
            if (this._environmentMaps[e]) {
                if (this._environmentMaps[e].resolved === true) {
                    this._environmentMaps[e].map.then(m => {
                        if (m instanceof THREE.Texture) {
                            m.dispose();
                            m.colorSpace = this._textureEncoding;
                            m.needsUpdate = true;
                        }
                    });
                }
            }
        }
    }
    loadEnvironmentMap(name, url, eventId) {
        this._environmentMaps[name] = {
            name,
            type: !Array.isArray(url) ? ENVIRONMENT_MAP_TYPE.HDR : ENVIRONMENT_MAP_TYPE.LDR,
            map: new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                try {
                    if (!Array.isArray(url)) {
                        const response = yield this._httpClient.get(url, undefined, true);
                        const arrayBufferView = new Uint8Array(response.data);
                        const blob = new Blob([arrayBufferView], { type: response.headers['content-type'] });
                        const blobUrl = URL.createObjectURL(blob);
                        new RGBELoader_1.RGBELoader().load(blobUrl, (texture) => {
                            const map = this._pmremGenerator.fromEquirectangular(texture).texture;
                            this._pmremGenerator.dispose();
                            map;
                            URL.revokeObjectURL(blobUrl);
                            this._environmentMaps[name].resolved = true;
                            resolve(map);
                        }, () => { }, (error) => reject(error));
                    }
                    else {
                        const promises = [];
                        url.forEach(u => promises.push(this._httpClient.get(u, undefined, true)));
                        const responses = yield Promise.all(promises);
                        const urls = responses.map(response => {
                            const arrayBufferView = new Uint8Array(response.data);
                            const blob = new Blob([arrayBufferView], { type: response.headers['content-type'] });
                            return URL.createObjectURL(blob);
                        });
                        new THREE.CubeTextureLoader().load(urls, (map) => {
                            map.colorSpace = THREE.SRGBColorSpace;
                            map.format = THREE.RGBAFormat;
                            map.mapping = THREE.CubeReflectionMapping;
                            urls.forEach(u => URL.revokeObjectURL(u));
                            this._environmentMaps[name].resolved = true;
                            resolve(map);
                        }, () => { }, (error) => reject(error));
                    }
                }
                catch (e) {
                    this.notify(eventId, true);
                    throw e;
                }
            }))
        };
        return this._environmentMaps[name];
    }
    notify(eventId, failed = false) {
        let event;
        if (failed) {
            event = { type: viewer_shared_types_1.TASK_TYPE.ENVIRONMENT_MAP_LOADING, id: eventId, progress: 1, status: 'Loading of EnvironmentMap failed' };
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_CANCEL, event);
        }
        else {
            event = { type: viewer_shared_types_1.TASK_TYPE.ENVIRONMENT_MAP_LOADING, id: eventId, progress: 1, status: 'Loaded EnvironmentMap' };
            if (this._stateEngine.viewportEngines[this._renderingEngine.id]) {
                this._stateEngine.viewportEngines[this._renderingEngine.id].environmentMapLoaded.resolve(true);
                this._stateEngine.viewportEngines[this._renderingEngine.id].environmentMapLoaded = new viewer_shared_services_1.StatePromise();
            }
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.TASK.TASK_END, event);
        }
    }
}
exports.EnvironmentMapLoader = EnvironmentMapLoader;
//# sourceMappingURL=EnvironmentMapLoader.js.map

/***/ }),

/***/ 66296:
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
exports.GeometryLoader = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_shared_types_1 = __webpack_require__(64766);
const GemMaterial_1 = __webpack_require__(75655);
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const SDData_1 = __webpack_require__(85284);
const gl_matrix_1 = __webpack_require__(61961);
class GeometryLoader {
    // #endregion Properties (8)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        this._gemSphericalMapsCache = {};
        this._geometryCache = {};
        this._logger = viewer_shared_services_1.Logger.instance;
        this._primitiveCache = {};
    }
    // #endregion Constructors (1)
    // #region Public Methods (6)
    emptyGeometryCache() {
        for (const key in this._geometryCache)
            this.removeFromGeometryCache(key);
        this._geometryCache = {};
        for (const key in this._primitiveCache)
            this.removeFromPrimitiveCache(key);
        this._primitiveCache = {};
    }
    init() { }
    /**
     * Create a geometry object with the provided geometry data.
     *
     * @param geometry the geometry data
     * @returns the geometry object
     */
    load(geometry, parent, newChild, skeleton) {
        const threeGeometry = (() => {
            if (!this._primitiveCache[geometry.primitive.id + '_' + geometry.primitive.version]) {
                return this.loadPrimitive(geometry.primitive);
            }
            else {
                this._primitiveCache[geometry.primitive.id + '_' + geometry.primitive.version].counter++;
                const clone = this._primitiveCache[geometry.primitive.id + '_' + geometry.primitive.version].threeGeometry.clone();
                this._primitiveCache[geometry.primitive.id + '_' + geometry.primitive.version].clones.push(clone);
                return clone;
            }
        })();
        let incomingMaterialData;
        if (geometry.effectMaterials.length > 0) {
            incomingMaterialData = geometry.effectMaterials[geometry.effectMaterials.length - 1].material;
        }
        else if (this._renderingEngine.type === viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.ATTRIBUTES) {
            incomingMaterialData = geometry.attributeMaterial;
        }
        else {
            incomingMaterialData = geometry.material;
        }
        const materialSettings = {
            mode: geometry.mode,
            useVertexTangents: threeGeometry.attributes.tangent !== undefined,
            useVertexColors: threeGeometry.attributes.color !== undefined && this._renderingEngine.type !== viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.ATTRIBUTES,
            useFlatShading: threeGeometry.attributes.normal === undefined,
            useMorphTargets: Object.keys(threeGeometry.morphAttributes).length > 0,
            useMorphNormals: Object.keys(threeGeometry.morphAttributes).length > 0 && threeGeometry.morphAttributes.normal !== undefined
        };
        if (incomingMaterialData instanceof viewer_shared_types_1.MaterialGemData) {
            const gemMaterialData = incomingMaterialData;
            threeGeometry.computeBoundingSphere();
            const sphericalNormalMap = this.createCubeNormalMap(geometry, threeGeometry);
            const center = threeGeometry.boundingSphere.center, radius = threeGeometry.boundingSphere.radius;
            gemMaterialData.side = viewer_shared_types_1.MATERIAL_SIDE.FRONT;
            gemMaterialData.center = gl_matrix_1.vec3.fromValues(center.x, center.y, center.z);
            gemMaterialData.radius = radius;
            gemMaterialData.sphericalNormalMap = sphericalNormalMap;
        }
        while (parent.children.length !== 0)
            parent.remove(parent.children[0]);
        const material = this._renderingEngine.materialLoader.load(incomingMaterialData || geometry, materialSettings);
        let obj;
        if (this._geometryCache[geometry.id + '_' + geometry.version] && !skeleton) {
            this._geometryCache[geometry.id + '_' + geometry.version].counter++;
            obj = this._geometryCache[geometry.id + '_' + geometry.version].obj;
            // case 1: in case the geometry data was cloned and this is a different object
            // case 2: it is a new child
            if (newChild === false && obj.parent !== parent || newChild === true) {
                obj = obj.cloneObject();
                this._geometryCache[geometry.id + '_' + geometry.version].clones.push(obj);
                parent.add(obj);
            }
            obj.traverse(o => {
                if (o instanceof THREE.Points ||
                    o instanceof THREE.LineSegments ||
                    o instanceof THREE.LineLoop ||
                    o instanceof THREE.Line ||
                    o instanceof THREE.Mesh)
                    o.material = material;
            });
        }
        else {
            obj = new SDData_1.SDData(geometry.id, geometry.version);
            this.createMesh(obj, geometry, threeGeometry, material, skeleton);
            this._geometryCache[geometry.id + '_' + geometry.version] = { obj, counter: 1, clones: [], primitiveCacheId: geometry.primitive.id + '_' + geometry.primitive.version };
            parent.add(obj);
        }
        obj.children.forEach(m => m.castShadow = true);
        if (material instanceof GemMaterial_1.GemMaterial) {
            obj.children.forEach(m => m.receiveShadow = false);
        }
        else {
            obj.children.forEach(m => m.receiveShadow = true);
        }
        return geometry.boundingBox.clone();
    }
    loadPrimitive(primitive) {
        const geometry = new THREE.BufferGeometry();
        if (primitive.indices)
            geometry.setIndex(new THREE.BufferAttribute(primitive.indices.array, primitive.indices.itemSize));
        for (const attributeId in primitive.attributes) {
            const buffer = this.loadAttribute(primitive.attributes[attributeId], attributeId);
            const attributeName = this.getAttributeName(attributeId);
            if (attributeId === 'NORMAL')
                if (this.checkNormals(primitive, attributeId, buffer, geometry))
                    continue;
            geometry.setAttribute(attributeName, buffer);
            const morphAttributeData = primitive.attributes[attributeId].morphAttributeData;
            if (morphAttributeData.length > 0) {
                geometry.morphTargetsRelative = true;
                const buffers = [];
                for (let i = 0; i < morphAttributeData.length; i++)
                    buffers.push(this.loadAttribute(morphAttributeData[i], attributeId));
                geometry.morphAttributes[attributeName] = buffers;
            }
            // we copy the uv coordinates into the second set of uv coordinates if there are none
            // this allows for the usage of AO and light maps that share this coordinate set
            const attributeIdUV2 = 'TEXCOORD_1', attributeNameUV2 = 'uv1';
            if (attributeName === 'uv' && !primitive.attributes[attributeIdUV2]) {
                geometry.setAttribute(attributeNameUV2, buffer);
                const morphAttributeData = primitive.attributes[attributeId].morphAttributeData;
                if (morphAttributeData.length > 0) {
                    geometry.morphTargetsRelative = true;
                    const buffers = [];
                    for (let i = 0; i < morphAttributeData.length; i++)
                        buffers.push(this.loadAttribute(morphAttributeData[i], attributeId));
                    geometry.morphAttributes[attributeNameUV2] = buffers;
                }
            }
        }
        primitive.convertedObject[this._renderingEngine.id] = geometry;
        this._primitiveCache[primitive.id + '_' + primitive.version] = { threeGeometry: geometry, counter: 1, clones: [] };
        return geometry;
    }
    removeFromGemSphericalMapsCache(id) {
        if (this._gemSphericalMapsCache[id]) {
            if (this._gemSphericalMapsCache[id].counter === 1) {
                this._gemSphericalMapsCache[id].renderTarget.dispose();
                this._gemSphericalMapsCache[id].texture.dispose();
                delete this._gemSphericalMapsCache[id];
            }
            else {
                this._gemSphericalMapsCache[id].counter--;
            }
        }
    }
    removeFromGeometryCache(id) {
        if (this._geometryCache[id]) {
            if (this._geometryCache[id].counter === 1) {
                this.removeFromPrimitiveCache(this._geometryCache[id].primitiveCacheId);
                this._geometryCache[id].clones.forEach(c => {
                    this.removeFromPrimitiveCache(this._geometryCache[id].primitiveCacheId);
                });
                delete this._geometryCache[id];
            }
            else {
                this._geometryCache[id].counter--;
            }
        }
    }
    // #endregion Public Methods (6)
    // #region Private Methods (7)
    checkNormals(primitive, attributeId, buffer, geometry) {
        let blnNormalsOk = false;
        for (let index = 0; index < 10; ++index) {
            if (Math.abs(buffer.array[index * 3]) > 0.001) {
                blnNormalsOk = true;
                break;
            }
            if (Math.abs(buffer.array[index * 3 + 1]) > 0.001) {
                blnNormalsOk = true;
                break;
            }
            if (Math.abs(buffer.array[index * 3 + 2]) > 0.001) {
                blnNormalsOk = true;
                break;
            }
        }
        if (!blnNormalsOk) {
            geometry.computeVertexNormals();
            const computedNormalAttribute = geometry.getAttribute('normal');
            // store the computed normals in the attribute data
            primitive.attributes[attributeId] = new viewer_shared_types_1.AttributeData(new Float32Array(computedNormalAttribute.array), computedNormalAttribute.itemSize, 0, 0, 3, computedNormalAttribute.normalized, computedNormalAttribute.array.length / 3);
            return true;
        }
        return false;
    }
    convertToTriangleMode(geometry, drawMode) {
        let index = geometry.getIndex();
        // generate index if not present
        if (index === null) {
            const indices = [];
            const position = geometry.getAttribute('position');
            if (position !== undefined) {
                for (let i = 0; i < position.count; i++)
                    indices.push(i);
                geometry.setIndex(indices);
                index = geometry.getIndex();
            }
            else {
                throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryLoader.convertToTriangleMode: Undefined position attribute. Processing not possible.');
            }
        }
        if (index === null)
            throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryLoader.convertToTriangleMode: Undefined index. Processing not possible.');
        const numberOfTriangles = index.count - 2;
        const newIndices = [];
        if (drawMode === viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLE_FAN) {
            for (let i = 1; i <= numberOfTriangles; i++) {
                newIndices.push(index.getX(0));
                newIndices.push(index.getX(i));
                newIndices.push(index.getX(i + 1));
            }
        }
        else {
            for (let i = 0; i < numberOfTriangles; i++) {
                if (i % 2 === 0) {
                    newIndices.push(index.getX(i));
                    newIndices.push(index.getX(i + 1));
                    newIndices.push(index.getX(i + 2));
                }
                else {
                    newIndices.push(index.getX(i + 2));
                    newIndices.push(index.getX(i + 1));
                    newIndices.push(index.getX(i));
                }
            }
        }
        if ((newIndices.length / 3) !== numberOfTriangles)
            throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryLoader.convertToTriangleMode: Unable to generate correct amount of triangle.');
        geometry.setIndex(newIndices);
    }
    createCubeNormalMap(geometryData, geometry, resolution = 1024) {
        if (this._gemSphericalMapsCache[geometryData.primitive.id + '_' + geometryData.primitive.version]) {
            this._gemSphericalMapsCache[geometryData.primitive.id + '_' + geometryData.primitive.version].counter++;
            return this._gemSphericalMapsCache[geometryData.primitive.id + '_' + geometryData.primitive.version].texture;
        }
        if (!this._gemScene) {
            this._gemScene = new THREE.Scene();
            this._gemCubeCameraRenderTarget = new THREE.WebGLCubeRenderTarget(resolution, { format: THREE.RGBAFormat, magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter });
            this._gemCubeCameraRenderTarget.texture.generateMipmaps = false;
            this._gemCubeCameraRenderTarget.texture.minFilter = THREE.NearestFilter;
            this._gemCubeCameraRenderTarget.texture.magFilter = THREE.NearestFilter;
            this._gemCubeCameraRenderTarget.texture.format = THREE.RGBAFormat;
            this._gemCubeCamera = new THREE.CubeCamera(0.001, 10000, this._gemCubeCameraRenderTarget);
            this._gemScene.add(this._gemCubeCamera);
        }
        else {
            this._gemCubeCameraRenderTarget = new THREE.WebGLCubeRenderTarget(resolution, { format: THREE.RGBAFormat, magFilter: THREE.LinearFilter, minFilter: THREE.LinearFilter });
            this._gemCubeCameraRenderTarget.texture.generateMipmaps = false;
            this._gemCubeCameraRenderTarget.texture.minFilter = THREE.NearestFilter;
            this._gemCubeCameraRenderTarget.texture.magFilter = THREE.NearestFilter;
            this._gemCubeCameraRenderTarget.texture.format = THREE.RGBAFormat;
            this._gemCubeCamera.renderTarget = this._gemCubeCameraRenderTarget;
        }
        if (!this._gemNormalMaterial) {
            const _normalShader = {
                defines: {},
                uniforms: THREE.UniformsUtils.merge([
                    THREE.UniformsLib.common
                ]),
                vertexShader: `
                varying vec3 vNormal;

                void main() {
                  vNormal = normal;
                  gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
                }
                `,
                fragmentShader: `
                varying highp vec3 vNormal;

                float decodeFloat(float f) {
                    float r = mod(f, 1.0/255.0);
                    return /*r > 0.5/256.0 ? f + (1.0/256.0) - r : */f - r;
                }
                
                vec3 decodeVec3(vec3 v) {
                    return vec3(decodeFloat(v.x), decodeFloat(v.y), decodeFloat(v.z));
                }
                
                float signEncoding(vec3 v) {
                    float code = 1.0;
                     if(v.x < 0.0 && v.y < 0.0 && v.z < 0.0) {
                        code = 0.0;
                    } else if (v.x < 0.0 && v.y < 0.0) {
                        code = 2.0/256.0;
                    } else if (v.x < 0.0 && v.z < 0.0) {
                        code = 4.0/256.0;
                    } else if (v.y < 0.0 && v.z < 0.0) {
                        code = 6.0/256.0;
                    } else if (v.x < 0.0) {
                        code = 8.0/256.0;
                    } else if (v.y < 0.0) {
                        code = 10.0/256.0;
                    } else if (v.z < 0.0) {
                        code = 12.0/256.0;
                    }
                    return code;
                }
                
                void main() {
                    vec3 n = normalize(vNormal);
                    gl_FragColor = vec4(decodeVec3(abs(n)), signEncoding(n));
                }
                `
            };
            this._gemNormalMaterial = new THREE.ShaderMaterial({
                uniforms: THREE.UniformsUtils.clone(_normalShader.uniforms),
                defines: _normalShader.defines,
                vertexShader: _normalShader.vertexShader,
                fragmentShader: _normalShader.fragmentShader
            });
            this._gemNormalMaterial.blending = THREE.NoBlending;
            this._gemNormalMaterial.side = THREE.DoubleSide;
            this._gemScene.overrideMaterial = this._gemNormalMaterial;
        }
        const mesh = new THREE.Mesh(geometry.clone(), this._gemNormalMaterial);
        mesh.geometry.center();
        this._gemScene.add(mesh);
        this._gemCubeCamera.update(this._renderingEngine.renderer, this._gemScene);
        this._gemScene.remove(mesh);
        mesh.geometry.dispose();
        mesh.material.dispose();
        this._gemCubeCamera.renderTarget.texture.userData = {
            SDid: geometryData.primitive.id,
            SDversion: geometryData.primitive.version
        };
        this._gemSphericalMapsCache[geometryData.primitive.id + '_' + geometryData.primitive.version] = { texture: this._gemCubeCameraRenderTarget.texture, renderTarget: this._gemCubeCameraRenderTarget, counter: 1 };
        return this._gemSphericalMapsCache[geometryData.primitive.id + '_' + geometryData.primitive.version].texture;
    }
    createMesh(obj, geometry, threeGeometry, material, skeleton) {
        if (geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.POINTS) {
            const points = new THREE.Points(threeGeometry, material);
            geometry.convertedObject[this._renderingEngine.id] = points;
            obj.add(points);
        }
        else if (geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.LINES) {
            const lineSegments = new THREE.LineSegments(threeGeometry, material);
            geometry.convertedObject[this._renderingEngine.id] = lineSegments;
            obj.add(lineSegments);
        }
        else if (geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.LINE_LOOP) {
            const lineLoop = new THREE.LineLoop(threeGeometry, material);
            geometry.convertedObject[this._renderingEngine.id] = lineLoop;
            obj.add(lineLoop);
        }
        else if (geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.LINE_STRIP) {
            const line = new THREE.Line(threeGeometry, material);
            geometry.convertedObject[this._renderingEngine.id] = line;
            obj.add(line);
        }
        else if (geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLES || geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLE_STRIP || geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLE_FAN) {
            const bufferGeometry = threeGeometry;
            if (geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLE_STRIP || geometry.mode === viewer_shared_types_1.PRIMITIVE_MODE.TRIANGLE_FAN)
                this.convertToTriangleMode(bufferGeometry, geometry.mode);
            if (skeleton) {
                const skinnedMesh = new THREE.SkinnedMesh(bufferGeometry, material);
                geometry.convertedObject[this._renderingEngine.id] = skinnedMesh;
                skinnedMesh.bind(skeleton, skinnedMesh.matrixWorld);
                if (bufferGeometry.attributes.skinWeight.normalized)
                    skinnedMesh.normalizeSkinWeights();
                obj.add(skinnedMesh);
            }
            else {
                const mesh = new THREE.Mesh(bufferGeometry, material);
                geometry.convertedObject[this._renderingEngine.id] = mesh;
                obj.add(mesh);
            }
        }
        else {
            throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError(`GeometryLoader.load: Unrecognized primitive mode ${geometry.mode}.`);
        }
        obj.traverse(m => {
            if (m instanceof THREE.Mesh || m instanceof THREE.Points || m instanceof THREE.LineSegments || m instanceof THREE.LineLoop || m instanceof THREE.Line) {
                m.geometry.userData = {
                    SDid: geometry.id,
                    SDversion: geometry.version,
                    primitiveSDid: geometry.primitive.id,
                    primitiveSDversion: geometry.primitive.version
                };
                m.renderOrder = geometry.renderOrder;
            }
            if (m instanceof THREE.Mesh && m.userData.transparencyPlaceholder !== true) {
                m.geometry.boundingBox = new THREE.Box3(new THREE.Vector3(geometry.boundingBox.min[0], geometry.boundingBox.min[1], geometry.boundingBox.min[2]), new THREE.Vector3(geometry.boundingBox.max[0], geometry.boundingBox.max[1], geometry.boundingBox.max[2]));
                m.geometry.boundingSphere = new THREE.Sphere(new THREE.Vector3(geometry.boundingBox.boundingSphere.center[0], geometry.boundingBox.boundingSphere.center[1], geometry.boundingBox.boundingSphere.center[2]), geometry.boundingBox.boundingSphere.radius);
                m.morphTargetInfluences = geometry.morphWeights;
            }
        });
    }
    getAttributeName(attributeId) {
        switch (attributeId) {
            case 'POSITION':
                return 'position';
            case 'NORMAL':
                return 'normal';
            case 'TEXCOORD_0':
            case 'TEXCOORD0':
            case 'TEXCOORD':
            case 'UV':
                return 'uv';
            case 'TEXCOORD_1':
                return 'uv1';
            case 'TEXCOORD_2':
                return 'uv2';
            case 'TEXCOORD_3':
                return 'uv3';
            case 'COLOR_0':
            case 'COLOR0':
            case 'COLOR':
                return 'color';
            case 'WEIGHT':
            case 'WEIGHTS_0':
                return 'skinWeight';
            case 'JOINT':
            case 'JOINTS_0':
                return 'skinIndex';
            case 'TANGENT':
                return 'tangent';
            case 'POSITION_INDEX':
                return 'positionIndex';
            default:
                this._logger.warn(`GeometryLoader.loadPrimitive: Unrecognized attribute id ${attributeId}.`);
        }
        return '';
    }
    loadAttribute(bufferAttribute, attributeId) {
        let buffer;
        if (bufferAttribute.byteStride && bufferAttribute.byteStride !== bufferAttribute.itemBytes) {
            // Integer parameters to IB/IBA are in array elements, not bytes.
            const ib = new THREE.InterleavedBuffer(bufferAttribute.array, bufferAttribute.byteStride / bufferAttribute.elementBytes);
            buffer = new THREE.InterleavedBufferAttribute(ib, bufferAttribute.itemSize, (bufferAttribute.byteOffset % bufferAttribute.byteStride) / bufferAttribute.elementBytes, bufferAttribute.normalized);
        }
        else {
            buffer = new THREE.BufferAttribute(bufferAttribute.array, bufferAttribute.itemSize, (attributeId === 'COLOR_0' || attributeId === 'COLOR0' || attributeId === 'COLOR') ? true : bufferAttribute.normalized);
        }
        if (bufferAttribute.sparse) {
            if (bufferAttribute.array !== null) {
                // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
                buffer = new THREE.BufferAttribute(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
            }
            for (let i = 0, il = bufferAttribute.sparseIndices.length; i < il; i++) {
                const index = bufferAttribute.sparseIndices[i];
                buffer.setX(index, bufferAttribute.sparseValues[i * bufferAttribute.itemSize]);
                if (bufferAttribute.itemSize >= 2)
                    buffer.setY(index, bufferAttribute.sparseValues[i * bufferAttribute.itemSize + 1]);
                if (bufferAttribute.itemSize >= 3)
                    buffer.setZ(index, bufferAttribute.sparseValues[i * bufferAttribute.itemSize + 2]);
                if (bufferAttribute.itemSize >= 4)
                    buffer.setW(index, bufferAttribute.sparseValues[i * bufferAttribute.itemSize + 3]);
                if (bufferAttribute.itemSize >= 5)
                    throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('GeometryLoader.loadPrimitive: Unsupported itemSize in sparse BufferAttribute.');
            }
        }
        return buffer;
    }
    removeFromPrimitiveCache(id) {
        if (this._primitiveCache[id]) {
            if (this._primitiveCache[id].counter === 1) {
                this._primitiveCache[id].threeGeometry.dispose();
                for (const key in this._primitiveCache[id].threeGeometry.attributes)
                    this._primitiveCache[id].threeGeometry.deleteAttribute(key);
                this._primitiveCache[id].threeGeometry.setIndex(null);
                this._primitiveCache[id].clones.forEach(c => {
                    c.dispose();
                    for (const key in c.attributes)
                        c.deleteAttribute(key);
                    c.setIndex(null);
                });
                delete this._primitiveCache[id];
            }
            else {
                this._primitiveCache[id].counter--;
            }
        }
    }
}
exports.GeometryLoader = GeometryLoader;
//# sourceMappingURL=GeometryLoader.js.map

/***/ }),

/***/ 2642:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HTMLElementAnchorLoader = void 0;
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const gl_matrix_1 = __webpack_require__(61961);
class HTMLElementAnchorLoader {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (2)
        this._htmlElements = {};
        this._parentDiv = document.createElement('div');
        this._parentDiv.classList.add('sdv-anchor-container');
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (1)
    get parentDiv() {
        return this._parentDiv;
    }
    // #endregion Public Getters And Setters (1)
    // #region Public Methods (5)
    adjustPositions(scaleWidth, scaleHeight) {
        for (const anchorId in this._htmlElements) {
            const anchor = this._htmlElements[anchorId].anchor;
            const { page, container, client, hidden } = this._renderingEngine.sceneTracingManager.convert3Dto2D(gl_matrix_1.vec3.clone(anchor.location));
            const htmlElement = anchor.createViewerHtmlElement(this._renderingEngine.id);
            if (!htmlElement)
                continue;
            let node = this._htmlElements[anchorId].node;
            let visible = node.visible;
            while (node.parent) {
                node = node.parent;
                visible = node.visible && visible;
            }
            if (this._renderingEngine.show === false)
                visible = false;
            anchor.update({ anchor, htmlElement, page, container, client, scale: gl_matrix_1.vec2.fromValues(scaleWidth, scaleHeight), hidden, visible });
        }
    }
    init() {
        var _a;
        (_a = this._renderingEngine.canvas.parentNode) === null || _a === void 0 ? void 0 : _a.appendChild(this._parentDiv);
    }
    load(node, anchor, isVisibleInHierarchy) {
        const htmlElement = anchor.createViewerHtmlElement(this._renderingEngine.id);
        if (!htmlElement)
            return;
        // set the display property to "none" if the viewport is not shown or the node is not visible
        if (this._renderingEngine.show === false || isVisibleInHierarchy === false)
            htmlElement.style.display = 'none';
        // if the node is not visible return
        if (isVisibleInHierarchy === false)
            return;
        this._parentDiv.appendChild(htmlElement);
        this._htmlElements[anchor.id + '_' + anchor.version] = {
            node,
            anchor
        };
    }
    removeData(id, version) {
        // since the data object might be there, but no data is loaded for this viewport
        // this check is needed
        if (!this._htmlElements[id + '_' + version])
            return;
        const anchor = this._htmlElements[id + '_' + version].anchor;
        if (anchor && anchor.getViewerHtmlElement(this._renderingEngine.id)) {
            this._parentDiv.removeChild(anchor.getViewerHtmlElement(this._renderingEngine.id));
            delete this._htmlElements[id + '_' + version];
        }
    }
    toggleBusyMode(toggle) {
        if (toggle && this._renderingEngine.busyModeDisplay === viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY.BLUR) {
            if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && navigator.userAgent.toLowerCase().indexOf('android') > -1)
                return;
            this._parentDiv.style.filter = 'blur(3px)';
        }
        else {
            this._parentDiv.style.filter = '';
        }
    }
}
exports.HTMLElementAnchorLoader = HTMLElementAnchorLoader;
//# sourceMappingURL=HTMLElementAnchorLoader.js.map

/***/ }),

/***/ 88708:
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
exports.LightLoader = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
class LightLoader {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (3)
        this._forceDisabledShadows = false;
        this._shadowMapCount = 0;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (4)
    get forceDisabledShadows() {
        return this._forceDisabledShadows;
    }
    set forceDisabledShadows(value) {
        this._forceDisabledShadows = value;
    }
    get shadowMapCount() {
        return this._shadowMapCount;
    }
    set shadowMapCount(value) {
        this._shadowMapCount = value;
    }
    // #endregion Public Getters And Setters (4)
    // #region Public Methods (3)
    adjustToBoundingBox(light, dataChild, boundingBox) {
        const threeLight = dataChild.children[0];
        if (light instanceof viewer_rendering_engine_light_engine_1.DirectionalLight) {
            const threeDirectionalLight = threeLight;
            const bs = boundingBox.boundingSphere;
            threeDirectionalLight.position.set(bs.center[0] + light.direction[0] * bs.radius * 2.35, bs.center[1] + light.direction[1] * bs.radius * 2.35, bs.center[2] + light.direction[2] * bs.radius * 2.35);
            threeDirectionalLight.target.position.set(bs.center[0], bs.center[1], bs.center[2]);
            if (light.castShadow === true && this.forceDisabledShadows === false) {
                threeDirectionalLight.castShadow = true;
                threeDirectionalLight.shadow.camera.up.set(0, 0, 1);
                threeDirectionalLight.shadow.camera.far = 8 * bs.radius;
                threeDirectionalLight.shadow.camera.right = 1.5 * bs.radius;
                threeDirectionalLight.shadow.camera.left = -1.5 * bs.radius;
                threeDirectionalLight.shadow.camera.top = 1.5 * bs.radius;
                threeDirectionalLight.shadow.camera.bottom = -1.5 * bs.radius;
                threeDirectionalLight.shadow.mapSize.width = light.shadowMapResolution;
                threeDirectionalLight.shadow.mapSize.height = light.shadowMapResolution;
                threeDirectionalLight.shadow.bias = light.shadowMapBias;
                threeDirectionalLight.shadow.camera.updateProjectionMatrix();
                this._shadowMapCount++;
            }
            else {
                threeDirectionalLight.castShadow = false;
            }
        }
    }
    init() { }
    load(light, dataChild) {
        let threeLight = dataChild.children[0] instanceof THREE.Light ? dataChild.children[0] : null;
        if (light instanceof viewer_rendering_engine_light_engine_1.AmbientLight) {
            if (!threeLight) {
                threeLight = new THREE.AmbientLight();
                light.convertedObject[this._renderingEngine.id] = threeLight;
                dataChild.add(threeLight);
            }
            const threeAmbientLight = threeLight;
            threeAmbientLight.color = this._renderingEngine.createThreeJsColor(light.color);
            threeAmbientLight.intensity = light.intensity;
        }
        if (light instanceof viewer_rendering_engine_light_engine_1.DirectionalLight) {
            if (!threeLight) {
                threeLight = new THREE.DirectionalLight();
                dataChild.add(threeLight);
                dataChild.add(threeLight.target);
                light.convertedObject[this._renderingEngine.id] = threeLight;
            }
            const threeDirectionalLight = threeLight;
            threeDirectionalLight.color = this._renderingEngine.createThreeJsColor(light.color);
            threeDirectionalLight.intensity = light.intensity;
            if (light.useNodeData) {
                threeDirectionalLight.position.set(0, 0, 0);
                threeDirectionalLight.target.position.set(0, 0, -1);
            }
        }
        if (light instanceof viewer_rendering_engine_light_engine_1.HemisphereLight) {
            if (!threeLight) {
                threeLight = new THREE.HemisphereLight();
                dataChild.add(threeLight);
                light.convertedObject[this._renderingEngine.id] = threeLight;
            }
            const threeHemisphereLight = threeLight;
            threeHemisphereLight.color = this._renderingEngine.createThreeJsColor(light.color);
            threeHemisphereLight.intensity = light.intensity;
            threeHemisphereLight.groundColor = this._renderingEngine.createThreeJsColor(light.groundColor);
        }
        if (light instanceof viewer_rendering_engine_light_engine_1.PointLight) {
            if (!threeLight) {
                threeLight = new THREE.PointLight();
                dataChild.add(threeLight);
                light.convertedObject[this._renderingEngine.id] = threeLight;
            }
            const threePointLight = threeLight;
            threePointLight.color = this._renderingEngine.createThreeJsColor(light.color);
            threePointLight.intensity = light.intensity;
            threePointLight.distance = light.distance;
            threePointLight.decay = light.decay;
            threePointLight.position.set(light.position[0], light.position[1], light.position[2]);
        }
        if (light instanceof viewer_rendering_engine_light_engine_1.SpotLight) {
            if (!threeLight) {
                threeLight = new THREE.SpotLight(this._renderingEngine.createThreeJsColor(light.color), light.intensity, light.distance, light.angle, light.penumbra, light.decay);
                dataChild.add(threeLight);
                dataChild.add(threeLight.target);
                light.convertedObject[this._renderingEngine.id] = threeLight;
            }
            const threeSpotLight = threeLight;
            threeSpotLight.color = this._renderingEngine.createThreeJsColor(light.color);
            threeSpotLight.intensity = light.intensity;
            threeSpotLight.distance = light.distance;
            threeSpotLight.angle = light.angle;
            threeSpotLight.penumbra = light.penumbra;
            threeSpotLight.decay = light.decay;
            threeSpotLight.position.set(light.position[0], light.position[1], light.position[2]);
            threeSpotLight.target.position.set(light.target[0], light.target[1], light.target[2]);
        }
    }
}
exports.LightLoader = LightLoader;
//# sourceMappingURL=LightLoader.js.map

/***/ }),

/***/ 65993:
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
exports.adaptShaders = exports.MATERIAL_TYPE = exports.MaterialLoader = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_shared_services_1 = __webpack_require__(8389);
const PCSS_1 = __webpack_require__(65642);
const EnvironmentMapLoader_1 = __webpack_require__(83445);
const GemMaterial_1 = __webpack_require__(75655);
const viewer_shared_types_1 = __webpack_require__(64766);
const gl_matrix_1 = __webpack_require__(61961);
const MultiPointsMaterial_1 = __webpack_require__(3382);
const SDColor_1 = __webpack_require__(1161);
const SpecularGlossinessMaterial_1 = __webpack_require__(16871);
// #endregion Type aliases (6)
// #region Classes (1)
class MaterialLoader {
    // #endregion Properties (16)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (16)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._blending = 0.0;
        this._defaultLineMaterialData = new viewer_shared_types_1.MaterialBasicLineData({ color: '#199b9b' });
        this._defaultMaterialData = new viewer_shared_types_1.MaterialStandardData({ color: '#199b9b', side: viewer_shared_types_1.MATERIAL_SIDE.DOUBLE, metalness: 0.0 });
        this._defaultPointMaterialData = new viewer_shared_types_1.MaterialPointData({ color: '#199b9b' });
        this._envMap = null;
        this._envMapIntensity = 1;
        this._envMapType = EnvironmentMapLoader_1.ENVIRONMENT_MAP_TYPE.NULL;
        this._environmentMapRotationEuler = new THREE.Euler();
        this._height = 1020;
        this._lightSizeUV = 0.025;
        this._materialCache = {};
        this._maxMapCount = 0;
        this._pointSize = 1.0;
        this._textureEncoding = THREE.SRGBColorSpace;
        this._threeJsTextureCache = {};
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (12)
    get defaultLineMaterialData() {
        return this._defaultLineMaterialData;
    }
    set defaultLineMaterialData(value) {
        this._defaultLineMaterialData = value;
        this.assignDefaultLineMaterial();
    }
    get defaultMaterialData() {
        return this._defaultMaterialData;
    }
    set defaultMaterialData(value) {
        this._defaultMaterialData = value;
        this.assignDefaultMaterial();
    }
    get defaultPointMaterialData() {
        return this._defaultPointMaterialData;
    }
    set defaultPointMaterialData(value) {
        this._defaultPointMaterialData = value;
        this.assignDefaultPointMaterial();
    }
    get maxMapCount() {
        return this._maxMapCount;
    }
    set maxMapCount(value) {
        this._maxMapCount = value;
    }
    get textureEncoding() {
        return this._textureEncoding;
    }
    set textureEncoding(value) {
        this._textureEncoding = value;
        this.assignTextureEncoding();
    }
    get threeJsTextureCache() {
        return this._threeJsTextureCache;
    }
    set threeJsTextureCache(value) {
        this._threeJsTextureCache = value;
    }
    // #endregion Public Getters And Setters (12)
    // #region Public Methods (18)
    assignColorCorrection(value) {
        const convertColor = (c, toggle) => {
            if (!c)
                return;
            if (c instanceof SDColor_1.SDColor) {
                c.colorCorrection(toggle);
                return c;
            }
            else {
                const sdColor = this._renderingEngine.colorCache.find(color => color.equals(c));
                if (sdColor) {
                    sdColor.colorCorrection(toggle);
                    return sdColor;
                }
                else {
                    // we check in this case if the converted color has been stored already
                    const clone = c.clone();
                    toggle === true ? clone.convertSRGBToLinear() : clone.convertLinearToSRGB();
                    const sdColorClone = this._renderingEngine.colorCache.find(color => color.equals(clone));
                    if (sdColorClone) {
                        sdColorClone.colorCorrection(toggle);
                        return sdColorClone;
                    }
                    else {
                        // some colors may not have been set by us, but have been set automatically
                        // in this case we expect the color to be linear either way and therefore omit a color correction
                        return c;
                    }
                }
            }
        };
        for (const cacheKey in this._materialCache) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const material = this._materialCache[cacheKey].material;
            if (material.color)
                material.color = convertColor(material.color, value);
            if (material.specular)
                material.specular = convertColor(material.specular, value);
            if (material.emissive)
                material.emissive = convertColor(material.emissive, value);
            if (material.colorTransferBegin)
                material.colorTransferBegin = convertColor(material.colorTransferBegin, value);
            if (material.colorTransferEnd)
                material.colorTransferEnd = convertColor(material.colorTransferEnd, value);
            if (material.attenuationColor)
                material.attenuationColor = convertColor(material.attenuationColor, value);
            if (material.sheencolor)
                material.sheencolor = convertColor(material.sheencolor, value);
            if (material.specularColor)
                material.specularColor = convertColor(material.specularColor, value);
            material.needsUpdate = true;
        }
    }
    assignDefaultLineMaterial() {
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material instanceof THREE.LineBasicMaterial && this._materialCache[cacheKey].materialData === null) {
                const material = this._materialCache[cacheKey].material;
                const { properties, mapCount } = this.getMaterialProperties(this._defaultLineMaterialData, MATERIAL_TYPE.LINE, undefined);
                this.maxMapCount = Math.max(this.maxMapCount, mapCount);
                material.copy(new THREE.LineBasicMaterial(properties));
                material.needsUpdate = true;
            }
        }
    }
    assignDefaultMaterial() {
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material instanceof THREE.MeshPhysicalMaterial && this._materialCache[cacheKey].materialData === null) {
                const material = this._materialCache[cacheKey].material;
                const { properties, mapCount } = this.getMaterialProperties(this._defaultMaterialData, MATERIAL_TYPE.MESH, this._materialCache[cacheKey].materialSettings);
                this.maxMapCount = Math.max(this.maxMapCount, mapCount);
                material.copy(new THREE.MeshPhysicalMaterial(properties));
                material.needsUpdate = true;
            }
        }
    }
    assignDefaultPointMaterial() {
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material instanceof THREE.PointsMaterial && this._materialCache[cacheKey].materialData === null) {
                const material = this._materialCache[cacheKey].material;
                const { properties, mapCount } = this.getMaterialProperties(this._defaultPointMaterialData, MATERIAL_TYPE.POINT, undefined);
                this.maxMapCount = Math.max(this.maxMapCount, mapCount);
                material.copy(new THREE.PointsMaterial(properties));
                material.needsUpdate = true;
            }
        }
    }
    assignEnvironmentMap(e, type) {
        this._envMap = e;
        this._envMapType = type;
        for (const cacheKey in this._materialCache) {
            if ((this._materialCache[cacheKey].material instanceof THREE.MeshPhysicalMaterial || this._materialCache[cacheKey].material instanceof THREE.MeshStandardMaterial || this._materialCache[cacheKey].material instanceof THREE.MeshBasicMaterial)) {
                const material = this._materialCache[cacheKey].material;
                if (this._materialCache[cacheKey].materialData &&
                    (this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialStandardData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialGemData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialSpecularGlossinessData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialUnlitData) &&
                    this._materialCache[cacheKey].materialData.envMap !== undefined)
                    continue;
                if (this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialUnlitData && this._renderingEngine.environmentMapForUnlitMaterials === false)
                    return;
                material.envMap = e;
                material.needsUpdate = true;
                for (const d in material.defines) {
                    if (d.startsWith('ENVMAP_TYPE_'))
                        delete material.defines[d];
                }
                if (material.defines)
                    material.defines['ENVMAP_TYPE_' + this._envMapType.toUpperCase()] = '';
                this.assignEnvironmentMapRotation(this._renderingEngine.environmentMapRotation);
            }
        }
    }
    assignEnvironmentMapForUnlitMaterials(toggle) {
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material instanceof THREE.MeshBasicMaterial) {
                const material = this._materialCache[cacheKey].material;
                if (this._materialCache[cacheKey].materialData &&
                    this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialUnlitData &&
                    this._materialCache[cacheKey].materialData.envMap !== undefined)
                    continue;
                if (toggle) {
                    material.envMap = this._envMap;
                    material.needsUpdate = true;
                    for (const d in material.defines) {
                        if (d.startsWith('ENVMAP_TYPE_'))
                            delete material.defines[d];
                    }
                    if (material.defines)
                        material.defines['ENVMAP_TYPE_' + this._envMapType.toUpperCase()] = '';
                }
                else {
                    material.envMap = null;
                    material.needsUpdate = true;
                }
            }
        }
    }
    assignEnvironmentMapIntensity(value) {
        this._envMapIntensity = value;
        for (const cacheKey in this._materialCache) {
            if ((this._materialCache[cacheKey].material instanceof THREE.MeshPhysicalMaterial || this._materialCache[cacheKey].material instanceof THREE.MeshStandardMaterial)) {
                const material = this._materialCache[cacheKey].material;
                if (this._materialCache[cacheKey].materialData &&
                    (this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialStandardData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialGemData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialSpecularGlossinessData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialUnlitData) &&
                    this._materialCache[cacheKey].materialData.envMap !== undefined)
                    continue;
                material.envMapIntensity = value;
                material.needsUpdate = true;
            }
        }
    }
    assignEnvironmentMapRotation(value) {
        // we switch the y and z axis to match the three.js coordinate system
        const rotationMatrix = new THREE.Matrix4().fromArray(gl_matrix_1.mat4.fromQuat(gl_matrix_1.mat4.create(), gl_matrix_1.quat.fromValues(value[0], value[2], -value[1], value[3]))).transpose();
        this._environmentMapRotationEuler = new THREE.Euler().setFromRotationMatrix(rotationMatrix);
        this._renderingEngine.scene.backgroundRotation = this._environmentMapRotationEuler;
        for (const cacheKey in this._materialCache) {
            if ((this._materialCache[cacheKey].material instanceof THREE.MeshPhysicalMaterial || this._materialCache[cacheKey].material instanceof THREE.MeshStandardMaterial)) {
                const material = this._materialCache[cacheKey].material;
                if (this._materialCache[cacheKey].materialData &&
                    (this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialStandardData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialGemData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialSpecularGlossinessData ||
                        this._materialCache[cacheKey].materialData instanceof viewer_shared_types_1.MaterialUnlitData) &&
                    this._materialCache[cacheKey].materialData.envMap !== undefined)
                    continue;
                material.envMapRotation = this._environmentMapRotationEuler;
                material.needsUpdate = true;
            }
        }
    }
    assignPointSize(p) {
        const height = this._renderingEngine.renderer ? this._renderingEngine.renderer.getSize(new THREE.Vector2()).y : 1080;
        if (height === this._height && p * (this._height / 1080) === this._pointSize)
            return;
        this._height = height;
        this._pointSize = p * (this._height / 1080);
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material instanceof MultiPointsMaterial_1.MultiPointsMaterial) {
                const material = this._materialCache[cacheKey].material;
                if (this._materialCache[cacheKey].material.userData.customPointSize_0Enabled && this._materialCache[cacheKey].material.userData.customPointSize_0Enabled === true) {
                    material.size_0 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_0;
                    material.needsUpdate = true;
                }
                else {
                    material.size_0 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_1Enabled && this._materialCache[cacheKey].material.userData.customPointSize_1Enabled === true) {
                    material.size_1 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_1;
                    material.needsUpdate = true;
                }
                else {
                    material.size_1 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_2Enabled && this._materialCache[cacheKey].material.userData.customPointSize_2Enabled === true) {
                    material.size_2 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_2;
                    material.needsUpdate = true;
                }
                else {
                    material.size_2 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_3Enabled && this._materialCache[cacheKey].material.userData.customPointSize_3Enabled === true) {
                    material.size_3 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_3;
                    material.needsUpdate = true;
                }
                else {
                    material.size_3 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_4Enabled && this._materialCache[cacheKey].material.userData.customPointSize_4Enabled === true) {
                    material.size_4 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_4;
                    material.needsUpdate = true;
                }
                else {
                    material.size_4 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_5Enabled && this._materialCache[cacheKey].material.userData.customPointSize_5Enabled === true) {
                    material.size_5 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_5;
                    material.needsUpdate = true;
                }
                else {
                    material.size_5 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_6Enabled && this._materialCache[cacheKey].material.userData.customPointSize_6Enabled === true) {
                    material.size_6 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_6;
                    material.needsUpdate = true;
                }
                else {
                    material.size_6 = this._pointSize;
                    material.needsUpdate = true;
                }
                if (this._materialCache[cacheKey].material.userData.customPointSize_7Enabled && this._materialCache[cacheKey].material.userData.customPointSize_7Enabled === true) {
                    material.size_7 = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize_7;
                    material.needsUpdate = true;
                }
                else {
                    material.size_7 = this._pointSize;
                    material.needsUpdate = true;
                }
            }
            else if (this._materialCache[cacheKey].material instanceof THREE.PointsMaterial) {
                const material = this._materialCache[cacheKey].material;
                if (this._materialCache[cacheKey].material.userData.customPointSizeEnabled && this._materialCache[cacheKey].material.userData.customPointSizeEnabled === true) {
                    material.size = this._pointSize * this._materialCache[cacheKey].material.userData.customPointSize;
                    material.needsUpdate = true;
                }
                else {
                    material.size = this._pointSize;
                    material.needsUpdate = true;
                }
            }
        }
    }
    cacheSize() {
        return Object.entries(this._materialCache).length;
    }
    createMaterial(type, incomingData, materialData, materialSettings) {
        const { properties, mapCount } = this.getMaterialProperties(materialData, type, materialSettings);
        this.maxMapCount = Math.max(this.maxMapCount, mapCount);
        let material;
        if (type === MATERIAL_TYPE.POINT) {
            if (materialData instanceof viewer_shared_types_1.MaterialMultiPointData) {
                material = new MultiPointsMaterial_1.MultiPointsMaterial(properties);
            }
            else {
                material = new THREE.PointsMaterial(properties);
            }
        }
        else if (type === MATERIAL_TYPE.LINE) {
            material = new THREE.LineBasicMaterial(properties);
        }
        else {
            if (materialData instanceof viewer_shared_types_1.MaterialUnlitData) {
                material = new THREE.MeshBasicMaterial(properties);
            }
            else {
                if (materialData instanceof viewer_shared_types_1.MaterialShadowData) {
                    material = new THREE.ShadowMaterial({ opacity: properties.opacity, color: properties.color });
                }
                else if (materialData instanceof viewer_shared_types_1.MaterialSpecularGlossinessData) {
                    material = new SpecularGlossinessMaterial_1.SpecularGlossinessMaterial(properties);
                }
                else if (materialData instanceof viewer_shared_types_1.MaterialGemData) {
                    material = new GemMaterial_1.GemMaterial(properties);
                }
                else {
                    material = new THREE.MeshPhysicalMaterial(properties);
                }
                const before = material.onBeforeCompile;
                material.onBeforeCompile = (shader, renderer) => {
                    before(shader, renderer);
                    shader.uniforms.lightSizeUV = { value: this._lightSizeUV };
                    shader.uniforms.blending = { value: this._blending };
                    material.userData.shader = shader;
                };
                if (material instanceof SpecularGlossinessMaterial_1.SpecularGlossinessMaterial || material instanceof THREE.MeshPhysicalMaterial) {
                    material.defines['ENVMAP_TYPE_' + this._envMapType.toUpperCase()] = '';
                    if (materialSettings && materialSettings.useVertexTangents)
                        material.normalScale.y *= -1;
                    if (materialSettings && materialSettings.useVertexTangents && material instanceof THREE.MeshPhysicalMaterial)
                        material.clearcoatNormalScale.y *= -1;
                    if (materialSettings && materialSettings.useFlatShading)
                        material.flatShading = true;
                }
            }
        }
        if (materialSettings && materialSettings.useVertexColors)
            material.vertexColors = true;
        if (materialData instanceof viewer_shared_types_1.MaterialStandardData || materialData instanceof viewer_shared_types_1.MaterialGemData || materialData instanceof viewer_shared_types_1.MaterialSpecularGlossinessData || materialData instanceof viewer_shared_types_1.MaterialUnlitData) {
            if (materialData.envMap !== undefined) {
                const envMapInput = materialData.envMap;
                if (envMapInput !== undefined) {
                    const envMapResult = this._renderingEngine.environmentMapLoader.loadEnvMap(envMapInput);
                    envMapResult.map.then(envMap => {
                        if (material instanceof THREE.MeshBasicMaterial && this._renderingEngine.environmentMapForUnlitMaterials === false)
                            return;
                        material.envMap = envMap;
                        const envMapType = material.envMap instanceof THREE.CubeTexture ? EnvironmentMapLoader_1.ENVIRONMENT_MAP_TYPE.LDR : EnvironmentMapLoader_1.ENVIRONMENT_MAP_TYPE.HDR;
                        for (const d in material.defines) {
                            if (d.startsWith('ENVMAP_TYPE_'))
                                delete material.defines[d];
                        }
                        if (material.defines)
                            material.defines['ENVMAP_TYPE_' + envMapType.toUpperCase()] = '';
                        material.needsUpdate = true;
                    });
                }
            }
        }
        if (materialData)
            materialData.convertedObject[this._renderingEngine.id] = material;
        material.needsUpdate = true;
        if (material.userData) {
            material.userData.SDid = incomingData.id;
            material.userData.SDversion = incomingData.version;
        }
        else {
            material.userData = {
                SDid: incomingData.id,
                SDversion: incomingData.version
            };
        }
        return material;
    }
    emptyMaterialCache() {
        this._materialCache = {};
    }
    getMaterialProperties(materialData, type, materialSettings) {
        const generalProperties = {};
        let mapCount = 0;
        // if no MaterialStandardData is provided, we return our default
        if (!materialData) {
            if (type === MATERIAL_TYPE.POINT) {
                return this.getMaterialProperties(this._defaultPointMaterialData, type, materialSettings);
            }
            else if (type === MATERIAL_TYPE.LINE) {
                return this.getMaterialProperties(this._defaultLineMaterialData, type, materialSettings);
            }
            else {
                if (materialSettings !== undefined && materialSettings.useVertexColors) {
                    const currentDefaultMaterialColor = this._defaultMaterialData.color;
                    this._defaultMaterialData.color = '#d3d3d3';
                    const properties = this.getMaterialProperties(this._defaultMaterialData, type, materialSettings);
                    this._defaultMaterialData.color = currentDefaultMaterialColor;
                    return properties;
                }
                else {
                    return this.getMaterialProperties(this._defaultMaterialData, type, materialSettings);
                }
            }
        }
        /**
         * We know evaluate properties that can be applied to all materials
         */
        generalProperties.alphaTest = materialData.alphaCutoff;
        if (materialData.opacity !== undefined) {
            generalProperties.opacity = materialData.opacity;
            generalProperties.transparent = generalProperties.opacity < 1;
        }
        if (materialData.alphaMode === viewer_shared_types_1.MATERIAL_ALPHA.BLEND) {
            generalProperties.transparent = true;
            generalProperties.depthWrite = false;
        }
        else if (!generalProperties.transparent) {
            generalProperties.transparent = false;
        }
        if (materialData.depthTest !== undefined) {
            generalProperties.depthTest = materialData.depthTest;
        }
        if (materialData.depthWrite !== undefined) {
            generalProperties.depthWrite = materialData.depthWrite;
        }
        if (materialData.transparent !== undefined) {
            generalProperties.transparent = materialData.transparent;
        }
        if (materialData.color !== undefined)
            generalProperties.color = this._renderingEngine.createThreeJsColor(materialData.color);
        if (materialData.color === undefined && materialData.map !== undefined && materialData.map.color !== undefined)
            generalProperties.color = this._renderingEngine.createThreeJsColor(materialData.map.color);
        if (materialData.color === undefined && materialData.map !== undefined && materialData.map.color === undefined && !(materialSettings !== undefined && materialSettings.useVertexColors))
            generalProperties.color = this._renderingEngine.createThreeJsColor(this._renderingEngine.defaultMaterialColor);
        if ((materialSettings !== undefined && materialSettings.useVertexColors) && (materialData.color === this._converter.toHexColor(this._renderingEngine.defaultMaterialColor) || materialData.color + 'ff' === this._converter.toHexColor(this._renderingEngine.defaultMaterialColor) || materialData.color === this._renderingEngine.defaultMaterialColor || materialData.color === this._renderingEngine.defaultMaterialColor + 'ff' || materialData.color === undefined))
            generalProperties.color = this._renderingEngine.createThreeJsColor('#d3d3d3');
        if (materialData.side !== undefined)
            generalProperties.side = materialData.side === viewer_shared_types_1.MATERIAL_SIDE.BACK ? THREE.BackSide : materialData.side === viewer_shared_types_1.MATERIAL_SIDE.FRONT ? THREE.FrontSide : THREE.DoubleSide;
        /**
         *
         * First exit, lines ans points
         *
         */
        if (type === MATERIAL_TYPE.POINT) {
            if (materialData instanceof viewer_shared_types_1.MaterialPointData) {
                const pointMaterialProperties = generalProperties;
                pointMaterialProperties.size = materialData.size !== undefined ? materialData.size : this._pointSize;
                pointMaterialProperties.userData = {
                    customPointSizeEnabled: materialData.size !== undefined,
                    customPointSize: materialData.size
                };
                pointMaterialProperties.sizeAttenuation = materialData.sizeAttenuation !== undefined ? materialData.sizeAttenuation : true;
                if (materialData.map !== undefined) {
                    pointMaterialProperties.map = this.createTexture(materialData.map);
                    mapCount++;
                }
                if (materialData.alphaMap !== undefined) {
                    pointMaterialProperties.alphaMap = this.createTexture(materialData.alphaMap);
                    pointMaterialProperties.transparent = true;
                    pointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
            }
            else if (materialData instanceof viewer_shared_types_1.MaterialMultiPointData) {
                const multiPointMaterialProperties = generalProperties;
                if (materialData.materialIndexDataMap) {
                    multiPointMaterialProperties.materialIndexDataTexture = this.createTexture(materialData.materialIndexDataMap);
                }
                else {
                    multiPointMaterialProperties.materialIndexDataTexture =
                        new THREE.DataTexture(new Uint8Array(multiPointMaterialProperties.materialIndexDataTextureSize || 1024), multiPointMaterialProperties.materialIndexDataTextureSize || 1024, 1, THREE.RedIntegerFormat, THREE.UnsignedIntType);
                    multiPointMaterialProperties.materialIndexDataTexture.internalFormat = 'R32UI';
                }
                multiPointMaterialProperties.size_0 = materialData.size_0 !== undefined ? materialData.size_0 : this._pointSize;
                multiPointMaterialProperties.size_1 = materialData.size_1 !== undefined ? materialData.size_1 : this._pointSize;
                multiPointMaterialProperties.size_2 = materialData.size_2 !== undefined ? materialData.size_2 : this._pointSize;
                multiPointMaterialProperties.size_3 = materialData.size_3 !== undefined ? materialData.size_3 : this._pointSize;
                multiPointMaterialProperties.size_4 = materialData.size_4 !== undefined ? materialData.size_4 : this._pointSize;
                multiPointMaterialProperties.size_5 = materialData.size_5 !== undefined ? materialData.size_5 : this._pointSize;
                multiPointMaterialProperties.size_6 = materialData.size_6 !== undefined ? materialData.size_6 : this._pointSize;
                multiPointMaterialProperties.size_7 = materialData.size_7 !== undefined ? materialData.size_7 : this._pointSize;
                multiPointMaterialProperties.userData = {
                    customPointSize_0Enabled: materialData.size_0 !== undefined,
                    customPointSize_1Enabled: materialData.size_1 !== undefined,
                    customPointSize_2Enabled: materialData.size_2 !== undefined,
                    customPointSize_3Enabled: materialData.size_3 !== undefined,
                    customPointSize_4Enabled: materialData.size_4 !== undefined,
                    customPointSize_5Enabled: materialData.size_5 !== undefined,
                    customPointSize_6Enabled: materialData.size_6 !== undefined,
                    customPointSize_7Enabled: materialData.size_7 !== undefined,
                    customPointSize_0: materialData.size_0,
                    customPointSize_1: materialData.size_1,
                    customPointSize_2: materialData.size_2,
                    customPointSize_3: materialData.size_3,
                    customPointSize_4: materialData.size_4,
                    customPointSize_5: materialData.size_5,
                    customPointSize_6: materialData.size_6,
                    customPointSize_7: materialData.size_7
                };
                multiPointMaterialProperties.sizeAttenuation_0 = materialData.sizeAttenuation_0 !== undefined ? materialData.sizeAttenuation_0 : false;
                multiPointMaterialProperties.sizeAttenuation_1 = materialData.sizeAttenuation_1 !== undefined ? materialData.sizeAttenuation_1 : false;
                multiPointMaterialProperties.sizeAttenuation_2 = materialData.sizeAttenuation_2 !== undefined ? materialData.sizeAttenuation_2 : false;
                multiPointMaterialProperties.sizeAttenuation_3 = materialData.sizeAttenuation_3 !== undefined ? materialData.sizeAttenuation_3 : false;
                multiPointMaterialProperties.sizeAttenuation_4 = materialData.sizeAttenuation_4 !== undefined ? materialData.sizeAttenuation_4 : false;
                multiPointMaterialProperties.sizeAttenuation_5 = materialData.sizeAttenuation_5 !== undefined ? materialData.sizeAttenuation_5 : false;
                multiPointMaterialProperties.sizeAttenuation_6 = materialData.sizeAttenuation_6 !== undefined ? materialData.sizeAttenuation_6 : false;
                multiPointMaterialProperties.sizeAttenuation_7 = materialData.sizeAttenuation_7 !== undefined ? materialData.sizeAttenuation_7 : false;
                if (materialData.map_0 !== undefined) {
                    multiPointMaterialProperties.map_0 = this.createTexture(materialData.map_0);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_1 !== undefined) {
                    multiPointMaterialProperties.map_1 = this.createTexture(materialData.map_1);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_2 !== undefined) {
                    multiPointMaterialProperties.map_2 = this.createTexture(materialData.map_2);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_3 !== undefined) {
                    multiPointMaterialProperties.map_3 = this.createTexture(materialData.map_3);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_4 !== undefined) {
                    multiPointMaterialProperties.map_4 = this.createTexture(materialData.map_4);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_5 !== undefined) {
                    multiPointMaterialProperties.map_5 = this.createTexture(materialData.map_5);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_6 !== undefined) {
                    multiPointMaterialProperties.map_6 = this.createTexture(materialData.map_6);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.map_7 !== undefined) {
                    multiPointMaterialProperties.map_7 = this.createTexture(materialData.map_7);
                    multiPointMaterialProperties.map = multiPointMaterialProperties.map_0;
                    mapCount++;
                }
                if (materialData.alphaMap_0 !== undefined) {
                    multiPointMaterialProperties.alphaMap_0 = this.createTexture(materialData.alphaMap_0);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_1 !== undefined) {
                    multiPointMaterialProperties.alphaMap_1 = this.createTexture(materialData.alphaMap_1);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_2 !== undefined) {
                    multiPointMaterialProperties.alphaMap_2 = this.createTexture(materialData.alphaMap_2);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_3 !== undefined) {
                    multiPointMaterialProperties.alphaMap_3 = this.createTexture(materialData.alphaMap_3);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_4 !== undefined) {
                    multiPointMaterialProperties.alphaMap_4 = this.createTexture(materialData.alphaMap_4);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_5 !== undefined) {
                    multiPointMaterialProperties.alphaMap_5 = this.createTexture(materialData.alphaMap_5);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_6 !== undefined) {
                    multiPointMaterialProperties.alphaMap_6 = this.createTexture(materialData.alphaMap_6);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.alphaMap_7 !== undefined) {
                    multiPointMaterialProperties.alphaMap_7 = this.createTexture(materialData.alphaMap_7);
                    multiPointMaterialProperties.alphaMap = multiPointMaterialProperties.alphaMap_0;
                    multiPointMaterialProperties.transparent = true;
                    multiPointMaterialProperties.depthWrite = false;
                    mapCount++;
                }
                if (materialData.color_0 !== undefined) {
                    multiPointMaterialProperties.color_0 = this._renderingEngine.createThreeJsColor(materialData.color_0);
                }
                if (materialData.color_1 !== undefined) {
                    multiPointMaterialProperties.color_1 = this._renderingEngine.createThreeJsColor(materialData.color_1);
                }
                if (materialData.color_2 !== undefined) {
                    multiPointMaterialProperties.color_2 = this._renderingEngine.createThreeJsColor(materialData.color_2);
                }
                if (materialData.color_3 !== undefined) {
                    multiPointMaterialProperties.color_3 = this._renderingEngine.createThreeJsColor(materialData.color_3);
                }
                if (materialData.color_4 !== undefined) {
                    multiPointMaterialProperties.color_4 = this._renderingEngine.createThreeJsColor(materialData.color_4);
                }
                if (materialData.color_5 !== undefined) {
                    multiPointMaterialProperties.color_5 = this._renderingEngine.createThreeJsColor(materialData.color_5);
                }
                if (materialData.color_6 !== undefined) {
                    multiPointMaterialProperties.color_6 = this._renderingEngine.createThreeJsColor(materialData.color_6);
                }
                if (materialData.color_7 !== undefined) {
                    multiPointMaterialProperties.color_7 = this._renderingEngine.createThreeJsColor(materialData.color_7);
                }
            }
            else {
                const pointMaterialProperties = generalProperties;
                pointMaterialProperties.size = this._pointSize;
            }
            return { properties: generalProperties, mapCount };
        }
        else if (type === MATERIAL_TYPE.LINE) {
            return { properties: generalProperties, mapCount };
        }
        /**
         *
         * Second exit, the shadow material
         *
         */
        if (materialData instanceof viewer_shared_types_1.MaterialShadowData)
            return { properties: generalProperties, mapCount };
        /**
         * We know evaluate properties that can be applied to basic mesh materials (and the ones extending from them)
         */
        const basicProperties = generalProperties;
        if (materialData.alphaMap !== undefined) {
            basicProperties.alphaMap = this.createTexture(materialData.alphaMap);
            basicProperties.transparent = true;
            basicProperties.depthWrite = false;
            mapCount++;
        }
        if (materialData.aoMap !== undefined) {
            basicProperties.aoMap = this.createTexture(materialData.aoMap);
            mapCount++;
        }
        if (materialData.aoMapIntensity !== undefined) {
            basicProperties.aoMapIntensity = materialData.aoMapIntensity;
        }
        if (materialData.map !== undefined) {
            basicProperties.map = this.createTexture(materialData.map);
            basicProperties.map.colorSpace = this._textureEncoding;
            mapCount++;
        }
        /**
         *
         * Third exit, the unlit material
         *
         */
        if (materialData instanceof viewer_shared_types_1.MaterialUnlitData)
            return { properties: basicProperties, mapCount };
        /**
         * We know evaluate properties that can be applied to MeshPhysicalMaterials, SpecularGlossinessMaterials and GemMaterialParameters
         */
        const standardProperties = basicProperties;
        if (materialData.shading !== undefined)
            standardProperties.flatShading = materialData.shading !== 'smooth';
        if (materialData.bumpMap !== undefined) {
            standardProperties.bumpMap = this.createTexture(materialData.bumpMap);
            mapCount++;
        }
        standardProperties.bumpScale = materialData.bumpScale;
        if (materialData.emissiveness !== undefined)
            standardProperties.emissive = this._renderingEngine.createThreeJsColor(materialData.emissiveness);
        if (materialData.emissiveMap !== undefined) {
            standardProperties.emissiveMap = this.createTexture(materialData.emissiveMap);
            standardProperties.emissiveMap.colorSpace = this._textureEncoding;
            mapCount++;
        }
        standardProperties.envMap = this._envMap;
        standardProperties.envMapIntensity = this._envMapIntensity;
        standardProperties.envMapRotation = this._environmentMapRotationEuler;
        if (materialData.normalMap !== undefined) {
            standardProperties.normalMap = this.createTexture(materialData.normalMap);
            mapCount++;
        }
        if (materialData.normalScale !== undefined)
            standardProperties.normalScale = new THREE.Vector2(materialData.normalScale, -materialData.normalScale);
        /**
         *
         * Fourth exit, the specular-glossiness material
         *
         */
        if (materialData instanceof viewer_shared_types_1.MaterialSpecularGlossinessData) {
            const specularGlossinessProperties = standardProperties;
            specularGlossinessProperties.specular = this._renderingEngine.createThreeJsColor(materialData.specular);
            specularGlossinessProperties.glossiness = materialData.glossiness;
            if (materialData.specularGlossinessMap !== undefined) {
                specularGlossinessProperties.specularMap2 = this.createTexture(materialData.specularGlossinessMap);
                specularGlossinessProperties.specularMap2.colorSpace = THREE.SRGBColorSpace;
                specularGlossinessProperties.glossinessMap = specularGlossinessProperties.specularMap2;
                mapCount++;
            }
            else {
                if (materialData.specularMap !== undefined) {
                    specularGlossinessProperties.specularMap2 = this.createTexture(materialData.specularMap);
                    specularGlossinessProperties.specularMap2.colorSpace = THREE.SRGBColorSpace;
                    mapCount++;
                }
                if (materialData.glossinessMap !== undefined) {
                    specularGlossinessProperties.glossinessMap = this.createTexture(materialData.glossinessMap);
                    mapCount++;
                }
            }
            return { properties: specularGlossinessProperties, mapCount };
        }
        /**
         *
         * Fourth exit, the gem material
         *
         */
        if (materialData instanceof viewer_shared_types_1.MaterialGemData) {
            const gemProperties = standardProperties;
            gemProperties.refractionIndex = materialData.refractionIndex;
            if (materialData.impurityMap !== undefined) {
                gemProperties.impurityMap = this.createTexture(materialData.impurityMap);
                mapCount++;
            }
            gemProperties.impurityScale = materialData.impurityScale;
            if (materialData.colorTransferBegin !== undefined) {
                gemProperties.colorTransferBegin = this._renderingEngine.createThreeJsColor(materialData.colorTransferBegin);
            }
            if (materialData.colorTransferEnd !== undefined) {
                gemProperties.colorTransferEnd = this._renderingEngine.createThreeJsColor(materialData.colorTransferEnd);
            }
            gemProperties.center = new THREE.Vector3(materialData.center[0], materialData.center[1], materialData.center[2]);
            gemProperties.tracingDepth = materialData.tracingDepth;
            gemProperties.radius = materialData.radius;
            gemProperties.sphericalNormalMap = materialData.sphericalNormalMap;
            gemProperties.gamma = materialData.gamma;
            gemProperties.contrast = materialData.contrast;
            gemProperties.brightness = materialData.brightness;
            gemProperties.dispersion = materialData.dispersion;
            gemProperties.tracingOpacity = materialData.tracingOpacity;
            gemProperties.roughness = 0;
            gemProperties.metalness = 1;
            gemProperties.transparent = true;
            gemProperties.opacity = 1.0;
            gemProperties.side = THREE.FrontSide;
            return { properties: gemProperties, mapCount };
        }
        /**
         *
         * the final exit, the MeshPhysicalMaterial
         *
         */
        if (materialData instanceof viewer_shared_types_1.MaterialStandardData) {
            const meshPhysicalProperties = standardProperties;
            meshPhysicalProperties.clearcoat = materialData.clearcoat;
            if (materialData.clearcoatMap !== undefined) {
                meshPhysicalProperties.clearcoatMap = this.createTexture(materialData.clearcoatMap);
                mapCount++;
            }
            if (materialData.clearcoatNormalMap !== undefined) {
                meshPhysicalProperties.clearcoatNormalMap = this.createTexture(materialData.clearcoatNormalMap);
                mapCount++;
            }
            meshPhysicalProperties.clearcoatRoughness = materialData.clearcoatRoughness;
            if (materialData.clearcoatRoughnessMap !== undefined) {
                meshPhysicalProperties.clearcoatRoughnessMap = this.createTexture(materialData.clearcoatRoughnessMap);
                mapCount++;
            }
            if (materialData.displacementMap !== undefined) {
                meshPhysicalProperties.displacementMap = this.createTexture(materialData.displacementMap);
                mapCount++;
            }
            meshPhysicalProperties.displacementScale = materialData.displacementScale;
            meshPhysicalProperties.displacementBias = materialData.displacementBias;
            meshPhysicalProperties.ior = materialData.ior;
            meshPhysicalProperties.transmission = materialData.transmission;
            if (materialData.transmissionMap !== undefined) {
                meshPhysicalProperties.transmissionMap = this.createTexture(materialData.transmissionMap);
                mapCount++;
            }
            meshPhysicalProperties.thickness = materialData.thickness;
            if (materialData.thicknessMap !== undefined) {
                meshPhysicalProperties.thicknessMap = this.createTexture(materialData.thicknessMap);
                mapCount++;
            }
            meshPhysicalProperties.attenuationDistance = materialData.attenuationDistance;
            meshPhysicalProperties.attenuationColor = this._renderingEngine.createThreeJsColor(materialData.attenuationColor);
            meshPhysicalProperties.sheen = materialData.sheen;
            meshPhysicalProperties.sheenColor = this._renderingEngine.createThreeJsColor(materialData.sheenColor);
            meshPhysicalProperties.sheenRoughness = materialData.sheenRoughness;
            if (materialData.sheenColorMap !== undefined) {
                meshPhysicalProperties.sheenColorMap = this.createTexture(materialData.sheenColorMap);
                mapCount++;
            }
            if (materialData.sheenRoughnessMap !== undefined) {
                meshPhysicalProperties.sheenRoughnessMap = this.createTexture(materialData.sheenRoughnessMap);
                mapCount++;
            }
            meshPhysicalProperties.specularIntensity = materialData.specularIntensity;
            if (materialData.specularIntensityMap !== undefined) {
                meshPhysicalProperties.specularIntensityMap = this.createTexture(materialData.specularIntensityMap);
                mapCount++;
            }
            meshPhysicalProperties.specularColor = this._renderingEngine.createThreeJsColor(materialData.specularColor);
            if (materialData.specularColorMap !== undefined) {
                meshPhysicalProperties.specularColorMap = this.createTexture(materialData.specularColorMap);
                mapCount++;
            }
            meshPhysicalProperties.metalness = materialData.metalness;
            meshPhysicalProperties.roughness = materialData.roughness;
            if (materialData.metalnessRoughnessMap !== undefined) {
                meshPhysicalProperties.metalnessMap = this.createTexture(materialData.metalnessRoughnessMap);
                meshPhysicalProperties.roughnessMap = meshPhysicalProperties.metalnessMap;
                mapCount++;
            }
            else {
                if (materialData.metalnessMap !== undefined) {
                    meshPhysicalProperties.metalnessMap = this.createTexture(materialData.metalnessMap);
                    mapCount++;
                }
                if (materialData.roughnessMap !== undefined) {
                    meshPhysicalProperties.roughnessMap = this.createTexture(materialData.roughnessMap);
                    mapCount++;
                }
            }
            return { properties: meshPhysicalProperties, mapCount };
        }
        // we should never get here
        throw new viewer_shared_services_1.ShapeDiverViewerDataProcessingError('MaterialLoader.getMaterialProperties: No proper material properties were found.');
    }
    init() { }
    /**
       * Create a material object with the provided material data.
       *
       * @param material the material data
       * @returns the material object
       */
    load(incomingData, materialSettings) {
        let materialData = null;
        if (!(incomingData instanceof viewer_shared_types_1.GeometryData))
            materialData = incomingData;
        // evaluate which type of material properties we are constructing
        let type;
        if (materialSettings && materialSettings.mode === 0) {
            type = MATERIAL_TYPE.POINT;
        }
        else if (materialSettings && (materialSettings.mode === 1 || materialSettings.mode === 2 || materialSettings.mode === 3)) {
            type = MATERIAL_TYPE.LINE;
        }
        else {
            type = MATERIAL_TYPE.MESH;
        }
        const material = this.createMaterial(type, incomingData, materialData, materialSettings);
        const cacheKey = this.createDataKeyFromMaterial(incomingData, type, materialSettings);
        if (this._materialCache[cacheKey]) {
            this._materialCache[cacheKey].material.copy(material);
            return this._materialCache[cacheKey].material;
        }
        this._materialCache[cacheKey] = {
            material,
            materialData,
            materialSettings
        };
        return material;
    }
    removeFromMaterialCache(id) {
        for (const cacheKey in this._materialCache) {
            const decodedCacheKey = (0, viewer_shared_services_1.atobCustom)(cacheKey);
            if (decodedCacheKey.startsWith(id)) {
                this._materialCache[cacheKey].material.dispose();
                delete this._materialCache[cacheKey];
            }
        }
    }
    updateMaterials() {
        for (const cacheKey in this._materialCache)
            this._materialCache[cacheKey].material.needsUpdate = true;
    }
    updateSoftShadow(lightSizeUV, blending) {
        this._lightSizeUV = lightSizeUV;
        this._blending = blending;
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material.userData.shader) {
                this._materialCache[cacheKey].material.userData.shader.uniforms.lightSizeUV.value = lightSizeUV;
                this._materialCache[cacheKey].material.userData.shader.uniforms.blending.value = blending;
            }
        }
    }
    // #endregion Public Methods (18)
    // #region Private Methods (4)
    assignTextureEncoding() {
        for (const cacheKey in this._materialCache) {
            if (this._materialCache[cacheKey].material instanceof THREE.MeshPhysicalMaterial || this._materialCache[cacheKey].material instanceof THREE.MeshStandardMaterial) {
                const material = this._materialCache[cacheKey].material;
                if (material.emissiveMap) {
                    material.emissiveMap.colorSpace = this._textureEncoding;
                    material.emissiveMap.needsUpdate = true;
                }
                if (material.map) {
                    material.map.colorSpace = this._textureEncoding;
                    material.map.needsUpdate = true;
                }
                material.needsUpdate = true;
            }
        }
    }
    createDataKeyFromMap(map) {
        return (0, viewer_shared_services_1.btoaCustom)(`${map.image.src}_${map.center}_${map.color}_${map.flipY}_${map.magFilter}_${map.minFilter}_${map.offset}_${map.repeat}_${map.rotation}_${map.texCoord}_${map.wrapS}_${map.wrapT}`);
    }
    createDataKeyFromMaterial(data, type, materialSettings) {
        return data ? (0, viewer_shared_services_1.btoaCustom)(data.id + '_' + data.version + '_' + type + '_' + JSON.stringify(materialSettings)) : (0, viewer_shared_services_1.btoaCustom)(type + '_' + JSON.stringify(materialSettings));
    }
    createTexture(map) {
        if (map.image instanceof ArrayBuffer)
            return new THREE.Texture();
        const key = this.createDataKeyFromMap(map);
        // texture in this structure are only stored until the next scene tree update call
        // therefore no cache management is needed, as these textures need to be created either way
        // the cache is cleared in updateSceneTree
        if (this._threeJsTextureCache[key]) {
            this._threeJsTextureCache[key].usage++;
            return this._threeJsTextureCache[key].texture;
        }
        let texture;
        if (map.asData === true) {
            texture = new THREE.DataTexture(new Uint32Array(map.data), map.data.length, 1, THREE.RedIntegerFormat, THREE.UnsignedIntType);
            texture.internalFormat = 'R32UI';
        }
        else {
            texture = new THREE.Texture(map.image);
            texture.format = THREE.RGBAFormat;
            texture.minFilter = (() => {
                switch (map.minFilter) {
                    case viewer_shared_types_1.TEXTURE_FILTERING.NEAREST:
                        return THREE.NearestFilter;
                    case viewer_shared_types_1.TEXTURE_FILTERING.NEAREST_MIPMAP_NEAREST:
                        return THREE.NearestMipMapNearestFilter;
                    case viewer_shared_types_1.TEXTURE_FILTERING.LINEAR_MIPMAP_NEAREST:
                        return THREE.LinearMipMapNearestFilter;
                    case viewer_shared_types_1.TEXTURE_FILTERING.NEAREST_MIPMAP_LINEAR:
                        return THREE.NearestMipMapLinearFilter;
                    case viewer_shared_types_1.TEXTURE_FILTERING.LINEAR:
                        return THREE.LinearFilter;
                    case viewer_shared_types_1.TEXTURE_FILTERING.LINEAR_MIPMAP_LINEAR:
                    default:
                        return THREE.LinearMipMapLinearFilter;
                }
            })();
            texture.magFilter = (() => {
                switch (map.magFilter) {
                    case viewer_shared_types_1.TEXTURE_FILTERING.NEAREST:
                        return THREE.NearestFilter;
                    case viewer_shared_types_1.TEXTURE_FILTERING.LINEAR:
                    default:
                        return THREE.LinearFilter;
                }
            })();
            texture.wrapS = (() => {
                switch (map.wrapS) {
                    case viewer_shared_types_1.TEXTURE_WRAPPING.CLAMP_TO_EDGE:
                        return THREE.ClampToEdgeWrapping;
                    case viewer_shared_types_1.TEXTURE_WRAPPING.MIRRORED_REPEAT:
                        return THREE.MirroredRepeatWrapping;
                    case viewer_shared_types_1.TEXTURE_WRAPPING.REPEAT:
                    default:
                        return THREE.RepeatWrapping;
                }
            })();
            texture.wrapT = (() => {
                switch (map.wrapT) {
                    case viewer_shared_types_1.TEXTURE_WRAPPING.CLAMP_TO_EDGE:
                        return THREE.ClampToEdgeWrapping;
                    case viewer_shared_types_1.TEXTURE_WRAPPING.MIRRORED_REPEAT:
                        return THREE.MirroredRepeatWrapping;
                    case viewer_shared_types_1.TEXTURE_WRAPPING.REPEAT:
                    default:
                        return THREE.RepeatWrapping;
                }
            })();
            texture.center = new THREE.Vector2(map.center[0], map.center[1]);
            texture.offset = new THREE.Vector2(map.offset[0], map.offset[1]);
            texture.repeat = new THREE.Vector2(map.repeat[0], map.repeat[1]);
            texture.rotation = map.rotation;
            if (map.texCoord !== undefined)
                texture.channel = map.texCoord;
            texture.flipY = map.flipY;
        }
        texture.needsUpdate = true;
        texture.userData.cacheKey = key;
        this._threeJsTextureCache[key] = {
            texture,
            usage: 1,
            initialized: false
        };
        return this._threeJsTextureCache[key].texture;
    }
}
exports.MaterialLoader = MaterialLoader;
// #endregion Classes (1)
// #region Enums (1)
/* eslint-disable @typescript-eslint/no-empty-function */
var MATERIAL_TYPE;
(function (MATERIAL_TYPE) {
    MATERIAL_TYPE["POINT"] = "point";
    MATERIAL_TYPE["LINE"] = "line";
    MATERIAL_TYPE["MESH"] = "mesh";
})(MATERIAL_TYPE = exports.MATERIAL_TYPE || (exports.MATERIAL_TYPE = {}));
// #endregion Enums (1)
// #region Variables (1)
const adaptShaders = () => {
    let shader = THREE.ShaderChunk.shadowmap_pars_fragment;
    if (!shader.includes('PCSS implementation')) {
        shader = shader.replace('#ifdef USE_SHADOWMAP', '#ifdef USE_SHADOWMAP' + PCSS_1.main);
        shader = shader.replace(shader.substr(shader.indexOf('#if defined( SHADOWMAP_TYPE_PCF )'), shader.indexOf('#elif defined( SHADOWMAP_TYPE_PCF_SOFT )') - shader.indexOf('#if defined( SHADOWMAP_TYPE_PCF )')), '#if defined( SHADOWMAP_TYPE_PCF )\n' + PCSS_1.entry);
    }
    THREE.ShaderChunk.shadowmap_pars_fragment = shader;
    // here we replace in the background cube fragment shader the y component of the reflection vector with the negative y component and inverse the rotation in the case of a LDR environment map
    // console.log(THREE.ShaderChunk.backgroundCube_frag.includes('vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );'))
    THREE.ShaderChunk.backgroundCube_frag = THREE.ShaderChunk.backgroundCube_frag.replace('vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );', 'vec4 texColor = textureCube( envMap, inverse(backgroundRotation) * vec3( flipEnvMap * vWorldDirection.x, -vWorldDirection.y, vWorldDirection.z ) );');
    THREE.ShaderLib.backgroundCube.fragmentShader = THREE.ShaderChunk.backgroundCube_frag;
    // here we replace in the envmap_physical_pars_fragment the z component of the reflection vector with the negative z component in the case of a LDR environment map
    // console.log(THREE.ShaderChunk.envmap_physical_pars_fragment, THREE.ShaderChunk.envmap_physical_pars_fragment.includes('vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );'));
    THREE.ShaderChunk.envmap_physical_pars_fragment = THREE.ShaderChunk.envmap_physical_pars_fragment.replace('vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );', `
            #ifdef ENVMAP_TYPE_LDR
                vec3 rotatedReflectVec = vec3(envMapRotation * worldNormal).xzy;
                vec4 envMapColor = textureCubeUV( envMap, vec3(rotatedReflectVec.xy, -rotatedReflectVec.z), 1.0 );
            #else
                vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
            #endif
            `);
    // here we replace in the envmap_fragment the z component of the reflection vector with the negative z component in the case of a LDR environment map
    // console.log(THREE.ShaderChunk.envmap_physical_pars_fragment, THREE.ShaderChunk.envmap_physical_pars_fragment.includes('vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );'));
    THREE.ShaderChunk.envmap_physical_pars_fragment = THREE.ShaderChunk.envmap_physical_pars_fragment.replace('vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );', `
            #ifdef ENVMAP_TYPE_LDR
                vec3 rotatedReflectVec = vec3(envMapRotation * reflectVec).xzy;
                vec4 envMapColor = textureCubeUV( envMap, vec3(rotatedReflectVec.xy, -rotatedReflectVec.z), roughness );
            #else
                vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
            #endif
            `);
    // here we replace in the envmap_fragment the z component of the reflection vector with the negative z component in the case of a LDR environment map
    // console.log(THREE.ShaderChunk.envmap_fragment, THREE.ShaderChunk.envmap_fragment.includes('vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );'));
    THREE.ShaderChunk.envmap_fragment = THREE.ShaderChunk.envmap_fragment.replace('vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );', `
        #ifdef ENVMAP_TYPE_LDR
            vec4 envColor = textureCube( envMap, envMapRotation * vec3(flipEnvMap * reflectVec.x, reflectVec.y, -reflectVec.z ) );
        #else
            vec4 envColor = textureCube( envMap, envMapRotation * vec3( -flipEnvMap * reflectVec.x, reflectVec.zy ) );
        #endif
        `);
    // here we replace the z and y component of the sampleDir in the cube_uv_reflection_fragment
    // console.log(THREE.ShaderChunk.cube_uv_reflection_fragment.includes('vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );'))
    THREE.ShaderChunk.cube_uv_reflection_fragment = THREE.ShaderChunk.cube_uv_reflection_fragment.replace('vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );', 'vec3 color0 = bilinearCubeUV( envMap, sampleDir.xzy, mipInt );');
    // here we replace the z and y component of the sampleDir in the cube_uv_reflection_fragment
    // console.log(THREE.ShaderChunk.cube_uv_reflection_fragment)
    THREE.ShaderChunk.cube_uv_reflection_fragment = THREE.ShaderChunk.cube_uv_reflection_fragment.replace('vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );', 'vec3 color1 = bilinearCubeUV( envMap, sampleDir.xzy, mipInt + 1.0 );');
    // here we create a new case in the lights_fragment_maps for the case of ENVMAP_TYPE_NONE
    if (!THREE.ShaderChunk.lights_fragment_maps.includes('vec3 reflectVec')) {
        const index = THREE.ShaderChunk.lights_fragment_maps.lastIndexOf('#endif');
        THREE.ShaderChunk.lights_fragment_maps = THREE.ShaderChunk.lights_fragment_maps.substring(0, index) +
            `#else
            #ifdef ENVMAP_TYPE_NONE
                vec3 reflectVec = reflect( -geometryViewDir, geometryNormal );
                reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
                vec4 adjustedEnvReflectVector = vec4(reflectVec, 1.0);
                radiance += (vec3((adjustedEnvReflectVector.z + 1.0) / 2.0) + 0.5) / 1.5;
            #endif
        #endif
        ` + THREE.ShaderChunk.lights_fragment_maps.substring(index + '#endif'.length);
    }
};
exports.adaptShaders = adaptShaders;
// #endregion Variables (1)
//# sourceMappingURL=MaterialLoader.js.map

/***/ }),

/***/ 58767:
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
var _CameraManager_camera, _CameraManager_cameraCache;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
const gl_matrix_1 = __webpack_require__(61961);
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
class CameraManager {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (2)
        _CameraManager_camera.set(this, new THREE.PerspectiveCamera());
        _CameraManager_cameraCache.set(this, {});
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (1)
    get camera() {
        return __classPrivateFieldGet(this, _CameraManager_camera, "f");
    }
    // #endregion Public Getters And Setters (1)
    // #region Public Methods (4)
    adjustCamera(aspect) {
        let cameraThree;
        let matrix;
        const camera = this._renderingEngine.cameraEngine.camera;
        if (camera.useNodeData) {
            const sdCameraNode = camera.convertedObject[this._renderingEngine.id];
            const sdCameraData = sdCameraNode.children[0];
            cameraThree = sdCameraData.children[0];
        }
        else {
            if (this._renderingEngine.cameraEngine.camera.type === viewer_rendering_engine_camera_engine_1.CAMERA_TYPE.ORTHOGRAPHIC) {
                const orthographicCameraData = camera;
                let orthographicCameraThreeJs = orthographicCameraData.convertedObject[this._renderingEngine.id];
                if (!orthographicCameraThreeJs)
                    this.load(orthographicCameraData);
                orthographicCameraThreeJs = orthographicCameraData.convertedObject[this._renderingEngine.id];
                const distance = gl_matrix_1.vec3.distance(orthographicCameraData.position, orthographicCameraData.target) / 2;
                orthographicCameraThreeJs.up.set(orthographicCameraData.up[0], orthographicCameraData.up[1], orthographicCameraData.up[2]);
                orthographicCameraThreeJs.left = orthographicCameraData.left = -distance * aspect;
                orthographicCameraThreeJs.bottom = orthographicCameraData.bottom = -distance;
                orthographicCameraThreeJs.right = orthographicCameraData.right = distance * aspect;
                orthographicCameraThreeJs.top = orthographicCameraData.top = distance;
                orthographicCameraThreeJs.near = orthographicCameraData.near = 0.01;
                orthographicCameraThreeJs.far = orthographicCameraData.far = 100 * distance;
                orthographicCameraThreeJs.position.set(orthographicCameraData.position[0], orthographicCameraData.position[1], orthographicCameraData.position[2]);
                orthographicCameraThreeJs.lookAt(orthographicCameraData.target[0], orthographicCameraData.target[1], orthographicCameraData.target[2]);
                orthographicCameraThreeJs.updateProjectionMatrix();
                if (orthographicCameraData.controls.enableTurntableControls === true) {
                    matrix = gl_matrix_1.mat4.create();
                    gl_matrix_1.mat4.rotateZ(matrix, matrix, -orthographicCameraData.sceneRotation[1]);
                    gl_matrix_1.mat4.translate(matrix, matrix, orthographicCameraData.controls.turntableCenter);
                }
                else if (orthographicCameraData.controls.enableObjectControls === true) {
                    matrix = gl_matrix_1.mat4.create();
                    gl_matrix_1.mat4.rotateX(matrix, matrix, -orthographicCameraData.sceneRotation[0]);
                    gl_matrix_1.mat4.rotateZ(matrix, matrix, -orthographicCameraData.sceneRotation[1]);
                    gl_matrix_1.mat4.translate(matrix, matrix, orthographicCameraData.controls.objectControlsCenter);
                }
                cameraThree = orthographicCameraThreeJs;
            }
            else {
                const perspectiveCameraData = camera;
                let perspectiveCameraThreeJs = perspectiveCameraData.convertedObject[this._renderingEngine.id];
                if (!perspectiveCameraThreeJs)
                    this.load(perspectiveCameraData);
                perspectiveCameraThreeJs = perspectiveCameraData.convertedObject[this._renderingEngine.id];
                perspectiveCameraThreeJs.up.set(0, 0, 1);
                const fov = this._renderingEngine.cameraEngine.camera.fov;
                const bs = this._renderingEngine.sceneTreeManager.boundingBox.boundingSphere;
                const radius = bs.radius > 0 ? bs.radius : 2;
                perspectiveCameraThreeJs.fov = perspectiveCameraData.fov = fov;
                perspectiveCameraThreeJs.aspect = perspectiveCameraData.aspect = aspect;
                perspectiveCameraThreeJs.far = perspectiveCameraData.far = (fov < 10 ? fov * 100.0 * 100 * radius : 100 * radius);
                perspectiveCameraThreeJs.near = perspectiveCameraData.near = (fov < 10 ? fov * 100.0 * 0.01 * radius : 0.01 * radius);
                perspectiveCameraThreeJs.position.set(perspectiveCameraData.position[0], perspectiveCameraData.position[1], perspectiveCameraData.position[2]);
                perspectiveCameraThreeJs.lookAt(perspectiveCameraData.target[0], perspectiveCameraData.target[1], perspectiveCameraData.target[2]);
                perspectiveCameraThreeJs.updateProjectionMatrix();
                if (perspectiveCameraData.controls.enableTurntableControls === true) {
                    matrix = gl_matrix_1.mat4.create();
                    gl_matrix_1.mat4.rotateZ(matrix, matrix, -perspectiveCameraData.sceneRotation[1]);
                    gl_matrix_1.mat4.translate(matrix, matrix, perspectiveCameraData.controls.turntableCenter);
                }
                else if (perspectiveCameraData.controls.enableObjectControls === true) {
                    matrix = gl_matrix_1.mat4.create();
                    gl_matrix_1.mat4.rotateX(matrix, matrix, -perspectiveCameraData.sceneRotation[0]);
                    gl_matrix_1.mat4.rotateZ(matrix, matrix, -perspectiveCameraData.sceneRotation[1]);
                    gl_matrix_1.mat4.translate(matrix, matrix, perspectiveCameraData.controls.objectControlsCenter);
                }
                cameraThree = perspectiveCameraThreeJs;
            }
        }
        __classPrivateFieldSet(this, _CameraManager_camera, cameraThree, "f");
        return { camera: cameraThree, matrix };
    }
    init() { }
    load(camera, dataChild) {
        let threeCamera = __classPrivateFieldGet(this, _CameraManager_cameraCache, "f")[camera.id];
        if (camera instanceof viewer_rendering_engine_camera_engine_1.PerspectiveCamera) {
            if (!threeCamera) {
                threeCamera = new THREE.PerspectiveCamera();
                __classPrivateFieldGet(this, _CameraManager_cameraCache, "f")[camera.id] = threeCamera;
                camera.convertedObject[this._renderingEngine.id] = threeCamera;
                if (dataChild)
                    dataChild.add(threeCamera);
            }
            else {
                camera.convertedObject[this._renderingEngine.id] = threeCamera;
                if (dataChild && !dataChild.children.find(t => t === threeCamera))
                    dataChild.add(threeCamera);
            }
            const perspectiveCamera = camera;
            const threePerspectiveCamera = threeCamera;
            threePerspectiveCamera.up.set(0, 0, 1);
            if (perspectiveCamera.useNodeData) {
                threePerspectiveCamera.fov = perspectiveCamera.fov;
                threePerspectiveCamera.aspect = perspectiveCamera.aspect;
                threePerspectiveCamera.far = perspectiveCamera.far;
                threePerspectiveCamera.near = perspectiveCamera.near;
                threePerspectiveCamera.updateProjectionMatrix();
            }
        }
        else {
            if (!threeCamera) {
                threeCamera = new THREE.OrthographicCamera(0, 0, 0, 0);
                __classPrivateFieldGet(this, _CameraManager_cameraCache, "f")[camera.id] = threeCamera;
                camera.convertedObject[this._renderingEngine.id] = threeCamera;
                if (dataChild)
                    dataChild.add(threeCamera);
            }
            else {
                camera.convertedObject[this._renderingEngine.id] = threeCamera;
                if (dataChild && !dataChild.children.find(t => t === threeCamera))
                    dataChild.add(threeCamera);
            }
            const orthographicCamera = camera;
            const threeOrthographicCamera = threeCamera;
            threeOrthographicCamera.up.set(orthographicCamera.up[0], orthographicCamera.up[1], orthographicCamera.up[2]);
            if (orthographicCamera.useNodeData) {
                threeOrthographicCamera.left = orthographicCamera.left;
                threeOrthographicCamera.bottom = orthographicCamera.bottom;
                threeOrthographicCamera.right = orthographicCamera.right;
                threeOrthographicCamera.top = orthographicCamera.top;
                threeOrthographicCamera.near = orthographicCamera.near;
                threeOrthographicCamera.far = orthographicCamera.far;
                threeOrthographicCamera.updateProjectionMatrix();
            }
        }
    }
    updateCamera(time, aspect) {
        var _a;
        if (((_a = this._renderingEngine.cameraEngine.camera) === null || _a === void 0 ? void 0 : _a.type) === 'perspective')
            this._renderingEngine.cameraEngine.camera.aspect = aspect;
        return this._renderingEngine.cameraEngine.camera.update(time);
    }
}
exports.CameraManager = CameraManager;
_CameraManager_camera = new WeakMap(), _CameraManager_cameraCache = new WeakMap();
//# sourceMappingURL=CameraManager.js.map

/***/ }),

/***/ 42057:
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
exports.EnvironmentGeometryManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_shared_types_1 = __webpack_require__(64766);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_math_1 = __webpack_require__(67275);
const viewer_shared_services_1 = __webpack_require__(8389);
const SDData_1 = __webpack_require__(85284);
const SDObject_1 = __webpack_require__(93867);
class EnvironmentGeometryManager {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (5)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._groundPlaneColor = '#d3d3d3ff';
        this._groundPlaneShadowColor = '#d3d3d3ff';
        this._gridColor = '#44444426';
        this._initialized = false;
        this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_CHANGE, (e) => {
            this.updateEnvironmentGeometryPosition();
        });
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get gridColor() {
        return this._gridColor;
    }
    set gridColor(value) {
        this._gridColor = value;
        this._grid.material.opacity = typeof this._gridColor == 'string' && this._gridColor.length <= 8 ? 0.15 : this._converter.toAlpha(this._gridColor);
        this._grid.material.transparent = this._grid.material.opacity !== 1;
        this._grid.material.color = this._renderingEngine.createThreeJsColor(this._gridColor);
        this._grid.material.needsUpdate = true;
    }
    get groundPlaneColor() {
        return this._groundPlaneColor;
    }
    set groundPlaneColor(value) {
        this._groundPlaneColor = value;
        this.assignGroundPlaneColor(value);
    }
    get groundPlaneShadowColor() {
        return this._groundPlaneShadowColor;
    }
    set groundPlaneShadowColor(value) {
        this._groundPlaneShadowColor = value;
        this.assignGroundPlaneShadowColor(value);
    }
    get grid() {
        return this._grid;
    }
    get groundPlane() {
        return this._groundPlane;
    }
    get groundPlaneShadow() {
        return this._groundPlaneShadow;
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (2)
    assignGroundPlaneColor(color) {
        this._groundPlane.material.opacity = this._converter.toAlpha(color);
        this._groundPlane.material.transparent = this._groundPlane.material.opacity !== 1;
        this._groundPlane.material.depthWrite = !this._groundPlane.material.transparent;
        this._groundPlane.material.color = this._renderingEngine.createThreeJsColor(color);
        this._groundPlane.material.needsUpdate = true;
    }
    assignGroundPlaneShadowColor(color) {
        this._groundPlaneShadow.material.opacity = this._converter.toAlpha(color);
        this._groundPlaneShadow.material.color = this._renderingEngine.createThreeJsColor(color);
        this._groundPlaneShadow.material.needsUpdate = true;
    }
    /**
     * Creates the grid extents and divisios with the specified scene extents.
     *
     * https://shapediver.atlassian.net/browse/SS-2961 evaluate this magic.
     */
    evaluateGridMeasurements(sceneExtents) {
        let divisions = 0.1;
        let gridExtents = 1.0;
        if (sceneExtents > 1) {
            let tmp = Math.floor(sceneExtents).toString();
            let temp = Math.pow(10, tmp.length - 1);
            gridExtents = Math.max(Math.ceil(sceneExtents / temp) * temp, 1);
            temp = temp / 10;
            divisions = gridExtents / temp;
        }
        else if (sceneExtents !== 0) {
            let zeros = 1 - Math.floor(Math.log(sceneExtents) / Math.log(10)) - 2;
            let r = sceneExtents.toFixed(zeros + 1);
            let firstDigit = parseInt(r.substr(r.length - 1)) + 1;
            let gridExtentsS = '0.';
            for (let i = 0; i < zeros; ++i)
                gridExtentsS = gridExtentsS + '0';
            gridExtents = parseFloat(gridExtentsS + firstDigit);
            divisions = firstDigit * 10;
        }
        return { divisions, gridExtents };
    }
    changeSceneExtents(bb) {
        if (((bb.min[0] === 0 && bb.min[1] === 0 && bb.min[2] === 0) && (bb.max[0] === 0 && bb.max[1] === 0 && bb.max[2] === 0)) || bb.isEmpty())
            return;
        this._initialized = true;
        let sceneExtents = gl_matrix_1.vec3.distance(bb.min, bb.max);
        const { divisions, gridExtents } = this.evaluateGridMeasurements(sceneExtents);
        this._gridObject.remove(this._grid);
        this._grid = new THREE.GridHelper(2 * gridExtents, divisions);
        this._grid.material.opacity = typeof this._gridColor == 'string' && this._gridColor.length <= 8 ? 0.15 : this._converter.toAlpha(this._gridColor);
        this._grid.material.transparent = this._grid.material.opacity !== 1;
        this._grid.material.color = this._renderingEngine.createThreeJsColor(this._gridColor);
        this._grid.rotateX(Math.PI / 2);
        this._grid.visible = this._renderingEngine.gridVisibility;
        this._gridObject.add(this._grid);
        this._groundPlane.geometry = new THREE.PlaneGeometry(2 * gridExtents, 2 * gridExtents, 2, 2);
        this._groundPlaneShadow.geometry = new THREE.PlaneGeometry(2 * gridExtents, 2 * gridExtents, 2, 2);
        let eps = 0.005;
        let bs = bb.boundingSphere;
        this._grid.position.set(bs.center[0], bs.center[1], bb.min[2] - eps);
        this._groundPlane.position.set(bs.center[0], bs.center[1], bb.min[2] - 2 * eps);
        this._groundPlaneShadow.position.set(bs.center[0], bs.center[1], bb.min[2] - 2 * eps);
    }
    init() {
        this._environmentGeometryObject = new SDObject_1.SDObject('environmentGeometry', '');
        this._renderingEngine.sceneTreeManager.scene.add(this._environmentGeometryObject);
        this._gridObject = new SDData_1.SDData('grid', '');
        this._grid = new THREE.GridHelper();
        this._grid.material.opacity = typeof this._gridColor == 'string' && this._gridColor.length <= 8 ? 0.15 : this._converter.toAlpha(this._gridColor);
        this._grid.material.transparent = this._grid.material.opacity !== 1;
        this._grid.material.color = this._renderingEngine.createThreeJsColor(this._gridColor);
        this._grid.rotateX(Math.PI / 2);
        this._grid.visible = this._renderingEngine.gridVisibility;
        this._gridObject.add(this._grid);
        this._environmentGeometryObject.add(this._gridObject);
        this._groundPlaneObject = new SDData_1.SDData('groundPlane', '');
        let mat = new viewer_shared_types_1.MaterialStandardData();
        mat.color = this._groundPlaneColor;
        mat.side = viewer_shared_types_1.MATERIAL_SIDE.FRONT;
        mat.opacity = this._converter.toAlpha(this._groundPlaneColor);
        mat.roughness = 1;
        mat.metalness = 0;
        this._groundPlane = new THREE.Mesh(new THREE.PlaneGeometry(), this._renderingEngine.materialLoader.load(mat));
        this._groundPlane.receiveShadow = true;
        this._groundPlane.visible = this._renderingEngine.groundPlaneVisibility;
        this._groundPlaneObject.add(this._groundPlane);
        this._environmentGeometryObject.add(this._groundPlaneObject);
        this._groundPlaneShadowObject = new SDData_1.SDData('groundPlaneShadow', '');
        let matShadow = new viewer_shared_types_1.MaterialShadowData();
        matShadow.color = this._groundPlaneShadowColor;
        matShadow.opacity = this._converter.toAlpha(this._groundPlaneShadowColor);
        this._groundPlaneShadow = new THREE.Mesh(new THREE.PlaneGeometry(), this._renderingEngine.materialLoader.load(matShadow));
        this._groundPlaneShadow.receiveShadow = true;
        this._groundPlaneShadow.visible = this._renderingEngine.groundPlaneShadowVisibility;
        this._groundPlaneShadowObject.add(this._groundPlaneShadow);
        this._groundPlaneShadowObject.userData.ambientOcclusion = false;
        this._environmentGeometryObject.add(this._groundPlaneShadowObject);
        let eps = 0.005;
        this._grid.position.set(0, 0, -eps);
        this._groundPlane.position.set(0, 0, -eps);
        this._groundPlaneShadow.position.set(0, 0, -eps);
    }
    updateEnvironmentGeometryPosition() {
        const bb = new viewer_shared_math_1.Box(this._renderingEngine.sceneTreeManager.boundingBox.min, this._renderingEngine.sceneTreeManager.boundingBox.max);
        if (((bb.min[0] === 0 && bb.min[1] === 0 && bb.min[2] === 0) && (bb.max[0] === 0 && bb.max[1] === 0 && bb.max[2] === 0)) || bb.isEmpty())
            return;
        if (!this._initialized) {
            this.changeSceneExtents(bb);
        }
        else {
            let eps = 0.005;
            let bs = bb.boundingSphere;
            let sceneExtents = gl_matrix_1.vec3.distance(bb.min, bb.max);
            const { divisions, gridExtents } = this.evaluateGridMeasurements(sceneExtents);
            this._groundPlaneShadow.geometry = new THREE.PlaneGeometry(2 * gridExtents, 2 * gridExtents, 2, 2);
            if (this._grid)
                this._grid.position.set(bs.center[0], bs.center[1], bb.min[2] - eps);
            if (this._groundPlane)
                this._groundPlane.position.set(bs.center[0], bs.center[1], bb.min[2] - 2 * eps);
            if (this._groundPlaneShadow)
                this._groundPlaneShadow.position.set(bs.center[0], bs.center[1], bb.min[2] - 2 * eps);
        }
    }
}
exports.EnvironmentGeometryManager = EnvironmentGeometryManager;
//# sourceMappingURL=EnvironmentGeometryManager.js.map

/***/ }),

/***/ 30265:
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PostProcessingManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
const postprocessing_1 = __webpack_require__(66739);
const viewer_shared_services_1 = __webpack_require__(8389);
const GodRaysManager_1 = __webpack_require__(79581);
const IPostProcessingEffectDefinitions_1 = __webpack_require__(63506);
const OutlineManager_1 = __webpack_require__(93654);
const SelectiveBloomManager_1 = __webpack_require__(26207);
const SSAARenderPass_1 = __webpack_require__(83982);
const SSAOEffect_1 = __webpack_require__(85120);
const HBAOEffect_1 = __webpack_require__(58140);
const gl_matrix_1 = __webpack_require__(61961);
class PostProcessingManager {
    // #endregion Properties (22)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (22)
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._systemInfo = viewer_shared_services_1.SystemInfo.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._antiAliasingTechnique = IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SMAA;
        this._antiAliasingTechniqueMobile = IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.FXAA;
        this._currentCameraId = '';
        this._effectDefinitions = [];
        this._effects = [];
        this._enablePostProcessingOnMobile = true;
        this._godRaysManagers = {};
        this._manualPostProcessing = false;
        this._outlineManagers = {};
        this._sceneExtents = 0;
        this._selectiveBloomManagers = {};
        this._suspendEffectPassUpdate = false;
        this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_CHANGE, (e) => {
            const viewerEvent = e;
            if (viewerEvent.viewportId === this._renderingEngine.id) {
                this._sceneExtents = gl_matrix_1.vec3.distance(viewerEvent.boundingBox.min, viewerEvent.boundingBox.max);
                this.changeEffectPass();
            }
        });
        // const token = this._uuidGenerator.create();
        // this._effectDefinitions.push({
        //     token,
        //     definition: {
        //         type: POST_PROCESSING_EFFECT_TYPE.SSAO,
        //         properties: this.getDefaultEffectProperties(POST_PROCESSING_EFFECT_TYPE.SSAO)
        //     }
        // });
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (15)
    get antiAliasingTechnique() {
        return this._antiAliasingTechnique;
    }
    set antiAliasingTechnique(value) {
        this._antiAliasingTechnique = value;
        this.changeEffectPass();
    }
    get antiAliasingTechniqueMobile() {
        return this._antiAliasingTechniqueMobile;
    }
    set antiAliasingTechniqueMobile(value) {
        this._antiAliasingTechniqueMobile = value;
        // we don't allow SSAA on mobile devices anymore as it is too slow
        if (this._antiAliasingTechniqueMobile === IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SSAA)
            this._antiAliasingTechniqueMobile = IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SMAA;
        this.changeEffectPass();
    }
    get effectComposer() {
        return this._composer;
    }
    get effects() {
        return this._effects;
    }
    get enablePostProcessingOnMobile() {
        return this._enablePostProcessingOnMobile;
    }
    set enablePostProcessingOnMobile(value) {
        this._enablePostProcessingOnMobile = value;
    }
    get godRaysManagers() {
        return this._godRaysManagers;
    }
    get manualPostProcessing() {
        return this._manualPostProcessing;
    }
    set manualPostProcessing(value) {
        this._manualPostProcessing = value;
        if (this._composer && this._manualPostProcessing === true)
            this._composer.removeAllPasses();
    }
    get outlineManagers() {
        return this._outlineManagers;
    }
    get selectiveBloomManagers() {
        return this._selectiveBloomManagers;
    }
    get ssaaSampleLevel() {
        return this._ssaaRenderPass ? this._ssaaRenderPass.sampleLevel : 2;
    }
    set ssaaSampleLevel(value) {
        if (this._ssaaRenderPass)
            this._ssaaRenderPass.sampleLevel = value;
    }
    // #endregion Public Getters And Setters (15)
    // #region Public Methods (13)
    addEffect(definition, t) {
        const token = t || this._uuidGenerator.create();
        this._effectDefinitions.push({ token, definition });
        switch (definition.type) {
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GOD_RAYS:
                if (!this._godRaysManagers[token])
                    this._godRaysManagers[token] = new GodRaysManager_1.GodRaysManager(this._renderingEngine);
                break;
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.OUTLINE:
                if (!this._outlineManagers[token])
                    this._outlineManagers[token] = new OutlineManager_1.OutlineManager(this._renderingEngine);
                break;
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SELECTIVE_BLOOM:
                if (!this._selectiveBloomManagers[token])
                    this._selectiveBloomManagers[token] = new SelectiveBloomManager_1.SelectiveBloomManager(this._renderingEngine);
                break;
            default:
        }
        this.changeEffectPass();
        return token;
    }
    applySettings(settingsEngine) {
        this._suspendEffectPassUpdate = true;
        this.antiAliasingTechnique = settingsEngine.settings.postprocessing.antiAliasingTechnique;
        this.antiAliasingTechniqueMobile = settingsEngine.settings.postprocessing.antiAliasingTechniqueMobile;
        // we don't allow SSAA on mobile devices anymore as it is too slow
        if (this._antiAliasingTechniqueMobile === IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SSAA)
            this._antiAliasingTechniqueMobile = IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SMAA;
        this.enablePostProcessingOnMobile = settingsEngine.settings.postprocessing.enablePostProcessingOnMobile;
        this.ssaaSampleLevel = settingsEngine.settings.postprocessing.ssaaSampleLevel;
        this._effectDefinitions = [];
        const effects = settingsEngine.settings.postprocessing.effects;
        for (let i = 0; i < effects.length; i++) {
            const token = this._uuidGenerator.create();
            this._effectDefinitions.push({
                token,
                definition: {
                    type: effects[i].type,
                    properties: effects[i].properties
                }
            });
        }
        this._suspendEffectPassUpdate = false;
        this.changeEffectPass();
    }
    changeEffectPass() {
        if (!this._composer)
            return;
        if (this._suspendEffectPassUpdate === true)
            return;
        if (this._systemInfo.isMobile === true && this._enablePostProcessingOnMobile === false)
            return;
        if (this._manualPostProcessing)
            return;
        for (let i = 0; i < this._composer.passes.length; i++)
            this._composer.passes[i].dispose();
        this._composer.removeAllPasses();
        const antiAliasingTechnique = this._systemInfo.isMobile === true ? this._antiAliasingTechniqueMobile : this._antiAliasingTechnique;
        if (antiAliasingTechnique === IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SSAA) {
            this.addPassToEffectComposer(this._ssaaRenderPass);
        }
        else {
            this.addPassToEffectComposer(this._renderPass);
        }
        // remove the effects where the tokens are not in the effectDefinitions
        this._effects.forEach(e => e.effect.dispose());
        this._effects = [];
        for (let i = 0; i < this._effectDefinitions.length; i++) {
            switch (this._effectDefinitions[i].definition.type) {
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.BLOOM:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.BloomEffect({
                                blendFunction: properties.blendFunction,
                                luminanceThreshold: properties.luminanceThreshold,
                                luminanceSmoothing: properties.luminanceSmoothing,
                                mipmapBlur: properties.mipmapBlur,
                                intensity: properties.intensity,
                                kernelSize: properties.kernelSize
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.CHROMATIC_ABERRATION:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        const offsetArray = properties.offset !== undefined ? Array.isArray(properties.offset) ? properties.offset : [properties.offset.x, properties.offset.y] : undefined;
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.ChromaticAberrationEffect({
                                blendFunction: properties.blendFunction,
                                offset: offsetArray ? new THREE.Vector2(...offsetArray) : undefined,
                                radialModulation: properties.radialModulation !== undefined ? properties.radialModulation : false,
                                modulationOffset: properties.modulationOffset !== undefined ? properties.modulationOffset : 0.15
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DEPTH_OF_FIELD:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        const depthOfFieldEffect = new postprocessing_1.DepthOfFieldEffect(this._renderingEngine.camera, {
                            blendFunction: properties.blendFunction,
                            focusDistance: properties.focusDistance !== undefined ? properties.focusDistance : 0,
                            focusRange: properties.focusRange !== undefined ? properties.focusRange : 0.01,
                            bokehScale: properties.bokehScale !== undefined ? properties.bokehScale : 5,
                            resolutionScale: 1
                        });
                        depthOfFieldEffect.resolution.height = 1080;
                        depthOfFieldEffect.blurPass.kernelSize = postprocessing_1.KernelSize.HUGE;
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: depthOfFieldEffect
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DOT_SCREEN:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.DotScreenEffect({
                                blendFunction: properties.blendFunction,
                                scale: properties.scale,
                                angle: properties.angle
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GOD_RAYS:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        const godRaysEffect = new postprocessing_1.GodRaysEffect(this._renderingEngine.camera, new THREE.Mesh(), {
                            blendFunction: properties.blendFunction,
                            density: properties.density,
                            decay: properties.decay,
                            weight: properties.weight,
                            exposure: properties.exposure,
                            clampMax: properties.clampMax,
                            kernelSize: properties.kernelSize,
                            blur: properties.blur
                        });
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: godRaysEffect
                        });
                        this._godRaysManagers[this._effectDefinitions[i].token].setEffect(godRaysEffect);
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GRID:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.GridEffect({
                                blendFunction: properties.blendFunction !== undefined ? properties.blendFunction : postprocessing_1.BlendFunction.MULTIPLY,
                                scale: properties.scale
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HBAO:
                    {
                        // we currently do not support devices with WebGL 1: https://shapediver.atlassian.net/browse/SS-7069
                        if (this._renderingEngine.renderer.capabilities.isWebGL2 === false)
                            break;
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        // we adjust the scene size slightly to make the factor fit our requirements
                        // with this adjusted factor, a distance value of 1 fits well as a default
                        const sceneSizeFactor = this._sceneExtents / 10.0;
                        const hbaoEffect = new HBAOEffect_1.HBAOEffect(this._composer, this._renderingEngine.camera, this._renderingEngine.scene, {
                            resolutionScale: properties.resolutionScale !== undefined ? properties.resolutionScale : 1,
                            spp: properties.spp !== undefined ? properties.spp : 8,
                            distance: properties.distance !== undefined ? properties.distance * sceneSizeFactor : sceneSizeFactor,
                            distancePower: properties.distanceIntensity !== undefined ? properties.distanceIntensity : 1,
                            power: properties.intensity !== undefined ? properties.intensity : 2.5,
                            bias: properties.bias !== undefined ? properties.bias : 10,
                            thickness: properties.thickness !== undefined ? properties.thickness : 0.5,
                            color: properties.color !== undefined ? new THREE.Color(this._converter.toHexColor(properties.color).substring(0, 7)) : new THREE.Color('black'),
                            iterations: properties.iterations !== undefined ? properties.iterations : 1,
                            radius: properties.radius !== undefined ? properties.radius : 15,
                            rings: properties.rings !== undefined ? properties.rings : 4,
                            lumaPhi: properties.lumaPhi !== undefined ? properties.lumaPhi : 10,
                            depthPhi: properties.depthPhi !== undefined ? properties.depthPhi : 2,
                            normalPhi: properties.normalPhi !== undefined ? properties.normalPhi : 3.25,
                            samples: properties.samples !== undefined ? properties.samples : 16
                        });
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: hbaoEffect
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HUE_SATURATION:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.HueSaturationEffect({
                                blendFunction: properties.blendFunction,
                                hue: properties.hue,
                                saturation: properties.saturation
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.NOISE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.NoiseEffect({
                                blendFunction: properties.blendFunction,
                                premultiply: properties.premultiply
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.OUTLINE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        const outlineEffect = new postprocessing_1.OutlineEffect(this._renderingEngine.scene, this._renderingEngine.camera, {
                            blendFunction: properties.blendFunction !== undefined ? properties.blendFunction : postprocessing_1.BlendFunction.SCREEN,
                            edgeStrength: properties.edgeStrength,
                            pulseSpeed: properties.pulseSpeed,
                            visibleEdgeColor: new THREE.Color(this._converter.toHexColor(properties.visibleEdgeColor).substring(0, 7)),
                            hiddenEdgeColor: new THREE.Color(this._converter.toHexColor(properties.hiddenEdgeColor).substring(0, 7)),
                            kernelSize: properties.kernelSize,
                            blur: properties.blur,
                            xRay: properties.xRay,
                            multisampling: properties.multisampling
                        });
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: outlineEffect
                        });
                        this._outlineManagers[this._effectDefinitions[i].token].setEffect(outlineEffect);
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.PIXELATION:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.PixelationEffect(properties.granularity)
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SSAO:
                    {
                        // we currently do not support devices with WebGL 1: https://shapediver.atlassian.net/browse/SS-7069
                        if (this._renderingEngine.renderer.capabilities.isWebGL2 === false)
                            break;
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        // we adjust the scene size slightly to make the factor fit our requirements
                        // with this adjusted factor, a distance value of 1 fits well as a default
                        const sceneSizeFactor = this._sceneExtents / 50.0;
                        const ssaoEffect = new SSAOEffect_1.SSAOEffect(this._composer, this._renderingEngine.camera, this._renderingEngine.scene, {
                            resolutionScale: properties.resolutionScale !== undefined ? properties.resolutionScale : 1,
                            spp: properties.spp !== undefined ? properties.spp : 8,
                            distance: properties.distance !== undefined ? properties.distance * sceneSizeFactor : sceneSizeFactor,
                            distancePower: properties.distanceIntensity !== undefined ? properties.distanceIntensity : 1,
                            power: properties.intensity !== undefined ? properties.intensity : 2.5,
                            color: properties.color !== undefined ? new THREE.Color(this._converter.toHexColor(properties.color).substring(0, 7)) : new THREE.Color('black'),
                            iterations: properties.iterations !== undefined ? properties.iterations : 1,
                            radius: properties.radius !== undefined ? properties.radius : 15,
                            rings: properties.rings !== undefined ? properties.rings : 4,
                            lumaPhi: properties.lumaPhi !== undefined ? properties.lumaPhi : 10,
                            depthPhi: properties.depthPhi !== undefined ? properties.depthPhi : 2,
                            normalPhi: properties.normalPhi !== undefined ? properties.normalPhi : 3.25,
                            samples: properties.samples !== undefined ? properties.samples : 16
                        });
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: ssaoEffect
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SCANLINE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.ScanlineEffect({
                                blendFunction: properties.blendFunction,
                                density: properties.density
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SELECTIVE_BLOOM:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        const selectiveBloomEffect = new postprocessing_1.SelectiveBloomEffect(this._renderingEngine.scene, this._renderingEngine.camera, {
                            blendFunction: properties.blendFunction,
                            mipmapBlur: properties.mipmapBlur,
                            luminanceThreshold: properties.luminanceThreshold,
                            luminanceSmoothing: properties.luminanceSmoothing,
                            intensity: properties.intensity,
                            kernelSize: properties.kernelSize
                        });
                        selectiveBloomEffect.ignoreBackground = properties.ignoreBackground !== undefined ? properties.ignoreBackground : true;
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: selectiveBloomEffect
                        });
                        this._selectiveBloomManagers[this._effectDefinitions[i].token].setEffect(selectiveBloomEffect);
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SEPIA:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.SepiaEffect({
                                blendFunction: properties.blendFunction
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.TILT_SHIFT:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.TiltShiftEffect({
                                blendFunction: properties.blendFunction,
                                offset: properties.offset,
                                rotation: properties.rotation,
                                focusArea: properties.focusArea,
                                feather: properties.feather,
                                kernelSize: properties.kernelSize
                            })
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.VIGNETTE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        this._effects.push({
                            token: this._effectDefinitions[i].token,
                            effect: new postprocessing_1.VignetteEffect({
                                blendFunction: properties.blendFunction,
                                technique: properties.technique,
                                offset: properties.offset,
                                darkness: properties.darkness,
                            })
                        });
                    }
                    break;
                default:
            }
        }
        // sort effects by order in effectDefinitions
        this._effects.sort((a, b) => this._effectDefinitions.indexOf(this._effectDefinitions.find(e => e.token === a.token)) - this._effectDefinitions.indexOf(this._effectDefinitions.find(e => e.token === b.token)));
        const effectArray = this._effects.map(v => v.effect);
        if (antiAliasingTechnique === IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.FXAA) {
            effectArray.unshift(this._fxaaEffect);
        }
        else if (antiAliasingTechnique === IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.SMAA) {
            effectArray.unshift(this._smaaEffect);
        }
        this._effectPass = new postprocessing_1.EffectPass(this._renderingEngine.camera, ...this._effects.map(v => v.effect));
        this.addPassToEffectComposer(this._effectPass);
        // for the AO effects we need to add a separate AA pass at the end that anti-aliases the AO effect
        if (this._effectDefinitions.find(e => e.definition.type === IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HBAO || e.definition.type === IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SSAO)) {
            // respect the AA choice if one of the effects was selected, use SMAA otherwise
            this.addPassToEffectComposer(new postprocessing_1.EffectPass(this._renderingEngine.camera, antiAliasingTechnique === IPostProcessingEffectDefinitions_1.ANTI_ALIASING_TECHNIQUE.FXAA ? this._fxaaEffect : this._smaaEffect));
        }
    }
    getDefaultEffectProperties(type) {
        switch (type) {
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.BLOOM:
                return {
                    blendFunction: postprocessing_1.BlendFunction.ADD,
                    intensity: 1.0,
                    kernelSize: postprocessing_1.KernelSize.LARGE,
                    luminanceSmoothing: 0.025,
                    luminanceThreshold: 0.9,
                    mipmapBlur: false,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.CHROMATIC_ABERRATION:
                return {
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                    modulationOffset: 0.15,
                    offset: { x: 0.001, y: 0.0005 },
                    radialModulation: false,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DEPTH_OF_FIELD:
                return {
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                    bokehScale: 5.0,
                    focusDistance: 0.0,
                    focusRange: 0.01,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DOT_SCREEN:
                return {
                    angle: 1.57,
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                    scale: 1.0,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GOD_RAYS:
                return {
                    blendFunction: postprocessing_1.BlendFunction.SCREEN,
                    blur: true,
                    clampMax: 1.0,
                    decay: 0.9,
                    density: 0.96,
                    exposure: 0.6,
                    kernelSize: postprocessing_1.KernelSize.SMALL,
                    weight: 0.4,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GRID:
                return {
                    blendFunction: postprocessing_1.BlendFunction.MULTIPLY,
                    scale: 1.0,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HBAO:
                return {
                    resolutionScale: 1,
                    spp: 8,
                    distance: 1,
                    distanceIntensity: 1,
                    intensity: 2.5,
                    color: '#000000',
                    bias: 10,
                    thickness: 0.5,
                    iterations: 1,
                    radius: 15,
                    rings: 4,
                    lumaPhi: 10,
                    depthPhi: 2,
                    normalPhi: 3.25,
                    samples: 16,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HUE_SATURATION:
                return {
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                    hue: 0.0,
                    saturation: 0.0,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.NOISE:
                return {
                    blendFunction: postprocessing_1.BlendFunction.SCREEN,
                    premultiply: false,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.OUTLINE:
                return {
                    blendFunction: postprocessing_1.BlendFunction.SCREEN,
                    blur: false,
                    edgeStrength: 1.0,
                    hiddenEdgeColor: '#22090a',
                    kernelSize: postprocessing_1.KernelSize.VERY_SMALL,
                    multisampling: 0,
                    pulseSpeed: 0.0,
                    resolution: 480,
                    visibleEdgeColor: '#ffffff',
                    xRay: true,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.PIXELATION:
                return {
                    granularity: 30.0,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SSAO:
                return {
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
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SCANLINE:
                return {
                    blendFunction: postprocessing_1.BlendFunction.OVERLAY,
                    density: 1.25,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SELECTIVE_BLOOM:
                return {
                    blendFunction: postprocessing_1.BlendFunction.ADD,
                    intensity: 1.0,
                    kernelSize: postprocessing_1.KernelSize.LARGE,
                    luminanceSmoothing: 0.025,
                    luminanceThreshold: 0.9,
                    mipmapBlur: false,
                    ignoreBackground: true,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SEPIA:
                return {
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.TILT_SHIFT:
                return {
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                    feather: 0.3,
                    focusArea: 0.4,
                    kernelSize: postprocessing_1.KernelSize.MEDIUM,
                    offset: 0.0,
                    rotation: 0.0,
                };
            case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.VIGNETTE:
                return {
                    blendFunction: postprocessing_1.BlendFunction.NORMAL,
                    darkness: 0.5,
                    offset: 0.5,
                    technique: postprocessing_1.VignetteTechnique.DEFAULT,
                };
            default:
                return {};
        }
    }
    getEffect(token) {
        return this._effects.find(e => e.token === token).effect;
    }
    getEffectTokens() {
        return Object.assign({}, ...this._effectDefinitions.map((e) => ({ [e.token]: e.definition.type })));
    }
    getPostProcessingEffectsArray() {
        const effects = [];
        for (let i = 0; i < this._effectDefinitions.length; i++) {
            switch (this._effectDefinitions[i].definition.type) {
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.BLOOM:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.BLOOM,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                luminanceThreshold: properties.luminanceThreshold,
                                luminanceSmoothing: properties.luminanceSmoothing,
                                mipmapBlur: properties.mipmapBlur,
                                intensity: properties.intensity,
                                kernelSize: properties.kernelSize
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.CHROMATIC_ABERRATION:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.CHROMATIC_ABERRATION,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                offset: properties.offset ? Array.isArray(properties.offset) ? { x: properties.offset[0], y: properties.offset[1] } : properties.offset : undefined,
                                radialModulation: properties.radialModulation,
                                modulationOffset: properties.modulationOffset
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DEPTH_OF_FIELD:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DEPTH_OF_FIELD,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                focusDistance: properties.focusDistance,
                                focusRange: properties.focusRange,
                                bokehScale: properties.bokehScale
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DOT_SCREEN:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.DOT_SCREEN,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                scale: properties.scale,
                                angle: properties.angle
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GRID:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.GRID,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                scale: properties.scale
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HBAO:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HBAO,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                resolutionScale: properties.resolutionScale,
                                spp: properties.spp,
                                distance: properties.distance,
                                distanceIntensity: properties.distanceIntensity,
                                intensity: properties.intensity,
                                bias: properties.bias,
                                thickness: properties.thickness,
                                color: properties.color !== undefined ? this._converter.toHexColor(properties.color) : undefined,
                                iterations: properties.iterations,
                                radius: properties.radius,
                                rings: properties.rings,
                                lumaPhi: properties.lumaPhi,
                                depthPhi: properties.depthPhi,
                                normalPhi: properties.normalPhi,
                                samples: properties.samples
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HUE_SATURATION:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.HUE_SATURATION,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                hue: properties.hue,
                                saturation: properties.saturation
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.NOISE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.NOISE,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                premultiply: properties.premultiply
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.PIXELATION:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.PIXELATION,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                granularity: properties.granularity
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SSAO:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SSAO,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                resolutionScale: properties.resolutionScale,
                                spp: properties.spp,
                                distance: properties.distance,
                                distanceIntensity: properties.distanceIntensity,
                                intensity: properties.intensity,
                                color: properties.color !== undefined ? this._converter.toHexColor(properties.color) : undefined,
                                iterations: properties.iterations,
                                radius: properties.radius,
                                rings: properties.rings,
                                lumaPhi: properties.lumaPhi,
                                depthPhi: properties.depthPhi,
                                normalPhi: properties.normalPhi,
                                samples: properties.samples
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SCANLINE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SCANLINE,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                density: properties.density
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SEPIA:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.SEPIA,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.TILT_SHIFT:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.TILT_SHIFT,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                offset: properties.offset,
                                rotation: properties.rotation,
                                focusArea: properties.focusArea,
                                feather: properties.feather,
                                kernelSize: properties.kernelSize
                            }
                        });
                    }
                    break;
                case IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.VIGNETTE:
                    {
                        const definition = this._effectDefinitions[i].definition;
                        const properties = definition.properties || {};
                        effects.push({
                            type: IPostProcessingEffectDefinitions_1.POST_PROCESSING_EFFECT_TYPE.VIGNETTE,
                            token: this._effectDefinitions[i].token,
                            properties: {
                                blendFunction: properties.blendFunction,
                                technique: properties.technique,
                                offset: properties.offset,
                                darkness: properties.darkness,
                            }
                        });
                    }
                    break;
                default:
            }
        }
        return effects;
    }
    init() {
        postprocessing_1.OverrideMaterialManager.workaroundEnabled = true;
        const initComposer = () => {
            this._composer = new postprocessing_1.EffectComposer(this._renderingEngine.renderer);
            // EffectComposer disables autoClear, we enable/disable this in the postprocessing render loop
            this._renderingEngine.renderer.autoClear = true;
            // create anti-aliasing effects and passes
            this._fxaaEffect = new postprocessing_1.FXAAEffect();
            this._smaaEffect = new postprocessing_1.SMAAEffect({ preset: postprocessing_1.SMAAPreset.ULTRA });
            this._renderPass = new postprocessing_1.RenderPass(this._renderingEngine.scene, this._renderingEngine.camera);
            this._ssaaRenderPass = new SSAARenderPass_1.SSAARenderPass(this._renderingEngine.scene, this._renderingEngine.camera);
        };
        if (this._sceneExtents === 0) {
            const token = this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_CHANGE, (e) => __awaiter(this, void 0, void 0, function* () {
                const viewerEvent = e;
                if (viewerEvent.viewportId === this._renderingEngine.id) {
                    if (gl_matrix_1.vec3.distance(viewerEvent.boundingBox.min, viewerEvent.boundingBox.max) > 0) {
                        initComposer();
                        this.changeEffectPass();
                        this._eventEngine.removeListener(token);
                    }
                }
            }));
        }
        else {
            initComposer();
        }
    }
    removeEffect(token) {
        const effectToRemove = this._effectDefinitions.find(e => e.token === token);
        if (effectToRemove)
            this._effectDefinitions.splice(this._effectDefinitions.indexOf(effectToRemove), 1);
        this.changeEffectPass();
        return true;
    }
    render(deltaTime, camera) {
        if (!this._composer)
            return;
        const cameraId = `${camera.id}_${camera.type}${(camera.type === 'PerspectiveCamera' ? '' : '_' + camera.up.toArray().toString())}`;
        if (cameraId !== this._currentCameraId) {
            this._currentCameraId = cameraId;
            this.changeEffectPass();
        }
        const currentClearColor = this._renderingEngine.renderer.getClearColor(new THREE.Color());
        const convertedClearColor = currentClearColor.clone().convertSRGBToLinear();
        this._renderingEngine.renderer.setClearColor(convertedClearColor);
        this._renderingEngine.renderer.setClearAlpha(this._renderingEngine.clearAlpha);
        this._renderingEngine.renderer.autoClear = false;
        this._composer.setMainCamera(camera);
        this._composer.render();
        this._renderingEngine.renderer.autoClear = true;
        this._renderingEngine.renderer.setClearColor(currentClearColor);
    }
    resize(width, height) {
        var _a;
        if (!this._composer)
            return;
        this.effects.forEach(e => {
            if (e.effect.setSize)
                e.effect.setSize(width, height);
        });
        this._renderPass.setSize(width, height);
        this._ssaaRenderPass.setSize(width, height);
        (_a = this._effectPass) === null || _a === void 0 ? void 0 : _a.setSize(width, height);
        this._composer.setSize(width, height);
    }
    saveSettings(settingsEngine) {
        settingsEngine.settings.postprocessing.antiAliasingTechnique = this.antiAliasingTechnique;
        settingsEngine.settings.postprocessing.antiAliasingTechniqueMobile = this.antiAliasingTechniqueMobile;
        settingsEngine.settings.postprocessing.enablePostProcessingOnMobile = this.enablePostProcessingOnMobile;
        settingsEngine.settings.postprocessing.ssaaSampleLevel = this.ssaaSampleLevel;
        const effects = this.getPostProcessingEffectsArray();
        // delete the tokens as we don't want to save them
        effects.forEach(e => delete e.token);
        settingsEngine.settings.postprocessing.effects = effects;
    }
    updateEffect(token, definition) {
        const effectDefinition = this._effectDefinitions.find(e => e.token === token);
        if (!effectDefinition)
            return;
        this.removeEffect(token);
        this.addEffect(definition, token);
    }
    // #endregion Public Methods (13)
    // #region Private Methods (1)
    addPassToEffectComposer(pass) {
        if (this._composer) {
            try {
                this._composer.addPass(pass);
            }
            catch (e) {
                // in this case a WebGL error is thrown, when the WebGL context is lost
                // as we already throw an error in the rendering engine, we can ignore this error here
                // https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/getContextAttributes
            }
        }
    }
}
exports.PostProcessingManager = PostProcessingManager;
//# sourceMappingURL=PostProcessingManager.js.map

/***/ }),

/***/ 1042:
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
exports.RenderingManager = void 0;
const Stats = __importStar(__webpack_require__(96571));
const THREE = __importStar(__webpack_require__(39437));
const viewer_rendering_engine_animation_engine_1 = __webpack_require__(46560);
const viewer_rendering_engine_animation_frame_engine_1 = __webpack_require__(98476);
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
const viewer_shared_services_1 = __webpack_require__(8389);
class RenderingManager {
    // #endregion Properties (30)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (30)
        this._animationEngine = viewer_rendering_engine_animation_engine_1.AnimationEngine.instance;
        this._animationFrameEngine = viewer_rendering_engine_animation_frame_engine_1.AnimationFrameEngine.instance;
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        this._systemInfo = viewer_shared_services_1.SystemInfo.instance;
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._activeRendering = true;
        this._cameraChanged = false;
        this._continuousRendering = false;
        this._continuousShadowMapUpdate = false;
        this._height = 0;
        this._hidden = true;
        this._hiddenCamera = new THREE.PerspectiveCamera();
        this._hiddenRenderTarget = new THREE.WebGLRenderTarget();
        this._hideLogo = false;
        this._lastSize = {
            adjustedWidth: 0,
            adjustedHeight: 0,
            width: 0,
            height: 0
        };
        this._lightSizeUVEnd = 0.15;
        this._lightSizeUVStart = 0.025;
        this._maxTextureUnits = 0;
        this._minimalRendering = false;
        this._noWebGL = false;
        this._runningAnimation = false;
        this._sizeChanged = false;
        this._softShadowRenderingActive = false;
        this._softShadowRenderingDurationActive = 0;
        this._softShadowRenderingTimeout = null;
        this._usingSwiftShader = false;
        this._width = 0;
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (6)
    get continuousRendering() {
        return this._continuousRendering;
    }
    set continuousRendering(value) {
        this._continuousRendering = value;
    }
    get continuousShadowMapUpdate() {
        return this._continuousShadowMapUpdate;
    }
    set continuousShadowMapUpdate(value) {
        this._continuousShadowMapUpdate = value;
    }
    get minimalRendering() {
        return this._minimalRendering;
    }
    get usingSwiftShader() {
        return this._usingSwiftShader;
    }
    // #endregion Public Getters And Setters (6)
    // #region Public Methods (10)
    addLogo(canvas, branding) {
        var _a, _b;
        const logoDivElement = document.createElement('div');
        logoDivElement.style.backgroundColor = branding.backgroundColor;
        logoDivElement.classList.add('sdv-logo-container');
        (_a = canvas.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(logoDivElement, (_b = canvas.parentElement) === null || _b === void 0 ? void 0 : _b.firstChild);
        if (branding.logo) {
            const img = new Image();
            img.classList.add('sdv-logo');
            img.src = branding.logo;
            logoDivElement.appendChild(img);
        }
        return logoDivElement;
    }
    addSpinner(canvas, branding) {
        var _a, _b;
        const spinnerDivElement = document.createElement('div');
        spinnerDivElement.classList.add('sdv-spinner-container');
        spinnerDivElement.style.visibility = 'hidden';
        (_a = canvas.parentElement) === null || _a === void 0 ? void 0 : _a.insertBefore(spinnerDivElement, (_b = canvas.parentElement) === null || _b === void 0 ? void 0 : _b.firstChild);
        if (branding.busyModeSpinner) {
            const img = new Image();
            img.src = branding.busyModeSpinner;
            img.classList.add('sdv-spinner');
            img.classList.add('sdv-spinner-' + branding.spinnerPositioning.replace('_', '-').toLowerCase());
            spinnerDivElement.appendChild(img);
        }
        return spinnerDivElement;
    }
    createRenderer(canvas) {
        const renderingProperties = {
            alpha: true,
            depth: true,
            antialias: true,
            preserveDrawingBuffer: true,
            stencil: true,
            premultipliedAlpha: true,
            canvas
        };
        const renderer = new THREE.WebGLRenderer(renderingProperties);
        renderer.setPixelRatio(window.devicePixelRatio);
        const context = renderer.getContext();
        if (renderer.extensions.has('WEBGL_debug_renderer_info')) {
            const debugInfo = renderer.extensions.get('WEBGL_debug_renderer_info');
            // const vendor = context.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
            const rendererInfo = context.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            if (rendererInfo === 'Google SwiftShader') {
                this._usingSwiftShader = true;
                this._logger.warn('RenderingLogic.createWebGLContext: The current device is using Google SwiftShader, a CPU-based renderer. To achieve better rendering results, please enable GPU-rendering in your settings.');
            }
        }
        if (!renderer.extensions.has('EXT_shader_texture_lod'))
            this._minimalRendering = true;
        renderer.useLegacyLights = true;
        renderer.outputColorSpace = THREE.SRGBColorSpace;
        renderer.toneMapping = THREE.NoToneMapping;
        renderer.shadowMap.enabled = true;
        renderer.shadowMap.needsUpdate = true;
        renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        renderer.shadowMap.autoUpdate = false;
        renderer.localClippingEnabled = true;
        renderer.setSize(canvas.width, canvas.height);
        renderer.setClearColor(new THREE.Color('#ffffff'), 1);
        this._maxTextureUnits = renderer.getContext().getParameter(renderer.getContext().MAX_TEXTURE_IMAGE_UNITS);
        return renderer;
    }
    evaluateTextureUnitCount(value) {
        if (value > this._maxTextureUnits) {
            this._logger.warn('RenderingManager.evaluateTextureUnitCount: Maximum number of texture units exceeded. Disabling shadows.');
            this._renderingEngine.lightLoader.forceDisabledShadows = true;
            this._renderingEngine.update('RenderingManager.evaluateTextureUnitCount');
        }
        else {
            this._renderingEngine.lightLoader.forceDisabledShadows = false;
        }
    }
    getScreenshot(type = 'image/png', encoderOptions = 1) {
        return this._renderingEngine.renderer.domElement.toDataURL(type, encoderOptions);
    }
    init() {
        try {
            this._renderingEngine.materialLoader.updateSoftShadow(this._lightSizeUVEnd, 1.0);
            this._renderingEngine.renderer.shadowMap.type = THREE.PCFShadowMap;
            this._renderingEngine.renderer.shadowMap.needsUpdate = true;
            this._renderingEngine.materialLoader.updateMaterials();
            this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.CAMERA.CAMERA_START, (e) => {
                const viewerEvent = e;
                if (viewerEvent.viewportId === this._renderingEngine.id)
                    this.startRendering();
            });
            this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.CAMERA.CAMERA_END, (e) => {
                const viewerEvent = e;
                if (viewerEvent.viewportId === this._renderingEngine.id)
                    this.stopRendering();
            });
            window.onresize = () => { this.render(); };
            this._renderingEngine.canvas.onresize = () => { this.render(); };
            this._renderingEngine.canvas.parentElement.onresize = () => { this.render(); };
            const stats1 = new Stats.default();
            stats1.showPanel(0); // Panel 0 = fps
            stats1.dom.style.cssText = 'position:absolute;top:0px;left:0px;display:none;';
            this._renderingEngine.canvas.parentElement.appendChild(stats1.dom);
            const stats2 = new Stats.default();
            stats2.showPanel(1); // Panel 1 = ms
            stats2.dom.style.cssText = 'position:absolute;top:0px;left:80px;display:none;';
            this._renderingEngine.canvas.parentElement.appendChild(stats2.dom);
            const stats3 = new Stats.default();
            stats3.showPanel(2); // Panel 2 = ms
            stats3.dom.style.cssText = 'position:absolute;top:0px;left:160px;display:none;';
            this._renderingEngine.canvas.parentElement.appendChild(stats3.dom);
            this._stats = {
                stats: [stats1, stats2, stats3],
                begin: () => {
                    stats1.begin();
                    stats2.begin();
                    stats3.begin();
                },
                end: () => {
                    stats1.end();
                    stats2.end();
                    stats3.end();
                }
            };
        }
        catch (e) {
            this._noWebGL = true;
            throw e;
        }
    }
    render() {
        this.startAndStopRendering();
    }
    resize(width, height) {
        this._width = width, this._height = height;
        this._renderingEngine.materialLoader.assignPointSize(this._renderingEngine.pointSize);
    }
    /**
     * Must only be called once by the RenderingEngine!
     */
    start() {
        this._animationFrameEngine.addAnimationFrameCallback(this.animate.bind(this));
        this.startAndStopRendering();
    }
    updateShadowMap() {
        this._renderingEngine.renderer.shadowMap.needsUpdate = true;
    }
    // #endregion Public Methods (10)
    // #region Private Methods (14)
    activateBeautyRenderShaders() {
        this._renderingEngine.renderer.shadowMap.type = THREE.PCFShadowMap;
        this._renderingEngine.renderer.shadowMap.needsUpdate = true;
        this._renderingEngine.materialLoader.updateMaterials();
    }
    animate(time, deltaTime, runningAnimation) {
        // animation loop - part 1: initial discarding
        if (this._renderingEngine.closed || this._noWebGL)
            return;
        this._renderingEngine.evaluateFlagState();
        // update if needed
        if (this._renderingEngine.show === true && this._tree.root.version !== this._renderingEngine.sceneTreeManager.lastRootVersion) {
            this._renderingEngine.sceneTreeManager.updateSceneTree(this._tree.root);
            this.updateShadowMap();
            this._animationEngine.updateAnimationData();
            this.render();
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE_VIEWPORT.VIEWPORT_UPDATED, { viewportId: this._renderingEngine.id });
        }
        if (this._renderingEngine.preRenderingCallback)
            this._renderingEngine.preRenderingCallback(this._renderingEngine.renderer);
        if (runningAnimation !== this._runningAnimation)
            this.render();
        this._runningAnimation = runningAnimation;
        if (this._runningAnimation)
            this._renderingEngine.sceneTreeManager.updateNode(undefined, undefined, { transformationOnly: true });
        if (this._runningAnimation)
            this._renderingEngine.sceneTreeManager.updateMorphWeights();
        // get the current size
        const { width, height, adjustedWidth, adjustedHeight } = this.calculateSize();
        const aspect = width / height;
        this._sizeChanged = this._lastSize.adjustedHeight !== adjustedHeight || this._lastSize.adjustedWidth !== adjustedWidth || this._lastSize.height !== height || this._lastSize.width !== width;
        this._lastSize = { width, height, adjustedWidth, adjustedHeight };
        // animation loop - part 3: update the camera, if there are new movements, they will start / continue the rendering
        this._cameraChanged = this._renderingEngine.cameraEngine.camera ? this._renderingEngine.cameraManager.updateCamera(deltaTime, aspect) : false;
        // animation loop - part 4: evaluating state
        const states = this.evaluateRenderingState();
        // toggle the blurring
        this.toggleBusyMode(states.busyMode);
        // animation loop - part 5: the scene is not even shown
        if (states.showScene === false) {
            // toggle on logo
            this.toggleLogo(true);
            if (this._hidden === false)
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_HIDDEN, { viewportId: this._renderingEngine.id });
            this._hidden = true;
            return;
        }
        else {
            // we delay for one render call as some of the postprocessing effects have artefacts in the first call
            if (this._hideLogo === true && this._hidden === true) {
                this.toggleLogo(false);
                this._hideLogo = false;
                if (this._hidden === true)
                    this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_VISIBLE, { viewportId: this._renderingEngine.id });
                this._hidden = false;
            }
            else {
                this._hideLogo = true;
                if (this._hidden === true)
                    this._renderingEngine.postProcessingManager.changeEffectPass();
            }
        }
        // animation loop - part 6: the scene is shown, but there is no active rendering happening
        if (states.rendering === false || this._renderingEngine.pause === true)
            return;
        // animation loop - part 7: there is actual rendering happening
        // do the things that have to be done for standard and beauty rendering in the same way
        this._stats.begin();
        this.showStatistics();
        // animation loop - part 8: calculate the current size
        const currentSize = new THREE.Vector2();
        this._renderingEngine.renderer.getSize(currentSize);
        if (!currentSize.equals(new THREE.Vector2(adjustedWidth, adjustedHeight))) {
            this._renderingEngine.renderer.setSize(adjustedWidth, adjustedHeight);
            this._renderingEngine.postProcessingManager.resize(adjustedWidth, adjustedHeight);
            this._renderingEngine.renderer.domElement.style.width = width + 'px';
            this._renderingEngine.renderer.domElement.style.height = height + 'px';
            this._renderingEngine.materialLoader.assignPointSize(this._renderingEngine.pointSize);
        }
        // animation loop - part 9: adjust the camera (the rendering state would be false if we didn't have a camera)
        const { camera, matrix } = this._renderingEngine.cameraManager.adjustCamera(aspect);
        // if a matrix is provided after a camera adjustment
        // that means that the turntable controls or the object controls are activated
        if (matrix) {
            for (let i = 0; i < this._tree.root.children.length; i++) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                if (!this._tree.root.children[i].sessionNode || this._tree.root.children[i].excludeViewports.includes(this._renderingEngine.id))
                    continue;
                const transform = this._tree.root.children[i].transformations.find(t => t.id === 'objectRotation');
                if (transform) {
                    transform.matrix = matrix;
                }
                else {
                    this._tree.root.children[i].addTransformation({
                        id: 'objectRotation',
                        matrix
                    });
                }
            }
            states.updateShadowMap = true;
            this._renderingEngine.sceneTreeManager.updateNode(undefined, undefined, { transformationOnly: true });
        }
        // animation loop - part 10: adjust the anchor elements
        this._renderingEngine.htmlElementAnchorLoader.adjustPositions(adjustedWidth / width, adjustedHeight / height);
        // animation loop - part 11: adjust some scene settings
        // enable / disable the shadow map
        const enabled = this._renderingEngine.renderer.shadowMap.enabled;
        this._renderingEngine.renderer.shadowMap.enabled = this._renderingEngine.usingSwiftShader || this._renderingEngine.type === viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.ATTRIBUTES ? false : this._renderingEngine.shadows;
        if (enabled !== this._renderingEngine.renderer.shadowMap.enabled)
            this._renderingEngine.materialLoader.updateMaterials();
        let threeJsLightObject, oldLightVisibility = true;
        // enable / disable lights
        if (this._renderingEngine.lights === false) {
            const ls = this._renderingEngine.lightEngine.lightScene;
            if (ls) {
                threeJsLightObject = ls.node.convertedObject[this._renderingEngine.id];
                if (threeJsLightObject) {
                    oldLightVisibility = threeJsLightObject.visible;
                    threeJsLightObject.visible = false;
                }
            }
        }
        // update shadowMap if need
        if (states.updateShadowMap && this._renderingEngine.renderer.shadowMap.enabled)
            this._renderingEngine.renderer.shadowMap.needsUpdate = true;
        // enable / disable the background
        this._renderingEngine.sceneTreeManager.scene.background = this._renderingEngine.environmentMapAsBackground ? this._renderingEngine.environmentMapLoader.environmentMap : null;
        // set the background color / alpha
        this._renderingEngine.renderer.setClearColor(new THREE.Color(this._converter.toThreeJsColorInput(this._renderingEngine.clearColor)), this._renderingEngine.clearAlpha);
        // check if we should render with post-processing
        const renderPostProcessing = (this._renderingEngine.postProcessingManager.effects.length > 0 || this._renderingEngine.postProcessingManager.manualPostProcessing) &&
            !(this._renderingEngine.postProcessingManager.enablePostProcessingOnMobile === false && this._systemInfo.isMobile === true);
        // animation loop - part 12: actual rendering separation
        if (states.softShadowRendering === true) {
            this.setShaderProperties();
            if (renderPostProcessing) {
                this._renderingEngine.postProcessingManager.render(deltaTime, camera);
            }
            else {
                this._renderingEngine.renderer.render(this._renderingEngine.sceneTreeManager.scene, camera);
            }
            // if the duration was long enough, disable the beauty rendering
            if (this._softShadowRenderingDurationActive >= this._renderingEngine.beautyRenderBlendingDuration) {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.RENDERING.BEAUTY_RENDERING_FINISHED, { viewportId: this._renderingEngine.id });
                this.deactivateBeautyRenderShaders();
                this._activeRendering = false;
            }
            else {
                this._softShadowRenderingDurationActive += deltaTime;
            }
        }
        else {
            if (renderPostProcessing) {
                this._renderingEngine.postProcessingManager.render(deltaTime, camera);
            }
            else {
                this._renderingEngine.renderer.render(this._renderingEngine.sceneTreeManager.scene, camera);
            }
            // if the beauty rendering was active, disable it
            if (this._softShadowRenderingActive) {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.RENDERING.BEAUTY_RENDERING_FINISHED, { viewportId: this._renderingEngine.id });
                this.deactivateBeautyRenderShaders();
                this._activeRendering = false;
            }
        }
        // reset the visibility of the threeJs light object
        if (threeJsLightObject)
            threeJsLightObject.visible = oldLightVisibility;
        if (this._renderingEngine.postRenderingCallback)
            this._renderingEngine.postRenderingCallback(this._renderingEngine.renderer, this._renderingEngine.scene, this._renderingEngine.camera);
        this._stats.end();
    }
    calculateSize() {
        let width = this._width, height = this._height;
        if (this._renderingEngine.automaticResizing) {
            width = this._renderingEngine.canvas.parentNode.clientWidth;
            height = this._renderingEngine.canvas.parentNode.clientHeight;
        }
        const aspect = width / height;
        let adjustedWidth = width, adjustedHeight = height;
        if (width > this._renderingEngine.maximumRenderingSize.width || height > this._renderingEngine.maximumRenderingSize.height) {
            if ((width - this._renderingEngine.maximumRenderingSize.width) / aspect > (height - this._renderingEngine.maximumRenderingSize.height)) {
                adjustedWidth = this._renderingEngine.maximumRenderingSize.width;
                adjustedHeight = this._renderingEngine.maximumRenderingSize.width / aspect;
            }
            else {
                adjustedWidth = this._renderingEngine.maximumRenderingSize.height * aspect;
                adjustedHeight = this._renderingEngine.maximumRenderingSize.height;
            }
        }
        return {
            width, adjustedWidth,
            height, adjustedHeight
        };
    }
    deactivateBeautyRenderShaders() {
        this._softShadowRenderingTimeout = null;
        this._softShadowRenderingActive = false;
        this._softShadowRenderingDurationActive = 0;
        this._renderingEngine.renderer.shadowMap.type = THREE.PCFSoftShadowMap;
        this._renderingEngine.renderer.shadowMap.needsUpdate = true;
        this._renderingEngine.materialLoader.updateSoftShadow(this._lightSizeUVStart, 0.1);
        this._renderingEngine.materialLoader.updateMaterials();
    }
    evaluateRenderingState() {
        // If there is a camera to show the scene and the setting for it is set to true, we show the scene
        let showScene = false;
        if (this._renderingEngine.cameraEngine.camera && this._renderingEngine.show === true)
            showScene = true;
        // If we should render at all
        let rendering = false;
        if (this._activeRendering === true || this._cameraChanged === true || this._sizeChanged === true || this._runningAnimation === true || this._continuousRendering === true)
            rendering = true;
        let updateShadowMap = false;
        if (this._runningAnimation === true || this._continuousShadowMapUpdate === true)
            updateShadowMap = true;
        // special case, autorotation
        if (this._renderingEngine.cameraEngine.camera) {
            const camera = this._renderingEngine.cameraEngine.camera;
            if (camera.type === viewer_rendering_engine_camera_engine_1.CAMERA_TYPE.PERSPECTIVE) {
                const controls = camera.controls;
                if (controls.enableAutoRotation === true && controls.autoRotationSpeed !== 0)
                    return { showScene, rendering: true, updateShadowMap, busyMode: this._renderingEngine.busy, softShadowRendering: false };
            }
        }
        else {
            rendering = false;
        }
        // If the scene should be blurred
        let busyMode = false;
        if (this._renderingEngine.busy)
            busyMode = true;
        // If we should render in beauty mode
        let softShadowRendering = false;
        if (this._softShadowRenderingActive === true && busyMode === false && this._continuousRendering === false &&
            (this._renderingEngine.shadows || !this._systemInfo.isIOS) &&
            this._renderingEngine.usingSwiftShader === false && this._runningAnimation === false && this._renderingEngine.type !== viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.ATTRIBUTES)
            softShadowRendering = true;
        return { showScene, rendering, updateShadowMap, busyMode, softShadowRendering };
    }
    setShaderProperties() {
        if (this._renderingEngine.softShadows === false) {
            this._renderingEngine.materialLoader.updateSoftShadow(this._lightSizeUVStart, 0);
            return 0;
        }
        const deltaTime = Math.min(this._softShadowRenderingDurationActive, this._renderingEngine.beautyRenderBlendingDuration);
        const percentage = deltaTime / this._renderingEngine.beautyRenderBlendingDuration;
        if (percentage < 0.25) {
            const percentageMapped = percentage / 0.25;
            this._renderingEngine.materialLoader.updateSoftShadow(this._lightSizeUVStart, percentageMapped);
        }
        else {
            const percentageMapped = (percentage - 0.25) / (1 - 0.25);
            // this._lightSizeUVStart -> this._lightSizeUVEnd
            this._renderingEngine.materialLoader.updateSoftShadow(this._lightSizeUVStart + (this._lightSizeUVEnd - this._lightSizeUVStart) * percentageMapped, 1.0);
        }
        return percentage;
    }
    showStatistics() {
        if (this._renderingEngine.showStatistics) {
            for (let i = 0; i < this._stats.stats.length; i++)
                this._stats.stats[i].dom.style.display = '';
        }
        else {
            for (let i = 0; i < this._stats.stats.length; i++)
                this._stats.stats[i].dom.style.display = 'none';
        }
    }
    startAndStopRendering() {
        this._activeRendering = true;
        this.stopBeautyRenderCountdown();
        this.startBeautyRenderCountdown();
    }
    startBeautyRenderCountdown() {
        this._softShadowRenderingTimeout = setTimeout(() => {
            this._softShadowRenderingActive = true;
            this._softShadowRenderingDurationActive = 0;
            this.activateBeautyRenderShaders();
        }, this._renderingEngine.beautyRenderDelay);
    }
    startRendering() {
        this._activeRendering = true;
        this.stopBeautyRenderCountdown();
    }
    stopBeautyRenderCountdown() {
        if (this._softShadowRenderingTimeout)
            clearTimeout(this._softShadowRenderingTimeout);
        this.deactivateBeautyRenderShaders();
    }
    stopRendering() {
        this.startBeautyRenderCountdown();
    }
    toggleBusyMode(toggle) {
        if (this._renderingEngine.branding.busyModeDisplay === viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY.BLUR) {
            this._renderingEngine.htmlElementAnchorLoader.toggleBusyMode(toggle);
            if (toggle) {
                if (navigator.userAgent.toLowerCase().indexOf('firefox') > -1 && navigator.userAgent.toLowerCase().indexOf('android') > -1)
                    return;
                this._renderingEngine.renderer.domElement.style.filter = 'blur(3px)';
            }
            else {
                this._renderingEngine.renderer.domElement.style.filter = '';
            }
        }
        else if (this._renderingEngine.branding.busyModeDisplay === viewer_rendering_engine_rendering_engine_1.BUSY_MODE_DISPLAY.SPINNER) {
            if (toggle) {
                this._renderingEngine.spinnerDivElement.style.visibility = 'visible';
            }
            else {
                this._renderingEngine.spinnerDivElement.style.visibility = 'hidden';
            }
        }
    }
    toggleLogo(toggle) {
        if (this._renderingEngine.logoDivElement)
            this._renderingEngine.logoDivElement.style.display = toggle ? 'inherit' : 'none';
        if (this._renderingEngine.canvas)
            this._renderingEngine.canvas.style.display = !toggle ? 'inherit' : 'none';
    }
}
exports.RenderingManager = RenderingManager;
//# sourceMappingURL=RenderingManager.js.map

/***/ }),

/***/ 27028:
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
exports.SceneTracingManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
const viewer_shared_services_1 = __webpack_require__(8389);
const gl_matrix_1 = __webpack_require__(61961);
class SceneTracingManager {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (1)
        this._raycaster = new THREE.Raycaster();
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    convert3Dto2D(p) {
        const canvasPageCoordinates = this._renderingEngine.canvas.getBoundingClientRect(), width = this._renderingEngine.canvas.width, height = this._renderingEngine.canvas.height;
        const camera = this._renderingEngine.cameraEngine.camera;
        if (!camera)
            throw new viewer_shared_services_1.ShapeDiverViewerViewportError('SceneTracingManager.convert3Dto2D: No camera is defined for this viewer.');
        if (camera instanceof viewer_rendering_engine_camera_engine_1.OrthographicCamera) {
            const direction = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), camera.target, camera.position);
            const length = gl_matrix_1.vec3.length(direction);
            gl_matrix_1.vec3.divide(direction, direction, gl_matrix_1.vec3.fromValues(length, length, length));
            this._raycaster.ray.direction.set(direction[0], direction[1], direction[2]);
            // set the origin of the ray to the opposite direction of the camera with the start at the initial provided point
            this._raycaster.ray.origin.set(p[0] + direction[0] * length, p[1] + direction[1] * length, p[2] + direction[2] * length);
        }
        else {
            this._raycaster.ray.direction.set(p[0], p[1], p[2]);
            this._raycaster.ray.origin.set(0, 0, 0);
            camera.convertedObject[this._renderingEngine.id].localToWorld(this._raycaster.ray.origin);
            this._raycaster.ray.direction.sub(this._raycaster.ray.origin);
            this._raycaster.ray.direction.normalize();
        }
        let closestIntersectionDistance = Number.MAX_VALUE;
        this._renderingEngine.sceneTreeManager.scene.traverseVisible((obj) => {
            if (obj instanceof THREE.Mesh) {
                const curIntersections = this._raycaster.intersectObject(obj);
                if (curIntersections.length)
                    if (curIntersections[0].distance < closestIntersectionDistance)
                        closestIntersectionDistance = curIntersections[0].distance;
            }
        });
        const pos = camera.project(gl_matrix_1.vec3.clone(p));
        pos[0] = (pos[0] * (width / 2)) + (width / 2);
        pos[1] = -(pos[1] * (height / 2)) + (height / 2);
        // take care of correction by device pixel ratio
        pos[0] = pos[0] / devicePixelRatio;
        pos[1] = pos[1] / devicePixelRatio;
        // epsilon is added as a distance spacer as users tend to put the anchors of html elements directly at the vertices
        // with this we prevent flickering
        const eps = 0.0001;
        return {
            hidden: closestIntersectionDistance + eps < gl_matrix_1.vec3.distance(camera.position, p),
            container: gl_matrix_1.vec2.clone(pos),
            client: gl_matrix_1.vec2.fromValues(pos[0] + canvasPageCoordinates.left, pos[1] + canvasPageCoordinates.top),
            page: gl_matrix_1.vec2.fromValues(pos[0] + canvasPageCoordinates.left + window.pageXOffset, pos[1] + canvasPageCoordinates.top + window.pageYOffset)
        };
    }
    init() { }
    /**
     * Calculate the ray that is created by the mouse event and the camera.
     *
     * @param event
     * @returns
     */
    pointerEventToRay(event) {
        const rect = this._renderingEngine.canvas.getBoundingClientRect();
        const camera = this._renderingEngine.cameraEngine.camera;
        if (!camera)
            throw new viewer_shared_services_1.ShapeDiverViewerViewportError('SceneTracingManager.pointerEventToRay: No camera is defined for this viewer.');
        const _mouse_x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
        const _mouse_y = -((event.clientY - rect.top) / rect.height) * 2 + 1;
        let origin = gl_matrix_1.vec3.clone(camera.position);
        if (camera instanceof viewer_rendering_engine_camera_engine_1.OrthographicCamera) {
            if (camera.direction == viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION.TOP) {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(_mouse_x * camera.right, _mouse_y * camera.top, 0));
            }
            else if (camera.direction == viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BOTTOM) {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(_mouse_x * camera.left, _mouse_y * camera.top, 0));
            }
            else if (camera.direction == viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION.LEFT) {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(0, _mouse_x * camera.left, _mouse_y * camera.top));
            }
            else if (camera.direction == viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION.RIGHT) {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(0, _mouse_x * camera.right, _mouse_y * camera.top));
            }
            else if (camera.direction == viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION.FRONT) {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(_mouse_x * camera.right, 0, _mouse_y * camera.top));
            }
            else if (camera.direction == viewer_rendering_engine_camera_engine_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BACK) {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(_mouse_x * camera.left, 0, _mouse_y * camera.top));
            }
            else {
                origin = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), camera.position, gl_matrix_1.vec3.fromValues(0, _mouse_x * camera.left, _mouse_y * camera.top));
            }
        }
        const direction = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), camera.unproject(gl_matrix_1.vec3.fromValues(_mouse_x, _mouse_y, 0.5)), origin));
        return { origin, direction };
    }
}
exports.SceneTracingManager = SceneTracingManager;
//# sourceMappingURL=SceneTracingManager.js.map

/***/ }),

/***/ 68198:
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
exports.SceneTreeManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
const viewer_rendering_engine_camera_engine_1 = __webpack_require__(17989);
const viewer_rendering_engine_light_engine_1 = __webpack_require__(9454);
const viewer_shared_types_1 = __webpack_require__(64766);
const viewer_shared_math_1 = __webpack_require__(67275);
const viewer_rendering_engine_rendering_engine_1 = __webpack_require__(45850);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const gl_matrix_1 = __webpack_require__(61961);
const SDData_1 = __webpack_require__(85284);
const SDBone_1 = __webpack_require__(23438);
const SDObject_1 = __webpack_require__(93867);
const ThreejsData_1 = __webpack_require__(54609);
/* eslint-disable @typescript-eslint/no-empty-function */
const viewer_shared_services_1 = __webpack_require__(8389);
// #endregion Type aliases (1)
// #region Classes (1)
class SceneTreeManager {
    // #endregion Properties (12)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (12)
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._inputValidator = viewer_shared_services_1.InputValidator.instance;
        this._scene = new THREE.Scene();
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._boundingBox = new viewer_shared_math_1.Box();
        this._boundingBoxSensitiveData = [];
        this._hiddenCamera = new THREE.PerspectiveCamera();
        this._lastRendererType = viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.STANDARD;
        this._lastRootVersion = '';
        this._scene.background = new THREE.Color('#ffffff');
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (4)
    get boundingBox() {
        return this._boundingBox;
    }
    get lastRendererType() {
        return this._lastRendererType;
    }
    get lastRootVersion() {
        return this._lastRootVersion;
    }
    get scene() {
        return this._scene;
    }
    // #endregion Public Getters And Setters (4)
    // #region Public Methods (6)
    init() { }
    isEmpty() {
        return ((this._boundingBox.min[0] === 0 && this._boundingBox.min[1] === 0 && this._boundingBox.min[2] === 0 &&
            this._boundingBox.max[0] === 0 && this._boundingBox.max[1] === 0 && this._boundingBox.max[2] === 0) || this._boundingBox.isEmpty());
    }
    /**
     * Convert the data of the scene graph node into the format of the implementation.
     *
     * @param data the data element
     * @param obj the corresponding type node
     */
    updateData(node, obj, data, filter, isVisibleInHierarchy, skeleton) {
        let dataChild = obj.children.find(oc => oc.SDid === data.id && oc.SDversion === data.version);
        let newChild = false;
        if (!dataChild) {
            newChild = true;
            dataChild = new SDData_1.SDData(data.id, data.version);
            obj.add(dataChild);
        }
        if (this._renderingEngine.type === viewer_rendering_engine_rendering_engine_1.RENDERER_TYPE.ATTRIBUTES) {
            this.injectAttributeData(node, data);
        }
        else {
            const sdtfTransform = node.getTransformation('sdtf');
            if (sdtfTransform)
                node.removeTransformation(sdtfTransform);
            if (data instanceof viewer_shared_types_1.GeometryData)
                data.attributeMaterial = null;
        }
        switch (true) {
            case data instanceof viewer_shared_types_1.GeometryData:
                {
                    dataChild.SDtype = SDData_1.SD_DATA_TYPE.GEOMETRY;
                    if (filter.transformationOnly === false)
                        this._renderingEngine.geometryLoader.load(data, dataChild, newChild, skeleton).clone();
                    let bb = new viewer_shared_math_1.Box();
                    if (skeleton) {
                        bb = data.primitive.computeBoundingBox(node.worldMatrix);
                    }
                    else {
                        const clone = dataChild.clone();
                        clone.applyTransformation(node.worldMatrix);
                        const threeBox = new THREE.Box3().setFromObject(clone, true);
                        bb = new viewer_shared_math_1.Box(gl_matrix_1.vec3.fromValues(threeBox.min.x, threeBox.min.y, threeBox.min.z), gl_matrix_1.vec3.fromValues(threeBox.max.x, threeBox.max.y, threeBox.max.z));
                    }
                    // adjust the general BB
                    node.boundingBox.union(bb);
                    // create the specific BB if it doesn't exist yet
                    if (!node.boundingBoxViewport[this._renderingEngine.id])
                        node.boundingBoxViewport[this._renderingEngine.id] = new viewer_shared_math_1.Box();
                    // adjust the specific BB
                    node.boundingBoxViewport[this._renderingEngine.id].union(bb);
                }
                break;
            case data instanceof ThreejsData_1.ThreejsData:
                {
                    dataChild.SDtype = SDData_1.SD_DATA_TYPE.THREEJS;
                    dataChild.add(data.obj);
                    const bbThree = new THREE.Box3().setFromObject(data.obj);
                    // adjust the general BB
                    node.boundingBox.union(new viewer_shared_math_1.Box(gl_matrix_1.vec3.fromValues(...bbThree.min.toArray()), gl_matrix_1.vec3.fromValues(...bbThree.max.toArray())));
                    // create the specific BB if it doesn't exist yet
                    if (!node.boundingBoxViewport[this._renderingEngine.id])
                        node.boundingBoxViewport[this._renderingEngine.id] = new viewer_shared_math_1.Box();
                    // adjust the specific BB
                    node.boundingBoxViewport[this._renderingEngine.id].union(new viewer_shared_math_1.Box(gl_matrix_1.vec3.fromValues(...bbThree.min.toArray()), gl_matrix_1.vec3.fromValues(...bbThree.max.toArray())));
                }
                break;
            case data instanceof viewer_shared_types_1.AbstractMaterialData:
                dataChild.SDtype = SDData_1.SD_DATA_TYPE.MATERIAL;
                break;
            case data instanceof viewer_rendering_engine_light_engine_1.AbstractLight:
                dataChild.SDtype = SDData_1.SD_DATA_TYPE.LIGHT;
                if (filter.transformationOnly === false)
                    this._renderingEngine.lightLoader.load(data, dataChild);
                if (data instanceof viewer_rendering_engine_light_engine_1.DirectionalLight && data.useNodeData === false)
                    this._boundingBoxSensitiveData.push({ data: data, dataChild });
                break;
            case data instanceof viewer_rendering_engine_camera_engine_1.AbstractCamera:
                dataChild.SDtype = SDData_1.SD_DATA_TYPE.CAMERA;
                if (filter.transformationOnly === false)
                    this._renderingEngine.cameraManager.load(data, dataChild);
                break;
            case data instanceof viewer_shared_types_1.HTMLElementAnchorData:
                dataChild.SDtype = SDData_1.SD_DATA_TYPE.HTML_ELEMENT_ANCHOR;
                if (filter.transformationOnly === false)
                    this._renderingEngine.htmlElementAnchorLoader.load(node, data, isVisibleInHierarchy);
                break;
            case data instanceof viewer_shared_types_1.AnimationData:
                dataChild.SDtype = SDData_1.SD_DATA_TYPE.ANIMATION;
                break;
            default:
                // if there is no valid conversion here, call the convertData of the implementation
                break;
        }
    }
    updateMorphWeights(node = this._tree.root, obj = this._mainNode) {
        if (!node || !obj)
            return;
        for (let i = 0, len = node.data.length; i < len; i++) {
            if (node.data[i] instanceof viewer_shared_types_1.GeometryData) {
                const data = node.data[i];
                const dataChild = obj.children.find(oc => oc.SDid === data.id && oc.SDversion === data.version);
                if (dataChild)
                    dataChild.traverse(o => {
                        if (o instanceof THREE.Points ||
                            o instanceof THREE.LineSegments ||
                            o instanceof THREE.LineLoop ||
                            o instanceof THREE.Line ||
                            o instanceof THREE.Mesh)
                            o.morphTargetInfluences = data.morphWeights;
                    });
            }
        }
        for (let i = 0, len = node.children.length; i < len; i++) {
            const nodeChild = node.children[i];
            if (!nodeChild)
                continue;
            const objChild = obj.children.find(oc => oc.SDid === nodeChild.id);
            if (objChild)
                this.updateMorphWeights(nodeChild, objChild);
        }
    }
    /**
     * Update the current node via the scene graph node.
     * Convert the data if needed.
     *
     * @param node the scene graph node
     * @param obj the current type object
     */
    updateNode(node = this._tree.root, obj, filter = { transformationOnly: false }, visibleInHierarchy = true, skeleton) {
        if (obj === undefined) {
            // check if there is a converted object
            if (node.convertedObject[this._renderingEngine.id]) {
                obj = node.convertedObject[this._renderingEngine.id];
            }
            else {
                // the node has not been converted yet
                // go up the hierarchy until a converted object is found
                let parent = node.parent;
                while (parent) {
                    if (parent.convertedObject[this._renderingEngine.id]) {
                        this.updateNode(parent, parent.convertedObject[this._renderingEngine.id], filter, visibleInHierarchy, skeleton);
                        return;
                    }
                    else {
                        parent = parent.parent;
                    }
                }
                // no converted object found in the hierarchy
                // update the whole scene tree
                this.updateSceneTree(this._tree.root);
                return;
            }
        }
        const convertedObject = obj;
        // reset the general bounding box of the current node
        // it will be recomputed in the following steps
        node.boundingBox.reset();
        // create the specific BB if it doesn't exist yet
        if (!node.boundingBoxViewport[this._renderingEngine.id])
            node.boundingBoxViewport[this._renderingEngine.id] = new viewer_shared_math_1.Box();
        // reset the specific bounding box of the current node
        // it will be recomputed in the following steps
        node.boundingBoxViewport[this._renderingEngine.id].reset();
        if (filter.transformationOnly === false) {
            // remove all data items that do not exist anymore
            const dataIds = node.data.map(d => d.id);
            const dataToRemove = convertedObject.children.filter(oc => {
                if (oc instanceof SDData_1.SDData) {
                    if (dataIds.includes(oc.SDid)) {
                        const data = node.data.find(d => d.id === oc.SDid);
                        if (data && data.version !== oc.SDversion) {
                            // version is different
                            return true;
                        }
                        else {
                            return false;
                        }
                    }
                    else {
                        // id not included anymore
                        return true;
                    }
                }
                else {
                    return false;
                }
            });
            dataToRemove.forEach(dTR => {
                this.removeData(dTR);
                convertedObject.remove(dTR);
            });
            // remove all child nodes in the transformed object that do not exist anymore
            // the filter goes also through the data items as they were already added
            const nodeIds = node.children.filter(d => !d.excludeViewports.includes(this._renderingEngine.id)).map(d => d.id);
            const childrenToRemove = convertedObject.children.filter(oc => {
                if (oc instanceof SDObject_1.SDObject && !(oc instanceof SDData_1.SDData)) {
                    if (nodeIds.includes(oc.SDid)) {
                        return false;
                    }
                    else {
                        // id not included anymore
                        return true;
                    }
                }
                else {
                    return false;
                }
            });
            childrenToRemove.forEach(cTR => {
                cTR.traverse(o => {
                    if (o instanceof SDData_1.SDData)
                        this.removeData(o);
                });
                convertedObject.remove(cTR);
            });
        }
        // create the skeleton if the node is marked as the skin node (root node of the skeleton)
        if (node.skinNode === true) {
            const bones = [];
            for (let i = 0; i < node.bones.length; i++)
                bones.push(this.getBone(node.bones[i]));
            const boneInverses = [];
            for (let i = 0; i < node.boneInverses.length; i++)
                boneInverses.push(new THREE.Matrix4().fromArray(node.boneInverses[i]));
            skeleton = new THREE.Skeleton(bones, boneInverses);
        }
        const isVisible = node.visible && !node.excludeViewports.includes(this._renderingEngine.id) && !(node.restrictViewports.length > 0 && !node.restrictViewports.includes(this._renderingEngine.id));
        const isVisibleInHierarchy = visibleInHierarchy && isVisible;
        // convert all data items of the current node
        // old versions will be replaced by new ones
        for (let i = 0, len = node.data.length; i < len; i++)
            this.updateData(node, convertedObject, node.data[i], filter, isVisibleInHierarchy, skeleton);
        // add new children and update the ones that have a different version
        for (let i = 0, len = node.children.length; i < len; i++) {
            const nodeChild = node.children[i];
            const objChild = convertedObject.children.find(oc => oc.SDid === nodeChild.id);
            if (!objChild) {
                const newChild = node.data.find(d => d instanceof viewer_shared_types_1.BoneData) ? new SDBone_1.SDBone(nodeChild.id, nodeChild.version) : new SDObject_1.SDObject(nodeChild.id, nodeChild.version);
                const oldChild = nodeChild.convertedObject[this._renderingEngine.id];
                nodeChild.convertedObject[this._renderingEngine.id] = newChild;
                if (nodeChild.updateCallbackConvertedObject)
                    nodeChild.updateCallbackConvertedObject(newChild, oldChild, this._renderingEngine.id);
                convertedObject.add(newChild);
                this.updateNode(nodeChild, newChild, filter, isVisibleInHierarchy, skeleton);
            }
            else if (objChild.SDversion !== nodeChild.version) {
                // if the version is different, update the child
                this.updateNode(nodeChild, objChild, filter, isVisibleInHierarchy, skeleton);
                objChild.SDversion = nodeChild.version;
            }
            else {
                this.updateNode(nodeChild, objChild, filter, isVisibleInHierarchy, skeleton);
            }
            // adjust the general BB
            if (!nodeChild.boundingBox.isEmpty())
                node.boundingBox.union(nodeChild.boundingBox);
            // adjust the specific BB
            if (nodeChild.boundingBoxViewport[this._renderingEngine.id] && !nodeChild.boundingBoxViewport[this._renderingEngine.id].isEmpty()) {
                // only do this if the node is
                // 1. visible
                // 2. no included in the "excludeViewports"
                // 3. if there are "restrictViewports", it needs to be in them
                if (isVisible)
                    node.boundingBoxViewport[this._renderingEngine.id].union(nodeChild.boundingBoxViewport[this._renderingEngine.id]);
            }
        }
        convertedObject.visible = node.visible && !node.excludeViewports.includes(this._renderingEngine.id) && !(node.restrictViewports.length > 0 && !node.restrictViewports.includes(this._renderingEngine.id));
        convertedObject.applyTransformation(node.nodeMatrix);
    }
    updateSceneTree(root) {
        var _a, _b;
        if (this._tree.root.version === this._lastRootVersion)
            return;
        this._lastRootVersion = this._tree.root.version;
        this._lastRendererType = this._renderingEngine.type;
        if (this._renderingEngine.closed)
            return;
        const oldBB = this._boundingBox.clone();
        this._boundingBox = new viewer_shared_math_1.Box();
        this._renderingEngine.lightLoader.shadowMapCount = 0;
        if (!this._mainNode) {
            this._mainNode = new SDObject_1.SDObject(root.id, root.version);
            const oldObj = root.convertedObject[this._renderingEngine.id];
            root.convertedObject[this._renderingEngine.id] = this._mainNode;
            if (root.updateCallbackConvertedObject)
                root.updateCallbackConvertedObject(this._mainNode, oldObj, this._renderingEngine.id);
            this._scene.add(this._mainNode);
        }
        this._boundingBoxSensitiveData = [];
        this._currentSDTFOverview = this.createSDTFOverview();
        this.updateNode(root, this._mainNode);
        this._boundingBox = root.boundingBoxViewport[this._renderingEngine.id].clone();
        for (let i = 0; i < this._boundingBoxSensitiveData.length; i++)
            this._renderingEngine.lightLoader.adjustToBoundingBox(this._boundingBoxSensitiveData[i].data, this._boundingBoxSensitiveData[i].dataChild, this._boundingBox);
        if (!(this._boundingBox.min[0] === oldBB.min[0] && this._boundingBox.min[1] === oldBB.min[1] && this._boundingBox.min[2] === oldBB.min[2] &&
            this._boundingBox.max[0] === oldBB.max[0] && this._boundingBox.max[1] === oldBB.max[1] && this._boundingBox.max[2] === oldBB.max[2])) {
            if (!((_a = this._stateEngine.viewportEngines[this._renderingEngine.id]) === null || _a === void 0 ? void 0 : _a.boundingBoxCreated.resolved) && !this._boundingBox.isEmpty())
                (_b = this._stateEngine.viewportEngines[this._renderingEngine.id]) === null || _b === void 0 ? void 0 : _b.boundingBoxCreated.resolve(true);
            this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_CHANGE, {
                viewportId: this._renderingEngine.id, boundingBox: {
                    min: gl_matrix_1.vec3.clone(this._boundingBox.min),
                    max: gl_matrix_1.vec3.clone(this._boundingBox.max),
                }
            });
        }
        if (this._boundingBox.isEmpty()) {
            // check if all outputs that should be loaded at the start of a session are loaded
            // if the bounding box is empty then, emit the event
            if (Object.values(this._stateEngine.sessionEngines).every(s => s && s.initialOutputsLoaded.resolved === true)) {
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_EMPTY, {
                    viewportId: this._renderingEngine.id
                });
            }
        }
        this._renderingEngine.renderingManager.evaluateTextureUnitCount(this._renderingEngine.lightLoader.shadowMapCount + this._renderingEngine.materialLoader.maxMapCount);
        /**
         *
         * Three.js texture upload and compiling
         * This step is needed as three.js would compile the shaders and initialize the texture on the first render call instead.
         *
         */
        // we initialize all texture and then clear the cache
        const threeJsTextureCache = this._renderingEngine.materialLoader.threeJsTextureCache;
        for (const key in threeJsTextureCache) {
            if (threeJsTextureCache[key].usage === 0) {
                threeJsTextureCache[key].texture.dispose();
                delete threeJsTextureCache[key];
            }
            else if (threeJsTextureCache[key].initialized === false) {
                this._renderingEngine.renderer.initTexture(threeJsTextureCache[key].texture);
                threeJsTextureCache[key].initialized = true;
            }
        }
        // we compile the shaders
        this._renderingEngine.renderer.compile(this._renderingEngine.scene, this._hiddenCamera);
    }
    // #endregion Public Methods (6)
    // #region Private Methods (5)
    collectSDTFItemData(node) {
        for (let i = 0, len = node.data.length; i < len; i++)
            if (node.data[i] instanceof viewer_shared_types_1.SDTFItemData)
                return node.data[i];
        if (!node.parent)
            return;
        return this.collectSDTFItemData(node.parent);
    }
    createSDTFOverview(node = this._tree.root) {
        const out = new viewer_shared_types_1.SDTFOverviewData({});
        for (let i = 0, len = node.data.length; i < len; i++)
            if (node.data[i] instanceof viewer_shared_types_1.SDTFOverviewData)
                out.merge(node.data[i]);
        for (let i = 0, len = node.children.length; i < len; i++)
            out.merge(new viewer_shared_types_1.SDTFOverviewData(this.createSDTFOverview(node.children[i])));
        return out.overview;
    }
    getBone(node) {
        let bone;
        this._mainNode.traverse((o) => {
            if (o.SDid === node.id)
                bone = o;
        });
        return bone;
    }
    injectAttributeData(node, data) {
        const itemData = this.collectSDTFItemData(node);
        const visData = {
            material: new viewer_shared_types_1.MaterialStandardData({ color: this._renderingEngine.defaultMaterialColor, opacity: 1 }),
            matrix: gl_matrix_1.mat4.create()
        };
        if (this._renderingEngine.visualizeAttributes) {
            const userVisData = this._renderingEngine.visualizeAttributes(this._currentSDTFOverview, itemData);
            this._inputValidator.validateAndError('Viewer.visualizeAttributes', userVisData, 'object', true);
            this._inputValidator.validateAndError('Viewer.visualizeAttributes', userVisData.matrix, 'mat4', true);
            visData.material = userVisData.material;
            visData.matrix = userVisData.matrix;
        }
        node.addTransformation({
            id: 'sdtf',
            matrix: visData.matrix
        });
        if (data instanceof viewer_shared_types_1.GeometryData)
            data.attributeMaterial = visData.material;
    }
    removeData(dataObject) {
        if (dataObject.userData.removed === true)
            return;
        dataObject.userData.removed = true;
        switch (true) {
            case dataObject.SDtype === SDData_1.SD_DATA_TYPE.GEOMETRY:
                dataObject.traverse((o) => {
                    if (dataObject.id !== o.id && o.userData.removed === true)
                        return;
                    o.userData.removed = true;
                    if (o instanceof THREE.Mesh || o instanceof THREE.Line || o instanceof THREE.Points || o instanceof THREE.LineSegments || o instanceof THREE.LineLoop) {
                        this.scene.remove(o);
                        this._renderingEngine.geometryLoader.removeFromGeometryCache(o.geometry.userData.SDid + '_' + o.geometry.userData.SDversion);
                        this._renderingEngine.materialLoader.removeFromMaterialCache(o.material.userData.SDid + '_' + o.material.userData.SDversion);
                        const texturesToRemove = [];
                        for (const t in o.material) {
                            if (o.material[t] instanceof THREE.Texture) {
                                o.material[t].name = t;
                                if (t !== 'envMap') {
                                    if (!texturesToRemove.includes(o.material[t]))
                                        texturesToRemove.push(o.material[t]);
                                }
                            }
                        }
                        for (const texture of texturesToRemove) {
                            if (texture.userData.cacheKey) {
                                this._renderingEngine.materialLoader.threeJsTextureCache[texture.userData.cacheKey].usage--;
                            }
                            else {
                                if (texture.name === 'sphericalNormalMap') {
                                    this._renderingEngine.geometryLoader.removeFromGemSphericalMapsCache(o.geometry.userData.primitiveSDid + '_' + o.geometry.userData.primitiveSDversion);
                                    texture.dispose();
                                }
                                else {
                                    texture.dispose();
                                }
                            }
                        }
                    }
                });
                break;
            case dataObject.SDtype === SDData_1.SD_DATA_TYPE.THREEJS:
                break;
            case dataObject.SDtype === SDData_1.SD_DATA_TYPE.MATERIAL:
                break;
            case dataObject.SDtype === SDData_1.SD_DATA_TYPE.LIGHT:
                dataObject.traverse((o) => {
                    if (o instanceof THREE.Light)
                        o.dispose();
                });
                break;
            case dataObject.SDtype === SDData_1.SD_DATA_TYPE.HTML_ELEMENT_ANCHOR:
                this._renderingEngine.htmlElementAnchorLoader.removeData(dataObject.SDid, dataObject.SDversion);
                break;
            case dataObject.SDtype === SDData_1.SD_DATA_TYPE.ANIMATION:
                break;
            default:
                // if there is no valid conversion here, call the convertData of the implementation
                break;
        }
    }
}
exports.SceneTreeManager = SceneTreeManager;
// #endregion Classes (1)
//# sourceMappingURL=SceneTreeManager.js.map

/***/ }),

/***/ 79581:
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
exports.GodRaysManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
class GodRaysManager {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        this._lightSource = null;
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    removeLightSource() {
        this._godRaysEffect.lightSource = new THREE.Mesh();
    }
    setEffect(godRaysEffect) {
        this._godRaysEffect = godRaysEffect;
        this._godRaysEffect.lightSource = this._lightSource;
    }
    setLightSource(node) {
        this._lightSource = null;
        node.convertedObject[this._renderingEngine.id].traverse(o => {
            if (o instanceof THREE.Mesh || o instanceof THREE.Points)
                this._lightSource = o;
        });
        if (this._lightSource) {
            if (Array.isArray(this._lightSource.material)) {
                this._lightSource.material.forEach(m => m.transparent = true);
                this._lightSource.material.forEach(m => m.depthWrite = false);
            }
            else {
                this._lightSource.material.transparent = true;
                this._lightSource.material.depthWrite = false;
            }
        }
        this._godRaysEffect.lightSource = this._lightSource;
    }
}
exports.GodRaysManager = GodRaysManager;
//# sourceMappingURL=GodRaysManager.js.map

/***/ }),

/***/ 93654:
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
exports.OutlineManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
class OutlineManager {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        this._outlineNodes = [];
    }
    // #endregion Constructors (1)
    // #region Public Methods (5)
    addSelection(node) {
        this._outlineNodes.push(node);
        this.updateOutlineEffectObjects();
    }
    clearSelection() {
        this._outlineNodes = [];
        this.updateOutlineEffectObjects();
    }
    removeSelection(node) {
        const index = this._outlineNodes.indexOf(node);
        if (index !== -1)
            this._outlineNodes.splice(index, 1);
        this.updateOutlineEffectObjects();
        return index !== -1;
    }
    setEffect(outlineEffect) {
        this._outlineEffect = outlineEffect;
        this.updateOutlineEffectObjects();
    }
    updateOutlineEffectObjects() {
        this._outlineEffect.selection.clear();
        for (let i = 0; i < this._outlineNodes.length; i++) {
            this._outlineNodes[i].convertedObject[this._renderingEngine.id].traverse(o => {
                if (o instanceof THREE.Mesh)
                    this._outlineEffect.selection.add(o);
            });
        }
    }
}
exports.OutlineManager = OutlineManager;
//# sourceMappingURL=OutlineManager.js.map

/***/ }),

/***/ 83982:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSAARenderPass = void 0;
const postprocessing_1 = __webpack_require__(66739);
const three_1 = __webpack_require__(39437);
const CopyShader_1 = __webpack_require__(74841);
const FullScreenQuad_1 = __webpack_require__(73987);
const CopyMaterial_1 = __webpack_require__(397);
let geometry = null;
/**
 * Returns a shared fullscreen triangle.
 *
 * The screen size is 2x2 units (NDC). A triangle needs to be 4x4 units to fill the screen.
 *
 * @private
 * @return {BufferGeometry} The fullscreen geometry.
 */
const getFullscreenTriangle = () => {
    if (geometry === null) {
        const vertices = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]);
        const uvs = new Float32Array([0, 0, 2, 0, 0, 2]);
        geometry = new three_1.BufferGeometry();
        geometry.setAttribute("position", new three_1.BufferAttribute(vertices, 3));
        geometry.setAttribute("uv", new three_1.BufferAttribute(uvs, 2));
    }
    return geometry;
};
/**
*
* Supersample Anti-Aliasing Render Pass
*
* This manual approach to SSAA re-renders the scene once for each sample with camera jitter and accumulates the results.
*
* References: https://en.wikipedia.org/wiki/Supersampling
*
* original implementation from three.js@0.152.2 was modified to work with the postprocessing library
*
*/
class SSAARenderPass extends postprocessing_1.Pass {
    // #endregion Properties (9)
    // #region Constructors (1)
    constructor(scene, camera) {
        super("SSAARenderPass", scene, camera);
        this._clearColor = new three_1.Color();
        this._oldClearColor = new three_1.Color();
        this._sampleLevel = 2;
        this._unbiased = true;
        this.needsSwap = false;
        this._sampleRenderTarget = new three_1.WebGLRenderTarget(1, 1, {
            type: three_1.HalfFloatType,
        });
        this._sampleRenderTarget.texture.name = "SSAARender.Target";
        this._sampleRenderTarget.texture.colorSpace = three_1.SRGBColorSpace;
        const copyShader = CopyShader_1.CopyShader;
        this._copyUniforms = three_1.UniformsUtils.clone(copyShader.uniforms);
        // Create a copy material to render the ssaa sample render target to.
        this._ssaaCopyMaterial = new three_1.ShaderMaterial({
            uniforms: this._copyUniforms,
            vertexShader: copyShader.vertexShader,
            fragmentShader: copyShader.fragmentShader,
            transparent: true,
            depthTest: false,
            depthWrite: false,
            // do not use AdditiveBlending because it mixes the alpha channel instead of adding
            blending: three_1.CustomBlending,
            blendEquation: three_1.AddEquation,
            blendDst: three_1.OneFactor,
            blendDstAlpha: three_1.OneFactor,
            blendSrc: three_1.SrcAlphaFactor,
            blendSrcAlpha: three_1.OneFactor,
        });
        this._fsQuad = new FullScreenQuad_1.FullScreenQuad(this._ssaaCopyMaterial);
        // create a second copy material to render the final results to
        this._copyMaterial = new CopyMaterial_1.CopyMaterial();
        this._fullScreen = new three_1.Mesh(getFullscreenTriangle(), this._copyMaterial);
        this._fullScreen.frustumCulled = false;
        // clear pass for color and depth
        this._clearPass = new postprocessing_1.ClearPass(true, true, false);
    }
    // #endregion Constructors (1)
    // #region Public Accessors (6)
    set mainCamera(value) {
        this.camera = value;
    }
    set mainScene(value) {
        this.scene = value;
    }
    get renderToScreen() {
        return super.renderToScreen;
    }
    set renderToScreen(value) {
        super.renderToScreen = value;
    }
    get sampleLevel() {
        return this._sampleLevel;
    }
    /**
     * specified as n, where the number of samples is 2^n, so sampleLevel = 4, is 2^4 samples, 16.
     */
    set sampleLevel(value) {
        this._sampleLevel = value;
    }
    /**
     * to cancel out rounding errors
     */
    set unbiased(value) {
        this._unbiased = value;
    }
    // #endregion Public Accessors (6)
    // #region Public Methods (3)
    dispose() {
        this._sampleRenderTarget.dispose();
        this._ssaaCopyMaterial.dispose();
        this._fsQuad.dispose();
    }
    /**
     * Renders the scene.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
        // set clear color / clear alpha / color space from the current renderer
        this._clearColor = renderer.getClearColor(new three_1.Color());
        this._clearAlpha = renderer.getClearAlpha();
        this._sampleRenderTarget.texture.colorSpace = renderer.outputColorSpace;
        const jitterOffsets = _JitterVectors[Math.max(0, Math.min(this._sampleLevel, 5))];
        // save the original auto clear and set to false
        const autoClear = renderer.autoClear;
        renderer.autoClear = false;
        // save the original clear color and alpha
        renderer.getClearColor(this._oldClearColor);
        const oldClearAlpha = renderer.getClearAlpha();
        const baseSampleWeight = 1.0 / jitterOffsets.length;
        const roundingRange = 1 / 32;
        this._copyUniforms["tDiffuse"].value = this._sampleRenderTarget.texture;
        const viewOffset = {
            fullWidth: inputBuffer.width,
            fullHeight: inputBuffer.height,
            offsetX: 0,
            offsetY: 0,
            width: inputBuffer.width,
            height: inputBuffer.height,
        };
        const originalViewOffset = Object.assign({}, this.camera.view);
        if (originalViewOffset.enabled)
            Object.assign(viewOffset, originalViewOffset);
        // render the scene multiple times, each slightly jitter offset from the last and accumulate the results.
        for (let i = 0; i < jitterOffsets.length; i++) {
            const jitterOffset = jitterOffsets[i];
            if (this.camera.setViewOffset) {
                this.camera.setViewOffset(viewOffset.fullWidth, viewOffset.fullHeight, viewOffset.offsetX + jitterOffset[0] * 0.0625, viewOffset.offsetY + jitterOffset[1] * 0.0625, // 0.0625 = 1 / 16
                viewOffset.width, viewOffset.height);
            }
            let sampleWeight = baseSampleWeight;
            if (this._unbiased) {
                // the theory is that equal weights for each sample lead to an accumulation of rounding errors.
                // The following equation varies the sampleWeight per sample so that it is uniformly distributed
                // across a range of values whose rounding errors cancel each other out.
                const uniformCenteredDistribution = -0.5 + (i + 0.5) / jitterOffsets.length;
                sampleWeight += roundingRange * uniformCenteredDistribution;
            }
            renderer.setClearColor(this._clearColor, this._clearAlpha);
            renderer.setRenderTarget(this._sampleRenderTarget);
            renderer.clear();
            renderer.render(this.scene, this.camera);
            renderer.setRenderTarget(this.renderToScreen ? null : outputBuffer);
            if (i === 0) {
                renderer.setClearColor(0x000000, 0.0);
                renderer.clear();
            }
            // set the weight of the current samples in the ssaaCopyMaterial
            this._copyUniforms["opacity"].value = sampleWeight;
            // render the sampleRenderTarget to fullscreen
            this._fsQuad.render(renderer);
        }
        // clear color and depth
        this._clearPass.render(renderer, inputBuffer, inputBuffer);
        // render to the final result to fullscreen
        this._copyMaterial.uniforms.inputBuffer.value = outputBuffer.texture;
        this._copyMaterial.uniforms.opacity.value = 1;
        renderer.setRenderTarget(this.renderToScreen ? null : inputBuffer);
        this.scene.add(this._fullScreen);
        renderer.render(this.scene, this.camera);
        this.scene.remove(this._fullScreen);
        if (this.camera.setViewOffset && originalViewOffset.enabled) {
            this.camera.setViewOffset(originalViewOffset.fullWidth, originalViewOffset.fullHeight, originalViewOffset.offsetX, originalViewOffset.offsetY, originalViewOffset.width, originalViewOffset.height);
        }
        else if (this.camera.clearViewOffset) {
            this.camera.clearViewOffset();
        }
        renderer.autoClear = autoClear;
        renderer.setClearColor(this._oldClearColor, oldClearAlpha);
    }
    setSize(width, height) {
        this._sampleRenderTarget.setSize(width, height);
    }
}
exports.SSAARenderPass = SSAARenderPass;
const _JitterVectors = [
    [
        [0, 0]
    ],
    [
        [4, 4], [-4, -4]
    ],
    [
        [-2, -6], [6, -2], [-6, 2], [2, 6]
    ],
    [
        [1, -3], [-1, 3], [5, 1], [-3, -5],
        [-5, 5], [-7, -1], [3, 7], [7, -7]
    ],
    [
        [1, 1], [-1, -3], [-3, 2], [4, -1],
        [-5, -2], [2, 5], [5, 3], [3, -5],
        [-2, 6], [0, -7], [-4, -6], [-6, 4],
        [-8, 0], [7, -4], [6, 7], [-7, -8]
    ],
    [
        [-4, -7], [-7, -5], [-3, -5], [-5, -4],
        [-1, -4], [-2, -2], [-6, -1], [-4, 0],
        [-7, 1], [-1, 2], [-6, 3], [-3, 3],
        [-7, 6], [-3, 6], [-5, 7], [-1, 7],
        [5, -7], [1, -6], [6, -5], [4, -4],
        [2, -3], [7, -2], [1, -1], [4, -1],
        [2, 1], [6, 2], [0, 4], [4, 4],
        [2, 5], [7, 5], [5, 6], [3, 7]
    ]
];
//# sourceMappingURL=SSAARenderPass.js.map

/***/ }),

/***/ 26207:
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
exports.SelectiveBloomManager = void 0;
const THREE = __importStar(__webpack_require__(39437));
class SelectiveBloomManager {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        this._selectiveBloomNodes = [];
    }
    // #endregion Constructors (1)
    // #region Public Methods (5)
    addSelection(node) {
        this._selectiveBloomNodes.push(node);
        this.updateSelectiveBloomEffectObjects();
    }
    clearSelection() {
        this._selectiveBloomNodes = [];
        this.updateSelectiveBloomEffectObjects();
    }
    removeSelection(node) {
        const index = this._selectiveBloomNodes.indexOf(node);
        if (index !== -1)
            this._selectiveBloomNodes.splice(index, 1);
        this.updateSelectiveBloomEffectObjects();
        return index !== -1;
    }
    setEffect(selectiveBloomEffect) {
        this._selectiveBloomEffect = selectiveBloomEffect;
        this.updateSelectiveBloomEffectObjects();
    }
    updateSelectiveBloomEffectObjects() {
        this._selectiveBloomEffect.selection.clear();
        for (let i = 0; i < this._selectiveBloomNodes.length; i++) {
            this._selectiveBloomNodes[i].convertedObject[this._renderingEngine.id].traverse(o => {
                if (o instanceof THREE.Mesh)
                    this._selectiveBloomEffect.selection.add(o);
            });
        }
    }
}
exports.SelectiveBloomManager = SelectiveBloomManager;
//# sourceMappingURL=SelectiveBloomManager.js.map

/***/ }),

/***/ 94296:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AOEffect = void 0;
const postprocessing_1 = __webpack_require__(66739);
const three_1 = __webpack_require__(39437);
const PoissionDenoisePass_1 = __webpack_require__(50438);
const ao_compose_1 = __webpack_require__(66180);
const NormalPass_1 = __webpack_require__(79191);
const defaultAOOptions = Object.assign({ resolutionScale: 1, spp: 8, distancePower: 1, power: 2, bias: 40, thickness: 0.075, color: new three_1.Color('black'), useNormalPass: false, velocityDepthNormalPass: null }, PoissionDenoisePass_1.PoissionDenoisePass.DefaultOptions);
class AOEffect extends postprocessing_1.Effect {
    // #endregion Properties (7)
    // #region Constructors (1)
    constructor(composer, camera, scene, aoPass, options = defaultAOOptions) {
        var _a, _b;
        super('AOEffect', ao_compose_1.ao_compose, {
            uniforms: new Map([
                ['inputTexture', new three_1.Uniform(null)],
                ['depthTexture', new three_1.Uniform(null)],
                ['power', new three_1.Uniform(0)],
                ['color', new three_1.Uniform(new three_1.Color('black'))]
            ])
        });
        this.lastSize = { width: 0, height: 0, resolutionScale: 0 };
        this.resolutionScale = 1;
        this.composer = composer;
        this.aoPass = aoPass;
        options = Object.assign(Object.assign({}, defaultAOOptions), options);
        this.normalPass = new NormalPass_1.NormalPass(scene, camera);
        const normalTexture = (_a = options.normalTexture) !== null && _a !== void 0 ? _a : (_b = this.normalPass) === null || _b === void 0 ? void 0 : _b.texture;
        this.aoPass.fullscreenMaterial.uniforms.normalTexture.value = normalTexture;
        this.aoPass.fullscreenMaterial.defines.useNormalTexture = '';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.aoPass.fullscreenMaterial.uniforms.depthTexture.value = this.normalPass.depthTexture;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.uniforms.get('depthTexture').value = this.normalPass.depthTexture;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.poissionDenoisePass = new PoissionDenoisePass_1.PoissionDenoisePass(camera, this.aoPass.texture, this.normalPass.depthTexture);
        this.makeOptionsReactive(options);
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    makeOptionsReactive(options) {
        for (const key of Object.keys(options)) {
            Object.defineProperty(this, key, {
                get() {
                    return options[key];
                },
                set(value) {
                    if (value === null || value === undefined)
                        return;
                    options[key] = value;
                    switch (key) {
                        case 'spp':
                            this.aoPass.fullscreenMaterial.defines.spp = value.toFixed(0);
                            this.aoPass.fullscreenMaterial.needsUpdate = true;
                            break;
                        case 'distance':
                            this.aoPass.fullscreenMaterial.uniforms.aoDistance.value = value;
                            this.poissionDenoisePass.fullscreenMaterial.uniforms['distance'].value = Math.max(value, 0.0001);
                            break;
                        case 'resolutionScale':
                            this.setSize(this.lastSize.width, this.lastSize.height);
                            break;
                        case 'power':
                            this.uniforms.get('power').value = value;
                            break;
                        case 'color':
                            this.uniforms.get('color').value.copy(new three_1.Color(value));
                            break;
                        // denoiser
                        case 'iterations':
                        case 'radius':
                        case 'rings':
                        case 'samples':
                            this.poissionDenoisePass[key] = value;
                            break;
                        case 'lumaPhi':
                        case 'depthPhi':
                        case 'normalPhi':
                            this.poissionDenoisePass.fullscreenMaterial.uniforms[key].value = Math.max(value, 0.0001);
                            break;
                        default:
                            if (key in this.aoPass.fullscreenMaterial.uniforms) {
                                this.aoPass.fullscreenMaterial.uniforms[key].value = value;
                            }
                    }
                },
                configurable: true
            });
            // apply all uniforms and defines
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            this[key] = options[key];
        }
    }
    setSize(width, height) {
        var _a;
        if (width === undefined || height === undefined)
            return;
        if (width === this.lastSize.width &&
            height === this.lastSize.height &&
            this.resolutionScale === this.lastSize.resolutionScale) {
            return;
        }
        (_a = this.normalPass) === null || _a === void 0 ? void 0 : _a.setSize(width, height);
        this.aoPass.setSize(width * this.resolutionScale, height * this.resolutionScale);
        this.poissionDenoisePass.setSize(width, height);
        this.lastSize = {
            width,
            height,
            resolutionScale: this.resolutionScale
        };
    }
    update(renderer) {
        var _a;
        if ('animatedNoise' in this.aoPass.fullscreenMaterial.defines) {
            delete this.aoPass.fullscreenMaterial.defines.animatedNoise;
            this.aoPass.fullscreenMaterial.needsUpdate = true;
        }
        // set input texture
        if (this.poissionDenoisePass.iterations > 0) {
            this.uniforms.get('inputTexture').value = this.poissionDenoisePass.texture;
        }
        else {
            this.uniforms.get('inputTexture').value = this.aoPass.texture;
        }
        (_a = this.normalPass) === null || _a === void 0 ? void 0 : _a.render(renderer);
        this.aoPass.render(renderer);
        this.poissionDenoisePass.render(renderer);
    }
}
exports.AOEffect = AOEffect;
// #region Properties (7)
AOEffect.DefaultOptions = defaultAOOptions;
//# sourceMappingURL=AOEffect.js.map

/***/ }),

/***/ 18484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AOPass = void 0;
const postprocessing_1 = __webpack_require__(66739);
const three_1 = __webpack_require__(39437);
const basic_1 = __webpack_require__(58676);
const sampleBlueNoise_1 = __webpack_require__(18130);
const PoissionDenoisePass_1 = __webpack_require__(50438);
// a general AO pass that can be used for any AO algorithm
class AOPass extends postprocessing_1.Pass {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(camera, scene, fragmentShader) {
        super();
        this._camera = camera;
        this._scene = scene;
        this.renderTarget = new three_1.WebGLRenderTarget(1, 1, {
            type: three_1.HalfFloatType,
            depthBuffer: false
        });
        const finalFragmentShader = fragmentShader.replace('#include <sampleBlueNoise>', sampleBlueNoise_1.sampleBlueNoise);
        this.fullscreenMaterial = new three_1.ShaderMaterial({
            fragmentShader: finalFragmentShader,
            vertexShader: basic_1.basic,
            uniforms: {
                depthTexture: { value: null },
                normalTexture: { value: null },
                cameraNear: { value: 0 },
                cameraFar: { value: 0 },
                viewMatrix: { value: this._camera.matrixWorldInverse },
                projectionViewMatrix: { value: new three_1.Matrix4() },
                projectionMatrixInverse: { value: this._camera.projectionMatrixInverse },
                cameraMatrixWorld: { value: this._camera.matrixWorld },
                texSize: { value: new three_1.Vector2() },
                blueNoiseTexture: { value: null },
                blueNoiseRepeat: { value: new three_1.Vector2() },
                aoDistance: { value: 0 },
                distancePower: { value: 0 },
                bias: { value: 0 },
                thickness: { value: 0 },
                power: { value: 0 },
                frame: { value: 0 }
            },
            blending: three_1.NoBlending,
            depthWrite: false,
            depthTest: false,
            toneMapped: false
        });
        this.fullscreenMaterial.uniforms.blueNoiseTexture.value = PoissionDenoisePass_1.PoissionDenoisePass.blueNoiseTexture;
    }
    // #endregion Constructors (1)
    // #region Public Accessors (1)
    get texture() {
        return this.renderTarget.texture;
    }
    // #endregion Public Accessors (1)
    // #region Public Methods (2)
    render(renderer) {
        const spp = +this.fullscreenMaterial.defines.spp;
        this.fullscreenMaterial.uniforms.frame.value = (this.fullscreenMaterial.uniforms.frame.value + spp) % 65536;
        this.fullscreenMaterial.uniforms.cameraNear.value = this._camera.near;
        this.fullscreenMaterial.uniforms.cameraFar.value = this._camera.far;
        this.fullscreenMaterial.uniforms.projectionViewMatrix.value.multiplyMatrices(this._camera.projectionMatrix, this._camera.matrixWorldInverse);
        const noiseTexture = this.fullscreenMaterial.uniforms.blueNoiseTexture.value;
        if (noiseTexture) {
            const { width, height } = noiseTexture.source.data;
            this.fullscreenMaterial.uniforms.blueNoiseRepeat.value.set(this.renderTarget.width / width, this.renderTarget.height / height);
        }
        renderer.setRenderTarget(this.renderTarget);
        renderer.render(this.scene, this.camera);
    }
    setSize(width, height) {
        this.renderTarget.setSize(width, height);
        this.fullscreenMaterial.uniforms.texSize.value.set(this.renderTarget.width, this.renderTarget.height);
    }
}
exports.AOPass = AOPass;
//# sourceMappingURL=AOPass.js.map

/***/ }),

/***/ 66180:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ao_compose = void 0;
exports.ao_compose = `
uniform sampler2D inputTexture;
uniform highp sampler2D depthTexture;
uniform float power;
uniform vec3 color;

void mainImage(const in vec4 inputColor, const in vec2 uv, out vec4 outputColor) {
    float unpackedDepth = textureLod(depthTexture, uv, 0.).r;

    float ao = unpackedDepth > 0.9999 ? 1.0 : textureLod(inputTexture, uv, 0.0).a;
    ao = pow(ao, power);

    vec3 aoColor = mix(color, vec3(1.), ao);

    aoColor *= inputColor.rgb;

    outputColor = vec4(aoColor, inputColor.a);
}
`;
//# sourceMappingURL=ao_compose.js.map

/***/ }),

/***/ 58140:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HBAOEffect = void 0;
const AOEffect_1 = __webpack_require__(94296);
const AOPass_1 = __webpack_require__(18484);
const hbao_1 = __webpack_require__(90323);
const hbao_utils_1 = __webpack_require__(65541);
const finalFragmentShader = hbao_1.hbao.replace('#include <hbao_utils>', hbao_utils_1.hbao_utils);
class HBAOPass extends AOPass_1.AOPass {
    // #region Constructors (1)
    constructor(camera, scene) {
        super(camera, scene, finalFragmentShader);
    }
}
class HBAOEffect extends AOEffect_1.AOEffect {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(composer, camera, scene, options = AOEffect_1.AOEffect.DefaultOptions) {
        super(composer, camera, scene, new HBAOPass(camera, scene), Object.assign(Object.assign(Object.assign({}, AOEffect_1.AOEffect.DefaultOptions), HBAOEffect.DefaultOptions), options));
        // #region Properties (1)
        this.lastSize = { width: 0, height: 0, resolutionScale: 0 };
    }
}
exports.HBAOEffect = HBAOEffect;
//# sourceMappingURL=HBAOEffect.js.map

/***/ }),

/***/ 90323:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hbao = void 0;
exports.hbao = `
varying vec2 vUv;

uniform highp sampler2D depthTexture;

uniform mat4 projectionViewMatrix;
uniform int frame;

uniform sampler2D blueNoiseTexture;
uniform vec2 blueNoiseRepeat;
uniform vec2 texSize;

uniform float aoDistance;
uniform float distancePower;
uniform float bias;
uniform float thickness;

#include <packing>
// HBAO Utils
#include <hbao_utils>

float getOcclusion(const vec3 cameraPosition, const vec3 worldPos, const vec3 worldNormal, const float depth, const int seed, inout float totalWeight) {
    vec4 blueNoise = sampleBlueNoise(blueNoiseTexture, seed, blueNoiseRepeat, texSize);

    vec3 sampleWorldDir = cosineSampleHemisphere(worldNormal, blueNoise.rg);

    vec3 sampleWorldPos = worldPos + aoDistance * pow(blueNoise.b, distancePower + 1.0) * sampleWorldDir;

    // Project the sample position to screen space
    vec4 sampleUv = projectionViewMatrix * vec4(sampleWorldPos, 1.);
    sampleUv.xy /= sampleUv.w;
    sampleUv.xy = sampleUv.xy * 0.5 + 0.5;

    // Get the depth of the sample position
    float sampleDepth = textureLod(depthTexture, sampleUv.xy, 0.0).r;

    // Compute the horizon line
    float deltaDepth = depth - sampleDepth;

    // distance based bias
    float d = distance(sampleWorldPos, cameraPosition) / aoDistance;
    deltaDepth *= 0.001 * d * d;

    float th = thickness * 0.01;

    float theta = dot(worldNormal, sampleWorldDir);
    totalWeight += theta;

    if (deltaDepth < th) {
        float horizon = sampleDepth + deltaDepth * bias * 1000.;

        float occlusion = max(0.0, horizon - depth) * theta;

        float m = max(0., 1. - deltaDepth / th);
        occlusion = 10. * occlusion * m / d;

        occlusion = max(0.0, occlusion);
        occlusion = sqrt(occlusion);
        return occlusion;
    }

    return 0.;
}

void main() {
    float depth = textureLod(depthTexture, vUv, 0.0).r;

    // filter out background
    if (depth == 1.0) {
        discard;
        return;
    }

    vec4 cameraPosition = cameraMatrixWorld * vec4(0.0, 0.0, 0.0, 1.0);

    vec3 worldPos = getWorldPos(depth, vUv);
    vec3 worldNormal = getWorldNormal(vUv);

    float ao = 0.0, totalWeight = 0.0;

    for (int i = 0; i < spp; i++) {
        int seed = i;
#ifdef animatedNoise
        seed += frame;
#endif

        float occlusion = getOcclusion(cameraPosition.xyz, worldPos, worldNormal, depth, seed, totalWeight);
        ao += occlusion;
    }

    if (totalWeight > 0.) ao /= totalWeight;

    // clamp ao to [0, 1]
    ao = clamp(1. - ao, 0., 1.);

    gl_FragColor = vec4(worldNormal, ao);
}
`;
//# sourceMappingURL=hbao.js.map

/***/ }),

/***/ 65541:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.hbao_utils = void 0;
exports.hbao_utils = `
#include <sampleBlueNoise>

uniform sampler2D normalTexture;
uniform float cameraNear;
uniform float cameraFar;
uniform mat4 projectionMatrixInverse;
uniform mat4 cameraMatrixWorld;

// source: https://github.com/mrdoob/three.js/blob/342946c8392639028da439b6dc0597e58209c696/examples/js/shaders/SAOShader.js#L123
float getViewZ(const float depth) {
#ifdef PERSPECTIVE_CAMERA
    return perspectiveDepthToViewZ(depth, cameraNear, cameraFar);
#else
    return orthographicDepthToViewZ(depth, cameraNear, cameraFar);
#endif
}

// source: https://github.com/N8python/ssao/blob/master/EffectShader.js#L52
vec3 getWorldPos(const float depth, const vec2 coord) {
    float z = depth * 2.0 - 1.0;
    vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
    vec4 viewSpacePosition = projectionMatrixInverse * clipSpacePosition;

    // Perspective division
    vec4 worldSpacePosition = cameraMatrixWorld * viewSpacePosition;
    worldSpacePosition.xyz /= worldSpacePosition.w;

    return worldSpacePosition.xyz;
}

vec3 slerp(const vec3 a, const vec3 b, const float t) {
    float cosAngle = dot(a, b);
    float angle = acos(cosAngle);

    if (abs(angle) < 0.001) {
        return mix(a, b, t);
    }

    float sinAngle = sin(angle);
    float t1 = sin((1.0 - t) * angle) / sinAngle;
    float t2 = sin(t * angle) / sinAngle;

    return (a * t1) + (b * t2);
}

vec3 computeWorldNormal() {
    vec2 size = vec2(textureSize(depthTexture, 0));
    ivec2 p = ivec2(vUv * size);
    float c0 = texelFetch(depthTexture, p, 0).x;
    float l2 = texelFetch(depthTexture, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(depthTexture, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(depthTexture, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(depthTexture, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(depthTexture, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(depthTexture, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(depthTexture, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(depthTexture, p + ivec2(0, 2), 0).x;
    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);
    vec3 ce = getWorldPos(c0, vUv).xyz;
    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / size.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / size.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / size.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / size.y))).xyz;
    return normalize(cross(dpdx, dpdy));
}

vec3 getWorldNormal(const vec2 uv) {
#ifdef useNormalTexture
    vec3 worldNormal = unpackRGBToNormal(textureLod(normalTexture, uv, 0.).rgb);

    worldNormal = (vec4(worldNormal, 1.) * viewMatrix).xyz;  // view-space to world-space
    return normalize(worldNormal);
#else
    return computeWorldNormal();  // compute world normal from depth
#endif
}

#define PI 3.14159265358979323846264338327950288

// source: https://www.shadertoy.com/view/cll3R4
vec3 cosineSampleHemisphere(const vec3 n, const vec2 u) {
    float r = sqrt(u.x);
    float theta = 2.0 * PI * u.y;

    vec3 b = normalize(cross(n, vec3(0.0, 1.0, 1.0)));
    vec3 t = cross(b, n);

    return normalize(r * sin(theta) * b + sqrt(1.0 - u.x) * n + r * cos(theta) * t);
}

`;
//# sourceMappingURL=hbao_utils.js.map

/***/ }),

/***/ 50438:
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
exports.PoissionDenoisePass = void 0;
const basic_1 = __webpack_require__(58676);
const three_1 = __webpack_require__(39437);
const viewer_shared_services_1 = __webpack_require__(8389);
const postprocessing_1 = __webpack_require__(66739);
const poissionDenoise_1 = __webpack_require__(47779);
const sampleBlueNoise_1 = __webpack_require__(18130);
const finalFragmentShader = poissionDenoise_1.poissionDenoise.replace('#include <sampleBlueNoise>', sampleBlueNoise_1.sampleBlueNoise);
const defaultPoissonBlurOptions = {
    iterations: 1,
    radius: 8,
    rings: 5.625,
    lumaPhi: 10,
    depthPhi: 2,
    normalPhi: 3.25,
    samples: 16,
    distance: 1,
    normalTexture: null
};
class PoissionDenoisePass extends postprocessing_1.Pass {
    // #endregion Properties (11)
    // #region Constructors (1)
    constructor(camera, inputTexture, depthTexture, options = defaultPoissonBlurOptions) {
        super('PoissionBlurPass');
        this.index = 0;
        this.iterations = defaultPoissonBlurOptions.iterations;
        this.radius = 8;
        this.rings = 5.625;
        this.samples = 16;
        if (PoissionDenoisePass.blueNoiseTexture === undefined)
            this.loadBlueNoiseTexture();
        options = Object.assign(Object.assign({}, defaultPoissonBlurOptions), options);
        this.inputTexture = inputTexture;
        this.fullscreenMaterial = new three_1.ShaderMaterial({
            fragmentShader: finalFragmentShader,
            vertexShader: basic_1.basic,
            uniforms: {
                depthTexture: { value: null },
                inputTexture: { value: null },
                projectionMatrixInverse: { value: new three_1.Matrix4() },
                cameraMatrixWorld: { value: new three_1.Matrix4() },
                lumaPhi: { value: 5.0 },
                depthPhi: { value: 5.0 },
                normalPhi: { value: 5.0 },
                distance: { value: 1.0 },
                resolution: { value: new three_1.Vector2() },
                blueNoiseTexture: { value: null },
                index: { value: 0 },
                blueNoiseRepeat: { value: new three_1.Vector2() }
            }
        });
        const renderTargetOptions = {
            type: three_1.HalfFloatType,
            depthBuffer: false
        };
        this.renderTargetA = new three_1.WebGLRenderTarget(1, 1, renderTargetOptions);
        this.renderTargetB = new three_1.WebGLRenderTarget(1, 1, renderTargetOptions);
        const { uniforms } = this.fullscreenMaterial;
        uniforms['inputTexture'].value = this.inputTexture;
        uniforms['depthTexture'].value = depthTexture;
        uniforms['projectionMatrixInverse'].value = camera.projectionMatrixInverse;
        uniforms['cameraMatrixWorld'].value = camera.matrixWorld;
        uniforms['depthPhi'].value = options.depthPhi;
        uniforms['normalPhi'].value = options.normalPhi;
        uniforms['distance'].value = options.distance;
        if (options.normalTexture) {
            uniforms['normalTexture'] = { value: options.normalTexture };
        }
        else {
            this.fullscreenMaterial.defines.NORMAL_IN_RGB = '';
        }
        // these properties need the shader to be recompiled
        for (const prop of ['radius', 'rings', 'samples']) {
            Object.defineProperty(this, prop, {
                get: () => options[prop],
                set: value => {
                    options[prop] = value;
                    this.setSize(this.renderTargetA.width, this.renderTargetA.height);
                }
            });
        }
    }
    loadBlueNoiseTexture() {
        return __awaiter(this, void 0, void 0, function* () {
            const result = yield viewer_shared_services_1.HttpClient.instance.loadTexture('https://viewer.shapediver.com/v3/graphics/LDR_RGBA_0.png');
            if (result) {
                const url = URL.createObjectURL(result.data.blob);
                new three_1.TextureLoader().load(url, texture => {
                    URL.revokeObjectURL(url);
                    PoissionDenoisePass.blueNoiseTexture = texture;
                    PoissionDenoisePass.blueNoiseTexture.minFilter = three_1.NearestFilter;
                    PoissionDenoisePass.blueNoiseTexture.magFilter = three_1.NearestFilter;
                    PoissionDenoisePass.blueNoiseTexture.wrapS = three_1.RepeatWrapping;
                    PoissionDenoisePass.blueNoiseTexture.wrapT = three_1.RepeatWrapping;
                    PoissionDenoisePass.blueNoiseTexture.colorSpace = three_1.NoColorSpace;
                    PoissionDenoisePass.blueNoiseTexture.needsUpdate = true;
                    this.fullscreenMaterial.uniforms.blueNoiseTexture.value = PoissionDenoisePass.blueNoiseTexture;
                });
            }
            else {
                viewer_shared_services_1.Logger.instance.warn('The blue noise texture could not be loaded. This may result in a suboptimal denoising quality. Retrying in 1 second...');
                // if there was an issue loading the texture
                // set a timeout with 1 second to try again
                setTimeout(() => {
                    this.loadBlueNoiseTexture();
                }, 1000);
            }
        });
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (1)
    get texture() {
        return this.renderTargetB.texture;
    }
    // #endregion Public Getters And Setters (1)
    // #region Public Methods (4)
    generateDenoiseSamples(numSamples, numRings, r, texelSize) {
        const angleStep = (2 * Math.PI * numRings) / numSamples;
        const invNumSamples = 1.0 / numSamples;
        const radiusStep = invNumSamples;
        const samples = [];
        let radius = invNumSamples;
        let angle = 0;
        for (let i = 0; i < numSamples; i++) {
            const v = new three_1.Vector2(Math.cos(angle), Math.sin(angle))
                .multiplyScalar(Math.pow(radius, 0.75))
                .multiply(texelSize)
                .multiplyScalar(r);
            if (isNaN(v.x) || v.x === Infinity || v.x === -Infinity)
                v.x = 0;
            if (isNaN(v.y) || v.y === Infinity || v.y === -Infinity)
                v.y = 0;
            samples.push(v);
            radius += radiusStep;
            angle += angleStep;
        }
        return samples;
    }
    generatePoissonDiskConstant(poissonDisk) {
        const samples = poissonDisk.length;
        let glslCode = 'const vec2 poissonDisk[samples] = vec2[samples](\n';
        for (let i = 0; i < samples; i++) {
            const sample = poissonDisk[i];
            glslCode += `    vec2(${sample.x}, ${sample.y})`;
            if (i < samples - 1) {
                glslCode += ',';
            }
            glslCode += '\n';
        }
        glslCode += ');';
        return glslCode;
    }
    render(renderer) {
        this.fullscreenMaterial.uniforms.index.value = 0;
        const noiseTexture = this.fullscreenMaterial.uniforms.blueNoiseTexture.value;
        if (noiseTexture !== undefined && noiseTexture !== null && noiseTexture instanceof three_1.Texture) {
            const { width, height } = noiseTexture.source.data;
            this.fullscreenMaterial.uniforms.blueNoiseRepeat.value.set(this.renderTargetA.width / width, this.renderTargetA.height / height);
        }
        for (let i = 0; i < 2 * this.iterations; i++) {
            const horizontal = i % 2 === 0;
            const inputRenderTarget = horizontal ? this.renderTargetB : this.renderTargetA;
            this.fullscreenMaterial.uniforms['inputTexture'].value = i === 0 ? this.inputTexture : inputRenderTarget.texture;
            const renderTarget = horizontal ? this.renderTargetA : this.renderTargetB;
            renderer.setRenderTarget(renderTarget);
            renderer.render(this.scene, this.camera);
            this.fullscreenMaterial.uniforms.index.value = (this.fullscreenMaterial.uniforms.index.value + 1) % 4;
        }
    }
    setSize(width, height) {
        this.renderTargetA.setSize(width, height);
        this.renderTargetB.setSize(width, height);
        this.fullscreenMaterial.uniforms.resolution.value.set(width, height);
        const poissonDisk = this.generateDenoiseSamples(this.samples, this.rings, this.radius, new three_1.Vector2(1 / width, 1 / height));
        const sampleDefine = `const int samples = ${this.samples};\n`;
        const poissonDiskConstant = this.generatePoissonDiskConstant(poissonDisk);
        this.fullscreenMaterial.fragmentShader = sampleDefine + poissonDiskConstant + '\n' + finalFragmentShader;
        this.fullscreenMaterial.needsUpdate = true;
    }
}
exports.PoissionDenoisePass = PoissionDenoisePass;
// #region Properties (11)
PoissionDenoisePass.DefaultOptions = defaultPoissonBlurOptions;
//# sourceMappingURL=PoissionDenoisePass.js.map

/***/ }),

/***/ 47779:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.poissionDenoise = void 0;
exports.poissionDenoise = `
varying vec2 vUv;

uniform sampler2D inputTexture;
uniform highp sampler2D depthTexture;
uniform sampler2D normalTexture;
uniform mat4 projectionMatrixInverse;
uniform mat4 cameraMatrixWorld;
uniform float lumaPhi;
uniform float depthPhi;
uniform float normalPhi;
uniform float distance;
uniform sampler2D blueNoiseTexture;
uniform vec2 blueNoiseRepeat;
uniform int index;
uniform vec2 resolution;

#include <common>
#include <sampleBlueNoise>

vec3 getWorldPos(float depth, vec2 coord) {
    float z = depth * 2.0 - 1.0;
    vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
    vec4 viewSpacePosition = projectionMatrixInverse * clipSpacePosition;

    // Perspective division
    vec4 worldSpacePosition = cameraMatrixWorld * viewSpacePosition;
    worldSpacePosition.xyz /= worldSpacePosition.w;
    return worldSpacePosition.xyz;
}

#define luminance(a) dot(vec3(0.2125, 0.7154, 0.0721), a)

vec3 getNormal(vec2 uv, vec4 texel) {
#ifdef NORMAL_IN_RGB
    // in case the normal is stored in the RGB channels of the texture
    return texel.rgb;
#else
    return normalize(textureLod(normalTexture, uv, 0.).xyz * 2.0 - 1.0);
#endif
}

float distToPlane(const vec3 worldPos, const vec3 neighborWorldPos, const vec3 worldNormal) {
    vec3 toCurrent = worldPos - neighborWorldPos;
    float distToPlane = abs(dot(toCurrent, worldNormal));

    return distToPlane;
}

void main() {
    vec4 depthTexel = textureLod(depthTexture, vUv, 0.);

    if (depthTexel.r == 1.0 || dot(depthTexel.rgb, depthTexel.rgb) == 0.) {
        discard;
        return;
    }

    vec4 texel = textureLod(inputTexture, vUv, 0.0);

    vec3 normal = getNormal(vUv, texel);

#ifdef NORMAL_IN_RGB
    float denoised = texel.a;
    float center = texel.a;
#else
    vec3 denoised = texel.rgb;
    vec3 center = texel.rgb;
#endif

    float depth = depthTexel.x;
    vec3 worldPos = getWorldPos(depth, vUv);

    float totalWeight = 1.0;

    vec4 blueNoise = sampleBlueNoise(blueNoiseTexture, 0, blueNoiseRepeat, resolution);
    float angle = blueNoise[index];

    float s = sin(angle), c = cos(angle);

    mat2 rotationMatrix = mat2(c, -s, s, c);

    for (int i = 0; i < samples; i++) {
        vec2 offset = rotationMatrix * poissonDisk[i];
        vec2 neighborUv = vUv + offset;

        vec4 neighborTexel = textureLod(inputTexture, neighborUv, 0.0);

        vec3 neighborNormal = getNormal(neighborUv, neighborTexel);
#ifdef NORMAL_IN_RGB
        float neighborColor = neighborTexel.a;
#else
        vec3 neighborColor = neighborTexel.rgb;
#endif

        float sampleDepth = textureLod(depthTexture, neighborUv, 0.0).x;

        vec3 worldPosSample = getWorldPos(sampleDepth, neighborUv);
        float tangentPlaneDist = abs(dot(worldPos - worldPosSample, normal));

        float normalDiff = dot(normal, neighborNormal);
        float normalSimilarity = pow(max(normalDiff, 0.), normalPhi);

#ifdef NORMAL_IN_RGB
        float lumaDiff = abs(neighborColor - center);
#else
        float lumaDiff = abs(luminance(neighborColor) - luminance(center));
#endif
        float lumaSimilarity = max(1.0 - lumaDiff / lumaPhi, 0.0);

        float depthDiff = 1. - (distToPlane(worldPos, worldPosSample, normal) / distance);
        float depthSimilarity = max(depthDiff / depthPhi, 0.);

        float w = lumaSimilarity * depthSimilarity * normalSimilarity;

        denoised += w * neighborColor;
        totalWeight += w;
    }

    if (totalWeight > 0.) denoised /= totalWeight;

#ifdef NORMAL_IN_RGB
    gl_FragColor = vec4(normal, denoised);
#else
    gl_FragColor = vec4(denoised, 1.);
#endif
}
`;
//# sourceMappingURL=poissionDenoise.js.map

/***/ }),

/***/ 85120:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SSAOEffect = void 0;
const three_1 = __webpack_require__(39437);
const AOEffect_1 = __webpack_require__(94296);
const AOPass_1 = __webpack_require__(18484);
const ssao_1 = __webpack_require__(81275);
class SSAOPass extends AOPass_1.AOPass {
    // #region Constructors (1)
    constructor(camera, scene) {
        super(camera, scene, ssao_1.ssao);
    }
}
class SSAOEffect extends AOEffect_1.AOEffect {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(composer, camera, scene, options) {
        super(composer, camera, scene, new SSAOPass(camera, scene), options);
        // #region Properties (1)
        this.spp = 16;
        SSAOEffect.DefaultOptions = Object.assign(Object.assign({}, AOEffect_1.AOEffect.DefaultOptions), {
            spp: 16,
            distance: 1,
            distancePower: 0.25,
            power: 2
        });
        options = Object.assign(Object.assign({}, SSAOEffect.DefaultOptions), options);
    }
    // #endregion Constructors (1)
    // #region Public Methods (2)
    getPointsOnSphere(n) {
        const points = [];
        const inc = Math.PI * (3 - Math.sqrt(5));
        const off = 2 / n;
        for (let k = 0; k < n; k++) {
            const y = k * off - 1 + off / 2;
            const r = Math.sqrt(1 - y * y);
            const phi = k * inc;
            points.push(new three_1.Vector3(Math.cos(phi) * r, y, Math.sin(phi) * r));
        }
        return points;
    }
    makeOptionsReactive(options) {
        super.makeOptionsReactive(options);
        for (const key of ['spp']) {
            Object.defineProperty(this, key, {
                get() {
                    return options[key];
                },
                set(value) {
                    if (value === null || value === undefined)
                        return;
                    options[key] = value;
                    switch (key) {
                        case 'spp': {
                            this.aoPass.fullscreenMaterial.defines.spp = value.toFixed(0);
                            const samples = this.getPointsOnSphere(value);
                            const samplesR = [];
                            for (let i = 0; i < value; i++) {
                                samplesR.push((i + 1) / value);
                            }
                            this.aoPass.fullscreenMaterial.uniforms.samples = { value: samples };
                            this.aoPass.fullscreenMaterial.uniforms.samplesR = { value: samplesR };
                            this.aoPass.fullscreenMaterial.needsUpdate = true;
                            break;
                        }
                    }
                },
                configurable: true
            });
        }
        this.spp = options['spp'];
    }
}
exports.SSAOEffect = SSAOEffect;
//# sourceMappingURL=SSAOEffect.js.map

/***/ }),

/***/ 81275:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ssao = void 0;
exports.ssao = `
varying vec2 vUv;

uniform highp sampler2D depthTexture;
uniform sampler2D normalTexture;
uniform mat4 projectionViewMatrix;
uniform mat4 cameraMatrixWorld;

uniform sampler2D blueNoiseTexture;
uniform vec2 blueNoiseRepeat;
uniform vec2 texSize;
uniform mat4 projectionMatrixInverse;

uniform float aoDistance;
uniform float distancePower;
uniform float cameraNear;
uniform float cameraFar;
uniform int frame;

uniform vec3[spp] samples;
uniform float[spp] samplesR;

#include <common>
#include <packing>
#include <sampleBlueNoise>

// source: https://github.com/N8python/ssao/blob/master/EffectShader.js#L52
vec3 getWorldPos(const float depth, const vec2 coord) {
    float z = depth * 2.0 - 1.0;
    vec4 clipSpacePosition = vec4(coord * 2.0 - 1.0, z, 1.0);
    vec4 viewSpacePosition = projectionMatrixInverse * clipSpacePosition;

    // Perspective division
    vec4 worldSpacePosition = cameraMatrixWorld * viewSpacePosition;
    worldSpacePosition.xyz /= worldSpacePosition.w;

    return worldSpacePosition.xyz;
}

vec3 computeNormal(vec3 worldPos, vec2 vUv) {
    vec2 size = vec2(textureSize(depthTexture, 0));
    ivec2 p = ivec2(vUv * size);
    float c0 = texelFetch(depthTexture, p, 0).x;
    float l2 = texelFetch(depthTexture, p - ivec2(2, 0), 0).x;
    float l1 = texelFetch(depthTexture, p - ivec2(1, 0), 0).x;
    float r1 = texelFetch(depthTexture, p + ivec2(1, 0), 0).x;
    float r2 = texelFetch(depthTexture, p + ivec2(2, 0), 0).x;
    float b2 = texelFetch(depthTexture, p - ivec2(0, 2), 0).x;
    float b1 = texelFetch(depthTexture, p - ivec2(0, 1), 0).x;
    float t1 = texelFetch(depthTexture, p + ivec2(0, 1), 0).x;
    float t2 = texelFetch(depthTexture, p + ivec2(0, 2), 0).x;
    float dl = abs((2.0 * l1 - l2) - c0);
    float dr = abs((2.0 * r1 - r2) - c0);
    float db = abs((2.0 * b1 - b2) - c0);
    float dt = abs((2.0 * t1 - t2) - c0);
    vec3 ce = getWorldPos(c0, vUv).xyz;
    vec3 dpdx = (dl < dr) ? ce - getWorldPos(l1, (vUv - vec2(1.0 / size.x, 0.0))).xyz
                          : -ce + getWorldPos(r1, (vUv + vec2(1.0 / size.x, 0.0))).xyz;
    vec3 dpdy = (db < dt) ? ce - getWorldPos(b1, (vUv - vec2(0.0, 1.0 / size.y))).xyz
                          : -ce + getWorldPos(t1, (vUv + vec2(0.0, 1.0 / size.y))).xyz;
    return normalize(cross(dpdx, dpdy));
}

highp float linearize_depth(highp float d, highp float zNear, highp float zFar) {
    highp float z_n = 2.0 * d - 1.0;
    return 2.0 * zNear * zFar / (zFar + zNear - z_n * (zFar - zNear));
}

void main() {
    float depth = textureLod(depthTexture, vUv, 0.).x;

    // filter out background
    if (depth == 1.0) {
        discard;
        return;
    }

    vec3 worldPos = getWorldPos(depth, vUv);
    vec3 normal = computeNormal(worldPos, vUv);

#ifdef animatedNoise
    int seed = frame;
#else
    int seed = 0;
#endif

    vec4 noise = sampleBlueNoise(blueNoiseTexture, seed, blueNoiseRepeat, texSize);

    vec3 randomVec = normalize(noise.rgb * 2.0 - 1.0);
    vec3 tangent = normalize(randomVec - normal * dot(randomVec, normal));
    vec3 bitangent = cross(normal, tangent);
    mat3 tbn = mat3(tangent, bitangent, normal);

    float occluded = 0.0;
    float totalWeight = 0.0;

    vec3 samplePos;

    float sppF = float(spp);

    for (float i = 0.0; i < sppF; i++) {
        vec3 sampleDirection = tbn * samples[int(i)];

        // make sure sample direction is in the same hemisphere as the normal
        if (dot(sampleDirection, normal) < 0.0) sampleDirection *= -1.0;

        float moveAmt = samplesR[int(mod(i + noise.a * sppF, sppF))];
        samplePos = worldPos + aoDistance * moveAmt * sampleDirection;

        vec4 offset = projectionViewMatrix * vec4(samplePos, 1.0);
        offset.xyz /= offset.w;
        offset.xyz = offset.xyz * 0.5 + 0.5;

        float sampleDepth = textureLod(depthTexture, offset.xy, 0.0).x;

        float distSample = linearize_depth(sampleDepth, cameraNear, cameraFar);
        float distWorld = linearize_depth(offset.z, cameraNear, cameraFar);

        float rangeCheck = smoothstep(0.0, 1.0, aoDistance / abs(distSample - distWorld));
        rangeCheck = pow(rangeCheck, distancePower);
        float weight = dot(sampleDirection, normal);

        occluded += rangeCheck * weight * (distSample < distWorld ? 1.0 : 0.0);
        totalWeight += weight;
    }

    float occ = clamp(1.0 - occluded / totalWeight, 0.0, 1.0);
    gl_FragColor = vec4(normal, occ);
}
`;
//# sourceMappingURL=ssao.js.map

/***/ }),

/***/ 58676:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.basic = void 0;
exports.basic = `
varying vec2 vUv;

void main() {
    vUv = position.xy * 0.5 + 0.5;
    gl_Position = vec4(position.xy, 1.0, 1.0);
}
`;
//# sourceMappingURL=basic.js.map

/***/ }),

/***/ 18130:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sampleBlueNoise = void 0;
exports.sampleBlueNoise = `
const float g = 1.6180339887498948482;
const float a1 = 1.0 / g;

// reference: https://extremelearning.com.au/unreasonable-effectiveness-of-quasirandom-sequences/
float r1(float n) {
    // 7th harmonious number
    return fract(1.1127756842787055 + a1 * n);
}

const vec4 hn = vec4(0.618033988749895, 0.3247179572447458, 0.2207440846057596, 0.1673039782614187);

vec4 sampleBlueNoise(sampler2D texture, int seed, vec2 repeat, vec2 texSize) {
    vec2 size = vUv * texSize;
    vec2 blueNoiseSize = texSize / repeat;
    float blueNoiseIndex = floor(floor(size.y / blueNoiseSize.y) * repeat.x) + floor(size.x / blueNoiseSize.x);

    // get the offset of this pixel's blue noise tile
    // int blueNoiseTileOffset = int(r1(blueNoiseIndex + 1.0) * 65536.);

    vec2 blueNoiseUv = vUv * repeat;

    // fetch blue noise for this pixel
    vec4 blueNoise = textureLod(texture, blueNoiseUv, 0.);

    // animate blue noise
    if (seed != 0) {
        blueNoise = fract(blueNoise + hn * float(seed));

        blueNoise.r = (blueNoise.r > 0.5 ? 1.0 - blueNoise.r : blueNoise.r) * 2.0;
        blueNoise.g = (blueNoise.g > 0.5 ? 1.0 - blueNoise.g : blueNoise.g) * 2.0;
        blueNoise.b = (blueNoise.b > 0.5 ? 1.0 - blueNoise.b : blueNoise.b) * 2.0;
        blueNoise.a = (blueNoise.a > 0.5 ? 1.0 - blueNoise.a : blueNoise.a) * 2.0;
    }

    return blueNoise;
}
`;
//# sourceMappingURL=sampleBlueNoise.js.map

/***/ }),

/***/ 397:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CopyMaterial = void 0;
const three_1 = __webpack_require__(39437);
const vertexShader = `
varying vec2 vUv;

void main() {

	vUv = position.xy * 0.5 + 0.5;
	gl_Position = vec4(position.xy, 1.0, 1.0);

}
`;
const fragmentShader = `
#include <common>
#include <dithering_pars_fragment>

#ifdef FRAMEBUFFER_PRECISION_HIGH

	uniform mediump sampler2D inputBuffer;

#else

	uniform lowp sampler2D inputBuffer;

#endif

uniform float opacity;

varying vec2 vUv;

void main() {

	vec4 texel = texture2D(inputBuffer, vUv);
	gl_FragColor = opacity * texel;

	#include <colorspace_fragment>
	#include <dithering_fragment>

}
`;
/**
 * A simple copy shader material.
 */
class CopyMaterial extends three_1.ShaderMaterial {
    /**
     * Constructs a new copy material.
     */
    constructor() {
        super({
            name: "CopyMaterial",
            uniforms: {
                inputBuffer: new three_1.Uniform(null),
                opacity: new three_1.Uniform(1.0)
            },
            blending: three_1.CustomBlending,
            blendEquation: three_1.AddEquation,
            blendDst: three_1.ZeroFactor,
            blendSrc: three_1.OneFactor,
            toneMapped: false,
            depthWrite: false,
            depthTest: false,
            transparent: true,
            fragmentShader,
            vertexShader
        });
    }
    /**
     * The input buffer.
     *
     * @type {Texture}
     */
    set inputBuffer(value) {
        this.uniforms.inputBuffer.value = value;
    }
    /**
     * Sets the input buffer.
     *
     * @deprecated Use inputBuffer instead.
     * @param {Number} value - The buffer.
     */
    setInputBuffer(value) {
        this.uniforms.inputBuffer.value = value;
    }
    /**
     * Returns the opacity.
     *
     * @deprecated Use opacity instead.
     * @return {Number} The opacity.
     */
    getOpacity(value) {
        return this.uniforms.opacity.value;
    }
    /**
     * Sets the opacity.
     *
     * @deprecated Use opacity instead.
     * @param {Number} value - The opacity.
     */
    setOpacity(value) {
        this.uniforms.opacity.value = value;
    }
}
exports.CopyMaterial = CopyMaterial;
//# sourceMappingURL=CopyMaterial.js.map

/***/ }),

/***/ 74841:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CopyShader = void 0;
exports.CopyShader = {
    name: 'CopyShader',
    uniforms: {
        'tDiffuse': { value: null },
        'opacity': { value: 1.0 }
    },
    vertexShader: /* glsl */ `

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: /* glsl */ `

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );
			gl_FragColor.a *= opacity;


		}`
};
//# sourceMappingURL=CopyShader.js.map

/***/ }),

/***/ 73987:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


// Helper for passes that need to fill the viewport with a single quad.
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FullScreenQuad = void 0;
const three_1 = __webpack_require__(39437);
const _camera = new three_1.OrthographicCamera(-1, 1, 1, -1, 0, 1);
// https://github.com/mrdoob/three.js/pull/21358
const _geometry = new three_1.BufferGeometry();
_geometry.setAttribute('position', new three_1.Float32BufferAttribute([-1, 3, 0, -1, -1, 0, 3, -1, 0], 3));
_geometry.setAttribute('uv', new three_1.Float32BufferAttribute([0, 2, 0, 0, 2, 0], 2));
class FullScreenQuad {
    constructor(material) {
        this._mesh = new three_1.Mesh(_geometry, material);
    }
    dispose() {
        this._mesh.geometry.dispose();
    }
    render(renderer) {
        renderer.render(this._mesh, _camera);
    }
    get material() {
        return this._mesh.material;
    }
    set material(value) {
        this._mesh.material = value;
    }
}
exports.FullScreenQuad = FullScreenQuad;
//# sourceMappingURL=FullScreenQuad.js.map

/***/ }),

/***/ 79191:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NormalPass = void 0;
const postprocessing_1 = __webpack_require__(66739);
const three_1 = __webpack_require__(39437);
const RenderPass_1 = __webpack_require__(25472);
/**
 * A pass that renders the normals of a given scene.
 */
class NormalPass extends postprocessing_1.Pass {
    /**
     * Constructs a new normal pass.
     *
     * @param {Scene} scene - The scene to render.
     * @param {Camera} camera - The camera to use to render the scene.
     * @param {Object} [options] - The options.
     * @param {WebGLRenderTarget} [options.renderTarget] - A custom render target.
     * @param {Number} [options.resolutionScale=1.0] - The resolution scale.
     * @param {Number} [options.resolutionX=Resolution.AUTO_SIZE] - The horizontal resolution.
     * @param {Number} [options.resolutionY=Resolution.AUTO_SIZE] - The vertical resolution.
     * @param {Number} [options.width=Resolution.AUTO_SIZE] - Deprecated. Use resolutionX instead.
     * @param {Number} [options.height=Resolution.AUTO_SIZE] - Deprecated. Use resolutionY instead.
     */
    constructor(scene, camera, { renderTarget, resolutionScale = 1.0, width = postprocessing_1.Resolution.AUTO_SIZE, height = postprocessing_1.Resolution.AUTO_SIZE, resolutionX = width, resolutionY = height } = {}) {
        super("NormalPass");
        this.needsSwap = false;
        /**
         * A render pass.
         *
         * @type {RenderPass}
         * @private
         */
        this.renderPass = new RenderPass_1.RenderPass(scene, camera, new three_1.MeshNormalMaterial());
        const renderPass = this.renderPass;
        renderPass.ignoreBackground = true;
        renderPass.skipShadowMapUpdate = true;
        const clearPass = renderPass.getClearPass();
        clearPass.overrideClearColor = new three_1.Color(0x7777ff);
        clearPass.overrideClearAlpha = 1.0;
        /**
         * A render target for the scene normals.
         *
         * @type {WebGLRenderTarget}
         * @readonly
         */
        this.renderTarget = renderTarget;
        if (this.renderTarget === undefined) {
            this.renderTarget = new three_1.WebGLRenderTarget(1, 1, {
                minFilter: three_1.NearestFilter,
                magFilter: three_1.NearestFilter
            });
            this.renderTarget.texture.name = "NormalPass.Target";
        }
        this.dTexture = new three_1.DepthTexture(1, 1);
        // Hack: Make sure the input buffer uses the depth texture.
        this.renderTarget.depthTexture = this.dTexture;
        this.renderTarget.dispose();
        if (this.renderTarget.stencilBuffer) {
            this.dTexture.format = three_1.DepthStencilFormat;
            this.dTexture.type = three_1.UnsignedInt248Type;
        }
        else {
            this.dTexture.type = three_1.UnsignedIntType;
        }
        /**
         * The resolution.
         *
         * @type {Resolution}
         * @readonly
         */
        const resolution = this.resolution = new postprocessing_1.Resolution(this, resolutionX, resolutionY, resolutionScale);
        resolution.addEventListener("change", (e) => this.setSize(resolution.baseWidth, resolution.baseHeight));
    }
    set mainScene(value) {
        this.renderPass.mainScene = value;
    }
    set mainCamera(value) {
        this.renderPass.mainCamera = value;
    }
    /**
     * The normal texture.
     *
     * @type {Texture}
     */
    get texture() {
        var _a;
        return (_a = this.renderTarget) === null || _a === void 0 ? void 0 : _a.texture;
    }
    get depthTexture() {
        var _a;
        return (_a = this.renderTarget) === null || _a === void 0 ? void 0 : _a.depthTexture;
    }
    /**
     * The normal texture.
     *
     * @deprecated Use texture instead.
     * @return {Texture} The texture.
     */
    getTexture() {
        var _a;
        return (_a = this.renderTarget) === null || _a === void 0 ? void 0 : _a.texture;
    }
    /**
     * Returns the resolution settings.
     *
     * @deprecated Use resolution instead.
     * @return {Resolution} The resolution.
     */
    getResolution() {
        return this.resolution;
    }
    /**
     * Returns the current resolution scale.
     *
     * @return {Number} The resolution scale.
     * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
     */
    getResolutionScale() {
        return this.resolution.scale;
    }
    /**
     * Sets the resolution scale.
     *
     * @param {Number} scale - The new resolution scale.
     * @deprecated Use resolution.preferredWidth or resolution.preferredHeight instead.
     */
    setResolutionScale(scale) {
        this.resolution.scale = scale;
    }
    /**
     * Renders the scene normals.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer) {
        const renderTarget = this.renderToScreen ? null : this.renderTarget;
        this.renderPass.render(renderer, renderTarget, renderTarget, 0, true);
    }
    /**
     * Updates the size of this pass.
     *
     * @param {Number} width - The width.
     * @param {Number} height - The height.
     */
    setSize(width, height) {
        var _a;
        const resolution = this.resolution;
        resolution.setBaseSize(width, height);
        (_a = this.renderTarget) === null || _a === void 0 ? void 0 : _a.setSize(resolution.width, resolution.height);
    }
}
exports.NormalPass = NormalPass;
//# sourceMappingURL=NormalPass.js.map

/***/ }),

/***/ 25472:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/**
 * A pass that renders a given scene into the input buffer or to screen.
 *
 * This pass uses a {@link ClearPass} to clear the target buffer.
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RenderPass = void 0;
const postprocessing_1 = __webpack_require__(66739);
const three_1 = __webpack_require__(39437);
const GemMaterial_1 = __webpack_require__(75655);
class RenderPass extends postprocessing_1.Pass {
    /**
     * Constructs a new render pass.
     *
     * @param {Scene} scene - The scene to render.
     * @param {Camera} camera - The camera to use to render the scene.
     * @param {Material} [overrideMaterial=null] - An override material.
     */
    constructor(scene, camera, overrideMaterial = null) {
        super("RenderPass", scene, camera);
        this.needsSwap = false;
        /**
         * A clear pass.
         *
         * @type {ClearPass}
         * @readonly
         */
        this.clearPass = new postprocessing_1.ClearPass();
        /**
         * An override material manager.
         *
         * @type {OverrideMaterialManager}
         * @private
         */
        this.overrideMaterialManager = (overrideMaterial === null) ? null : new postprocessing_1.OverrideMaterialManager(overrideMaterial);
        /**
         * Indicates whether the scene background should be ignored.
         *
         * @type {Boolean}
         */
        this.ignoreBackground = false;
        /**
         * Indicates whether the shadow map auto update should be skipped.
         *
         * @type {Boolean}
         */
        this.skipShadowMapUpdate = false;
        /**
         * A selection of objects to render.
         *
         * @type {Selection}
         * @readonly
         */
        this.selection = null;
    }
    set mainScene(value) {
        this.scene = value;
    }
    set mainCamera(value) {
        this.camera = value;
    }
    get renderToScreen() {
        return super.renderToScreen;
    }
    set renderToScreen(value) {
        super.renderToScreen = value;
        this.clearPass.renderToScreen = value;
    }
    /**
     * The current override material.
     *
     * @type {Material}
     */
    get overrideMaterial() {
        const manager = this.overrideMaterialManager;
        return (manager !== null) ? manager.material : null;
    }
    set overrideMaterial(value) {
        const manager = this.overrideMaterialManager;
        if (value !== null) {
            if (manager !== null) {
                manager.setMaterial(value);
            }
            else {
                this.overrideMaterialManager = new postprocessing_1.OverrideMaterialManager(value);
            }
        }
        else if (manager !== null) {
            manager.dispose();
            this.overrideMaterialManager = null;
        }
    }
    /**
     * Returns the current override material.
     *
     * @deprecated Use overrideMaterial instead.
     * @return {Material} The material.
     */
    getOverrideMaterial() {
        return this.overrideMaterial;
    }
    /**
     * Sets the override material.
     *
     * @deprecated Use overrideMaterial instead.
     * @return {Material} value - The material.
     */
    setOverrideMaterial(value) {
        this.overrideMaterial = value;
    }
    /**
     * Indicates whether the target buffer should be cleared before rendering.
     *
     * @type {Boolean}
     * @deprecated Use clearPass.enabled instead.
     */
    get clear() {
        return this.clearPass.enabled;
    }
    set clear(value) {
        this.clearPass.enabled = value;
    }
    /**
     * Returns the selection. Default is `null` (no restriction).
     *
     * @deprecated Use selection instead.
     * @return {Selection} The selection.
     */
    getSelection() {
        return this.selection;
    }
    /**
     * Sets the selection. Set to `null` to disable.
     *
     * @deprecated Use selection instead.
     * @param {Selection} value - The selection.
     */
    setSelection(value) {
        this.selection = value;
    }
    /**
     * Indicates whether the scene background is disabled.
     *
     * @deprecated Use ignoreBackground instead.
     * @return {Boolean} Whether the scene background is disabled.
     */
    isBackgroundDisabled() {
        return this.ignoreBackground;
    }
    /**
     * Enables or disables the scene background.
     *
     * @deprecated Use ignoreBackground instead.
     * @param {Boolean} value - Whether the scene background should be disabled.
     */
    setBackgroundDisabled(value) {
        this.ignoreBackground = value;
    }
    /**
     * Indicates whether the shadow map auto update is disabled.
     *
     * @deprecated Use skipShadowMapUpdate instead.
     * @return {Boolean} Whether the shadow map update is disabled.
     */
    isShadowMapDisabled() {
        return this.skipShadowMapUpdate;
    }
    /**
     * Enables or disables the shadow map auto update.
     *
     * @deprecated Use skipShadowMapUpdate instead.
     * @param {Boolean} value - Whether the shadow map auto update should be disabled.
     */
    setShadowMapDisabled(value) {
        this.skipShadowMapUpdate = value;
    }
    /**
     * Returns the clear pass.
     *
     * @deprecated Use clearPass.enabled instead.
     * @return {ClearPass} The clear pass.
     */
    getClearPass() {
        return this.clearPass;
    }
    /**
     * Renders the scene.
     *
     * @param {WebGLRenderer} renderer - The renderer.
     * @param {WebGLRenderTarget} inputBuffer - A frame buffer that contains the result of the previous pass.
     * @param {WebGLRenderTarget} outputBuffer - A frame buffer that serves as the output render target unless this pass renders to screen.
     * @param {Number} [deltaTime] - The time between the last frame and the current one in seconds.
     * @param {Boolean} [stencilTest] - Indicates whether a stencil mask is active.
     */
    render(renderer, inputBuffer, outputBuffer, deltaTime, stencilTest) {
        const materialsNotRenderer = [];
        this.scene.traverse(function (object) {
            if (object.visible === true) {
                if (object instanceof three_1.Mesh && object.material) {
                    if (object.material instanceof three_1.MeshPhysicalMaterial && !(object.material instanceof GemMaterial_1.GemMaterial) && object.material.transparent) {
                        materialsNotRenderer.push(object);
                        object.visible = false;
                    }
                }
                if (object instanceof three_1.Line || object instanceof three_1.LineLoop || object instanceof three_1.LineSegments || object instanceof three_1.Points) {
                    materialsNotRenderer.push(object);
                    object.visible = false;
                }
                if (object.userData.ambientOcclusion === false) {
                    materialsNotRenderer.push(object);
                    object.visible = false;
                }
            }
        });
        const scene = this.scene;
        const camera = this.camera;
        const selection = this.selection;
        const mask = camera.layers.mask;
        const background = scene.background;
        const shadowMapAutoUpdate = renderer.shadowMap.autoUpdate;
        const renderTarget = this.renderToScreen ? null : inputBuffer;
        if (selection !== null) {
            camera.layers.set(selection.getLayer());
        }
        if (this.skipShadowMapUpdate) {
            renderer.shadowMap.autoUpdate = false;
        }
        if (this.ignoreBackground || this.clearPass.overrideClearColor !== null) {
            scene.background = null;
        }
        if (this.clearPass.enabled) {
            this.clearPass.render(renderer, inputBuffer, inputBuffer);
        }
        renderer.setRenderTarget(renderTarget);
        if (this.overrideMaterialManager !== null) {
            this.overrideMaterialManager.render(renderer, scene, camera);
        }
        else {
            renderer.render(scene, camera);
        }
        // Restore original values.
        camera.layers.mask = mask;
        scene.background = background;
        renderer.shadowMap.autoUpdate = shadowMapAutoUpdate;
        for (let i = 0; i < materialsNotRenderer.length; i++)
            materialsNotRenderer[i].visible = true;
    }
}
exports.RenderPass = RenderPass;
//# sourceMappingURL=RenderPass.js.map

/***/ }),

/***/ 75655:
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
exports.GemMaterial = void 0;
const THREE = __importStar(__webpack_require__(39437));
const three_1 = __webpack_require__(39437);
const gem_1 = __webpack_require__(75414);
class GemMaterial extends three_1.MeshPhysicalMaterial {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(params) {
        super();
        this.refractionIndex = 2.4;
        this.impurityMap = null;
        this.impurityScale = 1.0;
        this.colorTransferBegin = new THREE.Color(0xffffff);
        this.colorTransferEnd = new THREE.Color(0xffffff);
        this.center = new THREE.Vector3(0, 0, 0);
        this.tracingDepth = 5;
        this.radius = 1.0;
        this.sphericalNormalMap = null;
        this.gamma = 1.0;
        this.contrast = 1.0;
        this.brightness = 0.0;
        this.dispersion = 0.0;
        this.tracingOpacity = 0.0;
        this.isGemMaterial = true;
        const uniforms = {
            refractionIndex: { value: 2.4 },
            impurityMap: { value: null },
            impurityScale: { value: 1.0 },
            colorTransferBegin: { value: new THREE.Color(0xffffff) },
            colorTransferEnd: { value: new THREE.Color(0xffffff) },
            center: { value: new THREE.Vector3(0, 0, 0) },
            tracingDepth: { value: 5 },
            radius: { value: 1.0 },
            sphericalNormalMap: { value: null },
            gamma: { value: 1.0 },
            contrast: { value: 1.0 },
            brightness: { value: 0.0 },
            dispersion: { value: 0.0 },
            tracingOpacity: { value: 0.0 }
        };
        this._extraUniforms = uniforms;
        this.onBeforeCompile = function (shader) {
            for (const uniformName in uniforms) {
                shader.uniforms[uniformName] = uniforms[uniformName];
            }
            shader.vertexShader = gem_1.vert;
            shader.fragmentShader = gem_1.frag;
        };
        Object.defineProperties(this, {
            tracingDepth: {
                get: function () {
                    return uniforms.tracingDepth.value;
                },
                set: function (v) {
                    uniforms.tracingDepth.value = v;
                    if (v) {
                        this.defines.TRACING_DEPTH = Math.floor(v);
                    }
                    else {
                        delete this.defines.TRACING_DEPTH;
                    }
                }
            },
            refractionIndex: {
                get: function () {
                    return uniforms.refractionIndex.value;
                },
                set: function (v) {
                    uniforms.refractionIndex.value = v;
                }
            },
            impurityMap: {
                get: function () {
                    return uniforms.impurityMap.value;
                },
                set: function (v) {
                    uniforms.impurityMap.value = v;
                    if (v) {
                        this.defines.USE_IMPURITYMAP = '';
                        this.defines.USE_UV = '';
                    }
                    else {
                        delete this.defines.USE_IMPURITYMAP;
                        delete this.defines.USE_UV;
                    }
                }
            },
            impurityScale: {
                get: function () {
                    return uniforms.impurityScale.value;
                },
                set: function (v) {
                    uniforms.impurityScale.value = v;
                }
            },
            colorTransferBegin: {
                get: function () {
                    return uniforms.colorTransferBegin.value;
                },
                set: function (v) {
                    uniforms.colorTransferBegin.value = v;
                }
            },
            colorTransferEnd: {
                get: function () {
                    return uniforms.colorTransferEnd.value;
                },
                set: function (v) {
                    uniforms.colorTransferEnd.value = v;
                }
            },
            center: {
                get: function () {
                    return uniforms.center.value;
                },
                set: function (v) {
                    uniforms.center.value = v;
                }
            },
            radius: {
                get: function () {
                    return uniforms.radius.value;
                },
                set: function (v) {
                    uniforms.radius.value = v;
                }
            },
            sphericalNormalMap: {
                get: function () {
                    return uniforms.sphericalNormalMap.value;
                },
                set: function (v) {
                    uniforms.sphericalNormalMap.value = v;
                    if (v) {
                        this.defines.USE_UV = '';
                    }
                    else {
                        delete this.defines.USE_UV;
                    }
                }
            },
            gamma: {
                get: function () {
                    return uniforms.gamma.value;
                },
                set: function (v) {
                    uniforms.gamma.value = v;
                }
            },
            contrast: {
                get: function () {
                    return uniforms.contrast.value;
                },
                set: function (v) {
                    uniforms.contrast.value = v;
                }
            },
            brightness: {
                get: function () {
                    return uniforms.brightness.value;
                },
                set: function (v) {
                    uniforms.brightness.value = v;
                }
            },
            dispersion: {
                get: function () {
                    return uniforms.dispersion.value;
                },
                set: function (v) {
                    uniforms.dispersion.value = v;
                    if (v !== 0) {
                        this.defines.DISPERSION = '';
                    }
                    else {
                        delete this.defines.DISPERSION;
                    }
                }
            },
            tracingOpacity: {
                get: function () {
                    return uniforms.tracingOpacity.value;
                },
                set: function (v) {
                    uniforms.tracingOpacity.value = v;
                }
            }
        });
        this.refractionIndex = params.refractionIndex || 2.4;
        this.impurityMap = params.impurityMap || null;
        this.impurityScale = params.impurityScale || 1;
        this.colorTransferBegin.copy(params.colorTransferBegin || new THREE.Color(0xffffff));
        this.colorTransferEnd.copy(params.colorTransferEnd || new THREE.Color(0xffffff));
        this.center.copy(params.center || new THREE.Vector3(0, 0, 0));
        this.tracingDepth = params.tracingDepth || 5;
        this.radius = params.radius || 1;
        this.sphericalNormalMap = params.sphericalNormalMap || null;
        this.gamma = params.gamma || 1;
        this.contrast = params.contrast || 1;
        this.brightness = params.brightness || 0;
        this.dispersion = params.dispersion || 0;
        this.tracingOpacity = params.tracingOpacity || 0;
        this.setValues(params);
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    copy(s) {
        super.copy(s);
        const source = s;
        this.refractionIndex = source.refractionIndex;
        this.impurityMap = source.impurityMap;
        this.impurityScale = source.impurityScale;
        this.colorTransferBegin.copy(source.colorTransferBegin);
        this.colorTransferEnd.copy(source.colorTransferEnd);
        this.center.copy(source.center);
        this.tracingDepth = source.tracingDepth;
        this.radius = source.radius;
        this.sphericalNormalMap = source.sphericalNormalMap;
        this.gamma = source.gamma;
        this.contrast = source.contrast;
        this.brightness = source.brightness;
        this.dispersion = source.dispersion;
        this.tracingOpacity = source.tracingOpacity;
        return this;
    }
}
exports.GemMaterial = GemMaterial;
//# sourceMappingURL=GemMaterial.js.map

/***/ }),

/***/ 3382:
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
exports.MultiPointsMaterial = void 0;
const THREE = __importStar(__webpack_require__(39437));
const multi_points_1 = __webpack_require__(35940);
// #endregion Interfaces (1)
// #region Classes (1)
class MultiPointsMaterial extends THREE.PointsMaterial {
    // #endregion Properties (22)
    // #region Constructors (1)
    constructor(params) {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8, _9, _10, _11, _12, _13, _14, _15, _16, _17;
        super();
        // #region Properties (22)
        this.alphaMap_0 = null;
        this.alphaMap_1 = null;
        this.alphaMap_2 = null;
        this.alphaMap_3 = null;
        this.alphaMap_4 = null;
        this.alphaMap_5 = null;
        this.alphaMap_6 = null;
        this.alphaMap_7 = null;
        this.color_0 = new THREE.Color(0xffffff);
        this.color_1 = new THREE.Color(0xffffff);
        this.color_2 = new THREE.Color(0xffffff);
        this.color_3 = new THREE.Color(0xffffff);
        this.color_4 = new THREE.Color(0xffffff);
        this.color_5 = new THREE.Color(0xffffff);
        this.color_6 = new THREE.Color(0xffffff);
        this.color_7 = new THREE.Color(0xffffff);
        this.map_0 = null;
        this.map_1 = null;
        this.map_2 = null;
        this.map_3 = null;
        this.map_4 = null;
        this.map_5 = null;
        this.map_6 = null;
        this.map_7 = null;
        this.materialIndexDataTexture = null;
        this.materialIndexDataTextureSize = 1024;
        this.sizeAttenuation_0 = false;
        this.sizeAttenuation_1 = false;
        this.sizeAttenuation_2 = false;
        this.sizeAttenuation_3 = false;
        this.sizeAttenuation_4 = false;
        this.sizeAttenuation_5 = false;
        this.sizeAttenuation_6 = false;
        this.sizeAttenuation_7 = false;
        this.size_0 = 1.0;
        this.size_1 = 1.0;
        this.size_2 = 1.0;
        this.size_3 = 1.0;
        this.size_4 = 1.0;
        this.size_5 = 1.0;
        this.size_6 = 1.0;
        this.size_7 = 1.0;
        this.isMultiPointsMaterial = true;
        const uniforms = {
            materialIndexDataTexture: { value: null },
            materialIndexDataTextureSize: { value: 1024 },
            map_0: { value: null },
            color_0: { value: new THREE.Color(0xff0000) },
            alphaMap_0: { value: null },
            size_0: { value: 1.0 },
            sizeAttenuation_0: { value: false },
            map_1: { value: null },
            color_1: { value: new THREE.Color(0x00ff00) },
            alphaMap_1: { value: null },
            size_1: { value: 1.0 },
            sizeAttenuation_1: { value: false },
            map_2: { value: null },
            color_2: { value: new THREE.Color(0x0000ff) },
            alphaMap_2: { value: null },
            size_2: { value: 1.0 },
            sizeAttenuation_2: { value: false },
            map_3: { value: null },
            color_3: { value: new THREE.Color(0x0000ff) },
            alphaMap_3: { value: null },
            size_3: { value: 1.0 },
            sizeAttenuation_3: { value: false },
            map_4: { value: null },
            color_4: { value: new THREE.Color(0x0000ff) },
            alphaMap_4: { value: null },
            size_4: { value: 1.0 },
            sizeAttenuation_4: { value: false },
            map_5: { value: null },
            color_5: { value: new THREE.Color(0x0000ff) },
            alphaMap_5: { value: null },
            size_5: { value: 1.0 },
            sizeAttenuation_5: { value: false },
            map_6: { value: null },
            color_6: { value: new THREE.Color(0x0000ff) },
            alphaMap_6: { value: null },
            size_6: { value: 1.0 },
            sizeAttenuation_6: { value: false },
            map_7: { value: null },
            color_7: { value: new THREE.Color(0x0000ff) },
            alphaMap_7: { value: null },
            size_7: { value: 1.0 },
            sizeAttenuation_7: { value: false }
        };
        this._extraUniforms = uniforms;
        this.onBeforeCompile = function (shader) {
            for (const uniformName in uniforms) {
                shader.uniforms[uniformName] = uniforms[uniformName];
            }
            shader.vertexShader = multi_points_1.vert;
            shader.fragmentShader = multi_points_1.frag;
        };
        Object.defineProperties(this, {
            materialIndexDataTexture: {
                get: function () {
                    return uniforms.materialIndexDataTexture.value;
                },
                set: function (v) {
                    uniforms.materialIndexDataTexture.value = v;
                }
            },
            materialIndexDataTextureSize: {
                get: function () {
                    return uniforms.materialIndexDataTextureSize.value;
                },
                set: function (v) {
                    uniforms.materialIndexDataTextureSize.value = v;
                }
            },
            map_0: {
                get: function () {
                    return uniforms.map_0.value;
                },
                set: function (v) {
                    uniforms.map_0.value = v;
                }
            },
            color_0: {
                get: function () {
                    return uniforms.color_0.value;
                },
                set: function (v) {
                    uniforms.color_0.value = v;
                }
            },
            alphaMap_0: {
                get: function () {
                    return uniforms.alphaMap_0.value;
                },
                set: function (v) {
                    uniforms.alphaMap_0.value = v;
                }
            },
            size_0: {
                get: function () {
                    return uniforms.size_0.value;
                },
                set: function (v) {
                    uniforms.size_0.value = v;
                }
            },
            sizeAttenuation_0: {
                get: function () {
                    return uniforms.sizeAttenuation_0.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_0.value = v;
                }
            },
            map_1: {
                get: function () {
                    return uniforms.map_1.value;
                },
                set: function (v) {
                    uniforms.map_1.value = v;
                }
            },
            color_1: {
                get: function () {
                    return uniforms.color_1.value;
                },
                set: function (v) {
                    uniforms.color_1.value = v;
                }
            },
            alphaMap_1: {
                get: function () {
                    return uniforms.alphaMap_1.value;
                },
                set: function (v) {
                    uniforms.alphaMap_1.value = v;
                }
            },
            size_1: {
                get: function () {
                    return uniforms.size_1.value;
                },
                set: function (v) {
                    uniforms.size_1.value = v;
                }
            },
            sizeAttenuation_1: {
                get: function () {
                    return uniforms.sizeAttenuation_1.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_1.value = v;
                }
            },
            map_2: {
                get: function () {
                    return uniforms.map_2.value;
                },
                set: function (v) {
                    uniforms.map_2.value = v;
                }
            },
            color_2: {
                get: function () {
                    return uniforms.color_2.value;
                },
                set: function (v) {
                    uniforms.color_2.value = v;
                }
            },
            alphaMap_2: {
                get: function () {
                    return uniforms.alphaMap_2.value;
                },
                set: function (v) {
                    uniforms.alphaMap_2.value = v;
                }
            },
            size_2: {
                get: function () {
                    return uniforms.size_2.value;
                },
                set: function (v) {
                    uniforms.size_2.value = v;
                }
            },
            sizeAttenuation_2: {
                get: function () {
                    return uniforms.sizeAttenuation_2.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_2.value = v;
                }
            },
            map_3: {
                get: function () {
                    return uniforms.map_3.value;
                },
                set: function (v) {
                    uniforms.map_3.value = v;
                }
            },
            color_3: {
                get: function () {
                    return uniforms.color_3.value;
                },
                set: function (v) {
                    uniforms.color_3.value = v;
                }
            },
            alphaMap_3: {
                get: function () {
                    return uniforms.alphaMap_3.value;
                },
                set: function (v) {
                    uniforms.alphaMap_3.value = v;
                }
            },
            size_3: {
                get: function () {
                    return uniforms.size_3.value;
                },
                set: function (v) {
                    uniforms.size_3.value = v;
                }
            },
            sizeAttenuation_3: {
                get: function () {
                    return uniforms.sizeAttenuation_3.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_3.value = v;
                }
            },
            map_4: {
                get: function () {
                    return uniforms.map_4.value;
                },
                set: function (v) {
                    uniforms.map_4.value = v;
                }
            },
            color_4: {
                get: function () {
                    return uniforms.color_4.value;
                },
                set: function (v) {
                    uniforms.color_4.value = v;
                }
            },
            alphaMap_4: {
                get: function () {
                    return uniforms.alphaMap_4.value;
                },
                set: function (v) {
                    uniforms.alphaMap_4.value = v;
                }
            },
            size_4: {
                get: function () {
                    return uniforms.size_4.value;
                },
                set: function (v) {
                    uniforms.size_4.value = v;
                }
            },
            sizeAttenuation_4: {
                get: function () {
                    return uniforms.sizeAttenuation_4.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_4.value = v;
                }
            },
            map_5: {
                get: function () {
                    return uniforms.map_5.value;
                },
                set: function (v) {
                    uniforms.map_5.value = v;
                }
            },
            color_5: {
                get: function () {
                    return uniforms.color_5.value;
                },
                set: function (v) {
                    uniforms.color_5.value = v;
                }
            },
            alphaMap_5: {
                get: function () {
                    return uniforms.alphaMap_5.value;
                },
                set: function (v) {
                    uniforms.alphaMap_5.value = v;
                }
            },
            size_5: {
                get: function () {
                    return uniforms.size_5.value;
                },
                set: function (v) {
                    uniforms.size_5.value = v;
                }
            },
            sizeAttenuation_5: {
                get: function () {
                    return uniforms.sizeAttenuation_5.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_5.value = v;
                }
            },
            map_6: {
                get: function () {
                    return uniforms.map_6.value;
                },
                set: function (v) {
                    uniforms.map_6.value = v;
                }
            },
            color_6: {
                get: function () {
                    return uniforms.color_6.value;
                },
                set: function (v) {
                    uniforms.color_6.value = v;
                }
            },
            alphaMap_6: {
                get: function () {
                    return uniforms.alphaMap_6.value;
                },
                set: function (v) {
                    uniforms.alphaMap_6.value = v;
                }
            },
            size_6: {
                get: function () {
                    return uniforms.size_6.value;
                },
                set: function (v) {
                    uniforms.size_6.value = v;
                }
            },
            sizeAttenuation_6: {
                get: function () {
                    return uniforms.sizeAttenuation_6.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_6.value = v;
                }
            },
            map_7: {
                get: function () {
                    return uniforms.map_7.value;
                },
                set: function (v) {
                    uniforms.map_7.value = v;
                }
            },
            color_7: {
                get: function () {
                    return uniforms.color_7.value;
                },
                set: function (v) {
                    uniforms.color_7.value = v;
                }
            },
            alphaMap_7: {
                get: function () {
                    return uniforms.alphaMap_7.value;
                },
                set: function (v) {
                    uniforms.alphaMap_7.value = v;
                }
            },
            size_7: {
                get: function () {
                    return uniforms.size_7.value;
                },
                set: function (v) {
                    uniforms.size_7.value = v;
                }
            },
            sizeAttenuation_7: {
                get: function () {
                    return uniforms.sizeAttenuation_7.value;
                },
                set: function (v) {
                    uniforms.sizeAttenuation_7.value = v;
                }
            }
        });
        this.materialIndexDataTexture = (_a = params.materialIndexDataTexture) !== null && _a !== void 0 ? _a : null;
        this.materialIndexDataTextureSize = (_b = params.materialIndexDataTextureSize) !== null && _b !== void 0 ? _b : 1024;
        this.map_0 = (_c = params.map_0) !== null && _c !== void 0 ? _c : null;
        this.color_0 = new THREE.Color((_d = params.color_0) !== null && _d !== void 0 ? _d : 0xffffff);
        this.alphaMap_0 = (_e = params.alphaMap_0) !== null && _e !== void 0 ? _e : null;
        this.size_0 = (_f = params.size_0) !== null && _f !== void 0 ? _f : 1.0;
        this.sizeAttenuation_0 = (_g = params.sizeAttenuation_0) !== null && _g !== void 0 ? _g : false;
        this.map_1 = (_h = params.map_1) !== null && _h !== void 0 ? _h : null;
        this.color_1 = new THREE.Color((_j = params.color_1) !== null && _j !== void 0 ? _j : 0xffffff);
        this.alphaMap_1 = (_k = params.alphaMap_1) !== null && _k !== void 0 ? _k : null;
        this.size_1 = (_l = params.size_1) !== null && _l !== void 0 ? _l : 1.0;
        this.sizeAttenuation_1 = (_m = params.sizeAttenuation_1) !== null && _m !== void 0 ? _m : false;
        this.map_2 = (_o = params.map_2) !== null && _o !== void 0 ? _o : null;
        this.color_2 = new THREE.Color((_p = params.color_2) !== null && _p !== void 0 ? _p : 0xffffff);
        this.alphaMap_2 = (_q = params.alphaMap_2) !== null && _q !== void 0 ? _q : null;
        this.size_2 = (_r = params.size_2) !== null && _r !== void 0 ? _r : 1.0;
        this.sizeAttenuation_2 = (_s = params.sizeAttenuation_2) !== null && _s !== void 0 ? _s : false;
        this.map_3 = (_t = params.map_3) !== null && _t !== void 0 ? _t : null;
        this.color_3 = new THREE.Color((_u = params.color_3) !== null && _u !== void 0 ? _u : 0xffffff);
        this.alphaMap_3 = (_v = params.alphaMap_3) !== null && _v !== void 0 ? _v : null;
        this.size_3 = (_w = params.size_3) !== null && _w !== void 0 ? _w : 1.0;
        this.sizeAttenuation_3 = (_x = params.sizeAttenuation_3) !== null && _x !== void 0 ? _x : false;
        this.map_4 = (_y = params.map_4) !== null && _y !== void 0 ? _y : null;
        this.color_4 = new THREE.Color((_z = params.color_4) !== null && _z !== void 0 ? _z : 0xffffff);
        this.alphaMap_4 = (_0 = params.alphaMap_4) !== null && _0 !== void 0 ? _0 : null;
        this.size_4 = (_1 = params.size_4) !== null && _1 !== void 0 ? _1 : 1.0;
        this.sizeAttenuation_4 = (_2 = params.sizeAttenuation_4) !== null && _2 !== void 0 ? _2 : false;
        this.map_5 = (_3 = params.map_5) !== null && _3 !== void 0 ? _3 : null;
        this.color_5 = new THREE.Color((_4 = params.color_5) !== null && _4 !== void 0 ? _4 : 0xffffff);
        this.alphaMap_5 = (_5 = params.alphaMap_5) !== null && _5 !== void 0 ? _5 : null;
        this.size_5 = (_6 = params.size_5) !== null && _6 !== void 0 ? _6 : 1.0;
        this.sizeAttenuation_5 = (_7 = params.sizeAttenuation_5) !== null && _7 !== void 0 ? _7 : false;
        this.map_6 = (_8 = params.map_6) !== null && _8 !== void 0 ? _8 : null;
        this.color_6 = new THREE.Color((_9 = params.color_6) !== null && _9 !== void 0 ? _9 : 0xffffff);
        this.alphaMap_6 = (_10 = params.alphaMap_6) !== null && _10 !== void 0 ? _10 : null;
        this.size_6 = (_11 = params.size_6) !== null && _11 !== void 0 ? _11 : 1.0;
        this.sizeAttenuation_6 = (_12 = params.sizeAttenuation_6) !== null && _12 !== void 0 ? _12 : false;
        this.map_7 = (_13 = params.map_7) !== null && _13 !== void 0 ? _13 : null;
        this.color_7 = new THREE.Color((_14 = params.color_7) !== null && _14 !== void 0 ? _14 : 0xffffff);
        this.alphaMap_7 = (_15 = params.alphaMap_7) !== null && _15 !== void 0 ? _15 : null;
        this.size_7 = (_16 = params.size_7) !== null && _16 !== void 0 ? _16 : 1.0;
        this.sizeAttenuation_7 = (_17 = params.sizeAttenuation_7) !== null && _17 !== void 0 ? _17 : false;
        this.setValues(params);
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    copy(s) {
        super.copy(s);
        const source = s;
        this.materialIndexDataTexture = source.materialIndexDataTexture;
        this.materialIndexDataTextureSize = source.materialIndexDataTextureSize;
        this.map_0 = source.map_0;
        this.color_0.copy(source.color_0);
        this.alphaMap_0 = source.alphaMap_0;
        this.size_0 = source.size_0;
        this.sizeAttenuation_0 = source.sizeAttenuation_0;
        this.map_1 = source.map_1;
        this.color_1.copy(source.color_1);
        this.alphaMap_1 = source.alphaMap_1;
        this.size_1 = source.size_1;
        this.sizeAttenuation_1 = source.sizeAttenuation_1;
        this.map_2 = source.map_2;
        this.color_2.copy(source.color_2);
        this.alphaMap_2 = source.alphaMap_2;
        this.size_2 = source.size_2;
        this.sizeAttenuation_2 = source.sizeAttenuation_2;
        this.map_3 = source.map_3;
        this.color_3.copy(source.color_3);
        this.alphaMap_3 = source.alphaMap_3;
        this.size_3 = source.size_3;
        this.sizeAttenuation_3 = source.sizeAttenuation_3;
        this.map_4 = source.map_4;
        this.color_4.copy(source.color_4);
        this.alphaMap_4 = source.alphaMap_4;
        this.size_4 = source.size_4;
        this.sizeAttenuation_4 = source.sizeAttenuation_4;
        this.map_5 = source.map_5;
        this.color_5.copy(source.color_5);
        this.alphaMap_5 = source.alphaMap_5;
        this.size_5 = source.size_5;
        this.sizeAttenuation_5 = source.sizeAttenuation_5;
        this.map_6 = source.map_6;
        this.color_6.copy(source.color_6);
        this.alphaMap_6 = source.alphaMap_6;
        this.size_6 = source.size_6;
        this.sizeAttenuation_6 = source.sizeAttenuation_6;
        this.map_7 = source.map_7;
        this.color_7.copy(source.color_7);
        this.alphaMap_7 = source.alphaMap_7;
        this.size_7 = source.size_7;
        this.sizeAttenuation_7 = source.sizeAttenuation_7;
        return this;
    }
}
exports.MultiPointsMaterial = MultiPointsMaterial;
// #endregion Classes (1)
//# sourceMappingURL=MultiPointsMaterial.js.map

/***/ }),

/***/ 16871:
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
exports.SpecularGlossinessMaterial = void 0;
const THREE = __importStar(__webpack_require__(39437));
const three_1 = __webpack_require__(39437);
class SpecularGlossinessMaterial extends three_1.MeshStandardMaterial {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(params) {
        super();
        this.isGLTFSpecularGlossinessMaterial = true;
        //various chunks that need replacing
        const specularMap2ParsFragmentChunk = [
            '#ifdef USE_SPECULARMAP2',
            '	uniform sampler2D specularMap2;',
            '#endif'
        ].join('\n');
        const glossinessMapParsFragmentChunk = [
            '#ifdef USE_GLOSSINESSMAP',
            '	uniform sampler2D glossinessMap;',
            '#endif'
        ].join('\n');
        const specularMap2FragmentChunk = [
            'vec3 specularFactor = specular;',
            '#ifdef USE_SPECULARMAP2',
            '	vec4 texelSpecular = texture2D( specularMap2, vUv );',
            '	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture',
            '	specularFactor *= texelSpecular.rgb;',
            '#endif'
        ].join('\n');
        const glossinessMapFragmentChunk = [
            'float glossinessFactor = glossiness;',
            '#ifdef USE_GLOSSINESSMAP',
            '	vec4 texelGlossiness = texture2D( glossinessMap, vUv );',
            '	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture',
            '	glossinessFactor *= texelGlossiness.a;',
            '#endif'
        ].join('\n');
        const lightPhysicalFragmentChunk = [
            'PhysicalMaterial material;',
            'material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );',
            'vec3 dxy = max( abs( dFdx( nonPerturbedNormal  ) ), abs( dFdy( nonPerturbedNormal ) ) );',
            'float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );',
            'material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.',
            'material.roughness += geometryRoughness;',
            'material.roughness = min( material.roughness, 1.0 );',
            'material.specularColor = specularFactor;',
        ].join('\n');
        const uniforms = {
            specular: { value: new THREE.Color().setHex(0xffffff) },
            glossiness: { value: 1 },
            specularMap2: { value: null },
            glossinessMap: { value: null }
        };
        this._extraUniforms = uniforms;
        this.onBeforeCompile = function (shader) {
            for (const uniformName in uniforms) {
                shader.uniforms[uniformName] = uniforms[uniformName];
            }
            shader.fragmentShader = shader.fragmentShader
                .replace('uniform float roughness;', 'uniform vec3 specular;')
                .replace('uniform float metalness;', 'uniform float glossiness;')
                .replace('#include <roughnessmap_pars_fragment>', specularMap2ParsFragmentChunk)
                .replace('#include <metalnessmap_pars_fragment>', glossinessMapParsFragmentChunk)
                .replace('#include <roughnessmap_fragment>', specularMap2FragmentChunk)
                .replace('#include <metalnessmap_fragment>', glossinessMapFragmentChunk)
                .replace('#include <lights_physical_fragment>', lightPhysicalFragmentChunk);
        };
        Object.defineProperties(this, {
            specular: {
                get: function () {
                    return uniforms.specular.value;
                },
                set: function (v) {
                    uniforms.specular.value = v;
                }
            },
            specularMap2: {
                get: function () {
                    return uniforms.specularMap2.value;
                },
                set: function (v) {
                    uniforms.specularMap2.value = v;
                    if (v) {
                        this.defines.USE_SPECULARMAP2 = ''; // USE_UV is set by the renderer for specular maps
                    }
                    else {
                        delete this.defines.USE_SPECULARMAP2;
                    }
                }
            },
            glossiness: {
                get: function () {
                    return uniforms.glossiness.value;
                },
                set: function (v) {
                    uniforms.glossiness.value = v;
                }
            },
            glossinessMap: {
                get: function () {
                    return uniforms.glossinessMap.value;
                },
                set: function (v) {
                    uniforms.glossinessMap.value = v;
                    if (v) {
                        this.defines.USE_GLOSSINESSMAP = '';
                        this.defines.USE_UV = '';
                    }
                    else {
                        delete this.defines.USE_GLOSSINESSMAP;
                        delete this.defines.USE_UV;
                    }
                }
            }
        });
        delete this.metalness;
        delete this.roughness;
        delete this.metalnessMap;
        delete this.roughnessMap;
        this.setValues(params);
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    copy(source) {
        super.copy(source);
        this.specularMap2 = source.specularMap2;
        this.specular.copy(source.specular);
        this.glossinessMap = source.glossinessMap;
        this.glossiness = source.glossiness;
        delete this.metalness;
        delete this.roughness;
        delete this.metalnessMap;
        delete this.roughnessMap;
        return this;
    }
}
exports.SpecularGlossinessMaterial = SpecularGlossinessMaterial;
//# sourceMappingURL=SpecularGlossinessMaterial.js.map

/***/ })

}]);
//# sourceMappingURL=vendor.common-523c457a.bundle.js.map