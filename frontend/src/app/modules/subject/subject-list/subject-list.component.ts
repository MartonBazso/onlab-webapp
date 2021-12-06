import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { SubjectService } from '../services/subject.service';


const ELEMENT_DATA: any[] = [
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
  { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
  { id: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
  { id: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
  { id: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
  { id: 4, name: 'Berylliumddddddddd', weight: 9.0122, symbol: 'Be' },
  { id: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
  { id: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
  { id: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
  { id: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
  { id: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
  { id: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];
@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  subjects = ELEMENT_DATA;
  constructor(public dialog: MatDialog,
    private subjectService: SubjectService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

  deleteSubject(subject: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.subjectService.deleteSubject(subject.id).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  editSubject(subject: any) {
    this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute });
  }

  createSubject() {
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }
}
