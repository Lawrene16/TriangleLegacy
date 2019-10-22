(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicesdetails-servicesdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicesdetails/servicesdetails.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicesdetails/servicesdetails.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>servicesdetails</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"width: 100%; \n    height: 200px;\" \n    >\n\n    <div style=\"width: 100%; top: 100px; position: absolute; height: 60px;\">\n          <p style=\"margin: 0px;  padding-left: 10px;\" align=\"center\"><img (click)=\"callUs()\" height=\"48px\" src=\"../../assets/sp/Contact Us Today Button.png\"></p>\n    </div>\n\n    <img style=\"width: 100%; height: 100%;\" src=\"../../assets/sp/{{data.title}} Page Photo.jpg\">\n  </div>\n\n  <p>\n    {{details}}\n  </p>\n\n\n</ion-content>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _servicesdetails_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./servicesdetails.page */ "./src/app/servicesdetails/servicesdetails.page.ts");







var routes = [
    {
        path: '',
        component: _servicesdetails_page__WEBPACK_IMPORTED_MODULE_6__["ServicesdetailsPage"]
    }
];
var ServicesdetailsPageModule = /** @class */ (function () {
    function ServicesdetailsPageModule() {
    }
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
    return ServicesdetailsPageModule;
}());



/***/ }),

/***/ "./src/app/servicesdetails/servicesdetails.page.scss":
/*!***********************************************************!*\
  !*** ./src/app/servicesdetails/servicesdetails.page.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  width: 100%;\n  height: 210px;\n  background-image: url('Photo.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9zZXJ2aWNlc2RldGFpbHMvc2VydmljZXNkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljZXNkZXRhaWxzL3NlcnZpY2VzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLGtDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvc2VydmljZXNkZXRhaWxzL3NlcnZpY2VzZGV0YWlscy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wZGl2e1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDIxMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL1Bob3RvLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn0iLCIudG9wZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjEwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9QaG90by5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59Il19 */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");




var ServicesdetailsPage = /** @class */ (function () {
    function ServicesdetailsPage(route, callNumber, router) {
        this.route = route;
        this.callNumber = callNumber;
        this.router = router;
        this.details = "";
    }
    ServicesdetailsPage.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.service;
                _this.details = _this.data.details;
                console.log(_this.details);
                _this.details.replace(".", "<br>");
            }
        });
    };
    ServicesdetailsPage.prototype.callUs = function () {
        this.callNumber.callNumber("18008303324", true).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ServicesdetailsPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    ServicesdetailsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-servicesdetails',
            template: __webpack_require__(/*! raw-loader!./servicesdetails.page.html */ "./node_modules/raw-loader/index.js!./src/app/servicesdetails/servicesdetails.page.html"),
            styles: [__webpack_require__(/*! ./servicesdetails.page.scss */ "./src/app/servicesdetails/servicesdetails.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_3__["CallNumber"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServicesdetailsPage);
    return ServicesdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicesdetails-servicesdetails-module-es5.js.map