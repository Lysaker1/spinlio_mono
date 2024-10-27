"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[864],{

/***/ 23438:
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
var _SDBone_SDid, _SDBone_SDversion;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDBone = void 0;
const THREE = __importStar(__webpack_require__(39437));
const three_1 = __webpack_require__(39437);
class SDBone extends three_1.Bone {
    constructor(SDid, SDversion) {
        super();
        // #region Constructors (1)
        _SDBone_SDid.set(this, void 0);
        _SDBone_SDversion.set(this, void 0);
        __classPrivateFieldSet(this, _SDBone_SDid, SDid, "f");
        __classPrivateFieldSet(this, _SDBone_SDversion, SDversion, "f");
    }
    applyTransformation(transformation) {
        this.matrix.identity();
        this.matrixWorld.identity();
        this.position.set(0, 0, 0);
        this.scale.set(1, 1, 1);
        this.quaternion.set(0, 0, 0, 1);
        this.applyMatrix4(new THREE.Matrix4().fromArray(transformation));
    }
    // #endregion Constructors (1)
    // #region Public Accessors (4)
    get SDid() {
        return __classPrivateFieldGet(this, _SDBone_SDid, "f");
    }
    set SDid(value) {
        __classPrivateFieldSet(this, _SDBone_SDid, value, "f");
    }
    get SDversion() {
        return __classPrivateFieldGet(this, _SDBone_SDversion, "f");
    }
    set SDversion(value) {
        __classPrivateFieldSet(this, _SDBone_SDversion, value, "f");
    }
}
exports.SDBone = SDBone;
_SDBone_SDid = new WeakMap(), _SDBone_SDversion = new WeakMap();
//# sourceMappingURL=SDBone.js.map

/***/ }),

/***/ 1161:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDColor = void 0;
const three_1 = __webpack_require__(39437);
class SDColor extends three_1.Color {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(hexColor, originalColor) {
        super(hexColor);
        // #region Properties (3)
        this._colorSpace = 'srgb-linear';
        this._originalColorSpace = 'srgb-linear';
        if (typeof originalColor === 'number' || Array.isArray(originalColor) && (originalColor.length == 3 || originalColor.length == 4)) {
            this._colorSpace = 'srgb-linear';
            this._originalColorSpace = 'srgb-linear';
        }
        else {
            this._colorSpace = 'srgb';
            this._originalColorSpace = 'srgb';
        }
    }
    // #endregion Constructors (1)
    // #region Public Methods (1)
    /**
     * Depending on the current state and provided value, this function converts the color to a different color space.
     *
     * If the color is in 'srgb' space and active is set to true, it will be converted to 'srgb-linear' space.
     * If the color is in 'srgb-linear' space, the color is not originally in 'srgb-linear' and active is set to false, it will be converted to 'srgb' space.
     *
     * @param active
     */
    colorCorrection(active) {
        if (this._colorSpace === 'srgb' && active === true) {
            // we assume all colors provided are in 'srgb' color space
            // therefore we need to correct those colors to 'srgb-linear' if the color conversion is active
            this.convertSRGBToLinear();
            this._colorSpace = 'srgb-linear';
        }
        else if (this._colorSpace === 'srgb-linear' && active === false && this._originalColorSpace !== 'srgb-linear') {
            // if the color space is already 'srgb-linear', the color was already converted
            // therefore we need to convert it back if the color conversion was deactivted
            // if it was not originally in 'srgb-linear'
            this.convertLinearToSRGB();
            this._colorSpace = 'srgb';
        }
    }
}
exports.SDColor = SDColor;
//# sourceMappingURL=SDColor.js.map

/***/ }),

/***/ 85284:
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
var _SDData_SDtype;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDData = exports.SD_DATA_TYPE = void 0;
const SDObject_1 = __webpack_require__(93867);
var SD_DATA_TYPE;
(function (SD_DATA_TYPE) {
    SD_DATA_TYPE["GEOMETRY"] = "geometry";
    SD_DATA_TYPE["MATERIAL"] = "material";
    SD_DATA_TYPE["THREEJS"] = "threejs";
    SD_DATA_TYPE["LIGHT"] = "light";
    SD_DATA_TYPE["CAMERA"] = "camera";
    SD_DATA_TYPE["ANIMATION"] = "animation";
    SD_DATA_TYPE["INTERACTION"] = "interaction";
    SD_DATA_TYPE["HTML_ELEMENT_ANCHOR"] = "html_element_anchor";
    SD_DATA_TYPE["CUSTOM"] = "custom";
})(SD_DATA_TYPE = exports.SD_DATA_TYPE || (exports.SD_DATA_TYPE = {}));
class SDData extends SDObject_1.SDObject {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(SDid, SDversion) {
        super(SDid, SDversion);
        // #region Properties (1)
        _SDData_SDtype.set(this, SD_DATA_TYPE.CUSTOM);
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get SDtype() {
        return __classPrivateFieldGet(this, _SDData_SDtype, "f");
    }
    set SDtype(value) {
        __classPrivateFieldSet(this, _SDData_SDtype, value, "f");
    }
}
exports.SDData = SDData;
_SDData_SDtype = new WeakMap();
//# sourceMappingURL=SDData.js.map

/***/ }),

/***/ 93867:
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
var _SDObject_SDid, _SDObject_SDversion;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SDObject = void 0;
const THREE = __importStar(__webpack_require__(39437));
const three_1 = __webpack_require__(39437);
class SDObject extends three_1.Object3D {
    constructor(SDid, SDversion) {
        super();
        // #region Constructors (1)
        _SDObject_SDid.set(this, void 0);
        _SDObject_SDversion.set(this, void 0);
        __classPrivateFieldSet(this, _SDObject_SDid, SDid, "f");
        __classPrivateFieldSet(this, _SDObject_SDversion, SDversion, "f");
    }
    applyTransformation(transformation) {
        this.matrix.identity();
        this.matrixWorld.identity();
        this.position.set(0, 0, 0);
        this.scale.set(1, 1, 1);
        this.quaternion.set(0, 0, 0, 1);
        this.applyMatrix4(new THREE.Matrix4().fromArray(transformation));
    }
    // #endregion Constructors (1)
    // #region Public Accessors (4)
    get SDid() {
        return __classPrivateFieldGet(this, _SDObject_SDid, "f");
    }
    set SDid(value) {
        __classPrivateFieldSet(this, _SDObject_SDid, value, "f");
    }
    get SDversion() {
        return __classPrivateFieldGet(this, _SDObject_SDversion, "f");
    }
    set SDversion(value) {
        __classPrivateFieldSet(this, _SDObject_SDversion, value, "f");
    }
    cloneObject() {
        const clone = this.clone();
        clone.SDid = this.SDid;
        clone.SDversion = this.SDversion;
        return clone;
    }
}
exports.SDObject = SDObject;
_SDObject_SDid = new WeakMap(), _SDObject_SDversion = new WeakMap();
//# sourceMappingURL=SDObject.js.map

/***/ }),

/***/ 65642:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.entry = exports.main = void 0;
exports.main = `

uniform float lightSizeUV;
uniform float blending;

#ifdef SHADOWMAP_TYPE_PCF

#define NEAR_PLANE 0.1
#define NUM_SAMPLES 20
#define NUM_RINGS 11

vec2 poissonDisk[NUM_SAMPLES];

void initPoissonSamples( const in vec2 randomSeed ) {
    float ANGLE_STEP = PI2 * float(NUM_RINGS) / float(NUM_SAMPLES);
    float INV_NUM_SAMPLES = 1.0 / float(NUM_SAMPLES);

    // jsfiddle that shows sample pattern: https://jsfiddle.net/a16ff1p7/
    float angle = rand(randomSeed) * PI2;
    float radius = INV_NUM_SAMPLES;
    float radiusStep = radius;

    for (int i = 0; i < int(NUM_SAMPLES); i++ ) {
        poissonDisk[i] = vec2(cos(angle), sin(angle)) * pow(radius, 0.75);
        radius += radiusStep;
        angle += ANGLE_STEP;
    }
}

float penumbraSize( const in float zReceiver, const in float zBlocker ) { // Parallel plane estimation
    return (zReceiver - zBlocker) / zBlocker;
}

float findBlocker(sampler2D shadowMap, const in vec2 uv, const in float zReceiver ) {
    // This uses similar triangles to compute what
    // area of the shadow map we should search
    float searchRadius = lightSizeUV * (zReceiver - NEAR_PLANE) / zReceiver;
    float blockerDepthSum = 0.0;
    int numBlockers = 0;

    for (int i = 0; i < int(NUM_SAMPLES); i++ ) {
        float shadowMapDepth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * searchRadius));
        if (shadowMapDepth < zReceiver) {
            blockerDepthSum += shadowMapDepth;
            numBlockers++;
        }
    }

    if (numBlockers == 0) return -1.0;

    return blockerDepthSum / float(numBlockers);
}

float PCF_Filter(sampler2D shadowMap, vec2 uv, float zReceiver, float filterRadius) {
    float sum = 0.0;
    for (int i = 0; i < int(NUM_SAMPLES); i++ ) {
        float depth = unpackRGBAToDepth(texture2D(shadowMap, uv + poissonDisk[i] * filterRadius));
        if (zReceiver <= depth) sum += 1.0;
    }
    for (int i = 0; i < int(NUM_SAMPLES); i++ ) {
        float depth = unpackRGBAToDepth(texture2D(shadowMap, uv + -poissonDisk[i].yx * filterRadius));
        if (zReceiver <= depth) sum += 1.0;
    }
    return sum / (2.0 * float(NUM_SAMPLES));
}

float PCSS(sampler2D shadowMap, vec4 coords) {
    vec2 uv = coords.xy;
    float zReceiver = coords.z; // Assumed to be eye-space z in this code

    initPoissonSamples(uv);
    // STEP 1: blocker search
    float avgBlockerDepth = findBlocker(shadowMap, uv, zReceiver);

    //There are no occluders so early out (this saves filtering)
    if (avgBlockerDepth == -1.0) return 1.0;

    // STEP 2: penumbra size
    float penumbraRatio = penumbraSize(zReceiver, avgBlockerDepth);
    float filterRadius = penumbraRatio * lightSizeUV * NEAR_PLANE / zReceiver;

    // STEP 3: filtering
    //return avgBlockerDepth;
    return PCF_Filter(shadowMap, uv, zReceiver, filterRadius);
}
#endif
`;
exports.entry = `
// PCSS implementation
vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
float dx = texelSize.x;
float dy = texelSize.y;
vec2 uv = shadowCoord.xy;
vec2 f = fract( uv * shadowMapSize + 0.5 );
uv -= f * texelSize;
float shadow1 = (
    texture2DCompare( shadowMap, uv, shadowCoord.z ) +
    texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
    texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
    texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
    mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ), 
         texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
         f.x ) +
    mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ), 
         texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
         f.x ) +
    mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ), 
         texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
         f.y ) +
    mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ), 
         texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
         f.y ) +
    mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ), 
              texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
              f.x ),
         mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ), 
              texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
              f.x ),
         f.y )
) * ( 1.0 / 9.0 );
float shadow2 = PCSS( shadowMap, shadowCoord );
shadow = shadow1 * (1.0 - blending) + blending * shadow2;
            `;
//# sourceMappingURL=PCSS.js.map

/***/ }),

/***/ 75414:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.frag = exports.vert = void 0;
exports.vert = `
#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

// CUSTOM START
varying vec3 frag_position;
varying vec3 frag_normal;
// CUSTOM END

void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
    #ifdef USE_TRANSMISSION
        vWorldPosition = worldPosition.xyz;
    #endif

    // CUSTOM START
    frag_position = position;
    frag_normal = objectNormal;
    // CUSTOM END
}
`;
exports.frag = `
#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define SPECULAR
#endif

// CUSTOM START
#ifdef USE_IMPURITYMAP
	uniform sampler2D impurityMap;
#endif
// CUSTOM END

uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULARINTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
	#ifdef USE_SPECULARCOLORMAP
		uniform sampler2D specularColorMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEENCOLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEENROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <bsdfs>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>



// CUSTOM START

varying vec4 initialPosition;
varying vec3 initialNormal;

varying vec3 frag_position;
varying vec3 frag_normal;

uniform vec3 center;
uniform float radius;
uniform samplerCube sphericalNormalMap;
uniform mat3 normalMatrix;
uniform mat4 modelMatrix;

uniform float impurityScale;
uniform vec3 colorTransferBegin;
uniform vec3 colorTransferEnd;
uniform float refractionIndex;
uniform float gamma;
uniform float contrast;
uniform float brightness;
uniform float dispersion;
uniform float tracingOpacity;


vec3 getIBLRadianceVariation( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
	#if defined( ENVMAP_TYPE_CUBE_UV )
		vec3 reflectVec = reflect( - viewDir, normal );
		// Mixing the reflection with the normal is more accurate and keeps rough objects from gathering light from behind their tangent plane.
		reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
		reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
		vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
		return min(envMapColor.rgb * envMapIntensity, vec3(1.0));
	#else
		return vec3( 0.0 );
	#endif
}

vec3 calculateReflectedLight(vec3 position, vec3 normal, vec3 viewDir, PhysicalMaterial material, int depth) {
	
	vec3 currentGeometryPosition = (modelMatrix * vec4(position, 1.0)).xyz;

	mat3 normalMatrix;
	normalMatrix[0] = normalize(modelMatrix[0].xyz);
	normalMatrix[1] = normalize(modelMatrix[1].xyz);
	normalMatrix[2] = normalize(modelMatrix[2].xyz);
	
	// Calculate the normal vector in world space
	vec3 currentGeometryNormal = normalize(normalMatrix * normal);
	
	// Calculate the view direction vector in world space
	vec3 currentGeometryViewDir = normalize(normalMatrix * -viewDir);

    vec3 currentGeometryClearcoatNormal;
	
	#ifdef USE_CLEARCOAT
        currentGeometryClearcoatNormal = clearcoatNormal;
    #endif

	ReflectedLight rLight;
	IncidentLight dLight;

	float temp = material.roughness;
	material.roughness = 0.5;

	#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )

		PointLight pointLight;
        #if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
            PointLightShadow pointLightShadow;
        #endif

	    #pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
			pointLight = pointLights[ i ];
            getPointLightInfo( pointLight, currentGeometryPosition, dLight );
            #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
                pointLightShadow = pointLightShadows[ i ];
                dLight.color *= all( bvec2( dLight.visible, receiveShadow ) ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
            #endif
		    RE_Direct( dLight, currentGeometryPosition, currentGeometryNormal, currentGeometryViewDir, currentGeometryClearcoatNormal, material, rLight );
		}
        #pragma unroll_loop_end
	#endif
	#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
        SpotLight spotLight;
        #if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
            SpotLightShadow spotLightShadow;
        #endif
        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
            spotLight = spotLights[ i ];
            getSpotLightInfo( spotLight, currentGeometryPosition, dLight );
            #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
                spotLightShadow = spotLightShadows[ i ];
                dLight.color *= all( bvec2( dLight.visible, receiveShadow ) ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotShadowCoord[ i ] ) : 1.0;
            #endif
            RE_Direct( dLight, currentGeometryPosition, currentGeometryNormal, currentGeometryViewDir, currentGeometryClearcoatNormal, material, rLight );
        }
        #pragma unroll_loop_end
	#endif

    #if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
        DirectionalLight directionalLight;
        #if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
            DirectionalLightShadow directionalLightShadow;
        #endif
        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
            directionalLight = directionalLights[ i ];
            getDirectionalLightInfo( directionalLight, dLight );
            #if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
                directionalLightShadow = directionalLightShadows[ i ];
                dLight.color *= all( bvec2( dLight.visible, receiveShadow ) ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
            #endif
            RE_Direct( dLight, currentGeometryPosition, currentGeometryNormal, currentGeometryViewDir, currentGeometryClearcoatNormal, material, rLight );
        }
        #pragma unroll_loop_end
    #endif
	material.roughness = temp;
	
    #if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
        RectAreaLight rectAreaLight;
        #pragma unroll_loop_start
        for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
            rectAreaLight = rectAreaLights[ i ];
            RE_Direct_RectArea( rectAreaLight, currentGeometryPosition, currentGeometryNormal, currentGeometryViewDir, currentGeometryClearcoatNormal, material, rLight );
        }
        #pragma unroll_loop_end
    #endif
    #if defined( RE_IndirectDiffuse )
        vec3 iblIrradiance = vec3( 0.0 );
        vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
		
		#if defined( USE_LIGHT_PROBES )
        	irradiance += getLightProbeIrradiance( lightProbe, currentGeometryNormal );
		#endif
        #if ( NUM_HEMI_LIGHTS > 0 )
            #pragma unroll_loop_start
            for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
                irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], currentGeometryNormal );
            }
            #pragma unroll_loop_end
        #endif
    #endif
    #if defined( RE_IndirectSpecular )
        vec3 radiance = vec3( 0.0 );
        vec3 clearcoatRadiance = vec3( 0.0 );
    #endif


    #if defined( RE_IndirectDiffuse )
        #ifdef USE_LIGHTMAP
            vec4 lightMapTexel = texture2D( lightMap, vUv2 );
            vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
            irradiance += lightMapIrradiance;
        #endif
        #if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
            iblIrradiance += getIBLIrradiance( currentGeometryNormal );
        #endif
    #endif
    #if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
        radiance += getIBLRadianceVariation( currentGeometryViewDir, currentGeometryNormal, material.roughness );
        #ifdef USE_CLEARCOAT
            clearcoatRadiance += getIBLRadianceVariation( currentGeometryViewDir, currentGeometryClearcoatNormal, material.clearcoatRoughness );
        #endif
    #endif

    #if defined( RE_IndirectDiffuse )
        RE_IndirectDiffuse( irradiance, currentGeometryPosition, currentGeometryNormal, currentGeometryViewDir, currentGeometryClearcoatNormal, material, rLight );
    #endif
    #if defined( RE_IndirectSpecular )
        RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, currentGeometryPosition, currentGeometryNormal, currentGeometryViewDir, currentGeometryClearcoatNormal, material, rLight );
    #endif

	if(depth >= 0) {
		float frac = float(depth) / float(TRACING_DEPTH);
		vec3 colorTransfer = (1.0-frac) * colorTransferBegin + frac * colorTransferEnd;
		rLight.indirectSpecular *= colorTransfer;
		rLight.directSpecular *= colorTransfer;
	}

	vec3 color = rLight.indirectSpecular + rLight.directSpecular + rLight.indirectDiffuse + rLight.directDiffuse;

	// gamma
	color = pow(color, vec3(1.0/gamma)); 

	// contrast
	color.rgb = ((color.rgb - 0.5) * max(contrast, 0.0)) + 0.5; 

	// brightness
	color.r = min(max(color.r + brightness, 0.0), 1.0);
	color.g = min(max(color.g + brightness, 0.0), 1.0);
	color.b = min(max(color.b + brightness, 0.0), 1.0);

	return color;
}

vec3 normalLookUp(vec3 dir) {
	vec4 s = textureCube(sphericalNormalMap, dir);
	if(s.a < 1.0/256.0) {
		return normalize(vec3(-s.x, -s.y, -s.z));
	} else if(s.a < 3.0/256.0) {
		return normalize(vec3(-s.x, -s.y, s.z));
	} else if(s.a < 5.0/256.0) {
		return normalize(vec3(-s.x, s.y, -s.z));
	} else if(s.a < 7.0/256.0) {
		return normalize(vec3(s.x, -s.y, -s.z));
	} else if(s.a < 9.0/256.0) {
		return normalize(vec3(-s.x, s.y, s.z));
	} else if(s.a < 11.0/256.0) {
		return normalize(vec3(s.x, -s.y, s.z));
	} else if(s.a < 13.0/256.0) {
		return normalize(vec3(s.x, s.y, -s.z));
	} else {
		return normalize(s.xyz);
	}
}

#ifdef USE_IMPURITYMAP
	float impurityLookUp(vec3 dir) {
		vec3 c = textureCube(impurityMap, dir.xy).rgb;
		return (c.x + c.y + c.z) / 3.0;
	}
#endif

vec3 raySphereIntersection(vec3 o, vec3 d) {

	vec3 oc = o - center;
    float a = dot(d, d);
    float b = 2.0 * dot(oc, d);
    float c = dot(oc,oc) - radius*radius;
    float discriminant = b*b - 4.0*a*c;
    if(discriminant < 0.0){
        return vec3(0.0);
    }
    else{
        return o +( (-b + sqrt(discriminant)) / (2.0*a)) * d;
    }
}

vec3 hueToSaturatedColor(float hue) {
    float r,g,b;
    if (hue < 0.25){
		float t = 1.0 - (hue / 0.25);
        r = 1.0;
        g = 1.0;
        b = t;    
	} else if (hue < 0.5){
    	float t = 1.0 - (hue - 0.25 / 0.25);
		r = 1.0;
        g = t;
        b = 0.0;
	} else if (hue < 0.75){
    	float t = 1.0 - (hue - 0.5 / 0.25);
		r = t;
        g = 0.0;
        b = 1.0 - t;
    } else {
    	float t = hue - 0.75 / 0.25;
        r = t;
        g = t;
        b = 1.0;
    }
    return vec3(r, g, b) / 0.5 + 0.5;
}
// CUSTOM END

void main() {    
    // CUSTOM START
    vec3 frag_normal_normalized = frag_normal;
    // CUSTOM END
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <opaque_fragment>

    // CUSTOM START
	
    // Extract the translation part of the model matrix
	vec3 translation = modelMatrix[3].xyz;

	// Extract the rotation part of the model matrix (3x3 upper-left submatrix)
	mat3 rotationMatrix = mat3(modelMatrix);

	// Calculate the inverse of the rotation matrix (transpose since it's orthogonal)
	mat3 inverseRotationMatrix;
	inverseRotationMatrix[0] = vec3(rotationMatrix[0].x, rotationMatrix[1].x, rotationMatrix[2].x);
	inverseRotationMatrix[1] = vec3(rotationMatrix[0].y, rotationMatrix[1].y, rotationMatrix[2].y);
	inverseRotationMatrix[2] = vec3(rotationMatrix[0].z, rotationMatrix[1].z, rotationMatrix[2].z);

	// Calculate the camera position in model space
	vec3 cameraPositionInModelSpace = inverseRotationMatrix * (cameraPosition - translation);

	// Calculate the initial direction
	vec3 initialDirection = normalize(frag_position.xyz - cameraPositionInModelSpace);

	vec4 outgoingLight2;
	float r_0 = (1.0-refractionIndex)/(1.0+refractionIndex);
	r_0 = r_0*r_0;

	float cos_theta_0 = -dot(initialDirection, frag_normal_normalized);
	float r_0_outside = (refractionIndex-1.0)/(refractionIndex+1.0);
	r_0_outside = r_0_outside*r_0_outside;
	float initialProbability = r_0_outside + (1.0 - r_0_outside)*pow(1.0 - cos_theta_0, 5.0);

	outgoingLight2 = vec4(calculateReflectedLight(frag_position, frag_normal_normalized, initialDirection, material, -1), 1.0);
	// gl_FragColor = outgoingLight2;
	// return;
	if(TRACING_DEPTH > 0) 
		outgoingLight2 *= initialProbability;
		
	vec3 tempColor;

	#ifdef DISPERSION
		const int loop = 3;
		vec3 dispersionColor;
	#else
		const int loop = 1;
	#endif
		#pragma unroll_loop_start
		for(int j = 0; j < loop; j++){
			vec3 refractedDirection = refract(initialDirection, frag_normal_normalized, 1.0/refractionIndex + float(j)*dispersion * 0.025);
			vec3 newPosition = raySphereIntersection(frag_position, refractedDirection);
			vec3 lookUpVector = normalize(newPosition - center);
			vec3 newNormal = normalLookUp(lookUpVector);
			vec3 newDirection = reflect(refractedDirection, newNormal);

			float currentProbability = 1.0;

			#ifdef USE_IMPURITYMAP
				float impurityProbability = impurityLookUp(lookUpVector);
				currentProbability -= impurityProbability * impurityScale;
				// gl_FragColor = vec4(vec3(impurityProbability), 1.0);
				// return;
			#endif
			
			// if(0 == TRACING_DEPTH) {
			// 	gl_FragColor = vec4(0.5 * newNormal + 0.5, 1.0);
			// 	return;
			// }

			tempColor = vec3(0.0);
			#pragma unroll_loop_start
			for(int i = 0; i < TRACING_DEPTH; i++) {
				// small position correction to avoid artefacts
				newPosition = newPosition - lookUpVector * 1e-6;
				newPosition = raySphereIntersection(newPosition, newDirection);
				lookUpVector = normalize(newPosition - center);
				newNormal = normalLookUp(lookUpVector);
			
				float cos_theta = dot(newDirection, newNormal);
				float ratio;
				if(cos_theta > 0.0) {
					ratio = refractionIndex;
				} else {
					cos_theta = -cos_theta;
					ratio = 1.0 / refractionIndex;
				}
				float cos_theta_2 = 1.0 - ratio*ratio * (1.0 - cos_theta*cos_theta);
				float probability = r_0 + (1.0 - r_0)*pow(1.0 - cos_theta, 5.0);
				if(cos_theta_2 < 0.0) probability = 0.0;

				vec3 refracted = refract(newDirection, newNormal*-1.0, 1.0/refractionIndex);
				tempColor += probability * currentProbability * calculateReflectedLight(newPosition, newNormal*-1.0, reflect(refracted, newNormal), material, i);
				if(i+1 == TRACING_DEPTH)
					tempColor += (1.0 - probability) * currentProbability * calculateReflectedLight(newPosition, newNormal, newDirection, material, i);

				newDirection = reflect(newDirection, newNormal);

				// if(i+1 == TRACING_DEPTH) {
				// 	gl_FragColor = vec4(0.5 * newNormal + 0.5, 1.0);
				// 	return;
				// }

				currentProbability *= (1.0 - probability);
			}
			#pragma unroll_loop_end

			#ifdef DISPERSION
				if(j == 0) {
					dispersionColor.r = tempColor.r;	
				} else if(j == 1) {
					dispersionColor.g = tempColor.g;	
				} else if(j == 2) {
					dispersionColor.b = tempColor.b;	
				}
				tempColor = dispersionColor;
			#endif
		}	
		#pragma unroll_loop_end

	if(TRACING_DEPTH > 0)
		outgoingLight2.rgb += (1.0 - initialProbability) * tempColor;

	float alpha = (1.0 - initialProbability) + initialProbability*tracingOpacity;
	gl_FragColor = vec4(outgoingLight2.rgb, alpha*diffuseColor.a);

    // CUSTOM END

	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}

`;
//# sourceMappingURL=gem.js.map

