// This is a compatibility shim for zustand to work with @react-three/fiber
const actualCreate = require('../../node_modules/zustand/vanilla').default;
const vanillaModule = require('../../node_modules/zustand/vanilla');
const reactModule = require('../../node_modules/zustand/react');

// Create middleware module export
const middlewareModule = {
  persist: require('../../node_modules/zustand/middleware').persist,
  devtools: require('../../node_modules/zustand/middleware').devtools,
  subscribeWithSelector: require('../../node_modules/zustand/middleware').subscribeWithSelector,
  combine: require('../../node_modules/zustand/middleware').combine
};

// Create shallow export
const shallowModule = require('../../node_modules/zustand/shallow');

// Export the create function as both named and default export
module.exports = actualCreate;
module.exports.default = actualCreate;
module.exports.create = actualCreate;
module.exports.createStore = vanillaModule.createStore;
module.exports.useStore = reactModule.useStore; 
module.exports.middleware = middlewareModule;
module.exports.shallow = shallowModule && typeof shallowModule === 'function' ? shallowModule : function() {}; 