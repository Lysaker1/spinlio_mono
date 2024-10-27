"use strict";
(self["webpackChunkspinlio_workspace"] = self["webpackChunkspinlio_workspace"] || []).push([[922],{

/***/ 38281:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdNullObject.js.map

/***/ }),

/***/ 56020:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverCommonsModelStatus = void 0;
var ShapeDiverCommonsModelStatus;
(function (ShapeDiverCommonsModelStatus) {
    ShapeDiverCommonsModelStatus["UNKNOWN"] = "unknown";
    ShapeDiverCommonsModelStatus["NOT_UPLOADED"] = "not_uploaded";
    ShapeDiverCommonsModelStatus["UPLOADED"] = "uploaded";
    ShapeDiverCommonsModelStatus["PENDING"] = "pending";
    ShapeDiverCommonsModelStatus["CONFIRMED"] = "confirmed";
    ShapeDiverCommonsModelStatus["DENIED"] = "denied";
    ShapeDiverCommonsModelStatus["DELETED"] = "deleted";
})(ShapeDiverCommonsModelStatus || (exports.ShapeDiverCommonsModelStatus = ShapeDiverCommonsModelStatus = {}));
//# sourceMappingURL=SdCommonModel.js.map

/***/ }),

/***/ 66313:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverCommonsModelComputationStatus = void 0;
var ShapeDiverCommonsModelComputationStatus;
(function (ShapeDiverCommonsModelComputationStatus) {
    ShapeDiverCommonsModelComputationStatus["SUCCESS"] = "success";
    ShapeDiverCommonsModelComputationStatus["TIMEOUT"] = "timeout";
    ShapeDiverCommonsModelComputationStatus["CHECK_CONFIRMED"] = "checkconfirmed";
    ShapeDiverCommonsModelComputationStatus["CHECK_DENIED"] = "checkdenied";
    ShapeDiverCommonsModelComputationStatus["CHECK_PENDING"] = "checkpending";
    ShapeDiverCommonsModelComputationStatus["MAX_COMBINED_ASSET_SIZE_EXCEEDED"] = "maxcombinedassetsizeexceeded";
    ShapeDiverCommonsModelComputationStatus["MAX_DB_SIZE_PER_OUTPUT_EXCEEDED"] = "maxdbsizeperoutputexceeded";
    ShapeDiverCommonsModelComputationStatus["MAX_PARTS_PER_OUTPUT_EXCEEDED"] = "maxpartsperoutputexceeded";
    ShapeDiverCommonsModelComputationStatus["MAX_ASSET_PARTS_PER_OUTPUT_EXCEEDED"] = "maxassetpartsperoutputexceeded";
    ShapeDiverCommonsModelComputationStatus["MAX_TRANSFORMATIONS_PER_OUTPUT_EXCEEDED"] = "maxtransformationsperoutputexceeded";
    ShapeDiverCommonsModelComputationStatus["MAX_PARTS_EXCEEDED"] = "maxpartsexceeded";
    ShapeDiverCommonsModelComputationStatus["MAX_ASSET_PARTS_EXCEEDED"] = "maxassetpartsexceeded";
    ShapeDiverCommonsModelComputationStatus["RECOVERABLE_ERROR"] = "recoverableerror";
    ShapeDiverCommonsModelComputationStatus["UNRECOVERABLE_ERROR"] = "unrecoverableerror";
    ShapeDiverCommonsModelComputationStatus["NO_OUTPUT_DATA_FOR_DEFAULT_PARAMETER_VALUES"] = "nooutputdatafordefaultparametervalues";
    ShapeDiverCommonsModelComputationStatus["MODEL_WITHOUT_GEOMETRY_OUTPUT"] = "modelwithoutgeometryoutput";
    ShapeDiverCommonsModelComputationStatus["UNKNOWN"] = "unknown";
})(ShapeDiverCommonsModelComputationStatus || (exports.ShapeDiverCommonsModelComputationStatus = ShapeDiverCommonsModelComputationStatus = {}));
//# sourceMappingURL=SdCommonModelComputation.js.map

/***/ }),

/***/ 37400:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverCommonsTicketType = void 0;
var ShapeDiverCommonsTicketType;
(function (ShapeDiverCommonsTicketType) {
    ShapeDiverCommonsTicketType["BACKEND"] = "backend";
    ShapeDiverCommonsTicketType["NONE"] = "";
})(ShapeDiverCommonsTicketType || (exports.ShapeDiverCommonsTicketType = ShapeDiverCommonsTicketType = {}));
//# sourceMappingURL=SdCommonsTicket.js.map

/***/ }),

/***/ 92442:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(12075), exports);
__exportStar(__webpack_require__(83331), exports);
__exportStar(__webpack_require__(34056), exports);
__exportStar(__webpack_require__(99850), exports);
__exportStar(__webpack_require__(74598), exports);
__exportStar(__webpack_require__(28705), exports);
__exportStar(__webpack_require__(27945), exports);
__exportStar(__webpack_require__(48429), exports);
__exportStar(__webpack_require__(59719), exports);
__exportStar(__webpack_require__(64555), exports);
__exportStar(__webpack_require__(56005), exports);
__exportStar(__webpack_require__(11737), exports);
__exportStar(__webpack_require__(27389), exports);
__exportStar(__webpack_require__(4916), exports);
__exportStar(__webpack_require__(32757), exports);
__exportStar(__webpack_require__(10140), exports);
__exportStar(__webpack_require__(38281), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 12075:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverRequestQueryModelComputationStatus = exports.ShapeDiverRequestQueryModelStatus = exports.ShapeDiverRequestModelComputationQueryType = exports.ShapeDiverRequestModelComputationQueryStatus = exports.ShapeDiverRequestModelComputationQueryOrder = exports.ShapeDiverRequestGltfUploadQueryConversion = exports.ShapeDiverRequestLogMessageLevel = exports.ShapeDiverRequestTicketType = void 0;
const SdCommonModel_1 = __webpack_require__(56020);
const SdCommonModelComputation_1 = __webpack_require__(66313);
const SdCommonsTicket_1 = __webpack_require__(37400);
exports.ShapeDiverRequestTicketType = Object.assign({}, SdCommonsTicket_1.ShapeDiverCommonsTicketType);
var ShapeDiverRequestLogMessageLevel;
(function (ShapeDiverRequestLogMessageLevel) {
    ShapeDiverRequestLogMessageLevel[ShapeDiverRequestLogMessageLevel["INFO"] = 0] = "INFO";
    ShapeDiverRequestLogMessageLevel[ShapeDiverRequestLogMessageLevel["WARNING"] = 1] = "WARNING";
    ShapeDiverRequestLogMessageLevel[ShapeDiverRequestLogMessageLevel["ERROR"] = 2] = "ERROR";
})(ShapeDiverRequestLogMessageLevel || (exports.ShapeDiverRequestLogMessageLevel = ShapeDiverRequestLogMessageLevel = {}));
var ShapeDiverRequestGltfUploadQueryConversion;
(function (ShapeDiverRequestGltfUploadQueryConversion) {
    ShapeDiverRequestGltfUploadQueryConversion["NONE"] = "none";
    ShapeDiverRequestGltfUploadQueryConversion["SCENE"] = "scene";
    ShapeDiverRequestGltfUploadQueryConversion["USDZ"] = "usdz";
})(ShapeDiverRequestGltfUploadQueryConversion || (exports.ShapeDiverRequestGltfUploadQueryConversion = ShapeDiverRequestGltfUploadQueryConversion = {}));
var ShapeDiverRequestModelComputationQueryOrder;
(function (ShapeDiverRequestModelComputationQueryOrder) {
    ShapeDiverRequestModelComputationQueryOrder["ASC"] = "asc";
    ShapeDiverRequestModelComputationQueryOrder["DESC"] = "desc";
})(ShapeDiverRequestModelComputationQueryOrder || (exports.ShapeDiverRequestModelComputationQueryOrder = ShapeDiverRequestModelComputationQueryOrder = {}));
var ShapeDiverRequestModelComputationQueryStatus;
(function (ShapeDiverRequestModelComputationQueryStatus) {
    ShapeDiverRequestModelComputationQueryStatus["SUCCESS"] = "success";
    ShapeDiverRequestModelComputationQueryStatus["TIMEOUT"] = "timeout";
    ShapeDiverRequestModelComputationQueryStatus["OTHER"] = "other";
    ShapeDiverRequestModelComputationQueryStatus["ALL"] = "*";
})(ShapeDiverRequestModelComputationQueryStatus || (exports.ShapeDiverRequestModelComputationQueryStatus = ShapeDiverRequestModelComputationQueryStatus = {}));
var ShapeDiverRequestModelComputationQueryType;
(function (ShapeDiverRequestModelComputationQueryType) {
    ShapeDiverRequestModelComputationQueryType["COMPUTATION"] = "computation";
    ShapeDiverRequestModelComputationQueryType["EXPORT"] = "export";
    ShapeDiverRequestModelComputationQueryType["LOAD"] = "load";
    ShapeDiverRequestModelComputationQueryType["ALL"] = "*";
})(ShapeDiverRequestModelComputationQueryType || (exports.ShapeDiverRequestModelComputationQueryType = ShapeDiverRequestModelComputationQueryType = {}));
exports.ShapeDiverRequestQueryModelStatus = Object.assign({}, SdCommonModel_1.ShapeDiverCommonsModelStatus);
exports.ShapeDiverRequestQueryModelComputationStatus = Object.assign({}, SdCommonModelComputation_1.ShapeDiverCommonsModelComputationStatus);
//# sourceMappingURL=SdRequestDto.js.map

/***/ }),

/***/ 83331:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdRequestDtoAnalytics.js.map

/***/ }),

/***/ 34056:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdRequestDtoExportOutput.js.map

/***/ }),

/***/ 99850:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverRequestModelTrustlevel = exports.ShapeDiverRequestModelFiletype = void 0;
var ShapeDiverRequestModelFiletype;
(function (ShapeDiverRequestModelFiletype) {
    ShapeDiverRequestModelFiletype["GRASSHOPPER_BINARY"] = "gh";
    ShapeDiverRequestModelFiletype["GRASSHOPPER_XML"] = "ghx";
})(ShapeDiverRequestModelFiletype || (exports.ShapeDiverRequestModelFiletype = ShapeDiverRequestModelFiletype = {}));
var ShapeDiverRequestModelTrustlevel;
(function (ShapeDiverRequestModelTrustlevel) {
    ShapeDiverRequestModelTrustlevel["UNDEFINED"] = "";
    ShapeDiverRequestModelTrustlevel["NONE"] = "none";
    ShapeDiverRequestModelTrustlevel["FULL"] = "full";
})(ShapeDiverRequestModelTrustlevel || (exports.ShapeDiverRequestModelTrustlevel = ShapeDiverRequestModelTrustlevel = {}));
//# sourceMappingURL=SdRequestDtoModel.js.map

/***/ }),

/***/ 74598:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverRequestSdtfUploadPartType = void 0;
var ShapeDiverRequestSdtfUploadPartType;
(function (ShapeDiverRequestSdtfUploadPartType) {
    ShapeDiverRequestSdtfUploadPartType["MODEL_SDTF"] = "model/vnd.sdtf";
})(ShapeDiverRequestSdtfUploadPartType || (exports.ShapeDiverRequestSdtfUploadPartType = ShapeDiverRequestSdtfUploadPartType = {}));
//# sourceMappingURL=SdRequestDtoUpload.js.map

/***/ }),

/***/ 28705:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDto.js.map

/***/ }),

/***/ 27945:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDtoAnalytics.js.map

/***/ }),

/***/ 48429:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDtoAsset.js.map

/***/ }),

/***/ 59719:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverResponseErrorType = void 0;
var ShapeDiverResponseErrorType;
(function (ShapeDiverResponseErrorType) {
    ShapeDiverResponseErrorType["ASSERTION_ERROR"] = "SdAssertionError";
    ShapeDiverResponseErrorType["CACHE_ERROR_GENERIC"] = "SdCacheErrorGeneric";
    ShapeDiverResponseErrorType["CONNECTOR_ERROR"] = "SdConnectorError";
    ShapeDiverResponseErrorType["DATABASE_ERROR_GENERIC"] = "SdDatabaseErrorGeneric";
    ShapeDiverResponseErrorType["EMAILING_ERROR"] = "SdEmailingError";
    ShapeDiverResponseErrorType["ERROR_ENTITY_NOT_FOUND"] = "SdErrorEntityNotFound";
    ShapeDiverResponseErrorType["ERROR_FORBIDDEN"] = "SdErrorForbidden";
    ShapeDiverResponseErrorType["ERROR_GENERIC_CLIENT"] = "SdErrorGenericClient";
    ShapeDiverResponseErrorType["ERROR_GENERIC_INTERNAL"] = "SdErrorGenericInternal";
    ShapeDiverResponseErrorType["ERROR_UNAUTHORIZED"] = "SdErrorUnauthorized";
    ShapeDiverResponseErrorType["ILLEGAL_ARGUMENT_ERROR"] = "SdIllegalArgumentError";
    ShapeDiverResponseErrorType["JWT_VALIDATION_ERROR"] = "SdJwtValidationError";
    ShapeDiverResponseErrorType["MODEL_VALIDATION_ERROR"] = "SdModelValidationError";
    ShapeDiverResponseErrorType["NOT_ACCEPTABLE"] = "SdNotAcceptable";
    ShapeDiverResponseErrorType["NOT_FOUND_ERROR"] = "SdNotFoundError";
    ShapeDiverResponseErrorType["PARAMETER_VALIDATION_ERROR"] = "SdParameterValidationError";
    ShapeDiverResponseErrorType["RATE_LIMIT_ERROR_GENERIC"] = "SdRateLimitErrorGeneric";
    ShapeDiverResponseErrorType["REQUEST_TIMEOUT"] = "SdRequestTimeout";
    ShapeDiverResponseErrorType["REQUEST_VALIDATION_ERROR"] = "SdRequestValidationError";
    ShapeDiverResponseErrorType["RESOURCE_GONE_ERROR"] = "SdResourceGoneError";
    ShapeDiverResponseErrorType["SESSION_GONE_ERROR"] = "SdSessionGoneError";
    ShapeDiverResponseErrorType["SESSION_VALIDATION_ERROR"] = "SdSessionValidationError";
    ShapeDiverResponseErrorType["STORAGE_ERROR_GENERIC"] = "SdStorageErrorGeneric";
    ShapeDiverResponseErrorType["TEXTURE_URL_ERROR"] = "SdTextureUrlError";
    ShapeDiverResponseErrorType["TICKET_VALIDATION_ERROR"] = "SdTicketValidationError";
    ShapeDiverResponseErrorType["TOKEN_MISSING_ERROR"] = "SdTokenMissingError";
    ShapeDiverResponseErrorType["TRANSFORM_CONTENT_ARRAY_ERROR"] = "SdTransformContentArrayError";
    ShapeDiverResponseErrorType["UNCONFIRMED_MODEL_ERROR"] = "SdUnconfirmedModelError";
    ShapeDiverResponseErrorType["UNKNOWN"] = "";
})(ShapeDiverResponseErrorType || (exports.ShapeDiverResponseErrorType = ShapeDiverResponseErrorType = {}));
//# sourceMappingURL=SdResponseDtoError.js.map

/***/ }),

/***/ 64555:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverResponseExportDefinitionType = void 0;
var ShapeDiverResponseExportDefinitionType;
(function (ShapeDiverResponseExportDefinitionType) {
    ShapeDiverResponseExportDefinitionType["UNKNOWN"] = "unknown";
    ShapeDiverResponseExportDefinitionType["DOWNLOAD"] = "download";
    ShapeDiverResponseExportDefinitionType["EMAIL"] = "email";
    ShapeDiverResponseExportDefinitionType["SHAPEWAYS"] = "shapeways";
})(ShapeDiverResponseExportDefinitionType || (exports.ShapeDiverResponseExportDefinitionType = ShapeDiverResponseExportDefinitionType = {}));
//# sourceMappingURL=SdResponseDtoExport.js.map

/***/ }),

/***/ 56005:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDtoList.js.map

/***/ }),

/***/ 11737:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverResponseModelCleanupProcessType = exports.ShapeDiverResponseTicketType = exports.ShapeDiverResponseParameterStructure = exports.ShapeDiverResponseParameterVisualization = exports.ShapeDiverResponseParameterType = exports.ShapeDiverResponseModelStatus = void 0;
const SdCommonModel_1 = __webpack_require__(56020);
const SdCommonsTicket_1 = __webpack_require__(37400);
exports.ShapeDiverResponseModelStatus = Object.assign({}, SdCommonModel_1.ShapeDiverCommonsModelStatus);
var ShapeDiverResponseParameterType;
(function (ShapeDiverResponseParameterType) {
    ShapeDiverResponseParameterType["S_BITMAP"] = "sBitmap";
    ShapeDiverResponseParameterType["S_BOOL"] = "sBool";
    ShapeDiverResponseParameterType["S_BOX"] = "sBox";
    ShapeDiverResponseParameterType["S_BREP"] = "sBrep";
    ShapeDiverResponseParameterType["S_CIRCLE"] = "sCircle";
    ShapeDiverResponseParameterType["S_COLOR"] = "sColor";
    ShapeDiverResponseParameterType["S_CURVE"] = "sCurve";
    ShapeDiverResponseParameterType["S_DOMAIN"] = "sDomain";
    ShapeDiverResponseParameterType["S_DOMAIN_2D"] = "sDomain2D";
    ShapeDiverResponseParameterType["S_INTEGER"] = "sInteger";
    ShapeDiverResponseParameterType["S_LINE"] = "sLine";
    ShapeDiverResponseParameterType["S_MESH"] = "sMesh";
    ShapeDiverResponseParameterType["S_NUMBER"] = "sNumber";
    ShapeDiverResponseParameterType["S_PLANE"] = "sPlane";
    ShapeDiverResponseParameterType["S_POINT"] = "sPoint";
    ShapeDiverResponseParameterType["S_RECTANGLE"] = "sRectangle";
    ShapeDiverResponseParameterType["S_STRING"] = "sString";
    ShapeDiverResponseParameterType["S_SUBDIV"] = "sSubdiv";
    ShapeDiverResponseParameterType["S_SURFACE"] = "sSurface";
    ShapeDiverResponseParameterType["S_TIME"] = "sTime";
    ShapeDiverResponseParameterType["S_VECTOR"] = "sVector";
    ShapeDiverResponseParameterType["BOOL"] = "Bool";
    ShapeDiverResponseParameterType["COLOR"] = "Color";
    ShapeDiverResponseParameterType["DRAWING"] = "Drawing";
    ShapeDiverResponseParameterType["EVEN"] = "Even";
    ShapeDiverResponseParameterType["FILE"] = "File";
    ShapeDiverResponseParameterType["FLOAT"] = "Float";
    ShapeDiverResponseParameterType["INTERACTION"] = "Interaction";
    ShapeDiverResponseParameterType["INT"] = "Int";
    ShapeDiverResponseParameterType["ODD"] = "Odd";
    ShapeDiverResponseParameterType["STRING"] = "String";
    ShapeDiverResponseParameterType["STRINGLIST"] = "StringList";
    ShapeDiverResponseParameterType["TIME"] = "Time";
    ShapeDiverResponseParameterType["UNKNOWN"] = "unknown";
})(ShapeDiverResponseParameterType || (exports.ShapeDiverResponseParameterType = ShapeDiverResponseParameterType = {}));
var ShapeDiverResponseParameterVisualization;
(function (ShapeDiverResponseParameterVisualization) {
    ShapeDiverResponseParameterVisualization["UNKNOWN"] = "unknown";
    ShapeDiverResponseParameterVisualization["BUTTON"] = "button";
    ShapeDiverResponseParameterVisualization["CALENDAR"] = "calendar";
    ShapeDiverResponseParameterVisualization["CHECKLIST"] = "checklist";
    ShapeDiverResponseParameterVisualization["CLOCK"] = "clock";
    ShapeDiverResponseParameterVisualization["CYCLE"] = "cycle";
    ShapeDiverResponseParameterVisualization["DIAL"] = "dial";
    ShapeDiverResponseParameterVisualization["DROPDOWN"] = "dropdown";
    ShapeDiverResponseParameterVisualization["GEOMETRY"] = "geometry";
    ShapeDiverResponseParameterVisualization["IMAGE"] = "image";
    ShapeDiverResponseParameterVisualization["SEQUENCE"] = "sequence";
    ShapeDiverResponseParameterVisualization["SLIDER"] = "slider";
    ShapeDiverResponseParameterVisualization["SWATCH"] = "swatch";
    ShapeDiverResponseParameterVisualization["TEXT"] = "text";
    ShapeDiverResponseParameterVisualization["TOGGLE"] = "toggle";
})(ShapeDiverResponseParameterVisualization || (exports.ShapeDiverResponseParameterVisualization = ShapeDiverResponseParameterVisualization = {}));
var ShapeDiverResponseParameterStructure;
(function (ShapeDiverResponseParameterStructure) {
    ShapeDiverResponseParameterStructure["ITEM"] = "item";
    ShapeDiverResponseParameterStructure["LIST"] = "list";
    ShapeDiverResponseParameterStructure["TREE"] = "tree";
})(ShapeDiverResponseParameterStructure || (exports.ShapeDiverResponseParameterStructure = ShapeDiverResponseParameterStructure = {}));
exports.ShapeDiverResponseTicketType = Object.assign({}, SdCommonsTicket_1.ShapeDiverCommonsTicketType);
var ShapeDiverResponseModelCleanupProcessType;
(function (ShapeDiverResponseModelCleanupProcessType) {
    ShapeDiverResponseModelCleanupProcessType["DELETE_EXPORT_VERSION"] = "delete_export_version";
    ShapeDiverResponseModelCleanupProcessType["DELETE_MODEL_TEXTURE"] = "delete_model_texture";
    ShapeDiverResponseModelCleanupProcessType["DELETE_OUTPUT_VERSION"] = "delete_output_version";
})(ShapeDiverResponseModelCleanupProcessType || (exports.ShapeDiverResponseModelCleanupProcessType = ShapeDiverResponseModelCleanupProcessType = {}));
//# sourceMappingURL=SdResponseDtoMisc.js.map

/***/ }),

/***/ 27389:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverResponseModelComputationStatus = void 0;
const SdCommonModelComputation_1 = __webpack_require__(66313);
exports.ShapeDiverResponseModelComputationStatus = Object.assign({}, SdCommonModelComputation_1.ShapeDiverCommonsModelComputationStatus);
//# sourceMappingURL=SdResponseDtoModelComputation.js.map

/***/ }),

/***/ 4916:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDtoOutput.js.map

/***/ }),

/***/ 32757:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDtoSetting.js.map

/***/ }),

/***/ 10140:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=SdResponseDtoSystem.js.map

/***/ }),

/***/ 54168:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseShapeDiverSdk = void 0;
const ShapeDiverSdkApi_1 = __webpack_require__(52542);
const ShapeDiverSdkConfig_1 = __webpack_require__(77230);
class BaseShapeDiverSdk {
    constructor(baseUrl) {
        this.sdkConfig = new ShapeDiverSdkConfig_1.SdkConfigInternal(baseUrl);
        this.sdkApi = new ShapeDiverSdkApi_1.ShapeDiverSdkApi(this.sdkConfig);
    }
    setConfigurationValue(type, value) {
        this.sdkConfig.setConfigValue(type, value);
    }
    get configuration() {
        return this.sdkConfig.toConfig();
    }
}
exports.BaseShapeDiverSdk = BaseShapeDiverSdk;
//# sourceMappingURL=BaseShapeDiverSdk.js.map

/***/ }),

/***/ 93940:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverResponseError = exports.ShapeDiverRequestError = exports.ShapeDiverError = exports.ShapeDiverErrorType = void 0;
exports.ShapeDiverErrorType = {
    Generic: "sd_gb_sdk_generic",
    Request: "sd_gb_sdk_request",
    Response: "sd_gb_sdk_response",
};
class ShapeDiverError extends Error {
    constructor(message) {
        super(message);
        this.errorType = exports.ShapeDiverErrorType.Generic;
    }
}
exports.ShapeDiverError = ShapeDiverError;
class ShapeDiverRequestError extends ShapeDiverError {
    constructor(desc, message) {
        super(message);
        this.desc = desc;
        this.errorType = exports.ShapeDiverErrorType.Request;
    }
}
exports.ShapeDiverRequestError = ShapeDiverRequestError;
class ShapeDiverResponseError extends ShapeDiverError {
    constructor(message, status, error, desc, headers) {
        super(message);
        this.status = status;
        this.error = error;
        this.desc = desc;
        this.headers = headers;
        this.errorType = exports.ShapeDiverErrorType.Response;
    }
}
exports.ShapeDiverResponseError = ShapeDiverResponseError;
//# sourceMappingURL=ShapeDiverErrors.js.map

/***/ }),