/***/ }),

/***/ 35940:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.frag = exports.vert = void 0;
exports.vert = `
attribute float positionIndex;
flat varying int vMaterialIndex;
flat varying int vPositionIndex;

uniform float size_0;
uniform float size_1;
uniform float size_2;
uniform float size_3;
uniform float size_4;
uniform float size_5;
uniform float size_6;
uniform float size_7;

uniform bool sizeAttenuation_0;
uniform bool sizeAttenuation_1;
uniform bool sizeAttenuation_2;
uniform bool sizeAttenuation_3;
uniform bool sizeAttenuation_4;
uniform bool sizeAttenuation_5;
uniform bool sizeAttenuation_6;
uniform bool sizeAttenuation_7;

uniform highp usampler2D materialIndexDataTexture;

uniform float scale;

float getSize(int materialIndex) {
    if ( materialIndex == 1 ) {
        return size_1;
    } else if ( materialIndex == 2 ) {
        return size_2;
    } else if ( materialIndex == 3 ) {
        return size_3;
    } else if ( materialIndex == 4 ) {
        return size_4;
    } else if ( materialIndex == 5 ) {
        return size_5;
    } else if ( materialIndex == 6 ) {
        return size_6;
    } else if ( materialIndex == 7 ) {
        return size_7;
    } else {
        return size_0;
    }
}

bool getSizeAttenuation(int materialIndex) {
    if ( materialIndex == 1 ) {
        return sizeAttenuation_1;
    } else if ( materialIndex == 2 ) {
        return sizeAttenuation_2;
    } else if ( materialIndex == 3 ) {
        return sizeAttenuation_3;
    } else if ( materialIndex == 4 ) {
        return sizeAttenuation_4;
    } else if ( materialIndex == 5 ) {
        return sizeAttenuation_5;
    } else if ( materialIndex == 6 ) {
        return sizeAttenuation_6;
    } else if ( materialIndex == 7 ) {
        return sizeAttenuation_7;
    } else {
        return sizeAttenuation_0;
    }
}

#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>

#ifdef USE_POINTS_UV

	varying vec2 vUv;
	uniform mat3 uvTransform;

#endif

int retrieveMaterialIndex() {
    vec2 uv = vec2(positionIndex/1024.0, 0.5);

    // get the value of a texture at a specific index
    return int(texture2D(materialIndexDataTexture, uv).r);
}

void main() {
    int materialIndex = retrieveMaterialIndex();
    vMaterialIndex = materialIndex;

    float size = getSize(materialIndex);
    bool sizeAttenuation = getSizeAttenuation(materialIndex);

	#ifdef USE_POINTS_UV

		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;

	#endif

	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>

    gl_PointSize = size;

	if(sizeAttenuation) {
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
    }


	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>

}
`;
exports.frag = `
uniform vec3 diffuse;
uniform vec3 color_0;
uniform vec3 color_1;
uniform vec3 color_2;
uniform vec3 color_3;
uniform vec3 color_4;
uniform vec3 color_5;
uniform vec3 color_6;
uniform vec3 color_7;


uniform float opacity;
flat varying int vMaterialIndex;
flat varying int vPositionIndex;

#include <common>
#include <color_pars_fragment>

#if defined( USE_POINTS_UV )

	varying vec2 vUv;

#else

	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )

		uniform mat3 uvTransform;

	#endif

#endif

#ifdef USE_MAP

	uniform sampler2D map_0;
	uniform sampler2D map_1;
	uniform sampler2D map_2;
	uniform sampler2D map_3;
    uniform sampler2D map_4;
    uniform sampler2D map_5;
    uniform sampler2D map_6;
    uniform sampler2D map_7;

#endif

#ifdef USE_ALPHAMAP

	uniform sampler2D alphaMap_0;
    uniform sampler2D alphaMap_1;
    uniform sampler2D alphaMap_2;
    uniform sampler2D alphaMap_3;
    uniform sampler2D alphaMap_4;
    uniform sampler2D alphaMap_5;
    uniform sampler2D alphaMap_6;
    uniform sampler2D alphaMap_7;

#endif


#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>

void main() {

	#include <clipping_planes_fragment>

	vec3 outgoingLight = vec3( 0.0 );

    vec3 c = vec3(1.0, 0.0, 0.0);
    if ( vMaterialIndex == 1 ) {
        c = color_1;
    } else if ( vMaterialIndex == 2 ) {
        c = color_2;
    } else if ( vMaterialIndex == 3 ) {
        c = color_3;
    } else if ( vMaterialIndex == 4 ) {
        c = color_4;
    } else if ( vMaterialIndex == 5 ) {
        c = color_5;
    } else if ( vMaterialIndex == 6 ) {
        c = color_6;
    } else if ( vMaterialIndex == 7 ) {
        c = color_7;
    } else {
        c = color_0;
    }

	vec4 diffuseColor = vec4( c, opacity );

    


	#include <logdepthbuf_fragment>

    #if defined( USE_MAP ) || defined( USE_ALPHAMAP )

        #if defined( USE_POINTS_UV )

            vec2 uv = vUv;

        #else

            vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;

        #endif

    #endif

    #ifdef USE_MAP

        if ( vMaterialIndex == 1 ) {
            diffuseColor *= texture2D( map_1, uv );
        } else if ( vMaterialIndex == 2 ) {
            diffuseColor *= texture2D( map_2, uv );
        } else if ( vMaterialIndex == 3 ) {
            diffuseColor *= texture2D( map_3, uv );
        } else if ( vMaterialIndex == 4 ) {
            diffuseColor *= texture2D( map_4, uv );
        } else if ( vMaterialIndex == 5 ) {
            diffuseColor *= texture2D( map_5, uv );
        } else if ( vMaterialIndex == 6 ) {
            diffuseColor *= texture2D( map_6, uv );
        } else if ( vMaterialIndex == 7 ) {
            diffuseColor *= texture2D( map_7, uv );
        } else {
            diffuseColor *= texture2D( map_0, uv );
        }

    #endif

    #ifdef USE_ALPHAMAP

        if ( vMaterialIndex == 1 ) {
            diffuseColor *= texture2D( alphaMap_1, uv );
        } else if ( vMaterialIndex == 2 ) {
            diffuseColor *= texture2D( alphaMap_2, uv );
        } else if ( vMaterialIndex == 3 ) {
            diffuseColor *= texture2D( alphaMap_3, uv );
        } else if ( vMaterialIndex == 4 ) {
            diffuseColor *= texture2D( alphaMap_4, uv );
        } else if ( vMaterialIndex == 5 ) {
            diffuseColor *= texture2D( alphaMap_5, uv );
        } else if ( vMaterialIndex == 6 ) {
            diffuseColor *= texture2D( alphaMap_6, uv );
        } else if ( vMaterialIndex == 7 ) {
            diffuseColor *= texture2D( alphaMap_7, uv );
        } else {
            diffuseColor *= texture2D( alphaMap_0, uv );
        }

    #endif

	#include <color_fragment>
	#include <alphatest_fragment>

	outgoingLight = diffuseColor.rgb;

	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>

}
`;
//# sourceMappingURL=multi_points.js.map

/***/ }),

/***/ 31349:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.css = void 0;
exports.css = `
.sdv-error-message-container {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    text-align: center;
}

.sdv-error-message {
    font-family: "CircularXXWeb-Book", sans-serif;
    font-size: x-large;
    filter: invert(100);
}

.sdv-anchor-container {
    user-select: none;
    cursor: default;
    pointer-events: none;
    overflow: hidden;
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0%;
    top: 0%;
}

.sdv-anchor-inner-container {
    position: absolute;
    white-space: nowrap;
    text-overflow: clip;
    font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}

.sdv-anchor-text {
    user-select: none;
    cursor: default;
    pointer-events: none;
    display: block;
    text-overflow: clip;
    overflow: hidden;
}

.sdv-anchor-image {
    user-select: none;
    cursor: default;
    pointer-events: none;
}

.sdv-logo-container {
    position: relative;
    height: 100%;
    width: 100%;
}

.sdv-logo {
    position: absolute;
    top: 50%;
    left: 50%;
    max-width: calc(100% - 0.5);
    max-height: calc(100% - 0.5);
    transform: translate(-50%, -50%);
}

.sdv-spinner-container {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    user-select: none;
    cursor: default;
    pointer-events: none;
}

.sdv-spinner {
    position: absolute;
    max-width: calc(100% * 0.15);
    max-height: calc(100% * 0.15);
    mix-blend-mode: difference;
    filter: invert(1) grayscale(100%);
}

.sdv-spinner-top-left {
    left: calc(100% * 0.01);
    top: calc(100% * 0.01);
    float: left;
}

.sdv-spinner-top-right {
    right: calc(100% * 0.01);
    top: calc(100% * 0.01);
    float: right;
}

.sdv-spinner-bottom-left {
    left: calc(100% * 0.01);
    bottom: calc(100% * 0.01);
    float: left;
}

.sdv-spinner-bottom-right {
    right: calc(100% * 0.01);
    bottom: calc(100% * 0.01);
    float: right;
}

.sdv-spinner-center {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
    `;
//# sourceMappingURL=viewport-css.js.map

/***/ }),

