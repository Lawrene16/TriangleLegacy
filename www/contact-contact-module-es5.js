(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"topdiv\">\n  </div>\n\n  <p style=\"font-size: 16px; font-weight: 600;\" align=\"center\">Have a Question?</p>\n\n  <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">First and Last Name</p>\n  <div>\n      <ion-input class=\"itemclass\" style=\"height: 5vh;\"\n        type=\"text\"\n      [(ngModel)]=\"names\" required></ion-input>  \n  </div>\n\n    <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">Email Address</p>\n  <div>\n      <ion-input class=\"itemclass\" style=\"height: 5vh;\"\n        type=\"email\"\n      [(ngModel)]=\"email\" required></ion-input>  \n  </div>\n\n      <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">Subject</p>\n  <div>\n      <ion-input class=\"itemclass\" style=\"height: 5vh;\"\n        type=\"text\"\n      [(ngModel)]=\"subject\" required></ion-input>  \n  </div>\n\n      <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">Message</p>\n  <div>\n      <ion-textarea class=\"itemclass\" style=\"height: 150px;\"\n        type=\"text\"\n      [(ngModel)]=\"message\" required></ion-textarea>  \n  </div>\n\n  <p align=\"center\"><img (click)=\"submitform()\" height=\"50px\" src=\"../../assets/Submit Button.png\"></p>\n  \n  <p align=\"center\" style=\"font-weight:500\">Give us a call !!!!</p>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      Washington DC\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(0)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      Maryland\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(1)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      North Carolina\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(2)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      Virginia\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(3)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/contact/contact.module.ts":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.module.ts ***!
  \*******************************************/
/*! exports provided: ContactPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPageModule", function() { return ContactPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _contact_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./contact.page */ "./src/app/contact/contact.page.ts");







var routes = [
    {
        path: '',
        component: _contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]
    }
];
var ContactPageModule = /** @class */ (function () {
    function ContactPageModule() {
    }
    ContactPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)
            ],
            declarations: [_contact_page__WEBPACK_IMPORTED_MODULE_6__["ContactPage"]]
        })
    ], ContactPageModule);
    return ContactPageModule;
}());



/***/ }),

