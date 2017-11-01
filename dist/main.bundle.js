webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/_common/button.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a {\n    display: block;\n    color: #989897;\n    font-size: 12px;\n    line-height: 26px;\n    text-decoration: none;\n    min-width: 90px;\n    margin: 0;\n    height: 28px;\n    font-weight: 400;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    -webkit-box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    -moz-box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    text-align: center;\n    text-transform: uppercase;\n    float: right;\n    margin-left: 10px;\n}\n\n:host.btn-redBorder a {\n    border: 1px solid #c35d3e;\n    color: #be3a26;\n}\n:host.legendMeta a {\n    min-width: 0;\n    padding:0 7px;\n    font-size: 20px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/_common/button.component.html":
/***/ (function(module, exports) {

module.exports = "<a><ng-content></ng-content></a>"

/***/ }),

/***/ "../../../../../src/app/_common/button.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ButtonComponent = (function () {
    function ButtonComponent() {
    }
    return ButtonComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "borderColor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ButtonComponent.prototype, "backgroundColor", void 0);
ButtonComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'button-component',
        template: __webpack_require__("../../../../../src/app/_common/button.component.html"),
        styles: [__webpack_require__("../../../../../src/app/_common/button.component.css")]
    })
], ButtonComponent);

//# sourceMappingURL=button.component.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"message\" [ngClass]=\"{ 'alert': message, 'alert-success': message.type === 'success', 'alert-danger': message.type === 'error' }\">{{message.text}}</div>"

/***/ }),

/***/ "../../../../../src/app/_directives/alert.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AlertComponent = (function () {
    function AlertComponent(alertService) {
        this.alertService = alertService;
    }
    AlertComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.alertService.getMessage().subscribe(function (message) { _this.message = message; });
    };
    return AlertComponent;
}());
AlertComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'alert',
        template: __webpack_require__("../../../../../src/app/_directives/alert.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_index__["a" /* AlertService */]) === "function" && _a || Object])
], AlertComponent);

var _a;
//# sourceMappingURL=alert.component.js.map

/***/ }),

/***/ "../../../../../src/app/_directives/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_component__ = __webpack_require__("../../../../../src/app/_directives/alert.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/auth.guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthGuard = (function () {
    function AuthGuard(router) {
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var token = localStorage.getItem('token');
        if (token) {
            // logged in so return true
            return true;
        }
        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AuthGuard);

var _a;
//# sourceMappingURL=auth.guard.js.map

/***/ }),

/***/ "../../../../../src/app/_guards/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__auth_guard__ = __webpack_require__("../../../../../src/app/_guards/auth.guard.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__auth_guard__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/getLevel.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GetLevels; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var GetLevels = (function () {
    function GetLevels() {
    }
    GetLevels.prototype.transform = function (input, level) {
        var inputArr = [];
        var i = 0, len = input.length;
        for (; i < len; i++) {
            if (input[i].level == level) {
                inputArr.push(input[i]);
            }
        }
        return inputArr;
    };
    return GetLevels;
}());
GetLevels = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'getLevels'
    })
], GetLevels);

//# sourceMappingURL=getLevel.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/object2Array.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Object2ArrayPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Object2ArrayPipe = (function () {
    function Object2ArrayPipe() {
    }
    Object2ArrayPipe.prototype.transform = function (object) {
        var out = [];
        for (var i in object) {
            out.push(object[i]);
        }
        return out;
    };
    return Object2ArrayPipe;
}());
Object2ArrayPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'object2Array'
    })
], Object2ArrayPipe);

//# sourceMappingURL=object2Array.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/overloadDay.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IsOverloadDay; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var IsOverloadDay = (function () {
    function IsOverloadDay() {
    }
    IsOverloadDay.prototype.transform = function (input, day) {
        var load = 0;
        var i = 0, len = input.length;
        for (; i < len; i++) {
            if (input[i].start_time <= day / 1000 && day / 1000 <= input[i].end_time) {
                load += parseInt(input[i].percent);
            }
        }
        if (load > 100) {
            return true;
        }
        return false;
    };
    return IsOverloadDay;
}());
IsOverloadDay = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'isOverloadDay'
    })
], IsOverloadDay);

//# sourceMappingURL=overloadDay.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_pipes/sortBy.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortByPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SortByPipe = (function () {
    function SortByPipe() {
    }
    SortByPipe.prototype.transform = function (value, field) {
        if (!value)
            return;
        var groupedObj = value.reduce(function (prev, cur) {
            if (!prev[cur[field]]) {
                prev[cur[field]] = [cur];
            }
            else {
                prev[cur[field]].push(cur);
            }
            return prev;
        }, {});
        return Object.keys(groupedObj).map(function (key) { return ({ key: key, value: groupedObj[key] }); });
    };
    return SortByPipe;
}());
SortByPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'sortBy'
    })
], SortByPipe);

//# sourceMappingURL=sortBy.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/_services/alert.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlertService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AlertService = (function () {
    function AlertService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.keepAfterNavigationChange = false;
        // clear alert message on route change
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (_this.keepAfterNavigationChange) {
                    // only keep for a single location change
                    _this.keepAfterNavigationChange = false;
                }
                else {
                    // clear alert
                    _this.subject.next();
                }
            }
        });
    }
    AlertService.prototype.success = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'success', text: message });
    };
    AlertService.prototype.error = function (message, keepAfterNavigationChange) {
        if (keepAfterNavigationChange === void 0) { keepAfterNavigationChange = false; }
        this.keepAfterNavigationChange = keepAfterNavigationChange;
        this.subject.next({ type: 'error', text: message.text() });
    };
    AlertService.prototype.getMessage = function () {
        return this.subject.asObservable();
    };
    return AlertService;
}());
AlertService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], AlertService);

var _a;
//# sourceMappingURL=alert.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/authentication.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthenticationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthenticationService = (function () {
    function AuthenticationService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthenticationService.prototype.login = function (username, password) {
        return this.http.post('/login', { email: username, pass: password })
            .map(function (response) {
            var user = response.json();
            if (user && user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('token', user.token);
                if (user.is_admin == true) {
                    localStorage.setItem('admin', 'true');
                }
                else {
                    localStorage.removeItem('admin');
                }
            }
        });
    };
    AuthenticationService.prototype.logout = function () {
        localStorage.removeItem('token');
        this.router.navigate(['/login']);
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthenticationService);

var _a, _b;
//# sourceMappingURL=authentication.service.js.map

/***/ }),

/***/ "../../../../../src/app/_services/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__alert_service__ = __webpack_require__("../../../../../src/app/_services/alert.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__alert_service__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__authentication_service__ = __webpack_require__("../../../../../src/app/_services/authentication.service.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_1__authentication_service__["a"]; });


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/reset.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../material/prebuilt-themes/indigo-pink.css"), "");
exports.i(__webpack_require__("../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/style.css"), "");

// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- main app container -->\n<header>\n    <general-header ></general-header>\n</header>\n<alert></alert>\n<router-outlet></router-outlet>\n<div class='sk-folding-cube'>\n    <div class='sk-cube1 sk-cube'></div>\n    <div class='sk-cube2 sk-cube'></div>\n    <div class='sk-cube4 sk-cube'></div>\n    <div class='sk-cube3 sk-cube'></div>\n</div>\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")],
        encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_19" /* ViewEncapsulation */].None
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_mydaterangepicker__ = __webpack_require__("../../../../mydaterangepicker/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__common_button_component__ = __webpack_require__("../../../../../src/app/_common/button.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__errors_show_errors_component__ = __webpack_require__("../../../../../src/app/errors/show-errors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__header_general_header_general_header_component__ = __webpack_require__("../../../../../src/app/header/general-header/general-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__header_gant_header_gant_header_component__ = __webpack_require__("../../../../../src/app/header/gant-header/gant-header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__canvas_row_canvas_row_component__ = __webpack_require__("../../../../../src/app/canvas-row/canvas-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__header_calendar_calendar_component__ = __webpack_require__("../../../../../src/app/header/calendar/calendar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__shared_services_projects_data_share_service__ = __webpack_require__("../../../../../src/app/shared/services/projects-data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__cursors_cursors_component__ = __webpack_require__("../../../../../src/app/cursors/cursors.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__groups_groups_component__ = __webpack_require__("../../../../../src/app/groups/groups.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__plan_plan_single_component__ = __webpack_require__("../../../../../src/app/plan/plan-single.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__plan_service_editPlanDialog_service__ = __webpack_require__("../../../../../src/app/plan/service/editPlanDialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__context_menu_service_contextMenuDialog_service__ = __webpack_require__("../../../../../src/app/context-menu/service/contextMenuDialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__plan_edit_plan_dialog_component_edit_plan_dialog_component__ = __webpack_require__("../../../../../src/app/plan/edit-plan-dialog.component/edit-plan-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__context_menu_context_menu_dialog_component__ = __webpack_require__("../../../../../src/app/context-menu/context-menu-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__directives_index__ = __webpack_require__("../../../../../src/app/_directives/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pipes_sortBy_pipe__ = __webpack_require__("../../../../../src/app/_pipes/sortBy.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pipes_getLevel_pipe__ = __webpack_require__("../../../../../src/app/_pipes/getLevel.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__pipes_object2Array_pipe__ = __webpack_require__("../../../../../src/app/_pipes/object2Array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_overloadDay_pipe__ = __webpack_require__("../../../../../src/app/_pipes/overloadDay.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__groups_service_groups_service__ = __webpack_require__("../../../../../src/app/groups/service/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__plan_service_plan_service__ = __webpack_require__("../../../../../src/app/plan/service/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__users_service_users_service__ = __webpack_require__("../../../../../src/app/users/service/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__create_project_popup_popup_api_service__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__create_project_popup_popup_dialog_create_project_popup_dialog_component__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__create_project_popup_popup_create_project_popup_component__ = __webpack_require__("../../../../../src/app/create-project-popup/popup/create-project-popup.component.ts");
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
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_10__common_button_component__["a" /* ButtonComponent */],
            __WEBPACK_IMPORTED_MODULE_11__home_index__["a" /* HomeComponent */],
            __WEBPACK_IMPORTED_MODULE_12__login_index__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__errors_show_errors_component__["a" /* ShowErrorsComponent */],
            __WEBPACK_IMPORTED_MODULE_23__users_users_component__["a" /* UsersComponent */],
            __WEBPACK_IMPORTED_MODULE_24__groups_groups_component__["a" /* GroupsComponent */],
            __WEBPACK_IMPORTED_MODULE_25__plan_plan_single_component__["a" /* PlanComponent */],
            __WEBPACK_IMPORTED_MODULE_16__canvas_row_canvas_row_component__["a" /* CanvasRowComponent */],
            __WEBPACK_IMPORTED_MODULE_22__cursors_cursors_component__["a" /* CursorsComponent */],
            __WEBPACK_IMPORTED_MODULE_14__header_general_header_general_header_component__["a" /* GeneralHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_15__header_gant_header_gant_header_component__["a" /* GantHeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_40__create_project_popup_popup_dialog_create_project_popup_dialog_component__["a" /* CreateProjectPopupDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_41__create_project_popup_popup_create_project_popup_component__["a" /* CreateProjectPopupComponent */],
            __WEBPACK_IMPORTED_MODULE_18__header_calendar_calendar_component__["a" /* CalendarComponent */],
            __WEBPACK_IMPORTED_MODULE_31__directives_index__["a" /* AlertComponent */],
            __WEBPACK_IMPORTED_MODULE_32__pipes_sortBy_pipe__["a" /* SortByPipe */],
            __WEBPACK_IMPORTED_MODULE_33__pipes_getLevel_pipe__["a" /* GetLevels */],
            __WEBPACK_IMPORTED_MODULE_35__pipes_overloadDay_pipe__["a" /* IsOverloadDay */],
            __WEBPACK_IMPORTED_MODULE_34__pipes_object2Array_pipe__["a" /* Object2ArrayPipe */],
            __WEBPACK_IMPORTED_MODULE_28__plan_edit_plan_dialog_component_edit_plan_dialog_component__["a" /* EditPlanComponent */],
            __WEBPACK_IMPORTED_MODULE_29__context_menu_context_menu_dialog_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_30__confirm_modal_confirm_modal_component__["a" /* ConfirmComponent */]
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_28__plan_edit_plan_dialog_component_edit_plan_dialog_component__["a" /* EditPlanComponent */],
            __WEBPACK_IMPORTED_MODULE_29__context_menu_context_menu_dialog_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_30__confirm_modal_confirm_modal_component__["a" /* ConfirmComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["j" /* MdSelectModule */],
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["d" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_forms__["i" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["e" /* MdDatepickerModule */],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_3_mydaterangepicker__["MyDateRangePickerModule"],
            __WEBPACK_IMPORTED_MODULE_5__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["i" /* MdNativeDateModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["c" /* MdButtonModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["d" /* MdCheckboxModule */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["b" /* MatAutocompleteModule */],
            __WEBPACK_IMPORTED_MODULE_7__app_routing__["a" /* routing */],
            __WEBPACK_IMPORTED_MODULE_17__angular_material__["g" /* MdDialogModule */]
        ],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_40__create_project_popup_popup_dialog_create_project_popup_dialog_component__["a" /* CreateProjectPopupDialogComponent */],
            __WEBPACK_IMPORTED_MODULE_28__plan_edit_plan_dialog_component_edit_plan_dialog_component__["a" /* EditPlanComponent */],
            __WEBPACK_IMPORTED_MODULE_29__context_menu_context_menu_dialog_component__["a" /* ContextMenuComponent */],
            __WEBPACK_IMPORTED_MODULE_30__confirm_modal_confirm_modal_component__["a" /* ConfirmComponent */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__guards_index__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["a" /* AlertService */],
            __WEBPACK_IMPORTED_MODULE_9__services_index__["b" /* AuthenticationService */],
            Storage,
            __WEBPACK_IMPORTED_MODULE_19__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */],
            __WEBPACK_IMPORTED_MODULE_20__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */],
            __WEBPACK_IMPORTED_MODULE_21__shared_socket_client_service__["a" /* SocketClientService */],
            __WEBPACK_IMPORTED_MODULE_26__plan_service_editPlanDialog_service__["a" /* EditDialogsService */],
            __WEBPACK_IMPORTED_MODULE_27__context_menu_service_contextMenuDialog_service__["a" /* ContextDialogsService */],
            __WEBPACK_IMPORTED_MODULE_38__users_service_users_service__["a" /* UsersService */],
            __WEBPACK_IMPORTED_MODULE_39__create_project_popup_popup_api_service__["a" /* ProjectsService */],
            __WEBPACK_IMPORTED_MODULE_36__groups_service_groups_service__["a" /* GroupsService */],
            __WEBPACK_IMPORTED_MODULE_37__plan_service_plan_service__["a" /* PlanService */],
            { provide: Window, useValue: window },
        ],
        bootstrap: [
            __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]
        ],
        schemas: [__WEBPACK_IMPORTED_MODULE_2__angular_core__["j" /* CUSTOM_ELEMENTS_SCHEMA */], __WEBPACK_IMPORTED_MODULE_2__angular_core__["L" /* NO_ERRORS_SCHEMA */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_index__ = __webpack_require__("../../../../../src/app/home/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_index__ = __webpack_require__("../../../../../src/app/login/index.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__guards_index__ = __webpack_require__("../../../../../src/app/_guards/index.ts");




var appRoutes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__home_index__["a" /* HomeComponent */],
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__guards_index__["a" /* AuthGuard */]],
    },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_index__["a" /* LoginComponent */] },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["d" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/canvas-row/canvas-row.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "app-canvas-row {\n    display: block;\n    position: relative;\n}\nsvg[plan-single] {\n    width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/canvas-row/canvas-row.component.html":
/***/ (function(module, exports) {

module.exports = "<svg [attr.height]='user.maxheight' id=\"{{user.id}}\" class=\"mainSvg\">\n\n    <line *ngFor=\"let line of lines; let i = index\" [attr.x1]=\"(i+1)*marginBetween\" [attr.x2]=\"(i+1)*marginBetween\" stroke-dasharray=\"4, 4\" style=\"stroke-width:1; stroke:rgb(205,204,203)\" y1=\"0\" y2=\"200\" />\n    <svg *ngIf='adminRole' height=\"100%\" width=\"100%\" viewBox=\"0 0 100 100\"  preserveAspectRatio=\"none\" (mousedown)=\"mouseDown($event)\">\n        <rect width=\"300\" height=\"100\" style=\"fill:rgba(0,0,255, 0);\" />\n    </svg>\n    <svg plan-single  [user]=\"user\" [attr.height]='34' [attr.y]=\"plan.top\" *ngFor=\"let plan of user.plans; let i = index\" [plan]='plan' [startRange]='start' [endRange]='end' [fieldWidth]='fieldWidth'></svg>\n</svg>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/canvas-row/canvas-row.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanvasRowComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_project_popup_popup_dialog_create_project_popup_dialog_component__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_project_popup_user_interface__ = __webpack_require__("../../../../../src/app/create-project-popup/user.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_project_popup_user_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__create_project_popup_user_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_overloadDay_pipe__ = __webpack_require__("../../../../../src/app/_pipes/overloadDay.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_svg_js__ = __webpack_require__("../../../../svg.js/dist/svg.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_svg_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_svg_js__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Create Canvas Row Component.
 * */
var CanvasRowComponent = (function () {
    function CanvasRowComponent(elementRef, dialog, calendarShare, isOverloadDay) {
        this.elementRef = elementRef;
        this.dialog = dialog;
        this.calendarShare = calendarShare;
        this.isOverloadDay = isOverloadDay;
        //  /** Status for mouseMove fun. */
        this.isActive = false;
        //  /** Start Position for mouse. */
        this.startPosition = {
            x: null,
            y: null
        };
        this.lines = [];
        this.nextNum = 2;
        this.plansCross = [];
    }
    CanvasRowComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** Draw first canvas. */
        this.adminRole = localStorage.getItem('admin');
        this.calendarShare.getDatePeriod().subscribe(function (resp) {
            if (!resp) {
                return;
            }
            _this.start = Number(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(resp.date.start, 'X'));
            _this.end = Number(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(resp.date.end, 'X'));
        });
        this.drawCanvas();
    };
    CanvasRowComponent.prototype.ngOnChanges = function (changes) {
        this.lines = [];
        this.drawCanvas();
    };
    //  /** Turn of active status if mouse uped. */
    CanvasRowComponent.prototype.mouseUp = function (e) {
        this.isActive = false;
        var startDay = Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_7_moment__(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.start, 'YYYY-MM-DD', 'X'), 'YYYY-MM-D').add(this.startPosition.x / this.fieldWidth, 'day'), 'YYYY-MM-DD', 'X');
        var endDay = Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_7_moment__(startDay, 'YYYY-MM-D').add(Math.floor(this.width / this.fieldWidth), 'day'), 'YYYY-MM-DD', 'X');
        this.openDialog(this.user, startDay, endDay);
        this.rectSelect.remove();
    };
    //  /** Change x position. */
    CanvasRowComponent.prototype.mouseDown = function (e) {
        var keycode = (e.keyCode ? e.keyCode : e.which);
        if (keycode === 3) {
            return;
        }
        var scope = this;
        scope.isActive = true;
        scope.startPosition.x = Math.floor((e.clientX - 300) / this.fieldWidth) * this.fieldWidth;
        this.draw = __WEBPACK_IMPORTED_MODULE_8_svg_js__(this.canvas);
        var width = this.draw.width();
        var height = this.user['maxheight'];
        this.rectSelect = this.draw.rect(this.fieldWidth, height).attr({
            fill: "rgba(241, 66, 244)",
            stroke: "none",
            x: scope.startPosition.x,
            opacity: .3
        }).back();
        window.addEventListener('mousemove', function (e) {
            if (!scope.isActive) {
                return;
            }
            scope.mouseMove(e);
        }, false);
        window.addEventListener('mouseup', function (e) {
            if (!scope.isActive) {
                return;
            }
            scope.mouseUp(e);
        }, false);
    };
    CanvasRowComponent.prototype.object2Array = function (object) {
        var out = [];
        for (var i in object) {
            out.push(object[i]);
        }
        return out;
    };
    CanvasRowComponent.prototype.mouseMove = function (e) {
        if (!this.isActive) {
            return;
        }
        var endX = e.clientX - 261;
        var offset = endX - this.startPosition.x;
        var dayWidth = this.fieldWidth;
        if (Math.floor(endX % this.fieldWidth) == this.nextNum) {
            this.nextNum - 1;
        }
        if (offset > 0) {
            this.width = Math.round((Math.round(offset / dayWidth)) * dayWidth * 100) / 100;
            this.rectSelect.attr({
                width: this.width,
                x: this.startPosition.x
            });
        }
        else {
            this.width = Math.round((Math.floor(Math.abs(offset / dayWidth)) + 1) * dayWidth * 100) / 100;
            this.rectSelect.attr({
                width: this.width,
            }).move(this.startPosition.x - this.width, 0);
        }
    };
    CanvasRowComponent.prototype.drawCanvas = function () {
        this.canvas = this.elementRef.nativeElement.children[0];
        var width = 1591;
        var height = this.user['maxheight'] || 34;
        this.draw = __WEBPACK_IMPORTED_MODULE_8_svg_js__(this.canvas);
        var overloadPt;
        this.draw.each(function () {
            if (this.hasClass('hbar')) {
                this.remove();
            }
        });
        this.canvas.setAttribute("width", width);
        this.canvas.setAttribute("height", height);
        this.marginBetween = this.fieldWidth;
        for (var i = 0; i < width; i += this.marginBetween) {
            this.lines.push(i);
        }
        if (this.start && this.end) {
            var start = __WEBPACK_IMPORTED_MODULE_7_moment__(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.start, 'YYYY-MM-DD', 'X'));
            var end = __WEBPACK_IMPORTED_MODULE_7_moment__(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.end, 'YYYY-MM-DD', 'X'));
            var calemdarNumDates = Number((end).diff(start, 'day'));
            var scope = this;
            for (var i = 0; i <= calemdarNumDates + 1; i++) {
                var currDate = __WEBPACK_IMPORTED_MODULE_7_moment__(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(start, 'YYYY-MM-DD', 'X')).add(i - 1, 'day');
                var isOverload = scope.isOverloadDay.transform(scope.object2Array(this.user.plans), currDate);
                if (isOverload) {
                    var x = scope.fieldWidth * (i - 1);
                    if (x < 0)
                        x *= -1;
                    overloadPt = scope.draw.rect(scope.fieldWidth, scope.user['maxheight']).attr({
                        fill: "#fcf4f4",
                        stroke: "none",
                        x: x,
                        opacity: 1
                    }).back().addClass("hbar overload");
                }
            }
            ;
        }
        if (overloadPt) {
            this.drawMaskOverload(overloadPt);
        }
    };
    CanvasRowComponent.prototype.drawMaskOverload = function (overloadPt) {
        if (overloadPt.height() > 34) {
            var defs = this.draw.defs();
            var pattern = this.draw.pattern(20, 20, function (add) {
                add.rect().attr({
                    width: "2",
                    height: "4",
                    transform: "translate(0,0)",
                    fill: "white"
                });
            }).attr({
                id: "pattern-stripe",
                width: "4",
                height: "4",
                patternUnits: "userSpaceOnUse",
                patternTransform: "rotate(45)"
            });
            var maskRect = this.draw.rect().attr({
                x: "0",
                y: "0",
                width: "100%",
                height: '300%',
                fill: "url(#pattern-stripe)"
            });
            var mask = this.draw.mask().attr({
                id: "mask-stripe"
            }).add(maskRect);
            defs.add(mask);
        }
    };
    CanvasRowComponent.prototype.openDialog = function (user, startDay, endDay) {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__create_project_popup_popup_dialog_create_project_popup_dialog_component__["a" /* CreateProjectPopupDialogComponent */], {
            height: '530px',
            width: '360px',
            data: {
                user: this.user,
                startDay: startDay,
                endDay: endDay
            }
        });
    };
    return CanvasRowComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CanvasRowComponent.prototype, "fieldWidth", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__create_project_popup_user_interface__["IUser"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__create_project_popup_user_interface__["IUser"]) === "function" && _a || Object)
], CanvasRowComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], CanvasRowComponent.prototype, "planList", void 0);
CanvasRowComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-canvas-row',
        template: __webpack_require__("../../../../../src/app/canvas-row/canvas-row.component.html"),
        styles: [__webpack_require__("../../../../../src/app/canvas-row/canvas-row.component.css")],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__pipes_overloadDay_pipe__["a" /* IsOverloadDay */]
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MdDialog */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6__pipes_overloadDay_pipe__["a" /* IsOverloadDay */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__pipes_overloadDay_pipe__["a" /* IsOverloadDay */]) === "function" && _e || Object])
], CanvasRowComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=canvas-row.component.js.map

/***/ }),

/***/ "../../../../../src/app/confirm-modal/confirm-modal-component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"\">\n    <div class=\"modalHeader ng-scope\">Delete \n        <button [md-dialog-close]=\"true\" class=\"closePopup\" type=\"button\">×</button>\n    </div>\n    <div class=\"modalBody ng-scope\">\n\t<p class=\"ng-binding\">Are you sure you want to delete this item?</p>\n\t<p class=\"ng-binding\"></p>\n\t<div class=\"formRow clearfix btnsWrapp\">\n\t<button type=\"button\" class=\"button green\" [md-dialog-close]=\"true\">Delete</button>\n\t<button type=\"button\" class=\"button red\" [md-dialog-close]=\"false\">Cancel</button>\n\t</div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/confirm-modal/confirm-modal.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfirmComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ConfirmComponent = (function () {
    function ConfirmComponent() {
    }
    ConfirmComponent.prototype.ngOnInit = function () { };
    return ConfirmComponent;
}());
ConfirmComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'confirm-dialog',
        template: __webpack_require__("../../../../../src/app/confirm-modal/confirm-modal-component.html"),
    })
    /** Class CreateProjectPopupDialogComponent. */
    ,
    __metadata("design:paramtypes", [])
], ConfirmComponent);

