webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<img src=\"https://github.com/Zackazt/Tablr/blob/master/logo.png?raw=true\" style=\"width: 150px; margin-left: calc(50% - 350px); margin-bottom: 15px; margin-top: 10px;\">\r\n<br>\r\n<settings></settings>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
        this.columns = [
            {
                'visible': 'false',
                'label': null,
                'width': '30',
                'key': 'rowHeaderIndex',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Thread ID',
                'width': '87',
                'key': 'ThreadId',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Thread Priority',
                'width': '87',
                'key': 'ThreadPriority',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Max Cpu Utilization',
                'width': '87',
                'key': 'MaxCpuUtilization',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Cpu Utilization',
                'width': '87',
                'key': 'CpuUtilization',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Cpu Number',
                'width': '87',
                'key': 'CpuNumber',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Thread Name',
                'width': '149',
                'key': 'ThreadName',
                'delta': false
            }
        ];
        this.rows = [
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 100,
                'ThreadId': 6620,
                'ThreadName': 'python_main_application',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 3,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6637,
                'ThreadName': 'Sys\/SysThreadStatus0',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 7180,
                'ThreadName': 'BSS\/TcpServerSend0',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 3,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 7174,
                'ThreadName': 'BSS\/TcpServerSend1',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 3,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 7176,
                'ThreadName': 'BSS\/SimpleTcpClient0',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 1,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6638,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued0',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 7179,
                'ThreadName': 'BSS\/SimpleTcpClient1',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6639,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued1',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 2,
                'ThreadId': 8179,
                'ThreadName': 'BSS\/SimpleTcpClient2',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 1,
                'ThreadId': 6640,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued2',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 1,
                'MaxCpuUtilization': 3,
                'ThreadId': 7375,
                'ThreadName': 'BSS\/SimpleTcpClient3',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 1,
                'MaxCpuUtilization': 1,
                'ThreadId': 6641,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued3',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient4',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 1,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6642,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued4',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient5',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6643,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued5',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient6',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6644,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued6',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient7',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6645,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued7',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient8',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6646,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued8',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient9',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6647,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued9',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient10',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 2,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6648,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued10',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 0,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': -1,
                'ThreadName': 'BSS\/SimpleTcpClient11',
                'ThreadPriority': 0
            },
            {
                'CpuNumber': 1,
                'CpuUtilization': 0,
                'MaxCpuUtilization': 0,
                'ThreadId': 6649,
                'ThreadName': 'BSS\/TimestampedBitsIfQueued11',
                'ThreadPriority': 0
            }
        ];
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__ = __webpack_require__("../../../../../src/app/settings/settings.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__node_modules_tablr_tablr__ = __webpack_require__("../../../../tablr/tablr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["E" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__settings_settings_component__["a" /* SettingsComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__node_modules_tablr_tablr__["a" /* TablrModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/settings/settings.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "input[type=\"range\"] {\r\n\twidth: 250px;\r\n}\r\ninput[type=\"color\"] {\r\n\tborder-radius: 8px 0 8px 0;\r\n}\r\nspan{\r\n\tdisplay: inline-block;\r\n  width: 350px;\r\n  text-align: right;\r\n  color: #819aa5;\r\n}\r\ninput {\r\n\tclear: both;\r\n\tmargin-top: 8px;\r\n\tmargin-left: 8px;\r\n\ttext-align: right;\r\n}\r\n.settingsBox {\r\n\twidth: 700px;\r\n\theight: 400px;\r\n\tmargin-left: calc(50% - 350px);\r\n\tpadding: 10px;\r\n\tbox-shadow: 1px 1px 5px black;\r\n\tbackground-color: #1D1F27;\r\n\tborder: 1px solid black;\r\n\tborder-radius: 5px;\r\n\tposition: relative;\r\n}\r\n.button {\r\n\tposition: absolute;\r\n\ttop: 0;\r\n\tright: 0;\r\n\tmargin-top: 10px;\r\n\tmargin-right: 10px;\r\n\tpadding: 7px;\r\n\tbackground-color: #2a2e3d;\r\n\tborder-radius: 5px;\r\n\tborder: 2px solid #111320;\r\n\tbox-shadow: 1px 1px 1px black;\r\n\tcolor: #DDDDDD;\r\n\ttransition: 0.3s;\r\n}\r\n.button:hover{\r\n\ttransition: 0.3s;\r\n\tbox-shadow: 2px 2px 5px black;\r\n\tcursor: pointer;\r\n\t-webkit-transform: translateY(-2px);\r\n\t        transform: translateY(-2px);\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"settingsBox\">\n        <span>Header Background Color (headerBgColor)</span>\n        <input type=\"color\" [(ngModel)]=\"headerBgColor\"/>\n        <br>\n        <span>Even Row Background Color (evenRowBgColor)</span>\n        <input type=\"color\" [(ngModel)]=\"evenRowBgColor\"/>\n        <br>\n        <span>Odd Row Background Color (oddRowBgColor)</span>\n        <input type=\"color\" [(ngModel)]=\"oddRowBgColor\"/>\n        <br>\n        <span>Header Font Color (headerFontColor)</span>\n        <input type=\"color\" [(ngModel)]=\"headerFontColor\"/>\n        <br>\n        <span>Cell Font Color (fontColor)</span>\n        <input type=\"color\" [(ngModel)]=\"fontColor\"/>\n        <br>\n        <span>Column Border Color (columnBorderColor)</span>\n        <input type=\"color\" [(ngModel)]=\"columnBorderColor\"/>\n        <br>\n        <span>Header Font Size (headerFontSize))</span>\n        <input type=\"range\" [(ngModel)]=\"headerFontSize\" min=\"12\" max=\"18\" />\n        <br>\n        <span>Cell Font Size (fontSize))</span>\n        <input type=\"range\" [(ngModel)]=\"fontSize\" min=\"10\" max=\"16\" />\n        <br>\n        <span>Cell Padding (cellPadding)</span>\n        <input type=\"range\" [(ngModel)]=\"cellPadding\" min=\"0\" max=\"15\" />\n        <br>\n        <span>Column Border Width(columnBorderWidth)</span>\n        <input type=\"range\" [(ngModel)]=\"columnBorderWidth\" min=\"0\" max=\"3\" />\n        <br>\n        <span>Tablr Height (tablrHeight)</span>\n        <input type=\"range\" min=\"50\" max=\"1500\" [(ngModel)]=\"tablrHeight\">\n        <br>\n        <span>Fixed Header (fixedHeader)</span>\n        <input type=\"checkbox\" (change)=\"fixedHeaderChanged()\" [checked]=\"fixedHeader\">\n        <div class=\"button\" (click)=\"generateHtml()\" >Generate HTML</div>\n</div>\n\n<tablr [tablrWidth]=\"'720px'\"\n        [tablrHeight]=\"tablrHeight + 'px'\"\n        [columns]=\"columns\"\n        [rows]=\"rows\"\n        [tablrLeft]=\"'calc(50% - 350px)'\"\n        [tablrTop]=\"'525px'\"\n        [cellPadding]=\"cellPadding + 'px'\"\n        [evenRowBgColor]=\"evenRowBgColor\"\n        [oddRowBgColor]=\"oddRowBgColor\"\n        [columnBorderColor]=\"columnBorderColor\"\n        [columnBorderWidth]=\"columnBorderWidth + 'px'\"\n        [headerBgColor]=\"headerBgColor\"\n        [fontColor]=\"fontColor\"\n        [headerFontColor]=\"headerFontColor\"\n        [fixedHeader]=\"fixedHeader\"\n        [fontSize]=\"fontSize + 'px'\"\n        [headerFontSize]=\"headerFontSize + 'px'\">\n</tablr>"

/***/ }),

/***/ "../../../../../src/app/settings/settings.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SettingsComponent = (function () {
    function SettingsComponent() {
        this.columns = [
            {
                'visible': 'true',
                'label': 'Name',
                'width': '200',
                'key': 'name',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Occupation',
                'width': '200',
                'key': 'occupation',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Hair Color',
                'width': '87',
                'key': 'hairColor',
                'delta': false
            },
            {
                'visible': 'true',
                'label': 'Age',
                'width': '149',
                'key': 'age',
                'delta': false
            }
        ];
        this.rows = [
            {
                'name': 'Phillip Philnour',
                'age': 24,
                'occupation': 'Extreme Pilot',
                'hairColor': 'Brown'
            },
            {
                'name': 'John Doe',
                'age': 56,
                'occupation': 'Extreme Pilot',
                'hairColor': 'black'
            },
            {
                'name': 'Steven Johnson',
                'age': 22,
                'occupation': 'Boxer',
                'hairColor': 'brown'
            },
            {
                'name': 'Zachary Phillipson',
                'age': 33,
                'occupation': 'Track Athlete',
                'hairColor': 'blonde'
            },
            {
                'name': 'Bill Cephus',
                'age': 67,
                'occupation': 'Retired',
                'hairColor': 'gray'
            },
            {
                'name': 'John Taco',
                'age': 29,
                'occupation': 'Taco Chef',
                'hairColor': 'black'
            },
            {
                'name': 'John Burger',
                'age': 26,
                'occupation': 'Hair Stylist',
                'hairColor': 'brown'
            },
            {
                'name': 'Carmen Santa-Claus',
                'age': 35,
                'occupation': 'Toy Store Owner',
                'hairColor': 'black'
            },
            {
                'name': 'John-Jacob Jungleheimerschmidt',
                'age': 34,
                'occupation': 'Having the same name as everybody else.',
                'hairColor': 'blonde'
            },
            {
                'name': 'Gherrod Diolosa',
                'age': 51,
                'occupation': 'Tera Melos Biggest Fan',
                'hairColor': 'black'
            },
            {
                'name': 'Phendo Jendo',
                'age': 22,
                'occupation': 'Yoga Master',
                'hairColor': 'brown'
            },
            {
                'name': 'Phillip Philnour',
                'age': 24,
                'occupation': 'Extreme Pilot',
                'hairColor': 'Brown'
            },
            {
                'name': 'John Doe',
                'age': 56,
                'occupation': 'Extreme Pilot',
                'hairColor': 'black'
            },
            {
                'name': 'Steven Johnson',
                'age': 22,
                'occupation': 'Boxer',
                'hairColor': 'brown'
            },
            {
                'name': 'Zachary Phillipson',
                'age': 33,
                'occupation': 'Track Athlete',
                'hairColor': 'blonde'
            },
            {
                'name': 'Bill Cephus',
                'age': 67,
                'occupation': 'Retired',
                'hairColor': 'gray'
            },
            {
                'name': 'John Taco',
                'age': 29,
                'occupation': 'Taco Chef',
                'hairColor': 'black'
            },
            {
                'name': 'John Burger',
                'age': 26,
                'occupation': 'Hair Stylist',
                'hairColor': 'brown'
            },
            {
                'name': 'Carmen Santa-Claus',
                'age': 35,
                'occupation': 'Toy Store Owner',
                'hairColor': 'black'
            },
            {
                'name': 'John-Jacob Jungleheimerschmidt',
                'age': 34,
                'occupation': 'Having the same name as everybody else.',
                'hairColor': 'blonde'
            },
            {
                'name': 'Gherrod Diolosa',
                'age': 51,
                'occupation': 'Tera Melos Biggest Fan',
                'hairColor': 'black'
            },
            {
                'name': 'Phendo Jendo',
                'age': 22,
                'occupation': 'Yoga Master',
                'hairColor': 'brown'
            }
        ];
    }
    SettingsComponent.prototype.ngOnInit = function () {
        this.headerBgColor = '#2a2e3d';
        this.evenRowBgColor = '#262729';
        this.oddRowBgColor = '#2F3135';
        this.tablrHeight = 388;
        this.tablrWidth = '602px';
        this.cellPadding = 5;
        this.headerFontColor = '#dddddd';
        this.fontColor = '#ccc9c9';
        this.headerFontSize = 14;
        this.fontSize = 12;
        this.columnBorderColor = '#3D4357';
        this.columnBorderWidth = 1;
        this.fixedHeader = false;
    };
    SettingsComponent.prototype.fixedHeaderChanged = function () {
        this.fixedHeader = !this.fixedHeader;
    };
    SettingsComponent.prototype.generateHtml = function () {
        var htmlText = "\n        &lttablr [tablrWidth]=\"'720px'\"\n        [tablrHeight]=\"" + this.tablrHeight + " + 'px'\"\n        [columns]=\"columns\"\n        [rows]=\"rows\"\n        [cellPadding]=\"" + this.cellPadding + " + 'px'\"\n        [evenRowBgColor]=\"" + this.evenRowBgColor + "\"\n        [oddRowBgColor]=\"" + this.oddRowBgColor + "\"\n        [columnBorderColor]=\"" + this.columnBorderColor + "\"\n        [columnBorderWidth]=\"" + this.columnBorderWidth + " + 'px'\"\n        [headerBgColor]=\"" + this.headerBgColor + "\"\n        [fontColor]=\"" + this.fontColor + "\"\n        [headerFontColor]=\"" + this.headerFontColor + "\"\n        [fixedHeader]=\"" + this.fixedHeader + "\"\n        [fontSize]=\"" + this.fontSize + " + 'px'\"\n        [headerFontSize]=\"" + this.headerFontSize + " + 'px'\">\n&lt/tablr&gt;\n        ";
        var wnd = window.open("_blank");
        // wnd.document.write("Copy and paste the following HTML: \n" + htmlText);
        wnd.document.write(htmlText);
    };
    SettingsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'settings',
            template: __webpack_require__("../../../../../src/app/settings/settings.component.html"),
            styles: [__webpack_require__("../../../../../src/app/settings/settings.component.css")],
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["_4" /* ViewEncapsulation */].None
        }),
        __metadata("design:paramtypes", [])
    ], SettingsComponent);
    return SettingsComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_7" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map