/***/ 52542:
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
exports.ShapeDiverSdkApi = exports.ShapeDiverSdkApiResponseType = void 0;
const axios_1 = __importDefault(__webpack_require__(86425));
const ShapeDiverErrors_1 = __webpack_require__(93940);
const utils_1 = __webpack_require__(42927);
var Method;
(function (Method) {
    Method["DELETE"] = "DELETE";
    Method["GET"] = "GET";
    Method["HEAD"] = "HEAD";
    Method["PATCH"] = "PATCH";
    Method["POST"] = "POST";
    Method["PUT"] = "PUT";
})(Method || (Method = {}));
var ShapeDiverSdkApiResponseType;
(function (ShapeDiverSdkApiResponseType) {
    ShapeDiverSdkApiResponseType["JSON"] = "json";
    ShapeDiverSdkApiResponseType["DATA"] = "arraybuffer";
    ShapeDiverSdkApiResponseType["TEXT"] = "text";
})(ShapeDiverSdkApiResponseType || (exports.ShapeDiverSdkApiResponseType = ShapeDiverSdkApiResponseType = {}));
class ShapeDiverSdkApi {
    constructor(config) {
        this.config = config;
    }
    buildRequestConfig(method, options, data) {
        const request = {
            method: method,
            headers: {},
            responseType: options.responseType,
            data: undefined,
        };
        if (!options.disableCustomHeaders)
            request.headers = Object.assign({}, this.config.headers);
        if (options.disableAuthorization) {
            delete request.headers["Authorization"];
            delete request.headers["authorization"];
        }
        else if (this.config.jwt) {
            request.headers["Authorization"] = "Bearer " + this.config.jwt;
        }
        if (options.contentType) {
            request.headers["Content-Type"] = options.contentType;
            request.data = data;
        }
        if (options.accept) {
            request.headers["Accept"] = options.accept;
        }
        if (options.contentDisposition) {
            request.headers["Content-Disposition"] = options.contentDisposition;
        }
        return request;
    }
    buildUrl(uri, queries) {
        if (typeof uri !== "string") {
            throw new ShapeDiverErrors_1.ShapeDiverError("No URL or URI was specified");
        }
        let url = uri.startsWith("http")
            ? uri
            : `${this.config.baseUrl}/${uri.startsWith("/") ? uri.substring(1) : uri}`;
        if (queries.length) {
            url += `?${queries.join("&")}`;
        }
        return url;
    }
    static processError(error, responseType) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b, _c;
            if (error.response) {
                const resp = error.response;
                let data;
                if (responseType === ShapeDiverSdkApiResponseType.DATA) {
                    data = this.convertErrorResponseData(resp.data);
                }
                else {
                    data = resp.data;
                }
                throw new ShapeDiverErrors_1.ShapeDiverResponseError(data.message || data.desc || ((_a = data.error) !== null && _a !== void 0 ? _a : ""), resp.status, (_b = data.error) !== null && _b !== void 0 ? _b : "", (_c = data.desc) !== null && _c !== void 0 ? _c : "", resp.headers);
            }
            else if (error.request) {
                throw new ShapeDiverErrors_1.ShapeDiverRequestError("Could not send request.", "The request was made but no response was received");
            }
            else {
                throw new ShapeDiverErrors_1.ShapeDiverError(error.message);
            }
        });
    }
    static convertErrorResponseData(data) {
        let stringData;
        if (typeof window === "undefined") {
            stringData = Buffer.from(data).toString();
        }
        else if (window.TextDecoder) {
            stringData = new TextDecoder("utf-8").decode(new Uint8Array(data));
        }
        else {
            throw new ShapeDiverErrors_1.ShapeDiverError("Received an unknown error object");
        }
        try {
            return JSON.parse(stringData);
        }
        catch (_) {
            return { message: stringData };
        }
    }
    static parseResponse(data, requestedType) {
        switch (requestedType) {
            case ShapeDiverSdkApiResponseType.TEXT:
            case ShapeDiverSdkApiResponseType.JSON:
                return data;
            case ShapeDiverSdkApiResponseType.DATA:
                return data instanceof ArrayBuffer
                    ? data
                    : Uint8Array.from(data).buffer;
            default:
                (0, utils_1.sdAssertUnreachable)(requestedType);
        }
    }
    head(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, options = {}) {
            const fullOptions = Object.assign(Object.assign({}, options), { responseType: ShapeDiverSdkApiResponseType.JSON });
            const config = this.buildRequestConfig(Method.HEAD, fullOptions, undefined);
            try {
                const response = yield (0, axios_1.default)(this.buildUrl(url, []), config);
                return [response.headers, response.status];
            }
            catch (e) {
                return yield ShapeDiverSdkApi.processError(e, fullOptions.responseType);
            }
        });
    }
    get(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, queries = [], options = {
            contentType: "application/json",
            responseType: ShapeDiverSdkApiResponseType.JSON,
        }) {
            const config = this.buildRequestConfig(Method.GET, options, undefined);
            try {
                const response = yield (0, axios_1.default)(this.buildUrl(url, queries), config);
                return [
                    response.headers,
                    ShapeDiverSdkApi.parseResponse(response.data, options.responseType),
                ];
            }
            catch (e) {
                return yield ShapeDiverSdkApi.processError(e, options.responseType);
            }
        });
    }
    post(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, queries = [], data = {}, options = {
            contentType: "application/json",
            responseType: ShapeDiverSdkApiResponseType.JSON,
        }) {
            const config = this.buildRequestConfig(Method.POST, options, data);
            try {
                const response = yield (0, axios_1.default)(this.buildUrl(url, queries), config);
                return [
                    response.headers,
                    ShapeDiverSdkApi.parseResponse(response.data, options.responseType),
                ];
            }
            catch (e) {
                return yield ShapeDiverSdkApi.processError(e, options.responseType);
            }
        });
    }
    put(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, queries = [], data = {}, options = {
            contentType: "application/json",
            responseType: ShapeDiverSdkApiResponseType.JSON,
        }) {
            const config = this.buildRequestConfig(Method.PUT, options, data);
            try {
                const response = yield (0, axios_1.default)(this.buildUrl(url, queries), config);
                return [
                    response.headers,
                    ShapeDiverSdkApi.parseResponse(response.data, options.responseType),
                ];
            }
            catch (e) {
                return yield ShapeDiverSdkApi.processError(e, options.responseType);
            }
        });
    }
    patch(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, queries = [], data = {}, options = {
            contentType: "application/json",
            responseType: ShapeDiverSdkApiResponseType.JSON,
        }) {
            const config = this.buildRequestConfig(Method.PATCH, options, data);
            try {
                const response = yield (0, axios_1.default)(this.buildUrl(url, queries), config);
                return [
                    response.headers,
                    ShapeDiverSdkApi.parseResponse(response.data, options.responseType),
                ];
            }
            catch (e) {
                return yield ShapeDiverSdkApi.processError(e, options.responseType);
            }
        });
    }
    delete(url_1) {
        return __awaiter(this, arguments, void 0, function* (url, queries = [], options = {
            contentType: "application/json",
            responseType: ShapeDiverSdkApiResponseType.JSON,
        }) {
            const config = this.buildRequestConfig(Method.DELETE, options, {});
            try {
                const response = yield (0, axios_1.default)(this.buildUrl(url, queries), config);
                return [
                    response.headers,
                    ShapeDiverSdkApi.parseResponse(response.data, options.responseType),
                ];
            }
            catch (e) {
                return yield ShapeDiverSdkApi.processError(e, options.responseType);
            }
        });
    }
}
exports.ShapeDiverSdkApi = ShapeDiverSdkApi;
//# sourceMappingURL=ShapeDiverSdkApi.js.map

/***/ }),

/***/ 77230:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdkConfigInternal = exports.ShapeDiverSdkConfigType = void 0;
const ShapeDiverErrors_1 = __webpack_require__(93940);
var ShapeDiverSdkConfigType;
(function (ShapeDiverSdkConfigType) {
    ShapeDiverSdkConfigType["BASE_URL"] = "BASE_URL";
    ShapeDiverSdkConfigType["JWT_TOKEN"] = "JWT_TOKEN";
    ShapeDiverSdkConfigType["REQUEST_HEADERS"] = "REQUEST_HEADERS";
})(ShapeDiverSdkConfigType || (exports.ShapeDiverSdkConfigType = ShapeDiverSdkConfigType = {}));
class SdkConfigInternal {
    constructor(baseUrl) {
        this._baseUrl = baseUrl;
        this._headers = {};
        this._jwt = "";
    }
    get baseUrl() {
        return this._baseUrl;
    }
    get headers() {
        return this._headers;
    }
    get jwt() {
        return this._jwt;
    }
    toConfig() {
        return {
            baseUrl: this._baseUrl,
            headers: this._headers,
            jwt: this._jwt,
        };
    }
    setConfigValue(type, value) {
        switch (type) {
            case ShapeDiverSdkConfigType.BASE_URL:
                this._baseUrl = SdkConfigInternal.validateValue(type, value, "string");
                break;
            case ShapeDiverSdkConfigType.JWT_TOKEN:
                this._jwt = SdkConfigInternal.validateValue(type, value, "string");
                break;
            case ShapeDiverSdkConfigType.REQUEST_HEADERS:
                this._headers = SdkConfigInternal.validateValue(type, value, "string_map");
                break;
            default:
                throw new ShapeDiverErrors_1.ShapeDiverError(`Invalid config-type ${type}`);
        }
    }
    static validateValue(type, value, dataType) {
        switch (dataType) {
            case "string":
                if (typeof value !== "string")
                    throw new ShapeDiverErrors_1.ShapeDiverError(`Invalid value for config-type '${type}': Value must be a string`);
                break;
            case "string_map":
                if (typeof value !== "object" ||
                    !Object.values(value).every((v) => typeof v === "string"))
                    throw new ShapeDiverErrors_1.ShapeDiverError(`Invalid value for config-type '${type}': Value must be a string-map`);
                break;
        }
        return value;
    }
}
exports.SdkConfigInternal = SdkConfigInternal;
//# sourceMappingURL=ShapeDiverSdkConfig.js.map

/***/ }),

/***/ 75454:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverSdkConfigType = exports.ShapeDiverSdkApiResponseType = exports.ShapeDiverSdkApi = exports.ShapeDiverResponseError = exports.ShapeDiverRequestError = exports.ShapeDiverErrorType = exports.ShapeDiverError = exports.BaseShapeDiverSdk = exports.BaseResourceApi = void 0;
const ShapeDiverSdkApi_1 = __webpack_require__(52542);
Object.defineProperty(exports, "ShapeDiverSdkApi", ({ enumerable: true, get: function () { return ShapeDiverSdkApi_1.ShapeDiverSdkApi; } }));
Object.defineProperty(exports, "ShapeDiverSdkApiResponseType", ({ enumerable: true, get: function () { return ShapeDiverSdkApi_1.ShapeDiverSdkApiResponseType; } }));
const BaseShapeDiverSdk_1 = __webpack_require__(54168);
Object.defineProperty(exports, "BaseShapeDiverSdk", ({ enumerable: true, get: function () { return BaseShapeDiverSdk_1.BaseShapeDiverSdk; } }));
const ShapeDiverSdkConfig_1 = __webpack_require__(77230);
Object.defineProperty(exports, "ShapeDiverSdkConfigType", ({ enumerable: true, get: function () { return ShapeDiverSdkConfig_1.ShapeDiverSdkConfigType; } }));
const BaseResourceApi_1 = __webpack_require__(80635);
Object.defineProperty(exports, "BaseResourceApi", ({ enumerable: true, get: function () { return BaseResourceApi_1.BaseResourceApi; } }));
const ShapeDiverErrors_1 = __webpack_require__(93940);
Object.defineProperty(exports, "ShapeDiverError", ({ enumerable: true, get: function () { return ShapeDiverErrors_1.ShapeDiverError; } }));
Object.defineProperty(exports, "ShapeDiverErrorType", ({ enumerable: true, get: function () { return ShapeDiverErrors_1.ShapeDiverErrorType; } }));
Object.defineProperty(exports, "ShapeDiverRequestError", ({ enumerable: true, get: function () { return ShapeDiverErrors_1.ShapeDiverRequestError; } }));
Object.defineProperty(exports, "ShapeDiverResponseError", ({ enumerable: true, get: function () { return ShapeDiverErrors_1.ShapeDiverResponseError; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 80635:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseResourceApi = void 0;
class BaseResourceApi {
    constructor(api) {
        this.commonPath = "/api/v2";
        this.api = api;
    }
    buildAnalyticsUri() {
        return `${this.commonPath}/analytics`;
    }
    buildArSceneUri() {
        return `${this.commonPath}/ar-scene`;
    }
    buildAuthGroupUri() {
        return `${this.commonPath}/auth_group`;
    }
    buildTicketUri(ticketId) {
        return `${this.commonPath}/ticket/${ticketId}`;
    }
    buildSessionUri(sessionId) {
        return `${this.commonPath}/session/${sessionId}`;
    }
    buildModelUri(modelId) {
        return `${this.commonPath}/model/${modelId}`;
    }
    buildModelStateUri(modelStateId) {
        const base = `${this.commonPath}/model-state`;
        return modelStateId ? base + `/${modelStateId}` : base;
    }
    buildSystemUri() {
        return `${this.commonPath}/system`;
    }
}
exports.BaseResourceApi = BaseResourceApi;
//# sourceMappingURL=BaseResourceApi.js.map

/***/ }),

/***/ 42927:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.sdAssertUnreachable = sdAssertUnreachable;
const ShapeDiverErrors_1 = __webpack_require__(93940);
function sdAssertUnreachable(_) {
    throw new ShapeDiverErrors_1.ShapeDiverError("Reached unreachable block");
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 54355:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverResponseError = void 0;
const api_geometry_api_dto_v2_1 = __webpack_require__(92442);
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
class ShapeDiverResponseError extends sdk_geometry_api_sdk_core_1.ShapeDiverError {
    constructor(e) {
        super(e.message);
        this.errorType = sdk_geometry_api_sdk_core_1.ShapeDiverErrorType.Response;
        this.status = e.status;
        this.desc = e.desc;
        this.error = Object.values(api_geometry_api_dto_v2_1.ShapeDiverResponseErrorType).includes(e.error)
            ? e.error
            : api_geometry_api_dto_v2_1.ShapeDiverResponseErrorType.UNKNOWN;
    }
}
exports.ShapeDiverResponseError = ShapeDiverResponseError;
//# sourceMappingURL=ShapeDiverErrors.js.map

/***/ }),

/***/ 61906:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ShapeDiverSdk = void 0;
exports.create = create;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const ShapeDiverAnalyticsApi_1 = __webpack_require__(49694);
const ShapeDiverArSceneApi_1 = __webpack_require__(29541);
const ShapeDiverAssetApi_1 = __webpack_require__(96078);
const ShapeDiverExportApi_1 = __webpack_require__(32966);
const ShapeDiverFileApi_1 = __webpack_require__(11542);
const ShapeDiverGltfApi_1 = __webpack_require__(94131);
const ShapeDiverModelApi_1 = __webpack_require__(16341);
const ShapeDiverOutputApi_1 = __webpack_require__(40399);
const ShapeDiverSdtfApi_1 = __webpack_require__(70823);
const ShapeDiverSessionApi_1 = __webpack_require__(18234);
const ShapeDiverSystemApi_1 = __webpack_require__(79495);
const ShapeDiverTextureApi_1 = __webpack_require__(74975);
const ShapeDiverUtilsApi_1 = __webpack_require__(42249);
const ShapeDiverModelStateApi_1 = __webpack_require__(61970);
function create(baseUrl, jwt) {
    return new ShapeDiverSdk(baseUrl, jwt);
}
class ShapeDiverSdk extends sdk_geometry_api_sdk_core_1.BaseShapeDiverSdk {
    constructor(baseUrl, jwt) {
        super(baseUrl);
        if (jwt)
            this.setConfigurationValue(sdk_geometry_api_sdk_core_1.ShapeDiverSdkConfigType.JWT_TOKEN, jwt);
        this._analytics = new ShapeDiverAnalyticsApi_1.ShapeDiverAnalyticsApi(this.sdkApi);
        this._arScene = new ShapeDiverArSceneApi_1.ShapeDiverArSceneApi(this.sdkApi);
        this._asset = new ShapeDiverAssetApi_1.ShapeDiverAssetApi(this.sdkApi);
        this._export = new ShapeDiverExportApi_1.ShapeDiverExportApi(this.sdkApi);
        this._file = new ShapeDiverFileApi_1.ShapeDiverFileApi(this.sdkApi);
        this._gltf = new ShapeDiverGltfApi_1.ShapeDiverGltfApi(this.sdkApi);
        this._model = new ShapeDiverModelApi_1.ShapeDiverModelApi(this.sdkApi);
        this._modelState = new ShapeDiverModelStateApi_1.ShapeDiverModelStateApi(this.sdkApi);
        this._output = new ShapeDiverOutputApi_1.ShapeDiverOutputApi(this.sdkApi);
        this._sdtf = new ShapeDiverSdtfApi_1.ShapeDiverSdtfApi(this.sdkApi);
        this._session = new ShapeDiverSessionApi_1.ShapeDiverSessionApi(this.sdkApi);
        this._system = new ShapeDiverSystemApi_1.ShapeDiverSystemApi(this.sdkApi);
        this._texture = new ShapeDiverTextureApi_1.ShapeDiverTextureApi(this.sdkApi);
        this._utils = new ShapeDiverUtilsApi_1.ShapeDiverUtilsApi(this.sdkApi);
    }
    get analytics() {
        return this._analytics;
    }
    get arScene() {
        return this._arScene;
    }
    get asset() {
        return this._asset;
    }
    get export() {
        return this._export;
    }
    get file() {
        return this._file;
    }
    get gltf() {
        return this._gltf;
    }
    get model() {
        return this._model;
    }
    get modelState() {
        return this._modelState;
    }
    get output() {
        return this._output;
    }
    get sdtf() {
        return this._sdtf;
    }
    get session() {
        return this._session;
    }
    get system() {
        return this._system;
    }
    get texture() {
        return this._texture;
    }
    get utils() {
        return this._utils;
    }
}
exports.ShapeDiverSdk = ShapeDiverSdk;
//# sourceMappingURL=ShapeDiverSdk.js.map

/***/ }),

/***/ 50059:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isGBResponseError = exports.isGBRequestError = exports.isGBGenericError = exports.isGBError = exports.create = exports.ShapeDiverSdk = exports.ShapeDiverResponseError = exports.ShapeDiverSdkConfigType = exports.ShapeDiverSdkApiResponseType = exports.ShapeDiverRequestError = exports.ShapeDiverError = void 0;
__exportStar(__webpack_require__(92442), exports);
var sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
Object.defineProperty(exports, "ShapeDiverError", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_core_1.ShapeDiverError; } }));
Object.defineProperty(exports, "ShapeDiverRequestError", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_core_1.ShapeDiverRequestError; } }));
Object.defineProperty(exports, "ShapeDiverSdkApiResponseType", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType; } }));
Object.defineProperty(exports, "ShapeDiverSdkConfigType", ({ enumerable: true, get: function () { return sdk_geometry_api_sdk_core_1.ShapeDiverSdkConfigType; } }));
var ShapeDiverErrors_1 = __webpack_require__(54355);
Object.defineProperty(exports, "ShapeDiverResponseError", ({ enumerable: true, get: function () { return ShapeDiverErrors_1.ShapeDiverResponseError; } }));
var ShapeDiverSdk_1 = __webpack_require__(61906);
Object.defineProperty(exports, "ShapeDiverSdk", ({ enumerable: true, get: function () { return ShapeDiverSdk_1.ShapeDiverSdk; } }));
Object.defineProperty(exports, "create", ({ enumerable: true, get: function () { return ShapeDiverSdk_1.create; } }));
var utils_1 = __webpack_require__(33952);
Object.defineProperty(exports, "isGBError", ({ enumerable: true, get: function () { return utils_1.isGBError; } }));
Object.defineProperty(exports, "isGBGenericError", ({ enumerable: true, get: function () { return utils_1.isGBGenericError; } }));
Object.defineProperty(exports, "isGBRequestError", ({ enumerable: true, get: function () { return utils_1.isGBRequestError; } }));
Object.defineProperty(exports, "isGBResponseError", ({ enumerable: true, get: function () { return utils_1.isGBResponseError; } }));
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 49694:
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
exports.ShapeDiverAnalyticsApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverAnalyticsApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    modelSessionStatistics(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildAnalyticsUri() + "/session/model", undefined, body))[1];
            }));
        });
    }
    creditMetrics(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildAnalyticsUri() + "/credit-metrics", undefined, body))[1];
            }));
        });
    }
    userCreditMetrics(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildAnalyticsUri()}/credit-metrics/timestamp/${timestamp}/user`))[1];
            }));
        });
    }
    organizationCreditMetrics(timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildAnalyticsUri()}/credit-metrics/timestamp/${timestamp}/org`))[1];
            }));
        });
    }
    modelUserCreditMetrics(userId, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildAnalyticsUri()}/credit-metrics/timestamp/${timestamp}/user/${userId}`))[1];
            }));
        });
    }
    modelOrganizationCreditMetrics(orgId, timestamp) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildAnalyticsUri()}/credit-metrics/timestamp/${timestamp}/org/${orgId}`))[1];
            }));
        });
    }
}
exports.ShapeDiverAnalyticsApi = ShapeDiverAnalyticsApi;
//# sourceMappingURL=ShapeDiverAnalyticsApi.js.map

/***/ }),

/***/ 29541:
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
exports.ShapeDiverArSceneApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverArSceneApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    exists(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const [_, status] = yield this.api.head(`${this.buildArSceneUri()}/${id}`, { disableAuthorization: true });
                    return status === 200;
                }
                catch (e) {
                    if (e instanceof sdk_geometry_api_sdk_core_1.ShapeDiverResponseError && e.status === 404)
                        return false;
                    else
                        throw e;
                }
            }));
        });
    }
    getGltf(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(`${this.buildArSceneUri()}/${id}/gltf`, undefined, {
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA,
                    disableAuthorization: true,
                });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
    getUsdz(id) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(`${this.buildArSceneUri()}/${id}/usdz`, undefined, {
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA,
                    disableAuthorization: true,
                });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
}
exports.ShapeDiverArSceneApi = ShapeDiverArSceneApi;
//# sourceMappingURL=ShapeDiverArSceneApi.js.map

/***/ }),

/***/ 96078:
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
exports.ShapeDiverAssetApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
const apiAssetExportUri = /.+\/session\/.+\/export\/.+/;
const apiAssetOutputUri = /.+\/session\/.+\/output\/.+/;
const apiAssetTextureUri = /.+\/session\/.+\/texture\/.+/;
const cdnAssetUri = /.+\/cdn-asset-(exports|outputs|textures)\/.+/;
const cdnAssetExportUri = /.+\/cdn-asset-exports\/.+/;
const cdnAssetOutputUri = /.+\/cdn-asset-outputs\/.+/;
const cdnAssetTextureUri = /.+\/cdn-asset-textures\/.+/;
const directDownloadUri = /^(http[s]?:\/\/)?(viewer|textures|downloads)\.shapediver\.com(\/.*)?$/;
class ShapeDiverAssetApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    getExport(sessionId, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(`${this.buildSessionUri(sessionId)}/export/${assetData}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
    getOutput(sessionId, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(`${this.buildSessionUri(sessionId)}/output/${assetData}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
    getSdtfJsonContent(sessionId, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/output/${assetData}`, undefined, {
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.JSON,
                    accept: "model/vnd.sdtf+json",
                }))[1];
            }));
        });
    }
    getTexture(sessionId, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(`${this.buildSessionUri(sessionId)}/texture/${assetData}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
    getGltf(sessionId, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/gltf/${assetData}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA }))[1];
            }));
        });
    }
    getUsdz(sessionId, assetData) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/usdz/${assetData}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA }))[1];
            }));
        });
    }
    downloadImage(sessionId, url) {
        return __awaiter(this, void 0, void 0, function* () {
            let targetUrl, queries;
            if (apiAssetTextureUri.test(url) ||
                cdnAssetTextureUri.test(url) ||
                directDownloadUri.test(url)) {
                targetUrl = url;
                queries = [];
            }
            else {
                targetUrl = `${this.buildSessionUri(sessionId)}/image`;
                queries = [`url=${(0, utils_1.encodeBase64)(url)}`];
            }
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(targetUrl, queries, {
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA,
                    disableAuthorization: cdnAssetUri.test(url) || directDownloadUri.test(url),
                    disableCustomHeaders: cdnAssetUri.test(url) || directDownloadUri.test(url),
                });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
    getAsset(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let type;
            if (apiAssetExportUri.test(url) || cdnAssetExportUri.test(url))
                type = "export";
            else if (apiAssetOutputUri.test(url) || cdnAssetOutputUri.test(url))
                type = "output";
            else if (apiAssetTextureUri.test(url) || cdnAssetTextureUri.test(url))
                type = "texture";
            else
                throw new sdk_geometry_api_sdk_core_1.ShapeDiverError("Cannot fetch asset: Invalid URL (only ShapeDiver asset URLs are allowed).");
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(url, undefined, {
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA,
                    disableAuthorization: cdnAssetUri.test(url),
                    disableCustomHeaders: cdnAssetUri.test(url),
                });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType, type];
            }));
        });
    }
}
exports.ShapeDiverAssetApi = ShapeDiverAssetApi;
//# sourceMappingURL=ShapeDiverAssetApi.js.map

/***/ }),

