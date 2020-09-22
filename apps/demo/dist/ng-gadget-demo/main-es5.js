(function () {
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

      var routes = [];

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
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
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
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent() {
          var _this = this;

          _classCallCheck(this, AppComponent);

          this.title = 'clock-greets';
          setInterval(function () {
            _this.time = new Date();
          }, 1000);
          this.decide();
        }

        _createClass(AppComponent, [{
          key: "decide",
          value: function decide() {
            this.hours = new Date().getHours();
            console.log("this.hours", this.hours);

            if (this.hours < 10) {
              this.msg = "Good Morning";
              this.link = "wwww.google.com";
              console.log("selamat Pagi");
            } else if (this.hours < 16) {
              this.msg = "Good Afternoon";
              this.link = "wwww.tokopedia.com";
              console.log("selamat siang");
            } else if (this.hours < 19) {
              this.msg = "Good Evening";
            } else if (this.hours < 24) {
              this.msg = "Good Night";
              this.link = "wwww.sprout.co.id";
              console.log("selamat malam");
            } else if (this.hours < 6) {
              this.msg = "Sleep lah";
              this.link = "www.mangabat.com";
              console.log("selamat subuh");
            }
          }
        }, {
          key: "firebaseSusbscribing",
          value: function firebaseSusbscribing() {}
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 24,
        vars: 6,
        consts: [[1, "context"], [1, "txt-time"], [1, "txt-greetings"], [1, "txt-suggestion"], ["target", "_blank", 3, "href"], [1, "area"], [1, "circles"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Open ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "This");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " if you bored");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "li");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 3, ctx.time, "mediumTime"));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.msg, " , Boom");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("href", ctx.link, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DatePipe"]],
        styles: ["@import url(\"https://fonts.googleapis.com/css?family=Exo:400,700\");\n.context[_ngcontent-%COMP%] {\n  width: 100%;\n  z-index: 2;\n  position: absolute;\n  top: 45vh;\n}\n.context[_ngcontent-%COMP%]   .txt-time[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Fira Sans\";\n  color: white;\n  font-size: 64px;\n  letter-spacing: 5px;\n}\n.context[_ngcontent-%COMP%]   .txt-greetings[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Fira Sans\";\n  letter-spacing: 3px;\n  color: white;\n  font-size: 18px;\n}\n.context[_ngcontent-%COMP%]   .txt-suggestion[_ngcontent-%COMP%] {\n  text-align: center;\n  font-family: \"Fira Sans\";\n  color: white;\n  text-decoration: none;\n}\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\na[_ngcontent-%COMP%]:link {\n  color: white;\n}\n\na[_ngcontent-%COMP%]:visited {\n  color: white;\n}\n\na[_ngcontent-%COMP%]:hover {\n  color: hotpink;\n}\n\na[_ngcontent-%COMP%]:active {\n  color: white;\n}\np[_ngcontent-%COMP%] {\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.area[_ngcontent-%COMP%] {\n  background: black;\n  background: -webkit-linear-gradient(to left, #8f94fb, #4e54c8);\n  width: 100%;\n  height: 100vh;\n}\n.circles[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  position: absolute;\n  display: block;\n  list-style: none;\n  width: 20px;\n  height: 20px;\n  background: rgba(255, 255, 255, 0.2);\n  -webkit-animation: animate 25s linear infinite;\n          animation: animate 25s linear infinite;\n  bottom: -150px;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(1) {\n  left: 25%;\n  width: 80px;\n  height: 80px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  background-color: #f06292;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(2) {\n  left: 10%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 12s;\n          animation-duration: 12s;\n  background-color: #1e88e5;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(3) {\n  left: 70%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 4s;\n          animation-delay: 4s;\n  background-color: #1e88e5;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(4) {\n  left: 40%;\n  width: 60px;\n  height: 60px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 18s;\n          animation-duration: 18s;\n  background-color: #1e88e5;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(5) {\n  left: 65%;\n  width: 20px;\n  height: 20px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  background-color: #1e88e5;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(6) {\n  left: 75%;\n  width: 110px;\n  height: 110px;\n  -webkit-animation-delay: 3s;\n          animation-delay: 3s;\n  background-color: #cb132d;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(7) {\n  left: 35%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 7s;\n          animation-delay: 7s;\n  background-color: #1e88e5;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(8) {\n  left: 50%;\n  width: 25px;\n  height: 25px;\n  -webkit-animation-delay: 15s;\n          animation-delay: 15s;\n  -webkit-animation-duration: 45s;\n          animation-duration: 45s;\n  background-color: #1e88e5;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(9) {\n  left: 20%;\n  width: 15px;\n  height: 15px;\n  -webkit-animation-delay: 2s;\n          animation-delay: 2s;\n  -webkit-animation-duration: 35s;\n          animation-duration: 35s;\n  background-color: #cb132d;\n}\n.circles[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:nth-child(10) {\n  left: 85%;\n  width: 150px;\n  height: 150px;\n  -webkit-animation-delay: 0s;\n          animation-delay: 0s;\n  -webkit-animation-duration: 11s;\n          animation-duration: 11s;\n  background-color: #cb132d;\n}\n@-webkit-keyframes animate {\n  0% {\n    -webkit-transform: translateY(0) rotate(0deg);\n            transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    -webkit-transform: translateY(-1000px) rotate(720deg);\n            transform: translateY(-1000px) rotate(720deg);\n    opacity: 0.2;\n    border-radius: 50%;\n  }\n}\n@keyframes animate {\n  0% {\n    -webkit-transform: translateY(0) rotate(0deg);\n            transform: translateY(0) rotate(0deg);\n    opacity: 1;\n    border-radius: 0;\n  }\n  100% {\n    -webkit-transform: translateY(-1000px) rotate(720deg);\n            transform: translateY(-1000px) rotate(720deg);\n    opacity: 0.2;\n    border-radius: 50%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlEUSxrRUFBQTtBQXpEUjtFQUNJLFdBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0FBRUo7QUFESTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBR1I7QUFBSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FBRVI7QUFDSTtFQUNJLGtCQUFBO0VBQ0Esd0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFDUjtBQUVBO0VBQ0kscUJBQUE7QUFDSjtBQUVBLG1CQUFBO0FBQ0E7RUFDSSxZQUFBO0FBQ0o7QUFFRSxpQkFBQTtBQUNBO0VBQ0UsWUFBQTtBQUNKO0FBRUUsb0JBQUE7QUFDQTtFQUNFLGNBQUE7QUFDSjtBQUVFLGtCQUFBO0FBQ0E7RUFDRSxZQUFBO0FBQ0o7QUFFQTtFQUNJLGFBQUE7RUFDQSxnQkFBQTtBQUNKO0FBSUE7RUFDSSxpQkFBQTtFQUNBLDhEQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUFESjtBQUlBO0VBQ0ksa0JBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG9DQUFBO0VBQ0EsOENBQUE7VUFBQSxzQ0FBQTtFQUNBLGNBQUE7QUFESjtBQUlBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLFNBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsMkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUE7RUFDSSxTQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlBO0VBQ0ksU0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsNEJBQUE7VUFBQSxvQkFBQTtFQUNBLCtCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtBQURKO0FBSUE7RUFDSSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSwyQkFBQTtVQUFBLG1CQUFBO0VBQ0EsK0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO0FBREo7QUFJQTtFQUNJLFNBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO1VBQUEsbUJBQUE7RUFDQSwrQkFBQTtVQUFBLHVCQUFBO0VBQ0EseUJBQUE7QUFESjtBQUlBO0VBQ0k7SUFDSSw2Q0FBQTtZQUFBLHFDQUFBO0lBQ0EsVUFBQTtJQUNBLGdCQUFBO0VBRE47RUFJRTtJQUNJLHFEQUFBO1lBQUEsNkNBQUE7SUFDQSxZQUFBO0lBQ0Esa0JBQUE7RUFGTjtBQUNGO0FBVEE7RUFDSTtJQUNJLDZDQUFBO1lBQUEscUNBQUE7SUFDQSxVQUFBO0lBQ0EsZ0JBQUE7RUFETjtFQUlFO0lBQ0kscURBQUE7WUFBQSw2Q0FBQTtJQUNBLFlBQUE7SUFDQSxrQkFBQTtFQUZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGV4dCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ1dmg7XHJcbiAgICAudHh0LXRpbWUge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgZm9udC1zaXplOiA2NHB4O1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiA1cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnR4dC1ncmVldGluZ3Mge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBmb250LWZhbWlseTogXCJGaXJhIFNhbnNcIjtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnR4dC1zdWdnZXN0aW9uIHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiRmlyYSBTYW5zXCI7XHJcbiAgICAgICAgY29sb3I6IHdoaXRlO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxufVxyXG5he1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOm5vbmU7XHJcbn1cclxuXHJcbi8qIHVudmlzaXRlZCBsaW5rICovXHJcbmE6bGluayB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHZpc2l0ZWQgbGluayAqL1xyXG4gIGE6dmlzaXRlZCB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIG1vdXNlIG92ZXIgbGluayAqL1xyXG4gIGE6aG92ZXIge1xyXG4gICAgY29sb3I6IGhvdHBpbms7XHJcbiAgfVxyXG4gIFxyXG4gIC8qIHNlbGVjdGVkIGxpbmsgKi9cclxuICBhOmFjdGl2ZSB7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgfVxyXG5cclxucCB7XHJcbiAgICBtYXJnaW4tdG9wOiAwO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxufVxyXG5cclxuQGltcG9ydCB1cmwoXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9RXhvOjQwMCw3MDBcIik7XHJcblxyXG4uYXJlYSB7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIGxlZnQsICM4Zjk0ZmIsICM0ZTU0YzgpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcblxyXG4uY2lyY2xlcyB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaSB7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICB3aWR0aDogMjBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGJhY2tncm91bmQ6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcclxuICAgIGFuaW1hdGlvbjogYW5pbWF0ZSAyNXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYm90dG9tOiAtMTUwcHg7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCgxKSB7XHJcbiAgICBsZWZ0OiAyNSU7XHJcbiAgICB3aWR0aDogODBweDtcclxuICAgIGhlaWdodDogODBweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMHM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjA2MjkyO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMikge1xyXG4gICAgbGVmdDogMTAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMnM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OGU1O1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMykge1xyXG4gICAgbGVmdDogNzAlO1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDIwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDRzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlODhlNTtcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDQpIHtcclxuICAgIGxlZnQ6IDQwJTtcclxuICAgIHdpZHRoOiA2MHB4O1xyXG4gICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMThzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFlODhlNTtcclxufVxyXG5cclxuLmNpcmNsZXMgbGk6bnRoLWNoaWxkKDUpIHtcclxuICAgIGxlZnQ6IDY1JTtcclxuICAgIHdpZHRoOiAyMHB4O1xyXG4gICAgaGVpZ2h0OiAyMHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAwcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTg4ZTU7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg2KSB7XHJcbiAgICBsZWZ0OiA3NSU7XHJcbiAgICB3aWR0aDogMTEwcHg7XHJcbiAgICBoZWlnaHQ6IDExMHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiAzcztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNjYjEzMmQ7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg3KSB7XHJcbiAgICBsZWZ0OiAzNSU7XHJcbiAgICB3aWR0aDogMTUwcHg7XHJcbiAgICBoZWlnaHQ6IDE1MHB4O1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5OiA3cztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZTg4ZTU7XHJcbn1cclxuXHJcbi5jaXJjbGVzIGxpOm50aC1jaGlsZCg4KSB7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB3aWR0aDogMjVweDtcclxuICAgIGhlaWdodDogMjVweDtcclxuICAgIGFuaW1hdGlvbi1kZWxheTogMTVzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiA0NXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMWU4OGU1O1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoOSkge1xyXG4gICAgbGVmdDogMjAlO1xyXG4gICAgd2lkdGg6IDE1cHg7XHJcbiAgICBoZWlnaHQ6IDE1cHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAzNXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IxMzJkO1xyXG59XHJcblxyXG4uY2lyY2xlcyBsaTpudGgtY2hpbGQoMTApIHtcclxuICAgIGxlZnQ6IDg1JTtcclxuICAgIHdpZHRoOiAxNTBweDtcclxuICAgIGhlaWdodDogMTUwcHg7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDBzO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMXM7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2IxMzJkO1xyXG59XHJcblxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGUge1xyXG4gICAgMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKSByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgb3BhY2l0eTogMTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIDEwMCUge1xyXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMTAwMHB4KSByb3RhdGUoNzIwZGVnKTtcclxuICAgICAgICBvcGFjaXR5OiAwLjI7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgfVxyXG59Il19 */"]
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


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
          useValue: '/'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"]],
            providers: [{
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
              useValue: '/'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
          }]
        }], null, null);
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
      /*! C:\Users\mike_\Documents\ng-gadget-demo\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map