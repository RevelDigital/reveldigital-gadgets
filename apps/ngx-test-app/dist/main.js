"use strict";
(self["webpackChunktest_app"] = self["webpackChunktest_app"] || []).push([["main"],{

/***/ 46633:
/*!****************************************************!*\
  !*** ./projects/test-app/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reveldigital/player-client */ 46907);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 90587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);




class AppComponent {
    constructor(client) {
        this.client = client;
        this.title = 'test-app';
        this.state = 'Not ready';
        this.client.onReady$.subscribe((val) => {
            console.log(val ? 'Ready' : 'Not ready');
            this.state = val ? 'Ready' : 'Not ready';
        });
        this.client.onCommand$.subscribe((cmd) => {
            console.log(`onCommand: ${cmd.name}, ${cmd.arg}`);
        });
        this.client.onStart$.subscribe(() => {
            console.log("onStart");
            this.state = 'Started';
        });
        this.client.onStop$.subscribe(() => {
            console.log("onStop");
            this.state = 'Stopped';
        });
    }
    ngOnInit() {
        setInterval(() => {
            this.update();
        }, 1000);
    }
    update() {
        this.client.getDeviceTime().then((res) => {
            this.localTime = new Date();
            this.deviceTime = new Date(res);
        });
        this.client.getDeviceTimeZoneName().then((res) => {
            this.TZName = res;
        });
        this.client.getDeviceTimeZoneID().then((res) => {
            this.TZId = res;
        });
        this.client.getDeviceTimeZoneOffset().then((res) => {
            this.TZOffset = res;
        });
        this.client.getLanguageCode().then((res) => {
            this.langCode = res;
        });
        this.client.getDeviceKey().then((res) => {
            this.deviceKey = res;
        });
        this.client.getRevelRoot().then((res) => {
            this.revelRoot = res;
        });
        this.client.getCommandMap().then((res) => {
            this.commandMap = res;
        });
    }
    sendCommand() {
        this.client.sendCommand("test", "it");
    }
    sendRemoteCommand() {
        this.client.sendRemoteCommand([this.remoteDeviceKey], "test", "it");
    }
    trackEvent() {
        this.client.track("test", { "a": "b" });
    }
    callback() {
        this.client.callback('test');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__.PlayerClientService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 32, vars: 19, consts: [[3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "date");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](22, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_23_listener() { return ctx.sendCommand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Send Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_25_listener() { return ctx.trackEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "Track Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_27_listener() { return ctx.callback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_29_listener() { return ctx.sendRemoteCommand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Send Remote Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_31_listener($event) { return ctx.remoteDeviceKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("State: ", ctx.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Local Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 11, ctx.localTime, "medium"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 14, ctx.deviceTime, "medium"), "");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Command Map: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 17, ctx.commandMap), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remoteDeviceKey);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 46604:
/*!*************************************************!*\
  !*** ./projects/test-app/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 36362);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 46633);
/* harmony import */ var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reveldigital/player-client */ 46907);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr */ 58384);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/ru */ 17954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 90587);









(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_2__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [
        {
            provide: _angular_core__WEBPACK_IMPORTED_MODULE_4__.LOCALE_ID,
            useFactory: () => {
                try {
                    return new gadgets.Prefs().getLang();
                }
                catch (_a) {
                    return 'en';
                }
            }
        },
        { provide: _angular_common__WEBPACK_IMPORTED_MODULE_3__.APP_BASE_HREF, useValue: '/gadgets/ifr' }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__.PlayerClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__.PlayerClientModule] }); })();


/***/ }),

/***/ 18084:
/*!***********************************************************!*\
  !*** ./projects/test-app/src/environments/environment.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 73849:
/*!***************************************!*\
  !*** ./projects/test-app/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 50318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 46604);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 18084);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 46907:
/*!*********************************************************************************!*\
  !*** ./dist/reveldigital/player-client/fesm2015/reveldigital-player-client.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerClientModule": () => (/* binding */ PlayerClientModule),
/* harmony export */   "PlayerClientService": () => (/* binding */ PlayerClientService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 34929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 80228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 76317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 23280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ 81203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ 19337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 50635);






