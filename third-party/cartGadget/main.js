webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_productInfo__ = __webpack_require__(261);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
        this.view = "product";
        this.productsList = __WEBPACK_IMPORTED_MODULE_2__providers_productInfo__["a" /* default */];
    }
    HomePage.prototype.delete = function (product) {
        this.productsList.splice(this.productsList.indexOf(product), 1);
    };
    HomePage.prototype.clear = function () {
        this.productsList = [];
    };
    HomePage.prototype.add = function (product) {
        this.productsList.push(JSON.parse(product));
    };
    HomePage.prototype.completeTransaction = function () {
        var jsonArray = [];
        for (var i = 0; i < this.productsList.length; i++) {
            try {
                for (var num = 0; num < this.productsList[i].quantity; num++) {
                    jsonArray.push({ "name": this.productsList[i].name, "id": this.productsList[i].id });
                }
            }
            catch (e) {
                console.log(e);
            }
        }
        console.log(JSON.stringify(jsonArray));
        this.clear();
    };
    return HomePage;
}());
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"/Users/averyknight/Desktop/sliderCartIonic/src/pages/home/home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Current Cart</ion-title>\n\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-list>\n\n    <div ion-item *ngFor="let product of productsList">\n      <ion-thumbnail item-left>\n      <img src="{{product.image_URL}}"/>\n      </ion-thumbnail>\n\n      <h2>{{product.name}}</h2>\n      <p>{{product.quantity}} &#8226; $5.00</p>\n      <button (click)="delete(product)" item-right ion-button color="danger">Remove From Cart</button>\n    </div>\n    <h3 class="center" style="margin-top: 40%" *ngIf="productsList.length==0">No Items Added To Cart</h3>\n  </ion-list>\n\n\n\n</ion-content>\n<ion-footer>\n  <div>\n    <p class="center">Sub-Total: $3.40\n    <p class="center">Tax: $0.00</p>\n    <p class="center">Amount Due: $3.40</p>\n    <button item-left (click)="completeTransaction()" style="margin-top: 10px; margin-bottom: 10px" class="center" ion-button>Complete Transaction</button>\n  </div>\n</ion-footer>\n\n'/*ion-inline-end:"/Users/averyknight/Desktop/sliderCartIonic/src/pages/home/home.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]) === "function" && _a || Object])
], HomePage);

var _a;
//# sourceMappingURL=home.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(211);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(252);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(190);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"/Users/averyknight/Desktop/sliderCartIonic/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/averyknight/Desktop/sliderCartIonic/src/app/app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var products = [{
        "id": "4Wc2zgXdF6KESUn5xDeAPA",
        "createdOn": "2017-08-25T18:48:41.447Z",
        "modifiedOn": "2017-08-25T18:48:41.447Z",
        "name": "Pepsi",
        "image_URL": "https://uploads.cdn.reveldigital.com/358465!PepsiOrig1.png",
        "quantity": 3,
        "row": 3,
        "column": 1,
        "price": 99999.01
    }, {
        "id": "FhuUEx_Uvqn7duwGqo7zgQ",
        "createdOn": "2017-08-25T18:48:41.532Z",
        "modifiedOn": "2017-08-29T17:11:58.094Z",
        "name": "Squirt",
        "image_URL": "https://uploads.cdn.reveldigital.com/358470!Squirt.png",
        "quantity": 3,
        "row": 3,
        "column": 3,
        "price": 99999.01
    }, {
        "id": "GHPeXrrK3TUbCE304JsaHg",
        "createdOn": "2017-08-25T18:48:41.564Z",
        "modifiedOn": "2017-08-29T17:11:58.203Z",
        "name": "Mountain Dew",
        "image_URL": "https://uploads.cdn.reveldigital.com/358462!MntDew1.png",
        "quantity": 3,
        "row": 2,
        "column": 3,
        "price": 99999.01
    }, {
        "id": "6onuIhyLgTbEakVAzPVpMw",
        "createdOn": "2017-08-25T18:48:41.595Z",
        "modifiedOn": "2017-08-29T17:11:58.094Z",
        "name": "Faygo RedPop",
        "image_URL": "https://uploads.cdn.reveldigital.com/358461!FaygoRed.png",
        "quantity": 3,
        "row": 2,
        "column": 2,
        "price": 99999.01
    }, {
        "id": "Laz_oVFXkdQfeYjfZoINaw",
        "createdOn": "2017-08-25T18:48:41.642Z",
        "modifiedOn": "2017-08-29T17:11:58.063Z",
        "name": "Sprite",
        "image_URL": "https://uploads.cdn.reveldigital.com/358469!Sprit1.png",
        "quantity": 3,
        "row": 3,
        "column": 2,
        "price": 99999.01
    }, {
        "id": "LZz6rI4D-2_VOks9BxuXPg",
        "createdOn": "2017-08-25T18:48:41.673Z",
        "modifiedOn": "2017-08-29T17:11:58.203Z",
        "name": "Diet Pepsi",
        "image_URL": "https://uploads.cdn.reveldigital.com/358464!Pepsi2.png",
        "quantity": 3,
        "row": 1,
        "column": 3,
        "price": 99999.01
    }, {
        "id": "NNVqLVTjL79RpK88qskQuA",
        "createdOn": "2017-08-25T18:48:41.704Z",
        "modifiedOn": "2017-08-29T17:11:58.094Z",
        "name": "DR Pepper",
        "image_URL": "https://uploads.cdn.reveldigital.com/358460!dr.+Pepper.png",
        "quantity": 3,
        "row": 2,
        "column": 1,
        "price": 99999.01
    }, {
        "id": "Yptae6OeC0hWBnsrzKBqww",
        "createdOn": "2017-08-25T18:48:41.736Z",
        "modifiedOn": "2017-08-29T17:11:58.203Z",
        "name": "Diet Coke",
        "image_URL": "https://uploads.cdn.reveldigital.com/358475!DietCoke_12oz.png",
        "quantity": 3,
        "row": 1,
        "column": 2,
        "price": 99999.01
    }, {
        "id": "vYcNlIlx7-XfqCTo-Mv5Bw",
        "createdOn": "2017-08-25T18:48:41.783Z",
        "modifiedOn": "2017-08-29T17:11:58.188Z",
        "name": "7 UP",
        "image_URL": "https://uploads.cdn.reveldigital.com/358471!7UP1.png",
        "quantity": 3,
        "row": 1,
        "column": 1,
        "price": 99999.01
    }];
/* harmony default export */ __webpack_exports__["a"] = (products);
//# sourceMappingURL=productInfo.js.map

/***/ })

},[192]);
//# sourceMappingURL=main.js.map