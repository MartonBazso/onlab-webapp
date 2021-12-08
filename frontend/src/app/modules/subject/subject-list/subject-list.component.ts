import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../../major/services/major.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { CrudService } from '../../shared/services/crud.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss']
})
export class SubjectListComponent implements OnInit {
  subjects = [];
  majorId: any;
  selectedMajor: any;
  constructor(public dialog: MatDialog,
    private service: SubjectService,
    private majorService: MajorService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.majorId = params.id;
    });

    if (this.majorId) {
      this.majorService.get(this.majorId).subscribe(res => {
        if (!res) return;
        this.selectedMajor = res;
      });
    }
    this.service.list();
    this.service.entities.subscribe(res => {
      if (this.majorId) {
        this.subjects = res.filter(x => x.majorId == this.majorId);
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
    this.router.navigate(["subjects", "edit", subject.id]);
  }

  createSubject() {
    this.router.navigate(["subjects", "create"]);
  }

  navigate(id: number) {
    this.router.navigate(["subjects", "details", id]);
  }
}
