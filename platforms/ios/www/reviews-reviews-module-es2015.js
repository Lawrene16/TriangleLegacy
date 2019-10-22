(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["reviews-reviews-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/reviews/reviews.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/reviews/reviews.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/reviews/reviews.module.ts":
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.module.ts ***!
  \*******************************************/
/*! exports provided: ReviewsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPageModule", function() { return ReviewsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _reviews_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./reviews.page */ "./src/app/reviews/reviews.page.ts");







const routes = [
    {
        path: '',
        component: _reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]
    }
];
let ReviewsPageModule = class ReviewsPageModule {
};
ReviewsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_reviews_page__WEBPACK_IMPORTED_MODULE_6__["ReviewsPage"]]
    })
], ReviewsPageModule);



/***/ }),

/***/ "./src/app/reviews/reviews.page.scss":
/*!*******************************************!*\
  !*** ./src/app/reviews/reviews.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIiwic3JjL2FwcC9yZXZpZXdzL3Jldmlld3MucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFJO0VBQ0kscUNBQUE7RUFDQSw4QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvcmV2aWV3cy9yZXZpZXdzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvR3JhZGllbnQgQmFyLmpwZycpO1xuICAgICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vICBmaXhlZCBjZW50ZXI7IFxuICAgICB9IiwiaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnXCIpO1xuICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/reviews/reviews.page.ts":
/*!*****************************************!*\
  !*** ./src/app/reviews/reviews.page.ts ***!
  \*****************************************/
/*! exports provided: ReviewsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewsPage", function() { return ReviewsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let ReviewsPage = class ReviewsPage {
    constructor(callNumber, menuCtrl) {
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
    }
    ngOnInit() {
    }
    callUs() {
        this.callNumber.callNumber("18008303324", true).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
    openMenu() {
        this.menuCtrl.toggle();
    }
};
ReviewsPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
ReviewsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-reviews',
        template: __webpack_require__(/*! raw-loader!./reviews.page.html */ "./node_modules/raw-loader/index.js!./src/app/reviews/reviews.page.html"),
        styles: [__webpack_require__(/*! ./reviews.page.scss */ "./src/app/reviews/reviews.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"], _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], ReviewsPage);



/***/ })

}]);
//# sourceMappingURL=reviews-reviews-module-es2015.js.map