//# sourceMappingURL=confirm-modal.component.js.map

/***/ }),

/***/ "../../../../../src/app/context-menu/context-menu-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextMenuComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_projects_data_share_service__ = __webpack_require__("../../../../../src/app/shared/services/projects-data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__confirm_modal_confirm_modal_component__ = __webpack_require__("../../../../../src/app/confirm-modal/confirm-modal.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};







var ContextMenuComponent = (function () {
    function ContextMenuComponent(dialog, dialogRef, data, socket, dataShare) {
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.data = data;
        this.socket = socket;
        this.dataShare = dataShare;
        this.dateInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        this.showPastNav = false;
        this.adminRole = localStorage.getItem('admin');
        this.planModel = this.data.plan;
        this.startPlan = this.onTitleChange(this.planModel.start_time);
        this.endPlan = this.onTitleChange(this.planModel.end_time);
        var div = document.createElement('div');
        this.dataShare.errorDelete().subscribe(function (data) {
            div.className = "alert alert-danger successMsg";
            div.innerHTML = "Error";
        });
        this.copy = this.dataShare.planCopy;
    }
    ContextMenuComponent.prototype.ngOnInit = function () { };
    ContextMenuComponent.prototype.onTitleChange = function (value) {
        var dateStr = Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(value, 'DD.MM.YYYY', 'X');
        return dateStr;
    };
    ContextMenuComponent.prototype.deletePlan = function () {
        var _this = this;
        var confirm;
        confirm = this.dialog.open(__WEBPACK_IMPORTED_MODULE_4__confirm_modal_confirm_modal_component__["a" /* ConfirmComponent */], {
            height: '170px',
            width: '360px'
        });
        this.dialogRef.close();
        confirm.afterClosed().subscribe(function (result) {
            if (confirm) {
                _this.dataShare.planDelete({ id: _this.planModel.id });
            }
        });
    };
    ContextMenuComponent.prototype.pastPlan = function () {
        var userId = this.planModel.user_id;
        delete this.copy['id'];
        this.dataShare.emitPlanCreate(__assign({}, this.copy, { user_id: Number(userId), planning_updated: Number(__WEBPACK_IMPORTED_MODULE_6_moment__().format('X')) }));
        this.dialogRef.close();
    };
    ContextMenuComponent.prototype.collapsePlan = function () {
        var collapseDay = Number(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.data.clickDate, 'X', 'YYYY-MM-DD'));
        if (this.planModel.end_time == this.planModel.start_time) {
            return;
        }
        var newCollapseDay;
        if (this.planModel.end_time == collapseDay) {
            var temp = collapseDay;
            collapseDay = Number(__WEBPACK_IMPORTED_MODULE_6_moment__(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(collapseDay, 'YYYY-MM-DD', 'X')).add(-1, 'day').format('X'));
            newCollapseDay = temp;
        }
        else {
            newCollapseDay = __WEBPACK_IMPORTED_MODULE_6_moment__(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(collapseDay, 'YYYY-MM-DD', 'X')).add(1, 'day').format('X');
        }
        var newPlan = Object.assign({}, this.planModel);
        delete newPlan['id'];
        this.dataShare.emitPlanCreate(__assign({}, newPlan, { start_time: Number(newCollapseDay), planning_updated: Number(__WEBPACK_IMPORTED_MODULE_6_moment__().format('X')) }));
        this.dataShare.emitPlanUpdate(__assign({}, this.planModel, { end_time: collapseDay, planning_updated: Number(__WEBPACK_IMPORTED_MODULE_6_moment__().format('X')) }));
        this.dialogRef.close();
    };
    ContextMenuComponent.prototype.copyPlan = function (value) {
        this.dataShare.setCopyPlan(value);
        this.copy = value;
    };
    return ContextMenuComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], ContextMenuComponent.prototype, "dateInput", void 0);
ContextMenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'context-menu-dialog',
        template: __webpack_require__("../../../../../src/app/context-menu/popup-dialog/context-menu-dialog.component.html"),
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["h" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */]) === "function" && _d || Object])
], ContextMenuComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=context-menu-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/context-menu/popup-dialog/context-menu-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"projNote\">\n    <div class=\"modalBody\" tabindex=\"0\" >\n        <p class=\"projBallonName\">{{this.planModel.project}}</p>\n        <ul class=\"projDetaisList\">\n            <li class=\"clearfix\">\n                <span class=\"name\">Start</span>\n                <span class=\"desc\">{{this.startPlan}}</span>\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"name\">End</span>\n                <span class=\"desc\">{{this.endPlan}}</span>\n            </li>\n            <li *ngIf=\"adminRole\" class=\"clearfix separator\"></li>\n            <li *ngIf=\"adminRole\" class=\"clearfix\" (click)=\"copyPlan(this.planModel)\">\n\t\t<span class=\"option\"><i class=\"icon copy\"></i> Copy</span>\n            </li>\n            <li class=\"clearfix ng-scope\" *ngIf=\"copy\" (click)=\"pastPlan()\">\n\t\t<span class=\"option\"><i class=\"icon paste\"></i> Paste</span>\n            </li>\n            <li *ngIf=\"adminRole\" class=\"clearfix\" (click)='collapsePlan()'>\n\t\t<span class=\"option\"><i class=\"icon collapse\"></i> Collapse</span>\n            </li>\n            <li *ngIf=\"adminRole\" class=\"clearfix\" (click)=\"deletePlan()\">\n\t\t<span class=\"option\"><i class=\"icon delete\"></i> Delete</span>\n            </li>\n        </ul>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/context-menu/service/contextMenuDialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContextDialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__context_menu_dialog_component__ = __webpack_require__("../../../../../src/app/context-menu/context-menu-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContextDialogsService = (function () {
    function ContextDialogsService(dialog) {
        this.dialog = dialog;
    }
    ContextDialogsService.prototype.deletePlanDialog = function (data, date) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__context_menu_dialog_component__["a" /* ContextMenuComponent */], {
            width: '220px',
            data: {
                plan: data,
                clickDate: date
            },
        });
        return dialogRef.afterClosed();
    };
    return ContextDialogsService;
}());
ContextDialogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */]) === "function" && _a || Object])
], ContextDialogsService);

var _a;
//# sourceMappingURL=contextMenuDialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/create-project-popup/popup-api.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** ClassProjectsService. */
var ProjectsService = (function () {
    function ProjectsService(socket) {
        this.socket = socket;
        /** API URL. */
        this.subject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.projectList = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    ProjectsService.prototype.emitList = function (value) {
        this.list = value;
        this.projectList.next(value);
    };
    /**
     * Get list all projects.
     * */
    ProjectsService.prototype.emitProjectData = function () {
        var _this = this;
        this.socket.emit('project').subscribe(function (data) {
            _this.subject.next(data);
        }, function (error) {
            console.log('Error', error);
        }, function () {
            //                console.log('complete');
        });
    };
    ProjectsService.prototype.getList = function () {
        return this.projectList.asObservable();
    };
    ProjectsService.prototype.getProjects = function () {
        return this.subject.asObservable();
    };
    return ProjectsService;
}());
ProjectsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _a || Object])
], ProjectsService);

var _a;
//# sourceMappingURL=popup-api.service.js.map

/***/ }),

/***/ "../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".button {\n    width: 46%;\n    height: 34px;\n    line-height: 24px;\n}\n\nmd-datepicker-toggle {\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\n.dateField {\n    border-bottom: 0;\n    box-shadow: none;\n    padding-right: 40px;\n    text-align: center;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editPlainingPopup\">\n    <div class=\"modalHeader ng-scope\">\n        <p class=\"popupHeader ng-binding\">Create plan</p>\n        <button [md-dialog-close]=\"true\" class=\"closePopup\" type=\"button\">×</button>\n        <p class=\"ng-binding\">for {{usrData.lastname}} {{usrData.firstname}}</p>\n    </div>\n    <div class=\"modalBody ng-scope\" tabindex=\"0\" >\n        <form (ngSubmit)=\"createPlan.valid && planModel.project_id && createProject(usrData.id)\"   #createPlan=\"ngForm\" novalidate >\n\n            <div class=\"formWrapp clearfix\">\n                <div class=\"formRow clearfix\">\n                    <div class=\"thirdWidthBlock formCol\">\n                        <label>Project</label>\n                    </div>\n                    <div class=\"form-group twothirdWidthBlock formCol\">\n\n                        <md-form-field class=\"example-full-width\">\n                            <input type=\"text\" md-require-match=\"true\" \n                                   placeholder=\"Select Project\"\n                                   aria-label=\"Number\" mdInput [formControl]=\"choosePlan\"\n                                   [mdAutocomplete]=\"auto\"\n                                   name='project'\n                                   required>\n\n                            <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn.bind(this)\">\n                                <md-option  (onSelectionChange)=\"selectProject($event, project)\"  *ngFor=\"let project of filteredProjects | async\" [value]=\"project\">\n                                    {{ project.name }}\n                                </md-option>\n                            </md-autocomplete>\n                    </md-form-field>\n\n                    <div [hidden]=\"planModel.project_id || !createPlan.submitted\" class=\"error clearfix\">\n                        <small class=\"text-danger\">This value is required</small>\n                    </div>\n                </div>\n            </div>\n            <div class=\"formRow clearfix form-group\">\n                <div class=\"thirdWidthBlock date formCol\">\n                    <label>Start date</label>\n                </div>\n                <md-form-field required class=\"twothirdWidthBlock formCol\">\n                    <input\n                        mdInput\n                        name=\"start_time\"\n                        #start_time=\"ngModel\"\n                        [mdDatepicker]=\"startDate\"\n                        date=\"true\"\n                        [(ngModel)]=\"planModel.start_time\"\n                        (ngModelChange)=\"changeStart()\"\n                        class=\"dateField\"\n                        placeholder=\"Choose a date\">\n                    <md-datepicker-toggle mdSuffix [for]=\"startDate\"></md-datepicker-toggle>\n                    <md-datepicker [startView]=\"dateStart\" #startDate></md-datepicker>\n                </md-form-field>\n            </div>\n            <div class=\"formRow clearfix form-group\">\n                <div class=\"thirdWidthBlock date formCol\">\n                    <label>End date</label>\n                </div>\n                <md-form-field class=\"twothirdWidthBlock formCol\">\n                    <input name=\"end_time\"\n                           #end_time=\"ngModel\"\n                           mdInput [mdDatepicker]=\"endDate\"\n                           placeholder=\"Choose a date\"\n                           [(ngModel)]=\"planModel.end_time\"\n                           (dateChange)=\"onTitleChange()\"\n                           date=\"true\"\n                           class=\"dateField\"\n                           (ngModelChange)=\"changeEnd()\"\n                           >\n                           <md-datepicker-toggle mdSuffix [for]=\"endDate\"></md-datepicker-toggle>\n                    <md-datepicker #endDate></md-datepicker>\n                </md-form-field>\n            </div>\n            <div class=\"formRow clearfix \">\n                <div class=\"thirdWidthBlock formCol\">\n                    <label>Approved</label>\n                </div>\n                <div class=\"twothirdWidthBlock formCol form-group\">\n                    <div class=\" flRight\">\n                        <md-checkbox [checked]=\"true\" id=\"approved\" #approved=\"ngModel\" name=\"approved\"\n                              [(ngModel)]=\"planModel.approved\"></md-checkbox>\n                    </div>\n                </div>\n            </div>\n            <div class=\"formRow clearfix\">\n                <div class=\"thirdWidthBlock formCol\">\n                    <label>Busy time</label>\n                </div>\n                <div class=\"twothirdWidthBlock formCol\" >\n                    <div class=\"clearfix\">\n                        <span class=\"label flRight\">%</span>\n                        <input class=\"flRight smallInp\" type=\"text\"\n                               (keypress)=\"keyPress($event)\"\n                              value=\"0\"\n                               [(ngModel)]=\"planModel.percent\"\n                               name=\"percent\" #percent=\"ngModel\" required\n                               >\n                        \n                        <div [hidden]=\"percent.valid || (percent.pristine && !createPlan.submitted)\" class=\"error clearfix\">\n                            <small class=\"text-danger\">This value is required</small>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"formRow clearfix\">\n                <div class=\"thirdWidthBlock formCol\"><label>Note</label></div>\n            </div>\n\n            <div class=\"formRow clearfix\">\n                <textarea [(ngModel)]=\"planModel.note\"\n                    maxlength=\"250\"\n                    name=\"note\"\n                    class=\"ng-pristine\"\n                    ></textarea>\n                <p class=\"tooltip flLeft\">press Ctrl + Enter for new line</p>\n                <p class=\"tooltip ng-binding\">250 characters left</p>\n            </div>\n        </div>\n\n        <div class=\"formRow clearfix btnsWrapp\">\n            <button class=\"button baloonBtn\" [md-dialog-close]=\"true\">Cancel</button>\n            <button class=\"button red flRight ng-binding\"  type=\"submit\">Create</button>\n        </div>\n    </form>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectPopupDialogComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__project_interface__ = __webpack_require__("../../../../../src/app/create-project-popup/project.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popup_api_service__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_projects_data_share_service__ = __webpack_require__("../../../../../src/app/shared/services/projects-data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var CreateProjectPopupDialogComponent = (function () {
    /**
     * Create CreateProjectPopupDialogComponent.
     * */
    function CreateProjectPopupDialogComponent(dataShare, dialogRef, data, socket, projectsService, elementRef) {
        this.dataShare = dataShare;
        this.dialogRef = dialogRef;
        this.data = data;
        this.socket = socket;
        this.projectsService = projectsService;
        this.elementRef = elementRef;
        this.keypresValues = '';
        this.choosePlan = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */];
        this.dateInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        if (this.data.user) {
            this.usrData = this.data.user;
        }
        else {
            this.usrData = this.data;
        }
        if (this.data['startDay']) {
            this.planModel = {
                start_time: new Date(this.data['startDay']),
                end_time: new Date(this.data['endDay']),
                approved: true
            };
        }
        else {
            this.planModel = {
                start_time: new Date(),
                end_time: new Date(),
                approved: true
            };
        }
    }
    CreateProjectPopupDialogComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = this.projectsService.list;
        var div = document.createElement('div');
        this.connection = this.dataShare.getPlan().subscribe(function (data) {
            if (data.errors) {
                div.className = "alert alert-danger successMsg";
                div.innerHTML = "Error";
            }
            else {
                div.className = "alert alert-success successMsg";
                div.innerHTML = "Plan is created";
            }
            document.body.appendChild(div);
            setTimeout(function (data) {
                div.remove();
            }, 5000);
        });
        this.filteredProjects = this.choosePlan.valueChanges
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : _this.projects.slice(); });
    };
    CreateProjectPopupDialogComponent.prototype.ngOnChanges = function () {
    };
    CreateProjectPopupDialogComponent.prototype.filter = function (val) {
        if (val.toLowerCase) {
            return this.projects.filter(function (project) {
                return project.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
        }
        else {
            return this.projects.filter(function (project) {
                return project.name.toLowerCase().indexOf(val) === 0;
            });
        }
    };
    CreateProjectPopupDialogComponent.prototype.displayFn = function (project) {
        // I want to get the full object and display the name
        if (!project)
            return '';
        return project.name;
    };
    /**
     * Create new Project.
     * */
    CreateProjectPopupDialogComponent.prototype.onTitleChange = function () {
        var dateStr = __WEBPACK_IMPORTED_MODULE_11_moment__(this.planModel.end_time).format('YYYY,MM,DD').split(",").map(function (item) {
            return parseInt(item, 10);
        });
    };
    CreateProjectPopupDialogComponent.prototype.changeStart = function () {
        if (this.planModel.start_time.getTime() > this.planModel.end_time.getTime()) {
            this.planModel.end_time = this.planModel.start_time;
        }
    };
    CreateProjectPopupDialogComponent.prototype.changeEnd = function () {
        if (this.planModel.start_time.getTime() > this.planModel.end_time.getTime()) {
            this.planModel.start_time = this.planModel.end_time;
        }
    };
    CreateProjectPopupDialogComponent.prototype.createProject = function () {
        this.dialogRef.close();
        if (!this.planModel.approved)
            this.planModel.approved = 0;
        this.planModel.end_time = Number(Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.planModel.end_time, 'X'));
        this.planModel.start_time = Number(Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.planModel.start_time, 'X'));
        this.dataShare.emitPlanCreate(__assign({}, this.planModel, { user_id: Number(this.usrData.id), planning_updated: Number(__WEBPACK_IMPORTED_MODULE_11_moment__().format('X')) }));
        this.reset();
    };
    /**
     * Reset planModel form.
     * */
    CreateProjectPopupDialogComponent.prototype.reset = function () {
        for (var value in this.planModel) {
            if (this.planModel.hasOwnProperty(value)) {
                this.planModel[value] = null;
            }
        }
    };
    CreateProjectPopupDialogComponent.prototype.selectProject = function (event, item) {
        if (event.source.selected) {
            this.planModel.project_id = item.id;
        }
    };
    CreateProjectPopupDialogComponent.prototype.keyPress = function (event) {
        var pattern = /^(100|[0-9]|[0-9][0-9])$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8) {
            this.keypresValues += inputChar;
        }
        else {
            this.keypresValues = this.keypresValues.slice(0, -1);
        }
        var pass = pattern.test(this.keypresValues);
        if (event.keyCode != 8 && !pattern.test(this.keypresValues)) {
            this.keypresValues = this.keypresValues.slice(0, -1);
            event.preventDefault();
        }
    };
    CreateProjectPopupDialogComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    return CreateProjectPopupDialogComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CreateProjectPopupDialogComponent.prototype, "dateInput", void 0);
CreateProjectPopupDialogComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-project-popup-dialog',
        template: __webpack_require__("../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.css")],
        providers: [
            { provide: 'IProject', useValue: __WEBPACK_IMPORTED_MODULE_1__project_interface__["a" /* ProjectClass */] }
        ]
    })
    /** Class CreateProjectPopupDialogComponent. */
    ,
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__popup_api_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__popup_api_service__["a" /* ProjectsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _e || Object])
], CreateProjectPopupDialogComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-project-popup-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-project-popup/popup/create-project-popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateProjectPopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popup_dialog_create_project_popup_dialog_component__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_interface__ = __webpack_require__("../../../../../src/app/create-project-popup/user.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__user_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreateProjectPopupComponent = (function () {
    function CreateProjectPopupComponent(dialog, socket) {
        this.dialog = dialog;
        this.socket = socket;
    }
    CreateProjectPopupComponent.prototype.openDialog = function () {
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_1__popup_dialog_create_project_popup_dialog_component__["a" /* CreateProjectPopupDialogComponent */], {
            width: '360px',
            data: this.user
        });
    };
    return CreateProjectPopupComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_interface__["IUser"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_interface__["IUser"]) === "function" && _a || Object)
], CreateProjectPopupComponent.prototype, "user", void 0);
CreateProjectPopupComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-create-project-popup',
        template: "<span (click)=\"openDialog(user)\" class=\"addNewProj\">&nbsp;</span>"
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _c || Object])
], CreateProjectPopupComponent);

var _a, _b, _c;
//# sourceMappingURL=create-project-popup.component.js.map

/***/ }),

/***/ "../../../../../src/app/create-project-popup/project.interface.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectClass; });
var ProjectClass = (function () {
    function ProjectClass() {
        this.start_time = new Date().toString();
        this.end_time = new Date().toString();
        this.percent = 0;
        this.approved = 0;
    }
    return ProjectClass;
}());

//# sourceMappingURL=project.interface.js.map

/***/ }),

/***/ "../../../../../src/app/create-project-popup/user.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=user.interface.js.map

/***/ }),

/***/ "../../../../../src/app/cursors/cursors.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"cursor\" [ngStyle]=\"{'left': mouseCursor + 'px'}\" [hidden]=\"leave\"></div>\n<div *ngIf='nowDayCursorPosition' class=\"nowday\" [ngStyle]=\"{'left': nowDayCursorPosition + 'px'}\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/cursors/cursors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CursorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CursorsComponent = (function () {
    function CursorsComponent(calendarShare) {
        this.calendarShare = calendarShare;
    }
    CursorsComponent.prototype.ngOnInit = function () {
        this.getNowDayCursorPosition();
    };
    /** Change now day cursor line position. */
    CursorsComponent.prototype.getNowDayCursorPosition = function () {
        var _this = this;
        var today = __WEBPACK_IMPORTED_MODULE_3_moment__();
        function getHoursOffset(width) {
            return Number(__WEBPACK_IMPORTED_MODULE_3_moment__().format('H')) * (width / 24);
        }
        this.calendarShare.getDatePeriod().subscribe(function (r) {
            if (!r) {
                return;
            }
            var start = __WEBPACK_IMPORTED_MODULE_3_moment__(r.date.start, __WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["a" /* dateFormat */]);
            var end = __WEBPACK_IMPORTED_MODULE_3_moment__(r.date.end, __WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["a" /* dateFormat */]);
            if (start.isBefore(today) && today.isBefore(end)) {
                var diff_1 = start.diff(today, 'days') * -1;
                _this.calendarShare.getFieldWidth().subscribe(function (width) {
                    _this.nowDayCursorPosition = 300 + diff_1 * width + getHoursOffset(width);
                });
            }
        });
    };
    return CursorsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], CursorsComponent.prototype, "mouseCursor", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], CursorsComponent.prototype, "leave", void 0);
CursorsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-cursors',
        template: __webpack_require__("../../../../../src/app/cursors/cursors.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _a || Object])
], CursorsComponent);

var _a;
//# sourceMappingURL=cursors.component.js.map

/***/ }),

/***/ "../../../../../src/app/errors/show-errors.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShowErrorsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ShowErrorsComponent = ShowErrorsComponent_1 = (function () {
    function ShowErrorsComponent() {
    }
    ShowErrorsComponent.prototype.shouldShowErrors = function () {
        return this.control &&
            this.control.errors && (this.form.submitted ||
            (this.control.dirty || this.control.touched));
    };
    ShowErrorsComponent.prototype.listOfErrors = function () {
        var _this = this;
        return Object.keys(this.control.errors)
            .map(function (field) { return _this.getMessage(field, _this.control.errors[field]); });
    };
    ShowErrorsComponent.prototype.getMessage = function (type, params) {
        return ShowErrorsComponent_1.errorMessages[type](params);
    };
    return ShowErrorsComponent;
}());
ShowErrorsComponent.errorMessages = {
    'required': function () { return 'This field is required'; },
    'minlength': function (params) { return 'The min number of characters is ' + params.requiredLength; },
    'maxlength': function (params) { return 'The max allowed number of characters is ' + params.requiredLength; },
    'pattern': function (params) { return 'The required pattern is: ' + params.requiredPattern; },
    'years': function (params) { return params.message; },
    'countryCity': function (params) { return params.message; },
    'uniqueName': function (params) { return params.message; },
};
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ShowErrorsComponent.prototype, "control", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], ShowErrorsComponent.prototype, "form", void 0);
ShowErrorsComponent = ShowErrorsComponent_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'show-errors',
        template: "\n   <ul *ngIf=\"shouldShowErrors()\">\n     <li style=\"color: red\" *ngFor=\"let error of listOfErrors()\">{{error}}</li>\n   </ul>\n ",
    })
], ShowErrorsComponent);