/***/ 32966:
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
exports.ShapeDiverExportApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverExportApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    compute(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildSessionUri(sessionId) + "/export", undefined, body))[1];
            }));
        });
    }
    getCache(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildSessionUri(sessionId) + "/export/cache", undefined, body))[1];
            }));
        });
    }
    updateDefinitions(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.patch(this.buildModelUri(modelId) + "/export", undefined, body))[1];
            }));
        });
    }
    listVersions(sessionId, exportId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/export/${exportId}/list`))[1];
            }));
        });
    }
}
exports.ShapeDiverExportApi = ShapeDiverExportApi;
//# sourceMappingURL=ShapeDiverExportApi.js.map

/***/ }),

/***/ 11542:
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
exports.ShapeDiverFileApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverFileApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    list(sessionId, paramId, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/file/${paramId}/list`, queries))[1];
            }));
        });
    }
    info(sessionId, paramId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                const headers = (yield this.api.head(`${this.buildSessionUri(sessionId)}/file/${paramId}/${fileId}`))[0];
                const res = {
                    size: Number(headers.get("Content-Length") || headers.get("content-length")),
                };
                const contentDispositionHeader = headers.get("Content-Disposition") ||
                    headers.get("content-disposition");
                if (typeof contentDispositionHeader === "string")
                    res.filename = (0, utils_1.filenameFromContentDisposition)(contentDispositionHeader);
                return res;
            }));
        });
    }
    get(sessionId, paramId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/file/${paramId}/${fileId}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA }))[1];
            }));
        });
    }
    delete(sessionId, paramId, fileId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.delete(`${this.buildSessionUri(sessionId)}/file/${paramId}/${fileId}`))[1];
            }));
        });
    }
    requestUpload(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildSessionUri(sessionId) + "/file/upload", undefined, body))[1];
            }));
        });
    }
}
exports.ShapeDiverFileApi = ShapeDiverFileApi;
//# sourceMappingURL=ShapeDiverFileApi.js.map

/***/ }),

/***/ 94131:
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
exports.ShapeDiverGltfApi = void 0;
const api_geometry_api_dto_v2_1 = __webpack_require__(92442);
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverGltfApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    upload(sessionId_1, body_1, type_1) {
        return __awaiter(this, arguments, void 0, function* (sessionId, body, type, queryConvert = api_geometry_api_dto_v2_1.ShapeDiverRequestGltfUploadQueryConversion.NONE) {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(`${this.buildSessionUri(sessionId)}/gltf`, [`conversion=${queryConvert}`], body, {
                    contentType: type,
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.JSON,
                }))[1];
            }));
        });
    }
}
exports.ShapeDiverGltfApi = ShapeDiverGltfApi;
//# sourceMappingURL=ShapeDiverGltfApi.js.map

/***/ }),

/***/ 16341:
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
exports.ShapeDiverModelApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverModelApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    get(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildModelUri(modelId)))[1];
            }));
        });
    }
    create(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.commonPath, undefined, body))[1];
            }));
        });
    }
    update(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildModelUri(modelId), undefined, body))[1];
            }));
        });
    }
    delete(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.delete(this.buildModelUri(modelId)))[1];
            }));
        });
    }
    list(offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.commonPath}/list`, queries))[1];
            }));
        });
    }
    getConfig(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildModelUri(modelId) + "/config"))[1];
            }));
        });
    }
    createConfig(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildModelUri(modelId) + "/config", undefined, body))[1];
            }));
        });
    }
    updateConfig(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.patch(this.buildModelUri(modelId) + "/config", undefined, body))[1];
            }));
        });
    }
    getFile(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildModelUri(modelId) + "/file/download", undefined, {
                    contentType: "application/json",
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA,
                }))[1];
            }));
        });
    }
    setDefaultParams(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.patch(this.buildModelUri(modelId) + "/parameter/defval", undefined, body))[1];
            }));
        });
    }
    updateParameterDefinitions(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.patch(this.buildModelUri(modelId) + "/parameter", undefined, body))[1];
            }));
        });
    }
    queryComputations(modelId, timestampFrom, timestampTo, limit, strictLimit, order, status, type, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (timestampFrom !== undefined)
                queries.push("timestamp_from=" + timestampFrom);
            if (timestampTo !== undefined)
                queries.push("timestamp_to=" + timestampTo);
            if (limit !== undefined)
                queries.push("limit=" + limit);
            if (strictLimit !== undefined)
                queries.push("strict_limit=" + strictLimit);
            if (order !== undefined)
                queries.push("order=" + order);
            if (status !== undefined)
                queries.push("status=" + status);
            if (type !== undefined)
                queries.push("type=" + type);
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildModelUri(modelId) + "/computations", queries))[1];
            }));
        });
    }
    enqueueCleanupExports(modelId, untilLastSeen) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildModelUri(modelId) + "/cleanup/export", [`untilLastSeen=${untilLastSeen}`]))[1];
            }));
        });
    }
    enqueueCleanupOutputs(modelId, untilLastSeen) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildModelUri(modelId) + "/cleanup/output", [`untilLastSeen=${untilLastSeen}`]))[1];
            }));
        });
    }
    enqueueCleanupTextures(modelId, untilLastSeen) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildModelUri(modelId) + "/cleanup/texture", [`untilLastSeen=${untilLastSeen}`]))[1];
            }));
        });
    }
    getCleanupStatus(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildModelUri(modelId) + "/cleanup/status"))[1];
            }));
        });
    }
}
exports.ShapeDiverModelApi = ShapeDiverModelApi;
//# sourceMappingURL=ShapeDiverModelApi.js.map

/***/ }),

/***/ 61970:
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
exports.ShapeDiverModelStateApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverModelStateApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    exists(modelStateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const [_, status] = yield this.api.head(this.buildModelStateUri(modelStateId), { disableAuthorization: true });
                    return status === 200;
                }
                catch (e) {
                    if (e instanceof sdk_geometry_api_sdk_core_1.ShapeDiverResponseError && e.status === 404)
                        return false;
                    else
                        throw e;
                }
            }));
        });
    }
    get(modelStateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildModelStateUri(modelStateId)))[1];
            }));
        });
    }
    delete(modelStateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                yield this.api.delete(this.buildModelStateUri(modelStateId));
            }));
        });
    }
    getData(modelStateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildModelStateUri(modelStateId)}/data`))[1];
            }));
        });
    }
    hasImage(modelStateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                try {
                    const [_, status] = yield this.api.head(`${this.buildModelStateUri(modelStateId)}/image`, { disableAuthorization: true });
                    return status === 200;
                }
                catch (e) {
                    if (e instanceof sdk_geometry_api_sdk_core_1.ShapeDiverResponseError && e.status === 404)
                        return false;
                    else
                        throw e;
                }
            }));
        });
    }
    getImage(modelStateId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                var _a;
                const [header, data] = yield this.api.get(`${this.buildModelStateUri(modelStateId)}/image`, undefined, {
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA,
                    disableAuthorization: true,
                });
                const contentType = (_a = header["Content-Type"]) !== null && _a !== void 0 ? _a : header["content-type"];
                return [data, contentType];
            }));
        });
    }
    list(modelId, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildModelStateUri()}/model/${modelId}/list`, queries))[1];
            }));
        });
    }
    create(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(`${this.buildSessionUri(sessionId)}/model-state`, undefined, body))[1];
            }));
        });
    }
}
exports.ShapeDiverModelStateApi = ShapeDiverModelStateApi;
//# sourceMappingURL=ShapeDiverModelStateApi.js.map

/***/ }),

/***/ 40399:
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
exports.ShapeDiverOutputApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverOutputApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    customize(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildSessionUri(sessionId) + "/output", undefined, body))[1];
            }));
        });
    }
    getCache(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.put(this.buildSessionUri(sessionId) + "/output/cache", undefined, body))[1];
            }));
        });
    }
    updateDefinitions(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.patch(this.buildModelUri(modelId) + "/output", undefined, body))[1];
            }));
        });
    }
    listVersions(sessionId, outputId, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/output/${outputId}/list`, queries))[1];
            }));
        });
    }
}
exports.ShapeDiverOutputApi = ShapeDiverOutputApi;
//# sourceMappingURL=ShapeDiverOutputApi.js.map

/***/ }),

/***/ 70823:
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
exports.ShapeDiverSdtfApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverSdtfApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    list(sessionId, namespace, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/sdtf/${namespace}/list`, queries))[1];
            }));
        });
    }
    get(sessionId, sdtfId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSessionUri(sessionId)}/sdtf/${sdtfId}`, undefined, { responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.DATA }))[1];
            }));
        });
    }
    delete(sessionId, sdtfId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.delete(`${this.buildSessionUri(sessionId)}/sdtf/${sdtfId}`))[1];
            }));
        });
    }
    requestUpload(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildSessionUri(sessionId) + "/sdtf/upload", undefined, body))[1];
            }));
        });
    }
}
exports.ShapeDiverSdtfApi = ShapeDiverSdtfApi;
//# sourceMappingURL=ShapeDiverSdtfApi.js.map

/***/ }),

/***/ 18234:
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
exports.ShapeDiverSessionApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverSessionApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    ticket(modelId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildModelUri(modelId) + "/ticket", undefined, body))[1];
            }));
        });
    }
    init(ticket, request, modelStateId, strictValidation) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (modelStateId !== undefined)
                queries.push("modelStateId=" + modelStateId);
            if (strictValidation !== undefined)
                queries.push("strictValidation=" + strictValidation);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildTicketUri(ticket), queries, request))[1];
            }));
        });
    }
    initForModel(modelId, request, modelStateId, strictValidation) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (modelStateId !== undefined)
                queries.push("modelStateId=" + modelStateId);
            if (strictValidation !== undefined)
                queries.push("strictValidation=" + strictValidation);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildModelUri(modelId) + "/session", queries, request))[1];
            }));
        });
    }
    default(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildSessionUri(sessionId) + "/default"))[1];
            }));
        });
    }
    close(sessionId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildSessionUri(sessionId) + "/close"))[1];
            }));
        });
    }
}
exports.ShapeDiverSessionApi = ShapeDiverSessionApi;
//# sourceMappingURL=ShapeDiverSessionApi.js.map

/***/ }),