class PlayerClientService {
  constructor(zone) {
    this.onCommand$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.onReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(false);
    this.onStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.onStop$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
    this.onStartEvt$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'RevelDigital.Start').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(this.onStart$));
    this.onStopEvt$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'RevelDigital.Stop').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(this.onStop$));
    this.onCommandEvt$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_2__.fromEvent)(document, 'RevelDigital.Command').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.map)(e => {
      return {
        name: e.detail.name,
        arg: e.detail.arg
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.tap)(this.onCommand$));
    let self = this;
    window.RevelDigital = {
      Controller: {
        onCommand: function (name, arg) {
          zone.run(() => {
            self.onCommand$.next({
              name: name,
              arg: arg
            });
          });
        },
        onStart: function () {
          zone.run(() => {
            self.onStart$.next();
          });
        },
        onStop: function () {
          zone.run(() => {
            self.onStop$.next();
          });
        }
      }
    };
    this.onStartSub = this.onStartEvt$.subscribe(() => {});
    this.onStopSub = this.onStopEvt$.subscribe(() => {});
    this.onCommandSub = this.onCommandEvt$.subscribe(() => {});
    this.clientPromise = null;
    this.onReady$.next(true);
  }

  ngOnDestroy() {
    var _a, _b, _c;

    (_a = this.onStartSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    (_b = this.onStopSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    (_c = this.onCommandSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    this.onReady$.next(false);
  }

  static init(data) {
    console.log("init()");
  }

  callback(...args) {
    this.getClient().then(client => {
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

  getDeviceTime(date) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();

      if (date !== undefined) {
        return client.getDeviceTime(date);
      }

      return client.getDeviceTime();
    });
  }

  getDeviceTimeZoneName() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceTimeZoneName();
    });
  }

  getDeviceTimeZoneID() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceTimeZoneID();
    });
  }

  getDeviceTimeZoneOffset() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceTimeZoneOffset();
    });
  }

  getLanguageCode() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getLanguageCode();
    });
  }

  getDeviceKey() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceKey();
    });
  }

  sendCommand(name, arg) {
    this.getClient().then(client => {
      client.sendCommand(name, arg);
    });
  }

  sendRemoteCommand(deviceKeys, name, arg) {
    this.getClient().then(client => {
      client.sendRemoteCommand(deviceKeys, name, arg);
    });
  }

  track(eventName, properties) {
    this.getClient().then(client => {
      client.track(eventName, JSON.stringify(properties));
    });
  }

  timeEvent(eventName) {
    this.getClient().then(client => {
      client.timeEvent(eventName);
    });
  }

  newEventSession(id) {
    this.getClient().then(client => {
      if (id !== undefined) {
        client.newEventSession();
      } else {
        client.newEventSession(id);
      }
    });
  }

  getRevelRoot() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getRevelRoot();
    });
  }

  getCommandMap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return JSON.parse(yield client.getCommandMap()); // let map = new Map<string, any>();
      // let obj = JSON.parse(await client.getCommandMap());
      // for (let key in obj) {
      //   map.set(key, obj[key]);
      // }
      // return map;
    });
  } // ---
  // PRIVATE METHODS.
  // ---


  getClient() {
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


    this.clientPromise = new Promise(resolve => {
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

}

PlayerClientService.ɵfac = function PlayerClientService_Factory(t) {
  return new (t || PlayerClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone));
};

PlayerClientService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: PlayerClientService,
  factory: PlayerClientService.ɵfac,
  providedIn: 'root'
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PlayerClientService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgZone
    }];
  }, null);
})(); // ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
// I provide a mock API for the 3rd-party script. This just allows the consuming code to
// act as though the library is available even if it failed to load (example, it was
// blocked by an ad-blocker).


class NoopClient {
  constructor() {
    console.warn("Client API not available, falling back to mock API.");
  }

  callback(...args) {// NOOP implement, nothing to do....
  }

  getDeviceTime(date) {
    return Promise.resolve(null);
  }

  getDeviceTimeZoneName() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }

  getDeviceTimeZoneID() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }

  getDeviceTimeZoneOffset() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }

  getLanguageCode() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }

  getDeviceKey() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }

  sendCommand(name, arg) {// NOOP implement, nothing to do....
  }

  sendRemoteCommand(deviceKeys, name, arg) {// NOOP implement, nothing to do....
  }

  track(eventName, properties) {// NOOP implement, nothing to do....
  }

  timeEvent(eventName) {// NOOP implement, nothing to do....
  }

  newEventSession(id) {// NOOP implement, nothing to do....
  }

  getRevelRoot() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }

  getCommandMap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve('{}');
    });
  }

}

class PlayerClientModule {}

PlayerClientModule.ɵfac = function PlayerClientModule_Factory(t) {
  return new (t || PlayerClientModule)();
};

PlayerClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineNgModule"]({
  type: PlayerClientModule
});
PlayerClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.APP_INITIALIZER,
    useFactory: () => initializeApp,
    deps: [PlayerClientService],
    multi: true
  }],
  imports: [[]]
});

(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵsetClassMetadata"](PlayerClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule,
    args: [{
      imports: [],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_7__.APP_INITIALIZER,
        useFactory: () => initializeApp,
        deps: [PlayerClientService],
        multi: true
      }]
    }]
  }], null, null);
})();

function initializeApp() {
  return new Promise((resolve, reject) => {
    PlayerClientService.init({});
    resolve(true);
  });
}
/*
 * Public API Surface of player-client
 */

/**
 * Generated bundle index. Do not edit.
 */




/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(73849)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map