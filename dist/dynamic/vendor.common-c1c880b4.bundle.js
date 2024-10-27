"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[288],{

/***/ 21955:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationEngine = void 0;
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_types_1 = __webpack_require__(64766);
class AnimationEngine {
    constructor() {
        // #region Properties (3)
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._animations = {};
        // #endregion Private Methods (1)
    }
    // #endregion Properties (3)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Accessors (1)
    get animations() {
        return this._animations;
    }
    // #endregion Public Accessors (1)
    // #region Public Methods (3)
    init() { }
    update(deltaTime) {
        const animations = Object.values(this._animations);
        let running = false;
        for (let i = 0; i < animations.length; i++) {
            const animation = animations[i];
            if (animation.animationTime === -1) {
                // if we just stopped we need to render one more time
                running = true;
                animation.animationTime = 0;
            }
            if (!animation.animate)
                continue;
            running = true;
            animation.animationTime += deltaTime;
            if (animation.animationTime / 1000.0 > animation.duration) {
                if (animation.repeat) {
                    animation.startAnimation();
                }
                else {
                    animation.stopAnimation();
                }
            }
            const animationDuration = animation.duration;
            const currentAnimationDeltaTime = (animation.animationTime / 1000.0) % animationDuration;
            for (let j = 0; j < animation.tracks.length; j++) {
                const track = animation.tracks[j];
                const id = animation.id + '_' + j;
                if (currentAnimationDeltaTime < track.times[0] || currentAnimationDeltaTime > track.times[track.times.length - 1])
                    continue;
                for (let k = 1; k < track.times.length; k++) {
                    if (currentAnimationDeltaTime < track.times[k] && currentAnimationDeltaTime > track.times[k - 1]) {
                        const prevAnimation = track.node.transformations.filter(t => t.id === id);
                        track.node.transformations = track.node.transformations.filter((el) => {
                            return !prevAnimation.includes(el);
                        });
                        const factor = (currentAnimationDeltaTime - track.times[k - 1]) / (track.times[k] - track.times[k - 1]);
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
                            let quaternion;
                            if (track.interpolation === 'step') {
                                quaternion = gl_matrix_1.quat.fromValues(track.values[(k - 1) * 4 + 0], track.values[(k - 1) * 4 + 1], track.values[(k - 1) * 4 + 2], track.values[(k - 1) * 4 + 3]);
                            }
                            else {
                                quaternion = gl_matrix_1.quat.slerp(gl_matrix_1.vec4.create(), gl_matrix_1.vec4.fromValues(track.values[(k - 1) * 4 + 0], track.values[(k - 1) * 4 + 1], track.values[(k - 1) * 4 + 2], track.values[(k - 1) * 4 + 3]), gl_matrix_1.vec4.fromValues(track.values[(k) * 4 + 0], track.values[(k) * 4 + 1], track.values[(k) * 4 + 2], track.values[(k) * 4 + 3]), factor);
                            }
                            const rotationMatrix = gl_matrix_1.mat4.fromQuat(gl_matrix_1.mat4.create(), quaternion);
                            if (pivotMatrix && pivotMatrixInverse) {
                                rotationTransformation.matrix = gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), pivotMatrix, rotationMatrix), pivotMatrixInverse);
                            }
                            else {
                                rotationTransformation.matrix = rotationMatrix;
                            }
                        }
                        else if (track.path === 'translation') {
                            let vector;
                            if (track.interpolation === 'step') {
                                vector = gl_matrix_1.vec3.fromValues(track.values[(k - 1) * 3 + 0], track.values[(k - 1) * 3 + 1], track.values[(k - 1) * 3 + 2]);
                            }
                            else {
                                vector = gl_matrix_1.vec3.lerp(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(track.values[(k - 1) * 3 + 0], track.values[(k - 1) * 3 + 1], track.values[(k - 1) * 3 + 2]), gl_matrix_1.vec3.fromValues(track.values[(k) * 3 + 0], track.values[(k) * 3 + 1], track.values[(k) * 3 + 2]), factor);
                            }
                            translationTransformation.matrix = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), vector);
                        }
                        else if (track.path === 'scale') {
                            let pivotMatrix, pivotMatrixInverse;
                            if (track.pivot) {
                                pivotMatrix = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(track.pivot[0], track.pivot[1], track.pivot[2]));
                                pivotMatrixInverse = gl_matrix_1.mat4.fromTranslation(gl_matrix_1.mat4.create(), gl_matrix_1.vec3.fromValues(-track.pivot[0], -track.pivot[1], -track.pivot[2]));
                            }
                            let vector;
                            if (track.interpolation === 'step') {
                                vector = gl_matrix_1.vec3.fromValues(track.values[(k - 1) * 3 + 0], track.values[(k - 1) * 3 + 1], track.values[(k - 1) * 3 + 2]);
                            }
                            else {
                                vector = gl_matrix_1.vec3.lerp(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(track.values[(k - 1) * 3 + 0], track.values[(k - 1) * 3 + 1], track.values[(k - 1) * 3 + 2]), gl_matrix_1.vec3.fromValues(track.values[(k) * 3 + 0], track.values[(k) * 3 + 1], track.values[(k) * 3 + 2]), factor);
                            }
                            const scalingMatrix = gl_matrix_1.mat4.fromScaling(gl_matrix_1.mat4.create(), vector);
                            if (pivotMatrix && pivotMatrixInverse) {
                                scaleTransformation.matrix = gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), gl_matrix_1.mat4.multiply(gl_matrix_1.mat4.create(), pivotMatrix, scalingMatrix), pivotMatrixInverse);
                            }
                            else {
                                scaleTransformation.matrix = scalingMatrix;
                            }
                        }
                        else if (track.path === 'weights') {
                            let weights = [];
                            const weightCount = track.values.length / track.times.length;
                            if (track.interpolation === 'step') {
                                for (let l = 0; l < weightCount; l++)
                                    weights.push(track.values[(k - 1) * weightCount + l]);
                            }
                            else {
                                for (let l = 0; l < weightCount; l++)
                                    weights.push(track.values[(k - 1) * weightCount + l] * (1.0 - factor) + (factor) * track.values[(k - 1) * weightCount + l]);
                            }
                            const applyWeights = (node) => {
                                for (let l = 0; l < node.data.length; l++)
                                    if (node.data[l] instanceof viewer_shared_types_1.GeometryData && node.data[l].morphWeights.length === weightCount)
                                        node.data[l].morphWeights = weights;
                                for (let l = 0; l < node.children.length; l++)
                                    applyWeights(node.children[l]);
                            };
                            applyWeights(track.node);
                        }
                        break;
                    }
                }
            }
        }
        return running;
    }
    updateAnimationData() {
        this._animations = {};
        const animationArray = this.gatherAnimations();
        const names = animationArray.map(a => a.name);
        for (let i = 0; i < animationArray.length; i++) {
            const animationName = animationArray[i].name;
            const nameIndices = [];
            for (let j = 0; j < names.length; j++)
                if (animationName === names[j])
                    nameIndices.push(j);
            let animationNameAdjusted = animationName;
            // name adjustement if the name occurs multiple times
            if (nameIndices.length > 1) {
                animationNameAdjusted = animationName + '_' + nameIndices.indexOf(i);
                // even further name adjustement if the name is even then the same after adjustements (probably will never happen)
                while (names.includes(animationNameAdjusted))
                    animationNameAdjusted += "_0";
            }
            this._animations[animationNameAdjusted] = animationArray[i];
        }
    }
    // #endregion Public Methods (3)
    // #region Private Methods (1)
    gatherAnimations(node = this._tree.root) {
        let out = [];
        for (let i = 0, len = node.data.length; i < len; i++)
            if (node.data[i] instanceof viewer_shared_types_1.AnimationData)
                out.push(node.data[i]);
        for (let i = 0, len = node.children.length; i < len; i++)
            out = out.concat(this.gatherAnimations(node.children[i]));
        return out;
    }
}
exports.AnimationEngine = AnimationEngine;
//# sourceMappingURL=AnimationEngine.js.map

/***/ }),

