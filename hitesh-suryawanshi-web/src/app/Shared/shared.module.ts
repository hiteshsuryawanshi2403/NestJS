import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatTabsModule } from "@angular/material/tabs";
import { FlexLayoutModule } from "@angular/flex-layout";
import { InputComponent } from "./dynamicForm/input/input.component";
import { ButtonComponent } from "./dynamicForm/button/button.component";
import { SelectComponent } from "./dynamicForm/select/select.component";
import { RadiobuttonComponent } from "./dynamicForm/radiobutton/radiobutton.component";
import { DynamicFieldDirective } from "./dynamicForm/dynamic-field/dynamic-field.directive";
import { CheckboxComponent } from "./dynamicForm/checkbox/checkbox.component";
import { DynamicFormComponent } from "./dynamicForm/dynamic-form/dynamic-form.component";
import { MaterialModule } from "../material.module";
import { InsertComponent } from "./module/employee/insert/insert.component";
import { CheckStringPipe } from "./pipes/checkString.pipe";

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [
    MaterialModule,
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    FlexLayoutModule,
    MatTabsModule,
    InsertComponent,
    CheckStringPipe,
  ],
  declarations: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    CheckboxComponent,
    DynamicFieldDirective,
    DynamicFormComponent,
    InsertComponent,
    CheckStringPipe,
  ],
  providers: [CheckStringPipe],
  entryComponents: [
    InputComponent,
    ButtonComponent,
    SelectComponent,
    RadiobuttonComponent,
    CheckboxComponent,
  ],
})
export class SharedModule {}
