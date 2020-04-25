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

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./component/poster-in-canvas/poster-in-canvas.component */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.ts");

    var routes = [{
      path: '',
      redirectTo: 'poster-in-canvas',
      pathMatch: 'full'
    }, {
      path: 'poster-in-canvas',
      component: _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_2__["PosterInCanvasComponent"],
      data: {
        title: 'Poster In Canvas'
      }
    }, {
      path: 'poster-in-dom',
      redirectTo: 'poster-in-canvas',
      pathMatch: 'full',
      data: {
        title: 'Poster In DOM'
      }
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
        preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
        enableTracing: true
      })], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes, {
            preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_1__["PreloadAllModules"],
            enableTracing: true
          })],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

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

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)();
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      decls: 8,
      vars: 1,
      consts: [["role", "banner", 1, "toolbar"], [1, "spacer"], ["aria-label", "Info on Github", "target", "_blank", "rel", "noopener", "href", "https://github.com/hijiangtao/billboard-generator", "title", "GitHub"], ["src", "assets/github.svg", "id", "github-icon"], ["role", "main", 1, "content"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "router-outlet");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.title);
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]],
      styles: ["[_nghost-%COMP%] {\n  font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  font-size: 14px;\n  color: #333;\n  box-sizing: border-box;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n\n.spacer[_ngcontent-%COMP%] {\n  flex: 1;\n}\n\n.form[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n}\n\n.form[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-bottom: 5px;\n}\n\n.toolbar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  background-color: #1976d2;\n  color: white;\n  font-weight: 600;\n}\n\n.toolbar[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #github-icon[_ngcontent-%COMP%] {\n  height: 40px;\n  margin: 0 16px;\n}\n\n.toolbar[_ngcontent-%COMP%]   #github-icon[_ngcontent-%COMP%]:hover {\n  opacity: 0.8;\n}\n\n.content[_ngcontent-%COMP%] {\n  display: flex;\n  margin: 82px auto 32px;\n  padding: 0 16px;\n  max-width: 960px;\n  flex-direction: column;\n  align-items: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEpBQUE7RUFFQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBQ0FGOztBREdBO0VBQ0UsT0FBQTtBQ0FGOztBREdBO0VBQ0UsbUJBQUE7QUNBRjs7QURFRTtFQUNFLGtCQUFBO0FDQUo7O0FESUE7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQ0RGOztBREdFO0VBQ0UsaUJBQUE7QUNESjs7QURLQTtFQUNFLFlBQUE7RUFDQSxjQUFBO0FDRkY7O0FES0E7RUFDRSxZQUFBO0FDRkY7O0FES0E7RUFDRSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0FDRkYiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsICdTZWdvZSBVSScsIFJvYm90bywgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZiwgJ0FwcGxlIENvbG9yIEVtb2ppJyxcbiAgICAnU2Vnb2UgVUkgRW1vamknLCAnU2Vnb2UgVUkgU3ltYm9sJztcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogIzMzMztcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG5cbiAgbGFiZWwge1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgfVxufVxuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgc3BhbiB7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIH1cbn1cblxuLnRvb2xiYXIgI2dpdGh1Yi1pY29uIHtcbiAgaGVpZ2h0OiA0MHB4O1xuICBtYXJnaW46IDAgMTZweDtcbn1cblxuLnRvb2xiYXIgI2dpdGh1Yi1pY29uOmhvdmVyIHtcbiAgb3BhY2l0eTogMC44O1xufVxuXG4uY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogODJweCBhdXRvIDMycHg7XG4gIHBhZGRpbmc6IDAgMTZweDtcbiAgbWF4LXdpZHRoOiA5NjBweDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbiIsIjpob3N0IHtcbiAgZm9udC1mYW1pbHk6IC1hcHBsZS1zeXN0ZW0sIEJsaW5rTWFjU3lzdGVtRm9udCwgXCJTZWdvZSBVSVwiLCBSb2JvdG8sIEhlbHZldGljYSwgQXJpYWwsIHNhbnMtc2VyaWYsIFwiQXBwbGUgQ29sb3IgRW1vamlcIiwgXCJTZWdvZSBVSSBFbW9qaVwiLCBcIlNlZ29lIFVJIFN5bWJvbFwiO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiAjMzMzO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuLnNwYWNlciB7XG4gIGZsZXg6IDE7XG59XG5cbi5mb3JtIHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5mb3JtIGxhYmVsIHtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4udG9vbGJhciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICByaWdodDogMDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTk3NmQyO1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4udG9vbGJhciBzcGFuIHtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG59XG5cbi50b29sYmFyICNnaXRodWItaWNvbiB7XG4gIGhlaWdodDogNDBweDtcbiAgbWFyZ2luOiAwIDE2cHg7XG59XG5cbi50b29sYmFyICNnaXRodWItaWNvbjpob3ZlciB7XG4gIG9wYWNpdHk6IDAuODtcbn1cblxuLmNvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDgycHggYXV0byAzMnB4O1xuICBwYWRkaW5nOiAwIDE2cHg7XG4gIG1heC13aWR0aDogOTYwcHg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _component_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./component/canvas/canvas.component */
    "./src/app/component/canvas/canvas.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./component/poster-in-canvas/poster-in-canvas.component */
    "./src/app/component/poster-in-canvas/poster-in-canvas.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"], _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_7__["PosterInCanvasComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _component_canvas_canvas_component__WEBPACK_IMPORTED_MODULE_4__["CanvasComponent"], _component_poster_in_canvas_poster_in_canvas_component__WEBPACK_IMPORTED_MODULE_7__["PosterInCanvasComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
          providers: [],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/component/canvas/canvas.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/component/canvas/canvas.component.ts ***!
    \******************************************************/

  /*! exports provided: CanvasComponent */

  /***/
  function srcAppComponentCanvasCanvasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CanvasComponent", function () {
      return CanvasComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var _c0 = ["canvasEle"];

    var CanvasComponent =
    /*#__PURE__*/
    function () {
      function CanvasComponent() {
        _classCallCheck(this, CanvasComponent);

        this.CANVAS_WIDTH = 750;
        this.CANVAS_HEIGHT = 1240;
        this.LOGO_SIZE = 100;
        this.commonStyle = {
          marginLeft: 30,
          marginRight: 30,
          topicMarginTop: 440,
          topicLineheight: 50
        };
        this.onImageChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
      }

      _createClass(CanvasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
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
        key: "renderBillboard",
        value: function renderBillboard(val) {
          var _this = this;

          var title = val.title,
              organization = val.organization,
              time = val.time,
              address = val.address,
              vol = val.vol,
              bgColor = val.bgColor,
              topics = val.topics,
              description = val.description,
              logoPath = val.logoPath;
          var commonConfig = {
            size: 20,
            color: '#fff',
            font: 'bold 20px sans-serif',
            textAlign: 'left',
            textBaseline: 'middle'
          };
          var commonStyle = this.commonStyle;
          this.clearCanvas(this.context, bgColor);
          var realLogo = logoPath || 'assets/github.svg'; //

          this.drawLogo(realLogo, this.CANVAS_WIDTH - this.LOGO_SIZE - commonStyle.marginRight, commonStyle.marginRight);
          this.drawTextItem(title, commonStyle.marginLeft, 230, Object.assign(Object.assign({}, commonConfig), {
            size: 82
          }));
          this.drawTextItem(organization, commonStyle.marginLeft, 320, Object.assign(Object.assign({}, commonConfig), {
            size: 50,
            color: '#eee'
          }));

          if (topics) {
            var topicList = topics.split('\n');
            topicList.map(function (topic, index) {
              var topicY = commonStyle.topicMarginTop + commonStyle.topicLineheight * index;

              _this.drawTextItem("- ".concat(topic), commonStyle.marginLeft, topicY, Object.assign(Object.assign({}, commonConfig), {
                size: commonStyle.topicLineheight / 2
              }));
            });
          }

          if (description) {
            this.wrapText(this.context, description, commonStyle.marginLeft, topics.split('\n').length * commonStyle.topicLineheight + commonStyle.topicMarginTop + 60, this.CANVAS_WIDTH - commonStyle.marginLeft - commonStyle.marginRight, 40);
          }

          this.drawTextItem(time, commonStyle.marginLeft, this.CANVAS_HEIGHT - 80, Object.assign(Object.assign({}, commonConfig), {
            size: 20,
            color: '#000'
          }));
          this.drawTextItem(address, commonStyle.marginLeft, this.CANVAS_HEIGHT - 40, Object.assign(Object.assign({}, commonConfig), {
            size: 20,
            color: '#000'
          }));
          var volTextMarginRight = this.CANVAS_WIDTH - commonStyle.marginRight - this.LOGO_SIZE - commonStyle.marginRight;
          var volTextMarginTop = commonStyle.marginRight + this.LOGO_SIZE / 2;
          var volFontsize = 20;
          this.drawTextItem(vol, volTextMarginRight, volTextMarginTop, Object.assign(Object.assign({}, commonConfig), {
            size: volFontsize,
            color: '#f4ea2a',
            textAlign: 'right'
          }));

          try {
            this.onImageChange.emit(this.canvas.toDataURL());
          } catch (error) {
            console.error("[error] ".concat(JSON.stringify(error)));
            this.onImageChange.emit(null);
          }
        }
      }, {
        key: "drawTextItem",
        value: function drawTextItem(text, x, y, fontConfig) {
          if (!text || x === undefined || y === undefined) {
            console.error("Lack of necessary parameters.");
          }

          this.context.fillStyle = fontConfig.color || '#fff';
          this.context.font = "bold ".concat(fontConfig.size || 20, "px sans-serif");
          this.context.textAlign = fontConfig.textAlign || 'left';
          this.context.textBaseline = fontConfig.textBaseline || 'middle';
          this.context.fillText(text, x, y);
        }
      }, {
        key: "drawLogo",
        value: function drawLogo(file, x, y) {
          var _this2 = this;

          var img = new Image();
          img.crossOrigin = 'Anonymous';

          img.onload = function () {
            _this2.context.drawImage(img, x, y, _this2.LOGO_SIZE, _this2.LOGO_SIZE);
          };

          img.onerror = function (err) {
            console.error(err);
          };

          img.src = file;
        }
      }, {
        key: "clearCanvas",
        value: function clearCanvas(ctx, bgColor) {
          ctx.fillStyle = bgColor || '#FF4C00';
          ctx.beginPath();
          ctx.fillRect(0, 0, this.CANVAS_WIDTH, this.CANVAS_HEIGHT);
          ctx.closePath();
        }
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
      }, {
        key: "wrapText",
        value: function wrapText(context, text, x, y, maxWidth, lineHeight) {
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
      }, {
        key: "info",
        set: function set(val) {
          this._data = val;

          if (this.context && val) {
            this.renderBillboard(val);
          }
        }
      }]);

      return CanvasComponent;
    }();

    CanvasComponent.ɵfac = function CanvasComponent_Factory(t) {
      return new (t || CanvasComponent)();
    };

    CanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CanvasComponent,
      selectors: [["app-canvas"]],
      viewQuery: function CanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.myCanvas = _t.first);
        }
      },
      inputs: {
        info: "info"
      },
      outputs: {
        onImageChange: "onImageChange"
      },
      decls: 2,
      vars: 2,
      consts: [[3, "width", "height"], ["canvasEle", ""]],
      template: function CanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "canvas", 0, 1);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx.CANVAS_WIDTH)("height", ctx.CANVAS_HEIGHT);
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jYW52YXMvY2FudmFzLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-canvas',
          templateUrl: './canvas.component.html',
          styleUrls: ['./canvas.component.scss']
        }]
      }], function () {
        return [];
      }, {
        info: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }],
        onImageChange: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }],
        myCanvas: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['canvasEle', {
            "static": false
          }]
        }]
      });
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../canvas/canvas.component */
    "./src/app/component/canvas/canvas.component.ts");

    var _c0 = ["fileInput"];

    function PosterInCanvasComponent_ng_container_34_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u70B9\u51FB\u4E0B\u8F7D\u6D77\u62A5");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var imgUrl_r2 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", imgUrl_r2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
      }
    }

    var PosterInCanvasComponent =
    /*#__PURE__*/
    function () {
      function PosterInCanvasComponent(fb, cdRef) {
        _classCallCheck(this, PosterInCanvasComponent);

        this.fb = fb;
        this.cdRef = cdRef;
        this.imgUrl$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
      }

      _createClass(PosterInCanvasComponent, [{
        key: "updateStore",
        value: function updateStore(val) {
          var formDataValue = Object.assign(Object.assign({}, this.billboardData), val);
          this.billboardData = formDataValue;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.billboardForm = this.fb.group({
            title: ['分享会主题名称', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            organization: ['服务平台前端小组', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            time: ['2020年1月1日', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            address: ['北京·阜通·608会议室', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            vol: ['Vol.X / 第X期', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            topics: ['新人介绍与欢迎环节 (5min)\n经验与疑问分享 (10min)\n技术前沿讯息分享 (5-10min)\n主题分享 (20-35min)\n其他环节 (TBD)', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            bgColor: ['#FF4C00', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述，这里是一段关于主题分享的简要介绍文字描述']
          });
          this.updateStore(this.billboardForm.value);
          this.billboardForm.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300)).subscribe(function (value) {
            return _this3.updateStore(value);
          });
        }
      }, {
        key: "addImageFile",
        value: function addImageFile() {
          var _this4 = this;

          var fi = this.fileInput.nativeElement;

          if (fi.files && fi.files[0]) {
            var fileToUpload = fi.files[0];
            var myReader = new FileReader();

            myReader.onloadend = function (loadEvent) {
              _this4.updateStore({
                logoPath: loadEvent.target.result
              });
            };

            myReader.readAsDataURL(fileToUpload);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(data) {// Todo
        }
      }, {
        key: "onImageChange",
        value: function onImageChange(url) {
          this.imgUrl$.next(url);
          this.cdRef.detectChanges();
        }
      }]);

      return PosterInCanvasComponent;
    }();

    PosterInCanvasComponent.ɵfac = function PosterInCanvasComponent_Factory(t) {
      return new (t || PosterInCanvasComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]));
    };

    PosterInCanvasComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: PosterInCanvasComponent,
      selectors: [["app-poster-in-canvas"]],
      viewQuery: function PosterInCanvasComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.fileInput = _t.first);
        }
      },
      decls: 37,
      vars: 5,
      consts: [[1, "form", 3, "formGroup"], ["type", "file"], ["fileInput", ""], [3, "click"], ["type", "text", "formControlName", "title"], ["type", "text", "formControlName", "organization"], ["type", "text", "formControlName", "time"], ["type", "text", "formControlName", "address"], ["type", "text", "formControlName", "vol"], ["type", "color", "formControlName", "bgColor"], ["formControlName", "topics", "rows", "5"], ["formControlName", "description", "rows", "3", 1, "description"], [4, "ngIf"], [3, "info", "onImageChange"], ["download", "poster.png", 3, "href"]],
      template: function PosterInCanvasComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " LOGO: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 1, 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PosterInCanvasComponent_Template_button_click_6_listener() {
            return ctx.addImageFile();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Image");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Title: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Organization: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Time: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "input", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Address: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Vol: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "input", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Color: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Topics: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "textarea", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Description: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "textarea", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](34, PosterInCanvasComponent_ng_container_34_Template, 3, 1, "ng-container", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](35, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "app-canvas", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onImageChange", function PosterInCanvasComponent_Template_app_canvas_onImageChange_36_listener($event) {
            return ctx.onImageChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.billboardForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](33);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](35, 3, ctx.imgUrl$));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("info", ctx.billboardData);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_5__["CanvasComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["[_nghost-%COMP%]   .description[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9oaWppYW5ndGFvL0RvY3VtZW50cy9naXQvc3R1ZHkvY2FudmFzLWJpbGxib2FyZC9zcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tY2FudmFzL3Bvc3Rlci1pbi1jYW52YXMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudC9wb3N0ZXItaW4tY2FudmFzL3Bvc3Rlci1pbi1jYW52YXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0U7RUFDRSxXQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvcG9zdGVyLWluLWNhbnZhcy9wb3N0ZXItaW4tY2FudmFzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3Qge1xuICAuZGVzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG4iLCI6aG9zdCAuZGVzY3JpcHRpb24ge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PosterInCanvasComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-poster-in-canvas',
          templateUrl: './poster-in-canvas.component.html',
          styleUrls: ['./poster-in-canvas.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]
        }];
      }, {
        fileInput: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['fileInput', {
            "static": true
          }]
        }]
      });
    })();
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
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
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map