/***/ 10566:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.font = void 0;
// @ts-ignore
exports.font = { "glyphs": { "0": { "ha": 946, "x_min": 0, "x_max": 0, "o": "m 478 88 b 740 472 651 88 740 221 l 740 528 b 475 908 740 758 643 908 b 207 525 307 908 207 769 l 207 469 b 478 88 207 218 313 88 m 478 -12 b 83 468 240 -12 83 179 l 83 524 b 475 1006 83 817 232 1006 b 863 526 719 1006 863 810 l 863 471 b 478 -12 863 182 722 -12 " }, "1": { "ha": 554, "x_min": 0, "x_max": 0, "o": "m 268 874 l 46 714 l 46 826 l 276 993 l 389 993 l 389 0 l 268 0 " }, "2": { "ha": 769, "x_min": 0, "x_max": 0, "o": "m 26 28 l 421 443 b 564 731 511 539 564 629 b 386 908 564 842 499 908 b 176 688 271 908 196 843 l 64 688 b 386 1006 79 882 197 1006 b 686 726 569 1006 686 897 b 486 365 686 604 608 485 l 213 99 l 692 99 l 692 0 l 26 0 " }, "3": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 403 -12 b 56 293 192 -12 63 119 l 167 293 b 406 85 178 175 249 85 b 632 276 561 85 632 160 b 422 469 632 404 563 469 l 347 469 l 347 571 l 417 571 b 603 740 546 571 603 632 b 422 907 603 835 543 907 b 203 719 299 907 215 832 l 97 719 b 422 1006 104 876 233 1006 b 721 743 611 1006 721 881 b 564 526 721 631 654 564 b 756 276 681 496 756 414 b 403 -12 756 96 608 -12 " }, "4": { "ha": 857, "x_min": 0, "x_max": 0, "o": "m 551 208 l 54 208 l 54 247 l 508 993 l 669 993 l 669 307 l 807 307 l 807 208 l 669 208 l 669 0 l 551 0 m 551 307 l 551 901 l 207 307 " }, "5": { "ha": 815, "x_min": 0, "x_max": 0, "o": "m 390 -12 b 60 268 176 -12 74 106 l 175 268 b 389 85 194 160 238 85 b 607 325 524 85 607 175 b 399 557 607 465 525 557 b 164 461 283 557 217 521 l 119 461 l 119 993 l 678 993 l 678 889 l 219 889 l 219 586 b 422 654 260 624 328 654 b 731 325 600 654 731 528 b 390 -12 731 115 579 -12 " }, "6": { "ha": 860, "x_min": 0, "x_max": 0, "o": "m 440 -12 b 83 439 169 -12 83 190 l 83 463 b 472 1006 83 819 244 1006 b 763 765 626 1006 736 925 l 647 765 b 464 907 625 857 575 907 b 203 510 314 907 208 772 b 458 644 250 590 343 644 b 783 319 656 644 783 501 b 440 -12 783 121 650 -12 m 440 82 b 660 314 571 82 660 174 b 439 550 660 457 574 550 b 211 331 306 550 211 460 b 440 82 211 168 307 82 " }, "7": { "ha": 729, "x_min": 0, "x_max": 0, "o": "m 549 896 l 44 896 l 44 993 l 699 993 l 699 976 l 326 0 l 203 0 " }, "8": { "ha": 843, "x_min": 0, "x_max": 0, "o": "m 422 -12 b 79 282 260 -12 79 85 b 267 539 79 415 161 501 b 117 747 172 575 117 650 b 422 1006 117 908 269 1006 b 726 750 576 1006 726 906 b 574 540 726 650 665 581 b 764 285 689 499 764 413 b 422 -12 764 86 590 -12 m 422 86 b 640 289 544 86 640 157 b 425 486 640 419 543 486 b 203 286 307 486 203 418 b 422 86 203 156 307 86 m 426 582 b 604 749 532 582 604 643 b 422 911 604 844 525 911 b 239 746 319 911 239 849 b 426 582 239 642 325 582 " }, "9": { "ha": 861, "x_min": 0, "x_max": 0, "o": "m 403 -11 b 83 244 219 -11 110 85 l 200 244 b 406 88 222 147 278 88 b 660 482 564 88 657 218 b 403 350 613 401 517 350 b 76 675 210 350 76 488 b 419 1007 76 874 210 1007 b 776 563 654 1007 776 849 l 776 500 b 403 -11 776 171 640 -11 m 421 444 b 649 660 554 444 649 531 b 419 913 649 822 553 913 b 200 681 289 913 200 821 b 421 444 200 538 286 444 " }, " ": { "ha": 368, "x_min": 0, "x_max": 0, "o": "" }, "!": { "ha": 397, "x_min": 0, "x_max": 0, "o": "m 199 -7 b 110 82 150 -7 110 32 b 199 171 110 132 150 171 b 288 82 247 171 288 132 b 199 -7 288 32 247 -7 m 136 993 l 264 993 l 244 281 l 156 281 " }, "\"": { "ha": 521, "x_min": 0, "x_max": 0, "o": "m 85 993 l 210 993 l 189 653 l 106 653 m 311 993 l 436 993 l 415 653 l 332 653 " }, "#": { "ha": 699, "x_min": 0, "x_max": 0, "o": "m 386 392 l 251 392 l 215 138 l 121 138 l 157 392 l 42 392 l 42 489 l 172 489 l 199 672 l 81 672 l 81 769 l 213 769 l 246 993 l 340 993 l 307 769 l 442 769 l 475 993 l 569 993 l 536 769 l 657 769 l 657 672 l 522 672 l 496 489 l 618 489 l 618 392 l 481 392 l 444 138 l 350 138 m 267 489 l 401 489 l 428 672 l 293 672 " }, "$": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 396 -11 b 63 303 158 6 79 143 l 179 303 b 396 83 193 194 226 99 l 396 469 b 103 736 213 504 103 569 b 396 1004 103 881 222 993 l 396 1129 l 478 1129 l 478 1003 b 767 732 644 988 749 893 l 658 732 b 478 908 638 839 581 894 l 478 561 b 788 281 682 525 788 460 b 478 -11 788 122 658 0 l 478 -187 l 396 -187 m 672 272 b 478 456 672 375 629 424 l 478 83 b 672 272 589 94 672 169 m 213 747 b 396 575 213 660 242 607 l 396 910 b 213 747 279 900 213 833 " }, "%": { "ha": 1089, "x_min": 0, "x_max": 0, "o": "m 275 622 b 397 767 350 622 397 674 b 275 911 397 856 350 911 b 153 765 201 911 153 860 b 275 622 153 671 201 622 m 275 532 b 47 764 157 532 47 629 b 275 1001 47 901 154 1001 b 503 767 399 1001 503 901 b 275 532 503 629 394 532 m 794 993 l 900 993 l 293 0 l 188 0 m 814 79 b 936 224 889 79 936 131 b 814 368 936 313 889 368 b 692 222 740 368 692 317 b 814 79 692 128 740 79 m 814 -11 b 586 221 696 -11 586 86 b 814 458 586 358 693 458 b 1042 224 938 458 1042 358 b 814 -11 1042 86 933 -11 " }, "&": { "ha": 953, "x_min": 0, "x_max": 0, "o": "m 732 203 l 899 0 l 758 0 l 660 119 b 385 -10 597 47 510 -10 b 71 263 203 -10 71 99 b 299 561 71 419 171 499 b 211 771 240 636 211 704 b 454 999 211 921 329 999 b 671 794 576 999 671 914 b 458 538 671 674 585 592 l 667 283 l 788 513 l 894 513 m 389 85 b 600 193 468 85 540 121 l 353 494 b 188 274 256 447 188 390 b 389 85 188 154 264 85 m 322 769 b 408 601 322 719 354 669 b 563 797 519 651 563 701 b 450 908 563 861 517 908 b 322 769 381 908 322 867 " }, "'": { "ha": 294, "x_min": 0, "x_max": 0, "o": "m 85 993 l 210 993 l 189 653 l 106 653 " }, "(": { "ha": 447, "x_min": 0, "x_max": 0, "o": "m 304 -206 b 74 433 176 -56 74 157 b 304 1074 74 710 176 924 l 419 1074 b 194 433 294 918 194 719 b 419 -206 194 147 294 -50 l 304 -206 " }, ")": { "ha": 447, "x_min": 0, "x_max": 0, "o": "m 28 -201 b 253 439 153 -46 253 153 b 28 1078 253 725 153 922 l 143 1078 b 374 439 271 928 374 715 b 143 -201 374 163 271 -51 l 28 -201 " }, "*": { "ha": 586, "x_min": 0, "x_max": 0, "o": "m 114 625 l 229 779 l 58 819 l 89 913 l 253 846 l 243 1032 l 344 1032 l 335 846 l 497 913 l 528 819 l 356 779 l 471 625 l 393 568 l 290 735 l 193 568 " }, "+": { "ha": 721, "x_min": 0, "x_max": 0, "o": "m 310 426 l 50 426 l 50 524 l 310 524 l 310 804 l 411 804 l 411 524 l 671 524 l 671 426 l 411 426 l 411 146 l 310 146 " }, ",": { "ha": 392, "x_min": 0, "x_max": 0, "o": "m 50 -132 l 183 172 l 296 119 l 125 -171 " }, "-": { "ha": 464, "x_min": 0, "x_max": 0, "o": "m 83 436 l 381 436 l 381 328 l 83 328 " }, ".": { "ha": 392, "x_min": 0, "x_max": 0, "o": "m 196 -7 b 107 82 147 -7 107 32 b 196 171 107 132 147 171 b 285 82 244 171 285 132 b 196 -7 285 32 244 -7 " }, "/": { "ha": 560, "x_min": 0, "x_max": 0, "o": "m 413 1078 l 518 1078 l 114 -206 l 8 -206 " }, ":": { "ha": 406, "x_min": 0, "x_max": 0, "o": "m 203 -7 b 114 82 154 -7 114 32 b 203 171 114 132 154 171 b 292 82 251 171 292 132 b 203 -7 292 32 251 -7 m 203 406 b 114 494 154 406 114 444 b 203 583 114 544 154 583 b 292 494 251 583 292 544 b 203 406 292 444 251 406 " }, ";": { "ha": 406, "x_min": 0, "x_max": 0, "o": "m 29 -132 l 163 172 l 275 119 l 104 -171 m 215 406 b 126 494 167 406 126 444 b 215 583 126 544 167 583 b 304 494 264 583 304 544 b 215 406 304 444 264 406 " }, "<": { "ha": 700, "x_min": 0, "x_max": 0, "o": "m 74 433 l 74 461 l 607 763 l 607 651 l 242 447 l 607 243 l 607 132 " }, "=": { "ha": 672, "x_min": 0, "x_max": 0, "o": "m 56 372 l 617 372 l 617 272 l 56 272 m 56 622 l 617 622 l 617 522 l 56 522 " }, ">": { "ha": 700, "x_min": 0, "x_max": 0, "o": "m 93 243 l 458 447 l 93 651 l 93 763 l 626 461 l 626 433 l 93 132 " }, "?": { "ha": 679, "x_min": 0, "x_max": 0, "o": "m 249 350 b 392 600 249 463 322 532 b 493 771 446 654 493 704 b 344 910 493 853 447 910 b 160 729 240 910 169 839 l 51 729 b 346 1006 61 892 176 1006 b 610 775 535 1006 610 892 b 474 543 610 672 540 607 b 351 340 411 483 351 425 l 351 281 l 249 281 m 297 -7 b 208 82 249 -7 208 32 b 297 171 208 132 249 171 b 386 82 346 171 386 132 b 297 -7 386 32 346 -7 " }, "@": { "ha": 1271, "x_min": 0, "x_max": 0, "o": "m 638 -204 b 63 361 267 -204 63 65 b 656 956 63 701 335 956 b 1208 447 988 956 1208 733 b 947 93 1208 186 1058 93 b 788 213 835 93 799 140 b 581 83 747 140 667 83 b 357 325 446 83 357 175 b 631 647 357 511 479 647 b 799 553 729 647 779 600 l 808 636 l 924 636 l 882 286 b 949 176 872 213 896 176 b 1108 444 1028 176 1108 256 b 656 864 1108 693 942 864 b 169 364 375 864 169 658 b 638 -112 169 111 328 -112 b 965 0 789 -112 879 -74 l 1072 0 b 638 -204 1001 -121 838 -204 m 606 172 b 783 399 692 172 783 251 b 639 556 783 504 729 556 b 475 326 551 556 475 472 b 606 172 475 229 531 172 " }, "A": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 " }, "B": { "ha": 864, "x_min": 0, "x_max": 0, "o": "m 125 993 l 424 993 b 743 736 608 993 743 932 l 743 731 b 593 521 743 640 707 560 b 792 283 738 486 792 413 l 792 278 b 465 0 792 90 664 0 l 125 0 m 463 94 b 674 279 607 94 674 158 l 674 285 b 446 465 674 407 606 465 l 243 465 l 243 94 m 424 560 b 625 735 569 560 625 613 l 625 740 b 421 899 625 853 560 899 l 243 899 l 243 560 " }, "C": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 540 -12 b 76 490 253 -12 76 185 l 76 501 b 543 1008 76 796 274 1008 b 946 683 750 1008 925 899 l 826 683 b 544 913 801 835 714 913 b 201 503 339 913 201 753 l 201 492 b 543 86 201 239 329 86 b 843 329 706 86 818 168 l 956 329 b 540 -12 921 100 763 -12 " }, "D": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 382 99 b 765 494 638 99 765 251 l 765 506 b 381 896 765 735 654 896 l 246 896 l 246 99 m 125 993 l 388 993 b 890 506 729 993 890 782 l 890 493 b 385 0 890 218 732 0 l 125 0 " }, "E": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 " }, "F": { "ha": 758, "x_min": 0, "x_max": 0, "o": "m 125 993 l 706 993 l 706 894 l 246 894 l 246 543 l 604 543 l 604 444 l 246 444 l 246 0 l 125 0 " }, "G": { "ha": 1065, "x_min": 0, "x_max": 0, "o": "m 557 -12 b 76 490 251 -12 76 200 l 76 501 b 557 1008 76 792 272 1008 b 961 693 754 1008 931 917 l 840 693 b 560 913 813 851 704 913 b 201 503 332 913 201 746 l 201 492 b 557 85 201 246 324 85 b 869 401 772 85 865 225 l 579 401 l 579 501 l 988 501 l 988 428 b 557 -12 988 140 811 -12 " }, "H": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 543 l 768 543 l 768 993 l 889 993 l 889 0 l 768 0 l 768 442 l 246 442 l 246 0 l 125 0 " }, "I": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 " }, "J": { "ha": 583, "x_min": 0, "x_max": 0, "o": "m 192 -12 b 53 14 117 -12 79 0 l 53 114 b 185 86 89 99 125 86 b 346 275 283 86 346 142 l 346 993 l 467 993 l 467 269 b 192 -12 467 71 343 -12 " }, "K": { "ha": 856, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 515 l 678 994 l 813 994 l 371 511 l 835 0 l 689 0 l 246 485 l 246 0 l 125 0 " }, "L": { "ha": 743, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 99 l 700 99 l 700 0 l 125 0 " }, "M": { "ha": 1189, "x_min": 0, "x_max": 0, "o": "m 125 993 l 293 993 l 600 219 l 897 993 l 1064 993 l 1064 0 l 943 0 l 943 836 l 614 0 l 576 0 l 236 836 l 236 0 l 125 0 " }, "N": { "ha": 1006, "x_min": 0, "x_max": 0, "o": "m 125 993 l 282 993 l 765 172 l 765 993 l 881 993 l 881 0 l 742 0 l 240 851 l 240 0 l 125 0 " }, "O": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 " }, "P": { "ha": 807, "x_min": 0, "x_max": 0, "o": "m 125 993 l 407 993 b 754 703 597 993 754 910 l 754 697 b 407 404 754 486 596 404 l 246 404 l 246 0 l 125 0 m 415 500 b 633 697 557 500 633 569 l 633 703 b 415 896 633 843 550 896 l 246 896 l 246 500 " }, "Q": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 776 32 b 568 -12 715 3 644 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 864 86 1050 325 981 178 l 989 -53 l 915 -124 m 568 88 b 704 113 618 88 664 96 l 593 238 l 667 308 l 793 165 b 925 494 878 238 925 353 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 " }, "R": { "ha": 872, "x_min": 0, "x_max": 0, "o": "m 125 993 l 424 993 b 771 717 614 993 771 915 l 771 711 b 525 440 771 547 661 467 l 829 0 l 694 0 l 399 432 l 246 432 l 246 0 l 125 0 m 432 528 b 650 711 574 528 650 589 l 650 717 b 432 896 650 851 567 896 l 246 896 l 246 528 " }, "S": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 446 -12 b 67 303 181 -12 85 133 l 183 303 b 446 85 199 185 246 85 b 672 272 574 85 672 160 b 432 463 672 385 621 432 b 100 736 224 494 100 560 b 419 1006 100 889 232 1006 b 761 732 618 1006 742 908 l 653 732 b 419 908 629 857 557 908 b 213 747 283 908 213 840 b 451 569 213 650 249 600 b 789 281 672 535 789 468 b 446 -12 789 114 643 -12 " }, "T": { "ha": 779, "x_min": 0, "x_max": 0, "o": "m 329 894 l 40 894 l 40 993 l 739 993 l 739 894 l 450 894 l 450 0 l 329 0 " }, "U": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 " }, "V": { "ha": 908, "x_min": 0, "x_max": 0, "o": "m 42 993 l 161 993 l 457 117 l 753 993 l 867 993 l 524 0 l 379 0 " }, "W": { "ha": 1289, "x_min": 0, "x_max": 0, "o": "m 47 993 l 171 993 l 372 192 l 606 993 l 692 993 l 925 189 l 1129 993 l 1242 993 l 983 0 l 872 0 l 647 785 l 415 0 l 306 0 " }, "X": { "ha": 913, "x_min": 0, "x_max": 0, "o": "m 390 510 l 85 993 l 218 993 l 465 603 l 711 993 l 835 993 l 526 510 l 850 0 l 714 0 l 449 418 l 183 0 l 63 0 " }, "Y": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 364 433 l 32 993 l 168 993 l 428 532 l 678 993 l 799 993 l 485 432 l 485 0 l 364 0 " }, "Z": { "ha": 826, "x_min": 0, "x_max": 0, "o": "m 39 19 l 601 894 l 89 894 l 89 993 l 768 993 l 768 975 l 221 103 l 760 103 l 760 0 l 39 0 " }, "[": { "ha": 494, "x_min": 0, "x_max": 0, "o": "m 122 1078 l 433 1078 l 433 986 l 238 986 l 238 -114 l 433 -114 l 433 -206 l 122 -206 " }, "\\": { "ha": 560, "x_min": 0, "x_max": 0, "o": "m 42 1078 l 147 1078 l 551 -206 l 446 -206 " }, "]": { "ha": 494, "x_min": 0, "x_max": 0, "o": "m 61 -114 l 257 -114 l 257 986 l 61 986 l 61 1078 l 372 1078 l 372 -206 l 61 -206 " }, "^": { "ha": 704, "x_min": 0, "x_max": 0, "o": "m 293 993 l 411 993 l 643 567 l 526 567 l 350 894 l 175 567 l 61 567 " }, "_": { "ha": 547, "x_min": 0, "x_max": 0, "o": "m -1 -128 l 549 -128 l 549 -219 l -1 -219 " }, "`": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 101 1056 l 246 1056 l 332 851 l 246 851 " }, "a": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 " }, "b": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 478 -12 b 232 119 360 -12 274 47 l 232 0 l 117 0 l 117 1074 l 232 1074 l 232 604 b 478 739 274 675 372 739 b 808 374 668 739 808 600 l 808 363 b 478 -12 808 140 678 -12 m 467 83 b 689 357 611 83 689 181 l 689 368 b 465 643 689 551 588 643 b 228 368 331 643 228 554 l 228 357 b 467 83 228 171 325 83 " }, "c": { "ha": 792, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 63 356 215 -12 63 131 l 63 367 b 415 739 63 589 221 739 b 731 485 567 739 708 669 l 617 485 b 415 643 599 600 515 643 b 182 367 283 643 182 538 l 182 356 b 419 83 182 178 279 83 b 628 261 522 83 615 143 l 735 261 b 418 -12 719 104 593 -12 " }, "d": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 390 -12 b 63 349 200 -12 63 122 l 63 360 b 401 739 63 582 201 739 b 639 610 522 739 597 681 l 639 1074 l 754 1074 l 754 0 l 639 0 l 639 125 b 390 -12 597 54 496 -12 m 403 83 b 643 358 538 83 643 172 l 643 369 b 413 643 643 556 554 643 b 182 365 268 643 182 542 l 182 354 b 403 83 182 171 281 83 " }, "e": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 " }, "f": { "ha": 481, "x_min": 0, "x_max": 0, "o": "m 142 629 l 38 629 l 38 726 l 142 726 l 142 844 b 358 1078 142 992 214 1078 b 444 1064 396 1078 415 1074 l 444 967 b 363 982 424 975 394 982 b 257 857 288 982 257 931 l 257 726 l 435 726 l 435 629 l 257 629 l 257 0 l 142 0 " }, "g": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 407 -265 b 78 -42 192 -265 97 -164 l 196 -42 b 406 -168 213 -125 282 -168 b 639 56 549 -168 639 -100 l 639 161 b 393 24 597 90 499 24 b 63 368 203 24 63 168 l 63 378 b 401 739 63 575 201 739 b 639 610 522 739 597 681 l 639 726 l 754 726 l 754 49 b 407 -265 753 -162 610 -265 m 406 119 b 643 376 540 119 643 214 l 643 386 b 413 643 643 549 554 643 b 182 383 268 643 182 536 l 182 372 b 406 119 182 214 283 119 " }, "h": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 1074 l 232 1074 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 " }, "i": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m 175 878 b 99 954 133 878 99 913 b 175 1031 99 996 133 1031 b 251 954 217 1031 251 996 b 175 878 251 913 217 878 " }, "j": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 13 -168 b 119 -56 94 -161 119 -119 l 119 726 l 235 726 l 235 -46 b 13 -265 235 -185 174 -260 m 175 878 b 99 954 133 878 99 913 b 175 1031 99 996 133 1031 b 251 954 217 1031 251 996 b 175 878 251 913 217 878 " }, "k": { "ha": 717, "x_min": 0, "x_max": 0, "o": "m 117 1074 l 232 1074 l 232 392 l 533 726 l 668 726 l 357 389 l 694 0 l 554 0 l 232 376 l 232 0 l 117 0 " }, "l": { "ha": 356, "x_min": 0, "x_max": 0, "o": "m 119 1074 l 236 1074 l 236 0 l 119 0 " }, "m": { "ha": 1264, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 615 b 449 739 265 683 344 739 b 661 603 542 739 624 700 b 910 739 711 697 819 739 b 1154 450 1040 739 1154 661 l 1154 0 l 1039 0 l 1039 458 b 885 639 1039 586 985 639 b 693 444 790 639 693 575 l 693 0 l 578 0 l 578 458 b 424 639 578 586 524 639 b 232 444 329 639 232 575 l 232 0 l 117 0 " }, "n": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 " }, "o": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 " }, "p": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 604 b 478 739 274 675 372 739 b 808 374 668 739 808 600 l 808 363 b 478 -12 808 140 678 -12 b 232 119 358 -12 274 47 l 232 -253 l 117 -253 m 467 83 b 689 357 611 83 689 181 l 689 368 b 465 643 689 551 588 643 b 228 368 331 643 228 554 l 228 357 b 467 83 228 171 325 83 " }, "q": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 639 125 b 390 -12 597 54 496 -12 b 63 349 200 -12 63 122 l 63 360 b 401 739 63 582 201 739 b 639 610 522 739 597 681 l 639 726 l 754 726 l 754 -253 l 639 -253 m 403 83 b 643 358 538 83 643 172 l 643 369 b 413 643 643 556 554 643 b 182 365 268 643 182 542 l 182 354 b 403 83 182 171 281 83 " }, "r": { "ha": 522, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 596 b 471 739 278 678 340 735 l 471 631 b 232 399 325 624 232 578 l 232 0 l 117 0 " }, "s": { "ha": 667, "x_min": 0, "x_max": 0, "o": "m 342 -12 b 57 224 168 -12 64 75 l 169 224 b 340 83 178 138 224 83 b 499 199 450 83 499 121 b 329 321 499 275 442 300 b 76 535 140 356 76 408 b 322 739 76 669 208 739 b 585 529 453 739 565 686 l 474 529 b 321 643 457 608 413 643 b 183 539 238 643 183 601 b 353 424 183 474 219 447 b 608 208 503 396 608 363 b 342 -12 608 76 518 -12 " }, "t": { "ha": 493, "x_min": 0, "x_max": 0, "o": "m 338 -10 b 142 182 206 -10 142 68 l 142 629 l 38 629 l 38 726 l 142 726 l 142 892 l 257 892 l 257 726 l 426 726 l 426 629 l 257 629 l 257 193 b 347 88 257 122 289 88 b 436 103 383 88 411 93 l 436 6 b 338 -10 413 -3 385 -10 " }, "u": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 " }, "v": { "ha": 742, "x_min": 0, "x_max": 0, "o": "m 35 726 l 160 726 l 375 117 l 588 726 l 707 726 l 446 0 l 299 0 " }, "w": { "ha": 1103, "x_min": 0, "x_max": 0, "o": "m 39 726 l 164 726 l 333 142 l 510 726 l 610 726 l 775 142 l 946 726 l 1064 726 l 838 0 l 710 0 l 558 544 l 389 0 l 263 0 " }, "x": { "ha": 733, "x_min": 0, "x_max": 0, "o": "m 299 374 l 56 726 l 190 726 l 368 463 l 544 726 l 669 726 l 429 382 l 694 0 l 558 0 l 363 293 l 163 0 l 39 0 " }, "y": { "ha": 735, "x_min": 0, "x_max": 0, "o": "m 319 75 l 35 726 l 158 726 l 381 206 l 582 726 l 700 726 l 299 -253 l 182 -253 " }, "z": { "ha": 671, "x_min": 0, "x_max": 0, "o": "m 29 17 l 458 629 l 71 629 l 71 726 l 636 726 l 636 706 l 217 101 l 631 101 l 631 0 l 29 0 " }, "{": { "ha": 529, "x_min": 0, "x_max": 0, "o": "m 468 -204 b 193 85 263 -204 156 -125 l 219 229 b 56 396 235 311 197 396 l 56 482 b 219 649 197 482 235 567 l 193 793 b 468 1082 156 1003 263 1082 l 468 994 b 303 790 332 993 278 949 l 329 631 b 193 439 346 526 286 463 b 329 247 286 415 346 351 l 303 88 b 468 -117 278 -71 332 -115 l 468 -204 " }, "|": { "ha": 351, "x_min": 0, "x_max": 0, "o": "m 129 1078 l 222 1078 l 222 -206 l 129 -206 " }, "}": { "ha": 529, "x_min": 0, "x_max": 0, "o": "m 61 -117 b 226 88 197 -115 251 -71 l 200 247 b 336 439 183 351 243 415 b 200 631 243 463 183 526 l 226 790 b 61 994 251 949 197 993 l 61 1082 b 336 793 267 1082 374 1003 l 310 649 b 474 482 294 567 332 482 l 474 396 b 310 229 332 396 294 311 l 336 85 b 61 -204 374 -125 267 -204 " }, "~": { "ha": 618, "x_min": 0, "x_max": 0, "o": "m 61 310 b 208 488 71 431 139 488 b 403 417 300 488 357 417 b 465 490 432 417 461 440 l 557 490 b 414 313 549 367 479 313 b 217 383 318 313 261 383 b 153 310 186 383 160 358 l 61 310 " }, " ": { "ha": 368, "x_min": 0, "x_max": 0, "o": "" }, "¡": { "ha": 400, "x_min": 0, "x_max": 0, "o": "m 154 550 l 243 550 l 263 -162 l 135 -162 m 200 660 b 111 749 151 660 111 699 b 200 838 111 799 151 838 b 289 749 249 838 289 799 b 200 660 289 699 249 660 " }, "¢": { "ha": 785, "x_min": 0, "x_max": 0, "o": "m 371 -10 b 63 356 190 8 63 147 l 63 367 b 371 736 63 572 196 715 l 371 874 l 453 874 l 453 736 b 731 485 589 725 710 653 l 617 485 b 453 640 601 583 535 629 l 453 86 b 628 261 540 99 617 157 l 735 261 b 453 -10 721 115 608 4 l 453 -187 l 371 -187 m 182 356 b 371 86 182 197 256 106 l 371 639 b 182 367 260 618 182 518 l 182 356 " }, "£": { "ha": 828, "x_min": 0, "x_max": 0, "o": "m 67 524 l 157 524 b 132 719 143 582 132 646 b 438 1006 132 889 265 1006 b 735 743 615 1006 722 901 l 618 743 b 438 907 599 849 553 907 b 254 718 331 907 254 832 b 278 524 254 643 265 582 l 574 524 l 574 438 l 297 438 b 318 254 308 382 318 324 b 300 164 318 221 311 190 b 539 89 392 142 479 89 b 665 208 613 89 660 118 l 767 208 b 553 -12 758 81 683 -12 b 244 75 431 -12 324 75 b 154 0 183 75 158 36 l 53 0 b 196 169 58 63 100 151 b 213 256 206 193 213 221 b 181 438 213 317 197 375 l 67 438 " }, "¥": { "ha": 800, "x_min": 0, "x_max": 0, "o": "m 117 471 l 333 471 l 39 993 l 169 993 l 413 543 l 644 993 l 761 993 l 483 471 l 701 471 l 701 390 l 468 390 l 468 282 l 701 282 l 701 201 l 468 201 l 468 0 l 350 0 l 350 201 l 117 201 l 117 282 l 350 282 l 350 390 l 117 390 " }, "¦": { "ha": 361, "x_min": 0, "x_max": 0, "o": "m 129 413 l 222 413 l 222 -206 l 129 -206 m 129 1078 l 222 1078 l 222 510 l 129 510 " }, "§": { "ha": 749, "x_min": 0, "x_max": 0, "o": "m 369 -190 b 108 36 215 -190 111 -108 l 226 36 b 367 -93 233 -43 269 -93 b 508 32 464 -93 508 -37 b 313 181 508 104 474 140 b 58 415 160 219 58 278 b 215 603 58 507 118 575 b 131 779 160 642 131 693 b 378 1006 131 911 250 1006 b 632 788 529 1006 628 928 l 515 788 b 381 908 510 861 478 908 b 242 782 283 908 242 851 b 428 636 242 710 274 675 b 690 397 581 597 690 549 b 538 211 690 318 635 242 b 619 35 590 172 619 118 b 369 -190 619 -90 508 -190 m 453 257 b 576 388 538 278 576 324 b 403 528 576 468 514 499 l 293 557 b 172 425 221 542 172 493 b 349 286 172 351 232 318 l 453 257 " }, "¨": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 147 881 b 74 954 107 881 74 914 b 147 1028 74 994 107 1028 b 221 954 188 1028 221 994 b 147 881 221 914 188 881 m 408 881 b 335 954 368 881 335 914 b 408 1028 335 994 368 1028 b 482 954 449 1028 482 994 b 408 881 482 914 449 881 " }, "©": { "ha": 1172, "x_min": 0, "x_max": 0, "o": "m 588 215 b 321 490 419 215 321 322 l 321 501 b 588 778 321 667 433 778 b 822 586 713 778 811 715 l 717 586 b 588 694 706 657 664 694 b 431 501 492 694 431 624 l 431 492 b 588 300 431 369 488 300 b 728 415 663 300 717 338 l 828 415 b 588 215 814 282 718 215 m 585 46 b 1029 499 821 46 1029 231 b 588 947 1029 763 828 947 b 143 496 344 947 143 761 b 585 46 143 228 353 46 m 585 -12 b 76 496 303 -12 76 208 b 588 1006 76 779 301 1006 b 1096 499 876 1006 1096 781 b 585 -12 1096 210 871 -12 " }, "ª": { "ha": 582, "x_min": 0, "x_max": 0, "o": "m 236 403 b 42 575 129 403 42 456 b 336 757 42 710 179 757 l 417 757 l 417 793 b 299 918 417 879 383 918 b 174 824 222 918 183 885 l 67 824 b 304 1006 78 953 183 1006 b 525 794 425 1006 525 957 l 525 414 l 417 414 l 417 486 b 236 403 376 433 324 403 m 256 488 b 417 618 347 488 417 533 l 417 682 l 339 682 b 151 578 229 682 151 656 b 256 488 151 521 179 488 " }, "«": { "ha": 694, "x_min": 0, "x_max": 0, "o": "m 82 363 l 263 610 l 376 610 l 203 363 l 376 115 l 263 115 m 329 363 l 510 610 l 624 610 l 450 363 l 624 115 l 510 115 " }, "®": { "ha": 714, "x_min": 0, "x_max": 0, "o": "m 251 854 l 358 854 b 475 763 429 854 475 825 l 475 761 b 413 679 475 715 449 690 l 493 550 l 424 550 l 350 668 l 318 668 l 318 550 l 251 550 m 357 714 b 410 758 392 714 410 729 l 410 760 b 357 803 410 792 390 803 l 318 803 l 318 714 m 357 442 b 610 699 500 442 610 547 b 357 956 610 850 504 956 b 104 697 210 956 104 849 b 357 442 104 544 215 442 m 357 392 b 49 697 186 392 49 524 b 357 1006 49 868 185 1006 b 665 699 532 1006 665 869 b 357 392 665 525 529 392 " }, "¯": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 96 989 l 460 989 l 460 900 l 96 900 " }, "°": { "ha": 593, "x_min": 0, "x_max": 0, "o": "m 297 644 b 421 783 371 644 421 706 b 297 925 421 864 371 925 b 168 783 222 925 168 864 b 297 644 168 706 222 644 m 297 564 b 69 783 171 564 69 664 b 297 1006 69 906 171 1006 b 524 783 422 1006 524 906 b 297 564 524 664 422 564 " }, "±": { "ha": 721, "x_min": 0, "x_max": 0, "o": "m 310 454 l 50 454 l 50 551 l 310 551 l 310 804 l 411 804 l 411 551 l 671 551 l 671 454 l 411 454 l 411 201 l 310 201 m 50 97 l 671 97 l 671 0 l 50 0 " }, "²": { "ha": 397, "x_min": 0, "x_max": 0, "o": "m 11 533 l 189 722 b 264 857 235 769 264 813 b 194 926 264 900 239 926 b 111 835 149 926 119 900 l 26 835 b 197 999 32 939 96 999 b 356 858 297 999 356 943 b 264 689 356 796 319 743 l 163 589 l 360 589 l 360 518 l 11 518 " }, "³": { "ha": 432, "x_min": 0, "x_max": 0, "o": "m 211 511 b 29 665 96 511 32 572 l 114 665 b 208 581 119 617 146 581 b 296 656 268 581 296 610 b 213 731 296 706 268 731 l 176 731 l 176 796 l 211 796 b 289 864 264 796 289 821 b 217 929 289 901 265 929 b 131 853 168 929 136 900 l 46 853 b 218 999 51 938 115 999 b 378 871 319 999 378 943 b 299 768 378 818 346 785 b 392 654 354 756 392 717 b 211 511 392 565 322 511 " }, "´": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 310 1056 l 454 1056 l 310 851 l 224 851 " }, "¶": { "ha": 817, "x_min": 0, "x_max": 0, "o": "m 383 481 l 364 481 b 63 732 188 481 63 564 b 364 993 63 908 193 993 l 686 993 l 686 -139 l 590 -139 l 590 914 l 478 914 l 478 -139 l 383 -139 " }, "·": { "ha": 392, "x_min": 0, "x_max": 0, "o": "m 196 365 b 107 454 147 365 107 404 b 196 543 107 504 147 543 b 285 454 244 543 285 504 b 196 365 285 404 244 365 " }, "¸": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 289 -297 b 150 -181 208 -297 156 -250 l 225 -181 b 285 -231 231 -207 250 -231 b 340 -181 319 -231 340 -210 b 290 -133 340 -151 319 -133 b 251 -144 272 -133 258 -140 l 207 -106 l 265 0 l 339 0 l 299 -74 b 429 -186 363 -65 429 -101 b 289 -297 429 -261 364 -297 " }, "¹": { "ha": 321, "x_min": 0, "x_max": 0, "o": "m 146 901 l 33 826 l 33 908 l 157 993 l 240 993 l 240 518 l 146 518 " }, "º": { "ha": 685, "x_min": 0, "x_max": 0, "o": "m 343 492 b 519 700 453 492 519 575 l 519 708 b 343 917 519 835 451 917 b 165 708 233 917 165 835 l 165 700 b 343 492 165 574 232 492 m 342 403 b 51 699 174 403 51 526 l 51 707 b 343 1006 51 885 175 1006 b 633 710 510 1006 633 886 l 633 701 b 342 403 633 522 510 403 " }, "»": { "ha": 694, "x_min": 0, "x_max": 0, "o": "m 244 363 l 71 610 l 185 610 l 365 363 l 185 115 l 71 115 m 492 363 l 318 610 l 432 610 l 613 363 l 432 115 l 318 115 " }, "¼": { "ha": 942, "x_min": 0, "x_max": 0, "o": "m 150 901 l 38 826 l 38 908 l 161 993 l 244 993 l 244 518 l 150 518 m 772 993 l 864 993 l 160 0 l 68 0 m 758 96 l 519 96 l 519 129 l 732 475 l 847 475 l 847 164 l 910 164 l 910 96 l 847 96 l 847 0 l 758 0 m 760 164 l 760 404 l 619 164 " }, "½": { "ha": 940, "x_min": 0, "x_max": 0, "o": "m 150 901 l 38 826 l 38 908 l 161 993 l 244 993 l 244 518 l 150 518 m 754 993 l 846 993 l 142 0 l 50 0 m 549 15 l 726 204 b 801 339 772 251 801 294 b 732 408 801 382 776 408 b 649 317 686 408 657 382 l 564 317 b 735 481 569 421 633 481 b 893 340 835 481 893 425 b 801 171 893 278 857 225 l 700 71 l 897 71 l 897 0 l 549 0 " }, "¾": { "ha": 946, "x_min": 0, "x_max": 0, "o": "m 215 511 b 33 665 100 511 36 572 l 118 665 b 213 581 124 617 150 581 b 300 656 272 581 300 610 b 217 731 300 706 272 731 l 181 731 l 181 796 l 215 796 b 293 864 268 796 293 821 b 221 929 293 901 269 929 b 135 853 172 929 140 900 l 50 853 b 222 999 56 938 119 999 b 382 871 324 999 382 943 b 303 768 382 818 350 785 b 396 654 358 756 396 717 b 215 511 396 565 326 511 m 822 993 l 914 993 l 210 0 l 118 0 m 758 96 l 519 96 l 519 129 l 732 475 l 847 475 l 847 164 l 910 164 l 910 96 l 847 96 l 847 0 l 758 0 m 760 164 l 760 404 l 619 164 " }, "¿": { "ha": 679, "x_min": 0, "x_max": 0, "o": "m 431 481 b 288 231 431 368 357 299 b 186 60 233 176 186 126 b 335 -79 186 -22 232 -79 b 519 101 439 -79 510 -8 l 628 101 b 333 -175 618 -61 503 -175 b 69 56 144 -175 69 -61 b 206 288 69 158 139 224 b 328 490 268 347 328 406 l 328 550 l 431 550 m 382 838 b 471 749 431 838 471 799 b 382 660 471 699 431 660 b 293 749 333 660 293 699 b 382 838 293 799 333 838 " }, "À": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 297 1247 l 442 1247 l 519 1071 l 433 1071 " }, "Á": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 494 1247 l 639 1247 l 503 1071 l 417 1071 " }, "Â": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 417 1247 l 521 1247 l 669 1071 l 585 1071 l 467 1151 l 349 1071 l 267 1071 " }, "Ã": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 543 1075 b 393 1135 483 1075 433 1135 b 338 1072 367 1135 344 1108 l 254 1072 b 394 1233 265 1171 322 1233 b 543 1174 453 1233 503 1174 b 599 1236 569 1174 592 1200 l 682 1236 b 543 1075 671 1138 614 1075 " }, "Ä": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 326 1096 b 253 1169 286 1096 253 1129 b 326 1243 253 1210 286 1243 b 400 1169 367 1243 400 1210 b 326 1096 400 1129 367 1096 m 608 1096 b 535 1169 568 1096 535 1129 b 608 1243 535 1210 568 1243 b 682 1169 649 1243 682 1210 b 608 1096 682 1129 649 1096 " }, "Å": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 468 1054 b 319 1199 386 1054 319 1119 b 468 1343 319 1278 386 1343 b 617 1199 550 1343 617 1278 b 468 1054 617 1119 550 1054 m 468 1118 b 542 1199 511 1118 542 1153 b 468 1279 542 1244 511 1279 b 394 1199 425 1279 394 1244 b 468 1118 394 1153 425 1118 " }, "Æ": { "ha": 1319, "x_min": 0, "x_max": 0, "o": "m 554 993 l 1238 993 l 1238 894 l 779 894 l 779 557 l 1149 557 l 1149 458 l 779 458 l 779 99 l 1263 99 l 1263 0 l 658 0 l 658 288 l 308 288 l 163 0 l 40 0 m 356 382 l 658 382 l 658 894 l 615 894 " }, "Ç": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 529 -297 b 390 -181 449 -297 396 -250 l 465 -181 b 525 -231 471 -207 490 -231 b 581 -181 560 -231 581 -210 b 531 -133 581 -151 560 -133 b 492 -144 513 -133 499 -140 l 447 -106 l 499 -11 b 76 490 236 7 76 199 l 76 501 b 543 1008 76 796 274 1008 b 946 683 750 1008 925 899 l 826 683 b 544 913 801 835 714 913 b 201 503 339 913 201 753 l 201 492 b 543 86 201 239 329 86 b 843 329 706 86 818 168 l 956 329 b 572 -11 922 111 778 -1 l 539 -74 b 669 -186 603 -65 669 -101 b 529 -297 669 -261 604 -297 " }, "È": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 254 1247 l 399 1247 l 476 1071 l 390 1071 " }, "É": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 451 1247 l 596 1247 l 460 1071 l 374 1071 " }, "Ê": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 374 1247 l 478 1247 l 626 1071 l 542 1071 l 424 1151 l 306 1071 l 224 1071 " }, "Ë": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 283 1096 b 210 1169 243 1096 210 1129 b 283 1243 210 1210 243 1243 b 357 1169 324 1243 357 1210 b 283 1096 357 1129 324 1096 m 565 1096 b 492 1169 525 1096 492 1129 b 565 1243 492 1210 525 1243 b 639 1169 606 1243 639 1210 b 565 1096 639 1129 606 1096 " }, "Ì": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 21 1247 l 165 1247 l 243 1071 l 157 1071 " }, "Í": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 218 1247 l 363 1247 l 226 1071 l 140 1071 " }, "Î": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 140 1247 l 244 1247 l 393 1071 l 308 1071 l 190 1151 l 72 1071 l -10 1071 " }, "Ï": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 50 1096 b -24 1169 10 1096 -24 1129 b 50 1243 -24 1210 10 1243 b 124 1169 90 1243 124 1210 b 50 1096 124 1129 90 1096 m 332 1096 b 258 1169 292 1096 258 1129 b 332 1243 258 1210 292 1243 b 406 1169 372 1243 406 1210 b 332 1096 406 1129 372 1096 " }, "Ð": { "ha": 994, "x_min": 0, "x_max": 0, "o": "m 47 544 l 153 544 l 153 993 l 415 993 b 918 506 757 993 918 782 l 918 493 b 413 0 918 218 760 0 l 153 0 l 153 451 l 47 451 m 410 99 b 793 494 665 99 793 251 l 793 506 b 408 896 793 735 682 896 l 274 896 l 274 544 l 561 544 l 561 451 l 274 451 l 274 99 " }, "Ñ": { "ha": 1006, "x_min": 0, "x_max": 0, "o": "m 125 993 l 282 993 l 765 172 l 765 993 l 881 993 l 881 0 l 742 0 l 240 851 l 240 0 l 125 0 m 592 1075 b 442 1135 532 1075 482 1135 b 386 1072 415 1135 393 1108 l 303 1072 b 443 1233 314 1171 371 1233 b 592 1174 501 1233 551 1174 b 647 1236 618 1174 640 1200 l 731 1236 b 592 1075 719 1138 663 1075 " }, "Ò": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 392 1247 l 536 1247 l 614 1071 l 528 1071 " }, "Ó": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 589 1247 l 733 1247 l 597 1071 l 511 1071 " }, "Ô": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 511 1247 l 615 1247 l 764 1071 l 679 1071 l 561 1151 l 443 1071 l 361 1071 " }, "Õ": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 638 1075 b 488 1135 578 1075 528 1135 b 432 1072 461 1135 439 1108 l 349 1072 b 489 1233 360 1171 417 1233 b 638 1174 547 1233 597 1174 b 693 1236 664 1174 686 1200 l 776 1236 b 638 1075 765 1138 708 1075 " }, "Ö": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 421 1096 b 347 1169 381 1096 347 1129 b 421 1243 347 1210 381 1243 b 494 1169 461 1243 494 1210 b 421 1096 494 1129 461 1096 m 703 1096 b 629 1169 663 1096 629 1129 b 703 1243 629 1210 663 1243 b 776 1169 743 1243 776 1210 b 703 1096 776 1129 743 1096 " }, "×": { "ha": 651, "x_min": 0, "x_max": 0, "o": "m 46 249 l 260 463 l 46 676 l 111 743 l 325 528 l 539 743 l 606 676 l 392 463 l 606 249 l 539 182 l 325 397 l 111 182 " }, "Ø": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 49 17 l 185 165 b 76 490 115 253 76 367 l 76 501 b 565 1006 76 783 274 1006 b 863 908 682 1006 783 969 l 975 1031 l 1038 968 l 928 847 b 1050 504 1006 758 1050 638 l 1050 493 b 568 -12 1050 213 857 -12 b 246 101 440 -12 329 31 l 111 -46 m 568 88 b 925 494 789 88 925 254 l 925 506 b 853 767 925 608 900 697 l 319 182 b 568 88 383 119 471 88 m 201 492 b 263 251 201 396 224 315 l 793 832 b 565 908 735 881 658 908 b 201 503 335 908 201 739 l 201 492 " }, "Ù": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 313 1247 l 457 1247 l 535 1071 l 449 1071 " }, "Ú": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 510 1247 l 654 1247 l 518 1071 l 432 1071 " }, "Û": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 432 1247 l 536 1247 l 685 1071 l 600 1071 l 482 1151 l 364 1071 l 282 1071 " }, "Ü": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 342 1096 b 268 1169 301 1096 268 1129 b 342 1243 268 1210 301 1243 b 415 1169 382 1243 415 1210 b 342 1096 415 1129 382 1096 m 624 1096 b 550 1169 583 1096 550 1129 b 624 1243 550 1210 583 1243 b 697 1169 664 1243 697 1210 b 624 1096 697 1129 664 1096 " }, "Ý": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 364 433 l 32 993 l 168 993 l 428 532 l 678 993 l 799 993 l 485 432 l 485 0 l 364 0 m 442 1247 l 586 1247 l 450 1071 l 364 1071 " }, "Þ": { "ha": 807, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 807 l 407 807 b 754 522 597 807 754 729 l 754 517 b 407 229 754 306 596 229 l 246 229 l 246 0 l 125 0 m 415 325 b 633 517 557 325 633 389 l 633 522 b 415 710 633 663 550 710 l 246 710 l 246 325 " }, "ß": { "ha": 819, "x_min": 0, "x_max": 0, "o": "m 465 -12 b 338 10 407 -12 358 1 l 338 108 b 460 83 364 96 407 83 b 640 292 544 83 640 118 l 640 301 b 368 543 640 451 535 549 l 368 642 b 575 824 525 638 575 739 l 575 829 b 406 983 575 928 515 983 b 232 792 300 983 232 908 l 232 0 l 117 0 l 117 786 b 407 1078 117 964 251 1078 b 685 829 572 1078 685 978 l 685 824 b 519 600 685 736 628 636 b 760 303 663 564 760 447 l 760 294 b 465 -12 760 60 615 -12 " }, "à": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 197 1056 l 342 1056 l 428 851 l 342 851 " }, "á": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 411 1056 l 556 1056 l 411 851 l 325 851 " }, "â": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 310 1051 l 414 1051 l 563 851 l 478 851 l 360 956 l 242 851 l 160 851 " }, "ã": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 451 860 b 301 919 392 860 342 919 b 246 857 275 919 253 893 l 163 857 b 303 1018 174 956 231 1018 b 451 958 361 1018 411 958 b 507 1021 478 958 500 985 l 590 1021 b 451 860 579 922 522 860 " }, "ä": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 246 881 b 172 954 206 881 172 914 b 246 1028 172 994 206 1028 b 319 954 286 1028 319 994 b 246 881 319 914 286 881 m 507 881 b 433 954 467 881 433 914 b 507 1028 433 994 467 1028 b 581 954 547 1028 581 994 b 507 881 581 914 547 881 " }, "å": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 376 894 b 450 975 419 894 450 929 b 376 1056 450 1021 419 1056 b 303 975 333 1056 303 1021 b 376 894 303 929 333 894 m 376 831 b 228 975 294 831 228 896 b 376 1119 228 1054 294 1119 b 525 975 458 1119 525 1054 b 376 831 525 896 458 831 " }, "æ": { "ha": 1222, "x_min": 0, "x_max": 0, "o": "m 856 -12 b 582 138 733 -12 638 43 b 299 -12 515 33 432 -12 b 57 201 164 -12 57 53 b 417 431 57 371 231 431 l 525 431 l 525 478 b 369 643 525 593 476 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 603 615 471 739 561 708 b 847 739 658 693 742 739 b 1163 378 1008 739 1163 640 l 1163 343 l 636 343 b 857 83 642 178 714 83 b 1042 210 965 83 1026 125 l 1157 210 b 856 -12 1132 64 1013 -12 m 310 79 b 525 254 432 79 525 142 l 525 343 l 421 343 b 172 201 275 343 172 308 b 310 79 172 126 208 79 m 1044 431 b 847 643 1033 583 963 643 b 640 431 735 643 658 561 " }, "ç": { "ha": 792, "x_min": 0, "x_max": 0, "o": "m 397 -297 b 258 -181 317 -297 264 -250 l 333 -181 b 393 -231 339 -207 358 -231 b 449 -181 428 -231 449 -210 b 399 -133 449 -151 428 -133 b 360 -144 381 -133 367 -140 l 315 -106 l 368 -10 b 63 356 190 11 63 149 l 63 367 b 415 739 63 589 221 739 b 731 485 567 739 708 669 l 617 485 b 415 643 599 600 515 643 b 182 367 283 643 182 538 l 182 356 b 419 83 182 178 279 83 b 628 261 522 83 615 143 l 735 261 b 440 -11 719 111 604 -1 l 407 -74 b 538 -186 471 -65 538 -101 b 397 -297 538 -261 472 -297 " }, "è": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 224 1056 l 368 1056 l 454 851 l 368 851 " }, "é": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 438 1056 l 582 1056 l 438 851 l 351 851 " }, "ê": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 351 1051 l 456 1051 l 604 851 l 519 851 l 401 956 l 283 851 l 201 851 " }, "ë": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 272 881 b 199 954 232 881 199 914 b 272 1028 199 994 232 1028 b 346 954 313 1028 346 994 b 272 881 346 914 313 881 m 533 881 b 460 954 493 881 460 914 b 533 1028 460 994 493 1028 b 607 954 574 1028 607 994 b 533 881 607 914 574 881 " }, "ì": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m -3 1056 l 142 1056 l 228 851 l 142 851 " }, "í": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m 211 1056 l 356 1056 l 211 851 l 125 851 " }, "î": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m 125 1051 l 229 1051 l 378 851 l 293 851 l 175 956 l 57 851 l -25 851 " }, "ï": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 51 881 b -22 954 11 881 -22 914 b 51 1028 -22 994 11 1028 b 125 954 92 1028 125 994 b 51 881 125 914 92 881 m 301 881 b 228 954 261 881 228 914 b 301 1028 228 994 261 1028 b 375 954 342 1028 375 994 b 301 881 375 914 342 881 m 119 726 l 235 726 l 235 0 l 119 0 " }, "ð": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 217 863 l 351 942 b 179 1074 296 990 236 1035 l 328 1074 b 444 997 363 1054 403 1029 l 560 1065 l 600 997 l 507 943 b 776 394 644 815 776 622 l 776 364 b 418 -12 776 144 625 -12 b 63 357 211 -12 63 144 l 63 368 b 393 739 63 586 215 739 b 603 639 489 739 557 696 b 413 888 558 728 490 813 l 257 796 m 419 83 b 657 357 565 83 657 193 l 657 367 b 421 643 657 535 565 643 b 182 368 275 643 182 535 l 182 357 b 419 83 182 192 272 83 " }, "ñ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 m 489 860 b 339 919 429 860 379 919 b 283 857 313 919 290 893 l 200 857 b 340 1018 211 956 268 1018 b 489 958 399 1018 449 958 b 544 1021 515 958 538 985 l 628 1021 b 489 860 617 922 560 860 " }, "ò": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 240 1056 l 385 1056 l 471 851 l 385 851 " }, "ó": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 454 1056 l 599 1056 l 454 851 l 368 851 " }, "ô": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 368 1051 l 472 1051 l 621 851 l 536 851 l 418 956 l 300 851 l 218 851 " }, "õ": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 494 860 b 344 919 435 860 385 919 b 289 857 318 919 296 893 l 206 857 b 346 1018 217 956 274 1018 b 494 958 404 1018 454 958 b 550 1021 521 958 543 985 l 633 1021 b 494 860 622 922 565 860 " }, "ö": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 289 881 b 215 954 249 881 215 914 b 289 1028 215 994 249 1028 b 363 954 329 1028 363 994 b 289 881 363 914 329 881 m 550 881 b 476 954 510 881 476 914 b 550 1028 476 994 510 1028 b 624 954 590 1028 624 994 b 550 881 624 914 590 881 " }, "÷": { "ha": 721, "x_min": 0, "x_max": 0, "o": "m 360 124 b 271 213 311 124 271 163 b 360 301 271 263 311 301 b 449 213 408 301 449 263 b 360 124 449 163 408 124 m 50 524 l 671 524 l 671 426 l 50 426 m 360 649 b 271 738 311 649 271 688 b 360 826 271 788 311 826 b 449 738 408 826 449 788 b 360 649 449 688 408 649 " }, "ø": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 32 1 l 139 119 b 63 357 90 182 63 264 l 63 368 b 419 739 63 586 214 739 b 636 669 503 739 578 714 l 731 772 l 792 719 l 694 613 b 776 369 746 549 776 465 l 776 358 b 418 -12 776 139 625 -12 b 196 63 331 -12 256 15 l 93 -51 m 419 83 b 657 357 565 83 657 193 l 657 367 b 619 529 657 431 643 485 l 264 139 b 419 83 304 103 356 83 m 182 357 b 215 203 182 297 193 246 l 567 592 b 419 643 528 625 478 643 b 182 368 274 643 182 535 l 182 357 " }, "ù": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 233 1056 l 378 1056 l 464 851 l 378 851 " }, "ú": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 447 1056 l 592 1056 l 447 851 l 361 851 " }, "û": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 361 1051 l 465 1051 l 614 851 l 529 851 l 411 956 l 293 851 l 211 851 " }, "ü": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 282 881 b 208 954 242 881 208 914 b 282 1028 208 994 242 1028 b 356 954 322 1028 356 994 b 282 881 356 914 322 881 m 543 881 b 469 954 503 881 469 914 b 543 1028 469 994 503 1028 b 617 954 583 1028 617 994 b 543 881 617 914 583 881 " }, "ý": { "ha": 735, "x_min": 0, "x_max": 0, "o": "m 319 75 l 35 726 l 158 726 l 381 206 l 582 726 l 700 726 l 299 -253 l 182 -253 m 413 1056 l 557 1056 l 413 851 l 326 851 " }, "þ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 117 1074 l 232 1074 l 232 604 b 478 739 274 675 372 739 b 808 374 668 739 808 600 l 808 363 b 478 -12 808 140 678 -12 b 232 119 358 -12 274 47 l 232 -253 l 117 -253 m 467 83 b 689 357 611 83 689 181 l 689 368 b 465 643 689 551 588 643 b 228 368 331 643 228 554 l 228 357 b 467 83 228 171 325 83 " }, "ÿ": { "ha": 735, "x_min": 0, "x_max": 0, "o": "m 319 75 l 35 726 l 158 726 l 381 206 l 582 726 l 700 726 l 299 -253 l 182 -253 m 247 881 b 174 954 207 881 174 914 b 247 1028 174 994 207 1028 b 321 954 288 1028 321 994 b 247 881 321 914 288 881 m 508 881 b 435 954 468 881 435 914 b 508 1028 435 994 468 1028 b 582 954 549 1028 582 994 b 508 881 582 914 549 881 " }, "ı": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 " }, "Ł": { "ha": 771, "x_min": 0, "x_max": 0, "o": "m 58 443 l 153 478 l 153 993 l 274 993 l 274 522 l 550 624 l 550 529 l 274 428 l 274 99 l 728 99 l 728 0 l 153 0 l 153 383 l 58 349 " }, "ł": { "ha": 383, "x_min": 0, "x_max": 0, "o": "m 28 529 l 133 589 l 133 1074 l 250 1074 l 250 656 l 361 719 l 361 622 l 250 558 l 250 0 l 133 0 l 133 492 l 28 432 " }, "Œ": { "ha": 1326, "x_min": 0, "x_max": 0, "o": "m 76 500 b 582 993 76 775 235 993 l 1244 993 l 1244 894 l 808 894 l 808 557 l 1156 557 l 1156 458 l 808 458 l 808 99 l 1269 99 l 1269 0 l 579 0 b 76 488 238 0 76 211 l 76 500 m 585 894 b 201 499 329 894 201 742 l 201 488 b 586 97 201 258 313 97 l 688 97 l 688 894 " }, "œ": { "ha": 1382, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 714 564 556 739 660 672 b 996 739 765 672 864 739 b 1322 378 1164 739 1322 638 l 1322 340 l 775 340 b 1008 83 781 175 860 83 b 1201 210 1121 83 1186 125 l 1317 210 b 1007 -12 1292 64 1171 -12 b 714 161 869 -12 767 51 b 418 -12 658 53 554 -12 m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 1204 433 b 996 643 1193 583 1115 643 b 779 433 878 643 799 563 " }, "Š": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 446 -12 b 67 303 181 -12 85 133 l 183 303 b 446 85 199 185 246 85 b 672 272 574 85 672 160 b 432 463 672 385 621 432 b 100 736 224 494 100 560 b 419 1006 100 889 232 1006 b 761 732 618 1006 742 908 l 653 732 b 419 908 629 857 557 908 b 213 747 283 908 213 840 b 451 569 213 650 249 600 b 789 281 672 535 789 468 b 446 -12 789 114 643 -12 m 218 1247 l 303 1247 l 421 1167 l 539 1247 l 621 1247 l 471 1071 l 367 1071 " }, "š": { "ha": 667, "x_min": 0, "x_max": 0, "o": "m 342 -12 b 57 224 168 -12 64 75 l 169 224 b 340 83 178 138 224 83 b 499 199 450 83 499 121 b 329 321 499 275 442 300 b 76 535 140 356 76 408 b 322 739 76 669 208 739 b 585 529 453 739 565 686 l 474 529 b 321 643 457 608 413 643 b 183 539 238 643 183 601 b 353 424 183 474 219 447 b 608 208 503 396 608 363 b 342 -12 608 76 518 -12 m 129 1051 l 214 1051 l 332 947 l 450 1051 l 532 1051 l 382 851 l 278 851 " }, "Ÿ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 364 433 l 32 993 l 168 993 l 428 532 l 678 993 l 799 993 l 485 432 l 485 0 l 364 0 m 274 1096 b 200 1169 233 1096 200 1129 b 274 1243 200 1210 233 1243 b 347 1169 314 1243 347 1210 b 274 1096 347 1129 314 1096 m 556 1096 b 482 1169 515 1096 482 1129 b 556 1243 482 1210 515 1243 b 629 1169 596 1243 629 1210 b 556 1096 629 1129 596 1096 " }, "Ž": { "ha": 826, "x_min": 0, "x_max": 0, "o": "m 39 19 l 601 894 l 89 894 l 89 993 l 768 993 l 768 975 l 221 103 l 760 103 l 760 0 l 39 0 m 208 1247 l 293 1247 l 411 1167 l 529 1247 l 611 1247 l 461 1071 l 357 1071 " }, "ž": { "ha": 671, "x_min": 0, "x_max": 0, "o": "m 29 17 l 458 629 l 71 629 l 71 726 l 636 726 l 636 706 l 217 101 l 631 101 l 631 0 l 29 0 m 143 1051 l 228 1051 l 346 947 l 464 1051 l 546 1051 l 396 851 l 292 851 " }, "ƒ": { "ha": 551, "x_min": 0, "x_max": 0, "o": "m 40 574 l 175 574 l 207 785 b 442 1006 229 928 307 1006 b 536 990 482 1006 510 1000 l 536 893 b 444 910 515 901 485 910 b 321 779 367 910 332 854 l 289 574 l 472 574 l 472 479 l 275 479 l 164 -253 l 49 -253 l 160 479 l 40 479 " }, "ˆ": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 226 1051 l 331 1051 l 479 851 l 394 851 l 276 956 l 158 851 l 76 851 " }, "ˇ": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 76 1051 l 161 1051 l 279 947 l 397 1051 l 479 1051 l 329 851 l 225 851 " }, "˘": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 275 860 b 92 1043 175 860 97 938 l 183 1043 b 275 954 193 989 219 954 b 375 1043 333 954 364 988 l 464 1043 b 275 860 458 938 375 860 " }, "˙": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 278 878 b 201 954 236 878 201 913 b 278 1031 201 996 236 1031 b 354 954 319 1031 354 996 b 278 878 354 913 319 878 " }, "˚": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 278 894 b 351 975 321 894 351 929 b 278 1056 351 1021 321 1056 b 204 975 235 1056 204 1021 b 278 894 204 929 235 894 m 278 831 b 129 975 196 831 129 896 b 278 1119 129 1054 196 1119 b 426 975 360 1119 426 1054 b 278 831 426 896 360 831 " }, "˛": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 310 -253 b 165 -142 224 -253 165 -211 b 274 0 165 -82 214 -29 l 369 0 b 275 -119 307 -42 275 -76 b 328 -169 275 -153 294 -169 b 400 -154 351 -169 379 -165 l 400 -236 b 310 -253 376 -246 349 -253 " }, "˜": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 353 860 b 203 919 293 860 243 919 b 147 857 176 919 154 893 l 64 857 b 204 1018 75 956 132 1018 b 353 958 263 1018 313 958 b 408 1021 379 958 401 985 l 492 1021 b 353 860 481 922 424 860 " }, "˝": { "ha": 556, "x_min": 0, "x_max": 0, "o": "m 189 1056 l 321 1056 l 217 851 l 133 851 m 403 1056 l 535 1056 l 431 851 l 347 851 " }, "–": { "ha": 731, "x_min": 0, "x_max": 0, "o": "m 63 432 l 668 432 l 668 335 l 63 335 " }, "—": { "ha": 1229, "x_min": 0, "x_max": 0, "o": "m 63 432 l 1167 432 l 1167 335 l 63 335 " }, "‘": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 56 728 l 218 1008 l 289 972 l 165 678 " }, "’": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 65 714 l 189 1008 l 299 958 l 136 678 " }, "‚": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 65 -122 l 189 172 l 299 122 l 136 -158 " }, "“": { "ha": 600, "x_min": 0, "x_max": 0, "o": "m 56 728 l 218 1008 l 289 972 l 165 678 m 301 728 l 464 1008 l 535 972 l 411 678 " }, "”": { "ha": 600, "x_min": 0, "x_max": 0, "o": "m 65 714 l 189 1008 l 299 958 l 136 678 m 311 714 l 435 1008 l 544 958 l 382 678 " }, "„": { "ha": 600, "x_min": 0, "x_max": 0, "o": "m 65 -122 l 189 172 l 299 122 l 136 -158 m 311 -122 l 435 172 l 544 122 l 382 -158 " }, "†": { "ha": 519, "x_min": 0, "x_max": 0, "o": "m 208 721 l 47 721 l 47 814 l 208 814 l 208 993 l 313 993 l 313 814 l 472 814 l 472 721 l 313 721 l 313 296 l 208 296 " }, "‡": { "ha": 519, "x_min": 0, "x_max": 0, "o": "m 208 721 l 47 721 l 47 814 l 208 814 l 208 993 l 313 993 l 313 814 l 472 814 l 472 721 l 313 721 l 313 568 l 472 568 l 472 475 l 313 475 l 313 296 l 208 296 l 208 475 l 47 475 l 47 568 l 208 568 " }, "•": { "ha": 461, "x_min": 0, "x_max": 0, "o": "m 231 264 b 69 425 139 264 69 336 b 231 586 69 514 139 586 b 392 425 324 586 392 514 b 231 264 392 336 324 264 " }, "…": { "ha": 1119, "x_min": 0, "x_max": 0, "o": "m 196 -7 b 107 82 147 -7 107 32 b 196 171 107 132 147 171 b 285 82 244 171 285 132 b 196 -7 285 32 244 -7 m 560 -7 b 471 82 511 -7 471 32 b 560 171 471 132 511 171 b 649 82 608 171 649 132 b 560 -7 649 32 608 -7 m 924 -7 b 835 82 875 -7 835 32 b 924 171 835 132 875 171 b 1013 82 972 171 1013 132 b 924 -7 1013 32 972 -7 " }, "‰": { "ha": 1564, "x_min": 0, "x_max": 0, "o": "m 268 638 b 385 775 339 638 385 689 b 268 913 385 858 339 913 b 151 774 199 913 151 863 b 268 638 151 686 199 638 m 268 549 b 47 772 154 549 47 643 b 268 1001 47 906 151 1001 b 489 775 388 1001 489 906 b 268 549 489 643 383 549 m 782 993 l 888 993 l 281 0 l 175 0 m 785 78 b 901 215 856 78 901 129 b 785 353 901 299 856 353 b 668 214 715 353 668 303 b 785 78 668 126 715 78 m 785 -11 b 564 213 671 -11 564 83 b 785 442 564 346 668 442 b 1006 215 904 442 1006 346 b 785 -11 1006 83 900 -11 m 1296 78 b 1413 215 1367 78 1413 129 b 1296 353 1413 299 1367 353 b 1179 214 1226 353 1179 303 b 1296 78 1179 126 1226 78 m 1296 -11 b 1075 213 1182 -11 1075 83 b 1296 442 1075 346 1179 442 b 1517 215 1415 442 1517 346 b 1296 -11 1517 83 1411 -11 " }, "‹": { "ha": 447, "x_min": 0, "x_max": 0, "o": "m 82 363 l 263 610 l 376 610 l 203 363 l 376 115 l 263 115 " }, "›": { "ha": 447, "x_min": 0, "x_max": 0, "o": "m 244 363 l 71 610 l 185 610 l 365 363 l 185 115 l 71 115 " }, "⁄": { "ha": 157, "x_min": 0, "x_max": 0, "o": "m 385 993 l 476 993 l -228 0 l -319 0 " }, "™": { "ha": 994, "x_min": 0, "x_max": 0, "o": "m 475 993 l 582 993 l 707 679 l 829 993 l 938 993 l 938 546 l 860 546 l 860 894 l 717 546 l 690 546 l 546 894 l 546 546 l 475 546 m 183 932 l 47 932 l 47 993 l 396 993 l 396 932 l 261 932 l 261 546 l 183 546 " }, "−": { "ha": 721, "x_min": 0, "x_max": 0, "o": "m 50 524 l 671 524 l 671 426 l 50 426 " }, "≈": { "ha": 692, "x_min": 0, "x_max": 0, "o": "m 61 231 b 214 396 71 342 138 396 b 481 335 319 396 407 335 b 543 399 510 335 539 354 l 631 399 b 482 233 622 285 554 233 b 213 294 372 233 285 294 b 149 231 182 294 156 274 l 61 231 m 61 476 b 214 642 71 588 138 642 b 481 581 319 642 407 581 b 543 644 510 581 539 600 l 631 644 b 482 479 622 531 554 479 b 213 540 372 479 285 540 b 149 476 182 540 156 519 l 61 476 " }, "≠": { "ha": 672, "x_min": 0, "x_max": 0, "o": "m 56 622 l 354 622 l 410 765 l 515 765 l 460 622 l 617 622 l 617 522 l 421 522 l 364 372 l 617 372 l 617 272 l 325 272 l 269 129 l 164 129 l 219 272 l 56 272 l 56 372 l 258 372 l 315 522 l 56 522 " }, "≤": { "ha": 700, "x_min": 0, "x_max": 0, "o": "m 74 450 l 74 478 l 607 763 l 607 651 l 246 464 l 607 276 l 607 165 m 74 97 l 607 97 l 607 0 l 74 0 " }, "≥": { "ha": 700, "x_min": 0, "x_max": 0, "o": "m 93 276 l 454 464 l 93 651 l 93 763 l 626 478 l 626 450 l 93 165 m 93 97 l 626 97 l 626 0 l 93 0 " }, "Đ": { "ha": 994, "x_min": 0, "x_max": 0, "o": "m 47 544 l 153 544 l 153 993 l 415 993 b 918 506 757 993 918 782 l 918 493 b 413 0 918 218 760 0 l 153 0 l 153 451 l 47 451 m 410 99 b 793 494 665 99 793 251 l 793 506 b 408 896 793 735 682 896 l 274 896 l 274 544 l 561 544 l 561 451 l 274 451 l 274 99 " }, "Ŋ": { "ha": 1006, "x_min": 0, "x_max": 0, "o": "m 606 -268 b 467 -242 531 -268 493 -256 l 467 -142 b 599 -169 503 -157 539 -169 b 763 -1 696 -169 760 -115 l 240 851 l 240 0 l 125 0 l 125 993 l 282 993 l 765 204 l 765 993 l 881 993 l 881 14 b 606 -268 881 -185 757 -268 " }, "Ĳ": { "ha": 913, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 521 -12 b 382 14 446 -12 408 0 l 382 114 b 514 86 418 99 454 86 b 675 275 613 86 675 142 l 675 993 l 796 993 l 796 269 b 521 -12 796 71 672 -12 " }, "đ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 392 939 l 639 939 l 639 1074 l 754 1074 l 754 939 l 858 939 l 858 854 l 754 854 l 754 0 l 639 0 l 639 125 b 390 -12 597 54 496 -12 b 63 349 200 -12 63 122 l 63 360 b 401 739 63 582 201 739 b 639 610 522 739 597 681 l 639 854 l 392 854 m 403 83 b 643 358 538 83 643 172 l 643 369 b 413 643 643 556 554 643 b 182 365 268 643 182 542 l 182 354 b 403 83 182 171 281 83 " }, "ŋ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 499 -168 b 606 -56 581 -161 606 -119 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 l 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 -46 b 499 -265 721 -185 660 -260 " }, "ĳ": { "ha": 708, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m 175 878 b 99 954 133 878 99 913 b 175 1031 99 996 133 1031 b 251 954 217 1031 251 996 b 175 878 251 913 217 878 m 367 -168 b 474 -56 449 -161 474 -119 l 474 726 l 589 726 l 589 -46 b 367 -265 589 -185 528 -260 m 529 878 b 453 954 488 878 453 913 b 529 1031 453 996 488 1031 b 606 954 571 1031 606 996 b 529 878 606 913 571 878 " }, "Ă": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 465 1065 b 282 1249 365 1065 288 1143 l 374 1249 b 465 1160 383 1194 410 1160 b 565 1249 524 1160 554 1193 l 654 1249 b 465 1065 649 1143 565 1065 " }, "Ā": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 283 1181 l 653 1181 l 653 1092 l 283 1092 " }, "Ą": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 813 -253 b 668 -142 726 -253 668 -211 b 768 -4 668 -85 713 -33 l 669 286 l 260 286 l 164 0 l 50 0 l 392 993 l 550 993 l 885 4 b 778 -119 808 -40 778 -76 b 831 -169 778 -153 797 -169 b 903 -154 854 -169 882 -165 l 903 -236 b 813 -253 879 -246 851 -253 m 293 382 l 638 382 l 465 893 " }, "Ǻ": { "ha": 936, "x_min": 0, "x_max": 0, "o": "m 392 993 l 550 993 l 886 0 l 767 0 l 669 286 l 260 286 l 164 0 l 50 0 m 293 382 l 638 382 l 465 893 m 478 1040 b 329 1185 396 1040 329 1106 b 478 1329 329 1264 396 1329 b 626 1185 560 1329 626 1264 b 478 1040 626 1106 560 1040 m 510 1546 l 654 1546 l 518 1369 l 432 1369 m 478 1104 b 551 1185 521 1104 551 1139 b 478 1265 551 1231 521 1265 b 404 1185 435 1265 404 1231 b 478 1104 404 1139 435 1104 " }, "Ǽ": { "ha": 1319, "x_min": 0, "x_max": 0, "o": "m 554 993 l 1238 993 l 1238 894 l 779 894 l 779 557 l 1149 557 l 1149 458 l 779 458 l 779 99 l 1263 99 l 1263 0 l 658 0 l 658 288 l 308 288 l 163 0 l 40 0 m 356 382 l 658 382 l 658 894 l 615 894 m 874 1247 l 1018 1247 l 882 1071 l 796 1071 " }, "Ć": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 540 -12 b 76 490 253 -12 76 185 l 76 501 b 543 1008 76 796 274 1008 b 946 683 750 1008 925 899 l 826 683 b 544 913 801 835 714 913 b 201 503 339 913 201 753 l 201 492 b 543 86 201 239 329 86 b 843 329 706 86 818 168 l 956 329 b 540 -12 921 100 763 -12 m 572 1247 l 717 1247 l 581 1071 l 494 1071 " }, "Č": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 540 -12 b 76 490 253 -12 76 185 l 76 501 b 543 1008 76 796 274 1008 b 946 683 750 1008 925 899 l 826 683 b 544 913 801 835 714 913 b 201 503 339 913 201 753 l 201 492 b 543 86 201 239 329 86 b 843 329 706 86 818 168 l 956 329 b 540 -12 921 100 763 -12 m 344 1247 l 429 1247 l 547 1167 l 665 1247 l 747 1247 l 597 1071 l 493 1071 " }, "Ĉ": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 540 -12 b 76 490 253 -12 76 185 l 76 501 b 543 1008 76 796 274 1008 b 946 683 750 1008 925 899 l 826 683 b 544 913 801 835 714 913 b 201 503 339 913 201 753 l 201 492 b 543 86 201 239 329 86 b 843 329 706 86 818 168 l 956 329 b 540 -12 921 100 763 -12 m 494 1247 l 599 1247 l 747 1071 l 663 1071 l 544 1151 l 426 1071 l 344 1071 " }, "Ċ": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 540 -12 b 76 490 253 -12 76 185 l 76 501 b 543 1008 76 796 274 1008 b 946 683 750 1008 925 899 l 826 683 b 544 913 801 835 714 913 b 201 503 339 913 201 753 l 201 492 b 543 86 201 239 329 86 b 843 329 706 86 818 168 l 956 329 b 540 -12 921 100 763 -12 m 540 1093 b 464 1169 499 1093 464 1128 b 540 1246 464 1211 499 1246 b 617 1169 582 1246 617 1211 b 540 1093 617 1128 582 1093 " }, "Ď": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 382 99 b 765 494 638 99 765 251 l 765 506 b 381 896 765 735 654 896 l 246 896 l 246 99 m 125 993 l 388 993 b 890 506 729 993 890 782 l 890 493 b 385 0 890 218 732 0 l 125 0 m 238 1247 l 322 1247 l 440 1167 l 558 1247 l 640 1247 l 490 1071 l 386 1071 " }, "Ĕ": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 432 1065 b 249 1249 332 1065 254 1143 l 340 1249 b 432 1160 350 1194 376 1160 b 532 1249 490 1160 521 1193 l 621 1249 b 432 1065 615 1143 532 1065 " }, "Ě": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 229 1247 l 314 1247 l 432 1167 l 550 1247 l 632 1247 l 482 1071 l 378 1071 " }, "Ė": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 425 1093 b 349 1169 383 1093 349 1128 b 425 1246 349 1211 383 1246 b 501 1169 467 1246 501 1211 b 425 1093 501 1128 467 1093 " }, "Ē": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 125 0 m 240 1181 l 610 1181 l 610 1092 l 240 1092 " }, "Ę": { "ha": 786, "x_min": 0, "x_max": 0, "o": "m 631 -253 b 486 -142 544 -253 486 -211 b 594 0 486 -82 535 -29 l 125 0 l 125 993 l 704 993 l 704 894 l 246 894 l 246 557 l 615 557 l 615 458 l 246 458 l 246 99 l 729 99 l 729 0 l 690 0 b 596 -119 628 -42 596 -76 b 649 -169 596 -153 615 -169 b 721 -154 672 -169 700 -165 l 721 -236 b 631 -253 697 -246 669 -253 " }, "Ğ": { "ha": 1065, "x_min": 0, "x_max": 0, "o": "m 557 -12 b 76 490 251 -12 76 200 l 76 501 b 557 1008 76 792 272 1008 b 961 693 754 1008 931 917 l 840 693 b 560 913 813 851 704 913 b 201 503 332 913 201 746 l 201 492 b 557 85 201 246 324 85 b 869 401 772 85 865 225 l 579 401 l 579 501 l 988 501 l 988 428 b 557 -12 988 140 811 -12 m 546 1065 b 363 1249 446 1065 368 1143 l 454 1249 b 546 1160 464 1194 490 1160 b 646 1249 604 1160 635 1193 l 735 1249 b 546 1065 729 1143 646 1065 " }, "Ĝ": { "ha": 1065, "x_min": 0, "x_max": 0, "o": "m 557 -12 b 76 490 251 -12 76 200 l 76 501 b 557 1008 76 792 272 1008 b 961 693 754 1008 931 917 l 840 693 b 560 913 813 851 704 913 b 201 503 332 913 201 746 l 201 492 b 557 85 201 246 324 85 b 869 401 772 85 865 225 l 579 401 l 579 501 l 988 501 l 988 428 b 557 -12 988 140 811 -12 m 497 1247 l 601 1247 l 750 1071 l 665 1071 l 547 1151 l 429 1071 l 347 1071 " }, "Ģ": { "ha": 1065, "x_min": 0, "x_max": 0, "o": "m 557 -12 b 76 490 251 -12 76 200 l 76 501 b 557 1008 76 792 272 1008 b 961 693 754 1008 931 917 l 840 693 b 560 913 813 851 704 913 b 201 503 332 913 201 746 l 201 492 b 557 85 201 246 324 85 b 869 401 772 85 865 225 l 579 401 l 579 501 l 988 501 l 988 428 b 557 -12 988 140 811 -12 m 432 -269 l 513 -51 l 624 -85 l 503 -306 " }, "Ġ": { "ha": 1065, "x_min": 0, "x_max": 0, "o": "m 557 -12 b 76 490 251 -12 76 200 l 76 501 b 557 1008 76 792 272 1008 b 961 693 754 1008 931 917 l 840 693 b 560 913 813 851 704 913 b 201 503 332 913 201 746 l 201 492 b 557 85 201 246 324 85 b 869 401 772 85 865 225 l 579 401 l 579 501 l 988 501 l 988 428 b 557 -12 988 140 811 -12 m 549 1093 b 472 1169 507 1093 472 1128 b 549 1246 472 1211 507 1246 b 625 1169 590 1246 625 1211 b 549 1093 625 1128 590 1093 " }, "Ħ": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 28 778 l 125 778 l 125 993 l 246 993 l 246 778 l 768 778 l 768 993 l 889 993 l 889 778 l 986 778 l 986 685 l 889 685 l 889 0 l 768 0 l 768 442 l 246 442 l 246 0 l 125 0 l 125 685 l 28 685 m 768 543 l 768 685 l 246 685 l 246 543 " }, "Ĥ": { "ha": 1014, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 543 l 768 543 l 768 993 l 889 993 l 889 0 l 768 0 l 768 442 l 246 442 l 246 0 l 125 0 m 456 1247 l 560 1247 l 708 1071 l 624 1071 l 506 1151 l 388 1071 l 306 1071 " }, "Ĭ": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 192 1065 b 8 1249 92 1065 14 1143 l 100 1249 b 192 1160 110 1194 136 1160 b 292 1249 250 1160 281 1193 l 381 1249 b 192 1065 375 1143 292 1065 " }, "İ": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 192 1093 b 115 1169 150 1093 115 1128 b 192 1246 115 1211 150 1246 b 268 1169 233 1246 268 1211 b 192 1093 268 1128 233 1093 " }, "Ī": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 7 1181 l 376 1181 l 376 1092 l 7 1092 " }, "Į": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 181 -253 b 36 -142 94 -253 36 -211 b 132 -6 36 -86 78 -36 l 132 993 l 253 993 l 253 6 b 146 -119 178 -37 146 -76 b 199 -169 146 -153 165 -169 b 271 -154 222 -169 250 -165 l 271 -236 b 181 -253 247 -246 219 -253 " }, "Ĩ": { "ha": 385, "x_min": 0, "x_max": 0, "o": "m 132 993 l 253 993 l 253 0 l 132 0 m 269 1075 b 119 1135 210 1075 160 1135 b 64 1072 93 1135 71 1108 l -19 1072 b 121 1233 -8 1171 49 1233 b 269 1174 179 1233 229 1174 b 325 1236 296 1174 318 1200 l 408 1236 b 269 1075 397 1138 340 1075 " }, "Ĵ": { "ha": 583, "x_min": 0, "x_max": 0, "o": "m 192 -12 b 53 14 117 -12 79 0 l 53 114 b 185 86 89 99 125 86 b 346 275 283 86 346 142 l 346 993 l 467 993 l 467 269 b 192 -12 467 71 343 -12 m 351 1247 l 456 1247 l 604 1071 l 519 1071 l 401 1151 l 283 1071 l 201 1071 " }, "Ķ": { "ha": 856, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 515 l 678 994 l 813 994 l 371 511 l 835 0 l 689 0 l 246 485 l 246 0 l 125 0 m 331 -269 l 411 -51 l 522 -85 l 401 -306 " }, "Ĺ": { "ha": 743, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 99 l 700 99 l 700 0 l 125 0 m 214 1247 l 358 1247 l 222 1071 l 136 1071 " }, "Ľ": { "ha": 743, "x_min": 0, "x_max": 0, "o": "m 438 993 l 568 993 l 488 775 l 407 775 m 125 993 l 246 993 l 246 99 l 700 99 l 700 0 l 125 0 " }, "Ļ": { "ha": 743, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 99 l 700 99 l 700 0 l 125 0 m 297 -269 l 378 -51 l 489 -85 l 368 -306 " }, "Ŀ": { "ha": 743, "x_min": 0, "x_max": 0, "o": "m 125 993 l 246 993 l 246 99 l 700 99 l 700 0 l 125 0 m 556 444 b 467 533 507 444 467 483 b 556 622 467 583 507 622 b 644 533 604 622 644 583 b 556 444 644 483 604 444 " }, "Ń": { "ha": 1006, "x_min": 0, "x_max": 0, "o": "m 125 993 l 282 993 l 765 172 l 765 993 l 881 993 l 881 0 l 742 0 l 240 851 l 240 0 l 125 0 m 543 1247 l 688 1247 l 551 1071 l 465 1071 " }, "Ň": { "ha": 1006, "x_min": 0, "x_max": 0, "o": "m 125 993 l 282 993 l 765 172 l 765 993 l 881 993 l 881 0 l 742 0 l 240 851 l 240 0 l 125 0 m 315 1247 l 400 1247 l 518 1167 l 636 1247 l 718 1247 l 568 1071 l 464 1071 " }, "Ņ": { "ha": 1006, "x_min": 0, "x_max": 0, "o": "m 125 993 l 282 993 l 765 172 l 765 993 l 881 993 l 881 0 l 742 0 l 240 851 l 240 0 l 125 0 m 369 -269 l 450 -51 l 561 -85 l 440 -306 " }, "Ŏ": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 560 1065 b 376 1249 460 1065 382 1143 l 468 1249 b 560 1160 478 1194 504 1160 b 660 1249 618 1160 649 1193 l 749 1249 b 560 1065 743 1143 660 1065 " }, "Ő": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 458 1247 l 590 1247 l 490 1071 l 407 1071 m 672 1247 l 804 1247 l 704 1071 l 621 1071 " }, "Ō": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 568 88 b 925 494 789 88 925 254 l 925 506 b 565 908 925 728 794 908 b 201 503 335 908 201 739 l 201 492 b 568 88 201 251 361 88 m 568 -12 b 76 490 275 -12 76 213 l 76 501 b 565 1006 76 783 274 1006 b 1050 504 857 1006 1050 783 l 1050 493 b 568 -12 1050 213 857 -12 m 378 1181 l 747 1181 l 747 1092 l 378 1092 " }, "Ǿ": { "ha": 1126, "x_min": 0, "x_max": 0, "o": "m 49 17 l 185 165 b 76 490 115 253 76 367 l 76 501 b 565 1006 76 783 274 1006 b 863 908 682 1006 783 969 l 975 1031 l 1038 968 l 928 847 b 1050 504 1006 758 1050 638 l 1050 493 b 568 -12 1050 213 857 -12 b 246 101 440 -12 329 31 l 111 -46 m 568 88 b 925 494 789 88 925 254 l 925 506 b 853 767 925 608 900 697 l 319 182 b 568 88 383 119 471 88 m 201 492 b 263 251 201 396 224 315 l 793 832 b 565 908 735 881 658 908 b 201 503 335 908 201 739 l 201 492 m 590 1247 l 735 1247 l 599 1071 l 513 1071 " }, "Ŕ": { "ha": 872, "x_min": 0, "x_max": 0, "o": "m 125 993 l 424 993 b 771 717 614 993 771 915 l 771 711 b 525 440 771 547 661 467 l 829 0 l 694 0 l 399 432 l 246 432 l 246 0 l 125 0 m 432 528 b 650 711 574 528 650 589 l 650 717 b 432 896 650 851 567 896 l 246 896 l 246 528 m 457 1247 l 601 1247 l 465 1071 l 379 1071 " }, "Ř": { "ha": 872, "x_min": 0, "x_max": 0, "o": "m 125 993 l 424 993 b 771 717 614 993 771 915 l 771 711 b 525 440 771 547 661 467 l 829 0 l 694 0 l 399 432 l 246 432 l 246 0 l 125 0 m 432 528 b 650 711 574 528 650 589 l 650 717 b 432 896 650 851 567 896 l 246 896 l 246 528 m 229 1247 l 314 1247 l 432 1167 l 550 1247 l 632 1247 l 482 1071 l 378 1071 " }, "Ŗ": { "ha": 872, "x_min": 0, "x_max": 0, "o": "m 125 993 l 424 993 b 771 717 614 993 771 915 l 771 711 b 525 440 771 547 661 467 l 829 0 l 694 0 l 399 432 l 246 432 l 246 0 l 125 0 m 432 528 b 650 711 574 528 650 589 l 650 717 b 432 896 650 851 567 896 l 246 896 l 246 528 m 314 -269 l 394 -51 l 506 -85 l 385 -306 " }, "Ś": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 446 -12 b 67 303 181 -12 85 133 l 183 303 b 446 85 199 185 246 85 b 672 272 574 85 672 160 b 432 463 672 385 621 432 b 100 736 224 494 100 560 b 419 1006 100 889 232 1006 b 761 732 618 1006 742 908 l 653 732 b 419 908 629 857 557 908 b 213 747 283 908 213 840 b 451 569 213 650 249 600 b 789 281 672 535 789 468 b 446 -12 789 114 643 -12 m 446 1247 l 590 1247 l 454 1071 l 368 1071 " }, "Ş": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 403 -297 b 264 -181 322 -297 269 -250 l 339 -181 b 399 -231 344 -207 364 -231 b 454 -181 433 -231 454 -210 b 404 -133 454 -151 433 -133 b 365 -144 386 -133 372 -140 l 321 -106 l 374 -8 b 67 303 163 15 83 149 l 183 303 b 446 85 199 185 246 85 b 672 272 574 85 672 160 b 432 463 672 385 621 432 b 100 736 224 494 100 560 b 419 1006 100 889 232 1006 b 761 732 618 1006 742 908 l 653 732 b 419 908 629 857 557 908 b 213 747 283 908 213 840 b 451 569 213 650 249 600 b 789 281 672 535 789 468 b 446 -12 789 114 643 -12 l 413 -74 b 543 -186 476 -65 543 -101 b 403 -297 543 -261 478 -297 " }, "Ŝ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 446 -12 b 67 303 181 -12 85 133 l 183 303 b 446 85 199 185 246 85 b 672 272 574 85 672 160 b 432 463 672 385 621 432 b 100 736 224 494 100 560 b 419 1006 100 889 232 1006 b 761 732 618 1006 742 908 l 653 732 b 419 908 629 857 557 908 b 213 747 283 908 213 840 b 451 569 213 650 249 600 b 789 281 672 535 789 468 b 446 -12 789 114 643 -12 m 368 1247 l 472 1247 l 621 1071 l 536 1071 l 418 1151 l 300 1071 l 218 1071 " }, "Ș": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 446 -12 b 67 303 181 -12 85 133 l 183 303 b 446 85 199 185 246 85 b 672 272 574 85 672 160 b 432 463 672 385 621 432 b 100 736 224 494 100 560 b 419 1006 100 889 232 1006 b 761 732 618 1006 742 908 l 653 732 b 419 908 629 857 557 908 b 213 747 283 908 213 840 b 451 569 213 650 249 600 b 789 281 672 535 789 468 b 446 -12 789 114 643 -12 m 303 -269 l 383 -51 l 494 -85 l 374 -306 " }, "Ť": { "ha": 779, "x_min": 0, "x_max": 0, "o": "m 329 894 l 40 894 l 40 993 l 739 993 l 739 894 l 450 894 l 450 0 l 329 0 m 188 1247 l 272 1247 l 390 1167 l 508 1247 l 590 1247 l 440 1071 l 336 1071 " }, "Ţ": { "ha": 779, "x_min": 0, "x_max": 0, "o": "m 329 894 l 40 894 l 40 993 l 739 993 l 739 894 l 450 894 l 450 0 l 329 0 m 272 -269 l 353 -51 l 464 -85 l 343 -306 " }, "Ŧ": { "ha": 779, "x_min": 0, "x_max": 0, "o": "m 128 561 l 329 561 l 329 894 l 40 894 l 40 993 l 739 993 l 739 894 l 450 894 l 450 561 l 651 561 l 651 469 l 450 469 l 450 0 l 329 0 l 329 469 l 128 469 " }, "Ŭ": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 481 1065 b 297 1249 381 1065 303 1143 l 389 1249 b 481 1160 399 1194 425 1160 b 581 1249 539 1160 569 1193 l 669 1249 b 481 1065 664 1143 581 1065 " }, "Ű": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 379 1247 l 511 1247 l 411 1071 l 328 1071 m 593 1247 l 725 1247 l 625 1071 l 542 1071 " }, "Ū": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 299 1181 l 668 1181 l 668 1092 l 299 1092 " }, "Ų": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 533 -253 b 389 -142 447 -253 389 -211 b 475 -12 389 -89 426 -43 l 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 665 25 850 201 785 81 b 499 -119 571 -19 499 -51 b 551 -169 499 -153 518 -169 b 624 -154 575 -169 603 -165 l 624 -236 b 533 -253 600 -246 572 -253 " }, "Ů": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 483 1090 b 557 1171 526 1090 557 1125 b 483 1251 557 1217 526 1251 b 410 1171 440 1251 410 1217 b 483 1090 410 1125 440 1090 m 483 1026 b 335 1171 401 1026 335 1092 b 483 1315 335 1250 401 1315 b 632 1171 565 1315 632 1250 b 483 1026 632 1092 565 1026 " }, "Ũ": { "ha": 967, "x_min": 0, "x_max": 0, "o": "m 474 -12 b 117 363 246 -12 117 121 l 117 993 l 238 993 l 238 376 b 476 88 238 168 311 88 b 729 394 635 88 729 151 l 729 993 l 850 993 l 850 378 b 474 -12 850 136 729 -12 m 558 1075 b 408 1135 499 1075 449 1135 b 353 1072 382 1135 360 1108 l 269 1072 b 410 1233 281 1171 338 1233 b 558 1174 468 1233 518 1174 b 614 1236 585 1174 607 1200 l 697 1236 b 558 1075 686 1138 629 1075 " }, "Ẃ": { "ha": 1289, "x_min": 0, "x_max": 0, "o": "m 47 993 l 171 993 l 372 192 l 606 993 l 692 993 l 925 189 l 1129 993 l 1242 993 l 983 0 l 872 0 l 647 785 l 415 0 l 306 0 m 689 1247 l 833 1247 l 697 1071 l 611 1071 " }, "Ŵ": { "ha": 1289, "x_min": 0, "x_max": 0, "o": "m 47 993 l 171 993 l 372 192 l 606 993 l 692 993 l 925 189 l 1129 993 l 1242 993 l 983 0 l 872 0 l 647 785 l 415 0 l 306 0 m 593 1247 l 697 1247 l 846 1071 l 761 1071 l 643 1151 l 525 1071 l 443 1071 " }, "Ẅ": { "ha": 1289, "x_min": 0, "x_max": 0, "o": "m 47 993 l 171 993 l 372 192 l 606 993 l 692 993 l 925 189 l 1129 993 l 1242 993 l 983 0 l 872 0 l 647 785 l 415 0 l 306 0 m 507 1096 b 433 1169 467 1096 433 1129 b 507 1243 433 1210 467 1243 b 581 1169 547 1243 581 1210 b 507 1096 581 1129 547 1096 m 789 1096 b 715 1169 749 1096 715 1129 b 789 1243 715 1210 749 1243 b 863 1169 829 1243 863 1210 b 789 1096 863 1129 829 1096 " }, "Ẁ": { "ha": 1289, "x_min": 0, "x_max": 0, "o": "m 47 993 l 171 993 l 372 192 l 606 993 l 692 993 l 925 189 l 1129 993 l 1242 993 l 983 0 l 872 0 l 647 785 l 415 0 l 306 0 m 478 1247 l 622 1247 l 700 1071 l 614 1071 " }, "Ŷ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 364 433 l 32 993 l 168 993 l 428 532 l 678 993 l 799 993 l 485 432 l 485 0 l 364 0 m 364 1247 l 468 1247 l 617 1071 l 532 1071 l 414 1151 l 296 1071 l 214 1071 " }, "Ỳ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 364 433 l 32 993 l 168 993 l 428 532 l 678 993 l 799 993 l 485 432 l 485 0 l 364 0 m 258 1247 l 403 1247 l 481 1071 l 394 1071 " }, "Ź": { "ha": 826, "x_min": 0, "x_max": 0, "o": "m 39 19 l 601 894 l 89 894 l 89 993 l 768 993 l 768 975 l 221 103 l 760 103 l 760 0 l 39 0 m 436 1247 l 581 1247 l 444 1071 l 358 1071 " }, "Ż": { "ha": 826, "x_min": 0, "x_max": 0, "o": "m 39 19 l 601 894 l 89 894 l 89 993 l 768 993 l 768 975 l 221 103 l 760 103 l 760 0 l 39 0 m 410 1093 b 333 1169 368 1093 333 1128 b 410 1246 333 1211 368 1246 b 486 1169 451 1246 486 1211 b 410 1093 486 1128 451 1093 " }, "ă": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 374 860 b 190 1043 274 860 196 938 l 282 1043 b 374 954 292 989 318 954 b 474 1043 432 954 463 988 l 563 1043 b 374 860 557 938 474 860 " }, "ā": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 194 989 l 558 989 l 558 900 l 194 900 " }, "ą": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 565 -253 b 421 -142 479 -253 421 -211 b 525 -1 421 -83 467 -32 l 525 92 b 299 -12 471 24 406 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 6 b 531 -119 565 -37 531 -76 b 583 -169 531 -153 550 -169 b 656 -154 607 -169 635 -165 l 656 -236 b 565 -253 632 -246 604 -253 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 " }, "ǻ": { "ha": 750, "x_min": 0, "x_max": 0, "o": "m 299 -12 b 57 201 164 -12 57 53 b 421 426 57 369 235 426 l 525 426 l 525 479 b 369 643 525 594 481 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 640 479 514 739 640 682 l 640 0 l 525 0 l 525 92 b 299 -12 471 24 406 -12 m 310 79 b 525 254 432 79 525 142 l 525 344 l 425 344 b 172 201 279 344 172 308 b 310 79 172 126 208 79 m 379 867 b 453 947 422 867 453 901 b 379 1028 453 993 422 1028 b 306 947 336 1028 306 993 b 379 867 306 901 336 867 m 379 803 b 231 947 297 803 231 868 b 379 1092 231 1026 297 1092 b 528 947 461 1092 528 1026 b 379 803 528 868 461 803 m 421 1328 l 565 1328 l 429 1151 l 343 1151 " }, "ǽ": { "ha": 1222, "x_min": 0, "x_max": 0, "o": "m 856 -12 b 582 138 733 -12 638 43 b 299 -12 515 33 432 -12 b 57 201 164 -12 57 53 b 417 431 57 371 231 431 l 525 431 l 525 478 b 369 643 525 593 476 643 b 203 513 269 643 214 601 l 88 513 b 375 739 103 678 235 739 b 603 615 471 739 561 708 b 847 739 658 693 742 739 b 1163 378 1008 739 1163 640 l 1163 343 l 636 343 b 857 83 642 178 714 83 b 1042 210 965 83 1026 125 l 1157 210 b 856 -12 1132 64 1013 -12 m 310 79 b 525 254 432 79 525 142 l 525 343 l 421 343 b 172 201 275 343 172 308 b 310 79 172 126 208 79 m 1044 431 b 847 643 1033 583 963 643 b 640 431 735 643 658 561 m 651 1056 l 796 1056 l 651 851 l 565 851 " }, "ć": { "ha": 792, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 63 356 215 -12 63 131 l 63 367 b 415 739 63 589 221 739 b 731 485 567 739 708 669 l 617 485 b 415 643 599 600 515 643 b 182 367 283 643 182 538 l 182 356 b 419 83 182 178 279 83 b 628 261 522 83 615 143 l 735 261 b 418 -12 719 104 593 -12 m 449 1056 l 593 1056 l 449 851 l 363 851 " }, "č": { "ha": 792, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 63 356 215 -12 63 131 l 63 367 b 415 739 63 589 221 739 b 731 485 567 739 708 669 l 617 485 b 415 643 599 600 515 643 b 182 367 283 643 182 538 l 182 356 b 419 83 182 178 279 83 b 628 261 522 83 615 143 l 735 261 b 418 -12 719 104 593 -12 m 213 1051 l 297 1051 l 415 947 l 533 1051 l 615 1051 l 465 851 l 361 851 " }, "ĉ": { "ha": 792, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 63 356 215 -12 63 131 l 63 367 b 415 739 63 589 221 739 b 731 485 567 739 708 669 l 617 485 b 415 643 599 600 515 643 b 182 367 283 643 182 538 l 182 356 b 419 83 182 178 279 83 b 628 261 522 83 615 143 l 735 261 b 418 -12 719 104 593 -12 m 363 1051 l 467 1051 l 615 851 l 531 851 l 413 956 l 294 851 l 213 851 " }, "ċ": { "ha": 792, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 63 356 215 -12 63 131 l 63 367 b 415 739 63 589 221 739 b 731 485 567 739 708 669 l 617 485 b 415 643 599 600 515 643 b 182 367 283 643 182 538 l 182 356 b 419 83 182 178 279 83 b 628 261 522 83 615 143 l 735 261 b 418 -12 719 104 593 -12 m 414 878 b 338 954 372 878 338 913 b 414 1031 338 996 372 1031 b 490 954 456 1031 490 996 b 414 878 490 913 456 878 " }, "ď": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 390 -12 b 63 349 200 -12 63 122 l 63 360 b 401 739 63 582 201 739 b 639 610 522 739 597 681 l 639 1074 l 754 1074 l 754 0 l 639 0 l 639 125 b 390 -12 597 54 496 -12 m 403 83 b 643 358 538 83 643 172 l 643 369 b 413 643 643 556 554 643 b 182 365 268 643 182 542 l 182 354 b 403 83 182 171 281 83 m 838 1074 l 968 1074 l 901 831 l 821 831 " }, "ĕ": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 389 860 b 206 1043 289 860 211 938 l 297 1043 b 389 954 307 989 333 954 b 489 1043 447 954 478 988 l 578 1043 b 389 860 572 938 489 860 " }, "ě": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 201 1051 l 286 1051 l 404 947 l 522 1051 l 604 1051 l 454 851 l 350 851 " }, "ė": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 403 878 b 326 954 361 878 326 913 b 403 1031 326 996 361 1031 b 479 954 444 1031 479 996 b 403 878 479 913 444 878 " }, "ē": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 414 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 414 -12 699 64 578 -12 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 m 221 989 l 585 989 l 585 900 l 221 900 " }, "ę": { "ha": 789, "x_min": 0, "x_max": 0, "o": "m 539 -253 b 394 -142 453 -253 394 -211 b 490 -7 394 -86 436 -36 b 414 -12 465 -11 440 -12 b 63 356 208 -12 63 132 l 63 367 b 403 739 63 586 203 739 b 729 378 571 739 729 638 l 729 340 l 182 340 b 415 83 188 175 267 83 b 608 210 528 83 593 125 l 724 210 b 597 15 704 97 633 46 b 504 -119 543 -31 504 -76 b 557 -169 504 -153 524 -169 b 629 -154 581 -169 608 -165 l 629 -236 b 539 -253 606 -246 578 -253 m 611 433 b 403 643 600 583 522 643 b 186 433 285 643 206 563 " }, "ğ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 407 -265 b 78 -42 192 -265 97 -164 l 196 -42 b 406 -168 213 -125 282 -168 b 639 56 549 -168 639 -100 l 639 161 b 393 24 597 90 499 24 b 63 368 203 24 63 168 l 63 378 b 401 739 63 575 201 739 b 639 610 522 739 597 681 l 639 726 l 754 726 l 754 49 b 407 -265 753 -162 610 -265 m 406 119 b 643 376 540 119 643 214 l 643 386 b 413 643 643 549 554 643 b 182 383 268 643 182 536 l 182 372 b 406 119 182 214 283 119 m 406 860 b 222 1043 306 860 228 938 l 314 1043 b 406 954 324 989 350 954 b 506 1043 464 954 494 988 l 594 1043 b 406 860 589 938 506 860 " }, "ĝ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 407 -265 b 78 -42 192 -265 97 -164 l 196 -42 b 406 -168 213 -125 282 -168 b 639 56 549 -168 639 -100 l 639 161 b 393 24 597 90 499 24 b 63 368 203 24 63 168 l 63 378 b 401 739 63 575 201 739 b 639 610 522 739 597 681 l 639 726 l 754 726 l 754 49 b 407 -265 753 -162 610 -265 m 406 119 b 643 376 540 119 643 214 l 643 386 b 413 643 643 549 554 643 b 182 383 268 643 182 536 l 182 372 b 406 119 182 214 283 119 m 357 1051 l 461 1051 l 610 851 l 525 851 l 407 956 l 289 851 l 207 851 " }, "ģ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 407 -265 b 78 -42 192 -265 97 -164 l 196 -42 b 406 -168 213 -125 282 -168 b 639 56 549 -168 639 -100 l 639 161 b 393 24 597 90 499 24 b 63 368 203 24 63 168 l 63 378 b 401 739 63 575 201 739 b 639 610 522 739 597 681 l 639 726 l 754 726 l 754 49 b 407 -265 753 -162 610 -265 m 406 119 b 643 376 540 119 643 214 l 643 386 b 413 643 643 549 554 643 b 182 383 268 643 182 536 l 182 372 b 406 119 182 214 283 119 m 353 869 l 474 1090 l 544 1054 l 464 836 " }, "ġ": { "ha": 871, "x_min": 0, "x_max": 0, "o": "m 407 -265 b 78 -42 192 -265 97 -164 l 196 -42 b 406 -168 213 -125 282 -168 b 639 56 549 -168 639 -100 l 639 161 b 393 24 597 90 499 24 b 63 368 203 24 63 168 l 63 378 b 401 739 63 575 201 739 b 639 610 522 739 597 681 l 639 726 l 754 726 l 754 49 b 407 -265 753 -162 610 -265 m 406 119 b 643 376 540 119 643 214 l 643 386 b 413 643 643 549 554 643 b 182 383 268 643 182 536 l 182 372 b 406 119 182 214 283 119 m 408 878 b 332 954 367 878 332 913 b 408 1031 332 996 367 1031 b 485 954 450 1031 485 996 b 408 878 485 913 450 878 " }, "ħ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 13 939 l 117 939 l 117 1074 l 232 1074 l 232 939 l 479 939 l 479 854 l 232 854 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 l 117 854 l 13 854 " }, "ĥ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 1074 l 232 1074 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 m 383 1317 l 488 1317 l 636 1140 l 551 1140 l 433 1221 l 315 1140 l 233 1140 " }, "ĭ": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m 175 860 b -8 1043 75 860 -3 938 l 83 1043 b 175 954 93 989 119 954 b 275 1043 233 954 264 988 l 364 1043 b 175 860 358 938 275 860 " }, "ī": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 42 989 l 311 989 l 311 900 l 42 900 m 119 726 l 235 726 l 235 0 l 119 0 " }, "į": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 167 -253 b 22 -142 81 -253 22 -211 b 119 -6 22 -85 64 -35 l 119 726 l 235 726 l 235 4 b 132 -119 164 -39 132 -76 b 185 -169 132 -153 151 -169 b 257 -154 208 -169 236 -165 l 257 -236 b 167 -253 233 -246 206 -253 m 175 878 b 99 954 133 878 99 913 b 175 1031 99 996 133 1031 b 251 954 217 1031 251 996 b 175 878 251 913 217 878 " }, "ĩ": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 119 726 l 235 726 l 235 0 l 119 0 m 253 860 b 103 919 193 860 143 919 b 47 857 76 919 54 893 l -36 857 b 104 1018 -25 956 32 1018 b 253 958 163 1018 213 958 b 308 1021 279 958 301 985 l 392 1021 b 253 860 381 922 324 860 " }, "ĵ": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 13 -168 b 119 -56 94 -161 119 -119 l 119 726 l 235 726 l 235 -46 b 13 -265 235 -185 174 -260 m 124 1051 l 228 1051 l 376 851 l 292 851 l 174 956 l 56 851 l -26 851 " }, "ķ": { "ha": 717, "x_min": 0, "x_max": 0, "o": "m 117 1074 l 232 1074 l 232 392 l 533 726 l 668 726 l 357 389 l 694 0 l 554 0 l 232 376 l 232 0 l 117 0 m 258 -269 l 339 -51 l 450 -85 l 329 -306 " }, "ĺ": { "ha": 356, "x_min": 0, "x_max": 0, "o": "m 119 1074 l 236 1074 l 236 0 l 119 0 m 206 1317 l 350 1317 l 214 1140 l 128 1140 " }, "ľ": { "ha": 356, "x_min": 0, "x_max": 0, "o": "m 119 1074 l 236 1074 l 236 0 l 119 0 m 319 1074 l 450 1074 l 383 831 l 303 831 " }, "ļ": { "ha": 356, "x_min": 0, "x_max": 0, "o": "m 119 1074 l 236 1074 l 236 0 l 119 0 m 61 -269 l 142 -51 l 253 -85 l 132 -306 " }, "ŀ": { "ha": 456, "x_min": 0, "x_max": 0, "o": "m 119 1074 l 236 1074 l 236 0 l 119 0 m 403 421 b 314 510 354 421 314 460 b 403 599 314 560 354 599 b 492 510 451 599 492 560 b 403 421 492 460 451 421 " }, "ń": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 m 449 1056 l 593 1056 l 449 851 l 363 851 " }, "ŉ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 m -61 714 l 63 1008 l 172 958 l 10 678 " }, "ň": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 m 213 1051 l 297 1051 l 415 947 l 533 1051 l 615 1051 l 465 851 l 361 851 " }, "ņ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 611 b 465 739 265 679 346 739 b 721 446 615 739 721 657 l 721 0 l 606 0 l 606 454 b 435 639 606 582 551 639 b 232 440 328 639 232 571 l 232 0 l 117 0 m 297 -269 l 378 -51 l 489 -85 l 368 -306 " }, "ŏ": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 417 860 b 233 1043 317 860 239 938 l 325 1043 b 417 954 335 989 361 954 b 517 1043 475 954 506 988 l 606 1043 b 417 860 600 938 517 860 " }, "ő": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 319 1056 l 451 1056 l 347 851 l 264 851 m 533 1056 l 665 1056 l 561 851 l 478 851 " }, "ō": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 419 83 b 657 357 565 83 657 193 l 657 367 b 419 643 657 535 564 643 b 182 368 274 643 182 535 l 182 357 b 419 83 182 192 272 83 m 418 -12 b 63 357 211 -12 63 144 l 63 368 b 419 739 63 586 214 739 b 776 369 625 739 776 588 l 776 358 b 418 -12 776 139 625 -12 m 238 989 l 601 989 l 601 900 l 238 900 " }, "ǿ": { "ha": 839, "x_min": 0, "x_max": 0, "o": "m 32 1 l 139 119 b 63 357 90 182 63 264 l 63 368 b 419 739 63 586 214 739 b 636 669 503 739 578 714 l 731 772 l 792 719 l 694 613 b 776 369 746 549 776 465 l 776 358 b 418 -12 776 139 625 -12 b 196 63 331 -12 256 15 l 93 -51 m 419 83 b 657 357 565 83 657 193 l 657 367 b 619 529 657 431 643 485 l 264 139 b 419 83 304 103 356 83 m 182 357 b 215 203 182 297 193 246 l 567 592 b 419 643 528 625 478 643 b 182 368 274 643 182 535 l 182 357 m 453 1056 l 597 1056 l 453 851 l 367 851 " }, "ŕ": { "ha": 522, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 596 b 471 739 278 678 340 735 l 471 631 b 232 399 325 624 232 578 l 232 0 l 117 0 m 319 1056 l 464 1056 l 319 851 l 233 851 " }, "ř": { "ha": 522, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 596 b 471 739 278 678 340 735 l 471 631 b 232 399 325 624 232 578 l 232 0 l 117 0 m 83 1051 l 168 1051 l 286 947 l 404 1051 l 486 1051 l 336 851 l 232 851 " }, "ŗ": { "ha": 522, "x_min": 0, "x_max": 0, "o": "m 117 726 l 232 726 l 232 596 b 471 739 278 678 340 735 l 471 631 b 232 399 325 624 232 578 l 232 0 l 117 0 m 54 -269 l 135 -51 l 246 -85 l 125 -306 " }, "ś": { "ha": 667, "x_min": 0, "x_max": 0, "o": "m 342 -12 b 57 224 168 -12 64 75 l 169 224 b 340 83 178 138 224 83 b 499 199 450 83 499 121 b 329 321 499 275 442 300 b 76 535 140 356 76 408 b 322 739 76 669 208 739 b 585 529 453 739 565 686 l 474 529 b 321 643 457 608 413 643 b 183 539 238 643 183 601 b 353 424 183 474 219 447 b 608 208 503 396 608 363 b 342 -12 608 76 518 -12 m 365 1056 l 510 1056 l 365 851 l 279 851 " }, "ş": { "ha": 667, "x_min": 0, "x_max": 0, "o": "m 315 -297 b 176 -181 235 -297 182 -250 l 251 -181 b 311 -231 257 -207 276 -231 b 367 -181 346 -231 367 -210 b 317 -133 367 -151 346 -133 b 278 -144 299 -133 285 -140 l 233 -106 l 286 -8 b 57 224 146 7 63 92 l 169 224 b 340 83 178 138 224 83 b 499 199 450 83 499 121 b 329 321 499 275 442 300 b 76 535 140 356 76 408 b 322 739 76 669 208 739 b 585 529 453 739 565 686 l 474 529 b 321 643 457 608 413 643 b 183 539 238 643 183 601 b 353 424 183 474 219 447 b 608 208 503 396 608 363 b 358 -12 608 81 524 -7 l 325 -74 b 456 -186 389 -65 456 -101 b 315 -297 456 -261 390 -297 " }, "ŝ": { "ha": 667, "x_min": 0, "x_max": 0, "o": "m 342 -12 b 57 224 168 -12 64 75 l 169 224 b 340 83 178 138 224 83 b 499 199 450 83 499 121 b 329 321 499 275 442 300 b 76 535 140 356 76 408 b 322 739 76 669 208 739 b 585 529 453 739 565 686 l 474 529 b 321 643 457 608 413 643 b 183 539 238 643 183 601 b 353 424 183 474 219 447 b 608 208 503 396 608 363 b 342 -12 608 76 518 -12 m 279 1051 l 383 1051 l 532 851 l 447 851 l 329 956 l 211 851 l 129 851 " }, "ș": { "ha": 667, "x_min": 0, "x_max": 0, "o": "m 342 -12 b 57 224 168 -12 64 75 l 169 224 b 340 83 178 138 224 83 b 499 199 450 83 499 121 b 329 321 499 275 442 300 b 76 535 140 356 76 408 b 322 739 76 669 208 739 b 585 529 453 739 565 686 l 474 529 b 321 643 457 608 413 643 b 183 539 238 643 183 601 b 353 424 183 474 219 447 b 608 208 503 396 608 363 b 342 -12 608 76 518 -12 m 214 -269 l 294 -51 l 406 -85 l 285 -306 " }, "ŧ": { "ha": 493, "x_min": 0, "x_max": 0, "o": "m 38 471 l 142 471 l 142 629 l 38 629 l 38 726 l 142 726 l 142 892 l 257 892 l 257 726 l 426 726 l 426 629 l 257 629 l 257 471 l 426 471 l 426 389 l 257 389 l 257 193 b 347 88 257 122 289 88 b 436 103 383 88 411 93 l 436 6 b 338 -10 413 -3 385 -10 b 142 182 206 -10 142 68 l 142 389 l 38 389 " }, "ť": { "ha": 493, "x_min": 0, "x_max": 0, "o": "m 338 -10 b 142 182 206 -10 142 68 l 142 629 l 38 629 l 38 726 l 142 726 l 142 892 l 257 892 l 257 726 l 426 726 l 426 629 l 257 629 l 257 193 b 347 88 257 122 289 88 b 436 103 383 88 411 93 l 436 6 b 338 -10 413 -3 385 -10 m 374 1074 l 504 1074 l 438 831 l 357 831 " }, "ţ": { "ha": 493, "x_min": 0, "x_max": 0, "o": "m 338 -10 b 142 182 206 -10 142 68 l 142 629 l 38 629 l 38 726 l 142 726 l 142 892 l 257 892 l 257 726 l 426 726 l 426 629 l 257 629 l 257 193 b 347 88 257 122 289 88 b 436 103 383 88 411 93 l 436 6 b 338 -10 413 -3 385 -10 m 149 -269 l 229 -51 l 340 -85 l 219 -306 " }, "ŭ": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 410 860 b 226 1043 310 860 232 938 l 318 1043 b 410 954 328 989 354 954 b 510 1043 468 954 499 988 l 599 1043 b 410 860 593 938 510 860 " }, "ű": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 313 1056 l 444 1056 l 340 851 l 257 851 m 526 1056 l 658 1056 l 554 851 l 471 851 " }, "ū": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 231 989 l 594 989 l 594 900 l 231 900 " }, "ų": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 638 -253 b 493 -142 551 -253 493 -211 b 593 -4 493 -85 538 -33 l 593 115 b 363 -12 560 47 479 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 7 b 603 -119 633 -40 603 -76 b 656 -169 603 -153 622 -169 b 728 -154 679 -169 707 -165 l 728 -236 b 638 -253 704 -246 676 -253 " }, "ů": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 408 853 b 482 933 451 853 482 888 b 408 1014 482 979 451 1014 b 335 933 365 1014 335 979 b 408 853 335 888 365 853 m 408 789 b 260 933 326 789 260 854 b 408 1078 260 1013 326 1078 b 557 933 490 1078 557 1013 b 408 789 557 854 490 789 " }, "ũ": { "ha": 825, "x_min": 0, "x_max": 0, "o": "m 363 -12 b 110 267 218 -12 110 67 l 110 726 l 225 726 l 225 272 b 393 88 225 144 279 88 b 593 286 496 88 593 156 l 593 726 l 708 726 l 708 0 l 593 0 l 593 115 b 363 -12 560 47 479 -12 m 488 860 b 338 919 428 860 378 919 b 282 857 311 919 289 893 l 199 857 b 339 1018 210 956 267 1018 b 488 958 397 1018 447 958 b 543 1021 514 958 536 985 l 626 1021 b 488 860 615 922 558 860 " }, "ẃ": { "ha": 1103, "x_min": 0, "x_max": 0, "o": "m 39 726 l 164 726 l 333 142 l 510 726 l 610 726 l 775 142 l 946 726 l 1064 726 l 838 0 l 710 0 l 558 544 l 389 0 l 263 0 m 600 1056 l 744 1056 l 600 851 l 514 851 " }, "ŵ": { "ha": 1103, "x_min": 0, "x_max": 0, "o": "m 39 726 l 164 726 l 333 142 l 510 726 l 610 726 l 775 142 l 946 726 l 1064 726 l 838 0 l 710 0 l 558 544 l 389 0 l 263 0 m 500 1051 l 604 1051 l 753 851 l 668 851 l 550 956 l 432 851 l 350 851 " }, "ẅ": { "ha": 1103, "x_min": 0, "x_max": 0, "o": "m 39 726 l 164 726 l 333 142 l 510 726 l 610 726 l 775 142 l 946 726 l 1064 726 l 838 0 l 710 0 l 558 544 l 389 0 l 263 0 m 428 881 b 354 954 388 881 354 914 b 428 1028 354 994 388 1028 b 501 954 468 1028 501 994 b 428 881 501 914 468 881 m 689 881 b 615 954 649 881 615 914 b 689 1028 615 994 649 1028 b 763 954 729 1028 763 994 b 689 881 763 914 729 881 " }, "ẁ": { "ha": 1103, "x_min": 0, "x_max": 0, "o": "m 39 726 l 164 726 l 333 142 l 510 726 l 610 726 l 775 142 l 946 726 l 1064 726 l 838 0 l 710 0 l 558 544 l 389 0 l 263 0 m 385 1056 l 529 1056 l 615 851 l 529 851 " }, "ŷ": { "ha": 735, "x_min": 0, "x_max": 0, "o": "m 319 75 l 35 726 l 158 726 l 381 206 l 582 726 l 700 726 l 299 -253 l 182 -253 m 315 1051 l 419 1051 l 568 851 l 483 851 l 365 956 l 247 851 l 165 851 " }, "ỳ": { "ha": 735, "x_min": 0, "x_max": 0, "o": "m 319 75 l 35 726 l 158 726 l 381 206 l 582 726 l 700 726 l 299 -253 l 182 -253 m 193 1056 l 338 1056 l 424 851 l 338 851 " }, "ź": { "ha": 671, "x_min": 0, "x_max": 0, "o": "m 29 17 l 458 629 l 71 629 l 71 726 l 636 726 l 636 706 l 217 101 l 631 101 l 631 0 l 29 0 m 379 1056 l 524 1056 l 379 851 l 293 851 " }, "ż": { "ha": 671, "x_min": 0, "x_max": 0, "o": "m 29 17 l 458 629 l 71 629 l 71 726 l 636 726 l 636 706 l 217 101 l 631 101 l 631 0 l 29 0 m 344 878 b 268 954 303 878 268 913 b 344 1031 268 996 303 1031 b 421 954 386 1031 421 996 b 344 878 421 913 386 878 " }, "ﬀ": { "ha": 881, "x_min": 0, "x_max": 0, "o": "m 142 629 l 38 629 l 38 726 l 142 726 l 142 835 b 358 1068 142 982 214 1068 b 444 1054 396 1068 415 1064 l 444 957 b 363 972 424 965 394 972 b 257 847 288 972 257 921 l 257 726 l 542 726 l 542 844 b 758 1078 542 992 614 1078 b 844 1064 796 1078 815 1074 l 844 967 b 763 982 824 975 794 982 b 657 857 688 982 657 931 l 657 726 l 835 726 l 835 629 l 657 629 l 657 0 l 542 0 l 542 629 l 257 629 l 257 0 l 142 0 " }, "ﬁ": { "ha": 829, "x_min": 0, "x_max": 0, "o": "m 142 629 l 38 629 l 38 726 l 142 726 l 142 844 b 356 1078 142 992 213 1078 b 435 1067 393 1078 413 1075 l 435 969 b 360 982 414 978 392 982 b 257 857 286 982 257 931 l 257 726 l 435 726 l 435 629 l 257 629 l 257 0 l 142 0 m 594 726 l 710 726 l 710 0 l 594 0 m 650 878 b 574 954 608 878 574 913 b 650 1031 574 996 608 1031 b 726 954 692 1031 726 996 b 650 878 726 913 692 878 " }, "ﬂ": { "ha": 831, "x_min": 0, "x_max": 0, "o": "m 142 629 l 38 629 l 38 726 l 142 726 l 142 844 b 356 1078 142 992 213 1078 b 435 1067 393 1078 413 1075 l 435 969 b 360 982 414 978 392 982 b 257 857 286 982 257 931 l 257 726 l 435 726 l 435 629 l 257 629 l 257 0 l 142 0 m 594 1074 l 711 1074 l 711 0 l 594 0 " }, "⅛": { "ha": 992, "x_min": 0, "x_max": 0, "o": "m 150 901 l 38 826 l 38 908 l 161 993 l 244 993 l 244 518 l 150 518 m 767 993 l 858 993 l 154 0 l 63 0 m 768 -7 b 589 133 672 -7 589 40 b 676 254 589 194 624 236 b 607 353 633 272 607 306 b 769 481 607 433 685 481 b 931 354 856 481 931 433 b 860 256 931 306 903 274 b 949 136 915 235 949 194 b 768 -7 949 43 868 -7 m 769 63 b 856 143 818 63 856 90 b 769 222 856 193 818 222 b 683 142 722 222 683 193 b 769 63 683 90 722 63 m 769 282 b 842 349 813 282 842 307 b 769 414 842 389 810 414 b 696 347 728 414 696 389 b 769 282 696 306 731 282 " }, "⅓": { "ha": 1004, "x_min": 0, "x_max": 0, "o": "m 150 901 l 38 826 l 38 908 l 161 993 l 244 993 l 244 518 l 150 518 m 767 993 l 858 993 l 154 0 l 63 0 m 778 -7 b 596 147 663 -7 599 54 l 681 147 b 775 63 686 99 713 63 b 863 138 835 63 863 92 b 779 213 863 188 835 213 l 743 213 l 743 278 l 778 278 b 856 346 831 278 856 303 b 783 411 856 383 832 411 b 697 335 735 411 703 382 l 613 335 b 785 481 618 419 682 481 b 944 353 886 481 944 425 b 865 250 944 300 913 267 b 958 136 921 238 958 199 b 778 -7 958 47 889 -7 " }, "⅜": { "ha": 1033, "x_min": 0, "x_max": 0, "o": "m 215 511 b 33 665 100 511 36 572 l 118 665 b 213 581 124 617 150 581 b 300 656 272 581 300 610 b 217 731 300 706 272 731 l 181 731 l 181 796 l 215 796 b 293 864 268 796 293 821 b 221 929 293 901 269 929 b 135 853 172 929 140 900 l 50 853 b 222 999 56 938 119 999 b 382 871 324 999 382 943 b 303 768 382 818 350 785 b 396 654 358 756 396 717 b 215 511 396 565 326 511 m 825 993 l 917 993 l 213 0 l 121 0 m 810 -7 b 631 133 714 -7 631 40 b 718 254 631 194 665 236 b 649 353 675 272 649 306 b 811 481 649 433 726 481 b 972 354 897 481 972 433 b 901 256 972 306 944 274 b 990 136 957 235 990 194 b 810 -7 990 43 910 -7 m 811 63 b 897 143 860 63 897 90 b 811 222 897 193 860 222 b 725 142 764 222 725 193 b 811 63 725 90 764 63 m 811 282 b 883 349 854 282 883 307 b 811 414 883 389 851 414 b 738 347 769 414 738 389 b 811 282 738 306 772 282 " }, "⅝": { "ha": 1025, "x_min": 0, "x_max": 0, "o": "m 206 511 b 33 656 93 511 39 572 l 121 656 b 206 583 128 613 144 583 b 286 676 257 583 286 619 b 204 767 286 732 256 767 b 107 726 157 767 128 751 l 57 726 l 63 993 l 354 993 l 354 921 l 133 921 l 132 793 b 236 835 151 815 185 835 b 382 675 322 835 382 775 b 206 511 382 574 310 511 m 815 993 l 907 993 l 203 0 l 111 0 m 801 -7 b 622 133 706 -7 622 40 b 710 254 622 194 657 236 b 640 353 667 272 640 306 b 803 481 640 433 718 481 b 964 354 889 481 964 433 b 893 256 964 306 936 274 b 982 136 949 235 982 194 b 801 -7 982 43 901 -7 m 803 63 b 889 143 851 63 889 90 b 803 222 889 193 851 222 b 717 142 756 222 717 193 b 803 63 717 90 756 63 m 803 282 b 875 349 846 282 875 307 b 803 414 875 389 843 414 b 729 347 761 414 729 389 b 803 282 729 306 764 282 " }, "⅔": { "ha": 1056, "x_min": 0, "x_max": 0, "o": "m 15 533 l 193 722 b 268 857 239 769 268 813 b 199 926 268 900 243 926 b 115 835 153 926 124 900 l 31 835 b 201 999 36 939 100 999 b 360 858 301 999 360 943 b 268 689 360 796 324 743 l 167 589 l 364 589 l 364 518 l 15 518 m 838 993 l 929 993 l 225 0 l 133 0 m 829 -7 b 647 147 714 -7 650 54 l 732 147 b 826 63 738 99 764 63 b 914 138 886 63 914 92 b 831 213 914 188 886 213 l 794 213 l 794 278 l 829 278 b 907 346 882 278 907 303 b 835 411 907 383 883 411 b 749 335 786 411 754 382 l 664 335 b 836 481 669 419 733 481 b 996 353 938 481 996 425 b 917 250 996 300 964 267 b 1010 136 972 238 1010 199 b 829 -7 1010 47 940 -7 " }, "⅞": { "ha": 986, "x_min": 0, "x_max": 0, "o": "m 246 917 l 28 917 l 28 993 l 363 993 l 363 982 l 190 518 l 96 518 m 750 993 l 842 993 l 138 0 l 46 0 m 763 -7 b 583 133 667 -7 583 40 b 671 254 583 194 618 236 b 601 353 628 272 601 306 b 764 481 601 433 679 481 b 925 354 850 481 925 433 b 854 256 925 306 897 274 b 943 136 910 235 943 194 b 763 -7 943 43 863 -7 m 764 63 b 850 143 813 63 850 90 b 764 222 850 193 813 222 b 678 142 717 222 678 193 b 764 63 678 90 717 63 m 764 282 b 836 349 807 282 836 307 b 764 414 836 389 804 414 b 690 347 722 414 690 389 b 764 282 690 306 725 282 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 378 -11 b 44 303 142 4 61 143 l 161 303 b 378 82 175 193 210 96 l 378 469 b 85 738 196 504 85 571 b 378 1004 85 881 206 992 l 378 1129 l 460 1129 l 460 1003 b 749 732 629 988 731 889 l 640 732 b 460 908 619 838 564 894 l 460 561 b 769 279 664 526 769 458 b 460 -11 769 122 644 3 l 460 -187 l 378 -187 m 654 272 b 460 456 654 375 611 425 l 460 82 b 654 272 576 96 654 169 m 194 747 b 378 575 194 660 225 607 l 378 910 b 194 747 258 900 194 832 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 396 -10 b 88 356 215 8 88 147 l 88 367 b 396 736 88 572 221 715 l 396 874 l 478 874 l 478 736 b 756 485 614 725 735 653 l 642 485 b 478 640 626 583 560 631 l 478 86 b 653 261 565 99 642 157 l 760 261 b 478 -10 746 115 633 4 l 478 -187 l 396 -187 m 207 356 b 396 86 207 197 281 106 l 396 639 b 207 367 285 618 207 518 l 207 356 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 21 628 l 106 628 b 449 1006 119 860 242 1006 b 750 706 619 1006 728 897 l 636 706 b 449 911 617 839 558 911 b 226 628 307 911 236 813 l 532 628 l 517 547 l 225 547 l 225 439 l 496 439 l 481 358 l 226 358 b 451 86 236 175 307 86 b 654 308 568 86 632 158 l 767 308 b 451 -12 744 103 625 -12 b 107 358 251 -12 121 119 l 21 358 l 21 439 l 106 439 l 106 547 l 21 547 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 422 88 b 640 410 578 88 640 178 l 640 590 b 419 908 640 803 568 908 b 194 581 269 908 194 806 l 194 407 b 422 88 194 175 276 88 m 422 -12 b 71 406 214 -12 71 128 l 71 579 b 419 1006 71 861 207 1006 b 763 589 635 1006 763 861 l 763 408 b 422 -12 763 131 636 -12 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 436 871 l 151 643 l 151 756 l 431 993 l 557 993 l 557 0 l 436 0 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 58 28 l 453 443 b 596 731 543 539 596 629 b 418 908 596 842 531 908 b 208 688 303 908 228 843 l 96 688 b 418 1006 111 882 229 1006 b 718 726 601 1006 718 897 b 518 365 718 604 640 485 l 244 99 l 724 99 l 724 0 l 58 0 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 400 -12 b 61 293 193 -12 68 119 l 172 293 b 403 85 183 175 246 85 b 626 276 558 85 626 160 b 417 469 626 404 557 469 l 342 469 l 342 571 l 411 571 b 601 740 540 571 601 632 b 424 907 601 835 544 907 b 207 719 300 907 219 832 l 101 719 b 424 1006 108 876 235 1006 b 719 743 613 1006 719 881 b 558 526 719 631 651 564 b 750 276 675 496 750 414 b 400 -12 750 96 606 -12 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 540 208 l 57 208 l 57 247 l 497 993 l 658 993 l 658 307 l 775 307 l 775 208 l 658 208 l 658 0 l 540 0 m 540 307 l 540 894 l 207 307 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 400 -12 b 69 268 186 -12 83 106 l 185 268 b 399 85 204 160 247 85 b 617 325 533 85 617 175 b 408 557 617 465 535 557 b 174 461 293 557 226 521 l 129 461 l 129 993 l 688 993 l 688 889 l 229 889 l 229 586 b 432 654 269 624 338 654 b 740 325 610 654 740 528 b 400 -12 740 115 589 -12 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 428 -12 b 71 439 157 -12 71 190 l 71 463 b 460 1006 71 819 232 1006 b 750 765 614 1006 724 925 l 635 765 b 451 907 613 857 563 907 b 190 510 301 907 196 772 b 446 644 238 590 331 644 b 771 319 643 644 771 501 b 428 -12 771 121 638 -12 m 428 82 b 647 314 558 82 647 174 b 426 550 647 457 561 550 b 199 331 293 550 199 460 b 428 82 199 168 294 82 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 596 896 l 97 896 l 97 993 l 751 993 l 751 976 l 354 0 l 231 0 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 418 -12 b 75 282 256 -12 75 85 b 263 539 75 415 157 501 b 113 747 168 575 113 650 b 418 1006 113 908 265 1006 b 722 750 572 1006 722 906 b 569 540 722 650 661 581 b 760 285 685 499 760 413 b 418 -12 760 86 586 -12 m 418 86 b 636 289 540 86 636 157 b 421 486 636 419 539 486 b 199 286 303 486 199 418 b 418 86 199 156 303 86 m 422 582 b 600 749 528 582 600 643 b 418 911 600 844 521 911 b 235 746 315 911 235 849 b 422 582 235 642 321 582 " }, "": { "ha": 833, "x_min": 0, "x_max": 0, "o": "m 389 -11 b 69 244 206 -11 96 85 l 186 244 b 392 88 208 147 264 88 b 646 482 550 88 643 218 b 389 350 599 401 503 350 b 63 675 196 350 63 488 b 406 1007 63 874 196 1007 b 763 563 640 1007 763 849 l 763 500 b 389 -11 763 171 626 -11 m 407 444 b 635 660 540 444 635 531 b 406 913 635 822 539 913 b 186 681 275 913 186 821 b 407 444 186 538 272 444 " }, "": { "ha": 854, "x_min": 0, "x_max": 0, "o": "m 383 -12 b 63 349 210 -12 63 122 l 63 360 b 394 739 63 582 211 739 b 622 613 507 739 581 683 l 622 726 l 738 726 l 738 0 l 622 0 l 622 122 b 383 -12 581 51 481 -12 m 396 83 b 626 358 519 83 626 172 l 626 369 b 406 643 626 556 536 643 b 182 365 272 643 182 542 l 182 354 b 396 83 182 171 282 83 " }, "": { "ha": 469, "x_min": 0, "x_max": 0, "o": "m 151 629 l 38 629 l 38 726 l 151 726 l 151 892 l 267 892 l 267 726 l 426 726 l 426 629 l 267 629 l 267 0 l 151 0 " }, "ȷ": { "ha": 354, "x_min": 0, "x_max": 0, "o": "m 13 -168 b 119 -56 94 -161 119 -119 l 119 726 l 235 726 l 235 -46 b 13 -265 235 -185 174 -260 " }, " ": { "ha": 153, "x_min": 0, "x_max": 0, "o": "" }, "′": { "ha": 294, "x_min": 0, "x_max": 0, "o": "m 99 993 l 224 993 l 147 653 l 64 653 " }, "″": { "ha": 521, "x_min": 0, "x_max": 0, "o": "m 99 993 l 224 993 l 147 653 l 64 653 m 325 993 l 450 993 l 374 653 l 290 653 " }, "Ⓟ": { "ha": 1172, "x_min": 0, "x_max": 0, "o": "m 422 774 l 600 774 b 804 604 725 774 804 719 l 804 600 b 604 432 804 483 722 432 l 528 432 l 528 225 l 422 225 m 600 508 b 703 600 667 508 703 540 l 703 604 b 600 692 703 667 665 692 l 528 692 l 528 508 m 585 46 b 1029 499 821 46 1029 231 b 588 947 1029 763 828 947 b 143 496 344 947 143 761 b 585 46 143 228 353 46 m 585 -12 b 76 496 303 -12 76 208 b 588 1006 76 779 301 1006 b 1096 499 876 1006 1096 781 b 585 -12 1096 210 871 -12 " } }, "familyName": "Graphik Regular", "ascender": 1136, "descender": -253, "underlinePosition": -75, "underlineThickness": 50, "boundingBox": { "yMin": -220, "xMin": -230, "yMax": 1113, "xMax": 1092 }, "resolution": 1000, "original_font_information": { "format": 0, "copyright": "©2009 Commercial Type.", "fontFamily": "Graphik Regular", "fontSubfamily": "Regular", "uniqueID": "1.000;COM ;Graphik-Regular", "fullName": "Graphik Regular Regular", "version": "Version 1.000;PS 001.000;hotconv 1.0.72;makeotf.lib2.5.5900", "postScriptName": "Graphik-Regular", "trademark": "Graphik is a trademark of Commercial Type/Schwartzco Inc.", "manufacturer": "Commercial Type", "designer": "Christian Schwartz", "manufacturerURL": "http://commercialtype.com", "designerURL": "http://christianschwartz.com", "licence": "Commercial Type Font Software End User License Agreement\r\rPLEASE READ THIS DOCUMENT CAREFULLY and we recommend that you keep a copy for further reference. \r\rThis End User License Agreement (the \"Agreement\" \"EULA,\" \"License,\" \"Agreement\" or \"License Agreement\") is a legal agreement between you and Schwartzco, Inc., d/b/a Commercial Type, a/d/b/a St. Bride Type Foundry (collectively, \"Commercial Type\") and becomes a binding contract between you and Schwartzco. This Agreement governs the terms of use the Font Software and the design of the Fonts embodied therein (collectively, \"Font Software\"), together with any media, printed materials, electronic documentation, updates, add-ons, artwork, web services and any other material that may be associated with the product now or in the future. This Agreement becomes effective (a) when you \"ACCEPT LICENSE AGREEMENT,\" or (b) if you are acquire and accept the Font Software on a Compact Disc or Digital Video Disk (CD, DVD), or (c) when you open the compressed electronic file in which the Font Software is contained. If you do not wish to enter into this Agreement, do not purchase, access, download and/or install or otherwise use the Font Software.\r\r1. Upon payment in full, Commercial Type will grant you a non-exclusive terminable License to the Font Software that accompanies this EULA. Use of the Font Software is limited to Personal or Internal Business Use only. For the purposes of this Agreement, \"Font Software\" shall be defined as the design of the Fonts together with the Font Software which, when used generates the typeface, typographic designs and, if applicable, ornaments or other designs. Personal or Internal Business Use shall mean Use of the Font Software for your customary personal or internal business purposes and, except as may otherwise permitted herein, shall not mean or include the commercial distribution or use of Font Software, the design of the fonts or artwork embodied therein or any component thereof for any commercial use or in any Commercial Product for sale whatsoever. For the purposes of this Agreement, prohibited commercial uses include, by way of example not limitation, T-shirts, third-party software, electronic devices, mugs, animation, etc. and as may be further noted below. If you are unsure whether your use is not permitted, contact Commercial Type. Your failure to contact to seek permission or the lack of a specific prohibition in this Agreement shall not be interpreted or deemed a waiver or permissible use of any kind. You hereby agree that the Font Software shall further comprise all bitmap representations of typeface and typographic designs and ornaments created by or derived from the Font Software. The Font Software shall be deemed to include any upgrades, updates, related files, permitted modifications, if any, permitted copies, and related documentation.\r\r2. If you are a design consultancy, advertising agency or purchasing this license for use by or on behalf of such an entity, the ultimate end user should also purchase a license appropriate for their intended use of the Font Software, if their use of the Font Software is likely to involve uses not permitted under this Agreement. The license granted herein for personal use does not extend to uses by temporary employees or independent contractors using the Font Software as their use may relate to providing professional services or for other professional uses. Under such circumstances an employer and/or the ultimate end user are also required to purchase a license appropriate for their usage.\r\r3. For the purposes of this Agreement, \"Commercial Product\" shall also mean, among other things, a user editable electronic document created by Use of the Font Software which is offered for distribution to the general public (or to some subset of the general public), in Flash type software distributed or exhibited, in gaming products or software where the extraction of the Font Software or the designs embodied therein may be extracted; or use on goods for sale as a commercial product in exchange for a separate fee or other consideration. However, a document distributed in connection with a commercial transaction in which the consideration is unrelated to such a document (for example, printed advertising, a business letter or a receipt for purchase of tangible goods such as clothing), or as other design materials distributed incidental to the purchase of goods or services, shall not be considered a Commercial Product.\r\r4. a) Except as may be prohibited herein, you are permitted to electronically distribute a “Personal or Internal Business Use” document (that is, a document other than a Commercial Product as defined above) (i) that is in a static graphic image (for example, a “gif”) or in an embedded electronic document, and (ii) which is distributed in a format that permits only the viewing and printing (and not the editing, altering, enhancing, or modifying) of such static graphic image or embedded document. Personal or Internal Business Use shall not include any Use of the Font Software by persons that are not members of your immediate household, your authorized employees, or your authorized agents. All such household members, employees and agents shall be notified by you as to the terms and conditions of the Agreement and shall agree to be bound by it prior to use of the Font Software.\rb) Use of the Font Software in sIFR (Scalable Inman Font Replacement) is permitted. However, the use of Cufón or @font-face or other forms of web embedding or web font replacement technologies, (“Font Replacement Technologies”) other than pdf as otherwise expressly permitted herein, each require the purchase of a license upgrade.\r\r5. Commercial Type, its successors and assigns, expressly retain all right and title in and to the Font Software together with the design of the Font embodied therein together with any trademarks used in connection therewith. Except as may be otherwise expressly permitted herein, you agree not to copy the Font Software or create derivative works based upon the design of the Font or the Font Software. You hereby agree that the design of the Font and the Font Software are the exclusive property of Commercial Type and that the unauthorized use of the design of the Font or the Font Software is an infringement of Commercial Type's exclusive rights and causing significant monetary harm. All rights not expressly granted herein are reserved to Commercial Type. Commercial Type's rights and remedies in the event of an infringement shall be cumulative in nature. \r\r6. Except as is prohibited herein, you may install and Use the Font Software on a single file server for Use on a single local area network (\"LAN\") only when the Use of such Font Software is expressly for and limited to the number of total users disclosed and licensed under this Agreement, i.e., the total number of users who could use the Font Software, not the total number of users who might have access to the Font Software at any one time.\r\r7. Except as may be otherwise expressly permitted herein, you may not alter or copy the Font Software or the designs embodied therein in any manner whatsoever. Reformatting the Font Software into other formats for use in other operating systems is expressly prohibited. Upon payment of an additional fee and a separate written agreement Commercial Type may, if so agreed, provide the Font Software in alternate and/or additional font formats, contact Commercial Type for a quotation. Altering or amending the embedding bits characteristics of the Font Software is expressly prohibited. The Font Software may not be used to create or distribute any electronic document in which the Font Software or any part thereof, is embedded in a manner or format that permits editing, alterations, enhancements, or modifications by the recipient of such document. You may not knowingly transmit any electronic document or the Font Software to any party that intends or is likely to \"hack,\" edit, alter, enhance, or otherwise modify the Font Software or remove the Font Software from any document.\r\r8. You may make one (1) back-up copy of Font Software for archival purposes only, and you agree to retain exclusive custody and control over any such copy. Upon termination of the Agreement, you must destroy the original and any and all copies of the Font Software. The unauthorized sharing, lending, renting, sale, or other unauthorized use or misuse of the back-up copy is a material breach of this Agreement and will result in the immediate termination of this License.\r\r9. If no other option exists, you may take a digitized copy of the Font Software used for a particular document, or Font Software embedded in an electronic document that is sent to a commercial printer or service bureau for use by the printer or service bureau for preparing the document provided that the printer or service bureau represents that it shall destroy any and all copies of the Font Software upon completion of its work. Notwithstanding, you agree that the transmission of a \"print/preview\" PDF document is the first and preferred method of transmitting such documents to a service bureau or printer.\r\r10. The designs embodied and the Font Software and the Font Software and any trademarks associated therewith are the exclusive property of Commercial Type and their designers, where applicable and are protected by the copyright and other intellectual property laws of the United States, by the copyright and design laws of other nations, and by other international treaties. Any copies that you are expressly permitted to make pursuant to the Agreement must contain the same copyright, trademark, and other proprietary notices that appear on or in the Font Software.\r\r11. You agree not to create, assist in and/or cause the creation of modifications or additions to the Fonts or Font Software, including, but not limited to, creating additional weights; creating additional or deleting existing characters; modifying existing characters; modifying font spacing and kerning; or converting fonts to an alternate digital format, modify, adapt, translate, reverse engineer, decompile, disassemble, alter, or otherwise attempt to discover the source code of the Font Software without first obtaining written permission from Commercial Type. In the event that permission is given to you, any and all modifications and additions shall become and shall remain the sole and exclusive property of Commercial Type and you may not sell, lend or otherwise transmit any modifications or additions to the Font Software to any third party. Other jurisdictions may provide for additional rights, and if applicable, you may reverse engineer or decompile the Font Software only to the extent that sufficient information is not available for the purpose of creating an interoperable software program (but only for such purpose and only to the extent that sufficient information is not provided by Commercial Type upon written request). All trademarks shall be used in accordance with accepted trademark practice, including identification of the trademark owner's name. Use of the trademarks associated with the Font Software inures solely to the benefit of Commercial Type. \r\r12. Use of Commercial Type Font Software in the following circumstances and/or applications is NOT permitted without first obtaining the appropriate licensing upgrade. \r\ra) \tALPHABET OR LETTERFORM-RELATED PRODUCTS\r\t\tFOR RESALE OR LETTERFORM CREATION PRODUCTS OR DEVICES;\rb) \tEMBEDDING IN ELECTRONIC DEVICES; ALL GAMING USES AND/OR DEVICES;\rc) \tEMBEDDING IN SOFTWARE;\rd) \tSTORING AND/OR SERVING THE FONT SOFTWARE FOR THE PURPOSES OF MAKING THE FONT SOFTWARE\r\t\tAVAILABLE VIA THE INTERNET USING FONT REPLACEMENT TECHNOLOGIES.\r\r\ri) Letterform or Alphabet Products include, but are not limited to, signage and/or scrapbooking uses involving reproductions of individual letterforms, use in the creation of signage or numbering products, rubber stamps, die-cut products, stencil products, tattoo, flash, or adhesive sticker alphabet products or any other product containing any image of or derived from the design of the Font embodied in the Font Software of which any likeness of the alphabet can be reproduced.\r\rii) Embedding of the Fonts in a print/preview format is permitted. Notwithstanding, embedding or other use of the Fonts or the outlines thereof in any method which permits the extraction of the Font Software of the designs embodied therein is expressly prohibited. Any such use requires the express written permission of Commercial Type and may or may not require the purchase of a license upgrade at the sole discretion of Commercial Type.\r\riii) In the event any dingbats or other art forms are part of the Font Software, use of the artwork is further restricted. You may use the artwork, drawings and/or dingbats on goods for sale, in logo design, retail packaging or in point of sale uses only after the purchase of a license upgrade.\r\rIn order to obtain a license upgrade, you must contact Commercial Type at info@commercialtype.com for more information. If you are unsure whether your use of the Font Software is specifically permitted under this Agreement, contact Commercial Type.\r\r13. Embedded Electronic Devices includes the use of the Font Software for any on-screen display or on an electronic device outside a single location. For example, and not by way of limitation, such electronic devices include a kiosk, gaming devices, embroidery or sewing machines game playing or gambling devices, irrespective of whether the showing or creation of copies of the design embodied in the Font Software is created by use of the software or as an image of the design in tiff, gif or other format. \r\r14. Commercial Type Font Software is licensed for use by a specified number of users. Use of the Font Software in more than one geographic location or by means of server or central CPU outside of the terms of your license is permitted provided the each user or potential user is licensed. License upgrades may be purchased from Commercial Type at info@commercialtype.com.\r\r15. Except as may be otherwise expressly provided for herein, you expressly agree not to rent, lease, sublicense, give, lend, or further distribute the Font Software. You may transfer all your rights under this Agreement another person or entity provided that (i) the transferee accepts and agrees to be bound by all the terms and conditions of this Agreement, and (ii) you destroy all copies of the Font Software, including all copies stored in the memory of a hardware device.\r\r16. Commercial Type warrants that the Font Software will perform substantially in accordance with its documentation for ninety (90) days following delivery of the Font Software. To make a warranty claim, you must either return the Font Software to the location from which you obtained it together with a copy of your sales receipt or, if acquired on-line, contact the on-line provider with sufficient information regarding your acquisition of the Font Software to permit the confirmation of the effective date of this License. Schwartzco, Inc. and Commercial Type hereby EXPRESSLY DISCLAIMS ALL WARRANTIES, EXPRESS AND IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. COMMERCIAL TYPE DOES NOT WARRANT THAT THE OPERATION OF THE FONT SOFTWARE WILL BE UNINTERRUPTED OR ERROR-FREE, OR THAT THE FONT SOFTWARE IS WITHOUT DEFECTS. UNDER NO CIRCUMSTANCES SHALL COMMERCIAL TYPE BE LIABLE TO YOU OR ANY OTHER PARTY, WHETHER IN CONTRACT OR TORT (INCLUDING NEGLIGENCE) OR OTHERWISE, FOR ANY SPECIAL, CONSEQUENTIAL, OR INCIDENTAL DAMAGES, INCLUDING LOST PROFITS, SAVINGS OR BUSINESS INTERRUPTION AS A RESULT OF THE USE OF THE FONT SOFTWARE EVEN IF NOTIFIED IN ADVANCE OF SUCH POSSIBILITY. You hereby agree that your entire, exclusive, and cumulative liability and remedy shall be limited to the purchase price of this Font Software License. Under no circumstances shall Schwartzco, Inc.'s or Commercial Type's liability to you exceed either the refunding of the cost of the Font Software License or replacement of the Font Software either of which shall be at Commercial Type's sole discretion.\r\r17. OTHER LAW - CONSUMERS ONLY. Some jurisdictions do not allow the exclusion or limitation of incidental, consequential or special damages, implied warranties or implied warranties as they relate to sales to consumers. ANY IMPLIED WARRANTY OR OTHER RIGHT CREATED BY LAW IS ONLY EFFECTIVE FOR THE NINETY (90) DAY WARRANTY PERIOD. THERE ARE NO WARRANTIES OR CONDITIONS OF ANY KIND AFTER THE NINETY (90) DAY WARRANTY PERIOD. To the extent permissible by law, you agree that all implied warranties are not to be effective for more than thirty (30) days. \r\r18. You expressly agree that this Agreement shall be governed by the laws of the State of New York, U.S.A., as they apply to contracts entered into and wholly performed therein and without respect to its conflict of laws provisions or the conflict of laws provisions of any other jurisdiction. You expressly submit to the personal jurisdiction of the state and federal courts in the State of New York, USA, agree to waive any defenses arising out of the selection of jurisdiction or venue and further agree to service of process by mail. You hereby expressly agree that the application of the United Nations Convention of Contracts for the International Sale of Goods is expressly excluded.\r\r19. You acknowledge that you have read and understand this Agreement and that by using the software you agree to be bound by its terms and conditions. You further agree that it is the complete and exclusive statement of the agreement between Commercial Type and you which supersedes any proposal or prior agreement, oral or written, and any other communications relating to the subject matter of this Agreement. No variation of the terms of this Agreement or any different terms will be enforceable in the absence of an express written amendment, or consent, including a written express waiver of the affected terms of this Agreement. If any provision of this Agreement is declared by a court of competent jurisdiction to be invalid, void or unenforceable, the remaining provisions of this Agreement shall continue in full force and effect, and the invalid provision shall be replaced by Commercial Type with a provision that effects the intent of the invalid provision.\r\r20. Commercial Type expressly reserves the right to amend or modify its License Agreements at any time and without prior notification.\r\r21. The Agreement shall automatically terminate in the event you or any authorized user breaches any term or condition set forth herein. Notwithstanding any termination of this License, Commercial Type expressly reserves any and all other rights and remedies under equity or law. The Agreement may only be modified in a writing signed by an authorized officer of Commercial Type.\r\r22. You agree to be responsible for compliance with all laws, foreign and domestic relating to the control of exports or the transfer of technology. If you are purchasing this License for government use, or under a government contract, you agree to familiarize yourself with and follow any applicable rules and regulations relating to the purchase of a license to use software and the actual use thereof.\r\rAll inquiries and arrangements for returns, if any, may be sent via e-mail to info@commercialtype.com. The Commercial Type website is located at www.commercialtype.com\r\rv090815", "licenceURL": "http://commercialtype.com/license", "preferredFamily": "Graphik" }, "cssFontWeight": "normal", "cssFontStyle": "normal" };
//# sourceMappingURL=font.js.map

