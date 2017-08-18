webpackJsonp(["main"],{

/***/ "../../../../../src lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"wrapper\">\n\n  <!-- Main Header -->\n  <app-header></app-header>\n  <!-- Left side column. contains the logo and sidebar -->\n  <app-menu></app-menu>\n\n  <!-- Content Wrapper. Contains page content -->\n  <app-content></app-content>\n  <!-- /.content-wrapper -->\n\n  <!-- Main Footer -->\n  <app-footer></app-footer>\n\n  <!-- Control Sidebar -->\n  <app-sidebar></app-sidebar>\n</div>\n"

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

//three necessary elements of component: decorator, template, controller
//decorator
var AppComponent = (function () {
    function AppComponent() {
        this.title = 'Rick Huang';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
    // controller
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__content_content_component__ = __webpack_require__("../../../../../src/app/content/content.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__ = __webpack_require__("../../../../../src/app/menu/menu.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__stock_stock_manage_stock_manage_component__ = __webpack_require__("../../../../../src/app/stock/stock-manage/stock-manage.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__stars_stars_component__ = __webpack_require__("../../../../../src/app/stars/stars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/dashboard/dashboard.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__stock_stock_form_stock_form_component__ = __webpack_require__("../../../../../src/app/stock/stock-form/stock-form.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__stock_stock_service__ = __webpack_require__("../../../../../src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__stock_stock_filter_pipe__ = __webpack_require__("../../../../../src/app/stock/stock-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__header_socket_service__ = __webpack_require__("../../../../../src/app/header/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


















var routeConfig = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'stock', component: __WEBPACK_IMPORTED_MODULE_10__stock_stock_manage_stock_manage_component__["a" /* StockManageComponent */] },
    { path: 'dashboard', component: __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */] },
    { path: 'stock/:id', component: __WEBPACK_IMPORTED_MODULE_14__stock_stock_form_stock_form_component__["a" /* StockFormComponent */] }
];
// decorator
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}()); // controller
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_6__sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_7__footer_footer_component__["a" /* FooterComponent */],
            __WEBPACK_IMPORTED_MODULE_8__content_content_component__["a" /* ContentComponent */],
            __WEBPACK_IMPORTED_MODULE_9__menu_menu_component__["a" /* MenuComponent */],
            __WEBPACK_IMPORTED_MODULE_10__stock_stock_manage_stock_manage_component__["a" /* StockManageComponent */],
            __WEBPACK_IMPORTED_MODULE_11__stars_stars_component__["a" /* StarsComponent */],
            __WEBPACK_IMPORTED_MODULE_13__dashboard_dashboard_component__["a" /* DashboardComponent */],
            __WEBPACK_IMPORTED_MODULE_14__stock_stock_form_stock_form_component__["a" /* StockFormComponent */],
            __WEBPACK_IMPORTED_MODULE_16__stock_stock_filter_pipe__["a" /* StockFilterPipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_12__angular_router__["d" /* RouterModule */].forRoot(routeConfig)
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_15__stock_stock_service__["b" /* StockService */], __WEBPACK_IMPORTED_MODULE_17__header_socket_service__["a" /* SocketService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]] // main component
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/content/content.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/content/content.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"content-wrapper\">\n  <!-- Content Header (Page header) -->\n  <section class=\"content-header\">\n    <h1>\n      {{pageTitle}}\n      <small>{{pageDesc}}</small>\n    </h1>\n    <ol class=\"breadcrumb\">\n      <li><a href=\"#\"><i class=\"fa fa-dashboard\"></i> Level</a></li>\n      <li class=\"active\">Here</li>\n    </ol>\n  </section>\n\n  <!-- Main content -->\n  <section class=\"content container-fluid\">\n\n    <router-outlet></router-outlet>\n    <!--<app-stock-manage></app-stock-manage>-->\n\n  </section>\n  <!-- /.content -->\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/content/content.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_filter__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContentComponent = (function () {
    function ContentComponent(router) {
        var _this = this;
        this.router = router;
        router.events
            .filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* NavigationEnd */]; })
            .subscribe(function (event) {
            if (event.url == '/dashboard') {
                _this.pageTitle = 'HomePage';
                _this.pageDesc = 'This is homepage';
            }
            else if (event.url == '/stock') {
                _this.pageTitle = 'Stock Management';
                _this.pageDesc = 'Deal with this stock';
            }
        });
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-content',
        template: __webpack_require__("../../../../../src/app/content/content.component.html"),
        styles: [__webpack_require__("../../../../../src/app/content/content.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], ContentComponent);

var _a;
//# sourceMappingURL=content.component.js.map

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  dashboard works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardComponent; });
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

var DashboardComponent = (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    return DashboardComponent;
}());
DashboardComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-dashboard',
        template: __webpack_require__("../../../../../src/app/dashboard/dashboard.component.html"),
        styles: [__webpack_require__("../../../../../src/app/dashboard/dashboard.component.css")]
    }),
    __metadata("design:paramtypes", [])
], DashboardComponent);

