"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var employee_1 = require("../Models/employee");
var EmployeeService = /** @class */ (function () {
    function EmployeeService() {
        this.Employees = new Array();
        this.Employees.push(new employee_1.Employee("a", 1000));
        this.Employees.push(new employee_1.Employee("b", 2000));
        this.Employees.push(new employee_1.Employee("c", 3000));
    }
    EmployeeService.prototype.GetEmployees = function () {
        return this.Employees;
    };
    EmployeeService.prototype.SaveEmployee = function (e) {
        this.Employees.push(e);
    };
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;
//# sourceMappingURL=EmployeeService.js.map