/***/ }),

/***/ 6009:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * Text = 3D Text
 *
 * parameters = {
 *  font: <THREE.Font>, // font
 *
 *  size: <float>, // size of the text
 *  height: <float>, // thickness to extrude text
 *  curveSegments: <int>, // number of points on the curves
 *
 *  bevelEnabled: <bool>, // turn on bevel
 *  bevelThickness: <float>, // how deep into text bevel goes
 *  bevelSize: <float>, // how far from text outline (including bevelOffset) is bevel
 *  bevelOffset: <float> // how far from text outline does bevel start
 * }
 */
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TextGeometry = void 0;
const three_1 = __webpack_require__(39437);
class TextGeometry extends three_1.ExtrudeGeometry {
    constructor(text, parameters = {}) {
        const font = parameters.font;
        if (font === undefined) {
            super(); // generate default extrude geometry
        }
        else {
            const shapes = font.generateShapes(text, parameters.size);
            // translate parameters to ExtrudeGeometry API
            parameters.depth = parameters.height !== undefined ? parameters.height : 50;
            // defaults
            if (parameters.bevelThickness === undefined)
                parameters.bevelThickness = 10;
            if (parameters.bevelSize === undefined)
                parameters.bevelSize = 8;
            if (parameters.bevelEnabled === undefined)
                parameters.bevelEnabled = false;
            super(shapes, parameters);
        }
        this.type = 'TextGeometry';
    }
}
exports.TextGeometry = TextGeometry;
//# sourceMappingURL=TextGeometry.js.map

