import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from 'src/app/material.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { EditButtonComponent } from './edit-button/edit-button.component';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { DisplayCardComponent } from './display-card/display-card.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DeleteDialogComponent,
    RegisterComponent,
    LoginComponent,
    AddButtonComponent,
    EditButtonComponent,
    DeleteButtonComponent,
    DisplayCardComponent,
  ],
  exports:[
    DeleteButtonComponent,
    EditButtonComponent,
    AddButtonComponent,
    DisplayCardComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule { }
