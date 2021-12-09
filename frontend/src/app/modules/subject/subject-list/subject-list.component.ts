import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../../major/services/major.service';
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
}