var ShowErrorsComponent_1, _a, _b;
//# sourceMappingURL=show-errors.component.js.map

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"groupRow\">\n     <span class=\"groupName\">{{groupName}}</span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/groups/groups.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_groups_service__ = __webpack_require__("../../../../../src/app/groups/service/groups.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GroupsComponent = (function () {
    function GroupsComponent(groupsService) {
        this.groupsService = groupsService;
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    GroupsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userGroups = this.groupsService.groups;
        if (this.groupId == 'null')
            this.groupName = 'Unknown';
        Object.keys(this.userGroups).forEach(function (key) {
            if (_this.userGroups[key].id === Number(_this.groupId)) {
                _this.groupName = _this.userGroups[key].name;
            }
        });
    };
    return GroupsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], GroupsComponent.prototype, "groupId", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], GroupsComponent.prototype, "onClick", void 0);
GroupsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'group-name',
        template: __webpack_require__("../../../../../src/app/groups/groups.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__service_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_groups_service__["a" /* GroupsService */]) === "function" && _a || Object])
], GroupsComponent);

var _a;
//# sourceMappingURL=groups.component.js.map

/***/ }),

/***/ "../../../../../src/app/groups/service/groups.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GroupsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Class the GroupService*/
var GroupsService = (function () {
    function GroupsService(socket) {
        this.socket = socket;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
    }
    /** Get formatted groups list
     * @param users - Unformatted list.
     * */
    GroupsService.prototype.emitGroupsData = function () {
        var _this = this;
        if (!this.groups) {
            this.socket.emit('group').subscribe(function (data) {
                _this.subject.next(data);
            }, function (error) {
                console.log('Error', error);
            }, function () {
                //                console.log('complete');
            });
        }
    };
    GroupsService.prototype.getGroupsData = function () {
        return this.subject.asObservable();
    };
    return GroupsService;
}());
GroupsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _a || Object])
], GroupsService);

var _a;
//# sourceMappingURL=groups.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/calendar/calendar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".calLineMain {\n    width: 85%;\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    position: relative;\n    padding: 0 30px;\n}\n\n.dayBlock {\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -moz-align-items: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n     -moz-flex-direction:column;\n    -webkit-box-orient: vertical;\n    -webkit-box-direction: normal;\n        -ms-flex-direction: column;\n            flex-direction: column;\n}\n\n.monthLine {\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    text-transform: uppercase;\n    border-right: 1px solid #e9e8e7;\n    -moz-justify-content: center;\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n.monthWrapper:last-child .monthLine {\n    border-right: 0;\n}\n.next,\n.prev {\n    border-bottom: 1px solid #e9e8e7;\n}\n.next-month,\n.prev-month,\n.next-day,\n.prev-day {\n    position: absolute;\n    top: 0;\n    left: 0;\n}\n.next-day,\n.prev-day {\n   top: 27px;\n}\n.next-month,\n.next-day {\n    left: auto;\n    right: 0;\n}\n\n.monthLine,\n.daysLine {\n    width: 100%;\n}\n\n.daysLine,\n.weeksLine {\n    -webkit-box-pack: center;\n        -ms-flex-pack: center;\n            justify-content: center;\n}\n\n.monthLine,\n.daysLine,\n.weeksLine {\n    height: 27px;\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -moz-align-items: center;\n    -webkit-box-align: center;\n        -ms-flex-align: center;\n            align-items: center;\n    border-bottom: 1px solid #e9e8e7;\n}\n\n.daysWrapper {\n    -webkit-display: flex;\n    -moz-display: flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.weekend a{\n    color: #999;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/calendar/calendar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"calLineMain\" #calLineMain >\n    <a (click)=\"changeDateRange('prev', 'month')\" class=\"prev prev-month\">&nbsp;</a>\n    <a (click)=\"changeDateRange('next', 'month')\" class=\"next next-month\">&nbsp;</a>\n    <a (click)=\"changeDateRange('prev', 'day')\" class=\"prev prev-day\">&nbsp;</a>\n    <a (click)=\"changeDateRange('next', 'day')\" class=\"next next-day\">&nbsp;</a>\n    <div *ngFor=\"let month of dateConfig\" class=\"monthWrapper\">\n        <span class=\"monthLine\">\n            <a href=\"\">{{month.name}}</a>\n        </span>\n\n        <div class=\"daysWrapper\">\n\n            <div\n                *ngFor=\"let day of month.daysRange\"\n                class=\"dayBlock\"\n                [ngStyle]=\"{'width': daysWidth + 'px'}\"\n                [ngClass]=\" (day.weekIndex === 6 || !day.weekIndex ) ? 'weekend' : '' \"\n                >\n                <span class=\"daysLine\">\n                    <a href=\"\">{{day.serial}}</a>\n                </span>\n\n                <span class=\"weeksLine\">\n                    <a href=\"\">{{weekDays[day.weekIndex]}}</a>\n                </span>\n            </div>\n\n        </div>\n    </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/calendar/calendar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_date_object_interface__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date-object.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_date_object_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__utils_date_object_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_calendar_service__ = __webpack_require__("../../../../../src/app/header/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CalendarComponent = (function () {
    /**
     * Create CalendarComponent.
     * @param elementRef - DOM
     * @param dataShare - The service for calendar date share.
     * */
    function CalendarComponent(elementRef, dataShare, calendarShare) {
        this.elementRef = elementRef;
        this.dataShare = dataShare;
        this.calendarShare = calendarShare;
        /** List week days. */
        this.weekDays = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA'];
        this.onChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        /** Generate event if width was changed */
        this.widthDays = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    /**
     * If date config was changed ->
     * take calendar line width and emmit new event.
     * */
    CalendarComponent.prototype.ngOnChanges = function (e) {
        this.getWidth();
        this.widthDays.emit(this.daysWidth);
    };
    /** Calculate date width. */
    CalendarComponent.prototype.getWidth = function () {
        /** Month array have view like this [firstMonth, ...Month]. */
        var size = Object.keys(this.dateConfig).length;
        var countDays = 0;
        for (var i = 0; i < size; i++) {
            countDays += this.dateConfig[i].daysRange.length;
        }
        /** 70 - Offset for the side shooters. */
        this.daysWidth = (this.calLineMain.nativeElement.offsetWidth - 70) / countDays;
        /** Update field width Rx.JS. */
        this.dataShare.setFieldWidth(this.daysWidth);
    };
    ;
    CalendarComponent.prototype.getNewDate = function (old, type, step) {
        return Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_6_moment__(old, 'YYYY-MM-D').add(step, type), 'DD.MM.YYYY', 'X');
    };
    CalendarComponent.prototype.changeDateRange = function (direction, type) {
        var startOld = Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__["a" /* LocalStorageService */].getCurrentDate().start, 'YYYY-MM-DD');
        var endOld = Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__["a" /* LocalStorageService */].getCurrentDate().end, 'YYYY-MM-DD');
        var start, end;
        if (direction == 'next') {
            if (type == "month") {
                start = this.getNewDate(startOld, 'month', 1);
                end = this.getNewDate(endOld, 'month', 1);
            }
            else {
                start = this.getNewDate(startOld, 'day', 1);
                end = this.getNewDate(endOld, 'day', 1);
            }
        }
        else if (direction == 'prev') {
            if (type == "month") {
                start = Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_6_moment__(startOld, 'YYYY-MM-D').add(-1, 'month'), 'DD.MM.YYYY', 'X');
                end = Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_6_moment__(endOld, 'YYYY-MM-D').add(-1, 'month'), 'DD.MM.YYYY', 'X');
            }
            else {
                start = Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_6_moment__(startOld, 'YYYY-MM-D').add(-1, 'day'), 'DD.MM.YYYY', 'X');
                end = Object(__WEBPACK_IMPORTED_MODULE_1__calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_6_moment__(endOld, 'YYYY-MM-D').add(-1, 'day'), 'DD.MM.YYYY', 'X');
            }
        }
        /** Get month days range. */
        this.dateConfig = __WEBPACK_IMPORTED_MODULE_3__calendar_calendar_service__["a" /* CalendarService */].dateChange({ start: start, end: end });
        this.onChanged.emit({ start: start, end: end });
        __WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__["a" /* LocalStorageService */].setDateConfig(this.dateConfig);
        __WEBPACK_IMPORTED_MODULE_5__shared_services_local_storage_service__["a" /* LocalStorageService */].setCurrentDate({ start: start, end: end });
        //        /** Update date Rx.JS. */
        this.calendarShare.setDatePeriod({ start: start, end: end });
    };
    return CalendarComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "onChanged", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__utils_date_object_interface__["IDateObject"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__utils_date_object_interface__["IDateObject"]) === "function" && _a || Object)
], CalendarComponent.prototype, "dateConfig", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], CalendarComponent.prototype, "widthDays", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_16" /* ViewChild */])('calLineMain'),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _b || Object)
], CalendarComponent.prototype, "calLineMain", void 0);
CalendarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-calendar',
        template: __webpack_require__("../../../../../src/app/header/calendar/calendar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/calendar/calendar.component.css")]
    })
    /** Class CalendarComponent. */
    ,
    __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _e || Object])
], CalendarComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=calendar.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/calendar/calendar.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/** Class CalendarService. */
var CalendarService = CalendarService_1 = (function () {
    function CalendarService() {
    }
    CalendarService.getDefaultDate = function () {
        var start = __WEBPACK_IMPORTED_MODULE_2_moment_moment__().format('DD.MM.YYYY');
        var end = __WEBPACK_IMPORTED_MODULE_1__utils_date_util__["d" /* getEndDay */](start, 'DD.MM.YYYY');
        return { start: start, end: end };
    };
    /**
     * If date config was changed.
     * */
    CalendarService.dateChange = function (date) {
        return CalendarService_1.handleDate(date, true);
    };
    /**
     * Create month array with days range.
     * @param date: start and end date object.
     * @param changeDate - If called from dateChange.
     * */
    CalendarService.handleDate = function (date, changeDate) {
        var startMonth = __WEBPACK_IMPORTED_MODULE_1__utils_date_util__["b" /* formatDateByParam */](date.start, 'MM');
        var endMonth = __WEBPACK_IMPORTED_MODULE_1__utils_date_util__["b" /* formatDateByParam */](date.end, 'MM');
        var months = [];
        if (startMonth !== endMonth) {
            var monthRage = +endMonth - +startMonth;
            var end = __WEBPACK_IMPORTED_MODULE_2_moment_moment__().month(startMonth).add(-1, 'month').daysInMonth() + __WEBPACK_IMPORTED_MODULE_2_moment_moment__().month(startMonth).add(-1, 'month').format(".MM.YYYY");
            months.push(__WEBPACK_IMPORTED_MODULE_1__utils_date_util__["c" /* formatMonth */](date.start, (changeDate) ? end : null));
            for (var i = 0; i < monthRage - 1; i++) {
                end = __WEBPACK_IMPORTED_MODULE_2_moment_moment__().month(startMonth).add(i, 'month').daysInMonth() + __WEBPACK_IMPORTED_MODULE_2_moment_moment__().month(startMonth).add(i, 'month').format(".MM.YYYY");
                var nextMonth_1 = '01.' + __WEBPACK_IMPORTED_MODULE_2_moment_moment__().month(startMonth).add(i, 'month').format("MM.YYYY");
                months.push(__WEBPACK_IMPORTED_MODULE_1__utils_date_util__["c" /* formatMonth */](nextMonth_1, end));
            }
            var nextMonth = '01.' + __WEBPACK_IMPORTED_MODULE_1__utils_date_util__["b" /* formatDateByParam */](date.end, 'MM.YYYY');
            months.push(__WEBPACK_IMPORTED_MODULE_1__utils_date_util__["c" /* formatMonth */](nextMonth, date.end));
        }
        else {
            months.push(__WEBPACK_IMPORTED_MODULE_1__utils_date_util__["c" /* formatMonth */](date.start, (changeDate) ? date.end : null));
        }
        return months;
    };
    /**
     * Create new date config object.
     * */
    CalendarService.init = function () {
        var defaultDate = CalendarService_1.getDefaultDate();
        var date = CalendarService_1.handleDate(defaultDate, false);
        __WEBPACK_IMPORTED_MODULE_3__shared_services_local_storage_service__["a" /* LocalStorageService */].setCurrentDate(defaultDate);
        __WEBPACK_IMPORTED_MODULE_3__shared_services_local_storage_service__["a" /* LocalStorageService */].setDateConfig(date);
        return date;
    };
    return CalendarService;
}());
CalendarService = CalendarService_1 = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CalendarService);

var CalendarService_1;
//# sourceMappingURL=calendar.service.js.map

/***/ }),

/***/ "../../../../../src/app/header/calendar/utils/date-object.interface.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=date-object.interface.js.map

/***/ }),

/***/ "../../../../../src/app/header/calendar/utils/date.util.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dateFormat; });
/* harmony export (immutable) */ __webpack_exports__["d"] = getEndDay;
/* unused harmony export getDaysInMonth */
/* harmony export (immutable) */ __webpack_exports__["b"] = formatDateByParam;
/* unused harmony export getDaysRange */
/* harmony export (immutable) */ __webpack_exports__["c"] = formatMonth;
/* unused harmony export convertUnix */
/* unused harmony export formatDate */
/* unused harmony export getUnix */
/* unused harmony export handleDate */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);

var dateFormat = 'DD.MM.YYYY';
// ICM - In Current Month
function getEndDay(begin, format) {
    if (format === void 0) { format = dateFormat; }
    var countDaysICM = getDaysInMonth(begin) - Number(formatDateByParam(begin, 'DD'));
    return __WEBPACK_IMPORTED_MODULE_0_moment__(begin, format).add(countDaysICM, 'days').add(31 - countDaysICM, 'days').format(format);
}
function getDaysInMonth(month) {
    return __WEBPACK_IMPORTED_MODULE_0_moment__(month, dateFormat).daysInMonth();
}
function formatDateByParam(data, param, currentFormat) {
    if (currentFormat === void 0) { currentFormat = dateFormat; }
    return __WEBPACK_IMPORTED_MODULE_0_moment__(data, currentFormat).format(param);
}
function getDaysRange(start, fixEnd) {
    var daysRange = [];
    var i = Number(formatDateByParam(start, 'DD'));
    var endDay;
    if (fixEnd) {
        endDay = formatDateByParam(fixEnd, 'DD');
    }
    else {
        endDay = getDaysInMonth(start);
    }
    for (i; i <= endDay; i++) {
        var currentDay = "2017-" + formatDateByParam(start, 'MM') + "-" + i;
        var dayObj = {
            serial: Number(i),
            weekIndex: __WEBPACK_IMPORTED_MODULE_0_moment__(currentDay, 'YYYY-MM-D').day()
        };
        daysRange.push(dayObj);
    }
    return daysRange;
}
function formatMonth(start, end) {
    return {
        name: formatDateByParam(start, 'MMMM'),
        daysRange: getDaysRange(start, end)
    };
}
function convertUnix(time) {
    return __WEBPACK_IMPORTED_MODULE_0_moment__["unix"](time).format(dateFormat);
}
function formatDate(date, format) {
    return __WEBPACK_IMPORTED_MODULE_0_moment__(date, dateFormat).format(format);
}
function getUnix(date) {
    return Number(__WEBPACK_IMPORTED_MODULE_0_moment__(date, dateFormat).format('X'));
}
function handleDate(current, newMonth) {
    if (formatDate(current.start, 'M') !== formatDate(newMonth.start, 'M')) {
        return;
    }
    var fDiff = getUnix(current.start) - getUnix(newMonth.start);
    var sDiff = getUnix(current.end) - getUnix(newMonth.end);
    var startDate = __WEBPACK_IMPORTED_MODULE_0_moment__(current.start, dateFormat).subtract(fDiff, 'seconds').format(dateFormat);
    var endDate = current.end;
    if (sDiff > 0) {
        endDate = __WEBPACK_IMPORTED_MODULE_0_moment__(current.end, dateFormat).subtract(sDiff, 'seconds').format(dateFormat);
    }
    var index = Number(formatDate(startDate, 'D')) - Number(formatDate(current.start, 'D'));
    return {
        start: index,
        end: Number(formatDate(endDate, 'D')) - index + 1
    };
}
//# sourceMappingURL=date.util.js.map

/***/ }),

/***/ "../../../../../src/app/header/gant-header/gant-header.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"gantHeader\" >\n     <div class='gantHeaderWrapp' [ngClass]=\"{'fixed': sticky}\">\n    <div class=\"clearfix userRow\">\n        <my-date-range-picker [options]=\"myDateRangePickerOptions\" (dateRangeChanged)=\"changeDateRange($event)\" [(ngModel)]=\"dateRange\"\n            placeholder=\"Select Start and End date\"\n            ></my-date-range-picker>\n        <app-calendar  [dateConfig]=\"dateConfig\" (onChanged)=\"onChanged($event)\"></app-calendar>\n    </div>\n</div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/gant-header/gant-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GantHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_service__ = __webpack_require__("../../../../../src/app/header/calendar/calendar.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage_service__ = __webpack_require__("../../../../../src/app/shared/services/local-storage.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GantHeaderComponent = (function () {
    /**
     * Create GantHeaderComponent.
     * @param calendarShare - Share calendar data
     * */
    function GantHeaderComponent(calendarShare) {
        this.calendarShare = calendarShare;
        this.sticky = false;
        this.myDateRangePickerOptions = {
            dateFormat: 'dd mmm yyyy',
            monthLabels: { 1: 'Jan', 2: 'Feb', 3: 'Mar', 4: 'Apr', 5: 'May', 6: 'Jun', 7: 'Jul', 8: 'Aug', 9: 'Sep', 10: 'Oct', 11: 'Nov', 12: 'Dec' }
        };
    }
    GantHeaderComponent.prototype.ngOnInit = function () {
        if (!__WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage_service__["a" /* LocalStorageService */].checkInit()) {
            __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_service__["a" /* CalendarService */].init();
        }
        var scope = this;
        this.dateConfig = __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage_service__["a" /* LocalStorageService */].getDateConfig();
        this.currentDate = __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage_service__["a" /* LocalStorageService */].getCurrentDate();
        var curentEnd = this.currentDate.end.split('.');
        var curentStart = this.currentDate.start.split('.');
        this.dateRange = {
            beginDate: {
                year: curentStart[2],
                month: Number(curentStart[1]),
                day: Number(curentStart[0])
            },
            endDate: {
                year: curentEnd[2],
                month: Number(curentEnd[1]),
                day: Number(curentEnd[0])
            }
        };
        /** Update date Rx.JS. */
        this.calendarShare.setDatePeriod(this.currentDate);
        window.onscroll = function () {
            if (document.body.scrollTop + document.documentElement.scrollTop > 240) {
                scope.sticky = true;
            }
            else
                scope.sticky = false;
        };
    };
    GantHeaderComponent.prototype.onChanged = function (data) {
        var curentEnd = data.end.split('.');
        var curentStart = data.start.split('.');
        this.dateRange = {
            beginDate: {
                year: curentStart[2],
                month: Number(curentStart[1]),
                day: curentStart[0]
            },
            endDate: {
                year: curentEnd[2],
                month: Number(curentEnd[1]),
                day: curentEnd[0]
            }
        };
    };
    /**
     * Change date range and put to LS.
     * @param event - Change date event
     * */
    GantHeaderComponent.prototype.changeDateRange = function (event) {
        var start = Object(__WEBPACK_IMPORTED_MODULE_3__calendar_utils_date_util__["b" /* formatDateByParam */])(event.beginEpoc, 'DD.MM.YYYY', 'X');
        var end = Object(__WEBPACK_IMPORTED_MODULE_3__calendar_utils_date_util__["b" /* formatDateByParam */])(event.endEpoc, 'DD.MM.YYYY', 'X');
        /** Get month days range. */
        this.dateConfig = __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_service__["a" /* CalendarService */].dateChange({ start: start, end: end });
        __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage_service__["a" /* LocalStorageService */].setDateConfig(this.dateConfig);
        __WEBPACK_IMPORTED_MODULE_4__shared_services_local_storage_service__["a" /* LocalStorageService */].setCurrentDate({ start: start, end: end });
        /** Update date Rx.JS. */
        this.calendarShare.setDatePeriod({ start: start, end: end });
    };
    return GantHeaderComponent;
}());
GantHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-gant-header',
        template: __webpack_require__("../../../../../src/app/header/gant-header/gant-header.component.html"),
        providers: [Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* forwardRef */])(function () { return __WEBPACK_IMPORTED_MODULE_1__calendar_calendar_service__["a" /* CalendarService */]; })]
    })
    /**
     * The class GantHeaderComponent.
     * */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _a || Object])
], GantHeaderComponent);

var _a;
//# sourceMappingURL=gant-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/general-header/general-header.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"{{ codeItLogo }}\">\n\n<button-component *ngIf=\"isLogin\" (click)=\"logout()\">Log out</button-component>\n<button-component >Save logs</button-component>\n<div class=\"legendWrap\" *ngIf=\"isLogin\">\n    <button-component class=\"legendMeta\" (click)=\"toogleLegendList()\">?</button-component>\n\n    <div class=\"dropLegend\" [hidden]=\"!menulist\">\n        <p class=\"title\" (click)=\"toogleLegendList()\">Legend</p>\n        <ul>\n            <li class=\"clearfix\">\n                <span class=\"legendColor\" style=\"background-color:#82c785\"></span>\n                Confirmed\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"legendColor\" style=\"background-color:#ffd741\"></span>\n                Expected\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"legendColor\" style=\"background-color:#90a4ae\"></span>\n                Vacation\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"legendColor\" style=\"background-color:#f8aa92\"></span>\n                Internal works\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"legendColor\" style=\"background-color:#84d2f6\"></span>\n                Estimates\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"legendColor\" style=\"background-color:#0079BF\"></span>\n                Sick leave\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"legendColor holidayLeg\"></span> Holidays\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"lines nowLeg\"></span>Current Date\n            </li>\n            <li class=\"clearfix\">\n                <span class=\"lines cursorLeg\"></span> Selected Date\n            </li>\n        </ul>\n    </div>\n</div>\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/header/general-header/general-header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GeneralHeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GeneralHeaderComponent = (function () {
    function GeneralHeaderComponent(router, authenticationService) {
        var _this = this;
        this.router = router;
        this.authenticationService = authenticationService;
        this.codeItLogo = '../assets/images/logo.png';
        this.menulist = false;
        /* check if user logged already */
        router.events.subscribe(function (event) {
            if (event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationStart */]) {
                if (localStorage.getItem('token')) {
                    _this.isLogin = true;
                }
                else {
                    _this.isLogin = false;
                }
            }
        });
    }
    GeneralHeaderComponent.prototype.ngOnInit = function () { };
    GeneralHeaderComponent.prototype.logout = function () {
        this.authenticationService.logout();
    };
    GeneralHeaderComponent.prototype.toogleLegendList = function () {
        this.menulist = !this.menulist;
    };
    return GeneralHeaderComponent;
}());
GeneralHeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'general-header',
        template: __webpack_require__("../../../../../src/app/header/general-header/general-header.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _b || Object])
], GeneralHeaderComponent);

