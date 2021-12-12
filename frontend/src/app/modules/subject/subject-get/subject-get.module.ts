import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileUploadDialogComponent } from './file-upload/file-upload-dialog/file-upload-dialog.component';
import { SubjectGetComponent } from './subject-get.component';
import { FileUploadModule } from 'ng2-file-upload';
import { PostViewComponent } from './post-view/post-view.component';
import { PostCardComponent } from './post-view/post-card/post-card.component';


@NgModule({
  declarations: [
    FileUploadComponent,
    FileUploadDialogComponent,
    SubjectGetComponent,
    PostViewComponent,
    PostCardComponent,
  ],
  exports: [
    SubjectGetComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    ReactiveFormsModule,
    FileUploadModule,
  ]
})
export class SubjectGetModule { }
