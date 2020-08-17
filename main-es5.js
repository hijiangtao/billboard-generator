function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, ɵ0, ɵ1, ɵ2, ɵ3 */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ1", function () {
      return ɵ1;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ2", function () {
      return ɵ2;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ3", function () {
      return ɵ3;
    });
    /* harmony import */


    var _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./component/poster-in-canvas/poster-in-canvas.component */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.ts");
    /* harmony import */


    var _component_poster_in_fabric_poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./component/poster-in-fabric/poster-in-fabric.component */
    "./src/app/component/poster-in-fabric/poster-in-fabric.component.ts");
    /* harmony import */


    var _component_canvas_text_editor_canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./component/canvas-text-editor/canvas-text-editor.component */
    "./src/app/component/canvas-text-editor/canvas-text-editor.component.ts");
    /* harmony import */


    var _component_canvas_video_filter_canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./component/canvas-video-filter/canvas-video-filter.component */
    "./src/app/component/canvas-video-filter/canvas-video-filter.component.ts");

    var ɵ0 = {
      title: 'Poster In Canvas'
    },
        ɵ1 = {
      title: 'Poster In Fabric'
    },
        ɵ2 = {
      title: 'Canvas Text Editor'
    },
        ɵ3 = {
      title: 'Video Filter'
    };
    var routes = [{
      path: '',
      redirectTo: 'poster-in-canvas',
      pathMatch: 'full'
    }, {
      path: 'poster-in-canvas',
      component: _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_0__["PosterInCanvasComponent"],
      data: ɵ0
    }, {
      path: 'poster-in-fabric',
      component: _component_poster_in_fabric_poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_1__["PosterInFabricComponent"],
      data: ɵ1
    }, {
      path: 'canvas-text-editor',
      component: _component_canvas_text_editor_canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_2__["CanvasTextEditorComponent"],
      data: ɵ2
    }, {
      path: 'canvas-video-filter',
      component: _component_canvas_video_filter_canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_3__["CanvasVideoFilterComponent"],
      data: ɵ3
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../node_modules/ng-zorro-antd/layout/ng-zorro-antd-layout.ngfactory */
    "./node_modules/ng-zorro-antd/layout/ng-zorro-antd-layout.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 65, "nz-layout", [], [[2, "ant-layout-has-sider", null], [2, "ant-layout", null]], null, null, _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzLayoutComponent_0"], _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzLayoutComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 1, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzLayoutComponent"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 1, {
        listOfNzSiderComponent: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 54, "nz-header", [], null, null, null, _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzHeaderComponent_0"], _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 49152, null, 0, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzHeaderComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, 0, 1, "span", [["class", "logo"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](6, null, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 50, "ul", [["class", "header-menu"], ["nz-menu", ""], ["nzMode", "horizontal"]], [[2, "ant-dropdown-menu", null], [2, "ant-dropdown-menu-root", null], [2, "ant-dropdown-menu-light", null], [2, "ant-dropdown-menu-dark", null], [2, "ant-dropdown-menu-vertical", null], [2, "ant-dropdown-menu-horizontal", null], [2, "ant-dropdown-menu-inline", null], [2, "ant-dropdown-menu-inline-collapsed", null], [2, "ant-menu", null], [2, "ant-menu-root", null], [2, "ant-menu-light", null], [2, "ant-menu-dark", null], [2, "ant-menu-vertical", null], [2, "ant-menu-horizontal", null], [2, "ant-menu-inline", null], [2, "ant-menu-inline-collapsed", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](512, null, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuServiceLocalToken"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuServiceFactory"], [[3, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"]], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuServiceLocalToken"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuDropDownTokenFactory"], [[3, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 1785856, null, 2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuDirective"], [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzMode: [0, "nzMode"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 2, {
        listOfNzMenuItemDirective: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        listOfNzSubMenuComponent: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "li", [["nz-menu-item", ""]], [[2, "ant-dropdown-menu-item", null], [2, "ant-dropdown-menu-item-selected", null], [2, "ant-dropdown-menu-item-disabled", null], [2, "ant-menu-item", null], [2, "ant-menu-item-selected", null], [2, "ant-menu-item-disabled", null], [4, "paddingLeft", "px"]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).clickMenuItem($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 1785856, [[2, 4]], 2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuItemDirective"], [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzSubmenuService"]], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        listOfRouterLink: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        listOfRouterLinkWithHref: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 5, "a", [["routerLink", "/poster-in-canvas"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 671744, [[7, 4], [5, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u7ED8\u5236\u6D77\u62A5"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 10, "li", [["nz-menu-item", ""]], [[2, "ant-dropdown-menu-item", null], [2, "ant-dropdown-menu-item-selected", null], [2, "ant-dropdown-menu-item-disabled", null], [2, "ant-menu-item", null], [2, "ant-menu-item-selected", null], [2, "ant-menu-item-disabled", null], [4, "paddingLeft", "px"]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).clickMenuItem($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 1785856, [[2, 4]], 2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuItemDirective"], [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzSubmenuService"]], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        listOfRouterLink: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        listOfRouterLinkWithHref: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 5, "a", [["routerLink", "/poster-in-fabric"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 671744, [[11, 4], [9, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u6D77\u62A5\u5B9E\u9A8C"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 10, "li", [["nz-menu-item", ""]], [[2, "ant-dropdown-menu-item", null], [2, "ant-dropdown-menu-item-selected", null], [2, "ant-dropdown-menu-item-disabled", null], [2, "ant-menu-item", null], [2, "ant-menu-item-selected", null], [2, "ant-menu-item-disabled", null], [4, "paddingLeft", "px"]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).clickMenuItem($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 1785856, [[2, 4]], 2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuItemDirective"], [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzSubmenuService"]], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        listOfRouterLink: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        listOfRouterLinkWithHref: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](41, 0, null, null, 5, "a", [["routerLink", "/canvas-text-editor"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 671744, [[15, 4], [13, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\u6587\u672C\u7F16\u8F91\u5668"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, null, 10, "li", [["nz-menu-item", ""]], [[2, "ant-dropdown-menu-item", null], [2, "ant-dropdown-menu-item-selected", null], [2, "ant-dropdown-menu-item-disabled", null], [2, "ant-menu-item", null], [2, "ant-menu-item-selected", null], [2, "ant-menu-item-disabled", null], [4, "paddingLeft", "px"]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).clickMenuItem($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_5__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 1785856, [[2, 4]], 2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzMenuItemDirective"], [ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["MenuService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [2, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzSubmenuService"]], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_4__["NzIsMenuInsideDropDownToken"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        listOfRouterLink: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        listOfRouterLinkWithHref: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](52, 0, null, null, 5, "a", [["routerLink", "/canvas-video-filter"], ["routerLinkActive", "active"]], [[1, "target", 0], [8, "href", 4]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 671744, [[19, 4], [17, 4]], 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"]], {
        routerLink: [0, "routerLink"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 1720320, null, 2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLink"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"]]], {
        routerLinkActive: [0, "routerLinkActive"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        links: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
        linksWithHrefs: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["ImageData"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](58, 0, null, 0, 3, "nz-content", [], null, null, null, _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzContentComponent_0"], _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzContentComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 49152, null, 0, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzContentComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 16777216, null, 0, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_6__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](62, 0, null, 0, 3, "nz-footer", [], null, null, null, _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFooterComponent_0"], _node_modules_ng_zorro_antd_layout_ng_zorro_antd_layout_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 49152, null, 0, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_3__["NzFooterComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, 0, 1, "a", [["aria-label", "Info on Github"], ["href", "https://github.com/hijiangtao/billboard-generator"], ["rel", "noopener"], ["target", "_blank"], ["title", "GitHub"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](65, 0, null, null, 0, "img", [["id", "github-icon"], ["src", "assets/github.svg"]], null, null, null, null, null))], function (_ck, _v) {
        var currVal_19 = "horizontal";

        _ck(_v, 11, 0, currVal_19);

        _ck(_v, 16, 0);

        var currVal_29 = "/poster-in-canvas";

        _ck(_v, 20, 0, currVal_29);

        var currVal_30 = "active";

        _ck(_v, 21, 0, currVal_30);

        _ck(_v, 27, 0);

        var currVal_40 = "/poster-in-fabric";

        _ck(_v, 31, 0, currVal_40);

        var currVal_41 = "active";

        _ck(_v, 32, 0, currVal_41);

        _ck(_v, 38, 0);

        var currVal_51 = "/canvas-text-editor";

        _ck(_v, 42, 0, currVal_51);

        var currVal_52 = "active";

        _ck(_v, 43, 0, currVal_52);

        _ck(_v, 49, 0);

        var currVal_62 = "/canvas-video-filter";

        _ck(_v, 53, 0, currVal_62);

        var currVal_63 = "active";

        _ck(_v, 54, 0, currVal_63);

        _ck(_v, 61, 0);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).listOfNzSiderComponent.length > 0;
        var currVal_1 = true;

        _ck(_v, 0, 0, currVal_0, currVal_1);

        var currVal_2 = _co.title;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).nzTheme === "light";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).nzTheme === "dark";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).actualMode === "vertical";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).actualMode === "horizontal";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).actualMode === "inline";

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).nzInlineCollapsed;

        var currVal_11 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown;
        var currVal_12 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown;
        var currVal_13 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).nzTheme === "light";
        var currVal_14 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).nzTheme === "dark";
        var currVal_15 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).actualMode === "vertical";
        var currVal_16 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).actualMode === "horizontal";
        var currVal_17 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).actualMode === "inline";

        var currVal_18 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).nzInlineCollapsed;

        _ck(_v, 7, 1, [currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18]);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isMenuInsideDropDown;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzSelected;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzDisabled;

        var currVal_23 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isMenuInsideDropDown;

        var currVal_24 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzSelected;

        var currVal_25 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzDisabled;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzPaddingLeft || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).inlinePaddingLeft;

        _ck(_v, 14, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26);

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).target;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).href;

        _ck(_v, 19, 0, currVal_27, currVal_28);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).isMenuInsideDropDown;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzSelected;

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzDisabled;

        var currVal_34 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).isMenuInsideDropDown;

        var currVal_35 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzSelected;

        var currVal_36 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzDisabled;

        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzPaddingLeft || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).inlinePaddingLeft;

        _ck(_v, 25, 0, currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37);

        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).target;

        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).href;

        _ck(_v, 30, 0, currVal_38, currVal_39);

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isMenuInsideDropDown;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzSelected;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzDisabled;

        var currVal_45 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isMenuInsideDropDown;

        var currVal_46 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzSelected;

        var currVal_47 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzDisabled;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzPaddingLeft || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).inlinePaddingLeft;

        _ck(_v, 36, 0, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48);

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).target;

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 42).href;

        _ck(_v, 41, 0, currVal_49, currVal_50);

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).isMenuInsideDropDown;

        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).nzSelected;

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).nzDisabled;

        var currVal_56 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).isMenuInsideDropDown;

        var currVal_57 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).nzSelected;

        var currVal_58 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).isMenuInsideDropDown && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).nzDisabled;

        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).nzPaddingLeft || _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 49).inlinePaddingLeft;

        _ck(_v, 47, 0, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59);

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).target;

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 53).href;

        _ck(_v, 52, 0, currVal_60, currVal_61);
      });
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%], [_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%] {\n  background: #108ee9;\n  color: #fff;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  font-size: 31px;\n  line-height: 64px;\n  padding: 0 30px;\n  float: left;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%]   .header-menu[_ngcontent-%COMP%] {\n  line-height: 62px;\n  background: #108ee9;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-header[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  color: greenyellow;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%] {\n  height: 100vh;\n  padding: 94px 30px 103px 30px;\n  box-sizing: border-box;\n  overflow: hidden;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  background-color: #fff;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n}\n[_nghost-%COMP%]   nz-layout[_ngcontent-%COMP%]   nz-footer[_ngcontent-%COMP%]   #github-icon[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVJOztFQUVFLG1CQUFBO0VBQ0EsV0FBQTtBQ0ROO0FESUk7RUFDRSxlQUFBO0VBQ0EsV0FBQTtBQ0ZOO0FESU07RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtBQ0ZSO0FES007RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FDSFI7QURNTTtFQUNFLFdBQUE7QUNKUjtBRE1NO0VBQ0Usa0JBQUE7QUNKUjtBRFFJO0VBQ0UsYUFBQTtFQUVBLDZCQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQ1BOO0FEU007RUFDRSxzQkFBQTtBQ1BSO0FEV0k7RUFDRSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUNUTjtBRFdNO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNUUiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgbnotbGF5b3V0IHtcbiAgICBuei1oZWFkZXIsXG4gICAgbnotZm9vdGVyIHtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoMTYsIDE0MiwgMjMzLCAxKTtcbiAgICAgIGNvbG9yOiAjZmZmO1xuICAgIH1cblxuICAgIG56LWhlYWRlciB7XG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmxvZ28ge1xuICAgICAgICBmb250LXNpemU6IDMxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAuaGVhZGVyLW1lbnUge1xuICAgICAgICBsaW5lLWhlaWdodDogNjJweDtcbiAgICAgICAgYmFja2dyb3VuZDogcmdiYSgxNiwgMTQyLCAyMzMsIDEpO1xuICAgICAgfVxuXG4gICAgICBsaSBhIHtcbiAgICAgICAgY29sb3I6ICNmZmY7XG4gICAgICB9XG4gICAgICBsaSBhOmhvdmVyIHtcbiAgICAgICAgY29sb3I6IGdyZWVueWVsbG93O1xuICAgICAgfVxuICAgIH1cblxuICAgIG56LWNvbnRlbnQge1xuICAgICAgaGVpZ2h0OiAxMDB2aDtcblxuICAgICAgcGFkZGluZzogOTRweCAzMHB4IDEwM3B4IDMwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgZGl2IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBuei1mb290ZXIge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICNnaXRodWItaWNvbiB7XG4gICAgICAgIHdpZHRoOiAyNXB4O1xuICAgICAgICBoZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBuei1sYXlvdXQgbnotaGVhZGVyLFxuOmhvc3QgbnotbGF5b3V0IG56LWZvb3RlciB7XG4gIGJhY2tncm91bmQ6ICMxMDhlZTk7XG4gIGNvbG9yOiAjZmZmO1xufVxuOmhvc3QgbnotbGF5b3V0IG56LWhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG59XG46aG9zdCBuei1sYXlvdXQgbnotaGVhZGVyIC5sb2dvIHtcbiAgZm9udC1zaXplOiAzMXB4O1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgcGFkZGluZzogMCAzMHB4O1xuICBmbG9hdDogbGVmdDtcbn1cbjpob3N0IG56LWxheW91dCBuei1oZWFkZXIgLmhlYWRlci1tZW51IHtcbiAgbGluZS1oZWlnaHQ6IDYycHg7XG4gIGJhY2tncm91bmQ6ICMxMDhlZTk7XG59XG46aG9zdCBuei1sYXlvdXQgbnotaGVhZGVyIGxpIGEge1xuICBjb2xvcjogI2ZmZjtcbn1cbjpob3N0IG56LWxheW91dCBuei1oZWFkZXIgbGkgYTpob3ZlciB7XG4gIGNvbG9yOiBncmVlbnllbGxvdztcbn1cbjpob3N0IG56LWxheW91dCBuei1jb250ZW50IHtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcGFkZGluZzogOTRweCAzMHB4IDEwM3B4IDMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG46aG9zdCBuei1sYXlvdXQgbnotY29udGVudCBkaXYge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuOmhvc3QgbnotbGF5b3V0IG56LWZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgYm90dG9tOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuOmhvc3QgbnotbGF5b3V0IG56LWZvb3RlciAjZ2l0aHViLWljb24ge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Billboard Generator';
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _component_poster_in_canvas_poster_in_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/poster-in-canvas/poster-in-canvas.component.ngfactory */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.ngfactory.js");
    /* harmony import */


    var _component_poster_in_fabric_poster_in_fabric_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./component/poster-in-fabric/poster-in-fabric.component.ngfactory */
    "./src/app/component/poster-in-fabric/poster-in-fabric.component.ngfactory.js");
    /* harmony import */


    var _component_canvas_text_editor_canvas_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./component/canvas-text-editor/canvas-text-editor.component.ngfactory */
    "./src/app/component/canvas-text-editor/canvas-text-editor.component.ngfactory.js");
    /* harmony import */


    var _component_canvas_video_filter_canvas_video_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/canvas-video-filter/canvas-video-filter.component.ngfactory */
    "./src/app/component/canvas-video-filter/canvas-video-filter.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_tooltip_ng_zorro_antd_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../../node_modules/ng-zorro-antd/tooltip/ng-zorro-antd-tooltip.ngfactory */
    "./node_modules/ng-zorro-antd/tooltip/ng-zorro-antd-tooltip.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/animations/browser */
    "./node_modules/@angular/animations/fesm2015/browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./component/poster-in-canvas/poster-in-canvas.component */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _component_poster_in_fabric_poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./component/poster-in-fabric/poster-in-fabric.component */
    "./src/app/component/poster-in-fabric/poster-in-fabric.component.ts");
    /* harmony import */


    var _component_canvas_text_editor_canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./component/canvas-text-editor/canvas-text-editor.component */
    "./src/app/component/canvas-text-editor/canvas-text-editor.component.ts");
    /* harmony import */


    var _component_canvas_video_filter_canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./component/canvas-video-filter/canvas-video-filter.component */
    "./src/app/component/canvas-video-filter/canvas-video-filter.component.ts");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ng-zorro-antd/core/outlet */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-outlet.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ng-zorro-antd/core/no-animation */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-no-animation.js");
    /* harmony import */


    var ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ng-zorro-antd/menu */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-menu.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ng-zorro-antd/layout */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-layout.js");
    /* harmony import */


    var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ng-zorro-antd/tag */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tag.js");
    /* harmony import */


    var ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ng-zorro-antd/core/overlay */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-overlay.js");
    /* harmony import */


    var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ng-zorro-antd/tooltip */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tooltip.js");
    /* harmony import */


    var ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ng-zorro-antd/progress */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-progress.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ng-zorro-antd/upload */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-upload.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _component_poster_in_canvas_poster_in_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["PosterInCanvasComponentNgFactory"], _component_poster_in_fabric_poster_in_fabric_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["PosterInFabricComponentNgFactory"], _component_canvas_text_editor_canvas_text_editor_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["CanvasTextEditorComponentNgFactory"], _component_canvas_video_filter_canvas_video_filter_component_ngfactory__WEBPACK_IMPORTED_MODULE_7__["CanvasVideoFilterComponentNgFactory"], _node_modules_ng_zorro_antd_tooltip_ng_zorro_antd_tooltip_ngfactory__WEBPACK_IMPORTED_MODULE_8__["NzToolTipComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_9__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_x"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_t"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_g"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_q"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_b"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵInjectableAnimationEngine"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["AnimationDriver"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationStyleNormalizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵangular_packages_platform_browser_animations_animations_c"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomRendererFactory2"], _angular_animations_browser__WEBPACK_IMPORTED_MODULE_12__["ɵAnimationEngine"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_n"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_animations__WEBPACK_IMPORTED_MODULE_17__["AnimationBuilder"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ɵBrowserAnimationBuilder"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["ScrollStrategyOptions"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayContainer"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayPositionBuilder"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayKeyboardDispatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["DOCUMENT"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["Directionality"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["ɵangular_material_src_cdk_overlay_overlay_c"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["ɵangular_material_src_cdk_overlay_overlay_d"], [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["Overlay"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_a"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_platform_browser_platform_browser_m"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["DefaultUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_14__["PreloadAllModules"],
        enableTracing: true,
        useHash: true
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_10__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_10__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], function () {
        return [[{
          path: "",
          redirectTo: "poster-in-canvas",
          pathMatch: "full"
        }, {
          path: "poster-in-canvas",
          component: _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_20__["PosterInCanvasComponent"],
          data: _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ0"]
        }, {
          path: "poster-in-fabric",
          component: _component_poster_in_fabric_poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_22__["PosterInFabricComponent"],
          data: _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ1"]
        }, {
          path: "canvas-text-editor",
          component: _component_canvas_text_editor_canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_23__["CanvasTextEditorComponent"],
          data: _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ2"]
        }, {
          path: "canvas-video-filter",
          component: _component_canvas_video_filter_canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_24__["CanvasVideoFilterComponent"],
          data: _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["ɵ3"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_f"], [_angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_14__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_14__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_21__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_15__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["PlatformModule"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_25__["PlatformModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__["NzWaveModule"], ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_26__["NzWaveModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__["NzIconModule"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_27__["NzIconModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__["ɵNzTransitionPatchModule"], ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_28__["ɵNzTransitionPatchModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__["NzButtonModule"], ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_29__["NzButtonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_30__["NzOutletModule"], ng_zorro_antd_core_outlet__WEBPACK_IMPORTED_MODULE_30__["NzOutletModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__["NzInputModule"], ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_31__["NzInputModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["BidiModule"], _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_19__["BidiModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_32__["PortalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["CdkScrollableModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["CdkScrollableModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["ScrollingModule"], _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_33__["ScrollingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_18__["OverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_34__["NzNoAnimationModule"], ng_zorro_antd_core_no_animation__WEBPACK_IMPORTED_MODULE_34__["NzNoAnimationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"], ng_zorro_antd_menu__WEBPACK_IMPORTED_MODULE_35__["NzMenuModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_36__["NzCardModule"], ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_36__["NzCardModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__["LayoutModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_37__["LayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__["NzGridModule"], ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_38__["NzGridModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_39__["NzFormModule"], ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_39__["NzFormModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_40__["NzLayoutModule"], ng_zorro_antd_layout__WEBPACK_IMPORTED_MODULE_40__["NzLayoutModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_41__["NzTagModule"], ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_41__["NzTagModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_42__["NzOverlayModule"], ng_zorro_antd_core_overlay__WEBPACK_IMPORTED_MODULE_42__["NzOverlayModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_43__["NzToolTipModule"], ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_43__["NzToolTipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__["NzProgressModule"], ng_zorro_antd_progress__WEBPACK_IMPORTED_MODULE_44__["NzProgressModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_45__["NzI18nModule"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_45__["NzI18nModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_46__["NzUploadModule"], ng_zorro_antd_upload__WEBPACK_IMPORTED_MODULE_46__["NzUploadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["DEFAULT_CURRENCY_CODE"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_u"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵINJECTOR_SCOPE"], "root", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["ANIMATION_MODULE_TYPE"], "BrowserAnimations", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_45__["NZ_I18N"], _app_module__WEBPACK_IMPORTED_MODULE_1__["ɵ0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule, ɵ0 */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    });
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/locales/zh */
    "./node_modules/@angular/common/locales/zh.js");
    /* harmony import */


    var _angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2__);

    Object(_angular_common__WEBPACK_IMPORTED_MODULE_1__["registerLocaleData"])(_angular_common_locales_zh__WEBPACK_IMPORTED_MODULE_2___default.a);
    var ɵ0 = ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_0__["zh_CN"];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/component/canvas-text-editor/canvas-text-editor.component.ngfactory.js":
  /*!****************************************************************************************!*\
    !*** ./src/app/component/canvas-text-editor/canvas-text-editor.component.ngfactory.js ***!
    \****************************************************************************************/

  /*! exports provided: RenderType_CanvasTextEditorComponent, View_CanvasTextEditorComponent_0, View_CanvasTextEditorComponent_Host_0, CanvasTextEditorComponentNgFactory */

  /***/
  function srcAppComponentCanvasTextEditorCanvasTextEditorComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CanvasTextEditorComponent", function () {
      return RenderType_CanvasTextEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CanvasTextEditorComponent_0", function () {
      return View_CanvasTextEditorComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CanvasTextEditorComponent_Host_0", function () {
      return View_CanvasTextEditorComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasTextEditorComponentNgFactory", function () {
      return CanvasTextEditorComponentNgFactory;
    });
    /* harmony import */


    var _canvas_text_editor_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./canvas-text-editor.component.scss.shim.ngstyle */
    "./src/app/component/canvas-text-editor/canvas-text-editor.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory */
    "./node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory */
    "./node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./canvas-text-editor.component */
    "./src/app/component/canvas-text-editor/canvas-text-editor.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_CanvasTextEditorComponent = [_canvas_text_editor_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CanvasTextEditorComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CanvasTextEditorComponent,
      data: {}
    });

    function View_CanvasTextEditorComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        textEditor: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        textArea: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 3, {
        videoContainer: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 39, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 38, "div", [["class", "inner-content"], ["nz-row", ""]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 36, "div", [["nz-col", ""], ["nzSpan", "24"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 34, "nz-card", [["nzTitle", "\u6587\u672C\u7F16\u8F91\u5668"]], [[2, "ant-card", null], [2, "ant-card-loading", null], [2, "ant-card-bordered", null], [2, "ant-card-hoverable", null], [2, "ant-card-small", null], [2, "ant-card-contain-grid", null], [2, "ant-card-type-inner", null], [2, "ant-card-contain-tabs", null]], null, null, _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzCardComponent_0"], _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 180224, null, 2, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzTitle: [0, "nzTitle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        listOfNzCardTabComponent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        listOfNzCardGridDirective: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 30, "div", [["nz-row", ""]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 3, "div", [["nz-col", ""], ["nzSpan", "20"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, [[1, 0], ["textEditor", 1]], null, 0, "canvas", [["height", "900px"], ["width", "2000px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, [[2, 0], ["textArea", 1]], null, 0, "textarea", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, null, 24, "div", [["class", "toolbar"], ["nz-col", ""], ["nzSpan", "4"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 6, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.startRecording() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        disabled: [0, "disabled"],
        nzType: [1, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        nzIconDirectiveElement: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u5F00\u59CB\u5F55\u5236"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, null, 7, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 6, "button", [["nz-button", ""], ["nzDanger", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.stopRecording() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzDanger: [0, "nzDanger"],
        disabled: [1, "disabled"],
        nzType: [2, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        nzIconDirectiveElement: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u505C\u6B62\u5F55\u5236"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](36, 0, null, null, 6, "div", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, null, 5, "a", [["nz-button", ""], ["nzType", "primary"], ["target", "_blank"]], [[8, "href", 4], [2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        nzIconDirectiveElement: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_14__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u4E0B\u8F7D\u89C6\u9891 "]))], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 5, 0);

        var currVal_10 = "24";

        _ck(_v, 7, 0, currVal_10);

        var currVal_19 = "\u6587\u672C\u7F16\u8F91\u5668";

        _ck(_v, 9, 0, currVal_19);

        _ck(_v, 13, 0);

        var currVal_30 = "20";

        _ck(_v, 15, 0, currVal_30);

        var currVal_32 = "4";

        _ck(_v, 19, 0, currVal_32);

        _ck(_v, 23, 0);

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 24, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 26).transform(_co.recordVideo$));

        var currVal_50 = "primary";

        _ck(_v, 24, 0, currVal_49, currVal_50);

        _ck(_v, 31, 0);

        var currVal_67 = "";
        var currVal_68 = !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 32, 1, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).transform(_co.recordVideo$));
        var currVal_69 = "primary";

        _ck(_v, 32, 0, currVal_67, currVal_68, currVal_69);

        var currVal_87 = "primary";

        _ck(_v, 39, 0, currVal_87);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzAlign === "top";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzAlign === "middle";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzAlign === "bottom";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzJustify === "start";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzJustify === "end";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzJustify === "center";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzJustify === "space-around";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzJustify === "space-between";

        _ck(_v, 4, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).hostFlexStyle;

        _ck(_v, 6, 0, currVal_9);

        var currVal_11 = true;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).nzLoading;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).nzBordered;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).nzHoverable;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).nzSize === "small";

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).listOfNzCardGridDirective && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).listOfNzCardGridDirective.length;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).nzType === "inner";
        var currVal_18 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 9).listOfNzCardTabComponent;

        _ck(_v, 8, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_20 = true;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzAlign === "top";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzAlign === "middle";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzAlign === "bottom";
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzJustify === "start";
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzJustify === "end";
        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzJustify === "center";
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzJustify === "space-around";
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).nzJustify === "space-between";

        _ck(_v, 12, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).hostFlexStyle;

        _ck(_v, 14, 0, currVal_29);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).hostFlexStyle;

        _ck(_v, 18, 0, currVal_31);

        var currVal_33 = true;
        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "primary";
        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "dashed";
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "link";
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "danger";
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzShape === "circle";
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzShape === "round";
        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzSize === "large";
        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzSize === "small";

        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzDanger;

        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzLoading;

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzGhost;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzBlock;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzSearch;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex;
        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;

        _ck(_v, 21, 1, [currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48]);

        var currVal_51 = true;
        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "primary";
        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "dashed";
        var currVal_54 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "link";
        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "danger";
        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzShape === "circle";
        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzShape === "round";
        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzSize === "large";
        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzSize === "small";

        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzDanger;

        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzLoading;

        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzGhost;

        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzBlock;

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzSearch;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).tabIndex;
        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled || null;

        _ck(_v, 29, 1, [currVal_51, currVal_52, currVal_53, currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66]);

        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 37, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 41).transform(_co.videoUrl$));

        var currVal_71 = true;
        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzType === "primary";
        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzType === "dashed";
        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzType === "link";
        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzType === "danger";
        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzShape === "circle";
        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzShape === "round";
        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzSize === "large";
        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzSize === "small";

        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzDanger;

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzLoading;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzGhost;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzBlock;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).nzSearch;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).tabIndex;
        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 39).disabled || null;

        _ck(_v, 37, 1, [currVal_70, currVal_71, currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86]);
      });
    }

    function View_CanvasTextEditorComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-canvas-text-editor", [], null, null, null, View_CanvasTextEditorComponent_0, RenderType_CanvasTextEditorComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4440064, null, 0, _canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_15__["CanvasTextEditorComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_16__["DomSanitizer"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CanvasTextEditorComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-canvas-text-editor", _canvas_text_editor_component__WEBPACK_IMPORTED_MODULE_15__["CanvasTextEditorComponent"], View_CanvasTextEditorComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/component/canvas-text-editor/canvas-text-editor.component.scss.shim.ngstyle.js":
  /*!************************************************************************************************!*\
    !*** ./src/app/component/canvas-text-editor/canvas-text-editor.component.scss.shim.ngstyle.js ***!
    \************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentCanvasTextEditorCanvasTextEditorComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  background-color: #fff;\n  border: 1px solid gray;\n}\n\ntextarea[_ngcontent-%COMP%] {\n  position: absolute;\n  opacity: 0;\n  z-index: -1;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  padding-left: 10px;\n}\n\n.toolbar[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2NvbXBvbmVudC9jYW52YXMtdGV4dC1lZGl0b3IvY2FudmFzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnQvY2FudmFzLXRleHQtZWRpdG9yL2NhbnZhcy10ZXh0LWVkaXRvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUVBLHNCQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0FDQUY7O0FER0E7RUFDRSxrQkFBQTtBQ0FGOztBREVFO0VBQ0UsbUJBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYW52YXMtdGV4dC1lZGl0b3IvY2FudmFzLXRleHQtZWRpdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiY2FudmFzIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG5cbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTtcbn1cblxudGV4dGFyZWEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIG9wYWNpdHk6IDA7XG4gIHotaW5kZXg6IC0xO1xufVxuXG4udG9vbGJhciB7XG4gIHBhZGRpbmctbGVmdDogMTBweDtcblxuICBkaXYge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbn1cbiIsImNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xuICBib3JkZXI6IDFweCBzb2xpZCBncmF5O1xufVxuXG50ZXh0YXJlYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgb3BhY2l0eTogMDtcbiAgei1pbmRleDogLTE7XG59XG5cbi50b29sYmFyIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuLnRvb2xiYXIgZGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/component/canvas-text-editor/canvas-text-editor.component.ts":
  /*!******************************************************************************!*\
    !*** ./src/app/component/canvas-text-editor/canvas-text-editor.component.ts ***!
    \******************************************************************************/

  /*! exports provided: CanvasTextEditorComponent */

  /***/
  function srcAppComponentCanvasTextEditorCanvasTextEditorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasTextEditorComponent", function () {
      return CanvasTextEditorComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var TextType;

    (function (TextType) {
      TextType[TextType["CHINESE"] = 0] = "CHINESE";
      TextType[TextType["ENGLISH"] = 1] = "ENGLISH";
    })(TextType || (TextType = {}));

    var OPTIONS = {
      x: 10,
      y: 10,
      width: 2000,
      height: 900,
      fontSize: 100,
      lineHeight: 120,
      selectionBgColor: 'rgba(0,0,0,0.5)'
    };

    var CanvasTextEditorComponent =
    /*#__PURE__*/
    function () {
      function CanvasTextEditorComponent(sanitizer) {
        var _this = this;

        _classCallCheck(this, CanvasTextEditorComponent);

        this.sanitizer = sanitizer;
        this.scaleRatio = 1;
        this.textInputType = TextType.ENGLISH;
        this.textList = ['这是一段初始化文案', '就这样吧'];
        this.cursorPos = [0, 0];
        /**
         * 文本是否全选
         */

        this.isSelectAll = false;
        this.cursorTextList = [];
        this.videoUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.recordVideo$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        /**
         * Event Handlers
         */

        this.chineseTextInputHandler = function () {
          _this.textInputType = TextType.CHINESE;
        };

        this.normalTextInputHandler = function (e) {
          if (_this.textInputType === TextType.CHINESE) {
            return;
          } // 处理英文输入


          _this.updateTextList(e.data);

          _this.drawTextEditorLogic(true);
        };

        this.commonTextInputEndHandler = function (e) {
          if (_this.textInputType === TextType.CHINESE) {
            _this.updateTextList(e.data);

            _this.drawTextEditorLogic(true);

            _this.textInputType = TextType.ENGLISH;
          }
        };

        this.relocateTextList = function () {
          _this.context.save();

          _this.context.font = "".concat(OPTIONS.fontSize, "px Arial");
          _this.context.lineWidth = 1;
          _this.cursorTextList = [];
          _this.context.textBaseline = 'bottom';

          for (var i = 0; i < _this.textList.length; i++) {
            var str = _this.textList[i];

            var arr = _this.textList[i].split('');

            var curLocalItem = [];

            for (var j = 0; j < arr.length; j++) {
              var x = OPTIONS.x + _this.context.measureText(str.slice(0, j)).width;

              var ystart = OPTIONS.y + OPTIONS.lineHeight * i;
              var yend = ystart + OPTIONS.lineHeight;
              curLocalItem.push({
                x: x,
                y: {
                  start: ystart,
                  end: yend
                }
              });
            }

            _this.cursorTextList.push(curLocalItem);
          }

          _this.context.restore();
        };
      }

      _createClass(CanvasTextEditorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.canvas = this.textEditor.nativeElement;
          this.context = this.canvas.getContext('2d');
          this.textElement = this.textArea.nativeElement;
          this.scaleRatio = this.canvas.clientWidth / this.canvas.width;
          this.initTextEditorLogic();
          this.drawTextEditorLogic(true);
        }
      }, {
        key: "initTextEditorLogic",
        value: function initTextEditorLogic() {
          this.canvas.addEventListener('click', this.focusEditorHandler.bind(this));
          document.addEventListener('click', this.blurEditorHandler.bind(this));
          this.textElement.addEventListener('compositionstart', this.chineseTextInputHandler, false);
          this.textElement.addEventListener('input', this.normalTextInputHandler, false);
          this.textElement.addEventListener('compositionend', this.commonTextInputEndHandler, false);
          this.textElement.addEventListener('keydown', this.onKeyDownHandler.bind(this));
          this.textElement.addEventListener('keyup', this.onKeyUpHandler.bind(this));
        }
      }, {
        key: "focusEditorHandler",
        value: function focusEditorHandler(e) {
          this.canvas.style.borderColor = '#f00';
          var clientX = e.offsetX / this.scaleRatio;
          var clientY = e.offsetY / this.scaleRatio;

          var _this$calculateCursor = this.calculateCursorPos(clientX, clientY),
              colIndex = _this$calculateCursor.colIndex,
              rowIndex = _this$calculateCursor.rowIndex;

          this.textElement.focus();
          this.cursorPos = [rowIndex, colIndex];
          this.isTextSelected = true;
          this.drawTextEditorLogic(true);
        }
      }, {
        key: "blurEditorHandler",
        value: function blurEditorHandler(e) {
          if (e.target !== this.canvas) {
            this.canvas.style.borderColor = 'gray';
            this.isTextSelected = false;
          }

          this.isSelectAll = false;
          this.drawTextEditorLogic(true);
        }
      }, {
        key: "onKeyUpHandler",
        value: function onKeyUpHandler() {
          this.isCommandKey = false;
          this.drawTextEditorLogic(true);
        }
      }, {
        key: "onKeyDownHandler",
        value: function onKeyDownHandler(e) {
          switch (e.key) {
            case 'Meta':
            case 'Control':
              this.isCommandKey = true;
              break;

            case 'a':
              this.onAKeyHandler();
              break;

            case 'Backspace':
              this.onBackspaceKeyHandler();
              break;

            case 'ArrowRight':
              this.onHorizontalArrowKeyHandler('right');
              break;

            case 'ArrowLeft':
              this.onHorizontalArrowKeyHandler('left');
              break;

            case 'ArrowUp':
              this.onVerticalArrowKeyHandler('up');
              break;

            case 'ArrowDown':
              this.onVerticalArrowKeyHandler('down');
              break;

            case 'Enter':
              this.onEnterKeyHandler();
              break;
          }
        }
      }, {
        key: "onAKeyHandler",
        value: function onAKeyHandler() {
          if (this.isCommandKey) {
            this.isSelectAll = true;
          }
        }
      }, {
        key: "onEnterKeyHandler",
        value: function onEnterKeyHandler() {
          var arr = this.textList.concat([]);
          var index = this.cursorPos[0];
          arr.splice(index + 1, 0, '');
          this.textList = arr;
          this.cursorPos[0]++;
          this.cursorPos[1] = 0;
        }
      }, {
        key: "onHorizontalArrowKeyHandler",
        value: function onHorizontalArrowKeyHandler(direction) {
          switch (direction) {
            case 'right':
              this.cursorPos[1] += 1;

              if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
                if (this.cursorPos[0] < this.textList.length - 1) {
                  this.cursorPos[0]++;
                  this.cursorPos[1] = 0;
                } else {
                  this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
                }
              }

              break;

            case 'left':
            default:
              this.cursorPos[1] -= 1;

              if (this.cursorPos[1] < 0) {
                if (this.cursorPos[0] > 0) {
                  this.cursorPos[0]--;
                  this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
                } else {
                  this.cursorPos[1] = 0;
                }
              }

              break;
          }
        }
      }, {
        key: "onVerticalArrowKeyHandler",
        value: function onVerticalArrowKeyHandler(direction) {
          switch (direction) {
            case 'up':
              // 边界判断
              if (this.cursorPos[0] > 0) {
                this.cursorPos[0]--;

                if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
                  this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
                }
              }

              break;

            case 'down':
              if (this.cursorPos[0] < this.textList.length - 1) {
                this.cursorPos[0]++;

                if (this.cursorPos[1] > this.textList[this.cursorPos[0]].length) {
                  this.cursorPos[1] = this.textList[this.cursorPos[0]].length;
                }
              }

              break;
          }
        }
      }, {
        key: "onBackspaceKeyHandler",
        value: function onBackspaceKeyHandler() {
          if (this.isSelectAll) {
            this.cursorPos = [0, 0];
            this.textList = [];
            this.isSelectAll = false;
          } else {
            for (var i = 0; i < this.textList.length; i++) {
              if (i === this.cursorPos[0]) {
                var str = this.textList[i].split('');
                str.splice(this.cursorPos[1] - 1, 1);
                this.textList[i] = str.join('');
                this.cursorPos[1] -= 1; // 换行

                if (this.cursorPos[1] < 0) {
                  if (i !== 0) {
                    var _this$textList$splice = this.textList.splice(this.cursorPos[0], 1),
                        _this$textList$splice2 = _slicedToArray(_this$textList$splice, 1),
                        delString = _this$textList$splice2[0];

                    this.cursorPos = [i - 1, this.textList[i - 1].length];
                    this.textList[i - 1] += delString;
                  } else {
                    this.cursorPos[1] = 0;
                  }
                }
              }
            }
          }
        }
        /**
         * 计算光标位置
         * @param x 水平像素坐标
         * @param y 垂直像素坐标
         */

      }, {
        key: "calculateCursorPos",
        value: function calculateCursorPos(x, y) {
          var _a;

          var colIndex = 0;
          var rowIndex = 0; // 计算垂直位于哪一行

          for (var i = 0; i < this.cursorTextList.length; i++) {
            var _this$cursorTextList$ = this.cursorTextList[i][0].y,
                start = _this$cursorTextList$.start,
                end = _this$cursorTextList$.end;

            if (start < y && y < end) {
              rowIndex = i;
              break;
            }
          } // 计算水平位于哪一列


          for (var j = 0; j < ((_a = this.cursorTextList[rowIndex]) === null || _a === void 0 ? void 0 : _a.length); j++) {
            var abs = Math.abs(this.cursorTextList[rowIndex][j].x - x);

            if (abs <= OPTIONS.fontSize / 2) {
              colIndex = j;
              break;
            }
          }

          return {
            colIndex: colIndex,
            rowIndex: rowIndex
          };
        }
      }, {
        key: "updateTextList",
        value: function updateTextList(data) {
          var _a, _b;

          var _this$cursorPos = _slicedToArray(this.cursorPos, 2),
              startIndex = _this$cursorPos[0],
              endIndex = _this$cursorPos[1];

          var arr = ((_a = this.textList[startIndex]) === null || _a === void 0 ? void 0 : _a.split('')) || [];
          arr.splice(endIndex, 0, data);
          this.textList[startIndex] = arr.join('');
          var strLength = ((_b = data) === null || _b === void 0 ? void 0 : _b.length) || 0;
          this.cursorPos[1] = endIndex + strLength;
        }
      }, {
        key: "drawTextEditorLogic",
        value: function drawTextEditorLogic() {
          var raf = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
          this.context.fillStyle = '#fff';
          this.context.fillRect(0, 0, OPTIONS.width, OPTIONS.height);
          this.context.font = "".concat(OPTIONS.fontSize, "px Arial");
          this.context.fillStyle = this.isTextSelected ? '#000' : '#555';
          this.context.textBaseline = 'middle';
          this.relocateTextList();

          for (var i = 0; i < this.textList.length; i++) {
            var str = '';

            for (var j = 0; j < this.textList[i].length; j++) {
              if (this.isTextSelected && !this.isSelectAll && this.cursorPos[0] === i && this.cursorPos[1] === j) {
                str += '|';
              }

              str += this.textList[i][j];
            } // 选中区域的设置，设置选中区域的背景


            if (this.isSelectAll) {
              var selectionWidth = this.context.measureText(this.textList[i]).width;
              this.context.fillStyle = OPTIONS.selectionBgColor;
              this.context.fillRect(OPTIONS.x, OPTIONS.y + OPTIONS.lineHeight * i, selectionWidth, OPTIONS.lineHeight);
            } // 开始绘制文字


            this.context.fillText(str, OPTIONS.x, OPTIONS.y + OPTIONS.lineHeight * (i + 0.5));
          }
        }
      }, {
        key: "startRecording",
        value: function startRecording() {
          var _this2 = this;

          var stream = this.canvas.captureStream();
          this.recorder = new MediaRecorder(stream, {
            mimeType: 'video/webm'
          });
          var data = [];

          this.recorder.ondataavailable = function (event) {
            if (event.data && event.data.size) {
              data.push(event.data);
            }
          };

          this.recorder.onstop = function () {
            var url = URL.createObjectURL(new Blob(data, {
              type: 'video/webm'
            }));

            _this2.videoUrl$.next(_this2.sanitizer.bypassSecurityTrustUrl(url));
          };

          this.recorder.start();
          this.recordVideo$.next(true);
        }
      }, {
        key: "stopRecording",
        value: function stopRecording() {
          this.recorder.stop();
          this.recordVideo$.next(false);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.recorder = null;
          this.canvas.removeEventListener('click', this.focusEditorHandler.bind(this));
          document.removeEventListener('click', this.blurEditorHandler.bind(this));
          this.textElement.removeEventListener('compositionstart', this.chineseTextInputHandler, false);
          this.textElement.removeEventListener('input', this.normalTextInputHandler, false);
          this.textElement.removeEventListener('compositionend', this.commonTextInputEndHandler, false);
          this.textElement.removeEventListener('keydown', this.onKeyDownHandler.bind(this));
          this.textElement.removeEventListener('keyup', this.onKeyUpHandler.bind(this));
        }
      }]);

      return CanvasTextEditorComponent;
    }();
    /***/

  },

  /***/
  "./src/app/component/canvas-video-filter/canvas-video-filter.component.ngfactory.js":
  /*!******************************************************************************************!*\
    !*** ./src/app/component/canvas-video-filter/canvas-video-filter.component.ngfactory.js ***!
    \******************************************************************************************/

  /*! exports provided: RenderType_CanvasVideoFilterComponent, View_CanvasVideoFilterComponent_0, View_CanvasVideoFilterComponent_Host_0, CanvasVideoFilterComponentNgFactory */

  /***/
  function srcAppComponentCanvasVideoFilterCanvasVideoFilterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_CanvasVideoFilterComponent", function () {
      return RenderType_CanvasVideoFilterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CanvasVideoFilterComponent_0", function () {
      return View_CanvasVideoFilterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_CanvasVideoFilterComponent_Host_0", function () {
      return View_CanvasVideoFilterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasVideoFilterComponentNgFactory", function () {
      return CanvasVideoFilterComponentNgFactory;
    });
    /* harmony import */


    var _canvas_video_filter_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./canvas-video-filter.component.scss.shim.ngstyle */
    "./src/app/component/canvas-video-filter/canvas-video-filter.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory */
    "./node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory */
    "./node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var _canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./canvas-video-filter.component */
    "./src/app/component/canvas-video-filter/canvas-video-filter.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_CanvasVideoFilterComponent = [_canvas_video_filter_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_CanvasVideoFilterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_CanvasVideoFilterComponent,
      data: {}
    });

    function View_CanvasVideoFilterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        canvasEle: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        videoEle: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 32, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 31, "div", [["class", "inner-content"], ["nz-row", ""]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 29, "div", [["nz-col", ""], ["nzSpan", "24"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 27, "nz-card", [["nzTitle", "\u9ED1\u767D\u7535\u5F71"]], [[2, "ant-card", null], [2, "ant-card-loading", null], [2, "ant-card-bordered", null], [2, "ant-card-hoverable", null], [2, "ant-card-small", null], [2, "ant-card-contain-grid", null], [2, "ant-card-type-inner", null], [2, "ant-card-contain-tabs", null]], null, null, _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzCardComponent_0"], _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 2, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzTitle: [0, "nzTitle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        listOfNzCardTabComponent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        listOfNzCardGridDirective: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 23, "div", [["nz-row", ""]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, null, null, 2, "div", [["nz-col", ""], ["nzSpan", "12"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, [[1, 0], ["canvasEle", 1]], null, 0, "canvas", [["height", "280px"], ["width", "500px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 2, "div", [["nz-col", ""], ["nzSpan", "12"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, [[2, 0], ["videoEle", 1]], null, 0, "video", [["controls", "controls"], ["height", "280px"], ["src", "/assets/marvel.video.mp4"], ["width", "500px"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](19, 0, null, null, 7, "div", [["nz-col", ""], ["nzSpan", "3"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](21, 0, null, null, 5, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.toggleVideoStatusChange() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](26, 0, ["", ""])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](27, 0, null, null, 7, "div", [["nz-col", ""], ["nzSpan", "3"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](28, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](29, 0, null, null, 5, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.toggleGrayStatusChange() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_10__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_11__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_13__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzDanger: [0, "nzDanger"],
        nzType: [1, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](34, 0, ["", ""]))], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 4, 0);

        var currVal_10 = "24";

        _ck(_v, 6, 0, currVal_10);

        var currVal_19 = "\u9ED1\u767D\u7535\u5F71";

        _ck(_v, 8, 0, currVal_19);

        _ck(_v, 12, 0);

        var currVal_30 = "12";

        _ck(_v, 14, 0, currVal_30);

        var currVal_32 = "12";

        _ck(_v, 17, 0, currVal_32);

        var currVal_34 = "3";

        _ck(_v, 20, 0, currVal_34);

        _ck(_v, 23, 0);

        var currVal_51 = "primary";

        _ck(_v, 24, 0, currVal_51);

        var currVal_54 = "3";

        _ck(_v, 28, 0, currVal_54);

        _ck(_v, 31, 0);

        var currVal_71 = _co.isGray;
        var currVal_72 = "primary";

        _ck(_v, 32, 0, currVal_71, currVal_72);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "top";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "middle";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "bottom";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "start";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "end";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "center";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "space-around";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "space-between";

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).hostFlexStyle;

        _ck(_v, 5, 0, currVal_9);

        var currVal_11 = true;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzLoading;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzBordered;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzHoverable;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzSize === "small";

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardGridDirective && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardGridDirective.length;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzType === "inner";
        var currVal_18 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardTabComponent;

        _ck(_v, 7, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_20 = true;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzAlign === "top";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzAlign === "middle";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzAlign === "bottom";
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "start";
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "end";
        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "center";
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "space-around";
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "space-between";

        _ck(_v, 11, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28);

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 14).hostFlexStyle;

        _ck(_v, 13, 0, currVal_29);

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).hostFlexStyle;

        _ck(_v, 16, 0, currVal_31);

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 20).hostFlexStyle;

        _ck(_v, 19, 0, currVal_33);

        var currVal_35 = true;
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "primary";
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "dashed";
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "link";
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzType === "danger";
        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzShape === "circle";
        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzShape === "round";
        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzSize === "large";
        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzSize === "small";

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzDanger;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzLoading;

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzGhost;

        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzBlock;

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).nzSearch;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).tabIndex;
        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 24).disabled || null;

        _ck(_v, 21, 1, [currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49, currVal_50]);

        var currVal_52 = !_co.video || _co.video.paused ? "\u64AD\u653E" : "\u6682\u505C";

        _ck(_v, 26, 0, currVal_52);

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 28).hostFlexStyle;

        _ck(_v, 27, 0, currVal_53);

        var currVal_55 = true;
        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "primary";
        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "dashed";
        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "link";
        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzType === "danger";
        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzShape === "circle";
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzShape === "round";
        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzSize === "large";
        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzSize === "small";

        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzDanger;

        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzLoading;

        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzGhost;

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzBlock;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).nzSearch;

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).tabIndex;
        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).disabled || null;

        _ck(_v, 29, 1, [currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70]);

        var currVal_73 = _co.isGray ? "\u6062\u590D\u6B63\u5E38" : "\u7070\u5EA6\u5904\u7406";

        _ck(_v, 34, 0, currVal_73);
      });
    }

    function View_CanvasVideoFilterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-canvas-video-filter", [], null, null, null, View_CanvasVideoFilterComponent_0, RenderType_CanvasVideoFilterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_14__["CanvasVideoFilterComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var CanvasVideoFilterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-canvas-video-filter", _canvas_video_filter_component__WEBPACK_IMPORTED_MODULE_14__["CanvasVideoFilterComponent"], View_CanvasVideoFilterComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/component/canvas-video-filter/canvas-video-filter.component.scss.shim.ngstyle.js":
  /*!**************************************************************************************************!*\
    !*** ./src/app/component/canvas-video-filter/canvas-video-filter.component.scss.shim.ngstyle.js ***!
    \**************************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentCanvasVideoFilterCanvasVideoFilterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYW52YXMtdmlkZW8tZmlsdGVyL2NhbnZhcy12aWRlby1maWx0ZXIuY29tcG9uZW50LnNjc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/component/canvas-video-filter/canvas-video-filter.component.ts":
  /*!********************************************************************************!*\
    !*** ./src/app/component/canvas-video-filter/canvas-video-filter.component.ts ***!
    \********************************************************************************/

  /*! exports provided: CanvasVideoFilterComponent */

  /***/
  function srcAppComponentCanvasVideoFilterCanvasVideoFilterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasVideoFilterComponent", function () {
      return CanvasVideoFilterComponent;
    });

    var CanvasVideoFilterComponent =
    /*#__PURE__*/
    function () {
      function CanvasVideoFilterComponent() {
        var _this3 = this;

        _classCallCheck(this, CanvasVideoFilterComponent);

        this.isGray = false;

        this.onVideoCanPlayHandler = function (e) {
          var _this3$canvas = _this3.canvas,
              width = _this3$canvas.width,
              height = _this3$canvas.height;

          _this3.ctx.drawImage(_this3.video, 0, 0, width, height);
        };
      }

      _createClass(CanvasVideoFilterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.canvas = this.canvasEle.nativeElement;
          this.ctx = this.canvas.getContext('2d');
          this.video = this.videoEle.nativeElement; // 视频已准备好时，先在canvas上画一帧，并给两个按钮绑定事件

          this.video.addEventListener('canplay', this.onVideoCanPlayHandler);
        }
      }, {
        key: "toggleVideoStatusChange",
        value: function toggleVideoStatusChange() {
          if (this.video.paused) {
            // 当前视频暂停
            this.video.play(); // 实现视频灰度效果

            this.raf = window.requestAnimationFrame(this.draw.bind(this));
          } else {
            this.video.pause(); // 暂停时 也停止视频灰度效果

            window.cancelAnimationFrame(this.raf);
          }
        }
      }, {
        key: "toggleGrayStatusChange",
        value: function toggleGrayStatusChange() {
          this.isGray = !this.isGray;
        }
      }, {
        key: "draw",
        value: function draw() {
          var _this$canvas = this.canvas,
              width = _this$canvas.width,
              height = _this$canvas.height;
          this.ctx.drawImage(this.video, 0, 0, width, height);
          var imgData = this.ctx.getImageData(0, 0, width, height);
          var data = imgData.data;

          if (this.isGray) {
            // 求每个像素的红色值、绿色值 和 蓝色值，相加求出平均值，再把平均值赋值给红色、绿色和蓝色
            for (var i = 0; i < data.length; i += 4) {
              var avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
              data[i] = avg; // red

              data[i + 1] = avg; // green

              data[i + 2] = avg; // blue
            } // 把改变后的像素再添加到 canvas中


            this.ctx.putImageData(imgData, 0, 0);
          }

          this.raf = window.requestAnimationFrame(this.draw.bind(this));
        }
      }]);

      return CanvasVideoFilterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/component/fabric-canvas/fabric-canvas.component.ngfactory.js":
  /*!******************************************************************************!*\
    !*** ./src/app/component/fabric-canvas/fabric-canvas.component.ngfactory.js ***!
    \******************************************************************************/

  /*! exports provided: RenderType_FabricCanvasComponent, View_FabricCanvasComponent_0, View_FabricCanvasComponent_Host_0, FabricCanvasComponentNgFactory */

  /***/
  function srcAppComponentFabricCanvasFabricCanvasComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_FabricCanvasComponent", function () {
      return RenderType_FabricCanvasComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FabricCanvasComponent_0", function () {
      return View_FabricCanvasComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_FabricCanvasComponent_Host_0", function () {
      return View_FabricCanvasComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabricCanvasComponentNgFactory", function () {
      return FabricCanvasComponentNgFactory;
    });
    /* harmony import */


    var _fabric_canvas_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./fabric-canvas.component.scss.shim.ngstyle */
    "./src/app/component/fabric-canvas/fabric-canvas.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _fabric_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./fabric-canvas.component */
    "./src/app/component/fabric-canvas/fabric-canvas.component.ts");
    /* harmony import */


    var _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_FabricCanvasComponent = [_fabric_canvas_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_FabricCanvasComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_FabricCanvasComponent,
      data: {}
    });

    function View_FabricCanvasComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        canvasEle: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[1, 0], ["fabricCanvas", 1]], null, 0, "canvas", [], [[8, "width", 0], [8, "height", 0]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.CANVAS_WIDTH;
        var currVal_1 = _co.CANVAS_HEIGHT;

        _ck(_v, 1, 0, currVal_0, currVal_1);
      });
    }

    function View_FabricCanvasComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-fabric-canvas", [], null, null, null, View_FabricCanvasComponent_0, RenderType_FabricCanvasComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _fabric_canvas_component__WEBPACK_IMPORTED_MODULE_2__["FabricCanvasComponent"], [_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var FabricCanvasComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-fabric-canvas", _fabric_canvas_component__WEBPACK_IMPORTED_MODULE_2__["FabricCanvasComponent"], View_FabricCanvasComponent_Host_0, {
      logo: "logo"
    }, {}, []);
    /***/

  },

  /***/
  "./src/app/component/fabric-canvas/fabric-canvas.component.scss.shim.ngstyle.js":
  /*!**************************************************************************************!*\
    !*** ./src/app/component/fabric-canvas/fabric-canvas.component.scss.shim.ngstyle.js ***!
    \**************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentFabricCanvasFabricCanvasComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2NvbXBvbmVudC9mYWJyaWMtY2FudmFzL2ZhYnJpYy1jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9mYWJyaWMtY2FudmFzL2ZhYnJpYy1jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2ZhYnJpYy1jYW52YXMvZmFicmljLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbiIsIjpob3N0IGNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/component/fabric-canvas/fabric-canvas.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/component/fabric-canvas/fabric-canvas.component.ts ***!
    \********************************************************************/

  /*! exports provided: FabricCanvasComponent */

  /***/
  function srcAppComponentFabricCanvasFabricCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FabricCanvasComponent", function () {
      return FabricCanvasComponent;
    });
    /* harmony import */


    var fabric__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! fabric */
    "./node_modules/fabric/dist/fabric.js");
    /* harmony import */


    var fabric__WEBPACK_IMPORTED_MODULE_0___default =
    /*#__PURE__*/
    __webpack_require__.n(fabric__WEBPACK_IMPORTED_MODULE_0__);

    var FabricCanvasComponent =
    /*#__PURE__*/
    function () {
      function FabricCanvasComponent(cs) {
        _classCallCheck(this, FabricCanvasComponent);

        this.cs = cs;
        this.CANVAS_WIDTH = 750;
        this.CANVAS_HEIGHT = 1240;
      }

      _createClass(FabricCanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.canvas = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Canvas(this.canvasEle.nativeElement, {
            selection: true,
            backgroundColor: '#FF4C00',
            width: this.CANVAS_WIDTH,
            height: this.CANVAS_HEIGHT
          });
          this.canvas.setDimensions({
            width: '100%',
            height: 'auto'
          }, {
            cssOnly: true
          });
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('分享会主题', {
            fontSize: 70,
            left: 50,
            top: 50,
            fill: '#fff'
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('XXX前端小组', {
            left: 50,
            top: 150,
            fill: '#fff'
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('Vol.X / 第X期', {
            left: this.CANVAS_WIDTH - 120,
            top: 20,
            fill: '#fff',
            fontSize: 15
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('- 分享环节1', {
            left: 50,
            top: 350,
            fill: '#fff',
            fontSize: 30
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('- 分享环节2', {
            left: 50,
            top: 400,
            fill: '#fff',
            fontSize: 30
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('- 分享环节3', {
            left: 50,
            top: 450,
            fill: '#fff',
            fontSize: 30
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('- 分享环节4', {
            left: 50,
            top: 500,
            fill: '#fff',
            fontSize: 30
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Textbox('这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述', {
            left: 50,
            top: 580,
            fill: '#fff',
            fontSize: 20,
            width: this.CANVAS_WIDTH - 100,
            splitByGrapheme: true
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('2020年1月1日18:00', {
            left: 50,
            top: this.CANVAS_HEIGHT - 90,
            fill: '#fff',
            fontSize: 20
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('北京·望京SOHO', {
            left: 50,
            top: this.CANVAS_HEIGHT - 50,
            fill: '#fff',
            fontSize: 20
          }));
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Circle({
            radius: 30,
            fill: '#288',
            top: 250,
            left: 50
          }));
        }
      }, {
        key: "deleteSelections",

        /**
         * 删除选中元素
         */
        value: function deleteSelections() {
          this.canvas.remove(this.selection);
        }
        /**
         * 添加元素
         * Todo - 不同类型元素待支持
         */

      }, {
        key: "addObject",
        value: function addObject() {
          var ele = new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].IText('测试文案', {
            left: Math.random() * (this.CANVAS_WIDTH - 30),
            top: Math.random() * (this.CANVAS_HEIGHT - 30),
            fill: '#fff'
          });
          this.canvas.add(ele);
        }
      }, {
        key: "updateCanvasLogo",
        value: function updateCanvasLogo(val) {
          var imgEl = fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].util.createImage();
          imgEl.src = val;
          this.canvas.add(new fabric__WEBPACK_IMPORTED_MODULE_0__["fabric"].Image(imgEl, {
            width: 1000,
            height: 1000,
            left: 50,
            top: 800,
            scaleX: 0.2,
            scaleY: 0.2
          }));
        }
      }, {
        key: "logo",
        set: function set(val) {
          if (val) {
            this._logo = val;
            this.updateCanvasLogo(val);
          }
        }
      }, {
        key: "selection",
        get: function get() {
          return this.canvas.getActiveObject();
        }
      }]);

      return FabricCanvasComponent;
    }();
    /***/

  },

  /***/
  "./src/app/component/poster-in-canvas/poster-in-canvas.component.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/component/poster-in-canvas/poster-in-canvas.component.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: RenderType_PosterInCanvasComponent, View_PosterInCanvasComponent_0, View_PosterInCanvasComponent_Host_0, PosterInCanvasComponentNgFactory */

  /***/
  function srcAppComponentPosterInCanvasPosterInCanvasComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PosterInCanvasComponent", function () {
      return RenderType_PosterInCanvasComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PosterInCanvasComponent_0", function () {
      return View_PosterInCanvasComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PosterInCanvasComponent_Host_0", function () {
      return View_PosterInCanvasComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosterInCanvasComponentNgFactory", function () {
      return PosterInCanvasComponentNgFactory;
    });
    /* harmony import */


    var _poster_in_canvas_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./poster-in-canvas.component.scss.shim.ngstyle */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/form/ng-zorro-antd-form.ngfactory */
    "./node_modules/ng-zorro-antd/form/ng-zorro-antd-form.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory */
    "./node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_tag_ng_zorro_antd_tag_ngfactory__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/tag/ng-zorro-antd-tag.ngfactory */
    "./node_modules/ng-zorro-antd/tag/ng-zorro-antd-tag.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ng-zorro-antd/tag */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tag.js");
    /* harmony import */


    var ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/tooltip */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-tooltip.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory */
    "./node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pure_canvas_pure_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ../pure-canvas/pure-canvas.component.ngfactory */
    "./src/app/component/pure-canvas/pure-canvas.component.ngfactory.js");
    /* harmony import */


    var _pure_canvas_pure_canvas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../pure-canvas/pure-canvas.component */
    "./src/app/component/pure-canvas/pure-canvas.component.ts");
    /* harmony import */


    var _service_canvas_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ../../service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /* harmony import */


    var _poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./poster-in-canvas.component */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_PosterInCanvasComponent = [_poster_in_canvas_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PosterInCanvasComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PosterInCanvasComponent,
      data: {}
    });

    function View_PosterInCanvasComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 4, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 18, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 0, "img", [["class", "theme-img"], ["id", "themeImg"]], [[8, "src", 4]], null, null, null, null))], function (_ck, _v) {
        var currVal_1 = 3;

        _ck(_v, 1, 0, currVal_1);

        _ck(_v, 2, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hostFlexStyle;

        _ck(_v, 0, 0, currVal_0);

        var currVal_2 = _v.context.ngIf;

        _ck(_v, 4, 0, currVal_2);
      });
    }

    function View_PosterInCanvasComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 9, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 19, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, 0, 5, "button", [["nz-button", ""]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.getThemeColorFromImg() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](7, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__["NzConfigService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 20, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u63D0\u53D6\u4E3B\u9898\u8272"]))], function (_ck, _v) {
        var currVal_1 = 4;

        _ck(_v, 1, 0, currVal_1);

        _ck(_v, 2, 0);

        _ck(_v, 6, 0);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hostFlexStyle;

        _ck(_v, 0, 0, currVal_0);

        var currVal_2 = true;
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzType === "primary";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzType === "dashed";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzType === "link";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzType === "danger";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzShape === "circle";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzShape === "round";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzSize === "large";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzSize === "small";

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzDanger;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzLoading;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzGhost;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzBlock;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).nzSearch;

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).tabIndex;
        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 7).disabled || null;

        _ck(_v, 4, 1, [currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17]);
      });
    }

    function View_PosterInCanvasComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 7, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 21, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 16777216, null, 0, 3, "nz-tag", [["id", "imgThemeColor"], ["nz-tooltip", ""]], [[40, "@fadeMotion", 0], [40, "@.disabled", 0], [4, "background-color", null], [2, "ant-tag", null], [2, "ant-tag-has-color", null], [2, "ant-tag-checkable", null], [2, "ant-tag-checkable-checked", null], [2, "ant-tooltip-open", null]], [[null, "click"], ["component", "@fadeMotion.done"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).updateCheckedStatus() !== false;
          ad = pd_0 && ad;
        }

        if ("component:@fadeMotion.done" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).afterAnimation($event) !== false;
          ad = pd_1 && ad;
        }

        if ("click" === en) {
          var pd_2 = _co.copyText("imgThemeColor") !== false;
          ad = pd_2 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_tag_ng_zorro_antd_tag_ngfactory__WEBPACK_IMPORTED_MODULE_12__["View_NzTagComponent_0"], _node_modules_ng_zorro_antd_tag_ng_zorro_antd_tag_ngfactory__WEBPACK_IMPORTED_MODULE_12__["RenderType_NzTagComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 638976, null, 0, ng_zorro_antd_tag__WEBPACK_IMPORTED_MODULE_13__["NzTagComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], {
        nzColor: [0, "nzColor"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4866048, null, 0, ng_zorro_antd_tooltip__WEBPACK_IMPORTED_MODULE_14__["NzTooltipDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [8, null]], {
        specificTitle: [0, "specificTitle"],
        directiveNameTitle: [1, "directiveNameTitle"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](7, 0, [" ", ""]))], function (_ck, _v) {
        var currVal_1 = 4;

        _ck(_v, 1, 0, currVal_1);

        _ck(_v, 2, 0);

        var currVal_10 = _v.context.ngIf;

        _ck(_v, 5, 0, currVal_10);

        var currVal_11 = "\u70B9\u6211\u590D\u5236\u8272\u503C";
        var currVal_12 = "";

        _ck(_v, 6, 0, currVal_11, currVal_12);
      }, function (_ck, _v) {
        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).hostFlexStyle;

        _ck(_v, 0, 0, currVal_0);

        var currVal_2 = undefined;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzNoAnimation;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).presetColor ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzColor;
        var currVal_5 = true;
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzColor && !_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).presetColor;
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzMode === "checkable";

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 5).nzChecked;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).visible;

        _ck(_v, 4, 0, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);

        var currVal_13 = _v.context.ngIf;

        _ck(_v, 7, 0, currVal_13);
      });
    }

    function View_PosterInCanvasComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 19, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 3, "nz-form-label", [["nzFor", "themeColor"]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Extract from Pic"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 5, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 17, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, [[2, 0], ["themeColorInput", 1]], 0, 1, "input", [["accept", "image/png"], ["nz-input", ""], ["type", "file"]], [[2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "change"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("change" === en) {
          var pd_0 = _co.addImageFile("themeColorInput", $event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PosterInCanvasComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 1, null, View_PosterInCanvasComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, 0, 2, null, View_PosterInCanvasComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 1, 0);

        var currVal_16 = 6;

        _ck(_v, 4, 0, currVal_16);

        var currVal_17 = "themeColor";

        _ck(_v, 5, 0, currVal_17);

        var currVal_19 = 6;

        _ck(_v, 8, 0, currVal_19);

        _ck(_v, 9, 0);

        var currVal_23 = _v.context.ngIf.themeColor;

        _ck(_v, 14, 0, currVal_23);

        var currVal_24 = _v.context.ngIf.themeColor;

        _ck(_v, 16, 0, currVal_24);

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 18, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).transform(_co.imgThemeColor$));

        _ck(_v, 18, 0, currVal_25);
      }, function (_ck, _v) {
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzAlign === "top";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzAlign === "middle";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzAlign === "bottom";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "start";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "end";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "center";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "space-around";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "space-between";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "success";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "warning";
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "error";
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "validating";

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).withHelpClass;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hostFlexStyle;

        _ck(_v, 3, 0, currVal_15);

        var currVal_18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).hostFlexStyle;

        _ck(_v, 7, 0, currVal_18);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).disabled;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzSize === "large";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzSize === "small";

        _ck(_v, 11, 0, currVal_20, currVal_21, currVal_22);
      });
    }

    function View_PosterInCanvasComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 16, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, 0, 13, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"],
        nzOffset: [1, "nzOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](5, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 22, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, 0, 9, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](9, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 23, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, 0, 4, "a", [["download", "poster.png"]], [[8, "href", 4]], null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](13, 0, [[23, 0]], null, 2, "i", [["nz-icon", ""], ["nzType", "check-circle"]], [[2, "anticon", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](14, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 2703360, null, 0, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconPatchService"]]], {
        nzType: [0, "nzType"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["\xA0\u70B9\u51FB\u4E0B\u8F7D\u6D77\u62A5 "]))], function (_ck, _v) {
        _ck(_v, 1, 0);

        var currVal_16 = 8;
        var currVal_17 = 6;

        _ck(_v, 4, 0, currVal_16, currVal_17);

        _ck(_v, 5, 0);

        _ck(_v, 9, 0);

        var currVal_34 = "primary";

        _ck(_v, 10, 0, currVal_34);

        var currVal_37 = "check-circle";

        _ck(_v, 15, 0, currVal_37);
      }, function (_ck, _v) {
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzAlign === "top";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzAlign === "middle";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzAlign === "bottom";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "start";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "end";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "center";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "space-around";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 1).nzJustify === "space-between";
        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "success";
        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "warning";
        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "error";
        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status === "validating";

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).status;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 2).withHelpClass;

        _ck(_v, 0, 1, [currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14]);

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).hostFlexStyle;

        _ck(_v, 3, 0, currVal_15);

        var currVal_18 = true;
        var currVal_19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzType === "primary";
        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzType === "dashed";
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzType === "link";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzType === "danger";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzShape === "circle";
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzShape === "round";
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzSize === "large";
        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzSize === "small";

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzDanger;

        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzLoading;

        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzGhost;

        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzBlock;

        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).nzSearch;

        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).tabIndex;
        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 10).disabled || null;

        _ck(_v, 7, 1, [currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33]);

        var currVal_35 = _v.context.ngIf;

        _ck(_v, 12, 0, currVal_35);

        var currVal_36 = true;

        _ck(_v, 13, 0, currVal_36);
      });
    }

    function View_PosterInCanvasComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        logoPathInput: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 2, {
        themeColorInput: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 212, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 211, "div", [["nz-row", ""]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 200, "div", [["class", "form-container"], ["nz-col", ""], ["nzSpan", "15"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 198, "nz-card", [["nzTitle", "\u6D77\u62A5\u914D\u7F6E"]], [[2, "ant-card", null], [2, "ant-card-loading", null], [2, "ant-card-bordered", null], [2, "ant-card-hoverable", null], [2, "ant-card-small", null], [2, "ant-card-contain-grid", null], [2, "ant-card-type-inner", null], [2, "ant-card-contain-tabs", null]], null, null, _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_NzCardComponent_0"], _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_NzCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 2, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__["NzCardComponent"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzTitle: [0, "nzTitle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        listOfNzCardTabComponent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        listOfNzCardGridDirective: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 194, "form", [["class", "form"], ["novalidate", ""], ["nz-form", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-form-horizontal", null], [2, "ant-form-vertical", null], [2, "ant-form-inline", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_y"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](15, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 671744, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](17, 0, null, null, 12, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](18, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](20, 0, null, 0, 3, "nz-form-label", [["nzFor", "poster-logo"]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](22, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["LOGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](24, 0, null, 0, 5, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](25, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](26, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, [[1, 0], ["logoPathInput", 1]], 0, 1, "input", [["id", "poster-logo"], ["nz-input", ""], ["type", "file"]], [[2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 15, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](31, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](33, 0, null, 0, 12, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](34, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"],
        nzOffset: [1, "nzOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](35, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](37, 0, null, 0, 8, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.addImageFile("logoPathInput") !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](39, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_8__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_9__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](40, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_10__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](42, 0, [[7, 0]], 0, 2, "i", [["nz-icon", ""], ["nzType", "upload"]], [[2, "anticon", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](43, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_7__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](44, 2703360, null, 0, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_20__["NzIconPatchService"]]], {
        nzType: [0, "nzType"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u6DFB\u52A0 Logo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](46, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](47, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](49, 0, null, 0, 3, "nz-form-label", [["nzFor", "title"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](50, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](51, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Title"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](53, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](55, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 0, 6, "input", [["formControlName", "title"], ["nz-input", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](60, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[8, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](63, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](67, 0, null, 0, 3, "nz-form-label", [["nzFor", "organization"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](68, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](69, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Organization"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](71, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](73, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](75, 0, null, 0, 6, "input", [["formControlName", "organization"], ["nz-input", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 76)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](76, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[9, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](81, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](82, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](83, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, 0, 3, "nz-form-label", [["nzFor", "time"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](87, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Time"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](91, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](93, 0, null, 0, 6, "input", [["formControlName", "time"], ["nz-input", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 94)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](94, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](96, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[10, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](98, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](99, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](100, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](101, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](102, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](103, 0, null, 0, 3, "nz-form-label", [["nzFor", "address"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](104, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](105, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](107, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](108, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](109, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](111, 0, null, 0, 6, "input", [["formControlName", "address"], ["nz-input", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 112)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](112, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](114, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[11, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](116, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](117, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](118, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](119, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](120, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](121, 0, null, 0, 3, "nz-form-label", [["nzFor", "vol"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](122, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](123, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Vol"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](125, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](126, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](127, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](129, 0, null, 0, 6, "input", [["formControlName", "vol"], ["nz-input", ""], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 130)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](130, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](132, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[12, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](134, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](135, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](136, 0, null, null, 27, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](137, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](138, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](139, 0, null, 0, 3, "nz-form-label", [["nzFor", "bgColor"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](140, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](141, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Background Color"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](143, 0, null, 0, 9, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](144, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](145, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](147, 0, null, 0, 5, "input", [["formControlName", "bgColor"], ["type", "color"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 148)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](148, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](150, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[13, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](152, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](153, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](154, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](155, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](157, 0, null, 0, 6, "input", [["formControlName", "bgColor"], ["nz-input", ""], ["type", "string"]], [[8, "value", 0], [2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 158)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](158, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](160, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[14, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](162, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](163, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](164, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](165, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](166, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](167, 0, null, 0, 3, "nz-form-label", [["nzFor", "topics"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](168, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](169, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Topics"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](171, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](172, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](173, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](175, 0, null, 0, 6, "textarea", [["formControlName", "topics"], ["nz-input", ""], ["rows", "5"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 176)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](176, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](178, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[15, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](180, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](181, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](182, 0, null, null, 17, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](183, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_16__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_17__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](184, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](185, 0, null, 0, 3, "nz-form-label", [["nzFor", "description"], ["nzRequired", ""]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](186, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](187, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"],
        nzRequired: [1, "nzRequired"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["Description"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](189, 0, null, 0, 10, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](190, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](191, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_5__["NzI18nService"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_4__["NzFormDirective"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 16, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](193, 0, null, 0, 6, "textarea", [["formControlName", "description"], ["nz-input", ""], ["rows", "3"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null], [2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], [[null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 194)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](194, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](196, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["ɵangular_packages_forms_forms_p"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, [[16, 4]], _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](198, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_23__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](199, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_18__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_PosterInCanvasComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](201, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 2, null, View_PosterInCanvasComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](204, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_19__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](206, 0, null, null, 8, "div", [["nz-col", ""], ["nzSpan", "9"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](207, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_3__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](208, 0, null, null, 6, "nz-card", [["nzTitle", "\u9884\u89C8\u56FE"]], [[2, "ant-card", null], [2, "ant-card-loading", null], [2, "ant-card-bordered", null], [2, "ant-card-hoverable", null], [2, "ant-card-small", null], [2, "ant-card-contain-grid", null], [2, "ant-card-type-inner", null], [2, "ant-card-contain-tabs", null]], null, null, _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_21__["View_NzCardComponent_0"], _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_21__["RenderType_NzCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](209, 180224, null, 2, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_22__["NzCardComponent"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_11__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzTitle: [0, "nzTitle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 24, {
        listOfNzCardTabComponent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 25, {
        listOfNzCardGridDirective: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](212, 0, null, 0, 2, "app-pure-canvas", [], null, [[null, "imageChange"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("imageChange" === en) {
          var pd_0 = _co.onImageChange($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _pure_canvas_pure_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["View_PureCanvasComponent_0"], _pure_canvas_pure_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_24__["RenderType_PureCanvasComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](213, 4308992, null, 0, _pure_canvas_pure_canvas_component__WEBPACK_IMPORTED_MODULE_25__["PureCanvasComponent"], [_service_canvas_service__WEBPACK_IMPORTED_MODULE_26__["CanvasService"]], {
        info: [0, "info"]
      }, {
        imageChange: "imageChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_19__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 4, 0);

        var currVal_10 = "15";

        _ck(_v, 6, 0, currVal_10);

        var currVal_19 = "\u6D77\u62A5\u914D\u7F6E";

        _ck(_v, 8, 0, currVal_19);

        var currVal_30 = _co.billboardForm;

        _ck(_v, 13, 0, currVal_30);

        _ck(_v, 18, 0);

        var currVal_47 = 6;

        _ck(_v, 21, 0, currVal_47);

        var currVal_48 = "poster-logo";

        _ck(_v, 22, 0, currVal_48);

        var currVal_50 = 8;

        _ck(_v, 25, 0, currVal_50);

        _ck(_v, 26, 0);

        _ck(_v, 31, 0);

        var currVal_70 = 8;
        var currVal_71 = 6;

        _ck(_v, 34, 0, currVal_70, currVal_71);

        _ck(_v, 35, 0);

        _ck(_v, 39, 0);

        var currVal_88 = "primary";

        _ck(_v, 40, 0, currVal_88);

        var currVal_90 = "upload";

        _ck(_v, 44, 0, currVal_90);

        _ck(_v, 47, 0);

        var currVal_107 = 6;

        _ck(_v, 50, 0, currVal_107);

        var currVal_108 = "title";
        var currVal_109 = "";

        _ck(_v, 51, 0, currVal_108, currVal_109);

        var currVal_111 = 8;

        _ck(_v, 54, 0, currVal_111);

        _ck(_v, 55, 0);

        var currVal_122 = "title";

        _ck(_v, 60, 0, currVal_122);

        _ck(_v, 65, 0);

        var currVal_139 = 6;

        _ck(_v, 68, 0, currVal_139);

        var currVal_140 = "organization";
        var currVal_141 = "";

        _ck(_v, 69, 0, currVal_140, currVal_141);

        var currVal_143 = 8;

        _ck(_v, 72, 0, currVal_143);

        _ck(_v, 73, 0);

        var currVal_154 = "organization";

        _ck(_v, 78, 0, currVal_154);

        _ck(_v, 83, 0);

        var currVal_171 = 6;

        _ck(_v, 86, 0, currVal_171);

        var currVal_172 = "time";
        var currVal_173 = "";

        _ck(_v, 87, 0, currVal_172, currVal_173);

        var currVal_175 = 8;

        _ck(_v, 90, 0, currVal_175);

        _ck(_v, 91, 0);

        var currVal_186 = "time";

        _ck(_v, 96, 0, currVal_186);

        _ck(_v, 101, 0);

        var currVal_203 = 6;

        _ck(_v, 104, 0, currVal_203);

        var currVal_204 = "address";
        var currVal_205 = "";

        _ck(_v, 105, 0, currVal_204, currVal_205);

        var currVal_207 = 8;

        _ck(_v, 108, 0, currVal_207);

        _ck(_v, 109, 0);

        var currVal_218 = "address";

        _ck(_v, 114, 0, currVal_218);

        _ck(_v, 119, 0);

        var currVal_235 = 6;

        _ck(_v, 122, 0, currVal_235);

        var currVal_236 = "vol";
        var currVal_237 = "";

        _ck(_v, 123, 0, currVal_236, currVal_237);

        var currVal_239 = 8;

        _ck(_v, 126, 0, currVal_239);

        _ck(_v, 127, 0);

        var currVal_250 = "vol";

        _ck(_v, 132, 0, currVal_250);

        _ck(_v, 137, 0);

        var currVal_267 = 6;

        _ck(_v, 140, 0, currVal_267);

        var currVal_268 = "bgColor";
        var currVal_269 = "";

        _ck(_v, 141, 0, currVal_268, currVal_269);

        var currVal_271 = 4;

        _ck(_v, 144, 0, currVal_271);

        _ck(_v, 145, 0);

        var currVal_280 = "bgColor";

        _ck(_v, 150, 0, currVal_280);

        var currVal_282 = 4;

        _ck(_v, 154, 0, currVal_282);

        _ck(_v, 155, 0);

        var currVal_294 = "bgColor";

        _ck(_v, 160, 0, currVal_294);

        _ck(_v, 165, 0);

        var currVal_311 = 6;

        _ck(_v, 168, 0, currVal_311);

        var currVal_312 = "topics";
        var currVal_313 = "";

        _ck(_v, 169, 0, currVal_312, currVal_313);

        var currVal_315 = 18;

        _ck(_v, 172, 0, currVal_315);

        _ck(_v, 173, 0);

        var currVal_326 = "topics";

        _ck(_v, 178, 0, currVal_326);

        _ck(_v, 183, 0);

        var currVal_343 = 6;

        _ck(_v, 186, 0, currVal_343);

        var currVal_344 = "description";
        var currVal_345 = "";

        _ck(_v, 187, 0, currVal_344, currVal_345);

        var currVal_347 = 18;

        _ck(_v, 190, 0, currVal_347);

        _ck(_v, 191, 0);

        var currVal_358 = "description";

        _ck(_v, 196, 0, currVal_358);

        var currVal_359 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 201, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 202).transform(_co.billboardData$));

        _ck(_v, 201, 0, currVal_359);

        var currVal_360 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 204, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 205).transform(_co.imgUrl$));

        _ck(_v, 204, 0, currVal_360);

        var currVal_362 = "9";

        _ck(_v, 207, 0, currVal_362);

        var currVal_371 = "\u9884\u89C8\u56FE";

        _ck(_v, 209, 0, currVal_371);

        var currVal_372 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 213, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 214).transform(_co.billboardData$));

        _ck(_v, 213, 0, currVal_372);
      }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "top";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "middle";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "bottom";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "start";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "end";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "center";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "space-around";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "space-between";

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).hostFlexStyle;

        _ck(_v, 5, 0, currVal_9);

        var currVal_11 = true;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzLoading;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzBordered;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzHoverable;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzSize === "small";

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardGridDirective && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardGridDirective.length;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzType === "inner";
        var currVal_18 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardTabComponent;

        _ck(_v, 7, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassUntouched;

        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassTouched;

        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPristine;

        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassDirty;

        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassValid;

        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassInvalid;

        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 15).ngClassPending;

        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzLayout === "horizontal";
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzLayout === "vertical";
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzLayout === "inline";

        _ck(_v, 11, 0, currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29);

        var currVal_31 = true;
        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzAlign === "top";
        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzAlign === "middle";
        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzAlign === "bottom";
        var currVal_35 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzJustify === "start";
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzJustify === "end";
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzJustify === "center";
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzJustify === "space-around";
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 18).nzJustify === "space-between";
        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).status === "success";
        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).status === "warning";
        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).status === "error";
        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).status === "validating";

        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).status;

        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).withHelpClass;

        _ck(_v, 17, 1, [currVal_31, currVal_32, currVal_33, currVal_34, currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45]);

        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).hostFlexStyle;

        _ck(_v, 20, 0, currVal_46);

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 25).hostFlexStyle;

        _ck(_v, 24, 0, currVal_49);

        var currVal_51 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).disabled;

        var currVal_52 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzSize === "large";
        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzSize === "small";

        _ck(_v, 28, 0, currVal_51, currVal_52, currVal_53);

        var currVal_54 = true;
        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzAlign === "top";
        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzAlign === "middle";
        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzAlign === "bottom";
        var currVal_58 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzJustify === "start";
        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzJustify === "end";
        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzJustify === "center";
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzJustify === "space-around";
        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 31).nzJustify === "space-between";
        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).status === "success";
        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).status === "warning";
        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).status === "error";
        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).status === "validating";

        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).status;

        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).withHelpClass;

        _ck(_v, 30, 1, [currVal_54, currVal_55, currVal_56, currVal_57, currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68]);

        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 34).hostFlexStyle;

        _ck(_v, 33, 0, currVal_69);

        var currVal_72 = true;
        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzType === "primary";
        var currVal_74 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzType === "dashed";
        var currVal_75 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzType === "link";
        var currVal_76 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzType === "danger";
        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzShape === "circle";
        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzShape === "round";
        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzSize === "large";
        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzSize === "small";

        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzDanger;

        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzLoading;

        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzGhost;

        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzBlock;

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).nzSearch;

        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).tabIndex;
        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 40).disabled || null;

        _ck(_v, 37, 1, [currVal_72, currVal_73, currVal_74, currVal_75, currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87]);

        var currVal_89 = true;

        _ck(_v, 42, 0, currVal_89);

        var currVal_91 = true;
        var currVal_92 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzAlign === "top";
        var currVal_93 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzAlign === "middle";
        var currVal_94 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzAlign === "bottom";
        var currVal_95 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzJustify === "start";
        var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzJustify === "end";
        var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzJustify === "center";
        var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzJustify === "space-around";
        var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 47).nzJustify === "space-between";
        var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).status === "success";
        var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).status === "warning";
        var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).status === "error";
        var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).status === "validating";

        var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).status;

        var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).withHelpClass;

        _ck(_v, 46, 1, [currVal_91, currVal_92, currVal_93, currVal_94, currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105]);

        var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 50).hostFlexStyle;

        _ck(_v, 49, 0, currVal_106);

        var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).hostFlexStyle;

        _ck(_v, 53, 0, currVal_110);

        var currVal_112 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassUntouched;

        var currVal_113 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassTouched;

        var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassPristine;

        var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassDirty;

        var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassValid;

        var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassInvalid;

        var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 62).ngClassPending;

        var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).disabled;

        var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).nzSize === "large";
        var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 63).nzSize === "small";

        _ck(_v, 57, 0, currVal_112, currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121);

        var currVal_123 = true;
        var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzAlign === "top";
        var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzAlign === "middle";
        var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzAlign === "bottom";
        var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzJustify === "start";
        var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzJustify === "end";
        var currVal_129 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzJustify === "center";
        var currVal_130 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzJustify === "space-around";
        var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 65).nzJustify === "space-between";
        var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).status === "success";
        var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).status === "warning";
        var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).status === "error";
        var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).status === "validating";

        var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).status;

        var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 66).withHelpClass;

        _ck(_v, 64, 1, [currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128, currVal_129, currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137]);

        var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 68).hostFlexStyle;

        _ck(_v, 67, 0, currVal_138);

        var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).hostFlexStyle;

        _ck(_v, 71, 0, currVal_142);

        var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassUntouched;

        var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassTouched;

        var currVal_146 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassPristine;

        var currVal_147 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassDirty;

        var currVal_148 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassValid;

        var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassInvalid;

        var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).ngClassPending;

        var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).disabled;

        var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).nzSize === "large";
        var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 81).nzSize === "small";

        _ck(_v, 75, 0, currVal_144, currVal_145, currVal_146, currVal_147, currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153);

        var currVal_155 = true;
        var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzAlign === "top";
        var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzAlign === "middle";
        var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzAlign === "bottom";
        var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzJustify === "start";
        var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzJustify === "end";
        var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzJustify === "center";
        var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzJustify === "space-around";
        var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 83).nzJustify === "space-between";
        var currVal_164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).status === "success";
        var currVal_165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).status === "warning";
        var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).status === "error";
        var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).status === "validating";

        var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).status;

        var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).withHelpClass;

        _ck(_v, 82, 1, [currVal_155, currVal_156, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162, currVal_163, currVal_164, currVal_165, currVal_166, currVal_167, currVal_168, currVal_169]);

        var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).hostFlexStyle;

        _ck(_v, 85, 0, currVal_170);

        var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 90).hostFlexStyle;

        _ck(_v, 89, 0, currVal_174);

        var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassUntouched;

        var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassTouched;

        var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassPristine;

        var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassDirty;

        var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassValid;

        var currVal_181 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassInvalid;

        var currVal_182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 98).ngClassPending;

        var currVal_183 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).disabled;

        var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).nzSize === "large";
        var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 99).nzSize === "small";

        _ck(_v, 93, 0, currVal_176, currVal_177, currVal_178, currVal_179, currVal_180, currVal_181, currVal_182, currVal_183, currVal_184, currVal_185);

        var currVal_187 = true;
        var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzAlign === "top";
        var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzAlign === "middle";
        var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzAlign === "bottom";
        var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzJustify === "start";
        var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzJustify === "end";
        var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzJustify === "center";
        var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzJustify === "space-around";
        var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 101).nzJustify === "space-between";
        var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).status === "success";
        var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).status === "warning";
        var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).status === "error";
        var currVal_199 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).status === "validating";

        var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).status;

        var currVal_201 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 102).withHelpClass;

        _ck(_v, 100, 1, [currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195, currVal_196, currVal_197, currVal_198, currVal_199, currVal_200, currVal_201]);

        var currVal_202 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 104).hostFlexStyle;

        _ck(_v, 103, 0, currVal_202);

        var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 108).hostFlexStyle;

        _ck(_v, 107, 0, currVal_206);

        var currVal_208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassUntouched;

        var currVal_209 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassTouched;

        var currVal_210 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassPristine;

        var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassDirty;

        var currVal_212 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassValid;

        var currVal_213 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassInvalid;

        var currVal_214 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 116).ngClassPending;

        var currVal_215 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).disabled;

        var currVal_216 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).nzSize === "large";
        var currVal_217 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 117).nzSize === "small";

        _ck(_v, 111, 0, currVal_208, currVal_209, currVal_210, currVal_211, currVal_212, currVal_213, currVal_214, currVal_215, currVal_216, currVal_217);

        var currVal_219 = true;
        var currVal_220 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzAlign === "top";
        var currVal_221 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzAlign === "middle";
        var currVal_222 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzAlign === "bottom";
        var currVal_223 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzJustify === "start";
        var currVal_224 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzJustify === "end";
        var currVal_225 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzJustify === "center";
        var currVal_226 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzJustify === "space-around";
        var currVal_227 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 119).nzJustify === "space-between";
        var currVal_228 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).status === "success";
        var currVal_229 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).status === "warning";
        var currVal_230 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).status === "error";
        var currVal_231 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).status === "validating";

        var currVal_232 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).status;

        var currVal_233 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 120).withHelpClass;

        _ck(_v, 118, 1, [currVal_219, currVal_220, currVal_221, currVal_222, currVal_223, currVal_224, currVal_225, currVal_226, currVal_227, currVal_228, currVal_229, currVal_230, currVal_231, currVal_232, currVal_233]);

        var currVal_234 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 122).hostFlexStyle;

        _ck(_v, 121, 0, currVal_234);

        var currVal_238 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 126).hostFlexStyle;

        _ck(_v, 125, 0, currVal_238);

        var currVal_240 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassUntouched;

        var currVal_241 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassTouched;

        var currVal_242 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPristine;

        var currVal_243 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassDirty;

        var currVal_244 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassValid;

        var currVal_245 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassInvalid;

        var currVal_246 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 134).ngClassPending;

        var currVal_247 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).disabled;

        var currVal_248 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).nzSize === "large";
        var currVal_249 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 135).nzSize === "small";

        _ck(_v, 129, 0, currVal_240, currVal_241, currVal_242, currVal_243, currVal_244, currVal_245, currVal_246, currVal_247, currVal_248, currVal_249);

        var currVal_251 = true;
        var currVal_252 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzAlign === "top";
        var currVal_253 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzAlign === "middle";
        var currVal_254 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzAlign === "bottom";
        var currVal_255 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzJustify === "start";
        var currVal_256 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzJustify === "end";
        var currVal_257 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzJustify === "center";
        var currVal_258 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzJustify === "space-around";
        var currVal_259 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 137).nzJustify === "space-between";
        var currVal_260 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).status === "success";
        var currVal_261 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).status === "warning";
        var currVal_262 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).status === "error";
        var currVal_263 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).status === "validating";

        var currVal_264 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).status;

        var currVal_265 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 138).withHelpClass;

        _ck(_v, 136, 1, [currVal_251, currVal_252, currVal_253, currVal_254, currVal_255, currVal_256, currVal_257, currVal_258, currVal_259, currVal_260, currVal_261, currVal_262, currVal_263, currVal_264, currVal_265]);

        var currVal_266 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 140).hostFlexStyle;

        _ck(_v, 139, 0, currVal_266);

        var currVal_270 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 144).hostFlexStyle;

        _ck(_v, 143, 0, currVal_270);

        var currVal_272 = _co.billboardForm.get("bgColor").value;

        var currVal_273 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassUntouched;

        var currVal_274 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassTouched;

        var currVal_275 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassPristine;

        var currVal_276 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassDirty;

        var currVal_277 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassValid;

        var currVal_278 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassInvalid;

        var currVal_279 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 152).ngClassPending;

        _ck(_v, 147, 0, currVal_272, currVal_273, currVal_274, currVal_275, currVal_276, currVal_277, currVal_278, currVal_279);

        var currVal_281 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 154).hostFlexStyle;

        _ck(_v, 153, 0, currVal_281);

        var currVal_283 = _co.billboardForm.get("bgColor").value;

        var currVal_284 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassUntouched;

        var currVal_285 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassTouched;

        var currVal_286 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassPristine;

        var currVal_287 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassDirty;

        var currVal_288 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassValid;

        var currVal_289 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassInvalid;

        var currVal_290 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 162).ngClassPending;

        var currVal_291 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).disabled;

        var currVal_292 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).nzSize === "large";
        var currVal_293 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 163).nzSize === "small";

        _ck(_v, 157, 1, [currVal_283, currVal_284, currVal_285, currVal_286, currVal_287, currVal_288, currVal_289, currVal_290, currVal_291, currVal_292, currVal_293]);

        var currVal_295 = true;
        var currVal_296 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzAlign === "top";
        var currVal_297 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzAlign === "middle";
        var currVal_298 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzAlign === "bottom";
        var currVal_299 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzJustify === "start";
        var currVal_300 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzJustify === "end";
        var currVal_301 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzJustify === "center";
        var currVal_302 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzJustify === "space-around";
        var currVal_303 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 165).nzJustify === "space-between";
        var currVal_304 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).status === "success";
        var currVal_305 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).status === "warning";
        var currVal_306 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).status === "error";
        var currVal_307 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).status === "validating";

        var currVal_308 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).status;

        var currVal_309 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 166).withHelpClass;

        _ck(_v, 164, 1, [currVal_295, currVal_296, currVal_297, currVal_298, currVal_299, currVal_300, currVal_301, currVal_302, currVal_303, currVal_304, currVal_305, currVal_306, currVal_307, currVal_308, currVal_309]);

        var currVal_310 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 168).hostFlexStyle;

        _ck(_v, 167, 0, currVal_310);

        var currVal_314 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 172).hostFlexStyle;

        _ck(_v, 171, 0, currVal_314);

        var currVal_316 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassUntouched;

        var currVal_317 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassTouched;

        var currVal_318 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassPristine;

        var currVal_319 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassDirty;

        var currVal_320 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassValid;

        var currVal_321 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassInvalid;

        var currVal_322 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 180).ngClassPending;

        var currVal_323 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181).disabled;

        var currVal_324 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181).nzSize === "large";
        var currVal_325 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 181).nzSize === "small";

        _ck(_v, 175, 0, currVal_316, currVal_317, currVal_318, currVal_319, currVal_320, currVal_321, currVal_322, currVal_323, currVal_324, currVal_325);

        var currVal_327 = true;
        var currVal_328 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzAlign === "top";
        var currVal_329 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzAlign === "middle";
        var currVal_330 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzAlign === "bottom";
        var currVal_331 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzJustify === "start";
        var currVal_332 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzJustify === "end";
        var currVal_333 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzJustify === "center";
        var currVal_334 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzJustify === "space-around";
        var currVal_335 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 183).nzJustify === "space-between";
        var currVal_336 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).status === "success";
        var currVal_337 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).status === "warning";
        var currVal_338 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).status === "error";
        var currVal_339 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).status === "validating";

        var currVal_340 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).status;

        var currVal_341 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 184).withHelpClass;

        _ck(_v, 182, 1, [currVal_327, currVal_328, currVal_329, currVal_330, currVal_331, currVal_332, currVal_333, currVal_334, currVal_335, currVal_336, currVal_337, currVal_338, currVal_339, currVal_340, currVal_341]);

        var currVal_342 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 186).hostFlexStyle;

        _ck(_v, 185, 0, currVal_342);

        var currVal_346 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 190).hostFlexStyle;

        _ck(_v, 189, 0, currVal_346);

        var currVal_348 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassUntouched;

        var currVal_349 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassTouched;

        var currVal_350 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPristine;

        var currVal_351 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassDirty;

        var currVal_352 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassValid;

        var currVal_353 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassInvalid;

        var currVal_354 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 198).ngClassPending;

        var currVal_355 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 199).disabled;

        var currVal_356 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 199).nzSize === "large";
        var currVal_357 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 199).nzSize === "small";

        _ck(_v, 193, 0, currVal_348, currVal_349, currVal_350, currVal_351, currVal_352, currVal_353, currVal_354, currVal_355, currVal_356, currVal_357);

        var currVal_361 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 207).hostFlexStyle;

        _ck(_v, 206, 0, currVal_361);

        var currVal_363 = true;

        var currVal_364 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).nzLoading;

        var currVal_365 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).nzBordered;

        var currVal_366 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).nzHoverable;

        var currVal_367 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).nzSize === "small";

        var currVal_368 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).listOfNzCardGridDirective && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).listOfNzCardGridDirective.length;

        var currVal_369 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).nzType === "inner";
        var currVal_370 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 209).listOfNzCardTabComponent;

        _ck(_v, 208, 0, currVal_363, currVal_364, currVal_365, currVal_366, currVal_367, currVal_368, currVal_369, currVal_370);
      });
    }

    function View_PosterInCanvasComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-poster-in-canvas", [], null, null, null, View_PosterInCanvasComponent_0, RenderType_PosterInCanvasComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_27__["PosterInCanvasComponent"], [_angular_forms__WEBPACK_IMPORTED_MODULE_23__["FormBuilder"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_28__["DomSanitizer"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PosterInCanvasComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-poster-in-canvas", _poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_27__["PosterInCanvasComponent"], View_PosterInCanvasComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/component/poster-in-canvas/poster-in-canvas.component.scss.shim.ngstyle.js":
  /*!********************************************************************************************!*\
    !*** ./src/app/component/poster-in-canvas/poster-in-canvas.component.scss.shim.ngstyle.js ***!
    \********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentPosterInCanvasPosterInCanvasComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 100%;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   .theme-img[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  width: 4.5rem;\n  height: auto;\n}\n[_nghost-%COMP%]   div[_ngcontent-%COMP%]   #imgThemeColor[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tY2FudmFzL3Bvc3Rlci1pbi1jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tY2FudmFzL3Bvc3Rlci1pbi1jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxZQUFBO0FDQUo7QURFSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0FOO0FER0k7RUFDRSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0FDRE47QURJSTtFQUNFLGVBQUE7QUNGTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tY2FudmFzL3Bvc3Rlci1pbi1jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpdiB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG4gICAgbnotY2FyZCB7XG4gICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgLnRoZW1lLWltZyB7XG4gICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgd2lkdGg6IDQuNXJlbTtcbiAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAjaW1nVGhlbWVDb2xvciB7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuICB9XG59XG4iLCI6aG9zdCBkaXYge1xuICBoZWlnaHQ6IDEwMCU7XG59XG46aG9zdCBkaXYgbnotY2FyZCB7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgZGl2IC50aGVtZS1pbWcge1xuICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICB3aWR0aDogNC41cmVtO1xuICBoZWlnaHQ6IGF1dG87XG59XG46aG9zdCBkaXYgI2ltZ1RoZW1lQ29sb3Ige1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/component/poster-in-canvas/poster-in-canvas.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/component/poster-in-canvas/poster-in-canvas.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PosterInCanvasComponent */

  /***/
  function srcAppComponentPosterInCanvasPosterInCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosterInCanvasComponent", function () {
      return PosterInCanvasComponent;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _utils_operation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../utils/operation */
    "./src/app/utils/operation.ts");

    var COLOR_THEMES_CONFIG = {
      dark: ['#000', '#333', '#ec0007'],
      light: ['#fff', '#ccc', '#f4ea2a']
    };
    var BILLBOARD_INIT_DATA = {
      title: '分享会主题名称',
      organization: '服务平台前端小组',
      time: '2020年1月1日',
      address: '北京·阜通·608会议室',
      vol: 'X',
      topics: '新人介绍与欢迎环节 (5min)\n经验与疑问分享 (10min)\n技术前沿讯息分享 (5-10min)\n主题分享 (20-35min)\n其他环节 (TBD)',
      bgColor: '#FF4C00',
      description: '这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述',
      textColors: COLOR_THEMES_CONFIG.light
    };

    var PosterInCanvasComponent =
    /*#__PURE__*/
    function () {
      function PosterInCanvasComponent(fb, cdRef, sanitizer) {
        _classCallCheck(this, PosterInCanvasComponent);

        this.fb = fb;
        this.cdRef = cdRef;
        this.sanitizer = sanitizer;
        this.billboardForm = this.fb.group({
          title: [BILLBOARD_INIT_DATA.title, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          organization: [BILLBOARD_INIT_DATA.organization, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          time: [BILLBOARD_INIT_DATA.time, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          address: [BILLBOARD_INIT_DATA.address, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          vol: [BILLBOARD_INIT_DATA.vol, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          topics: [BILLBOARD_INIT_DATA.topics, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          bgColor: [BILLBOARD_INIT_DATA.bgColor, _angular_forms__WEBPACK_IMPORTED_MODULE_0__["Validators"].required],
          description: [BILLBOARD_INIT_DATA.description]
        });
        this.billboardData$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](BILLBOARD_INIT_DATA);
        this.imgUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.imgThemeColor$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.copyText = _utils_operation__WEBPACK_IMPORTED_MODULE_3__["copyText"];
      }

      _createClass(PosterInCanvasComponent, [{
        key: "updateStore",
        value: function updateStore(val) {
          var formDataValue = Object.assign(Object.assign({}, this.billboardData$.value), val);
          this.billboardData$.next(formDataValue);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this4 = this;

          this.billboardForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(300)).subscribe(function (value) {
            return _this4.updateStore(value);
          });
          this.billboardData$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])(function (a, b) {
            return a.bgColor === b.bgColor;
          })).subscribe(function (billboardData) {
            var bgColor = billboardData.bgColor;
            var textColors = Object(_utils_operation__WEBPACK_IMPORTED_MODULE_3__["calcColorType"])(bgColor) ? COLOR_THEMES_CONFIG.light : COLOR_THEMES_CONFIG.dark;

            _this4.billboardData$.next(Object.assign(Object.assign({}, _this4.billboardData$.value), {
              textColors: textColors
            }));
          });
        }
      }, {
        key: "addImageFile",
        value: function addImageFile() {
          var _this5 = this;

          var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'logoPathInput';
          var event = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          var fi = event.target || this[id].nativeElement;

          if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            var storeKey = id.replace('Input', '');
            var myReader = new FileReader();

            myReader.onloadend = function (loadEvent) {
              var result = loadEvent.target.result;

              if (id === 'themeColorInput') {
                result = _this5.sanitizer.bypassSecurityTrustUrl(loadEvent.target.result);
              }

              _this5.updateStore(_defineProperty({}, storeKey, result));
            };

            myReader.readAsDataURL(fileToUpload); // Another way to create image url
            //
            // this.updateStore({
            //   logoPath: URL.createObjectURL(fileToUpload),
            // });
          }
        }
      }, {
        key: "onImageChange",
        value: function onImageChange(url) {
          this.imgUrl$.next(url);
          this.cdRef.detectChanges();
        }
      }, {
        key: "getThemeColorFromImg",
        value: function getThemeColorFromImg() {
          var imgEle = document.getElementById('themeImg');
          var tc = Object(_utils_operation__WEBPACK_IMPORTED_MODULE_3__["getImageThemeColor"])(imgEle);
          this.imgThemeColor$.next(tc ? Object(_utils_operation__WEBPACK_IMPORTED_MODULE_3__["fullColorHex"])(tc) : null);
        }
      }]);

      return PosterInCanvasComponent;
    }();
    /***/

  },

  /***/
  "./src/app/component/poster-in-fabric/poster-in-fabric.component.ngfactory.js":
  /*!************************************************************************************!*\
    !*** ./src/app/component/poster-in-fabric/poster-in-fabric.component.ngfactory.js ***!
    \************************************************************************************/

  /*! exports provided: RenderType_PosterInFabricComponent, View_PosterInFabricComponent_0, View_PosterInFabricComponent_Host_0, PosterInFabricComponentNgFactory */

  /***/
  function srcAppComponentPosterInFabricPosterInFabricComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PosterInFabricComponent", function () {
      return RenderType_PosterInFabricComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PosterInFabricComponent_0", function () {
      return View_PosterInFabricComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PosterInFabricComponent_Host_0", function () {
      return View_PosterInFabricComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosterInFabricComponentNgFactory", function () {
      return PosterInFabricComponentNgFactory;
    });
    /* harmony import */


    var _poster_in_fabric_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./poster-in-fabric.component.scss.shim.ngstyle */
    "./src/app/component/poster-in-fabric/poster-in-fabric.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ng-zorro-antd/grid */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-grid.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng-zorro-antd/core/services */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-services.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory */
    "./node_modules/ng-zorro-antd/card/ng-zorro-antd-card.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng-zorro-antd/card */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-card.js");
    /* harmony import */


    var ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng-zorro-antd/core/config */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-config.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/form/ng-zorro-antd-form.ngfactory */
    "./node_modules/ng-zorro-antd/form/ng-zorro-antd-form.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng-zorro-antd/form */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-form.js");
    /* harmony import */


    var ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ng-zorro-antd/i18n */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-i18n.js");
    /* harmony import */


    var ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng-zorro-antd/input */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-input.js");
    /* harmony import */


    var _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ../../../../node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory */
    "./node_modules/ng-zorro-antd/button/ng-zorro-antd-button.ngfactory.js");
    /* harmony import */


    var ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ng-zorro-antd/core/transition-patch */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-transition-patch.js");
    /* harmony import */


    var ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ng-zorro-antd/core/wave */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-core-wave.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ng-zorro-antd/button */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-button.js");
    /* harmony import */


    var ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng-zorro-antd/icon */
    "./node_modules/ng-zorro-antd/fesm2015/ng-zorro-antd-icon.js");
    /* harmony import */


    var _fabric_canvas_fabric_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ../fabric-canvas/fabric-canvas.component.ngfactory */
    "./src/app/component/fabric-canvas/fabric-canvas.component.ngfactory.js");
    /* harmony import */


    var _fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ../fabric-canvas/fabric-canvas.component */
    "./src/app/component/fabric-canvas/fabric-canvas.component.ts");
    /* harmony import */


    var _service_canvas_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ../../service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./poster-in-fabric.component */
    "./src/app/component/poster-in-fabric/poster-in-fabric.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_PosterInFabricComponent = [_poster_in_fabric_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PosterInFabricComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PosterInFabricComponent,
      data: {}
    });

    function View_PosterInFabricComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        logoPathInput: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 2, {
        childCanvas: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 89, null, null, null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 0, null, null, 88, "div", [["class", "inner-content"], ["nz-row", ""]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 77, "div", [["nz-col", ""], ["nzSpan", "15"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 75, "nz-card", [["nzTitle", "\u6D77\u62A5\u914D\u7F6E"]], [[2, "ant-card", null], [2, "ant-card-loading", null], [2, "ant-card-bordered", null], [2, "ant-card-hoverable", null], [2, "ant-card-small", null], [2, "ant-card-contain-grid", null], [2, "ant-card-type-inner", null], [2, "ant-card-contain-tabs", null]], null, null, _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzCardComponent_0"], _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](8, 180224, null, 2, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzTitle: [0, "nzTitle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 3, {
        listOfNzCardTabComponent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 4, {
        listOfNzCardGridDirective: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, 0, 3, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](12, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u53F3\u8FB9\u7684\u6240\u6709\u5143\u7D20\u90FD\u662F\u53EF\u4EE5\u70B9\u51FB\u3001\u62D6\u62FD\u3001\u65CB\u8F6C\u3001\u79FB\u52A8\u548C\u7F16\u8F91\u5185\u5BB9\u7684"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, 0, 12, "nz-form-item", [["class", "border-item"]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](16, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](18, 0, null, 0, 3, "nz-form-label", [["nzFor", "poster-logo"]], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormLabelComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormLabelComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](20, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormLabelComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], [3, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormDirective"]]], {
        nzFor: [0, "nzFor"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["LOGO"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, null, 0, 5, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](23, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](24, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 5, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](26, 0, [[1, 0], ["logoPathInput", 1]], 0, 1, "input", [["id", "poster-logo"], ["nz-input", ""], ["type", "file"]], [[2, "ant-input-disabled", null], [2, "ant-input-lg", null], [2, "ant-input-sm", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 540672, null, 0, ng_zorro_antd_input__WEBPACK_IMPORTED_MODULE_12__["NzInputDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](28, 0, null, 0, 15, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](30, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, 0, 12, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](32, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"],
        nzOffset: [1, "nzOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](33, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 6, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](35, 0, null, 0, 8, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.addLogo() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](36, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](37, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](38, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 7, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](40, 0, [[7, 0]], 0, 2, "i", [["nz-icon", ""], ["nzType", "upload"]], [[2, "anticon", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](41, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](42, 2703360, null, 0, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], [2, ng_zorro_antd_icon__WEBPACK_IMPORTED_MODULE_18__["NzIconPatchService"]]], {
        nzType: [0, "nzType"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, ["\u6DFB\u52A0 Logo "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](44, 0, null, 0, 12, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](45, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](46, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](47, 0, null, 0, 9, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](48, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"],
        nzOffset: [1, "nzOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](49, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 8, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](51, 0, null, 0, 5, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.deleteSelection() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](52, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](53, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](54, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 9, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u5220\u9664\u9009\u4E2D\u5143\u7D20 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](57, 0, null, 0, 12, "nz-form-item", [], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](58, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](59, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](60, 0, null, 0, 9, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](61, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"],
        nzOffset: [1, "nzOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](62, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 10, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](64, 0, null, 0, 5, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.addTextItem() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](65, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](66, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](67, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 11, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u6DFB\u52A0\u6587\u5B57 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](70, 0, null, 0, 12, "nz-form-item", [["class", "border-item"]], [[2, "ant-row", null], [2, "ant-row-top", null], [2, "ant-row-middle", null], [2, "ant-row-bottom", null], [2, "ant-row-start", null], [2, "ant-row-end", null], [2, "ant-row-center", null], [2, "ant-row-space-around", null], [2, "ant-row-space-between", null], [2, "ant-form-item-has-success", null], [2, "ant-form-item-has-warning", null], [2, "ant-form-item-has-error", null], [2, "ant-form-item-is-validating", null], [2, "ant-form-item-has-feedback", null], [2, "ant-form-item-with-help", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormItemComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormItemComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](71, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_3__["MediaMatcher"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_4__["Platform"], ng_zorro_antd_core_services__WEBPACK_IMPORTED_MODULE_5__["NzBreakpointService"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](72, 180224, null, 0, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](73, 0, null, 0, 9, "nz-form-control", [], [[4, "flex", null]], null, null, _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["View_NzFormControlComponent_0"], _node_modules_ng_zorro_antd_form_ng_zorro_antd_form_ngfactory__WEBPACK_IMPORTED_MODULE_9__["RenderType_NzFormControlComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](74, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"],
        nzOffset: [1, "nzOffset"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](75, 1818624, null, 1, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormControlComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_form__WEBPACK_IMPORTED_MODULE_10__["NzFormItemComponent"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_i18n__WEBPACK_IMPORTED_MODULE_11__["NzI18nService"], [8, null]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 12, {
        defaultValidateControl: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](77, 0, null, 0, 5, "button", [["nz-button", ""], ["nzType", "primary"]], [[2, "ant-btn", null], [2, "ant-btn-primary", null], [2, "ant-btn-dashed", null], [2, "ant-btn-link", null], [2, "ant-btn-danger", null], [2, "ant-btn-circle", null], [2, "ant-btn-round", null], [2, "ant-btn-lg", null], [2, "ant-btn-sm", null], [2, "ant-btn-dangerous", null], [2, "ant-btn-loading", null], [2, "ant-btn-background-ghost", null], [2, "ant-btn-block", null], [2, "ant-input-search-button", null], [1, "tabindex", 0], [1, "disabled", 0]], [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).haltDisabledEvents($event) !== false;
          ad = pd_0 && ad;
        }

        if ("click" === en) {
          var pd_1 = _co.savePoster() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["View_NzButtonComponent_0"], _node_modules_ng_zorro_antd_button_ng_zorro_antd_button_ngfactory__WEBPACK_IMPORTED_MODULE_13__["RenderType_NzButtonComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](78, 4734976, null, 0, ng_zorro_antd_core_transition_patch__WEBPACK_IMPORTED_MODULE_14__["ɵNzTransitionPatchDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](79, 212992, null, 0, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NzWaveDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_core_wave__WEBPACK_IMPORTED_MODULE_15__["NZ_WAVE_GLOBAL_CONFIG"]], [2, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_16__["ANIMATION_MODULE_TYPE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](80, 5947392, null, 1, ng_zorro_antd_button__WEBPACK_IMPORTED_MODULE_17__["NzButtonComponent"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"]], {
        nzType: [0, "nzType"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 13, {
        nzIconDirectiveElement: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, 0, [" \u4FDD\u5B58\u6D77\u62A5 "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](83, 0, null, null, 8, "div", [["nz-col", ""], ["nzSpan", "9"]], [[4, "flex", null]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](84, 4931584, null, 0, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzColDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, ng_zorro_antd_grid__WEBPACK_IMPORTED_MODULE_2__["NzRowDirective"]], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"]], {
        nzSpan: [0, "nzSpan"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](85, 0, null, null, 6, "nz-card", [["nzTitle", "\u9884\u89C8\u56FE"]], [[2, "ant-card", null], [2, "ant-card-loading", null], [2, "ant-card-bordered", null], [2, "ant-card-hoverable", null], [2, "ant-card-small", null], [2, "ant-card-contain-grid", null], [2, "ant-card-type-inner", null], [2, "ant-card-contain-tabs", null]], null, null, _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_NzCardComponent_0"], _node_modules_ng_zorro_antd_card_ng_zorro_antd_card_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_NzCardComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](86, 180224, null, 2, ng_zorro_antd_card__WEBPACK_IMPORTED_MODULE_7__["NzCardComponent"], [ng_zorro_antd_core_config__WEBPACK_IMPORTED_MODULE_8__["NzConfigService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        nzTitle: [0, "nzTitle"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 14, {
        listOfNzCardTabComponent: 0
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](603979776, 15, {
        listOfNzCardGridDirective: 1
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](89, 0, null, 0, 2, "app-fabric-canvas", [], null, null, null, _fabric_canvas_fabric_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["View_FabricCanvasComponent_0"], _fabric_canvas_fabric_canvas_component_ngfactory__WEBPACK_IMPORTED_MODULE_19__["RenderType_FabricCanvasComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](90, 4308992, [[2, 4], ["childCanvas", 4]], 0, _fabric_canvas_fabric_canvas_component__WEBPACK_IMPORTED_MODULE_20__["FabricCanvasComponent"], [_service_canvas_service__WEBPACK_IMPORTED_MODULE_21__["CanvasService"]], {
        logo: [0, "logo"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_22__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])], function (_ck, _v) {
        var _co = _v.component;

        _ck(_v, 4, 0);

        var currVal_10 = "15";

        _ck(_v, 6, 0, currVal_10);

        var currVal_19 = "\u6D77\u62A5\u914D\u7F6E";

        _ck(_v, 8, 0, currVal_19);

        _ck(_v, 12, 0);

        _ck(_v, 16, 0);

        var currVal_51 = 6;

        _ck(_v, 19, 0, currVal_51);

        var currVal_52 = "poster-logo";

        _ck(_v, 20, 0, currVal_52);

        var currVal_54 = 8;

        _ck(_v, 23, 0, currVal_54);

        _ck(_v, 24, 0);

        _ck(_v, 29, 0);

        var currVal_74 = 8;
        var currVal_75 = 6;

        _ck(_v, 32, 0, currVal_74, currVal_75);

        _ck(_v, 33, 0);

        _ck(_v, 37, 0);

        var currVal_92 = "primary";

        _ck(_v, 38, 0, currVal_92);

        var currVal_94 = "upload";

        _ck(_v, 42, 0, currVal_94);

        _ck(_v, 45, 0);

        var currVal_111 = 8;
        var currVal_112 = 6;

        _ck(_v, 48, 0, currVal_111, currVal_112);

        _ck(_v, 49, 0);

        _ck(_v, 53, 0);

        var currVal_129 = "primary";

        _ck(_v, 54, 0, currVal_129);

        _ck(_v, 58, 0);

        var currVal_146 = 8;
        var currVal_147 = 6;

        _ck(_v, 61, 0, currVal_146, currVal_147);

        _ck(_v, 62, 0);

        _ck(_v, 66, 0);

        var currVal_164 = "primary";

        _ck(_v, 67, 0, currVal_164);

        _ck(_v, 71, 0);

        var currVal_181 = 8;
        var currVal_182 = 6;

        _ck(_v, 74, 0, currVal_181, currVal_182);

        _ck(_v, 75, 0);

        _ck(_v, 79, 0);

        var currVal_199 = "primary";

        _ck(_v, 80, 0, currVal_199);

        var currVal_201 = "9";

        _ck(_v, 84, 0, currVal_201);

        var currVal_210 = "\u9884\u89C8\u56FE";

        _ck(_v, 86, 0, currVal_210);

        var currVal_211 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 90, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 91).transform(_co.logoUrl$));

        _ck(_v, 90, 0, currVal_211);
      }, function (_ck, _v) {
        var currVal_0 = true;
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "top";
        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "middle";
        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzAlign === "bottom";
        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "start";
        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "end";
        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "center";
        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "space-around";
        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 4).nzJustify === "space-between";

        _ck(_v, 3, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 6).hostFlexStyle;

        _ck(_v, 5, 0, currVal_9);

        var currVal_11 = true;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzLoading;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzBordered;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzHoverable;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzSize === "small";

        var currVal_16 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardGridDirective && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardGridDirective.length;

        var currVal_17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).nzType === "inner";
        var currVal_18 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 8).listOfNzCardTabComponent;

        _ck(_v, 7, 0, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15, currVal_16, currVal_17, currVal_18);

        var currVal_20 = true;
        var currVal_21 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzAlign === "top";
        var currVal_22 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzAlign === "middle";
        var currVal_23 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzAlign === "bottom";
        var currVal_24 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "start";
        var currVal_25 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "end";
        var currVal_26 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "center";
        var currVal_27 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "space-around";
        var currVal_28 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 12).nzJustify === "space-between";
        var currVal_29 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).status === "success";
        var currVal_30 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).status === "warning";
        var currVal_31 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).status === "error";
        var currVal_32 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).status === "validating";

        var currVal_33 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).status;

        var currVal_34 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).withHelpClass;

        _ck(_v, 11, 1, [currVal_20, currVal_21, currVal_22, currVal_23, currVal_24, currVal_25, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32, currVal_33, currVal_34]);

        var currVal_35 = true;
        var currVal_36 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzAlign === "top";
        var currVal_37 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzAlign === "middle";
        var currVal_38 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzAlign === "bottom";
        var currVal_39 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzJustify === "start";
        var currVal_40 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzJustify === "end";
        var currVal_41 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzJustify === "center";
        var currVal_42 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzJustify === "space-around";
        var currVal_43 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 16).nzJustify === "space-between";
        var currVal_44 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).status === "success";
        var currVal_45 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).status === "warning";
        var currVal_46 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).status === "error";
        var currVal_47 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).status === "validating";

        var currVal_48 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).status;

        var currVal_49 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).withHelpClass;

        _ck(_v, 15, 1, [currVal_35, currVal_36, currVal_37, currVal_38, currVal_39, currVal_40, currVal_41, currVal_42, currVal_43, currVal_44, currVal_45, currVal_46, currVal_47, currVal_48, currVal_49]);

        var currVal_50 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 19).hostFlexStyle;

        _ck(_v, 18, 0, currVal_50);

        var currVal_53 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 23).hostFlexStyle;

        _ck(_v, 22, 0, currVal_53);

        var currVal_55 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).disabled;

        var currVal_56 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzSize === "large";
        var currVal_57 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 27).nzSize === "small";

        _ck(_v, 26, 0, currVal_55, currVal_56, currVal_57);

        var currVal_58 = true;
        var currVal_59 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzAlign === "top";
        var currVal_60 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzAlign === "middle";
        var currVal_61 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzAlign === "bottom";
        var currVal_62 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzJustify === "start";
        var currVal_63 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzJustify === "end";
        var currVal_64 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzJustify === "center";
        var currVal_65 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzJustify === "space-around";
        var currVal_66 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 29).nzJustify === "space-between";
        var currVal_67 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).status === "success";
        var currVal_68 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).status === "warning";
        var currVal_69 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).status === "error";
        var currVal_70 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).status === "validating";

        var currVal_71 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).status;

        var currVal_72 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 30).withHelpClass;

        _ck(_v, 28, 1, [currVal_58, currVal_59, currVal_60, currVal_61, currVal_62, currVal_63, currVal_64, currVal_65, currVal_66, currVal_67, currVal_68, currVal_69, currVal_70, currVal_71, currVal_72]);

        var currVal_73 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 32).hostFlexStyle;

        _ck(_v, 31, 0, currVal_73);

        var currVal_76 = true;
        var currVal_77 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzType === "primary";
        var currVal_78 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzType === "dashed";
        var currVal_79 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzType === "link";
        var currVal_80 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzType === "danger";
        var currVal_81 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzShape === "circle";
        var currVal_82 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzShape === "round";
        var currVal_83 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzSize === "large";
        var currVal_84 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzSize === "small";

        var currVal_85 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzDanger;

        var currVal_86 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzLoading;

        var currVal_87 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzGhost;

        var currVal_88 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzBlock;

        var currVal_89 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).nzSearch;

        var currVal_90 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).tabIndex;
        var currVal_91 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 38).disabled || null;

        _ck(_v, 35, 1, [currVal_76, currVal_77, currVal_78, currVal_79, currVal_80, currVal_81, currVal_82, currVal_83, currVal_84, currVal_85, currVal_86, currVal_87, currVal_88, currVal_89, currVal_90, currVal_91]);

        var currVal_93 = true;

        _ck(_v, 40, 0, currVal_93);

        var currVal_95 = true;
        var currVal_96 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzAlign === "top";
        var currVal_97 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzAlign === "middle";
        var currVal_98 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzAlign === "bottom";
        var currVal_99 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzJustify === "start";
        var currVal_100 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzJustify === "end";
        var currVal_101 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzJustify === "center";
        var currVal_102 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzJustify === "space-around";
        var currVal_103 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 45).nzJustify === "space-between";
        var currVal_104 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).status === "success";
        var currVal_105 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).status === "warning";
        var currVal_106 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).status === "error";
        var currVal_107 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).status === "validating";

        var currVal_108 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).status;

        var currVal_109 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 46).withHelpClass;

        _ck(_v, 44, 1, [currVal_95, currVal_96, currVal_97, currVal_98, currVal_99, currVal_100, currVal_101, currVal_102, currVal_103, currVal_104, currVal_105, currVal_106, currVal_107, currVal_108, currVal_109]);

        var currVal_110 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 48).hostFlexStyle;

        _ck(_v, 47, 0, currVal_110);

        var currVal_113 = true;
        var currVal_114 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzType === "primary";
        var currVal_115 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzType === "dashed";
        var currVal_116 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzType === "link";
        var currVal_117 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzType === "danger";
        var currVal_118 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzShape === "circle";
        var currVal_119 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzShape === "round";
        var currVal_120 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzSize === "large";
        var currVal_121 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzSize === "small";

        var currVal_122 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzDanger;

        var currVal_123 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzLoading;

        var currVal_124 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzGhost;

        var currVal_125 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzBlock;

        var currVal_126 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).nzSearch;

        var currVal_127 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).tabIndex;
        var currVal_128 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 54).disabled || null;

        _ck(_v, 51, 1, [currVal_113, currVal_114, currVal_115, currVal_116, currVal_117, currVal_118, currVal_119, currVal_120, currVal_121, currVal_122, currVal_123, currVal_124, currVal_125, currVal_126, currVal_127, currVal_128]);

        var currVal_130 = true;
        var currVal_131 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzAlign === "top";
        var currVal_132 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzAlign === "middle";
        var currVal_133 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzAlign === "bottom";
        var currVal_134 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzJustify === "start";
        var currVal_135 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzJustify === "end";
        var currVal_136 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzJustify === "center";
        var currVal_137 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzJustify === "space-around";
        var currVal_138 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 58).nzJustify === "space-between";
        var currVal_139 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).status === "success";
        var currVal_140 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).status === "warning";
        var currVal_141 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).status === "error";
        var currVal_142 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).status === "validating";

        var currVal_143 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).status;

        var currVal_144 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 59).withHelpClass;

        _ck(_v, 57, 1, [currVal_130, currVal_131, currVal_132, currVal_133, currVal_134, currVal_135, currVal_136, currVal_137, currVal_138, currVal_139, currVal_140, currVal_141, currVal_142, currVal_143, currVal_144]);

        var currVal_145 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 61).hostFlexStyle;

        _ck(_v, 60, 0, currVal_145);

        var currVal_148 = true;
        var currVal_149 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzType === "primary";
        var currVal_150 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzType === "dashed";
        var currVal_151 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzType === "link";
        var currVal_152 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzType === "danger";
        var currVal_153 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzShape === "circle";
        var currVal_154 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzShape === "round";
        var currVal_155 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzSize === "large";
        var currVal_156 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzSize === "small";

        var currVal_157 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzDanger;

        var currVal_158 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzLoading;

        var currVal_159 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzGhost;

        var currVal_160 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzBlock;

        var currVal_161 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).nzSearch;

        var currVal_162 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).tabIndex;
        var currVal_163 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 67).disabled || null;

        _ck(_v, 64, 1, [currVal_148, currVal_149, currVal_150, currVal_151, currVal_152, currVal_153, currVal_154, currVal_155, currVal_156, currVal_157, currVal_158, currVal_159, currVal_160, currVal_161, currVal_162, currVal_163]);

        var currVal_165 = true;
        var currVal_166 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzAlign === "top";
        var currVal_167 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzAlign === "middle";
        var currVal_168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzAlign === "bottom";
        var currVal_169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzJustify === "start";
        var currVal_170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzJustify === "end";
        var currVal_171 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzJustify === "center";
        var currVal_172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzJustify === "space-around";
        var currVal_173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 71).nzJustify === "space-between";
        var currVal_174 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).status === "success";
        var currVal_175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).status === "warning";
        var currVal_176 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).status === "error";
        var currVal_177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).status === "validating";

        var currVal_178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).hasFeedback && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).status;

        var currVal_179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 72).withHelpClass;

        _ck(_v, 70, 1, [currVal_165, currVal_166, currVal_167, currVal_168, currVal_169, currVal_170, currVal_171, currVal_172, currVal_173, currVal_174, currVal_175, currVal_176, currVal_177, currVal_178, currVal_179]);

        var currVal_180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 74).hostFlexStyle;

        _ck(_v, 73, 0, currVal_180);

        var currVal_183 = true;
        var currVal_184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzType === "primary";
        var currVal_185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzType === "dashed";
        var currVal_186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzType === "link";
        var currVal_187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzType === "danger";
        var currVal_188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzShape === "circle";
        var currVal_189 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzShape === "round";
        var currVal_190 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzSize === "large";
        var currVal_191 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzSize === "small";

        var currVal_192 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzDanger;

        var currVal_193 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzLoading;

        var currVal_194 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzGhost;

        var currVal_195 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzBlock;

        var currVal_196 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).nzSearch;

        var currVal_197 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).disabled ? 0 - 1 : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).tabIndex === null ? null : _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).tabIndex;
        var currVal_198 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 80).disabled || null;

        _ck(_v, 77, 1, [currVal_183, currVal_184, currVal_185, currVal_186, currVal_187, currVal_188, currVal_189, currVal_190, currVal_191, currVal_192, currVal_193, currVal_194, currVal_195, currVal_196, currVal_197, currVal_198]);

        var currVal_200 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 84).hostFlexStyle;

        _ck(_v, 83, 0, currVal_200);

        var currVal_202 = true;

        var currVal_203 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).nzLoading;

        var currVal_204 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).nzBordered;

        var currVal_205 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).nzHoverable;

        var currVal_206 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).nzSize === "small";

        var currVal_207 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).listOfNzCardGridDirective && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).listOfNzCardGridDirective.length;

        var currVal_208 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).nzType === "inner";
        var currVal_209 = !!_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 86).listOfNzCardTabComponent;

        _ck(_v, 85, 0, currVal_202, currVal_203, currVal_204, currVal_205, currVal_206, currVal_207, currVal_208, currVal_209);
      });
    }

    function View_PosterInFabricComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-poster-in-fabric", [], null, null, null, View_PosterInFabricComponent_0, RenderType_PosterInFabricComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_23__["PosterInFabricComponent"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_24__["DomSanitizer"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PosterInFabricComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-poster-in-fabric", _poster_in_fabric_component__WEBPACK_IMPORTED_MODULE_23__["PosterInFabricComponent"], View_PosterInFabricComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/component/poster-in-fabric/poster-in-fabric.component.scss.shim.ngstyle.js":
  /*!********************************************************************************************!*\
    !*** ./src/app/component/poster-in-fabric/poster-in-fabric.component.scss.shim.ngstyle.js ***!
    \********************************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentPosterInFabricPosterInFabricComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   .inner-content[_ngcontent-%COMP%] {\n  background: #fff;\n  height: 100%;\n  box-sizing: border-box;\n}\n[_nghost-%COMP%]   .inner-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  height: 100%;\n}\n[_nghost-%COMP%]   .inner-content[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   nz-card[_ngcontent-%COMP%] {\n  overflow-y: scroll;\n  height: 100%;\n}\n[_nghost-%COMP%]   .inner-content[_ngcontent-%COMP%]   .border-item[_ngcontent-%COMP%] {\n  border-top: 1px solid #f0f0f0;\n  padding-top: 24px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tZmFicmljL3Bvc3Rlci1pbi1mYWJyaWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tZmFicmljL3Bvc3Rlci1pbi1mYWJyaWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtBQ0FKO0FERUk7RUFDRSxZQUFBO0FDQU47QURFTTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0FSO0FESUk7RUFDRSw2QkFBQTtFQUNBLGlCQUFBO0FDRk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcG9zdGVyLWluLWZhYnJpYy9wb3N0ZXItaW4tZmFicmljLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuaW5uZXItY29udGVudCB7XG4gICAgYmFja2dyb3VuZDogI2ZmZjtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAgIGRpdiB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG5cbiAgICAgIG56LWNhcmQge1xuICAgICAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuYm9yZGVyLWl0ZW0ge1xuICAgICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNmMGYwZjA7XG4gICAgICBwYWRkaW5nLXRvcDogMjRweDtcbiAgICB9XG4gIH1cbn1cbiIsIjpob3N0IC5pbm5lci1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZjtcbiAgaGVpZ2h0OiAxMDAlO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuOmhvc3QgLmlubmVyLWNvbnRlbnQgZGl2IHtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuOmhvc3QgLmlubmVyLWNvbnRlbnQgZGl2IG56LWNhcmQge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMTAwJTtcbn1cbjpob3N0IC5pbm5lci1jb250ZW50IC5ib3JkZXItaXRlbSB7XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZjBmMGYwO1xuICBwYWRkaW5nLXRvcDogMjRweDtcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/component/poster-in-fabric/poster-in-fabric.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/component/poster-in-fabric/poster-in-fabric.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PosterInFabricComponent */

  /***/
  function srcAppComponentPosterInFabricPosterInFabricComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PosterInFabricComponent", function () {
      return PosterInFabricComponent;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PosterInFabricComponent =
    /*#__PURE__*/
    function () {
      function PosterInFabricComponent(sanitizer) {
        _classCallCheck(this, PosterInFabricComponent);

        this.sanitizer = sanitizer;
        this.logoUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]('');
      }

      _createClass(PosterInFabricComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addLogo",
        value: function addLogo() {
          var _this6 = this;

          var fi = this.logoPathInput.nativeElement;

          if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            var myReader = new FileReader();

            myReader.onloadend = function (loadEvent) {
              var result = loadEvent.target.result;

              _this6.logoUrl$.next(result);
            };

            myReader.readAsDataURL(fileToUpload);
          }
        }
      }, {
        key: "addTextItem",
        value: function addTextItem() {
          this.childCanvas.addObject();
        }
      }, {
        key: "deleteSelection",
        value: function deleteSelection() {
          this.childCanvas.deleteSelections();
        }
      }, {
        key: "savePoster",
        value: function savePoster() {
          var aLink = document.createElement('a');
          aLink.style.display = 'none';
          aLink.href = this.childCanvas.canvas.toDataURL();
          aLink.download = 'poster.png';
          document.body.appendChild(aLink);
          aLink.click();
          document.body.removeChild(aLink);
        }
      }]);

      return PosterInFabricComponent;
    }();
    /***/

  },

  /***/
  "./src/app/component/pure-canvas/pure-canvas.component.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/component/pure-canvas/pure-canvas.component.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: RenderType_PureCanvasComponent, View_PureCanvasComponent_0, View_PureCanvasComponent_Host_0, PureCanvasComponentNgFactory */

  /***/
  function srcAppComponentPureCanvasPureCanvasComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_PureCanvasComponent", function () {
      return RenderType_PureCanvasComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PureCanvasComponent_0", function () {
      return View_PureCanvasComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_PureCanvasComponent_Host_0", function () {
      return View_PureCanvasComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PureCanvasComponentNgFactory", function () {
      return PureCanvasComponentNgFactory;
    });
    /* harmony import */


    var _pure_canvas_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./pure-canvas.component.scss.shim.ngstyle */
    "./src/app/component/pure-canvas/pure-canvas.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _pure_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pure-canvas.component */
    "./src/app/component/pure-canvas/pure-canvas.component.ts");
    /* harmony import */


    var _service_canvas_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../service/canvas.service */
    "./src/app/service/canvas.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_PureCanvasComponent = [_pure_canvas_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_PureCanvasComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_PureCanvasComponent,
      data: {}
    });

    function View_PureCanvasComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](671088640, 1, {
        myCanvas: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, [[1, 0], ["canvasEle", 1]], null, 0, "canvas", [], null, null, null, null, null))], null, null);
    }

    function View_PureCanvasComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-pure-canvas", [], null, null, null, View_PureCanvasComponent_0, RenderType_PureCanvasComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 4308992, null, 0, _pure_canvas_component__WEBPACK_IMPORTED_MODULE_2__["PureCanvasComponent"], [_service_canvas_service__WEBPACK_IMPORTED_MODULE_3__["CanvasService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var PureCanvasComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-pure-canvas", _pure_canvas_component__WEBPACK_IMPORTED_MODULE_2__["PureCanvasComponent"], View_PureCanvasComponent_Host_0, {
      info: "info"
    }, {
      imageChange: "imageChange"
    }, []);
    /***/

  },

  /***/
  "./src/app/component/pure-canvas/pure-canvas.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/component/pure-canvas/pure-canvas.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppComponentPureCanvasPureCanvasComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["[_nghost-%COMP%]   canvas[_ngcontent-%COMP%] {\n  width: 100%;\n  height: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2NvbXBvbmVudC9wdXJlLWNhbnZhcy9wdXJlLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3B1cmUtY2FudmFzL3B1cmUtY2FudmFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNBSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9wdXJlLWNhbnZhcy9wdXJlLWNhbnZhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0IHtcbiAgY2FudmFzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gIH1cbn1cbiIsIjpob3N0IGNhbnZhcyB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IGF1dG87XG59Il19 */"];
    /***/
  },

  /***/
  "./src/app/component/pure-canvas/pure-canvas.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/component/pure-canvas/pure-canvas.component.ts ***!
    \****************************************************************/

  /*! exports provided: PureCanvasComponent */

  /***/
  function srcAppComponentPureCanvasPureCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PureCanvasComponent", function () {
      return PureCanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var PureCanvasComponent =
    /*#__PURE__*/
    function () {
      function PureCanvasComponent(cs) {
        _classCallCheck(this, PureCanvasComponent);

        this.cs = cs;
        this.CANVAS_WIDTH = 750;
        this.CANVAS_HEIGHT = 1240;
        this.LOGO_SIZE = 100;
        this.commonStyle = {
          marginLeft: 30,
          marginRight: 30,
          topicMarginTop: 440,
          topicLineheight: 50,
          maxWidth: 690
        };
        this.imageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.dataUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
      }

      _createClass(PureCanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.dataUrl$.subscribe(function (url) {
            return _this7.imageChange.emit(url);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.canvas = this.myCanvas.nativeElement;
          this.context = this.canvas.getContext('2d');

          if (this._data) {
            this.renderBillboard(this._data);
          }
        }
      }, {
        key: "updateDataUrl",
        value: function updateDataUrl(newDataUrl) {
          if (this.dataUrl$.value !== newDataUrl) {
            this.dataUrl$.next(newDataUrl);
          }
        }
      }, {
        key: "renderBillboard",
        value: function renderBillboard(val) {
          var _this8 = this;

          var title = val.title,
              organization = val.organization,
              time = val.time,
              address = val.address,
              vol = val.vol,
              bgColor = val.bgColor,
              topics = val.topics,
              description = val.description,
              logoPath = val.logoPath,
              textColors = val.textColors;

          var _textColors = _slicedToArray(textColors, 3),
              mainContentColor = _textColors[0],
              tagsColor = _textColors[1],
              volColor = _textColors[2];

          var commonConfig = {
            size: 20,
            color: mainContentColor,
            font: 'bold 20px sans-serif',
            textAlign: 'left',
            textBaseline: 'middle'
          };
          var commonStyle = this.commonStyle;
          this.cs.clearCtx(this.context, this.CANVAS_WIDTH, this.CANVAS_HEIGHT, bgColor);
          var realLogo = logoPath || 'assets/github.svg'; //

          this.cs.drawImage(this.context, realLogo, this.CANVAS_WIDTH - this.LOGO_SIZE - commonStyle.marginRight, commonStyle.marginRight, this.LOGO_SIZE, this.LOGO_SIZE, function () {
            _this8.updateDataUrl(_this8.canvas.toDataURL());
          });
          var titleFontsize = 82;
          this.context.font = "bold ".concat(titleFontsize, "px sans-serif");
          var rawTitleWidth = this.context.measureText(title).width;

          if (rawTitleWidth > commonStyle.maxWidth) {
            titleFontsize = 82 / (rawTitleWidth / commonStyle.maxWidth);
          }

          this.cs.fillText(this.context, title, commonStyle.marginLeft, 230, Object.assign(Object.assign({}, commonConfig), {
            size: titleFontsize
          }));
          this.cs.fillText(this.context, organization, commonStyle.marginLeft, 238 + titleFontsize, Object.assign(Object.assign({}, commonConfig), {
            size: Math.max(titleFontsize - 32, commonStyle.topicLineheight / 2),
            color: mainContentColor
          }));

          if (topics) {
            var topicList = topics.split('\n');
            topicList.map(function (topic, index) {
              var topicY = commonStyle.topicMarginTop + commonStyle.topicLineheight * index;

              _this8.cs.fillText(_this8.context, "- ".concat(topic), commonStyle.marginLeft, topicY, Object.assign(Object.assign({}, commonConfig), {
                size: commonStyle.topicLineheight / 2,
                color: mainContentColor
              }));
            });
          }

          if (description) {
            this.cs.fillWrappedText(this.context, description, commonStyle.marginLeft, topics.split('\n').length * commonStyle.topicLineheight + commonStyle.topicMarginTop + 60, this.CANVAS_WIDTH - commonStyle.marginLeft - commonStyle.marginRight, 40);
          }

          this.cs.fillText(this.context, time, commonStyle.marginLeft, this.CANVAS_HEIGHT - 80, Object.assign(Object.assign({}, commonConfig), {
            size: 20,
            color: tagsColor
          }));
          this.cs.fillText(this.context, address, commonStyle.marginLeft, this.CANVAS_HEIGHT - 40, Object.assign(Object.assign({}, commonConfig), {
            size: 20,
            color: tagsColor
          }));
          var volTextMarginRight = this.CANVAS_WIDTH - commonStyle.marginRight - this.LOGO_SIZE - commonStyle.marginRight;
          var volTextMarginTop = commonStyle.marginRight + this.LOGO_SIZE / 2;
          var volFontsize = 20; //

          var volContent = "Vol.".concat(vol, " / \u7B2C").concat(vol, "\u671F");
          this.cs.fillText(this.context, volContent, volTextMarginRight, volTextMarginTop, Object.assign(Object.assign({}, commonConfig), {
            size: volFontsize,
            color: volColor,
            textAlign: 'right'
          }));

          try {
            this.updateDataUrl(this.canvas.toDataURL());
          } catch (error) {
            console.error("[error] ".concat(JSON.stringify(error)));
            this.imageChange.emit(null);
          }
        }
      }, {
        key: "info",
        set: function set(val) {
          this._data = val;

          if (this.context && val) {
            this.renderBillboard(val);
          }
        }
      }]);

      return PureCanvasComponent;
    }();
    /***/

  },

  /***/
  "./src/app/service/canvas.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/service/canvas.service.ts ***!
    \*******************************************/

  /*! exports provided: CanvasService */

  /***/
  function srcAppServiceCanvasServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasService", function () {
      return CanvasService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var CanvasService =
    /*#__PURE__*/
    function () {
      function CanvasService() {
        _classCallCheck(this, CanvasService);
      }
      /**
       * 清空画布
       * @param ctx
       * @param bgColor
       */


      _createClass(CanvasService, [{
        key: "clearCtx",
        value: function clearCtx(ctx, w, h, bgColor) {
          ctx.canvas.width = w;
          ctx.canvas.height = h;
          ctx.fillStyle = bgColor || '#FF4C00';
          ctx.beginPath();
          ctx.fillRect(0, 0, w, h);
          ctx.closePath();
        }
        /**
         * 获取图片的 Base64 编码
         * @param img
         */

      }, {
        key: "getBase64Image",
        value: function getBase64Image(img) {
          var canvas = document.createElement('canvas');
          canvas.width = img.width;
          canvas.height = img.height;
          var ctx = canvas.getContext('2d');
          ctx.drawImage(img, 0, 0);
          var dataURL = canvas.toDataURL('image/png');
          return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
        }
        /**
         * fillText 支持自动换行
         * @param context
         * @param text
         * @param x
         * @param y
         * @param maxWidth
         * @param lineHeight
         * @param wrapWithNewline
         */

      }, {
        key: "fillWrappedText",
        value: function fillWrappedText(context, text, x, y, maxWidth, lineHeight) {
          var wrapWithNewline = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
          var lines = wrapWithNewline ? text.split('\n') : [text];
          context.save();
          context.font = "normal 20px sans-serif";
          lines.map(function (line) {
            var linetext = '';
            var words = line.split('');

            for (var n = 0; n < words.length; n++) {
              var testLine = linetext + words[n];
              var metrics = context.measureText(testLine);
              var testWidth = metrics.width;

              if (testWidth > maxWidth && n > 0) {
                context.fillText(linetext, x, y);
                linetext = words[n];
                y += lineHeight;
              } else {
                linetext = testLine;
              }
            }

            if (linetext) {
              context.fillText(linetext, x, y);
            }

            y += lineHeight;
          });
          context.restore();
        }
        /**
         * 绘制文字
         * @param context
         * @param text
         * @param x
         * @param y
         * @param fontConfig
         */

      }, {
        key: "fillText",
        value: function fillText(context, text, x, y, fontConfig) {
          if (!text || x === undefined || y === undefined) {
            console.error("Lack of necessary parameters.");
          }

          context.fillStyle = fontConfig.color || '#fff';
          context.font = "bold ".concat(fontConfig.size || 20, "px sans-serif");
          context.textAlign = fontConfig.textAlign || 'left';
          context.textBaseline = fontConfig.textBaseline || 'middle';
          context.fillText(text, x, y);
        }
        /**
         * 绘制图像（支持绘制完毕回调）
         * @param context
         * @param file
         * @param x
         * @param y
         * @param w
         * @param h
         * @param callback
         */

      }, {
        key: "drawImage",
        value: function drawImage(context, file, x, y, w, h, callback) {
          var img = new Image();
          img.crossOrigin = 'Anonymous';

          img.onload = function () {
            context.drawImage(img, x, y, w, h);

            try {
              URL.revokeObjectURL(file);
            } catch (error) {}

            callback(img);
          };

          img.onerror = function (err) {
            console.error(err);
          };

          img.src = file;
        }
      }]);

      return CanvasService;
    }();

    CanvasService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function CanvasService_Factory() {
        return new CanvasService();
      },
      token: CanvasService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/utils/operation.ts":
  /*!************************************!*\
    !*** ./src/app/utils/operation.ts ***!
    \************************************/

  /*! exports provided: getImageThemeColor, fullColorHex, hexToRgb, copyText, calcColorType, ɵ0 */

  /***/
  function srcAppUtilsOperationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getImageThemeColor", function () {
      return getImageThemeColor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fullColorHex", function () {
      return fullColorHex;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "hexToRgb", function () {
      return hexToRgb;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "copyText", function () {
      return copyText;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "calcColorType", function () {
      return calcColorType;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵ0", function () {
      return ɵ0;
    }); // tslint:disable: no-bitwise

    /**
     * 获取图片主色调
     * @param imgEl HTMLImageElement
     */


    var getImageThemeColor = function getImageThemeColor(imgEl) {
      // tslint:disable-next-line: one-variable-per-declaration
      var blockSize = 5,
          defaultRGB = {
        r: 0,
        g: 0,
        b: 0
      },
          canvas = document.createElement('canvas'),
          context = canvas.getContext && canvas.getContext('2d'),
          rgb = {
        r: 0,
        g: 0,
        b: 0
      };

      if (!context) {
        return defaultRGB;
      }

      var height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
      var width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;
      context.drawImage(imgEl, 0, 0); // tslint:disable-next-line: one-variable-per-declaration

      var data,
          length,
          i = 16,
          count = 0;

      try {
        data = context.getImageData(0, 0, width, height);
      } catch (e) {
        return defaultRGB;
      }

      length = data.data.length;

      while (i < length) {
        ++count;
        rgb.r += data.data[i];
        rgb.g += data.data[i + 1];
        rgb.b += data.data[i + 2];
        i += blockSize * 4;
      }

      rgb.r = ~~(rgb.r / count);
      rgb.g = ~~(rgb.g / count);
      rgb.b = ~~(rgb.b / count);
      return rgb;
    };

    var rgbToHex = function rgbToHex(rgb) {
      var hex = Number(rgb).toString(16);

      if (hex.length < 2) {
        hex = '0' + hex;
      }

      return hex;
    };

    var ɵ0 = rgbToHex;
    /**
     * rgb to hex 转换
     * @param rgb rgb 对象
     */

    var fullColorHex = function fullColorHex(rgb) {
      var r = rgb.r,
          g = rgb.g,
          b = rgb.b;
      var red = rgbToHex(r);
      var green = rgbToHex(g);
      var blue = rgbToHex(b);
      return '#' + red + green + blue;
    };
    /**
     * hex to rgb 转换
     * @param hex hex color 字符串
     */


    var hexToRgb = function hexToRgb(hex) {
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    };
    /**
     * 复制文本
     * @param id DOM ID
     */


    var copyText = function copyText(id) {
      var rgb = document.getElementById(id).innerText;
      var oInput = document.getElementById('copy-text-container') || document.createElement('input');
      oInput.id = 'copy-text-container';
      oInput.value = rgb;
      document.body.appendChild(oInput);
      oInput.select(); // 选择对象

      document.execCommand('Copy'); // 执行浏览器复制命令

      oInput.style.display = 'none';
    };
    /**
     * 计算颜色深浅
     * @param color 支持 rgb 对象和 hex 字符串
     */


    var calcColorType = function calcColorType(color) {
      var rgb = color.r && color.g && color.b ? color : hexToRgb(color);
      var r = rgb.r,
          g = rgb.g,
          b = rgb.b;

      if (r * 0.299 + g * 0.578 + b * 0.114 >= 192) {
        // 浅色
        return 0;
      } else {
        // 深色
        return 1;
      }
    };
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])["catch"](function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /Users/hijiangtao/Documents/git/study/canvas-billboard/src/main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!***********************!*\
    !*** jsdom (ignored) ***!
    \***********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  2:
  /*!********************************************************!*\
    !*** jsdom/lib/jsdom/living/generated/utils (ignored) ***!
    \********************************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  },

  /***/
  3:
  /*!***************************************!*\
    !*** jsdom/lib/jsdom/utils (ignored) ***!
    \***************************************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map