var _a, _b;
//# sourceMappingURL=general-header.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"clearfix globalTableWrapp\">\n    <div class=\"clearfix gantHeaderWrapp\">\n        <app-gant-header></app-gant-header>\n    </div>\n    <div class=\"mainTableWrapper col-md-12 \">\n        <div class=\"gantTable\">\n            <app-users-list></app-users-list>\n        </div>\n    </div>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__create_project_popup_popup_api_service__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__groups_service_groups_service__ = __webpack_require__("../../../../../src/app/groups/service/groups.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__plan_service_plan_service__ = __webpack_require__("../../../../../src/app/plan/service/plan.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var HomeComponent = (function () {
    function HomeComponent(planService, socket, projectsService, groupsService, calendarShare) {
        var _this = this;
        this.planService = planService;
        this.socket = socket;
        this.projectsService = projectsService;
        this.groupsService = groupsService;
        this.calendarShare = calendarShare;
        this.loading = true;
        var token = localStorage.getItem('token');
        this.socket.connect(token);
        this.planService.getUserBusy().distinctUntilChanged().subscribe(function (data) {
            _this.loading = false;
            _this.socket.emitPlan(data);
        });
        this.projectsService.getProjects().distinctUntilChanged().subscribe(function (data) {
            _this.projectsService.emitList(data);
        });
        this.groupsService.getGroupsData().distinctUntilChanged().subscribe(function (response) {
            groupsService.groups = response;
        });
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.groupsService.emitGroupsData();
        this.calendarShare.getDatePeriod().subscribe(function (resp) {
            if (!resp) {
                return;
            }
            _this.start = Number(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(resp.date.start, 'X'));
            _this.end = Number(Object(__WEBPACK_IMPORTED_MODULE_5__header_calendar_utils_date_util__["b" /* formatDateByParam */])(resp.date.end, 'X'));
            _this.planService.emitUsersBusy({
                time_from: _this.start,
                time_to: _this.end
            });
            _this.projectsService.emitProjectData();
        });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'home-app',
        template: __webpack_require__("../../../../../src/app/home/home.component.html"),
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__plan_service_plan_service__["a" /* PlanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__plan_service_plan_service__["a" /* PlanService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__create_project_popup_popup_api_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__create_project_popup_popup_api_service__["a" /* ProjectsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__groups_service_groups_service__["a" /* GroupsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__groups_service_groups_service__["a" /* GroupsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/home/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__home_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/index.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony namespace reexport (by used) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__login_component__["a"]; });

//# sourceMappingURL=index.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".noticeTxt {\n    margin: 15px 0;\n    font-style: italic;\n    opacity: 0.8;\n}\n\n#login {\n    width: auto;\n    min-width: 120px;\n    text-align: center;\n    background: #801f0f;\n    border-color: #801f0f;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    padding: 5px;\n    display: inline-block;\n    border-radius: 3px;\n    font-size: 12px;\n}\n\ninput {\n    border: 0 solid transparent;\n    border-bottom: 1px solid #bdbbba;\n    border-radius: 0;\n    background: #fff;\n    width: 100%;\n    height: 30px;\n    box-shadow: 0 1px 0 0 rgba(208, 206, 205, 1);\n}\n\ninput:focus {\n    outline: none;\n    box-shadow: none;\n    border-bottom: 1px solid #bdbbba;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-12\" id=\"loginForm\">\n    <div class=\"col-md-10 col-md-offset-2\">\n        <h1>Login</h1>\n        <div class=\"noticeTxt\">\n            <p>You do not need any additional credentials to login. Please, use your login and password the same as for Redmine</p>\n        </div>\n    </div>\n    <form name=\"form\" class=\"col-md-3 col-md-offset-2\" (ngSubmit)=\"loginF.valid && login()\" #loginF=\"ngForm\" novalidate>\n        <div class=\"form-group\" ngModelGroup=\"login\" [ngClass]=\"{ 'has-error': loginF.submitted && !username.valid,  'has-success': username.valid && (username.dirty || username.touched) }\">\n            <label for=\"username\">Login</label>\n            <input id=\"email\"  class=\"form-control\" maxlength=\"60\" minlength=\"3\" name=\"username\" [(ngModel)]=\"user.username\" #username=\"ngModel\" required />\n\n            <show-errors [control]=\"username\" [form]=\"loginF\"></show-errors>\n        </div>\n        <div class=\"form-group\" ngModelGroup=\"password\" [ngClass]=\"{ 'has-error': loginF.submitted && !password.valid,  'has-success': password.valid && (password.dirty || password.touched)  }\">\n            <label for=\"password\">Password</label>\n            <input id=\"pass\" type=\"password\" class=\"form-control\" maxlength=\"30\" minlength=\"8\"  name=\"password\" [(ngModel)]=\"user.password\" #password=\"ngModel\" required />\n            <show-errors [form]=\"loginF\" [control]=\"password\"></show-errors>\n\n        </div>\n        <div class=\"form-group\">\n            <button id=\"login\" [disabled]=\"loading\"  class=\"btn btn-primary\" >Log in</button>\n            <img *ngIf=\"loading\" src=\"data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==\" />\n        </div>\n    </form>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_index__ = __webpack_require__("../../../../../src/app/_services/index.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(route, router, authenticationService, alertService) {
        this.route = route;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.user = {};
        this.loading = false;
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.user.username, this.user.password)
            .subscribe(function (data) {
            _this.router.navigate([_this.returnUrl]);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        selector: 'login',
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["b" /* AuthenticationService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_index__["a" /* AlertService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/plan/edit-plan-dialog.component/edit-plan-dialog.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__create_project_popup_project_interface__ = __webpack_require__("../../../../../src/app/create-project-popup/project.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_project_popup_popup_api_service__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__ = __webpack_require__("../../../../rxjs/add/operator/startWith.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_startWith__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_services_projects_data_share_service__ = __webpack_require__("../../../../../src/app/shared/services/projects-data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_moment_moment__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












var EditPlanComponent = (function () {
    function EditPlanComponent(dataShare, dialogRef, data, socket, projectsService) {
        this.dataShare = dataShare;
        this.dialogRef = dialogRef;
        this.data = data;
        this.socket = socket;
        this.projectsService = projectsService;
        this.keypresValues = '';
        this.dateInput = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
        var planStart = Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.data.start_time, 'YYYY-MM-DD', 'X');
        var planEnd = Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.data.end_time, 'YYYY-MM-DD', 'X');
        this.usrData = this.data.user;
        this.planModel = {
            start_time: new Date(planStart),
            end_time: new Date(planEnd),
            approved: true,
            percent: this.data.percent,
            project_id: this.data.project_id
        };
        planEnd = Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(planEnd, 'X', 'YYYY-MM-DD');
        this.choosePlan = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormControl */]({
            id: this.data.project_id,
            name: this.data.project
        });
    }
    EditPlanComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.projects = this.projectsService.list;
        var div = document.createElement('div');
        this.connection = this.dataShare.getPlan().subscribe(function (data) {
            if (data.errors) {
                div.className = "alert alert-danger successMsg";
                div.innerHTML = "Error";
            }
            else {
                div.className = "alert alert-success successMsg";
                div.innerHTML = "Plan is changed";
            }
            document.body.appendChild(div);
            setTimeout(function (data) {
                div.remove();
            }, 5000);
        });
        this.filteredProjects = this.choosePlan.valueChanges
            .startWith(null)
            .map(function (val) { return val ? _this.filter(val) : _this.projects.slice(); });
    };
    EditPlanComponent.prototype.filter = function (val) {
        if (val.toLowerCase) {
            return this.projects.filter(function (project) {
                return project.name.toLowerCase().indexOf(val.toLowerCase()) === 0;
            });
        }
        else {
            return this.projects.filter(function (project) {
                return project.name.toLowerCase().indexOf(val) === 0;
            });
        }
    };
    EditPlanComponent.prototype.displayFn = function (project) {
        // I want to get the full object and display the name
        if (!project)
            return '';
        return project.name;
    };
    EditPlanComponent.prototype.onTitleChange = function () {
        var dateStr = __WEBPACK_IMPORTED_MODULE_11_moment_moment__(this.planModel.end_time).format('YYYY,MM,DD').split(",").map(function (item) {
            return parseInt(item, 10);
        });
    };
    EditPlanComponent.prototype.changeStart = function () {
        if (this.planModel.start_time.getTime() > this.planModel.end_time.getTime()) {
            this.planModel.end_time = this.planModel.start_time;
        }
    };
    EditPlanComponent.prototype.changeEnd = function () {
        if (this.planModel.start_time.getTime() > this.planModel.end_time.getTime()) {
            this.planModel.start_time = this.planModel.end_time;
        }
    };
    EditPlanComponent.prototype.selectProject = function (event, item) {
        if (event.source.selected) {
            this.planModel.project_id = item.id;
        }
    };
    EditPlanComponent.prototype.keyPress = function (event) {
        var pattern = /^(100|[0-9]|[0-9][0-9])$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8) {
            this.keypresValues += inputChar;
        }
        else {
            this.keypresValues = this.keypresValues.slice(0, -1);
        }
        var pass = pattern.test(this.keypresValues);
        if (event.keyCode != 8 && !pattern.test(this.keypresValues)) {
            this.keypresValues = this.keypresValues.slice(0, -1);
            event.preventDefault();
        }
    };
    EditPlanComponent.prototype.ngOnDestroy = function () {
        this.connection.unsubscribe();
    };
    EditPlanComponent.prototype.saveUpdate = function () {
        this.dialogRef.close();
        if (!this.planModel.approved)
            this.planModel.approved = 0;
        this.planModel.end_time = Number(Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.planModel.end_time, 'X'));
        this.planModel.start_time = Number(Object(__WEBPACK_IMPORTED_MODULE_10__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.planModel.start_time, 'X'));
        this.dataShare.emitPlanUpdate(__assign({}, this.planModel, { id: this.data.id, planning_updated: Number(__WEBPACK_IMPORTED_MODULE_11_moment_moment__().format('X')) }));
        this.reset();
    };
    EditPlanComponent.prototype.reset = function () {
        for (var value in this.planModel) {
            if (this.planModel.hasOwnProperty(value)) {
                this.planModel[value] = null;
            }
        }
    };
    return EditPlanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], EditPlanComponent.prototype, "dateInput", void 0);
EditPlanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'edit-plan-dialog',
        template: __webpack_require__("../../../../../src/app/plan/edit-plan-dialog.component/popup-dialog/edit-popup-dialog.component.html"),
        styles: [__webpack_require__("../../../../../src/app/create-project-popup/popup-dialog/create-project-popup-dialog.component.css")],
        providers: [
            { provide: 'IProject', useValue: __WEBPACK_IMPORTED_MODULE_1__create_project_popup_project_interface__["a" /* ProjectClass */] }
        ]
    }),
    __param(2, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_7__angular_material__["a" /* MD_DIALOG_DATA */])),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_8__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDialogRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_material__["h" /* MdDialogRef */]) === "function" && _b || Object, Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_9__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__create_project_popup_popup_api_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__create_project_popup_popup_api_service__["a" /* ProjectsService */]) === "function" && _d || Object])
], EditPlanComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=edit-plan-dialog.component.js.map

/***/ }),

/***/ "../../../../../src/app/plan/edit-plan-dialog.component/popup-dialog/edit-popup-dialog.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"editPlainingPopup\">\n    <div class=\"modalHeader ng-scope\">\n        <p class=\"popupHeader ng-binding\">Edit plan</p>\n        <button [md-dialog-close]=\"true\" class=\"closePopup\" type=\"button\">×</button>\n         <p class=\"ng-binding\">for {{usrData.lastname}} {{usrData.firstname}}</p>\n    </div>\n   <div class=\"modalBody ng-scope\" tabindex=\"0\" >\n        <form (ngSubmit)=\"editPlan.valid && planModel.project_id && saveUpdate(usrData.id)\"   #editPlan=\"ngForm\" novalidate >\n\n            <div class=\"formWrapp clearfix\">\n                <div class=\"formRow clearfix\">\n                    <div class=\"thirdWidthBlock formCol\">\n                        <label>Project</label>\n                    </div>\n                    <div class=\"form-group twothirdWidthBlock formCol\">\n\n                        <md-form-field class=\"example-full-width\">\n                            <input type=\"text\" md-require-match=\"true\" \n                                   placeholder=\"Select Project\"\n                                   aria-label=\"Number\" mdInput [formControl]=\"choosePlan\"\n                                   [mdAutocomplete]=\"auto\"\n                                   name='project'\n                                   required>\n                                   <md-autocomplete #auto=\"mdAutocomplete\" [displayWith]=\"displayFn.bind(this)\">\n                                <md-option  (onSelectionChange)=\"selectProject($event, project)\"  *ngFor=\"let project of filteredProjects | async\" [value]=\"project\">\n                                    {{ project.name }}\n                            </md-option>\n                        </md-autocomplete>\n                    </md-form-field>\n                    <div [hidden]=\"!editPlan.submitted || planModel.project_id\" class=\"error clearfix\">\n                        <small class=\"text-danger\">This value is required</small>\n\n                    </div>      \n                </div>\n            </div>\n            <div class=\"formRow clearfix form-group\">\n                <div class=\"thirdWidthBlock date formCol\">\n                    <label>Start date</label>\n                </div>\n                <md-form-field required class=\"twothirdWidthBlock formCol\">\n                    <input\n                        mdInput\n                        name=\"start_time\"\n                        #start_time=\"ngModel\"\n                        [mdDatepicker]=\"startDate\"\n                        date=\"true\"\n                        [(ngModel)]=\"planModel.start_time\"\n                        (ngModelChange)=\"changeStart()\"\n                        class=\"dateField\"\n                        placeholder=\"Choose a date\">\n                    <md-datepicker-toggle mdSuffix [for]=\"startDate\"></md-datepicker-toggle>\n                    <md-datepicker [startView]=\"dateStart\" #startDate></md-datepicker>\n                </md-form-field>\n            </div>\n            <div class=\"formRow clearfix form-group\">\n                <div class=\"thirdWidthBlock date formCol\">\n                    <label>End date</label>\n                </div>\n                <md-form-field class=\"twothirdWidthBlock formCol\">\n                    <input name=\"end_time\"\n                           #end_time=\"ngModel\"\n                           mdInput [mdDatepicker]=\"endDate\"\n                           placeholder=\"Choose a date\"\n                           [(ngModel)]=\"planModel.end_time\"\n                           (dateChange)=\"onTitleChange()\"\n                           date=\"true\"\n                           class=\"dateField\"\n                           (ngModelChange)=\"changeEnd()\"\n                          \n                           >\n                           <md-datepicker-toggle mdSuffix [for]=\"endDate\"></md-datepicker-toggle>\n                    <md-datepicker #endDate></md-datepicker>\n                </md-form-field>\n            </div>\n            <div class=\"formRow clearfix \">\n                <div class=\"thirdWidthBlock formCol\">\n                    <label>Approved</label>\n                </div>\n                <div class=\"twothirdWidthBlock formCol form-group\">\n                    <div class=\" flRight\">\n                        <md-checkbox [checked]=\"true\" id=\"approved\" #approved=\"ngModel\" name=\"approved\"\n                              [(ngModel)]=\"planModel.approved\"></md-checkbox>\n                    </div>\n                </div>\n            </div>\n            <div class=\"formRow clearfix\">\n                <div class=\"thirdWidthBlock formCol\">\n                    <label>Busy time</label>\n                </div>\n                <div class=\"twothirdWidthBlock formCol\" >\n                    <div class=\"clearfix\">\n                        <span class=\"label flRight\">%</span>\n                        <input class=\"flRight smallInp\" type=\"text\" \n                               (keypress)=\"keyPress($event)\"  \n                               max=\"100\" min=\"1\" value=\"0\" \n                               [(ngModel)]=\"planModel.percent\"\n                               name=\"percent\" #percent=\"ngModel\" required\n                               >\n\n                        <div [hidden]=\"percent.valid || (percent.pristine && !editPlan.submitted)\" class=\"error clearfix\">\n                            <small class=\"text-danger\">This value is required</small>\n                        </div>\n                    </div>\n\n                </div>\n            </div>\n            <div class=\"formRow clearfix\">\n                <div class=\"thirdWidthBlock formCol\"><label>Note</label></div>\n            </div>\n\n            <div class=\"formRow clearfix\">\n                <textarea [(ngModel)]=\"planModel.note\"\n                    maxlength=\"250\"\n                    name=\"note\"\n                    class=\"ng-pristine\"\n                    ></textarea>\n                <p class=\"tooltip flLeft\">press Ctrl + Enter for new line</p>\n                <p class=\"tooltip ng-binding\">250 characters left</p>\n            </div>\n        </div>\n\n        <div class=\"formRow clearfix btnsWrapp\">\n            <button class=\"button baloonBtn\" [md-dialog-close]=\"true\">Cancel</button>\n            <button class=\"button red flRight ng-binding\"  type=\"submit\">Save</button>\n        </div>\n    </form>\n</div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/plan/plan-single.component.html":
/***/ (function(module, exports) {

module.exports = "<svg\n    [attr.x]='startDateRange'\n    [attr.width]='plan.length'\n    class='projectInfoInline'\n    [attr.id]='svgId'\n    (contextmenu)=\"contextmenu($event)\"\n    >\n</svg>\n\n"

/***/ }),

/***/ "../../../../../src/app/plan/plan-single.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__context_menu_service_contextMenuDialog_service__ = __webpack_require__("../../../../../src/app/context-menu/service/contextMenuDialog.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__edit_plan_dialog_component_edit_plan_dialog_component__ = __webpack_require__("../../../../../src/app/plan/edit-plan-dialog.component/edit-plan-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_project_popup_user_interface__ = __webpack_require__("../../../../../src/app/create-project-popup/user.interface.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__create_project_popup_user_interface___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__create_project_popup_user_interface__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__canvas_row_canvas_row_component__ = __webpack_require__("../../../../../src/app/canvas-row/canvas-row.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_services_projects_data_share_service__ = __webpack_require__("../../../../../src/app/shared/services/projects-data-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_svg_js__ = __webpack_require__("../../../../svg.js/dist/svg.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_svg_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_svg_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_moment_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_moment_moment__);
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};










var PlanComponent = (function () {
    /**
   * Create a UserComponent.
   * @param usersService - The service for work with users.
   * @param groupsService - The service for work with groups.
   * @param calendarShare - The service for data sharing with Calendar data.
   * @param cdRef - For fix bug with Observer;
   */
    function PlanComponent(dialog, elementRef, contextDialogs, dataShare, parent) {
        this.dialog = dialog;
        this.elementRef = elementRef;
        this.contextDialogs = contextDialogs;
        this.dataShare = dataShare;
        this.parent = parent;
        /** The list of all groups with users */
        //    public userGroups: IGroupsList;
        this.isActive = false;
        this.isResize = false;
        this.mouseUpClick = false;
        this.timer = 0;
    }
    PlanComponent.prototype.ngOnInit = function () {
        var planStart, planEnd, pWidth;
        this.adminRole = localStorage.getItem('admin');
        /* Selected date's range */
        this.start = Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.startRange, 'YYYY-MM-DD', 'X');
        var end = Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.endRange, 'YYYY-MM-DD', 'X');
        /* Plan date range */
        planStart = __WEBPACK_IMPORTED_MODULE_9_moment_moment__(this.plan.start_time, 'X');
        planEnd = __WEBPACK_IMPORTED_MODULE_9_moment_moment__(this.plan.end_time, 'X');
        var sumWidth = (planEnd.diff(end, 'days') + 1) * this.fieldWidth;
        this.startDateRange = planStart.diff(this.start, 'days') * this.fieldWidth;
        if (this.startDateRange < 0) {
            pWidth = planEnd.diff(this.start, 'days') + 1;
            this.startDateRange = 0;
        }
        else {
            pWidth = planEnd.diff(planStart, 'days') + 1;
        }
        this.plan.length = pWidth * this.fieldWidth;
        if (sumWidth > 0) {
            this.plan.length = this.plan.length - sumWidth + this.fieldWidth;
        }
        this.svgId = 'svg' + String(this.plan.id);
        this.project_name = this.plan.project;
        this.dataShare.getPlan().subscribe(function (data) {
            if (data.errors) {
                console.log(data);
            }
        });
    };
    PlanComponent.prototype.ngAfterViewInit = function () {
        this.draw = __WEBPACK_IMPORTED_MODULE_8_svg_js__(this.svgId);
        var scope = this;
        var planColor;
        var planColorBorder;
        var layout, cropText, clip, background;
        scope.mouseUpLisener = function (e) {
            scope.isActive = false;
            scope.draw.remove();
            scope.shadowSvg.remove();
            var mainSvg = e.target.closest('.mainSvg');
            var id;
            if (mainSvg != null) {
                id = Number(mainSvg.getAttribute('id'));
            }
            scope.dataShare.emitPlanUpdate(__assign({}, scope.plan, { user_id: id, planning_updated: Number(__WEBPACK_IMPORTED_MODULE_9_moment_moment__().format('X')) }));
            window.removeEventListener('mouseup', scope.mouseUpLisener, false);
            window.removeEventListener('mousemove', scope.mouseMoveLisener, false);
        };
        scope.mouseMoveLisener = function (e) {
            window.removeEventListener('mousedown', scope.mouseDownListener, false);
            scope.draggble(e, scope.shadowSvg);
        };
        switch (this.plan.approved) {
            case 1: {
                /*approved plan */
                planColor = 'rgb(205, 233, 206)';
                planColorBorder = 'rgb(103, 199, 133)';
                switch (this.project_name) {
                    case 'Vacation': {
                        /*approved plan */
                        planColor = 'rgba(255, 255, 255, 0.6)';
                        planColorBorder = '#90a4ae';
                        break;
                    }
                    case 'Internal works': {
                        /* non approved plan*/
                        planColor = 'rgb(252, 221, 211)';
                        planColorBorder = 'rgb(248, 170, 146)';
                        break;
                    }
                    case 'Sick Leave': {
                        /* non approved plan*/
                        planColor = 'rgba(255, 255, 255, 0.6)';
                        planColorBorder = '#0079BF';
                        break;
                    }
                }
                break;
            }
            case 0: {
                /* non approved plan*/
                planColor = 'rgb(252, 221, 211)';
                planColorBorder = 'rgb(248, 170, 146)';
                break;
            }
            default: {
                break;
            }
        }
        /* Draw plan*/
        layout = this.draw.rect(this.plan.length, 25).attr({
            fill: planColorBorder,
        }).addClass('bglayout').radius(3).move(0, 5);
        cropText = this.draw.rect(this.plan.length - 50, 25).move(5, 5);
        background = this.draw.rect(this.plan.length - 10, 25).attr({
            fill: planColor
        }).style({
            'cursor': 'pointer'
        }).move(5, 5);
        this.draw.text(String(this.plan.percent + '%')).attr({
            fill: planColorBorder
        }).font({
            anchor: 'end'
        }).move(this.plan.length - 10, 10);
        clip = this.draw.clip().add(cropText);
        this.draw.text(String(this.project_name)).attr({
            fill: '#333'
        }).move(10, 10).clipWith(clip);
        if (this.adminRole) {
            layout.on('mousedown', function (e) {
                var keycode = (e.keyCode ? e.keyCode : e.which);
                if (keycode === 3) {
                    return;
                }
                scope.resize(e, this);
            });
            this.mouseDownListener = function (e) {
                var keycode = (e.keyCode ? e.keyCode : e.which);
                if (keycode === 3) {
                    return;
                }
                var event = e;
                var elem = this;
                scope.timeoutClick = setTimeout(function (e) {
                    scope.timer++;
                    scope.replaceEl(event, elem);
                    elem.style({
                        'opacity': '0.5'
                    });
                }, 600);
                document.body.onmouseup = function () {
                    if (scope.timer == 0) {
                        scope.editPlan();
                        clearTimeout(scope.timeoutClick);
                    }
                };
            };
            this.draw.on('mousedown', this.mouseDownListener, false);
        }
    };
    PlanComponent.prototype.replaceEl = function (e, el) {
        e.stopPropagation();
        var scope = this;
        var parentEl, elem, left;
        scope.isActive = true;
        parentEl = scope.parent.elementRef.nativeElement;
        elem = el.node.innerHTML;
        this.diffentCoord = e.clientX - (el.doc().x() + 307);
        left = e.clientY - 20;
        parentEl.insertAdjacentHTML('beforeend', "<svg id='copySvg' x='" + this.diffentCoord + "' width='" + el.width() + "' height='34'>" + elem + '</svg>');
        scope.shadowSvg = __WEBPACK_IMPORTED_MODULE_8_svg_js__('copySvg');
        scope.shadowSvg.style({
            'position': 'fixed',
            'top': left + 'px',
            'left': e.clientX - this.diffentCoord + 'px',
            'z-index': 5,
        });
        window.addEventListener('mousemove', scope.mouseMoveLisener, false);
        window.addEventListener('mouseup', scope.mouseUpLisener, false);
    };
    PlanComponent.prototype.draggble = function (e, el) {
        if (!this.isActive) {
            return;
        }
        var y = e.clientY;
        el.style({
            'top': y - 20 + 'px',
            'left': e.clientX - this.diffentCoord + 'px',
        });
    };
    PlanComponent.prototype.editPlan = function () {
        this.timer = 5;
        this.isActive = false;
        this.dialog.open(__WEBPACK_IMPORTED_MODULE_3__edit_plan_dialog_component_edit_plan_dialog_component__["a" /* EditPlanComponent */], {
            height: '530px',
            width: '360px',
            data: __assign({ user: this.user }, this.plan)
        });
    };
    PlanComponent.prototype.contextmenu = function (e) {
        // Stop the context menu
        e.preventDefault();
        var startPosition = Math.floor((e.clientX - 305) / this.fieldWidth) * this.fieldWidth;
        var collapseDay = Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_9_moment_moment__(Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.start, 'YYYY-MM-DD', 'X'), 'YYYY-MM-D').add(startPosition / this.fieldWidth, 'day'), 'YYYY-MM-DD', 'X');
        this.contextDialogs
            .deletePlanDialog(this.plan, collapseDay)
            .subscribe();
    };
    PlanComponent.prototype.mouseMove = function (e, elem, direction, x, widthOld) {
        var scope = this;
        this.check_direction = function (e) {
            if (!scope.isActive) {
                return;
            }
            var marginBetween = scope.fieldWidth;
            var endX = e.clientX - 310 - elem.doc().x();
            var oldWidth = widthOld;
            var newWidth;
            var newX;
            var diff;
            var siblings = elem.siblings();
            if (direction == 'right') {
                newWidth = Math.round((Math.trunc(endX / marginBetween) + 1) * marginBetween * 100) / 100;
            }
            else {
                endX = e.clientX - 310;
                var widthX = Math.round((Math.trunc(endX / marginBetween) + 0) * marginBetween * 100) / 100;
                if (endX > x) {
                    diff = widthX - x;
                    newWidth = oldWidth - diff;
                    newX = x + diff;
                }
                else {
                    diff = x - widthX;
                    newWidth = oldWidth + diff;
                    newX = x - diff;
                }
                elem.doc().attr({
                    x: newX,
                });
            }
            scope.plan.length = newWidth;
            elem.attr({
                width: newWidth,
            }).next().move(scope.plan.length - 10, 10);
            siblings[2].attr({
                width: scope.plan.length - 10
            }).style({ cursor: 'col-resize' });
        };
        window.addEventListener('mousemove', this.check_direction);
    };
    PlanComponent.prototype.resize = function (e, elem) {
        e.stopPropagation();
        var scope = this;
        var x = elem.doc().x();
        var widthOld = elem.doc().width();
        scope.isActive = true;
        var mousePoint = e.clientX - 310;
        if (mousePoint >= (x - 11) && mousePoint <= (x + 15)) {
            scope.mouseMove(e, elem, 'left', x, widthOld);
        }
        else {
            if (!scope.isActive) {
                return;
            }
            scope.mouseMove(e, elem, 'right', x, widthOld);
        }
        window.addEventListener('mouseup', function (e) {
            if (!scope.isActive) {
                return;
            }
            scope.mouseUp(e, elem);
        }, false);
    };
    PlanComponent.prototype.mouseUp = function (e, elem) {
        this.isActive = false;
        window.removeEventListener('mousemove', this.check_direction);
        var start = __WEBPACK_IMPORTED_MODULE_9_moment_moment__(Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.startRange, 'YYYY-MM-DD', 'X'));
        var end = __WEBPACK_IMPORTED_MODULE_9_moment_moment__(Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(this.endRange, 'YYYY-MM-DD', 'X'));
        var startPosition = elem.doc().x();
        var width = elem.doc().width();
        var startDay = Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_9_moment_moment__(Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(start, 'YYYY-MM-DD', 'X'), 'YYYY-MM-D').add(Math.round(startPosition / this.fieldWidth), 'day'), 'X');
        var endDay = Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(__WEBPACK_IMPORTED_MODULE_9_moment_moment__(Object(__WEBPACK_IMPORTED_MODULE_1__header_calendar_utils_date_util__["b" /* formatDateByParam */])(startDay, 'YYYY-MM-D', 'X'), 'YYYY-MM-D').add(Math.round(width / this.fieldWidth) - 1, 'day'), 'X');
        this.dataShare.emitPlanUpdate({
            start_time: Number(startDay),
            end_time: Number(endDay),
            id: this.plan.id,
            planning_updated: Number(__WEBPACK_IMPORTED_MODULE_9_moment_moment__().format('X'))
        });
    };
    return PlanComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PlanComponent.prototype, "plan", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__create_project_popup_user_interface__["IUser"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__create_project_popup_user_interface__["IUser"]) === "function" && _a || Object)
], PlanComponent.prototype, "user", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PlanComponent.prototype, "startRange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PlanComponent.prototype, "endRange", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Object)
], PlanComponent.prototype, "fieldWidth", void 0);
PlanComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: '[plan-single]',
        template: __webpack_require__("../../../../../src/app/plan/plan-single.component.html")
    })
    /** Class representing a Users Component */
    ,
    __param(4, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Inject */])(__WEBPACK_IMPORTED_MODULE_6__canvas_row_canvas_row_component__["a" /* CanvasRowComponent */])),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_material__["f" /* MdDialog */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__context_menu_service_contextMenuDialog_service__["a" /* ContextDialogsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__context_menu_service_contextMenuDialog_service__["a" /* ContextDialogsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_7__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_services_projects_data_share_service__["a" /* ProjectsDataShareService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__canvas_row_canvas_row_component__["a" /* CanvasRowComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__canvas_row_canvas_row_component__["a" /* CanvasRowComponent */]) === "function" && _f || Object])
], PlanComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=plan-single.component.js.map

