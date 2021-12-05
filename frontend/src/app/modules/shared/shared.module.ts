import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MaterialModule } from 'src/app/material.module';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';



@NgModule({
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [
    DeleteDialogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
  ],
})
export class SharedModule { }
