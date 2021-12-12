import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { MajorService } from '../../major/services/major.service';
import { IdNameModel } from '../../shared/models/id-name.interface';
import { SearchService } from '../../shared/search/search.service';
import { EnumService } from '../../shared/services/enum.service';
import { SubjectService } from '../services/subject.service';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.scss'],
  providers: [SearchService]
})
export class SubjectListComponent implements OnInit {
  subjects = [];
  majorId: any;
  selectedMajor: any;
  categories: IdNameModel[];
  constructor(public dialog: MatDialog,
    private service: SubjectService,
    private majorService: MajorService,
    private searchService: SearchService,
    private activatedRoute: ActivatedRoute,
    private enumService: EnumService,
  ) { }

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
    this.enumService.categories.subscribe(res => {
      this.categories = res;
    });

    this.service.list();
    this.service.entities.subscribe(res => {
      if (this.majorId) {
        this.searchService.setEntities(res.filter(x => x.majorId == this.majorId));
        return;
      }
      this.searchService.setEntities(res);
    });

    this.searchService.entities.subscribe(res => {
      this.subjects = res;
    });
  }

  get categoryName() {
    if (!this.selectedMajor) return "";
    return this.categories.find(x => x.id == this.selectedMajor.category).name;
  }
}
