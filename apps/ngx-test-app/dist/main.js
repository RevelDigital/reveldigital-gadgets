"use strict";
(self["webpackChunktest_app"] = self["webpackChunktest_app"] || []).push([["main"],{

/***/ 6633:
/*!****************************************************!*\
  !*** ./projects/test-app/src/app/app.component.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reveldigital/player-client */ 6907);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);




class AppComponent {
    //prefs = new gadgets.Prefs();
    constructor(client) {
        this.client = client;
        this.title = 'test-app';
        this.state = 'Not ready';
        this.prefs = client.getPrefs();
        this.style = this.prefs.getString('myStylePref');
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
        this.client.getWidth().then((res) => {
            this.width = res;
        });
        this.client.getHeight().then((res) => {
            this.height = res;
        });
        this.client.getDuration().then((res) => {
            this.duration = res;
        });
        this.client.getSdkVersion().then((res) => {
            this.version = res;
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
    finish() {
        this.client.finish();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__.PlayerClientService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 37, vars: 24, consts: [[3, "click"], ["type", "text", 3, "ngModel", "ngModelChange"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](24, "safeStyle");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_26_listener() { return ctx.sendCommand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "Send Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_28_listener() { return ctx.trackEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "Track Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_30_listener() { return ctx.callback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_32_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_34_listener() { return ctx.sendRemoteCommand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Send Remote Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function AppComponent_Template_input_ngModelChange_36_listener($event) { return ctx.remoteDeviceKey = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("State: ", ctx.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Local Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 14, ctx.localTime, "medium"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Device Time: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](7, 17, ctx.deviceTime, "medium"), "");
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Command Map: ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](22, 20, ctx.commandMap), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleMap"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](24, 22, ctx.style));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Sample Pref: ", ctx.prefs.getString("myStringPref"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.remoteDeviceKey);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.NgModel], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_3__.JsonPipe, _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__.SafeStylePipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


/***/ }),

/***/ 6604:
/*!*************************************************!*\
  !*** ./projects/test-app/src/app/app.module.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component */ 6633);
/* harmony import */ var _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @reveldigital/player-client */ 6907);
/* harmony import */ var _angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/locales/fr */ 8384);
/* harmony import */ var _angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/locales/ru */ 7954);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);








(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_fr__WEBPACK_IMPORTED_MODULE_1__["default"]);
(0,_angular_common__WEBPACK_IMPORTED_MODULE_3__.registerLocaleData)(_angular_common_locales_ru__WEBPACK_IMPORTED_MODULE_2__["default"]);
class AppModule {
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(); };
AppModule.ɵmod = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent] });
AppModule.ɵinj = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjector"]({ providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
            _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__.PlayerClientModule
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_0__.AppComponent], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_5__.BrowserModule,
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__.FormsModule,
        _reveldigital_player_client__WEBPACK_IMPORTED_MODULE_7__.PlayerClientModule] }); })();


/***/ }),

/***/ 8084:
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

/***/ 3849:
/*!***************************************!*\
  !*** ./projects/test-app/src/main.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6604);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 8084);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 6907:
/*!*********************************************************************************!*\
  !*** ./dist/reveldigital/player-client/fesm2015/reveldigital-player-client.mjs ***!
  \*********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NgSafeStylePipeModule": () => (/* binding */ NgSafeStylePipeModule),
/* harmony export */   "PlayerClientModule": () => (/* binding */ PlayerClientModule),
/* harmony export */   "PlayerClientService": () => (/* binding */ PlayerClientService),
/* harmony export */   "SafeStylePipe": () => (/* binding */ SafeStylePipe)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 228);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 6317);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ 3280);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ 1203);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ 9337);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 635);
/* harmony import */ var js_yaml__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-yaml */ 5474);
/* harmony import */ var webfontloader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webfontloader */ 7522);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser */ 318);