/***/ 79495:
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
exports.ShapeDiverSystemApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverSystemApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    log(sessionId, body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildSessionUri(sessionId) + "/log/message", undefined, body))[1];
            }));
        });
    }
    pruneModel(modelId) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.delete(`${this.buildSystemUri()}/model/${modelId}`))[1];
            }));
        });
    }
    decryptTicket(ticket) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildTicketUri(ticket)))[1];
            }));
        });
    }
    authGroup(body) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.post(this.buildAuthGroupUri(), undefined, body))[1];
            }));
        });
    }
    getMinionInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSystemUri()}/minions/info`))[1];
            }));
        });
    }
    getWorkerInfo() {
        return __awaiter(this, void 0, void 0, function* () {
            return (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(`${this.buildSystemUri()}/workers/info`))[1];
            }));
        });
    }
}
exports.ShapeDiverSystemApi = ShapeDiverSystemApi;
//# sourceMappingURL=ShapeDiverSystemApi.js.map

/***/ }),

/***/ 74975:
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
exports.ShapeDiverTextureApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverTextureApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    listModelTextures(sessionId, offset) {
        return __awaiter(this, void 0, void 0, function* () {
            const queries = [];
            if (offset !== undefined)
                queries.push("offset=" + offset);
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return (yield this.api.get(this.buildSessionUri(sessionId) + "/texture/list", queries))[1];
            }));
        });
    }
}
exports.ShapeDiverTextureApi = ShapeDiverTextureApi;
//# sourceMappingURL=ShapeDiverTextureApi.js.map

/***/ }),

/***/ 42249:
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
exports.ShapeDiverUtilsApi = void 0;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const utils_1 = __webpack_require__(33952);
class ShapeDiverUtilsApi extends sdk_geometry_api_sdk_core_1.BaseResourceApi {
    constructor(api) {
        super(api);
    }
    upload(url, data, contentType, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return this.api.put(url, undefined, data, {
                    contentType: contentType,
                    contentDisposition: filename
                        ? (0, utils_1.contentDispositionFromFilename)(filename)
                        : undefined,
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.JSON,
                    disableAuthorization: true,
                    disableCustomHeaders: true,
                });
            }));
        });
    }
    uploadAsset(url, data, headers) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return this.api.put(url, undefined, data, {
                    contentType: headers.contentType,
                    contentDisposition: headers.contentDisposition,
                    responseType: sdk_geometry_api_sdk_core_1.ShapeDiverSdkApiResponseType.JSON,
                    disableAuthorization: true,
                    disableCustomHeaders: true,
                });
            }));
        });
    }
    download(url, responseType) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () {
                return this.api.get(url, undefined, {
                    contentType: "application/json",
                    responseType: responseType,
                    disableAuthorization: true,
                    disableCustomHeaders: true,
                });
            }));
        });
    }
    submitAndWaitForCustomization(sdk_1, sessionId_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (sdk, sessionId, body, maxWaitMsec = -1) {
            const startMsec = Date.now();
            const dto = yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () { return sdk.output.customize(sessionId, body); }));
            const waitMsec = Date.now() - startMsec;
            maxWaitMsec =
                maxWaitMsec < 0 ? maxWaitMsec : Math.max(0, maxWaitMsec - waitMsec);
            return ShapeDiverUtilsApi.waitForCustomizationResult(sdk, sessionId, dto, maxWaitMsec);
        });
    }
    submitAndWaitForExport(sdk_1, sessionId_1, body_1) {
        return __awaiter(this, arguments, void 0, function* (sdk, sessionId, body, maxWaitMsec = -1) {
            const startMsec = Date.now();
            const dto = yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () { return sdk.export.compute(sessionId, body); }));
            const waitMsec = Date.now() - startMsec;
            maxWaitMsec =
                maxWaitMsec < 0 ? maxWaitMsec : Math.max(0, maxWaitMsec - waitMsec);
            return ShapeDiverUtilsApi.waitForExportResult(sdk, sessionId, body, dto, maxWaitMsec);
        });
    }
    static waitForCustomizationResult(sdk_1, sessionId_1, dto_1) {
        return __awaiter(this, arguments, void 0, function* (sdk, sessionId, dto, maxWaitMsec = -1) {
            if (!dto.outputs)
                return dto;
            const outputVersions = {};
            Object.keys(dto.outputs).forEach((id) => (outputVersions[id] = dto.outputs[id].version));
            let delay = ShapeDiverUtilsApi.getMaxOutputDelay(dto);
            const startMsec = Date.now();
            while (delay > 0) {
                if (maxWaitMsec >= 0) {
                    const waitMsec = Date.now() - startMsec;
                    if (waitMsec >= maxWaitMsec) {
                        throw new sdk_geometry_api_sdk_core_1.ShapeDiverError(`Maximum wait time of ${maxWaitMsec} ms reached`);
                    }
                    if (waitMsec + delay > maxWaitMsec) {
                        delay = maxWaitMsec - waitMsec;
                    }
                }
                yield (0, utils_1.sleep)(delay);
                dto = yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () { return sdk.output.getCache(sessionId, outputVersions); }));
                delay = ShapeDiverUtilsApi.getMaxOutputDelay(dto);
            }
            return dto;
        });
    }
    static waitForExportResult(sdk_1, sessionId_1, body_1, dto_1) {
        return __awaiter(this, arguments, void 0, function* (sdk, sessionId, body, dto, maxWaitMsec = -1) {
            let delay = ShapeDiverUtilsApi.getMaxExportDelay(dto, body);
            const startMsec = Date.now();
            while (delay > 0) {
                if (maxWaitMsec >= 0) {
                    const waitMsec = Date.now() - startMsec;
                    if (waitMsec >= maxWaitMsec) {
                        throw new sdk_geometry_api_sdk_core_1.ShapeDiverError(`Maximum wait time of ${maxWaitMsec} ms reached`);
                    }
                    if (waitMsec + delay > maxWaitMsec) {
                        delay = maxWaitMsec - waitMsec;
                    }
                }
                yield (0, utils_1.sleep)(delay);
                dto = yield (0, utils_1.sendRequest)(() => __awaiter(this, void 0, void 0, function* () { return sdk.export.getCache(sessionId, body); }));
                delay = ShapeDiverUtilsApi.getMaxExportDelay(dto, body);
            }
            return dto;
        });
    }
    static getMaxOutputDelay(dto) {
        return Math.max(...Object.values(dto.outputs)
            .map((output) => output)
            .map((output) => { var _a; return (_a = output.delay) !== null && _a !== void 0 ? _a : -1; }));
    }
    static getMaxExportDelay(dto, body) {
        var _a, _b, _c;
        const exports = Array.isArray(body.exports)
            ? body.exports
            : [body.exports.id];
        const outputs = (_a = body.outputs) !== null && _a !== void 0 ? _a : [];
        return Math.max(...Object.values((_b = dto.exports) !== null && _b !== void 0 ? _b : {})
            .filter((e) => exports.includes(e.id))
            .map((e) => e)
            .map((e) => { var _a; return (_a = e.delay) !== null && _a !== void 0 ? _a : -1; }), ...Object.values((_c = dto.outputs) !== null && _c !== void 0 ? _c : {})
            .filter((o) => outputs.includes(o.id))
            .map((o) => o)
            .map((o) => { var _a; return (_a = o.delay) !== null && _a !== void 0 ? _a : -1; }));
    }
}
exports.ShapeDiverUtilsApi = ShapeDiverUtilsApi;
//# sourceMappingURL=ShapeDiverUtilsApi.js.map

/***/ }),

/***/ 33952:
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
exports.isGBError = isGBError;
exports.isGBGenericError = isGBGenericError;
exports.isGBRequestError = isGBRequestError;
exports.isGBResponseError = isGBResponseError;
exports.sendRequest = sendRequest;
exports.sleep = sleep;
exports.encodeBase64 = encodeBase64;
exports.contentDispositionFromFilename = contentDispositionFromFilename;
exports.filenameFromContentDisposition = filenameFromContentDisposition;
const sdk_geometry_api_sdk_core_1 = __webpack_require__(75454);
const ShapeDiverErrors_1 = __webpack_require__(54355);
function isGBError(e) {
    return (e instanceof Error &&
        "errorType" in e &&
        Object.values(sdk_geometry_api_sdk_core_1.ShapeDiverErrorType).includes(e.errorType));
}
function isGBGenericError(e) {
    return (e instanceof Error &&
        "errorType" in e &&
        e.errorType === sdk_geometry_api_sdk_core_1.ShapeDiverErrorType.Generic);
}
function isGBRequestError(e) {
    return (e instanceof Error &&
        "errorType" in e &&
        e.errorType === sdk_geometry_api_sdk_core_1.ShapeDiverErrorType.Request);
}
function isGBResponseError(e) {
    return (e instanceof Error &&
        "errorType" in e &&
        e.errorType === sdk_geometry_api_sdk_core_1.ShapeDiverErrorType.Response);
}
function sendRequest(call) {
    return __awaiter(this, void 0, void 0, function* () {
        var _a;
        const retryLimit = 5;
        let retryCounter = 0;
        while (retryCounter < retryLimit) {
            try {
                return yield call();
            }
            catch (e) {
                retryCounter++;
                if (e instanceof sdk_geometry_api_sdk_core_1.ShapeDiverResponseError) {
                    if (e.status === 429) {
                        const seconds = (_a = e.headers["retry-after"]) !== null && _a !== void 0 ? _a : 60;
                        yield sleep(Number(seconds) * 1000);
                        continue;
                    }
                    else if (e.status === 502) {
                        yield sleep(1000);
                        continue;
                    }
                    throw new ShapeDiverErrors_1.ShapeDiverResponseError(e);
                }
                else {
                    throw e;
                }
            }
        }
        throw new sdk_geometry_api_sdk_core_1.ShapeDiverError("Could not send request: Retry-limit reached");
    });
}
function sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}
function encodeBase64(str) {
    try {
        return btoa(str);
    }
    catch (err) {
        return Buffer.from(str).toString("base64");
    }
}
function contentDispositionFromFilename(filename) {
    const asciiName = filename.replace(/[^\x00-\x7F]/g, "");
    let header = `attachment; filename="${asciiName}"`;
    if (filename.length !== asciiName.length) {
        header += `; filename*=UTF-8''${encodeURIComponent(filename)}`;
    }
    return header;
}
function filenameFromContentDisposition(contentDisposition) {
    var _a;
    let filename, filenameStar;
    const match = contentDisposition.match(/filename="([^"]+)"/);
    if (match)
        filename = match[1];
    const matchStar = contentDisposition.match(/filename\*=([^\'\']+\'\')?(.+)/);
    if (matchStar) {
        const encoding = matchStar[1] ? matchStar[1] : "utf-8";
        const encodedName = (_a = matchStar[2]) !== null && _a !== void 0 ? _a : matchStar[1];
        if (encoding.toLowerCase().startsWith("utf-8")) {
            filenameStar = decodeURIComponent(encodedName);
        }
    }
    return filenameStar !== null && filenameStar !== void 0 ? filenameStar : filename;
}
//# sourceMappingURL=utils.js.map

/***/ }),

/***/ 2746:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfError = exports.SdtfErrorType = void 0;
exports.SdtfErrorType = {
    Generic: 'sd_sdtf_generic',
};
class SdtfError extends Error {
    constructor(message) {
        super(message);
        this.errorType = exports.SdtfErrorType.Generic;
    }
}
exports.SdtfError = SdtfError;
//# sourceMappingURL=SdtfError.js.map

/***/ }),

/***/ 72187:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(28679), exports);
__exportStar(__webpack_require__(95066), exports);
__exportStar(__webpack_require__(4458), exports);
__exportStar(__webpack_require__(54996), exports);
__exportStar(__webpack_require__(6265), exports);
__exportStar(__webpack_require__(78508), exports);
__exportStar(__webpack_require__(45495), exports);
__exportStar(__webpack_require__(83884), exports);
__exportStar(__webpack_require__(84149), exports);
__exportStar(__webpack_require__(81665), exports);
__exportStar(__webpack_require__(53133), exports);
__exportStar(__webpack_require__(30768), exports);
__exportStar(__webpack_require__(56554), exports);
__exportStar(__webpack_require__(17019), exports);
__exportStar(__webpack_require__(27058), exports);
__exportStar(__webpack_require__(47042), exports);
__exportStar(__webpack_require__(25113), exports);
__exportStar(__webpack_require__(2227), exports);
__exportStar(__webpack_require__(12778), exports);
__exportStar(__webpack_require__(79853), exports);
__exportStar(__webpack_require__(72450), exports);
__exportStar(__webpack_require__(26262), exports);
__exportStar(__webpack_require__(16991), exports);
__exportStar(__webpack_require__(26435), exports);
__exportStar(__webpack_require__(13719), exports);
__exportStar(__webpack_require__(20450), exports);
__exportStar(__webpack_require__(70092), exports);
__exportStar(__webpack_require__(25601), exports);
__exportStar(__webpack_require__(10109), exports);
__exportStar(__webpack_require__(38746), exports);
__exportStar(__webpack_require__(72651), exports);
__exportStar(__webpack_require__(74449), exports);
__exportStar(__webpack_require__(69176), exports);
__exportStar(__webpack_require__(79755), exports);
__exportStar(__webpack_require__(34702), exports);
__exportStar(__webpack_require__(4201), exports);
__exportStar(__webpack_require__(66292), exports);
__exportStar(__webpack_require__(98986), exports);
__exportStar(__webpack_require__(89600), exports);
__exportStar(__webpack_require__(349), exports);
__exportStar(__webpack_require__(68255), exports);
__exportStar(__webpack_require__(20630), exports);
__exportStar(__webpack_require__(81193), exports);
__exportStar(__webpack_require__(2746), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 28679:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfIntegration.js.map

/***/ }),

/***/ 95066:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfTypeReader.js.map

/***/ }),

/***/ 4458:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfTypeWriter.js.map

/***/ }),

/***/ 27058:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfBufferValue.js.map

/***/ }),

/***/ 47042:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfParser.js.map

/***/ }),

/***/ 25113:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableContentComponent.js.map

/***/ }),

/***/ 54996:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfBaseReadableComponent.js.map

/***/ }),

/***/ 6265:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableAccessor.js.map

/***/ }),

/***/ 78508:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableAsset.js.map

/***/ }),

/***/ 45495:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableAttributes.js.map

/***/ }),

/***/ 83884:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableBuffer.js.map

/***/ }),

/***/ 84149:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableBufferView.js.map

/***/ }),

/***/ 81665:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableChunk.js.map

/***/ }),

/***/ 53133:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableDataItem.js.map

/***/ }),

/***/ 30768:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableFileInfo.js.map

/***/ }),

/***/ 56554:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableNode.js.map

/***/ }),

/***/ 17019:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfReadableTypeHint.js.map

/***/ }),

/***/ 10109:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfTypeHintName = exports.SdtfRhinoTypeHintName = exports.SdtfGrasshopperTypeHintName = exports.SdtfGeometryTypeHintName = exports.SdtfPrimitiveTypeHintName = void 0;
var SdtfPrimitiveTypeHintName;
(function (SdtfPrimitiveTypeHintName) {
    SdtfPrimitiveTypeHintName["BOOLEAN"] = "boolean";
    SdtfPrimitiveTypeHintName["CHAR"] = "char";
    SdtfPrimitiveTypeHintName["COLOR"] = "color";
    SdtfPrimitiveTypeHintName["DATA"] = "data";
    SdtfPrimitiveTypeHintName["DECIMAL"] = "decimal";
    SdtfPrimitiveTypeHintName["DOUBLE"] = "double";
    SdtfPrimitiveTypeHintName["GUID"] = "guid";
    SdtfPrimitiveTypeHintName["IMAGE"] = "image";
    SdtfPrimitiveTypeHintName["INT8"] = "int8";
    SdtfPrimitiveTypeHintName["INT16"] = "int16";
    SdtfPrimitiveTypeHintName["INT32"] = "int32";
    SdtfPrimitiveTypeHintName["INT64"] = "int64";
    SdtfPrimitiveTypeHintName["JSON"] = "json";
    SdtfPrimitiveTypeHintName["SINGLE"] = "single";
    SdtfPrimitiveTypeHintName["STRING"] = "string";
    SdtfPrimitiveTypeHintName["UINT8"] = "uint8";
    SdtfPrimitiveTypeHintName["UINT16"] = "uint16";
    SdtfPrimitiveTypeHintName["UINT32"] = "uint32";
    SdtfPrimitiveTypeHintName["UINT64"] = "uint64";
})(SdtfPrimitiveTypeHintName || (exports.SdtfPrimitiveTypeHintName = SdtfPrimitiveTypeHintName = {}));
var SdtfGeometryTypeHintName;
(function (SdtfGeometryTypeHintName) {
    SdtfGeometryTypeHintName["GEOMETRY_ARC"] = "geometry.arc";
    SdtfGeometryTypeHintName["GEOMETRY_BOUNDING_BOX"] = "geometry.boundingbox";
    SdtfGeometryTypeHintName["GEOMETRY_BOX"] = "geometry.box";
    SdtfGeometryTypeHintName["GEOMETRY_CIRCLE"] = "geometry.circle";
    SdtfGeometryTypeHintName["GEOMETRY_COMPLEX"] = "geometry.complex";
    SdtfGeometryTypeHintName["GEOMETRY_CONE"] = "geometry.cone";
    SdtfGeometryTypeHintName["GEOMETRY_CYLINDER"] = "geometry.cylinder";
    SdtfGeometryTypeHintName["GEOMETRY_ELLIPSE"] = "geometry.ellipse";
    SdtfGeometryTypeHintName["GEOMETRY_INTERVAL"] = "geometry.interval";
    SdtfGeometryTypeHintName["GEOMETRY_INTERVAL2"] = "geometry.interval2";
    SdtfGeometryTypeHintName["GEOMETRY_LINE"] = "geometry.line";
    SdtfGeometryTypeHintName["GEOMETRY_MATRIX"] = "geometry.matrix";
    SdtfGeometryTypeHintName["GEOMETRY_PLANE"] = "geometry.plane";
    SdtfGeometryTypeHintName["GEOMETRY_POINT"] = "geometry.point";
    SdtfGeometryTypeHintName["GEOMETRY_POINT2D"] = "geometry.point2d";
    SdtfGeometryTypeHintName["GEOMETRY_POINT3D"] = "geometry.point3d";
    SdtfGeometryTypeHintName["GEOMETRY_POINT4D"] = "geometry.point4d";
    SdtfGeometryTypeHintName["GEOMETRY_POLYLINE"] = "geometry.polyline";
    SdtfGeometryTypeHintName["GEOMETRY_RAY"] = "geometry.ray";
    SdtfGeometryTypeHintName["GEOMETRY_RECTANGLE"] = "geometry.rectangle";
    SdtfGeometryTypeHintName["GEOMETRY_SPHERE"] = "geometry.sphere";
    SdtfGeometryTypeHintName["GEOMETRY_TORUS"] = "geometry.torus";
    SdtfGeometryTypeHintName["GEOMETRY_TRANSFORM"] = "geometry.transform";
    SdtfGeometryTypeHintName["GEOMETRY_TRANSFORM_LIST"] = "geometry.transformlist";
    SdtfGeometryTypeHintName["GEOMETRY_VECTOR"] = "geometry.vector";
    SdtfGeometryTypeHintName["GEOMETRY_VECTOR2D"] = "geometry.vector2d";
    SdtfGeometryTypeHintName["GEOMETRY_VECTOR3D"] = "geometry.vector3d";
    SdtfGeometryTypeHintName["GEOMETRY_VECTOR4D"] = "geometry.vector4d";
})(SdtfGeometryTypeHintName || (exports.SdtfGeometryTypeHintName = SdtfGeometryTypeHintName = {}));
var SdtfGrasshopperTypeHintName;
(function (SdtfGrasshopperTypeHintName) {
    SdtfGrasshopperTypeHintName["GRASSHOPPER_PATH"] = "grasshopper.path";
})(SdtfGrasshopperTypeHintName || (exports.SdtfGrasshopperTypeHintName = SdtfGrasshopperTypeHintName = {}));
var SdtfRhinoTypeHintName;
(function (SdtfRhinoTypeHintName) {
    SdtfRhinoTypeHintName["RHINO_ARC_CURVE"] = "rhino.arccurve";
    SdtfRhinoTypeHintName["RHINO_BREP"] = "rhino.brep";
    SdtfRhinoTypeHintName["RHINO_CURVE"] = "rhino.curve";
    SdtfRhinoTypeHintName["RHINO_EXTRUSION"] = "rhino.extrusion";
    SdtfRhinoTypeHintName["RHINO_LINE_CURVE"] = "rhino.linecurve";
    SdtfRhinoTypeHintName["RHINO_MESH"] = "rhino.mesh";
    SdtfRhinoTypeHintName["RHINO_NURBS_CURVE"] = "rhino.nurbscurve";
    SdtfRhinoTypeHintName["RHINO_NURBS_SURFACE"] = "rhino.nurbssurface";
    SdtfRhinoTypeHintName["RHINO_PLANE_SURFACE"] = "rhino.planesurface";
    SdtfRhinoTypeHintName["RHINO_POINT"] = "rhino.point";
    SdtfRhinoTypeHintName["RHINO_POLY_CURVE"] = "rhino.polycurve";
    SdtfRhinoTypeHintName["RHINO_POLYLINE_CURVE"] = "rhino.polylinecurve";
    SdtfRhinoTypeHintName["RHINO_REV_SURFACE"] = "rhino.revsurface";
    SdtfRhinoTypeHintName["RHINO_SUBD"] = "rhino.subd";
    SdtfRhinoTypeHintName["RHINO_SURFACE"] = "rhino.surface";
})(SdtfRhinoTypeHintName || (exports.SdtfRhinoTypeHintName = SdtfRhinoTypeHintName = {}));
exports.SdtfTypeHintName = Object.assign(Object.assign(Object.assign(Object.assign({}, SdtfPrimitiveTypeHintName), SdtfGeometryTypeHintName), SdtfGrasshopperTypeHintName), SdtfRhinoTypeHintName);
//# sourceMappingURL=SdtfShapeDiverTypeHints.js.map

/***/ }),

/***/ 2227:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfAccessor.js.map

/***/ }),

/***/ 12778:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfAsset.js.map

/***/ }),

/***/ 79853:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfAttributes.js.map

/***/ }),

/***/ 72450:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfBaseComponent.js.map

/***/ }),

/***/ 26262:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfBuffer.js.map

/***/ }),

/***/ 16991:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfBufferView.js.map

/***/ }),

/***/ 26435:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfChunk.js.map

/***/ }),

/***/ 13719:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfDataItem.js.map

/***/ }),

/***/ 20450:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfFileInfo.js.map

/***/ }),

/***/ 70092:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfNode.js.map

/***/ }),

/***/ 25601:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfTypeHint.js.map

/***/ }),

/***/ 38746:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isNumeric = isNumeric;
exports.isNumber = isNumber;
exports.isInt = isInt;
exports.isUint = isUint;
exports.isNonEmptyString = isNonEmptyString;
exports.isNumberArray = isNumberArray;
exports.isIntArray = isIntArray;
exports.isUintArray = isUintArray;
exports.isDataObject = isDataObject;
exports.isBinaryData = isBinaryData;
exports.isNil = isNil;
function isNumeric(arg) {
    if (typeof arg === 'number') {
        return arg - arg === 0;
    }
    if (typeof arg === 'string' && arg.trim() !== '') {
        return Number.isFinite ? Number.isFinite(+arg) : isFinite(+arg);
    }
    return false;
}
function isNumber(arg) {
    return isNumeric(arg) && typeof arg === 'number';
}
function isInt(arg) {
    return isNumber(arg) && Number.isInteger(Number(arg));
}
function isUint(arg) {
    return isInt(arg) && Number(arg) >= 0;
}
function isNonEmptyString(arg) {
    return typeof arg === 'string' && arg !== '';
}
function isNumberArray(arg) {
    return Array.isArray(arg) && arg.every((a) => isNumber(a));
}
function isIntArray(arg) {
    return Array.isArray(arg) && arg.every((a) => isInt(a));
}
function isUintArray(arg) {
    return Array.isArray(arg) && arg.every((a) => isUint(a));
}
function isDataObject(arg) {
    return typeof arg === 'object' && !Array.isArray(arg) && arg !== null && !isBinaryData(arg);
}
function isBinaryData(arg) {
    return (arg instanceof ArrayBuffer ||
        ArrayBuffer.isView(arg));
}
function isNil(arg) {
    return arg === undefined || arg === null;
}
//# sourceMappingURL=SdtfTypeGuards.js.map

/***/ }),

/***/ 72651:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isSdtfError = isSdtfError;
exports.sdAssertUnreachable = sdAssertUnreachable;
exports.enumKeys = enumKeys;
exports.enumValues = enumValues;
exports.tryDeepCopy = tryDeepCopy;
const SdtfError_1 = __webpack_require__(2746);
function isSdtfError(e) {
    return (e instanceof Error &&
        'errorType' in e &&
        Object.values(SdtfError_1.SdtfErrorType).includes(e.errorType));
}
function sdAssertUnreachable(_) {
    throw new SdtfError_1.SdtfError('Reached unreachable block.');
}
function enumKeys(o) {
    return Object.keys(o).filter((k) => Number.isNaN(+k));
}
function enumValues(o) {
    return enumKeys(o).map((k) => o[k]);
}
function tryDeepCopy(original) {
    try {
        return structuredClone(original);
    }
    catch (e) {
        return original;
    }
}
//# sourceMappingURL=SdtfUtils.js.map

/***/ }),

/***/ 81193:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableComponentFactory.js.map

/***/ }),

/***/ 74449:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfBaseWriteableComponent.js.map

/***/ }),

/***/ 69176:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableAccessor.js.map

/***/ }),

/***/ 79755:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableAsset.js.map

/***/ }),

/***/ 34702:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableAttributes.js.map

/***/ }),

/***/ 4201:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableBuffer.js.map

/***/ }),

/***/ 66292:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableBufferView.js.map

/***/ }),

/***/ 98986:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableChunk.js.map

/***/ }),

/***/ 89600:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableDataItem.js.map

/***/ }),

/***/ 349:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableFileInfo.js.map

/***/ }),

/***/ 68255:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableNode.js.map

/***/ }),

/***/ 20630:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfWriteableTypeHint.js.map

/***/ }),

/***/ 12171:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfGeometryTypes.js.map

/***/ }),

/***/ 47760:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfGeometryTypeGuard = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
class SdtfGeometryTypeGuard {
    static assertArc(value) {
        if (!this.isArc(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry arc type.');
    }
    static isArc(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isPlane(value.plane) &&
            typeof value.radius === 'number' &&
            typeof value.angle === 'number');
    }
    static assertBoundingBox(value) {
        if (!this.isBoundingBox(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry bounding box type.');
    }
    static isBoundingBox(value) {
        return (0, sdk_sdtf_core_1.isDataObject)(value) && this.isPoint3d(value.min) && this.isPoint3d(value.max);
    }
    static assertBox(value) {
        if (!this.isBox(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry box type.');
    }
    static isBox(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isPlane(value.plane) &&
            Array.isArray(value.extents) &&
            value.extents.length === 3 &&
            value.extents.every((e) => (0, sdk_sdtf_core_1.isNumberArray)(e) && e.length === 2));
    }
    static assertCircle(value) {
        if (!this.isCircle(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry circle type.');
    }
    static isCircle(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) && this.isPlane(value.plane) && typeof value.radius === 'number');
    }
    static assertComplex(value) {
        if (!this.isComplex(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry complex type.');
    }
    static isComplex(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 2;
    }
    static assertCone(value) {
        if (!this.isCone(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry cone type.');
    }
    static isCone(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isPlane(value.plane) &&
            typeof value.radius === 'number' &&
            typeof value.height === 'number');
    }
    static assertCylinder(value) {
        if (!this.isCylinder(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry cylinder type.');
    }
    static isCylinder(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isCircle(value.baseCircle) &&
            typeof value.height === 'number');
    }
    static assertEllipse(value) {
        if (!this.isEllipse(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry ellipse type.');
    }
    static isEllipse(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isPlane(value.plane) &&
            typeof value.r1 === 'number' &&
            typeof value.r2 === 'number');
    }
    static assertInterval(value) {
        if (!this.isInterval(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry interval type.');
    }
    static isInterval(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 2;
    }
    static assertInterval2(value) {
        if (!this.isInterval2(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry interval2 type.');
    }
    static isInterval2(value) {
        return (0, sdk_sdtf_core_1.isDataObject)(value) && this.isInterval(value.u) && this.isInterval(value.v);
    }
    static assertLine(value) {
        if (!this.isLine(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry line type.');
    }
    static isLine(value) {
        return (Array.isArray(value) &&
            value.length === 2 &&
            this.isPoint3d(value[0]) &&
            this.isPoint3d(value[1]));
    }
    static assertMatrix(value) {
        if (!this.isMatrix(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry matrix type.');
    }
    static isMatrix(value) {
        if (!Array.isArray(value))
            return false;
        const nItems = value[0].length;
        return value.every((v) => (0, sdk_sdtf_core_1.isNumberArray)(v) && v.length === nItems);
    }
    static assertPlane(value) {
        if (!this.isPlane(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry plane type.');
    }
    static isPlane(value) {
        return (Array.isArray(value) &&
            value.length === 3 &&
            this.isPoint3d(value[0]) &&
            this.isVector3d(value[1]) &&
            this.isVector3d(value[2]));
    }
    static assertPoint(value) {
        if (!this.isPoint(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry point type.');
    }
    static isPoint(value) {
        return ((0, sdk_sdtf_core_1.isNumberArray)(value) &&
            (value.length === 2 || value.length === 3 || value.length === 4));
    }
    static assertPoint2d(value) {
        if (!this.isPoint2d(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry point type.');
    }
    static isPoint2d(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 2;
    }
    static assertPoint3d(value) {
        if (!this.isPoint3d(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry point type.');
    }
    static isPoint3d(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 3;
    }
    static assertPoint4d(value) {
        if (!this.isPoint4d(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry point type.');
    }
    static isPoint4d(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 4;
    }
    static assertPolyline(value) {
        if (!this.isPolyline(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry polyline type.');
    }
    static isPolyline(value) {
        return Array.isArray(value) && value.every((v) => this.isPoint3d(v));
    }
    static assertRay(value) {
        if (!this.isRay(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry ray type.');
    }
    static isRay(value) {
        return (Array.isArray(value) &&
            value.length === 2 &&
            this.isPoint3d(value[0]) &&
            this.isVector3d(value[1]));
    }
    static assertRectangle(value) {
        if (!this.isRectangle(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry rectangle type.');
    }
    static isRectangle(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isPlane(value.plane) &&
            this.isInterval(value.x) &&
            this.isInterval(value.y));
    }
    static assertSphere(value) {
        if (!this.isSphere(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry sphere type.');
    }
    static isSphere(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) && this.isPoint3d(value.center) && typeof value.radius === 'number');
    }
    static assertTorus(value) {
        if (!this.isTorus(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry torus type.');
    }
    static isTorus(value) {
        return ((0, sdk_sdtf_core_1.isDataObject)(value) &&
            this.isPlane(value.plane) &&
            typeof value.majorRadius === 'number' &&
            typeof value.minorRadius === 'number');
    }
    static assertTransform(value) {
        if (!this.isTransform(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry transform type.');
    }
    static isTransform(value) {
        return (Array.isArray(value) &&
            value.length === 4 &&
            value.every((v) => (0, sdk_sdtf_core_1.isNumberArray)(v) && v.length === 4));
    }
    static assertTransformList(value) {
        if (!this.isTransformList(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry transform-list type.');
    }
    static isTransformList(value) {
        return Array.isArray(value) && value.every((v) => this.isTransform(v));
    }
    static assertVector(value) {
        if (!this.isVector(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry vector type.');
    }
    static isVector(value) {
        return ((0, sdk_sdtf_core_1.isNumberArray)(value) &&
            (value.length === 2 || value.length === 3 || value.length === 4));
    }
    static assertVector2d(value) {
        if (!this.isVector2d(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry vector type.');
    }
    static isVector2d(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 2;
    }
    static assertVector3d(value) {
        if (!this.isVector3d(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry vector type.');
    }
    static isVector3d(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 3;
    }
    static assertVector4d(value) {
        if (!this.isVector4d(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a geometry vector type.');
    }
    static isVector4d(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 4;
    }
}
exports.SdtfGeometryTypeGuard = SdtfGeometryTypeGuard;
//# sourceMappingURL=SdtfGeometryTypeGuard.js.map

/***/ }),

/***/ 27355:
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
exports.SdtfGeometryTypeIntegration = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfGeometryTypeReader_1 = __webpack_require__(67686);
const SdtfGeometryTypeWriter_1 = __webpack_require__(96470);
class SdtfGeometryTypeIntegration {
    isTypeHintSupported(typeHintName) {
        return (0, sdk_sdtf_core_1.enumValues)(sdk_sdtf_core_1.SdtfGeometryTypeHintName).includes(typeHintName);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getReader() {
        return new SdtfGeometryTypeReader_1.SdtfGeometryTypeReader();
    }
    getWriter(factory) {
        return new SdtfGeometryTypeWriter_1.SdtfGeometryTypeWriter(factory);
    }
}
exports.SdtfGeometryTypeIntegration = SdtfGeometryTypeIntegration;
//# sourceMappingURL=SdtfGeometryTypeIntegration.js.map

/***/ }),

/***/ 67686:
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
exports.SdtfGeometryTypeReader = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfGeometryTypeValidator_1 = __webpack_require__(35207);
class SdtfGeometryTypeReader {
    constructor() {
        this.validator = new SdtfGeometryTypeValidator_1.SdtfGeometryTypeValidator();
    }
    readComponent(component) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const typeHint = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name;
            if (!this.validator.validateComponent(typeHint, component.value, component.accessor)) {
                throw new sdk_sdtf_core_1.SdtfError(`Cannot read value of type '${typeHint}': Invalid component.`);
            }
            switch (typeHint) {
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_ARC:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_BOUNDING_BOX:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_BOX:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CIRCLE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_COMPLEX:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CONE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CYLINDER:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_ELLIPSE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_INTERVAL:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_INTERVAL2:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_LINE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_MATRIX:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_PLANE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT2D:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT3D:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT4D:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POLYLINE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_RAY:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_RECTANGLE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_SPHERE:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TORUS:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TRANSFORM:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TRANSFORM_LIST:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR2D:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR3D:
                case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR4D:
                    return component.value;
                default:
                    (0, sdk_sdtf_core_1.sdAssertUnreachable)(typeHint);
            }
        });
    }
}
exports.SdtfGeometryTypeReader = SdtfGeometryTypeReader;
//# sourceMappingURL=SdtfGeometryTypeReader.js.map

/***/ }),

/***/ 35207:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfGeometryTypeValidator = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfGeometryTypeGuard_1 = __webpack_require__(47760);
class SdtfGeometryTypeValidator {
    validateComponent(typeHint, value, accessor) {
        switch (typeHint) {
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_ARC:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isArc(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_BOUNDING_BOX:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isBoundingBox(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_BOX:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isBox(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CIRCLE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isCircle(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_COMPLEX:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isComplex(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CONE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isCone(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CYLINDER:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isCylinder(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_ELLIPSE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isEllipse(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_INTERVAL:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isInterval(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_INTERVAL2:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isInterval2(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_LINE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isLine(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_MATRIX:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isMatrix(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_PLANE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isPlane(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isPoint(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT2D:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isPoint2d(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT3D:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isPoint3d(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT4D:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isPoint4d(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POLYLINE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isPolyline(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_RAY:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isRay(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_RECTANGLE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isRectangle(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_SPHERE:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isSphere(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TORUS:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isTorus(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TRANSFORM:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isTransform(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TRANSFORM_LIST:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isTransformList(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isVector(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR2D:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isVector2d(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR3D:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isVector3d(value);
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR4D:
                return SdtfGeometryTypeGuard_1.SdtfGeometryTypeGuard.isVector4d(value);
            default:
                (0, sdk_sdtf_core_1.sdAssertUnreachable)(typeHint);
        }
    }
}
exports.SdtfGeometryTypeValidator = SdtfGeometryTypeValidator;
//# sourceMappingURL=SdtfGeometryTypeValidator.js.map

/***/ }),

/***/ 96470:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfGeometryTypeWriter = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfGeometryTypeValidator_1 = __webpack_require__(35207);
class SdtfGeometryTypeWriter {
    constructor(factory) {
        this.factory = factory;
        this.validator = new SdtfGeometryTypeValidator_1.SdtfGeometryTypeValidator();
    }
    writeComponent(component) {
        var _a;
        const typeHint = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name;
        switch (typeHint) {
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_ARC:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_BOUNDING_BOX:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_BOX:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CIRCLE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_COMPLEX:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CONE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_CYLINDER:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_ELLIPSE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_INTERVAL:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_INTERVAL2:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_LINE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_MATRIX:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_PLANE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT2D:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT3D:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POINT4D:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_POLYLINE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_RAY:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_RECTANGLE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_SPHERE:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TORUS:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TRANSFORM:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_TRANSFORM_LIST:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR2D:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR3D:
            case sdk_sdtf_core_1.SdtfGeometryTypeHintName.GEOMETRY_VECTOR4D:
                delete component.accessor;
                break;
            default:
                (0, sdk_sdtf_core_1.sdAssertUnreachable)(typeHint);
        }
        if (!this.validator.validateComponent(typeHint, component.value, component.accessor)) {
            throw new sdk_sdtf_core_1.SdtfError(`Cannot write component of type '${typeHint}': Invalid component.`);
        }
    }
    postProcessComponents(components) {
    }
}
exports.SdtfGeometryTypeWriter = SdtfGeometryTypeWriter;
//# sourceMappingURL=SdtfGeometryTypeWriter.js.map

/***/ }),

/***/ 94206:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(12171), exports);
__exportStar(__webpack_require__(47760), exports);
__exportStar(__webpack_require__(27355), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 86300:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfPrimitiveTypes.js.map

/***/ }),

/***/ 91413:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPrimitiveTypeGuard = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
class SdtfPrimitiveTypeGuard {
    static assertBoolean(value) {
        if (!this.isBoolean(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a primitive boolean type.');
    }
    static isBoolean(value) {
        return typeof value === 'boolean';
    }
    static isBooleanType(typeHint) {
        return typeHint === sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.BOOLEAN;
    }
    static assertString(value) {
        if (!this.isString(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a primitive string type.');
    }
    static isString(value) {
        return typeof value === 'string';
    }
    static isStringType(typeHint) {
        return [
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.CHAR,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.GUID,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.STRING,
        ].includes(typeHint);
    }
    static assertNumber(value) {
        if (!this.isNumber(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a primitive number type.');
    }
    static isNumber(value) {
        return (0, sdk_sdtf_core_1.isNumber)(value);
    }
    static isNumberType(typeHint) {
        return [
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DECIMAL,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DOUBLE,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.SINGLE,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT8,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT16,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT32,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT64,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT8,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT16,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT32,
            sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT64,
        ].includes(typeHint);
    }
    static assertColor(value) {
        if (!this.isColor(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a primitive color type.');
    }
    static isColor(value) {
        return (0, sdk_sdtf_core_1.isNumberArray)(value) && value.length === 4;
    }
    static isColorType(typeHint) {
        return typeHint === sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.COLOR;
    }
    static assertDataView(value) {
        if (!this.isDataView(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a primitive data type.');
    }
    static isDataView(value) {
        return ArrayBuffer.isView(value);
    }
    static isDataViewType(typeHint) {
        return [sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DATA, sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.IMAGE].includes(typeHint);
    }
    static assertJson(value) {
        if (!this.isJson(value))
            throw new sdk_sdtf_core_1.SdtfError('Assertion error: Value is not a primitive json type.');
    }
    static isJson(value) {
        return (0, sdk_sdtf_core_1.isDataObject)(value) || Array.isArray(value);
    }
    static isJsonType(typeHint) {
        return typeHint === sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.JSON;
    }
}
exports.SdtfPrimitiveTypeGuard = SdtfPrimitiveTypeGuard;
//# sourceMappingURL=SdtfPrimitiveTypeGuard.js.map

/***/ }),

/***/ 65034:
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
exports.SdtfPrimitiveTypeIntegration = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfPrimitiveTypeReader_1 = __webpack_require__(26429);
const SdtfPrimitiveTypeWriter_1 = __webpack_require__(21513);
class SdtfPrimitiveTypeIntegration {
    isTypeHintSupported(typeHintName) {
        return (0, sdk_sdtf_core_1.enumValues)(sdk_sdtf_core_1.SdtfPrimitiveTypeHintName).includes(typeHintName);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () { });
    }
    getReader() {
        return new SdtfPrimitiveTypeReader_1.SdtfPrimitiveTypeReader();
    }
    getWriter(factory) {
        return new SdtfPrimitiveTypeWriter_1.SdtfPrimitiveTypeWriter(factory);
    }
}
exports.SdtfPrimitiveTypeIntegration = SdtfPrimitiveTypeIntegration;
//# sourceMappingURL=SdtfPrimitiveTypeIntegration.js.map

/***/ }),

/***/ 26429:
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
exports.SdtfPrimitiveTypeReader = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfPrimitiveTypeValidator_1 = __webpack_require__(14310);
class SdtfPrimitiveTypeReader {
    constructor() {
        this.validator = new SdtfPrimitiveTypeValidator_1.SdtfPrimitiveTypeValidator();
    }
    readComponent(component) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            const typeHint = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name;
            if (!this.validator.validateComponent(typeHint, component.value, component.accessor)) {
                throw new sdk_sdtf_core_1.SdtfError(`Cannot read value of type '${typeHint}': Invalid component.`);
            }
            switch (typeHint) {
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.BOOLEAN:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.CHAR:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DECIMAL:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DOUBLE:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.GUID:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT8:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT16:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT32:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT64:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.JSON:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.SINGLE:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.STRING:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT8:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT16:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT32:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT64:
                    return component.value;
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.COLOR:
                    return this.mapColor(component.value);
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DATA:
                case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.IMAGE:
                    return this.mapGenericData(yield ((_b = component.accessor) === null || _b === void 0 ? void 0 : _b.getContent()));
                default:
                    (0, sdk_sdtf_core_1.sdAssertUnreachable)(typeHint);
            }
        });
    }
    mapColor(content) {
        let parts;
        if (Array.isArray(content)) {
            parts = content;
        }
        else {
            parts = content.split(',').map((p) => Number(p) / 255);
        }
        let res = [...parts];
        if (res.length === 3)
            res = [...parts, 1];
        return res;
    }
    mapGenericData(content) {
        return content === null || content === void 0 ? void 0 : content.data;
    }
}
exports.SdtfPrimitiveTypeReader = SdtfPrimitiveTypeReader;
//# sourceMappingURL=SdtfPrimitiveTypeReader.js.map

/***/ }),

/***/ 14310:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPrimitiveTypeValidator = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const decimal_js_1 = __webpack_require__(93110);
const SdtfPrimitiveTypeGuard_1 = __webpack_require__(91413);
const UUIDv4_REGEX = /^[0-9a-f]{8}-[0-9a-f]{4}-[4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
const SINGLE_MAX = new decimal_js_1.Decimal(3.40282347e38);
const SINGLE_MIN = new decimal_js_1.Decimal(-3.40282347e38);
class SdtfPrimitiveTypeValidator {
    validateComponent(typeHint, value, accessor) {
        switch (typeHint) {
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.BOOLEAN:
                return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isBoolean(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.CHAR:
                return SdtfPrimitiveTypeValidator.validateCharType(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.COLOR:
                return SdtfPrimitiveTypeValidator.validateColorType(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DATA:
                return !!accessor && value === undefined;
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DECIMAL:
                return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isNumber(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DOUBLE:
                return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isNumber(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.GUID:
                return SdtfPrimitiveTypeValidator.validateGuidType(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.IMAGE:
                return !!accessor && value === undefined;
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT8:
                return SdtfPrimitiveTypeValidator.validateInt8Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT16:
                return SdtfPrimitiveTypeValidator.validateInt16Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT32:
                return SdtfPrimitiveTypeValidator.validateInt32Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT64:
                return SdtfPrimitiveTypeValidator.validateInt64Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.JSON:
                return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isJson(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.SINGLE:
                return SdtfPrimitiveTypeValidator.validateSingleType(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.STRING:
                return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isString(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT8:
                return SdtfPrimitiveTypeValidator.validateUint8Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT16:
                return SdtfPrimitiveTypeValidator.validateUint16Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT32:
                return SdtfPrimitiveTypeValidator.validateUint32Type(value);
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT64:
                return SdtfPrimitiveTypeValidator.validateUint64Type(value);
            default:
                (0, sdk_sdtf_core_1.sdAssertUnreachable)(typeHint);
        }
    }
    static validateCharType(value) {
        return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isString(value) && value.length === 1;
    }
    static validateColorType(value) {
        if ((0, sdk_sdtf_core_1.isNumberArray)(value) && value.length >= 3 && value.length <= 4)
            return true;
        if (typeof value !== 'string')
            return false;
        const parts = value.split(',');
        return (parts.length === 3 || parts.length === 4) && parts.every((p) => (0, sdk_sdtf_core_1.isNumeric)(p));
    }
    static validateGuidType(value) {
        return SdtfPrimitiveTypeGuard_1.SdtfPrimitiveTypeGuard.isString(value) && UUIDv4_REGEX.test(value);
    }
    static validateInt8Type(value) {
        return (0, sdk_sdtf_core_1.isInt)(value) && value >= -128 && value <= 127;
    }
    static validateInt16Type(value) {
        return (0, sdk_sdtf_core_1.isInt)(value) && value >= -32768 && value <= 32767;
    }
    static validateInt32Type(value) {
        return (0, sdk_sdtf_core_1.isInt)(value) && value >= -2147483648 && value <= 2147483647;
    }
    static validateInt64Type(value) {
        return (0, sdk_sdtf_core_1.isInt)(value) && value >= -9223372036854775808 && value <= 9223372036854775807;
    }
    static validateSingleType(value) {
        if (!(0, sdk_sdtf_core_1.isNumber)(value))
            return false;
        const decimal = new decimal_js_1.Decimal(value);
        return (decimal.precision() <= 9 &&
            decimal.comparedTo(SINGLE_MIN) >= 0 &&
            decimal.comparedTo(SINGLE_MAX) <= 0);
    }
    static validateUint8Type(value) {
        return (0, sdk_sdtf_core_1.isUint)(value) && value <= 255;
    }
    static validateUint16Type(value) {
        return (0, sdk_sdtf_core_1.isUint)(value) && value <= 65535;
    }
    static validateUint32Type(value) {
        return (0, sdk_sdtf_core_1.isUint)(value) && value <= 4294967295;
    }
    static validateUint64Type(value) {
        return (0, sdk_sdtf_core_1.isUint)(value);
    }
}
exports.SdtfPrimitiveTypeValidator = SdtfPrimitiveTypeValidator;
//# sourceMappingURL=SdtfPrimitiveTypeValidator.js.map

/***/ }),

/***/ 21513:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPrimitiveTypeWriter = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfPrimitiveTypeValidator_1 = __webpack_require__(14310);
class SdtfPrimitiveTypeWriter {
    constructor(factory) {
        this.factory = factory;
        this.validator = new SdtfPrimitiveTypeValidator_1.SdtfPrimitiveTypeValidator();
    }
    writeComponent(component) {
        var _a;
        const typeHint = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name;
        switch (typeHint) {
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.BOOLEAN:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.CHAR:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.COLOR:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DECIMAL:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DOUBLE:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.GUID:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT8:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT16:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT32:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.INT64:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.JSON:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.SINGLE:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.STRING:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT8:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT16:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT32:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.UINT64:
                delete component.accessor;
                break;
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.DATA:
            case sdk_sdtf_core_1.SdtfPrimitiveTypeHintName.IMAGE:
                delete component.value;
                break;
            default:
                (0, sdk_sdtf_core_1.sdAssertUnreachable)(typeHint);
        }
        if (!this.validator.validateComponent(typeHint, component.value, component.accessor)) {
            throw new sdk_sdtf_core_1.SdtfError(`Cannot write component of type '${typeHint}': Invalid component.`);
        }
    }
    postProcessComponents(components) {
    }
}
exports.SdtfPrimitiveTypeWriter = SdtfPrimitiveTypeWriter;
//# sourceMappingURL=SdtfPrimitiveTypeWriter.js.map

/***/ }),

/***/ 72916:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(86300), exports);
__exportStar(__webpack_require__(91413), exports);
__exportStar(__webpack_require__(65034), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 9434:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfConfig = void 0;
const sdk_sdtf_geometry_1 = __webpack_require__(94206);
const sdk_sdtf_primitives_1 = __webpack_require__(72916);
class SdtfConfig {
    constructor(config) {
        this.integrations = [
            new sdk_sdtf_primitives_1.SdtfPrimitiveTypeIntegration(),
            new sdk_sdtf_geometry_1.SdtfGeometryTypeIntegration(),
        ];
        if ((config === null || config === void 0 ? void 0 : config.integrations) !== undefined)
            this.integrations = config.integrations;
        this.authToken = config === null || config === void 0 ? void 0 : config.authToken;
    }
}
exports.SdtfConfig = SdtfConfig;
//# sourceMappingURL=SdtfConfig.js.map

/***/ }),

/***/ 55478:
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
exports.SdtfSdk = void 0;
exports.create = create;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfFormatter_1 = __webpack_require__(22701);
const SdtfParser_1 = __webpack_require__(52615);
const SdtfConfig_1 = __webpack_require__(9434);
const SdtfConstructor_1 = __webpack_require__(68622);
function create(config) {
    return __awaiter(this, void 0, void 0, function* () {
        const sdk = new SdtfSdk(config);
        yield sdk.init();
        return sdk;
    });
}
class SdtfSdk {
    constructor(config) {
        this.config = new SdtfConfig_1.SdtfConfig(config);
    }
    createParser() {
        return new SdtfParser_1.SdtfParser(this.config);
    }
    createConstructor() {
        return new SdtfConstructor_1.SdtfConstructor(this.config.integrations);
    }
    createFormatter() {
        return new SdtfFormatter_1.SdtfFormatter(this.config.integrations);
    }
    init() {
        return __awaiter(this, void 0, void 0, function* () {
            const promiseArray = [];
            this.config.integrations.forEach((integration) => promiseArray.push(integration.init()));
            const res = yield Promise.allSettled(promiseArray);
            res.forEach((promiseRes) => {
                if (promiseRes.status === 'rejected') {
                    const e = promiseRes.reason;
                    throw new sdk_sdtf_core_1.SdtfError(`Could not initialize all integrations: ${e}`);
                }
            });
        });
    }
}
exports.SdtfSdk = SdtfSdk;
//# sourceMappingURL=SdtfSdk.js.map

/***/ }),

/***/ 41032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfBinarySdtf = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const ISdtfComponentList_1 = __webpack_require__(17854);
class SdtfBinarySdtf {
    constructor() {
        this.binaryHeaderLength = 20;
    }
    constructBinarySdtf(componentList) {
        var _a;
        const binaryBody = (_a = componentList.binaryBody) !== null && _a !== void 0 ? _a : new ArrayBuffer(0);
        const jsonContent = this.createJsonContent(componentList);
        const header = this.createHeader(jsonContent.byteLength, binaryBody.byteLength);
        return new Uint8Array([
            ...new Uint8Array(header),
            ...new Uint8Array(jsonContent),
            ...new Uint8Array(binaryBody),
        ]).buffer;
    }
    parseBinarySdtf(sdtf) {
        const header = new DataView(sdtf, 0, this.binaryHeaderLength);
        const [contentLength, totalLength] = this.readHeader(header);
        const jsonContent = new DataView(sdtf, this.binaryHeaderLength, contentLength);
        const binaryBody = new DataView(sdtf, this.binaryHeaderLength + contentLength, totalLength - this.binaryHeaderLength - contentLength);
        return [jsonContent, binaryBody];
    }
    readHeader(header) {
        if (header instanceof ArrayBuffer)
            header = new DataView(header);
        const magic = String.fromCharCode(header.getUint8(0)) +
            String.fromCharCode(header.getUint8(1)) +
            String.fromCharCode(header.getUint8(2)) +
            String.fromCharCode(header.getUint8(3));
        if (magic !== 'sdtf')
            throw new sdk_sdtf_core_1.SdtfError(`Invalid identifier: Unknown file type for sdTF identifier '${magic}'.`);
        const version = header.getUint32(4, true);
        if (version !== 1)
            throw new sdk_sdtf_core_1.SdtfError(`Invalid version: Unsupported sdTF version '${version}'.`);
        const totalLength = header.getUint32(8, true);
        const contentLength = header.getUint32(12, true);
        const contentFormat = header.getUint32(16, true);
        if (contentFormat !== 0)
            throw new sdk_sdtf_core_1.SdtfError(`Invalid content: Unsupported sdTF content format '${contentFormat}'.`);
        return [contentLength, totalLength];
    }
    createHeader(contentLength, bodyLength) {
        const buffer = new Uint8Array(20);
        const headerDataView = new DataView(buffer.buffer, 0, buffer.byteLength);
        const magic = 'sdtf';
        headerDataView.setUint8(0, magic.codePointAt(0));
        headerDataView.setUint8(1, magic.codePointAt(1));
        headerDataView.setUint8(2, magic.codePointAt(2));
        headerDataView.setUint8(3, magic.codePointAt(3));
        const version = 1;
        headerDataView.setUint32(4, version, true);
        const totalLength = this.binaryHeaderLength + contentLength + bodyLength;
        headerDataView.setUint32(8, totalLength, true);
        headerDataView.setUint32(12, contentLength, true);
        const format = 0;
        headerDataView.setUint32(16, format, true);
        return headerDataView.buffer;
    }
    readJsonContent(jsonContent) {
        if (jsonContent instanceof ArrayBuffer)
            jsonContent = new DataView(jsonContent);
        try {
            return JSON.parse(new TextDecoder().decode(jsonContent));
        }
        catch (e) {
            throw new sdk_sdtf_core_1.SdtfError(`Invalid content: Cannot parse sdTF JSON content. ${e.message}`);
        }
    }
    createJsonContent(componentList) {
        const jsonContent = (0, ISdtfComponentList_1.toJsonContent)(componentList);
        try {
            return new TextEncoder().encode(JSON.stringify(jsonContent, undefined, 0));
        }
        catch (e) {
            throw new sdk_sdtf_core_1.SdtfError(`Invalid content: Cannot create sdTF JSON content. ${e.message}`);
        }
    }
}
exports.SdtfBinarySdtf = SdtfBinarySdtf;
//# sourceMappingURL=SdtfBinarySdtf.js.map

/***/ }),

/***/ 59789:
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
exports.SdtfBinaryBufferCache = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
class SdtfBinaryBufferCache {
    constructor() {
        this.cacheIdFullBuffer = 'full';
        this.cache = {};
    }
    calcCacheKey(uri = '') {
        let hash = 0;
        for (let i = 0; i < uri.length; i++) {
            const char = uri.charCodeAt(i);
            hash = (hash << 5) - hash + char;
            hash &= hash;
        }
        return new Uint32Array([hash])[0].toString(36);
    }
    calcCacheId(offset, length) {
        return `${offset};${length}`;
    }
    loadFromCache(key, offset, length) {
        const item = this.cache[key];
        if (!item) {
            return undefined;
        }
        const id = this.calcCacheId(offset, length);
        if (item[id]) {
            return item[id];
        }
        if (item[this.cacheIdFullBuffer]) {
            const buffer = item[this.cacheIdFullBuffer];
            return new DataView(buffer.buffer, buffer.byteOffset + offset, length);
        }
    }
    storeInCache(key, id, buffer) {
        var _a;
        const item = (_a = this.cache[key]) !== null && _a !== void 0 ? _a : {};
        item[id] = buffer;
        this.cache[key] = item;
    }
    setBinaryBody(binaryBody) {
        if (!binaryBody)
            return;
        this.cache[this.calcCacheKey()] = {
            [this.cacheIdFullBuffer]: binaryBody,
        };
    }
    getBuffer(uri, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a;
            const cacheKey = this.calcCacheKey(uri);
            return ((_a = this.loadFromCache(cacheKey, offset, length)) !== null && _a !== void 0 ? _a : (yield this.acquireBuffer(uri, length, offset)));
        });
    }
    acquireBuffer(uri, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            throw new sdk_sdtf_core_1.SdtfError('Resolution of external buffers is not supported in this mode. ' +
                "Please use 'ISdtfParser.readFromFile()' or 'ISdtfParser.readFromUrl()' to instantiate the sdTF asset and to enable this functionality.");
        });
    }
}
exports.SdtfBinaryBufferCache = SdtfBinaryBufferCache;
//# sourceMappingURL=SdtfBinaryBufferCache.js.map

/***/ }),

/***/ 91548:
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
exports.SdtfFileBufferCache = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfFileUtils_1 = __webpack_require__(68039);
const SdtfBinaryBufferCache_1 = __webpack_require__(59789);
class SdtfFileBufferCache extends SdtfBinaryBufferCache_1.SdtfBinaryBufferCache {
    constructor(absolutePath) {
        super();
        this.fileUtils = new SdtfFileUtils_1.SdtfFileUtils();
        const index = absolutePath.lastIndexOf('/');
        this.basePath = absolutePath.substring(0, index);
    }
    acquireBuffer(relativePath, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            let buffer;
            try {
                buffer = yield this.fileUtils.readFile(`${this.basePath}/${relativePath}`);
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(`Cannot read buffer: ${e.message}`);
            }
            this.storeInCache(this.calcCacheKey(relativePath), this.cacheIdFullBuffer, new DataView(buffer));
            return new DataView(buffer, offset, length);
        });
    }
}
exports.SdtfFileBufferCache = SdtfFileBufferCache;
//# sourceMappingURL=SdtfFileBufferCache.js.map

/***/ }),

/***/ 35666:
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
exports.SdtfHttpBufferCache = void 0;
const SdtfBinaryBufferCache_1 = __webpack_require__(59789);
class SdtfHttpBufferCache extends SdtfBinaryBufferCache_1.SdtfBinaryBufferCache {
    constructor(httpClient) {
        super();
        this.httpClient = httpClient;
    }
    acquireBuffer(uri, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            const [partialBuffer, entireBuffer] = yield this.httpClient.getBinaryBuffer(uri, offset, length);
            if (entireBuffer) {
                this.storeInCache(this.calcCacheKey(uri), this.cacheIdFullBuffer, new DataView(entireBuffer));
            }
            else {
                this.storeInCache(this.calcCacheKey(uri), this.calcCacheId(offset, length), partialBuffer);
            }
            return partialBuffer;
        });
    }
}
exports.SdtfHttpBufferCache = SdtfHttpBufferCache;
//# sourceMappingURL=SdtfHttpBufferCache.js.map

/***/ }),

/***/ 22701:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfFormatter = void 0;
const ISdtfReadableComponentList_1 = __webpack_require__(40464);
const ISdtfComponentList_1 = __webpack_require__(17854);
const SdtfComponentFactoryWrapper_1 = __webpack_require__(23818);
const SdtfWriteableComponentPostProcessor_1 = __webpack_require__(12130);
class SdtfFormatter {
    constructor(integrations) {
        this.factory = new SdtfComponentFactoryWrapper_1.SdtfComponentFactoryWrapper();
        this.postProcessor = new SdtfWriteableComponentPostProcessor_1.SdtfWriteableComponentPostProcessor(integrations);
    }
    prettifyReadableAsset(asset) {
        const readableList = (0, ISdtfReadableComponentList_1.readableComponentListFromAsset)(asset);
        const componentList = this.factory.createFromReadable(readableList);
        return this.prettifyAsset(componentList);
    }
    prettifyWriteableAsset(asset) {
        const writeableList = this.postProcessor.optimize(asset);
        const componentList = this.factory.createFromWriteable(writeableList);
        return this.prettifyAsset(componentList);
    }
    prettifyAsset(componentList) {
        const json = (0, ISdtfComponentList_1.toJsonContent)(componentList);
        return JSON.stringify(json, undefined, 2);
    }
}
exports.SdtfFormatter = SdtfFormatter;
//# sourceMappingURL=SdtfFormatter.js.map

/***/ }),

/***/ 17122:
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
exports.SdtfHttpClient = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const axios_1 = __importDefault(__webpack_require__(86425));
const SdtfBinarySdtf_1 = __webpack_require__(41032);
class SdtfHttpClient {
    constructor(jsonContentUrl, authToken) {
        this.binarySdtfParser = new SdtfBinarySdtf_1.SdtfBinarySdtf();
        this.jsonContentUrl = jsonContentUrl;
        this.basicHttpHeader = {};
        if (authToken)
            this.basicHttpHeader.authorization = 'Bearer ' + authToken;
    }
    calcUrl(uri) {
        if (!uri)
            return this.jsonContentUrl;
        const index = this.jsonContentUrl.lastIndexOf('/');
        return `${this.jsonContentUrl.substring(0, index)}/${uri}`;
    }
    getJsonContent() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, partial } = yield this.fetch(this.jsonContentUrl, 0, this.binarySdtfParser.binaryHeaderLength);
                if (partial) {
                    const [contentLength, _] = this.binarySdtfParser.readHeader(data);
                    const jsonContentBuffer = yield this.fetch(this.jsonContentUrl, 20, contentLength);
                    if (jsonContentBuffer.partial)
                        return [new DataView(jsonContentBuffer.data), undefined];
                }
                return this.binarySdtfParser.parseBinarySdtf(data);
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(`Could not fetch sdTF JSON content: ${e.message}`);
            }
        });
    }
    getBinaryBuffer(uri, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const { data, partial } = yield this.fetch(this.calcUrl(uri), offset, length);
                if (partial) {
                    return [new DataView(data), undefined];
                }
                else {
                    return [new DataView(data, offset, length), data];
                }
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(`Could not fetch sdTF binary buffer: ${e.message}`);
            }
        });
    }
    fetch(url, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            var _a, _b;
            let response;
            try {
                response = yield axios_1.default.head(url, { headers: this.basicHttpHeader });
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(e.message);
            }
            if (response.status > 299)
                throw new sdk_sdtf_core_1.SdtfError(`Received HTTP status ${response.status}.`);
            const contentEncoding = !!((_a = response.headers['Content-Encoding']) !== null && _a !== void 0 ? _a : response.headers['content-encoding']);
            const acceptRanges = (_b = response.headers['Accept-Ranges']) !== null && _b !== void 0 ? _b : response.headers['accept-ranges'];
            const rangeRequestsSupported = !contentEncoding && acceptRanges === 'bytes';
            const data = rangeRequestsSupported
                ? yield this.fetchPartially(url, offset, length)
                : yield this.fetchFully(url);
            const buffer = data instanceof ArrayBuffer ? data : Uint8Array.from(data).buffer;
            return {
                data: buffer,
                partial: rangeRequestsSupported,
            };
        });
    }
    fetchPartially(url, offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield axios_1.default.get(url, {
                    headers: Object.assign(Object.assign({}, this.basicHttpHeader), { range: `bytes=${offset}-${offset + length - 1}` }),
                    responseType: 'arraybuffer',
                });
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(e.message);
            }
            if (response.status === 416)
                throw new sdk_sdtf_core_1.SdtfError('Invalid range requested.');
            if (response.status !== 200 && response.status !== 206)
                throw new sdk_sdtf_core_1.SdtfError(`Received HTTP status ${response.status}.`);
            const data = response.data;
            const buffer = data instanceof ArrayBuffer ? data : Uint8Array.from(data).buffer;
            return buffer.byteLength > length ? buffer.slice(offset, offset + length) : buffer;
        });
    }
    fetchFully(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let response;
            try {
                response = yield axios_1.default.get(url, {
                    headers: this.basicHttpHeader,
                    responseType: 'arraybuffer',
                });
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(e.message);
            }
            if (response.status !== 200)
                throw new sdk_sdtf_core_1.SdtfError(`Received HTTP status ${response.status}.`);
            return response.data;
        });
    }
}
exports.SdtfHttpClient = SdtfHttpClient;
//# sourceMappingURL=SdtfHttpClient.js.map

/***/ }),

/***/ 76461:
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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfSdk = exports.create = void 0;
__exportStar(__webpack_require__(72187), exports);
var SdtfSdk_1 = __webpack_require__(55478);
Object.defineProperty(exports, "create", ({ enumerable: true, get: function () { return SdtfSdk_1.create; } }));
Object.defineProperty(exports, "SdtfSdk", ({ enumerable: true, get: function () { return SdtfSdk_1.SdtfSdk; } }));
__exportStar(__webpack_require__(95635), exports);
//# sourceMappingURL=index.js.map

/***/ }),

/***/ 40464:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.readableComponentListFromAsset = readableComponentListFromAsset;
function readableComponentListFromAsset(asset) {
    return {
        accessors: asset.accessors,
        asset: asset,
        attributes: asset.attributes,
        buffers: asset.buffers,
        bufferViews: asset.bufferViews,
        chunks: asset.chunks,
        items: asset.items,
        nodes: asset.nodes,
        typeHints: asset.typeHints,
        fileInfo: asset.fileInfo,
    };
}
//# sourceMappingURL=ISdtfReadableComponentList.js.map

/***/ }),

/***/ 95791:
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
exports.SdtfDataParser = void 0;
class SdtfDataParser {
    constructor(integrations) {
        this.integrations = integrations;
    }
    parseContent(component) {
        return __awaiter(this, void 0, void 0, function* () {
            const integration = this.integrations.find((i) => { var _a, _b; return i.isTypeHintSupported((_b = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ''); });
            if (integration) {
                return integration.getReader().readComponent(component);
            }
            if (component.value === undefined && !!component.accessor) {
                return component.accessor.getContent();
            }
            else {
                return component.value;
            }
        });
    }
}
exports.SdtfDataParser = SdtfDataParser;
//# sourceMappingURL=SdtfDataParser.js.map

/***/ }),

/***/ 52615:
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
exports.SdtfParser = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const browser_or_node_1 = __webpack_require__(18038);
const SdtfBinarySdtf_1 = __webpack_require__(41032);
const SdtfBinaryBufferCache_1 = __webpack_require__(59789);
const SdtfFileBufferCache_1 = __webpack_require__(91548);
const SdtfHttpBufferCache_1 = __webpack_require__(35666);
const SdtfHttpClient_1 = __webpack_require__(17122);
const SdtfComponentFactoryWrapper_1 = __webpack_require__(23818);
const SdtfFileUtils_1 = __webpack_require__(68039);
const SdtfReadableAsset_1 = __webpack_require__(97165);
const SdtfDataParser_1 = __webpack_require__(95791);
const SdtfReadableComponentFactory_1 = __webpack_require__(81267);
class SdtfParser {
    constructor(config) {
        this.config = config;
        this.binarySdtfParser = new SdtfBinarySdtf_1.SdtfBinarySdtf();
        this.componentFactory = new SdtfComponentFactoryWrapper_1.SdtfComponentFactoryWrapper();
        this.fileUtils = new SdtfFileUtils_1.SdtfFileUtils();
    }
    readFromFile(path) {
        return __awaiter(this, void 0, void 0, function* () {
            if (browser_or_node_1.isBrowser)
                throw new sdk_sdtf_core_1.SdtfError('Reading from file is only supported in Node.js.');
            let absolutePath, buffer;
            try {
                absolutePath = this.fileUtils.toAbsolutePath(path);
                buffer = yield this.fileUtils.readFile(absolutePath);
            }
            catch (e) {
                throw new sdk_sdtf_core_1.SdtfError(`Cannot read sdTF-file: ${e.message}`);
            }
            const [contentBuffer, binaryBuffer] = this.binarySdtfParser.parseBinarySdtf(buffer);
            const jsonContent = this.binarySdtfParser.readJsonContent(contentBuffer);
            const bufferCache = new SdtfFileBufferCache_1.SdtfFileBufferCache(absolutePath);
            bufferCache.setBinaryBody(binaryBuffer);
            return this.createSdtfAsset(jsonContent, bufferCache);
        });
    }
    readFromUrl(url) {
        return __awaiter(this, void 0, void 0, function* () {
            const httpClient = new SdtfHttpClient_1.SdtfHttpClient(url, this.config.authToken);
            const [contentBuffer, binaryBuffer] = yield httpClient.getJsonContent();
            const jsonContent = this.binarySdtfParser.readJsonContent(contentBuffer);
            const bufferCache = new SdtfHttpBufferCache_1.SdtfHttpBufferCache(httpClient);
            bufferCache.setBinaryBody(binaryBuffer);
            return this.createSdtfAsset(jsonContent, bufferCache);
        });
    }
    readFromBuffer(sdtf) {
        const [contentBuffer, binaryBuffer] = this.binarySdtfParser.parseBinarySdtf(sdtf);
        const jsonContent = this.binarySdtfParser.readJsonContent(contentBuffer);
        const bufferCache = new SdtfBinaryBufferCache_1.SdtfBinaryBufferCache();
        bufferCache.setBinaryBody(binaryBuffer);
        return this.createSdtfAsset(jsonContent, bufferCache);
    }
    createSdtfAsset(content, bufferCache) {
        const componentList = this.componentFactory.createFromJson(content);
        const readableComponentFactory = new SdtfReadableComponentFactory_1.SdtfReadableComponentFactory(bufferCache, new SdtfDataParser_1.SdtfDataParser(this.config.integrations));
        return this.buildReadableAsset(componentList, readableComponentFactory);
    }
    buildReadableAsset(componentList, factory) {
        const fileInfo = factory.createFileInfo(componentList.fileInfo);
        const asset = new SdtfReadableAsset_1.SdtfReadableAsset(fileInfo);
        asset.typeHints = componentList.typeHints.map((t) => factory.createTypeHint(t));
        asset.buffers = componentList.buffers.map((b) => factory.createBuffer(b));
        asset.bufferViews = componentList.bufferViews.map((b) => factory.createBufferView(b, asset.buffers));
        asset.accessors = componentList.accessors.map((a) => factory.createAccessor(a, asset.bufferViews));
        asset.attributes = componentList.attributes.map((a) => factory.createAttributes(a, asset.accessors, asset.typeHints));
        asset.items = componentList.items.map((d) => factory.createDataItem(d, asset.accessors, asset.attributes, asset.typeHints));
        asset.nodes = componentList.nodes.map((n) => factory.createNode(n, asset.attributes, asset.items, asset.typeHints));
        asset.chunks = componentList.chunks.map((c) => factory.createChunk(c, asset.attributes, asset.items, asset.typeHints));
        factory.setChunkReferences(asset.chunks, componentList.chunks, asset.nodes);
        factory.setNodeReferences(asset.nodes, componentList.nodes);
        return asset;
    }
}
exports.SdtfParser = SdtfParser;
//# sourceMappingURL=SdtfParser.js.map

/***/ }),

/***/ 81267:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfReadableComponentFactory = void 0;
const SdtfReadableAccessor_1 = __webpack_require__(8174);
const SdtfReadableAttributes_1 = __webpack_require__(85312);
const SdtfReadableBuffer_1 = __webpack_require__(51695);
const SdtfReadableBufferView_1 = __webpack_require__(56178);
const SdtfReadableDataItem_1 = __webpack_require__(23646);
const SdtfReadableFileInfo_1 = __webpack_require__(30051);
const SdtfReadableNode_1 = __webpack_require__(87973);
const SdtfReadableTypeHint_1 = __webpack_require__(6072);
class SdtfReadableComponentFactory {
    constructor(bufferCache, dataParser) {
        this.bufferCache = bufferCache;
        this.dataParser = dataParser;
    }
    createAccessor(accessor, bufferViews) {
        const readableAccessor = new SdtfReadableAccessor_1.SdtfReadableAccessor(bufferViews[accessor.bufferView]);
        readableAccessor.bufferView = bufferViews[accessor.bufferView];
        readableAccessor.id = accessor.id;
        readableAccessor.additionalProperties = accessor.additionalProperties;
        return readableAccessor;
    }
    createAttributes(attribute, accessors, typeHints) {
        const readableAttributes = new SdtfReadableAttributes_1.SdtfReadableAttributes();
        Object.entries(attribute.entries).forEach(([name, attribute]) => {
            const readableAttribute = new SdtfReadableAttributes_1.SdtfReadableAttribute(this.dataParser);
            if (attribute.accessor !== undefined)
                readableAttribute.accessor = accessors[attribute.accessor];
            if (attribute.typeHint !== undefined)
                readableAttribute.typeHint = typeHints[attribute.typeHint];
            readableAttribute.value = attribute.value;
            readableAttributes.entries[name] = readableAttribute;
        });
        return readableAttributes;
    }
    createBuffer(buffer) {
        const readableBuffer = new SdtfReadableBuffer_1.SdtfReadableBuffer(buffer.byteLength, this.bufferCache);
        readableBuffer.uri = buffer.uri;
        readableBuffer.additionalProperties = buffer.additionalProperties;
        return readableBuffer;
    }
    createBufferView(bufferView, buffers) {
        const readableBufferView = new SdtfReadableBufferView_1.SdtfReadableBufferView(buffers[bufferView.buffer], bufferView.byteLength, bufferView.byteOffset, bufferView.contentType);
        readableBufferView.contentEncoding = bufferView.contentEncoding;
        readableBufferView.name = bufferView.name;
        readableBufferView.additionalProperties = bufferView.additionalProperties;
        return readableBufferView;
    }
    createChunk(chunk, attributes, dataItems, typeHints) {
        return this.createNode(chunk, attributes, dataItems, typeHints);
    }
    createDataItem(dataItem, accessors, attributes, typeHints) {
        const readableDataItem = new SdtfReadableDataItem_1.SdtfReadableDataItem(this.dataParser);
        if (dataItem.accessor !== undefined)
            readableDataItem.accessor = accessors[dataItem.accessor];
        if (dataItem.attributes !== undefined)
            readableDataItem.attributes = attributes[dataItem.attributes];
        if (dataItem.typeHint !== undefined)
            readableDataItem.typeHint = typeHints[dataItem.typeHint];
        readableDataItem.value = dataItem.value;
        readableDataItem.additionalProperties = dataItem.additionalProperties;
        return readableDataItem;
    }
    createFileInfo(fileInfo) {
        const readableFileInfo = new SdtfReadableFileInfo_1.SdtfReadableFileInfo(fileInfo.version);
        readableFileInfo.copyright = fileInfo.copyright;
        readableFileInfo.generator = fileInfo.generator;
        readableFileInfo.version = fileInfo.version;
        readableFileInfo.additionalProperties = fileInfo.additionalProperties;
        return readableFileInfo;
    }
    createNode(node, attributes, dataItems, typeHints) {
        const readableNode = new SdtfReadableNode_1.SdtfReadableNode();
        if (node.attributes !== undefined)
            readableNode.attributes = attributes[node.attributes];
        readableNode.items = node.items.map((d) => dataItems[d]);
        readableNode.name = node.name;
        if (node.typeHint !== undefined)
            readableNode.typeHint = typeHints[node.typeHint];
        readableNode.additionalProperties = node.additionalProperties;
        return readableNode;
    }
    createTypeHint(typeHint) {
        const readableTypeHint = new SdtfReadableTypeHint_1.SdtfReadableTypeHint(typeHint.name);
        readableTypeHint.additionalProperties = typeHint.additionalProperties;
        return readableTypeHint;
    }
    setChunkReferences(readableChunks, chunks, readableNodes) {
        chunks.forEach((chunk, index) => {
            const readableChunk = readableChunks[index];
            readableChunk.nodes = chunk.nodes.map((nodePos) => readableNodes[nodePos]);
        });
    }
    setNodeReferences(readableNodes, nodes) {
        nodes.forEach((node, index) => {
            const readableNode = readableNodes[index];
            readableNode.nodes = node.nodes.map((nodePos) => readableNodes[nodePos]);
        });
    }
}
exports.SdtfReadableComponentFactory = SdtfReadableComponentFactory;
//# sourceMappingURL=SdtfReadableComponentFactory.js.map

/***/ }),

/***/ 60509:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfBaseReadableComponent = void 0;
const SdtfUtils_1 = __webpack_require__(3069);
class SdtfBaseReadableComponent {
    constructor() {
        this.componentId = (0, SdtfUtils_1.createComponentId)();
    }
    toDataObject() {
        return (0, SdtfUtils_1.userComponentToDataObject)(this);
    }
}
exports.SdtfBaseReadableComponent = SdtfBaseReadableComponent;
//# sourceMappingURL=SdtfBaseReadableComponent.js.map

/***/ }),

/***/ 8174:
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
exports.SdtfReadableAccessor = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableAccessor extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(bufferView) {
        super();
        this.bufferView = bufferView;
        this.additionalProperties = {};
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return {
                id: this.id,
                data: yield this.bufferView.getContent(),
            };
        });
    }
}
exports.SdtfReadableAccessor = SdtfReadableAccessor;
//# sourceMappingURL=SdtfReadableAccessor.js.map

/***/ }),

/***/ 97165:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfReadableAsset = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableAsset extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(fileInfo) {
        super();
        this.fileInfo = fileInfo;
        this.accessors = [];
        this.attributes = [];
        this.buffers = [];
        this.bufferViews = [];
        this.chunks = [];
        this.items = [];
        this.nodes = [];
        this.typeHints = [];
        this.additionalProperties = {};
    }
}
exports.SdtfReadableAsset = SdtfReadableAsset;
//# sourceMappingURL=SdtfReadableAsset.js.map

/***/ }),

/***/ 85312:
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
exports.SdtfReadableAttribute = exports.SdtfReadableAttributes = void 0;
const SdtfUtils_1 = __webpack_require__(3069);
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableAttributes extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor() {
        super(...arguments);
        this.entries = {};
    }
    toDataObject() {
        const dataObject = {};
        Object.entries(this.entries).forEach(([k, a]) => (dataObject[k] = a.toDataObject()));
        return dataObject;
    }
}
exports.SdtfReadableAttributes = SdtfReadableAttributes;
class SdtfReadableAttribute {
    constructor(dataParser) {
        this.dataParser = dataParser;
    }
    toDataObject() {
        const dataObject = (0, SdtfUtils_1.userComponentToDataObject)(this);
        delete dataObject.dataParser;
        return dataObject;
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dataParser.parseContent(this);
        });
    }
}
exports.SdtfReadableAttribute = SdtfReadableAttribute;
//# sourceMappingURL=SdtfReadableAttributes.js.map

/***/ }),

/***/ 51695:
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
exports.SdtfReadableBuffer = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableBuffer extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(byteLength, bufferCache) {
        super();
        this.byteLength = byteLength;
        this.bufferCache = bufferCache;
        this.additionalProperties = {};
    }
    toDataObject() {
        const dataObject = super.toDataObject();
        delete dataObject.bufferCache;
        return dataObject;
    }
    getContent(offset, length) {
        return __awaiter(this, void 0, void 0, function* () {
            if (offset + length > this.byteLength)
                throw new sdk_sdtf_core_1.SdtfError('Unable to get content of buffer: Requested content is out of range.');
            return this.bufferCache.getBuffer(this.uri, offset, length);
        });
    }
}
exports.SdtfReadableBuffer = SdtfReadableBuffer;
//# sourceMappingURL=SdtfReadableBuffer.js.map

/***/ }),

/***/ 56178:
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
exports.SdtfReadableBufferView = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableBufferView extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(buffer, byteLength, byteOffset, contentType) {
        super();
        this.buffer = buffer;
        this.byteLength = byteLength;
        this.byteOffset = byteOffset;
        this.contentType = contentType;
        this.additionalProperties = {};
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.buffer.getContent(this.byteOffset, this.byteLength);
        });
    }
}
exports.SdtfReadableBufferView = SdtfReadableBufferView;
//# sourceMappingURL=SdtfReadableBufferView.js.map

/***/ }),

/***/ 23646:
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
exports.SdtfReadableDataItem = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableDataItem extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(dataParser) {
        super();
        this.dataParser = dataParser;
        this.additionalProperties = {};
    }
    toDataObject() {
        const dataObject = super.toDataObject();
        delete dataObject.dataParser;
        return dataObject;
    }
    getContent() {
        return __awaiter(this, void 0, void 0, function* () {
            return this.dataParser.parseContent(this);
        });
    }
}
exports.SdtfReadableDataItem = SdtfReadableDataItem;
//# sourceMappingURL=SdtfReadableDataItem.js.map

/***/ }),

/***/ 30051:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfReadableFileInfo = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableFileInfo extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(version) {
        super();
        this.version = version;
        this.additionalProperties = {};
    }
}
exports.SdtfReadableFileInfo = SdtfReadableFileInfo;
//# sourceMappingURL=SdtfReadableFileInfo.js.map

/***/ }),

/***/ 87973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfReadableNode = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableNode extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor() {
        super(...arguments);
        this.items = [];
        this.nodes = [];
        this.additionalProperties = {};
    }
}
exports.SdtfReadableNode = SdtfReadableNode;
//# sourceMappingURL=SdtfReadableNode.js.map

/***/ }),

/***/ 6072:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfReadableTypeHint = void 0;
const SdtfBaseReadableComponent_1 = __webpack_require__(60509);
class SdtfReadableTypeHint extends SdtfBaseReadableComponent_1.SdtfBaseReadableComponent {
    constructor(name) {
        super();
        this.name = name;
        this.additionalProperties = {};
    }
}
exports.SdtfReadableTypeHint = SdtfReadableTypeHint;
//# sourceMappingURL=SdtfReadableTypeHint.js.map

/***/ }),

/***/ 17854:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.toJsonContent = toJsonContent;
function toJsonContent(componentList) {
    const json = componentList.asset.toJson();
    json.asset = componentList.fileInfo.toJson();
    json.chunks = componentList.chunks.map((c) => c.toJson());
    json.nodes = componentList.nodes.map((n) => n.toJson());
    json.items = componentList.items.map((i) => i.toJson());
    json.attributes = componentList.attributes.map((a) => a.toJson());
    json.typeHints = componentList.typeHints.map((t) => t.toJson());
    json.accessors = componentList.accessors.map((a) => a.toJson());
    json.bufferViews = componentList.bufferViews.map((v) => v.toJson());
    json.buffers = componentList.buffers.map((b) => b.toJson());
    return json;
}
//# sourceMappingURL=ISdtfComponentList.js.map

/***/ }),

/***/ 33321:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfComponentFactory = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfPartialAccessor_1 = __webpack_require__(30961);
const SdtfPartialAsset_1 = __webpack_require__(90596);
const SdtfPartialAttributes_1 = __webpack_require__(71023);
const SdtfPartialBuffer_1 = __webpack_require__(74260);
const SdtfPartialBufferView_1 = __webpack_require__(87885);
const SdtfPartialDataItem_1 = __webpack_require__(26005);
const SdtfPartialFileInfo_1 = __webpack_require__(71272);
const SdtfPartialNode_1 = __webpack_require__(18706);
const SdtfPartialTypeHint_1 = __webpack_require__(76579);
class SdtfComponentFactory {
    constructor() {
        this.propertyNameAccessors = 'accessors';
        this.propertyNameAttributes = 'attributes';
        this.propertyNameBufferViews = 'bufferViews';
        this.propertyNameBuffers = 'buffers';
        this.propertyNameChunks = 'chunks';
        this.propertyNameDataItems = 'items';
        this.propertyNameFileInfo = 'asset';
        this.propertyNameFileInfoAlternative = 'fileInfo';
        this.propertyNameNodes = 'nodes';
        this.propertyNameTypeHints = 'typeHints';
    }
    createAccessor(accessorData) {
        const accessor = new SdtfPartialAccessor_1.SdtfPartialAccessor();
        if ((0, sdk_sdtf_core_1.isNumber)(accessorData.bufferView))
            accessor.bufferView = accessorData.bufferView;
        if (typeof accessorData.id === 'string')
            accessor.id = accessorData.id;
        Object.entries(accessorData)
            .filter(([k, _]) => k !== 'bufferView' && k !== 'id')
            .forEach(([k, v]) => (accessor.additionalProperties[k] = v));
        return accessor;
    }
    createAsset(assetData) {
        const asset = new SdtfPartialAsset_1.SdtfPartialAsset();
        asset.fileInfo = 0;
        Object.entries(assetData)
            .filter(([k, _]) => k !== this.propertyNameAccessors &&
            k !== this.propertyNameAttributes &&
            k !== this.propertyNameBufferViews &&
            k !== this.propertyNameBuffers &&
            k !== this.propertyNameChunks &&
            k !== this.propertyNameDataItems &&
            k !== this.propertyNameFileInfo &&
            k !== this.propertyNameFileInfoAlternative &&
            k !== this.propertyNameNodes &&
            k !== this.propertyNameTypeHints)
            .forEach(([k, v]) => (asset.additionalProperties[k] = v));
        return asset;
    }
    createAttributes(attributesData) {
        const attributes = new SdtfPartialAttributes_1.SdtfPartialAttributes();
        Object.entries(attributesData).forEach(([name, data], i) => {
            if (!(0, sdk_sdtf_core_1.isDataObject)(data))
                throw new sdk_sdtf_core_1.SdtfError(`Invalid attribute data: Item [${i}] must be an object.`);
            const attribute = new SdtfPartialAttributes_1.SdtfAttribute();
            if (typeof data.accessor === 'number')
                attribute.accessor = data.accessor;
            if (typeof data.typeHint === 'number')
                attribute.typeHint = data.typeHint;
            attribute.value = data.value;
            attributes.entries[name] = attribute;
        });
        return attributes;
    }
    createBuffer(bufferData) {
        const buffer = new SdtfPartialBuffer_1.SdtfPartialBuffer();
        if ((0, sdk_sdtf_core_1.isNumber)(bufferData.byteLength))
            buffer.byteLength = bufferData.byteLength;
        if (typeof bufferData.uri === 'string')
            buffer.uri = bufferData.uri;
        Object.entries(bufferData)
            .filter(([k, _]) => k !== 'byteLength' && k !== 'uri')
            .forEach(([k, v]) => (buffer.additionalProperties[k] = v));
        return buffer;
    }
    createBufferView(bufferViewData) {
        const bufferView = new SdtfPartialBufferView_1.SdtfPartialBufferView();
        if ((0, sdk_sdtf_core_1.isNumber)(bufferViewData.buffer))
            bufferView.buffer = bufferViewData.buffer;
        if ((0, sdk_sdtf_core_1.isNumber)(bufferViewData.byteLength))
            bufferView.byteLength = bufferViewData.byteLength;
        if ((0, sdk_sdtf_core_1.isNumber)(bufferViewData.byteOffset))
            bufferView.byteOffset = bufferViewData.byteOffset;
        if (typeof bufferViewData.contentEncoding === 'string')
            bufferView.contentEncoding = bufferViewData.contentEncoding;
        if (typeof bufferViewData.contentType === 'string')
            bufferView.contentType = bufferViewData.contentType;
        if (typeof bufferViewData.name === 'string')
            bufferView.name = bufferViewData.name;
        Object.entries(bufferViewData)
            .filter(([k, _]) => k !== 'buffer' &&
            k !== 'byteLength' &&
            k !== 'byteOffset' &&
            k !== 'contentEncoding' &&
            k !== 'contentType' &&
            k !== 'name')
            .forEach(([k, v]) => (bufferView.additionalProperties[k] = v));
        return bufferView;
    }
    createChunk(chunkData) {
        return this.createNode(chunkData);
    }
    createDataItem(dataItemData) {
        const dataItem = new SdtfPartialDataItem_1.SdtfPartialDataItem();
        if ((0, sdk_sdtf_core_1.isNumber)(dataItemData.accessor))
            dataItem.accessor = dataItemData.accessor;
        if ((0, sdk_sdtf_core_1.isNumber)(dataItemData.attributes))
            dataItem.attributes = dataItemData.attributes;
        if ((0, sdk_sdtf_core_1.isNumber)(dataItemData.typeHint))
            dataItem.typeHint = dataItemData.typeHint;
        dataItem.value = dataItemData.value;
        Object.entries(dataItemData)
            .filter(([k, _]) => k !== 'accessor' && k !== 'attributes' && k !== 'typeHint' && k !== 'value')
            .forEach(([k, v]) => (dataItem.additionalProperties[k] = v));
        return dataItem;
    }
    createFileInfo(fileInfoData) {
        const fileInfo = new SdtfPartialFileInfo_1.SdtfPartialFileInfo();
        if (typeof fileInfoData.copyright === 'string')
            fileInfo.copyright = fileInfoData.copyright;
        if (typeof fileInfoData.generator === 'string')
            fileInfo.generator = fileInfoData.generator;
        if (typeof fileInfoData.version === 'string')
            fileInfo.version = fileInfoData.version;
        Object.entries(fileInfoData)
            .filter(([k, _]) => k !== 'copyright' && k !== 'generator' && k !== 'version')
            .forEach(([k, v]) => (fileInfo.additionalProperties[k] = v));
        return fileInfo;
    }
    createNode(nodeData) {
        const node = new SdtfPartialNode_1.SdtfPartialNode();
        if ((0, sdk_sdtf_core_1.isNumber)(nodeData.attributes))
            node.attributes = nodeData.attributes;
        if ((0, sdk_sdtf_core_1.isNumberArray)(nodeData.items))
            node.items = nodeData.items;
        if (typeof nodeData.name === 'string')
            node.name = nodeData.name;
        if ((0, sdk_sdtf_core_1.isNumberArray)(nodeData.nodes))
            node.nodes = nodeData.nodes;
        if ((0, sdk_sdtf_core_1.isNumber)(nodeData.typeHint))
            node.typeHint = nodeData.typeHint;
        Object.entries(nodeData)
            .filter(([k, _]) => k !== 'attributes' &&
            k !== 'items' &&
            k !== 'name' &&
            k !== 'nodes' &&
            k !== 'typeHint')
            .forEach(([k, v]) => (node.additionalProperties[k] = v));
        return node;
    }
    createTypeHint(typeHintData) {
        const typeHint = new SdtfPartialTypeHint_1.SdtfPartialTypeHint();
        if (typeof typeHintData.name === 'string')
            typeHint.name = typeHintData.name;
        Object.entries(typeHintData)
            .filter(([k, _]) => k !== 'name')
            .forEach(([k, v]) => (typeHint.additionalProperties[k] = v));
        return typeHint;
    }
}
exports.SdtfComponentFactory = SdtfComponentFactory;
//# sourceMappingURL=SdtfComponentFactory.js.map

/***/ }),

/***/ 23818:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfComponentFactoryWrapper = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfComponentValidator_1 = __webpack_require__(40131);
const SdtfComponentFactory_1 = __webpack_require__(33321);
class SdtfComponentFactoryWrapper {
    constructor() {
        this.factory = new SdtfComponentFactory_1.SdtfComponentFactory();
    }
    createFromJson(json) {
        const f = this.factory;
        return this.createComponentList({
            accessors: this.buildFromArray(json, f.propertyNameAccessors, f.createAccessor.bind(f)),
            asset: this.buildFromObject(json, '', f.createAsset.bind(f)),
            attributes: this.buildFromArray(json, f.propertyNameAttributes, f.createAttributes.bind(f)),
            buffers: this.buildFromArray(json, f.propertyNameBuffers, f.createBuffer.bind(f)),
            bufferViews: this.buildFromArray(json, f.propertyNameBufferViews, f.createBufferView.bind(f)),
            chunks: this.buildFromArray(json, f.propertyNameChunks, f.createChunk.bind(f)),
            items: this.buildFromArray(json, f.propertyNameDataItems, f.createDataItem.bind(f)),
            fileInfo: this.buildFromObject(json, f.propertyNameFileInfo, f.createFileInfo.bind(f)),
            nodes: this.buildFromArray(json, f.propertyNameNodes, f.createNode.bind(f)),
            typeHints: this.buildFromArray(json, f.propertyNameTypeHints, f.createTypeHint.bind(f)),
        });
    }
    createFromReadable(readableComponents) {
        const f = this.factory;
        const partialComponentList = {
            accessors: readableComponents.accessors.map((a) => f.createAccessor(a.toDataObject())),
            asset: f.createAsset(readableComponents.asset.toDataObject()),
            attributes: readableComponents.attributes.map((a) => f.createAttributes(a.toDataObject())),
            buffers: readableComponents.buffers.map((b) => f.createBuffer(b.toDataObject())),
            bufferViews: readableComponents.bufferViews.map((b) => f.createBufferView(b.toDataObject())),
            chunks: readableComponents.chunks.map((c) => f.createChunk(c.toDataObject())),
            items: readableComponents.items.map((i) => f.createDataItem(i.toDataObject())),
            fileInfo: f.createFileInfo(readableComponents.fileInfo.toDataObject()),
            nodes: readableComponents.nodes.map((n) => f.createNode(n.toDataObject())),
            typeHints: readableComponents.typeHints.map((y) => f.createTypeHint(y.toDataObject())),
        };
        this.mapHierarchyRepresentation(partialComponentList, readableComponents);
        return this.createComponentList(partialComponentList);
    }
    createFromWriteable(writeableComponents) {
        var _a;
        const f = this.factory;
        const partialComponentList = {
            accessors: writeableComponents.accessors.map((a) => f.createAccessor(a.toDataObject())),
            asset: f.createAsset(writeableComponents.asset.toDataObject()),
            attributes: writeableComponents.attributes.map((a) => f.createAttributes(a.toDataObject())),
            buffers: writeableComponents.buffers.map((b) => f.createBuffer(b.toDataObject())),
            bufferViews: writeableComponents.bufferViews.map((b) => f.createBufferView(b.toDataObject())),
            chunks: writeableComponents.chunks.map((c) => f.createChunk(c.toDataObject())),
            items: writeableComponents.items.map((i) => f.createDataItem(i.toDataObject())),
            fileInfo: f.createFileInfo(writeableComponents.fileInfo.toDataObject()),
            nodes: writeableComponents.nodes.map((n) => f.createNode(n.toDataObject())),
            typeHints: writeableComponents.typeHints.map((t) => f.createTypeHint(t.toDataObject())),
            binaryBody: (_a = writeableComponents.buffers.find((buffer) => !buffer.uri)) === null || _a === void 0 ? void 0 : _a.data,
        };
        this.mapHierarchyRepresentation(partialComponentList, writeableComponents);
        return this.createComponentList(partialComponentList);
    }
    createComponentList(partialComponents) {
        const validator = new SdtfComponentValidator_1.SdtfComponentValidator(partialComponents);
        const asset = partialComponents.asset;
        validator.validateAsset(asset);
        const fileInfo = partialComponents.fileInfo;
        validator.validateFileInfo(fileInfo);
        const buffers = partialComponents.buffers.map((b) => {
            validator.validateBuffer(b);
            return b;
        });
        const bufferViews = partialComponents.bufferViews.map((b) => {
            validator.validateBufferView(b);
            return b;
        });
        const accessors = partialComponents.accessors.map((a) => {
            validator.validateAccessor(a);
            return a;
        });
        const typeHints = partialComponents.typeHints.map((t) => {
            validator.validateTypeHint(t);
            return t;
        });
        const attributes = partialComponents.attributes.map((a) => {
            validator.validateAttributes(a);
            return a;
        });
        const chunks = partialComponents.chunks.map((c) => {
            validator.validateChunk(c);
            return c;
        });
        const dataItems = partialComponents.items.map((d) => {
            validator.validateDataItem(d);
            return d;
        });
        const nodes = partialComponents.nodes.map((n) => {
            validator.validateNode(n);
            return n;
        });
        return {
            accessors,
            asset,
            attributes,
            buffers,
            bufferViews,
            chunks,
            items: dataItems,
            nodes,
            typeHints,
            fileInfo,
            binaryBody: partialComponents.binaryBody,
        };
    }
    buildFromObject(jsonObject, propertyName, createFn) {
        const componentDataObject = propertyName ? jsonObject[propertyName] : jsonObject;
        if (!(0, sdk_sdtf_core_1.isDataObject)(componentDataObject))
            throw new sdk_sdtf_core_1.SdtfError(`Invalid item at ${propertyName}: Item must be an object.`);
        return createFn(componentDataObject);
    }
    buildFromArray(jsonArray, propertyName, createFn) {
        const componentDataArray = jsonArray[propertyName];
        if (componentDataArray === undefined)
            return [];
        if (!Array.isArray(componentDataArray))
            throw new sdk_sdtf_core_1.SdtfError(`Invalid content property: '${propertyName}' must be an array.`);
        return componentDataArray.map((componentDataItem, i) => {
            if (!(0, sdk_sdtf_core_1.isDataObject)(componentDataItem))
                throw new sdk_sdtf_core_1.SdtfError(`Invalid item at ${propertyName}[${i}]: Item must be an object.`);
            return createFn(componentDataItem);
        });
    }
    mapHierarchyRepresentation(target, src) {
        const getIndex = (list, componentId) => {
            if (!componentId)
                return -1;
            return list.findIndex((c) => c.componentId === componentId);
        };
        target.asset.fileInfo = 0;
        target.accessors.forEach((accessor, index) => {
            var _a;
            const srcComponent = src.accessors[index];
            accessor.bufferView = getIndex(src.bufferViews, (_a = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.bufferView) === null || _a === void 0 ? void 0 : _a.componentId);
        });
        target.attributes.forEach((attributes, index) => {
            if (!attributes.entries)
                return;
            Object.entries(attributes.entries).forEach(([name, attribute]) => {
                var _a, _b;
                const srcComponent = src.attributes[index].entries[name];
                if (srcComponent.accessor)
                    attribute.accessor = getIndex(src.accessors, (_a = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.accessor) === null || _a === void 0 ? void 0 : _a.componentId);
                if (srcComponent.typeHint)
                    attribute.typeHint = getIndex(src.typeHints, (_b = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.typeHint) === null || _b === void 0 ? void 0 : _b.componentId);
            });
        });
        target.bufferViews.forEach((bufferView, index) => {
            var _a;
            const srcComponent = src.bufferViews[index];
            bufferView.buffer = getIndex(src.buffers, (_a = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.buffer) === null || _a === void 0 ? void 0 : _a.componentId);
        });
        target.chunks.forEach((chunk, index) => {
            var _a, _b;
            const srcComponent = src.chunks[index];
            if (srcComponent.attributes)
                chunk.attributes = getIndex(src.attributes, (_a = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.attributes) === null || _a === void 0 ? void 0 : _a.componentId);
            chunk.items = srcComponent.items.map((item) => getIndex(src.items, item === null || item === void 0 ? void 0 : item.componentId));
            chunk.nodes = srcComponent.nodes.map((node) => getIndex(src.nodes, node === null || node === void 0 ? void 0 : node.componentId));
            if (srcComponent.typeHint)
                chunk.typeHint = getIndex(src.typeHints, (_b = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.typeHint) === null || _b === void 0 ? void 0 : _b.componentId);
        });
        target.items.forEach((dataItem, index) => {
            var _a, _b, _c;
            const srcComponent = src.items[index];
            if (srcComponent.accessor)
                dataItem.accessor = getIndex(src.accessors, (_a = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.accessor) === null || _a === void 0 ? void 0 : _a.componentId);
            if (srcComponent.attributes)
                dataItem.attributes = getIndex(src.attributes, (_b = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.attributes) === null || _b === void 0 ? void 0 : _b.componentId);
            if (srcComponent.typeHint)
                dataItem.typeHint = getIndex(src.typeHints, (_c = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.typeHint) === null || _c === void 0 ? void 0 : _c.componentId);
        });
        target.nodes.forEach((node, index) => {
            var _a, _b;
            const srcComponent = src.nodes[index];
            if (srcComponent.attributes)
                node.attributes = getIndex(src.attributes, (_a = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.attributes) === null || _a === void 0 ? void 0 : _a.componentId);
            node.items = srcComponent.items.map((item) => getIndex(src.items, item === null || item === void 0 ? void 0 : item.componentId));
            node.nodes = srcComponent.nodes.map((node) => getIndex(src.nodes, node === null || node === void 0 ? void 0 : node.componentId));
            if (srcComponent.typeHint)
                node.typeHint = getIndex(src.typeHints, (_b = srcComponent === null || srcComponent === void 0 ? void 0 : srcComponent.typeHint) === null || _b === void 0 ? void 0 : _b.componentId);
        });
    }
}
exports.SdtfComponentFactoryWrapper = SdtfComponentFactoryWrapper;
//# sourceMappingURL=SdtfComponentFactoryWrapper.js.map

/***/ }),

/***/ 37042:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfBasePartialComponent = void 0;
const SdtfUtils_1 = __webpack_require__(3069);
class SdtfBasePartialComponent {
    constructor() {
        this.componentId = (0, SdtfUtils_1.createComponentId)();
    }
}
exports.SdtfBasePartialComponent = SdtfBasePartialComponent;
//# sourceMappingURL=SdtfBasePartialComponent.js.map

/***/ }),

/***/ 30961:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialAccessor = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialAccessor extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.bufferView !== undefined)
            json.bufferView = this.bufferView;
        else
            delete json.bufferView;
        if (this.id !== undefined)
            json.id = this.id;
        else
            delete json.id;
        return json;
    }
}
exports.SdtfPartialAccessor = SdtfPartialAccessor;
//# sourceMappingURL=SdtfPartialAccessor.js.map

/***/ }),

/***/ 90596:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialAsset = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialAsset extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        return Object.assign({}, this.additionalProperties);
    }
}
exports.SdtfPartialAsset = SdtfPartialAsset;
//# sourceMappingURL=SdtfPartialAsset.js.map

/***/ }),

/***/ 71023:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfAttribute = exports.SdtfPartialAttributes = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialAttributes extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.entries = {};
    }
    toJson() {
        const json = {};
        Object.entries(this.entries).forEach(([name, attribute]) => {
            json[name] = attribute.toJson();
        });
        return json;
    }
}
exports.SdtfPartialAttributes = SdtfPartialAttributes;
class SdtfAttribute extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    toJson() {
        const json = {};
        if (this.accessor !== undefined)
            json.accessor = this.accessor;
        if (this.typeHint !== undefined)
            json.typeHint = this.typeHint;
        if (this.value !== undefined)
            json.value = this.value;
        return json;
    }
}
exports.SdtfAttribute = SdtfAttribute;
//# sourceMappingURL=SdtfPartialAttributes.js.map

/***/ }),

/***/ 74260:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialBuffer = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialBuffer extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.byteLength !== undefined)
            json.byteLength = this.byteLength;
        else
            delete json.byteLength;
        if (this.uri !== undefined)
            json.uri = this.uri;
        delete json.uri;
        return json;
    }
}
exports.SdtfPartialBuffer = SdtfPartialBuffer;
//# sourceMappingURL=SdtfPartialBuffer.js.map

/***/ }),

/***/ 87885:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialBufferView = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialBufferView extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.buffer !== undefined)
            json.buffer = this.buffer;
        else
            delete json.buffer;
        if (this.byteLength !== undefined)
            json.byteLength = this.byteLength;
        else
            delete json.byteLength;
        if (this.byteOffset !== undefined)
            json.byteOffset = this.byteOffset;
        else
            delete json.byteOffset;
        if (this.contentEncoding !== undefined)
            json.contentEncoding = this.contentEncoding;
        else
            delete json.contentEncoding;
        if (this.contentType !== undefined)
            json.contentType = this.contentType;
        else
            delete json.contentType;
        if (this.name !== undefined)
            json.name = this.name;
        else
            delete json.name;
        return json;
    }
}
exports.SdtfPartialBufferView = SdtfPartialBufferView;
//# sourceMappingURL=SdtfPartialBufferView.js.map

/***/ }),

/***/ 26005:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialDataItem = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialDataItem extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.accessor !== undefined)
            json.accessor = this.accessor;
        else
            delete json.accessor;
        if (this.attributes !== undefined)
            json.attributes = this.attributes;
        else
            delete json.attributes;
        if (this.typeHint !== undefined)
            json.typeHint = this.typeHint;
        else
            delete json.typeHint;
        if (this.value !== undefined)
            json.value = this.value;
        else
            delete json.value;
        return json;
    }
}
exports.SdtfPartialDataItem = SdtfPartialDataItem;
//# sourceMappingURL=SdtfPartialDataItem.js.map

/***/ }),

/***/ 71272:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialFileInfo = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialFileInfo extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.copyright !== undefined)
            json.copyright = this.copyright;
        else
            delete json.copyright;
        if (this.generator !== undefined)
            json.generator = this.generator;
        else
            delete json.generator;
        if (this.version !== undefined)
            json.version = this.version;
        else
            delete json.version;
        return json;
    }
}
exports.SdtfPartialFileInfo = SdtfPartialFileInfo;
//# sourceMappingURL=SdtfPartialFileInfo.js.map

/***/ }),

/***/ 18706:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialNode = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialNode extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.items = [];
        this.nodes = [];
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.attributes !== undefined)
            json.attributes = this.attributes;
        else
            delete json.attributes;
        if (this.items.length > 0)
            json.items = this.items;
        else
            delete json.items;
        if (this.name !== undefined)
            json.name = this.name;
        else
            delete json.name;
        if (this.nodes.length > 0)
            json.nodes = this.nodes;
        else
            delete json.nodes;
        if (this.typeHint !== undefined)
            json.typeHint = this.typeHint;
        else
            delete json.typeHint;
        return json;
    }
}
exports.SdtfPartialNode = SdtfPartialNode;
//# sourceMappingURL=SdtfPartialNode.js.map

/***/ }),

/***/ 76579:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfPartialTypeHint = void 0;
const SdtfBasePartialComponent_1 = __webpack_require__(37042);
class SdtfPartialTypeHint extends SdtfBasePartialComponent_1.SdtfBasePartialComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    toJson() {
        const json = Object.assign({}, this.additionalProperties);
        if (this.name !== undefined)
            json.name = this.name;
        else
            delete json.name;
        return json;
    }
}
exports.SdtfPartialTypeHint = SdtfPartialTypeHint;
//# sourceMappingURL=SdtfPartialTypeHint.js.map

/***/ }),

/***/ 68039:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfFileUtils = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const path = __webpack_require__(19040);
const fs = __webpack_require__(89104);
class SdtfFileUtils {
    toAbsolutePath(relativePath) {
        try {
            return path.resolve(relativePath);
        }
        catch (e) {
            throw new sdk_sdtf_core_1.SdtfError(`Could not resolve path '${relativePath}': ${e.message}`);
        }
    }
    readFile(absolutePath) {
        if (!fs.existsSync(absolutePath)) {
            throw new sdk_sdtf_core_1.SdtfError(`Cannot find file at location '${absolutePath}'.`);
        }
        return new Promise((resolve, reject) => {
            fs.readFile(absolutePath, (error, buffer) => {
                if (error)
                    reject(error);
                const data = buffer.buffer.slice(buffer.byteOffset, buffer.byteOffset + buffer.byteLength);
                resolve(data);
            });
        });
    }
}
exports.SdtfFileUtils = SdtfFileUtils;
//# sourceMappingURL=SdtfFileUtils.js.map

/***/ }),

/***/ 3069:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.userComponentToDataObject = userComponentToDataObject;
exports.createComponentId = createComponentId;
const sdk_sdtf_core_1 = __webpack_require__(72187);
function userComponentToDataObject(o) {
    const additionalProperties = Object.keys(o).filter((prop) => prop === 'additionalProperties');
    const dataObject = (0, sdk_sdtf_core_1.isDataObject)(additionalProperties)
        ? additionalProperties
        : {};
    Object.entries(o)
        .filter(([key, _]) => key !== 'componentId' && key !== 'additionalProperties' && key !== 'data')
        .forEach(([key, value]) => (dataObject[key] = value));
    return dataObject;
}
function createComponentId() {
    return Math.random().toString(36).substring(2, 9);
}
//# sourceMappingURL=SdtfUtils.js.map

/***/ }),

/***/ 40131:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfComponentValidator = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
class SdtfComponentValidator {
    constructor(componentList) {
        this.componentList = componentList;
    }
    validateAccessor(accessor) {
        if (!(0, sdk_sdtf_core_1.isUint)(accessor.bufferView))
            throw new sdk_sdtf_core_1.SdtfError("Invalid accessor: Required property 'bufferView' must be an unsigned integer.");
        if (accessor.bufferView >= this.componentList.bufferViews.length)
            throw new sdk_sdtf_core_1.SdtfError('Invalid accessor: Buffer view index is out of range.');
    }
    validateAsset(asset) {
        if (!(0, sdk_sdtf_core_1.isUint)(asset.fileInfo))
            throw new sdk_sdtf_core_1.SdtfError("Invalid asset: Required property 'fileInfo' must be an unsigned integer.");
        if (asset.fileInfo !== 0)
            throw new sdk_sdtf_core_1.SdtfError('Invalid asset: Type hint index is out of range.');
    }
    validateAttributes(attributes) {
        if (!attributes.entries)
            throw new sdk_sdtf_core_1.SdtfError("Invalid attributes: Required property 'entries' must be a string-keyed object.");
        Object.values(attributes.entries).forEach((attribute) => {
            if (!(0, sdk_sdtf_core_1.isUint)(attribute.typeHint))
                throw new sdk_sdtf_core_1.SdtfError("Invalid attribute: Required property 'typeHint' must be an unsigned integer.");
            if (attribute.accessor && !(0, sdk_sdtf_core_1.isUint)(attribute.accessor))
                throw new sdk_sdtf_core_1.SdtfError("Invalid attribute: Optional property 'accessor' must be an unsigned integer.");
            if (attribute.accessor && attribute.accessor >= this.componentList.accessors.length)
                throw new sdk_sdtf_core_1.SdtfError('Invalid attribute: Accessor index is out of range.');
            if (attribute.typeHint && attribute.typeHint >= this.componentList.typeHints.length)
                throw new sdk_sdtf_core_1.SdtfError('Invalid attribute: Type hint index is out of range.');
        });
    }
    validateBuffer(buffer) {
        if (!(0, sdk_sdtf_core_1.isUint)(buffer.byteLength))
            throw new sdk_sdtf_core_1.SdtfError("Invalid buffer: Required property 'byteLength' must be an unsigned integer.");
    }
    validateBufferView(bufferView) {
        if (!(0, sdk_sdtf_core_1.isUint)(bufferView.buffer))
            throw new sdk_sdtf_core_1.SdtfError("Invalid buffer view: Required property 'buffer' must be an unsigned integer.");
        if (!(0, sdk_sdtf_core_1.isUint)(bufferView.byteLength))
            throw new sdk_sdtf_core_1.SdtfError("Invalid buffer view: Required property 'byteLength' must be an unsigned integer.");
        if (!(0, sdk_sdtf_core_1.isUint)(bufferView.byteOffset))
            throw new sdk_sdtf_core_1.SdtfError("Invalid buffer view: Required property 'byteOffset' must be an unsigned integer.");
        if (!(0, sdk_sdtf_core_1.isNonEmptyString)(bufferView.contentType))
            throw new sdk_sdtf_core_1.SdtfError("Invalid buffer view: Required property 'contentType' must be a non-empty string.");
        if (bufferView.buffer >= this.componentList.buffers.length)
            throw new sdk_sdtf_core_1.SdtfError('Invalid buffer view: Buffer index is out of range.');
    }
    validateChunk(chunk) {
        try {
            this.validateChunkOrNode(chunk);
        }
        catch (e) {
            throw new sdk_sdtf_core_1.SdtfError(`Invalid chunk: ${e.message}`);
        }
        if (typeof chunk.name !== 'string')
            throw new sdk_sdtf_core_1.SdtfError("Invalid chunk: Required property 'name' must be a string.");
    }
    validateDataItem(dataItem) {
        if (!(0, sdk_sdtf_core_1.isUint)(dataItem.typeHint))
            throw new sdk_sdtf_core_1.SdtfError("Invalid item: Required property 'typeHint' must be an unsigned integer.");
        if (dataItem.accessor && !(0, sdk_sdtf_core_1.isUint)(dataItem.accessor))
            throw new sdk_sdtf_core_1.SdtfError("Invalid item: Optional property 'accessor' must be an unsigned integer.");
        if (dataItem.attributes && !(0, sdk_sdtf_core_1.isUint)(dataItem.attributes))
            throw new sdk_sdtf_core_1.SdtfError("Invalid item: Optional property 'attributes' must be an unsigned integer.");
        if (dataItem.accessor && dataItem.accessor >= this.componentList.accessors.length)
            throw new sdk_sdtf_core_1.SdtfError('Invalid item: Accessor index is out of range.');
        if (dataItem.attributes && dataItem.attributes >= this.componentList.attributes.length)
            throw new sdk_sdtf_core_1.SdtfError('Invalid item: Attributes index is out of range.');
        if (dataItem.typeHint && dataItem.typeHint >= this.componentList.typeHints.length)
            throw new sdk_sdtf_core_1.SdtfError('Invalid item: Type hint index is out of range.');
    }
    validateFileInfo(fileInfo) {
        if (!(0, sdk_sdtf_core_1.isNonEmptyString)(fileInfo.version))
            throw new sdk_sdtf_core_1.SdtfError("Invalid file info: Required property 'version' must be a non-empty string.");
    }
    validateNode(node) {
        try {
            this.validateChunkOrNode(node);
        }
        catch (e) {
            throw new sdk_sdtf_core_1.SdtfError(`Invalid node: ${e.message}`);
        }
    }
    validateTypeHint(typeHint) {
        if (!(0, sdk_sdtf_core_1.isNonEmptyString)(typeHint.name))
            throw new sdk_sdtf_core_1.SdtfError("Invalid type hint: Required property 'name' must be a non-empty string.");
    }
    validateChunkOrNode(chunkOrNode) {
        if (chunkOrNode.attributes && !(0, sdk_sdtf_core_1.isUint)(chunkOrNode.attributes))
            throw new sdk_sdtf_core_1.SdtfError("Optional property 'attributes' must be an unsigned integer.");
        if (!(0, sdk_sdtf_core_1.isUintArray)(chunkOrNode.items))
            throw new sdk_sdtf_core_1.SdtfError("Required property 'items' must be an array of unsigned integers.");
        if (!(0, sdk_sdtf_core_1.isUintArray)(chunkOrNode.nodes))
            throw new sdk_sdtf_core_1.SdtfError("Required property 'nodes' must be an array of unsigned integers.");
        if (chunkOrNode.typeHint && !(0, sdk_sdtf_core_1.isUint)(chunkOrNode.typeHint))
            throw new sdk_sdtf_core_1.SdtfError("Optional property 'typeHint' must be an unsigned integer.");
        if (chunkOrNode.attributes &&
            chunkOrNode.attributes >= this.componentList.attributes.length)
            throw new sdk_sdtf_core_1.SdtfError('Attributes index is out of range.');
        chunkOrNode.items.forEach((itemIndex) => {
            if (itemIndex >= this.componentList.items.length)
                throw new sdk_sdtf_core_1.SdtfError(`Node index '${itemIndex}' is out of range.`);
        });
        chunkOrNode.nodes.forEach((nodeIndex) => {
            if (nodeIndex >= this.componentList.nodes.length)
                throw new sdk_sdtf_core_1.SdtfError(`Node index '${nodeIndex}' is out of range.`);
        });
        if (chunkOrNode.typeHint && chunkOrNode.typeHint >= this.componentList.typeHints.length)
            throw new sdk_sdtf_core_1.SdtfError('Type hint index is out of range.');
        if (!chunkOrNode.nodes.every((nodePos) => this.componentList.nodes[nodePos].componentId !== chunkOrNode.componentId))
            throw new sdk_sdtf_core_1.SdtfError("Node is referencing itself in the 'nodes' property.");
    }
}
exports.SdtfComponentValidator = SdtfComponentValidator;
//# sourceMappingURL=SdtfComponentValidator.js.map

/***/ }),

/***/ 22957:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.writeableComponentListFromAsset = writeableComponentListFromAsset;
function writeableComponentListFromAsset(asset) {
    const addToList = (component, array) => {
        if (!component)
            return;
        if (array.findIndex((c) => c.componentId === component.componentId) === -1)
            array.push(component);
    };
    const list = {
        accessors: [],
        asset: asset,
        attributes: [],
        buffers: [],
        bufferViews: [],
        chunks: asset.chunks,
        items: [],
        nodes: [],
        typeHints: [],
        fileInfo: asset.fileInfo,
    };
    list.chunks.forEach((chunk) => {
        addToList(chunk.attributes, list.attributes);
        chunk.items.forEach((item) => addToList(item, list.items));
        chunk.nodes.forEach((node) => addToList(node, list.nodes));
        addToList(chunk.typeHint, list.typeHints);
    });
    list.nodes.forEach((nodes) => {
        addToList(nodes.attributes, list.attributes);
        nodes.items.forEach((item) => addToList(item, list.items));
        nodes.nodes.forEach((node) => addToList(node, list.nodes));
        addToList(nodes.typeHint, list.typeHints);
    });
    list.items.forEach((item) => {
        addToList(item.accessor, list.accessors);
        addToList(item.attributes, list.attributes);
        addToList(item.typeHint, list.typeHints);
    });
    list.attributes.forEach((attributes) => {
        Object.values(attributes.entries).forEach((attribute) => {
            addToList(attribute.accessor, list.accessors);
            addToList(attribute.typeHint, list.typeHints);
        });
    });
    list.accessors.forEach((accessor) => addToList(accessor.bufferView, list.bufferViews));
    list.bufferViews.forEach((bufferView) => addToList(bufferView.buffer, list.buffers));
    return list;
}
//# sourceMappingURL=ISdtfWriteableComponentList.js.map

/***/ }),

/***/ 68622:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfConstructor = void 0;
const SdtfBinarySdtf_1 = __webpack_require__(41032);
const SdtfComponentFactoryWrapper_1 = __webpack_require__(23818);
const SdtfWriteableComponentFactory_1 = __webpack_require__(79070);
const SdtfWriteableComponentPostProcessor_1 = __webpack_require__(12130);
const SdtfWriter_1 = __webpack_require__(35303);
class SdtfConstructor {
    constructor(integration) {
        this.binarySdtf = new SdtfBinarySdtf_1.SdtfBinarySdtf();
        this.factory = new SdtfComponentFactoryWrapper_1.SdtfComponentFactoryWrapper();
        this.postProcessor = new SdtfWriteableComponentPostProcessor_1.SdtfWriteableComponentPostProcessor(integration);
    }
    createBinarySdtf(asset) {
        const writeableList = this.postProcessor.optimize(asset);
        const componentList = this.factory.createFromWriteable(writeableList);
        return this.binarySdtf.constructBinarySdtf(componentList);
    }
    getFactory() {
        return new SdtfWriteableComponentFactory_1.SdtfWriteableComponentFactory();
    }
    getWriter() {
        return new SdtfWriter_1.SdtfWriter(this.getFactory());
    }
}
exports.SdtfConstructor = SdtfConstructor;
//# sourceMappingURL=SdtfConstructor.js.map

/***/ }),

/***/ 79070:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableComponentFactory = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfWriteableAccessor_1 = __webpack_require__(91613);
const SdtfWriteableAsset_1 = __webpack_require__(15032);
const SdtfWriteableAttributes_1 = __webpack_require__(48451);
const SdtfWriteableBuffer_1 = __webpack_require__(28432);
const SdtfWriteableBufferView_1 = __webpack_require__(23249);
const SdtfWriteableChunk_1 = __webpack_require__(82781);
const SdtfWriteableDataItem_1 = __webpack_require__(790);
const SdtfWriteableFileInfo_1 = __webpack_require__(97556);
const SdtfWriteableNode_1 = __webpack_require__(59198);
const SdtfWriteableTypeHint_1 = __webpack_require__(39199);
class SdtfWriteableComponentFactory {
    constructor() {
        this.ASSET_VERSION = '1.0';
        this.ASSET_GENERATOR = 'ShapeDiverSdtfWriter';
    }
    createAccessor(content) {
        const accessor = new SdtfWriteableAccessor_1.SdtfWriteableAccessor();
        if (content)
            accessor.bufferView = this.createBufferView(content);
        return accessor;
    }
    createAsset() {
        const fileInfo = new SdtfWriteableFileInfo_1.SdtfWriteableFileInfo(this.ASSET_VERSION);
        fileInfo.generator = this.ASSET_GENERATOR;
        return new SdtfWriteableAsset_1.SdtfWriteableAsset(fileInfo);
    }
    createAttribute(content, typeHint) {
        const attribute = new SdtfWriteableAttributes_1.SdtfWriteableAttribute();
        if (content) {
            if (this.isBufferContent(content))
                attribute.accessor = this.createAccessor(content);
            else
                attribute.value = content;
        }
        if (typeHint !== undefined)
            attribute.typeHint = this.createTypeHint(typeHint);
        return attribute;
    }
    createAttributes(content) {
        const attributes = new SdtfWriteableAttributes_1.SdtfWriteableAttributes();
        Object.entries(content !== null && content !== void 0 ? content : {}).forEach(([name, attr]) => (attributes.entries[name] = this.createAttribute(...attr)));
        return attributes;
    }
    createBuffer(data) {
        const buffer = new SdtfWriteableBuffer_1.SdtfWriteableBuffer();
        buffer.data = data;
        return buffer;
    }
    createBufferView(content) {
        const bufferView = new SdtfWriteableBufferView_1.SdtfWriteableBufferView();
        if (content) {
            bufferView.buffer = this.createBuffer(content.data);
            bufferView.contentType = content.contentType;
        }
        return bufferView;
    }
    createChunk(name) {
        const chunk = new SdtfWriteableChunk_1.SdtfWriteableChunk();
        chunk.name = name;
        return chunk;
    }
    createDataItem(content, typeHint) {
        const dataItem = new SdtfWriteableDataItem_1.SdtfWriteableDataItem();
        if (content) {
            if (this.isBufferContent(content))
                dataItem.accessor = this.createAccessor(content);
            else
                dataItem.value = content;
        }
        if (typeHint !== undefined)
            dataItem.typeHint = this.createTypeHint(typeHint);
        return dataItem;
    }
    createNode() {
        return new SdtfWriteableNode_1.SdtfWriteableNode();
    }
    createTypeHint(name) {
        const typeHint = new SdtfWriteableTypeHint_1.SdtfWriteableTypeHint();
        typeHint.name = name;
        return typeHint;
    }
    isBufferContent(content) {
        return !!((0, sdk_sdtf_core_1.isDataObject)(content) && content.data && content.contentType);
    }
}
exports.SdtfWriteableComponentFactory = SdtfWriteableComponentFactory;
//# sourceMappingURL=SdtfWriteableComponentFactory.js.map

/***/ }),

/***/ 12130:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableComponentPostProcessor = void 0;
const SdtfWriteableAsset_1 = __webpack_require__(15032);
const SdtfWriteableBuffer_1 = __webpack_require__(28432);
const ISdtfWriteableComponentList_1 = __webpack_require__(22957);
const SdtfWriteableComponentFactory_1 = __webpack_require__(79070);
class SdtfWriteableComponentPostProcessor {
    constructor(integrations) {
        this.integrations = integrations;
        this.factory = new SdtfWriteableComponentFactory_1.SdtfWriteableComponentFactory();
    }
    optimize(asset) {
        const clonedAsset = SdtfWriteableAsset_1.SdtfWriteableAsset.clone(asset);
        let componentList = (0, ISdtfWriteableComponentList_1.writeableComponentListFromAsset)(clonedAsset);
        this.processDataComponents(componentList.attributes.flatMap((a) => Object.values(a.entries)));
        this.processDataComponents(componentList.items);
        this.postProcessDataComponents([
            ...componentList.attributes.flatMap((a) => Object.values(a.entries)),
            ...componentList.items,
        ]);
        componentList = (0, ISdtfWriteableComponentList_1.writeableComponentListFromAsset)(clonedAsset);
        this.complementTypeHints(componentList);
        this.removeDuplicatedTypeHints(componentList);
        this.resolveBuffers(componentList);
        return componentList;
    }
    processDataComponents(components) {
        components.forEach((component) => {
            const integration = this.integrations.find((i) => { var _a, _b; return i.isTypeHintSupported((_b = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ''); });
            if (!integration)
                return;
            integration.getWriter(this.factory).writeComponent(component);
        });
    }
    postProcessDataComponents(components) {
        this.integrations.forEach((integration) => {
            const supportedComponents = components.filter((component) => { var _a, _b; return integration.isTypeHintSupported((_b = (_a = component.typeHint) === null || _a === void 0 ? void 0 : _a.name) !== null && _b !== void 0 ? _b : ''); });
            if (supportedComponents.length === 0)
                return;
            integration.getWriter(this.factory).postProcessComponents(supportedComponents);
        });
    }
    complementTypeHints(componentList) {
        const complement = (base, list) => {
            var _a, _b;
            if (((_a = base.typeHint) === null || _a === void 0 ? void 0 : _a.name) !== undefined)
                return;
            if (list.length === 0)
                return;
            let typeHintName = (_b = list[0].typeHint) === null || _b === void 0 ? void 0 : _b.name;
            if (typeHintName === undefined)
                return;
            if (list.every((i) => { var _a; return ((_a = i.typeHint) === null || _a === void 0 ? void 0 : _a.name) === typeHintName; })) {
                base.typeHint = this.factory.createTypeHint(typeHintName);
                componentList.typeHints.push(base.typeHint);
            }
        };
        componentList.nodes.forEach((node) => complement(node, node.items));
        componentList.chunks.forEach((chunk) => complement(chunk, chunk.nodes));
    }
    removeDuplicatedTypeHints(componentList) {
        const uniqueTypeHints = [];
        componentList.typeHints.forEach((typeHint) => {
            if (!uniqueTypeHints.find(this.areTypeHintsSimilar.bind(this, typeHint)))
                uniqueTypeHints.push(typeHint);
        });
        const replaceTypeHints = (component) => {
            if (!component.typeHint ||
                uniqueTypeHints.find((typeHint) => typeHint.componentId === component.typeHint.componentId))
                return;
            component.typeHint = uniqueTypeHints.find((typeHint) => this.areTypeHintsSimilar(typeHint, component.typeHint));
        };
        componentList.attributes.forEach((a) => Object.values(a.entries).forEach((e) => replaceTypeHints(e)));
        componentList.chunks.forEach((c) => replaceTypeHints(c));
        componentList.items.forEach((i) => replaceTypeHints(i));
        componentList.nodes.forEach((n) => replaceTypeHints(n));
        componentList.typeHints = Object.values(uniqueTypeHints);
    }
    areTypeHintsSimilar(t1, t2) {
        var _a, _b;
        const nAdditionalPropertiesT1 = Object.entries((_a = t1.additionalProperties) !== null && _a !== void 0 ? _a : {}), nAdditionalPropertiesT2 = Object.entries((_b = t2.additionalProperties) !== null && _b !== void 0 ? _b : {});
        if (t1.name !== t2.name ||
            nAdditionalPropertiesT1.length !== nAdditionalPropertiesT2.length)
            return false;
        for (let i = 0; i < nAdditionalPropertiesT1.length; i++) {
            const [key, value] = nAdditionalPropertiesT1[i];
            if (t2.additionalProperties[key] !== value)
                return false;
        }
        return true;
    }
    resolveBuffers(componentList) {
        const bufferViewsPerUri = {};
        componentList.bufferViews.forEach((bufferView) => {
            var _a;
            if (!bufferView.buffer)
                return;
            const uri = (_a = bufferView.buffer.uri) !== null && _a !== void 0 ? _a : '';
            if (!bufferViewsPerUri[uri])
                bufferViewsPerUri[uri] = [];
            bufferViewsPerUri[uri].push(bufferView);
        });
        const mergedBuffers = [];
        Object.entries(bufferViewsPerUri).forEach(([uri, bufferViews]) => {
            const [mergedBuffer, offsets] = this.mergeBuffers(uri, bufferViews.map((bv) => bv.buffer));
            bufferViews.forEach((bufferView, i) => {
                var _a;
                bufferView.byteOffset = offsets[i];
                bufferView.byteLength = (_a = bufferView.buffer.data.byteLength) !== null && _a !== void 0 ? _a : 0;
                bufferView.buffer = mergedBuffer;
            });
            mergedBuffers.push(mergedBuffer);
        });
        componentList.buffers = mergedBuffers;
    }
    mergeBuffers(uri, buffers) {
        const merged = new SdtfWriteableBuffer_1.SdtfWriteableBuffer();
        merged.uri = uri;
        merged.additionalProperties = {};
        Object.assign(merged.additionalProperties, ...buffers.map((b) => b.additionalProperties));
        const [mergedData, offsetsPerBuffer] = this.mergeBufferData(buffers);
        merged.byteLength = mergedData.byteLength;
        merged.data = mergedData;
        return [merged, offsetsPerBuffer];
    }
    mergeBufferData(buffers) {
        var _a, _b;
        const roundToNextMultipleOfFour = (value) => {
            const diff = value % 4;
            return diff === 0 ? value : value + 4 - diff;
        };
        let offsets = [0], lastBufferLength = (_b = (_a = buffers[0].data) === null || _a === void 0 ? void 0 : _a.byteLength) !== null && _b !== void 0 ? _b : 0;
        if (buffers.length > 0) {
            lastBufferLength = roundToNextMultipleOfFour(lastBufferLength);
            for (let i = 1; i < buffers.length; i++) {
                let bufferLength = 0;
                const data = buffers[i].data;
                if (data) {
                    if (i === buffers.length - 1)
                        bufferLength = data.byteLength;
                    else
                        bufferLength = roundToNextMultipleOfFour(data.byteLength);
                }
                offsets.push(offsets[i - 1] + lastBufferLength);
                lastBufferLength = bufferLength;
            }
        }
        const merged = new Uint8Array(offsets[offsets.length - 1] + lastBufferLength);
        buffers.forEach((buffer, i) => {
            const data = buffer.data ? new Uint8Array(buffer.data) : new Uint8Array(0);
            merged.set(data, offsets[i]);
        });
        return [merged, offsets];
    }
}
exports.SdtfWriteableComponentPostProcessor = SdtfWriteableComponentPostProcessor;
//# sourceMappingURL=SdtfWriteableComponentPostProcessor.js.map

/***/ }),

/***/ 35303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriter = void 0;
const SdtfGrasshopperSdtfBuilder_1 = __webpack_require__(49676);
class SdtfWriter {
    constructor(factory) {
        this.factory = factory;
    }
    createSimpleDataSdtf(chunkName, data) {
        const mapAttributesData = (attr) => {
            const res = {};
            attr.forEach((data) => (res[data.name] = [data.content, data.typeHint]));
            return res;
        };
        const chunk = this.factory.createChunk(chunkName);
        data.forEach((d) => {
            const dataItem = this.factory.createDataItem(d.content, d.typeHint);
            if (d.attributes)
                dataItem.attributes = this.factory.createAttributes(mapAttributesData(d.attributes));
            chunk.items.push(dataItem);
        });
        const asset = this.factory.createAsset();
        asset.chunks.push(chunk);
        return asset;
    }
    createGrasshopperSdtfBuilder() {
        return new SdtfGrasshopperSdtfBuilder_1.SdtfGrasshopperSdtfBuilder(this.factory);
    }
}
exports.SdtfWriter = SdtfWriter;
//# sourceMappingURL=SdtfWriter.js.map

/***/ }),

/***/ 95635:
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
//# sourceMappingURL=ISdtfGrasshopperSdtfBuilder.js.map

/***/ }),

/***/ 49676:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfGrasshopperSdtfBuilder = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
class SdtfGrasshopperSdtfBuilder {
    constructor(factory) {
        this.factory = factory;
        this.asset = factory.createAsset();
    }
    addChunkForListData(parameterId, list, chunkAttributes) {
        this.addChunkForTreeData(parameterId, { branches: [list], paths: [[0]] }, chunkAttributes);
    }
    addChunkForTreeData(parameterId, tree, chunkAttributes) {
        const chunk = this.factory.createChunk(parameterId);
        this.asset.chunks.push(chunk);
        if (chunkAttributes)
            chunk.attributes = chunkAttributes;
        if (tree.branches.length !== tree.paths.length)
            throw new sdk_sdtf_core_1.SdtfError("Invalid tree parameter: 'branches' and 'paths' of the grasshopper structure must have the same number of elements.");
        if (!tree.paths.every((path) => (0, sdk_sdtf_core_1.isIntArray)(path)))
            throw new sdk_sdtf_core_1.SdtfError("Invalid tree parameter: 'paths' of the grasshopper structure must only consist of integer values.");
        if (!tree.branches.every((branch) => branch.every((item) => { var _a; return !!((_a = item.typeHint) === null || _a === void 0 ? void 0 : _a.name); })))
            throw new sdk_sdtf_core_1.SdtfError("Invalid tree parameter: All data items in 'tree.branches' must contain a type hint.");
        let typeHint;
        for (let i = 0; i < tree.branches.length; i++) {
            const branch = tree.branches[i], path = tree.paths[i];
            const node = this.factory.createNode();
            node.name = '[' + path.join(',') + ']';
            branch.forEach((item) => {
                if (!typeHint)
                    typeHint = item.typeHint.name;
                if (typeHint !== item.typeHint.name)
                    throw new sdk_sdtf_core_1.SdtfError("Invalid tree parameter: All data items in 'tree.branches' must have the same type hint.");
                node.items.push(item);
            });
            chunk.nodes.push(node);
        }
    }
    build() {
        return this.asset;
    }
}
exports.SdtfGrasshopperSdtfBuilder = SdtfGrasshopperSdtfBuilder;
//# sourceMappingURL=SdtfGrasshopperSdtfBuilder.js.map

/***/ }),

/***/ 99078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfBaseWriteableComponent = void 0;
const SdtfUtils_1 = __webpack_require__(3069);
class SdtfBaseWriteableComponent {
    constructor() {
        this.componentId = (0, SdtfUtils_1.createComponentId)();
    }
    toDataObject() {
        return (0, SdtfUtils_1.userComponentToDataObject)(this);
    }
}
exports.SdtfBaseWriteableComponent = SdtfBaseWriteableComponent;
//# sourceMappingURL=SdtfBaseWriteableComponent.js.map

/***/ }),

/***/ 91613:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableAccessor = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
const SdtfWriteableBufferView_1 = __webpack_require__(23249);
class SdtfWriteableAccessor extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    static clone(original) {
        const clone = new SdtfWriteableAccessor();
        if (original.bufferView)
            clone.bufferView = SdtfWriteableBufferView_1.SdtfWriteableBufferView.clone(original.bufferView);
        clone.id = original.id;
        clone.additionalProperties = Object.assign({}, original.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableAccessor = SdtfWriteableAccessor;
//# sourceMappingURL=SdtfWriteableAccessor.js.map

/***/ }),

/***/ 15032:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableAsset = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
const SdtfWriteableChunk_1 = __webpack_require__(82781);
const SdtfWriteableFileInfo_1 = __webpack_require__(97556);
class SdtfWriteableAsset extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor(fileInfo) {
        super();
        this.fileInfo = fileInfo;
        this.chunks = [];
        this.additionalProperties = {};
    }
    static clone(original) {
        const fileInfoClone = SdtfWriteableFileInfo_1.SdtfWriteableFileInfo.clone(original.fileInfo);
        const clone = new SdtfWriteableAsset(fileInfoClone);
        clone.chunks = original.chunks.map((c) => SdtfWriteableChunk_1.SdtfWriteableChunk.clone(c));
        clone.additionalProperties = Object.assign({}, original.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableAsset = SdtfWriteableAsset;
//# sourceMappingURL=SdtfWriteableAsset.js.map

/***/ }),

/***/ 48451:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableAttribute = exports.SdtfWriteableAttributes = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
const SdtfWriteableAccessor_1 = __webpack_require__(91613);
const SdtfWriteableTypeHint_1 = __webpack_require__(39199);
class SdtfWriteableAttributes extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.entries = {};
    }
    toDataObject() {
        return this.entries;
    }
    static clone(original) {
        const clone = new SdtfWriteableAttributes();
        clone.entries = {};
        Object.entries(original.entries).forEach(([name, attribute]) => (clone.entries[name] = SdtfWriteableAttribute.clone(attribute)));
        return clone;
    }
}
exports.SdtfWriteableAttributes = SdtfWriteableAttributes;
class SdtfWriteableAttribute {
    static clone(original) {
        const clone = new SdtfWriteableAttribute();
        if (original.accessor)
            clone.accessor = SdtfWriteableAccessor_1.SdtfWriteableAccessor.clone(original.accessor);
        if (original.typeHint)
            clone.typeHint = SdtfWriteableTypeHint_1.SdtfWriteableTypeHint.clone(original.typeHint);
        clone.value = (0, sdk_sdtf_core_1.tryDeepCopy)(original.value);
        return clone;
    }
}
exports.SdtfWriteableAttribute = SdtfWriteableAttribute;
//# sourceMappingURL=SdtfWriteableAttributes.js.map

/***/ }),

/***/ 28432:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableBuffer = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
class SdtfWriteableBuffer extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    static clone(orig) {
        const clone = new SdtfWriteableBuffer();
        clone.byteLength = orig.byteLength;
        clone.data = orig.data;
        clone.uri = orig.uri;
        clone.additionalProperties = Object.assign({}, orig.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableBuffer = SdtfWriteableBuffer;
//# sourceMappingURL=SdtfWriteableBuffer.js.map

/***/ }),

/***/ 23249:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableBufferView = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
const SdtfWriteableBuffer_1 = __webpack_require__(28432);
class SdtfWriteableBufferView extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    static clone(orig) {
        const clone = new SdtfWriteableBufferView();
        if (orig.buffer)
            clone.buffer = SdtfWriteableBuffer_1.SdtfWriteableBuffer.clone(orig.buffer);
        clone.byteLength = orig.byteLength;
        clone.byteOffset = orig.byteOffset;
        clone.contentEncoding = orig.contentEncoding;
        clone.contentType = orig.contentType;
        clone.name = orig.name;
        clone.additionalProperties = Object.assign({}, orig.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableBufferView = SdtfWriteableBufferView;
//# sourceMappingURL=SdtfWriteableBufferView.js.map

/***/ }),

/***/ 82781:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableChunk = void 0;
const SdtfWriteableNode_1 = __webpack_require__(59198);
class SdtfWriteableChunk extends SdtfWriteableNode_1.SdtfWriteableNode {
    static clone(original) {
        return SdtfWriteableNode_1.SdtfWriteableNode.clone(original);
    }
}
exports.SdtfWriteableChunk = SdtfWriteableChunk;
//# sourceMappingURL=SdtfWriteableChunk.js.map

/***/ }),

/***/ 790:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableDataItem = void 0;
const sdk_sdtf_core_1 = __webpack_require__(72187);
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
const SdtfWriteableAccessor_1 = __webpack_require__(91613);
const SdtfWriteableAttributes_1 = __webpack_require__(48451);
const SdtfWriteableTypeHint_1 = __webpack_require__(39199);
class SdtfWriteableDataItem extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    static clone(original) {
        const clone = new SdtfWriteableDataItem();
        if (original.accessor)
            clone.accessor = SdtfWriteableAccessor_1.SdtfWriteableAccessor.clone(original.accessor);
        if (original.attributes)
            clone.attributes = SdtfWriteableAttributes_1.SdtfWriteableAttributes.clone(original.attributes);
        if (original.typeHint)
            clone.typeHint = SdtfWriteableTypeHint_1.SdtfWriteableTypeHint.clone(original.typeHint);
        clone.value = (0, sdk_sdtf_core_1.tryDeepCopy)(original.value);
        clone.additionalProperties = Object.assign({}, original.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableDataItem = SdtfWriteableDataItem;
//# sourceMappingURL=SdtfWriteableDataItem.js.map

/***/ }),

/***/ 97556:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableFileInfo = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
class SdtfWriteableFileInfo extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor(version) {
        super();
        this.version = version;
        this.additionalProperties = {};
    }
    static clone(original) {
        const clone = new SdtfWriteableFileInfo(original.version);
        clone.copyright = original.copyright;
        clone.generator = original.generator;
        clone.additionalProperties = Object.assign({}, original.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableFileInfo = SdtfWriteableFileInfo;
//# sourceMappingURL=SdtfWriteableFileInfo.js.map

/***/ }),

/***/ 59198:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableNode = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
const SdtfWriteableAttributes_1 = __webpack_require__(48451);
const SdtfWriteableDataItem_1 = __webpack_require__(790);
const SdtfWriteableTypeHint_1 = __webpack_require__(39199);
class SdtfWriteableNode extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.items = [];
        this.nodes = [];
        this.additionalProperties = {};
    }
    static clone(original) {
        const clone = new SdtfWriteableNode();
        if (original.attributes)
            clone.attributes = SdtfWriteableAttributes_1.SdtfWriteableAttributes.clone(original.attributes);
        clone.items = original.items.map((i) => SdtfWriteableDataItem_1.SdtfWriteableDataItem.clone(i));
        clone.name = original.name;
        clone.nodes = original.nodes.map((n) => this.clone(n));
        if (original.typeHint)
            clone.typeHint = SdtfWriteableTypeHint_1.SdtfWriteableTypeHint.clone(original.typeHint);
        clone.additionalProperties = Object.assign({}, original.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableNode = SdtfWriteableNode;
//# sourceMappingURL=SdtfWriteableNode.js.map

/***/ }),

/***/ 39199:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SdtfWriteableTypeHint = void 0;
const SdtfBaseWriteableComponent_1 = __webpack_require__(99078);
class SdtfWriteableTypeHint extends SdtfBaseWriteableComponent_1.SdtfBaseWriteableComponent {
    constructor() {
        super(...arguments);
        this.additionalProperties = {};
    }
    static clone(orig) {
        const clone = new SdtfWriteableTypeHint();
        clone.name = orig.name;
        clone.additionalProperties = Object.assign({}, orig.additionalProperties);
        return clone;
    }
}
exports.SdtfWriteableTypeHint = SdtfWriteableTypeHint;
//# sourceMappingURL=SdtfWriteableTypeHint.js.map

/***/ })

}]);
//# sourceMappingURL=vendors-3b376589.bundle.js.map