/***/ }),

/***/ 97328:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Font = exports.FontLoader = void 0;
/* eslint-disable @typescript-eslint/no-explicit-any */
const three_1 = __webpack_require__(39437);
class FontLoader extends three_1.Loader {
    constructor(manager) {
        super(manager);
    }
    load(url, onLoad, onProgress, onError) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const scope = this;
        const loader = new three_1.FileLoader(this.manager);
        loader.setPath(this.path);
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(scope.withCredentials);
        loader.load(url, function (text) {
            let json;
            try {
                json = JSON.parse(text);
            }
            catch (e) {
                console.warn('THREE.FontLoader: typeface.js support is being deprecated. Use typeface.json instead.');
                json = JSON.parse(text.substring(65, text.length - 2));
            }
            const font = scope.parse(json);
            if (onLoad)
                onLoad(font);
        }, onProgress, onError);
    }
    parse(json) {
        return new Font(json);
    }
}
exports.FontLoader = FontLoader;
//
class Font {
    constructor(data) {
        this.isFont = true;
        this.type = 'Font';
        this.data = data;
    }
    generateShapes(text, size = 100) {
        const shapes = [];
        const paths = createPaths(text, size, this.data);
        for (let p = 0, pl = paths.length; p < pl; p++) {
            Array.prototype.push.apply(shapes, paths[p].toShapes());
        }
        return shapes;
    }
}
exports.Font = Font;
function createPaths(text, size, data) {
    const chars = Array.from(text);
    const scale = size / data.resolution;
    const line_height = (data.boundingBox.yMax - data.boundingBox.yMin + data.underlineThickness) * scale;
    const paths = [];
    let offsetX = 0, offsetY = 0;
    for (let i = 0; i < chars.length; i++) {
        const char = chars[i];
        if (char === '\n') {
            offsetX = 0;
            offsetY -= line_height;
        }
        else {
            const ret = createPath(char, scale, offsetX, offsetY, data);
            offsetX += ret.offsetX;
            paths.push(ret.path);
        }
    }
    return paths;
}
function createPath(char, scale, offsetX, offsetY, data) {
    const glyph = data.glyphs[char] || data.glyphs['?'];
    if (!glyph) {
        console.error('THREE.Font: character "' + char + '" does not exists in font family ' + data.familyName + '.');
        return;
    }
    const path = new three_1.ShapePath();
    let x, y, cpx, cpy, cpx1, cpy1, cpx2, cpy2;
    if (glyph.o) {
        const outline = glyph._cachedOutline || (glyph._cachedOutline = glyph.o.split(' '));
        for (let i = 0, l = outline.length; i < l;) {
            const action = outline[i++];
            switch (action) {
                case 'm': // moveTo
                    x = outline[i++] * scale + offsetX;
                    y = outline[i++] * scale + offsetY;
                    path.moveTo(x, y);
                    break;
                case 'l': // lineTo
                    x = outline[i++] * scale + offsetX;
                    y = outline[i++] * scale + offsetY;
                    path.lineTo(x, y);
                    break;
                case 'q': // quadraticCurveTo
                    cpx = outline[i++] * scale + offsetX;
                    cpy = outline[i++] * scale + offsetY;
                    cpx1 = outline[i++] * scale + offsetX;
                    cpy1 = outline[i++] * scale + offsetY;
                    path.quadraticCurveTo(cpx1, cpy1, cpx, cpy);
                    break;
                case 'b': // bezierCurveTo
                    cpx = outline[i++] * scale + offsetX;
                    cpy = outline[i++] * scale + offsetY;
                    cpx1 = outline[i++] * scale + offsetX;
                    cpy1 = outline[i++] * scale + offsetY;
                    cpx2 = outline[i++] * scale + offsetX;
                    cpy2 = outline[i++] * scale + offsetY;
                    path.bezierCurveTo(cpx1, cpy1, cpx2, cpy2, cpx, cpy);
                    break;
            }
        }
    }
    return { offsetX: glyph.ha * scale, path: path };
}
Font.prototype.isFont = true;
//# sourceMappingURL=FontLoader.js.map