// Generated by genversion.
const version = '1.0.10';
class PlayerClientService {
  // private onPostMessageSub: Subscription;
  // private onPostMessageEvt$ = fromEvent(window, 'message').pipe(
  //   filter((messageEvent: MessageEvent) =>
  //     messageEvent.source !== window.parent &&
  //     typeof messageEvent.data === 'string' &&
  //     messageEvent.data.startsWith('reveldigital:')),
  //   map((e: any) => { return JSON.parse(e.substring(13)) as Command }),
  //   share(),
  //   tap(this.onCommand$)
  // );
  /** @ignore */
  constructor(zone) {
    /**
     * Commands sent to this player.
     */
    this.onCommand$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Signals the gadget has been loaded and is ready to start.
     */
    this.onReady$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject(false);
    /**
     * Signals the gadget has been started by the player.
     */
    this.onStart$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /**
     * Signals the gadgets has been stopped by the player.
     */
    this.onStop$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
    /** @ignore */
    this.onStartEvt$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'RevelDigital.Start').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(this.onStart$));
    /** @ignore */
    this.onStopEvt$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'RevelDigital.Stop').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(this.onStop$));
    /** @ignore */
    this.onCommandEvt$ = (0,rxjs__WEBPACK_IMPORTED_MODULE_4__.fromEvent)(document, 'RevelDigital.Command').pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(e => {
      return {
        name: e.detail.name,
        arg: e.detail.arg
      };
    }), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_5__.share)(), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_6__.tap)(this.onCommand$));
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
            self.onStart$.next(null);
          });
        },
        onStop: function () {
          zone.run(() => {
            self.onStop$.next(null);
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
  /** @ignore */
  ngOnDestroy() {
    var _a, _b, _c;
    (_a = this.onStartSub) === null || _a === void 0 ? void 0 : _a.unsubscribe();
    (_b = this.onStopSub) === null || _b === void 0 ? void 0 : _b.unsubscribe();
    (_c = this.onCommandSub) === null || _c === void 0 ? void 0 : _c.unsubscribe();
    this.onReady$.next(false);
  }
  /** @ignore */
  static init(data) {
    console.log('%c⚙️ Initializing Revel Digital client library', 'background-color:blue; color:yellow;');
  }
  /**
   * This method allows the gadget to communicate with player scripting.
   * If the appropriate scripting is in place in the currently running template, calling this method
   * will initiate a callback which can be acted upon in player script.
   *
   * @example
   * client.callback('test', 'this');
   *
   * @param args variable number of arguments
   */
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
  /**
   * Accessor method for the user preferences interface exposed by the Gadgets API.
   *
   * See {@link https://developers.google.com/gadgets/docs/basic} for more details on the Gadgets API.
   *
   * @example
   * constructor(public client: PlayerClientService) {
   *            let prefs = client.getPrefs();
   *            let myString = prefs.getString('myStringPref');
   * }
   * @returns {gadgets.Prefs} Gadget API Prefs object
   */
  getPrefs() {
    return new window['gadgets']['Prefs']();
  }
  /**
   * Returns the current device time in ISO8601 format.
   * Current device time is determined by the device timezone assigned to the device in the CMS.
   *
   * @param date Optional. If supplied will translate the supplied date/time to device time based on respective timezones.
   * @returns Date/time in ISO8601 format
   */
  getDeviceTime(date) {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      if (date !== undefined) {
        return client.getDeviceTime(date);
      }
      return client.getDeviceTime();
    });
  }
  /**
   * Returns the timezone name currently assigned to the device.
   *
   * @returns Timezone Name
   */
  getDeviceTimeZoneName() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceTimeZoneName();
    });
  }
  /**
   * Returns the timezone ID currently assigned to the device.
   *
   * @returns Timezone ID
   */
  getDeviceTimeZoneID() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceTimeZoneID();
    });
  }
  /**
   * Returns the numerical offset from GMT of the timezone currently assigned to the device.
   *
   * @returns Timezone offset
   */
  getDeviceTimeZoneOffset() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceTimeZoneOffset();
    });
  }
  /**
   * Returns the language code of the language currently assigned to the device.
   *
   * @returns Language code
   */
  getLanguageCode() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getLanguageCode();
    });
  }
  /**
   * Returns the unique Revel Digital device key associated with the device.
   *
   * @returns Device key
   */
  getDeviceKey() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDeviceKey();
    });
  }
  /**
   * Send a command to the player device.
   *
   * @param name Command name
   * @param arg Command argument
   */
  sendCommand(name, arg) {
    this.getClient().then(client => {
      client.sendCommand(name, arg);
    });
  }
  /**
   * Send a command to any remote player with the supplied device key(s).
   * Note: Remote commands can only be delivered to devices within the same account as the sender device.
   *
   * @param deviceKeys Array of remote device keys
   * @param name Command name
   * @param arg Command arg
   */
  sendRemoteCommand(deviceKeys, name, arg) {
    this.getClient().then(client => {
      client.sendRemoteCommand(deviceKeys, name, arg);
    });
  }
  /**
   * Log an event for use with AdHawk analytics.
   * Events are used for tracking various metrics including usage statistics, player condition, state changes, etc.
   *
   * @param eventName Unique name for this event
   * @param properties A map of user defined properties to associate with this event
   */
  track(eventName, properties) {
    this.getClient().then(client => {
      client.track(eventName, JSON.stringify(properties));
    });
  }
  /**
   * Method for initiating a timed event.
   * Timed events are useful for tracking the duration of an event and must be proceeded with a call to track().
   *
   * @example
   * client.timeEvent('testEvent');
   * client.track("test", { "a": "b" });
   * @param eventName Unique name for this event
   */
  timeEvent(eventName) {
    this.getClient().then(client => {
      client.timeEvent(eventName);
    });
  }
  /**
   * A session is a way of grouping events together. Each event has an associated session ID.
   * Session ID's are randomly generated and reset by subsequent calls to newEventSession().
   *
   * Each call to track() will utilize the same session ID, until another call to newEventSession().
   * @param id Optional. User supplied session ID. If not supplied a random session ID will be generated.
   */
  newEventSession(id) {
    this.getClient().then(client => {
      if (id !== undefined) {
        client.newEventSession();
      } else {
        client.newEventSession(id);
      }
    });
  }
  /**
   * Returns the root folder utilized by this player device.
   *
   * @returns Path to the root folder
   */
  getRevelRoot() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getRevelRoot();
    });
  }
  /**
   * Returns a map of commands currently active for this device.
   *
   * @returns Map of commands currently active for this device.
   */
  getCommandMap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return JSON.parse(yield client.getCommandMap());
    });
  }
  /**
   * Indicate to the player that this gadget has finished it's visualization.
   * This allows the player to proceed with the next item in a playlist if applicable.
   */
  finish() {
    this.getClient().then(client => {
      client.finish();
    });
  }
  /**
   * Check is the gadget is running in preview mode. Preview mode is enabled when the gadget is
   * being edited in the CMS, or otherwise not running in a normal player environment.
   *
   * @returns True if the gadget is running in preview mode, false otherwise.
   */
  isPreviewMode() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client instanceof NoopClient;
    });
  }
  /**
  * Returns the device details associated with the player running the gadget or web app.
  *
  * @returns Device details.
  */
  getDevice() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      let obj = JSON.parse(yield client.getDevice());
      const device = [obj].map(device => {
        var _a, _b, _c, _d, _e, _f, _g, _h;
        return {
          name: device.name,
          registrationKey: device.key,
          deviceType: device.devicetype,
          enteredService: new Date(device.enteredservice),
          langCode: device.langcode,
          timeZone: device.timezone,
          tags: (_a = device.description) === null || _a === void 0 ? void 0 : _a.split('\n'),
          location: {
            city: (_b = device.location) === null || _b === void 0 ? void 0 : _b.city,
            state: (_c = device.location) === null || _c === void 0 ? void 0 : _c.state,
            country: (_d = device.location) === null || _d === void 0 ? void 0 : _d.country,
            postalCode: (_e = device.location) === null || _e === void 0 ? void 0 : _e.postalcode,
            address: (_f = device.location) === null || _f === void 0 ? void 0 : _f.address,
            latitude: (_g = device.location) === null || _g === void 0 ? void 0 : _g.latitude,
            longitude: (_h = device.location) === null || _h === void 0 ? void 0 : _h.longitude
          }
        };
      });
      return device[0];
    });
  }
  /**
   * Returns the width of the visualization area.
   *
   * @returns Width of the visualization area
   */
  getWidth() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getWidth();
    });
  }
  /**
   * Returns the height of the visualization area.
   *
   * @returns Height of the visualization area
   */
  getHeight() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getHeight();
    });
  }
  /**
   * Returns the duration of the currently playing source.
   * (only applicable when associated with a playlist)
   *
   * @returns Duration of the current item in milliseconds
   */
  getDuration() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      const client = yield this.getClient();
      return client.getDuration();
    });
  }
  /**
   * Returns the current SDK version.
   *
   * @returns SDK version
   */
  getSdkVersion() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(version);
    });
  }
  // ---
  // PRIVATE METHODS.
  // ---
  /** @ignore */
  getClient() {
    if (this.clientPromise) {
      return this.clientPromise;
    }
    if (window.Client) {
      return this.clientPromise = Promise.resolve(window.Client);
    }
    // A "complete" status indicates that the "load" event has been fired on the
    // window; and, that all sub-resources such as Scripts, Images, and Frames have
    // been loaded.
    if (window.document.readyState === "complete") {
      // If this event has fired AND the 3rd-party script isn't available (see IF-
      // condition BEFORE this one), it means that the 3rd-party script either
      // failed on the network or was BLOCKED by an ad-blocker. As such, we have to
      // fall-back to using a mock API.
      return this.clientPromise = Promise.resolve(new NoopClient());
    }
    // ASSERT: If we made it this far, the document has not completed loading (but it
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
  return new (t || PlayerClientService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone));
};
PlayerClientService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: PlayerClientService,
  factory: PlayerClientService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](PlayerClientService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgZone
    }];
  }, null);
})();
// ----------------------------------------------------------------------------------- //
// ----------------------------------------------------------------------------------- //
// I provide a mock API for the 3rd-party script. This just allows the consuming code to
// act as though the library is available even if it failed to load (example, it was
// blocked by an ad-blocker).
/** @ignore */
class NoopClient {
  constructor() {
    console.log('%cClient API not available, falling back to mock API', 'background-color:blue; color:yellow;');
  }
  callback(...args) {
    // NOOP implement, nothing to do....
  }
  getDeviceTime(date) {
    return Promise.resolve(new Date().toISOString());
  }
  getDeviceTimeZoneName() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getDeviceTimeZoneID() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getDeviceTimeZoneOffset() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getLanguageCode() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getDeviceKey() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  sendCommand(name, arg) {
    // NOOP implement, nothing to do....
  }
  sendRemoteCommand(deviceKeys, name, arg) {
    // NOOP implement, nothing to do....
  }
  track(eventName, properties) {
    // NOOP implement, nothing to do....
  }
  timeEvent(eventName) {
    // NOOP implement, nothing to do....
  }
  newEventSession(id) {
    // NOOP implement, nothing to do....
  }
  getRevelRoot() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getCommandMap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve('{}');
    });
  }
  finish() {
    // NOOP implement, nothing to do....
  }
  getDevice() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getWidth() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getHeight() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getDuration() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(null);
    });
  }
  getSdkVersion() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      return Promise.resolve(version);
    });
  }
}
const isLocal = /localhost/.test(document.location.host);
!isLocal && (0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.enableProdMode)();
/** @ignore */
class AppInitService {
  constructor(http, _route, _router) {
    this.http = http;
    this._route = _route;
    this._router = _router;
  }
  init() {
    return new Promise(resolve => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
      this.loadFonts();
      if ((0,_angular_core__WEBPACK_IMPORTED_MODULE_9__.isDevMode)()) {
        console.log('%cRunning in development mode', 'background-color:blue; color:yellow;');
        /**
         * Shim the shindig prefs functionality for dev mode
         */
        window.gadgets = {
          Prefs: class {
            getString(key) {
              return this.getParameterByName(key);
            }
            getArray(key) {
              return this.getParameterByName(key).split(',');
            }
            getBool(key) {
              return this.getParameterByName(key) === 'true';
            }
            getCountry() {}
            getFloat(key) {
              return parseFloat(this.getParameterByName(key));
            }
            getInt(key) {
              return parseInt(this.getParameterByName(key));
            }
            getLang() {
              return this.getParameterByName('lang') === '' ? 'en' : this.getParameterByName('lang');
            }
            getParameterByName(name, search = window.location.href) {
              name = name.replace(/[\[\]]/g, '\\$&');
              let regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
                results = regex.exec(search);
              if (!results) return '';
              if (!results[2]) return '';
              return decodeURIComponent(results[2].replace(/\+/g, ' '));
            }
          }
        };
        this.http.get('assets/gadget.yaml', {
          responseType: 'text'
        }).subscribe(data => {
          const doc = js_yaml__WEBPACK_IMPORTED_MODULE_0__.load(data);
          let params = {};
          for (const val of doc.prefs) {
            params[val.name] = val.default_value;
          }
          this._router.navigate([], {
            relativeTo: this._route,
            queryParams: params
          });
          console.log(`%cUser prefs loaded successfully`, 'background-color:blue; color:yellow;');
        }, err => {
          console.log(`%cUnable to load user preferences YAML definition file: ${err}`, 'background-color:blue; color:yellow;');
          console.log(`%cPlease see our developer documentation for help with your app configuration: https://developer.reveldigital.com`, 'background-color:red; color:yellow;');
        });
      }
      resolve();
    }));
  }
  getFamilyName(css) {
    let FONT_FAMILY_REGEX = /font-family:\s*(?:[&#39;&#34;])*['"]*(.+?)['"]*(?:[&#39;&#34;])*\s*;/i;
    if (FONT_FAMILY_REGEX.test(css)) {
      var matches = css.match(FONT_FAMILY_REGEX);
      return matches[1].split(',')[0];
    } else {
      return '';
    }
  }
  /**
   * Loads the given font from Google Web Fonts.
   */
  loadFonts() {
    const parameters = new URLSearchParams(window.location.search);
    parameters.forEach((val, key) => {
      try {
        let fontFamily = this.getFamilyName(val);
        if (fontFamily !== '') {
          webfontloader__WEBPACK_IMPORTED_MODULE_1__.load({
            google: {
              families: [fontFamily]
            },
            fontactive: familyName => {
              console.log(`%cActivating font: ${familyName}`, 'background-color:blue; color:yellow;');
            },
            fontinactive: familyName => {
              console.log(`%cFont inactive: ${familyName}`, 'background-color:red; color:yellow;');
            }
          });
        }
      } catch (e) {}
    });
  }
}
AppInitService.ɵfac = function AppInitService_Factory(t) {
  return new (t || AppInitService)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute), _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_11__.Router));
};
AppInitService.ɵprov = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjectable"]({
  token: AppInitService,
  factory: AppInitService.ɵfac,
  providedIn: 'root'
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](AppInitService, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Injectable,
    args: [{
      providedIn: 'root'
    }]
  }], function () {
    return [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.ActivatedRoute
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_11__.Router
    }];
  }, null);
})();