//# sourceMappingURL=dashboard.component.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"main-footer\">\n  <!-- To the right -->\n  <div class=\"pull-right hidden-xs\">\n    Anything you want\n  </div>\n  <!-- Default to the left -->\n  <strong>Copyright &copy; 2016 <a href=\"#\">Rick Huang</a>.</strong> All rights reserved.\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
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

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<header class=\"main-header\">\n\n  <!-- Logo -->\n  <a href=\"index2.html\" class=\"logo\">\n    <!-- mini logo for sidebar mini 50x50 pixels -->\n    <span class=\"logo-mini\"><b>S</b>NG</span>\n    <!-- logo for regular state and mobile devices -->\n    <span class=\"logo-lg\"><b>Stock&nbsp;</b>Ng2</span>\n  </a>\n\n  <!-- Header Navbar -->\n  <nav class=\"navbar navbar-static-top\" role=\"navigation\">\n    <!-- Sidebar toggle button-->\n    <a href=\"#\" class=\"sidebar-toggle\" data-toggle=\"offcanvas\" role=\"button\">\n      <span class=\"sr-only\">Toggle navigation</span>\n    </a>\n    <!-- Navbar Right Menu -->\n    <div class=\"navbar-custom-menu\">\n      <ul class=\"nav navbar-nav\">\n        <!-- Messages: style can be found in dropdown.less-->\n        <li class=\"dropdown messages-menu\">\n          <!-- Menu toggle button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-envelope-o\"></i>\n            <span class=\"label label-success\">{{messageCount}}</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 4 messages</li>\n            <li>\n              <!-- inner menu: contains the messages -->\n              <ul class=\"menu\">\n                <li><!-- start message -->\n                  <a href=\"#\">\n                    <div class=\"pull-left\">\n                      <!-- User Image -->\n                      <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n                    </div>\n                    <!-- Message title and timestamp -->\n                    <h4>\n                      Support Team\n                      <small><i class=\"fa fa-clock-o\"></i> 5 mins</small>\n                    </h4>\n                    <!-- The message -->\n                    <p>Why not buy a new awesome theme?</p>\n                  </a>\n                </li>\n                <!-- end message -->\n              </ul>\n              <!-- /.menu -->\n            </li>\n            <li class=\"footer\"><a href=\"#\">See All Messages</a></li>\n          </ul>\n        </li>\n        <!-- /.messages-menu -->\n\n        <!-- Notifications Menu -->\n        <li class=\"dropdown notifications-menu\">\n          <!-- Menu toggle button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-bell-o\"></i>\n            <span class=\"label label-warning\">10</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 10 notifications</li>\n            <li>\n              <!-- Inner Menu: contains the notifications -->\n              <ul class=\"menu\">\n                <li><!-- start notification -->\n                  <a href=\"#\">\n                    <i class=\"fa fa-users text-aqua\"></i> 5 new members joined today\n                  </a>\n                </li>\n                <!-- end notification -->\n              </ul>\n            </li>\n            <li class=\"footer\"><a href=\"#\">View all</a></li>\n          </ul>\n        </li>\n        <!-- Tasks Menu -->\n        <li class=\"dropdown tasks-menu\">\n          <!-- Menu Toggle Button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <i class=\"fa fa-flag-o\"></i>\n            <span class=\"label label-danger\">9</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <li class=\"header\">You have 9 tasks</li>\n            <li>\n              <!-- Inner menu: contains the tasks -->\n              <ul class=\"menu\">\n                <li><!-- Task item -->\n                  <a href=\"#\">\n                    <!-- Task title and progress text -->\n                    <h3>\n                      Design some buttons\n                      <small class=\"pull-right\">20%</small>\n                    </h3>\n                    <!-- The progress bar -->\n                    <div class=\"progress xs\">\n                      <!-- Change the css width attribute to simulate progress -->\n                      <div class=\"progress-bar progress-bar-aqua\" style=\"width: 20%\" role=\"progressbar\"\n                           aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                        <span class=\"sr-only\">20% Complete</span>\n                      </div>\n                    </div>\n                  </a>\n                </li>\n                <!-- end task item -->\n              </ul>\n            </li>\n            <li class=\"footer\">\n              <a href=\"#\">View all tasks</a>\n            </li>\n          </ul>\n        </li>\n        <!-- User Account Menu -->\n        <li class=\"dropdown user user-menu\">\n          <!-- Menu Toggle Button -->\n          <a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\n            <!-- The user image in the navbar-->\n            <img src=\"assets/img/user2-160x160.jpg\" class=\"user-image\" alt=\"User Image\">\n            <!-- hidden-xs hides the username on small devices so only the image appears. -->\n            <span class=\"hidden-xs\">Rick Huang</span>\n          </a>\n          <ul class=\"dropdown-menu\">\n            <!-- The user image in the menu -->\n            <li class=\"user-header\">\n              <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n\n              <p>\n                Rick Huang - Web Developer\n                <small>Member since Nov. 2012</small>\n              </p>\n            </li>\n            <!-- Menu Body -->\n            <li class=\"user-body\">\n              <div class=\"row\">\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Followers</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Sales</a>\n                </div>\n                <div class=\"col-xs-4 text-center\">\n                  <a href=\"#\">Friends</a>\n                </div>\n              </div>\n              <!-- /.row -->\n            </li>\n            <!-- Menu Footer-->\n            <li class=\"user-footer\">\n              <div class=\"pull-left\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Profile</a>\n              </div>\n              <div class=\"pull-right\">\n                <a href=\"#\" class=\"btn btn-default btn-flat\">Sign out</a>\n              </div>\n            </li>\n          </ul>\n        </li>\n        <!-- Control Sidebar Toggle Button -->\n        <li>\n          <a href=\"#\" data-toggle=\"control-sidebar\"><i class=\"fa fa-gears\"></i></a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n</header>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socket_service__ = __webpack_require__("../../../../../src/app/header/socket.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeaderComponent = (function () {
    function HeaderComponent(socketService) {
        this.socketService = socketService;
        this.messageCount = 0;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.createObservableSocket("ws://localhost:3008")
            .map(function (event) { return JSON.parse(event); })
            .subscribe(function (event) { return _this.messageCount = event.messageCount; });
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/socket.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
    }
    SocketService.prototype.createObservableSocket = function (url) {
        var _this = this;
        this.ws = new WebSocket(url);
        return new __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"](function (observer) {
            _this.ws.onmessage = function (event) { return observer.next(event.data); };
            _this.ws.onerror = function (event) { return observer.error(event); };
            _this.ws.onclose = function (event) { return observer.complete(); };
        });
    };
    return SocketService;
}());
SocketService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"main-sidebar\">\n\n  <!-- sidebar: style can be found in sidebar.less -->\n  <section class=\"sidebar\">\n\n    <!-- Sidebar user panel (optional) -->\n    <div class=\"user-panel\">\n      <div class=\"pull-left image\">\n        <img src=\"assets/img/user2-160x160.jpg\" class=\"img-circle\" alt=\"User Image\">\n      </div>\n      <div class=\"pull-left info\">\n        <p>Rick Huang</p>\n        <!-- Status -->\n        <a href=\"#\"><i class=\"fa fa-circle text-success\"></i>Online</a>\n      </div>\n    </div>\n\n    <!-- search form (Optional) -->\n    <form action=\"#\" method=\"get\" class=\"sidebar-form\">\n      <div class=\"input-group\">\n        <input type=\"text\" name=\"q\" class=\"form-control\" placeholder=\"Search...\">\n        <span class=\"input-group-btn\">\n              <button type=\"submit\" name=\"search\" id=\"search-btn\" class=\"btn btn-flat\"><i class=\"fa fa-search\"></i>\n              </button>\n            </span>\n      </div>\n    </form>\n    <!-- /.search form -->\n\n    <!-- Sidebar Menu -->\n    <ul class=\"sidebar-menu\" data-widget=\"tree\">\n\n      <li class=\"header\">HEADER</li>\n      <!-- Optionally, you can add icons to the links -->\n      <li *ngFor=\"let menu of menus\" [class.active]=\"currentMenuId == menu.id\" >\n        <a href=\"javascript:;\" (click)=\"nav(menu)\">\n          <i class=\"fa fa-link\"></i>\n          <span>{{menu.name}}</span>\n        </a>\n      </li>\n\n\n      <!--<li><a href=\"javascript:;\" (click)=\"nav('stock')\" ><i class=\"fa fa-link\"></i> <span>Stock Manage</span></a></li>-->\n      <li class=\"treeview\">\n        <a href=\"#\"><i class=\"fa fa-link\"></i> <span>Multilevel</span>\n          <span class=\"pull-right-container\">\n                <i class=\"fa fa-angle-left pull-right\"></i>\n              </span>\n        </a>\n        <ul class=\"treeview-menu\">\n          <li><a href=\"#\">Link in level 2</a></li>\n          <li><a href=\"#\">Link in level 2</a></li>\n        </ul>\n      </li>\n    </ul>\n    <!-- /.sidebar-menu -->\n  </section>\n  <!-- /.sidebar -->\n</aside>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/menu/menu.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MenuComponent; });
/* unused harmony export Menu */
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


