function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Shared-module-employee-employee-module"], {
  /***/
  "./src/app/Shared/module/employee/employee.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Shared/module/employee/employee.component.ts ***!
    \**************************************************************/

  /*! exports provided: EmployeeComponent */

  /***/
  function srcAppSharedModuleEmployeeEmployeeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeComponent", function () {
      return EmployeeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _pipes_checkString_pipe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../../pipes/checkString.pipe */
    "./src/app/Shared/pipes/checkString.pipe.ts");
    /* harmony import */


    var _Services_employeeDataHandler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../Services/employeeDataHandler.service */
    "./src/app/Shared/Services/employeeDataHandler.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EmployeeComponent_span_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Please enter vaid user id");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EmployeeComponent_tr_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var item_r2 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.title);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.body);
      }
    }

    var EmployeeComponent = /*#__PURE__*/function () {
      function EmployeeComponent(employeeDataHandlerService, router) {
        _classCallCheck(this, EmployeeComponent);

        this.employeeDataHandlerService = employeeDataHandlerService;
        this.router = router;
      }

      _createClass(EmployeeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.populateTable();
        }
      }, {
        key: "populateTable",
        value: function populateTable() {
          var _this = this;

          this.employeeDataHandlerService.getData().subscribe(function (dataTable) {
            _this.tableDataPermanent = dataTable.data;
            _this.tableData = dataTable.data;
          });
        }
      }, {
        key: "addEntry",
        value: function addEntry() {
          this.router.navigate(["home/" + this.userID]);
        }
      }, {
        key: "search",
        value: function search(value) {
          var temp = [];

          for (var index = 0; index < this.tableDataPermanent.length; index++) {
            if (this.tableDataPermanent[index].name.includes(value)) {
              temp.push(this.tableDataPermanent[index]);
            }
          }

          if (value == "") {
            this.tableData = this.tableDataPermanent;
          }

          this.tableData = temp;
        }
      }]);

      return EmployeeComponent;
    }();

    EmployeeComponent.ɵfac = function EmployeeComponent_Factory(t) {
      return new (t || EmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_Services_employeeDataHandler_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeDataHandlerService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    EmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EmployeeComponent,
      selectors: [["app-employee"]],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵProvidersFeature"]([_pipes_checkString_pipe__WEBPACK_IMPORTED_MODULE_1__["CheckStringPipe"]])],
      decls: 18,
      vars: 3,
      consts: [[1, "table_container"], [1, "eventHolder"], [3, "click"], ["type", "text", "placeholder", "Enter user id", 3, "ngModel", "ngModelChange"], [4, "ngIf"], [1, "tableHoder"], [4, "ngFor", "ngForOf"]],
      template: function EmployeeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeComponent_Template_button_click_2_listener() {
            return ctx.addEntry();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "GET User");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "input", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function EmployeeComponent_Template_input_ngModelChange_4_listener($event) {
            return ctx.userID = $event;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, EmployeeComponent_span_5_Template, 2, 0, "span", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "thead");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Id");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Body");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, EmployeeComponent_tr_17_Template, 7, 3, "tr", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.userID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.userID);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tableData);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]],
      styles: [".table_container[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n    height: 100%;\n    flex-direction: column;\n    margin-top: 60%;\n}\n.eventHolder[_ngcontent-%COMP%]   .tableHoder[_ngcontent-%COMP%]{\n    display: flex;\n    width: 100%;\n    height: 100%;\n\n}\n.eventHolder[_ngcontent-%COMP%]{\nmargin: 5%;\nflex-direction: row;\nalign-items: center;\nalign-content: space-around;\n}\n.eventHolder[_ngcontent-%COMP%]    > button[_ngcontent-%COMP%]{\nmargin-right: 20%;\n}\ntable[_ngcontent-%COMP%] {\n    border-collapse: collapse;\n}\ntable[_ngcontent-%COMP%], th[_ngcontent-%COMP%], td[_ngcontent-%COMP%] {\n  border: 1px solid black;\n\n}\nth[_ngcontent-%COMP%], td[_ngcontent-%COMP%]{\n  width: 200px;\n  height: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvU2hhcmVkL21vZHVsZS9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLFdBQVc7SUFDWCxZQUFZO0lBQ1osc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixXQUFXO0lBQ1gsWUFBWTs7QUFFaEI7QUFDQTtBQUNBLFVBQVU7QUFDVixtQkFBbUI7QUFDbkIsbUJBQW1CO0FBQ25CLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtFQUNFLHVCQUF1Qjs7QUFFekI7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9TaGFyZWQvbW9kdWxlL2VtcGxveWVlL2VtcGxveWVlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGVfY29udGFpbmVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogNjAlO1xufVxuLmV2ZW50SG9sZGVyIC50YWJsZUhvZGVye1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuXG59XG4uZXZlbnRIb2xkZXJ7XG5tYXJnaW46IDUlO1xuZmxleC1kaXJlY3Rpb246IHJvdztcbmFsaWduLWl0ZW1zOiBjZW50ZXI7XG5hbGlnbi1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG59XG4uZXZlbnRIb2xkZXIgPiBidXR0b257XG5tYXJnaW4tcmlnaHQ6IDIwJTtcbn1cbnRhYmxlIHtcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xufVxuXG50YWJsZSwgdGgsIHRkIHtcbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XG5cbn1cbnRoLCB0ZHtcbiAgd2lkdGg6IDIwMHB4O1xuICBoZWlnaHQ6IDIwcHg7XG59XG4iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-employee",
          templateUrl: "./employee.component.html",
          styleUrls: ["./employee.component.css"],
          providers: [_pipes_checkString_pipe__WEBPACK_IMPORTED_MODULE_1__["CheckStringPipe"]]
        }]
      }], function () {
        return [{
          type: _Services_employeeDataHandler_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeDataHandlerService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Shared/module/employee/employee.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Shared/module/employee/employee.module.ts ***!
    \***********************************************************/

  /*! exports provided: EmployeeModule */

  /***/
  function srcAppSharedModuleEmployeeEmployeeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeModule", function () {
      return EmployeeModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./employee.component */
    "./src/app/Shared/module/employee/employee.component.ts");
    /* harmony import */


    var _employee_routing__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./employee.routing */
    "./src/app/Shared/module/employee/employee.routing.ts");
    /* harmony import */


    var _shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../shared.module */
    "./src/app/Shared/shared.module.ts");

    var EmployeeModule = /*#__PURE__*/_createClass(function EmployeeModule() {
      _classCallCheck(this, EmployeeModule);
    });

    EmployeeModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: EmployeeModule
    });
    EmployeeModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function EmployeeModule_Factory(t) {
        return new (t || EmployeeModule)();
      },
      providers: [],
      imports: [[_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _employee_routing__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutesModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](EmployeeModule, {
        declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"]],
        imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _employee_routing__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutesModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], _employee_routing__WEBPACK_IMPORTED_MODULE_2__["EmployeeRoutesModule"]],
          declarations: [_employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"]],
          providers: []
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/Shared/module/employee/employee.routing.ts":
  /*!************************************************************!*\
    !*** ./src/app/Shared/module/employee/employee.routing.ts ***!
    \************************************************************/

  /*! exports provided: EmployeeRoutesModule */

  /***/
  function srcAppSharedModuleEmployeeEmployeeRoutingTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmployeeRoutesModule", function () {
      return EmployeeRoutesModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _employee_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./employee.component */
    "./src/app/Shared/module/employee/employee.component.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _insert_insert_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./insert/insert.component */
    "./src/app/Shared/module/employee/insert/insert.component.ts");

    var routes = [{
      path: "",
      component: _employee_component__WEBPACK_IMPORTED_MODULE_1__["EmployeeComponent"]
    }, {
      path: ":id",
      component: _insert_insert_component__WEBPACK_IMPORTED_MODULE_3__["InsertComponent"]
    }];

    var EmployeeRoutesModule = /*#__PURE__*/_createClass(function EmployeeRoutesModule() {
      _classCallCheck(this, EmployeeRoutesModule);
    });

    EmployeeRoutesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
      type: EmployeeRoutesModule
    });
    EmployeeRoutesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
      factory: function EmployeeRoutesModule_Factory(t) {
        return new (t || EmployeeRoutesModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](EmployeeRoutesModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](EmployeeRoutesModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=Shared-module-employee-employee-module-es5.js.map