/***/ }),

/***/ 10183:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RGBELoader = void 0;
/* eslint-disable no-case-declarations */
/* eslint-disable no-cond-assign */
/* eslint-disable @typescript-eslint/no-explicit-any */
const three_1 = __webpack_require__(39437);
// https://github.com/mrdoob/three.js/issues/5552
// http://en.wikipedia.org/wiki/RGBE_image_format
class RGBELoader extends three_1.DataTextureLoader {
    constructor(manager) {
        super(manager);
        this.type = three_1.HalfFloatType;
    }
    // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
    parse(buffer) {
        const 
        /* return codes for rgbe routines */
        //RGBE_RETURN_SUCCESS = 0,
        RGBE_RETURN_FAILURE = -1, 
        /* default error routine.  change this to change error handling */
        rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function (rgbe_error_code, msg) {
            switch (rgbe_error_code) {
                case rgbe_read_error:
                    console.error('THREE.RGBELoader Read Error: ' + (msg || ''));
                    break;
                case rgbe_write_error:
                    console.error('THREE.RGBELoader Write Error: ' + (msg || ''));
                    break;
                case rgbe_format_error:
                    console.error('THREE.RGBELoader Bad File Format: ' + (msg || ''));
                    break;
                default:
                case rgbe_memory_error: console.error('THREE.RGBELoader: Error: ' + (msg || ''));
            }
            return RGBE_RETURN_FAILURE;
        }, 
        /* offsets to red, green, and blue components in a data (float) pixel */
        //RGBE_DATA_RED = 0,
        //RGBE_DATA_GREEN = 1,
        //RGBE_DATA_BLUE = 2,
        /* number of floats per pixel, use 4 since stored in rgba image format */
        //RGBE_DATA_SIZE = 4,
        /* flags indicating which fields in an rgbe_header_info are valid */
        RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = '\n', fgets = function (buffer, lineLimit, consume) {
            const chunkSize = 128;
            lineLimit = !lineLimit ? 1024 : lineLimit;
            let p = buffer.pos, i = -1, len = 0, s = '', chunk = String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
            while ((0 > (i = chunk.indexOf(NEWLINE))) && (len < lineLimit) && (p < buffer.byteLength)) {
                s += chunk;
                len += chunk.length;
                p += chunkSize;
                chunk += String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
            }
            if (-1 < i) {
                /*for (i=l-1; i>=0; i--) {
                    byteCode = m.charCodeAt(i);
                    if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
                    else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
                    if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
                }*/
                if (false !== consume)
                    buffer.pos += len + i + 1;
                return s + chunk.slice(0, i);
            }
            return false;
        }, 
        /* minimal header reading.  modify if you want to parse more information */
        RGBE_ReadHeader = function (buffer) {
            // regexes to parse header info fields
            const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, 
            // eslint-disable-next-line no-useless-escape
            dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, 
            // RGBE format header struct
            header = {
                valid: 0,
                string: '',
                comments: '',
                programtype: 'RGBE',
                format: '',
                gamma: 1.0,
                exposure: 1.0,
                width: 0, height: 0 /* image dimensions, width/height */
            };
            let line, match;
            if (buffer.pos >= buffer.byteLength || !(line = fgets(buffer, undefined, undefined))) {
                return rgbe_error(rgbe_read_error, 'no header found');
            }
            /* if you want to require the magic token then uncomment the next line */
            if (!(match = line.match(magic_token_re))) {
                return rgbe_error(rgbe_format_error, 'bad initial token');
            }
            header.valid |= RGBE_VALID_PROGRAMTYPE;
            header.programtype = match[1];
            header.string += line + '\n';
            // eslint-disable-next-line no-constant-condition
            while (true) {
                line = fgets(buffer, undefined, undefined);
                if (false === line)
                    break;
                header.string += line + '\n';
                if ('#' === line.charAt(0)) {
                    header.comments += line + '\n';
                    continue; // comment line
                }
                if (match = line.match(gamma_re)) {
                    header.gamma = parseFloat(match[1]);
                }
                if (match = line.match(exposure_re)) {
                    header.exposure = parseFloat(match[1]);
                }
                if (match = line.match(format_re)) {
                    header.valid |= RGBE_VALID_FORMAT;
                    header.format = match[1]; //'32-bit_rle_rgbe';
                }
                if (match = line.match(dimensions_re)) {
                    header.valid |= RGBE_VALID_DIMENSIONS;
                    header.height = parseInt(match[1], 10);
                    header.width = parseInt(match[2], 10);
                }
                if ((header.valid & RGBE_VALID_FORMAT) && (header.valid & RGBE_VALID_DIMENSIONS))
                    break;
            }
            if (!(header.valid & RGBE_VALID_FORMAT)) {
                return rgbe_error(rgbe_format_error, 'missing format specifier');
            }
            if (!(header.valid & RGBE_VALID_DIMENSIONS)) {
                return rgbe_error(rgbe_format_error, 'missing image size specifier');
            }
            return header;
        }, RGBE_ReadPixels_RLE = function (buffer, w, h) {
            const scanline_width = w;
            if (
            // run length encoding is not allowed so read flat
            ((scanline_width < 8) || (scanline_width > 0x7fff)) ||
                // this file is not run length encoded
                ((2 !== buffer[0]) || (2 !== buffer[1]) || (buffer[2] & 0x80))) {
                // return the flat buffer
                return new Uint8Array(buffer);
            }
            if (scanline_width !== ((buffer[2] << 8) | buffer[3])) {
                return rgbe_error(rgbe_format_error, 'wrong scanline width');
            }
            const data_rgba = new Uint8Array(4 * w * h);
            if (!data_rgba.length) {
                return rgbe_error(rgbe_memory_error, 'unable to allocate buffer space');
            }
            let offset = 0, pos = 0;
            const ptr_end = 4 * scanline_width;
            const rgbeStart = new Uint8Array(4);
            const scanline_buffer = new Uint8Array(ptr_end);
            let num_scanlines = h;
            // read in each successive scanline
            while ((num_scanlines > 0) && (pos < buffer.byteLength)) {
                if (pos + 4 > buffer.byteLength) {
                    return rgbe_error(rgbe_read_error, undefined);
                }
                rgbeStart[0] = buffer[pos++];
                rgbeStart[1] = buffer[pos++];
                rgbeStart[2] = buffer[pos++];
                rgbeStart[3] = buffer[pos++];
                if ((2 != rgbeStart[0]) || (2 != rgbeStart[1]) || (((rgbeStart[2] << 8) | rgbeStart[3]) != scanline_width)) {
                    return rgbe_error(rgbe_format_error, 'bad rgbe scanline format');
                }
                // read each of the four channels for the scanline into the buffer
                // first red, then green, then blue, then exponent
                let ptr = 0, count;
                while ((ptr < ptr_end) && (pos < buffer.byteLength)) {
                    count = buffer[pos++];
                    const isEncodedRun = count > 128;
                    if (isEncodedRun)
                        count -= 128;
                    if ((0 === count) || (ptr + count > ptr_end)) {
                        return rgbe_error(rgbe_format_error, 'bad scanline data');
                    }
                    if (isEncodedRun) {
                        // a (encoded) run of the same value
                        const byteValue = buffer[pos++];
                        for (let i = 0; i < count; i++) {
                            scanline_buffer[ptr++] = byteValue;
                        }
                        //ptr += count;
                    }
                    else {
                        // a literal-run
                        scanline_buffer.set(buffer.subarray(pos, pos + count), ptr);
                        ptr += count;
                        pos += count;
                    }
                }
                // now convert data from buffer into rgba
                // first red, then green, then blue, then exponent (alpha)
                const l = scanline_width; //scanline_buffer.byteLength;
                for (let i = 0; i < l; i++) {
                    let off = 0;
                    data_rgba[offset] = scanline_buffer[i + off];
                    off += scanline_width; //1;
                    data_rgba[offset + 1] = scanline_buffer[i + off];
                    off += scanline_width; //1;
                    data_rgba[offset + 2] = scanline_buffer[i + off];
                    off += scanline_width; //1;
                    data_rgba[offset + 3] = scanline_buffer[i + off];
                    offset += 4;
                }
                num_scanlines--;
            }
            return data_rgba;
        };
        const RGBEByteToRGBFloat = function (sourceArray, sourceOffset, destArray, destOffset) {
            const e = sourceArray[sourceOffset + 3];
            const scale = Math.pow(2.0, e - 128.0) / 255.0;
            destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
            destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
            destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
            destArray[destOffset + 3] = 1;
        };
        const RGBEByteToRGBHalf = function (sourceArray, sourceOffset, destArray, destOffset) {
            const e = sourceArray[sourceOffset + 3];
            const scale = Math.pow(2.0, e - 128.0) / 255.0;
            // clamping to 65504, the maximum representable value in float16
            destArray[destOffset + 0] = three_1.DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
            destArray[destOffset + 1] = three_1.DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
            destArray[destOffset + 2] = three_1.DataUtils.toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
            destArray[destOffset + 3] = three_1.DataUtils.toHalfFloat(1);
        };
        const byteArray = new Uint8Array(buffer);
        byteArray.pos = 0;
        const rgbe_header_info = RGBE_ReadHeader(byteArray);
        if (RGBE_RETURN_FAILURE !== rgbe_header_info) {
            const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
            if (RGBE_RETURN_FAILURE !== image_rgba_data) {
                let data, format, type;
                let numElements;
                switch (this.type) {
                    case three_1.FloatType:
                        numElements = image_rgba_data.length / 4;
                        const floatArray = new Float32Array(numElements * 4);
                        for (let j = 0; j < numElements; j++) {
                            RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
                        }
                        data = floatArray;
                        type = three_1.FloatType;
                        break;
                    case three_1.HalfFloatType:
                        numElements = image_rgba_data.length / 4;
                        const halfArray = new Uint16Array(numElements * 4);
                        for (let j = 0; j < numElements; j++) {
                            RGBEByteToRGBHalf(image_rgba_data, j * 4, halfArray, j * 4);
                        }
                        data = halfArray;
                        type = three_1.HalfFloatType;
                        break;
                    default:
                        console.error('THREE.RGBELoader: unsupported type: ', this.type);
                        break;
                }
                return {
                    width: w, height: h,
                    data: data,
                    header: rgbe_header_info.string,
                    gamma: rgbe_header_info.gamma,
                    exposure: rgbe_header_info.exposure,
                    format: format,
                    type: type
                };
            }
        }
        return null;
    }
    setDataType(value) {
        this.type = value;
        return this;
    }
    load(url, onLoad, onProgress, onError) {
        function onLoadCallback(texture, texData) {
            switch (texture.type) {
                case three_1.FloatType:
                    texture.colorSpace = three_1.LinearSRGBColorSpace;
                    texture.minFilter = three_1.LinearFilter;
                    texture.magFilter = three_1.LinearFilter;
                    texture.generateMipmaps = false;
                    texture.flipY = true;
                    break;
                case three_1.HalfFloatType:
                    texture.colorSpace = three_1.LinearSRGBColorSpace;
                    texture.minFilter = three_1.LinearFilter;
                    texture.magFilter = three_1.LinearFilter;
                    texture.generateMipmaps = false;
                    texture.flipY = true;
                    break;
            }
            if (onLoad)
                onLoad(texture, texData);
        }
        return super.load(url, onLoadCallback, onProgress, onError);
    }
}
exports.RGBELoader = RGBELoader;
//# sourceMappingURL=RGBELoader.js.map