var MenuComponent = (function () {
    function MenuComponent(router) {
        this.router = router;
    }
    MenuComponent.prototype.ngOnInit = function () {
        this.menus = [
            new Menu(1, 'HomePage', 'dashboard'),
            new Menu(2, 'Stock Manage', 'stock')
        ];
    };
    MenuComponent.prototype.nav = function (menu) {
        this.router.navigateByUrl(menu.link);
        this.currentMenuId = menu.id;
    };
    return MenuComponent;
}());
MenuComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-menu',
        template: __webpack_require__("../../../../../src/app/menu/menu.component.html"),
        styles: [__webpack_require__("../../../../../src/app/menu/menu.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object])
], MenuComponent);

var Menu = (function () {
    function Menu(id, name, link) {
        this.id = id;
        this.name = name;
        this.link = link;
    }
    return Menu;
}());

var _a;
//# sourceMappingURL=menu.component.js.map

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<aside class=\"control-sidebar control-sidebar-dark\">\n  <!-- Create the tabs -->\n  <ul class=\"nav nav-tabs nav-justified control-sidebar-tabs\">\n    <li class=\"active\"><a href=\"#control-sidebar-home-tab\" data-toggle=\"tab\"><i class=\"fa fa-home\"></i></a></li>\n    <li><a href=\"#control-sidebar-settings-tab\" data-toggle=\"tab\"><i class=\"fa fa-gears\"></i></a></li>\n  </ul>\n  <!-- Tab panes -->\n  <div class=\"tab-content\">\n    <!-- Home tab content -->\n    <div class=\"tab-pane active\" id=\"control-sidebar-home-tab\">\n      <h3 class=\"control-sidebar-heading\">Recent Activity</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:;\">\n            <i class=\"menu-icon fa fa-birthday-cake bg-red\"></i>\n\n            <div class=\"menu-info\">\n              <h4 class=\"control-sidebar-subheading\">Langdon's Birthday</h4>\n\n              <p>Will be 23 on April 24th</p>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n      <h3 class=\"control-sidebar-heading\">Tasks Progress</h3>\n      <ul class=\"control-sidebar-menu\">\n        <li>\n          <a href=\"javascript:;\">\n            <h4 class=\"control-sidebar-subheading\">\n              Custom Template Design\n              <span class=\"pull-right-container\">\n                    <span class=\"label label-danger pull-right\">70%</span>\n                  </span>\n            </h4>\n\n            <div class=\"progress progress-xxs\">\n              <div class=\"progress-bar progress-bar-danger\" style=\"width: 70%\"></div>\n            </div>\n          </a>\n        </li>\n      </ul>\n      <!-- /.control-sidebar-menu -->\n\n    </div>\n    <!-- /.tab-pane -->\n    <!-- Stats tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-stats-tab\">Stats Tab Content</div>\n    <!-- /.tab-pane -->\n    <!-- Settings tab content -->\n    <div class=\"tab-pane\" id=\"control-sidebar-settings-tab\">\n      <form method=\"post\">\n        <h3 class=\"control-sidebar-heading\">General Settings</h3>\n\n        <div class=\"form-group\">\n          <label class=\"control-sidebar-subheading\">\n            Report panel usage\n            <input type=\"checkbox\" class=\"pull-right\" checked>\n          </label>\n\n          <p>\n            Some information about this general settings option\n          </p>\n        </div>\n        <!-- /.form-group -->\n      </form>\n    </div>\n    <!-- /.tab-pane -->\n  </div>\n</aside>\n<!-- /.control-sidebar -->\n<!-- Add the sidebar's background. This div must be placed\nimmediately after the control sidebar -->\n<div class=\"control-sidebar-bg\"></div>\n"