/***/ 46560:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationEngine = void 0;
const AnimationEngine_1 = __webpack_require__(21955);
Object.defineProperty(exports, "AnimationEngine", ({ enumerable: true, get: function () { return AnimationEngine_1.AnimationEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 57502:
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
var _AnimationFrameEngine_animationEngine, _AnimationFrameEngine_uuidGenerator;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationFrameEngine = void 0;
const TWEEN = __importStar(__webpack_require__(8795));
const viewer_shared_services_1 = __webpack_require__(8389);
const viewer_rendering_engine_animation_engine_1 = __webpack_require__(46560);
class AnimationFrameEngine {
    // #endregion Properties (5)
    // #region Constructors (1)
    constructor() {
        // #region Properties (5)
        _AnimationFrameEngine_animationEngine.set(this, viewer_rendering_engine_animation_engine_1.AnimationEngine.instance);
        _AnimationFrameEngine_uuidGenerator.set(this, viewer_shared_services_1.UuidGenerator.instance);
        this._animationFrameCallbacks = {};
        this._lastTime = 0;
        this.animate(0);
    }
    // #endregion Constructors (1)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (2)
    addAnimationFrameCallback(cb) {
        const token = __classPrivateFieldGet(this, _AnimationFrameEngine_uuidGenerator, "f").create();
        this._animationFrameCallbacks[token] = cb;
        return token;
    }
    removeAnimationFrameCallback(token) {
        if (!this._animationFrameCallbacks[token])
            return false;
        delete this._animationFrameCallbacks[token];
        this._animationFrameCallbacks[token] = undefined;
        return true;
    }
    // #endregion Public Methods (2)
    // #region Private Methods (1)
    animate(time) {
        // animation loop - part 2: requesting and timings
        requestAnimationFrame((time) => this.animate(time));
        TWEEN.update(time);
        const deltaTime = time - this._lastTime < 0 ? 0 : time - this._lastTime;
        this._lastTime = time;
        const runningAnimation = __classPrivateFieldGet(this, _AnimationFrameEngine_animationEngine, "f").update(deltaTime);
        for (let a in this._animationFrameCallbacks)
            this._animationFrameCallbacks[a](time, deltaTime, runningAnimation);
    }
}
exports.AnimationFrameEngine = AnimationFrameEngine;
_AnimationFrameEngine_animationEngine = new WeakMap(), _AnimationFrameEngine_uuidGenerator = new WeakMap();
//# sourceMappingURL=AnimationFrameEngine.js.map

/***/ }),

/***/ 98476:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AnimationFrameEngine = void 0;
const AnimationFrameEngine_1 = __webpack_require__(57502);
Object.defineProperty(exports, "AnimationFrameEngine", ({ enumerable: true, get: function () { return AnimationFrameEngine_1.AnimationFrameEngine; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 8795:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Easing: () => (/* binding */ Easing),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   Interpolation: () => (/* binding */ Interpolation),
/* harmony export */   Sequence: () => (/* binding */ Sequence),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAll: () => (/* binding */ getAll),
/* harmony export */   nextId: () => (/* binding */ nextId),
/* harmony export */   now: () => (/* binding */ now$1),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeAll: () => (/* binding */ removeAll),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
var Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.cos((amount * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.cos(Math.PI * amount));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            var s = 1.70158;
            return amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            var s = 1.70158;
            return --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
};

var now;
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
// eslint-disable-next-line
// @ts-ignore
if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    now = function () {
        // eslint-disable-next-line
        // @ts-ignore
        var time = process.hrtime();
        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
    };
}
// In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
    now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
    now = function () {
        return new Date().getTime();
    };
}
var now$1 = now;

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
var Group = /** @class */ (function () {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this._tweens).map(function (tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function () {
        this._tweens = {};
    };
    Group.prototype.add = function (tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function (tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.update = function (time, preserve) {
        if (time === void 0) { time = now$1(); }
        if (preserve === void 0) { preserve = false; }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}());

/**
 *
 */
var Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};

/**
 * Utils
 */
var Sequence = /** @class */ (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());

var mainGroup = new Group();

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var Tween = /** @class */ (function () {
    function Tween(_object, _group) {
        if (_group === void 0) { _group = mainGroup; }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    Tween.prototype.getId = function () {
        return this._id;
    };
    Tween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function () {
        return this._isPaused;
    };
    Tween.prototype.to = function (properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.duration = function (d) {
        this._duration = d;
        return this;
    };
    Tween.prototype.start = function (time) {
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (var property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time !== undefined ? (typeof time === 'string' ? now$1() + parseFloat(time) : time) : now$1();
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    };
    Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (var prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    Tween.prototype.stop = function () {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    Tween.prototype.end = function () {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    Tween.prototype.pause = function (time) {
        if (time === void 0) { time = now$1(); }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    Tween.prototype.resume = function (time) {
        if (time === void 0) { time = now$1(); }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    Tween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    };
    Tween.prototype.group = function (group) {
        this._group = group;
        return this;
    };
    Tween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function (times) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function (amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function (yoyo) {
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function (easingFunction) {
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function (interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    Tween.prototype.chain = function () {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function (callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    Tween.prototype.update = function (time, autoStart) {
        if (time === void 0) { time = now$1(); }
        if (autoStart === void 0) { autoStart = true; }
        if (this._isPaused)
            return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    Tween.prototype._handleRelativeValue = function (start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    };
    Tween.prototype._swapEndStartRepeatValues = function (property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    return Tween;
}());

var VERSION = '18.6.4';

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now$1,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    getAll: getAll,
    removeAll: removeAll,
    add: add,
    remove: remove,
    update: update,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exports);



/***/ }),

/***/ 28839:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraEngine = void 0;
const AbstractCamera_1 = __webpack_require__(26153);
const viewer_shared_math_1 = __webpack_require__(67275);
const ICameraEngine_1 = __webpack_require__(23564);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const IOrthographicCamera_1 = __webpack_require__(49578);
const OrthographicCamera_1 = __webpack_require__(36817);
const PerspectiveCamera_1 = __webpack_require__(80187);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_services_1 = __webpack_require__(8389);
class CameraEngine {
    // #endregion Properties (11)
    // #region Constructors (1)
    constructor(_renderingEngine) {
        this._renderingEngine = _renderingEngine;
        // #region Properties (11)
        this._cameraNode = new viewer_shared_node_tree_1.TreeNode('cameras');
        this._cameras = {};
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._logger = viewer_shared_services_1.Logger.instance;
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        this._tree = viewer_shared_node_tree_1.Tree.instance;
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        this._camera = null;
        this._settingsApplied = false;
        this._boundingBox = new viewer_shared_math_1.Box();
        this._tree.root.addChild(this._cameraNode);
        this._cameraNode.restrictViewports = [this._renderingEngine.id];
        this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.SCENE.SCENE_BOUNDING_BOX_CHANGE, (e) => {
            const viewerEvent = e;
            if (viewerEvent.viewportId === this._renderingEngine.id) {
                this._boundingBox = new viewer_shared_math_1.Box(viewerEvent.boundingBox.min, viewerEvent.boundingBox.max);
                const cameras = this.cameras;
                for (const c in cameras)
                    cameras[c].boundingBox = this._boundingBox.clone();
            }
        });
        this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_UPDATED, (e) => {
            const viewerEvent = e;
            if (viewerEvent.viewportId === this._renderingEngine.id) {
                this.searchForNewCameras();
            }
        });
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (4)
    get camera() {
        return this._camera;
    }
    get cameras() {
        return this._cameras;
    }
    get update() {
        return this._update;
    }
    set update(value) {
        this._update = value;
    }
    // #endregion Public Getters And Setters (4)
    // #region Public Methods (8)
    activateCameraEvents() {
        const cameras = this.cameras;
        for (const c in cameras)
            cameras[c].controls.cameraControlsEventDistribution.activateCameraEvents();
    }
    applySettings(settingsEngine) {
        const cameras = this.cameras;
        for (const c in cameras)
            this.removeCamera(c);
        for (const id in settingsEngine.settings.camera.cameras) {
            const cameraSetting = settingsEngine.settings.camera.cameras[id];
            if (cameraSetting.type === 'perspective') {
                this.createCamera(ICameraEngine_1.CAMERA_TYPE.PERSPECTIVE, id);
            }
            else {
                const camera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, id);
                camera.direction = cameraSetting.type;
            }
        }
        for (const c in cameras)
            cameras[c].applySettings(settingsEngine);
        const cameraKeys = Object.keys(settingsEngine.settings.camera.cameras);
        if (cameraKeys.length > 0) {
            if (!settingsEngine.settings.camera.cameraId) {
                this.assignCamera(cameraKeys[0]);
            }
            else {
                this.assignCamera(settingsEngine.settings.camera.cameraId);
            }
        }
        else {
            this.createDefaultCameras();
            this.camera.applySettings(settingsEngine);
        }
        this._settingsApplied = true;
        if (this._update)
            this._update();
    }
    assignCamera(id) {
        const camera = this.cameras[id];
        if (!camera)
            return false;
        for (const c in this.cameras)
            this.cameras[c].active = false;
        this._camera = camera;
        this._camera.active = true;
        return true;
    }
    createCamera(type, id, isDefault = false) {
        const cameras = this.cameras;
        const cameraId = id || this._uuidGenerator.create();
        if (cameras[cameraId])
            throw new viewer_shared_services_1.ShapeDiverViewerCameraError(`CameraEngine.createCamera: Camera (${type}) with this id (${cameraId}) already exists.`);
        const initialAspectRatio = this._renderingEngine.canvas.parentNode.clientWidth / this._renderingEngine.canvas.parentNode.clientHeight;
        const camera = ICameraEngine_1.CAMERA_TYPE.PERSPECTIVE === type ? new PerspectiveCamera_1.PerspectiveCamera(cameraId, undefined, initialAspectRatio, isDefault) : new OrthographicCamera_1.OrthographicCamera(cameraId, undefined, isDefault);
        camera.assignViewer(this._renderingEngine);
        cameras[cameraId] = camera;
        if (this._settingsApplied && this._renderingEngine.settingsEngine) {
            camera.applySettings(this._renderingEngine.settingsEngine);
        }
        else {
            camera.zoomTo(undefined, { duration: 0 });
        }
        this._cameraNode.addData(camera);
        if (this._update)
            this._update();
        return camera;
    }
    createDefaultCameras() {
        const topCamera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'top', true);
        topCamera.direction = IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.TOP;
        const bottomCamera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'bottom', true);
        bottomCamera.direction = IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BOTTOM;
        const leftCamera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'left', true);
        leftCamera.direction = IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.LEFT;
        const rightCamera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'right', true);
        rightCamera.direction = IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.RIGHT;
        const frontCamera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'front', true);
        frontCamera.direction = IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.FRONT;
        const backCamera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'back', true);
        backCamera.direction = IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BACK;
        this.createCamera(ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, 'orthographic');
        const camera = this.createCamera(ICameraEngine_1.CAMERA_TYPE.PERSPECTIVE, 'perspective');
        this.assignCamera(camera.id);
    }
    deactivateCameraEvents() {
        const cameras = this.cameras;
        for (const c in cameras)
            cameras[c].controls.cameraControlsEventDistribution.deactivateCameraEvents();
    }
    removeCamera(id) {
        const cameras = this.cameras;
        const camera = cameras[id];
        if (!camera)
            return false;
        if (camera.domEventListenerToken)
            this._renderingEngine.domEventEngine.removeDomEventListener(camera.domEventListenerToken);
        if (this._camera && this._camera.id === id)
            this._camera = null;
        delete cameras[id];
        this._cameraNode.removeData(camera);
        if (this._update)
            this._update();
        return true;
    }
    saveSettings(settingsEngine) {
        settingsEngine.settings.camera.cameraId = this._camera ? this._camera.id : 'perspective';
        settingsEngine.settings.camera.cameras = {};
        for (const c in this.cameras) {
            const camera = this.cameras[c];
            if (camera.type === ICameraEngine_1.CAMERA_TYPE.PERSPECTIVE) {
                const controls = camera.controls;
                settingsEngine.camera.cameras[camera.id] = {
                    name: camera.name,
                    autoAdjust: camera.autoAdjust,
                    cameraMovementDuration: camera.cameraMovementDuration,
                    enableCameraControls: camera.enableCameraControls,
                    revertAtMouseUp: camera.revertAtMouseUp,
                    revertAtMouseUpDuration: camera.revertAtMouseUpDuration,
                    zoomExtentsFactor: camera.zoomExtentsFactor,
                    position: { x: camera.defaultPosition[0], y: camera.defaultPosition[1], z: camera.defaultPosition[2] },
                    target: { x: camera.defaultTarget[0], y: camera.defaultTarget[1], z: camera.defaultTarget[2] },
                    type: camera.type,
                    fov: camera.fov,
                    sceneRotation: { x: camera.sceneRotation[0], y: camera.sceneRotation[1] },
                    controls: {
                        autoRotationSpeed: controls.autoRotationSpeed,
                        damping: controls.damping,
                        enableAutoRotation: controls.enableAutoRotation,
                        enableKeyPan: controls.enableKeyPan,
                        enablePan: controls.enablePan,
                        enableRotation: controls.enableRotation,
                        enableZoom: controls.enableZoom,
                        input: controls.input,
                        keyPanSpeed: controls.keyPanSpeed,
                        movementSmoothness: controls.movementSmoothness,
                        rotationSpeed: controls.rotationSpeed,
                        panSpeed: controls.panSpeed,
                        zoomSpeed: controls.zoomSpeed,
                        restrictions: {
                            position: {
                                cube: {
                                    min: { x: controls.cubePositionRestriction.min[0], y: controls.cubePositionRestriction.min[1], z: controls.cubePositionRestriction.min[2] },
                                    max: { x: controls.cubePositionRestriction.max[0], y: controls.cubePositionRestriction.max[1], z: controls.cubePositionRestriction.max[2] },
                                },
                                sphere: {
                                    center: { x: controls.spherePositionRestriction.center[0], y: controls.spherePositionRestriction.center[1], z: controls.spherePositionRestriction.center[2] },
                                    radius: controls.spherePositionRestriction.radius,
                                },
                            },
                            target: {
                                cube: {
                                    min: { x: controls.cubeTargetRestriction.min[0], y: controls.cubeTargetRestriction.min[1], z: controls.cubeTargetRestriction.min[2] },
                                    max: { x: controls.cubeTargetRestriction.max[0], y: controls.cubeTargetRestriction.max[1], z: controls.cubeTargetRestriction.max[2] },
                                },
                                sphere: {
                                    center: { x: controls.sphereTargetRestriction.center[0], y: controls.sphereTargetRestriction.center[1], z: controls.sphereTargetRestriction.center[2] },
                                    radius: controls.sphereTargetRestriction.radius,
                                },
                            },
                            rotation: controls.rotationRestriction,
                            zoom: controls.zoomRestriction,
                        },
                        enableAzimuthRotation: controls.enableAzimuthRotation,
                        enablePolarRotation: controls.enablePolarRotation,
                        enableObjectControls: controls.enableObjectControls,
                        enableTurntableControls: controls.enableTurntableControls,
                        turntableCenter: { x: controls.turntableCenter[0], y: controls.turntableCenter[1], z: controls.turntableCenter[2] },
                        objectControlsCenter: { x: controls.objectControlsCenter[0], y: controls.objectControlsCenter[1], z: controls.objectControlsCenter[2] },
                    }
                };
            }
            else {
                if (settingsEngine.camera.cameras[camera.id]) {
                    const previousDirection = settingsEngine.camera.cameras[camera.id].type;
                    // if the direction changed, but the default position & target did not, there is an issue
                    if (previousDirection !== camera.type && (settingsEngine.camera.cameras[camera.id].position.x === camera.defaultPosition[0] &&
                        settingsEngine.camera.cameras[camera.id].position.y === camera.defaultPosition[1] &&
                        settingsEngine.camera.cameras[camera.id].position.z === camera.defaultPosition[2] &&
                        settingsEngine.camera.cameras[camera.id].target.x === camera.defaultTarget[0] &&
                        settingsEngine.camera.cameras[camera.id].target.y === camera.defaultTarget[1] &&
                        settingsEngine.camera.cameras[camera.id].target.z === camera.defaultTarget[2])) {
                        camera.defaultPosition = gl_matrix_1.vec3.clone(camera.position);
                        camera.defaultTarget = gl_matrix_1.vec3.clone(camera.target);
                    }
                }
                const controls = camera.controls;
                settingsEngine.camera.cameras[camera.id] = {
                    name: camera.name,
                    autoAdjust: camera.autoAdjust,
                    cameraMovementDuration: camera.cameraMovementDuration,
                    enableCameraControls: camera.enableCameraControls,
                    revertAtMouseUp: camera.revertAtMouseUp,
                    revertAtMouseUpDuration: camera.revertAtMouseUpDuration,
                    zoomExtentsFactor: camera.zoomExtentsFactor,
                    position: { x: camera.defaultPosition[0], y: camera.defaultPosition[1], z: camera.defaultPosition[2] },
                    target: { x: camera.defaultTarget[0], y: camera.defaultTarget[1], z: camera.defaultTarget[2] },
                    type: camera.direction,
                    sceneRotation: { x: camera.sceneRotation[0], y: camera.sceneRotation[1] },
                    controls: {
                        autoRotationSpeed: controls.autoRotationSpeed,
                        damping: controls.damping,
                        enableAutoRotation: controls.enableAutoRotation,
                        enableKeyPan: controls.enableKeyPan,
                        enablePan: controls.enablePan,
                        enableRotation: controls.enableRotation,
                        enableZoom: controls.enableZoom,
                        input: controls.input,
                        keyPanSpeed: controls.keyPanSpeed,
                        movementSmoothness: controls.movementSmoothness,
                        rotationSpeed: controls.rotationSpeed,
                        panSpeed: controls.panSpeed,
                        zoomSpeed: controls.zoomSpeed,
                        restrictions: {
                            position: {
                                cube: {
                                    min: { x: controls.cubePositionRestriction.min[0], y: controls.cubePositionRestriction.min[1], z: controls.cubePositionRestriction.min[2] },
                                    max: { x: controls.cubePositionRestriction.max[0], y: controls.cubePositionRestriction.max[1], z: controls.cubePositionRestriction.max[2] },
                                },
                                sphere: {
                                    center: { x: controls.spherePositionRestriction.center[0], y: controls.spherePositionRestriction.center[1], z: controls.spherePositionRestriction.center[2] },
                                    radius: controls.spherePositionRestriction.radius,
                                },
                            },
                            target: {
                                cube: {
                                    min: { x: controls.cubeTargetRestriction.min[0], y: controls.cubeTargetRestriction.min[1], z: controls.cubeTargetRestriction.min[2] },
                                    max: { x: controls.cubeTargetRestriction.max[0], y: controls.cubeTargetRestriction.max[1], z: controls.cubeTargetRestriction.max[2] },
                                },
                                sphere: {
                                    center: { x: controls.sphereTargetRestriction.center[0], y: controls.sphereTargetRestriction.center[1], z: controls.sphereTargetRestriction.center[2] },
                                    radius: controls.sphereTargetRestriction.radius,
                                },
                            },
                            rotation: controls.rotationRestriction,
                            zoom: controls.zoomRestriction,
                        },
                        enableAzimuthRotation: controls.enableAzimuthRotation,
                        enablePolarRotation: controls.enablePolarRotation,
                        enableObjectControls: controls.enableObjectControls,
                        enableTurntableControls: controls.enableTurntableControls,
                        turntableCenter: { x: controls.turntableCenter[0], y: controls.turntableCenter[1], z: controls.turntableCenter[2] },
                        objectControlsCenter: { x: controls.objectControlsCenter[0], y: controls.objectControlsCenter[1], z: controls.objectControlsCenter[2] },
                    }
                };
            }
        }
    }
    // #endregion Public Methods (8)
    // #region Private Methods (1)
    searchForNewCameras() {
        const getCameraData = (node) => {
            for (let i = 0; i < node.data.length; i++)
                if ((node.data[i] instanceof AbstractCamera_1.AbstractCamera) && !this._cameras[node.data[i].id]) {
                    const camera = node.data[i];
                    if (camera.viewportId === this._renderingEngine.id)
                        this._cameras[camera.id] = camera;
                }
            for (let i = 0; i < node.children.length; i++)
                getCameraData(node.children[i]);
        };
        getCameraData(this._tree.root);
        if (this._update)
            this._update();
    }
}
exports.CameraEngine = CameraEngine;
//# sourceMappingURL=CameraEngine.js.map

/***/ }),

/***/ 26153:
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
var _AbstractCamera_active, _AbstractCamera_autoAdjust, _AbstractCamera_cameraMovementDuration, _AbstractCamera_defaultPosition, _AbstractCamera_defaultTarget, _AbstractCamera_domEventListenerToken, _AbstractCamera_enableCameraControls, _AbstractCamera_far, _AbstractCamera_name, _AbstractCamera_near, _AbstractCamera_node, _AbstractCamera_order, _AbstractCamera_revertAtMouseUp, _AbstractCamera_revertAtMouseUpDuration, _AbstractCamera_sceneRotation, _AbstractCamera_useNodeData, _AbstractCamera_zoomExtentsFactor;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractCamera = void 0;
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const viewer_shared_math_1 = __webpack_require__(67275);
const gl_matrix_1 = __webpack_require__(61961);
const viewer_shared_services_1 = __webpack_require__(8389);
class AbstractCamera extends viewer_shared_node_tree_1.AbstractTreeNodeData {
    // #endregion Properties (24)
    // #region Constructors (1)
    constructor(_id, _type, version, _isDefault = false) {
        super(_id, version);
        this._id = _id;
        this._type = _type;
        this._isDefault = _isDefault;
        // #region Properties (24)
        _AbstractCamera_active.set(this, false);
        _AbstractCamera_autoAdjust.set(this, true);
        _AbstractCamera_cameraMovementDuration.set(this, 800);
        _AbstractCamera_defaultPosition.set(this, gl_matrix_1.vec3.create());
        _AbstractCamera_defaultTarget.set(this, gl_matrix_1.vec3.create());
        _AbstractCamera_domEventListenerToken.set(this, void 0);
        _AbstractCamera_enableCameraControls.set(this, true);
        _AbstractCamera_far.set(this, 1000);
        _AbstractCamera_name.set(this, void 0);
        _AbstractCamera_near.set(this, 1);
        _AbstractCamera_node.set(this, void 0);
        _AbstractCamera_order.set(this, void 0);
        _AbstractCamera_revertAtMouseUp.set(this, false);
        _AbstractCamera_revertAtMouseUpDuration.set(this, 800);
        _AbstractCamera_sceneRotation.set(this, gl_matrix_1.vec2.create());
        _AbstractCamera_useNodeData.set(this, false);
        _AbstractCamera_zoomExtentsFactor.set(this, 1);
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._stateEngine = viewer_shared_services_1.StateEngine.instance;
        this._boundingBox = new viewer_shared_math_1.Box();
        this._position = gl_matrix_1.vec3.create();
        this._target = gl_matrix_1.vec3.create();
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (43)
    get active() {
        return __classPrivateFieldGet(this, _AbstractCamera_active, "f");
    }
    set active(value) {
        __classPrivateFieldSet(this, _AbstractCamera_active, value, "f");
    }
    get autoAdjust() {
        return __classPrivateFieldGet(this, _AbstractCamera_autoAdjust, "f");
    }
    set autoAdjust(value) {
        __classPrivateFieldSet(this, _AbstractCamera_autoAdjust, value, "f");
    }
    set boundingBox(value) {
        this._boundingBox = value;
    }
    get cameraMovementDuration() {
        return __classPrivateFieldGet(this, _AbstractCamera_cameraMovementDuration, "f");
    }
    set cameraMovementDuration(value) {
        __classPrivateFieldSet(this, _AbstractCamera_cameraMovementDuration, value, "f");
    }
    get controls() {
        return this._controls;
    }
    get defaultPosition() {
        return __classPrivateFieldGet(this, _AbstractCamera_defaultPosition, "f");
    }
    set defaultPosition(value) {
        __classPrivateFieldSet(this, _AbstractCamera_defaultPosition, value, "f");
    }
    get defaultTarget() {
        return __classPrivateFieldGet(this, _AbstractCamera_defaultTarget, "f");
    }
    set defaultTarget(value) {
        __classPrivateFieldSet(this, _AbstractCamera_defaultTarget, value, "f");
    }
    get domEventListenerToken() {
        return __classPrivateFieldGet(this, _AbstractCamera_domEventListenerToken, "f");
    }
    set domEventListenerToken(value) {
        __classPrivateFieldSet(this, _AbstractCamera_domEventListenerToken, value, "f");
    }
    get enableCameraControls() {
        return __classPrivateFieldGet(this, _AbstractCamera_enableCameraControls, "f");
    }
    set enableCameraControls(value) {
        __classPrivateFieldSet(this, _AbstractCamera_enableCameraControls, value, "f");
    }
    get far() {
        return __classPrivateFieldGet(this, _AbstractCamera_far, "f");
    }
    set far(value) {
        __classPrivateFieldSet(this, _AbstractCamera_far, value, "f");
    }
    get id() {
        return this._id;
    }
    get isDefault() {
        return this._isDefault;
    }
    get name() {
        return __classPrivateFieldGet(this, _AbstractCamera_name, "f");
    }
    set name(value) {
        __classPrivateFieldSet(this, _AbstractCamera_name, value, "f");
    }
    get near() {
        return __classPrivateFieldGet(this, _AbstractCamera_near, "f");
    }
    set near(value) {
        __classPrivateFieldSet(this, _AbstractCamera_near, value, "f");
    }
    get node() {
        return __classPrivateFieldGet(this, _AbstractCamera_node, "f");
    }
    set node(value) {
        __classPrivateFieldSet(this, _AbstractCamera_node, value, "f");
    }
    get order() {
        return __classPrivateFieldGet(this, _AbstractCamera_order, "f");
    }
    set order(value) {
        __classPrivateFieldSet(this, _AbstractCamera_order, value, "f");
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
        this._controls.position = value;
    }
    get revertAtMouseUp() {
        return __classPrivateFieldGet(this, _AbstractCamera_revertAtMouseUp, "f");
    }
    set revertAtMouseUp(value) {
        __classPrivateFieldSet(this, _AbstractCamera_revertAtMouseUp, value, "f");
    }
    get revertAtMouseUpDuration() {
        return __classPrivateFieldGet(this, _AbstractCamera_revertAtMouseUpDuration, "f");
    }
    set revertAtMouseUpDuration(value) {
        __classPrivateFieldSet(this, _AbstractCamera_revertAtMouseUpDuration, value, "f");
    }
    get sceneRotation() {
        return __classPrivateFieldGet(this, _AbstractCamera_sceneRotation, "f");
    }
    set sceneRotation(value) {
        __classPrivateFieldSet(this, _AbstractCamera_sceneRotation, value, "f");
    }
    get target() {
        return this._target;
    }
    set target(value) {
        this._target = value;
        this._controls.target = value;
    }
    get type() {
        return this._type;
    }
    get useNodeData() {
        return __classPrivateFieldGet(this, _AbstractCamera_useNodeData, "f");
    }
    set useNodeData(value) {
        __classPrivateFieldSet(this, _AbstractCamera_useNodeData, value, "f");
    }
    get viewportId() {
        return this._viewportId;
    }
    get zoomExtentsFactor() {
        return __classPrivateFieldGet(this, _AbstractCamera_zoomExtentsFactor, "f");
    }
    set zoomExtentsFactor(value) {
        __classPrivateFieldSet(this, _AbstractCamera_zoomExtentsFactor, value, "f");
    }
    // #endregion Public Getters And Setters (43)
    // #region Public Methods (5)
    animate(path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (path.length === 0)
                return Promise.resolve(false);
            if (!options)
                options = {};
            options.duration = options.duration >= 0 ? options.duration : this.cameraMovementDuration;
            const res = yield this._controls.animate(path, options);
            if (res) {
                this._position = this._controls.position;
                this._target = this._controls.target;
            }
            return res;
        });
    }
    reset(options) {
        if ((this.defaultPosition[0] === 0 && this.defaultPosition[1] === 0 && this.defaultPosition[2] === 0) && (this.defaultTarget[0] === 0 && this.defaultTarget[1] === 0 && this.defaultTarget[2] === 0)) {
            return this.zoomTo(undefined, options);
        }
        else {
            return this.set(gl_matrix_1.vec3.clone(this.defaultPosition), gl_matrix_1.vec3.clone(this.defaultTarget), options);
        }
    }
    set(position, target, options) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!options)
                options = {};
            options.duration = options.duration >= 0 ? options.duration : this.cameraMovementDuration;
            const res = yield this._controls.animate([
                { position: gl_matrix_1.vec3.clone(this.position), target: gl_matrix_1.vec3.clone(this.target) },
                { position, target }
            ], options);
            if (res) {
                this._position = this._controls.position;
                this._target = this._controls.target;
            }
            return res;
        });
    }
    update(time) {
        if (this.useNodeData && this.node && this._viewportId) {
            return true;
        }
        else {
            const { position, target, sceneRotation } = this._controls.update(time);
            let changed = true;
            if (gl_matrix_1.vec3.equals(position, this.position) && gl_matrix_1.vec3.equals(target, this.target))
                changed = false;
            this.position = gl_matrix_1.vec3.clone(position);
            this.target = gl_matrix_1.vec3.clone(target);
            this.sceneRotation = gl_matrix_1.vec2.clone(sceneRotation);
            return changed;
        }
    }
    zoomTo(zoomTarget, options) {
        const { position, target } = this.calculateZoomTo(zoomTarget);
        return this.set(position, target, options);
    }
    // #endregion Public Abstract Methods (5)
    // #region Protected Methods (1)
    assignViewerInternal(viewportId) {
        this._viewportId = viewportId;
        this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.SESSION.SESSION_CUSTOMIZED, () => __awaiter(this, void 0, void 0, function* () {
            if (__classPrivateFieldGet(this, _AbstractCamera_autoAdjust, "f") === true) {
                const innerListenerToken = this._eventEngine.addListener(viewer_shared_services_1.EVENTTYPE.VIEWPORT.VIEWPORT_UPDATED, () => __awaiter(this, void 0, void 0, function* () {
                    this.zoomTo();
                    this._eventEngine.removeListener(innerListenerToken);
                }));
            }
        }));
    }
}
exports.AbstractCamera = AbstractCamera;
_AbstractCamera_active = new WeakMap(), _AbstractCamera_autoAdjust = new WeakMap(), _AbstractCamera_cameraMovementDuration = new WeakMap(), _AbstractCamera_defaultPosition = new WeakMap(), _AbstractCamera_defaultTarget = new WeakMap(), _AbstractCamera_domEventListenerToken = new WeakMap(), _AbstractCamera_enableCameraControls = new WeakMap(), _AbstractCamera_far = new WeakMap(), _AbstractCamera_name = new WeakMap(), _AbstractCamera_near = new WeakMap(), _AbstractCamera_node = new WeakMap(), _AbstractCamera_order = new WeakMap(), _AbstractCamera_revertAtMouseUp = new WeakMap(), _AbstractCamera_revertAtMouseUpDuration = new WeakMap(), _AbstractCamera_sceneRotation = new WeakMap(), _AbstractCamera_useNodeData = new WeakMap(), _AbstractCamera_zoomExtentsFactor = new WeakMap();
//# sourceMappingURL=AbstractCamera.js.map

/***/ }),

/***/ 36817:
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
var _OrthographicCamera_converter, _OrthographicCamera_logger, _OrthographicCamera_tree, _OrthographicCamera_bottom, _OrthographicCamera_direction, _OrthographicCamera_domEventEngine, _OrthographicCamera_left, _OrthographicCamera_right, _OrthographicCamera_top, _OrthographicCamera_up;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrthographicCamera = void 0;
const AbstractCamera_1 = __webpack_require__(26153);
const ICameraEngine_1 = __webpack_require__(23564);
const IOrthographicCamera_1 = __webpack_require__(49578);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const gl_matrix_1 = __webpack_require__(61961);
const OrthographicCameraControls_1 = __webpack_require__(45080);
const viewer_shared_services_1 = __webpack_require__(8389);
class OrthographicCamera extends AbstractCamera_1.AbstractCamera {
    // #endregion Properties (11)
    // #region Constructors (1)
    constructor(id, version, isDefault = false) {
        super(id, ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC, version, isDefault);
        // #region Properties (11)
        _OrthographicCamera_converter.set(this, viewer_shared_services_1.Converter.instance);
        _OrthographicCamera_logger.set(this, viewer_shared_services_1.Logger.instance);
        _OrthographicCamera_tree.set(this, viewer_shared_node_tree_1.Tree.instance);
        _OrthographicCamera_bottom.set(this, -100);
        _OrthographicCamera_direction.set(this, IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.CUSTOM);
        _OrthographicCamera_domEventEngine.set(this, void 0);
        _OrthographicCamera_left.set(this, -100);
        _OrthographicCamera_right.set(this, 100);
        _OrthographicCamera_top.set(this, 100);
        _OrthographicCamera_up.set(this, gl_matrix_1.vec3.fromValues(0, 0, 1));
        this._controls = new OrthographicCameraControls_1.OrthographicCameraControls(this, true);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (14)
    get bottom() {
        return __classPrivateFieldGet(this, _OrthographicCamera_bottom, "f");
    }
    set bottom(value) {
        __classPrivateFieldSet(this, _OrthographicCamera_bottom, value, "f");
    }
    get controls() {
        return this._controls;
    }
    set controls(value) {
        this._controls = value;
    }
    get direction() {
        return __classPrivateFieldGet(this, _OrthographicCamera_direction, "f");
    }
    set direction(value) {
        const changedDirection = __classPrivateFieldGet(this, _OrthographicCamera_direction, "f") !== value;
        __classPrivateFieldSet(this, _OrthographicCamera_direction, value, "f");
        switch (__classPrivateFieldGet(this, _OrthographicCamera_direction, "f")) {
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.TOP:
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BOTTOM:
                this.up = gl_matrix_1.vec3.fromValues(0, 1, 0);
                break;
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.RIGHT:
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.LEFT:
                this.up = gl_matrix_1.vec3.fromValues(0, 0, 1);
                break;
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BACK:
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.FRONT:
                this.up = gl_matrix_1.vec3.fromValues(0, 0, 1);
                break;
            default:
                this.up = gl_matrix_1.vec3.fromValues(0, 0, 1);
        }
        if (changedDirection) {
            const { position, target } = this.calculateZoomTo(undefined);
            this.defaultPosition = gl_matrix_1.vec3.clone(position);
            this.defaultTarget = gl_matrix_1.vec3.clone(target);
            this.position = gl_matrix_1.vec3.clone(position);
            this.target = gl_matrix_1.vec3.clone(target);
        }
    }
    get left() {
        return __classPrivateFieldGet(this, _OrthographicCamera_left, "f");
    }
    set left(value) {
        __classPrivateFieldSet(this, _OrthographicCamera_left, value, "f");
    }
    get right() {
        return __classPrivateFieldGet(this, _OrthographicCamera_right, "f");
    }
    set right(value) {
        __classPrivateFieldSet(this, _OrthographicCamera_right, value, "f");
    }
    get top() {
        return __classPrivateFieldGet(this, _OrthographicCamera_top, "f");
    }
    set top(value) {
        __classPrivateFieldSet(this, _OrthographicCamera_top, value, "f");
    }
    get up() {
        return __classPrivateFieldGet(this, _OrthographicCamera_up, "f");
    }
    set up(value) {
        __classPrivateFieldSet(this, _OrthographicCamera_up, value, "f");
    }
    // #endregion Public Getters And Setters (14)
    // #region Public Methods (6)
    applySettings(settingsEngine) {
        var _a;
        const cameraSetting = settingsEngine.camera.cameras[this.id];
        if (cameraSetting) {
            this.name = cameraSetting.name;
            this.autoAdjust = cameraSetting.autoAdjust;
            this.cameraMovementDuration = cameraSetting.cameraMovementDuration;
            this.enableCameraControls = cameraSetting.enableCameraControls;
            this.revertAtMouseUp = cameraSetting.revertAtMouseUp;
            this.revertAtMouseUpDuration = cameraSetting.revertAtMouseUpDuration;
            this.sceneRotation = gl_matrix_1.vec2.fromValues(cameraSetting.sceneRotation.x, cameraSetting.sceneRotation.y);
            this.zoomExtentsFactor = cameraSetting.zoomExtentsFactor;
            const position = __classPrivateFieldGet(this, _OrthographicCamera_converter, "f").toVec3(cameraSetting.position);
            const target = __classPrivateFieldGet(this, _OrthographicCamera_converter, "f").toVec3(cameraSetting.target);
            this.defaultPosition = gl_matrix_1.vec3.clone(position);
            this.defaultTarget = gl_matrix_1.vec3.clone(target);
            this.position = position;
            this.target = target;
        }
        if (this.position[0] === this.target[0] && this.position[1] === this.target[1] && this.position[2] === this.target[2]) {
            if (this._viewportId) {
                (_a = this._stateEngine.viewportEngines[this._viewportId]) === null || _a === void 0 ? void 0 : _a.boundingBoxCreated.then(() => __awaiter(this, void 0, void 0, function* () {
                    yield this.zoomTo(undefined, { duration: 0 });
                    this.defaultPosition = gl_matrix_1.vec3.clone(this._controls.position);
                    this.defaultTarget = gl_matrix_1.vec3.clone(this._controls.target);
                }));
            }
        }
        this._controls.applySettings(settingsEngine);
    }
    assignViewer(renderingEngine) {
        var _a;
        if (renderingEngine.closed)
            throw new viewer_shared_services_1.ShapeDiverViewerCameraError(`OrthographicCamera(${this.id}).assignViewer: Viewer with id ${renderingEngine.id} not found.`);
        this.assignViewerInternal(renderingEngine.id);
        this._controls.assignViewer(renderingEngine.id, renderingEngine.canvas);
        if (this.domEventListenerToken && __classPrivateFieldGet(this, _OrthographicCamera_domEventEngine, "f"))
            __classPrivateFieldGet(this, _OrthographicCamera_domEventEngine, "f").removeDomEventListener(this.domEventListenerToken);
        __classPrivateFieldSet(this, _OrthographicCamera_domEventEngine, renderingEngine.domEventEngine, "f");
        this.domEventListenerToken = __classPrivateFieldGet(this, _OrthographicCamera_domEventEngine, "f").addDomEventListener(this._controls.cameraControlsEventDistribution);
        this.boundingBox = __classPrivateFieldGet(this, _OrthographicCamera_tree, "f").root.boundingBox.clone();
        (_a = this._stateEngine.viewportEngines[renderingEngine.id]) === null || _a === void 0 ? void 0 : _a.boundingBoxCreated.then(() => __awaiter(this, void 0, void 0, function* () {
            if (this.position[0] === this.target[0] && this.position[1] === this.target[1] && this.position[2] === this.target[2])
                yield this.zoomTo(undefined, { duration: 0 });
        }));
    }
    calculateZoomTo(zoomTarget, startingPosition = this.position, startingTarget = this.target) {
        let box;
        // Part 1 - calculate the bounding box that we should zoom to
        if (!zoomTarget) {
            // complete scene
            box = this._boundingBox.clone();
        }
        else {
            // specified Box
            box = zoomTarget.clone();
        }
        if (box.isEmpty())
            return { position: gl_matrix_1.vec3.create(), target: gl_matrix_1.vec3.create() };
        const target = gl_matrix_1.vec3.fromValues((box.max[0] + box.min[0]) / 2, (box.max[1] + box.min[1]) / 2, (box.max[2] + box.min[2]) / 2);
        if (startingPosition[0] === startingTarget[0] && startingPosition[1] === startingTarget[1] && startingPosition[2] === startingTarget[2])
            startingPosition = gl_matrix_1.vec3.fromValues(target[0], target[1] - 7.5, target[2] + 5);
        const factor = 2 * box.boundingSphere.radius * this.zoomExtentsFactor;
        switch (__classPrivateFieldGet(this, _OrthographicCamera_direction, "f")) {
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.TOP:
                return {
                    position: gl_matrix_1.vec3.fromValues(target[0], target[1], target[2] + factor),
                    target: gl_matrix_1.vec3.clone(target)
                };
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BOTTOM:
                return {
                    position: gl_matrix_1.vec3.fromValues(target[0], target[1], target[2] - factor),
                    target: gl_matrix_1.vec3.clone(target)
                };
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.RIGHT:
                return {
                    position: gl_matrix_1.vec3.fromValues(target[0] + factor, target[1], target[2]),
                    target: gl_matrix_1.vec3.clone(target)
                };
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.LEFT:
                return {
                    position: gl_matrix_1.vec3.fromValues(target[0] - factor, target[1], target[2]),
                    target: gl_matrix_1.vec3.clone(target)
                };
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.BACK:
                return {
                    position: gl_matrix_1.vec3.fromValues(target[0], target[1] + factor, target[2]),
                    target: gl_matrix_1.vec3.clone(target)
                };
            case IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.FRONT:
                return {
                    position: gl_matrix_1.vec3.fromValues(target[0], target[1] - factor, target[2]),
                    target: gl_matrix_1.vec3.clone(target)
                };
            default:
                {
                    // get the direction from the starting position to the starting target
                    const direction = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), startingPosition, target);
                    // normalize the direction
                    gl_matrix_1.vec3.normalize(direction, direction);
                    // get the new position
                    return {
                        position: gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), target, gl_matrix_1.vec3.scale(gl_matrix_1.vec3.create(), direction, factor)),
                        target: gl_matrix_1.vec3.clone(target)
                    };
                }
        }
    }
    clone() {
        return new OrthographicCamera(this.id, this.version);
    }
    project(pos) {
        const m = gl_matrix_1.mat4.targetTo(gl_matrix_1.mat4.create(), this.position, this.target, this.up);
        const p = gl_matrix_1.mat4.ortho(gl_matrix_1.mat4.create(), this.left, this.right, this.bottom, this.top, this.near, this.far);
        let inverse = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), m);
        if (!inverse)
            inverse = gl_matrix_1.mat4.create();
        gl_matrix_1.vec3.transformMat4(pos, pos, inverse);
        gl_matrix_1.vec3.transformMat4(pos, pos, p);
        return gl_matrix_1.vec2.fromValues(pos[0], pos[1]);
    }
    unproject(pos) {
        const m = gl_matrix_1.mat4.targetTo(gl_matrix_1.mat4.create(), this.position, this.target, this.up);
        const p = gl_matrix_1.mat4.ortho(gl_matrix_1.mat4.create(), this.left, this.right, this.bottom, this.top, this.near, this.far);
        let inverse = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), p);
        if (!inverse)
            inverse = gl_matrix_1.mat4.create();
        gl_matrix_1.vec3.transformMat4(pos, pos, inverse);
        gl_matrix_1.vec3.transformMat4(pos, pos, m);
        return gl_matrix_1.vec3.clone(pos);
    }
}
exports.OrthographicCamera = OrthographicCamera;
_OrthographicCamera_converter = new WeakMap(), _OrthographicCamera_logger = new WeakMap(), _OrthographicCamera_tree = new WeakMap(), _OrthographicCamera_bottom = new WeakMap(), _OrthographicCamera_direction = new WeakMap(), _OrthographicCamera_domEventEngine = new WeakMap(), _OrthographicCamera_left = new WeakMap(), _OrthographicCamera_right = new WeakMap(), _OrthographicCamera_top = new WeakMap(), _OrthographicCamera_up = new WeakMap();
//# sourceMappingURL=OrthographicCamera.js.map

