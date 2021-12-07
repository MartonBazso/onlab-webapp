import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SchoolViewComponent } from './school-view/school-view.component';
import { MaterialModule } from 'src/app/material.module';
import { SchoolEditComponent } from './school-edit/school-edit.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SchoolViewComponent,
    SchoolEditComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SchoolModule { }