/***/ }),

/***/ "../../../../../src/app/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
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

var SidebarComponent = (function () {
    function SidebarComponent() {
    }
    SidebarComponent.prototype.ngOnInit = function () {
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SidebarComponent);

//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.html":
/***/ (function(module, exports) {

module.exports = "\n<span *ngFor=\"let star of stars; let i = index\" class=\"glyphicon glyphicon-star\"\n[class.glyphicon-star-empty]=\"star\" (click)=\"clickStar(i)\"></span>\n"

/***/ }),

/***/ "../../../../../src/app/stars/stars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StarsComponent; });
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

var StarsComponent = (function () {
    function StarsComponent() {
        this.readonly = true;
        // it means that the rating is import from others
        this.rating = 0;
        // when click save to emit the result to outer
        this.ratingChange = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    StarsComponent.prototype.ngOnChanges = function (changes) {
        this.stars = [];
        for (var i = 1; i <= 5; i++) {
            this.stars.push(i > this.rating);
        }
    };
    StarsComponent.prototype.ngOnInit = function () {
        // this.stars = [];
        //
        // for (let i = 1; i <= 5; i++) {
        //   this.stars.push(i > this.rating);
        // }
        // this.stars = [false, false, true, true, true];
    };
    StarsComponent.prototype.clickStar = function (index) {
        if (!this.readonly) {
            this.rating = index + 1;
            // this.stars = [];
            //
            // for (let i = 1; i <= 5; i++) {
            //   this.stars.push(i > this.rating);
            // }
            this.ratingChange.emit(this.rating);
        }
    };
    return StarsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Boolean)
], StarsComponent.prototype, "readonly", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Number)
], StarsComponent.prototype, "rating", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]) === "function" && _a || Object)
], StarsComponent.prototype, "ratingChange", void 0);
StarsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stars',
        template: __webpack_require__("../../../../../src/app/stars/stars.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stars/stars.component.css")]
    }),
    __metadata("design:paramtypes", [])
], StarsComponent);

