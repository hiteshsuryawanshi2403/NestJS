
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FieldConfig } from '../interface/field.interface';
@Component({
  selector: 'app-button',
  template: `
<div class="full-width margin-top" [formGroup]="group">
<div fxFlex></div>
<button type="submit" mat-raised-button color="primary">{{field.label}}</button>
</div>
`,
  styles: []
})
export class ButtonComponent implements OnInit {
  field: FieldConfig;
  group: FormGroup;
  constructor() {}
  ngOnInit() {}
}