/***/ }),

/***/ 54609:
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
var _ThreejsData_obj;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ThreejsData = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
class ThreejsData extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(obj, id) {
        super(id);
        // #region Properties (1)
        _ThreejsData_obj.set(this, void 0);
        __classPrivateFieldSet(this, _ThreejsData_obj, obj, "f");
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get obj() {
        return __classPrivateFieldGet(this, _ThreejsData_obj, "f");
    }
    set obj(value) {
        __classPrivateFieldSet(this, _ThreejsData_obj, value, "f");
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (1)
    clone() {
        return new ThreejsData(this.obj, this.id);
    }
}
exports.ThreejsData = ThreejsData;
_ThreejsData_obj = new WeakMap();
//# sourceMappingURL=ThreejsData.js.map

/***/ }),

/***/ 81155:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.VISIBILITY_MODE = exports.TONE_MAPPING = exports.TEXTURE_ENCODING = exports.SPINNER_POSITIONING = exports.RENDERER_TYPE = exports.FLAG_TYPE = exports.BUSY_MODE_DISPLAY = void 0;
// #endregion Interfaces (1)
// #region Enums (7)
/**
 * Modes used to indicate that a viewport is busy.
 */
var BUSY_MODE_DISPLAY;
(function (BUSY_MODE_DISPLAY) {
    /** The viewport will be blurred when a session is busy. */
    BUSY_MODE_DISPLAY["BLUR"] = "blur";
    /** A spinner will be shown when a session is busy. */
    BUSY_MODE_DISPLAY["SPINNER"] = "spinner";
    /** Nothing happens when a session is busy. */
    BUSY_MODE_DISPLAY["NONE"] = "none";
})(BUSY_MODE_DISPLAY = exports.BUSY_MODE_DISPLAY || (exports.BUSY_MODE_DISPLAY = {}));
/**
 * Types of flags used to influence the render loop.
 */