/***/ }),

/***/ 80187:
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
var _PerspectiveCamera_converter, _PerspectiveCamera_tree, _PerspectiveCamera_aspect, _PerspectiveCamera_domEventEngine, _PerspectiveCamera_fov;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerspectiveCamera = void 0;
const AbstractCamera_1 = __webpack_require__(26153);
const viewer_shared_math_1 = __webpack_require__(67275);
const ICameraEngine_1 = __webpack_require__(23564);
const viewer_shared_node_tree_1 = __webpack_require__(41652);
const gl_matrix_1 = __webpack_require__(61961);
const PerspectiveCameraControls_1 = __webpack_require__(85092);
const viewer_shared_services_1 = __webpack_require__(8389);
class PerspectiveCamera extends AbstractCamera_1.AbstractCamera {
    // #endregion Properties (6)
    // #region Constructors (1)
    constructor(id, version, initialAspect, isDefault = false) {
        super(id, ICameraEngine_1.CAMERA_TYPE.PERSPECTIVE, version, isDefault);
        // #region Properties (6)
        _PerspectiveCamera_converter.set(this, viewer_shared_services_1.Converter.instance);
        _PerspectiveCamera_tree.set(this, viewer_shared_node_tree_1.Tree.instance);
        _PerspectiveCamera_aspect.set(this, void 0);
        _PerspectiveCamera_domEventEngine.set(this, void 0);
        _PerspectiveCamera_fov.set(this, 60);
        __classPrivateFieldSet(this, _PerspectiveCamera_aspect, initialAspect, "f");
        this._controls = new PerspectiveCameraControls_1.PerspectiveCameraControls(this, true);
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (6)
    get aspect() {
        return __classPrivateFieldGet(this, _PerspectiveCamera_aspect, "f");
    }
    set aspect(value) {
        __classPrivateFieldSet(this, _PerspectiveCamera_aspect, value, "f");
    }
    get controls() {
        return this._controls;
    }
    set controls(value) {
        this._controls = value;
    }
    get fov() {
        return __classPrivateFieldGet(this, _PerspectiveCamera_fov, "f");
    }
    set fov(value) {
        __classPrivateFieldSet(this, _PerspectiveCamera_fov, value, "f");
    }
    // #endregion Public Getters And Setters (6)
    // #region Public Methods (6)
    applySettings(settingsEngine) {
        var _a;
        const cameraSetting = settingsEngine.camera.cameras[this.id];
        if (cameraSetting) {
            this.name = cameraSetting.name;
            this.autoAdjust = cameraSetting.autoAdjust;
            this.cameraMovementDuration = cameraSetting.cameraMovementDuration;
            this.enableCameraControls = cameraSetting.enableCameraControls;
            this.revertAtMouseUp = cameraSetting.revertAtMouseUp;
            this.revertAtMouseUpDuration = cameraSetting.revertAtMouseUpDuration;
            this.sceneRotation = gl_matrix_1.vec2.fromValues(cameraSetting.sceneRotation.x, cameraSetting.sceneRotation.y);
            this.zoomExtentsFactor = cameraSetting.zoomExtentsFactor;
            const position = __classPrivateFieldGet(this, _PerspectiveCamera_converter, "f").toVec3(cameraSetting.position);
            const target = __classPrivateFieldGet(this, _PerspectiveCamera_converter, "f").toVec3(cameraSetting.target);
            this.defaultPosition = gl_matrix_1.vec3.clone(position);
            this.defaultTarget = gl_matrix_1.vec3.clone(target);
            this.position = position;
            this.target = target;
            this.fov = cameraSetting.fov;
        }
        if (this.position[0] === this.target[0] && this.position[1] === this.target[1] && this.position[2] === this.target[2]) {
            if (this._viewportId) {
                (_a = this._stateEngine.viewportEngines[this._viewportId]) === null || _a === void 0 ? void 0 : _a.boundingBoxCreated.then(() => __awaiter(this, void 0, void 0, function* () {
                    yield this.zoomTo(undefined, { duration: 0 });
                    this.defaultPosition = gl_matrix_1.vec3.clone(this._controls.position);
                    this.defaultTarget = gl_matrix_1.vec3.clone(this._controls.target);
                }));
            }
        }
        this._controls.applySettings(settingsEngine);
    }
    assignViewer(renderingEngine) {
        var _a;
        if (renderingEngine.closed)
            throw new viewer_shared_services_1.ShapeDiverViewerCameraError(`OrthographicCamera(${this.id}).assignViewer: Viewer with id ${renderingEngine.id} not found.`);
        this.assignViewerInternal(renderingEngine.id);
        this._controls.assignViewer(renderingEngine.id, renderingEngine.canvas);
        if (this.domEventListenerToken && __classPrivateFieldGet(this, _PerspectiveCamera_domEventEngine, "f"))
            __classPrivateFieldGet(this, _PerspectiveCamera_domEventEngine, "f").removeDomEventListener(this.domEventListenerToken);
        __classPrivateFieldSet(this, _PerspectiveCamera_domEventEngine, renderingEngine.domEventEngine, "f");
        this.domEventListenerToken = __classPrivateFieldGet(this, _PerspectiveCamera_domEventEngine, "f").addDomEventListener(this._controls.cameraControlsEventDistribution);
        this.boundingBox = __classPrivateFieldGet(this, _PerspectiveCamera_tree, "f").root.boundingBox.clone();
        (_a = this._stateEngine.viewportEngines[renderingEngine.id]) === null || _a === void 0 ? void 0 : _a.boundingBoxCreated.then(() => __awaiter(this, void 0, void 0, function* () {
            if (this.position[0] === this.target[0] && this.position[1] === this.target[1] && this.position[2] === this.target[2])
                yield this.zoomTo(undefined, { duration: 0 });
        }));
    }
    calculateZoomTo(zoomTarget, startingPosition = this.position, startingTarget = this.target) {
        let box;
        // Part 1 - calculate the bounding box that we should zoom to
        if (!zoomTarget) {
            // complete scene
            box = this._boundingBox.clone();
        }
        else {
            // specified Box
            box = zoomTarget.clone();
        }
        if (box.isEmpty())
            return { position: gl_matrix_1.vec3.create(), target: gl_matrix_1.vec3.create() };
        const samePosition = startingPosition[0] === startingTarget[0] && startingPosition[1] === startingTarget[1] && startingPosition[2] === startingTarget[2];
        const target = gl_matrix_1.vec3.fromValues((box.max[0] + box.min[0]) / 2, (box.max[1] + box.min[1]) / 2, (box.max[2] + box.min[2]) / 2);
        // if the camera position and the target are the same, we set a corner position
        if (startingPosition[0] === startingTarget[0] && startingPosition[1] === startingTarget[1] && startingPosition[2] === startingTarget[2])
            startingPosition = gl_matrix_1.vec3.fromValues(target[0], target[1] - 7.5, target[2] + 5);
        // extend box by the factor
        const boxDir = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), box.max, target);
        gl_matrix_1.vec3.multiply(boxDir, boxDir, samePosition ? gl_matrix_1.vec3.fromValues(2, 2, 2) : gl_matrix_1.vec3.fromValues(this.zoomExtentsFactor, this.zoomExtentsFactor, this.zoomExtentsFactor));
        box = new viewer_shared_math_1.Box(gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), target, boxDir), gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), target, boxDir));
        const direction = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), target, startingPosition));
        const cross = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(0, 0, 1), direction));
        const up = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), cross, direction));
        let position = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), target, gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), direction, gl_matrix_1.vec3.fromValues(-0.00000001, -0.00000001, -0.00000001)));
        const points = [];
        points.push(gl_matrix_1.vec3.fromValues(box.min[0], box.min[1], box.min[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.min[0], box.min[1], box.max[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.min[0], box.max[1], box.min[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.min[0], box.max[1], box.max[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.max[0], box.min[1], box.min[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.max[0], box.min[1], box.max[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.max[0], box.max[1], box.min[2]));
        points.push(gl_matrix_1.vec3.fromValues(box.max[0], box.max[1], box.max[2]));
        const fovDown = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), direction, gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), cross, (this.fov / 2) * (Math.PI / 180))));
        const fovUp = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), direction, gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), cross, -(this.fov / 2) * (Math.PI / 180))));
        const aspect = samePosition ? 1.5 : this.aspect || 1.5;
        const hFoV = 2 * Math.atan(Math.tan(this.fov * Math.PI / 180 / 2) * aspect);
        const fovRight = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), direction, gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), up, hFoV / 2)));
        const fovLeft = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), direction, gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), up, -hFoV / 2)));
        const planeCross = new viewer_shared_math_1.Plane(gl_matrix_1.vec3.clone(cross), 0);
        planeCross.setFromNormalAndCoplanarPoint(gl_matrix_1.vec3.clone(cross), gl_matrix_1.vec3.clone(target));
        const planeUp = new viewer_shared_math_1.Plane(gl_matrix_1.vec3.fromValues(0, 0, 1), 0);
        planeUp.setFromNormalAndCoplanarPoint(gl_matrix_1.vec3.clone(up), gl_matrix_1.vec3.clone(target));
        let distanceCamera = 0.0;
        for (let i = 0; i < points.length; i++) {
            let projected = planeCross.clampPoint(points[i]);
            let toP = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), projected, position));
            if (gl_matrix_1.vec3.dot(direction, fovDown) > gl_matrix_1.vec3.dot(direction, toP)) {
                const currentDir = gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.dot(fovDown, toP) > gl_matrix_1.vec3.dot(fovUp, toP) ? fovDown : fovUp, gl_matrix_1.vec3.fromValues(-1, -1, -1));
                const distance = planeUp.intersect(projected, currentDir);
                if (distance) {
                    const cameraPoint = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), currentDir, gl_matrix_1.vec3.fromValues(distance, distance, distance)), projected);
                    distanceCamera = Math.max(distanceCamera, gl_matrix_1.vec3.distance(target, cameraPoint));
                }
            }
            projected = planeUp.clampPoint(points[i]);
            toP = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), projected, position));
            if (gl_matrix_1.vec3.dot(direction, fovRight) > gl_matrix_1.vec3.dot(direction, toP)) {
                const currentDir = gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.dot(fovRight, toP) > gl_matrix_1.vec3.dot(fovLeft, toP) ? fovRight : fovLeft, gl_matrix_1.vec3.fromValues(-1, -1, -1));
                const distance = planeCross.intersect(projected, currentDir);
                if (distance) {
                    const cameraPoint = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), currentDir, gl_matrix_1.vec3.fromValues(distance, distance, distance)), projected);
                    distanceCamera = Math.max(distanceCamera, gl_matrix_1.vec3.distance(target, cameraPoint));
                }
            }
        }
        position = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), target, gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), direction, gl_matrix_1.vec3.fromValues(-distanceCamera, -distanceCamera, -distanceCamera)));
        return {
            position, target
        };
    }
    clone() {
        return new PerspectiveCamera(this.id, this.version, this.aspect);
    }
    project(pos, position = this.position, target = this.target) {
        const m = gl_matrix_1.mat4.targetTo(gl_matrix_1.mat4.create(), position, target, gl_matrix_1.vec3.fromValues(0, 0, 1));
        const aspect = this.aspect || 1.5;
        const p = gl_matrix_1.mat4.perspective(gl_matrix_1.mat4.create(), this.fov / (180 / Math.PI), aspect, this.near, this.far);
        let inverse = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), m);
        if (!inverse)
            inverse = gl_matrix_1.mat4.create();
        gl_matrix_1.vec3.transformMat4(pos, pos, inverse);
        gl_matrix_1.vec3.transformMat4(pos, pos, p);
        return gl_matrix_1.vec2.fromValues(pos[0], pos[1]);
    }
    unproject(pos, position = this.position, target = this.target) {
        const m = gl_matrix_1.mat4.targetTo(gl_matrix_1.mat4.create(), position, target, gl_matrix_1.vec3.fromValues(0, 0, 1));
        const aspect = this.aspect || 1.5;
        const p = gl_matrix_1.mat4.perspective(gl_matrix_1.mat4.create(), this.fov / (180 / Math.PI), aspect, this.near, this.far);
        let inverse = gl_matrix_1.mat4.invert(gl_matrix_1.mat4.create(), p);
        if (!inverse)
            inverse = gl_matrix_1.mat4.create();
        gl_matrix_1.vec3.transformMat4(pos, pos, inverse);
        gl_matrix_1.vec3.transformMat4(pos, pos, m);
        return gl_matrix_1.vec3.clone(pos);
    }
}
exports.PerspectiveCamera = PerspectiveCamera;
_PerspectiveCamera_converter = new WeakMap(), _PerspectiveCamera_tree = new WeakMap(), _PerspectiveCamera_aspect = new WeakMap(), _PerspectiveCamera_domEventEngine = new WeakMap(), _PerspectiveCamera_fov = new WeakMap();
//# sourceMappingURL=PerspectiveCamera.js.map

