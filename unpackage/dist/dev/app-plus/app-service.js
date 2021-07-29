(this["webpackJsonp"] = this["webpackJsonp"] || []).push([["app-service"],[
/* 0 */
/*!********************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/main.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("__webpack_require__(/*! uni-pages */ 1);var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 33));\nvar _App = _interopRequireDefault(__webpack_require__(/*! ./App */ 34));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}\n\n_vue.default.config.productionTip = false;\n\n_App.default.mpType = 'app';\n\nvar app = new _vue.default(_objectSpread({},\n_App.default));\n\napp.$mount();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vbWFpbi5qcyJdLCJuYW1lcyI6WyJWdWUiLCJjb25maWciLCJwcm9kdWN0aW9uVGlwIiwiQXBwIiwibXBUeXBlIiwiYXBwIiwiJG1vdW50Il0sIm1hcHBpbmdzIjoiQUFBQSx3Q0FBbUI7QUFDbkIsd0U7O0FBRUFBLGFBQUlDLE1BQUosQ0FBV0MsYUFBWCxHQUEyQixLQUEzQjs7QUFFQUMsYUFBSUMsTUFBSixHQUFhLEtBQWI7O0FBRUEsSUFBTUMsR0FBRyxHQUFHLElBQUlMLFlBQUo7QUFDTEcsWUFESyxFQUFaOztBQUdBRSxHQUFHLENBQUNDLE1BQUoiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAndW5pLXBhZ2VzJztpbXBvcnQgVnVlIGZyb20gJ3Z1ZSdcbmltcG9ydCBBcHAgZnJvbSAnLi9BcHAnXG5cblZ1ZS5jb25maWcucHJvZHVjdGlvblRpcCA9IGZhbHNlXG5cbkFwcC5tcFR5cGUgPSAnYXBwJ1xuXG5jb25zdCBhcHAgPSBuZXcgVnVlKHtcbiAgICAuLi5BcHBcbn0pXG5hcHAuJG1vdW50KCkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!***********************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/pages.json ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


if (typeof Promise !== 'undefined' && !Promise.prototype.finally) {
  Promise.prototype.finally = function (callback) {
    var promise = this.constructor;
    return this.then(
    function (value) {return promise.resolve(callback()).then(function () {return value;});},
    function (reason) {return promise.resolve(callback()).then(function () {
        throw reason;
      });});

  };
}
if (uni.restoreGlobal) {
  uni.restoreGlobal(weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
__definePage('pages/index/index', function () {return Vue.extend(__webpack_require__(/*! pages/index/index.vue?mpType=page */ 2).default);});

/***/ }),
/* 2 */
/*!**********************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/pages/index/index.vue?mpType=page ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 3);\n/* harmony import */ var _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js&mpType=page */ 5);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"pages/index/index.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBNkg7QUFDN0g7QUFDb0U7QUFDTDs7O0FBRy9EO0FBQ2tOO0FBQ2xOLGdCQUFnQiw0TkFBVTtBQUMxQixFQUFFLHNGQUFNO0FBQ1IsRUFBRSwyRkFBTTtBQUNSLEVBQUUsb0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsK0ZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzIH0gZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPTJiZTg0YTNjJm1wVHlwZT1wYWdlXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIlxuZXhwb3J0ICogZnJvbSBcIi4vaW5kZXgudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJm1wVHlwZT1wYWdlXCJcblxuXG4vKiBub3JtYWxpemUgY29tcG9uZW50ICovXG5pbXBvcnQgbm9ybWFsaXplciBmcm9tIFwiIS4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9ydW50aW1lL2NvbXBvbmVudE5vcm1hbGl6ZXIuanNcIlxudmFyIGNvbXBvbmVudCA9IG5vcm1hbGl6ZXIoXG4gIHNjcmlwdCxcbiAgcmVuZGVyLFxuICBzdGF0aWNSZW5kZXJGbnMsXG4gIGZhbHNlLFxuICBudWxsLFxuICBudWxsLFxuICBudWxsLFxuICBmYWxzZSxcbiAgY29tcG9uZW50cyxcbiAgcmVuZGVyanNcbilcblxuY29tcG9uZW50Lm9wdGlvbnMuX19maWxlID0gXCJwYWdlcy9pbmRleC9pbmRleC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!****************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \****************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=template&id=2be84a3c&mpType=page */ 4);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_template_id_2be84a3c_mpType_page__WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 4 */
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/pages/index/index.vue?vue&type=template&id=2be84a3c&mpType=page ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", [
    _c(
      "view",
      { staticClass: _vm._$s(1, "sc", "topTitle"), attrs: { _i: 1 } },
      [_vm._v(_vm._$s(1, "t0-0", _vm._s(_vm.deviceNum)))]
    ),
    _c("view", {
      staticClass: _vm._$s(2, "sc", "bg-set"),
      style: _vm._$s(2, "s", { backgroundImage: "url(" + _vm.imageURL + ")" }),
      attrs: { _i: 2 }
    }),
    _c(
      "view",
      { staticClass: _vm._$s(3, "sc", "connectedStatus"), attrs: { _i: 3 } },
      [_c("button", { attrs: { _i: 4 }, on: { click: _vm.scan } })]
    ),
    _vm._$s(5, "i", _vm.connected)
      ? _c(
          "view",
          { staticClass: _vm._$s(5, "sc", "nowConcat"), attrs: { _i: 5 } },
          [
            _c("button", {
              attrs: { _i: 6 },
              on: { click: _vm.getBLEDeviceCharacteristics }
            })
          ]
        )
      : _vm._e()
  ])
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 5 */
/*!**********************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \**********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./index.vue?vue&type=script&lang=js&mpType=page */ 6);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_script_lang_js_mpType_page__WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXd1QixDQUFnQixrd0JBQUcsRUFBQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vZCBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9pbmRleC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anMmbXBUeXBlPXBhZ2VcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/pages/index/index.vue?vue&type=script&lang=js&mpType=page ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__, Buffer) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _regenerator = _interopRequireDefault(__webpack_require__(/*! ./node_modules/@babel/runtime/regenerator */ 13));\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _permission = _interopRequireDefault(__webpack_require__(/*! @/common/permission.js */ 16));\nvar _uniCollapse = _interopRequireDefault(__webpack_require__(/*! @/plugs/uni-ui/uni-collapse/uni-collapse.vue */ 17));\nvar _uniCollapseItem = _interopRequireDefault(__webpack_require__(/*! @/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue */ 23));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {try {var info = gen[key](arg);var value = info.value;} catch (error) {reject(error);return;}if (info.done) {resolve(value);} else {Promise.resolve(value).then(_next, _throw);}}function _asyncToGenerator(fn) {return function () {var self = this,args = arguments;return new Promise(function (resolve, reject) {var gen = fn.apply(self, args);function _next(value) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);}function _throw(err) {asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);}_next(undefined);});};}var _default =\n{\n  components: { uniCollapse: _uniCollapse.default, uniCollapseItem: _uniCollapseItem.default },\n  //uniapp component-全局引用和局部引用，compoents中注册\n  data: function data() {\n    return {\n      deviceList: [],\n      deviceNum: 0,\n      activeNames: 0,\n      connected: false,\n      connectedName: '',\n      prevConnected: false,\n      pDeviceInfo: {},\n      deviceId: 'lzp',\n      serviceId: '0000AE00-0000-1000-8000-00805F9B34FB',\n      characteristics: '0000AE10-0000-1000-8000-00805F9B34FB',\n      characteristicsnotify: '0000AE02-0000-1000-8000-00805F9B34FB',\n      // deviceId:'',\n      //serviceId:'',\n      // characteristics:'',\n      returnMessage: '',\n      macAddress: \"\",\n      macValue: '',\n      equipment: [],\n      imageURL: '/static/navigation/1122.png' };\n\n  },\n  onLoad: function onLoad() {\n    //初始蓝牙模块\n    //\tthis.pDeviceInfo = uni.getStorageSync('deviceInfo');// uni.getStorageSync判断缓存中是否此存在这设备，this.pDeviceInfo自己定义的\n    // this.pDeviceInfo = uni.getStorageSync('lzp');\n    //\tthis.pDeviceInfo ={\"deviceId\":\"5B:07:37:AB:01:12\",\"name\":\"lzp\",\"RSSI\": -67,\"localName\":\"lzp\",\"advertisServiceUUIDs\":[\"00001812-0000-1000-8000-00805F9B34FB\"],\"advertisData\":{}};\n    if (!this.pDeviceInfo) {\n      this.prevConnected = true;\n    }\n    this.initBluetoothModule();\n    this.onBLEConnectionStateChange();\n    //\tthis.notifyBLECharacteristicValueChange()\n  },\n  methods: {\n\n\n    onChange: function onChange(event) {\n      this.activeNames = event.detail;\n    },\n    initBluetoothModule: function initBluetoothModule() {var _this = this;\n      //初始蓝牙模块\n      uni.openBluetoothAdapter({\n        success: function success(res) {\n          _this.searchBlueList();\n        },\n        fail: function fail(err) {\n          __f__(\"log\", err, \" at pages/index/index.vue:77\");\n        } });\n\n    },\n    searchBlueList: function searchBlueList() {var _this2 = this;\n      //开启蓝牙搜索\n      uni.startBluetoothDevicesDiscovery({\n        success: function success(res) {\n          setTimeout(function () {\n            _this2.getBlueList();\n            uni.showToast({\n              title: '开启成功',\n              icon: 'success',\n              duration: 1000 });\n\n          }, 1000);\n        } });\n\n    },\n    getBlueList: function getBlueList() {var _this3 = this;\n      //获取搜索列表\n      uni.getBluetoothDevices({\n        success: function success(res) {\n          var data = res.devices;\n          var tempList = [];\n          data.map(function (device) {\n            if (!!device.localName) {\n              tempList.push(device);\n            }\n          });\n          _this3.deviceNum = tempList.length;\n          _this3.deviceList = tempList;\n          _this3.listenBluetooth();\n        } });\n\n    },\n    listenBluetooth: function listenBluetooth() {var _this4 = this;\n      var tempList = this.deviceList;\n      //监听蓝牙搜索\n      uni.onBluetoothDeviceFound(function (res) {\n        var flag = false;\n        res.devices.forEach(function (device) {\n          if (!!device.localName) {\n            tempList.push(device);\n            flag = true;\n          }\n        });\n        if (flag) {\n          _this4.deviceList = tempList;\n          _this4.deviceNum = _this4.deviceList.length;\n        }\n      });\n    },\n    connetBlue: function connetBlue(type, index) {var _this5 = this;\n      var deviceIndex = index;\n      var deviceInfo = this.deviceList[deviceIndex];\n      if (this.prevConnected && type == 1) {\n        deviceInfo = this.pDeviceInfo;\n      }\n      var dId = deviceInfo.deviceId;\n      // let dId =index;\n      __f__(\"log\", deviceInfo, \" at pages/index/index.vue:138\");\n      __f__(\"log\", dId, \" at pages/index/index.vue:139\");\n      uni.showLoading({\n        title: '正在连接...', //提示的内容,\n        mask: true });\n\n      //连接蓝牙\n      __f__(\"log\", '连接蓝牙', \" at pages/index/index.vue:145\");\n      uni.createBLEConnection({\n        deviceId: dId, //设备id\n\n        success: function success(res) {\n          __f__(\"log\", deviceInfo.deviceId, \" at pages/index/index.vue:150\");\n          __f__(\"log\", deviceInfo.name, \" at pages/index/index.vue:151\");\n          uni.hideLoading();\n          __f__(\"log\", res.errCode, \" at pages/index/index.vue:153\");\n          // if(res.errCode == 0){\n          if (res.errMsg == \"createBLEConnection:ok\") {\n            _this5.connected = true;\n            _this5.connectedName = deviceInfo.name;\n            uni.setStorageSync('deviceInfo', deviceInfo);\n            _this5.deviceId = dId;\n\n            uni.showToast({\n              title: '连接成功',\n              icon: 'success',\n              duration: 1000 });\n\n          }\n          uni.stopBluetoothDevicesDiscovery({\n            success: function success(res) {\n              __f__(\"log\", '连接蓝牙成功之后关闭蓝牙搜索', \" at pages/index/index.vue:169\");\n            } });\n\n        },\n        fail: function fail(err) {\n          uni.showToast({\n            title: '连接失败！',\n            icon: 'none',\n            duration: 2000 });\n\n        } });\n\n    },\n    conBlue: function conBlue(type, index) {var _this6 = this;\n      var deviceIndex = index;\n      var deviceInfo = JSON.parse(index);\n      if (this.prevConnected && type == 1) {\n        deviceInfo = this.pDeviceInfo;\n      }\n      var dId = deviceInfo.deviceId;\n      __f__(\"log\", deviceInfo, \" at pages/index/index.vue:189\");\n      // let dId =index;\n      __f__(\"log\", dId, \" at pages/index/index.vue:191\");\n      uni.showLoading({\n        title: '正在连接...', //提示的内容,\n        mask: true });\n\n      //连接蓝牙\n      __f__(\"log\", '连接蓝牙', \" at pages/index/index.vue:197\");\n\n\n      uni.createBLEConnection({\n        deviceId: dId, //设备id\n        //  deviceId: 'lzp',//设备id\t\n        success: function success(res) {\n          __f__(\"log\", deviceInfo.deviceId, \" at pages/index/index.vue:204\");\n          __f__(\"log\", deviceInfo.name, \" at pages/index/index.vue:205\");\n\n          uni.hideLoading();\n          __f__(\"log\", res.errCode, \" at pages/index/index.vue:208\");\n          // if(res.errCode == 0){\n          if (res.errMsg == \"createBLEConnection:ok\") {\n            _this6.connected = true;\n            _this6.connectedName = deviceInfo.name;\n            uni.setStorageSync('deviceInfo', deviceInfo);\n            _this6.deviceId = dId;\n\n            uni.showToast({\n              title: '连接成功',\n              icon: 'success',\n              duration: 1000 });\n\n            _this6.openinfo();\n          }\n          uni.stopBluetoothDevicesDiscovery({\n            success: function success(res) {\n              __f__(\"log\", '连接蓝牙成功之后关闭蓝牙搜索', \" at pages/index/index.vue:225\");\n            } });\n\n\n        },\n        fail: function fail(err) {\n          uni.showToast({\n            title: '连接失败！',\n            icon: 'none',\n            duration: 2000 });\n\n        } });\n\n\n\n      this.notifyBLECharacteristicValueChange();\n    },\n    getBLEDeviceServices: function getBLEDeviceServices() {var _this7 = this;\n      //获取服务\n      uni.showLoading({\n        title: '正在打印...', //提示的内容,\n        mask: true });\n\n      var deviceId = this.deviceId;\n      uni.getBLEDeviceServices({\n        deviceId: deviceId,\n        success: function success(res) {\n          for (var i = 0; i < res.services.length; i++) {\n\n            if (res.services[i].isPrimary) {\n              _this7.getBLEDeviceCharacteristics(deviceId, res.services[i].uuid);\n              __f__(\"log\", res.services[i].uuid, \" at pages/index/index.vue:256\");\n            }\n          }\n        },\n        fail: function fail(res) {\n          uni.hideLoading();\n          __f__(\"log\", \"获取蓝牙服务失败：\" + JSON.stringify(res), \" at pages/index/index.vue:262\");\n        } });\n\n    },\n    //获取单个服务的特征值(characteristic)\n    getBLEDeviceCharacteristics: function getBLEDeviceCharacteristics(deviceId, serviceId) {var _this8 = this;\n      if (!!this.characteristics && !!this.serviceId) {\n        this.PrintStr();\n        __f__(\"log\", this.deviceId, \" at pages/index/index.vue:270\");\n        __f__(\"log\", this.serviceId, \" at pages/index/index.vue:271\");\n        __f__(\"log\", this.characteristics, \" at pages/index/index.vue:272\");\n        return;\n      }\n      uni.getBLEDeviceCharacteristics({\n        deviceId: deviceId,\n        serviceId: serviceId,\n        success: function success(res) {\n          uni.hideLoading();\n          for (var i = 0; i < res.characteristics.length; i++) {\n            var item = res.characteristics[i];\n\n            if (item.properties.write && !_this8.serviceId) {\n              _this8.serviceId = serviceId;\n              _this8.characteristics = item.uuid;\n              _this8.PrintStr();\n            }\n          }\n          __f__(\"log\", '获取特征值', \" at pages/index/index.vue:289\");\n        },\n        fail: function fail(res) {\n          uni.hideLoading();\n          __f__(\"error\", '获取特征值失败：', res, \" at pages/index/index.vue:293\");\n        } });\n\n    },\n\n    ab2hex: function ab2hex(buffer) {\n      var hexArr = Array.prototype.map.call(\n      new Uint8Array(buffer),\n      function (bit) {\n        return ('00' + bit.toString(16)).slice(-2);\n      });\n\n      return hexArr.join('');\n    },\n    /**\n        * 监听低功耗蓝牙设备的特征值变化事件。必须先启用 notifyBLECharacteristicValueChange 接口才能接收到设备推送的 notification。\n        */\n\n\n    /**\n            * 订阅操作成功后需要设备主动更新特征值的 value，才会触发 uni.onBLECharacteristicValueChange 回调。\n            */\n    notifyBLECharacteristicValueChange: function notifyBLECharacteristicValueChange() {\n      var deviceId = this.deviceId;\n      var serviceId = this.serviceId;\n      var characteristicId = this.characteristicsnotify;\n      // let notify = this.characteristicsnotify.properties.notify;\n      uni.notifyBLECharacteristicValueChange({\n        state: true, // 启用 notify 功能\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取\n        serviceId: serviceId,\n        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取\n        characteristicId: characteristicId,\n        success: function success(res) {\n          __f__(\"log\", 'notifyBLECharacteristicValueChange success:' + res.errMsg, \" at pages/index/index.vue:329\");\n          __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:330\");\n        } });\n\n      // console.log(deviceId);\n      //console.log(serviceId);\n      // console.log(characteristicId);\n      // console.log(notify);\n      __f__(\"log\", '监听notify', \" at pages/index/index.vue:337\");\n      this.readBLECharacteristicValue();\n    },\n    onBLECharacteristicValueChange: function onBLECharacteristicValueChange(deviceId) {var _this9 = this;\n      uni.onBLECharacteristicValueChange(function (res) {\n        __f__(\"log\", \"characteristic \".concat(res.characteristicId, \" has changed, now is \").concat(res.value), \" at pages/index/index.vue:342\");\n        var str = _this9.ab2hex(res.value);\n        __f__(\"log\", str[0], \" at pages/index/index.vue:344\");\n        __f__(\"log\", str[4], \" at pages/index/index.vue:345\");\n        __f__(\"log\", str[5], \" at pages/index/index.vue:346\");\n        // console.log(this.ab2hex(res.value))\n\n        _this9.macAddress = res.deviceId;\n        _this9.macValue = _this9.ab2hex(res.value);\n        // this.readBLECharacteristicValue(this.deviceId)\n      });\n    },\n\n    /*\n       onBLECharacteristicValueChange() {\n       \t// 必须在这里的回调才能获取\n       \tconsole.log('监听低功耗蓝牙设备的特征值变化事件');\n       \tuni.onBLECharacteristicValueChange(characteristic => {\n       \t\tconsole.log('监听低功耗蓝牙设备的特征值变化事件成功');\n       \t\tconsole.log(JSON.stringify(characteristic));\n       \t\tconsole.log(this.ab2hex(characteristic.value));\n       \t\tthis.valueChangeData = characteristic;\n       \t\t\t\t\t\t// var array = new Uint8Array(characteristic.value);\n       \t\t\t\t\t\t// console.log('包' + array);\n       \t});\n       },\n       */\n    // 读取设备二进制数据\n    readBLECharacteristicValue: function readBLECharacteristicValue() {var _this10 = this;\n\n      var deviceId = this.deviceId;\n      var serviceId = this.serviceId;\n      var characteristicId = this.characteristicsnotify;\n      __f__(\"log\", deviceId, \" at pages/index/index.vue:375\");\n      __f__(\"log\", serviceId, \" at pages/index/index.vue:376\");\n      __f__(\"log\", characteristicId, \" at pages/index/index.vue:377\");\n      // this.onBLECharacteristicValueChange();\n      // this.notifyBLECharacteristicValueChange();\n      uni.readBLECharacteristicValue({\n        // 这里的 deviceId 需要已经通过 createBLEConnection 与对应设备建立链接\n        deviceId: deviceId,\n        // 这里的 serviceId 需要在 getBLEDeviceServices 接口中获取\n        serviceId: serviceId,\n        // 这里的 characteristicId 需要在 getBLEDeviceCharacteristics 接口中获取\n        characteristicId: characteristicId,\n        success: function success(res) {\n          __f__(\"log\", '读取设备数据值成功', \" at pages/index/index.vue:388\");\n          __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:389\");\n          _this10.notifyBLECharacteristicValueChange();\n        },\n        fail: function fail(e) {\n          __f__(\"log\", '读取设备数据值失败，错误码：' + e.errCode, \" at pages/index/index.vue:393\");\n          if (e.errCode !== 0) {\n            initTypes(e.errCode);\n          }\n        } });\n\n      this.onBLECharacteristicValueChange();\n    },\n    /**\n       \t\t * 监听低功耗蓝牙连接状态的改变事件。包括开发者主动连接或断开连接，设备丢失，连接异常断开等等\n       \t\t */\n    onBLEConnectionStateChange: function onBLEConnectionStateChange() {var _this11 = this;\n      uni.onBLEConnectionStateChange(function (res) {\n        // 该方法回调中可以用于处理连接意外断开等异常情况\n        __f__(\"log\", \"\\u84DD\\u7259\\u8FDE\\u63A5\\u72B6\\u6001 -------------------------->\", \" at pages/index/index.vue:407\");\n        __f__(\"log\", JSON.stringify(res), \" at pages/index/index.vue:408\");\n        if (!res.connected) {\n          if (_this11.isStop) return;\n          __f__(\"log\", '断开低功耗蓝牙成功:', \" at pages/index/index.vue:411\");\n          _this11.$set(_this11.disabled, 1, false);\n          _this11.$set(_this11.disabled, 3, true);\n          _this11.$set(_this11.disabled, 4, true);\n          _this11.$set(_this11.disabled, 5, true);\n          _this11.$set(_this11.disabled, 6, true);\n          _this11.$set(_this11.disabled, 7, true);\n          _this11.$set(_this11.disabled, 8, true);\n          _this11.$set(_this11.disabled, 9, true);\n          _this11.searchLoad = false;\n          _this11.equipment = [];\n          _this11.servicesData = [];\n          _this11.characteristicsData = [];\n          _this11.valueChangeData = {};\n          toast('已经断开当前蓝牙连接');\n        }\n      });\n    },\n    PrintStr: function PrintStr() {\n      var buf = Buffer.from(\"this is test content!\");\n      // var bufferstr = buf.buffer; \n      var bufferstr = 'AAAA1234567890123457';\n      var buffer = new ArrayBuffer(20);\n      var dataView = new DataView(buffer);\n      dataView.setUint8(0, 0x41);\n      dataView.setUint8(1, 0x41);\n      dataView.setUint8(2, 0x41);\n      dataView.setUint8(3, 0x41);\n      dataView.setUint8(4, 0x31);\n      dataView.setUint8(5, 0x32);\n      dataView.setUint8(6, 0x33);\n      dataView.setUint8(7, 0x34);\n      dataView.setUint8(8, 0x35);\n      dataView.setUint8(9, 0x36);\n      dataView.setUint8(10, 0x37);\n      dataView.setUint8(11, 0x38);\n      dataView.setUint8(12, 0x39);\n      dataView.setUint8(13, 0x30);\n      dataView.setUint8(14, 0x31);\n      dataView.setUint8(15, 0x32);\n      dataView.setUint8(16, 0x33);\n      dataView.setUint8(17, 0x34);\n      dataView.setUint8(18, 0x35);\n      dataView.setUint8(19, 0x36);\n\n\n      uni.writeBLECharacteristicValue({\n        deviceId: this.deviceId,\n        serviceId: this.serviceId,\n        characteristicId: this.characteristics,\n        value: buffer,\n        success: function success(res) {\n          uni.hideLoading();\n        },\n        fail: function fail(res) {\n          __f__(\"log\", \"数据发送失败:\" + JSON.stringify(res), \" at pages/index/index.vue:466\");\n        },\n        complete: function complete(res) {\n\n        } });\n\n      __f__(\"log\", this.deviceId, \" at pages/index/index.vue:472\");\n      __f__(\"log\", this.serviceId, \" at pages/index/index.vue:473\");\n      __f__(\"log\", this.characteristics, \" at pages/index/index.vue:474\");\n      __f__(\"log\", buffer, \" at pages/index/index.vue:475\");\n      this.notifyBLECharacteristicValueChange();\n      // this.onBLECharacteristicValueChange();\n    },\n    closeBluetoothAdapter: function closeBluetoothAdapter() {\n      uni.closeBluetoothAdapter({\n        success: function success(res) {\n          __f__(\"log\", '关闭蓝牙适配器', \" at pages/index/index.vue:482\");\n        } });\n\n    },\n    openinfo: function openinfo() {\n      uni.redirectTo({\n        url: '../connet/connet' });\n\n    },\n\n\n    scan: function scan() {var _this12 = this;return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee() {var status;return _regenerator.default.wrap(function _callee$(_context) {while (1) {switch (_context.prev = _context.next) {case 0:_context.next = 2;return (\n\n                  _this12.checkPermission());case 2:status = _context.sent;if (!(\n                status !== 1)) {_context.next = 5;break;}return _context.abrupt(\"return\");case 5:\n\n\n\n                uni.scanCode({\n                  success: function success(res) {\n                    //let result = JSON.parse(res.result)\n                    //\tlet result = res.result\n                    var result = JSON.parse(res.result);\n                    __f__(\"log\", result.deviceId, \" at pages/index/index.vue:505\");\n                    //\tlet myJSON = JSON.parse(result.deviceId)\n                    //\tconsole.log(myJSON)\n                    /*\n                     console.log(this.result)\n                     console.log(this.result[0])\n                      console.log(this.result[1])\n                       console.log(this.result[2])\n                        console.log(this.result[3])\n                    \t console.log(this.result[4])\n                    \t  console.log(this.result[5])\n                    \t   console.log(this.result[6])\n                    \t   this.initBluetoothModule();\n                    \t   */\n                    //\t  while(this.connected==false)\n                    //\t  {\n                    _this12.pDeviceInfo = res.result;\n                    _this12.conBlue(1, res.result);\n\n                    //\t  }\n\n                  },\n                  fail: function fail(err) {\n                    // 需要注意的是小程序扫码不需要申请相机权限\n                  } });case 6:case \"end\":return _context.stop();}}}, _callee);}))();\n\n    },\n\n\n    checkPermission: function checkPermission(code) {return _asyncToGenerator( /*#__PURE__*/_regenerator.default.mark(function _callee2() {var status;return _regenerator.default.wrap(function _callee2$(_context2) {while (1) {switch (_context2.prev = _context2.next) {case 0:if (!\n                _permission.default.isIOS) {_context2.next = 6;break;}_context2.next = 3;return _permission.default.requestIOS('camera');case 3:_context2.t0 = _context2.sent;_context2.next = 9;break;case 6:_context2.next = 8;return (\n                  _permission.default.requestAndroid('android.permission.CAMERA'));case 8:_context2.t0 = _context2.sent;case 9:status = _context2.t0;\n\n                if (status === null || status === 1) {\n                  status = 1;\n                } else {\n                  uni.showModal({\n                    content: \"需要相机权限\",\n                    confirmText: \"设置\",\n                    success: function success(res) {\n                      if (res.confirm) {\n                        _permission.default.gotoAppSetting();\n                      }\n                    } });\n\n                }return _context2.abrupt(\"return\",\n                status);case 12:case \"end\":return _context2.stop();}}}, _callee2);}))();\n    } },\n\n\n  onUnload: function onUnload() {\n    this.closeBluetoothAdapter();\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"], __webpack_require__(/*! ./../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/buffer/index.js */ 8).Buffer))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGFnZXMvaW5kZXgvaW5kZXgudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQkE7QUFDQTtBQUNBLHFJO0FBQ0E7QUFDQSw4RkFEQTtBQUVBO0FBQ0EsTUFIQSxrQkFHQTtBQUNBO0FBQ0Esb0JBREE7QUFFQSxrQkFGQTtBQUdBLG9CQUhBO0FBSUEsc0JBSkE7QUFLQSx1QkFMQTtBQU1BLDBCQU5BO0FBT0EscUJBUEE7QUFRQSxxQkFSQTtBQVNBLHVEQVRBO0FBVUEsNkRBVkE7QUFXQSxtRUFYQTtBQVlBO0FBQ0E7QUFDQTtBQUNBLHVCQWZBO0FBZ0JBLG9CQWhCQTtBQWlCQSxrQkFqQkE7QUFrQkEsbUJBbEJBO0FBbUJBLDZDQW5CQTs7QUFxQkEsR0F6QkE7QUEwQkEsUUExQkEsb0JBMEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQXJDQTtBQXNDQTs7O0FBR0EsWUFIQSxvQkFHQSxLQUhBLEVBR0E7QUFDQTtBQUNBLEtBTEE7QUFNQSx1QkFOQSxpQ0FNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FIQTtBQUlBO0FBQ0E7QUFDQSxTQU5BOztBQVFBLEtBaEJBO0FBaUJBLGtCQWpCQSw0QkFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFEQTtBQUVBLDZCQUZBO0FBR0EsNEJBSEE7O0FBS0EsV0FQQSxFQU9BLElBUEE7QUFRQSxTQVZBOztBQVlBLEtBL0JBO0FBZ0NBLGVBaENBLHlCQWdDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBSkE7QUFLQTtBQUNBO0FBQ0E7QUFDQSxTQVpBOztBQWNBLEtBaERBO0FBaURBLG1CQWpEQSw2QkFpREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQVpBO0FBYUEsS0FqRUE7QUFrRUEsY0FsRUEsc0JBa0VBLElBbEVBLEVBa0VBLEtBbEVBLEVBa0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQSxFQUNBO0FBQ0Esa0JBRkE7O0FBSUE7QUFDQTtBQUNBO0FBQ0EscUJBREEsRUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLDRCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFIQTs7QUFLQSxTQTFCQTtBQTJCQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx3QkFGQTtBQUdBLDBCQUhBOztBQUtBLFNBakNBOztBQW1DQSxLQXJIQTtBQXNIQSxXQXRIQSxtQkFzSEEsSUF0SEEsRUFzSEEsS0F0SEEsRUFzSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQURBLEVBQ0E7QUFDQSxrQkFGQTs7QUFJQTtBQUNBOzs7QUFHQTtBQUNBLHFCQURBLEVBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBREE7QUFFQSw2QkFGQTtBQUdBLDRCQUhBOztBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUhBOzs7QUFNQSxTQTdCQTtBQThCQTtBQUNBO0FBQ0EsMEJBREE7QUFFQSx3QkFGQTtBQUdBLDBCQUhBOztBQUtBLFNBcENBOzs7O0FBd0NBO0FBQ0EsS0FqTEE7QUFrTEEsd0JBbExBLGtDQWtMQTtBQUNBO0FBQ0E7QUFDQSx3QkFEQSxFQUNBO0FBQ0Esa0JBRkE7O0FBSUE7QUFDQTtBQUNBLDBCQURBO0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FWQTtBQVdBO0FBQ0E7QUFDQTtBQUNBLFNBZEE7O0FBZ0JBLEtBek1BO0FBME1BO0FBQ0EsK0JBM01BLHVDQTJNQSxRQTNNQSxFQTJNQSxTQTNNQSxFQTJNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFEQTtBQUVBLDRCQUZBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQWZBO0FBZ0JBLFlBaEJBLGdCQWdCQSxHQWhCQSxFQWdCQTtBQUNBO0FBQ0E7QUFDQSxTQW5CQTs7QUFxQkEsS0F4T0E7O0FBME9BLFVBMU9BLGtCQTBPQSxNQTFPQSxFQTBPQTtBQUNBO0FBQ0EsNEJBREE7QUFFQTtBQUNBO0FBQ0EsT0FKQTs7QUFNQTtBQUNBLEtBbFBBO0FBbVBBOzs7OztBQUtBOzs7QUFHQSxzQ0EzUEEsZ0RBMlBBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQURBLEVBQ0E7QUFDQTtBQUNBLDBCQUhBO0FBSUE7QUFDQSw0QkFMQTtBQU1BO0FBQ0EsMENBUEE7QUFRQSxlQVJBLG1CQVFBLEdBUkEsRUFRQTtBQUNBO0FBQ0E7QUFDQSxTQVhBOztBQWFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBblJBO0FBb1JBLGtDQXBSQSwwQ0FvUkEsUUFwUkEsRUFvUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxPQVhBO0FBWUEsS0FqU0E7O0FBbVNBOzs7Ozs7Ozs7Ozs7OztBQWNBO0FBQ0EsOEJBbFRBLHdDQWtUQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUZBO0FBR0E7QUFDQSw0QkFKQTtBQUtBO0FBQ0EsMENBTkE7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBWEE7QUFZQSxZQVpBLGdCQVlBLENBWkEsRUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FqQkE7O0FBbUJBO0FBQ0EsS0FoVkE7QUFpVkE7OztBQUdBLDhCQXBWQSx3Q0FvVkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BdEJBO0FBdUJBLEtBNVdBO0FBNldBLFlBN1dBLHNCQTZXQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBLCtCQURBO0FBRUEsaUNBRkE7QUFHQSw4Q0FIQTtBQUlBLHFCQUpBO0FBS0E7QUFDQTtBQUNBLFNBUEE7QUFRQTtBQUNBO0FBQ0EsU0FWQTtBQVdBOztBQUVBLFNBYkE7O0FBZUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0E5WkE7QUErWkEseUJBL1pBLG1DQStaQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBSEE7O0FBS0EsS0FyYUE7QUFzYUEsWUF0YUEsc0JBc2FBO0FBQ0E7QUFDQSwrQkFEQTs7QUFHQSxLQTFhQTs7O0FBNmFBLFFBN2FBLGtCQTZhQTs7QUFFQSwyQ0FGQSxTQUVBLE1BRkE7QUFHQSw0QkFIQTs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUFXQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSxtQkExQkE7QUEyQkE7QUFDQTtBQUNBLG1CQTdCQSxJQVBBOztBQXNDQSxLQW5kQTs7O0FBc2RBLG1CQXRkQSwyQkFzZEEsSUF0ZEEsRUFzZEE7QUFDQSx5Q0FEQSx1REFDQSx3Q0FEQTtBQUVBLGlGQUZBLDhDQUNBLE1BREE7O0FBSUE7QUFDQTtBQUNBLGlCQUZBLE1BRUE7QUFDQTtBQUNBLHFDQURBO0FBRUEscUNBRkE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQVBBOztBQVNBLGlCQWhCQTtBQWlCQSxzQkFqQkE7QUFrQkEsS0F4ZUEsRUF0Q0E7OztBQWloQkEsVUFqaEJBLHNCQWloQkE7QUFDQTtBQUNBLEdBbmhCQSxFIiwiZmlsZSI6IjYuanMiLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gICAgPHZpZXcgPlxuICAgICAgPHZpZXcgY2xhc3M9XCJ0b3BUaXRsZVwiPuW3suWPkeeOsCB7e2RldmljZU51bX19IOS4quiTneeJmeiuvuWkhzwvdmlldz5cblx0PCEtLSA8dmlldyBjbGFzcz1cInRvcFRpdGxlXCIgOnN0eWxlPVwie2JhY2tncm91bmQ6ICd1cmwoJytpbWFnZVVSTCsnKSd9XCI+IC0tPlxyXG5cdFx0PHZpZXcgY2xhc3M9XCJiZy1zZXRcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiAndXJsKCcraW1hZ2VVUkwrJyknfVwiPlxuXHQ8IS0tIOWmguaenOaYr+iuvue9rmJhY2tncm91bmQtaW1hZ2XliJnlhpnmiJDvvJo8dmlldyBjbGFzcz1cImNvbnRlbnRcIiA6c3R5bGU9XCJ7YmFja2dyb3VuZEltYWdlOiAndXJsKCcraW1hZ2VVUkwrJyknfVwiPiAtLT5cblx0PC92aWV3PlxuXG4gICAgICBcbiAgICAgIDx2aWV3IGNsYXNzPVwiY29ubmVjdGVkU3RhdHVzXCI+XHJcblx0XHQgIDwhLS0gLy/mjInplK7lnZfnmoTkvY3nva4gLS0+XG5cdFx0IDxidXR0b24gc2l6ZT1cImRlZnVsdFwiIHR5cGU9XCJwcmltYXJ5XCIgQGNsaWNrPVwic2NhblwiIHN0eWxlPVwibWFyZ2luOiAyMHVweCAwO1wiPuaJq+S4gOaJqzwvYnV0dG9uPiBcbiAgICAgICAgPC92aWV3PiBcblx0XHQgPHZpZXcgdi1pZj1cImNvbm5lY3RlZFwiIGNsYXNzPVwibm93Q29uY2F0XCI+XG5cdFx0XHQ8IS0tIDxidXR0b24gc2l6ZT1cImRlZnVsdFwiIHR5cGU9XCJkZWZ1bHRcIiBAY2xpY2s9XCJnZXRCTEVEZXZpY2VTZXJ2aWNlc1wiIHN0eWxlPVwibWFyZ2luOiAyMHVweCAwO1wiPua1i+ivleaJk+WNsDwvYnV0dG9uPiAtLT5cblx0XHQ8YnV0dG9uIHNpemU9XCJkZWZ1bHRcIiB0eXBlPVwiZGVmdWx0XCIgQGNsaWNrPVwiZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzXCIgc3R5bGU9XCJtYXJnaW46IDIwdXB4IDA7XCI+5rWL6K+V5omT5Y2wPC9idXR0b24+XHJcblx0XHQ8L3ZpZXc+IFxuICAgICAgPC92aWV3PiAgXG4gICAgPC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cclxuXHRcdGltcG9ydCBwZXJtaXNpb24gZnJvbSBcIkAvY29tbW9uL3Blcm1pc3Npb24uanNcIlxuXHRpbXBvcnQgdW5pQ29sbGFwc2UgZnJvbSBcIkAvcGx1Z3MvdW5pLXVpL3VuaS1jb2xsYXBzZS91bmktY29sbGFwc2UudnVlXCJcblx0aW1wb3J0IHVuaUNvbGxhcHNlSXRlbSBmcm9tIFwiQC9wbHVncy91bmktdWkvdW5pLWNvbGxhcHNlLWl0ZW0vdW5pLWNvbGxhcHNlLWl0ZW0udnVlXCJcblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdGNvbXBvbmVudHM6IHt1bmlDb2xsYXBzZSx1bmlDb2xsYXBzZUl0ZW19LCBcclxuXHQvL3VuaWFwcCBjb21wb25lbnQt5YWo5bGA5byV55So5ZKM5bGA6YOo5byV55So77yMY29tcG9lbnRz5Lit5rOo5YaMXG5cdFx0ZGF0YSgpIHtcblx0XHRcdHJldHVybiB7XG5cdFx0XHRcdGRldmljZUxpc3Q6W10sXG5cdFx0XHRcdGRldmljZU51bTowLFxuXHRcdFx0XHRhY3RpdmVOYW1lczowLFxuXHRcdFx0XHRjb25uZWN0ZWQ6ZmFsc2UsXG5cdFx0XHRcdGNvbm5lY3RlZE5hbWU6JycsXG5cdFx0XHRcdHByZXZDb25uZWN0ZWQ6ZmFsc2UsXG5cdFx0XHRcdHBEZXZpY2VJbmZvOnt9LFxuXHRcdFx0XHQgZGV2aWNlSWQ6J2x6cCcsXG5cdFx0XHRcdHNlcnZpY2VJZDonMDAwMEFFMDAtMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJyxcblx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNzOicwMDAwQUUxMC0wMDAwLTEwMDAtODAwMC0wMDgwNUY5QjM0RkInLFxyXG5cdFx0XHRcdGNoYXJhY3RlcmlzdGljc25vdGlmeTonMDAwMEFFMDItMDAwMC0xMDAwLTgwMDAtMDA4MDVGOUIzNEZCJyxcclxuXHRcdFx0XHQvLyBkZXZpY2VJZDonJyxcclxuXHRcdFx0XHQvL3NlcnZpY2VJZDonJyxcclxuXHRcdFx0XHQvLyBjaGFyYWN0ZXJpc3RpY3M6JycsXHJcblx0XHRcdFx0XHRcdFx0XHRyZXR1cm5NZXNzYWdlOicnLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFjQWRkcmVzczpcIlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bWFjVmFsdWU6JycsXHJcblx0XHRcdFx0XHRcdFx0XHRlcXVpcG1lbnQ6IFtdLFxyXG5cdFx0XHRpbWFnZVVSTDogJy9zdGF0aWMvbmF2aWdhdGlvbi8xMTIyLnBuZycsXHRcdFx0XHRcdFxuXHRcdFx0fTtcblx0XHR9LFxuXHRcdG9uTG9hZCgpIHtcblx0XHRcdC8v5Yid5aeL6JOd54mZ5qih5Z2XXG5cdFx0Ly9cdHRoaXMucERldmljZUluZm8gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2RldmljZUluZm8nKTsvLyB1bmkuZ2V0U3RvcmFnZVN5bmPliKTmlq3nvJPlrZjkuK3mmK/lkKbmraTlrZjlnKjov5norr7lpIfvvIx0aGlzLnBEZXZpY2VJbmZv6Ieq5bex5a6a5LmJ55qEXHJcblx0XHRcdC8vIHRoaXMucERldmljZUluZm8gPSB1bmkuZ2V0U3RvcmFnZVN5bmMoJ2x6cCcpO1xyXG5cdFx0Ly9cdHRoaXMucERldmljZUluZm8gPXtcImRldmljZUlkXCI6XCI1QjowNzozNzpBQjowMToxMlwiLFwibmFtZVwiOlwibHpwXCIsXCJSU1NJXCI6IC02NyxcImxvY2FsTmFtZVwiOlwibHpwXCIsXCJhZHZlcnRpc1NlcnZpY2VVVUlEc1wiOltcIjAwMDAxODEyLTAwMDAtMTAwMC04MDAwLTAwODA1RjlCMzRGQlwiXSxcImFkdmVydGlzRGF0YVwiOnt9fTtcblx0XHRcdGlmKCF0aGlzLnBEZXZpY2VJbmZvKXtcblx0XHRcdFx0dGhpcy5wcmV2Q29ubmVjdGVkID0gdHJ1ZTtcblx0XHRcdH1cblx0XHQgdGhpcy5pbml0Qmx1ZXRvb3RoTW9kdWxlKCkgXHJcblx0ICAgICAgIHRoaXMub25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UoKVxyXG5cdFx0Ly9cdHRoaXMubm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSgpXG5cdFx0fSxcblx0XHRtZXRob2RzOntcclxuXHRcdFx0XHJcblx0XHRcdFxuXHRcdFx0b25DaGFuZ2UoZXZlbnQpe1xuXHRcdFx0XHR0aGlzLmFjdGl2ZU5hbWVzID1ldmVudC5kZXRhaWw7IFxuXHRcdFx0fSxcblx0XHRcdGluaXRCbHVldG9vdGhNb2R1bGUoKXtcblx0XHRcdFx0Ly/liJ3lp4vok53niZnmqKHlnZdcblx0XHRcdFx0dW5pLm9wZW5CbHVldG9vdGhBZGFwdGVyKHtcblx0XHRcdFx0ICBzdWNjZXNzOnJlcz0+IHtcblx0XHRcdFx0XHR0aGlzLnNlYXJjaEJsdWVMaXN0KCk7XG5cdFx0XHRcdCAgfSxcblx0XHRcdFx0ICBmYWlsOmVycj0+e1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGVycilcblx0XHRcdFx0ICB9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxuXHRcdFx0c2VhcmNoQmx1ZUxpc3QoKXtcblx0XHRcdFx0Ly/lvIDlkK/ok53niZnmkJzntKJcblx0XHRcdFx0dW5pLnN0YXJ0Qmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XG5cdFx0XHRcdFx0c3VjY2VzczpyZXM9PiB7XG5cdFx0XHRcdFx0XHRzZXRUaW1lb3V0KCgpPT57XG5cdFx0XHRcdFx0XHRcdHRoaXMuZ2V0Qmx1ZUxpc3QoKTtcblx0XHRcdFx0XHRcdFx0ICB1bmkuc2hvd1RvYXN0KHtcblx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+W8gOWQr+aIkOWKnycsXG5cdFx0XHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0XHRcdGR1cmF0aW9uOiAxMDAwXG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSwxMDAwKTtcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdGdldEJsdWVMaXN0KCl7XG5cdFx0XHRcdC8v6I635Y+W5pCc57Si5YiX6KGoXG5cdFx0XHRcdHVuaS5nZXRCbHVldG9vdGhEZXZpY2VzKHtcblx0XHRcdFx0ICBzdWNjZXNzOnJlcz0+IHtcblx0XHRcdFx0XHRsZXQgZGF0YSA9IHJlcy5kZXZpY2VzXG5cdFx0XHRcdFx0bGV0IHRlbXBMaXN0PVtdO1xuXHRcdFx0XHRcdGRhdGEubWFwKGRldmljZT0+e1xuXHRcdFx0XHRcdCAgaWYoISFkZXZpY2UubG9jYWxOYW1lKXtcblx0XHRcdFx0XHRcdHRlbXBMaXN0LnB1c2goZGV2aWNlKVxuXHRcdFx0XHRcdCAgfVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHRoaXMuZGV2aWNlTnVtID0gdGVtcExpc3QubGVuZ3RoO1xuXHRcdFx0XHRcdHRoaXMuZGV2aWNlTGlzdD10ZW1wTGlzdDtcblx0XHRcdFx0XHR0aGlzLmxpc3RlbkJsdWV0b290aCgpO1xuXHRcdFx0XHQgIH1cblx0XHRcdFx0fSk7XG5cdFx0XHR9LFxuXHRcdFx0bGlzdGVuQmx1ZXRvb3RoKCl7XG5cdFx0XHRcdGxldCB0ZW1wTGlzdCA9dGhpcy5kZXZpY2VMaXN0O1xuXHRcdFx0XHQvL+ebkeWQrOiTneeJmeaQnOe0olxuXHRcdFx0XHR1bmkub25CbHVldG9vdGhEZXZpY2VGb3VuZCgocmVzKSA9PiB7XG5cdFx0XHRcdCAgbGV0IGZsYWcgPSBmYWxzZTtcblx0XHRcdFx0ICByZXMuZGV2aWNlcy5mb3JFYWNoKGRldmljZSA9PiB7XG5cdFx0XHRcdFx0aWYoISFkZXZpY2UubG9jYWxOYW1lKXtcblx0XHRcdFx0XHQgIHRlbXBMaXN0LnB1c2goZGV2aWNlKVxuXHRcdFx0XHRcdCAgZmxhZyA9dHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCAgfSlcblx0XHRcdFx0ICBpZihmbGFnKXtcblx0XHRcdFx0XHR0aGlzLmRldmljZUxpc3Q9dGVtcExpc3Q7XG5cdFx0XHRcdFx0dGhpcy5kZXZpY2VOdW0gPSB0aGlzLmRldmljZUxpc3QubGVuZ3RoO1xuXHRcdFx0XHQgIH1cblx0XHRcdCAgIH0pXG5cdFx0XHR9LFxuXHRcdFx0Y29ubmV0Qmx1ZSh0eXBlLGluZGV4KXtcblx0XHRcdFx0bGV0IGRldmljZUluZGV4ID0gaW5kZXg7XG5cdFx0XHRcdGxldCBkZXZpY2VJbmZvID0gdGhpcy5kZXZpY2VMaXN0W2RldmljZUluZGV4XTtcblx0XHRcdFx0aWYodGhpcy5wcmV2Q29ubmVjdGVkICYmIHR5cGUgPT0gMSl7XG5cdFx0XHRcdCAgZGV2aWNlSW5mbyA9IHRoaXMucERldmljZUluZm87XG5cdFx0XHRcdH0gXG5cdFx0XHRsZXQgZElkID0gZGV2aWNlSW5mby5kZXZpY2VJZDtcclxuXHRcdCAvLyBsZXQgZElkID1pbmRleDtcclxuXHRcdGNvbnNvbGUubG9nKGRldmljZUluZm8pXHJcblx0XHQgY29uc29sZS5sb2coZElkKVxuXHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xuXHRcdFx0XHQgIHRpdGxlOiAn5q2j5Zyo6L+e5o6lLi4uJywgLy/mj5DnpLrnmoTlhoXlrrksXG5cdFx0XHRcdCAgbWFzazogdHJ1ZVxuXHRcdFx0XHR9KTtcblx0XHRcdFx0Ly/ov57mjqXok53niZlcclxuXHRcdFx0XHRjb25zb2xlLmxvZygn6L+e5o6l6JOd54mZJyk7XG5cdFx0XHRcdHVuaS5jcmVhdGVCTEVDb25uZWN0aW9uKHtcblx0XHRcdFx0ICBkZXZpY2VJZDogZElkLC8v6K6+5aSHaWRcclxuXHRcdFx0XHQgIFx0XG5cdFx0XHRcdCAgc3VjY2VzczogcmVzPT4ge1xyXG5cdFx0XHRcdFx0ICBjb25zb2xlLmxvZyhkZXZpY2VJbmZvLmRldmljZUlkKTtcclxuXHRcdFx0XHRcdCAgY29uc29sZS5sb2coZGV2aWNlSW5mby5uYW1lKVxuXHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1x0XHJcblx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKVxuXHRcdFx0XHRcdC8vIGlmKHJlcy5lcnJDb2RlID09IDApe1xyXG5cdFx0XHRcdFx0XHRpZiAocmVzLmVyck1zZyA9PSBcImNyZWF0ZUJMRUNvbm5lY3Rpb246b2tcIikge1xuXHRcdFx0XHRcdCAgdGhpcy5jb25uZWN0ZWQgPSB0cnVlO1xuXHRcdFx0XHRcdCAgdGhpcy5jb25uZWN0ZWROYW1lPWRldmljZUluZm8ubmFtZTtcblx0XHRcdFx0XHQgICB1bmkuc2V0U3RvcmFnZVN5bmMoJ2RldmljZUluZm8nLGRldmljZUluZm8pO1xuXHRcdFx0XHRcdCAgdGhpcy5kZXZpY2VJZD1kSWQ7XHJcblx0XHRcdFx0XHRcblx0XHRcdFx0XHQgIHVuaS5zaG93VG9hc3Qoe1xuXHRcdFx0XHRcdFx0dGl0bGU6ICfov57mjqXmiJDlip8nLFxuXHRcdFx0XHRcdFx0aWNvbjogJ3N1Y2Nlc3MnLFxuXHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0dW5pLnN0b3BCbHVldG9vdGhEZXZpY2VzRGlzY292ZXJ5KHtcblx0XHRcdFx0XHQgIHN1Y2Nlc3M6IHJlcyA9PiB7XG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn6L+e5o6l6JOd54mZ5oiQ5Yqf5LmL5ZCO5YWz6Zet6JOd54mZ5pCc57SiJyk7XG5cdFx0XHRcdFx0ICB9XG5cdFx0XHRcdFx0fSlcblx0XHRcdFx0ICB9LFxuXHRcdFx0XHQgIGZhaWw6ZXJyPT57XG5cdFx0XHRcdFx0dW5pLnNob3dUb2FzdCh7XG5cdFx0XHRcdFx0XHR0aXRsZTogJ+i/nuaOpeWksei0pe+8gScsIFxuXHRcdFx0XHRcdFx0aWNvbjogJ25vbmUnLCBcblx0XHRcdFx0XHRcdGR1cmF0aW9uOiAyMDAwXG5cdFx0XHRcdFx0ICB9KTtcblx0XHRcdFx0ICB9XG5cdFx0XHRcdH0pXG5cdFx0XHR9LFxyXG5cdFx0XHRjb25CbHVlKHR5cGUsaW5kZXgpe1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkZXZpY2VJbmRleCA9IGluZGV4O1xyXG5cdFx0XHRcdFx0XHRcdGxldCBkZXZpY2VJbmZvID0gSlNPTi5wYXJzZShpbmRleCk7XHJcblx0XHRcdFx0XHRcdFx0aWYodGhpcy5wcmV2Q29ubmVjdGVkICYmIHR5cGUgPT0gMSl7XHJcblx0XHRcdFx0XHRcdFx0ICBkZXZpY2VJbmZvID0gdGhpcy5wRGV2aWNlSW5mbztcclxuXHRcdFx0XHRcdFx0XHR9IFxyXG5cdFx0XHRcdFx0bGV0IGRJZCA9IGRldmljZUluZm8uZGV2aWNlSWQ7XHJcblx0XHRcdFx0XHRjb25zb2xlLmxvZyhkZXZpY2VJbmZvKVxyXG5cdFx0XHQvLyBsZXQgZElkID1pbmRleDtcclxuXHRcdFx0IGNvbnNvbGUubG9nKGRJZClcclxuXHRcdFx0XHRcdFx0XHR1bmkuc2hvd0xvYWRpbmcoe1xyXG5cdFx0XHRcdFx0XHRcdCAgdGl0bGU6ICfmraPlnKjov57mjqUuLi4nLCAvL+aPkOekuueahOWGheWuuSxcclxuXHRcdFx0XHRcdFx0XHQgIG1hc2s6IHRydWVcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHQvL+i/nuaOpeiTneeJmVxyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfov57mjqXok53niZknKTtcclxuXHJcblx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0dW5pLmNyZWF0ZUJMRUNvbm5lY3Rpb24oe1xyXG5cdFx0XHRcdFx0XHRcdCAgZGV2aWNlSWQ6IGRJZCwvL+iuvuWkh2lkXHJcblx0XHRcdFx0XHRcdFx0Ly8gIGRldmljZUlkOiAnbHpwJywvL+iuvuWkh2lkXHRcclxuXHRcdFx0XHRcdFx0XHQgIHN1Y2Nlc3M6IHJlcz0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgY29uc29sZS5sb2coZGV2aWNlSW5mby5kZXZpY2VJZCk7XHJcblx0XHRcdFx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKGRldmljZUluZm8ubmFtZSlcclxuXHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5oaWRlTG9hZGluZygpO1x0XHJcblx0XHRcdFx0XHRcdFx0XHQgIGNvbnNvbGUubG9nKHJlcy5lcnJDb2RlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly8gaWYocmVzLmVyckNvZGUgPT0gMCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChyZXMuZXJyTXNnID09IFwiY3JlYXRlQkxFQ29ubmVjdGlvbjpva1wiKSB7XHJcblx0XHRcdFx0XHRcdFx0XHQgIHRoaXMuY29ubmVjdGVkID0gdHJ1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgdGhpcy5jb25uZWN0ZWROYW1lPWRldmljZUluZm8ubmFtZTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgIHVuaS5zZXRTdG9yYWdlU3luYygnZGV2aWNlSW5mbycsZGV2aWNlSW5mbyk7XHJcblx0XHRcdFx0XHRcdFx0XHQgIHRoaXMuZGV2aWNlSWQ9ZElkO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQgIHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/nuaOpeaIkOWKnycsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGljb246ICdzdWNjZXNzJyxcclxuXHRcdFx0XHRcdFx0XHRcdFx0ZHVyYXRpb246IDEwMDBcclxuXHRcdFx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRcdFx0IHRoaXMub3BlbmluZm8oKTtcclxuXHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zdG9wQmx1ZXRvb3RoRGV2aWNlc0Rpc2NvdmVyeSh7XHJcblx0XHRcdFx0XHRcdFx0XHQgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfov57mjqXok53niZnmiJDlip/kuYvlkI7lhbPpl63ok53niZnmkJzntKInKTtcclxuXHRcdFx0XHRcdFx0XHRcdCAgfSxcclxuXHRcdFx0XHRcdFx0ICBcclxuXHRcdFx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdFx0ICB9LFxyXG5cdFx0XHRcdFx0XHRcdCAgZmFpbDplcnI9PntcclxuXHRcdFx0XHRcdFx0XHRcdHVuaS5zaG93VG9hc3Qoe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aXRsZTogJ+i/nuaOpeWksei0pe+8gScsIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRpY29uOiAnbm9uZScsIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRkdXJhdGlvbjogMjAwMFxyXG5cdFx0XHRcdFx0XHRcdFx0ICB9KTtcclxuXHRcdFx0XHRcdFx0XHQgIH1cclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFxyXG5cdHRoaXMubm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSgpXHRcdFxyXG5cdFx0XHRcdFx0XHR9LFxuXHRcdFx0Z2V0QkxFRGV2aWNlU2VydmljZXMoKXtcblx0XHRcdFx0Ly/ojrflj5bmnI3liqFcblx0XHRcdFx0dW5pLnNob3dMb2FkaW5nKHtcblx0XHRcdFx0ICB0aXRsZTogJ+ato+WcqOaJk+WNsC4uLicsIC8v5o+Q56S655qE5YaF5a65LFxuXHRcdFx0XHQgIG1hc2s6IHRydWVcblx0XHRcdFx0fSk7XG5cdFx0XHRcdGxldCBkZXZpY2VJZCA9IHRoaXMuZGV2aWNlSWQ7XG5cdFx0XHRcdHVuaS5nZXRCTEVEZXZpY2VTZXJ2aWNlcyh7XG5cdFx0XHRcdFx0ZGV2aWNlSWQsXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1x0XG5cdFx0XHRcdFx0ICBmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5zZXJ2aWNlcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHQgXG5cdFx0XHRcdFx0XHRpZiAocmVzLnNlcnZpY2VzW2ldLmlzUHJpbWFyeSkge1xuXHRcdFx0XHRcdFx0ICB0aGlzLmdldEJMRURldmljZUNoYXJhY3RlcmlzdGljcyhkZXZpY2VJZCwgcmVzLnNlcnZpY2VzW2ldLnV1aWQpO1xyXG5cdFx0XHRcdFx0XHQgICBjb25zb2xlLmxvZyhyZXMuc2VydmljZXNbaV0udXVpZClcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHQgIH1cblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWw6IChyZXMpID0+IHtcblx0XHRcdFx0XHQgIHVuaS5oaWRlTG9hZGluZygpO1xuXHRcdFx0XHRcdCAgY29uc29sZS5sb2coXCLojrflj5bok53niZnmnI3liqHlpLHotKXvvJpcIiArIEpTT04uc3RyaW5naWZ5KHJlcykpXG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KVxuXHRcdFx0fSxcblx0XHRcdC8v6I635Y+W5Y2V5Liq5pyN5Yqh55qE54m55b6B5YC8KGNoYXJhY3RlcmlzdGljKVxuXHRcdFx0Z2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKGRldmljZUlkLCBzZXJ2aWNlSWQpe1xuXHRcdFx0XHRpZighIXRoaXMuY2hhcmFjdGVyaXN0aWNzICYmICEhdGhpcy5zZXJ2aWNlSWQpe1xuXHRcdFx0XHRcdHRoaXMuUHJpbnRTdHIoKTtcclxuXHRcdFx0XHQgY29uc29sZS5sb2codGhpcy5kZXZpY2VJZClcclxuXHRcdFx0XHQgY29uc29sZS5sb2codGhpcy5zZXJ2aWNlSWQpXHJcblx0XHRcdFx0IGNvbnNvbGUubG9nKHRoaXMuY2hhcmFjdGVyaXN0aWNzKVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXHRcdFx0XHR1bmkuZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzKHtcblx0XHRcdFx0XHRkZXZpY2VJZCxcblx0XHRcdFx0XHRzZXJ2aWNlSWQsXG5cdFx0XHRcdFx0c3VjY2VzczogKHJlcykgPT4ge1xuXHRcdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0XHRmb3IgKGxldCBpID0gMDsgaSA8IHJlcy5jaGFyYWN0ZXJpc3RpY3MubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdFx0bGV0IGl0ZW0gPSByZXMuY2hhcmFjdGVyaXN0aWNzW2ldO1xyXG5cdFx0XHRcdFx0XHRcdFxuXHRcdFx0XHRcdFx0XHRpZiAoaXRlbS5wcm9wZXJ0aWVzLndyaXRlICYmICF0aGlzLnNlcnZpY2VJZCkge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VydmljZUlkID0gc2VydmljZUlkO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuY2hhcmFjdGVyaXN0aWNzID0gaXRlbS51dWlkO1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuUHJpbnRTdHIoKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn6I635Y+W54m55b6B5YC8Jylcblx0XHRcdFx0XHR9LFxuXHRcdFx0XHRcdGZhaWwocmVzKSB7XG5cdFx0XHRcdFx0dW5pLmhpZGVMb2FkaW5nKCk7XG5cdFx0XHRcdFx0Y29uc29sZS5lcnJvcign6I635Y+W54m55b6B5YC85aSx6LSl77yaJywgcmVzKVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSlcblx0XHRcdH0sXG5cdFx0XHRcclxuXHRcdFx0XHRcdGFiMmhleChidWZmZXIpIHtcclxuXHRcdFx0XHRcdFx0XHRcdCAgY29uc3QgaGV4QXJyID0gQXJyYXkucHJvdG90eXBlLm1hcC5jYWxsKFxyXG5cdFx0XHRcdFx0XHRcdFx0ICAgIG5ldyBVaW50OEFycmF5KGJ1ZmZlciksXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgZnVuY3Rpb24gKGJpdCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0ICAgICAgcmV0dXJuICgnMDAnICsgYml0LnRvU3RyaW5nKDE2KSkuc2xpY2UoLTIpXHJcblx0XHRcdFx0XHRcdFx0XHQgICAgfVxyXG5cdFx0XHRcdFx0XHRcdFx0ICApXHJcblx0XHRcdFx0XHRcdFx0XHQgIHJldHVybiBoZXhBcnIuam9pbignJylcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHQvKipcclxuXHRcdFx0XHRcdCAqIOebkeWQrOS9juWKn+iAl+iTneeJmeiuvuWkh+eahOeJueW+geWAvOWPmOWMluS6i+S7tuOAguW/hemhu+WFiOWQr+eUqCBub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlIOaOpeWPo+aJjeiDveaOpeaUtuWIsOiuvuWkh+aOqOmAgeeahCBub3RpZmljYXRpb27jgIJcclxuXHRcdFx0XHRcdCAqL1xyXG5cclxuXHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0LyoqXHJcblx0XHRcdFx0XHQgKiDorqLpmIXmk43kvZzmiJDlip/lkI7pnIDopoHorr7lpIfkuLvliqjmm7TmlrDnibnlvoHlgLznmoQgdmFsdWXvvIzmiY3kvJrop6blj5EgdW5pLm9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSDlm57osIPjgIJcclxuXHRcdFx0XHRcdCAqL1xyXG5cdFx0XHRcdFx0bm90aWZ5QkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSgpIHtcclxuXHRcdFx0bGV0IGRldmljZUlkID0gdGhpcy5kZXZpY2VJZDtcclxuXHRcdFx0bGV0IHNlcnZpY2VJZCA9IHRoaXMuc2VydmljZUlkO1xyXG5cdFx0XHRsZXQgY2hhcmFjdGVyaXN0aWNJZCA9IHRoaXMuY2hhcmFjdGVyaXN0aWNzbm90aWZ5O1xyXG5cdFx0XHQvLyBsZXQgbm90aWZ5ID0gdGhpcy5jaGFyYWN0ZXJpc3RpY3Nub3RpZnkucHJvcGVydGllcy5ub3RpZnk7XHJcblx0XHRcdFx0XHRcdHVuaS5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKHtcclxuXHRcdFx0XHRcdFx0XHRzdGF0ZTogdHJ1ZSwgLy8g5ZCv55SoIG5vdGlmeSDlip/og71cclxuXHRcdFx0XHRcdFx0XHQvLyDov5nph4znmoQgZGV2aWNlSWQg6ZyA6KaB5bey57uP6YCa6L+HIGNyZWF0ZUJMRUNvbm5lY3Rpb24g5LiO5a+55bqU6K6+5aSH5bu656uL6ZO+5o6lXHJcblx0XHRcdFx0XHRcdFx0ZGV2aWNlSWQsXHJcblx0XHRcdFx0XHRcdFx0Ly8g6L+Z6YeM55qEIHNlcnZpY2VJZCDpnIDopoHlnKggZ2V0QkxFRGV2aWNlU2VydmljZXMg5o6l5Y+j5Lit6I635Y+WXHJcblx0XHRcdFx0XHRcdFx0c2VydmljZUlkLFxyXG5cdFx0XHRcdFx0XHRcdC8vIOi/memHjOeahCBjaGFyYWN0ZXJpc3RpY0lkIOmcgOimgeWcqCBnZXRCTEVEZXZpY2VDaGFyYWN0ZXJpc3RpY3Mg5o6l5Y+j5Lit6I635Y+WXHJcblx0XHRcdFx0XHRcdFx0Y2hhcmFjdGVyaXN0aWNJZCxcclxuXHRcdFx0XHRcdFx0XHRzdWNjZXNzKHJlcykge1xyXG5cdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ25vdGlmeUJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2Ugc3VjY2VzczonICsgcmVzLmVyck1zZyk7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShyZXMpKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHQvLyBjb25zb2xlLmxvZyhkZXZpY2VJZCk7XHJcblx0XHRcdFx0XHRcdC8vY29uc29sZS5sb2coc2VydmljZUlkKTtcclxuXHRcdFx0XHRcdFx0Ly8gY29uc29sZS5sb2coY2hhcmFjdGVyaXN0aWNJZCk7XHJcblx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKG5vdGlmeSk7XHJcblx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnm5HlkKxub3RpZnknKTtcclxuXHRcdFx0XHRcdFx0dGhpcy5yZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSgpO1xyXG5cdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdG9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZShkZXZpY2VJZCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdHVuaS5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKHJlcyk9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgY29uc29sZS5sb2coYGNoYXJhY3RlcmlzdGljICR7cmVzLmNoYXJhY3RlcmlzdGljSWR9IGhhcyBjaGFuZ2VkLCBub3cgaXMgJHtyZXMudmFsdWV9YClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHN0cj10aGlzLmFiMmhleChyZXMudmFsdWUpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zb2xlLmxvZyhzdHJbMF0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgIGNvbnNvbGUubG9nKHN0cls0XSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc29sZS5sb2coc3RyWzVdKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgLy8gY29uc29sZS5sb2codGhpcy5hYjJoZXgocmVzLnZhbHVlKSlcclxuXHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgIHRoaXMubWFjQWRkcmVzcyA9IHJlcy5kZXZpY2VJZDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICB0aGlzLm1hY1ZhbHVlID0gdGhpcy5hYjJoZXgocmVzLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAvLyB0aGlzLnJlYWRCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHRoaXMuZGV2aWNlSWQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdH0pXHRcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdC8qXHJcblx0XHRcdFx0XHRvbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKSB7XHJcblx0XHRcdFx0XHRcdC8vIOW/hemhu+WcqOi/memHjOeahOWbnuiwg+aJjeiDveiOt+WPllxyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn55uR5ZCs5L2O5Yqf6ICX6JOd54mZ6K6+5aSH55qE54m55b6B5YC85Y+Y5YyW5LqL5Lu2Jyk7XHJcblx0XHRcdFx0XHRcdHVuaS5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoY2hhcmFjdGVyaXN0aWMgPT4ge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKCfnm5HlkKzkvY7lip/ogJfok53niZnorr7lpIfnmoTnibnlvoHlgLzlj5jljJbkuovku7bmiJDlip8nKTtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjaGFyYWN0ZXJpc3RpYykpO1xyXG5cdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHRoaXMuYWIyaGV4KGNoYXJhY3RlcmlzdGljLnZhbHVlKSk7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy52YWx1ZUNoYW5nZURhdGEgPSBjaGFyYWN0ZXJpc3RpYztcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIHZhciBhcnJheSA9IG5ldyBVaW50OEFycmF5KGNoYXJhY3RlcmlzdGljLnZhbHVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdC8vIGNvbnNvbGUubG9nKCfljIUnICsgYXJyYXkpO1xyXG5cdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdH0sXHJcbiovXHJcblx0XHRcdFx0XHRcdC8vIOivu+WPluiuvuWkh+S6jOi/m+WItuaVsOaNrlxyXG5yZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSgpIHtcclxuXHJcblx0XHRcdGxldCBkZXZpY2VJZCA9IHRoaXMuZGV2aWNlSWQ7XHJcblx0XHRcdGxldCBzZXJ2aWNlSWQgPSB0aGlzLnNlcnZpY2VJZDtcclxuXHRcdFx0bGV0IGNoYXJhY3RlcmlzdGljSWQgPSB0aGlzLmNoYXJhY3RlcmlzdGljc25vdGlmeTtcclxuXHRcdFx0Y29uc29sZS5sb2coZGV2aWNlSWQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhzZXJ2aWNlSWQpO1xyXG5cdFx0XHRjb25zb2xlLmxvZyhjaGFyYWN0ZXJpc3RpY0lkKTtcclxuXHRcdFx0Ly8gdGhpcy5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKTtcclxuXHRcdFx0Ly8gdGhpcy5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKCk7XHJcblx0XHRcdHVuaS5yZWFkQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZSh7XHJcblx0XHRcdFx0Ly8g6L+Z6YeM55qEIGRldmljZUlkIOmcgOimgeW3sue7j+mAmui/hyBjcmVhdGVCTEVDb25uZWN0aW9uIOS4juWvueW6lOiuvuWkh+W7uueri+mTvuaOpVxyXG5cdFx0XHRcdGRldmljZUlkLFxyXG5cdFx0XHRcdC8vIOi/memHjOeahCBzZXJ2aWNlSWQg6ZyA6KaB5ZyoIGdldEJMRURldmljZVNlcnZpY2VzIOaOpeWPo+S4reiOt+WPllxyXG5cdFx0XHRcdHNlcnZpY2VJZCxcclxuXHRcdFx0XHQvLyDov5nph4znmoQgY2hhcmFjdGVyaXN0aWNJZCDpnIDopoHlnKggZ2V0QkxFRGV2aWNlQ2hhcmFjdGVyaXN0aWNzIOaOpeWPo+S4reiOt+WPllxyXG5cdFx0XHRcdGNoYXJhY3RlcmlzdGljSWQsXHJcblx0XHRcdFx0c3VjY2VzczogcmVzID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfor7vlj5borr7lpIfmlbDmja7lgLzmiJDlip8nKTtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0dGhpcy5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKCk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHRmYWlsKGUpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKCfor7vlj5borr7lpIfmlbDmja7lgLzlpLHotKXvvIzplJnor6/noIHvvJonICsgZS5lcnJDb2RlKTtcclxuXHRcdFx0XHRcdGlmIChlLmVyckNvZGUgIT09IDApIHtcclxuXHRcdFx0XHRcdFx0aW5pdFR5cGVzKGUuZXJyQ29kZSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdFx0dGhpcy5vbkJMRUNoYXJhY3RlcmlzdGljVmFsdWVDaGFuZ2UoKTtcclxuXHRcdH0sXHJcblx0XHRcdFx0XHRcdC8qKlxyXG5cdFx0XHRcdFx0XHRcdFx0ICog55uR5ZCs5L2O5Yqf6ICX6JOd54mZ6L+e5o6l54q25oCB55qE5pS55Y+Y5LqL5Lu244CC5YyF5ous5byA5Y+R6ICF5Li75Yqo6L+e5o6l5oiW5pat5byA6L+e5o6l77yM6K6+5aSH5Lii5aSx77yM6L+e5o6l5byC5bi45pat5byA562J562JXHJcblx0XHRcdFx0XHRcdFx0XHQgKi9cclxuXHRcdFx0XHRcdFx0XHRcdG9uQkxFQ29ubmVjdGlvblN0YXRlQ2hhbmdlKCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR1bmkub25CTEVDb25uZWN0aW9uU3RhdGVDaGFuZ2UocmVzID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQvLyDor6Xmlrnms5Xlm57osIPkuK3lj6/ku6XnlKjkuo7lpITnkIbov57mjqXmhI/lpJbmlq3lvIDnrYnlvILluLjmg4XlhrVcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZyhg6JOd54mZ6L+e5o6l54q25oCBIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tPmApO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHJlcykpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmICghcmVzLmNvbm5lY3RlZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYodGhpcy5pc1N0b3ApIHJldHVybiA7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5pat5byA5L2O5Yqf6ICX6JOd54mZ5oiQ5YqfOicpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy4kc2V0KHRoaXMuZGlzYWJsZWQsIDEsIGZhbHNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCAzLCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA0LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA1LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA2LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA3LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA4LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuJHNldCh0aGlzLmRpc2FibGVkLCA5LCB0cnVlKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VhcmNoTG9hZCA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dGhpcy5lcXVpcG1lbnQgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMuc2VydmljZXNEYXRhID0gW107XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0aGlzLmNoYXJhY3RlcmlzdGljc0RhdGEgPSBbXTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHRoaXMudmFsdWVDaGFuZ2VEYXRhID0ge307XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHR0b2FzdCgn5bey57uP5pat5byA5b2T5YmN6JOd54mZ6L+e5o6lJyk7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdFByaW50U3RyKCkge1xyXG5cdFx0XHRcdFx0XHRcdGNvbnN0IGJ1ZiA9IEJ1ZmZlci5mcm9tKFwidGhpcyBpcyB0ZXN0IGNvbnRlbnQhXCIpO1xyXG5cdFx0XHRcdFx0XHRcdC8vIHZhciBidWZmZXJzdHIgPSBidWYuYnVmZmVyOyBcclxuXHRcdFx0XHRcdFx0XHR2YXIgYnVmZmVyc3RyID0gJ0FBQUExMjM0NTY3ODkwMTIzNDU3J1xyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgbGV0IGJ1ZmZlciA9IG5ldyBBcnJheUJ1ZmZlcigyMCkgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgbGV0IGRhdGFWaWV3ID0gbmV3IERhdGFWaWV3KGJ1ZmZlcikgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoMCwgMHg0MSkgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoMSwgMHg0MSkgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoMiwgMHg0MSkgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoMywgMHg0MSkgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoNCwgMHgzMSkgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoNSwgMHgzMikgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoNiwgMHgzMykgIFxyXG5cdFx0XHRcdFx0XHQgICAgICAgICAgICAgICAgZGF0YVZpZXcuc2V0VWludDgoNywgMHgzNCkgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoOCwgMHgzNSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhVmlldy5zZXRVaW50OCg5LCAweDM2KSAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoMTAsIDB4MzcpICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhVmlldy5zZXRVaW50OCgxMSwgMHgzOCkgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgICAgZGF0YVZpZXcuc2V0VWludDgoMTIsIDB4MzkpICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRhdGFWaWV3LnNldFVpbnQ4KDEzLCAweDMwKSAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoMTQsIDB4MzEpICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgIGRhdGFWaWV3LnNldFVpbnQ4KDE1LCAweDMyKSAgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoMTYsIDB4MzMpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ZGF0YVZpZXcuc2V0VWludDgoMTcsIDB4MzQpICBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRkYXRhVmlldy5zZXRVaW50OCgxOCwgMHgzNSkgIFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRhdGFWaWV3LnNldFVpbnQ4KDE5LCAweDM2KSBcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgIFxyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHR1bmkud3JpdGVCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlKHtcclxuXHRcdFx0XHRcdFx0XHRcdGRldmljZUlkOiB0aGlzLmRldmljZUlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0c2VydmljZUlkOiB0aGlzLnNlcnZpY2VJZCxcclxuXHRcdFx0XHRcdFx0XHRcdGNoYXJhY3RlcmlzdGljSWQ6IHRoaXMuY2hhcmFjdGVyaXN0aWNzLFxyXG5cdFx0XHRcdFx0XHRcdFx0dmFsdWU6IGJ1ZmZlcixcclxuXHRcdFx0XHRcdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0IHVuaS5oaWRlTG9hZGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGZhaWw6IGZ1bmN0aW9uIChyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Y29uc29sZS5sb2coXCLmlbDmja7lj5HpgIHlpLHotKU6XCIgKyBKU09OLnN0cmluZ2lmeShyZXMpKVxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlOiBmdW5jdGlvbiAocmVzKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0XHRcdCBjb25zb2xlLmxvZyh0aGlzLmRldmljZUlkKVxyXG5cdFx0XHRcdFx0XHRcdCBjb25zb2xlLmxvZyh0aGlzLnNlcnZpY2VJZClcclxuXHRcdFx0XHRcdFx0XHQgY29uc29sZS5sb2codGhpcy5jaGFyYWN0ZXJpc3RpY3MpXHJcblx0XHRcdFx0XHRcdFx0IGNvbnNvbGUubG9nKGJ1ZmZlcilcclxuXHRcdFx0XHRcdFx0XHQgdGhpcy5ub3RpZnlCTEVDaGFyYWN0ZXJpc3RpY1ZhbHVlQ2hhbmdlKCk7XHJcblx0XHRcdFx0XHRcdFx0ICAvLyB0aGlzLm9uQkxFQ2hhcmFjdGVyaXN0aWNWYWx1ZUNoYW5nZSgpO1xyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRjbG9zZUJsdWV0b290aEFkYXB0ZXIoKXtcclxuXHRcdFx0XHRcdFx0XHR1bmkuY2xvc2VCbHVldG9vdGhBZGFwdGVyKHtcclxuXHRcdFx0XHRcdFx0XHQgIHN1Y2Nlc3M6IHJlcyA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygn5YWz6Zet6JOd54mZ6YCC6YWN5ZmoJyk7XHJcblx0XHRcdFx0XHRcdFx0ICB9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH0sXHJcblx0XHRcdFx0XHRcdG9wZW5pbmZvKCl7XHJcblx0XHRcdFx0XHRcdCAgICB1bmkucmVkaXJlY3RUbyh7XHJcblx0XHRcdFx0XHRcdCAgICB1cmw6Jy4uL2Nvbm5ldC9jb25uZXQnXHJcblx0XHRcdFx0XHRcdCAgICB9KVxyXG5cdFx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdFx0XHRcclxuXHJcblx0XHRcdFx0XHRcdGFzeW5jIHNjYW4oKSB7XHJcblx0XHRcdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRcdFx0bGV0IHN0YXR1cyA9IGF3YWl0IHRoaXMuY2hlY2tQZXJtaXNzaW9uKCk7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHN0YXR1cyAhPT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdCAgICByZXR1cm47XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdC8vICNlbmRpZlxyXG5cdFx0XHRcdFx0XHRcdHVuaS5zY2FuQ29kZSh7XHJcblx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiAocmVzKSA9PiB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdC8vbGV0IHJlc3VsdCA9IEpTT04ucGFyc2UocmVzLnJlc3VsdClcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHRsZXQgcmVzdWx0ID0gcmVzLnJlc3VsdFxyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IHJlc3VsdD1KU09OLnBhcnNlKHJlcy5yZXN1bHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnNvbGUubG9nKHJlc3VsdC5kZXZpY2VJZClcclxuXHRcdFx0XHRcdFx0XHRcdC8vXHRsZXQgbXlKU09OID0gSlNPTi5wYXJzZShyZXN1bHQuZGV2aWNlSWQpXHJcblx0XHRcdFx0XHRcdFx0XHQvL1x0Y29uc29sZS5sb2cobXlKU09OKVxyXG5cdFx0XHRcdFx0XHRcdFx0XHQvKlxyXG5cdFx0XHRcdFx0XHRcdFx0XHQgY29uc29sZS5sb2codGhpcy5yZXN1bHQpXHJcblx0XHRcdFx0XHRcdFx0XHRcdCBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdFswXSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdFsxXSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0ICAgY29uc29sZS5sb2codGhpcy5yZXN1bHRbMl0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdCAgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdFszXSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgY29uc29sZS5sb2codGhpcy5yZXN1bHRbNF0pXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0ICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdFs1XSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICBjb25zb2xlLmxvZyh0aGlzLnJlc3VsdFs2XSlcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICB0aGlzLmluaXRCbHVldG9vdGhNb2R1bGUoKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQgICAqL1xyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cdCAgd2hpbGUodGhpcy5jb25uZWN0ZWQ9PWZhbHNlKVxyXG5cdFx0XHRcdFx0XHRcdFx0Ly9cdCAge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR0aGlzLnBEZXZpY2VJbmZvPXJlcy5yZXN1bHQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IHRoaXMuY29uQmx1ZSgxLHJlcy5yZXN1bHQpXHQgXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHJcblx0XHRcdFx0XHRcdFx0XHQvL1x0ICB9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0IFxyXG5cdFx0XHRcdFx0XHRcdFx0fSxcclxuXHRcdFx0XHRcdFx0XHRcdGZhaWw6IChlcnIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8g6ZyA6KaB5rOo5oSP55qE5piv5bCP56iL5bqP5omr56CB5LiN6ZyA6KaB55Sz6K+355u45py65p2D6ZmQXHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0Ly8gI2lmZGVmIEFQUC1QTFVTXHJcblx0XHRcdFx0XHRcdCxcclxuXHRcdFx0XHRcdFx0YXN5bmMgY2hlY2tQZXJtaXNzaW9uKGNvZGUpIHtcclxuXHRcdFx0XHRcdFx0XHRsZXQgc3RhdHVzID0gcGVybWlzaW9uLmlzSU9TID8gYXdhaXQgcGVybWlzaW9uLnJlcXVlc3RJT1MoJ2NhbWVyYScpIDpcclxuXHRcdFx0XHRcdFx0XHRcdGF3YWl0IHBlcm1pc2lvbi5yZXF1ZXN0QW5kcm9pZCgnYW5kcm9pZC5wZXJtaXNzaW9uLkNBTUVSQScpO1xyXG5cdFx0XHRcdFx0XHRcclxuXHRcdFx0XHRcdFx0XHRpZiAoc3RhdHVzID09PSBudWxsIHx8IHN0YXR1cyA9PT0gMSkge1xyXG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzID0gMTtcclxuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0dW5pLnNob3dNb2RhbCh7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFwi6ZyA6KaB55u45py65p2D6ZmQXCIsXHJcblx0XHRcdFx0XHRcdFx0XHRcdGNvbmZpcm1UZXh0OiBcIuiuvue9rlwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbihyZXMpIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAocmVzLmNvbmZpcm0pIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdHBlcm1pc2lvbi5nb3RvQXBwU2V0dGluZygpO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHN0YXR1cztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHQvLyAjZW5kaWZcblx0XHR9LFxuXHRcdG9uVW5sb2FkKCkge1xuXHRcdCAgdGhpcy5jbG9zZUJsdWV0b290aEFkYXB0ZXIoKTtcblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGUgPlxuLnRvcFRpdGxle2ZvbnQtc2l6ZTogMTVweDtwYWRkaW5nOiA1cHg7Y29sb3I6ICM5OTk7dGV4dC1hbGlnbjogY2VudGVyO31cbi5kZXZpY2VMaXN0V3JhcHtoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNjBycHgpOyB9XG4uY29ubmVjdGVkU3RhdHVze3Bvc2l0aW9uOiBmaXhlZDtib3R0b206IDMwcnB4O2xlZnQ6IDE1JTt3aWR0aDogNzAlO3RleHQtYWxpZ246IGNlbnRlcjtib3JkZXItdG9wOiAxcHggc29saWQgI2VlZTt9XG4uY29uY2F0QnRue3RleHQtYWxpZ246IGNlbnRlcjttYXJnaW46IDMwcnB4IDA7fVxuLm5vd0NvbmNhdCB7bWFyZ2luOiA1cHggMDtjb2xvcjogIzMzMzt9XG4ubnBDb25jYXR7bWFyZ2luOiA1cHggMDtjb2xvcjogIzk5OTt9XHJcbi5mdC1jb2xvci1yZWR7bWFyZ2luOiA1cHggMDtjb2xvcjogIzk5OTt9XHJcbi5iZy1zZXR7cG9zaXRpb246IGZpeGVkO3dpZHRoOiAxMDAlO2hlaWdodDogMTAwJTt0b3A6IDA7bGVmdDogMDtiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNGY0O3otaW5kZXg6IC0xO31cbjwvc3R5bGU+XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///6\n");

/***/ }),
/* 7 */
/*!*********************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js ***!
  \*********************************************************************/
/*! exports provided: log, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "log", function() { return log; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return formatLog; });
function typof (v) {
  var s = Object.prototype.toString.call(v)
  return s.substring(8, s.length - 1)
}

function isDebugMode () {
  /* eslint-disable no-undef */
  return typeof __channelId__ === 'string' && __channelId__
}

function log (type) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key]
  }
  console[type].apply(console, args)
}

function formatLog () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key]
  }
  var type = args.shift()
  if (isDebugMode()) {
    args.push(args.pop().replace('at ', 'uni-app:///'))
    return console[type].apply(console, args)
  }

  var msgs = args.map(function (v) {
    var type = Object.prototype.toString.call(v).toLowerCase()

    if (type === '[object object]' || type === '[object array]') {
      try {
        v = '---BEGIN:JSON---' + JSON.stringify(v) + '---END:JSON---'
      } catch (e) {
        v = '[object object]'
      }
    } else {
      if (v === null) {
        v = '---NULL---'
      } else if (v === undefined) {
        v = '---UNDEFINED---'
      } else {
        var vType = typof(v).toUpperCase()

        if (vType === 'NUMBER' || vType === 'BOOLEAN') {
          v = '---BEGIN:' + vType + '---' + v + '---END:' + vType + '---'
        } else {
          v = String(v)
        }
      }
    }

    return v
  })
  var msg = ''

  if (msgs.length > 1) {
    var lastMsg = msgs.pop()
    msg = msgs.join('---COMMA---')

    if (lastMsg.indexOf(' at ') === 0) {
      msg += lastMsg
    } else {
      msg += '---COMMA---' + lastMsg
    }
  } else {
    msg = msgs[0]
  }

  console[type](msg)
}


/***/ }),
/* 8 */
/*!**************************************!*\
  !*** ./node_modules/buffer/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {/*!
 * The buffer module from node.js, for the browser.
 *
 * @author   Feross Aboukhadijeh <http://feross.org>
 * @license  MIT
 */
/* eslint-disable no-proto */



var base64 = __webpack_require__(/*! base64-js */ 10)
var ieee754 = __webpack_require__(/*! ieee754 */ 11)
var isArray = __webpack_require__(/*! isarray */ 12)

exports.Buffer = Buffer
exports.SlowBuffer = SlowBuffer
exports.INSPECT_MAX_BYTES = 50

/**
 * If `Buffer.TYPED_ARRAY_SUPPORT`:
 *   === true    Use Uint8Array implementation (fastest)
 *   === false   Use Object implementation (most compatible, even IE6)
 *
 * Browsers that support typed arrays are IE 10+, Firefox 4+, Chrome 7+, Safari 5.1+,
 * Opera 11.6+, iOS 4.2+.
 *
 * Due to various browser bugs, sometimes the Object implementation will be used even
 * when the browser supports typed arrays.
 *
 * Note:
 *
 *   - Firefox 4-29 lacks support for adding new properties to `Uint8Array` instances,
 *     See: https://bugzilla.mozilla.org/show_bug.cgi?id=695438.
 *
 *   - Chrome 9-10 is missing the `TypedArray.prototype.subarray` function.
 *
 *   - IE10 has a broken `TypedArray.prototype.subarray` function which returns arrays of
 *     incorrect length in some situations.

 * We detect these buggy browsers and set `Buffer.TYPED_ARRAY_SUPPORT` to `false` so they
 * get the Object implementation, which is slower but behaves correctly.
 */
Buffer.TYPED_ARRAY_SUPPORT = global.TYPED_ARRAY_SUPPORT !== undefined
  ? global.TYPED_ARRAY_SUPPORT
  : typedArraySupport()

/*
 * Export kMaxLength after typed array support is determined.
 */
exports.kMaxLength = kMaxLength()

function typedArraySupport () {
  try {
    var arr = new Uint8Array(1)
    arr.__proto__ = {__proto__: Uint8Array.prototype, foo: function () { return 42 }}
    return arr.foo() === 42 && // typed array instances can be augmented
        typeof arr.subarray === 'function' && // chrome 9-10 lack `subarray`
        arr.subarray(1, 1).byteLength === 0 // ie10 has broken `subarray`
  } catch (e) {
    return false
  }
}

function kMaxLength () {
  return Buffer.TYPED_ARRAY_SUPPORT
    ? 0x7fffffff
    : 0x3fffffff
}

function createBuffer (that, length) {
  if (kMaxLength() < length) {
    throw new RangeError('Invalid typed array length')
  }
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = new Uint8Array(length)
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    if (that === null) {
      that = new Buffer(length)
    }
    that.length = length
  }

  return that
}

/**
 * The Buffer constructor returns instances of `Uint8Array` that have their
 * prototype changed to `Buffer.prototype`. Furthermore, `Buffer` is a subclass of
 * `Uint8Array`, so the returned instances will have all the node `Buffer` methods
 * and the `Uint8Array` methods. Square bracket notation works as expected -- it
 * returns a single octet.
 *
 * The `Uint8Array` prototype remains unmodified.
 */

function Buffer (arg, encodingOrOffset, length) {
  if (!Buffer.TYPED_ARRAY_SUPPORT && !(this instanceof Buffer)) {
    return new Buffer(arg, encodingOrOffset, length)
  }

  // Common case.
  if (typeof arg === 'number') {
    if (typeof encodingOrOffset === 'string') {
      throw new Error(
        'If encoding is specified then the first argument must be a string'
      )
    }
    return allocUnsafe(this, arg)
  }
  return from(this, arg, encodingOrOffset, length)
}

Buffer.poolSize = 8192 // not used by this implementation

// TODO: Legacy, not needed anymore. Remove in next major version.
Buffer._augment = function (arr) {
  arr.__proto__ = Buffer.prototype
  return arr
}

function from (that, value, encodingOrOffset, length) {
  if (typeof value === 'number') {
    throw new TypeError('"value" argument must not be a number')
  }

  if (typeof ArrayBuffer !== 'undefined' && value instanceof ArrayBuffer) {
    return fromArrayBuffer(that, value, encodingOrOffset, length)
  }

  if (typeof value === 'string') {
    return fromString(that, value, encodingOrOffset)
  }

  return fromObject(that, value)
}

/**
 * Functionally equivalent to Buffer(arg, encoding) but throws a TypeError
 * if value is a number.
 * Buffer.from(str[, encoding])
 * Buffer.from(array)
 * Buffer.from(buffer)
 * Buffer.from(arrayBuffer[, byteOffset[, length]])
 **/
Buffer.from = function (value, encodingOrOffset, length) {
  return from(null, value, encodingOrOffset, length)
}

if (Buffer.TYPED_ARRAY_SUPPORT) {
  Buffer.prototype.__proto__ = Uint8Array.prototype
  Buffer.__proto__ = Uint8Array
  if (typeof Symbol !== 'undefined' && Symbol.species &&
      Buffer[Symbol.species] === Buffer) {
    // Fix subarray() in ES2016. See: https://github.com/feross/buffer/pull/97
    Object.defineProperty(Buffer, Symbol.species, {
      value: null,
      configurable: true
    })
  }
}

function assertSize (size) {
  if (typeof size !== 'number') {
    throw new TypeError('"size" argument must be a number')
  } else if (size < 0) {
    throw new RangeError('"size" argument must not be negative')
  }
}

function alloc (that, size, fill, encoding) {
  assertSize(size)
  if (size <= 0) {
    return createBuffer(that, size)
  }
  if (fill !== undefined) {
    // Only pay attention to encoding if it's a string. This
    // prevents accidentally sending in a number that would
    // be interpretted as a start offset.
    return typeof encoding === 'string'
      ? createBuffer(that, size).fill(fill, encoding)
      : createBuffer(that, size).fill(fill)
  }
  return createBuffer(that, size)
}

/**
 * Creates a new filled Buffer instance.
 * alloc(size[, fill[, encoding]])
 **/
Buffer.alloc = function (size, fill, encoding) {
  return alloc(null, size, fill, encoding)
}

function allocUnsafe (that, size) {
  assertSize(size)
  that = createBuffer(that, size < 0 ? 0 : checked(size) | 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) {
    for (var i = 0; i < size; ++i) {
      that[i] = 0
    }
  }
  return that
}

/**
 * Equivalent to Buffer(num), by default creates a non-zero-filled Buffer instance.
 * */
Buffer.allocUnsafe = function (size) {
  return allocUnsafe(null, size)
}
/**
 * Equivalent to SlowBuffer(num), by default creates a non-zero-filled Buffer instance.
 */
Buffer.allocUnsafeSlow = function (size) {
  return allocUnsafe(null, size)
}

function fromString (that, string, encoding) {
  if (typeof encoding !== 'string' || encoding === '') {
    encoding = 'utf8'
  }

  if (!Buffer.isEncoding(encoding)) {
    throw new TypeError('"encoding" must be a valid string encoding')
  }

  var length = byteLength(string, encoding) | 0
  that = createBuffer(that, length)

  var actual = that.write(string, encoding)

  if (actual !== length) {
    // Writing a hex string, for example, that contains invalid characters will
    // cause everything after the first invalid character to be ignored. (e.g.
    // 'abxxcd' will be treated as 'ab')
    that = that.slice(0, actual)
  }

  return that
}

function fromArrayLike (that, array) {
  var length = array.length < 0 ? 0 : checked(array.length) | 0
  that = createBuffer(that, length)
  for (var i = 0; i < length; i += 1) {
    that[i] = array[i] & 255
  }
  return that
}

function fromArrayBuffer (that, array, byteOffset, length) {
  array.byteLength // this throws if `array` is not a valid ArrayBuffer

  if (byteOffset < 0 || array.byteLength < byteOffset) {
    throw new RangeError('\'offset\' is out of bounds')
  }

  if (array.byteLength < byteOffset + (length || 0)) {
    throw new RangeError('\'length\' is out of bounds')
  }

  if (byteOffset === undefined && length === undefined) {
    array = new Uint8Array(array)
  } else if (length === undefined) {
    array = new Uint8Array(array, byteOffset)
  } else {
    array = new Uint8Array(array, byteOffset, length)
  }

  if (Buffer.TYPED_ARRAY_SUPPORT) {
    // Return an augmented `Uint8Array` instance, for best performance
    that = array
    that.__proto__ = Buffer.prototype
  } else {
    // Fallback: Return an object instance of the Buffer class
    that = fromArrayLike(that, array)
  }
  return that
}

function fromObject (that, obj) {
  if (Buffer.isBuffer(obj)) {
    var len = checked(obj.length) | 0
    that = createBuffer(that, len)

    if (that.length === 0) {
      return that
    }

    obj.copy(that, 0, 0, len)
    return that
  }

  if (obj) {
    if ((typeof ArrayBuffer !== 'undefined' &&
        obj.buffer instanceof ArrayBuffer) || 'length' in obj) {
      if (typeof obj.length !== 'number' || isnan(obj.length)) {
        return createBuffer(that, 0)
      }
      return fromArrayLike(that, obj)
    }

    if (obj.type === 'Buffer' && isArray(obj.data)) {
      return fromArrayLike(that, obj.data)
    }
  }

  throw new TypeError('First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.')
}

function checked (length) {
  // Note: cannot use `length < kMaxLength()` here because that fails when
  // length is NaN (which is otherwise coerced to zero.)
  if (length >= kMaxLength()) {
    throw new RangeError('Attempt to allocate Buffer larger than maximum ' +
                         'size: 0x' + kMaxLength().toString(16) + ' bytes')
  }
  return length | 0
}

function SlowBuffer (length) {
  if (+length != length) { // eslint-disable-line eqeqeq
    length = 0
  }
  return Buffer.alloc(+length)
}

Buffer.isBuffer = function isBuffer (b) {
  return !!(b != null && b._isBuffer)
}

Buffer.compare = function compare (a, b) {
  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {
    throw new TypeError('Arguments must be Buffers')
  }

  if (a === b) return 0

  var x = a.length
  var y = b.length

  for (var i = 0, len = Math.min(x, y); i < len; ++i) {
    if (a[i] !== b[i]) {
      x = a[i]
      y = b[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

Buffer.isEncoding = function isEncoding (encoding) {
  switch (String(encoding).toLowerCase()) {
    case 'hex':
    case 'utf8':
    case 'utf-8':
    case 'ascii':
    case 'latin1':
    case 'binary':
    case 'base64':
    case 'ucs2':
    case 'ucs-2':
    case 'utf16le':
    case 'utf-16le':
      return true
    default:
      return false
  }
}

Buffer.concat = function concat (list, length) {
  if (!isArray(list)) {
    throw new TypeError('"list" argument must be an Array of Buffers')
  }

  if (list.length === 0) {
    return Buffer.alloc(0)
  }

  var i
  if (length === undefined) {
    length = 0
    for (i = 0; i < list.length; ++i) {
      length += list[i].length
    }
  }

  var buffer = Buffer.allocUnsafe(length)
  var pos = 0
  for (i = 0; i < list.length; ++i) {
    var buf = list[i]
    if (!Buffer.isBuffer(buf)) {
      throw new TypeError('"list" argument must be an Array of Buffers')
    }
    buf.copy(buffer, pos)
    pos += buf.length
  }
  return buffer
}

function byteLength (string, encoding) {
  if (Buffer.isBuffer(string)) {
    return string.length
  }
  if (typeof ArrayBuffer !== 'undefined' && typeof ArrayBuffer.isView === 'function' &&
      (ArrayBuffer.isView(string) || string instanceof ArrayBuffer)) {
    return string.byteLength
  }
  if (typeof string !== 'string') {
    string = '' + string
  }

  var len = string.length
  if (len === 0) return 0

  // Use a for loop to avoid recursion
  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'ascii':
      case 'latin1':
      case 'binary':
        return len
      case 'utf8':
      case 'utf-8':
      case undefined:
        return utf8ToBytes(string).length
      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return len * 2
      case 'hex':
        return len >>> 1
      case 'base64':
        return base64ToBytes(string).length
      default:
        if (loweredCase) return utf8ToBytes(string).length // assume utf8
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}
Buffer.byteLength = byteLength

function slowToString (encoding, start, end) {
  var loweredCase = false

  // No need to verify that "this.length <= MAX_UINT32" since it's a read-only
  // property of a typed array.

  // This behaves neither like String nor Uint8Array in that we set start/end
  // to their upper/lower bounds if the value passed is out of range.
  // undefined is handled specially as per ECMA-262 6th Edition,
  // Section 13.3.3.7 Runtime Semantics: KeyedBindingInitialization.
  if (start === undefined || start < 0) {
    start = 0
  }
  // Return early if start > this.length. Done here to prevent potential uint32
  // coercion fail below.
  if (start > this.length) {
    return ''
  }

  if (end === undefined || end > this.length) {
    end = this.length
  }

  if (end <= 0) {
    return ''
  }

  // Force coersion to uint32. This will also coerce falsey/NaN values to 0.
  end >>>= 0
  start >>>= 0

  if (end <= start) {
    return ''
  }

  if (!encoding) encoding = 'utf8'

  while (true) {
    switch (encoding) {
      case 'hex':
        return hexSlice(this, start, end)

      case 'utf8':
      case 'utf-8':
        return utf8Slice(this, start, end)

      case 'ascii':
        return asciiSlice(this, start, end)

      case 'latin1':
      case 'binary':
        return latin1Slice(this, start, end)

      case 'base64':
        return base64Slice(this, start, end)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return utf16leSlice(this, start, end)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = (encoding + '').toLowerCase()
        loweredCase = true
    }
  }
}

// The property is used by `Buffer.isBuffer` and `is-buffer` (in Safari 5-7) to detect
// Buffer instances.
Buffer.prototype._isBuffer = true

function swap (b, n, m) {
  var i = b[n]
  b[n] = b[m]
  b[m] = i
}

Buffer.prototype.swap16 = function swap16 () {
  var len = this.length
  if (len % 2 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 16-bits')
  }
  for (var i = 0; i < len; i += 2) {
    swap(this, i, i + 1)
  }
  return this
}

Buffer.prototype.swap32 = function swap32 () {
  var len = this.length
  if (len % 4 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 32-bits')
  }
  for (var i = 0; i < len; i += 4) {
    swap(this, i, i + 3)
    swap(this, i + 1, i + 2)
  }
  return this
}

Buffer.prototype.swap64 = function swap64 () {
  var len = this.length
  if (len % 8 !== 0) {
    throw new RangeError('Buffer size must be a multiple of 64-bits')
  }
  for (var i = 0; i < len; i += 8) {
    swap(this, i, i + 7)
    swap(this, i + 1, i + 6)
    swap(this, i + 2, i + 5)
    swap(this, i + 3, i + 4)
  }
  return this
}

Buffer.prototype.toString = function toString () {
  var length = this.length | 0
  if (length === 0) return ''
  if (arguments.length === 0) return utf8Slice(this, 0, length)
  return slowToString.apply(this, arguments)
}

Buffer.prototype.equals = function equals (b) {
  if (!Buffer.isBuffer(b)) throw new TypeError('Argument must be a Buffer')
  if (this === b) return true
  return Buffer.compare(this, b) === 0
}

Buffer.prototype.inspect = function inspect () {
  var str = ''
  var max = exports.INSPECT_MAX_BYTES
  if (this.length > 0) {
    str = this.toString('hex', 0, max).match(/.{2}/g).join(' ')
    if (this.length > max) str += ' ... '
  }
  return '<Buffer ' + str + '>'
}

Buffer.prototype.compare = function compare (target, start, end, thisStart, thisEnd) {
  if (!Buffer.isBuffer(target)) {
    throw new TypeError('Argument must be a Buffer')
  }

  if (start === undefined) {
    start = 0
  }
  if (end === undefined) {
    end = target ? target.length : 0
  }
  if (thisStart === undefined) {
    thisStart = 0
  }
  if (thisEnd === undefined) {
    thisEnd = this.length
  }

  if (start < 0 || end > target.length || thisStart < 0 || thisEnd > this.length) {
    throw new RangeError('out of range index')
  }

  if (thisStart >= thisEnd && start >= end) {
    return 0
  }
  if (thisStart >= thisEnd) {
    return -1
  }
  if (start >= end) {
    return 1
  }

  start >>>= 0
  end >>>= 0
  thisStart >>>= 0
  thisEnd >>>= 0

  if (this === target) return 0

  var x = thisEnd - thisStart
  var y = end - start
  var len = Math.min(x, y)

  var thisCopy = this.slice(thisStart, thisEnd)
  var targetCopy = target.slice(start, end)

  for (var i = 0; i < len; ++i) {
    if (thisCopy[i] !== targetCopy[i]) {
      x = thisCopy[i]
      y = targetCopy[i]
      break
    }
  }

  if (x < y) return -1
  if (y < x) return 1
  return 0
}

// Finds either the first index of `val` in `buffer` at offset >= `byteOffset`,
// OR the last index of `val` in `buffer` at offset <= `byteOffset`.
//
// Arguments:
// - buffer - a Buffer to search
// - val - a string, Buffer, or number
// - byteOffset - an index into `buffer`; will be clamped to an int32
// - encoding - an optional encoding, relevant is val is a string
// - dir - true for indexOf, false for lastIndexOf
function bidirectionalIndexOf (buffer, val, byteOffset, encoding, dir) {
  // Empty buffer means no match
  if (buffer.length === 0) return -1

  // Normalize byteOffset
  if (typeof byteOffset === 'string') {
    encoding = byteOffset
    byteOffset = 0
  } else if (byteOffset > 0x7fffffff) {
    byteOffset = 0x7fffffff
  } else if (byteOffset < -0x80000000) {
    byteOffset = -0x80000000
  }
  byteOffset = +byteOffset  // Coerce to Number.
  if (isNaN(byteOffset)) {
    // byteOffset: it it's undefined, null, NaN, "foo", etc, search whole buffer
    byteOffset = dir ? 0 : (buffer.length - 1)
  }

  // Normalize byteOffset: negative offsets start from the end of the buffer
  if (byteOffset < 0) byteOffset = buffer.length + byteOffset
  if (byteOffset >= buffer.length) {
    if (dir) return -1
    else byteOffset = buffer.length - 1
  } else if (byteOffset < 0) {
    if (dir) byteOffset = 0
    else return -1
  }

  // Normalize val
  if (typeof val === 'string') {
    val = Buffer.from(val, encoding)
  }

  // Finally, search either indexOf (if dir is true) or lastIndexOf
  if (Buffer.isBuffer(val)) {
    // Special case: looking for empty string/buffer always fails
    if (val.length === 0) {
      return -1
    }
    return arrayIndexOf(buffer, val, byteOffset, encoding, dir)
  } else if (typeof val === 'number') {
    val = val & 0xFF // Search for a byte value [0-255]
    if (Buffer.TYPED_ARRAY_SUPPORT &&
        typeof Uint8Array.prototype.indexOf === 'function') {
      if (dir) {
        return Uint8Array.prototype.indexOf.call(buffer, val, byteOffset)
      } else {
        return Uint8Array.prototype.lastIndexOf.call(buffer, val, byteOffset)
      }
    }
    return arrayIndexOf(buffer, [ val ], byteOffset, encoding, dir)
  }

  throw new TypeError('val must be string, number or Buffer')
}

function arrayIndexOf (arr, val, byteOffset, encoding, dir) {
  var indexSize = 1
  var arrLength = arr.length
  var valLength = val.length

  if (encoding !== undefined) {
    encoding = String(encoding).toLowerCase()
    if (encoding === 'ucs2' || encoding === 'ucs-2' ||
        encoding === 'utf16le' || encoding === 'utf-16le') {
      if (arr.length < 2 || val.length < 2) {
        return -1
      }
      indexSize = 2
      arrLength /= 2
      valLength /= 2
      byteOffset /= 2
    }
  }

  function read (buf, i) {
    if (indexSize === 1) {
      return buf[i]
    } else {
      return buf.readUInt16BE(i * indexSize)
    }
  }

  var i
  if (dir) {
    var foundIndex = -1
    for (i = byteOffset; i < arrLength; i++) {
      if (read(arr, i) === read(val, foundIndex === -1 ? 0 : i - foundIndex)) {
        if (foundIndex === -1) foundIndex = i
        if (i - foundIndex + 1 === valLength) return foundIndex * indexSize
      } else {
        if (foundIndex !== -1) i -= i - foundIndex
        foundIndex = -1
      }
    }
  } else {
    if (byteOffset + valLength > arrLength) byteOffset = arrLength - valLength
    for (i = byteOffset; i >= 0; i--) {
      var found = true
      for (var j = 0; j < valLength; j++) {
        if (read(arr, i + j) !== read(val, j)) {
          found = false
          break
        }
      }
      if (found) return i
    }
  }

  return -1
}

Buffer.prototype.includes = function includes (val, byteOffset, encoding) {
  return this.indexOf(val, byteOffset, encoding) !== -1
}

Buffer.prototype.indexOf = function indexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, true)
}

Buffer.prototype.lastIndexOf = function lastIndexOf (val, byteOffset, encoding) {
  return bidirectionalIndexOf(this, val, byteOffset, encoding, false)
}

function hexWrite (buf, string, offset, length) {
  offset = Number(offset) || 0
  var remaining = buf.length - offset
  if (!length) {
    length = remaining
  } else {
    length = Number(length)
    if (length > remaining) {
      length = remaining
    }
  }

  // must be an even number of digits
  var strLen = string.length
  if (strLen % 2 !== 0) throw new TypeError('Invalid hex string')

  if (length > strLen / 2) {
    length = strLen / 2
  }
  for (var i = 0; i < length; ++i) {
    var parsed = parseInt(string.substr(i * 2, 2), 16)
    if (isNaN(parsed)) return i
    buf[offset + i] = parsed
  }
  return i
}

function utf8Write (buf, string, offset, length) {
  return blitBuffer(utf8ToBytes(string, buf.length - offset), buf, offset, length)
}

function asciiWrite (buf, string, offset, length) {
  return blitBuffer(asciiToBytes(string), buf, offset, length)
}

function latin1Write (buf, string, offset, length) {
  return asciiWrite(buf, string, offset, length)
}

function base64Write (buf, string, offset, length) {
  return blitBuffer(base64ToBytes(string), buf, offset, length)
}

function ucs2Write (buf, string, offset, length) {
  return blitBuffer(utf16leToBytes(string, buf.length - offset), buf, offset, length)
}

Buffer.prototype.write = function write (string, offset, length, encoding) {
  // Buffer#write(string)
  if (offset === undefined) {
    encoding = 'utf8'
    length = this.length
    offset = 0
  // Buffer#write(string, encoding)
  } else if (length === undefined && typeof offset === 'string') {
    encoding = offset
    length = this.length
    offset = 0
  // Buffer#write(string, offset[, length][, encoding])
  } else if (isFinite(offset)) {
    offset = offset | 0
    if (isFinite(length)) {
      length = length | 0
      if (encoding === undefined) encoding = 'utf8'
    } else {
      encoding = length
      length = undefined
    }
  // legacy write(string, encoding, offset, length) - remove in v0.13
  } else {
    throw new Error(
      'Buffer.write(string, encoding, offset[, length]) is no longer supported'
    )
  }

  var remaining = this.length - offset
  if (length === undefined || length > remaining) length = remaining

  if ((string.length > 0 && (length < 0 || offset < 0)) || offset > this.length) {
    throw new RangeError('Attempt to write outside buffer bounds')
  }

  if (!encoding) encoding = 'utf8'

  var loweredCase = false
  for (;;) {
    switch (encoding) {
      case 'hex':
        return hexWrite(this, string, offset, length)

      case 'utf8':
      case 'utf-8':
        return utf8Write(this, string, offset, length)

      case 'ascii':
        return asciiWrite(this, string, offset, length)

      case 'latin1':
      case 'binary':
        return latin1Write(this, string, offset, length)

      case 'base64':
        // Warning: maxLength not taken into account in base64Write
        return base64Write(this, string, offset, length)

      case 'ucs2':
      case 'ucs-2':
      case 'utf16le':
      case 'utf-16le':
        return ucs2Write(this, string, offset, length)

      default:
        if (loweredCase) throw new TypeError('Unknown encoding: ' + encoding)
        encoding = ('' + encoding).toLowerCase()
        loweredCase = true
    }
  }
}

Buffer.prototype.toJSON = function toJSON () {
  return {
    type: 'Buffer',
    data: Array.prototype.slice.call(this._arr || this, 0)
  }
}

function base64Slice (buf, start, end) {
  if (start === 0 && end === buf.length) {
    return base64.fromByteArray(buf)
  } else {
    return base64.fromByteArray(buf.slice(start, end))
  }
}

function utf8Slice (buf, start, end) {
  end = Math.min(buf.length, end)
  var res = []

  var i = start
  while (i < end) {
    var firstByte = buf[i]
    var codePoint = null
    var bytesPerSequence = (firstByte > 0xEF) ? 4
      : (firstByte > 0xDF) ? 3
      : (firstByte > 0xBF) ? 2
      : 1

    if (i + bytesPerSequence <= end) {
      var secondByte, thirdByte, fourthByte, tempCodePoint

      switch (bytesPerSequence) {
        case 1:
          if (firstByte < 0x80) {
            codePoint = firstByte
          }
          break
        case 2:
          secondByte = buf[i + 1]
          if ((secondByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0x1F) << 0x6 | (secondByte & 0x3F)
            if (tempCodePoint > 0x7F) {
              codePoint = tempCodePoint
            }
          }
          break
        case 3:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0xC | (secondByte & 0x3F) << 0x6 | (thirdByte & 0x3F)
            if (tempCodePoint > 0x7FF && (tempCodePoint < 0xD800 || tempCodePoint > 0xDFFF)) {
              codePoint = tempCodePoint
            }
          }
          break
        case 4:
          secondByte = buf[i + 1]
          thirdByte = buf[i + 2]
          fourthByte = buf[i + 3]
          if ((secondByte & 0xC0) === 0x80 && (thirdByte & 0xC0) === 0x80 && (fourthByte & 0xC0) === 0x80) {
            tempCodePoint = (firstByte & 0xF) << 0x12 | (secondByte & 0x3F) << 0xC | (thirdByte & 0x3F) << 0x6 | (fourthByte & 0x3F)
            if (tempCodePoint > 0xFFFF && tempCodePoint < 0x110000) {
              codePoint = tempCodePoint
            }
          }
      }
    }

    if (codePoint === null) {
      // we did not generate a valid codePoint so insert a
      // replacement char (U+FFFD) and advance only 1 byte
      codePoint = 0xFFFD
      bytesPerSequence = 1
    } else if (codePoint > 0xFFFF) {
      // encode to utf16 (surrogate pair dance)
      codePoint -= 0x10000
      res.push(codePoint >>> 10 & 0x3FF | 0xD800)
      codePoint = 0xDC00 | codePoint & 0x3FF
    }

    res.push(codePoint)
    i += bytesPerSequence
  }

  return decodeCodePointsArray(res)
}

// Based on http://stackoverflow.com/a/22747272/680742, the browser with
// the lowest limit is Chrome, with 0x10000 args.
// We go 1 magnitude less, for safety
var MAX_ARGUMENTS_LENGTH = 0x1000

function decodeCodePointsArray (codePoints) {
  var len = codePoints.length
  if (len <= MAX_ARGUMENTS_LENGTH) {
    return String.fromCharCode.apply(String, codePoints) // avoid extra slice()
  }

  // Decode in chunks to avoid "call stack size exceeded".
  var res = ''
  var i = 0
  while (i < len) {
    res += String.fromCharCode.apply(
      String,
      codePoints.slice(i, i += MAX_ARGUMENTS_LENGTH)
    )
  }
  return res
}

function asciiSlice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i] & 0x7F)
  }
  return ret
}

function latin1Slice (buf, start, end) {
  var ret = ''
  end = Math.min(buf.length, end)

  for (var i = start; i < end; ++i) {
    ret += String.fromCharCode(buf[i])
  }
  return ret
}

function hexSlice (buf, start, end) {
  var len = buf.length

  if (!start || start < 0) start = 0
  if (!end || end < 0 || end > len) end = len

  var out = ''
  for (var i = start; i < end; ++i) {
    out += toHex(buf[i])
  }
  return out
}

function utf16leSlice (buf, start, end) {
  var bytes = buf.slice(start, end)
  var res = ''
  for (var i = 0; i < bytes.length; i += 2) {
    res += String.fromCharCode(bytes[i] + bytes[i + 1] * 256)
  }
  return res
}

Buffer.prototype.slice = function slice (start, end) {
  var len = this.length
  start = ~~start
  end = end === undefined ? len : ~~end

  if (start < 0) {
    start += len
    if (start < 0) start = 0
  } else if (start > len) {
    start = len
  }

  if (end < 0) {
    end += len
    if (end < 0) end = 0
  } else if (end > len) {
    end = len
  }

  if (end < start) end = start

  var newBuf
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    newBuf = this.subarray(start, end)
    newBuf.__proto__ = Buffer.prototype
  } else {
    var sliceLen = end - start
    newBuf = new Buffer(sliceLen, undefined)
    for (var i = 0; i < sliceLen; ++i) {
      newBuf[i] = this[i + start]
    }
  }

  return newBuf
}

/*
 * Need to make sure that buffer isn't trying to write out of bounds.
 */
function checkOffset (offset, ext, length) {
  if ((offset % 1) !== 0 || offset < 0) throw new RangeError('offset is not uint')
  if (offset + ext > length) throw new RangeError('Trying to access beyond buffer length')
}

Buffer.prototype.readUIntLE = function readUIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }

  return val
}

Buffer.prototype.readUIntBE = function readUIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    checkOffset(offset, byteLength, this.length)
  }

  var val = this[offset + --byteLength]
  var mul = 1
  while (byteLength > 0 && (mul *= 0x100)) {
    val += this[offset + --byteLength] * mul
  }

  return val
}

Buffer.prototype.readUInt8 = function readUInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  return this[offset]
}

Buffer.prototype.readUInt16LE = function readUInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return this[offset] | (this[offset + 1] << 8)
}

Buffer.prototype.readUInt16BE = function readUInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  return (this[offset] << 8) | this[offset + 1]
}

Buffer.prototype.readUInt32LE = function readUInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return ((this[offset]) |
      (this[offset + 1] << 8) |
      (this[offset + 2] << 16)) +
      (this[offset + 3] * 0x1000000)
}

Buffer.prototype.readUInt32BE = function readUInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] * 0x1000000) +
    ((this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    this[offset + 3])
}

Buffer.prototype.readIntLE = function readIntLE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var val = this[offset]
  var mul = 1
  var i = 0
  while (++i < byteLength && (mul *= 0x100)) {
    val += this[offset + i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readIntBE = function readIntBE (offset, byteLength, noAssert) {
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) checkOffset(offset, byteLength, this.length)

  var i = byteLength
  var mul = 1
  var val = this[offset + --i]
  while (i > 0 && (mul *= 0x100)) {
    val += this[offset + --i] * mul
  }
  mul *= 0x80

  if (val >= mul) val -= Math.pow(2, 8 * byteLength)

  return val
}

Buffer.prototype.readInt8 = function readInt8 (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 1, this.length)
  if (!(this[offset] & 0x80)) return (this[offset])
  return ((0xff - this[offset] + 1) * -1)
}

Buffer.prototype.readInt16LE = function readInt16LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset] | (this[offset + 1] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt16BE = function readInt16BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 2, this.length)
  var val = this[offset + 1] | (this[offset] << 8)
  return (val & 0x8000) ? val | 0xFFFF0000 : val
}

Buffer.prototype.readInt32LE = function readInt32LE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset]) |
    (this[offset + 1] << 8) |
    (this[offset + 2] << 16) |
    (this[offset + 3] << 24)
}

Buffer.prototype.readInt32BE = function readInt32BE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)

  return (this[offset] << 24) |
    (this[offset + 1] << 16) |
    (this[offset + 2] << 8) |
    (this[offset + 3])
}

Buffer.prototype.readFloatLE = function readFloatLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, true, 23, 4)
}

Buffer.prototype.readFloatBE = function readFloatBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 4, this.length)
  return ieee754.read(this, offset, false, 23, 4)
}

Buffer.prototype.readDoubleLE = function readDoubleLE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, true, 52, 8)
}

Buffer.prototype.readDoubleBE = function readDoubleBE (offset, noAssert) {
  if (!noAssert) checkOffset(offset, 8, this.length)
  return ieee754.read(this, offset, false, 52, 8)
}

function checkInt (buf, value, offset, ext, max, min) {
  if (!Buffer.isBuffer(buf)) throw new TypeError('"buffer" argument must be a Buffer instance')
  if (value > max || value < min) throw new RangeError('"value" argument is out of bounds')
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
}

Buffer.prototype.writeUIntLE = function writeUIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var mul = 1
  var i = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUIntBE = function writeUIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  byteLength = byteLength | 0
  if (!noAssert) {
    var maxBytes = Math.pow(2, 8 * byteLength) - 1
    checkInt(this, value, offset, byteLength, maxBytes, 0)
  }

  var i = byteLength - 1
  var mul = 1
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    this[offset + i] = (value / mul) & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeUInt8 = function writeUInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0xff, 0)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  this[offset] = (value & 0xff)
  return offset + 1
}

function objectWriteUInt16 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 2); i < j; ++i) {
    buf[offset + i] = (value & (0xff << (8 * (littleEndian ? i : 1 - i)))) >>>
      (littleEndian ? i : 1 - i) * 8
  }
}

Buffer.prototype.writeUInt16LE = function writeUInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeUInt16BE = function writeUInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0xffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

function objectWriteUInt32 (buf, value, offset, littleEndian) {
  if (value < 0) value = 0xffffffff + value + 1
  for (var i = 0, j = Math.min(buf.length - offset, 4); i < j; ++i) {
    buf[offset + i] = (value >>> (littleEndian ? i : 3 - i) * 8) & 0xff
  }
}

Buffer.prototype.writeUInt32LE = function writeUInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset + 3] = (value >>> 24)
    this[offset + 2] = (value >>> 16)
    this[offset + 1] = (value >>> 8)
    this[offset] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeUInt32BE = function writeUInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0xffffffff, 0)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

Buffer.prototype.writeIntLE = function writeIntLE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = 0
  var mul = 1
  var sub = 0
  this[offset] = value & 0xFF
  while (++i < byteLength && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i - 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeIntBE = function writeIntBE (value, offset, byteLength, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) {
    var limit = Math.pow(2, 8 * byteLength - 1)

    checkInt(this, value, offset, byteLength, limit - 1, -limit)
  }

  var i = byteLength - 1
  var mul = 1
  var sub = 0
  this[offset + i] = value & 0xFF
  while (--i >= 0 && (mul *= 0x100)) {
    if (value < 0 && sub === 0 && this[offset + i + 1] !== 0) {
      sub = 1
    }
    this[offset + i] = ((value / mul) >> 0) - sub & 0xFF
  }

  return offset + byteLength
}

Buffer.prototype.writeInt8 = function writeInt8 (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 1, 0x7f, -0x80)
  if (!Buffer.TYPED_ARRAY_SUPPORT) value = Math.floor(value)
  if (value < 0) value = 0xff + value + 1
  this[offset] = (value & 0xff)
  return offset + 1
}

Buffer.prototype.writeInt16LE = function writeInt16LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
  } else {
    objectWriteUInt16(this, value, offset, true)
  }
  return offset + 2
}

Buffer.prototype.writeInt16BE = function writeInt16BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 2, 0x7fff, -0x8000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 8)
    this[offset + 1] = (value & 0xff)
  } else {
    objectWriteUInt16(this, value, offset, false)
  }
  return offset + 2
}

Buffer.prototype.writeInt32LE = function writeInt32LE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value & 0xff)
    this[offset + 1] = (value >>> 8)
    this[offset + 2] = (value >>> 16)
    this[offset + 3] = (value >>> 24)
  } else {
    objectWriteUInt32(this, value, offset, true)
  }
  return offset + 4
}

Buffer.prototype.writeInt32BE = function writeInt32BE (value, offset, noAssert) {
  value = +value
  offset = offset | 0
  if (!noAssert) checkInt(this, value, offset, 4, 0x7fffffff, -0x80000000)
  if (value < 0) value = 0xffffffff + value + 1
  if (Buffer.TYPED_ARRAY_SUPPORT) {
    this[offset] = (value >>> 24)
    this[offset + 1] = (value >>> 16)
    this[offset + 2] = (value >>> 8)
    this[offset + 3] = (value & 0xff)
  } else {
    objectWriteUInt32(this, value, offset, false)
  }
  return offset + 4
}

function checkIEEE754 (buf, value, offset, ext, max, min) {
  if (offset + ext > buf.length) throw new RangeError('Index out of range')
  if (offset < 0) throw new RangeError('Index out of range')
}

function writeFloat (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 4, 3.4028234663852886e+38, -3.4028234663852886e+38)
  }
  ieee754.write(buf, value, offset, littleEndian, 23, 4)
  return offset + 4
}

Buffer.prototype.writeFloatLE = function writeFloatLE (value, offset, noAssert) {
  return writeFloat(this, value, offset, true, noAssert)
}

Buffer.prototype.writeFloatBE = function writeFloatBE (value, offset, noAssert) {
  return writeFloat(this, value, offset, false, noAssert)
}

function writeDouble (buf, value, offset, littleEndian, noAssert) {
  if (!noAssert) {
    checkIEEE754(buf, value, offset, 8, 1.7976931348623157E+308, -1.7976931348623157E+308)
  }
  ieee754.write(buf, value, offset, littleEndian, 52, 8)
  return offset + 8
}

Buffer.prototype.writeDoubleLE = function writeDoubleLE (value, offset, noAssert) {
  return writeDouble(this, value, offset, true, noAssert)
}

Buffer.prototype.writeDoubleBE = function writeDoubleBE (value, offset, noAssert) {
  return writeDouble(this, value, offset, false, noAssert)
}

// copy(targetBuffer, targetStart=0, sourceStart=0, sourceEnd=buffer.length)
Buffer.prototype.copy = function copy (target, targetStart, start, end) {
  if (!start) start = 0
  if (!end && end !== 0) end = this.length
  if (targetStart >= target.length) targetStart = target.length
  if (!targetStart) targetStart = 0
  if (end > 0 && end < start) end = start

  // Copy 0 bytes; we're done
  if (end === start) return 0
  if (target.length === 0 || this.length === 0) return 0

  // Fatal error conditions
  if (targetStart < 0) {
    throw new RangeError('targetStart out of bounds')
  }
  if (start < 0 || start >= this.length) throw new RangeError('sourceStart out of bounds')
  if (end < 0) throw new RangeError('sourceEnd out of bounds')

  // Are we oob?
  if (end > this.length) end = this.length
  if (target.length - targetStart < end - start) {
    end = target.length - targetStart + start
  }

  var len = end - start
  var i

  if (this === target && start < targetStart && targetStart < end) {
    // descending copy from end
    for (i = len - 1; i >= 0; --i) {
      target[i + targetStart] = this[i + start]
    }
  } else if (len < 1000 || !Buffer.TYPED_ARRAY_SUPPORT) {
    // ascending copy from start
    for (i = 0; i < len; ++i) {
      target[i + targetStart] = this[i + start]
    }
  } else {
    Uint8Array.prototype.set.call(
      target,
      this.subarray(start, start + len),
      targetStart
    )
  }

  return len
}

// Usage:
//    buffer.fill(number[, offset[, end]])
//    buffer.fill(buffer[, offset[, end]])
//    buffer.fill(string[, offset[, end]][, encoding])
Buffer.prototype.fill = function fill (val, start, end, encoding) {
  // Handle string cases:
  if (typeof val === 'string') {
    if (typeof start === 'string') {
      encoding = start
      start = 0
      end = this.length
    } else if (typeof end === 'string') {
      encoding = end
      end = this.length
    }
    if (val.length === 1) {
      var code = val.charCodeAt(0)
      if (code < 256) {
        val = code
      }
    }
    if (encoding !== undefined && typeof encoding !== 'string') {
      throw new TypeError('encoding must be a string')
    }
    if (typeof encoding === 'string' && !Buffer.isEncoding(encoding)) {
      throw new TypeError('Unknown encoding: ' + encoding)
    }
  } else if (typeof val === 'number') {
    val = val & 255
  }

  // Invalid ranges are not set to a default, so can range check early.
  if (start < 0 || this.length < start || this.length < end) {
    throw new RangeError('Out of range index')
  }

  if (end <= start) {
    return this
  }

  start = start >>> 0
  end = end === undefined ? this.length : end >>> 0

  if (!val) val = 0

  var i
  if (typeof val === 'number') {
    for (i = start; i < end; ++i) {
      this[i] = val
    }
  } else {
    var bytes = Buffer.isBuffer(val)
      ? val
      : utf8ToBytes(new Buffer(val, encoding).toString())
    var len = bytes.length
    for (i = 0; i < end - start; ++i) {
      this[i + start] = bytes[i % len]
    }
  }

  return this
}

// HELPER FUNCTIONS
// ================

var INVALID_BASE64_RE = /[^+\/0-9A-Za-z-_]/g

function base64clean (str) {
  // Node strips out invalid characters like \n and \t from the string, base64-js does not
  str = stringtrim(str).replace(INVALID_BASE64_RE, '')
  // Node converts strings with length < 2 to ''
  if (str.length < 2) return ''
  // Node allows for non-padded base64 strings (missing trailing ===), base64-js does not
  while (str.length % 4 !== 0) {
    str = str + '='
  }
  return str
}

function stringtrim (str) {
  if (str.trim) return str.trim()
  return str.replace(/^\s+|\s+$/g, '')
}

function toHex (n) {
  if (n < 16) return '0' + n.toString(16)
  return n.toString(16)
}

function utf8ToBytes (string, units) {
  units = units || Infinity
  var codePoint
  var length = string.length
  var leadSurrogate = null
  var bytes = []

  for (var i = 0; i < length; ++i) {
    codePoint = string.charCodeAt(i)

    // is surrogate component
    if (codePoint > 0xD7FF && codePoint < 0xE000) {
      // last char was a lead
      if (!leadSurrogate) {
        // no lead yet
        if (codePoint > 0xDBFF) {
          // unexpected trail
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        } else if (i + 1 === length) {
          // unpaired lead
          if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
          continue
        }

        // valid lead
        leadSurrogate = codePoint

        continue
      }

      // 2 leads in a row
      if (codePoint < 0xDC00) {
        if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
        leadSurrogate = codePoint
        continue
      }

      // valid surrogate pair
      codePoint = (leadSurrogate - 0xD800 << 10 | codePoint - 0xDC00) + 0x10000
    } else if (leadSurrogate) {
      // valid bmp char, but last char was a lead
      if ((units -= 3) > -1) bytes.push(0xEF, 0xBF, 0xBD)
    }

    leadSurrogate = null

    // encode utf8
    if (codePoint < 0x80) {
      if ((units -= 1) < 0) break
      bytes.push(codePoint)
    } else if (codePoint < 0x800) {
      if ((units -= 2) < 0) break
      bytes.push(
        codePoint >> 0x6 | 0xC0,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x10000) {
      if ((units -= 3) < 0) break
      bytes.push(
        codePoint >> 0xC | 0xE0,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else if (codePoint < 0x110000) {
      if ((units -= 4) < 0) break
      bytes.push(
        codePoint >> 0x12 | 0xF0,
        codePoint >> 0xC & 0x3F | 0x80,
        codePoint >> 0x6 & 0x3F | 0x80,
        codePoint & 0x3F | 0x80
      )
    } else {
      throw new Error('Invalid code point')
    }
  }

  return bytes
}

function asciiToBytes (str) {
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    // Node's code seems to be doing this and not & 0x7F..
    byteArray.push(str.charCodeAt(i) & 0xFF)
  }
  return byteArray
}

function utf16leToBytes (str, units) {
  var c, hi, lo
  var byteArray = []
  for (var i = 0; i < str.length; ++i) {
    if ((units -= 2) < 0) break

    c = str.charCodeAt(i)
    hi = c >> 8
    lo = c % 256
    byteArray.push(lo)
    byteArray.push(hi)
  }

  return byteArray
}

function base64ToBytes (str) {
  return base64.toByteArray(base64clean(str))
}

function blitBuffer (src, dst, offset, length) {
  for (var i = 0; i < length; ++i) {
    if ((i + offset >= dst.length) || (i >= src.length)) break
    dst[i + offset] = src[i]
  }
  return i
}

function isnan (val) {
  return val !== val // eslint-disable-line no-self-compare
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ 9)))

/***/ }),
/* 9 */
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/*!*****************************************!*\
  !*** ./node_modules/base64-js/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.byteLength = byteLength
exports.toByteArray = toByteArray
exports.fromByteArray = fromByteArray

var lookup = []
var revLookup = []
var Arr = typeof Uint8Array !== 'undefined' ? Uint8Array : Array

var code = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'
for (var i = 0, len = code.length; i < len; ++i) {
  lookup[i] = code[i]
  revLookup[code.charCodeAt(i)] = i
}

// Support decoding URL-safe base64 strings, as Node.js does.
// See: https://en.wikipedia.org/wiki/Base64#URL_applications
revLookup['-'.charCodeAt(0)] = 62
revLookup['_'.charCodeAt(0)] = 63

function getLens (b64) {
  var len = b64.length

  if (len % 4 > 0) {
    throw new Error('Invalid string. Length must be a multiple of 4')
  }

  // Trim off extra bytes after placeholder bytes are found
  // See: https://github.com/beatgammit/base64-js/issues/42
  var validLen = b64.indexOf('=')
  if (validLen === -1) validLen = len

  var placeHoldersLen = validLen === len
    ? 0
    : 4 - (validLen % 4)

  return [validLen, placeHoldersLen]
}

// base64 is 4/3 + up to two characters of the original data
function byteLength (b64) {
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function _byteLength (b64, validLen, placeHoldersLen) {
  return ((validLen + placeHoldersLen) * 3 / 4) - placeHoldersLen
}

function toByteArray (b64) {
  var tmp
  var lens = getLens(b64)
  var validLen = lens[0]
  var placeHoldersLen = lens[1]

  var arr = new Arr(_byteLength(b64, validLen, placeHoldersLen))

  var curByte = 0

  // if there are placeholders, only get up to the last complete 4 chars
  var len = placeHoldersLen > 0
    ? validLen - 4
    : validLen

  var i
  for (i = 0; i < len; i += 4) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 18) |
      (revLookup[b64.charCodeAt(i + 1)] << 12) |
      (revLookup[b64.charCodeAt(i + 2)] << 6) |
      revLookup[b64.charCodeAt(i + 3)]
    arr[curByte++] = (tmp >> 16) & 0xFF
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 2) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 2) |
      (revLookup[b64.charCodeAt(i + 1)] >> 4)
    arr[curByte++] = tmp & 0xFF
  }

  if (placeHoldersLen === 1) {
    tmp =
      (revLookup[b64.charCodeAt(i)] << 10) |
      (revLookup[b64.charCodeAt(i + 1)] << 4) |
      (revLookup[b64.charCodeAt(i + 2)] >> 2)
    arr[curByte++] = (tmp >> 8) & 0xFF
    arr[curByte++] = tmp & 0xFF
  }

  return arr
}

function tripletToBase64 (num) {
  return lookup[num >> 18 & 0x3F] +
    lookup[num >> 12 & 0x3F] +
    lookup[num >> 6 & 0x3F] +
    lookup[num & 0x3F]
}

function encodeChunk (uint8, start, end) {
  var tmp
  var output = []
  for (var i = start; i < end; i += 3) {
    tmp =
      ((uint8[i] << 16) & 0xFF0000) +
      ((uint8[i + 1] << 8) & 0xFF00) +
      (uint8[i + 2] & 0xFF)
    output.push(tripletToBase64(tmp))
  }
  return output.join('')
}

function fromByteArray (uint8) {
  var tmp
  var len = uint8.length
  var extraBytes = len % 3 // if we have 1 byte left, pad 2 bytes
  var parts = []
  var maxChunkLength = 16383 // must be multiple of 3

  // go through the array every three bytes, we'll deal with trailing stuff later
  for (var i = 0, len2 = len - extraBytes; i < len2; i += maxChunkLength) {
    parts.push(encodeChunk(
      uint8, i, (i + maxChunkLength) > len2 ? len2 : (i + maxChunkLength)
    ))
  }

  // pad the end with zeros, but make sure to not forget the extra bytes
  if (extraBytes === 1) {
    tmp = uint8[len - 1]
    parts.push(
      lookup[tmp >> 2] +
      lookup[(tmp << 4) & 0x3F] +
      '=='
    )
  } else if (extraBytes === 2) {
    tmp = (uint8[len - 2] << 8) + uint8[len - 1]
    parts.push(
      lookup[tmp >> 10] +
      lookup[(tmp >> 4) & 0x3F] +
      lookup[(tmp << 2) & 0x3F] +
      '='
    )
  }

  return parts.join('')
}


/***/ }),
/* 11 */
/*!***************************************!*\
  !*** ./node_modules/ieee754/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

exports.read = function (buffer, offset, isLE, mLen, nBytes) {
  var e, m
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var nBits = -7
  var i = isLE ? (nBytes - 1) : 0
  var d = isLE ? -1 : 1
  var s = buffer[offset + i]

  i += d

  e = s & ((1 << (-nBits)) - 1)
  s >>= (-nBits)
  nBits += eLen
  for (; nBits > 0; e = (e * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  m = e & ((1 << (-nBits)) - 1)
  e >>= (-nBits)
  nBits += mLen
  for (; nBits > 0; m = (m * 256) + buffer[offset + i], i += d, nBits -= 8) {}

  if (e === 0) {
    e = 1 - eBias
  } else if (e === eMax) {
    return m ? NaN : ((s ? -1 : 1) * Infinity)
  } else {
    m = m + Math.pow(2, mLen)
    e = e - eBias
  }
  return (s ? -1 : 1) * m * Math.pow(2, e - mLen)
}

exports.write = function (buffer, value, offset, isLE, mLen, nBytes) {
  var e, m, c
  var eLen = (nBytes * 8) - mLen - 1
  var eMax = (1 << eLen) - 1
  var eBias = eMax >> 1
  var rt = (mLen === 23 ? Math.pow(2, -24) - Math.pow(2, -77) : 0)
  var i = isLE ? 0 : (nBytes - 1)
  var d = isLE ? 1 : -1
  var s = value < 0 || (value === 0 && 1 / value < 0) ? 1 : 0

  value = Math.abs(value)

  if (isNaN(value) || value === Infinity) {
    m = isNaN(value) ? 1 : 0
    e = eMax
  } else {
    e = Math.floor(Math.log(value) / Math.LN2)
    if (value * (c = Math.pow(2, -e)) < 1) {
      e--
      c *= 2
    }
    if (e + eBias >= 1) {
      value += rt / c
    } else {
      value += rt * Math.pow(2, 1 - eBias)
    }
    if (value * c >= 2) {
      e++
      c /= 2
    }

    if (e + eBias >= eMax) {
      m = 0
      e = eMax
    } else if (e + eBias >= 1) {
      m = ((value * c) - 1) * Math.pow(2, mLen)
      e = e + eBias
    } else {
      m = value * Math.pow(2, eBias - 1) * Math.pow(2, mLen)
      e = 0
    }
  }

  for (; mLen >= 8; buffer[offset + i] = m & 0xff, i += d, m /= 256, mLen -= 8) {}

  e = (e << mLen) | m
  eLen += mLen
  for (; eLen > 0; buffer[offset + i] = e & 0xff, i += d, e /= 256, eLen -= 8) {}

  buffer[offset + i - d] |= s * 128
}


/***/ }),
/* 12 */
/*!***************************************!*\
  !*** ./node_modules/isarray/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = Array.isArray || function (arr) {
  return toString.call(arr) == '[object Array]';
};


/***/ }),
/* 13 */
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ 14);

/***/ }),
/* 14 */
/*!************************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime-module.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() {
  return this || (typeof self === "object" && self);
})() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(/*! ./runtime */ 15);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 15 */
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() {
    return this || (typeof self === "object" && self);
  })() || Function("return this")()
);


/***/ }),
/* 16 */
/*!*********************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/common/permission.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(__f__) {/// null = 未请求，1 = 已允许，0 = 拒绝|受限, 2 = 系统未开启\n\nvar isIOS;\n\nfunction album() {\n  var result = 0;\n  var PHPhotoLibrary = plus.ios.import(\"PHPhotoLibrary\");\n  var authStatus = PHPhotoLibrary.authorizationStatus();\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(PHPhotoLibrary);\n  return result;\n}\n\nfunction camera() {\n  var result = 0;\n  var AVCaptureDevice = plus.ios.import(\"AVCaptureDevice\");\n  var authStatus = AVCaptureDevice.authorizationStatusForMediaType('vide');\n  if (authStatus === 0) {\n    result = null;\n  } else if (authStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(AVCaptureDevice);\n  return result;\n}\n\nfunction location() {\n  var result = 0;\n  var cllocationManger = plus.ios.import(\"CLLocationManager\");\n  var enable = cllocationManger.locationServicesEnabled();\n  var status = cllocationManger.authorizationStatus();\n  if (!enable) {\n    result = 2;\n  } else if (status === 0) {\n    result = null;\n  } else if (status === 3 || status === 4) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(cllocationManger);\n  return result;\n}\n\nfunction push() {\n  var result = 0;\n  var UIApplication = plus.ios.import(\"UIApplication\");\n  var app = UIApplication.sharedApplication();\n  var enabledTypes = 0;\n  if (app.currentUserNotificationSettings) {\n    var settings = app.currentUserNotificationSettings();\n    enabledTypes = settings.plusGetAttribute(\"types\");\n    if (enabledTypes == 0) {\n      result = 0;\n      __f__(\"log\", \"推送权限没有开启\", \" at common/permission.js:63\");\n    } else {\n      result = 1;\n      __f__(\"log\", \"已经开启推送功能!\", \" at common/permission.js:66\");\n    }\n    plus.ios.deleteObject(settings);\n  } else {\n    enabledTypes = app.enabledRemoteNotificationTypes();\n    if (enabledTypes == 0) {\n      result = 3;\n      __f__(\"log\", \"推送权限没有开启!\", \" at common/permission.js:73\");\n    } else {\n      result = 4;\n      __f__(\"log\", \"已经开启推送功能!\", \" at common/permission.js:76\");\n    }\n  }\n  plus.ios.deleteObject(app);\n  plus.ios.deleteObject(UIApplication);\n  return result;\n}\n\nfunction contact() {\n  var result = 0;\n  var CNContactStore = plus.ios.import(\"CNContactStore\");\n  var cnAuthStatus = CNContactStore.authorizationStatusForEntityType(0);\n  if (cnAuthStatus === 0) {\n    result = null;\n  } else if (cnAuthStatus == 3) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(CNContactStore);\n  return result;\n}\n\nfunction record() {\n  var result = null;\n  var avaudiosession = plus.ios.import(\"AVAudioSession\");\n  var avaudio = avaudiosession.sharedInstance();\n  var status = avaudio.recordPermission();\n  __f__(\"log\", \"permissionStatus:\" + status, \" at common/permission.js:104\");\n  if (status === 1970168948) {\n    result = null;\n  } else if (status === 1735552628) {\n    result = 1;\n  } else {\n    result = 0;\n  }\n  plus.ios.deleteObject(avaudiosession);\n  return result;\n}\n\nfunction calendar() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(0);\n  if (ekAuthStatus == 3) {\n    result = 1;\n    __f__(\"log\", \"日历权限已经开启\", \" at common/permission.js:122\");\n  } else {\n    __f__(\"log\", \"日历权限没有开启\", \" at common/permission.js:124\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\nfunction memo() {\n  var result = null;\n  var EKEventStore = plus.ios.import(\"EKEventStore\");\n  var ekAuthStatus = EKEventStore.authorizationStatusForEntityType(1);\n  if (ekAuthStatus == 3) {\n    result = 1;\n    __f__(\"log\", \"备忘录权限已经开启\", \" at common/permission.js:136\");\n  } else {\n    __f__(\"log\", \"备忘录权限没有开启\", \" at common/permission.js:138\");\n  }\n  plus.ios.deleteObject(EKEventStore);\n  return result;\n}\n\n\nfunction requestIOS(permissionID) {\n  return new Promise(function (resolve, reject) {\n    switch (permissionID) {\n      case \"push\":\n        resolve(push());\n        break;\n      case \"location\":\n        resolve(location());\n        break;\n      case \"record\":\n        resolve(record());\n        break;\n      case \"camera\":\n        resolve(camera());\n        break;\n      case \"album\":\n        resolve(album());\n        break;\n      case \"contact\":\n        resolve(contact());\n        break;\n      case \"calendar\":\n        resolve(calendar());\n        break;\n      case \"memo\":\n        resolve(memo());\n        break;\n      default:\n        resolve(0);\n        break;}\n\n  });\n}\n\nfunction requestAndroid(permissionID) {\n  return new Promise(function (resolve, reject) {\n    plus.android.requestPermissions(\n    [permissionID],\n    function (resultObj) {\n      var result = 0;\n      for (var i = 0; i < resultObj.granted.length; i++) {\n        var grantedPermission = resultObj.granted[i];\n        __f__(\"log\", '已获取的权限：' + grantedPermission, \" at common/permission.js:187\");\n        result = 1;\n      }\n      for (var i = 0; i < resultObj.deniedPresent.length; i++) {\n        var deniedPresentPermission = resultObj.deniedPresent[i];\n        __f__(\"log\", '拒绝本次申请的权限：' + deniedPresentPermission, \" at common/permission.js:192\");\n        result = 0;\n      }\n      for (var i = 0; i < resultObj.deniedAlways.length; i++) {\n        var deniedAlwaysPermission = resultObj.deniedAlways[i];\n        __f__(\"log\", '永久拒绝申请的权限：' + deniedAlwaysPermission, \" at common/permission.js:197\");\n        result = -1;\n      }\n      resolve(result);\n    },\n    function (error) {\n      __f__(\"log\", 'result error: ' + error.message, \" at common/permission.js:203\");\n      resolve({\n        code: error.code,\n        message: error.message });\n\n    });\n\n  });\n}\n\nfunction gotoAppPermissionSetting() {\n  if (permission.isIOS) {\n    var UIApplication = plus.ios.import(\"UIApplication\");\n    var application2 = UIApplication.sharedApplication();\n    var NSURL2 = plus.ios.import(\"NSURL\");\n    var setting2 = NSURL2.URLWithString(\"app-settings:\");\n    application2.openURL(setting2);\n    plus.ios.deleteObject(setting2);\n    plus.ios.deleteObject(NSURL2);\n    plus.ios.deleteObject(application2);\n  } else {\n    var Intent = plus.android.importClass(\"android.content.Intent\");\n    var Settings = plus.android.importClass(\"android.provider.Settings\");\n    var Uri = plus.android.importClass(\"android.net.Uri\");\n    var mainActivity = plus.android.runtimeMainActivity();\n    var intent = new Intent();\n    intent.setAction(Settings.ACTION_APPLICATION_DETAILS_SETTINGS);\n    var uri = Uri.fromParts(\"package\", mainActivity.getPackageName(), null);\n    intent.setData(uri);\n    mainActivity.startActivity(intent);\n  }\n}\n\nvar permission = {\n  get isIOS() {\n    return typeof isIOS === 'boolean' ? isIOS : isIOS = uni.getSystemInfoSync().platform === 'ios';\n  },\n  requestIOS: requestIOS,\n  requestAndroid: requestAndroid,\n  gotoAppSetting: gotoAppPermissionSetting };\n\n\nmodule.exports = permission;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vY29tbW9uL3Blcm1pc3Npb24uanMiXSwibmFtZXMiOlsiaXNJT1MiLCJhbGJ1bSIsInJlc3VsdCIsIlBIUGhvdG9MaWJyYXJ5IiwicGx1cyIsImlvcyIsImltcG9ydCIsImF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzIiwiZGVsZXRlT2JqZWN0IiwiY2FtZXJhIiwiQVZDYXB0dXJlRGV2aWNlIiwiYXV0aG9yaXphdGlvblN0YXR1c0Zvck1lZGlhVHlwZSIsImxvY2F0aW9uIiwiY2xsb2NhdGlvbk1hbmdlciIsImVuYWJsZSIsImxvY2F0aW9uU2VydmljZXNFbmFibGVkIiwic3RhdHVzIiwicHVzaCIsIlVJQXBwbGljYXRpb24iLCJhcHAiLCJzaGFyZWRBcHBsaWNhdGlvbiIsImVuYWJsZWRUeXBlcyIsImN1cnJlbnRVc2VyTm90aWZpY2F0aW9uU2V0dGluZ3MiLCJzZXR0aW5ncyIsInBsdXNHZXRBdHRyaWJ1dGUiLCJlbmFibGVkUmVtb3RlTm90aWZpY2F0aW9uVHlwZXMiLCJjb250YWN0IiwiQ05Db250YWN0U3RvcmUiLCJjbkF1dGhTdGF0dXMiLCJhdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSIsInJlY29yZCIsImF2YXVkaW9zZXNzaW9uIiwiYXZhdWRpbyIsInNoYXJlZEluc3RhbmNlIiwicmVjb3JkUGVybWlzc2lvbiIsImNhbGVuZGFyIiwiRUtFdmVudFN0b3JlIiwiZWtBdXRoU3RhdHVzIiwibWVtbyIsInJlcXVlc3RJT1MiLCJwZXJtaXNzaW9uSUQiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlcXVlc3RBbmRyb2lkIiwiYW5kcm9pZCIsInJlcXVlc3RQZXJtaXNzaW9ucyIsInJlc3VsdE9iaiIsImkiLCJncmFudGVkIiwibGVuZ3RoIiwiZ3JhbnRlZFBlcm1pc3Npb24iLCJkZW5pZWRQcmVzZW50IiwiZGVuaWVkUHJlc2VudFBlcm1pc3Npb24iLCJkZW5pZWRBbHdheXMiLCJkZW5pZWRBbHdheXNQZXJtaXNzaW9uIiwiZXJyb3IiLCJtZXNzYWdlIiwiY29kZSIsImdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZyIsInBlcm1pc3Npb24iLCJhcHBsaWNhdGlvbjIiLCJOU1VSTDIiLCJzZXR0aW5nMiIsIlVSTFdpdGhTdHJpbmciLCJvcGVuVVJMIiwiSW50ZW50IiwiaW1wb3J0Q2xhc3MiLCJTZXR0aW5ncyIsIlVyaSIsIm1haW5BY3Rpdml0eSIsInJ1bnRpbWVNYWluQWN0aXZpdHkiLCJpbnRlbnQiLCJzZXRBY3Rpb24iLCJBQ1RJT05fQVBQTElDQVRJT05fREVUQUlMU19TRVRUSU5HUyIsInVyaSIsImZyb21QYXJ0cyIsImdldFBhY2thZ2VOYW1lIiwic2V0RGF0YSIsInN0YXJ0QWN0aXZpdHkiLCJ1bmkiLCJnZXRTeXN0ZW1JbmZvU3luYyIsInBsYXRmb3JtIiwiZ290b0FwcFNldHRpbmciLCJtb2R1bGUiLCJleHBvcnRzIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFFQSxJQUFJQSxLQUFKOztBQUVBLFNBQVNDLEtBQVQsR0FBaUI7QUFDYixNQUFJQyxNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlDLGNBQWMsR0FBR0MsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSixjQUFjLENBQUNLLG1CQUFmLEVBQWpCO0FBQ0EsTUFBSUQsVUFBVSxLQUFLLENBQW5CLEVBQXNCO0FBQ2xCTCxVQUFNLEdBQUcsSUFBVDtBQUNILEdBRkQsTUFFTyxJQUFJSyxVQUFVLElBQUksQ0FBbEIsRUFBcUI7QUFDeEJMLFVBQU0sR0FBRyxDQUFUO0FBQ0gsR0FGTSxNQUVBO0FBQ0hBLFVBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JOLGNBQXRCO0FBQ0EsU0FBT0QsTUFBUDtBQUNIOztBQUVELFNBQVNRLE1BQVQsR0FBa0I7QUFDZCxNQUFJUixNQUFNLEdBQUcsQ0FBYjtBQUNBLE1BQUlTLGVBQWUsR0FBR1AsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsaUJBQWhCLENBQXRCO0FBQ0EsTUFBSUMsVUFBVSxHQUFHSSxlQUFlLENBQUNDLCtCQUFoQixDQUFnRCxNQUFoRCxDQUFqQjtBQUNBLE1BQUlMLFVBQVUsS0FBSyxDQUFuQixFQUFzQjtBQUNsQkwsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZELE1BRU8sSUFBSUssVUFBVSxJQUFJLENBQWxCLEVBQXFCO0FBQ3hCTCxVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRk0sTUFFQTtBQUNIQSxVQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCRSxlQUF0QjtBQUNBLFNBQU9ULE1BQVA7QUFDSDs7QUFFRCxTQUFTVyxRQUFULEdBQW9CO0FBQ2hCLE1BQUlYLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSVksZ0JBQWdCLEdBQUdWLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLG1CQUFoQixDQUF2QjtBQUNBLE1BQUlTLE1BQU0sR0FBR0QsZ0JBQWdCLENBQUNFLHVCQUFqQixFQUFiO0FBQ0EsTUFBSUMsTUFBTSxHQUFHSCxnQkFBZ0IsQ0FBQ04sbUJBQWpCLEVBQWI7QUFDQSxNQUFJLENBQUNPLE1BQUwsRUFBYTtBQUNUYixVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRkQsTUFFTyxJQUFJZSxNQUFNLEtBQUssQ0FBZixFQUFrQjtBQUNyQmYsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZNLE1BRUEsSUFBSWUsTUFBTSxLQUFLLENBQVgsSUFBZ0JBLE1BQU0sS0FBSyxDQUEvQixFQUFrQztBQUNyQ2YsVUFBTSxHQUFHLENBQVQ7QUFDSCxHQUZNLE1BRUE7QUFDSEEsVUFBTSxHQUFHLENBQVQ7QUFDSDtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQkssZ0JBQXRCO0FBQ0EsU0FBT1osTUFBUDtBQUNIOztBQUVELFNBQVNnQixJQUFULEdBQWdCO0FBQ1osTUFBSWhCLE1BQU0sR0FBRyxDQUFiO0FBQ0EsTUFBSWlCLGFBQWEsR0FBR2YsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZUFBaEIsQ0FBcEI7QUFDQSxNQUFJYyxHQUFHLEdBQUdELGFBQWEsQ0FBQ0UsaUJBQWQsRUFBVjtBQUNBLE1BQUlDLFlBQVksR0FBRyxDQUFuQjtBQUNBLE1BQUlGLEdBQUcsQ0FBQ0csK0JBQVIsRUFBeUM7QUFDckMsUUFBSUMsUUFBUSxHQUFHSixHQUFHLENBQUNHLCtCQUFKLEVBQWY7QUFDQUQsZ0JBQVksR0FBR0UsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixPQUExQixDQUFmO0FBQ0EsUUFBSUgsWUFBWSxJQUFJLENBQXBCLEVBQXVCO0FBQ25CcEIsWUFBTSxHQUFHLENBQVQ7QUFDQSxtQkFBWSxVQUFaO0FBQ0gsS0FIRCxNQUdPO0FBQ0hBLFlBQU0sR0FBRyxDQUFUO0FBQ0EsbUJBQVksV0FBWjtBQUNIO0FBQ0RFLFFBQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCZSxRQUF0QjtBQUNILEdBWEQsTUFXTztBQUNIRixnQkFBWSxHQUFHRixHQUFHLENBQUNNLDhCQUFKLEVBQWY7QUFDQSxRQUFJSixZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJwQixZQUFNLEdBQUcsQ0FBVDtBQUNBLG1CQUFZLFdBQVo7QUFDSCxLQUhELE1BR087QUFDSEEsWUFBTSxHQUFHLENBQVQ7QUFDQSxtQkFBWSxXQUFaO0FBQ0g7QUFDSjtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQlcsR0FBdEI7QUFDQWhCLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCVSxhQUF0QjtBQUNBLFNBQU9qQixNQUFQO0FBQ0g7O0FBRUQsU0FBU3lCLE9BQVQsR0FBbUI7QUFDZixNQUFJekIsTUFBTSxHQUFHLENBQWI7QUFDQSxNQUFJMEIsY0FBYyxHQUFHeEIsSUFBSSxDQUFDQyxHQUFMLENBQVNDLE1BQVQsQ0FBZ0IsZ0JBQWhCLENBQXJCO0FBQ0EsTUFBSXVCLFlBQVksR0FBR0QsY0FBYyxDQUFDRSxnQ0FBZixDQUFnRCxDQUFoRCxDQUFuQjtBQUNBLE1BQUlELFlBQVksS0FBSyxDQUFyQixFQUF3QjtBQUNwQjNCLFVBQU0sR0FBRyxJQUFUO0FBQ0gsR0FGRCxNQUVPLElBQUkyQixZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDMUIzQixVQUFNLEdBQUcsQ0FBVDtBQUNILEdBRk0sTUFFQTtBQUNIQSxVQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0RFLE1BQUksQ0FBQ0MsR0FBTCxDQUFTSSxZQUFULENBQXNCbUIsY0FBdEI7QUFDQSxTQUFPMUIsTUFBUDtBQUNIOztBQUVELFNBQVM2QixNQUFULEdBQWtCO0FBQ2QsTUFBSTdCLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSThCLGNBQWMsR0FBRzVCLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLGdCQUFoQixDQUFyQjtBQUNBLE1BQUkyQixPQUFPLEdBQUdELGNBQWMsQ0FBQ0UsY0FBZixFQUFkO0FBQ0EsTUFBSWpCLE1BQU0sR0FBR2dCLE9BQU8sQ0FBQ0UsZ0JBQVIsRUFBYjtBQUNBLGVBQVksc0JBQXNCbEIsTUFBbEM7QUFDQSxNQUFJQSxNQUFNLEtBQUssVUFBZixFQUEyQjtBQUN2QmYsVUFBTSxHQUFHLElBQVQ7QUFDSCxHQUZELE1BRU8sSUFBSWUsTUFBTSxLQUFLLFVBQWYsRUFBMkI7QUFDOUJmLFVBQU0sR0FBRyxDQUFUO0FBQ0gsR0FGTSxNQUVBO0FBQ0hBLFVBQU0sR0FBRyxDQUFUO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0J1QixjQUF0QjtBQUNBLFNBQU85QixNQUFQO0FBQ0g7O0FBRUQsU0FBU2tDLFFBQVQsR0FBb0I7QUFDaEIsTUFBSWxDLE1BQU0sR0FBRyxJQUFiO0FBQ0EsTUFBSW1DLFlBQVksR0FBR2pDLElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLGNBQWhCLENBQW5CO0FBQ0EsTUFBSWdDLFlBQVksR0FBR0QsWUFBWSxDQUFDUCxnQ0FBYixDQUE4QyxDQUE5QyxDQUFuQjtBQUNBLE1BQUlRLFlBQVksSUFBSSxDQUFwQixFQUF1QjtBQUNuQnBDLFVBQU0sR0FBRyxDQUFUO0FBQ0EsaUJBQVksVUFBWjtBQUNILEdBSEQsTUFHTztBQUNILGlCQUFZLFVBQVo7QUFDSDtBQUNERSxNQUFJLENBQUNDLEdBQUwsQ0FBU0ksWUFBVCxDQUFzQjRCLFlBQXRCO0FBQ0EsU0FBT25DLE1BQVA7QUFDSDs7QUFFRCxTQUFTcUMsSUFBVCxHQUFnQjtBQUNaLE1BQUlyQyxNQUFNLEdBQUcsSUFBYjtBQUNBLE1BQUltQyxZQUFZLEdBQUdqQyxJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixjQUFoQixDQUFuQjtBQUNBLE1BQUlnQyxZQUFZLEdBQUdELFlBQVksQ0FBQ1AsZ0NBQWIsQ0FBOEMsQ0FBOUMsQ0FBbkI7QUFDQSxNQUFJUSxZQUFZLElBQUksQ0FBcEIsRUFBdUI7QUFDbkJwQyxVQUFNLEdBQUcsQ0FBVDtBQUNBLGlCQUFZLFdBQVo7QUFDSCxHQUhELE1BR087QUFDSCxpQkFBWSxXQUFaO0FBQ0g7QUFDREUsTUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0I0QixZQUF0QjtBQUNBLFNBQU9uQyxNQUFQO0FBQ0g7OztBQUdELFNBQVNzQyxVQUFULENBQW9CQyxZQUFwQixFQUFrQztBQUM5QixTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEMsWUFBUUgsWUFBUjtBQUNJLFdBQUssTUFBTDtBQUNJRSxlQUFPLENBQUN6QixJQUFJLEVBQUwsQ0FBUDtBQUNBO0FBQ0osV0FBSyxVQUFMO0FBQ0l5QixlQUFPLENBQUM5QixRQUFRLEVBQVQsQ0FBUDtBQUNBO0FBQ0osV0FBSyxRQUFMO0FBQ0k4QixlQUFPLENBQUNaLE1BQU0sRUFBUCxDQUFQO0FBQ0E7QUFDSixXQUFLLFFBQUw7QUFDSVksZUFBTyxDQUFDakMsTUFBTSxFQUFQLENBQVA7QUFDQTtBQUNKLFdBQUssT0FBTDtBQUNJaUMsZUFBTyxDQUFDMUMsS0FBSyxFQUFOLENBQVA7QUFDQTtBQUNKLFdBQUssU0FBTDtBQUNJMEMsZUFBTyxDQUFDaEIsT0FBTyxFQUFSLENBQVA7QUFDQTtBQUNKLFdBQUssVUFBTDtBQUNJZ0IsZUFBTyxDQUFDUCxRQUFRLEVBQVQsQ0FBUDtBQUNBO0FBQ0osV0FBSyxNQUFMO0FBQ0lPLGVBQU8sQ0FBQ0osSUFBSSxFQUFMLENBQVA7QUFDQTtBQUNKO0FBQ0lJLGVBQU8sQ0FBQyxDQUFELENBQVA7QUFDQSxjQTNCUjs7QUE2QkgsR0E5Qk0sQ0FBUDtBQStCSDs7QUFFRCxTQUFTRSxjQUFULENBQXdCSixZQUF4QixFQUFzQztBQUNsQyxTQUFPLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcEN4QyxRQUFJLENBQUMwQyxPQUFMLENBQWFDLGtCQUFiO0FBQ0ksS0FBQ04sWUFBRCxDQURKO0FBRUksY0FBU08sU0FBVCxFQUFvQjtBQUNoQixVQUFJOUMsTUFBTSxHQUFHLENBQWI7QUFDQSxXQUFLLElBQUkrQyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxTQUFTLENBQUNFLE9BQVYsQ0FBa0JDLE1BQXRDLEVBQThDRixDQUFDLEVBQS9DLEVBQW1EO0FBQy9DLFlBQUlHLGlCQUFpQixHQUFHSixTQUFTLENBQUNFLE9BQVYsQ0FBa0JELENBQWxCLENBQXhCO0FBQ0EscUJBQVksWUFBWUcsaUJBQXhCO0FBQ0FsRCxjQUFNLEdBQUcsQ0FBVDtBQUNIO0FBQ0QsV0FBSyxJQUFJK0MsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsU0FBUyxDQUFDSyxhQUFWLENBQXdCRixNQUE1QyxFQUFvREYsQ0FBQyxFQUFyRCxFQUF5RDtBQUNyRCxZQUFJSyx1QkFBdUIsR0FBR04sU0FBUyxDQUFDSyxhQUFWLENBQXdCSixDQUF4QixDQUE5QjtBQUNBLHFCQUFZLGVBQWVLLHVCQUEzQjtBQUNBcEQsY0FBTSxHQUFHLENBQVQ7QUFDSDtBQUNELFdBQUssSUFBSStDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdELFNBQVMsQ0FBQ08sWUFBVixDQUF1QkosTUFBM0MsRUFBbURGLENBQUMsRUFBcEQsRUFBd0Q7QUFDcEQsWUFBSU8sc0JBQXNCLEdBQUdSLFNBQVMsQ0FBQ08sWUFBVixDQUF1Qk4sQ0FBdkIsQ0FBN0I7QUFDQSxxQkFBWSxlQUFlTyxzQkFBM0I7QUFDQXRELGNBQU0sR0FBRyxDQUFDLENBQVY7QUFDSDtBQUNEeUMsYUFBTyxDQUFDekMsTUFBRCxDQUFQO0FBQ0gsS0FwQkw7QUFxQkksY0FBU3VELEtBQVQsRUFBZ0I7QUFDWixtQkFBWSxtQkFBbUJBLEtBQUssQ0FBQ0MsT0FBckM7QUFDQWYsYUFBTyxDQUFDO0FBQ0pnQixZQUFJLEVBQUVGLEtBQUssQ0FBQ0UsSUFEUjtBQUVKRCxlQUFPLEVBQUVELEtBQUssQ0FBQ0MsT0FGWCxFQUFELENBQVA7O0FBSUgsS0EzQkw7O0FBNkJILEdBOUJNLENBQVA7QUErQkg7O0FBRUQsU0FBU0Usd0JBQVQsR0FBb0M7QUFDaEMsTUFBSUMsVUFBVSxDQUFDN0QsS0FBZixFQUFzQjtBQUNsQixRQUFJbUIsYUFBYSxHQUFHZixJQUFJLENBQUNDLEdBQUwsQ0FBU0MsTUFBVCxDQUFnQixlQUFoQixDQUFwQjtBQUNBLFFBQUl3RCxZQUFZLEdBQUczQyxhQUFhLENBQUNFLGlCQUFkLEVBQW5CO0FBQ0EsUUFBSTBDLE1BQU0sR0FBRzNELElBQUksQ0FBQ0MsR0FBTCxDQUFTQyxNQUFULENBQWdCLE9BQWhCLENBQWI7QUFDQSxRQUFJMEQsUUFBUSxHQUFHRCxNQUFNLENBQUNFLGFBQVAsQ0FBcUIsZUFBckIsQ0FBZjtBQUNBSCxnQkFBWSxDQUFDSSxPQUFiLENBQXFCRixRQUFyQjtBQUNBNUQsUUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0J1RCxRQUF0QjtBQUNBNUQsUUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JzRCxNQUF0QjtBQUNBM0QsUUFBSSxDQUFDQyxHQUFMLENBQVNJLFlBQVQsQ0FBc0JxRCxZQUF0QjtBQUNILEdBVEQsTUFTTztBQUNILFFBQUlLLE1BQU0sR0FBRy9ELElBQUksQ0FBQzBDLE9BQUwsQ0FBYXNCLFdBQWIsQ0FBeUIsd0JBQXpCLENBQWI7QUFDQSxRQUFJQyxRQUFRLEdBQUdqRSxJQUFJLENBQUMwQyxPQUFMLENBQWFzQixXQUFiLENBQXlCLDJCQUF6QixDQUFmO0FBQ0EsUUFBSUUsR0FBRyxHQUFHbEUsSUFBSSxDQUFDMEMsT0FBTCxDQUFhc0IsV0FBYixDQUF5QixpQkFBekIsQ0FBVjtBQUNBLFFBQUlHLFlBQVksR0FBR25FLElBQUksQ0FBQzBDLE9BQUwsQ0FBYTBCLG1CQUFiLEVBQW5CO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLElBQUlOLE1BQUosRUFBYjtBQUNBTSxVQUFNLENBQUNDLFNBQVAsQ0FBaUJMLFFBQVEsQ0FBQ00sbUNBQTFCO0FBQ0EsUUFBSUMsR0FBRyxHQUFHTixHQUFHLENBQUNPLFNBQUosQ0FBYyxTQUFkLEVBQXlCTixZQUFZLENBQUNPLGNBQWIsRUFBekIsRUFBd0QsSUFBeEQsQ0FBVjtBQUNBTCxVQUFNLENBQUNNLE9BQVAsQ0FBZUgsR0FBZjtBQUNBTCxnQkFBWSxDQUFDUyxhQUFiLENBQTJCUCxNQUEzQjtBQUNIO0FBQ0o7O0FBRUQsSUFBTVosVUFBVSxHQUFHO0FBQ2YsTUFBSTdELEtBQUosR0FBVztBQUNQLFdBQU8sT0FBT0EsS0FBUCxLQUFpQixTQUFqQixHQUE2QkEsS0FBN0IsR0FBc0NBLEtBQUssR0FBR2lGLEdBQUcsQ0FBQ0MsaUJBQUosR0FBd0JDLFFBQXhCLEtBQXFDLEtBQTFGO0FBQ0gsR0FIYztBQUlmM0MsWUFBVSxFQUFFQSxVQUpHO0FBS2ZLLGdCQUFjLEVBQUVBLGNBTEQ7QUFNZnVDLGdCQUFjLEVBQUV4Qix3QkFORCxFQUFuQjs7O0FBU0F5QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ6QixVQUFqQixDIiwiZmlsZSI6IjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8vIG51bGwgPSDmnKror7fmsYLvvIwxID0g5bey5YWB6K6477yMMCA9IOaLkue7nXzlj5fpmZAsIDIgPSDns7vnu5/mnKrlvIDlkK9cblxudmFyIGlzSU9TXG5cbmZ1bmN0aW9uIGFsYnVtKCkge1xuICAgIHZhciByZXN1bHQgPSAwO1xuICAgIHZhciBQSFBob3RvTGlicmFyeSA9IHBsdXMuaW9zLmltcG9ydChcIlBIUGhvdG9MaWJyYXJ5XCIpO1xuICAgIHZhciBhdXRoU3RhdHVzID0gUEhQaG90b0xpYnJhcnkuYXV0aG9yaXphdGlvblN0YXR1cygpO1xuICAgIGlmIChhdXRoU3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChhdXRoU3RhdHVzID09IDMpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoUEhQaG90b0xpYnJhcnkpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGNhbWVyYSgpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgQVZDYXB0dXJlRGV2aWNlID0gcGx1cy5pb3MuaW1wb3J0KFwiQVZDYXB0dXJlRGV2aWNlXCIpO1xuICAgIHZhciBhdXRoU3RhdHVzID0gQVZDYXB0dXJlRGV2aWNlLmF1dGhvcml6YXRpb25TdGF0dXNGb3JNZWRpYVR5cGUoJ3ZpZGUnKTtcbiAgICBpZiAoYXV0aFN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoYXV0aFN0YXR1cyA9PSAzKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KEFWQ2FwdHVyZURldmljZSk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbG9jYXRpb24oKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIGNsbG9jYXRpb25NYW5nZXIgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTExvY2F0aW9uTWFuYWdlclwiKTtcbiAgICB2YXIgZW5hYmxlID0gY2xsb2NhdGlvbk1hbmdlci5sb2NhdGlvblNlcnZpY2VzRW5hYmxlZCgpO1xuICAgIHZhciBzdGF0dXMgPSBjbGxvY2F0aW9uTWFuZ2VyLmF1dGhvcml6YXRpb25TdGF0dXMoKTtcbiAgICBpZiAoIWVuYWJsZSkge1xuICAgICAgICByZXN1bHQgPSAyO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAwKSB7XG4gICAgICAgIHJlc3VsdCA9IG51bGw7XG4gICAgfSBlbHNlIGlmIChzdGF0dXMgPT09IDMgfHwgc3RhdHVzID09PSA0KSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KGNsbG9jYXRpb25NYW5nZXIpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHB1c2goKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIFVJQXBwbGljYXRpb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJVSUFwcGxpY2F0aW9uXCIpO1xuICAgIHZhciBhcHAgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XG4gICAgdmFyIGVuYWJsZWRUeXBlcyA9IDA7XG4gICAgaWYgKGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKSB7XG4gICAgICAgIHZhciBzZXR0aW5ncyA9IGFwcC5jdXJyZW50VXNlck5vdGlmaWNhdGlvblNldHRpbmdzKCk7XG4gICAgICAgIGVuYWJsZWRUeXBlcyA9IHNldHRpbmdzLnBsdXNHZXRBdHRyaWJ1dGUoXCJ0eXBlc1wiKTtcbiAgICAgICAgaWYgKGVuYWJsZWRUeXBlcyA9PSAwKSB7XG4gICAgICAgICAgICByZXN1bHQgPSAwO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLmjqjpgIHmnYPpmZDmsqHmnInlvIDlkK9cIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXN1bHQgPSAxO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlt7Lnu4/lvIDlkK/mjqjpgIHlip/og70hXCIpXG4gICAgICAgIH1cbiAgICAgICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KHNldHRpbmdzKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBlbmFibGVkVHlwZXMgPSBhcHAuZW5hYmxlZFJlbW90ZU5vdGlmaWNhdGlvblR5cGVzKCk7XG4gICAgICAgIGlmIChlbmFibGVkVHlwZXMgPT0gMCkge1xuICAgICAgICAgICAgcmVzdWx0ID0gMztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5o6o6YCB5p2D6ZmQ5rKh5pyJ5byA5ZCvIVwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlc3VsdCA9IDQ7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuW3sue7j+W8gOWQr+aOqOmAgeWKn+iDvSFcIilcbiAgICAgICAgfVxuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXBwKTtcbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoVUlBcHBsaWNhdGlvbik7XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gY29udGFjdCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICB2YXIgQ05Db250YWN0U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJDTkNvbnRhY3RTdG9yZVwiKTtcbiAgICB2YXIgY25BdXRoU3RhdHVzID0gQ05Db250YWN0U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMCk7XG4gICAgaWYgKGNuQXV0aFN0YXR1cyA9PT0gMCkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoY25BdXRoU3RhdHVzID09IDMpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHQgPSAwO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoQ05Db250YWN0U3RvcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlY29yZCgpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICB2YXIgYXZhdWRpb3Nlc3Npb24gPSBwbHVzLmlvcy5pbXBvcnQoXCJBVkF1ZGlvU2Vzc2lvblwiKTtcbiAgICB2YXIgYXZhdWRpbyA9IGF2YXVkaW9zZXNzaW9uLnNoYXJlZEluc3RhbmNlKCk7XG4gICAgdmFyIHN0YXR1cyA9IGF2YXVkaW8ucmVjb3JkUGVybWlzc2lvbigpO1xuICAgIGNvbnNvbGUubG9nKFwicGVybWlzc2lvblN0YXR1czpcIiArIHN0YXR1cyk7XG4gICAgaWYgKHN0YXR1cyA9PT0gMTk3MDE2ODk0OCkge1xuICAgICAgICByZXN1bHQgPSBudWxsO1xuICAgIH0gZWxzZSBpZiAoc3RhdHVzID09PSAxNzM1NTUyNjI4KSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gMDtcbiAgICB9XG4gICAgcGx1cy5pb3MuZGVsZXRlT2JqZWN0KGF2YXVkaW9zZXNzaW9uKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBjYWxlbmRhcigpIHtcbiAgICB2YXIgcmVzdWx0ID0gbnVsbDtcbiAgICB2YXIgRUtFdmVudFN0b3JlID0gcGx1cy5pb3MuaW1wb3J0KFwiRUtFdmVudFN0b3JlXCIpO1xuICAgIHZhciBla0F1dGhTdGF0dXMgPSBFS0V2ZW50U3RvcmUuYXV0aG9yaXphdGlvblN0YXR1c0ZvckVudGl0eVR5cGUoMCk7XG4gICAgaWYgKGVrQXV0aFN0YXR1cyA9PSAzKSB7XG4gICAgICAgIHJlc3VsdCA9IDE7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pel5Y6G5p2D6ZmQ5bey57uP5byA5ZCvXCIpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi5pel5Y6G5p2D6ZmQ5rKh5pyJ5byA5ZCvXCIpO1xuICAgIH1cbiAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoRUtFdmVudFN0b3JlKTtcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtZW1vKCkge1xuICAgIHZhciByZXN1bHQgPSBudWxsO1xuICAgIHZhciBFS0V2ZW50U3RvcmUgPSBwbHVzLmlvcy5pbXBvcnQoXCJFS0V2ZW50U3RvcmVcIik7XG4gICAgdmFyIGVrQXV0aFN0YXR1cyA9IEVLRXZlbnRTdG9yZS5hdXRob3JpemF0aW9uU3RhdHVzRm9yRW50aXR5VHlwZSgxKTtcbiAgICBpZiAoZWtBdXRoU3RhdHVzID09IDMpIHtcbiAgICAgICAgcmVzdWx0ID0gMTtcbiAgICAgICAgY29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDlt7Lnu4/lvIDlkK9cIik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coXCLlpIflv5jlvZXmnYPpmZDmsqHmnInlvIDlkK9cIik7XG4gICAgfVxuICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChFS0V2ZW50U3RvcmUpO1xuICAgIHJldHVybiByZXN1bHQ7XG59XG5cblxuZnVuY3Rpb24gcmVxdWVzdElPUyhwZXJtaXNzaW9uSUQpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzd2l0Y2ggKHBlcm1pc3Npb25JRCkge1xuICAgICAgICAgICAgY2FzZSBcInB1c2hcIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKHB1c2goKSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibG9jYXRpb25cIjpcbiAgICAgICAgICAgICAgICByZXNvbHZlKGxvY2F0aW9uKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInJlY29yZFwiOlxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVjb3JkKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNhbWVyYVwiOlxuICAgICAgICAgICAgICAgIHJlc29sdmUoY2FtZXJhKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImFsYnVtXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShhbGJ1bSgpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJjb250YWN0XCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjb250YWN0KCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImNhbGVuZGFyXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShjYWxlbmRhcigpKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJtZW1vXCI6XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShtZW1vKCkpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXNvbHZlKDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlcXVlc3RBbmRyb2lkKHBlcm1pc3Npb25JRCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHBsdXMuYW5kcm9pZC5yZXF1ZXN0UGVybWlzc2lvbnMoXG4gICAgICAgICAgICBbcGVybWlzc2lvbklEXSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKHJlc3VsdE9iaikge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSAwO1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmdyYW50ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGdyYW50ZWRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmdyYW50ZWRbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCflt7Lojrflj5bnmoTmnYPpmZDvvJonICsgZ3JhbnRlZFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmRlbmllZFByZXNlbnQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlbmllZFByZXNlbnRQZXJtaXNzaW9uID0gcmVzdWx0T2JqLmRlbmllZFByZXNlbnRbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmi5Lnu53mnKzmrKHnlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkUHJlc2VudFBlcm1pc3Npb24pO1xuICAgICAgICAgICAgICAgICAgICByZXN1bHQgPSAwXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcmVzdWx0T2JqLmRlbmllZEFsd2F5cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVuaWVkQWx3YXlzUGVybWlzc2lvbiA9IHJlc3VsdE9iai5kZW5pZWRBbHdheXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCfmsLjkuYXmi5Lnu53nlLPor7fnmoTmnYPpmZDvvJonICsgZGVuaWVkQWx3YXlzUGVybWlzc2lvbik7XG4gICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IC0xXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBmdW5jdGlvbihlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXN1bHQgZXJyb3I6ICcgKyBlcnJvci5tZXNzYWdlKVxuICAgICAgICAgICAgICAgIHJlc29sdmUoe1xuICAgICAgICAgICAgICAgICAgICBjb2RlOiBlcnJvci5jb2RlLFxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICk7XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGdvdG9BcHBQZXJtaXNzaW9uU2V0dGluZygpIHtcbiAgICBpZiAocGVybWlzc2lvbi5pc0lPUykge1xuICAgICAgICB2YXIgVUlBcHBsaWNhdGlvbiA9IHBsdXMuaW9zLmltcG9ydChcIlVJQXBwbGljYXRpb25cIik7XG4gICAgICAgIHZhciBhcHBsaWNhdGlvbjIgPSBVSUFwcGxpY2F0aW9uLnNoYXJlZEFwcGxpY2F0aW9uKCk7XG4gICAgICAgIHZhciBOU1VSTDIgPSBwbHVzLmlvcy5pbXBvcnQoXCJOU1VSTFwiKTtcbiAgICAgICAgdmFyIHNldHRpbmcyID0gTlNVUkwyLlVSTFdpdGhTdHJpbmcoXCJhcHAtc2V0dGluZ3M6XCIpO1xuICAgICAgICBhcHBsaWNhdGlvbjIub3BlblVSTChzZXR0aW5nMik7XG4gICAgICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChzZXR0aW5nMik7XG4gICAgICAgIHBsdXMuaW9zLmRlbGV0ZU9iamVjdChOU1VSTDIpO1xuICAgICAgICBwbHVzLmlvcy5kZWxldGVPYmplY3QoYXBwbGljYXRpb24yKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgSW50ZW50ID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5jb250ZW50LkludGVudFwiKTtcbiAgICAgICAgdmFyIFNldHRpbmdzID0gcGx1cy5hbmRyb2lkLmltcG9ydENsYXNzKFwiYW5kcm9pZC5wcm92aWRlci5TZXR0aW5nc1wiKTtcbiAgICAgICAgdmFyIFVyaSA9IHBsdXMuYW5kcm9pZC5pbXBvcnRDbGFzcyhcImFuZHJvaWQubmV0LlVyaVwiKTtcbiAgICAgICAgdmFyIG1haW5BY3Rpdml0eSA9IHBsdXMuYW5kcm9pZC5ydW50aW1lTWFpbkFjdGl2aXR5KCk7XG4gICAgICAgIHZhciBpbnRlbnQgPSBuZXcgSW50ZW50KCk7XG4gICAgICAgIGludGVudC5zZXRBY3Rpb24oU2V0dGluZ3MuQUNUSU9OX0FQUExJQ0FUSU9OX0RFVEFJTFNfU0VUVElOR1MpO1xuICAgICAgICB2YXIgdXJpID0gVXJpLmZyb21QYXJ0cyhcInBhY2thZ2VcIiwgbWFpbkFjdGl2aXR5LmdldFBhY2thZ2VOYW1lKCksIG51bGwpO1xuICAgICAgICBpbnRlbnQuc2V0RGF0YSh1cmkpO1xuICAgICAgICBtYWluQWN0aXZpdHkuc3RhcnRBY3Rpdml0eShpbnRlbnQpO1xuICAgIH1cbn1cblxuY29uc3QgcGVybWlzc2lvbiA9IHtcbiAgICBnZXQgaXNJT1MoKXtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBpc0lPUyA9PT0gJ2Jvb2xlYW4nID8gaXNJT1MgOiAoaXNJT1MgPSB1bmkuZ2V0U3lzdGVtSW5mb1N5bmMoKS5wbGF0Zm9ybSA9PT0gJ2lvcycpXG4gICAgfSxcbiAgICByZXF1ZXN0SU9TOiByZXF1ZXN0SU9TLFxuICAgIHJlcXVlc3RBbmRyb2lkOiByZXF1ZXN0QW5kcm9pZCxcbiAgICBnb3RvQXBwU2V0dGluZzogZ290b0FwcFBlcm1pc3Npb25TZXR0aW5nXG59XG5cbm1vZHVsZS5leHBvcnRzID0gcGVybWlzc2lvblxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///16\n");

/***/ }),
/* 17 */
/*!*******************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse/uni-collapse.vue ***!
  \*******************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-collapse.vue?vue&type=template&id=495850ae& */ 18);\n/* harmony import */ var _uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-collapse.vue?vue&type=script&lang=js& */ 20);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"plugs/uni-ui/uni-collapse/uni-collapse.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBeUg7QUFDekg7QUFDZ0U7QUFDTDs7O0FBRzNEO0FBQ3FOO0FBQ3JOLGdCQUFnQiw0TkFBVTtBQUMxQixFQUFFLGtGQUFNO0FBQ1IsRUFBRSx1RkFBTTtBQUNSLEVBQUUsZ0dBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsMkZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMTcuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jb2xsYXBzZS52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9NDk1ODUwYWUmXCJcbnZhciByZW5kZXJqc1xuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi91bmktY29sbGFwc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5leHBvcnQgKiBmcm9tIFwiLi91bmktY29sbGFwc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGx1Z3MvdW5pLXVpL3VuaS1jb2xsYXBzZS91bmktY29sbGFwc2UudnVlXCJcbmV4cG9ydCBkZWZhdWx0IGNvbXBvbmVudC5leHBvcnRzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///17\n");

/***/ }),
/* 18 */
/*!**************************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse/uni-collapse.vue?vue&type=template&id=495850ae& ***!
  \**************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-collapse.vue?vue&type=template&id=495850ae& */ 19);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_template_id_495850ae___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 19 */
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse/uni-collapse.vue?vue&type=template&id=495850ae& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    { staticClass: _vm._$s(0, "sc", "uni-collapse"), attrs: { _i: 0 } },
    [_vm._t("default", null, { _i: 1 })],
    2
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 20 */
/*!********************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse/uni-collapse.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-collapse.vue?vue&type=script&lang=js& */ 21);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWd2QixDQUFnQiw4dkJBQUcsRUFBQyIsImZpbGUiOiIyMC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNvbGxhcHNlLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi91bmktY29sbGFwc2UudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///20\n");

/***/ }),
/* 21 */
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse/uni-collapse.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\n//\nvar _default =\n{\n  name: 'UniCollapse',\n  props: {\n    accordion: { // 是否开启手风琴效果\n      type: Boolean,\n      default: false } },\n\n\n  data: function data() {\n    return {};\n  },\n  provide: function provide() {\n    return {\n      collapse: this };\n\n  },\n  created: function created() {\n    this.childrens = [];\n  },\n  methods: {\n    onChange: function onChange() {\n      var activeItem = [];\n      this.childrens.forEach(function (vm, index) {\n        if (vm.isOpen) {\n          activeItem.push(vm.nameSync);\n        }\n      });\n      this.$emit('change', activeItem);\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z3MvdW5pLXVpL3VuaS1jb2xsYXBzZS91bmktY29sbGFwc2UudnVlIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1BO0FBQ0EscUJBREE7QUFFQTtBQUNBO0FBQ0EsbUJBREE7QUFFQSxvQkFGQSxFQURBLEVBRkE7OztBQVFBLE1BUkEsa0JBUUE7QUFDQTtBQUNBLEdBVkE7QUFXQSxTQVhBLHFCQVdBO0FBQ0E7QUFDQSxvQkFEQTs7QUFHQSxHQWZBO0FBZ0JBLFNBaEJBLHFCQWdCQTtBQUNBO0FBQ0EsR0FsQkE7QUFtQkE7QUFDQSxZQURBLHNCQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BSkE7QUFLQTtBQUNBLEtBVEEsRUFuQkEsRSIsImZpbGUiOiIyMS5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgY2xhc3M9XCJ1bmktY29sbGFwc2VcIj5cblx0XHQ8c2xvdCAvPlxuXHQ8L3ZpZXc+XG48L3RlbXBsYXRlPlxuPHNjcmlwdD5cblx0ZXhwb3J0IGRlZmF1bHQge1xuXHRcdG5hbWU6ICdVbmlDb2xsYXBzZScsXG5cdFx0cHJvcHM6IHtcblx0XHRcdGFjY29yZGlvbjogeyAvLyDmmK/lkKblvIDlkK/miYvpo47nkLTmlYjmnpxcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRhdGEoKSB7XG5cdFx0XHRyZXR1cm4ge31cblx0XHR9LFxuXHRcdHByb3ZpZGUoKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjb2xsYXBzZTogdGhpc1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Y3JlYXRlZCgpIHtcblx0XHRcdHRoaXMuY2hpbGRyZW5zID0gW11cblx0XHR9LFxuXHRcdG1ldGhvZHM6IHtcblx0XHRcdG9uQ2hhbmdlKCkge1xuXHRcdFx0XHRsZXQgYWN0aXZlSXRlbSA9IFtdXG5cdFx0XHRcdHRoaXMuY2hpbGRyZW5zLmZvckVhY2goKHZtLCBpbmRleCkgPT4ge1xuXHRcdFx0XHRcdGlmICh2bS5pc09wZW4pIHtcblx0XHRcdFx0XHRcdGFjdGl2ZUl0ZW0ucHVzaCh2bS5uYW1lU3luYylcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pXG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NoYW5nZScsIGFjdGl2ZUl0ZW0pXG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cbjxzdHlsZT5cblx0QGNoYXJzZXQgXCJVVEYtOFwiO1xuXG5cdC51bmktY29sbGFwc2Uge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZTphZnRlciB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHotaW5kZXg6IDEwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGhlaWdodDogMXB4O1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xuXHRcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjN2NjXG5cdH1cblxuXHQudW5pLWNvbGxhcHNlOmJlZm9yZSB7XG5cdFx0cG9zaXRpb246IGFic29sdXRlO1xuXHRcdHotaW5kZXg6IDEwO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdHRvcDogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGhlaWdodDogMXB4O1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xuXHRcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjN2NjXG5cdH1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///21\n");

/***/ }),
/* 22 */
/*!**********************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js ***!
  \**********************************************************************************************************/
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
  shadowMode, /* vue-cli only */
  components, // fixed by xxxxxx auto components
  renderjs // fixed by xxxxxx renderjs
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // fixed by xxxxxx auto components
  if (components) {
    if (!options.components) {
      options.components = {}
    }
    var hasOwn = Object.prototype.hasOwnProperty
    for (var name in components) {
      if (hasOwn.call(components, name) && !hasOwn.call(options.components, name)) {
        options.components[name] = components[name]
      }
    }
  }
  // fixed by xxxxxx renderjs
  if (renderjs) {
    (renderjs.beforeCreate || (renderjs.beforeCreate = [])).unshift(function() {
      this[renderjs.__module] = this
    });
    (options.mixins || (options.mixins = [])).push(renderjs)
  }

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
      // register for functioal component in vue file
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
/* 23 */
/*!*****************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-collapse-item.vue?vue&type=template&id=8eb80ed2& */ 24);\n/* harmony import */ var _uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-collapse-item.vue?vue&type=script&lang=js& */ 26);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBOEg7QUFDOUg7QUFDcUU7QUFDTDs7O0FBR2hFO0FBQ3FOO0FBQ3JOLGdCQUFnQiw0TkFBVTtBQUMxQixFQUFFLHVGQUFNO0FBQ1IsRUFBRSw0RkFBTTtBQUNSLEVBQUUscUdBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsZ0dBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1jb2xsYXBzZS1pdGVtLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD04ZWI4MGVkMiZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1jb2xsYXBzZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWNvbGxhcHNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGx1Z3MvdW5pLXVpL3VuaS1jb2xsYXBzZS1pdGVtL3VuaS1jb2xsYXBzZS1pdGVtLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///23\n");

/***/ }),
/* 24 */
/*!************************************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue?vue&type=template&id=8eb80ed2& ***!
  \************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-collapse-item.vue?vue&type=template&id=8eb80ed2& */ 25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_template_id_8eb80ed2___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 25 */
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue?vue&type=template&id=8eb80ed2& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "view",
    {
      class: _vm._$s(0, "c", [
        "uni-collapse-cell",
        {
          "uni-collapse-cell--disabled": _vm.disabled,
          "uni-collapse-cell--open": _vm.isOpen
        }
      ]),
      attrs: {
        "hover-class": _vm._$s(
          0,
          "a-hover-class",
          _vm.disabled ? "" : "uni-collapse-cell--hover"
        ),
        _i: 0
      }
    },
    [
      _c(
        "view",
        {
          staticClass: _vm._$s(1, "sc", "uni-collapse-cell__title"),
          attrs: { _i: 1 },
          on: { click: _vm.onClick }
        },
        [
          _vm._$s(2, "i", _vm.thumb)
            ? _c(
                "view",
                {
                  staticClass: _vm._$s(
                    2,
                    "sc",
                    "uni-collapse-cell__title-extra"
                  ),
                  attrs: { _i: 2 }
                },
                [
                  _c("image", {
                    staticClass: _vm._$s(
                      3,
                      "sc",
                      "uni-collapse-cell__title-img"
                    ),
                    attrs: { src: _vm._$s(3, "a-src", _vm.thumb), _i: 3 }
                  })
                ]
              )
            : _vm._e(),
          _c(
            "view",
            {
              staticClass: _vm._$s(4, "sc", "uni-collapse-cell__title-inner"),
              attrs: { _i: 4 }
            },
            [
              _c(
                "view",
                {
                  staticClass: _vm._$s(
                    5,
                    "sc",
                    "uni-collapse-cell__title-text"
                  ),
                  attrs: { _i: 5 }
                },
                [_vm._v(_vm._$s(5, "t0-0", _vm._s(_vm.title)))]
              )
            ]
          ),
          _c(
            "view",
            {
              staticClass: _vm._$s(6, "sc", "uni-collapse-cell__title-arrow"),
              class: _vm._$s(6, "c", {
                "uni-active": _vm.isOpen,
                "uni-collapse-cell--animation": _vm.showAnimation === true
              }),
              attrs: { _i: 6 }
            },
            [
              _c("uni-icon", {
                attrs: { color: "#bbb", size: "20", type: "arrowdown", _i: 7 }
              })
            ],
            1
          )
        ]
      ),
      _c(
        "view",
        {
          staticClass: _vm._$s(8, "sc", "uni-collapse-cell__content"),
          class: _vm._$s(8, "c", {
            "uni-collapse-cell--animation": _vm.showAnimation === true
          }),
          style: _vm._$s(8, "s", { height: _vm.isOpen ? _vm.height : "0px" }),
          attrs: { _i: 8 }
        },
        [
          _c(
            "view",
            { attrs: { id: _vm._$s(9, "a-id", _vm.elId), _i: 9 } },
            [_vm._t("default", null, { _i: 10 })],
            2
          )
        ]
      )
    ]
  )
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 26 */
/*!******************************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-collapse-item.vue?vue&type=script&lang=js& */ 27);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_collapse_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXF2QixDQUFnQixtd0JBQUcsRUFBQyIsImZpbGUiOiIyNi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWNvbGxhcHNlLWl0ZW0udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1jb2xsYXBzZS1pdGVtLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///26\n");

/***/ }),
/* 27 */
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nvar _uniIcon = _interopRequireDefault(__webpack_require__(/*! ../uni-icon/uni-icon.vue */ 28));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };} //\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\n//\nvar _default = { name: 'UniCollapseItem', components: { uniIcon: _uniIcon.default }, props: { title: { // 列表标题\n      type: String, default: '' }, name: { // 唯一标识符\n      type: [Number, String], default: 0 }, disabled: { // 是否禁用\n      type: Boolean, default: false }, showAnimation: { // 是否显示动画\n      type: Boolean, default: false }, open: { // 是否展开\n      type: Boolean, default: false },\n    thumb: { // 缩略图\n      type: String,\n      default: '' } },\n\n\n  data: function data() {\n    /**\n                          * TODO 兼容新旧编译器\n                          * 新编译器（自定义组件模式）下必须使用固定数值，否则部分平台下会获取不到节点。\n                          * 随机数值是在旧编译器下使用的，旧编译器模式已经不推荐使用，后续直接废掉随机数值的写法。\n                          */\n    var elId = this.__call_hook ? 'uni_collapse_item' : \"Uni_\".concat(Math.ceil(Math.random() * 10e5).toString(36));\n    return {\n      isOpen: false,\n      height: 'auto',\n      elId: elId };\n\n  },\n  watch: {\n    open: function open(val) {\n      this.isOpen = val;\n    } },\n\n  inject: ['collapse'],\n  created: function created() {\n    this.isOpen = this.open;\n    this.nameSync = this.name ? this.name : this.collapse.childrens.length;\n    this.collapse.childrens.push(this);\n    if (this.collapse.accordion) {\n      if (this.isOpen) {\n        var lastEl = this.collapse.childrens[this.collapse.childrens.length - 2];\n        if (lastEl) {\n          this.collapse.childrens[this.collapse.childrens.length - 2].isOpen = false;\n        }\n      }\n    }\n  },\n\n\n\n\n\n\n  onReady: function onReady() {\n    this.getSize();\n  },\n\n  methods: {\n    getSize: function getSize() {var _this = this;\n      if (this.showAnimation) {\n        uni.createSelectorQuery().in(this).select(\"#\".concat(this.elId)).boundingClientRect().exec(function (ret) {\n          _this.height = ret[0].height + 'px';\n        });\n      }\n      __f__(\"log\", \"获取尺寸\", \" at plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue:104\");\n    },\n    onClick: function onClick() {var _this2 = this;\n      if (this.disabled) {\n        return;\n      }\n      if (this.collapse.accordion) {\n        this.collapse.childrens.forEach(function (vm) {\n          if (vm === _this2) {\n            return;\n          }\n          vm.isOpen = false;\n        });\n        __f__(\"log\", \"点击1\", \" at plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue:117\");\n\n      }\n      this.isOpen = !this.isOpen;\n      this.collapse.onChange && this.collapse.onChange();\n      __f__(\"log\", \"点击2\", \" at plugs/uni-ui/uni-collapse-item/uni-collapse-item.vue:122\");\n    } } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z3MvdW5pLXVpL3VuaS1jb2xsYXBzZS1pdGVtL3VuaS1jb2xsYXBzZS1pdGVtLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBc0JBLCtGOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7ZUFDQSxFQUNBLHVCQURBLEVBRUEsY0FDQSx5QkFEQSxFQUZBLEVBS0EsU0FDQTtBQUNBLGtCQURBLEVBRUEsV0FGQSxFQURBLEVBS0E7QUFDQSw0QkFEQSxFQUVBLFVBRkEsRUFMQSxFQVNBO0FBQ0EsbUJBREEsRUFFQSxjQUZBLEVBVEEsRUFhQTtBQUNBLG1CQURBLEVBRUEsY0FGQSxFQWJBLEVBaUJBO0FBQ0EsbUJBREEsRUFFQSxjQUZBLEVBakJBO0FBcUJBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQXJCQSxFQUxBOzs7QUErQkEsTUEvQkEsa0JBK0JBO0FBQ0E7Ozs7O0FBS0E7QUFDQTtBQUNBLG1CQURBO0FBRUEsb0JBRkE7QUFHQSxnQkFIQTs7QUFLQSxHQTNDQTtBQTRDQTtBQUNBLFFBREEsZ0JBQ0EsR0FEQSxFQUNBO0FBQ0E7QUFDQSxLQUhBLEVBNUNBOztBQWlEQSxzQkFqREE7QUFrREEsU0FsREEscUJBa0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBOURBOzs7Ozs7O0FBcUVBLFNBckVBLHFCQXFFQTtBQUNBO0FBQ0EsR0F2RUE7O0FBeUVBO0FBQ0EsV0FEQSxxQkFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBRkE7QUFHQTtBQUNBO0FBQ0EsS0FSQTtBQVNBLFdBVEEscUJBU0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUxBO0FBTUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQTFCQSxFQXpFQSxFIiwiZmlsZSI6IjI3LmpzIiwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxuXHQ8dmlldyA6Y2xhc3M9XCJbJ3VuaS1jb2xsYXBzZS1jZWxsJyx7J3VuaS1jb2xsYXBzZS1jZWxsLS1kaXNhYmxlZCc6ZGlzYWJsZWQsJ3VuaS1jb2xsYXBzZS1jZWxsLS1vcGVuJzppc09wZW59XVwiIDpob3Zlci1jbGFzcz1cImRpc2FibGVkID8gJycgOiAndW5pLWNvbGxhcHNlLWNlbGwtLWhvdmVyJ1wiPlxuXHRcdDx2aWV3IGNsYXNzPVwidW5pLWNvbGxhcHNlLWNlbGxfX3RpdGxlXCIgQGNsaWNrPVwib25DbGlja1wiPlxuXHRcdFx0PHZpZXcgdi1pZj1cInRodW1iXCIgY2xhc3M9XCJ1bmktY29sbGFwc2UtY2VsbF9fdGl0bGUtZXh0cmFcIj5cblx0XHRcdFx0PGltYWdlIDpzcmM9XCJ0aHVtYlwiIGNsYXNzPVwidW5pLWNvbGxhcHNlLWNlbGxfX3RpdGxlLWltZ1wiIC8+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS1pbm5lclwiPlxuXHRcdFx0XHQ8dmlldyBjbGFzcz1cInVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS10ZXh0XCI+e3sgdGl0bGUgfX08L3ZpZXc+XG5cdFx0XHQ8L3ZpZXc+XG5cdFx0XHQ8dmlldyA6Y2xhc3M9XCJ7J3VuaS1hY3RpdmUnOmlzT3BlbiwndW5pLWNvbGxhcHNlLWNlbGwtLWFuaW1hdGlvbic6c2hvd0FuaW1hdGlvbj09PXRydWV9XCIgY2xhc3M9XCJ1bmktY29sbGFwc2UtY2VsbF9fdGl0bGUtYXJyb3dcIj5cblx0XHRcdFx0PHVuaS1pY29uIGNvbG9yPVwiI2JiYlwiIHNpemU9XCIyMFwiIHR5cGU9XCJhcnJvd2Rvd25cIiAvPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0XHQ8dmlldyA6Y2xhc3M9XCJ7J3VuaS1jb2xsYXBzZS1jZWxsLS1hbmltYXRpb24nOnNob3dBbmltYXRpb249PT10cnVlfVwiIDpzdHlsZT1cIntoZWlnaHQ6aXNPcGVuID8gaGVpZ2h0IDogJzBweCd9XCIgY2xhc3M9XCJ1bmktY29sbGFwc2UtY2VsbF9fY29udGVudFwiPlxuXHRcdFx0PHZpZXcgOmlkPVwiZWxJZFwiPlxuXHRcdFx0XHQ8c2xvdCAvPlxuXHRcdFx0PC92aWV3PlxuXHRcdDwvdmlldz5cblx0PC92aWV3PlxuPC90ZW1wbGF0ZT5cblxuPHNjcmlwdD5cblx0aW1wb3J0IHVuaUljb24gZnJvbSAnLi4vdW5pLWljb24vdW5pLWljb24udnVlJ1xuXHRleHBvcnQgZGVmYXVsdCB7XG5cdFx0bmFtZTogJ1VuaUNvbGxhcHNlSXRlbScsXG5cdFx0Y29tcG9uZW50czoge1xuXHRcdFx0dW5pSWNvblxuXHRcdH0sXG5cdFx0cHJvcHM6IHtcblx0XHRcdHRpdGxlOiB7IC8vIOWIl+ihqOagh+mimFxuXHRcdFx0XHR0eXBlOiBTdHJpbmcsXG5cdFx0XHRcdGRlZmF1bHQ6ICcnXG5cdFx0XHR9LFxuXHRcdFx0bmFtZTogeyAvLyDllK/kuIDmoIfor4bnrKZcblx0XHRcdFx0dHlwZTogW051bWJlciwgU3RyaW5nXSxcblx0XHRcdFx0ZGVmYXVsdDogMFxuXHRcdFx0fSxcblx0XHRcdGRpc2FibGVkOiB7IC8vIOaYr+WQpuemgeeUqFxuXHRcdFx0XHR0eXBlOiBCb29sZWFuLFxuXHRcdFx0XHRkZWZhdWx0OiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNob3dBbmltYXRpb246IHsgLy8g5piv5ZCm5pi+56S65Yqo55S7XG5cdFx0XHRcdHR5cGU6IEJvb2xlYW4sXG5cdFx0XHRcdGRlZmF1bHQ6IGZhbHNlXG5cdFx0XHR9LFxuXHRcdFx0b3BlbjogeyAvLyDmmK/lkKblsZXlvIBcblx0XHRcdFx0dHlwZTogQm9vbGVhbixcblx0XHRcdFx0ZGVmYXVsdDogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHR0aHVtYjogeyAvLyDnvKnnlaXlm75cblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGF0YSgpIHtcblx0XHRcdC8qKlxuXHRcdFx0ICogVE9ETyDlhbzlrrnmlrDml6fnvJbor5Hlmahcblx0XHRcdCAqIOaWsOe8luivkeWZqO+8iOiHquWumuS5iee7hOS7tuaooeW8j++8ieS4i+W/hemhu+S9v+eUqOWbuuWumuaVsOWAvO+8jOWQpuWImemDqOWIhuW5s+WPsOS4i+S8muiOt+WPluS4jeWIsOiKgueCueOAglxuXHRcdFx0ICog6ZqP5py65pWw5YC85piv5Zyo5pen57yW6K+R5Zmo5LiL5L2/55So55qE77yM5pen57yW6K+R5Zmo5qih5byP5bey57uP5LiN5o6o6I2Q5L2/55So77yM5ZCO57ut55u05o6l5bqf5o6J6ZqP5py65pWw5YC855qE5YaZ5rOV44CCXG5cdFx0XHQgKi9cblx0XHRcdGNvbnN0IGVsSWQgPSB0aGlzLl9fY2FsbF9ob29rID8gJ3VuaV9jb2xsYXBzZV9pdGVtJyA6IGBVbmlfJHtNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIDEwZTUpLnRvU3RyaW5nKDM2KX1gXG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRpc09wZW46IGZhbHNlLFxuXHRcdFx0XHRoZWlnaHQ6ICdhdXRvJyxcblx0XHRcdFx0ZWxJZDogZWxJZFxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0d2F0Y2g6IHtcblx0XHRcdG9wZW4odmFsKSB7XG5cdFx0XHRcdHRoaXMuaXNPcGVuID0gdmFsXG5cdFx0XHR9XG5cdFx0fSxcblx0XHRpbmplY3Q6IFsnY29sbGFwc2UnXSxcblx0XHRjcmVhdGVkKCkge1xuXHRcdFx0dGhpcy5pc09wZW4gPSB0aGlzLm9wZW5cblx0XHRcdHRoaXMubmFtZVN5bmMgPSB0aGlzLm5hbWUgPyB0aGlzLm5hbWUgOiB0aGlzLmNvbGxhcHNlLmNoaWxkcmVucy5sZW5ndGhcblx0XHRcdHRoaXMuY29sbGFwc2UuY2hpbGRyZW5zLnB1c2godGhpcylcblx0XHRcdGlmICh0aGlzLmNvbGxhcHNlLmFjY29yZGlvbikge1xuXHRcdFx0XHRpZiAodGhpcy5pc09wZW4pIHtcblx0XHRcdFx0XHRsZXQgbGFzdEVsID0gdGhpcy5jb2xsYXBzZS5jaGlsZHJlbnNbdGhpcy5jb2xsYXBzZS5jaGlsZHJlbnMubGVuZ3RoIC0gMl1cblx0XHRcdFx0XHRpZiAobGFzdEVsKSB7XG5cdFx0XHRcdFx0XHR0aGlzLmNvbGxhcHNlLmNoaWxkcmVuc1t0aGlzLmNvbGxhcHNlLmNoaWxkcmVucy5sZW5ndGggLSAyXS5pc09wZW4gPSBmYWxzZVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gI2lmZGVmIEg1XG5cdFx0bW91bnRlZCgpIHtcblx0XHRcdHRoaXMuZ2V0U2l6ZSgpXG5cdFx0fSxcblx0XHQvLyAjZW5kaWZcblx0XHQvLyAjaWZuZGVmIEg1XG5cdFx0b25SZWFkeSgpIHtcblx0XHRcdHRoaXMuZ2V0U2l6ZSgpXG5cdFx0fSxcblx0XHQvLyAjZW5kaWZcblx0XHRtZXRob2RzOiB7XG5cdFx0XHRnZXRTaXplKCkge1xuXHRcdFx0XHRpZiAodGhpcy5zaG93QW5pbWF0aW9uKSB7XG5cdFx0XHRcdFx0dW5pLmNyZWF0ZVNlbGVjdG9yUXVlcnkoKS5pbih0aGlzKS5zZWxlY3QoYCMke3RoaXMuZWxJZH1gKS5ib3VuZGluZ0NsaWVudFJlY3QoKS5leGVjKChyZXQpID0+IHtcblx0XHRcdFx0XHRcdHRoaXMuaGVpZ2h0ID0gcmV0WzBdLmhlaWdodCArICdweCdcblx0XHRcdFx0XHR9KVxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Y29uc29sZS5sb2coXCLojrflj5blsLrlr7hcIilcblx0XHRcdH0sXG5cdFx0XHRvbkNsaWNrKCkge1xuXHRcdFx0XHRpZiAodGhpcy5kaXNhYmxlZCkge1xuXHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICh0aGlzLmNvbGxhcHNlLmFjY29yZGlvbikge1xuXHRcdFx0XHRcdHRoaXMuY29sbGFwc2UuY2hpbGRyZW5zLmZvckVhY2godm0gPT4ge1xuXHRcdFx0XHRcdFx0aWYgKHZtID09PSB0aGlzKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVyblxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0dm0uaXNPcGVuID0gZmFsc2Vcblx0XHRcdFx0XHR9KVxyXG5cdFx0XHRcdFx0Y29uc29sZS5sb2coXCLngrnlh7sxXCIpXHRcblx0XHRcdFx0XHRcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlblxuXHRcdFx0XHR0aGlzLmNvbGxhcHNlLm9uQ2hhbmdlICYmIHRoaXMuY29sbGFwc2Uub25DaGFuZ2UoKVxyXG5cdFx0XHRcdGNvbnNvbGUubG9nKFwi54K55Ye7MlwiKVx0XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG48L3NjcmlwdD5cblxuPHN0eWxlPlxuXHRAY2hhcnNldCBcIlVURi04XCI7XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsIHtcblx0XHRwb3NpdGlvbjogcmVsYXRpdmVcblx0fVxuXG5cdC51bmktY29sbGFwc2UtY2VsbC0taG92ZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjFcblx0fVxuXG5cdC51bmktY29sbGFwc2UtY2VsbC0tb3BlbiB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMVxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsLS1kaXNhYmxlZCB7XG5cdFx0b3BhY2l0eTogLjNcblx0fVxuXG5cdC51bmktY29sbGFwc2UtY2VsbC0tYW5pbWF0aW9uIHtcblx0XHR0cmFuc2l0aW9uOiBhbGwgLjNzXG5cdH1cblxuXHQudW5pLWNvbGxhcHNlLWNlbGw6YWZ0ZXIge1xuXHRcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0XHR6LWluZGV4OiAzO1xuXHRcdHJpZ2h0OiAwO1xuXHRcdGJvdHRvbTogMDtcblx0XHRsZWZ0OiAwO1xuXHRcdGhlaWdodDogMXB4O1xuXHRcdGNvbnRlbnQ6ICcnO1xuXHRcdC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZVkoLjUpO1xuXHRcdHRyYW5zZm9ybTogc2NhbGVZKC41KTtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjYzhjN2NjXG5cdH1cblxuXHQudW5pLWNvbGxhcHNlLWNlbGxfX3RpdGxlIHtcblx0XHRwYWRkaW5nOiAyNHVweCAzMHVweDtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRcdGZsZXg6IDE7XG5cdFx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IHJvdztcblx0XHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlclxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS1leHRyYSB7XG5cdFx0bWFyZ2luLXJpZ2h0OiAxOHVweDtcblx0XHRkaXNwbGF5OiBmbGV4O1xuXHRcdGZsZXgtZGlyZWN0aW9uOiByb3c7XG5cdFx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdFx0YWxpZ24taXRlbXM6IGNlbnRlclxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS1pbWcge1xuXHRcdGhlaWdodDogNTJ1cHg7XG5cdFx0d2lkdGg6IDUydXB4XG5cdH1cblxuXHQudW5pLWNvbGxhcHNlLWNlbGxfX3RpdGxlLWFycm93IHtcblx0XHR3aWR0aDogMjBweDtcblx0XHRoZWlnaHQ6IDIwcHg7XG5cdFx0dHJhbnNmb3JtOiByb3RhdGUoMCk7XG5cdFx0dHJhbnNmb3JtLW9yaWdpbjogY2VudGVyIGNlbnRlclxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS1hcnJvdy51bmktYWN0aXZlIHtcblx0XHR0cmFuc2Zvcm06IHJvdGF0ZSgtMTgwZGVnKVxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS1pbm5lciB7XG5cdFx0ZmxleDogMTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGRpc3BsYXk6IGZsZXg7XG5cdFx0ZmxleC1kaXJlY3Rpb246IGNvbHVtblxuXHR9XG5cblx0LnVuaS1jb2xsYXBzZS1jZWxsX190aXRsZS10ZXh0IHtcblx0XHRmb250LXNpemU6IDMydXB4O1xuXHRcdHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuXHRcdHdoaXRlLXNwYWNlOiBub3dyYXA7XG5cdFx0Y29sb3I6IGluaGVyaXQ7XG5cdFx0bGluZS1oZWlnaHQ6IDEuNTtcblx0XHRvdmVyZmxvdzogaGlkZGVuXG5cdH1cblxuXHQudW5pLWNvbGxhcHNlLWNlbGxfX2NvbnRlbnQge1xuXHRcdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0XHR3aWR0aDogMTAwJTtcblx0XHRvdmVyZmxvdzogaGlkZGVuO1xuXHRcdGJhY2tncm91bmQ6ICNmZmZcblx0fVxuXG5cdC51bmktY29sbGFwc2UtY2VsbF9fY29udGVudCB2aWV3IHtcblx0XHRmb250LXNpemU6IDI4dXB4XG5cdH1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///27\n");

/***/ }),
/* 28 */
/*!***********************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-icon/uni-icon.vue ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=template&id=181bd9a9& */ 29);\n/* harmony import */ var _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./uni-icon.vue?vue&type=script&lang=js& */ 31);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);\n\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(\n  _uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[\"default\"],\n  _uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__[\"render\"],\n  _uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__[\"staticRenderFns\"],\n  false,\n  null,\n  null,\n  null,\n  false,\n  _uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__[\"components\"],\n  renderjs\n)\n\ncomponent.options.__file = \"plugs/uni-ui/uni-icon/uni-icon.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBcUg7QUFDckg7QUFDNEQ7QUFDTDs7O0FBR3ZEO0FBQ3FOO0FBQ3JOLGdCQUFnQiw0TkFBVTtBQUMxQixFQUFFLDhFQUFNO0FBQ1IsRUFBRSxtRkFBTTtBQUNSLEVBQUUsNEZBQWU7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsdUZBQVU7QUFDWjtBQUNBOztBQUVBO0FBQ2UsZ0YiLCJmaWxlIjoiMjguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIsIHN0YXRpY1JlbmRlckZucywgcmVjeWNsYWJsZVJlbmRlciwgY29tcG9uZW50cyB9IGZyb20gXCIuL3VuaS1pY29uLnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD0xODFiZDlhOSZcIlxudmFyIHJlbmRlcmpzXG5pbXBvcnQgc2NyaXB0IGZyb20gXCIuL3VuaS1pY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vdW5pLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiXG5cblxuLyogbm9ybWFsaXplIGNvbXBvbmVudCAqL1xuaW1wb3J0IG5vcm1hbGl6ZXIgZnJvbSBcIiEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvcnVudGltZS9jb21wb25lbnROb3JtYWxpemVyLmpzXCJcbnZhciBjb21wb25lbnQgPSBub3JtYWxpemVyKFxuICBzY3JpcHQsXG4gIHJlbmRlcixcbiAgc3RhdGljUmVuZGVyRm5zLFxuICBmYWxzZSxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgbnVsbCxcbiAgZmFsc2UsXG4gIGNvbXBvbmVudHMsXG4gIHJlbmRlcmpzXG4pXG5cbmNvbXBvbmVudC5vcHRpb25zLl9fZmlsZSA9IFwicGx1Z3MvdW5pLXVpL3VuaS1pY29uL3VuaS1pY29uLnZ1ZVwiXG5leHBvcnQgZGVmYXVsdCBjb21wb25lbnQuZXhwb3J0cyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///28\n");

/***/ }),
/* 29 */
/*!******************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-icon/uni-icon.vue?vue&type=template&id=181bd9a9& ***!
  \******************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icon.vue?vue&type=template&id=181bd9a9& */ 30);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_10_0_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_filter_modules_template_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_template_id_181bd9a9___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),
/* 30 */
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--10-0!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/filter-modules-template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-icon/uni-icon.vue?vue&type=template&id=181bd9a9& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("view", {
    staticClass: _vm._$s(0, "sc", "uni-icon"),
    class: _vm._$s(0, "c", "uni-icon-" + _vm.type),
    style: _vm._$s(0, "s", { color: _vm.color, "font-size": _vm.size + "px" }),
    attrs: { _i: 0 },
    on: { click: _vm._onClick }
  })
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),
/* 31 */
/*!************************************************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-icon/uni-icon.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../../../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./uni-icon.vue?vue&type=script&lang=js& */ 32);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_uni_icon_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQTR1QixDQUFnQiwwdkJBQUcsRUFBQyIsImZpbGUiOiIzMS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vdW5pLWljb24udnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiOyBleHBvcnQgZGVmYXVsdCBtb2Q7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvYmFiZWwtbG9hZGVyL2xpYi9pbmRleC5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay1wcmVwcm9jZXNzLWxvYWRlci9pbmRleC5qcz8/cmVmLS02LTEhLi4vLi4vLi4vLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stdW5pLWFwcC1sb2FkZXIvdXNpbmctY29tcG9uZW50cy5qcyEuLi8uLi8uLi8uLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvdnVlLWxvYWRlci9saWIvaW5kZXguanM/P3Z1ZS1sb2FkZXItb3B0aW9ucyEuL3VuaS1pY29uLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///31\n");

/***/ }),
/* 32 */
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/plugs/uni-ui/uni-icon/uni-icon.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0; //\n//\n//\n//\nvar _default =\n{\n  name: 'UniIcon',\n  props: {\n    type: {\n      type: String,\n      default: '' },\n\n    color: {\n      type: String,\n      default: '#333333' },\n\n    size: {\n      type: [Number, String],\n      default: 16 } },\n\n\n  methods: {\n    _onClick: function _onClick() {\n      this.$emit('click');\n    } } };exports.default = _default;//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vcGx1Z3MvdW5pLXVpL3VuaS1pY29uL3VuaS1pY29uLnZ1ZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUtBO0FBQ0EsaUJBREE7QUFFQTtBQUNBO0FBQ0Esa0JBREE7QUFFQSxpQkFGQSxFQURBOztBQUtBO0FBQ0Esa0JBREE7QUFFQSx3QkFGQSxFQUxBOztBQVNBO0FBQ0EsNEJBREE7QUFFQSxpQkFGQSxFQVRBLEVBRkE7OztBQWdCQTtBQUNBLFlBREEsc0JBQ0E7QUFDQTtBQUNBLEtBSEEsRUFoQkEsRSIsImZpbGUiOiIzMi5qcyIsInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cblx0PHZpZXcgOmNsYXNzPVwiJ3VuaS1pY29uLScgKyB0eXBlXCIgOnN0eWxlPVwieyBjb2xvcjogY29sb3IsICdmb250LXNpemUnOiBzaXplICsgJ3B4JyB9XCIgY2xhc3M9XCJ1bmktaWNvblwiIEBjbGljaz1cIl9vbkNsaWNrXCIgLz5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQ+XG5cdGV4cG9ydCBkZWZhdWx0IHtcblx0XHRuYW1lOiAnVW5pSWNvbicsXG5cdFx0cHJvcHM6IHtcblx0XHRcdHR5cGU6IHtcblx0XHRcdFx0dHlwZTogU3RyaW5nLFxuXHRcdFx0XHRkZWZhdWx0OiAnJ1xuXHRcdFx0fSxcblx0XHRcdGNvbG9yOiB7XG5cdFx0XHRcdHR5cGU6IFN0cmluZyxcblx0XHRcdFx0ZGVmYXVsdDogJyMzMzMzMzMnXG5cdFx0XHR9LFxuXHRcdFx0c2l6ZToge1xuXHRcdFx0XHR0eXBlOiBbTnVtYmVyLCBTdHJpbmddLFxuXHRcdFx0XHRkZWZhdWx0OiAxNlxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0bWV0aG9kczoge1xuXHRcdFx0X29uQ2xpY2soKSB7XG5cdFx0XHRcdHRoaXMuJGVtaXQoJ2NsaWNrJylcblx0XHRcdH1cblx0XHR9XG5cdH1cbjwvc2NyaXB0PlxuXG48c3R5bGU+XG5cdEBmb250LWZhY2Uge1xuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRzcmM6IHVybChkYXRhOmZvbnQvdHJ1ZXR5cGU7Y2hhcnNldD11dGYtODtiYXNlNjQsQUFFQUFBQVFBUUFBQkFBQVJrWlVUWUJIMWxzQUFIY1FBQUFBSEVkRVJVWUFKd0JtQUFCMjhBQUFBQjVQVXk4eVdlMWN5UUFBQVlnQUFBQmdZMjFoY0dCaGJCVUFBQUswQUFBQ1FtTjJkQ0FNcGY0MEFBQVBLQUFBQUNSbWNHZHRNUGVlbFFBQUJQZ0FBQW1XWjJGemNBQUFBQkFBQUhib0FBQUFDR2RzZVdac2ZnZlpBQUFRRUFBQVlReG9aV0ZrRGRieWp3QUFBUXdBQUFBMmFHaGxZUWQrQXlZQUFBRkVBQUFBSkdodGRIZ2tlQnVZQUFBQjZBQUFBTXBzYjJOaFBFa25MZ0FBRDB3QUFBRENiV0Y0Y0FJakEzSUFBQUZvQUFBQUlHNWhiV1ZjZVdEREFBQnhIQUFBQWcxd2IzTjA1cGtQc1FBQWN5d0FBQU84Y0hKbGNLVzV2bVlBQUE2UUFBQUFsUUFCQUFBQUFRQUE2b3YxZFY4UFBQVUFId1FBQUFBQUFOSnJUWmtBQUFBQTJEaGh1UUFBL3lBRUFBTWdBQUFBQ0FBQ0FBQUFBQUFBQUFFQUFBTWcveUFBWEFRQUFBQUFBQVFBQUFFQUFBQUFBQUFBQUFBQUFBQUFBQUFGQUFFQUFBQmdBWG9BREFBQUFBQUFBZ0JHQUZRQWJBQUFBUVFCb2dBQUFBQUFCQVAvQWZRQUJRQUFBcGtDekFBQUFJOENtUUxNQUFBQjZ3QXpBUWtBQUFJQUJnTUFBQUFBQUFBQUFBQUJFQUFBQUFBQUFBQUFBQUFBVUdaRlpBR0FBQjNtRWdNcy95d0FYQU1nQU9BQUFBQUJBQUFBQUFNWUFzMEFBQUFnQUFFQmRnQWlBQUFBQUFGVkFBQUQ2UUFzQkFBQVlBREFBTUFBWUFEQUFNQUFvQUNBQUlBQVlBQ2dBSUFBZ0FCZ0FMTUFRQUJBQUFVQVZ3QmVBSUFCQUFEMEFRQUE5QUVBQUVBQVZnQ2dBT0FBd0FEQUFGRUFmZ0NBQUdBQVFBQmdBR0FBWUFBK0FGRUFZQUJBQUdBQVlBQTBBR0FBUGdGQUFRQUFnQUJBQUFBQUpRQ0JBUUFCUUFGQUFTd0FnQUJnQUlBQXdBQmdBR0FBd0FEQkFRQUFnQUNBQUdBQVlBREJBRUFBUkFCQUFCY0JYd0FUQU1BQXdBRkFBVUFCUUFGQUFNQUF3QUVlQUY4QVZRQkFBQUFBQUFBREFBQUFBd0FBQUJ3QUFRQUFBQUFCUEFBREFBRUFBQUFjQUFRQklBQUFBRVFBUUFBRkFBUUFBQUFkQUhqaEF1RXk0Z1BpTStKazR3UGpNK05nNDJUa0NlUVI1QlBrTk9RNTVFUGtadVJvNUhMbENPVXc1VExsTmVVMzVXRGxZK1ZsNVdqbGllV1E1aEwvL3dBQUFBQUFIUUI0NFFEaE1PSUE0akRpWU9NQTR6TGpZT05qNUFEa0VPUVQ1RFRrTitSQTVHRGthT1J3NVFEbE1PVXk1VFRsTitWZzVXTGxaZVZuNVlEbGtPWVMvLzhBQWYvay80c2ZCQjdYSGdvZDNoMnlIUmNjNlJ5OUhMc2NJQndhSEJrYitSdjNHL0ViMVJ2VUc4MGJRQnNaR3hnYkZ4c1dHdTRhN1Jyc0d1c2ExQnJPR2swQUFRQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQkJnQUFBUUFBQUFBQUFBQUJBZ0FBQUFJQUFBQUFBQUFBQUFBQUFBQUFBQUFCQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXdBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQXNBQXNzQ0JnWmkyd0FTd2daQ0N3d0ZDd0JDWmFzQVJGVzFnaEl5RWJpbGdnc0ZCUVdDR3dRRmtiSUxBNFVGZ2hzRGhaV1NDd0NrVmhaTEFvVUZnaHNBcEZJTEF3VUZnaHNEQlpHeUN3d0ZCWUlHWWdpb3BoSUxBS1VGaGdHeUN3SUZCWUliQUtZQnNnc0RaUVdDR3dObUFiWUZsWldSdXdBQ3RaV1NPd0FGQllaVmxaTGJBQ0xDQkZJTEFFSldGa0lMQUZRMUJZc0FValFyQUdJMEliSVNGWnNBRmdMYkFETENNaEl5RWdaTEVGWWtJZ3NBWWpRcklLQUFJcUlTQ3dCa01naWlDS3NBQXJzVEFGSllwUldHQlFHMkZTV1ZnaldTRWdzRUJUV0xBQUt4c2hzRUJaSTdBQVVGaGxXUzJ3QkN5d0NDTkNzQWNqUXJBQUkwS3dBRU93QjBOUldMQUlReXV5QUFFQVEyQkNzQlpsSEZrdHNBVXNzQUJESUVVZ3NBSkZZN0FCUldKZ1JDMndCaXl3QUVNZ1JTQ3dBQ3Nqc1FRRUpXQWdSWW9qWVNCa0lMQWdVRmdoc0FBYnNEQlFXTEFnRzdCQVdWa2pzQUJRV0dWWnNBTWxJMkZFUkMyd0J5eXhCUVZGc0FGaFJDMndDQ3l3QVdBZ0lMQUtRMHF3QUZCWUlMQUtJMEpac0F0RFNyQUFVbGdnc0FzalFsa3RzQWtzSUxnRUFHSWd1QVFBWTRvalliQU1RMkFnaW1BZ3NBd2pRaU10c0Fvc1MxUllzUWNCUkZra3NBMWxJM2d0c0Fzc1MxRllTMU5Zc1FjQlJGa2JJVmtrc0JObEkzZ3RzQXdzc1FBTlExVllzUTBOUTdBQllVS3dDU3Rac0FCRHNBSWxRcklBQVFCRFlFS3hDZ0lsUXJFTEFpVkNzQUVXSXlDd0F5VlFXTEFBUTdBRUpVS0tpaUNLSTJHd0NDb2hJN0FCWVNDS0kyR3dDQ29oRzdBQVE3QUNKVUt3QWlWaHNBZ3FJVm13Q2tOSHNBdERSMkN3Z0dJZ3NBSkZZN0FCUldKZ3NRQUFFeU5Fc0FGRHNBQStzZ0VCQVVOZ1FpMndEU3l4QUFWRlZGZ0FzQTBqUWlCZ3NBRmh0UTRPQVFBTUFFSkNpbUN4REFRcnNHc3JHeUpaTGJBT0xMRUFEU3N0c0E4c3NRRU5LeTJ3RUN5eEFnMHJMYkFSTExFRERTc3RzQklzc1FRTkt5MndFeXl4QlEwckxiQVVMTEVHRFNzdHNCVXNzUWNOS3kyd0ZpeXhDQTByTGJBWExMRUpEU3N0c0Jnc3NBY3JzUUFGUlZSWUFMQU5JMElnWUxBQlliVU9EZ0VBREFCQ1FvcGdzUXdFSzdCckt4c2lXUzJ3R1N5eEFCZ3JMYkFhTExFQkdDc3RzQnNzc1FJWUt5MndIQ3l4QXhnckxiQWRMTEVFR0NzdHNCNHNzUVVZS3kyd0h5eXhCaGdyTGJBZ0xMRUhHQ3N0c0NFc3NRZ1lLeTJ3SWl5eENSZ3JMYkFqTENCZ3NBNWdJRU1qc0FGZ1E3QUNKYkFDSlZGWUl5QThzQUZnSTdBU1pSd2JJU0ZaTGJBa0xMQWpLN0FqS2kyd0pTd2dJRWNnSUxBQ1JXT3dBVVZpWUNOaE9DTWdpbFZZSUVjZ0lMQUNSV093QVVWaVlDTmhPQnNoV1Myd0ppeXhBQVZGVkZnQXNBRVdzQ1Vxc0FFVk1Cc2lXUzJ3Snl5d0J5dXhBQVZGVkZnQXNBRVdzQ1Vxc0FFVk1Cc2lXUzJ3S0N3Z05iQUJZQzJ3S1N3QXNBTkZZN0FCUldLd0FDdXdBa1Zqc0FGRllyQUFLN0FBRnJRQUFBQUFBRVErSXppeEtBRVZLaTJ3S2l3Z1BDQkhJTEFDUldPd0FVVmlZTEFBUTJFNExiQXJMQzRYUEMyd0xDd2dQQ0JISUxBQ1JXT3dBVVZpWUxBQVEyR3dBVU5qT0Myd0xTeXhBZ0FXSlNBdUlFZXdBQ05Dc0FJbFNZcUtSeU5ISTJFZ1dHSWJJVm13QVNOQ3Npd0JBUlVVS2kyd0xpeXdBQmF3QkNXd0JDVkhJMGNqWWJBR1JTdGxpaTRqSUNBOGlqZ3RzQzhzc0FBV3NBUWxzQVFsSUM1SEkwY2pZU0N3QkNOQ3NBWkZLeUN3WUZCWUlMQkFVVml6QWlBRElCdXpBaVlER2xsQ1FpTWdzQWxESUlvalJ5TkhJMkVqUm1Dd0JFT3dnR0pnSUxBQUt5Q0tpbUVnc0FKRFlHUWpzQU5EWVdSUVdMQUNRMkVic0FORFlGbXdBeVd3Z0dKaEl5QWdzQVFtSTBaaE9Cc2pzQWxEUnJBQ0piQUpRMGNqUnlOaFlDQ3dCRU93Z0dKZ0l5Q3dBQ3Nqc0FSRFlMQUFLN0FGSldHd0JTV3dnR0t3QkNaaElMQUVKV0JrSTdBREpXQmtVRmdoR3lNaFdTTWdJTEFFSmlOR1lUaFpMYkF3TExBQUZpQWdJTEFGSmlBdVJ5TkhJMkVqUERndHNERXNzQUFXSUxBSkkwSWdJQ0JHSTBld0FDc2pZVGd0c0RJc3NBQVdzQU1sc0FJbFJ5TkhJMkd3QUZSWUxpQThJeUVic0FJbHNBSWxSeU5ISTJFZ3NBVWxzQVFsUnlOSEkyR3dCaVd3QlNWSnNBSWxZYkFCUldNaklGaGlHeUZaWTdBQlJXSmdJeTRqSUNBOGlqZ2pJVmt0c0RNc3NBQVdJTEFKUXlBdVJ5TkhJMkVnWUxBZ1lHYXdnR0lqSUNBOGlqZ3RzRFFzSXlBdVJyQUNKVVpTV0NBOFdTNnhKQUVVS3kyd05Td2pJQzVHc0FJbFJsQllJRHhaTHJFa0FSUXJMYkEyTENNZ0xrYXdBaVZHVWxnZ1BGa2pJQzVHc0FJbFJsQllJRHhaTHJFa0FSUXJMYkEzTExBdUt5TWdMa2F3QWlWR1VsZ2dQRmt1c1NRQkZDc3RzRGdzc0M4cmlpQWdQTEFFSTBLS09DTWdMa2F3QWlWR1VsZ2dQRmt1c1NRQkZDdXdCRU11c0NRckxiQTVMTEFBRnJBRUpiQUVKaUF1UnlOSEkyR3dCa1VySXlBOElDNGpPTEVrQVJRckxiQTZMTEVKQkNWQ3NBQVdzQVFsc0FRbElDNUhJMGNqWVNDd0JDTkNzQVpGS3lDd1lGQllJTEJBVVZpekFpQURJQnV6QWlZREdsbENRaU1nUjdBRVE3Q0FZbUFnc0FBcklJcUtZU0N3QWtOZ1pDT3dBME5oWkZCWXNBSkRZUnV3QTBOZ1diQURKYkNBWW1Hd0FpVkdZVGdqSUR3ak9Cc2hJQ0JHSTBld0FDc2pZVGdoV2JFa0FSUXJMYkE3TExBdUt5NnhKQUVVS3kyd1BDeXdMeXNoSXlBZ1BMQUVJMElqT0xFa0FSUXJzQVJETHJBa0t5MndQU3l3QUJVZ1I3QUFJMEt5QUFFQkZSUVRMckFxS2kyd1BpeXdBQlVnUjdBQUkwS3lBQUVCRlJRVExyQXFLaTJ3UHl5eEFBRVVFN0FyS2kyd1FDeXdMU290c0VFc3NBQVdSU01nTGlCR2lpTmhPTEVrQVJRckxiQkNMTEFKSTBLd1FTc3RzRU1zc2dBQU9pc3RzRVFzc2dBQk9pc3RzRVVzc2dFQU9pc3RzRVlzc2dFQk9pc3RzRWNzc2dBQU95c3RzRWdzc2dBQk95c3RzRWtzc2dFQU95c3RzRW9zc2dFQk95c3RzRXNzc2dBQU55c3RzRXdzc2dBQk55c3RzRTBzc2dFQU55c3RzRTRzc2dFQk55c3RzRThzc2dBQU9Tc3RzRkFzc2dBQk9Tc3RzRkVzc2dFQU9Tc3RzRklzc2dFQk9Tc3RzRk1zc2dBQVBDc3RzRlFzc2dBQlBDc3RzRlVzc2dFQVBDc3RzRllzc2dFQlBDc3RzRmNzc2dBQU9Dc3RzRmdzc2dBQk9Dc3RzRmtzc2dFQU9Dc3RzRm9zc2dFQk9Dc3RzRnNzc0RBckxyRWtBUlFyTGJCY0xMQXdLN0EwS3kyd1hTeXdNQ3V3TlNzdHNGNHNzQUFXc0RBcnNEWXJMYkJmTExBeEt5NnhKQUVVS3kyd1lDeXdNU3V3TkNzdHNHRXNzREVyc0RVckxiQmlMTEF4SzdBMkt5MndZeXl3TWlzdXNTUUJGQ3N0c0dRc3NESXJzRFFyTGJCbExMQXlLN0ExS3kyd1ppeXdNaXV3TmlzdHNHY3NzRE1yTHJFa0FSUXJMYkJvTExBeks3QTBLeTJ3YVN5d015dXdOU3N0c0dvc3NETXJzRFlyTGJCckxDdXdDR1d3QXlSUWVMQUJGVEF0QUFCTHVBRElVbGl4QVFHT1dia0lBQWdBWXlDd0FTTkVJTEFESTNDd0RrVWdJRXU0QUE1UlM3QUdVMXBZc0RRYnNDaFpZR1lnaWxWWXNBSWxZYkFCUldNallyQUNJMFN6Q2drRkJDdXpDZ3NGQkN1ekRnOEZCQ3Rac2dRb0NVVlNSTE1LRFFZRUs3RUdBVVN4SkFHSVVWaXdRSWhZc1FZRFJMRW1BWWhSV0xnRUFJaFlzUVlCUkZsWldWbTRBZitGc0FTTnNRVUFSQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBTWdBeUF4ai80UU1nL3lBREdQL2hBeUQvSUFBQUFDZ0FLQUFvQVdRQ0NnTzBCWW9HRGdhaUI0Z0lnQWpJQ1hZSjhBcDZDclFMR0F0c0RQZ04zQTUwRDF3UnloSXlFekFUbmhRYUZISVV2QlZBRmVJWEhCZDhHRW9Za0JqV0dUSVpqQm5vR21BYW9oc0NHMVFibEJ2cUhDZ2NlaHlpSE9BZERCMXFIYVFkNmg0SUhrWWVuaDdZSHpnZ21pRGtJUXdoSkNFOElWd2h2aUljSkdZa2lDVDBKWVltQUNaNEozWW50aWpFS1E0cGVpbTZLc1FzRUN3K0xMd3RTQzNlTGZZdURpNG1MajR1aUM3UUx4WXZYQzk0TDVvd0JqQ0dBQUFBQWdBaUFBQUJNZ0txQUFNQUJ3QXBRQ1lBQUFBREFnQURWd0FDQVFFQ1N3QUNBZ0ZQQkFFQkFnRkRBQUFIQmdVRUFBTUFBeEVGRHlzekVTRVJKek1SSXlJQkVPN016QUtxL1ZZaUFtWUFBQUFGQUN6LzRRTzhBeGdBRmdBd0FEb0FVZ0JlQVhkTHNCTlFXRUJLQWdFQURRNE5BQTVtQUFNT0FRNERYZ0FCQ0FnQlhCQUJDUWdLQmdsZUVRRU1CZ1FHREY0QUN3UUxhUThCQ0FBR0RBZ0dXQUFLQndVQ0JBc0tCRmtTQVE0T0RWRUFEUTBLRGtJYlM3QVhVRmhBU3dJQkFBME9EUUFPWmdBRERnRU9BMTRBQVFnSUFWd1FBUWtJQ2dnSkNtWVJBUXdHQkFZTVhnQUxCQXRwRHdFSUFBWU1DQVpZQUFvSEJRSUVDd29FV1JJQkRnNE5VUUFORFFvT1FodExzQmhRV0VCTUFnRUFEUTROQUE1bUFBTU9BUTREWGdBQkNBZ0JYQkFCQ1FnS0NBa0taaEVCREFZRUJnd0VaZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RaHRBVGdJQkFBME9EUUFPWmdBRERnRU9Bd0ZtQUFFSURnRUlaQkFCQ1FnS0NBa0taaEVCREFZRUJnd0VaZ0FMQkF0cER3RUlBQVlNQ0FaWUFBb0hCUUlFQ3dvRVdSSUJEZzROVVFBTkRRb09RbGxaV1VBb1UxTTdPekl4RnhkVFhsTmVXMWc3VWp0U1MwTTNOVEU2TWpvWE1CY3dVUkV4R0JFb0ZVQVRGaXNCQmlzQklnNENIUUVoTlRRbU5UUXVBaXNCRlNFRkZSUVdGQTRDSXdZbUt3RW5JUWNyQVNJbklpNENQUUVYSWdZVUZqTXlOalFtRndZSERnTWVBVHNHTWpZbkxnRW5KaWNCTlRRK0Fqc0JNaFlkQVFFWkd4cFRFaVVjRWdPUUFRb1lKeDZGL2tvQ29nRVZIeU1PRGg4T0lDMytTU3dkSWhRWkdTQVRDSGNNRWhJTURSSVNqQWdHQlFzRUFnUVBEaVZEVVZCQUpCY1dDUVVKQlFVRy9xUUZEeG9WdkI4cEFoOEJEQmtuR2t3cEVCd0VEU0FiRW1HSU5CYzZPaVVYQ1FFQmdJQUJFeHNnRHFjL0VSb1JFUm9SZkJvV0V5UU9FQTBJR0JvTkl4RVRGQUYzNUFzWUV3d2RKdU1BQUFJQVlQK0FBNkFDd0FBSEFGY0FTRUJGU2tsRE9UZzJKeVljR1JjV0RBUURUdzhDQVFRQ1FBQUVBd0VEQkFGbUFBQUZBUUlEQUFKWkFBTUVBUU5OQUFNREFWRUFBUU1CUlFrSVRFc3dMUWhYQ1ZjVEVBWVFLd0FnQmhBV0lEWVFKVEllQWhVVUJ5WW5MZ0UxTkRjMU5qOERQZ0UzTmpjMk56WXZBVFVtTnpZbUp5WW5Jd1lIRGdFWEZnY1VCeFVPQVJjZUFSY1dGeFlWTUJVVUJoUVBBUlFqRGdFSEpqVTBQZ1FDclA2bzlQUUJXUFQrWUUyT1pqeFlVV2tFQWdFQkFRSUNBZ0VDQWcwRkV3Z0hDQUVFQ2dRT0V5aE5JMHdvRkE0RUNnUUJCQUVFQlE0SUJBNElBUUVDQVNsd0hGa2JNVWRUWXdMQTlQNm85UFFCV05FOFpvNU5pbW9oSHdFR0RnTURCZ01EQmdZR0F3VURIU0lXTENNVUFnRVZPUk02R2pNRkJUTWFPaE01RlFFQkFRb1RHaGtnQ1NFZUVDQUlBd1VDQVFFQkRDZ01hb3MwWTFOSE1Sc0FBQUFBQXdEQS8rQURRQUpnQUFBQVV3REFBVFpMc0F0UVdFQWNrNUtGQUFRQkM1NmFsWVI2QlFBQnFhZHpRa0EvRVFvSUNnQURRQnRMc0F4UVdFQWNrNUtGQUFRQkM1NmFsWVI2QlFBQnFhZHpRa0EvRVFvSUJ3QURRQnRBSEpPU2hRQUVBUXVlbXBXRWVnVUFBYW1uYzBKQVB4RUtDQW9BQTBCWldVdXdDMUJZUURVREFRRUxBQXNCQUdZRUFRQUtDd0FLWkFBS0J3c0tCMlFKQ0FJSEJnc0hCbVFBQWdBTEFRSUxXUXdCQmdZRlVBQUZCUXNGUWh0THNBeFFXRUF2QXdFQkN3QUxBUUJtQkFFQUJ3c0FCMlFLQ1FnREJ3WUxCd1prQUFJQUN3RUNDMWtNQVFZR0JWQUFCUVVMQlVJYlFEVURBUUVMQUFzQkFHWUVBUUFLQ3dBS1pBQUtCd3NLQjJRSkNBSUhCZ3NIQm1RQUFnQUxBUUlMV1F3QkJnWUZVQUFGQlFzRlFsbFpRQjVWVkl1S1pXUmlZVjllWFZ4VXdGWEFUazA1T0M4dUp5VWZIaE1TRFE0ckNRRXVBU2NtSnk0QlB3RTJOejRETlRjeVBnRTNQZ0UxTkM0REl6YytBVGMySmlNaURnRVZIZ0VmQVNJSEZCWVhIZ01YTXhZWEZoOERCZ2NPQVFjT0JBY0dGU0UwTGdNSElUWTNOamMrQVRjeU5qSStBVEkrQVRJM05qYzJKejBDTkNZOUF5Y3VBU2NtTHdFdUFpY21KeVkrQVRjMUppY21Oell5RnhZSERnSUhNUVlWSGdFSEJnY1VEZ0VWQnc0Q0J3NEJEd0VkQVFZZEFSUUdGUlFYSGdJWEZoY2VBUmNXRng0Q0Z3R1ZBVUlRUkFNZUNnTUJBUUVNQmdJRUJBTUJBZ1VKQXdFTEF3TURBZ0VEQWdZQkFWQkdMMFlnQVFZQ0F3c0JDd0VDQlFRRkFRSUhCd01GQndNQkFRSUZHQXNHRXhFVEVnaHBBb0FTRnlFVTR2N3RCUXdXSUFrWkVRRUZBd1FEQkFNRUF3SXBFQXdCQVFVRENnTUZCd0VCQ0FrQkJBUUNBZ2NCQ1FFQkhTQnlJQjBCQVFVREFRRUJDd01FQlFrSkFRSUVCUUVEQ2dNRkFRRU1CeHdQQndnWUVSa0pJUlVFQlFVQ0FZMyt1d1lMQVFZTUJDa1NFeE1SQlJBUkR3VUZBUXdMQnlZTEJRY0VBZ0VKQml3YU5sRW9QQ01hS2drSUV3c2tDUVlLQlFJQkxoRUhDUThGUkFzREJRb0RBUU1EQkFRREpVTVNJUlVVQ0VRSENCQUxCQVVDQVFFQkFRRUJDUlFPTWdnSkJ3UUZBZ01DQ0FjRkVnZ09LZ2NFQlFRREV4SU1DQWtEREJzd0tSMGhJUjBwRlNZTkF3VUdBaElORWhNREJBVUVCd2tXRlFRSUVBY0hDQUlEQkFrRURBWXlEZ2tPQlFFQ0JBSUZCQXNRQXdRRkF3QUFCQURBLytBRFFBSmdBQXNBREFCZkFNd0Jja3V3QzFCWVFCeWZucEVNQkFjRXFxYWhrSVlGQmdlMXMzOU9URXNkRmdnUUJnTkFHMHV3REZCWVFCeWZucEVNQkFjRXFxYWhrSVlGQmdlMXMzOU9URXNkRmdnTkJnTkFHMEFjbjU2UkRBUUhCS3Ftb1pDR0JRWUh0Yk4vVGt4TEhSWUlFQVlEUUZsWlM3QUxVRmhBUndrQkJ3UUdCQWNHWmdvQkJoQUVCaEJrQUJBTkJCQU5aQThPQWcwTUJBME1aQUFJQUJFQkNCRlpBZ0VBQlFFREJBQURWd0FCQUFRSEFRUlhFZ0VNREF0UUFBc0xDd3RDRzB1d0RGQllRRUVKQVFjRUJnUUhCbVlLQVFZTkJBWU5aQkFQRGdNTkRBUU5ER1FBQ0FBUkFRZ1JXUUlCQUFVQkF3UUFBMWNBQVFBRUJ3RUVWeElCREF3TFVBQUxDd3NMUWh0QVJ3a0JCd1FHQkFjR1pnb0JCaEFFQmhCa0FCQU5CQkFOWkE4T0FnME1CQTBNWkFBSUFCRUJDQkZaQWdFQUJRRURCQUFEVndBQkFBUUhBUVJYRWdFTURBdFFBQXNMQ3d0Q1dWbEFKR0ZnbDVaeGNHNXRhMnBwYUdETVljeGFXVVZFT3pvek1Tc3FIeDRSRVJFUkVSQVRGQ3NCSXpVakZTTVZNeFV6TlRNRkFTNEJKeVluTGdFL0FUWTNQZ00xTnpJK0FUYytBVFUwTGdNak56NEJOelltSXlJT0FSVWVBUjhCSWdjVUZoY2VBeGN6RmhjV0h3TUdCdzRCQnc0RUJ3WVZJVFF1QXdjaE5qYzJOejRCTnpJMk1qNEJNajRCTWpjMk56WW5QUUkwSmowREp5NEJKeVl2QVM0Q0p5WW5KajRCTnpVbUp5WTNOaklYRmdjT0FnY3hCaFVlQVFjR0J4UU9BUlVIRGdJSERnRVBBUjBCQmgwQkZBWVZGQmNlQWhjV0Z4NEJGeFlYSGdJWEEwQXlIREl5SERMK1ZRRkNFRVFESGdvREFRRUJEQVlDQkFRREFRSUZDUU1CQ3dNREF3SUJBd0lHQVFGUVJpOUdJQUVHQWdNTEFRc0JBZ1VFQlFFQ0J3Y0RCUWNEQVFFQ0JSZ0xCaE1SRXhJSWFRS0FFaGNoRk9MKzdRVU1GaUFKR1JFQkJRTUVBd1FEQkFNQ0tSQU1BUUVGQXdvREJRY0JBUWdKQVFRRUFnSUhBUWtCQVIwZ2NpQWRBUUVGQXdFQkFRc0RCQVVKQ1FFQ0JBVUJBd29EQlFFQkRBY2NEd2NJR0JFWkNTRVZCQVVGQWdIdU1qSWNNakpGL3JzR0N3RUdEQVFwRWhNVEVRVVFFUThGQlFFTUN3Y21Dd1VIQkFJQkNRWXNHalpSS0R3akdpb0pDQk1MSkFrR0NnVUNBUzRSQndrUEJVUUxBd1VLQXdFREF3UUVBeVZERWlFVkZBaEVCd2dRQ3dRRkFnRUJBUUVCQVFrVURqSUlDUWNFQlFJREFnZ0hCUklJRGlvSEJBVUVBeE1TREFnSkF3d2JNQ2tkSVNFZEtSVW1EUU1GQmdJU0RSSVRBd1FGQkFjSkZoVUVDQkFIQndnQ0F3UUpCQXdHTWc0SkRnVUJBZ1FDQlFRTEVBTUVCUU1BQUFJQVlQK0FBNkFDd0FBSEFFUUFNa0F2UVJzYUN3UUNBd0ZBQUFBQUF3SUFBMWtFQVFJQkFRSk5CQUVDQWdGUkFBRUNBVVVKQ0Nja0NFUUpSQk1RQlJBckFDQUdFQllnTmhBQklpWW5QZ0UzUGdFMU5DY21KeVluSmo4Qk5UWW1KeVkrQWpjMk56TVdGeDRCQndZWE1CY2VBUWNPQVFjT0JSVVVGaGNXRnc0Q0FxeitxUFQwQVZqMC9tQldtVFVjY0NnRUFnZ09CQk1KQndnQkFnUUVBZ0lHRGdvb1RDTk5LQlFPQkFvRUFRUUJCQVVQQndJR0J3Z0ZCQUlEYVZFaldtMEN3UFQrcVBUMEFWajkxMGhBRENnTUFRWU9JQkFlSVJVdEl4UUJBZ2N4RmdjWkdoOE9Nd1VGTXhvNkV6a1ZBd29UR2hrZ0NRc1lGQkFPRVFnT0JnRWZJU3M5SVFBQUFBRUF3UC9nQTBBQ1lBQlNBRGRBTkVFL1BoQUpCUVVBQVVBREFRRUNBQUlCQUdZRUFRQUZBZ0FGWkFBQ0FnVlBBQVVGQ3dWQ1RVdzROeTR0SmlRZUhSSVJCZzRySlM0Qkp5WW5MZ0UvQVRZM1BnTTFOekkrQVRjK0FUVTBMZ01qTno0Qk56WW1JeUlPQVJVZUFSOEJJZ2NVRmhjZUF4Y3pGaGNXSHdNR0J3NEJCdzRFQndZVklUUXVBd0xYRUVRREhnb0RBUUVCREFZQ0JBUURBUUlGQ1FNQkN3TURBd0lCQXdJR0FRRlFSaTlHSUFFR0FnTUxBUXNCQWdVRUJRRUNCd2NEQlFjREFRRUNCUmdMQmhNUkV4SUlhUUtBRWhjaEZFZ0dDd0VHREFRcEVoTVRFUVVRRVE4RkJRRU1Dd2NtQ3dVSEJBSUJDUVlzR2paUktEd2pHaW9KQ0JNTEpBa0dDZ1VDQVM0UkJ3a1BCVVFMQXdVS0F3RURBd1FFQXlWREVpRVZGQWdBQUFBQUFnREEvK0FEUUFKZ0FBc0FYZ0RBUUFwTlMwb2NGUVVMQmdGQVM3QUxVRmhBTGdBSUFRQUlYQWtCQndRR0FBZGVDZ0VHQ3dRR0MyUUNBUUFGQVFNRUFBTllBQUVBQkFjQkJGY0FDd3NMQzBJYlM3QU1VRmhBTFFBSUFRaG9DUUVIQkFZQUIxNEtBUVlMQkFZTFpBSUJBQVVCQXdRQUExZ0FBUUFFQndFRVZ3QUxDd3NMUWh0QUxnQUlBUWhvQ1FFSEJBWUVCd1ptQ2dFR0N3UUdDMlFDQVFBRkFRTUVBQU5ZQUFFQUJBY0JCRmNBQ3dzTEMwSlpXVUFVV1ZoRVF6bzVNakFxS1I0ZEVSRVJFUkVRREJRckFTTTFJeFVqRlRNVk16VXpBeTRCSnlZbkxnRS9BVFkzUGdNMU56SStBVGMrQVRVMExnTWpOejRCTnpZbUl5SU9BUlVlQVI4QklnY1VGaGNlQXhjekZoY1dId01HQnc0QkJ3NEVCd1lWSVRRdUF3TkFNaHd5TWh3eWFSQkVBeDRLQXdFQkFRd0dBZ1FFQXdFQ0JRa0RBUXNEQXdNQ0FRTUNCZ0VCVUVZdlJpQUJCZ0lEQ3dFTEFRSUZCQVVCQWdjSEF3VUhBd0VCQWdVWUN3WVRFUk1TQ0drQ2dCSVhJUlFCN2pJeUhESXkvbllHQ3dFR0RBUXBFaE1URVFVUUVROEZCUUVNQ3djbUN3VUhCQUlCQ1FZc0dqWlJLRHdqR2lvSkNCTUxKQWtHQ2dVQ0FTNFJCd2tQQlVRTEF3VUtBd0VEQXdRRUF5VkRFaUVWRkFnQUFBSUFvUC9BQTNjQ2dBQkpBSXdBWEVCWllnRUdCM2wzRWhBRUFBWUNRQUFEQWdjQ0F3ZG1BQVlIQUFjR0FHWUFBZ0FIQmdJSFdRQUFBQWtCQUFsWkFBRUFDQVVCQ0ZrQUJRUUVCVTBBQlFVRVVRQUVCUVJGaFlPQWZtVmpZV0JQVFVKQUxTd3FLQ1FpQ2hBckpTNEJJeUlPQVFjR0l5SW1Md0VtTHdFbUx3RXVBeThCTGdJMU5ENENOelluSmk4QkppTWlCd1lqQnc0Q0J3NEJGQjRCRng0QkZ4NEJGeDRCTXpJK0FqYzJKeVlIQmdjR0l5SW5MZ0VuTGdZMk56WTNNRGN5TlRZek1oWWZBUjRCQndZWEhnSWZBUjRCRnhZWEZoOEJGaDhCRmpNeU5qYzJNekllQWhjV0J3WURRQnRuSlFZTUNnUXdDZ1FLQ3dJbEZnUUJBZ1FHQmcwUURBRUtDQWdDQmdrSElSNFFNUUlkSmh3a0FRRUJEaGNQQkFRRUNCUVFJMGd6TERvMk5XRWtGaFlqSUJJMkt3WWRKQ1lLRlVCb05Ea3JHU2dsSVNNVEJBTUVDU0VDQVIwVERCVUxBaTRqRlNBQ0FRb0xEQUVYRlFzQkFnTUJBeFluQWh3UkRSOGZCZ29QS3lrakNoc0dCSUViT3dJRUFoOEhDZ0lmR0FNQ0F3TUdCdzBURFFFTENnd0VBd2dMRGdrc1B5RTdBeVFYQVFFSkZoZ01EUllpSkRNZFFHRTFMakFuSmlvQ0Nob1dRVGNHYVNzRUFVb21MeTBaTHpJMVB6TW1HQTRjRlFFQkVnd05BamxLSEN3WUNSTU9EZ0VaRndzQkF3SUJCQmNpQWhnUEZBUVJHQm9LR3hZUkFBQURBSUFBSUFPQUFpQUFBd0FHQUJNQVBFQTVFaEVPRFF3SkNBUUlBd0lCUUFRQkFRQUNBd0VDVndVQkF3QUFBMHNGQVFNREFFOEFBQU1BUXdjSEFBQUhFd2NUQmdVQUF3QURFUVlQS3hNUklSRUJKU0VCRVJjSEZ6Y1hOeGMzSnpjUmdBTUEvb0QrdWdLTS9Wcm1pQVNlWUdDZUJJam1BaUQrQUFJQS91ajQva0FCcksrYkJJdEpTWXNFbTYvK1ZBQUNBSUQvNEFPQUFtQUFKd0JWQUdwQVp6UXlJUU1FQUJRQkFRSktBUWdCVGhnQ0RBay9BUWNNQlVBQUJBQUNBQVFDWmdVREFnSUJBQUlCWkFzS0FnZ0JDUUVJQ1dZQUNRd0JDUXhrQUFZQUFBUUdBRmtBQVFBTUJ3RU1XUUFIQndzSFFsRlBUVXRKU0VaRlJVUStQQ2tvRVJJUklTWVFEUlFyQURJZUFSVVVCd1lqSWljaUl5Y2pKaWNpQnlNSERnRVBBVDRETlRRbkppY21KeVkxTkRZa0lnNEJGUlFYSGdJWEpqVXhGaFVVQndZV0Z6TXlQd0kyUHdFekl6WTNNaGNWTXpJVkZqTXlQZ0UwSmdHaHZxTmVZMldXVkRjQkFnRUNEdzRSRUFFRUJRc0NUd3NMQlFFTkFnRURBVFZlQVdyUXNXYzlBUU1DQVFJSEpBSUpDQVlEQkFObEFRb0pBUUVMQ3dzS0FnRTlXbWl3Wm1jQ1FFcUFTMjlNVHhNQkJBRUdBZ0VFQVNNaEpCTUZBaFlUQXdFRUFVTlBTMzlxVTQ1VVdrd0JCQVFCQXdFTERBSnlCZ3dDQVFFc0FRTUVBd0VEQVFFVVRZcW5qZ0FBQUFBREFHRC9nQU9nQXNBQUNRQVJBQmdBbnJVVUFRWUZBVUJMc0FwUVdFQTZBQUVBQ0FBQkNHWUFCZ1VGQmwwQUFnQUFBUUlBVnd3QkNBQUxCQWdMVndBRUFBTUpCQU5YQ2dFSkJRVUpTd29CQ1FrRlR3Y0JCUWtGUXh0QU9RQUJBQWdBQVFobUFBWUZCbWtBQWdBQUFRSUFWd3dCQ0FBTEJBZ0xWd0FFQUFNSkJBTlhDZ0VKQlFVSlN3b0JDUWtGVHdjQkJRa0ZRMWxBRmdvS0dCY1dGUk1TQ2hFS0VSRVJFaEVSRVJFUURSWXJFeUVWTXpVaEVUTTFJemNSSVJjek5UTVJBeU1WSnlFUklZQUNBQ0Q5d09EQTRBRkZnQnRnSUdCdS9zNENBQUtnd09EK1FDQ2cva0NBZ0FIQS9tQnRiUUdBQUFBQUFRQ2cvOEFEZHdLQUFFa0FOa0F6RWhBQ0FBTUJRQUFDQXdKb0FBTUFBMmdBQVFBRUFBRUVaZ0FBQVFRQVRRQUFBQVJSQUFRQUJFVkNRQzBzS2lna0lnVVFLeVV1QVNNaURnRUhCaU1pSmk4QkppOEJKaThCTGdNdkFTNENOVFErQWpjMkp5WXZBU1lqSWdjR0l3Y09BZ2NPQVJRZUFSY2VBUmNlQVJjZUFUTXlQZ0kzTmljbUEwQWJaeVVHREFvRU1Bb0VDZ3NDSlJZRUFRSUVCZ1lORUF3QkNnZ0lBZ1lKQnlFZUVERUNIU1ljSkFFQkFRNFhEd1FFQkFnVUVDTklNeXc2TmpWaEpCWVdJeUFTTmlzR2dSczdBZ1FDSHdjS0FoOFlBd0lEQXdZSERSTU5BUXNLREFRRENBc09DU3cvSVRzREpCY0JBUWtXR0F3TkZpSWtNeDFBWVRVdU1DY21LZ0lLR2haQk53WUFBQUFBQWdDQUFDQURnQUlnQUF3QUR3QXJRQ2dQQ3dvSEJnVUNBUWdBQVFGQUFBRUFBQUZMQUFFQkFFOENBUUFCQUVNQUFBNE5BQXdBREFNT0t5VVJCUmNISndjbkJ5YzNKUkVCSVFFRGdQNzZpQVNlWUdDZUJJaisrZ0x2L1NFQmNDQUI1TWViQkl0SlNZc0VtOGYrSEFJQS91Z0FBQUFCQUlELzRBT0FBbUFBTFFCQlFENGlEQW9EQWdBbUFRWURGd0VCQmdOQUJRUUNBZ0FEQUFJRFpnQURCZ0FEQm1RQUFBQUdBUUFHV1FBQkFRc0JRaWtuSlNNaElCNGRIUndXRkJBSER5c0FJZzRCRlJRWEhnSVhKalV4RmhVVUJ3WVdGek15UHdJMlB3RXpJelkzTWhjVk16SVZGak15UGdFMEpnSm8wTEZuUFFFREFnRUNCeVFDQ1FnR0F3UURaUUVLQ1FFQkN3c0xDZ0lCUFZwb3NHWm5BbUJUamxSYVRBRUVCQUVEQVFzTUFuSUdEQUlCQVN3QkF3UURBUU1CQVJSTmlxZU9BQUFBQUFJQVlQK0FBNkFDd0FBRkFBMEFiVXV3Q2xCWVFDa0FBUVlEQmdFRFpnQUVBd01FWFFBQUFBSUdBQUpYQndFR0FRTUdTd2NCQmdZRFR3VUJBd1lEUXh0QUtBQUJCZ01HQVFObUFBUURCR2tBQUFBQ0JnQUNWd2NCQmdFREJrc0hBUVlHQTA4RkFRTUdBME5aUUE0R0JnWU5CZzBSRVJJUkVSQUlGQ3NCSVJFek5TRUZFU0VYTXpVekVRS2cvY0RnQVdEK3dBRkZnQnRnQXNEK1FPQWcva0NBZ0FIQUFBQUFBQWNBcy8vaEF5Z0Nad0EzQUVZQVdBQm1BSEVBandDN0FRQkFJWmtCQ3drWkZCTURBQWQyQVFRQUJRRU1BMHdwQWdJTUJVQitBUVVsQVEwQ1AwdXdDMUJZUUZRQUNRZ0xDQWtMWmdBS0N3RUxDZ0ZtQUFBSEJBRUFYZzhCQkEwSEJBMWtBQTBEQncwRFpBQU1Bd0lEREFKbURnRUNBbWNBQ0FBTENnZ0xXUUFCQlFNQlRRWUJCUUFIQUFVSFdRQUJBUU5SQUFNQkEwVWJRRlVBQ1FnTENBa0xaZ0FLQ3dFTENnRm1BQUFIQkFjQUJHWVBBUVFOQndRTlpBQU5Bd2NOQTJRQURBTUNBd3dDWmc0QkFnSm5BQWdBQ3dvSUMxa0FBUVVEQVUwR0FRVUFCd0FGQjFrQUFRRURVUUFEQVFORldVQW1jM0k1T0xXMHNyR2tvNkNmbUplVWtvU0RnSDk5ZkhLUGM0OUJQemhHT1VZZUhSRVFFQTRyQVM0Q05qOEJOaWN1QVE0QkR3RU9BU0ltSnpVbVBnSTNOQzRDQmdjT0JCVU9BUjBCSGdRWEZqNENOelluSmdNR0xnSTFORFkzTmhZVkZBY0dKdzRERnhVVUhnRVhGalkzUGdFdUFRY0dKalUwTmpjMkhnSVZGQVkzQmlZbkpqWTNOaFlYRmpjeVBnRTNOVFl1QkE4QklnWVZGRE0ySGdNT0FSVVVGeFluTGdFR0lnNEJCeU1QQVFZVkZCNEJNelkzTmpJZUF4Y1dCdzRDRlJRV01qWTNNejRCTGdNQ2hRY0lBUUVCQVJnZENpQWdIUWtLQlFnR0F3RUJBUUVDQVFNTUZTVVpHVE1uSUJBWEZ3UWlMejg2SVNkWFQwSVBKRUFRNnlWRk1oNXRUVTlzUWpWWUhTZ1FDQUVCRGcwdlVob01BaEl6UGc4VUV3NElEZ2tHRlM4RkN3SURBZ1VHQ3dJRzlBUUhCUUVDQnhBVkZoSUZCZ2NLRVJBV0RnWURBUUVPQWdzSkV4RU9Ed1lGQVFFQkVnY0xCd0VWQXc0VkdSa1pDUk1MQVFFRERoVU1BUUVKQVJBWklTSUJMZ0VHQmdZQ0FqSWxEQWtIQ2dVRkFnSUJBd1FEQ0FjTUJBNFhHZzRCQ3dzckx5d2JBU2hQRkJRc1JTc2ZEZ01FRWlkQ0ttTTBEZjdtQWhVbk9TRkJYd1VFVEVGS055djdCU0FuSmcwTkJRNGdDQjRZS1JROE55SzBBaE1QRUJzQ0FRVUpEUWdRR1VFRkFRWUZFQVFGQVFZTnRBVUlCZ0llTFJrUkJBRUJBUXdKRmdZSENSWVBGQWNDRXdJQi9nTURBUU1DQVFFQkJoZ0pEZ2tCQmdFQ0N4QWVFemN5QWdZUUJ3MFBDaEFxU2pjdUh4UUFBQVlBUVAra0E4QUNtd0FPQUJrQVBBQkhBRThBY3dDSlFJWlNBUVFMWmw0Q0RRQmZPakVEQmcwRFFEazBBZ1k5Q2dFSENBc0lCd3RtRVFFTEJBZ0xCR1FRQWc4REFBRU5BUUFOWmc0QkRRWUJEUVprQUFZR1p3QU1DUUVJQnd3SVdRVUJCQUVCQkUwRkFRUUVBVkVEQVFFRUFVVlJVQkFQQVFCdGFtbG9WbFJRYzFGelRVeEpTRU5CUGowd0xpSWZIaDBXRlE4WkVCa0dCQUFPQVE0U0Rpc2xJaVkwTmpNeUhnTVZGQTRCSXlJdUFUVTBOaklXRkFZRk5DNEJKeVlyQVNJT0JoVVVGeDRCTXpJM0Z6QVhIZ0UrQVRVblBnRUFJaVkwTmpNeUhnRVZGRFl5RmhRR0lpWTBGeklYTGdFaklnNERGUlFXRndjVUJoUWVBVDhCSGdFek1Ec0NMZ0UxTkQ0QkF3NFFGeGNRQmd3S0J3UUxFZE1LRWdzWElCY1hBV3BFZFVjR0JRa2ROaklzSmg0VkN3Z1hsV0ZCT2o0QkFnVUVBeElzTXYxVUlCY1hFQXNTQ3IwaEZoWWhGdG9HQ3hHMGR6VmhUenNoUFRZWUFRVUpDbGdjT3lBREJBTUVCRkNJNFJjaEZ3UUlDUXdIQ2hJTEN4SUtFUmNYSVJjNFAydENCQUVLRWhvaEp5b3dHUjBkVDJnWktnRUJBUUVIQmtJaVhnRkVGeUFYQ2hJTEVEY1hJQmNYSUVFQlpvZ2NNMFZWTFVCdkoxa0JCQW9EQXdROUNnb1BIUTlIZUVZQUFBZ0FRUDloQThFQzRnQUhBQkFBRkFBWUFCMEFKZ0F2QURjQVprQmpNQ0FUQXdJRU5pRUNBUUkzSFF3QkJBQUJMUndDQXdBc0p4b1hCQVVEQlVBQUFRSUFBZ0VBWmdBQUF3SUFBMlFJQVFRR0FRSUJCQUpYQndFREJRVURTd2NCQXdNRlVRQUZBd1ZGSHg0VkZSRVJLaWdlSmg4bUZSZ1ZHQkVVRVJRU0ZRa1FLeVVCQmhVVUZ5RW1BU0VXRndFK0FUVTBKeVluQndFV0Z6OEJFVFkzSndNaUJ4RUJMZ01ERmpNeU5qY1JCZ2NCRGdRSEZ3RmQvdmNVR0FFUEJnSkkvdkVGQlFFSkNnbzFSSUsvL201RWdML2JmMEMvMDBwR0FSTVFIeUVpbEVCREprZ2lCUVgrcHhndUtTUWZETDZjQVFsQVJFcEdCZ0ViQlFiKzl4OUNJa3VJZ0VEQS9scC9QNzdFL29ORWdiOEJ5UmorOFFFVEJRY0ZBL3lURkF3TUFRNEZCQUl2RFNBbUtpOFp2Z0FBQUFBRkFBWC9RZ1A3QXdBQUlRQTBBRUFBVUFCZ0FNRkFEZ2dCQWdVV0FRRUNBa0FRQVFFOVM3QUxVRmhBS1FvQkFBQURCQUFEV1EwSURBWUVCQWtIQWdVQ0JBVlpDd0VDQVFFQ1RRc0JBZ0lCVVFBQkFnRkZHMHV3RmxCWVFDSU5DQXdHQkFRSkJ3SUZBZ1FGV1FzQkFnQUJBZ0ZWQUFNREFGRUtBUUFBQ2dOQ0cwQXBDZ0VBQUFNRUFBTlpEUWdNQmdRRUNRY0NCUUlFQlZrTEFRSUJBUUpOQ3dFQ0FnRlJBQUVDQVVWWldVQW1VbEZDUVNNaUFRQmJXVkZnVW1CS1NFRlFRbEE4T3pZMUxTc2lOQ00wR2hnQUlRRWhEZzRyQVNJT0FoVVVGaGNXRGdRUEFUNEVOeDRCTXpJK0FqVTBMZ0VESWk0Qk5UUStBek15SGdJVkZBNEJBaUlHRlJRZUFUSStBVFUwSlNJT0FoVVVGak15UGdJMU5DWWhJZ1lWRkI0RE16SStBVFF1QVFJRlo3MktVbWxiQVFnT0V4SVFCUVVJSFZCR1VCZ2FOeHhudW9aUGh1ZUtkTUYwSzFCb2drUlZtMjlDY0w1UFBTb1VJU2NpRlA3T0R4b1REQ29lRHhzVURDc0JzUjhwQncwU0Znd1VJUlFVSVFNQVJIU2dXR1d5UEJjdEpDRVlFUVVFQVFZVEZpUVVCUVZFZEtCWWRjaHovUFJUbTJFNmJsbERKVHBoaFVsaG1sUUJweWNmRlNNVkZTTVZIeWNLRWhzUElDME1GUndRSHljbkh3MFhFdzRJRlNNcUlCRUFBQUVBVi85dUE2a0MwUUY1QWFKQmpRRmlBSVlBZEFCeUFIRUFiZ0J0QUd3QWF3QnFBR2tBWUFBaEFCUUFFd0FTQUJFQUVBQU1BQXNBQ2dBRkFBUUFBd0FDQUFFQUFBQWJBQXNBQUFGSEFVWUJSUUFEQUFJQUN3RmdBVjBCWEFGYkFWb0JXUUZZQVVvQXFBQ25BSjBBa0FDUEFJNEFqUUNNQUJBQURRQUNBSnNBbWdDWkFKUUFrd0NTQUFZQUFRQU5BUzRCTFFFcUFMVUF0QUN6QUFZQUNRQUJBU2NCSmdFbEFTUUJJd0VpQVNFQklBRWZBUjRCSFFFY0FSc0JHZ0VaQVJnQkZnRVZBUlFCRXdFU0FSRUJFQUVQQVE0QkRRRU1BTzBBekFETEFNa0F5QURIQU1ZQXhBRERBTUlBd1FEQUFMOEF2Z0M5QUx3QUt3QUZBQWtCQ2dEb0FPY0Ewd0FFQUFNQUJRQUhBRUFCUkFDSEFBSUFDd0NjQUpFQUFnQU5BUXNBQVFBRkFBTUFQMEJGREFFTEFBSUFDd0ptQUFJTkFBSU5aQUFOQVFBTkFXUUFBUWtBQVFsa0NnRUpCUUFKQldRRUFRTUZCd1VEQjJZSUFRY0had0FBQ3dVQVN3QUFBQVZQQmdFRkFBVkRRUjRCVndGVUFVTUJRZ0ZCQVQ4QkxBRXJBU2tCS0FEOUFQb0ErQUQzQU93QTZ3RHFBT2tBMndEYUFOa0EyQUNtQUtVQW1BQ1ZBRGtBTndBT0FBNHJFeThDTlQ4Rk5UOEhOVDhpT3dFZk1SVUhGUThESFFFZkVSVVBEU3NDTHd3akR3d2ZEUlVYQngwQkJ4VVBEeU1ISXk4Tkl5Y2pKdzhKSXc4Qkt3SXZGRFUzTlRjOUFUOFBNejhCTXpVdkVTc0JOU01QQVJVUERTc0NMd2cxUHhmUkFnRUJBZ0VEQWdRRkFRRUNBZ0lDQWdNQkFnTUVBZ01EQkFRRUJRWURBd2NIQndrSkNRc0lDQWtLQ1FzTEN3c01DdzBOR1EwbkRRME9EQTBORFEwTURBd0xDd2tGQkFrSUJ3Y0dCd1VGQmdRSEJBTURBZ0lDQkFNQ0FRSUJBZ1VEQWdRREFnSUNBUUVCQVFNQ0FnTU1DUVFHQlFZR0J3UURBd01DQXdJREFRRUJBZ1FCQWdJQ0F3SURBZ1FEQWdNREJBSUNBd0lFQkFRREJBVUZBUUVDQWdJRUJRY0dCZ2NIQXdVS0FRRUZGZ2tKQ1FnRUFnTURBUUlCQVFJQ0JBTURBd1lHQndnSkJBUUtDZ3NMREFzbERnd05EUTRPRFEwT0RRY0dCQVFMREFjSUJRY0tDd2NHRUFnSURBZ0lDQW9uRmhZTEN3b0tDZ2tKQ0FnR0J3SURBZ0lDQVFJQkFRRUJBZ0VEQWdFRUF3UUNCUU1GQlFVR0JnY0hBZ0VCQkFvR0NBY0lDUVFFQkFNRkF3UURBd0lCQVFFREFRRUJCUUlFQXdVRUJRVUdCZ1VIQndFQ0FRSUNBZ0lCQVFJQkFRRUNBUU1EQXdNRUJRVUZCd2NIQmdjSUJBVUdCd3NJQVVzRkJ3UU9CZ1lIQndnSEJRVUhCd2tEQkFRQ0V3b0xEUTRIQ1FjSUNnZ0pDUVVFQ2dvSkNna0tDZ2NHQndVRkJRVUVBd1FEQWdJRUFRSUJBd01EQkFRRkJnVUhCd1lFQXdjSUJ3Z0lDQWtJQ1FnUkNRZ0pDQWNKRHcwTUNoQUNBd2dGQmdZSENBZ0lCQVlFQkFZRkNnVUdBZ0VGRVEwSUNnb0xEQTRKQ0FrSUNRZ1BFQTRUQnd3TENnUUVCQVFDQkFNQ0FRSURBUUVEQWdRR0JnVUdDZ3NCQWdNREN3OFJDUW9LQ2dVRkNnRUJBd3NGQlFjR0F3UUVCQVFFQkFRREF3TURBZ01GQlFNQ0JRTUVBd1FCQVFNQ0FnSUNBUUVDQVFJRUFnUUZCQUlDQWdFQkFRVUVCUVlEQXdZQ0FnTUJBUUlDQWdFQ0F3SUVBd1FFQlFJREFnTURBd1lEQXdNRUJBTUhCQVVFQlFJREJRSUNBd0VDQWdJQ0FRRUJBUUVDQWdnRkJ3Y0tDZ1lHQndjSENBa0pDQXNCQVFJQ0FnTUlCUVFGQmdRRkJRTUVBZ0lEQVFZRUJBVUZDd2NXRUFnSkNRZ0tDZ2tLQ1FzSkN3a0tDQWdJQkFVR0JRb0dBQUFBQkFCZUFDQURvZ0lnQUJNQUtBQXNBREVBTjBBME1UQXZMaXdyS2lrSUFnTUJRQVFCQUFBREFnQURXUUFDQVFFQ1RRQUNBZ0ZSQUFFQ0FVVUNBQ1lqR1JZTENBQVRBaE1GRGlzQklTSU9BUlVSRkJZeklUSTJOUkUwTGdNVEZBWWpJU0l1QlRVUk5EWXpCVElXRlJjVkZ4RUhFU2MxTndKZi9rWVNJUlFySEFHNkhDY0hEQkFVRlJNTy9rWUVDQWNIQlFRQ0ZnOEJ1ZzRUWHNRaWdJQUNJQkVlRXY2SUhDc3FIUUY0Q3hRUURBYitSdzhXQWdRRkJ3Y0lCQUY0RFJJQkVRMXBxMnNCZ0R6KzkwT0VRd0FBQUFZQWdBQUFBNEFDUUFBZkFFa0FVUUJaQUYwQVpRRGZTN0FvVUZoQVVnQVBDdzRIRDE0QUVBNFNEaEFTWmdBQkNRRUlBd0VJV1FBREFBY0RTd1FDRXdNQUNnRUhDd0FIV1FBTEFBNFFDdzVaQUJJQUVRMFNFVmtBRFFBTUJnME1XUUFHQlFVR1RRQUdCZ1ZTQUFVR0JVWWJRRk1BRHdzT0N3OE9aZ0FRRGhJT0VCSm1BQUVKQVFnREFRaFpBQU1BQndOTEJBSVRBd0FLQVFjTEFBZFpBQXNBRGhBTERsa0FFZ0FSRFJJUldRQU5BQXdHRFF4WkFBWUZCUVpOQUFZR0JWSUFCUVlGUmxsQUxBRUFaV1JoWUYxY1cxcFhWbE5TVDA1TFNrWkVPamczTmk4dEppTWFGeElRRHc0TkRBZ0ZBQjhCSHhRT0t3RWpKaWN1QVNzQklnWUhCZ2NqTlNNVkl5SUdGUkVVRmpNaE1qWTFFVFFtRXhRT0FTTWhJaVkxRVRRK0Fqc0JOejRCTnpZL0FUTXdPd0VlQWhjZUF4OEJNekllQVJVa0lnWVVGakkyTkFZaUpqUTJNaFlVTnpNVkl3UVVGakkyTkNZaUEwTjdBd1l3SkJDeEVDTXVDQVFiUkJzYktDa2FBb0FhSXlNREJ3NEkvWUFORmdZSkRRZUlDUVFQQXlZTkRMRUJBUUVEQlFNRkR4Z1NDZ21LQ1EwSC91ZU9aR1NPWkhGMFVWRjBVVFVpSXY4QUpUWWxKVFlCNEFNSE5TRWZOQWdGSUNBa0dmNmdHeWdvR3dGZ0dpUCtZd29QQ2hZTkFXQUdDd2NGQmdVVEJDb01DQUVDQXdNRkVSd1VDd1lIRGdnQ1pJNWtaSTdTVVhSUlVYVGdJbWsySlNVMkpRQURBUUQvWUFNQUF1QUFDd0FYQURFQVRVQktEQXNDQlFNQ0F3VUNaZ0FBQUFNRkFBTlpBQUlBQVFRQ0FWa0FCQW9CQmdjRUJsa0pBUWNJQ0FkTENRRUhCd2hQQUFnSENFTVlHQmd4R0RFdUxTd3JFUkVURXljVkZ4VVFEUmNyQUNJR0ZSRVVGakkyTlJFMEF4UUdJaVkxRVRRMk1oWVZGeFVVRGdFaklpWTlBU01WRkJZWEZTTVZJVFVqTlQ0QlBRRUNRWUpkWFlKZElFcG9Ta3BvU21BN1pqdGFnaWFMWlpJQlFvcGpod0xnWWtYK3kwVmlZa1VCTlVYK2hqaFBUemdCTlRoUFR6aVpuenhrTzRCYm41OWxrd2QrSkNSK0I1Tmxud0FBQkFEMC8yQUREQUxnQUJJQUpBQXNBRGtBUmtCREZoUVREQW9HQmdNRUFVQVlDQUlEUFFBQUFBRUNBQUZaQUFJQUJRUUNCVmtHQVFRREF3Uk5CZ0VFQkFOUkFBTUVBMFV1TFRRekxUa3VPU29wSmlVaElCQUhEeXNBSWdZVkZCOENHd0UzTmo4QlBnSTFOQWNWQmc4QkN3RW1KeTRCTlRRMk1oWVZGQ1lpQmhRV01qWTBCeUltTlRRK0FUSWVBUlFPQVFKdjNwMFRBUVAxOVFFQkFRRUdDUVF5QVFFQzF0Z0JBUWdLaXNTS3QycExTMnBMZ0NjM0dTd3lMQmtaTEFMZ20yNHpNZ01HL2ZjQ0NRSURBUU1RSVNJUmI4Z0JBUU1FL2prQnl3TUJGaTRYWVlpSVlTNjNTMnBMUzJxVE55Y1pMQmtaTERJc0dRQUNBUUQvWUFNQUF1QUFDd0FsQUVGQVBnb0pBZ01CQUFFREFHWUFBUUFBQWdFQVdRQUNDQUVFQlFJRVdRY0JCUVlHQlVzSEFRVUZCazhBQmdVR1F3d01EQ1VNSlJFUkVSRVRFeWtWRUFzWEt5UXlOalVSTkNZaUJoVVJGQ1VWRkE0Qkl5SW1QUUVqRlJRV0Z4VWpGU0UxSXpVK0FUMEJBYitDWFYyQ1hRRjhPMlk3V29JbWkyV1NBVUtLWTRkZFlrVUJOVVZpWWtYK3kwWGhuenhrTzRCYm41OWxrd2QrSkNSK0I1Tmxud0FBQUFJQTlQOWdBd3dDNEFBU0FCOEFLMEFvREFvSUJnUUJQUU1CQVFJQmFRQUFBZ0lBVFFBQUFBSlJBQUlBQWtVVUV4b1pFeDhVSHhBRUR5c0FJZ1lWRkI4Q0d3RTNOajhCUGdJMU5BVWlKalUwUGdFeUhnRVVEZ0VDYjk2ZEV3RUQ5ZlVCQVFFQkJna0UvdlFuTnhrc01pd1pHU3dDNEp0dU16SURCdjMzQWdrQ0F3RURFQ0VpRVcvRE55Y1pMQmtaTERJc0dRQUZBUUQvWUFNd0F1QUFBd0FLQUJVQUhRQTFBRjlBWEFjQkFnRWNHeFFHQkFBQ0lRRUVBQ0FCQXdRRVFBVUJBZ0VBQVFJQVpnQUJDZ0VBQkFFQVdRQUVCZ0VEQndRRFdRa0JCd2dJQjBzSkFRY0hDRThBQ0FjSVF3VUVOVFF6TWpFd0x5NHJLaVFpSHg0WUZ4QU9CQW9GQ2dzT0t3RTNBUWNsTWpjREZSUVdOeEUwSmlNaURnRUhBVFkzTlNNVkZBY1hOZ2MyTnljR0l5SXVBejBCSXhVVUZoY1ZJeFVoTlNNQkVSd0NBeHorN0NVZzQxM2ZYRUlaTHlZUEFSSUpZaUlpRkREcU1pMFRMVE1qUXpZcEZ5YUxaWklCUW9vQzBCRDhrQkQ5RVFHQjYwVmlwd0UxUldJUUhSUCtMUm9hbjU5QU5TSkRxd01YSUJZV0tUVkRJNkNmWlpNSGZpUWtBQUFEQUVEL29BUEFBcUFBQndBWEFEb0FrRUFMTVFFQkJ6b3dBZ01GQWtCTHNCaFFXRUF3QUFZQkFBRUdBR1lBQkFBRkJRUmVDQUVDQUFjQkFnZFpBQUVBQUFRQkFGa0FCUU1EQlUwQUJRVURVZ0FEQlFOR0cwQXhBQVlCQUFFR0FHWUFCQUFGQUFRRlpnZ0JBZ0FIQVFJSFdRQUJBQUFFQVFCWkFBVURBd1ZOQUFVRkExSUFBd1VEUmxsQUZBb0lOak11TENVakd4a1NEd2dYQ2hjVEVBa1FLd0F5TmpRbUlnWVVBU0VpQmhVUkZCWXpJVEkyTlJFMEpnTW1JeUlHRHdFT0JDTWlKeTRDTHdFbUl5SUhBeEUrQVRNaE1oNEJGUk1DdUZBNE9GQTRBUWo4OEJjaElSY0RFQmNoSWVVTER3Y0xCeVlDQkFVRUJRTU5DUUVEQXdGc0RSUVVEdjBDRGdvQ3pBWU1Cd0VCWURoUU9EaFFBUWdoR1AxeUdDRWhHQUtPR0NIK2RRd0dCU0FDQWdNQkFRZ0JBZ1FCZEE4UC9zOENDUW9OQmdzSC9mY0FBQUFJQUZiL1BRTzNBc2tBS1FBMkFGVUFZd0J4QUlBQWtRQ2RBTEpBcjNJQkJ3eE5BUVlIY0FFTENUZzNJQk1FQWdWTVJVUVpCQUFDS2dFQkFBWkFWVlJPQXdRTVBnQUdCd2tIQmdsbUFBVU9BZzRGQW1ZQUFnQU9BZ0JrQUFBQkRnQUJaQUFCQVdjQURBQUxCQXdMV1FBSkFBb0RDUXBaQUFRQUF3MEVBMWtTQVEwQUVBZ05FRmtSQVFjQUNBOEhDRmtBRHc0T0QwMEFEdzhPVVFBT0R3NUZnb0ZYVnBpV2s1S0tpSUdSZ3BGL2ZuZDJiV3hsWkYxY1ZtTlhZMUZRU1VoQVBqSXdJeUlkSEJjVkV3NHJBU2NQQVNjbUR3RU9BUlVSRkI0RE5qOEJGeFl6TWo4QkZoY1dNamMyTnhjV01qWTNOalVSTkFFdUFUVTBQZ0V6TWhZVkZBWTNKejRCTlRRdUFTTWlCaFVVRndjbkxnRWpCZzhCRVRjWEZqSTJQd0VYQlNJR0ZSRVVGakkyTlJFMExnRVhJZzRDSFFFVUZqSTJQUUVtTnhVVUhnRXlQZ0U5QVRRdUFTTUdBeUlPQWhVVUZqTXlQZ0kxTkM0QkJpSW1ORFl6TWg0Q0ZSUURxYmNMMjhrSEI5TUdCZ0lFQkFZR0E4M0tBd1FFQXg0dlF3VVVCV1FzVGdNR0JRSUgvdncyWENkREtEMVdYYWt6QmdVeFZESk1heVlXeVFJREFnUUR1c0hLQWdVRkF0eWkvYW9JQ3dzUEN3VUl6QVFIQlFNTER3c0R4QVVJQ2drRkJRa0ZEekFPR1JJTEtCd09HUk1MRXg4R0doTVREUWNMQ1FVQ255b0JaRlFEQTFJQ0NRYjl2QU1HQlFNQ0FRRlFWUUVDRFY1bUNBaVhiaElCQWdJR0NBSkZEdnpWVmJVcUowUW5WandxdFpvTUVSd01NVlV4YkVzcFVncFVBUUVCQVVnQ0hFeFZBUUVCWkNVMUN3ZitrQWdMQ3dnQmNBVUlCVWNEQlFjRGpRY0xDd2VORDFLNkJRa0VCQWtGdWdVSUJRUCtuUXNTR1E0Y0tBb1RHUTRTSUJKa0V4b1RCUWtNQmcwQUFBQUFBd0NnLytBRGdBS2dBQWtBRWdBakFFRkFQaDRTRVEwTUJRSUdEZ2tJQXdRQkFrQUFCUVlGYUFBR0FnWm9BQVFCQUFFRUFHWUFBZ0FCQkFJQlZ3QUFBQU5QQUFNREN3TkNFaWNZRVJFUkVBY1ZLeWtCRVNFM0lSRWhFUWNGSndFbkFSVXpBU2MzSnk0Q0l5SVBBVE1mQVRjK0FUVTBBdUQ5NEFHZ0lQNGdBbUFnL3ZzVEFWWVcvcGhBQVdrWFJoa0NCd2NFQ3dnWkFSWXFHQVFFQWdBZy9jQUJ3Q0NZRXdGWEYvNllRUUZvRjBBWkF3TUNDQmdYS2hrRUNnVU1BQUFBQmdEZy82QURJQUtnQUNBQUx3QkNBRVlBU2dCT0FMaEFDMEE1T0RBZUVBWUlDd0ZBUzdBVVVGaEFRUUFLQXd3RENsNE9BUXdOQXd3TlpBOEJEUXNERFF0a0FBc0lDQXRjQUFFQUJnQUJCbGtIQWdJQUNRVUNBd29BQTFjQUNBUUVDRTBBQ0FnRVVnQUVDQVJHRzBCREFBb0REQU1LREdZT0FRd05Bd3dOWkE4QkRRc0REUXRrQUFzSUF3c0laQUFCQUFZQUFRWlpCd0lDQUFrRkFnTUtBQU5YQUFnRUJBaE5BQWdJQkZJQUJBZ0VSbGxBR1U1TlRFdEtTVWhIUmtWRVEwSkJOQlkxR2pNUkZUTVFFQmNyQVNNMU5DWXJBU0lPQWgwQkl4VXpFeFFXTXlFeVBnYzFFek1sTkQ0Q093RXlIZ01kQVNNQkZSUUdJeUVpSmk4QkxnUTlBUU1oQnpNUkl4TWpBek1ESXhNekF5Q2dJaG1MQ3hZUUNhQXFMeU1ZQVJvRkN3a0pDQVlGQkFJdUtmNTlCUWdMQllzRkNRY0dBOFlCRGhFTS91WURCZ01FQXdRREFnRXdBYlBvSEJ5T0hSWWV6aDBWSGdJOUtCa2lDUkFXRENnZC9ic1pJZ0lEQmdZSUNBb0tCZ0pGUlFZTENBVURCZ2NKQlNqOW53RU5FUUVDQWdJRUJRVUdBd0VDUkVEK0hnSGkvaDRCNHY0ZUFBQUFBQUlBd1ArZ0EwQUM0QUFMQUJRQVAwQThGQkVRRHc0TkRBY0RQZ0FHQUFFQUJnRm1Cd1VDQXdJQkFBWURBRmNBQVFRRUFVc0FBUUVFVUFBRUFRUkVBQUFURWdBTEFBc1JFUkVSRVFnVEt3RVZNeEVoRVRNMUlSRWhFU1VuTnhjSEp4RWpFUUpBNFAzQTRQOEFBb0QrUWhlVmxSZHVJQUlBSVAzZ0FpQWcvYUFDWURRWGxaVVhiZjRhQWVZQUFnREEvNkFEUUFLZ0FBc0FGQUErUURzVUVSQVBEZzBNQndFQUFVQUFCZ01HYUFjRkFnTUNBUUFCQXdCWEFBRUVCQUZMQUFFQkJGQUFCQUVFUkFBQUV4SUFDd0FMRVJFUkVSRUlFeXNCRlRNUklSRXpOU0VSSVJFRkJ4YzNKd2NSSXhFQ1FPRDl3T0QvQUFLQS9rSVhsWlVYYmlBQ0FDRDk0QUlnSVAyZ0FtRFpGNVdWRjIwQjV2NGFBQUFEQUZIL2NRT3ZBc0FBRGdBZEFDa0FKMEFrS1NnbkppVWtJeUloSUI4ZURBRTlBQUFCQVFCTkFBQUFBVkVBQVFBQlJSa1lFZ0lQS3dFdUFTSUdCdzRCSGdJK0FpWUREZ0V1QWpZM1BnRXlGaGNXRUFNSEp3Y1hCeGMzRnpjbk53TW1QSnVlbXp4UU9UbWcxdGFnT1Rsb1NjWEZralEwU1RlUGtJODNiOVdvcUJpb3FCaW9xQmlwcVFKR1BENCtQRkRXMXFBNU9hRFcxdjRjU1RRMGtzWEZTVFk1T1Rady9zUUJYcWluRjZpb0Y2ZW9HS2lvQUFBQUFnQitBQUFEZ0FKZ0FCTUFJZ0JCUUQ0V0NnSURCQnNYRWhBSkJRQUJBa0FWQ3dJQ1BnQUFBUUJwQUFJRkFRUURBZ1JaQUFNQkFRTk5BQU1EQVZFQUFRTUJSUlFVRkNJVUloc1VGaEFHRWlzN0FUYzJOejRDTnhVSkFSVUdCd1lYTUJVd0FUVU5BVFVpQmdjbVBnV0FGU1pLVGh3clFDWUJnUDZBdDJoakFnR2dBU2orMkl5dlJRRUJEQmc0VDRNK2R5TU1Ed3dCb0FFQUFRQ2hDR2hrcFFZQllJSEJ3b0pjZHdjWlJrQk9PQ2NBQUFBQUFnQ0FBQUFEZ0FKZ0FCOEFLZ0E2UURjbERBSURCQ1FnRFFBRUFnRUNRQ1lMQWdBK0FBSUJBbWtBQUFBRUF3QUVXUUFEQVFFRFRRQURBd0ZSQUFFREFVVVVIQllVR1FVVEt5VXdOVFF1QWljdUFTYzFDUUUxSGdFWEhnRWZBVE13UFFjbkxnRWpGUzBCRlNBWEZnT0FBeEFzSXpXTFh2NkFBWUEzVENvclNpTW1GU0JGcjR6KzJBRW9BUVJaSTBBR0dpcFJVU00xTndTaC93RC9BS0FDRXhNVVRqZytCd2NJQndjSUJnZ1RkMXlDd3NHQnRFa0FBQU1BWVArQUE2QUN3QUFWQUIwQUxnQmRRRm9OQVFJSUN3RUVBUUpBREFFQkFUOEpBUVFCQUFFRUFHWUFCUUFJQWdVSVdRQUNBQUVFQWdGWkFBQUFBd2NBQTFrS0FRY0dCZ2ROQ2dFSEJ3WlJBQVlIQmtVZkhnQUFKeVllTGg4dUd4b1hGZ0FWQUJVVEZCVWlDeElyQVJRR0l5SXVBVFErQVRNVk55Y1ZJZ1lVRmpJMk5RSWdCaEFXSURZUUFTSXVBVFUwUGdJeUhnSVVEZ0lDMkg1YU8yTTZPbU03d01CcWxwYlVsbFQrcVBUMEFWajAvbUJuc0dZOFpvNmFqbVk4UEdhT0FTQmFmanBqZG1NNmIyK0FXSmJVbHBWckFhRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBQUFBSUFRUCtBQThBQ3dBQUpBQk1BTGtBckVBSUNBRDRURFF3TENna0lCd1lGQ2dJOUFRRUFBZ0lBU3dFQkFBQUNUd01CQWdBQ1F4SWFFaEFFRWlzQklRc0JJUVVESlFVREZ5Y0hOeWNoTnhjaEJ3UEEvcWxwYWY2cEFSaHRBUlVCRlc0dTFkVlYyQUVHVWxJQkJ0Z0JnZ0UrL3NMRS9zTEZ4UUUrNkppWTlaWDM5NVVBQUFNQVlQK0FBNkFDd0FBSEFCb0FKZ0JIUUVRQUFBQURCQUFEV1FrQkJRZ0JCZ2NGQmxjQUJBQUhBZ1FIVndvQkFnRUJBazBLQVFJQ0FWRUFBUUlCUlFrSUppVWtJeUloSUI4ZUhSd2JFQTRJR2drYUV4QUxFQ3NBSUFZUUZpQTJFQUVpTGdFMFBnRXpNaDRFRlJRT0FnTWpGU01WTXhVek5UTTFJd0tzL3FqMDlBRlk5UDVnWjdCbVpyQm5OR05UUnpFYlBHYU9QU0h2N3lIdzhBTEE5UDZvOVBRQldQM1hackRPc0dZYk1VZFRZelJOam1ZOEFuM3dJZS92SVFBQUFBTUFZUCtBQTZBQ3dBQUhBQmdBSEFBOFFEa0FCQU1GQXdRRlpnQUZBZ01GQW1RQUFBQURCQUFEV1FZQkFnRUJBazBHQVFJQ0FWSUFBUUlCUmdrSUhCc2FHUkVRQ0JnSkdCTVFCeEFyQUNBR0VCWWdOaEFCSWk0Qk5UUStBakllQWhRT0FnRWhGU0VDclA2bzlQUUJXUFQrWUdld1pqeG1qcHFPWmp3OFpvNytzd0lBL2dBQ3dQVCtxUFQwQVZqOTEyYXdaMDJPWmp3OFpvNmFqbVk4QVkwaUFBQUFBZ0JnLzRBRG9BTEFBQWNBR0FBcFFDWUFBQUFEQWdBRFdRUUJBZ0VCQWswRUFRSUNBVkVBQVFJQlJRa0lFUkFJR0FrWUV4QUZFQ3NBSUFZUUZpQTJFQUVpTGdFMU5ENENNaDRDRkE0Q0FxeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPQXNEMC9xajA5QUZZL2RkbXNHZE5qbVk4UEdhT21vNW1QQUFDQUQ3L1hnUENBdUlBRVFBckFDcEFKd1FCQUFBREFnQURXUUFDQVFFQ1RRQUNBZ0ZSQUFFQ0FVVUNBQ1lqR1JZTUNRQVJBaEVGRGlzQklTSU9BaFVSRkJZeklUSTJOUkUwSmhNVURnSWpJU0l1QlRVUk5EWXpJVEllQXhVRFcvMUtGU1ljRUR3ckFyWXJQRHdQQ0E0VEN2MDhCZ3NLQ1FjRkF4NFZBc1FJRUF3S0JRTGlFQndtRmYxS0t6dzhLd0syS3p6ODNBb1REZ2dEQlFjSkNnc0dBc1FWSGdVS0RCQUlBQUFBQWdCUi8zRURyd0xBQUE0QUdnQVpRQllhR1JnWEZoVVVFeElSRUE4TUFEMEFBQUJmRWdFUEt3RXVBU0lHQnc0QkhnSStBaVlEQnljSEp6Y25OeGMzRndjREpqeWJucHM4VURrNW9OYldvRGs1dGhpb3FCaW9xQmlvcUJpcEFrWThQajQ4VU5iV29EazVvTmJXL29JWXFLY1hxS2dYcDZnWXFBQUFBQUlBWVArQUE2QUN3QUFIQUJ3QVEwQkFEZ0VEQUJBQkJnUUNRQThCQkFFL0FBWUVCUVFHQldZQUFBQURCQUFEV1FBRUFBVUNCQVZaQUFJQkFRSk5BQUlDQVZFQUFRSUJSUklWRkJNVEV4QUhGU3NBSUFZUUZpQTJFQUFpSmpRMk16VVhCelVpRGdFVkZCWXlOalV6RkFLcy9xajA5QUZZOVA3SzFKYVdhc0RBTzJNNmY3TitLQUxBOVA2bzlQUUJXUDVVbHRTV1dJQnZienBqTzFsL2ZscHFBQUFBQVFCQS80QUR3QUxBQUFrQUdFQVZBZ0VBUGdrSUJ3WUZCUUE5QVFFQUFGOFNFQUlRS3dFaEN3RWhCUU1sQlFNRHdQNnBhV24rcVFFWWJRRVZBUlZ1QVlJQlB2N0N4UDdDeGNVQlBnQUFBQUFDQUdEL2dBT2dBc0FBQndBVEFEWkFNd2NCQlFZQ0JnVUNaZ1FCQWdNR0FnTmtBQUFBQmdVQUJsY0FBd0VCQTBzQUF3TUJVZ0FCQXdGR0VSRVJFUkVURXhBSUZpc0FJQVlRRmlBMkVBY2pGU00xSXpVek5UTVZNd0tzL3FqMDlBRlk5S0R3SXU3dUl2QUN3UFQrcVBUMEFWaSs3dTRpOFBBQUFBQUFBZ0JnLzRBRG9BTEFBQWNBQ3dBaFFCNEFBQUFEQWdBRFZ3QUNBUUVDU3dBQ0FnRlJBQUVDQVVVUkV4TVFCQklyQUNBR0VCWWdOaEFISVRVaEFxeitxUFQwQVZqMG9QNEFBZ0FDd1BUK3FQVDBBVmkrSWdBQUFBTUFOUDlUQTgwQzdBQUhBQmdBS2dBNVFEWUFBUVFBQkFFQVpnQUFCUVFBQldRQUF3WUJCQUVEQkZrQUJRSUNCVTBBQlFVQ1VnQUNCUUpHR2hraklSa3FHaW9YRlJNU0J4SXJBQlFXTWpZMEppSUZGQTRDSWk0Q05ENENNaDRDQVNJT0FoVVVIZ0V6TWo0Q05UUXVBUUV1Zks1N2U2NENJMGg4cXJ5cmUwbEplNnU4cW54SS9qUlJsR3RBYTdodFVaUnJQMnU0QVhldmUzdXZlOU5kcTN0SlNYdXJ1NnQ3U1VsN3F3RXlRR3FVVW15NGF6OXJsRkZ0dUdzQUFnQmcvNEFEb0FMQUFBY0FFZ0FuUUNRU0VSQVBEZ1VDQUFGQUFBQUNBR2dBQWdFQkFrMEFBZ0lCVWdBQkFnRkdKQk1RQXhFckFDQUdFQllnTmhBQkJpTWlKaThCTnhjM0Z3S3MvcWowOUFGWTlQNGdDUWtFQ2dSd0pGNzZJd0xBOVA2bzlQUUJXUDdCQ1FVRWNDTmUreVFBQUFBQ0FENy9YZ1BDQXVJQUZBQWNBQ3BBSnh3Ykdoa1lGZ1lCQUFGQUFnRUFBUUVBVFFJQkFBQUJVUUFCQUFGRkFnQUtCd0FVQWhRRERpc0JJU0lHRlJFVUZqTWhNalkxRVRRdUJRRW5CeWMzRndFWEExdjlTaXM4UENzQ3RpczhCUXNPRWhRWC9rUUZCY29ncndGaklBTGlQQ3Y5U2lzOFBDc0N0Z3dYRlJFT0N3WDlid1VGeWlDdkFXTWdBQUVCUUFCZ0FzQUI0QUFMQUFhekNBQUJKaXNCQnljSEZ3Y1hOeGMzSnpjQ3FLaW9HS2lvR0tpb0dLbXBBZUNwcUJlb3FCZW5xQmVwcUFBQUFBRUJBQUFnQXdBQ2VBQVVBRGxBTmdnQkJBSUJRQWNCQWdFL0JnRUJQZ0FFQWdNQ0JBTm1BQUVBQWdRQkFsa0FBd0FBQTAwQUF3TUFVUUFBQXdCRkVoVVVFeEFGRXlza0lpWTBOak0xRndjMUlnNEJGUlFXTWpZMU14UUNhdFNXbG1yQXdEdGpPbit6ZmlnZ2x0U1dXSUJ2Ynpwak8xbC9mbHBxQUFBQkFJRC9vQVFBQXFBQUpnQTRRRFViR2dvSkNBY0dCUVFKQWdFQlFBUUJBQUFCQWdBQldRQUNBd01DVFFBQ0FnTlJBQU1DQTBVQkFCOGRGeFVRRGdBbUFTWUZEaXNCTWg0QkZUY1hCeWMzRnpRdUFpTWlEZ0VVSGdFek1qNEJOeGNPQVNNaUxnRTFORDRDQWdCb3NXZHVFbzJGRW1ZNVlJUkpZYVZnWUtWaFRZdGpHQmtueUgxb3NXYzlaNDRDb0dheGFHa1NpSWdTYVVtRVlEaGdwY0tsWUQ1dVJ3ZDBrbWV4YUU2T1p6MEFBQUlBUVArQUE4QUN3QUFKQUE4QUtrQW5DZ2NDQUQ0UERnMEVBd0lCQUFnQ1BRRUJBQUlDQUVzQkFRQUFBazhBQWdBQ1F4SVNGUU1SS3lVREpRVURKU0VMQVNFbEZ5RUhGeWNCV0cwQkZRRVZiUUVZL3FscGFmNnBBY0JTQVFiWVZkVysvc0xGeFFFK3hBRSsvc0xVOXBYMWx3QUFBZ0FBL3lBRUFBTWdBQlFBS3dBOFFEa0FCUUVDQVFVQ1pnQUNCQUVDQkdRQUJBY0JBd1FEVlFBQkFRQlJCZ0VBQUFvQlFoWVZBUUFtSlNFZkZTc1dLdzhPQ2dnQUZBRVVDQTRyQVNJT0FnYytBak15RWhVVUZqSTJOVFF1QVFNeVBnTTNEZ01qSWdJMU5DWWlCaFVVSGdFQ0FHZTdpVklEQTNDK2I2ejBPRkE0aWV5TFVwdDhYellDQWtSdm1GT3M5RGhRT0luc0F5QlBocmxtZDhsMC92cTZLRGc0S0l2c2lmd0FNbDE2bVZKWm9uUkZBUWE2S0RnNEtJdnNpUUFBREFBbC8wUUQyd0w2QUE4QUhRQXVBRHdBVGdCZkFIQUFnQUNWQUtjQXRBRERBRzFBYXBXQmNBTUJBRTQ5QWdZQkxoNENCUWExQVFrS2xnRUNDUVZBQUFvRkNRVUtDV1lBQ1FJRkNRSmtDd0VBQUFFR0FBRlpDQUVHQndFRkNnWUZXUVFCQWdNREFrMEVBUUlDQTFFQUF3SURSUUVBdUxlWWx6czROREVyS0NNZ0hSd1hGaEVRQ2drQUR3RVBEQTRyQVRJZUF4MEJGQVlpSmowQk5EWVRNaFlkQVJRR0lpWTlBVFEyTXdFVUJpc0JJaTRCTlRRMk93RXlIZ0VWSVJRR0t3RWlKalUwTmpzQk1oWWxGaFFHRHdFR0ppY21OajhCUGdFZUFSY0JGZ1lQQVE0QkxnRW5KalkvQVRZV0Z3RWVBUThCRGdFbkxnRS9BVDRDRmhjQkhnRVBBUTRCSnk0Qk5qOEJQZ0VYQXo0QkhnRWZBUllHQndZbUx3RXVBVDRETndFMk1oWWZBUllHQnc0QkxnRXZBU1kyTndFK0FSOEJIZ0VPQVM4QkxnRUJQZ0V5SHdFZUFRNEJMd0V1QVRjQ0FBVUpCd1lERWhnU0Vnd01FaElZRWhJTUFkc1NESDRJRGdnU0RINElEZ2o5QkJJTWZnd1NFZ3grREJJQ3ZBUUlCMjBLR0FjR0J3cHRCZ3dLQ2dQOWFnWUdDMjBGREFzSkF3Y0hDMndMR0FZQjZBc0dCajhHR0FvTEJ3Yy9Bd2tMREFYK2dnc0dCajhHR0FzSENBRURQd2NZQ2wwR0RBc0pBejhHQmdzS0dBYy9BZ0lCQWdNR0F3Ri9CdzhPQkQ4R0Jnc0ZEQXNKQXo4SEJ3djkxQVlZQ20wTEJnd1lDMndMQndLY0JRNFBCMjBMQmd3WUMyMEtCd1lDK2dNRkNBa0ZmUTBSRVExOURSSDlCQkVOZmd3U0VneCtEUkVCSVF3UkNBMElEUkVJRFFrTUVSRU1EUkVSNFFnUERnUS9CZ1lMQ3hnR1B3TUJBd2NGL29JTEdBWS9Bd0VEQndVTEdBWS9CZ2NLQWl3R0dBdHRDd1lHQmhnTGJRVUhBd0VEL1dvR0dBdHRDd1lHQkE0UUIyMExCZ1lDbGdNQkF3Y0ZiUXNZQmdZR0MyMERDQWdIQndZQy9Xb0VDQWR0Q3hnR0F3RURCd1Z0Q3hnR0FlZ0xCZ1kvQmhnV0JnWS9CaGoralFjSUJEOEdHQllHQmo4R0dBc0FBZ0NCLzZBRGdRS2dBQThBSUFBdFFDb09BUUlEQWdGQUR3QUNBVDBBQUFBQ0F3QUNXUUFEQVFFRFRRQURBd0ZSQUFFREFVVW9HQ01tQkJJckJTYzJOVFF1QVNNaUJoUVdNekkzRndFdUFUVTBOaklXRlJRT0JDTWlBNEhqUTFLTVVuNnlzbjVyVk9MOW5pWXBuK0dnRXlNMFBVVWtjVEhpVkd0U2pWR3kvTE5FNHdFUEptUTJjYUNmY1NWRlBUUWpFd0FBQUFFQkFBQWdBd0FDSUFBTEFDVkFJZ0FFQXdFRVN3VUJBd0lCQUFFREFGY0FCQVFCVHdBQkJBRkRFUkVSRVJFUUJoUXJBU01WSXpVak5UTTFNeFV6QXdEd0l1N3VJdkFCRHU3dUl2RHdBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFM0NRRW5BUUZBUVFFLy9zRkJBUDhDSDBIK3dQN0FRUUQvQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RW5DUUUzQXdMQVFmN0JBVDlCL3dJZlFmN0Evc0JCQVA4QUFBQUFBUUVzQUlRQ3l3RzlBQW9BRWtBUENna0lCd1lGQUQ0QUFBQmZJUUVQS3lVR0l5SW1Md0UzRnpjWEFjQUpDUVFLQkhBa1h2b2pqUWtGQkhBalh2c2tBQVFBZ1ArZ0E0QUNvQUFJQUJFQUd3QWZBRXhBU1IwY0d4b1lGeFlURVJBUENBRU5CQWNCUUFBQkJ3RS9HUklDQmo0QUJnQUhCQVlIVndBRUFBRURCQUZYQlFFREFBQURTd1VCQXdNQVR3SUJBQU1BUXhrV0VSRVNFUkVTQ0JZckNRRVJNeEV6RVRNUkF5TVJJUkVqRVNVRkFRYzFJeFVIRlFrQk5TVUhOVE1DQVA3QTRNRGdJS0QvQUtBQklBRWcvdURBZ0VBQmdBR0EvYUJBUUFKQS93RCtZQUVBL3dBQm9QNkFBUUQvQUFGeDV1WUJiNXBhd0RNcEFUUCt6U21BTTRZQUFBQURBR0QvZ0FPZ0FzQUFHUUFoQUNVQVBrQTdJZ0VFQUNVQkFRUUNRQUFFQUFFQUJBRm1BQUlGQVFBRUFnQlpBQUVEQXdGTkFBRUJBMUVBQXdFRFJRRUFKQ01mSGhzYUVBNEFHUUVaQmc0ckFUSWVBUmNlQVJRR0J3NEVJeUl1QVNjdUFUUStBeUFHRUJZZ05oQW5CU0VSQWdBellWY2tOam82TmhZeE5UazdIek5oVnlRMk9qcHRpL24rcVBUMEFWajA0UDVCQVA4Q254b3lKRGVMbW9zM0ZTUWJFd2thTWlRM2k1cU1iRG9oOVA2bzlQUUJXQlRBL3dBQUFBUUFnUCtnQTRBQ29BQVNBQjRBcGdFM0FXNUxzQ1pRV0VCaEFBY0FIUVVISFZrSkFRVWZHd0lhQmdVYVdRZ0JCaDRCSEFBR0hGa2hBUUFBQXdRQUExa0tJZ0lFSUFFWkVnUVpXUmdCRWhFQkN3SVNDMWtBQWdBQkZBSUJXUllCRkE4QkRSTVVEVmtBRlFBT0ZRNVZGd0VURXd4UkVBRU1EQXNNUWh0QVp3QUhBQjBGQngxWkNRRUZIeHNDR2dZRkdsa0lBUVllQVJ3QUJoeFpJUUVBQUFNRUFBTlpDaUlDQkNBQkdSSUVHVmtZQVJJUkFRc0NFZ3RaQUFJQUFSUUNBVmtXQVJRUEFRMFRGQTFaRndFVEVBRU1GUk1NV1FBVkRnNFZUUUFWRlE1UkFBNFZEa1ZaUVV3QUlRQWZBQUVBQUFFMkFUTUJJd0VpQVI0QkhBRVFBUTBCQmdFRUFQOEEvUUQ4QVBzQTd3RHNBT2NBNUFEWkFOY0Ewd0RSQU1zQXlBREJBTDhBdkFDNkFLd0FxUUNmQUp3QWtnQ1JBSTRBakFDSEFJUUFmd0I5QUhrQWR3QnFBR2NBV2dCWEFFd0FTZ0JHQUVRQVBBQTVBRFFBTWdBdEFDc0FId0NtQUNFQXBnQWFBQmtBRkFBVEFBMEFEQUFBQUJJQUFRQVNBQ01BRGlzQklnNENCd1lWRkI0QkZ4WXlOalUwSnlZQ0lpWTFORDRCTWg0QkZSUTNJeUltTlRRL0FUWTBMd0VtSXlJUEFRNENJeUltUFFFMEppc0JJZ1lkQVJRT0F5TWlKaThCSmlNaUR3RUdGQjhCRmhVVURnRXJBU0lPQWc4QkRnTWRBUlFXT3dFeUhnRVZGQTRCRHdFR0ZCOEJGak15UHdFK0FUTXlGaDBCRkJZN0FUSTJQUUUwTmpNeUh3RVdNajhCTmpRdkFTWTFORFk3QVRJMlBRSTBMZ0VYRlJRckFTSUhEZ0lWRkI0Qkh3RVdEd0VHSXlJdkFTWWpJZ1lkQVJRT0Fpc0JJaVk5QVRRbkppTWlCZzhCQmlNaUx3RW1ORDhCTmpVMEp5WXJBU0ltUFFFME5qc0JNamMyTlRRbUx3RW1ORDhCTmpNd016SWVBUjhCRmpNeVBnRTNOajBCTkRzQk1oNEJIUUVVSHdFZUJETXlQd0UrQVRJV0h3RWVBUlVVRHdFR0ZSUWVBUmNXT3dFeUZRSUNGQ1VpSUEwNERSa1NPSjl4T1RnTmhWMHFTbGRLSzY4ZUV4c1BGQTRPTFE0VkZRNFRCQXNOQmhNZEhCUThGUjBGQ0F3T0NBa1JCeE1PRlJVT0xRNE9FdzhNRlF3ZkJBa0lDQU1HQXdRREFoNFVId3dWREFNSEJSTU9EaTBORmhRUEV3WVJDaE1jSFJROUZCNGJFeFFPRXc0cURpME9EaFFQR3hNZUZCc01GZ0lQSGlBWEJ3b0dCZ3NJRXcwTkxBVUlDQVFUR0NFZkx3TUZCZ1E4QndzWEdCOFFIZ3NTQlFnSUJDMEZCUklhRnhZaEh3Y0xDd2NmSUJjV0RRd1NCUVVzQlFnREFnTURBUk1YSVFzVEVnY1lFVDBFQ0FRWUNBUUpDUW9LQmlFWUVnSUhCd2NDTFFJREJSTVpCUW9JRmlFZUR3SGdCdzhWRFRoUUdqQXNFamh3VUU4NU9QNmdYa0lyU2lzclNpdENraHNURkEwVER5a09MQTRPRWdVSEJCc1RIaFFlSGhRZkJ3NExDQVVJQnhNT0Rpd09LUThTRGhRTUZnd0NBd1FEQmdNSENBa0ZQQlVkREJZTUJ3d0tCUklQS1E0c0RnNFRCd2diRXg0VkhSMFZIaE1iRUJNT0RpME9LUThURFJRVEhCd1VIeDRPRncxUUhoQVlCeElVQ3dvVkVnY1REQXd0QlFVU0dpMGhIZ1FIQkFNS0NCNGdGeGNOREJNRkJTMEZEZ1VTR0NFZ0Z4Y0xCajBIQ3hjWElCQWVDeElGRGdVdEJBRUNBUk1aQlFvSEZ5QWZFZ1VJQlI4ZkdBWURCUVFEQVJrU0F3SUNBaTBDQmdRSEJSTVhJUXNURVFnWEVnQUFBd0RBLytBRFFBSmdBQU1BQmdBSkFBcTNDQWNHQlFNQ0F5WXJFeDhCQ1FJREV3RW53T2x6QVNUK2lBRTQ1dUwrdHFZQkxXZm1Bb0QrYndGTS9nOEI5ZjdHU1FBRUFHRC9nQU9nQXNBQUJ3QVJBQmtBS2dCUlFFNEFCd0FLQVFjS1dRQUJBQUFDQVFCWkFBSUFBd1FDQTFjTEJnSUVBQVVKQkFWWERBRUpDQWdKVFF3QkNRa0lVUUFJQ1FoRkd4b0lDQ01pR2lvYktoY1dFeElJRVFnUkVSRVJFaE1TRFJRckFCUVdNalkwSmlJVEVTTVZNeFVqRlRNMUVpQUdFQllnTmhBQklpNEJOVFErQWpJZUFoUU9BZ0hQRnlJWEZ5STZZQ0FnZ0d6K3FQVDBBVmowL21CbnNHWThabzZham1ZOFBHYU9BZGtpRnhjaUYvNkFBUUFROEJBUUFsRDAvcWowOUFGWS9kZG1zR2ROam1ZOFBHYU9tbzVtUEFBRUFHRC9nQU9nQXNBQUJ3QVlBRE1BUUFCZVFGc0FCUVlIQmdVSFpnQUhDQVlIQ0dRQUFBQURCQUFEV1FzQkJBQUdCUVFHV1F3QkNBQUpBZ2dKV1FvQkFnRUJBazBLQVFJQ0FWRUFBUUlCUlRVMEdoa0pDRGs0TkVBMVFDc3FJUjhlSFJrekdqTVJFQWdZQ1JnVEVBMFFLd0FnQmhBV0lEWVFBU0l1QVRVMFBnSXlIZ0lVRGdJRElnNEJGVE1tTXpJV0ZSUUdCdzRDQnpNK0FUYytBVFUwSmdNaUJoUVdNalkxTkM0REFxeitxUFQwQVZqMC9tQm5zR1k4Wm82YWptWThQR2FPUmlzOElDWUNZU1F5RlJJWEdRc0JKZ0VOSUJvYVJqRVBFeFFjRkFRR0NBc0N3UFQrcVBUMEFWajkxMmF3WjAyT1pqdzhabzZham1ZOEFsa2JPQ2xkTFNNV0pSRVZKaWtkS2lFZkdDNGZNanYraXhNY0ZCUU9CUXNJQmdNQUFBQUFCUURBLzRBRFFBTEFBQXNBRXdBWEFDa0FNUUJZUUZVbklBSUpDZ0ZBQUFBQUJBRUFCRmtGREFNREFRQUhDQUVIVndBSUFBc0tDQXRaQUFvQUNRWUtDVmtBQmdJQ0Jrc0FCZ1lDVHdBQ0JnSkRBQUF2TGlzcUpDTWJHaGNXRlJRVEVnOE9BQXNBQ3hFVEV3MFJLd0UxTkNZaUJoMEJJeEVoRVNVME5qSVdIUUVoQVNFUklRYzBKaUlHRlJRV0Z4VVVGakkyUFFFK0FRWWlKalEyTWhZVUF0QjZySHB3QW9EK0VHZVNaLzZnQWREOXdBSkE0Q1UySlJzVkNRNEpGUnN6R2hNVEdoTUJZSkJXZW5wV2tQNGdBZUNRU1dkblNaRCtRQUdnb0JzbEpSc1dJd1ZTQndrSkIxSUZJd29UR2hNVEdnQUFBQVlBd1FEZ0EwQUJZQUFIQUE4QUhnQW5BQzhBTndCRlFFSUtEUVlEQWdnTUJBTUFBUUlBV1FrRkFnRURBd0ZOQ1FVQ0FRRURVUXNIQWdNQkEwVWdIeEVRTlRReE1DMHNLU2drSXg4bklDY1lGaEFlRVI0VEV4TVFEaElyQURJV0ZBWWlKalEySWdZVUZqSTJOQ1V5SGdFVkZBWWpJaTRDTlRRMk55SUdGQll5TmpRbUJESVdGQVlpSmpRMklnWVVGakkyTkFIeEhoVVZIaFUvTmlVbE5pWCt3UW9RQ2hVUEJ3NEpCaFVQR3lVbE5TWW1BZFllRlJVZUZUODJKU1UySlFGRUZSNFZGUjR4SlRZbEpUWUpDaEFLRHhVR0NRNEhEeFVjSlRZbEpUWWxIQlVlRlJVZU1TVTJKU1UyQUFBQUFBSUJBUC9nQXdBQ1lBQXdBRXNCSVV1d0MxQllRQjR2RndJSkEwcytBZ29CUFFFRkNERUJCd1V0S2dJR0J3VkFHd0VIQVQ4YlM3QU1VRmhBSGk4WEFna0RTejRDQ2dJOUFRVUlNUUVIQlMwcUFnWUhCVUFiQVFjQlB4dEFIaThYQWdrRFN6NENDZ0U5QVFVSU1RRUhCUzBxQWdZSEJVQWJBUWNCUDFsWlM3QUxVRmhBTHdBQUNRRUpBQUZtQUFNQUNRQURDVmtDQVFFQUNnZ0JDbGtBQ0FBRkJ3Z0ZXUUFIQUFZRUJ3WlpBQVFFQ3dSQ0cwdXdERkJZUUM4QkFRQUpBZ2tBQW1ZQUF3QUpBQU1KV1FBQ0FBb0lBZ3BaQUFnQUJRY0lCVmtBQndBR0JBY0dXUUFFQkFzRVFodEFMd0FBQ1FFSkFBRm1BQU1BQ1FBRENWa0NBUUVBQ2dnQkNsa0FDQUFGQndnRldRQUhBQVlFQndaWkFBUUVDd1JDV1ZsQUQwcElRa0FrTERRakZpa3hFaEFMRnlzQklnNEVJeUl1QVM4QkppY3VBaU1pRGdFUEFSa0JNeEUrQVRNeUhnRVhGak15UGdNM1BnRTNFVFVHQXdZaklpY3VBaU1pRGdFSEVUNEJNeklYSGdRek1qY0M0QUlTQ0JFTUR3Y09HaDRKR3hJSEhDRXpGaXBBRWdVSElBMHpLQk1xTlE1YU1RZ1JFZ3NVQXdvUEJ3d1VOeFl1VncwM0xSVVlLaHNMRFRNb0xWTUdKeElnSEE0WE9BSkFBd0VCQVFFQ0JRSUdCQUVHQndZTENBTUYvcmYrNUFFZkJRZ0lEd01UQVFJQkFnRUJBZ0VCT2lFQy9zTUhFZ01QQ1FRRkF3RVRCUWdTQVFrREJnSUhBQUFDQUlEL29BT0FBcUFBQ0FBU0FEVkFNaElSRHc0TkNnZ0JBQWtCQXdGQUVBa0NBejRBQVFNQUF3RUFaZ0FEQVFBRFN3QURBd0JQQWdFQUF3QkRGQkVSRWdRU0t3a0JFVE1STXhFekVRRUhOU01WQnhVSkFUVUNBUDdBNE1EZy9zREFnRUFCZ0FHQUFrRC9BUDVnQVFEL0FBR2dBV0NhV3NBektRRXovczBwQUFJQWdQK2dBNEFDb0FDQkFJNEFwTGFJaHdJSEFBRkFTN0FtVUZoQU1RQURBQThBQXc5WkJoQUNBQTBCQnc0QUIxa0VBUUlMQVFrSUFnbFpBQTRBQ2c0S1ZRVUJBUUVJVVF3QkNBZ0xDRUliUURjQUF3QVBBQU1QV1FZUUFnQU5BUWNPQUFkWkFBNEpDZzVOQkFFQ0N3RUpDQUlKV1FVQkFRd0JDQW9CQ0ZrQURnNEtVUUFLRGdwRldVQW1BZ0NNaTRXRWUzaHJhbWRsWDF4WFZWRlBSVUk4T1N3cUpTTWJHQk1SRFF3QWdRS0JFUTRyQVNNaUpqVTBQd0UyTkM4QkppSVBBUTRCSXlJbVBRRTBKaXNCSWc0QkhRRVVEZ0lqSWk0Qkx3RW1JeUlQQVFZVUh3RWVBeFVVQmlzQklnNEJIUUVVRmpzQk1oWVZGQThCQmhRZkFSWXpNajhCUGdFek1oWWRBUlFXT3dFeU5qMEJORDRCTXpJZkFSWXlQd0UrQVRRbUx3RW1OVFErQVRzQk1qWTlBalltQnhRR0lpWTFNVFErQVRJZUFRTlJIaE1iRHhRT0RpME9LZzRUQnhFS0V4d2RGRDBORmcwSURSRUpCd3dLQlJNT0ZSVU9MUTRPRXdRRkJBSWJFaDhORnc0ZUZCOFNHdzhURGc0dERSWVVEeE1HRWdrVEhCMFVQUlFkRFJVTkV3OFREaWtQTEFjSUNBY1REd3dWREI4VUdnRWJ3MTZGWFNwS1Ywb3JBVzhjRXhNT0V3NHBEeXdPRGhNSENCc1NIeFFlRGhjTkh3a1FEUWNEQndVVERnNHNEaWtQRWdRSUNBa0ZFeHdORmc0OEZSd2NFeFFPRWc4cERpd09EaE1IQ0JzVEhoUWVIUlVlREJVTkVCSU9EaXdIRXhJVEJ4TU5GQTBWRFJ3VUh4NFZIRTlDWGw1Q0swb3JLMG9BQUFNQVlQK0FBNkFDd0FBSEFCRUFHd0EzUURRQUFBQUNBd0FDV1FBREFBY0dBd2RYQUFZSUFRVUVCZ1ZYQUFRQkFRUkxBQVFFQVZFQUFRUUJSUkVSRVJFVUZCTVRFQWtYS3dBZ0JoQVdJRFlRSkRJV0ZSUUdJaVkxTkJNak5UTTFJelV6RVRNQ3JQNm85UFFCV1BUK1JpSVhGeUlYY1lBZ0lHQWdBc0QwL3FqMDlBRllKQmNSRUJnWUVCSCtoeER3RVA4QUFBQURBR0QvZ0FPZ0FzQUFCd0FVQUM0QVNFQkZBQVVIQmdjRkJtWUFCZ1FIQmdSa0FBQUFCd1VBQjFrQUJBQURBZ1FEV2dnQkFnRUJBazBJQVFJQ0FWSUFBUUlCUmdrSUtpZ25KaVVqR1JnTkRBZ1VDUlFURUFrUUt3QWdCaEFXSURZUUFTSW1ORFl5RmhVVURnTTNEZ0VISXpRK0FqYytBVFUwSmlNaUZ5TTJNeklXRlJRR0FxeitxUFQwQVZqMC9ta1BFeE1kRkFRR0NBcytJQTBCSmdjT0ZoRVNGVElrWVFJbUFZWXpSaG9Dd1BUK3FQVDBBVmorZUJRY0V4TU9CZ29JQndQbklDRXFGaUVmR3hBUkpoVWpMVjE4T3pJZUx3QURBTUVBNEFOQUFXQUFCd0FRQUJnQUswQW9CQVlDQXdBQkFRQk5CQVlDQXdBQUFWRUZBd0lCQUFGRkNRZ1dGUklSRFF3SUVBa1FFeEFIRUNzQUlnWVVGakkyTkNVaUJoUVdNalkwSmlBaUJoUVdNalkwQWhzMkpTVTJKZjdCR3lVbE5TWW1BZ0EySlNVMkpRRmdKVFlsSlRZbEpUWWxKVFlsSlRZbEpUWUFBQXdBUVAvUUE4QUNjQUFIQUE4QUZ3QWZBQ2NBTHdBMUFEc0FRd0JMQUZNQVd3RUVTN0FoVUZoQVlnQUNBQUpvQUFNQkNnRURDbVlBQ2dnQkNnaGtBQXNKQmdrTEJtWUFCZ1FKQmdSa0FBY0ZCMmtZRndJVUZnRVZBUlFWVndBQUFBRURBQUZaRHdFTURnRU5DUXdOV0FBSUFBa0xDQWxaRXdFUUVnRVJCUkFSV0FBRUJBVlJBQVVGQ3dWQ0cwQm5BQUlBQW1nQUF3RUtBUU1LWmdBS0NBRUtDR1FBQ3drR0NRc0daZ0FHQkFrR0JHUUFCd1VIYVJnWEFoUVdBUlVCRkJWWEFBQUFBUU1BQVZrUEFRd09BUTBKREExWUFBZ0FDUXNJQ1ZrQUJCQUZCRTBUQVJBU0FSRUZFQkZZQUFRRUJWRUFCUVFGUlZsQUxWUlVWRnRVVzFwWlQwNU5URXBKU0VjL1BqMDhPem81T0RNeU1UQXRMQ2tvSlNRVEV4TVRFeE1URXhBWkZ5c0FNaFlVQmlJbU5EWWlCaFFXTWpZMEFqSVdGQVlpSmpRMklnWVVGakkyTkFBeUZoUUdJaVkwTmlJR0ZCWXlOalFYSVJVaE5qUWlGQmNqTlRNQk14VWpOalUwSmdjVUZoVWhOU0VHRXpNVkl6WTFOQ1luQmhVVUZoVWhOUUt6R2hNVEdoTTZOQ1ltTkNaTkdoTVRHaE02TkNZbU5DYitNeG9URXhvVE9qUW1KalFtSHdJaC9kOEJ3QUdob1FJK29hRUJBYjhCL2Q4Q0lRRy9vYUVCQWI0QkFmM2ZBbEFUR2hNVEdqTW1OQ1ltTlAzbUV4b1RFeG96SmpRbUpqUUJGaE1hRXhNYU15WTBKaVkwQ2lBSUVCQUlJUDd3SUFnSUJBZ01CQWdFSUFnQ0tDQUlDQVFJQkFnSUJBZ0VJQUFKQUVRQUlBTzhBc3NBRlFBbkFETUFSQUJRQUYwQWNRQitBSXdCRWt1d0NsQllRRjRYQVF3TEF3b01YZ0FOQWdvTERWNEFCd0FJQVFjSVdRQUJFZ0VBQ1FFQVdRQUpGUUVHQ3drR1dRQURFd0VDRFFNQ1dRQUxGZ0VLRHdzS1dRQVBHUUVRQlE4UVdRQUZGQUVFRVFVRVdRQVJEZzRSVFFBUkVRNVJHQUVPRVE1RkcwQmdGd0VNQ3dNTERBTm1BQTBDQ2dJTkNtWUFCd0FJQVFjSVdRQUJFZ0VBQ1FFQVdRQUpGUUVHQ3drR1dRQURFd0VDRFFNQ1dRQUxGZ0VLRHdzS1dRQVBHUUVRQlE4UVdRQUZGQUVFRVFVRVdRQVJEZzRSVFFBUkVRNVJHQUVPRVE1RldVQkdnSDl6Y2w5ZVVsRTFOQ29vR0JZQ0FJU0RmNHlBakhsNGNuNXpmbWxuWG5GZmNWaFhVVjFTWFV4TFJrVTlPelJFTlVRd0xTZ3pLak1oSGhZbkdDY09Dd0FWQWhVYURpc0JJU0l1QlRVME5qTWhNaDRERlJRR0J5RWlMZ0kxTkRZeklUSWVBaFVVQmdjaElpWTBOak1oTWhZVUJnRWlKalUwUGdJek1oNEJGUlFPQWlZaURnRVVIZ0V5UGdFMEpnTWlKalUwUGdFeUhnRVVEZ0VuSWc0QkZSUWVBek15UGdFMU5DNERBeUltTlRRK0FUSWVBUlFPQVNjaUJoUVdNalkxTkM0RUE1cjkzUVFIQndZRkF3SVVEZ0lqQlFzSUJnUVVEdjNkQmcwSkJoUU9BaU1IREFrR0ZBNzkzUTRVRkE0Q0l3NFVGUDBES3p3Ukd5WVZHekFiRUJ3bUN4TVBDUWtQRXhBSkNSa3JQQnd2TnpBYkd6QWJDZzhKQXdZSkNnWUpFQWtFQmdnTEJTczhIQzgzTUJzYk1Cc09GQlFjRkFNRUJnZ0pBa0lDQXdVR0J3Y0VEaFFEQmdrS0JnNFU3d1lKREFjT0ZBVUpEUWNPRk84VUhSUVVIUlFCbWp3cUZTWWJFUnd2SEJVbEhCQ0lDUThURUFrSkVCTVAvcEk4S2h3dkhCd3ZOekFiaUFrUENnVUxDQVlFQ1JBSkJnb0pCZ1AraVR3cUhDOGNIQzgzTUJ1SkZCMFVGQTRGQ1FjSEJBTUFBd0JBLytFRHZ3Sm5BQU1BQndBTEFDWkFJd0FDQUFNQUFnTlhBQUFBQVFRQUFWY0FCQVFGVHdBRkJRc0ZRaEVSRVJFUkVBWVVLeE1oRlNFUklSVWhFU0VWSVVBRGYveUJBMy84Z1FOLy9JRUJQREFCV3pEOTJTOEFBQUFFQUJmL2lBUHBBcmdBQlFBaUFEa0FQd0E5UURvL1BqMDhPem81TFN3aklpRWZIaFFUQmdVRUF3SUJBQmNDQVFGQUFBQUFBUUlBQVZrQUFnTURBazBBQWdJRFVRQURBZ05GTHg0WExRUVNLd0VISndjWE55Y3dQUUV1QXlNaURnSUhGejRCTWg0QkZ4VVVCZ2NYTmpVeEJ3NEJJaTRCTlRRMk55Y0dIUU1lQWpNeU5qY0JCeGMzRnpjRDAxTlZGV3BwVVFGQmJaZFNOMmxjVFJzY01yRE1yR1VCQVFFZ0FsQXlzTXl0WlFFQklBSUNiN3B0YnNBMi9SeHBGbE5URmdFZ1UxTVdhbWtZQVFKVGxXeEFIVFpOTUJCWloyU3NaZzRHRGdjRUZSYTRXV2RrcldZS0ZBb0VGUllDQkFOc3VHdHdZQUZJYVJkVFV4Y0FBQUFCQVYvL253S2dBcUFBU1FCTFFFZzZBUUFGUng4S0F3SURBa0FBQlFBRmFBY0JBQU1BYUFBREFnTm9BQUlBQkFFQ0JGa0FBUVlHQVUwQUFRRUdVZ0FHQVFaR0FRQkRRVGMyTFNzbEl4MGJDQWNBU1FGSkNBNHJBU0lPQVJVUkZBWWlKamN3RVRRMk56WVhIZ0VWRVJRT0FnY0dJeUltTlRBUk5DWWpJZzRCRlFNVUZqTVdOejRDTlJNMEp5WWlCd1lITUIwREJoWXpGamMyTlJFMkpnS0pCZ3NHUlZ0RkFSSVFJeU1RRVFJQ0JBSUdDQWtORFFrSENnWUJLUndkRkFZSkJBRTRHejhhT0FFQllFQkRMaThCRFFIcUJnc0cvbm85UVVNOUFkWVhJd2tWRlFvakYvNC9CZ29JQ0FNSEZoTUJXZ29OQmdzRy9xY3FMd0VaQ0JRWERRSEJTeUlRRHlGTGVJMTlWRkZlQVM4d1R3R0ZDZzRBQXdBVC8vWUQ3UUpKQUJjQUl3QXhBSnBMc0E5UVdFQWlCd0VFQWdVQ0JGNEFCUU1EQlZ3QUFRWUJBZ1FCQWxrQUF3TUFVZ0FBQUFzQVFodExzQmhRV0VBa0J3RUVBZ1VDQkFWbUFBVURBZ1VEWkFBQkJnRUNCQUVDV1FBREF3QlNBQUFBQ3dCQ0cwQXBCd0VFQWdVQ0JBVm1BQVVEQWdVRFpBQUJCZ0VDQkFFQ1dRQURBQUFEVFFBREF3QlNBQUFEQUVaWldVQVVKU1FaR0NzcUpERWxNU0FmR0NNWkl5a21DQkFyQVJRT0JDTWlMZ00wUGdNek1oY1dGeFlsSWc0Q0ZSUVdNalkwSmdjaURnRVZGQll5TmpVMExnSUQ3U0U4V21xR1JsR2RkVnN2TDF0Mm5GSEluV01kQ1A0VE1GaEFKWXZGaTR0aktVWW9XSDVZR0NnNEFTQVlQa00vTXg4clJGQk5QRTFRUkNwd1Iwc1c0aVpDV2pGbGpvN0tqbGdwU0NwQVcxdEFJRGtxR0FBQUFRREFBR0FEUUFIZ0FBVUFCck1DQUFFbUt5VTNDUUVYQVFNWkovN0Evc0FuQVJsZ0tRRlgvcWtwQVMwQUFBQUFBUURBQUdBRFFBSGdBQVVBQnJNQ0FBRW1Ld0VYQ1FFM0FRTVpKLzdBL3NBbkFSa0I0Q24rcVFGWEtmN1RBQUFBQVFGQS8rQUN3QUpnQUFVQUJyTURBUUVtS3dFbkNRRTNBUUxBS2Y2cEFWY3AvdE1DT1NmK3dQN0FKd0VaQUFBQUFRRkEvK0FDd0FKZ0FBVUFCck1EQVFFbUt3RTNDUUVuQVFGQUtRRlgvcWtwQVMwQ09TZit3UDdBSndFWkFBQUFBUUZBLytBQ3dBSmdBQ0VBSlVBaUdSZ1RDd1FGQUFJQlFBQUFBZ0VDQUFGbUFBSUNBVkVBQVFFTEFVSXNGUkVERVNzQkJpSXZBUkVVQmlJbU5SRUhCaWNtTkRjMk56WXpNaFlmQVI0Qkh3RWVBUlVVQXJzRURRV1ZDUTRKbFF3S0JRV3VBZ1lGQXdVQkFnRllMQ3NEQWdHa0JBU0YvY2NIQ1FrSEFqbUVDd29GRGdTZkFRVUNBUUlCVUNnbkFnWURCd0FBQUFFQlFQL2dBc0FDWUFBZ0FDUkFJUmdUQ3dRRUFnQUJRQUFBQVFJQkFBSm1BQUVCQWxFQUFnSUxBa0lzRlJFREVTc2xKaUlQQVJFMEppSUdGUkVuSmdjR0ZCY1dGeFl6TWpZM1BnRS9BVDRCTlRRQ3V3UU5CWlVKRGdtVkRBb0ZCYTRDQmdVRUJnRUJXQ3dyQXdLY0JBU0ZBamtIQ1FrSC9jZUVDd29GRGdTZkFRVURBZ0ZRS0NjQ0JnTUhBQUFBQUFFQXdBQmdBMEFCNEFBZEFDcEFKeFlTQWdBQkFVQUFBZ0VDYUFBREFBTnBBQUVBQUFGTkFBRUJBRklBQUFFQVJod1VJeU1FRWlzbE5pOEJJVEkyTkNZaklUYzJKeVlpQndZSEJoVVVGeDRCSHdFV016WUJmQW9LaFFJNUJ3a0pCLzNIaEFzS0JRNEVud0VGQlFGUUtDY0VCd2RsQ2d5VkNRNEpsUXdLQlFXdUFnWUZCd1FCV0N3ckJRRUFBUURBQUdBRFFBSGhBQjRBSlVBaUZ4TUNBQUVCUUFBQ0FBSnBBQUVBQUFGTkFBRUJBRkVBQUFFQVJSMGNJeU1ERUNzbEpqOEJJU0ltTkRZeklTY21OejRCRmhjV0Z4WVZGQWNPQVE4QkJpTW1Bb1FLQ29YOXh3Y0pDUWNDT1lRTENnTUpDQU9mQVFVRkFWQW9Kd1FIQjJVS0RKVUpEZ21WREFvREF3SUVyZ0lHQlFjRUFWZ3NLd1VCQUFBQkFSNy9wd0xhQW44QUJnQVdRQk1BQVFBOUFBRUFBV2dDQVFBQVh4RVJFUU1SS3dVVEl4RWpFU01CL042Um01QlpBU2dCc1A1UUFBRUFYLzk3QTZFQ3ZRQUxBQUFKQWdjSkFSY0pBVGNKQVFOdC9wTCtsRFFCYmY2VE5BRnNBVzQwL3BFQmJ3SzkvcElCYkRQK2xQNlVNd0ZzL3BJekFXNEJiUUFBQkFCVi8zRURxZ0xJQUJNQUp3QStBRVFBQUFVR0xnRTBOejRCTkNZbkpqUStBUmNlQVJRR0p3NEJKalEzUGdFMEppY21ORFlXRng0QkZBWURKeU1pSmljUlBnRTNNemMrQVI0QkZSRVVEZ0VtSnpjUkJ5TVJNd013Q0JnUUNUSTJOVElKRUJnSk9qNC9yQWdZRVFnWUdSZ1hDQkVZQ0I4Z0l1SElweGNoQVFFaEY2ZkZEaDhlRUJBYkh3NGYxTHE0RkFrQkVoZ0pOSWFYaFRRSkdCSUJDVHljc0p4U0NBRVNGd2taUGtVK0dRa1hFUUVJSVZOY1UvN2dnaUVZQWJrWElRR1RDZ01QR3hEOUhCQWFEd0VJTUFMa24vNUhBQUFBQlFCQS8zd0R3QUs4QUFzQUh3QXpBRWdBWFFBQUpTRWlKalEyTXlFeUZoUUdBeU1pSmpRMk93RXlOajBCTkRZeUZoMEJEZ0VGSXk0Qkp6VTBOaklXSFFFVUZqc0JNaFlVQmdNaUpqMEJQZ0UzTXpJV0ZBWXJBU0lHSFFFVUJpRWlKajBCTkNZckFTSW1ORFk3QVI0QkZ4VVVCZ09nL01BT0VoSU9BMEFPRWhKdXdBNFNFZzdBRGhJU0hCSUJOdjMzb0NrMkFSSWNFaElPb0E0U0V1NE9FZ0UyS2FBT0VoSU9vQTRTRWdMeURoSVNEc0FPRWhJT3dDazJBUkw4RWh3U0Vod1Mvb0FTSEJJU0RxQU9FaElPb0NrMkFRRTJLYUFPRWhJT29BNFNFaHdTQWlBU0RxQXBOZ0VTSEJJU0RxQU9FaElPb0E0U0Vod1NBVFlwb0E0U0FBQUFEQUNXQUFFQUFBQUFBQUVBQ0FBU0FBRUFBQUFBQUFJQUJnQXBBQUVBQUFBQUFBTUFIQUJxQUFFQUFBQUFBQVFBRHdDbkFBRUFBQUFBQUFVQUx3RVhBQUVBQUFBQUFBWUFEd0ZuQUFNQUFRUUpBQUVBRUFBQUFBTUFBUVFKQUFJQURBQWJBQU1BQVFRSkFBTUFPQUF3QUFNQUFRUUpBQVFBSGdDSEFBTUFBUVFKQUFVQVhnQzNBQU1BQVFRSkFBWUFIZ0ZIQUdrQVl3QnZBRzRBWmdCdkFHNEFkQUFBYVdOdmJtWnZiblFBQUUwQVpRQmtBR2tBZFFCdEFBQk5aV1JwZFcwQUFHa0FZd0J2QUc0QVpnQnZBRzRBZEFBZ0FFMEFaUUJrQUdrQWRRQnRBRG9BVmdCbEFISUFjd0JwQUc4QWJnQWdBREVBTGdBd0FEQUFBR2xqYjI1bWIyNTBJRTFsWkdsMWJUcFdaWEp6YVc5dUlERXVNREFBQUdrQVl3QnZBRzRBWmdCdkFHNEFkQUFnQUUwQVpRQmtBR2tBZFFCdEFBQnBZMjl1Wm05dWRDQk5aV1JwZFcwQUFGWUFaUUJ5QUhNQWFRQnZBRzRBSUFBeEFDNEFNQUF3QUNBQVJBQmxBR01BWlFCdEFHSUFaUUJ5QUNBQU1RQXpBQ3dBSUFBeUFEQUFNUUE0QUN3QUlBQnBBRzRBYVFCMEFHa0FZUUJzQUNBQWNnQmxBR3dBWlFCaEFITUFaUUFBVm1WeWMybHZiaUF4TGpBd0lFUmxZMlZ0WW1WeUlERXpMQ0F5TURFNExDQnBibWwwYVdGc0lISmxiR1ZoYzJVQUFHa0FZd0J2QUc0QVpnQnZBRzRBZEFBdEFFMEFaUUJrQUdrQWRRQnRBQUJwWTI5dVptOXVkQzFOWldScGRXMEFBQUFBQUFJQUFBQUFBQUQvVVFBeUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFZQUFBQUFFQUFnQmJBUUlCQXdFRUFRVUJCZ0VIQVFnQkNRRUtBUXNCREFFTkFRNEJEd0VRQVJFQkVnRVRBUlFCRlFFV0FSY0JHQUVaQVJvQkd3RWNBUjBCSGdFZkFTQUJJUUVpQVNNQkpBRWxBU1lCSndFb0FTa0JLZ0VyQVN3QkxRRXVBUzhCTUFFeEFUSUJNd0UwQVRVQk5nRTNBVGdCT1FFNkFUc0JQQUU5QVQ0QlB3RkFBVUVCUWdGREFVUUJSUUZHQVVjQlNBRkpBVW9CU3dGTUFVMEJUZ0ZQQVZBQlVRRlNBVk1CVkFGVkFWWUJWd0ZZQVZrQldnRmJBVndCWFFkMWJtbEZNVEF3QjNWdWFVVXhNREVIZFc1cFJURXdNZ2QxYm1sRk1UTXdCM1Z1YVVVeE16RUhkVzVwUlRFek1nZDFibWxGTWpBd0IzVnVhVVV5TURFSGRXNXBSVEl3TWdkMWJtbEZNakF6QjNWdWFVVXlNekFIZFc1cFJUSXpNUWQxYm1sRk1qTXlCM1Z1YVVVeU16TUhkVzVwUlRJMk1BZDFibWxGTWpZeEIzVnVhVVV5TmpJSGRXNXBSVEkyTXdkMWJtbEZNalkwQjNWdWFVVXpNREFIZFc1cFJUTXdNUWQxYm1sRk16QXlCM1Z1YVVVek1ETUhkVzVwUlRNek1nZDFibWxGTXpNekIzVnVhVVV6TmpBSGRXNXBSVE0yTXdkMWJtbEZNelkwQjNWdWFVVTBNREFIZFc1cFJUUXdNUWQxYm1sRk5EQXlCM1Z1YVVVME1ETUhkVzVwUlRRd05BZDFibWxGTkRBMUIzVnVhVVUwTURZSGRXNXBSVFF3TndkMWJtbEZOREE0QjNWdWFVVTBNRGtIZFc1cFJUUXhNQWQxYm1sRk5ERXhCM1Z1YVVVME1UTUhkVzVwUlRRek5BZDFibWxGTkRNM0IzVnVhVVUwTXpnSGRXNXBSVFF6T1FkMWJtbEZORFF3QjNWdWFVVTBOREVIZFc1cFJUUTBNZ2QxYm1sRk5EUXpCM1Z1YVVVME5qQUhkVzVwUlRRMk1RZDFibWxGTkRZeUIzVnVhVVUwTmpNSGRXNXBSVFEyTkFkMWJtbEZORFkxQjNWdWFVVTBOallIZFc1cFJUUTJPQWQxYm1sRk5EY3dCM1Z1YVVVME56RUhkVzVwUlRRM01nZDFibWxGTlRBd0IzVnVhVVUxTURFSGRXNXBSVFV3TWdkMWJtbEZOVEF6QjNWdWFVVTFNRFFIZFc1cFJUVXdOUWQxYm1sRk5UQTJCM1Z1YVVVMU1EY0hkVzVwUlRVd09BZDFibWxGTlRNd0IzVnVhVVUxTXpJSGRXNXBSVFV6TkFkMWJtbEZOVE0xQjNWdWFVVTFNemNIZFc1cFJUVTJNQWQxYm1sRk5UWXlCM1Z1YVVVMU5qTUhkVzVwUlRVMk5RZDFibWxGTlRZM0IzVnVhVVUxTmpnSGRXNXBSVFU0TUFkMWJtbEZOVGd4QjNWdWFVVTFPRElIZFc1cFJUVTRNd2QxYm1sRk5UZzBCM1Z1YVVVMU9EVUhkVzVwUlRVNE5nZDFibWxGTlRnM0IzVnVhVVUxT0RnSGRXNXBSVFU0T1FSRmRYSnZCRVYxY204QUFRQUIvLzhBRHdBQkFBQUFEQUFBQUJZQUFBQUNBQUVBQVFCZkFBRUFCQUFBQUFJQUFBQUFBQUFBQVFBQUFBRFZwQ2NJQUFBQUFOSnJUWmtBQUFBQTJEaGh1UT09KSBmb3JtYXQoJ3RydWV0eXBlJyk7XG5cdH1cblxuXHR1bmktaWNvbiB7XG5cdFx0bGluZS1oZWlnaHQ6IDE7XG5cdH1cblxuXHQudW5pLWljb24ge1xuXHRcdGZvbnQtZmFtaWx5OiB1bmlpY29ucztcblx0XHRmb250LXdlaWdodDogbm9ybWFsO1xuXHRcdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0XHRsaW5lLWhlaWdodDogMTtcblx0XHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRcdC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuXHR9XG5cblx0LnVuaS1pY29uLnVuaS1hY3RpdmUge1xuXHRcdGNvbG9yOiAjMDA3YWZmO1xuXHR9XG5cblx0LnVuaS1pY29uLWNvbnRhY3Q6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMTAwJztcblx0fVxuXG5cdC51bmktaWNvbi1wZXJzb246YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMTAxJztcblx0fVxuXG5cdC51bmktaWNvbi1wZXJzb25hZGQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMTAyJztcblx0fVxuXG5cdC51bmktaWNvbi1jb250YWN0LWZpbGxlZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUxMzAnO1xuXHR9XG5cblx0LnVuaS1pY29uLXBlcnNvbi1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMTMxJztcblx0fVxuXG5cdC51bmktaWNvbi1wZXJzb25hZGQtZmlsbGVkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTEzMic7XG5cdH1cblxuXHQudW5pLWljb24tcGhvbmU6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMjAwJztcblx0fVxuXG5cdC51bmktaWNvbi1lbWFpbDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUyMDEnO1xuXHR9XG5cblx0LnVuaS1pY29uLWNoYXRidWJibGU6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMjAyJztcblx0fVxuXG5cdC51bmktaWNvbi1jaGF0Ym94ZXM6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMjAzJztcblx0fVxuXG5cdC51bmktaWNvbi1waG9uZS1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMjMwJztcblx0fVxuXG5cdC51bmktaWNvbi1lbWFpbC1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMjMxJztcblx0fVxuXG5cdC51bmktaWNvbi1jaGF0YnViYmxlLWZpbGxlZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUyMzInO1xuXHR9XG5cblx0LnVuaS1pY29uLWNoYXRib3hlcy1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMjMzJztcblx0fVxuXG5cdC51bmktaWNvbi13ZWlibzpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUyNjAnO1xuXHR9XG5cblx0LnVuaS1pY29uLXdlaXhpbjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUyNjEnO1xuXHR9XG5cblx0LnVuaS1pY29uLXBlbmd5b3VxdWFuOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTI2Mic7XG5cdH1cblxuXHQudW5pLWljb24tY2hhdDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUyNjMnO1xuXHR9XG5cblx0LnVuaS1pY29uLXFxOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTI2NCc7XG5cdH1cblxuXHQudW5pLWljb24tdmlkZW9jYW06YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMzAwJztcblx0fVxuXG5cdC51bmktaWNvbi1jYW1lcmE6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMzAxJztcblx0fVxuXG5cdC51bmktaWNvbi1taWM6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMzAyJztcblx0fVxuXG5cdC51bmktaWNvbi1sb2NhdGlvbjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGUzMDMnO1xuXHR9XG5cblx0LnVuaS1pY29uLW1pYy1maWxsZWQ6YmVmb3JlLFxuXHQudW5pLWljb24tc3BlZWNoOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTMzMic7XG5cdH1cblxuXHQudW5pLWljb24tbG9jYXRpb24tZmlsbGVkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTMzMyc7XG5cdH1cblxuXHQudW5pLWljb24tbWljb2ZmOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTM2MCc7XG5cdH1cblxuXHQudW5pLWljb24taW1hZ2U6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMzYzJztcblx0fVxuXG5cdC51bmktaWNvbi1tYXA6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlMzY0Jztcblx0fVxuXG5cdC51bmktaWNvbi1jb21wb3NlOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQwMCc7XG5cdH1cblxuXHQudW5pLWljb24tdHJhc2g6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDAxJztcblx0fVxuXG5cdC51bmktaWNvbi11cGxvYWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDAyJztcblx0fVxuXG5cdC51bmktaWNvbi1kb3dubG9hZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MDMnO1xuXHR9XG5cblx0LnVuaS1pY29uLWNsb3NlOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQwNCc7XG5cdH1cblxuXHQudW5pLWljb24tcmVkbzpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MDUnO1xuXHR9XG5cblx0LnVuaS1pY29uLXVuZG86YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDA2Jztcblx0fVxuXG5cdC51bmktaWNvbi1yZWZyZXNoOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQwNyc7XG5cdH1cblxuXHQudW5pLWljb24tc3RhcjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MDgnO1xuXHR9XG5cblx0LnVuaS1pY29uLXBsdXM6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDA5Jztcblx0fVxuXG5cdC51bmktaWNvbi1taW51czpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MTAnO1xuXHR9XG5cblx0LnVuaS1pY29uLWNpcmNsZTpiZWZvcmUsXG5cdC51bmktaWNvbi1jaGVja2JveDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MTEnO1xuXHR9XG5cblx0LnVuaS1pY29uLWNsb3NlLWZpbGxlZDpiZWZvcmUsXG5cdC51bmktaWNvbi1jbGVhcjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MzQnO1xuXHR9XG5cblx0LnVuaS1pY29uLXJlZnJlc2gtZmlsbGVkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQzNyc7XG5cdH1cblxuXHQudW5pLWljb24tc3Rhci1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDM4Jztcblx0fVxuXG5cdC51bmktaWNvbi1wbHVzLWZpbGxlZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0MzknO1xuXHR9XG5cblx0LnVuaS1pY29uLW1pbnVzLWZpbGxlZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0NDAnO1xuXHR9XG5cblx0LnVuaS1pY29uLWNpcmNsZS1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDQxJztcblx0fVxuXG5cdC51bmktaWNvbi1jaGVja2JveC1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDQyJztcblx0fVxuXG5cdC51bmktaWNvbi1jbG9zZWVtcHR5OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQ2MCc7XG5cdH1cblxuXHQudW5pLWljb24tcmVmcmVzaGVtcHR5OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQ2MSc7XG5cdH1cblxuXHQudW5pLWljb24tcmVsb2FkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQ2Mic7XG5cdH1cblxuXHQudW5pLWljb24tc3RhcmhhbGY6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDYzJztcblx0fVxuXG5cdC51bmktaWNvbi1zcGlubmVyOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQ2NCc7XG5cdH1cblxuXHQudW5pLWljb24tc3Bpbm5lci1jeWNsZTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0NjUnO1xuXHR9XG5cblx0LnVuaS1pY29uLXNlYXJjaDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0NjYnO1xuXHR9XG5cblx0LnVuaS1pY29uLXBsdXNlbXB0eTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU0NjgnO1xuXHR9XG5cblx0LnVuaS1pY29uLWZvcndhcmQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDcwJztcblx0fVxuXG5cdC51bmktaWNvbi1iYWNrOmJlZm9yZSxcblx0LnVuaS1pY29uLWxlZnQtbmF2OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTQ3MSc7XG5cdH1cblxuXHQudW5pLWljb24tY2hlY2ttYXJrZW1wdHk6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNDcyJztcblx0fVxuXG5cdC51bmktaWNvbi1ob21lOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTUwMCc7XG5cdH1cblxuXHQudW5pLWljb24tbmF2aWdhdGU6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTAxJztcblx0fVxuXG5cdC51bmktaWNvbi1nZWFyOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTUwMic7XG5cdH1cblxuXHQudW5pLWljb24tcGFwZXJwbGFuZTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1MDMnO1xuXHR9XG5cblx0LnVuaS1pY29uLWluZm86YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTA0Jztcblx0fVxuXG5cdC51bmktaWNvbi1oZWxwOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTUwNSc7XG5cdH1cblxuXHQudW5pLWljb24tbG9ja2VkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTUwNic7XG5cdH1cblxuXHQudW5pLWljb24tbW9yZTpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1MDcnO1xuXHR9XG5cblx0LnVuaS1pY29uLWZsYWc6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTA4Jztcblx0fVxuXG5cdC51bmktaWNvbi1ob21lLWZpbGxlZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1MzAnO1xuXHR9XG5cblx0LnVuaS1pY29uLWdlYXItZmlsbGVkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTUzMic7XG5cdH1cblxuXHQudW5pLWljb24taW5mby1maWxsZWQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTM0Jztcblx0fVxuXG5cdC51bmktaWNvbi1oZWxwLWZpbGxlZDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1MzUnO1xuXHR9XG5cblx0LnVuaS1pY29uLW1vcmUtZmlsbGVkOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTUzNyc7XG5cdH1cblxuXHQudW5pLWljb24tc2V0dGluZ3M6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTYwJztcblx0fVxuXG5cdC51bmktaWNvbi1saXN0OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU2Mic7XG5cdH1cblxuXHQudW5pLWljb24tYmFyczpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1NjMnO1xuXHR9XG5cblx0LnVuaS1pY29uLWxvb3A6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTY1Jztcblx0fVxuXG5cdC51bmktaWNvbi1wYXBlcmNsaXA6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTY3Jztcblx0fVxuXG5cdC51bmktaWNvbi1leWU6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTY4Jztcblx0fVxuXG5cdC51bmktaWNvbi1hcnJvd3VwOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU4MCc7XG5cdH1cblxuXHQudW5pLWljb24tYXJyb3dkb3duOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU4MSc7XG5cdH1cblxuXHQudW5pLWljb24tYXJyb3dsZWZ0OmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU4Mic7XG5cdH1cblxuXHQudW5pLWljb24tYXJyb3dyaWdodDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1ODMnO1xuXHR9XG5cblx0LnVuaS1pY29uLWFycm93dGhpbnVwOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU4NCc7XG5cdH1cblxuXHQudW5pLWljb24tYXJyb3d0aGluZG93bjpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1ODUnO1xuXHR9XG5cblx0LnVuaS1pY29uLWFycm93dGhpbmxlZnQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTg2Jztcblx0fVxuXG5cdC51bmktaWNvbi1hcnJvd3RoaW5yaWdodDpiZWZvcmUge1xuXHRcdGNvbnRlbnQ6ICdcXGU1ODcnO1xuXHR9XG5cblx0LnVuaS1pY29uLXB1bGxkb3duOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU4OCc7XG5cdH1cblxuXHQudW5pLWljb24tY2xvc2VmaWxsOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTU4OSc7XG5cdH1cblxuXHQudW5pLWljb24tc291bmQ6YmVmb3JlIHtcblx0XHRjb250ZW50OiAnXFxlNTkwJztcblx0fVxuXG5cdC51bmktaWNvbi1zY2FuOmJlZm9yZSB7XG5cdFx0Y29udGVudDogJ1xcZTYxMic7XG5cdH1cbjwvc3R5bGU+Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///32\n");

/***/ }),
/* 33 */
/*!**********************!*\
  !*** external "Vue" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = Vue;

/***/ }),
/* 34 */
/*!********************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/App.vue ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./App.vue?vue&type=script&lang=js& */ 35);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 22);\nvar render, staticRenderFns, recyclableRender, components\nvar renderjs\n\n\n\n\n/* normalize component */\n\nvar component = Object(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\n  _App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[\"default\"],\n  render,\n  staticRenderFns,\n  false,\n  null,\n  null,\n  null,\n  false,\n  components,\n  renderjs\n)\n\ncomponent.options.__file = \"App.vue\"\n/* harmony default export */ __webpack_exports__[\"default\"] = (component.exports);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUN1RDtBQUNMOzs7QUFHbEQ7QUFDNE07QUFDNU0sZ0JBQWdCLDROQUFVO0FBQzFCLEVBQUUseUVBQU07QUFDUjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNlLGdGIiwiZmlsZSI6IjM0LmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHJlbmRlciwgc3RhdGljUmVuZGVyRm5zLCByZWN5Y2xhYmxlUmVuZGVyLCBjb21wb25lbnRzXG52YXIgcmVuZGVyanNcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuZXhwb3J0ICogZnJvbSBcIi4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIlxuXG5cbi8qIG5vcm1hbGl6ZSBjb21wb25lbnQgKi9cbmltcG9ydCBub3JtYWxpemVyIGZyb20gXCIhLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL3J1bnRpbWUvY29tcG9uZW50Tm9ybWFsaXplci5qc1wiXG52YXIgY29tcG9uZW50ID0gbm9ybWFsaXplcihcbiAgc2NyaXB0LFxuICByZW5kZXIsXG4gIHN0YXRpY1JlbmRlckZucyxcbiAgZmFsc2UsXG4gIG51bGwsXG4gIG51bGwsXG4gIG51bGwsXG4gIGZhbHNlLFxuICBjb21wb25lbnRzLFxuICByZW5kZXJqc1xuKVxuXG5jb21wb25lbnQub3B0aW9ucy5fX2ZpbGUgPSBcIkFwcC52dWVcIlxuZXhwb3J0IGRlZmF1bHQgY29tcG9uZW50LmV4cG9ydHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///34\n");

/***/ }),
/* 35 */
/*!*********************************************************************************************!*\
  !*** D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/App.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!../../HBuilderX7.full/HBuilderX.2.8.13.20200927.full/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./App.vue?vue&type=script&lang=js& */ 36);\n/* harmony import */ var _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);\n/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));\n /* harmony default export */ __webpack_exports__[\"default\"] = (_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_1_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_using_components_js_HBuilderX7_full_HBuilderX_2_8_13_20200927_full_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_App_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbbnVsbF0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQW1zQixDQUFnQixxdkJBQUcsRUFBQyIsImZpbGUiOiIzNS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBtb2QgZnJvbSBcIi0hLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9iYWJlbC1sb2FkZXIvbGliL2luZGV4LmpzIS4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXByZXByb2Nlc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTYtMSEuLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL0BkY2xvdWRpby92dWUtY2xpLXBsdWdpbi11bmkvcGFja2FnZXMvd2VicGFjay11bmktYXBwLWxvYWRlci91c2luZy1jb21wb25lbnRzLmpzIS4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy92dWUtbG9hZGVyL2xpYi9pbmRleC5qcz8/dnVlLWxvYWRlci1vcHRpb25zIS4vQXBwLnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qcyZcIjsgZXhwb3J0IGRlZmF1bHQgbW9kOyBleHBvcnQgKiBmcm9tIFwiLSEuLi8uLi9IQnVpbGRlclg3LmZ1bGwvSEJ1aWxkZXJYLjIuOC4xMy4yMDIwMDkyNy5mdWxsL0hCdWlsZGVyWC9wbHVnaW5zL3VuaWFwcC1jbGkvbm9kZV9tb2R1bGVzL2JhYmVsLWxvYWRlci9saWIvaW5kZXguanMhLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3dlYnBhY2stcHJlcHJvY2Vzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNi0xIS4uLy4uL0hCdWlsZGVyWDcuZnVsbC9IQnVpbGRlclguMi44LjEzLjIwMjAwOTI3LmZ1bGwvSEJ1aWxkZXJYL3BsdWdpbnMvdW5pYXBwLWNsaS9ub2RlX21vZHVsZXMvQGRjbG91ZGlvL3Z1ZS1jbGktcGx1Z2luLXVuaS9wYWNrYWdlcy93ZWJwYWNrLXVuaS1hcHAtbG9hZGVyL3VzaW5nLWNvbXBvbmVudHMuanMhLi4vLi4vSEJ1aWxkZXJYNy5mdWxsL0hCdWlsZGVyWC4yLjguMTMuMjAyMDA5MjcuZnVsbC9IQnVpbGRlclgvcGx1Z2lucy91bmlhcHAtY2xpL25vZGVfbW9kdWxlcy9AZGNsb3VkaW8vdnVlLWNsaS1wbHVnaW4tdW5pL3BhY2thZ2VzL3Z1ZS1sb2FkZXIvbGliL2luZGV4LmpzPz92dWUtbG9hZGVyLW9wdGlvbnMhLi9BcHAudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzJlwiIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///35\n");

/***/ }),
/* 36 */
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/using-components.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!D:/UNI-APP 20210219蓝牙控制/BuletoothPrint扫码连接/Buletooth/App.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/* WEBPACK VAR INJECTION */(function(__f__) {Object.defineProperty(exports, \"__esModule\", { value: true });exports.default = void 0;var _default =\n{\n  onLaunch: function onLaunch() {\n    __f__(\"log\", 'App Launch', \" at App.vue:4\");\n  },\n  onShow: function onShow() {\n    __f__(\"log\", 'App Show', \" at App.vue:7\");\n  },\n  onHide: function onHide() {\n    __f__(\"log\", 'App Hide', \" at App.vue:10\");\n  } };exports.default = _default;\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/lib/format-log.js */ 7)[\"default\"]))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVuaS1hcHA6Ly8vQXBwLnZ1ZSJdLCJuYW1lcyI6WyJvbkxhdW5jaCIsIm9uU2hvdyIsIm9uSGlkZSJdLCJtYXBwaW5ncyI6IjtBQUNlO0FBQ2RBLFVBQVEsRUFBRSxvQkFBVztBQUNwQixpQkFBWSxZQUFaO0FBQ0EsR0FIYTtBQUlkQyxRQUFNLEVBQUUsa0JBQVc7QUFDbEIsaUJBQVksVUFBWjtBQUNBLEdBTmE7QUFPZEMsUUFBTSxFQUFFLGtCQUFXO0FBQ2xCLGlCQUFZLFVBQVo7QUFDQSxHQVRhLEUiLCJmaWxlIjoiMzYuanMiLCJzb3VyY2VzQ29udGVudCI6WyJcbmV4cG9ydCBkZWZhdWx0IHtcblx0b25MYXVuY2g6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgTGF1bmNoJylcblx0fSxcblx0b25TaG93OiBmdW5jdGlvbigpIHtcblx0XHRjb25zb2xlLmxvZygnQXBwIFNob3cnKVxuXHR9LFxuXHRvbkhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdGNvbnNvbGUubG9nKCdBcHAgSGlkZScpXG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///36\n");

/***/ })
],[[0,"app-config"]]]);