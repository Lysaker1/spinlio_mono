// This is a compatibility shim for zustand to work with @react-three/fiber
const actualCreate = require('zustand');

// Export the create function as both named and default export
module.exports = actualCreate;
module.exports.default = actualCreate;
module.exports.create = actualCreate;

// Add additional exports if needed by fiber
try {
  // Vanilla implementation
  const vanillaModule = require('zustand/vanilla');
  if (vanillaModule) {
    module.exports.createStore = vanillaModule.createStore;
  }
  
  // React implementation
  const reactModule = require('zustand/react');
  if (reactModule) {
    module.exports.useStore = reactModule.useStore;
  }
  
  // Middleware
  const middlewareModule = require('zustand/middleware');
  if (middlewareModule) {
    module.exports.middleware = {
      persist: middlewareModule.persist,
      devtools: middlewareModule.devtools,
      subscribeWithSelector: middlewareModule.subscribeWithSelector,
      combine: middlewareModule.combine
    };
  }
  
  // Shallow
  const shallowModule = require('zustand/shallow');
  if (shallowModule) {
    module.exports.shallow = shallowModule;
  }
} catch (e) {
  console.warn('Zustand shim: Could not load all zustand modules', e);
} 