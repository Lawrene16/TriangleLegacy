(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["about-about-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/about/about.page.html":
/*!*****************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/about/about.page.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <!-- <div class=\"topdiv\">\n\n    <p style=\"margin: 0px; padding-left: 10px; padding-top: 95px\" align=\"center\"><img (click)=\"callUs()\" height=\"50px\" src=\"../../assets/Phone Number Button.png\"></p>\n\n  </div> -->\n\n  <div style=\"width: 100%; \n  height: 200px;\" \n  >\n\n  <div style=\"width: 100%; top: 80px; position: absolute; height: 60px;\">\n        <p style=\"margin: 0px;  padding-left: 10px;\" align=\"center\"><img (click)=\"callUs()\" height=\"48px\" src=\"../../assets/Phone Number Button.png\"></p>\n  </div>\n\n  <img style=\"width: 100%; height: 100%;\" src=\"../../assets/updated about me photo.png\">\n</div>\n\n\n  <div>\n    <p style=\"font-size: 17px\" align=\"center\"><b>About</b></p>\n\n    <p style=\"margin: 12px; font-size: 15px\">\n        Triangle Legacy Flood Restoration & Carpet Cleaning Washington DC is a family owned business that was founded two decades ago by the current CEO, Mr. Andrew Ross. <br><br>\n\n        We are a growing team of professionals who specialize in residential and commercial water damage restoration, mold remediation & removal, carpet & upholstery cleaning, as well as handyman services. <br><br>\n        \n        At its genesis, Mr. Ross founded Triangle Legacy with carpet/upholstery cleaning and handyman services at its core. With the turn of the century however, where natural disasters are no longer unique figments of our creative imagination, but instead a harsh reality, Triangle Legacy has evolved with the times. Not only have we evolved, but we continue to do so; ensuring that we undergo all the necessary training and earn all the relevant certification along the way. This enables us to continue to be an ‘all hands on deck’ team of professionals, ready to serve any day!<br><br>\n    </p>   \n    \n    \n\n\n    <p style=\"font-size: 17px\" align=\"center\"><b>Emergency and Non-Emergency Services</b></p>\n        <p style=\"margin: 12px; font-size: 15px\">\n            At Triangle Legacy, we know how important it is to find a professional that offers restoration and repair services around-the-clock. We offer emergency services 24-hours a day, 7-days a week. We also know how important your weekly schedule is and will work with you to find a suitable date and time to get any repairs or restorations completed as quickly as possible.\n        \n            <br><br>\n        You can rely on us to fix anything. From minor mishap to major disasters, you can call us for all your restoration and clean-up needs. We offer our reliable services 24/7 on all 365 days a year including weekends and holidays.\n        \n        <br><br>\n        No job is too small or big for us. The well being of our customers is all that matters to us and we strive to fulfill their expectations. Our expert understanding of different types of disasters enables us to customize solutions as per your specific needs.\n        \n    </p> \n\n\n    <p style=\"font-size: 17px; margin-top: 30px\" align=\"center\"><b>The Process</b></p>\n\n        <b style=\"margin-left: 12px; font-size: 15px\">Emergency Response Service:</b>\n        <br>\n\n        <p style=\"margin: 12px; font-size: 15px\">\n        We will arrive at your residence or place of business within an hour of your phone call.\n        </p>\n        \n\n        <b style=\"margin-left: 12px; font-size: 15px\">Non-Emergency Response Service:</b>\n        <br>\n\n        <p style=\"margin: 12px; font-size: 15px\">\n            <b>Free Consultation & Assessment:</b> Together, we will determine and schedule a mutually agreeable date and time when we will come out and provide you with a free consultation & assessment.\n            <br><b>Free Proposal & Estimate:</b> Next, if you are inclined to proceed with potential services, we will provide you with a free written proposal & estimate based on the results of our free assessment.\n            <br><b>Signature Acceptance of Proposal Agreement:</b> Once the free proposal/estimate has been agreed upon and signed by both parties, we will schedule a suitable date and time to commence the relevant service.\n            <br><b>Start Work:</b> We will show up on time and ‘get the ball rolling’ on the relevant potential service.\n\n            <br>\n        </p>\n\n        \n       \n        \n\n  </div>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/about/about.module.ts":
/*!***************************************!*\
  !*** ./src/app/about/about.module.ts ***!
  \***************************************/
/*! exports provided: AboutPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPageModule", function() { return AboutPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _about_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./about.page */ "./src/app/about/about.page.ts");







const routes = [
    {
        path: '',
        component: _about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]
    }
];
let AboutPageModule = class AboutPageModule {
};
AboutPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_about_page__WEBPACK_IMPORTED_MODULE_6__["AboutPage"]]
    })
], AboutPageModule);



/***/ }),

/***/ "./src/app/about/about.page.scss":
/*!***************************************!*\
  !*** ./src/app/about/about.page.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9hYm91dC9hYm91dC5wYWdlLnNjc3MiLCJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFSTtFQUNJLHFDQUFBO0VBQ0EsOEJBQUE7QUNEUiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL0dyYWRpZW50IEJhci5qcGcnKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAvLyAgZml4ZWQgY2VudGVyOyBcbiAgICAgfSIsImlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvR3JhZGllbnQgQmFyLmpwZ1wiKTtcbiAgLS1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/about/about.page.ts":
/*!*************************************!*\
  !*** ./src/app/about/about.page.ts ***!
  \*************************************/
/*! exports provided: AboutPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutPage", function() { return AboutPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let AboutPage = class AboutPage {
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
AboutPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
AboutPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: __webpack_require__(/*! raw-loader!./about.page.html */ "./node_modules/raw-loader/index.js!./src/app/about/about.page.html"),
        styles: [__webpack_require__(/*! ./about.page.scss */ "./src/app/about/about.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], AboutPage);



/***/ })

}]);
//# sourceMappingURL=about-about-module-es2015.js.map