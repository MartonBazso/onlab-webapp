import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DeleteDialogComponent } from '../delete-dialog/delete-dialog.component';
import { CrudService } from '../services/crud.service';

@Component({
  selector: 'app-delete-button',
  templateUrl: './delete-button.component.html',
  styleUrls: ['./delete-button.component.scss']
})
export class DeleteButtonComponent implements OnInit {

  @Input() service: CrudService;
  @Input() id: number;
  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  delete() {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.delete(this.id).subscribe(res => {
          this.service.list();
        });
      }
    });
  }
}
