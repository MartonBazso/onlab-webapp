import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubjectListComponent } from './subject-list/subject-list.component';
import { MaterialModule } from 'src/app/material.module';
import { SubjectEditComponent } from './subject-edit/subject-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubjectGetComponent } from './subject-get/subject-get.component';
import { SharedModule } from '../shared/shared.module';
import { SubjectGetModule } from './subject-get/subject-get.module';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    SubjectListComponent,
    SubjectEditComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    SubjectGetModule,
  ]
})
export class SubjectModule { }
