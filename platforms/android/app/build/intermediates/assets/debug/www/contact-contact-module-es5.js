(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contact-contact-module"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/contact/contact.page.html":
/*!*********************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/contact/contact.page.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n  <ion-toolbar >\n    <ion-buttons (click)=\"openMenu()\" slot=\"start\">\n      <img height=\"35px\" src=\"../../assets/Menu bar.png\">\n    </ion-buttons>\n\n    <ion-title>\n      <img height=\"45px\" src=\"../../assets/applogo.png\">\n    </ion-title>\n\n    <ion-buttons (click)=\"callUs()\" slot=\"end\">\n      <img height=\"40px\" src=\"../../assets/Phone Symbol.png\">\n    </ion-buttons>\n    <ion-title>  \n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <div class=\"topdiv\">\n  </div>\n\n  <p style=\"font-size: 16px; font-weight: 600;\" align=\"center\">Have a Question?</p>\n\n  <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">First and Last Name</p>\n  <div class=\"boxes\">\n    <ion-input type=\"text\"\n    [(ngModel)]=\"names\"></ion-input>\n  </div>\n\n\n\n  <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">Email Address</p>\n  <div class=\"boxes\">\n    <ion-input type=\"email\"\n    [(ngModel)]=\"email\"></ion-input>\n  </div>\n\n\n\n  <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">Subject</p>\n  <div class=\"boxes\">\n    <ion-input type=\"text\"\n    [(ngModel)]=\"subject\"></ion-input>\n  </div>\n\n\n  <p style=\"margin-left: 11px; font-size: 14px; font-weight: 500; margin-bottom: 7px; \">Message</p>\n  <div class=\"boxes2\">\n    <ion-input type=\"text\"\n    [(ngModel)]=\"subject\"></ion-input>\n  </div>\n\n  <p align=\"center\"><img (click)=\"submitform()\" height=\"50px\" src=\"../../assets/Submit Button.png\"></p>\n  \n  <p align=\"center\" style=\"font-weight:500\">Give Us a Call Today</p>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      Washington DC\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(0)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      Maryland\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(1)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      North Carolina\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(2)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n\n  <ion-row >\n    <ion-col size=\"9\">\n      <div style=\"margin-left: 4vw; border-radius: 6px; width: 90%; \n      padding-left: 10px; padding-top: 10px;\n      color: white;\n      font-weight: 700;\n       margin-top: 3px; height: 40px; background-color: rgb(0, 78, 136)\">\n      Virginia\n      </div>\n    </ion-col>\n    <ion-col (click)=\"callphone(3)\" size=\"2.5\">\n      <img height=\"45px\" style=\"margin-right: 3vw\" src=\"../../assets/Map Page/Call Button.png\">\n    </ion-col>\n  </ion-row>\n</ion-content>\n"

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

module.exports = ".topdiv {\n  width: 100%;\n  height: 220px;\n  background-image: url('operator.png');\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.boxes {\n  border: 1px solid #c3c3c3;\n  border-radius: 4px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\n.boxes2 {\n  border: 1px solid #c3c3c3;\n  border-radius: 4px;\n  height: 150px;\n  margin-left: 10px;\n  margin-right: 10px;\n}\n\nion-toolbar {\n  --background: url('Gradient Bar.jpg');\n  --background-repeat: no-repeat;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy92aWxsaWZpeGluYy9Eb2N1bWVudHMvVHJpYW5nbGVMZWdhY3kvc3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIiwic3JjL2FwcC9jb250YWN0L2NvbnRhY3QucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7QUNDSjs7QURFQTtFQUNFLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURHSTtFQUNJLHFDQUFBO0VBQ0EsOEJBQUE7QUNBUiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9wZGl2e1xuICAgIHdpZHRoOiAxMDAlOyBcbiAgICBoZWlnaHQ6IDIyMHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vYXNzZXRzL29wZXJhdG9yLnBuZycpO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cblxuLmJveGVze1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IFxuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG4uYm94ZXMye1xuICBib3JkZXI6IDFweCBzb2xpZCAjYzNjM2MzO1xuICBib3JkZXItcmFkaXVzOiA0cHg7IFxuICBoZWlnaHQ6IDE1MHB4O1xuICBtYXJnaW4tbGVmdDogMTBweDtcbiAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xufVxuXG5cbiAgICBpb24tdG9vbGJhciB7XG4gICAgICAgIC0tYmFja2dyb3VuZDogdXJsKCcuLi8uLi9hc3NldHMvR3JhZGllbnQgQmFyLmpwZycpO1xuICAgICAgICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIC8vICBmaXhlZCBjZW50ZXI7IFxuICAgICB9XG4iLCIudG9wZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMjIwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uL2Fzc2V0cy9vcGVyYXRvci5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG5cbi5ib3hlcyB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuLmJveGVzMiB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjM2MzYzM7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbn1cblxuaW9uLXRvb2xiYXIge1xuICAtLWJhY2tncm91bmQ6IHVybChcIi4uLy4uL2Fzc2V0cy9HcmFkaWVudCBCYXIuanBnXCIpO1xuICAtLWJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG59Il19 */"

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
    function ContactPage(callNumber, menuCtrl, toastCtrl, loadingCtrl, emailComposer) {
        this.callNumber = callNumber;
        this.menuCtrl = menuCtrl;
        this.toastCtrl = toastCtrl;
        this.loadingCtrl = loadingCtrl;
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
            this.loadingCtrl.create({ message: "Please wait", duration: 3000 }).then(function (res) {
                res.present();
                setTimeout(function () {
                    _this.presentToast("Your request has been submitted successfully");
                    _this.names = "";
                    _this.email = "";
                    _this.subject = "";
                    _this.message = "";
                }, 4500);
                // this.sendEmail("lawrenedickson49@gmail.com")
                _this.sendEmail("trianglelegacymanager@gmail.com");
                _this.sendEmail("trianglelegacy@gmail.com");
            });
        }
    };
    ContactPage.prototype.sendEmail = function (to_email) {
        emailjs.send("gmail", "template_6Fqm0iy9", {
            to_email: to_email,
            full_name: this.names,
            from_email: this.email,
            subject: this.subject,
            message: this.message
        });
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
                            color: "dark"
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
        this.callNumber
            .callNumber("18008303324", true)
            .then(function (res) {
            console.log(res);
        })
            .catch(function (err) {
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
        { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
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
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"],
            _ionic_native_email_composer_ngx__WEBPACK_IMPORTED_MODULE_3__["EmailComposer"]])
    ], ContactPage);
    return ContactPage;
}());



/***/ })

}]);
//# sourceMappingURL=contact-contact-module-es5.js.map