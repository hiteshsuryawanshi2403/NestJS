import { NgModule } from "@angular/core";
import { EmployeeComponent } from "./employee.component";
import { EmployeeRoutesModule } from "./employee.routing";
import { SharedModule } from "../../shared.module";
@NgModule({
  imports: [SharedModule, EmployeeRoutesModule],
  declarations: [EmployeeComponent],
  providers: [],
})
export class EmployeeModule {}
