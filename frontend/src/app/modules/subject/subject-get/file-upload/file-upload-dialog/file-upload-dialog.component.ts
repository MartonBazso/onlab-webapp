import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FileUploader } from 'ng2-file-upload';

@Component({
  selector: 'app-file-upload-dialog',
  templateUrl: './file-upload-dialog.component.html',
  styleUrls: ['./file-upload-dialog.component.scss']
})
export class FileUploadDialogComponent implements OnInit {
  public uploader: FileUploader = new FileUploader({
    url: this.baseUrl + "/materials/upload",
    headers: [{ name: 'Authorization', value: 'Bearer ' + localStorage.getItem('id_token') }],
    additionalParameter: { subjectId: this.data.subjectId}
  });

  public hasBaseDropZoneOver: boolean = false;
  constructor(@Inject('BASE_URL') private baseUrl: string, @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit(): void {

  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }
}