/**
 * The safe style pipe is used when custom styles are defined for a gadget and must be applied to an Angular
 * component. This pipe will ensure the style can be appied safely by utilizing the DomSanitizer.
 *
 * @example
 * <h2 [style]="style | safeStyle">Sample Pref: {{ prefs.getString('myStringPref') }}</h2>
 */
class SafeStylePipe {
  constructor(sanitized) {
    this.sanitized = sanitized;
  }
  transform(value) {
    return this.sanitized.bypassSecurityTrustStyle(value);
  }
}
SafeStylePipe.ɵfac = function SafeStylePipe_Factory(t) {
  return new (t || SafeStylePipe)(_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer, 16));
};
SafeStylePipe.ɵpipe = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefinePipe"]({
  name: "safeStyle",
  type: SafeStylePipe,
  pure: true
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](SafeStylePipe, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.Pipe,
    args: [{
      name: 'safeStyle'
    }]
  }], function () {
    return [{
      type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__.DomSanitizer
    }];
  }, null);
})();
class NgSafeStylePipeModule {}
NgSafeStylePipeModule.ɵfac = function NgSafeStylePipeModule_Factory(t) {
  return new (t || NgSafeStylePipeModule)();
};
NgSafeStylePipeModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: NgSafeStylePipeModule
});
NgSafeStylePipeModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](NgSafeStylePipeModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      declarations: [SafeStylePipe],
      exports: [SafeStylePipe]
    }]
  }], null, null);
})();
class PlayerClientModule {}
PlayerClientModule.ɵfac = function PlayerClientModule_Factory(t) {
  return new (t || PlayerClientModule)();
};
PlayerClientModule.ɵmod = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineNgModule"]({
  type: PlayerClientModule
});
PlayerClientModule.ɵinj = /* @__PURE__ */_angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
    useFactory: initializeApp,
    deps: [AppInitService, PlayerClientService],
    multi: true
  }, {
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
    useFactory: () => {
      try {
        return new gadgets.Prefs().getLang();
      } catch (_a) {
        return 'en';
      }
    }
  }, {
    provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.APP_BASE_HREF,
    useValue: '/gadgets/ifr'
  }],
  imports: [[_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([]), NgSafeStylePipeModule], NgSafeStylePipeModule]
});
(function () {
  (typeof ngDevMode === "undefined" || ngDevMode) && _angular_core__WEBPACK_IMPORTED_MODULE_9__["ɵsetClassMetadata"](PlayerClientModule, [{
    type: _angular_core__WEBPACK_IMPORTED_MODULE_9__.NgModule,
    args: [{
      imports: [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule, _angular_router__WEBPACK_IMPORTED_MODULE_11__.RouterModule.forRoot([]), NgSafeStylePipeModule],
      exports: [NgSafeStylePipeModule],
      providers: [{
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.APP_INITIALIZER,
        useFactory: initializeApp,
        deps: [AppInitService, PlayerClientService],
        multi: true
      }, {
        provide: _angular_core__WEBPACK_IMPORTED_MODULE_9__.LOCALE_ID,
        useFactory: () => {
          try {
            return new gadgets.Prefs().getLang();
          } catch (_a) {
            return 'en';
          }
        }
      }, {
        provide: _angular_common__WEBPACK_IMPORTED_MODULE_13__.APP_BASE_HREF,
        useValue: '/gadgets/ifr'
      }]
    }]
  }], null, null);
})();
function initializeApp(appInitService) {
  return () => (0,tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, function* () {
    PlayerClientService.init({});
    yield appInitService.init();
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
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3849)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map