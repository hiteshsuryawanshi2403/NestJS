import { Component, OnInit, ViewChild } from "@angular/core";
import { MatTabGroup } from "@angular/material/tabs";
import { DynamicFormComponent } from "./Shared/dynamicForm/dynamic-form/dynamic-form.component.js";
import { FieldConfig } from "./Shared/dynamicForm/interface/field.interface.js";
import { Validators } from "@angular/forms";
import { BehaviorSubject } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent implements OnInit {
  ngOnInit(): void {}
}