/***/ }),

/***/ "../../../../../src/app/plan/service/editPlanDialog.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditDialogsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__edit_plan_dialog_component_edit_plan_dialog_component__ = __webpack_require__("../../../../../src/app/plan/edit-plan-dialog.component/edit-plan-dialog.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EditDialogsService = (function () {
    function EditDialogsService(dialog) {
        this.dialog = dialog;
    }
    EditDialogsService.prototype.editPlan = function (data) {
        var dialogRef;
        dialogRef = this.dialog.open(__WEBPACK_IMPORTED_MODULE_0__edit_plan_dialog_component_edit_plan_dialog_component__["a" /* EditPlanComponent */], { data: data, });
        return dialogRef.afterClosed();
    };
    return EditDialogsService;
}());
EditDialogsService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MdDialog */]) === "function" && _a || Object])
], EditDialogsService);

var _a;
//# sourceMappingURL=editPlanDialog.service.js.map

/***/ }),

/***/ "../../../../../src/app/plan/service/plan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







/** Class UserService */
var PlanService = (function () {
    function PlanService(socket) {
        this.socket = socket;
        this.subject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.planSubject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    PlanService.prototype.emitUsersBusy = function (time) {
        var _this = this;
        this.socket.emit('plan', time).subscribe(function (data) {
            _this.subject.next(data);
        }, function (error) {
            console.log('Error', error);
        }, function () {
            //                console.log('complete');
        });
    };
    PlanService.prototype.emitPlanUpdate = function (planObj) {
        var _this = this;
        this.socket.emit('plan/update', planObj).subscribe(function (data) {
            _this.subject.next(data);
        }, function (error) {
            console.log('Error', error);
        }, function () {
            //                console.log('complete');
        });
    };
    /**
    * Get all projects
    * */
    PlanService.prototype.getUserBusy = function () {
        return this.subject.asObservable();
    };
    /* Get singl plan info*/
    PlanService.prototype.getPlan = function () {
        return this.planSubject.asObservable();
    };
    return PlanService;
}());
PlanService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _a || Object])
], PlanService);

var _a;
//# sourceMappingURL=plan.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/calendar-date-share.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CalendarDateShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CalendarDateShareService = (function () {
    function CalendarDateShareService() {
        /** Start and End Date. */
        this.datePeriod = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        /** Width one field. */
        this.fieldWidth = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    /**
     * Set and get Start/End date.
     * @param date - Obj start and end date
     * */
    CalendarDateShareService.prototype.setDatePeriod = function (date) {
        this.datePeriod.next({ date: date });
    };
    CalendarDateShareService.prototype.getDatePeriod = function () {
        return this.datePeriod.asObservable();
    };
    /**
     * Set and get field width.
     * @param width - Field width.
     * */
    CalendarDateShareService.prototype.setFieldWidth = function (width) {
        this.fieldWidth.next(width);
    };
    CalendarDateShareService.prototype.getFieldWidth = function () {
        return this.fieldWidth.asObservable();
    };
    return CalendarDateShareService;
}());
CalendarDateShareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], CalendarDateShareService);

//# sourceMappingURL=calendar-date-share.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/local-storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocalStorageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LocalStorageService = (function () {
    function LocalStorageService() {
    }
    LocalStorageService.checkInit = function () {
        var currentDate = localStorage.getItem('currentDate');
        var dateConfig = localStorage.getItem('dateConfig');
        return !(!currentDate || !dateConfig);
    };
    LocalStorageService.setCurrentDate = function (date) {
        localStorage.setItem('currentDate', JSON.stringify(date));
    };
    LocalStorageService.getCurrentDate = function () {
        var currentDate = localStorage.getItem('currentDate');
        return JSON.parse(currentDate);
    };
    LocalStorageService.setDateConfig = function (date) {
        localStorage.setItem('dateConfig', JSON.stringify(date));
    };
    LocalStorageService.getDateConfig = function () {
        var dateConfig = localStorage.getItem('dateConfig');
        return JSON.parse(dateConfig);
    };
    return LocalStorageService;
}());
LocalStorageService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], LocalStorageService);

//# sourceMappingURL=local-storage.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/services/projects-data-share.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsDataShareService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ProjectsDataShareService = (function () {
    function ProjectsDataShareService(socketService) {
        this.socketService = socketService;
        this.subject = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
        this.planDeleteObj = new __WEBPACK_IMPORTED_MODULE_5_rxjs_Subject__["Subject"]();
    }
    ProjectsDataShareService.prototype.emitPlanCreate = function (plan) {
        var _this = this;
        this.socketService.emit('plan/create', plan).subscribe(function (data) {
            _this.subject.next(data);
        }, function (error) {
            console.log('Error', error);
        }, function () {
            //                console.log('complete');
        });
    };
    ProjectsDataShareService.prototype.emitPlanUpdate = function (plan) {
        var _this = this;
        this.socketService.emit('plan/update', plan).subscribe(function (data) {
            _this.subject.next(data);
        }, function (error) {
            console.log('Error', error);
        }, function () {
            //                console.log('complete');
        });
    };
    ProjectsDataShareService.prototype.setCopyPlan = function (value) {
        this.planCopy = value;
    };
    ProjectsDataShareService.prototype.getPlan = function () {
        return this.subject.asObservable();
    };
    ProjectsDataShareService.prototype.getCopyPlan = function () {
        return this.planCopy.asObservable();
    };
    ProjectsDataShareService.prototype.planDelete = function (id) {
        var _this = this;
        this.socketService.emit('plan/delete', id).subscribe(function (data) {
            _this.planDeleteObj.next(data);
        }, function (error) {
            console.log('Error', error);
        }, function () {
            console.log('complete');
        });
    };
    ProjectsDataShareService.prototype.errorDelete = function () {
        return this.planDeleteObj.asObservable();
    };
    return ProjectsDataShareService;
}());
ProjectsDataShareService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__socket_client_service__["a" /* SocketClientService */]) === "function" && _a || Object])
], ProjectsDataShareService);

var _a;
//# sourceMappingURL=projects-data-share.service.js.map

/***/ }),

/***/ "../../../../../src/app/shared/socket-client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client__ = __webpack_require__("../../../../socket.io-client/lib/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_socket_io_client__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SocketClientService = (function () {
    function SocketClientService(router) {
        var _this = this;
        this.router = router;
        this.subject = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        this.host = location.hostname + (location.port ? ':' + location.port : '');
        this.planList = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
        if (!this.token) {
            this.token = localStorage.getItem('token');
        }
        this.socket = __WEBPACK_IMPORTED_MODULE_2_socket_io_client__(this.host, { 'query': 'token=' + this.token });
        this.socket.on("connect", function () { _this.connected(); });
        this.socket.on("disconnect", function () { return _this.disconnected(); });
        this.socket.on("error", function (error) {
            if (error) {
                if (error.type) {
                    _this.router.navigate(['/login']);
                }
            }
        });
        this.socket.on('project', function (data) { });
        this.socket.on('group', function (data) { });
        this.socket.on('plan', function (data) {
            _this.planList.next(data);
        });
    }
    SocketClientService.prototype.emitPlan = function (value) {
        this.planList.next(value);
    };
    SocketClientService.prototype.getList = function () {
        return this.planList.asObservable();
    };
    SocketClientService.prototype.connect = function (token) {
        this.token = token;
        this.socket.connect();
    };
    SocketClientService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketClientService.prototype.emit = function (chanel, data) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.emit(chanel, data, function (data) {
                if (data) {
                    // Success
                    observer.next(data);
                }
                else {
                    // error
                    observer.error(data);
                }
                observer.complete();
            });
        });
    };
    SocketClientService.prototype.on = function (event_name) {
        var _this = this;
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"](function (observer) {
            _this.socket.off(event_name);
            _this.socket.on(event_name, function (data) {
                observer.next(data);
            });
        });
    };
    SocketClientService.prototype.connected = function () {
        console.log('Connected');
    };
    SocketClientService.prototype.disconnected = function () {
        console.log('Disconnected');
    };
    return SocketClientService;
}());
SocketClientService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_router__["c" /* Router */]) === "function" && _a || Object])
], SocketClientService);

var _a;
//# sourceMappingURL=socket-client.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/service/users.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/** Class UserService */
var UsersService = (function () {
    function UsersService(socket) {
        this.socket = socket;
        this.subject = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["Subject"]();
        this.socket.on('user');
    }
    UsersService.prototype.emitUsersData = function () {
        var _this = this;
        if (!this.users) {
            this.socket.emit('user').subscribe(function (data) {
                _this.subject.next(data);
            }, function (error) {
                console.log('Error', error);
            }, function () {
                //                console.log('complete');
            });
        }
    };
    UsersService.prototype.getUsersData = function () {
        return this.subject.asObservable();
    };
    return UsersService;
}());
UsersService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _a || Object])
], UsersService);

var _a;
//# sourceMappingURL=users.service.js.map

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let item of users | sortBy: 'group_id'\" class=\"clearfix groupRowWrapp groupOpened \" [ngClass]=\"{'opened visOverflow': !item.show}\">\n    <group-name [groupId]=\"item.key\" (click)=\"item.show = !item.show\"></group-name>\n    <div class=\"userRowWrapp clearfix\">\n        <div class=\"clearfix userRow\" *ngFor=\"let user of item.value\">\n            <div class=\"clearfix userNameWrapp\" >\n                <span class=\"userName\">{{user.lastname}} {{user.firstname}}</span>\n                <app-create-project-popup [user]=\"user\" *ngIf=\"adminRole\"></app-create-project-popup>\n            </div>\n            <div class=\"clearfix calLineWrapp\">\n                <app-canvas-row [user]=\"user\"\n                    [fieldWidth]=\"fieldWidth\"\n                    [planList]=\"user.plans\"\n                    (mousemove)=\"moveCursorLine($event)\"\n                    (mouseleave)=\"mouseLeave()\"\n                ></app-canvas-row>\n            </div>\n        </div>\n    </div>\n    <app-cursors [mouseCursor]=\"cursorPosition\" [leave]=\"leave\"></app-cursors>\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__service_users_service__ = __webpack_require__("../../../../../src/app/users/service/users.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__ = __webpack_require__("../../../../../src/app/shared/services/calendar-date-share.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__create_project_popup_popup_api_service__ = __webpack_require__("../../../../../src/app/create-project-popup/popup-api.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__header_calendar_utils_date_util__ = __webpack_require__("../../../../../src/app/header/calendar/utils/date.util.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_getLevel_pipe__ = __webpack_require__("../../../../../src/app/_pipes/getLevel.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pipes_object2Array_pipe__ = __webpack_require__("../../../../../src/app/_pipes/object2Array.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_socket_client_service__ = __webpack_require__("../../../../../src/app/shared/socket-client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash__ = __webpack_require__("../../../../lodash/lodash.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_lodash__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var UsersComponent = (function () {
    /**
   * Create a UserComponent.
   * @param usersService - The service for work with users.
   * @param groupsService - The service for work with groups.
   * @param calendarShare - The service for data sharing with Calendar data.
   * @param cdRef - For fix bug with Observer;
   */
    function UsersComponent(socket, usersService, calendarShare, projectData, getLevels, object2Array) {
        var _this = this;
        this.socket = socket;
        this.usersService = usersService;
        this.calendarShare = calendarShare;
        this.projectData = projectData;
        this.getLevels = getLevels;
        this.object2Array = object2Array;
        this.leave = false;
        this.maxheight = 34;
        this.adminRole = localStorage.getItem('admin');
        if (!usersService.users) {
            /* Get users list, if list is empty */
            usersService.getUsersData().distinctUntilChanged().subscribe(function (resp) {
                if (!resp) {
                    return;
                }
                usersService.users = resp;
            });
        }
        this.calendarShare.getDatePeriod().distinctUntilChanged().subscribe(function (resp) {
            if (!resp) {
                return;
            }
            _this.start = Number(Object(__WEBPACK_IMPORTED_MODULE_4__header_calendar_utils_date_util__["b" /* formatDateByParam */])(resp.date.start, 'X'));
            _this.end = Number(Object(__WEBPACK_IMPORTED_MODULE_4__header_calendar_utils_date_util__["b" /* formatDateByParam */])(resp.date.end, 'X'));
            _this.getPlanList();
        });
        this.projectData.getList().distinctUntilChanged().subscribe(function (projectList) {
            _this.projectsList = projectList;
            _this.updatePlans();
        });
    }
    UsersComponent.prototype.getPlanList = function () {
        var _this = this;
        this.socket.getList().distinctUntilChanged().subscribe(function (plan) {
            _this.plan = plan;
            _this.updatePlans();
        });
    };
    UsersComponent.prototype.updatePlans = function () {
        var _this = this;
        if (__WEBPACK_IMPORTED_MODULE_8_lodash___default.a.isEmpty(this.projectsList))
            return;
        __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.forEach(this.usersService.users, function (users) {
            users.plans = [];
        });
        __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.filter(this.plan, function (planObj) {
            var scope = _this;
            planObj['level'] = 0;
            __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.filter(_this.usersService.users, function (usr) {
                var top = 0, level = 0, maxLevel = 0, maxheight = 0, i = 0;
                if (planObj.user_id == usr.id) {
                    planObj['project'] = __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.filter(_this.projectsList, function (project) { return project.id == planObj.project_id; })[0]['name'];
                    if (planObj.start_time > planObj.end_time)
                        return;
                    usr.plans.push(planObj);
                }
                if (usr.plans.length > 0) {
                    __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.forEach(usr.plans, function (project) {
                        if (!(project.end_time < scope.start || project.start_time > scope.end)) {
                            var _loop_1 = function (j) {
                                var sameLevel = scope.getLevels.transform(scope.object2Array.transform(usr.plans), j);
                                if (sameLevel.length) {
                                    __WEBPACK_IMPORTED_MODULE_8_lodash___default.a.forEach(sameLevel, function (searchproject) {
                                        if ((searchproject.end_time >= project.start_time) && (project.end_time >= searchproject.start_time) && level == j && (searchproject.id !== project.id)) {
                                            level += 1;
                                            maxLevel < level ? maxLevel = level : '';
                                        }
                                    });
                                }
                            };
                            for (var j = 0; j <= level; j++) {
                                _loop_1(j);
                            }
                            top = 34 * level;
                            project['top'] = top;
                            project['level'] = level;
                            maxheight = (maxLevel + 1) * 34;
                            usr['maxheight'] = maxheight;
                            level = 0;
                            i += 1;
                        }
                    });
                }
                else {
                    usr['maxheight'] = 34;
                }
            });
        });
        this.users = this.usersService.users;
    };
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        /**
         * Subscribe date field width.
         * */
        this.calendarShare.getFieldWidth()
            .distinctUntilChanged()
            .subscribe(function (response) {
            _this.fieldWidth = response;
        });
        this.usersService.emitUsersData();
    };
    /** Change cursor line position.
    * @param e = Mouse event
    * */
    UsersComponent.prototype.moveCursorLine = function (e) {
        this.leave = false;
        this.cursorPosition = e.clientX - 20;
    };
    UsersComponent.prototype.mouseLeave = function () {
        this.leave = true;
    };
    return UsersComponent;
}());
UsersComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-users-list',
        template: __webpack_require__("../../../../../src/app/users/users.component.html"),
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__pipes_getLevel_pipe__["a" /* GetLevels */],
            __WEBPACK_IMPORTED_MODULE_6__pipes_object2Array_pipe__["a" /* Object2ArrayPipe */]
        ]
    })
    /** Class representing a Users Component */
    ,
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_7__shared_socket_client_service__["a" /* SocketClientService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__shared_socket_client_service__["a" /* SocketClientService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__service_users_service__["a" /* UsersService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__service_users_service__["a" /* UsersService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__shared_services_calendar_date_share_service__["a" /* CalendarDateShareService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__create_project_popup_popup_api_service__["a" /* ProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__create_project_popup_popup_api_service__["a" /* ProjectsService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__pipes_getLevel_pipe__["a" /* GetLevels */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__pipes_getLevel_pipe__["a" /* GetLevels */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__pipes_object2Array_pipe__["a" /* Object2ArrayPipe */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__pipes_object2Array_pipe__["a" /* Object2ArrayPipe */]) === "function" && _f || Object])
], UsersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=users.component.js.map

/***/ }),

/***/ "../../../../../src/assets/images/calender.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAASCAYAAACEnoQPAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAGZJREFUeNpi/P//PwMILJo3q4EBCuKS0uBsGMAmz8RAAWBCNhHdJhjGJU+RzSz4/IkMsMkzLpw7s4FsP1PsbEJOJhhgyCFLDJtiZzOAAgyUykjFIH0jwdlUTSQUOZsFPaOTAgACDABVz9kwjiki5AAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/images/checkedunchecked.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAAhCAYAAADUIPtUAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAUNJREFUeNpiNNTT9WNgYJgPxEIMxIN3QJxSkJ8DonWBeAoLkJgGxNFAwR3EmjJh4hRXKQmJZUAmNxBzAvFlkEHSQLyDBNcwAC39+/v3HxEodyIQH2RiIB04AfEWVlYWmCEFIAY2g4qA2AafISDvnDx5igFmCDaDXIG4F4h3YTEMbggQ9x0/cQpFEt2g3UA8C6oYZJg9NkOAuBjdqdi8lo5k2HYgLkUypBubISDAgiMs0qF0GhB3QdkgQ8pwxQC+WIO5jKAh+FyEbBgo3NYQShPEpKM1xCQuRmBe+w+iyUiYcH3nLl4Cu+gFEAeSaEggVB9KGMVBM+46Egy6A9WH8Nr///8ZjPT1GCgBMK9RBVDPIKC3QCXkW2gsEIvfokcQE6yEhEYlsTgCiCejG0RyCQlN7dK0CaNRg0YNGmwGDa4SEiDAAKOLVsbFDU3TAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/close.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAALCAYAAACprHcmAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAN5JREFUeNpkkbEKAjEMhtN6CILvIbjqKAiKoK8iCoeD4BsI4nB4YPEhnJQTXA+cBCefxEmQ+qemR+8sfE1K/rRJqowxhDUDd3Cj/9UHLXCIsI3ADrzABOQloaWMFDXgPzW2K9iDJshAL7gRQsXCBEm5lsAUpEHCQiwLNyDG7RQFT87Fcv1b8SG0Sy/QlWbO4CM+20sYFLHibQyOoOYmY509gUFFbL3Q19hFfvI7qyJBS/deuAa+xthNgaxP6HCDD/kQnu+qKNC66mI5tHnOkXzGELxLrarC44Q6x78CDADEMzHRtpV0WAAAAABJRU5ErkJggg=="

/***/ }),

