import {NgModule} from "@angular/core"
import {AppComponent} from "./app.component"
import {BrowserModule} from "@angular/platform-browser"
import { EmployeeModule } from "../EmployeeModule/emp.module";

@NgModule({
    imports:[BrowserModule,EmployeeModule],
    declarations:[AppComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}