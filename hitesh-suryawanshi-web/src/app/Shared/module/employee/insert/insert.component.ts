import { EmployeeDataHandlerService } from "src/app/Shared/Services/employeeDataHandler.service";
import { Component, OnInit, ViewChild } from "@angular/core";
import { Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { DynamicFormComponent } from "src/app/Shared/dynamicForm/dynamic-form/dynamic-form.component";

@Component({
  selector: "app-insert",
  templateUrl: "./insert.component.html",
  styleUrls: ["./insert.component.css"],
})
export class InsertComponent implements OnInit {
  body = "";
  OutputitemBuff = true;
  title = "Please enter valid ID";

  constructor(
    private route: ActivatedRoute,
    private employeeDataHandlerService: EmployeeDataHandlerService
  ) {}

  ngOnInit(): void {
    this.getFormData();
  }
  getFormData() {
    console.log(this.route.snapshot.params.id);
    this.employeeDataHandlerService
      .getDataById(this.route.snapshot.params.id)
      .subscribe((dataTable) => {
        this.title = dataTable.data[0].title;
        this.body = dataTable.data[0].body;
      });
  }
}
