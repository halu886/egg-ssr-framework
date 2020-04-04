module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		"index": 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("./" + ({}[chunkId]||chunkId) + ".bundle.js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./app/web/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./app/web/App.vue":
/*!*************************!*\
  !*** ./app/web/App.vue ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=template&id=0dff928c& */ "./app/web/App.vue?vue&type=template&id=0dff928c&");
/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ "./app/web/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js");



function injectStyles (context) {
  
  var style0 = __webpack_require__(!(function webpackMissingModule() { var e = new Error("Cannot find module './App.vue?vue&type=style&index=0&lang=less&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()))
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  injectStyles,
  null,
  "4511ad98"
  
)

component.options.__file = "app/web/App.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./app/web/App.vue?vue&type=script&lang=js&":
/*!**************************************************!*\
  !*** ./app/web/App.vue?vue&type=script&lang=js& ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_babel-loader@8.1.0@babel-loader/lib!../../node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./app/web/App.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_1_0_babel_loader_lib_index_js_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./app/web/App.vue?vue&type=template&id=0dff928c&":
/*!********************************************************!*\
  !*** ./app/web/App.vue?vue&type=template&id=0dff928c& ***!
  \********************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./App.vue?vue&type=template&id=0dff928c& */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./app/web/App.vue?vue&type=template&id=0dff928c&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_9_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_9_1_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./app/web/api/index.js":
/*!******************************!*\
  !*** ./app/web/api/index.js ***!
  \******************************/
/*! exports provided: fetchTop, fetchBottom, fetchRecommder, fetchMain */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchTop", function() { return fetchTop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchBottom", function() { return fetchBottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchRecommder", function() { return fetchRecommder; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchMain", function() { return fetchMain; });
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api */ "./app/web/api/server-api.js");

async function fetchTop(context) {
  return await api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchTop(context);
}
async function fetchBottom() {
  return await api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchBottom();
}
async function fetchRecommder(context) {
  return await api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchRecommder(context);
}
async function fetchMain() {
  return await api__WEBPACK_IMPORTED_MODULE_0__["default"].fetchMain();
} // let apiEnum = null;
// // export default function getApiEnum(ctx) {
// //   if (!ctx) {
// //     return {};
// //   }
// //   if (apiEnum) {
// //     return apiEnum;
// //   }
//   return getApiEnumHydrate();
// }

/***/ }),

/***/ "./app/web/api/server-api.js":
/*!***********************************!*\
  !*** ./app/web/api/server-api.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  return {
    fetchTop: ctx.service.top.getTop,
    fetchBottom: ctx.service.bottom.getBottom,
    fetchRecommder: ctx.service.recommder.fetchRecommder,
    fetchMain: ctx.service.recommder.getMain
  };
});

/***/ }),

/***/ "./app/web/index.js":
/*!**************************!*\
  !*** ./app/web/index.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./app/web/App.vue");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ "./app/web/store/index.js");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/index */ "./app/web/router/index.js");





 // import "core-js/modules/es6.promise";
// import "core-js/modules/es6.array.iterator";
// 导出一个工厂函数，用于创建新的
// 应用程序、router 和 store 实例

/* harmony default export */ __webpack_exports__["default"] = (context => {
  return new Promise((resolve, reject) => {
    const store = Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["default"])();
    const router = Object(_router_index__WEBPACK_IMPORTED_MODULE_3__["default"])();
    const appInit = new vue__WEBPACK_IMPORTED_MODULE_0___default.a({
      // 根实例简单的渲染应用程序组件。
      data: context,
      render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]),
      router,
      store
    });
    router.push("/");
    router.onReady(next => {
      const routeComponents = router.getMatchedComponents();

      if (routeComponents.length) {
        reject({
          code: 404
        });
      }

      Promise.all(routeComponents.map(({
        asyncData
      }) => asyncData && asyncData(store, router, context)).filter(_ => _)).then(() => {
        context.state = store.state;
        resolve(appInit);
        next();
      }).catch(e => {
        reject(e);
      });
    });
  });
});

/***/ }),

/***/ "./app/web/router/index.js":
/*!*********************************!*\
  !*** ./app/web/router/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "vue-router");
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.vue */ "./app/web/App.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_2__);



vue__WEBPACK_IMPORTED_MODULE_2___default.a.use(vue_router__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return new vue_router__WEBPACK_IMPORTED_MODULE_0___default.a({
    routes: [{
      path: "/",
      component: _App_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
      children: [{
        path: "top",
        component: () => __webpack_require__.e(/*! import() */ 0).then(__webpack_require__.bind(null, /*! ../components/mainHeader/index.vue */ "./app/web/components/mainHeader/index.vue"))
      }, {
        path: "bottom",
        component: () => __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/mainFooter/index.vue */ "./app/web/components/mainFooter/index.vue"))
      }]
    }]
  }); // const routers = new VueRouter(routes);
});

/***/ }),

/***/ "./app/web/store/index.js":
/*!********************************!*\
  !*** ./app/web/store/index.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./app/web/api/index.js");





vue__WEBPACK_IMPORTED_MODULE_1___default.a.use(vuex__WEBPACK_IMPORTED_MODULE_0___default.a);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return new vuex__WEBPACK_IMPORTED_MODULE_0___default.a.Store({
    state: {
      recommend: [],
      main: null,
      top: [],
      bottom: null
    },
    mutations: {
      updateRecommend(state, recommend) {
        state.recommend = recommend;
      },

      updateMain(state, main) {
        state.main = main;
      },

      udpateTop(state, top) {
        state.top = top;
      },

      updateBottom(state, bottom) {
        state.bottom = bottom;
      }

    },
    actions: {
      async updateTop({
        commit
      }, context) {
        let tops = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].fetchTop(context);
        tops = tops.map(r => "top" + r);
        commit("updateTop", tops);
      },

      async updateRecommend({
        commit
      }, context) {
        let recommends = await _api__WEBPACK_IMPORTED_MODULE_2__["default"].context(context);
        recommends = recommends.map(r => "recommend" + r);
        commit("updateRecommend", recommends);
      }

    }
  });
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.1.0@babel-loader/lib/index.js!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./app/web/App.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.1.0@babel-loader/lib!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./app/web/App.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "vuex");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuex__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: { ...Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])(["recommend"])
  },

  asyncData(store, router, context) {
    return store.dispatch("updateRecommend", context);
  }

});

/***/ }),

/***/ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.9.1@vue-loader/lib/index.js?!./app/web/App.vue?vue&type=template&id=0dff928c&":
/*!****************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.9.1@vue-loader/lib??vue-loader-options!./app/web/App.vue?vue&type=template&id=0dff928c& ***!
  \****************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { attrs: { id: "app" } },
    [
      _c("router-view"),
      _vm._ssrNode(
        '<div class="root"><div class="overview"><div class="main-show">SHOW</div><div class="vices">' +
          _vm._ssrList(_vm.recommend, function(r, $index) {
            return "<div>" + _vm._ssrEscape(_vm._s(r)) + "</div>"
          }) +
          "</div></div></div>"
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "vue":
/*!**********************!*\
  !*** external "vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue");

/***/ }),

/***/ "vue-router":
/*!*****************************!*\
  !*** external "vue-router" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vue-router");

/***/ }),

/***/ "vuex":
/*!***********************!*\
  !*** external "vuex" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("vuex");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map