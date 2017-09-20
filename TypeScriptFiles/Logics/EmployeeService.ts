import { Employee } from "../Models/employee";
export class EmployeeService    
{
    private  Employees:Array<Employee>;
    constructor(){
     this.Employees=new Array<Employee>();
     this.Employees.push(new Employee("a",1000));
     this.Employees.push(new Employee("b",2000));
     this.Employees.push(new Employee("c",3000));
    }
    GetEmployees(){
        return this.Employees;
    }
    SaveEmployee(e:Employee){
        this.Employees.push(e);
    }
}