/***/ }),

/***/ 81600:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AbstractCameraControls = void 0;
const CameraInterpolationManager_1 = __webpack_require__(72639);
const viewer_shared_services_1 = __webpack_require__(8389);
const gl_matrix_1 = __webpack_require__(61961);
class AbstractCameraControls {
    // #endregion Properties (38)
    // #region Constructors (1)
    constructor(_camera, _enabled) {
        this._camera = _camera;
        this._enabled = _enabled;
        this._converter = viewer_shared_services_1.Converter.instance;
        this._eventEngine = viewer_shared_services_1.EventEngine.instance;
        this._autoRotationSpeed = 0;
        this._cubePositionRestriction = { min: gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity), max: gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity) };
        this._cubeTargetRestriction = { min: gl_matrix_1.vec3.fromValues(-Infinity, -Infinity, -Infinity), max: gl_matrix_1.vec3.fromValues(Infinity, Infinity, Infinity) };
        this._damping = 0.1;
        this._enableAutoRotation = false;
        this._enableAzimuthRotation = true;
        this._enableKeyPan = false;
        this._enableObjectControls = false;
        this._enablePan = true;
        this._enablePolarRotation = true;
        this._enableRotation = true;
        this._enableTurntableControls = false;
        this._enableZoom = true;
        this._input = { keys: { up: 38, down: 40, left: 37, right: 39 }, mouse: { rotate: 0, zoom: 1, pan: 2 }, touch: { rotate: 1, zoom: 2, pan: 2 }, };
        this._keyPanSpeed = 0.5;
        this._manualInteraction = false;
        this._movementSmoothness = 0.5;
        this._moving = false;
        this._movingDuration = 0;
        this._nonmanualInteraction = false;
        this._objectControlsCenter = gl_matrix_1.vec3.create();
        this._panSpeed = 0.5;
        this._position = gl_matrix_1.vec3.create();
        this._rotationRestriction = { minPolarAngle: 0, maxPolarAngle: 180, minAzimuthAngle: -Infinity, maxAzimuthAngle: Infinity };
        this._rotationSpeed = 0.5;
        this._sceneRotation = gl_matrix_1.vec2.create();
        this._spherePositionRestriction = { center: gl_matrix_1.vec3.create(), radius: Infinity };
        this._sphereTargetRestriction = { center: gl_matrix_1.vec3.create(), radius: Infinity };
        this._target = gl_matrix_1.vec3.create();
        this._turntableCenter = gl_matrix_1.vec3.create();
        this._zoomRestriction = { minDistance: 0, maxDistance: Infinity };
        this._zoomSpeed = 0.5;
        this._cameraInterpolationManager = new CameraInterpolationManager_1.CameraInterpolationManager(this._camera, this);
        this._manualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
        this._nonmanualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
    }
    // #endregion Constructors (1)
    // #region Public Getters And Setters (59)
    get autoRotationSpeed() {
        return this._autoRotationSpeed;
    }
    set autoRotationSpeed(value) {
        this._autoRotationSpeed = value;
    }
    get camera() {
        return this._camera;
    }
    set camera(value) {
        this._camera = value;
    }
    get cameraControlsEventDistribution() {
        return this._cameraControlsEventDistribution;
    }
    get canvas() {
        return this._canvas;
    }
    set canvas(value) {
        this._canvas = value;
    }
    get cubePositionRestriction() {
        return this._cubePositionRestriction;
    }
    set cubePositionRestriction(value) {
        this._cubePositionRestriction = value;
    }
    get cubeTargetRestriction() {
        return this._cubeTargetRestriction;
    }
    set cubeTargetRestriction(value) {
        this._cubeTargetRestriction = value;
    }
    get damping() {
        return this._damping;
    }
    set damping(value) {
        this._damping = value;
    }
    get enableAutoRotation() {
        return this._enableAutoRotation;
    }
    set enableAutoRotation(value) {
        this._enableAutoRotation = value;
    }
    get enableAzimuthRotation() {
        return this._enableAzimuthRotation;
    }
    set enableAzimuthRotation(value) {
        this._enableAzimuthRotation = value;
    }
    get enableKeyPan() {
        return this._enableKeyPan;
    }
    set enableKeyPan(value) {
        this._enableKeyPan = value;
    }
    get enableObjectControls() {
        return this._enableObjectControls;
    }
    set enableObjectControls(value) {
        this._enableObjectControls = value;
    }
    get enablePan() {
        return this._enablePan;
    }
    set enablePan(value) {
        this._enablePan = value;
    }
    get enablePolarRotation() {
        return this._enablePolarRotation;
    }
    set enablePolarRotation(value) {
        this._enablePolarRotation = value;
    }
    get enableRotation() {
        return this._enableRotation;
    }
    set enableRotation(value) {
        this._enableRotation = value;
    }
    get enableTurntableControls() {
        return this._enableTurntableControls;
    }
    set enableTurntableControls(value) {
        this._enableTurntableControls = value;
    }
    get enableZoom() {
        return this._enableZoom;
    }
    set enableZoom(value) {
        this._enableZoom = value;
    }
    get enabled() {
        return this._enabled;
    }
    set enabled(value) {
        if (!value) {
            this._manualInteraction = false;
            this._manualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
            this._nonmanualInteraction = false;
            this._nonmanualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
            this._cameraControlsEventDistribution.reset();
            this._cameraLogic.reset();
        }
        this._enabled = value;
    }
    get input() {
        return this._input;
    }
    set input(value) {
        this._input = value;
    }
    get keyPanSpeed() {
        return this._keyPanSpeed;
    }
    set keyPanSpeed(value) {
        this._keyPanSpeed = value;
    }
    get movementSmoothness() {
        return this._movementSmoothness;
    }
    set movementSmoothness(value) {
        this._movementSmoothness = value;
    }
    get objectControlsCenter() {
        return this._objectControlsCenter;
    }
    set objectControlsCenter(value) {
        this._objectControlsCenter = value;
    }
    get panSpeed() {
        return this._panSpeed;
    }
    set panSpeed(value) {
        this._panSpeed = value;
    }
    get position() {
        return this._position;
    }
    set position(value) {
        this._position = value;
    }
    get rotationRestriction() {
        return this._rotationRestriction;
    }
    set rotationRestriction(value) {
        this._rotationRestriction = value;
    }
    get rotationSpeed() {
        return this._rotationSpeed;
    }
    set rotationSpeed(value) {
        this._rotationSpeed = value;
    }
    get sceneRotation() {
        return this._sceneRotation;
    }
    set sceneRotation(value) {
        this._sceneRotation = value;
    }
    get spherePositionRestriction() {
        return this._spherePositionRestriction;
    }
    set spherePositionRestriction(value) {
        this._spherePositionRestriction = value;
    }
    get sphereTargetRestriction() {
        return this._sphereTargetRestriction;
    }
    set sphereTargetRestriction(value) {
        this._sphereTargetRestriction = value;
    }
    get target() {
        return this._target;
    }
    set target(value) {
        this._target = value;
    }
    get turntableCenter() {
        return this._turntableCenter;
    }
    set turntableCenter(value) {
        this._turntableCenter = value;
    }
    get zoomRestriction() {
        return this._zoomRestriction;
    }
    set zoomRestriction(value) {
        this._zoomRestriction = value;
    }
    get zoomSpeed() {
        return this._zoomSpeed;
    }
    set zoomSpeed(value) {
        this._zoomSpeed = value;
    }
    // #endregion Public Getters And Setters (59)
    // #region Public Methods (16)
    animate(path, options) {
        if (options && options.duration === 0) {
            this._position = path[path.length - 1].position;
            this._target = path[path.length - 1].target;
            return new Promise(resolve => resolve(true));
        }
        this._manualInteraction = false;
        this._manualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
        return this._cameraInterpolationManager.interpolate(path, options);
    }
    applyPositionMatrix(matrix, manualInteraction) {
        if (this._manualInteraction || manualInteraction) {
            this._manualInteraction = true;
            this._manualInteractionTransformations.position.push({ matrix });
        }
        else {
            this._nonmanualInteraction = true;
            this._nonmanualInteractionTransformations.position.push({ matrix });
        }
    }
    applyPositionVector(vector, manualInteraction) {
        if (this._manualInteraction || manualInteraction) {
            this._manualInteraction = true;
            this._manualInteractionTransformations.position.push({ vector });
        }
        else {
            this._nonmanualInteraction = true;
            this._nonmanualInteractionTransformations.position.push({ vector });
        }
    }
    applyRotation(vector, manualInteraction) {
        if (this._manualInteraction || manualInteraction) {
            this._manualInteraction = true;
            this._manualInteractionTransformations.sceneRotation.push({ theta: vector[0], phi: vector[1] });
        }
        else {
            this._nonmanualInteraction = true;
            this._nonmanualInteractionTransformations.sceneRotation.push({ theta: vector[0], phi: vector[1] });
        }
    }
    applySettings(settingsEngine) {
        const cameraSetting = settingsEngine.camera.cameras[this.camera.id];
        if (!cameraSetting)
            return;
        this.reset();
        const controlsSettings = cameraSetting.controls;
        this.autoRotationSpeed = controlsSettings.autoRotationSpeed;
        this.damping = controlsSettings.damping;
        this.enableAutoRotation = controlsSettings.enableAutoRotation;
        this.enableKeyPan = controlsSettings.enableKeyPan;
        this.enablePan = controlsSettings.enablePan;
        this.enableRotation = controlsSettings.enableRotation;
        this.enableZoom = controlsSettings.enableZoom;
        // this.input = controlsSettings.input;
        this.keyPanSpeed = controlsSettings.keyPanSpeed;
        this.movementSmoothness = controlsSettings.movementSmoothness;
        this.rotationSpeed = controlsSettings.rotationSpeed;
        this.panSpeed = controlsSettings.panSpeed;
        this.zoomSpeed = controlsSettings.zoomSpeed;
        this.enableAzimuthRotation = controlsSettings.enableAzimuthRotation;
        this.enablePolarRotation = controlsSettings.enablePolarRotation;
        this.enableTurntableControls = controlsSettings.enableTurntableControls;
        this.enableObjectControls = controlsSettings.enableObjectControls;
        this.turntableCenter = this._converter.toVec3(controlsSettings.turntableCenter);
        this.objectControlsCenter = this._converter.toVec3(controlsSettings.objectControlsCenter);
        if (controlsSettings.restrictions.position.cube.min.x === null)
            controlsSettings.restrictions.position.cube.min.x = -Infinity;
        if (controlsSettings.restrictions.position.cube.min.y === null)
            controlsSettings.restrictions.position.cube.min.y = -Infinity;
        if (controlsSettings.restrictions.position.cube.min.z === null)
            controlsSettings.restrictions.position.cube.min.z = -Infinity;
        if (controlsSettings.restrictions.position.cube.max.x === null)
            controlsSettings.restrictions.position.cube.max.x = Infinity;
        if (controlsSettings.restrictions.position.cube.max.y === null)
            controlsSettings.restrictions.position.cube.max.y = Infinity;
        if (controlsSettings.restrictions.position.cube.max.z === null)
            controlsSettings.restrictions.position.cube.max.z = Infinity;
        if (controlsSettings.restrictions.position.sphere.radius === null)
            controlsSettings.restrictions.position.sphere.radius = Infinity;
        if (controlsSettings.restrictions.target.cube.min.x === null)
            controlsSettings.restrictions.target.cube.min.x = -Infinity;
        if (controlsSettings.restrictions.target.cube.min.y === null)
            controlsSettings.restrictions.target.cube.min.y = -Infinity;
        if (controlsSettings.restrictions.target.cube.min.z === null)
            controlsSettings.restrictions.target.cube.min.z = -Infinity;
        if (controlsSettings.restrictions.target.cube.max.x === null)
            controlsSettings.restrictions.target.cube.max.x = Infinity;
        if (controlsSettings.restrictions.target.cube.max.y === null)
            controlsSettings.restrictions.target.cube.max.y = Infinity;
        if (controlsSettings.restrictions.target.cube.max.z === null)
            controlsSettings.restrictions.target.cube.max.z = Infinity;
        if (controlsSettings.restrictions.target.sphere.radius === null)
            controlsSettings.restrictions.target.sphere.radius = Infinity;
        if (controlsSettings.restrictions.rotation.minAzimuthAngle === null)
            controlsSettings.restrictions.rotation.minAzimuthAngle = -Infinity;
        if (controlsSettings.restrictions.rotation.maxAzimuthAngle === null)
            controlsSettings.restrictions.rotation.maxAzimuthAngle = Infinity;
        if (controlsSettings.restrictions.zoom.maxDistance === null)
            controlsSettings.restrictions.zoom.maxDistance = Infinity;
        this.cubePositionRestriction = {
            min: this._converter.toVec3(controlsSettings.restrictions.position.cube.min),
            max: this._converter.toVec3(controlsSettings.restrictions.position.cube.max)
        };
        this.spherePositionRestriction = {
            center: this._converter.toVec3(controlsSettings.restrictions.position.sphere.center),
            radius: controlsSettings.restrictions.position.sphere.radius
        };
        this.cubeTargetRestriction = {
            min: this._converter.toVec3(controlsSettings.restrictions.target.cube.min),
            max: this._converter.toVec3(controlsSettings.restrictions.target.cube.max)
        };
        this.sphereTargetRestriction = {
            center: this._converter.toVec3(controlsSettings.restrictions.target.sphere.center),
            radius: controlsSettings.restrictions.target.sphere.radius
        };
        this.rotationRestriction = controlsSettings.restrictions.rotation;
        this.zoomRestriction = controlsSettings.restrictions.zoom;
    }
    applyTargetMatrix(matrix, manualInteraction) {
        if (this._manualInteraction || manualInteraction) {
            this._manualInteraction = true;
            this._manualInteractionTransformations.target.push({ matrix });
        }
        else {
            this._nonmanualInteraction = true;
            this._nonmanualInteractionTransformations.target.push({ matrix });
        }
    }
    applyTargetVector(vector, manualInteraction) {
        if (this._manualInteraction || manualInteraction) {
            this._manualInteraction = true;
            this._manualInteractionTransformations.target.push({ vector });
        }
        else {
            this._nonmanualInteraction = true;
            this._nonmanualInteractionTransformations.target.push({ vector });
        }
    }
    applyUpMatrix(matrix, manualInteraction) {
        // https://shapediver.atlassian.net/browse/SS-2949
        throw new Error('Method not implemented.');
    }
    assignViewer(viewportId, canvas) {
        this._canvas = canvas;
        this._viewportId = viewportId;
    }
    getPositionWithManualUpdates() {
        let position = gl_matrix_1.vec3.clone(this._position);
        if (this._manualInteraction) {
            for (let i = this._manualInteractionTransformations.position.length - 1; i >= 0; i--) {
                if (this._manualInteractionTransformations.position[i].matrix) {
                    position = gl_matrix_1.vec3.transformMat4(position, position, this._manualInteractionTransformations.position[i].matrix);
                }
                else {
                    position = gl_matrix_1.vec3.add(position, position, this._manualInteractionTransformations.position[i].vector);
                }
            }
        }
        return position;
    }
    getPositionWithUpdates() {
        return this.getPosition();
    }
    getTargetWithManualUpdates() {
        let target = gl_matrix_1.vec3.clone(this._target);
        if (this._manualInteraction) {
            for (let i = this._manualInteractionTransformations.target.length - 1; i >= 0; i--) {
                if (this._manualInteractionTransformations.target[i].matrix) {
                    target = gl_matrix_1.vec3.transformMat4(target, target, this._manualInteractionTransformations.target[i].matrix);
                }
                else {
                    target = gl_matrix_1.vec3.add(target, target, this._manualInteractionTransformations.target[i].vector);
                }
            }
        }
        return target;
    }
    getTargetWithUpdates() {
        return this.getTarget();
    }
    isMoving() {
        return this._manualInteraction || this._nonmanualInteraction;
    }
    isWithinRestrictions(position, target) {
        return this._cameraLogic.isWithinRestrictions(position, target);
    }
    reset() {
        this._cameraControlsEventDistribution.reset();
        this._cameraLogic.reset();
    }
    update(time) {
        if (!this._enabled)
            return { position: gl_matrix_1.vec3.clone(this._position), target: gl_matrix_1.vec3.clone(this._target), sceneRotation: gl_matrix_1.vec2.clone(this._sceneRotation) };
        // reset all values
        if (this._manualInteraction === true && this._cameraInterpolationManager.active())
            this._cameraInterpolationManager.stop();
        const { position, target, sceneRotation } = this._cameraLogic.restrict(this.getPosition(), this.getTarget(), this.getSceneRotation());
        this._position = gl_matrix_1.vec3.clone(position);
        this._target = gl_matrix_1.vec3.clone(target);
        this._sceneRotation = sceneRotation ? gl_matrix_1.vec2.clone(sceneRotation) : gl_matrix_1.vec2.create();
        this._manualInteraction = false;
        this._manualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
        this._nonmanualInteraction = this._cameraInterpolationManager.active();
        this._nonmanualInteractionTransformations = { position: [], target: [], sceneRotation: [] };
        this._cameraLogic.update(time, this._nonmanualInteraction);
        const oldMovement = this._moving;
        const cameraDefinition = {
            position: gl_matrix_1.vec3.clone(this._position),
            target: gl_matrix_1.vec3.clone(this._target),
            sceneRotation: gl_matrix_1.vec2.clone(this._sceneRotation)
        };
        this._movingDuration += time;
        this._moving = (this._manualInteraction || this._nonmanualInteraction);
        switch (true) {
            case oldMovement !== this._moving && this._moving === true:
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.CAMERA.CAMERA_START, { viewportId: this._viewportId, cameraId: this.camera.id });
                break;
            case oldMovement !== this._moving && this._moving === false:
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.CAMERA.CAMERA_END, { viewportId: this._viewportId, cameraId: this.camera.id });
                break;
            default:
                this._eventEngine.emitEvent(viewer_shared_services_1.EVENTTYPE.CAMERA.CAMERA_MOVE, { viewportId: this._viewportId, cameraId: this.camera.id });
        }
        if (!this._moving)
            this._movingDuration = 0;
        return cameraDefinition;
    }
    // #endregion Public Methods (16)
    // #region Private Methods (3)
    getPosition() {
        let position = gl_matrix_1.vec3.clone(this._position);
        if (this._manualInteraction) {
            for (let i = this._manualInteractionTransformations.position.length - 1; i >= 0; i--) {
                if (this._manualInteractionTransformations.position[i].matrix) {
                    position = gl_matrix_1.vec3.transformMat4(position, position, this._manualInteractionTransformations.position[i].matrix);
                }
                else {
                    position = gl_matrix_1.vec3.add(position, position, this._manualInteractionTransformations.position[i].vector);
                }
            }
        }
        else if (this._nonmanualInteraction) {
            for (let i = this._nonmanualInteractionTransformations.position.length - 1; i >= 0; i--) {
                if (this._nonmanualInteractionTransformations.position[i].matrix) {
                    position = gl_matrix_1.vec3.transformMat4(position, position, this._nonmanualInteractionTransformations.position[i].matrix);
                }
                else {
                    position = gl_matrix_1.vec3.add(position, position, this._nonmanualInteractionTransformations.position[i].vector);
                }
            }
        }
        return position;
    }
    getSceneRotation() {
        let sceneRotation = gl_matrix_1.vec2.clone(this._sceneRotation);
        if (this._manualInteraction) {
            for (let i = this._manualInteractionTransformations.sceneRotation.length - 1; i >= 0; i--) {
                sceneRotation = gl_matrix_1.vec2.add(sceneRotation, sceneRotation, gl_matrix_1.vec2.fromValues(this._manualInteractionTransformations.sceneRotation[i].theta, this._manualInteractionTransformations.sceneRotation[i].phi));
            }
        }
        else if (this._nonmanualInteraction) {
            for (let i = this._nonmanualInteractionTransformations.sceneRotation.length - 1; i >= 0; i--) {
                sceneRotation = gl_matrix_1.vec2.add(sceneRotation, sceneRotation, gl_matrix_1.vec2.fromValues(this._nonmanualInteractionTransformations.sceneRotation[i].theta, this._nonmanualInteractionTransformations.sceneRotation[i].phi));
            }
        }
        return sceneRotation;
    }
    getTarget() {
        let target = gl_matrix_1.vec3.clone(this._target);
        if (this._manualInteraction) {
            for (let i = this._manualInteractionTransformations.target.length - 1; i >= 0; i--) {
                if (this._manualInteractionTransformations.target[i].matrix) {
                    target = gl_matrix_1.vec3.transformMat4(target, target, this._manualInteractionTransformations.target[i].matrix);
                }
                else {
                    target = gl_matrix_1.vec3.add(target, target, this._manualInteractionTransformations.target[i].vector);
                }
            }
        }
        else if (this._nonmanualInteraction) {
            for (let i = this._nonmanualInteractionTransformations.target.length - 1; i >= 0; i--) {
                if (this._nonmanualInteractionTransformations.target[i].matrix) {
                    target = gl_matrix_1.vec3.transformMat4(target, target, this._nonmanualInteractionTransformations.target[i].matrix);
                }
                else {
                    target = gl_matrix_1.vec3.add(target, target, this._nonmanualInteractionTransformations.target[i].vector);
                }
            }
        }
        return target;
    }
}
exports.AbstractCameraControls = AbstractCameraControls;
//# sourceMappingURL=AbstractCameraControls.js.map