/***/ "../../../../../src/assets/images/contextMenu.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAANCAYAAAAaGGZEAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NkNDMzI0NThENzM0MTFFNkIzMEU4RjQyNkE1QkFFRkQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NkNDMzI0NTlENzM0MTFFNkIzMEU4RjQyNkE1QkFFRkQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo2Q0MzMjQ1NkQ3MzQxMUU2QjMwRThGNDI2QTVCQUVGRCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo2Q0MzMjQ1N0Q3MzQxMUU2QjMwRThGNDI2QTVCQUVGRCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuGUrf8AAADwSURBVHjaxFXtDsMgCCwJ7218ctYm2lgrX4od/7aBO+7gACI6dkTOuX0YUkrHP6LgePw/OoA/4nwEHPl0/sbW7SKqNtx/j4baEUhy5g/rJFJbokZkKbU9luutm0ScaFgLz75AydeIAouCTM0rFz0jXUeuVSBoOlpwZCTD2vCrcQwELeUD4wsWAg/BV6Qd7km7P+MKaAVQP5KfuDQ30lYjgwAQqmPvbrhOQ0v6Z0oHB3TuLja8rLTxVLiUntxtkFxauvEzSkO00qVh6N7X6jmX5jwEdu80WZW7yNHOJDMZJtPyKE3WMxERC/s/dct/AgwAVq6IzZEh4cwAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/assets/images/holiday.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEcAAABDCAYAAADOIRgJAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAABMRJREFUeNrsm9tLFVEUxo+5y7TSMrpZFGgP1UM3FSPJCLpB1IMhkUR2v773P/TUU3TTzBSzopCCMHoIgiLpYnfLChNDokTTJLvbWrqEcXLO7L1nz5595jTwPRw4H+u4vt/sveZiQl9fX2SYYxZoAWgk6DvoIagt4n7Eim8m+UaBfoAaQO/tX2K2z+mgXaCF9Pk2qALU41IsVnzjQTtB2fS5HlQO6h7uy9bmFIC2glJAXaAy0H2OFJaBSiR8svVkffn0O8eCvoBOU3McD2zOGNBBBSmI+DD1xSbSYjmSsDmbqKBsCjp82mix+JIZLUpeUiiT8N0BnTGQFquvEptzHdTscwqyvu0StOSBdoDGefydDQkOW7nqFLz4eGlJpWbmCdZz9DEDaZFZk6y09JCv3itlzFBaZFN/QI35LOi7R77uaENg0LSI+Oy0VNApqMzH4pgWV99gc5aCtv2n5d/mrKbGiKaHqeeGjRY6MLQsbE6mh/RCRwscORTgFUYDYLWXeSBEtJRQiHh85BkCvaSwhHyitOTQZUOqZlrSQF9BZ0G3mKb0eGmxpyebuqzvEagU1BFtCFR1rovSYk2vXCJ1z7S4DYEqz/VSugyQTk/Ah7c6T3mlJVpzgtoZHNNT7MumtYzLxwzZGWRp4fWl0M2yAhEfNicLdCjEtCwiWiYI+iZhc1bRHxh2Wp6ATgr4WrA5+LznaIhp+QaqAt0E9Qn4ynEITKHCYaTlKe1g7RK+IzwTci51U5QWTGE3XT7ECi1DfMyHqVNqZ1Do80LLEB9TPHVaU+gln587iiwt84nqidF8jONcx252akrvMfn8oiUZtAW0gsfHTDzXNdCCO3Slmw+bM5qakm/Kua4i9Si+F6AToE8uvsTBZ+X5htPCtUZw0HIOdIPDNw80mVFnY4WW55S6X7TgWbSZrhr6n5VjAq8Mp0UkdS+07MVrqsjA216NPENg0LTwpq6ClgiBgr4PjCOFPZGBV0HigZbzoLpBH/N5Z4g5Wtxuk6rYGXTtKIOpK6PFqTmq0ntG903aNaXO60uisWUNKMGJluGao/tcV7VGVHP65pBvihst9uYsJ2MQ57rSNYKDltegYxw+rJeJzZkbQOq+rBFRaPkJugi6BvrDWa8Om9NGN9h10fKS0tNFyxvQ8Yj7a//2ep04BCYENUcYRAv69uH1lLUecyno6xxhAC1RdzAW57RYfTX2eswhvWLQyjihxdHHDNpRgqAlqo85pNdI3dS1o/D68J/OikDr/KLF3pzptJUHtUbUcPpmg/aDpvlJi+VIx+aspz9QNPW1mtYIOy1vaU5q87leBzbnF92JN3GNsNKCv/My6Crot4Z6FTgE4qOYLsEUmigFXbQ0k69VI52HeW6TatkZFNCCvgOgqarqsSDnCEW0yO5grvVYCGiR2cG46rGQ0OKLjylOXTctvvoYqVhB6iK+QtAGE2mxHP3PyotooPOS+gVOXybdN5lhKi0WXwY2J03TGlFI0/gI0Duaclt9rueFzipszt3IwGuofq0RVlrwu5dAtT6mrorOJp4hUBUtLeRrMZDOjeQbUs+tOapoqeWkJZOm3AyN9RwpYwbRYvUZUW84ctCI7xwn0tU2vvHVy3HlHTrfXwEGAPRVgPGgak1nAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/loader.gif":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,R0lGODlhHgAeAKUAAGRmZLS2tIyOjNze3Hx6fMzKzKSipPTy9HRydJyanOzq7ISGhNTW1MTCxKyurGxubJSWlOTm5ISChNTS1Pz+/GxqbLy6vJSSlOTi5Hx+fMzOzKyqrPT29HR2dJyenOzu7IyKjNza3MTGxLSytGZmZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05FVFNDQVBFMi4wAwEAAAAh+QQJCAAkACwAAAAAHgAeAAAG/kCScEgcPhyOR3HJFD6UQ4klkCE+Ks1ipaGRRAMWwpCQSGCzQoRGYzlnAlRhBeLxQNEkg2YiEC6mVSQSHgkgeEYiEyJKEmBiDwmEZ0wVdyQXewaCcFUgdYFOkw8MGBtQFRZrDwgLIKuEEGcVGa1nCBgKESGxJG9iRR0QYgAECxISC5MLExEKCgVeAE1YrMcLCx1aCQPNItJZAMbXBN9LDyMYoFmsGZNZ2YcklkYg9fYI8fIIq/wVGBQAA17Ih6CCwYMdIgQUmO9JpYcdENi71/CJxStM8MWDh+ZBAA5e8GTgEGDekAoeDgCcUI4SA4AfPLgjsWBAwBALSLQkgmVBfIibOdNwAKgggTQQE9QJkTDBC8oPADlofKCAw4hTL6V2SAABQYehIb6do4DhTiUiCQAGIAECoKEAABNYmWkF6gEsAtzKU6nAZJMRAD0IaUvBUB6AI+I9ABjiTN7CQgDY5OBXS4QDQdnqHcwBA10mq4g8Npzmc7xbAyoXCQIAIfkECQgAJAAsAAAAAB4AHgCFZGZktLa0jI6M3N7cfHp8pKKkzM7M9PL0dHJ0nJqc7OrshIaErK6sxMLE1NbUbG5slJaU5ObkhIKErKqs/P78bGpsvL68lJKU5OLkfH58pKak1NLU9Pb0dHZ0nJ6c7O7sjIqMtLK0xMbE3NrcZmZmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AknBIHD4alkdxyRQ+EMTFxiAhPirN4sOBWQyl1GEmwMBmhQhMxGBeGDZVEmASCCjPwolCARGC3nEgARYXeEYDEQNKYFUPIQEhZkwVd0IJexMkjCQQdV5Gkg8RHCF3AAYRGAgIAgKrdRNmFSAeCWYIHBQUCraaIhlLBBoEchIJtR6VIAO6FCNVkkUAJAQQyBDERBUFH7oO01kV1gkJEuBLCAEccWcdHiDRTVCGJPNaIAv4+PZ4Dx3/ACtgaNasED0CEhJKWCABRASCugwa6rCg4sKFD0Bo1LigAz0S/hAA7BAPzcdKWR6oY5dyVUkhFTwc0LXh3CQEFSghsKmJmXyuEV54DsHij1IFBJVw6eI1DcQGYEUkwJGD9ApOJwpI3anggAIHkQkgiMw1AtzRJ5IoEUmgKwAJELpAkAigK4GVl066HcAiIC7ImQpQngmhy4MfvyQK6ApB78FPM30pyJXDjIPgSREOfHqL+C0HDHi18Is8GU1oPGkU0QsCACH5BAkIACMALAAAAAAeAB4AhWRmZLS2tIyOjNze3Hx6fMzKzKSmpPT29HRydMTCxJyanOzq7ISGhNza3KyurGxubLy+vJSWlOTm5ISChNTS1GxqbLy6vJSSlOTi5Hx+fMzOzKyqrPz+/HR2dMTGxJyenOzu7IyKjLSytGZmZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJFwSBwiKJRHcckUPhBExkLCICIqzeJDcggNBZJFVTgpJLBZ54EzQIem4wpEo1GmhQEO5yN8i4UXFBp8d0IICxwgSmBUIw8FGh52TBWTIx96ASN+VQYaFAJWaI5cInYVDRwHCB0REQgIBRQBaBURIg5oCGscCwoAmxQZSxkBwxUMIgHLkyEDehwNVcCUIwQbyxYbBEUVH7wU1E0VBssiDOJaFgcThQQBEaNZUIUj9FohDPn593cPBAABdqiAARq0C/VGTFDw4QNDhxIM6kFYL0PDiw4fhNi4kUGHhP8CApRnBGShBwHYFULAIAPJId5A6AmXBgCDCQwYEEg3gsF1Mz3SRvCEae+m0Xu79PgCFkLYElhKKhC4iRPNgwUHTAlBpYqVglcPHlRAQK1CBn2jKhFRkGmTHi8IxPYTm+WBTEVuOXgBcIVuPRF6CAl46yRsv7pA3RAW2tfSOC5jRgzWO+TJlXpPiIRYLATAy4QIMAxw3CQIACH5BAkIACMALAAAAAAeAB4AhWRmZLS2tIyOjNze3Hx6fMzKzKSipPT29HRydJyanOzq7ISGhNTW1MTCxKyurGxubJSWlOTm5ISChNTS1GxqbLy6vJSSlOTi5Hx+fMzOzKyqrPz+/HR2dJyenOzu7IyKjNza3MTGxLSytGZmZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+wJFwSBwiLoNHcckUPhDEz2bzIT6UTSIlclgMBdOqcHFhULLDx2EDOo/AVCFgorhg0aPAtCOEixMKERp4aR4bHkp+Iw8DCiB3SxSQCVMBb2EjDoEQVm6LXCJYFCAbBwgcCQmnFxEZbg8GGQ1YCGsbCgkAIx8TGEsYBRIjABYhGRMFdx8DU2xeuky6EhUZxxW+Wh22E9BNFAHHIRbdRQ8VB8J4GBkGnllQhCPw5R8L9fXzeAgY/P0UF82aWYg3YkGAChUOBnAQIeCUgfEWJDwoooKGBx8yZlzAgeA+DAT8McmHBlKTBwHQEeLQ4YO7bIY2cENDAUKHDgkkkCvIbAp6iGdoCNi8CYGAEVu4dPHCRgTBAigUJKS6ieWBggOhhFBgUArBE68PFkhYAI3CB5yeJBGhtMESAgpqx0owmualFUOI5ElSQkHsArtNREwxIOSt2hEExDIt6fPVg8N9x5pksqWLkcd3ONgDvORJ071adhIcQYEDB85FggAAIfkECQgAJAAsAAAAAB4AHgCFZGZktLa0jI6M3N7cfHp8pKKkzMrM9PL0dHJ0nJqc7OrshIaErK6s1NbUbG5svL68lJaU5ObkhIKErKqs1NLU/P78bGpsvLq8lJKU5OLkfH58pKakzM7M9Pb0dHZ0nJ6c7O7sjIqMtLK03NrcZmZmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AknBIHDoyA0dxyRQ6EERBpRIiIpRNoiXSWQxD06pw0YlYssZOZXQmSalCQKbSwaJJgelHCIaTPlMid0YgFSBKb1UOBxUKdksWjwlTASR9VXkVCUQObSQOXCJYFiN0CB4JCadqIwBOExENWAhqjQmuIRQaSxIUXhYQIwoKGXYhA1NrXq5MZxIcwxEcEkUWH4wVFMxNFgYRCiO3TQ4XHdR3GhEMj01QgyTuRQ4hC/T08XcIEvv8R8nJGN654UCBA0EODyL8mxLwnYCCEBHOC0GRngeB+hZI0CiBnRB8aEAycRDA3CAPASB4FGINmzY0FjZcCCAixLYxyKaM8JLlDHeBCQGCTtj1sZYCcQiuLPEA4aKFBSKCBsDiQEEHUSwRRHLggACBJx8+QGgDjKanSFYAPCFBYB+UEB8SnHPiCRJXrSQ8aHSaIG7dkJ3c6ZVwkYSEvjzvcLWAgFlbwnFSfVhZ7Uq8wYXz+n1noa4Ht5z+CvxUTzSTIAAh+QQJCAAkACwAAAAAHgAeAIVkZmS0trSMjozc3tx8enykoqTMzsz08vR0cnScmpzs6uyEhoSsrqzEwsTU1tRsbmyUlpTk5uSEgoSsqqz8/vxsamy8uryUkpTk4uR8fnykpqTU0tT09vR0dnScnpzs7uyMioy0srTExsTc2txmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/kCScEgcPjCDR3HJFD4QRAGFAiIilE1iJcJZDEHTqnDBiVSyRg5ldCZJqULAgMLBokmBqUcIhpMKUyF3Rh8UH0pvVQ+FCnZLFY4JUwEkfVV5FAlED20kD1whWBUjdAgdCQkICGojAE4hZW2rUwoJriAbGUsSGxIkFR4KUxxQfHNTI16uTK4LpFMDYkPAB1Mby02jUwcenUUPFhy+dxkcAY5NxYMdTA8gC+/v6ncI8Av2R1P6FBeDQhAKIigIqGBDhH1T+vkDSFDgBncgIr5j56+ePRAS0DnxR2JetisemWQwUEBjnCucQhYBYMHABhEXsAlRBanClV9NXElo6dKCey4hNSEhcNVhQcgOGgiQAHBBxAYDBopBetChTYUFEow+kJDhSQALGto88GCgQacHjghI4EoiQwIPSiEECCDNk7ciV7OecQvXU4gAIe5myXBPadu3hkHMVXjH3dplfA0DmGDh3KCrRodE1hyCgWAmFbxtNvLZ3wNUJpcEAQAh+QQJCAAlACwAAAAAHgAeAIVkZmS0trSMjozc3tx8enzMysykoqT08vR0cnTEwsTs6uyEhoTU1tSsrqycmpxsbmy8vrzk5uSEgoTU0tSsqqz8/vxsamy8uryUlpTk4uR8fnzMzsykpqT09vR0dnTExsTs7uyMiozc2ty0srScnpxmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCScEgcPjKDR3HJFD4QREGlEiIilE2iJdJZDEPTqnDRiViyxk5FdC5JqULAoNLBokuBKUkIhpcMUyN3RiAVIEpvVQ+FCnZLFo4OUwElfVV5FQ5ED20lD1wjWBYidAgeDg4ICGoiAE4jZW2rUwoOriETGksSExIlFg6FpV9zUyJerkyuC6TGXlokB1MTyU2jUwcknUUPFx2+dxodAdtNUIMl50WQV+3lWR4h8vILDx4W+PmOaJJT/hkeOAmEhK5EP38VMrB7wPBKQQTz5u1zUtDDIAsaFqjLIiFDg4lCLBBYQFJCNSYWPihQIMJWEQ8SFsSUYPGklhILNkRQEGHDf7NfMkkScEUAg8UiBALosoBhwMoMokhqaMPUAQlVJFVtmHAh2QMKGRjYIThEgtUqEgJcIPBnq4BN74YAI+HgTFqlngps+ACSSQgSJMBpuIC3BIYJE/YMekAXQ7K7un5d2LChrxarbIWkvRC5hIQCCeI+cnQ3sxPLdx40aCC6SBAAIfkECQgAIwAsAAAAAB4AHgCFZGZktLa0jI6M3N7cfHp8pKKkzMrM9PL0dHJ07OrshIaErK6s1NbUnJqcbG5svL685ObkhIKErKqs1NLU/P78bGpslJaU5OLkfH58pKakzM7M9Pb0dHZ07O7sjIqMtLK03NrcnJ6cxMLEZmZmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv7AkXBIHDouA0dxyRQ6EEQBheIhIpRNYgWyUQw906pQsYFUssYNBXQeSalCwICywaJHgWlICIaPClMfd0YdFB1Kb1UOhQl2SxWODVMBI31VeRQNRA5tIxVXCG0AIHQIHA0NCAhqIABOH2WiDpyqrh4TGEsRExGeDYWlQ6oVAE9KrkxnCqRTIF5EAMNPd6NTByGdRZ+zgxEbAdlNjmhQjxzn6ONZCB4K7e0OHhHz9ByDQpJT+hcKChH9/uzds6BP34AK6ExxUNeEnYeH7coVkXiHojgPIQSi8RaAoacIDUKEsICsSQUGUzpgK0LAgsiRBEaU1DZimcFnIxyECNkggnsrAhlisjTQC0CBBFM2lKsQ0oMoCQECqBIgwNQFCAaQIfhA4YIdSEQ8RNWkYIKGXgsSJLCwKZyWBQE+KNPAK+eABCA8LrHwIICYsmeFhICQIMO9rQEkIAPcy5OGBF4HVVjwQWhNuo1rXmDglgm3LxoCC9N7x4GIB6SHBAEAIfkECQgAJAAsAAAAAB4AHgCFZGZktLa0jI6M3N7cfHp8pKKkzM7M9PL0dHJ0nJqc7OrshIaErK6sxMLE1NbUbG5slJaU5ObkhIKErKqs/P78bGpsvLq8lJKU5OLkfH58pKak1NLU9Pb0dHZ0nJ6c7O7sjIqMtLK0xMbE3NrcZmZmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5AknBIHD4wg0dxyRRWKkQBhQIiIpRNYuWKGIKmVeGCE4FmhY/HFiCUUoWAAYWDPZOu2zZYWJiG7EMVaQhQblUPHxQKdUuCVk9dhiQBUwlEaoELCxlmAB2CDx0JCQgIHBQjbCQPIWRmFZoSCwRsCB2MQhIbCyQVCYlzXUIIC7Kywk1sCyNTqLxaBMXFqk0VDlMHHmaNGQvIWRIcAdtZ32fmaATq67jlIAvv7w8JHvQe9wSAQhDNzRj29Ojl05eg35Qk69jpuwOiYUNvTNA1kVhkXoCBZzKIa+cERIgAATSQWwLgGoUP2opkmAAywIR81IqwAcFsyohnq1qGWAAlw3HFJbp4+QLGQRirEBc6WdhgwNYFCLZOpUITggKGOo6GXDBgoAAJEAoi8LJQ6dLISyI2iFAiIIICXg8OKOLIpICBDReEgBXLx4++B3ctqBIQ9lkFOXQAVWhgIIMXBW+9uPrLCEQEvkOuLFyCwMEGukWCAAAh+QQJCAAlACwAAAAAHgAeAIVkZmS0trSMjozc3tx8enzMysykoqT08vR0cnTEwsScmpzs6uyEhoTU1tSsrqxsbmy8vryUlpTk5uSEgoTU0tT8/vxsamy8uryUkpTk4uR8fnzMzsysqqz09vR0dnTExsScnpzs7uyMiozc2ty0srRmZmYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAG/sCScEgcWjweS3HJFFqUQ8TzQURQm0QLg+GJPizXkqgjgWJLD9GEARBKH1fLoNIJnzVrgnsqNFQqJGdZDGtKVmAlCCEVC3ZFiEMEhBqJYFQBfwpEX0YgICJQAIQMVg9WCB0VI21oJGRQDwogCgoabR6kSxMUDCUWCot0CJERniAReqxLSgwjf6q9WROyx2ZMAA1/ByDWmyIgw4ITHSSOTOGCiUwPGu3u6IIIDCLz8w8kARf5+hPpQhHPng1woO8CvguU/CkI+CfDAwLu2sE7g0CERYsMzKnzN3GdgQ16BGnoEECjLwwfKGwI0K0IAGcVQnArMgHCBpUIfTVp0+zZfYhoaDbc/CCA2YeERDQ06GcBRLAO4R4k2DDT14YFGRB4oKU11Soh9yo4NGJHgYQFHEoI+NPrQqZNLYc8GLBgBJW1FUSgOcDI5BIOCyRoUvtHbwk/gDhmkLABiojCQgBkoOPXSAMJQPEaLsGgQ4a4S0wReZy3SmWKGQZ0ZBIEACH5BAkIACQALAAAAAAeAB4AhWRmZLS2tIyOjNze3Hx6fKSipMzKzPTy9HRydJyanOzq7ISGhKyurNTW1GxubMTCxJSWlOTm5ISChKyqrNTS1Pz+/GxqbJSSlOTi5Hx+fKSmpMzOzPT29HR2dJyenOzu7IyKjLSytNza3MTGxGZmZgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAb+QJJwSBxaQAtLcckUWhzEzmKBIFqUTWvCQxh2JJLO0OFAYLMkhycBwUrDTjMZPQR5PBIhQUIVyqt0TlseSm9iT4hZT0QSayAke30dT4BCDmcODAEXWAAJW2QEHWRmCACWIRwRWA4BriFJJB0QYkVlUBYeChUVHJUSE64BE12nTEoLIrwVIgtFRyGuE8ZNAMoVB4RNDgkBXXQSHCFQdJXlTA5g6hLmaAgLSPEODxsbFPUbj4EkEMvLAw/uCaTgbF8Cf7wwpOPDsF0WBCAiRlxArkitQA6XZMKQIVC4ABWfJRigQMEIasca8PqgjciCDQoiKDDgDKUVEsmWNRuCQGZ3BBEQToGg0LGIBAp5cn3g5ctSAwwTyFlQ6asDGwQdODAz5iBEBYVGQnrgFYAECF6PAvBKQORSFgdLDygRgDbNgQoKQqJRW8GDkLMV9BXgFWKfA60DsADWB2BAL73oFHDQZ7buXw4YzqApQ2QxETP7mCDAMAAykyAAIfkECQgAJgAsAAAAAB4AHgCFZGZktLa0jI6M3N7cfHp8zMrMpKKk9PL0dHJ0xMLEnJqc7OrshIaE1NbUrK6sbG5svL68lJaU5ObkhIKE1NLUrKqs/P78bGpsvLq8lJKU5OLkfH58zM7MpKak9Pb0dHZ0xMbEnJ6c7O7sjIqM3NrctLK0ZmZmAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABv5Ak3BIHD4UiktxyRReHkRCKEQgXpRNqyOwGUoVVSGCwcBmTYgApoP9hgGMCQN6FkbUDOFmGiaQu3VOJQElUG4mF3FlWU9EIwEBESZ7VJNkYUIPZg8JHCF0ABWQCAgbEw9jcgBOCKhYCAUcFCACSgQVH0tjCIitT5pDExAUshhdq1mkVxetRRcZILIBZkwACBfWwEwPBhyYWQ8PH3RnvIEm5EQPDCNk7eaBY+3zDw0LEgv3CwLnJgoWAAMOsKcPH79z/wIC1PBAzjwG8OogGEGR4hwmuc5FbPIAgwdAZyZ4CJDOigERACkga3KhAUARIaiZYDAgIIk8K53NJGEzj3uYgCKSzKQAMhiFCYhCoLTgwdwDDR4KOeHZ9IOCCAg+eLBAAtmDEhYYDmk0JGEAEyMAjjARAKACdTLVoTygRIBadAcsLCiZBayFEELSWlhrwgDAEuceACSBxe5gIQBqeuC75IKEAz7R3g3sQUPcbREdExbzWaOGAZSXBAEAOw=="

/***/ }),

/***/ "../../../../../src/assets/images/plus.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAE1JREFUeNpiXDh3BgMUCAJxORC/B+JOmCATAwIoQRWEIomhKMAKQApWAfF/ID4DFTOG8kE4lCgTwoCYEYhNoGJnoXwQXk2UCXgBQIABABfZC9SZOOVLAAAAAElFTkSuQmCC"

/***/ }),

