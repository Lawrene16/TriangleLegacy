(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicesdetails-servicesdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicesdetails/servicesdetails.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicesdetails/servicesdetails.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"width: 100%; \n    height: 200px;\" \n    >\n\n    <div style=\"width: 100%; top: 100px; position: absolute; height: 60px;\">\n          <p style=\"margin: 0px;  padding-left: 10px;\" align=\"center\"><img (click)=\"callUs()\" height=\"48px\" src=\"../../assets/sp/Contact Us Today Button.png\"></p>\n    </div>\n\n    <img style=\"width: 100%; height: 100%;\" src=\"../../assets/sp/{{data.title}} Page Photo.jpg\">\n  </div>\n\n  <p>\n    {{details}}\n  </p>\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/servicesdetails/servicesdetails.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/servicesdetails/servicesdetails.module.ts ***!
  \***********************************************************/
/*! exports provided: ServicesdetailsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesdetailsPageModule", function() { return ServicesdetailsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicesdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicesdetails.page */ "./src/app/servicesdetails/servicesdetails.page.ts");







const routes = [
    {
        path: '',
        component: _servicesdetails_page__WEBPACK_IMPORTED_MODULE_6__["ServicesdetailsPage"]
    }
];
let ServicesdetailsPageModule = class ServicesdetailsPageModule {
};
ServicesdetailsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_servicesdetails_page__WEBPACK_IMPORTED_MODULE_6__["ServicesdetailsPage"]]
    })
], ServicesdetailsPageModule);



/***/ }),

/***/ "./src/app/servicesdetails/servicesdetails.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/servicesdetails/servicesdetails.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  width: 100%;\n  height: 210px;\n  background-image: url('Photo.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9zZXJ2aWNlc2RldGFpbHMvc2VydmljZXNkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljZXNkZXRhaWxzL3NlcnZpY2VzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVJO0VBQ0kscUNBQUE7RUFDQSw4QkFBQTtBQ0NSIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXNkZXRhaWxzL3NlcnZpY2VzZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wZGl2e1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL1Bob3RvLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnJyk7XG4gICAgICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgLy8gIGZpeGVkIGNlbnRlcjsgXG4gICAgIH0iLCIudG9wZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9QaG90by5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi10b29sYmFyIHtcbiAgLS1iYWNrZ3JvdW5kOiB1cmwoXCIuLi8uLi9hc3NldHMvR3JhZGllbnQgQmFyLmpwZ1wiKTtcbiAgLS1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/servicesdetails/servicesdetails.page.ts":
/*!*********************************************************!*\
  !*** ./src/app/servicesdetails/servicesdetails.page.ts ***!
  \*********************************************************/
/*! exports provided: ServicesdetailsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesdetailsPage", function() { return ServicesdetailsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





let ServicesdetailsPage = class ServicesdetailsPage {
    constructor(route, callNumber, menuCtrl, router) {
        this.route = route;
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
        this.router = router;
        this.details = "";
    }
    ngOnInit() {
        this.route.queryParams.subscribe(params => {
            if (this.router.getCurrentNavigation().extras.state) {
                this.data = this.router.getCurrentNavigation().extras.state.service;
                this.details = this.data.details;
                console.log(this.details);
                this.details.replace(".", "<br>");
            }
        });
    }
    openMenu() {
        this.menuCtrl.toggle();
    }
    callUs() {
        this.callNumber.callNumber("18008303324", true).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
    }
};
ServicesdetailsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ServicesdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-servicesdetails',
        template: __webpack_require__(/*! raw-loader!./servicesdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/servicesdetails/servicesdetails.page.html"),
        styles: [__webpack_require__(/*! ./servicesdetails.page.scss */ "./src/app/servicesdetails/servicesdetails.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
        _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], ServicesdetailsPage);



/***/ })

}]);
//# sourceMappingURL=servicesdetails-servicesdetails-module-es2015.js.map