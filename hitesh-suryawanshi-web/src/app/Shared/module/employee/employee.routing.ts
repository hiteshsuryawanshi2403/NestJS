import { Routes, RouterModule } from "@angular/router";
import { EmployeeComponent } from "./employee.component";
import { NgModule } from "@angular/core";
import { InsertComponent } from "./insert/insert.component";

const routes: Routes = [
  {
    path: "",
    component: EmployeeComponent,
  },
  {
    path: ":id",
    component: InsertComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutesModule {}