/***/ "../../../../../src/assets/images/prevnext.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAALCAYAAACzkJeoAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAG1JREFUeNpiXDh3BgMa8ABiFSCewoJFYh0QcwLxBSYcEh1AfIQJh0QlSJAJlwRM0gkq8ReIdyA7ACRZBnIZEDMD8XYgtkeWBIFcqAJOqAIbZEmYgulQBbuA2ADdn1lQWguIb6JLwhSAdH8HCDAAhPQV2mKK1doAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_23" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/reset.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\n * BASIC                                                 *\n *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n* {\n\t/* prevent font boosting in Chrome for Android */\n\tmax-height:99999px;\n}\n\n*,\n*:before,\n*:after {\n\tbox-sizing: border-box;\n}\nhtml {\n\t/* Sets default font family to sans-serif */\n\tfont-family:sans-serif;\n\n\t/* Sets default line-height */\n\tline-height:1.428;\n\n\t/* Prevents WinPhone 8+ text size adjust after orientation change, without disabling user zoom.  */\n\t-ms-text-size-adjust:100%;\n\n\t/* Prevents iOS text size adjust after orientation change, without disabling user zoom. */\n\t-webkit-text-size-adjust:100%;\n}\n\nbody {\n\t/* Removes default margin. */\n\tmargin:0;\n}\n\na:focus {\n\t/* Addresses 'outline' inconsistency between Chrome and other browsers. */\n\toutline:thin dotted;\n}\n\na:active,\na:hover {\n\t/* Improves readability when focused and also mouse hovered in all browsers. */\n\toutline:0;\n}\n\n/* Removes default background when mouse clicked in IE 10+ on Windows 8/8.1 - Use <meta name=\"msapplication-tap-highlight\" content=\"no\" /> instead */\n@media screen and (-ms-high-contrast:active), (-ms-high-contrast:none) {  \n\ta:active {\n\t\tbackground-color:inherit;\n\t}\n}\n\ntable {\n\t/* Remove most spacing between table cells. */\n\tborder-collapse:collapse;\n\tborder-spacing:0;\n}\n\nimg {\n\t/* Removes border when inside 'a' element in IE 8/9. */\n\tborder:0;\n}\n\nsvg:not(:root) {\n\t/* Corrects overflow displayed oddly in IE 9, IE10 (Win7). */\n\toverflow:hidden;\n}\n\nimg,\nsvg,\nobject,\niframe {\n\t/* Removes the bottom gap on inline elements */\n\tvertical-align:middle;\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\n * TYPOGRAPHY                                            *\n *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\nhtml {\n\t-webkit-font-smoothing:antialiased; /* for Chrome MacOS users. Safari already do it by default. */\n    -moz-osx-font-smoothing:grayscale;\n}\n\n/* Addresses 'h1' font sizes within 'section' and 'article' in Firefox 4+, Safari 5, and Chrome. */\nh1 {\n\tfont-size:2em;\n\tmargin:.67em 0;\n}\n\n/* Addresses styling not present in IE 8/9/10, Safari, and Chrome. */\nabbr[title] {\n\tborder-bottom:1px dotted;\n\tcursor:help;\n}\n\n/* Addresses style set to 'bolder' in Firefox and IE 9+ */\nb,\nstrong {\n\tfont-weight:bold;\n}\n\n/* Address differences between Firefox and other browsers. */\nhr {\n\tdisplay:block;\n    height:1px;\n    border:0;\n    border-top:1px solid #ccc;\n    margin:1em 0;\n    padding:0;\n}\n\n/* Addresses styling not present in IE 8/9. */\nmark {\n\tbackground:#ff0;\n\tcolor:#000;\n}\n\n/* Corrects font family set oddly in Safari, Chrome and Opera on MacOS. */\ncode,\nkbd,\npre,\nsamp {\n\tfont-family:'Courier New', monospace, serif;\n}\n\n/* Improves readability of pre-formatted text in all browsers. */\npre {\n\twhite-space:pre-wrap;\n\tword-wrap:break-word;\n}\n\n/* Sets consistent quote types. */\nq {\n\tquotes:\"\\201C\" \"\\201D\" \"\\2018\" \"\\2019\";\n}\n\n/* Addresses inconsistent and variable font size in all browsers. */\nsmall {\n\tfont-size:80%;\n}\n\n/* Prevents 'sub' and 'sup' affecting 'line-height' in all browsers. */\nsub,\nsup {\n\tfont-size:75%;\n\tline-height:0;\n\tposition:relative;\n\tvertical-align:baseline;\n}\nsup {top:-.5em;}\nsub {bottom:-.25em;}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\n * FORMS                                                 *\n *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n/* Define consistent border, margin, and padding. */\nfieldset {\n\tborder:1px solid #c0c0c0;\n\tmargin:0 2px;\n\tpadding:.35em .625em .75em;\n}\n\nlegend {\n\t/* Corrects color not being inherited in IE 8/9. */\n\tborder:0;\n\n\t/* Remove padding so people aren't caught out if they zero out fieldsets. */\n\tpadding:0;\n}\n\n/*\n * 1. Corrects font family not being inherited in all browsers.\n * 2. Corrects font size not being inherited in all browsers.\n * 3. Addresses margins set differently in Firefox 4+, Safari 5, and Chrome\n */\nbutton,\ninput,\nselect,\ntextarea {\n\tfont-family:inherit; /* 1 */\n\tfont-size:100%; /* 2 */\n\tfont-weight:inherit;\n\tmargin:0; /* 3 */\n\tvertical-align:middle;\n\toutline: none;\n}\n\nlabel {vertical-align:middle;}\n\n/* Addresses Firefox 4+ setting 'line-height' on 'input' using '!important' in the UA stylesheet. */\nbutton,\ninput {\n\tline-height:normal;\n}\n\n/**\n * Address inconsistent `text-transform` inheritance for `button` and `select`.\n * All other form control elements do not inherit `text-transform` values.\n * Correct `button` style inheritance in Chrome, Safari 5+, and IE 8+.\n * Correct `select` style inheritance in Firefox 4+ and Opera.\n */\nbutton,\nselect {\n\ttext-transform:none;\n\twhite-space:nowrap;\n}\n\n/*\n * 1. Avoid the WebKit bug in Android 4.0.* where (2) destroys native 'audio' and 'video' controls.\n * 2. \n */\nbutton,\nhtml input[type=\"button\"], /* 1 */\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n\t/* Corrects inability to style clickable 'input' types in iOS. */\n\t-webkit-appearance:button;\n\n\t/* Improves usability and consistency of cursor style between image-type 'input' and others. */\n\tcursor:pointer;\n\n\t/* for before/after */\n\toverflow:visible;\n}\n\nbutton[disabled],\nhtml input[disabled] {\n\t/* Re-set default cursor for disabled elements. */\n\tcursor:default;\n}\n\n/*\n * 1. Addresses box sizing set to 'content-box' in IE 8/9.\n * 2. Removes excess padding in IE 8/9.\n */\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n\tbox-sizing:border-box; /* 1 */\n\tpadding:0; /* 2 */\n\n\tvertical-align:baseline;\n}\n\n/*\n * 1. Addresses 'appearance' set to 'searchfield' in Safari 5 and Chrome.\n * 2. Addresses 'box-sizing' set to 'border-box' in Safari 5 and Chrome.\n */\ninput[type=\"search\"] {\n\t-webkit-appearance:textfield; /* 1 */\n    -webkit-box-sizing:content-box;\n\t/* box-sizing:content-box; */ /* 2 */\n}\n\n/* Removes search cancel/results button in IE10, Safari and Chrome on OS X. */\ninput::-ms-clear {\n\tdisplay:none;\n}\ninput::-ms-reveal {\n\tdisplay:none;\n}\ninput[type=\"search\"]::-webkit-search-decoration,\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-results-button,\ninput[type=\"search\"]::-webkit-search-results-decoration {\n\t-webkit-appearance:none;\n}\n\ninput[type=\"email\"]:invalid {\n\tbox-shadow: none;\n}\n\n/* Removes inner padding and border in Firefox. */\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n\tpadding:0;\n\tborder:0;\n}\n\ntextarea {\n\t/* Removes default vertical scrollbar in IE 8/9. */\n\toverflow:auto;\n\n\t/* Improves readability and alignment in all browsers. */\n\tvertical-align:top; /* 2 */\n\tresize:vertical;\n}\n\n/* placeholder */\n::-moz-placeholder {\n\topacity:1;\n\tcolor: #949494;\n}\n:-ms-input-placeholder {\n\tcolor: #949494;\n}\n::-webkit-input-placeholder {\n\tcolor:#949494;\n}\n.placeholder {\n\tcolor: #949494;\n}\n\n\n\n@media (device-height:568px) and (device-width:320px) and (-webkit-min-device-pixel-ratio:2), /* iPhone 5, iPod Touch 5 */\n(device-height:480px) and (device-width:320px) and (-webkit-min-device-pixel-ratio:2), /* iPhone 4/4s, iPod Touch 4 */\n(device-height:1024px) and (device-width:768px) and (-webkit-min-device-pixel-ratio:2), /* iPad 3, iPad 4 */\n(device-height:1024px) and (device-width:768px) and (-webkit-min-device-pixel-ratio:1) /* iPad, iPad 2, iPad Mini */ {\n\tselect {\n\t\t-webkit-border-radius:0;\n\t}\n\tbutton,\n\tinput[type=\"text\"],\n\tinput[type=\"password\"],\n\tinput[type=\"tel\"],\n\tinput[type=\"url\"],\n\tinput[type=\"email\"],\n\tinput[type=\"color\"],\n\tinput[type=\"search\"],\n\ttextarea {\n\t\t-webkit-appearance:none;\n\t}\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\n * HTML5                                                 *\n *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nnav,\nmain,\nmenu,\nsection,\nsummary {\n\t/* Corrects 'block' display not defined in IE 8/9. */\n\tdisplay:block;\n}\n\ncanvas,\naudio,\nvideo {\n\t/* Corrects 'inline-block' display not defined in IE 8/9. */\n\tdisplay:inline-block;\n\n\t/* Remove the gap between videos, audio and canvas and the bottom of their containers. */\n\tvertical-align:middle;\n}\n\nfigure {\n\t/* Addresses margin not present in IE 8/9. */ \n\tmargin:1em 40px;\n}\n\naudio:not([controls]) {\n\t/* Prevents modern browsers from displaying 'audio' without controls. */\n\tdisplay:none;\n\n\t/* Remove excess height in iOS 5/6 devices. */\n\theight:0;\n}\n\n[hidden] {\n\t/* Addresses styling for 'hidden' attribute not present in IE 8/9. */\n\tdisplay:none;\n}\n\n/* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*\n * PRINT                                                 *\n *~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/\n@media print {\n\t@page {margin:.5cm;}\n\t* {\n\t\tcolor:#000 !important;\n\t\ttext-shadow:none !important;\n\t\tbackground:none !important;\n\t\tbox-shadow:none !important;\n\t\tfill:#000 !important; /* SVG */\n\t}\n\ta {text-decoration:underline;}\n\ta[href]:after {content:\" (\"attr(href)\")\";}\n\ta[href^=\"javascript:\"]:after,\n\ta[href^=\"#\"]:after {content:\"\";}\n\tabbr[title]:after {content:\" (\"attr(title)\")\";}\n\ttr,\n\timg,\n\tpre,\n\tblockquote {page-break-inside:avoid;}\n}", ""]);

// exports


/***/ }),

