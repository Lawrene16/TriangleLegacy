(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["maps-maps-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/maps/maps.page.html":
/*!***************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/maps/maps.page.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div>\n    <p align=\"center\"><img height=\"300px\" src=\"../../assets/Map Page/Map.png\"></p>\n  </div>\n\n  <ion-grid>\n    <ion-row *ngFor=\"let place of DC\">\n      <ion-col size=\"9\">\n        <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n        padding-left: 10px; padding-top: 10px;\n        color: white;\n        font-weight: 700;\n         margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n        {{place.place}}, DC\n        </div>\n      </ion-col>\n      <ion-col (click)=\"callPhone(place.number)\" size=\"2.5\">\n        <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let place of GA\">\n      <ion-col size=\"9\">\n        <div style=\"margin-left: 4vw; border-radius: 6px;\n        padding-left: 10px; padding-top: 10px;\n        color: white;\n        font-weight: 700;\n         width: 90%; margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n          {{place.place}}, GA\n        </div>\n      </ion-col>\n      <ion-col (click)=\"callPhone(place.number)\" size=\"2.5\">\n        <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n      </ion-col>\n    </ion-row>\n\n    <ion-row *ngFor=\"let place of MD\">\n      <ion-col size=\"9\">\n        <div style=\"margin-left: 4vw; border-radius: 6px;\n        padding-left: 10px; padding-top: 10px;\n        color: white;\n        font-weight: 700;\n         width: 90%; margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n          {{place.place}}, MD\n        </div>\n      </ion-col>\n      <ion-col (click)=\"callPhone(place.number)\" size=\"2.5\">\n        <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let place of NC\">\n      <ion-col size=\"9\">\n        <div style=\"margin-left: 4vw; border-radius: 6px;\n        padding-left: 10px; padding-top: 10px;\n        color: white;\n        font-weight: 700;\n         width: 90%; margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n          {{place.place}}, NC\n        </div>\n      </ion-col>\n      <ion-col (click)=\"callPhone(place.number)\" size=\"2.5\">\n        <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n      </ion-col>\n    </ion-row>\n\n\n    <ion-row *ngFor=\"let place of SC\">\n      <ion-col size=\"9\">\n        <div style=\"margin-left: 4vw; border-radius: 6px;\n        padding-left: 10px; padding-top: 10px;\n        color: white;\n        font-weight: 700;\n         width: 90%; margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n          {{place.place}}, SC\n        </div>\n      </ion-col>\n      <ion-col (click)=\"callPhone(place.number)\" size=\"2.5\">\n        <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n      </ion-col>\n    </ion-row>\n\n\n\n    <ion-row *ngFor=\"let place of VA\">\n      <ion-col size=\"9\">\n        <div style=\"margin-left: 4vw; border-radius: 6px;\n        padding-left: 10px; padding-top: 10px;\n        color: white;\n        font-weight: 700;\n         width: 90%; margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n          {{place.place}}, VA\n        </div>\n      </ion-col>\n      <ion-col (click)=\"callPhone(place.number)\" size=\"2.5\">\n        <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/maps/maps.module.ts":
/*!*************************************!*\
  !*** ./src/app/maps/maps.module.ts ***!
  \*************************************/
/*! exports provided: MapsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPageModule", function() { return MapsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _maps_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./maps.page */ "./src/app/maps/maps.page.ts");







const routes = [
    {
        path: '',
        component: _maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"]
    }
];
let MapsPageModule = class MapsPageModule {
};
MapsPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
        ],
        declarations: [_maps_page__WEBPACK_IMPORTED_MODULE_6__["MapsPage"]]
    })
], MapsPageModule);



/***/ }),

/***/ "./src/app/maps/maps.page.scss":
/*!*************************************!*\
  !*** ./src/app/maps/maps.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".eachnumber {\n  width: 100vw;\n}\n\nion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9tYXBzL21hcHMucGFnZS5zY3NzIiwic3JjL2FwcC9tYXBzL21hcHMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtBQ0NKOztBREdJO0VBQ0kscUNBQUE7RUFDQSw4QkFBQTtBQ0FSIiwiZmlsZSI6InNyYy9hcHAvbWFwcy9tYXBzLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lYWNobnVtYmVye1xuICAgIHdpZHRoOiAxMDB2dzs7XG59XG5cblxuICAgIGlvbi10b29sYmFyIHtcbiAgICAgICAgLS1iYWNrZ3JvdW5kOiB1cmwoJy4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnJyk7XG4gICAgICAgIC0tYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgLy8gIGZpeGVkIGNlbnRlcjsgXG4gICAgIH0iLCIuZWFjaG51bWJlciB7XG4gIHdpZHRoOiAxMDB2dztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnXCIpO1xuICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/maps/maps.page.ts":
/*!***********************************!*\
  !*** ./src/app/maps/maps.page.ts ***!
  \***********************************/