/***/ "./src/app/contact/contact.page.scss":
/*!*******************************************!*\
  !*** ./src/app/contact/contact.page.scss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".topdiv {\n  width: 100%;\n  height: 220px;\n  background-image: url('operator.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\nion-input.custom-input {\n  font-size: 20px;\n}\n\nion-input.custom-input ::-webkit-input-placeholder {\n  font-size: 18px;\n  color: white;\n}\n\nion-input.custom-input ::-moz-placeholder {\n  font-size: 18px;\n  color: white;\n}\n\nion-input.custom-input ::-ms-input-placeholder {\n  font-size: 18px;\n  color: white;\n}\n\nion-input.custom-input ::placeholder {\n  font-size: 18px;\n  color: white;\n}\n\n.itemclass {\n  height: 5vh;\n  align-content: center;\n  margin-top: 5px;\n  margin-bottom: 25px;\n  width: 94%;\n  margin-left: 10px;\n  outline-color: rgba(190, 189, 189, 0.329);\n  margin-right: 10px;\n  padding-left: 10px;\n  border-radius: 4px;\n  outline-style: auto;\n}\n\n.itemclass2 {\n  height: 5vh;\n  align-content: center;\n  margin-top: 5px;\n  margin-bottom: 25px;\n  width: 94%;\n  margin-left: 10px;\n  outline-color: rgba(190, 189, 189, 0.329);\n  margin-right: 10px;\n  padding-left: 10px;\n  border-radius: 4px;\n  outline-style: auto;\n}\n\nion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURHSTtFQUNFLGVBQUE7QUNBTjs7QURDTTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ1I7O0FESE07RUFDRSxlQUFBO0VBQ0EsWUFBQTtBQ0NSOztBREhNO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNDUjs7QURITTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FDQ1I7O0FES0U7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDTEo7O0FEU0U7RUFDRSxXQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0VBQ0EsaUJBQUE7RUFDQSx5Q0FBQTtFQUNBLGtCQUFBO0VBR0Esa0JBQUE7RUFDQSxrQkFBQTtFQUVBLG1CQUFBO0FDVEo7O0FEYUk7RUFDSSxxQ0FBQTtFQUNBLDhCQUFBO0FDVlIiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcGRpdntcbiAgICB3aWR0aDogMTAwJTsgXG4gICAgaGVpZ2h0OiAyMjBweDtcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJy4uLy4uL2Fzc2V0cy9vcGVyYXRvci5wbmcnKTtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbmlvbi1pbnB1dCB7XG4gICAgJi5jdXN0b20taW5wdXQge1xuICAgICAgZm9udC1zaXplOiAyMHB4OyAvL3NldHMgdGV4dCBmb250IHNpemVcbiAgICAgIDo6cGxhY2Vob2xkZXIge1xuICAgICAgICBmb250LXNpemU6IDE4cHg7IFxuICAgICAgICBjb2xvcjogd2hpdGU7Ly9zZXRzIHBsYWNlaG9sZGVyIGZvbnQgc2l6ZVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG5cbiAgLml0ZW1jbGFzc3tcbiAgICBoZWlnaHQ6IDV2aDtcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gICAgd2lkdGg6IDk0JTtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICBvdXRsaW5lLWNvbG9yOiByZ2JhKDE5MCwgMTg5LCAxODksIDAuMzI5KTtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7ICAgICAgICBcbiAgICAvLyBiYWNrZ3JvdW5kOmNvbG9yKCRjb2xvcnMsIGdyZXkpO1xuICAgIC8vIGJhY2tncm91bmQ6IHJnYmEoMTU4LCAxNTgsIDE1OCwgMC42KTtcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4OyAgXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgIzAwMDtcbiAgICBvdXRsaW5lLXN0eWxlOiBhdXRvO1xuICAgIC8vIG91dGxpbmUtY29sb3I6Y29sb3IoJGNvbG9ycywgcmVkbGlrZSk7XG59XG5cbiAgLml0ZW1jbGFzczJ7XG4gICAgaGVpZ2h0OiA1dmg7XG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHdpZHRoOiA5NCU7XG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgb3V0bGluZS1jb2xvcjogcmdiYSgxOTAsIDE4OSwgMTg5LCAwLjMyOSk7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4OyAgICAgICAgXG4gICAgLy8gYmFja2dyb3VuZDpjb2xvcigkY29sb3JzLCBncmV5KTtcbiAgICAvLyBiYWNrZ3JvdW5kOiByZ2JhKDE1OCwgMTU4LCAxNTgsIDAuNik7XG4gICAgcGFkZGluZy1sZWZ0OiAxMHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDsgIFxuICAgIC8vIGJvcmRlcjogMXB4IHNvbGlkICMwMDA7XG4gICAgb3V0bGluZS1zdHlsZTogYXV0bztcbiAgICAvLyBvdXRsaW5lLWNvbG9yOmNvbG9yKCRjb2xvcnMsIHJlZGxpa2UpO1xufVxuXG4gICAgaW9uLXRvb2xiYXIge1xuICAgICAgICAtLWJhY2tncm91bmQ6IHVybCgnLi4vLi4vYXNzZXRzL0dyYWRpZW50IEJhci5qcGcnKTtcbiAgICAgICAgLS1iYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgICAvLyAgZml4ZWQgY2VudGVyOyBcbiAgICAgfVxuIiwiLnRvcGRpdiB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDIyMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi9hc3NldHMvb3BlcmF0b3IucG5nXCIpO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG5pb24taW5wdXQuY3VzdG9tLWlucHV0IHtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuaW9uLWlucHV0LmN1c3RvbS1pbnB1dCA6OnBsYWNlaG9sZGVyIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5pdGVtY2xhc3Mge1xuICBoZWlnaHQ6IDV2aDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDE5MCwgMTg5LCAxODksIDAuMzI5KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZS1zdHlsZTogYXV0bztcbn1cblxuLml0ZW1jbGFzczIge1xuICBoZWlnaHQ6IDV2aDtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1ib3R0b206IDI1cHg7XG4gIHdpZHRoOiA5NCU7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICBvdXRsaW5lLWNvbG9yOiByZ2JhKDE5MCwgMTg5LCAxODksIDAuMzI5KTtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZS1zdHlsZTogYXV0bztcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnXCIpO1xuICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

/***/ }),