/***/ "../../../../css-loader/index.js?{\"sourceMap\":false,\"importLoaders\":1}!../../../../postcss-loader/index.js?{\"ident\":\"postcss\"}!../../../../../src/assets/css/style.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "* {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    outline: 0;\n}\n\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\nol,\nul,\nmenu {\n    list-style: none;\n}\n\nh1,\nh2,\nh3,\nh4,\nh5,\nh6 {\n    margin: 0 0 1em;\n}\n\nbody {\n    margin: 0;\n    color: #333333;\n    font: 12px/1.32 'Roboto', sans-serif;\n}\n\na {\n    color: #282828;\n    text-decoration: none;\n}\n\na:hover {\n    text-decoration: underline;\n}\n\np {\n    margin: 0;\n}\n\na:active,\na:focus,\nimg {\n    outline: 0;\n}\n\ninput {\n    border-radius: 0;\n}\n\nhtml,\nbody {\n    height: 100%;\n    min-height: 100%;\n    min-width: 100%;\n}\n\n.wrapper {\n    min-height: 100%;\n    position: relative;\n    overflow: hidden;\n    background: #e4e5e5;\n    padding: 0 0 60px;\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    width: 100%;\n    -moz-align-items: stretch;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\n\n.wrapper.main {\n    padding-top: 165px;\n}\n\n.clearfix:before,\n.clearfix:after {\n    content: \"\";\n    display: table;\n    line-height: 0;\n}\n\n.clearfix:after {\n    clear: both;\n}\n\ninput {\n    -webkit-border-radius: 0;\n}\n\nbutton,\ninput[type=\"submit\"],\ninput[type=\"button\"],\na {\n    cursor: pointer;\n}\n\n.body {\n    width: 100%;\n    max-width: 1280px;\n    margin: 0 auto;\n    padding: 0 20px;\n}\n\nfooter {\n    position: absolute;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    padding: 20px 0;\n    border-top: 1px solid #979797;\n}\n\nheader {\n    padding-bottom: 10px;\n    padding-top: 10px;\n}\n\n.marg0auto {\n    margin: 0 auto;\n}\n\n.navbarHeader {\n    float: left;\n    margin-right: 30px;\n}\n\n.navbar {\n    margin-bottom: 20px;\n    font-size: 12px;\n}\nalert {\n    width: 82%;\n    display: block;\n    margin: 20px auto;\n}\ntextarea {\n    border: 1px solid #bdbbba;\n    padding: 5px;\n    background: #fff;\n    width: 100%;\n    height: 34px;\n    box-shadow: inset 1px 1px 0 0 rgba(208, 206, 205, 1);\n    max-height: 150px;\n}\n\ninput,\nselect {\n    border: 0 solid transparent;\n    border-bottom: 1px solid #bdbbba;\n    background: #fff;\n    width: 100%;\n    height: 24px;\n    box-shadow: 0 1px 0 0 rgba(208, 206, 205, 1);\n}\n\nselect {\n    -webkit-appearance: menulist;\n}\n\ntextarea {\n    height: 56px;\n}\n\ninput {\n    padding: 0 5px;\n}\n\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n    width: auto;\n}\n\n.highlited input,\n.highlited select,\n.highlited textarea,\n.highlited .wrap-dd-select {\n    border-color: #de4e4e;\n}\n\n.noticeTxt {\n    margin: 15px 0;\n    font-style: italic;\n    opacity: 0.8;\n}\n\n.button {\n    width: auto;\n    min-width: 120px;\n    text-align: center;\n    background: #801f0f;\n    text-transform: uppercase;\n    color: #fff;\n    text-decoration: none;\n    padding: 5px;\n    display: inline-block;\n    border-radius: 3px;\n    font-size: 12px;\n}\n\n.modal .button {\n    width: 46%;\n    height: 34px;\n    line-height: 24px;\n}\n\n.button:hover {\n    background: #b3150f;\n    text-decoration: none;\n}\n\n.button.thin {\n    min-width: 80px;\n    padding: 3px;\n}\n\n.button + .button {\n    margin-left: 15px;\n}\n\n.btnsWrapp {\n    text-align: center;\n    margin-top: 20px;\n}\n\n.button.gray {\n    background: #999;\n    border: 1px solid #999;\n}\n\n.button.gray:hover {\n    background: #bababa;\n}\n\n.button.red {\n    background: #be3a26;\n}\n\n.button.red:hover {\n    background: #ab3224;\n}\n\n.button.red:active {\n    background: #992c20;\n}\n\n.button.green {\n    background: #00ad49;\n    border: 1px solid #00ad49;\n}\n\n.button.green:hover {\n    background: #00c654;\n}\n\ndiv.error {\n    margin-top: 5px;\n}\n\n.flLeft {\n    float: left;\n}\n\n.flRight {\n    float: right;\n}\n\n.label {\n    margin-bottom: 5px;\n}\n\n.formRow {\n    margin-bottom: 10px;\n    position: relative;\n}\n\n.formCol {\n    float: left;\n}\n\n.formWrapp label {\n    line-height: 24px;\n}\n\n.error,\n.error *,\n.alert-error * {\n    color: #de4e4e;\n}\n\n.alert-error {\n    margin-bottom: 10px;\n}\n\n.halfWidthBlock {\n    width: 48%;\n}\n\n.twothirdWidthBlock {\n    width: 70%;\n}\n\n.thirdWidthBlock {\n    width: 30%;\n}\n\n.navMenu {\n    float: right;\n    margin-left: 10px;\n}\n\n.navMenu li {\n    display: block;\n    text-align: right;\n    min-width: 90px;\n    margin: 0;\n    height: 28px;\n    line-height: 26px;\n    font-weight: 400;\n    color: #989897;\n    background: #fff;\n    border: 1px solid #ccc;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    text-align: center;\n    text-transform: uppercase;\n}\n\n.navMenu li * {\n    text-decoration: none;\n    color: #989897;\n    font-size: 12px;\n    line-height: 26px;\n}\n\n.navMenu li:hover,\n.navMenu li.active {}\n\n.navMenu li a {\n    display: block;\n}\n\n.navMenu li a:hover {\n    text-decoration: none;\n}\n\n.paddLeftRight20 {\n    padding: 0 20px;\n}\n\nheader {\n    padding: 20px 20px 0;\n}\n\n.padd20 {\n    padding: 20px;\n}\n\n.gantTable {\n    position: relative;\n}\n\n.groupRow {\n    border: 0 solid transparent;\n    position: relative;\n    height: 29px;\n    background: transparent;\n    font-weight: 600;\n    padding: 5px 17px;\n    line-height: 24px;\n    font-size: 12px;\n}\n\n.groupRowWrapp:nth-of-type(1) .groupRow {\n    margin-top: 0px;\n}\n\n.userRow {\n    border-top: 0 dotted transparent;\n    position: relative;\n}\n\n.userRow:nth-last-of-type(1) .userNameWrapp,\n.userRow:nth-last-of-type(1) .calLineWrapp {\n    border-bottom: 0 solid #979797;\n}\n\n.gantHeader .userRow {\n    border: 0 solid transparent;\n}\n\n.gantHeader .userNameWrapp {\n    border-bottom: 0 solid transparent;\n    z-index: 600;\n    background: transparent;\n}\n\n.gantHeader .userRow {\n    color: #333333;\n}\n\n.gantHeader .userRow .calLineWrapp {\n    border-bottom: 1px solid #e9e8e7;\n    width: 100%;\n    padding: 0 30px;\n    white-space: nowrap;\n}\n\n.calLineMain {\n    float: right;\n    background: #f7f8f8;\n    max-width: calc(100% - 266px);\n    overflow: hidden;\n    border: 1px solid #d1d1d0;\n}\n\n.userNameWrapp {\n    padding: 5px 0 5px 17px;\n    border-right: 1px solid #ebeae9;\n    min-width: 280px;\n    float: left;\n    position: relative;\n    z-index: 2;\n    background: #fff;\n    border-bottom: 1px solid #cdcccb;\n    line-height: 24px;\n}\n\n.userRowWrapp .userRow:nth-of-type(1) .userNameWrapp {\n    -moz-border-top-left-radius: 5px;\n    border-top-left-radius: 5px;\n}\n.userRowWrapp .userRow {\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n\n.userRowWrapp .userRow:nth-of-type(1) .calLineWrapp {\n    -moz-border-top-right-radius: 5px;\n    border-top-right-radius: 5px;\n}\n\n.userRowWrapp .userRow:nth-last-of-type(1) .userNameWrapp {\n    -moz-border-bottom-left-radius: 5px;\n    border-bottom-left-radius: 5px;\n}\n\n.userRowWrapp .userRow:nth-last-of-type(1) .calLineWrapp {\n    -moz-border-bottom-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.userNameWrapp:after {\n    position: absolute;\n    content: \"\";\n    display: block;\n    width: 1px;\n    border-right: 1px solid #dcdbdb;\n    height: 100%;\n    right: -2px;\n    top: 0;\n}\n\n.gantHeader .userNameWrapp,\n.gantHeader .userNameWrapp:after {\n    border: 0 solid transparent;\n}\n\n.calLineWrapp {\n    float: right;\n    text-align: center;\n    position: relative;\n    border-bottom: 1px solid #cdcccb;\n}\n\n.gantHeader .calLineWrapp {\n    border-bottom: 1px solid #979797;\n}\n\n.gantTable .calLineWrapp {\n    background: #fff;\n     -webkit-touch-callout: none;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n    padding-left: 10px;\n}\n\n.gantTable .calLineWrapp:nth-last-of-type {\n    -moz-border-bottom-right-radius: 5px;\n    border-bottom-right-radius: 5px;\n}\n\n.gantHeader .calLineWrapp:nth-last-of-type(1) {\n    border-bottom: 0 solid transparent;\n}\n\n.groupRow .groupName {\n    position: relative;\n    display: inline-block;\n    vertical-align: middle;\n    padding-right: 25px;\n    cursor: pointer;\n    text-transform: uppercase;\n    -ms-flex-preferred-size: 270px;\n        flex-basis: 270px;\n    min-width: 270px;\n}\n\n.groupRow .groupName:after,\n.toggleOrder:after,\n.dropLegend .title:after {\n    position: absolute;\n    top: -12px;\n    right: 2px;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/prevnext.png") + ") no-repeat 50% 50%;\n    opacity: 1;\n    width: 37px;\n    display: block;\n    height: 46px;\n    -webkit-transform: rotate(90deg);\n    content: \"\";\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n}\n\n.opened .groupRow .groupName:after,\n.opened .toggleOrder:after,\n.dropLegend .title:after {\n    -webkit-transform: rotate(90deg);\n            transform: rotate(90deg);\n}\n\n.toggleOrder:after {\n    right: -12px;\n    top: -15px;\n}\n\n.dropLegend .title:after {\n    top: -6px;\n    right: -11px;\n}\n\n.groupRowWrapp .userRowWrapp {\n    max-height: 0;\n    background: #fff;\n    border-radius: 5px;\n    transition: 500ms cubic-bezier(0.250, 0.100, 0.250, 1.000) all;\n    overflow: hidden;\n    position: relative;\n}\n\n.groupRowWrapp.opened .userRowWrapp {\n    border: 1px solid #ccc;\n    box-shadow: 0 2px 3px 0 rgba(2, 2, 2, 0.1);\n}\n\n.addNewProj {\n    float: right;\n    display: block;\n    height: 20px;\n    width: 20px;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/plus.png") + ") 50% 50% no-repeat;\n    cursor: pointer;\n    margin: 3px 10px;\n}\n\n.userName {\n    max-width: 200px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    font-size: 12px;\n}\nhtml, body, .container {\n    height: 100%;\n}\napp-root {\n    width: 100%;\n}\nlogin,\nhome-app {\n    position: relative;\n    z-index: 1;\n     min-height: 100%;\n    display: block;\n}\n.mainTableWrapper{\n    background: #e4e5e5;\n}\nlogin {\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -moz-align-items: stretch;\n    -webkit-box-align: stretch;\n        -ms-flex-align: stretch;\n            align-items: stretch;\n}\nlogin #loginForm {\n       background: #e4e5e5;\n       min-height: 100%;\n    display: block;\n    padding-top: 40px;\n}\n.sk-folding-cube {\n    margin: 20px auto;\n    width: 40px;\n    height: 40px;\n    position: fixed;\n    z-index: 0;\n    top: 50%;\n    left: 50%;\n    -webkit-transform: rotateZ(45deg);\n    transform: rotateZ(45deg);\n}\n\n.sk-folding-cube .sk-cube {\n    float: left;\n    width: 50%;\n    height: 50%;\n    position: relative;\n    -webkit-transform: scale(1.1);\n    transform: scale(1.1); \n}\n.sk-folding-cube .sk-cube:before {\n    content: '';\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-color: #801f0f;\n    -webkit-animation: sk-foldCubeAngle 2.4s infinite linear both;\n    animation: sk-foldCubeAngle 2.4s infinite linear both;\n    -webkit-transform-origin: 100% 100%;\n    transform-origin: 100% 100%;\n}\n.sk-folding-cube .sk-cube2 {\n    -webkit-transform: scale(1.1) rotateZ(90deg);\n    transform: scale(1.1) rotateZ(90deg);\n}\n.sk-folding-cube .sk-cube3 {\n    -webkit-transform: scale(1.1) rotateZ(180deg);\n    transform: scale(1.1) rotateZ(180deg);\n}\n.sk-folding-cube .sk-cube4 {\n    -webkit-transform: scale(1.1) rotateZ(270deg);\n    transform: scale(1.1) rotateZ(270deg);\n}\n.sk-folding-cube .sk-cube2:before {\n  -webkit-animation-delay: 0.3s;\n          animation-delay: 0.3s;\n}\n.sk-folding-cube .sk-cube3:before {\n    -webkit-animation-delay: 0.6s;\n    animation-delay: 0.6s; \n}\n.sk-folding-cube .sk-cube4:before {\n    -webkit-animation-delay: 0.9s;\n    animation-delay: 0.9s;\n}\n@-webkit-keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n    transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  } \n}\n\n@keyframes sk-foldCubeAngle {\n  0%, 10% {\n    -webkit-transform: perspective(140px) rotateX(-180deg);\n            transform: perspective(140px) rotateX(-180deg);\n    opacity: 0; \n  } 25%, 75% {\n    -webkit-transform: perspective(140px) rotateX(0deg);\n            transform: perspective(140px) rotateX(0deg);\n    opacity: 1; \n  } 90%, 100% {\n    -webkit-transform: perspective(140px) rotateY(180deg);\n            transform: perspective(140px) rotateY(180deg);\n    opacity: 0; \n  }\n}\n.mainTableWrapper .userRow:hover .userNameWrapp {\n    background: #f7f9fa;\n}\n\n.mainTableWrapper .userRow:hover .calLineWrapp {\n    background: #f7f9fa;\n}\n\n.groupRowWrapp.opened .userRowWrapp {\n    max-height: 1000px;\n}\n\n.visOverflow.groupRowWrapp .userRowWrapp {\n    overflow: visible !important;\n}\n\n.calendarFill {\n    left: 0;\n    position: absolute;\n    top: 0;\n}\n\n.headerCalDay {\n    display: inline-block;\n    border-right: 1px solid #e9e8e7;\n    text-align: center;\n    padding: 4px 3px;\n    line-height: 0;\n    /*height: 27px;*/\n    overflow: hidden;\n}\n\n.dayLine .headerCalDay,\n.dayNameLine .headerCalDay {\n    border-right: 1px solid transparent;\n}\n\n.headerCalDay:nth-last-of-type(1) {\n    border-right: 1px solid transparent;\n}\n\n.dayLine .headerCalDay.weekend a,\n.dayNameLine .headerCalDay.weekend a {\n    color: #999999;\n}\n\n.gantHeader .userNameWrapp {\n    height: 112px;\n    text-align: center;\n}\n\n.gantHeader {\n    background: transparent;\n    position: relative;\n}\n\n.gantHeader:after {\n    position: absolute;\n    top: 100px;\n    width: 150%;\n    height: 0;\n    border-bottom: 1px solid #cdcccb;\n    content: \"\";\n    display: block;\n    left: -25%;\n}\n\n.singleProject {\n    position: absolute;\n    top: 0;\n    background: #b6d7a8;\n    height: 24px;\n    border-radius: 4px;\n    margin-top: 5px;\n    z-index: 15;\n    cursor: pointer;\n}\n\n.projectInfoInline {\n    font-size: 13px;\n    height: 22px;\n    line-height: 18px;\n    padding: 2px 10px;\n    position: absolute;\n    text-align: left;\n    width: 100%;\n}\n\n.projectInfoInline .projPercent {\n    color: rgba(0, 0, 0, .45);\n    float: right;\n    white-space: nowrap;\n}\n.projPercent input {\n    vertical-align: top;\n\n}\n.projPercent span {\n    vertical-align: top;\n    display: inline-block;\n    margin-top: 2px;\n}\n.projNote {\n    background: #fff;\n    padding: 20px 0;\n    z-index: 31;\n    pointer-events: auto;\n    width: 220px;\n    word-wrap: break-word;\n}\n\n.projBallonName {\n    font-weight: 700;\n    text-transform: uppercase;\n    margin: 0 0 10px;\n    text-align: left;\n}\n\n.projDetaisList {\n}\n\n.projDetaisList li {\n    padding: 5px 0;\n    font-weight: 300;\n    font-size: 12px;\n}\n\n.projDetaisList li.separator {\n    height: 1px;\n    padding: 0;\n    background: #ccc;\n    margin-top: 10px;\n    margin-bottom: 10px;\n}\n\n.projDetaisList span.option {\n    display: block;\n    text-align: left;\n    color: gray;\n    cursor: pointer;\n}\n\n.projDetaisList .name {\n    float: left;\n    width: 35%;\n    color: #989897;\n    text-align: left;\n}\n\n.projDetaisList .desc {\n    float: right;\n    width: 65%;\n    text-align: right;\n}\n\n.baloonBtn {\n    background: #fff;\n    display: block;\n    width: 46%;\n    float: left;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    text-transform: uppercase;\n    color: #989897;\n    text-align: center;\n    height: 28px;\n    line-height: 26px;\n    text-align: center;\n    font-size: 12px;\n}\n\n.baloonBtn +.baloonBtn {\n    float: right;\n}\n\nbutton.baloonBtn:hover {\n    text-decoration: none;\n    background: #f7f9fa;\n}\n\na.baloonBtn:active {\n    text-decoration: none;\n    background: #e4e5e5;\n}\n\n.projectName {\n    display: inline-block;\n    max-width: calc(100% - 40px);\n    margin-top: 2px;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    vertical-align: top;\n    white-space: nowrap;\n}\n\n\n/*.singleProject:hover .projNote{display: block; }*/\n\n.singleProject.opened {\n    z-index: 1000 !important;\n}\n\n.singleProject.zIndex {\n    z-index: 5999 !important;\n}\n\n.calLineWrapp.opened .projNote.paste,\n.singleProject.opened .projNote {\n    display: block;\n    z-index: 5999;\n}\n\n.singleProject.on-dragging .projNote,\n.singleProject.resize .projNote {\n    display: none;\n}\n\n.projectInfoInline.baloon {\n    overflow: hidden;\n}\n\n.loader {\n    background: url(" + __webpack_require__("../../../../../src/assets/images/loader.gif") + ") no-repeat 50% 50% rgba(0, 0, 0, 0.1);\n    height: 100%;\n    left: 0;\n    position: fixed;\n    top: 0;\n    width: 100%;\n    z-index: 10;\n}\n\n.changeFilter input {\n    opacity: 0;\n    position: absolute;\n}\n\n.changeFilter {\n    float: left !important;\n    cursor: pointer;\n    padding: 2px 2px 2px 20px;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/checkedunchecked.png") + ") 0 1px no-repeat;\n    display: inline-block;\n    margin: 0;\n}\n\n.changeFilter.byName,\n.changeFilter.unchecked {\n    background-position: 0 -17px;\n}\n\n.on-dragging {\n    opacity: 0.6;\n}\n\n.wrapper>.singleProject {\n    position: absolute;\n    pointer-events: none;\n}\n\n[draggable] {\n    -moz-user-select: none;\n    -webkit-user-select: none;\n    -ms-user-select: none;\n        user-select: none;\n    /* Required to make elements draggable in old WebKit */\n    -khtml-user-drag: element;\n    -webkit-user-drag: element;\n}\n\n.resizable {\n    position: absolute;\n    z-index: 30;\n    display: block;\n    left: 0;\n    width: 2px;\n    border-left: 1px solid transparent;\n    border-right: 1px solid transparent;\n    box-sizing: content-box;\n    height: 100%;\n    top: 0;\n    background: rgba(0, 0, 0, .15);\n    cursor: w-resize;\n    -moz-border-top-left-radius: 3px;\n    border-top-left-radius: 3px;\n    -moz-border-bottom-left-radius: 3px;\n    border-bottom-left-radius: 3px;\n}\n\n.resizable+.resizable {\n    left: auto;\n    right: 0;\n    -moz-border-top-left-radius: 0;\n    border-top-left-radius: 0;\n    -moz-border-bottom-left-radius: 0;\n    border-bottom-left-radius: 0;\n    -moz-border-top-right-radius: 3px;\n    border-top-right-radius: 3px;\n    -moz-border-bottom-right-radius: 3px;\n    border-bottom-right-radius: 3px;\n}\n\n.newProject {\n    background: rgba(247, 80, 253, 0.4);\n    display: block;\n    position: absolute;\n    z-index: 2;\n}\n\n.modal-backdrop {\n    position: fixed;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    z-index: 1040;\n    background-color: #000000;\n}\n\n.modal-backdrop.fade {\n    opacity: 0;\n}\n\n.mainTableWrapper {\n    position: relative;\n    /*overflow: hidden;*/\n}\n\n.modal-backdrop,\n.modal-backdrop.fade.in {\n    z-index: 6000 !important;\n    opacity: 0.4;\n    filter: alpha(opacity=80);\n}\n\n#deteteBg.modal-backdrop.fade.in {\n    z-index: 6002!important;\n}\n\n.modal.deletePlanPopup {\n    z-index: 6003!important;\n}\n\n\n.modal {\n    position: fixed;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    z-index: 6001 !important;\n}\n\n.modal-dialog {\n    background: #fff;\n    border-radius: 5px;\n    left: 50%;\n    margin-left: -180px;\n    overflow: hidden;\n    position: fixed;\n    top: 90px;\n    width: 360px;\n}\n\n.modalBody {\n    padding: 0 20px 20px;\n}\n\n.modalHeader {\n    position: relative;\n    margin-bottom: 15px;\n    padding: 20px;\n    background: #f7f8f8;\n    color: #231f20;\n}\n\n.modalHeader p {\n    font-weight: 300;\n}\n\n.closePopup {\n    position: absolute;\n    right: 10px;\n    top: 10px;\n    display: block;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/close.png") + ") no-repeat 50% 50%;\n    width: 30px;\n    height: 30px;\n    text-indent: -9999px;\n}\n\n.modalHeader p.popupHeader {\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 20px;\n}\n\n.dropdown {\n    position: relative;\n}\n\n.dropdown-menu,\n.dropdown-menu.dropdown-toggle {\n    background-clip: padding-box;\n    background: #fff;\n    border: 1px solid rgba(0, 0, 0, 0.2);\n    border-radius: 5px;\n    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);\n    display: none;\n    float: right;\n    left: 0;\n    list-style: outside none none;\n    margin: 1px 0 0;\n    min-width: 160px;\n    padding: 4px 0;\n    position: absolute;\n    top: 100%;\n    z-index: 1000;\n}\n\n.dropdown-menu.pull-right {\n    left: auto;\n    right: 0;\n}\n\n.dropdown-menu .divider {\n    background-color: #e5e5e5;\n    border-bottom: 1px solid #fff;\n    height: 1px;\n    margin: 8px 1px;\n    overflow: hidden;\n}\n\n.dropdown-menu a {\n    clear: both;\n    color: #333333;\n    display: block;\n    font-weight: normal;\n    line-height: 18px;\n    padding: 3px 15px;\n    white-space: nowrap;\n}\n\n.dropdown-menu li > a:hover,\n.dropdown-menu .active > a,\n.dropdown-menu .active > a:hover {\n    background-color: #0088cc;\n    color: #fff;\n    text-decoration: none;\n}\n\n.open .dropdown-menu {\n    display: block;\n}\n\n.dropdown-toggle {\n    line-height: 34px;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/calender.png") + ") no-repeat 100% 50%;\n    padding: 5px 20px 5px 0;\n}\n\n.dateRange .dropdown-toggle {\n    margin: 0 auto;\n    display: block;\n    padding-left: 32px;\n    padding-right: 0;\n    background-position: 0% 50%;\n    line-height: 18px;\n}\n\n.headerCalDay a {\n    display: inline-block;\n    padding: 0;\n    height: 27px;\n    color: #333333;\n    line-height: 20px;\n    overflow: hidden;\n}\n\n.headerCalDay.holiDay a {\n    color: #e54c25;\n}\n\n.dayLine .headerCalDay a {\n    text-decoration: none;\n}\n\ni.clearCustomDate {\n    font-family: sans-serif, arial, tahoma, verdana;\n    font-size: 18px;\n    margin-left: 0;\n    width: 10px;\n    margin-right: 4px;\n    color: rgba(171, 50, 36, 0.76);\n    position: absolute;\n    left: 3px;\n    cursor: pointer;\n}\n\ni.icon {\n    background: url(" + __webpack_require__("../../../../../src/assets/images/contextMenu.png") + ") no-repeat 0 0 transparent;\n    display: inline-block;\n    height: 14px;\n    width: 16px;\n}\n\ni.icon.paste {\n    background-position: -15px 0;\n}\n\ni.icon.collapse {\n    background-position: -43px 0;\n}\n\ni.icon.delete {\n    background-position: -28px 0;\n}\n\n.projNote i.icon {\n    opacity: .65;\n    float: left;\n    margin-right: 8px;\n}\n\n.projDetaisList span.option {\n    text-transform: uppercase;\n    font-size: 12px;\n}\n\n.projNote span.option:hover i.icon {\n    opacity: 1;\n}\n\na.prev,\na.next {\n    text-decoration: none;\n    opacity: 1;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/prevnext.png") + ") no-repeat 50% 50%;\n    opacity: .5;\n    width: 30px;\n    display: block;\n    /*position: absolute;*/\n    top: 0;\n    left: 0;\n    height: 27px;\n}\n\na.prev {\n    float: left;\n}\n\na.next {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    left: auto;\n    right: 0;\n}\n\na.prev:hover,\na.next:hover {\n    text-decoration: none;\n    opacity: 1;\n}\n\n.shortName {}\n\n.fadeBg {\n    width: 100%;\n    height: 100%;\n    position: fixed;\n    z-index: 9050;\n    left: 0;\n    top: 0;\n    background: rgba(0, 0, 0, 0.5);\n    opacity: 0;\n    display: none;\n}\n\n.headFiltersWrapp {\n    float: right;\n    font-weight: 700;\n    text-transform: uppercase;\n    margin: 0 30px;\n}\n\n.headFilters {\n    position: relative;\n    text-transform: none;\n    font-weight: 300;\n    display: inline-block;\n    padding: 5px 12px;\n    background: #fff;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    border: 1px solid #ccc;\n    color: #989897;\n    width: 175px;\n    margin-left: 25px;\n}\n\n.headFilters span {\n    color: #333333;\n    float: right;\n}\n\n.headerFiltersLine {\n    float: right;\n    padding: 0 0 15px;\n    font-size: 12px;\n}\n\n.bgLayout {\n    background: rgba(255, 255, 255, 0.6);\n    border-radius: 4px;\n    content: \"\";\n    pointer-events: none;\n    display: block;\n    height: 100%;\n    left: 2px;\n    position: absolute;\n    top: 0;\n    width: calc(100% - 4px);\n    z-index: 0;\n}\n\n.orderDrop {\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    padding: 0 10px;\n    background: #fff;\n    display: none;\n    width: 88px;\n    border: 1px solid #ccc;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    z-index: 2;\n}\n\n.opened +.orderDrop {\n    display: block;\n}\n\n.orderDrop span {\n    display: block;\n    float: left;\n    width: 100%;\n    margin: 4px 0;\n    text-align: left;\n    cursor: pointer;\n}\n\n.toggleOrder {\n    cursor: pointer;\n    float: right;\n    padding-right: 25px;\n    position: relative;\n}\n\n.datePicker a:hover {\n    text-decoration: none;\n}\n\n.legend {\n    float: right;\n    display: block;\n    width: 28px;\n    height: 28px;\n    line-height: 26px;\n    font-size: 20px;\n    font-weight: 400;\n    color: #989897;\n    background: #fff;\n    border: 1px solid #ccc;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    text-align: center;\n    position: relative;\n    cursor: pointer;\n}\n\n.tabName {\n    width: 118px;\n    height: 28px;\n    line-height: 26px;\n    display: block;\n    float: right;\n    margin-left: 10px;\n    color: #be3a26;\n    text-transform: uppercase;\n    font-size: 12px;\n    background: #fff;\n    border: 1px solid #c35d3e;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    box-shadow: inset 1px 1px 1px 0 #edcebf, 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    text-align: center;\n}\n\n.legendColor {\n    float: left;\n    display: block;\n    width: 15px;\n    height: 15px;\n    position: relative;\n    -webkit-border-radius: 3px;\n    -moz-border-raius: 3px;\n    border-radius: 3px;\n    margin-right: 10px;\n}\n\n.legendColor:after {\n    content: \"\";\n    position: absolute;\n    width: -webkit-calc(100% - 2px);\n    height: -webkit-calc(100% - 2px);\n    width: calc(100% - 2px);\n    height: calc(100% - 2px);\n    display: block;\n    top: 1px;\n    left: 1px;\n    z-index: 2;\n    background: rgba(255, 255, 255, .6);\n    -webkit-border-radius: 3px;\n    -moz-border-raius: 3px;\n    border-radius: 3px;\n}\n.legendWrap {\n    position: relative;\n    float: right;\n}\n\n.dropLegend {\n    position: absolute;\n    top: -1px;\n    right: -1px;\n    padding: 10px 20px;\n    background: #fff;\n    border: 1px solid #ccc;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    z-index: 200;\n    width: 170px;\n    font-size: 12px;\n    font-weight: 300;\n    text-align: left;\n    color: #333;\n}\n\n.dropLegend .title {\n    font-weight: 700;\n    text-transform: uppercase;\n    font-size: 14px;\n    position: relative;\n    cursor: pointer;\n}\n\n.dropLegend li {\n    line-height: 15px;\n    padding: 8px 0;\n    vertical-align: middle;\n}\n\n\n.editPlainingPopup .twothirdWidthBlock,\n.editPlainingPopup .twothirdWidthBlock * {\n    text-align: right;\n}\n\n.editPlainingPopup .twothirdWidthBlock .dropdown-menu * {\n    text-align: center;\n}\n\ninput.smallInp {\n    width: 30%\n}\n\n.editPlainingPopup label,\n.editPlainingPopup .label {\n    color: #989897;\n}\n\n.editPlainingPopup .tooltip {\n    text-align: right;\n    color: #989897;\n    font-size: 11px;\n}\n\n.styledCheckbox {\n    width: 18px;\n    width: 18px;\n    position: relative;\n}\n\n.styledCheckbox label {\n    width: 18px;\n    height: 18px;\n    cursor: pointer;\n    position: absolute;\n    top: 0;\n    left: 0;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/checkedunchecked.png") + ") no-repeat 0 -17px;\n}\n\n.styledCheckbox input[type=checkbox] {\n    visibility: hidden;\n}\n\n.styledCheckbox input[type=checkbox]:checked + label {\n    background-position: 0 1px;\n}\n\n.userNameWrapp .datePicker {\n    background: #fff;\n    -webkit-border-raduis: 4px;\n    border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    border: 1px solid #ccc;\n}\n\n.userNameWrapp .datePicker span.pickerLabel {\n    color: #80807f;\n    font-size: 12px;\n    float: left;\n    text-transform: none;\n}\n\n.userNameWrapp .datePicker span {\n    float: right;\n    line-height: 14px;\n    text-transform: uppercase;\n}\n\n.userNameWrapp .datePicker .dropdown-menu span {\n    float: none;\n    line-height: 26px;\n}\n\n.userNameWrapp .datePicker .dropdown-toggle {\n    display: block;\n}\n\n.gantHeader .userNameWrapp {\n    padding: 0 15px 0 0;\n}\n\n.userNameWrapp .datePicker .dropdown {\n    padding: 5px 15px;\n    border-bottom: 1px solid #cdcccb;\n}\n\n.userNameWrapp .datePicker .dropdown:nth-last-of-type(1) {\n    border-bottom: 0 solid transparent;\n}\n\n.holiday {\n    position: absolute;\n    pointer-events: none;\n    display: block;\n    top: 0;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/holiday.png") + ") 50% 50% repeat rgba(216, 32, 35, .05);\n    height: 100%;\n    margin-left: 235px;\n}\n\n.ovHid {\n    overflow: hidden;\n}\n\n.globalTableWrapp {\n    position: relative;\n    padding-top: 115px;\n}\n\n.gantHeaderWrapp {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    padding-left: 10px;\n    padding-right: 10px;\n}\n\n.gantHeaderWrapp.fixed {\n    position: fixed;\n    z-index: 5999;\n    background: #e4e5e5;\n    padding: 0 20px;\n    padding-bottom: 20px;\n}\n.successMsg {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    z-index: 9999;\n    font-size: 20px;\n    text-align: center;\n}\n.text-danger {\n    clear: both;\n    padding-top: 5px;\n    display: block;\n}\n.cursor {\n    position: absolute;\n    top: -15px;\n    width: 0;\n    height: calc(100% + 15px);\n    border-left: 1px solid #c4e0a3;\n    border-right: 1px solid #e5f1d6;\n    pointer-events: none;\n}\n\n.cursor::before {\n    position: absolute;\n    content: \"\";\n    top: -5px;\n    border-color: #add581 transparent transparent;\n    -o-border-image: none;\n       border-image: none;\n    border-style: solid;\n    border-width: 9px 6px 6px;\n    height: 0;\n    margin-left: -6px;\n    width: 0;\n}\n\n.nowday {\n    position: absolute;\n    top: -15px;\n    width: 0;\n    height: calc(100% + 15px);\n    border-left: 1px solid #8cb1dd;\n    border-right: 1px solid #d1ddf1;\n    pointer-events: none;\n}\n\n.nowday::before {\n    position: absolute;\n    content: \"\";\n    top: -5px;\n    border-color: #2b98d4 transparent transparent;\n    -o-border-image: none;\n       border-image: none;\n    border-style: solid;\n    border-width: 9px 6px 6px;\n    height: 0;\n    margin-left: -6px;\n    width: 0;\n}\n\n.dropLegend .holidayLeg {\n    background: #fdf1eb;\n    /* Old browsers */\n    /* FF3.6+ */\n    /* Chrome,Safari4+ */\n    /* Chrome10+,Safari5.1+ */\n    /* Opera 11.10+ */\n    /* IE10+ */\n    background: linear-gradient(135deg, #fdf1eb 0%, #fdf1eb 26.6%, #fff 26.6%, #fff 36.6%, #fdf1eb 36.6%, #fdf1eb 63.2%, #fff 63.2%, #fff 73.2%, #fdf1eb 73.2%, #fdf1eb 100%);\n    /* W3C */\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#fdf1eb', endColorstr='#fff', GradientType=1);\n    /* IE6-9 fallback on horizontal gradient */\n    border: 1px solid #fdf1eb;\n}\n\n.dropLegend .lines {\n    margin: 0 13px 0 5px;\n    width: 6px;\n    height: 15px;\n    border-left: 2px solid #fff;\n    border-right: 2px solid #fff;\n    display: block;\n    float: left;\n}\n\n.dropLegend .lines.nowLeg {\n    border-top: 1px solid #2b98d4;\n    border-bottom: 1px solid #2b98d4;\n    background: #2b98d4;\n}\n\n.dropLegend .lines.cursorLeg {\n    border-top: 1px solid #add581;\n    border-bottom: 1px solid #add581;\n    background: #add581;\n}\n\n.projPercentField {\n    padding: 0;\n    width: 23px;\n    height: 20px;\n    border: none;\n    display: inline-block;\n    box-shadow: none;\n    color: inherit;\n    line-height: inherit;\n}\n\n.projPercentField[readonly] {\n    background: none;\n    text-align: right;\n}\n\n.saveLogs {\n    height: 360px;\n}\n\n.logsBtn {\n    display: block;\n    color: #989897;\n    font-size: 12px;\n    line-height: 26px;\n    text-decoration: none;\n    min-width: 90px;\n    margin: 0;\n    height: 28px;\n    font-weight: 400;\n    background: #fff;\n    border: 1px solid #ccc;\n    border-radius: 4px;\n    -webkit-border-radius: 4px;\n    -moz-border-radius: 4px;\n    box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    -webkit-box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    -moz-box-shadow: 0 1px 4px 0 rgba(2, 2, 2, 0.05);\n    text-align: center;\n    text-transform: uppercase;\n    float: right;\n    margin-left: 10px;\n}\n\n.cdk-global-overlay-wrapper .mat-dialog-container {\n    padding: 0;\n    border-radius: 5px;\n}\n\n.mat-input-underline {\n    display: none;\n}\n.mat-input-container {\n    float: right;\n}\n\n.mat-select {\n    padding-top: 0;\n    width: 100%;\n}\n.mat-select-value-text,\n.mat-select-placeholder {\n    font-size: 12px;\n}\napp-canvas-row button {\n    display: -moz-flex;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n}\n.bglayout:hover {\n    cursor: col-resize;\n}\n\n.mat-icon-button .mat-button-wrapper {\n    display: none!important;\n}\n\nmd-datepicker-toggle .mat-icon-button {\n    line-height: 34px;\n    background: url(" + __webpack_require__("../../../../../src/assets/images/calender.png") + ") no-repeat 0 50%;\n    width: 20px!important;\n    height: 20px!important;\n    border-radius: 0!important;\n}\n\napp-canvas-row {\n    display: block;\n    position: relative;\n}\n\n#copySvg {\n    pointer-events : none;\n}\n\n      rect.hbar {\n        -webkit-mask: url(#mask-stripe);\n                mask: url(#mask-stripe)\n      }\n\n      .overload {\n            fill: #f8aa92;\n      }\n", ""]);

// exports


/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map