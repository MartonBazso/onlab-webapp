import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { IdNameModel } from 'src/app/modules/shared/models/id-name.interface';
import { FileService } from '../services/file.service';
import { FileUploadDialogComponent } from './file-upload-dialog/file-upload-dialog.component';
import { saveAs } from 'file-saver';

@Component({
  selector: 'app-file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
  providers: [FileService]
})
export class FileUploadComponent implements OnInit {
  @Input() subjectId: number;
  public dataSource: MatTableDataSource<IdNameModel>;
  displayedColumns: string[] = ['fileName', 'uploadedBy', 'uploadedAt', 'download'];
  constructor(private dialog: MatDialog, private fileService: FileService) { }

  ngOnInit(): void {
    this.fileService.getFiles(this.subjectId);
    this.fileService.files.subscribe(result => {
      this.dataSource = new MatTableDataSource(result);
    });
  }

  openFileDialog() {
    this.dialog.open(FileUploadDialogComponent, {
      width: '1000px',
      height: '1000px',
      data: {
        subjectId: this.subjectId,
      },
    }).afterClosed().subscribe(result => {
      this.fileService.getFiles(this.subjectId);
    });
  }

  downloadFile(fileId: number) {
    this.fileService.downloadFile(fileId).subscribe(result => {
        saveAs(result);
    });

  }
}