/***/ "./src/app/contact/contact.page.ts":
/*!*****************************************!*\
  !*** ./src/app/contact/contact.page.ts ***!
  \*****************************************/
/*! exports provided: ContactPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactPage", function() { return ContactPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/call-number/ngx */ "./node_modules/@ionic-native/call-number/ngx/index.js");
/* harmony import */ var _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/email-composer/ngx */ "./node_modules/@ionic-native/email-composer/ngx/index.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");





var ContactPage = /** @class */ (function () {
    function ContactPage(callNumber, menuCtrl, toastCtrl, emailComposer) {
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.emailComposer = emailComposer;
        this.names = "";
        this.email = "";
        this.subject = "";
        this.message = "";
    }
    ContactPage.prototype.ngOnInit = function () { };
    ContactPage.prototype.submitform = function () {
        var _this = this;
        if (this.names == "") {
            this.presentToast("Name field cannot be left blank");
        }
        else if (this.email == "" ||
            this.email.length < 3 ||
            !this.email.includes("@") ||
            !this.email.includes(".")) {
            this.presentToast("Invalid email format");
        }
        else if (this.subject == "") {
            this.presentToast("Subject field cannot be left blank");
        }
        else if (this.message == "") {
            this.presentToast("Message field cannot be left blank");
        }
        else {
            this.emailComposer.isAvailable().then(function (available) {
                if (available) {
                    var email = {
                        to: ["max@mustermann.de", "lawrenedickson49@gmail.com"],
                        cc: "erika@mustermann.de",
                        // bcc: ["john@doe.com", "jane@doe.com"],
                        // attachments: [
                        //   "file://img/logo.png",
                        //   "res://icon.png",
                        //   "base64:icon.png//iVBORw0KGgoAAAANSUhEUg...",
                        //   "file://README.pdf"
                        // ],
                        subject: "Triangle Legacy Help",
                        body: "Names: " + _this.names + "/n" +
                            "Email: " + _this.email + "/n" +
                            "Subject: " + _this.subject + "/n" +
                            "Message: " + _this.message + "/n",
                        isHtml: true
                    };
                    _this.emailComposer.open(email);
                }
            });
        }
    };
    ContactPage.prototype.callphone = function (index) {
        switch (index) {
            case 0:
                this.phonenumber = "2028882960";
                break;
            case 1:
                this.phonenumber = "3015239419";
                break;
            case 2:
                this.phonenumber = "7045047472";
                break;
            case 3:
                this.phonenumber = "7035047472";
                break;
        }
        this.callNumber
            .callNumber(this.phonenumber, true)
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
            console.log(err);
        });
    };
    ContactPage.prototype.presentToast = function (message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toast;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.toastCtrl.create({
                            message: message,
                            duration: 2000,
                            color: 'dark'
                        })];
                    case 1:
                        toast = _a.sent();
                        toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ContactPage.prototype.callUs = function () {
        this.callNumber.callNumber("18008303324", true).then(function (res) {
            console.log(res);
        }).catch(function (err) {
            console.log(err);
        });
    };
    ContactPage.prototype.openMenu = function () {
        this.menuCtrl.toggle();
    };
    ContactPage.ctorParameters = function () { return [
        { type: _ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"] },
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"] },
        { type: _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"] }
    ]; };
    ContactPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "app-contact",
            template: __webpack_require__(/*! raw-loader!./contact.page.html */ "./node_modules/raw-loader/index.js!./src/app/contact/contact.page.html"),
            styles: [__webpack_require__(/*! ./contact.page.scss */ "./src/app/contact/contact.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_call_number_ngx__WEBPACK_IMPORTED_MODULE_2__["CallNumber"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["MenuController"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ToastController"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es5.js.map