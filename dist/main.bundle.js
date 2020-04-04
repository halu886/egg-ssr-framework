(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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
/* empty/unused harmony star reexport */!(function webpackMissingModule() { var e = new Error("Cannot find module './App.vue?vue&type=style&index=0&lang=less&'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _node_modules_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.9.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_9_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__["render"],
  _App_vue_vue_type_template_id_0dff928c___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
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

/***/ "./app/web/api/client-api.js":
/*!***********************************!*\
  !*** ./app/web/api/client-api.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);


function getClientAPI() {
  return {
    getTop: async () => {
      return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/get/top").data;
    },
    getBottom: async () => {
      return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/get/bottom").data;
    },
    getRecommender: async () => {
      return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/get/recommender").data;
    },
    getMain: async () => {
      return await axios__WEBPACK_IMPORTED_MODULE_0___default.a.get("/get/main").data;
    }
  };
}

/* harmony default export */ __webpack_exports__["default"] = (getClientAPI);

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
/* harmony import */ var api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! api */ "./app/web/api/client-api.js");

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

/***/ "./app/web/client-index.js":
/*!*********************************!*\
  !*** ./app/web/client-index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue */ "./app/web/App.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _store_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./store/index */ "./app/web/store/index.js");
/* harmony import */ var _router_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./router/index */ "./app/web/router/index.js");





 // import "core-js/modules/es6.promise";
// import "core-js/modules/es6.array.iterator";

const store = Object(_store_index__WEBPACK_IMPORTED_MODULE_2__["default"])();
const router = Object(_router_index__WEBPACK_IMPORTED_MODULE_3__["default"])();
const clientApp = new vue__WEBPACK_IMPORTED_MODULE_1__["default"]({
  render: h => h(_App_vue__WEBPACK_IMPORTED_MODULE_0__["default"]),
  router,
  store
}); // 这里假定 App.vue 模板中根元素具有 `id="app"`

clientApp.$mount("#app");

/***/ }),

/***/ "./app/web/router/index.js":
/*!*********************************!*\
  !*** ./app/web/router/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-router */ "./node_modules/vue-router/dist/vue-router.esm.js");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../App.vue */ "./app/web/App.vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");



vue__WEBPACK_IMPORTED_MODULE_2__["default"].use(vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return new vue_router__WEBPACK_IMPORTED_MODULE_0__["default"]({
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../api */ "./app/web/api/index.js");





vue__WEBPACK_IMPORTED_MODULE_1__["default"].use(vuex__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ __webpack_exports__["default"] = (() => {
  return new vuex__WEBPACK_IMPORTED_MODULE_0__["default"].Store({
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
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
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
      _c("div", { staticClass: "root" }, [
        _c("div", { staticClass: "overview" }, [
          _c("div", { staticClass: "main-show" }, [_vm._v("SHOW")]),
          _c(
            "div",
            { staticClass: "vices" },
            _vm._l(_vm.recommend, function(r, $index) {
              return _c("div", { key: $index }, [_vm._v(_vm._s(r))])
            }),
            0
          )
        ])
      ])
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

},[["./app/web/client-index.js","manifest","vendor"]]]);
//# sourceMappingURL=main.bundle.js.map