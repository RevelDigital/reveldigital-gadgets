(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\mike_\Documents\GitHub\ng-calendar-app\src\main.ts */
      "zUnb");
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
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
    "LgWK":
    /*!****************************************************!*\
      !*** ./src/app/layouts/banner/banner.component.ts ***!
      \****************************************************/

    /*! exports provided: BannerComponent */

    /***/
    function LgWK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BannerComponent", function () {
        return BannerComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _iconify_icons_fluent_clock_24_regular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @iconify-icons/fluent/clock-24-regular */
      "mWxj");
      /* harmony import */


      var _iconify_icons_fluent_location_28_regular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @iconify-icons/fluent/location-28-regular */
      "dakY");
      /* harmony import */


      var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! gsap */
      "z/o8");
      /* harmony import */


      var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! gsap/ScrollToPlugin */
      "lCAa");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "VX/1");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/flex-layout/flex */
      "XiUz");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");
      /* harmony import */


      var _safe_pipe__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../safe.pipe */
      "Z2+D");

      var _c0 = ["containerEl"];
      var _c1 = ["eventsEl"];
      var _c2 = ["itemEl"];

      function BannerComponent_div_4_ic_icon_21_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ic-icon", 14);
        }
      }

      var _c3 = function _c3(a0, a1) {
        return {
          odd: a0,
          even: a1
        };
      };

      var _c4 = function _c4(a0) {
        return {
          "background-color": a0
        };
      };

      function BannerComponent_div_4_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6, 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_div_4_Template_div_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r9.scroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h4");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "h2", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "p", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "safe");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "ic-icon", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](19, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "span", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BannerComponent_div_4_ic_icon_21_Template, 1, 0, "ic-icon", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ev_r3 = ctx.$implicit;
          var i_r4 = ctx.index;
          var even_r5 = ctx.even;
          var odd_r6 = ctx.odd;

          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "item-" + i_r4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](25, _c3, odd_r6, even_r5))("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c4, ctx_r2.getBackgroundColor(odd_r6)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 10, ev_r3.startDate, "d"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](9, 13, ev_r3.startDate, "LLL"));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 16, ev_r3.summary, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](14, 19, ev_r3.description, "html"), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ev_r3.allDay ? "All Day" : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](19, 22, ev_r3.startDate, "shortTime"), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ev_r3.location);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ev_r3.location, " ");
        }
      }

      var BannerComponent = /*#__PURE__*/function () {
        function BannerComponent(iconService, domSanitizer) {
          _classCallCheck(this, BannerComponent);

          this.iconService = iconService;
          this.domSanitizer = domSanitizer;
          this.rowColor = '';
          this.altColor = '';
          this.dy = 100;
          this.y = 0;
          this.visible = 1;
          this.max = 0;
          iconService.register('clock', _iconify_icons_fluent_clock_24_regular__WEBPACK_IMPORTED_MODULE_1__["default"]);
          iconService.register('location', _iconify_icons_fluent_location_28_regular__WEBPACK_IMPORTED_MODULE_2__["default"]);
          gsap__WEBPACK_IMPORTED_MODULE_3__["gsap"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_4__["default"]); // Register ScrollTo plugin

          if (typeof gadgets !== 'undefined') {
            var prefs = new gadgets.Prefs();
            this.bodyStyle = prefs.getString('body-style');
            this.rowColor = prefs.getString('row-color');
            this.altColor = prefs.getString('alt-color');
          }
        }

        _createClass(BannerComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.bodyStyle) {
              this.eventsEl.nativeElement.setAttribute('style', this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.domSanitizer.bypassSecurityTrustHtml(this.bodyStyle.replace(/&#34;/g, "'"))));
            }
          }
        }, {
          key: "getBackgroundColor",
          value: function getBackgroundColor(odd) {
            if (odd && this.altColor !== '') {
              return this.altColor;
            }

            return this.rowColor;
          }
        }, {
          key: "scroll",
          value: function scroll() {
            if (this.itemsEl.length) {
              this.dy = this.itemsEl.first.nativeElement.offsetHeight;
              this.visible = Math.floor(this.containerEl.nativeElement.offsetHeight / this.dy);
              this.max = this.itemsEl.length - this.visible + 1;
            } //const topY = this.containerEl.nativeElement.getBoundingClientRect().top;


            this.y += 1;

            if (this.y >= this.max) {
              this.y = 0;
            }

            gsap__WEBPACK_IMPORTED_MODULE_3__["gsap"].to(window, {
              duration: 1.2,
              ease: "power4.inOut",
              scrollTo: '#item-' + this.y
            });
          }
        }]);

        return BannerComponent;
      }();

      BannerComponent.ɵfac = function BannerComponent_Factory(t) {
        return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]));
      };

      BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: BannerComponent,
        selectors: [["app-banner"]],
        viewQuery: function BannerComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.eventsEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.itemsEl = _t);
          }
        },
        inputs: {
          events: "events",
          width: "width",
          height: "height"
        },
        decls: 5,
        vars: 5,
        consts: [[1, "container"], ["containerEl", ""], ["fxLayout", "column", "fxLayoutAlign", "center center", 1, "events"], ["eventsEl", ""], ["style", "width:100%;", 4, "ngFor", "ngForOf"], [2, "width", "100%"], ["fxFlex", "", "fxLayout", "row", "fxLayoutAlign", "center center", 1, "item", 3, "ngClass", "ngStyle"], ["itemEl", ""], ["fxFlex", "20", 1, "date", 3, "click"], ["fxFlex", "", 1, "details"], [3, "innerHtml"], ["icon", "clock"], [2, "margin-left", "3em"], ["icon", "location", 4, "ngIf"], ["icon", "location"]],
        template: function BannerComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BannerComponent_div_4_Template, 23, 30, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px")("width", ctx.width, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.events);
          }
        },
        directives: [_angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultLayoutAlignDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_7__["DefaultFlexDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultClassDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_9__["DefaultStyleDirective"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _safe_pipe__WEBPACK_IMPORTED_MODULE_10__["SafePipe"]],
        styles: [".events[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.item[_ngcontent-%COMP%] {\n  padding: 15px 0;\n}\n\n.date[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .date[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n  text-align: center;\n}\n\n.date[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 3.5em;\n}\n\n.date[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%] {\n  font-size: 2em;\n}\n\n.details[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  margin: 0 0 10px 0;\n}\n\n.details[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  margin: 0 0 1em 0;\n  width: 95%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFxiYW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsVUFBQTtBQUNKOztBQVVBO0VBQ0ksZUFBQTtBQVBKOztBQVdJOztFQUVJLFNBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7QUFSUjs7QUFXSTtFQUNJLGdCQUFBO0FBVFI7O0FBWUk7RUFDSSxjQUFBO0FBVlI7O0FBZUk7RUFDSSxrQkFBQTtBQVpSOztBQWNJO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBWlIiLCJmaWxlIjoiYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV2ZW50cyB7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIC8vIC5pdGVtLmV2ZW4ge1xyXG4gICAgLy8gICAgIGJhY2tncm91bmQ6IHJnYmEoNzYsIDE3NSwgODAsIDEpO1xyXG4gICAgLy8gfVxyXG5cclxuICAgIC8vIC5pdGVtLm9kZCB7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZDogcmdiYSg3NiwgMTc1LCA4MCwgMC4zKTtcclxuICAgIC8vIH1cclxufVxyXG5cclxuLml0ZW0ge1xyXG4gICAgcGFkZGluZzogMTVweCAwO1xyXG59XHJcblxyXG4uZGF0ZSB7XHJcbiAgICBoMixcclxuICAgIGg0IHtcclxuICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMy41ZW07XHJcbiAgICB9XHJcblxyXG4gICAgaDQge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGV0YWlscyB7XHJcbiAgICBoMiB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMTBweCAwO1xyXG4gICAgfVxyXG4gICAgcCB7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMWVtIDA7XHJcbiAgICAgICAgd2lkdGg6IDk1JTtcclxuICAgIH1cclxufSJdfQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-banner',
            templateUrl: './banner.component.html',
            styleUrls: ['./banner.component.scss']
          }]
        }], function () {
          return [{
            type: _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_5__["IconService"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
          }];
        }, {
          containerEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['containerEl']
          }],
          eventsEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['eventsEl']
          }],
          itemsEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ['itemEl']
          }],
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
      };

      function webpackContext(req) {
        var id = webpackContextResolve(req);
        return __webpack_require__(id);
      }

      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        }

        return map[req];
      }

      webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map);
      };

      webpackContext.resolve = webpackContextResolve;
      module.exports = webpackContext;
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var gsap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! gsap */
      "z/o8");
      /* harmony import */


      var _layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./layouts/banner/banner.component */
      "LgWK");
      /* harmony import */


      var _layouts_table_table_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./layouts/table/table.component */
      "iNfI");
      /* harmony import */


      var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! gsap/ScrollToPlugin */
      "lCAa");
      /* harmony import */


      var _iconify_icons_fluent_location_28_regular__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @iconify-icons/fluent/location-28-regular */
      "dakY");
      /* harmony import */


      var _iconify_icons_fluent_clock_24_regular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @iconify-icons/fluent/clock-24-regular */
      "mWxj");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "VX/1");
      /* harmony import */


      var _ical_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./ical.service */
      "x2Ol");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function AppComponent_app_banner_0_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-banner", 1);
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r0.width)("height", ctx_r0.height)("events", ctx_r0.events);
        }
      }

      function AppComponent_app_table_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-table", 1);
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("width", ctx_r1.width)("height", ctx_r1.height)("events", ctx_r1.events);
        }
      }

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(http, domSanitizer, iconService, icalService) {
          _classCallCheck(this, AppComponent);

          this.http = http;
          this.domSanitizer = domSanitizer;
          this.iconService = iconService;
          this.icalService = icalService;
          this.width = 800;
          this.height = 500;
          this.layout = 'table';
          this.scrolling = true;
          this.interval = 2;
          this.pollingInterval = 30 * 60 * 1000; // 30 minutes

          this.calUrl = 'https://calendar.google.com/calendar/ical/4t0mtlq6irm5dl32gp9euutajg%40group.calendar.google.com/public/basic.ics';
          this.events = [];
          iconService.register('clock', _iconify_icons_fluent_clock_24_regular__WEBPACK_IMPORTED_MODULE_8__["default"]);
          iconService.register('location', _iconify_icons_fluent_location_28_regular__WEBPACK_IMPORTED_MODULE_7__["default"]);
          gsap__WEBPACK_IMPORTED_MODULE_3__["gsap"].registerPlugin(gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_6__["default"]);

          if (typeof gadgets !== 'undefined') {
            this.prefs = new gadgets.Prefs();
            this.width = this.prefs.getInt('rdW');
            this.height = this.prefs.getInt('rdH');
            this.layout = this.prefs.getString('layout');
            this.scrolling = this.prefs.getBool('enable-scrolling');
            this.calUrl = this.prefs.getString('calendar-url');
            this.interval = this.prefs.getInt('scroll-interval');
          }
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sub = this.startPolling(this.pollingInterval).subscribe(function (res) {
              _this.events = res;
            });

            if (this.scrolling) {
              setInterval(function () {
                if (_this.table) {
                  _this.table.scroll();
                } else if (_this.banner) {
                  _this.banner.scroll();
                }
              }, this.interval * 1000);
            }
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.sub.unsubscribe();
          }
        }, {
          key: "startPolling",
          value: function startPolling() {
            var _this2 = this;

            var interval = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 30000;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["timer"])(0, interval).pipe( //switchMap(() => this.icalService.getEvents('https://calendar.google.com/calendar/ical/4t0mtlq6irm5dl32gp9euutajg%40group.calendar.google.com/public/basic.ics')
            //switchMap(() => this.icalService.getEvents('https://calendar.lafayette.edu/category/24/events.ics')
            //switchMap(() => this.icalService.getEvents('https://www.shaker.org/ical/Shaker_Heights_Schools_export.ics')
            Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function () {
              return _this2.icalService.getEvents(_this2.calUrl);
            }));
          }
        }, {
          key: "requestData",
          value: function requestData(url) {
            return this.http.get(url);
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ical_service__WEBPACK_IMPORTED_MODULE_12__["ICalService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        viewQuery: function AppComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_layouts_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"], 1);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.banner = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
          }
        },
        hostVars: 4,
        hostBindings: function AppComponent_HostBindings(rf, ctx) {
          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.width, "px")("height", ctx.height, "px");
          }
        },
        decls: 2,
        vars: 2,
        consts: [[3, "width", "height", "events", 4, "ngIf"], [3, "width", "height", "events"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_app_banner_0_Template, 1, 3, "app-banner", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_app_table_1_Template, 1, 3, "app-table", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "banner");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.layout === "table");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"], _layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"], _layouts_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClient"]
          }, {
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__["DomSanitizer"]
          }, {
            type: _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_11__["IconService"]
          }, {
            type: _ical_service__WEBPACK_IMPORTED_MODULE_12__["ICalService"]
          }];
        }, {
          banner: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"]]
          }],
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_layouts_table_table_component__WEBPACK_IMPORTED_MODULE_5__["TableComponent"]]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.width.px']
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"],
            args: ['style.height.px']
          }]
        });
      })();
      /***/

    },

    /***/
    "Z2+D":
    /*!******************************!*\
      !*** ./src/app/safe.pipe.ts ***!
      \******************************/

    /*! exports provided: SafePipe */

    /***/
    function Z2D(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SafePipe", function () {
        return SafePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      var SafePipe = /*#__PURE__*/function () {
        function SafePipe(sanitizer) {
          _classCallCheck(this, SafePipe);

          this.sanitizer = sanitizer;
        }

        _createClass(SafePipe, [{
          key: "transform",
          value: function transform(value, type) {
            switch (type) {
              case 'html':
                return this.sanitizer.bypassSecurityTrustHtml(value);

              case 'style':
                return this.sanitizer.bypassSecurityTrustStyle(value);

              case 'script':
                return this.sanitizer.bypassSecurityTrustScript(value);

              case 'url':
                return this.sanitizer.bypassSecurityTrustUrl(value);

              case 'resourceUrl':
                return this.sanitizer.bypassSecurityTrustResourceUrl(value);

              default:
                throw new Error("Invalid safe type specified: ".concat(type));
            }
          }
        }]);

        return SafePipe;
      }();

      SafePipe.ɵfac = function SafePipe_Factory(t) {
        return new (t || SafePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]));
      };

      SafePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "safe",
        type: SafePipe,
        pure: true
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SafePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'safe'
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout */
      "YUcS");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @reveldigital/player-client */
      "GQtI");
      /* harmony import */


      var _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @visurel/iconify-angular */
      "VX/1");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/locales/fr */
      "Hfs6");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_10__);
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/locales/ru */
      "wq8c");
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_11__);
      /* harmony import */


      var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common/locales/es */
      "2Yyj");
      /* harmony import */


      var _angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12__);
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/common/locales/de */
      "VLs4");
      /* harmony import */


      var _angular_common_locales_de__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_13__);
      /* harmony import */


      var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/common/locales/nl */
      "b6vB");
      /* harmony import */


      var _angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_14__);
      /* harmony import */


      var _layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./layouts/banner/banner.component */
      "LgWK");
      /* harmony import */


      var _layouts_table_table_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! ./layouts/table/table.component */
      "iNfI");
      /* harmony import */


      var _safe_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./safe.pipe */
      "Z2+D");

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_10___default.a);
      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_11___default.a);
      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_es__WEBPACK_IMPORTED_MODULE_12___default.a);
      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_de__WEBPACK_IMPORTED_MODULE_13___default.a);
      Object(_angular_common__WEBPACK_IMPORTED_MODULE_3__["registerLocaleData"])(_angular_common_locales_nl__WEBPACK_IMPORTED_MODULE_14___default.a);

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
          useFactory: function useFactory() {
            try {
              return new gadgets.Prefs().getLang();
            } catch (_a) {
              return 'en';
            }
          }
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"],
          useValue: '/gadgets/ifr'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__["PlayerClientModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"], _layouts_table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_17__["SafePipe"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__["PlayerClientModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"]]
        });
      })();

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"], _layouts_banner_banner_component__WEBPACK_IMPORTED_MODULE_15__["BannerComponent"], _layouts_table_table_component__WEBPACK_IMPORTED_MODULE_16__["TableComponent"], _safe_pipe__WEBPACK_IMPORTED_MODULE_17__["SafePipe"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"], _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"], _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__["PlayerClientModule"], _visurel_iconify_angular__WEBPACK_IMPORTED_MODULE_8__["IconModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["LOCALE_ID"],
              useFactory: function useFactory() {
                try {
                  return new gadgets.Prefs().getLang();
                } catch (_a) {
                  return 'en';
                }
              }
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__["APP_BASE_HREF"],
              useValue: '/gadgets/ifr'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "iNfI":
    /*!**************************************************!*\
      !*** ./src/app/layouts/table/table.component.ts ***!
      \**************************************************/

    /*! exports provided: TableComponent */

    /***/
    function iNfI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TableComponent", function () {
        return TableComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var gsap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! gsap */
      "z/o8");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/material/table */
      "+0xr");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/flex-layout/extended */
      "znSr");

      var _c0 = ["containerEl"];
      var _c1 = ["table"];
      var _c2 = ["header"];
      var _c3 = ["row"];

      function TableComponent_th_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " When ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_6_span_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 4, element_r10.startDate, "MMM d"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 7, element_r10.startDate, "shortTime"), " - ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 10, element_r10.endDate, "shortTime"), "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r10.countDown, " ");
        }
      }

      function TableComponent_td_6_span_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 1, element_r10.startDate, "MMM d"), " ");
        }
      }

      function TableComponent_td_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, TableComponent_td_6_span_1_Template, 9, 13, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, TableComponent_td_6_span_2_Template, 3, 4, "span", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r10 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !element_r10.allDay);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", element_r10.allDay);
        }
      }

      function TableComponent_th_8_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Where ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_9_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r15 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r15.location, " ");
        }
      }

      function TableComponent_th_11_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Summary ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      }

      function TableComponent_td_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "td", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var element_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", element_r16.summary, " ");
        }
      }

      function TableComponent_tr_13_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "tr", 15, 16);
        }

        if (rf & 2) {
          var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r8.headerStyleObj)("hidden", !ctx_r8.showHeader);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "item-0");
        }
      }

      var _c4 = function _c4(a0) {
        return {
          "background-color": a0
        };
      };

      function TableComponent_tr_14_Template(rf, ctx) {
        if (rf & 1) {
          var _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 17, 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function TableComponent_tr_14_Template_tr_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r24);

            var ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r23.scroll();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var i_r19 = ctx.index;
          var odd_r21 = ctx.odd;

          var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngStyle", ctx_r9.cellStyleObj)("ngStyle", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c4, ctx_r9.getBackgroundColor(odd_r21)));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵattribute"]("id", "item-" + (i_r19 + 1));
        }
      }

      var TableComponent = /*#__PURE__*/function () {
        function TableComponent(domSanitizer) {
          _classCallCheck(this, TableComponent);

          this.domSanitizer = domSanitizer;
          this.showHeader = true;
          this.rowColor = '';
          this.altColor = '';
          this.y = 1;
          this.dy = 0;
          this.max = 0;
          this.visible = 0;
          this.displayedColumns = ['when', 'where', 'summary'];

          if (typeof gadgets !== 'undefined') {
            var prefs = new gadgets.Prefs();
            this.showHeader = prefs.getBool('show-header');
            this.headerStyle = prefs.getString('header-style');
            this.bodyStyle = prefs.getString('body-style');
            this.rowColor = prefs.getString('row-color');
            this.altColor = prefs.getString('alt-color');
            this.y = this.showHeader ? 1 : 0;
          }
        }

        _createClass(TableComponent, [{
          key: "ngAfterViewInit",
          value: function ngAfterViewInit() {
            if (this.headerStyle) {
              this.header.nativeElement.setAttribute('style', this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.domSanitizer.bypassSecurityTrustHtml(this.headerStyle.replace(/&#34;/g, "'"))));
            }

            if (this.bodyStyle) {
              this.table.nativeElement.setAttribute('style', this.domSanitizer.sanitize(_angular_core__WEBPACK_IMPORTED_MODULE_0__["SecurityContext"].HTML, this.domSanitizer.bypassSecurityTrustHtml(this.bodyStyle.replace(/&#34;/g, "'"))));
            }
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {}
        }, {
          key: "getBackgroundColor",
          value: function getBackgroundColor(odd) {
            if (odd && this.altColor !== '') {
              return this.altColor;
            }

            return this.rowColor;
          }
        }, {
          key: "scroll",
          value: function scroll() {
            if (this.rows.length) {
              this.dy = this.rows.first.element.nativeElement.offsetHeight;
              this.visible = Math.floor(this.containerEl.nativeElement.offsetHeight / this.dy);
              this.max = this.rows.length - this.visible + 1;
            }

            this.y += 1;

            if (this.y >= this.max) {
              this.y = 0;
            }

            gsap__WEBPACK_IMPORTED_MODULE_1__["gsap"].to(window, {
              duration: 1.2,
              ease: "power4.inOut",
              scrollTo: '#item-' + this.y
            });
          }
        }]);

        return TableComponent;
      }();

      TableComponent.ɵfac = function TableComponent_Factory(t) {
        return new (t || TableComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]));
      };

      TableComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: TableComponent,
        selectors: [["app-table"]],
        viewQuery: function TableComponent_Query(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c1, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c2, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c3, 1, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]);
          }

          if (rf & 2) {
            var _t;

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.containerEl = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.table = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.header = _t.first);
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.rows = _t);
          }
        },
        inputs: {
          events: "events",
          width: "width",
          height: "height"
        },
        decls: 15,
        vars: 7,
        consts: [[1, "container"], ["containerEl", ""], ["mat-table", "", 3, "dataSource"], ["table", ""], ["matColumnDef", "when"], ["mat-header-cell", "", 4, "matHeaderCellDef"], ["mat-cell", "", 4, "matCellDef"], ["matColumnDef", "where"], ["matColumnDef", "summary"], ["id", "header", "mat-header-row", "", 3, "ngStyle", "hidden", 4, "matHeaderRowDef"], ["mat-row", "", 3, "ngStyle", "click", 4, "matRowDef", "matRowDefColumns"], ["mat-header-cell", ""], ["mat-cell", ""], [4, "ngIf"], [1, "time"], ["id", "header", "mat-header-row", "", 3, "ngStyle", "hidden"], ["header", ""], ["mat-row", "", 3, "ngStyle", "click"], ["row", ""]],
        template: function TableComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0, 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 2, 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](4, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, TableComponent_th_5_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, TableComponent_td_6_Template, 3, 2, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](7, 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, TableComponent_th_8_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, TableComponent_td_9_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](10, 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, TableComponent_th_11_Template, 2, 0, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, TableComponent_td_12_Template, 2, 1, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, TableComponent_tr_13_Template, 2, 3, "tr", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, TableComponent_tr_14_Template, 2, 5, "tr", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("height", ctx.height, "px")("width", ctx.width, "px");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dataSource", ctx.events);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matHeaderRowDef", ctx.displayedColumns);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("matRowDefColumns", ctx.displayedColumns);
          }
        },
        directives: [_angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTable"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatColumnDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCellDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRowDef"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderCell"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatCell"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatHeaderRow"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgStyle"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_5__["DefaultStyleDirective"], _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatRow"]],
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"]],
        styles: ["table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n.mat-header-cell[_ngcontent-%COMP%] {\n  font-size: 1em;\n}\n\n.mat-cell[_ngcontent-%COMP%] {\n  font-size: 1em;\n  padding: 8px 8px 8px 0;\n}\n\n.mat-cell[_ngcontent-%COMP%]   span.time[_ngcontent-%COMP%] {\n  font-size: 0.8em;\n  white-space: nowrap;\n}\n\n.mat-table[_ngcontent-%COMP%]   thead[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%], .mat-table[_ngcontent-%COMP%]   tfoot[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], [mat-header-row][_ngcontent-%COMP%], [mat-row][_ngcontent-%COMP%], [mat-footer-row][_ngcontent-%COMP%], .mat-table-sticky[_ngcontent-%COMP%] {\n  background: inherit;\n}\n\nmat-row[_ngcontent-%COMP%], mat-header-row[_ngcontent-%COMP%], mat-footer-row[_ngcontent-%COMP%], th.mat-header-cell[_ngcontent-%COMP%], td.mat-cell[_ngcontent-%COMP%], td.mat-footer-cell[_ngcontent-%COMP%] {\n  border-bottom-color: rgba(0, 0, 0, 0.12);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFx0YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFdBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7QUFDSjs7QUFFQTtFQUNJLGNBQUE7RUFDQSxzQkFBQTtBQUNKOztBQUNJO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtBQUNSOztBQUdBOzs7Ozs7Ozs7O0VBVUksbUJBQUE7QUFBSjs7QUFHQTs7Ozs7O0VBTUksd0NBQUE7QUFBSiIsImZpbGUiOiJ0YWJsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbInRhYmxlIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcblxyXG4ubWF0LWhlYWRlci1jZWxsIHtcclxuICAgIGZvbnQtc2l6ZTogMWVtO1xyXG59XHJcblxyXG4ubWF0LWNlbGwge1xyXG4gICAgZm9udC1zaXplOiAxZW07XHJcbiAgICBwYWRkaW5nOiA4cHggOHB4IDhweCAwO1xyXG5cclxuICAgIHNwYW4udGltZSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgfVxyXG59XHJcblxyXG4ubWF0LXRhYmxlIHRoZWFkLFxyXG4ubWF0LXRhYmxlIHRib2R5LFxyXG4ubWF0LXRhYmxlIHRmb290LFxyXG5tYXQtaGVhZGVyLXJvdyxcclxubWF0LXJvdyxcclxubWF0LWZvb3Rlci1yb3csXHJcblttYXQtaGVhZGVyLXJvd10sXHJcblttYXQtcm93XSxcclxuW21hdC1mb290ZXItcm93XSxcclxuLm1hdC10YWJsZS1zdGlja3kge1xyXG4gICAgYmFja2dyb3VuZDogaW5oZXJpdDtcclxufVxyXG5cclxubWF0LXJvdyxcclxubWF0LWhlYWRlci1yb3csXHJcbm1hdC1mb290ZXItcm93LFxyXG50aC5tYXQtaGVhZGVyLWNlbGwsXHJcbnRkLm1hdC1jZWxsLFxyXG50ZC5tYXQtZm9vdGVyLWNlbGwge1xyXG4gICAgYm9yZGVyLWJvdHRvbS1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLm1hdC1oZWFkZXItY2VsbCB7XHJcbn1cclxuXHJcbi5tYXQtY2VsbCxcclxuLm1hdC1mb290ZXItY2VsbCB7XHJcbn1cclxuIl19 */"]
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](TableComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-table',
            templateUrl: './table.component.html',
            styleUrls: ['./table.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]
          }];
        }, {
          containerEl: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['containerEl']
          }],
          table: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['table', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }],
          header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['header', {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
            }]
          }],
          rows: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"],
            args: ["row", {
              read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"]
            }]
          }],
          events: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          width: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          height: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "x2Ol":
    /*!*********************************!*\
      !*** ./src/app/ical.service.ts ***!
      \*********************************/

    /*! exports provided: ICalService */

    /***/
    function x2Ol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ICalService", function () {
        return ICalService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! moment-timezone */
      "f0Wu");
      /* harmony import */


      var moment_timezone__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment_timezone__WEBPACK_IMPORTED_MODULE_1__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @reveldigital/player-client */
      "GQtI");

      var ICalService = /*#__PURE__*/function () {
        function ICalService(http, client) {
          _classCallCheck(this, ICalService);

          this.http = http;
          this.client = client;
          this.DATEONLY_REGEX = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))$/;
          this.futureEvents = '7';
          this.client.getDeviceTimeZoneName().then(function (res) {
            if (res) {
              moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"].setDefault(res);
            } else {
              moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"].setDefault('America/Chicago');
            }
          });

          if (typeof gadgets !== 'undefined') {
            var prefs = new gadgets.Prefs();
            this.futureEvents = prefs.getString("future-events");
          }
        }

        _createClass(ICalService, [{
          key: "getEvents",
          value: function getEvents(calendarUrl) {
            var _this3 = this;

            // DEVELOPMENT VARAIBLES
            // private TZName: any;
            // private urlPref = new gadgets.Prefs().getString('url');
            // private timePref = new gadgets.Prefs().getString('timeRange');
            // private url = `https://glacial-hollows-70580.herokuapp.com/ical/2020-09-29T00:00:00.000Z/2020-10-15T23:00:00.000Z?url=${this.urlPref}`;
            var now = moment_timezone__WEBPACK_IMPORTED_MODULE_1__().format('YYYY-MM-DDThh:mm');

            var endDateRange = function endDateRange(d) {
              if (d === '365') {
                return moment_timezone__WEBPACK_IMPORTED_MODULE_1__().add(1, 'y').format('YYYY-MM-DDThh:mm');
              } else if (d === '0') {
                return moment_timezone__WEBPACK_IMPORTED_MODULE_1__().add(1, 'd').format('YYYY-MM-DDThh:mm');
              } else if (d === '7') {
                return moment_timezone__WEBPACK_IMPORTED_MODULE_1__().add(1, 'w').format('YYYY-MM-DDThh:mm');
              } else if (d === '30') {
                return moment_timezone__WEBPACK_IMPORTED_MODULE_1__().add(1, 'M').format('YYYY-MM-DDThh:mm');
              }
            };

            var url = "https://glacial-hollows-70580.herokuapp.com/ical/".concat(now, "/").concat(endDateRange(this.futureEvents), "?url=").concat(encodeURIComponent(calendarUrl));
            return this.http.get(url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) {
              return _this3.mapEvents(data);
            }));
          }
        }, {
          key: "mapEvents",
          value: function mapEvents(data) {
            var _this4 = this;

            var events = [];

            if (data.occurrences) {
              events = events.concat(data.occurrences.map(function (o) {
                return {
                  startDate: o.startDate.isDate ? moment_timezone__WEBPACK_IMPORTED_MODULE_1__([o.startDate.year, o.startDate.month - 1, o.startDate.day], o.startDate.timezone === 'floating' ? null : o.startDate.timezone) : moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"]([o.startDate.year, o.startDate.month - 1, o.startDate.day, o.startDate.hour, o.startDate.minute], o.startDate.timezone === 'floating' ? null : o.startDate.timezone),
                  endDate: o.endDate.isDate ? moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"]([o.endDate.year, o.endDate.month - 1, o.endDate.day], o.endDate.timezone === 'floating' ? null : o.endDate.timezone) : moment_timezone__WEBPACK_IMPORTED_MODULE_1__["tz"]([o.endDate.year, o.endDate.month - 1, o.endDate.day, o.endDate.hour, o.endDate.minute], o.endDate.timezone === 'floating' ? null : o.endDate.timezone),
                  allDay: o.startDate.isDate,
                  location: _this4.getProperty(o.item, 'location'),
                  summary: _this4.getProperty(o.item, 'summary'),
                  description: _this4.getProperty(o.item, 'description')
                };
              }));
            }

            if (data.events) {
              events = events.concat(data.events.map(function (o) {
                return {
                  startDate: moment_timezone__WEBPACK_IMPORTED_MODULE_1__(_this4.getProperty(o, 'dtstart')),
                  endDate: moment_timezone__WEBPACK_IMPORTED_MODULE_1__(_this4.getProperty(o, 'dtend')),
                  location: _this4.getProperty(o, 'location'),
                  summary: _this4.getProperty(o, 'summary'),
                  description: _this4.getProperty(o, 'description'),
                  allDay: _this4.DATEONLY_REGEX.test(_this4.getProperty(o, 'dtstart'))
                };
              }));
            }

            return events.sort(function (a, b) {
              return a.startDate - b.startDate;
            });
          }
        }, {
          key: "getProperty",
          value: function getProperty(item, propName) {
            if (item && item.component[0] === 'vevent') {
              return item.component[1].find(function (o) {
                return o[0] === propName;
              }) ? item.component[1].find(function (o) {
                return o[0] === propName;
              })[3] : null;
            }

            return '';
          }
        }]);

        return ICalService;
      }();

      ICalService.ɵfac = function ICalService_Factory(t) {
        return new (t || ICalService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__["PlayerClientService"]));
      };

      ICalService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ICalService,
        factory: ICalService.ɵfac,
        providedIn: 'root'
      });

      (function () {
        (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ICalService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__["PlayerClientService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map