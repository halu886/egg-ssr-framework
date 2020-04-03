module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/web/views/test/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/web/views/test/index.js":
/*!*************************************!*\
  !*** ./app/web/views/test/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js):\nError: Cannot find module '@babel/core'\nRequire stack:\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/loader-runner/lib/loadLoader.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/loader-runner/lib/LoaderRunner.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/webpack/lib/NormalModule.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/webpack/lib/NormalModuleFactory.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/webpack/lib/Compiler.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/webpack/lib/webpack.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/app/lib/tujiWebpack.js\n- /Users/halu886/Applications/halu886/project/egg-webpack-tuji/app/extend/application.js\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_egg-core@4.17.4@egg-core/lib/utils/index.js\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_egg-core@4.17.4@egg-core/lib/egg.js\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_egg-core@4.17.4@egg-core/index.js\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_egg@2.26.0@egg/lib/application.js\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_egg@2.26.0@egg/index.js\n- /Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_egg-cluster@1.26.0@egg-cluster/lib/app_worker.js\n babel-loader@8 requires Babel 7.x (the package '@babel/core'). If you'd like to use Babel 6.x ('babel-core'), you should install 'babel-loader@7'.\n    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:797:15)\n    at Function.Module._load (internal/modules/cjs/loader.js:690:27)\n    at Module.require (internal/modules/cjs/loader.js:852:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (/Users/halu886/Applications/halu886/project/pc-4.0-demo/node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js:10:11)\n    at Module._compile (internal/modules/cjs/loader.js:959:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:995:10)\n    at Module.load (internal/modules/cjs/loader.js:815:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:727:14)\n    at Module.require (internal/modules/cjs/loader.js:852:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at loadLoader (/Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/webpack/lib/NormalModule.js:295:3)\n    at NormalModule.build (/Users/halu886/Applications/halu886/project/egg-webpack-tuji/node_modules/webpack/lib/NormalModule.js:446:15)");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map