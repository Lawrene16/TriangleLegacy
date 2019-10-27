(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["servicesdetails-servicesdetails-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/servicesdetails/servicesdetails.page.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/servicesdetails/servicesdetails.page.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div style=\"width: 100%; \n    height: 200px;\" \n    >\n\n    <div style=\"width: 100%; top: 100px; position: absolute; height: 60px;\">\n          <p style=\"margin: 0px;  padding-left: 10px;\" align=\"center\"><img (click)=\"callUs()\" height=\"48px\" src=\"../../assets/sp/Contact Us Today Button.png\"></p>\n    </div>\n\n    <img style=\"width: 100%; height: 100%;\" src=\"../../assets/sp/{{data.title}} Page Photo.jpg\">\n  </div>\n\n  <p style=\"white-space: pre-line; padding: 10px; font-size: 15px\" id=\"detailsdiv\">\n    <!-- {{details}} -->\n  </p>\n\n\n</ion-content>\n"

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

module.exports = ".topdiv {\n  width: 100%;\n  height: 210px;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9zZXJ2aWNlc2RldGFpbHMvc2VydmljZXNkZXRhaWxzLnBhZ2Uuc2NzcyIsInNyYy9hcHAvc2VydmljZXNkZXRhaWxzL3NlcnZpY2VzZGV0YWlscy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxXQUFBO0VBQ0EsYUFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFSTtFQUNJLHFDQUFBO0VBQ0EsOEJBQUE7QUNDUiIsImZpbGUiOiJzcmMvYXBwL3NlcnZpY2VzZGV0YWlscy9zZXJ2aWNlc2RldGFpbHMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGRpdntcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAyMTBweDtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvR3JhZGllbnQgQmFyLmpwZycpO1xuICAgICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vICBmaXhlZCBjZW50ZXI7IFxuICAgICB9IiwiLnRvcGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIxMHB4O1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pb24tdG9vbGJhciB7XG4gIC0tYmFja2dyb3VuZDogdXJsKFwiLi4vLi4vYXNzZXRzL0dyYWRpZW50IEJhci5qcGdcIik7XG4gIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbn0iXX0= */"

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
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ServicesdetailsPage = /** @class */ (function () {
    // data = {
    //   details: 'Dryer vents are one of the least suspected culprits of fires……residential or commercial! Although easily overlooked, they have the capability to cause paramount damage to your home or property, if they are not maintained properly. According to the United States National Fire Protection Agency (NFPA), in 2010 there were an estimated 16,800 reported dryer-related residential fires which ultimately resulted in 51 civilian deaths, 380 civilian injuries and $236 million in direct property damage!\n\nDryer-related fires are more likely to occur when there is a build-up of lint and debris inside the dryer hose and vent. This build-up has the tendency to obstruct the flow of hot air and gasses that would normally be exhausted to the outside of your home or property. Continued use of a dryer with a clogged vent can ultimately result in a residential or commercial fire.\n\nA quick and painless way to prevent a potential dryer-related fire?Arrange to have your dryer vents professionally cleaned and inspected at least once a year.\n\nThe advantages of dryer vent cleaning are prevention of build-up of lint and debris, reduction of the risk of dryer-related home or property fires, and improvement of the efficiency of your dryer, thereby saving you money!\n\nFor a free consultation & estimate relative to all your dryer vent cleaning needs, please give us a call!'
    // }
    function ServicesdetailsPage(route, callNumber, menuCtrl, router) {
        this.route = route;
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
        this.router = router;
    }
    ServicesdetailsPage.prototype.ngOnInit = function () {
        // document.getElementById("detailsdiv").innerHTML = this.data.details;
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            if (_this.router.getCurrentNavigation().extras.state) {
                _this.data = _this.router.getCurrentNavigation().extras.state.service;
                document.getElementById("detailsdiv").innerHTML = _this.data.details;
            }
        });
    };
    ServicesdetailsPage.prototype.openMenu = function () {
        this.menuCtrl.toggle();
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], ServicesdetailsPage);
    return ServicesdetailsPage;
}());



/***/ })

}]);
//# sourceMappingURL=servicesdetails-servicesdetails-module-es5.js.map