var _a;
//# sourceMappingURL=stars.component.js.map

/***/ }),

/***/ "../../../../../src/app/stock/stock-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var StockFilterPipe = (function () {
    function StockFilterPipe() {
    }
    StockFilterPipe.prototype.transform = function (list, field, keyword) {
        if (!field || !keyword) {
            return list;
        }
        return list.filter(function (item) {
            var itemFieldValue = item[field].toLowerCase();
            return itemFieldValue.indexOf(keyword) >= 0;
        });
    };
    return StockFilterPipe;
}());
StockFilterPipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'stockFilter'
    })
], StockFilterPipe);

//# sourceMappingURL=stock-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/stock/stock-form/stock-form.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock/stock-form/stock-form.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box box-info\">\n  <div class=\"box-header with-border\">\n    <h3 class=\"box-title\">Stock Information</h3>\n  </div>\n  <!-- /.box-header -->\n  <!-- form start -->\n\n  <!-- add [formGroup]=\"formModel\" to let angular control the whole form -->\n  <form [formGroup]=\"formModel\" class=\"form-horizontal\">\n\n    <div class=\"box-body\">\n\n      <!-- in order to validate the form input, we need to add some rules -->\n      <div class=\"form-group\" [class.has-error]=\"formModel.get('name').touched && ( formModel.hasError('minlength', 'name') || formModel.hasError('required', 'name') )\">\n        <label for=\"name\" class=\"col-sm-2 control-label\">Stock Name</label>\n\n        <div class=\"col-sm-8\">\n          <input formControlName=\"name\" type=\"text\" class=\"form-control\" id=\"name\" placeholder=\"Stock Name\">\n        </div>\n\n        <!--if the input invalid, it will show some info-->\n        <span class=\"help-block\" [class.hidden]=\"formModel.get('name').untouched || !formModel.hasError('required', 'name')\">\n          require stock name\n        </span>\n        <span class=\"help-block\" [class.hidden]=\"formModel.get('name').untouched || !formModel.hasError('minlength', 'name')\">\n          at least input 3 letters\n        </span>\n      </div>\n\n      <div class=\"form-group\" [class.has-error]=\"formModel.hasError('required', 'price')\">\n        <label for=\"price\" class=\"col-sm-2 control-label\">Stock Price</label>\n\n        <div class=\"col-sm-6\">\n          <input formControlName=\"price\" type=\"number\" class=\"form-control\" id=\"price\" placeholder=\"Stock Price\">\n        </div>\n\n        <span [class.hidden]=\"!formModel.hasError('required', 'price')\">\n          require stock price\n        </span>\n\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">Stock Rating</label>\n\n        <div class=\"col-sm-10\">\n\n          <app-stars [readonly]=\"false\" [(rating)]=\"stock.rating\"></app-stars>\n\n        </div>\n      </div>\n\n      <div class=\"form-group\">\n        <label class=\"col-sm-2 control-label\">Stock Description</label>\n\n        <div class=\"col-sm-10\">\n          <textarea formControlName=\"desc\" class=\"form-control\" rows=\"5\"></textarea>\n        </div>\n      </div>\n\n\n      <!-- the self defined validator bind to checkbox group-->\n      <div class=\"form-group\" [class.has-error]=\"formModel.get('categories').touched && formModel.hasError('categoriesLength', 'categories')\">\n        <label class=\"col-sm-2 control-label\">Stock Category</label>\n\n        <div class=\"col-sm-10\">\n\n\n          <!--here means this array match from fb.array -->\n          <div class=\"row\" formArrayName=\"categories\">\n\n            <div *ngFor=\"let category of categories; let i = index\" class=\"col-sm-2\">\n\n              <div class=\"checkbox\">\n                <label>\n                  <input [formControlName]=\"i\" type=\"checkbox\"> {{category}} <!-- here formControlName is variable but not name. -->\n                </label>\n              </div>\n            </div>\n\n\n            <!--<div class=\"col-sm-2\">-->\n\n              <!--<div class=\"checkbox\">-->\n                <!--<label>-->\n                  <!--<input type=\"checkbox\"> Elec-->\n                <!--</label>-->\n              <!--</div>-->\n            <!--</div>-->\n\n            <!--<div class=\"col-sm-2\">-->\n\n              <!--<div class=\"checkbox\">-->\n                <!--<label>-->\n                  <!--<input type=\"checkbox\"> Finance-->\n                <!--</label>-->\n              <!--</div>-->\n            <!--</div>-->\n\n          </div>\n\n          <span [class.hidden]=\"formModel.get('categories').untouched || !formModel.hasError('categoriesLength', 'categories')\">\n            need check\n          </span>\n\n        </div>\n      </div>\n    </div>\n    <!-- /.box-body -->\n    <div class=\"box-footer\">\n      <button (click)=\"cancel()\" type=\"submit\" class=\"btn btn-default\">Cancel</button>\n\n      <!--when formModel is invalid-->\n      <button (click)=\"save()\" [disabled]=\"formModel.invalid\" type=\"submit\" class=\"btn btn-info pull-right\">Save</button>\n    </div>\n    <!-- /.box-footer -->\n  </form>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "../../../../../src/app/stock/stock-form/stock-form.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockFormComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__stock_service__ = __webpack_require__("../../../../../src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StockFormComponent = (function () {
    //
    function StockFormComponent(routeInfo, stockService, router) {
        this.routeInfo = routeInfo;
        this.stockService = stockService;
        this.router = router;
        this.stock = new __WEBPACK_IMPORTED_MODULE_1__stock_service__["a" /* Stock */](0, "", 0, 0, "", []);
        this.categories = ["IT", "Elec", "Finance"]; // used to produce three checkboxes and ngFor them
    }
    StockFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var stockId = this.routeInfo.snapshot.params["id"];
        //  create the form data constructure
        var fb = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormBuilder */]();
        // fb.group means the whole form
        this.formModel = fb.group({
            //define the initial name, and validators required and minlength, and bind to html by formControlName="name"
            name: ['', [__WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].minLength(3)]],
            price: ['', __WEBPACK_IMPORTED_MODULE_3__angular_forms__["e" /* Validators */].required],
            desc: [''],
            // match with stock.service.ts, categories: Array<string>)
            categories: fb.array([
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](false),
                new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */](false)
                //  the return is boolean value, if true, will checked.
            ], this.categoriesSelectValidator)
        });
        // this.stock = this.stockService.getStock(stockId);
        //  here need to update code to get the data from server.ts
        this.stockService.getStock(stockId).subscribe(function (data) {
            _this.stock = data;
            _this.formModel.reset({
                name: data.name,
                price: data.price,
                desc: data.desc,
                categories: [
                    data.categories.indexOf(_this.categories[0]) != -1,
                    data.categories.indexOf(_this.categories[1]) != -1,
                    data.categories.indexOf(_this.categories[2]) != -1
                ]
            });
        } // this is the async callback, so maybe can not get the data right now
        );
        /*
    
      //  create the form data constructure
        let fb = new FormBuilder();
    
        // fb.group means the whole form
        this.formModel = fb.group(
    
          {
            //define the initial name, and validators required and minlength, and bind to html by formControlName="name"
            name: [this.stock.name, [Validators.required, Validators.minLength(3)]],
            price: [this.stock.price, Validators.required],
            desc: [this.stock.desc],
    
            // match with stock.service.ts, categories: Array<string>)
            categories: fb.array([  // using fb.array to build the array data structure
              new FormControl(this.stock.categories.indexOf(this.categories[0]) != -1), // used to confirm whether the selected stock has the dedicated category
              new FormControl(this.stock.categories.indexOf(this.categories[1]) != -1),
              new FormControl(this.stock.categories.indexOf(this.categories[2]) != -1)
            //  the return is boolean value, if true, will checked.
            ], this.categoriesSelectValidator)
          }
        );
    
      */
    };
    // define one validator to confirm whether none checkbox is checked
    StockFormComponent.prototype.categoriesSelectValidator = function (control) {
        var valid = false;
        control.controls.forEach(function (control) {
            if (control.value) {
                valid = true;
            }
        });
        if (valid) {
            return null;
        }
        else {
            return { categoriesLength: true };
        }
    };
    StockFormComponent.prototype.cancel = function () {
        this.router.navigateByUrl('/stock');
    };
    StockFormComponent.prototype.save = function () {
        console.log(this.stock.rating);
        // assign the 'stock.rating' value from 'stock.service.ts' to this.formModel.value.rating,
        this.formModel.value.rating = this.stock.rating;
        // transfer the boolean array to string array, because the stock info categroy is string type array
        var index = 0, stringCategories = [];
        for (var i = 0; i < 3; i++) {
            if (this.formModel.value.categories[i]) {
                stringCategories[index++] = this.categories[i];
            }
        }
        this.formModel.value.categories = stringCategories;
        // check the form name input value
        console.log(this.formModel.value);
        // this.router.navigateByUrl('/stock');
    };
    return StockFormComponent;
}());
StockFormComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stock-form',
        template: __webpack_require__("../../../../../src/app/stock/stock-form/stock-form.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stock/stock-form/stock-form.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__stock_service__["b" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__stock_service__["b" /* StockService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["c" /* Router */]) === "function" && _c || Object])
], StockFormComponent);

