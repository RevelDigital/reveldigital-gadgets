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
      /*! C:\Users\mike_\Documents\GitHub\reveldigital-client-library\projects\test-app\src\main.ts */
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
      "EM62");
      /* harmony import */


      var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @reveldigital/player-client */
      "bxFX");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "2kYt");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(client) {
          _classCallCheck(this, AppComponent);

          this.client = client;
          this.title = 'test-app';
          this.client.onCommand$.subscribe(function (cmd) {
            console.log("Got command: ".concat(cmd.name, ", ").concat(cmd.arg));
          });
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            setInterval(function () {
              _this.update();
            }, 1000);
          }
        }, {
          key: "update",
          value: function update() {
            var _this2 = this;

            this.client.getDeviceTime().then(function (res) {
              _this2.localTime = new Date();
              _this2.deviceTime = new Date(res);
            });
            this.client.getDeviceTimeZoneName().then(function (res) {
              _this2.TZName = res;
            });
            this.client.getDeviceTimeZoneID().then(function (res) {
              _this2.TZId = res;
            });
            this.client.getDeviceTimeZoneOffset().then(function (res) {
              _this2.TZOffset = res;
            });
            this.client.getLanguageCode().then(function (res) {
              _this2.langCode = res;
            });
            this.client.getDeviceKey().then(function (res) {
              _this2.deviceKey = res;
            });
            this.client.getRevelRoot().then(function (res) {
              _this2.revelRoot = res;
            });
          }
        }, {
          key: "sendCommand",
          value: function sendCommand() {
            this.client.sendCommand("test", "it");
          }
        }, {
          key: "trackEvent",
          value: function trackEvent() {
            this.client.track("test", {
              "a": "b"
            });
          }
        }, {
          key: "callback",
          value: function callback() {
            this.client.callback('test');
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__["PlayerClientService"]));
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 24,
        vars: 14,
        consts: [[3, "click"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_18_listener() {
              return ctx.sendCommand();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Send Command");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_20_listener() {
              return ctx.trackEvent();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Track Event");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_22_listener() {
              return ctx.callback();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Callback");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Local Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](2, 8, ctx.localTime, "medium"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 11, ctx.deviceTime, "medium"), "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device TZ Name: ", ctx.TZName, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device TZ ID: ", ctx.TZId, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device TZ Offset: ", ctx.TZOffset, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device Language Code: ", ctx.langCode, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device Key: ", ctx.deviceKey, "");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Revel Root: ", ctx.revelRoot, "");
          }
        },
        pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["DatePipe"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9qZWN0cy90ZXN0LWFwcC9zcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], function () {
          return [{
            type: _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__["PlayerClientService"]
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
      "e4iD");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "2kYt");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @reveldigital/player-client */
      "bxFX");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/locales/fr */
      "6Wo6");
      /* harmony import */


      var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/locales/ru */
      "KKLh");
      /* harmony import */


      var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6__);

      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_5___default.a);
      Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["registerLocaleData"])(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_6___default.a);

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
        providers: [{
          provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
          useValue: "fr"
        }, {
          provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
          useValue: '/gadgets/ifr'
        }],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__["PlayerClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__["PlayerClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_4__["PlayerClientModule"]],
            providers: [{
              provide: _angular_core__WEBPACK_IMPORTED_MODULE_1__["LOCALE_ID"],
              useValue: "fr"
            }, {
              provide: _angular_common__WEBPACK_IMPORTED_MODULE_2__["APP_BASE_HREF"],
              useValue: '/gadgets/ifr'
            }],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "bxFX":
    /*!*******************************************************************************************************************************************************!*\
      !*** C:/Users/mike_/Documents/GitHub/reveldigital-client-library/dist/reveldigital/player-client/__ivy_ngcc__/fesm2015/reveldigital-player-client.js ***!
      \*******************************************************************************************************************************************************/

    /*! exports provided: PlayerClientModule, PlayerClientService */

    /***/
    function bxFX(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerClientModule", function () {
        return PlayerClientModule;
      });
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "PlayerClientService", function () {
        return PlayerClientService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "D57K");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "EM62");
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs */
      "+kfY");

      var PlayerClientService = /*#__PURE__*/function () {
        function PlayerClientService() {
          _classCallCheck(this, PlayerClientService);

          this.onCommand$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
          var self = this;
          window.RevelDigital = {
            Controller: {
              onCommand: function onCommand(name, arg) {
                self.onCommand$.next({
                  name: name,
                  arg: arg
                });
              }
            }
          };
          this.clientPromise = null;
        }

        _createClass(PlayerClientService, [{
          key: "callback",
          value: function callback() {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }

            this.getClient().then(function (client) {
              switch (args.length) {
                case 0:
                  client.callback();
                  break;

                case 1:
                  client.callback(args[0]);
                  break;

                case 2:
                  client.callback(args[1]);
                  break;

                case 3:
                  client.callback(args[2]);
                  break;

                case 4:
                  client.callback(args[3]);
                  break;

                case 5:
                  client.callback(args[4]);
                  break;
              }
            });
          }
        }, {
          key: "getDeviceTime",
          value: function getDeviceTime(date) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var client;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context.sent;

                      if (!(date !== undefined)) {
                        _context.next = 5;
                        break;
                      }

                      return _context.abrupt("return", client.getDeviceTime(date));

                    case 5:
                      return _context.abrupt("return", client.getDeviceTime());

                    case 6:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "getDeviceTimeZoneName",
          value: function getDeviceTimeZoneName() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var client;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context2.sent;
                      return _context2.abrupt("return", client.getDeviceTimeZoneName());

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "getDeviceTimeZoneID",
          value: function getDeviceTimeZoneID() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var client;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context3.sent;
                      return _context3.abrupt("return", client.getDeviceTimeZoneID());

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "getDeviceTimeZoneOffset",
          value: function getDeviceTimeZoneOffset() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var client;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      _context4.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context4.sent;
                      return _context4.abrupt("return", client.getDeviceTimeZoneOffset());

                    case 4:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "getLanguageCode",
          value: function getLanguageCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
              var client;
              return regeneratorRuntime.wrap(function _callee5$(_context5) {
                while (1) {
                  switch (_context5.prev = _context5.next) {
                    case 0:
                      _context5.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context5.sent;
                      return _context5.abrupt("return", client.getLanguageCode());

                    case 4:
                    case "end":
                      return _context5.stop();
                  }
                }
              }, _callee5, this);
            }));
          }
        }, {
          key: "getDeviceKey",
          value: function getDeviceKey() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
              var client;
              return regeneratorRuntime.wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context6.sent;
                      return _context6.abrupt("return", client.getDeviceKey());

                    case 4:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }, {
          key: "sendCommand",
          value: function sendCommand(name, arg) {
            this.getClient().then(function (client) {
              client.sendCommand(name, arg);
            });
          }
        }, {
          key: "track",
          value: function track(eventName, properties) {
            this.getClient().then(function (client) {
              client.track(eventName, JSON.stringify(properties));
            });
          }
        }, {
          key: "timeEvent",
          value: function timeEvent(eventName) {
            this.getClient().then(function (client) {
              client.timeEvent(eventName);
            });
          }
        }, {
          key: "newEventSession",
          value: function newEventSession(id) {
            this.getClient().then(function (client) {
              if (id !== undefined) {
                client.newEventSession();
              } else {
                client.newEventSession(id);
              }
            });
          }
        }, {
          key: "getRevelRoot",
          value: function getRevelRoot() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var client;
              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      _context7.next = 2;
                      return this.getClient();

                    case 2:
                      client = _context7.sent;
                      return _context7.abrupt("return", client.getRevelRoot());

                    case 4:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7, this);
            }));
          } // ---
          // PRIVATE METHODS.
          // ---
          // I return a Promise that resolves with a Tracker API (which may be the 3rd-party
          // library or a mock API representation).

        }, {
          key: "getClient",
          value: function getClient() {
            if (this.clientPromise) {
              return this.clientPromise;
            }

            if (window.Client) {
              return this.clientPromise = Promise.resolve(window.Client);
            } // A "complete" status indicates that the "load" event has been fired on the
            // window; and, that all sub-resources such as Scripts, Images, and Frames have
            // been loaded.


            if (window.document.readyState === "complete") {
              // If this event has fired AND the 3rd-party script isn't available (see IF-
              // condition BEFORE this one), it means that the 3rd-party script either
              // failed on the network or was BLOCKED by an ad-blocker. As such, we have to
              // fall-back to using a mock API.
              return this.clientPromise = Promise.resolve(new NoopClient());
            } // ASSERT: If we made it this far, the document has not completed loading (but it
            // may be in an "interactive" state which is when I believe that the Angular app
            // gets bootstrapped). As such, we need bind to the LOAD event to wait for our
            // third-party scripts to load (or fail to load, or be blocked).


            this.clientPromise = new Promise(function (resolve) {
              window.addEventListener("load", function handleWindowLoad() {
                // At this point, the 3rd-party library is either available or
                // it's not - there's no further loading to do. If it's not
                // present on the global scope, we're going to fall-back to using
                // a mock API.
                resolve(window.Client || new NoopClient());
              });
            });
            return this.clientPromise;
          }
        }]);

        return PlayerClientService;
      }();

      PlayerClientService.ɵfac = function PlayerClientService_Factory(t) {
        return new (t || PlayerClientService)();
      };

      PlayerClientService.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
        factory: function PlayerClientService_Factory() {
          return new PlayerClientService();
        },
        token: PlayerClientService,
        providedIn: "root"
      });

      PlayerClientService.ctorParameters = function () {
        return [];
      };
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayerClientService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [];
        }, null);
      })(); // ----------------------------------------------------------------------------------- //
      // ----------------------------------------------------------------------------------- //
      // I provide a mock API for the 3rd-party script. This just allows the consuming code to
      // act as though the library is available even if it failed to load (example, it was
      // blocked by an ad-blocker).


      var NoopClient = /*#__PURE__*/function () {
        function NoopClient() {
          _classCallCheck(this, NoopClient);

          console.warn("Client API not available, falling back to mock API.");
        }

        _createClass(NoopClient, [{
          key: "callback",
          value: function callback() {// NOOP implement, nothing to do....
          }
        }, {
          key: "getDeviceTime",
          value: function getDeviceTime(date) {
            return Promise.resolve(null);
          }
        }, {
          key: "getDeviceTimeZoneName",
          value: function getDeviceTimeZoneName() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
              return regeneratorRuntime.wrap(function _callee8$(_context8) {
                while (1) {
                  switch (_context8.prev = _context8.next) {
                    case 0:
                      return _context8.abrupt("return", Promise.resolve(null));

                    case 1:
                    case "end":
                      return _context8.stop();
                  }
                }
              }, _callee8);
            }));
          }
        }, {
          key: "getDeviceTimeZoneID",
          value: function getDeviceTimeZoneID() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
              return regeneratorRuntime.wrap(function _callee9$(_context9) {
                while (1) {
                  switch (_context9.prev = _context9.next) {
                    case 0:
                      return _context9.abrupt("return", Promise.resolve(null));

                    case 1:
                    case "end":
                      return _context9.stop();
                  }
                }
              }, _callee9);
            }));
          }
        }, {
          key: "getDeviceTimeZoneOffset",
          value: function getDeviceTimeZoneOffset() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", Promise.resolve(null));

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }, {
          key: "getLanguageCode",
          value: function getLanguageCode() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
              return regeneratorRuntime.wrap(function _callee11$(_context11) {
                while (1) {
                  switch (_context11.prev = _context11.next) {
                    case 0:
                      return _context11.abrupt("return", Promise.resolve(null));

                    case 1:
                    case "end":
                      return _context11.stop();
                  }
                }
              }, _callee11);
            }));
          }
        }, {
          key: "getDeviceKey",
          value: function getDeviceKey() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return", Promise.resolve(null));

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "sendCommand",
          value: function sendCommand(name, arg) {// NOOP implement, nothing to do....
          }
        }, {
          key: "track",
          value: function track(eventName, properties) {// NOOP implement, nothing to do....
          }
        }, {
          key: "timeEvent",
          value: function timeEvent(eventName) {// NOOP implement, nothing to do....
          }
        }, {
          key: "newEventSession",
          value: function newEventSession(id) {// NOOP implement, nothing to do....
          }
        }, {
          key: "getRevelRoot",
          value: function getRevelRoot() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
              return regeneratorRuntime.wrap(function _callee13$(_context13) {
                while (1) {
                  switch (_context13.prev = _context13.next) {
                    case 0:
                      return _context13.abrupt("return", Promise.resolve(null));

                    case 1:
                    case "end":
                      return _context13.stop();
                  }
                }
              }, _callee13);
            }));
          }
        }]);

        return NoopClient;
      }();

      var PlayerClientModule = function PlayerClientModule() {
        _classCallCheck(this, PlayerClientModule);
      };

      PlayerClientModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: PlayerClientModule
      });
      PlayerClientModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function PlayerClientModule_Factory(t) {
          return new (t || PlayerClientModule)();
        },
        imports: [[]]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PlayerClientModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            imports: []
          }]
        }], null, null);
      })();
      /*
       * Public API Surface of player-client
       */

      /**
       * Generated bundle index. Do not edit.
       */
      //# sourceMappingURL=reveldigital-player-client.js.map

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
      "EM62");
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
      "e4iD");

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