var FLAG_TYPE;
(function (FLAG_TYPE) {
    /** The flag for the busy mode. */
    FLAG_TYPE["BUSY_MODE"] = "busy_mode";
    /** The flag to freeze the camera. */
    FLAG_TYPE["CAMERA_FREEZE"] = "camera_freeze";
    /** The flag to continuously render the scene. */
    FLAG_TYPE["CONTINUOUS_RENDERING"] = "continuous_rendering";
    /** The flag to continuously update the shadow map. */
    FLAG_TYPE["CONTINUOUS_SHADOW_MAP_UPDATE"] = "continuous_shadow_map_update";
})(FLAG_TYPE = exports.FLAG_TYPE || (exports.FLAG_TYPE = {}));
var RENDERER_TYPE;
(function (RENDERER_TYPE) {
    /** The standard rendering engine */
    RENDERER_TYPE["STANDARD"] = "standard";
    /** A basic version of the rendering engine */
    RENDERER_TYPE["ATTRIBUTES"] = "attributes";
})(RENDERER_TYPE = exports.RENDERER_TYPE || (exports.RENDERER_TYPE = {}));
var SPINNER_POSITIONING;
(function (SPINNER_POSITIONING) {
    SPINNER_POSITIONING["CENTER"] = "center";
    SPINNER_POSITIONING["TOP_LEFT"] = "top_left";
    SPINNER_POSITIONING["TOP_RIGHT"] = "top_right";
    SPINNER_POSITIONING["BOTTOM_LEFT"] = "bottom_left";
    SPINNER_POSITIONING["BOTTOM_RIGHT"] = "bottom_right";
})(SPINNER_POSITIONING = exports.SPINNER_POSITIONING || (exports.SPINNER_POSITIONING = {}));
var TEXTURE_ENCODING;
(function (TEXTURE_ENCODING) {
    TEXTURE_ENCODING["LINEAR"] = "linear";
    TEXTURE_ENCODING["SRGB"] = "srgb";
    TEXTURE_ENCODING["RGBE"] = "rgbe";
    TEXTURE_ENCODING["RGBM7"] = "rgbm7";
    TEXTURE_ENCODING["RGBM16"] = "rgbm16";
    TEXTURE_ENCODING["RGBD"] = "rgbd";
    TEXTURE_ENCODING["GAMMA"] = "gamma";
})(TEXTURE_ENCODING = exports.TEXTURE_ENCODING || (exports.TEXTURE_ENCODING = {}));
var TONE_MAPPING;
(function (TONE_MAPPING) {
    TONE_MAPPING["NONE"] = "none";
    TONE_MAPPING["LINEAR"] = "linear";
    TONE_MAPPING["REINHARD"] = "reinhard";
    TONE_MAPPING["CINEON"] = "cineon";
    TONE_MAPPING["ACES_FILMIC"] = "aces_filmic";
})(TONE_MAPPING = exports.TONE_MAPPING || (exports.TONE_MAPPING = {}));
var VISIBILITY_MODE;
(function (VISIBILITY_MODE) {
    /** The viewer shows the scene instantly */
    VISIBILITY_MODE["INSTANT"] = "instant";
    /** The viewer shows the scene after the first session loading */
    VISIBILITY_MODE["SESSION"] = "session";
    /** The viewer is shown once the 'show' property is set to true */
    VISIBILITY_MODE["MANUAL"] = "manual";
})(VISIBILITY_MODE = exports.VISIBILITY_MODE || (exports.VISIBILITY_MODE = {}));
// #endregion Enums (7)
//# sourceMappingURL=IRenderingEngine.js.map

/***/ }),

/***/ 45850:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SPINNER_POSITIONING = exports.FLAG_TYPE = exports.BUSY_MODE_DISPLAY = exports.TONE_MAPPING = exports.TEXTURE_ENCODING = exports.VISIBILITY_MODE = exports.RENDERER_TYPE = void 0;
const IRenderingEngine_1 = __webpack_require__(81155);
Object.defineProperty(exports, "BUSY_MODE_DISPLAY", ({ enumerable: true, get: function () { return IRenderingEngine_1.BUSY_MODE_DISPLAY; } }));
Object.defineProperty(exports, "FLAG_TYPE", ({ enumerable: true, get: function () { return IRenderingEngine_1.FLAG_TYPE; } }));
Object.defineProperty(exports, "RENDERER_TYPE", ({ enumerable: true, get: function () { return IRenderingEngine_1.RENDERER_TYPE; } }));
Object.defineProperty(exports, "TEXTURE_ENCODING", ({ enumerable: true, get: function () { return IRenderingEngine_1.TEXTURE_ENCODING; } }));
Object.defineProperty(exports, "TONE_MAPPING", ({ enumerable: true, get: function () { return IRenderingEngine_1.TONE_MAPPING; } }));
Object.defineProperty(exports, "VISIBILITY_MODE", ({ enumerable: true, get: function () { return IRenderingEngine_1.VISIBILITY_MODE; } }));
Object.defineProperty(exports, "SPINNER_POSITIONING", ({ enumerable: true, get: function () { return IRenderingEngine_1.SPINNER_POSITIONING; } }));
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=vendor.common-6d2c6301.bundle.js.map