import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { CrudService } from '../../shared/services/crud.service';

@Component({
  selector: 'app-major-view',
  templateUrl: './major-view.component.html',
  styleUrls: ['./major-view.component.scss']
})
export class MajorViewComponent implements OnInit {

  majors = [];
  id: any;
  selectedSchool: any;

  constructor(public dialog: MatDialog,
    private service: CrudService,
    private router: Router,
    private activatedRoute: ActivatedRoute) {
    service.url = 'majors';
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.id = params.id;
    });

    if (this.id) {
      this.service.url = "schools";
      this.service.get(this.id).subscribe(res => {
        this.selectedSchool = res;

        this.service.url = "majors";
        this.service.list();
      });

    } else {

      this.service.list();
    }

    this.service.entities.subscribe(res => {
      if (this.id) {
        this.majors = res.filter(x => x.schoolId == this.id);
        return;
      }
      this.majors = res;
    });
  }

  deleteMajor(subject: any) {
    const dialogRef = this.dialog.open(DeleteDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result === true) {
        this.service.delete(subject.id).subscribe(res => {
          this.service.list();
        });
      }
    });
  }

  editMajor(subject: any) {
    if (this.id) {
      this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute.parent });
      return;
    }
    this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute });
  }

  createMajor() {
    if (this.id) {
      this.router.navigate(["create"], { relativeTo: this.activatedRoute.parent });
      return;
    }
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  navigate(id: number) {
    this.router.navigate(["subjects", id]);
  }
}