var _a, _b, _c;
//# sourceMappingURL=stock-form.component.js.map

/***/ }),

/***/ "../../../../../src/app/stock/stock-manage/stock-manage.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".percent-bar {\n  padding-top:30px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/stock/stock-manage/stock-manage.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"box\">\n  <div class=\"box-header with-border\">\n    <a class=\"btn btn-success btn-sm\" (click)=\"create()\"><span class=\"glyphicon glyphicon-plus\"></span>Create</a>\n\n    <div class=\"box-tools\">\n      <div class=\"input-group input-group-sm\" style=\"width: 150px; margin-top: 8px\">\n        <input [formControl]=\"nameFilter\"  type=\"text\" name=\"table_search\" class=\"form-control pull-right\" placeholder=\"Stock Name\">\n\n        <div class=\"input-group-btn\">\n          <button type=\"submit\" class=\"btn btn-default\"><i class=\"fa fa-search\"></i></button>\n        </div>\n      </div>\n    </div>\n\n  </div>\n  <!-- /.box-header -->\n  <div class=\"box-body\">\n    <table class=\"table table-bordered\">\n      <tr>\n        <th style=\"width: 10px\">#</th>\n        <th>Stock Name</th>\n        <th>Stock Price</th>\n        <th>Stock Rating</th>\n        <th>Operate</th>\n      </tr>\n\n      <!--<tr *ngFor=\"let stock of stocks | stockFilter: 'name' : keywordwork; let i = index;\">-->\n      <tr *ngFor=\"let stock of stocks | async | stockFilter: 'name' : keywordwork ; let i = index; \">\n        <td>{{i + 1}}</td>\n        <td>{{stock.name}}</td>\n        <td>{{stock.price}}</td>\n        <!--<td>{{stock.rating}}</td>-->\n\n        <!-- this is the imported property of 'rating'-->\n        <td><app-stars [rating]=\"stock.rating\"></app-stars></td>\n\n        <!--<td>-->\n          <!--<div class=\"progress progress-xs\">-->\n            <!--<div class=\"progress-bar progress-bar-yellow\" [style.width]=stock.percent></div>-->\n          <!--</div>-->\n        <!--</td>-->\n\n        <td>\n          <a class=\"btn btn-primary btn-xs\" (click)=\"update(stock)\" ><span class=\"glyphicon glyphicon-pencil\"></span>Modify</a>\n          <a class=\"btn btn-danger btn-xs\"><span class=\"glyphicon glyphicon-remove\"></span>Delete</a>\n        </td>\n      </tr>\n\n    </table>\n  </div>\n  <!-- /.box-body -->\n  <div class=\"box-footer clearfix\">\n    <ul class=\"pagination pagination-sm no-margin pull-right\">\n      <li><a href=\"#\">&laquo;</a></li>\n      <li><a href=\"#\">1</a></li>\n      <li><a href=\"#\">2</a></li>\n      <li><a href=\"#\">3</a></li>\n      <li><a href=\"#\">&raquo;</a></li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/stock/stock-manage/stock-manage.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StockManageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stock_service__ = __webpack_require__("../../../../../src/app/stock/stock.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__ = __webpack_require__("../../../../rxjs/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var StockManageComponent = (function () {
    function StockManageComponent(router, stockService) {
        this.router = router;
        this.stockService = stockService;
        // for the input rxjs
        this.nameFilter = new __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* FormControl */]();
    }
    // call it when initiating page
    StockManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.stocks = this.stockService.getStocks();
        this.nameFilter.valueChanges
            .debounceTime(500) // from 'rxjs/Rx'
            .subscribe(function (value) { return _this.keywordwork = value; });
    };
    StockManageComponent.prototype.create = function () {
        this.router.navigateByUrl('/stock/0');
    };
    StockManageComponent.prototype.update = function (stock) {
        this.router.navigateByUrl('/stock/' + stock.id);
    };
    return StockManageComponent;
}());
StockManageComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'app-stock-manage',
        template: __webpack_require__("../../../../../src/app/stock/stock-manage/stock-manage.component.html"),
        styles: [__webpack_require__("../../../../../src/app/stock/stock-manage/stock-manage.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__stock_service__["b" /* StockService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__stock_service__["b" /* StockService */]) === "function" && _b || Object])
], StockManageComponent);

