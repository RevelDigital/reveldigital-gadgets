(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["ad-ad-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/ad/ad.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/ad/ad.page.html ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar>\n    <ion-title>Revel Digital Information</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content  >\n  <div style=\" display: flex; justify-content: center; flex-direction: column; width: 100%\">\n    <img style=\"width: 100%\" src=\"https://www.reveldigital.com/images/presskit/reveldigital-icon-512.png\">\n    <div style=\"text-align: center; font-size: xx-large\">Revel Digital Kiosk Technologies</div>\n    <div style=\"text-align: center; font-weight: bolder; margin-top: 20px\">Sales/Support <a style=\"color: #1a1a1a; \" href=\"tel:1-855-738-3534\">1-855-738-3534</a></div>\n    <a style=\"color: #1a1a1a; margin-top: 7px; text-align: center; font-weight: bolder\" href=\"https://www.reveldigital.com/\">Visit our Site</a>\n  </div>\n\n</ion-content>\n");

/***/ }),

/***/ "./src/app/ad/ad-routing.module.ts":
/*!*****************************************!*\
  !*** ./src/app/ad/ad-routing.module.ts ***!
  \*****************************************/
/*! exports provided: AdPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPageRoutingModule", function() { return AdPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ad_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ad.page */ "./src/app/ad/ad.page.ts");




const routes = [
    {
        path: '',
        component: _ad_page__WEBPACK_IMPORTED_MODULE_3__["AdPage"]
    }
];
let AdPageRoutingModule = class AdPageRoutingModule {
};
AdPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AdPageRoutingModule);



/***/ }),

/***/ "./src/app/ad/ad.module.ts":
/*!*********************************!*\
  !*** ./src/app/ad/ad.module.ts ***!
  \*********************************/
/*! exports provided: AdPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPageModule", function() { return AdPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _ad_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ad-routing.module */ "./src/app/ad/ad-routing.module.ts");
/* harmony import */ var _ad_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./ad.page */ "./src/app/ad/ad.page.ts");







let AdPageModule = class AdPageModule {
};
AdPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _ad_routing_module__WEBPACK_IMPORTED_MODULE_5__["AdPageRoutingModule"]
        ],
        declarations: [_ad_page__WEBPACK_IMPORTED_MODULE_6__["AdPage"]]
    })
], AdPageModule);



/***/ }),

/***/ "./src/app/ad/ad.page.scss":
/*!*********************************!*\
  !*** ./src/app/ad/ad.page.scss ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: #5682fc;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWQvYWQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUUsK0JBQUE7QUFBRiIsImZpbGUiOiJzcmMvYXBwL2FkL2FkLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50e1xuXG4gIC0taW9uLWJhY2tncm91bmQtY29sb3I6ICM1NjgyZmM7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/ad/ad.page.ts":
/*!*******************************!*\
  !*** ./src/app/ad/ad.page.ts ***!
  \*******************************/
/*! exports provided: AdPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdPage", function() { return AdPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AdPage = class AdPage {
    constructor() { }
    ngOnInit() {
    }
};
AdPage.ctorParameters = () => [];
AdPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-ad',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./ad.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/ad/ad.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./ad.page.scss */ "./src/app/ad/ad.page.scss")).default]
    })
], AdPage);



/***/ })

}]);
//# sourceMappingURL=ad-ad-module-es2015.js.map