/*! exports provided: MapsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MapsPage", function() { return MapsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");




let MapsPage = class MapsPage {
    constructor(callNumber, menuCtrl) {
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
        this.DC = [
            {
                place: 'Washington',
                number: '2028882960'
            }
        ];
        this.GA = [
            {
                place: 'Marietta West',
                number: '7702990942'
            },
            {
                place: 'Macon',
                number: '6787829900'
            }, {
                place: 'Buckhead',
                number: '6785057746'
            }, {
                place: 'Downtown Atlanta',
                number: '4046001417'
            }, {
                place: 'North Fulton',
                number: '7709180511'
            }, {
                place: 'North Atlanta',
                number: '8005210643'
            }, {
                place: 'South Atlanta',
                number: '4044188097'
            },
        ];
        this.MD = [
            {
                place: 'Annapolis',
                number: '3015239419'
            }, {
                place: 'Baltimore County',
                number: '3015239419'
            }, {
                place: 'Bethesda',
                number: '3015239419'
            }, {
                place: 'Bowie',
                number: '3015239419'
            }, {
                place: 'Brandywine',
                number: '3015239419'
            }, {
                place: 'Charles County',
                number: '3015239419'
            }, {
                place: 'Cheverly',
                number: '3015239419'
            }, {
                place: 'Chevy Chase',
                number: '3015239419'
            }, {
                place: 'Clinton',
                number: '3015239419'
            }, {
                place: 'College Park',
                number: '3015239419'
            }, {
                place: 'Columbia',
                number: '3015239419'
            }, {
                place: 'Crofton',
                number: '3015239419'
            }, {
                place: 'Clinton',
                number: '3015239419'
            }, {
                place: 'College Park',
                number: '3015239419'
            }, {
                place: 'Columbia',
                number: '3015239419'
            }, {
                place: 'Elkridge',
                number: '3015239419'
            }, {
                place: 'Ellicott',
                number: '3015239419'
            }, {
                place: 'Fort Washington',
                number: '3015239419'
            }, {
                place: 'Gaithersburg',
                number: '3015239419'
            }, {
                place: 'Glen Burnie',
                number: '3015239419'
            }, {
                place: 'Greenbelt',
                number: '3015239419'
            }, {
                place: 'Kensington',
                number: '3015239419'
            }, {
                place: 'Langley Park',
                number: '3015239419'
            }, {
                place: 'Laurel',
                number: '3015239419'
            }, {
                place: 'Linthicum',
                number: '3015239419'
            }, {
                place: 'New carrollton',
                number: '3015239419'
            }, {
                place: 'North Brentwood',
                number: '3015239419'
            }, {
                place: 'Potomac',
                number: '3015239419'
            }, {
                place: 'Rockville',
                number: '3015239419'
            }, {
                place: 'Severn',
                number: '3015239419'
            }, {
                place: 'Silver Spring',
                number: '3015239419'
            }, {
                place: 'Takoma Park',
                number: '3015239419'
            }, {
                place: 'Tatallon',
                number: '3015239419'
            }, {
                place: 'Upper Marlboro',
                number: '3015239419'
            }, {
                place: 'Woodmore',
                number: '3015239419'
            }
        ];
        this.NC = [
            {
                place: 'Apex',
                number: '7045047472'
            }, {
                place: 'Burlington',
                number: '7045047472'
            }, {
                place: 'Cary',
                number: '7045047472'
            }, {
                place: 'Chapel Hill',
                number: '7045047472'
            }, {
                place: 'Durham',
                number: '7045047472'
            }, {
                place: 'Holly Springs',
                number: '7045047472'
            }, {
                place: 'Knightdale',
                number: '7045047472'
            }, {
                place: 'Mecklenburg',
                number: '7045047472'
            }, {
                place: 'Morrisville',
                number: '7045047472'
            }, {
                place: 'Raleigh',
                number: '7045047472'
            }, {
                place: 'Wake Forest',
                number: '7045047472'
            },
        ];
        this.SC = [
            {
                place: 'Rock Hill',
                number: '7045047472'
            }
        ];
        this.VA = [
            {
                place: 'Alexandria',
                number: '7036731175'
            }, {
                place: 'Annandale',
                number: '7036731175'
            }, {
                place: 'Arlington',
                number: '7036731175'
            }, {
                place: 'Ashburn',
                number: '7036731175'
            }, {
                place: 'Burke',
                number: '7036731175'
            }, {
                place: 'Centreville',
                number: '7036731175'
            }, {
                place: 'Chantilly',
                number: '7036731175'
            }, {
                place: 'Dale City',
                number: '7036731175'
            }, {
                place: 'Dulles',
                number: '7036731175'
            }, {
                place: 'Dumfries',
                number: '7036731175'
            }, {
                place: 'Fairfax',
                number: '7036731175'
            }, {
                place: 'Great Falls',
                number: '7036731175'
            }, {
                place: 'Lansdowne',
                number: '7036731175'
            }, {
                place: 'Leesburg',
                number: '7036731175'
            }, {
                place: 'McLean',
                number: '7036731175'
            }, {
                place: 'Occoquan',
                number: '7036731175'
            }, {
                place: 'Potomac Mills',
                number: '7036731175'
            }, {
                place: 'Reston',
                number: '7036731175'
            }, {
                place: 'Springfield',
                number: '7036731175'
            }, {
                place: 'Sterlin',
                number: '7036731175'
            }, {
                place: 'Tysons Corner',
                number: '7036731175'
            }, {
                place: 'Vienna',
                number: '7036731175'
            }, {
                place: 'Woodbridge',
                number: '7036731175'
            },
        ];
    }
    ngOnInit() {
    }
    callPhone(number) {
        console.log(number);
        this.callNumber.callNumber(number, true).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });
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
MapsPage.ctorParameters = () => [
    { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"] }
];
MapsPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-maps',
        template: __webpack_require__(/*! raw-loader!./maps.page.html */ "./node_modules/raw-loader/index.js!./src/app/maps/maps.page.html"),
        styles: [__webpack_require__(/*! ./maps.page.scss */ "./src/app/maps/maps.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["MenuController"]])
], MapsPage);



/***/ })

}]);
//# sourceMappingURL=maps-maps-module-es2015.js.map