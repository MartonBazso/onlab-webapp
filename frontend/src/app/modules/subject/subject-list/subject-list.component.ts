import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { CrudService } from '../../shared/services/crud.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  subjects = [];
  id: any;
  selectedMajor: any;
  constructor(public dialog: MatDialog,
    private service: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    service.url = 'subjects';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });

    if (this.id) {
      this.service.url = "schools";
      this.service.get(this.id).subscribe(res => {
        this.selectedMajor = res;

        this.service.url = "majors";
        this.service.list();
      });

    } else {

      this.service.list();
    }

    this.service.entities.subscribe(res => {
      if (this.id) {
        this.subjects = res.filter(x => x.schoolId == this.id);
        return;
      }
      this.subjects = res;
    });
  }

  deleteSubject(subject: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.delete(subject.id).subscribe(res => {
          console.log(res);
        });
      }
    });
  }

  editSubject(subject: any) {
    if (this.id) {
      this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute.parent });
      return;
    }
    this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute });
  }

  createSubject() {
    if (this.id) {
      this.router.navigate(["create"], { relativeTo: this.activatedRoute.parent });
      return;
    }
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  navigate(id: number) {
    console.log(id);
    //this.router.navigate(["subjects", id]);
  }
}
