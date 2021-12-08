import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../school/services/school.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { CrudService } from '../../shared/services/crud.service';
import { MajorService } from '../services/major.service';

@Component({
  selector: 'app-major-view',
  templateUrl: './major-view.component.html',
  styleUrls: ['./major-view.component.scss']
})
export class MajorViewComponent implements OnInit {

  majors = [];
  schoolId: any;
  selectedSchool: any;

  constructor(public dialog: MatDialog,
    private service: MajorService,
    private schoolService: SchoolService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.schoolId = params.id;
    });

    if (this.schoolId) {
      this.schoolService.get(this.schoolId).subscribe(res => {
        if(!res) return;
        this.selectedSchool = res;
      });
    }
    this.service.list();

    this.service.entities.subscribe(res => {
      if (this.schoolId) {
        this.majors = res.filter(x => x.schoolId == this.schoolId);
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
    if (this.schoolId) {
      this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute.parent });
      return;
    }
    this.router.navigate(["edit", subject.id], { relativeTo: this.activatedRoute });
  }

  createMajor() {
    if (this.schoolId) {
      this.router.navigate(["create"], { relativeTo: this.activatedRoute.parent });
      return;
    }
    this.router.navigate(["create"], { relativeTo: this.activatedRoute });
  }

  navigate(id: number) {
    this.router.navigate(["subjects", id]);
  }
}
