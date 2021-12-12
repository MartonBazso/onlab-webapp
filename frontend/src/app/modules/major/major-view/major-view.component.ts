import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router, ActivatedRoute } from '@angular/router';
import { SchoolService } from '../../school/services/school.service';
import { DeleteDialogComponent } from '../../shared/delete-dialog/delete-dialog.component';
import { SearchService } from '../../shared/search/search.service';
import { CrudService } from '../../shared/services/crud.service';
import { MajorService } from '../services/major.service';

@Component({
  selector: 'app-major-view',
  templateUrl: './major-view.component.html',
  styleUrls: ['./major-view.component.scss'],
  providers: [SearchService]
})
export class MajorViewComponent implements OnInit {

  majors = [];
  schoolId: any;
  selectedSchool: any;

  constructor(public dialog: MatDialog,
    public service: MajorService,
    private schoolService: SchoolService,
    private searchService: SearchService,
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
        this.searchService.setEntities(res.filter(x => x.schoolId == this.schoolId));
        return;
      }
      this.searchService.setEntities(res);
    });

    this.searchService.entities.subscribe(res => {
      this.majors = res;
    });
  }
}
