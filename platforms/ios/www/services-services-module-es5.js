(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["services-services-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/services/services.page.html":
/*!***********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/services/services.page.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <div *ngFor=\"let service of services; let i = index;\" (click)=\"showDetails(i)\" style=\"float: left;\" class=\"allservices\">\n      <img src=\"../../assets/sp/{{service.title}}.jpg\" style=\"height: 100%; width: 100%;\">\n    </div>\n  </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPageModule", function() { return ServicesPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _services_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services.page */ "./src/app/services/services.page.ts");







var routes = [
    {
        path: '',
        component: _services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]
    }
];
var ServicesPageModule = /** @class */ (function () {
    function ServicesPageModule() {
    }
    ServicesPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_services_page__WEBPACK_IMPORTED_MODULE_6__["ServicesPage"]]
        })
    ], ServicesPageModule);
    return ServicesPageModule;
}());



/***/ }),

/***/ "./src/app/services/services.page.scss":
/*!*********************************************!*\
  !*** ./src/app/services/services.page.scss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".allservices {\n  width: 50%;\n  height: 200px;\n}\n\nion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzcmMvYXBwL3NlcnZpY2VzL3NlcnZpY2VzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFVBQUE7RUFDQSxhQUFBO0FDQ0o7O0FESUk7RUFDSSxxQ0FBQTtFQUNBLDhCQUFBO0FDRFIiLCJmaWxlIjoic3JjL2FwcC9zZXJ2aWNlcy9zZXJ2aWNlcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWxsc2VydmljZXN7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBoZWlnaHQ6IDIwMHB4O1xuICAgIFxufVxuXG5cbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvR3JhZGllbnQgQmFyLmpwZycpO1xuICAgICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vICBmaXhlZCBjZW50ZXI7IFxuICAgICB9IiwiLmFsbHNlcnZpY2VzIHtcbiAgd2lkdGg6IDUwJTtcbiAgaGVpZ2h0OiAyMDBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnXCIpO1xuICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/services/services.page.ts":
/*!*******************************************!*\
  !*** ./src/app/services/services.page.ts ***!
  \*******************************************/
/*! exports provided: ServicesPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesPage", function() { return ServicesPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");


// import { Router } from '@angular/router';



var ServicesPage = /** @class */ (function () {
    function ServicesPage(router, callNumber, menuCtrl) {
        this.router = router;
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
        this.services = [
            {
                title: 'Air Duct Cleaning',
                details: 'As much as we would love to be able to predict when a disaster is going to strike, there is no way to do so. However, that doesn’t mean you should wait until it happens to find a local home restoration expert. At Triangle Legacy, we offer experience dealing with damage from fire, smoke, mold, mildew, and floods. Our team of dedicated experts will work with you to ensure you get the results you need in your difficult time. No job is too big or too small because we have handled it all. Our team of home restoration experts understand how important it is to provide you with the level of service you deserve. With ample experience in the field, we can easily step in and help you take control of the damage quickly and easily. Not only do we get the job done quickly, but we also ensure it is done right from the beginning. Because we offer 24/7 services, you don’t have to worry about being stuck waiting for days to get the help you need. We understand how important it is to act quickly in the wake of a disaster. Our home renovation experts will go through everything with you to ensure you get the results you need. Thanks to our free estimates, you will know what to expect right from the start. Give us a call to schedule your consultation today.'
            },
            {
                title: 'Commercial Carpet Cleaning',
                details: ''
            }, {
                title: 'Drain Cleaning',
                details: ''
            }, {
                title: 'Dryer Vent Cleaning',
                details: ''
            }, {
                title: 'Emergency Restoration',
                details: ''
            }, {
                title: 'Fire Restoration',
                details: ''
            }, {
                title: 'Flood Mitigation',
                details: ''
            }, {
                title: 'Hoarding Clean Up',
                details: ''
            }, {
                title: 'Mold Removal',
                details: ''
            }, {
                title: 'Odor Removal',
                details: ''
            }, {
                title: 'Power Washing',
                details: ''
            }, {
                title: 'Residential Carpet Cleaning',
                details: ''
            }, {
                title: 'Rug Cleaning',
                details: ''
            }, {
                title: 'Smoke Removal',
                details: ''
            }, {
                title: 'Tile Cleaning',
                details: ''
            }, {
                title: 'Upholstery Cleaning',
                details: ''
            }, {
                title: 'Water Damage Repair',
                details: ''
            }
        ];
    }
    ServicesPage.prototype.ngOnInit = function () {
    };
    ServicesPage.prototype.showDetails = function (i) {
        var navigationExtras = {
            state: {
                service: this.services[i]
            }
        };
        console.log(i);
        this.router.navigate(['servicesdetails'], navigationExtras);
        // this.router.navigateByUrl('/servicesdetails')
    };
    ServicesPage.prototype.openMenu = function () {
        this.menuCtrl.toggle();
    };
    ServicesPage.prototype.callUs = function () {
        this.callNumber.callNumber("18008303324", true).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ServicesPage.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
    ]; };
    ServicesPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! raw-loader!./services.page.html */ "./node_modules/raw-loader/index.js!./src/app/services/services.page.html"),
            styles: [__webpack_require__(/*! ./services.page.scss */ "./src/app/services/services.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_4__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
    ], ServicesPage);
    return ServicesPage;
}());



/***/ })

}]);
//# sourceMappingURL=services-services-module-es5.js.map