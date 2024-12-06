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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6362);



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
        this.client.isPreviewMode().then((res) => {
            this.isPreviewMode = res;
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
    setPreference() {
        this.client.setPreference('myPref', 'myValue');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_reveldigital_player_client__WEBPACK_IMPORTED_MODULE_1__.PlayerClientService)); };
AppComponent.ɵcmp = /*@__PURE__*/ _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 92, vars: 23, consts: [[1, "w-screen", "h-screen", "flex", "flex-col", "items-center", "justify-center", "bg-gradient-to-br", "from-violet-600", "to-indigo-600"], [1, "not-prose", "relative", "mt-10", "rounded-xl"], [1, "shadow-sm", "overflow-hidden", "my-8", "rounded-xl"], [1, "border-collapse", "table-auto", "text-sm"], [1, "bg-white", "dark:bg-slate-800"], [1, "border-b", "border-slate-100", "dark:border-slate-600", "p-4", "pl-8", "text-slate-500", "dark:text-slate-400"], [1, "border-b", "border-slate-100", "dark:border-slate-600", "p-4", "text-slate-500", "dark:text-slate-400", "font-bold", "text-center"], [1, "border-b", "border-slate-100", "dark:border-slate-700", "p-4", "pl-8", "text-slate-500", "dark:text-slate-400"], [1, "border-b", "border-slate-100", "dark:border-slate-700", "p-4", "text-slate-500", "dark:text-slate-400", "font-bold", "text-center"], [1, "mr-2", "bg-transparent", "hover:bg-blue-500", "text-blue-700", "font-semibold", "hover:text-white", "py-2", "px-4", "border", "border-blue-500", "hover:border-transparent", "rounded", 3, "click"], [1, "bg-transparent", "hover:bg-blue-500", "text-blue-700", "font-semibold", "hover:text-white", "py-2", "px-4", "border", "border-blue-500", "hover:border-transparent", "rounded", 3, "click"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "table", 3)(4, "tbody", 4)(5, "tr")(6, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Player state");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr")(11, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Local time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tr")(17, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Device time");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](21, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "tr")(23, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Device TZ Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "tr")(28, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Device TZ ID");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "tr")(33, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " Device TZ Offset");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "tr")(38, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " Device Language Code");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "tr")(43, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Device Key");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "tr")(48, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " Revel Root");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "tr")(53, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Size");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "tr")(58, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " Duration");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "tr")(63, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " Is preview mode");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](65, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](66);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "tr")(68, "td", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](69, " SDK Version");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](70, "td", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](71);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "tr")(73, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " Command map");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](75, "td", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](76);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](77, "json");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](78, "tr")(79, "td", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Actions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "td", 6)(82, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_82_listener() { return ctx.sendCommand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](83, "Send Command");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](84, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_84_listener() { return ctx.trackEvent(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](85, "Track Event");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_86_listener() { return ctx.callback(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](87, "Callback");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](88, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_88_listener() { return ctx.finish(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](89, "Finish");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](90, "button", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AppComponent_Template_button_click_90_listener() { return ctx.setPreference(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](91, "Set Preference");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]()()()()()()()();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.state, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](15, 15, ctx.localTime, "medium"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](21, 18, ctx.deviceTime, "medium"), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TZName, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TZId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.TZOffset, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.langCode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.deviceKey, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.revelRoot, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", ctx.width, " x ", ctx.height, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.duration, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isPreviewMode, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.version, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](77, 21, ctx.commandMap), "");
    } }, pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.DatePipe, _angular_common__WEBPACK_IMPORTED_MODULE_2__.JsonPipe], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LmNzcyJ9 */"] });


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
const version = '1.0.11';
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
  /**
   * Set a preference value.
   *
   * Provides the ability to have the gadget present a UI for setting preferences.
   * Only available during design time.
   *
   * @param key Prefernce key
   * @param value Preference value
   */
  setPreference(key, value) {
    if (window.parent === window.top) {
      console.log('%csetPreference() is only available in preview mode.', 'background-color:blue; color:yellow;');
    }
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
  setPreference(key, value) {
    if (window.parent !== window.top) {
      window.parent.postMessage(JSON.stringify({
        type: 'setPreference',
        key: key,
        value: value
      }), '*');
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLWluaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL3JldmVsZGlnaXRhbC9wbGF5ZXItY2xpZW50L3NyYy9saWIvYXBwLWluaXQuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLGNBQWMsRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFHdEUsT0FBTyxLQUFLLElBQUksTUFBTSxTQUFTLENBQUM7QUFDaEMsT0FBTyxLQUFLLE9BQU8sTUFBTSxlQUFlLENBQUM7Ozs7QUFFekMsTUFBTSxPQUFPLEdBQVksV0FBVyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0FBQ2xFLENBQUMsT0FBTyxJQUFJLGNBQWMsRUFBRSxDQUFDO0FBRzdCLGNBQWM7QUFJZCxNQUFNLE9BQU8sY0FBYztJQUV6QixZQUNTLElBQWdCLEVBQ2YsTUFBc0IsRUFDdEIsT0FBZTtRQUZoQixTQUFJLEdBQUosSUFBSSxDQUFZO1FBQ2YsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsWUFBTyxHQUFQLE9BQU8sQ0FBUTtJQUN6QixDQUFDO0lBRUQsSUFBSTtRQUVGLE9BQU8sSUFBSSxPQUFPLENBQU8sS0FBSyxFQUFFLE9BQU8sRUFBRSxFQUFFO1lBRXpDLElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUVqQixJQUFJLFNBQVMsRUFBRSxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxHQUFHLENBQ1QsK0JBQStCLEVBQy9CLHNDQUFzQyxDQUN2QyxDQUFDO2dCQUVGOzttQkFFRztnQkFDRyxNQUFPLENBQUMsT0FBTyxHQUFHO29CQUV0QixLQUFLLEVBQUU7d0JBQ0wsU0FBUyxDQUFDLEdBQVcsSUFBSSxPQUFPLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxHQUFHLENBQUMsQ0FBQSxDQUFDLENBQUM7d0JBRTlELFFBQVEs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MUIsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlLCBlbmFibGVQcm9kTW9kZSwgaXNEZXZNb2RlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IEh0dHBDbGllbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29tbW9uL2h0dHBcIjtcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcclxuaW1wb3J0ICogYXMgeWFtbCBmcm9tIFwianMteWFtbFwiO1xyXG5pbXBvcnQgKiBhcyBXZWJGb250IGZyb20gJ3dlYmZvbnRsb2FkZXInO1xyXG5cclxuY29uc3QgaXNMb2NhbDogYm9vbGVhbiA9IC9sb2NhbGhvc3QvLnRlc3QoZG9jdW1lbnQubG9jYXRpb24uaG9zdCk7XHJcbiFpc0xvY2FsICYmIGVuYWJsZVByb2RNb2RlKCk7XHJcblxyXG5cclxuLyoqIEBpZ25vcmUgKi9cclxuQEluamVjdGFibGUoe1xyXG4gIHByb3ZpZGVkSW46ICdyb290J1xyXG59KVxyXG5leHBvcnQgY2xhc3MgQXBwSW5pdFNlcnZpY2Uge1xyXG5cclxuICBjb25zdHJ1Y3RvcihcclxuICAgIHB1YmxpYyBodHRwOiBIdHRwQ2xpZW50LFxyXG4gICAgcHJpdmF0ZSBfcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG4gICAgcHJpdmF0ZSBfcm91dGVyOiBSb3V0ZXIpIHtcclxuICB9XHJcblxyXG4gIGluaXQoKTogUHJvbWlzZTxhbnk+IHtcclxuXHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4oYXN5bmMgKHJlc29sdmUpID0+IHtcclxuXHJcbiAgICAgIHRoaXMubG9hZEZvbnRzKCk7XHJcblxyXG4gICAgICBpZiAoaXNEZXZNb2RlKCkpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcclxuICAgICAgICAgICclY1J1bm5pbmcgaW4gZGV2ZWxvcG1lbnQgbW9kZScsXHJcbiAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjpibHVlOyBjb2xvcjp5ZWxsb3c7J1xyXG4gICAgICAgICk7XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIFNoaW0gdGhlIHNoaW5kaWcgcHJlZnMgZnVuY3Rpb25hbGl0eSBmb3IgZGV2IG1vZGVcclxuICAgICAgICAgKi9cclxuICAgICAgICAoPGFueT53aW5kb3cpLmdhZGdldHMgPSB7XHJcblxyXG4gICAgICAgICAgUHJlZnM6IGNsYXNzIHtcclxuICAgICAgICAgICAgZ2V0U3RyaW5nKGtleTogc3RyaW5nKSB7IHJldHVybiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZShrZXkpIH1cclxuXHJcbiAgICAgICAgICAgIGdldEFycmF5KGtleTogc3RyaW5nKSB7IHJldHVybiB0aGlzLmdldFBhcmFtZXRlckJ5TmFtZShrZXkpLnNwbGl0KCcsJykgfVxyXG5cclxuICAgICAgICAgICAgZ2V0Qm9vbChrZXk6IHN0cmluZykgeyByZXR1cm4gdGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoa2V5KSA9PT0gJ3RydWUnIH1cclxuXHJcbiAgICAgICAgICAgIGdldENvdW50cnkoKSB7IH1cclxuXHJcbiAgICAgICAgICAgIGdldEZsb2F0KGtleTogc3RyaW5nKSB7IHJldHVybiBwYXJzZUZsb2F0KHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKGtleSkpIH1cclxuXHJcbiAgICAgICAgICAgIGdldEludChrZXk6IHN0cmluZykgeyByZXR1cm4gcGFyc2VJbnQodGhpcy5nZXRQYXJhbWV0ZXJCeU5hbWUoa2V5KSkgfVxyXG5cclxuICAgICAgICAgICAgZ2V0TGFuZygpIHsgcmV0dXJuIHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdsYW5nJykgPT09ICcnID8gJ2VuJyA6IHRoaXMuZ2V0UGFyYW1ldGVyQnlOYW1lKCdsYW5nJyk7IH1cclxuXHJcbiAgICAgICAgICAgIGdldFBhcmFtZXRlckJ5TmFtZShuYW1lOiBzdHJpbmcsIHNlYXJjaCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmKTogc3RyaW5nIHtcclxuXHJcbiAgICAgICAgICAgICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvW1xcW1xcXV0vZywgJ1xcXFwkJicpO1xyXG4gICAgICAgICAgICAgIGxldCByZWdleCA9IG5ldyBSZWdFeHAoJ1s/Jl0nICsgbmFtZSArICcoPShbXiYjXSopfCZ8I3wkKScpLFxyXG4gICAgICAgICAgICAgICAgcmVzdWx0cyA9IHJlZ2V4LmV4ZWMoc2VhcmNoKTtcclxuICAgICAgICAgICAgICBpZiAoIXJlc3VsdHMpIHJldHVybiAnJztcclxuICAgICAgICAgICAgICBpZiAoIXJlc3VsdHNbMl0pIHJldHVybiAnJztcclxuICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHJlc3VsdHNbMl0ucmVwbGFjZSgvXFwrL2csICcgJykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy5odHRwLmdldCgnYXNzZXRzL2dhZGdldC55YW1sJywge1xyXG4gICAgICAgICAgcmVzcG9uc2VUeXBlOiAndGV4dCdcclxuICAgICAgICB9KS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcbiAgICAgICAgICBjb25zdCBkb2M6IGFueSA9IHlhbWwubG9hZChkYXRhKTtcclxuICAgICAgICAgIGxldCBwYXJhbXM6IGFueSA9IHt9XHJcbiAgICAgICAgICBmb3IgKGNvbnN0IHZhbCBvZiBkb2MucHJlZnMpIHtcclxuICAgICAgICAgICAgcGFyYW1zW3ZhbC5uYW1lXSA9IHZhbC5kZWZhdWx0X3ZhbHVlXHJcbiAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgdGhpcy5fcm91dGVyLm5hdmlnYXRlKFtdLCB7XHJcbiAgICAgICAgICAgIHJlbGF0aXZlVG86IHRoaXMuX3JvdXRlLFxyXG4gICAgICAgICAgICBxdWVyeVBhcmFtczogcGFyYW1zLFxyXG4gICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgY29uc29sZS5sb2coXHJcbiAgICAgICAgICAgIGAlY1VzZXIgcHJlZnMgbG9hZGVkIHN1Y2Nlc3NmdWxseWAsXHJcbiAgICAgICAgICAgICdiYWNrZ3JvdW5kLWNvbG9yOmJsdWU7IGNvbG9yOnllbGxvdzsnXHJcbiAgICAgICAgICApO1xyXG4gICAgICAgIH0sIChlcnIpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWNVbmFibGUgdG8gbG9hZCB1c2VyIHByZWZlcmVuY2VzIFlBTUwgZGVmaW5pdGlvbiBmaWxlOiAke2Vycn1gLFxyXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjpibHVlOyBjb2xvcjp5ZWxsb3c7J1xyXG4gICAgICAgICAgKTtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFxyXG4gICAgICAgICAgICBgJWNQbGVhc2Ugc2VlIG91ciBkZXZlbG9wZXIgZG9jdW1lbnRhdGlvbiBmb3IgaGVscCB3aXRoIHlvdXIgYXBwIGNvbmZpZ3VyYXRpb246IGh0dHBzOi8vZGV2ZWxvcGVyLnJldmVsZGlnaXRhbC5jb21gLFxyXG4gICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjpyZWQ7IGNvbG9yOnllbGxvdzsnXHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgfVxyXG4gICAgICByZXNvbHZlKCk7XHJcbiAgICB9KTtcclxuICB9XHJcblxyXG5cclxuICBwcml2YXRlIGdldEZhbWlseU5hbWUoY3NzKSB7XHJcblxyXG4gICAgbGV0IEZPTlRfRkFNSUxZX1JFR0VYID0gL2ZvbnQtZmFtaWx5OlxccyooPzpbJiMzOTsmIzM0O10pKlsnXCJdKiguKz8pWydcIl0qKD86WyYjMzk7JiMzNDtdKSpcXHMqOy9pO1xyXG4gICAgaWYgKEZPTlRfRkFNSUxZX1JFR0VYLnRlc3QoY3NzKSkge1xyXG4gICAgICB2YXIgbWF0Y2hlcyA9IGNzcy5tYXRjaChGT05UX0ZBTUlMWV9SRUdFWCk7XHJcbiAgICAgIHJldHVybiBtYXRjaGVzWzFdLnNwbGl0KCcsJylbMF07XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gJyc7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAvKipcclxuICAgKiBMb2FkcyB0aGUgZ2l2ZW4gZm9udCBmcm9tIEdvb2dsZSBXZWIgRm9udHMuXHJcbiAgICovXHJcbiAgcHJpdmF0ZSBsb2FkRm9udHMoKTogdm9pZCB7XHJcblxyXG4gICAgY29uc3QgcGFyYW1ldGVycyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMod2luZG93LmxvY2F0aW9uLnNlYXJjaCk7XHJcbiAgICBwYXJhbWV0ZXJzLmZvckVhY2goKHZhbCwga2V5KSA9PiB7XHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgbGV0IGZvbnRGYW1pbHkgPSB0aGlzLmdldEZhbWlseU5hbWUodmFsKTtcclxuICAgICAgICBpZiAoZm9udEZhbWlseSAhPT0gJycpIHtcclxuICAgICAgICAgIFdlYkZvbnQubG9hZCh7XHJcbiAgICAgICAgICAgIGdvb2dsZToge1xyXG4gICAgICAgICAgICAgIGZhbWlsaWVzOiBbZm9udEZhbWlseV1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9udGFjdGl2ZTogKGZhbWlseU5hbWUpID0+IHtcclxuICAgICAgICAgICAgICBjb25zb2xlLmxvZyhgJWNBY3RpdmF0aW5nIGZvbnQ6ICR7ZmFtaWx5TmFtZX1gLFxyXG4gICAgICAgICAgICAgICAgJ2JhY2tncm91bmQtY29sb3I6Ymx1ZTsgY29sb3I6eWVsbG93OycpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb250aW5hY3RpdmU6IChmYW1pbHlOYW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coYCVjRm9udCBpbmFjdGl2ZTogJHtmYW1pbHlOYW1lfWAsXHJcbiAgICAgICAgICAgICAgICAnYmFja2dyb3VuZC1jb2xvcjpyZWQ7IGNvbG9yOnllbGxvdzsnKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG4gIH1cclxufVxyXG4iXX0=
//# sourceMappingURL=C:/Users/mike_/Documents/GitHub/reveldigital-client-library/dist/reveldigital/player-client/esm2020/lib/module.js.map

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2FmZS1zdHlsZS5waXBlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vcHJvamVjdHMvcmV2ZWxkaWdpdGFsL3BsYXllci1jbGllbnQvc3JjL2xpYi9zYWZlLXN0eWxlLnBpcGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLElBQUksRUFBaUIsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDOzs7QUFHOUQ7Ozs7OztHQU1HO0FBSUgsTUFBTSxPQUFPLGFBQWE7SUFDdEIsWUFBb0IsU0FBdUI7UUFBdkIsY0FBUyxHQUFULFNBQVMsQ0FBYztJQUFJLENBQUM7SUFFaEQsU0FBUyxDQUFDLEtBQVU7UUFDaEIsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLHdCQUF3QixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQzFELENBQUM7OzJHQUxRLGFBQWE7eUdBQWIsYUFBYTs0RkFBYixhQUFhO2tCQUh6QixJQUFJO21CQUFDO29CQUNGLElBQUksRUFBRSxXQUFXO2lCQUNwQjs7QUFhRCxNQUFNLE9BQU8scUJBQXFCOzttSEFBckIscUJBQXFCO29IQUFyQixxQkFBcUIsaUJBWnJCLGFBQWEsYUFBYixhQUFhO29IQVliLHFCQUFxQjs0RkFBckIscUJBQXFCO2tCQUpqQyxRQUFRO21CQUFDO29CQUNOLFlBQVksRUFBRSxDQUFDLGFBQWEsQ0FBQztvQkFDN0IsT0FBTyxFQUFFLENBQUMsYUFBYSxDQUFDO2lCQUMzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBpcGUsIFBpcGVUcmFuc2Zvcm0sIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IERvbVNhbml0aXplciB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5cclxuLyoqXHJcbiAqIFRoZSBzYWZlIHN0eWxlIHBpcGUgaXMgdXNlZCB3aGVuIGN1c3RvbSBzdHlsZXMgYXJlIGRlZmluZWQgZm9yIGEgZ2FkZ2V0IGFuZCBtdXN0IGJlIGFwcGxpZWQgdG8gYW4gQW5ndWxhclxyXG4gKiBjb21wb25lbnQuIFRoaXMgcGlwZSB3aWxsIGVuc3VyZSB0aGUgc3R5bGUgY2FuIGJlIGFwcGllZCBzYWZlbHkgYnkgdXRpbGl6aW5nIHRoZSBEb21TYW5pdGl6ZXIuXHJcbiAqIFxyXG4gKiBAZXhhbXBsZVxyXG4gKiA8aDIgW3N0eWxlXT1cInN0eWxlIHwgc2FmZVN0eWxlXCI+U2FtcGxlIFByZWY6IHt7IHByZWZzLmdldFN0cmluZygnbXlTdHJpbmdQcmVmJykgfX08L2gyPlxyXG4gKi9cclxuQFBpcGUoe1xyXG4gICAgbmFtZTogJ3NhZmVTdHlsZScsXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTYWZlU3R5bGVQaXBlIGltcGxlbWVudHMgUGlwZVRyYW5zZm9ybSB7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNhbml0aXplZDogRG9tU2FuaXRpemVyKSB7IH1cclxuXHJcbiAgICB0cmFuc2Zvcm0odmFsdWU6IGFueSk6IHVua25vd24ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNhbml0aXplZC5ieXBhc3NTZWN1cml0eVRydXN0U3R5bGUodmFsdWUpO1xyXG4gICAgfVxyXG59XHJcblxyXG5ATmdNb2R1bGUoe1xyXG4gICAgZGVjbGFyYXRpb25zOiBbU2FmZVN0eWxlUGlwZV0sXHJcbiAgICBleHBvcnRzOiBbU2FmZVN0eWxlUGlwZV0sXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBOZ1NhZmVTdHlsZVBpcGVNb2R1bGUgeyB9XHJcbiJdfQ==
//# sourceMappingURL=C:/Users/mike_/Documents/GitHub/reveldigital-client-library/dist/reveldigital/player-client/esm2020/lib/module.js.map

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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGxheWVyLWNsaWVudC5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXZlbGRpZ2l0YWwvcGxheWVyLWNsaWVudC9zcmMvbGliL3BsYXllci1jbGllbnQubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNyRSxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSx5QkFBeUIsQ0FBQztBQUM5RCxPQUFPLEVBQUUsY0FBYyxFQUFFLE1BQU0sb0JBQW9CLENBQUM7QUFDcEQsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQy9DLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSxtQkFBbUIsQ0FBQzs7O0FBZ0MxRCxNQUFNLE9BQU8sa0JBQWtCOztnSEFBbEIsa0JBQWtCO2lIQUFsQixrQkFBa0IsWUF6QjNCLGdCQUFnQixtQkFFaEIscUJBQXFCLGFBR3JCLHFCQUFxQjtpSEFvQlosa0JBQWtCLGFBbEJsQixDQUFDO1lBQ1YsT0FBTyxFQUFFLGVBQWU7WUFDeEIsVUFBVSxFQUFFLGFBQWE7WUFDekIsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDO1lBQzNDLEtBQUssRUFBRSxJQUFJO1NBQ1o7UUFDRDtZQUNFLE9BQU8sRUFBRSxTQUFTO1lBQ2xCLFVBQVUsRUFBRSxHQUFHLEVBQUU7Z0JBQ2YsSUFBSTtvQkFDRixPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN0QztnQkFBQyxNQUFNO29CQUNOLE9BQU8sSUFBSSxDQUFDO2lCQUNiO1lBQ0gsQ0FBQztTQUNGO1FBQ0QsRUFBRSxPQUFPLEVBQUUsYUFBYSxFQUFFLFFBQVEsRUFBRSxjQUFjLEVBQUUsQ0FBQyxZQXhCNUM7WUFDUCxnQkFBZ0I7WUFDaEIsWUFBWSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUM7WUFDeEIscUJBQXFCO1NBQ3RCLEVBRUMscUJBQXFCOzRGQW9CWixrQkFBa0I7a0JBM0I5QixRQUFRO21CQUFDO29CQUNSLE9BQU8sRUFBRTt3QkFDUCxnQkFBZ0I7d0JBQ2hCLFlBQVksQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDO3dCQUN4QixxQkFBcUI7cUJBQ3RCO29CQUNELE9BQU8sRUFBRTt3QkFDUCxxQkFBcUI7cUJBQ3RCO29CQUNELFNBQVMsRUFBRSxDQUFDOzRCQUNWLE9BQU8sRUFBRSxlQUFlOzRCQUN4QixVQUFVLEVBQUUsYUFBYTs0QkFDekIsSUFBSSxFQUFFLENBQUMsY0FBYyxFQUFFLG1CQUFtQixDQUFDOzRCQUMzQyxLQUFLLEVBQUUsSUFBSTt5QkFDWjt3QkFDRDs0QkFDRSxPQUFPLEVBQUUsU0FBUzs0QkFDbEIsVUFBVSxFQUFFLEdBQUcsRUFBRTtnQ0FDZixJQUFJO29DQUNGLE9BQU8sSUFBSSxPQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsT0FBTyxFQUFFLENBQUM7aUNBQ3RDO2dDQUFDLE1BQU07b0NBQ04sT0FBTyxJQUFJLENBQUM7aUNBQ2I7NEJBQ0gsQ0FBQzt5QkFDRjt3QkFDRCxFQUFFLE9BQU8sRUFBRSxhQUFhLEVBQUUsUUFBUSxFQUFFLGNBQWMsRUFBRSxDQUFDO2lCQUN0RDs7QUFHRCxTQUFTLGFBQWEsQ0FBQyxjQUE4QjtJQUNuRCxPQUFPLEtBQUssSUFBSSxFQUFFO1FBQ2hCLG1CQUFtQixDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUM3QixNQUFNLGNBQWMsQ0FBQyxJQUFJLEVBQUUsQ0FBQztJQUM5QixDQUFDLENBQUE7QUFDSCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSLCBMT0NBTEVfSUQsIE5nTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBQbGF5ZXJDbGllbnRTZXJ2aWNlIH0gZnJvbSAnLi9wbGF5ZXItY2xpZW50LnNlcnZpY2UnO1xuaW1wb3J0IHsgQXBwSW5pdFNlcnZpY2UgfSBmcm9tICcuL2FwcC1pbml0LnNlcnZpY2UnO1xuaW1wb3J0IHsgSHR0cENsaWVudE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBBUFBfQkFTRV9IUkVGIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE5nU2FmZVN0eWxlUGlwZU1vZHVsZSB9IGZyb20gJy4vc2FmZS1zdHlsZS5waXBlJztcblxuZGVjbGFyZSB2YXIgZ2FkZ2V0czogYW55O1xuXG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZS5mb3JSb290KFtdKSxcbiAgICBOZ1NhZmVTdHlsZVBpcGVNb2R1bGVcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIE5nU2FmZVN0eWxlUGlwZU1vZHVsZVxuICBdLFxuICBwcm92aWRlcnM6IFt7XG4gICAgcHJvdmlkZTogQVBQX0lOSVRJQUxJWkVSLFxuICAgIHVzZUZhY3Rvcnk6IGluaXRpYWxpemVBcHAsXG4gICAgZGVwczogW0FwcEluaXRTZXJ2aWNlLCBQbGF5ZXJDbGllbnRTZXJ2aWNlXSxcbiAgICBtdWx0aTogdHJ1ZVxuICB9LFxuICB7XG4gICAgcHJvdmlkZTogTE9DQUxFX0lELFxuICAgIHVzZUZhY3Rvcnk6ICgpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBuZXcgZ2FkZ2V0cy5QcmVmcygpLmdldExhbmcoKTtcbiAgICAgIH0gY2F0Y2gge1xuICAgICAgICByZXR1cm4gJ2VuJztcbiAgICAgIH1cbiAgICB9XG4gIH0sXG4gIHsgcHJvdmlkZTogQVBQX0JBU0VfSFJFRiwgdXNlVmFsdWU6ICcvZ2FkZ2V0cy9pZnInIH1dXG59KVxuZXhwb3J0IGNsYXNzIFBsYXllckNsaWVudE1vZHVsZSB7IH1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZUFwcChhcHBJbml0U2VydmljZTogQXBwSW5pdFNlcnZpY2UpIHtcbiAgcmV0dXJuIGFzeW5jICgpID0+IHtcbiAgICBQbGF5ZXJDbGllbnRTZXJ2aWNlLmluaXQoe30pO1xuICAgIGF3YWl0IGFwcEluaXRTZXJ2aWNlLmluaXQoKTtcbiAgfVxufVxuIl19
//# sourceMappingURL=C:/Users/mike_/Documents/GitHub/reveldigital-client-library/dist/reveldigital/player-client/esm2020/lib/module.js.map

/*
 * Public API Surface of player-client
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljLWFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL3JldmVsZGlnaXRhbC9wbGF5ZXItY2xpZW50L3NyYy9wdWJsaWMtYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOztHQUVHO0FBRUgsY0FBYyw2QkFBNkIsQ0FBQztBQUM1QyxjQUFjLDRCQUE0QixDQUFDO0FBQzNDLGNBQWMsdUJBQXVCLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogUHVibGljIEFQSSBTdXJmYWNlIG9mIHBsYXllci1jbGllbnRcbiAqL1xuXG5leHBvcnQgKiBmcm9tICcuL2xpYi9wbGF5ZXItY2xpZW50LnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvcGxheWVyLWNsaWVudC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9saWIvc2FmZS1zdHlsZS5waXBlJzsiXX0=
//# sourceMappingURL=C:/Users/mike_/Documents/GitHub/reveldigital-client-library/dist/reveldigital/player-client/esm2020/module.js.map

/**
 * Generated bundle index. Do not edit.
 */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmV2ZWxkaWdpdGFsLXBsYXllci1jbGllbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9wcm9qZWN0cy9yZXZlbGRpZ2l0YWwvcGxheWVyLWNsaWVudC9zcmMvcmV2ZWxkaWdpdGFsLXBsYXllci1jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7O0dBRUc7QUFFSCxjQUFjLGNBQWMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogR2VuZXJhdGVkIGJ1bmRsZSBpbmRleC4gRG8gbm90IGVkaXQuXG4gKi9cblxuZXhwb3J0ICogZnJvbSAnLi9wdWJsaWMtYXBpJztcbiJdfQ==
//# sourceMappingURL=C:/Users/mike_/Documents/GitHub/reveldigital-client-library/dist/reveldigital/player-client/esm2020/module.js.map



/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(3849)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map