import {Component,Output,EventEmitter} from "@angular/core"
import {Employee} from "../Models/employee"
import {EmployeeService} from "../Logics/EmployeeService"
@Component({
    selector:'employee-add',
    templateUrl:'./emp.add.component.html'
})
export class EmployeeAddComponent{
    @Output() OnSave:EventEmitter<void>=new EventEmitter<void>();
    @Output() OnCancel:EventEmitter<void>=new EventEmitter<void>();
    constructor(private eLogic:EmployeeService){
    }
    SaveEmployee():void{
        this.eLogic.SaveEmployee
        (new Employee("E",50000));
        this.OnSave.emit();
    }
    HideAddNew():void{
        this.OnCancel.emit();
    }
}