/***/ }),

/***/ 68410:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraControlsEventDistribution = void 0;
class CameraControlsEventDistribution {
    // #endregion Properties (7)
    // #region Constructors (1)
    constructor(controls, cameraLogic) {
        this._active = {
            rotation: false,
            zoom: false,
            pan: false
        };
        this._activeEvents = true;
        this._controls = controls;
        this._cameraLogic = cameraLogic;
    }
    // #endregion Constructors (1)
    // #region Public Methods (16)
    activateCameraEvents() {
        this._activeEvents = true;
    }
    deactivateCameraEvents() {
        this._activeEvents = false;
        this.reset();
    }
    onDown(event) {
        if (this._controls.camera.active === false)
            return;
        const { x, y } = this.convertInput(event);
        const touchEvent = event.pointerType === 'touch';
        const input = this.getInput(event);
        const mapping = event.pointerType === 'touch' ? this._controls.input.touch : this._controls.input.mouse;
        if (input === mapping.rotate && this._controls.enableRotation) {
            this._cameraLogic.rotate(x, y, this._active.rotation, touchEvent);
            this._active.rotation = true;
        }
        else {
            this._active.rotation = false;
        }
        if (input === mapping.pan && this._controls.enablePan) {
            this._cameraLogic.pan(x, y, this._active.pan, touchEvent);
            this._active.pan = true;
        }
        else {
            this._active.pan = false;
        }
        if (input === mapping.zoom && this._controls.enableZoom) {
            let x1 = x, y1 = y;
            if (touchEvent && this._controls.input.touch.zoom === 2 && this._primaryPointerEvent && this._secondaryPointerEvent) {
                x1 = (this._primaryPointerEvent.pageX - this._secondaryPointerEvent.pageX) / window.innerWidth * (window.innerWidth / window.innerHeight);
                y1 = (this._primaryPointerEvent.pageY - this._secondaryPointerEvent.pageY) / window.innerHeight;
            }
            this._cameraLogic.zoom(x1, y1, this._active.zoom, touchEvent);
            this._active.zoom = true;
        }
        else {
            this._active.zoom = false;
        }
    }
    onKey(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._controls.enableKeyPan)
            return;
        switch (event.keyCode) {
            case this._controls.input.keys.up:
                this._cameraLogic.pan(0, 0, false, false);
                this._cameraLogic.pan(0, this._controls.keyPanSpeed * 0.05, true, false);
                event.preventDefault();
                event.stopPropagation();
                break;
            case this._controls.input.keys.down:
                this._cameraLogic.pan(0, 0, false, false);
                this._cameraLogic.pan(0, -this._controls.keyPanSpeed * 0.05, true, false);
                event.preventDefault();
                event.stopPropagation();
                break;
            case this._controls.input.keys.left:
                this._cameraLogic.pan(0, 0, false, false);
                this._cameraLogic.pan(this._controls.keyPanSpeed * 0.05, 0, true, false);
                event.preventDefault();
                event.stopPropagation();
                break;
            case this._controls.input.keys.right:
                this._cameraLogic.pan(0, 0, false, false);
                this._cameraLogic.pan(-this._controls.keyPanSpeed * 0.05, 0, true, false);
                event.preventDefault();
                event.stopPropagation();
                break;
        }
    }
    onKeyDown(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._activeEvents)
            return;
        this.onKey(event);
    }
    onKeyUp(event) { }
    onMouseWheel(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._activeEvents)
            return;
        this.onWheel(event);
    }
    onMove(event) {
        if (this._controls.camera.active === false)
            return;
        const { x, y } = this.convertInput(event);
        const touchEvent = event.pointerType === 'touch';
        if (this._controls.enableRotation && this._active.rotation)
            this._cameraLogic.rotate(x, y, this._active.rotation, touchEvent);
        if (this._controls.enablePan && this._active.pan)
            this._cameraLogic.pan(x, y, this._active.pan, touchEvent);
        if (this._controls.enableZoom && this._active.zoom) {
            let x1 = x, y1 = y;
            if (touchEvent && this._controls.input.touch.zoom === 2 && this._primaryPointerEvent && this._secondaryPointerEvent) {
                x1 = (this._primaryPointerEvent.pageX - this._secondaryPointerEvent.pageX) / window.innerWidth * (window.innerWidth / window.innerHeight);
                y1 = (this._primaryPointerEvent.pageY - this._secondaryPointerEvent.pageY) / window.innerHeight;
            }
            this._cameraLogic.zoom(x1, y1, this._active.zoom, touchEvent);
        }
    }
    onPointerDown(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._activeEvents)
            return;
        if (event.isPrimary === true)
            this._primaryPointerEvent = event;
        else if (event.isPrimary === false)
            this._secondaryPointerEvent = event;
        this.onDown(event);
    }
    onPointerEnd(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._activeEvents)
            return;
        if (event.isPrimary === true)
            this._primaryPointerEvent = undefined;
        else if (event.isPrimary === false)
            this._secondaryPointerEvent = undefined;
        this.onUp(event);
    }
    onPointerMove(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._activeEvents)
            return;
        if (event.isPrimary === true)
            this._primaryPointerEvent = event;
        else if (event.isPrimary === false)
            this._secondaryPointerEvent = event;
        this.onMove(event);
    }
    onPointerOut(event) {
        if (this._controls.camera.active === false)
            return;
        this.revert();
        if (event.isPrimary === true)
            this._primaryPointerEvent = undefined;
        else if (event.isPrimary === false)
            this._secondaryPointerEvent = undefined;
    }
    onPointerUp(event) {
        if (this._controls.camera.active === false)
            return;
        if (event.isPrimary === true)
            this._primaryPointerEvent = undefined;
        else if (event.isPrimary === false)
            this._secondaryPointerEvent = undefined;
    }
    onUp(event) {
        if (this._controls.camera.active === false)
            return;
        this.revert();
        this._active.rotation = false;
        this._active.zoom = false;
        this._active.pan = false;
    }
    onWheel(event) {
        if (this._controls.camera.active === false)
            return;
        if (!this._activeEvents)
            return;
        if (!this._controls.enableZoom)
            return;
        if (this._controls.camera.revertAtMouseUp === true) {
            clearTimeout(this._zoomResizeTimeout);
            this._zoomResizeTimeout = setTimeout(this.revert.bind(this), 300);
        }
        let delta = 0;
        if (event.deltaY !== undefined) {
            // WebKit / Opera / Explorer 9
            delta = -event.deltaY;
        }
        else if (event.detail !== undefined) {
            // Firefox
            delta = -event.detail;
        }
        // convert to 2 screen coordinates that are far enough
        if (Math.sign(delta) > 0) {
            this._cameraLogic.zoom(0, 0, false, false);
            this._cameraLogic.zoom(1, 0, true, false);
        }
        else {
            this._cameraLogic.zoom(1, 0, false, false);
            this._cameraLogic.zoom(0, 0, true, false);
        }
    }
    reset() {
        this._active = {
            rotation: false,
            zoom: false,
            pan: false
        };
    }
    // #endregion Public Methods (16)
    // #region Protected Methods (2)
    convertInput(event) {
        if (this._primaryPointerEvent && this._secondaryPointerEvent) {
            return {
                x: (this._primaryPointerEvent.pageX + this._secondaryPointerEvent.pageX) / 2,
                y: (this._primaryPointerEvent.pageY + this._secondaryPointerEvent.pageY) / 2
            };
        }
        else {
            return {
                x: event.clientX,
                y: event.clientY
            };
        }
    }
    getInput(event) {
        if (event.pointerType === 'touch') {
            if (this._secondaryPointerEvent) {
                return 2;
            }
            else {
                return 1;
            }
        }
        else {
            return event.button;
        }
    }
    // #endregion Protected Methods (2)
    // #region Private Methods (1)
    revert() {
        if (this._controls.camera.revertAtMouseUp === true) {
            this._controls.camera.reset({ duration: this._controls.camera.revertAtMouseUpDuration });
        }
    }
}
exports.CameraControlsEventDistribution = CameraControlsEventDistribution;
//# sourceMappingURL=CameraControlsEventDistribution.js.map

/***/ }),