var _a, _b;
//# sourceMappingURL=stock-manage.component.js.map

/***/ }),

/***/ "../../../../../src/app/stock/stock.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return StockService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Stock; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StockService = (function () {
    function StockService(http) {
        this.http = http;
    }
    /*
  
    getStocks(): Stock[] {
      return this.stocks;
    }
  
    getStock(id: number): Stock {
  
      var stock = this.stocks.find(stock => stock.id == id);
  
      // for the 'create' button
      if (!stock) {
        stock = new Stock(0, "", 0, 0, "", "", []);
      }
  
      return stock;
    }
  
    */
    StockService.prototype.getStocks = function () {
        return this.http.get('/api/stock').map(function (res) { return res.json(); });
    };
    StockService.prototype.getStock = function (id) {
        return this.http.get('/api/stock/' + id).map(function (res) { return res.json(); });
    };
    return StockService;
}());
StockService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["C" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]) === "function" && _a || Object])
], StockService);

var Stock = (function () {
    function Stock(id, name, price, rating, desc, categories) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.rating = rating;
        this.desc = desc;
        this.categories = categories;
    }
    return Stock;
}());

var _a;
/*
private stocks:  Stock[] = [
  new Stock(1, 'the 1st one', 1.90, 3.5, ((3.5/5)*100).toFixed(2)  + '%', 'this is the first one', ['IT', 'Elec']),
  new Stock(2, 'the 2nd one', 1.40, 4.5, ((4.5/5)*100).toFixed(2)  + '%', 'this is the second one', ['Finance', 'Elec']),
  new Stock(3, 'the 3rd one', 1.30, 1.5, ((1.5/5)*100).toFixed(2)  + '%', 'this is the third one', ['IT', 'Finance']),
  new Stock(4, 'the 4th one', 3.90, 3.0, ((3.0/5)*100).toFixed(2)  + '%', 'this is the fourth one', ['IT', 'Elec']),
  new Stock(5, 'the 5th one', 2.40, 4.5, ((4.5/5)*100).toFixed(2)  + '%', 'this is the fifth one', ['Finance', 'Elec']),
  new Stock(6, 'the 6th one', 1.70, 2.0, ((2.0/5)*100).toFixed(2)  + '%', 'this is the sixth one', ['IT', 'Elec']),
  new Stock(7, 'the 7th one', 6.80, 3.0, ((3.0/5)*100).toFixed(2)  + '%', 'this is the seventh one', ['IT', 'Finance']),
  new Stock(8, 'the 8th one', 8.50, 5.0, ((5.0/5)*100).toFixed(2)  + '%', 'this is the eighth one', ['IT', 'Elec']),
];

*/
//# sourceMappingURL=stock.service.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__polyfills_ts__ = __webpack_require__("../../../../../src/polyfills.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
 // compatible with older browsers
 // close angular developement mode
 // tell ng to run which module to start app
 // main module
 // config the different environment in pc or mobile