/***/ 92658:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraControlsLogic = void 0;
const viewer_shared_math_1 = __webpack_require__(67275);
const gl_matrix_1 = __webpack_require__(61961);
const OrthographicCamera_1 = __webpack_require__(36817);
const ICameraEngine_1 = __webpack_require__(23564);
const IOrthographicCamera_1 = __webpack_require__(49578);
class CameraControlsLogic {
    // #endregion Properties (13)
    // #region Constructors (1)
    constructor(_controls, _settingsAdjustments, _touchAdjustments) {
        this._controls = _controls;
        this._settingsAdjustments = _settingsAdjustments;
        this._touchAdjustments = _touchAdjustments;
        // #region Properties (13)
        this._adjustedSettings = {
            autoRotationSpeed: () => this._controls.autoRotationSpeed * this._settingsAdjustments.autoRotationSpeed,
            damping: () => this._controls.damping * this._settingsAdjustments.damping,
            movementSmoothness: () => this._controls.movementSmoothness * this._settingsAdjustments.movementSmoothness,
            panSpeed: () => this._controls.panSpeed * this._settingsAdjustments.panSpeed,
            rotationSpeed: () => this._controls.rotationSpeed * this._settingsAdjustments.rotationSpeed,
            zoomSpeed: () => this._controls.zoomSpeed * this._settingsAdjustments.zoomSpeed,
        };
        this._damping = {
            rotation: {
                time: 0,
                duration: 0,
                theta: 0,
                phi: 0
            },
            zoom: {
                time: 0,
                duration: 0,
                delta: 0
            },
            pan: {
                time: 0,
                duration: 0,
                offset: gl_matrix_1.vec3.create()
            },
        };
        this._dollyDelta = 0;
        this._dollyEnd = 0;
        this._dollyStart = 0;
        this._panDelta = gl_matrix_1.vec2.create();
        this._panEnd = gl_matrix_1.vec2.create();
        this._panStart = gl_matrix_1.vec2.create();
        this._rotateDelta = gl_matrix_1.vec2.create();
        this._rotateEnd = gl_matrix_1.vec2.create();
        this._rotateStart = gl_matrix_1.vec2.create();
        this._quat = gl_matrix_1.quat.fromValues(-Math.sin(Math.PI / 4), 0, 0, Math.sin(Math.PI / 4));
        this._quatInverse = gl_matrix_1.quat.fromValues(Math.sin(Math.PI / 4), 0, 0, Math.sin(Math.PI / 4));
    }
    // #endregion Constructors (1)
    // #region Public Methods (7)
    isWithinRestrictions(position, target) {
        const pBox = new viewer_shared_math_1.Box(this._controls.cubePositionRestriction.min, this._controls.cubePositionRestriction.max), pSphere = new viewer_shared_math_1.Sphere(this._controls.spherePositionRestriction.center, this._controls.spherePositionRestriction.radius), tBox = new viewer_shared_math_1.Box(this._controls.cubeTargetRestriction.min, this._controls.cubeTargetRestriction.max), tSphere = new viewer_shared_math_1.Sphere(this._controls.sphereTargetRestriction.center, this._controls.sphereTargetRestriction.radius);
        if (!(pBox.containsPoint(position) && pSphere.containsPoint(position)))
            return false;
        if (!(tBox.containsPoint(target) && tSphere.containsPoint(target)))
            return false;
        const currentDistance = gl_matrix_1.vec3.distance(position, target);
        if (currentDistance > this._controls.zoomRestriction.maxDistance || currentDistance < this._controls.zoomRestriction.minDistance)
            return false;
        const minPolarAngle = this._controls.rotationRestriction.minPolarAngle * (Math.PI / 180), maxPolarAngle = this._controls.rotationRestriction.maxPolarAngle * (Math.PI / 180), minAzimuthAngle = this._controls.rotationRestriction.minAzimuthAngle * (Math.PI / 180), maxAzimuthAngle = this._controls.rotationRestriction.maxAzimuthAngle * (Math.PI / 180);
        if (minAzimuthAngle !== -Infinity ||
            maxAzimuthAngle !== Infinity ||
            minPolarAngle !== 0 ||
            maxPolarAngle !== 180) {
            const offset = gl_matrix_1.vec3.sub(gl_matrix_1.vec3.create(), position, target);
            gl_matrix_1.vec3.transformQuat(offset, offset, this._quat);
            const spherical = new viewer_shared_math_1.Spherical().fromVec3(offset);
            if (spherical.theta < minAzimuthAngle ||
                spherical.theta > maxAzimuthAngle ||
                spherical.phi < minPolarAngle ||
                spherical.phi > maxPolarAngle) {
                return false;
            }
        }
        return true;
    }
    pan(x, y, active, touch) {
        if (!active) {
            this._panStart = gl_matrix_1.vec2.fromValues(x, y);
        }
        else {
            this._panEnd = gl_matrix_1.vec2.fromValues(x, y);
            gl_matrix_1.vec2.sub(this._panDelta, this._panEnd, this._panStart);
            if (this._panDelta[0] === 0 && this._panDelta[1] === 0)
                return;
            gl_matrix_1.vec2.copy(this._panStart, this._panEnd);
            const adjustedPanSpeed = this._adjustedSettings.panSpeed() * (touch ? this._touchAdjustments.panSpeed : 1.0);
            const offset = this.panDeltaToOffset(gl_matrix_1.vec2.mul(gl_matrix_1.vec2.create(), this._panDelta, gl_matrix_1.vec2.fromValues(adjustedPanSpeed, adjustedPanSpeed)));
            if (this._damping.pan.duration > 0) {
                if (offset[0] < 0) {
                    offset[0] = Math.min(offset[0], this._adjustedSettings.movementSmoothness() * this._damping.pan.offset[0]);
                }
                else {
                    offset[0] = Math.max(offset[0], this._adjustedSettings.movementSmoothness() * this._damping.pan.offset[0]);
                }
                if (offset[1] < 0) {
                    offset[1] = Math.min(offset[1], this._adjustedSettings.movementSmoothness() * this._damping.pan.offset[1]);
                }
                else {
                    offset[1] = Math.max(offset[1], this._adjustedSettings.movementSmoothness() * this._damping.pan.offset[1]);
                }
                if (offset[2] < 0) {
                    offset[2] = Math.min(offset[2], this._adjustedSettings.movementSmoothness() * this._damping.pan.offset[2]);
                }
                else {
                    offset[2] = Math.max(offset[2], this._adjustedSettings.movementSmoothness() * this._damping.pan.offset[2]);
                }
            }
            const damping = 1 - Math.max(0.01, Math.min(0.99, this._adjustedSettings.damping()));
            const framesOffsetX = (Math.log(1 / Math.abs(offset[0])) - 5 * Math.log(10)) / (Math.log(damping));
            const framesOffsetY = (Math.log(1 / Math.abs(offset[1])) - 5 * Math.log(10)) / (Math.log(damping));
            const framesOffsetZ = (Math.log(1 / Math.abs(offset[2])) - 5 * Math.log(10)) / (Math.log(damping));
            this._damping.pan.time = 0;
            this._damping.pan.duration = Math.max(framesOffsetX, Math.max(framesOffsetY, framesOffsetZ)) * 16.6666;
            this._damping.pan.offset = gl_matrix_1.vec3.clone(offset);
            this._damping.rotation.duration = 0;
            this._damping.zoom.duration = 0;
            this._controls.applyTargetVector(offset, true);
            this._controls.applyPositionVector(offset, true);
        }
    }
    reset() {
        this._damping = {
            rotation: {
                time: 0,
                duration: 0,
                theta: 0,
                phi: 0
            },
            zoom: {
                time: 0,
                duration: 0,
                delta: 0
            },
            pan: {
                time: 0,
                duration: 0,
                offset: gl_matrix_1.vec3.create()
            },
        };
        this._dollyDelta = 0;
        this._dollyEnd = 0;
        this._dollyStart = 0;
        this._panDelta = gl_matrix_1.vec2.create();
        this._panEnd = gl_matrix_1.vec2.create();
        this._panStart = gl_matrix_1.vec2.create();
        this._rotateDelta = gl_matrix_1.vec2.create();
        this._rotateEnd = gl_matrix_1.vec2.create();
        this._rotateStart = gl_matrix_1.vec2.create();
    }
    restrict(position, target, sceneRotation) {
        const pBox = new viewer_shared_math_1.Box(this._controls.cubePositionRestriction.min, this._controls.cubePositionRestriction.max), pSphere = new viewer_shared_math_1.Sphere(this._controls.spherePositionRestriction.center, this._controls.spherePositionRestriction.radius), tBox = new viewer_shared_math_1.Box(this._controls.cubeTargetRestriction.min, this._controls.cubeTargetRestriction.max), tSphere = new viewer_shared_math_1.Sphere(this._controls.sphereTargetRestriction.center, this._controls.sphereTargetRestriction.radius);
        if (!pBox.containsPoint(position))
            position = pBox.clampPoint(position);
        if (!pSphere.containsPoint(position))
            position = pSphere.clampPoint(position);
        if (!tBox.containsPoint(target))
            target = tBox.clampPoint(target);
        if (!tSphere.containsPoint(target))
            target = tSphere.clampPoint(target);
        // zoom restrictions
        const currentDistance = gl_matrix_1.vec3.distance(position, target);
        if (currentDistance > this._controls.zoomRestriction.maxDistance || currentDistance < this._controls.zoomRestriction.minDistance) {
            const direction = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), position, target));
            const distance = Math.max(this._controls.zoomRestriction.minDistance, Math.min(this._controls.zoomRestriction.maxDistance, currentDistance));
            gl_matrix_1.vec3.add(position, gl_matrix_1.vec3.multiply(position, direction, gl_matrix_1.vec3.fromValues(distance, distance, distance)), target);
        }
        // angle restrictions
        const minPolarAngle = this._controls.rotationRestriction.minPolarAngle * (Math.PI / 180), maxPolarAngle = this._controls.rotationRestriction.maxPolarAngle * (Math.PI / 180), minAzimuthAngle = this._controls.rotationRestriction.minAzimuthAngle * (Math.PI / 180), maxAzimuthAngle = this._controls.rotationRestriction.maxAzimuthAngle * (Math.PI / 180);
        if (minAzimuthAngle !== -Infinity ||
            maxAzimuthAngle !== Infinity ||
            minPolarAngle !== 0 ||
            maxPolarAngle !== 180 ||
            this._controls.enableAzimuthRotation === false ||
            this._controls.enablePolarRotation === false ||
            this._controls.enableObjectControls === true) {
            let offset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), position, target);
            gl_matrix_1.vec3.transformQuat(offset, offset, this._quat);
            const spherical = new viewer_shared_math_1.Spherical().fromVec3(offset);
            if (spherical.theta < minAzimuthAngle ||
                spherical.theta > maxAzimuthAngle ||
                spherical.phi < minPolarAngle ||
                spherical.phi > maxPolarAngle ||
                this._controls.enableAzimuthRotation === false ||
                this._controls.enablePolarRotation === false ||
                this._controls.enableObjectControls === true) {
                spherical.theta = Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, spherical.theta));
                spherical.phi = Math.max(minPolarAngle, Math.min(maxPolarAngle, spherical.phi));
                if (this._controls.enableAzimuthRotation === false || this._controls.enablePolarRotation === false || this._controls.enableObjectControls === true) {
                    const defaultOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._controls.camera.defaultPosition, this._controls.camera.defaultTarget);
                    gl_matrix_1.vec3.transformQuat(defaultOffset, defaultOffset, this._quat);
                    const defaultSpherical = new viewer_shared_math_1.Spherical().fromVec3(defaultOffset);
                    if (this._controls.enableAzimuthRotation === false)
                        spherical.theta = defaultSpherical.theta;
                    if (this._controls.enablePolarRotation === false)
                        spherical.phi = defaultSpherical.phi;
                    if (this._controls.enableObjectControls) {
                        spherical.theta = defaultSpherical.theta;
                        spherical.phi = defaultSpherical.phi;
                    }
                }
                spherical.makeSafe();
                offset = spherical.toVec3();
                gl_matrix_1.vec3.transformQuat(offset, offset, this._quatInverse);
                gl_matrix_1.vec3.add(position, offset, target);
            }
            if ((sceneRotation[1] < minAzimuthAngle ||
                sceneRotation[1] > maxAzimuthAngle ||
                sceneRotation[0] < minPolarAngle ||
                sceneRotation[0] > maxPolarAngle ||
                this._controls.enableAzimuthRotation === false ||
                this._controls.enablePolarRotation === false) &&
                this._controls.enableObjectControls === false) {
                sceneRotation[1] = this._controls.enableAzimuthRotation === false ? 0 : Math.max(minAzimuthAngle, Math.min(maxAzimuthAngle, sceneRotation[1]));
                sceneRotation[0] = this._controls.enablePolarRotation === false ? 0 : Math.max(minPolarAngle, Math.min(maxPolarAngle, sceneRotation[0]));
            }
        }
        return { position, target, sceneRotation };
    }
    rotate(x, y, active, touch) {
        if (this._controls.camera.type === ICameraEngine_1.CAMERA_TYPE.ORTHOGRAPHIC && this._controls.camera.direction !== IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION.CUSTOM)
            return;
        if (!active) {
            this._rotateStart = gl_matrix_1.vec2.fromValues(x, y);
        }
        else {
            this._rotateEnd = gl_matrix_1.vec2.fromValues(x, y);
            gl_matrix_1.vec2.subtract(this._rotateDelta, this._rotateEnd, this._rotateStart);
            gl_matrix_1.vec2.copy(this._rotateStart, this._rotateEnd);
            if (!this._controls.canvas)
                return;
            if (this._controls.canvas.clientWidth == 0 || this._controls.canvas.clientHeight == 0)
                return;
            const spherical = new viewer_shared_math_1.Spherical();
            const rotationSpeed = this._adjustedSettings.rotationSpeed() * (touch ? this._touchAdjustments.rotationSpeed : 1.0);
            spherical.theta -= rotationSpeed * this._rotateDelta[0] / this._controls.canvas.clientHeight;
            spherical.phi -= rotationSpeed * this._rotateDelta[1] / this._controls.canvas.clientHeight;
            if (this._damping.rotation.duration > 0) {
                const thetaDelta = this._damping.rotation.theta - spherical.theta;
                spherical.theta += thetaDelta * this._adjustedSettings.movementSmoothness();
                const phiDelta = this._damping.rotation.phi - spherical.phi;
                spherical.phi += phiDelta * this._adjustedSettings.movementSmoothness();
            }
            let sphericalForOffset = spherical;
            if (this._controls.enableTurntableControls)
                sphericalForOffset = new viewer_shared_math_1.Spherical(1.0, spherical.phi, 0);
            const offset = this.rotationSphericalToOffset(sphericalForOffset);
            const damping = 1 - Math.max(0.01, Math.min(1, this._adjustedSettings.damping()));
            const framesTheta = (Math.log(1 / Math.abs(spherical.theta)) - 5 * Math.log(10)) / (Math.log(damping));
            const framesPhi = (Math.log(1 / Math.abs(spherical.phi)) - 5 * Math.log(10)) / (Math.log(damping));
            this._damping.rotation.time = 0;
            this._damping.rotation.duration = Math.max(framesTheta, framesPhi) * 16.6666;
            this._damping.rotation.theta = spherical.theta;
            this._damping.rotation.phi = spherical.phi;
            this._damping.pan.duration = 0;
            this._damping.zoom.duration = 0;
            this._controls.applyPositionVector(offset, true);
            if (this._controls.enableTurntableControls)
                this._controls.applyRotation([0, spherical.theta], true);
            if (this._controls.enableObjectControls)
                this._controls.applyRotation([spherical.phi, spherical.theta], true);
        }
    }
    update(time, manualInteraction) {
        if (manualInteraction === true) {
            this._damping.zoom.duration = 0;
            this._damping.pan.duration = 0;
            this._damping.rotation.duration = 0;
        }
        const damping = 1 - Math.max(0.01, Math.min(1, this._adjustedSettings.damping()));
        if (this._damping.pan.duration > 0) {
            if (this._damping.pan.time + time > this._damping.pan.duration) {
                this._damping.pan.time = this._damping.pan.duration;
                this._damping.pan.duration = 0;
            }
            else {
                this._damping.pan.time += time;
                const frameSinceStart = this._damping.pan.time / 16.6666;
                const dampingFrames = Math.pow(damping, frameSinceStart);
                const offset = gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._damping.pan.offset, gl_matrix_1.vec3.fromValues(dampingFrames, dampingFrames, dampingFrames));
                this._controls.applyTargetVector(offset);
                this._controls.applyPositionVector(offset);
            }
        }
        else {
            this._damping.pan.time = 0;
        }
        if (this._damping.rotation.duration > 0) {
            if (this._damping.rotation.time + time > this._damping.rotation.duration) {
                this._damping.rotation.time = this._damping.rotation.duration;
                this._damping.rotation.duration = 0;
            }
            else {
                this._damping.rotation.time += time;
                const frameSinceStart = this._damping.rotation.time / 16.6666;
                const spherical = new viewer_shared_math_1.Spherical();
                spherical.theta = this._damping.rotation.theta * Math.pow(damping, frameSinceStart);
                spherical.phi = this._damping.rotation.phi * Math.pow(damping, frameSinceStart);
                let sphericalForOffset = spherical;
                if (this._controls.enableTurntableControls)
                    sphericalForOffset = new viewer_shared_math_1.Spherical(1.0, spherical.phi, 0);
                const offset = this.rotationSphericalToOffset(sphericalForOffset);
                this._controls.applyPositionVector(offset);
                if (this._controls.enableTurntableControls)
                    this._controls.applyRotation([0, spherical.theta]);
                if (this._controls.enableObjectControls)
                    this._controls.applyRotation([spherical.phi, spherical.theta]);
            }
        }
        else {
            this._damping.rotation.time = 0;
        }
        if (this._damping.zoom.duration > 0) {
            if (this._damping.zoom.time + time > this._damping.zoom.duration) {
                this._damping.zoom.time = this._damping.zoom.duration;
                this._damping.zoom.duration = 0;
            }
            else {
                this._damping.zoom.time += time;
                const frameSinceStart = this._damping.zoom.time / 16.6666;
                const delta = this._damping.zoom.delta * Math.pow(damping, frameSinceStart);
                const offset = this.zoomDistanceToOffset(delta);
                this._controls.applyPositionVector(offset);
            }
        }
        else {
            this._damping.zoom.time = 0;
        }
        if (this._controls.enableAutoRotation) {
            const spherical = new viewer_shared_math_1.Spherical(1.0, 0.0, -this._adjustedSettings.autoRotationSpeed());
            let sphericalForOffset = spherical;
            if (this._controls.enableTurntableControls)
                sphericalForOffset = new viewer_shared_math_1.Spherical(1.0, spherical.phi, 0);
            const offset = this.rotationSphericalToOffset(sphericalForOffset);
            this._controls.applyPositionVector(offset);
            if (this._controls.enableTurntableControls)
                this._controls.applyRotation([0, spherical.theta]);
            if (this._controls.enableObjectControls)
                this._controls.applyRotation([spherical.phi, spherical.theta]);
        }
    }
    zoom(x, y, active, touch) {
        const distance = Math.sqrt(x * x + y * y);
        if (!active) {
            this._dollyStart = distance;
        }
        else {
            this._dollyEnd = distance;
            this._dollyDelta = this._dollyEnd - this._dollyStart;
            this._dollyStart = this._dollyEnd;
            if (this._damping.zoom.duration > 0) {
                if (this._dollyDelta < 0) {
                    this._dollyDelta = Math.min(this._dollyDelta, this._adjustedSettings.movementSmoothness() * this._damping.zoom.delta);
                }
                else {
                    this._dollyDelta = Math.max(this._dollyDelta, this._adjustedSettings.movementSmoothness() * this._damping.zoom.delta);
                }
            }
            const delta = -this._dollyDelta * this._adjustedSettings.zoomSpeed() * (touch ? this._touchAdjustments.zoomSpeed : 1.0);
            const damping = 1 - Math.max(0.01, Math.min(1, this._adjustedSettings.damping()));
            const framesDelta = (Math.log(1 / Math.abs(this._dollyDelta)) - 5 * Math.log(10)) / (Math.log(damping));
            this._damping.zoom.time = 0;
            this._damping.zoom.duration = framesDelta * 16.6666;
            this._damping.zoom.delta = delta;
            this._damping.rotation.duration = 0;
            this._damping.pan.duration = 0;
            const offset = this.zoomDistanceToOffset(delta);
            this._controls.applyPositionVector(offset, true);
        }
    }
    // #endregion Public Methods (7)
    // #region Private Methods (3)
    panDeltaToOffset(panDelta) {
        var _a, _b, _c, _d;
        const offset = gl_matrix_1.vec3.create();
        const panOffset = gl_matrix_1.vec3.create();
        if (!this._controls.canvas)
            return offset;
        if (this._controls.canvas.clientWidth == 0 || this._controls.canvas.clientHeight == 0)
            return offset;
        // perspective
        gl_matrix_1.vec3.subtract(offset, this._controls.getPositionWithManualUpdates(), this._controls.getTargetWithManualUpdates());
        if (this._controls.camera instanceof OrthographicCamera_1.OrthographicCamera) {
            const orthographicCamera = this._controls.camera;
            const mat = gl_matrix_1.mat4.targetTo(gl_matrix_1.mat4.create(), orthographicCamera.position, orthographicCamera.target, orthographicCamera.up);
            // // we use only clientHeight here so aspect ratio does not distort speed
            // // left
            const v1 = gl_matrix_1.vec3.fromValues(mat[0], mat[1], mat[2]);
            const scalar1 = -(panDelta[0] * (orthographicCamera.right - orthographicCamera.left) * 0.5 / ((_a = this._controls.canvas) === null || _a === void 0 ? void 0 : _a.clientHeight) /** orthographicCamera.zoom */);
            gl_matrix_1.vec3.multiply(v1, v1, gl_matrix_1.vec3.fromValues(scalar1, scalar1, scalar1));
            gl_matrix_1.vec3.add(panOffset, panOffset, v1);
            // // up
            const v2 = gl_matrix_1.vec3.fromValues(mat[4], mat[5], mat[6]);
            const scalar2 = panDelta[1] * (orthographicCamera.right - orthographicCamera.left) * 0.5 / ((_b = this._controls.canvas) === null || _b === void 0 ? void 0 : _b.clientHeight) /** orthographicCamera.zoom */;
            gl_matrix_1.vec3.multiply(v2, v2, gl_matrix_1.vec3.fromValues(scalar2, scalar2, scalar2));
            gl_matrix_1.vec3.add(panOffset, panOffset, v2);
        }
        else {
            let targetDistance = gl_matrix_1.vec3.length(offset);
            // half of the fov is center to top of screen
            targetDistance *= Math.tan(((this._controls.camera.fov / 2) * Math.PI) / 180.0);
            // we use only clientHeight here so aspect ratio does not distort speed
            // left
            const mat = gl_matrix_1.mat4.targetTo(gl_matrix_1.mat4.create(), this._controls.camera.position, this._controls.camera.target, gl_matrix_1.vec3.fromValues(0, 0, 1));
            const v1 = gl_matrix_1.vec3.fromValues(mat[0], mat[1], mat[2]);
            const scalar1 = -(2 * panDelta[0] * targetDistance / ((_c = this._controls.canvas) === null || _c === void 0 ? void 0 : _c.clientHeight));
            gl_matrix_1.vec3.multiply(v1, v1, gl_matrix_1.vec3.fromValues(scalar1, scalar1, scalar1));
            gl_matrix_1.vec3.add(panOffset, panOffset, v1);
            // // up
            const v2 = gl_matrix_1.vec3.fromValues(mat[4], mat[5], mat[6]);
            const scalar2 = 2 * panDelta[1] * targetDistance / ((_d = this._controls.canvas) === null || _d === void 0 ? void 0 : _d.clientHeight);
            gl_matrix_1.vec3.multiply(v2, v2, gl_matrix_1.vec3.fromValues(scalar2, scalar2, scalar2));
            gl_matrix_1.vec3.add(panOffset, panOffset, v2);
        }
        return gl_matrix_1.vec3.clone(panOffset);
    }
    rotationSphericalToOffset(s) {
        let offset = gl_matrix_1.vec3.create();
        gl_matrix_1.vec3.subtract(offset, this._controls.getPositionWithManualUpdates(), this._controls.getTargetWithManualUpdates());
        gl_matrix_1.vec3.transformQuat(offset, offset, this._quat);
        const spherical = new viewer_shared_math_1.Spherical().fromVec3(offset);
        spherical.theta += s.theta;
        spherical.phi += s.phi;
        const minAzimuthAngle = this._controls.rotationRestriction.minAzimuthAngle * (Math.PI / 180), maxAzimuthAngle = this._controls.rotationRestriction.maxAzimuthAngle * (Math.PI / 180);
        if (spherical.theta > Math.PI) {
            spherical.theta -= 2 * Math.PI;
            if (minAzimuthAngle > spherical.theta) {
                spherical.theta += 2 * Math.PI;
            }
        }
        else if (spherical.theta < -Math.PI) {
            spherical.theta += 2 * Math.PI;
            if (maxAzimuthAngle < spherical.theta) {
                spherical.theta -= 2 * Math.PI;
            }
        }
        spherical.makeSafe();
        offset = spherical.toVec3();
        offset = gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), offset, this._quatInverse);
        offset = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), offset, this._controls.getTargetWithManualUpdates());
        offset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), offset, this._controls.getPositionWithManualUpdates());
        return gl_matrix_1.vec3.clone(offset);
    }
    zoomDistanceToOffset(distance) {
        const offset = gl_matrix_1.vec3.create();
        gl_matrix_1.vec3.subtract(offset, this._controls.getPositionWithManualUpdates(), this._controls.getTargetWithManualUpdates());
        return gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), offset, gl_matrix_1.vec3.fromValues(distance, distance, distance));
    }
}
exports.CameraControlsLogic = CameraControlsLogic;
//# sourceMappingURL=CameraControlsLogic.js.map

/***/ }),

/***/ 45080:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrthographicCameraControls = void 0;
const AbstractCameraControls_1 = __webpack_require__(81600);
const CameraControlsLogic_1 = __webpack_require__(92658);
const CameraControlsEventDistribution_1 = __webpack_require__(68410);
class OrthographicCameraControls extends AbstractCameraControls_1.AbstractCameraControls {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(camera, enabled) {
        super(camera, enabled);
        // #region Properties (2)
        this._settingsAdjustments = {
            autoRotationSpeed: 2 * Math.PI / 60 / 60,
            damping: 1.0,
            movementSmoothness: 1.0,
            panSpeed: 1.75,
            rotationSpeed: Math.PI,
            zoomSpeed: 0.025,
        };
        this._touchAdjustments = {
            autoRotationSpeed: 1.0,
            damping: 1.0,
            movementSmoothness: 1.0,
            panSpeed: 4.0 / 1.75,
            rotationSpeed: 1.5,
            zoomSpeed: 100.0,
        };
        this._cameraLogic = new CameraControlsLogic_1.CameraControlsLogic(this, this._settingsAdjustments, this._touchAdjustments);
        this._cameraControlsEventDistribution = new CameraControlsEventDistribution_1.CameraControlsEventDistribution(this, this._cameraLogic);
    }
}
exports.OrthographicCameraControls = OrthographicCameraControls;
//# sourceMappingURL=OrthographicCameraControls.js.map

/***/ }),

/***/ 85092:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PerspectiveCameraControls = void 0;
const AbstractCameraControls_1 = __webpack_require__(81600);
const CameraControlsLogic_1 = __webpack_require__(92658);
const CameraControlsEventDistribution_1 = __webpack_require__(68410);
class PerspectiveCameraControls extends AbstractCameraControls_1.AbstractCameraControls {
    // #endregion Properties (3)
    // #region Constructors (1)
    constructor(camera, enabled) {
        super(camera, enabled);
        // #region Properties (3)
        this._settingsAdjustments = {
            autoRotationSpeed: 2 * Math.PI / 60 / 60,
            damping: 1.0,
            movementSmoothness: 1.0,
            panSpeed: 1.75,
            rotationSpeed: Math.PI,
            zoomSpeed: 0.025,
        };
        this._touchAdjustments = {
            autoRotationSpeed: 1.0,
            damping: 1.0,
            movementSmoothness: 1.0,
            panSpeed: 1.0 / 1.75,
            rotationSpeed: 1.5,
            zoomSpeed: 100.0,
        };
        this._cameraLogic = new CameraControlsLogic_1.CameraControlsLogic(this, this._settingsAdjustments, this._touchAdjustments);
        this._cameraControlsEventDistribution = new CameraControlsEventDistribution_1.CameraControlsEventDistribution(this, this._cameraLogic);
    }
}
exports.PerspectiveCameraControls = PerspectiveCameraControls;
//# sourceMappingURL=PerspectiveCameraControls.js.map

/***/ }),

/***/ 72639:
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
exports.CameraInterpolationManager = void 0;
const TWEEN = __importStar(__webpack_require__(60800));
const CameraCylindricalInterpolation_1 = __webpack_require__(95125);
const CameraLinearInterpolation_1 = __webpack_require__(63246);
const CameraMultipleInterpolation_1 = __webpack_require__(56657);
const CameraSphericalInterpolation_1 = __webpack_require__(5484);
class CameraInterpolationManager {
    // #endregion Properties (2)
    // #region Constructors (1)
    constructor(_camera, _cameraControls) {
        this._camera = _camera;
        this._cameraControls = _cameraControls;
        // #region Properties (2)
        this.TweenWrapper = class {
            constructor(options, cb, onComplete) {
                this._properties = { delta: 0 };
                this._tween = new TWEEN.Tween(this._properties);
                this._tween.easing(options.easing);
                this._tween.to({ delta: 1.0 }, options.duration);
                this._tween.onUpdate((v) => {
                    cb.onUpdate(v);
                });
                this._tween.onStop((v) => {
                    if (cb.onStop)
                        cb.onStop(v);
                    this._resolve(true);
                });
                this._tween.onComplete((v) => {
                    if (cb.onComplete)
                        cb.onComplete(v);
                    onComplete();
                    this._resolve(true);
                });
            }
            start() {
                return new Promise((resolve) => {
                    this._resolve = resolve;
                    this._tween.start();
                });
            }
            stop() {
                this._tween.stop();
            }
        };
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    active() {
        return this._tween ? true : false;
    }
    /**
     * cameraTween
     */
    interpolate(path, options = {}) {
        const newPath = [];
        for (let i = 0; i < path.length; i++)
            newPath.push({
                position: path[i].position,
                target: path[i].target,
            });
        if (this._tween) {
            this._tween.stop();
            this._tween = null;
        }
        const parsedOptions = this.optionsParser(options);
        this._tween = new this.TweenWrapper(parsedOptions, newPath.length === 2 ?
            this.getCameraInterpolation(newPath[0], newPath[1], parsedOptions.coordinates) :
            new CameraMultipleInterpolation_1.CameraMultipleInterpolation(this._camera, this._cameraControls, newPath, parsedOptions.interpolation), () => { this._tween = null; });
        return this._tween.start();
    }
    stop() {
        if (this._tween)
            this._tween.stop();
        this._tween = null;
    }
    // #endregion Public Methods (3)
    // #region Private Methods (2)
    getCameraInterpolation(from, to, type) {
        switch (type) {
            case 'linear':
                return new CameraLinearInterpolation_1.CameraLinearInterpolation(this._camera, this._cameraControls, from, to);
            case 'spherical':
                return new CameraSphericalInterpolation_1.CameraSphericalInterpolation(this._camera, this._cameraControls, from, to);
            case 'cylindrical':
                return new CameraCylindricalInterpolation_1.CameraCylindricalInterpolation(this._camera, this._cameraControls, from, to);
            default:
                return new CameraMultipleInterpolation_1.CameraMultipleInterpolation(this._camera, this._cameraControls, [from, to], TWEEN.Interpolation.CatmullRom);
        }
    }
    optionsParser(options) {
        let easing = TWEEN.Easing.Quartic.InOut;
        if (typeof options.easing === 'string') {
            const keys = options.easing.split('.');
            const easingFamily = TWEEN.Easing[keys[0]];
            if (easingFamily) {
                const easingFunction = easingFamily[keys[1]];
                if (easingFunction)
                    easing = easingFunction;
            }
        }
        else if (typeof options.easing === 'function') {
            easing = options.easing;
        }
        let interpolation = TWEEN.Interpolation.CatmullRom;
        if (typeof options.interpolation === 'string') {
            const interpolationFunction = TWEEN.Interpolation[options.interpolation];
            if (interpolationFunction && interpolationFunction !== TWEEN.Interpolation.Utils)
                interpolation = interpolationFunction;
        }
        else if (typeof options.interpolation === 'function') {
            interpolation = options.interpolation;
        }
        return {
            duration: options.duration && options.duration >= 0 ? options.duration : 0,
            easing,
            coordinates: options.coordinates !== 'spherical' && options.coordinates !== 'linear' && options.coordinates !== 'cylindrical' ? 'cylindrical' : options.coordinates,
            interpolation
        };
    }
}
exports.CameraInterpolationManager = CameraInterpolationManager;
//# sourceMappingURL=CameraInterpolationManager.js.map

/***/ }),