if (__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_23" /* enableProdMode */])(); // if it is production, will close development mode
}
Object(__WEBPACK_IMPORTED_MODULE_2__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]); // start the main module in browsers
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../../src/polyfills.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__ = __webpack_require__("../../../../core-js/es6/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_core_js_es6_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__ = __webpack_require__("../../../../core-js/es7/reflect.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_core_js_es7_reflect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__ = __webpack_require__("../../../../zone.js/dist/zone.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_zone_js_dist_zone__);
/**
 * This file includes polyfills needed by Angular and is loaded before the app.
 * You can add your own extra polyfills to this file.
 *
 * This file is divided into 2 sections:
 *   1. Browser polyfills. These are applied before loading ZoneJS and are sorted by browsers.
 *   2. Application imports. Files imported after ZoneJS that should be loaded before your main
 *      file.
 *
 * The current setup is for so-called "evergreen" browsers; the last versions of browsers that
 * automatically update themselves. This includes Safari >= 10, Chrome >= 55 (including Opera),
 * Edge >= 13 on the desktop, and iOS 10 and Chrome on mobile.
 *
 * Learn more in https://angular.io/docs/ts/latest/guide/browser-support.html
 */
/***************************************************************************************************
 * BROWSER POLYFILLS
 */
/** IE9, IE10 and IE11 requires all of the following polyfills. **/
// import 'core-js/es6/symbol';
// import 'core-js/es6/object';
// import 'core-js/es6/function';
// import 'core-js/es6/parse-int';
// import 'core-js/es6/parse-float';
// import 'core-js/es6/number';
// import 'core-js/es6/math';
// import 'core-js/es6/string';
// import 'core-js/es6/date';
// import 'core-js/es6/array';
// import 'core-js/es6/regexp';
// import 'core-js/es6/map';
// import 'core-js/es6/weak-map';
// import 'core-js/es6/set';
/** IE10 and IE11 requires the following for NgClass support on SVG elements */
// import 'classlist.js';  // Run `npm install --save classlist.js`.
/** Evergreen browsers require these. **/


/**
 * Required to support Web Animations `@angular/animation`.
 * Needed for: All but Chrome, Firefox and Opera. http://caniuse.com/#feat=web-animation
 **/
// import 'web-animations-js';  // Run `npm install --save web-animations-js`.
/***************************************************************************************************
 * Zone JS is required by Angular itself.
 */
 // Included with Angular CLI.
/***************************************************************************************************
 * APPLICATION IMPORTS
 */
/**
 * Date, currency, decimal and percent pipes.
 * Needed for: All but Chrome, Firefox, Edge, IE11 and Safari 10
 */
// import 'intl';  // Run `npm install --save intl`.
/**
 * Need to import at least one locale-data with intl.
 */
// import 'intl/locale-data/jsonp/en';
//# sourceMappingURL=polyfills.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map