/***/ 95125:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraCylindricalInterpolation = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class CameraCylindricalInterpolation {
    // #endregion Properties (10)
    // #region Constructors (1)
    constructor(_camera, _cameraControls, _from, _to) {
        this._camera = _camera;
        this._cameraControls = _cameraControls;
        this._from = _from;
        this._to = _to;
        this._h_from = this._from.position[2] - this._from.target[2];
        this._from_position_heightAdjusted = gl_matrix_1.vec3.fromValues(this._from.position[0], this._from.position[1], this._from.target[2]);
        this._r_from = gl_matrix_1.vec3.distance(this._from_position_heightAdjusted, this._from.target);
        this._dir_from = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._from_position_heightAdjusted, this._from.target));
        this._h_to = this._to.position[2] - this._to.target[2];
        this._to_position_heightAdjusted = gl_matrix_1.vec3.fromValues(this._to.position[0], this._to.position[1], this._to.target[2]);
        this._r_to = gl_matrix_1.vec3.distance(this._to_position_heightAdjusted, this._to.target);
        this._dir_to = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._to_position_heightAdjusted, this._to.target));
        if (this._dir_from[0] === 0 && this._dir_from[1] === 0 && this._dir_from[2] === 0)
            this._dir_from = gl_matrix_1.vec3.fromValues(1, 0, 0);
        if (this._dir_to[0] === 0 && this._dir_to[1] === 0 && this._dir_to[2] === 0)
            this._dir_to = gl_matrix_1.vec3.fromValues(1, 0, 0);
        this._lorr = gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), this._dir_to, this._dir_from);
        // This is why people hate JavaScript. The dot product of two normalized vector is larger than 1 on occasion due to precision errors...
        const dot1 = Math.min(1, Math.max(-1, gl_matrix_1.vec3.dot(this._dir_to, this._dir_from)));
        const dot2 = Math.min(1, Math.max(-1, gl_matrix_1.vec3.dot(this._lorr, gl_matrix_1.vec3.fromValues(0, 0, 1))));
        this._shortest_angle = dot2 > 0 ? -Math.acos(dot1) : Math.acos(dot1);
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    onComplete(value) {
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this._to.position[0], this._to.position[1], this._to.position[2]), this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this._to.target[0], this._to.target[1], this._to.target[2]), this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
    }
    onStop(value) {
    }
    onUpdate(value) {
        const t = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._from.target, gl_matrix_1.vec3.fromValues(1 - value.delta, 1 - value.delta, 1 - value.delta)), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._to.target, gl_matrix_1.vec3.fromValues(value.delta, value.delta, value.delta)));
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), t, this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
        const angle = this._shortest_angle * value.delta;
        const dir = gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), this._dir_from, gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), gl_matrix_1.vec3.fromValues(0, 0, 1), angle));
        const scalar = this._r_from * (1 - value.delta) + this._r_to * value.delta;
        const p = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), t, gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), dir, gl_matrix_1.vec3.fromValues(scalar, scalar, scalar)));
        gl_matrix_1.vec3.add(p, p, gl_matrix_1.vec3.fromValues(0, 0, (this._h_from * (1 - value.delta) + this._h_to * value.delta)));
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), p, this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
    }
}
exports.CameraCylindricalInterpolation = CameraCylindricalInterpolation;
//# sourceMappingURL=CameraCylindricalInterpolation.js.map

/***/ }),

/***/ 63246:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraLinearInterpolation = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class CameraLinearInterpolation {
    // #region Constructors (1)
    constructor(_camera, _cameraControls, _from, _to) {
        this._camera = _camera;
        this._cameraControls = _cameraControls;
        this._from = _from;
        this._to = _to;
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    onComplete(value) {
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._to.position, this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._to.target, this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
    }
    onStop(value) {
    }
    onUpdate(value) {
        const p = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._from.position, gl_matrix_1.vec3.fromValues(1 - value.delta, 1 - value.delta, 1 - value.delta)), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._to.position, gl_matrix_1.vec3.fromValues(value.delta, value.delta, value.delta)));
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), p, this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
        const t = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._from.target, gl_matrix_1.vec3.fromValues(1 - value.delta, 1 - value.delta, 1 - value.delta)), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._to.target, gl_matrix_1.vec3.fromValues(value.delta, value.delta, value.delta)));
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), t, this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
    }
}
exports.CameraLinearInterpolation = CameraLinearInterpolation;
//# sourceMappingURL=CameraLinearInterpolation.js.map

/***/ }),

/***/ 56657:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraMultipleInterpolation = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class CameraMultipleInterpolation {
    // #endregion Properties (1)
    // #region Constructors (1)
    constructor(_camera, _cameraControls, _path, _interpolationFunction) {
        this._camera = _camera;
        this._cameraControls = _cameraControls;
        this._path = _path;
        this._interpolationFunction = _interpolationFunction;
        // #region Properties (1)
        this.end = {
            position: { x: [], y: [], z: [] },
            target: { x: [], y: [], z: [] }
        };
        for (let i = 0; i < this._path.length; i++) {
            this.end.position.x.push(this._path[i].position[0]);
            this.end.position.y.push(this._path[i].position[1]);
            this.end.position.z.push(this._path[i].position[2]);
            this.end.target.x.push(this._path[i].target[0]);
            this.end.target.y.push(this._path[i].target[1]);
            this.end.target.z.push(this._path[i].target[2]);
        }
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    onComplete(value) {
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this._path[this._path.length - 1].position[0], this._path[this._path.length - 1].position[1], this._path[this._path.length - 1].position[2]), this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this._path[this._path.length - 1].target[0], this._path[this._path.length - 1].target[1], this._path[this._path.length - 1].target[2]), this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
    }
    onStop(value) {
    }
    onUpdate(value) {
        const p = gl_matrix_1.vec3.fromValues(this._interpolationFunction(this.end.position.x, value.delta), this._interpolationFunction(this.end.position.y, value.delta), this._interpolationFunction(this.end.position.z, value.delta));
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), p, this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
        const t = gl_matrix_1.vec3.fromValues(this._interpolationFunction(this.end.target.x, value.delta), this._interpolationFunction(this.end.target.y, value.delta), this._interpolationFunction(this.end.target.z, value.delta));
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), t, this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
    }
}
exports.CameraMultipleInterpolation = CameraMultipleInterpolation;
//# sourceMappingURL=CameraMultipleInterpolation.js.map

/***/ }),

/***/ 5484:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CameraSphericalInterpolation = void 0;
const gl_matrix_1 = __webpack_require__(61961);
class CameraSphericalInterpolation {
    // #endregion Properties (6)
    // #region Constructors (1)
    constructor(_camera, _cameraControls, _from, _to) {
        this._camera = _camera;
        this._cameraControls = _cameraControls;
        this._from = _from;
        this._to = _to;
        this._radius_from = gl_matrix_1.vec3.distance(this._from.position, this._from.target);
        this._direction_from = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._from.position, this._from.target));
        this._radius_to = gl_matrix_1.vec3.distance(this._to.position, this._to.target);
        this._direction_to = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), this._to.position, this._to.target));
        this._axis = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.cross(gl_matrix_1.vec3.create(), this._direction_to, this._direction_from));
        this._c_angle = -Math.acos(Math.min(1, Math.max(-1, gl_matrix_1.vec3.dot(this._direction_to, this._direction_from))));
    }
    // #endregion Constructors (1)
    // #region Public Methods (3)
    onComplete(value) {
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this._to.position[0], this._to.position[1], this._to.position[2]), this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.fromValues(this._to.target[0], this._to.target[1], this._to.target[2]), this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
    }
    onStop(value) {
    }
    onUpdate(value) {
        const t = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._from.target, gl_matrix_1.vec3.fromValues(1 - value.delta, 1 - value.delta, 1 - value.delta)), gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), this._to.target, gl_matrix_1.vec3.fromValues(value.delta, value.delta, value.delta)));
        const targetOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), t, this._cameraControls.getTargetWithUpdates());
        this._cameraControls.applyTargetVector(targetOffset);
        const angle = this._c_angle * value.delta;
        const dir = gl_matrix_1.vec3.normalize(gl_matrix_1.vec3.create(), gl_matrix_1.vec3.transformQuat(gl_matrix_1.vec3.create(), this._direction_from, gl_matrix_1.quat.setAxisAngle(gl_matrix_1.quat.create(), this._axis, angle)));
        const scalar = (this._radius_from * (1 - value.delta) + this._radius_to * value.delta);
        const p = gl_matrix_1.vec3.add(gl_matrix_1.vec3.create(), t, gl_matrix_1.vec3.multiply(gl_matrix_1.vec3.create(), dir, gl_matrix_1.vec3.fromValues(scalar, scalar, scalar)));
        const positionOffset = gl_matrix_1.vec3.subtract(gl_matrix_1.vec3.create(), p, this._cameraControls.getPositionWithUpdates());
        this._cameraControls.applyPositionVector(positionOffset);
    }
}
exports.CameraSphericalInterpolation = CameraSphericalInterpolation;
//# sourceMappingURL=CameraSphericalInterpolation.js.map

/***/ }),

/***/ 17989:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.OrthographicCameraControls = exports.PerspectiveCameraControls = exports.OrthographicCamera = exports.PerspectiveCamera = exports.ORTHOGRAPHIC_CAMERA_DIRECTION = exports.CAMERA_TYPE = exports.AbstractCamera = exports.CameraEngine = void 0;
const AbstractCamera_1 = __webpack_require__(26153);
Object.defineProperty(exports, "AbstractCamera", ({ enumerable: true, get: function () { return AbstractCamera_1.AbstractCamera; } }));
const ICameraEngine_1 = __webpack_require__(23564);
Object.defineProperty(exports, "CAMERA_TYPE", ({ enumerable: true, get: function () { return ICameraEngine_1.CAMERA_TYPE; } }));
const CameraEngine_1 = __webpack_require__(28839);
Object.defineProperty(exports, "CameraEngine", ({ enumerable: true, get: function () { return CameraEngine_1.CameraEngine; } }));
const IOrthographicCamera_1 = __webpack_require__(49578);
Object.defineProperty(exports, "ORTHOGRAPHIC_CAMERA_DIRECTION", ({ enumerable: true, get: function () { return IOrthographicCamera_1.ORTHOGRAPHIC_CAMERA_DIRECTION; } }));
const OrthographicCamera_1 = __webpack_require__(36817);
Object.defineProperty(exports, "OrthographicCamera", ({ enumerable: true, get: function () { return OrthographicCamera_1.OrthographicCamera; } }));
const OrthographicCameraControls_1 = __webpack_require__(45080);
Object.defineProperty(exports, "OrthographicCameraControls", ({ enumerable: true, get: function () { return OrthographicCameraControls_1.OrthographicCameraControls; } }));
const PerspectiveCamera_1 = __webpack_require__(80187);
Object.defineProperty(exports, "PerspectiveCamera", ({ enumerable: true, get: function () { return PerspectiveCamera_1.PerspectiveCamera; } }));
const PerspectiveCameraControls_1 = __webpack_require__(85092);
Object.defineProperty(exports, "PerspectiveCameraControls", ({ enumerable: true, get: function () { return PerspectiveCameraControls_1.PerspectiveCameraControls; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 23564:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CAMERA_TYPE = void 0;
// #endregion Interfaces (1)
// #region Enums (1)
var CAMERA_TYPE;
(function (CAMERA_TYPE) {
    CAMERA_TYPE["PERSPECTIVE"] = "perspective";
    CAMERA_TYPE["ORTHOGRAPHIC"] = "orthographic";
})(CAMERA_TYPE = exports.CAMERA_TYPE || (exports.CAMERA_TYPE = {}));
// #endregion Enums (1)
//# sourceMappingURL=ICameraEngine.js.map

/***/ }),

/***/ 49578:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ORTHOGRAPHIC_CAMERA_DIRECTION = void 0;
// #endregion Interfaces (1)
// #region Enums (1)
var ORTHOGRAPHIC_CAMERA_DIRECTION;
(function (ORTHOGRAPHIC_CAMERA_DIRECTION) {
    ORTHOGRAPHIC_CAMERA_DIRECTION["TOP"] = "top";
    ORTHOGRAPHIC_CAMERA_DIRECTION["BOTTOM"] = "bottom";
    ORTHOGRAPHIC_CAMERA_DIRECTION["LEFT"] = "left";
    ORTHOGRAPHIC_CAMERA_DIRECTION["RIGHT"] = "right";
    ORTHOGRAPHIC_CAMERA_DIRECTION["FRONT"] = "front";
    ORTHOGRAPHIC_CAMERA_DIRECTION["BACK"] = "back";
    ORTHOGRAPHIC_CAMERA_DIRECTION["CUSTOM"] = "custom";
})(ORTHOGRAPHIC_CAMERA_DIRECTION = exports.ORTHOGRAPHIC_CAMERA_DIRECTION || (exports.ORTHOGRAPHIC_CAMERA_DIRECTION = {}));
// #endregion Enums (1)
//# sourceMappingURL=IOrthographicCamera.js.map

/***/ }),

/***/ 60800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Easing: () => (/* binding */ Easing),
/* harmony export */   Group: () => (/* binding */ Group),
/* harmony export */   Interpolation: () => (/* binding */ Interpolation),
/* harmony export */   Sequence: () => (/* binding */ Sequence),
/* harmony export */   Tween: () => (/* binding */ Tween),
/* harmony export */   VERSION: () => (/* binding */ VERSION),
/* harmony export */   add: () => (/* binding */ add),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   getAll: () => (/* binding */ getAll),
/* harmony export */   nextId: () => (/* binding */ nextId),
/* harmony export */   now: () => (/* binding */ now$1),
/* harmony export */   remove: () => (/* binding */ remove),
/* harmony export */   removeAll: () => (/* binding */ removeAll),
/* harmony export */   update: () => (/* binding */ update)
/* harmony export */ });
/**
 * The Ease class provides a collection of easing functions for use with tween.js.
 */
var Easing = {
    Linear: {
        None: function (amount) {
            return amount;
        },
    },
    Quadratic: {
        In: function (amount) {
            return amount * amount;
        },
        Out: function (amount) {
            return amount * (2 - amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount;
            }
            return -0.5 * (--amount * (amount - 2) - 1);
        },
    },
    Cubic: {
        In: function (amount) {
            return amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount + 2);
        },
    },
    Quartic: {
        In: function (amount) {
            return amount * amount * amount * amount;
        },
        Out: function (amount) {
            return 1 - --amount * amount * amount * amount;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount;
            }
            return -0.5 * ((amount -= 2) * amount * amount * amount - 2);
        },
    },
    Quintic: {
        In: function (amount) {
            return amount * amount * amount * amount * amount;
        },
        Out: function (amount) {
            return --amount * amount * amount * amount * amount + 1;
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return 0.5 * amount * amount * amount * amount * amount;
            }
            return 0.5 * ((amount -= 2) * amount * amount * amount * amount + 2);
        },
    },
    Sinusoidal: {
        In: function (amount) {
            return 1 - Math.cos((amount * Math.PI) / 2);
        },
        Out: function (amount) {
            return Math.sin((amount * Math.PI) / 2);
        },
        InOut: function (amount) {
            return 0.5 * (1 - Math.cos(Math.PI * amount));
        },
    },
    Exponential: {
        In: function (amount) {
            return amount === 0 ? 0 : Math.pow(1024, amount - 1);
        },
        Out: function (amount) {
            return amount === 1 ? 1 : 1 - Math.pow(2, -10 * amount);
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            if ((amount *= 2) < 1) {
                return 0.5 * Math.pow(1024, amount - 1);
            }
            return 0.5 * (-Math.pow(2, -10 * (amount - 1)) + 2);
        },
    },
    Circular: {
        In: function (amount) {
            return 1 - Math.sqrt(1 - amount * amount);
        },
        Out: function (amount) {
            return Math.sqrt(1 - --amount * amount);
        },
        InOut: function (amount) {
            if ((amount *= 2) < 1) {
                return -0.5 * (Math.sqrt(1 - amount * amount) - 1);
            }
            return 0.5 * (Math.sqrt(1 - (amount -= 2) * amount) + 1);
        },
    },
    Elastic: {
        In: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return -Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
        },
        Out: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            return Math.pow(2, -10 * amount) * Math.sin((amount - 0.1) * 5 * Math.PI) + 1;
        },
        InOut: function (amount) {
            if (amount === 0) {
                return 0;
            }
            if (amount === 1) {
                return 1;
            }
            amount *= 2;
            if (amount < 1) {
                return -0.5 * Math.pow(2, 10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI);
            }
            return 0.5 * Math.pow(2, -10 * (amount - 1)) * Math.sin((amount - 1.1) * 5 * Math.PI) + 1;
        },
    },
    Back: {
        In: function (amount) {
            var s = 1.70158;
            return amount * amount * ((s + 1) * amount - s);
        },
        Out: function (amount) {
            var s = 1.70158;
            return --amount * amount * ((s + 1) * amount + s) + 1;
        },
        InOut: function (amount) {
            var s = 1.70158 * 1.525;
            if ((amount *= 2) < 1) {
                return 0.5 * (amount * amount * ((s + 1) * amount - s));
            }
            return 0.5 * ((amount -= 2) * amount * ((s + 1) * amount + s) + 2);
        },
    },
    Bounce: {
        In: function (amount) {
            return 1 - Easing.Bounce.Out(1 - amount);
        },
        Out: function (amount) {
            if (amount < 1 / 2.75) {
                return 7.5625 * amount * amount;
            }
            else if (amount < 2 / 2.75) {
                return 7.5625 * (amount -= 1.5 / 2.75) * amount + 0.75;
            }
            else if (amount < 2.5 / 2.75) {
                return 7.5625 * (amount -= 2.25 / 2.75) * amount + 0.9375;
            }
            else {
                return 7.5625 * (amount -= 2.625 / 2.75) * amount + 0.984375;
            }
        },
        InOut: function (amount) {
            if (amount < 0.5) {
                return Easing.Bounce.In(amount * 2) * 0.5;
            }
            return Easing.Bounce.Out(amount * 2 - 1) * 0.5 + 0.5;
        },
    },
};

var now;
// Include a performance.now polyfill.
// In node.js, use process.hrtime.
// eslint-disable-next-line
// @ts-ignore
if (typeof self === 'undefined' && typeof process !== 'undefined' && process.hrtime) {
    now = function () {
        // eslint-disable-next-line
        // @ts-ignore
        var time = process.hrtime();
        // Convert [seconds, nanoseconds] to milliseconds.
        return time[0] * 1000 + time[1] / 1000000;
    };
}
// In a browser, use self.performance.now if it is available.
else if (typeof self !== 'undefined' && self.performance !== undefined && self.performance.now !== undefined) {
    // This must be bound, because directly assigning this function
    // leads to an invocation exception in Chrome.
    now = self.performance.now.bind(self.performance);
}
// Use Date.now if it is available.
else if (Date.now !== undefined) {
    now = Date.now;
}
// Otherwise, use 'new Date().getTime()'.
else {
    now = function () {
        return new Date().getTime();
    };
}
var now$1 = now;

/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tween
 */
var Group = /** @class */ (function () {
    function Group() {
        this._tweens = {};
        this._tweensAddedDuringUpdate = {};
    }
    Group.prototype.getAll = function () {
        var _this = this;
        return Object.keys(this._tweens).map(function (tweenId) {
            return _this._tweens[tweenId];
        });
    };
    Group.prototype.removeAll = function () {
        this._tweens = {};
    };
    Group.prototype.add = function (tween) {
        this._tweens[tween.getId()] = tween;
        this._tweensAddedDuringUpdate[tween.getId()] = tween;
    };
    Group.prototype.remove = function (tween) {
        delete this._tweens[tween.getId()];
        delete this._tweensAddedDuringUpdate[tween.getId()];
    };
    Group.prototype.update = function (time, preserve) {
        if (time === void 0) { time = now$1(); }
        if (preserve === void 0) { preserve = false; }
        var tweenIds = Object.keys(this._tweens);
        if (tweenIds.length === 0) {
            return false;
        }
        // Tweens are updated in "batches". If you add a new tween during an
        // update, then the new tween will be updated in the next batch.
        // If you remove a tween during an update, it may or may not be updated.
        // However, if the removed tween was added during the current batch,
        // then it will not be updated.
        while (tweenIds.length > 0) {
            this._tweensAddedDuringUpdate = {};
            for (var i = 0; i < tweenIds.length; i++) {
                var tween = this._tweens[tweenIds[i]];
                var autoStart = !preserve;
                if (tween && tween.update(time, autoStart) === false && !preserve) {
                    delete this._tweens[tweenIds[i]];
                }
            }
            tweenIds = Object.keys(this._tweensAddedDuringUpdate);
        }
        return true;
    };
    return Group;
}());

/**
 *
 */
var Interpolation = {
    Linear: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.Linear;
        if (k < 0) {
            return fn(v[0], v[1], f);
        }
        if (k > 1) {
            return fn(v[m], v[m - 1], m - f);
        }
        return fn(v[i], v[i + 1 > m ? m : i + 1], f - i);
    },
    Bezier: function (v, k) {
        var b = 0;
        var n = v.length - 1;
        var pw = Math.pow;
        var bn = Interpolation.Utils.Bernstein;
        for (var i = 0; i <= n; i++) {
            b += pw(1 - k, n - i) * pw(k, i) * v[i] * bn(n, i);
        }
        return b;
    },
    CatmullRom: function (v, k) {
        var m = v.length - 1;
        var f = m * k;
        var i = Math.floor(f);
        var fn = Interpolation.Utils.CatmullRom;
        if (v[0] === v[m]) {
            if (k < 0) {
                i = Math.floor((f = m * (1 + k)));
            }
            return fn(v[(i - 1 + m) % m], v[i], v[(i + 1) % m], v[(i + 2) % m], f - i);
        }
        else {
            if (k < 0) {
                return v[0] - (fn(v[0], v[0], v[1], v[1], -f) - v[0]);
            }
            if (k > 1) {
                return v[m] - (fn(v[m], v[m], v[m - 1], v[m - 1], f - m) - v[m]);
            }
            return fn(v[i ? i - 1 : 0], v[i], v[m < i + 1 ? m : i + 1], v[m < i + 2 ? m : i + 2], f - i);
        }
    },
    Utils: {
        Linear: function (p0, p1, t) {
            return (p1 - p0) * t + p0;
        },
        Bernstein: function (n, i) {
            var fc = Interpolation.Utils.Factorial;
            return fc(n) / fc(i) / fc(n - i);
        },
        Factorial: (function () {
            var a = [1];
            return function (n) {
                var s = 1;
                if (a[n]) {
                    return a[n];
                }
                for (var i = n; i > 1; i--) {
                    s *= i;
                }
                a[n] = s;
                return s;
            };
        })(),
        CatmullRom: function (p0, p1, p2, p3, t) {
            var v0 = (p2 - p0) * 0.5;
            var v1 = (p3 - p1) * 0.5;
            var t2 = t * t;
            var t3 = t * t2;
            return (2 * p1 - 2 * p2 + v0 + v1) * t3 + (-3 * p1 + 3 * p2 - 2 * v0 - v1) * t2 + v0 * t + p1;
        },
    },
};

/**
 * Utils
 */
var Sequence = /** @class */ (function () {
    function Sequence() {
    }
    Sequence.nextId = function () {
        return Sequence._nextId++;
    };
    Sequence._nextId = 0;
    return Sequence;
}());

var mainGroup = new Group();

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var Tween = /** @class */ (function () {
    function Tween(_object, _group) {
        if (_group === void 0) { _group = mainGroup; }
        this._object = _object;
        this._group = _group;
        this._isPaused = false;
        this._pauseStart = 0;
        this._valuesStart = {};
        this._valuesEnd = {};
        this._valuesStartRepeat = {};
        this._duration = 1000;
        this._initialRepeat = 0;
        this._repeat = 0;
        this._yoyo = false;
        this._isPlaying = false;
        this._reversed = false;
        this._delayTime = 0;
        this._startTime = 0;
        this._easingFunction = Easing.Linear.None;
        this._interpolationFunction = Interpolation.Linear;
        this._chainedTweens = [];
        this._onStartCallbackFired = false;
        this._id = Sequence.nextId();
        this._isChainStopped = false;
        this._goToEnd = false;
    }
    Tween.prototype.getId = function () {
        return this._id;
    };
    Tween.prototype.isPlaying = function () {
        return this._isPlaying;
    };
    Tween.prototype.isPaused = function () {
        return this._isPaused;
    };
    Tween.prototype.to = function (properties, duration) {
        // TODO? restore this, then update the 07_dynamic_to example to set fox
        // tween's to on each update. That way the behavior is opt-in (there's
        // currently no opt-out).
        // for (const prop in properties) this._valuesEnd[prop] = properties[prop]
        this._valuesEnd = Object.create(properties);
        if (duration !== undefined) {
            this._duration = duration;
        }
        return this;
    };
    Tween.prototype.duration = function (d) {
        this._duration = d;
        return this;
    };
    Tween.prototype.start = function (time) {
        if (this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.add(this);
        this._repeat = this._initialRepeat;
        if (this._reversed) {
            // If we were reversed (f.e. using the yoyo feature) then we need to
            // flip the tween direction back to forward.
            this._reversed = false;
            for (var property in this._valuesStartRepeat) {
                this._swapEndStartRepeatValues(property);
                this._valuesStart[property] = this._valuesStartRepeat[property];
            }
        }
        this._isPlaying = true;
        this._isPaused = false;
        this._onStartCallbackFired = false;
        this._isChainStopped = false;
        this._startTime = time !== undefined ? (typeof time === 'string' ? now$1() + parseFloat(time) : time) : now$1();
        this._startTime += this._delayTime;
        this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat);
        return this;
    };
    Tween.prototype._setupProperties = function (_object, _valuesStart, _valuesEnd, _valuesStartRepeat) {
        for (var property in _valuesEnd) {
            var startValue = _object[property];
            var startValueIsArray = Array.isArray(startValue);
            var propType = startValueIsArray ? 'array' : typeof startValue;
            var isInterpolationList = !startValueIsArray && Array.isArray(_valuesEnd[property]);
            // If `to()` specifies a property that doesn't exist in the source object,
            // we should not set that property in the object
            if (propType === 'undefined' || propType === 'function') {
                continue;
            }
            // Check if an Array was provided as property value
            if (isInterpolationList) {
                var endValues = _valuesEnd[property];
                if (endValues.length === 0) {
                    continue;
                }
                // handle an array of relative values
                endValues = endValues.map(this._handleRelativeValue.bind(this, startValue));
                // Create a local copy of the Array with the start value at the front
                _valuesEnd[property] = [startValue].concat(endValues);
            }
            // handle the deepness of the values
            if ((propType === 'object' || startValueIsArray) && startValue && !isInterpolationList) {
                _valuesStart[property] = startValueIsArray ? [] : {};
                // eslint-disable-next-line
                for (var prop in startValue) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property][prop] = startValue[prop];
                }
                _valuesStartRepeat[property] = startValueIsArray ? [] : {}; // TODO? repeat nested values? And yoyo? And array values?
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._setupProperties(startValue, _valuesStart[property], _valuesEnd[property], _valuesStartRepeat[property]);
            }
            else {
                // Save the starting value, but only once.
                if (typeof _valuesStart[property] === 'undefined') {
                    _valuesStart[property] = startValue;
                }
                if (!startValueIsArray) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStart[property] *= 1.0; // Ensures we're using numbers, not strings
                }
                if (isInterpolationList) {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _valuesStartRepeat[property] = _valuesEnd[property].slice().reverse();
                }
                else {
                    _valuesStartRepeat[property] = _valuesStart[property] || 0;
                }
            }
        }
    };
    Tween.prototype.stop = function () {
        if (!this._isChainStopped) {
            this._isChainStopped = true;
            this.stopChainedTweens();
        }
        if (!this._isPlaying) {
            return this;
        }
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        this._isPlaying = false;
        this._isPaused = false;
        if (this._onStopCallback) {
            this._onStopCallback(this._object);
        }
        return this;
    };
    Tween.prototype.end = function () {
        this._goToEnd = true;
        this.update(Infinity);
        return this;
    };
    Tween.prototype.pause = function (time) {
        if (time === void 0) { time = now$1(); }
        if (this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = true;
        this._pauseStart = time;
        // eslint-disable-next-line
        this._group && this._group.remove(this);
        return this;
    };
    Tween.prototype.resume = function (time) {
        if (time === void 0) { time = now$1(); }
        if (!this._isPaused || !this._isPlaying) {
            return this;
        }
        this._isPaused = false;
        this._startTime += time - this._pauseStart;
        this._pauseStart = 0;
        // eslint-disable-next-line
        this._group && this._group.add(this);
        return this;
    };
    Tween.prototype.stopChainedTweens = function () {
        for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
            this._chainedTweens[i].stop();
        }
        return this;
    };
    Tween.prototype.group = function (group) {
        this._group = group;
        return this;
    };
    Tween.prototype.delay = function (amount) {
        this._delayTime = amount;
        return this;
    };
    Tween.prototype.repeat = function (times) {
        this._initialRepeat = times;
        this._repeat = times;
        return this;
    };
    Tween.prototype.repeatDelay = function (amount) {
        this._repeatDelayTime = amount;
        return this;
    };
    Tween.prototype.yoyo = function (yoyo) {
        this._yoyo = yoyo;
        return this;
    };
    Tween.prototype.easing = function (easingFunction) {
        this._easingFunction = easingFunction;
        return this;
    };
    Tween.prototype.interpolation = function (interpolationFunction) {
        this._interpolationFunction = interpolationFunction;
        return this;
    };
    Tween.prototype.chain = function () {
        var tweens = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            tweens[_i] = arguments[_i];
        }
        this._chainedTweens = tweens;
        return this;
    };
    Tween.prototype.onStart = function (callback) {
        this._onStartCallback = callback;
        return this;
    };
    Tween.prototype.onUpdate = function (callback) {
        this._onUpdateCallback = callback;
        return this;
    };
    Tween.prototype.onRepeat = function (callback) {
        this._onRepeatCallback = callback;
        return this;
    };
    Tween.prototype.onComplete = function (callback) {
        this._onCompleteCallback = callback;
        return this;
    };
    Tween.prototype.onStop = function (callback) {
        this._onStopCallback = callback;
        return this;
    };
    /**
     * @returns true if the tween is still playing after the update, false
     * otherwise (calling update on a paused tween still returns true because
     * it is still playing, just paused).
     */
    Tween.prototype.update = function (time, autoStart) {
        if (time === void 0) { time = now$1(); }
        if (autoStart === void 0) { autoStart = true; }
        if (this._isPaused)
            return true;
        var property;
        var elapsed;
        var endTime = this._startTime + this._duration;
        if (!this._goToEnd && !this._isPlaying) {
            if (time > endTime)
                return false;
            if (autoStart)
                this.start(time);
        }
        this._goToEnd = false;
        if (time < this._startTime) {
            return true;
        }
        if (this._onStartCallbackFired === false) {
            if (this._onStartCallback) {
                this._onStartCallback(this._object);
            }
            this._onStartCallbackFired = true;
        }
        elapsed = (time - this._startTime) / this._duration;
        elapsed = this._duration === 0 || elapsed > 1 ? 1 : elapsed;
        var value = this._easingFunction(elapsed);
        // properties transformations
        this._updateProperties(this._object, this._valuesStart, this._valuesEnd, value);
        if (this._onUpdateCallback) {
            this._onUpdateCallback(this._object, elapsed);
        }
        if (elapsed === 1) {
            if (this._repeat > 0) {
                if (isFinite(this._repeat)) {
                    this._repeat--;
                }
                // Reassign starting values, restart by making startTime = now
                for (property in this._valuesStartRepeat) {
                    if (!this._yoyo && typeof this._valuesEnd[property] === 'string') {
                        this._valuesStartRepeat[property] =
                            // eslint-disable-next-line
                            // @ts-ignore FIXME?
                            this._valuesStartRepeat[property] + parseFloat(this._valuesEnd[property]);
                    }
                    if (this._yoyo) {
                        this._swapEndStartRepeatValues(property);
                    }
                    this._valuesStart[property] = this._valuesStartRepeat[property];
                }
                if (this._yoyo) {
                    this._reversed = !this._reversed;
                }
                if (this._repeatDelayTime !== undefined) {
                    this._startTime = time + this._repeatDelayTime;
                }
                else {
                    this._startTime = time + this._delayTime;
                }
                if (this._onRepeatCallback) {
                    this._onRepeatCallback(this._object);
                }
                return true;
            }
            else {
                if (this._onCompleteCallback) {
                    this._onCompleteCallback(this._object);
                }
                for (var i = 0, numChainedTweens = this._chainedTweens.length; i < numChainedTweens; i++) {
                    // Make the chained tweens start exactly at the time they should,
                    // even if the `update()` method was called way past the duration of the tween
                    this._chainedTweens[i].start(this._startTime + this._duration);
                }
                this._isPlaying = false;
                return false;
            }
        }
        return true;
    };
    Tween.prototype._updateProperties = function (_object, _valuesStart, _valuesEnd, value) {
        for (var property in _valuesEnd) {
            // Don't update properties that do not exist in the source object
            if (_valuesStart[property] === undefined) {
                continue;
            }
            var start = _valuesStart[property] || 0;
            var end = _valuesEnd[property];
            var startIsArray = Array.isArray(_object[property]);
            var endIsArray = Array.isArray(end);
            var isInterpolationList = !startIsArray && endIsArray;
            if (isInterpolationList) {
                _object[property] = this._interpolationFunction(end, value);
            }
            else if (typeof end === 'object' && end) {
                // eslint-disable-next-line
                // @ts-ignore FIXME?
                this._updateProperties(_object[property], start, end, value);
            }
            else {
                // Parses relative end values with start as base (e.g.: +10, -3)
                end = this._handleRelativeValue(start, end);
                // Protect against non numeric properties.
                if (typeof end === 'number') {
                    // eslint-disable-next-line
                    // @ts-ignore FIXME?
                    _object[property] = start + (end - start) * value;
                }
            }
        }
    };
    Tween.prototype._handleRelativeValue = function (start, end) {
        if (typeof end !== 'string') {
            return end;
        }
        if (end.charAt(0) === '+' || end.charAt(0) === '-') {
            return start + parseFloat(end);
        }
        else {
            return parseFloat(end);
        }
    };
    Tween.prototype._swapEndStartRepeatValues = function (property) {
        var tmp = this._valuesStartRepeat[property];
        var endValue = this._valuesEnd[property];
        if (typeof endValue === 'string') {
            this._valuesStartRepeat[property] = this._valuesStartRepeat[property] + parseFloat(endValue);
        }
        else {
            this._valuesStartRepeat[property] = this._valuesEnd[property];
        }
        this._valuesEnd[property] = tmp;
    };
    return Tween;
}());

var VERSION = '18.6.4';

/**
 * Tween.js - Licensed under the MIT license
 * https://github.com/tweenjs/tween.js
 * ----------------------------------------------
 *
 * See https://github.com/tweenjs/tween.js/graphs/contributors for the full list of contributors.
 * Thank you all, you're awesome!
 */
var nextId = Sequence.nextId;
/**
 * Controlling groups of tweens
 *
 * Using the TWEEN singleton to manage your tweens can cause issues in large apps with many components.
 * In these cases, you may want to create your own smaller groups of tweens.
 */
var TWEEN = mainGroup;
// This is the best way to export things in a way that's compatible with both ES
// Modules and CommonJS, without build hacks, and so as not to break the
// existing API.
// https://github.com/rollup/rollup/issues/1961#issuecomment-423037881
var getAll = TWEEN.getAll.bind(TWEEN);
var removeAll = TWEEN.removeAll.bind(TWEEN);
var add = TWEEN.add.bind(TWEEN);
var remove = TWEEN.remove.bind(TWEEN);
var update = TWEEN.update.bind(TWEEN);
var exports = {
    Easing: Easing,
    Group: Group,
    Interpolation: Interpolation,
    now: now$1,
    Sequence: Sequence,
    nextId: nextId,
    Tween: Tween,
    VERSION: VERSION,
    getAll: getAll,
    removeAll: removeAll,
    add: add,
    remove: remove,
    update: update,
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (exports);



/***/ }),

/***/ 7037:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = void 0;
class Canvas {
    // #region Constructors (1)
    constructor(_id, _originalDefinition, _canvasElement) {
        this._id = _id;
        this._originalDefinition = _originalDefinition;
        this._canvasElement = _canvasElement;
        if (this._originalDefinition && this._originalDefinition instanceof HTMLCanvasElement)
            this._originalDefinition = this._originalDefinition.cloneNode(true);
        if (!_canvasElement) {
            this._canvasElement = document.createElement('canvas');
            this._canvasElement.id = this._id;
        }
        else {
            this._canvasElement = _canvasElement;
        }
        this._canvasElement.style.touchAction = 'none';
    }
    // #endregion Constructors (1)
    // #region Public Accessors (2)
    get canvasElement() {
        return this._canvasElement;
    }
    get id() {
        return this._id;
    }
    // #endregion Public Accessors (2)
    // #region Public Methods (1)
    reset() {
        var _a;
        const parent = (_a = this._canvasElement) === null || _a === void 0 ? void 0 : _a.parentElement;
        parent === null || parent === void 0 ? void 0 : parent.removeChild(this._canvasElement);
        if (this._originalDefinition instanceof HTMLCanvasElement) {
            parent === null || parent === void 0 ? void 0 : parent.appendChild(this._canvasElement);
        }
    }
}
exports.Canvas = Canvas;
//# sourceMappingURL=Canvas.js.map

/***/ }),

/***/ 20551:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CanvasEngine = void 0;
const viewer_shared_services_1 = __webpack_require__(8389);
const Canvas_1 = __webpack_require__(7037);
class CanvasEngine {
    constructor() {
        // #region Properties (3)
        this._canvasDictionary = {};
        this._uuidGenerator = viewer_shared_services_1.UuidGenerator.instance;
        // #endregion Public Methods (2)
    }
    // #endregion Properties (3)
    // #region Public Static Accessors (1)
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    // #endregion Public Static Accessors (1)
    // #region Public Methods (2)
    /**
     * Creates a canvas object that could in the future be expanded to hold more information
     * The definition of the canvas can be:
     * - empty: A canvas is created with an unique ID.
     * - string:
     *      - If a canvas with this ID was created, this canvas is returned.
     *      - If there is an HTMLCanvasElement in the document with this ID, this is used.
     *      - If there is no HTMLElement found in the document with this ID, a canvas with ID will be created.
     * - HTMLCanvasElement: A Canvas Object will be created with this element. If there is no ID, one will be generated.
     *
     * @param canvasDefinition the definition of this canvas
     */
    createCanvasObject(canvasDefinition, storageId) {
        storageId = storageId !== undefined && this._uuidGenerator.validate(storageId) ? storageId : this._uuidGenerator.create();
        if (canvasDefinition instanceof HTMLCanvasElement) {
            // a canvas was provided
            const canvasElement = canvasDefinition;
            if (!canvasElement.id)
                canvasElement.id = this._uuidGenerator.create();
            this._canvasDictionary[storageId] = new Canvas_1.Canvas(canvasElement.id, canvasDefinition, canvasElement);
            return storageId;
        }
        if (canvasDefinition) {
            const id = canvasDefinition;
            const canvasElement = document.getElementById(id);
            for (let canvasId in this._canvasDictionary)
                if (this._canvasDictionary[canvasId].id === id)
                    return canvasId;
            if (canvasElement instanceof HTMLCanvasElement) {
                // id of a canvas was provided
                this._canvasDictionary[storageId] = new Canvas_1.Canvas(id, canvasDefinition, canvasElement);
                return storageId;
            }
            else if (!canvasElement) {
                // no HTMLElement could be found, create Canvas with the id
                this._canvasDictionary[storageId] = new Canvas_1.Canvas(id, canvasDefinition);
                return storageId;
            }
        }
        this._canvasDictionary[storageId] = new Canvas_1.Canvas(storageId, canvasDefinition);
        return storageId;
    }
    getCanvas(storageId) {
        return this._canvasDictionary[storageId];
    }
}
exports.CanvasEngine = CanvasEngine;
//# sourceMappingURL=CanvasEngine.js.map

/***/ }),

/***/ 46614:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Canvas = exports.CanvasEngine = void 0;
const Canvas_1 = __webpack_require__(7037);
Object.defineProperty(exports, "Canvas", ({ enumerable: true, get: function () { return Canvas_1.Canvas; } }));
const CanvasEngine_1 = __webpack_require__(20551);
Object.defineProperty(exports, "CanvasEngine", ({ enumerable: true, get: function () { return CanvasEngine_1.CanvasEngine; } }));
//# sourceMappingURL=index.js.map

/***/ })

}]);
//# sourceMappingURL=vendor.common-c1c880b4.bundle.js.map